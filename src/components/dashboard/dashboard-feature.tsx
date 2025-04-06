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
    "2XJcJ9gWQB5AyAWGEz4gjMDvYv5Qf3CfkG2i2mUC3fq28R8XN7bswpuYt2ZPeejCMes8riXwW3ADrUKCNb1RGz3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKStDEwoUhemPvruwtCnYV7jD2d5MfX784kQ7wgUkDxLhESAW8UWkVMBgLBNzhCapN5awj94ivXuY7cK9bHz9MA",
  "key1": "2Uzx2opa1XYKF7Mfs73E4MwEt676iCM6nJZrma12ExiKag2KsHkSy6HWLURGpFbUhpurW2MdaHty76KKkZo9tR9T",
  "key2": "2YoBZh4LwnnZqFiTtNDJHA76SG6z6Mem7Mzwx5viErmuzfpk4HqsftZxtK5iQ1ZBf9XEiTWbrZupouMYBD8wsaZi",
  "key3": "23Vn9D87Pq3Sk7TL2YCwtXkaGjb3FSqLBMDw1kZNWcb7HgcHosMWXCycvFB7ZTigHPwALoQTsf85r157jdLgtfEJ",
  "key4": "2PWav6nFrxS378PiYHDWr4xbbza9AK1T6RgwejPxdBDtwxyUyhL4pEWXNajYknbhywAAzq1nKapUq7eHpL7Cjzj1",
  "key5": "5g5LXusBe6mVq6Cv9GKNfpcXUdETeHfiDdXSNxGbo35uupTFhNwmwkX9CqeFMhzvqkTnhHREnxsnn7u4YsaBHz9d",
  "key6": "2YzVLye7hSgyCgvcg3rmTD9sEUz1noNMWVaoBu7KnVaimjH2wvRkrEPv42vhWp2xTh2qTQt5HGwGv8PNMNr9HadL",
  "key7": "4WsBM3BwkieHPTGcERomUgitNFYbMMNKcNSrMZwj8CGs9HDeJGmyj9BYqW3cEwfWUDqQ3Hxktmai2aGfAxqm6beE",
  "key8": "5QyMDpb3h6omCQHfZDAPExLDm7kX4vsPoEmK7WSqbh32bgPjhmp1amsxZkb9WmKz4zXyrbj8Ev3Tue1EcE5YM9ym",
  "key9": "51qbk6EKBJNPLSBhSkJqi6HjF4srkUyWRrwwJ9mGfV33vFr17ErrGbrpb7d35jtzLENyaLFTCvaF7yf6TxKcGiFC",
  "key10": "3SPiSHingymiYbX1dGZVFtAQRkM5Zo9tq8dzkDG5i8Uscw3fzDVNYEafAMWaNGswMecBKvg3pYEcWhbTYczeiREC",
  "key11": "2Uj8oyQ9HmnJpCbnmkAG1fmqcY3NLQwWyue6XAcLMgkbYeJ8QFqC9khGAT99DFPDKgijKqCeZ6RT1q4fQScaoPsf",
  "key12": "2uQQoxd7ijSsTQdYSK35v7h3DnbBb9YLJWdC2BM4EvNU5n3KAghGpdmXz7Vf15cn2BKeMf6ZypjcmzipAVSnWfPf",
  "key13": "3k9d7AGNPoHAU6MbFwbVc8uzHUeCEVrHwerkjCGAnCGqqczLixZMpVvFwNGWWi7EMkfybSsxeSPQkc25gQFzQSqW",
  "key14": "4GJJyNaJniKGxLqHUBv27eCf8hSkMFP38x8JPF337SzHuZBhBVpeoWhqdBMyf7bMwKJrXRtibg94Uis3mKJGtvBf",
  "key15": "5RvhqdGqq4fFe2B76wgr8jK9gREGSwSHWYT1DSv1STDRceBxge8XmS4QFzwXDDiWPU5y9kh48JAwR45MGye9LFxg",
  "key16": "Z9zZqRdibHm6SBR2feqwXGF64f97AVhJoFrbo1QWdS1dnTq3yXSgha8JmvNdq1RLCtMNw91bS68Q4veBDPuK3rg",
  "key17": "2mkLADBhn5BG7vf3hYqmvis8yhjShC8eDVtE2y834V6CtH93Psrn9jBZPoEXm2WrbbLwBrJSSQHTYRMPWgZxM1m9",
  "key18": "4wJ8HeFGYLyEZcJ6t5bihakLZLofRCQJL8LvP28K9psYqgc7BR8Gd5E2m2NZaaJejj3LS41xjvUrJT8TK4ixqgGh",
  "key19": "2fmGndANAzdx2PXvXwoC5LYUWNjBiCKouBjxYZWdqjFq8wUyWyfEJ6LwpPGE7g8ddQLBkojzUasHDkH78RantqYW",
  "key20": "2gF44pHphMiShS9WxRBW84ZfwkXjJZCRDnqCtm78Eti9n4X6q7wkqciwEGYeekctJchAaMSgKK4W2uu5PxZKsVHS",
  "key21": "2wM6FPW2RkK3o9mCiZC2asWaQAz6RSKaLkyQFbK793zzkeKa6ZL1mKCxpN2RXsuUsRHQ5iv25JJSNg3d7tvDLYXU",
  "key22": "3CH3Goq7NMGmyzVzKdN4ZQr5zkFH4bqXXQDj4cxc7hfEAKVipV9PnZHeaC9jAErZGLtWnHzsoKQSkgkFvSN5RcFr",
  "key23": "5Co5UXKirFFdwVh9KE4CY3txNk9Jc8Vahu3zfD1dtdRBPEAv5hiTk7yiri8eDZA5qoKW62BrAZKg8a8S2fdTyjm",
  "key24": "5hpzkraTkNPPSyBdMibYf8P9WXrMR54FUWDh4VZfpKVqZDU6C95a54qirDfYhFBcPnYdNgYSwqC5sepqoKZ7ZXyD",
  "key25": "3qqznVcPh85acYqNhn8mXrMAGYUnmPwT7J6NXnK5V9YqNGTkbCg3hkA1dUXnuUct6vTvneLfM7qJc4qAabCPAPYS",
  "key26": "5Pk5sQDeZWL3GbcN78kwd2UCsSko8bHWPNhSmC4tiWdF8TveDNuap14gmdCXZ4Ds4MVd9Y3ejD2YQ8NRgbUj8RAN",
  "key27": "2FUht9tdx6bQrYtgbgbEBuV7Teqwh2cv9kCg4WqKwAJepot7mCbGtWPMApPikK4i4mWPkxVtn6DDnHyz1yua3R8E",
  "key28": "3ij7kgnCqykgHE3GGSFa4EBkaEqBGzreV26DBwd8uSqYHCAJfkyyBzrvBiNkCnGqWLpV8iUjaSFdR7BGkmZfYSdb",
  "key29": "4ioJUysZ17jqFqSKbiVhCFCg8Fn4nz95XJFitG9ZR78D9Yabz1zptx7C9RnswsS2EJY2RaZQF7rrYrP5MF1hadbJ",
  "key30": "42MCXUxAGyc4eB4XRq8GjvopE4gLADutMraoJvq7pYr9y6Y9t31iRHBLFYnfkPhfSw7aXGDWWfnTgoL7UVSc2Rt3",
  "key31": "3p31NuN5Bk3QK6K9LKufT4JtNs7zddZwgmVRxsEuyCFAfTNzBqTwe9yX7mrmNzQZbx1oPVBZRhcw6NN119JNxFqE"
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
