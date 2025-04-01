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
    "2YuNvpA7qwPCkpMvJ7jWYa4N2sJfxeRVFAms8gzoW1BhQ7mRGARDeRM4TdmSShDCeUJeJF8MAp8w5zQdVNEESfZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tm7uGzmSL6eUwJfc5KnCEjPoeCE5aVmXubSsu6kyb2Te3JG5tBW9sqYFKsVEwksmv4oh4Li8xqa6MXCJ23THNFm",
  "key1": "Ttvc1uTgt9K3k2nJQZYZWXRaiTT7b1A9HFSZkyg44fbTKHvCzkmGh2vGehfKUNS8KfkxAKXQtbav1Tk7VzjHrqY",
  "key2": "2wfNdZpJPGoYUBEcjEykejuXnmeKJXzrb9LbR9zPxmxFo8AcrMcpjUmLC6nwSJhto2yUxnhnGv3oAtBTiVW3ZaSh",
  "key3": "31X9gnkn5vZcXF5WurmgERu8YfyoEtG4YeVMRfyo4qzYCShHptHuFpC4VHypgjZqdUgGbGN2YjkKQYNqng7W2uPR",
  "key4": "2hzae2fu5rVAs5PJeS65ieVprifnsT2utXDtNSHDyCGbHH1GvzTdqyaxnyLf58oBNKog73Znqhfk9Jv3n4RhFMeM",
  "key5": "4TjyP4P4adD6QqoADdwaEk3Ea7w3Z5E2Szj46rGqLob1iqKZR6jC5tDTFff3WKCB3xdHqpQ9zd3JPtZtRifQEtEG",
  "key6": "5CsqKEHARq4HVwqyFxDWnXm6hUQ4MWHKvJL77VKjAGXihdmnNhBuuFeMkDYg7yugBvMvgwXmwUsRN219wXCeeo86",
  "key7": "64uR8gzQo9zqzN3SZZGE1aoVsYJ2atfbEz8ngWnqPx3sttVPtv2Pkym3TQgvewBxAGCQYLWNV9qfMe1fCT4nSBi7",
  "key8": "49CQgUAxoJ3KDz1prZarJi9i1sJ8j35YuoX6Sedm8Ea7DwssFnDvCBv1CjuwS5dYD18dxiFxJkc7giCeVxL5TSyY",
  "key9": "tHe8zdViqruGkA1c2YZ7RrFtumgCfqqWafwxXTcufzYZznr14exV7sV7GmrT5C6AGbWubU1sXUDSP5eb6mKHigJ",
  "key10": "5ZXX2nCFEU2Ewiai7fxAyrRmMtHxuehmU1pzDW32ea6B4ggKX9bSksqJeRVmyAXK5VaGri6dQVPQ3GQXC2Fb4rDC",
  "key11": "5ya1gDotT8n5sin5vzKsZCEa6wDGqPVJkFBVVvFMVwRK8nc1g8ULP9JmXRXATVPR7xq7qt75snRRdQ7R9ABtcynM",
  "key12": "4XFfcnanvB6bm8u9hotDzKkhCTGTMkih4uLcN12qWc1Yg6Ng5SxQPacHbyXtUhwffBDUG6m4s9zaNnMpqY3yQ58u",
  "key13": "zqdqTfdytvKdcHSY5oPGWiHjWWD2FDxJSznU5dEe4m24MnmrFAAGGt2LjaJK6xSVkaoBhTHGuHdj7xr4pyPjMWJ",
  "key14": "2hrHqhDxH79WBpxqQW8Gyw2qzpigQEeDgQBV1TNRJ7y7MaJKBeaYpGpHo8eDuTSHSYNu4ajnaZBPk7yT7SBvZ69k",
  "key15": "4qr3gLXouZS2XZfxEJWMzkwrjLzHA6pZVkwpot2XRT3VTAb4GESpK9MaqmPgGFz6wWsp9KkwvtzRfoEpdoC1APAj",
  "key16": "GesvGhKpsSmmFvLPvXt2Mb7U8XvYpcv2c64GfTCyXSyaLhsmLycXNX5No6qATQom7vGc4d4inPVfP34kdSMKHbh",
  "key17": "3aizCdA1TDDbWzaMcFk694WNtJ3NtSFBJPQR1vbcBzXwd8AX5sUqcgRLg9AQ6QntshtB4m1HBmNCiHRvMk1Qe4e7",
  "key18": "2XifTTsSsi1YZNuPHpn69sN5N4337oWx4whuZvUPuVGCro8E7PQPf6nEHgmtyXevcWpVzeDdDad96Z4n5m7FmW2Z",
  "key19": "2raogA8HfmF4WxqpvJTKTikebyzUfquvfmA1nHoRQsMUZ7mdSZXxENehceTatEQG5y3DoKodv6xqEzPuX2dZxwn8",
  "key20": "3EkqbEHZtuRQiHjCsaHQHkNj8kciKB8Sr32Ljwm6hiNA8PkjXfmoUQ19JyNZn5SFsP9s8hB1WCDUF9eHnU3eRDUD",
  "key21": "oLZFsTNf6rMZznvgJx2qtSQCr5mtRt98GUpS4fF1PzHNYME53515ucxejn1szuF8sFh4YKVzSVEaxr4A9nPUxYd",
  "key22": "5B1DXATGTFzdhWaJ97bZoirrt26o3NAAeGwv3kETp2kqna5Zmezboqk6V2MjXYdhtuAGNPceaXLZYzko129wBjdp",
  "key23": "5nkSFMiB8x2NeTDsfAcLcscZznaD4YmFGop5PFh48QCzHsWMXrWCm3Tgbxj5f7jRgN1qzvpcB1UJ19Q85cuhgJQm",
  "key24": "4XSwJUGPp84mtctxJep329s1BFL5hwcyx99Cf3yd74m9YnhP4bbygbaRdVbzcy98Dh4nWdk25gSbP7VaAxwTfq12",
  "key25": "LHEQUKiA7m2HXbrwyNiqKnZQBuScciQCMUQTuitmbsv8yqGHR2zMYDZovry1EVGATkdovTe42YT37ZEyJaPEc14",
  "key26": "3MbLgnr2ccmEb39how4z9vorRjdn4H1MuwerdWPcqVJGJetJWvnzKznp7UDp6G1qRaHSySyXjijBXAf9xtnsCHJ7"
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
