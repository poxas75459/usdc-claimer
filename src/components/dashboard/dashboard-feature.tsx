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
    "nEbcpjnnUUHdtPvPrHM83Q9eZ8Fntkc3Ac5uoS1NmDVeJ13r7kGqVMy9qkpXWmHVNLT4CSjcPL6YZtnpMGsACwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5byL3SAHdZHpnzTUD4czqFoNpyCqmkkvEVuN8sCopiumskJjp8kCTT4ATPDyn2BbK9fdNP6uaYJvQaKfiRa7q2yj",
  "key1": "5LVZ5f3e52r8XNHicmTibd1zxpppLMkyrSFgGZH5noHWDJSDsct6Tii5He4xDS23Zk8wdZV7To67q23HE1ccR9NB",
  "key2": "8BA1t9hjixAXQaZe8y8BBLrKUP2dgQ9DbZQv7WwVmpgBw8C1WRTEG7nFxZi8wXkPXp4P7Jd9Dqw2RvAXAmsV7bf",
  "key3": "4XBDUrtvXGdNBabYDaUaAs7NwnSsQFj7fqkzAXnXzburT7MPfLr9xYDt78fMefT6oexqEu8MjdtQsYYyEPfjidHe",
  "key4": "5spWZmhgmBg16q96BFUKaVvwvSrDrhVE5NvcvM8a3P2uoMr5Nvq8o6xx62w9ETw2UJoc5tCsey1st9Bsz7XaX8Fi",
  "key5": "28hQ2sxh7sbt4xeTPDZGQZ7jw8nbws9n7YRX9qYPKnTHM85P12VSVcjz7HvU3AQiD2GwzzWddVzhC5s1LEVBvAWv",
  "key6": "HNMVRtXXCkWpS9AwkGhMpgzxuN8DXQY6jcBuL3purgMsJ7Hhr2ygnqFHyZHzKDrriHtWYxiLYMBqwRp3rB8dWcx",
  "key7": "4CCNJtXPA6ofTmaiFwDLShhf3JqHnc6A8GKkts4eSYD3r1dhEiu7UgoAuiCeUFBaG6EHkdfoHUD1LHoNH9B6ao1U",
  "key8": "7aDVhcDaaUKq4nQXtaXgdW263myMN1KHsQMR1XAXHbcF4cidpxEwX5FLd7omJkJXL8jtzimjzzzuVDGSSZW98Nv",
  "key9": "2SduD5p2jkUcHcTczddSYqUEaKEH86egeS4xH3ZQpBek5KoUEH88U75JRaqtNJ2L9S6rj1bpqECsuk5wJoTuYwhM",
  "key10": "5qzyQNuyg8DrXVcnSnYLeTQgWTLtcxZL7wrNKcQ41vPKohzs3fsrASwkSnPfoB5WEvDrnamRbNgCjExniLdkXehg",
  "key11": "5N2cJveUTz5dbGpj33TFow8vCpXEUzRb9KAo5BMqDEu5WHsFagXaW4VkF8D2Vwb2wTnzQBj97mH74MgGE5TaEt3Q",
  "key12": "48A2ScAW9qaS4WBXcgem46j5JmHcmo1jQRgsZB9xb9CGqoN9udg67EmAHzwtscCCZYWZWStBp4sZ52hch56LDERx",
  "key13": "5ShUinh9RHhq45ZS9tMNskzFCDZ71E2WBthVPUVzAX4RJNe8QaApJHvSZFCjP7j6VkPZYQNc6VQk47ik8XE2xX7S",
  "key14": "5kv2wktU48TizdDo47xaarnnpsxQQ84ZktpgcF22Lf9dKArmBRAFABJUkcVqiVqVYcZEMgUY1SbA9Er2x4QJSfp4",
  "key15": "4QAHhH7dJFxLbueZkmpcDAbRYpAiCy9dJshi3r8PmJB95GNbnSNyi8WXEp9QXkcSqnUNvi9UuxuqSSHDdye26ndL",
  "key16": "Q5Hg26BARNn6Qjru3aGoBVFU4jchkahzcWDXavSyud7cvp7goqAtv3X8fGomAonSn5c4BaBdJJ7AqYqHJwuvknh",
  "key17": "2fexfNoXiRYFQiJtbf32B4JULHV9ghPBLqsxMmWP3k7eRdBqQ6jcah3Pztk37Xyoe2EiHzi141w2zCqR15GY3DEe",
  "key18": "5ztMFbmieuEq3G8r7iBWReBhqV8y5B2YUJDF7EjtBx4QSzmMPPUSqqxvvppFuc6pRvmxC82kWDaVrb1Vfqdc9h98",
  "key19": "3hStpvNx5i4ScxPKV9hS8v57UdjoYfYJAh3Ja2dWK4hNf56htaiFrbfX34zHSeMqPp9UPEUPraKabe9UwHPCcXMV",
  "key20": "akwqwcY676XqTjbueCpVT7TbhDouBkMK8PnD9AAerzVitSrXL5nhKnk4S1pc56XQBp6osFUaH3pPnjqWns7AGax",
  "key21": "56TAHVR4XZ1t44uwk6wxZqicq4PVK6JRVyj5NQPdJmZfGsnckfY8WJpUxATULc96PuQo5SesyEJndMYEBaSfBUot",
  "key22": "47vjgd1gedZwq9czeYraBp1MXGw38FSweUfsxFYDWxqC7VnBQDobrUhF8n9iqL1xoNkWSrcDBfnWTeHFmY8gxccf",
  "key23": "53orriF8VMFDFVs2jLj7V9dpq6ojwcQtV1UW6QEpBpmwRPcWdrnhH1MjjFLJZsbeGQjHDuuJgeiEA4r45ivieC2J",
  "key24": "42BZ1bACHqVVH7WLRZoYSAhxDtHfWHfdFhBKJ1VTZFNBCQQAQM33qA2MJotTmnarFNNxGnvQE89KtCYm91pxqVgz",
  "key25": "3GrcTm2cXbCWcmCjREKUo9iHDqZtfnw7p81CF5wRuLAyUAxjtn34Cba47icUiLKbjXbSCjBfsBtNZAVRUZpmfvp4",
  "key26": "2LXPzqbQg5Q8fU9mqtFKjuFNY2jhorQqX6BoKMfCwmzUaABPBWNVLqFwQq4S2pCgQgQV9V76gFya3HxGtGyfHCbS",
  "key27": "aE5vzpT9JiUMN6oba53HiZdaAaqxVtbXh57iZrQwAgJrPXJkaDntVxKpT3q2cFc3wY46QgXnZVMW4saPo3VBSG1",
  "key28": "4DRFiApK5e3Mumm7DCdXshZ8U48SRDBjhbvQoHYANLRBLhTDLWwJFEXHRSVhQFW9mMP2DJN7ixZNQKQmQ5qWinvW",
  "key29": "37ftnjFLs9VMNw855rDXhMqkeGE8RhjCyFMFyGuWd9t7mFxYjgCJxZSogvuUzmTrug3FVKiZVu41NGU4SdYKup6w",
  "key30": "4VKXRJw16ioovDMPpy1FEsHr5QLjR9XyXCbkwXgfBw8dsujFsPg2dG4dkBkJwQQLTy9GVuFuqeFUoi2CSN3vPRrw",
  "key31": "2bmW2CbYFZ1BzkxVnyroJpKNjhXaTXD5M6nZXtKdMzE4HuqJe5AyR1FQ92MhUkX6JBHcgJRv6e8UcSDZ9rSNWtGw",
  "key32": "5S9Nf7vph9dEbEwTN6egzAK3qhK6Pmfz9cEGWyfARFbnJaK6orJyJjTFcjeKw7W3TQLs9y9THDKK58pg3kYiGoj",
  "key33": "5Gj4iCy6ZjLRzKHvFaaotHHWiGTDPiLrX28uSG3wfTDJpnzN9YSiWXZ4ivAx1UFjXyEnNiZZqJA76C8WBh2wviiN",
  "key34": "5iHaoA5p3VG2oJ7oAJPPE9AGvaBttC8rkgmsrbFgCySM64ccLdvNpCgbKrX5mWX3MoUasHL8wNoZTiBxpKSBEyuM",
  "key35": "4xofJyhbw7koPcY2PbnmjY6cHcu2gkVLsSZcVHD4LC85wVFpiUhTQn6uXraqTLZRkk3dXHL4GLB87WMk4VjPkUtZ",
  "key36": "5cfgq3YAhTCezZTx3YbmzjU7kss8kBoWimaNeaJxSWUUXfpD1hyDnBZbkn3Coy146aVVG1MDv69d2FQN139GxTLx",
  "key37": "4hDC4BfjZQJEvNqCFEkKU1mQGTNmv4csGMNRnacxZkDHSHYXu6a31U8BNBkpi8KwzaV3eC9BSZYYpsVzKj3S32tK",
  "key38": "3iC3vPSYEATMsV66p6WXiQJDp1jdKBummDBUQVdJ2guVoxVCfyE7i63Edauy1kcdqFhysErYKpCE8ZL5tqcnxV1S",
  "key39": "5EQED8r2oB36E2CbLf8pDzDDBFyuGRdoZ2XWdSqmSQAsQ64wr3dwWabjKTGcWsynHbfN6J4ZcxHBS3bBwETXE6Hh",
  "key40": "3ZSXc4PXdw2hr5j1fUkA2uv3CKMMaTFkAPMAvbyYHaSKTuZhCYdgwjtAS4Vy5sRvXd3Uz4eqNF6uvbh7WisU68Fr",
  "key41": "2iQuC6eNUSsT3SVNHKsZnF4ThcYYHeKgSLaXr7jZGqbrmqEChFnva6gMcuoZbam4sSZEKkByXHyuYmBnU3g2fEoE",
  "key42": "2LQzJqJfvRM7QvmpseTzt8ayVT4hXnNReYyU5eev6vL5KV1HtcUWzqVpn2Jsm61R3tPSDXbRC4SghpCWmfugY4oy",
  "key43": "JoxyuwhhJ6QZ1rK4ZYALJBX3YDnLAR2AhG6ep45EZ76ZWjVdDJXLFYTkxAWXuAt9L8qAHpCqM2o6mV13XM9f1it",
  "key44": "3PSwxcN2h3A7ma6weFrVTZiZySvPi6oJixVCVnfcy5tsmzuMGmTkgvSP1cebpvHSCmZDYFaWHV2csdbC24ou4AUp",
  "key45": "vMEuRbmj3f6bv9nRPe6PKjxyeeZMKYTvq3YFkp8ujcZmvy2kg1g19iaTtfzcznBFkDJVzguHgNypB1r2sc6SaJ8",
  "key46": "4Dg3B6L1mdYouZ8bBVBRDHhhiNr8wBnPWPyVXxRo2uezei5XiRQDQK1ie9uyJ4rZGMgs2ZpLYwzD6fyqwitb3goW",
  "key47": "3aaLcsLLcuTEgPZgBFubNP1b4fmeDXwLcbiShZ9swDvEqcD4Ai27AjPf47nUif7EHcPWS7eo3PmSa85w6b9U12o8"
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
