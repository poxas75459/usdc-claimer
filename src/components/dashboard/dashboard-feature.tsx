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
    "4jYtuegBbbJKAAdg6ghq8hwJUkqSonNNh8j1phP2onkdsV9JLzxd5KtGxBhxHvswqmmB2B6G377WHZdK9jkiyN3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E85G64PT5DwzNuxMtHUFrshBp4CmdNnZQgwfdP5FGLGK6i7tgxf627T3qWcAZSESakUNQDnzoSGbG5pCeHUK727",
  "key1": "5JPtGjfnnh9ygyGCV9fuiQCMzBuFqePk4oL4X59f9F8cXAVj9eJ1zBjuz49twMtHsamqYf4cqswR3PaXgKgVne8K",
  "key2": "5g1R9d26rx5TnYTDWrJfewCYVq4RBwkKmvrK61AW2wmfWL44UQBgwhY2T6a6bz6kZ9MjVq3PXwST6dBsa1DhqSkE",
  "key3": "pF7ix3n26ftxV2XkCKSy721EnGqMPWtZDRPiLecBSopkZvwzPVUzP7voBwsqsupYnpFAvhjVgP9G7wThHqSRjAH",
  "key4": "44WjzvqgLqBW74et7HLyTGVPKpi8efV3K344gfuG9LxwkPxDYU1Af632fm1RoZWCQWuNzzXdtvuKcRoysX1ExEz1",
  "key5": "3FhK2s5YjsfGn7xphC362PjN4EpXTnHLyPJpmUsnFTUQVVE3J4Tck6mZNWftZHcAiJ6Fp6E8oixSdFePuh9TSrdJ",
  "key6": "2iAjNf8KKPj9rhh9M4FPkTn1zhswoYK1TBD9iRK8AJiHHUp6fRTam1mFTshckBnfEb7NLqYwPDHCR9z8eDQArZu7",
  "key7": "5eB9TTecGdwiWKHXGUPrU436uuhEfH3sm4nrGBadQJJw8JzxGxCAJ2fnNkDH5oE1BRCM7j2Yvaks9bEHhU65vAAK",
  "key8": "3SntdfEiCLiR6quG5KXcdgPf4bcwbR1UkCEyE8T969kavHFcu9WcyL9GTrDczgsMrsrZ77hETEvwRAnPhNVzeNx",
  "key9": "5PwbBPAnL8ZwCwnVv2zf95xcZUJBV7LTKqoUmebjEJ1CgoVVxnTgNdkbK7CE9LPfeiBGwBQyzjsivEukrqrVxWRb",
  "key10": "2MW9d3CEXJqBreadLX7ZEgoZBrSSbsF1tzzxrSjwo63nBXDP7VqhCtPRsUrZsrmQvkyVCc3prA5vUS9uxAJBu25g",
  "key11": "5T5aUqJwqHMSvmnYnWCadTp2v75PDGiADF5Go7hznH4idujKky9h1MJuXDWQKf7jpmxx3TUKDSFBgknspaaY6GYG",
  "key12": "3zkf4tt4YbhyV4PXEUCq7h3Lu5jnBXojLwo9apyHgzK1Nz2X6ERedN13RQbLSzsGodm5BQEQ93wg2xcFT3RvpLo3",
  "key13": "2t2C69xpH1XLcrrMe3uTPQy3oWHMMpMiQKwTv9QumSx24CXMaHCRBQkfHPAP4aWfhLV1vMDPBKg1YZ3WthmCJmR",
  "key14": "4iyBLRWbZRGeGYwHLBwqZgzxbjxQqeTuWqPLT5xkLxqfWRr2wBRCSDpHaoqcbRvMx8KsX9dNFpWSCAbJULWyoqSQ",
  "key15": "37dkuLucsKvySJwmBmeQAjgfzjXFXXZ9EHCYKwqWBGmaJsbGGYruq8uiRPqcgW5Y9JSAJAKG7F7H9RypMd8YuNzK",
  "key16": "26DFnCrVVi3Sq7xLDiQiFvQdzt8TYetTtUoWAB6vqFdcDi5hzoX3T3RZhGkaaYp3WpGchL3NS7vkBL7NxfUah1p3",
  "key17": "5WTs7WUWwaFNdkv4GrDYcrmaD7Wbu9fNcs6U1emdyCz8nXRAfAFdFJHxGXjWPXFerHGMS66ACdxaDoM6sLGkmpWR",
  "key18": "BQazf6YEvm9p2iCYnaAfc5PQggu2kTzENHZN4h7kXSNUpbeH62LHC887iwEtf8BB51ZYVLAYrsPpv4bZsJRj9Hi",
  "key19": "4Vmq1NeoveJZ3LfN6EURQohJ12S3bPb1YW4TGeW9BKRXY9yjn5dh1ga9NErnWi6nstFNN8KAQByLXnFimPeowqRn",
  "key20": "4va8SzdxnRmzXgDGLv7qmqbAMHTjPotBga2qo8ZEY8ugTFtBkETPpZkkg1Xn1zarYAf2UTkK8NxvArLgbsfcT1UR",
  "key21": "5XBipEMdxwSy8QSVXsPqPLK6xFix84BggeMhs75Cvi5jPFNjtzeocJqR1gPbfgoZdekRNfmXQnzcGiwK1BAx1p94",
  "key22": "57f9AHMFvN8o5CuhCPiUo6F9ZR2pY82gFFBaKDpdnNLGxhsaHvLdpGxzGfTpp2o7ct8ruRVU8YBpkF3dMt7nkWrK",
  "key23": "36Mie7cJJCrhnY4VYRAeGh3DjrnPUfoQcB9wk6iXt8NAgzm4WpyEi8kTxHS4j8WbFZM5dpgdMsdBWFjvQxZVyJ4L",
  "key24": "2a6LxZcEo2uLgnTgDW7d19VNeEXwbUqhR2quYNaobvuG75x7pZqbmeezDQsV4sUGhFDVPKnrG57gd2ctp1wHweri",
  "key25": "574De8jWV8WA9VJR7n14ivo1TXAK5Jp86uGZy5mQTjkSJSULhPKPFTNb9BbmtzgrGosNExANwEhUpqnkuF8RYLx5",
  "key26": "N5Kj2Px2xSo9JbdG6istu4N78M5mnfXTq1Pzj68gQDp98pCJ1zueY6dVa8nQbeA2fRZrXpQ1psDXMw8HVMi4EJq",
  "key27": "3auz9z4jvVujXBsrfj1e1bCzMovBH5f6k1iFTKWFKUawhgsBVJrHRgTh9RsAEbDbC76tPRzPwt5XB2a3FAVzEUnN",
  "key28": "49YGquUVLdp2DVq5ty8r4hCpaTkXyWXQydLjeV1pHxbJUKcne4oXYqqsBWRgyCqmkLBjpSS4fyPPdD4aRHTB4U2b",
  "key29": "3EAMRBasBFvhDY53jpuPvJLvXdkBoCR1T382TrVUoT5qNQhW13QvuR64ccwgbaghwCb2ofuFCRp5SeQ6TxzdD7ZX",
  "key30": "4iRXELpuRZMktMPYVe4p6aB7jdtQvoeDJ3Sjj6PYuweH7YYssgrwVUbb9hDauegZKAF93sSGqcSiqhPzbKLZNLTm"
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
