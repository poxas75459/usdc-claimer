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
    "okzuxVGdoVftXYSn6MyyQudhmEKEcLMRC5YsmLukpJpcBePEoMBX6iN8jv81ouBuzKX5qihFVeMvs2kbExgf2uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoybctYHtvLTf12mT42ScSH1LZ1PKZB5aFCT9adG8fP8RqXqoCw2d8vfdh7sEzZwt4iKfYdq4bsAovE5bgz3P8T",
  "key1": "2vQZKHStM7Uusb8qwj69KHHQLs2XwNSu4zTsLW51fVmZn5eFuFCrShRyzQ1xm5vZ984YT4RPM87vZiaKiB3uVaGs",
  "key2": "65FbtUEY2F4Snr9tUpSsyfDSguYRbFbT2twqZGaHfvf775mE4YznAk1RuzHLDP5CCkBZR7W8sh8GP5Di9fk3rRdV",
  "key3": "3Lsze8YawMAfQy3r8FyyZxMwWbLQhnE3vJ52Q3dxVvRm571AfbxWqpuiu4W8UcJvyb8GVfBmaHuQAQRbVCUh9Jdk",
  "key4": "24KuCiT5vJ5s6XF7LvryK4xV1KgGqps2P5o5esq3Pi9XvZakiWGdevCC3BQ5h1a9vQC1yDYqBAzqocEvzsKPBhvK",
  "key5": "3RTxKsoi3SD3KVmuSqvJfDL394TuLaaM3Zma7oRxwja9NdCE6vFgJC6EL4G1fYVqKt9iAfnJXYy491GdYFePxTPM",
  "key6": "58SufH4Ay8VaV49oCypsZMkKsNX4v5JvUDKL7iDAFqPKNXPsug8km3Z3nE7pLYk9akwswF5JxsmQ5dLkpUTqvXG9",
  "key7": "2j6xcoE9BfkHs6y3Z8JkxC6a3gPVTNRnKziCdzAd9uP1hTqBFgpbPEqi6Us8XFXWKwcdAGLbrQGCJoKxNFhtr6Uo",
  "key8": "Tf8hhcLEci47RsyWc8Sq1UKcHRwUzKrgAJH8Zrh4ZeA3Ataa3z2UYDjpMeSPUhAj19stExjA5DvKrai3MnoDstQ",
  "key9": "DDLAk1K2m8fj5jLZsnRF291Q3vRDQbUKSDWpZhFU7Dbya1NtfjztADznYty3cFZ5qVw9PuteBheaYA2VuSnHiEF",
  "key10": "2DVEf3cytnYpYXGDTnFrUdDGmfz3D7p7xFtYq3ePDcbbMXGw8j6kh3Kt6UAC4MAHtwnNzTzfXWTt8c7A1T6k4HhB",
  "key11": "2D1fGtoMg4kCsKYxB74A7awg9faTcmqKj5MeU7fGr8xigKb9mnSU3x15oPCXc4HixzdCe4Sr1aKY37yipKDsjqUq",
  "key12": "VJ9vt7EVVVHU9NmCkcv4gVbQztN23rwPyNvySqBv5MGiF5cZUASVXN8uwctEopeU9FADnv3BLbHPvNC8bnFP2ie",
  "key13": "6zMm2hjs1pNvL8y2Da616pGf2wS3CvwV8FzPJUkoy3FJ9XLKEFNwDnPktNrAf5i3pW7kbJZR39pqKrduNjvjfAE",
  "key14": "3HEvBiRQugb9NE4FDDYfUqQqRvbCp5qBPdcKb5Cckhv3sce4HfVVbRbPfU2Z8tQsipF9HWXeQdH4vEXa7ft9Ws4A",
  "key15": "5RGEo3fhU6bCHiXCMDbBEeDWdVrXJJt7z9c1KVkutWHsThRWk2kVVx7Eu6eLLDeQ4vbBDeGse1saGk7vQ2bQ62DN",
  "key16": "5nAVGYzCUWLwUT5C4veXGPU3DPkPUDirahyQNHr2A8H4RfxsMoWjNJDH5U5KjDAxgUFQXP6srb78HFA3GC86Yfk4",
  "key17": "4BaEHSjx4La5EZ5CcLAs6xLZeCXx5s6N1mbU2LgTVJA5jqRenJM35pwrXtYRs7hddjiJDwNpBoSCHEELMhE6oQAU",
  "key18": "39ggFoh4nw4xEqjGuH26ARyEWieGEbjNxhopow7MdroQD8AH3hNBP6tRjYuBC5Kfj5w4MvaYDXMt2rWqE5v4akh2",
  "key19": "5NScnqXfvnKjo6qGrW1Mc6M4q5oSMGtkR3W2Q2znz5SL8Cc9fojeQAe36TpPncStqH3BBLpjHJURfwTjbvVvJrqU",
  "key20": "4953bLDbFis6u35fjqQz73au1v1gyAXTA2rfQr18gut6c542Tj4Qf14Kmq7GVfPZAPK5KkT6b1xz2x3y8pYCHttm",
  "key21": "3syPTkKQsfeXT85uSdXCodFenLuEHRiHkQbfyUwtLrWkHp5tNKtK8ffkddgaBQ3KyutpSXD3cy6CmLdcwo1mA1fk",
  "key22": "2LTLmMRySpfrEtMfr1J1EgTAmyWT3Ww2V5CtpZRpXKBGdqaYJLDGc9EcwCe1U8FpxS69Ubm19vNWgt8d7grrSqv8",
  "key23": "3KHrWYUz2jXc7oU3dqJHUmfUkGg4dxFVtsAryPAv7tRNr9XnasZ355q6SmLEetSfcUs37WDxscnvLdyVT8mkPkd6",
  "key24": "64WjU8CxjutPkXHzoYo3JGz4KN9anfnEcQXwX7SuLvWJ5jTtzGjUSQ5S4j5qfMEbt63AZqvCtdhAyZAzNBWyLAcb",
  "key25": "4EPnjspwHCNKzQUND52LHhf9b8hLKZcHLTweeZtmZxdrzPHDaa5BiMSR8S7f7oke7qakgWPRC2LGcFHtr9DAaSje",
  "key26": "5GTMnwSk675pboQADfErqYjimGWctzGe5wkwAv3naPVLvaou7dsaHT64ypdjbvyD73Domrqggq8iYpHGcxAee3bR",
  "key27": "4ZSvgDnma1k61NpytcSbG3p1e3cN5mM5AayxjVn8wRAibUXsghLif3RdAYFEvFw8SjshoxFHBUadio6DBZQqSjgY",
  "key28": "zi3zHxKDf7bT3GbeBTzwpodcjNCk55bMxoyjefY29UbT9FENA8xW1GmmhQKRXAhLnYL2u3RqQGmjjcrfe6JGqQX",
  "key29": "2tepWHBiaqP7KG45n8RggTbotui2mgv9vbCx9Gut7rTh5YTUsxSTgNpsGfrqD93H7HVuFeN6hzVPFJEdVnJLgwGT",
  "key30": "onf3F7bFuLmwkpDi72dse76JAHqnUjUvBbeFrA1pJuoRqxokUQikKfxQpzAVdqzdZZ57twqB4AA5RNWbbxtmgpJ",
  "key31": "3BwbpjcMsqZ8YvRTCNMfEQ3hKJVGT9xjaMUHgdkx7XRRntdB8SiSYdoV1ah2evee74QfPtX3ZyKB51Dwryj5FbyG",
  "key32": "z4qtzCB18PTSePDgWsQn4QB6iNaUwmcAiGzGQParCrMwFYfDjCzaZgGiHBzZKix6EvyxFeMAEvPF2CJGHoPix94",
  "key33": "2QUC1imo7KoAcarSUgysHRyhuFG44GG19F83wj6PTqAWWdc4iaYCumUz6xLpMpEt8CBSHtR4YksdJHwUkHJy9R7V",
  "key34": "2184qnZ2aL5sJwBTsB74VgcwU8Hsus8pk5ZqPMW1vQRLv7yMLkigAC1wcpnZh2MUDyVX2v7rCW3bhdujmsAtgaDJ",
  "key35": "381EYinowwtUW7qwWmFPW5xtE7cEsmsoFLuekoRmtLUr3iHmLFC6KWKJNEwAnzCestUSrUQuZdV2FNu7h6XYSmju",
  "key36": "4N95Dv7ruN6jfLStWvLC4PMR7A9AT6inFBRhxwcvYnpRWADkgFT8PbHS4MgfCmPo7kEyu2xfU4o1mWadescDZao9",
  "key37": "5ri8Dc1i6EmDQ5TAb1T8CC6Xk8EA4REYTC8nZecJD2r59kYTjrEaVT52YVkbLzhP8o9NPymQ8qKwnb3N9cvsJDkH",
  "key38": "47dXRqUrzn6wFrNNxPbakXtTMyn1AQRQrpW7ddgpuVmUJe7RLPM1cfqNRFUV7go1uM2CrDHBZZB3A7jeKzifQRMV",
  "key39": "296RhKZLyUfxsWFJz98jLJKqmcM8nr9BdDV1D72zyj7PC5aY8YgCVhWuh68uZV6iRtqiNegWA89pezT8t4yDn8v7"
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
