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
    "5jN595xf9PQnHpeCt1dwoXS4i388mKd8dwhDQGDzDttzWxaQgU1EjLm1hAufUyVBEePUcqsZ1p3xAafSxGwNB1A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g79xjuc2eBoyguVGKHgo5BMufhueMffbnPd4NR9fmqsuidGcfPZ1FMBoAJzHpvbWxkv7drWpw5CbiGMYK8u9gh9",
  "key1": "673fxpe6YcYsmnqe1r453Rv2Qp1T4oX5rqhUMAdyhd6yBkjkzVb9wNwR9APhcEKbdfW3hw2UpHtgDb8JegU6waA7",
  "key2": "2xaQb3mzrPD9rKy9xTRCxQPnxJDPkGt2d8YtvUqqrTXjE44UWsxabN5ZCfVZPoDNovYUAwiwcaPvaJSk8BRaQN16",
  "key3": "2T5XABHU8D6D7NEv623BpEVmxzmPxWiSM4ACgcYYS9iACH7F62EQCgZL9UgNk1dTDNLSA9FL5LNFGeZ6br4PGUdg",
  "key4": "2Bv5fjqgUPnDj282ea2WeGsXvxdPpoFRjP3NYFY7DCUG2rQVu51MG8yESiUsKdqosyi2CEidD3NRiNKYXyXKyeYE",
  "key5": "3CxA9Y5f4e6KcV4cxBYSh4VBPHxPseaydE44hYZY3zdMesEgS5LmfX7MiLXUZ5yDzrWa3cquUK29PaKkvvXBXTps",
  "key6": "5jiJtM5PM2k4g9msxVwddce9vpueX9faLK5GytTAYzojPfj6FwMDWaTbUTeAyemUDUUvu9ND1CcWLw9EkcqC1Le8",
  "key7": "5jYN1Cgycst7nnLeT1aQXfLviDws25ERAkSj9topQ7R1bQo5vzoLqwxjrW6Fq6vURhdpWE7m3178W8oMsxtsRZnY",
  "key8": "5G7b7m8tXKCJZyD4K2bHMaUVria84MiuDwtJ4vVmDB33sk27GT2Z3J8pR4ZDwJyt1kprwUN9PHXEaeK316RV9uBi",
  "key9": "5A7kW2mc4kHWCdTDAwwFt7P9YN3CTL5D7KR2ZfcEdvPJcZYgdXZ2xdoGBFsGYfgvcZM2UAjJ5Uiyn5uPz7S8PUwx",
  "key10": "3j5ogA7vBFRQZUgGL9P3c7iSSzXxjERLQAaMkBuBvEwNPNxPM9qvN55PhkefJjmCKcnRSn2rCdJQVfkYeKnqUzKL",
  "key11": "4B6nUjvAKpfNqX4hKAj7GkogtFmrtetUp4dt1fPVuFwfaKx2hUjC3PQBSZoTcmKN4iVnVQKgqKt2famR4jmQLDWd",
  "key12": "2H2q65TbqA37deqpmNT8yq957njLMQPeg6BxSFDULLtBF7pLoJexH8tiuSLREEpCdn2wyPQtxP2E4Pqp1B2MLtxz",
  "key13": "3BzFhoCGFA5yE2Yiz5DQ9HZjnU4H3Dy3Ki2k5JdLer1oTqWCzMCCvmc9ZMgrmK79UNp444HUt4cbXgpfKHK5Q1v1",
  "key14": "63DNcA8iBa99f5goCjy3bteV4naJWtHPNkGeXaXzxyZWwWAHZF5SJ1jVtCuhd91zzDBGjbEh2TQwwagvgB5t8dV3",
  "key15": "2Wywuvt1dnhzQX2D3TV1um7yDo3jkNk61P7mz7qopbWmNwp77D5trgpE3vpmjkqSDvtFAXavf4i3zogR49GgWLFp",
  "key16": "21iZ9svFp8zXMvKy7GQmdWtTrMvUFx6dv2tHWgbky6j2kRxZ1xuuJyjqUz6yJG1arzfm8Uc9119ygacoKoa5nH2k",
  "key17": "2rgmXHEJ5yX2HDiDbkF9HwJFkk4c8XHtVcQKJeu113qNZzhiwtb1gyR1uXSEqZhFRmrgGGspfsAJbKefd1n5VDKq",
  "key18": "To6aDNnoiS6kdDjgSZpvRJd3dkdo5PoksjguPffALkENra65iCGEjnoWoWWtA7xmTbMreZYg8kPFMAPvkTy5tw1",
  "key19": "31ULKcSsRs3qz3xu1dNqdxNn72RGCckshKzTZuLUKexbL5qpiHjU83Ux72B8EJpuPNNqN8x54nDV47VJ1EZwqnp8",
  "key20": "MScEYRgy7r1qUMZyb8XQKUThxBQbFM6y33bbvvv2RSLUJgBoduvLA4Bp5rHTKsTKHueuqaB4SeUKGHgBYKgfJ5W",
  "key21": "5BXXdyo8vnxCt3srkJCdUnrVtST4N8S6X4SZJoeqCHcM399fH3gB25S25cqh4XLnAdE8MSzd36sL2ZFntPxTk4BM",
  "key22": "Th1DsEmfx16mu4j6nGQWidVDmzEDLKK9Fopgkh1F5E4AYuNtwkBzrGGYZbounuH3J9HbtDyTjtSay77v3tDdp2e",
  "key23": "5ARm4w9QT1s8c4enyYx39qgsqKv6k9mCFdXCjaHNp61CPoA5uydrQ5YJJhg6RbyoFvefpsQgHSnSbQspGDPhzYRd",
  "key24": "2jcRfkv8kYwvtDjP8suCE2bNEbhhqc9n7tuNbJ3E7PVgka4m7Mhf8T1ZDTtC8q9Q2MbnrEvfBawEFFg1hK8tBQEj",
  "key25": "LmU6GZLDMiVqRrffbNxUpKfEVk3rK2WiU6eVCAF8uBUm9VazndT4A4YahvzhhYLTkqf9TGZ95Pg7GHJ6oDYxgzS",
  "key26": "4g9d6BUdGqHQo2saU21m83teK1VGAU4PMvFQ1Cfwx2Xu4b4jnGW7gZfCxUNvBcndLmD3Ft3epvFi5sXM8bnLcu1s",
  "key27": "5DZo1SMfAwdjAtpaCYUeQ61iE7rxHhtMPAFeXhjJBKKrMicS1kfpcgp5TJfpSF2tgmkHeRcczB6YAr9zqPyWEYUJ",
  "key28": "436hb3h4z5qDhhJkFC17yFgFGxvKGYsfV91v1xcrPHvjGygPdgLhsfK3b1BhXoBiLJF7sn5v3yBZVj9ikPcQvDa5",
  "key29": "PQQKv1aLDh4wDXawFA4RuHaeqircKGyB9SkzWYYocTb8omVcA7csNxQYQmz7tEFeVWUqnwaGYGvBXWvfZ1oEk6J",
  "key30": "2SowwSBhWVqmvjnpmvQxtULv96oaEmM7g98Qs72yAZwdPFFmjaAcVJo7J4vSTegCcvHRQyoDUvhLjtF6hnTYtrei",
  "key31": "KneyDGF6GDWY1PrsVuHqB62LG9LzzQYcj6PdiM2Fc2JcvPRK62cBKLRKZtFEXDV7qnLHMmFqjzEM6WBPidkRu1J",
  "key32": "514RCJt8VAkZce5ZckpCdqX27hT5ZnwNRngsF4rNfoYAwdZpTwUwGZ64iwEJw73mX81DLUzNfPjAGcSoZbFQgK3n",
  "key33": "3DzT5mzgSa9e1dNhWLY632UxeuGYATWSfzmS6RUXbv5fL77JqXLQ4QhVNp34t2opXTgHG78rrQGRfmy85y4Z9pfv",
  "key34": "63WtiyzsAfTtgbnAMzEKXgrykhVMPAitmiqwtZSWsXkZThVe9RrrhDEnW7XCXmjzENx8fs4XJYqnPTFGgvMVeHzs",
  "key35": "22xvVyZP2KNVgDh2ZgDYiMRq8sVchJkerhJwineK81hASZdzRWmF9PV5atPG1ngQUjomL6CBVSktLZAaiwAmep7k"
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
