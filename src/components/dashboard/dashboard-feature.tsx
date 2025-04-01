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
    "3YRTjJcKxX9DpXf8Eowavge56YKK2xiABxVZvBK4zKhN5iGeiKZVsE1AJZFLZxNbqPD36x6jQxCpVJDiZemywxTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWjf6DvLPia7C9GM2M3fo4ammebCyRCEkDeuEFGS5LZSdjQ5qifmUMEaULgLjJWDDZzgCmcQkdFnT1Y5ijxHs1z",
  "key1": "3VbR7ZgCQCeGWnkzmaECCU5NULa9eHZEv9DjvbarMcYXvcsXvMGaHtAxwpsCNrgKsBcB2Ppwknz6xn2X73SQfmYz",
  "key2": "29ZZW3v8qu1NNFkx1KvAUdApBc2m2vsDapvrpSMNgJj9Tf69fBTYuYvp9VMdqmkvHtn9puYFr6XnaxHZRVRBQZAJ",
  "key3": "2nwJFnMAUX56emYC8PXBAoBTzqaySZEp9QXe69DzWoC6VBhcigEipbV776deztm9rZmPCRhcRoZ2JJGeAUAkx5iN",
  "key4": "3VWTdvbC1wsAKAG8ZYPgQ4rFupKEAbydqDTw4VhLUbUz3pT72r2fMVtPANLYwuP7BffSFMT9aEThuUm8fSCEX3F1",
  "key5": "4y8jSvPU5Et8XqPjwbbuT1KvMuWT7QEvEpXPJ5ELCBzaVVwspXVXebZFdARHDdf8aPzX9LctLowqtfKDFFUMaYEc",
  "key6": "35MKD516CmaxCcJGYaAHJYx1koX5PdKtMc3MrvG5bFJ3rTtRvrLTCftS5ZRgmeddnGsoq7AXtnZon2sBmMmnpbdc",
  "key7": "y3oWoV7hY8sJLR1p36PV4zFh5e8Fv5BxLgXw9zxKZByTN4D2Y4VdtnhRsbfF7VTxpYVrTSGdvH1MjhBrt8ZVoUb",
  "key8": "iqNTfnDcqtsd2F6iir9HFQBGPpVRm2i3fJFPqxHjY6ZCKeDmM8o7tEhQsaQdGBUEsWDPZwMb8arx4E2ShM9L8Uu",
  "key9": "4z6aCCymB9DtzRjU3ydFA6U6P9opLHAKgeX9Gi9MiwVv2LSEfUdCYwta8zekPAnYFESF2uEP3ttWUR3J3qMTDSDX",
  "key10": "YjRmbWwP74LM598DYPRkA2Eh7mw29c1e4k493dcRqttvQRyrt2SJVsemjHEFBJhpze4M7LqWV58wrowbxvMEpEL",
  "key11": "3q4ovYYmQXQmKDV6yLkBvhUkyFgw3QBkAGy5TzEh4hTPAx19CzKbJ6aJ2pgHo824CkVFBqKBWGmwfNAuhVrhWoPf",
  "key12": "5q11hvS9VwoEUUS7Vi4RYCjUgLGMknDk1CVfHu1d9b3zJgCei9SXnjxGDveUKpc59Ug9RYDav83ixDv1YP7NCN9B",
  "key13": "5YXRziXbsWM2wZSM7EGFdq8vF9P4HMmGwsR2iTRgTUi7rWxxjf24dFcwm2jkvnNdacZF4vSZFKgEg5UVYaSkod19",
  "key14": "3h4YrzigqqCZPLPzYz9TJzwXzzkd4jxK2VdN9BTMmG4zy1uD4gjB4F6g6CGv7StTvX23tm1ceiirXtooPbFrd1Z6",
  "key15": "5UoXxN8zzYnpXgqgpa8CZEaAVEt4d3XAJ239qHnLyhVMHSN1R3ZQUhhe7HTXyGPtRhvoAZihHgfg9XbreUtPLJbk",
  "key16": "5mpiyVAp41ZMr6GQ4jTnEUp8ADgRcxPB28xTGmLpp7xUXLUorNQHzYewXyDkcVnrw5AxZPty1ip3u552bgQDwGU7",
  "key17": "3ZsjRDgZFt6EECGAGB6NnpgMeaKvP1fad6aBRqfNpJLE3PKdKLWMfoTbbXcoFgUzp1EiaVuKP8PAX1SmEo6Jx9nF",
  "key18": "21ZPg5Ti2i6AzQNERFP2W4inYJeUSiQC8qyUyUxT6aSpY9TmBdWReinjC5Zvq4pDmAWLTjt9zzjuuDe2dDB9KdAf",
  "key19": "gyJDqNKib41ChCc4y5ruoDD92tUSVsQ2K3TcrBP2FkKesG37EMv2ymAehosuwtBM4DmoGC2KuhTYWc9EAB7sJbo",
  "key20": "r9Q4jQYNNDPxQ3JVnyhfNA6K1EHUA2NrLByj1hWm3n3iH7e9jMtv6yCksqoZEjjdH7Pw16xyZRvVghHuBZD6DAK",
  "key21": "35NKMLviWr5Qk2hQoL8dpTw9T3LdKWq3qFEvw1ZxGM9bFmPfPHamgnZge9cGNmN8t8bWT1F1AuSM7vA9sWrLVSbk",
  "key22": "3u6mEj1M2XCfxAZ7zuwohxgCTyC8LGxHBJN1oyBKE5TQdmTADRnCWStSmec9meXEXURVajm6SPGu2s4biF1KjYWn",
  "key23": "vfBCXwJasw6F3o57rdmXLqNYa8dzmQyw2JTYr83hMVGaa2owtJCJ3ym1Av68sLrccJuQorkEdaTfes5ghbz6ybB",
  "key24": "42LBRfs4uvpmsXnpyyd2xxdfvpwf4FxDb5iGtVKiXw5G1N94hRLB4YBJyXkpF5CuVtMa9V7Qi5BWbGnhWKpmtab4",
  "key25": "5885aEsjMrkmt1QQ6uUkgmiGo2DzYTCJ5h7BumsPHiWZqgZEnJeQbYHieq73D7q3eQTLTnYHQrYAX4ZZCJtUxsoW",
  "key26": "2HvF8do8WsY5eTbb3VNMTy1vchVpEaxD2yMQMoSgYFzAHXyfUg8pM65Nk5zTWPo6R588itxGGKVuimJ6rsz6csNH",
  "key27": "26api1gX26eiCwXUx9Bnzz6Zmgz1KHuz4DTEvdQ3jHd5umg3bZYfsRrF5qAM4etNWtwgN14nGjZy6Q1TLweFPBKE",
  "key28": "2miZ6z33udRve8yCxBj5BAU7m9Tpe7dUZh9hsHthXXEuRJnajmBxdU2sQGRS75TYDwyXnDCjcYF3cyTVt7eD9AfL",
  "key29": "3wThxYfzcwQHfQpJ4b8JqN9z6ubZ8WNSEKoxPGzpSvPdrbvz3tsxLNJx4fozF4nHy1SU3KvrCtSoCPUnKHdfPK1q",
  "key30": "5hUdkKNZ6nN827d8AdbfqALFKy4Qbzc2bzZgGD4xYo2xc8dgYBSz9VNEobyZQYB2MHt7RjpKmPjhrD5UDpiHwaHc",
  "key31": "33UEyrAmEMwSZsbeBPsvyMGVM74qBiZxUSs1dgNmUDuq3aJsCctDinzAWofHgCrrCWHqB936cy9E3fk753o53TL",
  "key32": "gp9E5P1JKJXyYA5rxwsBDNrwxo1WE75CvkHcJY9sFqaQ6Nhm2DG363uRdpJScsDmcUKLeC8Ju3GeLpdJBU6uw5f",
  "key33": "4e59G4tidXxg1iS3iifa9hrSkQSoDiAx6HfTiC6CA4eTkPhdtDEaGV8Ex42UiVQ5onukASvNaVweogadyUzrEDjq",
  "key34": "3ze7j1ZgCxnSSvEHPmoS3xQ6CYRbFwNfe3QEGjdNdnRaXkjFXWdEg6DXUHxjzCNabFkAvifLn9GesZ8AZyMwec3t",
  "key35": "2BKL1PqmRPjm9tR2bTREj2hoyFp2RQXVj9Jo8cjgCRZjryro48sm7DaKgTL3HzwujfwEr6nscieUGXiVvc6uj5sJ",
  "key36": "5GioQSxPSCb3giH4CEdywLiVX12gTRh2BbxTxrHFPbSKmmWgFHF8941g6SYa56En7ZqWa2wgB5o43ZdjWqRX1JdV",
  "key37": "54szjmFjiQzt2JwUATjfRPQah77WCs8Abjr6Zj3KSBdgvondrKLgVjtXBSPtc1sws76BsjXBGKk7uRpQnddSin1k",
  "key38": "43ihB9oY8Ygh9S9e17utyRcBe6bAocBTJGww8eQ6AEqT6GJjzNMiSt9mWnhuf2kgaXtNxZ1EZ4ff7RPDpvEteswX",
  "key39": "3paCFMiPpaANE8yuWPuYeGy8koFescpiHyTmqk5fB7zubonBtKXhwU1xpRMokAPs9JiiFet4rGsEgNDqB3nocXZQ"
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
