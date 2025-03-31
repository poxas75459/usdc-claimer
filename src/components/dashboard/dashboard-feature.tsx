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
    "5kok3Kb7uAPFACPY51BAgcFwWzFRRRERLuAevNyN3NW68twxgKik1DtQTUuyVipV6VL8BEYF3sfHgRQwfLBqPbUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v9cEmhU5Hq6YtMMdVzGGt8QMPFLjmvQtk8HjE89Lo8fcsHC1wVG88bNDk9xsv5ymshTKZ6fgcUu2wXU5nK7Ga8h",
  "key1": "21tjjXAaFNRczLE3ewUBYG3j7vFteQL71iyRD8XrWBS1Sfnr3F2UDQi9xcz5CGzoQq3LTMs3GWPV8rBev9GoNifF",
  "key2": "4NHNhjVyCccznQUz3VkRnjjeojq7cbAAPSRa1i5UzeTVSjxYdgHE2iV8c8NnJDtCnAmFA8aiLXsQcYNfuND8Y8xi",
  "key3": "z18KSqkYfhgMdijceGthQdsb6r7HqYpkvZE2CppNyKabmy7mqLjWJzBJUAXJFemPWG168iz2XePjbvcLvqv2WtF",
  "key4": "3CqW2JdxcQ6H9BtNnHb56SUg7j8kgzYwLxrWxEF1DzPM5nWaMTPLXAWAVPLt83QGjxCjSvJhDK6sRVEsdA7XsRxt",
  "key5": "5D8HcrLSkAWfJsHKe7yCdVbhkw2VTLJ7wHZLEBk7fihtPXHqfMBP5oPv6QUKGRdAh9rhg7vze99bU843BbvpsAT8",
  "key6": "38CrmY1vGEA1RaA6jTEu69EJ94ry7EbeDmCdFFd8QYc53Wm2i2r96hQ7MmVHSWkvZ9kf3BbHRYMmVwphctC5KV9j",
  "key7": "2C6SgYjtacuNwP2hHpge35dPinLg8SspiTEJhSS758c34kTNkrDRpPmcBzrk78rzFmBch1EUVwK4pUthyvfPcQB8",
  "key8": "4AtyqXr2qbjDvTVWwzxaAuJPHW2dcRQtvo8TuLfdL9FzzEHW3nF5sEfisLkYWwZkrfkHRMp6wy7FVnuCDC2Rk5TU",
  "key9": "3Rp7pDoQ3DgmWuhcsEqmdWHThtX8cNgmwSk1g1DUY2sGRnagPDRzfz4kNnwZnW9QUNgPu9tBc6Fg8vaCnHuAV6MH",
  "key10": "2fQf6nR3GBhJgJTnw5gcv7ex6FpaDM3mrkhZ3LsXt22dJ8bf1EcYJaNAmhDxeyhX2UdaquM4L1i7biPworgaSJFj",
  "key11": "2MZy3aBzNKGWopF3xL1nyTaurdCF5y8uMPeK6SwCC8XVkhbXXyjLLJ6ib1eWkvx4pr9pzN611rorutPzkutQJfu5",
  "key12": "47k744Qe76WS1EJ5ZaF7bttCB3YsZcGAhEcHPjQSs7r5cKxDyftEEB3pWZEru185S6YssdNbzUztSa25gTeyXw9D",
  "key13": "5YoB7HtxiwdEMrTYifbXjpc2iRvKmX1JgGC9teFMZRxCmqEzZfNuzafzbFJqqaV2rcrQAZugM7j81ozGsJ8ZA67a",
  "key14": "5TbD3tPMcX2XmAbQdVyPnkJJmQXLNpjsiBHC3aePS2BmjmKezqyCA8THLw3WXeiwb2yX97vMwQpQGjboLCoRrtvR",
  "key15": "2tXkh5yDszrvvYNCXMArGMgxKrU9iiXWAaV42AmCdgZiHb699FM9KHqwUCjNeELu2NAfVyxdD7q3aiUaXmbXqft6",
  "key16": "4Y4CaqA9vAdxzQ96ih5vwDkbYZPzuStwf5jzWoQfsaEUFc7eG5qahQoC36v8owsCWntfC1tVTNMzgs2mzifNRkQa",
  "key17": "5YQ5Mx68aKfCZpGUA6ALAagy2U5V2YoWuhMta94AjaqAk4sRoDGrRk2VoraNHVgdrB9bQEWP8RuvRDrMbXR3dDaw",
  "key18": "2cc76Fg8UhQn2RZPvVnsm17Kfx2izyfGvUvYwTYhaTTGUxJqWeFd5qeELpiCSw94KMnSaKTgbgbRqLtSTiyouVtz",
  "key19": "3mLKckcprgoFqGBrcKRVHsK36urFwMdz498jEK6vucRH9vSr2h8drxXvecPZoxEat2qbRUx3Kk59Dmazx8HVF3oj",
  "key20": "25GinzESgsjiJNPcyEYANGdd8SoR4jue4xczMnGjraABS7nXQv6FpQ1Da92r3JXPVn4FtKSLbSi74y7Xp76B7QXu",
  "key21": "3tsxjk5J5iCRz1tQCoWLCJNZrAo6pKVf7MzezGNxVF7HoEjJ7pDVz1ZXGj5yZGPq1RXCTXYJVK5vdeCdeNRhChiK",
  "key22": "2rbsyatM73krdKcyDKU7HmHCpwQD3DZUsEDwwnfbbEDZsmM7B1U2gmmPUZPqREPd22CsFeUDG1TBnWVrcvYYbSHV",
  "key23": "4xzHfvDjuEYWwqESNqW6KcrjR3b3WTqA9sHfX26YMHhJQUFPnw1vbxnEJxcS4paQXKqjsSqiMaqpcWPMEPaW8khr",
  "key24": "5i1SoGDYrnK77v2E6j7fuoNTicaJZHcchuSBMHsH6q3AGVonFxTcU3eynztCMV9EHNmW8hHcxDTNbi2tibwgc5Jc",
  "key25": "5bbDDUq9tjY4MjUGHKkZ5A1REVRwWcKw91UAEqgJgeiwdbiaKeJoJsWayJDWAz1FeWpX1B2wHxEDZUTPNuNmpYRg",
  "key26": "nwqbhi6hAmNBhdy5d14Wi8PJSQhTdD1hrj2S13zZ9GooRAn7sPLfgKn2ptz3W5ggQ4Vzj8Bo394RtpaBEj8Jg8s",
  "key27": "35MckSnCjBMz9Jhp99EZJLS1SVb7nT7QbqAXxrGmr9Hz8EENoUma8NLjdZzVPfhhkXMtmscrjJ79cAcFJ8Rzg98y",
  "key28": "2qfBcerznbaxnpo2UMmevXoqNUcSHyJvBkL7cUm5Jx84QQ6qmDXi3WyERnhu3qeoRwdkoADztPsCJV6FTM2GfUMu",
  "key29": "64StdyUZZb94SaEEfpHcbGuu1GywX5PpL9SXjAcAENEU9csd344JWfk3i3bKc4roabr1tqat79BjtFQUhd8LdWaj",
  "key30": "5k6u5g1AQEdjxUbsq2H8AcGaMj3wtdHdBtYYgNdQwFTa7ug6yEj9dpnZ5BAHPirUPk5p2Zga49A2C27gKTeJaRSV",
  "key31": "4ZvPqxwWQ9z2T4kHmsc3uRqmiicpceBX9AP2tQd247TZcD9QoJEhgkcC3jpcrZHV3YYg9a5fvGDtBF679tLk2uUg",
  "key32": "35ShDDFcWc9Xf3ZbF2C3trTeY7SsyQz9sJctcRFSfJra91D752nSCkDcNqWCWuVsgpFm2Ax8XF1vuYGyEH2ez6h5",
  "key33": "2zA8C3qxUfM96yyKPYZbeZU6qUVsErwRBDTWgA4yGEggYaAdtpbRQ1CrL9z7RUvBxrUwCTTM6KktSF2Jcun32Qrs",
  "key34": "8rw2M21TcU4Bt66CywfPjBT9q2Cgd4BfwAT86q72iY3ydXZnV1g6DJXuGoohjcuSRkSaGGX3b4XgnWFMxcyEMvh",
  "key35": "xb6XqYDqZPPrbpFjHM1JSJL6pmQdCGu5MgkPt4KUr39AGDE31mje78Y3Ay3VPjA4M9MvcwA9QyJVJpuf2rgJYDq",
  "key36": "2peRF4cZVXdTG9EPFQAioRaS7e9p8ckfq7HetTvj8SHgguutqbxRgfmSsZprVeXVEZEjFBrVsHmu3AvV37PNtKjD",
  "key37": "Af1x2Wzv53ESEfvGsfPwopCwfmC6gdJT2o893uByQKzLJ7WDsKAWRPqSo7Tzmm8FhMuGRrN5ekPAkjYV9qfqgYf",
  "key38": "3DEKS9VLBbS3xv5xZTYPpKui5yt6unPBirikwZ2Vy9GpdUiT79u1u4t5bo9T4sk1NHF4YKr3KyFftpoUD2ehPPG7",
  "key39": "3Z5J7jnicSfQQ9yjkLtDUEtb1GdgAWMNZHD77UAc3oyRp2sZo8Se9Qf6uHfDMbnYSH22ZF3EoF2HczAz8j99iL1U",
  "key40": "4JQSNkG5w9eXh4qXhh6vcwQMoh7E7V4SnNjtyrgc6jmv9raLgbuMrmksgmpxyx8MHsP8pXwoEnQiY4G72FCEsZLX",
  "key41": "2nLse2nNRscShDPtLbTDSRVjsQBJHmxYR65DUnifWroqWP79dWUqrweUjyBi5vk82rYCHTuqfnWixr2sifzM42dH",
  "key42": "4KLpWimd31ZzXrLwKHjScdZeJbVeNM4UvsTzhrrYshQr1L6thbkf1USN5xrBEcNANDZj9a67YRuaMhswyVF7qoLx",
  "key43": "bJTgBfyymhrRjYtbDwYwJZuibSpMkvbSR7X7vA8hVrac7CsPCqMED2GMXPpP82G9soBiyyK2fQQ2kdGH9YV8WrL"
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
