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
    "muQQmjHJds455JkGeNhsv5uLYNpowob5Ktrrx5zwHoaX57vM3T1mKvM9Mi7KYjX4hW9ut9Zi4QmrpRVSbhtxAwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6yXNWMkyj1DqPpHkGZYTjkYZKAXLiGAiqcvuRrGrdXE5HRaWANPLiCpUThUZdLUseqteCovPWBjzRgkPf3NWzE",
  "key1": "foUdURJ2kMKZbtRruaUUYwhU47wUfbUxf92agiHNGcv8GjCQvRmMdvKrn6MgKwZ3L43QwrnXeY5eR45FhnaUPVA",
  "key2": "4mg9bTW4dz8ZUiGzdiDvQSR9PJvhFagtCxWm8nbi1KsJ5xuyZCXyv41PP5q6S7AejaPRc8jHBBpECM7KZuddfiAi",
  "key3": "2JDfjYdR1MGiqq54xkz7UCvMm9Rqu5yeQ1rz1HeUQq9rgiv3Skj8N5a4DKAkunYaUwUC1f1Egv2q5HXTtKanaifi",
  "key4": "4Q67wE2dtKyAuFmQZbTSRJ11nMju9bj5NDZwTMJM9r98s2EXAY9ZgXYy6ecsYU6oaNjhx1LpitHV6hvME2V73ajr",
  "key5": "XKtWeVyW5UCzqWA5cUFAs9sThcgd9QeJN7WNctsbB6V7i91boCK1FY5Pe8RcAXCZdyZPMz3LHCicSjyQ5UNSJgY",
  "key6": "39uEMJvtqrBwZyGfPhGQoJ9Dp5Bahnr5cDXDogA6rmKuvMTwczvYHi1988AdxysvxNhAPahH1LXTUS7S5vHPF85f",
  "key7": "36AjHgwkSErGkcJc3KZVn3VwCvtoexPsXvUQf29awZ1SBB16U7HEQoibK2nZTFCDc5KoqPCtbKZgYNrFpLhRa2PR",
  "key8": "4JsiUHjrKgsvJnzsec59yfa83mw5xRgXf4R3EKX7jQr8tyZP1h6581xR9wewxGFrAzE1F73Wnw4LZJWiWbuXuB47",
  "key9": "2Q6xHEEeWNZtcmM6iVxrY1Cp9XmFv6KC4U4q5Tix1MUZi5xRMJbcit47f4DiGK2exMyJc6FGFibze4WfsBr2R6iS",
  "key10": "2AhuTJPMUfmKg8nXTCxUUG4m5C5DeLVNtaKvcBCQMNvYBrzjpwweRZZFCUCBtBDicHx7a64iYqeqn89i7PcdK8io",
  "key11": "3W7Zir1GGUNSaaJY9PSz9V3Jp85dFTyjJL6YQyABPHfXGg96RdbmQPyKHo9K4rjWgQfNz91vhtwBwrL8swTazcLy",
  "key12": "5e2wNvKbMBscdzJTefRLYVFD2KpzaZWqrAdusrp8rpQ8C8H7eZJ57NzZa5HQgDuJ3BW8Y3gKkVS8uRNqt4Q4ncLT",
  "key13": "gLR8P3qDV3ZzXvxcQy8c27p8v7CwG81eRvjZyS4s7zGaQ4EXgdEXa49i9fw6eQXm6sWkgYFXdukSwco9tnoBYCe",
  "key14": "2wsbcjSJDSi77ACd2xELt4s8uCpQpmxPxQEgQeJrQXBFCYfnVvkBTnXF3UMmytKj9G13RhuymTnpfHcNk2fpg7BQ",
  "key15": "4giPsGGs2isUPB32ynG2E5LuQcP6YS5syQjpHfjYjVLPeWQS4m7bWhqTUzqy9JixGTsPptQYjnaoUCN3sSYRmeS2",
  "key16": "vJeGa3STo9FCKsR6uCcBh3QDRHVtfKFhMC7okSykEMNn5B7dbMiBJfVxYqoCTJ1sqxG6wWEr8iKjiFGt5ig2Lng",
  "key17": "52BxG1tVN5DTd7AZxxDeVCCUb7fPXYk5eByiFQW75Bf3JCjQnCiDGerNCrayykYTcQPwvP5DkowAqfDQA2tSJBMd",
  "key18": "4pxx21fvGmRuziwECapwBG4iHD6Cu59jTzo9fAuaWrtSJTqJu9Rg1gt4WtfWhjvPqScqXQzXt4PFWAK8CaCKHLVZ",
  "key19": "5rLZ9ry7u8E8jSGpoN3qQrg9cJcmZZVmC82w5m6eeXB8fzQnjVxuLEYFMh7E85r9D9h47Na2NgZKfbaZ12yS6tcQ",
  "key20": "5hNsAgH69JwA3hwa7ASWRxEKWxriHhN5CNBBGSp8stkZ1MhvCH3tyaC5pb9FAex11CvZj5pWwGfXK3jAqgvC26P2",
  "key21": "5VZMX9BRdVpDgRcsvFXHWEh89RL9oDb1oSCoRxSfMiRQd6ctiB7hx39LJW1MhgyNGigExQYHXjcBYRw885Rz8rmJ",
  "key22": "qgxnSyDmycKz8zvRgHHYRGh3R46US6zHLfD7tBsjWoKJ9Qp2V91HBegzNjb5zfojFphWvyRfH9ChKQ69kEFbzLz",
  "key23": "33hCVjg8QBEGkgvTYExnaX4p3Eri7yxU2SHXtQWJzaJUFxzpRMqPpTTyezQSbXwPgBe7gKv5hjcGvN5vEfee16ZZ",
  "key24": "3VyqBMMtuegaQLjD3piHVvtb1wGxWJ6WVDn6qPMjbkQH7hvJ2YAn5yhKRJxG2aLZhpxeshE5AeEN3xhPbXLXCxRq",
  "key25": "5MJD8qVH7JLH6N2VjbbLankV2PRbVqQwKDUDk2eJucgchu5kTv4o6BWw8X9vCKjPe318cvgN5LyBmMSkkm2JRZyV",
  "key26": "3GF4BkLbjJW88pqUHnRAYeaLKvfQ2FMYWPyzzmfX6CeJsAJP7tu14qEsX8Nx4b7biGDJqPu2RgsG4Wscyjcxz1vy",
  "key27": "tSNG4Uh1qdsKwEVKPJHopCTXJ2akz9MLhURTDcoLyjQu78qsceBFeq7W74X9LdhXcqnUoDwmJzSg1FyysJFtN53",
  "key28": "47G1iDyMrPXhrCWtBMED3Re7BZYvskHhQjk5i8MeYBL2p8KnMQ6rL9QxYrmtrzXyfbDWqztsihDnYeFmxDf7ez1o",
  "key29": "3AyXroHzh2YET6wrhJHDTUcoFw8mnzXQU3B3ouybQq1p9bc2YuAXts9qVuUU9Tpb3U8mt9idwLR1MEbuYjaMC3DJ",
  "key30": "3DiH1pReu8vBuvzaCwyx1NeYLsMfRr3491ZWu5j82Gc8gysYnk1WDxu7rjEqArSP9Mq81Zja7KW8JeA6EAHpPjae",
  "key31": "53VQaSixDXSuYoqoXQVtTFcLciTqXmuNjMg9tC9ob96LmumMDxeJsAK3Za9C7XuP2Kjwn93ogTWevvUpZqRZLvkL",
  "key32": "3rTXHotELN9oMYJvi3PGKAidSw65LhfyDTN6tPURoxpvWYirEbWRMakjic9euHMCuXJ17UCgZvaMWYLZ19udHCmZ",
  "key33": "oFcmXrZNMpF6LxxQQuZ6Q2U5sK5qAJb1xanrfpxCcqBj7S92XN2jXYVVTpNUazAkP3pF5LGpYEBwXNZ5q5sgvou",
  "key34": "zD31HWzjqUhgEBxyh2r9EXMvFg2mNuWSyuWDX9Z4uweKrE6zGxSvTsa52rmqqRPbS9fi5LD4SinCi7AY1py9B7u",
  "key35": "3Fog4yPmY1W2tai8jxzP6K4gaUWnzkbn6YGcpRPA7bga2ZETfpthDbc8H1DxVruxFwPgLngJnLYyTNXsVxVXKzfd",
  "key36": "2kUceqffRaDNVDsNKRYRNtA8XqFugFN7jmLudHVB83zBsMWLpM7TinbKHnrbw9Ej8nSEx7WvVUrmkT4tHK4YXSwZ",
  "key37": "6x86QR9gvkvkijwzvog1hEL8Sdeq7Xjio3vj1UaVsDPozrH8w8h8dZ4huGkRhhbU8qxxuWxLGsRqcDW3pmCWSnZ",
  "key38": "5G3SmLt6Qr3cGvRFayDz8vAKns7HVcj8Hmr3kwLBQDkYmcmnEG59fCV26yPShaVRnDLU3E4z2pxdBQLoNPFrP7vy",
  "key39": "51G5kQ9xMv5b1qWLMXk2XyAEz8QEJjT4GH5EJa4Xq9w7ZdvZWxtm4WfAR3VLBgiCVi9jcuYCuMGEhLkYNVSUHh9d",
  "key40": "3Dpy5ptA7Vw9NP7vbYG6vPenYS6UfUkQ7ManUxc6CEbyVJVAJRpavESKzWDYqB8aVpThAVx6XEFtNsioQFw1LthL",
  "key41": "5DJj6jkE2RWk6W3MeHpSGXLMyXRVdzdS8yenXJ9dEDf7Rk2SYGc4LxpwPFEwacpLV7hvYJn3WSUpiUGaT4Q1rDy9",
  "key42": "YeKitFr69zyAJVVYEtcbJ5vc7nrr9E16iCSoQFRPCQnrXpKnT3KVykuY6YARYewSV1R9ukawH3LJPzfpSbKUhCX",
  "key43": "YgLg8mdC2AgEPv3Xzs9bXGDc9qYdfs5HCwNiAea5tTTWnsipjjmyUeEEoKDD9DgqQLHmJGu63wRtvgY44XfnHeX",
  "key44": "4WwzC4RJtRLATbkXBXbrc6PeET1JMVsYdK9jQScD2pfNiPB7c5gYYNWP2c4F5p9Bzx3AviBmEKNiSh3SrB4jqMj9"
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
