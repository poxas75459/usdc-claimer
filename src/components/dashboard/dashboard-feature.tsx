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
    "24edoXiW5vHvvo7hXnkDdt3ugyq4h3cQdUVhKuvv6ehfmrWLkmCMGpTpmVF2FmUg7FAVQREeHWxssWrQM5nT2EJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVFHRrczkMLWGdqdUttKLSTeJauoNd6YYCxduZDxiKGE93oWfuUA3D3419qRUk31CKmoFvd4LhxtjMRkpgBQsEF",
  "key1": "3JEoifTernD8SMsphhVSAYz5bzAyv1q4zg3TnRkCRQZtWaQi1bzooSr36iD5qud92h4jZ4CghhLWVGCYak52HjV9",
  "key2": "2ACARrxsbSSzWqFiviCHiRkBkx5syssQ2njCkMoggWwPCon5WyBANouJKF5h6NSCCUp4ibqMFwEnke8KFsUTKC2c",
  "key3": "2nRA9aeXpyTD37GXLdNUVnudDpKGEsPaKyYrucE6wvR89o3fhE7Wz288QRr2Xsgh38CDWyRLvviK2DJRoanaAdAG",
  "key4": "3tRdBPgsLU6KAiTKYvmcbtMQ7rka4yo5ppr4xs6ZN7sb3RUgQXaC8Gyd9PKcKQ3LWY3sUf3TWso5pyiohVL6AGpJ",
  "key5": "5Qp9Vmf7fVwZJcipXUa43QJWJBz8ZfPCr4WyrxFeKVvKWrt4hWxvyH6KwYVtDYnpktFzjKVaM79AXF3DXtcsYW4F",
  "key6": "3C8xdxCGDXd7EgSp8f6U3ztdcX2E3WsW3mhrdb3zpXmmFtJp7QBY1nzXu4hv9PY6UsD8UwP8n3TWV9HZ1VZhoiB9",
  "key7": "5kt869z9NpeZMNESqoJcfy1xb2LbY8wBHGByb36fStwG1Rc1DS1YJDfXPUCBK5T5SXo4htMNHyK9gXbzHyBLu1JK",
  "key8": "2SUAv61bSLk56Myu5PgZSPxKkJwt2Xw4QAF5GhGtz3d6Y7u6MXyG4WYZTHm6xGtiDHcEkkoUeixPXTps6KHJWgnF",
  "key9": "5gYufa3oiuBF1PJZWCLYNHAHSZFe32VqDpVYdwZpCp5fQerLsydrf5No3tZy23jpNXzcg2hK2QEvojYSD1w4tyKQ",
  "key10": "2tHYsEGvGyGKnw6Ssz1nYYa4LUhEQ8jhmSA3JKf684vaWpEbFFL74PW7Lj8UJqmZNrjc2G8DxuEBxQcTeZfwqzhD",
  "key11": "2XHvHeeNxsqUYTjd1Smckj1d7E1vRkJ9Gmc2x1P6nx3TCP8FZFjCSwo3vaYssBsJnrz1SHKNiJwDkV8EbHfG8Kvf",
  "key12": "2cpdnycz7Lrskf6bxv4jWvtrjGQuhqz6We23BNpVcZEyse2QNvg7uAEMDXgdub41bsGrXvDDTbv9TcHabQPBz8pM",
  "key13": "5akmWyevzbkAZBd9PVKHvwtJ8qyxrjgQEBxJKrfAoriG3cAP5S3E2wkeYDRZHTznpydrz8uvhz8kmgvMjQ37SM7C",
  "key14": "2LN1aooENojNpHinnfjHYmsv3dAEYVfz5W5u5baaysvNzjwijjdDRpV2Vew1vS55dwUuoPaAiFoqpicDPfTFTWMB",
  "key15": "3ex6fwMMuQfvJxi1CEp9zxCY7mWLdy1ZmuptNpXWS9iEGzcJGzDcZ1gASVbHB5BrA4NFUn5ZH8krSpUCHfLNDryh",
  "key16": "2uo5htM3MVtZEWZ3fmXJEs1KRtqXL3TtpvzqpMGiV8FhvtRBysVbAYRgvnC1osKVcCp2ZYveA2JhXxEv2kYvguip",
  "key17": "eRbWaRA2QJLZenJBirdV6D8KpTv4rhbwmxeBo1XvzDwtB3xtYtfSTECAFbYnVKTogx5GNTEfcpnmPqXBRATFF9E",
  "key18": "2QkzW71Do7aNeUHzDzWyrduXrrSa3kA1GncBojPsdrePv13i64mPBny9bay48HYnpCkmHAVfuFMuaVkeDFMrbrV",
  "key19": "WSfpmAGmueZSwu8q1Ro8vvonTQXaXx3YYpzeqiTbdQKvwHsKKZkGSTkYXPcoPT5mHaLmWeBpTYapJWQZgxcERE9",
  "key20": "5cjAmKCyR3Y5fVdiPJ1Vs8dVU8dGR7RLMJkVwLjMkUQvFbj8Uk4ntmnPMdQ5PeQTwRfQ8know51T7A349q6kM8Bf",
  "key21": "2iM1tVhVJu2vLjxMNqxJPmGy1TgE2s1GZ835CQRV8BEPjhLUcEoyte7A4RTy45P91Ry6uHN8ictwdM2LGRB69Nyg",
  "key22": "3Rd9g2eUZBgcPAzZU2eC96CTiQkTKBokNRkAWqWNUF9BCMkASvXXs5nXRjLUUMSJ1E8pkZCQTYcya3gZdQqhimxR",
  "key23": "3ikLk6CKwxMwG9sXMpz13FdY2dfHg1j38Y5gK7SuDGvAvLD37bhzNutJaXvwGTvAcsCzjqi5FM1yYiGqHBzR5hkm",
  "key24": "4izSV7XsHemhqxRvyMm93RagLnU1QxfERU23HhCCrKYLgT3UbpBUGewtABZ4UubUtzLYuQpCxNZTVf6DT6DnKr3i",
  "key25": "M2J56u6ZoXLapieJ5RkbX5EYRMBBqfDQFwSBgM2QSRJbyUdoZV2fmq3xqKPqwJEYDhtUBXghdky1pu7Q5UmECFe",
  "key26": "62qAv6v7ppozhDRjsAAiNinbUcSShkwgubDFSXsroeGn38Qq249Z9VhL6WgochtXwcbhACTwLKKeqJttvJvBRZS7",
  "key27": "4nmTBdk3oE84GPguUmFA9DVAuVsyh12s8gvpiyU6k3Q8e6mW9hwr3NNjrsHwDYk1KS3fRAZjCu8CX2BaFEXWBuKL",
  "key28": "5ssDx7hkCBPf5zvw1tEZk1Q6f1uuHh17yX1hscES7TfcyrSrSjujNzNSbRetunoh8fnN5PxcA5mzNHmn6U95V4XE",
  "key29": "3qQeKFhau4g8sjFtmSoByBnBjRtPJxzM2qodS7bZBiJsXkuKhtVUfvuHPjkAweKQfBGZSM28BSF2Q5CWPVjDKrgH",
  "key30": "2uc3DxSyu9WHpu7zHfSHfYjTgfC37JjDnAgSunW8Kq5U3VugkskWD8yLWUJczpxPXEoyPyJTugEn4tkj17LqoYhK",
  "key31": "65gJF1ZsoCzkYS1YQKDvragwCiQog6sLss7uEDZ1sJkVfB2wxBxG4XU6njdSMz7bD9cs5GYW6NseaEVHCCvcfXw4",
  "key32": "37LCtqTadVEcPNZk1HH2Pnxtm7tkdg3J2sQzxSaRCkTx81ado4d8djuvYap7967UxgQYjDM8XrW4jSYCxY1P7Nti",
  "key33": "Hc9AjbMXyK4jt5R7qFS6ns7hg7GhZMabgmtQZ9EUjyLkzXuY6DJcGLZ95J4PXyEpjDWkmsmKn7CkP7M4HGFf3Jd",
  "key34": "36Cd6FJz2BDnX6yp4L2a2qBBXQ7RPBLXuqkNeVqMMfx8LmGMjbaJqJZj5YnC4r3vreYHKPNpT3BLCtHMcDKQn3iL",
  "key35": "2LQbaSYFoYc3pXmuuFUjaWuXGhAiWGXj93xPGBDeQ3qrXzW7KM5yY8Sss71t5jNcXs1eDuPKPzwydRuCErTtKK12",
  "key36": "28Hk8pPmxo28eFhWjGsKPTbLAS7xZ5vTv1wnvrfi4tKNexGwUnf5DTqmojU6wYQAb2AfaUxpTuqgPYkrUzio3qpa",
  "key37": "57sodv9Kz3Agt1yBxeejeDXJPm2rxYztL2homVV7fagaXn8zXBN5bBVAZQnPHDkH1AmuinntbpzBUXtQwHBU8Tr8",
  "key38": "2kCHQ1yrAxME8rJPRXkCBgy1uNHGqmPH6E63pvyadWnm2SpJCueDZP5d5yDFnnisuNdPqFF4Z1QHhxFyGVVLtMZ9",
  "key39": "2wXYE7Ftp8R1Mn3uyWfdYuT83EmGVSUhzpEzLsgBMDb9uUp6DyFM6wXGm8iVqtq4FGDkFDLhMfW7tpRzuUWWzu15",
  "key40": "4XPT9LJFeoZDcNXj6oj3ut71mSf9vVSWJDvjB4MJqcafzceBMqco1dc3tKANcgKaRqUmuY4269kU6QDDFT39uo4Z",
  "key41": "qqvRDMTF8nMt7TSt8teW25Zdj4BzZMUMtAr4qTiZCYHuMozrxdJCYkgc9HM5StrxPyJmb6udnKk5CfgSQBDA8vn",
  "key42": "4QoDqZKvapw19savj44vbocTksZNA82dMk79pzN15vCp9hRzTxLwa7D9A2YXu4VdhyAkPdEwgYXmkdthkXRBgAB3"
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
