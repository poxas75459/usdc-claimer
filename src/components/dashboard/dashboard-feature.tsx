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
    "2aK92iAswqnNhASDRWPDL8Y9pVQLDujSamM1BNrxHaqQS3EgA76X8KZi81E7NFpb56AMAAPRBg9xcZGoeJFZqpEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HiSaWY7iYgQr3bws151y42XNE4fAJsv5qDmnAXEmQZYBF6GB1FE17y4pgUhsc1qDjRX5ZvApA1JmZoX4fCm5ZiM",
  "key1": "3SM4QxofjP2KEmzZGCNyn1eZyffGRsUYWniyGDBEJqxN1XvAX85knrSoqJTgyL2AdrAWKP66aibo192tzsZyzVtH",
  "key2": "2ad1qcCBSG2fQByy5VzDWpKRQB7KpLR7nUBknR5mcX9D4z76QZhEX4cstoLKf6Sv3seU9BJTcdxjttF7tVNhW8U4",
  "key3": "25P1W1kRqn5ky6ZxvsfnhknykjWtZfsyohaSA4XAqMGyfkZ6WCbHeNGqxJ3pbWqDAdbnnDnLcwDvTYaAYDEwzgyD",
  "key4": "4Yr7Bc11svBjQd5mfjn5A3scubfHjXW78dcJrCsTasLXZdUjfyt144UeyUMgmcfA5pzeEciJPG3msfrDw2zasGJJ",
  "key5": "3LedLTLayCfUAJPvf1iCqVk42N1kpYC7i4kDHDiGzHs8yuau9DLS1KtEXXs1pg3huve9JoLuS1KE8PYdPizXaTkk",
  "key6": "5oWgfbjtcM55ZaS6jjRMSZvQuTEKY29nRhXzv3Xu9FySr3xr3rinANcdMAzkwEZy8FzoWCatbaKVmgaXGRjAaDb2",
  "key7": "2HtQi26X7JJXW6aACspAofUzmbnFY44TA9vDkpmJcHCwa27UjrFLrNZ9hZGZjabdc5tAhbXU7q96Lii956sYrh22",
  "key8": "4n48NCi2LhdhEZkRHKnTeQYMBQn1zxQzqVYyo1r4Dx9ajhmkf6fr4n2Gqe9RGLy7813mBabzyxMNU4VJWKKym2vg",
  "key9": "5tBoTWLN5dnLyhCSZVdRte926A6gQ4tsDtAmj4MVPCrSeehdpH7XJ79vnrMdiTYCwf8aU5YDYdcSepbLdF38copA",
  "key10": "2PGJ3NTThXvTTwsyfHLZxukQUhd4SBeszHA8vXsLgWQWcSqG3iUzdKvdT5mwCobwWQMeX9HxTw9B8DwewtKLRWc1",
  "key11": "2zGezMHLRV2ERwopun8R2L8E6AU4iMeBgwFCkTkJAFsvW8jjDUcsZffPepkFFBW7UEELSHJeTLNEoJcCtPu2zeEf",
  "key12": "3bemxGkF4Wfbf4xmp8U4Teed8LZwSUstDUM7dQzGQ2isLedbJtS1eagffsQCkyieJYncfoQWLnKtJRNubLczP53R",
  "key13": "2nKvCemhcD8grWHULxjBcqubS7vCFecTycfNDsxGDhHjHo3euB9RppakYYvE6QMZcrBZJxcvPFBN5F5PGKg5dHQ7",
  "key14": "4tYVPFwXZbNSvXAs6E3zoEWUNuivokXxqyxYJBJY6ddCPqtpQLX6PRkss6V2ygd8M8k3qYjec9bFDM9WJdJciDmF",
  "key15": "66dypPueWd7NTXMGvEPckPKBWc8iywwZDYsJqMhKHcXMuNT2xSw2iCmNGrsZS2vWUhaE23KYn7dVQh4ZrKAQX88e",
  "key16": "3j4G2fJMPPyFKegTMtFzSVTWwLtkVSbP1supFocgmB4fDaKJjHZa7dECyJxb5ZYRVRoUUFkP4ju3jsbqGZExGVL8",
  "key17": "3EipEfpCkLF3byaM52HWPWczM1NuRQfG3RXv3YkzzAN653Ar8Vff6H8eZitMe5WRdzaDSAviGXYiYXBmpQdBQDXX",
  "key18": "5iSF96mPG7vbNum5caM72s8tSQwkhbjdGvLg7pSS5exmEpEqsSvknYbR9rPinoSM8ozfCAj78MB7ponZvRW2Vf1D",
  "key19": "4Jkkjx3TC5UdCqZqNirdAF1CfnGHg6jtxBk1VnrVcjJfFnaWdW8Nn7qSKZPFdWLD9jxzFUS1EeMvMpqyvGcLNs2o",
  "key20": "3W5Y4z2VKqfDebXKrKkSw1CFupiiQ6JDX8Uk7oNtt3qiN9kQMsvXMGHxMqqxiyG3AgphWEtqEvkBjKEyZYqViAXJ",
  "key21": "4LuiVQ4YPsKrJY3rNvGtorVFT2b2eWuRa1apEBiTELJYq37ezPQN687FcGRLqDkaX7raWVaKCBbG9JokbwYCuinF",
  "key22": "5drEbi43rAyRTNyd8wqKgtA5RYniHTaQq1JDTV4wYGU5dD9vdZXxSVRJbJBCbS7PKM99TT89R3s8MYSKns3EjG6F",
  "key23": "5cJNTWk3RMufpRmq1DDiUsGhXt8Nmd5ureWHzcxKjHeEutg89ho7nvRhVq4uZV8i3xKUXmom2fSzwBgy18nme9aH",
  "key24": "KTTVuYKoMJQ1SLMvULg56M4mQEtDkvDJqm6QAknYvHkPmDTX8Tkui3rHHihepbGpNyHbyUKXDxiFVVKKgayvF9c",
  "key25": "4ceuNDmPPN1cmeg76ZAyy4s7XEAJRRqL8ihbebMDzQUoRMXVQ8ec7Q51Y8nwhhGpU9bnd1F57E7GRMnLvdjofpya",
  "key26": "3e1XceBWKgFJDsYcFEe243cQLkfajsgNiiBZrYrsdJAhW6fVruPQMajX1ayEh84qmz2TJVDztcwn9nt8cyf8BxNW",
  "key27": "31QWEpaRjRuBMQSHyaTXFxrJm9z8qrtNrmatvjtWrW1iL1zQV1ugBzKYTSVBJEqG9ifUAk8fAocBPN9ss6H2ZWws",
  "key28": "43GMW7v9WQ4rHnRdDVzYH4Uii6fkv5mn8ufG9qCh7vxPXBLNdLchZseFE4K7NA371SuSGCfPoYewM5fK6v6Fbi9B",
  "key29": "5QFLHvuet2yzEpUJgRLMdvZshVejBZgxUA1qGsz28fVRAUvy3P79VExqRhTa2Bj6Nyegzbsc5TMjB3QfiPHPp4Q5",
  "key30": "4mtcneizdb1zjUj8cs4McE9RXZLTm9DUMBhab26x9Z7fr3UbYR1aWmL2Xibb32msK5ew6NKi1t3FJM756A8Xnaz5",
  "key31": "z8AotT3FrHSYXw2LWnMrGap27c6n5qqLrnHUjzn8L6sCVHKukGacvbxs3WVBT7SU6HRYVkAH2AGuD7Jwb2piDvp",
  "key32": "zVYtgsQxj3LZQaQhQSaPup4FcB1HG1f6b9zZ2RZ5yvWGZXrx2XqvaRBBq1xKUht7AeSqnSVAyR3fZvBC7iF4RqK",
  "key33": "6iy3esUGGWgPvKvFaEd883d1yU263ZT1qeUiFX8xaychdAqFs3bY7VSaCgjj6HzhNsWc7gW3E7bfQjHwgKpQdJe",
  "key34": "2s7H6NjDuCD3GiP8TZmvhD5UJY88oMRXa7HGXinWnTjGZDzbvVQ7X4oVUsxkuzhhG2CGFsNwZhfSBSJEzGaVR5Zi"
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
