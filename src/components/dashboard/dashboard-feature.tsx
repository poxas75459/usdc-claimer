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
    "3o2JjsnK3VQoLoJVAfFcgQ1C7VHtPthweJXhhsQzhdZhHo6ZAM16LNq4QGfRLqSAcGoYMsi86fEa9QPhe9rA1dYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQhrUJvLeMyKa7kEANeKSGqE9wk84aWnwLkbstiLQNiEcBFGFMqPXNa4mtTDYidKXprQwg9g79jNAHzRDXydRbE",
  "key1": "VAqcUQweRHBHm9GqDxs4x6FRqsfM9F5FWHBaPdetpQh6C9BheLctT2H79d9eCKcptfLAYrjrENg86EF6pHuDwvF",
  "key2": "54eEmASKwzpJSeqE23uCubDRRtoXkrFZyd2f3UB4PqpWf22PJy2viUSRSXJw398QQXJZRKxzuLb8uSdVXGBmjQkA",
  "key3": "3uRjHEVrB3rvcUyGzcPdxjAaQbpKVXAdzHDAPwkMZNRv9LxodD19UZULVp9SUqx4G8vB2ibRobMYV5qNpvuf8cK8",
  "key4": "3mL9vNoxCSgY6tLrtwErnugAkHhgnwcwJgajVyAZx7XErjiKHBbccTdccgeupaDmBXMgD2JP8b39VSugakUK2DYA",
  "key5": "2GS7VwuXhBWLHjAPYp9xYfWEpqmMzqyNftbPkuJDCBEP6JcWcbRpdFQHS226jF4q9iZ73BbXiP3iB9iBstJhCPy8",
  "key6": "3rsvJvY8Pc1ZjZoADiFNcgU7dMFoQ3pkkzZq1WuTgfpNk3XdSMmbUnFXyGpGqRzM2n3K8LHfRMJc7SGNQMHQzat4",
  "key7": "2Rdbn3uV3oaekKP6mHLMhVxUvAfemnmgJtp9Ak5xJkYF5nn2GRAMa783XHQ6HS7HYSZfBrGDFgPnd5xR9q2TQw6V",
  "key8": "5rNutQ9BfZuznrBpftRWQj5g7Eif8i3xTtNTfAcziKwANJXNsrek6Vcw1wzxDicVAW6Rm2LXuZVVtFLwvRQSxBpB",
  "key9": "455KAPrAxBkywp4QdsUkzcoTEWQe3evnNJer79FRYbRBjGyaspT1uSdj2gBGHzmE3YywjCtgzrU6GfwzF2YfSaxe",
  "key10": "27u3xT1aGd8ooEkd1WtpeCjndpZckmPaT9y1E8QGDtkVjjgCkqRCys4k1Q5EyvgrE1nLpo7Htki89wRKVJZ4QnGt",
  "key11": "3RE3nTYoiSqB9bgubC42Bthq4yEPrUEHKRDYyjndWhD3RKgRiTeT2Dx9zYr83U1ZcxMcML8GmA7uLToEi626wpaW",
  "key12": "sCSns6PG8uXBeF2oAt7YE9xtn2VMwExocitLcN11bYScDJbQ4jtHGr5MJVChzCcCQuDu2wSjEQnwGR6b9pVF7Jh",
  "key13": "3SfQVbRq8W86KT4vKq9cZUe6CfgnF1pveEv5tdaCwpQCjiUWd7igNNgPL36Ab1u915yMwdGbJ5kgvjUWQ1AHGmwY",
  "key14": "59eCLSqQPePoaHhwvPDMkW1FGP9mXGxbcqRQVZN3QyWQ228fCM4c5CYQBtkMht4svvjNJCNjca85z4s3UFpavHtw",
  "key15": "3kx6nw3XmR27U2mZGuQBjXLBQifVpMub6gZByRuNiv8kTr86vFT9NZFCvyCuxjsK8puyUhRZimJT35U49fdA7FEK",
  "key16": "4BE6MBgQtnCggXq1TJ2jeCUrmCatGULYdGpPsHbqU7G72YHWkSqwXDWrNkDn4GA1WvpGBVXjShBBTnDzdQYsQ9W3",
  "key17": "49DiPiHmv8g3HdPMExHgAdHyGncbR22iwoT3JKQVVjmF7GXvoHgTtmpZ9jhdCGHEr1k6u58wizcPRHYXkTVJPgtn",
  "key18": "25aNugz7vyfthnbwNJhJr6xxmqsARRwA7Yt6XExZmQ7UJdHNRSMsMP1EP2FT9pMETeceK4sRDNGmodrYtHk7Z27d",
  "key19": "3f7XAsHeEwbXdizqotX8i3DKibHsjP94tWbSVC8ocd28gPECJEByaZEqM4eKpWVNp6Aqq4jp9KHvuMHaffTRZrrF",
  "key20": "vUTjG118ZF9G7Kmij4cEMozbrVPzVhQk4WK2Zu4eiZz2ecWcBUsebMooUiVSFL9MM7JmFRHvfcap9mChSkpXsHn",
  "key21": "2ZHU7VjSxaeDSC9e22TeppLKrA2ovj8tNh155NCypZDHba3A5NxidZ7ySDwvGEtWzdpfWzdo1CbVNnS7TUgJWCBv",
  "key22": "3f9qNDLJ8GhjthFPsou6t9H9pz85PvtAQzDJGgMtbSSzxZjJ5ViXQikaJrGz1E2V6ed659a8Qsgb73Zx3jeMw1XG",
  "key23": "4iR2ebnCMXRaPik1pqJ4c9mMiorGKQEWopHnaD3ykUeNZF78XeqosFpCfq3E9XpTigZ4pK2SpCkrVMbEg4tULq3o",
  "key24": "4CRZ7BFSABEbiQhPJQhoXnJfdMRfM8F89ywyGFLPmTHa5ut1KAiuVddDuUksLQ9U2RagUqpUVLUaLvY6mArSmmGj",
  "key25": "5s6kmV4ixWP67sTin996MoySi1teHQYXAD3jqFWponbNLbWff5FonEmW7UzrCZ6Wsjy8iK3RCADFn1N8NeGGmzHE",
  "key26": "5qbM8T4eW9FdsonmGFyFPWajVcZCA3ZXQ8p7xAhnWMfAVqXCq5cKDXnuHiop9GzMEChASWPdA2KiQUWRw7ZchMkP",
  "key27": "cRTeA9YRsYwEfyUhv97X2fyPxbXzD9En2LkSqx4PGNwx7BJvhvfmbwqadfyf1gZX1DwDZv485NZi7vPQwpTJWqz",
  "key28": "2XExmYJpkwin5uBYGA7X3Ug7VfQtQauWd5NgY9Cfi44tJ6VuUxM8BpZPhamuyuRbykJ1Wbz248g7Muz8BnuihCpk",
  "key29": "sutjkACou8U7Q2ryHfvkEMK4RXmbw5fCwQgKuHrL9iAUoQZSFu4fhYBKBgDkfpy6yPznjAbAG3A7c3gQZ6WZwaN",
  "key30": "3ZwgTP6174SkkskTkfavR8NJu9ZiXw6QwFhP1snXMswZ3kLjXpvX9wZ2VWJJiCjCF4byLWdn3otFZ1iTWLuMTdDp",
  "key31": "4LVFXiVkmdbT8zfU4F5u8qhW8tdVJvg7heaexFdQQgeJzR1GuydohiGatzpvVwSmYmFQTi7MNdmNNHFWaeectjgK",
  "key32": "cFnmAHAvF4AxhWVdP1pXLjocZCSccDKTtUvHCMDHwqoqwFCun8H6LXF8j16zdFqfNG1Uf5CNhzYFAXfjpCw1Cbx",
  "key33": "42jZCdp9MGLvgKsymT2Pb4k5ukibnsCiod2rd4MTpraGAp9dsKv2pMZPfKZBaXLtvjU491VnLUXwK1F24MQ5RG65",
  "key34": "4S95cPntG2nwbNidFWhgv9suiSqNV5nTXH7EMhxKCakkaTjtk5EJNF2i6FrLKj5sxXk4pZd4j2U6aEiZaHmJqJxZ",
  "key35": "3VYCTvdMvqDdeqCiuNcMm6gDMHGSM9BySYYBJ7cWTLHW2h8cGm4CyeT4XxnZLiTQkN8L7E6dZbeFFbwFFCd3jALN",
  "key36": "2rLxfvYMLLBrR5vUJWq2BQCiv1zEFHunx9VaGb6xYV4sTB4TDNYxrbJk84YzXr9LwPeSFG2paoMHBL9XFxRAj5Ts",
  "key37": "5JZiRSw1RFgAzy1hbShuCED8yNz4Hkx3v95N9FA4xiANLjMxk2CiZ6YpYSFa1jMwdub2BrdFcoRZtzt6Ctwik5AU",
  "key38": "423zZ5X7SnyyRKzEKc36URZa6GdMzS2fZTWm7RaTb7R9Gez3qF7vjD49jGETTq2FWkMy5LMBgzkXc84La6DSZAdC",
  "key39": "JzHt6CTZ1Lzd2dAaqe1k9Uw5tHNhQ857Ai6CYScEaNaEtZApkgedLdwCdVfWGk3U6qpeWgFBkA9YuZT5ap8mt2n",
  "key40": "4f8tycneGEeQcrzPbHf3p9xfi4U8Se5ddtEWTSFwTgWmob8X2JHVtaFigKe9GYrWNWWYZjuKWnjQfoEJ2mpRQQ64"
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
