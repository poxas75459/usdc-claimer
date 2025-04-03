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
    "4iZrksCk4JvCL8PSRprdZAcurfASsCjUHEeLXBQR5DfAvk2BJFdtinWS5PWFVi49Uhyyn1ZRuuvGduLyoaLGSUjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jf5vcXyyMZtrWcM115U14zaKjsNXCarjv8wuA558s9qWtXr2QMpJtMWLVFVR8M7KzngE22UwW5zkTz1VDakH8Ws",
  "key1": "Bsn3FkdgVqUh3rTnEmofri1jxMd2bYRU35LgCycyPeTyGomwzUmju1cfefVYYbrxZFwQ5xqrEyZx5rYLfLg6mn2",
  "key2": "3DcTYmSzod2tgAo152CXBfASP1cYGHo93awEGjTRakZxftU6qXJECkMmdQPVEUxYoiMUtdczZ3hf36mYQJ4MniNh",
  "key3": "484HDaRafqNezZa4pFK93CkxRmLaJAo7QpUEhzaZLdtnMxDtE35P93DVj6XhdiziNdZQoy9qQfw218FUbSizdbYV",
  "key4": "juuWTwTvy1futLc7UHz5QMaHzZNHg5FNHBBjUQVxmiEq8Jk9XHPJ6Su6GNC72DXkxKNMuE5B4deAABDJzk46iRw",
  "key5": "3vL5oHEdpmREn2PVo9sekyhtxYZ54oDX4PU1vSfvtcjidApBHmS9r5eub4UkoAQdUDNuxUjsBZDaSWxBVE3d51tR",
  "key6": "NZxRg95t7rFvgggLK6C9VeworMM3aUFdUZAwWo62keBGspuXPU8fsnzyfDX87QExUyQTakCpRgQtvphS1MpYpKv",
  "key7": "5mBsizjBEHVndjJjwkowodxQVPdDLzoe2YZXf8vNaafADoPzb2mJsTkyLxTKpDvTdTPbvqprkQga1mMJAV3dtPpy",
  "key8": "3XJ6o3aLiMdrR88UN3E7DsUCz7bM4GJqgptqEGqBZ1HzCmeEpNRnwWH1SRbYYqJ7xcyrQbcspC9AXVtsJKr9mVUQ",
  "key9": "2jzKs81waK6wnNCR5QXaKgFEVw6LxjyYSMhwNrEftiLxqtzT2BrKvBv92vtx6xFJv2A8ps9kBDddymwSeFSfMGTQ",
  "key10": "216insUe6dEDHGzB2YhmkdCJeR3WyvfjPxuzEMh6wmYwvmuoPSAgEiaNnyuZdeiUeoU5MEKgfXKeTMo9tdXrTbpv",
  "key11": "5jusLRnjE3X5VGL8pneC9YJtW64LeviUKkdK9pGjKy2bnfGDEqee419DxD4i2Y8RVUAy3kx7fACEQad2QeGcoRsX",
  "key12": "4nKbo7A3HoZfKh47FNKYwTP5WWkYCFS4WtEF7vbNYPasWDJzFwGhKNQqd96QQ8vitqqi2i3EzDshN8bX2eMrk1aC",
  "key13": "3TrAW1RFKjGNJCvA2vqc5x7m5rckgXUGa3zHzxXePkWgVJDXJBXksiWPoME4hpbYR1D7oLU2WNKyqP8ELqnUtjgc",
  "key14": "2p9fhDGhRXe1yLq9EJQ9Y8jEPKyPE4wdBt86oh8bSEw6uWcgUdkyrLBA7XKdNWKqTkbcc7ELuH9AURRLBbKUzGtq",
  "key15": "5shAZHk6M32pyr8CeYH8NBuHvCzsedxUFuk2CdxkpzXmvz86bTAoMibduzHDFAsEGFi1m9tqjvncGeP2C196vvxN",
  "key16": "2SDdx81eaGv4U23R3k5fncYCzHi6s8Evq1gtHFuLM9g3T7uBVc1sGJMbk3xz124AL51h77Tfv9Rqe4AFCDQwPoRL",
  "key17": "4XuYteXNdTjZykkRrcwVjzR2CcHXztX6Ttad9TVc96mTnUdrqz9qJqU24zpMEqcBHKwAyAMtVhD7eXmk4dVKjQ77",
  "key18": "2nEjuFF3beds8cVymWoLvexxRVtUnkVn8ewmdFzLGN73TehiWtUNJHtYjHM86h8HqKx3LNBxDAXkAbxrXVuQ9Wms",
  "key19": "uW2CB6rrQtYDhZCh5VSYCPHTwYXRwHQLzNgbWNGAnrt182kFjMEJqn4ss6K4ckan85q18XhGwR1LLfHv4JqN1nS",
  "key20": "4wFeNfJFfs5BmEyoL4PPKonF85qPdU4Ksd1hHgBdEBh7BaFLMXz1wGkx5UrQkBGpnBmF4LzBd1LuquHtjoAKvGxj",
  "key21": "TsuEZoQ5FyTX89Tdy6da5m8oZCXtcjCCCRzKyukaR94pfCQtiQQZJZhw6TpHwEr4fWnGvSVxUcExpA1LLvcZgc6",
  "key22": "26jkgMLsrnRaVcrVQ64AKGy1R391guQCs6xB4huobQXS14HJKAtU8Ub22Rk4cCf1wvhzFmXpUrVErpwqGD8nrwUY",
  "key23": "5iEcBxDMcpbMtf87W2dNdouH2Q6LjtPCR4V9vPoUicryepcQQYexe8bmqXqr5Snv6tRAjP14XGf9x2MgEHzdpXrG",
  "key24": "4gST1ZPduDE43Yg7dzXN55BYAvEwFnt3WyXKFkdR5UeHCUfvArsfG2KiUoDA1Y7cGHs4xeNzaq1AMJfxuDpZfzY1",
  "key25": "3uSTuHJbu9Ydrz53SB7Chsa21ee46u7db5Au3CoUpyYpeWZLzS2qBptDX7cmszUiofTLThDhMpeS5pfrieeT2Bts",
  "key26": "5FDqY3iyJygMMqCWkr5pNUjAbWCXzX7BUm6yFHzMWbJCUEGrNUEkdkAfkNQt2ByFMserd6iSAfUYBSH4MVYyNdet",
  "key27": "Aby9NxfBhrCqLAGf837MKLwrfEEF5Bx9nAw4weUjtHfkQwhK2QxKdgRaN87gQ3yoVbBynySWAj8tfr1vqVSXPJd",
  "key28": "33bAUxqscqKUF7GnCmUrNruWHdudhYGLrPaFQ3fE6hdi7qVE2bYMZcQiGGJ2eo1hatFAAJaDDgaZi4GMXPNQszj1",
  "key29": "5KH9HyVecbi33HmCJTjqKTGZSGnYySTCLa4FU2sSpshBbRfJvYQYGtsvZHRRLW5YuePgaL8quBU5yAMoWYKFEQTV",
  "key30": "54H2E2m31uK5K1SRRbvY4QtEKyhfuUyhbycR34tASPbBzsJbFPzjseFxdBSyCtn17daMieYM5xqWviatHraJEs7u",
  "key31": "3JQv4anMdmzgAcTe6sPVfmw6T1afNdJogt4syszVwjnhUaL6keGfW44LqDS7uBnBnRCUSxEHxwcxdiarQXizNWj1"
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
