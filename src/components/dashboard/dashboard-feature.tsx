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
    "2KwxTpySAaPsNyr7uGJU6n2wam2kMikK2BqhcAe5vzR8Bk52Xtpn4NxKQ9BUEg4TQQ8MPqh69BCcj5mNCeE9LdR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMQxy2p3mnxBwvGzcKZNmk3YKMAjSb3S43ZmutDzwvGjvab9Vg1L8WbRniwKNXHT25Ac7PGwCpzfkgK7QpB8zN4",
  "key1": "4dehVdb48ghSGpBpEwxyK81bHnWqFVtW6YHfafR3PkjYSxL4M2oF9aGwKHRPG9ZbcDDe1vdZTjREbDms1Kmdn25B",
  "key2": "gmKeBdouYF5mkGWn1SqKeWFMwyGMkKkuy6mdahbAJXzfXRRw3TYvkQme8Y3J7JPzrKH4jB284hWyZk9UKxxPBj7",
  "key3": "4d6MLJQF4vFWtppiQCBVvf4kJUrzs86rvF2oEhodkGeLsuXzMGQzmjG7Jt7hGP7hjwA8dFH1tNq9mV8meABcpaaA",
  "key4": "WRF1ha9ZGvARwUMT5nkfBrUUo8dC4exsQ1hMwjZQ8wL8TovHd4PmifNjV9jhQu36Mj9j8Uhb6wEcvY1XzFxYBfi",
  "key5": "2BuE6wTU5YmLx13V4XSSiAMhsT57BZ2U71CyV6TeQ7QY2bUc8SKyPrp8Jor71iLS8v7CbYYC75RBWunyT4neaM7h",
  "key6": "jjCVk6Nb7EFXmxPek6WWUXJAr9DBECY2coXk5K8GNmYmkcVFzd8nRFnRH81BB1HV238y64xBtnUETmCbPVoLaCg",
  "key7": "3oXvwRDzdTs51A8KXWqHQG82Vftdxz68n3ku1ZTD9g8hpgKFDLysKHxWPSu5WWFFdk37xa4rHr9hvLcT9nxr11rb",
  "key8": "4rMkfXEjMohdRxsZCg8fDSeintQRpNtAXsWhNS2cGGcWtwLV9D6nzPyLT82zyZwgs4u4xb2gjur9XVEzFPm9mUHT",
  "key9": "3SWEfteB3GVsjhg9bgRdQQkrnqj1cikp5YhQAvaFGncUxQke5mnw2tJb4Qhv7DPy29nDEpB7mwwqsZ514JpXMtX3",
  "key10": "fwmLduPENmMgwefjzLgMfB2Y7xsTp3QNAUy5kompUx1oukEknpjFLGmdFtW8rA1E25EgYBY8uWxJw8eGnTeBP4h",
  "key11": "3LDxgGLE7BfSzX4E2TWAh8CgT1D4u9v6cCWVmZ4BCSdWjzFkfZUGMbNVigRqapej5Euks6o7ZR6CQRfQVwn1tqj1",
  "key12": "31J7uAL5nzPitSkVCZSXefa9tGmZQrZCYeMnt2af8oTQj9JQJEjUfsxNjQtDmzLCjPAuoHt8DhHdx8dHs3YWVMyF",
  "key13": "2uW9VdFgd1jMbKLVvAE9AgvK1wkAPoTztRDCZCcrHTp9vAPiuu9m8uPxMcs9N3sVJPqzsXiXNKV3T2K2HHsV2GN8",
  "key14": "5LqrWeGo4VreQJMqEuWBPKiGRb7spgMcnXreew9oSap3AY5crcxVrViYxq352NNKKS2C3YeZWpHYGpLkU9KvUGyo",
  "key15": "2Q3tjy4KPRwXxSfbDutzes7USQHCdzqEEXNqxJBntgc993U8mWmMscrcjNacG4zvdFpaz2Hant5YzPm5RTLnb5eg",
  "key16": "5bnqbmR3qPTR9GY8xPeWSpJDk1M4dbCEvWMVS1h3RkZWHPSDn5hd18BpagDYECbBf62XyvsgwbHy3KKD4ieZ6d6N",
  "key17": "5MnRZForMenZUSr5duxpiP5im94wA1yivQ7Jg2MBsLJCU8wFUU975gywxhSLAbQNpTLcxMyHVS11c5F7qtCJduA2",
  "key18": "3c4PnCBhAXccz7AaBe3EwtxpHsQ37yzRFodoq2MExypieozFKdch5jCo334yjwTmfJcWzA8TmxKM8j4ad14hEpgs",
  "key19": "2UPvfELyfjhbjns5s3i78T4vNrteQYKBdLarSBDBKoB4nySFojXeJMZkqzPWQLEcHR4dVQTGhGpCGxs6wsJJf2GR",
  "key20": "61ywc8EvdXXemSCa9zfEFoxWHeLum1gaX3RguKMoxuy6xvzYt77HmEoSQSbWkUWQ8YCBTFMwN9CSPmYfVzgeptSj",
  "key21": "32McoULi4NZWyLH6dcGeRfxiDbZAdT7wztYhSvWZjpXXTUAjxyHZrfEhSZRTQu7dJ6zKjSmUACzYbF2UC25RRNWH",
  "key22": "5CVvyQM9v9JCtCs1TwSN9AcBvUNsSXqmck4gVn1mLPRUB5U1tgjWRPxpJSWVWK8NACAYhgCMFvZPt9oRM3fiWmR3",
  "key23": "4LQc7S9Bfk9sxS556qrCDfj5itMPC9X5TKLMa2YhUNfGRA3hnrjRLpmV1fv66fAG17koPgo2zZwwFXMaQqYJFK8R",
  "key24": "3Pzr3TbSbrMYXrkyYgRoP1tGsZFNDkatBM9zWpBRdwEHJFhLrMTpgxT5mL5LMhoLuk8oMi5f6NzqDcbvjauutgF5",
  "key25": "3Cw3Ba7CseshiCs3FVqcLoFYc48dn871WREDziYccSksaxJcmQpzBNRz2fLo8E6MuxNSSE9x4GMXRCJVZ6TKeHxq",
  "key26": "4SrcsKJ2UrRc61gPwD5gdx1vGaT76yrPcxEKT4VwGANirf2cJJbf5h8g8DQTTN4WGGvbqWvP7ooR2E6K6HyjMwWS",
  "key27": "q39SQ2SwaR2eQgV7U6obx6FG1249YGLcScMF3DgaRmf2BQ5eDi23PM3dFqACzk6gWAvzohncjpuAibCTWp7LjnV",
  "key28": "4ugDKZgjZvybZbgFkGwogbQiLfdQ7o1E6y4cSwLfiWm7UBv4kLCfnDenSkkm6Qu57FaV9xxXuNV9KmtNVYnEgV6g",
  "key29": "hT39GwXujXSMhXBJZZWmNCPwDBytyRsc3mYxPYMCWLptyfeWzzbuJkLDv8c2DXVvwfTbojC8rDsci7pC7PSQxt1",
  "key30": "2xksYZUziPaaqE2muCyd3XYj6jwZusWW9h2m1U8fbpBAQbka3Du3Hf1rjwNqXRXb33MqAmjcuprccNjsKxMg6568"
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
