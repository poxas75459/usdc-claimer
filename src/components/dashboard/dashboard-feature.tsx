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
    "dxNZs7Pig54QoPH2R1SK8uaDJU9xo6RCFr2fLQJx6wpXAcNbf4L7UJHbz1BK51DCqeZoHH4aMV9S4kUDosvbQH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NC5Lq7bgzp6VhnQtvR7dLMnQ6meVE4Kz1owo5AhMA2tRGTtvhmogQVmZ8xa69GZWdqHictFcLmmUdEquTigWenB",
  "key1": "5hTtTFb1tHVawchnojhdixFd1Xtha2JZMMBjUatUivKs7NMSivqnL8LjcnX1mhPErkGXf27bDXgDuMVvfVX597Vw",
  "key2": "56R2bHNCiNwYQNPasgsADMuJy5LrPrMuuJDdV1C9EWYec1KitC3ffvWyoAvNSiokUVCJUGMxapFUCkCYJcAJPZtW",
  "key3": "3RA9ien7gkPp2cQ41NjbLdz7TM6G7S7z4M6GQJezGjrKnfQMW1TS2uVUBwy3HErqVYULL2frDT67TJE9Gf32LFxx",
  "key4": "3mih6YstUrWTUH9Xcc2mZEVFBVRuTkhc9BbcKji8CCGPJPGbU1rn63VYxqokGgS4khP9fGbeFtz4VKeyE3esaoUC",
  "key5": "4QyCXehw46DVgbSXUamFJ8pWJHVcAu5hCX37QGHv6j5bmgFJZZjirUGMVGUNQtemjHJqjxiMfwL5uzyyByniQjkW",
  "key6": "6347GzoYwJyg5L64LAGAFt68FJSt2HzPn2X2EENUEVzW8MzXCJ4FaaXTEaAeBypTfq38CnAqzLn6gwKXBcoE93hj",
  "key7": "321c5npAKRyTMuux62coSfLyAfqMzevywAsQfTNsAC6tJ2592D7dEYGRx6scpZQvDqYZZPJa1zgkE7wRfVQu4S8G",
  "key8": "3pq6qTvzxeJ7Vq8B62McRcL3mQvx5qkFJiF2fHK3bEVhtGwDJGwyXh1ND2rr71Yv1RPePjGA5r3mH6mGSbJZuD59",
  "key9": "4Ypb5o4UNAmwMfS5VJh1adgv82ibgmaB6nTczuWXvTAyFTeYEUmGbwpZrNh6msRz5u8R2CUVoFGH3eQMW7A2HUiv",
  "key10": "5ThghRg8T9nhgtfhCWsHgDzcnGuZJtahrT2K1Ve2nRr67XPTqpEfsDzg7oaHi7VF3J1i4mv6BDzV2XxL5ZX2WC2Y",
  "key11": "62bScAxNQCo4yASCmHwL4J49o8Dywjv71i4E5KdBQPpwLxaZNNT8j8WEEuSAPDNJcTNhSWnX2AL6CYYUK7QER3Gk",
  "key12": "46CSCtXgkbKaZUiN6ohFCwFn3NPxLxCcjrChvVCwNvw8wm2ZPRqwUc4RmpjnxGHmEMyNbdPSPAJJzKuPPjGgKsZF",
  "key13": "2oGJLQZEtLgawtuNueqx1fDBfPAPUdY3Y9eSFsBC4Fb5RyHaJ78iHJi64nttgkqDsddnxmpw62hVPtroRn4ETXqj",
  "key14": "2EfCPomqofB3kNyNR8RfmbunV7398UD8yB8mLyaKMQVLKtff4c4ZhYS79scLqE1Y2mB4UmF2CkcLAeGVw6EQVJFK",
  "key15": "3TNdpaHyek14cCcZMLANLnSDVSUQbtns6mA6Y7SGm2ETxGkjb6xyx49gTaL63tsh878J42jAN7Z2piJ2fkrhWcbZ",
  "key16": "3YC4fTNYy7VhyjeJfhiLaJbSYkpNTARDNbSACcabdtAjTaso4zbiZNi2QsA28sHKf62AeaEXBByRwnnu4R5PhdSs",
  "key17": "5isHYdzL9SJUCg9qm5oJrbqCATtAtEy8UEqwLEr8oSj8K2D2Zk67AtT3PLq8oRyUyT6BtyoTEFC1hucNKNJvGBx5",
  "key18": "4SWhKg7jWRGrFEFzcBBzt3RC6nUtoWFFtSkEoxGKFmZcEYGK55DP6xqWxxLJKVFdJa5SQziW5oqbq7n1VzzbqiNc",
  "key19": "3CvgtDzE2i16L6dKtoqT4SNUsyufZFo1E1kPpiqZYL5oNzymyLAK4WTgF5ur6bjmqndRf8F7JdJTRQizhWc9i4B6",
  "key20": "5eqB719aZhmBBsLdEs1nm6xeRVtEV6LYaxYqs8N6VzMxNWACg3Utu3LaRLc5ZCwM5LsKPVgqdybKpGRBxWRaqrNK",
  "key21": "5KFXaU1B5fVJzCk3M6x6SAqem9ZnSqtFE38SWqCyRM1jQ8TytEFYAN4BrXBMVA8Hbv46z4SwxhJ9mek49wnsa1Lg",
  "key22": "3dvidNSW6YkLD1ZwsrsnioiKJgJwW3YrBsx2VXPtAD2afaVezmmcEpPiUr8awFCKH8Nts8tEHdePiffr8SkHzKEW",
  "key23": "Mx5QeQ8PfR2CSmwNqDHaNDu7v5DiG35ksSoGpfs1koCRkLnFgmbjYMxAdnTzJ2cQYq8WHdHooN8PmSWzNx3d8na",
  "key24": "4mmmkYZoMBd1prtzNCg4mMUYw684bdqrh1s2zKEGmmZiakhxKS9aNdK4hF1dkMLAcGrK89kBysXqNQxXpWoJZtRL",
  "key25": "5BwipPNmsjyhuPJbfd1RsZE8Eo6M8rEgMnw26bS362viP7HFZozjJzTmzeDF5fBhfDVpPAtMhaw6eArYKgus6Aap",
  "key26": "3Z9sLLxCJBAweQVh1tKn6Ue5cQqBz7q2GbWb3JdZ3yqxJ7D93RcqDLC78unRbWfcRKuyjkf4oNcSSMcmQ1B1VBui",
  "key27": "5qvhdSW3FtH7d3VnfMFXWc9ZkgRa1ZfHaJ6pyovHQ2rF6AAQomfuRQ9Ho7B3TLCcnBoTvQddAQEEFjFrnmcUgy9u",
  "key28": "5Lx2WQLQkfd2yw8A1jXic3Gse695qjc7EeMFvDmBLKTShmgKrnQ4gHhUQq6kq5Ps8oV7RJNJjDgzoU1oZ6f56nfM",
  "key29": "7fbfPTqVzRyMYvkBD2JJtZNzAbUqVrvM5crj948uPPJY2iGNzzxRbEM9jMs1BCmCWX1eArvoFqhL6o7zyrNU7C7",
  "key30": "3H7VPJpdzGwRaR1JaApWcNcYK1TS9UFviwvH5F44hmcro6wHPqoUZGoR5AFH4XCESvr4rpPvVagUA5v4jeoz6STU",
  "key31": "2txekwHcpzn2a54vptoCE1oAJe3JmW3PU48wfosYmgsBzuXscfuVFzsE2appdZ6Cmwaxov2KnzTSXmUB9uCxokzQ"
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
