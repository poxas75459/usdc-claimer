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
    "39RnxJngAHcGRAaD9NdU2tSPhZyN8Qz4CYGiWo1R8Zf2rT8eTmMK4UiHeXJrWyEwy2FSgtVLEhsAEjzX6byiXHnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cL7ZnoUqRkF5ZodZh8BEpDzyEAX8ugKCkv5dFsnnU3TKSTw6ARoNVCpJmkXpAiTCcPb9oRL4XZtrx4XAKqe5Zxk",
  "key1": "3vVxuHCgsnaDP2ASGXopgkbEqnCFs9jHbyaXMH1ZmoYxUenf5s91tFpFUGth3JfNaJSk4hpSRzR3ZLL7gXYvNYuG",
  "key2": "4fk3Nd3WzuwzeFYiaVPeQKsnXNsrw1kzyewgJ7i8YYaJbqGCPf1J17gvDSKPpiZHWN1w6JXAwQEtc7k7ePmyqoWq",
  "key3": "4ywU3ZK4uspx3tnwfGxyoLcfqx5baV7aZKG4K4s2Zsnz7sjEkYbi9YU5a1cEoFRxT9wfVoH52VpBsgVs2NPvmb7w",
  "key4": "WxVjvNicacXqukp9mTXeM7RmZQM9iuZ8UEJZaMWZ3fTadjCkqrVx7sfj7vqZyyGzSptKgWKwKc3wazWmrnqnV35",
  "key5": "535TXrJPcRss6cuViRcnWzCSMifmf7Hm92RuL3GMkHvQQ2EhBoxgUjMrwLSz16aBmqNdHX6derCrQiVUb1Dtk7oz",
  "key6": "55VSDHLCFd6B3LTb2ZsU6UNx6HShqXQsLboWcFv2qZ6ppPPaK81f8N7eWNtUWDebjHDiW33naMNfiKZHfgBgQA9E",
  "key7": "4TgbZuM9PmEmKxR9kseSPqZcEQryrVrPoEVXAV22nk5mxCLmhtQMw7mB64Tu4VN5PGWPkeqF521mfhaJzVCfsSYB",
  "key8": "3oJGDug3x29QU2UuZxdGs95qdsX9nGs1K8sDbE5TFEJHrxu27foQdi6G1Bjx7ivZMXEAVTK6T87RXxAokYZmpGXR",
  "key9": "WVn7B4ms5EoqzjykTWCPY7ZHx4hjK4vySWfy4yAECyBfah3dNM5aNWeyWqex65gQu7mrXzTfEEy6CRt8MvW3gtw",
  "key10": "4L9ZNdqWmUYk1VpncMeqLjtRdXeZsEsKf74imfAttBLf1RYXES54Mwi6c39NEVaTA89TrmYBuuYy9CaoV5aGG5F7",
  "key11": "2Ck4JfWRp47ba7os2AYC2dmTcYa6sQiv3q4bZktmmocpX47erHUZ9oSSNKnnDwJAeMWJcCaxUNGTiMPUridBGCkG",
  "key12": "2GzraS14AVQaYostmbUgRg8ncBngdJBpLmQ4T9tufa6x16zPiTAsCSgxtsBJNVZBMnkzVbAtHbyUMDMG4HX1P94q",
  "key13": "A71nfZv6YWwRfJZbPBR1oPGdaybqNNnGr2jZzWZVb1PTtMg4TjAMXz8zngYrFHCszfGNt4EdHdvi1xtffMn3KQJ",
  "key14": "4kyVttXNzFFgKJGSUdkY7pJ9cNEXWFbBozBQGvdcw3UQvMAJ5KHKVUcxEibRCkS7nQnuLNhxrhHnMacb3r2odweY",
  "key15": "43aEDF3CL9zckn37KFifvoweKBmJqXmFrFRQdFJB2FJBR5D192aAVGm42chLzZFJsh9jdYacZA7SwJkJf7topJ7J",
  "key16": "3X89obnmvFT7mhneLLWC6tNa2oDQnCLhdSrJysFfcPCTkf7pfGFjRW41pmyMLUgDLc6Cwhy9pLF6JKGPmRtVK11P",
  "key17": "5W3uhSN2SaAjBxkHn8apL1hUy7Z92XmJF9qTn6SFscJ8TWVL7q9JVueWgYAUEvfw1tGhxtE8RFVso6hrMWjwZprq",
  "key18": "2nMWT9Fo9TDmxmfXWrny1xyKKHp5XU684wFFpQj9k9F2Xg9kjwnRQ6APyaAAAmcpKNZTRXVa7YGo3FQKcr4KxcJ8",
  "key19": "3icSUqsC8avoQpdSiVeMv5os26SH8frNR9mRtbCmjQcfNidf17Kfip76qtyYSdy4rG9rPGtyRU5NsdJ5NGocxjWu",
  "key20": "zfFcXrLMp9AUgJsHm2rc69fN6YFyEtV75tNJ14rcsicCS178XiWWbHoHei3PGEYeeNyyNAnmMN6jUpHcNT7Raek",
  "key21": "4xiBubqKgFcpnNmGEzN4nozqF2JuNg4t7P5sLDtKrgG47hJEFUaEjapx5aboRXFn7eSrE7CY91y7FsBXhmKxvD8h",
  "key22": "ML1uLG5zHzc9eUz4vueBh7zqYGLGGqGUy4oCB7Veyis8j15uNwc7B5HrCa3GTWR3qrHjPatHTijrPAmDsaNd53d",
  "key23": "3vSvqn2EaF4ouHTtFE8QEKVMy5mrM3vyZ8UcvBstjTepHGDfayLd2CGeLugKcy2dbYJS49Kfdo9gLGgjhwm3GmsW",
  "key24": "55n2wqgvWysgAkESKV2XpMzxHe5NVCX161peaZw5LdepWWztjyFCYj2yS4PHiYfh4WpDoKEXM8T12VeXtnGWs3qj",
  "key25": "3nPUYZxvaLTwc8EoBCi42JEe8d1fbESG74Pwq8kGMik8cCu5uTpMm4gd5JmDinPaqhacYJGFwVuQhEUrPgQmkthx",
  "key26": "2d6H4sLLUT9xLiyNUqtQVDnTDBDYHMbQuXo3ooRNcE7iG5j7QNnhGPuewUsYiwNFaFfK8R7Vy7srzbqu4ZUFEkxj",
  "key27": "Szv48rnf23Cmac5X3amGDcnwZtJQ4kskb2u6xF2Zuu7fzSg8B4rjvB6QBmuMQAqewXeFcemwySrMq7cm5gy5w5T",
  "key28": "2PcwYf4HntcYPvuijFhZUx3ocHoYBoxNWr7AraG9C1Mg59FYXp3T1K9WmAdQ8Vcx6fkTS1K75MriiUZzYYkDJ9pM",
  "key29": "5EozuVJWTcJj5SUGVCPzYTK1z7icaXCZSRmomXN3ftmav25hU5m8GhqNoxGpG4tZm9qkR64LAK8DyTMSmbYk9So9",
  "key30": "2QXdCujFMsbCH4UFYFpCsmKE7FqEKuK6sPzzn6fKSPuCu5MP4GrkAJBi8jLDJ7YQ7aT2NUxJ3cEXJv24fsNZpdQ3",
  "key31": "27keNkCqd2RkbBqb5T4VdBiUvJwSkGQDz3k9aHatayExmsqKzUgcM8ZKdbCypAtWaP6bM2UcNzUV5b7koCbP7gkU",
  "key32": "354qLcj8ASKsX1AjZUo3GfQacUTzCCVrMHi1NjF9Hjb9vfE84gWonkoLmtjbLWvdKyEqvCWjCuiimhsneLywMad2",
  "key33": "2dvXBbTrTpaVEQJdiCagnja66Jj6v4sRx8tUL4EPzLrmu3F4JeknkcD2DWJ8gBgn6GsZRCtaDbDYEsULjw66bXHx"
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
