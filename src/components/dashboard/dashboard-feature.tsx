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
    "4oq98AjcAFcY6yyXEMHxg7wXvS1f1oBt3Ka8dTEivpbJam6ArVDK2VkuHbS4RSKh9RMoCP4fbktmecvW26XkwieH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgSXn7ZvRXeXXzGW4REaAN3fdo3jjrBRrXRiKuhMweaKgTFe5c1kb9vuKWYMS1wMAXuW14uzZpEVVrVKESHiFk7",
  "key1": "41mHJekfGkhjhg3KzAM1bYUJcqb3arQMb14av3Es43DgjqakYDe2KSsYxDUvNJofovnEAqRdVYsne3VJzDGBRZZz",
  "key2": "pb4TRDXAYPvgFQ1BqTiBP3GUoZ5QvrmN56emGATAXcXC89CpPdSrrznK1PyBDSA1QMufwtQ9Aff6MPR4G31415W",
  "key3": "61YKYRdRDJ3thsiFtTEC1UPvC9AWHy3Ri8szwMLhFB1siHzMHVsKLpkqFFXYkxHQgp7gVcxPcUnQeyS1di6YHeKV",
  "key4": "4kJdeJwue53Vo6nnp3HcZLp6XzArGYAgnS34jn4XiosYs8xEfCgoPdfSmg6iyBuk5y1Lbuw4p6JqpaNybxwumdbX",
  "key5": "44GBBqhPxfMGgHrfpnmMfdhBoz473wL7wgpo7xoY4KPqLJQXvhfwZJUYT5nsdLVDCEkkD9Z5KYq8LKzb2m2xQF71",
  "key6": "FGbPtkjxtXBzEDokLiHym5ny6FEfDs69eFr7EADuXjzTtzfQxkQ8yQhjSqZ4gsJh7QuqKerFjo6nW1KwtKLXKfV",
  "key7": "2nxZP7RkGmbEQ9Kkj32HWUf3mcHZEKv4ESb9KixUpsSue1tR6P79LyQ928SxUhEB2ANizo1YyzzchrmTpjRkptM9",
  "key8": "2MSabn26UYwVyEeM4F55jrDEGYB4vm4NJeTHxnhrtuc1g3VepW4TgWcEi8DDgyoaseJzm6KeVZRoVFxdFSfyFjP4",
  "key9": "QiUyEjUBpYYYgbxFmFAsY24nc3xEXMPN5Kdo5gUYDGcgotkZ9xNpKPtM5GCRA4EUhFGGQ66bAuMytB8Bq3ktqA4",
  "key10": "3cN7VpNWqg13vJ7aUKnHHQSfieniQjzkWK2qBhA4wBkajNB3McSZvTKAucTv2CakQpFUpotRCyFBFGNV935wTpSG",
  "key11": "5Nf8vrWL8ggtfCeSak8T5XBFKFxH8AE1yVdvnWQPEF5DgXkFfK6nyx11WyYBxRuLLmGgGfhahTwqoaae22JmVFhR",
  "key12": "Hu7K9F2VC5fVwk5swGnX4kHsFUv9c4kVU18CuXbKvk4BPAnFf68djYj3ttPfzDe8hW7pxmgKuHihSZfJitdMf17",
  "key13": "5zZtoRTVvB6YZ9tZbghciAR4RwramsuAhiTEUN3KmDeyBX2tQubrKyjh1VmzpD9CzhE9Qc3zXAmy91ccqgYMjGs1",
  "key14": "4dyVPfVoh9hnbJyNoDYLPUrNptnPi8aVHx2KoYPvKVqXAVAXKZQgsKWrfcCRrysYv9yerHwKabYP2nrSdnyvDTm5",
  "key15": "2AHi6heogmQXyuQE8K4b7NxSFpYcVfFeNqDuAidfrwpPGHLr6uwX1Zroixv8AWkRbNMERgGfu48t1Eua6mFxWEcU",
  "key16": "2tP9rQLSGW6ZUZszyU8YvMV7JP8G8VgsJPd1Ww7ZBQtT5bfAbFxhgsuCT7FNzcRk6vUaoym6jiKw8KFVtdk5328L",
  "key17": "3PA4EC7h2stCTf31LC1Q29xKP4AfRp6YUKeoAuPutHDFXTJccPjUChYJDTkgNF4uMsE5yf8hqkpVa8zHhsRhLDZb",
  "key18": "27bUCqLjWWswdoyDMrDhAD4zccc7AwSnrbxtH2ZewtEGJyqKDmVE8mKY3W379GSsRyXXwqHfNcn5RDaemAsWR1VX",
  "key19": "59rL9QbtNxrs9JWr7FNb546ggZNjFybPBrF6Vsp1NBs7PSpqP5B9t4qU5cLjQxWnaFbbHKRoB5MsnWk3RQ7iehga",
  "key20": "4UggN5kNhBEzTGHr9gFAfgE3rqrpXsPxm8pn9rA6iMybGDdA9Xi65CiVcnhBX32a4xeP1htWhBWN9r7CkSbLCjrr",
  "key21": "iNUqu9gQurRw1kPCqYEtsMeKxLe294orGd377u2NZb5wZLXYsRyF1Hv9ogVDxERPJzkTmfdQy3noGJswFiUVsVC",
  "key22": "4swQQTohUZYpRfXNjDDUguHuvGpQB1f1S7UbM9LZqwkQhLjDDDo1cTURahJuy4CLrojm5LC5X6hm7RJ48MVNjg8a",
  "key23": "5TNLC54UaU724ZNWsfYN1EoR1fTPsvH3fQShYwaRTiwRnNeAvtAnDsTBFonK3z5kvt2hwmQVXPUN3PcB7DG1cm9m",
  "key24": "2KTdDk6CkocKKr6qVvJrw772YztCQzPBg8km23ts3nSkrC8KsjcFoB1knqb63Xo8ScaD6z3CEAB6FiQPRXCak9KL",
  "key25": "2zaV8Rqtw1Pybw6BNdGF81M2Cqw78k2sUUKmAddWm1WJVobd1Ykk8pVK9Bkk1U7MDRBbRxXG3oRrh8EwfxWuxU4i",
  "key26": "5v93BTMLopJ2eVCdWFKe51WeDGqGcAhJNARapasvy3PQqPoWuiBV2V6EJBV5SxtVR37zW4cnB5YKoMQ43PkXY6aN",
  "key27": "4B38GWMSfMkWa1YVQFzyhSQ6vrRLNDhb3KqU5nXdz9BfS8vCXjAmt8RREvHntEoXDKiMskervaHNy5LEh74XpoUU",
  "key28": "2Z46ehzDfEcscYjkHhC8iJAkBi6YJcEecKCuNd4FWWrb6o25kdFi5NDXhqJPnW6sxhLpqVvmKPU3K2wtpkkDLwtM",
  "key29": "BP8MjSbjy8HNNjAgVv4FzdLtZYfTJpVjvTCcjRA5WsSbHnxydptVBSmQBegd5i7WZX6MzKrUfGyEbvJVf4jYeBK",
  "key30": "56U7yda4p91Zk4WamW1pveg7ZxkCT1yzm6LZxFpXQFXXZE1qnU59BK2L4e7gyoyUsc9FqXNAjhGgdkaext4SafSq",
  "key31": "5PGeQsd3fFcscRfr29zgqgK1nifQnpfkPHiLBGEBEKSkXYmdEWpUgMiQnNMm9nt85dMFanGrBmkvinRi8Fif2yjb",
  "key32": "4FGYVKrRXVEGzzSVvumT46sXAiw33sWWz4PbvZgNRDcWss2yYxLVGEkxsbA5UAhaSjpsGvZwhMSky1yDnK7JmPF9",
  "key33": "3jVyxTX2dA48ZDgccXtX9ppY6yrQkR1epc9rDM9Vm7SbYJoLGsXFVcx8FHojUVPQquisHP1PWzAnGCKjUSLE8qYV",
  "key34": "3kR5t8Jhd7CwfuESTiPRHkV24DLyfBYK66wmqRYbhUpeV2kWXyxFWsBvMGdP1s7nsqADzPUxzWQfifnrXK8K3Fr1",
  "key35": "fTGWYt9PJhDwSsTUGhfVKNe7Pt67fPaGq9ryDEyjaP9TiWCyv6RvCNwUQvqAcij78CVFQYHTxxSk69FEzDJ8vuJ",
  "key36": "58WygRbdHSdq1Sr7SLzWX4PTbwAYYB57a2tkxUAGeJ8go5MK4z89ZsCi28my8EkMCjNx9DA7egcCfAMqviV1JxoZ",
  "key37": "wAF2A14HF7mvKfppHcEL2ETogSVzTrL3axSgZDqCeEQGLJkhTr7n6FHvtD74aLzFfGBHLUw86sqTa6ch2DBtdNZ",
  "key38": "4iSosdRc9KiEN4resEA7Hum9avZJ8QyHAamnArj1v7skmsFd6JQLnEacftSWauHKe6CrvgfF3ftQzpN36YzLjqMp",
  "key39": "2EwRQF4Vy6HL6GXRLVjhLDThL69hujLziiC6yFVVXzxYYyDXYmLwjoLdornopvdwyt1cDk5fdfqosz3o2CoaZUVv",
  "key40": "66GmzQSThk6hMuFVmHsqfdr1pju4mBYqua4AGAycEm1PoJKZqTaMi845mGdRjsB1mwAyYAgbUBM8d9gA5cX8SZsv",
  "key41": "4wRXSmTR7PfxR97QsPGqRnsZhads9hiYbpgY6XD83VatfSkQxdL3gWqbyaiPayr33bGLrFk2kVkmzPSCcsm198WN",
  "key42": "4jtW168xTcZTCsyJMSTZ3w1TeeX7pexTcDED3aHCgvdEyxidSZURwLQVdW44fTp4Ej2EWovaZ7MTJ8eJwBAQRgby"
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
