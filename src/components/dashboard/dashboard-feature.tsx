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
    "X2p6puAiZqqiuYE3BS4a8y8jqDxKpcEf5uX7vWWs2immQQjxqHUQ42yqNCzudNzKG9ico1oTKa7UTw7tNdYfAsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCJX9Y4QcSfvZz48ZwfyzrWASx2f1XFHHKpn4LmtdA4nx15TV7wyS1zzeaJrLeLJMi71ELQnXXLcqhAcxdBVjvE",
  "key1": "MXXvdFm4E7zjTVvuTiovwfcoS1UCeQPaBJYbup4fM7EiQLWgtXxQWWw5DNWSaSPhMhgCBnENtbAne3CFRLUSqAa",
  "key2": "3ueb5bF26Be5b9Ax8GZrvnbf7zjjD1C3e5zqaPu8V9rLNRmMpfqgikujCfhBNcoZFoNbDafcqVaaDsLJtEn4zxxB",
  "key3": "2E5Pj9F93LjMUgK3uxrdWNLWUnGFvtfzSrzCrM2nmeygSFYhL7CriCUPGrT7omtqkZBsSyedpsZ7Jeco9XwpwvK2",
  "key4": "2iamx62Yyvqmsy2QmwqgwFRX6oCwgfniJggcRuRpWSHy5s8eKzzKA7ukmT6C12tGkgXnf2UbA4YH9UBDNBwSm7az",
  "key5": "9zExF6ZknmqJSHPgxPeoaYDqTNMJJUN4jxynPDCMXT2fJqjzyVr4RdM7H9KCcdYfftpSVzQZptSnFdMM1PqNZeq",
  "key6": "8ri3j5KDz9Ws3NC2oB4Gq3c9KprK4Lit6fYxTh89hdDsFEDv1c1Z5kCSpyiTFQgSizVekXkwbK8DCaqrr2YDbpQ",
  "key7": "3neEjS4zyQ36CbgPEkq9Z6cZ6CVpr5pgX1rF56XnYmBBTwATh2Ep24QUqBnMUpAtw5WRxcjCxKn81ioeMynYXbWj",
  "key8": "4Umvg68khvyqDjFCvkTVjQ2jhFkiwaR28zqhsYjDSkzY4AGiLXMFh2gLow6bgaHip33TPfVVUV1PAM7SSTRNmLnV",
  "key9": "3DrLfsFwJMWu2iWdsXuRwqmn2KXgvPFU2WvEaNZ3K1nCU22SU6KrevpxoWj135NM6FdAapnwf1rpES4AA2UGtPfq",
  "key10": "SD6xdjmKEQpCn73FZbQtGmpzWYVbZSvEUzWYyYnKmWPPaZmaVqVvLuQG61DsRWoT1jj6JZEpi1SfQxiGwHMEz9t",
  "key11": "4DCHfGZzr5rNZ1sWdSjvcRJvCXXKWFYrXUXyFmok77xocChWy64FGNGyHgZiAPYrg54KV1F3JfojVC4aNeqBMJc9",
  "key12": "3HHkw6sfHfasUkmA8C8skJHHvAzBbg4HqFSVtoRiXJChV1Bv4bXRCpfodgxLFFtzwnF7zzZdHG8JtJsWByybEmsq",
  "key13": "3mdBwJWjDugunsDtPGU8Fcx1HWNmr8NxTYDKdFgH1zftU5Qc2J6vQaWtgsojn4GZKbprcHZQQTDqip32oHvmsPiW",
  "key14": "dds1XQE29WgZr2VuoucR6sF3dNQtazaoCKqSH2f5Y2sD5hAavddMrixkczPeAomzFf9Tt3mJhLZpTijXC4fJUxV",
  "key15": "PNy44eFRiEKjKw9gWc777ByVeKPoVzQd6VCNhnZRGZx7m5VysVNdHyfcgu148ECi5x51vMFhxehm4hvT95zDva1",
  "key16": "5rznfiFsa3ZvnyraqBHAcqFWiRbq3PbXiZjwjJ71jHR9XfmGLdTkrk7ezac8xE45otXiVajegBbCKffhLHu59ryD",
  "key17": "SRCpCZVH9qfi6xQc38G7RgeUSNqRdUhXrYShUkZBC3tWqFzPAbJ7pH26a759qzZf7FrW68t16LrsiSjZPaBKCtB",
  "key18": "2WaxDKp8jigN9Tm9XqKAkMUJJGYVymUmbTi3c2j9W2hmLk1xPs9hxDcEoHiM8bX4Cixj3ENpdy3iYMkv8TrCvKZz",
  "key19": "5D9qKyqsVbN6XJEKHbxDDJAma8J4iPuXZDxyxjVgLgqD6wgv4uJYQuiWpzhh9qVKKffMk6puGDJM5un19FfJABxC",
  "key20": "5FqJNc2qdXEuXyTHvYTcLY4iDLRoLdXSPm8r8pt44r3ft2UQ83inSsU24HZv5RE4ErMeW3KTdMCJcB3heBQNoGi7",
  "key21": "ADTqGwcWi2Jjr5PoqWHdHPprkpUPnjjdoF3TzHmMbj7VPJneFBzePPmVfG9e5RyrhZPp6kxWMdnpYSDHGZDCJfQ",
  "key22": "Z6RGizGEUbHF4rL7Ne2TvNw9TGiqz1fVeSJh9jUUU6rMXwaFSEVVZGk8S6j2bNBdecBcErpADhE3YhmEdByVba3",
  "key23": "3qUHGEbDrYiv2CSNXwFyyaHvVmePxugc5Lrz5xvJicEg8GRCUJC1ZEZBfhQJvePkBmSUcAi8ErrDzdohrtdEjUW1",
  "key24": "4tqcQTxheHW6jrpz3dgYa9TPbKcrsQ8eVKktDYjJw31ueJf591fNe4kmBGxb7SbPx2N8UajRw48BQg73FPrhZ6c6",
  "key25": "3z1CgQq9tCr2aHvbKAesKNmfc6vUpJsi8VRke5ZSANZQ2EPJmxFyT8NKQV43yAcRSHWmkH7PCFrgUop9CiEg5bkA",
  "key26": "DnNNTobzJ8wtgKKMxx3AKzxrUMDtMY2o2ikT8MpSgkD4tCwtqPRvLorn91QY8MoSnC4pCUokkMajyDmJXBMuZqs",
  "key27": "4qXikdQWu5nMcHjPwpBuAq77DqaSU31fxU5b7EvVNmbvZy7vupGpcG6NNJGFzetsPpZpnCxPLn871NjMLLDBYrP",
  "key28": "47A5f9gp8Z3FuBsMPN3hnmTeVMB1sPDwz46AaKaWoaugxPXHeGq2sUeBVQ67VexmHswurQiqhnQTYhKrXesRjnBQ",
  "key29": "4J4rHqCCs1rMnPQaBFCfkANR7RdRc5uBB2zdUtv43yio5nqjYvopem7uiQ4v8qi3x5uudQW3tdXMWpTCvD55jYaA",
  "key30": "3e7zF3tVoZZEj5ahiKBZP7gUDcPsMjJ22ALwbhj8DfQ5otVwJwsXy73DDmY5T6jTSvCmSQ49VW2br9PqypegDLsP",
  "key31": "5eacQSXTvroUaZbXUfRo1gqGRpHJboFqMaWUKx73zzUUVcKpFuSrYnuVn6AsMkq4XH6Ensea6Qq9wJ3nUUEwXUuL",
  "key32": "3kcqCrYrLhmehqyuH2ax9po2PfEPxz1fBJ5P7qkxNQDnc5KTa21Qz4vkbL4sWLoL99JkHN8Z8YJLHv5Pxy7hpwGg",
  "key33": "48FUmDnu1fYWuabV95iEsiqfDnomD48YfgpnJmKCbFMwzEaUaywDa3djtYQnNfhqpw1pssYj8AxVmdWxi5GZZaym",
  "key34": "2v4MqocuK8CfUZiXk4UUDHZ1w2LSb5P8rM6b2foM5wGt6WdtPgveRxMvnBpmAmNNZZ5drxJWciWmH1iBYxWnbTbZ",
  "key35": "3ahgJ46p8ouD9r9y6WXJv6qinzX1NEA9Qk6YLALqg1J9MV5K6oQM9xEhNZWn5ogG7N7z4Xgdxmnhco97RqcWD55k",
  "key36": "3Tn6NwinGE4ybEWPRLBhftWZ2YnXxaQC4xjwa6GwKH7gFFayQVjVYQ978W6Vjkc2iS55X5ZsXJzEi5GkeU84ZdWK"
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
