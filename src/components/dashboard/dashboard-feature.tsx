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
    "ptPWDHchPYE6rZ3KSef3SLYeodmHzopSWSvJYeCeRCg9TA2fjycPpYYfvCtmcEqsayiZ5ESqvdyHURCFmFZgw9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61oTJtcjttWEfBTgN3RdDeXGesKjmzyu4j29GyhHiS1fAZ7cxbsoUaFDRGabVq2io9F3EjmJrYiD5fCnMoi2bu5e",
  "key1": "5mfEwme3FKxqLaciLe7EskSEZirXmA8Ma6ZRrkzCe45tNtBs641nYoLPTDaKzJUJkLu3fwyKQrqzf2hf7Whsivsp",
  "key2": "2FHK4fkYEFf4GdJ13JKAHQ1RceJkrzev1XtdEdsdkgMCMNtWNsEC4vFqnCxxQ5PSsAK7JmhJNXqhyUu8rwa8HVDC",
  "key3": "hHFS6P5p8uLvdYYLMXBHapKbXEsffdXKLaYhYnckj7GqCZQ6XaSvLDH8UuqSMuYKnQX4RTmCvKsbVEKRYKiSRoa",
  "key4": "4P1vAZy9epthF8znwHoTJyk3DHXMCr3KuF1tLFdf5KCnCvNhUNi77U7mEoXJyMcj5RB8hWgDDFdouqWWYgDZ9SNS",
  "key5": "21v1VSzhNxsJaTYqUrKtrpZNontzExxMBvNx1mdXHFaYPD24XrzrCfedR3qzhkSUEgNtV6ispvsLkCgS7u8VGSsg",
  "key6": "yrWdepTyhDqqqXkSsasUX8vsH131or15kJnH42xgBuMei9gGTumErY7iFj1T1mShNF3nVytSxe9yGjEdfqqf6si",
  "key7": "rj4gnvYtcuDzi2nkwkQip2xGy5UmWbsoC3WwQncDvbwWa4K7wpFiwfyNBi1BjDKShhFJNEo4HXpo4JPS5fVdomB",
  "key8": "3aBg5GMESfiaL7HeqCLSqMnpHFWUoZUHtcSWX6qU2CGTkMgUAgpHwjsSVjAjNhmdoxg9XkBj1Dbb7tzN5g8QGKHy",
  "key9": "29tpHxk84ugEjheir2m4VXK5tYPMpXidiwQkK7p7xoUGq3u1WiBLjMfLJpAvxFeYyYE9WXw9mQxDWVUkcmqQh3Tb",
  "key10": "36uwSFmijwcNp1KsHsfQK2LcMw3psL7WyBXkJjucaxvNo9zWyrJdm3GNT6kaPN2Lc5cmPFsqVJ5wRJEZjWhmLfJ2",
  "key11": "4xrKACg4e4x6BMuTp5ZEpuenwfZEuzptobbc9fiSdptB3kXbvyRYXRnf3rUgSSqsLoZAn5HtfM2EZGyAXTcBUSW5",
  "key12": "3vPX4UhuBqkY99HVWSykQgkL2YfFq2LHvq4T6ctq5Q9WPxrVDJhQjvQvms9Gq8RoSM7BcT67UY3Szb8FjefLcBaF",
  "key13": "4iZvZwK4BZg2SDAxkDVH45PqZSZWz4vBt1h9FtvA1irkHw21r3GiWfEecSpBMKY78dHUTazZswnNv3ZGMhLhiVEp",
  "key14": "4ZUTbvFhVGYXoLGXJKfoJx1kjXYjtEAgYydMNaG6t71hsQPQgwcUCKsXr6ubYMy7HAi2NYb3JGj7nUX9b7FqbQdU",
  "key15": "4PPHc7TYcdKrJfPjJn8R55fSPEvhipbs5Cd7zVwZJZ9RavQDLd661CSEVPs5DVFbPauTdREsrvUSXZ29u67vMMwD",
  "key16": "3UzMF4FvxEzRckQVKAXb92tBj1jFoCV4egGr7vSd5H9b6PKiprokP2BVWHkR8gLYEY5mYTV1Vf6g1AeJCPPY4AGx",
  "key17": "3xmL9NUNLvgjoj9r7wFH7shqmD1tZ8grcMoBg4TxPQohsVXd2aX1a2zWdPDDwSbvgejAxnmyGGNcV3u1P3P5o1MJ",
  "key18": "drRVbFrXSgECibGZqTsjhjQH1C6LnjnZJprPsmbvEzgRDo21jVCpWtQTkwtvoogZv7JYMmBCrQEEUuqxbNgVzSj",
  "key19": "4NJeaLUvNAX5W43jR8ZfuvetcVyoW1Y55W8FZomGgDYgq9gMVe1ZeSyCbqtHNdzJMjqgKretWy8oUrJ33rYm4hdT",
  "key20": "4PqCVAvZ7HJQwtg4YB28ueDZGywop8UwZfxnLXTCrYP5uya4WE96qWby9m8ri616WwzscaNhxsdvSwfPDPbxccfP",
  "key21": "4GDKkPqF7ddXXELrJ4ZS6vjW3nL6Sq7hax9VwHnD1ZvLzDNfNMTi3b2ftY8RNvXDr3x1JLjpWFvzqjJYJxpPsJTd",
  "key22": "5rrsGaBiGJCE4PM3tJJuv6kYxYexpunSEQd5TE2AY8KF2E36wks4tucLJNkXJu1JEAeTzbdbdXDyRYx1iEF1vhtB",
  "key23": "2da5hSXEZXDP2E3m6L4dsyC2rN3t37x2AqeDnGmZu2Se3kEAuXYt7hPzatm54eeBd629yF6MPbUG7WcZ5BnUt3zY",
  "key24": "5nkk2Ut5p7XMQwpryGbBaHe6Tu3UaNPKCkmHTBHPbdXBXCQiDhQhfdZtsxxkxHTSZceeJHT6V5udavTJttPGUV93",
  "key25": "g6iA28WWuWjiDhBRioFdewvzTcBviMxwnbhntXcDMp4KMXhJ9UzM1z5LWYRfXv7ga39TowzTmf8pSHCAH4ae3U8",
  "key26": "NxiEpSN3RsLBnqCnvGUFFzhL3VcHTwvStvxMQmbNXkQL4Wp3kwNR2q7P9374XLuXV3XsvqnHr1n6opebxid9pEa",
  "key27": "3xSoUnt78GHT9eNPtBjFsvJBZgk7zrUJcAQELnFYJCCFFeVATSupwFTFKCBZk7wNg9w1zUbb7YSdk1k7QD9Neket",
  "key28": "4um3ehzyCWAJEgJbgi4M2qStxU8UXmV9EBT1oE7fqBxGDoDX2LwxoQ1ZeWJir76fyZNhnS1KRkaNQJBaKYqbFzK7",
  "key29": "Pd8CWPRwdTcXMCfsWV5DhCb1jPYhFYBidd5X1uJaEJoMLNa3fRthnwvRcKYVRzoaX1htersWcQJmKfgVEnQ3NNq",
  "key30": "WW38nw4vk2konLJHfc2PsfoubZEjHreJUNxTXutYK8g2s7byCegre2vJ2c6H4HmjVFxqwuog1Skqp7kwqfUn8cc",
  "key31": "3EadmiTu1QfSkQtGgy5u3VXGckyHcRcWg9K5HB55VEZrv7fpLaYaXfaTuDZPmW9CJU5ob7wdQa8Pf3SJfMJoHHF3",
  "key32": "2Tfa3qg8YsefoVYtePF8hwe1eu64qs4QiUvW1FwGf6y8Jq1M64JuWLySmtJ6CWh47A6DNVTsQThThNy7ywHbgkuY",
  "key33": "neaRK8T1f9SWv4st2qF5ppYP1x2AaXt9mj1nb83Lk28ecnNB1V74u1izW6PMEz11nYVt1xsTfJQGikoeQgthwLA",
  "key34": "2qcdTgE3M14wWUz8tFFGQqnNEnZdE6o9FmM8gQQHDpH4Q9no1trmLrAM81s2ZEXRviSyWo2xNGif8iw8deqH1iHX",
  "key35": "comCtAJ8mrJKA5GdMHoCBwHWWGXs61YSXTDYowFRYJgw8Mdsnzo89jeRq5iXps3td3ZJhEHm3LYWMZq4vuKXcH2",
  "key36": "3BMbpghM1c5bss1sSWSTSsBbf7j7WABtKCmdrcstHMjw4eggnTVmiwW2BD1zZHjhj6dqZPnuypK1nbjSUsZuMw75",
  "key37": "2BiW41hENt2qJvV2tFqdABcdbbDVjho842Eq7UY2qUp6AcVQkc9cqhprkHiaGY5e1Q5JDcAXAUt6JuupAsiKrgkr",
  "key38": "5C5rwpUnWWrnK9G8wGhvHMmrES9ayVy7rsRq1ppoSRSx77hmu6erYMCAUFtRugymk3B3tivKSS6oUfiUhqoeHHwz",
  "key39": "5i1hzNb5wgftgGT8fPFFXfuz4fz3iL8gvzzB88rMbhDDA8UMJy5PKCJ3caBrxogjMArT8gY9puScN9C65e8EMmRc",
  "key40": "34f8tAmzN91Lz51CYetJjS7TfZDsYopSqixCuvKQp5r37wMKtuiTqwMvDjxkLCmKRDe44RZKEztun2b3F5HnnfkP",
  "key41": "KypLLTgomBS66NMxmFG38WTiCQvCSgtGkse7BTWZoeX6bxJZehyZRCbw3hZ937dDk5e92vC3NCwJ59k6tawPyQr",
  "key42": "4HLfu2c2HrQxn9KkZ4WreS9cTK2imQQLVn3AT7MsfKyrv1uwib76J2FECeyG2H1RvppPPXrjPT5exZvkRxoUzEuE",
  "key43": "j8pniZf7RiP546GTHaeU9DNKTcAPvTHsGAoYBh6MNVk6bLbvX1DnSfeT5v9jWfoMzQhgLGcE5sJhQ5K9N2wqxhS"
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
