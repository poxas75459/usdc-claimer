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
    "3mVVsi5Hs19UmYk1Tcy8hGu4u8hX64FqTNiksdVN3Z2zcSuiWNYTtDWDJxDWHY6n5vYSR3ws7H3f9UG2gYq7NuGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEK8H3uaS7GU5wNFUwMVrTuakHYJ9GbFEUJS4ci3n8KqsPpHfPiNX5g53FYpUNNhTL7GWPrNkZNtHLgLsTeYj5",
  "key1": "3uTDVbzPTZeBhK2SibP6f58C1tVXbqeMKg6riU7e6ycMqepG51m3xTYAHuYu81UA5LhMJp5eekH5UhSZkpevSVEu",
  "key2": "5nReo5o4WYB8ZNoMfowRjzDRPzU1f84w3LRmTd3cVNzRJbvN9F5TP4VpqAWXqACgpMiea5cRhKk5oRkMb86o1n5j",
  "key3": "4LPz5n6DjcCTb8uCei8yXYoDNaDcm1hPBtcySoUzGBHxeN6DjVSZ8sMmGKpGgQJi1W6VtJQeF7dixuHaza9bSYxb",
  "key4": "5bPUmfzyQyDtWDzkwtzu8PRxubyT45QCwznd4iweVYkjAH6CNPfPYt9nZJV4Bh928TrNfiGS3gfUqacC4CG9Z5kR",
  "key5": "5NXDG9brSXm3TgyQ7o6r7dm5SWMt1fVQGwZkCgii6gFM2fZRfx68vnYUgH5ohwQAwNoW1MzBRuaG2HSYpEYhiJYj",
  "key6": "4DhwQFQy9wCdjfuzbg6uJZm2QtdYSj2kw1FQxRf6QCsk7CZU72TNfdpH86C4KRkpLrV6xTMsU969BrqWfHXeXuJ8",
  "key7": "4iff68dJg4UvDqsTYoc23J9Samj628898ayPCKjLopqd2XCZTxmsZprtpypoY3UA321Wtms2EtNb3jjzo4ZqM1xe",
  "key8": "2Pw6UtP1CMsZnjb1m2LFJvbat9985thPqza5bapjXJ1vPd3phr3HfaQAwve4b6uAB5imPP4XYGEmR2uJpQwM7unt",
  "key9": "56ByzTCGNoVmkDhiVRzYbmQxvgcG4pUWdaK4CxGz3dz8gfUqPdjcAiWhiX4yth4F8bMmW8y7vVJWR7LkzJDjiw1n",
  "key10": "4q3uDJrTaG4fgaPyY84QPjnwi2i33n5uS9w6oaWKFbwsPQwE5eTUUXgx93Q4c4CqkAGBY3d37xAAd5Pwq2hYjuSp",
  "key11": "bLdUBiB39CMNfthsCqU4NXWYHPvXqhUrJLWqqRpddeL8HDzQsSDGK3FtgN2Qv96K2ogzBDVKBX8cuCL2Dxp7Y4L",
  "key12": "47SkkLThzxnMNJCfLjzfzSTU74KoRkjdpMBYQhxAqM45k2WVTXCZcrHiixGNozxSH7z8khiNNpZu4JBKCi5zWL8d",
  "key13": "4iU9zDnJTGzk1MfdnaBkzJwif2C8ycVRYQdNEisFawDHNxZjyJfHo8Ee91976yVH1gtLg7mzCYzn3MjwHGgpNej8",
  "key14": "5ETZ7cN64UJ3197SmnPy9Tz3YsFx3LC99dLQcoHhKUeYcXcViVDR32bHaXouByE5ADewXFayDoVb9rX8XSY1y6MS",
  "key15": "3NfLjcKHKFEjHFdPkXYiH6yYPbmF4oJo73AhMgTRrwVKAEfEdXkWMHdW87Bb2Cu47i2GfrAqs1qKyTUQ2q9hhH9R",
  "key16": "3TBZtXFANb8MxihcE913yKf4YzJyAjeQmcojw182SLx5rqRomZNmHYBvXjog2EXZ9Ht88qLf1iBQgdo4NptEHrRj",
  "key17": "2TSBsUdPejvABKEERgFjtAU3GyyrKXRMmRx1d91fTdiSVTEtriwqKE89YfK3uz8naMsKp5YfHRwSSBafiDqEyJF7",
  "key18": "3vHTuxEumhUkF6H2iUnGV781dVsC3GKS3r7EK3zbb4D7998cGgNJX9N3qTDqTrrWuw1BcTTRaL7GcuYE9HmzxGey",
  "key19": "2acL6C1tksEc8cdHxFNhWVzDBGZG9xaybqAf4NWzCruGBEQEWCGohcUUGRnSiYberXEyaqaTNuvp69866vvQxJw4",
  "key20": "4oAntzy6aQjKt3E664xfqh2EVDDqoHu9hL5WZKQMX45QXDbRVeqXhA2iUQLjNEYDfEzKoTvEaoXmuB3nUGoKT7Pk",
  "key21": "oHsE123zD5HpaxdsuCYmna8fTECfjaSVPcN4SMaa3YRd9S3RtVagECq5meeCgt1oYt6gCNKzgmVLHTZMkUf3Cfn",
  "key22": "53rCLsA49jFVCtg8Jasrn4V49uiXoD4JsqEGHoJ299ig5LAaPhRMYmYBaoY4gcchBCRQNkwYjYiUeCRTtTUtwk1R",
  "key23": "4ADHF8P1gPiEf8g9AChQwzzr51hwT9Dj9dwaTeF61DW1vqUDdxusfbqLSNXP66Djfhpo7WpH6CG95Nt2F5qd2aQ6",
  "key24": "2oVjyxt3htZEyXReedFLukFTbdk3TMVAimHADVyMcG3Mic68dx4rzXQ7kXJjCZ8FUuKFXJXDKdAoSn4pKTgsrwy1",
  "key25": "3scsAhdVvZNBFDh7ZWHc4QiQCssxcfzEp4xA1LokCnfZVphTTCrY2Estg9kzvdyhkq4aBY7upojjCGYJjDqK8KAZ",
  "key26": "5i2buHg3Knwp9PkCHA5F2NUCawX555bzKEukp3qA3U5dznB4yV8dadBr9TyGsvpywnknwHYJPHK8N9bh54QKB3R9",
  "key27": "46cUQRK9Vu4LCBcGkSDVSWoXxdWjYaSsBuCLJoxm5pgaS1Eq9LdxKYE5BPtUeN9UcbkMV1SW8j4ze5mo7tynfyUj",
  "key28": "4kZVNJUwgiJXJiJSsjQkPt9vVdpHphozYhGzCqqKSN9rxQcxra3ZvfkcxoGtCV3JayEaNaSCcWfigM9Vjeq9e9DQ",
  "key29": "qQbL6zope6fsxZp68GYesuk4UKP5v3eDiKB6d8v37unvddfHxDK4v61P53reXzAH39f7KSXWQZ2rmp9Dpoo5E8s",
  "key30": "5NMV4dHWbin8vz1aFJzzYkpRfyTzK5jhciaaV3izzpPnKGmAyd32j8Wn9RWDqngDxDa7tBcyT8XPE11FASeafR6c",
  "key31": "4tR1us7cTBbvBHvjXT1bSp21ZpiMkeFPLC8ghUpjLNFkptDqkWfzQcBL5SJkso8MXi8HJLb3o8hcfpekUMeR9k99",
  "key32": "3gzVHtiX69mkqBHcmr232wb1X8LhMv6pARDn7GkHiRe2nq9Wz88oGChUbWRoKneAKBm8MYNXVGSrTjZH23codcrz",
  "key33": "23PNTxJ6v3UNqvWtSKGKJAyGYf6biFuHXaDi7sbnJfVZ3CodXHutUwAtrEHU7ecGUazGUEUeFh7Wpz5Kygb8DGe3",
  "key34": "4yqtFwhmZGyDbeB2hYX9CTQzx56zY1eRYEdD2VzXSSyPc91m53iW5WB6pjkadx9R3bVTa1UTrj8WNqWxQmzSv2kV",
  "key35": "3LTEHwwv5rWVZKv6TQev1vf8ppwVxkq5ZvPUsQJ52sbvshN6KVnJMvWErLoeUzRKr2HYjeTpC6qWzstPQYNvvbR3",
  "key36": "2xPLjr2g7jrvmz63qbP4ob6s8P2X4JCQ47Pq1hfDqG2f26TapKSFo9XYPCHa2rU6YbmVK7cUvQFUR9X3CyvPemu5",
  "key37": "4E1ZRSEquFVP6VuzhDk4mCoJMKa7cgtXK9oVrN72SewG75M8gGN6PQ6gHaSz6y96wMyw4tWfzW6FpAuPSdpTqMfU",
  "key38": "JzoveX2wPFixYCrcGXcRnQmWN6X3qHy8F9boTX13Cwzy8G4PZyRDaLseCpfgHqnFTHL7DRgQSKpNKUDEypXrjJC",
  "key39": "4ouqUomhG3CiV9GVCsFHfM14irApJ6eq6soqKjjZQJ8yxeE3ZT23e2RP5bMdBTj5pHZyAe2weXf8JWQ42wkyBh1S",
  "key40": "37ibtSUQJw5Pk9ZumMwvZ6jjMNjVFEF2EdHJj6Amor9rZtTwdCfVSvMcgWrQdaowMPoRGoneLK7dVseHCvAvaGei",
  "key41": "qKA56o7xvnXtbLd9vcS9iKVM3AN4entRov6S6a52jjbcge3LjVNjcGnZuXZSMa5XTYU3Cz1GbEazrjX1DgpAp5C",
  "key42": "4rkgbjFSX4d6a1CkxUZ3KW2cf1Mp9SUfwYfXw3uC5yAtaicbZQt539NjpmrWwwPX2Qc4PnoWhPLVVnXo1HFNRUvC",
  "key43": "2Rkc11qBo8KdYbLVBkPW1S3EoE7Mt65SBmbFnZYW2ahF6QNxbF6VNvqcrc5hHPPBkkuqkfEqkw2HSBeZXg8HHsSi",
  "key44": "3Sz7zgx5zxtMWQw1Ge3E1cudUgJZuzVvtsYdqhpLQjb2K1wksA9cRBNwLgSdkqZAYzV15Sb48staik1DLQgGnJSy",
  "key45": "4dEBT18AoL9i1eR5ocappPJBW1LuSjLRavuJuyjR64emeP7eBfd65MrF7wfu9yuMrsY5FWX9QmQVLG1vF3H6imyG",
  "key46": "2FVnXH77m97H1zKxkpHFTi8jp52fukDHz2ox1GgP9fNg45sCiUNndALCMym4GsfGwUkRdidjuLzKmT3oRFPjXaEn",
  "key47": "KeYAH7qW9fWpT9nUwXjAqKdLFd78ryYi1Gaki7oMiUJChbjitdx3PPMZETVNDuA3ueqqeYibMtggFbi68CLr1jE",
  "key48": "2FDBDaqRedQgP5if36KkTTVFuwRoQGjpHUzCzM4HYqw6vcaxSKa4YqgZ2N3TCMvgF9iPJprLCcvNS7nPzXkVBb7f",
  "key49": "52vRdd61idRaquTEvbF81ztyuGMCpfd5WkQ9QKw6JB9uaUJV2PGBbyrzeTW5Eu7APS48KXLiEr182ZKyi9d7TWVY"
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
