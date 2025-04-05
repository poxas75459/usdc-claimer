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
    "5uuzhz3oZn6jkjpDAdKdLFiPQDCy8XYN2aEmAy5eTjEVFET6vrhUNqQ2v1Yjf7egDvbEi7i8fgvhykLQBZQavNLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvrEfMXENnuoL9xJBCv4ZiR6rUGfUirgpFMH23QQetFsTTvMnBjnbKEVjHtdM5iJYgyWxivNgNULNnU4qAvUV45",
  "key1": "wx3YhyBFy6x6QhnLgWTfP8AJT4UfCVXCFbPcfkJW17FbAwptTauLfbRaLBciBYKK2DaUe1rJkG4tB7n92gTJoia",
  "key2": "3FumT7W4DH1Z5iuPDsefvDPFhHp82jJN8L2aFp8mnxVjN1sTsVkZFqswTZwoYoK5MpSus7pneFaB137BAFJgcZe5",
  "key3": "65RYre4wdqZvCRiy2XcPLsvLqGae5t3RpPZinh1LwxsfT3JTNPgvsUowB9WcNQMJTWFmq3ku3PJbX5VWzEb4yqdz",
  "key4": "3UBEtbBPRvFEeEHn9kFLtNmJF5opTHDVyAkVMbL452hKLAQZdSFHZNeWZscpoaYyoQwuLwgq8FdqQUadjgajUXV8",
  "key5": "a4JoKxrRYbqRCV62PJGUysan42vs7rVo9kbEJ6TdRKSxE5bjc2pgcATjN6uAob7ByWC5DBnFNXyatkPh2XahanJ",
  "key6": "3A87VxB7Vc5t1NCMapyJDeG923ERKAmFzwJ2kZsksFxCpiBA9mLyjshf1zV5ATFiKH8uVWJ64LmamMvJPhw4KQUP",
  "key7": "33HZis53iK5efUwkz7v6bodY1Fu7uVkk5cjo24jwUmRjpmsWHxMdFZv8QvYUfcjSmSMsLK7D7wwhjndVSZcsJ16y",
  "key8": "K8pbFJd2sgeoiubB3CJYQUxEWX5zQUV7BvF7Um8ji9ipyso6NETQ9h9RN9pdFEqj2Z5rPF3mwccF5JU4Mn8zwSZ",
  "key9": "3xFG4epeoyG2YDHwtrb6uXXK3t8qrQtkDdv7z1Ma6WwDsRKLtV181MYy5oYqmmUaGGKKSTeAys3iezwe21TYnTvb",
  "key10": "3sgAUxwAkqmFFEnNgWUnk92QGeTezPgGtHXUGVdJiTNr39so2Z1xbi4yaqPcRBYynxTkwv36FkqWZuKHA6xcxh9p",
  "key11": "2Q3GAaos42mHamHhvorP4sonc6UKpzs1tRqFz3H3ZtAQgpHBUqr7PDSnaQBadx2jhL6CDQN5ht7uvudadur5Hai7",
  "key12": "4eUxqZ4nk3N8QgM8TNRBZtdRNqyC86XDh7z39oiuNYVTK7zg9fpNkLaD4cPXtso5AgD5AnDYNMiyXFBseL1WDH9a",
  "key13": "r6wNa5yhHmERB4mT1y277UP825qM2nGjfySbdoRRnW826C9UDLYYY9tcHPK8xWktUtTgmoUeSGvAw7dumWHwiJ8",
  "key14": "4wPW7qoPsmV56NDw5GLDhjNVaJMBRRYNJceknek2ZmUGme8pQdiZmrwRuEvBgPPme9C3o5YEzjCAPMD3dn3iXoWG",
  "key15": "Hqfx1fY7oL8huD3Wb1HuJ37zwcvKupoNvxMxpTip8ofsvCJwuN5AoG72EmY8c1Lug6c1tjM3Qw4bGa2uvQBMV68",
  "key16": "47UEHYnctz85TAbGpi7iimoV2NY8BtVhdtmwsWUVBzxtAH6Kp52aruDmSrVc8o67kXrcRUPLbNQvjUZqXNMkH3PZ",
  "key17": "4bX8C3VS4GRFSjo92DYsH611cWXvRSkdavFhgsZApa1SThphesq3avf1yHEJebHdRCPBeUd6f3WCMksEEHwztPMT",
  "key18": "3njVUSMJXpd8DH2QKStHqbd5vGL1QkmhVm1REiu24fPwHWtQj93aakPDaxweJxdemrru5d8BvtAoszZ5uFfwqz3F",
  "key19": "24EzzomTg8ERfhpo6GVe82RPDuc7MvKQ2dTPEg7ArY9u7bQgeUUhUHgdpufumbxC7G6LyvJeDPGto6Z8EEt1JFLE",
  "key20": "VFAJjBRYiPeeYYbQDEDjrEuV1QdybYT9Hh7hwSqmYwcTasWimMK3rmmJD5YZKhB8aVHZWBye7PJkBzPzi8CASmw",
  "key21": "kUCaG5XvkMhqNonScZ5oei8pvFiiRJCMhR4DiRqa7hPz87LQw4Q3xwLtipJkvf6yNG45S9as1C8qTvQcAM3E8Mn",
  "key22": "5BHKNfraV9LdknzvX1cJTqJyqRLDaRTFh3gg26XEu6yfzEZ9viwWQc967b17VoGn7H46VdnoR1oouCAN1jMjxCc",
  "key23": "4WorN73oCi4AjvwbHhitqNCaiNM6QCfuSFMNuhGrGwR1DWZeF2hC1gf3dM42G6yfkiFRMSHVsnkuzSLydwSMX6Zn",
  "key24": "D1XwdewvLFaavjx6Tou3duTt5xPor867HWmbaLog5HgpX76PSwJnabpBhqmyfY1dC1gJudmeAqAZvtq2UnHnT3U",
  "key25": "3uvQZ7qve5uqLW3XKchJvQQ81LqfjeAWnMEwd7tgSCiNxqVFrcjYKj3rDE3wKJYq5VZpimdoHizE5JznAKLzGpip",
  "key26": "rPz7X592sUNP3UUj8Zho9pAdQZZPhRysfSXnjhZ3wTcBdHVtQ1mnXRzvvov13GJJjTZGXmzVKs9rXuCmLQswitk"
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
