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
    "2GdDtTq3xEGEKKGUEQednGYzkH4UZM6KepdqP1gjJttXCP4VT9dK4cTymv7ciH72sdgGjEbGAi3vU9FPshtohiK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZ39jtUwMtF6pNdMTPGmDB2uU5dA7DQks4NH5CkQqSNg8CH4qNAAhCPDLjujwsppJFEqPPKkBJosiRjubEVsYvj",
  "key1": "2MHUgprs8ZL72vSYc8cPC9sqxt3YCVdp1PQRYfBfQfxtDLazufj2SXjwKTVYfHGEvP37vLvXGPoNHkxpHQRiLPSE",
  "key2": "YCmiCLqfr2DWmc7Df9RTFwCWinxeMTS4mg1Kr3sb2VA8urSZjnU8qUFmukJw8x3Z1AzutX1fhYrQR6gL7zQWAMp",
  "key3": "4yrN3nmDFLJafNdNpWPr186X4b2ZY7ShNNwuH46Lxe6M7Jv9ejXaeS6iC2X3imwRBEihYYU9hc28FcQEYuy8yfe8",
  "key4": "5Zr5CKuPotrpLoW6Ejv5idU26NvmKJZbiG4rF3eUzgn1Guss5La72W9yxszgW4zjqrGKjfprbLCAsiXyNznzU6j7",
  "key5": "3ugz5mKrHKQLuanH52iLgVZpMQgwznrqqnBp2ABQbjkW2ZVLkDMdVm5SWXJtke8nRv991dMBSQjtB9LmJNo6wHWU",
  "key6": "53nxiHRSNcwTbnybNjuiErvxa1eukd2baqUC1YbptJvypeTgzMV7gnJa52eVNRT6WKUJfET5TyyLswoyjBphuBdp",
  "key7": "4aT6jkrFAEGF16obzih1zxA6MG5VaQaEDLDk8mAtdcxaBZfp9pxCmK2kVYAnQbfjnGNwLSPEdXGhzcVBroz2gHNb",
  "key8": "4h3DqbppudDvK13F1jYtKXFJnfk5CJYPFyPwM5y4nw7XHNQTw8PPaxH4gJ1WVDmxVbAGzTJQuM9BfSKXoR3uDsmT",
  "key9": "n5RhHXS3SfRq1trKnSUWYn7XJuX1NLkN5koPywwTNTQ76JwF4XDWHYKVrPQ2KhdVGaReQY7wiSVNbbA9rDpPryb",
  "key10": "2J1d546JpPpu6GmhxvzmPpmSdrF8ScTiGGLc8UJoKVBr2QaCJTg2HLTmHrgQgJ9REMv3aoodau5tsK9iNgSPuajt",
  "key11": "25FbnMF2Cfnxq5xqLFyeLeG153Ffqbp5FyURYVQTxzZ6T3B9U9cQJzTGB4xRvsM9PxgFd1SPDL8kmah2n8tqvVXQ",
  "key12": "3S6Uhkzg7shSqhKEiUKNb7kFPcmWJQwvsipKNcRLujsVq2hCsyik9kMv1LV92eKVBLJ7wzsPNAyUQrugFxFCgwoo",
  "key13": "44oqC6Up2t1oT6YMDxidBdEjCr7FMfnuevcUzEfgEMsvhJm3ijwN815F15Y2gyPfyH17ZLwhFVW7TuaDGN6Z8SdZ",
  "key14": "56ZeQLYwoyMPC1knrbLAQ8oEJV94F2BJcCqxGkZ7iieBYPkdvJr1JVEBmmY4wXwaNiYpmLEt9HjS3HGx6GAtARSc",
  "key15": "4qyXbNeWfCmyon43tK5TMrv21SckkPa3Deyb8eAs9dyZ99MCFGC2ksCUqvuf4Nm4N7dRNNGon1UeCYfV92P8eZrV",
  "key16": "565ieeR3hJm21T8eJKrFWjMdKZFrS7kWbnmxeG8XjAWEMktMCx9yZ2biyWjDzpGATcZLURfmoU1GFNdRBRgiZ6NC",
  "key17": "37WG3toGFRtStENDMfPPuFJBPq7Xvd2qXiSG9JKcAjg8Ns8zVCfEMeDXYogP9mXo5WRs2LA5jUX1u2wQpocUvBfs",
  "key18": "fFbk18Viichi7RrYR3h4ZFc197ryNBFsuZ5cN7JwwjSJtMbcgeEys9tUZ1DTp83bfme8mYbtMdpYSxPeR6BBZBY",
  "key19": "283ZBabQo796YbtMEFUps2G2qFMcc4iEsqg6A6FDNL37pSMraSCvZNhbtmZ6xvSXPk2hUoketjhMHG7XaFvkzY1B",
  "key20": "5fR9PEGu6znkgKXSs6UXti7GoPtiJS27JRpUtPQPYhHMGp7oRrPijsXJ9oi683WdJMEpSnWPLmvJDgfBbYFT9R35",
  "key21": "64nbroipAtuSRxeALAhJYpEwF1aiir9YT1zRHoadaGh2HrPYNGfCiXi1qeopWuxGz6tA3Y64DtTCPM3WwRtyyKDw",
  "key22": "LrGE1t2ZCwHTpJnkRjtWyTHxCwRM7jC9Ekkd9rTP5NiwAgfcrccCTan9FWhCDQfp996QH5c984vihzfMXdhbBP5",
  "key23": "65bRnj3xFagbQ2uC2KXA3cjhM48ZwcpgZYkoDd5mwhUq9KnpT2BjdMhDxibxXSnbAwbc85XXAb2fAcTfjwuyPUtP",
  "key24": "3q5GsfsshFFL8qUvfuo1WCBQQ2avpnzwNYKJTahyXx4WNH2WuhUojD73Tvnm9GoDLHYtHhrKkBgQ7uEahWbYXdot",
  "key25": "5h62o1r8pB82EDDsx4oN7JqFSHjDWMfkcL1gMPz1VRxdYWsEKq7jfbwBMLe5Eb1XavcZtE1EUUyHu9gk5wcHeani",
  "key26": "41BNbCKpYKcbyLmbr9Dxup9DUjhxHFCqdgqYpCjRFetRqK8ieoNFYubaohyfPnZLhQYjdJDCUnUUFsgKo1292qgp",
  "key27": "2MXEvhKNCu6xfCGcCUgKe865BgkQtzV3LYXHa25Ez8Ufr6hr2acPKA7GHT2bXzsxUaTMeKkK7AeaM2TRJQ5PaNFC",
  "key28": "2BwRRse7HGvYxY5NdbRRwv8u9ddWcwMLtNCPq1XXNyqjo6fbdXkNCoAnYYSEY7jV8cywffyUmxGvYBY9av1BAzRy",
  "key29": "2jyyfz2XZ27NrwmrPj5691cPrBvSAqAMU4f3peZQkjJJAscMHnPKyDixcycnZoyywj5CbszVe7Kiw6W6zziD8M1m",
  "key30": "26sdd3q25izAKogj3MQ7AuKvShQHU8CTvmcMV6MhwBwKnjCQrPktzyGg3iqwfJks6jU1Af6J93NzCPLyiB4P7ScW",
  "key31": "4mpAJSd43PAmhbSDqZdFBFVuiDKMRBBYo3ZtAVMAA33zfzVkzYwjNmSMe5BLRErMdh9HRoyaQJapbcjNgYenp1DB",
  "key32": "5ZdS9xnjQ5qaqcB9n1JvWxDNKHd5G9RaS3yin5RqDR4S7VuLoH38Z5152voFiGt8YQqXBtmvQ8mgCpq3DQC4bD6n",
  "key33": "3xJVqcx8j17PAicqrXkFmdnihxZH1wiX1UiFFUrUeFypxAx1ecvvW7BdhM5sWUPMLzDeviiDDkCGLGkTfrfqm7ch",
  "key34": "2YW1qP56iePEGgdUmYTzRLCELuQE8AqCCyJYdUvVcLDzXBM8eaU5mDjjg6Lj8mRWK82rWyU4T98XEcJVpJG4U62d"
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
