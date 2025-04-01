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
    "2dn6sQkrvY5trzv841d1AoZ3TN571M1r5jAQJG7ik2WQ49KQebdVWahXrAaN9HizhekQ2Pab9hFpWW4VAY44g4cZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUftZwDeFCz4aoqVDUiAWsZFb9TKG33SSDjSDxGLnF15SSpLfLEnhHm3FyLTdwF4G4C45ANATqCKVn1tDhXHrS4",
  "key1": "5ToMQgLMw6oPcT2JBmXXReFcbhBHEmQg66QAKEUTKtnYZfCe5kwNt7agFFY8wyXWpzr2U3ytnf9vhAdpqf4LGNtT",
  "key2": "5gmA8opUZFCHaAwUTcidhgDghLrzHFySttgdUQ4cwRsfPSB6fppgSzmMRAV78HWd4nZk5M5snyHjWRje4f1TLBdX",
  "key3": "3MyuJENRdwedNpdMgKLHvEHSp4bjVDB9JEEXbXNwFoSixZp28o8RgWZptqmufMNxQ3TG19W97FR9pSE5fihqZNxh",
  "key4": "24vhWiZt4yc1Uw1rFo1bxVGDmD3AV6byGXPCZ1qPwG7ki9oj8qqMQTd9Vrtnz1qE5xrv6gcBc1PNngFuzx5aJGFL",
  "key5": "6snD8QK8KPQ55JMyHLzmV53nTiaMrHL8DsgPix2yfjzBbqVQepkG4RfBb8QrrdxSyCNXSvavGuWLLn89La83JqA",
  "key6": "38LxK4TtJ2Lh9wvfg5RpgJfUZGborun1svBvSENF7tawTTf4faeoAwgXFBNcG4Ge3yXY6pJv1EFLoxPh5EWfWPEe",
  "key7": "66HtuvBZEgVG3n6LAr9AM7LjJ9Ag5J1gdxJoYWDSgABHQraYBjh44Q2TvwfeDMwaL5x2AvS3FD8ekEPxTdrUrxtm",
  "key8": "FrgormypfkJvrB7zVNZ4Jf3n9Y3Nfd6W3Ccmu8orzkSxmMzMbNAh7sZ4DudadZ4vqgKSHf3EWPxt4cRpUAkZZ3N",
  "key9": "3FPnM4R9LM76Xvp375FLRp1kXMJgazRbL18UCb5bAVreA8Benr6Sw2pRDDTZuX6pAqeux9x1ou9z7hZ3FyqBL8YQ",
  "key10": "4rU3P8nUdWuetpihWNZJJw8Nmi6hTMjaM4P2H8FkbCMbC1us6GkRpLCG6dTbPMPyWKjoKGcQLcutJbG2y6fkKqQu",
  "key11": "54V8nBWmLgpnYvuJq2BEUcStigaJHYi7mBGsDqXmGuohYF23JgQiLXc4BWf1Au2ERbMrrq9ExEvBqrdm11sySzrk",
  "key12": "1CU3LDe1Vet6N7XL5nE85b7DBVTweHf5nN9acUA4guc1xuoGG8HwUrGhKKsHoHj7piZXRHwD6x6kPSvww66hTcn",
  "key13": "474hPXCXhsSn7P6ts5grWWBiGbyEw3mb36LJXvSHR8gFVHPRQRNXbjd5yPUX9WR1zdrkXEXxmCgwE9jR3ASoqiFS",
  "key14": "3EBTiY6vZPeee7cvdFX3M1k7MCiaYT5hfYZQw68PcUL1gLQBPArA1e5u7H1PZgv8DQSqMgutVZMf6SjEwaymDaLN",
  "key15": "3hnckh7TeA7NAcBe9xBySbrLi6YYzsCRRzMhTM4zR6pWG3v5SaWu9X7oQ4BFhwLfHvp2uNoWPmEuWLb9q7Ad9DYp",
  "key16": "5wEKWk6tNJwwGhjMYwWdXE5jvkUNQFL5DemwaTPG2zabarRpbxVTJJn9vbxPoxKvVZUBdeWsDkBYdJcMgbxwU8nD",
  "key17": "62HDDRNubPubiBh5xmWafRSZrRqr1Zb4fxp3CUmBd2bRVGr2RfqyFFquupsHxG4wPp2HQbrQiHTDDyvsqXSPDLXh",
  "key18": "5N2bHTBLe1XRYFny1YeEFtS3Dnpspopzr8Gi72qpEPvf5km4NvkHVraCfNw4QTUretW43J4yMkMBaHE56xeaBqBy",
  "key19": "33trAECwoqSwWpxiYNy4gYJfSQHzbVMRnL5RnxMFKfcJB2uC2epFPZiu5HemvYkbQXbNTtKezW8VigWbPUZScQ5t",
  "key20": "3Lt1NtKfYcZz2ns2gx92WPBBkCT8AiEj9kMtBAtUkB5LwTwGUZu2GVY87LdEK5kYbkveeVQoFThyrKWsA2LXP3Cp",
  "key21": "3vg8Fq2miZYUkn8CE58RueDv5ShQsSqu2wZZSHbcaYdhc2gcHKDc6ZktWrV5mHt9pdL4YbJrjhvN1JHV1U2G7Zjd",
  "key22": "2cU2CeBBJj7EW8d9zPJM9QJaFzBwxvJYFG3PNCGYNwjmkDA7vZr6rJkVZdoj13gijh53JPkAgBaQHDwsLHNB148L",
  "key23": "2Tm31MrFryDoGaLWjJZtKRV12jpmLREMkr5wbXm7pTuHCicUVKzSFX9Hd4smUyQw81Uh1gLM2equdVUHF2dRb4Fg",
  "key24": "44EAftqSxnYUf4sQ1v5Cwx2JuADwSNaC5nYcNfzvEccrdSrYkBdPw9rrRAWvtKZp9rKpoMa9qmu5WGw98XeiGqma",
  "key25": "3UYsNQBscYW7VSDv2JamtDDYaL19HVgHoeG817gNE8ySeQVvQaYotp2rPbyRq6vKiZpn5B4FzUEuuCPo6XoQQAeC",
  "key26": "4Ufaz1WAWTbJKN1ghCND6hn8T7DrHnLoRCD5EWNp72NKBSeKay1GM5wxk2DaZ9u1YHW6cJbyGFkCGxaXgyNqUhQn",
  "key27": "wjyUf6JtiVoajfuQ8ztX7hSUrDRcVpbGWnZHQXDVWz29V21jWJLKtFvvbJMKeNqzzLgezqMjKKSE9XzHGL5vvkv",
  "key28": "3WEej7QwxvBXYxjVwDrksmncMv86tZ2aVPGmGT7n9yDAL41MwVmvZfGL9ncDDM9oboFSnQatVBYN3pQXyiX8RUPR",
  "key29": "33DjuqNB8CDb7kAzs2P3UgG9x7XDPYjQKuB7Zv6WrqxUduwTnKZeHoQaKu9Erf6oeSGpLR7y9aSJarST3sFMspPM",
  "key30": "34wB5vJtNxEzRwEKVTxsPm7dWzGQJAmLrGRqcpL29SKgyzbtNveR1remfjv8NVpEpfAZ6YB7s7fXyNKx8Suzz9cb",
  "key31": "5ugknrebGEyeTMF96QRSCB1Eec2VjbPTr9V4JhNh2FGDhvumCzMGYS69jL6iS7AbZuv7mk6BDtdjxnHJVjbH6UYG",
  "key32": "kPH2xd2Tf3PeddiV2mWQvyBzF35NFs6UGAHXtZCDyaB3BAHtnZ2wcTkbAptR8bauEUzktjRVKoVL3mJ7g1prjsg",
  "key33": "2JjySYGNzam575qRpZfEtMHSnPznWvSgqFmZhVgVqBTJNPvszK11czmLpzhVj3hGPZXAvEF2DL3wSbRMEP4VA2LZ",
  "key34": "7jxWdTjWefWmC3vGXqyhon9hGyMiY3QGgfUt2TsuwRXXYm2yjuLobjDesgpKdjb5QZGTD833ReXAXmcVXY2jjAr",
  "key35": "dyRq4SoDEcArnB7Q5cutEia8AFcqz4YorAcGPMeFyRe6Nnn9AMiSQG9cmPJEg9Tq4ayn9q2TDHVz2j5TdT82D8j",
  "key36": "3f5pV9eindNY2zZQq1Pf8qLV8b49kDgFtstVthS8oMdKeakEwx3Lp99GtRatxkxrgiFNo9SVZWXskd7qEJXLXHXV",
  "key37": "cSRokCneStgXkgBzq4N3AGQTPautYCo4y82897Pt4CEFtcaPLnXvQgwaun2rpY2aFzU6JasPWXtkogTD641fD27",
  "key38": "2VN2Sbby4GGqGMPMKAGSjzA78JHLs4xUoXoZp8Hvz2AuGBNv6nteNiKqCfvN7GrMaoDH9k1QhQ2XJfv7v4j3Bsmq",
  "key39": "3ByCDuN428GXw7eZwoXijWaZfqXaVvBPr5iPFNG8x1KgGBPqjyWjniwtXXoubhkHaDNS3u9hSN3vFALkZ5EmRGMF",
  "key40": "PVUKShD8qqXXyrC5qKsJL49ftWHCQNjcq3bDCS3Yig1oVmf1VDohpMCboSDvCMJnn2z4ZQtWwZu76ZnHm3ktAQQ",
  "key41": "4usnnssQPNjc6uougMVWKQ3cWN4NWFXkVsTGxyiS33NRy6LGXKSF58uRGYYPFU2XVFX57Yy5e6eiZuk3qo6Ftvh8",
  "key42": "5JdZTAhNo8gUgx17GSQm82v7xMPZUWLVB32N4FrQPSSP54Vs9ny8BVkytcCM8FNtB4kjcviRMNqT3JozaiAHUEU",
  "key43": "xkv3m5KfvhLJurtjCDZ4YPMf3EqYNfNVqL1QdPZhQZpziRPTLeJu4iJzjFhYP22r86VKSwzEyVqFVjToNx8u3ss",
  "key44": "2VvREYiELHDtFttFLfnZaPPpBNikT7TcB7emmvE3926oTQerHZjvGGYnMxbCuNKetzHitcVdeKFjaZHeHyzs9uzP",
  "key45": "4aYSSBYeufz4zEeUwnSx3TFCtgmtvJe7fLWFdURCsuuWhhqaHkLDrZyMB1D2vT2XM1bq2PSA8tyajZfNbi1U9R7P",
  "key46": "295tnUcy4YvqQYMQDcFz4XhSoEFthMU6XqJpTmRM1Sa6n5S4w92Gw85hWvPh4vhNVm7hUSwUrF3mXw2L4CkvWpKC",
  "key47": "5VvY8Byr2wPj2jEptD3zyNtu9Pvc4fw6QdjH7sE6pyuS9NV1dTXL8XA7s6ETvWEYJjwSBVqJHzyvHqLt2HbqHXWy",
  "key48": "3wdPr2NZn1V4nkQM9dwiXGEfJWrwGdR8YiW4PDzr7U8QESHvuQWTE5o51SVZCL5fZTWBKQFxrTKX9w1NuePJ2W8w",
  "key49": "5Dxd9TrP6FD67EFp8AwxR9P7YNZTSdxpwPK5tCYNSPCHHp5TCt8mhcLHAiNEpz1tJChjFf1Jhh3E4x7ohWZFTeMy"
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
