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
    "4ZamD9ueT52j6H4GMhVAX6SmSsxn6NbFBzQhYs9A2fx9htL6ZfLNBPWE4XviRXpptJogp7echZB7zeXpGZgtxBSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1GdqtuRGopdxJWoKrBSQ2EKG9qk8HQ2Lg7P5jwzX99Foo8sJuWgVUVCsCPYEtpaydpsUK3MPk9D5Luw2bEtHz",
  "key1": "4vW2EmJ1ZxDXipQGruN7nXT7zLMyKLGXD59mGevzrfrDNPheGXh6w3jbMREZRG3Qbe9J9qbc156CG5NAXTB8neKV",
  "key2": "3EeR85HeGLW7L2y72nhG56seL1XwWSjRA92WYPKMxCmRDHRy4rG4qF79NSdZexZKmvgw5p8JjLdHf4yEQrikvi3J",
  "key3": "YXNDjCeo8TxqpnixJgtbNLczXqQnMMqQRhugsFvxBJCxu3hEVe4ywSW1hDnP7cZj1oQyVxBrSEoeruwBt5BgpJc",
  "key4": "kXxPAq8mzooqZ2RQDcbxT1zX9DZ7it8K6tjkQqVfm3BUiAn57LTuCZgiM7BbbgGu7mTNa67RidsNG81k99ai9jC",
  "key5": "FzRLdATow1cSESUmiRWsb66dBi7htywFY8MPpG654RcnaQxRLEvX3S4xaN1AQFeA9TP8RXs5CpsBXbVRfmjMam5",
  "key6": "5BKvxiSv9Ex8ssAUNa6eFf2BrABdca1oGJKKWCuCA16xrXvscG7CWtjzPeejE4Qd5YZcyx1oeJy6YDwuQtdm1rfP",
  "key7": "4jGxUghXWmAv2u9B5rRLU3LxW6scDn93iX2GNd9w2eiYDzzWT1s8Nr39yVCHbbk2zJqTQzLEiq6Ei6ZLf5g6adTh",
  "key8": "28X8Jr9w6phad6SaT8d4Zxvso3jFzP5MgeixX4NpzTuABxBcqRTxMuhivf1NHCQhRw1F9XBrUvaB4Ca37BLe8hMc",
  "key9": "4GbrHfpr3xnrtA14hTV4Sv7g3w8CkMCNRNsKugvSKXosmXXATxeJ8CrYzEC4M24eCKJB9BEBdvQgBPPz2WppQatw",
  "key10": "5iCB5Pb2GXLUkamCEEq6VXX3naKRRiDUEz7Hdzd5Mt3uqEv53B3Fu8HksnBAwfHeokaGYvxrXBUqS2nmjKp7DJvn",
  "key11": "3Wno5tKy9RagQq8vkRQ6cHKKJf4hv3C2FdSHZhjSYznFLyLCGt8SxJ3LbStrwzZz2LaMFbkonWHQca7S9W9Qa4Yg",
  "key12": "5TBwAUH1rXFToFHTdG6rsbjjJT8cW16HirCRqJhUTJiph57QxtUfPTZnjNEsX5cLsEtTHrmvZmmm8GGzNrJhXjRn",
  "key13": "2jePHfwHxi6SPySe2hHfTHeA9XwTBsT7hBwTSJZ19tWUrK1r9W2E5FMu9YhjYjgXXYgDtsWVgosGiqtpbFcNZ25f",
  "key14": "3QWDw6tqboiZdFJjZTqCrzXFC8YMyuUkFJigFZWYm33s2cXN4nKjcw8uwDAjtmEJAsduFEZZznNoTZ1DgAkLDqWY",
  "key15": "WjSMyDgX3MWC4nQ4aLYdMcLKkrN3ni5MJvJ4WkKjaX5UDPAKCT2tjVMWexq6x67a4TCg44pDqCQVCkUt6GVfuXR",
  "key16": "5a6J11TxNoJPbTLgQrc6EP7xKvz4LRLXHb2AtMWoBsf1dW1ut9KgYzXqsVBtoaj7mrK6P1rBcfhtp8zP6HHathSS",
  "key17": "4vHJe8V1GJEc8Ux6LMJugXG4fvnsPyP7H54W7SHqCicx8A3AGAmruTCrrct5Ur5vGcVKoaMHTLkdr7XgSZ4voywj",
  "key18": "3ikuaE3YRyfg1sBMKn7hBhNVPiYTeAEjz9vVvH21SzWxWpehmf8upj4n3fYyX2jiq2QKqTPd86fRXgqCKcQViy9Y",
  "key19": "4axDgV2UKfAbJBfYzCnv46hP535uhk4kSdqQ8M7r1t6VAMShFmTy4dgmMmmynT8x9exRxPjG9zaEHwDwBuHnTdCy",
  "key20": "3XahrYpJN7nHws672GqhDVfZPrhDkan86MvAV5yjUZLKjF7dfubwRNP7JpQT8zS5CWy8iESMQDJJBVN6T4rEwLbX",
  "key21": "4tjAMK1Bik2ns533jX2sqezafXtJw6mQ8nJXX29cjpK3LpqzHa4AU4ZEXxDk91JJ3kjbWumKTxhdkCZXgxrktQW5",
  "key22": "3fknWbzxTbUZk7ZfxMpy2Ftj97YHYBLCQ7FATsVVoa6ombNzvQyCasdjZ3QY3zg1hvn7NT2Gt5C3NruT16cgq94K",
  "key23": "2mEUQLVeBtfTDf77W6zF5ipQ8TFzQmb5mwEzWLgyCCw19AxGcHZrpDshHV3ESuBs7ukypt5CuYL5rctNdNoxC245",
  "key24": "3DxfMSgVmS5tTeyhXo2UekLexu4DuQ5vmwHqCnKwNyofZcBpA4B2knSCrPzmxKz47pb5irN7qXhnFCmvmejXm9ma",
  "key25": "r2WbTp5oAW4JJdpBTNAdnJuRHwMK6aCNWwZfMMAA4XMriVThWQ7HJCCXGZE1Y2oERUSE8LwVWgpjUmHiY9jZN2A",
  "key26": "4x6srZqrTdJeMFyusCYwJhNjse5EQx5uBp2CC3WcyQG5EfkYFV6d7fTetBLq4gQoXt7bU5364HJquU5X4U8sntxA",
  "key27": "UdhYVcaQanWR7m5WoMSbrGtcNxKcTG28o4Jx9Yara1n5Wmcpmiv9Ce3oeYdq7UWwB8wZbFWVTcAAcNNigPCdKz1",
  "key28": "3X4fZ2zHzQqt52ytKN7B1j8wfyRt9hGyTqtkc3mRN4FZuvGAqDYQZTbjDf3fnWqARW3bijNJW6N31fhwY5rdg4Sq",
  "key29": "31NxoPDDV21gKibKhDbmi2c5T8CC5mhV7bSNe8vjz4tuBJE9vCeuF5PkaKXKmnF4aVPtis4tMNLd5nt5i28nTxVF",
  "key30": "2ucUpeG5yrmRxkWjA6dxSw1gF5Ng8mz7vuKuiXxSwUaV2F3C1D847bsfHemyPc4Qkc6SHeom8mXsg6j1wKrwhh3f",
  "key31": "3zGgPjbDCF1QVzpEhSY44pT3vonqGQAUpDy4UKaFVTAbWFMV1xye4oigJhj67kZEcqw2XdmZ3SN8pV4RodRc55Vs",
  "key32": "2SecCg6PWUWPSCj8g6atRonuUepc4myGcATzYsB2PgN3eQUfDMFwVKV93V8WymFrRw4NNaRatec85xNDqEiuMVPD",
  "key33": "Cq7N2hvnPx8HHg1baQEUAHEtDsKhTsepLhP7VjBegxysYuDrrhVyKCRWL82J7AQ2yavQNnD4VNmbaPEH3HGNhwg",
  "key34": "vr8CRnruYUXyJDXL2mvV92Z77dQDHuGVQwKuiyYFUGSXgt6iTwzpvLwD6qRrZdbBW2nfQr7stQiMf47WebG5cQt",
  "key35": "45R6gujBCWxRLhAm14Ge8MFkQr3b3NqXQvDGVbczyfPCTQxW2iQGdzoo4mxudibneh2VZd25rGFmeNfSEjMpdsVo",
  "key36": "2BziDeTkS7xoryjj5VeV8AnXAR7YFciPLUae4cNZyq3SVgXD6Np4PqGaiNsDQx4c6EbtEqzDcAzYP7KSDjvaPux7",
  "key37": "hnmBFEGVJ2JhhKQCUPzvXj3VpC51DEv6otagto7oD5gYuBVpLHcDX8qc4ken1CQfHnpNnHCqaH48u5tvghJQrba",
  "key38": "jzZ753JQHBrxeHrP1RUZ5c3RCby1Y8gU9vt8oHzZ3RctrG4itwpnio4zHTxM7PDeqFhoXUp7cK9QRF23tQioDYa",
  "key39": "46aFs9BMEJkBmooor3NLRrSsR2UQfLeJLzRDHqfYG5wV4cCjVwPFHEkk1u1qZcWMPXdNd4X3U2Femxv4RMnZ52sG",
  "key40": "2CeqCNY4ZKMAeB1LriNFbM2a3YAWuXZdiqUnDBNm9uFzwYsjbhnK1qq1NVLyDL7j669fCJEiMcyxRsQz3i9REViq",
  "key41": "qGyvhD29rzrKBDetfA5C1sMT9GjufGrBHFEmrDqLqNa3XtZKZHVr1KbTVPdvHZDczFYARhbB4M8MHDD3Qpxjj5M"
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
