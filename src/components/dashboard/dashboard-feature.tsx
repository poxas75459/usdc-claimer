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
    "gV7x8HyJUHiKGu5bdSJpXRVwkujGfB7THa8yVngzm1AZribGFLS6mLuJRnYtM72BmJ5tZUD2AgPjVpQ6cuQghw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fX7BdBwNgsG7qA5x7oqP57zVZNMWbdikQ4cT1K4yBF36pCvYucdZAATuJnLrFQArfsHuzyJ6dZMM4pZuxe5nV1c",
  "key1": "2WfhemgYRgat9i2P8nnpANrEqgJ7qUQQHC6p7wSFGvTX8MK2x8u1nDj56VaYAcGy5jiXQWAPti7b2pkEtyc5zno",
  "key2": "5ga2Jv3B6JZwbMtizfeGcFzcG59G8ovT8DNtaRwqvPHguaMLhKRqLjJ2njCsxW6rdvnVoAfhJjHJsKi7Ufzzb5ZK",
  "key3": "4A148RRYJ75jEuJSFiJf1tZ6WmaKVBZwAWSJShbuC7eNDkZgZWSECEmuVJ3ob4SipbarWYT8MJe1DaELNtqk9Ewk",
  "key4": "5nifAzgmqEA3kKFyEkEGEwp9YJGNjB5zMZTkDhXWTFwaooGC1duec5xF97e174gt5NWxsJ92AoHLg6J2a3CsseQA",
  "key5": "2Sbn2aSQejBxAE6eyyaNN1aihxgKW9JFevrvH5iSH1EifC2xpzjxTEj32QqAyV1YtgN1i9VVskuLpzry98s71vAD",
  "key6": "2fr5Ff5uFtCDYjFY2AFRUx8Dta9tpVp3UhManMR2513HYGbsU5Nh71VHmepe3c2CQdc9VwWPaRSSiAiLDLfawbNZ",
  "key7": "5DzqjhQoG92z7huWNq9if9tmAypAKuhC542DEj8HhLkuVcsyMRAUp6B3kR5JTAPu246FhNv2AwhUCXHbjcKW3aQm",
  "key8": "3tg6m4W9YQE6Q8UdysAP2Z1E254rTFfjMjpKumL98t2mfEwspCtrJS5uAbbvBfvCLUsawnAYcNH73VD34JNqupCx",
  "key9": "3vFYYUDEe68CM5tyYvoG1vzw7kT4YH81xqEpBiGUh5fCcQeWveBZh8v3AcWZagHWQoFfCUxWGubDn912yTD2HuSf",
  "key10": "5QC4cyWpaCdg7rKCCogUxfjZW6dCWHxXfpEN5rN4f8GiQMWeKKvKYnMbQmLGhX9vV12vDn5S4fDNZK3rpVYG1TKv",
  "key11": "44THmQtkKEdDjdBD8WWVG7p7mRyC8oAeLnY86HbebkGwzj3Zxd1n716TUT8CBSn8uDLY3peynQXS4ScH9GYjSNSA",
  "key12": "3VNDPTUcXqPocrFDzPVmpieahGqLfK6LwuoHrdP82mtydG6wHnsyUdvTLY9pLDWpFME9mxDho8ME2s6RLJBD5RuY",
  "key13": "3SQuFKEPVURwPCGjac8CfoX9cAUEFUWy3ysHZJLVjwCyafHzVQpVsKBLifAvWCW1FbEY52qcms6q1o71uTaZdqcH",
  "key14": "46moBV33175N683wvwmZXGgq4p6bw8JF1ZQNhX6FwZNmtG9UosEvQYawf3tc8ybwiceWJhCeX9Ci7ddXXd3asV2Q",
  "key15": "2CUNUfSrT6jU378rGfrzxohdeyFSc4G54UQB4r18g2Sw8BCko85hBz6Xdmo6hfEf97qLDmycFzehGjkNEMeYbRVE",
  "key16": "2DGPe9DWS8bwbSGzVzDr9PHM7PgJccDqaJcvYKcmKDHC14nY69uotMekuTaeDvBAR4MUMiFY7DqpR9EJwCt8KEC3",
  "key17": "uwR7hpj6jW3RiHk4nYoZrPGNj7kHsMFLEQZmBrn46pU1bpJGnz8ZZrYwWjbtBsiS5Zyb4deDRR8sE7p4LxmhCoH",
  "key18": "5QEKFL1UA2bkH53rMSJVQ2En1PaY8Ynpfg7cwFLach3wgZ9WZRKQNhUfJc8CtGy78JfxRM7DsieN6kuGGwV9asm6",
  "key19": "5f2EPmujanUtsGd4vfQbmk6EAzH6TayCJqNsh7KPYGfjfjwpUqts3zeV6HDB3NYqQHtVdvmQa1vqxmeVMtND9bc8",
  "key20": "5RWY8UnaZxGpXaDzLvzmzoer21crJPStJ4MxnRVjNXL92M8iRC4wdVHyAEKXYPiympbd3v29DvYBB1byupjA3CH5",
  "key21": "YkJgAAYU3VVMdwkUAPaTPHEnq7KcXbkR7wSBYt5W6c9RZJwkmJsfC6YoW1HVRQP2ozGApd52FLnZwfcCxRgvKSC",
  "key22": "jA3kRtwisTphUVQF4YFVCTuSDkj6eieqaV5r48RgYtFQ38hdGyWPGmaSP46t5xrt2N4tEkzTTq4BhzFVZQi3hKo",
  "key23": "2Kf4RWaWUE8VXqyBLKquL78ZivqZ18DxCQu6YzHgyHPjmVtXy2Nru8eyyQjEBn3F5ZZ9Sy9JDNbVuhgJiVwApNjg",
  "key24": "63WFXTQmwpbPbmLhrG35owD6tgrGn3YCqj9UuEHP5Nfb3taddjAa9CFCKnbVQpDLWJnUaCspLnzAD7JPGeyBGqaa"
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
