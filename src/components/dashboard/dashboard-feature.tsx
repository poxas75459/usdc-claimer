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
    "2r5s6ppj4xeJweCVa7pacnsbPtuKjSPJuC2rYHcXAWqx6kMZzkZWJaEnifR1u63xH8VQmG7orrD3xtoY8mYUdJ3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKQNSctpDtX1MHvsyYWVft9doHFA1q99o8SpsBwLGaNx2SYtzgPLGidyk2Q5NAYuTxJSmiWDWgRpqksa1otLcu",
  "key1": "qaGaG6biB4xanfASTvAA2WvoxAcxP3PaqmFNvsaDN6bv8ijdA6fdde7wyrGEyUZ36ZrG8rCKcJjQNZJA4SJ8WSP",
  "key2": "5cRsbEhtwd6eUBruCSBcVo7Z1HXqosDMYjDUsQVaxr9XTZZbKcvho6u92dA6ihpKKTHrGLKhB2rkWYVULFXkk1Pk",
  "key3": "2Bn4sWy9D1grwACA47hBLyJrZTi4WVKnomji6EYKRLB68eHAxuCMukaenJe629BdKVJrKrKxYojsx3Qt5QtPpZoW",
  "key4": "AfdC1rY8izkkp1YvG6Bn1qz896ULqDCP5fqjAgan5guHpZBxuRPTkAWSbHEV9NgX6n8TFBjC9cq7oANyyd5WtbY",
  "key5": "5PRyzZaxXm5v3Gv7jNWLkJRiUDsEjD8SysgNTKuQasUdwKWWGBtf4c4p4pwdRZSiBHJZNrftxTenBof3FGEbHoGF",
  "key6": "e43hf668zAM8QVnEN2g3NozaUUpRcCpfZbrehSZa7pSR1t9okfrhQVBeiQq8XkQqSP9vDw1ps5abM2W7CcTRJyq",
  "key7": "4f8UvNszZ9dseUqsBDzFffearcaetpyJDjDx7LhoqrZLCha2sZkkMBXgfsqU4r79N9HoVftinL4NN7vNF5cVx5QE",
  "key8": "3yuanQA3UPSBae5x2qZ5nbEhxn2qarW8LoEBY7z92uVoGDCMQetoRhTqXEzn5DLVCwESveEYz3QKWhQZ2CH9cdDU",
  "key9": "4Cqsud5qKNrnqkz1bWgAVNECKYWpKhgNpj9x73SjoUH9Y4FhdJGGhQuJwxYP5hbLJmDCwZPJTMcjBkCmeTPsAwoE",
  "key10": "21yJYEffHx9aLARoXm8YYxqj7nuRAxEHLDS9Rt7pi6evoyM7FsBkTEVQiju51JKaQPprjmyWbyrCAc3AxtyNuFhm",
  "key11": "5cVuAQxuavE8HdsAyCBZvsG7kXypTBWRreuoPTppAEeT9AyHEn5AGqSL21xJ43PYvL8S7RNVh722RU4z6ggA6zmc",
  "key12": "3ZTg1VtxWxk22EdvtxT3UKrC4Bttnpg3CKV7oT4uTxdYAFmtLKuhtg2C7JfptYsJPREhWbgivbKLxPWytcC1kXeN",
  "key13": "4xuPx3GMdVppEySkd2kkURWKqVR3cN4hxj5TDWUk2RgjS6MaF282XS1sihXAnVTp6zVSHu3VfV9KTnivEJ64bECU",
  "key14": "NZNqUpfkWPDzvpGVVve3QhCSWrrGa5uWcQfJabNpiNXEh3hyJoveaD4RyBqK9X7JHhLeRpP2c3SBC2wE4FB6Wmq",
  "key15": "3Mv4E8PFa4sgQYTQkSxWXgwhCiNQx5r8ruwGFKmC1dvyvtTzN1S6uY5Aqe2asxKWdsQZEGmKML22pnfLNphRCTQb",
  "key16": "4PfSZ8E9q5cav4BQ2y8SWsUjRrouT7Xtv6fHGmtD58WJ1SoyjVuqTZeCjgBT6MHRAZQTpdCcgewPFxPrr3EC9wod",
  "key17": "37vB7JmWxzmH1NQCN22t8TYGZtNj4kPa1Y1gQXLn44SQUcNC5vaBHfXFKYTVVuRNVSV3sU4n1DDmaaBW9XuHhzpY",
  "key18": "3RvLMP1ewtVjxxcTcybzPQo87ooZdV2eYvfcBvECP1Nbjo1KkYRZbSDW38JYCVcDhqnJPyPdjF5vLvXcDzZsuJ82",
  "key19": "4tfCjJceNkJbACyYPpZwJYuxYrr7aTfyMX1Hyix6namMXYyPyWK4VHGJ1r96JE7HVM4ps4LdXSqAKMMsdhSEXAcP",
  "key20": "5mBm6HZXXNbmzVKSm9UoBUCpWdCPRgJ9a39PxLo4RN18r13EDbrDLhsZLHGt1sBCv4hF6d8P4cSQiEGqUqQ6Vi1z",
  "key21": "vLida66Bage9fKjThiygmG456RoHG5wKT36GXqV8hsQyogR4gRnNRoUJjUo2PbN5W5HexqFg7NpSFXbWVEAcHkR",
  "key22": "B9BYwmua3NhvvH4wV2mc9WbRTRXu8e2u2ytmdakE2qYbyZRuWbptCYxuBXMqAZK5xyhPprA6CcvGoYi35FtzhV6",
  "key23": "2TYTh75J777oNGQRFk1dqzyuaaKiCubmNTe9FQYb1sigdPo6WxLA1pqouYG3XBxcUzpGr6B2tfZJMG4zzifSTDgs",
  "key24": "2zJZcMg2FbfebQ8S7pV7kYUX3TRNJC7eqfS96rAv93DPTAL8KhM8oyePnejWmo6PiRj6z1D8eycsYfXfhz6gDvMz",
  "key25": "pvngFVuGFR9tRNhjGDchhTXNxKmDTxm6bDTD8Z6jdfJcmeY3hA9VUfqYdBQSHK51HGoB4um3qHJLtYSLKsVpSes",
  "key26": "4z94ZRxuahDgq1dLNj5oRtTRr96oUVzz7q1yoaxJYHv7U6Nv17YtDT114syrt7Cj7JszSySspBzCyauBbmJEJuzD",
  "key27": "4sdxHTapKVBQmYw8V3zZJGfanpsRtwuNg35stNSf8yajNaT5bsTKohdySNcTuK9wvxMkYQrHNGCQpSeAEmW5Tdba",
  "key28": "4as1kbfmwtyStcgXmxZnsY8Y8XPnWEokxwxWPduqz1VoA1oC3pCfZ26ZcpwKEnce6b7VEmXpdB62HiiV3rWAwtqx",
  "key29": "5bt2HTdQniJknmH9GthPVqDiLtnyius7Ff9wZNmmB6YxNEkN9FEFFNN8Z8H89rBUCyey11mCDXTUUq51AfpFHH9T",
  "key30": "2CeeP7ypMcFjB7V1bDN6XNMkgmXtPSGF18QfwBnQzjNiNRj4hq2x11UWSNigE8Nz8ythM7szYyDyVMuHWYRvgdLy",
  "key31": "58hfSKwWgWQaWuWwptmbTaSWQUaQQHqN65jGhf2sjBte3DpNxWR7ognBmhxiFeWUPW2veyeH5WkDfQ4s2YFEnUsR",
  "key32": "4Gr7XucVEgaMiP73HL2QKqKfWyxe67HavA8wK3XkevoEjUksekyKDfFuPK2Yp2RLd8YsS3SHk2Zgp8cB6Cv7Zs76",
  "key33": "fkwFaGXYve2Vc8dvcJ6qq3iYj1nCuvTMyYcgyXty74jJs22iNnkci5Rc2S7i6AqYFdxQj6QyexLszSmn32YG729",
  "key34": "4xDjEKymsXD6YVuoG616cPyCBJhKMPXHt5xb8sjNYacQDZYH2EnhAQJZffzmHRGDfeaXUgA8GKR43przy2dA76pZ",
  "key35": "kvvi8xFsG3yJGNMWZtw8qnK1JHjr5FK6dC8oPhyCR97G23C4bPbqj6vM7UyFPTMGPqVubQBc6gVUkG3gGBSB7Yj",
  "key36": "3RTQ5VaibV9eChsSSdHf7sjFDPeyTHp2KyKN6NgXp8rh5RSN5ddhNg6KTPdLSyPrG5Seak3hb23XES38PLuHeaZy",
  "key37": "4dEibxtFrijok6gV3reHRmdwD5zJCTTAL9pjrBriLZZCp7TLSjVFDDCx1QuzdL2mfZsphki5XRkNdkVXBmEYYeWn",
  "key38": "afB7UimjVC7sJLCAkBeJC2Y38hYmjENi6rf2jsTe4PrbBTrXwWy8M26bghceQYmNBuz3j8Njx311QMEC12xhUps",
  "key39": "4y72TffwrGnCaGBJJb4SMY1XHz2nRZ2CMV8P6FUgHcsAQnMduRamjq8NCwpv5cw7QNQsxtcPKrhwLRt1HxkVbZ4v",
  "key40": "AeTBGTRNAcwQBKGJUou9eKSN8ZPCYLpRvjnvFVNoRpWy2pAEvG8MT7nsNGMmLY3AjNcSsNMEMLdoSMfHGwQ3uBM",
  "key41": "43MESNGJbpyG8emgSE1CZ35ZWC4CqZ3J7Ua5MSqcq6di7rQ1J9Ym57hFh9pJNPKe6FBpE6bSPi1Pez2T31XdWLwm",
  "key42": "3LW56W9JTfF9GffCpT6i92E3LxQZcCHbSKHdRCLa3LZZqg1Hy8Wx3yP41i1kqTnBeZaa8mR1NCRgBUTXw3iXh633",
  "key43": "3nAAWPfb68T4hg1sFZ5o8Uj4Ng7KWHfe1d4V73eZFDF3vj3dYmENyfYBQiFvBawG7dZqL7mz374BuLQY1TSxGo6p",
  "key44": "8iu8A1w57Z2HQYfHnxaVomKwkjQZN1CtLtSBmiFLi4Swo2MPn329pX6PHAGXRGMgoyf5KTAA6CJstkLYART4TCr",
  "key45": "2Dd5T5UX59Sh4rYQPygTSTQYdMresHKUFPxTVH1dxNomCi3cioTe3feyk3S3xhCFfpbsPETt3rFCKxJVXXbjFd8G",
  "key46": "63S6U4pHd8GoDEyY6QAkkf8EF4JdheuhUeSPmdELbUi87cgL6A3SdA6FKTZJhwbRohx19jNCG2vnxTFA7c9rsjze"
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
