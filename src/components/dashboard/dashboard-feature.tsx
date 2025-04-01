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
    "3iVREVc2vvELZrjon2ZJGynhnt5xLusftofG4KSbpq4i8qRjbdZy5apeLHKaRTM4jXEFEmH5BRb9eneHQnmbN5yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3npmQPikhukcDfXcZLyEmoBVBiwVurWAYNVFvxobFDpvUKZEAvHF3DNNtkmfXpAjW5e6crW97xMGZU2fdvburgF5",
  "key1": "y7XER4eUttrUExXT7viDWb2SGPDoo7ksJH1iM5BCwTTGvZCUhWDVZgDPrNQXDJ1xgTouPXwfBVNrxy5BJdJJW9J",
  "key2": "3XzfhchFHRdxLQAFjVjCZ77bgwDzzo5PZZ2tAbftG7T5ca1r73pHfyqVuJLjNDiBQkro15vTvKEYaBEJg1ajXwu9",
  "key3": "2atvKuzVic2vgCJ7vtrkcxHJEVmqKWWYvZphmhsxQQPJ5WvHmY3Jjvs69NBkAPWYTEhdJ1EZcdRB64ha7SfaTVv7",
  "key4": "3hTL6H4yNCyXPcoFi6wJANVXiPdiFKcjnSYtSWV6sZZuey2949dBxmpUBXbb5Kf2fCe1zFvNPtbQsZk87VGoh3WP",
  "key5": "3fYe7FaCaYoPriB7Lbxsfn5KNphA5V1gWSvP36eYiWHm98XwksXodXET5NkMPi9cQm6VGzU3x8Dx6RBbEnd9KFxc",
  "key6": "539PuDV3SHxacPpS4E6Y1M5DcTRxDuyW37yxUerrrTasTiwX6Apm4J86S8rHFwkdfT9f5TFi3FDzqaABMNwffe6F",
  "key7": "5ExrchrMHxQwk7Nw3Fb3G6t2wgkEVwnbPZXJLPGPNy7PVZE9PQghEAzktNZcnkMT6MFiY82E4BhgNgsnrzpNUW9G",
  "key8": "2BzFfQqPfBmjjgKzVuZA2eUtp73y33GVNdUD3dWtAR3gVc7QLBxXV5jpgHjzwF4fxZ36ktTRS7kVzdHbovJKJBRJ",
  "key9": "39mzFtgEDK9CLvqvoeXzJ3yyZHA6fmtfwBugqojJW6mjkp1Q7Z52kgu2tKCTMa6qwvpVFCMbrShNyZ9JRD46xH6o",
  "key10": "3DWHF1QnwjQHYeTchZb1s84VmVEvJEL6vBcqdwkcx8NGbfAEszSLdc2NmBb2Q6HvmwXdKHdWJkzqAacuZTr9k9ua",
  "key11": "36MJWcJPZb1Et8aNWoZgfKyUwe7wMUzTrg13KF8gqkrNuZ3xGTKmXCwZuVmcTpKTWg4apLb8Tm5QKoH4MgvqaBuK",
  "key12": "3U8z47XgThFqjL9GQH2k4UTAbBXrRBD1vivzyVarhBJQWskHkdFT7FLgjbJDPEgyovNNe6X5ck92Ui4r27nZuyCv",
  "key13": "676VCNRnHQg6XgA3aQumdjBqp5UAsuHWQUPdqFKQ49GLcXtvSnPsebvWLa174MwCrr6MZP8GgRYjVe4ZtUoZNvqC",
  "key14": "3mqXEZizkqbMEN5NqApwBPMggEgBuQTy3y8Cx2mMwiiBk9bxiPvmKLea7KfX7aZQDjnSo9n6s6PcDUiQi2opJsvA",
  "key15": "4mett3DF42t2SbPB5NvVqt9pyaSYezzGNe4iuNxEpDpaMWSYfn56A6SDkV5JuwH6TjA7VwQb9Ni9KwvW7r8L3obw",
  "key16": "3me3xLENZJW6EqyUxnwyi5Ax9gvLjsX6TWvsBGHj2CJbnkuLRUNyT2VKD2XsbvF9NrZDbaw5ahX4WMWxd61GvhsA",
  "key17": "ZMxZCCEBzvWMd5E3qURCCQ8LdnujBm7ar3EpW9fqrRyXwRiGgLMshKzuW36jauNcwLRHowbyXEjPVaXbRUCVCzv",
  "key18": "zonyJWXGGVizALThQHQok2Qx6SuKTpMBY4WkNYPzrFrzD91FeL69r4QSDqYsDKZhjf2s6E5wprwrZEBACVWLsMU",
  "key19": "5ftEqW4GaSGvScZsvef8HqtGtnN9vzk1XD9U7HySziyparA1JBSf9B45izimoxnNT28GsMJZY7nSy8CEpRAh3XjG",
  "key20": "UomFbcznL3raYsfrBgkzriof3uaGnNjwqf3CvBg4NBRNo8SSuH7NJn5ZkvQnKMBJkZpNia2t6vTY1dU6ksG9ASe",
  "key21": "7BrtNSjxSgmqPFed78mHVZsPQgrcPUsSkxHrbD3f6VuTsXsgcCjRCcPagbYyDrfyi9wjVE63dG3o3hnAi721cwV",
  "key22": "kkaLqR1YbPSAP39zJywMcMahLZp17HxUtS6WtHF6UFTPUbR8mmGvZiXe6aQpg9V3RZpvKCM5bb63vXrBQgZgpMh",
  "key23": "1f46Z4s2YDeZcq3Swp5QGXQkf764PNYwEFDrpVWoF2rwi4qT1YRHr572TJvswCMhVnW6AuAzAwot2JXQs4jjqqv",
  "key24": "4PgNp33tNvU5nbNVZa7kX9mpVQ4AD13GTPJ6PfxY4k4QKRaAko2Dd7MbEDspocuE5YPgGjx6jyyrQGHkmiCHg8Vc",
  "key25": "2mVyfxgjgh1syujyCRqRXYtBu51fERyHgkXb6H3ACbTwqw11QghWLvou4mJsP1s9HjjqUbdQKWY3pqgvzkxPvMZM",
  "key26": "2TdbfCBHvQLS6UrgdoURWP8NLYJheicKycEvmKD3H28w626Ljpqgm5wztnGoiipMrZy3Hwsi2zgaNcTLkyVzF46j",
  "key27": "37ntokwfW2tioDAfsLdqnLkZgJ85P2a1LREpeXmay3gECUeSQH22qM6goN9JRWjLfMziUfF6fbSDEkbvcxYfXgek",
  "key28": "3ofjaKEgMD8VNLxAXNnFzSENnRC39Ffq8wJBUwygYQD2tRqZB7m7s5sKK6827HHVv3eaoNpoezTwjRvaJs1EFE1h",
  "key29": "3UAzAUV1DNJzhAjBn7DDfbWyVHrYf9wfDR7rqG3WUnDWYefKM5Wn218EAST71z9tn6vrg2PcxyNQ9bne366Tjupd",
  "key30": "5nYPeen1K1MEbiSg4xzAZyLpQmNa1wZvP9B8TnjNAiGtDqDJjWBJ8YQtxqoVRvoroiY68hSZo4rjjZDDwLNjBkE4"
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
