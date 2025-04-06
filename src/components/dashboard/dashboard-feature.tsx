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
    "4gLYgZiYgAnEnF686XXiF5mujwYGpov6TnHwU4XYwPtDAzXHLqFpUsSAVschPv5ydGqxeJ1y4PeNb24bJPqZe5x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2Bx5FLThfPRfzoTcRtr6G1kD54PF2DSDwHPfQFs1mYNaL1NfBM3XyyoufHoXaEnbRgvuJuikzq4XqbucQzW3ug",
  "key1": "2ACe2oQzAUdC9vT55H1QuMTw1GK2x5xT53ZKr9vLy21QwH9sSpAjSt7dN9s9Z7sWNpdyzLQwoFx6ecHD4JhJbteD",
  "key2": "5thKq8CkgMmpno7xuPdDqTJWLB2eKrGCh4R4xnec7rRLUAAuoNP7EvQTbURLeCXpPtge9zhgwGHJTfBjJxHo9xJB",
  "key3": "4tuVAV1ign5LkqUow8Uxewf3FUDs2qeYbYbA22BLas5EfyhgYTtwGrs993GAFiqRQSBE2TryDNUozncwwqiD1X1T",
  "key4": "3Zxj52keki5QhqN31n5t8HyFZqX6XAELMimbQ2YYPtsYNi9wv9GUqfoht8Knjxaca929fBDb1LkLeYPTDicUwuGy",
  "key5": "29VrCmF9RAmJCDYQ5GdtDUf1JtuaLfonX5jcUihSdkAbjRdxnywyHVTUvc73ZkyL3S2AF56cZE5qPLu9CF9UDUp4",
  "key6": "5ZLJH6eHov6u4q74KwFTRrdzXUdgnADmYNRDDATT5CKKLr4vmFr5Nr9mLy458vJqxALeA8Q9w9GPP2EcupnAES1g",
  "key7": "5W6D3LUa6VpnjiX7CrSTcuuA1bFDh9StxbKyCKfiBvyvEjD58bsKwuT22nm4qN9bVzFaCUXEVcimDyTipgppuKdA",
  "key8": "hVdQdt7mRicBgGFUmbMsbSXumbQNEwivicESZvor4j3HUmR21Jx8YWbBBRtyfsVkTrHPoHCFN528tkXyaw66MH7",
  "key9": "pJPksAm19u3WG8u7HfLD9jDNm72R92PFofdXDTXVX2rtbgtKs2696K9Zpq2YepFY8g1FRCLk4Nn1wHuEWwtGKxn",
  "key10": "5xGT5X6QK9bYFwkcy2o3eWc9ZXRFwjqDQq3addE1YtY5LJorLvhK6CmHG3Ue4fkU8niNfHmV1t8uedy929N48hnx",
  "key11": "fNGSGm2memiYxq9RBUnSy5u6ASwfKQPygGCnNaP2mBwDrwZz7WL9DbXmVcrNQzm2v8wND42NLPiPMFoyUp4iwxy",
  "key12": "266eSs7JuXo2He18xx8U4dVEU5i2QWzmpyzN9mB7meU5TcCnwCEpYeC2QLLGHQbFX5aNDQJJEKBDW57zSPWJ7WFE",
  "key13": "5ggd9Wn2WuYFDKAsgB9iAMLDXGFPP3TbDaqYFLD34iWvD1oaMaGGdnbTa5ZHc9LyDyMMmjutcVJ2ydENCiwG83Zh",
  "key14": "DF2XbhqBpJyfGudHQs4CKiubVjaMEVofVH3bDwYWQcGxsJLhvXgPKFxFBAbXRkzDD7c1MymcQuZq5wHURkRkgzW",
  "key15": "xCyUyEDCxThbtaLGLgh9GAJ4VVebG3dWLu9BVVgmW2rZXGqGoZANZ2XCPfKPBTxsfsG6vTEQXoXLNqTZtV1w24g",
  "key16": "3MEjh7DE7KDFKoPCvJm8aqRKfHAVR8Uwp93fb1xRhAUricswzuH47WmpY54XyCYRmSbY6fzVHzcjG92PbLihRYZb",
  "key17": "2q7V2o3SRe2H3iBHJh5W1Noa7jM83Bi6eSJESRXB4Yt4j6MRNUCrS1wA4Rc4AFf3RrGDSoWQv1qWmrCPQLvBMmhM",
  "key18": "2pq4Dyifa1c6nuQYZwJi6kP5oyc3cktBipnUXMvaC7WVneaBcHs3yZpmTzEcMsuwjtEq7UxRGxERem1bgmGi41Vn",
  "key19": "29ZVq1mj7QQVWQR752oB5D5ZEpqmfNKfmp2ptpzLNZpochgFUKtQghnZwGVt8S6QJX2dicFmLwUHrhoU8Vegzbnh",
  "key20": "4dponxG5xfQuS179LB3XFC5fQvf5z8xy9X9oaXFeiJaxXzK95JJu2pSJwccjF6Y9wtTGSPo3J1T9gjoMsVXKNGnF",
  "key21": "2QVg4xKqyvCD7QStR6ykhT2A6GAEaXiPqEFhUboMuVA5kAhCD9U3zbegKqhtqnz9eQ8tNCo3nk1WuwSCaS9EXaB",
  "key22": "3EnbQLQiCQJMEydao7tdSqE3wx3e5A79RivxzXfszo52JAajuXnrqEf6eR5TyW2KXwFFZ1C5nVo4JJ1qGSkFu9FS",
  "key23": "52jTpvqNcDcjdpeTDwNhYTUzmQXPAWGFa96bydHDnRwqygTHVtmCPDm29yCva21YgnUzC1DMckDsQkAkGrRwmGay",
  "key24": "4CAqQAjqGFUJneW42zwZASoAqJ2StkP7N9DHRYRCHYR1A7mbe9vDqLjKDkomnQo5bG9i9nmK4YXM5LjBAAqR2atN",
  "key25": "36sijCFx2SXkyaL3HHzjBo6Nizk62Me51WQtnquZZhzQDps2S4SbAomxswjeDgjDcJqz3VmB9NHyWSdbWeJXXr7s",
  "key26": "32Djs2hpDLB2kx5mKcRS4jsSBgh7EK7PL37GEp9hghd1mKL5buUBbafgD5cVbvh1BxCmgY74KtDuuNyjGhTwvfUa",
  "key27": "27wZdbc91UdhJQqS3hnGuhE828PvYDQ9BQo65dJn5ppL65iDCLxZiURDQ5sJUUCjevpDoJHfetELJKG5W4YFr2ks",
  "key28": "huM9JAsSqndU49NZhLbX9UW4t5w9AMrJSJJRqfMm2P31MfT6xnHRLxt1vMM1TLuXkpCUduBQuyFZikELoHvy5fc",
  "key29": "4kFpTBazVDBkrnnexNiPbDLBjd1i1He5djU2sWNAJ4s7TfrEcuaSbMXB5RGiYQ9rMzFjYP2mE4eNLH44uju6CQMP",
  "key30": "3NCtuq9yMfmHWiWws4Mqbe72G6GizJPq4H4eq5rqSSkgzrKFahxtsV9KkQjq33zapFhpsy6ZCMRAf44vghdZ2Bv9",
  "key31": "22Mr1ghHPKepHQPEDfqY6LdNDLsrCGoDMfCqgsKfKen3DaQMNh3smBepbWX65chiATjUMxBKwwUbhdX9sTDkS6EH",
  "key32": "33uawbi3TqP7zuTNcUh2jACeMYvrEuqZXHxmoVegeEpAjDvo8BMWn4bCqiMPoTfBET9QPra5vyS8TtuQG54npvfb",
  "key33": "pyb3EMEw8kExHZZjHnUH3erYmP6ove91YDnbQDz41nPx2iJAw1uEiff6BmX8fqinFRx9QF2Df61945HpD1UPuTw",
  "key34": "28NyCwMDhU6FmHfL9tVczPsGwFXnMF3LL6rzk6kbJxJggj92Ukup8VJB7Nqtss8GzJWLCVdWmytGQH48j4YbZgji",
  "key35": "66J27ZmQfnV5mfPezdPAUebQos8ici3rRkWo9NUa5VMUhwo4ZLNsro6FkC1L4i7WoyvtMd8PvMBmLKThRinB4qgj",
  "key36": "4KkZP9VqhjG9M5dQgoKvxgmKF7dvZW3HoSWxzh7feTAdGW54mwefeqNQWR3mprnU1eTdaRTdCvLjgRaPb71KcW11",
  "key37": "jbyt9tE7pmpytsLdGhyYgD5YypJu2apwumK6pxozeXDb37B68SAxRY8vXmi4GxvFU2CVqCsEcNdc1zwWYrfZsy6",
  "key38": "4h5PvTFMxTU3TN6i74igkztMHWCBM35AvpXVxFzb5ss3RkbRqzaUFyAwyMWXf5hWaJmfyu9nv2E2aqdsxRdhzTsK",
  "key39": "36AQjdJrUEhRfvGoRrdn2RQa6h8i3VYYr97ghepmnR7RRTc9UH7RtD2GdUS6YG7W7YcRsMSkLTsv1NZP4pHTitBE",
  "key40": "2dmUcKQTgsBAy7VJzrujrwmWdQ8aW5eCR3bhQBmuzmvX81C5GpqLHByTK1yXRWsXBwkmKfRqrwn9dJoa86jiNtKf",
  "key41": "4hViTptAmbCXhmmgLs1RexbdKgDah8qnk8DviQbNNbFj17X3ui53JPog4vstaGfWHkJ4hUVU4d6SoxD8yxPta6H1",
  "key42": "4WEVeHa2C8PqNEaSZGUsRNb5VsUGnFPgJ6Wk37JTyfQJ8FuuV2qypWdMyKagt215km7ewVgsgHMV85tjNTvf8LR",
  "key43": "2iZkQ13umwYMEf9eKmbSAbZLzhuXPRQMReNDNJ8e3qELRfifXVLsAbNCiV37SwPLj7a9JLhi1vscMrmRKnBAhnWV"
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
