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
    "AxK1Gq7H3CTBy6R8jnxNKYtEm4BxY1XVCjc8C6hEB8fWVqY86xF2qrMFUTA1LMqBNPCGJ7Eup9UNiQnKfKMXQau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTCx76jNhXnZogjQFeF6ZGLqiUHr7fRXQRZvDcXpZXxoQzjCxaDksZZqZpDnMCLZUbh6PJXBX9MpP7Ha9VyzSKz",
  "key1": "5JvDDU46oR63XW4MoCcmz22gqiGRXf3arXxuoo9jidcu4SLSzBrowfvrZPnBR7EVXuMabKmtowhYzJSk3wSDwSQr",
  "key2": "DgrsmtAax21ERCmZETmkaUE5nK89LMbSAtwbZxMgz5MXRjjtfYY7aJTR4a5GzJHczMe3tGAuazRoZKqGGzf8GjF",
  "key3": "3LW4ajVpQtLLCHH799zKyHA7QpvHDsVvsj9wVPV2ZQwvoAs1wVRqS4AnE1vMEw8tS2FoxP6D2QCAsxTzXGPoPTmQ",
  "key4": "4U197VYAb73iWv8vxqpPKuG84DqPomQ94yy9Ap9vT3SZTgxYRygrM1vtLAb1ov9jbFKe49KSyVCA1Lvg83scrkQ6",
  "key5": "jqM1b5go38D2NMuMZYpfawcnqLAQvBemv4GRKWFJn5DbFYPidgmpXWbiSveEUDVaPP3PjYwi5R9gL7MtAAiKm8a",
  "key6": "3TG5RyyjtSxVjFAC8UJWUDN8gXGb94EYMs65GS6Kqx15aAugMkHhzfmrBrzvLgU8CCWnidSdFCgT7SXc6DSDfHJa",
  "key7": "3DHoZmVXCf9LpoC6XBwaTBaGbeEK7Hd2NP28XUY26AtLK2TxfLe2RsCckSpxxLCiPftxKztuYRUiAue6TjjM7uet",
  "key8": "a6sFfVWqAuadTSrqpg53EtkQWXpGMaZeywz4qG8SJYztZ6mTRXvPc29uCvu8MR3dDTKYdNEmsSCgWJw1MA9VpDj",
  "key9": "5WM4zggc7sp5DK5kAPYMYcHEGhGfqryVyoLxDXHd5nm4FoQK6SPAjqtiZYnPLUMh7dVGQod8K7C1Dg5RaSWP9oPy",
  "key10": "4emvxZSXXvidotQgXhshDJYy5tGChJoFvPMf2tm9mx3jefV3hVii83D1pW65gQstYZRgb1vciLpAs79RXJ2YeK3Q",
  "key11": "5tnfNuBky7wHGYnAmaCWgqKoRDvXZWKazBGzoPDbXN26nKFAGJNSUVoFNM4bfiT2WotxtvZeoT42PCmQZPhVMhAK",
  "key12": "4tNxsof6DoW9WBJZXYT7v5biAzE8oAkxL1fmHG3uCyoF98Cw6KwwRX6jWubXMKyoxydkpjs3VfTqTyw95XdFaC9H",
  "key13": "zvZwQq5a6TXstdcTYoFni5ExJVHZUtmq5ykk7iTV1FYwVyD6aJ39rMYefF72rEBsywhEZ28aGgpwU3jhZEmhidq",
  "key14": "J6SGFZzmZ45N36u8Znqi2fJPKTmDJyJ6LRNLsUo8Cxop4hBgYVfUsrnGLXD7hYUKKXPiuppwBhN6mt7HRKTYrqc",
  "key15": "4eQuGbNgiWkVZtp1uMsBPMXarqfAUSZRGa9BDzM7WSA1SAvQaryePgaWcfbK8vq8LqToBGtwwRsogkxZyGFaS9RR",
  "key16": "2d5Y4SYFumNPUNNr2AN2guZ9a1wEbvKyfV7rDHD3MFMar3UXWGV914PPXK5xdQYcmJthTUTtJXR1jrLscidwRiL4",
  "key17": "3483GZm5wFHZJHFf5NLapqU81XCgmPFNLtf5zCt4Mg491Vg2Z9zojinXeYQ8WVLc6ydu66i8rRnbVFwjBEHxQTw4",
  "key18": "4rMZfu4cMjsiPimGThQU7B4Nrbfp2MRumQ1RVBY2mhr9bq7uogzKtm83mKySMUton32L9uRxuQyrBEm1K1xWw2hy",
  "key19": "YAZgiHbSRddDnDt5MqZcLxtmuZ4W7N5RE7UHUdH5VdyWijvYdFcCjWcUg75qMRpPkZzhHtGLsjK7Luv8cwRnot2",
  "key20": "2Vs7EhDut9SRxr1LTh8cpybBWoGtYxRHoZVehqPiJRtUu3bvLbsaTCeBisQFSHVC6kv3wXs7RDfmYV9NYKY6mtmY",
  "key21": "yZX6vq7MexgSKKUZF3qBBzdN7WDyqynauJhbpMxs48LiiQNPtfTuVodSVT3L2q8FLYNgyPrtFkmWV8CLhzimidD",
  "key22": "3yDdDiYRQ6U4peAKM2eixJup3DTeQEvh5hWrqHWHasdFCNysQVcfPBzgTMmBpcBCiX3XtwWHv6quM3Fk9tC5FMhj",
  "key23": "21hhUALgf8CnAtyiZZK37Ti1LQycXpZxuewvm92hHaVhPkrHuqRTbnWBof6e6rgPf3WkDK9fxBoWwGrThRNXUhiA",
  "key24": "419TwiMu169W8sREfwLdqH2sK21yujYLkjNc3CKjzXJw1yEMgcvoGA8Xm6mXimJpjeUU43dHM1uNktZKv2C3X9Ln",
  "key25": "4PqrGYzMhFeWXnR1hGtAJ4Hnai1FAY1RCdV2446HsPPUcdbG4qrZ5nnSLw94UBo21Rtp2LYjuhMqgdWxbuvpi5X",
  "key26": "4ey1NTEwHPoh13XjPoJ9XSCRzx4NXjFVSay1DStEjrnX7ESym7gGGAvqy2aHYtFx84y4Jj4CtGVLMcy9jUTNZaBq",
  "key27": "3wJ782aV9cuWpnLxeQGjn4SqYGbqB76JRwyTCx1jQMcHiiQqMcNA7tCRHZXjYGsDyrZuMSjf23frFmXvTEA7zV3a",
  "key28": "2HPUw39zWNe3eW1ubDK2wfJK9gVUu9U6PnQv4XPC6TbsPgFTwmk9mtdGd4UBEJfFV2DYSnxRVWPTz2EDeRiKtQbh",
  "key29": "5nzG4J3fDKvcnht3x8bMfD7ZpyEdkSCMJwSHB65LBkLz9PZsFJSPRRZ2eoGLCZ6CgRd4TKYMnHRtxaNC4asKoAYp",
  "key30": "5654emeA2k4shVefdsyCXRAt4zYh1UrufGgKfcFFL5AuoZRPbv5XLNS2zuKDcZUojmEjKWiUJat9zfXqpggBoPhh",
  "key31": "4WC7SGw7FDgFhChPCjDNMkZNjimiEQS7bYBda87ipktVpr6FzJfbnXAxqQWbguqrNK9iSSbHFxLrh4zxqVV5Q6LE",
  "key32": "4NCzmGu7wpzuwvB7nF5UkqcP14NiPw5mnueZUpSvjFt6fezq9omQ3kgPqBjcBMdjrs4c8JhKLtBTYgvTDRPRNr71",
  "key33": "4LYtMGnUunzbUSSBUSGgrPHzU7uonZsV9T4jM6mm3aN5N6Vcbrqca9Q39GyM7jW2STAgh6TshfAyNHw5ovfsmpor",
  "key34": "4XfFLNpq988rsoxGHGXX9stzAyJMA3sJWZytTvbku9sw9ABwL4hkdFRwFknDeUPvmHZywMmXiUPaaik7ZLHj1SaE",
  "key35": "25Rvd2P28jVW8szZAr7sKXexctytGYhNWRpngaenexEqPSFskxP8VjV8XZLFs5MquGZno8hRCVhySc7KEqsPLT3B",
  "key36": "2erWwpKo2d6Dug1HGJmPFpLLfFC8tizAJDm67ej3J4BQHQCTFCBGDh889ynpWFA8oSE5ztsVqtApW56LXVYUquQj",
  "key37": "58aWqwi65U5EFSNoe2eeH8PRUMbUH2Za5scxHLYsaKf693ZbKw7cXgE9sNK9bW3JYZy8saETwF8t5UEfT6Hf9yxk"
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
