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
    "52VTXapLRCFzqSGDSrRj4Yz5p4FG2cLzuL1daXf7FYtnYZbhRRTUJTuZKX2N5QjtRNvdQZ3qTAFnuW1T4FSeXXED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7RZmfzf6ZyLBvSqmcLrd7BWtmuLCduirZpAHs2i4DBMavfJ47eL1XTSmKhp1UcoBqh2ypySHrG5ZAxhosW3E4a",
  "key1": "3scyq9UsadxggrAeoeGqw6r22wfnCZjJgnXcWoKdwkdMxMfAXs5E4HtbyFuUUJepTKAv3zzRqt7f65Vsvoo9QG4r",
  "key2": "61iGG6baLhvpHqkV97XbtGnhkrxZgeukHMKuNFwpC3sewHBVzQFGaFPQzk35g94mHP5fboxPyvU6VzxqiRhrRCf4",
  "key3": "4TxQ5AK1sLVzDSpxkV9W2YGjwKc3nR4R85CtKwbnfMKKU12RpnaS1UV7CghcawJSPzmfhnUyHQi8yR9Lys9KPELZ",
  "key4": "gKV7huYTE1aocjFm3Sk2r8XHbV9cwAdaAGGiry5aNyk4p8LQkzMzLeNdysFmX8DGR6XLKS1TsokhHyFDZ7jjAAH",
  "key5": "4mndiFfCXN1jE17vkZ2T4W28FetAJTMSfCUyk2GXQY4UWabmmR1bTT48iSXTN1EuSU55JzNMDmz3kBBPUspXtWSF",
  "key6": "2Uj5mEcFycdXgGueAF6kkPzXm3WpKLS6RNKhNC6e1xhitsHQbppP9utgd7BWsRCfrwHy4knKT7Qmkc2qF2TLPDMa",
  "key7": "4oVzoQ35ArTyoM8ZBfCTRrymTvcx6AH8NPVrmyhEpR4G8Yg3VEUZiuGK6U4JqfZwonE34Dgybb2jJgp1Pn5qBntR",
  "key8": "4jy1HKy31XBPatkUgEMYHjmhMVDTzVnS35iC5HtVAwb1y8LfPVdYyV1ghzELr7fG7z2N5VwyAE8bGpi6PTuszezq",
  "key9": "Mmo5AMgWXDNeuuQLtkqBWgKteWsuztHb2TNUA2m3G5zmAXJvDB2Ri7qu1X94nuWLebTHGkP9jZGsGne4Tg9paTh",
  "key10": "8eVvGYP3NvjWZMYP1tzHYnmBAhu1cU8gAR1VWNNnybVr5WY8GmNNKRSZ2TF51JwZHGWUbKAmvjyMQDYRoB1G6FY",
  "key11": "5fYC9P7oYiVLrdb4oK3Mjdyqybyu7tWb6ExKyxRvoTEauTQf7CJAnhNU9HrF3A4AW5jiB3P5tfL5yXk7XLfeRsNx",
  "key12": "5pHausaS1Xf8c5TazusSerJGKZNsHeHBoiZqcwSDLC4Ra3J9nCSvP69xaReDmyePSuQxPE35GtkEnXpb4v8A3jt1",
  "key13": "2JragvSV6dDKjbAXvvZZqh7CKb9VQdAhYUXXeu6jm63JERaHf1CMt12WjVZAjttrUPXXveervRUX9uszkTFWDU4z",
  "key14": "EP5ad7ScZedndzHEqb8MxEkKUMtxcoBEWacuCBBWLCGheV3zR8DmG1KpeFfjVMTWJfp8FcrWzZhLyr8ZfqyFUou",
  "key15": "ZuSKHEKNqhuK7aDQNsR362oJukxGtEb16BRaxQXyuoiJjCscwoXrD82Vp8UetNaFo4zVYSybmanpyGa2LtWho9r",
  "key16": "3BVvYJLx5JBKhgS4WBRrgmNsoR9DtQUuY4E5YgbjNMEBs2hN9kwuiPoXvqV2LjLxEAQMpzMUfTdkGaEyw2pWXgRK",
  "key17": "24Qgvk33SK1bFx3yTBz3cg9XbfHyTuAfiJVW5D1cdymrSwp2GSFzRd4Z2tVrjL77hpiWtivFRmYdoifA1MEMHyck",
  "key18": "2QeYyMynCoF6bGaSj2t4shYfj4JfFLKQoF9WJHZ4Q2YTbrFxhnV7nNNiCjBoHFBC9aTBJjwqmyicqeqDqnpv1fJB",
  "key19": "4XQXrYRBjPefZggCyJPDzf2zhfRhwKHc4ejWuH6YHi7QF6cMh5y7kUDhAm64mxVJ2NvxxFdJfAYdsNkPzqg1kUPQ",
  "key20": "5cVcXdvx4aFxmJJCmDYRUhhyf4hBAKeTmKfZp6PwBMZYbNu7QcD2L7jnSUFULHTvkrwW5hzPafrBEKcKQP44P2jz",
  "key21": "3ecxvUq1tg965avHfqaaeSM7FjgLZD9dkV7Dpw7e2nSHugHwYMRWaDxYzTFYb4b2y1WwSn69UEG1KJ9ndavdQWd4",
  "key22": "66cumsSikZBtdpCxRcs5iv7BR5uZC2AhPAj4uNv7GqRkiJszaesXdPRNkLfrBwD9YgXB9c1bFAwhx7scEpAgLrVR",
  "key23": "41A7f9q54xhCsqUjb2jRbRiPSt2LH5aVq77UAWGG5jqduK5ARGaf2u2JmzgJcfyauPHJKWPgtahtNedQbNweR8ek",
  "key24": "5AxYQi9FTg3oum2x4Mjs3pdmc23HT6ynMvgnYHm3hsCy7pebz49fwsS2szkAg1N2a4vG3iJbFg8JGB6DgFiqLLRY",
  "key25": "4DspsDCENLS94pphn1GKtQ8wYTvfRzpASghkNgWs5t8LjQm5huP3CzUS7KdcwQgZE5jPGjYHrcrmh6Pa6vyuK5wb",
  "key26": "2rqesGgBhztD49NRDDMPBUkv32KN6PJB6s6Pe91xkHH4kDsb7KZmQRSVqxrWixoSinCaUKuSVJk8QJguGPWhTgBj",
  "key27": "33o4d8oZuHGMAtuvGiwzQT7pUNbMKjVSEkCjc4JWMSqYdsZZMEHq81ZGtSJwKKqeq6ar5Aci1BRhz4naaEMirQNt",
  "key28": "3HiHMrbEwhaq9BePjUhLf3YqDygn1ULoecSyV1kRkVLJboBzMuCufsRNruRRx1RKmocmbJ8WnrRPxk1eWHNj743r",
  "key29": "2h4PT4LbqkkMiFBNUpjaLhmDz1HP6q2CgnWjLTJ8fcz2d9uAg8u62NHhpecYFhMQpqLWoe8KkX8pB9dC5cvrWRXx",
  "key30": "2rCcB4df6ja2ZVWvyV5e45C3MqrsHb7E9iURStMQK3rNi2qkw1AfCY4C5DjKRYNRxv6QZnwjP3YhMPrxKMFFRfis",
  "key31": "3WYRRgzk5Lcm6Z6NcPmPDQfwD2u4EmH2Dn5FshXgKLErhzeV1DyMTLRvv1DquoZpJXpebUWbSwad9ohNWUgVgzb6",
  "key32": "5wM8NdvfiXKyncQ8Ltn1bMbyQCSYgx4dSfEdHuAaGWoZewpv25Lhr34WwTt49TeMB9pNNsaFio5e1jjDx7bKcVdn",
  "key33": "4J9LAJZdafT6yPFRyoAPczazcgmzC1s6cBtFPZWgEE6XW1kETKNbHLiaPvM9M6muxC2sD64Agkuu5c9ud6mYosA8",
  "key34": "49KQD4RcTvGyZpebijbsSzPYz5zCJtsNAHqabuAFczmkEVBd63Esnc9SX5WzvudJ526dDLmLgwVJfonAgTJuS5MU",
  "key35": "5t1VWRiQ8ceLGYESYEALrpyfwDX6fYGt1pk7GFYqPdFtUPS4eeiAMY9ZPaPoA5dvt3o4C6U2PNgt7MP4xBAaUqDf",
  "key36": "xHRcroPkiHcRFhh8p8RJZh8BcdARxvtLP4FuGM2M6UmAfuwqiKevCqD5JpZgEZCNpBw9koPeo39VYnqdcCm9arQ",
  "key37": "DCDSYPfQJdDYoaSyX2Wmbspb18vnzrYPfB3RQvayqkfJtMLfMhdxBYHW79APEMhP4jU2YJkWokMgtHmfjvkTg9Z",
  "key38": "37E4tnAk84LQuN1GHZwBYfBgsdkdiEhMH3P6hnvBwgDZDRd2fMLFqfxsMyCFTKYS1pgtkfJWtDdSYsRvXGoyTFpV"
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
