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
    "4vPGYxHr5ejCmtKFN5KbK6aP5xpHTZHGPWW79n8zky7ZcEwbavA81oMBgqRCW4WffN45xukpc9faufidxNyLpbUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKv1tnd9cKHAhnZLFUDFkHAXnr7aPjubN76sfpj8nM82ma3vk7FW5hVPaEfM5e6SrAHSwmyT4Mfyd9dsDDr3UX8",
  "key1": "56P5AiwbsGq9YH2X8MnwaKrcn5f5F5DK7ycFqGFzA8HLy8Z4AvLZoXWDq14zwYcWJbdd3x7mH2bP7eZxX5LkWmCK",
  "key2": "3qYTLm8FXqsL8UdKL68z1r7NCEU4hUuMUmFNtVJWK3uzij8wdoY8BGaeHQHpnnbz33BeK63LwhWwhJdMheN7w6cr",
  "key3": "3ky7sfr4XXmUH6mEwChoY2P1ApmpwpdRNehe5kJPBhrjcZHBxviQWHmAUp54bNjtKYM7Mf1ooeUoJdB9782ZAxy1",
  "key4": "4QYQhhWbqVpWipEexv1U7xjVDcmi9xembgcAew8jb2WJhXQd1U6xycUn1T8VDKwvHEcoBpt2VeNATqGBj9n3wYZ",
  "key5": "wmNKQaBgnHzkpGrnwoiBLMXmUW2kWgW7B4qDkW1WSaNDTzzggKrpeukrYvs6NdSgj8hNG5a8HhZFswJY2wV2Qy8",
  "key6": "WDat1CskZ1KiDeKNSwAGpfHh1GkJuMYubXRYMEhYVQFqRMR1YLTZdu3RstuSv97mTQRpJ5uj6YZVHoa6owt9nAh",
  "key7": "2NkupRY2FvvChg7qEXyevcU96emafsLtS4jr16GrwRLDS41Ezoqd6xY7sLnkakP3BNK12eL7tUcEcPNpgHaF7shi",
  "key8": "2c6vrkN59bPwyMYAJBcdHJNRXL8UgwH3HMDf8o2RoNHwKPGk8Ljb7Rgo25vDuRmBRfm2v6s3B4aH8TJhdGEPdKAK",
  "key9": "66NucbkEwoYV6ehWK7ipiy83qbbLM2QSiT97Rs7WyRjokMqbU3oXJjmTJWcnK9rBynePE2om1A1dN2PequByPPSz",
  "key10": "4fi7rz8UYuarHFt1mgR9cKkj3N6YfnhVRt1jgmrsiLEVjjCQQbiudjw4jjaBgPRLubqtpHTNikwBCQh7m4v8uqad",
  "key11": "25f6RuMRbesoSvonnaC8fFjc4gUHyg6o9dk5YwRSMFy1WQC8Gov9jE84f3xoukuxSC8tkcYkDSPpittPULS1MqQu",
  "key12": "3kFWm5jA4ps6miJUtkCHJdPFgc1mwwEx12Yk7viC6eF7NZf9e8A5zg5U62T163wfHGmjhg66wrdAJEfLSj1jWqDX",
  "key13": "2CbTb4ZohxqwYN5YVA1Wvveex18tQTj1NGnzfN6N83mRYv37eaAeunEj4cbEHesZeSxsTFk9Fib3h93Ww7kpc5um",
  "key14": "2p2amhGTKf4jXf5hzZpL5ibZTxZxc25rs1b8Luagsuq87WPnvmnT3tx3xdPXyc7fC9dLXz7BhXWeFr4r8yW59c1G",
  "key15": "57fkHGqAnbf5Et6FEXtSPC19V181zZA3NL6XNFetJZhKc7EkPLDUWhgs3CwrKTDGxH5ZxYsccWeyBzJvKjMSdm9X",
  "key16": "3D3ar8rD7vsUBtzaqjFzqbGktnUDbqo7F4yVXf6Do1thChMAskDDcwLSUXRP39VveaoLeYjHCAexBHYqTUxBHAzH",
  "key17": "4ZMjkhE5qLbCeWqWFQu4QyARtQULgLJwdQgHAVUytLF6EHWW837Nv6Ubpwyqz1jkSy2VGW1daSxrChp3Uj3Eso3G",
  "key18": "54fpva1S43R83LfdQbZC6nWdSZ6ps1JNdRFMf44rLH9VyRb2RRruUJfRrk2jhDpHFSS2aTru4LvSYhgybYwd4xP4",
  "key19": "2WkXGEZPgUbLH3aeRpAJHswPUS2SqCNZ9QdN6DoyCERL6euWw66XrwczvhmhuV4sHjoQSv3HYAr7Hz7BtxEgLbX5",
  "key20": "2y7P3RZ8a7v94cQEdEx6VEENeQj4jeka2L38nK6HvHXZQTR45tJbXDQK2TTaKC93YhbPggruCLFaTWXBaCJPdxN3",
  "key21": "5XztSETueSQXC5hnBA8ZTBMgUXh2voBPwXNvkX8mRKv9JueCa2SfuRnrEfS1j4cCpRP9nt4svhfuwE13p7K6uKB1",
  "key22": "3K4zbdH92LP5Wd3vP2vqcxWXQruuxHPnEgPhxiiucxKveh7NDR6d1Vp2HeNdGktah6moVNZTBbGnfYMu6jG15hKj",
  "key23": "FySJADX63zXQBp69ty9WUVqqkRo4B3rMijSQij67qvFj77K4NUCiReBoB5uDSotq6HNfiQxxHC2ak4UYx1YssEZ",
  "key24": "3Qu3C7iz4GGCwHeKngzJ6PiWPPBEo9nqT3YjnK7QsviG5jSxMcYSCLpBhdeWM7bQbHXth9xwWpN9MWwA8dnhzdnn",
  "key25": "MyfzKe8tNqhVLuGKjTPCrDrDGeWCZXDMhMBDg8mGBnL4FthwgNEAKpJugdjcx6Hp993tzSqELua95WNPhE6QYzy",
  "key26": "4xEU6R9UoND2hrhXRLom7XouJ6AzdvkJ38hcu5HtZvrTgTiQewmCHBRaEXuX5D9VazTD29Tie3tGzApdkwM4wWQH",
  "key27": "3ko6cZA9jjJ1MVTwaNNamfyq3U7GQ1uUccU4e88Nm261gcpFKZzPivwu2UoZB4s5p9eyAQ91gRvB1B5JLCW1imVS",
  "key28": "5EousrUMsN7p9EbUPhAciNn3hM4Nt31DV2LP775n6DZwvw3jSBPtMC37qJ1bpwewWPDb6AKVBYVs13UkhuNiPG5e",
  "key29": "ZXLJvoKTtcRNJNxGS6NACd28JpW2Gm361chRyUPASQX9BPKDPXcCECKp9FPfsSLe9mshYPi8vpjW6RKuJyo1aRQ"
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
