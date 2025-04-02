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
    "43js4YpVFxs4sEdFmBm4ui2tBUi94r1hxsh73PzpaJNdMrNP2ghCfw7uGPMWiTX8woc219pMonoza9xFxazMWjGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sozwTgxyHJKgutVhHreWTvKTPjk8ghhTTenmkrSYDqBT713vQnpWFWQsH9qz663U1eb19DNNvSXdGTif4tAnK5M",
  "key1": "4DHSU2qvEgwWwTKHMgKRux2KzvpRtXSRY3TuukugzxqqHNJ864fZXULNCMjokq55CSCdhVW9QoZWqsQhJb37r8jp",
  "key2": "5R3HbkuzrmiL9DpMz6Fg91kzd7WWDsyvXK4hRixpXosMRATVRqYoENDByJyGMuuZNoyMDgzNhYUrfVdof8nBkupv",
  "key3": "3y5mJhCWxWhRQy48zXk3AjqmQeBY8fYTxQoGuu7MY8diJdFcrJ31AdncHPcqjR78SsTrjKDdoL4pPr3jsfUaa7Lv",
  "key4": "4pQX6jW2DEaN2V5MnVw8ieVZSUDCi66cdenAD85ADAH1e5RJpsWUaQTqsti5yGzoioELZgdFhSSDSFXwLsFWwfpc",
  "key5": "5kjDDFNXLq9KHmPV9aVpQ7K7jHs1TL3sFfKnS2E1qSUNzmgEbmkCuULjaxiP3BBS2zMaBVPrgin3yUQrYHKmZ5f7",
  "key6": "5R8NA9Cu3f3HHkY66ECWzdYjrTwJMvZwQSsFa3SRoFQLWdpLbbopVfpxV8cDDRcmQ6csMaPWVc9egfrPjYJMfqpV",
  "key7": "42ydrUF2aUxMdwqwB5dncGjxq8sDLD9JGWKier32xRQFdMUpAA3qejrvMtbVeKZwLLUSeA7zHd2rRyDVw7hQcHEq",
  "key8": "5eSRH212sp5kpxrjcBYxYyyXpDhpgbMGPViaSWak8pVh59qKSA8Eo1nvYHk56L4c2QEF2H58ogwYaddyvjZwZv5n",
  "key9": "25XbtiSXBL2D9ckBn1dYKJZi2HcGmkAub35CwjhRX4w478oZpPFnk53ZYzTsTb3NDg4hXAmPave9MnRSB76zuFM4",
  "key10": "aeWMV5igZRoLT4f9J8g512hz9RPBUuPu5qCmc6wm93GKryfXoJeLaVzcTd1Anu4wPhdCbsVST9q6JMF3vvQVZ3o",
  "key11": "4axfGgW2zxKUoZVkVPo3ZuaMPDPc86DPudhXon1TyYe74wm2yJpbcmkjyUxo4NmCpugd625fRFNBHhSkrEua2Gjd",
  "key12": "5m7FVBpQQLwYnQfy9sjKRANk1csQFCLok2UhLTzLcpch287zCq6Jpyc6iJoStGHk3AbQuS7yHfn3LvpeVYYETyf6",
  "key13": "4GGELhEJJmrsBtfKniC1rnPR2vN3VP2GFxhi2d9VWzzsLFapKPQ5wNejfs39vqKtcAhEcvTPxbYCM9CVAXQ9TjsN",
  "key14": "4xzWYjnufKi89axP5web16RMEZJhBqhS171Q7NnfrcrcEvLVMS2XvqA3NayZcuo6SUfCxFnPKt99Az8yDUQZfKWc",
  "key15": "3TjyPcZYMoi7yRDCoemDTxXVKME9t1cyZ8rzrDA79NvxwB7WGxeZxAdhhxfMxSCpkGfuwCgvkAqHTSpyHi3paDFU",
  "key16": "5jcfYUq8kSNgJ93ZsKWt7Sf7QnDW4naeroKru8xKev5XD6f9rPmhf6i3qj4vYXq2jSmHYw9YAdewGQMSLM8u2kMq",
  "key17": "2R5hwmSPUwA2MMqBWsBMog44zgftcH4HrBFsyHuiNLUQ3sfNduZvoTei92JgWaG41MrEi3UzyLJhP8Qioxsdv9Zb",
  "key18": "5fmehvcXgpp4a37fqCJQdnc9AWRncw584dXiWgNcaXo79seoLXGMQ51GUcuDhRCVsJNDM41iXErdre3UUb5ZWW8h",
  "key19": "3q6MsbRXqiXyTGjTHBUKTFVGxupbZohi1vF1tH8ZVNZsY8fKAPcF5YgBsVdvzgHtbA7ZiNBvt49HcDysvvVWiLRY",
  "key20": "662QRX8tBBq3qa6pdAvdnyjpF1Vgwv9YtYFBJKXRC8JgPMbbCQNCNzKFjT7KQ8ekQGMDr7FwU2vZhtroRnF88Q3",
  "key21": "44UKHnAMsjvLchk18A5P8tgBTsw9KPJ8g11PWQ4mT7be5uBQPpfvpSAN66isPt9efsGSJsipgD3iRjSc7E79KX2D",
  "key22": "5X3sKAWU1MctVPoD89LofsG9GcEYPUhW7bs1wbDgZgVVv4TwKerWwsxSoUf5XWUzV3XiATZ3dZuDNFnAay5frS3S",
  "key23": "3rArfoDeKuJPdREEF4L98nDB8Lis9ih6urznL6eDC3XLYZAqxA4ZnFFHCXRA9TwAugsYQThpUj5ah4tUVwaFJuZi",
  "key24": "2FbPzpm7RqaiQJeWuzQUNwPUzuewyqN9zSEZ7GTSejQFfLQVXy9Pn3BoieBmF1gB44ykiD7YeYHSKACfCSH9T7jQ",
  "key25": "2iwRDw7uBTdaAP83Pw7LZzxKBynXVStoNn7r5WeMUNryiq3KjxD3DLG9UAdTjRdpGkLkVqm8jT4p87e1uHNoCzZJ",
  "key26": "58XVKXnFRmfHsfdFteBXvygLcrXZhnCNGxircbT8UCvPZU6wct7Ph9s7B6c1yVdj9vJLTBXKEDZL5pnpT5ghkwxZ",
  "key27": "3MQW7CS7aqe1m531yvKvivwmjNFJ27GkypgYKn6wWGztMgWvQ1pf6HhMLCV4mx7qX1njLHB2XzjZ18sVhj4VaMmt",
  "key28": "4bkZorKeN6WZjhV6xVfu8FcPcSZk5njeAPhTbMmEWFXBrQhtdgiD494J1rteZ7HgrREeHJCi11vHXt2ZYK3PHrcP",
  "key29": "52Vqnyazf3KX1NfnNCAoDLAAK5KrsUErLXmEwXF9mT4NLNm6Gf3H7TWDeUGrGgMRjiNQXiBTiYJxLxmAuqxfA9tV",
  "key30": "4tHAXz1Mhaj2SPmL7Ck765aaJvGNYWopHkZ6qQpCCSYEMQqS9NT7BsadN7sMtfDDEon9tofoVgfSLDrHnQDAgEuJ",
  "key31": "26HNWKLAYin4jCsVNgrUveB7JkZdJbPdKnRuN6XGEsZGBD45A3Ej4VncCEnn9U5k3t8XQigqRPJQcXBXNGPPnChC",
  "key32": "3ERKdyc3JTKj1SLaN7LRmf1ndi7uNUdw6jKnsU9Vdp9yzSX5H9NzZPbtJ3rdxjFxy195xXm9Q6isVAaFVabw7hR2",
  "key33": "uD3iE1FHgUGpLLzftaJhivsbxsBBMqRruRamYTtS4Bvk2JvTbm1GSjPYAXKVby9ZrnjR2odNVrZx7mupLCc6A1n",
  "key34": "4hUXQVDZ8TDNcxULoQbFnkP3Qak5oVNp9BqFZXKGx5NcRXsXDRnsAwrYoANhqhwJKY4aYa5DmyzgLmkoPxA5BRyz",
  "key35": "iyiJr21Ng2wqaswsfMx8GbFZkLhW3E1j4iDC2E68hxCZg4Y4xfGaZzTXmhmFnA1HXEUhQsABZyEcR2216pwZ81f",
  "key36": "4evrJrLxZPai4DP2QhYbmMxcRxgQkGN1YSRTVaHzYJDHRrohRfPTdQ8HnsNf3goA2nn43QboK1KALVv24ZL5NJSH",
  "key37": "51raunx5gtLipUgY4WrggZCj9XLa7xcfBcYyH7C2n6HdmThfRjgpHK7RdCwxHWwVTbtL5cvFfP6fMpKQ2Wtys16o",
  "key38": "2HUM6WvjRo85QKL3TGf7hpGEyDsDgEFhDigpBroQFkPSPJaD9F8fnf642HKnSugtNUcbvDMhrZTfg34tg3s97Pzo",
  "key39": "4Nw61wGA21s58qmDdDJqAuzAN46p1j9aYHrDo3DF2yjQjVhADub78Fftkm8C2GhDGeusVqocjqwaedy2Y56pgHR7"
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
