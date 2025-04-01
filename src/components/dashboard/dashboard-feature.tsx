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
    "3SkojEy8mFDgQMNaMqcb3oat4cdUxUju5MewXERiC5LgsRuNb1cpDhWAGsXcob18XosCA9xJViN18LBBZGSFYcjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwHceNAUySeQGnNZLgHZdokm3D8PvWP7bGC19tXppCRvpAoUi5qFQ5MqMJYrezdfQFV5jqGz9PVqcxkCMHMJz5R",
  "key1": "4GzykybFnoCZRRVHRZNUQN83pDmsStMxkozbHWkEk3iQybXiyZurvTjfiNDPuXRrds5pTcAb5h2AFqxGDoVaLNgh",
  "key2": "37RBxVie3hb16hAHV5wCzwiCzyuMPD5pWAWjFPshhyZvHD1RgBvjPVCqzYHLLXe8hMyN3VoAEnt9Ez5GfKjXNFiL",
  "key3": "5W8oASg9fChtFxNp7F4vu4mo7VWcYe94c7ybQS9PQMyLoz294yGXwSHwUzmNgpaBe6GgDCG3iAcTpJQXYGGNsPbp",
  "key4": "65h3uVAjfgy5S4x9CxFC1mw4x7RRywKvuSd7XjEjGBEYE9eZo55QctMPArQu7QXRVwFgCsoegiU6tyj64wMpoT8m",
  "key5": "2RsdUBe6Mx2srNgYX2teDdWYApAkdFQDmqSzcZ24wX7hKEyJFDuujbSGswBNsGx5jtFr6oUdKizrnVtPTc3yQ3yK",
  "key6": "B3kQZQymbTXuFPnbKzNDTCs27D1eFF8WAh54FmKCnwRb2L6yVntUAZwGg9mm9v2zAp8ZcN9eMnHYhU7JXfzsySB",
  "key7": "jvydbCbbTnjmSun5J1KPAHeTwtfyVP3g9CNaFp7YWycwdbdBnBMnYJkhpWwnNBEnPUrbkjmUsPm5GWtjEPLhBmV",
  "key8": "2NkzgiQj6BX4HVWWSyTvBHosNMnXcW4iJEEtCBT2BUvTVXMesUeaZN5SsniXBomBwRaNp1NrLhExwvnw4Tsu4iEf",
  "key9": "2P91S4L2XyKkejtik57RsKXAkyNQ6F8RwRCozT1ymkEJfa7yeHrVV53QDceQsGzWXCaBv9Z2WUQEYg3gnMcKepgG",
  "key10": "h3aVuHVr2ZDeRFws4Gs6dHmSmmYbGPxqioZZfdXYq1NmgJDEkkThpXL7NJUKPDzKSkX3Cyt2tJqAexjiiWViQJH",
  "key11": "Aa5i6T1a1Yyf9oa7ctHJLU9JLq2Df3VLuc9BoPuCD79GShrcrYSdJJdAra4erKU87KYshJHsVnvUi8aasvXLjyC",
  "key12": "rqCmEfciguMk85e9W2CASGSTWP16eeVNEn7Cjzjoop6tYdriR2TxLcRvDJz6uCYdv2xuwdNuhUDYyHxKC5HMeqX",
  "key13": "39gt951FM2X66Qcs8GWJsTYPXHMvkLy7TGGn1zNSzhkUhPKUmjMYBXEsgL56unwpmgujz5SxxHW1fs1VCaQSe8rp",
  "key14": "2jK9UtYJ5CEprtoffPHJ4sMGHX9fmL2yZrtZmvhdcqwBNwhAKchAcgPcXDxrAZk8wHgC9wNvq4qvsK6sci2bY6RP",
  "key15": "3MQ82494PZVHmzjg9zQZ8vRUqs7eT5XzAGWg4KS5u8czHgmpuBv7diM8aECJWfnXSC8ku5q1dg9aHg7WUsELdMU1",
  "key16": "2xDkqQu9QDCdrTs8n2Y4ZPLoBCbXT1fhSruWfjVAP3ApJrZQzU8mKFy8dUeJmtZpHztBJpag1u7H4KKQaeg9mXVb",
  "key17": "5MJTMVav7T9eE9PaVtsbdAKQXQFwzCVb4gFnyz6dWPTf1Lga986UR3cinDK1thd2iigSc7prh1peda4eYRtX5ATm",
  "key18": "43a96UJkf4HThF8PTBMMKUfY8gwrZqXpzrtagVuaCMH8vguAqSfE5w5ZSn1j1zuoHvJG2RgCXxHjZ5fwhQWLfYu2",
  "key19": "2pjrr9mkHn7oU8qYa7zGHMxL6vo1gax2kiTKnWpt9cqq2xUfjgUtSax4KKqfNJDsT35nmmnFS6iynWUnERLUvGN3",
  "key20": "HnqEUhcPv33q7XfxZqWYvMGe5cKQkvYs73c6ZJhCfKXuhH2uLquRt1JJb2UCa8bTnr4SzGkn1rKRpZEc64xMUGL",
  "key21": "3U85C2KfsuAU4nzoDuBeaSH6EZXthyjefpQ2jDJXWWHA2yRYgwwizW1w574wSGnaoN7XY37AjHTpen8NbdpnsBGa",
  "key22": "3nAiY77izduASZ2LeVVyHXyub6MRTZwpGuYoQ7HKnLE4XfjjgCfuyR678dWSnYNkUPQctpBYmr1yv3RkfeBzwRQ1",
  "key23": "4djy2UgdZyVWaK4jDjrrpUbcChyX9HjHL8JaHrVxeNzNNYz2VVKfMG8ecapLpCrxgqcrN1yWoKNrdKd1LbaGmG4Q",
  "key24": "4KVLQtAs47zfDU3Zpb7KwkvhTHYk4dysvXpSHh4ZTJBHAqMHmhLSfwnkJRaMWVL26uPrDRqYcZhFA4PnXAp81qNV",
  "key25": "2bsSuc8zwyaad1gcw66kXpiRBgxaHBgVR7xbbSbafnkWQTSuLnhY9nte9gvn7RmfZZi7hyhbxemZAP2L1opCFmJj",
  "key26": "5KvCZwFBCCLRgPSyhkcR8pjdRwrdYFW82WVB4ZpTEAYz4wAhEFm5tEYMSVoK594UDG4f8e21GWYfNiEes8cyfs4i",
  "key27": "64aLPVPzU2LSby4Cf8eZxXTM1pwrTweR9SmVtRCZ31teQLPhek5QEBJXR6DJ1EmUQ55h45X4XtbSFph7JyCDg1sk",
  "key28": "3QcoroG8XYzBLs3pyegdijVxrsVav6ayKdFKUKA85hwFztcDHDhQ9XxGL3Qa6cU9vJFxKpRNovAT2CW7idQeHnfc",
  "key29": "4RADXkamBb6UBCLHYmhc3WKSVZD7NViJZkENvs5NmhtjYcrZkDFJgjq5uspVjursvuEXqtq7v5vdr2ZBD245hhDD"
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
