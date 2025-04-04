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
    "3DzTeZk6Q5zHQHvFH7ykekUWzdrwwnAkeaVVtQR6ZFZYctfoHJnGBYKLbA77vPrKMxJo1ugZpAG8fzyM85w2Jsok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUVJ6H9az4tUs6RLcoirLA4xEvctjmcdBgCX4mC5yKrb3NV4woZniXrBXDwM8a5xKr2ADWGr7pnk7Pw7qJ9S2tE",
  "key1": "3KquTEATGmDis1f3KM6DcZy2LbjHEcbD1o8x35gZDWZ491BjtabHGemPrEWUSxsa9kvgVde1mRs6fBasGicmPZ58",
  "key2": "21gvQCYrwRnzqDJkqbEsjbbqhZKUepefakfNWKjA1tA16fdTxmtj3czYizjS4rEyomFGJX76FFvgCaueErZxvtvv",
  "key3": "3eQvagnyWRV8NaoeTis4XJSaaonAqhacZmV45vGQrF68jhstBiTqLQR8pUq8bLXhBrXYJUMhfpozNP7wcNW9duVo",
  "key4": "2oyAe7X74TvdLHJ2Ra6gd6sxSk6EYZo1uTTPnwGNbx8cNJsak6Ybr8jkSRUjMAdsScHUvAZbdHWv3YEhsuEHV8Db",
  "key5": "oCsConL6ogYA2U6tdWkPy74jZjKmeDEcPdcuPHuavYybdXnX2ZCRRVTYEJJ681LgfMiXxXQJd2VLouzG84LQ9MG",
  "key6": "9kGfapVHfACmxF4wNTLG2QiSSEddBMyrVCTPUAfFxfhAvtTNZ4wBmzSaNFNodn7kUyR9SMVKes1JaHZ7TiWFDCa",
  "key7": "5M5sYbtjStveKXf4cxXWGvN6RL4cgUJ5XM3WznvWpVBxDdKxgRWSFHfwoE1PARQKYD66tJbPnaJzee1dWADGguds",
  "key8": "4vsdTetcGK4L6gNHk3fa9NTpN4Rjt6syMNatH6EJAUsbiYR75saLgov3wPPnwpCKLz4N3tuX5c21ZgVhANz6Hi7y",
  "key9": "2VNJ1gMUwndbx1eAM4W6oHUwmtorgJycbMXXBxMrsTSNUzzi6WvbiApzjNTn8fTk1W1xGHqwTmfUY4DEfQwPYgpT",
  "key10": "yxj6VcahD1FE6BSp61QgSLu7SRiSa7Ak4wEx6tVD7XvA55tn5HWM8dqo8NZdFEtqXSNosSQcyc3wfpmdqGiWsnC",
  "key11": "4xZJeUUUue6Y1GUC3z8iVuihx4JveKUwi6cuc8jZ9W1Wd4CwrRoxGrRa9EAg5jQXiWXqJKR6xGdWNA6oce3cb5jb",
  "key12": "5jeUG3vd3L8kgS4f2D2BJqUke5fQFzN14mcPFahNFKT97aUS7NZ8BGmHiJFEjwrQoLi56Ehddv6RhouaYTfsjweN",
  "key13": "3i1LTdq1CHcwaAhhp3rvoHQvnq3AE2BKGUAZ5mTSbCUbRKcHna5GdnBScQog4YYrJzmfMRcriKbVjY2NtpJQTcM4",
  "key14": "4QAM97Hr9KeGsrFG2365AJSnaFPpKXNgrgTYnaBVb4GX2h33JqzPKJs365hHwUbkpWSsGpR9Bi7vxpw7ro4TyjfH",
  "key15": "57hskksdynN5Du6tqXX7ywTLe38m6V3HBpQprvMTaNLMqMVMvizaRRDvA3YM1999agX7AMDSBiuvRxEx3a4GGvP",
  "key16": "4iQUvESpwDSMHyEadBFyjTKiA61ijoPMpRWs9xFzj4qv2B8eSDLgkXDZgECvWi9L7hv5xEdV3XHsfJ2NDS8eTEVi",
  "key17": "5V6uwnTFBtSrMr95Nj1LCjEJzjSAkWGvP9BcEubXL8FuXs8Q27hLmx8TWHua2KbcYFwWjAN42fdsMmo63rmQrjR3",
  "key18": "3XXr35oia5S68gTki5X5EzZ5ciK2mJA7HqvMRNDtFPgmvGE6QwkhAonbAMxdv3GrqzriSHk91pEBEGjqjCAwn27X",
  "key19": "5xE4QUnp8RFj1aeyyNksVLaLHNyTdrRPW6gtYmqamjLNLDGc5w428PGXMvXzhT5KPJNKqU92sgwZUx692HpESU62",
  "key20": "2umpi5L7qa2vC1hvNL1qodprKrccM1KoefFFCC5xnx72Kdqq5G9n9fE7zpDxKfRuUE6gLnq7qFYW7bssXNgH1twS",
  "key21": "4exLrzmAfFNGySZtKSx7vQJpuPqV2u5xn5SE5rrZQREoWw1vNnB88BTfosUZPMzVsPdushAXVnsesFZPDxjt72wL",
  "key22": "5sPsjswBifCVBrEr1FgP4Sm85BUfhGHGBWwpoFk3yLn7LHDjfNgNLxZERLCf32wAhuGKPDdCF3Nc2nbHKzQREoL5",
  "key23": "24qJ3jqZokT44wEngQJbrRRDTJxx7rr4M3jmaBioJYS97ySXgFPL1LuLvtmWRdXmMc2wM3qFTcypV8NM5gLuKHBJ",
  "key24": "yXjK2n89cf31FxDZLV9gK5LxQKdca6hrRMh17quAZUAUrnHWpZ73Zty3zVnH5gYVo6DuaHNvCLdLjopm8PJQBYg",
  "key25": "2KmzW5TjC5gPFBBMdWKL1Va4gs6mzeY9s8mAzG5A4KaefzzyQXXjYkhZggfGwUqborS9iWzkR4UVtHekLTQoTW1o",
  "key26": "45xyeyQ6Lx6hE2iVjk2yQG6rPcbg85HA7Qr12zUzpV9TeYNuozs5rBT9Egw4CU6M9Kxco187u6BhRfcrKxnAQcdg",
  "key27": "2CFCSYwpbzE7LGqqz4aqGUzd2b4VC1pUYvYPTDhUbUXsPVeuV76R7oWmRTqo9pZVdFh7HsXTn9L7oLGnY6cvtGNV",
  "key28": "3xXCJFQZKvafMCGdfWLeW3chvbP5s3tGyqSeMZvDncRNENCkpqMgN9p1NJaagiji1UzieYWb1p4RBGmsQdcxyi8d",
  "key29": "5DHTSG5PjvyWuXTBTDTCvsK62YaUmSAy81NMqFP4236Y9dDxr2pzEas2ePn7VFyKW2buXYnNNmGKSKPXKUB7sDoy",
  "key30": "2yhAZ2d8qyeJCg3eEzzQTyF631GyEZ25h3GHS8GXWoyhKxLNRf7AGM7fpL73YuaD1hqoW5ZuBC9swetKqf4gyFzt",
  "key31": "2vzy6VLH8ceyMDZefa3Nfuzj86pcmf376GdENWMeAhtHY8n1KdCQXzdhdxTXzFVWEy62prrqi9zjRnntFHDdY3Mg",
  "key32": "47nPEw9b6E5KafM4ifwbsGqC8LJ7tZdzttwGUJURvurFNCHeHQZrWaSHgFYntBbVwSKs2NExchoR4Ta5WMipizf6",
  "key33": "4cyJKRDr8e41iF95rrmyDS7To4cPh3FxgyBDc4KiYrJRM3YrdjYMD1Y3nEsmEqrJmzQKbvB49CttZpT3QKXvT9mR",
  "key34": "3LnCx8e5YzVsxi8SPz1iB1Aihuqu7PXEEbxTCwQKsEaeGb7uXSgKkxmJyJZuM2UtC4jAbx3iYr1pRT9BZtd4JGAv",
  "key35": "4APk14Kw36n6okas4KHNp5YimLsBz66LCnShH5qDj4WfbidasCMboFkTDJKyWmSWvTaWhFcFGrUZEcqkkJxmbPf9",
  "key36": "2FeurLGXyjesFtobZY1f6cwg2F6cQ4U9rPXyPDLPQbjhtNZbndDiQNVjxuNQNktmcTUQDtSGox911MgRnGKahH11",
  "key37": "38HcotnVbTjQBHm7bzKy8m8qLCZV9bJe7LczPVY9DooXJ7n6CNVcZKMyRxRBzB6t9L1vY1UuHjnAYYygNGmpDJmp",
  "key38": "4Txq5EccxTT73GV4LKhZXB8RhQBQqWqy3VnVQvcgtR85hapWA3RdK36DQo54hbGfHrFB33fTLAMyVJ5jFr2SbaCr",
  "key39": "HJesz7fyTRDhdziB8XSjJMKF8ZXYNY1jNhWpCiB6654bHPuZa9htZipjHjxteUJX9nTntL1WxtbfYeVajB6wA6F",
  "key40": "Sz13SUTcGsw6Sj6vNkyHie6LZuxeoHeC7GssSU8qaRE1i77zUdwazcccEifBT2Txw9opjngxHSqDHxpoVkmovAj"
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
