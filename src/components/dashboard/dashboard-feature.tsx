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
    "59bUHPUJRwRYFEVec8dXhxyJaUcA6LufyHJ3akSA7vUCCCjwJefndCU6FSPrQ5ZGjnxTkm1mUnUpqxyfDzg2xHQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5NxvfTeyDNC7c34m3Gvn3z2tVqPksTXnMVy2DwTndL7cWRgZ4XzcKTFK6StjQLQ3h49wgi2fmz7ETMrca1DXtK",
  "key1": "5jrpF9seCCkN8vksmcTh2Vziz98xxKhyV8meaEd5q5q156J1ZFtsobt2XQtDmdLEbnE3p5MVNoVcLWHNBWY4vJqF",
  "key2": "4aFa4tNnurqatxshWCh1c9qR2pmXVGBXmkYx6ryk5S2mhPYJ77AyhJjZKVLMy2159H1usjFXRwE1PW9h8bnTPhv5",
  "key3": "4upZBi64DotNq22Ce29GQVFEgRjAxnHXtsrLZqdhgUfnJwNt2t4sSm4HuFqKSedKKHQoLkm1ErFTUAsBPdq62CMm",
  "key4": "UaLBbsU82Wf5uvbPDSpkcG8s6mPRsvLqMRrpu2Bb5WDAsucVQrx16yYipJ9zWEXbEdttKRn5CE2Je3TMsgrtiQ1",
  "key5": "251jbFdTcCvz7KSASKvrZYfhvHuVRhNEj5kz6MdHed9HEDMLg27uiP2MnoJ8yKnHAiohoHi8eEQu5odTQHeixvn1",
  "key6": "3NWtdDXESXsqXCf4NLXmJtBNWWLhNMghYXTcm8NSBdNBn3mnFkrwyQCRQLnA2wujHMHBRmGyaVJhuj8Ui95HRrhY",
  "key7": "2ma5vihvXDd1rnEQZQgoduidAXTo3KvvV1yARfbhKwbAEz6PjnSpMZLu1e6qTt7YmjXy4HK1WehCGn3VQtqGtx2V",
  "key8": "3jiR1BD4XiJmdeN8FUKr2d4sVeRvijS2Tnetze8ejWSQzyGGopGP4VsNZUCz2gemSzA4Y4Wnpu7uCAvGo4cd8kC5",
  "key9": "4giDt9L5Z9gG9xepfB7pzqTz5CEiNEB2zZQv7ffMyvMAUXn2QMuATBcS94Jigz6xsMBrK6pNtFWEb1qnuzA2CeJ3",
  "key10": "4nnDgYn5c9dmQb9JQbFAXE8WxmH6D3SHJ2ttKryWBdvntXRPWZuVi5UajztJkoC5Es7XR7asWSeQEJPxjNPQkfw1",
  "key11": "27PQyJXbeo3iSWn7Y2P1RwE39ZqWdd6LgMCz8grqwU5W476Ypm2PgPsrwkNFvaLFUMy4AdMHjFxwwRnJbtDvZ5Kh",
  "key12": "3AopqiXAijLgKRPUYdXDRH3ZfNh8kZ1riM9ezDW3Mjh68wGxtrDFCfkrEFdLuEz3jYi17v8QRmjTH5SZCvgChrzr",
  "key13": "394oFkKvXPzgfC1eiMmCX3cm7Z9BHaps5oeLk5dH5BpjKf1xzEgD5bGdazKz7woFCL1czzcVVQUtBDtGUaxuSsUM",
  "key14": "4hd492q6uLmhFm59kVFthyGyXviVSjbLEzJx6nS7QetF1UBzMY4edXACvQFXR97NacTrX3PgsAK3kr8QS78pj4UD",
  "key15": "3QCCXM6pjtj5Svnjcq3iHWLe9aJdyoi2dTDT3AdKFsKmDanwUuCYXSxvmiA2j6rBaqqp71YnV6Wcc82CkzuqjSi5",
  "key16": "4p281L2qmKorA9mPaSSj6k3KaHGNDa1Wx4ViM7HCVgwnykk62DkGUhYUk5y1ZD6RQCrQPSQCqmphrLevSUijGHru",
  "key17": "4ExtkmzhDEiwwVezviZsBq4AKoqKTpy5r44ytZu1XTWZLzGpoXJKpUcvHrtZ4YZYKA1d5CrSgPBQD3npRnV8V1Mz",
  "key18": "FaDcuDs7BNbz8eksxju5ubHyFiq6xRihGEzvFRj5FaTfhYc1CZkvDxePob1j1bnN9Jnx7ewNwCkZfXrkhy9fiZo",
  "key19": "V2emEjfmoBjHxFtDQsvzCVJgx4zaZpq2dpmgpntgj2mU5PRsKTVzxuw5pJfefYRDBD4KumsDHywxHkk7ksJsqLi",
  "key20": "5j1F9hBoGqaGpgEH94i8oqt59EgPUNqBjQBM1uQbZBfYKnsNWbtepnfXhumnSdzQDzDbf34Q7xrGdRtjqLc6ZCSw",
  "key21": "5Enms3E3i1Ehgzzmk6tdtrkfipx8JCB3iAH7RXCheSHsPTWWkJLE9gTwo44sNvWHJUnCFwrYX3LrwHhS2Ys9GZby",
  "key22": "5yhTAvG1V7xz71BEAqiXkW34xHPHxrqeXVkGGMwGQX8fZHM51JCybspfi5Cex7vhXyGpEGB9QcgVEDMd6bs41PKp",
  "key23": "FWpCFqTjqL5uwmeR4rKzsHwEYFtqcuJCstVYUSp6iNkAL5c6sSzqLSUXungWqgafsCSGAiLZszbSCBNAsz3nbUX",
  "key24": "3kvGmyt4uctZnA9gXA1SNBjazfd69rTazwJdmjYaAaqBT4iGZwTvRfmDDVmXg4sbeJot44TAxsbr2jJ9AYqE7Ja3",
  "key25": "4DUP3mdUg6A3CS5krJmz35Jes8ndWCZ9xxtFugqxzJPitECz7kDCtRn6UqTQ1vXaq5kiQfbk1NkUcnvQyiuC9NZ",
  "key26": "3KHtsKDAaYqdMtj4qxnuxBj3UXj1UpWVYiL6Zbjtod2V5AnTTFRpAz99Adft3dDeyZhWAWyc6H87sK66JRr4r7fJ",
  "key27": "2aqtGvF36sonB7B2sPxdYxJ5fxnnzdav3HBzmK7XqdYQ7sXnqztTUZRD4CAMs6tvQQ6KALkAWYFBoC4HEcnJmyWm",
  "key28": "3ohNrCpjxcSqRBXx4LhE23WmrZy37XEHNfx3GRP5dTKkihsTgufAjvLDx2tKHbm2mju7XgWHcrchsmAkAgLuDAA9",
  "key29": "YpUcYPuPP6YJGF2T4K1GsW478WArf6YeTRqYCEE94fmr751XYzZb1sNc3P1p46CKSBfBr2wwyRhJyyHnV7u6UK6",
  "key30": "5b1xMDp8Y8J5HXYwBg42a9LT9TPPeQJwP1vxpZrqUhwVmtwgDjFBamjHqkZfLxJG6VNLFynv5DzWJZzZRBXW3zPt",
  "key31": "5EfLCs3ycCedYHXC3bD8Lx2ZCRxpLoeX8uQetN4xKgVekp312QyTh5d33t8cUBwebmhiguxri44jwtyu96LhkbG",
  "key32": "GsNAiSPQ8ptJqPjwTiSaV8gg5xpxKKAHr9SMgG14LnAPkhBdaiRA9LB9Bxp7uJfWTdiAybfcutfWNMxM9XYHjXt",
  "key33": "2g5jhvZhizuMB3imcAmU92gDKGqgTq5T7GLJaQFSR3GNAbbysR9hQXYHQqc1EwwcHBVNp8GxiA42cJr8JXDsiiBt",
  "key34": "aj66McKPyw69ocZCwc5LDkS4B1rkWMhdVAm4HeCESmQJWqWfz1hMnunWQ4Fx7EoouKmomjW3ptDRzksh2nrK1tp",
  "key35": "24omHLMhxvPT9XTKUhGvvis3zbRFdduEmrwS1BUjfioy51H5ZYrYBGwTJzDu2PWyvigczdtJuGLSDhWSsqi5xcj1",
  "key36": "HBB3BqsfUhojtd55yXY4ieWpY45NgD5PpmXMNy8H4SST1FLzN1GsS2LsUgiLHe8YphSFsBzCnJkNpVRT75HTTmg",
  "key37": "5fo8Sh3JojzhGwnc9dWyz4xJQvHsdeEoppahVYyCqqBHG23jGnpbA2nVvFLAPbQEt1j9qfUw6sjJTdWDCDPM9dEH",
  "key38": "3mJoDAsedpHg33uDGdPqgRvKETSRn2JtnrSW5EizMs67eXQh9Yjqxu9m5ba5C6s2LKarSzbnHMfcTpPVqgQ2iqGM",
  "key39": "nRHmVMbQSoae6XPHKWohJNtW9Dykx96uxsZB8r38iJEco5Yfa8CPS9VHLVHiK5BnCdHBVY5D66mWfRVhhpDaStR"
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
