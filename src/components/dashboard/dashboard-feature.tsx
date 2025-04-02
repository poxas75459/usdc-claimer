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
    "8Ct9tZfJ1UYU2Cfb4EJWFpMLYQbg5n6Y3tcfcVRUZTrFtwyaVXMe8Lp8p9wMNAAJSBRCfB5LyhzGJrKvze71QMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5naBy3jB5zDxv4QH15tPYH8pJ83uiB39DSsbpzXeWBHWmuDYLoRcxDhTuxY6um9PUpSxcxP8TFQ7u2aMKuXVeA",
  "key1": "5RPzRxLWHzc73H9ybT8L5GgCBN6DjyHDGUrNArmyBPQwBbivL7uEUQyRims4VFfmrx8cBouC5KNpNNJ7SrB1NCh7",
  "key2": "2ZX8hgTff3jnAoZ8cJc7RSCPdAhawVQvvJ3R5jtqQ3zFTSHUDGjFofk8J9MK9MJ4ySehhbmL41MozeG32yar8L61",
  "key3": "5jy1yVYHEZTUYrAHufdhr1FXmABmqSpQrHbkkMZnURHZfRYMDpjQ91cdK85yzLGXFVPutq28wrr1LFqeTCsaN2jQ",
  "key4": "kWdFWzNZj6saUzHnqsUQW7k4EkVWKPDcsGDr7rnTahhFuDHyv9sa2Fp6iBngwT7cxvutQvpSvzewhhPZe3a8K4n",
  "key5": "5iHm3aoeiLD8w1wGDUiV8ty1sHYUyeVTNaMC3x5kNytH5FDTFLBHMXyKb2PUAfGe9iTiafiAk36YDpWLYDGVpTsf",
  "key6": "3GD6BwffnR1TztMj7rbzuY1HMVWrDSkaChjW9HTKKstv4TiCypPZQwpgQ3GAprgAB3xS7V7scWgAzd74n4v1ULMB",
  "key7": "5G5agumca8686nAC4J6CHSYyKLi58kapudufJaF9WMpDJTDGKTQ2Eaj9ExzqswgDb8K1xGQvKVW6G9Kf5v1gJ81v",
  "key8": "3tsQbNCnNjXxZQZxgZ6wnTDyqEtfMEqX4AU3RXdbYfzWMW35KAUCepP4W6Y8uzcRY3J65rNYbGQCjtVFRTxMFRsn",
  "key9": "8oPNJDAjXXGFsxRVicx4LEYoUuAnCaU4fvwVR1g531NBffN5yYHHvdmRdGV46doypmCTo3RDUwzKCYs1wPFbkM7",
  "key10": "5ZczCmn6UChymCXAFMASf8AHKNB54PbJb2WFgtbCkU7dXchZaAs284q1xFVzVGpWjzjZzzpSgiz1EwNWBoekvL67",
  "key11": "3zUWgVFZYiTqJBDsvW2YVtxTQuaigmgvTiAnT4T6cNTbs4ukkbRMYjvct3uJK8dBrwrmtApKeWAkWBFeWHKMXs9A",
  "key12": "28vnTBZr8TkXAR2KBKgvKpz2RZZV513YBFGpE5njfQdApeh7j4RLLWdUCY8Vyonrjac2vmADu9GP9fR3Qu2cBLfQ",
  "key13": "25i3gH4VcgG3F4yTEjTJ3dtfaPPCXgQiT9yhVCaakugL6ASL1AZrp2JGXKqTCDhddUKxdNu9dTYDUMgHQC6dF2B3",
  "key14": "55SQeLJVgZmMXz4BTj2BRREeTUFpBwpjp2db2YQmGMeRtbESYci3fm2kX7c5rC9Ct2YmfkUc8x85KJUZiqZkiDDE",
  "key15": "2Xs9NgtXpgqGUedkZ2utULmmMHijQMi6CKqwBjJpL7heFJXYCxeDTHJPuYXjJAFk665Ci5gALoZYvCARSMAFFQdb",
  "key16": "3qZbZoMon3w1WL8aQatAQb6nwUsTV7TcasfSj8C7rPnUTBPPZ8T1uWojp7YhieDiZ4rvdzvxzJFGsouTwtQEJTDA",
  "key17": "XeiAvkFXHHfsHQNduamMRamos2i7RAje1FAbGctBoC3pzFQnK78xYHauCyeLAghQXCckhZ51NWL8HBXdbiLRRRT",
  "key18": "4kGd8zPBorme7gUcXiFE3GsChTZzqRhW7vyKhiBEU36kcojwcZHpdnqaYj3NbikR8R5HXKAxfp88KLNfWPiXds8a",
  "key19": "32RCMfhxZDnpjT23R4GsDGAcCx45BXnWivGypFa8DSbFP7zqz7fbLuDEU3yzaaWxWanGGQA9emkJDzoMxLeFprhC",
  "key20": "2ZWqNQSqZZnXfcaBDzBLKzmQuCyfgMa9iaiAjfHLrYWWquixcgxw3QYyirunN3cbX5dhYXpjofpcZq3Abr6ynM7b",
  "key21": "2KiwdEUzosUcMSN5sB8Xo3MgRuyx8cAepPcFZiQX2m1Azp1usqRTbhZMWcmjQvBAbbxXJirED5TZhRbZ4dn8GCrm",
  "key22": "39FDznGvughKfLk9GhW7PHGEwG7D7dynDCQ7aHhHc4roAGdXg1maAwDX66L5r3JLT3VTvMHaRdZxcz3ofbMhuJHF",
  "key23": "5jVpm9XLoJ1BxbDZLq2cm1UXSJJDKRGzwreo5SgvTmAQxN1uVxaPb18kjeVkikAAKaHeF8yPNLZC7oTFZNoaZsF5",
  "key24": "4KtLe1SjqCc26y5PaRkaSkHxQTvpryayx2jM79Cw2HR9yYJKgryV82Nmf71cztCCeVZuMMNqVvgfpbvvCDXBGeSQ",
  "key25": "3J4nKPz9ZERW5ywH6tPoQ9p3c12dVggnDqdEZ8nRbHiPzQsgY5k8PUvWRcVbtHC47Q9ZP2BCAPdL87gBZuWtFMfL",
  "key26": "4wt2hRoJNEUwgdjQU3XV9Ant2adrXeSkfrDYud6qsXufi2ZRxgdSK1kYsSQSv7Q47Zo3ce9oXKVsu5wus2f7TnPR",
  "key27": "49nUkVwvKDYt5UdmjQBYpSTnmkAiCJUaa7xKQzoVnbZaNMEBnJTdAu4caLYQb7jKoSEH2k3NPgF5bBGkPGZHWnoZ",
  "key28": "5g8ByCYR69YmNJ5shrCjWq6TzwNiTaMymEg6EJqUoWaqWPHaGw1RFXbBotPhqThZoWPK7S8aq97EXLRAYg1HknoK",
  "key29": "3mTpnAi9svW5GS8UGK3k8vvUFpUEKquALUro8vLEwNETnr8DjEPBPHKByhdaGoT2HR9LCx9wxTRnwyX4G2pPoDjD",
  "key30": "4nYcdWVQrAmibxAqGyBhXRieCnRz7EnLmYpyNsFzUicT1ZmrQ7H7AZqVZQQeDaNeaS3fzUYZpgqzYwxxxx9P9boe",
  "key31": "3bQTTVP9gtQtHhxyAdWYA467hffUwUrvc1zdGDmNYHfvL9UqwN7WAWBLpYQGEsQxvh7bpEete45zfVL7n38kUcoQ",
  "key32": "5JVkxyikHTDcZ3J4tVNmGYRo8W61UYaDBhVvPbiggUw6U6tM7bKLY724B9dPuUjxRJNFtT57UzsBKekAvvBkSkun",
  "key33": "4XBtnVfiGWvCxJzY3k5ticg1Qxy7KouohY58iNWwiwNqqAuNZouK1n1YVUBCurSwig2vb8jBv4gG6AHSKnrrg6Hc",
  "key34": "4RBEiuhPdb1of3D64WprpH8a2RSd6ZuVZtsgtqj9TUGDpcaF4VvEYxp7m75RP5smGRbThKiTu7JmPoVtnxyQc8XC",
  "key35": "256xRaBkqmNY6f7UsZR1h621gEQD19nGwF5H8FuTeAWnqwB2xg7B2Nepfg9eFABtY3rFsw2S5knbwafNffRe7Yeg",
  "key36": "275dZG5NxHnc9ykVEeyh3493jPL5dhVMd1dEdQNaBiuByjvxs293FUancutuKW17qierhgike6Zjx9uqzeU4viAJ",
  "key37": "49257UEMiwXKqTUzEuKSvQ753Vcupa1TksVRYhUvufLmHYHXSTW8ipgkZZSbmorH5fa2dxpRDk4qyY1wtV18qZFi",
  "key38": "67AQZMpBo1LNmoefVkEw5u3SvwNMoRRNfxofq8DfLqmGBtvRog2oNaHeRhF6D3YbFQJwPNyFoUsHpFnKSMng87ad",
  "key39": "4DREkrUA9pxKtE3tNVWd7XSCxbSSQEtPjo9JGVMJEfpXa1zxUiqxEhbGovXsd2z31Nu9XAy6448RbdmaAYmvCBqZ",
  "key40": "BwWd3MmqQcD1JpuSVXzpLdeGNFTWAxXpSpdmJtQrc3NTvPwcmhUd4WphHnYWzdWW8GegrDyTLrtRrSaPoLGqFhh",
  "key41": "3PhLWwVxGy52yvgRr6UL5qV5qnwq1ixCdiPnK4e48srskuiWsGXdPYBDuwaG5WFgevBfSfz6uvcsKuZ3QrXithv9",
  "key42": "1gEL9KRvmSoix66VEC6r9rM4qhABiifefzEiqKUF1r9A3HNTbhn6u3MQbhTBXyqXNjKNbRez2KzVBgFbbdMrUCf",
  "key43": "6446v1A7GghwvMPWDQiygwx32hbMPqkSbRJkDcoPwe1nA7WfL4TC2t5jsuP2RRuLtVriDehR3MCqZB5dST9ktfeW",
  "key44": "2JVjFcJ8pzuvoeGUwaLyfZGx1aFkduU5grE5szQmtHvJfV8SDp53VEYnxFfqgsNpJF2z51izLz48NFBZZeWXguyp",
  "key45": "4jiruYBCZ6BrHYZnsXi5bzUKKwmf6rJbgK6j11R8fA2bZwzkaLFABocYhkfnVLx6RBCED1Ez55yDJinyGW7QKarw",
  "key46": "D8py4kfP2MsQbLzFQVvHAsMEJppJa4oWzjiFnLubPjihtpDfdTcqvErXUJBRZZX3zGysbx5bc3sHcdW8sK2hU2L"
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
