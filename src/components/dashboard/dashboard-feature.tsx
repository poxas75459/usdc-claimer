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
    "ziaXU2XFUpGvaHxyZv4EmbzcXUoTuhLSp8wWkiimJY9ZSWqV8CdLC82msQDcqSRytYLkjFdqv1qL7vTc8FJt7uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofMW7GcPafaTk7qz5TfLC5mvqwjp37A97x7RqKpEiCCLb92BGG9bMZVd9Ffa1AiHK86HP323qnmhq7c8FpvNBg4",
  "key1": "B5tA9Zhr3S3ctRgZwMepPBd8cTm5bZ5HYkAwbivAb7z8TrLodxZk8kVuRYqUY9QTQGzJkpevAPEzjveWE2se88j",
  "key2": "RdfLgrJRLm9Xt8U87KMya8tMWkzVXmC7PdibBCWjo2EGaXBB5W1GxUyyJEiTE68moe6zC6wq3A7ZvbyKt5nGV5N",
  "key3": "4Z1gTzHVCvY8uVkKzAmGXU77Zo6gahaJxcWn6er3SYJFLoE5quYJkoyQxFbrLxM8MrLqVxroyupFqMkHMd5rzZ6z",
  "key4": "2esQmsMowQBsExM23hq6N2pFr4LLm9yLRQQLkFnrgNEY5irn5HmjdNDMKoA1wXTyArywVBtdKUTm19GN6u4wSpXA",
  "key5": "3m1VrptnHHtqxcVjP7KpMuVLJXL4yKAmd4En1m3AkkuREoA3XzaTT23BeCbb5uXZyz64t1oKJJJZo9j8JfgrwZAU",
  "key6": "5yY9NKYLKbDcHtwftLBTNwkFs6Qg42nPQB9DYYkuFcVXbhpX2XWifLmeRi4KAthbafcKdsmeScxa3F7VKRMiTp21",
  "key7": "24HgsEHuyPp8pNTt2ysjRn5MAD4tS3MjLR6gE5XFWbFW8gob6vgGhrethkZvkbcUw89hmBmHzxsPxLgoEbB8KxjL",
  "key8": "2fUMFXr8SU3ZwAzxmy8MxEpf8hZ5CHnzNABAWWg44EPBNTPmSq54ch8q7FEPEoQxdBsEAH92Aqf982xVrfbQEKTd",
  "key9": "bBtzwzNv3KLjDEewyX8YYL2Y62iCBqhNxzwZmVfJbEENUSKNqHDkxq22tCQV4VTSj5ArEZVJsTXCBoaUonwwTuL",
  "key10": "3TtzyF9d2ZqvmgwSUEvAbTqV4oEuwwXEBaehYZXKfnGg381f55Zqq1JmmEpMWbweNXsGen1Khek8arVgJo8h52nN",
  "key11": "48LBn2Eqyy3xgD2pCx2P4rs1ZL6bzMTfZQJKeQH9i33y3CDFJ3HVWxFYmi9tAWZc2yRjPJ5dbqmH1UXpLsoUYoEf",
  "key12": "JaWYxx7j41uo9xteetdrTPVmhxKG7GsP9iEBmxBHoQMNBRMoNTj3MaUUBxpt3p6YxRCsvWe9rSk9WsksAXZFWXB",
  "key13": "3ZEuQARCKh6fw9sT3ygtQiKMLBSAEnaSJz1arzqQ9cJWvKoc2U3m8KfhXn1dbv49hWGUpNLKmNmBH2szf1uY6XR3",
  "key14": "3VQoYRB1WtNMcTKshraznT6EN9fBkyJQRKemXuLE535GuURtxhyyPTYgfJ4rQYqQWnoCutnuDUf4XkZqBhYby4ov",
  "key15": "XnejcKr3T7zszPhUu2zcoETSViDd986GYnRayyW4EARRbpsTwExSxTFUVuQLJDxnd1upK1QZacCmoE2HghCsuQ8",
  "key16": "3StfU67GZNpEw5kC29hRPU17EKYKPgBdL5GXDx8jWuaoTtkCh752YwA77UhDL5WGqCi4dGMGvz7wwrQeiqYYgAwP",
  "key17": "5HYs96aApUiRTXs3sYpBub4t4t9kjyzhZUk1rWnVGJSRWcEyorFdJufKCD7DELBDBP942bEiUp3t5UUTGF83KSXQ",
  "key18": "2jmirdDrGiCba5Ekx3ZDcRb3WFpXM4zVw1QRsCJ2uHMYQ3Edv1s4LRAAFy2ksYmuKf9MyAratRpP1pcRbRU54esA",
  "key19": "4Kxao1xpTjkZP7gvbF3A5hLiTcU7MGWuwybufeYL4rUo2iMHqE7E3o7CbMB5KgLkERTefMnEpJEZByLZLbE8yFh",
  "key20": "2x4RP3ykNqHHHTU3eaGcFoe8Taferm7VgZ83hTBbDJ5oYvmFF3X51BZ1X4TuP56WbgUEcpuVrydRbdM1J1H7aj7i",
  "key21": "5Az9afPZ1cNsgwL7gNth7QWuenTUthrjJu6B7Y4trGRzg34hy5XEbaWE1rmXuHsMDvVWKwxdftUkQsZDAc7eVXs7",
  "key22": "22AmCih2qw1ccKdAGcvF19kcKMQ5GYm812famxbG1iyzUUuCA7WnUwrLUp9fhqvUKhzZFePSCauKJmLdcCRTe9Dq",
  "key23": "36Yj8D6mJwkJbLxCFxtDddgMvViP8tHXjT9LDRzNEDAmJvtbML1hk137JyBgEyF5xotSNxYHsqbDT88CmGseh1mP",
  "key24": "2gNiJJCGdaojWEHL8TmCGvkb2e3aEYNGTBJJqAVBQmtqJ5WSWuoWeQW1Rvq8xp7ZKStnSVF3doJWZdpNUY2jUQGM",
  "key25": "26H4kn1jNqopkp5Htam7ufhbksUPAcchQmx3poDtfDUySGdeVGfM9ao6rroDJNNtXp8hPJGbm9Lrrqtz41VRA6zL",
  "key26": "4XQ5NDTTxenmZJAikh6ej3t6d9inJ4A6ZvVfjN1PnGTwa6HAc6rCZczAr5tohcSrDTLaqcAxRbU9HT5yHeY1Q3u5",
  "key27": "27JTDnK1eP98cc2FcerWAxM9DdMisFiw1NeoA9M2NGQ1RKSnuiFPhxMAaSFXrwsoDTzkBPNQF3YpeUyGMPErpyU3",
  "key28": "4o5Y5RbjFgtDomynw6262fjQZqv5h4vUj7EGj2NCBrBSwVPFFieFA9LHLzGwn2LyrwCfJuD9dR6VdpyXpWVYtaGv",
  "key29": "3TDAPfgT7B5vtbFRc8AdyiGhpFQSH2WgcpmyxijNfhxMcm5T8ezx5uDQRDq8SKGf842HLRwQwJxHyk9CquMjq9Vo",
  "key30": "1JscDaZArztcnpTYLQVVMWQjSGmdsqYbR9BPQHTJ6oYtrxAfSWbu1tHPBwppWFmi5Zxd68Z11LTMqhc2T9kZmMC",
  "key31": "47hpKFnUHwB2WDtLL9tkZ9DPqfgPaEt8NjQgHXREfBpTTEbdWh1iWkJ9nRpr5MeeMCrY6ivFKUTtiHzT2khWaDYu",
  "key32": "49evvzZBEz5G38WLmpW4HM9fZBTgXE8zXyiDzMJL2zo4tJGJjdYyv2PFWoB5xBhEsnBjdeMrA5F5gY2dxqtPWjWo",
  "key33": "3QT875QZ9Wa4J1XmaJwHoK5TS97xYMxejb5o1SPkjg2UyK2ZYxidS94SrbeECiqABkSAzNWiUFfPt2wGGnfWSg6Z",
  "key34": "2nffEGUnJWiTPefY89zRFKGxE6yHV5TpafTT1Cpi3znMDdNfvZqQTkAU7VhbkdHn2affaJtSNq1iPpELosBC4oaW",
  "key35": "5YNYVmrwY5BoDFW1Z6euzRu2Ho9RRdYAiS9ZYmFnUSkpY73GMDtCYqnMjrNJ8Uefb1ss8mKWWoafnzHyYANu8g1f",
  "key36": "5pEVKuBfxCJzFar1dzhCJ77qmnsvS89fJFSUWiiUi1RNm8cwiZP26rjBvcXEQrnumjAcR9tZa1AmyK9seJ3srksJ",
  "key37": "4zm1u6PDVzvjg7UzRfAzNN2qpd667NF9Looss2YYXZQG257t35xZ7mMGiSz45GbXEv5r3jrCKH8q3aZrFEFhjZt9",
  "key38": "5d4kjEBfSZN9iuRAV5GHrAaWyp8izByc8zSPydGdwkcDcJ7sA6bFiKxDCKwJXgg6Vbauh8es64ybQDBJgiyf36Q8",
  "key39": "4K9m8aqDMB3z9K9WAEkvWe6UrHHeaXAcPyRvPodvytmpqjTqVr4VN8RLwRgjiLhFGjUrLn5fct4dzqKEdU6ZT9p6",
  "key40": "9ZrJo9qMaPrqSWuB7QwcNPqTsN2SYDfv4Y1arm9L5K6trmt19zaona9gKCNZEyLothuZ5xFkTu2wR8bhfw2viE6"
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
