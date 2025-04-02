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
    "VhDvnBvrspV3SQtNdaNEKdPCq8JKgEsA92Aa8qUKhju3Pt2HEU4wu27P68JaWsJhkq9KBiYQd3weC1xPwyCDWWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwbNMc6T4rSjWrwRZh5DwZbRqjBqn8X9GTcN2CM1R33M1Huj1r7xLBihYRAKBcRqtTJVodyyE9u2xWNgV71bYPw",
  "key1": "35UCUWkJxbkAPmpwS4daYB1dsCzAXKNpY5WTpdzEFLMtaFJobGXqFai9jEi9BCY93iWrGAt6XjjtUqnQ4k4AK32v",
  "key2": "MM6xke1ThYyUcMJKJ2ZFUX34Sv4GTyRXVwfu3g1QPYqdbs1Tn2fTe5e4gXYhhnKxPtrU54ob5je5fxVN93FXyeo",
  "key3": "4zj1wRsJrgD7UKievCRzBnUwPkoy9ucjctFFPSBGDa5jgmF2d5htfGS9r4hF3JRHu4wjAYng5baJd4h6vv2h68qF",
  "key4": "2nEdWwGUkKrB5Wk2ReiGgKkZzpFt96xPaukehqpqmM6tzRaAVBjajHSnjjca1yLZjCm4J2fdfvuhk1BrgeckKSmk",
  "key5": "3hAwcLP83QXTr5JwjbLp6VNoNeCZmTCjH1xqem8vQ2xKYhyRZjpaHjP7nAXW8RfsXHna6C18nxnfDAs7UMLKthgn",
  "key6": "4Q5QW3GP5FcBUCp1SSat9z9co4L35j72CT9Q9eiVPrQ3YnLYaKEsiqtXmTxXoCKRGD3LzDFi5i1H7H4HpTQTp89V",
  "key7": "2T2bqG6JsVqjsZUcVVpBKqUnexBuJA7GRJzkH1NCS17CAnbS6TuWToPmsbpTPnZdcMDLT6DJ3oeioeZbUeFyQaVC",
  "key8": "5cBESqCUdVicq1ZXoiCDGUUVTttuQ6akj8g9YaXK6eQgwgQvRHe79BvswAs6dmGc8tSwaigehkuVCQarQyGVCTho",
  "key9": "4Nvk38rKYFasmouq4wowPun5NLM5HuLmpGe9buYGz7wocDsQTH7qyNB5igDBwZqnFnMSCgK2oysA2LQKx7RSpP1G",
  "key10": "2fqkVHxVfBytZwCL5h9EUwXNwkFiDDc7wtzbqtModk23ftNptkQAHKCh6i9HsNaLs6Zk6ZwCEzHgZ7vjhscbSfqS",
  "key11": "5NmHrbim1cJCDhXdZYhMKZwQxj5Gw2JK9V5QF6444ii5dbeR5ApM7qD2m1RNsCsUcFovh1Nd9VhqAauuvHFLNjuw",
  "key12": "CsbfiuPikYPH1AErPNka6Gks9xb7JtdWjGQc2wNtSaQc5X7m3abC6vFahK9VmvuYPc35n9oScLLjmQX3jR2eNnx",
  "key13": "5ZtodwmYd7wSTYGVfH8BWX3z6x97aHfNnbz2nvFTfAS9NWQXMigi1X8dFdMrkCHrA32GvSaKjG4GrLrJ35uRKFfT",
  "key14": "gWDiHGuw6aSDUTVfwjwmrYKyX8RKShJzc31gJu3NA27BLHUvMNfeTZxmBd7tedGsKV73EgHjRFwQQmW8NS7ZeTT",
  "key15": "4hi6jUsG1Lk8xn9QXczjKKEtN45rg3MLa8G4NcQtgNFawDSkT9Z4ZswDU9hSsGfUQ8Kpe988h8hFdKJ2wkfMtw27",
  "key16": "W1a2nJHCXE1DepHBsxrLyWqEXfWBwRaJ44GKKyM5mXaw8JZMX5S4gdVYG2ky4jvA97CBAT3ocMfXsLV2qiWo7dD",
  "key17": "3P4TdxqQvFktiwqZ8YZNQezocq9FuLs25bnb53cB4vKCRMwamzjVN32sMt8gzz3XJjnHZdhzboeh6mjDc9ue3VD",
  "key18": "5KBBYLXd9Jf2ZB6VYWdz6H5BFZmQSdfCdLba4i1AMC5kkBaoFcf4dTFTm1qezutLZxTBovoJLg4FH1Jiwi33w953",
  "key19": "5tbEjbvkZmpSB43S6ZAf8BLjGFNrQ7rX7UUg7jDkcEjCDwAkoFRVKG63XfqVxoLe4MeBad4eoUieGSWTD8MnRUMB",
  "key20": "45P4j6THh9b61RfzS1fpLQ1B1avsu31kpNDrjuoZhCXoHyVCgVuSoTKVVcD6HeRNR2v5y7FDaTCWXaJfsMC21Hfx",
  "key21": "4Bkc6YuTTqyBDT83LkFUKXBeGmxQTxJP4BuMdyHgx4unVf3bXCLYFckYmEinQAMTgLcDGEtvFABGkaMwfjWyH4FM",
  "key22": "49LSDn7ZkZNu1sJsayMDpjd7TBXbKviAxYoJzujx8ydryyxD4fDQsEB6hYpu79ASwUH5ya9Df8r8o8N6YgWTYxVx",
  "key23": "snyAbD9eiDWFd2yDiDLQ1HNyY5spVSAXsgzhGjAoLotRsokXhLZCNqF7QWwQjnq7mtx1RuaA6R4D3ZxrpMUEYUj",
  "key24": "43GNaxMbZpCJBezTtiMTRJiTYD5J2GxV8WLU9cNQ5sFBG1FxV4cRn51nDiVzyPHeHaPrBFiEYkE5W5f8S2eRC8ze",
  "key25": "5Dk29PVYSKVefraL5wyNKLC14SunJFEX8PFJVbUbxdV8EqM5ZRz4DVp3h5X3AhSn3aQQzVe8ybDis6XREBqGH9Za",
  "key26": "sDjnPUv9uhS3cNFhdCR3CffGvX6xNGoE6ZX3pGfREAbDEq3saj39VJ9ZFbybQpmELPTdQqWeo2yS2SUfp5SFEvH",
  "key27": "Wis9doBYexTBQ25SXpebJ8XMDmNfaupXwsxL4sZALvuQveNj9tMQLNVPahPyxWZDJfDRX8JcftgMJrK5D664GsY",
  "key28": "51DCV4JjpuLhDyvJdyQpYgzHXExNKFkTNjiyNVvhiYtZxoDRa5rj4dfhqo78kLbhQrxtpEVLkFBr7WHQ9aVRMGqR",
  "key29": "f8Ki1fwggUFCg83yktM3N8GMLpv21PtnBkXASTqKzqBTwpsp5sNmv75CaQTbGB3vhPpFn3c1MEqTdj1n5PxmjY3",
  "key30": "GMegdv33PPaRxBpezxULRjYnkSvbq1ArcDp8nTpnTVuZskwq2LV9xdmhDihtzvhMzoG6q8pfF7XupVAtmgaTuzR",
  "key31": "4WmtmL92zz2BjeStUcPNjpRa1ED1eXcX4qKYhhNkazKNZjnZYUd79uj3XPaM38xo2v5CjYWFR463E131Qz92e4Pa",
  "key32": "18ekh372DzHsTpbU1tmM8P28mTJUuT7FDA9o8SKxdc7Xb49tXt3tKyyddiNM6VWKhBdier7GCxkVY3uneeCj8D5",
  "key33": "gM49wnaSdRFBuHitkiyvBH74iQcFiXApZ1Q4Ezb7PV17EiAjExdkVUV5z8KrogjbiKV7bHR9SMuXpRCSFSMGvGe"
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
