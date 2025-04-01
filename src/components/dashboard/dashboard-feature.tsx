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
    "39XqLjrgENbUMDqoRRoy8RR8h2V6unFXrU5bXFpJN1c7VoGiqLrE9JFFugxhcz5Xf21A93mRvFFzaMF3jypMJ9RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3314jYdWAF2rqoc6GegrxDaXSeAiKDwEYaPTpy9XfhNWRkssip477nvVJadhzrbhiwpBUwfsdDMArf1fBryykB",
  "key1": "3sisLudMhBiGufLcXGdgnCir5Lrw2xNgmmrC5u4ksWZfLMgtAcDwRj8HUKk76MJz8Y8TgdoKS1sUVLhHK1kPnZHS",
  "key2": "S65xrZYquerzBKKWfK5iA5FSeGJKFTzYoHJ19n25DSLa9pQKWWD9mEVCuNc9ogKwnafE7E9wjJKQh7LjjQjxsGE",
  "key3": "5um9xW7EL4NQKX5dpjKZ5ng5NNK2b6kFPGU6vUt7pVnJEo26tneheve6VLu5p7fqQZTCorchj3QAkrngxZN2U5J8",
  "key4": "5m3o7HXMxGdXxCFZAxpqBfrgYkqQj8xMSwQDH5uDG1RorDdSSx8tcnS2hjqygq1JBe6PXd4dB8SywicrJqgvzCoP",
  "key5": "5Wzbwnszjv5CwHaYKhF4ncEseMi8Y2pzwjd3EH3jv9puyfMertQttzqTf1uzUyVUf5Ggi9jiA1kPPRXPvY5SvFxa",
  "key6": "EnM4cuwYZVJUByyBnwRtQ1noUDGfuwytLciQfgxpeRXFFBMEfojsPg5aG8L5cgcFrbq2bYqjigbiNCnZL2w3mf3",
  "key7": "KwprGhuxN64i3eCwyZMPfhY1LjqvBsu84kYkiyPJnD2vTkQ5rMn4K9TkQBC4WieraJbcjJuuuYtnXyCH9vYE8pz",
  "key8": "5Cq5EtK7HgJog3s82XxpvGcss31duTEsPMCisXWb6BefGjobsK5i3GW5YgLi11fBcDQ7t7GDpP4HJ5eS1VLa38Nu",
  "key9": "32UcDFBULHhaCBfd7hnvH33aR9gb8Sd4AtporZpy8aveBytQNJdGVdBzEdLJCi9XYhYVFjb5M3rAvagRqyi5y3EV",
  "key10": "5GK9qWu1XbHCvyxZjS8khSk6G31T3b9JV95LEkwsGZHcawRepCy1WoNNxEdSbm6YjLFHYeKHt9UwBdFEH4ADt1fn",
  "key11": "2fw4xnQgu2YcFx62gcFDn1uozAv2oZPnPYV1EroahjBneVa344C5pzVoLy44AFSHJVUK5okJ6Q7b84eduFF4FcpT",
  "key12": "4uBKXxt5uZBr8cTjsbRwzmgp15usiBWV9jt6uHDvrBVR85VoeBDHY6YF6LxewqK4KKN8ZKxDnMHRs7f1kzAf8Ffg",
  "key13": "2EZ6srcqufkf7FKUY1JC7oAi6nKqWCUz5K7MYsUatZqMm9huktF5xc7Q4zCdTKBN6CH7TCWg5h3cJEn3HndSYkwL",
  "key14": "26EUoADCzbaettmvmpuEht2Eir3uuiSJUpAq1mZ1ccz3unPUp1YyMkNB2H2p3qJZPX1w57EpfM8r2aetW9wokrff",
  "key15": "aPwEEQK2wGJXKbRu8HR3KYJM2r3iyUEdVh5SDK3ppM3zom8ATZDbdukmc8CzywPCZiuwXm2hnZq3cwiuVWuw8oi",
  "key16": "4YgSPPsQeSEEuvGbToTk2r1NzaBSvokPJvk6kCsXPoXVqoZrdQEQwNnR9kfDtVverDWUPCzbXmCYQwaSR94jicDs",
  "key17": "4cAaMvcYDyesPLWAXaMyXsgPCkhnaBeSDfxgmFKBt6qJeeivuX428MpZYmcrwFJpdwfdVjd5dLJJ471AFStfo55o",
  "key18": "oGSjPX4cSX2Yv8onCM46hS9UhYiwQxMFarBXCxL3WXwTTNdP4EDbSw1RqCjayfPKrV3aPtN9qWK4Yw3T2ey2otK",
  "key19": "5ZyH3dE7bsVeHDk6wQTmKfzob6Qwjn7RC1iRhfSLaEdUu7dmKSR7p3ieTWpUkWKugqKQTJj6vKHP8AnG7VgXRJ8P",
  "key20": "4HyjQ4QBXykwPUCMs6Pesj2DcP9s8X7SteyFv1CgSryik9yrQjQD4wmD2P7g22HLJmeajGu978ssrMfVSBfPFUHe",
  "key21": "2CLkwsFiZ61Hz2RWn1sa713pG6UnKWrFxtWNb5afYmQQzztd1dGHAx6FXUiNzyRMuCXBdFCfEhqg2ue2adxoT6Yo",
  "key22": "27njZzWpqgfCJf53Jynvm1XkqJnzUeCSn5DbAmajfi6XifDJbjy1WBvnpJXKYbaDs5fmVTQ3pBUHUtWKUG31ZiTJ",
  "key23": "4CKdqEb35KMmNwmXx3Qg3xNty1G4YRw5DdobT3D2xqi93jVZhW2hso6vKX9GE4PQe8PRHXCaNYq8yc5Mg9KM1d3h",
  "key24": "3i6zfwFXaYR2STWtMLVGNMC8pfbHtP5ApHrEwTuDHTTEJe9uTehPxn5TFHmaHtVnnxe1By7CGwMdzKAY9vHvg8XT",
  "key25": "4kpZztks3WbtEjsd41WJTyRpAXKxugShP1J39giNkVGVvz7Ua1Mt31bGzB4gjV2P3S3NQqBHND6dWG5eAtgvv5MA",
  "key26": "2ybQFW1shUd8TMkSaAQv8Wf9fiEywmdTRr2A4pZoeKoxazUQjDXPNwakrKnw5SVBKBiGNnn9McjXJzhXMVUpGqFY",
  "key27": "64tvF3YF8jwbJFAGf5rm475EUckv3pLT8P95p1kfUQbUKdC7MKZ6UU64KmTgYAN7ry2yqMGBeDVvPUzMHd41Vuuw",
  "key28": "DVGCieU6hAqqU58sY1CCgdzSqBKxbhfD1yQoFpKjsFcMzUdcXBSJqbKkEhspj4uYjeTwkzPnHhBFQdptcDop4X3",
  "key29": "gywRcCQVT5zWFktz1av5tthzj7y6YRn3insB9XC8E3UUzfA2jGcCxSVH5P262P8m8SJjX386nnYFQZDR13G1Snj",
  "key30": "aDTxjfndhKr7A68J7zcvJ1VxAgsYTu1Usi1d3aqHWXt8z16B15fsS52BKzVdzRawQXBmmNdXFv9Wmq54JtaCyK6",
  "key31": "4M6YdvejqrWhGyqGrgeaY5Dj2Mh8r2GXdV66Xv5YuSvKDcw6isjwqskPQ3yC8Et4uW6848XiGJEhYydP2Z3TkgV7",
  "key32": "2i4aYUDafYDAzKVxE7AnCnNt7awQPEn8q2JSXwqzsimSKRVMiwxXYedjdH3qz3bdJ1QVCbbENbrsw4Nv73dsethd",
  "key33": "56MxZSRv5QbHsMN2P1FEUBK7mXmHhmdbYxpbAwziFtVKgGgNdxFLuyt29U61JanAK8EdA41RP2tY9LhBu3YLmaL3",
  "key34": "fqHfJFfju3YCMGD1eJyDjLMSgMGiqA4Uf7dAUfaCQWKeYSVAnSPKRS63i6EdcvdAUL8bq6gj6NfsrmDt35v2xAn",
  "key35": "3F4sBNDGzu7mnghbyzkjrCCS2pj1aSrt3K5DmZNZjyY8RU2e1Viw8xRW9KGni2TT8C4UecC1KYTPfHizuVrv5j14",
  "key36": "2oiyCsnqX7eGa9tJC67J1eSFnTZUKLrosiEVZE6QNFPW3eYEZCqN58pNafXTQKyL8ABmPw4UnBMcPxhmvfyLq515",
  "key37": "3FGTQaJ9fCHMCrLKfUekzFzw7b2ifUC8iaoRWobGfjWKH6P4FX1smb71aPNrgbRVh8zb8fbEJw7SyFD8nXwu92Lq",
  "key38": "64A8MdoLZFXdDRLeEZdWqG8eBfxBWdApVVM2H2HTGK7hfvaZj96yJ7c2M4JP4KfvGPxZhUrzHCB1ZSFTLGJa2rtV",
  "key39": "icWLXy6hTx2FgXGuPEvPpmjQCNdXByGteoqayzCEDcYVuemxdTN3TqM6JVZ2WK6MmSwcNKNSFCexVsFhPB3FXCA",
  "key40": "3CTtnCT73tszgg2P8BVutEPrez9NXaRjTKM5BPmkSu4tNhQ9PunDkXC1XHJ2CExa818psVsC9X79orXzrn16x7W6",
  "key41": "nmKUpqXU7vRadbotKAyX59uKvcBom72Wqkpi8uk3jWnEeB86RqMdXoFLLMSiF1gejeVgUv3on3zx1JaYVpBYtGJ",
  "key42": "65qB7QXWU6uvEnZT6AGZyyAU6cURkWtfegyv1K5xjtq2GXM6VPNhBcnQ2Kvh58RG8xJDyEoMi8DoL5R2CfqtQjYL",
  "key43": "19P4GThn1r8BVhkotYFf9TdoCsV4qFQgwS7RgQRHDvw269Gs258oNeamTgh6BoPpQQv98oVzmwXfdTd7t8Gbs2v",
  "key44": "2iqKP27ftRiF9vDEUg8NbsEcEzDhH13MF3oNmrEGywprJZnzeMZhp5rg1LkWWEvmKz7e23bJGGQJtEQB1TcWLpXw",
  "key45": "266TUdDdNxkCSAuGUhsGTXw4sx5r3mWHisXdwnViHuc18htzwoR5CmPb6XJ3WLZ3K5zuZPN9FFxPXnbmZNfJZsCE",
  "key46": "39nkfkPwAW7THPidGe7E1SMSDQudF8dSKSoFt88JSqcxv1GtPjpxPTqZd9RQiwud1CjhgvriEspxBr7iJoxKaxs3",
  "key47": "2RwzCndBbu95yAjuG9gD3VELJsTSzkAnTDubPAGZKcgDXkzBNqLndG4CTzzetfLururZhWHHwtS8Grfq4eCuDmvp",
  "key48": "3ULZ6xpGJnhB3BMaL4QRUCtp2WC7fYFgFmQu7cF8KA28azKoK5mbW2epFJf5Uyv9w7ZbACuCHhZQJ7HWoHj7skBn",
  "key49": "5PrPFKQe6o986K99iWdq1xFEVJSEMU5ebHnMyi6Fwdh33iaUUShvr81xiDqsgQmGcccM8VTWE2QnC9aUp8p6Njai"
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
