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
    "5xWTQQr1U9TLU15ssyrKdeqt8j8QMwBfkgdR7xEyiPBGpL2LYMgJWz3RY9bvRtXWN68edPfCmWZvw21SmNU1ZSgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LwMeJ7zFE926zcJ7B7qJUWm3PGGJh7xa2uxkGvotSbeNF5eYyx7pnc9TQbVroPYVmpefH36HmfzokHqWwi15SE",
  "key1": "42hu9mW1XkH9EFY4EsfSsjKPYzErmm3CHhERdz4ToEGbiQXJvyUVnsGvwWLWcEDiNjx8qMJSmSpUr7fVJvMqTrCt",
  "key2": "JjuEqDGQWxZcSU2REBiX66x4NyYR3ghvKvGsEhWBmZvcCnw9p9L96iZUqBWZ6PeBz3DfPQTdXYySbaUjV2TDeeg",
  "key3": "2BVQzJ2tjcdQYaRe5YdHGNmirLo77iFL15iMxfj9UhpTE4yWTzcR5faSyvZAgokdVuJMyZxTxyfk4xfuUpP8AseE",
  "key4": "3HBs1wG2yyHzHESCp24k1wvyPbXsEGEsfuux1vKBzFF9YQCvzaSwPsPMUBasC8U54jQrxjgAnbbsTr7UACivrkg1",
  "key5": "3nxNG14UFTb5yeawkthipWdD68p2xAkDWbiXqi246UjghERNBKJjMKr5xw1LpqKZmQniczU79i1KtAaaeQB3d6Ut",
  "key6": "563pfAiELF371yvkYfvTaCGVivLxdRyrefmaZDmdpu9NedS3QtdWoSvY5xmqRswUrZpXWgGm4gNcMJca965SRxeP",
  "key7": "2S8vNBgXv2VgPiof6caZ4wt58qz9KDSqnpLWjVvg3hBwp6JU1aCLVpe6AVSxi2sqvkgByn6zbzL63YtuZQnXhZQW",
  "key8": "3oS2k7W44Fsu2D2ZT6mEV12P16XDKFW7GVqjJN4GVGHW41hF89NAjyaesRyKxykMTRUK3dRToNZKGzmVPcyazoTY",
  "key9": "2wrmuLHs8i5s3iaBbYpqv7SCsFvPcqcK7b7o6no3e82BFvcW4yuvJj6mYse9g4ciS4zVNr1Rh8zkwni9Yporh2nS",
  "key10": "3nQwfFVnpQWQJFxpVWQ9AEHaLjYKSSwWTDdrYDkWsreYfzLV4WxDuKVcL11qANpFiLAqGhVyUMr1qUWBYeQwCi4n",
  "key11": "2aBtA2v3AToyQSgyABKxf1YFbeVJ7hne1Ew6h6HnweiycFhE8MJmREmeFMDdkBL7PRN6gm44ri2jCkXySmemg1oN",
  "key12": "fGi1Pmf2TKe2dhtSvQneTSuF2uobhh9pcR7ebCVwjjr9g4u9p7xpgLRfUcU9jyWGCXYguZZHoZ4VhfZmZtSMtBK",
  "key13": "j3wTGhUoZ1Z7EMjVMZ7632HVEBx9x8EECZ5uy3L8xNp6Ezb9bxgisNcRGto9NRA9F3DdTSQGQehqRrrDzdNihih",
  "key14": "6SBwjGj6KUpQTDSg66Sn4re68Cng9r8Jo82Zfm24fMYXGBwMtsYhjfk6DYYeZ4xVPJ25g7hmiroHeT5KQSSE4jo",
  "key15": "bACCccYUNrUeQZcSDhXMiwxXfX4v6D2u6APNpn21QjJgkzCfrWFixadicUkqZ8GvuFBBuTNfARiEuiWMNb2giWb",
  "key16": "YU72B3ey552aBxwaUdXgPmAiCEqXJwNTPNXEtkRUkaYrLGRZ5JtFV39H4QEC5yB4PbRWz25NXSdsYBwncLnBzFq",
  "key17": "2kKxJNScir7bf79M1wUQhYfp4qaA3eobxM48tnut4DUV5WeSaUiY1rWEYz1kxtH1t1zFBJtN4QcugF1dsubfmfd",
  "key18": "3SwsveuhARVJwZX5ngkQQucv4rTnss2sHwwEEPFNrZJcHa2Pd2qSJDZJihZA8ucQG1kDnng5XXKE7HSsqYunjEt5",
  "key19": "15S5eKhBLvk8dcZctQABVAiTp1yXaYm9cC8Z5K5cDBde5vpPfQVqoqNRxQmj7xqWnHEovyGATyCUG74MP58iZsx",
  "key20": "4yGQ9s1e2r3pk7xKpAe7ByM5WJi8uKKGATerZSHE1KH6SvMUNHea1S7Wo1CUMtKHmEn2Nnkt4F5sBDLSQLXhzLig",
  "key21": "Yf4d4iPebjit52cHP98zCZF8di5TENgWmB4eciocc9rsmUTnVxjWGP9jzc8s8dqEM5jqFuofhTdvNtzgTYycN3U",
  "key22": "4tbT3s6uAvqZFWuqMM2Z7m4LZacXjRZZzkBqF8hy3pmrMYLtsF3b9seTwuLrJCk2WrpK59BEpLwpNCyEzLVkm9Rt",
  "key23": "2B3DRLpxYa1r3tXdMGxPSE6rBewSvujEuVXmyARuukBpivwtV8WDmM7tXgiQKLDFntw1LxDi5c6RF4i2LeScsmp5",
  "key24": "5oZfTGkmNHSq5iEbMCCGN4WgsPTHAwTv7uQ1ypNiEPEcXVSSfhHGZuU9RPxcG82Gd8ZtyXnRntXmKhzokb7z4HmV",
  "key25": "4MZUAUR1dWW61FLxyTKEGr4ZH5rSwy2znwT432V85SxjfhVcgGAW1VhdNdk7U5GnLehpDFxjc25wSUep8fnFNzrW"
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
