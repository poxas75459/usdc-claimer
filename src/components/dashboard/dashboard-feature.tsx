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
    "jg2cKag1zXuvir4qWUKPuWoajr5WiLTzHtPpaAKXEcFwFX7WMMyPy2jgJ8RRjVX5Tr5QJhfmGxoWXkBQxv56L33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AQppbxqJ3EtWCZ5r5YdxBRfbbJZefsou6VEYZbneNhq2spBE83GnSgLYd6K7NNWvRvCiyfbKUP3qvsqhrPrbyC",
  "key1": "5V6hpqezHzZsWia2Qzdjtv3QUccaiRjN3KRhF9NiCJgiCnEcrotS4cwBUcUias1NXHa3zideQhjMCDrYJ1KKNJ1V",
  "key2": "2dfvNxA3hFbzhUoDBGpBo3hN5MYXQ18vm5716qeG8Y72Ez5USqH3UCSqXLr7z6SuZEehzqJ8QHx6HVa3MJ3H7E7q",
  "key3": "22UozE72fMRbMfAJGZkKsGo4jaouQVDvHoTg1Djqz6KjbHNn8ZeioutJLJxkQFhTX3BjP8R9Z1v5gy9tWttvMnea",
  "key4": "2bANiUEFfapfABChtDbLiUdiHfqEvdWjn2vfvyW32fdkkPwsgNE6uyV7BVmzJF3B2ThgxmWoYuj4mjwWwC7H9gfy",
  "key5": "28vw78kdrQHHw5bkqUbUCe1Yzfrib5TowBcRvyhkFfKSgEUQZDZxarcioPTsnXahGwXAheA7NAHAKrFrDGLb3bkw",
  "key6": "55sCHxGovFj5QGpd5yGgytsKTfykDPd6wbu49ToTHfFgGsrVj1AgRLDmaCrwbijRnvksrxDS9MpFpnYHtWnjMmRg",
  "key7": "2BUuqnEmpV5ggjRDuvaiKoYDzqYoJUV5r7ZehdSM6ERuhMNfEuspAKPtmXhZURhw5tCw3SjxjdRu2Z4a5NrDdGBu",
  "key8": "3QpWMJAsQPHNbBSHdGzwq7P6Xc8dYJxJLgh5fyBRDeczFyQCa9ouRPXontQ4pPPCS92xHma4QdWi82Wb6ctBDL5k",
  "key9": "17uA8skKbQA5TcYuQGzmFrVho4wbctCttV2tCso3uAaChGoPjc1ZYTmA92LgaBQKJ9NMYa2jCoCc8JS2fVgoaUD",
  "key10": "3Psjn8cSiAni7ibkAjEc6K3C4gCsCHkvGBX25yQUdsPFYLjhvMrGJjPPg1nwxuCwENcp92siw855wVq9LbqctSzy",
  "key11": "5T5H6mw6qsnLfLzmTNtJAMPaEMWFTUV9rqdpGvv5eZnm58EaQfJaNp63rFnS7ndjS1nBPBi4PCoCoG9KNqqhkity",
  "key12": "3RUJvr4e5AfE4HVQdVCZFMHNnsgtNScCqZpJtYGrwAMafbhujnkPdCJPfptrxWNJDyebp46qKkVGfpKKJ3cRXyW8",
  "key13": "2BmHbRePtdBWJn9nbDc5Ns8dheSm4ZKMyQgAQxcYNp7NESLG8WPk3Uz2j9dhSNwFS5E2rF45QNJ1u1XDNAsJ5Uj3",
  "key14": "573UpbyaojAkJTLeXUfiN4PzwqWuEF5VksFvw6Ft5CqKaTzjsWHTKHtUEucXsYkS7qmDhTX3NohQkpWWZ5B2mUWB",
  "key15": "3Q4disDUU8sPqvD12wWeyuhoA1zFTVDMAqBFyseJicLecGDrqVkqusLHy3MiwggsbNeGT7uHmcERvyhDZZd2AK1b",
  "key16": "5PTpkRqHvqC1mk68WteYg2bqpp8ZF6pX4oedCf8Hzf12AfuHsc6NX2sys1gAJai9Uif3eR9SQkcsApSbmecUZwH7",
  "key17": "5Vpvrax2muEQkdvPpUYgttPXo7KqvUrcTQMRrNukjZynwqfipL7QWUkh2b93DuFpAdZY3foGzk4kHTqeNHUjo7yr",
  "key18": "21dLpxW7WAndm1MtbKseodWzxzjW3HYgtEStvtrDHsf2BoH2iHKXNZgRT5PwNgpegtjuCfwE7pKbGeb8PmVzgb4L",
  "key19": "2H7UvuTB8FxXA57p3JLRn46NxzwRwh63NYu2TkiYmrKHjS93FD7zFRAJ3uABGdhRcT1afpj6vEYFb23MkZp1LFnp",
  "key20": "2KtkNYJ4Yo2p8EiAUC3hUBHXXuz4E44VVftZqJH5Xr26rRrNTaQuvv57G62VVH2rt9wfd1tbpKTqk8Pj9pFNPpVW",
  "key21": "4LQy8ciMP8X8AGTyzsyMJLy1WiQbutx4aTCXU5wUw3XX6u8ZuyZpwUWPJFYGe3Hbrw8a5NXobR1wBVVcyMw6Tw11",
  "key22": "3FntohSGmbpqNbbcZVXhgcwZnuvkfUiWnD33RconsdRCmdcovETejpQyzAxY3Gw3CMUd24tjJ4SwyZof17gN9KUv",
  "key23": "2NeT8nGacq4VGPhyh1CHgMyHLaQMJQFdwVe3PgYEk65WCNAZnxebYBLDGGAdSch4jf2pv9LfvUdxVEHwcLeB3rmK",
  "key24": "fsNmeZtLYYMnkfqsdFWxJNZiLzmNAxFNLrk7BnptFSVeUNwmWBxWiByEwbdC5P81VcCEgkjd42fqx6NZBSAZot9",
  "key25": "43Y2yuvyYdHDEjvcoaQ7TGWT33uCzV8BzvbZHf5Vknu1kZQscdpknEXFKjkLvTNwVtt2wy2xdHjgHhBLyBBprWvV",
  "key26": "2gTdKPxWofvHPwFfGWUr39DRc6yjgqhj9zH7gVvHbZgXiFEdu4b13k1Fj3VAYCh1EHh6xvpU2PBEwi5rooaHbGxR",
  "key27": "5EdFVXSGuodqdWDcZHrHxpMJtAdJxxzLqFUnSqoAAdXjuoCGLnCU8xjdvBnr4VtTp2BRudPEuJk8QR1BkTQHzCfY",
  "key28": "rDTRCgPXEEMgwvRZaAREfYZxZmz7grpFqo1KZrA1or5Uww5nyftEeoBUDv4JZPdXcbKg451vTD8v1hri8otX8bV",
  "key29": "317Uh6cTzV3pfmt4eujz59oudKcvC8dmvN7guB1RhG1qvWpFG2sfEZ6RWgnThs9M71ZeCE1kY3zB2bMZ6DurAkjN",
  "key30": "5QTvvjFVyt5qNP5QEDeqN2o93tu3cV6qe8GKxSuxgBQ93vnEQ89hCCA2FEBSaUzMsAWfT8tv8T348A68vR1DsHW7",
  "key31": "5SUCRCFZbNhxs6sJq17YchQyEKk7nqwT3v6AUorJcVhp5Y3EZWWawMLSx22uBnnHuKVmWRzYqPeoGvQSJkQ6HnHb",
  "key32": "3pLaDDH6QWTFvQpuqE1DwpiHRWB4aXJ4pwnhuLsYpDP3qafSGHMueUUAY7hhiPJyD6sQzAdDvG7Ui4abxWjL8DiA",
  "key33": "3N66GqwcWpFaUKEQv8Y3gGrJ2oLocjwT1iC48A5fUsZ4vzqQgZFXCyxWX27GmShmLFQXQFqTDRwojDZMpS1VQREm",
  "key34": "4eXbZ3zHDQjP5FrEUmn437PaRPxxebFiq52MEvGDt5RwzCNJRUTiJ9i6uPe2BMJebi3rqz1UAK1Pz6NCXBC2VAwA",
  "key35": "5MSji7XHP96fx6CtWx5cVdXtPzXXfBS9nnXqbMSDm97EHpY7J8wCXF2HspUnAHAbG6w4hNWTTmqK9pt1u8Xtzv8G",
  "key36": "TmSEDSVnsWxMJsKAn5E4k9oGW7bFsEPwAWqt2UqiyxzRk1SyKDsVkztPqdSJudjE4VCJuSNw3UEzPJ6EjrpYoZL",
  "key37": "43TFq5WdvjUjKKwTXeF6GWbRhARvbSjJrZo7e8nDRwQkz9K3e1rwGaqZTkuhWFNUiuPuVxZ1pzJftAfQRtEzuK4c",
  "key38": "4Gju5SeFtZALCTuJrbLojfzjm3mZyGyCCbXVDMn43sq3ShKVsUmKb4BjHJNjMi6MJBjjncUxJGGKJUmh9a1HBzKM",
  "key39": "4GeRLuPcwVeoNFMvsugFesvaM3NYtvSC6s8qvNxehB8zSnuguXnvMR1DvrMw6w9G4VmCLX3kMSRdd3up4PXNapEi",
  "key40": "32JbYXMqVgy841MgtNFJw1tWXuHR1naxjveHQW64zMriGz5Vtvh59EY46TddWaTWDcnFF8qfLschxDZfvJZmvSQp"
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
