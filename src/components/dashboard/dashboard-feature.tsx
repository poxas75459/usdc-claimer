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
    "3E9V8kRC6s3WkbaPfVXMSY6hKMK3hzqSvLrP7Q1USiFvbsyhKNf3M5dFTHSS1vPokjVZH3SEMn4MRi9BFLQJNUcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52E4YHcye7hAdUNkkqJ8ZF21hobfHddhg4zoXGdJS5jxbTVpFCey98ZuDGnDTVb63jRtpxetUuFw6js9rVkEQgfH",
  "key1": "3bHMszhQdaWXK11fE3KbhSrdGewjPse3JX5snXHjLZs5soZfoHiQQ6pWHKUemEvqqKWvCReBhSFms3mJHatPct5s",
  "key2": "2dX4v2PvXjwWXzyFPaVVfJf961Lu4tmWyAU5ijub4mjsqQSnv5VFNFudeH38KQs9CNpxD9HLpUvjFvdAfLjm2zPh",
  "key3": "51kSx2pN88GVgntn21ek42fkqKCtMTRZVFWCfyTTHBb5NehG7bo6N1GQPBn1VPEyWGWiEA4nJ3rMhSi3t33YduKa",
  "key4": "wLC9H6LBqrTmASLtoVszX49oXNrpbPngpe6xVAT2rDkbTBcH4pdYm8STnPtJZte1vQ1Y8bdr1mYJBnCHERce3QT",
  "key5": "5u2EmYzf61n9Tr4wKUJ61vE4LBvu7cpkG1q3Buqbv8RDX6BhXYtwpFwoELRDLFNE1UXCvCtCY8Lrby4TXmCjrudJ",
  "key6": "3SVsMYRQZvHu7mhZZM92GYVLVa6iSpqvW5Tvss7F2UzWnwPRf1B81p1c14QQPPqa8acAztYanWWA5E9XY1YbZv6y",
  "key7": "3KEihhnSqQozFU7cJ2H9iBEz6ntxmKnWAQfsuMcgdFY75XvCRPc6QUhbnieD2VSNh9R4L47jDsqoJVgW8qP8gnHC",
  "key8": "4p9Pxb6q4aH9TnNrjhRtgkYZVinTQGDKenRT5VRH4moHPrLVpqEa6y2gXE4dmvqzLbPZueZeeppcEJgtMWM72pb1",
  "key9": "3P9AgTNWdy5xE58JMcKtbtKGpytCTY5usTcJ1FgLBCMghrwVkM7Vy98nDbPNFE3jVsPmuNYwnzsW4Eyb3a8PYCsG",
  "key10": "3Df3Qj2H6yCtBgH7LECsdjE6bESsWF6ERtSuXwjGUCtDTYtA3YWaW9FKhBtJtepes2ZRr1esPxm9JrgFegymC5Fq",
  "key11": "2vGxkUn2QhhuFAHYFeB9oj88fzxWHfeeCu3paqq2puZucy9J5VHfcGCM2TAqhhUfNKBwvdUzwiQ8pX7vz1PXKkNu",
  "key12": "5saGXfF4RhTGLo9XtX1Trr4sgYZi5Ysy827HtM4oz38eVY8m4jknSzALGod91r61Ls7iJDEMBBbc23YMuww2HqaD",
  "key13": "2WDaNwrQbwT4xvjmCYTqbvSnLT335jPr5EWmFHW9AXfc86PfkknSY6XMb5b9rFoiowbEoVmiN3USm8JFvfDhLvGv",
  "key14": "2fztJZBDTw6FxXjfbVJFFmfXKMVKQo1YB1i97RiCLjydNpTDLnuwFBBwNS9dX2RcaP1oNYnw6PqA9uZEUJG7yiSf",
  "key15": "4NBg2PDuQ9sXK53G9GgkQ3xRFLyC5sS8otKBtNXru9hvMu2gtquSCXpQxUnSJXKnreG3sy5MKwLnFzgadUpZSNbc",
  "key16": "2mXXN6JRBDNKHnHra26G583A7THWr3MKpDqqEUL4WJ8ym2AiJDVm1Nac1Nn6MNeWh9ZtCFTdurnrCPLrywCSxSXM",
  "key17": "4Ci3N65PESVB4BDD42JAYJkt7EyqfgQwfop4YD3SNvbZ1AJRkXExHVe4Vw6LG9pukq8hDpyjtncJfXyQ8xcnZHqb",
  "key18": "3imMJ7xrAqaHqmF91ZjoZnZ9UNA2DWu8UBZrKQajJWaQMqLZj4NwMUhc3Xf5bxJFgXu4EjKF27HQqN8YPUS2uEv",
  "key19": "5VV7sbjDgS57xDSoQ2uRDP9K4kgvzvZ1H6GYHxjJaRJMuETQfqyLpiF9MH2dT6wtx73ipKGmA4ZQyWrzaouaWod1",
  "key20": "3rjiRVfRnS34vF14cpqPgYPfVhCt5kDNwyNrtb3zb4e7wj3PRYHJHDjLpnL4U8HuzDM77zP5PQMF2wvUBD2jwtkg",
  "key21": "2Y1vQEr3Gf6NKc3ADS1gCgZPu4ukjGE2h47PSPs3FjdrakewccaqRsUbtuXB44fX5tZVUnbNT7xvWSN6P3DHfh49",
  "key22": "3idCgCRdWvkrUrjyb6894m1J3tjfHdNcx21tFE8pcgmin5taRc5L1F7Mqegrdi6LpApCKdxALCvMxbe1EZ82dCnD",
  "key23": "9EcCxcdvvh6m8fYrSj28ziyRUtzqysViSBL6a7w66ZBRAPSqtaAnxU7BLZpbwbW5M8PGP22fUu6CSxCsyUhZPQe",
  "key24": "3vUCCYbEjDMetSH3RKdggYUqE5KUMZiM1jYRDzFcQqH88y23SciKtoZGnwPdzPHM3geT3A1CktSpCkqe7ZuB7qhW",
  "key25": "4hJxsCRnWHjMADpeZkGYCzbeE6xumpmGMR8QSa4Svhui2UL3ALGPVvRhnuaxr4DdXLCMgEmaZpj621HJuW7Ut7XJ",
  "key26": "3fkLtTQZStZLskVPp7v5dnjy46D51tp8RSivt2U5Y9ob985ZYivycrcvFEHHCfShQ7DeATMvjvc4UR971nhCQWWS",
  "key27": "5uQigEz8hC1LCiKGhnZD3L86dMiY192PzB52MLxspYDW6GdofkDJeQZPpGBQcS3Vs6S7N6Un6177ZVbHfReULpbB",
  "key28": "5y497KtLzuuGyMqS9VCUtjFCFo3NCGm1kqAYtaY4p5kpyJRBKiZbCpDoXZfeBMvXNUzgKhRe8PFhTrukLYhhGSJo",
  "key29": "3G9WXXQcvEYA5Hq1fBpqrUz2vXMuA6NgVAT9pXK7ZxRsfh8d1BPurR4FhmfMt7jYpSsJRYA6tjHPTzx3abRaT6Rg",
  "key30": "3MpGU1WEW3im4BcxBBL9frhoyJvNR5JbUvumA4BCKy8txVEC8tvsV6nZ3QQKM3B4mzSqsshLi4kqjLT14op9MB3A",
  "key31": "DGDMtbT7hcU9MnG2can1T5qvBxRzGi3NfgZc5wjtQno3EuUva2tiYMyW1fyHj9VzK7naDvAwMrqa1ouavp1gGzC",
  "key32": "4zmUbWWfUGy45ARryUXpCzMJR3Ri1hrBxtHNJYTbHk8DjWqfNBSEpKeAANB5bwxjxTL5m4aogfEwD25AQ9XUTYVB",
  "key33": "3mKLgoZperhYo5S9prAJkKsiy2aqScCvqpq5sTEeNvktsCLiTaLhgUGVqcoegPJkd9eEs3qSzRBZ4pX97JQaxuzz",
  "key34": "oekHLxZyVs86SQw69oeUtXnoatTW8PuHLiipK19Kyu2kr4A9SZD6xJZW8hi1pGxt6nQUphjZNzhNFnp1AJ4fzeK",
  "key35": "4jo7h3A5VSwHFXd8Lc1yQXwArBwkiGfVHsPQyj4tJTG1byen8BPUmpHE3j3dvCApWfKMDWfyaw9VxE9WoRPUsFzQ",
  "key36": "2yCzdLUpm7Nr1XovFeZPRytUju4YJystNuAgbGXNTUGFGC7NCVEC2u2BaHopp3Ev9KxK78XFshQ73onLPxDZUgVU",
  "key37": "42iPrz33cXqqR5rz9egXjGkAsDHPkXFVhpKFSUS9Q6YNECTH2d8Pi7QvSRzZSn5qSwSVHrSv1BmCgJ63fZdMpPg4",
  "key38": "3DvtrP6dMLniZYgw3BHgge5estLFuu6bm9Yh44CpBeJ9d7hrEpn8rxvu5Ra7tQTE3w619LCEgskGnmcVK1fJKigS",
  "key39": "3Wk2J95vcoWbtbCUqNmewe5LWK4BHdMYPjWXe2eLk8FLfGHqkMBARa87RWBmtY6myWHDHU92rMT4mRk4WBnRniTn",
  "key40": "2vz9Jfbatw8noADBMWEiQFaJm1zze3Xb4CNNH8BnsupndLs7CVweEZckG1sQAK7oBDrzK7wBCTEgh7e5SBxNGomD"
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
