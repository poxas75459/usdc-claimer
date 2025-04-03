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
    "52bnzcEK4neAfNuKnCGMEeNuc9dStDoZh1CSkpzm8ydHb734uid4XHiricEaq9m7bkat9BSd1fkxRf93nFpn73bN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTPh7gBEapKQ6TyUqrWc4pboJKHXjSJyFtcX5a1aEyK7mYbLAUB3dgVqWP12chN27bNHNT63heAZQPPygAQyFRh",
  "key1": "ci1tQNnQqtbTknK7TqapVAUCcThu67yVwuitrGrDzv69mdc91jupEcgcVstsp8nRrNAJgTipNTPF4UNKc1KvZwQ",
  "key2": "27nW1QAMqexjV4Hpv6zESt3M6asWFgrPiUBSJJ9WhN85Z2qGxMZGW4vB4ryCachmnUy6JeeaJD35oG4kD45NqZos",
  "key3": "2vvANCt8zHyRD2hZCmVEh49uJXCnd5NgNk6UHyEKJ3BXU9uKJysYGfivTFdP4Nh8VtYczqmnzmMCiCPCYJVxdjCy",
  "key4": "2GQLR3cLMxJvnCnWzEprZpjzE4HgzPjXSuVPEkLBv2E4yE3dBr9L6cFri51v2EiodAGqF4Aqg7wSJcbususfSca4",
  "key5": "3QK7y2gaBh4t2jtQD98N7No2q1dSmUPDRgH96RSpxgAs72b8GaDXwYGgYS4QKaXBrhTJRDkyhnWac2cu5kM3KQww",
  "key6": "57yXE5pmBfsPL6eoH7BRHWoDGJ7LJuoNSDwzbRsiSaL7XvxBAqZSLR5vNxUn2yPRETF9hMirMtgEeykfRfoGmfw",
  "key7": "G4qRCHUpEq9RfFhTH9ypWLe4mqJ8M6ddYEUQfed8bino4DkzesbRrPRRfFb9u77PBb8yxWC24639tagWSpupeHz",
  "key8": "3vQ8D2KpkAMMshgnqRKwCJMxjTH4Dfp5YE4N7Aj1mpuU4ArrYKMcmaHfGUJ8LFgUdBZQtoi9AmhddvzmB3QqZ2tr",
  "key9": "2pXry7jRD6SBT8kNbd2yuHvdYHHFVxKdniaqnMZxNcNJxZMJatqVU6eDh2pBdn8kBiR6rV5VyCmrF84ggdNMJzyW",
  "key10": "2gJpXtZCfN6yYLpZL1GeoXnRX93aEZpd9JmbReHQ76cahm4RJ246XxLzURmamo9hhrbbXZPiaYmYUKaAfQ4BkAXb",
  "key11": "4uNwZjmdcwpwVDbDo3hSocu9hW1ssQJUPfriKcpvsMuz4Ukr6Q5VMxHTptsW9wtCYStCgAGQFg8GLhcXN3CNQqNB",
  "key12": "3sfwmzHkG4gUbP95wSzwns14y4RN6iz98eiQMtXLe5XRqxJEmPs8dLF1UdP3CETwJtSfSrB16BVEK2NB4HegnkyV",
  "key13": "Trz7VBaxzT186PAQjjyR65FYcAuN4FJGWYqqkFxWjsHA2pMjWksdcCsUE2EARJL4Ttg7cWiSt6WXZfJ2GfnRKHJ",
  "key14": "LLrDAq2TQFKYiRDngnuoUTQqnvPwWP4apc6weV8uJUXWWPRdFyyDGbSJKTZ3Yi6jqsSKHTvr9joRj5hMvXsSyny",
  "key15": "CdMLYm6xN8QNK5JtGSdZTRU8iryNtTfCP9ASoVgf8LTwFQJSVC3PDy5HRWPom9iANb4TaXepoNXKEnsxuRpzjWr",
  "key16": "pPZkrqzmAzWNSQrqsFu1JetGY6AXyEH9bpAWd9pS7mUUtd7i16KTn45r5tAVU2GhydhchWydzFYKHLvdsVgU6BF",
  "key17": "5UZ8KfhNH1itdvvASyXhTN3bFnkM3kTn48p8p1ampjXn1b7VvUBdsNTSAAJjoxzoLLibHUZuHQkyYobMQwjHgffy",
  "key18": "63Ywgqn5q23NyZ98ddWVPUuEyR3BzfqWe4H3JVMRKWEMycV4ZAQznBjYw4bmSBw8JeTfWoDmpd5NwRwz5AGc2dKg",
  "key19": "3VoxSvYpNsnnbgRm4VXr9HiRpvsJhnghkJiZKGJ7woHdqqXMatuMYagBJ3T5E4D1N4g1e5DY5wQQSNKUnYQ8y7VV",
  "key20": "2d9H4tNnzWZGxWvw4iGrgAbe9WbUkMQrsVM2AFLbWKsLAvTJy7bW4zDyLSqZza6DGhnxFjniNuvSvszMAsnx1Bui",
  "key21": "3aNjozArEx9dv3HkVeDKgk11EdKT9HvXMMsRa71cMgXWLfUQmeAjcrxhFELFg9BjJTNQuMomA8Di3dKWg18DN9jw",
  "key22": "4LTEgFahFUkWVeozP71jkgsksqevDaciC8qKxSp5rv4Fb3eThCZx3cWXCY1hWV446HVjQGuEx8jyPr5wDJQHtVNB",
  "key23": "4TY84iJufgSiHVqanuqAxB4qAz5VDyswoNa1UXcATcAkUCtx2gENRJCvpaRHZZJw542XYcCEnqdKLTTrtzQEv5k1",
  "key24": "3TvdR5N9QAnAhPsZEa1YABJf1NsyxLUj7GNv6BCbBnhUzELPGs3cVTft9NorGKs8U2Qen2SH75rUDJ1EPTHdzWRd",
  "key25": "39vcwdZ2L7sgFKLbogAAE2h7n9CpkbH5dFEME9ebFjbKVD4Uj3AZ132mcmTe3adEiwLo7MqteLm6H8dXNosTQNpX",
  "key26": "2UHM1uc5CroRjJanN1vYBBYQ5vUXg1tKSPT9pTQLZtd7TYpX6NDN39iFAnCbBYF4v26pT1ggbNg6E8D5UscaXK5F",
  "key27": "2F5A7dDxDahbW61REgohnCAXKdYXnbeex54gPRJdtQxbTM8HHAs7vfYs3hDc7Nu5rh2bnmQqctdm4cVLcx4Pu1pQ",
  "key28": "2wuADuNCsnE57KuZaqQKS9XZXjesf47YANXG1qeNkBPaBM2HDGfPij2r2QBvGEdNb654wL8rN152Qa2D1kDmn8Jv"
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
