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
    "3XwTpyVZNLJsQFvthbKtY8AhMBND4vDsXP92FEc9xf8rk6gaqNpWAhG1j3yYLQN6eg3hxGaTTWLQeoSPgkGK9ges"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PhKKr6bjFa4m1RFTWD2R31KNpvnN3YWuihqNjgpviohcEgDFQrgu2A57B1Jd72U7P9aWz2VSP2DyWgNmzFUJTYr",
  "key1": "5Y8LdC23J1UTof8UcNRNiJosKVpynRDPUDYXSWrDgVffAhUfqdQGwGxdff3KyNjEuzHidpvSvyRqEvf8puz5HjPA",
  "key2": "h2vPcxn3nQ7TNwTSJ5iiRkTFC7cRcHggWMRLyLAffKnG3Lqu98cgemr9DNR9USKbicPhggoFEp66vUo8W9jKpiY",
  "key3": "b1i1geyoP9WU5zSEdZecX3fUp4kifPotMoQcjbTcCTmmGb951wqXMLnKd3pzQFSfPb6pvT6RTR1Dgh12VomJZtY",
  "key4": "5TpFCRCoB3FnaRUjkKhrX56Pb4HULRrTAoFNrWyxZtVTbyCESGWog5yi3v5smyqeGyJd7MVstZYsy2v5bTdfvMKo",
  "key5": "2ce7Yzh2Y8cvsx6q6cKms5TfSeSyAkwFResg9ApCBjum4PG7QEEshj5ofZPaLDt1K89A82e5CW8Wk7ax8EQhrJK9",
  "key6": "wtTUzLXpvv1B2HkU64AiwxbPpcriFpo1aGa5uMdzzbY1W6FZ5bBLabLghKdjjY3VrNpWugz27hiCaRC3mjjh5b3",
  "key7": "48878tt7hwEmf5qvpGHQE1bhpTnYMqT2XEhTzTcEqE4fppR3ZsNK7QuyZ81M843gL7Mnac47TYj2YGNsVMpZwqpi",
  "key8": "4rd8fqPfqduWWbaj18foD3Eq8JtDNdMjNxPvpuc9u1uiDYk9zuPq3VBTYehkUaimbdiQiyt5jdzkSqaaHxN6XUid",
  "key9": "38Tj71EyPcXETv6eBxxtAWgHxpopb7Me1ayd53U2DvSByBpumxVyVyLPNY1Y9Ggek1aPzwiv3drB8BvUawaajyEN",
  "key10": "5CZCQdMpuSwipbVF5v1pm3dDZRr94ipLHDBtRs4aRuwFCBhr9NU7TWJYrgphkPJSKDxfchpBaxSx59DNQjhsZHBd",
  "key11": "4751yHucfDXCwtBQ812T9nS2VMDADu1nuQX6MuA6UT3TMQoseGYi2LiuzyfSAgMNrZhXqaRebrjmSEExuuiwfFco",
  "key12": "5WCwRDj9SkNUUkPcf7baeRD6QRdzG37Y1H1YnYo1NTBKszrYJtsyQKsoXyYFaNyJ1qvM7AraVYuVAzHuRsfViXsj",
  "key13": "35zAgGofeWPzGbLHyLM8XnBid9tz3T4wC5XbPP9JSAsyTbLMgPtxeMiknGDvjidwK7knZ3SMeZAr4qWwDAvK6fHP",
  "key14": "2o6JHsS3LDZBYAnCAfqJhPbhANUY16yNnjSfKaXKc4yUAuw3LusT6wCcegeE3HUwaPRVV5Zg7KV55LR1oCVJKTX",
  "key15": "GEvgBt7RjTsCiJ1PcQzhkKo8fBAzTmBMq4cajhnaj5e5VBrz1R9dVT2M51qZ2tuSHYuMz4mxXKMDD6mbnDJoSVi",
  "key16": "22uy3pfqEDszjhYBKJwdf9xekD27NRtYhLC6LovYRiUJ8j7ntLSrVNpgGRqEJAospDZRFDHgEr65H2YDCdBcptbD",
  "key17": "37s7UiRDgDVZXPAf5Qu2pUCKumXuQm6b5s1T1QcBBJTGK8uzxEmsoRym7FGBEgXLmBFLnW1kwzeKxmureKdYQdbx",
  "key18": "2CnA1QKNg5ZVBVq3J8DLcRoaVkJzNxTxsa3BBk9s7yzvAZnUFzeTNQ8dkqFxYJUE5hJFhbneZudoAEWhzFcpGVd6",
  "key19": "55gmhvaBeD8eHyQMTGYKD4JP3n6Ed5WMGQPZsPjZWAhXM95nuEzU5QKLMhbqZJAxTLGkxbFm8tfYyAe15Bakj8PZ",
  "key20": "hj8q2s5ubLamy4tnhEkqLVKDNYLmsjbufq1UjGnktgS5spR4rxjTckNUNmnbsSryD5kdxXwNPUarTD1eKfWmAD6",
  "key21": "5jBi3JHViodKJzQ8Br4W6xhtA2kg3yLtt6JtnuwPXLtwWbkxJLCYQytnzdvHX2s7dxHeaHEacrFH5cqVHNYb4gvW",
  "key22": "43fEzAPabMkHp6gZd3Lr3FjUxSqCJE2SySU13MZH7MYBiE1Hje46nKWuYXPxe2mEqkM5N77DimwP4Q1FkSrzsxtp",
  "key23": "4JorQvGvRWsijF73cptwu2DdvyMy3K2oXiQPAKpKGbdjPd7gBTPgXUYboMDK6bTzvaj7sjThjxBAxvKWHwSQdkDV",
  "key24": "4utYLKsdXcew9Bzux8oN9Az6QeLxxTVpyKdyPNmQRK38pTzxgjuCJSEvFMwQs8b79cCQW3WowzC2Z6NfqXZp3hLR",
  "key25": "5TrRWpQ4j6i79vuuxBDPPbneMZ6xyJRrF9eHoU9ovsV6MS9V3WDfxu4bT9M93S99Pdn3NUj8eHPCuKbfjynJ4t7R",
  "key26": "2S4hjFhYZ8mCNn7hPNmsEs8DanykJTkm4g5KGWipRPcBrxGZcmYm1b6fRhuBcRjNewzZW7XopJtE4UBxWpoALcLe",
  "key27": "4Lgi3MLnF1BM13tNW8sdt6WcnmhYSS4kcKCkoZsWNgrz8oCCajg4gp5ErHujzLdeeji8Dotf6Pr2pMSBdophJERm",
  "key28": "2V8mS7vjqGztyPJiNiUWgnXizPfYsSpNjeqzjYGHKCpf7y3Riobn5nnx8A63YXyfNHPuZL5D1Ym9yPUnDioLbEA3",
  "key29": "2tX1HatJK9aW3jc7mBJS1Bvq17gdNZiM3MzLNanB3wPmgU2Cmf4pGu1wFTt63Yki5B4VViXC5m4YfGoDUyPYe8Pn",
  "key30": "5eyjpFHg3KyyiGLWSHcBk3GUGDCqfPcPESE7U74jBs232APuJwbNgovj6s9iDEqA6E7suM6V5qxcH5wWXYZpyQPk",
  "key31": "2Pyw9x1tp4MJMPuxCJC57YciFi1zyK8C2VHhxGc4JBDbCre5hALgUVYUttdYYzGNnMDEpgXxedGFPW9w7EiHt1sy",
  "key32": "2As878P7Hrjn4zXgaftvhJzqzLMzk4feFiKwsYtf9rrFTjSm9DpJ64Mzb9pZmVx8YzS8LrRLr1PRiQ883hQnpnCi",
  "key33": "2FnWX1vfjkqFi3NtNM7rciEJ23UKT5BCdQ9K7Ywm6oxCSiia6w7HCpPp1JUXnx5HJ9YojxTBiqNvJ6qpGPbBEfKx",
  "key34": "3Acb1GxyoLHmXFuCsWMqhArsaxM3N1ixDRyJrDWr6LprN82zYeKDduzRbZLjo4y87PzZQFm2Jj2Z8N8vjMPhEdya",
  "key35": "4v1amPfbX4J7fFHTzJFmEt1gX6U6QgprGGopD2kACB1G7LuFZAJHm9MNA55PMaGTfoE4RYVB2A1FCBHG2x3YrEfm",
  "key36": "44a26aqppMqwTxtcULgzJxsEUJMBsMmnhSU69YNKMF85mgGxZcMpXbFVw4EGNyoZetHYVrqnkqQMvx5faJ5VsmRi",
  "key37": "3FMKPP6GUkyn5qdgz3xahnt5hBRhSwZfJJxZRm1e7RH2gdpanEmmgoRS4EGnaoEgbx97uw3kLsmuBmyha3k1vaMm",
  "key38": "3jdn4VfjYwG1EBMDJwNVUW9jHpSFMbSroHcVNwSLDdsDgDp6cZ1UhQ6n17F2Bbx9c8yR8He7nGqLkmf5xcN3GPzk",
  "key39": "2TbatssdwKze6NXvSwn16igYQv8kQLLVSc2wayotNfNxispDYMwQU89DnKuVV93Z8xkXg8w1zfaCrVBPXWDwMFUb",
  "key40": "2Z2kSehdg3v4PyRqjv229orCtDh6jXS924tpj8JjBM4N8rjTxmdaMfH5TsLZQkweSwEE4tePm35bcb1bLjrusnAH",
  "key41": "4jRCbtLwP4z2WPczYMw9LoRH6gwesh4e2geCGrfJRE4pYpeYW8nwy2ncXq8qytg46XVyR4quya5qrDMj6bkLcYoW",
  "key42": "2T5vjAPNELFjeHHkMm8Dvq8ZGyfYyjs68QcsWoG6nhS26FPp5Ja47ZS6ieZVSU6FatNJscurNN1X1qSdg7JmnpNn",
  "key43": "AmdnFLrUxCAzBbjYWVwTucwo9ZXA4y5jCvCsg1jvS4TeQDWZy9LdymRJqRV5vbGSd8NqUSzyTXqr7Sbc8xeYJmQ",
  "key44": "3uHkdnZLTTPNcj8f8aodW1fQVfeZV7vu7z1mYRuirNd6mwo11yUY65Afab9rCjr57867yJuSyiQPNdHMpHH7gDoK"
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
