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
    "5JXiiicChZk2Sb5x1ehFGJD1JHWEQvXuJD2Js6PLWvdXoryiesxRLdDv2piB79vbFa4T5r2Fy9kDy5Xzcv232RXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ScJxMVUGcNztAZyiNxuaTPAKBtY5BoyA1sYNZDfWmg5rZ2o3LKL54P5f3ZAvCwCUMEBPiepWUsywGJAjMzcKX7B",
  "key1": "24PUC4wqfLVzJNHwmTmwD9Uv6aY9SgWUzPguj5FbV7VU73o8vZL34t8MRyY7vw1K8Pur9sPuCJMM23yWFqHWQZsw",
  "key2": "AD93Cj4wTvvmkdKfJZACTAdqE2LHDnG1ShxrBcyTCaiQL8LAt9JzZen94SuECSAUmZoqHPSeMbw2nXB1HBcWqEk",
  "key3": "39p1HLnY54BeCm3JcFQd4DcKrCcnnfrjFERjzUmVdcvJoU1AdwyJtyFtYoPTNgXhHmHmyZGrdPGD7ha2xFXKAvxk",
  "key4": "2ULqtW8zPAMXkuWCzhNUEdLFZZV6HeoWu7Yg67Bmz37UT46HLxMvUq8SzGHapJmubuHTy2aJqef6Fivsj4RARweP",
  "key5": "2nkxyynkYW5k9kDZw1moVcbjwdHoT4TasWzyQ6Upo42R6WQmsXgWtkXkCZ3wdui3cL4Xv2SkdDvoqGhDairzinJg",
  "key6": "3moarPoHmhRBFgeXRoxxBio3em95g5kKkbHzUX5TsJu8sAHotCau1TpS6vz6a27sDv4rLZ4QPeNMMPBGymnew6gE",
  "key7": "DVMw2eRTg5XaXafkeHscSXJ7vLBgYZEH5T4N6B5CiGC94JJKmAMq1cxscZgkwcT68QcU2pk7rmBY6Ve7jXgz5f8",
  "key8": "dcKxnfsAztbB6UBSmGzuB8Smew7cNcL6jfexRaUD2pfh44gAdXJbWs8ouH9VFPR3FfTLdZ2yBxD8gNiYAjveckq",
  "key9": "4H3ExdPSPDmtzViMudkL2Uwuxh8bFBrWnbyqooFKkKTCfLPdyQTvypcShVdKbn6HHJGzXp1izL7bQ8ssR6sgy2Nd",
  "key10": "2o6QMiyxXkyN7ZWB4a6bXefXBXSSifQ31TnmHoePmiPjPtdivjbBNBgXsqMgXwgccxH53Yt8FsqF4CuoKKHpjXu6",
  "key11": "3H5a9c65ndWHhvb8nzfhH1tXCW7Fs3B38sFMVEvaP7TzjHXGHytMso1xJSvKtrd6mQyeAXeEzvGcWYJEtmXcPdmW",
  "key12": "4HjxpMhHWTmhCEYpHERHQqn51pFvvzkDZ3bAdFMTYQgPdzBsurHQ43WxzgUWHwcMTmLLpgXzsxXSBsUqs6PbbRga",
  "key13": "67KxVDXqyEms9JMjoxzbQ6h2XY6Bw8g3ftievmh8aFZNNgh1J2KMNB5ikYHxT85eKu6oxVoXsRPKSd9ZnBKesqxE",
  "key14": "3H7EvwbaFiwBabS7f4Hm6C9MeXpoWt1rA1nweR26NDqT5fpA46SAKyv8BcdMZpi6j54myLQDL2jhrozkdDXrc1x",
  "key15": "5hkugWaWyJPwZ26gkHtoCAcC9asuRV8GEcKH2gPpgGb4YczPEnDTv9WU2V7Bt7ScdXZersr2wo2Swx5mGCoLs61E",
  "key16": "2tyCNKey25ixHwEoEDG8629UPAzvgzcQrPkp6agUX9W3aQCNhgS8Gy1ZcQYhK9msw8Tok4S1uKc9Y79YXDGu9u9d",
  "key17": "3PsqmFp4ZZLf19QAKjhc66f9UNCU1Ux6ixQ4ZFm3pzuJiMtJvt48m3JVMy7N6evqNF4KJwAaxaqbvUW95d3nGkiS",
  "key18": "65VQstghkK8G6eNwJxsKLJkPFeLDtWza1yA5p6Swn7wXZVuLp9qnPxPT8haRcfmE6B3zcopn5YwWu7rcvHvQY7fZ",
  "key19": "48DELVrqWWXrP5RMarVchy6MZAeTENWJefaWkjduZycj9Pp6EX7EuoQ716bZPQZvwzLM2RpEMtQmHRKR9e8WbGEu",
  "key20": "24gqMj8sbSfx56uXTu2dY5EkQtEHbQZR637rZhR9S5zbR4cEnaVtzvHS1Xde3oFAFvA926aprRH6aSnipfkJjyYu",
  "key21": "3pPK1gUhhjjcZGPjonsm3MqEwjP2nF4EAJoEQ7mq3wgrSrFxYFBe51CNGoEqkY5xsRiVF9GKNT3K3uMn451RKGY4",
  "key22": "2bDLSpHHnL6UKzPGvvgCKWuhNKfbcUw8xLBZsCMydpoHy6GGu9UuRSGVT85PWV5Cqw7ak1nigxKaXbJzJx8Fvq24",
  "key23": "SrAChxsFQrjtmUhDPMjca2kMgRU12AzmT1FgBLVBgTtgj2AZdSW3Y3G4LuzqcZz1ahebac7mHxfAzp2j8DBipKy",
  "key24": "5aFfXMTHUwsXJiQsigU6KARUnHHNQKd6Eo6fKcZCF7xMW9VKRHLxHgxjw8kWMtsJ4xMmno18QQvrkEJGzRDYyLRS",
  "key25": "3eFYb3W7zNQ5EdVxQXDksMPXj5wM9QcMqBMfhiVKRdpcBaMhfntNDc6ewYSmKA5Em3b6PEEtNBF8GfmLR8uuyggm",
  "key26": "4fFEfAn4JkqfCn5d38RYnAUirUDiyTFov1iAfRRqBsRLPf97h3CC7Lgu2kjSkM9MqoQavfQaaAjyWYa8e7ZWwG9i",
  "key27": "4vCbKkPgNQ3abA3KjsqxFyqQrR2eDDyyP1nkyigrrv3SA59TtTLXSVYFwJGrMrhjxMz4xYiA9FSc561Pat9Uh5av"
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
