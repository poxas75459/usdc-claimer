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
    "3dW3xRR8zigLjMybU59mAphybDNSshNUb8pkqr4mi5oH7VczpPx6wtZwg3v27fWqEJAJcpCAhFEKqMPp9z7VwDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkED8CsqkZw4bqV1MHfga9gbrdhmWAmyn3cw5DGh2k1496xWnet4orUYEDXeBs28QdvTsPikjQDStK78vFQYrFY",
  "key1": "5cVYncMbqCangUjADeAXhxuZV5EDXQXpnidrYuD1PSDCPxfQTAGEY5Rs9gpLUmKpQ8n73xy2gMjj4rZees7pzGrU",
  "key2": "2RuwznZ8WdA8D1KhYohzZpByiHqkRJY5uLWSHiDdtxP6CeVX24x8xxTNbT3UAiT62bKikeCyQ1Ru75rhomFbKXST",
  "key3": "35agmZ3P69FeBLLDKAJcubvt9QKGUzTiS3gRs5iTuHRePzsYyEXpxvWDVAWJJnor3AnsBR9TAQ6WK9zyYgtBkS6q",
  "key4": "2UCTZBVGu3THDadqq5wcsBiNztrnN6Rjbdq5kh9mH8s3bgKYuFwQhPoyvpqJa2qwN851QSMcZ6defyi56nobg52y",
  "key5": "2pkXbe1GvGT5A4VRoCvovhVKdkMD5V1efEtuzpQByFHho5ekNJJ6jFv4asJTkUzd6r45LBZvSpBmR8kxdNRd7BAb",
  "key6": "3wR97jSQ96sBTRNUa3Gt543fakGcTGZdiUfhvqo2CM4kSYbbpFC1fXDyubUbqQoTECGKkKHAw4ZnMwudBFzWEFFM",
  "key7": "7osPSweqkxxna3U54RTnNiyJVg5HBNnyogskEjhHPp5wCUMHnJKTDY9hbLxsqpiqDdVLfABeiVa5LGP3iTQFMpP",
  "key8": "2PvfcdXssuoXPHUk9n5vUUjgwovzJ65CtjcryrvkH6GhAFbRbkmcbPzxQ7RKurmFQevqLrjLvFf2p2XxvigXLeCW",
  "key9": "5dsbhtNUFmKc4PSEC41A4iYNSRGMziugX5qSGhBcqtCmBY9JL8kg7jeXdWr4LEfdidynjVxsCE7vw5pcQ6Xy7ZCZ",
  "key10": "tpN1qnbHsdojV2pHZFej1tcH9Reh4vvshezLd67KmobneFLMpcooYsFza85WDjffUXt6dcBKgZWrZPeuDGeMCF1",
  "key11": "3FSrCfD29HjqPut93bFXDDvutL8gbCtrBzop62Q8Sz2U3Yqs9MXZ1BqtQ6CiN2B34PfA45rb5ka1tDH8WAJ1TeTt",
  "key12": "3SMr4EdGU9ZgNU834mhN2kg9tW69J4BPqBgBf323ztspZBk1B3KFqXAa8XtSNubojYpQ3yHpjy54UbBpGEcCYr5t",
  "key13": "2M7j1mUUfrkvCDPhYP78esM2r1m1CZEaf4sS1bhxbk95pHmKrWTubqJVvQqKtJNCy42vmSd2icEMhvNi6owY4BGZ",
  "key14": "2BRzArJdNL3spWN7Qg8G7agsxy2cttquLQsD7Zv7QruSQgzJZXXeHweeHHnE45jkJ3eJiTSDg1b32cX6BuTTdPP4",
  "key15": "xZyM3UvNrkTC9xSJepyZD3XLs6R2qetNhuTHaUD8uT87DRo3Cymnn4jMtMu1MX7HiBW9LgPiujUAnYLgmzdRddc",
  "key16": "YSez1LRQa5mkLkbRBoNpiK18N9HXrvasmEQcsbNiigy7e9RhYyciJyBvtDoUFjQHErNk371N6Fam7pzerxDyUiu",
  "key17": "2pD965wgH3HFz2QeEkziKMD4BC9qQP8PoeCnDq9P3Rmt14USiniR6e8amHsL4C8mhCrwQdeRRdvTBawrm7qKVBNy",
  "key18": "3hvoxnb7uZc5BNzP6NcbADoPimHa11wdPqsxKMS1GY2uz2BiaGUhUQjAg6oTqoe68whzhddkEE3PYUK7H9Th7iXU",
  "key19": "5KUi3txE7A9ExKKQvAHjj13HUcMi77WS54UmbT3kxNFHxZ49LN1aMsWWyS4LQomUC8zNMxCYD1rdqCW9GaD19yf1",
  "key20": "5ierxtPrB2bAXndhQtojDkSbFEbnNV6TbiC5bJuWD9gYsu5f8C5QZrAHZRgQApD3sMsWDy1qgws4JLBbp1F6SH3g",
  "key21": "3qau2hB52583Bd3FkGL35zztS7uGLxzXnt43KxbDfH9m3J8KFxSXDAcQfSyF8GHr5WF2gYAm24bRUtYF9NGeAGRz",
  "key22": "5ZS9fXh2hpjCWqAkQ6QrbYwym6w5ib2nYrMKzgTDCG7LCLN8yjo128mfCPfFggagraQoxB9Q7EbvbSNdhjJxhqMp",
  "key23": "4q43N4xuipp7uwrpJBNPZA3LBFEr36mM18VEaG7PhfXYDMvrwLzaE5dUi8E9aLwAGDhhEaygYFAiqR1DHsUdBEom",
  "key24": "5zoiKo7i6H3cfB779f9HpEJV7xmzws5XW29bJF9REZ5kZ2sKKYvhPzcLBWVvWsM5dku3TDnneZZfxd91T5DPY7bs",
  "key25": "4mxdSQSRceQBbgDQxxvV7AyhdqrPWbuovQgCUVkSJ7LSjWVKpoYeLPrek3LzzwR92SKRPZewYtW2G8JQjNP8AoJT",
  "key26": "25vMaj9NLejDp6TQAaTnNLnqAiWGRrjNdTtCFkqn1QmBwL8J2F1VwfySee3esCU9VKChdeRqwUwjN7AigMaDtgx9",
  "key27": "2EuS6F3Lc1V87oXgEdq2Lo7puM2i7qtB3YHhc6bJ85zr3SfNxmERS8ojYrVbXkY5YnWqJWAf8HWac2oREbQorAXS",
  "key28": "59uC4V1bPwZvivqWmGYZuGfbspgPjuXSwHjJK89MjALb7oSVLbR94QazFyCNCb8YYZjY8vfCi9qaMdXCyGymgzw6",
  "key29": "G7oLz2HSmqUwJYPcEKvE6ZnSH7932Qi4fpQpWoWJeAbxm8GQK2zZTuVfYzJggQ2fX49v2J1JfQPxAzjUzQEqezS",
  "key30": "4nK19rewznhz2hxDZScZrHYq88ytjcqFmf1sbY7HyHYcNK4r8nWTpjMQGjjpLdpENptFyM37QqivT41maCVnUc49",
  "key31": "2FKPeh7TMQju524P4oH66YN6qoJRCYaub99zYeBsDU9XxeRsLcAYsowpwye8pL5zttFYxWX7udkSsxjfBEkaaUcn",
  "key32": "2K97JG56fkW3CTaRBVrjanAggbrVPx7i9RLX6JtEA2RD8J2GVkEAErLRjKat4c8dzJQzf2Dim5hGVySKJ4WMH7EY",
  "key33": "41tV35QKvcMqkFDahveuQbNcTVvqgSV2kXTaU1o2HApxJUQ6S6jT7aXjLeXVwas6Gk3g7zGeJXf32pQuJEb9pDLa",
  "key34": "2fpsMYi2GESvMKLUcNLz6ESUnw9HHgveikeBkfYp9cGFKpvayhVg5f3xukQutkgfPofwCb9kdFwCDGYdhgN3kwFn"
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
