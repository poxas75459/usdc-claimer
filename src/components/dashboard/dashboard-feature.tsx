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
    "3nQYqwVWapS2bpzro2A3pPjrbZkZ3ErvpnUS28TkwdVp43taAHxYENq4GWrXbWEJAmEXz5SijqssxU4uWh2fNqmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8o63mPKLDSUChR68izHyywKkgUJDj87bCL3DrFRERzZgxSJVzoY3rFZErRMLae1PbDJ6xYNhw2Dcs2Re9ADQ2Q",
  "key1": "4jDKkb94vDbiHyc1MWcE6nSqq4BhfdwURQW5NaqfXJEZDSSu6WLn5zFNaRfAbsphR9HqN8VD7ZuLKNdvZdWNpecL",
  "key2": "5ijwF5Pa5D4b2V2aKFboVaU52G4jZZSrX2UhPtgooaS62MMFFV6JcJ78kJJgHrYGQssD1sowri7seur9MT9ZCWRU",
  "key3": "2iHcuxcRZqzB2CZD3gzSNuzaSkxnShb7x9GMn2cXjz4ra9puSYASyQx3HxdThN71XjfdDXwKc7r7g7ZpwRrsexYn",
  "key4": "3DF4twA96k3SbYaBXTKy3xB7TLWfi2UUogrMHNeouSZMN9NcnZ6XUaTGb3vLv1Z6qC7TEorjMVgXdXkvxKbmTZ52",
  "key5": "4yBwy8kNGTvtyy7HuKB3MAPue4byeRXrGFN6ZNakBLuUAzZXN2xFqsWKzxbmLWyWXnemeDMVpauZhBBx6oDXPziC",
  "key6": "2psdUbxrAqKz2WcyKdG61YxDoLpfN2sn8YojszXmLyJJnsVWgBVFwfhXneRgSF7qVJAS1MrMcQwMF5YvH5VZo3W",
  "key7": "5eYWnX7JuF6sfsPdv7kySNqRkh1sYtYDtvaErVARPazwvFBJimgjjcMuxe5Zok5SWTazCPxbG8WovQ2egzrxRV1r",
  "key8": "3zVtfRXQw1MMpBB8PHetoFH2gYx13cntYyzS1LCxTobqoeQEgZU9DMnADuporKUzcXhtdGXywhrMTZVSkT7pD19w",
  "key9": "2zMGiGE78zaf1xuxLZ7dCT1yYCewYZLfhhXFPwoBFxm78NpJJPVJfoesberc5ifENR4MNDqUEQjTSVuRZTZWtbFZ",
  "key10": "5JAXBWtCLpvqEaCJTLPwUEQKgJeneKpRTHbZkQbuKJBA5UobtW2PrykLm6fq9KXPcDKFecphtzBcEhrhBWW1gNrn",
  "key11": "ozUFBusH17fi6qYAaFafZNquZSygWPed8cSQ94uFyULxnEFKFhakqPTQsxPJ957P3C2W6iXcbmDU1HfvME3DrNQ",
  "key12": "4U9BjxTmjFpexZT8iguFUARUw7Dx1uxGf5Yd1NxtqXkxF85Q3QvtGhasqZz9MC5fZt2UjbYzWhfivuPVRQjo6paZ",
  "key13": "2cqbrsdqTb7KdaPymu98K9YZsAe3S2VUsWkPnQa5ZLUbeYatzGWinhDdWvPVrB2ErorYoDJmyrxLfa5J8rS72YVG",
  "key14": "2vHGhJZMHXz8QPHhu66wbyEX2DkaTLBXhv1apiU7KLsFQPfoJRCvebfZLjUZ8hpA3YFg3Qp691XHxZxaBmDd3u56",
  "key15": "2EHSXpYa3AMY6byiLtKpfGQ1V62yuTpeRD1GyC8N4CsfMqUqp8XLXz5GSWZZ5UN7i23KsoGjJ2dzTkpw7u8sxEpY",
  "key16": "3EpLtN4wH3WwZDG3KyJmG1ZKMrBRz13sdatdQejAorWSnkt4p3KNJRyi3iQvyr4NvfJZxs1VAGxVo1pWDye6ZpEK",
  "key17": "2SEj1TrNnRDGScWtpVYE9odJWYDMmokokCwDLRRZ6zKH3LRBmfhd6qRmrLAEwHaVkbeN6GVcV6RHQCJKVLpg7NiK",
  "key18": "5rqLDXaG6XU42NyYzMzHuPed23jRYE6qRCgi4MuEMc81cUtxyXjAFps49393FATCuCqBJVoKoApzHqLVzPegtsxi",
  "key19": "5KhgFP8pZcf1cJ3ufK7GN27oWe3nn7FJEtDKLiBTBcAZ6suLVMyYEFJpFKKffvQNiAQAYth2WB4LurW4Ksd1iPfN",
  "key20": "4BGvV5Mq3s4iaokSatHtWYW7D828SpE13xnSmqbb2Hsah3StrE4kHZBjcxHm9ok5HWxR1qMUXuLqKfKCz5XTg9FG",
  "key21": "27EsjqMBySitZ58ggVKu4FEB9pHqSC7zFidujnwSq7rYScwCh1XhikeqWUsArukkMq2iVsLvDqkfSVkKwZNKcWdb",
  "key22": "4vi1hgXE27BcJeru8C5aPMSRzbevzfw49uNAzDBs5cgrKcSYaXJPiHf8kjmhZZ64vsEs7j2ErLbcw9ZhT4V7qYKt",
  "key23": "58GWuknRdAmF2G6JSY5LqruTTSQwkJRpL5BRVwb11DV8JhK8cbmkrLaRCt2Xze32icCsuZkYrmKPk6oSf9puLQPw",
  "key24": "5vKwdVEV7GoUCQWu26o3kjirDGZ1mU9HnxT7awj5r426a2RquaGLfiCoG73s3aWa8rPrSNqUEXjyt35f5NGACxuW",
  "key25": "3grWTCF8ReJsK9oNffcUGJnw2Zn91eTXM9NzpH15HeSjwoDTVF3dkncTDtTh8ueHzdMLy94n8MNo8br5j1mecdj1",
  "key26": "3hX4ZwdvokzBDAcZi8qLaurdzD8H4wcHkBV9jvgoASzFVuXPiw1YguSsqsZJAi4cBH5vy6LgSfmFoNzdKjgNVYE1",
  "key27": "3H6LGT1KdnELpDpzn8sFwQNtmHunNhcX9YpDt7WzQgsPwTSBcYqKdUEPtWUuHs52qA1CpjPhtsHr4TAuNUx2kMtf",
  "key28": "58oydsnAtvwohx2dqhLwqagCDnrCSv3zGqJ75Jui8Wqpy1rDtgz11G4A6iWF5wQHeP96WS51mKTQZ113QWCJj7LN",
  "key29": "5H2yvjULVsP1zSpugWoJZcEaTdecyNKMwf4WbEqtaxLePV5nuHvfhYKEP1VcFvtepvMJK7nbceFfUKPGp2auouQC",
  "key30": "4xgQYMnAEeTyoVN3zF3JtAKNaHffC3hkTZfYVkngRudvFU5pvQwSPadGFKhR6P5pxNgbvSMCsVoPa2KKdNdbAffm",
  "key31": "3vCUbYWNKM4EwqLvapE4483sQAWKhP3WNJov9DLwQ6CJrTR1YqctyN7D9tGfLDywfypKysghNC5os3Th2WpCgUup",
  "key32": "1YQHmU5TztEv3URcLxzLrRwZD1avEdqbJnGY6ctiU1aTT3QM4KAf5e3tLcVZVZZA4Gen7YzeF5rWTVbonTJR1TS",
  "key33": "4sjUq8ahVzPsPfssJBXpEMx3tVC9PMwYi9U4xgsNAHdKPTQ4e26FUgoYrJLjKnbDLKMJG1zbm19EZdp5JC1MTxAZ",
  "key34": "5V7DLrJs6UPgVhBBQAeSaE9LJE6w78Ch1ZLePG9WAHWWiBkYpcoYe8mNFB57Y5mHAP5kx5zC8AgQSoi4bgKJXbAj",
  "key35": "3acv3Qyj2PzpnnZhrUEJAjH6JuU43C8VNiJAXWAU6d5b4HKpMjw4pgCbgyUEDmVDSv8pFrVDbxaabpggmVenMKiP",
  "key36": "3xZKf8UwCM369LQcGxzThkfLAUdt3iyCshn7gDyLW4Qm47sagUDxMaAe3XjMiueyPRf1PByUGkQp3VfYrKn7wbfd",
  "key37": "3LjVG7mfye5vt9KRFNfuV4yMMFFWc21xAencyS34zEpYtRBdzotWjXqQZchktF3wxoVmwLecybGcKhbMQZjgdMed",
  "key38": "4qkoFuNF3G2BiowNGZuz9UPrnsbif12T1DtyCkeTLLQqFGiDS1xZV6JbjrWDU9X8UQazzNinxDtfywSNFEzue6qy",
  "key39": "3DZwQWLvHhKYCzA4X3oFCpu7K9ecZbAH4Wmp6WigH2B4sAK3Jnrx5zZQsnnm8dLoJYLtQ3RZ633aVN7KSHL1abgi",
  "key40": "3uRz7zrZhcJr6atdMu8VoydcXMSs15FbydYZptPK1Fh2jpcEXa2nfhBQaySMmSEDzGJYZ4Ehc689j1QFqasswadv",
  "key41": "5h5eAqMeWoiwCmjmeYjn3QzpaAagKNAfQ8PdpDpD4xX6zAnt3NN4mzXshsGzpdd2jJr3Kp9BXgFhDtT3ZSFBWRpR"
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
