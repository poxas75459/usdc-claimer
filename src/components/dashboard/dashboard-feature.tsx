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
    "4akPQB3w4pLFDhudUCfAPCJACaqUT8KHEAWQCth4yEh9LDCWWA1SscvLiSAt9UKjuaF7PxPH84x9aQ9rAsSVs6Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YysQoae5fezZzuA987HL7Le5JFFvSXCGHveB9sKeEVDdpXeddgyDwWENoiHByuKyNHZ8v8u6Vqi5NM88wqua4MZ",
  "key1": "7nJp1oQW8i1UVsKKWbj3V131rmmMR138LPqxe4RjuH3wFHLucPANNfLGHgyT33ERfEcszXcR1p4KKeYVQbyTKPz",
  "key2": "4mmE69hbjqhFpFwf6uycaochCSmXE1qUArFZw4XHbPYp7rQ6HUMK6J57mw4UyvvxVqx6p1es6o94n7scZ7zzei4D",
  "key3": "5RCX21oHuAcAcLxgDRthFLsZCc8zXBdKhCyaDCfWZvVquyMQPtjsM1F78keBUqoFAfnVjXm47iVkPtyTndeyCXar",
  "key4": "65EErK7ZAgANt1c46HJkCjD976rU5sKj9U9ZQ44SQ6m9RJG7GLu952925iyg5mumfh5Cxn2XmnjLQB9nY7KvU8gq",
  "key5": "vWmF4ogYLkgNQEjTuk3j35aC9KSa1d6h1Rgu7sTp2pDuAUKDjzrHu2NhwjAsRWLXwZczCedtm6sWdn1BSFRq9jV",
  "key6": "5Mh6ZxGn84NkV8Ax3Z61gb6nvrPYwWdLKW8yqMRkUfZxnSLnR7z8SWmXqRzJeKB4L3jzT3twGNoia6eFNexvoiju",
  "key7": "5iqy33TpzJAjCSzVJno9S75HjNY6RLahDybs8Q8VXs6dzEjs8PYvz32KBkgasQXb9uTmPkRMwSkBYqBHUNSzmkzB",
  "key8": "5pUNSX4BR61cShmhFeGVg8T7xFzzo4nB7b5nD38MBGRmxGpDwiFuzXSdQfzE4b7S2Agmkm1TVJg2Bb77vKHMsyB7",
  "key9": "E1YZwjRNqrLSpsce97b8b5xSLkiXvF5M1Jus22gk8uRwhMtohhGWNk5mV559czavTWpFZbeL89nErLfYgAYyQEa",
  "key10": "FA7F3UPi2RUAMCk8XBC57hZ9G8WyMYDq5Gx8xuigF8G5L1R72qaii762JfBk1Y8cXkSNTqvHvb9T6QuNLEuLMEL",
  "key11": "5AbkD28KsKh23iBVgJG5UveSnRdsH6zw2UUYcA86Z9kj1eVGA57uHJhvvxfxaC1CbVtx9ANDtXmcrfJDwnpBbvWG",
  "key12": "3iSrhgchkZxvvghYgw5jDqtAGqG3fRftAWiF7oEEJHopHNypaSKSLhbnhqt1LsFfm6xeX8pQZAwVn6NWPqEfkzfN",
  "key13": "3S7LJBUGGZsz4iqKokY9bcsNt155hekNu79MwSew15hDhGjjUuDGiU5ZN4A7Z7gYQTEpAbBSKfPxyEG68bhj4RP4",
  "key14": "21EcFngGudx4TnQBfEeCtat1zR4XBwWX3YkCYtypnEnDJS2QmeSZv6mwVZPH1gNZurVxmKC3XqpykP1DqUNgLwGj",
  "key15": "61SZJdq3G7Rab27eCYPgfQQcxBc1CadCdjFSZGrHVB51gVqPBsHKcRVfjPXavKVLHpaFffjPmpbWBMWSoQHadw79",
  "key16": "5kp7DXvvaz1kKKaqZpTmribk5ZBFCmNArEoGoSRfiGYf2hVo1K2GAiyiBsHm4WeA1S9Jf2WqrmX2mQHHR5kyJPZN",
  "key17": "2Js75CGbkcLMPv8wmWozDEKc3EvDGRe2XPS3CED9tZ7bAYknb6jyLZSNnag16QMbiiYea28ynYcgJrr3EppdV43t",
  "key18": "2sFnJGSx6mRvPE4pJp3SRCrdT587G91ynUGrJMjhWHaT99P53DZiFd2FXVT3x7D6bnajarLAGEaTStA8EK721M3Q",
  "key19": "2VFaqM5ggmvFfBFhC7QZcjR7xgbpVdnqqgZqxUmHMSJrXceXGUqfDtG84FabEf9CEkKP2yZwdNeWGJEq4639P2Mx",
  "key20": "26NJa4zVZx1wTux6Q3BFHVAY4aTSU7ZVyz23YCz7Mj296xPkrRybBWZvJrdKqqUScbse74KYpxJve1JYjMdAHxHL",
  "key21": "2cQfMibLkykjhENLHPmgrsMqNSDMyzZxUvQtq57nEVBTkUcVpdiS1P4JYaKRnyRFuEy3FRWYWGPE1rUCran1Fo6E",
  "key22": "5Xt9KoFTHRhjCtcadeqs56qwk4EnzZUjdF4bL7i9Go8dejUxEwKHiU7Jf3V1P1Xz9SYLRuNDyBgwc3Xv8oe74u3k",
  "key23": "3PqMqr8gV2xVJLmetJbwbereR3dgNrTtaUFNRCmpUFoCL2VvhMTZeB7Z1sLBhy4BJ7G5L36yGtJBX6m4k3JcnK5o",
  "key24": "HQNcqZoi7sGwLM4UmpmsYmPxLjtG4p2f6Cp9wFETdsEbWeJnzcdXtgSdSCsvUzLWGQ8eMvxq92WKEFYRiTvyBrH",
  "key25": "uXaQsnra3sWwUXTfhVcouEGrUcntRhjjMiFbVgfAu5g2yi8ZDg1bL6CgVhUvs5d1aELt1PH5kHyjXiyDwy727wB",
  "key26": "3XgzPdd9DgecUccAXHCPfrDiKvxexevEFXEmA17DR1xLS5NHTBDGDTPFEUjzkTtiDCyyBwMtYXrwui6fYCr12LiU",
  "key27": "3R7N2gu99fUvEFYZb3RbDXUCS3sargvNMor1zxuhXT8N5kJmNHeHdPC3egWcB5CEqvAdFJvBaMUEMFAgboAJV8K8",
  "key28": "4Fir2Eb7FnK3KQHDB5hoSGDRVSdQUF4HGhbW29xKxZb55jUEysknQKKv6RtHyaF5tiCDiTHvBXfzaA8TP2GammUv",
  "key29": "3TS8WJsC6QAQmnnExF1RxFFVfvmh5qCbYV8eyQrHYrEzRV3kKuqfN9P3ttZVPfBWK4VeYYyDMzwMran3BoupZ6z6",
  "key30": "F7XaykcCYwJ2WDyhgHrcBH1x1Pz5NnXFpQYX8ANhHQZNmycJk22cfY3favYVu82hNwowD8e6GCoZgTefZzzfnoa",
  "key31": "311tAy4kg7dheaVhCd6Kfqt43z8NecF6tCCFLCpB1UidbTFaHZuBidwFWHXTpNGxqnoZANiF4uTH5yMEuoiDWBXV",
  "key32": "2M4pUFm77Ay13jaJJh5xqwwrqBxE7rD6QCjuQUkSoQA1AJdKJfpqYyFuSkoSP3yZTMcEh23PBPeDjcPkzkXQxKdn",
  "key33": "5FhSV6bdqEyYKrqTvijrhc5fu3n1RE1VircrqMcvvndnghp9zXqR71fYxM7gKkpTKMwL9UnEqLkDdgZRjsBAAafJ",
  "key34": "4uNNojRAH83iRPCzeRP8jKo93fFq8ByokofJGcyNv2VpJo7a5BHmT5HHoWaycBbgbzx6zZB2uDjfapamhD8MRhBj"
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
