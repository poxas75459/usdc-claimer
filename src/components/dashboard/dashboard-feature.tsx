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
    "j8E21BVRv6i8jiDTak2AbJc2FttgsmD1fpyySain7cxdjXG97vGZn2XY8dRMcsGWHL3uXVUZ41qNDa741vFJQ6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crkprGKcExqfuXJWBa2N1aWqZQ8TBjQBKJAEu6prJkW33uWbkiVUPRp3q3QvfrESJa7gNCgbwm3KtkVuNruda2h",
  "key1": "2niFTYDb9YF88tcsd3fVLAzgbH6ckN6HNsQ7PJWFnZF3zT46Atp4Qc2BWR7Uw5ti84B99crRkndVuAXdjmpjDbj9",
  "key2": "5STuK1zmUdt9BJ3QLZrH97m5umzqyBfdLm3BKusJBd6RQrDipk5zPtMyTikzuJy1iocWC949ZPqcjuYgAMkHoY7C",
  "key3": "337wJVmB2bbdULD6KzpsdvV6oWPycAjy33gKCDz3BDLitfqUD5XVC9CqbToZY2EZsLeYGBgdKBpkoa6r4YbDEu5G",
  "key4": "5iuR6zKAJ5ARLvdFC7EudGsHfyZgkq23mGs5NtZq4UnXz4cNLvZR1AVdZRUgRZLs4ysK4YouG4DsxARecrhKBkp1",
  "key5": "3eE5WCzfSHK2ermuf5x1nGH6ammHWhw79MCyAtczZnFq3DAMtor1Ty7QokFiTJLMXRRorocq9iWC9GJFaf8NkYf7",
  "key6": "59rNn9djnT1QDfjdBR9HoLX3Npv93q5yv6VgLDnEQjBeBz99HAzrZ2tmqSPrTcXAaquRZs2tP2hVVeJukhDGpUje",
  "key7": "37cxH4hxU6WP1DxEK8yP4Ei2LeTZaMdee9CL1qSzTHPqaTrv4Uo2Spn2wxyqQuRFCEhyzU1LvgVNym9VjLKnwDmm",
  "key8": "5hMcVdf2KHiuVa9pvumB19uwLVjtdxF7CPwLEi1Qj69maxmQwAQRZ36nafSXy1UorCSbxw149C3CQqhhPjqSGZ82",
  "key9": "62bzfoaz81RvivnvbJHsdbvM3UrKcKWiAJqhDZmV7XmXsHcwg5xaetskNJMLq53b7kPA4pJAAhj2FvQPnSm4CVMZ",
  "key10": "2YRF1FNuDJ8Ge2DNzVQ3UrQq2b6Qa9spA28hLg6uMDrguqQ9eFoeHWS1eKXEcUsn9Q9XaeynXxc86nKdsm733acq",
  "key11": "3Wa2Xa4gfgHKkXTpw9uAp8K1ptPjdwU5FvazzKkBxxku31NqzKohvMoqYfrffK6CxzwhWP3L1BWqNgscdktfQsjM",
  "key12": "42oXUmqV6haXArKDHn2hNdyiQdVBrSECjLq4utVd6r9oxfBPGUh25BGuUnj3CBQJH2yyhc7pNBDeh97fvZeCgwez",
  "key13": "5q2SWmRGmMLQgBKf9WWQqichwi8UgiwZCkP9TPuvWB9FQaN5FwYhktLXsD2kFW1gMnc5E9TEYkNq2P5WpdmUv8ea",
  "key14": "2gedV7zd58bCmoXdGKFk9qdtLRyKnF3XMbhQi3k1a2qfPKGp8XtfJRvW75YUMkRH5XH1oZ2DvxQ1hikAMn6wVKPE",
  "key15": "5oLt6NacoE74eLH7duqb4TSEKDCJRsZsS6XGCNfK3bjKnZM3wAjWyLZUb7vHvodvjDQKPrsLZLt2YWeCkhxgFHjx",
  "key16": "49SDKoj2dCHskaCvHaDuak8VoAAq2o56i3Kowqkj9tHURoFTEEUaPcuh9DiEmqtsAA7qooC8cyb5FNKR9oSqU31Z",
  "key17": "4hXUKCQULgEWxtwPNDLXVXS5N8N5VQBy7CSU7ZFTxsR8NZHiPswasSSbhPgCV7EvA7fByQ41hDGdYFoYCgzj5un4",
  "key18": "4z6hXHCMP6h5zhCW8SdcSegvXiBr37q7wSaXxKtCfXs9cHHfS1xWCwHwyviEiZYXFs4wa61UkBHcRqwf741zPEpJ",
  "key19": "4SzyNU5cvvz5TuV9TyjaZLeXHgTC8zAGmU54zqmWBUUASyuXHarR1jBaKP4ZY9ffTHbfAiarVuS4dFztEE8ykz1P",
  "key20": "2mT6qaGN9fpVBBGDtaswuYT9J1HtdUyfAQjMgWRf9EkkSDcenwnbd1wKwkpMrKdxopbYVaXZK78RxFPTLFgPcaXW",
  "key21": "3rT88ZdZKyGeNopNzxXAgAA7eVTL1kZh9J532Li8ovA1bwBtfmZrQRcP1HvUewLzCye6QCBGTyhZXk4y4Tc2g8QS",
  "key22": "axLMsoaLfMXGPeV1Mtm15yvYwydBthVuGkN98XyBQTkr246vf2Fj9vwqpgkSFamvG16XVs8ELo5VgkpojjottRs",
  "key23": "6S8ZfoTjAfXZ3MCEYMjEHp4jAnbnuK7dCeosrbcZv6WGkNBbxqCdFkLqGG2sT75Yyk7MURfSgWZ2H6UMQBg5FL5",
  "key24": "3NDjhdXq2naboYtfynKGnY5Z46kQXhht3MKdRP6gwwwKLWkb1p8Ri4qUAEzE3j7JH5azdKGoLFLmRuSmDvdK8Jds",
  "key25": "3823q6JETaXH8BDTMfJuDFMnxMHNqV1uVgkRkNA4bWBWQhuXUdF7PF1ib65zKzAvM36Fd6s4kWYvzg1Fzj25YSiU",
  "key26": "5TtfVaNtzkfWvEsijcoGqZ4CKwzdiN2ZvdcHfuzejEPS5sVrryWT1q8yVWHexJLo3q8149bxUXD5no9L5rCjs2TT",
  "key27": "8WYCiACXn799XoDei9gPRVUGmgdit9imZPK7Tcv8XCtWZgpNJmXDD3RbSkPbUVYCnFWojE68Muru4ej2tGVBtNX",
  "key28": "3tzTDdcJ1h1DnfAVz5innY1cXpC6P1vfHSUkPFEwTipcNqon2XNqo4ZniJNJ4FSQAYta2dSJSMLYSSfK5M26jdWG",
  "key29": "425RZwX8DxvchsT1oVznxJkHtsS1m7vEkaJKGiHyLrbrWxxuSdX4SbirUwTDAMhpJVhPLepfhdvtHWdJs35JmhwL",
  "key30": "2cVp2QozQijJp5eyWQhoUtRcSL3yn9HTtHD77kqLnrKRbnYnGwwqbbUPyuQ5vG5YH2ZTELxr4VVmEHFw3zShBQVm",
  "key31": "4HorEdxUjR6AUMoTL4TArQdMN1pPQXTdvBTETgyY5FjHyavTDR51sTTLUNGTVZ8oPkU19cXuiP1Vdj6JgRRNkTwf",
  "key32": "65ri8yBZzSGWU7Cda1mhgTGFWDUPyUxLUz5aexU5MBJAjScLoDF2nQ3R7CJvNmq28pxrUqqAJy83LDn35u6eX97k",
  "key33": "28J5xNiLCQjfhHcPf2JApCuhtL7zzBByHE28Bd8vV3f5QKA4dWVyhZGcR7pTzh78byeYxVmYRWgCGDEbcyWahhEm",
  "key34": "4qBmkyndHNbbLzs71krrYcTc1ydyaPuDuQyNRbj7qHcjPTKSK6635VeXRFsQdByn6ZfSKE8xjQzDzHdpWvbAnHSa",
  "key35": "46LPAXjQENZgccdX68wyMtPD3oC4K18d6q8JD6GDLxPvLC34jiTR3kU9xWCYZzsJFitk72SN1xswfeEqWt6QGUBy",
  "key36": "1oxDXrFv37uAKz7zhzmvk2uiEhxqfkpNpo9nZM7YaZW6C1UBwAyjXBp7g41r9nLcq5GXirPj38asG9vnQX5V8te",
  "key37": "4T2AjhikxcmLhUn6BK6bMKDhwmJjMbjkw9d3H18ADGZvLhQrwevbejWwBsHMcMp96vYrbeWejVxe2G1PL2XLfsLh",
  "key38": "4yR6UjDN5UUBirQ6WWkaXkAYDasRUUCcYjbqt7kH1JGDT9wYegmRsAsquTqWuEzBqYUiBDWn3v1qCrBSGqG8avFV",
  "key39": "48v2zJYm2nNVLYPSjzZ6LP6bAsaEzi3a8XfRsQnHwFyQTxr6CGK3br2cwkVfH6F5toz8cQ11bzZrPezcqAuh4WWp",
  "key40": "4mymzQ2jXzzyCNHaZH5HQFyRgy6L5QEwQUbdxHK3Tu32zkLf1MufNsGaFq4rpDtc9qN5dE5hTcLJg8KK3c5qqnzv",
  "key41": "5R5XgUXJhpx9cMsVTAzUtCzcU5PvjWAnvXmT2qU1KzYrvnMe51Xr5Co3UT52x3gXYgcqXqpEwprvRjG216hTXJRD",
  "key42": "67QMeomcezPt5wDdCgBPL3TSmQh7Y2UnXU7nmSCPgqyU44BT8Y365oLFcLDWj7nRg95nNFnMnFyYfR5nGdiExfsz",
  "key43": "hcpeXBxcR6J1HYqyi1UsPSadAovwrcYaiWrMR8HCcMeW8cz8dWUVzu9zeFqTrWg11GMqtJTuw3vm8e835qj6Fvy"
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
