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
    "61k3dV4ScEqRqeB76nPUEYot3B3HAJadFL8M7ivZMUidHtKHCPwiXXHUhyYncnSSBAdifr1wv3CLnst3o2FT4e2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgjSr9jXGtR6Bfd3qArfAG5Rbjr3a95Ao2LyT7PxssYLW5bx2Pv6DaKfNMYon2M7drPr1gMVYqRRNynJscLK3wY",
  "key1": "4nkLxCiaEnCrUj1GxjSVResm9c8QCxy1UQWT5Bz2XD4E6U1fFKcs3wssBZ3vvDuriEMDpMa8qUiLDqjVAfbdcGsF",
  "key2": "3vFv3EoNuLgjJutViDB5jpACwd5J6x37aDhiby8kuPCUjoLZfWiMtWDW7H1qesuPBweFsuUqjnMkHQkic9Ba3yKZ",
  "key3": "2RMr9dE2PN6mVFRrAnYtGr4tkmVuwiJkgmsAhHArnaB43Lw4TDwQnEjCw7uhiC8gPpGbf3Vyrk3no49dr8pyfrrB",
  "key4": "5reFdLo7VGAXszdin2X2piHDP8hWoEpECSgXfPNc7kBRQ5Yq7NJGecN7cXxfybaYLCCdNmiQvRaCu8wpDHxR5qo7",
  "key5": "3uv8dX1uNqLHpSNYnys94D6pwnUbBA6HfcBwnBe7WgYMJZjVzrBSZLypYsCKMAGAU3mXgLwj4G7o3BDCaHwstNpa",
  "key6": "55dgMnjDoDhFE8VUEhd6LP1yToNEoHNR1C8dESpCuZhTNQ57Qrzn4YpJ6hqN2nZRMb3AKyRzPcQo1ksSirWPALEp",
  "key7": "3CDyEob48G3tXtSgudQuvHNCqP39yqx8BQ5gSpJSGv1wsJs9dMMpa4qhBbtjrdpthdgNt2oHa7JVm2yscbnjhXbs",
  "key8": "2auXgietCsVB4QUTuUxCBghQAgcHDi2jizGtjbeMB7mRyiDyppqAsYQR3bdm1ZsSeaXWSvSZZQff79E4oBz3xGKS",
  "key9": "5Y9nCokvB1YF8DxUf6wGox1svm8L4oEJvDCzHFWdrDUwDueD5sAKm7zggFszArXtiBygYAEa1ZaTM2GpQoV15YqL",
  "key10": "3sdk14SwLHPqBi73EDMwCYBpwchBJTAnyuQZdusH4JEYwT5WCtBWKvFr42pWfZP5r8R4Zj8LMfCNtQfb7tWqCd76",
  "key11": "5Hf4kbGL6BoYyiZQuCALpPbzasCT7sKsn8hYgdasGCho99Z58fm4ULZFryqvrWJMi8XnHrP7hiAYiwYBvEkrpgii",
  "key12": "2ALUgCBFAMMeSKsD7AoJLjk7q97N7d4tGvn119dTunWXmDALmuZVk2FjunRmUjtUCkShVFotZM6P1bYh3W5qKXGX",
  "key13": "2uDJATwHTocKBdLuAW7DGNBAGbRjJK6xdv1p3ZcPr6fCXG7Zat5WHqAejMvbvXDMB76JYcvz3j4WtpdR3YxcWKzN",
  "key14": "ZrqoBLrhJ2mzMUpzYK2QD36BrA2278eGwde1J7PHpG8pQDPpRLjPuYYyzhmVL4mPdiXr8Cfpy6Gg5zjt6UFYqo2",
  "key15": "4Vrb6CGeUmEFHGW7bCyaPaBujSfhiVqWceHy8uA9dwyp4jgSEztCf2c6MR5gcEj21nP8Esso5dLo8YEyEku6Cy4P",
  "key16": "4WWr2wuVzsbuBRxfWm5bK3tBNENa6HbV7yMhkLKTo5UfECEyKVctonrFX8Jbavq2bnGyY1o1Pa22zsUwQ49X9ewf",
  "key17": "gadMFCuy2GJ5EWFqeKCRfxrzLQ2wysE2cTd7L8ZqWiHo6j5jJ5oLiyygJZPMSaHaUN3rDqYqEWmKV3CtvwvJqdz",
  "key18": "ZVCd1K1f3W5sWrHMVPfeBwg7GCWVuk5EriVbrqA8CCTodJ8jtGv59mfymjWfmZphmFAexEChK9DTPdDSdGfYbSd",
  "key19": "aHSvbjyLy4uNjoN9RHoed8P3mbWLmQna3NKYLNNxwdTZbBW82gVAesNjs6jeFkYfBuEAMU5U3Vb4xPtkhDiUsYZ",
  "key20": "46XEGmFojguSjgETu6W88roxbA2YH3DkexQWrkheiXhs4KXdhMyyuqWJ2BrEyLGmoRPcYGMrAGY9oF2ekmda8YrE",
  "key21": "2ricepEVtpiEYkFbD3RfsCiKfhGzmBMGnfL9V9z1UGe2SfLxur2hNWYb1qkr18unDUpcfrrdgxJdXXrbqbWtzdhg",
  "key22": "22fqhVGgJfkJ9obKv4WgDHC3EA1eGaAXAwX6GfdPCJhk4BYnMu7qyNHAR3SxKqyMYzeCDQNj2vERHKAjYpZ2iWqB",
  "key23": "2ZhoRUHZRpgBszrWB4QLptmFvjrGNW3G7wajcxrjadbC3mcscJLKG7kZkvMJSHcPCo4pQpw8jYheBE2TpBbn29NR",
  "key24": "4tWnYCGKwAZEbU8iDBjUBWrXZ17bBAVjGfr8KgTq3jvmfYN2Qi3UsHr2Xia2gKbAynCEtcdgN79p7wgqZSXzUDKR"
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
