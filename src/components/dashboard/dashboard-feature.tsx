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
    "4VDAfSj8bfT97kE5ms4oSZjGYb42yUpUEeBkvo85acJmZ5TpuvqS67Gqm4uRR7EvYwfxgpTqtiboMxXggc68CtXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vurGHG2BkPBW8GPNL8SbSMpqNwivS5neZwsnVRU4CpniFp3kKjTwK5y4ctewBEjaJJS2ibnnE64Bpq5eEMYC61x",
  "key1": "4Lz8JSUrhpbyMKm1BXJ3r9DPAiCsMSu1oB2DDay2fJDXzBDwUrfCPSbo8bdGdjyqjNYDdM918TYX5J1ozCP3vYhb",
  "key2": "4Ad8fDSBcg1gLrMP6qGeJeQ6zGavFjJWod6g659dgA66bFmt2m28ktjdEpqYdU7nNNLHdEV34tdgZTspuubFURgS",
  "key3": "3jxa8odSzP9BjkZXjpD8wkKZXAjyAmt9LqrKxce26qF1Q7s7wgwB4jjXDh1i85NcoDF7e5rF2cAg7cGfGqVe4wzY",
  "key4": "2ZsGSMVAvdQMqNJjge3nSAs8bbS9VvMmso4TyejZKddhQZLfUjAxhgmsHDdtV8m897CBV4pWMphoAncQU9EehURG",
  "key5": "WxEbjmEaxBLm6j8AXu3Jq3GmjC2zEsSPxgtaDAVdp8xEE33pgBvEqwuW6nbf3EaaL5ffmg4zTzTSQMoyxwJxBrW",
  "key6": "4Za7FrEabSZE5jAsnVYDmMdEQkRsAhZQfFbxduGTmBbZb9V66ukwacZoZjEaZJByApjMn4QTtt7aeahzvyS1DZn7",
  "key7": "3o3RZB4jjstLAHWiC5ubypFe56iFN37ujB4P7wKc6VuMdEkWm5agyPjFyEUhVUpYR9oQ5k8rnwcFA4CWUcFkQCMw",
  "key8": "4rNvbEa43ct6vGHG45DXPnAbixAjFMkUqPM24z193FqJAvHzDf3R7j5FYhsfjc4pDftbM7TESxCA5z9jefhoGvSE",
  "key9": "4y37oMwfEiozHEszgYMfa2HQ2dDogg958bFoc77fBMqevUZLzRdyEFnfLH7TPk7uvPRoDxnLPq1Krd2ToQTTom6Z",
  "key10": "2qT3W7tqC1kzE6qhksGi3LEzx3yKW5CoWd9a94nyCbvP2PHPRDqs438m5J2WkCfLSKgPrSnqxn2NbJDBGs33Coby",
  "key11": "33Hwm3RAvoZ226Ks3fv9vrph2u9AFnDUeK4uZWu24kgK9yv9KkhDWuPPWhQ14DuJ4egztHGGxrXqaFMKA88vtANv",
  "key12": "2nbJKyToRoGXCYn6eSEirFFj3myBSHDTSsxn7HQpftE8PXzL5KV9Qew86ddSi1LuM7AjtDsqKMsCRUwCZvEwAt9z",
  "key13": "5R3fvLNkSfR4F4iC5XwTzfpdTuT5nk9T114MhAHQ5FC2FzGfJybTt6sDyRAmSxnRk7QrDEYAJMM4SH3cEYeJetxF",
  "key14": "5znH8W3fDGrU1K7U4txzhv1WnhoMPbiGv6geiK7i1EamtMujx2QtnDuRZyE8xDzLjsd7eXbeZ9n9QiFEvQsQexwz",
  "key15": "4yXr41txgxiKjfZJvjskneS1RBd3uhNSxEe3R3ncnwVaDvrWSDUh4d1L4BFboA71GZEXafNe63RRxLjZqy4Hpc5x",
  "key16": "4ttqwUbWnFvyGLyutjx1xbvFPA7wJithPBrPHoX5boZeMZGoJCL1DmoXHpE6f5Xo4LN5gsg38m1EKhHPbLNxqQ7Y",
  "key17": "4CsQTpfJ8PuDRPHSpsHMXcJTtrUHs3wnh1nbv23g15NWpfaoph1TKfANoLYNb7Kx9fe1A7cyZSrSrduMyJrKpne",
  "key18": "3rem82CVwNDxWkgcu5EQRXG4sMpmmf2WuPq6w5XMjKy6YjcYaEL91KGforWVC8cUkMyX5Mkucc82CtoYc1Stzs1z",
  "key19": "E3DM9DFVYezo4m7yHTuGRasY6DuMrFvwaVC5sFbSGfPpHQAxQktpr2fj45vA7gGJEmtKxqRbYLrVhGmAcoHbhUu",
  "key20": "5FvN8gL94bMqe8wGSQRfPapFTDca6dEu2XRdiRgMpnB7fzujKUYG2VP6DhXc8neGSyea9tKvfTdJA8YK86E8urTc",
  "key21": "5GdHwAJcBQkbDvqywDVwXjtPkLSjL9eNWZvsYjJYbtVwfj2Hi4xd3pT4fDNi8EtvcFiN1KqRtgxa2d385os8Y9WZ",
  "key22": "4PE43f6R3AsADUA72NHTsMGcD9Ku64AC5G46ysV9QaGsnvr2gQR1FEM9q84akC6oLsZM2Tn7YpsaWMRa5EiXHxcF",
  "key23": "Sq9NE9sC8uH1TLpLC8GUVJB6zw3yu6EVo3NfN8HYYc8fSK21AMtNWp7dw3y3fhSYowSdSxKiAACGqBf363DPoRK",
  "key24": "31uQJXnmRfZRrx5gitJiRk9mRY9Q8Ke8XhUcHcZyDBCXweT9tmYpTmBreuDJJ9U15tjSHaA23KfyQ3YSbCD2VPAf",
  "key25": "87DEeZPr7HpbmnN4WkGH1tk8H47mKNBMAZ6Q6QumV9u4qjPxxX7BLCf9Bs3AaGRzxCQ49aYRgWRnPnQKJFihqUW",
  "key26": "4FhnmTJp3QcwyTDegQ1hgW2YWMYP7Kkv71GeKuzq5KKPogVKZdmn1Urp8GYdmmeRcQhNL2bNFVgU1NBUcjdMXEgv",
  "key27": "wLNGdv1QVi8ofTe4AiaUrvdSvLBVmbCAKXERZvsr7v4MPGFG9EbaNhDhKLJHAP17eDvmmkCCFL4iUN6KkcssnjC",
  "key28": "5oLRU79Vf4Ba1pfGP3Q5VHjzTiUw1pPCx3FXXSEAikjm7mq8Ei717wtxFZ2R72z45vYcQHEfj4W9saTv2cvEEKeN",
  "key29": "3PEPWPJQdwXadrDfxFeap6cRDE6xz5VS7aV9mHYv8H7DgJHCWNvEBLP8Wgx5et2gLJka2vS7Y7QfDzRdZiALsDaP",
  "key30": "5LMX61G7zgRZjtRtBgV93bWYz22eNDAV1LBshEoh6TFthaoqA3vBqXLzTfkqkPqX7hS8FEapAWvDBY12ZUgwTuiS",
  "key31": "3MCpE2Lzqx5NRCLCxniDsB1ALfLeLbAJsf4B2YSERqUrz6ZLLBDihXnyTRMj9Pq5wrFe4x4sWxAnMfuHN8haZZ3n",
  "key32": "4WYGJ5KNnSpNdqKqow64sQTZHf7jFTRXAhjbmQhUCYNGW4ogcrup3q5heegWracyebmkBsgXJXZEqeLFZofyQ2sE",
  "key33": "2ATmx1ZibFAUdUzJKCWbWYMunKHgANjsh8EgshDKqP2uNn7xLHRSS1Rtnh6Ww1ZTRL9bfPLgS3SUX7RhLgEcP98H",
  "key34": "sJEQfS8t1UR72pYDQLwBUgJZWtu191Eg9BrKFvWpJ87nZr3p25cBDX3W45h1gBY5Wi9frRnKASLsjPKcLTtyZ9x",
  "key35": "5BAJYUjbbdAo7M4CCMDKEbVDwgZED5vZWb12E47W9w4WWPhoxPXYwe6w7Lps2sKooxvx8NuG49H8FVo1yuYTiSF6",
  "key36": "4HXH1pijUwWUHMNZyCxdaKUQx8pehWg7GZwZJpDsA1HojsngoyacPzXqFygCGvk5i5UfKDwLXLZ3p8CmFCBMPjp8",
  "key37": "3zwf6z3d2PYkFbw6GnJibpHX8iGyiFETdxUkuA39jbXEpBsbyU5FU1LujXLMC75U5LbC5dgJEu9W1YCDSNKqryD6"
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
