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
    "47WVseaDWxP48Ft9CrS5oyoYox1qK2ZJ4cQwKVjdLBQBVh9rZUyn6xGuCkVY4osfnrXzpUqzA1cLTpK325Abk6sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3fSXGQxs4BUJAzk9zEkaWsjMEhkD4TrUoQKX723fhd16Q4yY6Lag5cBZKN7KvV2MEKtuz2MWpSPe4QXSkTmSyF",
  "key1": "4CfXtsmAvpMLKtY5rwPyz4DssLBJk52wZFV5jXh2yvsi7YzpdTY9rri3UiJBovvePe35wyqySrLLDYKjqf6xhFJF",
  "key2": "5W5yBjephuyxLjwmZK8U13ZBgfGaj8xn35Va6iu7sBXHaghKTNtbdjeJhnHeho16Yf4ep5sgju4pjmsAfGyKGRt8",
  "key3": "uNYjybYKDh6TZuNygqPPqjaj3kMAAFUbxuweaxPi66uLP1SwnL7h6E5QTMNw2oWQjQQtP4zqrGqQbB6reaFfgEG",
  "key4": "2bbd2EEQVKar5haKr6bZj4Qaqqsjjgv9p6fMorWTcnxiG6mPjKLXjy9BZHKbiKHAjBLf8waCMZTiA8zipDtRAePt",
  "key5": "2gqydUcGkvTwnLbZPaeVgjFj3W48JKjMK3DW8yCGphtK7Gvz7sempjBYTUFD92iTSz45EWqptKe4KGU94Vxw3sBM",
  "key6": "3vek6fC4FZhJidsCyyVcLXiQwts7ttxopj5L37i6kweLavTtrnh5Ms5riEdXMbiCvmR9h7M9M2jHtvhLe7FNiaNU",
  "key7": "2icbebNRWDFFQvj1tx5Mhbch7oVN7Tvqwe1Y636haTuSyqx3AKN5s7TsdUDURpoYX8n9aPwTtEYFD5i3xppZx6c7",
  "key8": "3dKo1BVxUxA2VYg1TJcpd6n26z3BZ9yAfqSd7B2R6Q17ZMXAeFrdZraKYTpbJb7QCT9bJKcZ31bP1SN93ftDQQcf",
  "key9": "31A2gF8quUrN3nhxA723dmi7hFc9Sncd4rxjcw2ZCrrykict6hZWDLmRkjSHUsFEgxbSRwJGLAqhw6AZBVoMJdgh",
  "key10": "NQgRnEHeUEySgAigSfkj3UcLi4zATCow4gyyGQAR159JfimfmpGq6WKFvLQfe5bT4X3BSLLfsUga8xSqZHwGRsV",
  "key11": "3HQYqqK1avFB8rWZnqNCNsiePSgrcM7dimEdfibUshY6hKHBCPeds61yTqGF3YNZ6kG8DkP5Wy12JBWnT9xtLYBo",
  "key12": "4d99KP5kjuxTJyE2HVkmZhYaQoqeWa3k7FULgAUM2dBi68AMRPm6EscNmULVr9PqayDDAWEeaNfMNGQVPQWudKjK",
  "key13": "2HNzbYLZubJGUhTVXtQhjcB8ZjRmfTzmnQ82LDjBtJ97CNDBqFU1f3dYfWb4VS5eU3s7LTDNDohQiL6XSooKaDch",
  "key14": "2RejqEGXDSsSWvR6C1gJHeNZKGBdty7rSpfeJL51mFkJ7yqLMLd7Lnfgubj81Sw2uk7GJ2tYqdXRTvvHPFyaSEXU",
  "key15": "oT2wHNw8yRLRk9ENjet9HNKo3f67QApQjnpszmdGoopVdJd4upU9pV1FunYeCg41gGKT8bsXrxNp2iKSHEQhSUi",
  "key16": "2hC2zxZSdHQRV2f2ivCymBNtwwunKCTTtq6bKYHQh9xfwG8sYnq1SzvwpaGhStHypT8gWStd6gEixkBpg2U8CboW",
  "key17": "4oR6P6gsKjSF6fy4kCnhWeFVcLYnYKSHLQnywT2dD2Vfw2AEG9ynFdeAPUG1JkUwbRmGiqWQ8Mf6GMde7bEuWiHJ",
  "key18": "2SSEgXkxkpQ8tcnoFEFq9sw9gXPWPXhgzF4iA7v7aH7FCY2FmQgedR4GGSKsytNH8na1fT7bp6cLi1FedLB4c1td",
  "key19": "4maosV1udV46qQpCVmgwEDR3Y8cihygfscjHWjnhFQWt6cHwMzG9xiLuG5YvjcpmVnDA9YPWMgwsNZY2cZsX1izX",
  "key20": "36hfbyrmkAyLqf5xYnjyZxYcPi3GjeTjvK6GTaeMwHxPRchNQVvedeG4Mn8ySjWk4CeaZZ8nEQ7Br4Vz5RQQPRkv",
  "key21": "4zuu7XEFBK9Vdt161dPgFNL2BuGayqxkgoStzrLUKtGAbphgaC2idYZKrPp4ujiuUv76sHTW7t71ck8BSkxTLJ7e",
  "key22": "3eyDEFPuRxuzQAHCCMwtVGrAYCbRjXEYodggAcj7ojHKrLuGoGYFUnYU8nsaX1aDkPFX92z8FEdm15wL7bTKt2u1",
  "key23": "1jhG5JrebY8pcWuWVKWBHV52scyVwb78bEpnJnSLXj6qbiDuf5EJfRDBN4YbaXvVu65rQgBnQVKnNEUYDNTGnct",
  "key24": "Zkkd4XXYYw3XWnTG5XLksfGq8G8E2gh76BYYFzLo3KzKppzcx3tJcSzLnscirBZnJQ29dZGwQF5Q4NhE2ApqB9f",
  "key25": "4bYeNbEko7A34nnHdiDpbkUogVuWWGRSL3i4Hot2z3apeqRGzaPvakSg4BhZ16KGrRe3c6PVt9JbijryHw435WUJ",
  "key26": "58THDfDVvKYgy3GXguaVKgprLBnAKuyTDf2idFYvS5PZWFohDekugTFD76GtRYTyKESJndUfLTUhFa9JkEsS2gHR",
  "key27": "2hqt5ky8XApcewckfCD8L2HpSrs7iDeQzPb2Zkn19841fnCSFX4jsAs2tkx8ePPdsNk67Cq326huCjMUYNErLQfP",
  "key28": "35ta4L95GCVe8AbZ57LpLB8FXdDVjy7vyLPzEprAeVrEjqt8WcAgKfoF9TdX7hQiAyJY5eGRBXAh6L3Fcz6Arevu",
  "key29": "242zVkNRwpC3ZFAC5t1MFHpndNuZpvYNSdiF7n4JGiheMR3yavqyaNVgttUTCtCLRjL9sHyHaQn7jjj14Y1mg1ks",
  "key30": "4fYTNXHbv8dnFCJeWyScvgJ1hjytCY6jg4Fqi8j5fsQmauHtynMpN4ZTa9unFnpySHoQKzD1mzPY6fvXWwi7o68q",
  "key31": "4zENKuMYeS76JYkdiByLrGV75rqZ6XmcUgCKd43Vr2AFSqVUs6gknjAih6JF2gSJZnYXmeUWPDYqZuxyjiqLRKdM",
  "key32": "3uU39PLVLcMfykwcgVvbZZyS6SdkCffy3VFmr3jprMTtxa34Xyunt5B1nWiMVwMwujAjM6s8JqSNZNwZrzcJKH6X",
  "key33": "WYF5tW7iRZuSkUeEiJPje6mqhhegdBU3j5yCBZgNRq56fY6xaEYZNQPB9Nd4dRQVDocXMJDYhN4D97S92Ht28dz",
  "key34": "3WW2Jzyh4ud6j9Y5Zy7t3VUqJuAcHrTFW134RV8iVVnWMVZi1c4vPp7gkgFh8He1Y9cXbcA3gACo3pedB7R4eJUa",
  "key35": "2WHado4SPxNPp5BVbtciN9YY42H349wZNSBJDG6JL9TY5oHXvhdW7XUGNR59FERhgC1GAJmdmUCoi3iCT5ZuHb7b",
  "key36": "3w5cqrgBhget4uTdGqd3YHRZEhRPY7vJPVZ6qCx2H9U35wLTY8d95quSRbb6a2qgp3behFRJ9udL1VkQp5Ut7G8H",
  "key37": "4JGJSATmjkmiMGHM2wrUDZ4S8F5EaZPzHYGB7X1h54rD8r8mLe7VBqjy9YvcVkvn51vpUesAEQ767BDXeukK5EJE",
  "key38": "3LtmLEfSCUjuK2d5h1PpXP4mRdwZZ8VHJDs3CgFgSm3jj53p3UVBS6iVKaD8H2JKvNxFFzfxteX9SD41NhdeUSU9"
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
