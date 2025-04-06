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
    "5yKFtTz2w4HCseMfSQxdL8yaAxQSjiJxkfdF7ghhPwFVh79f1xTMskYdNDrag6SAz2Fcoc1FCjY9TbdR34Cudt82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32w7gHmzS1VnHnJjvXEzxQfRb4RbS3qib5UQteYhyZYU8JaLZsoX8eRVorqTYGcVPhvBdRUifZUv2UX7hJqwBSgj",
  "key1": "21BTLaxHcoRAzcsh3HQVnP1ovVVrudC6F4hxSQjbzfZXQXtHJbhCaGP1pP8aCdGakCJoiXsqKtWiQEF7LQepmJKH",
  "key2": "4JCw5Edgrfk78nH2UaQ7NkXCKmXfijUM8WoxpH38TsjxjSup3xZrPNCXNvALitkCuE49rWQejaiiv5vA6ojsMe4x",
  "key3": "sa2AwKio97c33MMVxiP1KWXd3WGEgPGv2Ue5D49KwqkcXKPaYycCrx2FsB89tvps5tQbqn18CsbtLpRRtSGsUPP",
  "key4": "2hcrZXu1sgYvycDssCCXhLsFuHraVYoS7HXjohqcKuKWybvEbwrCYRCpPBi3YdrV1qQNTKW82JUsMo7Kq5zuX2m1",
  "key5": "22mJojkYMAo4VkW6eAipFWhQV3KDRHpH1cjcMcpinjxEKLk7Z8N2E3LTM2yA1gX5iLfiRXoXLGQNs3iARJV7ovPx",
  "key6": "sqzm4TH5ohg1yQRhM2k5QHBog3csZB3Gd3WPBSYQ8A8FRspZtvM4VMGtDCRMSRhHNPZcRgYEfA2mQXCet2EZR5i",
  "key7": "37as7dXUcdKapHAH4PNLcYXaTTK9FRTxKfxkzsYN9MhTtwMiag3ugtxQrK22xP759NXDdY2eFZTJoAkfgPoYbHuZ",
  "key8": "4Snhim5YDfaUb7BskbXwSPTK5Z8NRy86s4pEjJ5mbvE5n4kPMo84jrbQCLkqTTRDKLitG9cESkmUbj3ecZCR6kMa",
  "key9": "43HMzdEG2Wr28JtgYEvuRtPsp8vJaFDudG5tCUvrcZmiyhX8TiSF7C5HrdzfrKf2pZ2x7kK65BP3iWGPs3ACf8sF",
  "key10": "5BemxDWs6nvWTo7CK7NvAF3EDvwqQsYNLZJvTBjP2rgQ8aHSCA8x3GteWC2NfzAatJd4LenHH6w8b1DhzmUd9w5S",
  "key11": "4A84EaqrLrWZTPBSVmsYZV7YMj7kwLzDG7jPjNtnUDi7xqE31gPwQPhVoga54hb6zrsG2fMZGGZK9N2Zi6MFZ4vH",
  "key12": "GVRHgYisfMJYH27vw6i2udHrPTa6oeU8pUU7fesE6Fc4hSJQ3iyD88VtyiSrbadWbVfm6hj7SdT8WhJUMboko4Z",
  "key13": "2ucFPXH8mej8dJiq2dybBSrswyBaaiamJFReCLyWUvvCZtq8Yb7FKAhgf7bgyDs5eaRBM61x3oQxwEA3fV4xKvyz",
  "key14": "ciKfqYYf9VW3Yag5LGsntvhCVatUeUXqMuUcY9cadeQKZyGervpkZyswzJfMeVu1JunLbE61Y8o1wTkzfUdwRV3",
  "key15": "WvHAiNF13iYckf4XJ2goyzgcFdhsorbMWPV9tjRr7KRoL6qZc5oaSeJtFfDzSKuUxogjD2xFJRgEkxRGnD5r2tR",
  "key16": "3YLB3AMCTXtJHy5yrDYVJ46Gn2iCvrgHCSM45Ltx4ZGzFWJxmu83WpTvoovH2JSWf6tW8zfr27ieeTKHhWEAE6jQ",
  "key17": "4u1YCMe2FVcinw5h7EQ1q2RaQFeQozhK2PhU7UoS1z9JrZo8zKT4G5GCzxhw9EingJDbi5e7vroMFgidWMDTnWku",
  "key18": "vUBczHLETgQ92gwuLyLyr1Zsa14An7e2vyRvk33GaJepe27vDvaRWnP52iDLcTA5vBW61GHsr9N2C5wSBWN2NRp",
  "key19": "sFs7AMLLRP9BFNb29kHw3Ar1n1XamHG7ht7m57XBkKCBGEyNqkws2ofobUV1kLkvh2p2wqamozEaTdqhiBoJTTZ",
  "key20": "225udC4bbeTrztggossteZJSGJqMRUv1o9ZqtkDXktRyK3qRC6zfRCLKrBLZQdz4TGpm7YUFy9pb2LHf32Z1DsLM",
  "key21": "56DQb8dwxujsyimn7Rr1yhFweHGwrxAeU3oFQhZirvnjipvRLuSe3DBiqHuVgFgP4JCoJDVaobNizyhnkEThcnJc",
  "key22": "5Km5YmS4yeyor7xna4TZ579pPvsN4RrnvoyBh64esvbCXEWoneNnAF3WkFs1BLgSBt4ud8eK6sKzB4Qit4SgMon4",
  "key23": "5QpbCapmhHtqyWoZbrbpF7sEUD6nTQ3nTm2NdcbAVeUV9ykR89NbEVSCHMZyBd7ys4sqdfQ8fPwr4RqC5VitwUNN",
  "key24": "2GZBtcVmhdWHvBgYG4mnJhCHGgNmombq1ANo6tnSsqR35V2ek8CLHZstkK2Y2rvgsYnMmCbibS2ei4MLW3M3MxYc",
  "key25": "5U2q6rADaCMGJAeX37amRn6GERnYGM6aJ4LVB7Caj7Gievc1s5qyNvVm6oeFk9CXZhHSzSkRmpxjYPbZxkGeDnL6",
  "key26": "3hnbQbYsiV8RCxD5a9kVvjQA6cmcjQsJDZ46wmpzFiXy66jm2ZJL8ajDiNNey5ShdzUoCKDEzuNYKVMc4w1NFdAB",
  "key27": "1NDZNjTnL7pyAvcHMi4iiw3NGCUurAfyuvTot16oMVHjP9U3f8D2DqXqYUHmyHRgxdwn8NM6dFfKg8jY1nvXnyY",
  "key28": "5RTX6HUpYd7oGt5gJjxENQzZcTc15Ba8T4ub2JA4au4K4Wpn4kBMV9xsetJp3pVV9YW8eUkAF3w9tpBnYTFxiqVu",
  "key29": "3E1p66HtxzGbyAyNDm8YBz1qPVQbgXyUEFdDswHZRwrExpEMcxhDd3bawMHiKGZPPqmRSTS5Kfxwr3hMVkAD8hMf"
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
