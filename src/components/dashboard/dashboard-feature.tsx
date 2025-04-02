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
    "2n3MJRt6yUHwhD1p2y6p4zTjiU6Y4HwoVT4h5ApKhLXLX1wRHEeS5nYck6cn5Ur4NZQsEq5VkHwMjcYjxBnhMcmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHNWCjA3ETucdPNieMcXvyhYE3yRFetwF61k4fFJBT1GdCNgM7E58wZNE5vM8JDNfzhrVTZpcE5Ux2ewZjz2SkN",
  "key1": "5Hu14KauV4JQrYqrbaqu4hDmbTmkAzeKgDX8iUPTTWuG6YMBEHBUGczSir78jyz8JuUTsRkuPwBrrrXDk7ByyPsb",
  "key2": "2o8twadz6KwSa911omA3ZN8v9GitDPawkjciV2Zbe17Bi8Q1pD4nfYkyx8Yu41D3Yi6D1tta2HwqDR1bziQDijKt",
  "key3": "63P4f97cq4RuiybYXwvZGWap6jszPk4uWS8wsDZ2ppJuoWTWLxcRR1cmZd9GVVb6JB6UCEQMcAL6ssvs5Vddv6hk",
  "key4": "3mgsG7UWkobFBggpCmA7Bbyy4hgQZCeWFUcoGkhgbQpUwX65STmLZCNqF7wGSoPTULGR8zvmFTB7YPP5Ee65EqZT",
  "key5": "2vaqB5nb25kh6mDyDVQLhgiw57reZsqxMTi8Shxy7ZBKGjPT74S4Vxak2xvMAqbMpZxWSzBgo8ZrTDT4JY87DPaa",
  "key6": "2P6FcZRXYAnAD7n5AFzHDMAQqjrRH3JPusGy7mgWaNNrRtngaoP8NQczXfVT7KovXiuj7TGKTibfjAqwog2hrDYn",
  "key7": "2nLu9GWQ8eL6r9i6fVwk5oe8Q5sshFzwbJzVa8L8nSZpVn46AogGyorTU3pNwurV4gjPyNCS2xjwVbBVHFKRaip5",
  "key8": "2f4rgDxXdtfwPT1QopfT9gCknf4myMsYrvZa7xNQepc2zo3RQqbebwjocc3wiAGbzMdEXq2DN2ZQqWNRYzDDWMZa",
  "key9": "2Ky1xuuAAHCW7kuiu9ujynzXgagfEKYwBt2v9wZaBDrtEfKh8FFsWJp3hAkoKDjLYGzropWrxVLmQ7iQxnLTjGVk",
  "key10": "4FB6C2ts9ffMAxFiQStvetwb5dBoPAiEsYT18c3f1t7z2y5AHFZw34sFwviVAfSYxwosLecW6peBWPzJoTH3qGDH",
  "key11": "41MtJxRv7UQxNKb5PUbZUyvTKGhuS3oiYEceT4YEaKXX6HWpPifAxDC149u5B8zx3hkAH8QPmqEcmjwVZM6aDKEN",
  "key12": "3ahSZ3wLmgSejapkR43Ewhmr8P8ua1BmYEVbGVBV5s19Cs4ocQG4wCqFkRkEgVkDB1r17vspt34JTQr5wSnnduvv",
  "key13": "3seb5TKtov9W8hvZTHpP8DH873icFU9ZWworrYknxowjYLxSU5raz26NTF4n5EiTBZSyTqnTQomsvHRyc7S8obr7",
  "key14": "4NCV4WFa1UhrqpaHTQyNn4JLyBnEbUppCTSFauRtmdMDj2Ne9SwiaonGsfe7cEMBv6DJ9Srd23ReAhsrYaNhWHPB",
  "key15": "4eSTobedzneMeNc7SaC4c32HsZHtERqv574wMeaTXyMj9Wmw9UzaKS6WjgKmtRYCeGqC2eBuzwdHxejGfc8QDWbd",
  "key16": "4fAi1AbVoSSsxNeDGA5JT8KNxZYXjT7E2EvoJYTgndfMbSGVjiBHik8XL7UWWWxo4sbvXeTbvQBUAngFTbA9GsUm",
  "key17": "4fCZjy8Yyb1kDPkGy3wjAQPkBR4TZ4znNrjsqrDZ9wsyAPU2LhdKynnaibMcoGeqQAFrDN1rB5J6pTQc9Ka6tAFi",
  "key18": "4DG5jURfK3PGVfcpjmPRmPAKMFPRYJyiuvufZfDrd4os1dZCDdehqxbgo26YJf9x9nKXpUbn1vFedD45MYbLfWQT",
  "key19": "4ZvifnZ38qFybpfnhzEaEh6z8K3Qe1hB97aML3jEaExDtN9S4poHdpeEEB2PNRPcz7jhgdkELKx2a4LM4mFdPV3q",
  "key20": "22DMyoW1nzBxqYEJFayHr2GcUKz6yE6YU4UKD4SPAjKmUMcp2X3NtkHgcZQJym4PKvLAnpjgLgz4pV7FT35ozUQj",
  "key21": "2CAmUaFy8AdN8NiVvsVkWpwDfquNNRbKR55pXaCHtZcLXVhn21f6JfcPNdEyUzKtLvu678Kzib1XoCi4qVmUKXN9",
  "key22": "41nGRDUPdVuvhPmUwJk346XFrQ3vYLiLPEMv9yVhz55L2FtaWEJy6Mj6kb3rTh5qCfhPt8ePEG9TAvF6LjTT9w7R",
  "key23": "5XNDbuPR5wPYc3zpCH8fy7WaeFGbyh8GgiHjL7iQQBuHXDZWNNK7Wdctm5yX2MGzaRiCG7AUD2c9JHZ9jjEZqKPE",
  "key24": "2XEQ5vn2yD4b4jq5iH4A8k6wzcf37JFCuS6LXuBgKs8j2mT5UJz2idqyztmXzXnXGx1NxNywPQqPRaU6MhBG5wDF",
  "key25": "3cDB33eSFbn78MdrZ9pRcr8nmbeTHvnjfMZQ5vh7j9chHQSxr9d5wNNwFA3eNNNXDAMf7EfDhJ8Jzk6Y3pGy5rmu",
  "key26": "3oArNxh3S8RigsnceqCrNgovkC4WQvZe3KVmizHzLeRRJkNE5JhVqJD9Xba4ntDRt1XcCQsXopCYT42MUPV4WE7L",
  "key27": "2ya3m6zQgsyrzh9xAgmzU3L7HyZY4ccuXPm9JQ8wSziW7pYXXeKGbCWm1sP3GNJBLtCt2NXZCyqAVCLMjHBtZPyD",
  "key28": "5mKtd5zdHCWaWKwaYzvyTT6PEmuuv763EGar5s2Go6zvyrZXxiGS17F5BWorGGGWN2fRe5855KoyUPxWDg65W59A",
  "key29": "2d7V4ypULj4p8D2v4Ljr64B9JoZRqFuoqNhX53TQPjoie1Zx45ZbURvt4WsjDjusK8RR1Szekaxdc1V2XSxP8W6K",
  "key30": "5SAA9ReQvUrhqNbVFgq4M11V4fzcfM4RwDpSojPFAY4fndAgRtyobhe5riTadwPss3QgBuKykry5DtFXCc8aZKi1",
  "key31": "3qS9PYXV8rw4McBQZx7BfFaUuu72uVqvUKYpyLNS9k4R6dUAC5oe7sE5Y9dRkXdh2TEQAEBjKcQKX2BuUQAcwSsx",
  "key32": "4Y4rs5ZWCWyEyMsD4ZGRbivR2hp1D1D2kgzJ5Ff97zKhkCiub8hBeNsgaAjiySF1shhyr9cpGr46w3VLZ8Hfnrt3"
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
