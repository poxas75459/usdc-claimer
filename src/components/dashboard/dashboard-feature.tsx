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
    "4XvDNim1Um9wtr2xfhVMJr6Kw27TZnBUABbkHTjoDAeFjG6c6am9oiAY78DyvAy71echrM8zrZCbaT89mVhyBc4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6wShuSzaVN8A88ycSgkkNfAkfyMQxsuRRrDRKoadXJvVJp1dfkwyuMXR7WLNmvQtMy58hE6uJnFNqhpjdn1Nx3",
  "key1": "4YW6kLJ3fiwxjfAP7Q4feQw9kHbaoroE6mNkF2HgKd4Qg37Awxe1soUh7AfuraiLcGKeBXGr1uuStUqQ4fgu3wXH",
  "key2": "3xy7BhpkZrdv3uoMqVPLxGdzXN4sKrAVcfuf2Wnk3YRFTmU24jcHQAi2BLUEduQiH86jGr8R9FgbGgW8DVCM38Te",
  "key3": "2f6QU7AWJNtfLnGFvWLx6DRsAmd2iFfs7htSnhXnuZj8LjYXvCSq8YsYz8ohYQWtLiiG8Jq14jLfRqy3PamLVGXd",
  "key4": "33G7diq5TUFgFmZQQ5QBfXjiGM6mXN3taVKQs4zk35snqs8CDPwrWcLG24p2AtJGvdkSH9S1e7UNhNQgFPkj6j5J",
  "key5": "dQUvBKD1J1kukgiVvbvFVK4udvuGTE5LSzoknUu7FcA4KcdXjZnviXYUZDQLUv3v5CxMUdk9Un5wehf5gZ5Sz4g",
  "key6": "hRHb2vGyEPeVRPWdvX1GkrrRDxQJJm7f14nJDqAJxDdonCjFqSzhQo261giaXkzyJdQzVN237ppSEk2FPYKDZwk",
  "key7": "2FSV7DX59z6pRDDcehYecuoJC6fiKRdtaMCqMEdfVVUoWWU74ozbUZgKLrLjowZSQtTGAPrJZktWaVVg5YbtgFfM",
  "key8": "52k8EYJmFYCpDdGqUFDYjL3TnWGCKKFq99MtqLAiM7SbwucSCP7Ay4YdiuMdyM4EkfvwEkwyBTVgGH8UQQmG34E",
  "key9": "5kDD6JoTF4LQ911RQWRXCcZZ3jGsN3Fts8PWwktCUe8rCGaQaYhPUFSHpuM3fqCxpr12YVypRHhw1qjg5KF5Mb7d",
  "key10": "3FSyFiFkgg3SVhYYxyMPKQBBdLuXCBKB1gwNodNTezNAdeLewSCtCamfKvaAhNPU8LchB7C7dix6PVx5iVeBTSoi",
  "key11": "472tSqFAsdjHXCANuKGRbELWSbrKecwpErKomzgzuwdXpAYPizzD1a2yzELso236qgG8ty1VsZFnXYJJP4MUhX8j",
  "key12": "yxb6ZayEBty1WyR72hYXGrg438tqDh9BCgRx39Hk4xgr3hsHUX7W6tc3xN345RRv8CSVYZ4wdUL4uuZ5qD7VGcn",
  "key13": "M9KyX94pBnogaWrxHWK6mqikNyEMx98o3Qeygqzf9RoGsxq82ewhrNyCnAzg7qudJvGf7PoZET5qZMabveA56vf",
  "key14": "5Cp69ybo6TmBWFxNFXCks1tzRU5rx22BgfUesnxm7mHsabGKBHrLf1g9Ueq48CMtLHEAybbeLifzuvr5RRZBtnVY",
  "key15": "2TXL9upRLor3H7bqmAxWRfw356R3LnWFZjNRJi6TEmiX7vG45bGBsrawpcoys8977nLP6UXc6yqz8SrrPKfVrzsn",
  "key16": "4U35wk5FfdKzV5fSyvWUUKPYjJHZ6Ca9whV57pbfHQmUYJ3XFVQZGKe9FfTCRPuc62hBuAjcTYqNLocVKKSCMH56",
  "key17": "4Rd4tZfkDQjLqarRT7WbWgSwPj4Ax3ZB2faWfRgWu5aLLnnZinTG3AqrrExQFifyDznKYMhwdEZFjDHsRyEipAxS",
  "key18": "m8XpKEAdgxmoWMv69jHFAVm6Y4kx9cC3GwLdcpb3x1rwFrecQJtxhbUZhe6dzufGP1FrBg2FVgKA6cNgnhBUUHy",
  "key19": "3hQrN3wumqXBwKbofuKR6Xnp2w94wQ6EbV5Mi9oGhdT1fXQp4zDjJEAyZnHX8GYU9849D1uSZMsw4cHX5TXN2G5M",
  "key20": "3TbWMahpttVWscGZwvjeZVfA4vsV6mdCYCArbkwWK8GdJFMKUu2vfhCyyt7GHqQLNUiQPCJ8xtHchc2tZzVWbs4n",
  "key21": "3vwQjHYghbYdRs1cGC6dk7ZMQjL958snLCMWFxDEQtdvxNeaTSBTL5KqnjGCv7UCe2B7aZtyfngtBbFQawqVSczQ",
  "key22": "22agPVzufbYRDESUxGjonaVE9RgA88DJe163hvtSjJFaFjC4r7VLtTekBc3kMSTpi7iyUo7yXVRuTop7G4hwVwD4",
  "key23": "He1vK7gGC6oQDB1SkaycHQ2nfEuVAyT6tZCD6wqt6E7AeGy6nQmDq69Tw3Qj2Gtege49dr7a2fXndXwiwtT8Gxz",
  "key24": "3mBWUChuhX9DBRtBYSU7W6oABgUTUZAHXHSaK9pMFi21qtmpkvsPjWUVCptNkJJBTebtmGtuuBzPxyBbvpPGrpoA",
  "key25": "EXfdP5YKqoGeVnHqKKU8nAvcxdiRsYLSh85MTEmXQf4b5y4UND87z8tteGvnD3GBratXchg9YDYG2F9kY97DToW",
  "key26": "3m3vRF6VcYNXA1hzhxCqtwgrcH5HpYwvArj8dcwiW6tpiDEiMFKVgcxJAtokCqyXqb6Rkdwc2GZUvZjSJkck26Nt",
  "key27": "3vzv9gT33LiKzjESE8vXasoA91QcDjxG8Dg65E3qadekhKBpoMhcsFV3GEYFp3voEfHD5dia5dDX68JiaVH6mL7T",
  "key28": "2XosaBhMjo5AgqJXAVp4SEzMEBkfhZB85A4a9K6gYpkQJF1bYAtSxh1zygKPLZMF1Q9bKo68wB7Vk3BiDFWjitcy",
  "key29": "3BfKC3vHcjxhRQPNtacvZzemsXKTbnY7fS35694BTsc8gmTmxZJoaTUu8Stg6v35RNTcxZiJqJTPEA2KoHdzBeP4"
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
