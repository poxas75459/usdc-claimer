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
    "65zTgJLfH4RXTnk2cwWc5UvJ8WzBsK5vPxYjo4aFHhTc42MumXp7i6A7bPfpRhn8GYQ1pMzHh2AvSLMWGYaWXkro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28arsHmbQAmX4AAPWHAM74xyYQKtGyeFU7cF5b6M2H1adnAUgevpucoSsj1qi1jXRJWhA4pqeuUBEpUxo2udEiTw",
  "key1": "SwVgeHkxmqPHDEPLfV8SRe1MSLHb4FmVjiqHXWcZ5UH1fUNU8x6YLmAbSLddQa4ATVNm3ikMqvfAsdDCSbZwxUR",
  "key2": "4ZwzhgAEY8Q2k2bsxHDMYGQxRvYhoBFeqWa8Co6b1CCdp2iX6Hai8NcSa6P3DtbYktX2JMRsZoYZaXVLChDkRXum",
  "key3": "2Prk5EbcYdib4Cp3Pu3T7hCUfGPENmwDFvymSDmU6ksa6i4aThK22wjFkhHo4XiBtjM83JKTc1ZQtL3zorJvkC7M",
  "key4": "3N5rS4hE7bQNrsAGAgQnaNLGN96WB5ycVW6bhz9HVgmjxjkjHwTEY9T65CHvW811kP82F3Pi4J9ur2sbqTqZzzb7",
  "key5": "21yxkMwC7Yw6vc8dMN7YTxcRd23x3kEW19aRZaJb9KcPFgERHXg1LeARTRehMjCmhKju6o7H4h55PEApp7j7dkwv",
  "key6": "h9cuvhaAuAAL339Su9qwtvqpJL6ScZy8PYYF9Hh7s5Byr6rmS1HjVk5Hbcj5Bc4EzgYPfTrZzvk7kEtvww23hxs",
  "key7": "55PEgQ6q2VSFH37cAV9Naa4oZrHFoHaexa75uym2A7fWZYZHhhdKaKKCLSGFmMtX9snNiLZQ8XsC5ZYciVmkqX8s",
  "key8": "31PyKPUnPKuAzcKBdakzGzwfgaVufnMqnh3qg1xWRErXNUFGeXZRophWYRSuNvyiq4TzC8MKxYzJEWuU4Be17VJE",
  "key9": "2FDFqqwPtwnXJoFx2umri8WWwRhMQcCQzDF2m2VbaVvrqgcbkRzdYptxUaTkSDp8dazAKeWpZF5XYnVzpE8QTuiP",
  "key10": "4QRqLDfKVeQ89UVnme88snbYxkaMh7aeMQJUnBj6khpjLqVPNKDWqVjsQyHQHy6CLLuMwtQPvphiNhzT8v2ZX6vx",
  "key11": "2NPupUaXiux29tSE9oGWMJhDHsV2S2E8jSNhKFBVrjyNE7yUcu9BVooRLGuuk92RCB1xUDMhU3yFtsT896n6mCjf",
  "key12": "4JZp7RuuBi3Forkbx7NEDrEuSzeKtzXao8pYvDJZ65Wo6FZdSY5wzekfwMLJf7qiYrm3YcukrGEdK6ASaRsY6sJ5",
  "key13": "2vKp4KhMpxGdNxrNYLU8bRHHs6jto5yCU4SJUbphmx314X3uEzPoSPNDGJNfHLFgeqDEHHfCY6oKzkyFHzYKavfc",
  "key14": "5L5YuzfbENBD5b7eEEF2sF1qXsmoKfsoS6b2UbGmbuPWpkVDUNSh39oHPiDHjT6iPCpKgPJ3vChQDW4jdne1nqJJ",
  "key15": "2xcmSMtqSrxMCJzFZ1voQA9cWgSnf2LDK2RRtt15oPMRw8n4zCBfKfmwGanFK9MFgNEPkZ4yBdghxFyi2hQijnPk",
  "key16": "5BgCSsAoxyoj37aTGafJ4sWNmm2qzShgsQ12vwBAKwUhy1iLWZqB2aSVEobkc96pg9qZVkQb9EBcZ2jkzyuuTGjo",
  "key17": "77HdRW3SiSZHiQ4gkc5n1H63YAyceJ1Sm3vcbNFxtS9ryEmosGpXpPmkdpCYHghnXPfwkjMhSNJQXPEtPa8yGfG",
  "key18": "3QLW9P1QUugVRGUFEN7K4ZwysKVUcAsVkEK8XwGZd78kcA2tyUTcq7Wh4fThB5ZSTo9ScAmo5BdQaL5nYHgNRwfF",
  "key19": "4MFHMdGvKHJBeXs1n4WeGk4TF4TEig2PMciJzhR8gsv3Er7aTMgStgupShr75iTCgcRTTuf3MC5hbnKYkQNiLhhW",
  "key20": "4x5a5jTKN5vycTADmR4W5dsEmoXbpm4U688V2NpPC92D28jBs9nZysVkBuEBmyHEoJ7ms7e7sW9G5Chq17hfKoDp",
  "key21": "25SXeqTmhiqWuknKjfeUQtqGLyEueixEEeq2SJ1CL15bdaBNS4Re8gjVstgPr1Se5Nx65Tv4auASFgfj1nerXdNA",
  "key22": "2XTDqzekyCnYjMmHJHmcjELgPi6gVd2F2n3h1tX7DkjEeXoNMYZdNdph8CzVVFgHeNfC6hyYNbSkBjvbLGNRrBtY",
  "key23": "4MmfmgdFdnemaPajA9Au3N8e28XiN217oGrMsCoMVr4A91azkudtKZV6sGMimnNJF5Bjp1BjJh8YAyDCA6ZWwUAt",
  "key24": "5TX1N35aZUNq1e1rwhtpEgC9mucsf2H1eD5bk41PxmyJLKa8Cinr2BULxU7V7QLNxXZpXrA9wF2s1cuHpvJzgWPg",
  "key25": "62txBTSjGpfDqXWp2h24UNcwfTJWkqj7KApZgusQwXWhjEhfsbumpCtkeKhKU9hU5nJihyjLW7qj1ee4vmmodb2x",
  "key26": "4wQqhebeBSYG1zbSPaNeaDna1comSMaBpzjdLNEHLkXE31gMC6rysVMt4kMgjX62hSqFtV8Q3QokT2yxHyRQu8mp",
  "key27": "2HoZZCFDRWEvtTNBoCtrPj7eEqUUhxRqSXVhF2S7UEpqmesCwqovCcenf4s2HHhNYWU1MuDKAAtgAKZt7uAihcyQ",
  "key28": "xSW13TcX6bNtaHwdPFkVnBMRnrsUvGwjiSGcJ66Lro4qsYpaA5cR4TW6YugTvsQWRaCDtuWkVP95beziUpPScEk",
  "key29": "32Y6pNPQc6dSUSQG4jrnGM8sTCbPvg785BHpkDn8EMkMSyJhXSit4778NAGgpvUf2XVksGkrjarNVYMXvyUnpWmk",
  "key30": "25wVVqZJVyHm3wENeLsnZTXFpZenK9FC3DRbnZgTTEXNpg93oiU1d3W6FL7WuEvuQXBY5BcFUkJF5trjhyHRsKqu",
  "key31": "3bDzCu6ZYCNLZaF3FrszSToLXaC4hafRyVCAjso9cB8PXMaYHK1pKutuLttsjamBGa9AdkMPmaoc4Lr9ko27GGRE",
  "key32": "3NhVHou5SGj3zQ5hyWPJNLghLj63TVBaKmzDqPUBxMmZNNwV8bry59iDnsmAmKjpLqVL9uuGdszmPAskGapcYXPG",
  "key33": "2NBtTJTdVLQ6knuobQcdd4nq1xCYHxocdx6VAxEMrseFi7PdQMuty1NK9V62AGqFL7xy46uC2y5RZz3ZhpsyTmXd",
  "key34": "2ctRDJtz2kKTbcJ63NcGpBzyR2beXi3p5wmCQLum8WmwK7vDJFQLWPQwrbtvKyGkdXrQZ4wpyq5zvxXcoBUG9due",
  "key35": "uFZf6vC5MujV58zKBvYUWqbY19AV8h26LWNh6rMD1Ep7SNkZVKNTNFMoxWaN7ty5TENhvxk84LJgMQmWEP3hx2g",
  "key36": "5g1BWSxmQAugKC7BEspTRfCmSkTNUtnWFsVbcW4SFYfd6qdNTcUMZSMdL7N2YNJqNoNWeN5Ku67z8m8zCFwBgz81",
  "key37": "3YkpbVgJVWTZCzBcLmpcRmDRGFts25A6fQcNiNtuqLwHyK7a6foEV35kqnwnbHY96DK5pzyLTqCKfYEPFNuzahoV",
  "key38": "5czdkk2DsC3jWgUKUiQjMQccSB9xdcVB9xBHXkD2cmB4JrE44BxpN3HntjTrT6qTgakHdrYVBJSJVARt97vRPaZX",
  "key39": "3mS5hcAxnb4CYxtTZSHstgeAKjeMW6k9sZyGxmLzXUMPAqiMYi8UgENHk6kNkUzSoL5ztNbyjfR3A5j4hNzPzLus",
  "key40": "2emMXeyTa2H9tLzS6SkMPiyjeCgjXUFxpLkCzseNH1kbroXn6hv85EFu41wYo5dinyeGBSzNX9RxnmtrfzFqj9JE",
  "key41": "58GkhQNpp8wq5S7PqtYGbvsMBFLYkCRE2FtjCGrByCwAibJMxqmeoMW4ujXwHQyTdTdCbNL2UU19f2jSSLkpAXHF"
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
