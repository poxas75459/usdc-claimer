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
    "3UppE94pj1EvLS9ee5DMgZZwzVSW8Q5CkuQWUMMsjuPUPmtVKQjQ781osNLbZngqt2twTmMWZ9vyhyDJSd97Cqiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ve68ysYcBanZiPnoz5XZtRpb7MCioTd88hLrPpvmUfHQr6APYHo6JoB68WJYKdUYwBxPPfb42NMy2o1CsWYJZB",
  "key1": "5AfGJxo1F6fiV1QSXeFS9medcUQvjgTbt9aiWxW5rkTP23QJkh6EkGX8FsdwYxt3wcLnKqtH2ZRCPpRjzDNsdxgM",
  "key2": "5u5KMsysuNF7ruxXVUfGbc1TFQW5kmkrfFbUFEhncHfh8T72r3DFskLe3V7PLyhY3L1WksHEHgskK3bu4jbbxmVq",
  "key3": "5ACffJ2dVNAe1fGFNrSgbGSbpsVMi6J1WGYbjd3529pY4QEt2SpQnKeYTMHSyEkQkBYFaSBwegPbBYP8fS9GTm5",
  "key4": "Z5p7PX5mpqiXmyNUv9SaSAxYFUAzZxvxx2pV4crgySkquCbYb3M2T37yxw63zcpJcmk57sXu8bdgVY1epGvzwzv",
  "key5": "4DY9eozjnEC6K262VaH1LWToJEPdKYqzS1NQCfYcyJHFoCoT99Bsp7JeTwZrjku3pu7BZ8Bvm5UAkMQzJMTXCwHg",
  "key6": "4csUPQes6z5qkGyWbvYnCtaUvRvz1PQJV65bes9cpSDe5BC8rngoQE7g7txP9h8XWjAwT8s6wpra6CSBEfZoMhp6",
  "key7": "4CBJzRy9VVPRPYxo7S2v4xt1QmiMs16UiLZWrWvDa8dZ7EfaPQoukRqqun4SBrCpg3RvDyic7VFk3cHgy6zJkwgS",
  "key8": "59CuPiptXKwux5nU1bBupTXdvir7JKK1HDZvEhGrxcXhSaji3wnffwHm66yiH6BTWN7bgZ4G5g3CMkrzWJmCqLPv",
  "key9": "5FGbQVSSD8yEK4F9hhq6Qtfq3uGnibcoyNEUrQ4vKxQHXT356b7HUpqHz3beABqWjEz1WC1d1rmZKRYMhmhNUftS",
  "key10": "3qEGinNbgS98Uq9f5vN8QttPPWmTzJrtR6Q7pJWmsepji3Uz4m1WHieRgkmVkWD1reEXxFmbuBqdhVTBPfuLG4wo",
  "key11": "4Hn16uP8UxNGXiNpAixRGEwnjNf46sXjv9ycoiQpmGHuS7twvQwUXxejwNy9soyC3escf7idRzBwaGi5v7hWzM76",
  "key12": "5BYKp4SFyxAz4xVNU8puPVFcAGTb4cdWgzARz6LYMon1Yv5LLhqmfBZpyfrXVsvSbtQp8HjLPQ5f2KxA4sdYyaso",
  "key13": "HYcfLVzmCAMqHMbGU9XwpNah89SnbhdEYDbu7ZHUdcrSB1HsQgDQmr1vuBwvL6Uwwdw88S81E6eprQmCcZVictU",
  "key14": "5tBDvRtY5dgZ43o4sw3GnvUvNThQnk3fCaPkn5jnpTNWaUydbJiSX2tTn46RfTrUjakpixjRVbH7G1Tg9VhFV5Mf",
  "key15": "c17ZLeWtnnDYcdRzXuScfT4x9SaRxWaZf37awLemUs2c9TVUFw4QroobPQHwEssyEPcuNgmMA5U6L73PD6yXnuy",
  "key16": "2bSKvmfpF4nvk38ochAiwkbAH3WjvT9amehdNxop12C2qb95genjE1rDoWW7rGxHBXvXi3EHFEw1c7CCwAc4nZm2",
  "key17": "4JSxUk99XWfpeA1LmYysXgzUjUygTQ3WdYCDNx1ig8LZAiC1zZJXnQD8Hq7UL824uhmjcxmueJUTuX5eHMZpHkAS",
  "key18": "2uV6GVVwStrpvXdB7ZncLNDomX1F1xL8jY2ExmAvnHx1R8K9eJcjo9LziACHVcT86nbevJ5GQr4MBkiVezn3npMM",
  "key19": "4qij2crKjJTo798g4V38ggQ1NzxFDTZt5nsDtvRJk8F3oDq8Djmsv8i5f4H5QSqnc9sidvQXF3LAUrkD9odSRHQq",
  "key20": "5jyf2z3jjdHzB9Gpc15nQkjvcq42jR1GR7MReFAS9vSqDmcUfLtYa8jEVoeBqMrjWVGzv2a1uwzFJ7VahuXuUfm9",
  "key21": "4UCZUrnGaySciyZWFzCDcJgiLUzovuZDk6vnsfrnrtwzFo3TqgJ3wYcPu7pwpKG9EvWqXgMfDywLSKXE2wbyWEHN",
  "key22": "4kkw61PY8qjvcVC8BQZrVwcjm7tXzaXxgiPJSpCAj9X8XHtkVJgMr6pg8YFrnQ8jjRG3PD5fJnnhbdgHfSHhtamD",
  "key23": "3gt4FXncFA8jg1NKZgEx4UsRJ2oZy8t2gTFa62wRAuEtJKfTFNNKLEew6W7ndCPVF2tuSW28GMV7W74wnAaRdE3V",
  "key24": "4vmd64DqHhrUDs9WR3K3ykfwjufgTSXt6jyg9VJwTCj9wTBNTsn6AXUxT79gj1cVihhGwRFBxSQBf8scmQAsjDpP",
  "key25": "3F1CfGE7grydZt99Bmp1BmejwzDnU5AhNhAauhPxWNAMG7UK9yqodaZGHaP6BZBaB5hvCdqezG6CNjyBX94eNVLN",
  "key26": "2tQaVCGdrL9qKagqfJQNkwYt43aVmCJhQfCGZkFhV91WG4guL2f2RXtqosXgATu1rTXZ3FYfEGcPQ6i6SBVc9qNH",
  "key27": "4fhhUmauV821m5XXhdN4oiSRJJ9orFzhf6Be9TotBHm7ku9P62TjXws5d6WeL1juifoZmXqGvrFJG9ZZ5hzNE28R",
  "key28": "oCj8e1vTicjZ4FcXCzoKkchUS47Tp6cXeMH6XYmjSXfQC37fSjTepVBBpyoBnkimszTKasroGK9WtjiQYSrG63K",
  "key29": "53WKfcNTWSf9UirvEgw6JJEGeVzxmHQn2ZH6eAZNVK7Z3fG6r4R5zSnJk2nMism3Wiiid7yKPAYcvUUEk3Z8vxjf",
  "key30": "4REVDmHHRcVEh8TkMR4J742zGGHJjKdSMnGjpM1LU35UsLg12xR2Epmwf8WA4sGto7ZikSfzTxBpWyUYGUSkRBVo",
  "key31": "Kyc2t4DSsU4wyPEwJqf2tqe1ASXgav4y5eDjk7ekwmNiRQWnyy1L1xFtYFCVCiLVbifxnE61yUR8Ptk8gpAdWtZ",
  "key32": "ZbLVtzKHju9Law36XZ8tMA9TzSPsdFkeCjvv3P6CFAL3srfFUNvAgTPzbUmXUiZcvxDjoAG3CDFGC5KjkNfGRfU",
  "key33": "2WSAxD1BeBLYRGEw1wtkxJb5fz6HKWPYCoBaAvbSyfW64TNqGZuvGLtxriD2iaST3y8vb7SHCFAthvr3C6MyTrMX",
  "key34": "5MRQpsWggxGuUspac6o1j9kQnSxQwUc6pfdxqVSLxjBgyCx7bF4tjiFAY3DecaBDdYiGdbNtvtM3ANo84PbvFdwD"
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
