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
    "2Tny3X5iPVyt5sJCC7nQFhtfa2VFJfh7MViiSr4GYFSMsaFQDXmGV2MeRCkmhpoCgjmp1tvnYzhpebEMvu956up9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKZpx8NBwg9XT6LevMWmYuxmgofk6NmqpmY9yt1b7XAhYyGvz5W5EUSZVA2etKibfpLYwzHoLgKDjSUwS9i3w88",
  "key1": "59m47wU5uhTDpKaf3tNb46XZV3LG7L1R2rnRxuQFBtnaprRhHnaCZUZGwbFzk8VdZ76hk9QbA467v7WZP5Td3QzQ",
  "key2": "4KCh2K2wn2hqDjrks1TPqkfeT5UrzXALjWEikeJMUoe1sVVVafWFUveAuh9qaZKz7EXMdX8MfHEUNxNyh9ujqAEM",
  "key3": "4fsQa2KAx7mem4rb7gHUz9rCw2AxfiXqwtuVi85xcuWtoAj4qjWbNheq4rdFefC4C5CAKyhfohcNX1mHADCYDaYu",
  "key4": "43N5Nb6Jg4kvyocZsRD4Pn7GcETkFHabEXyHHWaVxXUudDy3dQwNgPET2hmoZ74YNauMTAhCnfvqXjbmTSra5htk",
  "key5": "3ATgbK4sZgx1H1KFoqbA6jcLhxJ7RhGET7MtRWoMtscXniPF89aAdiXYfJwW3UD9MHHghAboB5gtMnEiGQsQAxwr",
  "key6": "4a5gzVQv9CoQz9jT6jzWBxf3NFPgKq39pdqJvwAVQjdViVZ5hMDhPn9THej4U4vT4LpeAeqBXDScUknT2b3VVq3n",
  "key7": "4NU2Uh3XhMsAFeiTqz2LmQUxSoME6uuZMp9xX9dVthYqNYnqrQZ4bKsa8rsWuqAVRRzwcnPzj5f8mvNRY5qN3ttS",
  "key8": "4fRnEoxpZrs5H8QSd7b4wC9oPb8GV6cBmvkN9bP6atrbS7GJj7YRojwdM55b2sawjKp8Y3kKA7WJ9eWneYqGfwUt",
  "key9": "2byV7ac2qFnjiQpAj9xbfYYvVC9WVR5Lgq3SyrBxDTz2nAMhPDhtytRr76g3GanDjF6WGeyd9sr2Zc6GXiBdZX6e",
  "key10": "5fiEtf5csBXnekNQAptGzPH5oC2ZENLmomstj6761YHrreA9UVuaeYJNkJ4rm2QAoPJvCTTNDWzpR4sARLcVQL4f",
  "key11": "2ejwQ2n2t2s9taUg9cHE2UFckDUX3NGsZn2EFPuUqmyiya6JBV2Jo3Pn6Svn9y4bUxzzZZPxrou8faBDTXbd8EL3",
  "key12": "4W3unuiTpqR6EX28hzpC2T4opAqJ6sTSDQjc3PpfqDtstcjyVDzNGJpFaXmqCcXCZ4DSo16LGUo5VRtiFdWgQQ2X",
  "key13": "3fTk3uEsgvTP3df8p15bzuD5BaG3X8UAgG3VU75FXh9PP8AEjJsSawQESCpSxkEPUV9Q66Pv6kKrht5WGZ5K2Cg3",
  "key14": "3ZAsDbE5CaWkWsLBa72d9jT2whSMPhUYavX18snxpdPszghHxdv5dwMWCQYqdWH3btz9Ktvev6aSL6dbBJ414oB7",
  "key15": "4oJaCyBtiGA92YycGE6ht1YvQQRSfppyj79ACgmfoijiPnmNMencLPYJb3oJEtgh8wXkzBYZRkuFwKRNuYJzu2sn",
  "key16": "67H2kRwrrViJodMxL6bybGzTaZCMdtFdP8DofF2ke7dMN4KCWmLA1dsiRuxE5ptw5JNxyduQw59UM8nszCRzkGWA",
  "key17": "kGUH9uDwReYEqszWZE8mtHbsDnHzxjKYUsUhBAWkQsMRNByXq71qG8bKYBu5u2vsgAxy73Gd6EKiAD36cLawBka",
  "key18": "2ejnBVmPHjy7Tz7sW3hQcWDj8bJNuWsjyju1uQpf5y8ebfPCj3e3MmVbnXYgsx8sd5558wfrUVpRVaeUedCjRAAk",
  "key19": "444aWC1PBPNBpgXxLibUeA3VsRbdcG3qZfKKmEsPnF46chYCbYJ4pc2Txp9gwJGxcSxL59jWXMzFqg4bL9obhGyC",
  "key20": "8DwnLZTFykGkZq7SS8Pn3PDAnjL1ENzCJTLJxCCm1uyf1SrFxuVEZkqg1pkgoWV7HXnL51ukE1MxAqHEpnMF9d6",
  "key21": "cKZX7sC4oYeU3L2EL2gPBxr58Nk3TMtbWUUMEfDCxr5Q2kLyeuNmpbru2whYprRzhjMpybaexLWJfJnLQCqsZbf",
  "key22": "5cZBgyXjFG4j6BbNDdu28LUkBDRAL7DdZKEVv8Zijg2o93WN5Ge3yQpk4iSphJ2G8nL6vN6WKXrXhpTD7CqqpUg1",
  "key23": "4nsfSejiQESMdmW5eQiu5GaWnfEpfe7f7NCvJvfFp37zanvLz1kbJKXMfTgpPeBX3NmvYnKkewgAvh5dAFce1WfF",
  "key24": "3QAJ9V5pPUaZGAzfS7rxfiqwT8n9uzbwSgmFS5fSzSXgUXM7Co57Yz1YeotFBRhVLhwDctt7jUQcdwPFVwox36aC",
  "key25": "2JjAfmtnewwQaxpFtZxrUgL1KQjZPUZ8fj6hwS7Tdme3R7ZrrfbQGTBo4NYcjZuKdRZd7ECGXXffS8v46LsJ4tFb",
  "key26": "2zFJ9ggdsU6XQWvgbAaswen8ENKPcQYr6Y1rsjjt1VM6vgALSeMCLHGNC3ChSFLtLmoe2s4GWmrRmVh9aPMfbkuY"
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
