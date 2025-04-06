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
    "31g7SHsg5kyuDj34XYjkCHdxwRKC1DYh6iKNmNw16keBhPF6XWiZRxqhut5EvK6xxy9qdkTsZPysHpB1ps6Zzz5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McnJwYqu19XsHarYLhDpSbuuJynEBhtEGvKJDj3ZwSmH7sooEkwfo94FxB8y4TZMk73XK4S88qqXAq2fhhk2d86",
  "key1": "5hAJXG4EDnw4UqR2QPq2zHSR5aT5YJt4kUTjxnkN1kpioYxuiZe84oGY88gEdxXEeFdnEq4L3ihS4hpyyCnCjtHp",
  "key2": "4P2xZNdqmTWPyVfjKmRnwkKr7we8woBbotmD9cF1TjS3bvWh1duBfiymxepBJJXdv3Zwo5U9o6aCevBvBRcmB1Au",
  "key3": "2wWokTQCYyTUWR8qPDsq5YKP2AUUQs35U41pYD1Sk5ScxnAgwnDCWtv3SdT3ayTSXBhgJgzaWFg8czCzXG8h1y5w",
  "key4": "4T9GLehccr4AyktzRnDgqh7zqXRaWpu9ZRgLirymVC7xfsSM2keupq4ZZ2z4eEDGs3HsGa9vH2pZzS769mXGoY4U",
  "key5": "4z2sFVWcpEQViu5N8kDcsvWj4BXQ5Eq6H3f2QhtNYSegTuaK3XHpATmzWGnZC3SyB9qi6bMXd6HujsLFJdiWC133",
  "key6": "4rJcBz1nuZfHjxaATM2UiY1C9Pk6oNVbWXxaAJZ4hr4QqMS4rREjrzL1LohxQHUc6NtBbp4DM7CGJ9t2CFvD2XMz",
  "key7": "2MQA7qK4VrFeJBLHpQdAjcPjxmfjQCe1T4VCzyDk6KEQwC7yrFKEgRUracnvX4ZGDQs32wh1uaMVHMqMyr5n8dKA",
  "key8": "41WAw3EewELgw531Z8kPrNSEF3t3PELvpAxbuRuSncMtZ63Gk6VsPUv1iadpcdXdAULwD8ECyZg9UfCS2rdBWHyk",
  "key9": "4t5EXemFXpQT5LoykZ1q4nGtzWkN6DCwoKxvbwT6VkEG385xKrxQB8iXaZL4izSGaS5QwB3MYkidF9i3sF114EEi",
  "key10": "58oDzRkqoBceptawLMp1bqdhmHyoiVPSDeihuPB9v5TeJJPH4U6EANZwdGepXV1S1U5GnPnFshg4sHq6ZntWWV5S",
  "key11": "f4QSKhEDe5X3naKRy9Pe9S5hduB9kR5JfXAPwCZxcX7ipUJgshXpfkmq5mcuuFJujf1hYwRfDXYkm1BW66fdZHf",
  "key12": "GPSpfzH7uDwPsFNkyVQw3tDY2ZMjqRDaKccavq1ckYdx39wJFoD3MZaDTEbnt7iTrewLP3q5dADCUFfg4qSG5ta",
  "key13": "2BeLUK13BB1i3auDpkNdVxe331dn4wiWSBR4w2uQTX4keJq5rjoBZNaKkfXjeN8quAiFbfjTLAg7nGnSqqNN4xvC",
  "key14": "3zrrmCM14J8xm51YrQCLez5T22bFk5KdFaf97re17xim6YwJH9SsH9dxX9zEPY4MCnNHaiFM947Fwu6VsFBtjyZr",
  "key15": "2uG5DQa2T9v8Y2YrxosMdpnT4h4x1byYJLTNVL5uR3FRL7hiqGEjaxJPUGuFwc9E9qQVb3bNP6f4Gygbgw3GD88u",
  "key16": "TXArTKAtyFkxAhVwyjTgxw9fZhKLLbwrWTYdqyo5noVwyDoQoe7oeh3e7cCBTahFZFjCCSK1Wnnoe6cyPT9D2cH",
  "key17": "5baGvMSC7b7MasRe1sZCpCfGV7EH2SpCDm6Z1ZqkyB3UHL6HtBGzRNA8bKzoxsmfxUPf6rQzoQiRzdB8FGXRGfT9",
  "key18": "3CPQZ2j9uLfvR4eoSSK2eyAgnXcntgCo46CJDtN4mYL6eSCSaAoZxGHidbCr7qoVvG85K3p6h9KUMfzmsCjRLWZf",
  "key19": "fHHoFe22L2sFf9T5gzcRyfZDoXtACQ4FojDFNaEKCz8F3Wj5qMTjbF9dX1s5Ckz38q8SieLXQTwHPAcMHZPJfqb",
  "key20": "3aswQanXdzyz9QkiLS55ypuUCeeFSzLdW4GeWBnfj3YU1UUEv4rra4YDAJZ7fPqyEvWL5i37PBdCKX2gZKB384hu",
  "key21": "3LKaDgjoZi3ruPm8y7JFLH1pbFgxWoCtm67o23EZ3UdvnYzomSyBc3We8t7zHk7dBAEYi9c5ETYNzNgYW7D8azXD",
  "key22": "35bJQvXSaJttdHo7Vnz7U8VJ1hjemaTr6vn3FXGXpPtJYkwTEVD66ciTpjq44RZ7EiMeM8Mj9hai9uGJJQ5hbWRz",
  "key23": "617Fmwkwo3S3gkekXzz422xcoxNbrdD6RjDBfhVp5eqftAJ2hPffKkiV3QCorwqZrLsXDBn3aeBWbsfhpLqbPhdq",
  "key24": "3tcjjckpB5MwHL99coT55XCkYfbFcW5vSf9t1gXy9woZYHJTVeyUCqBfvoi1gnN1WgodEB8iiB4bPJHRiCFErouK",
  "key25": "3BAe9iYwnkE4dHEZWc1htqLh8ap2opbwb98wTpfTPbcv7w2xXoWNnve9Qm6sBRVQPq8GVRAQrpuVdHHAqYiF6B2G",
  "key26": "61wM9LVodDbt6aEucRzcFfRcUqNZXhBu6PSf6q9tuVDsFjoYRSUXm4Yxt95KZfNSY6ZKgX9gCZCp75dPiL3Dig7Y",
  "key27": "69bEvVbdhLGyQVSSPmSH1UfgLHx6PQXXVWUSusewP2RheDnMooBwR4jBk6Uyf9eUUgR9MVkeCmPxa5zxJXrRpFK",
  "key28": "3XVeQjctWG9CgjNW7zuiA62ygCoFA77mFayqPv4rdRd55vJdVoNY1YsYuBMiHEGA3rJnitEPKgMWQEUYZQSouThh",
  "key29": "5JfrR8MXxt8RDqUwJYRDY5NT2RjQLVrfuCqr7e87GffR3TCR5AgWpzJcCc9vGCBRnzK7qsWz2TXhDLcTk3PzJQQr",
  "key30": "2tcwpWYJS1Sor3kjwebbFFGeRU3hsWCmfRa2c9F5FmKe6yYXpRwHjv5sU9NTA4da4td6xWT6tqAd78K1nUAFU4m5",
  "key31": "2k94VGiLqPBniHpwL2oZLVskWMXCxRwm32SH4sQw6vH3m4es9x3pThin6uw9J7fFAM1PcMxGodiXjLbWqtoW259c",
  "key32": "2CyUbFWwwNyJdCEbHQ6PtQWg5Tfbp2uKXFctxJewxLgmsdAdH6AY2keLAGcBLFhFmPq8Mfq8Spi14SogBhknDCFe",
  "key33": "4vWV4Z5CjhcbviLQoAMgepCTWccFp2jEPpqqHTbkWLyQaMf4TYmN3KMDEJ2BXXUsRqRHNh6V9ELaqzUqSXXa7ssL",
  "key34": "5HH4qpgZgxWLxNLTCViq2DMuUPqDmqcoZD78GvCGynbxGNcsXTsR5uo3TsZ1y8vuejHpa93sqATcEzmBWpyiQFU4",
  "key35": "HG69VjU4Q9Lgsurz1bpHvTo8Qadjx6PmZvQfFAyT2WKshhdDhMWUd9EVqpjdqGh3zQJzJzyGJLBWM7Ys2azvdMt",
  "key36": "4gKf6uDk96aswRXhx4ekJMz9kP4DwQtpJtsebsVZq93ASBHYCZjtoD2ZWfKmYDE3n2UT5S2dUUTkc8c52KTh8oTd",
  "key37": "5BAQAhv75qVwh1gYeeTUB3hseUiusCgfACp7d7uy7NrGuijm4QgmKW4fhVcLGK5fz67G3tbfr4yv1WJQLcvSTyAG",
  "key38": "4pDghLbESPAT5wyKmpyvFvW6nAkjVQuHq5dEwuxrGBX2xxL7udoLYWeY1hEGKbKdmt5WAwoeHTcBtP2pSLoKmjy8"
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
