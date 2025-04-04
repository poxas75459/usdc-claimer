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
    "2CSrtaogcJASSeiwQ7ZXy9zjHFMEdHz9mG9prHg6YBE47CjEZ1niTDsBTSvVCWTr42ayuMGUC4MznYMxNTfxtQmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouFySGPtAfKHmJvhRuZGUmTbSBXSpTNGAucZxNS8PE9KAnTvM5d1bGcTBUmTtR8po7coP6GYvNbCFxdauwCFy2S",
  "key1": "3zaVVz5V78Vbk42JdPTMjZgYvm1wmJqb5YjAFHYyBkQsPYyvjgnP1c23nrBwNDYtq4Ma8QLWk8bMeMXT4FVF5zWq",
  "key2": "3eP2ziEgg4hvyYnpxGhvhZGuZoqZMhTEAPVPrttqB6FWTEFYnFZDXgbcTYM5yesRmvy6LJ7kqinVAH9dbTszkUQD",
  "key3": "hRc2bFjsFxiy8Z5i9LYA15BjUrVFRYgHih5YqHtaSVtuANSaCoe5AJpF9aTuNhRXmJCsiA2ufd1jrog75oZw5Yf",
  "key4": "973495Y2RewXuv3Z5KQDuCVp7vYLgVMhQB4wswUibdejMAzQKS4WW25X5vhxSd3VyN9RcNThiqYM9uVduHSXN5U",
  "key5": "4tezaiVvMDzBy2a5sbsUTDLT9cjCR2gf9FnPB1Db2tGHtX1pghe7ByJWmUBRrena88ZyoUS9V32dMBToXRmgZLZA",
  "key6": "2XBLL6gBVdVe64mUjjvCatPiepxY1gK5wJXXWsprGrL2uJQ1ARogXjw9C8FyBGhMitAjKoqVypayDsQiaaxFJStJ",
  "key7": "3nsrquZbXWLjpdhmBAS43GjPCdC9tnuhuwvoXvVB7pvBVsMModt1Fc15bSa224E9eTsNjMi2jjr7fMKkxrkednPC",
  "key8": "4nihjEz4TKmGkK3EwnWro6u2xJ7LAg7LAoXhLokuh9juMsRv4vLsbrirnBJkrEoBsQBKHzR5yPGbTJAcak3prmoL",
  "key9": "KV68jRuBy7mZDvu5N9pdMbwGp7gu4KAkVv897UnTduat7nAD92Fh2hsh1yB6P3nMZ2cmg5DBGngnLYsSkgwQNuu",
  "key10": "2zMx1iKKw5rbighf4bKL21JGUgmbqDNkaR77czmEuxcQt3tYwuRTbYGtnGiM6z9vGPDeAepMsUzcXieUMLPJswdq",
  "key11": "234xeTqMANT3u9zCw1CYw1B8ADnWGWwzvPnM97x5FcHyVfn7c5Y6YQT2sb7B9h7St9zWP3VkEMXXJQ1wm2SCsnhx",
  "key12": "2rkEiBTCjc3tVwG6nBqqqu662f9wGbPnVdy3XboTe6egRcuWAR7Jkj1dPLc6xHD55zp1LtGPFyn3usJ2qXzVSTHa",
  "key13": "21cWffdD8VEQrewpj9LRk1j9TK9EnjCUUFXWvJvagfMCbKQN3dLyMHTzyS6KXXNmb1xqrv2iWoQsMz7VyB6AGYdg",
  "key14": "4ZeAKfxxme8fgCCdEurdPvfrhcUa38WoSQwLekrN6vwGs7s9iDVRaYToMWRApueKPudx5vTxR6bGsqXGuKQezmsF",
  "key15": "5YgCcqAiMB5L2fhHHfXST6FJvNUzRCg6grSiP86ftWywzF9BoogMdmCxF9wNB94n9qeqFAP1jb863x7xjrskBvJ1",
  "key16": "TXj4WHXAWMQLUhktsEGzSTs6sEF9cG4HSjQJWipUB3Chcg1ER5iRbp9t79tzZsR4kUA1p7JNFrcZPhsa5K2MSc7",
  "key17": "35m9djGgXk6WGick7tt8mpFwXip7f257CnNpGkUGkFmNiUQFA47kQZSnmFzBsUWjhkVvFj8KtGd7FXpmySznET7w",
  "key18": "2tEqtRpY6VZERm1YuzHTVTaZPds9vLoPf1adAWqAp6if12JYYc2dWrrYFMFchM2Z1yrMM4f4XYXF44jikPxJuBXE",
  "key19": "3co95i45qkkvvsWVQXgQ7ZbjmDsyZBPBVupZGeZQtJ9Kmz4mZcSKbFpCa2syRp1Pvi11gQqhZ1FznKotcujsPaLh",
  "key20": "41g1XSd1BkW16qti3W7rCn1XbrGNmg2kDbBbiUEaQcnXD3oc7kZ88dTBUiqw21Nz3iM9oVqQN7LyfGESBtA3Eefq",
  "key21": "2Awi9QKhLdiux2iob8boTUjCfuJXzJa7a4dma7ZxFrejbZKZUSijVeXiCXiqGJS4nZ2DqwEV8zvzaDdZSHXaiQ2x",
  "key22": "45gKSSDZprnXmaKgepHHgdF2bGiDK4qm8qxKDKfNfdbpBgt6t7evfcLNZ8LWhpvSYBJSnrgkFTDt2oRdoQwwWGMJ",
  "key23": "CPDynwV8Nf3LohjgweXzWsSPE6hRVrnib4BHw1tQk1H1CV9abYBYjpeTDWFn4P1j5Y4vxktK9fCYHM9DwXVrZCX",
  "key24": "PrHXASVcT3BKcmxXgFB8BcpGa6EzpurVNDRyj8R41Y5W1X8ADQda1nELSDkTYCZFBjgBHWVhDdEr5drAPyybsXQ",
  "key25": "3Zt577xn4RL6djpYi3AJGPfogjjECCwN3SaMGMx86kgAxnZTCQkSX5K74V1Kus21QNA1QxX2EGFoWmNjPDTX8MNm",
  "key26": "4fBVPvi5CWP4UFu7MuuCNLWnNKqjKAxKRAW9crmPmMTmzeNf2s3NsjcUjrdTJAX6nv2Dv52qcpaREzWatFfnaTKd",
  "key27": "3BJwKk75c8UWSt6jFjzZiCH3PXSBef2D47UzpKV7A2U41WptVtqfQBcty27DZ3gDkNEMLYhyshRdn2GaCyVR5iEz",
  "key28": "2bGcMNZmQ3i5bsYvtkSpGRXNR1YEZnhRxdmK5tY7wbieGuQ2a8JwALz6NwnKEubqyU5ymTXjsduYhVp8xcdQfnwa",
  "key29": "2eS2hQHJJnUfgHJtYeVVmCAsZm5R6NhdHJbfptbatNQQjuzPn43PQkjhhHUoh58VSE1ztrJKAak9iJjK2LtrFfeg",
  "key30": "3ER37LH5MwfU7QxoFK8qY8BAMGTAGeWsqHudyDCFhsqL7yPeK6dzSSP96L293VRuHr216m8Bx8VWNyP6uXB7cDdp",
  "key31": "4L9tJ4WZs2pxReMb8BZxLheBdsyGc4RKyGDSzWG3JDkikZz3JJzUi8uYWX1iLg2zp9JKRamHXmdQMQD2komXaZMj",
  "key32": "tdtjpMjFXkXfypS7Nn6n3mFoPeH47wXPdv1pUFhmePAfqcFQWCAei91F5opNHMupGP9DjoKTMr5qB2jfs6Rs3LJ",
  "key33": "BxwST8y7oKaxu386L2CxSfYoHfS1C2YPXB3CZ9FX7JujAkcFTDADwQ73G68aXfonjSFiSfYjnMqAnM9hbAaNPvs",
  "key34": "MkbUEByLKbWKpLBC6Mwo3T9ttSEAkeRt7T66SLXhHknFXPHo7bDY3ejCrMATnJVY6LqeoRuGoeZTi8izoX5iidQ",
  "key35": "29U8JA1YF6ZVrvMcSQ8uQYX9GBETKirkgcrfwwzGfxMZvbdQpnYKBWxU1kq3h1uR7MG5fqrA5oSyrqX68744ZJUc",
  "key36": "5i3MvaMH7XrhrrPHDq7Kayv2zLiU6AcLxAwA3nfLUnYwdnZF2DFpWdUP8G5SX7QcBNJyXiRaiE7MZaABawroKMU4",
  "key37": "3BEAJUZWL55LYiE8FUiStJprMauFAe63i1ZAA6yA7FPDsTSsyAJbov4fvu1zrfDRhqcr7j9vjyuiBeBbds5irfsi",
  "key38": "4Jc6gcxLFbvqJwDpmNJZG88oTHoH4sDqG9JviKAs4mRQHWmcnriT4vuQTGjPkoQ2k2VUpyZonPbZy1Yj7UZnwBQe",
  "key39": "4V6HYY7aCpSvHiVi37ia1sFgN1y4NpSiNL6F4Ncva6zxXpAY1yMs1uZGgfc9egLFvSqjR99CtZ7MNRQHsKPPT6D",
  "key40": "2YB86kZ62hV9nFijNQKyhrmFqCSL88sTScWxd4RWAdgsEKHB59LQLubaFt5CBzyJc31fScgczjU3US3DFQVWaAT4",
  "key41": "33zZJWfxDaXKedtZfHmqBshwpPPXq5AUpmpTuEFT1xSEsRw7nVkhy69N6Mv3UGNcw83MDq3Y3yewbVamnroEZ5Hz"
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
