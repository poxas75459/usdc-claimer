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
    "5ujK6FWwHSnL43soxgPn7AaHiRTb1ZrVTEEUsN7dipgMK18DgQ5qbTsnxjE9ikHmqsywTpVFLWcJkYFDDmc36T2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUPkpXUTcT5qRXPEdK5Xud6dyYghoovEdEUWsaiXgwMPhLnoGBJuoP389EoLGdPAJjwToC4X3vgVCYzBFsKsHZq",
  "key1": "33kqH3P3qFYYhZMCCwT6x4U7nc4HG5iFnjqUWQuaWhAVVi8jwnQAFP6QUM4jgqXF1omqz6dLd9FvyV5wDm38e9hM",
  "key2": "4tZVfjvKVRihLFeHCPJFhNGm2oi1eWd5oYM7396fnz5AJ9TWokEUeoJkGwDfyqJ7PM8joxKXtMu9gLjtdbB69kif",
  "key3": "3TGdeWL785SYqwXfALDmF94peZ4fFSMjseZ5qf8bk3ZFi3Fv6Wxb5ga891DQ9HDV5DP1eWXd5jgv7mtGry4AnQmj",
  "key4": "2iBqdEoZCNuxFjjuwskw2PXXGxEZKjx2ihP7Tjez3TvU45kpKDB6VScp9VGi45W1ViWQ5atXbrTqi4ByRGyhBjVt",
  "key5": "3jPFCanjaTLo2tV8zmPzghNmaKmXunLgm12LQYhQsNZaqSDpB8BA12yVDPexqM7gGvUL8STuVEGz369ycDdLZuma",
  "key6": "4VrhT2cA3Snhf4DmVN8zfuDVRPdttf1sih5NLsL9eYyaYaQrus1i5itdSWj3qKW9S5TbEkasvDqYehrRxMBzdRx5",
  "key7": "uFfEGMimkzXHeoehBnQzZyfGvdzZrGYTvpQsZD2QyPPogWQXrVnXF3TcSskzmzLHyhkLpu89DamaKB79NHzZF9Z",
  "key8": "32h2uursNmSmKdDANwd3xKwwEqznF7e6zcxhL91X6QuhC5yQ2HzmcUmoQGU9PNdSfPjuWH61nmp2nf71NktHpHZS",
  "key9": "3cvRvSzZm6nxQu36FodQ1zNvPv3kGY3Kabp8SejApn4ECK1CmopF8AfNJ9ENnoDe68AFkRD5VMD8YRYtH2BWG7AB",
  "key10": "XoqgxoPoFPgvKYcQ4vcpgz5ar9BKbyaVdvFMVoBr8P66gPCRcVcFgddVdeMFkEdUCBmfr77iKc3W8XnLxMuX1Nv",
  "key11": "3JiCdbxGt6Gbp1EzvUqjEGgczmcsm1WCjP6RNdVdMne6KacTf1KcSKBhFA4LpB39Sy1Y5mJw197a7px52PX8K122",
  "key12": "629YWxNypj6nGaXzu4iKBC8zzntaTvEdw3baGCZWkQA8BvytgfbiubnAJoyhe2cUz19CrYZNDxvh98Hcw8hD7VTp",
  "key13": "4TLSeucc857MqtfCs6T1CpDmpSiUY95QGcWgxvo7BHpFbCQ4G7ojjVGSiFGHaM8AgZoMPdoUSHD9ZYvJk7bJUTcq",
  "key14": "4WHsEVw9XgKHmLEJeb5GKHTQC1ug93pqLLJmVTPfbJPGuP1jySja793YJp9c24DG2Z3WDaMWNXHjvZMfZkJQi5RY",
  "key15": "4oYqj7HZWNpRX3QSWZvavNzLb7TotQq9DtP4eik8HCsway7VhiknFyBotgmMeJ2AMzUiVqxFTVXYwdhAdYxrRHoW",
  "key16": "3VQtBkT2R4WMkBpSLsCFT8fNi9FFBNrrnoGifcxtzs27ERn4gJVAFX8k8GCK3N7SRnWooMa4jEB6msCbUoQnWx2c",
  "key17": "xrusKD4AyCXuZPseDaWecNmeqX1wGESMkL1rkhdP5RkzfGacKAcdCP4MN2DC4woZk7bUf7RaT5bLTp6iQjrg8Qn",
  "key18": "3diFZXBaYC6bomsaUUTSWPzJjjZudUMYHLdfGPimk8cprTYJRVZRjEmxM2Reuh1nJ1pHT3Qme4XJpR6EWwAC1d7S",
  "key19": "4zueryFUpzyQ7aM4iqweS5eS34sLwa97oj6QM11cNTNhDLeVjDz8ZfWewNXrNHpTZBst34YZYiGr2u4D37rFSvT7",
  "key20": "3xsZoNHQQGNJsrqnCa8ZAtk1hkFZzk36Ku57fbpXL9SoGX2fG83DifZge13N23V3XMAF8VfnSuT7KAjh2gu33tNR",
  "key21": "5G7TitvZhu1ZMWWt8kxEpp4dxYa77CaPutPvgddvL3gsPWHHGBAFzKZZvFSV5WJ3eTndWjdciT9U1jr6Qe6ukFkK",
  "key22": "4m74p4fGxm6W2PapN4gcQ36egPHGMApW7FoZqsu6YrBgYMJS8UWYJDMNcEqanrmLkw5ytZCsfNTv4T9hoXGS3H7Y",
  "key23": "3Ybtz5gF7uXPGR74VYEXj7Gjge2mBDW6aCARujP1rnMv5C2HgrCYy2hoxK9AC82eVBJrFAUNhaCWs1M9Ay4EponQ",
  "key24": "3r2YFDnocjiMqysGu362hjCtgsRugpcJNwMKbTVEJgByo8TQA1Bqd6woBjsoSV6qZpf2yqPb4fkQ8U1GY8d1cnsv",
  "key25": "46waLEh2Psf1qiTkiRkyy9WWD1AyXucSqQRTzuJ4DY9a2x3Hovfd4K3jbXG2h3mNVhu1sU3UNdegPT78Hs1ksP46",
  "key26": "65RTAEiqcTYLUbTdqQPLLzrFtKFihtborxkx348HwoUy9aJT7WgWtCowBZ6jwM7AWN6Zh25nQVRjy8162VEKS65E",
  "key27": "5d9hdEkcZCNE4XeT1Fvr5BseCEf6KBCoTfpRyQNUs1TTL5Qmv56Maaz7kZXxA1RC2FYTUtp1qB51EpbnpvQow74d",
  "key28": "3W9qfdXYvSvAk1VaVq6qMm3KErtxfwu5HFSHL4rHN6zfxpLfi3YqnK8b6vYxZndB4z7zs2XZYaGNg5NRiJDFcYmS",
  "key29": "4XzaJwE9hH8asfhJefLf9CcV4gRGMJWSvuB7H62QvJAN7zNwppP6rAh1tZAaG8J4ZnjWzRGGYPqR4Gr7BPnD4uNu",
  "key30": "gVwxU8zU2jPjaejhaAhQV2wxXCQVAKUjS3KdrWj2dkJB1f9JRvfnCSVivU2GzpesPF535Y6hRpXyAwwHvnmkrYc",
  "key31": "2pbwZhPjR5PmeWXgQp6RZGDyTrF5KJVAj1oUYYk6eLKBgZZWrqUfpqLVkuFHVG2gdW6ao7cpKTk9AuUsfCSJVhCQ",
  "key32": "3W2CeCHH3VF9jwgp6WqW87B1ya7g8wqRmQkBH395C2nCLVy31pDNBQzvLwXiFwUZb21BNvBn3Ry4yvReZ7LDqNqP",
  "key33": "8evZLXpxCWc7XpbKK82HvUpEuK6jbCswCXBksZWh8fBVHChHnRMJvvxw6PKGMVP964cb27UcXigx3N7Q4fiZbaF",
  "key34": "2SLVoPnJj6Aksg8hGiMKqwLRpbynFPzbNNpS6PXDdTy9zFK45GY5hNftfznc4y8vRG4mEtmCzEnBHqR29Gh96raV",
  "key35": "2hvv3as5UwTp8YCde8Pc1v3pr8LeCcD7WvYfDTTHSdTH99YAaQxDu5gQ9GCMLjTS8jWn2ZZuaZTk5cSHtyt71b5k",
  "key36": "5vkZYzKciGPKNpuMPqzqdQUK8hhP3SzvXTrj1MpHFXrc3itCUCUDJxaj2Mon635Xyu6gqqxBqjZXzfDW2pH3Bg3T",
  "key37": "5bu6tmF8d12FnoNfAU5NzbASAxLZikDCsBo7ggMUjECtFmGLnVG9rw3wFgfn3hJaJsPL9qp45xB3xwH7uVAP2HXi",
  "key38": "2jgJqiUb1ENvxmxefhvCVVt2QSoi5p85oBAbeQCXg2UM7NyD5HmzihPoVFCxtSXuyNeNAoCC49SexeYSwDc2hj8P",
  "key39": "Mw7wyTE2eSm9hLieLi4kQxWa8xARLS1iwRzFuqSTEKANBAdNCqD91PuJssiPbyngFaVorY4xS8DebXspnW7KCQH",
  "key40": "4EE1nLmF85btJ7EVFFgToTQjhKmJnVz9nLhSrWc3iJt3TkkufvnRzLJQN2uoRL95NWqD9w8gQwSGYm2n5HvVQJ1o",
  "key41": "5hWf2Jjxxeb27TrphgnuCmDrnf2BX7G7RTvWA2VKzjWZb8Rwbb12b6vCTqK1nVnuiCCEunGHCXJYJCZBoT2Rx3YV",
  "key42": "32Au3vdxdWm13VQH5ycqYSedExQESoXUtsyGz8SoQrtoLg6kFVZaMGw4Aq5WakiaE3fjcGLtry488v4sac7icGRM",
  "key43": "42pJQte4fEmoiSYcxrpscwC2bxS3EuhRWWtaHW5HFp9SYX443FZRAd9Dk8ptMA5S7sKjDGLyJENRVynNyny96v4X",
  "key44": "kQsNmKtXuksy4AMD7etyad8u1efMNfbJFTVn5dAEJBD8mqYdwtxbyewgQ5yNPXuc3uf4wd1uv9SJ8fiUV47jEQE",
  "key45": "4TvjZbwAASggrKV8dWroSLRr2EQXgvHQNtedPJMzHYZWrSqk1ZdJdkoEfh4o94eKk94jS64sF9yh2HE3a2uScCRS",
  "key46": "3pwwKwMbufKCtPkLRhwfdPwHdaECTCmY36iuFn7hBFuuAVCWjTyb6euCHWePSmtc5NeY3cxSWq4XvEbWyhrQPyVL",
  "key47": "2T9ULtSZVoRb7WBFJ2Kbf6EjkR4KaTuCPFVyLGhtNH9YdWnc13YEHBLESWLHZK92sEaVkTp9v23uuaD2w7oHVHYm",
  "key48": "5zLik1LYeRhtD6U55sLcrmRBCwgcxELKJi1Z4oFqhwzueMfgiBvQ85thmMH6c4aFTN5QMxqLNQCjaDCVsP9E47an"
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
