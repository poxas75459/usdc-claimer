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
    "26xHHH1BJ2Qyb6Po3wKWcauSCiVpKeEFEhmk2KoCMUkQ8myEGP9G9QMNhgt9RmHxA4T9Xe7wtrSnFYdJnVCRzk64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnWBByapAASZ6uJgkb1JJW3gGZWpkMWc2Wq6bTa6zjj9HtZMi938wdSKj1pxi6hZGKxNztFHoqm4z1DwXuChUHY",
  "key1": "3ExeW6ddX9sr2AX9TUd8SW5MKaFTJJPwTv98eBQShhwCQoL2HVgLqcgZAgt3MgYp1hhHJDtvHt2AmDfycdPvNYb1",
  "key2": "sBnXT3ZMaaQckkYGDXtRVJx6KyrrcZrDSWZc7LM6ST8C3HqszikNGvbdQj5S3fPFU49vn6KzQwTZXK9J7GXjbDZ",
  "key3": "228RnxiJST1AU6WJyghdjs48y8jL56o7N4HdHkG2FLxHjwQu7X8CFtJ5qnTJV8z5mZdhZtzWHLLcCamkYqFLEJyK",
  "key4": "2pjFPWv8yGQMXZGNCsp7zRdqvgYkn4DtLxYppxFqM2UaqL6QSUWsKz8k6a4BTbXtEG2Nt5Z9m8a5VcF7ddFB1TmA",
  "key5": "2ZGEhCWM89228Aw4uhsbpCohdvDc6Y7eRrSya6yyRDkUog19zsZYTSidFXcuDdRFE3qpMaP7fYtK2dhYBANuYxRc",
  "key6": "3Yyxajyiogt2W9fBM5Bb1oQadkdCho723FpCwRyJ65pRbeChD32V4146hopExq6S4Ai9sqtxKszngbNeoVSukLMm",
  "key7": "5AgwWi6LEFotT5nLiGu27VE7vy31FpjMoxxn2tGMfWmUqySPwvf5BFjcsbCvP5jTZ1mGeZTmJ41tHRahXTo2N8AU",
  "key8": "4Gxy29wBmE3w7ZPtDakR6QVDEHaXRrFsnXJ19XwxaCCPzEXBim77Zt7yC1KyS9vvjiTNdf9sg2F8orFSwwpUZ5cy",
  "key9": "4eFnMdfUKeopRtcUcDyEvCxLzLzCG3DoiuAQdGL5ncoTHQCnNN2Bt5HJRXNTcQxgFvGugXvhUSLsddqFjNemn5U6",
  "key10": "3mrqhE5XpxWBTaLgGTCW1yUKPyEETozXXE1YPziHUtYT5ZosAiT923yhmL6qeA6sENVXkEYJDX1khGaPKFhyx248",
  "key11": "2Jy2idDoLqStS8tKHHzMfcp94xUnnmy8T3MXhbnXGxE4Q4mgw2aiFfeAEDJ28rDTFj5UDW5wkKNxcsU3NhDbPnnm",
  "key12": "2qL7D1fP5LMJs7WLeMxU61uRouGhi4VTSGmvfyVBomu58Q44TihN3LwmjJeuUnEUVpvbSm8H5RThpJYU2NQq7ZoN",
  "key13": "4h1eqRSScc6222UDPe7cWktMi1vn5niGD1itZTLHhFEuT3E3HDPr2A2eGiE8oi88tNh79ucE7uCEKBe2578j1sLf",
  "key14": "2TuxUtBK8Ad3nwrKACEwSh3BSDLbRCYRPGBxCjTmxVSX8AAYF4KAtopbFL2zoxcxknxofTrRv1YzdoAq37btZxa5",
  "key15": "5aybexq18voj7X6Jx5xtiXNUNddKCv3T7Qhp7D7WyzMS73imQRyCxGPhbVTtHukRgdww8yRUk5fpqTZNgJoESwNG",
  "key16": "3r7Wx8NsLuJKgT5uFumNk85n7chsKvc4S3T2xsdh9acWHooDWk6DjisypWgpqJ4jqkbXZhH7kyvGhF8SEceLg6mm",
  "key17": "3BtzWCBwrU8kLy2RypLqiwJ87hTHgaJpPH1Ezaig7xpXbTtCD2icGFGATkFQTPkqvGMKPaYrtmMCn58Fnig53MQn",
  "key18": "5UfD7tUkPCssfu4MCwpRcY8FHjZEPkAwPjtLEWhEUJ45JNc5CeG4VB9dFNrFduKVZWNdmQ7QdeBmAeK2tdctio1S",
  "key19": "2HvRQZjHb55a7HAtdq51hfA1qDM8jRWj71BYhkKuZwx3Z53MCpmZ5DjgyGohzYhkzA8fSfdPZLzJJr7tspmDmMae",
  "key20": "4QteT6f7LYx1CHUjgxG1Sj2h2BUDopZFHdm861Qv7GXmu1or47reccnKhFDXLv3Qm6chE26cdoBRMid5FSGEtbtR",
  "key21": "8ZpkdRBqY4AzThKiTSGdCPSTxU6LKiLbyLbWLhkvovYwwLhMp21a7h7jamHXbfWqMgHnLdEW7m3AUoucKm32mLG",
  "key22": "1aT1f4uVXQ1qShQabvTvnxVyhDGnLj84NoSX6AVtb2QKSXLTW8K68RfX7rZx4a7WNGcqv3sNpo7jSmVuhf9Qu3e",
  "key23": "4qpZm3je8UpAm4hMwBCUEVttV9rMwqpQZnAoXdRZAbdAYT161kqn6VVft66Kd8xt54Cc1WYNTmcHTKx873RWUrAj",
  "key24": "4dCUKbzb56YWasSAukAYSsaNvp9kZ5bsAGRACVRqbjDWLqyy7rgkQhmM2jk1pmCndcLuhFuL1f1gjzi2tCiCmweE",
  "key25": "5Ahvrf3wERt6RWZAaxSoebqTpr3VpBBJhaREwtuxmHugQGdJHQi53QuN7xeptjrVjwGwUvEWLyie687FN5zZ2S8z",
  "key26": "4wzWGE438B21wrezuTPuvLXHA4fb7ZENxFiJR8h7bjZFi1J9aSqVofppdJfMngcVGxg1JgEcjE6KeokULnzaRs2M",
  "key27": "4UdRvfNHxQh8mqS3Qhmv6Kd8asy7GNFe2Ckdf8mPrwnZUaAxQ1NZWsYnNC34XDRYWaYY2HStAJwaRFN9oaEzbgva",
  "key28": "2Rg2DXsLpJnEJqWeJ3A2SCorvoVkcjsPBzo2SvA147PRBD6ZDjWhL1b3bVxk4uj7o3xLz3uxTeAX2tXdGPZ52mbt",
  "key29": "QauVomLxHPcSocYx1kZ1tkXxxRKJBZCki6MXL9LH4LKxyhPyKy4P2qB65SiNzKZ2DoPXqkAxFNxyPE2f6KHWNZR",
  "key30": "5HpJtq4KqZo43x5yFnDherWqGH8Bt1jvJ96eudEp4eW19DbF1joSoEWUrtcwJxGVfF9xXSt8Sn3kwyyyQRxRohLn",
  "key31": "3UbsNYxMKgRbeasMxvWNubpfUZCh3fD8NJ6r8fvTaScSiXVmb4tWSCZm9s4UMJkrUGX8wtKC4QfhgBjGVFsibsxp",
  "key32": "VorViawgdBs3NSkSHuNniqTGAb3kevYA3Rcy3JGmYpGaseHumzXNN45Vki7zAdfQ44jkz8jaSnChbPqv5zoot2Y",
  "key33": "23inDi2AoMjsUJxv1KjAH8fwipbeHK7RffcYGxpMoyatNYu5hPcpDAVuairge7kdcuL4DH94zfAHhfM1tc4nLDwW",
  "key34": "3g1J2jqtJre42fKPnEEcx2LMkhUi2Sw4YnzWMk5xrwwnRRm6cBPPXNSqm91uHbwEVxmxj7xPeZgsDxCas5ZQiHm7",
  "key35": "4Wu9DA6cQnpkt4KRzzdXfm5p6k6mcH69ym6ghYizyfpmRwtd3JxB16RXu7gCTvUEErYAkTtfZRScppiTMeTEhzj",
  "key36": "37w7P1gLdLiM6fUkhxTw6GCXzqC1Dtq7zAyjCZMZeibAEQvtGSHxQsc9uVNeCpb39o1pLaFWC3ZuYeMJuvvUwbGk",
  "key37": "3fRF1zkyw3b2AWkwt5Jpz7hKE37UiZ8wdDrwQK3itVPr5J4Qa9rseMwdaBEMFbMKCFDhehsnEUs9CpqZrdmhCqy4",
  "key38": "238ddpGePwBM9Tn4BVb4H348GpfAerP7v5TuqkcSDnQvtaSCdj6u8gZrcpZfU3KCCUgh4wW5mf16MqvQh9HBpSHe",
  "key39": "2yZbscaFrXPfP9Tq5BzdxNHhP2z6zKkR43DdY1AXgdtRMqS4CAsPCiRBVSYRZGiusWE7PeYWqhjSAT3MdCtDD231",
  "key40": "28LQqsXEzezb7jKcDYgSAs7GjWEAKEHf8pQpqTBjABGUiUKuvgXy7JmNseWU7fMJFEL44ydrWiWB8zuUrhNoF4zE",
  "key41": "4wwvCAfNwEhR59NYXKJeXqpEaYnqGjCGtoSSZnHozN8yuvV3w7ukphkDj46LWDj2nxNXYhXp6gVsW6269EfAANDC",
  "key42": "jn1NAczzEefrY7YQyNCBHgso24A6Jau1D1dVoSrdptBV8hAB3Z8E4dh2yEoeH899stFZLrgSCouLr4TByyTMrBj",
  "key43": "3vK7LawVrt9mH6LMSnc5gNnFoxTxTe7oSogETBz1oW72rVBDPgsbwGSUvkFUGaodUYAsnKeLsyF6dmQp9v6wsyXZ",
  "key44": "22fuypVYMtGhuoZqqYyCRL8qrq7M4A4AhqYRGfzNyxXBNFRCkq4z3LBBQ5APf5bc4WwZzrdjFiQ4rJqeHPnrJe7B",
  "key45": "32EnPgHq1AgSuK5DL4Z9bYFu3M1DwZcEhFAFrZuG4SGk6xJdKZxxHMpKBSk1tK7LMBzvGTjhTyJATNWoEHds3xuz"
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
