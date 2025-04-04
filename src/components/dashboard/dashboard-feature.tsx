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
    "2Ni7dhy3wqRJ1J54MZiqAuShsVDo7aSmibgXhoTrpTMLJXc9UHmp2nP5NZQgVPMHZqjjsvi8QcDQXJZxUbG7H4MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Te1Z1KDWaSUSAVpWoVvNG9wyVSsJuzczRrTikWpDGgrdcSNYuGgMpDE5hzBQ13PifUoYZoR3f9BdjVdDGiFao7h",
  "key1": "PxEMWKsXWQ12ZULB6KX93XThUbjswcFgqGHW3vwnMotdpGsdFmRnSGAk1EPzsZhiKUo7qrXFXwECco4QG3jzw6a",
  "key2": "2y4B4WhBuuUM8DUamyFeKYHkoWfY4eTmjQjoC1nWVWSgfaVtzBSEha1XcgdNMddCwLacRczQTHpe7GaWFGULRM2f",
  "key3": "4CgRpJhanasvMXNANLEYwfouTWzySM2tNJZcPPrLMP25c2H5LzF8cCmCwb3XoUGdqgrF9pepbp6tC69YQVy8KBki",
  "key4": "41dvLwx2UzSw6HbWcwsk5EUmQvmqABsJwdT2tTWugWMpV4uKeupXUyB4W4vZ42sbNB172qAWX6FPSBoHXHXM43qX",
  "key5": "5M96oapouARZnrjj8g9RfxRaw1V7nRH6nSugGxpnyAqFBrVZswqcFV1yo93eVKQub8abRR6GC6UyFwXVnLQF54T5",
  "key6": "26Fmu4mx6vngTWyfVy7Affm1nj8rsimXGQZdfP6N7r99PgcCZXar1XJXU4W4GoRBEMF3SLuRzxwyNFCEDFUQ23PP",
  "key7": "5wC4CrCkvpDM8XZBzP4f5iZq6o5QAeobZsrVVRc59Pce54Y4WviNi6TiqqLsWXe2iYiYB4D5VbXMcpE6UCYTMqNd",
  "key8": "2o5hK2wkb9NnkANtkAFzrCYu4RPRc6Ms76X7v1zWUt1jiu7sJLxZbwLRHgMgqPwSvCxxXWDem73uSJDeawaHbe9e",
  "key9": "4iayx5j46kEfQsUNgJvdg4BVWc5KcgYRF9FD3uVjSXUvqyDJULtTAdtByKJeQQUSJ6LHTxR72apvfHacnSgw1d2R",
  "key10": "3XBFQurE9kxXr29JDryUNkgBadvjRRm6jGGbA2wudeSpjgcaQHdxHnrCd9zpchhSJaeFabwoDZbRLibAG6HpazD6",
  "key11": "ti1LiPysmQnFL5P1Ssey4KgSCN3bsM9NhR9UXYK9WfVBKQFzcs2rTx8932YLXQDNm71k8KnKbXdz3yz8MYahijx",
  "key12": "3A6ccf7zCqGTqgFfFsvJukLbvqtRFsFmAJeLoCdW8sQ22V6XFw8QUDdrc5mdNKhvHUMhaVtRjEg5qzun1BxEuyL8",
  "key13": "5h7djM36o2cZUVp3dKzS4DcQQWozHyer3TfVToFLrU8rCpN7gs2nBpRSEi949MaBb7nQHKjaPA9pj1B41eirDjBR",
  "key14": "bAfucoUp3sX5dPqHMj1vGvZZzcjbps1ShwFeEbb5Hq8ip59wKRRGfX22gVNoutMXTzrTgPaCrQ3iVCp5BEshYPy",
  "key15": "NRjhHcD8UnfykJpKQP91w3YfVB5iynf4mk68JhKw3MAzdpQbUnJX9SQSUP4aeR7pn3G4mjjTNyypakFxTzaPdfP",
  "key16": "2CCsSB7A77pnAzgRbrshiw9jsMysxs5SDvkDFsYKz44kYTBkYhWsT2mpRHRW5LVWg8sjYkEwg4wY3a9CxkBDthCX",
  "key17": "51MRxqVQB18rCKHog4q9iNjVwpnQBVE5xByPanTGfX25LehHpvhCZrMPKgwGUzTN8C8zFNwysC2rAwYuVDK2dVgM",
  "key18": "2nrNvZ3xPWjow9T1rJFXYpy7eaDnveassHmobebmjRBDb6dEDEzCfRsBrQtX4dq8wpNjRMV85Du4mZT6LiEH1zuM",
  "key19": "2Qrg4EXWFo5WDRnE6RWCXVWevuCPt3CDR972g5VzwGrHxZT3D8L3gXuUvKbNrY24CQifbqpT7AKHS3Jm1uJgZagV",
  "key20": "U68X3qmjH3WuhHC5q8pxVeTJsKeUYTF8pniejtBJ59nTcfMKB9gF2WSufMUpKJY9PLfFo39fpt7DrfoSzmoXS2D",
  "key21": "4rM5Jxmk9gyFK6CGvy68JteaLTBS9Fh1SKT7vSJdExgQx4X3V4cPMT3q7D6yDBSyW17LwC4c6YzyqeH4NMS9DUha",
  "key22": "4uxReTGMj6ZC3w1hu9uc1ZmmhhqYQ3skDaR5sTvego1ttqdPaMYJnkfU37Mj5FzC1qZ9FrzH7qjY98XLcvqFg9qF",
  "key23": "22iK2FfRuzrhMSP26umWUbry5zBGzW6Us9xXvYPC3N3e3yDc7r6wPweXuV9Po7RsPAj8Fbe1Yfx87TEYJVCDYcyE",
  "key24": "Y8AFkpLD7Y21sYpi5Qsf2sspWe6rBtyXNFvE1ijS9puNpuZ76s9JpLYsD4smMLecP7pQ4uEu2114hk6RoeTA9Dy",
  "key25": "3CWrFYrqMMEKEcgzS1w5cTpLL3N7fbUvpvgAcm1Rr5BnA8yzSRdezLcavEv9cE5H4kWEGDNJSHt28mvng2g9X1X4",
  "key26": "3eUra3qHLjbK4B57Fm9juSN2q9UE9nv9ZmPtgqWWC2UvNnnzwyzSGumo71dqTFzNYsnCWvQ2LT21trQjqkfAmNcC",
  "key27": "4iDFx1B7hVvakSz4c6wBGS64EhN1sgnoxboEbBFKM3aDRMV7gEXqmR1f9gfTVkMBFfz8SoWwkSiNBkQMLxXa55qZ",
  "key28": "5WEhSqH3R6pri5Y1cCPPRTRvLWp1fSJnk7eqGQpmekEx3ZiecEjmfR2hZQJas9kmszjv8sqCSBtJe1am4BPua2cp",
  "key29": "4qQXEcuwFeop9zvgW4Rg9kE2HdXFPGksaRxAb6uoqWri274BhyapRjbAqyQkTqGUUQbhAcoqWwPKrv1ohYA4X4JK",
  "key30": "9JawEaPD79cCbMbQmKRew3C3vxfpuabj5Cs81uTbeRbSwLMoiEAdwgM4A9TRm5Jwcf8SaabTxmSph42GyZ9fhhz",
  "key31": "2yJvQRzkRRAYooZU4G7GDjqsPEhFJPm7jFjbB4kYx8H4cicGNHePQpTYLVFTEVumNg8TMkRdusaAXkBUUfVde8Ed",
  "key32": "3SRh4U6bWmowGLrGyffWoBdXiVGpZz7snWjF2SpWLt17y1aqZNW6BksyMKPmrqx2NG2aiy8bHUW1oHpv1o5LhGqe",
  "key33": "wDFjKcX8UAwQEtxG8xwZPukfPea9aeZviQR1h5mZMtvCdWK2bytTcf8tzXmXbCSkup8zHm1fLFmN2M16mmxTmiu"
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
