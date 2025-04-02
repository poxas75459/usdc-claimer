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
    "5vURLWhahwi6yvwu9PH83ssjxEL6UNRUEDgSGJsTBGcBirrXHBYCLJWmMjHWJ1hujkmm3VVRMzo3FwunbxFFqggi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23iYraKHYX3399SAqz73W7TAZXtji3Ln719s6jUzrD5jfxmwxWH2Pvh8ep4EgVn8VX416a5KSHnPx6oMGo6gE5hH",
  "key1": "5XoUYt6Am8Hj7sv6eKe7Rr1HuDWLvxSZjfa4ygxdUJWq56mWVW6UHSKjE6mb5b7SkhhCgTznso5JorYiTUwrNnBX",
  "key2": "8hyrp3AabgTd19vPpLY5uNDU4UaksHrgho5qoEcsrpeZLcjYLPmkPsehP2v4WZhcdZK2zw9cWfGBnjihF4joN4j",
  "key3": "29iwoU26cy8iiqpbnoKja6vU6U1rG2mJwWDbLY1aahqU8TsKPYjYQvz8FDCFkXaYf1bFCx58GSL6dBpcMs426ngi",
  "key4": "3YcfJU7VBitojX8rvskVsYUEzid16z2sVi5NnSDWi3Uc3q2vXhpYJnhwLKGVNZoknYrM4TLa576s7ZH2Hyw1BUJA",
  "key5": "67SBjmrgtWTP7N5STgY3yb4JcP5sxYxmFKfizDbeYYrkeW83TivgYJ88r1srJaE8GpBfAHmHjCQBwGTv9U27E6UM",
  "key6": "4snLWxMV5E773oFXn61MnpshfZTaQgVmt4Q4DYSMnXoU9kbQxbH9yuwURTLbAjEoEZLHteq2YeCbXaRZFtqFLvgW",
  "key7": "4feKtcabTPk3YJNJQQZyS6yPtYvX6z8J71DW9Xp66FoiedNbPXyQ7BTbMLMcEoouGHD2nTDpVPw4nMKbqznN4d7b",
  "key8": "3tbENm3dGsF8pNqXbPMH6naEgZNtNpxnfu6zPhpspQS5u5pmqw67ykfN7cV5Mahrzk7QYTNUKUThTKsN695yvraH",
  "key9": "44DgBVKfct7W5z5WK5qWfVQnHwUZxSKbU1HacHYJC9fSxx1GHheteejtHJeJAHtqva3DVMgK7Xgi75UCPMdtFyXM",
  "key10": "KCtKmt5hkXKs5623VuaDJE4tSuZwA7FW2Hie3P4Hgmr7bS7q3aDrBFcqBxmV22WUJ6GEWP6FjHwdjrJX5qSL3ee",
  "key11": "3puSd1RG3NCuvaghbH4gPSD4faNSiKNt997FEUoVyCLujxZHiVGCx3BQZYbpcFcDeh6F1EBADGR3xWHRLjgn9ZAD",
  "key12": "5dhaZWiAQzvAB3S25vQjh5rCBxdR4ojmAp5JUneyZ7jPH1tyqehi6fZT9bgYFeKxYsJX78cPcgCaiEAnpxpmCRrW",
  "key13": "44LvPERUC9CK9phZG5Vhi9Bobr9DzW3HYVJyN5KqY3Kx3tvEEbYWS8kcDFyFyJLBbTSTw6sNAEwPoUYB2DsNMDn5",
  "key14": "NRebsz6zEBrfdjFvAU5GBZAt7bdiuD7SisXoa9hdPvKiJtkVbGGtGym7DU6oancyuFSmCDGggymKCuWeVwCp9j2",
  "key15": "35K9nV16Y5e1UNaLkQzyc75juYxx91ebnTpfGQCkvNEtGU1xb45xPmUV3ZGP1A2b46WMA6fEDKp64VU1aXC5FBD4",
  "key16": "2jeXsEUW8LrruBqjVxxte1JyHSCf2jCQvdLoM6NQdoquZB1QPz5k2qawggXthyXpDffmfKq35k1WtLBnGamjuhLd",
  "key17": "5nWEj9PgmfBUYxbeFozCWhwWxpYw6ds3mvc8FsnLfWqjKbo85VkCgsWfpdAD88oavNDDGxH4JgyG1NiZYMEg3EMk",
  "key18": "5E8giYZmnfemg9GjHKUDBXC8c3WdVaiaTAMZcjWi6bs4RFQR7nvCfHbpxgJYeZx367tZNm9dgzDnKteJKw5zNMnm",
  "key19": "5YwtAwDeL2BhmJLzr1ZbKwmogBKevf4MPyEa8dcKjyZmWxosaQR7WyxyNLndx5yYX5QzNtcfh1vnTHDR4Kot3sdT",
  "key20": "5VgdbhFjekrw7oMkkB2SNPFWcWvRwMFcq9mQr13ZeL4EQ6ZPbEx3ZTkUb3MVvDvbr66afFHKEHVVCytMVXzkrpGr",
  "key21": "EghJLFM57Pj6UQT9KP5yFeYxVJWG5c7w3zYWMUR51ZTmrMTt9RGhTaLMRLztGtV8KeZ6dB9L2iRwyHYMMumGuaS",
  "key22": "VouNb4jy8xSS7HHMu5krvM6dMJEJq9bJb8YTHREXh67w47axk5MRoiDwxtCkgHA4u6wMdiNGQzYVzKGrr1622J3",
  "key23": "yBedHigmmmfFBAbSaDWLeivp2D869f1Rg9MbcvshP7CAEuXn1r3nx53B3FST1PV9U29uFUtvZLfy1xprExd17yW",
  "key24": "4SFd5sVbrduHe96JP6RpYBt8yHD1r18Fs7Svxh3upinnVpfR5Mat8zX4eVDQzaWhxPz2cAa5HGZAGj148JCX4aWf",
  "key25": "2jgyHV14v23jT985PpVTkN7sHuFJ4UovT7AiZrBdjAXpYrEy1TaHQHa8MqRmoTsGQiufUQgtiiXnjnbjeAJeVBDi",
  "key26": "5NdCuLht2LSMLLkY3CSh5AusJjZvMMbqDQs7rtUKaSJq73vSsXi8kUYAhFRowbAfEQS7cshnmUGTctXtVxtZFu2Z",
  "key27": "4vWSf32sFDSsXsfPSeQnTkQBvrVxDs56aqLwW9fUVXS99jchJSFB8Ux4R8KAbw9pwGRnYCeinSCXmVCzbYBVKdVF",
  "key28": "22Cs9U8cyn8UWZBvpREfAX3vZMGtWbB1JZLP7UKD4bQb1JJBFQB41ZRgbJKVPzNHUb7xXcEFTgjAXZK1aDmcvQgW",
  "key29": "cioqcCzQSfUuGfDBwosgtuGRA66ZUxWeMr3Ai96xEtGzehurq8ommHhrTEXUbmzYNQfxYT5KixJg28UwDPR36o4",
  "key30": "2h6NvDCsdPoMk2EkgKL51qtdfR2ov9xhizLDKBREDiHQkJaPKk4Nd3i3k6LhqFHmnEuQrDn1fWDGba6MBXQbVLaa",
  "key31": "2BMoQjnc5BbzjvzxWqMwMSNpJcvGn3Sg8oVukUJR4wWKAiiTvCyK6xErsaNWfsQEZRykyG5pkvk372cdTkq7WesN",
  "key32": "4QT8Rbap42JXZmkk8bm6sxAte7rhwTpRByQL2amfx46WGCBww5x7kXiNGr1xWVndLtE5M1oakU6a4GoFhYZRdbxY",
  "key33": "2ecXC9so3cLfXb3xaBrSzKKDWXLpiKW6JJrvZU38W4QQEVQokNeA9LqibvYE5Fg5rQbVRvAt5PHeiprFqXi9mnWW",
  "key34": "5ygrdXmYXYT57HpZRhznbB7DM8qTyZoakYjpmbvitDM22ZefLerbKPGx8VXcDuAFgrdWjEfpMDLhwZ5T9UhganSx",
  "key35": "4WdPP1f9TqzCQdrMyBfaEoJebKpcNT8UyGkdUThseubv4e3Sa2ixSppP7teEwu3xhyYegC23zd85LNbe2hLFgfoB",
  "key36": "qABUAaXXfxLtDYbP63m5GCg1EdWnQZZVKdF3W97xuAcRNrZa1zARKkAU1HBq5sU3sE65iiJiSCtsA2nYffi3vgd",
  "key37": "4cGuzbkeeA6Vro7dkJ3eL5RJ5cBdQ8V3Knjv43tJdYGVEKjYLvM7bSmugcCGMeyxn9iswANZUgA1m2iqpedEwnwk",
  "key38": "5stDh9tSMPn5H6geAyiakAdUQihyhXQspxQgYNk2sZMuzJKPRAvYp9QAUbLTR3JRndE1vXw82xrL2kpkJtKrKQL9",
  "key39": "61ERvYusBvRmXNDTMtzVM9U4a1kTz6ep4q1Sr3uGfyeys6QT9S3qCfrbUViqRZaH2DLwcjQszUk672JBDPGzh7Ay",
  "key40": "4FXERqv82h3HWQmGykHx3YHGwDSU9TYTGhivATABYT2LzJGZgTdwMMSXK5R1PwUKe8rHFHk439AzMJSRrYaQUB6X",
  "key41": "bYGdTGBDh9WQxxyLgpCuCb21EGsqn9vHtnDnvbK3kc1fqip4dpTLzV99Hd9K5Uhhvf7qL86nEoP96VpH5gECFW5",
  "key42": "31Tjcoyg8HebQzdC6HWQmxCJ1Nkv9VsVpzrzt5UfYxxqKm5i9yYyxGndtoBHyjcwJZ8Yzd5C2RJJY2iicDjc4RJi",
  "key43": "Jic4vB6WTHqbCNYxBYJY6zmUToXNKpwEeHCoQYmGZz6Y1yqN1jwJk6uJbT9qK229jZP8T4UW2JuuzuxKHGF48ZL"
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
