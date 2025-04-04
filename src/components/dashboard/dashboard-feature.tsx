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
    "mdv19pCFvvxUaxbDaDDxRn8gJcLjqoemegs8vN9NXVdKwbUxWGs5guwwbuxwejsWd1Q91t6r5VQNzK49qRdnQkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sobkhf5zSMZ76K4DxwuvKzm8kXDyU2PDePW3hpRxae6ADT1sx8J8eWpuSJAWkx7FFBw9k4QnjtVHHjAx2uzvZRt",
  "key1": "4gcVE6FpmBeHTdTu9jH4T6RuoTsbCdHAezMS9756WxorH9m4TByjNndNaEoDgvt6776nVb2ApNNTuAkQgwNcGKVg",
  "key2": "28UaTCRiXzJ55ToLQWEu8C5nf8anJ2rt6R5sfVJoMSLJBSWm4ULwhcrb9J1KvTb9KBmCyxXvRhBzAjMcdsNBJgxU",
  "key3": "4KH3YdTvjuCyMcKJ8yo1SPCyFziKVyxVnXQgnDtGs4qBTDyYXjJZQsdPpxPtJn6urmT3p9SKVmnfDgnu6JMwU7BQ",
  "key4": "3DRde32skPJRrAJj3gsPkhoLS2o2Qh2RiRpGF1zki1z8EFXVYCysGcjsH61KTBrDsnv2XajLjnU3T7DMfGR3LqzW",
  "key5": "2ZebQYVX6gsQ3g4bcRhyv8R4k9vfkP7tRk35H22w7wWsCBEeaKKbKrGqrLDkJRB7qaZiEbUH5V5j8TvZnHvqspKe",
  "key6": "643qM7TRZKrogMDMu72GhYFhjFMDojZB2UndWk2Q5R4Yb8yWFhE5VYTcNcm4ErS32eBq1hH3DfJEqYNis9GhVbPN",
  "key7": "4C234m8E64Gebqix3TZXVrhVaBnKGUTc3QppRNs2uLsJ79bzCkbWhsL6xWCKFAkoAPSG8xFnfj1nGsQHLC1XP7eU",
  "key8": "3qLpocBsi5Lk1sjp2YTMK5JoWkH5bQLRZCM4XmovNNV6ZjaemDehbjff1tf9xkwsW7DhomcR1fb9UaFHWEUWxsNx",
  "key9": "5Zawa32Gq8WqWvyvJBTwLRs62GyAPbLHt1ygg9Ro53W93DGzdpjD6TV1UCd8o8hnx19KPFDbaBBuLUaRiNTQBV6e",
  "key10": "4ucf7KwrjtWAqAYH8RNJC19gLkQhX1SQpPL2BwRL7BSuWo3TBV4wYyS5AYjytnhEMMscSpnz1ixekWtcYynJk46G",
  "key11": "4ZahzboWH5DT5yRH9Xy2Vq31eneYQFmEiMerYeWWfP4VBZWYVJ7weDzbPfwmaj3nRkFgRkhmtitQxEEnqjZtuaDe",
  "key12": "2ZDveM7z167fY1QUYHZ92v9BuKADeBtBjL37eUiCheh6iq27GMbz3ETfbKXpAdegbYw9UiEQzdzLjAvxrMsCYHJS",
  "key13": "26nPeEGmuYi2V6XJUC75q39WgxG7gpDCrCpazGePxfdK2EbKeCoGC8aUYTCtEoBNdtb9nYBY5Q25ww8H9gHutd6g",
  "key14": "mB47kfSFLERL2FksyLed1t27txRGwQ8bbSf8cL3NEWXQoVRnGJ8JBPz424JhWT5tv7ys5NhDAULVY2sCbqiyXkW",
  "key15": "3USPioEeezwhsFwcQCHNCGYsbUNsX2NpbWq6We8SS2c1CDttmZsE47TiJUCMBnMrBsM9PWzdY5MKcEPUZ2xUzFRm",
  "key16": "2AiybxLJNLHqu93vAFK9HRYjiEePFbVQv2my3mnxo9zYpbzWx2vtbdFRAT54MtJs1Cg8J7nFCHEN67SysfzeqzS1",
  "key17": "2LQjYRgxDut3zcB1tx28fsgnWB88Qs7tqFQYsTsnS4a8b54yVWwhqTSbCf12cXzeWGopBLrkFWejaVSRHdw1SFoK",
  "key18": "2CjDD5jAvjZCzjTsxTWuBmR3dghijTgYNmqFJqH3gggWQYCu8yCgc8Fh9WbkhmNY8LBoHFwyN9r5amZfYhU35rsx",
  "key19": "4Areg4wcBYQU8UybtdRpEjH4TEDnQ6CXafTSqkz9V1KAd8bAouBaMHhywYwKwQdGsZChvwXamoFGrhij69Yp34Qj",
  "key20": "5L3FAo8ex8hM6MbsdowmY9shQU9APR9BzcBZN5W1F32XAiGMZpvFwsvecmM6fhJ9fhpmfBDKLexR4DtdFtu2WcgQ",
  "key21": "JHQPdajan2YGwZQiWh37UMHPMoP2NTn7r5KjkEfuW8MMP27qadRt8DEVBKAVyBgkBb1FrG5TpWQJidAdgnkh2Vg",
  "key22": "3nVHTYb5vAbmhhSe4eHrhZRc5BQYaqhQRz7DpaZwS6JL7ifZ6Gvvewtnfusn1dg3553PEgihG3WM4iwVbHaWJYKq",
  "key23": "4m8NWPPhpLDWPSeqde6HkisawdbT8eqyqJhvdNjxJ1fmmkB9Jqi47YdjUxEB1Q2hifdAnaZ5r5X725ib1kthHa8W",
  "key24": "3n37onQYd8rFapSzLdkrND6cJuWJ78RCrffC2WiahXXJA5UuhZMFUBLuvpQ4hYrSGoXZeTgFA4ZspnsPFyeAePHj",
  "key25": "2T2vLnLmVXhZe9vpnaN89e3jjDK7QvVATiAPauQ9EHxCxPorQcisHaTMFY8S1nu4RYzXyiz88hkyWv1QNvFro3Cf",
  "key26": "5LnjxQsuRRJeiDDAVx43JWEi41z9MbmBqg42YF6Pmxp4XjSZAQhWob6K53hhJ2Zjcorydp7zsVUEtkRhHcCYw2DC",
  "key27": "3aQVXT8Mv2oKBv4Pme8BLUYwURJ4gs7i9Jas9QgKab4EA5X8EfY856KeeTofkMs8cozHURK2WJN5bquVVEM49dNU",
  "key28": "LtZcSypqBin9hQCXMZUS5ynek7v5rjF9MavWebqQqv8GMnz5AMUTvvLg7aDxtgexCEKeSLzPbbJJxzyyg7Dwt5d",
  "key29": "3NWKbpaU227xCmKRPcH2FxDq5BaNrzcVVo9mmz8eaQu6ZjTvYQjYDvdu1u61ADbbbjiGwNegF57vphu6JadbrSa4",
  "key30": "3pwhxrvQv71czXR6bHLZimp1yQuMfxuqN6QUndQVcvLzq3YD7fFyEsM4mbCu6JMDeEqn6GEzV1YEAerzdwK9H3kE",
  "key31": "2EcDMD1Lj7vPcBYbNgjrzfDSY6e1ZQR55UW5uM2QxDwZ9NSYLiX9hD9cigvqxbx31tnegXPgkw2YL5VVymm82RXx",
  "key32": "3xpFDSpMi1qXSwtAzZqYYwWCnfP3PyQKjH9PhdnUi9r2mskiUw1aXQLvnqeXvk2tQ43mo37bBRtjUCAK538zfZW6",
  "key33": "3Qz2yfvNxh8XZ5bN5voZKhCH88DfC2MYtMXdQwb5V5kU5vVWTGJzZzquGtnCTn241CCvRQEzfhB5zgDVRZTYHXPj",
  "key34": "5vqJjMK3aYi3bCodCNoCg3Cv6aE8YnwZZDb9jDsah9qfRNGu9U4DVgqsVqF5UfHgEipgzPPrUHqzhCzPvQrV8j6g",
  "key35": "2LoyPBz67PZC2Hbmnt7F2TLD6C5LirYYz1FkByn17yADHyWWPEv7QL9p3r1pQimwhZAoBtnua2Z6Z9NHpXCYsoB8",
  "key36": "2ykrtDYLdADAx54Xw9XALfdEWM1eH4jH3m19BwesBDBmi6AnWn4jEgZxGHv8dqhx3pdpkFvqFUDKwjarr7Wp54Qz",
  "key37": "25jgVANiesfQBcws7njDLWzqA4gf7eskk174gFVssGWPma6UWocniBUEQKaCAmY4Yt8LEya7E59ibZj9rz2juize",
  "key38": "vzczprA4gi38A1NHdqubeH1AZcpYYYXfc4VYUZbWN6ND16kRv8VRNXAMyZvTr7cqpXh8FC5UPTFAF5CQ2zsYiHZ",
  "key39": "23851Zz96BX99Z9CPty4nBJbApwp1AHNAtYLdGPRqJjgWAWzJDt26DYVPbmzpEefKcRFj49arCbSBxXP9x51fyxB",
  "key40": "3pxqBD14LUF13mrwn67QWpmN8xt7HooziMCwbKkfCuS1hnVBQoapm8cFcHNRmRecbWexTQPoRceFsDQbyhMg8Jjz",
  "key41": "oJgKUKHwVJDhJ9a69zMc8T2rT5D8MzBX5xiAkPdbrx2qFqkSzpYk3XXY1HTg3LLH5v3sRjNd3HA76b4mcoxUBLx",
  "key42": "PHXwsYz3KDiSz3JHc6a8m7CQiMpQxUoupia9vAqSCwGHwgaqcNat5Rq7CgFEKuaFGb3RcZ2XK7qVS6MCJ6umRHj",
  "key43": "58qpaJpDqHUKdznfKexb6CuWqUnvGXqzgo2fQS54BYrfSFgaK91c17DMK743P6UrZHmu3pdiXcd1uNYWenG6UBCe",
  "key44": "5ghCrP92J2WskWHhZc7Jy3cRStS9tpXMLN34PreUpV2o8hbjwZ5hErFHgp1HmQjzMmvVzthMAwEAEXvg33JCrHAg",
  "key45": "2ZvgUuvyksPUTWrmzHGWPLemsfRejzbPePQzfXNpAcCrWDd63g6vrgURt2rMVqYoJbTadE3CnBR2qeSRhs64Vy7t"
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
