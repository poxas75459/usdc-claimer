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
    "2wQb2xu3kLxQxwoAJ4LWyNDddZFnpPpLaDXDDEDC57ZWjSe6yL7F2opgnckhnyGaFfFEzHTK5ELhjNbEasLiaGEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLMdAS7APZkVDyWfGSzACHFABfyp6yXhJnbt5AFytBtgbXYf5wQ1feMXDAmg983tKxApwNG5mTZnti34Teq7H9a",
  "key1": "o8MjeCuuqH93LSvdUYarnuLc6DVamMo2tZxdWd4epuBXnMjx7t9tTcKhtybyhGBwP56tmGosW1rZ2vBa7QH9myN",
  "key2": "2wxA3XR2cnMZmdiDgcZRjqNp9apWYNJuV8jVZPdmDEtVuXxqHZa4MK1V7LdJvcGTksyrWW2k7VyTrs26n9CdfxdS",
  "key3": "3wFeM6Vk5XMYZ8ub713VtF75QouMadnH8JZHTLVNzKUP7DgRBzb3RYZeQRrhXKFQMaBkBNP7y8AUR8MFeDkNU23x",
  "key4": "27zCRaxpy17to4Zvy8v5wsxUq13GeZk7a1FvyfFMcNYY7k7FqPvRexshELH7C8LNFxENL6ZFaSfvisdEXAJS7b5K",
  "key5": "2YKkMyJUjcZedLXL2vDP6sZH9xuEycPk1ukmj7FfsbE6c3zHxQ28hJew9WyrMGdjyw8CStWJUHPbK4YsWrUtKNi3",
  "key6": "66v1WELhnxprTyFMbMG5JjZ32isRiynw1zhNjVYc3muJYuViwix5Yk5Vi4KjCRAnpbfAR5hNQNMfhTuPdn4rkbq5",
  "key7": "25cefuinsQ59wZCuY7CCMwjPGq1n61WVA68VPUtn9WAYxqZjuDuQA6Tgv5BBTdns4s6mx8MhwgdUakAsUeuFJSh2",
  "key8": "4XzrVKhoRhRHnPCwSoWFvQjGzShixRm75wg9CWyXTFUKCMt3NuYTCD7MLpQotqnp4dBScsvGrpKvCt8ktknChVip",
  "key9": "4pxP81m6J96jBdc9VJrTkYjSEwgqchwuCxiWSA6wJWracRX941YHVbr4arB5L8A6GQcgRvoVpka5mwK6z7WZnp4v",
  "key10": "2FSwPUeyeV2SN1nGpxJsRyVqaUMzVj6hJFYcxjRQVk6cacRN3Sg6t6ZNYbDCWEnAXzyAnz2tiPDwmE6WSTs9RkJo",
  "key11": "66voTLy1De4uDjjHsEP4s4qNp9ScqsgxmdCjDcYHhE4TeZUNLYjPwuoNk1xgHmi9KcGXAx8hT8aZE13BfZHCEzQm",
  "key12": "8FJcy9zeZwZHF8bmLCM9swoi7JbeAf86gb6TLYyWr5ubqwYfFKxXEZQM3L36nBSAd7BUF2cPW7WE4yXHJhMrTnR",
  "key13": "5VypTzLV9GABzETNmCURmKj5NMTstX3KV4bSQwNxnAsUVuxNpNdPPNp54UhGsFxvTBcQxoG9vBUMCpTqpMPT67yi",
  "key14": "2RCssE5mhLwxwtS98AyGFqjKGJ7kjhmcJE4z39TrEgkynriWHwAKgZak55mPrqExNCitpJCwb5ZnVkWuAh8aibKn",
  "key15": "4XBMXQEBAeGhixcgd5LBanmgRnjSmFjiAVGEuZMbVpfGtmE16z9Bc2a81bCqzhJo5UXtBQiA1yYhrBRyz2XDgRSo",
  "key16": "9Kjw75SaxAQLTWaXdrVyhGn6HA7d3pTzCELPfyxyA1qKruXoGubWH7jVx5kyLMwHtFGSisWJxmuuzDLjnjNEXUd",
  "key17": "3T2yfjpLzkkgr2hVzrPpJu75obWqELk8nrq6DBLmwsJYuZoKpfxuhYU4QhpdauZQJnYXpqbJzJBpALS4yzC2TXbP",
  "key18": "4jU8iiifdyJar6v9ACggzBC3FiMJTtCQqKUBSaybCCfhSoyzLkT2Es1BzV8q7ZJrPT8SqEGc5Hn6Wj3Xg69w3yey",
  "key19": "3xnugN2LRK8zto3rgregLGsgkbUU4HTJZjqbTotaHwyQVxyLmdnrrA8RnXn2CLHLeCz2pigtp9Hc5zHkFka56wx",
  "key20": "2JXS7VEmGkn7Gvb1LRyEosG28WhY3XtkoJApXHAkumHcQsb6xxHWCDnyGMYnCt6MYoXsgRvefxk4A6tYaNeLt3Po",
  "key21": "3Jd5FeKSepQVnDk2vkLafAJDFt2VX3hP31t559vFTgZrcbSy2NomtMwNBKpLvmguHsymz61H7uWnb51aGssUJjKt",
  "key22": "488kxb7qd3AX94jro4KANkkmwwMc7N51QaueuZDhW3QEHjxNo81EaNkn4kMWUfSvtAKZykUamdcWRQJwszoQ9hZD",
  "key23": "3svZsv1a5XLHEo12qca44VXSGkLfy5qTqDJ9bkKpDns3gcmaqX1XQdm4Km5hL9vfbmqmhwNmeWw42CkCnqYdWkwp",
  "key24": "2RYksPyA5LAA9H2A4MSrqjTKDdrb98eDXkfRmfa9awXLt7isAVKjcjqRzsc36GuUfzxMnq9gswqjF1m337JCgu4c",
  "key25": "5jfeW4GJyYjQZLzipW9Zfe2Lvjh12urcUfegQjVs5XyQnW3X3D6GLZeiKV3Pv9cRvtBoZ3PWJPXQGXQz1q8RcdP8",
  "key26": "BV95Go9PAZCfzn856ofdwJ9pVNaCw75NQTPNrjNA4o2VaLsjn5qeQUYjpPoidhKcv52D7q8zwbdjpk7q8HAhbDn",
  "key27": "4ZWXuwZkKtbazW39hMqbMBv5C1z8bDbhTpTe9gwusjdjwEv8QNpuuNzEgj2kKW1f5coVfGecpQh7wUhKgTorCVEP",
  "key28": "So5q6L5YEpGpdCk5tmfkQgytdcPgv4BcdWErBMReqX1jXxsaPr355VDNQaKbedoazHTJwNMevqowGBjXR6mkAYp",
  "key29": "2wiL8PfLMfaNychYxfk7TY5VL9hKPtwjJP19PDa5A5GtNELL1dRhhWUh2E6K9gZprJdCnQdr6HAyzPXNhNrTBeXB"
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
