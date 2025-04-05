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
    "34k1N433AoLgC7eumhAYinRWT9wKFcRxcnjAH8mTswnzxL4h1dx4WPjt25hJ6Tqi1ksHSnPQfq5hfaajufU29Peg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6VuPdt5NDWBWWES71nAPdSvDdEXkqcnCS52KaXnGaw98N7EPcfepeJypkAXJWtKG77YRDpty3HK7CUsiJMryLA",
  "key1": "3KbuiT1JNrnHdkpPVEU5jNyjj7LSxHpoTHh1NtZgxPS2daLDnAWWTcq3ohPRXCeB9n7t7Ekw2WS3TW6jTH6qxpzE",
  "key2": "2Guzdzb8zp2sz62Bkk6X1apndCHwDh8B5qFvE3tvKBs2bEK5VbR5En7wKwL3f3M3qvzv2yNn7QSreavLu3To36Za",
  "key3": "iYW9fZc988QGcM34EohdkLNdyVq3vvEJ5CWDwK2PWMFFzw7CxK1HsNRTUUUc89Ag7qozFrWoLKzy2i8gPEpyiek",
  "key4": "3tyXTVz62ucXijPWnFqh3jkRAEvU7LXfDnkpkn3aj6d3iNR41w1SacV4epWxFB7F2v92NXi3Vch35anSB1JVEBjb",
  "key5": "bgoKqjRoEQ7MsgzwxB6reMh5KEh62PSmdUtnE1GfsvcrTRb7UbiACtEkzdeqC5yQw2BYm9cKyukwjeDjsFzuBPC",
  "key6": "4BuX5QnYPfT3QZskKCvUjQc6ZMWX8BVGXAUGcWKnVmC3Y9HLRJsi6L9fR9sPAR4FNiHgyGb9hC92F8VbKSLxCT2p",
  "key7": "2Zes2d9z4cMu5Viy9keRffjqskWkF6nH2Tx3hf4VLCypz8oSSyKfg7jUDbV3NizMHAih1qDCThWz2ow5ED1VNEBv",
  "key8": "2K2pTdVjcfP56PNfH2m5yLjF5PE1cidfzYcDmWMbNipVDuzrTT1P54c2cioHeoyCFatWR3NohQbPepdxd67wZGrd",
  "key9": "3wrEDAzJwe48QFnpQK5EzqJSpsFES3Ef4CfRzmHtGJRnz24AmfAfWJ9g3jBdB66E9Ev3s2jZRD4pcB14Lj8z1XK3",
  "key10": "aYKTiEFWPy14FiTyjQbvTS5H8PiY5MGPMa2BijuwXbBqGiHT1PTkqiMrZeHzhbmaDpkG1qpD8XTNHtuHd7y14FZ",
  "key11": "653nFdeH9vWZSkxjHzqrs33irMxSDA4dDeaXjfkN6n64NU698gCfawsCmZdprusabaCozHeGt8uvXQf3dw81J1oZ",
  "key12": "iXiWwyg8hyVZ4upagsCCkMmsGnqqVTXu8SpkbQux7sFXJmByX3A4RbZHXi9QWBKseyHATPzu4p56Sx1x6xiu8yc",
  "key13": "5MB2JZNoNfiTbfEFtBUhtn4PWmC4WW2onDst5ZjYLnX2Tk4oJarw2x8Gr44gcHv9Rrej1vYxA7LJyRA7gTRpKH71",
  "key14": "3K2jpVj5iq8XjznxJAADbvbTrdvdXfP9z9M4mboR2gX9wpsJeJnvMk3qCYXZCzf2wAeHHUUxb96ckwoHkBxdhrB3",
  "key15": "2UCxLXZj37j7abBLpoxqCjYeodJCuhg8QYkJRQZfxgT3Ey1HVyK7cr8QBE3jUHPFVWzgtjK6HMpwdhczh3gf1a3W",
  "key16": "5yA2tPcQpFEYUt5joxWuP5ZCGDaBp8VkDH4wFretre9G6VwSqNeakw7tVAnsHXDTivzZEqzT5JrmQi5AcxdExmgC",
  "key17": "4yCm3yhjJ3gjwsBcEesWHodcCPovaf2u3oGX5ptEzZjChd3Ehxr9voTfNepxdrD7vRbfQuNGmtGRXiRbQxDKtB1P",
  "key18": "5c6xaApNKrJ9yANftS8rimHwacM139Vmz66aKgmKcarfpWJxReGiqKdk2GcjTXu8x1KqbdccfstP3T3VKNTiaeo6",
  "key19": "2THHX3UzP1A7YKwXpivrXEAkqFAFVXHqyCHjF6MFjKZ6nZ979kGt8yEsofuXibeqChVP22JeT5695WdarrkiezQZ",
  "key20": "5K4LJf4FyssNCgE8c35p7TSkqtVvbRwy5t1XN53LtZXEZPxm1JzvRZa4aS5mtFL8Pes5ygaYWUjsMN6MvMCBnVYU",
  "key21": "2uLmVyzDJ54VaqN5NbZsWk1FkvYWqeyPt2TVRWqKNKLXfYPemKLRLo5eBQQpwvpHUUNpZaiJWExaJfdikoayvC9y",
  "key22": "5dkB4VBadb1RCVB1iYM7BStyBLMhVTBVq1p5qttmFboZWnQsgjULbK58jMvgH5ZQaSKyjyY9n7xkNiEvA887PvZS",
  "key23": "5K85yLJmRUuodp9GH3P4Pwfi59yvpLzgXTpL9EqZ2mxcBnFLEvYUXnQXU8QJzKiFh3ZkWGTrVNReZJHTj12nxKmm",
  "key24": "QQ1frtHkXpyyUvff1cSKaWYgzF9mujzHDLyfdmGZCtvrwJwhH2teavxU21veZ2nQsaVPaLXSeKGpmBh29TC295x",
  "key25": "4Me8NP1wsMvzFqWHpVfACXzaw4rJu8y6NByuQeRQ9sYt5XEXpWTdTnquZnL72SnV88657jcrq91g33s7dFADucyb",
  "key26": "4CASfF7LFcPgNh5fAHhfiqbNwtjoXyKNFt5AVBurgsLSYjv42GuwXfogSp29q7RVEdfRNxP2LzpNJz2GeudS9nD2",
  "key27": "Av3xPekDEc21u4i39Ytzu69WYT9g2ZwQWjvGVHHLfNSHC8JqBkCjiN8MAvBrRa6uZLGYYGVq4zAm91JmwPuGSSs",
  "key28": "3Wxxnaf1G6NCiBypiZ64pzfQR3Gd1kpWtWBMEN96pPZog8ZC8EVYYwjRXZgffdopnCxmrcP3evGPzWbK5nBP4Ayu",
  "key29": "YWP2HpWqPQRperd8uaBdMm73JQ8X8oEbD8DcmXjAbe3YQDv9cM4i245RRk6FDZ8VQJY4sbyYJcRYapFuEonNDEo",
  "key30": "3w2xB9wWJpWqCZd8MjUz4ESHXz8WS5KyrP13mKN1kuVgbPgQQrZqQkqY6DvXwpqoB17buiV6DbbNRwfDCuZax6PF",
  "key31": "4qeMubNADMCaWwyZMwe4kX8aenecnTY6AL7FT2pKFdanWqCJKbtqUfLVKyRBxQjrRY96iur1AEPAMQQGiHTkgeSF",
  "key32": "4xzFs9iSzTQHS5C3W81LJeFW6NwCKv6DM7DhyZ3KHcA7wYGsiXhbyjsTkYoXrvTMhg2B7FPJnUgzujUhpvsj1meg",
  "key33": "5QDv8bW65CYy5WVAHfYw3rDXZYk63N23JjGGCUQPW4fZYgEx8FmG7dfpkiDBvXESVeg3rfhgrHbpwNZMMNsdZt48",
  "key34": "JiFtLYczpWVfJfeWAkzhDa8wBDhTtxGQ9Y6fCRP1XeQmQu4s5A1KPeRPq4doppv3ezipcbpuKmTMDPV8BRTuvDk",
  "key35": "3n64Rz26tCjiDugaAvexmme17WN6NDSa2td44J7yNSAsgzo4nP3genyCPskEP5DcXy1VMZpohvtgxWARsGWpBPYc",
  "key36": "5TzBDA1i2mxwcV8MHNqNzk6NEKy4LJUhXBWWQFsdE7T3sR8iawabQqVCqHWEzDKfLNMkTNRqtR8qHE7MSRwo3zp7",
  "key37": "2Gk3NEkTKWCVj413LVSQanFiMsvNW7sxsH5U1MzbEMYGiyhWDq51sUgzBqhJrmUaDzf7vqvHScnzgRfiyUFjf2jL",
  "key38": "4PR4886kxcwbkR9zwHSTKevaepwvFT4mpBSN2FWPE2AKznx3Vj37LbjN8rntC3TUksrPRCnWAMkEAKULxa9wWFWV",
  "key39": "4HC9cFRrkzM4Ni21dysThTojXUdyJ3Mswt3xjQRRp3s4kRqMgE1zFZvMJahYT73wyuEs62Zk6dqXoqFMWEyWPCRh",
  "key40": "2xvXAXPRYhzrfQUPFAprBwvjAXCDGgE9k3yZKb5tQZLG7TrmReHYozJFp8rdtZyGNAUkNbjunafJwqdCT7Nxg2jM",
  "key41": "3Pns9mxxX5U5Smwba2BtJsNs7pozcrjunpjaLXZ4ciQtSdkPdq8SvwRUAkq3oBdhY4gPfs6vyYoAWapnmRq5RhzB",
  "key42": "2uc7fcHqHGrgrrboFrU48LNHeu4E8fswVWjKUH6LLBf4YaiFkMvXxN1eLpQoo6G6zdReLhcvAriopwoqjUcZ13Ss",
  "key43": "3Do5ccBbPJVFPMeJhVQWsk3BgEFhBcqmd6rK1jPeeFZqpDX9EpZrsrNJLd7jpPwffoV93SMLP6USaMfnpU7a4NWV",
  "key44": "3rhMn4hWz7L6yFjDjMsphvAT4FWdRdfM34VrT8VsgRSVKBYcaJhj7WUvAAHqLmx8c3QAmDKzojPpYScnSZCc2Vmc",
  "key45": "3ic43Mdgbnbo2WRLBgXQxXyu8pjsAHHqJYhk8rz18W5bJNPt9pQwLyVzY8j2r2djNWmGMZicvHMdGHy3uWVkTEbo",
  "key46": "ErQxs1tcfFP5CrwiQ6t84xJSX75UBHK8YdW5ZikTzXaxd52vZnQonoLF2XVfLrWBuFeXV2jehg4yxD5oVn1yzX7",
  "key47": "3Ww739vcQNf4Bp8qccfwwzXdMNMzNAxnShv67TkGbezwFKii4heMqsj8NkebmALGhacz2YXjtoqA6QubQa5yKNPZ",
  "key48": "3LUXBKQHyRfmCv8V1ryzr1ScHHjyrn1PHFEWo2jjbTrKAcSr1x4bjEa9voNWHfk2W5bvqUd5d18vnkbLzgCkTQq6",
  "key49": "47LHFiovRXYYQazPyVn5c4gTzY7mf8DyUZHFxrmg9J2fPFaLdqrX4jo63PfBR7xxkWVa6Gbq3rjNSvu1GxYgEMjP"
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
