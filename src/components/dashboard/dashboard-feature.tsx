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
    "3mzhVcge4XULVZ5feFyiJ2NJ3Hj8yzyEBB5ErSK4LcLCMq5xPgKFu7A6PpBJhHShFFZNexFaDfqVw4ckic5kkjKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fx4fxM7PuY6mpKpweuoJD6ycyMiVqpTSo2uAGn5kCZ1zWVxYQyiqTeCrgVmmLhKUaDoZMtFFZVHw9gSme8kC8s",
  "key1": "3iVT6y4zMucHkNfnD4SfzgkDgjT1VVX9FPXGY7KPrUPzo5S3P5qXNV6v26JYG682n6r7Lj2LeNEfEq6Usy7c8Pbh",
  "key2": "TMhA8wrMinNdqKRn2bKsfYKqH6cmNcxJswcHaGbBvuf6Z37Fh3c1zJHjubnjjLchLvtjmifJ4xJo5F39EGWaRXZ",
  "key3": "6FyjvyKWfXXv9EQofpp2JUitXT4MNj1iG4zqGmNvrUXhL9dgdNSdg6pvyRywAQ4mK3yUin57YVThRMyf8xKsRVG",
  "key4": "51558i9MNxyEBMsPcg1nTjXekLqbsNjKGjJAHzpG9aedGGSS1Q2bHK4GpKbEv2b9KXDysbsSrUvhTgiRCyy9cecX",
  "key5": "2vPxgAap3p6eNVSN2k3pdoE1iouKkPhaSc6zBmhaBfUS3oqJzCCSbZ3aaZdghG6mVRiiqpCezBu9NvZFFWxoeHnE",
  "key6": "5E45asbhbwZbARQiUVxzV36RAP98CicN1d3TXjdXV7bPZFWD1CNiDJnwiAC1vQeoYWcVL3wZkrgAX8bVsBNmhwu4",
  "key7": "brhR6jAQsSqziehUNrkaFTrNszKmzVPYSZifmaAsvBoaSFk3YzrcmG4NjXSeJ5r8ci4dC5cmobzgocJb8f2AqJf",
  "key8": "4k1vq21mfEWBA3kYkJcVRgswRmgyv73aM7xPSeX73uZenLENctEXtkSTmtxhsa51X7MobaBJban2iS5LPdg6pa5p",
  "key9": "5gGcNk8TVcMgtgEFan6E2MuN6ZvgXDNuMqmPdH75tJdkun9YSdnti8tXUHUCS3TiaCpx7j8ue1Z2AGVpkg554qmQ",
  "key10": "3Smnnm7r8EW2oTpRz373WhunqNApKu8NeJoRvN794QvbVcL3DsnHoSQTB6zTKFby1bZrwq1qd9KQKY56tA4CcADs",
  "key11": "qDZKesBZgJqV5YfFGMqJUQWJfJr88qQ6RnGbEddeGaYXnemSM2PvzgPoKpMBqZskd3gnJt9TELkpuGAzN2H7MJU",
  "key12": "5p2TRNZKSyfK1ByGbGrF7y3td9myNWZMD8MWsU7P1mcD6vQzHF8m5XnqhhDTPZ5HJcpJezABzsakz484QzpGbdNn",
  "key13": "2otKqk52NxEhTykAYaAjD6QXXSJxEDYy3jvaYYeQoiYkx2GoZAVq8W3qLG94UtwRuAghaCCQQQTSJAmFp7tJA3JF",
  "key14": "KoLiiosUvabfceghpvsDCbbTtDMsY8R3yCJa8hvsMYE84QmFkaiWzMJySvVeSEBz8NaxqyEdqyhbXv68H1jxvVK",
  "key15": "4sGhcMjpg7ynkMvA4gzKggfSxdJC1P3SUpNomAVCWvhmzccv4dGoysaLd35XJcmmCs9iJWK65us1r6xWzQg1D8DX",
  "key16": "3KKjR4XWUetvXMR9iJ5LfTDBphmTjCQ9Xv6SHKQfNHRjebkSLqLTrnrJJZFELL6XFHH48FV7EXynAZN8xN3JWfaf",
  "key17": "3bdWLwhgEm93kHiz3z1A9JxGuLzWYoha1zCrC32ApHU7oMFMrrTtPGmLhXmfqVHVWq67vLMavyTLEgnv7KLei2iD",
  "key18": "36Zupb3xLmgGwKVxPKq3AVx4QwmhpccXgTvRH7hjHGenC43y8bi1CKW6WqCHuHtLFZG96iKz8N9nbBDPRxJDXWT4",
  "key19": "qmqW11pEEGrCvUvN6ocnVCxFLty6p9ALqoDJLXwMBHoVK1WQAvsVj2znuyiPG1bZMNf33yDeQS5Mzr9WpSeU3sr",
  "key20": "2UHKz6WQd5XgEwNcqYLN2SUFpdGwMvC3dwchpznCAvNXdNSGwCHoam8qpe8FjLwYXpmi3HYbKS2LtJkS9GWnsr3k",
  "key21": "4Tnypcta91EEZx7bhz6XjbibJ4rckufrrxHS2yZpdKYc4Ry3sSp5MTJRQdihSK5ppUF6CMdQTdnkhbTmoP2LuQhB",
  "key22": "5rrypPxqkR8zsPpGhwAr5rJAvhUhrKio3CcPCedJkDZBXbQxH6HFwa9dP3briUygnwuLehTCzQzFXayYQpLLNWun",
  "key23": "E5itYhdy7yVBkM2kFhAoNFmLMwC9jxtp8fbrD4Rvv6EQHdnnKG5CQfCu218ZJZqYgn7c1DT7cz1YxwBr6pTVbnr",
  "key24": "r1XPfHj3ZkutHRxXYkbeWnvjVZ88mzzTntAi52kjJpWv18PUSH1V2N16tTY74csvhFjv1JdBPAjUgBNvLC4DANo",
  "key25": "37Ya1Yitb2qDk3x4yzRN4TAfHYhS4qttTgvmJWAdQ5vSPq2WfpXn62Wv8rZJ3bNo8EhB8MpSYPdJX1v19EG3n8x1",
  "key26": "4GigsgLQGyJjTiZ7qxXPPDi9d4qyAgdRbeLnf4NjWvUs7wNKvykd3su9tsjhwkfocjVURpAJhR8CgxRpVvr1xkuR",
  "key27": "2wJsDq2rGqQqgeRY3sTP6oJbqFiprtVnXzGXUqycXyEgF6bPYCz97CDv461bQUhAFKkwBgLXTzDRMbohuZXgTL7E",
  "key28": "4XgB4nZAzXjrntXiC2jed2UVc2U1sraxFNeHE2s7NFgH7Lx1r99gnW348pdZtp9uA8GCSTJK1RudVZvYpiEHMjwz",
  "key29": "4VW5tyc9ShPEohs4frsXrNx41oGJpUi6Yn89Wv5kZa2YwC15oLQ4twWqFwSavozM5yhJ3L9NDHw4hmXeJexAzVBm",
  "key30": "48GeBc5XRrUHceB2HgLWomWK7AyDyLJXLdkdLMSwcMz5Zg7C4vor9fMC3PFDsY16v41JHCce7gMwHKGSDL76Eaxm",
  "key31": "2cKrXkHkbMNUVgDdD4z9R6E7ieFvVqGW6wNB5kYq99ptPs85wJWeVAHMMc7hQUVE2yuXBpZNvYEWrpiNvqzinC8d",
  "key32": "5Wf1qnvuobacPRZqHqwC4dvopAowuEfYKwk9o1TreqrKARkntRJqQw4DoAnyY6Lo7iXfxUxTfR1NdfQb3WCgH7iv",
  "key33": "2LC4dGmt7KbbwBberNpkKJf6B9bTXndPwZokeKitk5XwxfLcX3yge66USzVB7GEowd3UmdHz947ULnuQyUTrkXWc",
  "key34": "3tpgYBStUVbQ4UaxG1rqgusavYRtmqX8vZpxej3g3LbkQrT3BLHgEbhJvTPqu2ZUYrXCmHfDrAFsmypqUTHqgeQR"
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
