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
    "3PS6qoCt9GyopwKGyJN8s9HMZWuwZhSujbUPfx3tKJUS5zQpukDqcPxZrZPnZ19HycBCQFpsJ6AxZLJ2rkxYZYfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pj6W1SLhosSyBGCKRjCgNsPVhkZoMpg9QpmK23gguG1mm7mG9GHwS83e3B1Bya88fFe4AP34dk92cPs7SFyxuCi",
  "key1": "3cgbXZBU9PAo3B62PaTGFBa5rxNx51pyoUjXY6Xr8sfu4GmYNiqomzNWau19WAD6UGupTbtfFSK9rpeESf53DfsQ",
  "key2": "2HwRnw4pxwA8uCXrooNTMBBeCLumDCvHETpcFDtU2kExJUM7BCo2Eg9GTkeqhhAexShdBsWmswhU2XZ8cuq4ZwVn",
  "key3": "4gBdMEQzxUPAYXKbsNS4Xq8jppxHbWVbBEPqzpH7Woema3RKvxKxxMsb46FsJ7xhLcc3Ln5KJk7HCtD9VKQMW2G1",
  "key4": "218vynwWRUN5tcmuHYcFw1fjWvfMFomv4rdW9RdnSzygZgeA95vMLYnXrGecevx9fxEvvn4oP6pAa4K4hkAaMqD1",
  "key5": "yp9KrDqtwLZyLu4DEvrKYJhnvfJzEzTiUJUhMjnd7T5crqVPNWtX8179XexLiftXE7Bg92kMXdykUhgGn5gGmSw",
  "key6": "5SjpHNBz6S1L4VC3r4PAfhW3DNBMHaKPTeRR5o1RtLCpXoHXJ2vxFs3747pMs34BTYzXx2hys5ZWbRkcKzCrJSwF",
  "key7": "47SmovPGNPGtZpmgYbwi5YrAGxUPynwmr56V75meEXs24emGySVjn6QmuN2VcT4JivfvMYAVkhSJgSrGq1Z59gAd",
  "key8": "Tvdh4fSvEQh3durWk7TurHhbM7ieMjhAakUHzSvkAdp4HCGHreokJW1LkPpdHW2erajqNPZwm49VuQt4GDwQKbJ",
  "key9": "2hrtWKZsrMU4EyY5awy5jUUkKqux9fqNHaFu2oApCZjbMA9FiQENQZV6SkCmzramRYhG9GdbL6ZhqAizv8JDmETm",
  "key10": "3uxpAHmGoZezZMsNZkPhBYx3PNqVEhZtHYmgNYi63RVRafZGj6rYdL1zjk9CpxcTpe9cUKfmdLyUsb8FWNYxTDFT",
  "key11": "3gJLGdFcoDThC5CU4yWSKgpzcSxPLhpVvBYf8f1JmgSgmkpTAmPfQopVPSZj667TBptLJcCpocdaWDoPQCecQjgM",
  "key12": "3CuuyQoTcMMqkGwFxxCRdjC1Xjs6BxLJRgmJE8M5ukR5oWkJ6i1rM9tCMd1GS5RKxDX1qPeBbAZLJZ5ghX26n9w",
  "key13": "3T2sfSvr2pULPK5kfSnyn7i37twEc42jWM9aLTxCcoHcFoJzVzT17DZA9zhWmf2gdT7ofDgpYF1UcWCyiGs1pCyh",
  "key14": "JsqT239r91yH1ob8a742rqA1dcXMMjRxPru2sb8BeqTwEtbgj55LahtFRUgETJ6cq97qGW1FkKMJLTi63U214rh",
  "key15": "3Aiamx5S8kA3YGrAg5enziShkQBVcSjS3zSbED3bHNtkoipRWUK2snZg82NU8Wr6dR6ymzHLyCg2DGWGoQJ9DFxa",
  "key16": "3NEyLzTPnmsrt9wWnHbyxDiMs3EgYuuq1Eb5JSUquM6QVRqBryxLs3GUSCUv7zbpT8z84RnBpVKEeL6yDLfwJPgT",
  "key17": "5W8MaHWuVfJV4odBijEZENWxwrWgozjBqDMa6UVjVaduUd8e3p8x5ncHezTwn5noJJZ84i7xnc4YG96YZJ9Ee8x3",
  "key18": "4akeRokrNEsUZkiYL41NUAYcCckMa8r2gNgGiqSkjCUXAKQmYX1fxnkJSPDcLVKz9hvUJov9JvVoyjJeGBGfFGRJ",
  "key19": "2H67FWQn6x8Mbo9YWtuoLTUN5jDQSX8iESXRG9n7N8WVcKJkqvRR5fZxhCUuSGRBrSVnoBiEF6s12u4ntHBvroR6",
  "key20": "icjTega9h9tiDGmvfefm5a6xfhCD8zGeMWcarNT8uUbzXhqvbpeRCazQjAooYvikjadcbA3BWuwMFsDDRAZtHno",
  "key21": "iEmqi1EeB8rXQVPwNmpy3xNGLrct9pgeBhhdCfd8sT798in1NXSnKXqdbZNZXTE8xQ8ojXHGPLUbasfbhpzjtSk",
  "key22": "2j3YAABjBDP9TZf6PMuNnDVesK1WK5DNH12BhJSkou9cptVcPmXcVr74isnPyn1JLTtbod9oqYzqHGVtRDu9SrUZ",
  "key23": "23EoXnou7wDVPJJztp9EnQXt1ceor8dmYFQEquh2VqJjsQ23qJZGWS8a7ntCUTnmQTA4cyxwimqmJ82jtmzKNXqm",
  "key24": "64EhZSTNpN6ddzFHAZmxHtDB83wqYzUQYfPZtKfsbMEGxJbS28gR6iYWFyGw3Rayw26d2gxNDfc9p39QfrpWQ1xf",
  "key25": "EFuswUBdc2LkYhS4PTQvPkF2dFnq7HofmPgeJLBqFChN5Rgh4SBAGA3LDoHh8duQfLXpxPeoSZ7VDGHH9aFBuR2",
  "key26": "fD6ncvnc26VupQMExymEtHgHfD8p5TqnTXrkmt1o1Hmo4emJ7phDRzuj8YLuNKvjqQ4mRdKXW8aPkVMAHvrf1Zi"
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
