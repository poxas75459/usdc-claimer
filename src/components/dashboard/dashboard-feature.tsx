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
    "GB6nTmvEtVMTjo4G8kXxCofLdM7CfA88CG17JRpwyexipe5FoqV2wUaPSJRdSauAtFjMMAASPLiV6dUfY6mRgjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeYqZQqyLfoKJ6qL7xNwY7vfWwPN1LsG65JxbEqfomUgEL38aSfqXu24YqNnQVBu94unkadiw8tdfXwEC41Qskm",
  "key1": "6PYTXMgrsYq9Rrfnf87nxtukCRUtCJqDboqdXojNhZr21cAoceb3QKhHeEvJd5gAYmSZjrD1kz8ZiL56H5Lngzk",
  "key2": "2xkCe7SZCFaBfbEMhK9rF192oyg9kHtr67aoZBFiqvPgCAN1RdsfAmREwurEERgaqEAKgCshD1f1mYkWgV2YD7JR",
  "key3": "5TKKDZq3fkruKF2f7n9HVJNimDj2aNWDAXJ6qndgZEgPtw5h9RE7BfTejYwkW882dTeTMaKK1mNCe6BS7DrAs2zU",
  "key4": "2WWqDr1fVwWjjqEftBGRJR6k8D6zRLGWefXcFQadMZMkFMaANmLXatBvkKHGBSEm18VESW1yMeYuJyJR7N5d8k9Y",
  "key5": "32TH1iUrZrCe2FSrkewM1XmokR6aRoitdiRsH5Ht2USJt9EWKxd178Br45G8sskpgvYsAhsDiRgt5JyjTAahJ6ks",
  "key6": "5mon91jxUWCehLM8UbCs1VT3y7YvxKzR9BXwHEiaZBroD57HmuUBvxcDPSg7Tzix6E4yXuJhyCN4epkK9svpwJk1",
  "key7": "4c6H8fYJVzYwt2j3qyWR5vvJSNLRkjjoRZi1kD8DLc3n5s6CTX7GAe6LcPaMtdbaeGu4J8rYt1kWkmoKxu6Hh4ga",
  "key8": "4q1ZYQJHktSm3jtiSeFg7Xrfjh7KtCnsVWejZAQerfPj3JzSx5RjZU4Ztn3DueXbmcMBoWmSbEfpA3Mf2znywzwC",
  "key9": "29uHMrNhzUZ7ZUKtpQjucvhTae3tUwUgwxNNAovqVQyLDhgWCpbu7fybhV8DhjrnfYuBqVKEKF3e5ahD7vkeNwkr",
  "key10": "3w99M8RxGKKkuWuuxcG3chymHoxSJxCdmX19PyU7v6WiAsCkJBZhN78477nX7c49xmjjWDWkNBNXZe62qbhr4jps",
  "key11": "4xSbrHM1ieJg61LhNszp9t5G5VDo8pFRwxKtFKL2PPXsL76z2apSSbeu5rWqnGyz4Tf7GfaZLFAFTRpzUjsnkUtg",
  "key12": "5NHPUj4sLNeKLa7pjDRw9LzccYKveh1XsygvwmLUAoAuAuaQwBZDgAsHHy3xgHpD2UsephQPZWGmQVf1GkabzatR",
  "key13": "3ti52LXpTAtzvihkXYtSYgDkyvZ4Tpc1yN6z2wTTyXbr9RHuV3P4zDpztexuHVGQNZ39qwAihztzSed4wUJHRLzQ",
  "key14": "24bjbiNJXiiYifAMctENo3DD42GNd8B48YNjtxspcerDg4wofRCwXhmxmY6Joc7RTYiANq1whfAXGJK5ZS9qd2Bn",
  "key15": "5rkNMhNRBMTeR8T6A6UU127QsUi6RRVcEnN1Cg9QG4NadkAyBgSDyearBbgayMkXc7dioxodKoGzFEaZR2Jnpunc",
  "key16": "pFkmcsCkZ3xRasuZGVf9EG6RKtQ8GGRQc9JRwC2JgJcQbNYwbMz6kCurfcQ2fVQDVDKYHxCviPhJCX3RxUKG5Js",
  "key17": "4ShHAJGmbemSi8vGqCcwjk1A2wjNxfhd1r3FLNN51JU3VfVJS3mPLcFicKJwyZZWf7wm5nRhwpqyrRLutx3Sedvf",
  "key18": "65rTQ76zjAog2QmY1xxrCiKinGSnpNgRhfhu6G8hAdbphiJGpYJmhA18z9hWUuCnQujWn8TvkvU2kGLD4kw11pp5",
  "key19": "4GssLnx8oHqRWxRRs4ArRtjBdaPoenviXHLesBoH2b1tLPT528yCcrQw9e3V6kMNapu3qxta1wknsWm4C2qHnpCc",
  "key20": "4AiU6PytwE2LEdWLBAnKScsoRapS8DVoDCU3k5D1daPTF8sFrWhfFSjWxPtHk6tTCayNovKMCAExZ1csW9Tbh4tT",
  "key21": "46WPS55nugXbMr6QSfLeZRQGGT6qH1SMZVQEVBeHWqWK9vzR5wW3ZtT2qJXNgjR9SpeS9WyRxYaD3p6XhuNnKsKP",
  "key22": "5VST5rbH9iuP3aZDph2asfefVYKhVhKxfCAA7HdA5BWSG612T6bxNgKqUo641LDwZJ2ocLEz3X5oqZVvv9kFqPf2",
  "key23": "3Gn4jRhaSvc4XEfoxwHVRGjEuEs59sX3pHuzZo27zSftRANKMwbE4M6cgyZe5WqCx7xN6t6a8dV929NQG2Z7W8gx",
  "key24": "4b3oGVqu61jJYU9FpKFw7ZqcoXQ1HksMLQ1TLzBWRvW4VrQihnnXq7j4QaFFT29ugsemWKEDQKaLGZnXmo2iAgDP",
  "key25": "2iQ7VUWciRM7Sb8QrMHrw3vYRvYNgVKVM6vo4n2VfBHyswCY3QvMR8v1X4tEzJqfr3unABvWE5hM3EWx2eq4s4pP",
  "key26": "4SGKZ7WZckCMYwc4P4xRFtEotfjPj62hWRTJ6cizXukd67k5dtjufRYXvcZZFj1uN5GRd7MWM2J7mGKbvCTmPdv8",
  "key27": "3W7kRUvdBCph4mWC4dT4k7WcwcKEb4wVxF9RoGgRick71fZncnivTFXzsWynYmaFXExYe89poqRfVBMcTrooWJca",
  "key28": "3wCDLfn4wijraU8TsQ4YuEXkbYxyWdREz21vUKFgB4eBNyHJxZ42As5bECmZkJNEL2Drex2GFYaAYo8UJBKsXfxC",
  "key29": "5D5WGeWJ3Y4ubrxJt7KW4WQmkRXbNF5Y1E5kGmhMeLxm2PU6xYHPCBABnKS1kDcbgXE2FtyBvWwWj3bqD8Ysh7Xs"
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
