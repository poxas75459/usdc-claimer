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
    "5BZwbgtPbtUuUrrVDXpYuH8ppWk8jdgMcBUCxYaM54MED2wUndZCLEYYpLqEBvcm5rDBQKJWXPtGPCci6cNgxNF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SiGXSD4n5EavnUj8J8e9JjJFatbX84v8QivFgLpRrMhR5QsGnCADiVpr6Bq9PbSVn8SM6qrxkcNfszF3ZjPYdmG",
  "key1": "2HGN7PERYDrEBTrV1YQyR7evPpCgUoM4U3p5yCweeAGLwsVXpYh5iQpFPCxGVHWqA3yjyjSdMP7udNvQQKJJ6EXX",
  "key2": "5rpNhfBLingdW4kc489AgBDgxyhayyfypinNnDQ9XkPWgEv9mvgNiKafYmkRcypHBSEoca16L4KhnG3rCzTFSfct",
  "key3": "34hasmwCAJyBzpR3CE17HhGXy8QESrh5eyuC4gSGJooSw6ytN6b721m1bGksubPSNFVziwtYYr2m1yC97bDC5sKj",
  "key4": "5KrGnfdXBCHfhzeDhNw4dNWt2qgQbVVbuMze1Wj7zojsz1ZGppLR4jQXfMNaK6FfjN9Feg7siFiFSo2wzZ8UhWTv",
  "key5": "5pbyuvA3j2vuvdc8CpLhoVGYvJ1jLR4NKMNLveEBz2z2Z5GQR9BB7UyKErMCWJwSr2nztXUxKAtTXYS34HsW1cnb",
  "key6": "4DNgz2HeroV1eofrmABbSpwEk9ihbLxRUbB5uFbAac8Kxk4H8DAWMozuW5wAJpk1mvzQL6io7shXbkMdbsvHuQig",
  "key7": "3GsxEbKq55MFu11RdNiTCpbEdHDjKLxGGxVfKCYqcmSc7zXgdAYkGNErumefMpMq8eD2Yp7o5pnSkY5yQnBFzAFv",
  "key8": "vGHfN69ztKYJHACcKikvY6SS7b6eMFxePTmAuxut5PhkTD3cMkjD51sqia6uvH5Wm2cuCHNDYX6DeFo7bqStEBX",
  "key9": "kqq4HDsYAPwJMSk9JiT3A1GPTesYEH8N7GpR78dYPENLgqCgqnXZZuSdbzhieCVhdsz8unQrYcEkhrVYfNgUmGo",
  "key10": "nbCbqyyVxuVegaPaaTiNPcKxTDQUk9SS9RXTmmf4g4ifc3ruNWeMETkoc6EwuFaCHdfUWai9u8jyPuqWLQknzfX",
  "key11": "3qMeEDEw8dTSTLCEv8jWxjPdMkQkXk1HgvvNdENqaaSJQ1xc45mJSFyR1HZapLwjJSRFPGV8RcwwWHCiWS5HorPc",
  "key12": "44Ymm7hUvxj6jWuuThjBawgJjKCbjSeBEnQmf4V4a3NNmDuaSvteZ7USddqPYuFYMfNdg71k3jiAfsJ3LVXQkVQp",
  "key13": "3K2CsaBh1mq5Kj74BG5Ekj7o6Roh9poXEftycqdbkNU14oDcoYgDtybUjDfQiBWKyURy4LJ9deoLF2hcTVhpurY9",
  "key14": "xwbfNPaJozWFbJkRqQo9xyxJsr8iWjUPDWUEJeiAXKLRE1rKgs2nsZ4DGDvpRdCNtWQrHQgviTAUYZtVJjooksG",
  "key15": "yVUwNA1ojbxfMhtPXWCXCUUpNJmT7QXBfSVZvUiY3wc9mVSeMyaREWEE4XcWhVR3tJtPaF2bVAXxszDNrc7sqcH",
  "key16": "LiZLPN2ZD7xPVtkxRTC9kjDyvXxQ4t38okMsUBbTVbPzV4FHkyLEacA4wcvwm9x1ctSZ3GwCWRpSbtjtZqfuTPJ",
  "key17": "3wYBrHBS5WD4JjMftRxBZRfVxNpnpzcqieaX1kjpe77oBiAMryiSK2GWTZ82Hgz41ZmJezFaTheyjW4B7vcTNAbx",
  "key18": "5S5s4kKrETpGi3Y3mXXPcBqvXkC5njJX2SeFeMxoUVThQYQPP5JUWkVjat57nveot9uGqt38n55kimKM2ZiQ6msj",
  "key19": "5vwvVrVB8rpHrcY4JmnSAw2d5g5276C2XsW6SZ7yxuXvuiEMjE5eAudGb3NwGDw27sqi56RAnate22t1eBMLxTwD",
  "key20": "rWU9pQ4tRX3yUGH8HgWXp8i5NG78nsDzzBVqqgEu3qbpoWxa9XdtBzrz5iqyU38Rymj6X2N5fp47UMEDLbtVab1",
  "key21": "44XbFSetmZKvpBeepCqZVpA27A6apQhU6KqmTKQjfB9Y6WEJmzP7omut9Tcn6YDk2fVGPNZtKUMV1EJZuuAqTxjM",
  "key22": "2PW2hmMdzByX531qDxy2DuGPcEWUyHeQRJDka2DiNUmS3NfpKx7xwbRfooKhujFymmCtuiP2jDRx3t6gswFAB6Ku",
  "key23": "5b2XResCZ8QLzyGYkd45pMDvtmw7XQUn1kthrFdivVjNkXZSeokQhuysFqRytjEzGbBykYpjTcgwGgqE94whYzXv",
  "key24": "3xCjTezaUWD55RJzaMJdNRHPny8zdCfkdbLopx4ww1yi94yZYQwU8SyVkqsQ5yzw61MMyCtA6wdA2RnPJmxUrYeP",
  "key25": "4RwU4vGHB9UAo4ggMyuMX729EUNCxA3uUR8e7J9Gzgb196kD8zqAso4nydMkhXfbZ7W9TjENa9RpCisMSgNj1GZx",
  "key26": "5ovfkVQY4aTxXGHjehhaEJMdNQ5CbnY4Ga9ttFEqGdaPjVyR2z7f6G4aWUZHA5nKMCB5yrwUe4cQ6wgX6stTbGPK",
  "key27": "4XCKpYYDFwa1RCvfjCDXUsiWAvpziehP1jsBXhMCaLWW3dQQXSaKU1S5cp1jEMoeSiocRkuVMTaktsCjLoEDoHUz"
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
