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
    "5qSocnpa95aBs2TdByeRsvSDVXWDKSwgve36okNAtwhnB7csPzo21ByLfkHpfjsZYAkuAr4bAcVnzo6vmPkdrXPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fikf95Ko724fLcf2hLrAApgfoSniteTdQqtgth5RgZGN2AniNnqsvDxeVvdEi8DgLLHm1sYjdBZyzmJDGqQGPvM",
  "key1": "4bJTgWo6wRw62oQxM3ybi5vFg3PAa1JZd6uVm8kQjkXvmtf7DhFZe27mmb81TovJNGUtdbSYnabQHKaBee4csDMu",
  "key2": "38kz6KpwcR7JMqxZB5rZnuC4r9yciR1KhZcSJgaeogP5EqQ2iLB2UxdyBFBUVEJQbzJjx1KgWi12XGZ6Wcwtkw8R",
  "key3": "3UrBLx9yviFj7AhyK35AKxnqpx6n4AJ6W8o5NZwo1dydrZGesfNQxUxzA7AQzfGzPBkdD9d5NC6EovTqZ6yhiBaS",
  "key4": "2qKzfqm1vDJdoT749yjogRYHkoYnfcWVCTZ3WS4ew1wzRzyJdJhkUo274qtTTgd2mz8SBXfh9mNPBTWkUkXpaMrB",
  "key5": "5MbHbkvUR2K4QuYStPVdhzhqd825qcE4PHuKUfnKadbgV6nC5VMoRuW4viNNghYVtjCyTUFEWYMH439r4h97hUnK",
  "key6": "2Qq7PjeF1E1v6P1EGJPWBWmxMzYPp2yDtWob92kiJyrxhbrTpxMPhfWkxHxLHyRm5ftWWRKTNTKA5TJ3ah6RYYyy",
  "key7": "3xHKwVMz1VUe7zeqmBCoM2ttCwiX3NRPNeeFmva2qqtCfbiAZbxdHLcthpycKZY5Dj9dKcbf3TkVWf15FEhpJafD",
  "key8": "5Aw2wiKu3yYPLXsC3tPQn3iCRUuT8j8jE66o2RmhJH3do9vUxhWxEUGGFDVjdbiGKdLZqZjRi9GAt7usEeF9csLf",
  "key9": "37BzhqscEcV6kUDomcriasL1L1k8yFZn9ytk91fhuyCpAsJPcFwnbnLu6RUxNg8VVozBE8XTjWdKEmaKRWZB1Jg5",
  "key10": "4pUMKmKR68NdFHzbGXkjn4GcKc5AYGxD1PcmaY3PzcxeckyYkjr6PxLRpU2NTm5AHGHeokJvXXCTdzH7DRMBQqFy",
  "key11": "YPFPjuwMeAWwM2U7zBaB3EVHJcJZd71Dn6z2owuwsuBFgVZSxmYTafue5RqXjrZYQ2nySRmqkdujVHNFkJogvV8",
  "key12": "XmM2wJvGomvQNS5vAsSko2WgfrEmTUTQbbnwxYEYprmVZSxB5B1HAmqvyv117mUJEvx1c8jusfubHYduZrY3nhZ",
  "key13": "3CkvsSZWjaeDmkVoahmHARrcLCFrenMvuBwn91dcWj6Ppx8xg9jQB2jTJzYsBby9Y4nGzEBKwjvfCgrYqfd81V5g",
  "key14": "64q9Czzu1KYRDHEZr8AikupqK7YPmqsZHRSp6aaRjdtyjCfU5tYY5GX1b4kRKV2FSKQDGqfz4FWCDG8pDtfn9RxB",
  "key15": "3XUfQhjWGd1SkMC1pE1Vp1PhAbdEAVwHpWhtnWVzAuzjqJf2Hfgb77596pUsY6QzFYGxZRJUYvPhSV5KPu6qNExL",
  "key16": "4xziMA15qnTaaZao7dYD71pmByLsaHd4HFgfnRgjV3UekZVri976oFbdAfnnacuymwEnAhN4svC3PxpHqZ7eXXcn",
  "key17": "3Hnux1KoKsz29WifzsmRhG7W2n19L9e7XNk6TR1Kgxxw5xAK7PTWgYLXGHeG9QmnMXUpMjxkcvdRy7NUTrxpPUFs",
  "key18": "5eYnjNZLKFLsFT8EnfC2TdJEEzQA6J6m3VwMg7Sw3GKy1fDDTAuL4WK3LnKDZkEnJEkZYTVLF2UxYaGbBFCMAb7R",
  "key19": "2gJPBFkU1zmQrBN6CCtdp8u2cGpjhPhEdz7Dt2K8sa3pHMT8Gg2WmdxCzA3K19fuZHJa4AEZk45KGnVCgVxHcZfK",
  "key20": "5WikWyo5ikG6jqFG1SDQtAqVfVJr8jKAEPtaC1poumfvQgAhyA2dM3eo8REnTJUmNFQaGjZqFdv4LbCCf3yUULUC",
  "key21": "3MrmcdK3RUfuMghR9WRjQkCgZmcXzTV9b5DR1iSxjJEDtVh11MAs6CWrjgAnuJN8HWfKA9r5LNaAvy6JD3nnRff2",
  "key22": "4uoMu88uyL169QJ2ohS2MmsZNUhfanLWh6Bi3sLw4szQ9Qm474vYnqTfreY6U5XyKzuSPHjUt7Dyu8ZDNCDowSgo",
  "key23": "4WDeQLkCNCUPe5DkfMne1vS5v1cFBeerzpUQhi73r7irn5uiRVvjZb9KutnfdUvDG2QFny7WEUZwmRMoopdEExvb",
  "key24": "5KrwMbQ96XKHLtEtyzuqyu26ZzJHrt3Ee5Tbx8EAm6siVL5qkRawRRouPaff15HLrNSFXRxGve8UJKAKCC7LQEax",
  "key25": "5qi232sy8CGQY2FZY2fCS9NcPHV8nFjKTEHAe9Z5bRRYAgjb4opvTm6Bhpf2Q1QNwq6VyjiLfECqn7uZZ1NrES1p",
  "key26": "22RnzLHfy82Xpphxn6ZH3qXrDY2jCxPnXBXbXVjofcx8J4kseMVzgoPPPxdG9xE2WRucZAxcLcGUQfSVUATbKFJD",
  "key27": "5d25imZfuiVzUc2HFZLc3rUMGjgEqxr1ZvYyFzo2Yx1VXZM7gJbS2Vq9wx2pr9WjDfuNm9WPquKk7XrtHkP5JtUd",
  "key28": "5yGVbzRdybpKind9JNCdURMFHXSFQmNCzmfAjak7EnFaxEubXuhDNdaV2JxJ353xZ5V8Cs2pidtJKVXArVzyJ2R4",
  "key29": "5JcgyWTiyUmrS3fx69mUGAFMGZPzu5ubE1JoxGHK2RDPGniZfa7ZwiqzED5npigXv8sMCpiAYHF7CzBP6zQN1ei",
  "key30": "3VfXyW8s86oVnMRxSj94oxJ27qhD3zfgXbWt4QtbbA7aNhRYgo6CSsXh7puxMPvh3X4XU1NB6SoGHprJAj1SXotW",
  "key31": "3fsowPpBRgcUm2jjYD3Pxi7ACRBVR43XMPbjoCdvetXJgkvF8vAoJbL9A75igRdc2sH8vtj4dixcFUGEF3Y5Amza",
  "key32": "P4riKaUr8VS8tsKYVXUVkCWqrpS4tyey5cE7aefrvmySYtABgyNkyYakhJFwHHQALtzTM7WTysdKMVxgw6gm8f2",
  "key33": "5NB8gQg1AH7dTxgQRSyp9pdP9BCV2sJ8S4fkHk6ir6KJJgUQ77U9ninmNFqVfZ8WSm5Gv7BRKuyR5BA1MXkZ4rGz",
  "key34": "2j3S3sKVn3me4dG17npXuZeUQb6UG9S4pJY9sfc13BRksm9AUXyhoZ9TadnugNspCxL7bgUk48mUiJzsbjPWeYbz",
  "key35": "8eaCFCU1em4cVxqKYdfWdLuPLEmR4N9SnHe7wjUwM6n62qTgzC2k9MDoazg2gYQ2moRyRgE4ui6bCfZbAT7au8G"
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
