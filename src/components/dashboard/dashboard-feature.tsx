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
    "5ttYgQZevLhgY5B3hb7kwoeYVsMuWTwBU1n6EF8a3v6LFnMFSspLktTGQpQ1Cq1dL4jX7b5kZDoZNed9Jq5F4iHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eY5eLdNuYmuqnqcwmwjjUDSzWq5zafXRVQfXLnYXuCBWkXRP11wMxf6NEGveooBWRd71UmGTfwqJ2MjAvAzcfCZ",
  "key1": "4MF8HHisiGAEs15f24hBLmZPFKGMww6suLHpbPZGhYwRJbQBgvKj9Dr3TRenUq7e1ZkNYTAsxajwXnyfJDHt3xLb",
  "key2": "5jZ2nJyroNRwe29coP9Si7hufT2YpE46dCsY3Kb4nB3t9oHH98xmvhwbsrtGYCzTF5g6DzQFUyMSus67evhbKiHD",
  "key3": "57Qr657XZH7nfSueBmRKSRXWh6h8cVGnDuQRYZctoRwrBmdMXF69vptVBqURzSpjYZb394qRvF5rEXXs8PsRqDY7",
  "key4": "2BNkPkERLxCzcqvJGV2Tz1SbNzfFyXL6zoKFxv4jQ9S2U1ytrD4nqgxHygXwM2ik6Ee7Q6kp5fiP3gTSz6rYTipv",
  "key5": "fX6KM3kZNZQePHAbDRgM62i8TQZp7RiEaBMibr4nqDuvxTkMyWbiKcJNDCTfw8R8SGb1zLR48ic5k1UKtPqGjFG",
  "key6": "5SZwu3n9N8df5EYbfbXsCPGS6MDzGeRxGgPT5hz5RKRYXPFzJKyhQMZCzgDQ7opLNWt9TCDBTsxDLUw8xjRFhxmc",
  "key7": "49pDaDVZPHLKLQLRoJ1XXELk7gttkMCMUBUdBdWS6B7npmtNuh531WGeDnvTD2fLgLMDxYss295HBrcU9iogfwxv",
  "key8": "2nsiLkjq6SqeRjjCFj4jEqp3HnooJTR6FfUiC8mevqvWevNA3EQABcyRL2MBww1oQsz5tijXFeeMQu4YpmhRKe1L",
  "key9": "3pd4v3tAYxgnLi5tBiccPeZopQohPAEwGxNJxNbE3ahNrqYcRHF7G9eCStdgLhr8E6g9iuZmmBCwK1FYAQocMm5k",
  "key10": "2jHh8aaQyEmTDYMPiJDG5fqvyfSQujVb8PhwApKWZQWmgfKdkmyzsy2a7Q9KAQ9KrVYRQPt3y1J9481neiea7CE",
  "key11": "42FzgQCzvaWGow6v7khaqJ2q1WqU1hrW1GFsAwRLYdXTijPm4jxoLEEfCqjS9yKCxtSgs4KJwfwJNDwhRsrz5aHY",
  "key12": "5LnuveUDW745P2irvbdceEBo8QRrmtPD9WUSL1ZKzQaVbDKBuxfFrtyTcqrhStnYio4fGxpudnW3iosYJ3LV4kSS",
  "key13": "4vUT9Azty8G5Q5Ef2n8CDBJULNW94nYDUKSvGsSjtuVEtD5y89vTELa8JdNAXeDey6fhR2hVR2EjpG6965oqTqqg",
  "key14": "2uJ7adP4Hrngiyrcp8PrKwdjCNHeW71ch6rTi6os8KWra3GrAV7Qy11j6rnKdVPWrpcfyc58ae8ngyJZpTjbewnE",
  "key15": "2EaHAWNc1gU2EFabGZ1hj1UwUh9GNPmoaqo6SGoJ2nCkVq2YdSwgnFvVnkEraef1TupWcZ9mp83q4UrbqTC8awue",
  "key16": "4sA855UumqUEGUuwXyLqHxj4QUJXb1K88Mjm7SCWqosoe34XgPcStjdFQyPxLsCRDZio4eoKam2Wnr1pJALV42J7",
  "key17": "3aSdjWfGornVBgKjo3Qu4iSiPykawD4uW1aDNhDT6z57M2JsF4KPx9s7rrc5dq6CzCLTSsZXfaMkNdtE2sPdGHE9",
  "key18": "58BFaqEfm3wxbvj7pZmXwXD6Zw1w38GacrmxBuqE3AUQ3C6quLV4anp1f6y1N8M5xxScFosM7ce7rSTJ9gU2Rx5G",
  "key19": "4GeCRtE57DFeSDxceWapo9NJSePwEqqYAaVLzBTNKRB581WZZYgwdJY1jgNGrGdJNg6D1g4R2NLLJeR95iXBuu1V",
  "key20": "Um5aykuaC8DcqQZaNUB91YGfhPEQhgXK5rUgwpGuwt5KnPMDRBMD8kBXASgdEBpwoXs4kF2rhCRQeeVzW6byQyT",
  "key21": "2tspieEXkemroi8Z9d5Nh2aQNZrf5SPkszXBfyS64JxKyJx5zXBipFoc8ZWa6T7H2wjFZv9ystVpnee7GXWi8sn9",
  "key22": "5SYz5qGfUgTq51bzXhDy7dRm99u1GQcd2Lp89wAbUGkPXbvEx5gc1Ys4hMzJs3HNkoZqbmhSfKMMYascpTjL2UG3",
  "key23": "27sZpzL5vgyoGQCB2rJggmRo8sA5RYvDoVNwyd1TrYqSb1HzLJQSp1jmromZwaqKGKHdaAthWbzu7gjVvowFVTDr",
  "key24": "4hQU514waiERDXpHyMksHL8897VsjtBErqnkiusXntkVLtSuDhBxNmZDSnh4F8q7f823svwPjkmeCfYyVqtR1ULK",
  "key25": "4Wy3VjDLwZkMJShMv7AgUm4zYQpfNr9JcwhWy8bjKFAxUWG64fNpPBrhkRiW4kchyKqxf5FkqcMbLuLvWfxBv8Xi",
  "key26": "Lmg2Qs6uAAnrTSfHYTtafZmxM1iUxRH5hAa6kiEWdULixPhxRKThSeLbQGccATFAfRxcTLWzF3X9FNajdmCKfWR",
  "key27": "4USe66zWH5GVQZrZPHnJ7b3pDRYBDq6dN3QAwrEcBFUDJt4nqpjLAX2dPU6Uzpa5bAwCNBsC1uxsQYAxiaAgg39R",
  "key28": "pe6rFuhLa59Jrv6ie2MhWWrLFxPh5NKKQN56WyeNxjcRXF8yHvZgKCoEK9ogBiJyeFujshj9TcSCyDQH6MPZdzF",
  "key29": "2eNjPiLaKFzB1syWPZhTMMzYYzhkmiRoHeCiauTQ482ZfkmwxM4TbxuXf2VRs4jeA6XjLU9UaGEEsTaX1MkdcPAA",
  "key30": "2cs3my3qRUuQAVNfe3Nbjtc34VwXJkiSxdUrp5cZx3r22oaXMpAx3ug8Wh8hYMEH2P3RYXgu6Pz96F5Psvy8n8mF",
  "key31": "2RMW3n6vakS5b71tGVbN3GAt8RiX2xWtXQMJYPDJCM5ckoHNPp3dSqp5MXgAXSDpQNirgpGVLnTBuA5nmkWv454S",
  "key32": "2PNhtX8njecxa468JPh92dkp3XxZaFZvkoKQUrGU9LjMy2RKhW22ED6XGdDZcGBtAWdxRCHJ6UT3aNsibi3Dd82y",
  "key33": "4dg37EpRyDaPzMyjgaAnZ8JJFiFDssKB3Aa311kdRhCCiuy8yoxkMnaR2KzLq818TU1V6f72wT4RHG3ZxQicUog7"
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
