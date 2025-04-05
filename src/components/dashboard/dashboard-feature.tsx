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
    "4amH1ZAWTPzt9xVJy9iyh6WuyPaaSBndS5m1CJX8Wc68TGupXJ9T8NAHo5PyhxAcf7E22pMqow6NEADwS27fzmnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ger4v29JwtQayQbtwrbeNbRMpu3SEpmxeMqw8qWXTmRt37StB27ZWPEMsQ6Ue8xFaWL4YG4U92UyYHpRzLb2eMD",
  "key1": "vJV3H2w9v5Tv9ywwMYM6T5k8cGSQWZmbHdH6Z4qyJRVhCgutZMqGtBYNdvT4v5DRYhgABkd9bKpCvRAeyFZToyS",
  "key2": "2V5uCjW5z4BRFwQxFYXrHfisB6wdaHZkPFG77uAk8UnBuNJ3uj9jUDWhNxeahpRzR2oWLYKerRJLwokiwWmGFivN",
  "key3": "65GePNatPAAz7mEWQ8Sf9qRHfaD5NJU4VfFMRcJuKtesXiH56A95ihmtp93X9v1E7b2RCxvXdZPkK8bFufWKrEZy",
  "key4": "5s2zi5zLzFUwSeXbrfP2phJmVERdWh8dpxPtdZQ9RfQHBTrWxvEAekeaFjE4GPtVUtZFFyrx4hHmgoaC373Anvtn",
  "key5": "2qoP5gD5GdiLiaUce9YvcZi7pXhEk9nWFKZ3HLBNwPtUy1Y1VK4gnuFjzMctL6c79CAdPTjThtPvuFN2XrGMXnZh",
  "key6": "2u7Mb6XhUZJn5FW52xZ9n6sxyd3GNaTFafme6QW8FLEBFLeHpY9CUzhShuf2KRjY4xX2J5vHHZuGzmbkMW7JfZBW",
  "key7": "4WsVupyXnAKEQ4T4P8rToYxhqFwr6u3nMxyP8v4uYdGpGipAZ5RHqAmsbt88CkC8NEvmgxfzL59JtTWUVQY2MRrf",
  "key8": "2JFMxrUjkupsDzhw6panaN9hy9G2ouzGqUraxP3HvEL2ZcQA4NtjvU1Gs7Sr85FDmiPibytTymKURQbHXkpNpm1R",
  "key9": "4hvkuJHFMXzmXyKdayFsoq2VpcXP9FhPYNGu4A6jc8rDqpVBguZfqMopvJBDyD4oyRFhMhJcsFp6JkqVnUsdFijm",
  "key10": "PCGVLUCKtWsXUhbkAQJRe7TiP1C585m3nfaYAkWYEmD2gXSzWRmzCBj7Ftkz8ceKE6h5Tkun5u9fLEufQZAd4eK",
  "key11": "67A8JdnYFhCg4W1mS5VXDKju8icpqA8aUpCB5s83ZGxNdEuoGs4UKxeQgWz993ti9cCpJjuEo9Kj8pJ4RxNr3sLC",
  "key12": "5BgaebiTRGNKWGH6rRZX615n1qgTpeMSQhQeervmfTnqfMEVNa1D9uQdPcYUS9HbH52Aw4GGUEnrFBFaFJE7gQpR",
  "key13": "2caEqmbGbFz8S2VBcUj8eYvddSW5sbSkp3pe54JxYnqG3LJHZTPuJeqhLf8mBDnHN4SyvT6PLCRuf3Hxya7iwxMp",
  "key14": "3MDgmc16SpoiWQBsc95hXq8qxi6bjUgYvYR2eQ1KzDXjBJs7QGGfKPVtAgRBbkenF48zUG1cuhBBxWqohbsXnBaq",
  "key15": "V2pGzMwuHgQ5z8CzxScybtYgHsoUr7LhG9yuwhGz3ZhxjVgGoCfmbgj9yiaXjoepFwF1iQgEpWEMRNpjSaUMgGc",
  "key16": "3eZxxVxEV278EWGF92Yzs9sefyWeer3q8xJhR1f9bYipdsA4qos2342Nru1YT7tFXDY9RG9dvCCpzgdqTA5429G4",
  "key17": "5QCoGzr5p1kw9vAikUZcJoLVtCV1dHVaKftSowz8JjvDnw8wztgnUjBYoj72powg41214jYpWRpbH5qLQ2mrGX7v",
  "key18": "2iZU5aCYmeWSvfDgVVfjCRf8mRoDChCUkZbvf9FJDCJjiZ97eQKqjpr8hCc2qE2RMn1YsmcpFjLKReQ4wdDzxR3k",
  "key19": "5JB7mWwLowTMXpJywkxoSDd8bLYHwmYbWufJTR4V3NL4XFy6tgpkr9tVPuQYonpvpc82HfXToFvHSbZpF14mZkR8",
  "key20": "2VA39Qg2DNT1iDWEm25kRbN3n4UfuC6P9TEK6mYJ5Tjfu4Pf5ZhuCFLoseuB7v2DhM7JLAxgUuezP5DyaPsPx3Z7",
  "key21": "4xdWsVJQ1TWWSG5ce1yNna3VSvd288L8X5PoWACZh5ChTcviwjhLpNhS1f1H2CkLMUFaiGsbtZC1URWt3AjktrFv",
  "key22": "4rQf7FHxXgMJmYwXwUpQ2AdJTkXsKfPh66K1gC8XDBLMZEvuJQQRH74EAoS9Sx5nwy7vbkEXEHJMXRbfgw5EZQgC",
  "key23": "3R6cVpmHsBDQ2S6oUesxDnecauLyXrGUdQ2ATSS2hhkMaJPrmWGxmwv24FuWsmFyHPSGNijsjoz6KjiBnEvaHfJC",
  "key24": "5uEj46FCD5n8Wjur4fVap8s6da88f6Anc191UxYaKr6jWXVsohatCA2jkfyzX2G8ETMwUCzDqZSQtrpUAX2pGzFG",
  "key25": "5jdTDh8haWXdz5vnZp1uXkN21tRupSNMAbJRpN61tMkHPBQUFR3Sabqa4TPsNJtYYWtoVvu1Q9aGf8YaZBUUNS9n",
  "key26": "2rqNwLFJ41ibNZC9Xk7gged7npKJqo21F6FrgV8KReaySbCqeSNVv3xu45q7Kr6RXyz7EivodAtKZAe93SDEUqds",
  "key27": "2ADMWGDcFPhtxJt5YjgoD3j6n7toj2CW8pSrSLhECyjhcAjQdQGBmbLSxa2EiTRLZPoasiXpPgABeBtYy6nzibCL",
  "key28": "5EPx1MBxyeWNnBdkNvpp4oULJyTXyTb6Snxow9pnzfVkf6mizibnxZd9LHWxLVVTYiEjy18s9pgayge5bFFDUw2n",
  "key29": "sV4bJ3CwkYZQ74ULhe65s5JfHi5jkWnRLArMfWWUqFsgwA6Vz71QJWWpMU55wN2xjZRwy21ARvLFhMvGUwdKiB6",
  "key30": "31WG5aKmmYD3sBymJfgc6ujqjxXvnDy3tVk1hfykjFWhei2LVPbfbwNj8fGqEWc58HA3f7qxRFkEpWGHdqDRV2LR",
  "key31": "TkqjJwP5hxNMdyyf4ejiSpZToLDUW1CZoigAUwphmsP9qrzBbmYM45jmnaYP7hrKm827hH2PdhNceFD51MwkKnZ",
  "key32": "4nhjxN34RhBDu8CBPrBA2dYc9Zo7DSmBk8siMCbPUJBmFy1RBDqYm6QAgTSnvzrDHSj9Tbu5nudVLeRfCmJNF7Tq",
  "key33": "2grTeqpdSBgjFoNhp5RJcxRM61oARvEaamNQsDYoxbgPiK1ATQ5En4A94JJ4bjkrTdbJc6idSBbe1tjXQ6x2cCZk",
  "key34": "X5Ucm74c2zx32WqxRQyUDWwLNTbjBFxC7ACTLxNUpt2d3em8mXdnedqCfAG72Vp5TdqGJBkmYc1ETgtbYhXCGzi",
  "key35": "2Z4pNwXdHetWdMKdg8D3Z5vAcKhTY4MV6jDSYu7yFBz89mF2U4iGvbmWye9VnXjMNcgAh7hXNh2D3JykGQDrNFYn",
  "key36": "3vwBKuLjV9desLqCUU2aXudv7XJXaaEwT2t9sqhxXjJCvV31jd83V3RKPYqbcMJmUtz1JTnWQJ6N87cHvfBBadjn"
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
