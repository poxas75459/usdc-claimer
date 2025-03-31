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
    "21zUS1s3MYgU9AJeaTPE3oKSAHfvnCAE9EcSAkuvuQrBySW3WJ9eWJWHzqZ5zVvJQh7Gxiy2MuXWmQXTUruw83MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n7epg4yDc3UakK5BMwwu2ggFLRG4VkwQtC2Xb91V683wSCGGhfKh1JEMJsvofNAUUF4eXJd5F3acSKnWHaqWqBL",
  "key1": "2QkcF7ydPLvm3bfXz6wDXEdeodgV31qKAVwjKAUoz7Aye5Mj5nWcZBJdHHVVAxcVhvbxtczExCx8ehQsBihxqZfx",
  "key2": "m6ydBD8dq61PodKxXS11CtwGScsRiCGgLqBzNQiUYFuzRdbZF5Q3C5vPvCUq9D9p5V432ECPaR4fw4zymTm8yo9",
  "key3": "H4GSyvVCFTMWhuwv7f2XxiidWNKXYjYYrojySYEqq9b4PnRqJ92aqLW9PHH7oHq3nkXJqR9cHcZQoTahS4QSTia",
  "key4": "51ShobUP1oomgupJK4aTQ5LiGYevMcqR5QLdFGZs6fMP7mpk8HJQ9YWN1uQFJT6ikduZQ99oMnH74zza77NNRv78",
  "key5": "2CjSTr2DmzMSSpa8nCN37XY7YTUcn7CUCHy98xWnP7z4zsdRd13MrdQAPJ1tzoUk74E52GzNeN41rudZXRJCYaMC",
  "key6": "4BqbvvyNjUUZpSUfHU3hLQmgK5byJbo5i4T2BDST4eMUkbhjXeG5tjsW5F2scY8NzYnzu1PMeLhD8Dse4ydoZbjn",
  "key7": "2F5TmJ3ASvBvrTBDY6AqeFsfq62fHP5batkAzYMvuZX6W5qdPFzcPmQF4PJ7yYJEds8bVvw9AL73tn82jon8aPEg",
  "key8": "4NVxdk3paFyqmJAzUj3d6Bb2wzXa1WviHB93RbkYHVQhumQKKoKjhSBomnEPp4XPD6qVX5Xmapjc94FuegsZfm1h",
  "key9": "3jFQvsMu9VN6mdWXBGuMYbHGm7fZxG6pbFNYg8vigMCaMyrZZ6ukwSgAVrqXZgzpSxR4LP4nepthwtUHdMS2eqpL",
  "key10": "3tmR6Q59TVNHnBvzzVu6W62LdGxpvhn9gMwacmhSCxSPPccj1mEANykzTqZfb9FnrSsPkqFaEY9rVsB8VKzR9woH",
  "key11": "5vpabjCmHMbpwPE9bJdAxCndCrDh5UAJ34umugu9o3ygDB88JKP7McXWVjg9zoiKS7Pv4817n4cyXnU5uoBMLA5y",
  "key12": "3rQoBY1nuQhoidBfrNKwgn4H5iFGtXKws71R9yQ6WaDAKqxkR3EESRaopqvqou48THMjjk65E2CsiF1RF9477zT2",
  "key13": "2caTQBudToYJiHKSco1dFWg4MxtM2BzUYCPoRWnc1g7jeqpqP4m7SEG72znrP1nRQnH4Zd5Y8KJTLWWDENyoKvFJ",
  "key14": "56JF4vypDqYxMQ3nHDnGCeLoCGvoBvKZcZGcBMvWLmd3A127ztHQYcZ6LKrp3PxrGwudfuFDVKi1XuwBeSyPAxjh",
  "key15": "3FbmEKXmz9QHrScQ3fpyqYhMUUnGz4FkyL2id1e7Y6e6Aq9yATH46H5WGW1RPnHpAyxBxCaU3xEMsyi3fSJezpYB",
  "key16": "2DUJhd2asBCgHnWihoVAMkpj2ZtShwuodmsEPFHVvDeJxAzfEhq5pA4MUWWiVvZ34UVcoADeUYCLJJk7WpQeXVKv",
  "key17": "3eYQSPGUxzsJqxsFKcXnMgVTpuXKPrMzGQEnVfPsLwxarXpxXpP6czsobRGmSzvYABmBJZ3zJ5DzVxWjCTRfspC9",
  "key18": "2rf8k4VmfkNoSKn9m2SB4yTP63zDZoovCqxMqxEfqxdGaJUyDthccTsR3VYv2pnX8jSkngWAYKbr3XYq7K85mjS",
  "key19": "5u8kUXsrrgHyV44qiAvjnsSfN3qZXNZHJCMxrbRcjMkhSJ2iTbdBu2jz79KKd7xpboMKio8pcm6tXuSxv3oYv1ua",
  "key20": "4BCg7M6dVm1jy1KMF9bV7AqAMY6A4tjY571JrwfitZf1rogBnGzHEcgUCJm29ue8pSgAbGYk6FmyxqtUJz1MSj2h",
  "key21": "2LAj5byKwq4iqi4TJ1ovCHPvHxNUDoZbq2HM7iQDuVDkWcW8NGuypz5F5cUPUrWKRYwKMo8Bbw7GJ5jvKXJe9sx7",
  "key22": "359mSDdW8DzCgByzNYsgDUxJ91iuQCBzzQMmDGXkJjJwxMbPqG5k9UYWp9soKZziWkoubC5neQ6ri9if38wjsPXG",
  "key23": "4y5FF33BX5pbHjigHJfu4KTsVKtrdfcY5kPsvh92tbn7Dp3W63VHDS7SFBQJhKD6mwcRNMsrJaWaagFTPNmJxRcu",
  "key24": "24gVBPh6V8bSqPhVCvjRMqZeU2JoK7Sc8TBsPCRHptX5Lv87gwpfu5rJDeVzb4ikn3DvMqVJcjuZ21FAAFqUL5KT",
  "key25": "yjWc4pVRkFwiTgnoZrdZzYSR77kTq84AnGBTEprq5GZ5zGPdmw38xtrbTrFGPwdRK3ZDidmMFfrBEy4AvLng6AE",
  "key26": "61s5h4Z7m7nhodeLbWuKH2QZ4dEHXebKciJSndzAKzXNdt6ERnNDiUigPyUCjhS7JJBvUhktd9CKZLQXV94p7Fby",
  "key27": "52651smXPFxTnhjaaHpePtzM1CteMWhUz35HwxCdV58JmbjE1yJuCoFJuMx9U9JP5revHWpdA96QE8CYde6vnuCb",
  "key28": "Q1bkVhw2La32i5y2nEmR8NTnkdRQZsuYgdU4A8r4688KqbHcHsXabgsEw4B26fY1kX6FXUeMeMPkFtDiU3XEkuN",
  "key29": "3hSAfAQX4crFL99zzjWPV9YtzS2iqsvmfSn3VQLLvJvQM54nhi2Wh6E3QczwAhtExP3Y3pwrC52m53hT5ZmiNKww",
  "key30": "2ghvsuz96Jtr6ck4hKGEKXfBh8NvgACsBPaEYiztkCX9ghLP7wp7LNA4aSCpZWrqPu39dELjSJ2DxZT9dUy692zw"
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
