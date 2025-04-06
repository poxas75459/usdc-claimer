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
    "HZepxAA5MB4ENXZVYVCbPKYfgNsdMkhNZbFUf4ZTTBGzGxkgPLmX2uMqEcQWnnQu2f2oawWHa2rWeWM9oqUTxFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nR75G7qkfHAV4DQdpj8i5JYRAW1svMkDp4xcXxweijYUJzbSNKrZFAnFC9tVSDNJdrPLy8kNES5N4hiEoM7xE4s",
  "key1": "pFzsNhjHcytG3jNX5gbrAWpgFVqvRzkVzuLPLvWqzDFKZFdyPBff8gRggmVH5t4HBD91hoYA2gLtvaVhwcLGBax",
  "key2": "7aMqjVJps7nFSSmtFWeZ597bonhQq2rJtKBJZttx85UfxeuNHU55SxfCDNmjJgqrcrXAcz2FhrYNJm25dc1bdgx",
  "key3": "2rXTUTTdiLDUMSqZN8LkYqT8mnWs4k7RFJpM1puRtq539iijuWzpQs1vWWxM1eC8XPt62sXXTti8Rc55LQg7P6AD",
  "key4": "3HRUuugrGVHfVUaS9JdLebSTgZzvFtDWjSBvmfva3YNR6DzW4kdaCHMvMvwhaHRh4evPBDhGa3bMbJDapSTcqXyR",
  "key5": "2jb7PuQzvgKp8oTGouuddGt2c6R6qseLpP3nEG6UnrL3HNWgsfYdHjLfjAeVn1nT8ZX6H4gpQ8689eZFmdV3L4iS",
  "key6": "5oeoRSMDn1wvke9MwCKexSEtPY8Juy2Dxop9M4AmpdUG3kBG3pirBUAUfC6JDcrByKBCon5nxCnB5tb73VtAju3h",
  "key7": "4fzp7UCM2KiWFoMK7Nnd3WSVXqaytHrKjW2MN5VA6GyFtZFJ8mHvvZeHW4wEkxXFrXYdieV8Ds7WiasXacTY7hiB",
  "key8": "3ETjdHH1QEBcCEK3aEHK9J8TS5e13f2NTL713rAuwEdtJNX2rei94ZNQWNZm6hTjyAYepehQGRmzNwRp9doUodn5",
  "key9": "2M7yy46zxGL83dusHj2PWeNwM534tamXVEpR7gbTouXLE8TDUVPevUfhcK4JuYnFfVmWB25DndPKfR98PaLxzCT5",
  "key10": "35xSv5K2JiNiDGPdSnV4y9pdbmqoaHPoGCufqZVQwRTzSgs9Qf2FbHUu7QNGh57runz8qPREyS9XWy5fmumjAxLK",
  "key11": "3BiyGogn6N6k62mcxJWFvTxA3xSuELtsDUsK7dduwGf9QUBAjWXoYa4517WjrCYr8xjbrVehHidc4YhqzsN6L8L1",
  "key12": "2MzAKTmDBEeywsLmt5s41bP66rFzp91LwUozhYThD7aARZS8BUyXnvyHM13Htg93eGafDzHw58YMpxrx9YiKp2n1",
  "key13": "44ZxBvkPUVodycXT9fvpKZACKipZ3kpSGcp7YKgP8U9bX4F41JKaZPqMprfCyZ8yneFd3fCNcyWzzvPWm8YF2xyG",
  "key14": "48FcvQtEtp2xFcYoquuG7wkPZKqsevr4qJDtLcVBxPWbJeCaNB47GyCGqdUXkcDxGqmAceSyqNCGkAskKMtgv1ZR",
  "key15": "292KTxHbhBboniSobor2yRMCdPNNaQvb4bZcK35adPNd1MH53asbVmxtHgDioi85bzJk4cwo7RB7mTmQQ3rmWiJv",
  "key16": "2rsjpoyKcV9R37yKnrZpJNnWgmtQ5dwtcYxJskqXGP3CEr5Kdi6Bbe4ZP2Ev4GC7Q9ZEnUQsPfHovSdaHyo4qZZ2",
  "key17": "2VckpTaP7uX1Rry4VaWE8P9hus72fvEQBEwUHabWtkbx9qy1rGR5hVcRJJuGxaFf4Ms6kpoWmzg4WbL7cGrHJFQq",
  "key18": "4Sd1RKs3CYJ8PCPqR7GMuffSLoDE7NtJ8S424efCYmq469uBdehWh53PbmoWLfZg4iDczqVtZq2Tf4cM5Uy4psFL",
  "key19": "N9qQrSNr4whESVdZv5eNRmYox1V2qMGSBSov7UySgAEzpyituDCW2YLUrPJ2hYmfLnrWb4FKHFpVcZavtgBhNix",
  "key20": "NoJEz3nJctap5jL68Y4Bd1cJPG4QxSm4mSnxEHqYEQnLmciubxDSQNiUWKnyUL9zFtEHGzLptjDUWH91kV7SvPd",
  "key21": "xkVq6HRJs86BC4txN6Aea8t3HEdQEqCjKFQd8cbV4tBr5XgQEjP5i8fGV9zpjTz6vX7yBksQrJTWZmwHsb5sdC3",
  "key22": "4Entm36b1kbfXmcx7TS6d8MUdZM36XY84yFgiHc5GNXwAhMhvpeNnFKJ5WtnGSAFGuEh6BXWJzWDqmbR5xUaUZur",
  "key23": "5GC8FvHCj9i1Z5cumfALwjwxDrDapT4xCB8gePnVFVwyo9oMM4EMRkBGLFxvJqDKkXQyTWyWXik5uhoJsVMrAyyL",
  "key24": "3yJtAzmZnJfW4SrF85iz1jQTBnLLj1BEvtLFbBT7ELm2k6tToQLCF3kntpbL7uUXXxdRVtMRshQARnY1mn75nLWQ",
  "key25": "251v1CiKramj9Q2AeNrmtqG5vhhjQNLM9z5uskr4xSbB7fJAjDushku4mvoMrNXkHeaTSwT2ejHzBdJra1hunyK7",
  "key26": "2WLDNYhgRUmvbbFxCEUoivmHnwG2YeiPqMs7NJubpDT7LRFYMuGdVSqZd16fdvGYLGPjGUCR2UDZpaDf7sNLXcXm",
  "key27": "m4WrSGTrPctL7HgUk5rTKbrZ53Xjf336PohiTKC8Magi431TuxDohQqx3Q5SgRyQuyLLNfRM4NtWJb8E1yedMeu",
  "key28": "3HYcW2sbh1uMAdr31gUAfGRcampvNDSybqTddFGoyy3P9jMR8m4y3k7gJiGG4b4fp8FQMU7oN6h7amXe8WDU7WY2",
  "key29": "25DefQBYB3SKxa2foYPsTCoAsjJq5gDTHNKLX1pjGV25MMvoVbpM6YXtKVEBGgejKmwAtpSUWskUFuHmZ29yVRxt",
  "key30": "3yH6MSffTcxqxkAB7wPRNsnfYt5eNBjf8jxKM6kz7RUQjWbpuJiLdFNyB3RzsCpGkff9bHTYce4qd27vtwU7azzB",
  "key31": "5UncBNbTn2K6G4Lq24ZbotJezoJdkb78qkxHdHbiULkN56t5uJx1wFnvd5WdWncxqNrVrD6tMoVwWEympNz9jp1Q"
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
