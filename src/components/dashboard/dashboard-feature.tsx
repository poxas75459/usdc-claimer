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
    "4q1fJbtjLRhGi5gDQR4ZF9WRFhwtrtGwajTjAK589ygtdLv49ra4ms1zeqkpn1uuWTW9VUgyLnxK4eVdbam8rwL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHSy998EKp2UvZ5TwsWWYwutqRbftSgUFPHVUDtdNJb6hUeeCoPqoYtsAdMFDp3bbRQEL1C4dEETJqpLBJeuQ2E",
  "key1": "4svfhoN74uD6sb5vxDDo75eFJ7YWBnXHSnDyS3GM8e3PXkXuEkm8LuwqH6t3FeSY7FZbfE3cuCyxDdWHZoX6NLv",
  "key2": "43A1qshv4kM58LyjigTFad2PDPn7Xk8qHiPghq94SFKs3CKc1ZhTxXEfSJ4oB1gC2BwgZCeXJaE6CZGh5MbLdHH2",
  "key3": "WEvxyEnauK1N7keDknacrUcUf92w2YZGzn1z11S1isHjDAgN2kupPDnB2nmhJMVDo4K3VwNiHKzjmtjUgvTrE4X",
  "key4": "3mfKAwz41v4UJ5pWjUeQ5eV1nEHrYxbcp3DRJEzqmxZJrjoSndLMUZHVLm8j9DnRVLeKjG4EoW7JHNjsPGNHr6qE",
  "key5": "2bagwsy34y8z1G4iG5BNDdhRkWpKCTu8XbvfCidzW2xVBn62ekc7xpkfM8tPA7NvdNdbY8FyYtUCAA61oGkZaqkZ",
  "key6": "65CRjyHD5PxSoRApDgSM2VJLYdx9KddjwvEPCdVC7PfzcHRAmhKstzinfjNcWtadKs8Nw2ZzR5dCoWaxTttehhZY",
  "key7": "2yDef2VU3CkCBNuwYR6VrXZJ5yXbEqesBCKuBXzh35PhzoGYKuXJ8U8uwSjVZZmxW2TmgXQ9dy97c17PFhyPWHvf",
  "key8": "QAqvJ3zdpEjYyEFZd79WTAAbMaZQoXDtXYyssfmyYWRYULmooAhwKvYSTvPZyweftsiiQzvKWxVwZBBQMtTk4sp",
  "key9": "3MNp59pdKC6CjGkD532Q4dBQGpj5Phw7vrgNG9eg5Sd6GWaxH6k68bSeNUR3hGFUujLrXNpfemmUyMe1JC4gEYtq",
  "key10": "5qDYxG2bo6HPj1xjsh51L37Da4RFv5FttT8KCasHm7uwAmpGwyucfNKVFpZPqPwh9v2vTaZhBw3vyfDD9hB23qRT",
  "key11": "38zmzM2NiMuVH8hzqGNtsyvw3EET1dVQsuoemRanUN5ATGQo1hFBcTafsKPUJXVQUkbKhCXARCEipMybFpLxkvRh",
  "key12": "127K9Fkkkz7narmuFkXgtGi7MNAJy1TtqK1XcGywGseaktxk2jrTjdWBZtuPS3Rtv5JRpzf5pdJ6Ax5D9nePRZHV",
  "key13": "63wRz9pQ7acHUGYwakuskFc7A67SJTfzdpcnHtiTXGwYkm3KziW8FM1hQxUnQPncYDHVY1hHmaCWopfvghD1MRYV",
  "key14": "4cNxMX83fMVjZz9S9Uh6T3KcbetDkGVZ8LW2n1TjqV2xUYop92d6Ym4x95W2pzpSVi7YqLViXMBWuWPPUCNExJ7L",
  "key15": "3WbwEyo1yaCH3BKnjeKAUz3geSDXdn2JtSUvebsCF2wJkdLPGBaUZWQuwdgX4jU2itupruwfV2titU92SGhpq47F",
  "key16": "5KJf4eT4SBL4vhDm7ETA39vnmxm2FCbSBSBx2aft9tCetnLDEBRTAKM9n9TKMRyauWoGTTCvpy17tz7t6RXir4bu",
  "key17": "4BpY3XrB8BVRqXrBRVdR1P5r2CnVtKaH68sGnn9zLie3pzzyJxSWDs27yPSuMrA1gv1y1wwCpofo92LkNxSAF22",
  "key18": "5cTg2AT9tyremvSmbSjXU54pfiTu7DMoPxgVSjsHkWiM43oFswA4EnohqtkNjGB9Ai9Xf3BV1MBRzetYkrnE1V5D",
  "key19": "2xSBe9kUTXDiBptiF4Jx7JNjYkFVGACiXFb8SjMjBw41qDXcG4PEm3koXsdJNeVyRdJb5WJDCZtS5EWHuh6HRZ3p",
  "key20": "26KvfSyobzNGu8CqjaQNGKiNdAFU4x1RA2JR49JPPH7tharmkWh4zXRfYcT3QxuNAgfeBC3KxtozjrLCyVWQwTer",
  "key21": "592w9LSRNDCiTuf3yu59h3QokmKMbCgbS5Vpysnj4Gcfo1cEhKwqtsZimpCsNR6aaYR4m3c6NHFnbvgWt7v9vKQi",
  "key22": "5YUCxah5Q5NfzXfRntSodrQwyZmsfYMHYugAi3xJubswR3PufnEeHu2uAQqdG6rVG99UUQxN3j9PTSTkQ8ejQRBS",
  "key23": "Y2pGENLApS4rDKXbn2TYF1k5qfKcJGXc2dbGDuYcgtHQgZhZ24yBHQQwaX5gXNkJKVMXeXab81EDe4PQiqorsDG",
  "key24": "2HYau7k6aT91HuEEmjGPiUd8JCBs4eBtmMQ1RTH8rKN6S4qQdbhtPo82q939xg41dMsY7Cobo4nJ1FuqipNyjwqu",
  "key25": "SvACNkmfacCyYMaAdEMF7TjEys5MmhZ6KzyKfkV3WJA24dvxPLpkw669rJUdqvuYQmoaqrjaK33zGeB8Rm4hQAN",
  "key26": "TyrT6FG82opiZA9c7rUSpKdaALowhNP4kKAtKfGgBSXTYH8SvaywLjZt1qDEi1ivNdPknwoN7i7WCp9uiAaPcZd",
  "key27": "2ZG3mzP8R55mheBE3SVEKooFPSyNa1c8xvhm3m1Yc3KWmGn74ud9qYRFhpCVdmwggXprJ1PcKU9HzjpahcbuZBwB",
  "key28": "4VKwU1yYKFCmFC91q4gFozh6RVFiJaJEErtXsysadGDS3tuxExCdivSDmmN234yRmSgRCWxV3QQahCKcLjptoq9r",
  "key29": "3UA88Wy8jfufCNz75S25147MUSTrJYZAbF8VyMCsoU85Rbnr4cQpKa2UHUGVnmBQZ8S86UxpKndSPGU9hHWjAdJ6",
  "key30": "2XssfjpPgi2ieANoRx1PT7MUvnmCDjwNVNv7GwXvMzZn3spZ1eDwbeRrBx4bBYz6eKzr2vSbjw1WDJ2tfUSfZ1Ye"
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
