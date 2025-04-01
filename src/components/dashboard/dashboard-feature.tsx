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
    "1JdirQnMKg6s92XsUjwNyHSDUtumxwoX4377k3mLyKDRHTKfLgYNertkpKGdFHMF65TzP5da2LFq3sRDTWCanBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ldq9h6DUDwzdU8vkHdqq2qdBXxW6p26NPtjunQ7ZHybvAiu3Vutpfhd2HQBJkeM4vjJa4snq8SgeJpZ4uBZdjh8",
  "key1": "CS1P6ChQeGjgdTnEZ8fziPkL4og5WE54LkcepzTAHfqgCauXLuTN9yAGj8CtUQr9Cq8VxrqZjjuhqtiPPChhBio",
  "key2": "4zNZiWQnNTCYhfq5ZHk3mJW14wCMY478rUHd4aKeX5DHN7Q88zT6idyjSQikW2k7T65hCRHoH4XeYGtRMrHiHZni",
  "key3": "5sxoehQNXB6tegevQTd4CuWhziGsPZ85tELwpgSy2V33ZY8MGFqMi5b9QCiw18oAitxbGBo1Kx3xHx9PM33VyiMz",
  "key4": "2fAmgEDcTSRBTLib4UAfdxbt2Zdj9Gbtiw7VTQnhuSSrWhG6M79i9NC2SpQoSGCVgPbkhtCsX7XNZagvwcDTR59q",
  "key5": "5j3B7Z87t8zebP4jzHUe97mZ4dN7TWKcNq6GLVcUq63yorNFzMndGG57M8XKjt4bAbuPMfAKVUuGi5oide77XMAQ",
  "key6": "26McQCHrPfdLiGrCC3mkNuchftFPwZQSRAErcCJkpQjLr6PJna6GXnrsrW7fncarDmWJ5nHVd2qDSLt1kDtLWaBR",
  "key7": "9hzm4gWa3LWLadiBz9FpsthSpf4JEC5F2H5eBcGW1C36tXatEFr3cpZuFi9dP4KXWjeJwEVyQF68orH3198jSJ5",
  "key8": "9PTueXDx5U4271a4H8q2uLp1iz95HkP7PNqYb7rXy78U7A8RV1PLoXffypzATovyozinx6We3SN62oRuuaMnF2K",
  "key9": "5ocZ35ggm79DkyYnHSs1A7VvroTCjeBGTwJRsWnTLS7UxoqUV1SwsRNnACzX8Swu5FBDwfVHaY32FGeKqTMUitWr",
  "key10": "5hd7abJugiDEvan5MjA1Mvxu4ff1pm5ydRykn1zVy1DVe37asiFsZwYiWX12uHYEkP7yRsCECDgGG1AsLq11QbHg",
  "key11": "q4g3yZgwGmCXeb3d7E5dAuLPT5zpcZLqyLkxQD6MjFiyHP75rZjKSorgrhUL2wku6y6Pmsy5E6uD6HJjc3fxt9x",
  "key12": "3vdJHRnevFfRswxxbgyy9CVve7qBbntSNm2paw3hMCXEweGoEpE3zXGVftTLYuEQSVqCBJ4W5aNcHR7APMAc5D8M",
  "key13": "ja3X6CwtZoN2kT93i9iKBXQisrRwMmpt6vEMz9WiT6G3moKcdzMPTmgKTzWqXskc527jME3CCFStiNDCvMMpzEy",
  "key14": "5wMWHVmXdkR9z6nPqS7wMhaYktWuWVDbLqwu1r4EFZNfQyhM2mb5mV1eho6iaE3zz2MVFe5aX3RaskgJQmqLcBxR",
  "key15": "2jw76wvY9ZBPDi2Gq5SZpdRRDyzYzd6hpACgcTdcEmrmeUWX1MTRZRFuZaYnJfgwee868wCU2G7eQerFuX39vfwE",
  "key16": "4dEQLg7ZhzrrfMMnozNoJup8ZH6NjdYff9x1RYVdttXfc2VNFdbFNG6MUUJzQ6rfL41jTJqiC92CoebZi383ry7Y",
  "key17": "3j2Bf4ASJZqbbjNq6dQWH8HQfhoazpmDz5w2xLaxNSnUquPo5woU6WC5SBmgc2wFnXuxCqHpDBGY3JjoGLs1sBUQ",
  "key18": "4vdkmW7AF1YbKyKARzwPn9VuEszANjPYYXeY5shp9sxW6WMK3y41wLdFpjG2cjg4L3wz43DsvR3EsDyDPDJedHMN",
  "key19": "ZGpPR6GJ8ZxU7BAphLwz7jNtDCQddyEGx92L8T3MVpe62ntkPE4gDMhDt44tf8ekR865jE6fVapyScwU76gfLrc",
  "key20": "5oGBRHSfbpEC87VtFC5e4EHzahQkQzUgPV8nJW8LyygaKxQ3A5sXddmxLM3YV2aqUYgAkdipDy8ZrcFNQprp4yeU",
  "key21": "5jLFCCKqEJG4UMAnjj9xx3fauFSMesx3zatukNpsBbg3ZbrJXHgZY1HSwqQsvqWjKQ9RNcAnJ9XerQJzsDE4mnzB",
  "key22": "i98SfFZdJNAgBWJdtrpYA1KUy8t9owmCLAyUus34yvpxUxt1SYwMEjKdYxvDRM3e6xPMqdMFLMSUU8HZK5aUyis",
  "key23": "E4npkctAxV5cfxbKAmqYB8xEjZnvuPpzr23FUrMoeaY8qGTweruwd54G1EzyL4LjN5rTUnvjsSRQromN14dMfAy",
  "key24": "5PHfpfmVSL81L8oig869E8AXueVUALBBgmhLp6YZabHKfEZuU4Yz8M3QmdBJydRDnT6w1ZxqRjEjSwGHW4fR7mhy",
  "key25": "d2bzP2YX46sWA6nBc6AreYA8JuNAPQ1nXLHEb1KSwwjLgVjbR1hJhwYT73h7cEZYUH9NT5MG2gPHow7WtZYQP1n",
  "key26": "42LoKgnLaK727e4k7U5KKLm8kqpQzb5APgBA75frFUwYXPYQpXNSgph9Cg68JwHcnh8Wnqsy6hkWkvGSqYN3RrRj",
  "key27": "4FpCBAJtjwwTLBHHnrtZ97s4JdXtdQB2PiPNxaNk4pbuZx9TkFSJDopE1cZep6TuF6FJXD4FF8LNuFE1hHFAXAUN",
  "key28": "4YYiVhE9Uxz6HMZfFVPUjYdU14Zb8nDUTFyRYzeLRwAA5X2PbDHnvDK3iXCazQkskYX1rwKbmP46L9s3WZeZEp2H",
  "key29": "5R1tXPk6wM5aS1qYSMv4Sv3itHSUQfD1Kx22E8BrY6EQDkrs5o4Qy4tfT7Qsqpv3rknNkssJTR3Xf18fUvpMwseT",
  "key30": "o1niyEmcDZB4rjZto8mLsc8W2kR5HiCyi8mpt3HPnKDqq9EF1NzHrmZSfaDywK6MVyVHGVabJWbBqQJ8dQ3kjaK",
  "key31": "2Pqz9TczrKaDqayFkcmJTKtuN224o7qHpM5BWtLj9MH2Lo82UBihQmhZpEgjUD2MEMGbFQQf1rCsYmkPxqdRG9Uh",
  "key32": "3ngmm6ky84ARFZ7t1Hmf1thpjLBWwP7ydb7whZ9UoLoJPpEsxPfW1Qej3smffUCxwN6LQ5BuNYUriETbEiZwNgu5",
  "key33": "DLHbeK5v2ZFuTtLBj8XeYacKLqSaMRiy3cyfDxW87KSaEvhCszNDoD2RC3n2c4qoLHGE3ijrtgBAWDRxp4WPAW2",
  "key34": "4yDq6d49R6KUZfMZQUB6X3JTroFqgyTFY5UCLNsM1LoCyvue5VUS1E8ugrQC2GDCa3jdMRscQtjdTzbpGJppidGc",
  "key35": "5wkZvvafvWYT7RrGqz1fJGs7yz8cKMeKxSc2kpyC6ftyGNhKwtKs3NPbghd5ZrQhn6UuKs91kiaWjkvtfmhSgbpF",
  "key36": "54cWAz5Ck5c5mUJ239cGk7TsSXxYtmpAhm6nW4iDGM5XdjxHw7Nxd9P6ibozS3n2YYnQHFEjDD4gTEsrEak1wSFB",
  "key37": "2SHnov6qQonbAo47PQfDiMyFEvEUjRu6bsoniF83jhJRrSrr6rg76xJoZs33Ht5kfCgCCap9kp1RUW8jES6hFzQr",
  "key38": "2QjrhH1dQJNfBMrdw5NUqtyhSoXJNhEEEg8MNCDvNJXgQrbBFvBa9PtSiY9iU31jhfNqtFGokUrFBcFG9RHFRfpC",
  "key39": "66LAVgyFFg24wCefa7VNbC45W6CTSUwwAhG2rbSH1cmCSddjwKAxsU445ZECgaFpnKSRbJmeDcnzHKfFt86cB54p",
  "key40": "jtxAZFWSXc5fjhCh7EUMYVDaBMbZQuhQjSDuzSBVcfJRLCSUern6qeaknvk3usGy3TJMwe7obcXmSW6zkxaoDYq",
  "key41": "3DMABcYRG9h6Gyph5CKANY1QJarJNZDnVV1Zno6HJ5HY1jzXcHdZF7n5wK11aMrMvyYssUDCTBjZzCGppVKJswMA",
  "key42": "u9C6L2hJENKtNbMWVoyk4rZkKrCjxn8kJTBs12GnJU4VAUWyWEVwGyFzVFkH7Mu8LuRpY4GU4ATtZecQFLPmzhg"
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
