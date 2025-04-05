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
    "51v3K9qH3SSPsP8S4JY4xanBntZXR9qhEET1F6NqXFUm4ZRyNPc1ZgmKTWKPyqjjwzgVWrkaKX5xtbpN4Rty8CAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rrgmm2UtwkqjFVvrKNM6CAp5XJwyQD2JXAYnwXvPdiYjrpLRi9RgUekz8Eki9oPMJUadZKwGLsmzzd6fdnZeSRP",
  "key1": "2kepWYfQn569brHiBCi9w9REPMSBnngVxyqH6qVXMVn2duBEJjJ2MX9cMDJSMEveTN6cq9pSz1dGA94VNebwkqW5",
  "key2": "4xVTm6YChJqYPboSttQ95k1zNEAnF9XN39Pqet4ZzPvLHQdFd1EEou4yi7Y76FzYpktxHRzDg9gxrxxSyvJ4SRHW",
  "key3": "5XBcbuyjwJig2oh4iEqtZPDVftvmGpYxbKeT2xqSgk538C9GjGeJ6oF2FBCseJ9FafUZKt1Rx29sP9xbszrLL9Zm",
  "key4": "2B879EnoXihxA4g25j5reHiuxU4HTp2BXTrE4Eq3x2AbPMMncytLsCyy5nS4Cvbov7yL6FgaLCSn2WquhJrqSH9f",
  "key5": "xNhGkmJKWCM3pUwawbe4Zdt1jFWEY27XiXuTxGvt4kdoTb5QB7nqzpY6jLhvcuvrv2K7yKZq45og5TXhvL9Fd4k",
  "key6": "2fbUkk6o5GREiSKhqX3W8vfaHoWb5hyZv6eynguFJwULwajMPe2WGgi825SM9BQ1LbUJoK1WSzAfEiV8fGdJfBmE",
  "key7": "3MVrmFqC8zLgpU4SkSXSUXBT35xnhfv25PEFDXig2t1PTYBddF9AiYKdwMSkZjEWaFo54KnqPzC5scSNe6LRqgvR",
  "key8": "5Dso2YYem5z2nZsabzL7Dd9opHYHeDjfFa2dNaKT2TNZi8y9Mm1WVfVwM76TGBQixKBcJ2Ft3PL8Qk6fZRo1dKAf",
  "key9": "662usyDRDVrqY1G2KFq3C8uH7QhKNr6f9EGXw5D62rqs1KWn8ENdn91CzkhQNnepSpsxSPx9J4deGzAHXxgVQDcQ",
  "key10": "421jh2KkvPMAk7zLBGdxs6Txpvt1VBixqooWpdy9RB8p7tawjAkSRX79hEiMmRdts6zASCGmnok3H6NgjGgSGW9o",
  "key11": "6tTRgNuUWd6yLkYkxGts3jJKySLqsJxzZ8fxYxaNHi3SG1Lnr32GhzmfPXgkrVRcn8Wv95QqdYeCHtgy2QcRhCy",
  "key12": "4dhEWby3Qdaf2fyawMB2RoaNdms59PbzPzHwfwb2sKoP42J1BjEtLvSZTf8JhsXwB2P5eHQVdsvAPckSBBgmStco",
  "key13": "42RVRPFTe6RhAvzDSQrj8ufCpjmfYsh3kWAvjMVzgWcQxkBerqwwkzQWw4gcPL7aHCL6wnzz33X2VDsXmHpoPzSx",
  "key14": "2tnH6TNYJ6pBLAP9yrpJUKM4qQBzAGzc518PgNYct42xHysDQbzPbequ15xqpMQf4CF1j9dzLAqKRjtjU5wDpp4m",
  "key15": "NrVBbUWbQcNYz9y6Hrn3iX8UkMuHZ3osbeZytQVf6m5oLzwC5znnNxTTG1G2hrN3E3tFBjiYVsNX5LFsWa7jcWQ",
  "key16": "3qYyZ53z7LCbyFe3K85UxeNiVyWBRMt6hqZKeYYq2tPC8cA3nPSEHc6fY4QbheNEb17U166Mqwtaqj2LdZQ2rMtT",
  "key17": "39RsZZDoShFtfP1kgAYLs5KfHZAa8xFdL7yUDCLatwiTWGuPfgeeRUtwpUdnLjvRUQmjkkKiwDKhVHPq6Jh2kjyN",
  "key18": "51dpBhM7qwVk3LAAXFqgnkoDWogswLSSAJN1djGgjrZr2xgEsf1L4tcD5oJBzVduGS4xxNHfhYrDTaEZ3uPMqfTR",
  "key19": "33uj4LdpmtbhoEbGTYcHtaQVR2bP9HwLFiVDbdGQKM2NmgE2hU2JaBKPcr9gUwnKADttp7Qhic2UTesDn6twPYdL",
  "key20": "1QV7osVZ6pGeZT7dnf6ovXEUZyoXzy6cjsbEWNrQKH3JdUjdM3CRhKtJjH3m225AnB6aVCq28y5j4TqSgtLnrDZ",
  "key21": "2KYwran2LuLND5G79Anc2QTCaZBHFm9VQ9ahMMajpoyNTCCBGF6fRVZPZHuXwnzUGq2ENsKaGTYkTMTYApUu3MXj",
  "key22": "4Y3bz2MpYmCzB85t7b9uF4mNmrGjnZBw11dfFZdT7YhcFbRq2akMthjJdc7vbnGCDN1gyHCBe1tkGYj4T9727NVk",
  "key23": "5YweZJ4v44z8YdqesSssUorXANsDZ5QzmCrwp2bGp9Yxq783ZuUhJh9GWSkseQZx6aZcN9k1a5E8qigwYh35ZWeU",
  "key24": "5JZShSaMgReyMVSAErYRUbBPUCZjja4D4ia6UxWiJmNC578gck2QL8uWxmLUoec7thcmYsDmjGFsNgw24NoXCPzS",
  "key25": "51kQFFMAXSNbWhnGV2BAYztazhwYdkTgaC72CrLbMPTgpGFXcdAq39Mc2uCbQqRN82DWbrncQw18rxiwjryXZYrD",
  "key26": "2tsWEr4BVMzXvKqx1vdbvJ8FyrdSCiMLr2vgfiggC9cJp2unFt2Ddiwn5ZoJymXPxdngyoK1VkYFbSUou7HXm1aa",
  "key27": "37JR33jceyGdZJzF537dkd7RLXuymaxM9msBJb8T2dHFSxHX1K6Y5rLsNvoxRtCxKp9GMtxmNJ8AKbPBubZqjpAf",
  "key28": "xRYWZ8XxUgaCYSkKufEaLVrZ2WAzxi1crTzSvzaSWp3YytkcKbi4r6vGfNwtBnMXwRpYnRMurBx76UzZtrE1KGy",
  "key29": "5kZjc3zbEKw5d7C2YxBGUfK4En96FFRxDLUKYDeBjQWUAyeB5UzCBFsgc6ZmVTeEPHEGktw791FAA8peMDqB6jJR"
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
