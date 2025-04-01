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
    "54o8TgHiHwnHY9bkvyBxjzd2yw9o7BH4vMgyhcecbak4w2P9rtQWga511NPeHRw55rY2GuFpFis6iFRrsNjb3sLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UBqeJvSL79DhAWiLHrM2TYQ9TzmNFMMiF1T8VjMKTrSiQVsLjTHpJkUrKNhk1AQXTaU8K7FPpJWzCspm4iQMugc",
  "key1": "36JQHg23zVecnwVqdpHax5JjcZraM9tiaUec5gRwhdrZGSA1ZS4vX3P1NMg3sT2XgrkUYL53KGgSDgk7f1CJYefh",
  "key2": "5daTaGTunZaU6JEs5XLxxx4ToJZFupaMkFHbzC3Gq9UDg63pyt1jnqQq1gq2t7q5vBUVdd4nt5vGN8NwUoZwtX55",
  "key3": "4gFHPamf3x4ECjPEXCXAbgtkWGH8QKNgYAyz8SkwuhxdenZZYqhfSBmDfTiFz3jfPDu6CLoAexypGfyYf5PAHBQ1",
  "key4": "2d43Y87iDPzk6W34enkkDjHpSSgz2Ls69AMcBzEQ6MEXRk68WwPsmbfjsbVCX63BaPCbKYLAzrXZEfHtPvpu2Aeu",
  "key5": "5aJN6qXSfa9vaxmJJHdcEFK1svmpFhuCGLBdr6ArJqHzLSQF4oPkDqRUVpwhyMVH87naakqPWUVHrnByp1yDauXB",
  "key6": "2Z7fS2cuNuiuwYfqnZc6NynMFrQsNH3qEoiQkndNeMsgX7aDBV5agYrhq6xqjApvTy48hV1Tfm6wCYaH763TKueV",
  "key7": "24vpCEPz5ECkL4XbipMqt5PxAr6sURhHAxCYwpjHvDnMHC6MSXhY7VcHUMxCUmHDYd4TSExfqy9oBNU7VcZv1Qkp",
  "key8": "3ZCu9eqYmYrKAmxnYEv24g26Ny6Ph1yDxZJ31EqCesLYbQt3YFMJCZcoCewmRpAR78VC9tvqZbapeuPgo2jo4npx",
  "key9": "4tShQSevtCnZV3JqcyA5diXqfbQrGBkovQikZLH9cVTSEhBWgjuX52mWq7XqyXYnrJX8mcXZ87jG1hfGHtS8MzC6",
  "key10": "2m7ZCDBg7uZoL3XuzPCuPab3Ak3pvc2mub5YfTvgYW5yYxARcNgmHNrLDzCNUPiLqqkLL1CzwTvkim8g3ewcHvuG",
  "key11": "4eLaBLM5vLGhgc2kn6jE8RBC3TjefnT4Q9Vw4Gvj7ENLjgcAd2ipkvn3vj2eugx6QH18KXNyyVgBpkMiE9jvhs6S",
  "key12": "2VHbkU9sXunECQAKYfX5UyD7Yf3iVHHkgKddFL9EdbQMXtvdm8t5S61xMm2DdiMghCyuBy7kh9RK9qmneC999W74",
  "key13": "3jKfaYLq2VVGJa5GjudJVwVjV3uBovyXtXUcAe7b5tu4FtTd17voaQeLFzHr1AGQGZKDRVuJ5w7hvUCmcxmQ3CE4",
  "key14": "2EzpAWa5U7WE9NDk2iigu2TryJ2tD3S6birXudbCQvztxwCod4QAZECJDMH6prMinHAQAt5aqwtsorbBzYCkksc8",
  "key15": "4M1xKWQP7QKhxGLtgKLrcWFfyugxxmvdqEJxtNj8z1xd3Bk2tE5RqUd2iFX38MwxTN9w3sPnxhE6LxiMYUfCT2iv",
  "key16": "QQzR97PEWAWSAm6PL8PCtD2tUcJNNZnQmbpZ9Wme5QVYU8YiZ8bBvUo6B95iXG3zrsSkP6nsUPi35aNe2aU5y3w",
  "key17": "3N8xZVcWJVpyC582EJFM2nQzedrGz6Hp7rF7uunEBzgMDwxEqvKsjHhw1cBjK4mS9LMWKcRApeMhoeJyZmtde8Yw",
  "key18": "2ieAWDdDqfomSpXQh7uxkrgLtgrMh72APF8rnSwk6SvHs2kxWq5bS7dboBRwywDzgMVRVDuRgSn6fye6Ytt77rPC",
  "key19": "2YXEFQzV3r7tn95gXUZ7osisRq3xGRMsFDN2kkBwxEPfwooqTkdu99xtdjCwd81tEbvxZT2186HWBFewAyFbc2Qv",
  "key20": "5yNKkWLtYBv7PeooyqDEsj9QNFgEefc4XrjDatoCnsXjP8gdwgrjF3cEfMiFSZyaff47UoEL6qCe6Y8tmEQDLSsj",
  "key21": "5Wdk1Nc7XSU1EZW4vLcWs7mXNiy6CHs536emZAwJkQHADn6Gyc9G3541fiqBzYro4o35XEbv7eVvSxrPxFiHX1RN",
  "key22": "3FnyTCADLiWFF2wkjEHKBm7J1G9VNGETN6Wo1Pm5FWa63seB58euj5arxTbn9fsUDmmYkntG3vvZf6GfvMfuhSCv",
  "key23": "2XZbwJUo2zzLctb97nzZc4ritX6FqS1wwVLCep4HTfypvq6tNvSqvAH6rvsTDbQhuxLnHoYheu6PagpZ4DNyjofh",
  "key24": "RN1iX693PshwR7R1AVDCTvfRuBJHLy3uJy37i5QAXjhhreXSJwSVKFHGHQCG29U5uogXHpt9Diy6KFTjYnPBnRp",
  "key25": "2f4WqwVeKipzqQwBK5UHwZf28EcdFGW3mxvXwh4c9VgnzMwuVYTD1ddjcRAZS5oZnL4Za1ZLkgYdHwpJWXtuVtyP",
  "key26": "5dinwhisWhRvzJaxhnhbj4WPzzoVygGPi7dndD74CGQKwdZpP2sR8qqGZSztNdPCi7XZgJfZ2jUgCekuPgJEiisi",
  "key27": "5L5a8oqWE4h5rq6PKsaXHjJ95nG7o779n2vbRKHTeTZDQ15pVe7sFnMvyX8KCm3jUFNopHesbZtvNAEcEnKtKpec",
  "key28": "w66wNKB2XKeTsdC92MPLQJMkms28oCt8DaAEGvpEKE2x2FBNy5T3ogHayNXHu6WbjUuSJX6zynCHqsZLjTB88Rx",
  "key29": "5kDKMaxfd2L2b83GyFs8ibdA1EEEM5o71NTRVRDD1HtrQtEwvNSzuouAcUb9J1apRbvHw6F9epHJEQsEVDMSPp9S",
  "key30": "iXYiJkC5AssC3bmbfkvtFFdVYSoD4LPUGfbkXnXctGmDywg17euKG5y1dRujfGufqKUEFFrist5sEMWpPkQ8PmZ",
  "key31": "5m6KqGBYH4Tf3dZpqF7NeDpdVhEiPTDAfkuYVjfS9PKdfB7dwbJtmtigYL1uNXFzVuyeR3N7kqWzMhPpyzyR3GZU",
  "key32": "64vU4AUnKimBaBQjnKKVSU6sXmmk4bzxGtg2HUEtSHspPqQ87e1EPDat1ZQz9ujdV4jLspQiSNuouo9JPimBp2Gz",
  "key33": "EHW7kQaWrK5iZPKwJPCNCtD4Xw6JzLXhZLyVwGYFMiEy9LqnZZCp3zsUrBK4kek6eQRyy54iCFJfzyR6Szrv4G1",
  "key34": "26XgsYUXqE2Mwfqb4n7Wa54Ye6Mfjm4ZPqASnyM7Ck2xegX4ngV72aK9pMm39wgnZvmWKUSk9LM8pSvKYpDHWM8w",
  "key35": "45bBT1pctjgyKgfcuQyGUTJGxDZj6AiLc76yeuSNYymhzQqUvRZCiYgZS8cp8rSdAQ6iqGFBA2Q215j2uQBsTTpf",
  "key36": "245a2qBZDLXfwkzvVtkPR2Yx4o81j3AmViauwbdQRGg2CbS4nSatJMMKG1PvFsD9m1KDYGSfkthNY8DFegFSJUBX",
  "key37": "vfP44mxEc252fR9tngZHauKXVsFiNEpyyWm3uGdeMuh1geEmPHUcYr2nwvJkTk3wKwyvKxwLTN2gEUJH8D5CnxJ",
  "key38": "3U45Ns645XyQhzH1zvLW4NB6yYDQY2vJyQMftVzMkY7XK6RP4UurgAvFyydYEcZAzWee3THnMBt1pQuRJB4AV277"
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
