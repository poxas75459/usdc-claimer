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
    "34bJxqfZD6ivUGDUK8d6hrcWRcvDVwT8Um9SZmJDHTL9KQdtmjZYyADHKaTHSGk2ieVZ59DX3kJ23a2UupUbGkas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNvxMaTRvNbkYNnkk2TZNDnthw9YQmnFxJ1RWRbQVpB87hZZ2i4K48Wv7Jh8sL3A8YdR7otnR8dV2paZQntfKu6",
  "key1": "3x4GstnXjJJVxLTivtHZAj4CnUPB73b1HvPVyjy9e9B7wW71NPdYJYk4fjq3PeehLNtG5Da9h7vUB4PdT4RkhPVr",
  "key2": "2jNWArRBHm2rEjD8KA5n4P1uRSj7GfqCp94yQvta9MoifRniiAGZtp2dqAVSARrSyi3xnsQ6SRY3hHiaD9UQSEDd",
  "key3": "5r4iKx4TWJFFVwzcyjwAvQaXu3NsN3LqZv8vPgs8mKgGYeD9haeXnBbjMg9nBq1KGHQDLVb6JPop5xBhfytsrRuE",
  "key4": "3mSgwYxrJhaFqq81ZezGxYA44bNvzgukn6vzcoz5yWEDxfFicTTkVoqhRYTbMhzxfh5tycQnBmoudMM8r8rEuNrV",
  "key5": "34AfCFtAaRiQQw1GjanqvJUQeH9srNSvcQAA1mvcEtofZp5hsBpbhGD59CzCmocjNf2ZdVqVUXGRVdxrPEYMmswJ",
  "key6": "4npW4e8yoz6xUWF9wyBdTxrMuxa1MA4t5QvvEudts3a7yfiJDW1PoMtr8zngkXNSAVRk7brPV2wfRoBxYofWc9nY",
  "key7": "YUYX5LFBq83AM8LEn1KwMdoqXqwP4EGvoFwF2DquSQfbbdWYyUFvdsSWJAWMMWdr4stdT7uRJbtnUn3mcrbkSEB",
  "key8": "2YqBqbZ4bwsHzMxz5GzSsg6SAqmt4XvjxBdSeqTjUQbfeSJTZ2KDKsS183AN8ymnATm3H2xCErbTed8xyzHCcqQt",
  "key9": "3CohodhxAfU8MfWkYqzw2wTy5FcC64emwnksrNAkWM3h7XEXnaXTQEDbpx7Bh2dsNAXwCUYSiazQuPEoGPQapGzq",
  "key10": "4MTKVUeJoQjWwRr1n9EAjxxodE1d34rcSXTMLmD9dAT648TfosYUdeVu6aE6mvvReWS9HUD4euUKwf5J7DB2eQwN",
  "key11": "4F1Em863mDCGiR25uX9rLcCkUpx5MiNpEbuHy3HWBSYztr3qV5ks14ve5XfRjDMyh4GquV2nmXq4vnKmQNkG2vVZ",
  "key12": "35UvnKAKTuefXRvqHjMqqBseUrHMdaigZPUJh3NrHe5Bv5JFQyb2zxfYNZedrWk3VdZncJoWbzGjQwixZ1y4wT9d",
  "key13": "UpcickeRZhJ81eonjBYBtvLp18SSLsBfQcMdtQFsXAgfceQs2ANdzVe6L1dSiaRAnwxDcvADkYxKgNNqz4DGE4L",
  "key14": "5p8hxV6uPEBJRK8SgB8LAp2vBX3M4ESe5CV3uZnDJ7tBvQWfcAr9E7qvTXv8gQ9suiY35GHcsTgnNf1LB7TAa3cx",
  "key15": "VmpMFur3wfP7TCQbHY6g3D1pU5CM3NST751t4JndthNYkGiWcdRGi5SYEV1VEBcL9BsZM3id2zcxJ9w3cTESjHH",
  "key16": "4Dx9bsoF26Bm1kZ8Nt4p5HVYRuLGKR24MQv6RdE7nHUez14mwvhAp5y5tbMMPo5QX5GthdVqLLUAXh3RtpDGdg9R",
  "key17": "T2nRUP4GXqSoaYsDswwCianW4zwpThxm5eDhSfiujwTw9EFY6GRBA38BUnMaa18XEdhBaU3TjrHrZELzT5M7Bbp",
  "key18": "4jMJENNVwSrST8R5u3kcoWJafQk6Axke6CXJzTzmpY1KyDMWMNk4umknRLt2mrSx8a5Ktc4PeqdurEZvUAwgDVFj",
  "key19": "2AmD6BXb9QieSYZg5ZYR9ZEdkk5u6QvYY4f8oVBamah5VHgDUwHL95EaLWx4ieRfKA7R4NubqUysAsvJX9deyPw3",
  "key20": "5osNNWtQvmSYfFaTicAEMmraHpeMgzX2zAvrXYjiEzdfAUh4nBMxyhAzoTKBpfKE5NGma1fcAGqjHasCmtdDmkTb",
  "key21": "3yNP7nPe9h7xm4MYniH5E5qB22cf76MJxWrDVMbrDBy8tn45ykCwx6gYh47gAQ855rajaKqoqgs2zXzR5cys8sUq",
  "key22": "59th4mwnhKzvHSPESTFuWT87c5FsqWs8wCiA8Q1fPKLhRbRPDk4ApjutYhXRp8SziNdCLqMCbXmuc6EBgrmBRLgZ",
  "key23": "38BSLQNTWHMUTzCYP8EzBK2h8zK6uVEHgisDY536vVFBeKpGVuEaagyVTMtJuDqhK28fJCZHQhMjiMoFAqhatjSD",
  "key24": "21PpktU2MZ3zizPD9QtzjvVuNT53jwgsEcynfiacM8toqMG5cNdo3UrfHRiRW91kdYx8YWxYCfXFKjWCHkBEYCmK",
  "key25": "5az7AQEcCJEsS1Y4argxMEugt5odeavghKYM9aCdymtvux6KN2sKP7oeUJVxvTwjLYA3v6FTBuXfBjMnqDf4aUej"
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
