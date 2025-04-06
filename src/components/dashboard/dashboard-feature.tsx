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
    "5xh2trnXmNWam1bm64FtjEAme9UHyfccg6CQaCLg9tg5Ddb7qCSKoxLvMb5dxCQ67vBFKevEjaC89S7ShYr1eEdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6opDNvRhCHa67JDgM8jKsRUqzK2cnMuRjrrLVcCgu5FacgGSx3rW3diEmUySeGoHCt4FE8GLn4ExeEPUgegzuW",
  "key1": "4zphGm9sRoS9aP3Ca6tm6PGvfck88tV1nTaVGB8a87Z3c4nrqZcCseDZb3rvCdGo978SGj1gF1LUMRFeFw49fka4",
  "key2": "4z9SD5Rue5xDZ6Dsir2mCgkXvd7rKqXC6obkb7pCQ8XDZiA7NeWzSCUjWfyqi1izhEraGs1H6WFAtFCZJPcgFuGM",
  "key3": "2xX6PARdYpingQYhvtJGwVHT4tSVvBVtBZAQF7AMx62zr5AcDgofbajZa1zCCoMDuqgdKXXXEiRDvru3jgsSjbvL",
  "key4": "55ASkxuhj61atQUJLgpAed5f5sWrjtAqgf15RxNi5eTVGcsQXixvNxR84EhNyVnfdzx3SAP5W4nQGnVTgf6TSWKQ",
  "key5": "74SgVdntihoD2QQQDVAUN3mBC6xYTRV6jShBWHez5XLZRd9iTmyREvR8Ybx6H1wy4pY1N147o1RLDSQq6enHTc3",
  "key6": "3SH6hsEr9VfyaHf26PxsEhDnkSSVe9TCwsxtyvrop491Cm1aWFYw8TU6h8qQ8nxEMpi8giLzkr1svjBc5m5F3ZbR",
  "key7": "32RfcWjaWk5RwJqNjndvgbkSCi9extssPuFdxEEAAvfnohkH6D7H7VAkQaU69gNKzLadxWGamsZZCKp5pGPnZFR9",
  "key8": "YjCYEmjtgX7xwEyVEdmj9RwYs4WtkbKazuqinyYcTwuPD4238uf48S24YM1ZD2AAhPE4jfnPmtg6EyiuHcJWDTu",
  "key9": "4Jw7JWRy3tbtG8WuCiDupxBhs64xxn4M6LuZDnbZVJWutc8dBuLLQVDV2MePSVhhjhiZvyuaQGLw898VXVmprFdx",
  "key10": "2qZEc5EuVPDET544rZZdYgdHXmgCsVdYw5CYB5EAFbAxponQBwgk9ujsxPN6XyiyMLxx83U3915Zz5h2oSdn4DVw",
  "key11": "5fhKnSfBUTMqsxb8o5SX6dyHBXESS8KMwE1b8UACx3kT8N7DCC3DWYQzQcuAG34rTx4HiUok7EFJPhBGBCpugnYe",
  "key12": "2DSYmXY8XsBKEc8Sx9JmFt35Ttjkt1v3pRr1Lydv32S7bi1CWSoPQwcQjq5sokMtAwK1zfN3uSKK3fhuWc7bisDR",
  "key13": "4ye6n3c8HrjzsVtpGF3CScnYM7n3JW9jgWMyMneXcH1yPx9yfN8FMncuo599CZCifrTazYu3bvBy1TVpyn8vEDh2",
  "key14": "2ePkYDEApczKJjgzCfZ5HMqo2qhVFwcKn2CRAvwvwfdqjqL6rBsuNRddYNef3dcaDLd3EYkg8U217z29C2NPG9Qa",
  "key15": "B5VDF9GKwZm5dvns74P9Z2J7Zvgy3JTVeq7fedkX5jS3N4NtBD3ST1tHJPPTCt4LKsCMfDfsckuYynjLgNe34uY",
  "key16": "5T3rnm7WCGjDyMp5VdSQWjbdA3VBXjwdKCr5qMUp2pvGfPKtETPGJ1d9zNWtgKoZoGJfa9FzD3HvGKfMsHrpiaLD",
  "key17": "46gaP9pG44SUQZL7xspY6VGfjpdpDNV5Wnv5NLPm66X7F4W77gQmj6buiyXcrJau8BdChSmozS1QzrCqJsaWF1bj",
  "key18": "457CNBc1gS56k9V8fHThJLxoyhenvwkBALfywt4AuJd371xCGQaCcCHVYPczcQhUcAGaR8fB9oficqpkTdwSUbY3",
  "key19": "22r2J7rQWZAjjwkWYw2HeMV7X9uXPJeXVGteMZ8F8ygaGaBgm5utZEvViwboVpLv9iBsQF8Y7eVU9F8vYQFPgDRR",
  "key20": "38kNzskhHWHuDui2aUaadvSFYHeGjrC7PbX4ySBTzg1BkSiVye3faG6SqNnSiZFVmL2DKhetN3kVN6BvTryu68J1",
  "key21": "msDZFyWcqudXCtBucrGqs41bafKjsgaBW9oHwmpBKuna2J7agnvqku31UeqmbeB6GxoJRvtwrwbmHHNJURpEruV",
  "key22": "3EJBfjT1VZRsW1UPGpwz2PFa47FiGezKcg85K8kKYQAWuTKssU7ygYKnLCa2Y95FtJtwjXmm1JZYuhzcANPZR2Ae",
  "key23": "65HMteSVEfNN76RteWUAvAJxzPhbjA2rQYpYXqCCKJnhcGRBgBtJPyxhdzCT7yu5zSGi2vfVGJ7h6stw4sZC7SCc",
  "key24": "4VPm4weXiPBrncbCmgYYVo345aHBjQ1tV7b3TfNcfFettawmfycFmf1veWfbYB9GRqY3o9cKndvVSKcsw9zk4CZY",
  "key25": "3iccSBSVRsAsKSExtqTDbmqcUzxCMMQd4KHzVPLbvkD33dk16y9RoWNiEYvY1L7DFYFjdSje6EHP6CgPMZub23Sp",
  "key26": "2EZ3Y2izZRMbdd2RnZJAaDqQWGE1WgPZC3oJsaRxgoxs3mWGDL9SWBrBee7kkLcUpZJ9Giof8E5qjbF9PDjsQDpb",
  "key27": "46eKdMu8PjewFj8JrhmvgKgbMZwhJNwDYg6eZrexPwJDKASHJtphGZWUVqYNsHrFz3HY7y1bDDM7wNDsWJq3M3P4",
  "key28": "9oBibkdhRzPgeuwbLD61VSNaHCSh9Qk9aWK4oweDADFDrfwikV9HRm4gMjvydSDtiR9vLfaBiztF5591aeesHRr",
  "key29": "sozo7Gc3LmPfMwFJrDaABKU3HSAG9LoYe4rsg5y8vQfQHCGAfjszqqNDF8Gz4AX2UQpY4Tuw5tspYfdmdnZSEG7",
  "key30": "3jvXTSFEaK8oQa8H1kwKAGtmAXcKQ8m7DmrfNbzWqFX4CNoEPCRqyNBFEHnbABWD1q61kGA8A8owvHTPFJyjJxzM",
  "key31": "2zTmtEEm28XgZu7sF45QQMN3K6KDTzDuqTaJzb6ufkskx7yPUdBj4JpEUY72dmZrKQMw4PiXnRJHBLRFhD2xms1p",
  "key32": "4ew9P2qP4dYmLrDcqW8DDVd7zeUUCsK5KHk7YJUJnXZneRGNwPW6RN9KvskLx9AKEfPK563kpBn1iaRKdGoJo7bW",
  "key33": "54MD4McxcKGzSgGcwxtrdCK9emVc6AFNsE1yguDfHmopNkmvu7qCMBXyFUETXUYByGj9kqvqPaj2biDsusVKbbF7"
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
