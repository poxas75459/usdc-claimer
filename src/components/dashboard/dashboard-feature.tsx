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
    "4H45qHksH58GAZ1h8Eag8CtUhPR7ptVJSeWyBBz2jx5mJy53ZaPCVMnTGyoNLWpmwqqbA3iqz5cDT8AYWhpkid7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAuhLCFtKrEryC6FrDqpqj9F9eRvcK48DJW5k31m3TS6d5juVytJqHmVyTjNMkUMUEQa7gar44n2csJVoUurbcp",
  "key1": "SNXAfcfVBcXi7s8aSWxKV58x1yndEu7z3ubf9tfmiqKMxLWw4LGxKSXfqQFz5L9L9f11vFU9Y6Fvcy9tyrF342K",
  "key2": "3S3cRHNpwqD9ACLxej1B9ugT1dK9j81Ck9Hazc2BSLduJ5fVvxSw7TdKrFtGK7fVGC65f6Dq7G3MofuBg45Z6VyS",
  "key3": "2FnNHfQsg5AK4RqjYKx2778d1JuGHaMSxFyaYVUPTT6EWbNNPzBULpGkr9beZkSAqux2wjhjr92qxqJMhbtE1cBV",
  "key4": "34fgGRbKt6ug915uKEpB4eEqAGyGaU7wLbhDTUQTrCZgCJqxfbqXad3no138Rt4BEH9HcQTNBCk6tCa1ey5NJtxU",
  "key5": "1TRfMJ3ggkYsKYd3AZmGtWjMohJXxEJeJzGCRAgsG7h64pPsfUuyDn3HAPrfXwZp8iA1gz9GdDZr3ydfPXvApFv",
  "key6": "4rtKXpXTjdRgVcZ2oAvFnDh2mYHF8p3UdiwJ3fm9d32JGSeR4FCSeGgXsFeMqF257eB83W13QN5vckhKHRPCg3GW",
  "key7": "37WVcsmuFJZANFhTrTy7qVd69NgPiNeSyAEVvhsHhR4p256q9WdgaQtThc2wDyLGpes19Jvc4c9pktUtLWBwmbK",
  "key8": "2HAoRDpMgJ1WqgX3LhvUmXUhevegSEdo1bd9uXw2FDTnWFnCWWd3H3rTB7eK5qxFsSb8edFNco6TumBvt9ns5wRs",
  "key9": "PqMG2JB1HyWUQWAXkj9eT1x9LGuKJFc4oyN3pSW3X1zQXiVYApYf8Qrk6MzhugeF9XNUhX36Wc7S9N6oWR1JQ3Y",
  "key10": "5F5eC7pks2jaiLorJRzi38KHqZHJx5qXwMaeCZ26YvPL1SBqq9eKfojjqugsXJQb4x1xUK13e3528YUbJXUvpumS",
  "key11": "4MHadWq6AmNX8oxNjVi6XCNfhSu9XTdNGoQreEEXA9vZ4nPKxNPRAjCwDbNnRqrhFUKnoL86XXLc56PdXH96NwXV",
  "key12": "59Zgj883CK5UqF2apr2zV5NQ8sarq8Mysf3qEiUJvEMLZQg7qmTkwXMemRQzh5vfNvZTRa8cLE33KNmezx3RhdA5",
  "key13": "2SdZVHUBhg5RJkcRuWrsNuXrg9y218NUEKaRcfyzydJgJdchHeDhSXKXS8iWUBGWVEvAQjFfoLYR3tT7EN7Lu52A",
  "key14": "4ZBqBBGKTre2sveZVFb4k1aixCX497Q7No6cLha9rR2ahW7vFDWu8ojhhk82iksAhG8n6E3Zzm8TtWwqn1gnvY6P",
  "key15": "5jErV7TWHeSmDSi4DR6ZQuCCzqCWC9uQYAQgtTtAEmW8JkkC85RL8tRPF1mHn1UfhWTsy8oakydpXPfQpCK6pvwY",
  "key16": "4sBY7HEAYVa98qRmVcPB1bK4gibTHLfX1kowZRa1oL3VurAxQ1ro7s4B4J6LL3HKoNB4fYbsN66U7goL3vvYUXL9",
  "key17": "apTvw734WkyD1EgZEcn83HkQnQnjnKa9ZbAB4eWzjNDSiaqMdwJvrDVVJxx9REoGXzibnLr5gvJ7SZhcpjbXwEP",
  "key18": "4v12ZEJa3jxnVxzk2vJBsdGkH4P5DcJptTfamaJ2bwkE11xUdc1Bn85ZFppLLKx1CAsV9mLbYdYyckhgESZ9RLEu",
  "key19": "3Ui2yM4EXTx2jK3uCQ1K1JjhLMKipEaXW5thmARkn7hSZmAtkbvuzYvFbPXK2C9L37oeu7rZQ7DT5uLUZhz4Hueo",
  "key20": "4HRs358rfQkoAqUfjx2Xn9bV294N3xNoKygp6nMqJg7kdW6YAM5izGJgb27QSYcjdQTfRnsYgJV1UaY8wQTdHqA8",
  "key21": "5Hc1WXsFSC1SV9Twm7GGVniytgJE8YhydPVRQwnK9jrY2JFAxCt6QZ1afSLLo2JZUbc4TpX4xa68wRJnHXJqA9PA",
  "key22": "iLARskyNdJFAkrQBsSXEhWrp1TLAMveULdhkc5ChUWn86giNDvCnzRqgmrnGamJZa8zradCYusKcAodvrY7RRa1",
  "key23": "4Ass2guN2wi9rUxTSo41ZxQ9wKC4YNWp5Mmr57AHoXuDKmc4RQN9KSWp6amrghtZnxG39ds8XBLg9AjZomX754V8",
  "key24": "2LLfpoYtNTbbS7tcTKJFp3aFKoAGyBv7SeCjuBPN2BYQdkBbh7PFJwZvUa3PHYSUD3cGvZErGkJewkvG9CMGNBot",
  "key25": "58eGGUuVHQmxoLZT5oasu8Exnpf31Ru254NcqjtrqVUrJt9v738K89wCpXL5VBn2r8qPddyiGXVjozb7LgHwTnX7",
  "key26": "2fJDMbuCXcvaQbDzxBrAsKzkfx4Rvp23fdsmrzCochN59hEoX28fV4CCmmyUsEVemX2Sp9E6VPMjWCGixfPb3uns",
  "key27": "SHr63idQAG7PM1oCKBpX91QGNzCava5tsLqgmnZ7LyJYvkyvnqAZFbu1pDHBGBLV9koKi2rr3BH9iAaLceLMmDJ",
  "key28": "4m68GiYRLfFksbVKRejQYSkjoaf2aChjPrYkxyziLE9gujfAPHiv5WsFZqZTQqyskJ4PJnmo6z7NWbLQAeBjvy7w",
  "key29": "33aMLnyxi4ajJBMDNcUhT1eCZhtbbuQ5sEvqGMNuho51CSkdVLVnKrT8Bof8bWgaG3qpCJBGwtv7oGrzqzyh4EGp",
  "key30": "63Q3Z4iQucC7FE85xW1TMbAdfzjFMUiHVWN8f6dNN3YcFMz7hR1P5umJiWMD8SuaaU77UFtgqK9FGGMgt5w5DGGE",
  "key31": "gyfaXrUB3e8v2vGBEEG1BqtAK7o22DsggpJqyuKRjkcvN8qmvHbxLd5y7czUz4rc4hKkhf4jgNDNZJWPaKHekun",
  "key32": "3yXwhrippbbXdEZGU9GpoyhkGPGK9nc5ZE3WAzh9SZWv6bNHLGV2EXeyJRRPDu3a4MK2XcV6gFjBvFQGmNAsscFU",
  "key33": "5r216eVGhVR8bmGoxDnbVHLg7WCKjycgZsjTQyyFQLwWkN1L87xuDMBuLa81oYv5b9SNbMxwsofQ9RhVTmNokyjt",
  "key34": "5sFU5AQwCephyyusgRBUhPrJsQX6JJLcMZMX5hTh6xr5z1KBJCXpmbnryaQRo9JuVmqtyRGBcABGiVyM3wG2ZNi4",
  "key35": "3yWp16FDKqSsNx3qpnEuqMai5RVUYjffiLrYHWsXKRdhocaxALQgWquDpmTr8sJ5cZJ2W8oYQWpzVuLxqeiyYbW2",
  "key36": "4Uti4AkecxF7jZPbBXv2FLv1u1DRkqBrKvoaPdDvbHWPPiBnsqivYBiA7acpzoVBSAtjxvYoEgb5ctwxnZumEvrU",
  "key37": "5acUEEbjLXPDd3eZKBien7NGDwYKL8pAAVaZcrswM2qnycoeCxJtLCEj855SemZ6GHHrz1bjLNGE3Ak8gWnHgiwz"
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
