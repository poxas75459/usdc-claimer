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
    "4nEJsFJixbAjmshhLhX4GR7YuyXHLgoZgBvdoQ16S8ypYAUZS8JPFaMurCZeZCeZH3p97R93vpSHDWhSNtgA3Hhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoCRpfMdv4in2sa3riwaVa9JRoLfGy8TG81tjQ18xx34DTA85SG7AUPipsKtDxqevApVX47PUpzGCzGPiK9Gcs1",
  "key1": "3162JdYLdEtAcaNvGZnicmZS6cNkDssWg3Jcq3QZQbh7dk2AqNLKD7sznLtqyvVYdFudwe1LBhb43cgQsEQNBJTf",
  "key2": "4PCvqtM76sGJyg4zTLeXQ6XDvFGQ5ZH7nGWx57V4vayKkgezzUT67n4sK2cqSEnpGn1qeTo5PwC4yy3Vr9JXTidL",
  "key3": "3wtkMcZsHUixXhZoja8L75mTdBEa6CkKVP55F9ZbfmTgvCDvPY8MQk74zjK1XBz9fqQKTeMMfXMpD2X6TxmG6Fvz",
  "key4": "3awaVKGeEqjcdFHw4uZEqxC41s2PCjgvuCoPMz2nHWF8MUr5PHTXKzXRi2akGen4ErY5DcLPHcTirikMTxTD6irm",
  "key5": "4E1GT3W3i8Pw8KpN1rFsYJ6c3XMxP64ifAKoJCMSrEZjpxnxW8vAGPo9esxNbmLXE1qHxF5qXRAYQ8HgFWr32KNi",
  "key6": "t881ffJ9M9GkFTwAq42Fifs2a7e9QaFTzfrEcxKrHkURF9Y247KUJhxMQTetEAzhRbbcCN5PWto2icRNNSPhKmQ",
  "key7": "4bKxpG4Z4xPagv6hfojkkbggryBAPgDJ7FxwiwJRWSaNVjrZwh6V369fX3Ekb1PerSaK6QnmCsV9fdVrkKbcPDby",
  "key8": "4FoJSQ5CajyFpokDhYsXU74SCtf5ddDqv63x4HSCwjRwHEY7XNrH1M6rdGGaQoAptyVZfWnCydTWMPAabdyEakoC",
  "key9": "5NSRNXExGhS6C1J94o71Q3t6wxCh4QSeApdbknLToRAu6SwGnzaHAroSwHbxkci7EBFJ5Jz2nHFqCfTH8fBKbGTm",
  "key10": "oEKQ77YZxm17HKv9kRXCu6Czm1J8uigwUAfK1s8K2bVLyBjDy1v9wYEqjvrPYG6YApdJqs99DAMVprvBPDBRtvT",
  "key11": "2YwRXVxNSoNqdkAC8BKLqjKGF1EX3fjR9X6hwTYBNKFPTeuYgmkAPVcg5Gm6XVipdZStNmguGVGJk1FxEXYy6jgB",
  "key12": "5cM16nZ3NdHucEMwV5cXqbKbZiiiy3xpXTxpu3k9br3fSs8qsYpKyifqn3hMWbvPV6UkhPcQkUMX5bCDPfSxC5Fo",
  "key13": "5XV2zpwztg8zjHrpA25pNkQq6esnaw6X6G8Ljneb4XyiTmmN4VxejC6bUmTgNq9MMaJBouvo4FB7wX3isYSHywbd",
  "key14": "mH3FcAgys6AaXFpQYFk1zY8LSLbMdqd2ESzqXBooDT6qrKUakbUJzrBzUbTwzv7HScVAVTaNJMutujNuoocmPkF",
  "key15": "5sqZkbkQmbE7LfT4C1uDpseEh5QVEjvZy2E7hG5UKdjj18iDZxQDhRBhjvDiGNsQhkPVqDFVfLAmhaFrHER4tkd9",
  "key16": "4KUvUHhwF4BTBBwyZ3bpadWgFaSVAu1ffpG7mj3He2oE1Em7sUZioUiPFhZNBLX874MYvSXAAz7yquykkgrJzQtS",
  "key17": "CTF31hayBuHQUsSzAuGYpyn1yW8w7f3YaUKfVti4xnQZE9Uhd4gRx3krMU9d4FCEbVv5HVDT1BbLBUWwuUXtyjR",
  "key18": "4NbkQyXQ27ho6UAsDSQ7NaTie3nxansBmDdKDA2ohF94S292sTmJk1kxus6K9mbcoS5pWJs7Yuxz6RFWKBLmmisq",
  "key19": "4t1Sw8o4fSXfYKJGKdjGjbHQLYZhAywUrgUBuo644KkiRnTF8z1TBHp6gH7zJ8wdNyFvhsLu6Md22KXXy7tEj7Ed",
  "key20": "8MmgTBADRh4j7FetLDRBAU7bPTAJ5xRRHuTFv18SZ6ih8BB4RpwJr2KFeMo4ASwxRiKQvcofmYdgtWZ38A6v8BT",
  "key21": "3UNw7Td8cgDkp3hUr2mMnhHPUeKvX1sUxyiZaTjvTBVWzjrrUo1XALbTbFQwCzPnRNSnZ4PTDwKKVCFLrLw15SzG",
  "key22": "5Aj1RwmFv7P9pHXpk7uYZ7UZcGGWoMBBiiotfPtPSt4BZLps3a6mDVKkv9BHWRSWvWZBWDmzgx2ufx5vvDratPjV",
  "key23": "4jUe6A8d93kidH1SBL1PrdJAPvRWPUKmfM4bMTcSetyMj1mKv33dzEmL9n8arypDyRLyUqSn2gDW6CkNJFfWrrhb",
  "key24": "36QyjYyUY3Ube9k7aM5WZCBq4Fk1yZmeZncTvFQNHGq4ZAsFbRBBn2uoWTvEthvPLU1LZBwke6o6Z9Exf9hYsqTN",
  "key25": "4kYQcKxuQW2ApGcPraY1G2vf6zLPYZs1raVZoFGAYcPkX1uqiWeztKNeALvjqYHHzo486r5Xa5AUGdjtaiivY8wv",
  "key26": "5DQJXQMThdqF7WtS2jARF2niQdev5XkvJjbnmC4gbv6KQwoEyxGwV24AbZRXmPegSq5QJ38N8Uwt6izP1FcFhcUQ",
  "key27": "5ahytAY8W3vQKJTtVg3uYgWUNrWGPUsSNwv113NY3S2bucMFW9mnZSJ1xqaNLjSbVSAWuKBfBSJNjr7DebXPeYot",
  "key28": "53pP2cFUSAFPYd1qhTjdS7dcx3bzFcii35zW467nkJNZDSBzdZzwmMj6Q6m51nMYyXZM3URBoTkQXcQo6bG71c2r",
  "key29": "2icrE1oUbQAraR3i4kBZsUr4RFits8hqjqiwqGYpjq7vNMKDRhmvgQWmQ7YVjqmimiQgnax82JvUW9bF1Pzg16bd",
  "key30": "dwwhhrvSe92vfrer1gA8b7H4gaZYV52EuHJvnaRCCJPsNmLMuFGb9bfiJXjYDjZWfpqCQD2s2AZnvfhaJ5VbBWU",
  "key31": "95JvdzQsEY6HAj6gA4YnXmSboyJoN34GnpCvbE7z2n3Q9YCyZLKCowwPGZ61u5iZ2orVVKnjVpu5PrjxJaBnWKQ",
  "key32": "4jLTEg6DbkAFcsrPUrJVP7vhXUAMiLXJpaL7xTPqC2EBQDpzf9ME9mrgckvbp4qbd8QXVE1nrMshFf9qpdkfzW8w",
  "key33": "39wcDWLc64N4Muekb2XvaVCdW2tL28pUDdYqTeR1DLT41kXhVL2GEhC2t566p2vbwLjBb8QRiR7hE8etCvqieDUd",
  "key34": "3soyR6tLJb9NH9Dnucwkb53uLSVSB22ykMkZMaeVEWdnW3RT5a316kMB8BuVb5dtCU2DaneFnBe6bLAqdYPHepM9",
  "key35": "46X3kY1avuoTUsZa5XMcR8Q3VH8343odSoMAiW6jFN74gLLRNVuyF827irVfcPsXtg4VGdtT6xAboxfW13Y1FTNE"
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
