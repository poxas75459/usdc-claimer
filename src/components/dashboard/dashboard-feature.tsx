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
    "67EhTAi1UTuRnkaaZ1wAr5bV6pSVTrNjGtKdoAsNQtPKhNSx8MkZxGRppUGNVvmq9di1qsXi8sGSp1PfnuxeFEn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGNi8Nf2oCMxqmFYvaMzzAY1GJcVqZAokCHVntz28WCGvkikQpUiQ6Pq3Q4XiyFUqQBe3jyKEz26mFv5NbRB92X",
  "key1": "2oVgfBzsnsKvwm8vn4aMjmtCYvgPxutSbnDsefNMHtQAu2RWQ8cUcGrs6J6qBParxhQZZ2F6gbM14PdXNH7nYag7",
  "key2": "4J1q4guH9WuoBytRai8Y4njrC3goPLcqstEYm3CeUiXB6FH7LnY87aetgvMooANWntqM96xtZeucsGT8eVtVHjTZ",
  "key3": "41wWFpwStj977Pw6TY8ah3uKckxU7zfiJ2UrS7RvXaHuDPeobGUQDDW2aT6H2LXi1FjgowCFumjEghPCNLYdg8wP",
  "key4": "4129rZP8wtXsWSyiwBjVQMU3J3pRnK1Lw2tcsnzkxGBzFtFzhQXE4mqEzZEX5Lju9bVqizuxnebEG87gKwAsrziU",
  "key5": "2HHC2ncKSuZnTSg2sHJ9rqRjy5oL1US1WgrdsvVD3czzbaS6yxqQoa1iUGDebYMphD9K6eUYrphuiqJatCCc4nLE",
  "key6": "cJCQDtk3An174DfJZCBWat7FuP4b4ZCDi6NNEMeeZQzmLhZzgtLehqPe1QeEBYVHZgeGLXYp2XJfPjDG5jd72FA",
  "key7": "Mat91mjpacC9YAUCHaLbu2FHhNQ9aNfNLNrPHi1yjrKLA461UmneEMGttLRoxVczVN8WkDcy9gRxAcDTqjLGCwc",
  "key8": "4DdZJS2QJGrG6DvizsSz996pCVdpnNNomUmgBqG1nfeLDz6rdTJG3rgrxCdhN69UeqFzhg1UrK1J5RL1sqkVkMPX",
  "key9": "5uxcteEMtGgmhWQGxtJkussACUMPF7TcGGxXsV4QynUMjo7cdcnVqhseKgGZCoXcosxDouHrFmyouA2oMQCBTQPC",
  "key10": "5DHLWkgP2m1VhkoXV3kwSGVkmBy3VUjam9VF2M2cbxLvguk8TfTF7RqQfWE6hCKoKWD3jh7zR7upy1knSkJuSTiK",
  "key11": "4PDq5DTvNREoYeYiiKmBjZnouUJEbpN42uviQkmTxcqHM36k3HbVWFPY7aS8Hq5559xoPuvaq95JfXWh9hkWPmZR",
  "key12": "34dyZvwey1QuHHSZG6sUMG1aYn18UzuGMbg989JBhyB8hFqyuE6xHsprugVj2FiFyPK76h4nwMJ978HKmFZgu9Zi",
  "key13": "2JbRE4kvBY3qgY4hoZk6h6KEjoecfXbj7d8eg9HdGSTgtTC6ZGegv6zfn3Kd9wD4UUsd1SQTViPMHkSn7Hz7U9Ry",
  "key14": "5CJxqpP3MmYgGF6yY8oZMhginqdWz7iisopWT7kCNd1pjsJxK2u6LzXezgSbFRT13XjPDRG8utafA4uXHCHyrJwJ",
  "key15": "3hCznmQugytjBQJEn6D7DjTaw9py81zU67e57ybTu9nCLLbL9KcKhLosUkZ3HenGfP9BbTDNWZdSAonLSG5Uhox9",
  "key16": "5tf8a9NftLEYeaDs8r9bswRkdsKbGqyBwwTJXSN3gkHMZpDZhDgBE9qxXERskPjm566UotUxm5BNWrEmrpinu7gb",
  "key17": "3rbktBQTbUaVkVCGALdAV8XXAsEm6H5uGLP4GrtKPPejPoHPeCvgXVL4bHsRSKveP4NGNmARLJ1XQ8zWNeK7vkLE",
  "key18": "2GJmfhCAzV6WqxibjmbgpdMDRqgENFxPhKVS3LuF5MZ8aspSWvRSJ1hwVKyEP1AdcRDT9kTVBwFk3rSraXxmono9",
  "key19": "4KsWEEM6XqzqDnHRGbvdP2p4UDSfYPkv95ctX3Tjsa2igLSRXV7e1YYzET4KPiJnWTQWHtJbdQ4ENx7vRGUtCSsP",
  "key20": "61BjhxDJtk5Susq2mvYHLQTTtKJfEeDXW4ExNeKJqpGs576LsKsUuEKKXpzR2HktVBoGf9GghyCngZ9uY3KvFzdD",
  "key21": "VdS8XJBH94DTcy7gg28rV753twurWHp59Y5w9WdRXpnsHJYVDjdDYtZ3YqQxGHEbqdD3bzdAaHYZXbYrcCpSA37",
  "key22": "4i3yimcJPoZe11N63nNKFxxvknXt5nmo6Y8aGje6BHNAyCVpFqXns7NGnFWYpAhFuXndaJuvnN3KV78RmLwwEvMA",
  "key23": "3bvVZU1X3Wy93eydEcLxKmf3TXLrnw3RdJwEUVaBciVYHcVbhx3ijXYaWgb42m8TLTSjELKDRhX5CzVciN5ZJbiN",
  "key24": "3wDEv5ixt3h4kAn8ZJXwhj9Hjj8mC6sjdaHeAuYdskjTJoVigmtqpYkUZfbRWE4W1gjqhP3hYcttmM5FNYznmdtE",
  "key25": "57Q1ZgVR8NmhAXpHL78n4KoYX2Hr9rBMmtoF842uRQ5bRCrfFXaBpjJL15HEE1LVt3mzLBUoQvt3JuYTyKQa4udo",
  "key26": "4nQS2EhMiEMPDj6frWAxVbZwFrmsFr6rAvo5kjeUmNMXVjUpkqnotkYS9Yr7H54dyHgMAtYiy3pLUwhFrppXQwnc",
  "key27": "4qYAMqnv4pFyyPrNMTt62nSjoUF6gfm9bmtVD2EbxhSpf5Q8RXqBXRzMr22mj3eUU4pvZbbLkKfkAR2BeHGhDYQ4",
  "key28": "64ciRt5oWYdkMUh1vB4MkC6YfLoQnunCHE4rsTaeCKLDpMEZZNA5YAy7BZDeX9SmdajiwpHQ2cXUw9voAn3oUGyX",
  "key29": "FYoKtN5fLw2jZFj3hvSwii2LE3sRDVGsZC4ZCeHmawX7xSRZ2PemHPzCdeiGo7aCcPemt4PxQNXxMmacaQT9dLe",
  "key30": "Md5iEhMKaZaseensdGPQJ5zvemYrYpSLiUSgbhMxEmajETbTfsme2ojNkNviwNU6112G8i9XgRjdktE47oDAopi",
  "key31": "235Fynwc8BBZe5iHk26gD8pAj1tonZWM9Ps3ifevnEihfEXMGbyCoz38ZBQnyYVdiPsTeH8Sa1wrQVhZMjRMhoUZ",
  "key32": "3NVEnKwbzaHC8cnph6s8N5xFFmNgcLj4eqhEUmdV5CQU2CVJF7VH7usLNkB56V1pjfsyueyDTznyXG5M6acsQEJH",
  "key33": "54MYcXURvjix21sia2sg1iddJynQKZ1Zowdsj1LkikhocQw2Ubvg7Dko6H9D3wREeZeBMYuDn1QEf9z8v66Ae56j",
  "key34": "3nU48UPp8Q18UySbFKSdYkd5NjMhMHxdeBcbSui5UgkvVG655Uew3PsqLeLjjSPu2BH2S1PChNFfcSsSfbkqiF1s",
  "key35": "2xC911TMQjkTh3QxzmjfyDjrjTdCPCbrDAVsXj2JQgVcqaMuFPCMRyzuhdwW1es1zF5XsfysswfwZ1sY9SBKjJsx"
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
