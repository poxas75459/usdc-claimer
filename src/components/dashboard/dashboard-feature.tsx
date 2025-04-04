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
    "5yEeZ4YX5EmPC5vRoMGvqqm5jLKzEobXSwajmqDR2kWxxrWZPB8JiTqoTgFrEjq8Yyt7WZZ8TZ2RZaZL7w3XmgaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QwfbELSzLhXBS8m41yDV98YTF4ahJPcZdKuJgnq4uj5hcn83mLM94D74QCg2vx1Fi1B8TVtJ5mScdTbEcvUgq1",
  "key1": "2ZhymzXd5yHarw9z2YvkWh6CHB8toCWDYibYDygbsc1rbWHNrDbjnsQf2bW3kAjKV1wypG1F8rhGNxsrv6AoNjyS",
  "key2": "5SB2TNzM8sXbFCAMqrCqdLXb6iHCX2FQ12xegomWc81UbhFRGHQdeTEztqbTAi1RkWVxWPprwC6w2qASXDaWuZaN",
  "key3": "5uCNNccukH2MU3s7ZdJ6a74vyNfJupeudKPdGRga7tnXPkuPqvs4bPnJHhegVK36hWa1Cj5ErcgAu5ftoX6j6kTA",
  "key4": "AGqyQsQFr7WUGzC3qHVcSiZsBVw4eEcB1rDMZ4frAbj4SWwNmvhoiWBTibUCWPsiV5UP5Dr3jqvbPKxF1xh4onD",
  "key5": "5qRW1KqWPz5UWJhHSfzCurtXBY4FUuLWtTSWf21fhsfqbCAZKHBgFzvnDptfnwHbJten1rmYNxuiNa4SGCczSJdq",
  "key6": "4gxZHTxztBfwTwdR25neRdVtG38bbyvc4ndQoxBQgxfCBQo8frQZD5bXJErBPD6bcwSNCGo38Pcj3uGUn391ZvJj",
  "key7": "3CUXqakW1rFeMQwjiw2C2jA2BSiChNusHFCspzz3xLwPgMFE4CAtD36trf3ceWzLEspnhBCkjdpXdUsGjTr3mVgJ",
  "key8": "2CKXurf1QzdPXxV8Uwn3QK7iCUPx5Xa2Ft2Db9dt1WRxrE5CVaLSLtq4FXUUbiqVYL1DWBR334pZXxcJwiCLXnis",
  "key9": "sykcRS9n1smpPL2Jra6J6ZNL21BciXwK2wmehRGNFeVqqq8bRrYUseVueJWu38hu4yGCmt35WB7ZzfVtmFHg41W",
  "key10": "2cXT6FpVzZXFDXyvjPP9Hm7uNHHi2iTVR9Q6QtrCXDkkgFPB2KGtwDcZcSjJVtUWLoyXfrYgJbsqCbnAg2mtAuht",
  "key11": "2dbga4aUfa7y4ryk4Lif1CHW2kjG8QrxiYajuiSzMwnnHN9VVAsfNbU1C3sv9Hir568xGkzEtiffKTuqRZDgHh8J",
  "key12": "aQ9VWndeNV1b7upfq4q2MbXswwKCAsW5gjUGr2fDKbEDUC9cF6D1dGpp9aPoiLonY2WrruohsptdhSnbqtAqKDq",
  "key13": "5S6XjCvkvJLjzZFrQVLwePgVb8u55HSfSKEarNc4Z1EXP2TrNjYMSTmjj9t8Di5jZLg2wjs5bCivGRpd4bivdUWo",
  "key14": "4wMNMfrNfpQ9YxSxRNGfmB91ADpE9aNoWoUaPoihkNSWUjYYJGDWPDihmv97a9LRyxRoKhMRdWhY959MdZ321rWh",
  "key15": "4s7Q76ajNkGypGq1b19Dypa1dGwn82xYMoYtqNoszywWrK4gLd7pBs7t7RFErQpUCw913abq2H224r2yafu6NXbZ",
  "key16": "3XiyGMhQVjsHoEruBx4zhbCiZ5i87SbG9UVooR1korVRhxJ8XEENit8owmAjzTdXcSGDJ7hiv8qTpAVrz5NENV1V",
  "key17": "3LKquHGJca5jswbuLo8S8waa1XbfTu5bBKG9wnexKToLMJoiT4bVotRj6iuknkX13AmjSkceY9BaeX4F2tSVSu5G",
  "key18": "5s912AgfT77JbtRTFaesM1Hz1G1sNC1gbjWBcTLJASpkgFvqi1P5xo1E6s2ghtUyMvqtJ4evWdH7EK5xnBSsaEia",
  "key19": "E6d33WA3w6k5ADQxSGoLwFQmP4S8trvgfNr3NsWnF2xuRX5YzdpVYoCpfPTwTc5CbRsRw68Lxv8VyxfFwBiq8Sf",
  "key20": "2iUo1eeNuPiusjLKTiFkqHKAHLn86dsxybcSzT2Q2arzhNmX3ZmGi6d4J9TSjewJrkcxLh6irXRxagUrdRm9VVNW",
  "key21": "3nqB3r9XK5HngfGjyb4RLtQw5sWxuDzXm2cSf7f1sdB22PiwCxUGzAnCx8ceFVS7wswyS4vjUcWgrLwi9R3tZCLU",
  "key22": "4wACczo5DndxEdwYFPVcfVk8HCxoS6WCW15XfatrhXsyfxPX7seESWxaB921DfAVpN4WQioJwv4gakjLkUWDbKbG",
  "key23": "3Nz99NpMg1SfcKSuHBHeZg9VKUvfBs55hgH1mabpBRWF9PYXkSu6eYBfnuQHgjLQBHUqaq4N5QVfSrbq2ZJHYwpC",
  "key24": "66ugqaicxvzgVpWffyHVBS6tdgzPCU7xHbiCVkcHbUHoFTbiWoGirCMk2UpCKmc3sm3iFZa436qBmD4QWHgUncPs",
  "key25": "4tyPiuxdFXwCPGauEpoWW4Un3JW6KiUuzVUFj2wRcpEePjisxascJdhfqNTLf5jqLX8Jc3NgS6ztqDpEY2LL1CiN",
  "key26": "4N6tMoNi2UjUu5BmjzPLiUKNBVfaREdi9bQaSo9Sbj8gkR3j9vXG8AQiW8Lsd83R3sLP8HaQ68pUhHho3uczyhWp",
  "key27": "3UxsFzjnjHRkzU8mp6LeTTJJeygTcjujAAeTfFjP4FHPpPBSHqU4VPtiSHRGETQpLRpnGkF17FShm9FeXaAwELE2",
  "key28": "15uxzsfgGoTxxzHuQnei8LaALad7wmxEtStJSB7VJ8sDUmvGAvCGcNSq5Je4ENubmxV2tXpJhpmJD5e6rEaFmZf",
  "key29": "7f2G7u8HfieN4woZTktgnYr9P7QJJC7epchsUKQauVqipmyeKTy3sVTREjmakrSqnFFxh7ERsMQtjgF2sSvW3br",
  "key30": "5xeWY6uPMnFk9568x4f242mfu8xEryk9XNSLyqxBWcWuFdVEVkF4Gd1nLU9BhCXiiQjzBJkLMkpYw2Hx2CbEhhZv",
  "key31": "4rttocSwSzUK3fhbp39NuuBPAGxSk1arfjKb54gWBmjEx5YJpTUvDt6VxPCG7KDxi4WJUTWnmqDMvMBx9e5QuxDM",
  "key32": "5uAVNc23SdTtsw3pCfX2ruyx2bgAgJrY5g8PQL1yzWt5eR6uELtXEUAs1J9B52XBAr4Zf4EC9NcYr7sxCkeH1mrQ",
  "key33": "46ZLz9cTtbK8WoZESC31afzBdtferWN3k6VNBGhNn1NZ2ho7exVDNeWHaoBLiT9xxTCPijfkMYHdiozHPNRrFqZH",
  "key34": "4mBAH97LJPLtWrj91Z9ALZCb7LbqjwhvUfLb5Yckc1mNBXq8i6JbGYngNtQxvmQGQjimUHFLwjkNQ7evT8evTsm7",
  "key35": "3iqbwzeSbVP9dYwFTPU1khQTouE3jiCcuxJaCxG8cA31qkWXABzCAmd45v4ugnH17cLgbrxRUc7a1XJBNzFox3nM",
  "key36": "gCwJx86xQzmEr76sWevV8NaMuKRVLphwiyndCzd9RUCjSnXo79edL1Bbo85CqYQnUQpT8de8ZnS4dshtkTPVZvy",
  "key37": "25F1dhH81hTPTKfj3J1NwVutJTMT7mFgKsPxF9v3ws8noMGgYVRG8BqbFivwqBTytHKPg2K1vKLEyK7XZmQqc1xC",
  "key38": "3NwZN9XeUKN4P5fG8NGWGTT4BM2r5QMSRvkcnCTDL4QgTuPGKdGUMf1MZaoVyvaBdDovB1LyuKGW8j8Lp2SasdxS",
  "key39": "3bgeEnQX66wE498tbY5xiMpP8sKgYYPcixkXLv5MHT5Qi9y1uGqR8vyX8ipaycFWFGEzMPLqshDkKT1TzCJmRYmw",
  "key40": "2iKJCuaXz9m5ba6hEyNSsYqp3DEBA5hxnMXnUxBneDe2iMUcpNF3PGSqSNGSeDThrqDAELqEUBg6vv7yPYEiJvm2"
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
