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
    "5xojZdSnDn1KrBDi4iNiU6HdmJFGcBc8LbssqU3t6tFGj3so1wW9g4b1mmHcYnaP91VEJhwmz3jemK2QDNAP1PuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjhR5tQ7oAkBkYkrU88zsUcxKGcaXB2oyQqWYNRMnesmcnp3XbB1j2Exd76aHDquaDQmowEg9mj8GkMZ2XTDtU5",
  "key1": "APWQDxUz6RzWygf5DZ7WKno4XWpvACnh2knhUaZH3uBwrgoXDvbK3ucjjPoAyKxE3hEbU7RvU6s9jRigSR9yHFg",
  "key2": "4sSfDWdr1AZiUf8rEi4uzqBZPU7SzSvvEpRaxhtgFEKL4S1oRi2s6CuJMjSDc58fcj69QvTvYNZapPFyn5T4XVhK",
  "key3": "zJHr2wU4o7S6Xdm8G1ttQuPpE1nw71iW9R6ccJnhXqbbhFcwUdwoQ8tB4phPp7CiTohztS24gyEr5Nfkv9asrAF",
  "key4": "3rNnSHYAd1KfW3P3ajY2pdfryP6aLNqyi7Wve9AuJqy8WuijsuooDzfzBMuQhWkTnBLietSAyYeQdnZjosy3q1i2",
  "key5": "4kvr1WTpVEXTiWmYpWg2cW8CsrPYwPkapHB2i31LGr8t85HcSSugQd1DjKqR4FzTbvPizFArAzczqZEFXb4f9i9X",
  "key6": "5sxZ54RVmeYHknQaCaWTPqNWeSwvAKpKNWrBnFpX6kLy9nqESipRaiXhtUQ8AQ4Mhq31h8wyfJyAdYNPXm5wKCqN",
  "key7": "25JF3Aop4rcfdj9eJVhgjGu8tECpDE2m48ZW4BUR6jApUnEkEDYsHoeBKMGQbsrXFMd5fsz8bfH97PNRoGQYw5XM",
  "key8": "2fXrrnNVFpcGV8PDnhRpnZbAher2qvFiGerm3ATFc6kNb2GxWu78rwe7sz7Ea54ZFzMEGnQKbAFLnpDZ2giEG1K4",
  "key9": "2kxh1VbS1hViqbkcpUwJfSV62rh8FBuace4pYJBJ3Vggb2GeKdaq5HyTAYQPiFN7Pv9zD4ooZs98RQC8ViCEakcS",
  "key10": "trNRStrvEt5EiQS1wUgEgEzHtaxNq7KHhY6KNmhALPAjrdhQeqCJF2z6Qk2sgAsxLaQeiKeexioiBqBivaVQ8oZ",
  "key11": "uGr7s9KhMg1tW3J2Gqm64Ej1D1Y1ADWQEUf53uvY4N2nTgsgxaFNBCReWZnYknNFvhKvZWgZTexWMD44nf3cwJ3",
  "key12": "2Sm346zWfhTVJFzvabxEeFBS7KJtpqQ181t17go7x61GhywsJ3CioHFKBomv58ZFntJTQZxzhE99iaDoGXyGKbbg",
  "key13": "29sST9r8mAz2YEhygGVTomawPbHs629QKurxyVGYtmaPN5TxQ4HTzqpY8rsNMURCeybyYL61Wexgy3rD2EQYQHJM",
  "key14": "2F8wKvX5cXqHwnk35aZ3YjeAxB5TQQ58kpw6wAKoxs88fVAHCcacPbaNFKeAgNBCXtv2MxNYYrvHxMw1Jgm8gzaS",
  "key15": "5meuaNe7cWp1U2CaBzQk9ea1YtY8kLYYv2KcKVKp5qzhaoMXJqvJpt7fMfZ9WUUbKdtag9ak1TGLfvsDWpxUJ96F",
  "key16": "3cTdn5tg9XFGYSVUBFhPVzukqVb6PPMkKUnEYBh4x9kkpYFCXnFaFxegeTPiLkdRi1jS9uK1L5q97Q1qpg3jtzAh",
  "key17": "T4dpG8BhH5bxkeSQx6ouJ4UmSKgoUxWDyiztGxDtyibn5FDjkp5dejoRHiWifE8eLByS94uH4rLe2jQhbdZsvBd",
  "key18": "4ZdEdxjMqnBxh8EicruWhWv5Mxb28m9QJ29cMrzSYdfZxBnMyi2Bt1VXwAcbxTS1rTejhG6ySd9zzGF2VNKS4mkf",
  "key19": "5Lb8NUi6yiGKnrxxmZnryzEYUReHXZiWLbpH7NNYLwxTWGEA28YCrCF61zmjP9MzBunRoESxso1bvna7qU6767YP",
  "key20": "4UdqdCUPAjYGW7Bar1m714Lt2XctZXWd9BrqoYN9jwe98D9ze5sF87RMnQGRY6YVa2yoniWf4CS4F7mwErbsZPDQ",
  "key21": "5PW6vvGdBffqMbiFwZ1TvwrtyoSBELMui5skTEKs1hVSAG32Bi3haX4ktfqaSymFJoJtii8Tx9VVbzontbiLMj3D",
  "key22": "4AmcZRe2wfFG1e5qeGwcaVyXS1P5xrjkSD1fs7ZvjTFRY1SMQrtzsMgqL4WYU7Zfw3sADzWwrsrzi37Z4V9VpG96",
  "key23": "4FoDexh3o7Nk9sacaLzkcn8Y5Nktm1ATiDkht7Xwip4T5ndMubmteCajVF49JQ2iUMbRnJArqEQbNCu9QHXL22XE",
  "key24": "23JR8nJpTuHzRVBFuhfi584Aq6ydEdKvkXwVxQR1UDhTpML4GELFWZUdUizdc6jhuDxYuesC3TZ9e1vfZMQJwHSU",
  "key25": "2gT2t5WUqqXVY2kwieb4ujvL6auvHtVSAmv1cmFbkVJVTdzwwzxWjFz1Yi9553HDmXtUvXce2kVXbm8LeBLEe5UY",
  "key26": "Et97cWjVdSrkmxDwN5DsgPHNztPmUDSZiVZgQp6bQRDthHhtVXCQNiaXUbpwzUivqDxZkLZMn1o3RPWRfx2C6w5",
  "key27": "23CPasZJA7tyvAM41s2nZgQARTqjmYRiEYWpBm68SvX3JmWcAydDjBY956woMnhgjD1HdDz2pay6NVYuF4kU3aWy",
  "key28": "5AwaUt7Mo5Mi2CHoeqMHWS1fG1tyMr7yXk8LyYtDjMSdAuLzD73794UrdgqpGfuhSEgoa2aL1oUyyuxFkA5YRY1p",
  "key29": "3TjmHMtgw2266RcpVK9FE6tJsXKm6JENE2G9GygDCjGUt82TFS3JUBu763Ek1ahy7nbC28r6WkdMywpH1hcTqdTL",
  "key30": "3bxUMoFCFSYyZmzZDtoPtB8m4zmvTJe7cDzPMFcjL4JyNCHrnGBNfHGrd4t2vXhKs2x91TdRHTXxs5QkopEKnoRG"
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
