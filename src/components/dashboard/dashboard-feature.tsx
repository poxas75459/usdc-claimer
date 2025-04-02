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
    "3LXyWgcYVp7oRYazm43MLukipj6eos4F9dyEqBrHNgx8FmKNqSAEre5B9ABzWPh1grt2B8dKJCBgLBfoybVuDoAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEjGVF3yWkwB6hLTRgHfMxRozAG4c3Lj53NfdfVYhuEdw78tk1eHYKtmEjYyBCKaDhyQBrXTUf8rW3d7TrBHWTM",
  "key1": "ESwaSkBoJqRciG6WGG9mGcdYTUeH6xHWV4SVkGSM5DMzoEFFemRRwSXHft31RkQ6eQa2WmCUXUMPyeLTBbg2Fyy",
  "key2": "23oU5Nibpq39S8Z92ywDuJ8zEJvqCGFe591hxLF14xx1gFpdSU7poNE5XSvLUX8qG9kwujRbHJ82GnXecaKUUZQk",
  "key3": "5J8LrAtaoj5T1CRfEkzFU7dGcRJuKXuGtFNqKvMLA9zLXAiGdb7bv11V9BdLoYRFhhHpppz6bz95cXFVi3qveNFF",
  "key4": "PRCkxCfYyUUAWnTRpXztwpbqvtYcir2L8D4ULxdeoCHRkarwWgSj217Tvngk8c1dT4k4jA1b6FcoTBwneoBsfYN",
  "key5": "32BZfu8HCvXTBpmm4JL2L6iMzcd1gSN4d2Ku8Q31jAvhe6qeZxuCttd1UMXLJ1JwPmFaxZ9qDTvGPfXodEzmQmb1",
  "key6": "PD9MxoDfPPyNihHSin5TDM3YpLekMjEo2U3uheEgJYTYo9uXu5oyaB1TnoTn5ev6Yj7CGPTTdm69jdqiGUPCZHY",
  "key7": "H4kmGNioWWUMTS3qMENNmSEy6kHW48vKGH73bHMC1depQ81HDQx4njmE7D58JLq3fcaoShfyt7Zv8KkpNSfawk8",
  "key8": "CCqhZXx6ytsjdAqtKos2afz2vynRf7wT7FWyMaJWn9tHz8j8Cyzfyc1oknHPC9EvH7jaGG9bMuYJDZ8f9ET6gk7",
  "key9": "4KdNSj3LtphdvU4BCmbYQ9AoXh4Rh6UWD9X61kmgMdaaCGLDVD4L9Vb98qcccuqPqJ3ep1vZHQTxCkbYTosDT723",
  "key10": "2iANtpBtdGLurDhDWaczPXFArhVVBhCv7NLzRueqTsCf4bC7gy6FaHmEKZakcgrqeJq4hHM9Dcwnq34tdbpCnocb",
  "key11": "55C2RhxDG6YVPrpJopjHJrUj6U37nK2L4SfzJ7pE2BUsm2wwVnTRQ4sDutumyMjeyYiEWMngVfyHtWd71jFiLR8j",
  "key12": "ixfb7tY4mXCEGVMyN2eRn4QvZW96KgnRVc4SwsvQBBMytJvZEa2BPkPzEi4ZCJNsEQp5GeZHba5XZntxKmH1Cu8",
  "key13": "32SDsiDkwpyEMT8ZusYfTyfofnGDk2gwmXfYTZxrZ1dQqeqgaAzfpxkTSXgL84q7EeyZbVSvZtgydkpUAStoZFiU",
  "key14": "CqJCW8VGuVLVckBjiGirmfAeGVkyc5CaChrHKdWm7asPo9Fjmtty9v3hWoK6RVcn3EFvuEURUBAjoAas5ni7ZHT",
  "key15": "3Z7qo1rvmUChs8vEEsFqsHtb5ckcLBjAdnDTNpYcMGEzuxPDTWZtZkZTyCBRXGBiz5NKTanpKbAb9vz1exXwqThA",
  "key16": "41xvDn4eceVYjF43E8mwkecoCWrsH3twCTCSqu9sa6PjNeE6biComRTWmcM48wJUGnKHfmAB8CRgXSmsus19e2kq",
  "key17": "2aDBbon66nwcey6RGRPEecuHVRkDtqXcRJkg6FM3DN8fcwhfGL5R6UAJpUDkZJZA5PpSf3NmF1ZXBUbay1SXCY5f",
  "key18": "45UdHsrQrwGvJdJj1Ne4yWAPugtRBKwECMhoNgHVyUR7nCwWVtctcCnusLQYVysp6WTJ2XSog6JGdQ4WF9Xr2znL",
  "key19": "5qs26QWdMywyqwwQXgY7CRfAEbkavRWLbEk1erPeG7BNegRn2dLqJv2XFqu2Apjwci2B3ZoqVDLSg2cTtb2hn5oK",
  "key20": "2QrskcEbYPbqPu4xq5CREYyE8jzVSwvQgGLNbEjQJqiS5LjFTQGyxP32mBFtwuzsYAhS9PAy9hQ9pV1bAd3LZJQZ",
  "key21": "2KDA6mpKz2fS4wxVdsDAp5qUxdaQoT6ZXzan8jMbo59ZAPT5hwTMdm29SKaED3AuNk7v85RKBos5wCNS3ifAAb7V",
  "key22": "47BoQopjXBt8GwyfY2AQfvYRZeZD8f68heaK5ejJdM29SnwFLzQoxUUCpWmDA246p5XCHEXKFKJiPoDLV2DNxCUX",
  "key23": "3v7L2sCAdCUH5dSBbWwJaX1fo8Y8wZAYwUTCCMwtokRpG6rjrdFrniGVEsJJahVfJGuo1L7BzKgAoHdtQ75z3YiM",
  "key24": "eq2fLebbbxtVCG4rhfmdkWD1SoHxTcoKpShowyFjnhnFthS48Y3e4x2s4nMSBZj8hcU9RqpDrBufyWkx7qA2MgS",
  "key25": "2ogjda8dY85kbPqHkQ96s5rbGCgozT4ojPUfH3o5UB4E5kar7Cvh97jXnvRdwd8htnshQLA3qZEpWJL82jTdjZyC",
  "key26": "kDYvJziaVcn7W3y8DABWskvt9CUe3fVrrMjKmHKkTLKYJv41m7X5VHnZYPvpMcTwkS5zo832H7QYR8xqbRUhrcs",
  "key27": "GJZSYZD2W2T1gdjKcuGgzJRwzy7ZZau61A7h5ocbncjkknBaaH9caTQgUcp8eeB6BZ7qwozqimiT2pYG9MfC7r6",
  "key28": "3a1poEm9wx4UoTryWLs2N78Y1utVFAzS794LCSmDJzo8i1qK4uUjjmMATnu6dMsKQ5px7HgwPXT53mxRg2uJjpVe",
  "key29": "65etCxDM35mnWWPsYYkUkeFjCawN2PA3W445M42caMYfAAwiYXUDUy68efFdav2jokfZVej2ksShWcYUSbXEX5zf",
  "key30": "2voDmhtYGPE4qmdaWu8PkkbvGj5ae7SbeKnKLsbjfrD8qXKharsocWX6tdtmkzTr1jhhH1HxK9VWwufAHTCBk8bz",
  "key31": "3Fh2Ae1S7fdY4emqw8mmGcnkp7BNL5TQotR4vVxoSTNyuw7Zi9sM2WNcyWt3hwgPPiUD22sifX7qczcqiWGuEx6i",
  "key32": "2CLYYzijQ3utx94TD4KJSna3DPsiSVXa2EsN7HcxEdwa5CMGJV38L9EBaizjat7mYquWCMmhNkHf6545vPvDeJ6W",
  "key33": "4gSeRpdQZuTsfDEWvNgzkLbRSVZVk1A88qNZLus4HaMKBcdvDnv2YKzf72ZepceWWiYsQZhYqNs3GAXUNbn1FqhC",
  "key34": "3gfZqYThFb75eFZSJf66sVh7Jz9xP7keaj2NCw7HLpJ8D6SEZZfios6YLvuDgAtec8c6iVPGV9frbc5HnC1PTqcs",
  "key35": "r1ybbPS1cvTJjTCzkAf7xZ6xTKJ9AJX6KXDKd2BdqbPMGB6649XXethihLNA1NkgPZQk5a7XfwE8NzddyZUHD6g",
  "key36": "66wRa9VUd2mYkLQsoXTBWsnrWGrNGRLmxEA127R6DuHicRrVtfCp3nPK6egQrwRjJ4fjzmKa81v1J9EU8YmkicbP",
  "key37": "4x3gutTv3GhwptbABTMEoetG1NQT5DktwoYfZbJtwZBpHKAGW43m434r1XDPSLFbaKGMtEePP1nAJ64n1AiM5fwk",
  "key38": "3eAX2x6sRLYdV9D3t2arhuF1DE8D75bGEknddAi7XWUgrgsXazNru1H2iBSLUimPd6f1i2DemsxzKT1dkus9m4y4",
  "key39": "5N9aRnYy29TXTVyWcDUsPK7sb3dxDFXWeWtJAYvbVVQqKb9jMhJ4gGtjZi8ocHdA7xMP2wUURanthWbh79UekSSr",
  "key40": "4fMppdFmyVKnwW7Fj5vhGuUxPpyVNarG98FMk5L5X8LtNCJa4gX7cMiMQ7hG6845rMEW3UDDqM1Fkygh4NQNxQfS",
  "key41": "2YD5DzpicMW8bUqmcb9MB4TJR6aiYLQkJT1xshDBRCwfazWJ8SgCEYHCKyGaLpUQyewfceCDEiShoGNYHHT3WFUS",
  "key42": "676R9WzJHk2TimghBWLkappimeVkJX9mZzqKW4uEFJy8TzzybRH9QFYA4euShFMrchCNJRg4xvoLQMXa7Dw5sGE9",
  "key43": "5zDfii52QbmUKx2279CxD5EditeYjSKcHayNSn4nEp3jtFi6YPDJfpMjKD6A8i95yiXSy7ssDHVQHjwFX6mNyGye",
  "key44": "4D8nCHLu5Va4Q5fnmuBxEpyogLTiwoRLguZdtfciif3tY6itDrsFWBejEKDxBTmnBfBdqgxhyFruijp5cWBfRLMC",
  "key45": "2JDjMpBQbATpWxPPoA2gQpSCUXgj1xDHNkv4MwDnRn7R7Q7erNaSHbdUeCfTukYJtzkax9zFQqyZh4k7xvEEfvQs",
  "key46": "58sQBgjpcC2WKLCzAAwQXY1DW2C6RacM7WzgcmB7H6RNyKMv2MNzvRF4vyfgxUNukN6E4GixqHtPBrk22RXm4aeH",
  "key47": "4tPEuYPwLHtzDYtiDGv5qAR8fmGyAnCV3Y3BYEPK5m4qGuPxBJzrtNfTjkXW23a25pKHLgxfJZnKkshk4V8DNmeS",
  "key48": "422oGLnRoEmnrAbaaAa8VLSeELjZGBfAm2bGsB2yHrxiDjWT8t8U55ijX6T73VrQGy6nGxpe2eFv1S4nybpP6C6N"
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
