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
    "3WgmCbxHpW4bAJYcnAtnqY3gWnaNwQhT3HJNjpGFbL5ABb99ScAvQ9ZWqwo2AQ3nNEPDU1uNh6LYn6bTBjtV6veA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24qyyHP3bDK6HZvQHqM8aTWTnDH2jhadjWDeNd5q234MQK5aysW2BW1uoj2Xjbxz43VyUZXuxMCxoKznR7gdMvVC",
  "key1": "sqKgtzNFFxzUYAqGfR5Urs55iwFHpgGgAA4Q1y7qjD3UospzsnTKzWmpAU2nxMdXBpSDSa4RGTYznRR6Q9VZHms",
  "key2": "3kfL5GSPxQUT2DJTVqSqrGYMu29vB9Sy4sTWVWxJ8yN5pNeeHwd4PVorBtZeAxE89TUYb6yT7zjquU6ScBBz2zNH",
  "key3": "rVK6B9QJEVqRxbAyYFYY36eZ3pspLhvFyo78ukkGZwmYBbMnM22EjwRKF8yNp9Ld8ovj2DHzGxCjd4Wm7yP42Xs",
  "key4": "4yKozRRGr6tEunYckg5veo4jxh6dmq8eEyZyURy5tkri1WZy6hm56VLYLhgYbwN8nHhSCvCzpWQhiLjvCit3x46y",
  "key5": "5NARgAHigxyQ2ijdDXzZtemAm5zRTRadnfmfy8YTRPUxuegDrRjcJ92isxSgkXwk1PaqeG1sKiYtQp3BcMM9kGJh",
  "key6": "29MNp3rChAHH38MBohojLjDfb6MTf3ZHhAtC53kfMv8cb5UdMCvRXLPWsQXrT6hhsEJobfFUPtoFL8CXJPe2mRN1",
  "key7": "5phyfGjnJaMNvM9HYdpBtce623GMuE3KFtdqnNuXTWDfBJgRkSEQahMcrwkZbecPEVAgZYqB3x5rYTkDfx6vhhpC",
  "key8": "47A5h1dbRhdy2rA8My5S1pjspoV9HHHKPKyiiyiFdE5sKCN7j4KMVNP6QbZsoV8F9w8sPi2yw1dpWMHUqY6StqXN",
  "key9": "4pLZQS8fptvcTAqs4TBmptpwJ9gef4bVCCKCq8r8zYmLd9cBHsb2DqUTVQAYmQHx1Vvg2BTKqGesvk8vgoacqmpW",
  "key10": "7pofBLz3vH2vfPWbN1XGuMoDBr2obznAkthKydpcKdLbuDy4Cny8LZmAo7jbh5mYXaT9kC6XkUSEMLdp1NZgxfe",
  "key11": "USqgUF4FDiDHwCaWGkfxM12GUc4fQRTDsQMddeK89rWAutqADUDcpU5WYVpueuy177kj3gUCS23SaHWEy5x1ZHf",
  "key12": "c12zQjCPksiGhnTvjc6ohtYmipBUKPmvMQFmdnhLmYY7nbvDpXnbXi5424sczsfYTzjzGH9Lgqwr69DkyPNfPSK",
  "key13": "56monatCPm8cHXxzrmdaEb4qMcG94qZbVuULanpWWnusBWntEvmc9P9sGJKiqFn1aFN5F2UCdgxZDgpaQfVg8JnU",
  "key14": "2r8herte1nXjXkhEqiGmQkQ7qok87pnimVcc2FbSdAqbS7tYkdzZwB3M6CXw7ECenC7LqMd5NGiRWLXaYybcxNdh",
  "key15": "5S7XYs13khTmdzaxgwE7aLfhMetDkUHWEM5h2GDNfRqZRnGWZWYXdrfUsTp2ejVafWdeQuxvDBY3kvZJo1mrSx91",
  "key16": "7yikiqSQX7FADeLzczYEYynni5BmsV57thcyvh2iBwm7sZrVQXy38Q4CD63Vr4UJ7fVqBWFVSjDeTtkHCz8F6FU",
  "key17": "cLcc5fSUoAPveWr9LJfT8WkTZ4zSJUkeE84DAxnor4fqMMGM1oS8JfWETtXejWrJKjBzZ6eVZcv64ZPDtJAXNxd",
  "key18": "4czDxKeMcps78cyobAEqvqZecJy1VvRXzs4eEm7Q6hFoYykFuoD2YQHEvaC6VPzXThTJrbixNvZSzUXEuepHjT4j",
  "key19": "4gWroTzh2haJSL6owBoccyoRw2JTNMZXPpmHNL5qsq33ANHWKyYpt5wNASsQxMnmzRJjijNGX69VpZjUbnWPWC1E",
  "key20": "3q1kq3hqvYvxc9Q9Mr1vCwFVBJDcCtdcj9RSRgR1qvWpB1fyBUjPZ4QyAjVemwkh39s1hQsWXfF8g8ukTSHWk1R1",
  "key21": "3HqQ5JDAjSr7cMBKeoMBhwexMeQubyj4jZHUVvAYHqehSHnueRWd6yqDGjDA4voRJXs63KKcn86eseFyarCPVVvL",
  "key22": "3MYY2RPg1LZ7R2m8z9WJAkmfKmSWdbeTKSsbJCqfhLDDn4dp8z11GxzcZwQktRqQ8UdxaiLUx24U3Ki4qp2nPYNr",
  "key23": "2PcFWZBA662tbutBHCEqNaq5VRuo6mpdEEGfs9cHw4acRgfAK2vvWZ9EVD5nXe3Jk2mDy5h54CDWhKaSdpEiuPfN",
  "key24": "5bxbwioAeeWCw9AYVFP8MET37s7v6rumuqXRF8ioAet7pqWnMTYy9QS8P2mnEsBr7gshyk2VLrxXXzNKEmj5neG4",
  "key25": "3UbwNd2Xu6gh9ZzNsm9HjjAmFrGwwRDBrzUAHrXRpR2EDn73Gi2JxoVTKUWYs9kqJwDwEM73QwJNMzTh5RgKUAUE",
  "key26": "2H5vTYDJ1PdNaybHMXKrFk3x185PbiAdaW5XD31HyheWWdrCrG9ocdDzn4E64DXdvQFMEwVyXsrzDABaviDnEn8j",
  "key27": "tv1KrLTLBAbrZdxENfSUxnrutPTjndGBNvSeBicbm3VDXWe4cfyG3uMPfiMXuy7f4ZNxzEcjg4TV8x7FoxyD1uB",
  "key28": "4agxBzAbZwHL3rNPR39Tkz7BomeUhRzhqhgvePm2DL69PXvvbHTmo6a1QAf9ywdyPs7KfGVDWsHYqqLtAiq9EUfx",
  "key29": "2s4ey3SyFNZrQz4XM1PMsQchktcSVeu8XsT1in6HG9s2rQDD7uSjko9sEQS2jLt91PTTeamyCj18FmQD1JQNosVV",
  "key30": "4A77owM2JB2zRQhfBoGFAFGERmL5H9Hsrhxc4NuDEMJehQ8zvMQNSMyLqULVTQDcZvGsQyDwRCLuHgEJ3H686XpH",
  "key31": "3DdwSJogpQCoB2VfTNpy9fBbNTw3q9LewBk8tXEpfrxhTvnCUkxhJeo387BjCFTgHekMbD3m6r2k8S3yH1X5FWKY",
  "key32": "449BZqHLk7VCn8BhboQAwcsG3eK8zn8waZ9AYipKMytqPQVAkYmWFmjMH14VXQBVqVXjizz2xugz8zNxinSy2dJ9",
  "key33": "rXhgURv9937nPN2gjUy4ogfYKHFrYYzmmmiJLtaYfjNDQcKo23K2wzp3ru6o3jUtoV4PhGr25AZhNXaACZSRrtz",
  "key34": "59kYSPprUiRR7mpzF75UQ3vrZmNqc5GGgpfhUNjUVyGZ1oTSdqkYpoxzp6EGN8PknjyAVAtPKBZxyn77W7VLLbJd",
  "key35": "3PUgnagkuHeHPCKDMPwurGrqPDvFEiLW55K5wiWPKqnfvNgQRVS7J3uDHZqMwS8zsre2hNXP2jvYUYPY6Kd19sTV",
  "key36": "4dvXNCn856RHTEyqNxzUx757FemQdTBVRDtjmCe5GALAcTwCXCCJQLf8RrkoYCLkHrRNpPmwgG3HZmwJhuRiSxcJ",
  "key37": "587SJtuocWbFTov9trWy73NuJzQPpnRtpy5QMvwjV8e45vFj2pgUFjpF877YrRGUiFHk5ZYexv5Yf6yAX2DC5sWW",
  "key38": "P88vgseWk7EZ2UjaU7M8sZyCZUxreeXEqzv7iTzEVhq2ZUP3kpbBRh1EvkVZ9vTEKtam9hvAeY41rwSpR1pp5gq",
  "key39": "3zxasvfsC9mA2ghVdDsTayMtXovcC2yH663MycuT6HTKUfjK6z8crK7ohfCKucQRXDixZ2bjrASX8ApktPKMjros",
  "key40": "bfVjULetytWhiDQTova3nVzR8LmpVJTnyqQnBZZ9fy59fVQUdoHfT7WQjv1ZeVwe4Ye6NiSELqm1onh7U6zXMPq",
  "key41": "5nV4VFGfbDKJEm416qX7LLMro3PwegCd3v5WKLcXPU6UAE92k7fH5UHW3YZKK9oe2Yf3xtHUcPnC3Xhar6vM6TAy",
  "key42": "3Ci4aBcdYk5DEY5hqfEDwgzZson13MdFyuC9DAAZ3ijSJGUokUB6t5m9GDvt5SuBEoBc6ZAy5wAyerZtid8n8cWd",
  "key43": "5M5grdQJCf3oB84CMZx6Ldvcd9fZobVVTyXLLd3QfQ5qKKYYyCtvfHSsQhDXxyX84pZmmVfPrcfzAiV1zBiuBuWW",
  "key44": "55tga9SQYm31T84HLDX3kEZHGW1a7APJwzCE5ymL6ZBnDpdATEL9TNSUYWhoEj5wiDbTZbSXP5BYMcgt1KzKfwtj",
  "key45": "2yrzU58xndNT9m9BmRmxtn1aFK8RPBJCAaTSNZtPZfVuiaTKDbDF419mNkC2bWBsL5opPShFnKEU7LewQNjNEB1t",
  "key46": "24cYqEDM457cGc2oAGZizpWYN7MwpGXRH5uLDdrF8rTd3jMtJmo1LQENDBvB7ErhjQ8mwt8CD7AuE9ArmDs3yrSG",
  "key47": "5VuNoNW634EE8uWFUPd6cc5aGe9HtNRh8h1BABwfW7rHfC5xf8MFDJ9wjEuoKpucSwnNzPC16ZJJZneXcbS7V77S",
  "key48": "9s4dafARYdVismRTEGoeurqCkg3cpnHwJn7stgPQP9P2KrpMj167HQg5ZPwAi2SXtj164gx1yMMzoWSrZYu51N8",
  "key49": "5i53Ykv7CECDcJTakWBKFgxWAz5FN1LG8LAxK9YX5Saa1MHywteUVXv7HbRpxqb85CvuQUEijMn4auaabFGohcKX"
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
