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
    "5vdh9na8e9LzpExRTU999aNvDg3do3Sbup96gfm4L3RKM4uJGeXKoSQpkvYAR26Q9a7DoUVZc3Rxexbi7CRyHTJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qy2Rw5ezrYGB5APVrH9iGiEt75s5ste8944jXiYvtU8k2b9ZgC3WJvBzK4knnpGbkoeGGWzAvBMrufbsCAUaB2",
  "key1": "5H7fZXdtfu8WrmAxFDs825zGm8i5XJE5UcJeJPSicNY6a3L7NicnjTMWBw1NLteoNDE3nPnCyhxwMSQMqBHeAWf3",
  "key2": "8bpe9afpyXjyyREXKmodQXMfWX3CyDbg7wrA6BdPEnXCT8xZBvLmH8VZuLPxugWP5Gpa8Uf7eRNqzWUvkgmAc8w",
  "key3": "4AsWKZF6cPHRDWUoj1wGcduVTvZEqhZTpBZVL9MgdBQ1hYJNYHEyG4pKFtZg9JWGD4Q1SMnpmEbLJXKo4nry7A5V",
  "key4": "5S4nJJXkhMwRgKPSpHavjjqHeJijJR792LNL1QBT1bArKDxsNZMEpJghvo1izf1zVTzudpDiNXuk2FYZHfA9RAAa",
  "key5": "4BQFPVy5qmWYb1hN3W91NYrnbiCgioLnZNFgmgsxwDkg4RDhSETibSVZ8ySQQHjqXYkTZfkEq1gjQ6C6Ci8K6ZJd",
  "key6": "5oETUbDguEYjLbiJtK2mug9XHxLCuwGidBSJig3srH8noEoQUQXTWjEiv2FPw2tk2tzc75q1rBy1xcp88ekKwxY1",
  "key7": "5i9Xb2HfLu9AyNyvzGxknzcXTmAbk41dtY8TgPtKqaNorBWvoYUGXuhCCVoyvPKPcKarQ1SpXzRV1aB3FVCacBgf",
  "key8": "4kP8kLYM7J3p5eRnMyE4fjUXBJsPaHuZq1sAoqCqBDhbmpeZPDcfyfQyhSsE7LxusPFkteAKKfGJ19cwT4GMYvAg",
  "key9": "4EfN6dXN4vykzLxW8MA9zFiBwpDvqAwpVxgfzNbcPcqkAhKvV5BCBWBEsR5SzfTzPRnrVnEocZw8B1fXwWer3Q6J",
  "key10": "5e4ZMbEgcEnZ2n9rGXpSMxBnq7q7ktN3SPW4ZkTAJqCTaJcsD5rGAjqXGmED2WRgLHHX4KRxKrAyBsgP2WpcSWTd",
  "key11": "4aEWCjCqJmgpYG5E6xyrEPLz9GQAVMijKJ913pGGVYqceX5gJjNfwaMnKmrMgG1nVqiYfPAWHPVzfAPxJYy4tACe",
  "key12": "xWzp6VzwLEUqnb22HBZBAPT8TuksiuRAWh4fm1CC5VqMbotxQ9TPdu14UVkMQ7AVzW4Y2Mz7wrcx4aLcMSoehJZ",
  "key13": "3yVSc4JTZtNX6nVX9DYkJDJ9HtHTtgq4iD1uvJ7yngoDWChK7BafZgsLbeNn2Gr6rJL7MfgPi2exHQq9Z9NzaA5K",
  "key14": "3gAyQeW9AxXv8k2Az6DhYfA9CURrwpCMZ2b37FrqyJUEzewuejMg5XKAvZbtDDfbCv2LjUTQcZ7VLqwJ3evkp6sw",
  "key15": "tbBQnGvnamejMdLgGxR4n3U1rc1JC5q2D4y6LpfCtgsrzXNy9ofpmDsGuaNivx8SACt7BZD5wXJvreMGnuUT1n5",
  "key16": "4qmwvQ8dA8Szuhy2RaZVT9wGs69iTkDzC5reHxPEgd2beobCrwXeN3xR2mK8hsTVdJpNpMTdbB3Q3VshDbF3pMBz",
  "key17": "43HcwD9Ygp3hRSirVfmc9eUGNXnNREw5VSVSREUNUakVAuKK3tViE4EpujMSHo275PaLSJ2BEm4tXuwogchzRCy2",
  "key18": "5hon1PvonD1covoSgPhqTT8VwyW6qF6K19AAhV3NPDHyf5Piz5xZefjS7UhefV8UG7mnpd7Fm1AQ76ZSHhScamfC",
  "key19": "2aAja4bivigtGq7UUk944o7NxmukANvqiPtvVTLrn2v6iJqGave7wVqrzrD6P1rvpiZFQnSdtL4m5kBDp6LxXJ7A",
  "key20": "5rUBj32Y3bV7KwNxkyigcZdJZME6gCBjdReUXFoncbaaKno9eE7n83JsavUkJ8qzPHQyxnNSBUA8ahxJctNqRD6U",
  "key21": "2Jb5Tgt8YDqb7aCqdDYsLggxDuM813hqdSik8ZaaZXxj5w3ELHashNyHc22vkEbuDyvJWaCjxcATvAGx5PpMhSZv",
  "key22": "5Dm9ReztRViwNuvn5EhukyK9LsJ9v41CP2tzsut8TPA8byeaPjp2J6EzK9LJz8s65F4cbXywg9oWFYm5Z5WWQKcA",
  "key23": "4ixm2TrHHtZKXUnJKGAbD5uM5dTu84QQPt92kZhiiaDXs8gmvBJxzJW9saw2jooA1CfAHtUr5z259TbFsk5s49Ce",
  "key24": "FHXabiD5y1dLzVJ7cnkUvQ7N76gPa26KAUGpGo9EAPh9D2Pz39cfQfHQq8rrJVhLBp1FhAAX6ZhrSVhUJCMjkAY",
  "key25": "2WeJLTahhjnDFeZ8fabhvwufCfZ82C7SioQ26jTGrpRJCXUWmF6V8u6AybWK7NmTLy1ZpjXCHxH4WpVVBdf86si",
  "key26": "3ubDc5hidgoGcABdZPZ13A1H1UFVSAaUU5sy3cQwqZSVA1GzR1GTQfsVWaAg99YWk6atNtGczpm65m1eyggfia4f"
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
