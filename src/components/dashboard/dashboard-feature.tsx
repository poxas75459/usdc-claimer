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
    "4qs5cLmrVNHBdGYfLtiSPdxfNuxzGVajpV7TaDayRL4NSTQfsPv1s52jdWzLGSDHcM9uW57AT9iNtBi2Nb3C2fUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21nWfVhhiMDQykJpst9pGShsW9N6hrvHTDdQGTFXzn3p1ZjSicwHdgGZuAt7NexRFES4zykdT3oLvyzRRW3Lu8n1",
  "key1": "25May4zjkeb6eSv5o64n91GkK6KxQgrbwAc84FXYHa6yUG3TnuAm7DzbWQE5H2nJNHpbJqXQjezUi6rZgmYQowmm",
  "key2": "45gxQgftHsWXjRgM7a48ny7KLTtsnm5Ht4sHHJ4Z5m3Vi6Xqp4c44dxmwdcL4hUBxMToN1zp7NXZmGXTSNSC77J6",
  "key3": "RuGaUyDaJttL3cLqxN8kJ5ThRkibzwmkkAbe12wkjZ7vwcTGukkppfuziFASDPowiNjtoyqmEQeUtd6QfELD3PF",
  "key4": "4rEpBNkAd9otRcohtqLNfezXqho9MGMZrUCUkuT4VmBCfbfYxkM4EfGANbdjEBPjDArNW15VqL9uwheXahdGrz3d",
  "key5": "toXQciRDfitahLfrqmnDHs253vV5iTwQbL5cfuTtQYHoRUTfborosZFPyg9BpAzhmVoyUrrCejizPpZVr8LfaRP",
  "key6": "2YeJNq5mhfeAG59PL6JpVujFfPmkKsyq5Eydyjt217kAthfY8iGBuBuVxkq1zhPcMp3C8SobHmxHJJdPn8JxtqcU",
  "key7": "381uNPwSe7A8g4CYy5CLSiAU1wmjhDAg7aDfzkxirZs7GEu5VdFL915fMefd6qRjSqX7QiapdBLHU1kg4qfCefdc",
  "key8": "2hK9LknNshLB7TYQKgAFaMy6Me8G1qa3s7fAwitaKeJi5FhRfoWmcqQacAfiEmCKygdU8zLQmY82YfSHWpi8iJF7",
  "key9": "4dqSx1Fr6ugR7tXEduJKMfxkSPsAVknbUKi5tHDwfmuJprRBUW8X7y9BLyeMAMxJNeNrPdXXyanFgPoTZv9uZkNK",
  "key10": "4e9ZohFRTXHy9VUXTS2Xcqg3NGVf6nyV4NNvXn51ZhKAETee4i9VvREawtCNtFH1juJfRzupc2vdySBQdmSfGmEV",
  "key11": "5d5Q8ayH457tN2u8e1j41cTprJoex9wDSoUe7eaad2NDPLq7XadcLPVNq9tM77EwjnywKR4QLVJejbsAwHqHpBXo",
  "key12": "nbJGCXXU6VhvBJnzR2iNoZGy7jYhAeDE4USMSbkqbBaa6UKBHw8hYBaf4c33PYT8973LdDY5GKUiAF1A9TojE8K",
  "key13": "3BpruaNy1AF5yaKUhJKRzbmndrq3yTZR1oEn4e2KQHeaQFtFDRA97qAvfc5bnJhmbQmC2baTqKXJ6HTsw4W9snj9",
  "key14": "7YyEXDEfYuRRPx8CR5G3ZTfpPV9rpZESo8WGPTcuJD18AzupeQtDaR4SH3LJRtJno3CK2VXd3itw3vKUnCromXf",
  "key15": "4N6HaA4mNWxQ3qqbkZas6CK41FmWgqbbk641xnsm7rakVcjM6a4cW2D4ik7bNMf8thfL44mKRbBnqUPBxqTsy4RA",
  "key16": "2xMupQXFcabzSFQNMYH9KCFiBLC4Ho9DmitLzjfdofbmotbvYAsE7ipme6pA5DcQchcUg7o5c4kYwSMcNpjvVJS6",
  "key17": "edigtjy5ta8cAK67y3D6Vp4y1mv2TKFTap3RDCnZJe37byumaZvbKxSao5GQD2cqwbTAqDMFPM4b9QtSsxJdYwv",
  "key18": "5bL2Gc12N27ZtQKXXfxC3zVAEMnv2zAb6PWVBaGRGZ4RoAQs3uuMFJN66MEwPWuPQLu6CxPUeEDKuxqoc9RJM9MP",
  "key19": "2udqeNaxhMQNMTjwgxeHKbDTe5gdmk5vhhk7P1feCuUiknYrZ3LhcLh1kZq1JTbjas3LQpFnreQVMYPuGdqvuGSC",
  "key20": "4PGpCGTEhYKD5kmZXHtfn8HTU6ibfF8GQ4hTcaS1Z38mLfzUhwbu7SybPava89zS1MkwLv4hfVHU4USCkQMUNcXK",
  "key21": "2zKBzWkETe3i2uSccKVBrwrbDGp3odfoZPZ7xFesqcj9UbS2bgo5sGGj9oFL21XRtU2yoXXh1zBC1yZPsJBM3bdz",
  "key22": "zDSb8rtcsVJCujerMrDZKssBiG7hsCXdytm5xuXQ96W58wyAEHnszr1BZuVHMCdA4LxGwtnkeRgH5gJtoTmSknD",
  "key23": "4Md2k9tmj1CRKbEZZDewHzSEkwgoHS38LwGBDDZPNVdoVPkPuu1pjPiwsKVGkqVzjqVzV2s5CkSKwSY8fEKDYhBb",
  "key24": "2W1DtsiYbcBosKtx4gGx1fXykmDzvUVgRipoPbkmFwY7BVgBTMvtoQRVVg2Tu5C31rfcJuUyvp5oQ1gQ4qZnsGy2",
  "key25": "4W5oyZinfVd2AedB6Z3ygwvawXskSfGcAPRfJF6R5pcHBcXVd7tfAdLgqM19ooA2oayTdJ6x59kYfjpdHeWcvR5P",
  "key26": "5sAVLDS8CwWvfLJk7Zxfcu3Lo7w6dyX6fQYPhqgNWJ7pmVuAEq5mo3vkXreSekTxAnniZQcz1Vth8W9bYQL5TLhR",
  "key27": "5yW1gRQGHTg15RdbzBtGky3HVHYQfowP5jQNEqmZqfSBHwzosfDeJytb1DnMLxNwxbQG5pSgQZ4x4hYV88q7rp4d",
  "key28": "4gp9oyvvrgj979FWhTS4NBHwdt2DVeXV3QQiTijPpEeV43skUJv7preSne1GYD5z1gQxV6xdZxUimpTMsFiMPi5y",
  "key29": "3Qi3eUoKVSn5kHmRsUXW1VGs1nbkD6TB89bA7e25oS92YkM3LbbGRyJKnFVWxA1DZL9WwXYhzDGWoqd9CLz9Kc91",
  "key30": "2WUCCCPphTRPt6EyTXXDAeNzf8mJbg532rxJcxPr73Q43VLd55PSMozbysAwQXfscBBaq8QLGEsDcU4JxGXjNjkw",
  "key31": "2avcUEJM7EkSVqEseskjH154hBG9ZxbmBL1dZeUX1wBUJCZfhkwJZmLxCj9N7zkUVRH9y1JnYNfEn4zvUAkebFfJ",
  "key32": "2Z2EzzK3tK3hhjzFo7AmAtv8GLmghZXgh7xUc8Y9TucPfobGCGaX3D21Gqn3XPnkyqf9BWzKCvMLKcjBDXQ6wqgT",
  "key33": "4RsajJPJDXhrXQw9vakciDFc2fvwFmcB4dfpeqFpZ2ybyD3fgqZdDD9UNyuZjDANTPXuvjAM9CP48sV175bKRzGL",
  "key34": "2v29ia5AyfdHSq2mXmYpoZTs19ddnNoptrDTQ7SbriBwv2pJb6qvHhwSsCAoLNtV1iTKqPuhbxjhPnv5anrnAA9y",
  "key35": "NNKNMkUbcPgRZA8a4VruqajpNUgFpyg4ovZ27W3SPwPmXAUxxpBJc8RuDsddr1Q8hY4qizK9Yy9mwkxAcJnEHzX",
  "key36": "Z22MuQ87Gff2Zk2wYHTSFVmYiU5NoMoTVPbhKRRFXbQEkrkVe2fwDEhYMbxkMZAfKySrfSsimDJRy1KQbzhdWfF"
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
