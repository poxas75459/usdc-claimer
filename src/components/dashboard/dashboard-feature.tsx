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
    "446eHRtx46my2KBsdSef46yrGFx5xDPypeBGeqTmKwsuUwzcRSJE1ZxFk9zjdCjN8F7cE2E2d5h91kXVY9AaW2ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhkZ2yNkzSArHtHo3Yd63535S5vVnX9kTUDEM9wiMnYpy7tC4qXN9vT8hHjCJWaELGQhGwFCsQCFWTjhkYq8pxW",
  "key1": "g4nweCoWRwuYyqUhFzEVR24ZYbXWPczi6WzB56GGXseMKz26zN4v6KvWj1Aai7HiwvhNx7rLbppeTwB2mGJedGU",
  "key2": "48D5Z6YU7DSbB1YqcN99Ux5Hp9RBU9PXbddJCUhnXVLFP24LmfgLe4fSx23HUgCJXc6vEEuw5ADVXGXEX7KwUkDq",
  "key3": "2hcUtBoAmGbgHJv1LMVMkHwfdG5gLhiu9SR4pidH3zjxTTKuG9fkyWY4VqaxG4a9xVdVBsqZLU5UJQe2HWs433JZ",
  "key4": "52zEidkvnmLRrs54kP5V8ibL7fLQoZanzrfKhFFmhkNgfevs38rM7qzE4SuoukKdjENAbmZTbPyUwu4h6GcU8WG6",
  "key5": "4WCfFe4gp652qZZ1tSqJVpcHhgdXLV5RB6xC9HJkhwMiMfZqoSCPCvZqxotgk3HBNZuzG1wJzsVosTueadorxG6n",
  "key6": "5U2uRSwENazD2efB3NYAJnDZ1M3jsXApXzYSqmtjyrx2YCaEvBkzksYikyCNKBKwoRrFCBQmcy5fd8p1UxnR3HZz",
  "key7": "3M46m1LVtELq52uxxndUzwMSgr3e7pjmE493coxFAP5un9VStkdczwSXWpRYR7HFNiRZCLY5SmLrzQnBuEqDNG57",
  "key8": "5hcN8jfNpqhiZNwJZ8DYqC4mKSbpfZHETdrGzWHYVfPDpZyHFf83ZiC4g1vJZkDmijPvGJbGWHp78Kws5gUe214d",
  "key9": "44yzSqLfqf1TUd3F359oBU2kKSFWFU6pu6smhRLQDfGQKFFquxpiALp9M9RJkJa1BwtjWUFFFdLJNqXU1T6Xv6DJ",
  "key10": "3R6C8QsVeyCCc4PUUX1kcCz7vPty5toUa6zX9dVmVw3XaYsjxxdNGU6sN4wKyuXdMaKct38c5WyExoswNrXQCXpe",
  "key11": "4kKPJiBmKXezrKA4EcdP5uuFnrVdAuFQ5AkEaM7GueiuMaJsMnoND314E7fDrhwxCXuh57vMpvKRZB5dHSMAMeES",
  "key12": "4zTAhKJgTmRRTcb1r7xCNQg792FF3sHEqWZwtp28HJ2tKCxNX2EkdnTYY194RZPmirpixvtvfCUmrHCyTusn7swq",
  "key13": "4RwTsPSADx6MpjrdpdmBY1rjsb7W6m4hi8s8reLsywvw3fE6t4o9aDvfWQJncsTdLDwk7nQwe2CZUHsMZssjQKqZ",
  "key14": "3gYUrwPtUnNfJzan8u97bVQVx8xCG8moBYpKdrNAnsH7ckAQnXs3R57oSRe2ZtCkLPA68Euxh1GptvBwxpBVa9kG",
  "key15": "AX1WiJKuDbnt88ABrRYrmEsqcjAjD73hX5vPrykqNCqU5SrnTQaHEB9sDwEiqT5Sqq9yfTxuvKiQpKTCL1dezw9",
  "key16": "51TSZuvJaiiCdgN4KgPsVTVwDEDf1FMgKLffXYVKNNbtV1Xay635SwJLzcvKdmbfm1tjLQEqR6XLf7NcA7CVW3hG",
  "key17": "5Xvp8KfGYcjgderF3ocxMDMsmNDetS9sUqWtetdV2cQDTSgN5NnMaMtbZuCwnw8HNgLCAVzyi56EZyCFapoFBMSm",
  "key18": "21mV2yFRtSe3kvRVNSW2GNwzz7FRsRdvdLh9y1XVSzQQMKjEXgjmHJGULRZvjqu6BQdR4Gk1N2ZdqhGJHjPiwJig",
  "key19": "4TMuDkGb1LA3xBqFtaR6BhWFUoUanD7p4mTjNg8nhG1QbksJXftcWe2FVoLjq3fNKdUJ6aWRWm6qq3VNEyQAvcvG",
  "key20": "6SeUG2WPDJiXhPPFRFSCptoBvc5wDxrskr8Uncjewj4x6rWCxCqYshtMGsrNyEzhCWsDDUYjnR9YN4vbkneqZ6u",
  "key21": "Ax8cqjbXo1ZEeTHEjTWmE3D8VwifqAmS6goT6rCQBHM1YvjgzMKFypQLWayGBCFZBaGFcRNFCUc9KHLNd8oqa4o",
  "key22": "56WEMvQtX1z2vLJGrQhGaSyzuBv3Xa2ZnCShYFy8JgF37JzqsiL2WuwD7cJQ14ZkfXev5KJa35kPnpvqu9yKN1W",
  "key23": "3D9GDwE1o3XPwAKiM1GAkEdTTtDnhvZtNztJ53KvTrJGS1zQXgS5C6VPQgzByiHhyboxSbrM8RypNouKcPvZffpi",
  "key24": "4tzqDFXyawwcGMMLT5Ayc63hWabWkhTyUhxgnU8nTTevCqpfFzPM6QG5vRakz6gASgpJXVgnNHjkT7REVqpTmvj5",
  "key25": "2w6BNkymnjGM9CVuXew48GPBmYbiKZV7FVU15zjPDE2VVDa3WG353WfLuPBtdnpRTCvbN8mS9kfdZ2bE7szh1uqX",
  "key26": "58pLLGaqj7npY5JL5iABBTwBR6bpCTMYzokGJKAj2Bck9CU2dMHZcJGGakzDJQ27H5WmuZUrnggQ1sRUV9qtQCTP"
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
