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
    "3Fnpmbt6yqAFbvANRkoes2i25q52ap1s83gHd1cbmFWtrx91gwgDigCKGLi3LPFwTmhGriXRR6Z3uPBSmXETEiWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enC941YTsbgwYWEFc1M6ugd6criMMK64Jd413riCq8iUdBupmWLhrncC1qWTLcUhjAgwwVmrEXUkDiPU1AwLqW6",
  "key1": "2QiTUMFn9tNZxmSK6FyrCrzRmz9UZDYXBuSZ8q6hUjmnmR8eaccURbRXpjxNsET4GSPVhMcuodYPqx4BvgJ5KY17",
  "key2": "39kyXeGmAgbh9aBuh55VGPBgsfMbnPbDqxP4VARakmFF22Sv3B5MoktYpobfiLwVyCTDmaBAsQ7YgsYA7FE3npU4",
  "key3": "4qzyTGurbCdzYKfJBZEMFBa6VFC7RS3X7VXTA3mBMUQyrycAxkSkSVwzK6wKZn9iZrVEU9YNg99rCkYJNcocXkQ7",
  "key4": "2jT5zxnzoKk8coshFFeMKArSw62LSRmDSegvbioGBEHLy7SdH3B4WoqZQLNLeHWxnHWYEA4fZtBsajtkdK3wDQ3Y",
  "key5": "26HUUBhSdAEpAbdLL1rK4e1a5cVnzQCcyeWuqk1P83rmYXvsEAcMyYM9QouvvJQxKVVhkKHWWJR1GWsLJZz4e1sj",
  "key6": "2o9LhLcmm9x83vBbw5GArCBeC8SkaoBbdM8214JvXcNwS5rqanFq7noQmh9MZkGKodG9iCoiv9CjDBoLSZiyYXV5",
  "key7": "3mrT816BoSt4dcJgYxZHQp1NAX2RRK5CsqPmX8teDVX7GrFZAtS2TTfXDLVwPjXBUupek6FPEyh4iNaGEWZMhc9J",
  "key8": "64onkSkHpSsiMYZqpv3nXDnT9Vp3CTan4jYjhp1a5QjRN7UT8WSAnKQK5ZxC2PVxm21EQY7SZgHnbRqJ43gyFywS",
  "key9": "2atAHX3w2dpKaubt9Dtj7XwMZA2E4YaKjPDUGbtGzZpKbqy4GhEPskgQR9kcT2Jh44hr5ogAVjbXkRTo56oZ74i3",
  "key10": "4c91ff5pYWybjpjEkuujK81ewhjvaWGxqFMGNqif7MgDKBsXkSNhh5bvk2eAUsE6webm2dfk614KAEkJS49YAyGm",
  "key11": "5P7XEkFGTaRPEoEGpRB5tQ9DfiRzPJb9HREeF8pe6WupucxF8kANmbxgyjZoPSLrY8f4sfRyci9nqQiR4DSLmoDS",
  "key12": "5f1hjes8hMZ4dSdcpNvJzQUPG3jKJr7Jez8T7uTmuuYKYgvsQ9zX5kBjYLQugNnAboFC1AbSVHSqhWzXLz2jbLMv",
  "key13": "D5uZuo8222xm7bTt9A6igy2pbeQ2iZ7czMnmNzWHzC4jk7zSjUz5vSMtdQCWcAc9PAa3mE3V89Lsa8QfRo2K2xa",
  "key14": "4BhduDo2HUKMMywiGTuNEG1zri7pwZE1cVkuW4SiqeKTcJnnH7d6SyV3EAmCvhBK1cYKFisoUFMNQ6YLAEDSt4ay",
  "key15": "2TZQwKu3McU8owSHAmXiaUhoPi3DcZPdf61MjQrEKCoQgSKirEa7eu6ZJFeFNJLi78EJb7vT7LipK9o5uo1Fz9gA",
  "key16": "4BYCH9PSSJwbcucXMvUBpDhUZutZtrtLG16v52eRYM7yKUwndbUr2ThX3Sg39wUP2sLGMCQc7BXoU9QBY2btaTST",
  "key17": "3b6jyEGjfLWGQsQorxcqfPiSu2beQ5cMbsK8hiEPW3vpqnKZcfSiABvkwSsi3MTtCyJ3f5AjRJwvq52jLGzdtohS",
  "key18": "Uc2u7PEPznV6G26e6cUdhNmFkpLTaPNodbUC5LuzVABmTw3k2pzrFzZALgL7gi8UUXezxzdagDeiPh5PUub3ro9",
  "key19": "5fHzno6akBbnycep9dhAg9cEFGh9VUgJBgJgHvS8TtP7NYyDf5ezTry7Y3jFDYsFw5wFoBSqW2xpPr3JUhLm1GXc",
  "key20": "35hnudq7ajge5KpcuJ2bWtCNskrbYg7nz1nu7A7fiQdp86mUGrCHX6BBdKCmgDwosihqFE4c7RBiwrzCZzNa5Uo9",
  "key21": "4rDHjVUakuk3cPxRLLFY7AcWEbHrkp5zepJ3EbGSgcDRdz2jnLUmgk2jxZHwtDx5Xt8cqTk9p7pYA9iGhXKm73j8",
  "key22": "5WFcDFhihTKyxe9zVnYKXrLQ5wYVfJr5EU22uoQydB9jmhkfgX6GyaNFx6w9bP2HdarfunKnpH7KXrYTawbjSEHK",
  "key23": "5wqBh4XYu3PsPjtmBY6qmCW3gNgnk6HU9yBHXZ1LZFWbAeChY8MEAFWTe2k6u9iDxq5qcAAUAeeCWLYpvHrQJ2Ej",
  "key24": "4bNQn46hNek6jKtp5Bava4TkEc3xEpbYreQTpb8ju7HGkDX6u8FGSdoqcrsTcD9aL9wyo2P6MeRpidHd1PD7Fftd",
  "key25": "5TS1BS9dH1rjUzv3XZX9RJgNaCUM2ytN2GsMdETWo5ygbHPXSGn8TppXLexvuZXEgGhGXj3UwW3htxWa69kxrpEe",
  "key26": "53U4itocmyer4PTCoenJzMvQPCrh5A9zEb1nNtbcQRtASJaf6ZLxdYYjcZbqiaHikPLwSV1ZqXEyq86uok6w4g3x",
  "key27": "4siAhEx9goiPWWhuc1kbu1HqaX1cM8v9gxbtHZoRPQN7rDocg2W9NGPBmmAdj7vQP55CaaiHWAWuttMwDGNFSikE",
  "key28": "5tMuQPuHYgpnqn8TBsZuKJnVpkkSv2FHH6md5QHdckY5yxjStnS4nCs34CjcUz98zLwWBQvw72J3vvzoRNyPXuJT",
  "key29": "4qEE3HddE5dLHDbJbbo37oj5x59EE2HUczRxoopKyEeHpjJGR555qNNKEaYjRjQX28g3XicPtFohRBeLPpgNeVvV",
  "key30": "3sn5rtSxLzCzwHELTqf7S8p3xi3MXefQorHGdu7eCPE1XurGbE9ViBodYQipYY6nSVophMH2K77cwGuFyn3wnURT"
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
