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
    "3HTuXcREFeM7vNr5mUZ51i6Cue6YWpm1Ab88nTijSeZwjCSAfNF8ECpieRqWwoHYY7iAk1LCbv7yGs9Ad8cvYJH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NsawYrpq1zjebe7tTBh5LxuXS95B7vaoYrXEKXpima4xp1588j5U1rPSY2qMMWUfpumPMJ3W6PpD4uPojgUEUX",
  "key1": "23ASBPSxAX6MmZKq4g2bvvw4MryXc5BSGpFWfSZjJzDmngMRm5C8WRosgK3fs4dDaGWhM753uryKMMPG5y1XMvDA",
  "key2": "5pzLAg3JdpUZzGb3anLrJHVg76CGMg9UPocc2qqdN3EtM7FvzvoSJLjJNGhZBS6hNRN4muZisfbwSTgGCuLvRoNu",
  "key3": "UeHckEk7gcdbgAvysCG7jEnSByFvX2bw1htcujWth6WHbrrm7fXL6G8HrE45jrgZKVQphWyojSJQyCc2oSTwToZ",
  "key4": "2GegMj8rFQVukhQXUoZzzggKRe6MWdZavXRxLqoxqeUWeyxv8kcaCxNuEmzyVHRWMMaa1YhTxUB9pNiYGd6vhMjT",
  "key5": "5dLVM1VNVQXFQuot1641GKpu3c9CS36YM47LQXGQ4AAoY4nju8rCUfLarTjVjN5mS6rrJoqSBnPByLGZt9FDXx8o",
  "key6": "EGdfTnJkLfuzsHdzLGf9e9RS7bGPUGAZGX2TFjybEdd4wkLVmKtd7jM9ikip3vdm94gqGUHRqeLiqb7GRH7hAaU",
  "key7": "48xVR3zEXyKegkqK7ZsNDyB1ikmXGgoGMf9DjmUq37E86SubQwMDyXFbirdhkYh4o26HeVC8BTkQVHNPzcxdueok",
  "key8": "2GP6T4qme4dem1kmq4t1cnP88mHSiM6dGLD8SEszKShLLUqCovBMN6TZEviWTRycF6jpBnCcKJJS6W5ZgW6sBpNQ",
  "key9": "cW9AHrLeFnpBdJy4oHL3vXZQR6EvT6UU1ASxsiB3qLv36AJkAxcbCWT2RCSTVouxxJybqX9HhCyGcFTvfMzxGa3",
  "key10": "4z662nQeY6yaC3GLH17XNdhgmrjrXrUktvFhweGqpXAtXdCSpUda1Bb25zMKwshbC3qLUFnVqvAC9YGbbwLYouWK",
  "key11": "2qtbWo2szG2dAHnH7RKahV8SCSKS35uG4Yvr6fjTcWjSA9rPFqRWCXqFK53hBU5FZHG1meMSjoyhAoUpDcdRgKE7",
  "key12": "2oNx5yBL3SCy5UCHRQBe3MNbjwvP4k93bNnYSLqwTqPQm8en4NC7nA78pR4MGjriFNUuAiDBPjCQheFq1nRq5nM9",
  "key13": "4cr9uebJ9PvTyPM6M78HKuv2b5Ew1rvmCBMet6DUCUMWdvvg9ZvoX5LbZdRc5Mc3oP36e5i4nv7WPPxC2L9uzLwm",
  "key14": "5A4wxHRPYj8syvufGqLE7mc118CdJ8uwKGHyEa4TW3mdhCWWvBG57gNLXJsgW8Q7BGs9bDzSykyHBHoti1RJ3fxz",
  "key15": "p296sW6jBShbLbETernoamNPrqM9whHdmkFfqxZfprQvgmSKyyrycUruBow42HqQQpnmmVFs35QyuomB6TZj2o5",
  "key16": "Ne78gVaTyHcUXE4MCBZVAfcFuVCzmDRrGnomGNTmfemwxYj69rXCDoinLyy7LMiYUNEAie5Lv6m39pt39y2WVA7",
  "key17": "2aTpEeNYJHmyzkrfHzfwyU2GetJ9bFS9ihRuAKQ9jvhuXer95LRBWzmumSSbevxoKNcw2F2SYACio26modfk1j2y",
  "key18": "3VgKQbgzj7fBPBDpnbzhx1XRacHdzZGtkfMVFZbyRwZ1vLFBWCMXj1UuBRLAmsAGYUZexfHH4fehsJWvDSuXXSXB",
  "key19": "5zECvWuaP1wHmhE1jJ99RtMFzs9ovp2cxi73qn5rjXcQBPcrqAiHYDT1T8kZHxdzbjKeFTaJq8DZhSmSzJd6exRk",
  "key20": "42nHLGZHNLsYUPoj6y6EtwCfYnqC9hgZKy6rXENPms5Kxv8TZC7TNKZ2LT2PCbWQcsDAhyx64Yzrdd2RzvaJjBdw",
  "key21": "5xrywJC8iWpjNcAxwT9kWuYzW2hxUK4iFPycjzg1gKiA1PuqMgw85dicE4YqpsUG6xF8BV5daHmB5ZcS52bn7ZrX",
  "key22": "DuAPGXyS4CdtePViv1szpDfxUURgQa1qB4sKeTjXrGxQ1MAGudyYvs9ptuoi8gxkzaRR9QJXmHa5FEkSLSAP9sa",
  "key23": "2osEfFqPSMKK7CAPuyULvAeXCYuXX5qBDj5JPV6goYnwfHoW159z4ciezUYnycTUmZB6p2jMLQK3iNmcz72DMDCv",
  "key24": "29MKjaD3QA7pS4WmHYqFLHJ9qMwrSw4hzsAzHuAs76z3mmxmNvudYgddz2kYrFiS61v4FNyXXZW38Ckuc6hee5DT",
  "key25": "4ZqZJ3TocjokZBuuaabPUuh4ZXAYsUiCNqQxp6YRL8B5XkwTZX7ozbL6k3wHdhqZ3SDRxHiLGsmezWehv3gNzwa2",
  "key26": "xRioz3BEeDU2uT6aw4MvapcUXvZ4BHsanjH5Ny4pduscUvh16uGpjoh34MK3ak7urMQE77F3WxvNr6LYyoGMcjc",
  "key27": "2UkDDoiRFyktn6z93cpLqQDpuq1wv1n7eCwUpEVahV7HGrfbYVnGjCGGJ2YkTYKB9kLkqX9pZqb9yKc4eyAPTRNE",
  "key28": "AnTZq7isuN7eXLmKJP2jXmFp3DPMTFRkWRJLkDQcmBGhW2hXVBQtz7rm8TxEZaqaEfKFDPiAyPcZFueYB1WPQQ1",
  "key29": "3L4MLjdfNkXXvWX3EQTE74CybKeNnXex8iwVoJGpJSNX6bj1BexJdsQu8u1z9b37S7pBg12tJ8AeVcLTQ6o8Pt88",
  "key30": "23koLhhgdB4MDXgUGaAjQsLZR26yYyWEHstGLkjtVweAdtS7ij6ZomGsaVA5xeABkckojLLkBVvv8MZAaV4Qyui7",
  "key31": "4sQ6sJ6ZWKLESuNTrACg7RXCyy53YCCKLAmNErbW1EWy3XLrWqJqLh2BeqoB88895RQXwwVUBSMV6f74u8F7uUaD",
  "key32": "bP2wXgCWLBWWfEMguoPkxLSoFfrmcqZRLh3XK5WQKcn5tUziDLZdTNRbWuTBzKmUe1g9TGegmsUiQno42UC7ZKK",
  "key33": "3AkiZWJhdjMJRsB4SF2CQrMXShdeEWR5e99BvQ6P3TmnftmgBQQbrw7wBS4GzjPXKMoNGpoeg8LGjBEXZLxLcHJ",
  "key34": "4Rn1xqtE9sCo4ef39U9oU1JJz31R6ZFFrE3wMbpn8pNdL6JjBeLuEDzNMqjYSnYQAEP4s5TmtoZ6XH5VMNTNGRT1",
  "key35": "2bzFJnqQrUU2ZVTGYSfBXbcCiEYfrCj7HP3SCtLU8GMkQhszwADkChq8CLgZgQTSoEii6EyQL7Xx67yExb6kt9D2",
  "key36": "4BT8ncx3U6XgvP7UF95Pre35R3DWm32FitJKohU9vkRcMqWrp7oV7UYrBe8R2ybdN2b6VEJmMU8EoLAqkqEzs3xQ",
  "key37": "3uLWFVZHmZR1v97hFmuVzCixwwKBWmB2D8stzFkJ98K6p8jodSuEVmFJdkR9vkwG5Y2GX7Waasvj4vcX4PhpE4WJ",
  "key38": "2Af36YzViRGaFA8s1pQABbG531aDBCPvoZTGNyP7e7zp8BQVyTDLY9h1cgHhru9oR7uU9ynwNFgA2hsMRnTZWu1H",
  "key39": "5QNpSjZRNoWvPsav8HH3zSgvt5aKoqwGjBcrcj6FGfnN9RJZTYxq3yqYyCceCZXR6ywMiTzhHYknxibMfxZYUUgh",
  "key40": "4xwzRQDUMJPBHfexwwhkB79JV4BhTzhv1kMQRUncKgBDZcdX4ZbYJytMPgC6zpZSZWPUTNJP5XhA4PsEH5FARGSW"
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
