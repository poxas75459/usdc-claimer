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
    "3Udij36262fSjYWEFXq54jXKxkrULEZgWC6ggRsvEUuf4sod6axuFW112mSvMdo2EG5ftVzL37kxZpNMadQAEdMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A63skru82UWZa5EG5iHiqWGMJpvSdYx5xQk522C7niGeD78SJTYajwot6zU6y98E1YUK26CXGDiBuE6s6t2uiCx",
  "key1": "2s24zUinpdEgcd9Bvx7jt848ZNeJo5NaKzCfSzrCEh8qp82E73ZKLwEMYS1oktvXabxVrc6FmedAdRTr6p6Bs3jL",
  "key2": "5bQRsZymL4iBVGE1gLivKVpFLidcgZuxXnpsqyBDbxdvukM4dbWKp5nq2DxXnKpxNJ9aRfTh2dYWiBGMn5xcV7yt",
  "key3": "2kjZq6L97ppo73KYP6toSbwa9vWnJo46U3SDNTEqnECRsepXNWU9rBizoHhDKWsk4kTg61CVV29vcwbg5ZQMjH6b",
  "key4": "x6gVuJAnAmJ1dYdegtZCrwEyJN4SasTfwGT74QFgNR6Nue7wfbMYpnxwtTksAWebNkeeUnLA7agjzmvwsoYnxU4",
  "key5": "4u9JMu6nE2LLbSrHvTdTzxmnxHBqQm43WRE5yHYhekKgn6vjnwkwqTVC1nmyyNmPWa2ufBECDn176f6sbXjK5aVw",
  "key6": "4prgn7xHcfPLMHZjqA9yn5G3mZp4X9DxspMGE119STnKHQpBAPuiLwbYmKA7D47tL4eeHdPqva1CHvxUPZDPaTJb",
  "key7": "4h51U7ydH6GMm3HM6cWuAbgKL8BciGyUHqnfXn3pswboeXtnWtPYDwFvRjaMhKN1LDeQGiW4XEziusXxbLP98uTv",
  "key8": "K97HrgqnL2RtgCQofhMqGtbnBVChJnBwa73NzpDo3BUxQvDT7RNaJ4982Ru6HDuWgsRUtYvzh6k1Qg5f7Y6aCce",
  "key9": "46RUWh7KPYYALBLVg37HMVvSZirzERifwixw1vKxLw7jU2treSnUcvtVZxLaGqxRNiojAySKgCUhHKeFqkpWkgEG",
  "key10": "3pG1B3nN6eB6R3goBevi8EyqsB9QpSzWWQVEva1t47NM5dH7grjXqadD1VXR3yHCvAxisCPNrhpqHXdLXmwM1Mqc",
  "key11": "h4nHtTY96K2vUwKWtbK8HfGerFG8yjj2DRPER4JppsdEKxmGQq2QZSRGME2qnEFJMeT6YRPqJNtnNzc4BRQmJy7",
  "key12": "27m4DZZTFRhTKRQcxagaC6zJ9WpjZfPT8rpwYTnq9sP3PHZQs6oUE6hCg7jYYH2MwrH1M3cuR9vzDmr3YkvZWDCG",
  "key13": "kQjtDQX9xfTVXBR6XM8KafSyhirtyXdemCpVNM7AwATkGZXsForxTqeA8D3jVQjKszx8GrcMstd3BGvxMkrmfGA",
  "key14": "2gdjJi784AFfWNNuR2iyTQ5FVecDGCnei81V4Ns9AGjTe5ysfy71FrQac1zqqynqGMKDA4L378eo3kdV8nP1M6Qs",
  "key15": "5dLDCQ1BsuLhnakUdEAm1xeztZY8zWkDzPkrtxbaDeFqZNeA19CRbzXY7hK8YRAD9fCWVcYw6YjabNteTB1JQHSb",
  "key16": "3fTaM5bFxjYQythPN2V3jiw5LnJY7qFcLg3gj8NMwXbwfKHs2Seqg8Tdg12UK7TWphb2i4QxESh6NdVxLwWvixgk",
  "key17": "LMu1Y77PV7TcyFtG9ERE2cZXBb1HFbePaTz75BoStRtKan3MBvNW9qydvycG38CMs4p1jC4JZufbVpvgF8tiCza",
  "key18": "4kTicGi1Qx3ETWdDmYeitjcifvghHhiuSrtU7gndtMurXEZa1qNFXguB4MwfEqbc12wMtgJoz3BXhKAFZfbPLUZH",
  "key19": "4ThC1sGa7fx8bYCFXpwVYWmQGqZ95Gog5CNtAQSUemqXarg13GN4gkmfyJppdRM1G5sxGMZwVDckS3TQUDeba2Zi",
  "key20": "52oA6DvwavKac7yDAZYwcGHCcj8DPhq4566xG1gjix5FyDE4bUEdCPyoGFWcNobyZJNft5TSatrHy4yPXAjUqQTj",
  "key21": "QojEBfETy1XFnEGHYVdqpPh2sa5vRW85VXWyixLSz6sVigSV2BwP3BmygpVt13C9rM4hbhHcz798Zy2zvDxTWrp",
  "key22": "3LsYHUSZQsxQc6QrezPudTekaH7ZQ5FYRXMYQYR92yn9E8vzuEgzRa83gVLKnnybP8pXqEmJD4jWrX34yLtfwTeJ",
  "key23": "5sZdjAHZ6wpK2Qx1yy7RkqoVLmyTNk1AQR4ZFdmLzr8B38BqEPqYmHawRFECCSeAd7fhuopMdNFuRapzqTT8WrUg",
  "key24": "3npLVKwgF53wDBrnNrHRtbCRJAVKUWeqWZy2kh4EvuCQ1Lt4EaWwB6gLkZBEJV5X5Evp8UDWK7zYLNbBTavDNTWE",
  "key25": "3WHFYTXqNesy92GgKNgEFyJP2BygDV7QCpgLKVM2ZTPt1gjdD5t55NEcxD366dNxzEmknnjZgZgFQph433zUdL3k",
  "key26": "2fF2icXF57KPvwdJvifksrNypQ2gsiHJHgrnhxNsz4Yk2sEBEuJW5tq1ovacBCrraX76uScge2eXoYJAFiDm1HwF",
  "key27": "4Eehc3yWhTk299jkhCrFLZ6dzvk12YfmPNmXYNXSqsAW3y9Hq8xtkkLvLLushc6C9bEvPLz8ndGFGzLusfScDJxd",
  "key28": "3Lb8c7srQihDvdn6MnFUY9qCgu2v5YXBWNAhG9sV4EV6JwM7Nw9PERsbPyG4Dyc69BJx2TLN5DLDWVgXHGRH8z8s",
  "key29": "bFMvJPefLvFZCwbdyaZJ8RgQKzvo3Q2fazM6t9ZHF2cUBHr5YeyrES721CGr1CJ2zEE88QSLgYFzkect1cj8C4u",
  "key30": "5SbUPcXdxn1rXHJJN2pCN85kAexuMjrtdXjRvR9SsGXsbPnqnoVZdRv21XWT5A44A8BhfjeeEiRhxtaesGGHWPD8",
  "key31": "4V7Y2WqzKmo1AUdWpim3pAgUwC9sFrZVfT7kabSuqfXgBiHGv58aj4Ai5EnTAv4qj5VGU2cg9qtrYLTzD2Wt5Wtt"
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
