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
    "WpMkvvrTJAcjKfSBQWMSk81nWs7BXFTFb7WtoFxVPWaPwTAE2aS4LMZNoGtRKzeTKF8R7bMHE3ZZujPpEmqXmyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vtvyah9du8uryDPJvFqpa6ibKeKydfjy1AykTnQJfpBuazNud2h6RLQQCjqpq7Bz4dwsKE4uefDw2e1zFWybenj",
  "key1": "25MgYtXmz4MFwJMxkiJLCw4KfCRGCaPdyEFy8JsRQCCtoHew8sMTXGG2NcXjAKRQywrme1DJbPJDbYHkXdJAUyGi",
  "key2": "2TemArnLsMEzddY9rtqupCXVFxpAmLsDXMnHfL9BSopv9dgGacEcC2qm3Gx9P1BEwagQA1MKe26ipxtVvmoQaZ22",
  "key3": "2WG577zGPq6s8wviqxejadRsr4KvDcfJKHMcwxwnksoLHcHZfiKv1x3uvt2tc6wdJDbsDt5VfUrDqXkP8BAzmg3b",
  "key4": "3cXQ9mEFCJL9uGgeJQntJiUBaBWDN8ZRTSsdzpeeFpDNLC2a8pEUsz3Amr9nyRoejxvP14o2ukd3oL1RMMKdjQea",
  "key5": "24KCCDnnDPwu5ZpCiGdjcQTE6vsHbVRWqYx8WmS5DZpo4i3HAyzPkYwKApohYrvSG8KdX5oxPr4Wb32DQWE3tbhB",
  "key6": "5VibGogWfcGc7UJboUo4zEk4VZCCdfpV4PKXVCKm8z1ECMbzCoBdz1X3tGgZvZjP2zsY6B9VZxPWMTS7J8Jm4u7M",
  "key7": "396eVnvQAe51pn3zubsDwRa4w6TWTgEQmJYUzsxg5T6AxtyuWgDuFt1gAGRPKSbYwTcEZXTAmZ8reb4qTkV2ZtFC",
  "key8": "24amnXvWHWBysKmHNYm1cdzvXjz8Eeugf15Kzey8ri8Q7YHPHjMp4dvBhY8w6Jgt2Bxzg3DSZ1Lnjn5BbPWrNUBd",
  "key9": "5APMRQcTVJz7B9ZQj6DSZ4T5xBn1UM5TAVCWzw3ztAbtMN3hQ9TDawQqogJ7HJd6uFSjVyZPqatKiBbPAaBatEMh",
  "key10": "67MNoPtoVcjwz3zyxtAo3eRwTQDuiMTZkuQ6vDh54rrFXKPfJGf59jGHQA93SYyk21xQ1eVMybBVcV6nD89HhiHL",
  "key11": "58eKqn5euHjmNCjhWUG2Ghuv6A19SaRWgqHm2V32J5izMSkvv2DSTupKAAbZ7t3cBzzgT7WivGRxBFpZ3A7jvfXT",
  "key12": "zpJkVisXw1LsG4Mva9Sj9uiZKrsnkhPX4cFLhiGceX8eepcwyHsRZC6upo54usY2SVozBF76ACFhXsCQ2tJbeNj",
  "key13": "5BFbERoE77Nfk1hyYpNyaCW6mXw24P46p8JpJogYzkzsAWdxmN6uRukq9MaE8TsYtudGKXUeZjd8N1WYE5PtnuLk",
  "key14": "3VyxmA5j1Cx4JXW78zkuJcEQLPBrnjnhpNUCU9KJMBpVHKELB8UJrkn93cfmdRx2vXYSXSqd7RJAV8yrY8nUQR8F",
  "key15": "3AQHryANra7rvR197JQzBB3XyLhFcZJ3uRYJxHd76ePtaZrUGP2EeugdkBFAGDRW3E25j1qxYhbKLzKvmfikKeAM",
  "key16": "5RcwQWd6rGSLhRVuiYPfDaixAoWVaeFZGqKt3rPAPptaAk3wnxjAWRPPxh5DAx47ibLe2fvtvqSHDoMNVXQA9m9w",
  "key17": "23BM7N4fT5DVDK97MefdkhRE3DgaKvyjjJAcezzHPLjkRRXz5R6Y2MPycRum421jYrUaFCs8BTaVGkQvm4gLvELw",
  "key18": "64hXK4KMBNbHDZgBUbrYW7F8vzgei71Udy8eLn2ByhMs1eVMJkUFdq7keeFBg3VsuZummitC9ADFTL9xJqxDxihv",
  "key19": "pJwN5M2W2HEEV2ntLwEAXpZ9PQyuajBi88modpfQ6QmHzxn2r37J91wmYBAQ3iXHXqxWscUvgVhDwQHHzykV154",
  "key20": "3Dsh7Xdtj6BPWqnPUku5qr9jTSiAzsRtgBPQyxWFARuphM58XSPSXpSKuWEovXY7wrEmo11q8CZuNvSTU7okwFs3",
  "key21": "39NmK8aVobwzMfF8ZiWV6tdjZcxJGTtjHzr2jZnRqSLSdQKbfw4CaLzvHVqF8S61BhhqLrubNBMAWzg5HD2j7Cxt",
  "key22": "5vzVAybeDeAfriSF7bYxixHKcu7YzNyqSHpEjZej26d82kkWmzszXhHtQwLKyuWSJd8z6kZcPccs756dDr99wxt6",
  "key23": "5HDHYcTge7zYuDALvfrW6AmwVygz7o5LEnFDtusMPaY9uedGG4Zw1dEWZo2VEE7UGsfxooMFrVzLicAf8cdL5GaJ",
  "key24": "5NZ3SaNavJkgQ56LXYt5w3SHbSVKZBeVPGD4jkStPVHFge7uTcjSy6UG1NGnDeoGt68fR2Zn4byS7qmhQdnp2KjL",
  "key25": "474eem9e9gvttdV3Z1bb5oZcg7SQZSU8Q8baqAxDGkLxvnBa3NnFTExqVrGbx5G6V5nWFKc3PfsE1R3fPMZjRLrL",
  "key26": "2Ya6Xm1SSxfD3mAEsQ57UgzVawALbnAn11SQSXcEmH9YqFDYg3uUYedAs4fTEcdy6PAcoTC5S7uA51MAkHTtUpWH",
  "key27": "27TL3HMonk8EfmraeiPqbFJN3eBtXjMwiYxw1SjZbJ6yCUG3nQ1UPSxrTYMCFqefSkSgUnAbXD3UWytiqxXmtCRP",
  "key28": "5ugpspTWnrmkq9eRznnUCkqScSUNaHhSXGyxoZ2icQeuwg3te12bipGkufCcPj1z4QYWPsU5vMCqitgoXytm9WaR",
  "key29": "5QYEWGWngSSZJTgxQQaeBtt5pvbZQi28J8SYrC6EF4SryyRy2VnMvYyypK3KdmYMPDHAanKVSQQV1eraE9vmFF7m",
  "key30": "2e9gQ2rcxSoZfpTmma5yr9M8btgWFWFkgRScmZqYRrVqoBMrWR4G7yNDfcKuvm7EHrpWkMC2qr1aUfUKcaiLDSQd",
  "key31": "4GstFfBcGseKXVRLipksMdangqLudTKbZ4f1A5rKbjmXWNjFNsmy9WtAV2bY6xxtBSdV1WzbrairohuQcQ3xfME",
  "key32": "4j7U3VCfhoH64weYsovC7g2aHL9i9s9R8bkqxFsYBYtoKBVczmzaPJM3ZXnx5LPh6DEvon7bHiNVjB3m1MuECKp8",
  "key33": "4yDuVV8TXSaKLar2KFXL56C41y6XFzFAASj8q5FNzUxMdqx1oGRwFfUhxCFcgPVVXrPrDUW7m99ZwxvvGKMhNvdT",
  "key34": "5mQc6p58U2Qm6ZoreNNR64mE7HbrggPLsWgjBPw6Zb62VEjDyRQarc7ThruYFyjqh1MhzwCfVTKvdNK37Bb4RqHw",
  "key35": "1qFiFQ3XdqjtL9m9FjVwARDpZyMpCYT7NSf8Zv2E8Zj6jfRTYcwh5FwedhNB5pSf4QSwxpZRwitWPY8jJHEveJy",
  "key36": "2RGKbXafS1rwTCVXji4LmM9cSPSueUBgrKtuP6HKrEiGPAWNHhVgNswet2oJJYrBd9QwBrvZZgkxQzrDmhYY4LXy",
  "key37": "4vX2VMvdmjiJq2WNxaTStntFo1rkamSSzXDfsnHDzwRTKBgYqpeKCuwSRUPfp6iDfy27KVccY5z6rtxeXMypsDsf",
  "key38": "4wh9HSBncV5hEiNrpNFFkL9LKip4eGjpJKcVPsnZx4qvgYATut3dN5SBxh8UMmBskFTB51JKaLiparHoXWEVzqcu",
  "key39": "DFsumgTSPrprCPGeCwtTQm6yvFpsdcLYsvoDw2sDbAU8hs1b4PPZy8YUkGfUdWwWWRsuKeV9WsqsRDWURvMtj3r",
  "key40": "62vrLMjfP7ne6FJNNoxviE8VWsrmEphND3tPWvHLqWg7x6ZSkzEtFzdsjxFrAA9PbMVq2FyPujXGsPr6TNyD3rCN",
  "key41": "2ZUSP9ihmJyKgY7BzyPNzo7GAgJLpUgVQ2KSiryzwmLfstf1A3KJUzraBMNz7bCNBmycKb3V3wJYCrZ9kr9pZR8A",
  "key42": "66shYFdqNC589rnx98eQmvH1txTK6hsA3yzsVqrCmHgZP69XEcbWnhQMaTfoozpaix5FvGQFPXffWGuDH2TYrLuj",
  "key43": "5EbSftzXUXJdt7rkviGogKxa2PsJP89gdfyxy1HWVxa6szoNYDVHtGm4y31xkzuUMpqoQUj2kzHti5mo84g5qb1J",
  "key44": "64mtjh93Z3u434sph3ELdP2K1jKBxzYrP1t8vux6UNQKYbpDDZuhPVaLxhyEwCzGrXDQKPuvNkKjosATHxwQRq7Q",
  "key45": "2W1QyK6PMFumg7tiLnZ3To5iuAX7tuXzjKLhfD9jni7EugXU1BtCYwzUa1VcWzyV6QKjdAWnB8dUNwGvTA2QzKAa",
  "key46": "ofFCdKFat5SfT99j3kgUyvNKx6KmaekMsEwGFJ7m8gRW2DnLJi5k8aC4ubkD4g77wAEt94hN4ruiZesGufAPvik",
  "key47": "3TfByuxGHejT2YBpauWMaqPruxBPD7nN7Fn6HJMaMYMPxpKbgiB1BgFauAta7DgF848dFLdroqomQjxs5t6U4i1S",
  "key48": "3rmLpUFmWz6XANv7hc96EsfrAkXa8rixn6oPUYVVpx4fntf2a2qgLn9JUbmwPuaELJwr3Mj89t8Wxxk1NkT5VZAB"
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
