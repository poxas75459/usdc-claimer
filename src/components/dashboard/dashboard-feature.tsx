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
    "4oNZrGe7NSuC2oHBbV2m9UDySbh464ZNotKNvrXUpJtgms2bXxNbLtZUjLLTAihvuDPo4dEDi6BCg54s2KjM1U9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZbCYGEzsoMFVzh8a5WbcR9HMyXZvgWbeowkMCctBd7fSxTswgfPamWv1BphYzfNGYULx4neRja7pT2NZdrHKa1",
  "key1": "5DuSfKCsDQUX1whSaCVoo12ynnuDV3rWPqNRReeJhztknjvhz65u81gwwRiCUajmoskjkN89xQQTRohCiDXRwA41",
  "key2": "3JjJhDfaSA1U3QoLugxQxgx6KexppcHgJLCJpacBpKBqXp2Uixuq1wgANcW7qwEuz25QLZoQp93E7W9a4QGSZCHE",
  "key3": "4WgqxCrwtxo2sXgMwCymQ9PXntwakY8nScwhbZj1fMDDic8FrLHPw3gUaF6YguhAiZYLQxbjhtL47t7ziedoy3TP",
  "key4": "2CFrPLiNPPB1GJMtVzdPdmKhCvgEm9S4nwHXTzyKfA1EBL5QFzPY1yrcKxv1TQ37SEdWp6L88DiJNg9wyQZKnzfA",
  "key5": "5pxxBcrDdeCwNQb8S1KfBtf9XuBshMLzZthQkRMGHunzXSFdwyNYCmZwCEWAk9TdcwYpusyGoFtr2pHMydyuX2tm",
  "key6": "56VagPxomUbxwgUBhw7MAXFvWQ4bVUDTMUVahVo6KMB9g7W2pmeSvVo6afqUH2PWxMYVfVQjcET12REMudR8njQm",
  "key7": "51U2TjqWg12gS7HZ4B8U6dEfGsJPsz1WH3EduSmNipj6oofjtkeD27573TTBrWR79dNYuN4aE2YpGM2jdvpZ8mjD",
  "key8": "isW3gyATYgp3JcShz3ARGiyWS5Q7SefTenKhrxZE4qnsoNZbeQNSn4DVA59TsZUdnznsVS2jhYNqRLCVwpAiRqV",
  "key9": "5TGnRegEMAy1Utw8d5Pu4JH14xsjwMjf31cEZw8qx5FtEg3dvbsrCoPzNEVjbBHR1yd4bZ2UN9MDTZgZnQrpAmxJ",
  "key10": "4EXdzTc16pWK4zbwJbXZK8AHcdvtoZkjxenUyD3Bw4ZHv6WufpAAc1Ggcp5dwZXM5Y2ZxdRkfecFjNEUQHsSG17E",
  "key11": "2UgSPdH5wVcSav8GbymNH2aVDCGPbE6AsDGE3uZ9dbQmGGHBrFKs5PQNEuXbzTcg5nkdVRxumWLBf9o6iWfgbj7P",
  "key12": "4gR1fX4qjxVvHGgtqhKqnCmc4fYbqWdokaypy8MihdxNVkhDHBuMHwGNRMY75LCXK1hT3xRMniSuupr4CTQh3Qx2",
  "key13": "A69iU5WffhAAKYC9sa3eK7VBMd1zviJwz4z1Bx5GF5vfjNViZ228Vh83zHeVpBV7T5RwLcDH8y9VaPD95BYRRhj",
  "key14": "4HKJy9KuQtZWqx3KtJDWxC2GtBabRjtdHtMwmG4ENcH9smL3nnw5kbiuXbw7nQEKyBKqTdspngGbWLbRC7LF62Ub",
  "key15": "5AQoNk7YecFigMB2z5uh5rKbqbTmRDgDSrUrt8npNeWEQzizHEfppWn64pDbyaovikgaTN5oeete7dMqhsrNHp7a",
  "key16": "2wH64JyQGDYxhiM1VpFX9vPhmHvWNNUPMm9MpANyqou58jCVZTYMTDG4nVA1XoDng4Jgqszma37J6Dq55pWrVxHk",
  "key17": "5eC8eqXEbWotLBVnpr6umoci8LPu86mRNbotAqTCNbdxuMEm1vnzP9ythgBxMkEjjbc8i5dtxvZbfrEbbCHi6Qun",
  "key18": "2267J6z17eFgPADCWWSSLx7o1UnvNzYrY1BFM4JQp8BMXxBQdng31D1q1QeFzFsVDUMrJ82Wxdu64u6e2UFeJdDj",
  "key19": "3Ft5uexzj1HjRH36uxrR72uPV5CsVFoQekggKSMR9QYsw8pLWy2GNKPvBAqW9Xa4aVivkde1CDB25i6spRTHDvnU",
  "key20": "3Ke1HjrKPt2MvpGrypiHEwaUNNtTVxxGKaEfmwWxq6t7SozbU4u7weQmGQ9AepnHX8Eunki6qUPHTaL59px3HRUR",
  "key21": "5Vq1L8nRB6gNpY53SqR54sSihfiJyhD5kucDYTMFT5vSufWYBfSnGZ83SZso5vgWfL9QQ9vU9wSNGzdLkU5PEJsW",
  "key22": "47jBXH5HXkNUPheB9ULQX4b3CahyN5C3ZxUYjfZPXUV61YkbbkVWBXUx7JmnL3pqmHxVZK6NXfDczY9o1mqJiRM5",
  "key23": "5MhoRNX1WZQfkVyB7prUkjYwQ91fWcRCxEECZNtCTecS2D2eqkzvQPvP5amFLcne9CQYNX54SopjTNGTaeEkowuu",
  "key24": "3zFSkLHaz64pbstYtbPP2PiLpHfqaZbAEaN4JW5KzrkfQXUR3ndaypgUCCqmmrU9vrteq3Nqx2JyKQUhU9mctXXD",
  "key25": "GaajeTe9bMfWpNUqYj4j4ERsiedAjG8ZVaBq3QffucUmV8rMf6ifCtvG2fPCz3DhvoAqSxHTstSGtPcs51Xy3nN",
  "key26": "EtW58ZYnmRVGbp11HBjTqjymxkjMPTudYFW3jeXJsWHbSeDbbWsMZxWm7KMcit3WXRnXKHdhTTR15rwtdbQ7LL5",
  "key27": "2sgZ16RxNVUuYGXC71cWiB3R652Dcn7SDHCNTnzK4gVvszFA2SbULbsFX2VqCaqEL77jWH6yeFPoZdT9qr6rWEHy",
  "key28": "5AbhWRx6nQzqfK3bSdVxULMUyJbGJUbcfeyzprVgjLezic94roVsd461UpAGbqebDdzadSjWSCyRoscwj84XAE3S",
  "key29": "4qbLcgz15ZS4yFkss3NSkYZ3pydsgFQyguBLcate6h8ZCijb6DGp3YBHXmEQLL3VepFXY5csfT1cvHqCxWXu5Hp1",
  "key30": "2seKVfdNkELbuM3Eh1B4QKJPaGgVo1J3QHuLCD9b4TtSsZthiPM2hgWcCFcPToZiT497jWTgjFPZJPfAgVyMDAyt",
  "key31": "uVCYKiEMxkTxkUHEyrN6qMfhoc5T18n7czVjM2dveXzmrW3V5zaGzfL9a2QegSmLTYXhqma8AwjfGMmTZX3EXHQ",
  "key32": "5sjW5t9x5XZVJKZvFv7uyZkG4RrhMeJvuJ9AJZpb7FbrocWTcpxvutZqZYkh5pHe6dhigd96VACeop9mL3gdCZE",
  "key33": "5v6R6xT3Z1m17SzayjdMMAe8zPAEXuPaeh1yLcpGYpX4EwTDVn9jBnnEcKanNMYuQXZouZ6YnhvzxKLc3nYYoocw",
  "key34": "5SiCdji1wmbxbUXHqWv7461iFsmEjnvVpZ32N2BoP9WNggz85PyTPxCdpFd4ta46VbXtxEPdD9PvQxqymqUHSykN",
  "key35": "2M1U2fDH4dgU3fyYp8KMdwAkzNC5bkeN2RjSEKsAgPYAFQKpWfaasGRmxFCcpbVijXtajeQxwKhmK9Q2R9CSaVwj",
  "key36": "3GdxAMaFFJH4hNWzrPCH7e2ctqvpSA6GbaVVJLXnmmEJZ9oh5NJKJ4N7B2QX2XRJEKXW6FQLto6v7xAyhacz9Z8Q",
  "key37": "41PnuhZqF4gBB9sVAyYhX7hngPuBvVYwGFeV9gJNwetFmJ8qEYxVEJpxfvnnjxSDWUUqXMhiKmpdn3tnULEZBUG4"
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
