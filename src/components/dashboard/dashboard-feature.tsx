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
    "31iqAs3sC2R9wvaw4q7JCjwyP7EvVHnQXvw8zrcTFvNjXhDQEzA8hJ7iNkU7CYfYm2fdiVL7ndpFrVqM58gkkEyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUv4Bmz8Dj2jCa66tdzTvpPiTPFegUN57XDyeGNLX9tfrFtMTRMA5mwhLk6oDT5muwLGgPcbtzRx35a8dWS7jGh",
  "key1": "2rimJGKCC9eMcPoF2mNa6c2YfC6PRU5pwAqdoV7z56EozHwuBZ7JijVukS6oXrkA4F88MkXP11gNUSqJkMAy94jS",
  "key2": "4n7NTJVzSuPVNNSrEtpqVHfT9qU8gkrTba4VysFSEwcxejWdU4ueD4wqtFXCzuFrf8Z82zfZxBUUwzaVKvgTfgbV",
  "key3": "aXBvmjzfXVQgXAe9P1knnXx33tX7h1Lh6wkkxoc3vd2orm285RfcfvUiWqRXFWkT9xqJBSCaoqY79JLWvSowhdF",
  "key4": "5EvdRAydxgj1pLAZAwGUhoGrs1y2vKEt1nBLZPjcag1PfrLnhxsspYW5H6G3mebfAyG8RJ6cp96GV2qXTNAcdqgP",
  "key5": "2HW99DizazCwMJJh6rixWYLZWXXWhDMLRURCQ95mRTM5MkCEiEDgsyRvne3VnDemtm24icwsccjqWaPvb5AQzyfX",
  "key6": "4M4Po48PxuxDExkcGpTXoPPoGgzih3GDcdjWK4SVDuyhGFNte2Q7HBaVLmdgnw9sJfTfeUvNWW3hSHf4sn2A5gFw",
  "key7": "4U6yMacTWYYgkPpsfFtLuTMRzvgKdkEB36xfX9pygMEC7k8mecycGHai8TuoQQTEeCdasUkUkA6kXjg2ga16b2Ne",
  "key8": "xVTEmqCCXVVUCNve3aJHuK2jyMKtEnWRRNbnDXD5cKXBVZB7nT87ESfGAuSjR4WWYaQ1BhdTh84pqcKpLd3Rgh4",
  "key9": "2rWJiWSwVmqWUtiEn72z148Zk8ZpJYTL1gMET1MVxNuUeKAMFQeY3gQJThXKRgJuFq8unRUuUSVZkhCeZchDU9ty",
  "key10": "2cxQsw7rQETadnLZMbzZzoMnuADpcJdXCaRsKEZVXnLsXXXZH4m737S7UZy3UzDtzAPHujPv6buCUqFqXzei4Ahi",
  "key11": "52LaicdmB59vgtaCoapu2Uzf2NATBz3XSz4VmdkrKLDGXRWiygHH5Mj7fU5U5mWjQU4NUtDZVUEVgR9LTfAanQA1",
  "key12": "5pXE74ss314Rxtr4SqsFFoao6JFt3MDrQoPLGHVrp2XqTp5JgF8hmB51xxbXqSwqnWKXymnqhqShdgP4pyTcuxF4",
  "key13": "4kkUhR4C1tCKbHfxYfwBnMBTC7RSCcxi9QpNL3p5QW4fUGoC6EQH8sX1akwhRKDVzUEnFuXAnRGE1nNu34s6SRZn",
  "key14": "4zzX2FbQf4yRTLVCU8RS7YvCfYaKjGkBiAxn57Feu2zGTyRWGvYoX8RRAPZuxWPmKzsqrSxHHNGk3RSP7MHYS5h2",
  "key15": "6jWWzjYkWnEDwXo1Be4vbFh9qz6nMHxhUQd8urhmQzzyRNvcmeVdbg9uqSJQPzAHAxV2oFewRsgB6uFtq2nm9PT",
  "key16": "4PEJ2K1ue3ryNG7avYQ13e6qVjdLqJVwQUYCzzyWf3SdAi51qHbzwU1EbDbHC1G1JwGTyubXpvbdRUXTGGYXfNRt",
  "key17": "3sgGrRifUxFDv8xhbJXWy5oos9ALCHkmFTbZQ6WnWQiFGZgzSWXdZoqxN2RFyk3Yt7ffZHhWEQ4zGvubTAeEZH8i",
  "key18": "fZ1UMiupTRtuknUcdkvzsKuDQvt81VhLgnTx3zJQJzUp8QzS5Wqp5Apcw9TZipTFi5SfxD9bhAHNBgpg8YPnzJ2",
  "key19": "47Nh27EcUtZgBMCb8gHpT7qw6RcU1VZ7KZrLvF2Z5qshtpHm49moFPwnWZ28KRVGdSjSHE23rgnEuXamjnYwrJir",
  "key20": "2LPtDTCdHZ4UMoGCUMsw1rNumdRUHQ2VmRCAwcbR3wYFb455YtvXNP2x2CG4PSbXziBuNbNy6PXRBUCkZuZ2VYhj",
  "key21": "3NfKMb4tDTzoS2boGMxg7t37nKvFbicCrMDaJVAA9ZaeXiy3tXYJ6YGsZLM5jFq527MLCUpBhTiJwM7EWyC9Bd29",
  "key22": "wZ8ubpu5gbNsA28WtyiKHG2914MhJs5cewpNW2aT62WBAtK2Anrs68LJekL57fpDfuQuZuPBWkqW5BXv28p4FvL",
  "key23": "37zNHX7LsbEX3WzvYRZRqZREHDHe52KbEgY1URKgaRMgdwjctFbqZWPiHACf4kbiXRBnTXyr2jjeZyuCdpswcnUX",
  "key24": "4c3WgXvzziwE3kex7NQr6ZcyJUo7FgAN83JZ6ESCCjwn5X12gLmRKnFfJnswH6QiajfRHV3gtD5YtmakkHbNqws6",
  "key25": "5D8La3tKFUta3mzPcHYPRtrSc95VzpaiWqCizpR6TdN7N2Sy7etZ9sBzwisjMRekWJgbaBw7akQA5id2Sayvp7ix",
  "key26": "5oEYYuvqkZpbx7KxDBC59NnEN7zYysuK4W4tAK5rmyuKYbPQ4hk9WYEsGMBX5Kp2ydo5bkTvkyo5hrBcWa9PBrWC"
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
