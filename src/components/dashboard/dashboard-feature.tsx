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
    "3BaF4HKL12MoTqT7amT8X8ARVcbJTuNG8YkjSFM7VYM93yR2i2FCkWa3aexb6qsdJxoUqRJnZUtXDtVdjgBz2Qjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQz8qH8mASkx3ccn3tfboDiSq4ASjrg2hYSNzBUgS7vAjC6cBHN6MtZCE91L8RqujZxNeRW2rWerS4mnQsdkaVQ",
  "key1": "4SHWbSn42iHXFFkqo2RhTjMzPk57ShN91XVUpFaW6SLNjdmAWpWYya73w328zdhTsWUqvMBktvWNDw59D4ciEPFr",
  "key2": "pnkhL6Xag7GuReWZe2Yqy4NYQAQosQsy915HdYaxARCqGEKhTTq4gH84U66QW7Uz6a7sqmDzp19VynHaNjo71ia",
  "key3": "5eeZAXG3j4p6ibVoSvXprP3EH1iU1uKvHNKNitTRVEfVZaH1EL1MRvhy9YRe9ufDLmuXGWhgfrBi2inddUkA1QJU",
  "key4": "5mUkZUbUJmL6zbCwnckjtEZRkvG4MDFo5Pb8drh7bcESaZYDQYKhTBwebSE1euBP9aneQUpJyedmoxAZKZxntP3K",
  "key5": "5AhM7KQJ9AkU9ph9VL8GemWmeYJqzFwix3CndHoTLGXA5BMrDiiFK6971B6AqUzh21CfspTo3SFm5LefHfRUTDuc",
  "key6": "2GCeW3gTVg1DjJ7i6r2Yy2Djv131XLgaq5198yTv3NEcu9aWeu56YmPCUmsgRpEHis5HpBEXcX7g1jT5d4smW5dd",
  "key7": "5VqTzuYg37YRdC8gJEkfqPsc6T9b2Xe3ABNvbpoPfrgREHobtEpFGaZdyxavxVJzmkBfiJPSEyZCuCrn1mbKUF4u",
  "key8": "5h97EEyeUSEHbS6tm9Vma7LX8LvTTytrW7X6Ksf26Nxb3BKquNxodjoEeEfpakS8JQstArbWM48AvcJP53DnwSsw",
  "key9": "4tBdoLb7Uzs1vmEvH6PykcReovrXRGws328JBEj6Z2ggrKLE3NyAWuAsD7CqkWPeeRvxCytniNbxt5QPoaeeTejg",
  "key10": "QiUQouK4p2JQRDJLs4J2A3jZD6XVLbPdtPqR1vxR6b6JbG97TfGJGgajosWNWnUUApHzb8Ta1KNMpVeHFC3cxAj",
  "key11": "4uvEamK8cXRSKKX3bEt41MouSgdXLHp8MD6SduVFANcNo8QRXF9e8vhywrxLWuE3EnZg8y93uMmziXPUDr9vRLn2",
  "key12": "3Xx7vobVuNTGnH1qgWPgoa8xLJr68Jr5YQhHUKUQDiXjytyZrdxqgbFpKrGPsb1ndkpDHkHPAm1os8zMhY4yGmeF",
  "key13": "4ovkbHZjasqg3nbswB5D1azfKdFRi4RrQwRM42VU76PGBYfHECmdGrVjWk4utErKpL5LBT2TExPfKrqQB7wfx6A4",
  "key14": "3tiCKxNUbzD1tRCykMfdespQpRuqaUCvaZyFeVQFRYWZgiE416CEx7rkeFdqEFhEY6bduX3n2hzGjFyWLbYZbLHY",
  "key15": "5zYpy3WW667oopiNjBtDNr1ykA2zCYS5nTme55Ahd9ahkLgKrn9hF13aJ8XRMTLqZVJw8S9HQEjgJCX1mVjnk9BP",
  "key16": "22PChs1UCem32kRHdaqWHGjJ961QGZekRDrPbNWBbVS2MwCY8pjrTp2NMcy1dXdtYAensk3hVXosb8sea4ue3PUo",
  "key17": "4uRwearwWmSgfSRQxL2Fqonf1T7gNtykLgtymnPLjhhhrRQQbbhQdLZiZ1HKkH1FUYGYX6tvrvhZv5hSMicTMX7s",
  "key18": "D38baT1tEN4zbsAZxK2dKXVxHunJyVVbAavQ6AZfTtcQVePz6tf9pGgWGdhVBdoxZsdT5CtHiRP5UiaALRhrZbE",
  "key19": "4rv7ZERQC7YHMx3PNsyhjbRXDBXgGofTt6a3fXGGke9fg4iPYQgmMgaNajaM45q48PAL4Tn4EceMgPcX3LbARgee",
  "key20": "3FmEuNQWix6NBYQzHBGLXqjVJo9XGdkKZKZPrRyDNyCe55L5AdJcofmwRKMCLV9LG3zZmhFhnSj1zJ8F5g3Lz98U",
  "key21": "3QhA6ekD45E3QcvWJUJ4gxvzqvvvkEqc12oTGEjWiJ1GH2StS7sXywn8WgPKzVeMMMbcqV6pctNsFgAsWzeTjYS9",
  "key22": "5ZwkXYKiPdwfC6bzSMAqQtKpWePfzPsqV2mGecrtX1h3Vus84Cfe6TJspb56JXFEmGcbYiiCXSQWFe4UEsq5xzgc",
  "key23": "Lz8KNR3fxEWbby6EZkchircDRQtLGXnTozQGKES8NNpapRBReTbnD1VFmmkJXu94t4bkkqFv3odceQbt6V9MuRY",
  "key24": "5nX9ihdK5Mmv165EgaC1qitH8tiPUjPbYREhdCF8LCVrFmzpZLYLSN9m5XezCfdH8q77qZgChwKVNZxUxaUouNha",
  "key25": "5iYgAZ8UGjdGV4B4CxjxZckW8GdGN4ZFkiCfG1U7aft44kSigxo5TktUPTd9s3setMhdMuUvi3AN2Uvg4tgq4upW",
  "key26": "3tGnJbVRq6WQRrxGEfoXRBQbivszd1tx3FyvxS9rs7XmN3j8tGV1eKG9XbFfbBAV7pAHXG3DTYogbAiYVDojAXbB",
  "key27": "113Ymebfp8d989iAZYV2HGD9MygkNVFRteVxM7HL6iHr1XgW6YSJy3GwetxJN6F9L381faoebSe5mL5zpqHZpav",
  "key28": "5Ev9ofRm28XeUsqJT5RLwhmCscaMCWADBn7UNHuHbWxv3RpunR3YyJchngC4ar16fVBMqSWx3Ssgo1AE3cxfpXLT",
  "key29": "5kg24wHaLAFYyxTzyRxxZhMfYdjB1kC18ASs2jidhEZro5zoSPo4Hv5to2BF6GVdcFxqNEA5Hgpan5YqpxD9Q4DP",
  "key30": "3BCFVKK2AGVbAkCzRhHtFbNT83mr2gaK4C9T3x6yAX9CWCuanamUGmETcFrQwWJZoapV3CvreD6N48wFnDweJG5k",
  "key31": "5Ad2tjed4qxGjraSsK7Z3ek44T178JvYJeKhdhZbzRCF1tz3LZnMyiKCHsEhj4DH8CUfiuiYsr6LG64QpVosiqA9",
  "key32": "s7JpqAoMMywL628T1SXkoAzvhnVFGuHCw2Fsxq9MmciGZcgJsxTAWfpRBHwQNSiqfSgKM9iAGMs6zLfPxyvUcPu",
  "key33": "5TxnQNg2nCisT1kAqTa8SEWNsz3Sv4LTax8rGoKfKibZgbngyX4S3bkNRNUkje2rc4J3LNg2AAug3CBxBhvHdeep",
  "key34": "3D8u6TbCkrFg7zhquosc31S69KoN9Vuyqr9QkFcpKVzcmREi64pJNC2mt1jt3XvU6kHTco6BMc5eY2bgHsb1VNEM",
  "key35": "3t1b8jczcWgCHwHcNtHS8DzQFdXhYQwLCP4RYvfB2ZvWq4BDYByNsGngY4JpXQR6YG7usdHYExXnXhmeHGJDN9Gp",
  "key36": "qVcgHd25MNsQXVNxenKzmWJM5F7p4AKG6LWb8nPjXs9seMV29F6z3GgVG3k9MMaankJHEozSYiUPpebs8zJDZfb",
  "key37": "4uM9PLmgVL56aNhdmHZUbQpCRGGnkethF5dn4M5h3xjJvJhRtQyTaDTqAW35K1Q6j1quqUgM6yrEnuv9aTTkdB21",
  "key38": "5qMtMUywgi7CUaaTUj1FaCrVUpUVhTPfnKHrF4zJNARKoBLHPJ4UYQ77rxRcWXJHBxoQ6EnvDdLU1qZ14vMeQVYS",
  "key39": "4tK6yU8y65zyzPTYPE6PDDGmjvgGYUU7G67Yw5hVWjEetpJSaE4QsRAhet6GJigw1KuNigp9C2kKQbNfHMWoMRHg",
  "key40": "31Y8kMTMSedoqMeF2a7dm5aXCyJXA4XG2rwaxjwS6bwUfJiZBcUS1MM7CLbWBtC65brXbEFRx7RAN3cpph3WuDSc"
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
