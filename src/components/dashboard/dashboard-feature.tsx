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
    "2D5GhJWhXANbUCf2bnCdTFEvQihsDyC6REma5e6R3XfFgx5pWJR79SLEgbKMmgLWF62E5X6Rqd8NZ3ArTyqkUXsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DeNiyHNFnrtHWTUcZs6EVzujnuhvnqHFszpioRPNSRHAtgjCcGhNcZRbnJGo5MPy5gffsT6DbWxC45VYEtJ4337",
  "key1": "3XQE84UnDt64uUusdHsj3B9YjQEpcVMbxVrQoVPriEE3TbkMtDaZFDeoBCDWBYqi48kSdHrhSS8C8BgwFW3rioTX",
  "key2": "3aQSmvtzP3spdM8YPGNZreoqEEnnHyYn8xUKZCViDiCEWLxyXHYZirK6zLWtSGyihWSMXhPGR9CMnGwTS2XbfyPT",
  "key3": "4WF4Zb6ofwPZKyXFtxzo1ZEBXHDJ4GMqYyY5fAdGkDv6eHpCLQQjGTo4rCJhXtkiz6Q5scZzXFnuoBF9z3sQdW5K",
  "key4": "32Hxd6jUU9BucMQocTh9jaddo8ujc2976DwdYJ3dnAGFbi4TejzE2DeArtr22RuRGpEA3psNzDeQLxA5k9wN5Nro",
  "key5": "3YJ7wNEJUWGKJXyshsLJS75abUy72L7EvBc6pjmrPcDFBbDaybi6guiogXFTnuEtj7DXREsC5nAdBC9iRApVA3fe",
  "key6": "46J1FSNHk6RdgqPA3NJFSaMhzp9qKo2j21QXNW7HFHx3tz3C7RfXYUNn1Kac6xnM9ViVs6dV4CVxX3r3Vcta9svA",
  "key7": "2m5h7VAbsvCt3L6m4me9eXBxLVK91Kw262hEJCdDAisFr1Xr7MhMDzag5xQ35YeThJ2gEx7LAUskWLbkuwbW7BGH",
  "key8": "4QsAvU3Z9reH5FDd3TsaqWsr4pUjAuetq7pGNPRzM2Wt6a4BDjx657Tjq3SkQUuexEfXR1ffPbmLX6EZLwL1ckSv",
  "key9": "ZZ6kZh1LpsBTZHVcyDMBy9S9vGftE15p4A7rayCkPMni3Mgb92Ea9RfFn6CcZHroPAgvK7DYu9H27jukXLa7VQi",
  "key10": "V3ZKnVaxxdvkeCCJiuM8pGdRV9SePnNgNuuXy1hi4VQXHjD1oHQn4txuXfWMLoAxCkCBLcw2kc1WXm4DFV1s7WF",
  "key11": "UV9mVk5ZfDFRPw9if1AQMNipTK6dBGNYX5jUnGJJA41hgMghDDMVzKqhkcxPvDK3vf3KKyMFgnfLWhHrBegNdQ7",
  "key12": "3xw7FmSV1p7ctiVhL6fByuJkpQQMTwmUvgikrRnE44gBvU9HZWToPpN5ynwqQeLHXvHtY4WU7fzr1NTa6tp2gX47",
  "key13": "47a54reJUnrFMZCq3WpnYjapCHet4TxjYUso1ekGadDMZXt7nSzaWFPD5njxdQqRLb5AMLfhvXu74zqW6gMXs3MW",
  "key14": "2JZgFeCPqwgmUkRzKhdy7qngq6HUHKzW429rqdTD95vr3grsQGL8HHwqPh587y464DfgNTDbT3ZxXZFSiz4HxWG1",
  "key15": "5o6ZSscaYdiFEC52pjoGd4WshyMM5623xvceHHEeSrXcbnkZ7bRmpudxSxX149SGA2NxADGvne4a7LdoBdUbSKwW",
  "key16": "3trh5bz4XYnwUSy9AeHHRnoDM1w93RBMx67ZsQvjgcsPdWpPdAoFYUkgYasCvik84GQXnrakL13nNg5xB8ebu3Aa",
  "key17": "47gvFXoFo4KVVG1hujcs1M3eFbf6WBvY6D13UNxviiacGQqK5WKKjJs6mC7gPPVGH9mucqHxaZ8vvxqsQTfubhQ7",
  "key18": "4N6irX47zzj46tC4bhdejZYg2ssbUYsTuqXSymPG9MwWcdr7cNDARavvXrZAZRv2C1TpuA6RdDVA5thW61K6HSw7",
  "key19": "8nMrrCJh6ge3YpegSLejFFGU5Q8g8zQm4Y1pPt68qFnSSJ8qTecvTt2rCsQENRpBDusa84hWboGnzUGWZYfnCUX",
  "key20": "2WrjcZ6QbMehY6qNo1Xjkr4n5ZqRnHMLxwPMTQmZAzGuXnpyKauzp1kHsgsht1Bm2gx4oAXAJ5rqTaNEcMKh8PR8",
  "key21": "4PNbzPqkMk3anpSDVZar6JqU6zbj93ANFtB34VDFTbgPMcyCaArRBAQsYkBTZVRoebZStRPTwHEyTbjitFGxkxcs",
  "key22": "ugv1AbVRUvjfN2qLMvGz7GqJrPquSsa7H9f17muMw54A3izZfhYuo5Wgi3bAdbN1Zc25Nq8iZUnKZRK9TdWEoVC",
  "key23": "ETuB9UkA8GcCjhg6kgEtK3uuNEPaeJKV6STauwvXE6mMBJHNXbioeMuFhwkikiavbFHPi1C4S8WD7YDCVKKekp3",
  "key24": "qCTrjxzEeCqWzP4BiBJNAQqfnn8JTCvZXZisrpEZeNG3NMHDvazFqAcj1oVX8phYH9ua8fLtcmL9wNH3CjkXnX1",
  "key25": "2kAxCayqW7Kkwyr5DnCLuygePioPxbmFzNsFT4hewmkJ162BdUqvH1MpKtV6Tj9BBFsggoh9uwSLzJGzydje1RCC",
  "key26": "4XhH5mmDbpJxbyvtJzT5tjXpLcdg6Gnhhoheg6XP5yw7c173WifYDFGqUYgowMs9Jr9ro9fy1Jgu73WFJVGptECQ",
  "key27": "2K7spS9gCDSX1DbJVJGJnNAY1G4kqi8ozmv21qkANea2bCAejmGhYuCPuSBrNBWKr5ACKYcgKbQhtpFpotKfQSh1",
  "key28": "4xQE21tSB2XtAcrGbHpdtgaHQLA9JpCjwWbQFEN1SEYHgK5AAdTgcJauqobAPWTUWs3u49GLqqHZDVuB1BfnnLRu",
  "key29": "AKQFhduXTnEAvKmSQNRtKPTrURWAoubuZmT1viPdbsd5zpLqk5MgrsFQ6eEusmump53pXJyzzsLWmq6rhwSiyRp",
  "key30": "388WS5sewJJ1xoFd4CkQ3tCoXBSbHsqwecLztHYTJBtC5JafUbVaj9aTQBnY2DyuBWoSa7cRGDo9pgAVBoT6fJsF",
  "key31": "4B8WDso4YJoSGn77seebLYLkNnZALpskTENJ1hud8zthPr2eqoNQLrbDbQSSSFeqbVuaPFNrYVxCogsvZav4nkXi",
  "key32": "5D2LaKo8Y4AYnyWCiP91ypuQZGtechrwrHuhnAbx2RyFqJCMJuSLnLFm9UKdsWguyceUpotWaVjoPhvGKiCw8Gwj",
  "key33": "3KVKSH6dLPjVesmBz4onTe2vvUFqTBUoV7vUgzZHGTcRQiSnqGdwCQmxDNa4gF8m3pyFo8JnW2voVKsQyBBSnXBz",
  "key34": "581Sxte8uuzZnyZaQiwK7KuDEPxBtH6epViTCkN5vo1GaGXtRFPYkCMuSUyArVYG7RWt1PaBzEuJSftHrw36nHx3",
  "key35": "2ktBiQrMHdwJytZiBVnSwVKiMErypypYRgVRMC2ActmL3epMqtmsRN6VKhjC7TFhgb3wMS147Nr9C36muH3uExpM"
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
