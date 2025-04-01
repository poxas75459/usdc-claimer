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
    "4Lr3ornD44TXX4gjSzfsBKDopSWtuQ3ff7MpLVWF4yis7CJz9wKo25SiNXiHoXZdwBpAtKbc7fKMGZUz34DL8Gk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DeBC3dS8N1BYpS3LdzY9BpyXCdRyhr4mye72tHRDrAuP1RNE7BRjgnEozXMucmHxRhdWs6v5XaS7pYH46b218H",
  "key1": "29uStg5PHFLaAFroofHp8qxozDQESh4ixNrbTP2b15YH82QY6PTLKh9AEP2chikhHvHPDRYGFzkPUqsaKz5qWQGr",
  "key2": "59YPP23PvkEBoGyKYEXg2ARFWScM51yCjdFw8zAHaN19RT2YrMKM9DLfB1h7HWEwb8ocH7eefogMiwpCakWwyg5e",
  "key3": "qYVvf9VTzC2wykSrXzJJodFTBY2od24oMDwAsuAHHwZfCgSyY9P5pnDFiA2CTmz7jTpiuBQ2pXxATQ7EQJoFwjS",
  "key4": "ycU7MLeTkfcvd9dNTZu4YUVLSHGcrYU3J2JVURnriwvpb9P9sT6mYLkirVMzdMXgMDh9TtM3TVgQzZoawg6NFoV",
  "key5": "5mepXj8pF2KrhgUboDyE7FUrDPhwtr5Xx5dFCJ9AR2zVkS9kB3VdcoQA4ocJLzj6b8C8Hx6fTQM2wMAbkvzbZAyT",
  "key6": "2GN3UKCLVA5VsQiMFbqXk64cLW3WkZ89BqyCsEQqMKVbCiAwJTYJZN5LZkKVGGFfvWXGTZDHAMkVegVMQbRRdvX9",
  "key7": "kpSKuL5VuDJPMmKcRaXVEdfzhKcwavdTLgCxFRzUR7NNUXFAtS7b12stq6uqGMuRVWL9g4QwzJa3qEcmTVduvsh",
  "key8": "5VbniBmafuC1wMCp5fdsgzirMdUsbAwhFgCb3uM5TFzgydP18DNRMi38P2ESdPhJqgjDJAPe8NUfsguMe223efCm",
  "key9": "5FTqtd7ZAejientAznLyQqQAu9RHn6xcpqkQZVsx3QvEsRg6JPZ5dx4Y8FbhLuuWBhzwzdbNgY77rSNJoYn9ST2n",
  "key10": "4XT1pAYdNQkXsebtVshvtNHfdu9VY5XD5TvdEuwbqcwo9whit8K2jisJqxCzYxRvU5BmWHfGdGNqkWNAAMEugyZt",
  "key11": "2gqXJQeqzAVapHHayjqAURDVd1K3PtceuBQzdAPE2mNPQ5CYGDy8jajmJn9CMZSPD5LcQipmWwEyD4hNZJgbh9Ld",
  "key12": "4fCAe6neqGRpyMgKV8n79Aj6D2DgatPSfd9Q3ytHxsSXrfoXC3VKfHRCy6gCXTKduWaKQzYARyLTCWVzUErYuFxH",
  "key13": "bHENmNNNth6AKfpAtPLfUDv1CdK8B44f5XtnLjxewgrSSmap6zQoJbkraSjsLwyjCBdRZuRFzsJj22aYu2LvRX2",
  "key14": "2HVusfcyHx8rPgTjUnCDeCDNCkARTiawnvC8c1qytkmhrbTxwcXM5LqsrCuKAADKGhHm1sxG6AukWb3He5njX8pA",
  "key15": "en6H1ueat1gg5zqzfA3gmky8B5YSVpytvbMyX81cWjecy6Gs25PtmNTKuehtsHaQ5rzh7sxUBBVUJ2y1CiVennD",
  "key16": "3D4CdnVqLxfV7Yz1qnc5uxYXiJNRUAUGJEEB5n32R29FyU82pc1yBSJqnKiei9KofcfDGDV7MAtJ8xfLxbYecLZ8",
  "key17": "5JqetR7qc3BoAYcat92tqtAC49GMkiWXk6A16F6mXdNyrhJToJFYUJV13tygtS7txmm3MRRTNLPZxvbPGbw2cf8Z",
  "key18": "5YGknB1d9sRCsyurUZMAdUwssjKEVLeH9QPyXiH6u3bjzXiPr6JwZ33UgsncU2Xn5YWQ4qLD8rNqFqGK7XBZGHEc",
  "key19": "42drFPBgYLxFhb99apdvEen7PZ9fVVjQFY6fRJ3431tGfkgo5TGfi72y3aLv6m1w6fDoFsntxirucx2P4WsqCfTP",
  "key20": "3h4ScnQ5RcK4jFXqq6rPGB2YxBZAmB55PpdzNCev9bjtkK4XZN2uRYCT4TC55wrEDdfyAdfrs2kHE2g8u4U2KVWZ",
  "key21": "5G6zos8cwHfHt71SN4TtzN2ZrcYwiHZVWDu341pFe135VF3gWWWUGtxjCaVxspAEgvbCWX2RpbmRusQxsUJSh7xr",
  "key22": "xZ7eMqLDcqrAJjzwmr9JudckqkUyLpCMEok5woDMogDdim87xU22NMRFEP3QdWJMQRagBTfWM23EGDr9qYNTre8",
  "key23": "5yaa4JZaz6ZbSkPLu4BMiaVnztCD4sUsRHyG8LrYKu7h7TuhvTfAv9kJPwp5c53SZG8ErPBhZEQQ7NxRzPuU7tdb",
  "key24": "47xvP7DHCaRaCaeD1L4Kfwb4bKVjjHxD1KJwzncPCDiomzgUiyEqEPAynedjD6duP7MeJ6GyrJv5yGxSqbAtHEa1",
  "key25": "5MF51UvTQYc5SJ7Zb4G9aAP5pjomJQdDrpzHyFiwg3M7YF91zbueZ78NupzqHoh3JqTY1t1EDMWLjXxMyWuqmiUE",
  "key26": "6DNtGaCsvGjz8AVzeigTMwqvGh25Pw3PcqpEx2NKMxyZKrArBBAr7xy6YrgPrTR5coxnZY1sxT83qEbNtSeZecG",
  "key27": "3S2R4msJzkG36rWnSkSa7FJTrh8B48swynkyzrFfSdTjcVU1eEMLthxYK6TgVummSQHPvkMnkMQJfwRHNLoVf3Em",
  "key28": "59HXaiQSmJw6eLsYLbAL5418jGDPVmjqKFXsyRaYXmCku5qHfpc6LbcJz8vvquHgseKuEN8GxrJXV8EKPfmUk2BV",
  "key29": "636YzE8oFpBYMHCZv1eNbumHiSviG2YyHoXALtgerUJGZAe1MCUmPLukKadikcto5AqtoyZzzHfiPDcssjgkr8wX",
  "key30": "2iUEhuXjVhWzXtsYkjhqc1goasaD54Jbd961SiUfDvbGgsUVwWkZ29vj4pCsmU6MbXkZtuCHin5MP8DUPJuVU1Q3",
  "key31": "3rvxd3A4xfMAQ1kczjbW9iQgRkfeqk5L1iAzWLQQc6vYNxDqjdEn2kkApZ2MdYA528mKQ26yhiaEMhnpxwzgdMdX",
  "key32": "337aVRuX1sPmfpuc9i72thg6fYfCSYAaUsLiHZesZy8vzxNMiYGGRJm3PFCBoGnzYeGP5fzt6cyZpyjxeLtHAXGv",
  "key33": "4ZAgbi6A9VYjs5M3EDGoDTWL6rx3bnxvFEuX15CHKAT46s1nvxfoE3BtH4C4Pw44cgvuYcnRE1MEuhLaBGkDRiip",
  "key34": "4isTVZBCpHa4PQiRkKto3fRqkVZWEMiiMi9A3LcmSKFQCnKbwQW3cVN1QsxuRi9c7MJHrUP9cHrMESi4Fa8fC8nQ",
  "key35": "63M8JtvWsWUQpoW2VjcMAgPuy7T8rQiACu7PWospRKgRVR2VQ4aoRyn9ayMSHtacwNaAp7hHAf6nwqaJAd7VGm6V",
  "key36": "3bfNbhFqEGc5KrNvzca1HCrVAhy1DQfMwtUVhkdoDnrmmLQZpi5MZ6ibTQ1YrqbJCQV4MZm6eFsUuyTeGMT76kNr",
  "key37": "2b94hYxCrcf7U8Gp6JzBkkdSXANomFDfWTGE7DjLF5beHM4djRoZpmSUvbcR1XY41DcvyxiaLgoy6XGs1nX2ogWr",
  "key38": "3J6iLJJcxPRPJxYsGrq4HpNAV5ytWWcrakiPKGTJZ2qxS7DnfLA9DXMfuQ4QLLhzZWuKTpB34eGcJZGd5a2TNdTr",
  "key39": "s58qnb2CETcqd9yRXcCRwXJbHacjHjTLnJfnKRftxKMEtXPddHTyPfTRHtKzFUGJJcd6LU9vpP7t2f4o9AT3Nfc",
  "key40": "2UAMdMU9pXq6fJhbCkmpfHs8Rbx85MMsrAuB27e6X9mEzr4pXkCTV2fRFPX5uarzLC2iuzG4RhphJXPv9b8dRPqt",
  "key41": "zGz2uArb9FrXHpMhyt3H7PAp26rk7jrkXW6YE2dB7ZXQGFWuceBAp5g6jpnm4HUnoqR2TEYQmqnheGci2AiSh42",
  "key42": "1FW97ZYFgzqqCcfe2QWsJaxzKRqvQGG9yKNuvBYMuPkc3wZpnhpoDH1ZTnvpmNCuk1fWd1XGXQ3qh4JN9LTNtv3",
  "key43": "4krxGwrE4tuiWxE8Kw1mFp4mWQ4UznXvnkZHsMDpCpC3jNm4TX7VieznyZWMphfrCqaEtcQPxCrFrDUwdxdaEVH9",
  "key44": "5T5D58F5cdNRNdm6p4EdZWcoapNrXvwLMAVYJ3VTHDEQH8EV4Sx9S1Bs9QvA7VjSWbzgnVSJc6Fkr25UaQ4R99Kc"
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
