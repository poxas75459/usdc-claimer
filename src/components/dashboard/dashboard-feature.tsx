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
    "4b3VYJNUuk2mgh1RsPyCiXPakDi8yeRKcUUwoHKCqUBo5KiwnXFLvHZFCamYSLgQVtsuBNyUkUKD5KGgFWV3movX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBtzbzHuYSf4ZUoaH49SNGzrb1Ggy2wWTfKRfnppw7K22ea7L872A8Pcencs7dVMaLj7jHa778FnyNExkkMPL4n",
  "key1": "3VJvkgTjGBihCP9KxvmT5QCcfxrbpkf62PM89jJ94LAJdMMHNC5BuT6Fyi3DP2gyEzWvZSLWLzg3KhCPXeCbHrTH",
  "key2": "4j8uqXGnBQvQtiUa5kLFmEWvcEfdCQfCntcGGE8AV2hZgxUazrASinrc2yqrCdnwvfRt4kvthPWbAjeydDzzSpM8",
  "key3": "queBerTiGNKcMkztE43UGh5LwiTkSdwE1nLrkXVrwCgsw1ALxjCruXAwFoiFpSXfGEpng2cFqQGRrax1TBPvYrz",
  "key4": "4gFrr1rxXxUtBCzZZ7Y6pp7CVJV7Dy64RfwQ7wFqcfo92nDB9LZoxYYo7fccMcuh1xYW3ooKxNdGJapNKFM1s3ji",
  "key5": "2UAortT9rj5ugMwrznwPERTT1LbVzr4RhWd5rmzm5f2CHdamL1eEHAbJiscZskKkVFrCnAZg4gfw6DNxuGgQCGb3",
  "key6": "2zzzDCozvuU2VfxmUNJ2WWXsQb98sfz4oGqtKV8vTzvvda35YMEAp4mrmX1XW9jcLSozt9D3FtBvCraDJphSw5dY",
  "key7": "3f7WNGjV4uq9nHXZLdzKmxXCeh2rUjgp3Mxn2UVhFV82BWsmYBk9jMWLqXgyVGvbhnhqtcK6z6Ewsvh5tJbsaqTY",
  "key8": "64YtVmQaV2uWdjKMkgBz7DoZpNsWTUMy2F9CX7xmbbdwkoX4PGfJzBZ75XTNe9WRpQHAZvd8tg6cAqYgyMcwUb4R",
  "key9": "3dX9rFKYdCiqhqmzntCLmrMxtGNyKAStnh1W4W29KmjsCbCWNyDuViXvHGnykca7uRomwhbwRp7rXqVYjxLW7wCw",
  "key10": "54ue4qE44MnbmzdoyxDWpzQTYA7wwepvg8tmALUxJFK8E8XETxCdziY6oCxEs5kpht4cHAwBxdzckj1J62gMytYX",
  "key11": "ELiUmEegKpC8MbSPoWm8zqWLwzG3fEv8jJR8vbwEUsHBdQiLAbQ6E3DhfniVfhz4K4c8MBuv2m69yS6KndVxtdW",
  "key12": "2Kq1EoCg4tsVjUJT4zZ2NQbwT2Uugyf5oZ55Jj6C45RhSM7LZm4V5MDfUxAKErzi4QjJ7XJtowU5ZHQSny957yJT",
  "key13": "9paMzFrx1ofnLYp2GUZdiXvnBm9441YZ2WoXtuAqp2u6kBcFMCg36iXqDWBtrY3QMaitXzgVtgQf2rkWRCLvP36",
  "key14": "5n94Sh1cE5nE6VpZtmKw3eiArkJ3LNonR9MZXpaFKqPsMjgiQXLeipoB1cRHNpuaijfdMvWqFdUqKMEeEdxaJjUd",
  "key15": "2NYAWWPi28Kph9Edd53RcKaztnwJScU3uBxWqMnPsaSetuNaJTDJnj5otR7LCYt89yz29fdHwWJimpfddhSkidYh",
  "key16": "5xRR8yNqxKVrebJwzTjzmJeBheyqRxqvQTh8ZdgXFL5ZcfZjkKsHGXtL2jsDigN4JBZENqrVAfiJkwEaKSJ6jS6X",
  "key17": "7FvDFseFQ9aP2juNaXvj1EJXXd75qoJFWfrbRqFK9uKcNckfkVDsWL73MDrPkXRphJCzwu51aZjVLKtc7LH5V2N",
  "key18": "3LRzTapuogVR2LujsMHNkGsAURhgXMH3mEKXYYhtWJjFGEV6XExx9vXiEoqBR6UVa3VjKScSNiL9tPZ3KQWL3U9m",
  "key19": "37zaEJvHVMwxmj9Ud21zfx48UJNmu5xKUNBH4KL2MgY7D4chwpNv9kJ6eLHaEjwxkf8oucMw2d1YBMbBBrBRp15r",
  "key20": "5xCroC2cTefuGz12YwAH7ruN4AtShXmBX6NeB7AmqUKX9vd7DiGNMkFw3EoCcb3wWCTMv1RA39ScP6HRRev93fUP",
  "key21": "2G8nBNro8ext9Uf7DJtBh7gqAUVr1xcVeMCNAzBAdKx7ZMNfNaZq8Z3FK3zNh6UwVQMmpiQNjKjrHxUnTYvnjxct",
  "key22": "e6eaEqXPGN9aPPcZTfcUJno7dedLDVF841ChN1CrMrxZR9kmdFd6RETspQop2RXNEUV66fp595QuEBwUgdbNjfB",
  "key23": "5bZTkyzr6oSSiUEaD7yhGFu4Tz5zT12vk45ncPhJQyd3eHqnyce7hdM8kEM1Xk7dKdUd2xn1iSS3khBXJJ8uvD98",
  "key24": "2YjfAB3NymLmttfYaAUMemMLtmEZJbXSEyZjBEypodUNZkB3aC2m37LXVoFdPwYRaeRmeBmMt8yJMgWtafGDiiXg",
  "key25": "4QiSmDiccjVPy87RA3GtZxTQnEWEJvet32oYLmwbeXicwqYV21ojH57nLSQnnzJPQZLSjtHZeUjE9RrmHm7bPoAz",
  "key26": "2qMJYbGkyEnBhHs5Uk8QhXdASjNU4133hFzjA2XfTurprZP4hdrtJpXgrup3srLRgsYQNrQE9RXqUG38h1yoDHPT",
  "key27": "5ZMXfS5nst4rMcQy7WRXBHUfvp93FPGU1WmpW8N2Etr4hxSr7r7yQ8eeAV3Fzwwdw3DjUhgFyRbXe6bCJbYH5Gv4"
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
