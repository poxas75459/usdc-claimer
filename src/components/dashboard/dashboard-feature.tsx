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
    "5CsfYBMoPEgWLtbU1UorruGjjWGn8bVQpFid4TUV9C2aqNFHN5fBKJTMX6XEf9HQ1mFhoEji2RgL9zQ5ENpLNPSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQfJjp49zHqzUun7bsDDpR5uEY9ZxdcPkHCbQyJ1Tg8KaBhm3sPGq2fSUrFv61rtfKuRxiuqPWZNcgioAbSyAM6",
  "key1": "zLmT8YHL6imNn3LYA8vQ7ymvSSUtiwXg1dMRwBhqDtXzbDVEjLE9XxKUuqFNHqVLSBQCXzeJ7sPCaH7qRsJANQV",
  "key2": "5LFBquCBLgb6SdJntfhYtBG9a8WmueMmp6VKh9rjrCkYqtCDDKZ4tRK32gqC22CnUNj6Xs8az7rUsKdJgH7Cowbh",
  "key3": "5LGuq2xF7K16rB4mhSmWUiZs1T6djpXzERYCRJB3AjcaQAfSKBS7RSpuabhBnoQ9m1swWaKbtgnu86RP83vviA7o",
  "key4": "8MAdAUpC6gHFh5cruGLc7697FgZYnvs5hHTjPL89RAV7pLQtzw9Ms5tgoeMKysJjq5p66LDBTVzTC3EQzB72LBU",
  "key5": "2EdvB3ZnYKX4PCNHihA8f2JNtDdGNsY6MthyZJ7K5EcvWn2v993ktEpch1Sai2y5KwTMLStpfELUarRCRE4PDAsF",
  "key6": "nM8ey76ab7M5eTwVrqTPpGGdBMTfH5JoxKF7ZHS1HCWGVm9Pq12WjNEFRoTvxBY7pivgBheCKxsb2XhUAAVNmCP",
  "key7": "22B9oqoY8Jpig2XDZqRz3u4Z8oUsUKhGiS9MzPCQaTWg1LjjSJvcF7oY5Dd3s1Aiq7VinKwf2yeaXBod9Yk1BCyf",
  "key8": "ncoyDmFiYaUqJpaihwQMj7FhPXQnfxFQhSiUvcvzfLao7H9TNpRbswWTpq92XX9ChSH7xbv94zwtcqBNo5tkE8X",
  "key9": "5zUejj3hjGgQvMp3aPtgnaP9YtSL3cLjhjTKkJveKu6z28dASaBK8FbYcJeEFG19RfD1Ba3kpSsGNpGrsPjDNvVF",
  "key10": "23mWEHkTVZyG7vfDE1pR3xXJDmfwkMEVNApVLstoVANPUtA2wc7yGt6z8RrW2pLw5mDruCoH5WWe5zAfkrwXeb8J",
  "key11": "3sSh66bZzMerBKb7HtptJxGd2ZnfvBWe8mvcchBj29pcdDguT17zThNWcZeLhLozMer3JfcgWUKLnqHQWGcm86AW",
  "key12": "4GArAyiZDSX8Sntsw18oEEEEuYGRb9cTteytGdJYa7ADekjVGTBT7XWowDLwNWqC858KKCMBBv3Q4QF2QYFpmswE",
  "key13": "38SbNQyHF51TaYiAQZhuABLd1L1Jdzd1z6DorNUvu4tPfLEmGjKa11rHbYEUA1FkwkDbkGRpAS9kg7dhsWX1x77U",
  "key14": "4JvPESzUJQGa4fXqG7FVX5Kh1FJnqWPh2YcWCGbVXcoef8NJiHPNKk6KKWNpZoR2wJJ6TCHeYuaNyrM7wWsPx17A",
  "key15": "62ih5j5CDVFrRtxSBZY3NMmyZZihpiZEmRpCxnXpjjocFZ58kbLAeLpa4gunKRhXe1rvpxpKwBBnWnvUTC4pew4b",
  "key16": "66PKKp46STajjeRGfyCpLBCMWXjq4r1j9tbkKGtHKcEjrrKiXb2beFpMz6P8w4tyFyw791WDsRdBHKvo63xog2uv",
  "key17": "3JGG613TjszqiZwGMDek224uK6CfYaYMmMjkqf7NPQeF1RHNyT3i7GdXpwA3F8Ke1iypnhAkeDCSa9LjbBGQNz1A",
  "key18": "37FQ1zSti4cWPEDubJ6gemkjhaYb6K6mk7HqzgL1uQ4XN2t2Ynnc41yti5nyhmY8hJHDiWgEtCWm4PJq6SbSmr6q",
  "key19": "5ECupEGquva6xT68MecPMRKQ6zgXRjTB4mbPhGi7VSZNJajFM5qdW4uNj3BaxKWambF4fpsb9hRTyGGLHYYk3ZTy",
  "key20": "4bcSz8aWdtmAjmMUh9Mb5CpotScMjSF52sCAcxvhof5nLa7GVmbD9KvRyrzygx6RKWr9D65vJ69tEA2BuSwcteHD",
  "key21": "3yqC5CjiRuNXnqufgDTUPT1Ny5VUHJJPNzpSDRToikx6fyJdoMEGgKT59bGgPcgt3gDzt2zGqnFNXFz5qaBfdyjw",
  "key22": "4z1m4624PY1UiMy3VHUHZ6t8XWBCJtyZoKyhQiTn2H3c5SvdLduXY75iWJxB46q64FqcM4f2uNHnRFcJCTHHMbHg",
  "key23": "5p7VYTsiLSssEe675zXjR8J1mUhLJp3V3pDBppVqcw72SEHvGQSe1PvmyF6Ry3se4i316iidQPpJzzPVoH8njdnj",
  "key24": "2X4G8A9ZwxFyyX2oTuojJf3n7R25qwANi8rrfqDpPZV24E8TjF2AxeSDNqf7sY4oCtbYPJbovipLQYaUcTByeD1N",
  "key25": "3FRaPDjKGwfUhMxxfEhy2a6oxmBoUyBtkfPezNGRWHMpBDBcbYcXmrtffwdVvzWBm5Z3akdb5aUHR9dnqfpfdzrH",
  "key26": "2CFaxaidgHh8xUmKKYFZCVw7QvqTynAuZi8vgUJQs3e3HQ23HPXaTSvBbwBowfKCE54FQrFiqR37vbdhvHsgZDu",
  "key27": "4c9bUgbVmTEc4g4mCqn6PHhP4tK6CyketNQdLginkC2wezEnR3TQRegEBLDBYjiLdqx1Ak3aZj6SyiorUwhc4ZBP",
  "key28": "x21L3stenWujbeRWrDRRDkq4bjUd3fmvpe4ZapbkmHxvktwdWfBw5tkDny5gfgpPB5ae9rQWyNLPg3SsBJnCimq",
  "key29": "65jDSEaUMPSXJQAcKuPxHvJ4y6pvnDjM59d2acLVJJP9TcH6abFhZUcwJW5RWnL9bnXqZikTvvJuozsk8zcX1hGZ",
  "key30": "2v5CeP7htto4i4tQwrFP48WpMGUMep8XPfNf4XnkRyzAYyxkistasGqBQfBzZQB9Uh5Nz8iVHGuaNoTmGAaCyMw3",
  "key31": "5J5VPc9UY6SaEu4cnw9YEAiTXRDUAhLijHQ9U7RY17wtsJdAKiRa3BoJPAZft1QrUQkzZ8QDEWy4NL3TFKDWy3Wk",
  "key32": "W5MZwK7d6GFGLBZ7aZMDCRSgokwpau86wAx5ogTkHUv8Kaojzm5T3jkMmqdhdszAtqtWiFsABdokTKnL9jaD5Z4",
  "key33": "3ST28UWHaLvoFCBKRBUJqZBjbghSeSAC68QcATC1j1cnHurx5NEHouBra4twWMvtKNi14eqhaVnbABmAbfUwURuS",
  "key34": "634GwdwcfM6sD1Yp2fEDbM4mVQ8HHbihj7aj5sJ3XLJVWFjtEuazsiszfUZobzuhxx9WQ2mAZPPUTrmAgqo5SeGS",
  "key35": "xWb3t5i3ui7ZWTAzhtWiUsrNiNJbw9sGoFxfkmkuuetzackHW2MDUmGjgajcfwS2vXv1sG69QT2XE6HzSkXY8ue",
  "key36": "2NLhw4i6gz5WREswpDJVdqwn5iywaE61CfTwavCX3riTM9n8eoYMBvrwv1iP3w9ucjj77wiw6nniQJdwj38n8KmJ",
  "key37": "3Yd4xx3RzXkj5mvBNg543L9Bg8yMoZDP9bFG7M36YZmApmsZedkjogYAxhWhJXxZzVx26okCNmqM6dGpQge95FcE",
  "key38": "Wz45cX74GPtAJMa4WRVzmYpfnppy9u6MaR4ZnYsXsXc9QXJw1RTJe5APDMMkXrG8hxCexEoWqJLTT5VkZu1zCw6",
  "key39": "3PQA4rnVhLmchCnJQyVJrRe2PFCv2vkwWzwuH2CFurrG7xMdxibUuFTDFwXtybiCyzPZZwKn3iVDoRHZWA8Av9qm",
  "key40": "5bzPsSV7kKQvCJ1itqXYYnf9fSoK7kmVF2teDQiVu5sGYUiiKu5M1v27brrwNy74CTiQPFutj86vHhnWydwHcFDb",
  "key41": "2AHTcd5eiJDUGSkTJhjhUWmk4tUKNr4fXXWVRqnxVBpeeRhe2P9XNr5zbkTK84h1xG5HsoKT6nEzixoTG1f35rYY",
  "key42": "5rMHcs1JniefwiTEenaBGGhadoaDKPatkyB46aS7NGa1JnMrT3muu79UoZf1J3KdmCh5LEwumfuENnHGyq8Wgyvp",
  "key43": "5AXfNsPqQvQ57i1SBmCPRpwyVaQaFPiWTbsQdARbiVsAndefH6SuSWYJmd4rYwu8HhXZBQZdr4DnoeDuMvi2D5HY",
  "key44": "4H8NYrnULvxdE2U5mVfzP6M8WMm7Fdh1CfjiAA5YLt1Hq6rLweJ6rexXgCQssw1N1ExdgyKSoXtCr86EePPVGJ4A",
  "key45": "47JVuZ5MATrfGePmTaiVZfg6sVtbX9zo1YpRtbAH7s6VL9gwdWMj5zGJ9a5PrcurFzX1vD8JgGCTG1Fj2sdcSs7z",
  "key46": "3PZKF9NbJ2SRzzLz93SaktVLz9dpKTPrWFUbtS2Cj8e3qmgGPrqvcZfDse5vwWJxrnomfajD8oUNL8rAnXCL8cLp"
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
