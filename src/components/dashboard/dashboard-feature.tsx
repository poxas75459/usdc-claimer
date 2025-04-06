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
    "37BnxgpCuEffK4v6PTPKREayowRHrXFNksFaRPPYEmtTxA3rbxyrUYZF4Kg2TLfFr89fu7ZdQmhohpFZHQMYvfg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58iiAeaqFAK6JEfdW8X7GoYSuWspksNCBzVuEX8zG8MiEd8nxvtCbNM6hqZFwB3rpYVq8Bs98YFGL6JnNNhUo3aX",
  "key1": "Ww1rMCu3vyqgRxBNL56pfq9b591SnMBt3RixA7yR5kQoLRU6PcwpxgVEVUgPeSzAH98ZqwJoNczsLrkwViRaPPS",
  "key2": "42G7sY71mSLX28GeExQF5AXyzFs72rWT2baQwuBHdqeT3o9vp8LH4L71ReADdtwJy3y7YhWapBSKkyBeaaFo3GWX",
  "key3": "21zXDqZGSk2AQj7RNMQ5sVFhAkSLLBjEhQHHjCdKJyYUrHSxjaARMHWP7EWFEg8GytuvEmMQudL2CfafpDTqcRcD",
  "key4": "57jmHRbXDkquvTYwNsJoRDWjpHc5ZYzySCfSBycTUyLpVEA2jPg495JJCUFXeYLoCD6FCSLHzpHrRFVQpcM3Rk6S",
  "key5": "58aiZtD7jENVvhgeALMqs4SDLFwQ2bLqc7h2sFjAVpV5LoKQbMwcRjH9QvEqJHqUWXHQVnUbMX7kCMSKYxtw8b4n",
  "key6": "3aB4F7NybP24RJSbcdMicTPkh3FQT91YVgqgEKkUprTX493W7JSRKY7TVQPMzYrHbiJH2o8u2RQRSF8h45qzvhDM",
  "key7": "2kACFGFKm1j82KcwFxxUnixRw7HgUkQ6jjrccPZodqGmuntGkPHemuA7PnXUdH7JW6S7c37jxdt3QoPDTfrwNpag",
  "key8": "unpCgm3cuXmotMWypMrdP6L2QyCjnUhE11G5SXcVR2WEF5eifyMF8EDjaDt81xWpPox7mjqKLMQ95Cum7fxZyEd",
  "key9": "3F2auAQhMVMivtC31e2GxGWkzxa6SZKThTr5Qx1hTfSr3Ybb3ht9kFNcudLPkCVZ7HHF7tdDvUhHbQEERfwBZvRS",
  "key10": "38EfJZB7Z2SPKAJx2cLqjhmqGnq4bNjZaeoPUZf2yPMiicJkZHYNZp2yGWSGE6v89TjqexVVo3QXQVYHawSMKW1v",
  "key11": "JaGCJuuBzEFCG1kEkvL6uWpo7BPtk9ZSncBSc2bxKthU2Gy7xm2hzsbYnZZ8SYBAqYqdPJdjm7pznFtbdzDvc2b",
  "key12": "3wUmDzBdLtht4FSNE4Ua1GEx5xZ2hM13VJvvV4A9qdBXCD5RHCqBj9Hab6fHowKFv9GYKT79tNkmuRvDD6LPvXnL",
  "key13": "kDotWL6BxsmEL6y3EFAN9UvNyi7Aa3Sq6Y6FsMMGdauyBj6UntHnreKkS9d1qVf82LoQc9sreWWfogyAfR3JDEG",
  "key14": "4XwYjn6Lb2kEV2Xu5DgiEeBv63PZXSwrVSM81DadVbbHBGpWCL25KM43PmfALiw2DPwdpZMtJoAsArkkZPCAQ7PV",
  "key15": "2exjSUgtmD7hVZGcFaMycFcUFqYLYiExxYx4BGKsbdpQ8iVZHti1eMsUMkqCGMqAJyz5jJB8kKEumvtFLvqD2rc7",
  "key16": "21WUn5hZS1cNFp6Kvk8SjUDn8WwCsZaD68qwFYHNKvianK7HYtbYimaPqyzQmcj8xNpJXrjYeYm3RXSEdCvcFuMx",
  "key17": "67doNBUT66quAVUUK1PhAx6GbBSup6kvTPpPpcy74cB6dqpUdM5XatNvUHsJwHAJ1ZUyjXvVwBjXvvAt2SjaRVC",
  "key18": "3YTLJHP3e4LYQzU4yYXxmjWpwUnBr6BLJ3aKXFWYsQesL72pq4KVrBymkzjn67APzXgGUqazSBGvSc1cQMKA62bh",
  "key19": "62kvbJonmfyeyPpDP94M3Ry63nEYhSku1MuUPJ61yjmcUrrhS2MZdW6dza96USouNepk5oj5f3WRiS6Fps8nZ6S8",
  "key20": "5zENCL9prUDs5gvZH3WATjmgBYSddYPtsDZA7gr5HmhTpzUmPW2qMKdKH2w5Qcg1drJdBz66wQjixi3GF7eBdqKi",
  "key21": "cAZ68DpGAPkSEehE4pLQPV99WRB941UE5AAv4vPja7YHJ75C9eyNqhNQaQ6bWd3MnzR5LKikzsP6cNseq5nHV8r",
  "key22": "4vSMzb3zjeZZHNZ8bJTbrQD4RAtMjWjf9KeGADfv4kYgcVdhdDfeWbPWs3H1znhFSXc6SaaAnTkfgcWisAe3Cc2V",
  "key23": "2ujLNSaSjV2HkbFGABSHRAEAvhomRAE3GoLAgX1Hi9B5TfiQPPszQiMVwyAHupNw5xVYorgB1zugx4jM2HyHuBX2",
  "key24": "61mZYKRYCWsaXnRY2gWWQV1kSiWFMATLgw8ucRWWCme7yBRPMiB1ZF2bkixPqpJoPh39mBb57zGWo6xSRX7wMW9q",
  "key25": "2RDC7bGopjsB5mNHAmCGDmfGiqQ7XNyhhoHBL4QJ2VfTFnpb9qASasTo8Lym8UKd71HPWtz3Ga9TWF2H8tMe7vtn",
  "key26": "TdMzwqVvxufa98Y1PoZbiEWYuFRWxgSjAWFJq9T4Y4S1a9hgnMiWXJJZFuMtn84tds2zmYHkCfpgTXPRPhRXv7n",
  "key27": "57rwbfuH3Ryf1ZK429qAbsxZbu7wNjRLNJeCXA83FBALUtpy2iU7hKam65yHVQp3edp3vnkQqmFtt1biCMAP8Uyu",
  "key28": "3YpCXpmMxSvi3HVjimigFWWDttq3c3CooGoz3xfjEmzdHEAJdUhfiRzPPNAFNxrvXQQMRjUnkZEVZD6hRt3bBMeD",
  "key29": "5YHNs6sCsNTqQ2yitqdr4qVP16hDM2rNXFD6PsUsJH41tZHdDmVecVRxBRdrEXBAMCQT1m1f6VTULCvbXZRj4gT6",
  "key30": "3sSZLg1iHH54H98g6sZT4gHWk62PXpNUK7whfruZhwVQ8k86sT5VBi4yDgQkcZ5NrUUeDtinAWiZ5iFeVZTie6n9",
  "key31": "GKA1ciDg6B58zcpScNqaky1WwZapn8H2PV62s2WU8S3tGcSBjFonaARpxmpE6KuS1zT9XS6K4HHBviQo1Tarud2",
  "key32": "41qdXpLgMubZ76BGCBgjSgahPWTyqrit9VfEviuqGayvwxjZGQKBsHDhRMcmftzAap1vKVbqbMauyPfkycmnNp9n",
  "key33": "5YwW47m1s1PngCQTGYgEsL4dm9R81VLVftUGNT9UNFxww8wNMt4g8LNusvuH8roPCKPtq2nrinFkyprWE4wsBuov",
  "key34": "2L4VtkVuyh3xbDK5JSghakj1LLCCxkjeYTNqix3vt5TbAay3Ats3vDYtfD1CGVfzVbymRLRMX6DE3oA4hus45DGu",
  "key35": "52TyfPXJpuBFQTmnabTXmzgvWXU7W8mT8q17dWCjSFJ4n3vdStuFDi7rfDz7bLBQJCxgxrGntwkpJEXsVbjFxQ5v",
  "key36": "9anWcAMGCcvFNnAhBzS7Dj6xphbHnRn5ZC5hA7uBsoaGa4ExY4zSL98HC1F5AfNGoDE9W3qquidfbXPGLHvYzo7",
  "key37": "3fUgMvVni9ff3dyoAz8RhQy44EU4zvYbQ3CUeZz5XDh7h8whe4veFT6ywD479Xgj7DCGBwdUoXbRDmpXsjYQhmUJ"
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
