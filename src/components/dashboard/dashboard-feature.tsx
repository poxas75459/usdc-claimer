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
    "38ZXNEP7wXTZ4PbpU9xXpb2YswynUjpW2jTg5kDuZPUXj3NdmTDwDAuM5z4QUDpKxFvhU8ppNtU6CqKGRzr7xKP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJuzySCLeNas2BscLgAKqRi4uACsNCKXX9e3UH3a2BnCwjhchagwzPK8cYFKqbvA19dfAAi42Q1JFnC7HLtpgwj",
  "key1": "2jw2UMuEXyBSd3NLwjyquuf4NFmBNcmeun4XWHSDsdRScfAoFoJccWMDx4DEpLamuGzmydespaEaCp7cfH5qdASY",
  "key2": "5oqmv2XwgspqkpdsL7RxDasN8RaVfB2TH9HBHRuHmunLHtuxCXY5jhHN7Ynf7WiWNkHZbtTJfavtxwfTQoXwrc4Y",
  "key3": "4Ukbt2FhpJGFvxdwH2gxpezpWQVdqGJUjsL2s8pRbuvTRv8rWZSH9FRG13FDaTqNyrAtBdM7iKfzRf4DayLeAWhW",
  "key4": "4v69XrGCTc5wkUD9jN3pqD93Mc3myeBpBcaxXMNdMHVmvmfaKnMEUJXDzesmrzrDBh8Zb19v7rnBJWwLvFKVs2ah",
  "key5": "5gmKvqKDdd6RzNF85znNZqxMwyRRHGjbniTp4fNY1VCDevw1aMgDV9ZaEgctPSRNm81aMX8myR94tXRXtifyJPdr",
  "key6": "GQkB9LHTn7cJU3Avm3bg6wxWzu9UnHizFg732d4pfG7CQUfNLbZwFVjqtvEJ3nthugEXV5Q3nVuiKFvxdj43czw",
  "key7": "2CWj1FCNcAJebQcti47D1jpdeLK56hU2PwettVh8QU7sBBtNKBXWzF4vQN3956NrxLTMgbZQG6ciRwz8gqSjYEsT",
  "key8": "2GVVnYPTEXsutYpcZVRJUinYZkwuZ7vWMCe4jWeqHM6rTQb4p8QATySTsm3YioPsnsECZWMVpTN2CYDhAtonWr94",
  "key9": "2pFWYucPZw8L5cjkZcibeTSr7MYtcTHw15FpBvomFPVrgdEj4G5ogCm2t1Ctsa4N6K4EGnNgjQ2Z67f2Lx8edQj8",
  "key10": "5t4C6eJXVtvpkrvsufJBoGubrtHrMPiwgVwPbkp1CigFSVW5jqaXT9TuCxe48PCb113Tha6ksUNaRRpvL9a24Uot",
  "key11": "2ThFXArAe7QpnQoV5eikZ5fmyfayaTt1vqLwV2ppq7suo5F4F2wDHfPQZ42Zmcn4ZsBZUknQ85cktdGZP8mBnqgb",
  "key12": "2jHQYYUAxAr8aDSwJF7iDUgXCTV6cWmwLTSFbMqrJyhbQNrXgVgCPKU3tkvSkydqTyC9Q22CVUsEuNUdo6J6xVzL",
  "key13": "4hdRCoXxNmMPSrxFTMQUpJw87WT4hnbe4kqCpE6kcRPuZcNGwKfsJGaMKpjC5kZ7pheMdekyfxf3sJbFzxHr3Zvn",
  "key14": "3gWpgopmC36pvDcr3k74VdDWxX1U5qJaYWoRUQGa978enrZyWaUDcP1mbny76RwmNUUFEe3Y9wErzs4u6kmxCWu",
  "key15": "5SEHAedEpnkxhHyVoaeY4FuZkPRMZssjMBfqUq7hbVVNidp59zDwt9sna6XB7CjVz9RQmN82CyafkWNT1egSucCU",
  "key16": "3CkciaEwUnreac2C1JNg6eCXqe5qzE989j3NXodAp115ojAbU5jWRfnoWcWdGj5g4aoD9LiAPWWgxGroo29kSavZ",
  "key17": "5GDRzgPnKUC9BmLwvE4XnJRAKKNnMZZHcUWMQMaLc5SjUBbLCA7GTKYLQeUACdxPfLsuYms1wJiLo8CBYzVnwdSz",
  "key18": "3RtThh1YeUiv8mdcZujZN7HPgQo94FjuaBPfB7hmgNEW2XWoSCvgo3as4PQFngZaobwSyTA74aQqyL685UBNUyTe",
  "key19": "5sMryhi9xPKkBj1Rmy5rbuMwLnB1rA7qQFfza4zqfePGXCdtioyDEhgsSpvDNsEL7vnd1dPnF1fmhaubJY3P5nme",
  "key20": "3yFsLZparLbJy3tnimYvWDNB58FtV82TVgWgzPdzERgazi4aveVSQR7XeMrMkS25doYVj5Nt35ygYg2ais2X6J44",
  "key21": "3vV3spUHMjACWMNkHrvfjQLHSNHNtg1HCRGV37XLfUM6s17SJyi6oPk8pAKiAvLiLFgDURELQ57A2kCZBqVGkBp6",
  "key22": "64esXvPGNw6aYGcxfsb8jB7T3ak6otAU9MRKD9x3zvegLdga7zh5i4x7Xoxh767iGYCTtvTpBBZz1keeec3oxupf",
  "key23": "5jGHdq5P3R5Hhnu1tt8Aa61k9xS3po2cTPhQ7gSRCJ518Yj1bUhRqHyKxP5QL182LGXkN3pAnNMui32DqBtiwnN5",
  "key24": "4p3EFTSfezeCA28aDMQiERNH7DFuzQ8QxUNPiHqGfnn71PfMtAeCcYq56bswSh18D9azgnMUracVcqGcqhZpCwxT",
  "key25": "3QhcnWGHezNP9hGP6MZybTz7AdFwNaut2xPKnihbsWycQHDb6ch3oiZmmz4hWUbgXEkLDV787DzJ7nsxvyLF5Vo7",
  "key26": "4m55PXNpZo62sxYwQeUDJ4rVirJVYwvVRiFRgHxB32emkCZF3F25C4JGubLqk15CC1sNGQsJXHKB26UDPurZyojm",
  "key27": "3PNqvH3cbvPxvFimQLVUcqHSV6KybRVJPJ1rjJ1HfDFfuGjvQb3G5bqQKuJdyJZb6fWD85kx7AicWRtYe9GkNPgi",
  "key28": "2LFEev23ryzaXHkpmCXFqEdg5DBgKfa6ZLHMnf8si64JTng4bp8hKmxaBmnZwToZtvDbtJYeCCusnfdwNw4Ku8tF",
  "key29": "2ieUZzKGjLZ3AQcbFmET3o6y4x6xe7SLi7nMDJyYU3LmAxmFCg598Rx3kws4q1cVM1W8oRB1uVbwmHWzYMB29heo",
  "key30": "53fvDipmZdUbHWZnyLcxsKQDSEupmpC3se7P51ujaTmxZA9BKmzCv9jseqpZjQcpaBeQc7y5fEonmJrYpgQt2wz",
  "key31": "6LmvkMJUo8Jey9jD7S1aLhJyNMv4TW2p3pgbCAeg3wrmJ4ENTmFvkjoQziaCESMpSAcjNdBVNTGpinRJp44b3EB",
  "key32": "4e5u4FcE7Juu9HotrGnZPYsUrYZ7ctDCoTEcenCcUnE2AAL1GAFNMJ3redybbh8192qa6Vv1QykuTUVjwrej7PYK",
  "key33": "4ehP6rat2sgg1LAkYBvsPMFQVSZq6qK4Q7Uu81HV4LbydnznwebSdRV92i4Tgau3wftT2G1m8ZkftK2N5Eoyttpp",
  "key34": "65oDoksVD1JUZxfDqjnSf6MXzZEvMWAWfWByd1owZdHGRaT1H5diqNZg2xCYhjxGa5vupY3V4hqNHQC1QBHkEgBi",
  "key35": "5iW2UmXSNBCAqW2KRYAYAVWQ6pwbkueSEb4kjM2iayGaKuSX3LTDVXVH3i47FSDa574az1nh8dk5P76PbotjZU5c",
  "key36": "5XDXGgZCEMW39bAz1zG3gjRes4TABKBFBtTV4ujcEt7Uamfip8tW1DpewgAtPP8Ut8RKN7ahjorean5BQmAtvqD3",
  "key37": "5Tfyn1vkKijNaa3yQFX2e5Ma7ypqGUxRurMDXsX4WKoRTeEK2GLBNTpc1BKoPrGdJ7RavfAjdxSVmmH2tZwUzKvU",
  "key38": "2jDvP6ptpatpy5rRzsGbokw2Hm8W4YjwLpBEKq1rgVbDBKJXPU61Lh7oEhGjbZQVMXqwHH2m4NcjtatX6F2maXqd",
  "key39": "u4LatA8sDV7DnGvvorM6LQjiVd2MssoHfZTZCuyUnU8E38YRN97bVPecqiAFqfTQSrDrZdDg8838ZPUFx9QAAt4",
  "key40": "4WLBvWcujAScdJWt5HUEFYv4yCtXWiUhG5noUUdc25YB24YWDfVosjjqm2dqFAnpeQd3YG2qFBBpofdSA7jYapJ2",
  "key41": "3ovaaD2BfgLU3D5o9EPyts41dadRRa4WPvp3KuxZc5Ww8ffRZxFGSdmDaYcJ3Q2Bydv9sDfynTSmbdTCHSv9qMMw",
  "key42": "2haZJCzGUT6erDQi6CRBxHwUKyhbmGkaXxx8HY9BEpowheXG2FuoMvHqRCLNdwAmSNYiADz12Jdyrfp39E71weWY",
  "key43": "5AgabjtgTezGz34jMEph4mBQFz3LABDkXeM3VrPag8Fzt7tY5teUUdoWLiyDx5kybUSPjPURiZwrv9cnyDi6fu4F",
  "key44": "5vZz7tPvW1pXLZsnHUQcASgnp8JKXk3RZZN8J5ER2uWxEnJdrQugDNEJJDwSCNkqEiAD3DQChL1ALTUUgj1j7Xh9",
  "key45": "4S82tcf18bQztXsRWi3dLnd9TLfRbBkt5DXXQaXE7FpogRQZ4cWF3aA6osUZmb9cSu6peJWVNK34PfLuNpPMbNeq",
  "key46": "5E5qv2koTk6yUh2mKnijC9v5moNA1GV5wa6A2imwjunubpoi25xP1ATbTRiMfBCM39WCG8fTGZZ7ssQXsFAU9eC6"
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
