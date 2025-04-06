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
    "4Fw6mjiBNbiboiXBiJj3L4kGvdMs3cLmsFKPBDZw4B8zWeKkMs9WZJCKVJQybWm2Q46o68Vf731NJrNYvNyWVMcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZr3XEYHgTAeDafK4caHdff6q4qP5mobbHU4QdPcPYPJrbW18oheXeEemM7EPsXCJjib9F8rn5ugD9UmnhHV5rc",
  "key1": "4QnT2Vy3N1oi6c86LSJSMcbpKJGmfJwxUFh6LQHCYDNiF7s7WV3eSao2H5FDBxDfnMRJXfBppqGSjsAYZqnoqeBe",
  "key2": "3K5pzBoDwGZRGpLyYCujKfj9BReFhYBkeE6jX1H2HRbvHEr87Um5ZaK4RD8NmRkJmADiN6fDxLxU8sXaSet2zRMz",
  "key3": "4ZDKTgf384sG4SQWxvR4UeencTipuhao3fbEq66vS8ruoWvac3razBQRuyEZELwG9rrXnwCw5Q5syxuB4UBJAjZf",
  "key4": "5TnA2aQkyNUm7DKyK1T32odrMYZP1Wz2gW75cZF9Jp1WFMUWCNdtQt3pknq5jE7WRdEfbHXvg1Cnrsq9bT4nSPt3",
  "key5": "2jZoCMDPVvZiHWPrLscS53oyv3QK3oQ8EVXJTpkTDEnCbJNYEV2HSPJeV9zV1My36U3Y9YdvNZ7aVrjjydUv4GLP",
  "key6": "KscGpgjVH5snLiA1KK8UdhPoon97DXCmxDWydGoEiTojm8cgvitguNBMyRwNnmqpku9owVDdosUbD4Q3GjZjEYH",
  "key7": "4DBbjSdqZAaBsEMYav2WBqA4PzmqD41GZm6Q38vgqYF7z7XQ8H4SbzvDv2PnwYvPuazSoHv1ofoDvhVkyC8er9t1",
  "key8": "5Z83CAAhKNvdFz8MabKxxtjFkKcF3LdTqFUkATKkR94XHMpnUcyck5FAkKmr5gokA1GGAXm9cmNAQmu2NaSGzPa1",
  "key9": "3cuHbqtn6a7fWGMse4h7z6h81FiGjcyB6gz7mNopqdeHNU6EYUTobaUHTAdwfwLMjrZ3qjBTxx34B8uxk9JR4hoS",
  "key10": "5HSi1R5PcbHhHn5s7u2eqQcfAjfpwPDAVfZgVE9NhHFbxrTfrBWvh4z591VgCQHxGskLYsvFpCmrbvvC1tsbCqRL",
  "key11": "dQY3ck28etp2HZoyfPxbK5HR2SP88oaPNRHs34SzhCmuKftH6sJ8jRsb4fLZSew9zQbDv43LY8FHra8Qa9onJ2Z",
  "key12": "2KiZTEgrMCQrK8NraMLYPq48yiwmk3veLzYoR3YTG793s4Hh7m8EoSm261aeHJHLnsvcooQ98MNum2Bu7TZgja4N",
  "key13": "4245rubmguod1PxNQricqdvxkGR2DRa5y6X3fq2BVuVXTDDygjDhFwpA4K7aLZMZMUgMPf68U91GKFoWuTxgE9RB",
  "key14": "547QZnxt3Dm5Hh4612UyqwsxthJPxGiycafps72ZwrWLCQ1Wm928d7va81YcnipU4uZMXwn8ArfBmux67sGViTWo",
  "key15": "4fCkuh2TEm7QdLyZx9toPZfafagYj3yLErjHm8BbXdvipgnwQJg5dKJES3PARdgidTAkj4AJULXwFMYkkjx8apVE",
  "key16": "pH3VeGTEEob38EB4v5oZFgVG5gDpQYcuCJExGLEWvq2ogdpw8pyokFUoaQHwAPArqd17SnzVgL2VCVfXUA1HHwU",
  "key17": "5rAwPgUsEJCSEEiNjxgm5FBNYK2UWbrVpg83rpiG3kqWq9R2esJh1BJz1dHq4714NuU7zeazZpdz2CNe4svNVN3b",
  "key18": "653sXMmMWdCh22FKgttE1y9iGsZXNy5yojVsLKJ7ES3GME3xvhZSpznF49Nv4RdPYeLaj4vJ2VAEUcWvV6Ji7J2t",
  "key19": "5kZ8qnErxKuFsFSsBVnUfwKe3kn62PYaBeDznndMSPbXCYmd5dq716jrTCSw2WCnwpTK19a6kGJDKMy84jMMLDSV",
  "key20": "2ijjkx27LwzAKAD48om5p8zw1W8MU8azyicg69oqpFNsvPa7DTDnaggvZ6DGY2fkDxSwh3dBgM1QjAHxu3XP1LUn",
  "key21": "2duKpxNUccoCS6mUsYYtPrHAb81o9KHMHB1Vj4PV9D969F1J77MXQFmWwzZrJNqBKaTaxRAGME4q25TaJpunCzWU",
  "key22": "2sgYRb4Q4TFzPpxxvHM97xw23HEtugF3qwe19yKu92m99VRMN6LzXXzrA6ZZ8uVmTkKekE26KQ4uFeJYvZXb5GVz",
  "key23": "44rUWuZ1TExHw4jvC6me8p3HH3wMnoFpCCjhn11iarBtFjESwJKUWgu1WGVdMe21o4tW6TLm4tivnUC9nQ5Vc8Em",
  "key24": "5STikbCNnTEXviQsL3Z9PtvtarTLmn4w3faUKhFxAdyQxB73x884U889Jv434fQ4CjswuHv1akqgW5nmj6RnN6vY",
  "key25": "k3YKQPFqRoBcvmh1FYSZZ4N3FxBBRYnSZoxfxnBsjRvbXktjwwAsmApEcoRQywtEkHkjvy9fNiXTcApQa165x5z",
  "key26": "53zPtHGasHdPcfoLwTzY9NKgB2doz9pCwyhFdcYc9mC4bDaDzGxRyWKFDweAGzvUtWeDYSTxRm8Uecfpsfuzwatz",
  "key27": "2b6hYvyoNGiwvFYdmJv2B1HVfFxvEPrTfWWFEPWMsEhnRXEwfiZ9AK7vUKYrGcDkEqyroqPLup8nZkpxcnPqpfPc",
  "key28": "3GUdogMcQFXiPWiVwgbWKhsvYwwPppydXE46CJada4bD4yHe3d2orS7qbKC2zfUFXzyPcUDyhGZtgC11RLB9VEXZ",
  "key29": "6Xo9hVtqgFkWWLVfqiGiQedCwPS62ehRnmoqegjbQLfmMAHBPG3D23XeTArQHPEmL91Z8qv9Z4J4SBX9Z9P8zzr",
  "key30": "hVw3dCPSE5V6AtekXLG9v51J8c9ynEaripDijH2SW6q92WsHzepppwLaP1AyDqm5sdi4upZFn4cL65WQfWmJBRX",
  "key31": "ZvZ4oG6sT7tj22d4VGqsc3FYRiS8JvwpMyvo9DFqC2swgNy64vPpY4ykHsuaVauz8aKuaASdt4Gycg5iT7j1ZK9",
  "key32": "4J5yre7m6rUWxQu1fXGCQAt4hHGqkxFHqUg45BukRNeczKip5YBmTvYoktNXP9FmUX5k29gTEYP9saPPHqZxoeVq",
  "key33": "578LxSnpv4htTcY5bLbVXcThu98oGcVWS7NSEs6aGaFmWLiLiau6NqLa1PxhhSh9hZwBRVvE1HhfwP6W4FxFFHLg",
  "key34": "2jf8UT14njNbaBrKG1AT4KPZM8zpsgjcEgTywLPnY9LptKLaFCY1DATZXWKX1nEft6qKRhewDn1PZw5efkDghPVW",
  "key35": "5y9P2UjdvdruQdLt7hMmfQupeDxSfmNnjbahXZSD39fPqecZ85MfBU7fCEh525TL6A4iNQ3dWzVaDf6Ba3GxRYFR",
  "key36": "rqPx1Ze78uH9ioGrfJiTgKKfB84A1FV4Z6z298vvUVkfzjD4WgsXuRH4bEXEoWVqhzJPnDFKS9p9t6qgEK9t7DJ",
  "key37": "P5tK2BLe2LQQ1yWihBYyewrk4sxK43NV8QJivreAZPsVBpiGHNpnLL595qG4SKd5WyyYoNaZ4d36EAkDWZRtiyb",
  "key38": "2hw9HbqPDtokf5HkomEsHLMcdK3Qug9HzxVjWyNhZVciA78mWUFJd4mS6XtP7PEzUarwvhm9vBdTAWgUbpTUaXyk",
  "key39": "4mg4mTvnyHz1mFes5LKvkQF7MvK7Q572Rp7pzP8Q8N12XzVCKJWYq9JcnqgWaVwuyeXhazA4KhvymWrgQJt1Xwmp",
  "key40": "57jWpt2ykmaVQZ5b8qSNeGxTZQQePNWfPU6sKJ1rfnm9dj2JDkSdcxCE2GkSwdgMFMSWUR6kKHbcxTiWyBmRb4PT"
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
