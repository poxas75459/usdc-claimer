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
    "57S3YGR8zxiQBcTD75qpETEe4GDFFQSXWBsDkP5L6EZ4w4RmAsjRxvExxwaAU1HuExVgZR38TCVZVGVki8jMQjaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LT2ABYgkzRz4cGLETs8oPcT1ajqtHdLopsGuG33qxZqGfp6d8X99ZRMhVsouBozbxjVYtuoT9bGRRynL4hqi8ZS",
  "key1": "b96EwUHMHe4MX3aNxHXf9qG3WgUBVAZBwYQQ4g4R3tDpq6NRDehPTmSLVPmzjmYMmrG83yidZbpMh5bWrJUZd8X",
  "key2": "28aktE79wZQA4hAPpYnTdFCKLTRsrPAbb9dfXkZxcjTE3GNcQFDCTrhMwYCjwAapHskCuD9pLHZiMXLfYULJqL2k",
  "key3": "4c2J2qxRiT13XyefxhbiVmQjnDWsgj7DNvv8qeijC8nke5pxBonvDdmcT1EX9nLB88gg4aucPS8qAxn4dqtnn3W6",
  "key4": "53uveQnMvDUhJbZmhP9BnNHtJnQR5ZJRd2oauG5FoPV4ALZVhMBtji6T2FHrsJyzTtiexQFvywvS8BBB2iht7BNN",
  "key5": "5ojBhoW7pXsFcqLArYwc3r6YU5dq7W5ZEgb6BwFcUAqvj12UXv3LgwMYFLUjrUkRGopfHspJLFPWA8wvGWWBSgyp",
  "key6": "3YGR899RfyStAZA7RjFd5ZL9hWn341qEfb5i3LfHWsv6XsUn1u1ASNThA21ETod4tMCnnEmVFwJJragGiaSYD6Un",
  "key7": "5sKs2DDMtc17uE9WoGmwjXGkNwEmftq1RUihVFVQh83crzCWJmFe13Dfz1mauQPtyFTWcVmYABV6vzA4Hqp8RGHX",
  "key8": "5X8X7Rf4f4uWp6agqM9bYw8WYK9WTR9u5NUGZCadHxCR5irZ3w7Q7bRs4iRSgyhRqjnMvFXf9ctH3sxnRWjoDDVN",
  "key9": "4n9qhfjQP81C8HZyEvnt7VCz3vK4deSyyRvTSpZWpfZ1Je4xaojwyWpeWo2FRbNuBjWX4cYUsrTeXFeFaSuEdgNr",
  "key10": "2mw7zdK7a7sRM9eFxe9KGRVpebdEu8jsceeunKejVS97jc8n8dkebJpnqiVefLVwxe9a4dBg32dmxahtD7vKNi9p",
  "key11": "5eNiFFrnzyCxYtCFkX6uNE9Fi9cEHmEUByF1N8WkfTxBTBSd2eJ2hutqy7eic6vPdigppX6etj5MS7RptQiaf8L4",
  "key12": "4rTz7Xk4w6Vhmnc2qrbxyEWAr8jtWD63a4UXQ5EUa7brE8JbyrppWRR2DkRCWY4ZQiDT82uo8ZidDUeEex5BdAYA",
  "key13": "dmbo3f5oP6mh4pFjCUXqyMqacuwF2vbJtEXpBJPjXRihT6E43iPvy1vXHLGS7vUJHaJQCLSxUkarSHCfvFHpU9w",
  "key14": "v23CPvpeDzFJSywcQrvpJjAfjESFn4b661N9hGqEvEiDuRSkUY2Lhf5jjzGhaDZGq2HjRkCKt5dFD5tFrYCAmg1",
  "key15": "2x7MUtobPqwL7JbUtsTEK14fDqtn1tvLBpAfcvmYfhdeBKoApyxxP1MYz2NXJREsZb5GcwRawAHwduA8mfU73ZGv",
  "key16": "5wQ2bV5wXGekDuyV5gfxnp2bxjV5289a1LUCtvWpYGFWgFzCg1rUBRPTq3yQ2jBP893ymiQ4ohqiVumvC4QAiFjL",
  "key17": "2NMYFYi5DH8PUSgVq5afFiFZVJe8ASFvcKxXQ9USAWvj5ruY68gSXqDY4fxWTXz4uyZkA1KmWn87rVKYp1m78Jip",
  "key18": "3nuT8AE5zYr485giDx3tWRSC74sDfgnbuPqXsGLcsEhiT8ip2aEt2vsRCMvmkj5kbNo5x83CEAChLC8Ad4jG7D49",
  "key19": "VAcaRMtWHN8PMuvLTzARuG6UxqR2JS3ygvBNowmGFQFTjaUtzZtsgTL58J3js4JJyBFDznStwTcdLGyYprf8MGu",
  "key20": "2V4BAkUVHJ2rQbNVK3AUDfyGabpbYLCwwAmkooPGHYhwPkbRsDT5jaXZzg4hpsdUX6Pa47HmqCWV7szyiAFvY9vt",
  "key21": "3ngLgZxWwKgJ9w2cXipttA3Nbbby4Y7ud2Kbue8y6d7gJQAfWvBcsVXcbgp6tUc6qtu3T437w3SYBvBYq7E5DVf1",
  "key22": "Fg7e4qcANUwxq99Gy8vLRcfe9fS57jPKWMHxS9GoMaTvLAPkwyXXtkw9poYmEDqQ7e5ZEVrkxxYRNm4JzbvSfFP",
  "key23": "2Dk61cJffX8eBCTsQHg3Z1jQs2XMVTeAyxwFdonC5PevGCPUD4ov6zNZydTbveiva38En5UumP9Tc1CLTPhVL8oX",
  "key24": "4TTDuaDRTakZn88UNpqW7y7zXqPQvsv5sSvwBpW5mEmBWgMA3QeuTksQrSX7R9kaUaLhTXCBhBhAt3tYgAAEdFET",
  "key25": "K6A7Qiqm4ujWqVSDoMrYC9N8ieEacGP6R9TRqg83iK4RG5kQFSLRiibSGWWvbprnvdwmXDrAq7shJSLG7S8ezDF",
  "key26": "3ZvUqNCR22o4mxcuu4JuMtjgQby32GuzgnJ4WkVGoFEXxZquwQpt8nJb7gsumDKyWjJdAMsQiJiamnLddYZHVVtW",
  "key27": "5DWCnVhKqABzZzGJtJYdYT9hVwSVvMSnLzUaFr8s9QnQJqBRsdTyA5XkSaYFZKuc9CuEN4QLuWjo97ikTbkU1Co",
  "key28": "3xmFCBndcNLySsemTowK8rD4n92cLtRe68ebmGEFRgno5Y5hGWbiq231ZyDoup1nEkvwBLF3LYgNAkQXodkcMFPD",
  "key29": "4TUatBrHJQQzjGpBdUidBeLP2DKAZNVWC5131mnGkQ6Km4wNxYU1oAbTmyCtVcPDbfWhChwkxNdEcNmeA5xrab26",
  "key30": "45HQ5hdrMgoaEfWa41w63FKiNMzWqC7ZCtAYQCUGeVjBY3nB7Y95ZbUkHQzhWv9Rz94fw2V6snXTXotspEvhiH8P",
  "key31": "2HdHdczsZKrReMBgFeRhStqE4UiWdYrW6VDfeAMzgodXmVxComuBpJeaeYKDoYovaXSx8XVXorLEKNvZJCTYbHzk",
  "key32": "5NxUWBr71zVmcuRZ51FaW4XnxwkrETvHLEKSBifZMh8WnS7B19xUi5yvL74KokDwnAKrrgK9uT7HYqpxPp2BCGQk"
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
