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
    "4SeajWYJ4iTtLYVrJ8Xi8M8GLVoXbJYHQ4CXrL7pzSMn8aavLjXuJhEX2i3iqUQ2pnGH4JHxETyduJsAvpNCZufj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5SoiMoPzk2j5PxqBNK1RGoo1WQQA2NntMFZLfvpi46CUqYojUtuJRjPddYsEKznsgDNVEznbUXSTKqM9wTPU6g",
  "key1": "gwfkv8peCyQb8nwsvPPRPmDpWiW4RjpKqeNEdY6UJ75yApusUZRz8nXpZkJ66wVJRDM4Yfb6EwsUwaYS3T33gRN",
  "key2": "2qMrtcG4X9DnaRNLqNwESwvM4ocVUoY74jp8GprAnP8Ru2MF2g8U6gRWX1er9Q7JHDebdy2MjRc8Bzc7UcivEGG1",
  "key3": "LBRyowncKErBSBnF4tiQp6UcN15i4pLqX552fWhyGUbA727tR2y5NPxU6taL4N14tw1oEKaVXUnXW4PU64vvbEV",
  "key4": "FsPrHkshGTxG2gftkAYzh7traKR98dg66WHkyyUX4WviecP8mKSuVbZ3mWEiey4fRcRqhgAfit2PpaTr6xFP3RR",
  "key5": "E2xQuE4WhCUAJB5i9p54AAi6r8VfU3ucy4EsUdQSHLCFoJiBBEtdMnP5gGyYyEHbrfqVvj53681Jp7zsxJ7w2ja",
  "key6": "2ApR7C17cRjPN2NnfWd5fPxbfJHuQis97s2tzzFL8bJERWME9Nn8FyeLw8ifXmcSrLD1nEVr87p1g5HwuHxx2sGU",
  "key7": "4YB7BTVxW36K74HFeC64BKxPn9kE4qgc41vdgEwT2vNThVxdRRKpKgwPDJjhDTosb1oCv9WJFw3FW8Ngso86HCze",
  "key8": "xp8CPmK31ETfb1jLQYB4Nj5dAYktrLnw9sVxULUPTpXi14WhLdpXoMBMxRArf8kxeqNMzTRF4bgr5Feeuc6Lrxt",
  "key9": "5AzNuX69dhN5wx6vs2qUEGV4p1Ti5SzxnBR6k8ntF4XNDimRkzVzKu8xM5hATMyJv97C9bHBXzgTJG7MXgfSaENt",
  "key10": "37PDCHm1YktmXihXcjdB2TanGArj1cAp2FmpzKZNYE8yjR2DM3LrWYwjjxqkknP9Fq9PC9nRxEcRsNrYpDXrwBiU",
  "key11": "44N9gmXjwxBFXpsV7esCfTFVhJhx5xBWk3hkjze6CwRiBtbqor51DZTgUdETcfHvavx1ZHGdAdAu3kJBXQZ7XHrE",
  "key12": "33z99U7TxrEY195sEpXEbJMxCze31dRvZSLpzEChZuUKTJLsNP6Hzge4icihX6xR3gTKFwG5VzKkurtwqqwcchE7",
  "key13": "Z3E8bo2idp5QrxQ5qRQnRZVjb2ekM7AgeX8jCggoSFRb1pvobeFz3BFET1i2538gt3wWJjx2cyfG4YRMsf5KB1J",
  "key14": "3ZMyfrEKi9VJWSitX6VsQ5qv2FWmJz15qufHFYaijf12qKi3biMAqzPU4cVegMphC5XYR5sQPMx1fsSg5PWthgbN",
  "key15": "2sWYJXSDe5LBcE6TjcALfPLJzBT9o6Mgm3gQqqV4MqCdykRv5fbL9XwToDGFPopexuRXR3kNRFoD8Mkcd7pbKDaF",
  "key16": "2LdwP711yyeVHvWLF7qBBHviqJwmewK8GJUS6S1ur9nWzmTHn8JrDB93PCr7pb4HXBH3sEftJUKtYsPQYSwoKEoR",
  "key17": "5aCrU7d7kvVfTGEAz3hofukUc9W1cKrD5c5VZZQaw4uNqkQyx5ZQJNagV8hqwkEU5SKFaAYwTR3sfLvEmKbkQGpE",
  "key18": "4K5GrXUgzB8RyfFZG6BQtGHf87X1bFU6t5EufRiyPZHEYg3vp7NUm9rVfq6VAYEq26BNPupF6rAZrDn5dNbYyvzs",
  "key19": "3fdcu8PNHwjL97VJTXAKnMWdqYWu13wLGbREv5SQCL4jAPdMJ5sP7aBRND2nMZevGud7pv9mJpQA9bozK6y86MNv",
  "key20": "3ZiYxeKnaJ54MLjpmpBMzwX8yrKr9cHVdAJD6foJJ1eg55Kr7bDLdQPYxCzPDkXBMwDoQmyUMSmYhBLNkJDnbSdm",
  "key21": "2GeWrg6FSWmhmvnpiWMU7Zvi5o8PzPrcFa3q5DC6VhPNZ4X7EiLnHQt1vjoPTxQLpcVY3k16PSeRbCb4LEtqssLg",
  "key22": "5NZvcLz8K7zprY5GS3jWMCQtu9ifSQ9yUQuwKW3Nma7FYsdEzBYa5ryfacmLSNouiLsCXegPBHfXCXx5kirgEQ8g",
  "key23": "3H138r1g2KT7uTP3ge7q1pYcRjk3ocAvLtdxDD24bqMHAkNmi5QovdeccCWNETPXo3MgtXkn9KyF7YSYy5sQoB7Y",
  "key24": "4NMWCKTbCX6edpTXwEeKD7wqjjb1HNXhXFz8i35itW89YuWSc2gs5gB4GXbbEyteCrhai3GtQvkTy8nmWMD3DJTu",
  "key25": "5YMVRVBkZB7dEj5CZBsZ4bgNVG3u4aa9JS6axW5AVEFeQzXM4ScjDDYAz6FjiCNFS5kbuWaSRgZ7MFhuy49kTfm8",
  "key26": "SdrqU89kRZ6keZMQaVHdPf4WqFPVFUFPgES4V2Laje8FsTVfUDir2ALmz49TKxz5KDJuRYp3U6hLBfkc8qyQqML",
  "key27": "qEWLrzPw3JMz2Ga28zK1sUf4fuXVKf1dBqQHsK4UiEjyu5Cd82cQzop6DwfR2S9e7uRcoHrD6mFcqyFimx15bpV",
  "key28": "zTTpewZosDe8wNRZHeoSx6ADqeTBjGrZu1azKzDPFnxgRjGfsrRGdjnNDiVvriamtwH32d7qddQyW4C37U2eHHG",
  "key29": "5hbS3QfLfMt4dfsiMWmn4DKPBxhqPKPDEzZnKX3mFHSzrx9kB9E1Vq4QoNybdWdmWecpFrR62eM3izYJ8YNdDnLH",
  "key30": "3CQ5mHvbnSJCuW3K6dnTSWo2a3gJ8Hm6Hjs5hGGJrxjpJru4hEMhXz3c78FTGt5yJnwqxiWc5bqay8L55d5RGyhS",
  "key31": "5R777TrwPnb942sMHvsyHHjEqNuMmAeNEb8bMqba6Kmhxb6qCqcNwVBFjUQZCTAAJ5pgNMVoN7BnywVgDtPr5HtW",
  "key32": "4c2AQsF4TJq4UgcGHWta72RxczEYss6akdiVbozEzGwGM9L4q39DhFP5zo4bvypDuGVFhw8AdCXQPdeBhC2ftFGQ",
  "key33": "2LJcddkNvWDvkfbzwpN4JPjgwrW9eNpaCzRXBPGLoTbVetMW5Q4VTWjHoQoC6mTifWGxnnJ8nQUzrNhPipSFfpxn",
  "key34": "4iB3gDQLKhBD2bhe8XTU8ucQJh3G6iPor2okHKLFeXsYmdFYZ9rm9DpgDnrku2XebDB4sHcwZp4TDCF3zKtWZ4hC",
  "key35": "67fr6K7J6i7te2c7CMyxzUCqJftmofRVAEyVPdE3aEwhNMbizSDA9pAk3v3r65iTByN4Gtj7z4CxEp5ZjUh79jUM",
  "key36": "3bsDN7GE9ExmHbRa2cgUfEYXYvdHqhiMUCCPP3Gz8LqhibSSjsrQ3pW6ZTK47b4FMbdPufgEcZ8LbbEf53WE1J2r",
  "key37": "5t8LnWoG7Kzf1sVqg4jE9FvaG7nsJebhkQ4chp2NdjhdUiathgr1WroXXWNLW3eSRdxKxWgWmLx4Af1ZpCAoumYT",
  "key38": "o5pvYtcGK8iaopTEqfSUizx5cVv73Ffo4XzBFe1vnUaAtdcBki5Ja3AJr1VS9T3AACZT2jLKWVrcTqSzqAGoP9c",
  "key39": "33VQ41WB27SF1X2NerTJKrjdxEr8VDCHdmiZUw6JVZ5DaRx1XvaQv3xPCEtNXxkN2iDu1cpJFirjrr4nh2jdhtgB",
  "key40": "fJxtpRELLrJqHJ6LyyCmraUmaSxgnSheRrbrXk5bXvV5wcoieygz8PodiaZXJtEQcdFp8Qwzccj7dA2djHQT8nq",
  "key41": "61KxWtNu67XpQoiZgTjN15qYSPzhZDQmS9kc94A9E6YMqvQ9TYZPPfTnB48KgaJkJE3gaNzu1knUzTJH7eBy9YEQ"
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
