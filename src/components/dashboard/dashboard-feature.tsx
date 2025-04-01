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
    "2eH3Yb37UBvXbcE57g4VyaNJUxcEX4BnsXtMGeEFLoVe5gXYeVrE7wUf6UCw8ivgBHGjTPGhx8yiniuUT4jpG5kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "btHvk56tBvXugZEsCQfXmf3gcazMkVSoDsyQU1hKwiDBb5uNx3WFdLySi2L4W8zoUtuM2YN17wArvfod4hpk6tQ",
  "key1": "5BgYnh3K1Ld2XNNh5zjVfKaZJBaCVCaoC9sMYx5sJ1cx9s7Xep1q4hSnyjFdA8Wfmfk9nZKp7rm3YWBPWrzgFMd3",
  "key2": "DAk1fL1GTn38N2HjtagHjMLRP8bhTtHX7WrrVKnoQ2JJG5ytWwmJKBiMRbJgLFpCfDcZFwvonzUQJoYP9KZ556m",
  "key3": "5EKLvHHXysgLqGbBdGLJdFm4PaYzYgE3roxnWCaagCYFZJuGJkGQxF981xVTV42Z4tnwAyiFHJoJeukL74tZwd4K",
  "key4": "2ERHn8aictpp516Y61oLAHf4w1pyU47gLYXMdxqkUbqvfHkieRBqdYscpustNva4LdmbbWGBnn5UynzCCVb9ngWX",
  "key5": "4cHncXaRSngdcdEZ1qagHyc77LGfrU5vWc5nPYMRXu9wHqsQYWUVhQq8XaX1SADeXCnbyPPb9LDENFsuMfxbvib1",
  "key6": "44ZV1TetaURZrFq4S9pJz2TabWaWXhq9K9ZFoKzbNoMWwJcTE9atH3d3UAAp2ECwCssYaQzX6PDyyk64CBQtFabT",
  "key7": "489nzRJrBsCsCbLkk9uTZwFpuxVqkJ1Hx19waiRn7FKEknXXNqptPi1E1WJWVf6rFW98xoenWw4VDvmyr5fTNYfj",
  "key8": "5cYMgUEiFAjarL7nQBqpeThNNuJ1zZdFv19cs6ntQaZo9obKsDxMxBGP6hDGD3MFFjQXxkvMyXrSW5hECcgQr7Cs",
  "key9": "6dPG8MfaViXwBBfr5iswUdRw6wCf59FaQDyGXYv5pJTzRVou6xMQPbKe9QSHbdNHHVzs4drzHF2gLZpi4r3muzH",
  "key10": "5inHoFVhacPCRnD8tEDHTZx4PaAAPPbZJz3rH7UgdNh3TF5ThVyui4F1XupdJRT5gKXxaz4LMpA6shGWe8yzyqnj",
  "key11": "4EXKmMC11cDkJaBPpza6MBFf7GaXcuhXDY436mnpXvNYzNCRV9iCBgS3FQ3bp3Ynm3JHN7GzcjeMEajXoGk5mWVo",
  "key12": "3NcyZwuEuMaN3QXuB7A5trNs4CKivj6XWoB7MuWky3sVPH7EtFL6CywfptgPqCu9mgcd8YjtUWPHyrZ8uuzebQHV",
  "key13": "vBep3KDVNttdSJ6dH7qYtcLKYCqtPA64pxaDZFDGuBk7JveYWen7aSpmmBYDcemhJKthV4ytxrTKFYnaqPLyriQ",
  "key14": "Y2sSwpS3jUtbgvAsZRibJXsZtBydmkdKdXP1tigovPJwBmbX46v4RKaSdjegoAVa1aA8DctoDcRN1veZhWoFZxd",
  "key15": "2ziUsnegCPAJMa42hKwudkhJPq2kMFQWzTDSciUS9wTWsiGs8qjoG27M8BxUek8dYaGVCSXXUUPAQr9MM3TFtskw",
  "key16": "5QdtsHZvUQM6DWLwNQtb29U5PsE3XjEXJPo3fQjN5F6SiEwgnKrkEJnYYwiSvYAGm8wRWcS9nH1Pr7Ln1qiSeXMk",
  "key17": "2HiKQ9pPfH2v1JtitdzBY5eemL2PBz9PuH1jvJX14UnumWGCnP1iYzPQtkvYnZPKg8mreSSyXGD5H89CpavgCDWT",
  "key18": "3cwCgbWjCQkC8rxPZbSUndCcc8b27kh2R3GaDc1JRuhZzX2yPwbbAEGpQFqjfqFx4XNLxBV297aABopm9pY7ZyMS",
  "key19": "2UmSC24CfyWadbVG9GVCqmKGUyuz3udSvnSsNgfHxfRK4MR8Ghgkci1ACaXewWcX9juwVWgLH4pgTXMAP3un2doA",
  "key20": "4Sh5i68ADzem8x4gnkvSkSuVXfynFoMREpDSJswATjxE12dS9Y8odzm7vkQAxA34kqSo2AVkwPkHmBmU6r7EPdAg",
  "key21": "3RQ5AbZF78zDBhsbY4qAQLUx5WKe3v6dq2Mw5K6TkxEZDs6cAVgTzgfEj29mB7BR9Ma4g2MotdW6GQqJcbKTYNj4",
  "key22": "giG8TC8yLbgMR2H8TxojoGBVaR2eV9AqiEZihgso5gjz8rsJgm2grmHykirCNQB5XYX79WC7SNvqMMhnAubK69R",
  "key23": "2VjgvtdrY7X1wKfFhgCK6Y1jD3m7dDvLLWxWvSyqFqfwgBuJHoXAQhs1AtbXk6LwZJRiPaqPWjYyhRbnDCoqNpFZ",
  "key24": "2GyGxvcsVp68t1WQNaT2NGoQzfcZXiG29sLd77XjxLKBkib6QMtwjEKCkeXygG6onn7TxE4os5B7JF1RaxxuV87u",
  "key25": "5DmdEMVxFrxDVHPSAshZZSAQ2Yu7nruGd4dZPkNJR9ZvgUqeo6U5gy8uDM899pat4dR2zjF7Yqnt8JMEZ6Gc2i9E",
  "key26": "5f5zsHmic4ghSvb8CTN6gQskP7KgCwhUniFedqw79ZraN1D2oCZfbvJ88vMf7CWWUXnr5RMADFEFsiHyVhYqQo1t",
  "key27": "4fDezBZuFFwG7vEBbDTbGiKBgny8GDJFwsp3Xsz4Qpu1rY1REBa3PJLhwhs1Cf74zwMXbpgHtRTgPrDoezqXB2ed",
  "key28": "4WuK9ddaYDtzygueXKWkxA2ssEFT5Ymgf5bWUyZreNPN8ugaRAYrcSBfsK5HYwecgevnEqHwYNoBvBrVLMbM4eWs",
  "key29": "e7gDmoFgCMmwJ6nAhnVQWGcRdtCPJTp1g3RtxTjJLEGR1UTWr3XonVmS2s6zRTvzJFHXMPhkvjjmaeMU1Qrfsan",
  "key30": "3fw7KR7axyMovZRpg5GB4bJJT5gkbbwVmWpTVFzXDbmv9NPx3r6YUa5cx5Jpd4VF6KzNXjiQJBavpbPkkGxpx3Sw",
  "key31": "4J5Bewwcc6iKC3zMuno2pcuCeBrPs6Latzc9YDpFZrWNieRVoNfVfXmbTuMceMEUnMNijfKGEcsTRXtjx9rKkRnb",
  "key32": "2dvNp7wWUeUR2uYbuCgSi47Uj4dymvtznC8bcrvJAy68rAWPxEReFQEHutruQ54MJmRw1KmRUSa9kTY2iQ6fd6pA",
  "key33": "5H9b9F8VA1JE9BUBZZVJAex6tSSYADkg1cQKHXzXD4wzvStHeqxNroVzt1NLh82iguYxfutcfBnTfBidMNMjbmyz",
  "key34": "3nDxArqC44joYCHfciD7FZhESKTRQx3djDEgsm5S1cNxUVLhhpvxSe1bTTsQJphniZ5GadeVATgjo3XTgyZuNLUW",
  "key35": "2rVJEa33NBZySdnhnq3SXhHmge59MsdcVUBTsocLTkbCEw9iawRL4xzhWZ7X92FK3VDPmuKiPX1nPsSeh2TX1Yd7",
  "key36": "2h886qXQW3a3MqJyKaEG3eCYBd9fTWqmNs2Z3VLaEBxJgKPkve3JaNr1HK9NC7uF6YAq7xmMridBJJ4Z5YzbsTtT",
  "key37": "5QhGZ8ef9fiuebwxwmuDrCDT5oiS9avD1VqZKm7xiqFZ9ERdCahWjMhmw6ZgLyc2TLsc9mrtBDvpZJY8KeLrjwdy",
  "key38": "4HnPRX5FysDkT6kVAmw1P7dG3ukSbYgAiRrcpyx2MWE7Y5muu2AGcTYj3JbY8yWXJp7WT3i2M8Uhfp4AgxTEPnkH",
  "key39": "2Z6pkHJE9oS9d9NeyaPxf6cCVQSiZytA6UzCCorykvt1M7vcuVdubtmLaYqBhLE9GGeWVAG4Z7T5e4ufX7k3sABj",
  "key40": "qhS4hjxpNAkYB3KKSZ7vBnW3jh2ZYoDB4Tg8ZWAn1bRhjMhu1wVtXcsEt4rFeFVpywiMEofsjz13NjcBxVsnSBe",
  "key41": "3JE7sHDeqSx53rEmBgX7sGcMhGn21r1BucW156iuyRBPN2xhb3atUgNNkiUh5uaY1UxDsdhMouJ2hp7bXCKVoFNE",
  "key42": "3QQzBFdgjCnjtxB7hvsKm2DvWTTqXxuhYi6nXGbuMAkq6TTisCgJpFmxmrsJxtc8XWViW3LhdZ1843Z22nzxtszv",
  "key43": "PK9Sec3pb2e1B8CNeWNmvQ6LQyF39Sbq61eSRkxVLEh5mCuS6cvYzmt1we7MP2M6oXsCYgEnMpCzZ8tDViCuf1J",
  "key44": "5cj5LRunWWnto3KvCQfrh2Kk6DszkWWs3tpLEbzDfqL8bN9ZR8LxXfPDt2wY3DgZNkFmfg2WZxaPfoqXLXbkszQw",
  "key45": "5vPvH2XQnmMgfvwdtSf8tiFWDgAc4NFM9vxrPFg8QRDgwunyQ5RyJrwJFX7gFwtpZR2CXYz1hDD3TnKQcbFwofnP",
  "key46": "2n7cjKesCETrPJ4VAjebuEsSEcXiofMkVjQzBp3k18Ymr5oSJvFDnSgk2NcqB6oUHXWk1j7u1sBDUY19nwGBqTDj",
  "key47": "5Xswfh5K2CGGwC3uQneid3ATQcZXFXk77YHxTKpzJztmJUt7xD3dDQDZ67rBBak4K1u2mVjSdTWx3rebT65FAHfc"
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
