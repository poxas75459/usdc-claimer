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
    "DscFarJb5SbRrArmYwjW8ccpEgwrc8QUf3uYbfz4cdNXb3pDgDxkAyFjMyXMGLHWiQX9pe3DCD9uw4GRELFfeX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmcudBeDTP18VJmZgUju5pWhhtLsrBgXjytkCFa1qadHUwuaN3Re8wa2b6efLZKWfhWbBHgMKgQnPJPYQDyZ5mA",
  "key1": "2RzUhVmt7ejCURgESkFp8QWD1cZVkEk6mBm1Vgs1jMwNwwUwDtTMGtG6tAP2473KXHaERwq3LbYXtQCAGSbwHhVo",
  "key2": "125E83EmubnQ7yfdxbENCSaerqn9Qo71MZFtLiMLbVVGrY1iaGxAyJBCqgNC34VMNbwTx6vWY6hEiNrx5BrmH5dS",
  "key3": "3mLT3WbvXQQ4MDZPNCq4ynsrp7PBt8ypcwWTNkHHyL1USrwdXKbK7PrKR4oMVzcn3Yta4J6grYLww8vC71UTgWfz",
  "key4": "pHBFHKUuy565N8ypC3LzPtK1tADk7JQNEuGszVFc1wBdLFMoNvbhiz8QvJUKskv3m3rq7sBi3ZXnrVzqc9kP58v",
  "key5": "6J4MFbpxYBKv8sN5qAKBpehEkJsu5x9pqi3AyRxpNQi873MSBjTnpcaacDmnb5fE7sM5e7FQUNgL2NrbtF5tY84",
  "key6": "3uG8MwH9f5ETHeXMtzk6rRbxK6Kw38HiMaSjXPHS1q5b6Gcsxnx5j5VSjWGhYjqQjf8jYrKFSL2AnwZgXu5wAS4v",
  "key7": "33mxbsrQTyi5MKjYQVKGfJfo4CRvS93pNYhjLxieGHG6bVjbz8xC1zkE12vcoUF24xEnj9iLyYLLnGdW1AmYgSc8",
  "key8": "5PSdd5CjQnDeYMrRvFr32E6tkT4qk1KzUmu7ipiJs94BDkz57SEv9cKy3gnfdHAvsuUGCDVFnrwdSSLnopHcTegN",
  "key9": "27voPBguXq2RCBiLxbwvtaG4Mn3uHeh9ZZbhuwGNX1cZBubQhM5fdr7U2HBQq96vAp5VNQ9vtcJW9289mxiaeE1E",
  "key10": "4fynRW3B4Q6CZc2jTyFrH1Zo2kP3ogAkPUCuJwhHtGqZEbMKVzzsgssPKwsKMgVZdg1fGnPTwyjoRoH3nsNwqssp",
  "key11": "36JZA5LPqyBcyBLKFaqifzCQrefyF6SHtuzG9RWrGQGfq7EkvhiqGLwCADL2C8uZCuVJqazV3XWhUANdn9MWkpVR",
  "key12": "34jw3oqdoLhVcVDB6jYbkRZLke24UbjZQuj6xvJ77SoAkrqKZ5WoVsLWA2k2wthCfzHDRaEiuF5Ba1fB5GDKghFt",
  "key13": "pvt7zW9jjgkRGRi7vMpyo1uXK2frNW6gQGFaFwJmriQQzQQP3Hi1wDSfGikBhbWdkP4jFzijudAphcrRkWf3BQD",
  "key14": "31dgs4VBPs8J4VQ6igynVmPRrPzAc6rybV4fr6zyRsDkJZjk5nUufmGY4ApweqhCW8xXbBvp36SL2wkvuJvfAHbj",
  "key15": "5fyd3gMjZgaZZGRLmKDacgn3fms9J5aqPgPx6Qwd4fCHxA3487W3DVHyTB2ZxPbwU1qiH8hoZRQriadS1MFNKYJ8",
  "key16": "51SS6csiCwTLAAH8rmfm6tjceozWNR38i28pQGQRNcUmfiqs6SnCcmWAPryEzqsDwmy16QFYhJxhYWEierZif2ZV",
  "key17": "45t7xQvYJce2fGKgyDdsbTj7KU7YFFJztDxgnx1TAGNwNv1b8XG7qyAa1fCuEsyjJpctyFVTZkATukQv3mQ3q4Jj",
  "key18": "MmNnKpETcxiPz1FgUVW4z4Hv1KNsBncqX9cz2Lt62eujr311H5xojydPedmcPXmp2TSZjErG2WFFZjWCHrbMn62",
  "key19": "2usTm56bekhijZ6DjHGk3R8u96WeqnBJgzd7X5VgHbYgDsbyrV9zSjUvzCdn8Sb22jTaJUmQqowc5wJuScsf6C7k",
  "key20": "3uVFYM8H5dxuLSz2hEwVNwFdpY8a7E3K4KpEbc8f3EW9egfpskpYJjn4AqHfLvPKPDzECcYAk39BezFqXFzDcDzA",
  "key21": "3EE4CyFvH85MZg6NXuha7NLWVMzDBQ3VEQDtEPbJYrDSjQvBouF8BS1P3AnbpTUHxNqE6mAMyUAWTsgoCk5JeCJK",
  "key22": "4cF2idnuWqTZWvWnuyTQTkqJRfxdqYPaaRNLBEJoFP9udEXSH3ig9EeLSTCLSA5AujXQjtMDxD5ciRSLiERD71ip",
  "key23": "4XQeUjg3sNgF5cZnruB2A6n4rHzxe488oQFu6nrzCUM8xXaysMeo6uWnUX7hu7pfeumFKJSzjdYmZfhyX2u5ZU6F",
  "key24": "4on5fWDsJJdFDWGFJgRHXpsprdeZqj43iUzZ6bK1kKuE1iK6SJeE7gPEa3kWpdcgQCPaZ8e2LUzzszurYCfyWzDC",
  "key25": "ZfVeBq95FV4HzR8KTzsRvuysjKhLYncWghUjZdv6RGKsmZGH5o965Z7uTXJPN8DWinK5bVAcfD5ihCuR6CGyE4e",
  "key26": "353AqGrChu1WH7tRyuuaETcX4jkNNsGzQZaZ1hXn1mDmFSwowtsnjjCJV8VXpLGyHVeduQyEVQjekbjk9PgAuaWv",
  "key27": "3AtQqXQWAQbZfBT4uAuUUQaZmWkW3FG5aSvJTCJ7DwJTVZfSnRJTf4PwpzofvNBG2cM6W7C8jJQAbGgSxhe6XoXW",
  "key28": "Bds4hxAWfYBb8gV8Yc4hUq2AZckxgSjrBVNMeXC1LNTvD8TbCWd7nYE2B1otqWU15tAMNmK2AmLBJMzHcM5kPbj"
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
