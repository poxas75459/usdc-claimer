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
    "3ZwWUwREJ5AtstLiHLaxio27mydkJhGBGcuhSzcu3aW67YyZL1nMeQsKdh9WBPmcWj78n9iir9fV91rP4f3VvTXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZiqwCLK9kidmWJtTBitQqn5FWbMomKjjJ1Yh1Nae6PFELhnL31aNXSA6NRduXYFBwxkcAS54sG3fyCCtTQ2uBB",
  "key1": "336HTMucqW7ZPM9TsogPaeDDqY24krz2LWwave7g3myKm2wNdKWyyPG8uTu2rCMgFDwcSQXz3VQT6KreXGkGMSeX",
  "key2": "Ms1R52x2HHpNaX8jaPa6ErjVkewiWi2LPB4L15nW8SY69xWyrGUiCkZmzWHH9APBY9gNMxc9uojc6dHtP8VPwB5",
  "key3": "3aguhDAfff5gYYKtiKGqMtaSDRxti5VDRv2HyeciWcrAxoN3w81Pv6CJccQtBGq8mFsqwn2vkYCfwVJrngYpcHsg",
  "key4": "4qC6hH96YwvVPZEfDEkLk1CLie2xLLZ8W4evJiaW87cXHEWBfZ43TQm9U1VMPnohqWNUJhgSY3L6A4F4mNUjjChW",
  "key5": "3NjVvDHjPp3jQDLdgi3P5qGWu2N4kS2ATenQtgZnCWsbGk6GscUfDff22HpMnw8rMY2orgB6uduPms37cmwWBzhw",
  "key6": "5C1ijo4bcdjbqPd4d4x6FjGzs8BDXrfEMwHw1TB16wCfpxiris8wm3sKQ5nqa9zP7nXmaPCjMayGZaovd6FRgLbj",
  "key7": "3yFX9ShzYx7Ux2CuQE2BpbGW3gFF5EzF5mR1pqeDZbpJuTn3U1M2K4rga9EwfUqA214gBTqxoBXNdqPsXx6BZLYR",
  "key8": "3AmhcZBaEkBLAxGrZVBp5oQsU3FcpwQqVs3mJ7BphNxQSiU2wkNGnyDHNiBUnDNqd8eaEsmF426ngUscwnFHa3kM",
  "key9": "3SHwsVPow4gUwZgPmaWJ7ydhmujUPg5y1p19oheZamaFDp74zwgNHze1oQNVg1U6658XDxYA8Y7mpqnJ6QZ6XG3x",
  "key10": "4gENfd9frTP9zg4aEc8QxjUP2WCQuDvYyq5Vy1QFojRuLPNWn4kQMDFVcePMYkiah6L359japZTwbDYzAxNH3a6M",
  "key11": "5NfZhgjk7EwuUQBtMArCvn23fG5z1PmEqkWtKa6YV5dHF1YNzG7g1HbiDVfwMNBRnnzNEQ7P8KnUdPgnvbpzC9j9",
  "key12": "3CLuMdovTZjRMA98dpPHeet7va3XYncMhg3F4k6cEdyCqRDxXvi3g9gTTAMgFQpc2xAroRpgaY8Y4CW3mK59ENLr",
  "key13": "5sif8L5ncrdCPpUh7UusWSGiYWfAnr5Sv5UgxEVNvSBQMcnH7vChFmXnaCDGq5zDj4cR78pzFmQeRekLu12Dun86",
  "key14": "5sasnMnLPiKSU9m3zbWT8rAKFyv26tLqpnk6TNCAk2mGh4iGicK2T3WQvgKAPs4k4C3s5NRZPNCPktgatwNNqnvR",
  "key15": "4xpuuMP3QbCLeFu6j43a13w4tcB6eiP5K4arH84EmiHqJNGcysa53aHZJQHtwXrXSdy7yyprmNkJJ6R27MQE2cYA",
  "key16": "5EdoqLPemhpDngRtBftG45YZhfeuoqw99Wq9oCR9mK6Gm4nf8nbdu8sFioyTKBjeo7NewVFALBf7X7DnjWTkbzQD",
  "key17": "5hV5M2U92SDt4BM75BghBdXt3NPetQoLD49dUUAGfR1SranyQdRWzYzu3kybNZkPFnbs2kSR7iw54bixszPz4n9q",
  "key18": "2MHukrUE6UZHUCLH9Q5Q6RNELhqYDRhYSaME5FKbzqUiWQrnRF9m3vqbKaf6wbS98R2sNwD3tYn3gwR86SrgpcUa",
  "key19": "aFp2t5omNkA8URpAr5W39drQhrKFpJu8Jf79cukq1gSkSxyhgKWQzwEpJLg9LSPpWErhWDBoW1vRw7rfUC4BACL",
  "key20": "4w4XffZLhBVJtXFZ1YhBLkojUr3yqJN2LdHUKX9n8maxnBYqCadM9vxYyUkMtiR9aviRVqooq6PePW44LgWwATZ7",
  "key21": "3LgHQf8S5PFGZd3L9aMCsXBTQSaguoLvmBbgxaSF7dCkMeGTM8JAcNoGoqCBRyeo5fEPAJc38CK4ng9rn4dvZcdW",
  "key22": "UQRHATfDaRH52L16jfTbbXryvSWw5aDPWjZx2udwzCQPjXn8yREcHgH5hkNvERRsSGxNwPdBx1pmsTBUjpVvMip",
  "key23": "2EHJE2STNFfcFm4MUPwBTG3mWGwoE8Y71rbypPwL557VLV5ndgQihhJCUXRwy4pQ7AT3Pes3pvxqwSYaZF9wiNiA",
  "key24": "56GXPGAx9GnSLMYbanXGmo7ohMSQrqfZvKGk8j9Nk6WbVTSnTo28JN7sieLBSAErKayP5KqKUY5S6GjY5ysqXJUZ",
  "key25": "21Sz3jGJBGxNtzgHU8LeCCsce1tJzixHp1ysS2GqHCA7bXdiZ7eDYpd12BTByD34H2dJqixxqa8P9VanGmDtFRGQ",
  "key26": "5sG2RwrMfhRGMzPxTPE748XBQmgabQxKRLWJ1u2avLxweoCuFfvPaG5BKiHoHKaC35b13YdQRe48ewAsq8VZGE7g",
  "key27": "5scUQMWmS1MtagFLxBBwjESso9g1jGvSboGDy9BXVVZLVaS5LoWDebP8b6EwbvAP88iTHkAqb3wXAj8KehD5uDXP",
  "key28": "rKzTDG1jzVtocBDhmf8bAu5nF1qVNMYGQHhksCdtTdLbmEwte4zycARpZHDnZmdxNW26XJ2GayxDexMxyagMVR9",
  "key29": "3XSw9gUHkBzrgTXTu6BakvUGjaexLWVHhXLt66e2xNAM3t9JVbnLajKqBWdBF69MZ8ZyTqNpjMUPPtLKfzUu3CsY",
  "key30": "3xZwLp3vNXUVYbyTy4XiK7LpZzdYLPeVAyPubKXNExh1LYBGTUiwHrZyNg8s2bbiuYCY9SCTa11P2VYmi8YJhdXp",
  "key31": "535o6UmJELTKMSSi12xSX6NmEXyoJYc1kHP1Cdi4fjrBGGYD79fMQxvHKkabPQMoacsxFmniDFcZK6tH9NLN3DNC",
  "key32": "3CmCQ6cFPQod5LVf713yZTLSKCqtsbz7kMnGkGpjiym4KEbLzuJZjajPEUPMWdztZx1tNujmTuKu2E3S8geRztxC",
  "key33": "5EQjpjmyT3Yo5epjeTqsNuffbpUPD5EU6zTuxR5beM3BtCpmFvi3pzo7e2HdtEWaDStADxDMYffVy2Zo4BPsPBQF",
  "key34": "2FpE2snZvWzdDRsNLVaeNKnUC7s6LiyMvLZnw6GPEYjbZMQkyPttbhnM8e5hKBKioS2c41RJKk9ZPb6KqrAxX564",
  "key35": "EcJrQWapVFHRiFCu4aPRfwYXAf2oLfDkEoir1SpY4cVRHPiJeFV8aq2nHW5SjXHBvc74EC6HmRLNcxUSTg7E5P6",
  "key36": "4589FC1qKjKta6iUSDPrKeHzcTrbd5L4kAbwqaBGtvFJNdJe71kJwiXdzJHfc91u5wxoWMyEnX5rVySfRcjXbGE8",
  "key37": "2SjZikRkByRdLbEwksijjcPZ15jqhM5x27x6Px8Uvo8jyzt62nehb1xUCmEBcmYHnxuYjWe3HHe6cW6iYEC2X1X8",
  "key38": "3hkQcLxLnK5MBgRSaDkzmMPHnE6TbGCtnNgx6HBQMnEqYoE6zDd2SaBG5VbCaRJxbZuknJsUUHjzXxEiEMFugxTS",
  "key39": "3wvzM5jXMt2pi8aCvmWKFKeqxp3ehUqn5JZor9Zv8q1RsDM9t1ucUCXKktfJnj4F1DRyYAbVL35Ywc5fgWs6GBXT",
  "key40": "2N9ChFFXeqTaKNpAs2MHvMxxyewwwxEC8yRdohPzxb4fpj4SMH1RjPReisji4N9CrKwsur5Y3HZH4zi19N9wNDZp"
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
