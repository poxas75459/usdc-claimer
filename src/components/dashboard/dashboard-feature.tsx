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
    "4GEuwjQymsfwG4Sd4SdiZTa1DxoqJWVgRppurrgiCXKdMt7RbvaG3wPBK2mv2BxfPgEmgkdoKyon44gWATSMFsS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfkjVfAmoqSkkQtJfXmrGRESQJUSvHumq2RDWFGzbHHWwQVABTM7qi3FxZTni8J1WCFtMSMrCHsagyMbfHouS8H",
  "key1": "56vMZFBU4URDooU7UH6VQ7WkddyrLewG2kjLQxsSnd1EHV54cfWQRmjLBHitP96vjLM4vFtGDNKHaxZ5aJqK8tdv",
  "key2": "5sqdbjEEFaKacnGtECmGtEtUH3Ctpv8rQGoziVPGHhUh4hYzZHD5HxyZEdhZbawnE24jeCSLm9CjzB36DnXPxXUm",
  "key3": "4xhAhUjD9KgLZ5ma9XUNqpiKzEa23wZeeADAWV2YpQtkcgUTxga7UGKt4mpBqcTTewuTD2zTfGFpVqfA4d6PVQHo",
  "key4": "61G98YkvexFGv5QaAZNGJf7G1GqNkBZ6TJcx3cERKwjezc3r3WZsB6p2vpGrXenZ1fg6oYJmakv9moGLKmd2X19C",
  "key5": "dWPLmNhoFDxd649AFCi7iCfJBAEJx6DVkKis1LgpsP2xpJxnhUM4nh88wtvMPvZUoRvGmh9XgKhJhJsYSeSM1U3",
  "key6": "4NCTwbCLHLjngJQdifLy7DoezbaSf848fPeVrXiUqceCC6xtJT2YKAu67XaiL5J96DUoET27WcsXWfHp8vVWCsc9",
  "key7": "4YXGq84VZ1em9r5bk2kkBYGQE6hvWmUPU2L4xQi7XZfgaH8DYjbJL5sS9egA2TSaWKrKsdiDYHLUjmyBWioxke7A",
  "key8": "3kdqFnR75cQVBBE4bmDstNhXTR9N7YdoksszizwvAwWKatKcPP6MzucDsjL4mHtVUTsY61YTZU56p5cZ8pLkr68o",
  "key9": "56s9KGM1CjrCjvnu8HVpJdvjRi6Th2Jpps4c1R5fkrAjWrTmvqazGe5RLSrSgNYbhiTaSbo1s5Pw7cCPzkZDwoWu",
  "key10": "bY7aQLdWQpeqqzVSeN6GaHxJYqoq1C1S1BTb8VLauz3n4PirBrykpQ8kgL4fv8CWtJof4TtiYZXEAAJMCrmmuJ2",
  "key11": "5dZVjH4E6JZ2UH5oEs8Xrvm4sr5mFLsrWxruzYYLjPEdMwyJBry1RGrDoCxbWSnXy8UwSTpeLGVjrwvxe72TWyJk",
  "key12": "2mZNxaKsRu1rtffniiJpZauG8RWYsQo56ADwM8F3kQZsWCNrJkBr9Tx3yR63U4BGmPM2GrjWsj7JFWmHJKML8Jnz",
  "key13": "5ha89shtHSM8ueG1iF42h87Ztpy3BfLUW59TC8r66ecmuzqDtuEUtda6JjDWann9ipgYq1VqSBZnRhZE4qcvmiL7",
  "key14": "4WV5xneX9AQMFG3bPn3Dc9FMPjPsgzCyGRn8YxqaDZaeEzJkw6qydzK4EJUQYYwwSauTAmrL73su4QAjngjTLrfQ",
  "key15": "5dY4V5s4rzt8bX32o2gATMdBDBrkic6GFkNy7AEwLeScvYHD2BKb4qwitZQNTNSpyUxNXivE4XyUw6wSEzKqPyUB",
  "key16": "61oArRuGb7qzMbi6yY8nJ4zW8PQGeNpDEF9vvjKam8NKUrCP7etMeHMwypmrxun6hpPL2S3g7cHCGVGLV5JgAvgZ",
  "key17": "5ZTbmXRGujB12HoguLVF3ZxSs81MPPG51966bhYNWUnrh3pT2w9jV4wPGRGnSRjcxpVnEm1y9wg5vPAvb34G5y5z",
  "key18": "4wDoxYVNErQpG3uoALrrjsNMGWd3M2TvGRhVicUFH2R9iQqbVe62hp9PPkfw1Mo9w5AGEaEXfv4CXpLtB875tKWA",
  "key19": "2Sw5qgLa1MDPykuJTKvP9dw539pwbkomchpp639Cz2L6CYH7nUXA4AfoQqP4UfxYPrqHTmvvjD598EGfp7YFRjpW",
  "key20": "64cQQkRBZWMpffuctNNP2ymmCcCGVNimnbQRfcnjbRDzkN8bCguDsAWJJXzqjn5suvBickRxqk74aerKEfpLpCrh",
  "key21": "MADYJXhc5G5X4aKm5Z3DFDeAMFgfNPHeudbNhAUc4cYtVB2j3Y1RriJQnQniM3KW2DoomFM51yFQf6uKbwPuvhA",
  "key22": "2EJSHRTVETH18smmBF9keEL6xbGXdwDtDhUnXFWcVj4gPKeFsP8bHWe9bQ39EBLSiVnz5t3tbama2xwFh4XfZrX3",
  "key23": "4FEq8zb14HaqoUYz5VKJX8vKx7yKcrbbDdStFppQa5awkKwAoo8yHmDuKhqx9z7kGgGFDZDcmTB56GcijnXwsLhd",
  "key24": "4S9pBR49xsEywqM3KTBRoYR2eDUmKZqP74SGenrX6ufJn6suNywgxq8QTYHQk8r2Fv6zyWcku8T64RK7KExScWKa",
  "key25": "67p7QXaPwjTdMxb3S2Y9p7D7DaPNYqLk5ywQSKwTGtZLPxp6WihCoHM92LkKftucwdJMt6xfSsX7D4NfWrHznamN",
  "key26": "5p1nU5qPb9YRt1GgYmmoe8RPHCLWZ6NzfonjYnWn8URBqrX2UBxHLJ8P6RLePNL56vUvRbMXT5sjjmoWKD9eRHXW",
  "key27": "2nJLSw6U6DizYYNNXafvAjG78KUKWfBeS3NubJAh2pDZWbdA7gSGUUqzEr71kEGMPb3vENsTe9xhKMKSBWh4cm4",
  "key28": "Mkj68J5ifkEXNvqWupgDNxBav1t2dDzmSWTp4YxzE2HGv1C3HaD196riVjqD9UnsEj9i35rUHcHWfzYKczSB6wH",
  "key29": "5Yiq2DbeAykzcpX6UCSXhyqunX1ibWMUyx4PyXJfirrERTB19c94zSrVKRFPzp88wDR51r2UtLhrTeqzJi3A5ZYE",
  "key30": "4iFCSrFALt9vLonCH246YYxsWYRdJwvCsmqhpjUqd35PgjXYHpPQWu8yFgQbSj7cvGGkg2J98SLRw2fTi9PpJchM"
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
