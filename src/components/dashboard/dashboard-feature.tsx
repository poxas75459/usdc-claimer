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
    "5fE3r3P6RuFLS1po3xXNJKnh5eJd1YS9cTysnRE6UzHFQzfdWHgzYtRzA5vHhdhEjwztPn3LBp5XYmkcRd6Bh2mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "427UvFmuPRnWNPefXVZTHDVGJevJG57AuNTLiPgiYrYfoehmTnNaLF2toMhSMQcydgjZknvQG7Koar8ETiaVwW2V",
  "key1": "4mF4J33W7kzbnqyuHJxZCfCmVm9JsFzf9EuuayRwV2FkqTRZ3gG2P68L5sZg8ha4gE29f6KpdiPWY9xqNikwex7g",
  "key2": "4bEZvZB4ZdPRw3ivcFNg2S9Mq5LxDGKTTnDFXvpaMYT8ecRSNpHaT8xepvBTCtcaXDtq8yuiJsQ1kYaQbiCNjp7w",
  "key3": "5NguwrHPS4MMU5N7AYkbKCiVW3wLH2GytWKuaPFHrKxp8WzgPL3JxbsvLL6Ce6S7EJpCKoQw3dbqRhG86t88ZrCo",
  "key4": "4WkGLsCwqNjMZuTt4mtfGWGvx2uj2HwiMjguAu6uXE27h1WiLoDhPSrR1kcmi48r1k3s5ozXX865bbdL85NWNqHP",
  "key5": "4xDj7JG1k3ndsoJp3VSiV27F4YqaCSwq891Y7pgghrbUFzyktSdhXTC8yaLNmf1oggWVBe9pdN7a8JRi9xhT8hm9",
  "key6": "24HtC9rKoRgQs8QgRV6typZwh481iVcC2S6bmNRKnuA9VDsJiSTh6875b7b4uTExFo95vPuwg44DL3fVvEL5Txiv",
  "key7": "2dZsYb3tsR7VrdVW2dXvLHWG5xzk7jRYvZK7WrWp4bxgwp5EairBJ7FZLb56vPoLY3Ro6DHg5u8MvgbkhP6nvqyn",
  "key8": "tc8qLMPX4U8cj8GSrQ6FfjyPVf5j7edSby9FSkEBieFnV6GJasZNVxgrmCBrY127vG5HSyvsH7CjyD9VqUeMQJM",
  "key9": "4SFbXzhuU7MpqpkNh2nc3Uqx95VoUkqkKkL1ajZMSjTSLBLqNd4WGYeR1wU1CEvyrwqjDaJiQq8g2gZ4Xqk3PC9c",
  "key10": "47m8og5tgGfeZzJfKYAN5YMbsDTF7Ni4q8fPCimKKewyYGpr75kRvyAzZkmiqEYYVdUTrELbyuLf4UdU5hcVM6AR",
  "key11": "4JgfUUDAsqy3A1ZzWWdu9Mwxf7cDX6wgEQ3bwv6YJauGkn83cbYe81Hp6NJ3mmcDowdj3v1vqUwNXFTtNSMpYeL8",
  "key12": "Nhc7FGWe7cpfhX7aoV66f5BYg7H4rDqEUjMHZmAm7ZutoUnxx1jUSMjijWTcGxAPVunhTkKpmNrVPfVWJEp9xaa",
  "key13": "EXX35CPwaFAQM3qyVVd7bbFFb2XZob5iiKJVWBiUWKEYukpU94we3zETX45mtBnRDPP4QgZycJipJrVmZkoLd7h",
  "key14": "3YJUUVuWcJt2jKxJXx9QijzLQAQcBTKvsy53GMvST3MQRyawzzD62S7ds1jYM9ZXUkjGUZQWX7uGH6Ft3WJdbYZs",
  "key15": "3Afj6NonKw5fcX7teLwcqjGfaoBqWbsi2NryNVjcZfAd3JetvgrpViPoXhvRgjBgoJnXMv4Ra6sBMawJNBDtEjeY",
  "key16": "5SDCiZydWM97WhrKKFxyBQGNJ59SwJ6UwzehQDXJkKXMBUYp5kG9sCmgeLG8KpzPwJExPDXrhZMjraKdMTh8g24D",
  "key17": "4iurWNZ1RBfRXidKfydt5tA5pDk7BvYHiLHdFhQ52jErQ9ucdTi1ioMQBchG2ji11fN2avwY64zEV52m7izhUXKb",
  "key18": "4zBgRtbNfHp3jXnGaiJ2U5SM5TiP5bUEaRoiRxWJck6gvnVCbydKF82HreNLYYJ43Hpf3q9hT6Tv2jmEbce13iK5",
  "key19": "Txr99dzxttSm5XhsGeUieQLfePhKDYVy8L7QAEsPs8TGAFVb4ZRtivoW5MCtoNnAsJMmPPyojKAzc1YodNLqRBN",
  "key20": "57XTQQN5oGiLJcXBztd4GTdFMKefiqRmqxwpZppQVQ1FDreyWSxHFxc7kisza9hu2scURGoQoPPoT9D1F6Q5ajf6",
  "key21": "3in513EHg6XGDFPXd2NMddbhPDfzcDSKZHAaDigwVXCwBLq3xLmAYrSVnK3G5nnbkePz2cnxDko3RzycwfW8U3VA",
  "key22": "3tpk48jkHuyPifuZXe3FriKPVwpzeV4jYbLTcmnxi1NQ7EXC3HWf5c6yhQuQayHAAtqqJmDcHEY71gVsnizh6KWL",
  "key23": "9P8MPDCVXKzdvKH4ubLJ66L3LF9ezQWXmA6cXBjVDMF2bzftSQnfdX8RbqFNchXpvb1aSNQjn4fQLLUuAusczVn",
  "key24": "YoqG84pim2rQg54tq9a3iVejfpKkaqdGv2SXmbeLr8TRejCRGQ3FhXdX33Qtxz2ZF8ZoizbWGuSoS1nei8fLc2f",
  "key25": "WirLyBzcw4s5W7WFsHQLDe9Zqes6EdAubu4WB1SBR1aJmCSeEoroe93UCLyppqJG6RsP3NNRGfMcohMMTA7k891",
  "key26": "34PEaCrfUkKmRJQGttr4xGRNAreBEwat6m4XLBLoRfWthjbiBwHYg9rGahdt2B3uqR7HERGK419btSfrTBgSExmp",
  "key27": "26g2HxF46vQTFPtNLvJ8TBre2UZ5dVNSbs9uS4cw2sGQuUjk9cPxRXC35RPvmiAx3s2SfDx5QfUA9LtqtppRS1eT",
  "key28": "4EjGkUo59iQJcQtarWD7hUPmLegojnvvT4YfwW6vCwJxPKfRWkJr6KEe1zK9sRckc1LWYwEY8HxsoqnwTYZP6dHt",
  "key29": "5mYtQssF6T5gh2yogTwRWdP9pFbEYAXGvpW4p7hH9WfJVRqq3hhqF1psLSAo2RV8EmXWUzBT2mDt89EkdtpAUNzf",
  "key30": "oB36WZ41zckVk1S1GfDyzxzVsTqFyy9MwS9NkdLGbfXfLvznpohYdGo2DCcdTt8dkAhpGg9wynhftzPFDJYdhGr",
  "key31": "5GyL8qyTfghpK7F4VnvUKKMLgTS39CnWHKkFyUXm5Y9KxeGrjwgdRB3K8UsrkbuN7YVtfWb6ydXS9rUR1QGCouBt",
  "key32": "4Pswso9WBzxApbKxKJwPNXBDjCwmhycEQb3bDDEi3LuH3KyiDB58e1BNLkzXdZYaT1HtrKDc1kE3KBsw9j7bEr95",
  "key33": "2Xj3Xw65kTHzWDUfHZwVzeycDb7QqhYkrXBzJr3oRMbrJMWsk25JmbKjoJxSDazLpXPWqNi6beLdp5nzhQfEB9am",
  "key34": "4XUBVV9LYTqAZhgmSPg6VjbJtwoaicnZWVYgHPKSEXv2XVWmcWqoBs1hcvUdPphbWCaX1abTXaecL4QZ18if45ik",
  "key35": "b171KhHVBzygrrejR529t2TfabgPJdNzmCZhw9huh7SyUercGFWp688TCx6vqgvSqHn6MkqDig7v9KN6P7gaHYe",
  "key36": "oKrfEDyHQRZEdZTdVcXap84DrNRyAFWpAranbvzPSWjxDL3xc2SjGnyCjWQH3C9AmQGyFjDJWX99Qe7vtRh83jm"
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
