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
    "2xomJ5b765w28qdgK8GouC5cssvzMCoZSxVL3NEMosZt2GvE79uGRuCFTq412ddgnFR9uaEYBvwbGRZogL8fnXfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhGpfYeDUkRPUSgf3t5Hk9rzTYK82gVNwpGdjcTevK6onWT24YgqKzcMhFcJTRNEaJnZWTZuZ4ZKnkFwyHHuzWk",
  "key1": "LkH5JbWP8woyNsfYCfbFZxSnG154PxS41uNMAR9b72swLFTMYyUyozYBf3zfvWNtyG2ByGNYAC6F9YvV5uFdw7d",
  "key2": "4bDGUDdCdkrHSkbmNgLGwsgPFj4HYxAWtXcXoV6dPHgkBpbpa2Ps6bCrs1PPnBF52BsdJcpn14qsm73KK69KTzsr",
  "key3": "56pDoRY4Vyo5hry4aWMhWHJJWiRma79C5oNGPguqqVqvNbpK7P49ZRL3jNjh4f2xGQFGTFoaEYr6EoJE5XTKwrdu",
  "key4": "23kEZXDYWdCXr3gYfz8ekZRrauFPJnTgYs3DhtgbPNb3xJq7xNiUiLgPYiUn8oC3LXEGBgss4onHpbwAagBkBiUR",
  "key5": "5PnnJmQ8hVud2n6gAPFaN7s3kYB1sTdn2nr9WMuLHEQ2EjKxpijB328ASHNfaTvunvYYnU6PEA3hpF7rv6nE2X5K",
  "key6": "2VL1SdqevKNhkmmLj9AcsPpy2jXXbVWtA5r4a9U773bLR4ejTUKkYHMUgVqwQ1PqLERo4b37eENhV5jNEfjuXcJT",
  "key7": "5XyUmYqVZeqxqvvrUqGaNkfoAUpMVKHPDhaZjQSQ4BHoeVYHiri35zKkPZJ1ntJYHQ8GMXuhJPVXB2bmYpfJUh2o",
  "key8": "22q2tTN1gwhkUXMUscKUoxbQ9aFhGUvuqA5BpTF2CcgRAU5zZbdwTuczWPQaEKCgqT5jB1Btsc5aZrXPGCbircUM",
  "key9": "4HH8uqL2GV31RCexaNFSvrtLXHhJXumRkgXZr46cXZDmv5ruC1JQNtmPixFbdrnudLK6sCK5Dmdf8a2QEwXKbX8y",
  "key10": "3G1vPQNbye1Gx8V4KxKsxDQxgWLujyJL5SsCEcUmarDn8dpo5kAfaJWAZBuCxRoP2YckbvQDm8DT8B5pyEtpSPmq",
  "key11": "5Vv7sGjL67ioR182QWPNNAVs8urZgjM2goce6o5j18g8xo4FSqiqJCMKaP5cbWgUoXHpq4ememnhyWzEBV2mNioM",
  "key12": "3MGnrVHxPJoHEaCsJni6emhU6DeCVYWnM3se59MVTP7hgUmzQJoR21f6fgvWLHJQKuvC7CcFDjMxSGjfguKcMqP2",
  "key13": "SLUPGPRxee6gz8GBe2tjg29BsvezJzGEPZZ9gfPjzpfq4jeCd4tGC9fVz3BnvAts6fgmd3FXbAEWMXiVfYrTcyj",
  "key14": "2p5QPDaKHfY3zdgVGQxtguG57oieB7N1j8szTQkXWzdPgZLXeKFqsYxYCXnePYwwzbiotjxUPZ5HrcwfMr573rZ1",
  "key15": "4HAL6da97iQ8U3z5oYQZcW4LUdULzykKY2uLXEc7sgBVTN65TRvXTjAnq3w1f7xLb9vF47giKWLqXvW32mqy5WWJ",
  "key16": "5xc1x9otN2FpAsUGJgxzsRJpnGGcRovUXpYx1wfmkbEd12Zw6AhqNBybX2oNXEQzafMxgniCM48B4kGkWui1AhTo",
  "key17": "3bdshY7B1FLbgHUvWL4kvKiudpmCibpyXZocb2mgNQk73jdTwFi3FuRrorBM21Meh5s5phPsT1BUFwMk1dwvs6zh",
  "key18": "2yVoGjaFRAVRZt8FKtLtxJRq8cGrh6EbLso2QyJJSBTYvJuuYdTt9v29JNADvmQXEmGujdAV6p4Ur15pxvNVQrwF",
  "key19": "X3cFhtv5PscNk8d5zSVVrnQe1A9nygkujeAJZd5JbhFc6XXbES4jpXU2RMDDua9a6aDNhJUCeud379qU8qmvAVw",
  "key20": "66eFPY8mvxxeXY2VDD28EJ8o17fT1qyBDNV4MsTEBEmU7xCisjfLVUgKcZ18iN9A4zRR6iYragAt8h5s1UkPXKDF",
  "key21": "3H7XaXoLQqzVVodYgNChFGDngoztGFH1U9fwjgSLnyZJ2EdsRyPC8EBeDXL5Tk9VTcPSodvwPyZNMURwNoEaEHaa",
  "key22": "4F4Psm5Se7w9nYNs1G4TsRfPX1UdMRLydc8QdxDKh4pTwfbzRPrzNpW6JveuKxLv2REgMvFxvnv3wmb92CRuAiMu",
  "key23": "DFJGNKgxNuwi3QnV2RXRgx1rRrRXi87FmXyCkgZTQnnjoPEnsHGgGxGiwW83qd1gpTctzL6CsPMnJSo5y7hGvaS",
  "key24": "5DDnDy6DYfssisaFUSoRUsW4RrBK3cC1CTXYWkPJF9pgbCKLd6a5LShEc8gMokbajZaXwT92Ai4rcrd8juMLgxwk",
  "key25": "5GFvhTNVDbNhr214XJ6FxuZabBZ1GdTNsECqJHsXYeu2nbDzsQqeKZ5PDJJ278GiuDjXreKJF878oUUe4p8wnqV2",
  "key26": "314euD8B4GvHvpngRkz7UtfuVATByt3A7vCVHqErFbwNmYysWxKh3YhGwid79gG8bF1uM9o4goBG3g4dBLDpZcb9",
  "key27": "3dqN2qdZ6yMr6Yw8ytPq3bzeETXmfjQtd7US8ngY3EuyJW2SihVS6ecpWty5Bmo9oHNWjr97gvFBRE2jX6xqqfbW",
  "key28": "WVG3HyXN4eLJp4bYzZAKm2zmD1D7gcgFaD6jyoJpG4akoGKM8dfrgMAveRLBMXo9ki3k9tuXf2nzvavxHVNmB9E",
  "key29": "21tLGBjPd9y1uVn8DZiyeUGgmcyiW7ep18EToMuvETTKPYtQJ2swXdNsi9NZ6ZzWYR3H2T8nbExXWx2okzCf1KDq",
  "key30": "3zNrpVY8doon6txfPRAV4ni17zqWMA4NNLgqs3SZZCEuXnvxvjDSCrZsQ7o35G3n78S4CkFAhrXoCXdr4z4LpnkZ",
  "key31": "rQqJmfmfwHZcFdB5feGv4ZpRdtGceDWLJmVDoNHFHNN8qGvxLW9cssRYaD4i9JKtBic6KLdmcAU7SjnEBSgMTnZ",
  "key32": "3xQZ1EbbxbiWcsNZKCxvABCcoinsPpodzfAikKoQEVA3kDLGjqKqeCQZVpLwqcgqa94CB7XYHfSAL3M4vPxpnzu4",
  "key33": "5HhGUzwowb1ynqXVXCxta1ZXSkYXbHRugsAKfJFf1ABA6Mixg9RF1W5aZEGYs8coHTtP4pLN8huGnM3n6XekLsbG",
  "key34": "3tAqvtmTsGbG8h6yjBXGJjUUv8jHwDKF4H9DAR3MLJ3YgqzGaagwTpt2A3A2Q53Qvx1VQwMrJ8RcoRRdxfS4rcsx",
  "key35": "CChQ1kKE5j5mjqN187CPejAK97ZiaY4XcdjqENGG9KQuL9Cjxp8DA2pyXhqnyfywrZ6R4sbzxguGK3eAzPSUJjR",
  "key36": "Nbcjqv8JMEwmGoaT2W9nkT84GT1Z7Y79eixV7AeUydPzcconchQ9WFfEehEvdQtyBHJqPVuB6fGKXiRnxrPmshP",
  "key37": "2UZKxTH3HyuC4KpZoJFP8tvQ7dkvWb1KV6vCYNzQzMtu2fswWDkqsF2zVVq3ndhhhAZ873Qxepg1ssYLxQnSAb4Z",
  "key38": "3v2aSmJFw5cBpcuE6DxyGUwk1isdRWsqa2i5K9hj2pAhKZyBqbkuHSVfvAYx1oStNicDDXz688k6s2N4sbkecdCq",
  "key39": "3bR53s5WczaGT5nDzm6GbHjKrKg6BvWaJ6cXbhVbTBQYi7nLbn9vh5nppvi5MFzTDMumyZvuajvWpe2NLpbkJs64",
  "key40": "5V73yNLsq4D2pM1tBuWPRvQV6F614mJRaWfZZdJViAfUDjCE6m6uBSUxQCVsFdDzcQJH1j21Wr311aUs4NGB6e62",
  "key41": "46JskSExh2be3wiZaKd9WC7RxqCt3hznLWikrMKJpxmb6kQpaY8UjqG2uX1hiZny1NkRjEWhjvxXnG3mb5AHeJMZ",
  "key42": "2fpcsGTfBoLVdYmHMco22oL8oWYfvSMAqABya39m1ZY9KCrucE9suopj3W7umAfdKmagBenQ2CTzxvp9JVM1rUCw",
  "key43": "2kRnVBn5S1HLJb2TLUaoUptaSh7gwdiEu41g2dBovVUAb8ZxLJmrXpG3BCHGAwdFus6yLiK8MHevhvVGnriwHWJQ",
  "key44": "2DXjnL1sSCLjmY5iKKdaPfb1Euqb5m3EFkkLWJECfyE9EHNJKGREv3ZifTnVVWpxcZW3jfeK7k8dVr4P9Chzrrcu",
  "key45": "41NsaP5tYqa9QTRA7hEnbpFZohyxMTxfr3w22Nh6RFuhmze5uaVToW2mdQmJnaLNxRNQ6rzCePnLwSwLRFMH5wd2"
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
