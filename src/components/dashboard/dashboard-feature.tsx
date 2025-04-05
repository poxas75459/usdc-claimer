/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4emp5XknnX9GP8Knzx8JJ2xyNt4SFWNAt669NSYKBNAECnU79XcbXM559uf2ibpYR2smn6QHbwPnBtoWzPo9cnyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42egzLjujp2gzCtrfuuK2G9htVZpXki4qJUpnfdmTZXjXM7zF1jJrp8znMRr4obbsTzsdmvetsTE8dhzBq485K2w",
  "key1": "5Co8zcW77VoBjPqvpzEzcUwGeH2carBdfbnH9zT1jefoxUdGwKLLnvXtAg5swLMShU2UxpXKF2bFZdpHUoBNdNSK",
  "key2": "4R99i6P7J4cqX9v3Bnaq57n9PiajMQTjQ1gFbvgHsmXibg1gNfDngSzyh1RFqnsGBD71ziwFjPWz4ZU3nYYVBzrd",
  "key3": "5Dwp17nVUsLrgihq7VWfM7DQewa1x9ryiLBQ8hrvYkny7zwz6sW8qNwzq1vTBWDCFYHiHSrBRd9BDGfTTU5o2ZNE",
  "key4": "JyJziCkiMRpcFEWjyMnJyB3YiNciu2myYoC4GpCxTyWG5boGgGyA9atfj2mAuLDs9KhGoFMu9nyF4nU3cfgcBZy",
  "key5": "2e76Q1VKXbVB4MaxdpsFN5HtZnQ1jxd2LBREsx1CF12EkCkWuWZ6EF4XHKyhDReSanm8q7Ck1LrMpisPNHwWGsxJ",
  "key6": "3SGBEhDUfGMebGRkzg5xTijewKRrKBi9X5NAAyMumubivozfVhTFh44iCmNWannAjMWmy8in1ZuMGgxStNjT8NNf",
  "key7": "5iHDH2jdPCDtcFhm1QNUtE4yQovpwKbnFtknrZKGZGkNXwPCmMgwW2nWEZGdJYL22ggwGK4ZbqR5C3W1v51mz4ws",
  "key8": "4AQxxMtBY2aQqnZ53a5PnBAQ86tdT9E2VUojKTPegthnvBRmFpgvvg944Z3L5JRv77XLHswoUu1ChVJmKe5TxjGm",
  "key9": "2wW8wKp3oCH84j5mukpV5VYLD5ZgAbQKYF8bXhDH45Y3c5kt4KjUWqNhfms3wRiuxjyyu7Ceo6QWyGenyWrwsYXs",
  "key10": "3kusn9CgP5ffn2Ubk1NzBmwrXq4e391niG64CjguHmm2GANKm9PCELyBida55j7KuPZ42bN4JoJPGGigUNDuRtV3",
  "key11": "4iRtdvDR6NxrKShgXPksx7BawAndgCBoGkvq4fjKyTCsZv8NNRKfKyHEo12i1uE2nRGje3omAevcRnqQtXn2robu",
  "key12": "4gkrjmRUYMnf5WXWmcfTa9XVmmRLo6nT11xSNk13biCTQCYqBx2iE1qekVhnViRU11LjfqLcFfArhtER3hQnetHJ",
  "key13": "3QsFiWyxQy2orCn1A7z8VU6vi1iAtX9fjxWqdRMUX4JdPcg2tHA5FPdh2efMMRf6TE5a5Zdc4WvrKncEopzEdBfZ",
  "key14": "2wxKDNNVQ82PwkrQknrLD5Sk9rm4vm8Ruamndf5GfTKsR3opz849Z4LyALD3Yj4FJaAaqkP6W4vvM8w5wxFv8npD",
  "key15": "3bZNnpnCNZr8nNTRDMwj4aHgdap9Bq1ivSFWeKvAtNUCz9AgrRNS2Mh3otQJNr22LBpyhW8MfTpCD2ZjU6ApUDnT",
  "key16": "2tSJkKJvVwpLb5Nhn4T57XZq78covrqbKsnZDz68kugtjvQtsPdUtTjXUUoHSgpHMLvs1uLk1iHJdWS2PX16pB5D",
  "key17": "2vgXMCJREhhysUBjhBBDhYenrrF3ChDQXrawc2DXS1wjXyRmv2nEMVciWmwAG1wQp9bwaSKiQXsX3PPe7Wsr6Ntp",
  "key18": "2ov6trvUKjc4w32ieaAUL6YNuuwJYhPpJYde3wBBroaJHiq2KJG7ZQ21NcEfo9erq7pNkQSxVPKRqB9Sdopu4hXw",
  "key19": "5Cb2AKNs1zrsrj99T9FCxBhxS4tR7Ry7HPA6qX3HtdoEwrznf1sZ99bGozpAbyi3111BUh7TtAMxqdT4BHQy6Szz",
  "key20": "2p8MKxokemn79wDEWpAfot2rNrMdCSvmXn5GFFU7Hip4ywnVUEJAWJpYCwkSx2YqyCBGkvc1uneSoUMhdp8ErTet",
  "key21": "22tRCFwzwis5c1AVq8YTSTe9xqfMPGw9FrxpzCusHyiMKqLDyEgZcQL8uErnMc5mo1skz46z7xQF9qjDjAhp3BNv",
  "key22": "5SgNnLWEU5aoZZhTXeNhmQwm6Rt3irZf4267yWh7e1HSnC8be5xBfSHUXp4CWtJp4YgxDzzEQqsLmRisZhE79UCg",
  "key23": "4xFA53k3PdHMknfGFtD8SukscMYUv5rxdfkP1kcvFBFTRHFKyzvVxCvKV42WvEA9dTsCcAPyWAxpMEiXCbFuRLhD",
  "key24": "5gCqYiyeyrBiMX6WizvVdqALR1ZwVngxBWb7cJMXbfVMj1h8YybwURKw5wjJqfrGVq2eFmPWWcv15fnyGGPKgknC",
  "key25": "4FicYGACmdJY8CWfEcGi3wexsK88NMzWffsWWzwiv4VPnEzWRTnuepjkheEvcqgx4jfEXXNL6MgBWUAvELW2fPF3",
  "key26": "4oLWog69dBKPx5wJPuJ4ZhX33gDR1vKSTtFUdMY4XsAkfFr7jdtzesUCqLGJSfhQgjazDpTPvxuiEyL5YaGs9paZ",
  "key27": "2BEizFbvTjfagh8vkRwDuX7d4tUDK5m2B5rqJLqJtK33M3GpLjuvuxbsoWV1XKPkmdK4btcThNRkhXdTCVi1VW3H"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
