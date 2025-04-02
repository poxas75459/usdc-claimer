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
    "4gMWPBh7D4R79Ribb3Jhh3NrE96af47PtqrHSUMXt44toujepXhKVn1MSJ72B4Fgo41qwqXpsZy2xkzmJYBG4xmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6N5N2uWrrK7cYpqt4GhaFsG9oezQG3PhSfimqXPirYjyzQSSDQWhiAEjXYibmXCYw4pQAvDvPPkZWFrpvNGy1Z",
  "key1": "4oygAn1mSTJmJW1X8YttCLcWgkc8w2KP5yYLpbzUjdeBG9z4LkQYSvX532FRmKKjwJvGwtEF4f1ttvLqUt15rTq5",
  "key2": "3hvhpUwakReBXa4p7EMTaYXFUkqiCY4oDCCo44b5RhSSftNArYdpBcziUstUEAkmW6R7QCbsXZpBavdeD4A2aNJQ",
  "key3": "iEjAd15FpbQoXxQ4PXPd49p69VkHPyzGYowAorKeaoE6CQaGTmFS22o1hTwf4Qx5QwbexS6DbdpxWRSDbXEG4Zo",
  "key4": "2UTGFiFuXvWPvsvw38fBdcPbZurEPUaufAT3wL7BzvWQD3d6yERVKFdPWNGxbtkqJwA4AhRJbYUYHf2Ub5Z6ZWUT",
  "key5": "27PbxuHVaG4u9xKdNa3JighmaQK2c5nsd6By7zkSP9CnGVQavGdCrBR7bRDLEr2LspAEJJY9FsNa2is2cJgYboaR",
  "key6": "5t1ZbJ2LfbAFzNoyfEYSCNPobWkdmyUgodkrWgSMWUDn2xTBSwuWrMX5xoaZmjW1FzSUy54LDuhNHnEC2rHkSHoz",
  "key7": "cZDFRZgTkVoKMKhsCLRdKDg9Yxscng5BwsMBH1KaYbnHNezcLnpv6Z9prQHk2AS4xpBuVzucKuWTEKxeLyNfjmq",
  "key8": "5t1B7re3xcyi5gpewpwKUYHYZBbExGDoNDQNoSiUye35tk4TA84N1QLHhnbgrqC6kZMWovpTheFLwuj9LtnFx2Vd",
  "key9": "WkBxGLbHLc6RNaazH1k1hBjEZYEJ8AkJnUezYFqPwxMpvacaKnnf5ZKaJumDo5GeDMdwR1SNVkJycV1giNqafvC",
  "key10": "3EWrqSfPS1mmskfA4PUo9AyiRLbeeyC7JNVoMWbAzJXZbzfkTAPo3UTL1YDByTGykajydvunFdMdGEFyq35SZgvx",
  "key11": "5M14LM1fQRWSv86kESAEsisYGpzhwqvm4TJYQSYi7cDtUAnGyBKzswpdZfkXNkuKAdXtEpL17LVommnyMj7R6QxG",
  "key12": "3SfCTLpGtEV5gUb89SSnTqmWk9TddhwA2WTxD1ts5xJT8CWPaEVNn4cdCvrCzDZr7iLrpHtQHy8eTQLtvcVWyvDs",
  "key13": "3cnCtzSbzRLPwv6XjN87a5BoP5w67EDi3FBWNSEckF7wEDnbj6T9aCGhNjnM9cXwkQmqnMXT4U78Wttx24gYi9Lp",
  "key14": "otcKkEs1vpUaHcoaTqrFqqtd3fGQYLpgS5Dtorzj5eZju7g94ori9zTkJJKorALDusAu1HUdmcQJ2sXoZ7URWSt",
  "key15": "2Xg2V5kw3nJ9ohmSzB2x2szimCb5q5r3qdFUvgbchzQ8P74zw2tjY3fkuBmf9DTH5gtyz5j26haXQrGVCEugGVdU",
  "key16": "4xXpokvkRkxBERBBf9nB28h3AeFQRuHAA6kiWQdWCLa547aGuLtsz2ZfxGzC3ufUeYDWfSVmCyB3SisSoumMXDuP",
  "key17": "fnav3547JnY3TQ2qx5xGKjboepSotu6mnHkh1KymQAtbLeDUupujr41cvzTpoXdhAyoqEmNcbKZjyg1qHnkAdNQ",
  "key18": "EwGv4swdgcLJuF9pMDf3UhNJJwur72Y13yKvDGS6QwsJ4t4MPoNj9kbFUVm8JkRaSUrjtHGhfbMyyjQ9ztSg8FE",
  "key19": "2adRExjS9FkiH4F6u1JRmWRSpWGK2wzkTymCu7fB48Ei8us4nvWqGHQ7f8zQd32edMscMKuRVwDGeSBncKd1DRnS",
  "key20": "8tg8LUAQVvN6W4JXqVeEoyM6hqBRgJx87F8LVR8jN6ijZpQtM8jVnHknvABDhDfSKyxFsbJpkg3sSoUWVi1pxRv",
  "key21": "7dCpFjN949i5h8Xa38GRaHGEdJWs8uJ7g7kbe78FMLN2Fj4zknEWGFhrDUCQC2TYwwHsACE8QDGhRHKGfiQJNcp",
  "key22": "28QLYVZKK4bSYZDyHB7FuSDq45ikeVCtR52vTp2LS5hM1MxASwAdUCAuokrTdjL6CVbnRTosHiLYU9GoR3We7NfE",
  "key23": "31WAzKF3Y2ANGDTu37YBPQXjypK3vhH79qAqBGKnFi8TvZrHzXC2Gfe7GqCfE5FXUqcAEczXQbziuHZyLew5Ufrh",
  "key24": "66o4vuC9DY6apeUUi36Yyr8Rb1CPY5eKn6XhwtSEPdwJMC2APaWYmmcBvxFFXgiBG3xjT2X1dKNv4BQoCBmiAUnM",
  "key25": "3pdeKPLd74CzPTqGZEBTtKw1AiC19pZcofHMHDgS8i2pGpxeg2vqvqgckbZZnUGf6VcnvPCyYGMcpNQxEPfpsKwR",
  "key26": "edNsC1ZfEa7Wrr1iWcpm7MxyZBacLSKQ1nSVDu1dy9GCWebv9KbUc4UjBM18TAYStxttbDUihJ72tcsPcqZmhhv",
  "key27": "esxs9Tz3UPTDUS3gNnuk7PRuxYaeN5rYrHWjk9r8J9P6CA4oWXfjuEU7R4Yn4Qh5drtnxEZpsXgUL2PKoybEgu5",
  "key28": "5dyiQsHpQzmFnVSsVxcyuJcsXTUiVBXgL4HhiKSQro2bA63rjjZR3cPVuTz13Zw73aQ2e1g1CNUC8koWQGDmExpg",
  "key29": "2E83yzpnz8W4FJVfDWYG8MZdvdYaz4jiswPwPG7qYWG3D76s9cjKR85UfjyCxnSAngUzs8DJ4HxFNxs23LNKLwuF",
  "key30": "4VHN9cFmAWde9TmLUDhJ5y1kA9fDzZjLmD47uY5nFjd44qEqLjCfzsU2MvQoHcPg9or829KBak8Dxx3dmx98fRQs",
  "key31": "4T8M6g4SpaGqBewizTVrvKyTE71LMiho5LzaQFTMNReALxsMeNg8C8rGwKu34HdfgonStZRCMXW2ycwpFS9AbrG7",
  "key32": "4tR5MJ1YcJ8AA8n3JahSr5GrH9C7EXmpthi4ZGe65r73kUUGtyFWVBib8wEbnnP9cBVS7PUGx3ky4g5m8pwvMus6",
  "key33": "281RKkWZGFq1ECQSsTchC4Zwnb4C6b8zUxNqnPyoHiXuG6uaZpnUkn8KFUtd7nuWmRYo2nRym5Gz11fqeN4GkvPA",
  "key34": "5aTk4yNfW7vp6eF734FXydnEeaSuqcVA5JyNeQgSpga84yqEevPdvA9zQ4j1gVpjQm9AAorRhoSgzMinkEtD3VAm",
  "key35": "422UjXgMeHsAfncGrzKa2RHLW8Rts2JSHknTte25LBHqZzgJdQBAHb3GHPD8nLPAw5JUTaqZeiEf7f7eKmgcY66T",
  "key36": "4vueMC2mWU8bNxhmDpfVhrxMbxX43JyJGt9R6YRdgwZ2BWY5k6pUVccoL7RSytPmqTKfSppMeXPuNK9E5w8B4K3T",
  "key37": "3yfasSdvz5tB6BcntBQ58Gf2kHnrxZ6FiAt1SKzQaHcy23NcPpm23JpY6N9g6Qk31uDkZ3kyNyG53ZQFhU7X9UBP",
  "key38": "4UAprUDPGuLD4M2nNy1AGypeejSKC74Bz1zf72LxFkpUZFWRKhPTfAf9wTpTD2Ls424T2GeJtfw64RtaWdr7ypKC",
  "key39": "Xvyt1t2HwjUoFqRhR6SaktU3tEUi364QdvcaPpFWr28t7x4dgjaX2bipsnaPmSwijvRcjLJUjvYj8Ws4wc114HB",
  "key40": "38LUfUASVEQPW9o9tTEzMJ6fXS3ytxxeQA3jAW1yfXLu4FBHWYZhVcaoAqDaiiLPn9EEtdiaNSG9dCB3S87nwF3C",
  "key41": "2A88GHQYobzG9isFZQgWAYJswSw6y12eUAeZHiFG1HTaFjxqx874MKvfmCHqgMNQyHjfzB9JZPZrbsiLpCCgnkti",
  "key42": "3UxJYrN5MAFp4NKrQ2ydvvfvcRt7phFn3geACTDAn45kBn8aKEVo5h4pjeAB3yNbDM42iadkHvShBrQ1RQeM5doY",
  "key43": "5SRmfiYRAXvHWhAsgwRNnzpTeTupFdEFJA2xFCpsWC7YTYCEp6FdL7dm1RepwAoHQq4Qaj8E1ci5KZPWwkBA4Ji9",
  "key44": "43yAj1XuZ65gqXeXDbf2vygpwMQj5QAD3oCBP4VpQBqGeA8XELSJCALkKUgdxUSjzKnQaPDGHXTBn17pkqcoiskh",
  "key45": "3i4vsiPvXANSvCFZH2UunM43HsszgdW9yASUkSnBVpKBpzBkHeoqRWMWV1wXUZuM9Yso1Wcjus4QiLRa67YPGm4c",
  "key46": "2rLxHvdjcZhJXqJDXwZpRQSrRu1oAszMdFBdMLcYVVFaVogSPZjvfy97aNgPQZp55nezoqmKacfxNYUwWp3CJRM3"
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
