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
    "2aX4aJ4ePohkHBYUm96WFeZqs7Dd5qBZYySkdJHV3V5rFCHuZZqtd77rHJwKBqF2imBaD6PcELFkUfzL1Sfu6t9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDWqmwWrvbYymjiAQsM7fBVXofBQLYM3gK659Qw8gwH6dqJVMKh9oYjaZsRTjfgLepK7fsezPfdediXK5M11z5c",
  "key1": "2ks2TH5o8HZ61CHptEcpJzP88UgP5FXiXxajJMErNXCQtdi6kWaNe9nVAHw4r6pSdkm2xQUU1BV7D89WvAvqCSJv",
  "key2": "2TFno4nHwe3NaDsSQ4q4SXqAu2QdhVYRQA2EYDPTZrdfm5H4FP2JN9mY7d62StRLrHrLjMXvW5FdaxQrh1zhGjPK",
  "key3": "52c1fP4MXhbSnm6gzXuumermDUBga4K7zKXxDFxaLqH4jyqDvdgSU6VXXHCwHTB79in3sgqp7DA5aBZ2JbrN31tC",
  "key4": "3NE1YmX7qFbbRDmpWzxTbu93MN1dqp5dkkm6GUPzTBZPLmG89dUMDRkpmyQrvF7byPYYsMMGs6dwdVpgGVBj1BBD",
  "key5": "2sjKPqNPrCPtjLGKpG5Ag1QzFQRYA7sqq3hPpLVPYnBBPgwyXdrH4iYJU7cioVHPCX1cGFyLdf1byJjpzRuyVMWq",
  "key6": "5VCtDxQgKMYLH2ytKKZLkdTc1cmoWm5HGo3PTmbyL16sEi9xPzn6QJ52h9QnbR9rS5jzAzHMkCXisKSZzmerGoEd",
  "key7": "3XATPa37ESubxTq16srnhqWG4UL6jKWgVh3Nrykci48prLSfmydaZGhhreucV7BebSFXNc64UjKMWExo4HyWMzu6",
  "key8": "4TtuNNEXtyVUX8ecwuTinp8x7GpaEJ4qgisczHqZpCGZwYg3wHwNf28NhhV4CMJuDZPDNs5EWvgmwtDRvcATR3Qj",
  "key9": "4MZvZ9qVxWZFs4H9UP5SW4h7jjfqFy6AQyAVedypoRuzNx2cDpg8eFJHWE55rKqanbSGpAwvWoBf1pZFP9ZvQsrz",
  "key10": "3AiansKPiNRUeWzcSm7gzk9wr6RreJgfph2VjtG3juiQpjwDbKdPB8aynH21aML1aL53NWDtZo9smbeW55ToHbyL",
  "key11": "JN5ZxHk7zQX4XArySJvs141UtbsdhVNt4cRCiiq6RG9jZNUTE7wRF14PN4FjCHDHt6DT62CLKg7PF5sHn2VE5xX",
  "key12": "LHBosAtaY8g6LzoRQZNVrK6f4jiUZVcfcakVB33LpSwfJ6vitPaeEfqADtNgCiZqUe1VQLfL9xzP78UGCNKxJbq",
  "key13": "5tdDsfMARod72Tzu2M8zwb4NLui4CahFHjro5K1Qqmhqqv75AkHQTcEqiX7cGUG2m1Ryffc2hwfyN5ry5so68dj1",
  "key14": "4qEviFNv7qtZG4CjbvtiJ3BbWSFqgdvHMHUjmSp52ZYNnDSSCZadBLFobzwxuX8KrahyfUC512hD4YmieDGuQavr",
  "key15": "2QtGtkG5BfZ1ZRA7o9a4WKpZUTdRwFxZR9UtZDAEYcj6ScjXozucRHgsDjQXWfvqVwoS71zxrBAfBHZXyfWrCSVx",
  "key16": "2SPKbByeqCaAzrr1mY1J3GTnd35Q5KYJGKYVqAYnZaMkq2A81s9rFkFBG1FDPwWrkEh2KVRvJY4mHqVVmCWMfaQF",
  "key17": "RcLCE85P7andXARfp8M9ZhvZ3mxQn5CtAzSeYVjKP2ssV7e2GMBu5AFz7y2CRxPbc2f52poeqL9A8mt6A9WuYep",
  "key18": "5e35eigyWSPYgqQF5bPgnwVu8QvUZr6RUks1mv5iTNnD77EHDdUktujjJRRux3TiQuQVeesqYbvYKsdb6gN7CLRf",
  "key19": "34GGRGAwURMqbyge8uDYhKuQm8miXiavpvhFSFrd85yjU8iEtsHWfDtdNHxyJxaZo9azrVtLRSyn5D9kp2MiUamF",
  "key20": "3Q7cBeoET86JNJQUHFHZCjB8x44aw2YQkLby4t393xJYZXBvzbx6mSQUgDkq9hZ5shdgkCZzAAvX2ELYMQm6uH3B",
  "key21": "3zmAyTGDxgnkTnxYfXDz7WVpvixmRkXj5NvedwbGZhzmse4kL1oVTCyXrEwx18gveDMuj6ytZvhh4znA8iU5BBiz",
  "key22": "3qqsobtDJv7UjwmiuH6ScM7fdyEayr4M5iWTLwm7uecdmZ9M8vFT7qFXSdM3dS4mxGkEz9Et1qz6VYwRFRcszbL3",
  "key23": "29R7NGuzq6TLZE9xjSX6gVorJ2YsLbvJV2K3PmCtb5WgG7bL1GEndFPVntxd2HY9Y4Ypdm1e5FCGVCFEKfLtEoX1",
  "key24": "2qXcy113rjishzYdq5ewSqTtRRtmSfGqCygkeaaWXEdCwprfUtNLHtADRq6oTbHJm8ijdcKKUDV1z5WA65KaRTfg",
  "key25": "66wCQfxV1amQk2ghSdwoUEY5Rx9HC3VytVvaQrNuu6FjPNSdreRd1VobvcoVHxqGeGrqFu26DQPPkuxPhviEzGe",
  "key26": "4G1R2akjk9eMN9SF1NgZpbtaXYysN9y4CGuwGu7h6vxAQXnDnRKPHUH4c5uAQRuA8M2kq1yotFLJf9mGqZa3RqrR",
  "key27": "3i8b4yLbBYHc4Tw9Gk6fB9LTijJWoheUi45xTsiqUPRSzuBN3PrbTEvzKMbWJeFBzNkeVDMFoBF8o4Jz94rmxVoY",
  "key28": "jzmVWhcjbaHed7o6x4tmkFcBKVi2oKUNbqoUsZW6ed3zju3ZAMP9nUNNmbC8MR91LcphYfWTgkd7pWyq3Dwm5Ut",
  "key29": "TK2UYjVRKRnHjWsEbMBfAhUDPuguiuuw2jgcxyyNSFmhxsDnSZGGe3Hr76Wa61CMhhpDZGtbgQVdNFeVGmY5s3D",
  "key30": "3uBjWpiRyStsGNYnU827926NX7c9hekkn1YZzbWe9d4D3bSPAYcz2foCBBgj96yUiqoaeFGuxu5ueFy3oFzocACg",
  "key31": "2LV4rQw8fEKEeMXxTRpxn9hEE7LJV2HeiznQZ3XCn7hU8hafdx8iuAfCDgA7RfXpPPT2KBhKnjNom92Mp3gLPio6",
  "key32": "Av6NMos2M5kY9CxPiDFDnbWS6AA48TXzZgew1gXcjQZrRkQBg8FfspUuT53afvreD2bizuozbAHvAxk85Pdj6P3",
  "key33": "3dEyfRxPAJWQp6Z43uYFRCFZikSPM3DNeW1J5gFucofxeeh4fm4V3AAt78VYLc4g2BRgfEiECXZqUtwuYkvLBf7w",
  "key34": "5G2i8iF65Ro1C85XiMban5VD6JEHGGb31D78zq734gThFvrBP6cc8pX2aWBYmHwYHz8kobWRMidAsFgJLtTvVEYC",
  "key35": "2LZzVtdVcQNqaPGXxfEUfiRUkftPP6wygxDkop439TmfudunXrU96rGnPA6Tg5VDo3mwBWFsV8z4c3S7FUUmxyQ8",
  "key36": "5Kx6NJKox2idgVv5atVSptGhfrUTMYQbAeHaGBcqSNT8KpnfvuP2zxAgQ2SVcVivY7u2UMGxSnQx3vzsiBUeFG1b",
  "key37": "45mfQ83BbjMQoPK6mKjdrheN6PixVFfoZ2DRWYnWatRycqw6ukNcUJWjfcwGRrYSmM9ZtA1YLcTQ3iGEVNkfnF6a",
  "key38": "eZE2ehGY1xRdJAgKdUYeP13LKUU4h85WyiJ8rjiaJtbzgMx9GNhw1SHGP93t7mG2QUAycD6Gd6peNtpGdrnx632"
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
