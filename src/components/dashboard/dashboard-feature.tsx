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
    "5k6wMNYgdi3S35WN7U72tiNYDaieAaVMjNdadGqDEN8yazcSBqEQKzf6VzX8qD8eRA7912huRYtg2H46VgemgPjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3BYLT2kxCF3hqUjtihWuqrjVNRenE2aH4GknSNMgCwLg8jpWSAqyX1Dh5JQpyQxyT1FUfqbLfFH1RizZTsx5Nj",
  "key1": "bWUZhKVbWLHRNxTQYwxUauGuRLR7eyqgtxvFziBRpn3rCRdVL3WrDMiUat8beG2Q4RL7M2kaeNkSjZ94BW3pazC",
  "key2": "44n6nSE4UwD4vvcfrW2Utu25XtWbVDNKNqWiZWi4PunVfTUpRijtEuCg1H6Qgr4y6g9rQJDo7rqU1etTn5LJKoBM",
  "key3": "4uVCiCpWx7zaAfmWA4LeYbSDMuWYg1rkiLDHjL51LnpXK34LK1NbwQRzaGGevKCyMn9PrxdAQe23P2UHbWNbzdLe",
  "key4": "2DZoav2oeNQYHt1M6MgpwabKk4xwJRVmiN5BaGbAmTXUaRRa1as7p8FPuUfNYTEZ4c8M2jebbthmr4mVSY67swLh",
  "key5": "5HjDcPVy1v7XgmFiQBdfiagpieBQzL9TYxiPoVA94uoMTN5tVJkYmpS77Xazn3tfdfK7kfHnwJu4RYwWRZNZfArE",
  "key6": "42KJCNmfQV29jDhMjc4ovneuuNTnQvySd9aorw7mM7KQVjJe7XA3UoKRSDF4UJUFnSLXx1J4ArN1UGtKc5TazZe3",
  "key7": "cTcCfcqby6RkVZg8CVpKdbw97Vg9yaJEut4Ln7AaURfZevN5tW75j4ZyXNR65faDD6DqBLAM9aoTVJmtmghCTa7",
  "key8": "269NRgx6KRYtSie9xYwFB69xFZRuU7numRGf33eA6NZ93PC8Exp6xddMbbdBc2hSeGd5QYUxuJANFtxeC2441J1b",
  "key9": "2BJM5JKAdYJwVmGXTjsnRockTV1yGaKGpmWX7iChHYmnGS5qbcqJSdcfmefjdP5FCQ6Tjm8GzUmGBcmFbWeBTfkB",
  "key10": "5EdeBdZ48bDfcJFJw8yiUbPBsHvap35wdjohgDqTYwBtFypS551URtkgdf6Sf9FGkJ3ei6C7fwL8T3SQpuuarvMB",
  "key11": "2RaTnM33CXwQNFdZiMEMXwtMhjjYZ1GW3bGKr2LCciireEQuQQzoSy1grKgZcGFLamJ3PQpJc6sw7nSc54d9DrfB",
  "key12": "GxHcCGrwFnE1J7nqguPVUg2GsaZ3h8FQx6W62MQneCo9aG6z4FHvrnm33Kyhgd15R5tpyP9aPbFz6DHypZmpdXr",
  "key13": "3VR9z1MLSTU7GFmQmrwGd3EF2hHiDWrTeDdyd8fKGE69ZJagjswdrTz9eYr679tkfudSGg1zdZR56mFB8vkpVeAj",
  "key14": "365JUQtc1gyXLfYV8mKf63dQpoaN7JT6ysyo5wPV8w3sF63D5K35gKbaj64QQt1ADbPtUgur98KTR7LScoasZkHS",
  "key15": "kwg8Sxv3DVwiJ89Fmt1HCG2r9Mbt4n7B16FtANM7XriZwv6bYD5qkL11RS8j9NL1WCBQyWwe3XZPAFsNXJdBPCz",
  "key16": "4zH7JWCTURyb6oPkGKPdVwaeugqqW1oQJbG9zpWSnVot63gn6pf84DP6TnHzN9TS64SNnm2aavShY3VukuRqcsvt",
  "key17": "22AS8NK27wDwJKasAKXV9gKmQmP7e47FgbQ9L31wLjE6MFDjHKD1N5ABMhdgCnmDwXkE8dTi5wMgWar1HnLceQ56",
  "key18": "538E9UFe6dECG4Vu3GuiGaGKVZxK4vTguLkMxLjZaxJJJTZstHVJ4b3ykECy8iv8RhkTKQMnxEpxvmt9ni8qv8do",
  "key19": "4PBRvTuDeMhcJMTKfsguaNFfmjoEaDZDArS8ZghrtiSe5KiGST8cBPJYwDJn7EMMq3NcUsxa3ZXVkgcoBkQYhU5T",
  "key20": "4GhR6fyDz5CGanrCaoHFnYJ1M1A8Dh3u3ZTsafaWBqxwecDxim7eS1m7rgVhxTL5w64JR2a3gEEDdcYbeHxEuTii",
  "key21": "2VZY89gxJH98sP9gY851i5JtBqeF4LusBSc9YGFk3AJGtZRvBwa26RgEt79AhkXmqYHequskmCfJbCZ4d8GXdmyb",
  "key22": "3Q6BmTPPt7Ldx1B7kj81uEYSC9RZu2HCm2jg58SkCszbkaJJkQZZaP3jKBkkEkcqVPfCk9KrYykL73uyyCGStKks",
  "key23": "3ESbkReh45S1eCrgz29SfaaGP4cTjbr8LYfqWcQB8jz2SqW9FwCqKQjMF62hbLXC9An2i5Khu3PXWAxHG4pdTWnY",
  "key24": "67Bc5mjdsCPgR79f3VBmiYtpm1W2cvzhBU1SxxVcYgWDY3sU5uJBbg82awrtRMkhAz7v9wWoQkNkUcaTmetqG3ys",
  "key25": "yEyiMbi19hygfb1BWhVi6bDPQAnVBTGuU3NtJ7hRrVgYjbRLCSK9PeP43EdtPnh24w7Z17AJqqJS9K1nmyB6Pkm",
  "key26": "RENwbV6aXQ7QCk6S4cMuGByRU2G5oKK8xA79oiyRWk5U7vupXCwoPBQ4KDSDg1kSBoUS3Ft3CrNuGDEoRBi8H4e",
  "key27": "3LgcyKBgayAGg2x59E2BUBaCZNbQmYq7RJ5rWi5a7d9S9TsFqcLeV9XL5f3zMnSJa5npLcCJC1ayaQ4CKKtZgFPB",
  "key28": "5dgrnZxMgM5MkzeyKGieraKyDjNNwwfSPTGwBaLBYmUBnKfKJVqd4GQgXn7qiqfFAMSXJ7BvfepiqkZDSyMHAmzt",
  "key29": "4RXMMAdLWveadeCzKcTHwhLP8SJTo4SjojxJxL5kP29ky24LFFsNYaJDjRTs4ygcp5bap4wnU2mVig8XtBTVKG7r",
  "key30": "gSxLQPrc7ZyZXbFH9wQhCGbtNE8pytX3wQRmZ58yBs5NoBkZBgyK2HCnVmgQJsru3EvFB5K71ZdQr4VfKVo3JJM",
  "key31": "QVGJPuNRjeXeAL3B793t4J5PJnkNCdvaH3qfpobPmfD897HNLZkPjnbePXWL7Htaiirrn8Hk4YFivAX4N8mKxhW",
  "key32": "2P2eFPN2fadJhauSPDw7HM6mg6RbMT1e45Mx9u29QAKmdHd923MHGzCo4DRENFdenDSiRYD8g48rj4VrfCZQATyi",
  "key33": "5JEWDvUMkRNkGkTBirwfDjHK9GWT25mbehYjVQJj4BX8rMS1HXaTJc2kzhrcxkQ7XsiziwMy5cAiop3mwARoAMay",
  "key34": "5CBo9GsBX9hs1AoMioWXhebsDA1CviYLcnL5a6RMuJheWXtLRhBrhVP5ZiLvXk9XM85W2TTLzHm1xiA3G1jZ1gBU",
  "key35": "B8RLX6VLLr9TK14jY4FyzXoFfNuVuLsQ1oaw2e1Gf7AvUoJxgRXAzRTH5J8B9UakVunM34kip6Upa5pPefc53pX",
  "key36": "4BS3MGAzw3juS6esXfeNKLSBeTtcVMhF9SGGJPDRVbVdegm7tXGQv3C7mXeqPK4yjwxhv2ATMD4VywB2JvPoGaGn",
  "key37": "4hMuKZn41B74fXwjmGTZUKcpRQtNNHKsL2gndYHrzQuPQe7MB6uJYbRnAbhRsUgTjtJXqDYmzKeMJFHiU7ZifHgr",
  "key38": "3yymv2sXgC7ughKMbjru8DK5AwZBXTFJvSfJoj2hENjnNDrYZt2LAqA1MPjPUWY2rEEfBam6n7r1gbNiaCPJ1gbc",
  "key39": "4HG85HCg2wYrwXo1Jjrvg8WCMfhP6pFLzXfMgrBeEHS3EXvq1bkkQaGcPLHUGJVcdqtcwpH1rNnhRQCJsetMzMaC",
  "key40": "3q1KgvaABG4bivp4Ltqw88Hrm12u2FYHoB31oLGavrZmuCVhMW2Tx8rR2hcn7GvAhxtfWAoxUo9nCuY8HBxjTeBm",
  "key41": "6w6gWHNEj4v8EPuLbiQZTKXpj8WwGd2skaeRaVspF5vPkAaqUYCon9ojkDeWYK5YqvnsdQvRQcf3sLtWNnE6AR9",
  "key42": "2mGmi6xEsB8zdeBKnU225QPRMXiPDZrwkRV5gLhjFQpYib9u4hDDWWTPruZrWSRA25oAPWqUSMwXXTqrvNVnm2nM"
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
