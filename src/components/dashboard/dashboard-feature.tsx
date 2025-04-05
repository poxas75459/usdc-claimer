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
    "2ZTj1nVcCD6oWDW29sFKwoDiDphgoEMaFryFTnAAig5gBf7kh34BzEAAHkorYaHzYKQQqozLoAxQBiCgFXE4pwnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2caxtb9vZw1uSkkn5vergzXgR7g8WrLFP8ADvGMsB2UutnxSSoJW5b9vfFwY93WcUej9AWw61PiUyX5gjnU8FcRS",
  "key1": "5QyER8udrwQzSiNNpjiZ5S4fpAB7rPSBX1yNktjzGUR4m4WGoxRH1JULThknrpPw2KyWFpiieq3gLmdKYmrKEqAg",
  "key2": "4oFeQP7a5zq9QbhauDUdq9NQJSgkogxDCJyW2Jno1hCjKyB7siMSkSZW5ezFgbaiMZhpHsLMpHS2Kc6fhYd6Cz3K",
  "key3": "38vew31ys5jzv8AsJPKA68kem4iuXTzcy7VZKHq2Y8x1vmwj2Ken1ACX6z8wPVxH7u2rsbk6Kv4kseHtzEsqqNup",
  "key4": "3M5W6rUgyNFBBqWt27e81QhfBDJqDK5hs4mhdrKP98jmrXHSeGVDCut5QTihEgpwTjotkH4A8uuztYeErUoGnPhR",
  "key5": "2UaFnZjnZom4aq7bJaS4MjotrD29tYBfSHYHFcTqpyVXTeqWXG3Kx5zoD3NeWrsa6ycYLqhBy8nRhqpfes9PeXQj",
  "key6": "4YaErg71CSN84JJ9qPTmRBB9gZMWdZAjAKPZhSmZVQPc9kbHebkptxTJFdcfJUJiVW5c6b93vcpHmJYjDFBC2U6h",
  "key7": "sSNtTHFBugTBmKyG3azGfe53iDQAYS3Bt4ghZhJ99gF11sFNqSiYCfpwTdvC18jp3HCK6vmyaHQwZijdqu2b8EV",
  "key8": "2Fr7m9EL7ZESG3Z4VaN2RkC6rContR5mtc59Ejutz8ikFQ48CqerdW5s9jF6Ap94mbRycxdxK3KrKGp2PURCHREM",
  "key9": "2MeiV17Gi3fbkGhNrJyVaASYZ1ee7VeGmn3Q24CUx2DPNBaG2rTemGLo6LPRbUCpi6c1HxYk5swFGUNKbhg49vhn",
  "key10": "52caE53cYVwCuX5u1UDnfKxWTb8vnN4zTARhtyw7sByGrNNbmd8UQE8kJHo1hKGSvhQy3kYkLoNMzLwtsJWgt2JX",
  "key11": "hfEdQPhL5nE52959c3D2QypuhG1oFGBgsXxvQky41aqxG2YJyLFhMhzut1nHXCf5dWYonT4JoB6WixYpYHk6M7f",
  "key12": "4tQtnLGi2Bsbs3zCjtLW73pDP4DTc1SdxrbCeue6TTWS4yL5donLChwYCCc9itJtXUfoX5eCidj5YshUafnc6pbD",
  "key13": "4NULgqGdPZbWZfStuqMQuhYoyr3r54EX98bS3mAuu2w8UQSgMxsFA8ctcWsmuZRNL7NkK4WCT4KGHcUwMwzzVDPX",
  "key14": "CkwRzvy8v6BwrmcJCt7TeTPFkoa2Zeh38AmCDP1bvUw8qP89pj7dLeNKA8d1cmxmC7iY4JwnBL6RpFXmsUxyZTy",
  "key15": "48cKRGd2cpG5VSfk7MQs9Y7SarNh9LAgoGLmLFZYTBv39bW6p7MsCqD4ZqMWojdC2paNsaamYBgdWXNzodjyyVgg",
  "key16": "H6JByguUorh9ym7SemFio4Ee4W7tTVPhKULMLGkRaNQ4qdkHT6YXh5c14EP8td2VHt48dFQ3pqKs4NPd6kY3W3q",
  "key17": "3WPX1VfE9FqSDsLXhiKDV1iS57vnBTAR22SBbeQbFNinp7TXHbzyPLYiJ7944dmkdHRabFEv7dYu4Pj76XVmxoxq",
  "key18": "2vaqNJJemiQmRUoJmyz27Wzsn6totiGPnKESz9H6X9P9KLskuydkeH7A4572suDggnQVi4iFuyzNEKRhxjAcFvZB",
  "key19": "2zcmm5wVQj1aUobQPcJWaQUqRFbgP1ijAXvnCjABKskriU5nb1yGEHd1MXwtmoV1H64x8YZph6MM5cqx2Z9Yb14R",
  "key20": "x99KRWVfdw82nWcBxj44wzZzB1Z4hfXyJjuxzhXcoKdmPjYpAig74BaC9xCdzsXdayJZYfjKWSxYPZLWwULeu7M",
  "key21": "4U7bqnnVXDCTmD7FAQisTX34BePFcFwgcx4qxDZxdaCVpwe7DAJv2QAm6W39jq4PYVpgDG6QzF5LMyCTmPF4Fvwx",
  "key22": "5ZpviF5cLdmf2vVqpAzNbEdwLFtnD32XBNc27JUmmk1gDzac8myXu9Asz1sRzFpzDMa1Y61xNRoHWByafPVaR5i8",
  "key23": "4SfZcTBJu439Eoe9uBQnQKWpjtv8u5DQZfSTtoXkTp6vN13ywEHjYK2MEsqtfVoQNL5Mw5Ru2vQmcWyZa8duV8Be",
  "key24": "3GVAWppFDiwscWPjnsF5PzaKFo6Z2Vbyzf4vo4jemczHQ4RwnnYJyQBeKwDQqRUpx8TYzwtAgaBYeGLCgdy3URpM",
  "key25": "4KLF7uB9kMxm4ouVadxQ7m9tD2627TEWcTtMtiQgyZ7k3XX1XqYTREyN7s6B3MDEXbrFsK6BdMHHfUKMdWBNgnDV",
  "key26": "3ZQyqeGvak6jA3Mv2e1GLqqSb6yGAKAr8pdiuF7AqqrGFHYsSNTPjHQCcGGYZ6CzrxQX4xDnFnb4kjNxX2c3bJ9Y",
  "key27": "4acMReybKfCAB8wp8aGdmu3gkitrn3YVwFfVNBjsj6z2S27CB5KSD4PAiYAQJ6qAgDhkHsUkrB6JK12CeoX2gjAc"
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
