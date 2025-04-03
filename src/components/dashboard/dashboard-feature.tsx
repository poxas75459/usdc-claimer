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
    "4Ft16ygwSTsikV65QMusAu4Gh8idknsqewZ8pSp6yo1aKPeyuCbdVAMo5xX9TeU4UnKGKDxuV1fwSavu1FMmMRSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beqQwRsZS83CMUB33cmgATPaDsmNYgwWQjemjyuPojguwMhnDfsEG262Vs6uPfLdjUH2hJdzTqDx4LG1omPPvng",
  "key1": "2a6w3tRxd68bsGZ51MNK4d72KC99iDqJCvgB5pJG3mXivYosXTDMQUkoFxW9Gp5uEnG42qykaZeFxfs5K49dCtnf",
  "key2": "5H4jEi1cJ6cVdWPommAiNbRym5noyW7ATzY9q1LFjQe6qbYd71z6FPkTmg5yVBTkwKdqmym6yeYnKxhCw9CzqPBh",
  "key3": "56Q4HjqzMC3VdqmYjkQrSBwv6mfAs6vJUwXoxS75r3TgXf8R1V7wzqCtBtghg7rmgGNQw9EbywyXMWGhk7oAYLS1",
  "key4": "5QBNQofynko14DUGqSc1FwM1M2VjyM2H8bq14hFGaNfCeDUpngUsazc9zJaKwrb4KYzSEUWWxx45zLq97XaWNMWf",
  "key5": "25MdXpmbuwEBVQhHNPYiD2e45F1qaJiBxp6zWncG6L8joCQPR87JRkN7cZqHYkSX4qzKhCt7GxEKvaDZ9F29rV9S",
  "key6": "2gBf4TykHJSUfzEnkYzUDSZDJsdsV6vyKLi9ZtTLci1sJQZHQ4GG3FqSdu31yL1FCmvKkHE8hi5eKeU2DKDK7BbX",
  "key7": "2oyN2bTU3cCP3fFV8FFuGYkNGxYZrEmCHqUs8i6TevFSHv5yxfBokfEBrbG52TxD8LR7FCSjEH7YceX3VmPjuSTt",
  "key8": "5NHxmAtKzFW6DgXf4GubuMw5VHzMzCeKHbsyZVu2HK8343tRZCpT38u7zt83NS4UHzZGVUU9w9ZNSVKX4sAV98XV",
  "key9": "2mcGmAWywu7KCyGrg7tu9pVoMN17uieZATbYQzk5T5uJDCTLHExmDNpKtZo5bJkuKT8R7gPGxwRpRXCwdCkMhMVn",
  "key10": "3rnyhqK9wd5wVT7Dv5wV56dYgoikVZZ4DtQaP1ZbQ7MJq3skSqZVa61XpqMdqmDTYrb5AwxJpwbjXDHXUmAknTRT",
  "key11": "2e8HBBsPD9TVxM1DuCQNovgVKELWaAgJfrfqw3DAtaqKrvGMbegQWkXERcqLmVTRDhSVfL8G98AvndxFizSTttgd",
  "key12": "3L2fptpAsRBnjDti6K2AH8aRrWAe4tnFkQAcTjGLn2ZHhZkmhMxKixZN8Lr2tV189jEz6qceAPGxfFXT7igkxGm1",
  "key13": "3NtWcxKuDMyQUsKpnHA5oSqXonC8LZqCcXsMR6N7tzXrnAdVZKZ6tCSeutmCkZNoXKQxv5dkP2ha6nuBnc9rH6kL",
  "key14": "43DjmbHNKywGm3uk3aAqApsEd1xa86WFBWGMWVfnMB6gP7Z2zZpLo7ekcam2KAdqhdwYCxaUdWHW318hnGKA5GjN",
  "key15": "5TCkJu1Ed1KHFAmK754yieMN7cU7vmK1MJg2TNed1QZaVETT9c5881uLw9JSUELRk4rUPwExab7mDCjcXZFPfP8v",
  "key16": "4bDdkYkUESPjDCqtwqU1N7FpEfiwCPGFD7EGDeaGghGTvLKqNAwPBRzSy8YoFedxMpFibJC7MK7FPrNo46rQsEi6",
  "key17": "5U73ToejAu5vHpsZmHJwD4EDgtiT5i9d2owL8gFKPVpEa5WFEmZ4GWJB2UkuLGPxTPZZy8DmmBWwC3ef6D5n9VS1",
  "key18": "5wY2XqRw1FKpKsCPr5YctU813R4xTdZ7hKSCAoKxKQrwnWhZw8n9Sdsr9yNMFGxFec4LsEyQzZeZUxGHCsmfBGBv",
  "key19": "5VLawKy7aU8NwHp2dKaPWPNjAttFreJyMPPvVrn6CkS6rT2mZGAaoZo3aLXNSwuzRkmtWEHHP7htApyvPVTm5XRt",
  "key20": "35VWeDCHSjEon1qF2eAARG828DK6Vw6bNSf4J87uZNBB7azuwm76H15hyKX3bEJ7bp4Ev3S8QUQWbBATwKLrJK8b",
  "key21": "23Hdw9DrtcQBWCP3Ry5oEq92BZbN4aEu9TuzuzocYAtsUCD1iKKkXyr7P2asWiyJyn5Zgpa9SzQd1w2yMkJ55pHq",
  "key22": "riLxTVT9yyiaG1BA7guMMoKgr6t6xcEqX1nwwGxHZBLr29crFUkJJ43boosWrQ46ZCrYF8cEBk8qAdFs6VNRnQ3",
  "key23": "3qfxmx1vu85uhierQZ6nM13nycsFswh2j2ZnqHaAmVVp1kqTDrHYtiJhmNAcU8VdmWqcM5FBWpN13fTByaqZi9c3",
  "key24": "2MirW7Ru4c4X56cgvDKPEeYDUerPtWkvp6vEidw1xsWvajYKFByJA9rSxXaPCnoPwGgmMwnWZhjTKSHab7qwnJ24",
  "key25": "2ceT6cV9UUcmD5h92CoUdaVHJ13HTC4VPHVayZhFtM5MVi3uHTA5fn4Bh37ZyAU8c4wNKtKWb5UxHL3MhsuEMfsW",
  "key26": "2sjXTPpLpLKtn6Le2S9SwyWXWwZHFTGrsPmh1F7nSkrxPpfpNEk9znk6FBsZ6viTLrR1JGAgjTF5qxPAhvLeyEnw",
  "key27": "2QZds3QMpMRDcBMXaoFtHoru7iAuAt5MbuPEtW7PyrFkPbMvCiJ6U4EoR2PL8NbE4qyrmtFN5HBGkVhXFfkE1jUK",
  "key28": "5r8mUwQYFofCRkTyWfw7XfoFCtvdSNx2gq7AES69i6Lrfr3C724GMdD4zuezetmQA8gP3CphEjUrDLPweECj6LkP",
  "key29": "3zRVoSmyJebXxeEH23YooiJhCWRakeMcuTxFCFF9vNV92ayMcHw8ro5yV5z2YpJHAgxSz8Me1ihufTKgH9hwSBVh",
  "key30": "4TkfbS9jbpvbpcQZVpWhyVSAhEZwzwUna6n6vx2u4zMuw46JkUBRNqLLFCK8qX7syDyeJKsFx5o43Mahtrf7ayfq",
  "key31": "3Cym49HYbLhPSV4EBdxJs8xsEVPjF7zCQTLzmxdNSyg5auhYcX3KVPWPsrKwwmCGNmcqD8he6rk6bRnbwzd9pKhB",
  "key32": "5anmiVaSh1sigtmRFi64P1scyf5Fqs15EbZJcWQrHHmNNZhJRbLwX32RuiXzUZSsq3u4vewyRDbktNQAKEE9tWLR",
  "key33": "3kzf2pSnDcSPJLMm2UtAdEYUU4B4jZWgEmmUo3FBqCg2nS9kwz4oFp4jENUQuea6U44FV67Ad2ZrmYHnSQkGBaiv",
  "key34": "2QqyR6oYLcH2W2uqy4zrgNxFqK1NVU3eRsJEAquaWKYkWEgTUDErYbrDcgdntUtQ6mWTwo7fuHx3cTPKoXsH3UqG",
  "key35": "48Pd2omRDRRtPL8HzJmFvAXhortnh5o6gCmiavkrTuYSg1d1yhkrVy2Nj4CkRgRwJor7BfE3eebL8n1vQ3MHYovw",
  "key36": "2iQaaxXz6sutPEMh1NEhHeoEPm5QUrYW8xWHrag4tSA7sDSqozTYAaoshsQ2DEtSCEKGhbURr96vQgq34MxfhFk",
  "key37": "55CQDbFeKMzBU2h28QgML6Qffu1p4f26GVMY9qAQdWpLeAU7LmhPdyqxUeaRJbZ47PqxXSvvzPrhTNdnmCZiFScA",
  "key38": "4BoWqURZ4k2JojRw2fZpRswcMyJPhDNdRYiwiqcKS4XwcVabXNSqPu5J14QXBLfnhu9Jtr9h19k6GXVXkeshp6Qc",
  "key39": "2mAgdTWzs9VqySe8UimEbAAmsscUvWXh4YjcoxLyqaQLxrwcXwqxKyZybixeyn58MsVYGDsgZTfPqz5CazspRKoi"
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
