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
    "4vxV7XiWqSev7tKbg5HFmNEUbYstSURdDYewFAQrssfTa2hXM9pfcMsHfL29ZQCaPxhYJ9dm6CdPXMdBHe1Y7iNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "524vn7RVZwzmWUe3dS5XgsZJgikbNqdoQTeUJRnzofWiyNNYs8W6QCSbe5DXcsD2xJSjcTVx65geqJYjAniTrMcy",
  "key1": "2gY3aQkAsNwWd128vFNz5kxuDj46xCkkL9WE4o6fTP1KkboEaCrJRZNkVAv4bU4iekmsxjDcN4VTMHgvmkZfvVW7",
  "key2": "2gzSDvjcnC32ytPFLDHX3XcwQWWJnSdw4318L51FxxGEZhmd3GTkJaGAuYrwPpjMrnM2Qo3muzDAovNxzg6ud4zG",
  "key3": "3JNwoLEVcCSJsykAmiJHpp9VxxJynAPqXTGHV79mfaRBC6c7XqHM2hDoBQTb2MaVYY6hCpbiUesMVa1bh8MWop98",
  "key4": "3pSMt8jenQA46k1wpHbpmwwQXB3xLDacixwBkMxkyhmGfAhJMbGayaWVtPC9ed41VEaLvbGb6z3eD1mQX2uPixMf",
  "key5": "4YkZUCNBF2vvhX5KYYkEkSHyQZVKWM1sP3z41qKhLGmhsdZkZ95kvDVmdtupPGxci8sP4zC8mUCrPSb1bcsnkW4D",
  "key6": "oxX5J2bymNdbaKPhY9kctP9BVzvFFC5rHFfkXM8YusejjVs4KsD1ZgBWTuoXuKd1oWTndXkQyxgMvys22Co8Rjn",
  "key7": "2ohA5nc1VcR1HYYWgH3ZHZkRgDwFo7oV3eiN2XonNkgVH2NDJkfBw3pRPMNDdCqoep5NPzDo56UcnDCRcSuCYAHx",
  "key8": "UDMF2zMM4XCHBdCdbTAcv3v56p5mznn7Fg5mV2JPyFMqgYyUmMjYNFwKeYk7qDd9y9PY5Xq83NwYtm1HFq5qDnT",
  "key9": "RzjVJr2M6V9scSTwTeHmugCi4Y6fGJuuwD4u2joXrayoU1xdt6NuJmHZWrsn4Pqm4tpR8e3zzW9zPcegepVUnK6",
  "key10": "3sYYj3ubSAsv3Q1gzLNkefn9zRWzozg4pAKJXcWqBFbhfgmdAE6jVCzvrkVGgkswhYnCC31pwgVozyYxYVE2k1pX",
  "key11": "iA1eCGijBVU74ZjSonAiA1h41d6qCNttM8buhZgw7pKywFSSaBzvALBzUstmbQwUXVU3vThuksdgoGdNoz9eQg3",
  "key12": "4jPu69sweok4wzGsYer2jrg6KyHs5fjY4RkEg3ghQJDh189XNrqHDEzJPhsgArsiXUUd5pDfgK4FaUrz6Vzm7F4V",
  "key13": "5eUf7QGmgzf93TttFJhiQKYMvHw3vXaKPL1eeDKjm92ubfvQcfmzDjad9vjTaN2ecZqTczurYiaG85PQ5ewtPCS8",
  "key14": "53f4wgWyykavY8G9B6n8ck89Taf4yNucsuYdgfYaQBJy4io222ULWDnGb4xAcRqRR6c5BCPVPfh43rzDQjeLRewm",
  "key15": "2WpKrULdx8QKY3T3sV1zPcJWPMZ71GaVTPFHw3uXybmaqFPszxmpYCg2CjJmwJonsMFTmGWFMgsvm2CBY4pkrZnK",
  "key16": "47Lp1J1pVbpjTEw7L19cbMFQ2srPqTyi3ag65s6p6CctrShah1bAaphN3Mi2iE13R9U4VwGGMH8KQycfoQbuu2UK",
  "key17": "4823jLXkmms63XShn3KBkAr4NHb2mNbRuZdSxzR9NvAGigVDdffPkAPjm5YSWwW62CFV8MMtBtUYbvuH81U54Dwx",
  "key18": "z9ebnm3crYEsaVdPjysnhorcvLVJfkKpLCGswXQGT8ynsKcmgf2V7TRxEE5zUw1picu8ac1MtRTCbrns5Uo7mfN",
  "key19": "3MPgGcvipU91spcFHsdBz3dodAC77ginBz3N8WvhRVBfma3Vttyu7hK52aBWyiwvwd2WVDUJZkTJ7oYfHebSpDxc",
  "key20": "3ULBBZpxK6M7rDPe6LAzfDTJXp6QLADFpiCkfWx5i1KhPKwZaG1J7zRkk78gaTF6behXvGxrk9eXc8EG2B9gmXA9",
  "key21": "4xcHvoXz2x3vXTaNAXnmTzMG5pwxtss8YyyUMBK5qYtujgdSXgHzCprv7cbCfEL76Xy3vb3brwwFXXYdYC5FJF2G",
  "key22": "2mu2Dg2WAPAuQ7L74y3fwKQPm1wzQiskwUMMkZpna9WEQ5zsc1nMUnv9AJU5vvdQEgmP8xYD2ca2vWuYDgCFfWPY",
  "key23": "r754s2wzy3HAGWMDznYTXPoUUeQsvV4QCnnULWTPwuxHdGZvjPJWftz17FCfLuTQwVA2BEPV7VRVr2s9kTHnTXK",
  "key24": "2ggJZWGo6kqnB87EE2fPkVnh2RoR1n7AciHzHspsbp5qciSWRUEWGxTawtEE5B2eadiqKJ7Cuus7STbmsXQwSAfw"
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
