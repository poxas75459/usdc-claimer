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
    "S7TpLh9gqwX51d7t2FjNvR3Ps6TLGf4akJfjBs3cdQ3C8RjePbJyQBoUat7TMqPgw2DJYWutiSzprwfGDeF4FkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myu7qCrB7v27dPcsg8kygRuDRbFUH8oAgKgr8V4QTgfbjkVUgaoeCmeFGhz3j4DmyhymPRA7LpEsAaB7YPi7Xg",
  "key1": "2q5CSsLxkky6ZXuNceQmEf1TjqH2jwoUvMnkpRTw1F3dR4mJANgvAKJMu67KimLfXMDmgH17cvCGuaSiqqkNgaDX",
  "key2": "3wUpcWhXVAteuM8ADhvCRhyzHNhDH3R5JeHgau73Xw6Y6czBf85bF36sesfpF3W6ncgPfxdkUGczgN12ckqWN6by",
  "key3": "49zykUydis4m7rnZqdfFqF8C5fkPrrgqwgXCDGbmj8NbB5CE3yzCrCfgSDPuxwPztkqShuF5mwsXZz83VANq5eyN",
  "key4": "4ey6dMH5vkNyLgnGet6KmGzzm4gXY4ikYG8n5WhKRokRk2YP8Rh646g3pJm2FWCSAjfpq8GSAXEbPAuBF8Rsuwgu",
  "key5": "46EwAKpZ9N3hpX1uc6WPqYC5nNvvWjE5idLuaChemhmZGgFAUBybFGH48RCVVubWoL7hXqVgeScLPAGo9yXhFn7v",
  "key6": "3F24SjJiGZL79XdVQLEYUFGWNoMyQWNwGEqDLhD9XvUE9GZzyMNmvfpSvofThFuUi9CagZs258b8HzjR9DobSfLT",
  "key7": "4QSyT5gmunHMejVfjzbdHoY7mSEMpmco6CzKa2BJK9Lobc8vJi8QhaKsg6bDiNbFM1R6h3tRgq1UzufriqiZHkoU",
  "key8": "3L5PScvmZpArn8PWS3fvPPgiX4ZSLGZzyEBF9HhuGmjSqCU23V4wdFZT1U39xiwMMqvbDmgftX48eLcu79sjxY3u",
  "key9": "3Jg1Go5ZoaimsgqMJgWuU67yc7siuFtA6ds5MJGyQTuatSZ4kDW3G4Hdsu5jW8J3jWHXLmRghmicAc8Fri9ye69X",
  "key10": "2k5kHpJYUchdcS5Kq3fRorM9BvT6ATpMRT57QcJJTwTczGmNwW16Ukyyn4jk9q2zHu1hCL9q1F3qFSAvzVKaBUhy",
  "key11": "5wrJPfcUKeFraeiUwgf9F1bWxpLBtQaKtU7UwfBRemWW4jcvhnZxPnbCq1DbKKtnviourdfiXmFZkxH8Uje4oHmC",
  "key12": "2WHM1PnfqR9gfebq3AbjtgYzQNyYPvgNVh1FNjux6Vy6kawsLDmtR43L6SPM9EuBormC8tUVMyQt4a9Lr7rNtQtB",
  "key13": "3P3Wrs4m7NN9PnNi3rWeBPERoJmRgXHZNmzDWPSwz9WJDMe13oTAMqa3DSEkGN3P5rXT7wQiWjmNok6q1JD1UYeT",
  "key14": "2tMAnjTGhDU8khKyF2B1HTfWK37UFMd6u6epsr4q9e7siyYUbHhx2ewVV7R6nQXbP7UjqoVDVkQRvxZSDLU1Acj9",
  "key15": "37NCHsRYM3gYuUMvPMV162matEWBxim6hzZkddh3v4gefxYQRBmRvnTDqMiHLZretf9Un5tDytA3TWHkSL3agAit",
  "key16": "3HnDb7PR2paffHsggPBJZN43P56oZ8rHMceADyPFNVbAjhfEgQkkw5TpyZkVffGQsqyzmUSz5ryBTVjNa1KCGmeg",
  "key17": "65fZyK1Rbx8KCjLp2Y615zUV5PZuj7jtW9cc4oqYy6VQJSz3LJYDoMaH8Ea3BH1wxt6TSpA7iTBNvAJLUanvW3S5",
  "key18": "5XF2uMjTna1269kxwFeRzX7kERSn87dYNrV5SYuQohepmhxAr2eZR7yiPLtFpjTyZPNHQ2AxTisvH989BRstRMCb",
  "key19": "4SJY359JjL32ai6AtojtV2BaguQ3yoD7sMq2MLTz7mwH9GDqP1eWLcFRSdfDdfjPF26MF9BJX8B6FRgkxp31mdwX",
  "key20": "kY6eBXYQZjDsAbJa2yF7w2WG8aNuG8ADFvQywACN5iyAwgbfsZymkFAwiWHHDm1jXGSAWr9JZz3wHUsyEyBm1jC",
  "key21": "2XpLswzkrSSfsCZpUEhsFTVUG9if5bQRbvxctPJghgcbJ6mrwywD7b8zpZSk7Sr5NDhmjNYz3vU7JhqYFr9cEyKT",
  "key22": "32geEDNWyaf5g8CT2KvXEW3qaihDb3gXQysFHfbcbpEazXrq4xnH45ZRY3e4wz1pLUCLPtgg2jwXnvGToTzNJQBs",
  "key23": "5sX1GEAwLkDycCS8D8G3vi4XSx6uZRFAWzhZFkAzQU7VW8LJAuNz1QF2BSN6yRbS5nuK7d5UqNUGrn4tRc3gAQ7E",
  "key24": "4KxBAqbvfvKQr7YmUR5atzSWkBZaSkmk8Yy3J3AiCbigcip1k8sR3MrDPyBfJp1aT3M3Xm6w4eJhJcz1B5KatwXs",
  "key25": "3ucdEwXv9LvqiMGSumigMQ7sP9JN9i4MN4LJ8S38A4jmuEES3mgqUTpTh3Ujaz4Gbjkuov5hPqMyrEEHfycEcKD2",
  "key26": "5PT7TjyKLuDVD9UvfJ3aaMBvNiGn3chzbDt9n3f6G9KavQqtjUQweXDiQ6GBn9PFp6316X4DQSJ6QMFPNQj7aTE1",
  "key27": "2Q4Muzqavyomj1z6WN1aeMbgLx9vjoWZznbYQ1dRhUy42hMoQgavXXRBTHBt3THGqd2bwWc289yekJvpAYC2MVxL",
  "key28": "639o1QTpYLtUskcVHhPJ2LFUjfmCveTWyLyZhDdRKjgBt2z5KRWoARoah3hQvrQWJtVMHZM3L2XCRy6dfb1KcP17",
  "key29": "3okcoHB7tHsNybtArqkLJXsiGqDPzrH7aKUbETyMK7SachaSSjdWttnMa8fQmM12dzg8Gt49d53wziUm6EuNkrNK",
  "key30": "3CJAQyZLJhETs9JhDgqj7EdjWrB7p2acanXvFCcZXMBRVcFyY3q2G4dYeEGBNAQwihikbTXsLLovxxqHpATGPT6Z",
  "key31": "5kfZ3znizceGv2Tk7wyFrfAxy9rRCGKBfF6MzGBccxxrvB5emSmw3fDWqPJpXw4eKcYvGszaPTU7o3ydsygAz9qE",
  "key32": "3QdJm2gqfzz4FXQRpreuk4P8a3nuvBi63necF7tGSmYg4BFhbW7J4GddXo6CpMSm6FqTgR7FuMsnveFSYchxJSgQ",
  "key33": "HT2Gc21CDiZrYhumWpvE4ZJD1Vq1N71xtMVPRwhdq5jvWHRniUkWBKWhsd4p6GMt9rpTFCUqgPSbPd6m5SHPeEn",
  "key34": "4P9GF8CLBMG5faHctzWz48agJYW9nvBkuAu1Y4GcKNK5NzD8w2MKyfFqXyfgmjimyLgsweZwBFQJr7omEfpVfSy3",
  "key35": "4ojStgYdpvYc1Fop3RfBMSgHCv9w1X2H3ckF5X1oTe2raPEYZVBkp3Afq4CCqueJSyBZHNmn9FPvWBQR3eUwV3yH",
  "key36": "29DKZMitGGniTaoQP8tWnRQX6Liv3knChM9Y2FhwUamnU1rHWjXx23sQktcWjSkK7bXjgRvdXsrqsxH9KYF1TYXc",
  "key37": "5W7UYnVmVNjFVfxYtL4eAjjsZV4t13yVgR5soUtoYZenvHyV2RjiFBWZ9M6xEH96ugN3dryRXFyiu9gYrdVbTq2X"
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
