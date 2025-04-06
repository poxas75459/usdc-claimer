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
    "GkSCc3Mt6fz8PozXVaksWx96uUMMWWTiDZ3ci1sBakBe9wZxxpvNagLhTAfyVtxHAY5f2Sb9i8yGx1iLkGeqyCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BneFCtrTsLJH8VJQghDXNLyKjLdmRhMRAN9Q64GKaVDkcSQxvq9PLowu43ADs4EAiQiRQpG5AwtDHFQraUCCZku",
  "key1": "2TErv5U65KR1KNXuwyKzyS9KqJUxv81YbaF4zpPSuxt6xwYfbjAajmrx1bJ7B45frh8t5SzWEQQ3Nop1XgTM74M",
  "key2": "SrQF18ztp1Q7V82QHFmjk2JSssEhxZX4aAqaTb3Ak8vcbdLrDnk7tzJy8G72LUkWSk6qwrxCDMgZFHrsbhBEaWP",
  "key3": "3C1gqkTpoVynBXTNYiYDxQB3nZRS9V2HMoeD7cDinKniW3qZMLuBpZGnsGuShsdCHRcXDAzpqncKJjTYiyAy9DGR",
  "key4": "3uVwPKGdFequAQBNzh6yujoak8D7Gsj1xkzQpi3yn2ZDp7eFSBUqSpcgXqaqDpGV1tGZFQdnRYGLWoPygHoG3RAw",
  "key5": "25Ma2XJ9PTL2x2tKmijvXReLgzq2TDqjMRQvwaYG29WE6ZKceWRYg9YFgpY5uLhnK1X4hrNVfc5BZuJmfw3QxVJt",
  "key6": "iQKZ3Z8P8BKyQYp1QbVFbHjaECjvJJ5xZzjEQtbhKPt61tFRykKrFwqrRKrDqym51oQRF6mb9TJ7kNkXMVyhp8M",
  "key7": "4JDdJNaUHk9t1zgPUg1RR8489NpfN39JsKxavjsUFX9K26oKMGpymU5TpGYEjL2Wmh7TDHpaGEYQRbNmTDu7Pb9o",
  "key8": "7QE2QKD3V9c1uo21u549bzivmFd1ju3TtTnnx5huoYSeGkgu4nBJfGcUQ5Kwcg7FZjMSA33G88bfUdBR4XkwzXw",
  "key9": "DJzwo8e4bQLWQ3BkAcgsNAD3cV5cd4qnKQSS5T4yBzrgQWaGyNnQjkAffSyu1e8UmNVhzLUMiRDJ887ThM4eoWe",
  "key10": "2MgEZt71i9szfsg17JaVkTTKppnQ7kL4vi6vGbThnhq9S5HM8g9Y9ohLLQEkV8HJ9K5ejRGdi3Qgxmo2sU7qPV2q",
  "key11": "3bw7zebt5cJArRf7K2jNPutqNDToH5ZiJpNF5QTm6wL753pbkTm9cWxy5S4vuXFUeZnCobAXEH9783M5kZrkxrai",
  "key12": "4Fux3nDJ3FxeARFAmDvZRKzi3FwtcfjUCLiQCPDvB7PSme9pJWacmQeuSf8EyEavv1WFEMCSYTrNVqW5JQmfGSJC",
  "key13": "4bAesjwWzSuKBJUHtRissWeLRx1LUjBHEz6iFoxVmR4hFgvVFh6a4NaxywqQu97VtPvopE1qnUAanAwjac3piJAP",
  "key14": "4qh5zTZXPGqCneZAjRGdpb89JeQDKRQwpHMKP73JBdz2SX7PVYNw72gHeAV8MAXdc7jdzMbgCeipF2oQ6PvVtd8Z",
  "key15": "3E7sXibPS2ppFMPfitbdUvT9q4CYdQtSWmVL6Hr1mw8mH4PtbKzJ5wqKnq7ccHZaesgfyobykcFvXkfDUp3Sf7XH",
  "key16": "cWBauRHjXeGtjt9KEySMuTUq7ZwbgyXHSmUxxdst9uiVrq9Q21LegtL2cCTtR2NboDyk3SBKLmy2hJXk2yyoChJ",
  "key17": "581RdktVUZuUmmeuC4m4iHAF5VNbVu2PbJxttYCfdLcyJi1UHSznz2P3QBTXMAKnnvQBMVqAocgktVxHTs6ZRE3g",
  "key18": "2kcZ7d4oTz4CXckbKvSRafdRsvnQp3diFH8oM5vkyftJdTmRmkvQaiWK3pRxtYtcyLWMfjPciX15xcm9vWmH7kPi",
  "key19": "zTGRogBzB2d66C2aKNFnBKczeC7M9EKDvNrPSDFMf7rXnYR2WE4cS6Q1Emqz56cmY2PkXY2sNRagXx5sPLHNQP8",
  "key20": "aU6E1wJSx8ruaRmUNvFkEH3BVkEgsgXnjxGiiXeutdaK8cekR8AUKv65D5eMxEpHQncornTPJ8hbNexWoTF1F3J",
  "key21": "25hkP1gufMQqp9uBdwpD5auQtwhHP6XKHBT2kCh2TP7n5imwbQzsgjUPms5zmkakT9QucHiKiYkEvNWSxvBPpHAr",
  "key22": "4MrPtS37YEr4D2sj7ULAbN35hsCQM2tpbRsJk6gmRmwXhaAhGvq3htHmEMb9Z8puNteeUrkLNgjxBmmxLn8kbg6N",
  "key23": "222jWByEkaz5uhPznpcS5WSFdShCHdUBtW16vJqXFhZYdTRGA2Yduvke7HexXqHUKVW1EWR1Qwmdx3q8V1x2iU7w",
  "key24": "2ZGk15bc43EPC6inbg1WahUqMno19LQx5dK7NCqAMVJZwGbr767z1iWMKqpd28UuR1uoLfS3nYRxveLJpgq5LNFa",
  "key25": "2HvZrarPr5vanbGSurFwqcFZGa9ZLDk388N5Bo4SdXnVu1hghuMh7msnCPnu5DSdWn6pXaiRwWrsWHwDJq3qiFpz",
  "key26": "2fJLQ96vhiRCuxsPYJp2HmA8mMWCfaqe2cQ2yCgGZRpGqPLuBPm23TtdmPMM1NETCQs7V5Ee45ZJYd1oSF3xjYkA",
  "key27": "2B34wcXiJkFP9wE9bsRwAv2NnRJ1KapxST3YYLYquFaJGxRd93NeBfNJewJ4rE6Y2vcmt28aqMN9dmDm7bQdDCQd",
  "key28": "4km2WzTvwoZbVA9tRj1o24DqsQQSJ1nnaEntTCw8WX8NkquaSm2hUPw9XxFfvULtNbJDGrQJPYYMvq9JYVqHJtnc",
  "key29": "4Sa72N5pRgC12whJErGxHAnWvd6Mz2ZSccbYyCx2a36cbjhKPLSw3z5XcCsLTgqakkjXhwJKwacyMrThaHtGYsrF",
  "key30": "3L4fgUy6FUyAHZDJDiXpQzU6R9twJvggDw2dRjUWWBRyLo2acNRCS3meQdb6Pw8qfzy7s95dLW6Ner5i2XSKZaFQ",
  "key31": "4iC7T344QFE7e2UntUrERcuVa2q1npW3hqHnXv2Vpwuso5bqDKeEVKEYC29p8kR96VAWvWn4AJNgzfqssZWNfRiE",
  "key32": "3pex8GLMBUhD3oFgHPjVxZdiG7XyszdZwycQB2sDr8WvK1M9NNNP6S1nwGiFTw69ZkWuNT6bVf1pm2nmWErWDqaE",
  "key33": "35MapxZmB9ujg2Fvnj9F72a81pzYy9DMVqxuz99CmG3AtoorEeTztnzQbJAuqREVFd7av2C3DQQWnCYPojVmwFyq"
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
