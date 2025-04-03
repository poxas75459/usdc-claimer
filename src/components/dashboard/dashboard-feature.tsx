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
    "2CyDXTHR6cLbYim1pcS1pcQnAEg4jNWu8ChdPDi2tegXdnqV9aXrcaxt3CHjzjcYwsppaUkw1M6skQYNSLX5gxN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhmHXNvZUBAyU5AFCbp1Zrh8Q4UjE2Ti13NgmbQNAsLWhjSd1aNhM9CyZiaMaaQPP7rnQRnffGBbPHiir6iDyMv",
  "key1": "4jKK7Sz1yNFvRmR5RtbR9R9qNF9YwVmUGuDhDuCQxxVfYBpooFRumnxZ3hMuSPQdXePkpxoqPRZBMX7hr56mPp4a",
  "key2": "7PT6JddFwpy2DVjjyzF7DXFB2byV5nwUMboGDeGWsZq1UZ4byw4tJCSxj3MqKr6qLBSZHdML872U4TMRutYHgWt",
  "key3": "3F98B2h7hUnQTni3SfXimkhL4naLsc49Hj5nFuFt4X8a9yyAYGB4wJJhbshzwLS8fG9iohqF3Ta6MiGhriazozbU",
  "key4": "29SYgvtwvTFpT1sE8UmhWcPN7ADq3EVKvoHhFP7PkQqrG9CPw5aiY8P6XgEYHDUa9GURntTADv8eS9LwUYiSxfbj",
  "key5": "5686y5Qvht8zTVMHTcKRES88jEgGkbEhWqcgZnC6i3swfpa7MgxhTB24kAjCSgEjCpo8NXT6U6LgLcPXmx85MfrR",
  "key6": "52pUaYCD3gcuntZ2kDFu8atDWC2ZJnUaK7mY7mLuLpv1KZ3roDU1WyXXuW6z3ifaiAC2SKfQfUUT5WCU2LNKJcdY",
  "key7": "EM92qRnXe1fHQRGc2v5am7jxbghfq3QN7GhkjBdA2LB23TcEmxw1ysqHnF5xs2z9yMz5HoffgEYnaoogudnP1iX",
  "key8": "24gKrs57iSTDeECFHvMqo1aHp75D8SHjbQNJmUi95dxSykJWxNz5iVvQ9X6QPmBzdQETJ4RMZT93GwkUQx6CzDTw",
  "key9": "5KpRUu1anTT8Qz9Xvmm6MHtc3PxetFne5VMrAdczb7iZoREx9ZwyxFRruYzrvQRXXEWnayyRTXfHuDBTsTNSojML",
  "key10": "in7MmdCudmWetDcb1a8byL1b4r17i7ZLuNfFWwTEA1Tn7WYeac469xnvVK8GAytAzzh7g8y8nfpLTAv3xJXFNJv",
  "key11": "5ZpLrSjSx9pSoFgdhVpdcjAszti6JsEBhzyKNtqpgdG9ZKYgzhkx5PLvpBY5iUrZ1STVWqcw7Dxwt4znuiDg61uo",
  "key12": "5hUimYRCCdL3r9eEFbfQgpV3FizXPVNLQWaRBMd7G29aKrTMgPjuLajJcEYZmo9mVRU3G5CCZVD6rSTChLAVpuFF",
  "key13": "4US7zF4pcGoqyu1fPFjNSqxRAHHxK6Kb3c1d6rKfxyoPJMDE4CbELyy21uezCswZmEPXKSkdUh3Hqyzk2Uq79fmx",
  "key14": "2vdMeGx71rBMLKYZ5c6AyV4tF9GF3paP7aiX82RWQ1TXr1zrpDQrT38Zb6pzMcwae8rMDUVo3zZdMAS5jwhna3Dx",
  "key15": "4VJrHjDpWUyy2FLw7Zkvz8DWiTxZQM6jFDrYgkwt7YPQBR3fVegDoexhZxFpYyh7crcxMw2HhTyyW7BGxx8TpLh",
  "key16": "2B3vLtMzXSojC8QgXRi4mWywbPbxFhyrYLDiSeh2b2m5LQNY3Un6gs4Aj8fQNrPqFAeTdjNd2e7nFtygrZCwEfAe",
  "key17": "5zzgecZP6cZMwydLcsFdVtcrs3hHfT5YntenGrUDLud9bE5BAFfvr1ti8nTqSXyaeRsZVCQYzg596cdaPv1P9cEu",
  "key18": "3EVpueYGQ2gm98fqMVJjaXFPb8Cino7ULjKneP5R92rPpvpvCNQA17KNLmbXqnCJ1SNyKrKBzQHHj29J4uzxxXq2",
  "key19": "4GrCVydyL1byzaVPLQ2btu71Qqb4mzTWymDYLK3vTiue6w7q7imrthqsu7rUa6MyiDhGLjhui1KEufYpCHHDeitK",
  "key20": "54TgoTCzNiSCcBUMCbogCC5tUGxqVkgK6umMdz3FGoBcinpseMyhc8LBe2wkmZqZdP79N9urYZaS6xyWnha3X5qe",
  "key21": "3wDP5t4Hi9wadfQspsqHMkE6mbhQeoE9VE1sswDDvXayV45gx7WPJUofJWMYQUMPLifjcSCZDXpD7R1kKf6C36Nt",
  "key22": "2rptc3t4hkshiKCPKjprMEbBhUpRsVFP5ugrvkqd9oRMQyx28CD7y71kTABEnj76vFxrVvwd9DrKUfSNouB2csT1",
  "key23": "2wYhu7bi9q5Kv3KqSnd3ivXBkZ3BvqWTV15unqRimcpMCQjB4rvXy9kuP7i8UU1cWPDFmorbCqNjmruBLYSh4sgo",
  "key24": "2oawKfP3SgQGEYpP7ogSNQd216KcctVdEroY7CJM89p8bYtWfm7A7wTstX24nohYh8WtHkAEJZK2UyfAVndTJ2aE",
  "key25": "3Y42xTBhQ3RsdVbAGvZVLzGPt7cUJTeP16vL4F6CYYukWRf6xL1KSmEikX8LAKQq1obwP7abgx9BoWeEYuJWP6gQ",
  "key26": "65xF41uquHr9oCJBJizEAxa7PRuiW3NeCzMSEgieicnQ2Kx5vvSQnHog1eqvZhspBXtUf3fYPHYkxKWL6DTqCigC",
  "key27": "5JV11sr31vntcFZjrrmNgjEKGqrP1S1NFNkmExWjqd112JVF1tMHk6dqp6U4a86r9VCihroVhgqnv72R2sYEQwFc",
  "key28": "2Jei1UCZ2t914dYJBbbSTrF5JiHgk5K9SCCgyqCog4fbvb4tLAVq58BpsfhGefrZQzC54CY5hERty4kFpjpzT2p1",
  "key29": "4zJPmYXezFikNHRiUUyyms865Z8Tw65yPksfHXamq5pK2bsuJWiPSktjkhyWw1HKLeQXSEA8kp9DY2mbarP9wqmR",
  "key30": "4NXpcTY7eBQoqygXeAzjo7kaXn6Uhbmk5gtfT9zicUyqV8pkWF1qF6jyCNMybCVdc86tb2janWHEYdGHS6Ae92hE",
  "key31": "3SRCW21JquiDdztg9MryYyMo1KnzNu6FbbYQ2MZpXbwVbUkp6maqPF2Pv2jZPxwJNFG1rcY2YsoysihLAeaiWbFp",
  "key32": "3tis2yikKsLTAniyJsMu3HeHHbjfHhX6UPxJcQ9tyziFNRgiX1mRGHRp6c29Xg3YfE6PMpmnT6ubay11xpaVqpnG",
  "key33": "2PxVWKzzukVwihw3DVATvKD7FeroU5KnNRhtKtoS84ZoWqKeU2Jr5ssPCHxYfSZFyF4QR6Ycwd2accApMERayHG8",
  "key34": "377acXRhRJ1BUhAqfi6NkxtHaDSu3WQYU1vMsbfU8mq3zmk72xr1T77ZdGjHR8RhAW3KREV6XjcFuAtbRpYBfNwR",
  "key35": "5dZ34j9Gj9zxskXL67KsiMBMMHPzQ4K7WrfX4s7vD52R7JrxyhYBEVW9YqkZ94ksrxjxtkmUMQNESJeRcsJC3ouL",
  "key36": "49L56bRA57xWy2JGX23eHRi6epkjBPjYNBHvuiQEi4QDazai62GxEYWpemFNL3qwC6i2Yya8xdGiTNPwUCUD57tU",
  "key37": "QWHhDUthtob1zANhWhANhpnP6fsjRQ4mJzEKxJtqNodafeTTeisKCcDWyz7jUGAgMURR8jchM8dukV7Lo5sqVmX",
  "key38": "4MLxRCwp8etfeEk2nb4nK8ZJdks9BnCm8ZRYaeFGSHGkFETR5invtsDHGM8gtwhUju1gCG189SiL2576yXWYdXxP",
  "key39": "3S4NZoAdbkJjoSm4XDLY5p32c2876gENpQqSbb4bHKWjefCVKAy6NpYVCwUTa1NofZEg1AVLeY8gSV9HmPNKqfjj",
  "key40": "AxTHbe5GYZveaFZjE1RuVF5vt6jLyS4LFigjGG4J7JkwFuPxEqdDsTUFiqNyb3rbp43NAS3kEbvuS7a6vJPmg9x"
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
