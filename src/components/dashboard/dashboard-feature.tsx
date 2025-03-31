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
    "3z7DJ4uRMWqfxJpbLqE2L7nkNvHgBzkQCUKAH4bjMTh9ZdntVVdBKG1KqNZqULS5DVdRg3KivrNKraGWR2RbyrQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqG5SLwfhRz5kWGEhgZH2QEUPPsyuWMbMrek64P8QrUpbcGDQKrzFTGAjbWzFy3KjA7ckmBRfk7mKb8inVpSVu4",
  "key1": "5cqmTPZUvwLAEFTZnr6wWhatTbAAetii3bcoAGNmTuyDJXTWvSJzxPWGXfHdLXqTnPdFg7xVpzeJjvEsgKZmT1Hm",
  "key2": "51ZU16VyU5jJhSwSUeYi7wGwhixbao2EAX2Yxz2t8VK4yqZgMm8FYhfQyJwyxZa7iWZBERdwFWkUVDGK4gEAG1cP",
  "key3": "4EhSG6UeR2rKLFT7AR9JhjoDcVkAHLA4uzipgdVEjj5JPTNVdLpKmUjLdpb2yanhnHn1kG2q6rjAsaPUKeff86qe",
  "key4": "63pfmbqRJ58nypbsNPUMZvw2329zPGWv3jWbJVjw2GX1iTkb1YsFgTEv3Rxoh3WUsU4nEEqDpPqmAZeYgiXP4H66",
  "key5": "2oMJzqPxXwBQkLRne8kLtYkyjyQyzWNesphg7kLAY7CPvDDeTMFft3ECX3oH74QZa48H1PVtkhfcstdKRCmMB9QD",
  "key6": "4BheCDfqckBT142NJ3cxg89Ju7h1S9dJ15YGaXBcFsJnjwWBpxftMrJ8Pb7qPw6iyTboNn32gXKDUu4vjFZMkXqt",
  "key7": "4YAeU9SkZB5FJw6E2bdB6y99pt2HaaX279ZMK4Xr5CT2QLmPitfinyZRA9BNKwuRf5bMGCgV7CpR4yJpiMeAgLgn",
  "key8": "oNTpXMSVpp8JWX9o9wyAsm82WF4xP3C1U8PcduH12EwFGiFoN4kHt3c5vXpdaH5vXzbNFS6BL5h15bjdj9EtupY",
  "key9": "5qdEMq9jq7vcVtYpYM8GryTCDuJB1E2NaYKS9PvX8D2Tp43Gw3Xr7S5CqLdnvVFu5kpHWakj3BkJGU91NNeW8pkt",
  "key10": "3GhN89ZifXctkv7s3MwpQcG33TXveC5Ca9esgZx8CaQFoo3GYaFePnX5PNdvzNjXg1WS3av1NKE7asSKXedMggFQ",
  "key11": "5tYbJeyAgXVJ6RuNRF7HwnAMpuNpNfYbpFsnyDuHpCuWP1G6U4LZgoTcZZYpGVjjMMS3SniG6XHpKtoCLvKL2AgX",
  "key12": "NpVvELcDRKzHWXRZh5W5TM5hFaYfbpn9BFZQ2FKxX5swr5asK9VtMzMQ31AgRvdjfkpEvRuMNq3yfpkSUtSswyW",
  "key13": "54iXTM8qv1bNtVhxMyi9QJK9NffFJLn4uWhbVv4ixUFEABYLQ587SPosXZZfAYLx7Krx8axacmJNyqZot5kNPQCZ",
  "key14": "5EUXwNYy2yUK5TqT76du9qgjaDyUtcDCiXPCFgCFD6jTosV2W8KqnyroRYA6PB3FEtEiEoHbo27j5VY7TSe9Enki",
  "key15": "3DW9Q8w7bETp3diEFYCnTmLMto4pCBdKNWojTKriGrh6ZQtp1aGTkvt8nFTsrkCWVivbYij9AAMJUNWWQykq61PE",
  "key16": "qisr1SVquCnKpSnJT2FtjapRbAMhtHG4imJy6vqLeePxXEhHzw5dqn28YbUfi3Q7zZMMh9j3qMMeVCvAYAWGMci",
  "key17": "e4ghDanPK32wkvNgptp7AvRZ9KUcUoSP3GkVxYFafYojtKETDwWsdwTS84jP4GHRwQUK6UofB97c7qMs3DG7Di7",
  "key18": "4BroNLXh4TrGcSz2J1NTtXDCQxDEfjZAe5yZcbXs1F2Sc8FzzHDrF4mt4M2w3ZwVtKRPDuFV8fPmETQeS8RwZN8T",
  "key19": "2rjQb8ag6NmfnFhnnGZ8pNWqJQ6RZdGzVCkpS1nCHgZFY4JXiYgMjiFdZVVHGqHiqSf6H2cbQoWN5V2krhzRgutg",
  "key20": "3n6AUBtzJVJQtz7ZMzeGSeuMbq6RPqGuTAMN47y7wfQoiZd4K4MuRA1YDq85DDq3EyCqKy7ifLNGGkEZqXwqL1aN",
  "key21": "5tbSdtqwghVseT4y6Ghu6VsatHkggpvqhPU5dNeGyWZumAe4vkQbY3gorMVnUh3Uj5kN6cg84Zx9YDq4Jcs4Lx8o",
  "key22": "4hT4LjgK7Utz7ShTfmGSu56VDyZ7aQGn64vtJNo3QJ9G1dXbTzidds5TbYMzHpJ5D4d4Pq5ftjrK123JzQmZtEG",
  "key23": "2ncyf5q9hxGjjPV2UuDyeCJfpjBM8MMXBbLkqWoM1g4DzpnuJ47HAA97GGBU6pmKmcEvFb8aMYc4vYTyw8LSiAzx",
  "key24": "2ssMWKrUDJkbTNZssiNvgkGy6emdsWAWCd71s41QY5imyEzT8hvwWQWWx5mAYU7gUsLdn7BhuFQ9Mef9ZiTFHjnK",
  "key25": "3GpiQKRwhmALqQJPYpQ447Wpje9PeAuKgdSvU7fuSgGAxeUvnJKCEp2ryRzTDbJ4HvoQwepGaoSzUsgo5Z8UrarA",
  "key26": "668ZjBaVnxL5CXuTDXpKQUF8YjdisThZbC4yNHdXoF5Gm9XLSEaHURAHWyepcrAPFqbU6XuuDsWvS4qVtKiy3R18",
  "key27": "2HagFUiWW8ZLbS38KvfLLFxGBn4H9yYc71fChbgaepc2cZdeFFV3tanXoD4BmrSpjR9rQuRPn9ekuFkSXZ73soaG",
  "key28": "pJXNobSuZkzLuceRaToXK1SaYqpGMVqwfomkrU96VsRbzUXsNCmoiHRm8gMcowm6xaMFUvUXdagfYdPGWBNxhWM",
  "key29": "4cvFbi3nyJNW6sfSFuuPBKS1P52T19xBD3mGqwkKV9pwvx2pjkCL1a2roCHqcc59KU3XWCfok2xApGzJ4KjrzR23",
  "key30": "4JPMyxWa9Ng9WgHi12shgU4cTnSWtUcQU6rmZP3Sbr1kmXhHpVJ5Wf7BSocbby2io28XwH35ni1rGKekeFhtnNSQ",
  "key31": "3QiACeGrkNyDH4SJ15y7NfXhbPssk2DMn82iLi4N4Bjo6sqhUZfBPBLW4xKaJLwkYDSQKxoHH2Mvsfrojty8Y3nv",
  "key32": "2HN1Vo7g5NkCiTLUZEn2pYAXEmiy1ZNvm3kUaorFcTaJm4t3ch86ykQNJiGZuqjnTd28GoPMFgUagFUSsRyncYCV"
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
