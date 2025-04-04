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
    "AmakRCxPXJ1zgg7Rd5faLQoUoCcN9fSRTmoh6gHiFzcPuQXrtActTzr4dHwVgtyq7WDtKebSqk4bPqbhbH1KaZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6vHNKwzW8NDfh7NB4u4XGBenk3i43iVYH1CZDt4saMYKRerNXRPiPzc84zYTN7bpgqfrnfoi8pMdZYCCJ1KU9Y",
  "key1": "5miAYRDQsSV4XTi4hLi4NyjwoyB8uwcfbdJ8kGC8YCrHeBThWpLU7xoFqMmJ1LMiduNgAYLZ9EQ7HbB84cP5FMBZ",
  "key2": "s274fAzN29nD2BTCwtAds1J9tzqyo8NZ3zdmanBggQHNMSJVaf5SgerYLShefpiQT8f2s8RiGA8suNMZFeiJvVa",
  "key3": "2d4QGCFgQYXpFr7FeAvgwaQfxoarH1fFc5d3DmNRmkmiD9d5qGe2QBruiLHr9Xtg5ZZQUqYYaKi17pvMPSDiw1ni",
  "key4": "3T5tnGiMQE55KWAi471qyt2bDRKPjJPscySP2UPZ6p61FGY9z3dWPArfxdPDiW2CcAHc7h7BhgEdBoZ35XyCSrJs",
  "key5": "28mieLK9GcdAPGRFdS2cV5hNqk1v3TWnmzT6iNa8u3booqUr9fw1vCir88F5QjVQRrugCCoZ7RPcwkKTRfVQNYK6",
  "key6": "2aP6M8ofb8eP6iSGPrJGsAdDr2g3djwujpY5uzwTxkx9JZVLJUPaNkovY6qr2uZNN7nrkE1vCSoDYm87ZsyuxmE7",
  "key7": "2W6hQ6Cs4tbt47yoWjKH86FMdZ2DxpukFywY1EdgT9JA4T3MB73gTJgDjnkG99D2YvDyznjm5iwq2sHsScBCpWRh",
  "key8": "21AUoJDkzUMFeCZssm9fBt68ZYvUQtJxrEM7PAiQVdsAwL2mT7VFW9TSqoarVWMCB5LKTKthXAxRc9bcGEzRhfS5",
  "key9": "5CoVsJ39xd5P1VS5x5Z19kwa1ZamkBLo1QPrndVAqUTSZyJKjKvWsAUd5Kyrhkv3MUQpL2Mj4LRSeU9fkKweFV1K",
  "key10": "65e4e67WTgHkjBthaSPUqmo6xtinnn56Rn4YCYs5pivRgsRJdEkjuPjyJanbAQkJVoMunxAjkLUuPSG9XyFCy6J2",
  "key11": "31w1VALn9K2apfaxXV8qFuFbsFQFwQJUGHmMb44iZLr5Wchhpd31Wj8H6dGBh9NkKhxykQrsoDXzKjyBsmqN4JYK",
  "key12": "qDhKL7BCkEkWQMwRapfqeRrVMZxWYA23HDkSvL2rqJdsSVC7DevnitdNk3mehNsRuAKFedWf7CQ4cDWs6qPeEzw",
  "key13": "5iGvLEUckBQzimYVbRFbC6A6oVTSwhtftJKYc79LW3rw81rCuW2oWwGyYHPX3SvAFA37VKRovGcGr5GbetDFMq8c",
  "key14": "3jdHEdaGEPbQosFRaTWMdGdzCbczRHgXtXaVuom1PPkKbwSJ4gQufwF3aXch15Pq33ATahzFw7sYgStATgKTqn3Y",
  "key15": "4k7jRFsfs2ANoxm6us541TshNH9G1LHouPVu2q4H8fd9WjTydZ3P3Aq9Z7iZocPj1Am4Jb3qMyEUpfEbBu5HAzUY",
  "key16": "35RVMbLYXJK8Q8dV5chfCd26JZYjFFobxQvDCEoKpRhi351xaXs72uirCR1TVgkhQQyrWyeyJom7dToW1UWc2iw",
  "key17": "2mMS76h7Br9xDBjVzapNgHPn8kkr13LYSyJKP1Xx2fDTxQM3aE9GKACeMYryo71Afk1gJRsKtrjXSSbx4asHxpKY",
  "key18": "3cPwTd4Uv8n3yUPzKoPeSH4yrMmGkuHfweh9TdrNPjukxBBuwxgRw6fZngoVZ3Q48AGXXGULhjy5WWjV3fHaNDzP",
  "key19": "4ukqY8CY8KVjpskYKuBRhTuMKkfXtQfMbBRfmC9fTx8gJFDikB1P6ZbPbvogYaTXmu4vs1fyjo4BaTbjQmW9y86G",
  "key20": "fk6mYKBXQ1ipnaP1zinJWDYVLWbY4hD5Kp2Pyjup3tVZUm7espVhrHzBra91TCQ6s3e7PZbqZyBQTz8ihVS5Dgn",
  "key21": "5GsySJHbgjv412GWX4sHCtrm75evpUybEbPq8NG7sPYk4PZ4v6CuzF2RNN18KX4eeXqS7s4aE7AcWQsyhEmjanst",
  "key22": "3fZbKuL1L7RtQWzc73CRje6uhyP1rGqfpzzDErFNiDi5uxUuLMVhFqV7Xi1TmqTVYB93ma7DcrJyDjpzPtozDH6H",
  "key23": "RCd6XfRS6JNwottyULWjbiP6h6phJgQPq928HfTQRifUZ1CmYSAc3bmPY1AvCpiFg4biCDGanSXucU7ygj4qDJx",
  "key24": "2tDFSwPdnie5vDEWGvVuJkEonxKMocFw974nBKzm1Eyq1676n8LkgBzTe6RyFKfFazh66sLRk2uf3ekUftRjGibR",
  "key25": "eR8C2ZhLHyQ1fnXYjZ2ARXxo1v2JQuvSDhDoKoEGwZFRFZtcV2Soo1PoDJCKmtiNRSXyawWdcEmHqtfUV4Fo9G9",
  "key26": "2vyMhZrKnfjgVQ1eneuhZVb6kMxRKDtWf5VWVvPW922xm5qBxVCGS8iDe5nC5DWA7gyzKmxchTCJ559M81xywMhs",
  "key27": "4d1cuppvLyqVx4LbYr5d3W1FRdFhdf9ZdmU5eMiWjAV7Pi53GCdwYFeQ7dkNDhSJA2isGb1aexjE9HgMGKpatjhs",
  "key28": "27NrwBvbd6s93TqEV54BTE5pGaszXnWf38QtJQVVwYgspzWd1dY1uc51qBhigHEcBW9exezFygjBznWdbSKy6Xah",
  "key29": "622E1nDmCEfhLRzPtMTvG6MoUUUaCidKTbA34P5xMQGKsoHCQwJ4M7hJWV7XnaWJbDi3TCx3KKaBxR1NduGmAxX3",
  "key30": "AndbBtUGBDp4kHe17aqRdQjSw5X6YSGZMd4BGS7bbLVD5S6noeYfsaTVkLV617oUofFLYyfHg85p6scLpkrDbeq",
  "key31": "2i8yc6mLyCgf1RRoeo8ACYHVoAVZiE9oqgs74ioiepDiG5eg3FpKiwpvJcAPJBMbJbh8oAp9pycivCsy2xSYPZS4",
  "key32": "2k3RWNUTckzcKT42RrTirqeZADrNPvsUon9EQjRsZRf6MuMfuEyyEA9X3pi7yGiDKkbNnRhnwXBxvfeUugMGUjAi",
  "key33": "37YstkqqyxnWaWgDmVimSkGhYJLyE6J5FagcpDHNrE8r4nwb7McjaDFuTm2pt7tabDND2qq9LGDHqzrn3ECDW8JZ",
  "key34": "4m3xb3xaDkFvTfxQ86FGiCZd6tAmL7CEgTDQmMMub6TRTvUgHjy8zk75cQMLERqcB1jA7Sv73hjTJj9ZZ5M3JrEd",
  "key35": "4WFZLwCv5ubivjCtgqG9oicQe1AZ9FbjvnXP8qmKQPDNWMGyMxo8RCp3BAHHVkh6pFaEW3N99QwcSvu5KaFanJj4",
  "key36": "4wgY87kdMsN18osmnd4q37KB1zqL6uhDVTdYWerKgkS3wDkhmFziS8Q8GwxCCUFrzefNmnWW2DRVoFtUPSZNvjfb",
  "key37": "5f6Z5TMah4ZWhj7qm7ESMAP3RKY8SdqrTgQ5yFHoTWMTMx1bTRjeUuWS2KBLM3Ng9jCtLYVaxw52uVgCQdFCoi8t",
  "key38": "2H9H6Rm5VRGwaTUebUkgaTTuYWyZ6f67KoBsH3sd8ACgJrarZJrb9KWiCr3aiJkygxNDoLhPSZMDQzqW4q84qMHJ",
  "key39": "3wt9bzZo5GsDbxNt4VYCsyijW1CfJzmxdQ9PCDGuAyMXpi5VjW9cJvcAgR2sDmDuJgJsS6K9Rvr2cZQyqFAN1Bqj",
  "key40": "4EzCv8QcyNeQSfG242WQo2q9u71oXXuEZRv9xvqgUHuhRvUxdD5LMPLozdwZZNRAPpQvJozNc66mEcEsNCLyTo9H",
  "key41": "y9JFjJGns6ctDM9sXTsvLMmyusY9FiyD82pt88g7Aby4LtaJH2QxEdqm6CeFMeRN7EuqiFsvNDyfEb12SNem9bf",
  "key42": "2d2WV3j2vXUAvis8JasgXSXrGuc3t8ZRetrrK7vJyXfiuDr9gHqAjszTB5VvWyw17NM9ULdQpDGPn8AAKPgVXSci"
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
