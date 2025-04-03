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
    "uBkKNsGKPN1uKwGd9vP4mvgNxY4Cjx3cshq6jEoQp9qNdhFKVWGv7czVoSVetw7tVdiEsd9dC8swAu3ZCCMVq8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijvYXDsjwvTFvgYnTXQf1ErGCQQLniNkpEjvF4dwfEEr5eVgC8LybW1d4h576852tmXr55gKeN8aufswtYEpYPe",
  "key1": "3nRH8H7XzwGoaVsTPYhDssfSTofqjTk3xfLt3uaG5nv7b6D2Vqdk9gSyYsMskxMX5yPBRbaJVAgWvgeP5sQfZniz",
  "key2": "4f1Y57HYN6i8xx5WrC8nEwf2AEWaxdStw7MMeDGWpgPQ9YfxPRpTeEDnHpamYQUMmcpkAeTVfn8FGVC4fBe7zgLd",
  "key3": "4qDTK3Ej4HLeX3GJg55WS2LXy3j9ERSUajyJPnBM6mGMCSKxaCoJSFgR5bXCQqiCGEfAvG3ixbnCBtY8FugbEPZ3",
  "key4": "3E5EqCktyPW5igWsUW5qBG4ta2XFGRNrBT3htcHjEd5Wg6qGGFSszBK5zK7FqvhFyNj6ijDem1hvUd3zD2dhNSMe",
  "key5": "2bwuBCsHrsN7ShJxStqEwyhcpeoYZ8RnTQqateKPsKaUvL54LpmMgKXGSxcUR1hvEt97Q3SzDjys8vPajpprcaT4",
  "key6": "u4x7cyz7SwTvfJF9zD2n7HMGFHiHTHFkckdRwqRMiZeUpHit8jBxvqEDMvkSAQGj8dW6rQdWovfLJ8kXfisjdYx",
  "key7": "2j5JEHTEL9QPuMJwhpWqMwG5dVqBBoCZmRJ2oZ4kst5r5MnCKxNVQJ7o8RmBgK2TuBYht8Z4qwvhfq5kNbRgCRgJ",
  "key8": "4wusKTKzkVps31gtdVWN9Qwc8EL7nZZuXDhrV9XAKsUwFphY1k3WPinzmuXnJpNYF23BSwCLsLj2LPD2iroigjDJ",
  "key9": "5omQefbeATdW2VA2N5J6f73wHCG2uxYYEMhoBHk1JFXNtkdweawD9fviNSZg4hx9scCSLo79NbpQDBaqurf2uXs1",
  "key10": "4cnTbNhvteWbmBhYgjhxMAyfmH7xyXy2QqTVzyWpWt6zT9QBx51J11YGtoeGDA1yV2BuQzcbJRGebj6Gyp1Y1Wpq",
  "key11": "419XNiT7BhFr4Fgsdetoicdut7gSChDGdAweyFCUttaw94r3XuyNb56hX4QXjax2TcHT4fLMEGFo2ZKn4vF3hsHk",
  "key12": "4DgLKygs4ywoQYt5RtUAmfi5qZLeG4XBrE5cPBtxiKENTdR2vESX1hoxxs7X7awHkG566vRUbicUKvo9v5ksiMCv",
  "key13": "5kLxbTdC415VakUULcmmFdxsbauaxC8j2sRxCBUjHfYF9W9cVhMctKRmryrzsp1wu5AdwUdtttYbuWjioDXud8aR",
  "key14": "5rG7Rv219oxTotwvcisajXKGBDXvpujC8H3KxYvTCQUFEJsvPm9QPtCSdPmH7RYYMqhZSNaFiE56PEPNpApe5n3F",
  "key15": "3XXhrg4QV5LzRXhvBRFFhEhSLuCfYKP3fYJ2buJjD9AECUywMvLs79hbCvMFfvZYwZtKLioQg7kN7FayY4cgQcG3",
  "key16": "4a9uCvzmzaUPcKv6XAunooqPGHjZz3AKQE4kza7QWHvv5kvduxi4anmC4NmjiCnUN4oV8pRB4Ee1dr8ZM4YzMnoN",
  "key17": "3ZL96Dr2eCr3FK2TgpjHxz33A96Ts6KtS9kjHC6xSxWk9gEshWFGK6QY71SS77DmbdVirs1V5F8Q9ENVMQAA1hF3",
  "key18": "3nAVPHatehDttmj6PDMG9KD46KuHrW4wQ4aL2qVitfu8dQ6Tz6deEJJkND1BzooUQpRidf9XnwbKopmYdRvyPird",
  "key19": "5hMaMJKBL5sSJ7muh8NxcrHZTDzigkG9DWmNudFi8mtuDR6VdjQavQexCnCSu7R8t6wof1Ee3KE5c1fKzraNLY1v",
  "key20": "2tJVKgFQbTy1h1T7NcpBSv1tYXP7gMfNN2mxhhqCujWbK9MCKHP5KPd3WFxKN5KVzs5VxtkBSjFWU7RQpBwQ2QjP",
  "key21": "4peHJYx1M9wzvDhasChJ3jVbgxoB2BMBs3tu632SQKbEoiayxYd1ZKA7J4qjSvjJP2zRmHQ3AhNH3XWaxmXScmf3",
  "key22": "3DuxoxcrCyWnukTFS6844rZhKBSwQXMShGbyRGB3MZGMbNVQEGRx1w6rjtCK1xTNYKr9sL4fDTEMC8eKTyTNFifa",
  "key23": "3vT3m4Tqvx8oefoDZrexb4BXtraq2d6kty7h9CqHs5T9Vwzt6EMRCDi4N7DAzxq24gPxwPELqVc4VVonaChSf3rW",
  "key24": "2cev4RmDtD3oGBPWbrUNiJfqWaqJ5hX4AshF15yfG2zuDCbe9rModqXt2qijiJEzQXaDVMecoDv8dYz4AP5NPepx",
  "key25": "YjN9o7jS2dhuj2Di9oDzU3KoH5k9vCBuLnT6mKuyMJ8PefVyg7JXMKk8ZvpruM4ViWCADEBpFXq68o2x5Xsusop",
  "key26": "FQr7k5HHTfWcUtBymzGf1KC5BAJnbtwais5PxmukpPJKhToEZJgfmvSS62YsVYMNaTzM9dg5sSNF2aSJSgE5Sqs",
  "key27": "2wvyfNXj6ezhG6HsDDKeVGQm7NRtynXZ4Xbp3whN37Y9De3EqzVbX9ZurRhmysPvAx9xfpdD1p8doULyhLqfkhoN",
  "key28": "4PpYphUC6Nup9vrWL43iLux1ZjB8k9y28ic9zk2vym9hp5qbWGMuVSTNpzU2aT8t2WWJDnivSQNsGGCZJP311s8L",
  "key29": "2e6VVdztzQQeCBBnggqxu1KCJWxL5a2PiA9cdoow5XJHxfFgCeLPSfj5rsq2Sj351uDyNkxRVusBnyvBuqUyj41",
  "key30": "4VAQV8VsCq5fp9ghfe3ULH6e9ASUvdWSLXF1AmhkJ1q7d2fQRi3J67b6JLzb4QBFbqfGhUbNYiFrsMeurUfkCwoa",
  "key31": "zqhonGhT8QnWdooywG6aVuKEwUFR1ti3BLb98t3LPzBJE1Nv9hJJuQmUnYvCk82ctRsVg2u2PWP158Us7B2FbUo",
  "key32": "41DGB6fjAmx1kjfRBbLoxGEoFT5SXgqnxHxVCwMpcppKB4zKiJvChFh35U5353Z3QkJqKahfUvxYJj8XRCwCYhmC",
  "key33": "3WiHoQuFn9HTxrR4stzT1BYRc5rUdh61PsJuPWJaGHfhfnWcEmh2FGg5Cx3UjetBTfextzjbneB97jn5JLo9GDsj",
  "key34": "ERQHzZ4JoyLgDi1R2twDpUtpv7SYvG7EGc8n71hmgiHfxd53pG6Hpd3VNZ2Md7R6sxk38JMoUkVo9KNDeqPBTHR",
  "key35": "j4AE48udypCjMc7Tmzd4rzsxFivLJTBxZ2eeFJLAPswBTGk41g5ENLqnRHkpZSgUXrqud9JHpxsfp33dnTyB1pm",
  "key36": "2sax42zRTfxKSR3ha4j4eoB8mnBcAithA7W9SmbV9apXgEZ7ZpFTbJ2VonusYRDEyxo4SNApR5VbkXxJv4WCpV1M",
  "key37": "2C6dvxCZ3V43rfvkwzn6StrirHsP4QExjD6DeYbkULJsdCm5ZoSCkFoAj4DzQsnbukbCh8JSGi7UwsAbsa5rfm6K",
  "key38": "24q8KTidkQrb93w3qiYL8YihX5PU6XKmE9ci5jtza2mmsbX4xLxPatQpqhpbyLnKqQrbwUa9g5RARGQ9sV5b3wr5",
  "key39": "5pnfMzNgM9o4vwUTSwxG8r7kCkTvmtxwRtpx7LfibT4UY7n2AUPzWZ5BV6iXp16hnzJ6E74JK1ApzJkbJXVCrRk8",
  "key40": "8fE8KrFNjGkSkBnKrJRfocVTkvVPgZgUkfmZRdZCJFxrvGAT84EoNxaMK6rYrJVTETaWYzfKJjULWdNEVaCSwan",
  "key41": "5QdfLrh6Amsu9yofd163o27QhjpKqQRqmVL1FFgfZg1oSuYStfzd68Ei9Ludr1sAbCB4FpxKy6VRAujJELCnLFRM",
  "key42": "3BQeLErpeVDAYLipKH6MZfgUA4xy88eshpadBduT3b8KhGwvCLibGPVJUVzNxRfE17MSPRyLfY8fKe78v2G5CHjm",
  "key43": "5ith5CqwLaqGmVDWQDsDBM8Y99VZ1bnSWjkeuouUNsnXJWpV8KsniNJXyGizqVHJXUXUwz5YiTddJtAFZNEgQZpw"
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
