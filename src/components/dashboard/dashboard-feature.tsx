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
    "2H1AKcMoi5iNNjFL26W7AYcEAQJMt8RreV2i2XQ6cKN62F6iV1tYDQj8qbbLnUtnt5SSxgM2h1iBJH9sgYQPk9Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMHe8LMUMZVTZGd1JHR3oZCBNHfHdhMRUdQz1ohAMDmfGxugnEBKcQyp51rvwqtTsXRs58tEka4vGpvbHJsWxKn",
  "key1": "4ezwnhUuFbKgPeVZrvurQZ6PzVnjj1CV47P2VAChJkMViCxGnecXHjWmDfN5VGBvhw6v8vLnVvPQ453MW78xKQqo",
  "key2": "47xhZ2qQUccwJSxTxS1bx2toF99mXhCc6vYyY7zUHHzY432ftHsArJ6JBeSCLnmJcettbbqYvYJKuofgbb4BDE4k",
  "key3": "3xLCnBJ8nvNh14UDR9q8uTQ2UV7WcSgdhwyVxECZihEHgjjyGMnfoqHbdfmKCft6NsbDdGpq1xKftQCsGm4hKMgb",
  "key4": "4BVYTKksSULUfj8ewknKw2aoR9z4BF4y6GjPrewAoJw9FooY61zbJLZxDjbyjXGvZzCM7T892ZMA5iYDBvHE6dkB",
  "key5": "23K9ENFxvVG9mxVEkXveDnR6hvFhj2WBNDomArs45mis4Q84W4m1rKx5T76Wrb8WpqAjN2viDziKYGXYYSTR2oqg",
  "key6": "PhbtccdqBLiViTd7x6xU3Yb9oLdu1zS1CQmVGfictCshXcoLNp4MfocosFmt9y8B4DQvXQ7x1w1EHQ2B1feKLSV",
  "key7": "3YtVP5UGndFnT33HCFN43gMeDoWsp61d7DJPFzrzDUmhpJsViVcs97Jd71yjUYgM4yYYA1Pp8axeL6bapSaKvwy7",
  "key8": "4nUzvtYoHGYwcWnCwru2sZgTH12ErY4FdL5fh3ckKdQV8MjqSEofWca91yNZn9hbqX8hQ2SfrnSBQ55grcej73dC",
  "key9": "2jVmokEwytSfJ3vTAXwuWYPx26cwyp7ZHfXkWGDZpSh3U28deVDnDd4vZ8VZ17qWXbrNMsirZzNnk9Wi99PnKnjq",
  "key10": "2TZmsVSd5hq8cojH74puspoWBxWnypdMiFn9F5We7qj435MrfYPqcvdKBvjbLPvZpZYwxmoaNuyw5S7i5iND9Xx8",
  "key11": "63tVpbPQvFstAnkbYUgkP2nxGGbxM7NjctXNjb514oK6hxBmn13rLNECS2KJZQyGTWLWzNPDRHUCd5Ec67KZon1X",
  "key12": "2rha9rwm9GXY5EFLE5VMajNU4N8sf1hhgDPEyamix1DpxKsTxZ329wS2wt3HzYghPZ55hcEk1oEWeuUYnMoXPXc1",
  "key13": "3ySMCzV3TxbttPkjxPivmLNW1gQ4QA3CLRUtnzVgU4heMJTEUrrvXSimbBU85uGTbwqVtdVfAmkQLBJ9w7p6NYYw",
  "key14": "Pu225WbRct4LJuyon4y6We89KmsrvBzrdxtKAMikZnz4ZfHU3yKRD1vBVAa8kjQNEsaX8xC4sbZ7D8TDMxTx12y",
  "key15": "5aNLHMzHhaSb8x8caq86LVGKWFYbxidDepHyNrRVfh4QvMS6DFT98mVmnSHSxPm65WhGH7Z32D6Zxyb5TarWKYFL",
  "key16": "4yMXdtohjUJ8aLn3cA4X2rsn5pEG6pmewgxJZPTgsYQ1vrdf81Wi1E4baLU5w3KHG5B8BgV4XM9XmhtUVcJe6oP2",
  "key17": "5GMVTTyhiiS5ryvwgi6wrBkWvxX8St5x8fh7LYAzmmWPFNMrgTabU7yCjf9vUa9fx7kZ1d9fK2fVTmDPBNfj83gf",
  "key18": "4qKAwiswtdsdECDF75AobVuPQpmu7YA2LJA8bAGNZ3htDJd4fZwko9T4EkwhtzNH4JDCEvCuqFc8WbcFyNpYGBVd",
  "key19": "5G2BNQrHqb9a2aLf11gVpKKHz3m71unELxYmPY55vEPFAPQn3e1sWwEGHyZtyqdxDQHKcdfN1zF4SaKo7GrRMFFu",
  "key20": "2wriWxr1jFF6hUW9WFZMaPzkzymevpxJMhMGTuT7uF6oZdwuRck8uS8GvZXenDruYKzFxC3Q6LBcdFLGD91fM3oV",
  "key21": "2sCxFqxqUcfq2L8bBn2VApqhpno8Gt7Si1MTvnuB3YR8Fm3sASu7L4rBQnfAHdKJsR7FK8wjLv9h1vZdjMHY6thk",
  "key22": "22NWdAy8vfVHANphXJaFCmfAv5o4DJhcvoF5GD2URa1XGZ5LGdz95tyxFBw7EinxQSAJjHx1DM9aQXLc6ui17Rx2",
  "key23": "47MAQk771Lue7EA445uiC8Ucn12DQa7oJe6wvar8D5WLGR8iHSnUhPPiSGW577Dio1udZqmbQLnMo9gzajwH4Rst",
  "key24": "YhBMR7d1eFZLFxwieT1MMFhFWN5xSuGPe2ZWfhmK1xW8xSut6PEKoyHT3e3QvEaApb51QT8P7qny1qSw6ngx9Wj"
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
