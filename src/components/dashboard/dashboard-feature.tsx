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
    "59iQLEQdNAHzuqcsKBLkcRRNQy5MkR6GeF7nPYSbb3fZhB3GL7yUBUyJVVr7wizx6XqvtivbAGww6cjpAVwDfTm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1uxmbM9QV7jRhMShuAxUozHHYT8zKoZX9DkMF5zQvGbGDNJoTNFG841KYdWNER6dqpk3CTNjU2gqtwcyF6YfN2",
  "key1": "3do8jwZmYfyHr9ZAt3ap3Dmyh9RsGWcdJYbtRAmeL9bho8DyUVCAZ2D9cwE8R8gTyAuXkmTNMiybj36W91Hnpixy",
  "key2": "2FYzkLFCWRAz7gwWFYtH54LJBbEu67xiX4uf4BaqFY6vMMYnVPCSSibCmeW1qUdRh6FiJu8MTRhFk7QJ73sf2wVt",
  "key3": "51UBGSSgmetzrykqRpeA1aK1FdoAi9qLHAdoQBM2npXw7Tydtxwn35ZXBc3tqsJfczHAYjCgB7ivXRdxeoqAyU9P",
  "key4": "2TQyp5B6sUAL7iGoxoYNcmYKJsnCBamM2PeepSEncp3HAkKdGkHDASSGxNLbLPujuLrSMWQ3zsY9gRGcbULBawir",
  "key5": "5AqwWgFeDnzwa2Kgwmh5F8cfuBW8iXQaF6pW46Frw2DWBvfWSKsVCjNErn2TmLMo7dPykAcyMwpHz5iY3dcCQATx",
  "key6": "2Ceg3L6aoAT5VdxYj2paR39eMPe8bGzrTDAAmqSFGsBDKRRDkNmhLtS59Qun1oixs76AAYzSVG4RMVDfvpkLnWbP",
  "key7": "3w3VBg2aAoA89gBni8wAwRbcF2L1Zefoitg7hGznqB46JJo31qKTgYxsddFrKinhiPaDZoqiHKGZ6vP8k1MCCjjT",
  "key8": "3LAr5ioHLTYUQvKtFdp5rENNpZ6PBt5hdSBa73XTw3DWWRghP5Z4JV9E7ihc4sq1T6G72T1Y3ztzmPjXhDJgJpLY",
  "key9": "26h4AW3YPndPbtnGbD4hTcX2jPcmMJF8THfFLPGJyWASK3SpaQ3m1vVASgAL7s4UWbrB1mvTFaCD6EmwdUNgts6P",
  "key10": "4uLyojbR2mo1cLwbdiDkQw9caNxp6hurzraVdC8BP1qSfxmEWdXURMSxMtZg8KyVFHFMzbvjGsnetySzVbHe8pnk",
  "key11": "5LZk5x3q1TqNDr2tvUrv8XvFTFP4XfPwfuYfGYY4CCNve7HbfgV4xcTNwcwovDG8KSsm5g5FWYyZ4bs9XcgC4Gmd",
  "key12": "3XALMJYYViNzrH5yC7FuEQDb2ZHFzTgk8gU95ZKRPBeDhed1F16kzUkRpmLtMre4HDKACivUPkBTcv3G2aY2WRjg",
  "key13": "2ZqPuMz3bwF5qGjcv5nVbxYbKHrhaVNxRN6z4AXsYnuYQRaQH3LxwszdReXh3HSvjNEzTuu5MY8bu2A5ByGiiEZM",
  "key14": "2bqzQo12SHKFL3XVp6BGxY62BikTvZwmiwoASAUnjA4NSfXhrL8qBAzhnQrBttj2gqJkCjKvR8dacwbp5Ng2LW5N",
  "key15": "3AbMwVd9d9w6ivEHmkZfuHAZYVpSE3XEuo3WeXZqko69uP9nDHPYMQHrF7Tn4AS6mdeHoqMoHv7y7Qs2q5VCxpsz",
  "key16": "5iu2q9eRX97xhGDGayNpMnT1Pag5sMdCRjxQ6j6LN6abeNKTcB9PSy4Njptu35jHDhfQYyMjwzzCUaQZXX3fAaD8",
  "key17": "2RBZoZ5xb7yqYmfRxaYHpxfbrN1UurJrpYTtdemNXrWiaZoHvr5mbMPuhmERgDHuWV6Shrvh6xraBirzLuTZFGH9",
  "key18": "5Ad1i6SFVr7hLWsEGXbHhYHvuKxjeJVzigRvXfbyzPWQZA3LuvpJE4CWEb2fiPveLhjVwUdye99syUr2pWgHmKwZ",
  "key19": "FJoP4mTTUMRbuhR1AveV9r6J6tMRJ2sbxb1niHawznGe5e9uN34nW1VvYyDUL8QtQ74UHB2U8G8NEmdHiz1fgbg",
  "key20": "GHUwoFxNYFpVJoVBXoSdJNTuBcq2C4dwAu2AnumSHM86xHmoXJ2P2bA7MY9iF62sFuRigvQTSfhiDH6EaDm7BmP",
  "key21": "5hbXqzjDqtXJX7JKNp9zUBcgB5cDrEhES3cdFCAq5uwSra9HkxrVmQ79jVaC5TkrUQRrbNaf7sSvb5zVKQc9ES6C",
  "key22": "24njsr6Jk9snvqi31iMeFur4HhnUJjGsinroHKn8z3w1QSJE7nDDCajmssL52knUJnECEDjUTiHPLnMS9idUxxr1",
  "key23": "2yexhX625yoPyJvKAC3WBnVLPNnnoG4NyduSNMupon8LLozoDQssHKWs9BifKXaStFhebDPEdo6DmunUaV3KkWvR",
  "key24": "6tbacMXWD2J1To5myGRNmgGXazYivMSz7sWMFqPzYPr6vc6RpghGyvui7JizSxDdbQyjs8pDHXvoEZj3PqDQktb",
  "key25": "4d4pwKyQfHQh7EHLTS9zHaQGfXYahbQDWZcNNHneoyRfgFviZbLzJKaCGWRt9uEkN2CNF7Tfajju9kiYF7P3u4Na",
  "key26": "KLb29yA57Ye6MEW98XHpie9TPGgouRE4bnZTE6UHpy3i5VYzTeonCqJBHWhr9gekdCoaQGg9iGwFu5qamSk18Un",
  "key27": "4SFEDCuhEpBZ4kCnuY5qQwYeUcwZQgU1PTBZF6jwzQr1xRCeLz3SrnHhgBV9zX1FvbhYovGNQtThFDac9SuSvqhX",
  "key28": "5TUakr8F9y6mFTkageRHWw2fP7kLpjG4G3HSvG4psZTDZvABhYPs1L3zmawpwHtxFFmpsSbbJyx4a4YkNpBiHp1V",
  "key29": "atC9ih3xy1BvmY8NVgZsXcAUU77zm3YkNVBWoe9VFc7BtxgaMxY1zmUBWPQGEyA3NoGp8Xeps4jXH1Me69paT8D",
  "key30": "25VEZqpdiiTzdW4VibhcLMQGN36qtLJTgViDYwo9UHUhMVNhqBawg1bL1P6qGYnB1Cwg8JZnNDGq8HbxSdAMVPtu",
  "key31": "3Lx242skzFsFKRiievQd7rw1kJnBwPbhMTEnTKysDY54CEoa6H3xFvdAufZtVF83wHQN4zw44hk2X3sCY4XZFxJq",
  "key32": "4Dr3oSKUf5XgfnpRoTXhW4EY7P6FWBjNouJT6CypMhP5RVjuRFpv3cyArPkQEPwhcTSoMSEPaSNosnNhaDq7XfeW",
  "key33": "8vRbxTQ22ohGoziLD7WwwLvVY3ZM4sVj4TZgym1KUqCnrMakGJ2rnePm2gUaUJtqvi1YEZg8ZqWVEPN9ue43Ria",
  "key34": "2TDRhAMLg5AHvpy8DJKhjohqXM51JpwLikEdwXpSiz1z2kzR6RvuTVzq4HyMw93v3nrQ1eA4esoHwHr7EjNnBbaW",
  "key35": "x5XWtKpHfLdiFpBV4rLyk3z7rTSh8GzMJ52mStTeM6YXLN6g4AS2dSebtJBtHp5hfuK1pGHQKybDzBNH49t4qqj",
  "key36": "5zi5MB1qTtUHtnff3w7cErN15GhkmMTTBykpEtVeW8xRUKkQtF3eykmQwp2o4x5BKJi7o6bwcSgcqwNqFZ2JpsZi",
  "key37": "aP5DP25gk23Ue4Fyx5zLt8CVwTzpZVz7iBbivrDGUGZmeDJGdaEtxx3q1csURQZRSvGzcQU7gCxP2nosspEeaqm"
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
