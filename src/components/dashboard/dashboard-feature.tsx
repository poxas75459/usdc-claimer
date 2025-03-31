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
    "5oEs4MuDGPepW95JfzHDGfFGTpzGwQrsVh2Seh26eiSLrHb2tHsVo4JzUhyAht7EeokTS3qC2VDjQmZsRMEDPphK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtwPqsiUzjXwybzwh3hk4Y6TcbFLejTgU9PvtN49opvoLrw3BwcZdsv3GCYMiQnsXPN3VUT8kqib9PLfD2LeQ7F",
  "key1": "2pmrzbZu3e582DnVy6Ny7if7jPHjWHwVAVu7f4X6h4SFCQQp46S1DtE55iXqNCobFX9BdjX2ncPp4V5UzFMUnnuj",
  "key2": "HwkzxEtzGQoYkYGK5s3jrH89dg4pS3dqC4WbaWxpGFVi36GArNypQSjaUfwhpiwt75XbQieXn2FgUoR6kCbiq5a",
  "key3": "5YWfm9xRn6Asp3ZUANFUPgwHk14tbfb2ARnwspEBQmeRrtw1eoQDLnnKsKVTSZSsj4xyPjZbHqGDhLDjqRCh4dmA",
  "key4": "4m1PmDxRZJzth4iSp2kJP6pBYUiH2282stDa5r9kCf48aG4WeXLyX3WmhSioHFTjVrSX7ShsDah3en4AKBmeBsDe",
  "key5": "4vkjy7euFBiecQnJ7NMGWoyTXajUc6WZBRKomJpkjwm1ak1jezgbPUY62zcVe4a2tz1XKPBaPz8jLUo29VKon1of",
  "key6": "2Qb9yQgpMu27ojuVfwpZYb9SYLr7sDJVgMyDm8LWRpofk3MoCSExAeSaKbBcfKKciE6YVpG4fJXZqLQTW8e56tuQ",
  "key7": "mPqMLLrGwmV1vnoJ7BXc4D9mQC6R6N3xYSvzon4qyGAgXeZfVbLTxpumPyE6GBrEPGeXZtzYxbeCihxFV4f5UMU",
  "key8": "3Z1f5o4aeaq99e9ddCxAKegSKRgR6ZBTjvyuz3BjGJLdDgZX9Zq3FRooeM93j47p45vHKNcimYqFEFnAeaiN4GQU",
  "key9": "5GfgANtFgvVwW5JvMLJ6wAtESGgpKsBNvWQpdvQsyEJazxQxxUvG6pjS645ZjmUWTR5m5CUrwpAXeGGLCK9mM6N",
  "key10": "2DmmDKaNSVrBGVAYhCMrcgXJ9wnkT91xBkTM6WNXXgBha6CWUzxjDjwWda368fdnBtqHuW5dLKgRfrkiWjjz7XXo",
  "key11": "vTrvunS9EbHyVRM7LrzAoKHVf9KDBfo2D26anTDJTK737gnjcsbwfMjEwRDAuWCW4ABbjJe7zKv98fejuthm8he",
  "key12": "4Bk3YAygs2ZhvFksuvPqThg6bE8do1ojhEWSHgHyCRptn6v8QVCgcWAmx8g42HV7hwhTX3gD1bNZG53RXaqH7N4S",
  "key13": "5PNugEkcrNHUAQWD3PMZebPCBpHeu94tJjiT5uxUsC16isC3zRG49knXFwuSW5usxvp38mkm9i3ooY9aejX4anth",
  "key14": "3vBiGDSZcseb4Sds1KPd5emKNiikjeXPfauMk8x6GWXitpxPcR9vBTe4PGf9X5fa1T5nLq5aqXBm9ixT7Ggrfkn5",
  "key15": "4vKn9zsJiineCu18iK2jSCUXvkn7LQ156LR8VGFJqRK6wXnzmSk88WtTgyf36195Z8hd5i78Nwaxrj1mWJWzAxZV",
  "key16": "2zVPq4ondoPn4efVCmuNn3tgC4wCaW7S8ipbzuLm923TyPUt2Q3mFAt7Cjqwy6v9vjLAnBfoGMMbQut8q33e5L4M",
  "key17": "26QuS2TkKvozGmVn6kxs5Re26gehcAZF4VNeHo9RL7Q5t5dV6PCzVbkPeBWRGW8mEfbg7gMa6LyxwEdLJ9yr2SLa",
  "key18": "46oFHXBMUyqZx6HN7GjJKNdKjiGhwiruvPcoVBJ7pkZYrByG7W37KBTN5qU8fsE2QJLkhGa25HFM4nJ1ABifUoTm",
  "key19": "2Pp8BWTGLfQEY5Bmk3PVvFHT8V1TWzM8Z5FWbECUYKUWDHve5WS3chXA9WL8yCqUreHWURdan25w4F43a9v7oQj2",
  "key20": "QRVVgDGTGXrSquw43tAxnS9hSPUXXoHeniFMyiaV9B33AdNpXhm2XcUuov9frdd7J5Udr72dZvNJghsApRRSnSC",
  "key21": "2EJiLyjkKRsFU9XMd1j1kuNkKyPQuraK3RArqaGSWoi5LJHPu8RjCLqeP1Pyh8sBV7dte3BhYupDmy37coK3uYNM",
  "key22": "4tBMFycEKeGPwWp1u6NZNYNhC3wTPaQKVDYYbKMg3f1QLwLQTPoCV3Rw27V6XyfxopZbDqin26nViT7HnTV3gJsq",
  "key23": "4Cdat3eK8pvCyEUC1svTahUmpMr1XdjvJVTYFzcweCbeeFazDZmxgjkVXz7R1R46KaHshPs5MWm6u5nTguvY2ZmF",
  "key24": "5Ltz8mkw3UUCQ8nRBaDW9JhBLEdqEMF2KEgnQu3HTbvdababLNgdcDkiEUsjFR2DK1HJA4rusU1eknSGVkV2PPMt",
  "key25": "3EnKYAWqoT78DhP939B6zLJGU5bEz79PELRDwAAu2SCHXcuo6i9DDnWnydzsrZrWEFnhfKmssjB5GqmrJjQht8ZZ",
  "key26": "CVDoprUMRFSfRGKyPoXXJsFgmsueUFCWXWmxbYPpLsW18YQAppx8mEjnFDQ7bmmw2Q33tAJokJoWG2QT33uwxLp",
  "key27": "n1yYYA1m5QrpRNWvGbjVZzJK2NaHxZ6PRLgcFDM4SepnbaRjbhdpE7XGPFL6qFgZ7HKA7TAFoqXLCG8pGvDYEjy",
  "key28": "36vM4eqViiBE3BXXkzZxCpc8Sr1vaXBPFp349QSSA22heKAwQMH5h5K5gMpLi6s5edUNV8E5z5ALGU8gnxoRnp1n",
  "key29": "5pf7bzYofg69XUDVRWp51NeYSuwDvgLEawGwexMosZp9kjS1mPnhoZYnUHr2G5bjroyBixE7tdpvhzg1f3SjnE6m",
  "key30": "4iGf1C9igiDrjb5maoLjHTQhXyJSbJELC6TE8WHXQdqZhfx9T6dpCUf3cfQTZyiWXnmKzMNJCnEgzWoyDnKUpyyF",
  "key31": "4sfBw8cgceJSq1aF1195ZLuTUrk7TCdewoJgCHCByH4rfokbpvHdH3EQ6nRvVVHkYHS1JmSNCEJJVeGt6pR2LPaB",
  "key32": "9SSgDw4uLFV8Us3HhX9nmSgMkmLBNFXdKhws4rFw8CbLxKW1kPRwf1FeTidBaoZ6ZtwaoGtW1L1XooWnaUsxFdc",
  "key33": "21QGLUEy25eKZe3RrhJjxwN82zhMaBsQoTzQ1MMeEbTZ49L4aXtsDDoDyTf2u4wdKM4wkFZEbu4o1uMYABteKcKN",
  "key34": "2P62LyFwUZxVwX5VjnW6iKLv6wbtSaDKWadgt3ZKdwazYpNCX2mAGg7SRMzmsSdE3ZVyBbj9UefCVe8XxBBE7KNn",
  "key35": "5KqJZrmbp2UEci8SqoMJ4aACkcmNjQbCTAZmpke4xwQ1b2r1VfLAckQGPt4wKto1tGrfGZo5TUakDkDKfq8wqWn9",
  "key36": "4LWArNBF7oi81HLGS4CkdZnbd76ve5A1e7Gh8XVSTrTLrb1enpHZqYLfYH6AewYR9HxCQKqf5nAr2Uk89px983TB",
  "key37": "5uetvGQXihQ12QTPxakRggNHuWqPQUsJ9ziS5LCfV5H2DrVUuxhjQCqUD2LTuiTfhYDiF7rzdKhn1fajMD9MxPNj",
  "key38": "5oUAXVfY5bKvn8ihgjvAxHy6dkF3n7GV1CfHiYvPhks4rEDHREaSLuRa9szjgyZAfuQn1ZmJndzevBopssZMKap3",
  "key39": "416kJ31sKStCLpLsTcev6VhnbqUUezAb3Jvt86N9a7sNrtf28onf2vqM9LoZsvzzrvqQvBpFZP9s2FqihCWn9VpN",
  "key40": "4wAQTexkDNASFxBeqH4fMDEHr6B1EyLaJbYCwfPFzap2fvJfmWN5LCw2FW8oJ2Yo8ZAzLfMX7jFfobpEiUndMnPt",
  "key41": "2WrwpLALaLF16VSn1Z9nSJ7F4ffBdS6tAXzuxHmLTjGkunFHKmyAzVGfRCNwVwR6K7bC6NQWWGo8Ld4a9HScdYPt",
  "key42": "3Aj3LymForSHKNoNPUPXQqA3EFmmowK92sgAFcUVYce5vwZRVjeNqtiJQpU6ggCyGPzn4aQq3VvuvVUhEnARABC8",
  "key43": "5b4zR4JpocVyURqU77rQmwNSqoC5HGdZvcYjHRc4go7UfTkE8kohe3KBqhr9brvvk5ZCvAUgw8hzjtzWi8F2hycV",
  "key44": "65waSMr72XkJNYxtHUW6dpv4oxGnM1F1JLT5h4HQzNGm6Moh155gTaNWYx7rxMT9F8VKR2DRwrWNwg68JfkKAG3G"
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
