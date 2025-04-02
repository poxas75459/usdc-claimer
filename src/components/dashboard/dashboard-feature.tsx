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
    "4xVHxF8JgTCcK9cTgrhYfDYPvfqmQWwfjGQFTpLuNBEjcs2y39Y2keGwvUyJMkkFzHXuoHEpDREwpY4N5Pvkmr3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4593qX9tX2PqekooC5DbBTxRSa1q6R8FZZ88UFMxC5iGX29TcDRB3vj8ckwjrJpxo7Z7Kpo5HxRN2VWuJXg642yL",
  "key1": "2PEEM5rbanqxg1USXCjL2Nsgg8hVBCsah1WmgJW3eJquXbnox43xD1sDTRtemcyTeinv5cns8ib7KskZrf1bgnbT",
  "key2": "4qVjEQfS6v6fjsUhd72xjUibKXhwfwH7gyjApg9n6TqZ2X1T72RXqKydy5QAJ9wXRzNoSvaiFxkRDPvigAoLNEHT",
  "key3": "1hiUywNmEouZABpWvqXnbGnM4MHBay3eiMcuL8GvCS4dYPR5ozhSgFTM6pCsSmw2xSaTmRoAyHVcBQr2y6QGxdt",
  "key4": "3Em8TZ8VG8uxaH5H6qUP129YZfGMo5sr714NPuigh95DnHB8bMqnUcw7EsVxMMFWoN1XV5ybJquG7N6XUAZozVGu",
  "key5": "4m7q51WxA4aAH9V6LbPFQNdxNRF7jU4chekHjdgENvWTRSB6ZbCU5awgGuaSPpibVfoCgGuyqzjQBpWaitkeUGKJ",
  "key6": "46C8qXF1P5oFF2ZcMzc28ukeP7ZBQQBWLPwmFe6VQbuW5VRP41yXZpSatTXkZFPpu5DwUKEwQxFRJLsdZh4P7KPS",
  "key7": "2fRQBuSnCU3rF8nbXa7rWwtyKaPTfMqjJCu4621bfAe23HvtTPY5tZ9fXafbPYbPVAPhFV5Srgeehio7LqAojsaY",
  "key8": "haVorb48xirwqFRKzci2dEYX46cZfDQkELJrkLs6RkeM3qj9YitFHCqnSSRfVgK1WtwyAwer5Uc1Lo38S36ruLc",
  "key9": "5fYyZZ7G5s8K15zDEyEx9irtd4vM3r12XTVnudACS1jpy3Ds3Jmv5ENhnXcwSFtPjWo5vTgm5WoW6buqzamBaBtJ",
  "key10": "pFPMNYSsuvj6CEJgUqkHJ2Fexivksj73AwWuZTbYshvS8BWSxGsfiJi9ZAaQkgff4G8X12Ee93WLF3SfFJ7fuVt",
  "key11": "4fRKUBXiMhkeF45RtasjQ3sPCeSmFonvDLZHbZmRsWqaggZCsCgP4DoYPjz75wuh67F9gvTD3wS9P1cBKeK8Amhb",
  "key12": "3uDf7nLFpaf2sBJhFEHD6H4pQrrHxFzPdvf1Kj7tDH9c8fkdwHwFwaXgTe1UgdNAj4uE9ZXRgAqbtQNje2eMZdZr",
  "key13": "5XR4vSTyqACJDN38ykeZRTtkV9wTxWovk4QaEJHummBF7yRxButeybtwJMZs7YDHUKdY7m1hd5kQBNLtqp2mZcwU",
  "key14": "3BCexwyn2BnrTtwPh7bTLNiQUDAhniwEfMvEQUfasTHQb9zgNtyDLSRbmzDJD1Kj26v84VdQyf8onfSytHzXjnXQ",
  "key15": "3pmeHXt9YJHZqZM66RtBEGWHX2n939SmtnB2ZE3dNPrVbZpVM67ariDkGUXoqGhY6Vq6JzGHf4eCBJWGZXp4cr77",
  "key16": "4xGbHdhxaS89rtGSQtrokQLKGLCAjaiumtzf3RU8uMcBjjFqxQtYpjUqQKjRJSXb3653GTMZK2SMCuE6B2BcznZQ",
  "key17": "2ZoUuq37E9YytXqa5d8W8WSjya4ucG5Gu2EUiVrcLNWBGnbD1bPPBfcYe4pE8KRYSWFfmu9hiMqWaaiLkESNTD5t",
  "key18": "2ozLZ7gJPf3g84LSk2eUjJbneEB8dnUqFFQPVLwiHEESbEAzgJa8dYEWgVxH7ovtx8ben9awzRtoMYzcNZM3nwCk",
  "key19": "3CUK8wXStRhchsyM5AyeFVEr3qJj7cMBTvsEZf8XxAEsNmPdYvXXGLAnATxidoRCMowJKRPxx7yT8W4CZ4JMrGZr",
  "key20": "63wVrgxMd9pSaREvnnZaEBfJVK1toPp4iAGaY2URJMwqqimsHqyURmcNSsqQu3JHJoc1ALuNKkcY41JS7rZXJ16E",
  "key21": "3r2NpKHa6S2kRkCJEeCvhLyqWUzEwPFvQjD9EBBC6yxBDf7CDKU1zSLeTX2HeRuMEaiHRw5QWRZsatPhoikVEUCD",
  "key22": "4fBrX6kyYzC9B1S49aj2sn21f3GPtSuzb2dyC1y6r9E1tM1FGpHryDY1h23EPFVDrpBebXt9QzW4feX9XiZDietU",
  "key23": "3vtcpNnnvH4x9S4cnZcb2bAq2PpgPsz7AUh6T9uXraQR6Vzfdcw1K6kvJu91QqWUwTcQRHxUtPBt22dWyVwypsv9",
  "key24": "2rmxwouJCr8nWnqiEAYZHwRBuZFeYX27N3Z1EZXPxR6UdiCyeq5qrLgDy9Usx3mxeJobydBKCbSUA5sSbLbHxVpZ",
  "key25": "4Uv2cuZFxoC6Fck2nwcMgm3fj7FrJNLP9dtuDj6ZmoVC2QvRnsH6ESs8TUXXM8F5EmEQYAFmUvqjyty1zV8Q38da",
  "key26": "59z5EBPp7L3uHgJ7ztaJcASnK7eKeDQQnidAj9JUeErjXCz6Fx4SReg16usMjUmWh7PDvAbBFu3SZdV7P1E7zgie",
  "key27": "YwPRXe748kTxmXm1UBTVoA4p5zABB3NZUjPpfio47CJxGxxH8iWYPH6Fop8jgYVwExajwMqyRTtBG3pJm5Diu7N",
  "key28": "3LqC6BFe99PSBW5bXsPLwDEV6caqaWJZGHTKpfx7v2wfZzUahddcJY5pWb8NPUzLCK5m7cfHSYQEthpBCDsFi8j8",
  "key29": "4uT5neooyuSCMbeSoJ8LA3qJexpb2eWq7PBGkcVk383qhGcQh4QkoujRqoqG71qeXAFM2gDmiJGWJK7NxRrcBsvF",
  "key30": "5hj67nYTFaTjm7rSNy3wRMCG8m4K86qLgJ68QQAMDQ79bXDUih9SoZWeQQoTkiZDnpVvnfqUXrQfQghnnhdDYAz5",
  "key31": "4qFiiocD8MVEkwvbPcrdHNoMz7NGEboahhzEanW23fapkQnntbNaUL96gnhuqo2XFHX7dnW2t7Rg4AD6maWMmdng",
  "key32": "2EXh911fhtYZ6NVH6EQVVFEZ9CY6aUwPQcgcuBdEPze1Bn11FSqpASnB3mwHSwpDS8yz9FWHx6HqibVXT3xjafTE",
  "key33": "397rUBs4sfbbSiVmkWvALUcMrqQh3yg4U1gLF5nMvpjiF5d6uicuK4Kd4UdRMDPoJQU4wcvtLDTvuCSH22aYrBvE",
  "key34": "5ftbx2b4nm2R2jvXu7p3CfL4oZagtVtmcckMErFGvkWfxYZup8fHdATfVkTMHDp4zxzvghoaGLG1vqD8qjVKSned",
  "key35": "4dP97E4SUxDhsnoG89GUFPzkiEw2oL3HvzwoSp3KAobbgkFjzydtUgHfwXYDtgAi5LHh6hQByWhqnQ7Q8ZkcFgDg"
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
