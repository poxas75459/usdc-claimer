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
    "7GhTVHoPuCLGLTSUqw2eGPXvF1cL1CgK42MeD7hwNW5TyTR27u8dV3g5Y8QjiBsyZBVqXfEVoG9xn6Db3fj7Sd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EcLnf2ugnrfmnN1iN18e4VkqkhNaqbe9seFRda4RUaHXVFSAJa5KQ9nbQLaMAzZmbuZCdj6CR6SPGuNtHvwtu5",
  "key1": "25T8FyDrUJxbgpGCA7hhsxTiVVxNsq5DaARoWMkD64oZKJ68VbL4k7idzPQXTtMXUrcqgMoHUuZyXn1JaJ7CzyYW",
  "key2": "5ZYi18wgUoQUiBgKSpcyQgKFiRdXmVmDnZ9TSazqVy3J4bPSfy7rYKJAQPuRvAYBY28WV5zNJnDD45RK6WUUVLvT",
  "key3": "4aHhM2uyZwqx8JkkhnzEV97yGzb8GXPCqcxR6ddae7nfTs7auw739SsomsDzvboM3obhhX9HF3NwmabRmucuAL8n",
  "key4": "Bx2f8syUV8SM3aKGHUiN6PDtmCnfWn9kzesoTyNmAFHTACKogvYa9W6UW6FN1QeRnxSziMSRDy6kSK2d3FnsyK6",
  "key5": "5GFEkwJjPxiJJ4o9t7WLk52JiLeHmdbYnhcSrvfJ1NcMVpR75EWbPe9YV7VVN3UfUa7nnjUnXGSNyX8Jg2bzbryz",
  "key6": "2qAUXG2Z19NSjq8zuLkgJmKVmQZAuiQCTDkAJ9BjbuhgPUVgsT4QiMpfbwrxXhJ8zYW3heUpFxsPs771L9YqcLWk",
  "key7": "3DMn7yCAXQ79EZU3kWkN88camKKpoj9XqbyKwqpjhmdKGGTpEcgoWr6hEvhTzXpzCutQmBpwLs8NBTnCXbUp4ZdA",
  "key8": "453M7c81hcYvFNMQniorrqNWEkEWEFRcLt6ayd4VBY46moueJ5g1Puuc3doUg4S3z2Q6cQT3bJmbvRdXSid1cCNr",
  "key9": "4si5NNvxZZ8ZosoucZW4K9BoVzJbxn3SSxT91YzRjfqgYYZM7TJopuMUegdtTNAoLyLP2Vhw6fZb5ZM7ew5hujJU",
  "key10": "4B45x6kXkbg35aqdQFwYiuQrvnZn1jEbzbf7oJAQbtA19zSyADGZPTKASP8ZyuB5gLnyTH9743XU2ZJ9Ei37Z9SY",
  "key11": "2Ah4ysTYR2RsV9FNuhtwA44R29bDmjB6ZDUd7q9MQgjZuU2AdNdLSCxnUMgmG29gJ7RrQv3aueFhq8bPRcuiHjxj",
  "key12": "292hJtpmbcTsqmCfYvkLvf56gQC9Bu1HvRewkNJngdJVV55iavkE9PH8Kk3o2oUx4DqUjPNLCZJDgoZLHo25Gwmg",
  "key13": "37p5yP4UmngNjnN8Pen1Su3ofgyKLqDJ3du3SMAPbKNwbBeZFEfLr7UzvHmAJPeFZLG5P5MayXAVQ6Jc1UrbAGZt",
  "key14": "4VmxthkvsAudoZsgx3eHrEs2XWU8YUMaUQktH6jJYzK1pyrzNH5oxyuiLUpRUrLwBMAHRmaFszjnkkJsxigRFDxe",
  "key15": "3EvFU2FkK3Gw7nZSFmBSaFSFTUdSLgHoSAAvmRpAw9vPK84JMYjzTzp13jHzn9NcdrkPLNUxEi5TZoteprYHx35d",
  "key16": "4CiS47rQT3sXMqYaifYKjMHDJqBQtyGSRBEJnXdC8fSwf7rSKX4a1N4SDfcqRuGE6xi7oFjKpK3MduQ7uA9AH1WZ",
  "key17": "WTNEx6r5yn1wVYU5tua3F2WQNQubHHVcfLCQ9Aqn3YSpWdmtKpBB9w3PJFcSbFvMGXoxgxDnEiyhoUyNwFYVD4p",
  "key18": "F9WsMXJQgcieB5BHfXiYxsqqcqKSFAMUqZ4HvpUGGYVfwdpyVh61dqXUqxscPWrmJGLisvsUQ6Wy5iX443kqept",
  "key19": "4mSVnvLjEA53TsWtEVEB4CK5QQ4Bn4mvww2gptpzKqasaQHzsvG5v9d6C2cfQMhhuTBJKTmAER2gU2wrBnmGUYDV",
  "key20": "2J3CrheSVQkAQMbZ1jFQiLhx7muAx32kZXXAjQrRJfCE47WqX7hTfjefZ2ehttb5RDrDHHuYJkg6CYuhZAQ3F4w2",
  "key21": "4q1BMfCLTAMP2RngF1npNCrd6HXebXWQUGkeowX93wnxJdKdt71qyYLcvCtYrcJYtcA9zSNAjhiaCRwdvVDpSTe5",
  "key22": "7Can6ZfPb92NWZNPeii1p7ervRJgxHHbXtxVH57n44nbb2sUiTDgQYGzajC3jfXCYMq49sU32xHXxXuD6ugXvop",
  "key23": "5XgMUnFoBEdTMv4yDDBXcahev72BVVuHU9uiXwfi3Lrb9UCH1kEYnTyiGSqB9HuwPNrfbp2ZnvRJAkBJcTS9wK2r",
  "key24": "56SN45koCEuLStdrVwoenNSrzg86wMryGtkTrByNCqRYGrPAKdBrzSKEbZdgvkZCvmxCxWA3AHfZuUg2rfR1XUjz",
  "key25": "5iwLbxfYTchSf7e9pKJYv6jzgjqEu8Rd34m3tFeuQEQq7sKuArdtn3FAV4xDgfTBqSSGTNG4xpmQFSKbzuUMMYCP",
  "key26": "5AZCjFt5Y3FLgaZXJDbwMdmVRkXUyP2aZyEf9XgVw41qWueyB8GxCZTCaBC1PKEYQ95wQ5tWuM4J2ibFfvq3sAgq",
  "key27": "phJvJzfVA13zMTj3vyxqAxXessmTEYz8X435P968ZXJ61uBdffV3PnzDgf3USCzX6xDgLz2Fp8ctA2wDjfXaCDy",
  "key28": "29nXBNV7BeBypfiSBbHCWNo4UTf93Rz61ZUwgQgiHc1Nkf6QhvYuH3GS85yxthHUt1Hh6NRBD4BdqhrGovXPqHBU"
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
