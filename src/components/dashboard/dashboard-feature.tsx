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
    "57ra7pDdHbRnFKMBfrf5JGuKVt4L3iA1kx4D9gMj26GiHHQpcyjA2DQfzGAYgM74USf4Tk1dPuGbAsa1x6BbSZ4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYBHkuZEhsy53Ss5QyJADuECKyw4e8icmWN9tRLRDR8kc6nA2YMZVrmu6K9txccQWLaK1wGLy2QnwuMeFivmDYv",
  "key1": "2HDtKQHfsgCPaq35k1ABW7xhyqmUEbz2m3ynaUpDVTdv6i7yUDqxdQCtjZSRjaGQkzUxCaRX7ApDzvjXarSVAKBf",
  "key2": "2wDbQg4X3BtkGV7xXkgKZjPFqoq9LABJ9z25G9H3zRjW7McyjW66oN3XLtFAgEousmeAVMTfHTYcZhvLwpohtN1Q",
  "key3": "4DPf4ZraWh17Y3V9sTfLXEMMhEza4BRFUJBGeKPaQaC3JXf83PyD26CpBax47AR3se5B9pkLaU5ZwbqoZ3MmEFNx",
  "key4": "5BrcsrApeob3rsoBpNtJxTasx4pQdhJM3ux71vTyuMcKvm1Mmx4gjWjaBMpMbuWsqq9dYGfKgcbDNsxDmKxntGpg",
  "key5": "bTGL2vqPSyRWvP16KU8N2BN4P2EjXpcME5Tbt5xrNLXEH6icLV1MWMgqzuXcszdqQ3uTSQUuAFEnqN3KPE34PGo",
  "key6": "5B36ZE7ATZjGxicp27inxbhjgzgtzaTsETh13tt68BoQEbKQSbG5CKATsC5HeWtMqiXWSbBptHEAZxTrrfhEQTCD",
  "key7": "5t9gTogeV6foXjy3ocDjtJheRhZp8Zodu35jfFeuuxj5oFHWZy4SPZCeqYqr4p9S2ZmBpuBswFMLZEDXb8pVSUVZ",
  "key8": "3YqFiF6LjFHyfX4R5KmXacTZX2JEHLrTLDK9q9WjYEWMffNPN69ZWurjNnzgPCD7BkSvTytahwVnchRFJdMjak7K",
  "key9": "3ur7wqB6mXREr21wRBcRQxDwHhuiW2mvK89YFKsMyq6QKG49h2tiRLYfFirivHtKFni7pMt4asmZ5t1KRY6Pf4oj",
  "key10": "38YbZhzkHYmm7bkxw3TYwLMtG1LCL1QqVqPqz6f7c6CwRTAPNrWhfb3nXkgEk2Rupc6qBgKDYBEtYZkXLzRW5APy",
  "key11": "DSn1HZxt6jEiG6h3mYXoPW2XPAkBofYJP1AtzyJoR8vdoWqEr6Xg7BaGqfvjpyQMQ62p1rgA6teWUzdEuemi6ab",
  "key12": "v3UDx9TdxnLbEdPUnJQ2MvJ5UuxuNKrFQsD97kGD8Rnsa956ierSpWkxat2poTzB7dEuG9roEx53R3M1VfuHLnx",
  "key13": "2zM338YyrG3RYBJTthWjSMp1QR7BY3mTAuQqwpveRWS4x4XLiAN9BMXqD1hoyKZMif3sGH2HTfYs4AwaXUy7MiC9",
  "key14": "4RDjCsP5Fo71HRc7tvj8Po3NU6uYr8SASGr2HqhuuorUhyDsYayu1qNNNdmLxfLXpiSXg39rJn3vaWsJ8ETqbFko",
  "key15": "oiBe7HUkEBhgZasLvKqeusBjvRxrnmtA5Xgo7aGK9XBGNa9x2dn3nS1eK9ibd4Aa8RSt6eveT1ZxAV9yYjqQfSf",
  "key16": "4rWRy2ZZKMnMkJGFe4q2eQfALXCHp2ZVXWmCoQhoZqgh6jxxCmfTRt3spc9QJtbFGCuv57CcKzj45Gg7xV6J7f6u",
  "key17": "2ksqx5bEUNvMenh6zhqeHYsXYGvey5W8vBv8Mu6xpd8NmDoU7pmLUiAMCYvSGNU6yukDdz1tuBdQvU5ZtMYZVZTx",
  "key18": "5Cp8HZkXDNaTWhpFthFnM8sZfBLddmJrqmqkugKGWDo2kCKhuLKZt7p5aM26gauLtrb3nbVFmhTmeMqzp1LxwY44",
  "key19": "5c57LVrZFg2BWuRQJ1wupvGj91oMiFkyYh3zfQhvNSWB568WLz6g6pry3Ks7DRhGT9GqysqdrPi44J8bWExobK2r",
  "key20": "4Xq9KEdmFXZJ3DveXmWdNJ7tYZWPpzEwJKtjsPBdgZNVqWbhioLa7G7kbkKdx4PxeXvv9zAjYdCRCHcXgET2Lrxb",
  "key21": "cAnAKBoNytBRbQiXPR8p37nfehC8J6xsrXiByMmWgSQjMhq3t7EimVEy3feBuqM15fLfvfBAcTsP9p5uXcEAce7",
  "key22": "5vzTs1PfzQsVu17dyxd9p5YjB59MWMW3VKbGRm3bJYht3t3BpfViDxa4Y1NBEaXtYZK5ZTLeUFT7Nx8hsPEJJZ72",
  "key23": "4VkPDUArLfYmYWV7iRf5JcBJT9DviMqC12qdW5AGxecF2XhMGRWfWhD6PmGNNsrtjuUjPUfGGqwMibpcjpdBsq9u",
  "key24": "2Yp4jy8Agiz8HhDbS8HEJUumrpxtMejcevz9BgBk9evKbf1EcP59EdENGrbMdjFrP3n4muUG2YiUHFn5pE4ApC7k",
  "key25": "2G14Bj6Mts5sHAazeutAnrCko7fAxo9NqVRweutwQzjhwpr62erCh9stLB2285c38yqXoqLAxFmYFR7K6NgxLEKs",
  "key26": "3spGWY6gNxXexrzKWYbBfLxDHpv4hptGmAmGY9GGEtUo146Qa3tNG5wL67m4ojPDreMGuySpqL6yLnjFMLBejLMe",
  "key27": "4KMe7ndnHZcs4ZMCb11sRBBDebxDQVUiDbaHUFT1v9RpiHHYs9p1GoxLaEBxSpa5J6ar7YxWeFFxwHDXE5sX9Lf6",
  "key28": "5kjaPTHC5kjdfRoF1wjBfiQ47PYNCtjkyrDFHwykekCcuRde1sZM72EVnLNoX7DDfeXkQdEBfiLcYsuL7LU6AotN",
  "key29": "66pTAQj4KVPq5bFdDba4ejpKYRKfPkb1SRxHo33RPRpZQbe99jMrZtRYtpMjVpBDmdfR9tTVfdXc61RcDNpN5kmf",
  "key30": "5qPYbLh8LwtAYh1foT3a6XYpQzE9Tef5Cm3KD5i6aH7a4bJc4RwQYyNQDVyzmxgX2HeC8wUMZcm6wk4Mbhj3zPQd"
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
