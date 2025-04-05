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
    "2qxaximCpdBhjtEE56FgceHdFtEp5ytQMypQT8oZeprWXw3omcRiHHhrKhNdMCkM5XZoxtPQUyUDaeua6fk1SH9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sEZankKGrGpELqU9eNFmDR2Q8UYDoc4TCLx8UJUxCF4EPgRmW5Lr7Ph3S3omaax4ccTj1dfetAPcK6S293tYFtN",
  "key1": "4q1j9pk9ravdrZLpsTShoTHyZnj3Aa29socLomuZWFUoF1G6sa9z4W1G81t6ewciZJudK87dAqjtsodYDAXB7YCA",
  "key2": "28EUi9u3aGzY6o1t4Y8PZ2GGAnF42iHbkfAVULN1RT6fWJwvGs685QrzdpZrDTF6G367f4nWTK4T145xjBEZzYoj",
  "key3": "N4mkqsXnEwdtkKuX5JBp7UPkdkMGuK9XZX7VmdJRNsYeBNfeqCUX8ECNAMBCCB4fJSnfacREuBC87hPHXxUeKfv",
  "key4": "4j1RTwjuFNCFiKhheuJW1aFX1fg92HtqcSFkx5nfYh8XBHS6mdB9oPuihHtw5p91fmafi48gJUYbmPNzBKw1No8i",
  "key5": "Xr6fup2do8cH4c1Uh26KeNynkQ1UYkd6bna5rxjjH4SMuj5pn8GQnD2UW8V1Q5vQ3icY4a2KjaRoKy7Ev6MtTFj",
  "key6": "5m2LgBW9e4m4tpf15u6KAQ55vfNVqf8nXpQA2Tz6WdmDqLtJCjjjwDoqkAzuZj8JgBFRCPdHukDNAfwPAmKa5PWL",
  "key7": "5sAH5yifuA7Um7De5oPsn1bbsuxbNciCGBSJbXvzJSFi9kBxa1kECzAHs8LP7p9r8h4wKm3iHCz5y6nKi3sEVutc",
  "key8": "5NMzV2SQKYExLF2ZSmKJpLuJKWbAS7bUHx9nZnHna9QY9uutvrRC4628mKDv24WbXVtwqeDwzhKzAkwjtFsoHZgm",
  "key9": "2ogYWV2VzT7PNbu84XgDZ9Xg75pDWzQEsDaBxBZwpL7AKjmLEUChHoTcQ7vx5dPr9UWNnPikvHDDtn9ZGBi7CTCK",
  "key10": "2T345WU5Lc9DcpCk2Qcb9GuP4v7c4UYYS2F9fhG8nTXcFB2StPLnULPzekvpwADanEEbt43y67Tc34DjTSxY6x3g",
  "key11": "59cQmTmEdz4WD7YmSYbmrUjmcqip4C4Te4J5JVKEem8Fhjww5pgCZv72irrF2NxiGqp5wdQs9aHrfNsWgYNFThkx",
  "key12": "3EEFd3516f8b9ejEsCPS1hF8eb272o7g59fAiuKz7GvBvKbUr8v1WTKhPFJWa73egM4M8KyPbKerBcE8n6QThQYv",
  "key13": "ogt4jZovSh2dVug3Lj9eYkq9hEN5NCvNeLJPnifvDRpgGCfikQLNJCi1WRHYW1SFTCfpQiq7GiF6RYQkrubEUbi",
  "key14": "ckPqGhBqLwoNM9Sd6QxNCFTy5JAbD2taRcXyx3So16ANCNTEBFVaF6b8H7mRrsYpu8JWJ6xhuMb8oFmF3mWeGG4",
  "key15": "2NuL8YcvnRpwa2W6i25oiQ9Yrag2GwDQmZJnEUyNYv4uHok9gi9VxNxR66YB9UUPyzU2uRJngJByggmkNmWyBm6Z",
  "key16": "2Don1mAYuNrXike9ydH5GrhU8JfKYC2FETqJsLbvQZAcneU5T1TCy4XQLtFAosZEbkpFdmk4jbzet1YW7NrAYKWa",
  "key17": "2bGXBtox31jUPC6RqWpzQndHc45FjF5GaaG3RMAQepzTCQzWWGPaPdsxuctuiiGHhW4onkNvLaswwLM8u6pind9U",
  "key18": "3ZKE3eGsjz7GrhMrNc4GyMCzJZAq1RXWwiqkpRQAZHLkYpuzRiWPBi7KfcYskm6g1NPTVfXjPPAM7vGQgc3gC3XZ",
  "key19": "AQhiCJx81vdBCDc286bQ1pfw38G9tvrT5TNMjTw78qT9iewHu2NCpjmRn3w8b1h4wM8KNRN9L2uNLHbvbM4xhv3",
  "key20": "31GUp5X22jbcWUaLRpnk6FRSu5QtXQsTpnN1wXxt9z4zuJqZoFUgvPkFNETxVVL6cJ367whoUTXQCpcsAPzdai4f",
  "key21": "3vSsiGHkaB2tYbizZAQxMXMWSU4VxU551XWaPSrxc2tPrKSR5WPEwhhs2XKA6txj1QqtxunNY2ha9YsfJT1GADNT",
  "key22": "2fakFaEwjiqdgDzawAAjoCMivV3vqrvmdAoYwGGxutNSkCiJ8Z7m5Lzsj3pXJmXice4RBFB2jzjx5yqbgCg68xHJ",
  "key23": "2eiRz9A8tRK6q9A6iCzEfdxkdQQHXws7U7pVd5ypheb2Ss66BrW9YDT8YfV6vwCF88ZS6ipzvBJzLnZYQ7smY4H",
  "key24": "5gUTiy44DLFKQYGFSjbg8PwXs3CvJbtRE9jZFmfT8maqoFVLcoYkiDnd8zCSt45gHyFCape5TaECBqXXQ1MTXfae",
  "key25": "4rc56rbCv4UNHNunj4pGD2LFx4acSyEhvMTm9zRYDH1uuTt6rpK38rj3ygMJurjMo8CSSuxhuVNMWRJuNNpNu1Rq",
  "key26": "AQVrM7gwEjuawVSfLDAEpjJa5guKB1mpgRtJacxwZU5wuTgFZr3NjtSPGqiqAmNgZPQhmbfyc8ygErNXmD6yhU9",
  "key27": "wjBT4V84MBtRxRnSD4Gt5JbDv32jRwRDiayNax55jVwFKvSzauVLr9o21QLyPJs1x3wU6zDRkBKPSY2vAidgLiC",
  "key28": "3Jfv4fUTSKEoGnqAhyR5ZXuAscPW7Zyxouejm46SVwJCxA4Km5TLMdPFpcQBMPh1GHQRmpecVeqg6qhqCQxKQAoj",
  "key29": "5ENPvzjMXzXkTcNZEcuHrotedB9u79WQVfNtMSJBLYxzuDUvbqMDsUytTVrWKZA2BCDwAhx8ijTy5dAiUwUxs7Gd",
  "key30": "5tUny3ZuBNdvExySMouJQKLuokPYnUbSS3n5dxjzYMfVq2cfcEKXNSG55mnrt4Uo71Zx8N9G23A798yWbL5uw151",
  "key31": "3digkUeViwsW6usgBNyQKe6azPpVK1NQ9ucrwGdqoGPxunqcjQgzokZaJNfs7AotWFmC8GDx88HWeXLcWE4qR5vK",
  "key32": "4KY3A7K1ayt7Qzjojh9Xz8Kaq3QdwUH5QswsaErUduMfvfQbniXm9aAwprphuYakJodReDmQnQzQU2c1hZiRNRAz",
  "key33": "5oAEVZJjBGwFUiYj6C7UwDwmSpuneT5x68Tm8QncPVdMWCJ1bxffUzgxe5iSivhvuePMqr2XMkozHHXErc7ZEJ4t",
  "key34": "5rLBnBz9snsowZyPoAg4bvaTUQqxhVoHp3phYBi8nVhgb3wfgGqoQf8sbUV2ns5cx5qEn7Wzwc1kHVbKeiPiRAZD",
  "key35": "3XCNrTpTdQLEVgYupqbRMZdV4Umri3C3ZCkekM7zEDETH6FDGyAktEfVT2b2YUk1Dpf9XzGErtYQ8f8SRhVLk6fT",
  "key36": "2yb9U5ysU1EZ451PgzE38HgXTNk3xX8hwMnxiSDuz1ZLBa5UBXctkw74ZBhcUkJEZqPLWKf2sEf3rYYyKWGRqFj7",
  "key37": "4Q5AD6wxzgGNcGXqJspWo4AW2F4tZAFXXH2N25F2oBsxUjzeDaUvAuAqcUQYacmhg4iQKjUg6HHmBPxW8Gqswve6",
  "key38": "3tXNovnDYL5BfHV1uWA2BzuaY2WMzYyYaHyjcy7jVHzcLnZMAypymDqeLwgDqr65C2mckTtfadty74K6yZTCX9fF",
  "key39": "siGHLZXFPbFj7CtgtamtrqZB1TNAR5Pxw6fD1n5LwUYCqypoqXhY7Jw1bYAD3zwAnfPtnG1WrAnhJmW815Lmxbq",
  "key40": "5hDi8iZ7EYXfqdRLHHEkREnzHGdGS493XtW1qfMpvpQEawWe97t1AeKsjhWTcQWHKVem6e9fdw5bmyUYdwYFrTZm",
  "key41": "Muj73uDe6727wFiKwoAwvxPgdVgebkJACDapwAUx7mfnSrzurqgJdXq4kntrJt3Na4uSQ2oiZQ7mFnxLpBGVS7H",
  "key42": "5mjF6KD1u32vC6iVS3b7YSSHYAvsvogazw3DeGyBn3TR6Fo1MisHWXSZY5c1P69K5mddMt8RxUW3qAHctRvNFhi6",
  "key43": "3dR4ZWTxpk1QgFaegaSbUhfNXFqeo3QvyxdHDXrqrhC626aCTRFeByaiDHsj18ujyR8cPK92fKsusK4kBWWmL9MD",
  "key44": "2k1LzjE1ZrnjxmYH1gxSNBehkFoisXo9BRXW6XecKYcfjrYCXuYESGvmnSZqBAh1QNYCkSKfE7KdS3CyTr8JQyv4",
  "key45": "2JDT1dHAwfvCDVEMW8Udp6iguzqYSKHjcH5qHqfur5baaKB19fjBhPAiza6bpuWTJwFd8QiAVRhpu5xKk9kD6r68",
  "key46": "5c4WAFVufRTJDPMniVPFhkUb5SfJ1F9JoyFCp5eHcrSxWwyijuTa5xr6jPTBCW1vgUfMSpspui3UA9h1Xzz6jpmA"
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
