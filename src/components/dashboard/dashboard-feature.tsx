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
    "5UVQKVApcqSTs7X6CmEV6au7KQA2UrCvWmFfcqS8hMJcRitSuKJGiBJ2ynWnwzCd4zfrvZ9oNahWQK74w3MgYxi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfvRz6So9zDNtNVF6iixLCVdz6NX9hg3D2TcyiG21dFPyFQbgyTJJu9fqse1E15FEi9Zb6AHZdDTFSpiog7dELC",
  "key1": "3YGd3M3jWQFnQW2tZ9xZt6YyN7EVwie4HTSZ8bkEAJohnaThmeZqWmJZYpreCwiAVtXHS54jMHmfg4E67EQq2mbj",
  "key2": "3kkHRHinAnvqL44R8YAV4erjNpci1EPecoLEQQALGvdbHxKUTQpNHg2jU4sSiVfvffWSPfreFeQBoGxV5bLbvwi2",
  "key3": "4Tp6Z1KJD4xKSFrhZPRsRuzomwTJkKajfiMin5CQF2g4tukRnQFjLy25PUQ2U2Nh5SQ9HmH9WFEvBWRHXsCjFs3x",
  "key4": "5Mit22J5jdjrmxUTjiREvtTWBx6ZqgBLhd2biybv7jbr2jJjmuzkkppiQXpbQELTAbx6nQwjbs1AsNpmUpiTYK9x",
  "key5": "61nYkRzUWtJawBJY6S385PbbusHZKdDUX4HEdWW19witXnCrAaWaaDyKaSqKHChJfxXocZqzJgxx4S59s2Uttp7A",
  "key6": "2AgAfvWbFV384ZhHiZ1eHqGxkUEwEMWqPoG9GGh1imRFiSFgMVHpxCQaTZ5jeQE353S7hzvJFrg1ARnyGPzvL75v",
  "key7": "3iKSz2ogZXSyKoyVdFxXjEZRUyotHYbymFjiTddPRL6bnpHRuH63yTq61mVBGtaQn9NryUbqaTS5QLHPTaB3dUYj",
  "key8": "2xLsGks6JspCxPm6qf5eb8vTxkdTbGS94aKAdgnUYgebMtFfEiHR2Af4oo3FEBFiVTaZEWaxkCMT6jyvJkEnDcWa",
  "key9": "3QyXmEHqt1QuJQt2DXsaz6wYm8EuYYGfVcF4xxiFArUWRGVHx273px3fvLcBKi7pKTwtjnDRWMUHPtJ1A4qnLPUt",
  "key10": "2LJmJRTAbxTsg8xQ8iUdQn5wQ2wyfQvDsTyt5ipQKUc4b9CTjVRJb9tpj2oC8xH6jAvd62w8J3HksCCc8JANgYgs",
  "key11": "MqngPsRnwWHzeSvdVnbRYXJchKus6D9rnThRCVaztACjnd3MFYQjnYoHxnjDZgi49EmmfWgd1pUCUn5sCHQiV9W",
  "key12": "4FE12Z3tWncqW1gVwN1PhhLh4Xzz22Hdtgn4Y9qmuXCGowJZxqRH4czwJxeudFvSW9hnNNp9MXLJTzEYx1EGebNG",
  "key13": "f46KCA31BV5DuC9ZPcvat5U1auUFfo8TgY7Ata5FZaUVzadyf1BXeq5QipxgQVi2fKPthamEmFpKEydJJhKFkBq",
  "key14": "eMmJ9DU43JE6y2s8Sh6tWjwxuwXtxLHsMgi87Y8NiJThmswaYA6ZydKC7Ndf2QnHeqZNg2FGUH3Qo9Pq663aEtc",
  "key15": "4ZbYv1Y9bspycLhhbRwL55Gr1PENjG9xoYngx4hk8izb4sYtpv8z2zjN4QSn87BiSntFTgbgio2irxacQfTF3rBu",
  "key16": "627erANg4iPGCkodHo78B2y9Z7CuaUjbHPeP2HQnBrDTHUUNNQSmnBgUeaEXDK5HZgJkUdeQo8MC6q6Zvn8k2pWY",
  "key17": "3ALb9CZ7ocX5qaicLGsQpBVJun9LDWQp4B78k8ytLZ1Q7i5N23KCTgY4sAAA3Z7uf7yD7jHGAsQS9yeSXbjRRCLG",
  "key18": "4E7KEzAT9reQEy7MQWPJNUVX1iJp1Tv2VWJvGhmieiE32UA1LWV267zRfCspdGAhs1ZMx2Z5K77Qc6JL2fKqg4sN",
  "key19": "2xC3UTk59ZfjKKMJawNp3ethw153p4QuftXNj4qZ2gJDZqLbjzrXNxYvFVUfCQFEXBzvY4uokYJ99Ai7V21zfcV4",
  "key20": "34XaQmJvfZjFy7uPsSX56JCiGgLTLkrnNjJFHYf8r7Vr6MSXC79FiD1zhxF2W3LyYoLZb558nkW8aqBBXAkjuKKM",
  "key21": "5kWPf3mCvaFkwix9ZrMMBkNUBY4tzmZ3xhXdghZU1Eyp4LqA2VPefuWosa2fybXaJbuqta4D1bLRZycwxjyqXAaa",
  "key22": "tEniSJ2rjMUwooVBd6nN1tJKkg6aGvv5j9P6i29QTjp9GVzR2LcdGmRvuUbSSyorc1NMKjt9JzUk1sqkeaCbM7p",
  "key23": "3YsQfo4YptkKefvZWF8LJSK6SGVr4mnqsLAf1XXB1SxfwghmEd9CAxjssdMUdSwnApt9vHpUUFsznFsMNN4m6koL",
  "key24": "5y72EW5aunExANJ5vczvinLe61CSz1Zo5eofH3hwvEwUfRFFyMJxeqSgixaYsP1uc5rRar3w7c77BVREWsZBQf79",
  "key25": "48UFpsjpvxpVSPMwwiKLf5cBKedhSepVeF78F8J6PiqV7zgRB49ak5usdUcEeM63SJTU78KkqHFYYYux22JrC4TE",
  "key26": "2y2UQBGBegGU1bBDAvEcmzAgvegMeZw1hF27rhJrq6n9VWaLFkxNVvDe1CCVefKjXWJSMdau6TZZ25R9aFGKVRPK",
  "key27": "5kxpeYKYjSdhvAfgBon4hCQ9WkTLKUnA3doM2Wan52sQN2NRCVzsrbMGWYCvqmpj3iKgXCFLfDBZGLTkXLuNjYWj",
  "key28": "2oSTvFC9WS5Y57t7nvyxokMxqZJKFnMuoKBKZYGFsVvqrYKqs7Jwbx2MkCPsKcuvm8fC4vpQVpiDLopmRh9iKvsE",
  "key29": "5VJ3k81Py24ZMuhHfVYd136eyt8UikNuu99RkTk2chCjxjcwW62MRh9VyWvF72Emi1EXSQmBaJ6xycWZHbSvWnT6"
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
