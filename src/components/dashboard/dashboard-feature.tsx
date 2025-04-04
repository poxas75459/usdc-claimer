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
    "PEzSAjYqeMbcrghVCzAKJgK9hP3TkxMpuVzasqUT1N2AMY5fssoSnUZLmpdtcikgFahgmMmUiGtbZMyX1Dm11nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4qywXBTgtSnfskNLRMnY1WrF4HdAtYN9CRakQzCGFPLpDEi4Ci16PBpsT8gZkxpAgFTCtSQVBoFNaGoCDcN3Ej",
  "key1": "rbDWEXrXfQu6gYE1XY97ejQTk7sV5vcoDEYyvmxdUh8XbPnHGXWHe9TanZKev3f1t8h2Lcq8zwDa969z2xtArc2",
  "key2": "5yucBpH7kgcAkATHNpZb1YWWsabxJDMK1VVvhxkwecbXCtFaWvnHWXXu1tidRmtHMX6oKK96zesXokiSoGu4z9Mr",
  "key3": "2PQeAoHzfwx3YgqygSfGs4EX5uBCQT1ccLfBmn4Ck8HLEiUE4St7wczYvRE4uSATdrrzJQ2hCdnUVnW4VwSvcU8i",
  "key4": "2FgAJHD56oNDkduwzeZsTShRnAydvnuYjHjYE2YxgzGPe5v3QqMGd2noDS9J6LN638X4PBHBcroQMrapsD3hXpCn",
  "key5": "2DzjPLB5o8Tq9bNRpen5W2TspAeHsAuzXkMznGzpB6bst9xiEHCWszAdotPwCHwTqBF9zjuqWd8jYZ6sVh5jKYHf",
  "key6": "4XbZoHiF8zY7FadgQ3Bk2H7G7ok9tVzmaQodei1yQxMn85d4Vrxhe2C5yMGfiNN9LMq7cZ7f7Jnn7DymBcyyxfij",
  "key7": "4FcmPiDpH24jrk2aWHXp18tVixPeReQmugXr2Eo62GWCj79hNoCwWXBwpipaWwpXsjTuRzmdf5KsBb8uMQ2KmfY4",
  "key8": "3MGb1LusJe8baTYk11jhWvVMHtdAnLbESZchAQSzxYiuWBamqsMA46apGdA56jsrbriHKaYiYF6Q4WtHoESpShS9",
  "key9": "3rF6p3uy9rNpJetdnJcswzs658bSxR8hV6A47DNUoeoSw36eZvvfezT7ubBLiYPhzUjRhvbX8KNq3w6aG6gpMcov",
  "key10": "4nm1JRVepoLwwB48Z7Y23q9GMv4PNZ8a52TaVEJEMZpiBPpdtBtGwQyQyaSK9AssjjHGM7XoGpdrWZaERRFY9qe8",
  "key11": "67Mg54sx7FZwLBquYQyWTKwsQMB7qaAFF89n1QS5tgNFU4P7gznDRTcSCBSR5bjBn6u8mt1ZvNHyZJ15hrcZzRny",
  "key12": "m6tsKnSKxt7HfxurAA4KfcbRXn4UuaKXqhJpu2uHyKkLAAYGhQonRmwx3vHMoeFsEKYND5Hhp31HVGLTH6KNZVp",
  "key13": "4SEaZ1KXfhjBeihLd41Nzf8dLr1E3bqvCaboyKj7aimCHDYqWvhqw1AuzJszZGEaXZHvrQzF3kRNH791tH3LvMA5",
  "key14": "2hr7UDV72phxWfRAsHgUUYcdkRFpZ5ScK2R1hiSKLWwMXxrhuhs3miyfSXM3PFeQeaLZCt65omVrEoyjTpZfbGMA",
  "key15": "2SyrZXZdSBaf1ozjADBkSSw3T7iUeCm5wH5LEpLLfoR4Mo33Hy8DhnaPhioGYdpAekhVeRz9uCzwu7oWzM5VdcC5",
  "key16": "3ZTp9BNg6DZoSuGsJx3aKYb2qXy5yF7jS4RvCXxCAEdqCaVdaQrFq1Gps7Zgex9E8N6pGHvvzt63pmU6V9Hcepds",
  "key17": "2W3NM7BzrSZuSArpk1b6bvJmVfQqS5xKiXJsiQQQprNQtFiYzwaMVafLd5CUidWu9r3FCW5NXnzcj8h4WskF8XMe",
  "key18": "3oH4FucqXuxVdUXPfJfkpUwjbD24n4G6YAFbryLSzksoTFPgDzP1xMzuscjm18t1xfHmByJYDW9L6CBYtJzyg4m",
  "key19": "54puCJuiS4PZHFahnHmAty6fGaCpaNCRdaLxRUPAFnmCLo3NNz49cjgME9TL3jH2UtPeNC3iB5i6LwLKVpBaeZyz",
  "key20": "AwSsrA6gRA4TRJeQnRBX4myXJNMvoR5h7S7oYsNNaJDbrGsNdvPBwQaXbGB7Ty8cvvDnqwnd5rtiahUoFrHSDeD",
  "key21": "2xFCRZwU8kh1VdA3fGJv5Seyq9i82D9sM2pAR6oJkrbsPdA6Ms6vj7xpv7SvS3PnBnisf25cwLbzjZcMToV4w9gU",
  "key22": "4MSSVeR3bK9FsoDmhywRttAT9NjWn6oqKUUcGfArmUagcNrfApeA5ogRyEfR3bSRpkkrHydH52MZcQbipGS35w7G",
  "key23": "3MMa6LWCsdmtLc1Ume4pWJvo2hRQRNgDg4SSwnVkC74RZH6gA5ArhSwon8LTFTK7412JVKwRvRV95uvrwF7vS7Xp",
  "key24": "2JAJo8gPXNbWfzS1aMAJyUdyvzbgYCQBjY5ZFU54jvtdgZDR99Cb4CEevEFceCjiAnWaSJTdSrMJySJmSdpzGFXw",
  "key25": "3TmNT2ibo3pmr3T6ySYWPgufHb94961mbYJdXBxhRp57nPx9sxMkFmdomasMQHy4TrPbJrAkNegWhXbsE3Lyt8X6",
  "key26": "2g5frAXg34KdEeXnSUXrP27VVxyPmBR3g2FVexfrrivjgUB2pZijocSkk7kVV2fpi61meRjtPzm9UFfAGd6szku9",
  "key27": "57rmXgz2ebEFjintpeVsAve9Nx5nYmwN4PpRt83hWfuEnRNHvWa7wTGxxbMfsAVnRU25hvJEheNtdP5uuGvgoTYq",
  "key28": "5qPVexuZkT3qe8zcgjTR1FnBMGBDVgwtHDhjf6Dw6sd6C5Ec2CZRztTboV2iECWyAAyNFkRt2HLWkWai42g5e7rB",
  "key29": "2TiqMpLRLLpXhQ2jSzyt2wxkjPP56qiqmbFKK1EY2Fx1TXz7G26yvZ6D5ywGQEyWuDMjMRghiTfGEhMGRcNGbnNu",
  "key30": "5unAu62SyVxgFMPiuJM8aFfnKwPQWt3wJR7z22jgs5DRHv9T9LM6T4L7gRMYtjPC6pmXzzZfh5tygLCf6EJB6N2m",
  "key31": "ZGGyKtvshaunemUaoPadMDaL2K77JkqKqUtye8RFM5eXsFSR9xska1GM76GZY9Htz2S41krRhCZv9AJyEcd5xow",
  "key32": "2v7imh5ZsBEA7DbLU3sMNkqyc1zF1DeNXDYoXTsWLJVKjvpYbQTAXKXn3GtyH1Vtid5HSE55gQsMb6erL4Gbkmw8",
  "key33": "DSgrUegTEVKnXB6cXbg81NFdWpBuUGgKjPV9PafP5KoDvCcWsupPBxdjSXGHyoayX5J1xVo6hzwo7fLYKQou9mi",
  "key34": "3ki3muJpFLRKh9DfpviAg524vYzpM3nWFkS7hQNBjEAiYLQTLF7Kn7M4QwmhbUDctPE1YW7kNYCe4ZScmFVQgGhB",
  "key35": "2qVHGXWcX9Teaw5Q2xgmEoNGf1VDDoHSHCXbgQ6Ty2SAWbveVrWeXqgFRAoBKZ5ZLD1rW3M3DGPkonVeRiQVYX2Q",
  "key36": "rjr6eiLQRe5V3Ru1zRLojKKMhdR8vTWSybdoJkPSn7Q64QKkhMbF62w95ZuV2ne1fKQHHS7py2CzNCszaQaMyRe",
  "key37": "5Th9KLZ4Nicd5bgtpPzi9Tny54igsBku1QKzTKYXQ3CiTQasMrMbreaRTiXeL49rhA8Ts9vJHaQLoPRWMj1ZMfs9",
  "key38": "5iEr3vycFabtFjow18Aptqi39NDL6oCJUJsdxotEkpgmeviBuB8CU67dunb8Edaek3uUjnaNhLbqameCNzNZjUAo",
  "key39": "1hNQBqGDKyFfPtz6Vod9ZHy9h2nTF77fmpNMDwS4rhmazsZiUUxbeLjjHVqu5keBoehSawhPLmF8nZXkQq91WsR",
  "key40": "3NfyPjyud55L8PaMBCSPLixDDxgFdBtqk5VUPQuwvQqkcYfrrHmpqSMa5RXAiTSDH9guCTkH46yB5G2KZmy5HjS1",
  "key41": "4sc87gHwSTpY1Rps8jNqqmZWKN6yYTRAGey64MPgLeXREk8tgUF8fMPoX8dxAPM5wibE1PgGrffbBfyH4Sr1a8Wh",
  "key42": "2RK85KLAa9pysorv17MCFnNJtFCv2DDSjZz2DsUuGyr6yXwa84uiJVPkpHsMxv5SCwB1cgHRRLC39RKEn4h788Zb"
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
