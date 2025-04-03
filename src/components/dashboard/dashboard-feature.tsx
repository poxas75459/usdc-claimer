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
    "4P9sPYEwvPimVcimeiY8uBxvFEtP6ZcK5UUbmbzqmcbSGzPLUH4XVA6qr5S8UpkEE3NATjLtzKrmRpaHEM6fvCWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mktgvpUSHfHhVMDjyDCcJktm3rVe5YLHT1KoZHn6Tsb3TX2o2d9dCL53Dz9TEhATfvbkMPhrVupUTMMByhLDUJg",
  "key1": "5nFXruqqRoUfA5UFqwDtLTgD2wwm64bFLJ5WWcoNLzSKq5DV5w7PR2QYT6adYj9sHn3HaxBws4bDPNuPu6HQmtEB",
  "key2": "dz23XCS63ZE1SU6yuvsWSfv976FsPcJyybYMv4bpqKDjVB8J3UdiUMoTZY86rFUhi7nyGUvfWETSEGr9ZPaatMb",
  "key3": "3XFQpxvf1ZtvJu5Z8HLJQZ8yazjMVdsMMjwdUHT9XMx53Bxhx7pV6LCExYRPj9ZtwUfqpUGgvLWfy1i6k7p99UNd",
  "key4": "5hewKjKUK6QGzZ6qtsBFsUiWkDPg4cgAghikfV4ANxvsL65vhwmYHFgAvzdmPpkhZ7k2BGVp5Aga9NTJSthugNdX",
  "key5": "57vtYi8XLk8tbZewRcit3Eh7SN7SveBACjnpWNQNgBh8WMtminNQqTTWm5hMRojnwPjx2gcDDvzLC257oQiyprRw",
  "key6": "3kYGRghhLBGzAPPUtLS7t3c3LCpiuD8FHcwipWJazfbSYJ49d7vJdatJaJAFEdaWzaPacnxqs4ge6Bp3HFoRhxhJ",
  "key7": "3FUGraJ6msEibDXqiPYjoRKLDXwFsZWwUavLUvqWmomx1gCgurRdTyanZk93CaDwuNw2JaK1hZ8YSJdvDuLp19qR",
  "key8": "5j6WdYoyb133dzY123uQXvjr7xjJutX95PgL56jCZX3GwgbpyWxYw6RBezsUPzTyYhhxt7kCHdQuPMnyYL96YGr",
  "key9": "37N3ni6UQ6rgVMxvWPNeboez57k9ZPQ3mtN2nTXSEzwPnJh7vbCuxkraSeSuxWtnuujb3DWXBvp8JfHtFd3WqnVb",
  "key10": "6YCBj552sZQTJHZXYuCtxT8Az4Eew4WWXZ7o6nKjaXCBFwgyDBzwEDZnw6Wm5SV7oGcHNkZqzyG4kMF4XojAwK4",
  "key11": "4ZtXUVbQWzfdiu3K4gNR3LVwpXxxMoJBAFroZrEAbMfQ1rWG9ADcE7DowAu9EAjGcdYgnZo4iWBT9skV7eoHH9dJ",
  "key12": "2UzRZqTMNs51nSKqbzELPV1kvkUyQBcLuF8kXwLeoHqMciKVxhRGUugYJ1KcXDgjZjVatjjf21jUDmSwvX9cAfmf",
  "key13": "24iubqdDTcuWbcH8KHwd1EsLedw3gPi9pRDRZ61ueCnJncVTPdydQVX8J5riFZfHr6z8Q4gfAySgXyV2UiRSkFRZ",
  "key14": "2qWKDCNY6ywS9Dfn88gHgUf9nq1MK1JRttyKek4tpf4z5pggifi1g3VV55c939mWYRHn8jKBwfe4h9JHb55U5Ymi",
  "key15": "qeb4dsChpArbvVtReZz4rLHgHepNwkUAvZr6LuHiKPa5Ji4WEgkdiXhmdcUwgf2usogs6iRFTpSXw76U6uhc5KD",
  "key16": "5ArvUqARR8Uj3uLstvHNMGFfFsMrwPsmyrcEJyFP8o47CHCarqQGkPCCzpPw1JUhjeiUgk1DXMUL4dV6wrvd5KrW",
  "key17": "5TEEmqqAdVQaA3t2PAu5FhNTCo9Rqhw8QYGXGpfivpg8B8dQ7G8xuqL59SNSivbomk5v2vqv8Vfxbt7GAFTZSoPv",
  "key18": "5vFMJbC8c4ovZvCcAWtuUtm8Kk31AaBMH6b8PpcyuH1HCG55LjHS7ygwgErYXUAjqdZXjpnaELqNvJTiyjjxZJRr",
  "key19": "4bQzpxeouu9JqiJEA7q8L6jz7pe331duNgcvfwqdBn6YdA7EMke2Cx6qohyGR9FDgC1BDtC4rZP8wypGfG1HwQQd",
  "key20": "3HqmF2FwPay8JrKcuAYTdgDZkHcvEWz2eAYhWPfN82uPaCXgrf8FQL3JSDVbsoYGhUmA9QLpyomx1nPLeeG5HYWD",
  "key21": "2fkffoP5ufqWsJobNZpUMeSAq3JWjVcqBAu6TJ4M4Afhf4nNHHiqTSYkBzE3jtyTzcMFwYXTaUuUBHchNxmgDuJn",
  "key22": "5mRmaVxdZ6qTypGQxxxDaGJMDdZXBxmDyZrihQS1CAVoEmpXhST4qBeEhpAZggYwyCac1h8MoqSaitmP199eSGSE",
  "key23": "2v5oWDp2Kv8x2h7jKrV4XCbixbihv64fKFMLF1RWyJEWGj1zYmrgDzuyuAjYwXdyBzvUpZPmH688Wh9reJJPYNQf",
  "key24": "4HxPmjvmxQgL4CymQcuoXqu2UMM4GRaKEGwfRnpvy9N5Vq7vqp9Ts3XC6PRwPd6cjzK5QXpXo82XsAKie9bP2Fh7",
  "key25": "4Zvz7mefpGdxXdHuoZ7p3QY8iVo8SkNJNk41e6ZtcZky19fk4GqoizJFX4HgpN7p62e1kxTHn8B1LGkUebkJ14HB",
  "key26": "2axMQQhmSgCYFZFEPswppv4N7vVBfscrfSFiKxk9A7bUXboysceZhtSGq13Eebdk7VknEg8kBrs5nnQhZdxq4ywK",
  "key27": "3sYo3d8ubHx9VjxUYKagmd8PXHbhjFdoc2Kv7pFjeTUd1vyVoqBXqrNWoM14FpubqyujRV82Xko3NFshUNpF8J8i",
  "key28": "4JapZzQVGYssYdirreDCDtk4AGNeT3vUJgLzqte7v9xccjZdaH5ZrHzsfEK6fwkxqA47hcDjfAoGMtYydroNEmSS",
  "key29": "jkrR9QRNnjVhTPzpfpzA9sQwvSFnBhJhUcj5u4gv3HsVZiU4ib5JSP34ZuuvSR63ar1ZDXSG3L2fQphDLvfH9P2",
  "key30": "5Sh1KUHBvGL6xeBd6cwRSSB1HTeVUm5SWP9cjHqXPLhT1ADmdYLfFaznrUwDDFgYv7EtuyNC169KD1a6JBa27zkj",
  "key31": "4hJ3HwDLovLADGgVcTHH2yEFQ8XJbNLQXdYH5E3bd7AeBbauq9W5Qt4b1SDLFjD1FYc6QEmYWZSWURREWfPB8RoY",
  "key32": "5W3w1W7M16atKeNyfmiLKMVaZgTiK8D45Rvmq2HGSXS76aR9x74PjQpotMzsAv4LhTB5AKHzcYA1JvKUdmJQUP9U",
  "key33": "64pChPnv1gSu8RFiYvXJNryHsdkmKeixcXYidBTANo2quZSNybHrQLQH3QTQoDwNtajweaxTmgJPgDuRT4mbwHRs",
  "key34": "5oLjmDUUi9X3DtJKgteQsewQuaoi9vc8pDfTXGTz3iqpvDrdF1qmbHo39pbhzL1ePpdewGU5mUqMKf5BypzVDpdM",
  "key35": "6cTD7Tqny3PU4RXhefLnEHxyXNFZWfWxzM8casYUnV3ATfy7SVY4UJ6Nw6HtxTaEeK7fwekTJGZJ144trnYLAmU",
  "key36": "31tE4AZCLYn4cd45C7VeMBPvcr2SJWyv6ymigeLAYJRX2eJBQAju72RRsrLbQmUsGYwK6UGg6ucxt1SrCfRQQCWK",
  "key37": "3sxKYcpFSJ5JtHfKBoF3NCCcYPxQmhuSi1LspEw1XP7zcBijxjmjxEGqzGEaeHSd1JBSBYdKw9zYhaAm1r3gVQQE",
  "key38": "3PJiC7NQmP9hQBPoRQJ8cAZbc9tFBfAQKP9yFLZvtmXSDj7gtWetQZNrkxq88bGF55DoS9QnhD9CyExDdMyMg86t",
  "key39": "59svh5nwSeX9igFq3EZdovRUg1WPBkXFTrtCfMFyonsJTRZ9DXLZmAqa4GU9tBLpKnpXbdxHemNvfePPv3QCgRLW",
  "key40": "5Rw7peLzmyWZsFstSUfe43eeRf9tsqLDCy86iaLQupYa2hSrpE9hrpLM58i4K3MP84HiQDXmqXNswiDUm5HvJZND",
  "key41": "iYGBSqTYENWZtBwBDCDgyc44GESsShhxmCvwoTXD1tNvLiYz8a1AhcfeQtj73MiRpEMwAiXLiHTrho28SffJZH2",
  "key42": "3okYWtgaUm4kicyGin57NLkzDdFYUTaN8iE6aF7dRqmrvLMTDjgsHW5Vdaj7XFhty6GJvg3N1hDsn7rbBwsFfTH9",
  "key43": "5RQGkSssVgMF4oM8uA6pgmVrhhxAh2gaEeREq7odpiuVGnmkickGssRJKxXemU1FzWHq2hdKcdTDnLjiKdy99i3J",
  "key44": "2pAGdzU2CiSU8z4P2dFoBcULi6ovNTMR8unLtTkoL1ZkeWw79oW4ozTjnAX4ojuaSsQiZkficeN8arJ3Cj7zLXp3",
  "key45": "23Lbouqr1Rt5qghASrdPwUbHnDYgGb9WGCJ51CYuyp2FpmauHdLenSJWSdcFk2QzCdgjnhEgs17dzqLsDRGRUSai",
  "key46": "vu7EYD81CRK8FE6og9eaW6DHYoDMCaFu6Cvcw9siGbuWVwuTiEsshEuKk8MjVJAA3u22FcBMzWT8R6Kh4Tm1CHp",
  "key47": "4VGEHLbDh1XWUt24Hh3bSqHNgQ9A3vLuL5cytmBN1NHw2NuStZndsQx8SbcruQreADayRZzpADQBLMbruc1xAmJc"
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
