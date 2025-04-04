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
    "2yyKSCvT3V5J18TyAMLSwAiTZby6YiunTcJEz41EouHpqmoM3Camw9ZLimA24nRkJPRxE24M6gUXKv5TUWhqWmLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oL9tnTecTQN5aDq37ZzxnEcVu6GS7PcU412Bmxudm5cxD1xjLFG8Q3QKtyRLgBgqSLm27n1Ndn7rdaPNwc3avXA",
  "key1": "wYnxw9NeeZivVZ6ktfeyLF9xWMmkiDFxTJ8o5ciKNKBJGmWJFwkn8VvM7W8nU7MLEBpE9cXNoyxnc5cgrXuMfK3",
  "key2": "5TwTg7vU6v9kYu2Q2fD8D1SmJ5j76rmpiDjMHRTavyCX4sdJZ7Ft4f4Tn99tL6y8MzqyWgnK23NGQxW9uHb1pbJM",
  "key3": "5voExLRJPy2aKrrsKJNsZ8sMFjEJh1RPU924suAXrgxE9Rg1EmHLiLvA8yFyFLn6eHB9ueuU37XpzYpjNfu4mHmQ",
  "key4": "5ZJX4fFFYpCi98jvwrwfZk5Yfn28nZrLxWWzDzfSFhkSFZquVvKTbJ8vcEHZYd1v377Dov8BMuyYGpxnYWYxdqi6",
  "key5": "2cZV18sz4NLZvf7P4QtVuCnSouJRHzDZ2xsJsiZ2sug3mppJdyEUwFuLtY6RiPKzGJfxpNCR5drWAZJogkkuHdqf",
  "key6": "52qC216knToBPXCw1utPCJZZxL3Yjx6Nevg28G1Kx7TxoQ6wbeGfULYhW65rzAokXEvMEbvPeCJGrm4kBNghKPh6",
  "key7": "ErLZudamFJLsbyWCC7duzWfcJeb3pDAmM2TGnPeqYjctvii35eVtmMfX2AdTkJEHp2v7RDRPPSV7V4j6y9VVXMX",
  "key8": "AuFg1nygTqFzYfTN2De4vvgT4WbgpHDNh2THRMhquTasxjVpnnbhmP7JCcjuLDGm4EudsiLfPJtADkSc4KjKPxD",
  "key9": "2LnHnTcCouviSMgqs4xVDJ9eAW4SJhnk9FBoYy1XLoULVeCBFLABG724tEU59yemMXxJcXqGbUMbNGdzcSym641f",
  "key10": "342DkoXUG8Up2EQH26g9gSZPiMBAy6BZ7a3LWRX3M6ikvP1523nSAcJzm8aw2J7RoDBDQfbLVNMDjHRTggz9fPXP",
  "key11": "3dTR3V2DbT17EEUfH2sWNf58ZTKZqAt6YJSPV85xKMaBUasWeQkh5yUjaw9o4u2Uk6qg4QghLZRDCNf1tq3UGW1u",
  "key12": "2rpK4dmjvfwz8YUA2jcqeQouGqoVHe74FRhAWUVCdPDMMiq5i8hjTEncSirfQ81e87k4vchYmQLxMZT6tHiv1rtZ",
  "key13": "2x25GgzGvvaKBdu5pmyS67wtSkHpz91rihnNpNCewg6gEm2DYQp1dc92D3hFYTGLXnBrFzYTVMFS28hudT8DsuWD",
  "key14": "3rcide4D6LBTxLVC5sog3JScsNjcsCo8w8PLJRo6PvqhWcr1kt43NZ6oYPjJwoKLdEeL6LB6duQF3Wh3phaEFCec",
  "key15": "54y9BmbHpxZyhGS9ADCrHkV84iYx3u673FP7ENmBAPujmoxyqCsYhLQcMNUyK54BK6XwW5vX9RPmJLT5vCL7kMBr",
  "key16": "486mVvugxYeySPLKMjSEpFhspouUmP2AsrgwXXZoPQ21DguFvJF6sSLJ3dSnDnrn15opcZHbdQRrLamKPzysPtR6",
  "key17": "4jRETUGoEjUjopxcbuJBzsVa98k37GistHKZY8u53KHBqMcF2FuE8T2YYV3ah9i32Jxhdn1S6HqAUfG2xP3Rcv4w",
  "key18": "4zrWFEiNFQUM6sJuy33duXq55aNemgahzEFxeygBYT5fdYMB4GLqfZorvqCHRBGArtC8StbgSMuYvqUkmuz44SEj",
  "key19": "2MMjyA263Evri7NMktLzwZCjTubabiu9V372ddE7BuNm6VqnxZKpyWqwpp8D31PGgFYQruhZ91qwiJKsKGof1fR7",
  "key20": "2hLhhpFSPrsuCchREuuX1pBJjUfSnQuVWNjhySgG797DsakuAPoB5j47KupJ1N7w9sSCTv8UcrvG2LaskKNsaf1h",
  "key21": "T8xo2XqFFEpGfZWeXXH1mUUTFJahphfp2GzRiyxQ2C2V7viie4Pb117RkkffeYqHKWaSUf8fnCvrZHttEQKpaWy",
  "key22": "53wAHFAXchiquv8Ug7MYmw4tUdGgG2UQpxxB8Rvy7KbQUfmCfSLTFm8EaEWxYhbuuRfz4g76xsRhvYyXSrs4gZEA",
  "key23": "QHSKwDAvkRFKHKuMnZWT9jV2K9Zuz3iUNkX3w6h3YFXMKzai3dvqRQ7cSm9mv224AmePYVLuwhRPnubXds2yWAM",
  "key24": "7w5hXqXPii3nxD9JnpyDtPrafnDmScVQhHPHE152x7Gsm5bwsUnyUX9DPZcqLT3wfoyD5FtrMy4AJQnJpGM5Nz6",
  "key25": "3oDvWG2hnemds2koTr4yWeHaswaEYs2t6E6aPohMju4JfGqx7EhU8HSpf8h6Hsw48LTPP8rTyGkii1GoRVpuib5b",
  "key26": "3LdEVQkt53ooG3iXiUe2CmyrvGbTjizdKLqBcrgsz4t59FKeQYtLv8B2m4iEXRbBxC1vvR4fWj2W4ArDjsJLACCa",
  "key27": "4qeduajj2ED4kNPWyRFHiwAZ3SZKqgataSYYB3bGnsDAd9JJimrU55PNAjKrxQbU1ch7uvnwFxtTy1Zjvo5M2gz6",
  "key28": "5qoQK1BXWrGSHCgum6cEPdoUdp5a7TwcHYyvECJjw8UkY4kaWFAt1G8d6xeprdnTUFEDJ43bpbQNKhEJ1EQnqefP",
  "key29": "43uCUECaVnVHipeo3C3wayKjhgYpXxfgPmuLMz6Fvc49cv99jmVJQXVTujB1z9ZRhCMNpmTXZXbimyDa3g6zADni",
  "key30": "5dXS6uS77zUjZRdDmjFRZKbMEBV4KuuC8j7By6Lo2EwcAFZkeM2SMyNG6zSLzCRgmDRYMJ37zJPe88YWGivfhyhm",
  "key31": "2mvSwewkxhEXjRReZnAgc4Lg9Ems7dLZ3PKbUGJnTpdygyBxCdvPjFfAtreQ9xrwFbbgKrugmZFieChVjSBdmmj3",
  "key32": "21GDPRLmrKzqBdVNnWb3yum9dPML7Xuzubp9TiD8u5UwHq1eDZjzVRCpLs93uAYx58EQtkqwtDo2VzPgP85ZjyHA",
  "key33": "njSYbwEYMtCkkt7CSouQsMz6vtPoCn8uCfenaUAr94WMv7XcCZvCLJ8CDsvPd2sNPA9XZSKddLYJBzSpL4sNaCQ",
  "key34": "2DjfzpDTrkkJVTpKNf5YFh2ccQ6Tx5qPBnSwXCsJufWgA1UngRdjw4JqsatjTUBpu214kbpsYXvzdYsxbouTMnaD",
  "key35": "3qpYu6diLHrJHnVzSurCCCTyKhTmNHXksuNhhVvpneVFaDQkmyQRhYCNW2F2v4iQbaBp6gP4uzUXDCxit3E4LUGD",
  "key36": "4wwty9vcEK8dTyMFFeyWBvFKjAGGehJbywePodS66U5ubPMbfa8CHkd81ecZ8gFTVWmVmdA4mhoi3LXL7Ri8z7Ka",
  "key37": "56EZEzbbmEspgD82dXy9aqmXya8DFFYEUgK3HWVE4EH6iC5WzYoHFeT7eW4xR4FK9a38V45wKw4DkJwkJYkiKwGi",
  "key38": "4UJQ7yS4nQ6wQXj3CnkHRXvW99Fc9YrBEPgXV6WvXrpwHTDGW5VPbaCgZzzV6eHmmvg8xTcgM9fPW2wPWMzhuMto",
  "key39": "2oeupGzai5jggZpTZmcmwSu6DjBJYVR9oMd3EBxHvNX3g6VtjUqoUmutvW7a7YEyzDTNqTvWJyXdwuCP1in9wHyJ",
  "key40": "3hYYiEn5X6DKAfyz18GKkjJ91N8LA3yFAhsCnyxSLTHgZLoJwDszU9zrjbdb58aEiAMfUFzEhCWhUcVd8o4XFiYe",
  "key41": "7YpgBkMxCfDmefYdhrfFb36sKDhpyemsCYsUu3RoxcFLDJCMRyssopFrdHV4ZwLLwurGc6LPmfiX3wXVgZpV6N8"
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
