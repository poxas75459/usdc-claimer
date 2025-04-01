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
    "25pGxehxiATwsyMQphQiu8ymBQEBRNqt2RFUz7rAxu9YofazDsXmsbiGYUL3VKBrY5o3oPreE6fJ3UbFYbxk5mCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AAjDbeuiGRS9L22pBqyHJHYPeMAKCEGhnWhmFi9AGVAffynzun3GJXNpxmkpwm8eJqzVXPmnjFmpPw7vBkwhWS9",
  "key1": "2sF8frR79N7ezwvrFKrSrGp2gMdmhnPifbsxGv7em32Jfn2P514ahoGzic6VmnUbZbjmErxcbENr74bDCz6UNds5",
  "key2": "3FgDy1rBMCESnSEvWJfFy5tG5RD1YJV4BqfHKbJ3RuMYQdSdEErLDfUctVWkULAFtFBNJXc1Jpc9tfM4szsVDGyo",
  "key3": "4oeCXBQzGYjLzAaYR7qvRCo8sg4aEbiJe2sP1hkZEam7ajxYFXH1osxPxiHDxkcsmFAHSu5kMhMThHbLrpQ4qkAo",
  "key4": "4pxwPJ82jEsEgdNWftcy2kAfRPPSzrAM9wWzZRUvtpZFGvH5aqBJTEjg1VzePimcdbwmD49MJVdyLD6gPRv5GnNB",
  "key5": "VnGTjdi2SyksDWtJkPog9rZjQf3FvCFJESk46H95U1mhxoMPojgmHMbUuueejv89RwssV1zGGSRJvFRW7WoZP7c",
  "key6": "Xnx9PHTPwkZKfZgyQumJgR6kacKis4XEMTfK8JTBwrvC2Xvj2rB6746LgNaPUx5zmVuQ4qJpTuReTPZGB8aQzsH",
  "key7": "5q21ACN7V1ic6VoeSnNxQMzt8WGVZo4DtQLATGMzpsN59wt5d6Qt2TcfFWad3vV2CmdFNw9FfwwFpjYpPDSPC84R",
  "key8": "2M9AaJco2bAHhUDFtAvJc7yTBJtXN7pdPr4vXMnuHUCAhAWZXiUcF2xAsi8XUPYLpYm1ChkxuEQiy6XqQNNc4YTP",
  "key9": "2f59BHuope3HMqfex2qCYjZ9Hf4NwVG6hYCE3UNdYD1J2pWYPaddEHFgGf28yxSBfPzM1CsCjRLnFndx1gcThyqW",
  "key10": "Kzy4zkHD7eLQcdzEr6onBh4cT1Y9Qjxi9NkhoESVeqYDsMpecJtPNVpy5x6crHeTJjaVu7NhskvAT3rLd23shDz",
  "key11": "3tQJUG7Rb64wwkAgGnPz1ZmZqSkMtzKEAer1atkPqE78yg2iJLoy7gfxmkCDGpKvqUzvuBdCHrUsGrPZyQcXawFm",
  "key12": "2g5tefcbPm6LBYADPwCSYfB6SMmykjTZy4gS2p2AUo4TC1SAKDJ6xrpJ5gyX3H5PgJtrr8cbF4dmd9Vp7woYVq1H",
  "key13": "49zzaNYjEdKxW851sTMmCmWB2XCWfxkotCPsjaSVzv1bkHprQWrqZ8pgvGuFKem6ZzYtPmzj4nePW23zkBAeJurn",
  "key14": "2WhC3NEFMdW16fZgktZWCDteGawyDj5fAJVeVMyP7fztCprptj24tmvQHz1ptXBFBg92NeWroKY8b5pkUkuWzCy1",
  "key15": "2Mu3fYayqGCSuJrGjLvq81YQvgunEJibVYgVvkHdorHLMR7AvSD8Jns8eV4b6SwRt9HL3QepbaniVpcFREn7rqhp",
  "key16": "2fJ9UKWwPuGpUafZFsthnDzqcKngUP2NyWJw9u95nsBBZnaexaVBEo7uPXgRnHqyqRfdGMrdwZzR7dMW1uCUpoBu",
  "key17": "3Rb4AheUgD1YnAipbC8nhpEfuQMdid5mRQntwyxgzPNy6gZdkJGCWLTdyMF8mhhEpkx5gVyQfsgFuAw58eR34giD",
  "key18": "5hXYL1Lsdiam3graKYyiwvaN4TT9WTArUq9xxy1PyLW9qhxi9xfGYUMxE6h67mKAb54Fz1VdaiX4QAxFrek4ZFtu",
  "key19": "2XW4C7NN6xUBKAiQGFb7Y8RZX7KVjJh4DzRzn4w9xVjGHoDkqDW7pq329R88vSdi6RcNhoRbZhGgtbKMgayHgnvp",
  "key20": "3KtJDMtZC5ioC9z3hK6c46Sbiv3wHALqah1B9s3De27848WMExLBHAemZRUN1qByhCzxhiRTshUyR5CifFoCUBVC",
  "key21": "5cMT8qDkUkT9ERaQK8yyKAVSZ4f5C8fufnFeQjAomWL24D52DjNatKovRDdkbgMAfnUhA1nsgGPXAmmELWcsSnUG",
  "key22": "5WTdB7xQqzGEGTCfj1fAwNJQNo26f6BsG9zk2dZnKN1Vrtm1JdvEdU8uLRhWtVd6Ns4kkFvvWayyknJXFowWaVi6",
  "key23": "LwB2XkrCCoG58ArTf7wRbhDfXLHFX9t2da7NpBgUdesVH6sfDcTsFwjcquL1bzK27XtTLUG7bFyH2Rr61DBYPRN",
  "key24": "5v21YA48K6aCpcPnM5MDrNkUdc8PnWHgJQbKxS78pVaqHEGmYMWKjBKQeRHuLAqgRJeHwFHPwBgavdYDjmHkq2hs",
  "key25": "3mamkX74LMiJQuH6hYSXaB2zqGuFCY3PVCCNVosiPmpCeaqZGPy4FpzK4CEenghxD5fDx6Nqs4Szq85TgNuDob1x",
  "key26": "5gdVgsKxT2TiUhFughcRPpMhn5a7BbRLHkFrmmeR5HBKe7Arezy7fZqkjrSDrMb9MFWF23s3F5PTv2Mfw6n1zi19",
  "key27": "5cNYMNCanhn9vJZxBhxfvoWR7EmpnKoaf9hazL53h5Pfq6T817i3r6SMBCvTY662mzefMNG5F5ikBVf7ow3y5n18",
  "key28": "rY474rbEJYKEzEfTHAtGkwjT2wVPiyVejQdCCNvCZvYiatddPVruh2BiqtEX7eePzJFqXvrTrXBpC9izmXtQRrK",
  "key29": "fGKmbxKqhaECFa9ixodM8YB7Pvawv7dt41E8ZaewrKR7kTPNpvhbCuEJbGib4gx7P4gNRd3VArjDc2CU48toUwf",
  "key30": "2TWfeBXt2h9Q5wRdoSAFdnG6fS5WB1BXBQBxnZm55qFRmjnbwGQEhhWg6UTZaTe69YSsNAJMjgx9cg7Q2PCF8LFH",
  "key31": "5oF55vLpqwDZ3fiHoqDwAucD5tjvD5JFv1Exnvi5MMticTzwVyLo2oDWE8hZZnZtoH3bJupeXhBzj9YDMoHAe8yG",
  "key32": "2FFnwEdsf7LWhfLa6XAmaXeKgH87rZNcmvwwnXpgUwi2wZqAiWEHYvx5yT5fF9JnSos92F8fk78B7DFPbW7E35c6",
  "key33": "zHigzyK3AC2K7AkeVc4roEjiXqzvrBEdf31GHedvQfDwncrSLDXXZxDvbWxG9e6qNYJHWQepsYHiB4VT2p3BWE5",
  "key34": "4hzTVSySDmSBR8Y6Q8fgHdQjn5gu8h4J6wFw8AdoSF8o6UW5qLzJsEA2DAG3w7uN8pk42LKi8YHRgVYzXTNTHUA4"
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
