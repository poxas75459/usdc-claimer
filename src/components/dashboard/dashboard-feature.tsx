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
    "5ZciDCSoN7aBfF6RW3zicVCmr43osuLYMngXuKbRYQJvuav9WixfDBXpxLNaJCQTdJsSYdZQ9xjnvj5fcwbcAMbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QmSgUiZtPn62BTvFb2s4TiszmBjE257JeZzbj63oKb1iZdEB13NVY3x9qNmyczdCVnp4iiwaz6RJAkGMyzTXGAC",
  "key1": "3RbsE6G3wXFDdV4EMejBnqMbCYcMTTYSMCoCWRMCuirrF3AJVDoVPi218hL21awEc3j8Jhrmkj73dDoSahaZM8Gk",
  "key2": "5SJfunNnyShgeHA4B72BYNDPNYhodwML5drjEUsnazfLi2nfBBq5ymGcS2deyepG9bcGeQDYdytrYrNN4CS9rsD3",
  "key3": "4GYUfXue6gUeJhVLCBQ1QbFbMEUJ5NaU1c295afRLraXZKKmgc8MXrEtS4muv578CbeGPA4gB2bfXns3thrAbynn",
  "key4": "2kQWUpShr6BPWSpDtau4iCiNouUzN2kXwHMXChW1AsrcxL9c5CPNNRCN5hKg1ciWjm6bpea831BUyLAkjm9kj2Gw",
  "key5": "61gz3wzZwP9bTWFFuddqn3Cw3tcsUL9PQA8Pt8f18AT1SJ6PCY8MDF8PvtqwRWmwZi8pUEoDMcdLsCz7NFdu2rK",
  "key6": "23J9QHKBsQ6zDJNgfGU4DWQaPov9Nbitqf1j1y8Poi6LjNAj8FdpFFjKVXg1Dq7autYwBsSvAFTuKF8Ct8QxKc8q",
  "key7": "4mF5ZTSfcQ9EPoaKtJgisRBR4BmsgyaBQz5RoCYJiaZiMqzT6H36q7usfaJSyXtL82bd3UMN3XdLwWCQjRTPoz1w",
  "key8": "2N7aErryScVLZvEWLrBbXyL4sGp3bGVwazoUP2xPkDnLPTj3bwxQbs9RpypRqw1y8ipEmd4NyzNoCA5QnYUkowE6",
  "key9": "4VscCAwzNcW5sgpFDfdEGK5pJw6d1s3RYeGNMXDFExJJsZLoDiqSTjMA9PQPvgDvP2oUEaX2C4h7YMVf45j3DPwH",
  "key10": "2j6pyL6jKCFn1Tb1gQ37EfFbTSaubQivPhrFYp9njsgKXx9gobwqfULy7okgGD6mLCsdbMw4a2hunGEfqp5gBSnh",
  "key11": "5c9AqmbWy2WkrVZHkkwv3q77py7imi9WbZq9wtzrjmSGExHd7ZTzMf88YhYmHxZWHooCNFY3kBXGeXkvoq1o2Fbn",
  "key12": "2pzRpc5qFqhsatqLhStA7W1eVoQTPTZBa8eXEr3ssk2kCwr2q4EhNHETa4H8UAjSLjCDc49mwmBKSy99nFqLx9Ap",
  "key13": "3BxbMpnBPi8khRGihq5HVtL68zghfttGVdoftop1AtSuDGKkGwdjxBKo2k2egPc9JdXNoa3XKViDpg1mEkbPwGWK",
  "key14": "7vc9YX48DYXfMCMTKsYedGqqhEztqbPDwy5DoJGVCzy57q83ZXkYqxzE1MFdrZrKCeLxBDexTK9SfSvCjdeQK7T",
  "key15": "33KQmnN7yoSKkTFn3qRdXgtXTXPABLzBLiQqN5hujgnqCneC7355dng2iTzRQzQLM1w3CHP1JgSwW2vJRbbfxpP8",
  "key16": "2MPy4fBXctPW1gJtn4652tm2h6M33SSRWNMynP3d6QnXmmhyRMp9czXNSBL6zqJ9Yv5b43GUoqrfxiVCVxuzKqtB",
  "key17": "3Lo5gevUb6psLLPPw66ZZWfXzxxiMGErUJbvg7jMPc7TkuwF8CpmkS4F2Pw6SZ3grx6PLJTBkdqbLDhjxChVhqsZ",
  "key18": "3QcA8NmXf6NVxX2vuJZ2RZnwXATmezJnKXytHydcZH23RqQGJfTQaiSLKc7jznsib8kHBY3zEvMyE9pUzdhykT2C",
  "key19": "3sN2pXLSCYhbNnVAdjmMUzwa8R8z3DPm8BqBZ7KVjS3qWrZXS1LdW9haBFcvw1h6shQXHsSjjLB62P1zn59LJf7a",
  "key20": "4HmYc1WVvqcFeFpJ3viHuSumVAP4mHS92TftK8Yphgvvb9QJBFajWDsTqyiTFTnpAzwhN2A3CtwcMMBZF3nstHkH",
  "key21": "5DYQi4Sep6nJDHo876xfGZ2cTBcEq7EHozQjPxRH4DD1cFmAsZFRGk7gUz66cXxKa9iTvYmy9hVwa3icu3fnrr6H",
  "key22": "2pH7vR5XKjFVy7Xo5FJKhfvDUeReTbHZHErkiJ246738rkntB2YcEYusnEht6DiC6HqvvyD5jSPpHRLFCZ8S4SwF",
  "key23": "4GpbMrCsAdr2rzAsnLTEgxwhZwVgTFWTp1trb2EA2A3kWcU65Gm2bkDN4qfr5TtSMQdXi1XogsjGz645nCKUaaE6",
  "key24": "5s7DTGAp3D3Kmhz1DFNMRmVutxffPHTfnupYVG3xyB45ntjp9Ukg3EbrAXaj51Um7nB2J9dBfTUYyQ22QCNaL2Z5",
  "key25": "emf1jvaK78n5hq8ECYpUMR74R4RySR6z7GLwq1Dx5HHRHfmbAFdu5ZJ3CmPTemfFGNw9CZV55PeHsbgYAgnrQxF",
  "key26": "2XukXaFtfQutyDcg54XCgAYEGtxptJwszzmV3QvSxRDWiieuC3sG9RAkWY7BTuckWtmCsNcN8c1rGjW73NvT9y8q"
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
