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
    "494ioYyqteYk4kjvLL9RwaoT5u8nBB1ccTjhtZKcpR3v9Aq5AdYVzT23JKvZ8uvrkqaaUQV2nVvZam7jqBakbkrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ug7kQhuYFBoAi6JWgKBbpETv2btztK9GYwzt4G48QAzDzdgxXuRWHfCQ7y4xo4UK4gemasxUoT58M9DqXQr9Cv",
  "key1": "5TtRZem3MJdmvqzswCHmNe6MkBb1fJwiKUSbsX3XyoARtQhKZLcWop69GvvFq3EsMSYUDuRCRCyte5DMQbKMy8CH",
  "key2": "TRRdLmyFer6sn73bFKmFTXTXiUVdv3euSEPtfmz4eYFjh5vMFcWiYtBNayKaCRqEG5evAsdfPctQvmrwZX1oUH7",
  "key3": "5Qhbn3h86JwE8gTEE8k6P8xpsMin59w7uy6q9wYTr8n7GnfSJgKLHJixzu55gsnai8qgQ89vTNKL93HBye1ox2yr",
  "key4": "2ZzU7Z99Vkmirdc2PT9xA1ZruFVEJ8miuXF9navFXsQ9WNVx7r2P4GbTWMJ8ircFUyxEy2uoJh2FQbqQeHDWztyF",
  "key5": "2NhCGyQSXkHJRB8UVvUsQ9Uin1qpBR1sy52o2vnE23Q9MURhTQ1cJSnseaf9SJSRZDG6CX12s61o21paqgLf52Wf",
  "key6": "3XoQQ1r7vXA4uWcUe65zwzhL4NDinXeEezd45Lx8devE4byasQHVpRpQ2VBnW7ZCeC1sfEMxZjXNkXm5RBKh2jZq",
  "key7": "L5rgcjcfBPsZubfHRa9orMTwi8JndKwL7e6XBaGhHyxbrHnF3LqJaLcMGBy7sbDiDHT2tCzebfEHcp6DQJTjDPS",
  "key8": "37FRV6B2B1xjuu9tLFKA7rp6VcDteJX7f3NchHDE4QszJKJ1NAiVCP9VGyo4sX7vTpBgJQW3PEAz5MPGjLQxWb6g",
  "key9": "4c34wh7Q8ZHJrf1VaMcftkSZF3YUYy2FMADYgxTFVYHm8S6pWL2P6ZYY5HnowshZpekPaFvNNQ8ZShjErudhAsV2",
  "key10": "5uEp1ZuS9uEg86nBXGiDR9VqR69UETCHLQPbsp7BNMEg3e79EeibQ9yBCNBxCdD8LLtW28CXMzZkg86PFDj5YD4D",
  "key11": "5tUkVV9V4G1UXE2wY4p7soapmTEBi1jsBBC5Qy8e1RnGi6P2ofpBgPw7voTE6UBhqKqabwdU9xqjfboG89G3zY4S",
  "key12": "qwnf8yr3Ys3wgFtBvDBWCE49ddz6vg8cLTCjVyQrjkqSkvcvCNCpATyyQCkpTn2wZHuHgzN7f8VmKmTzSERM9vX",
  "key13": "2JZg3cVYY5DBaxRL89ZZJUncTLhxbHmKWJxLD5tjWPD6eQusEp4S7QmBvKDabSu8fvh6EbdNFjvkQ5ZqdB4LJsc9",
  "key14": "4DTn8UzKNwr8yYBJs7SBLFHV2phBcTdnJ8e7gx8BZpsuWz5BW1JVTZpn1f6Tk13KeswYjtFjtn8wuZbwga2sX8UT",
  "key15": "3ydv9b9JT2RSaA7q2Jf4B12qLCvDM5tw1MB9EsN5vCrAsRLZCB9ZAZFjJkH1knbGjpYfsdrqNv2b5tNY3yanJn8n",
  "key16": "63e91K8hh8af6vC4AT1pXCiFKD3Q6dgT2PuGT2zExnC2sGx37VQzJZ24jHoHE3AA2A3ay7ThxjqJn72RM3u4Co4h",
  "key17": "6UfEQeRyJSNwXViACuHbg3aqwjyDbhBsZ5bpSFZ4LTEDyjkN782MtJotGTAP8z6zXxvrGapu6w4s7paMTtBJfHt",
  "key18": "LqA6h8KpzhPzzbvnWZnFHkNj81doqc4SDc6J57qBW1fhkHoxRfTLshgSKbVTF5XEkqwB9noVNRHz2HgrCyKVVrm",
  "key19": "3UTviKBCtJ1R1Assa2w353UeyYij2bM88guRSceNEH5Hn9p9N1fEQmNkvn9ZLU6qCgaRVejy4At45qWeFmTXe2WL",
  "key20": "2g9FJNyHb24XBRY8K13sfJ5SNkxSaxFUC9WjtuxVZEaum7HcbPfPbJbMBVTMd5P9AbzWdEu8p9oMBqfuWiPD9pXt",
  "key21": "23ZXEvdceBxPcUgPRvzCzvbbS3AESKiSgFmp3hHqWiQCUm1R7n896YaUSmXj2zDcjJFefw1RB8Mt9TZhmrLZMmNq",
  "key22": "4sbBFmYXpKYcwDeirWL7tkbqZcbGRj3FdAp3LoGYw5RkbXURoCP4AA3mHvt3nozQywQL9c5zj2rRBVdPQrCY95RT",
  "key23": "3qL7mdunQ6X6cHG7nAhDxCUCfE2XJ9uPoiNsC44FsDVCRoeLSiFtFQu5Zj7aEnSRW1FXSehXhD3HfR4zQFHfcwfR",
  "key24": "3QBF4DHGQ6c6DQKQoLEMitapQQWdvjtrZtuavo7TsnqUV7vRthH46PB9feCtngqngEqkCkK8hw7hyHxxnJxH7bPe",
  "key25": "2gqbgZQt9CdX5tktugkpNLRCy3L4BYzXwqL4XvgLTXS57WfJGkKERMDpCjbbJU88Gkd25uHmXorisKLG5eyVTgKg",
  "key26": "4fJPvamKkjNozAm8qx2YcsapMHWmG7gtkemgDEu7gDjzJFk7zBU1tdffWytoxXwpX1RhegmF1t94oev9Qnc19N4y",
  "key27": "3iMepg8rpC2ru23qyPavrq5Pde5PRRqv5Lgqj9CxRxnc9SjXrZZmWgF8vQGRoJzVYh4psPVVnAwZgpMEJ4HKzZnL",
  "key28": "4GULU457oAGtJErsP8cj8LDbdfg8ihaS3kVeLR25SxSCcJxjRS3Zpy4b4MyJDdRrExPqnuYU9aFQnmx48ss454S5",
  "key29": "3XnXSndepKy9fxrMfk5vPDDWedfKDYiKTcJ6bA44hPtyfCKUy81AQms7NtVhgyF7tfAFdSBHxfrH24Q1e4SjHsQy",
  "key30": "4R31XxgrZe5fn3fxEsVvpMnDvdGHYZK1qwNaMyVVBcoHaQ4TD8L1xbe5LPuywwdnaMykpceayGuZnnm2j7UxBgVB",
  "key31": "eVawRAcRfwrnZyiPoWKJEmjeNjmyAYWrqL51VoJXhkzGctPofQaSx2TEH4WF9zSjTAoqQAerFatfTeyFY1e3tbT",
  "key32": "3wQjHtb6PvAeehRTwhzHoVyHEkgNTvXJcW67Kn3HzEWuVqZyWAd5Actys9ABPxBUKEBFfsTuLmz8j3bxSntFhzou",
  "key33": "5iwsKDCRAfDBvFxV9xUs4T4LyrHGM2XxfQj34MfbfNLjCjaBciHyS5mCqPDaaD9WjCSKLQ4ZbdDzkpJujghNh3E1",
  "key34": "5AZKRTG1onCaAhf77M6KiWBFeLQr682ZuuxoY8ezsZUc7R6Zy1bJD6xU7NBnPSRcs1D8YSVjxqQRQdfYMF4J8CAZ",
  "key35": "8ykjJANGoxZMLeeeoGNbzJXyHbLdK3NYzeY4Jqo84q5qymChm3SBnV7Fnzfz2bsi3c9UKC4zBj6KoN2BBEn8WBz",
  "key36": "YCbKBnBpF8ujUtp1VhQgf4roW1J1dUCsxqhiNZpcj3ZVne4He6mgwbaCnEbkGqM1ETexgz7MCPwsKVSeW1VdNhR",
  "key37": "64K4URRvcW36gEW31aWDomC3s7wt6VJJerfZAUavX298FyAPcLM13ZCtwLMXvUzn4fpLKVuEpELBp3siYVLgejqo",
  "key38": "xq8ggbPvW1fqy3dn3tY9CLdTCrbJgXNpi8VeScGzcoHVK9jiwZ8yNcZpjnzQQZJQmaAtNfVYnLyYCgSuMyyfT3q"
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
