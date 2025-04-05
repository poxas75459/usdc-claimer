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
    "jKBQwybqBVikqfRkA6xHxyrbYtFtGpsqx9uQ7cJYeA9kY7Ahj42cWUpx984zUnk9LNqDzYoH2h8T4gBWCsmms1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5UhLox2FkFrGwtBjxEyhpgJmeHWj1iThJJiLgPirX6EqwiYVe1HS4ytZf57Y13cwPqToxSECb212XZfhVPymAJ",
  "key1": "49GhQXRqB9JEhgDvoSUwyhnZFBMZfxnNYn2u5XExQPTRhP4WwAG6WxpwotCvbZ6bY4z2GwE4juf9VppkqxfV6XwM",
  "key2": "4hSUGLVYmyYA9fD6prMK2LtvCdUEtMRc1P5KSVLFKCBGn2TNN39KkuwKqT9PYLvGsE1tDmrV8yXGK1ntUkgFizza",
  "key3": "5wxfSCjenn3BHaXVW95j9wtsiDDKRPuYBGovYigpLCGzHYguMaxGMN1WNSXxirKRzoH4BGRGbSAVSrUVdFVJtgDp",
  "key4": "3oPvAYtD6XS1J797z5roArNSx4Sq8pdxNa8eDCgEoFJpS6oqgLMBdeW1suiWhHAmSm9Jsq6fZhMwZ7RZhsnFspt7",
  "key5": "2dZmuwkLnff2wgbVL5MLZBs4f5nt5jU6JqUovVSMYRd5UcNojE2ZEEDVZc19Cz6vsdLWQ72jqcXZaatuDHjxz52J",
  "key6": "YDpbFV7J33TjytsSPoXz73eTHLvD3XTz3ZBTDxHKuWuMYQSt2D1pghNhQ4nXDHPre6gUNpbcgnFwATJXDCBSZNz",
  "key7": "52GLvbUD4SThEUW35EiSUS751KAD1qQh1AmLmGY1o6EV7dPD2EZHk9Fb2ewc5Ptu27N8bFYFPTPkxxG6DP99Hip3",
  "key8": "3mchmJwvfCZ5S8nohUfVcYHJCyAron3VJt9yVrqtiFVkUCV1CLtK8HMSmWQgVAS9n23p9n9MHToMw8FBUggP3SDE",
  "key9": "222Ch4XFVJZ69AGLFiWUnd53jiEojT9mfxscPcJcXhhazn8JgBi9PBGy9HvWRNssFjtNrw1wwU7QMv7iutLEJubx",
  "key10": "5rKiYtJ3xGqbBDjHk1hUB2aWDSUXyTrRup9HeynbjPH96oFxfKbb3XudXLcEUT3g3zL3fQcLz5Kf5nJN3Qtbr8M9",
  "key11": "VnNQY3s4VBHcb1jHuhcwwrvUJBh2eERcQUfyeoHBY9BdQw7Ye35LSrFtTZv8CZVapqLBE17cN4GyJ29PQe5s9Vj",
  "key12": "3PeBgxzBCSAvQPeyRagecBwqgjRgLnSiDvxQc78UUxDN4NbyrJMm3soU5KBJwkejJBWfC5EMqPzqLKpeX2kWEzQo",
  "key13": "36ANV3h6GCGUhjN5ZdzXhyu2JQiRuXXfxnJpxdXNYJGDAwkRKN6JPq2jn2x7EDD6En61PnKyLaN83yEWJYexNE5e",
  "key14": "2YkBcWU4oLTeBtnPzHKXTqnLppxxq2fUoDBEhkL2TqBxy9nEqjksHc5UJS4GttKPKdcG3yu94km8NLtdvhPhW8bS",
  "key15": "63dDAMYuPWMGpB9KAfFD4rcDywAhvaKUzGCYMjcfCZkDYHqi6UxSVNLZ6dPcebNywXV7mcXrik5bYYdAvpfG6nb7",
  "key16": "4JwG6YWsQ5HAL7CGmof53k8DSjcoNFxWPzCeW6HGN8rv7ZRMZbyGq31dovCdWUxj4Y8xmbcuKxGbPUegvMym6YW2",
  "key17": "3Aq7SmoqwkdRsctp2azzm6N2h7PMRmzuw4ZcHdtyEB3ZXx85q7yrqW9oxqh6DgFLpCavHQYWv1hVDiDuicjKM5vt",
  "key18": "EtNNuaMM1xkoaDwJD7D4eMx9aGYzzeDzSNfmE3mN5aCct7vaoURCqLw5b397soGLXEPqqpVS9SR9RLWJDAktXyg",
  "key19": "25UqmkW3bx6Vt323dGuntL82s5aSGbtAFoMQgecZaWDVtp5H9PR1yhFkXMcsrFBSyvqQHX3xKUWqQRo42K88MN7f",
  "key20": "h64UbBkQSMBBP3CK4S48vJw3DtDKbhTESxjTr6G8imxsERdEqZ2i92ApZKntTANhnxc4sZuu5VLoeDjTfSF7cf3",
  "key21": "3EmQ1iBiQqsrLamPMRmjMFSuBxbhjHGAAZKvG2BF6FoyUcPH674tX2ewC29Fb43qjshFvxEDFbE2UdsPsktrNhZF",
  "key22": "2ApNoUqEHNxeP4Lc9gCgZkfnuez4rC74jqSkJsgXUuNbu5dH53anSxK38N7oWTQNgeWaPHkvtdtUrqFrKUwMPJry",
  "key23": "2k59dpQr4A3U2zjUM81y22vnZJewQBmyFeew8iBawyjxEGFnvhqbv8bbr7QL8j5HwJUPZVRZuBBKoTkEVzK59PqH",
  "key24": "5ZEdnHQnavtRAxdGiHd71epfipfTufyaxPTPykEYozwn9okNWzPLK7sPSKbvrGAPL77nBSt5RJoKwRsckDrooRWG",
  "key25": "3KBKgyJq5739YeBwPuwmDmHvY2CJB4MyuxnTvbTBeiqNiVb5MqytyXFKSp9nRiJxfkejzcKp3K4SD9dTGyek4iw1",
  "key26": "3uHzDyZMstvncF3VXwKXtMXSQyzGY4dY9V8WextkF6iRvCccyu1Dzn8JS1eqc7vpboktffE2A7Nne4PwBUVgqsb7",
  "key27": "2azprWico5Xcyty3gVvfVS4cSwJCJZtRa6W2X37DAkzNEEcfY9oQA74HjouZ85TDkGapJqJNqk8qMd4FfwNbdjvE",
  "key28": "5XQtZwmoFcuid4KKPfchDotAWa8VYoVfGn7agyEUKqXng2jddVt4392ycFmKVnQAfaXo7o7zwvPEfJuogmwnR3KV",
  "key29": "4X8gR7JcBoyDVVAXqj4nZmtbZAvevNzcBYHVztYFcymvuPDLoq8bEZTBTkMKyp4Vk12MkuP3pm9VPpezVvG6Dcz5",
  "key30": "5QHtLbsTWvMgVUsMx7TAk1PLzRiApK6QY2t4Drb6ywNtq3GUtm79u4PpoTqCkSj72wqVjQBPuitKBBAX1B6hjPci",
  "key31": "5B3oxnm3Kv3oEaDcd7ddvZ54ga1iTxoyodBuTYHx5DB7GDHRqkBV5FiX1YVmBFqaW5rrS9BtE9bk3oSZ13iYFTmm",
  "key32": "5LKm7pRz7wJAGxBDvzr5DBf6BwL963W1YL8pFZrz977Tx4ZDaoxMtqmi3bqnTp9cchaRyvgrvpV5aCS2bkLZWoiG",
  "key33": "4CimQbXfy1DJGWaagMH28fSxiswdNiKQwWQrswRCxRQrmzj3iS6D8ZoeS144c57ExMRzGDjtcgUFgLzwT8xYeCxK",
  "key34": "2E1gDiBSsK4NboB6jLkcP4wSVWmvLuvx99Nioau91CNdBmU9ARSMCFKXyT4iZxioFHBrMGW1TCA5q7tjaTn4vnh5",
  "key35": "56YoLC1SkY5RT1PSdDYPSRkNFospPzUo55nnp6LsVoDfzVhYgfvSCDfU6RKVd7RpJXCRVUxkQKoWKWS3dGvqj4Rx",
  "key36": "hSXZTB8G6oYEB2BzstGjYycFpNskufgXvsz5i7EdYtaqKnACtcVSKC1QFdMrPUx461s3iZGbAhgwWA2qDoJeqJR",
  "key37": "2XoYh5t2ApvNKXApPvoEzvoFxU2DidvKq3QUKHkNeN7vJ96GMPXxeuzJ9DsEXhkhDepv2TdtjNQVEFbxDVjrMEV4",
  "key38": "4HDB7rwSphibegfdvxSitZ2EujL3rPdHFsnVE36XZLJKEL1ctMZYYfNKFpaBUKvG9GLoS5uyk5GkteUuycsBY483",
  "key39": "2k96mxnqfQ2g3TxJeCwQ2nkvRzWqxoRXwNCNVEUQj4gHh2BPhK7jnRhBH12YQRpq346XwdrkeA73ivQz1cLR6PrA",
  "key40": "4sz7JEBWyEv84APLMgZKZ3YHqH9K83gambCrR5mazPuGWWS6WjckWJe8evwC4WqNXxDguX4LwxCATCxAp6BeYqgV",
  "key41": "4s1sK3kjj5YiLmqo6jGNKbHVu2feSxPaLm3QQSgTdcZk5dcH2GNkteEMcNA1XEaoY9FaUPibe38GdMLq1sineUMc"
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
