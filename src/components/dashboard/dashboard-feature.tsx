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
    "2df2EdEBeXVGhNpp9LtbzTiPRATxMcZDfBhtPn79bK95V7UzRKsnY8udTceSNAVhhB3PaXccg5QSKViuTAFFnp1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qx4oNesVLdhUjyjWsH3Wz9ebGyvsavKyxVEgE8RE4An4fT1UB3iQU35RUrgQpvHtT2ureoSn8Lh8g34EiWeCWSd",
  "key1": "4jsfz2i9Fd85pFk4MyDFqf7qeBCrZYtqq3RDFhZ4oprT1mwoP8WFMiNESSEikrs3KpPwt27UKe6qiiPfi2pYw7h4",
  "key2": "64FF22pv59vYgQBjmYJNEadauG2BcndJFsrt8o2ubAkPgdndQGURNqYXX1bg9uKqMDZyK8ER5Cn1i3GaeQgxTGYi",
  "key3": "kq4Xm8wuz8fkVRmUs5AK8yEpZSrtGECFanJdagfFVUAxp6o4vk6AdawYd8ZazoyVeFMvYWAo1yQVZpqnhZ6zLqC",
  "key4": "3qzx4JRNk3BaAxjqrzpEatukRBDzGZ29f3qoc3az1x5kADE2S7zxfYzw8vXZR4va3Zb91VTh3fdbeg3533vSe3qo",
  "key5": "5aunqcfNtWBUKMQeimySVoDMMmYZm2d1gTzr3G5qH2T4B97ZTGaaxmL8EFBRNL7FvjQ54oNCmbfFtQbpSTnmwtBu",
  "key6": "4UQjM76WraNZWCfFk8UgwqcC5iAPxLqvMM7WbeXeFqNocwHT2xZiCZYxihCtWMia3szBF1NAdhHpeFkoXS9e5WAr",
  "key7": "nWQcYNRmUWj4727vgJDAdPZ45uEw7McCcJq4HNXGmK8aRvkvSkdGGXjY84ZboUscE57jdyhqEVnRLyxrsWMcxh8",
  "key8": "64CnYuiCYFS5RLgFhZm6wT2swBvVxwmo7p2BKTYzwXpSnhWHcrqzA54ac6ku3KKYNbNpbrScULYPEivky3rh8yPb",
  "key9": "5dYq4oi6rdyWDZNZZ9Qmg8TrJkdDCWFtCm1hKP8hqmYehB2taVDF4nDp4yCjeQ3RJKnBsUbJTKYBU8v7zaoL9ite",
  "key10": "2ryFsxUfmRdL4Q58LHVUj1f6VMgaY4BmxS426Fvnj6E2ZzT4DCmQtdNQqbU58VRhLRY8nRpeBeMmTeJKPdPb5czz",
  "key11": "61uqUgwKnHD2qLiqndz9gtYNaFBLCBqKV5QgCVrn2PDbQDeyq7bszhYGCx3hGkNKZR1dzvJrCtYRrsjncaURpwnw",
  "key12": "2gQf3cFCfhjWoBcNmBhfSmCpf9RmSCZoCSXWj7co89npdzCgVfyBTaKa3kdssgBQd4o9FYYjJtsH2PJDzLKbgJ7h",
  "key13": "4aeQqiutupcLwQ8oERJBha65ySGSgBm2WuAkoCzGRv55hha9mvyr3WGzEGbdP1ERPGwtmVqtAQ7Rj2DskwLVJhcv",
  "key14": "58pVU5eVnZ7NpHeSKvG3Yi26pj16ERkGfexVEpcrbhGUhM2gBeeepRKNHQick7cpoRd5yGsdVe4LvrjD7WzZKTJ9",
  "key15": "3yisu4He4PBAAD5KAUq7MN1ibiJQbPtG9SWY8StStA2skCh6eHYZc6TVViVJa49jHWPxjscNQWsrZUEteYjULQ5G",
  "key16": "5azajm96jWXENYv6h6d1JEAZiWTxfjKfghk2MQkyuLvqfsPE79HDRwMS2wX1X7qvsDACEHggtw3znEiuUWgYJxfG",
  "key17": "5yLtaQZcDpaYdz3y1aN6G8EqmLGYDqZ5nauUMf7DKeffUP6kYrePjyAht2rTGsP37knvUpHUrvqtLXoXJdPzfdLr",
  "key18": "41Bi6rzZQXKQ4Sfg32i27Ui4eYonxCEaKUcn5ZA6rCqJmbgmFPDFhJvSqbvWoeLmAq8N1QXjixWXWAC4s9uRRHBS",
  "key19": "4WHXxuD3mc1DsN7paUPa1iuyJNMRf7esAkSDVJMDszJNSqeSfURJ6cJHRRh2SFCXSuSnTmrBL5EHFmeCdcStTCBp",
  "key20": "4eDAWp9jgnVXUjquzzsWS3SHnY3h5Qxp3ccdrLCi2kV2ZHiKs56hvZh7N641FP7TAamASZFAVxbN184NvDqJkXxe",
  "key21": "5n3oH3fi2kYGNZqyUvpPU8WnSLtb1caqfY52T7HHF2bWzwBnpMhuXXMH7MjTorVkKpJxFjri1QFUThEnVotxbRUv",
  "key22": "5f9KQEe164cNPBcWbddqk6cjw5P59iRP2QMGboZNmERpvZzXmPC4XLkqo28xtTD5yjErQz7dHdAn7eEYek2We8rZ",
  "key23": "2uaqkyiW9FkybSCM7GmHgwCEo9H811EKb2Akp7pyPhNN6VxKaPFWiJuM78GhFqeHTUqYCkNnCbmSRu6KfBTyKazR",
  "key24": "YegJSrojPhRKqkLyTyNeCrwjQ9CRWvY5zKTWpZyM5TqydmDQ33riSaZsd2xBHwTxthVapLLmaTZM6Cn2UuypJz6",
  "key25": "5aTHGaKQt2SUYLQptQ5mHjFxf9pDMbNVjgrUTTyWgJA7RskBmCNDs7cQZoAUGvRaYpF3ZDUkAqadnG85t2C1nQJH",
  "key26": "fvjsokJHSti63FvFmeSWPeTeqXVg2Qsig67eph7fwoPZVcKWSsy2taV9Wy9Fp5eTUvCrFUFJUPE1rj5rJEWLrgK",
  "key27": "5tgtnnryHhHYjR6NjTHGGhbwxxNvujLHpNuaMLuAxqL2YZnxbaBQgENZLs9tqmcrcYjkGTEiMjNVuHR9e3rwjCVG",
  "key28": "3zSJ1YuBBopGLRXbPaEvDJiYNsW2EoX1WigAJDjuWQM3sJtmGahT3MqSVCFGATJb3VyWXrsunxNXFmwRWrDDHMzt",
  "key29": "pVSAH8U96hJzQcGmHhjGFuRZfZebqYsGFe7asnRkFgew8KQ7dZ38sALHQjdxVXYsUU4q8RzTCBn6HWe1oQoNoua",
  "key30": "hwV2mJXqf3r1XQ9zWPnHwyRJFpZatvaPVekGXo3SkP9yeZAyoKo1sSQWUaUMV8miMJCqPj3nURnxhyMKkV4EZjs",
  "key31": "65bkCxeBnK9LipnsnjE4WsXDZvbExStbyhRxGePATChXJuPKVGLGpVVMnd94eACSeQ7LAYgdUKUKujfp3u7jcUHG",
  "key32": "RgUxedXUXmAUjXHgnTHvFHM2BxBAwFfHWBZTtzpVunvgD9sbTRUaqJe6SJGhLgLNb2z68d1zug5s2ktJdo3HZJ7",
  "key33": "45kUt7xbHBoZHBjnVVs5WnHBqzqQ3Ps4FEncDdcTwy6PaKLWQLsNWz8nZCvmHQdAW965NtXRUSJtTu8fzpquGftz",
  "key34": "3REyBp75HvoHX1Siq6KAmHS3XJ6EURn3NZgga5NUGXfRNa2RWCSg2JNLoAFpMh8d6FbGzhGyQdToqA4LrqYNvq9u",
  "key35": "CB9SUb9ExSrDifNyhmjFj2iEbeqPcSLnqzU3XjrKteUWCaKb37xrEapRCfUSdvuHZk75g5jLmrugfvurV2MSN1G",
  "key36": "f6jNXpc4nEH2dgXgEez79i3aFcL4f8DZFtZnxShsPqLS3d1PG4QUgGVjRJfHUU7TfYDiGzwNdf3kTqAtntcPxe3",
  "key37": "5LyvB1eWPjFF1TxFWfd6SX1G2BYCn2aCqCvFoMC1UWXnm3ELdhVqpZv2EDv1nm2ZMct8CEoB8H75epj4i71xRhgN",
  "key38": "4ny5Af5eTnVMtcLmKCCwcKQXbw28v9fXiofSPeowf1ETmkJXDqNKAwki41DEmL8GPc4Xekn1mm4iGURgnEPcz5fX",
  "key39": "h6JHEBaffzip6v77wgULkzP4TbUBS5iBTeuxuNvr4QfSQQMS3m3wkwUwMqpHeNprg6nKvLAuBqp2iNXfVJkHo8A",
  "key40": "eHhLqo5wWjgqtRkNaVEJsj1xCrGSBKsFJTyByJAMQkoqFRVcjfH4MBcX4JqqxnUfmDVXMDmPAdENPyNjhNajg6V",
  "key41": "5HX8GLQZMwpQSzbjQJ75YKT34QK5fR7kru6Uugw3PcYkjAgQnSn5VYLzFKAgfHiTTsFZVevWG3RUo6q9wFdsdaxt",
  "key42": "39D4utdUKrngwGKD1mTmzsZNP6SZm943oFQ6bV2KyBS46rTanXCDxftL4hoWPJA1xGP97hNm85kDjxvDYecTjNAP",
  "key43": "4mXPNrRXSwJHoDzjKWQ4qFRdU3EJ8CmV3D8D7oc7Y7TuDYMHfboq2eshfWmKUE3EQoujQT1d5BWUrFbfHcEgiqiJ",
  "key44": "5ABBVr9d37VKcSxA4KzSb29MyMWtHu7Tn7Uih5D8zvRz6thqkEGEybek1Jq65L3A8mFK2ybQcT1VRtpFnuT4JM8a",
  "key45": "dJcgfmQ4V2y8L5ZtEhmuzuWswESAdTVqrgbEdAEH3nrJRp3TBBSKPJzuoN449SxEDLBn8qXPDtYubFu6NWpsmbd",
  "key46": "eeJR6rEbo5ykWauV9VFgmRqmqUePFcJ2Sf7PeVG6D76rUanjpNwWpKxzMgiiGTyXtPUwRYzrpic1DY7ccDuvvnD",
  "key47": "573B7mx8HNAPYzHaivPeYTZ8icCBNHa4Egch9xq91pcZRajFUHFh5ciJpZd58hkxiWaFQKs1qdMQ34gHsfZeBvNf",
  "key48": "56iPS3ChHCybqtRiKCdpM5axsvB4psUNJ5sBtWMqFvicgxH9uCG5BHZDJHkFZQVW5AQdoqrmbZYZepYZK4q8DJbs"
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
