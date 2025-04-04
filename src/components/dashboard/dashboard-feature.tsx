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
    "ntkv8TxjwBU8mdgWScyzhcLRMbRevCeiaE2iaqgsvcoD2YjgXiMYk6bQkuMzNE6rBpP5S54zfnJNzr4wEBQy1Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkrKpwfy4UhuA7innWoHALE5gaFMBGPMGj3zZmx4w8UkJp5JtJLQy2RtuhcvHRsefjYJLZ9gbcbPiwwdF3kLHzR",
  "key1": "5VQczREVuEZkrJKhsQR8YWcg8MHZA9m61mSfPCMSCL8DjeCidD3LXUpxCZTmuMfeGkoP9BLuGSudF1mVWLjwjz4Z",
  "key2": "3Mpm6VadcxcYqjhuEcA2dDxZ7zu93DoW1Wz4wmgs4nxzKmeXADnSvkJPe1vMxWhVMsM6AKqHVrKZBQDLWbxn5vhq",
  "key3": "3H9XdUqPUVgJNKu5kBEBwwh3rgMecN5WvSGpp65B46vEv2PhKR392QvzZwQpGLRAS8m4C5NRvYrgQrxCTzaqk2QN",
  "key4": "2n4FmgpVDPHqNjjcv2LGKmQZkqiqg3h7BsxBoCi9aBKfgndrQuvct7fBgBfAD7xkta1n3JTK9oKUkM1khZURGyU6",
  "key5": "3tAwunBZaX21yc2Rpasb3ZJ92otquzaAWvHWa5CkxtQ6RqpvDYMThz3qbKbrhhs8KYwouK3GcJCppN69StqZeuuH",
  "key6": "jrdiVxmtnkua3T71wzcVcHpAY3kQL6NLvTWWnb1qJMyKgavDxva9MCknVppLh1d377YRfvQ6u531AmoWWuHwKeg",
  "key7": "5ritFjeiiPkFWHzJGmtZdQuJ26it1TYJLUAUHqd2o5LYTabpPkVX5QJxBJZxMpWWJs9EuSicvDpoBR45L3ZvMndt",
  "key8": "5TyMwKxmrQqLUDr1pv7zzndMkZDMSLu3JCHQMpnfY3NGk2JATmZkprFvGSbzHQWA7qoFhmbZ3skeWzBeniJVAC1r",
  "key9": "4qcRWwMARmjqS2PEgksvh4U2q7RdyryY2p9y6g9rYez2n6fsyKk7HuUvf77sWZtTBiXGVkwpSWk828nEyzfPn3oW",
  "key10": "39Y7GPhJMRzpjouvnBQANasVHtT7MJkxtW6MuDuswUGu9hAFnvBmZ3iTsZmVo4i8YuUXFwqs1akuG6BzQUCEw2BY",
  "key11": "3TqRL3FVCpPBR6gSSz9G2JSNftYTvKgTojo2e5BVp7vqxqMqChdETydbm4KUBSJiZ33gFKJFyxJiSkEXTfqU9DcD",
  "key12": "618bkszsJWf3Mbc4wYvBagTVQybm2nCbLucvQ8kFdaxxHKgv1gM1ptTND9crzWRLXZXyWdp7WgQ8nmn14QmVBabM",
  "key13": "4NNJPKPyTwQxwSqSyFy9dRu7Y9HR9b48cuoj4mWr2SJJBygSrfJxm8RAqLvavpTj5ky6t8ocCXXzW5Buix1k5A47",
  "key14": "5PPKo1dwc3xpGJejMmuY7wAU42cC2igoe5HA13mt92eQ1mRf4aqyNoDmfrxW5y2UUGhTbrfEkTuFsRqmPCp9TWhP",
  "key15": "2W7PSF8P9Erm4zK6YjrAhftfATgx7tV78ia5bkLXcucz6s8vNNtT3YPcW5FgBiLXLFnKq85SFsgDM9HBKuStuWa4",
  "key16": "5AETT8NYndQT5A1RMuTmAdZjwdie4JK3jds2JXUxzQa4QPun2RTLDB8PLvfFfmv7UqqVhRnynr7p2xvZadNyDW3i",
  "key17": "66yFfJcS57nWk1wFxv41imqV1n6kHrjvJyyLsWaAZ1gon21cXBcXTZfEhs8DxCLTV1ACB9Qpx7i9hcrqJycTDRBd",
  "key18": "3ham3n3NyVfabtHs61J7J7MsSav7pjwJsNSjGWh6ovSP6VXBbuW6twb19CzUHURkuzC196iUH8Gu8t8Bxn8CuFwB",
  "key19": "CDSo5cYf9EEnHpvpq7nbFXEHHDrCNsp7MyKvxMDFV98EjAX9UHj4CdTEWW7QT75gS6hoesy6XMXWKDS8kjjCr4P",
  "key20": "dSDv55CFNxexFvX8DVtqkB4pGPd8grnrpuWeFKVBCxDk5LYpRdmXwGfHd51onfey3KTgk9R6YVhjRVMi4stE7zs",
  "key21": "5BiPcQtMWR3zvk3DWvvAHktpvMYfGQCVp2R1uJvYY25kqU6JvRAhMPC41DEHDAVy8xfcfgkU4LUEy1CxmLVAeX7g",
  "key22": "cUdu168HVctAnvazdDsSuPEj6ypGCqaFa2KjyrkpqyHgWmZr8Er2vvCmx1vcbHxH5spz49k5BQdmDJvZgmVG4BR",
  "key23": "2vvNE7eCo8AeoKN2oH6yirUBiRdoPYUYLzHGc5NWmopuUkXn8jENY7Ec5N5QbjLVfszPbmnfJefdrSiTFzV23KXv",
  "key24": "9EwLQhsMryJHx9L2mkKPjDZJx22LfcujM6qvfuhqYPCsjAAoBzbT2H1noUKKMNdBgmdFbw2QBT9AezYP8Ec6cpd",
  "key25": "3Hq9pjQNkSz8NRrpAwAGfhvwMpo2g4AWtenN18LHjz2E7RJ7e1wjCTQzkG5m1JJXojWoV3hJEkwnYPX39ujnxUYE"
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
