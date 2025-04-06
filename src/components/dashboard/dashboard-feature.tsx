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
    "47E4WxCrmmPJ7bjGYGVyNJvN7pAYbBHq6G3kaBMNZgRnwnjx4fmu2mR2bpBq7z6QvpxDAkToicDZPJReqykH6e8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8e3VGKHKL3CgEqDRwWMMJmkRjJH1tiFD3SFaJaLKWSZBJemw57kMVZMVDTbP5Jafjme7YNwetXgHyCyvosdz9W",
  "key1": "nrjFWPakQ9GQr2bnWyW7qqXCT13EAd5zVrUNNb3A2GbmL12oARiE9WN8D1Y6mUizRCT62itMwunWDdFRXV4d2h4",
  "key2": "3of455fiU45hQ4u1WTSYLFLpYyuLRstZ5k4AeSAvkVkkLDjrKWf3cG7CZx5k7BvDSPWrTYjWaUsatmnuWw9fMsUp",
  "key3": "57NkEUaRt5HnQsf6Y8woDWTxASBSMxgVqD1tmKfVaBNzoQNcyHPdSi43sUqY3tzmXtJ6TqzRKF2wnnoQodP2e6Ss",
  "key4": "72iwaj2Ny1GxMDFu6aZL71n9AWoB4P1ZtgJzppwxUDPSG2D9BaR7BpnMgV5X6hiSSkMmi9Zav48Kh8oRBdwd5Kc",
  "key5": "4DZHEp2QiFz8c8Pow9tJJyMGa883jARHumiCgdgnqhQ6Ptjvj4B376vGkDunbHrS8dgcGQ9cMDjzdDG2Yt7MVemN",
  "key6": "2yKGK7wHAA6voHNnbuFy5hLG2266Hr486haU4hV449qB37Lfo1hN2ySUYa5BBUJYZv2qwPkDLuTMjw5odHtMyGV7",
  "key7": "4PaFMzpDiThn3voxMagaMEBX6vdBAk1xEpAKuvw1p8Xg5nJSHJiBcM18Ee5YrPFK1Bu7jy421VkSp5YssFR32eXS",
  "key8": "3Ee5DBcVoK9Db8s3tDPGhGqDBVkDRTXMzett9hWxdLV46Saqi6C8uL3K3bSW2qrFBeprr1NvKh3fRjdCWCfgsaJV",
  "key9": "YNRd9amHeTw6DqRoTvZUfWdfscMse3sMhJxtGFXfe1ahjCpw1gVzQYRVJEkGW5e4QZFr1eR5eybUCEkBBU9CkJu",
  "key10": "47HtS8K5GMbFCw56YoaywcNY9j3DkdUjgaWkrrDnPKytXzVvVDrB3yAiQ48oZmDogxsUpgLUdaSjzWeNv96xyRa4",
  "key11": "34n6kAZcBk6aVhbKWLBuBs6S2jjUcTyfc9bjcLXbPzP1aBnkPzrT2eTjmJn8j6euiq2RHVHfgnt6FevSMUUfSXJe",
  "key12": "4vQoB49KEA61jxbM3jCFrWuxBgrr2LPo2vyP32wRbLvGgGtYvbyTJQdns7d7vvabDYf8byagmCsys3KwRx8FZ6g2",
  "key13": "2kh823wUpkfT3LPNwTbJA7LUnrCcTCbPDJLVG26QR575VdQwfMoatqrTTbtEmbBVGRWLRC7egswLRxVq7Dia7gN2",
  "key14": "3pw528uNVj2nfPwyi8aWaFUgzSctQzD6CwQHtPkmZA8CDpcszNs9gpmc6pgf3KbnRMVjxJK19cAkwCS7fJBSzkZz",
  "key15": "4KAzXxSkiPfxA6AYDHxWV2hykVh4AcPjsvjn2DgUwKiXTRPc67XVwmbTRMnL45e6BtFfPnGYT3qDzfZzB3CezGzT",
  "key16": "45WnuEL4G4rN6CidU6QMwRpn3yYTywUGGHjP7evmK3hFayNE34DymV1BfJRjH8nSTa41f6Yo9LbTHx6bnsP2sjgS",
  "key17": "4VrJyA2yy1Jw5GhYEDtrkYYc19q6LVNd4aN9Rdyqn8jcSPqXP1b6uUomf5vpXUdL7hPv7zvB9feYwHqum5vGk6xb",
  "key18": "37BFSe2zYeeN3sxffMo5CuVBhBsouMWZ4ss69jeX1SK1pevdr8Ywna2z9rWRKwXdozHCXr79ZrWnvDsBc1KoAu2b",
  "key19": "vARwsW9XNbPPNPj57TFLk5om1DEKpUadkbVSbXT8nW2xW4BGtxdf78qY7RbonVXLGeE8wt1g1caj43sY1SdUTP9",
  "key20": "45SxBxq1BjCrZwZgjBWpVHppog3F8wdjz3v8X52ofwAKvwVVk4CA7eZepDoKvTNgcir3Wm4gedVyhf8es6p1Mt6W",
  "key21": "2jN7jp213F6QVEDeEGRCi1mWU2gzcBimcp4a6xmBdMpRKM7xRftnSRtsS4ZGmeF8v5dHf6M8qHLw4sJVM6yYBktM",
  "key22": "4Q99buSspM28NYYdnKxUWYiht7qy17UFfG3T5Y4nMjY5B8fxKBxaSiCvqdXKYuvU4puZNU2QaD94k54h6vvqTUNt",
  "key23": "NxaVe2Nqd4Mz33dmc1mrGxjisCCcykZPwTJ2QKHCpDsNcECSmKm548VfXweZhbgCro2gx6PvH9LQx4svUJuXSCK",
  "key24": "53vucAgf21MJMvJpH4PQcYatuRpYjGLCqoWeRyoTjy2xu3UUM7bew91gPiUe2LbXUF1Hp7cWUCYZLZx6Cvnc11LD",
  "key25": "3knbx8FxaYYU7Ge8t4wULvJ4XqN4ZCDiNgZyUVGLtjx89KUydxtVy9BxNSPkGHvFCAeKBNcTBpu2XppyupG4Ueaj",
  "key26": "3EHTC7MXgU35yjsFvQQ1pXTmo7NVqEMEHEUAXaUCt2xMFAhvbspLBidoDf6FXEZU1ReeXgWiTYCiaeaoBX3JxUbm",
  "key27": "YZmSbu8j3SBpDCKY61bJ8znEduS5Xqye2ABNPWSBEDcQc3DY4uQDxnTkgx7BHraoG9JakPaYhPRRqe9wJwM6cQf",
  "key28": "GjBLZ3xB6p3yRBQeJNfBpgjxMTDtCMe51QpWEi3sJjt6h8H3noKEwCAnVBarC7CFW8ZGUUC2ZRcjZwZ7y47nkT5",
  "key29": "2aVLkzbodQT8kJi9esFJxn219gztoUiS1RNiozVER2MaS4cZdzrhxduc7LqXcSMBwLqCE3mWGqVjVNtfvhJZfL8D",
  "key30": "MbYRuYAW3MGeqVA9R3vEtZ2Bu7zkmMAuhoVVtQX5CSuR19qrgQM9MgTmwnKksAk9bnqmkgkGVwvkXDVitJ1h6YK",
  "key31": "isSSb3hgg7XdyQexQyYyNdAXFoBg4wvRqHrM1kQfV4Kp6pDxhTH8o5gUTwjbLG5qK4qPtnMesTnfKfJeQHnSt8x",
  "key32": "5ZRRv3bSpyqGZhtmcSsNcVmpwGgbRErwWDiJDFU1FY3H8m6gJoSgh31HHCfVtZqvx8NoY5r9CPBREFNv7QKN8gv6",
  "key33": "3GAZB5xhd1X5VGeYFDNeGhBJ8znCLawUts6nxYMBr2vtvizQGzFux4kLKJZQ6hGYv8xLCS55iAaK3dLMLdmpyGX2",
  "key34": "2xns9TLCtVyT5sgF6D8bUXY8WykHME8U5cx1wosRKqBvUxbw7X3xbbYEyuN7J26rWboBPaJJsHPCCV2itG3oCuW3",
  "key35": "3EnKyYYPnkFYbRuD48RnDP9Tc5piWsQnM3SFpjZeVHMPR6KeZQ1rSUmAMeKJsvWLthBtUVD8u9oiT4tK12hVbkks",
  "key36": "2SG93zoYakdSmLLJzo7XD1iGLaNsL4zX3jRmtquEp4g9tAXjXyBCW52rkkikZS73THtLGLVTMmA7GHCLsq7c57Ls",
  "key37": "XL3apUkUmjd138PpGx1rw7HM3KYuUbTjZPAg7AdhLmfny2M8rDkATcn89wEvohbtbMMoLtEC8GUVd9DTrrG7LtV",
  "key38": "3hrd5XSUFBAZH2vsSLrKPVA6wpoLJpX3KZ8b4w6xLGurH1A45jFuPev1kRhBgAfZiwMPWMSCwxZkG2XKsWKzj7N1",
  "key39": "4MTF6tnuiVhLaar2khvTCgPfyJwjSe5qrjbQXDCHJG2Pbdqjpe75VTpTN4h7oZwe7qjdzckfpzeAUfLMtekmSfzH",
  "key40": "3VecvSPVYym7hU8sXtjYMx2y1ibyjjRCsYBqr5kUmpCz53LuEqDPDMexhzjrMqQUFfQPTfQ8BWrdPqUBRsFDHczZ",
  "key41": "3sh1UKdTbk68RD1rxg675JGQboLKmsQmuzxoR3XDzefW1tan194CyC6usbfdRtJbBz1PatDstg2fGuk3YkYbgGtc",
  "key42": "38QVYLBvvkudgtvQ7fJEE7s8NfPwFwqqkK6HFzE9wA2d9h6KprsmrrRdQUHaTMmNFwq9SXosxgThYuMBVXxr1d6c"
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
