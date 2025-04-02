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
    "5hR3C1en1k6TEvJQLx57aCAQNgrv2BzjauhbvjKsWfnT8PdEtANfJhUXZLPgsmtbdQ3jacAtkiehjdvJMt3zeqe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuNGS9Ve9xJakzfyw1SpJ8EzE9z5Z66mxrX27jE9e6mKnLBcMQ8g9Qft4USaKwYWX5tZtwjyx1AUaFdNboVd8xY",
  "key1": "3i6Tvn6iV338UyaRESLmCMfKeyV8eUceWkVaXogSHsjgqrkE6HnJyHEoKxt5G64YBpqZEzfGjFUaw2Qh7g4rtCmn",
  "key2": "49vyYNi4qix799Tr15pA3L7RLdL4EL5BwjrQkPup7zWTEkCQM9LqPCwibUtxbsxSt6hZy7Jaq9Vjf4UWL1TdGhCJ",
  "key3": "71K8r3QpVETn1N6tRQNnGBJ92sTLUj7P3uxPowiwMASg6Bu3z8WmAQooRznKxmAmNPaqVUahpPySwp7yyNAPudH",
  "key4": "5X4k1ob8uooXCHEw1Vz3q1RHsSgo2oKLFvvogviYTYQYvgEpzQSDmGYseF3SJ5YppgLFfn5GLWYhbdvKkj4PS9GK",
  "key5": "ApDWkANsDrtwD5gBTHo6DbfZMuj7agSCENpgrtgQ1p27saBx1Ff4MucNAp1LkaeJ8hM8QrKxBgjq96dPCc7NaPc",
  "key6": "3PeuDbedJnBavqbtf6PsfwjzUFQpq3bscC2EgD9a2uHQ19V1KJmTCnCKdunc6yhETbpNKsDgbi5eCdCrk2BKsUZh",
  "key7": "4zZ5NMmph1inrF2Hbu1u85cFi5XMrC8wDLExAFNT9foCnJKNQt3f9e2Z3Aw4BzSX1Xv2fgp7ue23hxo5bGXeBde2",
  "key8": "4t5FAK25uj1sJZipczB8NpFgprZEbuoeNQ2JdTuAVQ3UgvDjFu61fBMRNwKyb5vtkoyhWBK2msQ5rL5BqNCn5t6t",
  "key9": "612b9KBEjDAz4QFGoQT6wF3tSePixziAVfB6pnqauUi6jUujrsep8AiS434RGEnaVrfc7e3XA6p69rPUtm8Hf8br",
  "key10": "rXKDrsQ6NRMdvF9hXn76mGUkhZGnak5gE7maG4XEwhUgHqz1oNbb5RysA3hsM9oQDizDUcPqkMjpeRTmUukJpBQ",
  "key11": "2rHTtEwovpAeDwskKyczs5ugYwBw5vSGww2ykyuhzztAMpDgvkwT5NFoWGbqB3QLCADWK5Ri4xze36bpwKSPDPvX",
  "key12": "2qC4n2eTJcgxVjTN1g6XRnxus2B9Q4QEHHysLmbDDqpPYRzmveqt6G9zwUT159duoLLV8b9HPDikF5Y3HPaQFCQd",
  "key13": "3pNGaHtwunwpi9mVzsWso2isqydaD7FcwShg5aGhq8N5hc34jn6xJZDErqZYrXWL9Z6ZHgyKbhxEwuYVgCczGztU",
  "key14": "39nwwNnrwNCG6iJyEqkq8zeVn17AXKzomdEcuaANsFqEEFapFGopN172N7gKGKGknRUR8e3gLxsu54uU6y6CXdsk",
  "key15": "5Xd4XEKMvrYhPCMang6qgu1rKMdqskzvQ31vViTPA74WxskQET7hrMGX3RrvdLgqNFHDB9zejvMzCWbDBmRHDJFe",
  "key16": "743CtiNjQ4yBwZj8xPLnajuWvo1eLncApa21FLGTHaa6dvfsaDbfewUtDBnhmx4wB2yUaN1d9DhvoQJrgT2qNmN",
  "key17": "3KiDiMdb3JscXMyxHc7AoFSmyg4wNL6mJEbSUDRbzmC9P2yRGDbvBQTr3Zj5QFhQRomaaPFAuh5UoyLHg1Gyn428",
  "key18": "2Ae3ARVvYDYzgEYzMSV198MorJpvKyxSYK48WuAamY53U53FJahGnES73VzBxRG9A7HQyEFe83JUfpEToqT2EYYV",
  "key19": "5sXu8iUeGQ5ksXWQnfv446vstdmYU5ioqkpJomJXDSqVg5rE8pPrqNju5JSL7wy6dt2KRTuRtGHMAbkm1s9rz2C3",
  "key20": "3VBt4F7ndg6eMw82uyViTynRDUdismVobvuKkXnNzuG4kstfnjJPVqtTR7NxicGh59cN8J9KAAziPzqQvYwodCw5",
  "key21": "2Cj1TLPmHs99uHngzhaoQr1m2abUyktYQhioUtE6FL3pZnhzPH4zqugNpY5xMVHF1eSHW4hy4C1heTfHn2arbc9d",
  "key22": "5GHp9Q6qNoEnjHMP2XQ1oGSrjfUjnbQ5ipKoJZDqrLpANr22FoZHBeAaWhfDxgkGrh12ivJV8iEgtK5GYjgfeRw4",
  "key23": "47dyPCWPtNJGaZEH5jEscp3Sr3f1fGpEUxrWocSudbuaStYdRE1ZszLiH6YspYP4q5TS6kwQq93XdhcigGAWMnvS",
  "key24": "2Y9ynv38oJr5b7PJ6tqiAiLYbVYPb2tkiBbfxMraUqCDT3K1vBsVi3wsdWAxvHJT65e7c8f6UM1oBDM3gC45dV1e",
  "key25": "3G3qiUcsZmH6BwzvJcJAuSi6cZzZqpMZYoadEXFHagihVNvKbqASVjGXEJcnoQwddujHPSGD9DCzt4dtebEAEHSm",
  "key26": "SD6Vf3gqTabZiRx6ySnCY8jNbomsVCJrK4pDaUZjkm7xsfsRBWuzf9KYZ8VDagBmkbZKkq8LvNbE4W8LTbMNRKQ",
  "key27": "29x71kZA4ALSi5NJndknh2kmELAs1Sq3aWxpFEfFb8hhkN48gcPi3VeZk2ry4i4PRBJY8WR6WaY3TrPFfDLXwDvD"
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
