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
    "52ywjTbdAyCu8mzeUGRTQoFSgxbMsGSfRv6L6yZmmbh5kS87rpdTFB1ByNsfxXKt2RCNyiMXn6n4owCuUcnSrGSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMWL7isXmx4jkq1stPWqhEoqth3C5aksskw3S5RLJCSrQqt3Ji6W4WLrg4dUiFeF6v7y4Vk5suo4vsDKLQdx79y",
  "key1": "2EB2xbxdimuWykNzigxksgpzN7xg7vTy4X1q5za39uKshagr7YUBtzbAkGNUyXLLzZ1toc4VzgGMk6e3LySQGJeK",
  "key2": "59DhZmSj9L9ccdG487b9smjxv2MHm1xkZkaJQMDJuCzgboSXP4CvwDYscUsD3oL4oFnCzK5AvpYKvECiJdcVk8Jo",
  "key3": "54NgThtW6i7D6uJs4oTwHSgVQ8EByWYCpSGnACupFMwuBP5DtcyVeJneeZa5cThJpSmGWeP2sAfPsUQQ4SDy9qoG",
  "key4": "4mKtb3XafdjddANtxJM5cRbD9Q3a3Ch8ee8sXQgXqbonf1q6Mncy4ECjFf67Ug4hH14Z84kajihevoBHU1wK9END",
  "key5": "oZujSswfd3iGWZN7q4WC62VtW4WtKM1yuoCNqzPRpR4xjxVkGktoRWdjGkRYocSogS2dBKPvSNTugxM3WfXRCxj",
  "key6": "3mZHW6XgbJVYUGbnE5hn8BA1fTRJKx4kPqLjXmYCZMV5Dh8e5G9Qb3KkRDzxLbnCFJdPrZaiiUVorTDpMTcbwHqj",
  "key7": "4xshF6tFGWRBs9gjdKdMwmyJabSCCHmqTP9vBWe6Z7K11qDr5dpdf5nDqqsPaYB3TDNAEAg8J7UqqMXps1zVwsFF",
  "key8": "4cLhW85Di2TXZazhdjQudRGP7zgJyf8AFk56aXXh4TLAC9MqP9bDyVBAeCsLe9g6gPyKXv5cLgUeTCioD8XXm3bu",
  "key9": "5KH4ZHT3n2ApnbDckkogTwhmywgcfKs21zfqjkm3xCJxHKnHBXb1euwLqXvLFVeWAjVAApVerKJQRJZUdWE6TKuK",
  "key10": "4z1tnDZXMrWdBDZcJyUXmwByMY41xXppgAeoLun6h6BjorKkY76dag9CXWdXhWnKxtWa5VgXhnek8ZhGaiZdqBDc",
  "key11": "5z83k9PSN99SZoGNiDuYGjHTPf59qL3h2r4z344NKPdEKu1GVg1APBpXVHMj7ZhaDzqUvDDiNr2uBEpHktmDUHsN",
  "key12": "6LKnxisGH1fGmhkGjNkmR8KbdQe3dNCYSYGrpLmQgmSXmEPbQvhA2p8pXGktNVuB1dtQezNckuESTAfhffRUn3c",
  "key13": "5PXYVGahnypH31hdYnxce9NuCTDorSbaBrNMVutk8pZjcHdMgxfsG8ipJAjXPXRSKN7saDsNM3f9UNYtm4vp8zdC",
  "key14": "dQPBQEsRCUzhp54XiSDK9vXFD8W7cf95qfVaDqnDmEEoPNW1kvfEJXhQPbXkQmMpXkfozTEj2PzCveVvX5KHhvG",
  "key15": "2xqAY41ahkE9QjM2V7ckQZjseBdbynd5JGp6otNHFFg5YMHAVj76yYCzSgJeQQB9HPDgVwLoQmsyhhSVJmPQwUFU",
  "key16": "3Tc8Ndt9Tc6ygkZrrzhBQAhdZCzC4Kix3Yx5bV8ZrxA1vuV9Bu5fMGR2WCKvfcgExdGnEdVqxEpNosPhPZqDj6W8",
  "key17": "2NHUdWuyPjDj5qBcG5fjEcZfjRCv6hphZUZi5xsidY3cNxcJznxwJfEvJK1CzovSrvP3Bw1Rn24Q8zwyHY6smkDb",
  "key18": "3xR24Rbv4ULS5wNX3HXwprHisRbn8ZrudK9KoKfvPpT1BBgqaf1CeZ8LiC9aVHUipe4XYmpcpFUUYbAnMs5eiqyL",
  "key19": "2QDLEzornfUMBLo45UroaLutrTcbZHadCRJdwzUyi8LSjPScMdZNQHYD7NpyXHWCK6v2X4e7NPn8ZN93vQDd3TPK",
  "key20": "gUXPqcnqWo1dkucewvJG2x82dosmFVpci32k8GZaCN2TTPaFSkBb5xvEHdoShH3WQrxUy4bNTAjSinnD8852Waa",
  "key21": "23Y13t9sxCGgq5SEetbrSDADYd9qgf6tdwLD7aBZFSarYbUSeLY4uEJAWDDoWmsifZjrHioez8G4mV35NXHwx9mC",
  "key22": "3gAco5KKm2XnqzgNEoLgpsmBKnqdzziPLYnDM9oPpWvnuc2oZa8WsHx8evswEt4oVYYwumyy3BMrELcAgHG571Af",
  "key23": "5wu6hUt2TcAL47CopJTAEDEm4YFnWejzpcKunYcw8VTGnLpXFMkSm4t7kBcdJECNQiBpd4zAtnFseAdqJvrEMiSh",
  "key24": "4d9cSWXRXHmLBAkoqLneWHBYqGPvtKJDGcGVaQApxSkhDvH13FA3u7juD2xuLLorCgKDLKfHfQkVrQwspX88f5pt",
  "key25": "WijWhVSquKMUmrUbQ8Bm8bUZcd2H5BvnUN7GhTm1qRMs1wMs893rPhnN2rmkZgYbE8PeUN1diKBU48NFTfQ8Vhw",
  "key26": "2WchXRSpFDU8xZSWq5chYjxCzjJsioa3YZzawnruViGSJGj6LL2tDTfAUnB6Th6SCog4qQgb9n4w23YZUqQqyDx3",
  "key27": "61aX6m4FAjiyKfmajG1arQzUcE2F5pnf1hCuZEFeZ6444XNsfX92yiXxvtH4terhYcHTujf8HKDH3sGsiPNH4RBZ",
  "key28": "yh1XqRRgubS4kAc7QEX8oq6kqNgC36X9hsnGkj8XB2baeDHfUTnKp4vRuHjsKCU6Hee57c3P5KZYHVcPEoTTMXG",
  "key29": "tYXp9x6Pj4QfRqACd6qAPhaq9RiLQrE7na5gLPKEK1pGDNGgXShrwUnQZJxLCadNdynUjZdhaKfATAKuW1UpqJA",
  "key30": "3DQDsToR2yw7NmAL4dMjrmisMZbQX53mEyRda4HAr6DpM4Tf7MgqLkH2AubQ9tzp1Tf4ZLhhX4gkwuwQqbemwA8h",
  "key31": "231C1u8umegZFB5i9BMey1NhKuTpzEEPPUuKJzryRM73Yv9xHq1s2xPTKFC6RN4k8yjsyhJ4rRYYYJ2M3AbSQdkM",
  "key32": "ewf7t7QJY1f4xLrj11oRdsRYJw8KvsvCqSi6NhG5Ny5AFNVTGcmRqygfgoDeBAtSCQuEZJh7HPWtoTj6ae2yeNN",
  "key33": "3o8HBjnv739LLm7fe26Cuj31kgZFRDrpRL9bcpdgsNfextTXVUDmPW9jgMTbMjShJGZwLQuscjtX1mmGRjMuTpUi",
  "key34": "8sUxqM3tCZ3mff6h8B2SGjfLJHZnyxB1XTYpkr37wwgLpiYsZCvEXtLD9N9pK1VUG7vo1b1bS5vBky6zKzHdPqt",
  "key35": "4DawFSjPFYS978b4WzbXE9Qj76NLEwTKYVAkFxJG1jrgpgWEvANTaDZWpzYEmNWTp5w5M6xaXYM31DjRuUdfFKor",
  "key36": "5VzRUPBbcPcaw5WaQP12khrfqVtttq3Tsu8tCfepCa41SVbQL7RcjYAandLrK8VTMWZhftm54T5pz2d5twU5pmUD"
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
