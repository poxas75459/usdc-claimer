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
    "4BTXEtTVJGkhwrZk5gozdck9Z4e7rWDKeuDhYF6E41uto5Gyfbu3iYHhwwyA2yrqdjZsUdZtkbz7zNeHF2sDmo5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425YCysBjKmiDk7wd2poCyRquW5SRtgXMmUTBodd53RgKixdNCvF3Y2rZ6auimYtP1p63WySMbZDCqTYxZXxzGcq",
  "key1": "4LRZEKSjo8yMcrvv4EZCWGF7dtVTRSmxHYzwYzopUTN97ojxegAWHYhfEGhrAqEcC7P8Vd1QgQ4ioguge3CFpQ2X",
  "key2": "5Eg7BWBT7X37ahcgZfE1Co82a1Dc2NC59Rzb8pYqjxzTaMyULVDg3qExwHk6ctsAuLfqRZuXVjL2hJfgpzfTRsoJ",
  "key3": "4RKwTgbTh2b2CySouAfk8gXVUSRJdkQTVVnwEXZdXSVPED8pH5hSig8Sd8WL9KaMhrJVhR3jfoiMUsV6a336BzkC",
  "key4": "3PTRR8mLB53g9yCaC9n3zrgBsGKDYzCMZNRFpDFhgztkwU2m9fgvDxs67EXVnmAnDcCpdyYuoFpAgpymdYnDnNMp",
  "key5": "4YKZqGX7zrcJPXSf5XotAU9hW4BGdv3G7t1rX2rmFYkPnf2Z7nEQFQMHZnk46fRWAYu9WXnfW7oye6zNSbjoSFdo",
  "key6": "3MeyaEHEELLfswSXXNJrfqyesZzR2dUZDdh8z36CXsucYhNDfpRgSRa2Y2rnLtj7iRm878THC2rs2J7Xtjn3WoNJ",
  "key7": "5ukJD61GgBPyTjdRq9PosSLyvbLUq57K5t7NeeDftaWCKNwpRpTB5j9YgRHwVR8uywnH8D4tdKK1Gia2wosDBbNS",
  "key8": "2pThM1TseQvmREVQv6XuGkWstFewqpDjPLZAH9KkRBccJcgNEeDRpfBZU35zsYtdpG5c1Xt8vfUq8WDCrQSpUxhf",
  "key9": "5Vye1d8QnxjtN1XNBFueZaxqG96U6VwyCHJR5ZC8ABwLWSk7bhD3D9z7tBkVhRWZatBPpKnDuqujLMkPUEZ6ibiv",
  "key10": "3oExE8a3V1TcsWRG4UgzREF9qsmTx76Md7Tg7Zef7HezwgnyzQS1DyzVbyrZExHpxGgnpdMh8nuBPTvgmUn9JcDL",
  "key11": "5SNa2pnj88T3qKJ4CNkvjpsneKS2T7ZfAEKuKpwm6Ht2DM2kDpDca9e4a6Q4qCsGLuLawkjMFcseBBDJZuK3iPRu",
  "key12": "4ARems24AqoBjF1enbEcjgeC8voSismfN1dKoVn68Gk5yYMx9Msm24rnskZrb3rw91iicJAuJcefRktS8WQzwMDM",
  "key13": "5CGyi4wB96njixq9mgXzghbF6qrrNSA3oQYXN3dTtZcVAtatdwWAtEBeRdefwwrokQksMSwCs5WhLP1dTLNgG1c8",
  "key14": "tXtyuLMexvM7jCSc9gf6ALZGu7eeFGQKj1uykh3J4tCa1hHQt6ghRxKKENR3TJFC7ZGEm6pKfNTDSAweYReaKDf",
  "key15": "31WbpdU12QeYanta46WGF9qDumVz8ZuynAaQGtorW9JUJKVR4zb39LwapsaUf26aPDRBBoGBgTTGkc4CTp8nrR4X",
  "key16": "5isXJjQ4yEy93WjdSacc6bGBCnqvZUQ712n5ZHq9Dkoqp63e2YRsjuHc4RSH9eo5rHnBnVdRqHrfuzPNmTB1Rcnr",
  "key17": "4GRD4T5DKeTrsruMCyE1KswyhcC7r9epp6KP2WqpCYVmwMy2Gvp4DDxgHypkvBM1B8ri821A4GVqEzTxmio2Cwkw",
  "key18": "2wD6LZGpeS8j1jqbk8Z4vfj5YKXJBybpFYyEbzpzzUBfpgUEJ57U51AzrbiAypwGiSq1158BYbmMNWhs8vqZwGoL",
  "key19": "3vytZS6gzD8ntZVMCzBNwEyZsCJmYLZEndxHbFgJwhXouZCiYLN9ZdG9gTmW4eK5pJL162e64A8PNJqfHdzVCENK",
  "key20": "5mUxcBWnm1RG6uumpGWe4R6uFABynCVADLYExrF3gXtjq87KB5cv8shz8XTtDWUhEhx59ayPWPRmD8y5Ggi69mGT",
  "key21": "65ijjTfHxxriFK32VrKqsV1JKJqRuAh2sXpq6ufCw5FiTnQYHV8kd48DB8huat1i9dx52LGT9BnYi4aAHeub7DvA",
  "key22": "48TWcYQwbeEebYodexY5oPTgrnwQ82NJXyzwwJnyMBduhYkAn4pFTi79Cw7DXjshTrqyMYuzoaB31Kq2yJjBufLr",
  "key23": "fJ6z8GP1xCi3gVjYqc2v4W6WHc4x7rqLCCedBXici8NKskweVdsohpRxH6yDch1UvGQRzz5qWXGxJjuWeRYgH4e",
  "key24": "2s6mMeyzL2TepkqtTQFCsJXdzV4YoVBLYquSbNPgiGGZ1ikNUMhbV2EzmjGSxMMKWkRN95sm7aWuj7fDLce8Vm7d",
  "key25": "5BdVKsP2qDSeRre2UZ1WyGSp8yf8SaydqThaAj7U1yGJAiw7tQVBB3wasPGshHR231qpfU5HiHAx9yc2nWi1EUv1",
  "key26": "273vGmjNE2gJVndPDdzRgXEccbHVE52QnARDVVV9qKw264gz5Ecuea4vMhToZ5sXLpaNaycHKRUGZkB31LJPY2ev",
  "key27": "5YeMkfZPQhcd5sHm64Z3WcqWrtcLiscfc6mkJjFDMXDuQcPwbdP37e9qY43kvoHENVVCqfRJRc8F6KH51jb2aQJB",
  "key28": "2NGUrmzNQ5sgD1QKCb9BGRczH4CFMeoVU38ZxyxmsWxhUVQxaTqdVAQaJvX4wGXP4WcsZ4q6wXeBVGMMKD6isx47",
  "key29": "3Wo5p5cuXMPYfq4JiRny5rAhxremre68FW4UTj7p7rP9gKuZe1x2HNg3k1s2B1xx8QV3PyZY3r5UdRSEi38qzACt",
  "key30": "5oQrU2LhUSUG9vekeR15o6YQ4zEN1AwXhbuLaC8RDFzrFfKRGt3JXMiQQwUjQyJCQoL81CGXsevkJJ9jzEFpwgiM",
  "key31": "4K68ZViGvvAEjCU6kWKgxZU21NEBMKkooCkGQMUS6YwjQgQQ6xmzaE9aare5BSrCb8HivU5LjSEpaEztoE8vgqyL",
  "key32": "2hNgVd2Nkn9yv5iNmsSjpKmd4ydyvdYCPoF7nUXncnGL4Dp1aJbZeGibkRcGewmTyVJwgWvAK2jproe76rV5F76j",
  "key33": "3xW23NH8UokLTTtFB1CJ9WXK8zoj7VU6QcnHneS3Ennz11GD7r3naYVFWPwUGmFYSEDnTMLbFsAmrAg1nnJewXDZ",
  "key34": "5tNFa5YXGYVPvdry5Xce8Dp1ARYcHw2DwoPCrLyjDGyqu39dUMpykZCyLcBQBg7X9Vo3poFd9uxMQsTo2xZeenjM",
  "key35": "36v72gmu2sCWe7ugRzLAMr8PGFHKohmTJ9AM7GrKsmjmieqToKouepj1rz7HSqbGPa8Gwn98i1YHPz8Z4C2gAshL",
  "key36": "2hhk9pKTzLk3UdkFRDY2mfQ1vVJZC1yuXoGsxvbRpxMzEZ2T4bcgmQemxCRxXpaHTtvfwAZAS7WdZ9U6v93H3WPt",
  "key37": "33eiUb1CDGm2R1ftg7fB8p3x29EJBYaoSguNfdNxrwFwVxyph4UxNGUBzkAMpdPWQKkxJcDiKQWjU22rHsrcP2Ki",
  "key38": "5JpPC16Dn9hUroVBkR4X9v35nUJTp4bYNintMY6srjtiqaPy6PvEQjVZFKzdBQaf6kq96uTFruN7npicBmoy58N4",
  "key39": "3e85NdxTzvnvykN5w1BMCcbSVMTieMZorFYQasq1MaWVvJiUyPhLvx6VChUdL76TadjizN2W916aSMAkiHD3cgXW",
  "key40": "4jrjZaB3NLkiKEX22g9m1gdArE9ZqFaqGPjGkVGE3qcNEcSFNZUd8nFNVZo34A1JyW23WTFjLKeD7TfqK4ndqUiE",
  "key41": "63DDns34xpx2Xocbgk9MTMzWz6i1Wc9fxM8BTAtNfGf3aEfCibhQ4f74fYVCf7wbQyex7p1R1oX8xeGbdGuVeh5N",
  "key42": "5ZNFaFYprGMzcApNPZFXXhAL6BbPzqxPGF2hpeyoawzvb1ve79wL19wstrYwURQsmqa18xZU5TJLVeDLeDwieDpr",
  "key43": "3wSxA7yrwTTxVMweFKF2iXoCtenEKBDjR9gAQpxnnFuLC2kYJj7qt17igdH6G83SZkmNmPrBCMA1R7FjSC4rZPFh",
  "key44": "4xP8eDfQEczpW1QMUdBBfuaig3tGqKt4pS6CRZweu86Uatc9rUkrnvkkFVWHyGeH8dQ1Jwueq3pucwX4cfvhdwDY"
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
