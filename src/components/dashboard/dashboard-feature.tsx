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
    "2uHgRse2ZqjmfJmi8dB8nRzQsXpr4cV9dfmMaR97yxRc8UWuhDXSexDqEJJWj3Uxpjk1pg7ebceeeeG4yMU6WWwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVsHhk9ENZ846mnzPiEc2xLM7RcqJbxufjkcGGChDQWJycvhWDCyYNPTWmCKu8Q3S3itpiyZ7oyyhEe7fAZeLnN",
  "key1": "eypVGvBqLjDHKPxScFXDNixgaF3fGV4nnHmSbMMjCYeDy7Q1MmBndnRFGucQYdvggeyhWhrMQMk8npxDa1Gqnz9",
  "key2": "4mPPZEodKv6f7Usx4arHQXinWMbayDXMGyjuQRbN7uXDyi7kDk3ogzLZE5dtfDpYkYFfu8TST71yFFftHAothdwR",
  "key3": "2ZFJzT5mFkWGsrfiJogPw7pGdoYoiZuH75geHwC9KnGeQiwFStj7paghXn1qsGcnjkqQ6fgfhof7Vf17dTRTuMb9",
  "key4": "s7nJvKsq5FQ1tt4BTpKPuujiDNBs7nScYZciCXJFFzjstKDLXW56XohLbNV4sZeFyUKmMidXxdP9ozNk7zhBeyy",
  "key5": "3BZpADEwZSXqhy9cq5fV4tPeSXR59b5TFSzvLMTkfUqBxVdVSR3AiK4eNqse6sMFh93Wf5KZNpDbF4mJ9o4EHnLD",
  "key6": "4xbaWGWbnRCWkPoD7RBdHZLkGddj9uGcP4jiUCdnVUhP6TYEowKoY8ChKayrfZJJ7YSwixpxKtiNMxYicgKGn8dy",
  "key7": "31pPzLbEisDK4UrHxfbBGGuLd2axW1oEU2ootqqKiZYHqPoe7smMoPUUYRi6hvjtnh3trud9ot42JEtCUgEHvhZN",
  "key8": "3ydYiFcyXbpSeRmA5xKfzxRFA36jLusWZPsGPPmxJkrgTXfqTB8mo2e6PKDjHGvG1YaFMoTS5oUkW6bcSp5QdT99",
  "key9": "5MaXyHi3KVFwcSSdnGmBQv5VEoSZe1LZ8DsGR2HZifoSx8FLmCJ4b3voM4KvqkHH6KqYa2RW6CiMEtFxBbnCegcA",
  "key10": "61y7TNTdYp66ZfzJndfbkXUqcR9VnWeFrpTGUXXH8TzKogUnpuWxBSEccHQ7t6kh7f9FaDdhxtUkprF4wBUhs1zY",
  "key11": "oPF8KqSamKeKjZEbRDYdYc9rfyoePLkUsu5SGof6mKsYWnfTMquXn4XDfTX8pzahoQaNCxxAj9Cs6WDdsimKEtc",
  "key12": "5EbGSeDxWjcy2RShD4BDP9RC5CutHEoaZpmgDsKxxi5KAYf3r7masjqCiGfo28KPsSTcNc5cEKDk8MVQNmzPMfLN",
  "key13": "2AvP94dKrzHeFvQe1idKqToViKgojvWHMLUnsEMSXPysn2H8ayfHstXu7tjXvCpJ22A34kG5TGMRmLbUQJox4Q9a",
  "key14": "2FicUgfZfvB1tEJEoNcumWV6PSLDKX5Ps5z95qBpnLLgYrNzQJ12VZMBVpNyVQHsKpr4df2Jfy9cNjwQZB2S13FE",
  "key15": "2aX2Enh6PvMwix9GcdfUcuvWwT625j6KsCUJ3W2rXcBLowATVjXjWkxExcGhDzn8kwk1FmKiRWEKKsGZ1WR4hjvd",
  "key16": "5sByNe14T86opvbFzPdaxJWwasLb5krVpeWd8yZg4wF3HS9mnNVgcSfo3cep6sudEtEXR9deDZqydPPwEEiSAvtC",
  "key17": "ePYbodbmRV43cammqJabLqBFzUwCvSTKHQZNLpVPQcsezfW6mFPCZd7SziLxcUcBBuEseLACDoKoyN4CaeZRS6b",
  "key18": "5KT3SZvQyqpJ39c7nqZaRAEdY9Gaic1WtsBLGTBbhVb84EAvZGP7TW8VXHYpyRDqLiGGeZCqkkULDUToQRq1wJMQ",
  "key19": "2LP9kzMuN9ahC4PiyZUBcTzgDMWJSPf65D61RhccFqx5Ro6AdsUDhWV1JkA28ebe1ta1QLS7YEJ3joHqgyHNBWjz",
  "key20": "3cxoBLN7km7FsybSE1DedaBMRAdN6TBp7uMxaLKyAtmENq73cTZAUzaP1Ne4FLHGm6VH3otKBDLRZwBHiMRLcSaW",
  "key21": "2vD9GaHryjp1P6w1hVf6zCdALvWj7jLQJjJynCnwteZRq3BrX1DAoGoRMX6JtJujipH59Ksm8DPaFG6NBL1LBQXY",
  "key22": "2VyVqtCBuMNzpjncU3eHRdQQGcovJJwYJLrdE5ydpqoViBt7QzyraTpzzZUcEGPLN5beSireW3p77Ai52Qce7k7Y",
  "key23": "5BuVK9YGrgArpFwpsNbaHBnq6oGpgyq8AztU9NYACG8QExeSMcCp9Em5vob2R3A69fFRLGpErRMuzasr9kmNuZZq",
  "key24": "atjEmEzjeNKqTxQor2F9eiQGc9EufaZYKPY62viUpuV3N5SbryQvv6PWZkFvHAeTmMrVzPnENPYXiw39tW6ZH2P",
  "key25": "2qvLsWut8P1JkV8cpNwiExrZSLUYvqQE8kWbsFJL9QathB5MCfHEFCKxr65ubbV6LQx8nye2uZuJKtMFUYeWV5P",
  "key26": "28ozEutbo52qyWrMUuyEHjQbmgUSouafBYRnV6bm64GEaVbDtq8w7XGgG7GXyubgCJ5E9CG2vnPqiVueFFmp9dSE"
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
