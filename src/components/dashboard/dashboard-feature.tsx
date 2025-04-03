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
    "QCzv31VMbWHyQBseHZFPnDxVL6mL4iAekwkCh7sDYKP7u9k1nAC9vEVquq7r4idhfsYPeQgH1799QAngQ77JdHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSDDydApizEGwVdHcpkBF5BKpKWduK4SfQWZmspDrm1GprJmMF76nXeRbXiC4FZEB29LwnjCiJ7A95AwSpJmpew",
  "key1": "2vG1eHfPyK1vFtZQvoXA3grS8JEWSAt51UBhKVk5KXfD5onrWwSbz9oeBztU9FeUSFYUQAdh3Um5HXmRzrBnLrtw",
  "key2": "54DL2uoZ47QRf2jsC43FkousSFnDiUGzsuqrfatHPrTDVXKa72sBNWJLsCopDAgxQaMwGwqZGcPymWxHmx68gGBQ",
  "key3": "51DHnt2WGmKVJWhixcHWUjP8LEA9TKWkutDozSarWG1Tt3cqYUeoLgyKRE9GQ1M6vqv7q3jpazh8iNsMoVzjuRGq",
  "key4": "2zUJF61kPdsZVr9u2FzKmbDyKTpZhigN827QJG2sXktjYqfu72vdkpD7QkrPcZYaNdtGXJwXvugH78Vwn7Wh2hmE",
  "key5": "4xBNsV2vme5u1HutRCKr6JRv85J2uN58fkfauDG55AktWa7Ft8M6XGf6cSNsDsAzM9Zbr2iB6Es4yDaLAVt17sXF",
  "key6": "3ffAmaFKCDZVTnzuxgpjsdhtVgogCGfHnyVGY15dV18ySf1KXK3V1K81kF8mxgHcYva7emmoHCSBhe1c5LoYztNa",
  "key7": "29zeKqM2Dww47pLjEehJp5DfibM8RBGoYTtaMWhXTzSZK5FGRVqo8U6LZWTAWkP7fviRYRTswGnf5G7dHhNxZxR1",
  "key8": "BmRNNBsoNdVQbeVDZ2gYKzkmo4SpnRwxcG6sCGHzZrQsfCLVGu1cZK9KSY9DJXXLzpmY2ovkrDRCu8XAWPyagMx",
  "key9": "4kgEtfvML66v2FtUaqWC7869Z1x82vtMt96vCQJQFR8QC7G6gKbDTPbR99aVkvzWPLJNvyGT6hNj5gty5fZTbEQk",
  "key10": "5MDwc12CrqMYiyTajvXYLfBbhjifH93y1Q6gSdDJnRxB3pMfttkmpky45dR5sMZLxMTyRe76qDm1w81v285Q54AQ",
  "key11": "5gDbx76hxSS49EQT3q2zaB8xTnrkBtx9Twz2KfKVGMwQfGiMxYNvoFRQpFHySDRHobfvY3mmuEQosezzyXe89uQ2",
  "key12": "59d6getboF5vXyBr7akVaVFGTAYhqPNPLMfrjveqjrmiyKjtY2E7LYDcdkPsV5wWhLBm6r4hBQmeFxFG5bfWXmgh",
  "key13": "22R6eFtuUCKwYWuQ6aXVU83oszaPtyCs6AYfi6nFC8pXF3CBbiFMiXUrcJANzJKXpztNqKMV15enoXFMRqaHkpQR",
  "key14": "5UiFvf9yfbUYdi5bgav3wcT3VNt7z3saG7Zzb4JVZD3SMwZnwmXRNDaHfzyLb2FL5kWjLk7thPqbKS9UygEcPSKH",
  "key15": "JuFgA25ruYLCZKykhz5iApqVChHywAt6W7KpnzddfDj6ZyKBexC9mH536rcKZrQp3LYWMkafmfHJz8s3XxMDVix",
  "key16": "24rB4brWuVXinwDQ97JmdAJ3QJ9sMdRwXpmpjAVsYPsLnjFBALx3xgrBC3RXkFTneMaobK7QHWUhHn3RsUcWJygk",
  "key17": "2jE5XaaqsrVwnzE8hK1JYxvkWGtB9DGQP4vYwdWEQgF5giJgEm8nkUzYKJAoiHXqHAeE18wWDxasRFJDg6qvFWp9",
  "key18": "4pa3dbquH7f9miTYq7wUJqMVKUsi45oytrx4RUh3bUbuU4GPgSVvFFNURoG93yjxeNqDt3qDAtYXsZj8zLYFxQpM",
  "key19": "5MkGkswDcZ8xmYYqPv2oMc6DCSVaSSKVEovsNLteE8jjd7itE9191FPLw81XSvm3q3ZzQu9WUGVuBdAeL9EDaMK6",
  "key20": "4Er2eRC9B4SFFVzhbVcezk8yDiBuHaxPWb1BGyFmpBUySsiy2RVeeekLyuqaY2NLxTP5gLnFDE9aDBwZGdesDrhU",
  "key21": "36buzk6QagCwhLib43THxrFyCVEucJ6Szi1eh7uQ42bpNUwSkkoAcjkRB1SG5qcWoGmLv93cp9S5WMBgq6syDEkL",
  "key22": "44ZAHpdmX5yi5o8Zap18KBBSQGZq2fGUuHqV15gh21PhjNcCzxRBXPdu3ghMk36uikEhDWreQpCePFQWmMcSomX8",
  "key23": "5d1s2vxxbmFYuA5BT7Zcah7hWsRzQLLToTGgaFToLWVZ7WaPtkuukYFDSLVyNYj5hkBMEtwuSfkwUKwAjXBDdPdb",
  "key24": "44S7UNShBKAz1Cc3R28Dkjjg5R52iFQZA4bx1VaYej1kHyszrb38iDeM4Wv2QTSsP6djLhQdQchzNjbtvFw1j75t",
  "key25": "3xVM1THPRpiLcPqMMn8Fnxumib6Rqj846YUtrH1pZK8vEypDnX1q59H2wnYHaYSSvy7CyR7E7DT9PuooMdqV3BJE",
  "key26": "4hqKidD4hepxnr8pxtJSnKuupYtMWWaFqPbrnT85voUyJhXxJHFo4FVeyyNa9UGWKXiaAdrwpquGf3smQRVY5jfw",
  "key27": "5zXvJ4x2H9mErP85xATxeuAwo89mSwDgwQiYa4uK1rfCHM3Gxnv63s3tCbt15XV28mnT6dpmyHo5TDUJ422Qd6R8",
  "key28": "4r4smRyV7UFotiDYb7gxHyrizbBWtdSxAXNr5a8qC4AZRHESb7q5UfQN7HPcux8EqHw2VioyhEgLeE9V8yoUYiG1",
  "key29": "58WFELYyuPEa3ACzdaPy88bXRi97C9mHx47yjnuqivV9jxxAziB5j5QzVUj3CkVqzwFvnjQX8X81nJCKhAj9EDmG",
  "key30": "445fX7mxxsH7Mj36pKzhhZxUuBQ1pngjiuBayWET8YnEbcjsEXcK75U5nnqB2o3EyQxWoPmB5hvXWGXE56Y7oNJN",
  "key31": "2W1X5vgsoKa6TuUJqLhuwwXuuGfhAoji19pCXdfZZf7vbPvnEMqJBkCqEcMfBy45NhKA8rofPxFeBMWmhKVG6H9D",
  "key32": "4WeaM2RR6i4LB7cww2k9oQmULQEv7RuFSmdfCrKS5DsYpfJ4Rn4uiharui56X96JnqZ5sDV64mAw8a1dBFXgV44x",
  "key33": "rzRwp7ZWUeQ7jaQrYyVpzrvyYikD3wR4Je4drrketzCtsXweKsJxWjuYttQJ9LDGUsXpou3wBeF2Ajz2Hh8avmW",
  "key34": "26pbmjC8Uj1xc2fF9TgQK3xiqMv67TBCwAuXXqbEMqQaRbZAJhDPgbmd5NXBJpU8y1yrGpNFzojrCuZYk4rhrnaY",
  "key35": "38fNnuCwwWApi29ZP2PoEeyZ5SVWnWFVwewwMuewkXzVbkqZMWM7jyuBfRyb3TNtGnnb5e1nSBEusMLAZ9tS7fFZ",
  "key36": "TMMvGTz7vxLSf86LMD5hinF1R8EzzaXmMRanmLXw4hvSwDhEWyqdRgjydNEotYPCqecu3MkLZ3xh6xukCS93Viz"
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
