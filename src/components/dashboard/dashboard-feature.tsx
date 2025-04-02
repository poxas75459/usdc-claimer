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
    "3d2VM83GUxDrAEH6LtZfwMkVnRYSgY5NESXe27FJJs8GKLzmQi674upH8fa2pEscK5E53yiTvxXgyVs4nrzvK9MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hrk4uUiGp1kc7edHhfbzLBGVZ9eDQznLV2J1jNxhgvZDzjVxZ9aLSAQwCbThu67xX5j5Nqnv2DHJa2razuRCWvZ",
  "key1": "38ES6rfLrjpFXHwa7uZdfuQKXvGRwsL6ZDpqReLZE5LiVT9eCPNbqLPaHSKGp1WWpmk6WZnFMbg7ydUT6GG15E6J",
  "key2": "5PvyBTvzAcnpR1m1qL4bQ2yLDWkgbPzzcNZPQ5pvymtSaueQtqYyZwZhhtMRRJhaSj23gudyj4ifDPzYgfQ2bXWb",
  "key3": "E2dvg3RFWjdA8FWJgXvP7qCntdppaModXdRmz7sgrgsU29bG4QZ9HpoSpm6UPrP5HmGZpA6C8voN2v8HS5ZPb9s",
  "key4": "2NiN78yPW5Jg1rKVDeHwBkvucVoxvJpRvWBLyWcXuer4x4fz1vtYRgr3AeTaou6xe1DegMiHmU2YY86R7Luva7E9",
  "key5": "5Lqm23oVowV653aBmEYcyBNftjw3B8zNZ35YNktUVvnB7LHbc2XCTBbJi9urpvFLqYB3sMkbnQmiC1xfFo2fQ52k",
  "key6": "5W3kp5uNYHovPH7tJ2DLWaBVN2MZXtU2MjaKWSkJLFT9DxT7gE75qBi6MWXKyWoyRkPPg3dS6S28WnEnj34TDjSi",
  "key7": "2iSedKzpQxncmSqDop2bvHKuX6Dnw49qCbfTsHp88FdnZukerFhcb6r26jhwBWgExfYdzL4g8Uew1gt4inRHbpix",
  "key8": "2qwHuYNduHq6GstApGX5obPxD2qD5re6HR5r8zbQr3N4WQZQSEG5eumhvhZ8D2J91XcJ64aXUvHBv6mXiBwLD3mW",
  "key9": "gwNJ2P527tB6VggU7Hik11CKyoyoYdZFhENvmMAvop3y6wEDezQB5yqGV2rBpnpviyB94hYimxuA4SL9kV6aUUC",
  "key10": "24ryhotMqw4NU1VgbRytCB4pNkdqNRV3DmUVuyeThNpmDFY5sDfyNenDroMsgKgBi4Sw7NCyC4J1imALtCpqws5E",
  "key11": "3u85yhSus8rrVWguD15M7PvAq3kxTbJbc7AgdAXu1r8zcUXeTzsLEaPyhofPMeAdHgYstbdDoqQBwJ1adidFuEFR",
  "key12": "5gLwZUoNwHh9eSfZktKkaDv4Z93nyXgSUbe4JTjCJQoxEW52vpfcPqrwcMfE1ssfN6SgacFL3wgVho3iKukz9XPH",
  "key13": "4WAsLwwXTqF78Ysf8LeCJD9gFXt1bEkv48w6PRgcwfSmJY9kx8f7U79YoYq45uZdLD28Ve3SbrHw1fxpnUxwhxe5",
  "key14": "4tHz9xXGR7dy8Dhfg1VnDwPMMgvLLZnH7kTURHiv61cfBTzwxVWhAG5h8SLxU9H3FgaXkyGx43EYZASri3pBrbEo",
  "key15": "2BmkNXK2BiFENfpAs7tPdweK26pg6kBSuDe1QbqgEsz1ddss1aKfjkYueHxsMAoboXYWYRNiHkBGMzRiTicFzqnz",
  "key16": "3NERaokayHx3QLi47M5fKqAXTWyqGWBbrSoEFBjgqB6f9hMvKQw9Q2TYfygz36ceupKgcsLvReo7uDnXv42sWebx",
  "key17": "5gxS7natUnBCJymvHNnUWrft2R8LLrZtGzo2hW5ykxT3U8FtfMmtegj9fnpzihA1rL6UrVFLbuSuxivTpLVAkgbk",
  "key18": "2MbCemVCerZAi8uDTmgYw3ujWdaX2fYQCw2J5tTR6nPWPfK8fCpvQ7d28uP3LB3KJY8vaeMU3VFLpLmGDAmm9TGz",
  "key19": "uaj7zmdFjmZKVRaJMQoRdzprWCf9WTLTJ25BnpJR16SUVBCpZJY5AWp5ZGpkfjtWhoazz2NSWLvZ39Xpp7qUshA",
  "key20": "2bfQX1rFRb2ogWMLR2PW4n121erXfqYZVZudcN1dB5Do6JtDFzizKEuMa6A8Ao2W1DUfhRGKazdVF2MbVFpMqjd9",
  "key21": "3Qva4MUahm6jMz9kVLHCpddRWFVYFrJbHDsYFwWU2jeKmtfP9muQZZr8ipvoAPSerswTAvRm7Sjno86gXH5WFaXw",
  "key22": "CHmV6dRgunhxHkxk6945aZj8NBaSAVpxXY4jt3JL4Ls5rmocgf2xQoQN6oT1R2g45qv1nLUxidRG2jTRw5TdVtk",
  "key23": "2V4QQfnDRt1yosswMd8Ps2mDdKM5D1Qy3rZuRtmqes173pCfyXwybtSm8DSCk6xAzDqhKo26S5AoS7TwYCKj1xtv",
  "key24": "3Vu9wut9gATWtwNp7JkK2ah8SL2BJH1CH8U8JnGfoBkwfnyiszTJjUCyx4pfGXexBg5wfftNZ6KEVtjzHSPL2nA6",
  "key25": "5DCXFGkLw3C9rXVfB6DLQTt68DHvgittGooDAsfvzJ3Q2h8PhvE4UwzUUfX4XxvhUTuXQizjRnyZ24A4URgPFWhR",
  "key26": "4TBgDMUhKALicApHdMgxsVUYn4b7LzELsbadhGahzvjN15T5QVDNdH1ZcM41wEJVTvJ1uSJyu5kMmz6VDsY9dAH9",
  "key27": "59hdwArWAfER7osrcQS6VFSBKMTmMUq2825oNV3r4S7KZyZN7E9AyTuya6CnML9RN1VcJvZtZ9NrNq1cX1dRyoEv",
  "key28": "5HKvwrT1TskDJBPXWqDqCvqGPkSDYHHYU3saWhhwB8DaRpgcPjyxV4JTyYjRkx9vEsANfnJCBcfq4S9rLwrRVPm7",
  "key29": "ZqvYc8ob29VFWVvsgsHvX6WtoFhB8NTj5DjmZV34rGs6dhdknRxFjDxEd1Jdgn3DwhnZk5dWCk4giMHG8WkUtze"
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
