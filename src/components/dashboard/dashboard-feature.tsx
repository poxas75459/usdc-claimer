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
    "4rKftz8uweFC48wB17Jepv8FZ9auiykB7onekVfYA7EvRUW5JFx7Nm56KVhzorYzjnN1deh7EFR98zkgGGUfXGJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bApDQX1sxq16j4uQK4BGtnnNwQvJHGVRtW25A23GeKQUTk5sUW7jGcwK9ydJ6TXFK9NyQECqMnx3UaRUQhhH1ZW",
  "key1": "2tjkdr8UXSfLu44Hd3HDhocm3pAZUVPKthXZjpsRn7N3jLum9ezJCMAxHaDMj2XQ26eFz788BSGkEkNdyTAkueRw",
  "key2": "57Z6hWEDmtATRyK3HvTUXu2Vs48D1jfdahPSGCaGqSFe79akJpeHCTNJYMzYqkw6pesV5qwVPa23amMDuu7ovq7N",
  "key3": "2YF9r2B7bAWMZbekb6aPTfsgk7qkhrKcNKwB1UD4ktEZySYRyg5BLQ2eqdf1fNbBo3w9Yd67CiCoyBYjzNJL3nWS",
  "key4": "4doxXNhvR2idfa1Sqh79xEvRAZcUvw6jbkYXn3EfVRj6pR8fZs3jdQ4LGJBEWdEFpRK1Bxg7YKNgjuWmujGZz17L",
  "key5": "ZYP1YCECuu2jNn1sDSY4JY2ZMjAzPxBRQmw5hTkTK4w6SqNNhNrQDRNN15NJuqWjrhjt6J7JEuFyKwyNnu7JdoL",
  "key6": "5hbPe4KZjKSCVoYffafpXY8SckbsKC8Ykzf3L8Sgq1g7AG58zcRHJhFm34vHpt3dEJ74kLJYKB1otG2BmmHSAXK5",
  "key7": "25JtntNVt73qzSRCP1wv1Y2Q2AgQDjXugUWb3DWmqkcvZ7E71igVeqkhrYFGuXiwVoSFWqyNtoq9RepvDHMsJeVV",
  "key8": "4j3uBinJi8Sdoh2M6kHjVWCKiJ6X7PbBGoq5Eo16KfoL6P9gVp2cdEL525oDQS17tz5AKMc2YkgjB3iCUZ4hr7qR",
  "key9": "5hzpXZZizSfpu1uGVCEwBLothKZ15nimmbi94phuNDZ1oqwYy3cKfEDyEfXsZRorR8d6mMm3kanhRwMtA3cZVcJV",
  "key10": "2fbmersgESfxHCEYLKAcwcUmCxGnZRrixstzYsELMiiLDoEU26k47cSNdBDfWKUDqvqcpGejvjCoKukJpMi5uS5L",
  "key11": "K937waTS7CqL2PUDnLWYTCAjheDVmijrFa6o8nHSNZWe5kBm6U37Nmb69UhFCinhHnZysoRZpWseqjPdsLL2z1j",
  "key12": "5fXNiktBy6x1EHxnr847oSSjrDZayy19LhENNZHWu8V7dZca8BXw5WVqWXigDtLPgBM5u2hAAy4vo5zzsH5HV26q",
  "key13": "3BN9fMjP5kNAT9KPqb2YFRT8n2kL3oebqA7jj8DJV9x5Y96P3mAG9fhDULvjy5ijW6y2Dt7U4TxyiYrRZVY7ZHnM",
  "key14": "2bUxVgtynH6spgFXWLTmUn4MCFQZv7TLLjemZ8UEziMgXFJqgZwtwqo6tPc2K5KUaMajedVK3j4PtTWGC2hsCg9d",
  "key15": "LiPE4EQGcwmoJyypis5m8npfHY4X5Sjzb61PaFWRZnkXHzpywcs6Ht3wFHF9ycAMD78waf3FzNasWQqweLmJf2B",
  "key16": "PHEZKeWJingUbnTTGj16Rt2aJyQAjjPQUTHHDhYt4VxXh4YxGmZmVvRui26dGAZiHtkkKLAUmWgMHs56pjq1R7L",
  "key17": "3brFAZkPZ6mcWHiQKjig2QT7jGHu53Kp3L9scQwu4Az55dNZ7knS13WA42SEZoiLeRo7uYsc6sLAFb1YSPt6o9Hm",
  "key18": "3vRjeb1Mto42fTGz6eG2KH2Kg69hhc4YjysgEWRsi7pN4rQFVTRQiUSyY7LtKMqgSLTNyiBGzDELLNkm6HE3udBC",
  "key19": "Kkwr245bFRhaspBbBEkFjp8fVq8QEVdaobQJPiCuPAsUZE1dU5FtVDxmeLeSCiZia19rPRUbF5psvyau7d6nuWa",
  "key20": "3Sur3nUKKQ5Zgvp9YvofYm3mA63BR3g3BKRzbt6SBjrkWPyHFqk5UFFvEG1G8H71FoQTXj84LJqvYoucbAfn5H21",
  "key21": "2Tede8HJAb93SLLfDcxMgYL1tY8wf3SQe26bM8jdpSAdfKrVdG1MKuaaTqeNrmX5YhFAXXAGatceBx9u52Dncmhr",
  "key22": "5Tqzaxg45t4UqLxezjmdzUmz4QfKSRMZwoMZR1Eqh2dhzE3VdRvhBEYqqE8LVcsZh18YhZq5yiJmGBWNyZQZTcKe",
  "key23": "3ZVkVcQ9Z56iSAS4P5KoFVUx513UbejNDbBaD4bbH7fbptFpjRuaA8xnnGogFLceoa9EwLSDnyYGmhrU42EH9pVE",
  "key24": "4iSy3C2wkiptanYwYcHewqmi3n6Arda2gavUCzV61wfu1dokb6ib7VvBFg6MmgpXuQD5pPgjhjKa2WszEu56wFH4",
  "key25": "2AD6zgQ3Kr3exPdtQzbTBLYxqdNDswCowaf7Zugnq2ywqDPeHpAA2KnBxX4VAFxcnuk6vmL66bzhAZU9dXfrHrJA",
  "key26": "JUno4hGUp6UrHqueUt2brgPPmhxhrbJhZ2hdBiGLAhnPf4bSYXbWhtUK4QPohW2pvUfJZiq1g5siMaic4FbqBFj",
  "key27": "3u9uMDu7m6qndP8nj7cdmrvs4JHkNSjxZ2Upnj4nGu5pS1XrhX4n5yEX7QBGqg4FBdvf3jGc1EkqWhBD1StCwBio",
  "key28": "CvDcYwPCMR6HVkxtjJ7T6TTJ61jAQAEuC2NYPECc5aTD2wN6yyTDehPecUspmLrgRjES8XnjSZE68FDWjX4E2WG",
  "key29": "2L3zFEaSck2NuEkNejVsuRujT9VVDLAfkAdcxJGLi8EeD38ms3oFbixKZZ94bXzNCXLU5gMJi6DKM6z4h2osPHVK",
  "key30": "5aHK2HUXfcqdjD9jYWTXZYM47gkSmX7sR1bsGT18Lx2rcb2CbHXHU5kkhuyTAz8EArTAH61xtww1GCxtGiv11cPe",
  "key31": "6TwaBkdxTEGgsyuG3CfEJkqSF5nuscPHuFVPYA1UhkeUiR9i7LHdpeJiTmV3AXEeRuoNXZF6qxtS2uuuqmEYSMi",
  "key32": "4rH9eTM3PHGHibYbFjSdbJcmCz8FMLWry85j4PYzNaGRkwC4jC9CgZcDkPqLzxU5kCNiaFj6hDw5bTMtdzf6b51f",
  "key33": "5c1GM5C4vA6dzRGDnSkS89J7PMqvzm7pr2cusndrjZdcYAnMwKd34D4evGT4WZ1b5PNSe6GWKHLCqX16sQnB97FH",
  "key34": "33iSsvgg5LihL2RBErHDndDeBjQ8uqMGwnrNbDdczAUUaJ5mpQ1g2AKMmpDKeo9RQufYrKgpv3wKLznWKMa4jqZC",
  "key35": "3zrgmU9MahadqSPCdkWD1xAJSchmeWNSHHcDwbSDqFeAnyh9X63ghRdyUWa5n2t5xQ89P3qtZFxbNXHm4bSeQZ24",
  "key36": "HoKja59nf823oC9EWtsY9DXK9x1GTcQSigQmDjvHLXxYeuQmu6pUBerXiJgKK358xV84d2Ev1r6tHNzZ4iowdaX",
  "key37": "2Tfe7G1VfJG8gsw1bouC8ZU5icaZS5mrjPqwzttQwRiCyoQBzaXKKxvHs67WQeUdfzMh3MfEs5437hjSPBbjHgae",
  "key38": "33aSxUNsKWYG46hbhBxhUZWLYWZa6jWs6qFPJbPYqDnK3NGKTthfhBLGfLAyLYz2Xgyb6yiDiVPwKC4aPvRzYow3",
  "key39": "46bGKmR3kuC1145NefNswojEqbeTcU3dj9wHyCdAHSPBVvg9bkyK6CSR1axToxiJF1EKv2F5zaVdm8bsAib9VLfn",
  "key40": "3QNkXDqWNrzs6XsSCMghfPDsbEGFjiU5m5Wz79TSMT1nGezAHyxMt7LU98VupD7w57dFmiooMC85FRmQDfqZc5KV",
  "key41": "2m1edR5TSWiKvz1WiC1MLdFGNmhA4WjKi1Zbnu7pB3nRsdvDTDwkYzM8H7CQxVYrRDv67xFZtmK8Zifi1ptF9toj",
  "key42": "5kDVp9f589FFTp1s7DVhDhwYZuEemMQ9TeVnkTsBEnBRsmRKo1DKRzsqjjEmeaDY35YBZpdSYTvCi2Hgd5Z8SHmn",
  "key43": "3xuuENWHexjqXs3o8VjBxXSyVwqh38njnN98TptyVsiHeks5XjD7MB8JPH4W6jUWkZGGpTvMWrN2atxEHM8Te4Wi"
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
