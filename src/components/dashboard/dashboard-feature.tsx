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
    "55TdWj17r1TaA6AhYdaaBzXkg6fQo8AcgS6TAqb57KA9L4ep1NAZiEwXvVszw22ZReb4dDgJHwoEu7sAkM4smyip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRftHXffCHZWHH9iC2uMfHavbWXu6qGDNPrNjtqxPCnUWYwmjYp4iwvDWoBXpnVGEcrHmAyJXGMUyrWUmdhTng3",
  "key1": "2TEYrmTga7Sk46Ku8id8ZtRpqYksYKSLoddENvZp9t84yEieEFmJ8ukRMN8DCYBwV945UMjVY3CvviHoSkYQG7ei",
  "key2": "2izuyqbGjw7gK2etzseXDHKESin5GFxrrtQa6Ecuvzihp8Tj2PgR8GZUF5bbVEpUS7u2KZqoWv72mgKz6jszL5Y2",
  "key3": "54Krsfgh9eHnhKdRRaQPwg9MpPnysDR4tyD4o3WEeogGnXV5LZKLowMEUfDrzHAKK2XC1osQqCf2x8oyYcSHMQGi",
  "key4": "3diXERjhgDqiUj2meuTp8d84hTmYwEPvnyMg5zBqccftAzwAbtkvV8oskTD3spuEv88gBGhChjG5djV8kf2smS6R",
  "key5": "2FZrWnhNYdmw1dMm6R7rLNpYn2BYXRGPkpRpRZVd5u2ztB7fDSqtdEtNwmY3Ai19gzjk21ZogbiA6xNGZ85egKyn",
  "key6": "jTbvXAwLU2EE1enBohHB3CPh9LinUJtqSn7qneb7fEKjXVkbiKmzPLa79mzdbgHcf6xDNMB6g4cyrp5RfmtZbwM",
  "key7": "2vUMXSW18GyxcgFDsB2xVm2Ndkk9xGaeFoZjcqhEhGgBZrzF5JwfDKMuaFJSggn9D34tezu8Ffzcnn8uWyCiaudi",
  "key8": "CpxtgaM4VEv4GZR98atSkTXVew5J8EkaZG5NzBkV1Tj5SQxd4szCCfMkphZe5qqWUq1XMURdvyS71fS1Rqs2WEL",
  "key9": "2cguQF7SVL7RgEqwTDxrPLyDvHddJAt2R7vP6117AxyvAzBRfu5ntPm5c3qCTXKV624PnNCTeHx4gouxPA5KM45x",
  "key10": "2LAtL58Mt6Cy3GujsERevzpJh9KERN3b7wyAYgTxm8iAZCTzBMcWP95AUkvtry5wyTZyye7P6buMhsngpUcNov4k",
  "key11": "2s2Z9GnN5cvxGRzAJxVdqaVv7e9tkXgPMAN1R65omBKkDkPf5ibysEu9qqutBS1prSp9uhMtoXrBKSZGnTKLerfC",
  "key12": "5Ch4YwBdddKggEVpeHF2Q6SsKewqAjcy83GKsHjSWCGDeWH1vbBdBWbnX1FKhmxpVt3KhPhbUC2q2rsa5B6KoXEt",
  "key13": "4dzsZqpKCibkTZdtmFmreo2Myz8QEphXxaLzMhcwXVGqbuijUHqaBSdi29bMhiwxpbP8T4HbBLFFyWVbVABbdDVg",
  "key14": "3FQFzJEyLnkjLEfcpZbf7eUPatPtHftPHahL9t6CkJyr9T5heNvfq2RWsefsiT3h5z213MyPB61djrc97d4UEBsx",
  "key15": "3TUjushp6HN3kmdZcsjCU2dATjvRHZyytgksowiu2MX5wSgKPTL72FKYaPZGfex1F5pN7a6kidVXSXhLMGDuf3Sa",
  "key16": "3CYiKq7QfC8P15tEQr9o823obvkV4e5Ymks3wbeNCBpiEipzuG2kWvLbtQMf6ykgYe8yC6ZLKLA8bYmPHtF4qc56",
  "key17": "3tdBQnKUxvLBm41twifD4KhWuiBpahXfLBHpCk5E2wiCWBeptTRx1dKvRJCY4djWRS9uUY1VdEPMrd1bPDXdD742",
  "key18": "3cDshaJD1P2Sz9tFWNWoCREARuC2k8wY2m3YWppU9m4jdS7NUUM7wAowyJ8KbYGpYeFbGhszhDa95gJTPb5GuUx8",
  "key19": "3vQmpUs8cTa1ou6RVnSco9uZA61MJ6T1dTfCbav9yfCmJn8JHquGfuFF45Dt1ch6TcxWof5nQQ2LCLKsqVhJSZxW",
  "key20": "b6M5CAJwcomedPBgeHciMxMkcKFFGEya1zeU8TSQDNpgmYXZV3JCBZCc4ro4DPHbu3QGs8RnA44ThNQvHGAfY4h",
  "key21": "5U3fisqPes6hWJn1wFJcYNtoKbwz13iJEcMa8xh968YR7oBhuWU9zEEjTqCBfKi2xmo3ecA9arAG3YY2EHDLZoc6",
  "key22": "4QDvLnr6QhiSyBxyfhJCSCLpMk3ai72pAgTyjm7HQtxPYA56wogbkFrxTncDUXj5wyikW2FYccHv7Da1NUx5GTpX",
  "key23": "4JJ6uxZbCHyhjW5FaAhYxgvLW83XbM2JXjjVSBhbZioPjgMkaHE1MMTuM82oQ39HrpdtuSmN2DkNZMoDZFejbLMP",
  "key24": "2iDLNwrJ5dtmZs8MGWaMSs3m4CMaMCqqTcBtydipkWCxUmGTd8sWc6H6kvBWBDE5ELqKUh4hRoiEd8FcPas9zWgM",
  "key25": "4ZWHyTBoFY9FE1HgGazQaFhw29PJB2RR4hHdW2LBxUGzSKKFM7s34iRKK1qL5U4tpgXfxQzJJSZSVMok6bfi8s4c",
  "key26": "RJGg2USJjfVUu9UCr5qp9HSB5XLSeW1bSFjfE66zbQjXm5dV1DE6JkwUgnfXCHd2Hf99aVDjr4xNm56Db4UQrE9",
  "key27": "59JQacjn3eQxzR7o6ieZu6eom78wfmmjFi6NbzDxcceG7ZK8H7XdvZxes6BnM7WVsDJ6jKvibX1JejMHAGPuwJHd",
  "key28": "5rM629f1brajuk9VzANiYJGDXLLkswgaNDbaCSkLWmrHiXvkpDa6FMqZXu7rTbxxTaSTvMdVn8eAHTVcY89vEVFk",
  "key29": "afjffT4JGKKGvNFCxHfmCZSAJkEWwMPvyEwYi7Phb4EPXnzxAHgNyTFXQD46KFNxN2XMpTqqfFiUwddxSZFp22X",
  "key30": "3Lw6NhiaTkv4x4LNsSLF22b74gYrridcyRRPbueshbATt15aPMWZAjjoDLR7HsMXkrNRfRRY6NbFymoZUuWYrAwo",
  "key31": "A7LvfujN4Cxudn5gVrXb8539kfctSJhAHKYrk9M7GQoSPxNwAt4J7J5JV2fLdY8u4TGqYxruiPobTpernKrbL4a",
  "key32": "3H6NrL77McJxrpNRYHVE68CMwKwtTL6kFe8mR4Q5TKfVM7Ut2UBztv5ETqB1ZoqsqUEF3BBRoGV5Gxs4dcsGQs5",
  "key33": "67PAxibmWSJGQWe5VV2JDkDmp5Svxptjno6GkGzh7om61Y9gC2AkC4go7ABJw4SwGCjoNkWj3YjUjaxwbUzJwhdg",
  "key34": "2Uu6kT7qKW1JihsaQ8fiddLTaYejipRw9rGuGLQXFyXj3X6SXdBrThQnXfsSyCbrFxLe8A5MGtpAb7zXXV6XmRZ4",
  "key35": "hfM8sP3n8n7MKgBVBTCcxtVevi74hiRPFeyxwWR7fEn7brxX6sQyLg7oN99gC9LHH79C6LKxoeZB2M2rujGKnaT",
  "key36": "327GGgDZp7PGDT4dFWSiV2BSn2rKMQWm91YKeZdAitVN8iiQD6vPaMcGGSXVHwGzNA6A4iT9oML1YY4tNXfnQqWv",
  "key37": "3Trixt4y2odC9hnTq9TjAyP8DziyWeZT59J7dSYuYQeFNLFrgrKQg1KZ6kaoPFV5P54Y8JoNMKzjv4MXN6a5YhuQ"
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
