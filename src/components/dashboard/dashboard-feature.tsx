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
    "4dsQUEaYubYCPp4GDJZgrcbCKFLrn6ZzfJ1eJAirtmkqU1Qk1ZPmBWEpoZB5ZL48AXVetqjbV1DS4i297sGRWtvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ja3QvkZuSptJKe9WNFtTDPi92X7RZAPHfxZcXfjVpSYkkmtkAXdbZGPSiWAXmhCTnkuPxf9c4LCSvi8j2GDcYNS",
  "key1": "2XjbN7R5VysRY4MCxJfCi6yoRqgQVnKM3AzJtmTRrdUxULTqLMxVVdk4xddqZT82xbETvmmjt2u5C23N7rJdGsUQ",
  "key2": "r8UfLZE6oNCYNP2CoGbbPiHBrUhaYD8h4AHV9X7LZeZANTJuApcTN8aFEqiz85UrHk5A6pqutvV7G4vo4XmcCM2",
  "key3": "2vVLqzcbUgoBvJGxJFT7dLLKkYxxjHAVEc6vwhsA9pPyiLNUPt6tnLWL8tnAd89USC6LpjqVMBCbfKBdWtTqGRiR",
  "key4": "5zHShzur6VZNsTAy6WrAv1BP9E1yPqpFMQ9JkSWX6jVxGVsPyyN8Yx8peTAzGajtRWmacQPQMn6e8j2QvejVBLn6",
  "key5": "sytd6XekUgxtGYceBAzJVTVU6BukMGURoYGVZazHjH9uwWiDiLSqNNx5gMgjgXcrE47imp3vEphPGCUnUTFNXMf",
  "key6": "4eWERvKtgWWeMsDzziFXMpqpzy8vPg65TDGz9TcRRFfJ3iEEZSPit3M8Hj6NY9hdXzPgsDFCtcztwbddpWF4iRCJ",
  "key7": "63eQcjbv7cQAKBgCXro4TSBPyYxr4nCn94msHBYThuWcPWrbDD51qG8SiHxKNFF4GprqrUD8eRiRiikxRC1ggchh",
  "key8": "3wXkY1gyhZR22nwr2x8dwNeBQCo5JDdbXy5A19nSDahz9SPbX6iH44TameFDn9BHA2NpcCKJuuyNfxxk5ktbw883",
  "key9": "2ZnaBCCkLvagj1gcan9XgKr7VZv8rUMewj9z6STPUCNUSR5GAbnzd9cqbwZwEHzvpDPESumdzQjyxirvENKhj6K9",
  "key10": "3KmoKm2xuR6NLR6NwTntmz5SwiBjUzdSpj8eEPn8s7e8yR3mSMkEdfer1zXXhFqJKxrZ3aWrP9LdARygsGavJiR2",
  "key11": "NPTTWYWXCvefYycakf5SpsJz3dLEwJPa9FPNZ8DMqFUE7eekPQggPsDzm825jf4TfG7b3qZhE6ikS3bHiDJHgFh",
  "key12": "5HUruFt1n2WCeC7gN1a6nPyyoHswwSZf6CRPaiAoiPqgGRwjvbFYpeXog7hjc9NCT7tgy1rR1b5stV2D8Xve9vbM",
  "key13": "4NcNaMGxTUYtDvdPdy6qh3aL5YgDTU2xAzCDSn6xZz4JDyRbpkK35PhTKTg2aWef9tuvR45EHDc1PVxUG3WPLmTo",
  "key14": "4quVyhz9cgdTLNLahpQtb7qKpVW91xsLa4RQi74r3nd7ZHZ6dtUZBys1fefJ5WZtj5z49S5hSNckqPbwgEbRzLjK",
  "key15": "3kPKDfcrGg2iGPuUDeuKeCZhkRe8z9sRcRb5Zo4hS6nBLLeVRz55yAUGQfgMYNDcK8tK79AtuUy463ELP1LwRrMq",
  "key16": "5LA4MMunmYAHkrABNwgqMiYQeSWjgA8dkRmYocn98AEy2RSbYwMisw1exKcRxA2hhimeJhmZ3MY7CrZaToG9kPGe",
  "key17": "4yvSuMHT8dmBnxxqPyLUo4d2bWFxPbZ38bAQngGXh2WdovefkhJ8JKJvhEfhcR2oruzG9HRbRrw6jfqwTBXGzW7s",
  "key18": "KXDxTTGQMuPBCNhASx9Q2hBBcH8gjQhFsZUJKRAUCyTARHXDAoZLNFJCJhTGcoRUADTEQRYPiuh7fPA9KCVq3qe",
  "key19": "32fFRf8Pm3SM89gUap4wYps1mCdzcrMoLaEuheCEH5D2StddVFyzokJdqXGZuCX5ENRBavPQ5oNg88KXLmbN9hM1",
  "key20": "3PkH2nGz2NHLLxc58z9t1CqdYzSo23qXnyQ3KpEhfooavC765uWNi3WCa8w9qn1dZ8CsDThvnb9zV7YgKQBuucpG",
  "key21": "4kc4RzX1XSm78B8zZuywXHMh7hHRRxZYDZV6X1EhFs8ShCrXALMoR8BhLqqXHatgAug82CT9peY9xt1Ygm9nTfu6",
  "key22": "356sy8JvytbVJyJ6m63iQp7mayj2Zza4SG3u5rzFXfH3sp9qBTxB8p3B8bNgjDPkK8EcX3ZmFZ6BwHJKUrdZib2B",
  "key23": "2JEe7f8vi37F473nS6Sm1g62nDNtiQ1Voka7dD2JdV6jNSVxtHC2aSVjVUy767xKcrPhLE9XUHLGXsCZfzwK9nrK",
  "key24": "3e4p29kq2YPfRa9ngRHGzUAnUES1jJTED5c1DWNkJKrDb8HqxWQRdZDGsuov4X8YsmZPjEiXVj6iLPkfpq1wEXGU",
  "key25": "nuqS8wmkXgyCcZfhEUANVecXdJx3j3T6UyFiEYBjjSsV3KugkNboKqKSRai5zRdNxGtdcQBNuzU1WKFmMCJkwFw"
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
