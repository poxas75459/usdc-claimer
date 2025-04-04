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
    "66Y61D6mQEmnNL3vRaNMXF7JH2SQYTbAnJGBhemYxwsRgMQMgY44K6xFoYgTeuBtk2EcoXKyVusuZ2CFDZ9k2Avm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365HvyhCk5P2wECDqe5fVEBgTYq3YiSXQFba4ffCkjAgmcaEACQhexXsUeWaZQ124cgwyHGNjyjFdLrH3E4Cxn7N",
  "key1": "LLp5Qe1DoLiuSG7tVyJbkHhXyiZUsRkJLgCxu9sfxxVFe4iBYvfZ9jNvyBvsUET7rgcBwdyZsEE2jsZf86cqtue",
  "key2": "2h7EtDdgjaLJ7BXRcT3m4fh4n9oXVoAdchfZ87foAvJv5HrXii3F9ys6Ri5YqGTeaAbbHAauXEsvrvPzocR4oqJx",
  "key3": "4TEGSw8EbiDbr743593CVWb8GRYpMh4FqiaWuvzyFoYJEieDXdqqvNeYrmrJBKAm149CDRQkaiCYq6g2TMcwN2hR",
  "key4": "QW8E5YiZbSFjCXJTrCRmLZWvQ1Zb3nsaz6AjXwvDvwACFvbtHjFkT7fg9BGdc1bJ2EcERWjnJEuJG3RktMeUPTB",
  "key5": "5e7qdLzz8xkwPJquUt5tCz8Y9map29ixrrZCvPSqh7jWuxtRKSw8R77wAHtgJ6j2UG1eA8RvHjftjat4UvXYNqM1",
  "key6": "2bbjQm5Wnyk3Xf6qXbFxeg2bq1qNgJekkYEajPF6HXBfPADEMNhHAJGFR4xPBNik6v1ZPLrWcVUnBMBXzZCrmyTp",
  "key7": "4goaeMznS1QLYkKLjZVdh41YPifHe4R6EcLP4Bw55NLpnqP6jikVizTofHhQ3YEDytqaom3R348P6jNXiR8CCAuh",
  "key8": "UNfDBbh5AM3Sg8U7iHjt9FvVu5cgfaDwLPr4ephM64dfUBADFAgHetC3247KYcKdFkJ14gKHRC56vWo2pydvgUf",
  "key9": "48JqPUCH4yxtVEFFwMxcUKhbqNhVyDUgN3QJbTSdieRshJdyLitukk9vdvem6fwpopcMA3PsRpQeNmwBwZ3revYi",
  "key10": "4kcnKivAgAQov1jKS3grahDBj58CAwXojj3joGf1qb5LA37q4jonn1YG9NvTaThthQoQRiTHaxVy71SRsSYktm5c",
  "key11": "5WaEcdAXRY3UJkes6LC6StZfiHS9ii5yU4DrDdMQ4mRVoNgoyLJ65i1TXcQXhreNrnnuP2pvFY45ekqN7Jgzynri",
  "key12": "5gS1hMJiWQAFy3Z6PU46SxVZ3AHfPB9t2fgEKcuALvikdBtURd99TkbZczRvV4pqFLAm2Q99Lj1K77NRVkHyYvJY",
  "key13": "PsBebVHpfnTAjyfZojSkq7tLt8UvLZ4Vr6NCwnbYUhDcp7vumybmhe9wFoASUmC2acJ5qfUozTDU8MyNv1XRmNQ",
  "key14": "5Z27LRhKHqfKVuY3xnUjeGjwJ1U6AeUUYP6UR2E69QQVo9B1D5VNxpU65xUUbQgp5NTBg2DkWPLmjeHQT2quBdXN",
  "key15": "5hqjAvJqdE5DRAJWkUAjLffVyXhtraChFEz9jh48HxLUoSFWjyBXuKvt5PV9j5PUqhfu7YE5DFzaunBr3buYZXPw",
  "key16": "3rSKstqknTyR27CqWCoAHc4NuaCwAMq3etJTRJ3UJ6aY59JrfS8tP1xJobnnrZuWsjW2JBKeHj2oX3TJTJz2SLL8",
  "key17": "ShvLJwrt4EwNadM2yW2jedbTecwi6HVb2Yf2i21L9qhixC42WicQcD7TfFB9BQiwsywHsMRNkeGGk7YbaovAPyX",
  "key18": "XmEYSWsQQRyyCQfgvdbjqXi2UAJpqvdhqS2rKKawpHxa5pwws2BVXCCmk2UgedbjtGHpVVwDg8hyt38BE3kKMXf",
  "key19": "3tCoghu3QTAnGQcqouEJLS5HMq5cBUfrh1hoScBywyptCCSUgtosSBgUfsWWAZHuao6TK2v8N9qhEEady3Q6U2a2",
  "key20": "4PVoNhzqUkAKx5AKMi3hMdxgqyihKqEppN8AgL8TJescqC5sCsD9YEFHEypWMv4dTtchDPDgnj43vBAuGZgHRugv",
  "key21": "EyRdB6tuDWuhPkxHxzUyhrZ7vLoTwSnETCxy1tftMX4ru53sky5j3XM8dfszZnuxAW3ex7nKpQmubjYsnsj7G1m",
  "key22": "43e5Gtr8bby9FU4n558BkRGHvE282mTgvQwCTsQmXd4SWUxJ5Xbx3gPEWdX6zsMJDf9ZNrHFnaf6QguV931kvbd9",
  "key23": "2tHSz36wQUXTmk3JK3EhnwUazMQj6JUKhW6WrNYyRRsq4Hz26PpdBWYMGqe6NeEwakaKFRbEWdtRsrcKQdZbKujL",
  "key24": "3B1X88bkSm9ErByzo728qUbmV5ZvpEc794VhyzpUL2YUfPgXunBaGdKn6XSDhjcn1qJ7k6dDoafKXkFJDNU6ShXV",
  "key25": "2BMJ7F2a2H9j8YukkRXWfbuWSGEQ6EtvPVnJR9A6T84Q7p5kHBc4YcG5pXNfRuaYjXFQgPKkUzAGu4i1eysF8D4t"
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
