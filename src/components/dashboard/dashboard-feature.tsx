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
    "5WGxByqyBLoM2opKbXtRzHsoWWB1kxCSxAhrCe16Tz9aaLacZEXmz6bMgqUQgN5zoGPyUosEUVXXgAUCSxa8Chqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AL9YsivV1yFJ1L6anogJ5u5DS3pz7qufsYXp2yeLPKXaRm4V8vipPwL3AH3tQERScGzchEve8h6UVb1NMm2xj4",
  "key1": "M15FysPGtgxoxJ3woMMWa4hoAab9PsgYXosxsYPWhdyMD8rjvwDne8jPTuBkw6rtPq7CpjhXCFzHTo1eH9CM4zx",
  "key2": "3Yh2vvxzQ97vNRM4qpeb1EccbDJfaH6n4gKdxAeSpq1tsw4sEyCyqenGPbDnVQpopVgndxq5ZS3QoU9CkoAXpmm",
  "key3": "F9kwy3aMucMYKYHyVK8j8nhKqXrGuBxYhoWkFyP7J6qtNeFXwb9mX7uDmjXkaYS5PNJB3Yw51yGvk9BrRFR9EoN",
  "key4": "YT3mH8kb1X1BAeBFDXHkhDaRGTadtAo2pq5PHZ5xd48haZhKTxGGUXDjk2k7pFVafcVSMcbizDc99iuJdWA51ik",
  "key5": "3SRZdkoSWLkba3vD8ke1sBAFxqR3Tokm2ps5Zhgruq6Te8mGqmDoKB7PXSg4soz4PhMYDJ6k8v86Fpc9pFgaXrcB",
  "key6": "2y7j3QhA9GV1qvtPXr8hbXSeVKafbZpGYPzcVbbWVubwyuTNtZQKa8j2eQ9mVTVRX2mayjX18Gf5BZJ2raBb2Krx",
  "key7": "2pGnat5aUbN3YhWiHDY2rkSBQmvCywP8Z71TPD7avsdKHwEh9sW7RhhkcbB5hrZj3joSdyJuZbFkXjgG13Zh5U2V",
  "key8": "4Un9bztcPpCWUUHEfUAsSJkBXB4XharFwgxkmygJSTP5swD1XwmVLUTMU3LpoinxvKzdoNHu9zcYPkUJ77gNghJn",
  "key9": "4iGUe3zn6BmUxtk355dG89ZBiaFq6wPWEX3WZ4N8WwicvJKTEqnzVdQky6khJW3VZYZJ1iVeHRRoGLW5N5x24GjS",
  "key10": "5aw6dQJD4JadRZeEizLQm1A83M9WEme7x5wUWxVvjqyTCoC2DuGpq1z7PjTo2Rjgssaw9gyR3Yyq8i6KXc4pyvzL",
  "key11": "4BZnVzJRTQ2KsmdBnYZmE6EBwUGX95ncgcX7yP8r1MLPzDLt5LyPQrCrb4PLHDkRgHFQ8YL3MinkjogvTQdrgxgF",
  "key12": "Czuer5N4huGCpxTL3uKNmxEkQu4SgJDxNZvV4QggEXLxCJ5oUU8tDigfqhLi4ePR3PLzbSQJ2QStcY34QMxeXYV",
  "key13": "4Rxob8m1U3bWRZiBfxWUyL6SDPPsvzdrFPMjHhYSdEqRax1mr1PmVVDvDPLE7daBynVGLPgsHr6vLfgzz6caUtVg",
  "key14": "2pKMwr8QLbANaUVcPiX9jciPvJA7ffwtnhjpMtAaa6grQSJfJqRkZqbUXm1zcvxv1RDYmD6PH4UdDXz3JswQsWtU",
  "key15": "5VdgbpYg1vThitWgc4caP1LSonJY5jhhYWXF7FtGCd7zyoXbfxovJL4oEg2k6FsuAop5YhPCouY81zmRSNwmjVw8",
  "key16": "4U3o1NgDxjbf12BL1t1u6ptSmu99mrFyruZkhhEJbeiBUuhoxtR2Ufn26AGTvEAf86F8o7JEnkrAowSvTddetKG4",
  "key17": "23a8PSAxRac4WvwfTTef2m7zGhjYDmg8FvZaxaHEiLGbM4GuPaFXYxLWW7uPD27br3x2XkAdkcAaU2mxjNmnA7iC",
  "key18": "4sCYJ4aFUcrmf9G3KJBUHce8Nfh75mf8qLjw7mSkiwRd3cV4HZHLWyUigdPsEQGdGyerEJjrgSCNbVT4Yi42Yx6W",
  "key19": "2Y39D2ChmDF4VcTQnFLFJhbUhYf7xEN9H395n2mXHeUE2nULH62ahFVohwPLwMTTxeCHSVYSzbgYJVman2dmwknK",
  "key20": "2qUdXNnjgfpobeM6CaugKPuhqeJUZTRj5JKpxo9aDx7pgeP8AT67TtDWcvzYnMw7wyvZRp3tLvzAMcHwb3gbrxrb",
  "key21": "Nvx7LcRqjxz69FntrVLoZi8kJ3X9UKCx29h7V4hTf6fqA2FWyuXYQENp829EGG4avLruKR5RjF19HrYdFBbJxQZ",
  "key22": "5kaCe6AC2iZC4mQ5GHuk5xembgzMkSjfA6jSe7QjTC6HAEo8GeK2WtS1Hy9t8uJDL4j2SyfXNecmzojNFW9P1PEW",
  "key23": "u2F8SE5Kgtu49qAjqSxf9oUecR1rupXvAbFxrnwukavB9Pvesa8yojWLye7XmAtAT9QgSpauUHoxyoM7iLnZWGA",
  "key24": "2d8KJfmaFdQ5WS5vWNtmArSfEEcEnx67FfmRtNMZN7WtmWYqPC8ykwh3XxNUHPGGGVB8MoF7NFui9uGvpwGuNNXM",
  "key25": "2D4uAh5KMmyf74um3CA3JfuHVQpLjy5yScY5A7f1mccb67tL7HxFzDEnmodZz2mQcasnvi798xBnU8ZCkB9PM8k7",
  "key26": "2nQsERmGWpZGoHNpjrQTPm4ftEXrjbxWBgx7Da9jUaQoMxxkdX779wjfMUzKEzoWA6yx7bTudg5kmehCkydynv7R"
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
