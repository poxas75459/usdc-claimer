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
    "2oZDRbbKNPakn8M67RbYR2wDyGLSzqH2m7dxqscM1U8pGYJbW8kBnd1JgMhfpF3bHadj9dNNAXWgNXn7Gt9sMhem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRERrPKY5JMN9LrpWWS12woCknoZczU5csrgUc9V4Se4xDSBdtRgJ9iMszxhGiGTazpyVcR9qx3HpaPu5BMsow8",
  "key1": "2vcLgSZM2WcBkUbF4omAx9J2AkQT2jQPY7uvWgxoeZw8UeDK8SK1xjKrKpqZEZ2to9HJU6cSn76sJcNN4XDBAg6h",
  "key2": "2PLjEk7bhM9Q3NBu2zJbXLrHHK2yxKtQR3fa3ux1bwMSoywXKMiduY4RwPWoivyG2Fnb63j6nguBQz2GHJv2gDjz",
  "key3": "PempFzwmsnFzykHosHT46oUfmqJV2bf68y4ju18RqQsFV2pSAueZSotdC5SZEAdyMpEA5KqUsshXBtm9ekSDqsZ",
  "key4": "2Fsiaao96vkAYye8afifh2s33aZ3D2eqxGdiEoiQ2UJfjzKq9utecZScoSv9TMMLDpXEGXj4WBM2xEjxcUJ8evFn",
  "key5": "3CWDVaXijwUn1FC85mm4Cw7Pw1HLBJtR94m7Yf1NU2wULBMWZrPM5ZfZz6ozYpZcANRRbCN9uHjbowApiTtocVWr",
  "key6": "589DShV5FdNv2UA8Pbvmty4wr9xcNaZYAGXwRLARgK7Nnj1zuzKJCAtb6B9N4EfUeGnhth3BBePuSLuTigmvbkXQ",
  "key7": "2GVaYVsscT4ohbUJretXdv5tUW7ghijgQLCByjRYVzxMR3GrtsvzmD5CSvT7vcHtMbXEDnViwjoEGFxJhjo2uc1X",
  "key8": "kaikLVKaTCBMCnjwJffV4pU6ppfUR9oVLKYNZ7KdPK4NXF9ZkFPUbBivEVvFv2MfRjntKvw8E4PhWGycPjLeBsE",
  "key9": "5LW8Di4VYL43FezeMMfU6Ezz48W45ecev6pJtxD7VQTS5L5adNbgSSvNzpWGFzbqW8zFRaKWjhZyexoEHSQwRH5x",
  "key10": "2pz4H4mvDEuCssBec4yT3TEkRTh9EC5My39MgaLf8JSWyGTnm8D6qVC3quxneogzchHbytxY8utxAoPCrynPedo6",
  "key11": "5Rxu5mvFM8VgExoMXYMSWwSi45XmS3cvergmB7TXwHEvanwhX5X29c3bGgXxUdEfj65C9bbxMDrZu7ergmLZdH9W",
  "key12": "2UaDvokhXrEYMDQDkVBJkiAAs89Kqc5BmRj6X6iv5nDLVBXMLYvaDeU8BTWeJagcXqaA8ber1o9dbSbDjFa5Tfj9",
  "key13": "56cj3hCaeW4kpwiDvA6CqQ15EAtN4Bu2ZBLZDzgcqH6mk5MsPyRioKmqZ8EQRVvvPmWtYUbuRGgudknZWMn5jRri",
  "key14": "2NTHS2ytoNZbvNiuPDAK6Cjn1ehU7TmQUhgGexiJvKNgCBPLWp7saTysXMwiX7vPZEK7q9p8MEE3pxe2iQY5Zo1F",
  "key15": "4dcM9feRYSrsBxgAtEj5Ltt6qu7d5fVX7Qbc5nofs8h7m2B44p2rAWqbSEiVHSu4a2qWb5MAzDkoq1pdi43FSXgA",
  "key16": "5FVupNd7zGv72E5JtdmH5VcL97TMx6aLdHYLb7PsCN9mdpkK3R63KrcsuTsQ76GMz2U2esyNy99tM2tmuBocooGP",
  "key17": "2av7xwGVvRmMnPT8o2hMNuNorz4Ge5aQinoS68qeKWKgced6FUwyJAr7CNx3ocHbxnA5Fs98toFwrZgHY8FQJ3hk",
  "key18": "YBdyqHy5QDx8EwGPk2v5TwTPLzQRTAmH7Waq4r1Fui16hAK9dyc8Sk3GjBu3DgumJyZyPV9KT6mGSmnHRTNPNHi",
  "key19": "3G3bi6QPcGa4v9FYbxFkFjEzX5mCbAC2VM82BUpLyhpYUHQLcyXpQS9CTB6MYvm2CWADzVxpekToeP1AbVRmR7Wk",
  "key20": "2rJVEnLzJHNNov5PE9PB1SEAyFFFgNaErzYw1q4STFLwhrXnPi4b3hdDUxChHJ7twDswDoRJbwt4NnDQRHrP6Zvf",
  "key21": "3Q6tw5UPmqdXhWgvshs9h2JaKBN3dAdPoiMaLiJgUnx2FkiCi3iTzSpp7FLSuL4emNSDSd75iZtqBz2wvkAwkvso",
  "key22": "2gxPdTDAXBVMSaiH2iwNCtnic47nGPtqeL4HGJQysnG1PQnCZmYENNX5NhCE5eTWkvE2mNhG9kRcAhRFpDxyQfVh",
  "key23": "ojew2eMy5XsJZusfa8JTZZtuqzmLyTURR3isp8PTecBduKyPEhfjH1xw8sc3ctrFSRWmcRLW9847d5jeBkR6Qp3",
  "key24": "4DEmyZHRG73xmSQj6PA1eChjVn8kZ4wDCMu1bjMhrs6jzxDpXw3aYPnhTmxwkDDXD2eGNVc2ekaXy6JYA62mCxGg",
  "key25": "tym4Ut6ez9F4ceCFtpqXcRjx1pMhXBncK2TNLEaTVQoQhdc4Yum92gf7FH5hSLmSLk5nPrXoCVRVvqsxNVnvfL4",
  "key26": "4inzL2pwaZQ1APS997tUkd8hoUxF37PVX7iszMmBqM5tPPVWF31vaEfddt5Zh5p4iHGYui8Fxao6Uy1KYYXumjDU",
  "key27": "5zHYyhBj8FNxYDeoM9mL6NrNFDjDuAACFYo4rB3Js5wgH3KCJX1Ne17oRxo282AsYJUwvPXu3cM795JCBnjaLwzi",
  "key28": "4doGN52xzeSDqAsRGLfuMQmnzscb4cxD6fbJnx34pgQJfMYme6GBZ8FhEU1gL9fe96TC4H7xF4UzaMtjNixCxxjk",
  "key29": "4Yq8wbMcPWsyub7mitmGs2bk91fYmtiebjfCicHZttz4Za52Nyoi21g2FrFodVLmfTcxUp6C8HSQxdFsr13xaWgv",
  "key30": "4HxNzBFt27RUh1hTxvvzzRxihto9PgrCAtgMqznkpYCR6JcunsBKrudAPGkD82cPBxEJdjNnwY6EAe9n7yPb6zqN",
  "key31": "5xZunHTWveRf8AnMQovtgsE5EbTjrnLQwY2FUpgq7iVayYhB1WJWhxqMSfG1wSMxUaFvVHBNzr3dF7xqcfz85E8p",
  "key32": "JTnMM6SeNQzuihcXe7Qd9XvzpD217bvSGuPWD65c79F9UxkDLKMSpaGbgZHAQ7UaDZ2yKQ4VnUbYP7gp3s3CHd1",
  "key33": "65Qa6bsMenUVSt9jqvjvp3HXeuLReMDa7HFxd89tamtsEBTCbjZFgmLdoqPRqNFPpowznPyveaWqwYCLZ6TAUJZf",
  "key34": "DMNpiXhjhYDNjpHewMnkJKkjLYB8L11dJzokuk4UaGviKiqg5c1BkHCfbSXNCVoDiCpzZdjYb6mPyJ7Sb1hUsgi",
  "key35": "2J7z6T88A2W4MKigUvS3JDC5W87vP9CRky8CEXsv7Z7DhLamjxJNkTrsW1n1Dcwbj9cXkL6tJn2b7AjhEtCQZeFs",
  "key36": "3kECxMbXfEgnihVF8de3vvSiwi8GdapxS9fTggjXSPNqS6PAgU7bMVoX48rVbEtTMcavcdEohVRy1y4MbNYbDz5n"
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
