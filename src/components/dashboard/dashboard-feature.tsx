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
    "RGEdyDZeT6ZHTTcB481uwHDogCpYL1J8ad3sv3yBNpoSs7xvojVfuWy7y1Kx9xbyJ4S6vNCMNiHQBRQVsTcWLms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muhohCMpvpLbWfWWFfpvxMFZMcBJki1EtToKtgz5qhjJjAzoRdiVRwfwwHK5dUnPkVvNREvryxfaQYh6FUGsjTi",
  "key1": "5c9mgYHT5QmTZBRuaQQDPGjy4LgtSnDWSosPTffq84f9kmC6uVFTMp7eQPoEc3dfEFYgAvqmU1ZWWvWs1tY8LgvA",
  "key2": "3ZAKBp4KxMTJwPw6rxoJ2eZwyBXbPSkipvTJAacyHuQXpLykuz2VMnvzpn2zKwppnC29GsGSModoh5fPfeNM95Pm",
  "key3": "3m7UXP4QaK9TMuVsAofwb6dTtKS7GYcCg6E52xbXreU8ZWA7FBzz1s7WpxVZMnncsJqJnQ6MKuWcc2MnuDtJaR5U",
  "key4": "Bm5yDRS8bVKb4GQ5ULT7KiwZTf5XAwQDerRJ1nBUW34BP4ZqzGYZLAvkRh9bCgZwpzthQERJYQQjFiFAL5PkyNk",
  "key5": "3BuPMVP6sdvnSsJe6oNWWFHTEARdriy8zhnUGLjrEryRRxzfWugrFk96CES1DiUKHWKmesSB7prvzdQpxUFGaNho",
  "key6": "5nXmQ9paUxtyFBX6AzhRvHVPyRaQA4AwAghAFzhddXzrysTP87VwuBFh6bjeYf7UaHUGzPL1HxzAznmesft6se8m",
  "key7": "nc2R5f3CnoFU8KeWb9Dcd4WUCainy4gQA5ucPBLHbdwopvmCUfyFTKWNeK9dQd6jeRaqThcRxXUbdY19juU7q8g",
  "key8": "42XtHgjLAQLALanm7eihgGARjTaEUbpLNSKKeL41rrMFABubNbSQWAaf2f7VKXGFGRCeYqGLZZepQf6rcy1WQt97",
  "key9": "2tw5LbX6WLY6m7fRXRvjsdtWKdMv34nf6AG2ATuFm1B6Yp7yuYZBu3XRVd71YzQtae3W3j9PrWss4KdrCDriFdeY",
  "key10": "bmjdqht6PBm9w5rjnVpVT5GyvXVy9YbXB7gDMVGEFjNNftMC49p3fJkJ8yYdhieKPDh8BVGhc6Fy1zKLRjniv3F",
  "key11": "hUxmczKu1vdkmphj6JX4N3toYV43dfc4udsJhKQKgbLbiL9aUB54ZZzx41SSbhw82d4gVhti131QgA8Xf652ufg",
  "key12": "2GqFQwM8MuKx2kPU2i5baaaL2y8zRC64R3i8xuyEdcHXqUvH8aMRxpq2EmRhfViXkUgMU7AxcXb8pY3MTipvfvUj",
  "key13": "3s77VioqhtAAY7sTuWKX4Wa4jeZSwN96Bj5JQD1e7CoiofztZBvVyz8sEGbVuZKzQgL8Gw4Tj7aGPLhDn7uAtbxa",
  "key14": "3nW6LL8WAoRavjCgWDrPcXrXCyNvwsyVoFsDemmtUUr8XKmxGYxM7jVE3TUV9Ruitxpe7qYC5HHRS9wTWbLcXmiK",
  "key15": "2vc2guuWqLmSebdHiP1eCjPvFSAHj18y8z5C98azjdnad2xDpNFxfo59HxDtdWmM4PRZFKpctbWtop3TXCfitDfq",
  "key16": "XnT9afUUBeAZBx6PPhTkY7QP3SozGvyyVc1JccN3JopEYHTMcqW6tzbg6mThF4ZhrHvGWvZ7a27wyVwoMxUHYTE",
  "key17": "2331cSbRMnDqQ3mnnCYYe5koNDAmfMjNBPV71g3BJ3ZJBDs9enMvFP4HehFLbAKuX3hGoUEMrY13U4HuNAV2dVjN",
  "key18": "2QVMmjDKHqKY93hJLStA7gHFxh9fkZUFGfGhiaQ1TchcbKXXBqDF6sLsG7DsQ58miEEH7QtFEM4dJt15tpX253wH",
  "key19": "4VyWB2opRrUmdBfdwyuoGLLAZsqSBqyQdNbtB3n8jDdnGmw14HtUos3Lem151bgD6amthL4CNw2Gd9hmUjaaCU7b",
  "key20": "4ovNSh62w4v4xHddVWfzsG6VTofv5foCDHAnJQF94EAFKNojvUmxsEDHKV9NvfVbyHMN2scZ7L2JGeydT47LQ2c",
  "key21": "22FLq7G7VVVeJVUKft6zuvF39hFURA9NFBPC25qrxmUKpSLWMufdkyn5D4CbxcrypzrchfvXhZLwAuMQ9DKjKyvk",
  "key22": "5W46T2TF1X1zs7dDbVVPsTukCmyba9BTBTp93ReNjasvZWanYgh2WRWXaFLtRhZxzjDdxzU3wwE9eZPoDGSnMab",
  "key23": "2p1zeE345zwwVtdwtRazfmsianGPcUc72dETFXpN4hudUv3SCq6Ep1Hyje9TRNGVrrnVknfz2NLjMXbNiSRwAe7M",
  "key24": "35n51z1iA5AF5eoH7rm36hAwPFNNKn8AGKnj8USyFYuKKcnAtkuqkJgJqA5ZMtEHnziyqponjbX3G3RWjA2qNsVE"
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
