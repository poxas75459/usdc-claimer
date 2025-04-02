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
    "52bFFFbn1H6VvHqbhNMk9NeZ9MGALsMUVRCeJfjNXjvhM7gViEWZNtzADuqKMbvoc5ecXTv4C53sfefkJbsAF1Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKTTrc4KJM6sCgHa31qqWSbdJwpjmC5F2daNus9sRTWiDs4yrUfTtnViAVY3hB5TWx47hiQW9aGdf5SKfuFMFFk",
  "key1": "2f9338Vrk9EGyADW7d5q4qutnNZT5BnobEi3aSwFkmwm4SVtnNLHq914CHR4a5hZnCf38ziKrqbJRVq64ZewiL2m",
  "key2": "5EbeVTQ1UsNZh6CAohERnqzbVfiQ9GgA91iQWeHvu1TRoxgRop4c4AXQMovG5S2SwSUdNbfkJR22TBs3LUhAhqdN",
  "key3": "4wDTwQV4kAfhoR7SiPeX4gEPBefV4y1qkFpKzyTdum1R6d7e71Goz9qyftjoqzzfkSFH2R4A88bfYuGAqU71USaP",
  "key4": "3pjtvYAmwj3NMqRs8vBeeNbjmoukVC177SjrnEEP2fozazCAv1gjnXR8L7gQoQWLWVGZcnkPkePpyjEgbBuM2yXV",
  "key5": "3CmqJigyGKRop7L6pGyREsiAnziS3PDRumhRJmPF4jNzD6AqYMw1wwTeVMf4NiG7EUK8xAroviZLQZ5o8UU3CrsZ",
  "key6": "3A1rfdMjBMkMdarVMXaQmwNunXr48FGHt82EPq1AfrwTj9N4YaVN58j52ZsCwZ1Vuyh3H9WP5DbknxuwQ1BkESVz",
  "key7": "Hhq2WSYPvgTTwa2LqPrnHTE8uqtfvqLjqGuRRx2m9iGRKmquxCHkN1X3HVdNgqjuruZsAxXNmkWtQJB9oyv2Nd5",
  "key8": "2qeV8XFG4gTbArDK8pnyNGrXEktGcKgp6PtPVatKgKLAaV25yRustKxP7oyZfMhcz3RsaSMJoaDNDnXJGaoyTRwD",
  "key9": "4itepBkaUzuZoTR2tmqqyD5NWPjATaUgxW7SpcCBnpWgqQqSDEhHSEDvHAm8wa2txPnuZXVJUhaHcQYaYM5ukqHe",
  "key10": "47VTUZ5G9vKSYgHKC6eF6pK44XxVdNwpKE1PtP8amJtnwrx7m1hjNexUBZubHF3ukbmZdXd1kBS9vuNa4TJJpc7W",
  "key11": "4suso7gfzCZ2jZyXxDMDti8V7z1ifpoLZzujnPhnhVknTXp13j3fmbJHaZ4Xq49hs7ZNNPhc1cX5cKhr89JYL98c",
  "key12": "XuAfqg36xYoFreA32oASsHv645YMRyDmY9pHYo1FkkbKmuTe7mv4jxCaDWBkMG1v3oMtRN9kqSsrq6xqigJqxu5",
  "key13": "WTJTiZUGGJbcgY7pScD3NjgUA8ggGUrDDMpBNe68ULsSe3mfHPkrgAYR9kAZvMSHJADqDRqruJc3NKwrjbXuyRW",
  "key14": "579ehFKH1DfmhR6cZ8JPZ48QvV73WQNQoeqc8QHXG15KWRzbVFCEascM3nVb8C6MKyPh4xwjkU841xBMmNb9efKq",
  "key15": "57d3tJSWqXmJLHBhc4aMqvPgecBtZ2B8DPB9HdcjpYo85hpdBXHojDdh5R8wCCkgQ8jbrFk6YdRa1ksiAnXYqhkS",
  "key16": "62L6d5RwQm9zQoPVqe32fUCHvHmBBnDUsWVVQ45JDsjoqLHkz3ACTLQ7aMX3FcpQuacUYKhP5krru997U1SEEMQi",
  "key17": "5ewctzZEvgA1h13UwtbJhoxT8pEq4XvWe3nz8c6dUyRboeQ6fm4FKyjohfxTu3f4ARG4j866preGLYS6veBFqw59",
  "key18": "27rp4LBjyaPbz2ec6ijJa48Sw1aMYQAHc7C48BmfLT5k446wVDhkGc5LZAud3D8M1not5ecLA88nzFChVGaNsR8f",
  "key19": "5C17oCCHFBq12oZtHcJjHrqRFzmU8goxiihCtJxQSu2o2QtQ4osjkcJT2BDtFCtZf4VndSmftG1LpeQ52H3zxcL5",
  "key20": "3XJwP1dVmQT4tD9oGmCCSQTnY2cRehksFiwwcT5THyUbUaHjmi45KvCbuy7mTyC6Kxwf6esRaCaFzHXw2HzVrcgu",
  "key21": "5woZhMxydCMpqwfcwUFDFXn6nECvhNwVQQNBdV7qZA1yfZTujoqyvPARe1UAEKBDmQn9pCakd9LvMHfeSXgBNNAL",
  "key22": "5tHs3zx1WTuvZ77zsQsnNGJkANiAhTShEgrpzf4wJMYNgPhyzP8crE1Uh47V51vmF6J67rpgWiMo5Fo9kRFUHWS3",
  "key23": "52bsL8XfHBPsCnAc3KVHWuqmPgjPwA3qJEpKLRqo3pg3YiXT1q8DrpmkTbuJQpw47g3dUaftzN5YbbPAzKRRxKm5",
  "key24": "5Qkru9zaUnaVT5P5pKeftbMas3jxs5p7URo5RSFYuAgnweZqQbg6m18QhXYacswfQpQXPRauXtDCCov49KJjNrCY",
  "key25": "2mdTXoSCUwqkHh7rQZmMhuagBsv85rbUt9HBTygTfKfkwFY36PUx4LNU8CYxU3mQQZD5Ch9ZATesYPiEvceebEgM",
  "key26": "2yEbyg4NiH6o2y2cQDxxnUxusditx7MySpWsHxUttwdBndagaUWF9uoFCHVGnud3crjtz6Q9kmF5TXRnxLc9Dzm8",
  "key27": "5uCp7WMuS8pEFRjojrY4yyyfEzLWCtuyGP7t6Gk3QpTyExT7JMMkcjccuwfjcENNM5HyNABCAPZSeaK7qnHissQV",
  "key28": "24NYmLmWsScL7cyhfvXi1Uji2KZyufthshfgx3V16wuL11ADzGsgRiH3RVfNREr3snT6qcqhtXa9gfqctkrUkcf4",
  "key29": "622KgHNDJnjqidKKrzEjRhKr3DAB8gCaYRmjeJhRVnaUEHdGAdWu1yjGGPsGdX5zTLUVPLBjLnMT8AVjJSiX2MLU",
  "key30": "3NLGGPS5d7wzgw3CNrEVY6c5fpm1PxMsoVUY1A1rBzLNDVzB3M8YefmWW3hBrZpjDokBwCP8YneG9AVLeM7PoZ7T",
  "key31": "3kB2MCC72WfE6f61C5KeKi5cyEdd9sArjpna2UprHbyVGV7hvmSAtxH7haVAeqdPEdoTtxFUgsgbMX8UsBcRtyUb",
  "key32": "24auH74CNdZKXMQmXNEKUxmR36NH8FynMhb8HG8ohSPFRK8uCJsTxh4EYgSvkpvapYjPHXh2NEo2kMUGo6HrhivL",
  "key33": "644RFTBH5tUN2CKG5Q4FTrewaWGcsvUVaBGpP3KGrsYty4s9FZHa4TKmqFfXwPi4S4gXo9TGDwxrKusMACG2vfrd",
  "key34": "4LNAhGqiERQV9DRKz5ZuSb6gNzdjWduxmPrkYewV8uokPurH5LhdJbTBqXVjgbuknk5JnkFb2TcbEsWJFiyWpPAb",
  "key35": "4fZcFoi7wmxSUzZCpQF3HpAp3U6G7yJms8m2qZQJypWr2wYtaaQGmAQQzpwYVV9AxbibUDC66VevvefAwQCSj1mL"
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
