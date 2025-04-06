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
    "4qyd5v5XvbesD81GbxuzDiKdjb4CcL1XvsZqqcu9s9n5gp76ujHt8AYz9HFJ6i6TB2pYBbvNEkPwMoQnHoPi8EJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuhfWNhS48b8nVGMbX1sgrUm5wu8sYaozRrxU4ZZdtJpBUBhsa6GDSUho6kGrkKGQMQnBaUAGZtfubVhCgu2BmW",
  "key1": "4KDavfg1d6NUKbGY3Awhs1exgwXXcX7Wg1H2d6rSGRGgccyhXcsZtKMp3cNbJDRA1p3LvXAS78xZo7ZZ3HcGwn59",
  "key2": "56ze4CdNBUY9LQygmxY2m7t8GQ6W1oSRCGuEEMdhXNuBXu5Kf5MNKZ98EaoQPcPfmkAfNeXqReN3FCCSVrjj5H9X",
  "key3": "4SAxWyrX53EUJWeibxHYDj4jEiSkTpSN3LfPBfNE7kXwy82MPYLdqm7tcGVrZHZhvL8r49rZ6f3EhK1Rc4N2BpJK",
  "key4": "mp76Hwk5B7CrkbF3CtFjtBBfYsbikt158PucsajDmHKAPg4FRhfCXLCK7Y3Soz5qCGjxyXHHfTSW2hcnauoGiTF",
  "key5": "5i5fwWZApEenj3onxeQmnqQbW38vZPFjh1KVec9VZUxvFry5Q5LiBMTp9Bh1kbMsd9F2wGMwC7N1P97mAQYPbvxA",
  "key6": "5LW7oLRkCK74UKGDLRfx7LwA6n7pk3Ko9ipK1wqKKUoXTVApGuK7n45oDtRbaGmVS28MLP8LSmFAo7EP64a49mFp",
  "key7": "2RrhUdLWCQoVD5BHQBPRA51YH2Yd3f4jLTtNohc3s8QXDzYZkWWzaosxRGhc9XwnEwqnSSt2MU6FDWDZSP6otahV",
  "key8": "2Vo8kJfahnuwGNVWbypznC11hA777JLNVQfaJ2ykzgzN4oyagMb6ACCP4BWWra4jJNaeGZgAhVGamYLNfFtrYt91",
  "key9": "4z5kCWRXMRHmKtHMi8VGynTwdveZ2KZ1uHqJrsNmZ8zUuE1tRhn2PsTsT12JHQb3pV3zXMcGxgdaTr4XpxKcFU3z",
  "key10": "46ZqncBbCNDnhFjJN2ZtG1XJYq7EytUYqXRrF5AcNgaqmBBH3cZNuVpR5S88BJs9zLkfPaanbHqLbxCdJYzZC1i6",
  "key11": "33LVNokWWnGuB2xSiqrwePvbvakidM7TZzQHaF8ccat4764TRasVprvAyJZb3FGEpNjQrcbEbf6vNrYXYVuTrnTk",
  "key12": "2kgLXnJWQBeSmzRLapgkFKjez38tMrgJGknUC2YJR9MvvtXvUWM1tLXdCLKxvrG2n3tZVKF9wjS5sDRSZWw6Tq2b",
  "key13": "EHwEjteqmGphejrTxuAcbGFko6eP2caXz7dBRMaYMhmzQSCMTq81gX4uxXwEB3W3TWd3Mmr1ickeZdKbvYdnKkr",
  "key14": "5c3Q7CTkZ2j22y8abTis56ZhybnNcC8nZ32odqCU73c1fiuP7YSbfTLojGdXyrBFNP6u1BETcg2pFJuBa9PFuMPb",
  "key15": "5L3B8dJVku1n57xToMmHcG1Xidi3g4FdpSSpXtQH4bNzHaKYzT2SLt3XZyXQtrLXRpzcL3VCJLHLGodedP29mCq7",
  "key16": "2d5HF3jSmhy6QPESJffKSoU3bQj8F15D2GrVc4RBgG6QktaShaTneV3jWtyK3KyA1bbEBRXsXAxsoyP88sc1kTDT",
  "key17": "scEYRJHe7iCw1xHi8jTv6ZKY9YrBAK3FwPHrgW2Mmy3sejXJQdpdvmePQ8JKsSYd9M8xQmdp3EeVTkdVsH84zWv",
  "key18": "3Rr2wB8LXbxgySD7PehSLcDrtSYWoC1PCSbBs4hPVqp5DWw3wSi98Uj7GnaouJPW7HSrbjbHjn2MDzjoraNb8FFV",
  "key19": "cFX3SB2avsruxKC5eUTecUTrTH6nez1XjLriuSCttnHN2cLuzgkXfMeAtp22nZ5My42mnjuEeMC9gdeUv25G8NV",
  "key20": "32TYVUwEfS5a1w7na4sQ9PfM94vRZtrgCK4SquNos9WZnbRzjzvQoz3BJBqnEn7E2a9MTMqYF312Rig86RKfm7hs",
  "key21": "4gVBTyjYWVYAUXpvCPZ2HqFyq7R5J1UZZ96nzRBkP1wp6PzPThujNUyny1T7wVyDSrUqs3fPhsjG6FvQWFekyJut",
  "key22": "5oodNWbs7AfuqDZMvUdNvj6SJb1jeJG2FQLQV6Wjc6VvdBwna1LVakYZsqqMTzMhdMU7vb2g4JpCUxfXizhLMrrX",
  "key23": "2zrLWWYb5UkdR1APpuuDLi5NcNtqh3kVYhE6PhaN8o1z7KB3Ddy7hHRejcXeCexKBmRrsDxGW2HZeThmz5jFD4ax",
  "key24": "3CqKEhuGMGziDpNBnmyGJMN551EFyLfmRePuedUfZsT7nBc4s2xBbpmiePYyu3bVB8nVjoPT4yJmUspiCW1Un1bB",
  "key25": "2wne4juCpHZZAH5cPruR3Q6mAqvx8TLdYCNdgjHziehZYdbFRiaQyqLkvnC96BChRx4fWbbETXWTjGMo8guccwKm",
  "key26": "31DX7eZhVWbfKwbhC46P1g7YpZvN3r6VGToygEpAEyuFnT8KtAvtW4pmhmMi7g3Up8RsMNnNEBs2uSKneum2VjgD",
  "key27": "3GZ5uE1buYs6QWqBcE9N8DopSLDQpzQectmcuCGJx5ymf7deN9S7eajzELznYmReaekwEZ2CMJLUecV3rZqj1dup",
  "key28": "5bLUwxDda4Y8ZWbk8pkMSpbNrDkMKCB8DQTP9B2vkLpDyemxFUoFW5ZPXWFMvPhCQujMxVD3bAdRAAzrVJXaJ1Rs",
  "key29": "35TKZ75D31yxJGvJydYoRPbzUdRRNytxyKfrW7Q4onBCror3xnXzyDE3FRYeXLcgMtcMK5rpdt5BMv2WEYwNrjmJ",
  "key30": "h54CgMJ9MvpfBd1VvQoNgp2m1nfdhC6cRVWLE8nQA9gD265mnB9Lpc7WgxvKYLd4hbDMt6sKmet1pEVKSxe6Xze",
  "key31": "58JMS5WQUdJFfUn5y8B3Q15r2wzDFiFtZorZdBLnx3tGFgqzregVqrNy8KDHHTLLX74tw9bc9iH1mC62EtyRJ4Lr"
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
