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
    "28EhNt9CTc5rf6PwTPrzU6KyUnyvD8CXq8TM2d3N6vkt6qLadFaiH3kkVdLJNiGLgLjJoEwT2aUBg3CVXudQabH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVXEcrJMrQ8D1k28opN5Pk3wHYQ8d3Unk6qjAtmun2y8BsJGa8DJCw2tcA1E2dmCES4dPkLndc9tEixxMsgwuAz",
  "key1": "3TJSkiFnuPLmzANQvM1SVkLmYqbN5A9gJKzkd8EvEUKkpHQutgFEcmB1kL3zfLkqKqDRaE3WCLHnnDwip5HRBJtg",
  "key2": "2niThh7VNVhhV23HecK4goP6GzrxsAN6g2QGu7uLyRAMHSKQ6r2KCX5sfkDiPNAn4spL6CZN7fxEGjrgW2cUrqZA",
  "key3": "59HxC4k1dLuwbzMdSBanaoUJuHkmBZ69coG6Ua1vj5dwmW95TcrNo8kt7ah6SXpppPrq5AcqBDn9EG4vy6v9AH1H",
  "key4": "5F8aFjxPwxZprrREHAkBvLq83m8TZuEtihqJzFg5cFDCnrDYAy3Xou8QjirMkK9CcmSCteRDqKHmTbwMhUpLJgTX",
  "key5": "2Vu3hCMMnyd4jRXYY4yACFcKSwbQGAkTMbnscEevoSgdXr1MHYHLsUPSAf7ui22dL1ek7KnHh759EEq1J6EE8LqX",
  "key6": "5GVorvTM1ai26U2AGMLGQQXZ82Q2boprbuTfTvweQto2c32Kj8G22C92YyGrsttm2VbB3UrxMwhiPBHqn9KJNXFm",
  "key7": "4vXtF6mdBaTWT8nRuMdaVNU9RAmCMv6q18zaJcvXoWPboScpomSEDNywuRMLtZi8SyRE9tq1UBjoKnENs1afbYXj",
  "key8": "5grG7z3MUHVdCXk8hMcYZD4S7UmBAEBKo3pBwZqUR896417HE1fGnX86i7Z7eVaAJNauGHR1piZYXGu2iKMd3VoC",
  "key9": "4vZdxbnrT6mVkg49coMJzQTWxDKk8KwNCswCbdn1z2yfDQ12ZnXr7ie5sXRErbsEY3MYvgLwWe5KwsvAeizj51MB",
  "key10": "5n5akSzqp9PR9ue8bRoE9doe8atHsrAn7ZiZhEy37eAMqEuc3paSNvwFT5Wjo2UiWvnNdyNGkHeELRvMzhBdRhHr",
  "key11": "56ZN9vM5eiEFGWGL9Uxk2PpCBkCvdu2iKf1HHPPtggHBoPHTeM54Z1rW4bo5shfWjubYPkQPEcHHuZCuMd8C5bdk",
  "key12": "2mueaq8gwrGD22XdHKi7DuBpD5MaYiAurRSYHisk1kP3yhfkHrEKcakNhsxndVY4LxVP9UNsXy8ZDJBStbp4C9R",
  "key13": "2Y9Hz38YUPq9g4sHyU8sSzpfMjzntstiy7FsinUfHyLtFjx1QzGzEpUCpcPTNrg1A7GPY3XdbFgRUGv56DMqbjMV",
  "key14": "gGVpC2rGUtDQL3GxFhtjFJhUoBXXREGEHbLCkyvhvE9BXVKMDGTP7wS5N25Get7F56N63yvTgt6CuJNvYy4fPq7",
  "key15": "RckT6kDxFvq5u9sBhrotUDXpiPoGvVG1z6Nwr52PzGahzYLBo2QoBAQvHFbUpBaJSz4Jvvqhh2r6VvJEoWX44gY",
  "key16": "b6XHUVtkWvEnCbCYXtScKTXP7p2oKowDDggyexCZJAMcmFRjhE8GzxPDKDUFfuv8tNZrGZsnvMqPCq66Swr7iua",
  "key17": "3WLwLzR6ayswtK1RrZHF1U7Ju3W6LHqm7Nvc1qPGjXVRgxs8snduqvoTqiD8rp3EAegmtxZST7ExwK4Epn4873Gn",
  "key18": "4M82uZNJBmPjXvUgXJmnEoZMvdbTntckY1hLeWD9pND3w9ydvZTgBwALcbWuFqgLNbz4EHHSs3B9g1TDujumHC1",
  "key19": "3PbtvKcECf6ZhEZMHT3PPeRyVXxx3LkFMwALvb5GazLyYJcReqzKbvadScABPED57zctyqyFAtWd2TBVB69Z2aDe",
  "key20": "2UhMek4ZTVmP32AHwgXHYfggLbwhfCndgaokigDRpr8SycNHRYyTb4YRsYrxK4r3jXneYgavuJQTc6RYbE3vc3mp",
  "key21": "3XstjBFpRZPw8aqLXCLjYiokYBQJnAuHK95nc91KuZUScU51aMmb2YZ38Jk4h3guaMj6nTTfQogRZXGfsNJtbGes",
  "key22": "2yg45iRRZna3aox23dEozzsszLgbyHjYSzPt3rF5B5ESQQeN5BYR35JHU9WBLCaWBpDZqGuh2omBESZEfwD6KoFZ",
  "key23": "2Uds12A6Sf7TKQACj7CVbuPGZH9k2EHifgcqc1vCjADuQGYzzLwUrTCCP2SywCP2oDKvw5hYcqre8iNSkCxCCcNW",
  "key24": "2bXJr5gcVCSZv5qpeyWD2HMEyzPaoG5HLP3EutMrSPstSLtAPZHPAcPRZnFYpAHTJCcj7RLiqL7FMhHyPXjw7vPy",
  "key25": "4R5K1NFw8NAmta3U94Z4pTxR5QR989ZrwpoqcpX1di5uk5akz9PLdnB3xjZvcDyF6GrL1NnN9bAvoGPAeQtzTkmY",
  "key26": "55Ga6YiMrfZhfRjiWNJXygNBqNnD9rY6bvMhQyp8RcUTKvc54bp15jzf3bCE9pAnuiBG1vTKy2XGPZgiBPSV3tT3",
  "key27": "3BbiRv9Qar4gujy4KsvLRw6pgn3M1iq449zcPHPYMHdEBpNj63LH1srVqzVaGqbVwukgTd2YjGkCm3MZFg4bjPj2",
  "key28": "4rp9B7j7vqdQPcXvqYkKEJ5rFg1xmkDLcHhs3u3RKW5aQ7TzyqEBJYkSHq4y3Jjrba9B7nG67Kri1F8XebiuRCPv",
  "key29": "2YiWdKFeVkeQLD6JwBQjSrW7k2CV4icmop3k9kTKhcsXyKx7K4P9D7BJY8Xco1YpMs6Xg58ueNQMfdjKeLHmUDSN",
  "key30": "4hf8y6pB5zXGb5ADfm9yTJ9XxHT2eu8dJ5XFxKan73NCq387GbgHuCiKuU6GpRBKNS9HbxGrLsKSs2tBZYGWEA8w",
  "key31": "4RYHkJS3CkJSAuPR8jb7xjFtdLFf7HudUFSpMC8P7yMuzfSUwTy4wTeg6UKVMS1f6YHcCos2LocTgcVjYEYw3hBJ",
  "key32": "4yY582su5sQa244neMgh2xsRWxKY9ykargUALptnfkA9FbEARsEay9A7j465WHQ11SmCzWPf42s7XRgeDqgJLcNR",
  "key33": "5rxfVAN68bLHmue28bkdnvsSArqgbdzGC6hgpjinfVDgxcZoZjjyyrVDfpd5wTnubcDYM4qMpPdN1jApywF1MP22",
  "key34": "3MMPpTWjK1Wif9ReLYFMgkBwqd7rZKLy864qzCCT4dmmdK4jzALC2Z67TaNPn3z7JnSjKuBTggcP8KpdqtbsQ6Qm",
  "key35": "5yL7S1KFTFTj3jrjx75SXiyP7vKmX2f4mppLQxS5L987jLZZdKZBPsf52Hw3mZ8aVrPbxvJxvoMYrxknFFtpcXKz",
  "key36": "Et6aUWrMfVuJvHAgARbUQ8aGdrqTQx7Wve15785vGrv3mVgpcw2KdVZvqaHXmUpSkrRj4fbEMJn3P9tjTo6PQSH",
  "key37": "5RoFiatTdeeQuHY2FDPbFuBi4z83AWKdtn9WLSrsq6zE1iPLZdnFsonE9EZi8bK6FcYUUWcvYwvWQp2XHbfoxRQP",
  "key38": "LPVhcAJcnsVRwgNCJBTqzj4VeD8ZawLkyhGkoNKXBTCTUjeYPDQDLuz11x3DaNRXwmaWS1mNiduTZPVjX952Kci"
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
