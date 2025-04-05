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
    "4ra3FVHsHryMJZJLQLKJwekYDE1KkM8d3m6iQ4ab1r2ZjY7eaYGTRbLQBVyyAA1EU89ugvCAaaUCmZ9fheud3pCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1ACV7RkXiWgNYjC9DrJGiPSg6cWDG5PCr7ZdCCs2uLPpNTuvTvEZugGTYgY1ZpGL2Aqyn2ZZs8C4L3mEoxS9CE",
  "key1": "kkPfuUmefcGBds8rAe5F1aGprgnZBtoswdLfXZWsX2HczHz2yZfT93SeFoj4AnefAMUTKyMfvmYq3aC9h6Mhk4i",
  "key2": "ADwKfMk46d6KR3Y3dW9rGaLsNRWJ3BHxiBRCT2HKHAQX8XXQ5kis4U7ivRo2DkNNJCPSt8E95GbawsNx5vAMRUQ",
  "key3": "3dJYPvgBaRLZ3CMPVh3pTZvtEByvbUnzTkYzLwNBLvk4cEpVqZTtwq3tfQdhGcrDNQrqYCCEgUWeiDDEtuWzEE1P",
  "key4": "3ZusiL7ALsptWB2Y98S4yHx2n1kQKVxvG5sRZancCFxyKaUSxGaY5norMm5KfQcEX1cWDKGhLuvtWsqnWRCF7SHQ",
  "key5": "ZCTxVYNAD3NWzZq6MRPU3UVd3Yuudvvo4HxQnxVAnFTmdHKfHDXZPCjM7PJnmUctDDYSjLfZi2REyzf3cXNfAJk",
  "key6": "4kMHtqCGphjQnestik2ib7d99Upyx8RyJ9Um7hEWpUAWPs2YifL2E7t4SkVAuo56mQBnKqqvbUPp43ycCsvWgz84",
  "key7": "2ufLJ6v2Lo6pVaCTCwuQSR6nUy3vmbKMRyzxqL9vFwYyFW8i8xtKEw2jfGBA1i2FJuQGC8XYQFAkwCpA1HBXX2Gq",
  "key8": "43zQok2UyXcFLTWb2EEMgfKGvkkqpWmbcZ3AVGFWHSxStbKnLZhD3fNzjXQGbdA528t5SPWfSrEKR3sBiXoT2m8M",
  "key9": "4oVgnbAoyP1QL9sydiN2BnsizzUZr56PwDgAXSZc3jG71UrY5b8c9ghpShaHHdJ96Ni8Xarp2GZiHDstA8Ay6J8h",
  "key10": "47FrDH5BfA7pcXiDZX9i7J9YMcsn64nZ1Xf3frqhaCZ6Sa9aVDsNmPkQer9T4erL48e1CYt3RquL1rM2TuiGsJuB",
  "key11": "ZMYZfsumcz9UTsAfnGzGMLewEeMhEEELZBP1CoySfZ2AGvHr1HKp9YhKDRFeHGV5mwnx5K2nACFLeqAKfuGvZxP",
  "key12": "3CVrPadUVxtxnoGTArcMR8GkgZACZsT6UJQcishpuKxfKbkrs1NFL1fKAJmuTCdTX52jfpXuSbAvXpet2pkbruU2",
  "key13": "5wrsYQBRJmTrasBAjK1M2x6x8LMdHJvFDxePUXvnBsZLM3LdeYrUbbHYXWmorwMowQdLsjC1zyBP8Khaz76w4EQX",
  "key14": "2hausWMitJ9yK7eRfi2mfFoYPcARzYcYutykqbuMY7AJvc24BziD12VSZKgx5bDh9KLztNPFtxn8WLY94ZVEAoAt",
  "key15": "3aJWsAMqG87yJYaY1xgSwcR52gUjdmkBQww7z7oM17jowrH61RRDskfMnmyCeZg6pu15iRrdn6JxqE458NRSzXi",
  "key16": "3d92XCxi3YTm9YM6oBr12jUxAuqC5fTqMep2RdpbC34cNyt67krRWqJfEBb2sY1E7ffdbJc8NvbHnzSZAnMZAF3h",
  "key17": "4DgUe4vh8TB52tVoWvoXjCx83t49p1etdtPCzUHHLb5VN3TokF4CM7HR7JAVbxEVdXSjMtgNY73L95NmK5wXCh4Z",
  "key18": "G8upWLrfMhWYJoUvLXhmP4s8uiiJ4RMG3ziuK9xY1Ns9Aynn9TG6HB7LuXwXiq9H6nRTJ3CyJ8oKrtEG6c92AoX",
  "key19": "5VYMD3oMH1EKTjYRoQm9kfssMoqVDZzWpXd36Th1QUBN487EpASHHT1jpydoJNKGLNxY1Pa3GkbWhnf7vj5nifnp",
  "key20": "4TVbrMFUxZ1wpvaMzVn2XfBkRQuMnWk1mMhbH3ty6mcuiVJTuoFAQJo39d3FcUYp4CmVopbpqoEcYKUxyiH68FPL",
  "key21": "4L1FFmWEj82HYiz4Pa9zU1tjxhemuzkf6TQoZSqsYHWLEa69ayHMkPMaRdCYCE8ZSziefXuyFYRnmPQfhRN9Jt7b",
  "key22": "3HXWcj7EevV5hF7QzjtUD5qG6d3FYsUYy2xxrUuWLHzoSeBE815GHzX18NdZZqLju58LCSRQsdnmjpAeyUHoP97G",
  "key23": "39yTuUhUcSecL3MibtQJCBfTutrtgT1FbhSyaXXFR9tMgsgGESLz4wwCLMzgqZCbQZ8eebrkAz8z5SoVR9rYfetZ",
  "key24": "4AD3B9uYzn7yD2p8dqmZ7TtJxrQSrgzLCi5qko7R6gCEswLQrksNatTQbc7wVBLpxJiQwdb51fzUs9waBoUmiWwR",
  "key25": "3iKgRLHHyJjtCA7rY4WjSPYiF3BTp5kikAWFtVbAv9VnvrxKWcs3fKavvqzaJ8x7T1yhopBLfuQe39G58tLbWhv1",
  "key26": "2TXhpf1uwkxXiwpH5DVWNGYkVxfjXwjaUnPMCCrZqTeDN1YL2ktGA3XYZvSkrzotxinr6NfbQrCRcWAvfkETxGxE",
  "key27": "2tC9Au3RUGyrQuMEnPKTLufNNuoMrTtRe8ni4TGJeHyLiwKsezv7a55dCjYHoXzkPpjLK3tmD42pQeVSbimUj2Bb",
  "key28": "3d5JgKVDFGfkk5hCJZAykRexEok9fVYQbzg3zS3mQS5a5wwY5k32sxHcAUTgykm82zZat91hDgxedmAvLPThYAit",
  "key29": "5EBY3Asi9gqgwyiKcnwBijeDYCCx6aQxtHtHQ1ScS8rP224nvybTNVg2qyj8Tc5qjiMjj7VJRyVvY3AzQ6mEEQWZ",
  "key30": "4UAmrBH9SSManeoYMYqQfhJZndbGhGFdfih4TBdwxDAUo3upZ8fkFk2mwR14gqq6Jpu7FcacmJZp1a11wDySn4WB",
  "key31": "66Dvb7yCKuH748kGkSKbUcANkm6MKXqunKPamfVonNPz33KbKCRhMPmuodkvqykkTarUy33Vjj3wgEGxiGfNFuk4",
  "key32": "4GgsSYG8TQZ7N5F2yi5bgdbgswdY1afxNndepcNoJGbTZjh2WmeHcDeLVWMMThaThXk6PcSqv1k4uhQRQ2wRVUsw",
  "key33": "2EYG4rqabsGnWXN25C3UFWEWLYexFwgTb4hyLBCN6uJxWvCBwqtuq3zoidkXaYL9FCyuqChMRMUuLu3orNo8g3og",
  "key34": "5ZbP5oxCgS1StucMyykWnqCtnRYu141rwUgUXYFYVLDrKAr5uiJUL6CFtCAdQa5NenjjPjNfHzPEjQbrCsw65d6n",
  "key35": "5n9J3aY71ifNfuBaMRGH5vk6DmbNa3oBioUX8FfTYBfAdxRSzf5JgXMqMPU5EAHDHEByPpe8ZqEVeSUrhEjUdXiX",
  "key36": "vokvSures5bKbSeBG9HBG9ZFZWQxQ9wYPLJzyQA8v2YkbUytCjkqLjW249qEZydSR2L2SYFK9CHvcKTCuwCxSRY"
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
