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
    "NdxF21yJa7Z9e3AdSsP4v4WVqEijXN5x2aNH8eoLGvkpUXWttv1bL5kJjuYuYtrPcaD8znXDuRFsNMxRPi12M9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pSevWGRzLGXKL73NoGy5294q8gTqkvUWe5CDr5SfGa8kCNBgBbpEXJHnjdKwXVxamnhxn3fqKi5zbt6fiBcENQ",
  "key1": "38XwNHV6k6kjnyKt5goSrEuh5KjkdCjBsGe2rSfHZ5JPdZSD5LoW78LWbGtaMq4vQJrXGEzModCV5oHvwLZ4S4GE",
  "key2": "mo4Jpsv3hxsgVLyEs4j1eSUGW8yqngx2y769QWp44ck3oLTssApJzwjc4TQS7uziDNcF332kBoP7RUDgJ2WrjFm",
  "key3": "aSxzbwupYGrytyrWVF93VE6AnpVJ3JBtUUC1XN8bcWVERSucwNzqRGasgwwZLwC8CkWsYL9XV5qXFNRZF49SByX",
  "key4": "3gxcLfg8rw85Nhqfb6A5Gg88bggMrHjprijvqCi7H61EUDY1j8mSPodV79vXPFSr4cVHbJtnN28ZuqyTh3iCupUn",
  "key5": "2ty83uiDjbj6YiDhk1ihbioVtrjKDM9WP8kHYB8dA1MUypji7yYtyAtavwk7wHghYCVJ9rrP4apJPmhFs1pC58RT",
  "key6": "3Dwor9k1xxe4wj24B28Ro8w2mAHk5HLM3pN5YMLLXoZH88wqTNREnNqncYNwJHHu1LiXEbTfE6BCxnFYGL3EJXTg",
  "key7": "55xpS4DU99hnyrGUsZzkz3xNaroD7sPGNZpMJumUfLKRxS6Vm1sbNvcq6a3LDFfh4wcbtXkFcjKkz8Gw5MttVsxk",
  "key8": "4qGocJmetktg15dVJazWZWVwXp57ztrUqWZekV81znKAioNGRQZtSgAkxHbW91jTMbRR1qvuR9iMBi3sJSCsECmx",
  "key9": "4McPmdT4N8dh85fF2zox2wjAEdhtDR1zMwtVD7YZygGDbsZtd1MCmkbYZme41oio2nRDjQKXQm2L455kPWFknqLy",
  "key10": "5muJyhgwMUSmP5sUezBKag56fxqUVtP8FBSKwMNaoghPe5jT386qoZSn5XgF7yd8fNX2U4A6invpUPxVNJutRBMd",
  "key11": "g7WP5WeH6cAgh5UPhZtT2iVcyWgbFvyxBvtThZ87VKdytFjJXJSjuLcghBTaDFEekh7ohLGHPzT8eqfhzcJHPBN",
  "key12": "X6aqYfgUrUaqfC4sYvP6jKRKy4yAia4R5uDXpZTG1UwCeziZDigVfPAPEobJAnzeKHvAX6yr6nHuM8SfDZXAt5Y",
  "key13": "4cRSg3EcQBCvUuncwk1xTk4j1h8JkBULeh5Sp1pa4QJ2tCKWHj543vvPfsMzS4q6ziwxJdPLEQKKR1mswjTEAejX",
  "key14": "63Yy47EsJ7rvK9KCMcQ8z7F6bGZhY8p91uw4HZGfxrD3CjBdaWLvyvbrvSxHKCwZT1bY8v6Qkcx26P6fHec2BJRR",
  "key15": "3gaDvF8QHgaLtfjvgh7ZxHJ8Gn9Yr7o37iuxCsJhUTwPXrNV4yHGRZNFozqho3GgvchqemdNSFL2nJhfHbQ5iGPp",
  "key16": "3AMcyTiP4A6jKrfe7Hy8zuaz2Tm9s4x9fei6v2FZkhZy7e6FynLPuC4BgMJV58YSvSQgncqiY6FPLzF3mpvF3QuQ",
  "key17": "3DYnyuw88SFaDNMYCPJEY3QAwedv5BycHzJ9QrKJQe1WwMLKtKBKUhetWTtgcWjTcxafA4T8EobT8VPPtmJT5hK4",
  "key18": "hLPqqPtjdVV7chrDeQzznQbLXowQZ6xDYgLmxapukjgq7UGVfUfH8ByJcuccCUMZyB7UWDKdnpnUyCH828y38b7",
  "key19": "5uyHhVyavNx2GetRNzBEBK4WVYfQLEsp82Y3GGa3CkwswvrUKBinYhov34ugZYpYhLgcbuFKxdqJKdht5AFb4t9W",
  "key20": "5WWfGLAMeD3nN7Lmhc56enCfbVHhLtkgvfdvpVYZwqBrMWvBHAVbtnWD6vkDL3cxt3CpLCryakPC6R9B1Z9ezKka",
  "key21": "5dyJKW3hEQAkipok1seAueYEYjZtyVpsBa4cZKxoY3YFZiUfQZMcZmbdYkcraAeVub6iTHqhGqE8CLzEuLHD9Fd5",
  "key22": "21NzzWzpNrvBeQQGdscsSdeuy4Kso1GB9yM5FE55SfmwrNuqn4vQTVXfho1vJi3RAhusFz6XU41wHW7hD1J2A277",
  "key23": "vvYtumC5svhjpbTFpRaXb2iWDKxfKfX2U2GHgUU75b1VdpNqaTrjS2rzUfSjhLuGUR1hGxTBxi75WrCLcx5Jmcr",
  "key24": "4fCU2Mm32s9APfxevqvXRaHPgyPAusGcgTpc1jBHMWVC1AgtjzzyRLD8Uz9pWcwTMtQqvzMLzGbEQNfj2rJWE4xW",
  "key25": "3d5Pmbq9G3EuTmu8cw2G9Vt8cTJpuVMQcvQZJiaoQGbHjtQyLhvUTWPrsFQCdN8di58RfRqf4SL9KCLqsFy9SoR7",
  "key26": "4Uj1SE9cD1oaEY56SdZCeoVvm1RwZuH7Sa6AzQa8XeaasbEaVH6YYpkGKdKuuPJPBV7eoJqkbc5vHDeE7ia4Pftb",
  "key27": "3G11E6JJ8EEh6maPKXGehjbf6mGTwGEuvCEeehJGEZj6t44q9Xe3H5ytbr9HbtxyjbG8KCUZNMCnRdyCy95qbsnZ",
  "key28": "4nBHwZW4NZ8BppkAzU81JPFXcm7JC6aSLi99NpUWShKixCPcf9X2zXJgFuA1CsFSV2ciPaXg6kNXaHYgQUv3rVuM",
  "key29": "566thyRHPrwaZkT5wXQVp68Pn2h3hc8PTWfB7vgTMWhuLxoJmZ55NLvQcrcaKeCBSTvTVKLsdTd86Rpoc97M8xEz",
  "key30": "4M4QTbrMMjshA6v1FpoTaeYE1oB7ykqfk3a5TLqyM1v3kk8K9nymxzapNCurezCvhRWTj19ubWz48p2pRxSPBd18",
  "key31": "5oeffkg2Xu3xxnZvx8Vgwe2xR3uWqrJf8yCjrKKZ2gaVasac5K7gXK4J1yeotEvZgng8vACF9ePV4ct5DNGH6SuX",
  "key32": "3bEi5eiYdtNifk52B6PvRJizp2zNgDxqeouGkzKufhjR1htckwz4REuG6e8RdxzxVa2anx28mzqy7jFo9iwViqvW",
  "key33": "3WVjBm9mM5yEX7uYqazck3CiMwN4agJZExLZ6X7cny2VUAF8ACCvPz6oBkzMzsjV25JYN8L3E3FdbvsDmEP2nzMb",
  "key34": "61n3n46irNcpWEEwwVG8EBxSZG4s4YS6Gyo6wXs35ZXvoxYtUoojkgXJsKwBDv2xsn3ubHBDpLASfPMPKdnEdsuZ",
  "key35": "6QUM1mazsswEp9AaewueTvtUpzNbK9kYyS1DdtNdXWR6nNPgjYhSMdjUFcxmX4pRnsZKh2jDDf4m2Pp6AcJF3i3",
  "key36": "2GGXGdXiyBW3CoC5tMxf7SjeCb2DpqPAB5jLXjTR2EXt9JRUrySdYaX7weVNEywkb2GqaDcfhFm3DXdtYt5TeSa5",
  "key37": "5s2ZcrvdFe4tHVabjoAVT5Cg8vBh8n5kxVyjDAzpKeNQeCgwfpzqvPaAKcL5bKydMqcDzQcxHbz7NnWifAVzSj6W",
  "key38": "2PvjQVBjWc8Mob1NcQRta4ER4ev2v7hMSDF3UghUpDpn6EBrFAYsRGh3NL55S8jdYrLQDV8cAPXVbqERY55VfwQ3",
  "key39": "2wfuUNfcDptZg5VEcuPTpGPW6RVFxwCNUHoqLonidixabSMNWifC5qMUUsdBtB8v5Vi52UA65XzT3oNXT9BwqxGi",
  "key40": "3zEDf1nW46TQJXR4nrCdBF8ZjHhrWnGA8WA5npRvRPUbiquYEQ21CXS7sCRyHWvvQC6fT7nzLdexhHfxh3AtWHrs",
  "key41": "2iXJzB3kJQU9L6BvMyb2sEo5yYaHgszhLE6N5xKaPGsCBjravRK45BoE1FdgxNZiNbbaVxWUFm9f34RXfXDgpvfq"
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
