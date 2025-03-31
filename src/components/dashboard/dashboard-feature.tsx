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
    "5Jj34vequq5gZNYdJ3yJN4DjyCsRpBT8RHSZSAVPdEP4VWnUTonZoJDX1g15vcSCj79p3rG7DT7Z32bhD9Zvwhe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJC1yHjLnoA4MqAdXVSgBqBkLXxjPBBPDHLnrheFAdurhBTW2iw1KbpxCsjwxx6QQFKJViq1ZoRFzmveubdWeaq",
  "key1": "4bFZidhuBtzCP9MdTcgmEQxBmDspxF7riq1xE6mkziXChj6BSGJfNXWXuPbk7dYhvqqJZQSUiDExh3Se5fpMiex6",
  "key2": "67o1wW1AEcwUDJPjByjk6GHR6JeJvTLcpMDMqPzzvVjGbbQzu3gsyZafio5qQWXsTMMMVyFdyua1VrMWJdz3HkxH",
  "key3": "2kQydAaZeRfDRvkDcXvznsuVN6FT6hYKEeGePnppfypuAe5YXUtGVZfSoe5S6AFacYuTM4u47dMPvhEN33cew3ET",
  "key4": "5FGeYeBswpra6mBNVk14kj8SqCxjLtK9o2E9WWWhjoV4Ai4UmAWP4nh6sZhoy2MFPDBjor4JGnjLG8Y9rGN2XC7v",
  "key5": "2ouHEof9WFZoEozEWg5xJURvzKMj75MxEFByKAtPUsV6WfYzRwVXZFPPQShXavMSXtZM8QW6uewoRLtw2BWKUPVs",
  "key6": "2jPXE3m6GJEQCcNssKwDAGNVSivSS4zGmKfs8NAQquR7petRg7MXNo9QA82LWcG8AJ3anA7wLxieYa1XPCkqEZAG",
  "key7": "2JEPvWMiJbBatf3sen9RdfgS2moxS8wq7o1pEhPpqpTmX8ZRVxvacPVYFh6Awja2AFBrRuExgnCzFcxg1gB3csBF",
  "key8": "44nfYfBXaFeWK5i52Tt4N6VUaeRLDif1ui7myn4hUc41Reph9sEzyX9sy6krSTm5sxCcBbCPdJXXezsxbvkdBfnr",
  "key9": "4mev1RjMeCB5kHrqfPEhS7UJiXXSoHDpV6kxyiovtuzBTMhwnuYXokf4ScREczSHDrVRTG8vmEh3BQ7opCDjoceR",
  "key10": "3caWAmK5gzDbrgHGuovgmovFunXeFJNRcFDpUQdNaBBcfy79gMMcShH4R3Nzh1doXv2ePbDnBP1iav1PDmDaNkHb",
  "key11": "J8TQWpBQCB5xpH9W1BMcpbg74Aq7QyKbevTaEgjzUEkfrMw1SGZh88iPiBzavxk4PL7WJEibDC8VaeJFr1yaWaG",
  "key12": "2LXcp4aYADhERwWtaU5qHYV6KLsDhGne4jT6teyovbaWhcBhU69yJCmwTQnFbJnj49iLeecnUD2BsW1SZUvQPjYh",
  "key13": "3EhvpXksQjFNVtAUpHW4tehUhq6EqCUN1BjtUuJbKmYM98dqDmcyo2b93W1MFiQkP5n3HHLxmYzyGPah8CVvHiYS",
  "key14": "37BxYX8f7W5DFoTbezXxnR2HePt1FTegW2EvN4Cc1V7BBMCGL8ZoLzkB4Nyi8NaYSbgjJRGPL1ULETXMmktwwc3L",
  "key15": "3ScuoDE7CSEym9Aav7aJj9XTAYQP8kAA4WJocpnTbTxJ5Yj5UvAQ2rWnqZNLPK5uqpHFad6rYb5W9n7g6QvpAKDT",
  "key16": "1SeJXkgJ17B2F3vHudKG4vLHXsRCQ2vYajdEL2TDeVnAStDaMQPdy7phpPt8cctsAiL2eWc9g3pfPnsGvJAP8RE",
  "key17": "kXR6qmEj1a4VH3Pwg72TkZBz5rQDJWfCzJfhiiE4jT5Pn5gEyyRZWNgZ7RnhjV4Syhxf6ePJkN85h9Pg5WpVNbp",
  "key18": "4qmNAoYYvD7g2NsFVYiqDPxuFMfQxA5ykJdNWX3NQymFLf2acKyCXiac824tByse2hXkmcYPD4vWmW24AMdEBGgC",
  "key19": "4esnzWQLWbHHbKzA8VMWUaFUVokqXAyCNaJgs7fbdq4VAYwPPNLgNAZ8BoACWGRjYuJWLX8Gmhk5f8TzrTSKBwr9",
  "key20": "2oJxp6rfdXVGSRq3bpE9jpYb3wpW8ENcKoaCvVFHbPpMhaqa8HY1ynQ2TJFMNjp1M9P6PAEpzE6TnrNZUFEXvP1J",
  "key21": "5bD5ttf3AQSYEirLKf8PMimASKzMk4m3WWCFMfLVyqcYGJBFU6fwXpRgicy2u1Br6gCG1V1qYzR4hPQimcRqKTNK",
  "key22": "2Jkbdoxhz3WSYqerYhwVKeJFFkc1US53WWa8DuL7ZX7GqkXCQN4pj5YbG73u96keVUtpDXgsKqbUfE1ihwp2Skv5",
  "key23": "66UaKNd2aHY5wY7XejG1dP6HkD75EZupMjECRW7isYUG96rSXS3XTyVQxvQSQD7GZNkuR1TXSNAzGudegDQFobui",
  "key24": "2TqJvPNx8kKJJr1K3e1JQWHm3xmSVDNQQo5G7KGumngGevy3uyuoJkRsiKGBtnWXwzxX3c2KftwpKNFGDrjBTMzW",
  "key25": "famZH3EbVygTHP3dWLPqPAnJQ82CgJnKMeJi9UwC2EbmxusgoAz1bGAnvenfzYwTgt3YfFWQfpMLew5QjGj36M4",
  "key26": "hEJ1vr1rouwdoKJC7os2fCQgs1vkLbDWuBjUH2mY3NK2JnfiH7ufSyGd3jz5bWuZNqYrgUbnF6WufoQX1dtLWok",
  "key27": "2guBoLiKsyRfk6kbd72WmPQJXB56koxvzuHSUc6BhQqDUAakhMrjcsD1a7w5vnekwJF9cT1QRDbMxpCb4LjiU8sp",
  "key28": "5WPi8X8bsw6DjZCytWvfgvvJPMdCUKWxU6E1XnsuzYVXvbYAb4KaykM1hQY5KP74zm1Yq1WxxsDak2DeKPGX1iQk",
  "key29": "5ruiutaxAtwV8mZohaggrsfnZHF4bARXbYZbzBAebLLHrsXA7gK5ub4fD9cDcqn3PfwRW74kdzNHLtWxwBmiFHzX",
  "key30": "5stwTBUNtJUDfWnTK3wRgiXT5nrHgNtzg9XaqzBFmJ3CjXigNqyfBB8g2iUa59iST12nm459Y9VQPqq1WhquPwaj",
  "key31": "544jT1Q5R9jNfZrG4cfeu2YML6SMdabC1Zrax8Q6wLhgTFqjVuJLACKAdigETmvbz9ohBEAsiPxmwkD8cjjW3WTU",
  "key32": "41XryzPprFh94TZPygZYT8bz1jd587fQKXAkB49H6aXEyPXzPBxPrMTXvAw2n6amEMQUzJQB5WnsMmqhAizrEvH1",
  "key33": "4USdzwavxW8eQUZ4ov9WzGo6NGNb5Wxqo2e5bFK6DUi5CwWip1C1ugN7KsVtW3aYGh6qYXwFHn5zfFaJTfXJNqa7",
  "key34": "4hjKpbRTxYSTnMFnG7nLhwymnXTPyRaxLPuAzMEEeFpC8h53jsAzoDH7UMf59FCZodNynLe5CEUebxdgE9wrZs7p",
  "key35": "4om7T486nNLZoaKtRoHXr4b3HKYuBf77J17XrXNmxuhD1GZRSUbVWYpN8KeBuHG5Bja6PF5WUfhPwN8o7KpkMmVx",
  "key36": "p3dVq6SiEXWnBhizxr4jFu37AbWTSaRNM1i94L2s1MM8vSJATEdK1KEXiachD3G4MMRKcYwGjHS78C9ZGsfJJY5",
  "key37": "5mdk1kMrLBUagDMWhnyLt558xbbF7j3g1N28mNkXFXdGBgT5zA3yTVcqfMErYRYEJoADn5BmgwUTiCw28fhutnJC",
  "key38": "3bvfvZHZpWgwfQLFnAyCFTR1MjgK6eaR1EPezqatbNagfiP1NZbeQEcpm5CEMUxj4mut5UPykR8eb2AHESfyrHwk",
  "key39": "bN7k2iHoeDSxtffasjiGJ4QzXCD8o1RjfQHWNckAYzKxeTn8Q42wv38HiezkGxoWvm8b7qtaXrtMtcq7TRt3TEv",
  "key40": "tQMGh16Xi4bzhWZbXbp1tpqAZjaoPC8wNbCJGi17qxjyJfk31Hwm13gUoUtBh54XTCWG8W8MYVbQmqAvGDhD5Hc",
  "key41": "3uuuRBwALQagyG7E9jkvbhHPYgwtsx89FCG9tAch5myQEjGDWTEmSwrDGmMw6mboWYMS5ea79VXutfMKcEWMZUmJ"
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
