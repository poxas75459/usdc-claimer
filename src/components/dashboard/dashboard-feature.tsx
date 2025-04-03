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
    "4ZTW6SQR2fPuQptkMVVhcWnsDJUKQneut9C76SvqXnHeLo6BMiy5nbgqxz7Mh6Xy3atdzhpbWgFmLhBhXNnSzEzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1G2uJNYXKWTgLLEbYCSbhW3j2zcoGMn8KVMgkT5BbKjyAwe6eZhMomH32dqg6PWerzND3MvDitQqBTXsv8VfsZ",
  "key1": "5hWy2WrfUnV1xxVKP44C4of174KfWRLDvn7fpHA9qxybdquzFEWDGy1ErwSHRqHkAp7ZYKJzSMTk7sKzDVSt8hAK",
  "key2": "ZGBizSvdCryyjGwC8RNj8eskSecTXFPS1mc9AYPpFu3QWbwVR8CLX4teyST9BezGBED7zpXPZhX5DqzEJYgTCsq",
  "key3": "52yVu6JTBC5gup1MdBCeZpFKy79J2WkwsPTbM7ZpJC6nvdT79L8TxVWf7CupaNjbLXoNpmKih8zU3EBBBAhypNfE",
  "key4": "4tMUiiTtvYNCburDmCAeJ4JA3Hc3LqmRDA5vPXzdi8uNtAy74MdJLShYCtcstqakGv1jdZ583vGUndnkVjtMSehb",
  "key5": "3sEa7m5roNkLAVMEePoizJV7cQRA2cUdPgtcgE9Ks4MLmCRDbWRtk1TEmvxvYjJkTWvUoVW7Mw1dCMyBjvSSfUAy",
  "key6": "5ENAig9sb67UvhMjHsF4sQdhwPN78nv5nmWGXV2H4o355EYTS93y9Quns41hbRDZu3G9yoaJMKe8h1QGXW79yC9G",
  "key7": "yM6qBSxBNK53vBLfkeppJmVzcmwtgMhze4BAG9YUbJHbADS9WrRKKhtMtTAc3g22GafLjWt4GNKDhJpYPSznKFb",
  "key8": "44SVb6dKWpRXzwQGsTYD5dS7NXUEWLGsMFjqDVY4zJC79fraJgf3KtjmKbkigDFtDwjppk747N6AA2zHzi2Na2Da",
  "key9": "33JxESXo4eG5xhHjstFGTdDqzmM4cAqQUEBVn7SxKzFB16jWYVMK8xuvuSU8DGMi7Thd4AogDYZ8Ss3F6csUiSM9",
  "key10": "41j79LGdaqG6nYBmrKAe4TffPtoxUvF1xn2g6P92qFQc88MfotWdLzdbzFPxbE3EJ6W8jNvtXbbLE8QrTeva32sn",
  "key11": "4vjtK9QQzaRWGfzuzsYAhejvHbgBe6fu1KF69Qm3tmEtmfj4gAfNpTPGnCmbWkA44tFXMP4Mp4nPTiUrPgxKj3Xz",
  "key12": "32AozxYsMEUym2q8LFNSad8ujj2ic8mtEkuej7ShNF9aRQcek91wKARazpdR4qCKZVo2HsMmzczUadwgivHiQuFw",
  "key13": "4XDYzwbGZvena9Er1EXwm8a4gjsDRrgMieo7nucv6s2oGAN6WdgvoYNzCod8cnnZvXkLNHRMVHn3iCxZ4aoukMFs",
  "key14": "65mtmL62GxtmpMfU8txr9rZBqKwXhresvpt6Dz8jSiZiQondGzJyktnGCUf5BPGAbbXo7M9TsEayy2KBYjPxx7vy",
  "key15": "3ygYC5VZyot3wJt5wiTftSAZuKzJJapxWsjbL4bTUiVty5ufPcsZn7wnGgcXSuMJxQENZbWVpMSL6pAY7iNYuvkw",
  "key16": "3TbFDQAP4FZYyvUpfiDY8gTYCTzrHuyBkRwRp9So5HKmFCFKYeqZuGWsn4QdJiB4CYt7EweDtVg5ep2JWnAr4ZGf",
  "key17": "43dgfdeRYfaSCj6eW6Dkxm9kLR1GW9ajBsSkPpXr2oXQ2F5RPVcWAC5PYSD3KyThR5NaCeW1a9eXsSuvJyzhJJVD",
  "key18": "48utzCiJ6puBwtT5RRwPegKA17dhqnjyGRUmtPnLPdfKZiVmJJxgPvNZWQQ5eUD9URjaJbijc4X47hpexreU484N",
  "key19": "66PTtY4Mw3QVN3uZxCiSmsXFhwttSewhTkCmH9iEUyMFAevhvZaPSvQ85NXJpMDheBmVyjQCmpmcZSfnULHq4GhL",
  "key20": "2a9KGGE3PNQHWupbGgfvZ6y8Y5qjXw46cpGQY13FxjAxrckG2jBt9jXgHpjDzK5U3EE6jxdRPnGiXGToB4cXUMih",
  "key21": "39LsYsG7Ura3ELX3rj7kJRdC4rDkW3vtsptyJVu3kupuCH5fhLu8oTYtMjzXMm6r9KqFYV9T1hMPutBCcCF7CXmu",
  "key22": "3w4v7G8VPBtHRmAzA8vxKi9Gdx7d5Es1CBL1x77gD4HX2FZB7WxWyeyzHenbf1RboSiEHt8AJuwohRJ2gYZWKihx",
  "key23": "4zWLNs2WHh72ab3SSnjaUraKWUJwurDwkMJxwVVf6vtH5nBpKNvTo2RS8cpFis73An37D2YoM8GLkNZEh6B1E2RY",
  "key24": "5MinRUofhRCHo9U1sPnG4D9qJGdS2g5nS46UPv1zsCPrh7KX3aNCYhySPWXnvojj5H8g42nwhj6WCmTeAU8sVqnV",
  "key25": "3Avr3YCBWL3DViEPi8jDPCpx5LsVQPjpGs6LtgXZGpo1MMKJBJbCdWUVm9ZnnqivSx1VUdhUPi6QiwsHQTVc162N",
  "key26": "4vbBQcpVdRkGFS9Nf4wVJegRo8hwfqdiq4HxhBYyjwBv73pThJjNk3d7n3CnUz1BMbsUVmL2mYQ2br8TYnuc9fFZ",
  "key27": "2WTCymEHybEGxmP5NXTYdSt7sfC6difYtspopAagbBb2nW6XX7Z5gsD2a5qH1BPunPy2UarB5fSXejWT6a5Jpy14",
  "key28": "2pwWEZmqRMgqP58GrsnyRw4bWv22dt7riKQenSNbys1mNAfcrihpAMSggUV2qTZ6mAib5NmwuvwfU2nBZ8Xpdq1y",
  "key29": "2wFMkT9R9TgLsvFscAZVBa5kJPMiDuuDYHMpDkpcqy4C9scFfFCLQF2LNiNWCYytJmBiAMekLrxpiHb22XF82bk5",
  "key30": "66eATg8ibkHbETbUvqjmj7EK93c5ddhtxKXnYCyLy8ppj6RNQ9QBEpm7iGCKLDrertNcQoaw5TjK4iQX6saWYMXe",
  "key31": "4GNQvjbCU2KcnzE8gH8DT32fzEUmPFFc8TWRGwLrya6PCaC2RAPn7611WFrEAy2ZMMtF2nyojATyhU8rE8v7AL9U",
  "key32": "461BHbmZdc3baU3SGmq9NneEtf9ECNMzAPzGCSYpvrbTXrjc1PuCsLLVAZfPjQdiTa5rRVZBmbxt4oARYHensW4X",
  "key33": "38sTGim83AnKDQrWKpu2gm8dU1eUHbH4Z8mN7sacQe7PFwscvafT4qt5rpainSZW5YVYu8i9TFgnU6uGF8tCdKdv",
  "key34": "28FrEMtAFZoYD6pDxmbyDtqkGrcgC5JtTVcxmzGzsgHCwbxyX39dufqyuacDw8ij2w7Yya17gLNEhf82NqFRMCkj",
  "key35": "26bU7KufgbqfaeqUEisxdTRFXt4iX4QHVDhtGKgThMP1vgM5JBcUC6gCq58QJXbphP6Y93gAqhXQmNheCadXc3PY",
  "key36": "3NZ8svZiYAFfyb1cC5icy6qZzm7Jhzp5KcD78Wfjkxd5reqAjBVLQpy1eueWZXMLmks8BMPEZZQcaxc6EkAV23Ho",
  "key37": "5bS1XNrcFa7AHuvufuKdg6tdrocA7KTxwCkhy7gWynVjpr7f1BuFQHNGHKprmRyHDQPqPXA5pmSpSYLwxXarG1uf",
  "key38": "2bubDr2N7pyMwSkUPvTb4d2LJ1W4GqLy9Unqm2uRJTRnxrer55ZwDrtfb7ViRBXpbf4HRp1BCkx691YVLENmLc9C",
  "key39": "21ogxpQtKPN9qAk5uvyfrSytgwznx8zZVEQ82nzBXSSGtCqRaCF7XSQS1ruWefRGPjC7KbEayB1dcoirSj8wdK4S",
  "key40": "3qZJqo9oyGWRPY8ttrTEgyr4WJRBK9wPvVLTTrcqVuW7o8JNJsEyVY3a5XtBQVQxhw2jGxJ7Z3AVvH62iS2KbdDr",
  "key41": "5npQjqBtqV1gqNWuuzaer4JgJDoVfibsVK4XCuiFdosKFF91ixb6bquuDWtUfp8Hn6mi2HDrVFgRbcwaooQQEr2e",
  "key42": "3HCG4RLQKJumnfEXrHXNFMkXmKma1qQy4tYAUTz9UcaDX5r62mV1PUAcV8Xk4AmHsGPhyrL1cVMbZxD2BACJFmdS",
  "key43": "dbeo29Bt4rmCixk3tsNR9jR51DhrBX5q2T5e9o7zQ6Ler4v5h3uuoTq4uu5p5n6hr3cfUNxkLVdYfJU3K9pSFPk",
  "key44": "4M4e5gd6QUb8aw3HpqSbyUhL732Q55SnUKKq9QhCDh5irQWsH6Zt1JbdHTEJJqra1pz7kJKuj1fvScE9xjz3JpkL",
  "key45": "dELodPWHULC7fTCVjd9hB6qaPCZh4imbgvG5owryHA5q3ViT5wP7WfMo78CeqeA7s184QNX6RhiW2QuExxhxGks"
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
