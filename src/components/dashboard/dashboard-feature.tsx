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
    "iPiSW5Hs2BmCjzRbCaio2ZWsTExxRRpqfPrcykfNds91yKskgTwspEmGQ3B6B1hqMTrG88aThQme1aVth9Et6CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dD1HzWKZMXaEk85jz5KZgjvRV9isipqZzUiWU7UasUNbfQRC78YbfLNf5qrq12HeFXAEetGXeQMUchhMuDZ4Jya",
  "key1": "2j8Vh3zKmfDsfRReKJTiKW6Wi9HU5ozqhCaoNejEtGyd5QaeM6bLzczeWzrhfndGnSQwNKbNcQLkhU9d11FzQH6L",
  "key2": "5SLLzsdH4XoefJWvn1sCNzHQLcdxLc87XdPcFMF33hfL34qYJJX62hS2v5ZT6GTcfUrmyLh8AkC4SnbJz1HH2f3f",
  "key3": "D3mLfo3oi4WLQr8t2TNjf5JNWqS1hDb5jX6Z166oh5xn7o7TyP8v2jUifyp8gz1MQa7mJWik5JRe3FKDw3nCgtG",
  "key4": "26nmXWF1hYUUZD1v1hNpSGzc6QbVEo42HgGJpG4MA8SRyXzE7SXGwwkjs4nna5esCrpPoYJTiXFBdwSt5K9XC6tG",
  "key5": "ZrLxMbD1xrEJcZHxV4wwwgf5JDKLpj8sUs1CQ6ftbKHHfmqNFxRLdrk5iJ1kns9VABtrEDwdJ4sjkPdjk2NTTF7",
  "key6": "YVyq4w52UdkNwcKgVrEF7tuPwhfXKJJjRdtbLy7k2z3YnkYr9WmjigPsXmp3cf29bmWnGvoCh7zVqrkpWQ3E54m",
  "key7": "5eB5ED2mZy9fNLBjr9TmUvpiYXg8TpPSEJE4F6zuVWayxMthVULpPSQMZLaCNUByBZr86qTKEtEmo8ei7agkK77L",
  "key8": "MmQY1h3SxfM9mbXtzTfTGUStd5LAH45N6rQGLf3NPd3wtfmbzWkNyBobK56nF5KvC6DVbAvYHxCfiLtUYnW2tYx",
  "key9": "5nRcMeu8Rn2qX6NyQ9LuDFavaXo3Fq4PPG5ijFovWSqSDKytWYSZWXwCiN9s243FqNfcLXHXtdBxDT4RH1raG2Ch",
  "key10": "33W5wEYo1tMa6ApSG8DA1gt7tEzFPEznXXna3mztLxcaDwvCNpxG2xS6YaGHpVpEmZ3GRchNZUfYaNVGr8H5ZWGv",
  "key11": "3dGRfNR4BD2KwYaWD7tqF6ytgzp3BTFznLnwT4aTE45TCRBddP2QSpisogwT59PoEGSxSiuvHNo77qPPiEfQbCQF",
  "key12": "5RZWrwuFN79x7bD3aoqG2kicGUuwTkynde3E1Mdds5gaTaUZgz1iftTj8ZNsxXei1JWNjWA4eG8F9SorAEYbxPpt",
  "key13": "3JjztvzxTVs2akP5KBQqH4gDWJjVZ4auRh94T8Gupc36Zhfy2NsFGa2CCXxe3ouxDm1Rs59ZZgLyocophkSfvvVs",
  "key14": "49fBKPdbySLJr57mLCsagx6SMCESRsh5gFGGJWyw82qK8tAyovVLT8X3JZXFzuu1dbZzNVXyKiKKSjeBcBqhe2d8",
  "key15": "56dbznHeFqmM1SyKGtdK7KmTQV7cjuoXmkBh2qkwhSFH7Z3oW9yYu3zxJLUJXxbJWz2dXkcV3r5R4u8qRzFuTQjD",
  "key16": "524ib5W7zBp1WfNKnWzpBLQNMGd8U4Ge6mc4K7gn5fXGr9nqDpHC3Rfq2eGMZbVYibQRinLVEUXMBTgVq1m8pGiJ",
  "key17": "36T8fY4XYrkfStaZiR1gaTETPxYJkADLWLxFX3cjXTR7z6KcebLPybdX3rYGBvVUVgpa4Pe66aCkqb6Lk6buP9EN",
  "key18": "tRXUs8SWPwiRE4WkQWR7qpe8wh3BEFJYXsRN1aQc4FwvRcaiiXSsRZQGUe9Nw96c4SarC4LeCSCJikDsejFJYZc",
  "key19": "5H1CREQcbS7hzfJpe7uFPJbFSFsNAKyjHe72esgGbGfDMcKZkXk8EB5pjXD3LAfFPKZm3q1omUzpQGSEYmmjJYKU",
  "key20": "3xsh9koCERLjiHnGcBY2rHg3maEFCnkb6QbmW4AroRDm2pJ7q9PqccfoPSu81Ms925hEdcsSbUHTPXfWrMfYwW2N",
  "key21": "44LActxdmfUX7VnoLqXu4dQPi4u5qcBLU9Y5UsH7c1Erv7CL4zobHx9htB2a98EkF7QWYtWZts8UAhjPzyPiF6qv",
  "key22": "5gjZYjvyDk758TJHj6egaCHG5gk1gr5ZUrLr2qmM96hX12Ei7zXhSEnwvQJpY94PoktpLC58MsbaKDpmHQKeH7xU",
  "key23": "3oT1xwwAdK66283Ew14c4XbD9sFUkEG68waq7PJe63rKUdtE8tSfphS8cAJzShHQfgjbXSqWU1zF3nF7GJWXdvd7",
  "key24": "2sRwsjAMkevgY2YmKwGY9b6j99hyMQsarmXz6NT7Njypoc9DDh9Wg7tkizsurFs6TVFhvzTTdeuu25H9EHCffL8b"
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
