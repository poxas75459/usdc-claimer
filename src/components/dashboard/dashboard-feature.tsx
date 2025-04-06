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
    "2KQxHdjHPNJ8a8MkHVSRAhYdm8NhV9NkYXhfiF1qfJuBhDk2HbnSYz7SBSwW9VH6jv4y7gjpyNMNtkzp7o3QKB5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zB6K3HPWvyCSmwNL4AL3eTgvTP1MAsVAjDjSCcLR9Ar73NB2wAaFjtfxfzzAEM9cs3oe5M2mXFrKcU9VpPQPw6Z",
  "key1": "3bWbwMJYqj8krYtoSthxZjdYHBDFcva14pSDj9wmeDK4pB48C7tLevnYHGKuWjwhdbK4dMZPtciXxmV5rftYv5HT",
  "key2": "5ZDXViw3waN3NJ2BpYgsHKaatvFaoKbjT8QvWCKrQdZoLZ7MxBstV2qqXacjYrB7ruVPmY5aLuadVnm6WDchd1FP",
  "key3": "5Joza5z4xjZfsc62C6NuFqoHs4E3scMwQiFJCh4Bb3SHZZRi5KxskP1StmSp1Z9DEZazaE6DPx8qMaduBxpvfSv",
  "key4": "3MVTaS65knvmZiuuPJJUvfDF7NkuX4L1XEMuYRKL2ncqu3T7x594RKg17o1DSK1jv8Bt251yH1UbJsjAvYMdpgmY",
  "key5": "2RFSbGwziQXvc1TWCmsoUqJRnLPjLtVUbVHvP3L2BBeFP1JmtMKNwfgXTD4vE6s6tJnLVuJTvozZ6Y9DeCCw3hBX",
  "key6": "5WgoCS4fFRWe6kr7smNUrdNvmPD2v2fNZiZwrAyJ4fD6R2nu9Xv8VSq4z4EvRQhTcFB3sFu7pdWfx3GPEWikLrMh",
  "key7": "3a1991pf6dT1ZCLZ3vvVF4T3bqCjKbUWN3CfbJkKaw72RZqmHFtg3yWgkwLorMRKLdMwMde4S8JWVMXdJ1NkqhH9",
  "key8": "3CEz8EatcAJGc8EuJ7kv2nrDnXEjbFK2mKQaCvk2Qwhs7AbgUidzY9cYudbdSHagVVEqgtMrw5TgQGJKqqw5bQ3c",
  "key9": "4RJvQQLq6tTHAU4eM3U9q7fqF4fzP7Kr11C2QQjVNH3mrfzxxMBh6uqYgKeUCynEQbjtvcyZs31kPcx6rZU4WBw7",
  "key10": "3pzibePq4jrTJgcyoYGJcKZpgifrV7QNxyaBjU9cDELpmDxWC8emDJdS27yDqyE6ZiSKz8yAySpiwCPE3yAWwtK8",
  "key11": "2QHN1Dpv66pfVu7iVP2JFZpQkuP24P4yizVx41iHC4fLCTeSA8UuReAjcC5c8cZawJmpf1RhxfuaFPiqZSCRDZd2",
  "key12": "Jh8xVEfuLeGGQxiLDHnQztPe9XCPqKoPHPBcL2mgPxUVBPEtQWr3nd1mduu3vkv9avsZqMjvcs4Ym3pngEzt6fp",
  "key13": "5MMuxVqkQf6vJwXX41WS6G655YWQbKn2SyYiPFmKmc8nynVgaa7i4gmcC5qxRPQmUFnvcRgWFVmAa8VQsKfiyd6A",
  "key14": "5gfzBrUtkNqFErbKa6TDRFDSJnFLMFcLtAs3g7Hc6wvRgKnGRNQ8YpqyF9bpUYcchWBvY7WAyqkTZCgUf6ujbDZv",
  "key15": "3CYefEYPXYJdHwagyaKy6fKvHbgrYwDxCVERj1nscNVxYLdqTmoHXWc6rMQg8au2AgMgzDkot2FUWCzmC5Bn3fT3",
  "key16": "66HyGnT1oYh2Fih2mkGCnA5SPsoEWgYxDdYR6AQgFP45knik3LMVCSVfnUaiSgkc1gjRA93XUzz9WVPTtDatEFjv",
  "key17": "35SfziUfuTENp1yKtQtobRrGaAcD1EYNyiiG2fqVupU9KxUC5PNcN661GRxD54phqfuhJMoVf2z2mRxJ34Dsjw8V",
  "key18": "3gkQiDHaUnUEXPsdisqXKCoSSUJyT2Tg5dtEcXVewJa2a5FmVhAxQSrABnUn83xMkKUxwEtB2FaUz2kSSMnzXks4",
  "key19": "5kVhwWegKFAkRHjB9engJiZmonzTjxAC2HX1WskizmuJ8fYDmbXWgvFRkF3CJ7pV2HyU3L2ubPfDbCznewnbzcdL",
  "key20": "B8ReznYHtdZAKuqmW8dHhaz6HEqyZ66s6ZVLKU5xGqjLtgk8VgSJ8S4oz8CtevzzysDfpPnFs4TbfCB4N5gMPA4",
  "key21": "3SvwBqLiY2PTEarE3eZHCb8Rn5o6JaZ4gRUQcpaGXmwGjQ1xGjKiAAFBQRL5kocjhGz5rKXBJQ2kKXD2AEz6fPsK",
  "key22": "2jvgBTx8PB8Ue1YYbJafsQx2Kbhy8jSsRWuqDNSFBhmEvRgnba5VhvbheepQhN2XLrgQjwSs9cs4CrtVckTjJptj",
  "key23": "33eu2edHoSB8AzeSz7U9c2XGEV7GSTZGTbtRFf3kKiW1ysBzY1DTcdV8BiQcDHzBQNuQsDFxVFCPnk6poR7cMiFV",
  "key24": "3izBx3qcX9Y5cZaEhff38JnQZWDRfXc1sLp9spwGipEYH8JZYJ2vdGeHP7CR9G5rM9BbuiBYyfFM6Z68FHEHP7VU",
  "key25": "26tJR4vyya8pamZgy9mEmKdQJ8PDxVjHs4sf3BuPU5SZam9jjh2kJSNmUGiAK1SfDz48YShwvaSqvpUT5QVKHi9w",
  "key26": "5SG8aKLdZgTnPKAUmbiAvTfeWFiSfR5SNwEvS2HgjDdjoW78QgzQKt8etcgGuT7F2k1QYdeyQ21EcgmSqC3jfDFG",
  "key27": "2gpwq5VJbQFto632FE32ex9atno7ppaXFqFCWTUvfyyzsfGkFrLwWscHXp3rk7UGRBsqM2yUwnSaFRifsL1CurFN",
  "key28": "4MMdr4LiEzobdTGVQuPtzHw1MiGwNwaV27a2RKh28QJjBufVTTsaNzdzKoz356DkSw6AYY5f1BYNoSjru7nKwBv8",
  "key29": "52DgwCENjhpPQk3uiPDEwpG1t5b8mtcBVF7aWfWyCaXkgwcPvLyNnYuYgRbthX2RNJ5AF8AH3Q4wbSp3nK82noHD",
  "key30": "47WwvmUJ4tRyMPWGV1rm72UbUTpXysBnEqsqA5GzfdaqYdsXcFiLXZhhSQ2W3bT3bv1c8FDAmq4GH2Dr5jQubfHQ",
  "key31": "2kSF2X5ipqDjDZcjAp8BgGaqoE8eLyCAwjieupCfetHRRUMmG1EWk22Ycbtq5HViVzbxp2uADMDy3hn6vnrmgt4s",
  "key32": "3Hs5mk1S5FD4dzTMCZiCz4F9zwQV2DSAJFwYCwLV3Sn1tXbnKo4ZSAXzU7ecVHjXEayMCMPc1bM5ds6dP3eBGnG3",
  "key33": "5QYDtFVn5QavmpPpdpfw2yrKHcG2MWX8m5kGCA1K2MHfeUfPPdaehbCuwdyxzAH2chS6BphasQXVv1Vzm2KzgnWQ",
  "key34": "3B7vqYRP2scXL8m8ozAFL7srEh8gnNUrwgCNrtbufx8QoepPUD33cdcjotxDchAYj3BpVXSbtxEUYGh4B9t3UioP",
  "key35": "3UXtrekv6m1MTtCL6HXagxV9aB7KFRoQkrbwPpHWjJUdNv6fctF2dfxRojyv5BSq1efQUidUZqLVwdg3d3iSpeTv",
  "key36": "3oGAzZfhbCJ3c9mNU6ia9HbDzqMcRwvv81FL1gneh5Aa11ArfEm4Fa5PCXF3CQhNqGeu5pHxgLfmBb6poEhCGka8",
  "key37": "2YFUBvSHfWWRWn9LR6LcnkaawpKv5brZHxKPQC4B1zer4bsUHNbkwZ3LNSMgQgx8a93siSYr75VNULsCZ3gEzdhq",
  "key38": "2L8PRhRznXhFTj2rcXpJiaknhrximTdYLSSqxLic6iLEPJyjKQxfVmAPARHmf7wz8zMs4xx4WZAWNCQhcmd5WPG8",
  "key39": "3zJGEfYX3ja16au8qrx4sHf7fQUz9J8Bdh2RND2ct77PHXWH35Cej2wJQaXcmKrLDS9GSe3BFYXWjWvA8EwA6Rbt",
  "key40": "XHmHciWLa9Lj6CpRRVmr2kGzi1LdixatAUGcVB8MAeViKzPpz1cXrTJHHndYf1M9ABxAUenVm22HDb68YXycRJ8",
  "key41": "3fU2oZvdftTqhnQuDVWHaHm4srh64Jx49uAwH57dyqwE2gE8sXdjbcU2QPe9d9gwVLDJ6a3F3YaUfQAKNCoR1C7y",
  "key42": "WbmbKK8AR4bM6FVrroazXRTBW81Sv5wDhNXpva8fXgZNeaQBeigjpz7xHM7DdQhndY8pSFWZnfRVp5vMXSM2Gxa",
  "key43": "FWQQZaR6HvcMqfYnwk4X3XVERAUrjW4T3eWFSav78bcGXHkFq8FF4xfrij7bPAEmjpVkUknrH6nmQHgkc8b3HTV",
  "key44": "2WUKgY6NZD6ciqoL4X2LEjJGj4sW46fM8ScMyefHjJg4SHVTUXzRC8HKbLn95cz1vtrdXfH2WB4J92XvgNfEUuZ9",
  "key45": "MWKdtaqFrcoPBurE5a28y18Xaeuyb21zNQVakGZqt62UZghry1rYY8AeYHVE8rpmZHsjAAYs87xaS9hNwoobjmv"
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
