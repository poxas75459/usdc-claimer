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
    "3zUuS7iVeMxHcco6T8nLvsni9oHe3Z1YhKXt4SCuhDSdMpmid5L8gLKotaUcshoEkG4AYygjbCozs6ATSqV1UthF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8z53ETJrfGKwi7TTqy2fNk5KmX5DJTzbNQUbTiPGShHtVLyRncJxyihismPjdGntA7wL9pdzMcjr8VY6Vchh8A",
  "key1": "4Xj91rzHYt2Ebn4e3StesGPDJCCAVrpBRCHvRSQ3gEXaoSU5SEVeqDq9kfo79o8D8bR1W5ooYVksPYd4WVPqw8Ys",
  "key2": "SQBtwbVQYWqS98wSxKgPQAk1xUXgUmVhpvfqmTQZhEY8TuNeDKfuMoKxDxewdycL5yDM4dCB2C4Qw5WQvQr8iUR",
  "key3": "5jUEZJmvYKwxJebKE6RUsSPwmx7R8wWP8QoaZJj4E5pfRgm8YZHJgh2NKcNZ8pDJ7bLnEtELpw5HwnqNPhZF8aXm",
  "key4": "62xTxnE5ThWc2n9pJteEwp5KRodRTffmB3UGojYFjxCo4vHiqtiD7Hbf7c1VBiiC8MEvJtQcxhekZbQATHiC7rbm",
  "key5": "4FTeDyMSn6UtDaaDZ6xfXXrkP5BabpHtyx7GBwMyZB4JTx2CrY8pxywZe921YCLpnsDwviLDVYPtz28EVKxnPexY",
  "key6": "5fBbxexTzYhARryaLiDCTw4qn9RtfMoh8xsJBYtkpYimHB381kDEMyuxNraYf8yyT6zeQne7EB7o9qcJAiVTSYHc",
  "key7": "3H2bF37yoq63YYKTWQzSxeWkcTALRbbmq1zPpAaqH81DjrtrPP1ngZbQ8XuDnYYx434pnWMTU2qm8pbrWtURQVeW",
  "key8": "3v2om3dgaXVzigLY1ktdApPKBixt4W9srMYUqLUKMK5fXaPXXd5YfTjhhSxVPQ7FAYQPUhYtEWQNQdDkEhr3CVGB",
  "key9": "4ULh2vtKnUhX7cSKem7q6eNqbsFaiFkM9bbpDhShgaUSdvgmfaM6sZMpqzDNFD58sA1YsVuG9qaSFGQQtka88Jmf",
  "key10": "5CLSmpit1qNkG4JAJdwaxVMBU5XyJJTxz3KsFGV8s7BSQ37kKS3Hw3fH1FndMG9g8uCko7sWLezG9qhd9cd2F86X",
  "key11": "5EULUQAvXTGWfWXFaRAdGMhTzooZrAVeR9zxaJ8j7vnH2Sov3tp8WEZzKF17SJzj2TytyZsDqA5FupJuq2hw88va",
  "key12": "2qciJeBb5peRMpfsuQWyYfffC2EF73vnAeqfXvrAquXfnN1C5qGYPfh7vjqCmGy6aDHQAU2oj4uB2uKEfLNyG8Ci",
  "key13": "5Z64S3AtB7RBW92hELhQu94diga2AUeq7uiPrDVkcdhwRWEFpuW8ZzeHywhRoGc3jUpVquaj7spWtgacPYYmynMp",
  "key14": "3UzVF4hxZPLe191V6rdGidk5LnYPfvd9UPGEsKropTCvnD9VFf5RH4t3QKQQ6HcbhNewFXKhEcZnxR2nosspcSMc",
  "key15": "5YnjFqsiKMAyqCvmwzmC4pmTdHaX53QE9fJQ8ggsBM5nAnE46u1z8G8RFu83uAnRtH7NhyVxPpKpDUiP4kK9qsuc",
  "key16": "3wSp2McT2GJcawcrgV2cmNqKpeYWNy9NZNKWrah39vmcrpq4bM3aph2ZeCQGeeviQ66jNMWRmxtqUQ4RiS5XTT2x",
  "key17": "uUwyJKth4t2UEktrGUfSxkhXW4cUq5ZdWgzKhnr59nPKL9eJ5Wu6ymBJPiyM2FYosoNhGAminKeRMKHwoeokujf",
  "key18": "3CjFx9xDTMsrsSBLZ2PqUgnCeyPaUqrwxDinp2Kb6BFVA5Qz6mGRjc3EBnzumRqiaThAi8emiCmY2rNKQNWx2ezH",
  "key19": "65TYCru5MVxYQ5qM3kmLFEqWa2vFXMcXvx9PdREyZTDGJmwCyuXcy6tkNd6gFCEsaSFyznrRQvmLWYsyHPFAz7sC",
  "key20": "2HUYktd5nHM1Uorq8BVioe2XyAPuCYQPwX172vmt8QRjcMk9ExkKmNGbCyCZVZe17BopqLji6Gvrdg13aeBXFbft",
  "key21": "4mwtY4caCQQpvPkSAs3CGxBVekmDp1oDbnE1MjSKpMAfGfTxXSYUUH6GDBwJ7ojw1dZ899Fe2eve42E86aKgGsQe",
  "key22": "3eTMprtkziQWp9Pxxf6Vp9NkuuJVcxZ3hpNak6VFJjgp2eK1u5eH7rConp695rg67ofSkinQEiwv2AB7is2kLJ1j",
  "key23": "3DThgAwEeNnNpEdKqCYTYHQVNpjYfgLphdzBnT6CzX1xsYVUx4QW3dn3Cp9nJ9fXv1xNzioz2SV9yYCBWT7BZfwt",
  "key24": "ccREooyg3VXJsNkBeh21pTuRXcvi5rhfwbijKwwc5Rb1oTvwfCFVuL3evqK6qXVGfGKAxY6pmaXQ5SNM2MjkLGE",
  "key25": "LcBn13vjknWcUKcSAR3NzhptN6ASnP1XuzBWD4z2XHJmsLqD7t5FBQUQ6PwSn87QsV9dnRvYoAeScsDf1zeKUkb",
  "key26": "my9orqLZ5hvfRmB96TKBVzcmhyreMH8aMca8226g3Rf1Y85sgqmf8KNHMb8boUBTYWevZFzH87HZuCt5p6eA6ec",
  "key27": "5juUE3w7KhHri2yt41iu9VjXGGYDokdBH1fRhCHBtyqW3sUqpebuy44S1J3MohrJgMukn1L62y9UXUQzCNf9gbxp",
  "key28": "4JGWTdLWebPLcxLXdS9JKuQTCTN3wmbsB2vPksQ6BoV6uKHVjbWyxNn3p5Fd9hBH5oAxoVanmh1yFGwHiNDUGGfY",
  "key29": "61t4BiP317DgVeoZceaunYSP4Hc9BmepNgJMeCHEU2YUDkMVaxLACAnZDNJzT33PHaftEpBAewM7DmRzbVVnZNoS",
  "key30": "2tuHWJGKsSkzDp7oR5m1pns1QzLPnLfJcpALFZtfwtzSWEsErhUxgXUBktdmJEvWPtXi8nVEcv5JvQFxXteA6rs8",
  "key31": "sUGRAQzxZwGqihp1Do7wyYE48uzjgvcT48cwH9oozmMm6NhfLX4GDXwWqhXkUsp798bKbH3r8Sja78cJAePk7yx",
  "key32": "5w4chxkYPWcmAmrHGD7rk4CuvukPcmwvi6CjRQWovsF2wXr7dTe5kmHu7L8PRHhp5tqzENNwWmgHbwoudSNRm7BE",
  "key33": "41K5ohEcZn6upLYnPi6fg6NBso8DhTWTUb6w9SSK45LWQiAovWygXprDoJPKeJkykKrXXHfyRi9H7VNMXpEXiLP3",
  "key34": "4gTifmJ3j6hYKXjSVYD7agaAr9Ab5MyWnt34xR24bR2ANz74ehb4i4bj188kXxjJpwaxZRSkPdmYnYqo4WADDNdm",
  "key35": "4gpNsWU3sJXWgSjkJNm2cVm4E9EPrtAUpkoA6ypiw8PAdkmPSx8zPqBqmfZF3heFowWRp2PVWV2G5Xo8pd93J7p2",
  "key36": "2tTAxyARFxREVibhVGgJnwn3PT5mnmshgz8jfbvSpNyLkU5HxA3ZPmkQa9mEgMCsRb6SzU3DyYGhtDjRtnmJrrH3",
  "key37": "4CyDC4i38sRsvikNQkmTgTqvRe1T7C5DEXivRPZVbKSYs1pGjN7WcGYuXX6qhTRrSF2JmVsGhuomLxtb2Yj38KzS",
  "key38": "4U7swYgvHQA6CbJgtE8tP9JXTd2hJMSxR36gBEm839qM9Uu8AzYpEKn9u1tij5fK8wtPpgx5NviVV9kHkz9n6ib6",
  "key39": "2cBWSjvJvR19RoUDj7PEmk6EwFjRHTmmmYYMFCToLeY95mwiWPVwDNDrxPkBrrPMDXyefKyStPbBM4skYEmBVkza"
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
