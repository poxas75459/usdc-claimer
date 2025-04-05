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
    "47Sk9UwBtYsCrgtzH5jJXcmaSaojgTX3DEpsALk596QBGcGKbngxdymYGyMzHdcdB4iJrAQkyYwhnRsrqvdWy7Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWABqrSp5McUi2BZcgkM2cg2WdcvHTNR7VewRWx2iu44bPEy5c8Q9Pc8cCzQmxtwmsMHDaSJ4nh6f2ssFJz7K1c",
  "key1": "r7axJ9qBTv1mNwc8BKYH4yf52x5vhHQYCmh3bTukcZd3YAC23TssvCc2gPVu1dcJrqu7NinpRfq1rPDQcEtKu2u",
  "key2": "41ZCLaKuCkhXfo4AN9r5RaGM5X1FcBCh4oD9YM66Z7HSZ2E7tm96rwzH5ut3dSS5gkWH7iocE5osvqfYm6W3j3FA",
  "key3": "4v3guNcphFrwd3kL9ehCvZGYMYVwS1ycRz9d83YBCkLd6LLtxN3GrhiXoaKvsGc1ySd3VDmVAvrJLjcWyP4Pwba",
  "key4": "HByvSwbf1a5ddCtNCbRU21s75jbrtYSnet6EFq8i4aVcUj2QhCu1gEFSqgbfZcXM7T4GySr8JMV6LcfqvpW3EYd",
  "key5": "3TskNMnKZLU2tGARhv6r9e3SbzbZLr78ed4VzDMF5yrB7ikqoXhnF9buoBf4vuQoqnemE6HSgzJ97JpKDaTXXZ3B",
  "key6": "5cYhbv4hpBdXA3gQ8FBr14JnwFwZwkheAHvLZmYYCVhwBaq93aTuCf13uT7voQ79voxNc62RQi3n34pu2n7ZNzPN",
  "key7": "CFpmbw5esQcsmb7izWu6XfJwXw8R91c1orgs2cp4pjTKdQNxWqxSu1kjKYYqZJ4eFb8nUULzfqu4hMoGVJbXs2q",
  "key8": "4Mtrxy1dwRmaQteFVdmh85y514o81AxbmbFnxNT5fJECM1dteuowcfvLHL9sUsmS156JtRg7DksffjEzAZLokoGx",
  "key9": "4TbNbFf7gnMymUkP6ovrnKx3krSsLiqLhohwZwWgqx5vzE5C81Cirhvc3i9nm4JSeeUf74EGH7BoqyRT7cohyqcY",
  "key10": "3HYtJSG8WGTVP1NAvUu92PFhAJbRsQhFTzqwJD6mRTX24coZStcTWg2E5FANeKfC53NWu9caG83EoPWeuoJmuGxo",
  "key11": "5L8CawGWZ246JLu1XupeYe6JRjVuh8CHAZ7uY74yAY1jVkdog4rvRhTLFEgajE5HszWFj4kMjEYgZfH9D8vkxdsZ",
  "key12": "5qRnaGhpXDLxUDRRe2XktmWmp3c84JcHoG5dow1DzL36SiyqFcoTEzK9FArjrCFcSt8CjqVh7fFemRVGaPv8JUXG",
  "key13": "D9xeZyFFDds66NCbdAFgFUFZhYEdWXjmUd5XAtqqX1gu5j9Zu9pVaSL7CCnxRjEGCPZRdjoXYafbBG8xNqVBxft",
  "key14": "2g8ewjZn2J6kBiYCEKmiogV63XijoCBicMr5aW3SfVJH82JbbHT9t1PXqgzjsWJpJh5eajZhRpYUPp9RSq6V6Cnt",
  "key15": "3vVUkj9J2AwcyMokoM571RiBhWtWsqDoqXgU43ZTau9UkxYpLgjaaiAqfmRYBoPK1ReUVYbwvALGtX7NmFFZM3FF",
  "key16": "2y8dj4H48Q3CSckAKEXojcddcojcrnEBym782niTGma4Me2AoCDCwYTEfsCx9SQc4uhUrP9HL9u97z84tnFyK4V3",
  "key17": "GHdqoLFhukgaoBNVDkcK2vpsVAKzrDegTpXqCadeBzpQjRBqYvrf97z3bdnfk6ZkGsZY4fDRjrJpRgBLK1NZ7WX",
  "key18": "4eHKG4BSTUyumjb2hHry8KUxuLJzc94s8Z6gwvUBgRLEVJDacjTcUN8bZW8aweqNq6LobmTBiXTLtWyexKzSpzG1",
  "key19": "41cnAkAkkghaNSNgzM9KkzwqifRbKYbcgmriceWuKrABwbLtX8DbhVndnV2d1x6EnrSbtSG8CyWJLvBUbq1eX9Gs",
  "key20": "4qb7acsG4cZHosmXae1kVbrtTZYJ4ekkygiZtVoi5mTdP44xyfArm5ZuLTGc5S3htcFeXMU7oQHzcg3mK7sX3kyq",
  "key21": "TPwyu68XQir4khCyp3kK5CDeTGes1qDrdc5rT9JU2DysVcBcWnpnPxndgc79nNCMvyeaRwp8f5uZK3XGQNBFrRh",
  "key22": "B6ZD55Lkp5h2EaF1SbZHPPkWrZoZYaUVHf1E7wXo2kQmHuWpJAo6GqeTREGLpM8Z593u6ZFBWWbZgd7Fb39tKaP",
  "key23": "29yPued56BVp11NhPavAi2TiBfGamp76LXTgTsZSxynm3iohWu4SU9B4NK7FE3LcbUpukrwT5Smdp3khYDp6WH6s",
  "key24": "2D5ihEhWFGW8WHSkFTSt2WjSKm2YXdBgyAhkUmA1BKJ1WsV4ygbX2kB42xzdar3qDjQogrEbHFS1Hnmi2pndQ7hC",
  "key25": "5yquKCcMqd9Ay43eJqmf3LUHQgFb1nA8v1NyWeYEQ7xFnwvbwechRZ9AL7fkJEv191TU3127hcUHAURCQB7Mr92f",
  "key26": "FQ23JvXTKicA7q25JDMUjoSwrhaXQrkNrxkr6ZiKfsjaop2PTpqYeYPGPMGV18Ap4gYsQyTJxN9r5hLjoZtd4eF",
  "key27": "yMLnoGHRWVv8aQT3nMgrM9FQpfUhdNEPy3y6UjoihtssPDodPNmBo9tG56w8fg55yiHPVDMoJJ5v26uWoZ4qDFU",
  "key28": "52GUbkutFtHF4HPnwxMCzQhZ5DdYJWQShs4Wb5vDnFH6wx1Ai54F2iLkKNh5uGRsBUMq4FbciwmtmZASHhwgWtjB",
  "key29": "3R6NTZLqcASQwRzCuWMB8HoRMTV2woRWa58DpiSTRrFU1UrtwT8NK4cLcM6Dhmb7J8W3uPSypZioinHKVdPSinrm",
  "key30": "2SwnJk3epcaGkNbfc6viRpmZUqpbasw2zYLFQWhoHLF9QFTFacptxVbi1GDJtRVXy2Lm91BkiUnyWtauQvMfEP5v",
  "key31": "2i4GGzB9TNu8buAZm9b21GXVyQsKAVqSoEfK2VbAGwejazKJsmH64x3AbhwJL1ndF4kru2tSoLTmgmwjY9Gpr8oe",
  "key32": "XX51kYNScjns5eGsZBLhUyvFYugX6HJXDxctZ4UfnXwz4t1P4uSY8n8eJyL17kmhq6qVMcyywZCp4hQgV3xuRdE",
  "key33": "5Ghro4bG6uHnBiEthHmCBVQQvN5kM9rXJR9cf1eHFzToEMiiLMRnuYzKLDWD1XDW8jEzB2M8KmrJeGw4imZb76si",
  "key34": "6UL5vgnUmyUEGE1ryCEQhHDUzjMBqJjzNcJHAPg2AhjnCwHjeWMFUkFpv72vPLkQAkqFQZRMPeoej1E7XmbEbks",
  "key35": "2TLTZZmByd16WW5C81ZaKcjiXhEUp1LhyjeiRXvcicjBtDHshn8xLV5d9b4DX2zeHRkUi6vVkCoVXUvMEyMLWFZL",
  "key36": "4X84mN8m51UcLNiYeK6xcuW3gyDFviEV7C5oh7edxmqgbkpHf4xcC2Bpu4KPnuMzLrcXtLqcWfUG1myaP69AAFrX",
  "key37": "64RUzPRoAPMLKDbZ1cT9pktVpHeuLDjqzR66nXz99bzg1mRLixDJiDUJnQ4orHdjGnjtCSsdMzBY7YL6PDxPzgFk",
  "key38": "fYVgKKW5DdE9HwkfW4sPsPFe4EGqXMXrm1ACvTphEFMmR5YiKb4UTfKoUBp13h9Xmp2GrfGQr9hWLs42NDkyFf4",
  "key39": "3PZ1VHhNr151464JVht4Pnz5AjF9Fc6EEqFhffj5easLUJFZrdf13pwR2GPK2eveHtnjSyyp7bcMggLnBbvFx3cY"
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
