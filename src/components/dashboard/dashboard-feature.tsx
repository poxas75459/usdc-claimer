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
    "yP7TeiGhdiUYu8LvAMQL42bL94Ze9N7VqoFF7FtRhU33sfxeeGZwhuNKYebiY96V74zBxZm8bbYDgPYcv5NQRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGdwkkzB8GoEUYu94LEcNKXsA8vgXsgjr2UJikU2gcoSzggTQXoQKoz8porek9NT3h7f5cCo2URVFiTxLwyQaJX",
  "key1": "5HZsovUM73pCW19xjimcCwhDKjf6W2b2nSFdiLkGoLZdUgd1qKgQXEVpccXqDQwdA42xVXHDipjn6k2dNG1Rijuo",
  "key2": "4YBNCWce8iYrs5vUDip8j7UWN1f8ArYD7ZXrBmPH1BQ3i2ErJxGJLZvceQCJNfzrtZur682t8nUQKWWEsJ6kC8AF",
  "key3": "5bL5wpkVfHakvYUK3vS4eHGfutkuiDpCvEoBWiDP8NB1j8XVVRwHYc2A7stTYrAaEgWbrfTCkyVhavJPVFrhDmRN",
  "key4": "31RFbqD36zCFzUNVYERHw3rFN2Hm7gWG27yVS5RN3uCAR55PTntLD4NPDtFUNwkrteXKMk853usnA5tYv8SWZGfJ",
  "key5": "ZMFmsbtzEWxxEppjCbN7FftrwSKE9ruBLLoWj7cum6SH7DpyG8WTouGQ9mPuP7KRaUY4SX6VENcvsbZPQ1fvbWk",
  "key6": "Lu1Sd2rVukUocUrMhgDH5SU8bcDh9HCHvAWtax8NbZQGgD5yzeRe4L49TZLGQiAsAHQaeqrkrBaGky1BscjW7ic",
  "key7": "4nGLY2twNmTqrFsXNvbzqDbhonxxuaiGKLWWHQMNSCHwMYLfEWyLTmh254njqXAceX6YyFn6pSf1R9anJL8UVdNk",
  "key8": "27drgVhCxAmVL6YRwMVoHtxDNSfdL5NFW2a5KYkerAVLCUSFtWo5QRkZCXg4hMwTUtLm3uUDaXpfhCPQuyEEVskT",
  "key9": "3SE7tKsDCw4ZT5EqLg2vreSc44j27dyQnfDMAfkkftErffhqkubSBghkceZLCHxm2SYKw4RwjAeXLRcuMngE3x9y",
  "key10": "2BAcAt5pPk2d3CqyaRuJfbe5pcD8ruXdNYQBorUgRDSwUsLYqJi4avCRigB4m6gcKCuH8ovyV4PUqQkX2ifuLh6U",
  "key11": "5BWcMDydv9UufHur2Umyr8VGezg9BS3Xg3GVvJvr4Zpw7zpZZjcob88LD9h8Mubi8qEZ4DKSYSpr7zEo2rk3HzHf",
  "key12": "4go4ySzNyipYmrzXADug546TDKBHWAy81pAXqoZg8wSCTA5w76i12EPVh18rQUcwAQVtSgCFphTexUVyzWn4PDb3",
  "key13": "24xFdRy4f2byVEGpQhYiHHxNyVZoh2qKLFhcouFmgaXYvGgEBau3UiTe8dgebRyfruTZz9EzgBrRto83qLRoa6gT",
  "key14": "4HpYH9JhZgz3QkQKbPR9FDY459LkxiUvgtBNCQLLzceyaqDvhztSbvgXNZLiPjBJErFhR6qBquPczrsi5Qpnuykb",
  "key15": "5kAb2hku5cprDvwGPQ8TvWN5NGPRMoF4LqSS45oyqCaDLpqNufspGc6vk9Dp8wGX6xcVDJ4hGs1QS4C3nph2m4K",
  "key16": "5ksqKojc3WRjvTErAanuueZvK7yi8sCjAVsVXvy8P4rFADqyxk3CDifEroDMffLyaiWN2y2bZh4XEAe6KStFWhWp",
  "key17": "3Yb451iUKfQK5P4vrPrXfTEmo5mhWZyc4QnqyKcsKy7i6VgCNnorLgXgzwKiggqngjejRPJ1V5SWKsmMwiLMgMZQ",
  "key18": "4DH5hE1GeydpS1eG6pu6qQT4xk8RYLVRuUZDVNmWiZnnwSw8vMg4A91K9miFdiE6AiC8SmYkws3kbWuDZUQD8U6u",
  "key19": "272mtyHTHMk8dwHTv6M6kpDZyJRcdNEeaoCsy9BTy6zvdxgBmnkHJNSfm1Yt8ouuzDgrxGKx9fL2HS2BdbLpVDKy",
  "key20": "3P6tRNtM1vRc5dB66vuZsyV1iTnABfphs8d2byzZSTb7GwioBWX4Ja6QWTwihH1zNnJpScDQ3VN4tUucr5Z2Tb3X",
  "key21": "gUHp5Bj2vBrBs2g8jC1earU1sCnP56kez4tthJYL5PWxVG1KngrDNqrG7qkNeFbKfxJYseVPndDXyKFXEVuWiJJ",
  "key22": "5XCsmCLdUdLwxtCipSjtJmLaAh95PTpyKcSFonxvT37tBHC6FTKcpd7NdEC5V58G2BUe2MGm3oaZEZSsHUWAPr7A",
  "key23": "hNTTpEgFizCVHZt5HTb1q5VcxezSFkyraH3ApHpZjDbXakfxYckyT8boF2EWXfGhfKD9p2nfUVnF2aJTBC8Ksku",
  "key24": "48wfbv5uvgLrFJ6ZhHdYeJTzLMuYMhU8DeA3iabcMeirCd9wL9kg3vqyidft7Jm33HsakPZGECV7Q5rqE7WMBHpn",
  "key25": "3XruzBEF33ESmWDTNTTohZQds8RU6FWeSikXxL7rcf2sWa1YVNifGqjK4pJiXnsChguGncJUsAuC4mc6Jj21QgT6",
  "key26": "2qDkp3FFp7MvwrZmimu6dvAMCNgxVHDAdFSpMejTjvss7hDumnvhXUnMKH1BnSY3EscMVPFFciAVvxuSfefhkKvG",
  "key27": "5wWUJRASAK8ZRY5YcrqzqaLoeebmYRGFgfhbaXRHph2xqvEVBW5KLdpVm3sDLcgXFEjF3h5hcnQ8nJhNvhkvTzoc",
  "key28": "4CNzNUxfTVSCw8JUUueAb3bVu5EZe2TKr8nZsfe53CRvvGLLpwVqRbkfczrGunZND4xUEyM3hxVJLDbijrv8cXea",
  "key29": "6jzZip7F3xjhhp53BERCxb6bTQM4mNpBR7ncLphSXPjH1NGJzXSz7tXTqcjDVWUdKQfsePFs1zWDJeXZX1CLLJq",
  "key30": "2yExPQ21i5cBXe8n24tifVU7iX1aJtY9CWNWDnEnYgfsXED1BdZpPW8TdN9f6TGyrnszACkMJseuzKoCqSf45Qog",
  "key31": "4GBpMzFpY7N6ATLc8NFQKFHnbUoq2XCJV6ARYad5r1eb7rzSFscxzkg7Qx6iD4T4vRSvYmtKoTSKP9VCZ311YgsN",
  "key32": "4hRuacgQzAnBX4kDkybXkvRShWgBhgHbzBDJyJ6xrom8rm9et84ATvJudjpQEBB84g8p1E9sdfLbHhLGecoxt4J8",
  "key33": "5hTkrxToR4qaaAAwpxbJutJYuzMDZ4DVQx61r4Z3C1QEexwUPjhiXRLEKD3piWAW8Kwx72JP6Qvdqhfp1QfZXiW6",
  "key34": "4vCfLcbYV4F5MZ7aiBnhaMg89tUqs991M4MrWSNMZP9M2yJkRZjDpUWpixE2f16ABRPG1Godkt2MQrcDbxPoYxZ8",
  "key35": "LvNyCH8GHATaSVJHsYkLSfimhd6D7HzxmU8m3HKfJuZSonE7NUybPeNjCBJEDFKv9njVPsb7La1rDu3kAinBn6Q",
  "key36": "3JfFswjZdsCYaPgpY8qpBB44undwLPxt6jJdxXTevUvzi8PYgFGAuJzqPR4ht8tb6hzZvQyRBcsigYiqar8KjkB1",
  "key37": "3byZT6663prKPzoCh9v9RA4qY4iXww79b2eMBU3BaQHwM9FKRJZynqUb9zZD2v91H62CnKV2ivQvmDpCn4e2n5i7",
  "key38": "4A8AumwzpUnxTbwjmopyxUNAK3FcWrTAYwJhcARf1EYGc1czMNpTEXRbytir7ZUur4yVvu7SYSQwQaA4YzWwJWed",
  "key39": "dwMc3DRzWteCa2i5tE15UZkzTY4fEYmMuWdBKMAXYHGBKWkbAQE4bgEsZj7LGnnC19eb2eawSesGozcijse7nLr",
  "key40": "5B71VsFebL5GNeVHxNCZJHutHPFkuBVXDEcSifkjCbbnsbshoKdrUAtvAXANLmqXfWn2P4ukm5CG3WarYTTTdLXb",
  "key41": "31ELM2JJb8WbbvkysQraS3icHg3Eq6o2qFKq7xSvp7hqK5MMqp5RsN6Y5WtQPQJg9brFaoFBuA1H6mw9wk1sd5SF",
  "key42": "2yaQaPy7oDDF9dp1aCnLYDriHWCVWb7D7yzy8U88jWXSvRUQVNjS8X3KfGMoRBMxs3XFDs3HRVLAQ661QrmNiQnR",
  "key43": "DkoLEhwSPLP5PbigSn95WwtLiVaWqZs94BTyrGnzhXHm2834PaVN8xvfvjmSfJREXYREWgRRVCn8YmYm2varwaY",
  "key44": "229bpAz51nSb241sXvpadkQutvYH76MPWqEbKiGEgNudgM7ErgWrvFgxM2TS8jn986fUTHY4cSNtDuoWb4MMMgz9",
  "key45": "FnHyTmGKQQecbKQzJenPByc9X9kaucp9aft7jtbjHvah1zWyWVtyfGu9cY1zQigrK91ZQNuTjafMFoD28Hk5f49",
  "key46": "5QtpTesHZhdb1rWrtREskhKbB2Pmc5xL3Z24KhdsZkd1z28pdc28GyhFA5xUdNvjbKcMfZ3AWg5BnLQtQhu4kGUv"
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
