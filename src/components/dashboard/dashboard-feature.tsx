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
    "YhhH3B9v25q8LG4xrzdHZHC2yAXRu2VvbLu7566pDLw1Q22AT55bRKz9ZkztULU5DmnVbffttDwebe8hmAMH85k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPvebmi9PxLryXxR3sySaAVFmxhrQpBTc6byToYMf9j67CnMwqAEu9xXkGbdajWYwtuQ8zW9H5ojLtJvGNJuGF6",
  "key1": "5d6RBA9FArMBXNoMwfALgcLj1iTvShHvQs1k4g6gFn9tBKcfXmVQXFjPwoFMSvoGfT9qhPfvjHEAce64HqddcyBf",
  "key2": "4D1CZbawX2h4tzg6B11EREzzmvscQ4aCV3XDkRLRkAMtJyjZJ17EogZV3oivqbr4d9Emcn6moDKjmh3pAy2RRZLt",
  "key3": "2MaXSG6n7NS1iKc5qBh7H44P2YMA7b3XGwPyEHctKJ4fneN29ch2eZF4sYsBtrmKTBG5krSsTwZH8SqLMVePjcYL",
  "key4": "gi8dHQRBpYhx66dnSAtdRGuraUuJoHHDiWsdszPnK7Q5BELEDg5KV2bBfwUCw6ZTXzhx9fNvc9Wut9G2KpzrH9X",
  "key5": "nVVAVEDz63pb5Wmc1AHZr4MoLAVVRKXvtYumgUGnDewFexqNanXbRAXExQNEi8G6cZnfc65F6f5wkYbsCP12SYg",
  "key6": "ajoXsCA6RgYyePqJQpAmUPUuhrLKHtBUxvmJHCoWENfZzaMH6hHTipWLJBJuymD6MEBMMM4xFGzgF1JWTSPmcnk",
  "key7": "3JbkkvaZurU8MiBS8B4esTnV9AAZ4ExqrvtPLej4H4jzLLN25KUPgbH7TW3VJRzVmJe8hvcJrStDBRw341ufoacw",
  "key8": "jcU2hBKsoamN4rNEo4r7egzmyK1CeJqdpSeZrodFuwZWFQQ6jThdKJFo8tgv2BKdXwnMd1PmTbfYs2CnmcBbG5Q",
  "key9": "3nS8pJ3QLUqRGaGdVY7an4cwbPYL2ETsmihNx2bPKdabEGCyccVMzzTQwyzTzQVTi4BLLrF4xihrkBnkW1mHvSAd",
  "key10": "j48FwqFT7LQYvBet6xU3LdQcKVGN5TdgUUXeLoj1WLsBpZcfgLKgGYUX5oANRiWKrAGu8czLp6LYNe5AmnPCcAw",
  "key11": "3xvJ4e395Dxga7JnRQ89ZBSoSXRkBQY2SGubjY8j9JEHwouxdELVKYi3jpahrd9CbDi27B2LBPGJxv7epb5CuVXB",
  "key12": "5R7sVu7Lzm2cV7U9bST6FYSUGARacfG4ECpx2G7VYmCPtPjkoFMcFyt86tvq5UX1VeNe3VAQq46EF8ocvVVk1QmU",
  "key13": "3ekowxXRg7MZRwbCDjtAV3AuzhLZpNvhMNW4bABkiYWUeobvWDhHsmMGr9cGVSohSTBH21fZaV4ZgFDs4xTxU7YS",
  "key14": "2pHrwVoCrhXfqzWLz6FWR6usq42TBiayDv3pq35YPUgXH1hYZdtJJQDRipU8gDRYPkv3SFD8raAsMdcMpqtvvJft",
  "key15": "5yV71hGEMBnjf6K6u4UH5GmU59shqqEq29Y5cyVRe2bLBFCECdGuEqDrEaDJmaStCcvtgKkEm3bHoKyUbTweTTF",
  "key16": "3xvBnQTvRffmb91nc8UwTPAokNmNSkRn1ogjiLiBxhqnkgoaL5vPniamQF7aNhQAuvo4LWMMGTSe6xSFXu1c1uVG",
  "key17": "4hwYsuN6Q48Cv8JBGwzRqWBEFALd1gkW9qmnt14YzULUdMmDtHE7qxw1UQ1JXaNF4SuAf7m2LNxqWFfWnzLSYjmL",
  "key18": "33HdW2sk9yuC5wHimUDaNzzDBF7DoexqQK2Y9qv473jcYALbVm3EDYYn6PPrn7rjTmFCLifcUxNVTwTt4mPxaUZG",
  "key19": "kyKuLp3wxmzmYHFX4i3itjZo6ZSDhXMt3MrrgEYuKDLEvmtUJ7ZNQhpcpzgzruNgDBunoT39cBWLfN5EYedQGqv",
  "key20": "5BLzdQs1NkhQUJMmuz6RDsQx7E1B5AJW85rBBqhm2WRwP1PgVumkxj2mhCvw7Xd2267iFAnjigDruLuzwqN7D6nf",
  "key21": "3CWgjXLcamahhBSzHZ3fAdGwpNbaCwbfNaXwAF1zBky3km7K2BgpZjBt8VQEZKPi7sYRiqBwgTp5oBTf8pVszKCf",
  "key22": "3TnVfo3NowBak1DAqSVMi9n5qxMHQgbs8TKihhDvZWK1etzGnWohKkZEuvZ9cMzsWzYfsDjnJK5ionwuHBkujZAJ",
  "key23": "7dmhghGKShHbpWGTa68LdBSETQPQA15sXdUgGmMMxn9NNVTjR4ZWMBUj3prM4W3th5ssqC9vZR72zznV9CZZBo5",
  "key24": "2FF2eDrTHiU8kCSWVQ4XEpCQqGiU4VgvGKS9ujnnu2Va39SVbzFLBHkZA5DKALhusrDj5jrN8h7rRKA8o79i5Ty9",
  "key25": "4JZ4dLPStrViFTSjaUkwoCjZrm8C4fk9cxsbWgF41y18SALD6fzE8tCZFxNqmJARY9efyDJ9LYLg1eU9mmWrg9kz",
  "key26": "41BLBP1RcyjyuG1o1LFtGPkCftE2p82wiF7eu8qR7KT9JzFEjFa6dVgPMtWxwaqon8XtjFcN39oQgbrPZKtCpQZE",
  "key27": "RQPdxhiBa7Yw7WPDC7dehZAcTTqKaPKAWna4kyf2Mtf5Ee2LP1kS7nugBX8zeWFjcoY7ycc1ZsUQCBQ2iGcX4Qo",
  "key28": "qy9fQJYjqmnb41FyA2Evnv6gARxCoysWueQodcbSndyfhzRoyCaMrUwCGVtVLMhd1YJ75RknMYoqpuj3KFmJjfT"
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
