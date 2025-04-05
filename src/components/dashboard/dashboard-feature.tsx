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
    "4M8RqqD522y86UaT64hukdUj16HgvEsM1Ro7uQZZwf5uuEFXDmY8moMu3quS7g77MJWwcyCKJeymPTUCHcF47VLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joAK3rRy1tc5TRWGHgBbrKvMyLM6Y7PFPcGiMBNFSZodQb5H36HcX4GquczuimipgsyDVr9W11ADiGQrFszzQ4Y",
  "key1": "3FEcDayWkPrFGHSJyKruQWYyA7eSnzwL75iNmDWzdxGhRe3R2M5LMuad5VBEDLhGRUp2B8tfGp3o8CDKh73YtL7C",
  "key2": "3PbdrPoiQwzi1apTm59wH2py5sRTWaMga3FiEjP4CnhETv8JcDL1B3SxDXgCpQontoV3ARxHhMD6pekibfhg613A",
  "key3": "4PTWPtx2RgtcRrgxYUmy2kWqEfDrnCH2tF5aNC8fWBXimFNYh3aKFoTfrNaRXPswFE2BynEqicoCtcVozS39NF4q",
  "key4": "5DvvSbHcMUN4uJHkxzepUntLXRSjwQi1zpqzcABFPc8ApmnTtsd58AD4axf4CsVBGYYdjgu1m14FHqW21seVscxt",
  "key5": "USZQ7uN1ei56xwtWYUFbiDZ3GigdYNSD3jnYJCAZWxhJEnB3Jsnmcmaen7fPC9PxqkonUv3oZF8dh4fRPPQPa9V",
  "key6": "j7tV9sFniRJK69VhN4E29zXPVbQ56DPcSwt96npnTKbbTWQwmBaxW2E3pnCGzcHPMHqkynd9hByZ6xLXWbYP4Yy",
  "key7": "dQxQdzVBQw2rn7dKiZvdW5Cgw4c5XmDWL5Fxoq3CT64syySkE2bJR2sL31RCS8sdwrMT68tUvWjsX1iiN2u83Ls",
  "key8": "kmUmSBNnv1KT2r5QwNUjqU6F8x7UFwPcepfBccFU2oWYbrgsQK7LZumRhHrbX5Fubr7GFjQKdtXWdEde4svWFhm",
  "key9": "3cKaghr79WX2SmbSSx7M6X9oPJGKuWKDucbcuhvnEGTfiQ4G63VFoW9J8ZPQiHLuXmtxhYZmqRVVsfor5WdQUCF9",
  "key10": "cyYHnycYkiWmGMdJTGqXtE6f9aNa6d6uKJsbhz1bHXEKu76eyUympCyoDcfvWy1e3X282csprky7Y4KhkowZLde",
  "key11": "47CDGiSpfR5x8sLk7dFxuGvNHuxEgDtL35Bjbwg6RhWtCusLSJXpLGJynyrFXJwzHVD9Pb7L76GtsHUGbtLRjv3S",
  "key12": "2ygD7VD4A4T73DV2JrnHJ4dTmRxJ9RW56PYZwHpV1sxAAgwgixJ4Rs3jK78xY4AoTHnFXuy1sgRkymHo45TiACC",
  "key13": "54o8CrxirvxviinngnyXDx5qfM2Rs1pvUN6vEfrr868shG6C8GLujF6AxEn8RWBkkXs7N3noViXC3XnK5La2vB3n",
  "key14": "2FY2U6TbuWPCcwm2v8edMV76F5KzWJvnsyHd2pHtmHu7641AezigdqEwj9kTAt1KAuv74jpy1SaUozKogExBby5B",
  "key15": "5G8jw46ZQfQjKHP71wn17oVXvH87ccdXayFrALHHUYFVf7jyh4Y2m2WF5ag61XBfMR5K3adMWEsvrXa6HBjad1TY",
  "key16": "4yMc4WX298Ff1Co2scxGZkkCDCU9ov7aAjSJUXLNUensZ56hUpJ18ohzhjDgYMKmWmF9sHXSzWAaLEngg1dpSx5E",
  "key17": "3or9HEt5hWV89VJqnQkrwZyWRsbd2Ck24XDXGf72QXuzo5PJyNfrSh7V3BQv9QCfEp6aVysMpvJ7Lv7CsYFa3Ayk",
  "key18": "5bFhtSrrVrLrK2uPk7b3YBUy1buqMG77fkAg56nm68ZFg9HmG7NTtjXXoBnQmcYRZSW9A7ZFgmAXxBfCn5X7mf6k",
  "key19": "4J62kWQH6JpfvNZvHfFxfJgBc7Dd4obXgMrFed2UvXyUpHGcfYw6Wi37oPBcNj1ARCwRVu8rXyKys6f4GXWY6ssU",
  "key20": "4X4H47ZYTF8zcv6bzmbh4MDr8igd1LeW3Jdg2qNvYFsp5fTVbNMNgybtDsdz8XRUzAsYzawYQbW775fGr1r3fs8H",
  "key21": "2EehbU3qB7r7MkvushChU5NRyApWxbW7WfhgMmmADkVJ2D22v6zHys7Hb1TGPUcmMUDD5zhDNZ4AvHFyyDNstJwh",
  "key22": "3uxbirp74K725kiotztJ2TXuRbxkct4cSevCKVCWC8C18gWdkYkEKK2ZmDPupfBw3eWJBCCFZ49Hq8mGGFPz48o",
  "key23": "xsbutAuiziJue9VPr7U6tu9NbZcWaC6ETeo5RDBmus9cXu5bA26FuFj3XzjV7JbtTVktbrTpWP4xGUYsi95gejP",
  "key24": "4dpnMeWATFT2kDVHBvBMgs2GvpTd5TEAAgy3GXPFg19EGCbCUeKsL81CJbH7U2m555Ry5ckm6xvcYi3juR1Fschi",
  "key25": "3GKnnJ9sDyFia2tRSqRHFcH3FLDxTaZDJmyRcbLkp9ZWmdTQPa33KJSEd7tKBj4yGXHoLxLf5rENHtVYZQFPbqNV",
  "key26": "39hPXLYF3ECdpQnq9jPpmX2pei6pR6WpPQ4iuVAtf5vL1VuYG1chbqVLzzJAXyxMZfX8uU436Mg6ZDQmDmfyVpRN",
  "key27": "41JRq4pk9NKqGqKa1SL6W2Dcm6sHff7kEvfvwLgMeRVDaByPCNLVq2NGdif7D5ZrTPLN8H8QgFMyHQ5vHh3yAKi5",
  "key28": "3ne5EVp6yds5V2EJpRWYRyv1DwFdGcPVyCSE92D4ws92BBKt2QEFnqDLtXwZfP8DkWJcge8dhALUKxedzPva2ys8",
  "key29": "5tjMeXbxznyEMVG8yxaYZ46cNyQrSgCyu9uFa7S71Uj9hrF9vi838ZgQF71EqYMvx6gi4Jnqd1qgxdvZosFrMVAH",
  "key30": "56SaiS2qeUHKKminYRVYYuZ4yPdRtRCJQRgta8RyY3F6pFue2qi8DVwhoP3gPiZAnF3SRRGvXVcxRbeicgEfXwXj",
  "key31": "3NkAAMZ4GDkbFbkrJLMy93BsSvoeSnLHeQ4aQ8J61KcR2iqaUZs27ZQqCm966whaHvULTW1qhP6hsYdJ6q6jTEYc"
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
