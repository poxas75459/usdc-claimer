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
    "5jH7G9dLhkihwdjt7yrMXpHyhQzYJHWPrHH2iadH8b2PoSXKyNdxKSkXXbqHWGYWiYKTkNRipJcMwSEKMrfUoAz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHsmRLvWMTenqPvqswWFzNcPmwpJu8TL8Hhxu9vR4fNPGt9fXjTCFvcTYffyf1T2ynkM3GM2rPJhn5fcZ5KhLtr",
  "key1": "2mujSMj4YKnmRX9vFdv42VYz6M4ZRdE3BCm4EshSn37qCjFRPxmcDaZDeLSbmiBKqaw4ZxFzi5646ekTFwLZeQVL",
  "key2": "4Xb4ZuNaHRKMbZByk99yfLPD58KifeAADmLXPyLTRbBqEuneJ8MifWgtbgqMrvH1tGzFiaVZz5kvuQoGb9tEaoeE",
  "key3": "4nSCq4bhX8obSxVP51EBd3Q5BTWGxyJUTTtLb55QxL4bJNFQDiietdBS7wYxYkoLk6tbF2Qtz3XcX2FrHSDkJb2L",
  "key4": "GPm9ELngwNdRRdc5fncDgF3ZpFsxUzgjehnNhR1NAknXJKFByUbYUVAEyn3kWiWsK7wixrjUjRNQn7rueZYsUdB",
  "key5": "5z3jptj3wYrhAANWn1fWHVx6V4qKrFj56zecRCnvzNApnByr52NV8mj6imjnFbZt92PYK9pbpDD2PPNiApp27iWM",
  "key6": "4fx3xEPEiMJT6o8MDVRj6xXusuqSyG4bxnsLy2VNHyZ8Wz2ZHwRweo8ddh1NFngaPVFzPv35rTPU7tnu1dkhmQyP",
  "key7": "26BqZQBcafQPPzYURcSygbzJHUr3ucsJKgNmhmBSy2n5xdRBVvLswhpkC5WoSaJiYXKT2pa8USdRgnypfmwxjUJY",
  "key8": "4BnWzoDtpv7zsPSPgt5cN52HgjUxaEmvVprtfyUjSHJeSHigugbCygmkw6yueouqG8jYULXJa1CxczmJPzUXyHMc",
  "key9": "4hEeJ8s494rVvd3C9ATJUv2azeRbCGwdz8c1s2GzZyscWkV5o3foni9tbic75T2X2pqbYb3DqqxoN3Lwf2Uj1VCc",
  "key10": "2SQxWbK2RHU7AfZtchN8XCuonp9hx9fTFB86rmotYfbiPsVTkjnvWkSPg2NU7wtQ2p28Qg1fqekfpehsps3ipHha",
  "key11": "5o2SPai6DrcT3zG5m32e2q8jgSwmoYeGpqd1An6cqxh7MBwFkCSmpzqvp95kvK5J8DHva5WhrBLN1G6ygyFwhSVx",
  "key12": "VrcF7T4qLvCyFidqZZgLvt2TjJYZLJAWYb8vBHhnTJF1XbY9EbfM3zjbSR5C137dyV4AkaCK8w8AY8PuV5w1PSk",
  "key13": "24Kf5n7bXLM9Xbvo16juXJA2pquojLassKqZtDtUbk4oq6WGSXttU6NKKhSFt8UZMD5czfzYqxUgwD5wYgfqapRL",
  "key14": "4n9GNfiP8542FjMso5o9MB3ibVY6JhHb3jqY62ob9UPnovggtuSY3bhBXJoDahx5cZXpXf5Lht2yndjRVLbN6bNq",
  "key15": "45VYqmai37ALHLWMRLe1X4a8fTjk29iJ9hrn2QTW8x7Ek4NhEcu3EfYLnZhgvQ3hPKa8USRkvXhWT9RkA1yh6key",
  "key16": "4TraXGjVm6zxaW2WwwoPeQNvJF7SwZx1uXiznat86982c5LzeJtoeZh8wiCeLKhdg3gZiQ5wZACbieySZp6cFWjM",
  "key17": "5esmQQETUwDkrkvjjHfsBRMgfhn1AWkq2bw916XtS6Zi72N4KtzhvaKsAVGyHkgna7L5ZkjrHKe842idfPZrwhGF",
  "key18": "59Wth5oXt8UiZ3hPEXRi8DuWkTymR3AEEoSLBT7GEBagjtVAaADiiu6wGYQcV4kMaSjqXuRgK174rmcKCnAxfe9t",
  "key19": "2BynT8cbjqgR4ek7oa8CM8XDxkirgxy7Y9dZtcBCHioEwnAhWxJVekhUXGEVgXwAzPmiyKayC4qeh2WGU1Lu8FAP",
  "key20": "2HHFYxbZ2PFznyKrDSWy9YhBmwab8B7ftQjmSWajqXmHrnnwTAi3JZWVNwXRyJ7mE3kFNisGYuYjafadECc4C14j",
  "key21": "2Mt3PWc8aSdX6PCwXvL8SBPDBZTnbot26hNxjrfTxEMKJWkfdWaX7g9Mhj1fNR8FyDbgncJXZGh1tCAZUpY8Um4S",
  "key22": "2v6fKT8p94f14MrZjDaWkZC3WbLKqKVd13ankEcsGcD8YH9KLTdVPoqEiqJxYD5ZZ4pcTvxpYztxEJytfzCR84MB",
  "key23": "63RDZZQW7aCvWAsRxKhi98hsQoLNacJm4f1fibdtMSUY9Q6UBvJzkJafUyTKh6H17k142FpfBsQauGU1vhzjEWvb",
  "key24": "2VsvfXPGXmTJ3gb5ffPRs62QSvgrSXgkxsZp6uMqmHa8kAZg8TXEArUdZPShbfQxx7irzM4kEq29abcrhryxs3Qo",
  "key25": "NFJweGUpN2hEMri7pKZkuXZD7ZCi4UyLvmbEa5ffuGfRCzDMv5kpk3ZVqsUuSqiy3No16sK8fAieUPquF2Y8Fs7",
  "key26": "U2PHek16otcX8VNm5Hr2RYVt6WmR5x15WnnuMfs3MRX1195W91nuEJdkzapcKtVgWQdxiYp7rwDuCgavyEW84BU",
  "key27": "5ZbseHzLfUjWcWsYHtpYd4wSQxhGvZ1Mp1LjFcERsjjmC6TQEvFuQsuWLmdUMDVCQUEC43wsRCDFHXuSjdbqJBZt",
  "key28": "5i4otFRiEotCryLJ7KnxJYotF9vSjyUuTgifAJ9mR9LY6hkPJpsT3NcTd9docyQwtcMXMMT7DoReDQ9dXeAWrtEX",
  "key29": "4MBdj2ASHhMyyKuYJQS2XU7AAxdPPXPi6qG1fPsCwMV6m1xGUPErV7iYz5ZQLEC3FfR8R1KYC4db8moDck9VJVFK",
  "key30": "2DqwuACvpbE19AF1wMPvjBreLbRzESVytnvkkfxxmAJmV2Tgx3ts1MtEGJpq2Vkm1ECmcLeHNFvPk3uMJoLjQuKh",
  "key31": "42sPPfGvrVCWN2r8pWZpXHCcS88RGD9KX2nG53AV2ZsRwAQ5ffAJfzi2gjtKr5e4JAM9XUiGncJ8DU49EmLbbQjK",
  "key32": "2m8owGJt4cBdg8iqXA2o4qJPVeQBUvhgoRPxbb7YZ2mdASHvzg9soC9wL9MBgbsoLvpjSKRcDiRPu3udtzsy13tK",
  "key33": "6WVajgd4vW84evgC6BdAtqvRw8dG57FkB38CWp69eBAVJLhqhCwz7Li3BgNibFvrsQrGVAbjuozKqqScuUhpS3y",
  "key34": "2mNoPkDehVpKTCm37No48vu7wDFuS7Rt1FMQLfDb288CyncasFziN3d8mDyauYKBEGZ36ycircGA91Lwq289xD34",
  "key35": "3Lj35xKXHzbqucWKSRXX2kxjvGXjNCcATUJckK5BBmi8pYRATnuSgWSFABbBASASUE5ZVEct91LjKs3KxS7UJsnJ",
  "key36": "4pWQwfU6kMXFNiy6UauB8rgqZyhdWLsz1gRVHRkrpeecXnkq8SjT8Dq5TdzwhYWVfQTdkNirF64W5K8DwQyfUHD2",
  "key37": "2fK4YBL6viamyqSZMqvhgKhtU7hqTYA5hjvkBfYsLbZurnsKnkTRD3B2WG1Tc6LNdwc3WBihSwLGwp59q2ghNYqG",
  "key38": "2LZnDwU65Dp2ymrWZtJfsXJGDwZAx5BybFxPAa6yuXCJezcHEji92UVFi4bVvFvgFykJcDMxEfSZc5BRHSfvqzdB",
  "key39": "66STEtKpjwwQKYAUErcFF5mzTJXE3bhQW7j2Rnhdi9doykDYSW22sHpXVQpLjdscrFLJcLc97teyatjrbBcRbCdg",
  "key40": "3Ybzk5AAGXQqemuovNxBUnHoSSGLSsDJiYuYNVZgJDFQLwqmFyBgBE1Rrmh3nyjkhg1rXtSg5wN367EyoZFT81ok",
  "key41": "5xpEoBRuU3Jf8aNsrAnwZT14RoYcJyLVCCfwA7YiezLm5ix6NjQpWxty1RpJkLHKU23QqXGJzMghfU9nMg3Hftrf",
  "key42": "2Hs6SfLtKRek3WsJnRzq5G7RNBsjJDj7Smn3NJQb6kxtE6MmjdFJPrreaTSEfUth7sb5aeYoXP5gcumsN7GS9BQc",
  "key43": "ksx7k79mPDUF3pb8xMcMyVxnK9Noz53G94rVSpCS3aKMK5NWwrZVSFbCLYTNKRmpYAPs2iWtgUtVHEyZBN8nK8Y",
  "key44": "4dz9mhArbfV5fCUPCJz8Q66mG3R4x9V7FgpcJ22HyJWRjx2C2R5aZZhqKEmbFHm5vnfEtYaP7oZ4SZi4dVsL13eB",
  "key45": "5JU4Jz92sxQeqpfCeg9Ly1rEm3gE72wuKJFQMjooJU6DSLuFCfYd7dTfU8V2YxKWwdkcngMsUqANSPX9Y47qWmEB",
  "key46": "2GjkMwSUcds28t13iiigfqY53n3cSzYobzjYXWeUTgRNMGmNsj35NZRMLnKH7d9XohfuV5PM79xJ165FcbHDaPUQ",
  "key47": "2ADnJB6skStAovLCpFx35GKzirsHoaLCNQsS31xXiZaAgsBr8CnnwdLwoLcCvNfy5P13vJf7zYQYtZGqCavS9AJ8",
  "key48": "5WKBsbH8gw7vsP2bTHXFk87Cxue3igkr5xk9WpkGre1f9UaYZEXrh4ts3MSCuHVhZLvbpDn5shfRTemXgaYBuBqV",
  "key49": "aZ63MVV1hXy2hVx7iFHzhbFf8ZqKqP7oRdZ4ppFwQ2CSovX1WMWy73NUYkG34KjvqXeHuYemZyZHZZmkH5Jd8Pg"
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
