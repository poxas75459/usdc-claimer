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
    "F4v9wDQQHKg1DDog5Wp3EyF658FMaEnrLDNSpHU7Jv6cznS8cb5k93pS9PQGqsRPFnorJCxkWwnCb467oJgduJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQEKkd2pi6anxADxQzbFqpByQSvTn2bpwi6mBmyFj51sRhPKLNPvQdKG8Qqv14fES65KPdq1wkGN7oEYAy9r7Tg",
  "key1": "PcGRBqQ3vNUWsdDay8dpK2nYT74ToSLKjLk8tKEkHGa7ofd2g9RedPsGa8vzkDCaoC2Xddo4FCukffCHtH6vQWG",
  "key2": "364YeusXvDxyMCrDfLi9Uoc5CEynhfZVNi9xTpyETPMRE332zbxvdLehL58tsPgV7xA1no7mm75YzaT7uf7eDxMX",
  "key3": "3prkbNS5nAbwGzP1eqxHUyDFjez5PgYcuUmT4QyhJBE86DoebxbDgES6v68TQ3Yg5NWgviLLzJF4gFvuWVqDz5Nb",
  "key4": "3rx1azxDy59o7mcaCmNY2EapzH9DfuQJpF4nb57TKYEdmKU5eaFBsFdaQyX3y6jsaDVokjT1kDjax6Qg1Xz7ER8N",
  "key5": "kbc3bPZnQzuYpyhJf8n9D46g7etcRdYa8B371oubFZa98gyfYXMDCpQSFaRfvC3wJZKQaTTVkmYUivvnP8ZUqbB",
  "key6": "3xKnrwEhmZ2E7f1Nbg1fUtsyjyoSitUCQyXRjnEawy3QwTe1cUuxqXnAVjU33MApfCgq1NGLnf2fhZoAunDq2UgD",
  "key7": "5X85bhy9Kny8EzdwJTERYwyxaL4YX3jsrRjdVfw51kLy8wWWy7yjx18vkhNmn6aW7uoEaZonfk2oSJBifCTvXc8q",
  "key8": "3myxJ4snjTaxqkQtKUFNJ1a4Pgp9cK6LLq2wqrBKDRHAe4mymJedrkrPPWs9bEWGRhfUzS3BNWL85Da1N7Tr7JSm",
  "key9": "3myXY3Xnsz6pN49QZuq5fi4wQhDPAjaNVKM6hTJcRy1jt81Pf1HUo7q7waZDYkoSayPXXKPyY98SHBwfuzJHqvUi",
  "key10": "3WtGtkYEtXpZS1EiuxdCvgHaR4YcKB5CNCaSe8ePM7cYb2V3GUh5fXGppezVeQzMJTbfSmGE6PuNvbJUq4oQBWDG",
  "key11": "4M1mw3u6kSbVwF9xTyAcc3haWTJhQS7xPWmkbQJLsUkE2VxgtADcgdNNXZWiz85jPZyaPfGtcDipioqtbpo8AuPF",
  "key12": "3DyU7qM6tXVGnfQEusCLRUghfT9NzGWuDKgikmej5nvDwiZ3vaiM8otE5fWw3dqREs5zutPQdMyZ5tEjYmNyiN35",
  "key13": "4rwXAXfQcAq6Hd2qdCiuhteDFEp5pMU6qT4xEDXqn4LqxezMtbWLUftnjz51dKN2fUAABiGzfP8D6tjGEPjAourf",
  "key14": "2J2VJK6Y561RMEqgvwrYgTzsiVs9MsGTQAiTsS9Xv7Hpcsudx3EGNrQq5GWCnc46HggqdaFSREPEHRz2Pd1NTsRh",
  "key15": "hsPi6hVwckdoKDpafFgqREj1P38j86XEuBRtGCtrMhxP9eY1bfE8XW1HYbzEQjingqJPjmuqSSAovDKgg28Vy8T",
  "key16": "58mNuDfufxXcunymjkrgBuH1jYJHQXdYdCDJeUaJvWBcSBXZodPdh4W2WvdeePuyooUonHp8jMReGMhjK6e1MeYE",
  "key17": "57tnbuxDx1Z8PJJhwWqQZkTnd9dRreCmiRYzzw9eZ2ZfohofizWANV5rydtBLBek7fdyAZBxpYDmz6fD8eCkrxaW",
  "key18": "2wm43QCV9iKg2zcS9KJApwtZmPMyQjq6P5CCFkwNmS8D4NEJ7hbjTVF38nWGE21mojbCigEkW4T7zZBJWuRgiEgB",
  "key19": "3LtdTANPERguVzBLgnkjv4tDHYjncAvAZhi7iWNJ4MWuAaiETaG4RB5NyCKNcvDifUTbtmVjaATL5ovmw1b8JRAX",
  "key20": "44FP8dF6EoLHDexAgptTfNnDzZBAb9etRWsj1ogj2ak73ghHwzw1uin7kMmV4VLUJe6MbgvAR1Z4dT4ycH35Usje",
  "key21": "2Td8WJWk9sx7K15sMVDp8T3wPz1ezPVdV75MFd1Y8CnErctDmzFZTzosvp1DeUXD87epVantMbPdZYsd7FdQjvq7",
  "key22": "3VdxPYgnutLfHtk6NmHtn1kkaZbVRNCk1ga4Juhy3KNFrGWC4ExSouG435wjnLf5MgKQZfWbkkzGRvZofCguiyNL",
  "key23": "2U6PMKje5JEy5jNSP2X2A82QMdjek3aTQ1NLNRY6nZYFtJjskjfisdnDcC95PhjQ6S81NxwF9CHVFQLJDsa2sUWR",
  "key24": "2VDjfC1cbChDt9KjEwa5yqrqSaf663CAMFkJnLNVkMJQua267cB7xwDxhAeztb5TtPczH9Ti5kpuFATk4oHiaAfQ"
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
