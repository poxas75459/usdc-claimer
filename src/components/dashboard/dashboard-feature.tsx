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
    "4kxm2CNzYMvxBq8jWzPpuBBLZEHWEmRg5xvBiDBZzn4NcHgjan9CK6mT3pqBCFUN8SDjZRsFU2uSrJUuce53MtHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qhwk7ewHW5f5tJh6e17sN1HBePsUx9LztC7RJ5f7SUz5a7zqG25yfyZpxExbE3gTH1Rz6WeXYTg7aoWa1dKYh8",
  "key1": "22DNXbjfFvy7gqpNnF8AqEbCTqBsRLdTT3Gv9QrT7KGE12S19a54jmQCZpuhigVbPKkxNt8bjvD5cx8iEJMpTpqN",
  "key2": "3qcp1J8YAuLtmwL7YDRAhMBYowSTXT6epYheZC2cJfzfH2QHzs4TNXqNKTAk9jpZVgYMBvhJS61Qkj32TgtUtaem",
  "key3": "pCmgjahpRF4RGPTGW1S5VRcWCUVVVzLmeYW9vTiSaftrLFHvchqh4XDFQqqSRbE63BsmSmQfb6AgZSmsnynngrP",
  "key4": "YX6max9GYvf218gEcpTutY4m4bzwtxSqzoJ7KJriFjaGTUMsHJka5EtomEckHMt6qAjkxF6Sz3paenKtZ4jwVjR",
  "key5": "3uVprCqo3nHgXTkSiUraJvTZLs75QLkUZgYKeRfGgdjvQi4uVsZmuRSpSywp43Si8zkWTU5YzwiZwAt3aw21ZA8z",
  "key6": "59Y7MQadq4tqAZ87SZDLmjjfGnzkpCbE1Q1YQ5JLyqr4b54HiLdhQxYqEZuLM3qwUC6QQLwHDA7VeKEo6LLxUrrY",
  "key7": "55emih5mnhCBbXuDFbrVt8MiMT6qgrkRUbMYCZX8pD6A3BmoYrHrbi65exw6e2i6zY6VoEpgASw1eATzJLskPeex",
  "key8": "2zACHuH6rhmRodBLMw7LrTGpzwubpbtugEu8o5vgUaA6EEzCA3vTUXW7LX2DiUsfKcE5aBZe39KhCX1bVza39QMM",
  "key9": "58po6wb6YTSqCPN9TjCBybSZZzHnF2yDDG2BoDBjaBKZo1sMvqMNRxjSVZQuGjksNUEDczR4qzJyQFBnsLRM5oV2",
  "key10": "4XFE8r7dugod3P6LHPw35nGQ9bDEhj3Nb2H1cv6Ls7H1BgtF6f79p5eaXaCihaKnssJGqugnxUTFh1xKrbTvLBbc",
  "key11": "47AsD1Gy5dfY7a4y353Dath5FgcCu8jGSAwfcBZpBMQwAF7BBWK1gFW3mFTpxBVnUY3KS8z8oCtekxjps4JJuSfZ",
  "key12": "5aTNSA6q5ZgrCmn4iV8c2M3E6j2oMT7WYwnjDztRbfSUeBuAVH83rZRqAsRQcBcPkxezFbSK9MAsHvBEnuui3jqo",
  "key13": "4DVEDDcoGGLqMTS8U7RVaWFcXX4Fjvua2YKGjC7kJ6ooyxYApWGN1snV5TxLEGQ3UKvXp4dKLkPVeQmKT3cMLNhp",
  "key14": "SrX1MdaMq1cj4DopfUAm6guxdGoTEhVevQay1nAHVcXD8YhZfkcd47ShfF4eM3P2fgkVCbNYjRr4Po5o7Sp8a3P",
  "key15": "VtqZi8e16bjgTnDEFJDuLdqnLWFXKbGkiT4tn2uUGfGkFh1KZvKjq78kFJXWqWrMXc825Jq5Gp8hrUpGYgyqci7",
  "key16": "xkiVeysAoUJmTXVzvYgQqQaENM2NNyFsY3ucJXUxYKSqCWUJaedpQ4Eb4e158jCoBXWRF3L5Brh3jFG88LsoFDP",
  "key17": "5peUUaDtpwd9b7yLFXdUQs4zDNfa4vmt13Rm5eeA8hChLos4QtSXynpNED7H5aRq8NmvxxCnQYxiLgWXrFtz9RjU",
  "key18": "bCAWaXahdMxhSkMDFdnjkxTVqv8tkGoHrbyBFftD8LcA5XvTsEucSM1qjxDyYChT2Uiq2ZKZNjVhJ1oJVtHkyPZ",
  "key19": "34gTrp3LakSnfh3j5GnyvsuCsGhnKj91vdmfXvspqta2tGf5JcFTWEb2S6tEU4nRTCAhdpu8GtZF5fnQv7Hr5WzG",
  "key20": "rQwT93C4qvA1nreXkz7cAXtJ5S8KF53M5inhEuhkzx6FbZLinWSLXvXngbYFnP5h3pb7ayarbQakAoaZnP8uRvy",
  "key21": "5zLS4LPH4mPH5zjdbDwc86CsrBAui5ChZxWH3ha3w6yQ94My7LJfJHicEKur6KvpvjLVTpR61HKNcS8mXdCrrxX7",
  "key22": "3bTANuZZwQwfqiz2FzorenZJyz7Gqudk3Kud85g563H8YpGGFEnWzfHa61c1Mi1BoEp8Zx67SGt6UKkpx5kBdAc",
  "key23": "bxojb2JGQgJqT3ppfopxrsKzfvd2coxCexmd82azBSzmiRv1Nv4H1faUDKr6QVfw9nUQySXHZyWM8jcZ4wGUVCJ",
  "key24": "5USA9r7k8WnnfYrCkVLea1HfcrmPKC3rhZi5QQs8tXar4wK2gxvk5d7HTcTiaBUWM5aTNkgGagCgD4Yf8XXFNfN9",
  "key25": "65rDaq9CptNk8LqpUEa76Q6fWVXrguM6cWcQBdrDwgp5GBPbGb6w1v6onxrDEAvw6zfKwjE6PKM1x2UscsBacuo4",
  "key26": "4jo6mvEWfxMWXKwCWLcnELfy1oBCcSMJJ2c8CANNf14rS6zRZ3H1fhUZfiYG8tezEpDRWHJtA7z3KBHic1ePppzp",
  "key27": "41uMMnWBkzHjaAqBro9AcMShLcKuCTAUPgtXkDvNGYrTHDDx2YrRKUDjrfsjnS88DUzNp27ZPsGdP45SWfBu8LEK"
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
