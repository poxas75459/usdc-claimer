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
    "3HJNC8ZF9LSA5qf9tgV7BjhSAjiTRfpoFyxTq4f2xdN7DSXrCkaKxdkeLHbhNtC8NSQVmYYmhijXp7KVQxipZJKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GufQXudYb3sjzhBi3b5YDhUnAwu33vt5FW4aZ9WutdUBD366WLcuBNDech7FmK9ERifSNjxoDUwu1knZTsyqb99",
  "key1": "4kP8awRdZbaHYvQegkAJzQx5ACbJC8S5nXs5Xb4pViMtViG6H3Z8XFjYN3A3LmwzWxxV6ua2UHC9md4wPfrBASF",
  "key2": "ExVhGrzvip2n3wKaQZGNJaqePzZptPHtcJjKkSeTpim5HYiVWxeTRN7Sq8QZMGuzQpJB6s2Z7NLXUrs3vE9Lgim",
  "key3": "4Nr8GP33mbyeDJqzPj7ebdLLeHnzEk7wRpWKEGNuF5RLgbPEoiX38TQ88AbJ2ZhpULw1bwJpC9oqjjUCfWfBjcS7",
  "key4": "5SctSHZAY3NbpGgSaQoTxfjnQ7o873j7cuSfLcPoMmrqkTjtHsVWRoBJysrcaKxjFBHV2H5yH1kJ5E8WjZuUztia",
  "key5": "5BTBHr2LL2nT8858oTJGFs391CzzQDrvigVq5jVKZXXfRmXiRmW65FRph3ZWkoHVyy6rHQfQpJ6bFy6yUdNTXEey",
  "key6": "2DLb6TcTfjnhu4vuqKQB8icb8D2gkmPf2HiRjyU43ArA9pHoEsRbP1HQoLsWqwecdjj4eaNtKwnLtEhWLTg6gXHc",
  "key7": "44kMJccdCNcXXdvFT7CsbusEZd8j4mYRPQvsyuzSf8CkhSmF5zKc927cZFMVJcsjTMMHYUNTTzrVxhDkRpjzepf6",
  "key8": "2qGDmCxTgg5uCz5nyJQmvitxBUZ7jJz9CQrxJG4BxGgULD1VkagWJy9kB3rtfg33XBRwBYapVXkLyA7TdSkWxN1q",
  "key9": "Djvg5MJT4siHTArfSDjHJ1Phb2Qvf7yUP6jZMqjXnNBLShT4kn5rsAgLvjBN3VJmkSHGVQQpMUmtRbU63agN1Pp",
  "key10": "3e5Jagbaf3jTdKh2Qe3MaFDJdzrchreBLGqWoZwrs6hRj6e17btWS73pyMTTkdrgz1akk8ba93WJxqMmzUioDEgv",
  "key11": "2fFxrG6hAodWV9bZAG5SRzmErbnBa8cGFZm5LpmQSua612z1Kd3x4RhEzmG51Yf7EhMFxRVZxrRKsyVN3LTh5w7Q",
  "key12": "5Q3sieaHxyt1oErCW4q5gt3FiX6gTKKRDdiJaBGhxtR1QA6C77RzSiEtkkkqnDBYvnyGu6CQJap5gwrztm27vy2n",
  "key13": "3tNd9AbSQbnBHAhZzUsNEVh1ShneQmM1QJfrTVBPfY29GK8C3JKDxgkG5jKShxQAnoSyo3PNG1awSHG3m3JkkEi2",
  "key14": "3NLtY1W3Q4iDTPsV9WwqWyQWRhumHFRdJPLeLbuowKc4pJvXCurYWrgV5FzaDFAkxq1FhMTWUfM5MTKkMeDLeN6G",
  "key15": "pfSmT6mJVuwWt14LERgHp5BHBMe952X7QYm2rGzE4mRSr5hMPaaivN29WmsESwDNCm9AwvX7tYt4QdgQjxxLisr",
  "key16": "4LyP6sMv3But3U5bWjT33sgJaowKwL68rqCcbRrqRFDS9jMFgrWD6cBvbjkJbS7Wd5i2uridjiMKPM4FdSq4TXnq",
  "key17": "55osLhMwSPtBTVomBcgtciYnuTJvwVYHXJdxY5jjxAoT2cQaXeegB7RxQoxgtCW2eXooW5XsVjHwt6NiyaLiopwj",
  "key18": "4t3Nj6yYb7s7XNFe9SBH3rEffqHjTywrQ9kLJW2bSeJxNfmAkdGvUxUf8Y8VCnJVXEMFFeoQLu8Mnx3FqPyRPenZ",
  "key19": "3C4R1E3ce5ZXP8hbVtzyr5N4cyUdANRhCAAxMM9xiKRTLJbzVd2RH1ATsmPJUGqh872J1t6rAkSpr3dbPCaH99gT",
  "key20": "2k3H17MxLUxCmgaj7NPNsbg4Xzgq1QEJtE4hx6Fd3wfi4eTd1VrHK8dNiBkrXrdiR5HaruC4BraAkMBQRhZNs16J",
  "key21": "bUDbiRLd5wUkWxieYheLgEiM9tweXjN8ZYEiFGzEwSmM4usCvQ3mSMNCpa2fsXGTNVfn6ftnCj5chVkhZuYw1rr",
  "key22": "4fPNBrLqkFJPRAav1Q2fScbNSiE2H2Nsu6R5dtuJtVajx2uJBV3Ev2Qi2vsnnRQSqMD2hh8MkTXMQtofXuktBV9B",
  "key23": "RtQmEnyWpGgnr3WMqzFXGt7dF5CUCFTx8mVs5bjNcwXt8GYkSeCEYfcLFm5CypvCnESfHvwiZhpQRLAqS2J361S",
  "key24": "2pqjWGg9eegSsAvr3npXHoaqfhy52fb8YQTjGcuHjEYsbcV8ct3nrHeE84E7216Q3g4d4aBDFAuUGfLecDy38QZ8",
  "key25": "BzoA58y9W8Zh4AiBghyPa2eCkdUAe6txkNxkZz8fGE9pjq11icVQVGk8vYR3hEoufccE8SPwyKaPazojoLj1oZp"
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
