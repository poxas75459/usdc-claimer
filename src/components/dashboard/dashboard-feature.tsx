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
    "4H4S9h6vNANm8vZwWPqWoPkYkFABXxhvC6XYc9NvuzYXj6ya1CtTvbWTDVA2i39utYDzZvw3Wj82qzHGav1TWE34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8NaBVUJKKGvT6mmLrgTLMbj17BtndHWjkDHA8EBiFNSxEayqsixVU7UqZ4aJKRJ9w2CqMYbc1CMUXP2DrAvYmu",
  "key1": "gV6Ybd8qtbteeiwQ3gqhZBvHLWk4MmphTSygC3juGHnEM8JSqQGPk8gZXrCumETiGmAEzhFVTdiHZSCBuiDDU6n",
  "key2": "5qnuBAxEmzyPA8FCDvAxBhkCHD79kWf1r6ZHhfeX68rxhnrT8FLmzU18ShKbfvg4tRxU8rURQcYR983WmhfY9cL5",
  "key3": "xya8JYLABhjxWSQzZPPcLnXkiAyu9PuTkV2az6ebCLYTGhzGtfAbFeMK3WJCztm21mf51RygThFWD8a5cx2SeA8",
  "key4": "2HuiqHMEY7MnkddPbZW7PY7QHE36LDikwBPyK21GM6t4KkSZr5nQLZtPkGCwxw9Szk3bijFpcgqCVEZw6E1hpfw5",
  "key5": "MY5PpMA7r1u3wXNdFmUeRk5NyYfiVW5ipnvW9eLnAhnHLfGHV6c3w8g7KuzjHEavWyvDbBjs8HFa8U5PtE72do2",
  "key6": "57WgPCoxLHbDShY8WcrDwq3oXsPHXuWrquPkBq3yDTaGGS6BnRE7vx1zGmCYPvYB3mhEBdANW9neJQyU7ZQ8Hwb7",
  "key7": "459L66E51HimrAfLnQNAr4yhu1t5quh6gqxqYT9bWqXUS2Y1zTh9Pm44WCPMxjy83msv5AKZmaLKaeDw8b4UGSKN",
  "key8": "4pCh9V41vUfMCzVUei1bYVWkL5ZweD9huzj6XYK1Fd18RbRX2mWyrSgbkEQLaPkbXmn6VeJTKXPeTkKtGQMaDp4z",
  "key9": "4vKJxajmwy773iC84KFEKgNVDh5iKxB3exhyQosWRg6LehCsFdPsqG69rvNmhgv3t1agVbFcBHWLKmhEjwepjnh",
  "key10": "2intM4xeRH5cyDQhdt3Xf2z7gMemJcbLCFwcBATQo8msouMLGhudLDJUeYn7v7JgDhFVoP2U4UNVVJe22zinkCjn",
  "key11": "5enFBv7twya49AZ8cdubVStnynDjnyyxLmrFFM1fPekPBpFcRK1G6FB3Mbf83Po88JLy8DAXuQbvbtfFoBu9ssEe",
  "key12": "5pL5p65jAsVnYgWBC44KxdPDc2bnciQwSvYTETSssNuiiTdW2nEs2v4mERgTdTYQ1kf11eRfokbZBtTJzcFPCo2y",
  "key13": "3nVBAkfVXFCa4uyZvz358idmEwXzAUcUrZ9iw3zMM4sTdNtJXjq7rwR96B8v5gQyuTcGmRLxqBFrf1zdi9mpz5wR",
  "key14": "2scN9hjk9qQJVkJ5HQyJLYkiMA6MLFmb1wDZXncB668geXuXPyfphVrLJ5Ah3wbnz8TnCd164NxfJMCuoQ67AUdB",
  "key15": "2CQm5zhUeCXTszHE1bjjEYzqFTZ5xCnBm42Ya3KqcJEt42ooKWXd5PortHbiRVZdNrr5c4arVscQSqW23pvyyNt",
  "key16": "2WTZfti6DP8YTRdKTs5wnsgNV4b8PP2vFf7W13xQNbaS9wcdMfhmncjDnmRLUQYn3bjJ7Y1qbjz4t85fJhdo9mZa",
  "key17": "4TC5pShQVbYgtdMUQpWqtrzW9jSJLJr22GNTYyfXfTrzQdR2RWDX79YtS8NVzkLqsmFZ2vY6cx64y6AGr1ST4n4x",
  "key18": "WJruA6AdXCAy467ZvwpVnkVpwsVKiPL8sevNscduCdw72Bh1p8NbWi4YwTV1QbW7gggu7DZSwSxsEpVePSi4WJD",
  "key19": "vYaG8vWCGs962XnQP14vaTpfXiHxH2XDQomWWZih25VpHysKt8wBn8L1irhJ5PNpyK5PJMmHZN9QugKNn2CSno2",
  "key20": "2cJyoPFrw8GXT6YFASK3LPr3R4JsiDZ5MRX1KjnHUzwQTBQgsex7WWTD4BqnJoNn1gmK8vJS87RdpfnHnXsmgZmD",
  "key21": "L6P6nyr7bM2N1LGYbJm6d3DoEEZksQHhqRaCNVCfMvCSUR5zpyzCVUUpV3XSpK2dvXmCQEf6JrkUHcjB3SkG7s1",
  "key22": "5sAz8hqVP5MHaZR2dLEBHShmnJaLiQysGX19489cCpuoPN7HSnHzFKZR2KkgiabM6DY46pV7dmrTuedjCqdeH7DK",
  "key23": "2LT28cnfZr6apUtWkvZS2QajHiuR3Si2CJN7sUXULyWwqdDdYL4ZBYF6M1gFmjimNRnrNw5vDCMh7rkcPQxTYnHs",
  "key24": "46QynQJfefDVh7yV3T5XnKVZhpRns2s8ZqAsCfz4KPgp8msXQ8Cvdz9cuanpk9Wfo59HLLspsj9kj9VrkzSky8MK",
  "key25": "4oooasGNjgFdKNorzN9q5MQZ9XDParjmWnNVJEBvdnqSG9Caf8sGtLn8s8J6HYVmGgz9ZBaKzuDKV8cDyQBvjCto",
  "key26": "nR4i4JSesi9g6RBnL6f4J59vGvbpMxcmPt9V5MiL5sgbX9tQZWJZkmaYTE7tTX75wdqqyE2Cg7sBuKmLMD6ZPpy",
  "key27": "24QPKrkxykNtPpVZbNDoxCE1fyJBBFsiui4BGy9pvPnQU48mcbsP3xGG3aGhMp32tymrExQqdnZ2X8oQ8m1veBVr",
  "key28": "6342ADNF1WqJEVToYaPhLKcSzcbXq8Axa8oDjMJ7EpKQJoZ7fRWnRBXuz9Tfrrb7u8HC9B6YMEWHqwPggdfahPtQ",
  "key29": "5dbcRofzCAp14nAFnHvaYKrLfjLgMWUsYfQmsnUoHMjZ2EheSHi5DbMBVsLkR2ZC39oKqiGtPakGtum3mqc9B9Xo",
  "key30": "naqJkb4NzTYk4aFGkw1pZKYd7sCbQtxzpMrc5ejNUrtpupftDn42WiU5zdXfDMDid9aVohHCmbg1iAxQHjUdQPa",
  "key31": "66c6kGTc5HTtUSr36MXWpA4iummoYxPG2nRFTd8YWiJ1cquAvxptbZD8cDN2ThghzXY9wCJwRvXDxzigBDijUna2"
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
