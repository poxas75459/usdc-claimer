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
    "5KYYmRJioKhANCbkgVMX8WdCDq8HDGQJg7a79UcFszYiGkxU1urkxne3cignZucWnRnfzckZvTStAUUpB52Xvmwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epAi3yKjNt5W3Rnd2qDixMr8xA75cRLqy6hwS8hw9xUJSKjcy3ppkDseKbxaXqCEYM4AiRzKpnSSX95SYkXg81k",
  "key1": "2DJy6iEme5k96x29JhgVShQXiCRLwgrqBgYgJ36r669rjdFVV5taF8ecF5Uw6qmdyySz4rs67HyVzZujM4r2pphs",
  "key2": "3SVRBYs7Ybj69wboBavrxZWs2XrhEktdLJmfLD2KC2HzmgxSq26rymkCDUSHrsQMaiEQWi1iJcXzSYiPpDfQd5Jk",
  "key3": "6BjfEZguU7zjM7RAojF9qkNPeKfSeFtwQEcyrgEVh8X9wUvYB7Q8KtpZSknPSy6aZ7iBFYTPcpDy6hseg9JpCUg",
  "key4": "4MwivFifPMoypwUBmdvAq2TgnkfYdVgRuT53XmitSTJm5pZ4TWapHAKHkVoV9iTiUCaqF733yE8qZSzVGp2DF5Nk",
  "key5": "pvz7ZCg88MHveKsAoTeqN1QQnDkN4CmHcoo3heyMtgTyzz98uhHtBoHad5N9EzU6UEFUAMVKTaEmoaa1jeWmhH1",
  "key6": "2pWDm6WdCnFCDnoUAX61JFcho4eUhfqMhZTmbNsNaVfJNj9CmCiBd4gdipEtPsQES5NcaeSigwWgku2eU1VvUrmj",
  "key7": "2QMxAuiU1RTqi6rHFhJtnCh7VShDnSyviyfKTydnkVHEpP3W7aPyqjToeZJ9ronxYFuMSwrr3br6vftk5Wk4ZPrg",
  "key8": "2HCZq3eSR8zf5awsjn98dDaavMV3fmHFty6ZKYS5tHqH7qzPUzosbkx9U1YURj4nw7YSSr3NhpMnE4WXU37xPEPZ",
  "key9": "UFFx5rP9iy1Gf8CFyM7MzG364ftiX21zZu2ePNdRCngVVyTVA26Bf3TQVgkvP1gtLhGCGAG2EyWSZrE1idHKi56",
  "key10": "2PgA1H9wRjL9N9bjYrGEGvYDTkh5Jxv9mVdGn3rqQQ2nfSeY24hwrnPH2EFPtUQ95iZ82aYC8nfFxqGLqnQekqWf",
  "key11": "5JGmNWtSDTmVGsXcmWFyHgUFeZw4m9p5SM4Sq7AqPC2eZGuodk7URWXcsB5txKQ7jswwTj7A17ooypCRe9Mez3pw",
  "key12": "25Muiw26PUKqHWDvBRvFJtw7TCdSGdC8dB95UrQCs8DKt1gXDSwzevGvVwsqMRzQC3bde3rFsSCxfEuCpcZiUzMc",
  "key13": "5k7rehx4mX9uR4HeBMR4HS1MfzXBAqzVpAG1sGNpMPVJfqYS27yceQH4H1cEWUCYobnYiSw5Ksj2hQXdMoUpJJXf",
  "key14": "5NhmEzpXDej3D2qXKZ8V3Km5YhXS3DfZP1X8nT7oPpMC6Lj4Vgvt6pb1CUA9CmwUXxZNK2693DVKC1Mtus8tr1Va",
  "key15": "2k8BcNPrJ7DnFYm23Y1fcM2FgsbDerZMErBXDLbSVfDs87KYBnkXECYhH596mgfD9hPfFLspN17c1f5Du6woRPnN",
  "key16": "4tWsF8bLrSfFuuHB4yqGWzcFRY3V3K966BJCqBfYqAoaLzKBJ7AscUpGHeD82YgYgExah4gmpVPrJnXWiVmtuWP4",
  "key17": "2dKVhrZGKDEY6Regcr8F7rKFTBgWRrpz9iaAMS9yJnF3aqi55aDLrh9xwDbFnzBQTZaDc7zCPBVQEWnB7szEByhw",
  "key18": "3czQWxqnd2EYRiU6TdDyABuPEhv6uAU8wnmCeFWqLN1NBZ7dvbKxYSk7qzGBovpZH4tMoSSUgeezqaZ3EoSM6aFQ",
  "key19": "ZzMrR9FtqDiqjNwMScLF2SStRKtW7b49ADKYPdC2NRHFg2NJfDxfmMx8gcM8dxdnDDd1vm24tuv2fGsskBK268Y",
  "key20": "2cf8W5xYgfBiQvp1MxitBH8kxwuwSCFsi5xsQr92UgVA45xc8BQCKFT2cDfXb3dgtk2fsQukvW2u2ApSTUdYKZB6",
  "key21": "5fyKgXF8a864AVGEBdAB9fteNkVgNY6KtV5aCv6PtgkqMUeW32ToFCv93qcJaxvhWHj2642Xx38ZXhnVaiwxzHLu",
  "key22": "3mYJSyA6yWQhJagCcK5jH9RD2WcmRUghGEjpQGXTRGJkpppzksJW3EPUDtmvHACSB366n2dE8CPi4aWuYPhXTyD3",
  "key23": "2bQqWFEW4dngopZcPB8c7KSXgCv8rXk5JnSSx7ARtLhCr9RqpMdhVW5bNXwgJfdvywYVKyQqwHBS4CZmt2jr1fcK",
  "key24": "VFkyPER6WQkR965rQQjEUzpA5GZhNph8CpKw14t1Pwor7zHJz1aMGQV3hK88gRWfXf7BQex3soKDDMSxYuKKybp",
  "key25": "61eviQaDFktBoBUYqCesHEohvDjwoWAUfPPe7F6tnkMu9KzkEkN4jZP1Aab3Kb2kb7TraQSuJBKwqey7Na4aj1zu",
  "key26": "Tg1p148VNC23MzS4RaVCFiiV5QnM8niux7uQTjcCZSg3Egc2kbAuUQ8TTpPQM53HW6HpkDpkBsgj1M9eyDtKWWB",
  "key27": "2XoQe8yaM3V67tw2AQUSkPDNJxsP6NVZcotfd6YkhuqDsXoE4VbNdfGtQz9L1B2ZjJjMUWvgTFqqVp5sUafPrRs6",
  "key28": "2cFAKakM34ab4YFwvcoS5WN9fs49bmTj7J1wqkCQqcAWTkvetzqzMNiGEFQhGzYTQsuvPyuacaNij81NCycLXgyi",
  "key29": "26mt53JjwXdhS3KPAPtgj13qckx3U5ZQSK1gYWiGZ5N1UCvrKZHD3RMMys5q7Hyx9g18QYPhuMqbBbQLzRp7LnHX",
  "key30": "4naGfW75vSmCASfgGSicWJECb3g6GpMVCCkYtZKpBuNFPqcJgyh8vWqTobgoV429iT3tmwTzBumA5Qb9impk83MA",
  "key31": "5hnhLkB3N8Su2FvNVPvF9gbe49cFEbedyV1x1tLPofbkyDKzSJSPCKaTLfTVEqv5a17JzZFq5hnqztY5tpYiog8m",
  "key32": "3tz2XgpjCPYJw3frXGi3thn9br14RxLfr4zNXQfsBqUEoXBn2S7vL6a8DVzYMfZTtC3Lw21j6wHR9MfXDjFA64F7",
  "key33": "4QBicURuEv99LTsfhC16NPWjuxpuAtsuZVHpY7j2PXy6rxDtBeGK6ih2Xs1PVDNYi5dQCg9vfRNp6SSaC14aC2cm",
  "key34": "5sRPdPSHzxPfuKPsqKb4zNTWAB2WYr18t2kv497U2Zt43ECJ3LqH6hPWjR12Kwt7fJhZy3WiranY1NixT9XZYHxD",
  "key35": "3VLi9kXmvmdZLQAntesNWLJRcW3Yng9hmpNWumzFy6GpyjAj2YCk82ykneMKc1kGKyZAUFz2Ry1RuzQE7hqc4sGw",
  "key36": "2GQcuN6RJY2dtW9FmZJwgjZUSbBcC8Q9LRJCCWVir2FxjFNiZ5n12Fziiv4APmZdZmotrQvAnESswT2JhFVrG63v",
  "key37": "4T3GftWNB7GnF3izqUHaKC4qHSpcDEgL3C7Kge8NfYA6WEqfoBpad1N5kCpW2E8zHNNqG63oBKrcSGy9g33YFXwy",
  "key38": "5iEtrvzNnaY3XaqRnUk5dQCXsNR26TX3wbPahsMgkx7PQDmFHdXgF2SKg6joHibsCdBbqq88rhYJmATLSc3z93MM",
  "key39": "2tfvxHB6kTkRyi7QUjEi7NYKXD7MXMKbSXAhr1qvs8ebtRtNVGxhgonK6hNDNEL6KoLM7Pu8HfdoESd1pKyrhYz",
  "key40": "2vPngZtSkiPvCcV8BBCdFioFAaue5ScsaVNtp124qSuy1prEN56KtVc5yBmTUwByk1WU1QDLg8Q5ZusFjRBwhU3i",
  "key41": "5WN5AwBqzRhAcwEBoHv4wCgWqiDFxZkAY9tCsNNbXkLxzPmRtz3LZFTxCS1m1GAJCoi8Vr4PySNRzJxJvDMY5MyL"
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
