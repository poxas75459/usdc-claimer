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
    "2vJbFaUBEzTvVGiADuskdesMRETsessqtKpkzs9UJBWSF39faEi5uU5Pe4CWaypqS41CfEdjtjt5LST7KWV8ZqQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcVJtyMCUbs4ufvqeuDrjS9VRtCkWE3ZnKSSE95UpJZh5QWKhb6MyfiMxHRhn4EMse5bk2jsAGWMwc5WGzX4fSU",
  "key1": "dHyPistBExo7BdZc1uiXsK3D3JZfeewndX2nz7LQuf1UiTeLVbBmj5nTVr31j4KSZmc9ybJBAEDoBacxnWwayCz",
  "key2": "47W9XDNQdJUdHxGdUQSqX6rQ3VNSt8qS5b2GWADx8WbdVrVxS8fNyAjnHDmHJdprAazJHp9EuYHf3MNNYKMJoV2e",
  "key3": "2bnsxCjnwWDnGa4Rpw62kxaKjSi9WNLmAnMbpZzsCXKYPqXBUJ4EyXfnq1cSmecVJYc8vB8wzx4unmy8Lv4suSP8",
  "key4": "oRcLaRAG4crviesuaLh2TCCrGejqHbacYKLVQMw9vwHfC9BRf7b12mVTUrZwC2diNx3QVCoDRug5euEQ6qW7tnG",
  "key5": "5Rjd9Hpdk7hkoNaGVKpoZaiLtAQ7qe1s2UqCkbybYZ3ebRsti9DiaAAdhsEjxZpwe9Q4APre6zsHVSeLU877kaoF",
  "key6": "efMmp1X2FahuxyxypXfR8bdsjoLnTKGehtN3JsgsYz6JxyNbszCT5MYbkFDv66umX1guEmbrWbTJ9skHGX6b7fY",
  "key7": "kGZ4Bw5U1T68ufu5Mx81cvsrTnkVRyfax17r4nJc3y7yYBZJTYp7BhFVm6CxsyCHZaoYtKccDt2LetSLnkooBYd",
  "key8": "CWGUNscssg5scciziUVkxun7ZdZNVGger7tonEPL3FMjSEVec5FDs7vHHkMYZDSVR1bZ1EeHg8BDwm6ZMosNkP8",
  "key9": "2aerywJXwLMkp8g1DQxft83ZajpWtbib2k71NxSznoiJAtnGB9RZ2UjMNTsQKfmG25HRAFjAeRuG2gKqXq9NyBy1",
  "key10": "2dajUYFCRcUmCBeC5EdhtZfjPNFBMLjc9JjmS5FctPMZo9JvHV8RoXF2VvpADJxZZKKpfA8oyyJiZhLzpbNMcTXC",
  "key11": "2Rb6axo4u7qsvTkxWuVSFSk5q926y9AxVbnx9ucTtE6cHCiU3Wia5qFi2ZEzQrWhBTb5ZdMG1MFs4dGREsZ9pThm",
  "key12": "3G2Dr1wk7Cg2xr9N7cRPpRfpYeWndxXVZ2aFPHKx9Z9XSP5sezMqZ9jmpcJcnNG43HyWop5KDiU6vxdrWWVBzbYj",
  "key13": "4hBy5K9xmfQjj9ns2txzVRZB31svNQQn8tj3zjbew4Eo2xYc8AR1Aq89tswuLib9U3FxSY3FhgbNoceRdouq3mn5",
  "key14": "4K44cYADS2UCg63QDicTQzGJwb1sMVgv4BVMrkQVupKF7ZMwdQoVdAdFy4NxxSUfQZ3FqENN5e8EViJiSZE24PV",
  "key15": "2Wtwh7hZKAMCK6qWSnM9AxyuDPvEgU1hKzqLqkF619tmLgtPo3xZAeN474zwpZS8ZbkmSrn4GZ8pWtgKJx2F8R7z",
  "key16": "ArbXrUkMYTjzw6MwRHETEjkTpRoubtbnvSadnpxECv7QDZx65mADM87iomdXNHJUfgo14Wr7gJmTQtpwtKzXFHE",
  "key17": "3ieJqwUtegFkxDS2ytGri3AasXuZiPyQMsss7dyLmvrZgCvLCRRfjNehE7gDNx8hifYLSw4szctUurreiAcJu9Gc",
  "key18": "bgSJ412FqKhu2EZCi4mjwVsSTNysfUnZ1JpRHcd6pAwwz21KK6K9NFcMKJJJ7kDf44e5zX22TjJydaN55j5oSbo",
  "key19": "2qDqvpB12p1RiCaHS5Uop62GFu8GAzqDyKUYivrTDckYbHtm1mi7NqXz2ZeCCmnAeP22hTNpLX7ZJe9BCpxbh1kr",
  "key20": "4kSqBpsvuNzkhtehuCZzd3KqkE5enQd7rN9ib6X7ZemariLZdyKbg6f9jDZQ2F84T1ZHZNdW3rhNrdRDUucvctQD",
  "key21": "4WHJewLXVk26uTj3qb8ra9nF1kauG29ceBoXZxnfsp1v5VgzxbGbigZiCGJf81ZDVQL7e4VEVVK9FERT2WVU5Gh",
  "key22": "nqXPqMyegbytZBRp7bwBqd9X1K18HzkRv5DaEkVoduboXicajMEufxGTcvhxLLTiTgq8gCaBLS5QKX8zeQEpP1X",
  "key23": "2oTWuvFutQ715Rwg2PivXRYgnkDPP87p1CNVunStfdrmpebTXWaokSSt2NjPDEJfNcGs9V1dCEf3FFuf8NKqWMEy",
  "key24": "ptgSq7eqg5yKCW2Z7u92LqR4tGyG2pRq21eCKKTumA57uNSrDF6YmoNQCDiPX2uvmVS2QAhxv1rC4J9kiYZDuoJ",
  "key25": "3tpaWWPB5LqFMzYoJxfhRiDoK7GSSTPk1nJhTMCBq18R9fZxDbSLjSF6MppCFtouhH2yytvHqbZyByod4JnD31zC"
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
