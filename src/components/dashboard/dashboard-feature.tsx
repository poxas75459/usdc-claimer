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
    "5qHPKaez7NjZhxkc71MHtNtNQjy92tPv52vTHjqqp6JVMKYAhnhiY5ac7UDYesur2cZsrN1YcFE6YvqXfohiTc7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdhR3NFrhtRNDc9LTLtwJQre2e15y3RL7Vw87DLQ9fZJMKG8V4t7dDaBbmZDJ7mDjz1EMRvEtR7WoT5uLDq2NcT",
  "key1": "2PdRuu7a4sXenmViP9UmBS2sUT7YHAn9yUGQ4HFE3V43ZLftTbdtJQYpvvYjCx833F3hGG9GLPQu8QopgpRiouVj",
  "key2": "kuAeEggWGNxfeMU6Cs7znQj3RfaW9onYmcNzntP5UWNnvqrEzYDnTfAxHe7Yo9EGrsanapyzzeM6yjLsFXyhD2x",
  "key3": "4RMPAvmy6GKdUMepppMrStB6DvH2Zajaz3KgZvxhdFAAjq1KTRrdck3TMsZGboASLsHQCuaV46z2ZiD2bsEqRBgo",
  "key4": "2cgQ459ipUVASo3uEiC1xBu6MheMYgrVU1493vWYrfaBtQaDdvkyPFmPsGdTb2btuFRZQRNwtHpgwq2wQcCJWje2",
  "key5": "5mAJ8j1zfveYJnJnpXswgrmEUEbZ8r5gTRdV9aSq11ACtD9M1LuKHbP1u8UE9X1pbhwuYjPRWybfzpVhEGABbzDx",
  "key6": "4K2cMq4jYSRbGWQb2CMfF79LqyAqZZbXM6SwjPJCXsX7TCs2CR5pvgpEgCYzYjegwJERxs2Qh5suhDfjEqYVjhyE",
  "key7": "dFvnfcCDcBbMDviWfJtv93xEZxScYFdk4FGKJRw8JBVs6QU99HL6zxvYueTiL9jesS1VhsSfwbqTk2CwdsEjSp7",
  "key8": "4HLjVuoNrUYzEN9a4GSYmE2Ws4ugEXS3Z8x7bBKFGjT7bFvmVrYcNKP3F3hGJHBCpWzsekfQqpzmDENSAJAqp3Wm",
  "key9": "4ferEKZ85xqyPyiUHdSpafX2fuL1h5TqaSC3prTV7J2uPTt3e1cXPkAvPxWZTcGeji8bQDEdkJde8u7rRMRqYogh",
  "key10": "3ZQiS7Y1e1EZSXsp32SziXZpA17LvczonDywpoiiBbDED1zCZBWzNo7fshhNK2pCCNto3959C76AK9qjntu4ATWp",
  "key11": "xq2ZRwbZo2rd7yf7yw4StkGpqxmvoVAKM4fD33fX6R5VRP54FetHGMcnfPyhRG9Ph5xmeQXid9bmWtajfzGKrcv",
  "key12": "48oNQEa9SrM7WMeUJhQkaDopuUrUCCVVACL5TiwEzWZ2mm7TiMA3ZfrkvQiHNf5Ahh2rgtS2zy3EpmRxXM8UKDbr",
  "key13": "54oFrnf3VfUJArqkRD7ACE3TU9Mh4fgbHJGruWxS7NpocmuvGydPiVQPizJnQQiwL9HPHBgEEvWzxwxjefgUZMJK",
  "key14": "XvRFQNfjUchesa24vSTBhpGXRt5WPRQ8zcS8fb3Q51fBvSxoXw5DYbWZc46PHo4LELwDa97L1mwXQa87es8V7qS",
  "key15": "52PM2cq87DwqNHkcf2jSLQ79U3kiJkd3xTf1gcKzMzMp8Ys4hEuMcZkr7E5b2FwaqhmGGqMzLTkyCCAQXUqd8VEz",
  "key16": "5CHMgoJEgyc7JaxFRsjZBEQLcHfi4XJymruJbiSyduNpVkZWYhnnsgGxCAHCU6MnPKW9SkcDne8kT8H6VgpjduBw",
  "key17": "2gkkC1wwooWMPaDWw9W5BCfU9w8bVEBPafQdvZyA265qHChH1AsrQFvVh71dAtHJWhnNa5xfNNfbAoF771kvvWMH",
  "key18": "56YbRKpezuNWz4KZwgXm3DdtPKoaYchmB5KVcUVy5uzV6v3HMyNE5ZRsTc84eVL1QLqdaoAk1PsWfi1JwkWDjuK9",
  "key19": "3Qgm4udQo6uwUfdD9DFNL2zT18SQi5j9vuPXa7yxrdJMJPRw2iuU1JNZhqewdQqL1hbuDzn31BYR6vG4Reojabjv",
  "key20": "4Lfp1QnwZ6TSZxzsX4sfZYdQRgTgmSQGinV9A4i5vuWtrHrsHaT6Lv9ZbxyF5heV32b9E7DSLQnvaxrFLFtbaeLo",
  "key21": "51mN5TKmEFhSEHRcZHq5WB3z4AuTCUbujEHjeMQyUd2iRdYrcgGpPfaUktR6nXC7PUH4weJ5vG1uYEf333hHzCAK",
  "key22": "4fBEcv2mei2iz3F4td2UqrFNJrfhmXLhj6Lg1GTSn5AYrFrciPhC5J4ZRtcJkJuFUz4dEXWHN13UYyBcbKkw8HW6",
  "key23": "3j56RbhW1Uwo5eXGvZeYZqP42FXVH3wx1JwXzK1iojjvnTNKaFAF8LMeEtuAbKVnX6PfnJHkKFwYJNhJGLLeKJrM",
  "key24": "2AMBG1NNCPMGjsjRmUJB6iQxdue1SdtjHbE7zWYbAdkwNyDzhSCK8UduThBmYpSwk2UgyMn5MLhfVgQRjBofLU1F",
  "key25": "57RWw85zD4ZebSBo4WbeRdvCGE5UtZAeQPMbVXokXoUpvnzVCsXd7tWYBj5nyWTWRi925BcHYCL5B2Rdc2nNadLP",
  "key26": "3PkzfaidyKELAmC9L36aDBkYhUWvyazBQWxneVVpVctGWW1nmwtjXgugsnqnBrgt2rLFDTF7dNyLYDQ7ANY83cdD",
  "key27": "2PYiEr3GiPRvwzV3koTpeZvhpR4dCakECfnPS8tqj9sAD4JLCxsWNvo6GJRAU8zmLvjmC9AZj8KjfRMGGHyHpqvL",
  "key28": "32TGFtnkWYysiWYJxfTj6deKDTRpqeGYBjXoR9Z3oKarC2DNAtRz4FWEbWc1Mzd6BjfS1dCAVaxfxbPQTgxUHHko",
  "key29": "23KWV8Up5nPzHPCrmRtiZsqiauyDdCc8L9YHeYUCHpC2t65goX12e29spbavkGhQP9op16jJ6aQRgfsM4Yp5bZvk",
  "key30": "2JqpPBJvxLNNeCgdwsbGccsTmFBRNXkPCg7BUZhzTXY7Hwx83qqqp7aPZjP7c3vPfEbxc4JzVLmE9CrxeiJteeHY"
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
