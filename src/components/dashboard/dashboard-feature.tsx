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
    "5tCRfe53wasEFzfrnbnwzHqDQZjk3idZN4ct9nT8ck9RXt5ciT1Wkeg3rjC1o9zkLW9vx6jF64oYTaBZEwMP1AVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8a5wRP82Bvff37ri2JoWdssHkYkC917ibCUakKuBwHbosL9CXhwTSUkso84Bm64Nukbcpx3FBfFaZ8rngfZg3b",
  "key1": "495z6tVK5ukmhUAmYZvpu3sxKfJhP4FC6TDQKoYmM6Fde5teqB8niqCZuM78xke8mhQkYM6AiNyZjpctqNkyFyr5",
  "key2": "MVSpSHvjQQAarGaJSzeGhnD6jmF9XgvCqB33y22Rumo7jhUtctSeRYcLMBW6BZzNu81F5t6SSQ5Gz3irijpdRp9",
  "key3": "3jrJUnMozmW4AkwWyx8TMRKrXK5zAyQmYYLRvgrsHys3Qi48ar7sBYN7m3hFG9CaENbJxw6Uc3aiWTqLdmz3nqyK",
  "key4": "m4FTSqrPrW9u2NzcUbxt8qKLuyfC4MCSpzJLvM89AzMva7KB3wNjCXSuZVvdrV27iinG2REnJNNwCN8gbWEFPif",
  "key5": "3MvFLwAbcdDZHtL6hv9i9JHTh9Fwe16p1aE19b54ATSnNnXYnXe27iyNPfb8e5QrFg6URwTKweubnpVYJb5EH6oR",
  "key6": "3zUePAtvjZFfuehvGzc8inMHQfZ4TYayvz4hNrAuBwNttq6SuUxdn8HALeTCXhLe48gWZmdqho7Venny4ybCP8Nc",
  "key7": "638oxesWzeVfxP8JHiaqiHTqzC8KY2ebTY9z7RnjNML216j79admseR8Kn7W4CPWsFYN2mVXnCvvJgpu5JxSoKSa",
  "key8": "66i79aQojP7vTv3zdEC3SnRkebvdKYmp5qxvY9ddnJC6LDuZpzHWMJLiLMjuRcktGh967saQuXruzQhz2AFXx11S",
  "key9": "2QWEutRAvCL4EEvs1NHeodW5noEpfZaAUYs96Z3qDC3ggnoAABBQ1qiitnnCfU6fwLZWE1P4RMCLFPDJzkSqryxm",
  "key10": "tNHiT6ces3DzatSWMW1zE4gVX85RVZ2Vsr5T3z3UAsEjCoBUG9D1MTkYChcPfv2hCx1shppyzMmsqZEtpdptFuD",
  "key11": "5AU8ve5BSUPCB7AH2YaFGDEvKE5gtdGSubfBBvfsHkxRA3EJ7z4dPMRgtBsuCGQxVWdMZMSq9FEM1n66AYPRAdgc",
  "key12": "53VtpC5gat1vW28PgZ92Uwyw5FNsG6xwXxNFGMfxGa6FvnHsYU3rkvjgSax8k4BnBwJ9Aaee7HWPijikXkMSvSk4",
  "key13": "4fwFySSqciJm6FWiRZuxr4vyk23n2eV3msRqAVSkjFZST2V6cH77jR6p3G8NCu6SjLw3ovobD3nMESbXVVaaAmXX",
  "key14": "DotjvkkC4CkEV8B2ioUToX4FJG8TqJ7qVW1HTYd2pSoeJmDj3cW697VbQMuZ9CpCuoeehLzo25qnZoikgqX93S6",
  "key15": "5gCZHD817btGau81D5NnaGyK6Puh56gm8qyFL9W6wrBnFML8eKhAJCkSLHAMeh2DxhArWmhBiRMCESrrKXEfyBQo",
  "key16": "128wQG7HCnfRP6zobVSF4K62VnodR77qFBX1dRF2kaeY1yZYyRf5djKiuN65E2oz4xJF2KEoBLcaz7hFuRbfpQVc",
  "key17": "6MChYkbw3kW8TtipHwZRGa6VFSnxVZGEckH8Cw2pt67NvmpPHVF8sRsZjnbAAEZpPw43nY3jNVvfaA5wBx2RhD4",
  "key18": "428MC67vjKzEddg5Nbgi8kxCvUEEHdnLGdrQiVu1xSsrujZkx9gmR8sG6gib9fi9XJZzUePjVdLoHLCQCrmvs2y",
  "key19": "7P1vd7gZCAsTf4Jt3wuybwPknsfDidEo6tx1J7swTT9K9YMvvepq1L1B1VLBweS1ExuEnUcLpAyStFCGKhYTQe1",
  "key20": "2vGnuYQ7wMry5ie7jE6r1c1iAw9wSNGgd55pWzgqDyhmf8agGZynVduELZtnCw41LuKCqaR9Ng81kSf9btBzcwGs",
  "key21": "tSJ8hvCb9qp5LxYZyx9iLStYZtjBErjMSeg4YZQWRmABKJs9dwA4xTtAjdMDZ9eiMMtMv1QsTVV6KN2dNvYMvW9",
  "key22": "4XnDsnExPcsNsVe9Eu9HwpuA6LrLk2yw3S4XmXdmfJxFvqapiSWtFvGXRGBCnqi8xVcSSJKpjGD6Fg13RdGUDMss",
  "key23": "2E1H9eUJfovryzvExjvt3L9y94LGcCm9raad32DGY3yizoNZtiwmb235mmD5dvn81tEvPYNZPfq71Hk3tRxwMFYi",
  "key24": "fQj2VECnKbr9YZYMA1vis6kQWQWCV8C3vprubkYEAEPyDiYYd8T8tf9CmjidKjUzyUqreFkyFYUMMUDVYzdy7Rt",
  "key25": "5LcwcehaWoz4PbUPnHLAP4PRRnn5mCPVhWm3WZNSKjq7pMKtJ9cpJkaGRgV2mwGAURCZrGPpLNKQgmmtJ1W1XbNT",
  "key26": "33n3T1aPXwPusA8YabTn4deAmNqUC3eGZfQGTa288C4pBs5ipWbr7xSgwsFA8jy7vyUGQi6NgYzsuNWaySoUqBiV",
  "key27": "2aqTNTZHyURZepN9U85mAhi8gQiKitp97GNrhYg3yJkYaonG3FQKr5hXCZJUQhV6B9xjiGRg8ih7ARKZmQ7y36k1",
  "key28": "A8FNtsqK95pmx74xcghWdB36tAQEVjZLLVaDGbYKYzpTunZnxkSPpQp5kPb4hscWumerm18gkShm1B8VZhwvKsV",
  "key29": "2Seh4QVmxuSC7eFvqKE3963NjVN4bVSZEiQDh8V1Qk9ELrR2stwDBUSBEWFMc8dUG9tmSmpnkxQ8W892oHbA6Geo",
  "key30": "4XwtfNFnRuBz3YW6tosc4GcUYSPXXLfz6hE9sNWaJKNBzLeukhavABmYbAqGy3MdoeUHoj6v3TzJnH5GAjTTRymT",
  "key31": "2Bn9XzV6XDVLnivjnFnxmrPVPgxEeehMEtZEonbdB54uYKUFvhsi789fAUhnTb5bz4GJ3FEX2T5ZFCWWDSgbptqM",
  "key32": "3m1EsmAEutEx7Xy8uc98ovPUCkkyDciytagjCD9v5sN4af1agNT3fZudpnzSaGmcTUELiudkC18h8vsJowStxyvg",
  "key33": "358N3Ta49pH9C1RiQD9Gxopf1dmcyuTXqr8eX4428GS8yK9JwqLaJF6S93eAHquR6i8suVNSVJxYLsbEo5pKMy6V",
  "key34": "2k77wVkqRbQ98SSXY3WnSYoNDs1dEoZVwTy8PFcZj4QVZqJKzbenwvHq1eUmsDP8PhyxDqb2PiaZMxKMFC9Lfapy",
  "key35": "2vYt9MCyBEqt1s5VnB16RQPdX4Ns1Sj21NHsr2hSapdUomiNb6injxoELapbS2NUSJD9sQBcADoSuLSiaNxzfLFJ",
  "key36": "5dEmZV9Pu5GhEsg61tKa4kSiRVtkXFF1Xa8yrg8z5yBNC9QSWW4nXiAP7cSWMzdDMJBRGMJXKuiEQA2TTiCVQ7A6",
  "key37": "4FND7pAmzsBiAaXC68xRTvFfq277yLp4PEDvLx1BrswZwfkRJ8oXLnko7HYumoSabjnoUNbuf2VipzdbufnEv9T6",
  "key38": "dj8SoK7oqAPEyayTttCzd3EQHfFkr8TeFFZ8LGmowCmXW1RGmZmcYuDf6LTPcvnBNLLUTRcPm2toMLyYN2zJyFz",
  "key39": "4du229cRnZWwEBgVMJjKHJ4h53zb3tbjHYPPiYU8YE31e6GyFYGwQw9APSdKcBXbuphXxTYEoCfvfKQN9AdoJf8Y",
  "key40": "MCiGLs5s6BmLb7qtX93ftG9gGSAH54kDbqPxjCqPBr1VCpXAximjENq8Tfi1FeHb7ABU4Utt9LYNQyyHyt9PTYg",
  "key41": "5bW59ZCeTNLH1q2ny26bdpEVZSUcNpQ8mGZz952Upr64JYsjq92kV6wJneahgULDvmd7NUeqmY3rSpRBj6hnFUpJ",
  "key42": "Fu958rMXLiUrqbt1bMvqbwVU9LvubN24g8sDGR71uNpHqXmj1VZEevzn6C2SR5GPYrh8ksnNKGx4Bmznevv4sUa",
  "key43": "2Tr4pyBBec5s1GgsoSuctJ5qRFeSB99RuBDkrerNBUzuDtxcakRp8cj1qG5xpZoNxwMxN5QboyG5Qvbs6qjaLgpq",
  "key44": "5jTq5GSFLGMQSP4TH1oSbqMQnWQT22FYMvzRaRHKVqy22ZokCxYK22MEog68EJy5Q7XDqoBUJV9zPRLVFV7X287h"
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
