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
    "4qYgwbg4fFXL2gaty4t4XcuMsSRsNoZbR5FBMzbR7F8DmFQ7UW3kQzEfKmfbrdGxbivVJJqD7YN3xxnTWZpaE4ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZSk7jJ36cK321YV7pVP47bDwbEr54H1ivwcWMiRohM1vmjhyo99FQL8ybUeg8i1V4sNjYBDSY65cJDLaUp9AF6U",
  "key1": "63FCNG8ZaAiEHeTWSSehPXqGSYazX6XAcnpMHAZZR7dMvrQU3jXZsdf9VEVtTV3unFioVgbo5ePtPbpb3DR3ayHQ",
  "key2": "3qMkNmVt2JGyKnUQLEgQdt7KtkszuGGRNsSYJqgJZnrBTGbEQVVbMRb65uDG9xY1PAcWyqswhsMBoEMM3dGxpLPG",
  "key3": "2HTpipQjjHGdQT7eMFAuL8NuU8ZsX1CSvVtKYH7xebYPJC9bCB19JrDXdTv8Hh89AsSSN7G47MED3iDyrj9aHnJs",
  "key4": "3VGHd9HzaQSMjMayhffWgLabhvFC9nfPuSTeMJyEHNC5BMrzeVpLc2buXs3A8chEej7n6MwNuUF656KXDugvAo3g",
  "key5": "4mHopag1xuwrNwQ1X2gZmj13SygJ5VPDkXz9R9CvxKDw6KKJxy9kBrP2LnPicbLNcsczxcHRmLF4spwMbgdocrr4",
  "key6": "iSz8PR7Urbu2iwtWse2XzQ4ft2SMvJEP7jC6CZqGfz6z97L3zVvurKSZcdTQkbsmaJFqKevQ7LMStAY129rNJGi",
  "key7": "4YRmjPyCyMmge2NKYSXB98nLLwBVAqVnpL4S9P66fGRYNy8C8ZLtzKZPBSMqpGbca9c9A4qRsJm1UZhoLfSVKM1v",
  "key8": "2TCuZ1G71eHSevTRvcC37d7KUsLSWCzTdivWD1qE6CRtnWeQLtjKzdVL7RHwYJ6vf3jzPjXHAnAGuAJL2mM295Ms",
  "key9": "4i3iLU8UrSiwzgSkDeJShdSuHFV9mHbmM3h2RQM62ohrfYv9gmEjaDuVgxdtCRQBcXY7swtYHgHEqiPqMdZQ6V8a",
  "key10": "4JAbdatXRbD5fV1EHEHWWs2yf1uBTAB1zNveBdxxdWWAHSxqdsKA4A8aCfwphB2iS28qA5cd2X8NGTPMhsyJMMmA",
  "key11": "455SvA9X1q8BraVn5eTuKoX4cDcreVLxRr2yZreuHfr2McDwXdEy7L5FCPSHmgPA7BS1dD8y52fcbuFap9etxnAt",
  "key12": "4zAnSyxTcKuEC9tLKR79HX241Kfjs12LVoWzpZDF1Kb1rjN3eU2tktJYgg1H5XukjYg5dJ1YU587ozRX7kYfKCZi",
  "key13": "27Pc2geViwe8SAAbTqNC38sGgku2NtPN6FXndQARKXKtT4kZdUExaLyaP69gibjTzUBpJKaiGdzmNoUuAxBGtWq6",
  "key14": "2cPf6RvdFdcGbMwcwTzseZyPjxG9xBePjvU346s88ZxygK5qLpZt9E7bpRQr633d9os8JzR2bi5AQv1WzU13Y6LP",
  "key15": "Kh6Q36eA55797KtYXuT1pphKkgDab3cNq7zH4x9sJCBkrzypdPZNrSjB6SH6EANMhmvkgnhFjNitu88tZzef8Ta",
  "key16": "498RGnwaR8G4tcX2nYBGJQEydyquLUCSYPbMghDrSL8kuKF9giwiHDh2Sm6STadmE8FLjDpWsaFT3xAVDM7ogpTZ",
  "key17": "5LEHpse3t5C7nXe6LS715zGjMdqdTJUVUEEoiRJXk2xC4du3k71mRJRFi9egYRXZQi17JS1RoQZtT7tV5nMSzt13",
  "key18": "5Zp7vyRbroujtzzh3CPgNVmZDXZ28VZEraXDHt2zU67C6jDfmZSm9UA7YcRVr2ViKfPX5YywbJsUAmMd3noPp3WK",
  "key19": "5CdcRt6iY5DMdnwKtRtAze2qWPDLMSPyRXZxyZc7JzatzfbWagGaoAmksN1vJNo7kiyXpRW6oUnqeBRivcKoBvTh",
  "key20": "5UcNsxh9bviDAbSNAyRAhjvLkB8HRVvTT63eqHj1nrG7CP6mdk4eNu72zfmmUDxzuZtwtUHjXNtEK4yKAu8Br2sE",
  "key21": "3LDLgMmrM7XjhbzwUn7vsvKK7BKnJ5bNfvsAEksdbLVZsSNbv8oxaG3Bq3UpShbXXrQ5FC9HgGrmDBZNxAPoyZym",
  "key22": "5Z9sQ11Mym2xnwHmFoATHXjhk76Y7EjEsj4bGv1JGbCyL1bQdvHBAwcH2QZcZMKT7T4K2jani9zx2a7UqCFyYmMr",
  "key23": "2pD4ofRn91ysj1YYE3eZpKLW4L2uZgDbkFKsL4faQPak7z3BQ3jPThHMs6iTvFgEFCBrB12tZDBCBYmdyt7Dtups",
  "key24": "4tBo59ZVfmbZuxwkrtnv4e82jXVudy8PShVg86Dig9quh5em68i9WfXZaGNrPqWzmtZKvBN9NF1PJzUNHzL8pMmk",
  "key25": "4KgRezHRrtRnEtBGdMgUDtSvAiP1PuYudq19p2vdJodqH34f8L8KgwxhYmmUZgbaMvRNosYAzcE88TFbtygx5dnq",
  "key26": "4tmMfSyAgahzGg8RRUo4WYkQu4mN7KuiqY7cQhR9R6jgasq6kvrM9sgE77FCTyH2qaTBXdcVLosxxKWnmBBMc68c",
  "key27": "4JrKp6cViJbYiDwMmonTc46jpsFekedDsw6V81uYE4bKgiBDsYjqjKZiegBMW4abomqxeefZXmoTSPqpeKEETMrY",
  "key28": "3GgdVKoJtYdGx7astQrnmRNquqLZmv35h5CFBAuunAfrJTA41wtM4yPf4tq9c1n3tmGRGAXuGh3N6kzTMrRYBeFD",
  "key29": "2SV2GDPCrGYYA417zw3n5ePdt2GaxXzrMUqhn6skJ8wJXGtTmF34k9VHK4i8M8LGHttK7MLtZ4eJmNL9Tb9mHsz6",
  "key30": "66yUpPRFt1BUvfHzTDagHfDYhphfTMKaLaLmGbwvDNNvDLfxGo4SfRuhdoN4ba8nmaYFbdPQgcS1in6rJuo4pkrn",
  "key31": "2zN5aAeJCb2SwDPy4wPBaEsuSL5a6BaqXoG8ZJicv3HK8BzEXLPXa3mTsnhkMRU98P2z9gsGJUDWTU2ba2Z76fSP",
  "key32": "5kZAjdF8aKFdM1jgUwbmKC5JfEPqgFpN1wGKFSDwtJvXhSeHvXCP5fDWZdjFweX4Xhqe7zG1cXbq8GWhZDJ6mkpk"
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
