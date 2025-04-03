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
    "2TkLH9eHmDAtMvLQdyat1fj8pUHJEKEyhd11wvhJkFjR2hKeprRyKGsNUAEcggv2xUPWkUy5eeRDJ6eETpskHBZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JDr2VYmzQcfZRP5nqidKNuXnynUgMGDu7A4DEHpoLcxZzWpaT1hSeWwTzonCRdSbRrsWQHQsfk6xwMuS8PiooC",
  "key1": "juS3BSV6RFhWV2qK5S7t7ZZa3mr2q9BwtN2jWJBPQSa5W36S77EFdCcgj7hdx1BQa7hBGB6Wdn4SKS3zVwibWsB",
  "key2": "U8V1fhmumq96wKHUPyFh4AC3A72MDAKBWp31TVJ8ueT5KoS9wWD4dSVtcr1twJVmpYWDApbwrvo5zmNKH5oPVHL",
  "key3": "2tS3P6u4SG9Epw64uHopidACszDDt18LetPrkV7eATifeojaPd5ddnLdbCvFVr1irxSvv1sGWAtTC2zaoiYmq3PK",
  "key4": "3wGj16wWuTi23a1fnoLZoHBcSVufm9uLMggT2KUTXxfd2gTEjaHkbGV6ZMbwoxcUfWhKigekpyuVXLeoyvgtnL4i",
  "key5": "5RmKbcGMVMd8KLNWUFfYJfGvFPzrocm1j92Yb9g5Yg27BWENKYkvYdyS6SdT7YYAGCQWJtdEBU5xSMixo3MPtFUE",
  "key6": "2kTL6oCh7sbsyyPdZ4BXdRQNVCEJpvaMCFKaFqQ3SR1mtQsmw6cGeZ2mKYmqmF46YRKoKaQhoZ8f9Q8PKeV29BaH",
  "key7": "3SfUw7PF4nzwVMF9YKEerFsVM7cmnhbAKoHNcFGZ9uXMtUw2o1qYShsnSNdazUYFzn8ZWwstg8NHPXUSPPW6QBAx",
  "key8": "QrNvb4rUtBWLPgRMB82FKLnvac65gnY8tu5PHqbm85dm3Wau27GSZgLqCVT3HoMmKUz76safcEHvAjpNiw7fC47",
  "key9": "3MYdF79br3nBZsgSykMWhspbMBsSK9xXMhDo4rXpksqdvjWTHU5pm9AGjE5z4wyftfE1Vu9X6opeabps7C1rwhy8",
  "key10": "2D9U7NCZZBfAyL85H94KuFdjd29YqNQGCKAGgqXNaqHejxgr7BCJQRj2QA3otPHyk1QHyA33aCsV6XTwqq41DUYq",
  "key11": "snrXKvCM5kuRqhVQZGsFqzGSQrkGp45GLpuUC8LQxP4tiC3hxnMHsMvQ7C8exVqyhWwwHrqaLYxEGzoDrLvVoyg",
  "key12": "3estRGjuhdHhSZDanwGgerQXNYxvz4RHhrkT6yr5b2q11JGCwDxSUk91bWNbTLWYeAgysQAe9i46ApPMFACMYi9V",
  "key13": "3XE8dAV8ro3qFny49PQLS7nsPL4Q5N7tHKiwYpVxXjTkPD4MJ3fefR83mNvySSs7bf7dC4ReMYhQb3U8sD4Re67u",
  "key14": "y8sWbbuMDNfeyWbT6vn7UfoN35AUXnzpnX6TkzcHqgZEyG2VWBc9zvfunKT7B6c3cMTKSeiFfzCDXaWGM32m8Ho",
  "key15": "2cjQBKNFFzJnbJ6Tw4xpRkhNmTMspGgmFdtTe4MX1EyyYRfWineKidkcQ5CoNiLmY4WfjxShgJ8YDzeEdKEi5gnc",
  "key16": "5hapHzbf7fgYkfaSgQsSBqq6x84fgPf4LovmusM2Ec8gcHTgp7H1enrLzfbPG3okZMaaJ9tq6746iz5RMjXmQLWQ",
  "key17": "2gjS9CW8Zd43WHHcMKoS2PbGiqjhgGZmNmEXpoLxRco5QJzd1kmCvZ9W3tVG4G5VmsqCoFDkVGXiyjWShT8Wr38Z",
  "key18": "4opZZ7oNAx3F1fJvwdwkNUEkjD4bWsjX3dX8nernrDdRXVHnoms6xnYNaQyPJC5QgwhmmQY2HDZ5eX13Lsp2ZC9d",
  "key19": "2jvSEan6tfybXsCZrBTcMqMP56eqEAJDriTEAwfawjm5QjHVeZCAfGUbyQ2ZUSj28GUXEvgPGHSUHipE4KXXfXSr",
  "key20": "2D15Lqkn8Vr4rCjcgbXTrN8voWs9h7XeMhi5LJZsUsxftC7TLkhFaStZbTX8JgVV7G8FqUp2Ro1A6tDWgsoKThuQ",
  "key21": "5S8sjQRAdmdbRJwA31NPqMKvSv34DnwkpwnBcHTgDFZ4wKbtkCLnnZMKX1vqbFSpzHEUWaDbyfr5f2eBbRgZWkex",
  "key22": "3F7GVtquw9amkARyi7wRzx3VDQpdoPytve6k8btaXeh8q39XA6GgaqFGPzP65aVQqTjGZCxMg9xWs766VyJPK8PA",
  "key23": "2q1dgo8cVjrX1uG46XYQAfAoitnu3wG6PqSLWW3QkAHZBAu5aCNPj5GbvPdQ3jyaBERH89uY6583tnMMeKnUofBh",
  "key24": "2aziTyHyRiYWPN4DyEEciCT7SAzpzA86ZxZbBvfR2A6xLoSVc6oNXN1BJAf3w7KbbZVPxJuouCiNvWnyhbYuimgT",
  "key25": "37mnZMhuDvkMNxFX4PzEQZRDLLkyHJq4JSKhk8y7G1wDrfm8jKcBNPfkSsetoW4ag5HJBm8c35bBtxVSviL9gyKy",
  "key26": "pC3Nxscxodzm4tnPwbzMjdsYedYmbw1pFTXZyKcYnouAzdXkhXWmsDEGFonZnt1pEn1emGuNi2N5TcMFiD8Hu4s",
  "key27": "5bJeyrBHZMcFePUx4yw5Sm8w65Gfz51KkeH1cvzpxXogf2ZxMUjYFVRDiJtYQhs5R9dmACBPmrjq5xq1YYLTJRTq",
  "key28": "2sTzTPQLUQ4TaSLo48RGRThMFtGLxMQuPTtGUYCsA28zw72u6hiAdB5GsPJDRhD6CxxskGbxzf4MaMpEmByHjYbq",
  "key29": "uWXKetjx4P28fnyESu96xjCKFEnkhWibn78fmrCoCmcsVEHePXfRFtHtbvMaQTTzYgkN8NjfojWNF7257Fm3RHc"
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
