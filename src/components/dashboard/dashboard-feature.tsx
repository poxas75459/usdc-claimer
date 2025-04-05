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
    "2hXFgNew1H2j9T15E43cNKJQ3CC7ETjy4dHvtNd3dACNHPXvn4sStN5kJew3nwHSBRFymgdH4FqkAn1F841n3h14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJF4N2qgwp8DwPjiKxGwjfKmAkGb9SaJ591S8i9H3VQ4XasjFF21vmamxLm7rhYMH4RjNjuRRkdgdcoH9jro13H",
  "key1": "ejYdZjfuRUeABg6EzHt4h7xhwSLEAjChn3eUBCj44aa1BSq8qeHNhcW9s9NArmZnWjNC2W6V1ytneTuqKwf3PyW",
  "key2": "3djADN1tgyDu2rqqPKnbejkcR3pLkdUuYWdb6HHmY8pPnD7vj2DZ6hVA3MQqDwFfKG7pPNuAVLAxfgHFh9yQoKFq",
  "key3": "2iaS4SovYZZe6mjYmCdFxnFkSTpqwidrUh1ef9RhGLZYbVVLUppHACiVcRzuwaE7PAS4wyv9Trbqk6Dceu1LiaH3",
  "key4": "uBN7TV4iGntGhVUkTsQwvNYPS8HtsYVf3FS88vn444mXy3cFz4EzuFLN7bdghj76HJhLwdBS3f361qjAsUCqFAX",
  "key5": "5pEup1duCpjXmQHHMQ8PCee3RvdDzADuNmEuza1tYFfbwpdkiLQD12tNvk1kmYkZ9KQoCLTD7Jz7yCZbWa3sGWA3",
  "key6": "5DZq55sdjJcXHosssH9MKe4Shduija4hoXmovwEcrMepW9De3GEfcoPAPLn9uJR3hB5Eosvrpd9XWT45jcnHseu5",
  "key7": "45g4fy27vWoEBsDwU8cJskWBoFF3zDNQNtbPAbuw3Nbo8JampQUkqrouyhj21MAmdGbM8T4zYz6CZ2Qh7UXhFUAa",
  "key8": "3rX93fGqT3nS9eavKYddAB2ZWy7asfkKaSY4pY7vV3BQSPaPRPWbwCC71jACszFsvp899TiHvQRvJGy6xxSqQrjP",
  "key9": "5f5DZLw7Ty4CTmXQvyZPFYgea72VdMwGKLVnQ6sWFnJoLyrEyhmyraKdT41kR2n4nRkuuhvgKBhw1foZ6NoEdXr7",
  "key10": "5PngK24nr3pYUEePVcVgjRiivUn1eWs3iFGWx49QfKh9EKusa9288nsnsJjXAdFQJc22KBmQFb8UHYkvz86vGkuR",
  "key11": "3N1qKh2tXtXDiGCsXMAoecueh8i5jCvee2p793MpxPfffDjtXZfNCLdj6TuXeaUUtutaw4dNy98iqEHNPn1xbcZo",
  "key12": "2ktH3vyNGKoH5jiF7b74VPAAWbaF1BAHHcztV4auBPCmccPw15GbYkKGDLpPYGnVx1fVjj2uRK17ecwGBEEY7Xhk",
  "key13": "5M63RduMNvPjxf7hHisUBmQdPtExsRsCcECbTGsqCVqrV9qAB4Ee8kCR6TL3UDs4nxj8R4wh1wq1QHZT1qGd4bke",
  "key14": "2nGgvZUssQk16zBGd8DRbMGHSnXTMbxQqh8Hi46XN1wC23ajziVaVnju5gMFdBafxMYrKQc3accncCJZkNtRgDJF",
  "key15": "59JNagFL7QztPTCe2hJxvBkiBwkWTKPNnbcESu7VwNCyWxWtsZXn9NwNYskkt5zi2W2Nss73EUXp4QrBrM2vpY43",
  "key16": "A1d6jYLe73i9rMXyDDFQ4VHA7soYvQAkvzTwcfrUD2Bsj5qx684ocmdXSD9kxj4QSt2Ubp4bXLHVEMG3MQk64KZ",
  "key17": "3MpnifZY93Z5nPJGipJxbYiqk7ih6g1N41aK8Mxxge2PQNxwfS2gxs4ucNU1aQBnQvqC7aSMvC5mTfJFuUHpz9nd",
  "key18": "4xHJiEW7cAa62zdXBSdphQXQuCJftG7zga5c9DQj5jybCK5neBzHH6SKLAdAhPsWcXBh8rbb8GKrafgzvqWVoUDr",
  "key19": "45UxmB6HSCmyxk9czQhmgqkWP9mXJyKEuwxWgLpZAFQ7zKW1J83F6PrD9XYFyJNafvAjqGk7vnXiJDiMnVAFqLAi",
  "key20": "4Fc1hpoQuQ3w7oJSPw6Gd8crKtNeNHvXm63o27eVHrvhSBCv4SuAgNJY1Q95A5gsLkEBDy14goyeA7WCaBGMHj3w",
  "key21": "Kw8TY5jicVo8hPwiLRWEfBmWpQWbMeMN9mGmJjR8gz8YNbQykE4saJMZttq2zHuj7AB2RAGDMceqf9kB9wXyuBi",
  "key22": "5hzrA3t4kTC9Jjey5MGuEAmkVcAwygFT24xQJSmz9QEWeZCBdawAa9HrHzDJhB1GQPgrpbtmMULrjxe5oZpbcTqR",
  "key23": "4ejMjC2CnTUhUqyLjMZ6pEzYDLBXdgW7fL8d84sBU3arWncwwKEb5Bav8pSuJCuBhu7GrgqEdqRDEKZX9tGdNA5G",
  "key24": "2NhUeRa1DrWM2ZKsMYRaB2DZKf39YGT5k99dssBFtFhovBhda4x7kckXtf6rLX5v659CBt6y8tJGKcFz1MCoHwFQ",
  "key25": "4bkgGFQsKiiapKcfWN9oXHCQR4ccsEfti8zwokfj1Ewbor91yAGy6drHJJ8dqgrwks9ciz7WgpQjQRWUTwMeAXp4",
  "key26": "64hiKf7r9L6XJE4fLNPc7yyroZmkQfHrti65qJF8LRyyu98ZVuaD6ArwSCm1R11mCCJPirdAbyKPZctpYCJF7ao3",
  "key27": "fis1SS2JxHBq8QrM2sbPzWfDbjRJwREzJdUmVGFpPWuE4wZ28D9C1r7Sha5X3m1bd3PH3W6Vktb4dwxKP5ZwxBL",
  "key28": "1E84RCrPqspMZ2K939SCxtefpWdZjhDJVAcnFjTp16pBNEJiPaPSHeybHNJduagHAbKMGfVTzEgriZRgsoiifPi"
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
