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
    "5ZQoY7iE1UAXsQBANsMrQck6hfN1k9bRmH5Ec4ik1sWTxaW6uCauSzrGNEpRQgKyW1kzVS4Psr51r2ejRwQv1WZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1PkfrXgPvGp95jPXVt1Zi3267n1jZVGAbzkmqrxZtSbmqqSMULF8hpxXkGrjc4mf8Wf5Dsu6R869oFp6S8F7SA",
  "key1": "59upCJyKTuYhF3rG8SdotcCdLk56jYnEAjtYBMYfRBV2N34BEPqkKamchdQp2ay6ar544pSH2AHUTA1Lnk1dYgpm",
  "key2": "5BNmrkr5NXoF5erxz9wutxZWRRD5dcC1N7LQmWZyJkmgScDZ6XvsP9B2TjdPVaZ9vkjGe1AiqsQsxjSetBeioR4v",
  "key3": "64tT2aQe5Fza6PV4SSKiTdAvud4242yV32e3EsHxgwMjrxqkFQYWcSNBQzMuZLpEpkzVo5zFRTkR1STj5f9X4qWA",
  "key4": "FNuCsPDXis2gXyKgQhZFt8zf5CQqzu8utv4y7qLrwZ5LguVFeBnypvSnAcbHj1ar8va83sDjwiQNekPPPk4KzUo",
  "key5": "n8jxC1ew95CuS5uw6Bom3pgCRKqSCa8TwktF7Up2YFFNj6CTrnTFCJiMX6FSPDFni4goXy4aotRomG7xo5M56DN",
  "key6": "3NTNwS3sJe6cu4pzzpgX7DxVHAkkecugHxPvh7YT4rPTYUGNvzJhshhxriSTBpoWSFbjNr5Txv1ui3Wdf7ybjrhF",
  "key7": "4oX7jFRxEiXpmmCvwmAyMNPAj2EqVYBihRHb3kok8PKSXd1xR18bzzk5SmQHqMq3CSJ6pvyxFSfnH6s7Ct643pQT",
  "key8": "3H5BZDL1vDD26dggxKyUgwKRuUweb7T4bby9d1HtXjcH4rsGL5aaUJ9GNHBCKMeiUiUPQBBcWuwZy6Z9x3DoasBd",
  "key9": "4YimBEwdXP7WfhHGFAJ41fTjDEr7DzMHVaFGFg2ko4uff3MaGPoYqRCojY4bYeGCq6XpJtXuXrWy8HQLp4442FH9",
  "key10": "4LRzqRvqBHDK7L34YRrdrvYE8FSJKCaj9Qnk13P5gQP2iufiv3QpT1xLzgh3bfuCvTUuUo8pzSwZfaLkoB7ggCFg",
  "key11": "3c9Aj93EubanHpM6Wr3M7CPcFMYfbwud9SF7yVHqZsS1hoMK4h4zCnu5GVT19j8b6Gmm7Kbat5gpejjG2rP6E2wR",
  "key12": "3CXfkGu5RMUU51jXstnpCoqocr7xC9bndRJVn583CVxKWcGQuhhMnsjGQXDnw4DpZ2ttiLsG43p4UWRf1zfVm4ZC",
  "key13": "5yJh1oheCzyQuyCT4bHGHA7498bXPR9mu8C5DFPUHaaFrHjm3ZGC7kb9S4RRyacqFYRtSuY9d3RJYbTvsRzvonnT",
  "key14": "65AR3Eo8Td4NW97kVLaisiqHwPkwuCHCSeGDWY5TdDtDA92VBX8UV1FEAnPqMnqGJT1sZweSRZHCFHThPdzj215c",
  "key15": "2crUTUKMzQ4hbdzmmeY9JShPmnGKUWfXKJoFUAuz1L3KM8fnqe1f6ttmCwMbewneFN2cGrqHt5HmEZ4VRmm4KoWE",
  "key16": "ty6SQxywc8Dk2LU89CFtxyQ9ATeHcVmCh8oMCPJMEtvdfCjTauSzCx9YptgDCb7Wbhh9U3WcZZfRWyDmm9gwr2H",
  "key17": "4RTgFJJ481dDjq8nDksrmAvfvQZ8DZZswHnqd5dt4sKHkVv3kQiFfog4M9npAyqTM3yx7YNBX8ij549NoinPr79L",
  "key18": "2mZrS5KXnyacXUJ9zocCw3hKv1K26hSs2fur5HtU68FPkqp5CfDjkdHvrJ56f6kGrJKRTLdhZQjgha4UcJ4XdgjA",
  "key19": "34zdT8s9LWaDdjJjA47eZC1Wxh1DvXYmj81dRL7PTEdpLo2GZH7uk6PwcuRNnsiuh6sB3p8JcidhSJXKFMnh5WKB",
  "key20": "3v6cuposfVnvxGRzn37NKGzg714R4FZ36WexY4EJP3YusBTkAjyDbNQEc2qWLwqa4ydyAZeJk2hZYj8S5zNKjKkf",
  "key21": "2rFmAaXAALgs4wgD1fAWxEYvsUH7Y94KwiSPPMmvBBdtkt7k1PpYHaFNUtTSJkVAMyAeQ6uLe1dRbTK7C4kqpJuj",
  "key22": "BKXQ4BEpCbhwp6dxocqLmQBvA9fVmNNgVo123x453sJ9za9iLsXsXkaqtk3E3ZzDpyRVJfm38jmJ4U8P7PkNGsF",
  "key23": "5JCgqLWC7U9tRyqgPNR5r45uHCdmZVqoUhQdckp96mhu7cbp5iUeZKKCaMc3jivRcbGTvYSAwUoXPCVfLtJ9EKee",
  "key24": "5jHMWGiHMJ2WyoWMfcVEmgBoTFnbJ8UCoNonosQpi8nND3eZS9ihpjJ2obY7scixyQXiLevHAQ4rfmJwLybkRpyi",
  "key25": "3AGXG1Kz7txk7VG15g2J1z7VzpSeczRJy2DbZNyN1eUv38f5du5K1XuJknXBVdcQ6NAQDU3zx6U5eLtqCQgXrEPh",
  "key26": "FfaBd3NPEX7VLmQsxLxBD9JGauRSxSAawHkWrsMFKFiZVP54VUaKVN41Vmvu1RWRwdGV4E6ytEHapb3tJC9SbDu",
  "key27": "3wi14Tph6Xzpnq9Kq9snt4UAHTC6r8oKcoYg2hYLFvX74RrYD4VS9A5BF4R2S4GqN6CXzqARiMvtopUwBquPWVyu",
  "key28": "3bLaeyBpAKjpQM93NwuKZKvNZ5tPKAWxZdfTw9bvMC4Knh9ENcWAocADYPsEH7AFT49sBhmw7x6RVZc5VWmmiAzc",
  "key29": "4u77QBSc8Uq8tgn24K93skX31XozF1W17fh7KYjysVvEbaxwHqxTt3gaaSpWNQkC6ZxHjvd47wfoqwnr4JPq1eYK"
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
