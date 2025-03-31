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
    "3opeqHdA57vm25zhEWgMYXvHZDjrw9rtBBqvjoS8ZYm383Gu3fSGa3DTBQPwaCML8Lcmkx6bNEA6VsAknjCMMG1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSPQRH8eDuWj5ULibJNNHjTJs4chtZkBfYuLAmkdDEFLMZABgarGb5V53nCXW7KYZpaZo7x1UqzkEBfn1ZL1xRJ",
  "key1": "3kGuP1F2uZbsbqeieajzGsfw41EUPtJnEfvTtaj7mPBhh7NWcS838f9q3dXaxr8xfaUg53XaZkEP9v3BtpXEWQwd",
  "key2": "3ufdJa2K7fM39yAPwYEum6M9EMjhfpCr719ABYDf7MbwawxDnaAx6rVoRHSGdCxQszbAHZRi2Yg3HKsPXmA4Mf3T",
  "key3": "4YAanjVv3SLdn6r6t7bBrCZXRHGQeadjA3rrYjY25RU7YTtoa1XfF4uKcfbays2rQjD7nwZQFrGmu5nsub2erwVp",
  "key4": "3reVx5g16kApbbw8NWsocVsDxkdALLQzLdxExzpdNX3VvM5KhsriVcrMuren72HApNwsDVySPLKa7b9NVbrv1UpL",
  "key5": "2yTg47MaFyDPUSaT1KBuH8ZafxuComXiWUWpEv5HppJuiZsopMUczCMsKsnEptAXvPiUcfdURKg1qEBzYZef71J5",
  "key6": "5rDBAfFqp9MgSUJB5m4MpLkdyK6xZcAxtaYx9LddhBYQAxnkQQ2pyTAWV1RhLpK8gF6sp9kn1j2x7QcvmAwtmAsh",
  "key7": "5cFVz7tMYRPLE2SXsU1Cih2Sdzn9YqBnoWPp7QKr9nNsxKhQSHBALuARHQ8vFvR577KRbAxuAzRMP1QnHcfCkrSZ",
  "key8": "3xja1q3WMacgycniSyLF5NdZQMBJjXzCSja2reLU7MwD7xtnSdT5z5MK4PBu1wdUvvqkRhYdgVjbmzfZV8KmFrru",
  "key9": "2JLRnHgipMgZLVLFLyVULMhnMP8a8X4HhEBRkoqyDHvmrBbU8NTd6Y9qTGfP6WiC9fchDUzqvNkjQhi6U2FSkCc7",
  "key10": "5UuFtR2f3hsdsvTFZuUh3KqcFnB5oN4RGTyyA6JhCorjzmND6duXDpNzGj1zDeNU6QeRrNy8qqKaheHy5LnkuhE1",
  "key11": "58us6Y2nGKtCLjCogJVSdTbP5Dz5HYKsdCPPhDTb2giGiJPYYcLYVA1isPdhNkixSkGg3GBcp1ePMswj2nQQpDtb",
  "key12": "5vgztQgdW29Hz5sUumXtbreceyBYgr58aUxKfq2dugsm7WyhacWsoKrQB4YmidofiRJv21vDawWqnRJL6Djptoqw",
  "key13": "5xchvWdDvL6KqLpCrhRWNNb4YvFkbyYehT17MQkHHxTdT9BykSuTXhGxtrYe8r5fED9aQKzn4s2j78CzmyPBLSWW",
  "key14": "5SUFi6yMH2gMSghEBdxVKQUkDj9nGstuEQML1L1DofruNzWyCXH73dE1S7iyAwpP9xt94mvNaC1cnbhwz9zjfRWp",
  "key15": "59yJPxWYEmHqtj3ynDSKM3t1A4Vw5UZN9nYdbw3DLSvkzYRADqbhWtkLTNLYPFHqjEeZykYHZgCuiEDmD45X53Lb",
  "key16": "cjeey3WKmRja2SHVopaAvHCwVmx7gRLDh2i1cGySAU8Nd4agppoTVHV13hRhbMBXNr3K6dMD8jEfBPJPMn8eCtR",
  "key17": "gAitB6DaqeK1hBktvNVxKVywFyXVG9PEkaZHRZutXwYBHdtM1vr24K6ATYLN8mEmWejpdzHZSSKVUFwDNtCMY5v",
  "key18": "31gSfKciH5EbjWEQMhYaE3yB7vMdwPfEN2FjnPkog3G5SUDCMEHLMSTGpRGdagBKVqXhLscmp4NEKRSm4yg5hZBE",
  "key19": "48eW3Gidk9VjqUvNZwV3B5SBQrjVQesECgGg6MDp9syTVHHdyehkXnHifgNxa7RmqG69ntAm9Xu8XCh6Zmtgsint",
  "key20": "4FuGYACQAtrwWeZmwPL5DmUf2VUdmwwENxN4mmc1ScVq6JhGze5JK59tMf9EQfmMH65yyGpwqnjDe55kZpR486er",
  "key21": "3b35BWjLRQjPqaeq4v3dhuBdCRrXE8i33MeZUEWnEAdL5YYEmkkxcojp73hpUzBPMCKPYLQ3YV84xAZrC9UD5Y7P",
  "key22": "3e3qCWxLHXyK78GW19BMW3nwzXZ7YKSCW4VV22EX14Ezwo8q7WTr9bGQXrK8MtaPnHRLude8DCX3pvWsi8z2YHig",
  "key23": "51vYdEhjPefadSsAXmDgJMymrf9DLbrmgrJGNqaNfTebnmMDteagWJmwuXanuNwX88zToCr3eMz1ebckgQrW1kDP",
  "key24": "3jxcB5L21sG7Ey1MaRN8d7xhmoCMULUCsgdu47hMKpnkB8Ft8ccbSeS6RCT9dJx75shDF8m2J6JXPEfXKvC82tnt",
  "key25": "3H7UijdQybhaxmVcVXsM8aFG41i13C6nr2vguaJwKfwDRYV2JnaMJS8xmjq5gbmyMcqt2f29PVNJqngzTYJKCrTZ",
  "key26": "2BF5D1T5Fuh8AG8KXeddagVEbGvoajSbLpr4RcfTAeyWwkQcWA59Y9c9tXrXggiT65S4NwQGi2ETLEMfm6Rjc4W",
  "key27": "4iUSYr4NPqC26vDCS6wurBUuEUrGUdnVyGpLhTrakC1RKJRc7dT2gEPSXLQj1g29g9jfVWV6CR9v6vLARjp97Pqs",
  "key28": "4jJc7CVUR2saJqDUQP14jfTiDat79Wn7gPVArwCpZJrcGy6duyhDQ47qf4VJe3uKy4r97NM8hJJWD25ocQbgmuJX",
  "key29": "3ftUgSQSGMbi7oqRqkCxxVwFvYraQZd2dWDVwUdQjZKzsxDy9wbrG5D1P32Bn4uGFQjSNNwsTmeQCEt7w2QPojf7",
  "key30": "zPZY8Lw7yXCDG5d8bcS3sxW1aDmVSvZ3buzwQYPDwMnmXsNBTkKrRvZUqkUjU5gG2RRN4QVzWq2KqVrFDjD5cnd",
  "key31": "4tGKJNN2Bq2E1k3jmfVhTeAGY8aw49arX6vuExwdmWgq2tgz5n6V9BiqyeuaTvEsTyhwe3PZ5HcighY7i2Y9x5rD",
  "key32": "issq2ZZfCj9qJBdpXpGdk1GaHqJBm8n77roVF5Un5UHkTC1XioQdWe4WMoC3vAsJw4gqZ4bzHPmbRfKzjE97GvJ",
  "key33": "2pk7zGuHCKPBexZKrjzfKjN5Cpq3LRsvMAxK56x7spsfApp1MoCZxGcKp7HxXBvGJC9Eecrax3gddfHP2SQh7j1t",
  "key34": "hmWL3HkUqTE8GK3js4Cnajru2xftvegXvAJ9DR8APzyLJq2UR2vs1TTqz27tvVBB2WsuXjgMbcS7V49qXBSTQLK",
  "key35": "48MGCXk8FkJF9Ydnv7Udb1wyrkbTEWrgHo8dyC8iC97g7irNFbbcAa18hXmUFZzuTEKcGUg1ZZ69AkFGQ4LRMQSX",
  "key36": "4dWPTi8mWYGUQg5rCdxfM9xryDNSe3W3TNka93NzQC3GyiswWgbQi1VcKjkeAmKuJVpSxeVQULNPWEGKbNpUdapu",
  "key37": "5pwFpVGyVZF7kJhhj9ouPcrJwTLn7z3kApR31NoqktbWvKAiTaq1StayoRbs8edpuQprvtpC1zfg9ykyMVqXL7T1",
  "key38": "22ei2cCqYr6J9db7Rck3doe4rrTk4y5igja7TCKb5CMp3cD3rdAFBk3Uj9ibeZ6kfysTLsQFmxX99pTrfeDNQiJH",
  "key39": "4Q12k5cb8orrGaHQdG6q6GSrGfLVX2urWPvSL24PxAj8g87ArvfdcXfCL9PbdJcfhfmsfUYUK8Rw75GvWRtGaAfB",
  "key40": "5MUYyVjwRMPkSMSW5sixSWGRsL39CWT2CgZiCzmTfwLNrQbx8abxAxRP92BaVG5vCmjJBabK9iqiy934FctnUMRS",
  "key41": "3nGdzLcNKVnc8bqAzcyepWHnANWRyFT5ZtYJJ7ryMi4CQi8Z5DatwDxR4StESxdB22hd5UFR1pVp497szYoqrBtK",
  "key42": "315QzCddGpTD11AzBex1AqF9iBDEH82LqWPn2UNsvAK6W4fFr5cpGDkXSCeiTS3RmGcekVgZsmMYhgqnZPr4cwj1"
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
