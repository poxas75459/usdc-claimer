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
    "5PEugUjwv7b3EZspAxHyf5hnQ2vMAp34SfavD9PnXvZDXCJwzd5FHhzGpDnz1QjFkuN7pHzMPcN9voD9UXrkQYUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xrihsBPEszviHAJsXb7ZQzy3GYGrjxXnTwUf7Birz6Q3Rr4VyHiqSDS1brwuqGLadaoKaw6Li4kkujRq1y7wQww",
  "key1": "2uqqa1FzFFtstj1aap686YY5wZWQxpqQTuNxi7E77dRZzFsapRS9FkXGKwXmoukg8mtrH4HasQYV4F9f6EDxQ3P8",
  "key2": "4ofBZsCjhzB45dqUeRb4jZ77qqGUtnm29T6mYMAvWkYVNuYqVtuLqeqbLvDKERUpf1dLG2AD99knY5cqVpqx21qx",
  "key3": "3jdFEFJdNYzyRiYaysc6EAqb44JGfjzCEcQfrzso9G4cgipQYSWEZ6QPZwGKDnD39QTtn4cKMxsoDWjCBPAG8nrg",
  "key4": "5s5WwKyTQDgx1aiVrNqWCuJaUJEe8chuZULsDA5NQSaVJF6paUtWHfpWQKPAS1725i89LppCs5NrZZY6Uo483724",
  "key5": "2cezfTGhDMp6SM2MnDakq3G9rwEXGPtyP2DeLDnzuikCogVe7D1S7b4qkxCjwyhP8LdPyjEnHMKP5K9RcUevEGoq",
  "key6": "3oqomKevDzpC4FD9F69n3dgTA8XBjM3NmEye7QvRGp5HUup5SWQMNzWAQGEoCDeG7yy6yvSjBJJEa4BTDH14Ujwc",
  "key7": "2fgz5EJyw1TnaCJ3R83r51CFBe5P4tuGt7sdWoUYYBVBbu1ybhxhqnSH83UUPpzoaskhjNgkFihzwW8u7UE65uVM",
  "key8": "35FYWdZysGw1wTYfTPYnEjpEQ1yiqb3Tvjei9rzAL7xRTHrcppnp5ArJjPXSFPs9hEUSXFCUDCnYAoZHLKzJwiYk",
  "key9": "5ATDqF24gwCqQfFTB3ZmngMBheYuxVY9sxgFuCXJ5oF4M9pYArgzEQ8JxTp9F59PNL17KVDWDPtMDPraCNRywirj",
  "key10": "2bJJ1MwoBkaumrVHMwPPfFP9qBn5YjEVRYs44kxF8ufBdnoDcg2WkD5u7EGVNxUNJv6CkpTEdDggZ6CEzy895uug",
  "key11": "443PCugfgXMQxgw9AuEeqrxygRFKj7rJxdauJsfReUwxx3P4PKBbfkWCT1rSLCWjCh9v4pBLyeiWusNv5TrtoVo",
  "key12": "5HSoEfPELfmS59AxYWZK1m9TNBbViWkw6a8Yo4FVyZnz4Jxh3WfgKC5LoUKYaDkWG8ja5MLyn53Qthkybd6F1uKK",
  "key13": "ATbDuzUQetR2iYBbN863wDmogR93RjPFhdsmEkNycQEov5gTZpUwReyhpjzQeFjwDECD1qYzFEifxLodvqZ4sEK",
  "key14": "5Yo7XbR3fLDquWwf9XaaVRvefAorL4EJDcFtw9i3dZ1HLB229QNnYXxor6pxU3hQ2hGYU1vscsETEpXUKK7KbqFr",
  "key15": "3iQzutsh5c584cu3z9YPdtDVz77s971zpyULjoVudX5VF8hS9ZGvKD5wASjZRqA8hdzzVVmRm8y2HFb42i75bgSV",
  "key16": "2PCVcuSHc5QvgpeLfvYe1nMQZ9o4haeuZ4LocvrCmpwHmTtGv5NEhmDZYSrvR4jkWEm8WayzSYe7LDgtVypsqPwa",
  "key17": "4617wcZSPrz1yXYEhjGonDcupv4Vm3aUKbnkHkCagPW3L2F8uNwh9hVHE68CmCMeF22L98zz2h577LmQKyB5mphK",
  "key18": "3hUExiY1fU4sMxskTvQ1RHSXaPi9Z6ggf8SLTHuE3gKbwJ5jNci9efUwzRpAkkmQ39TMJoX4dAJqPBJnBSn1bror",
  "key19": "3nVTUE9sPhiWMyWbpyKSm27LBSg6SmF3Wt3i8EM43JWa9wUb2H3sbDXRYbtV4d46MyGbCF1T2rLJwnFb8BecKy7h",
  "key20": "4rZNZnBQveYtYrePMQyt3B1UXDTKtzHJHWjtieYdcuB3NvFZgUUNgZC1ftbD9wQjPvFJaP1zwPUXBVA3y3fNDKz3",
  "key21": "2H8j9xbJgNevXYxSHqTxwmreubNqK7raVeXbnYJ6Xt9rpB6oL377uZNhXp1QdibnPhpv2fh29ZRPpG4BcZqSLK2Q",
  "key22": "4iPZkJCAFQ6qfgrukgWWwGdHCyXBhsb5zMnCRVwi2Z6YrEq6wni9fTQBFZbZCqrYhYvhGdtUjczwwn4auv4EGJg4",
  "key23": "5mBcU1qd2k4gJ8QraidSCdwn4XmbNUi4gJUMJAudB3YES9AmdE5Pqn6og71BpK4Zp1oKBAjdZ2gS6DfFrBXyt4mo",
  "key24": "UB8GrtoxJK5UdepToX5Hg4eqmvmVvFu3ZLAySCxmnjeLrbXV4S88Ma9huARzA6ELLsV1FmzM1V6A6du7VQc5hFJ",
  "key25": "4tQ7XtKSPxumbS21iscEvbttAR1xk6wd8Zx4JWQF9pC49iyzorSpLavukMcgC9VepYyx2sQHDFHA4CrvDEw39utX",
  "key26": "2yvS7LTaWsXHHwqfnTXTChgFDYuYjXV12FsNuks3DbfHogPdue3bTfXxmPNZ4BHnwwwfmJrvz76dGeANs4izMmMV",
  "key27": "UrpTSKnMgFfL2Xqs99JYzCu8SLYF4iRUFeXKDu17fbrgGx1wK7aM65QjozkFov2rssx8ZNUodBem29QTpTsM9pW",
  "key28": "5PxpdaA2yh9NuyovPy1vU7ov3UY1DTt3xSnB1q5TiJi8xC9E6daZPAjBZEkcefJ9SDNqxQ7ogLLQPdX2WDRsa5Eo",
  "key29": "34sbonejNjkC4kGBDPA5HxAoufssnrBQ2vwz41H3wXDLpUuTxxL8h1QvfF1mqvUwZFgpoonDuvJwephEnDrgz5RK",
  "key30": "4UyAsBV34coKaRBgV7gWzo2EYDV2ssnWQb6SHEqMey9XUHCJohSBuMuwxgZJx65xRN8XD9Jnf577yd6H76Hp8JKc",
  "key31": "4H5MLXjTncSAyztrkoeDqfUmZRnHi3vGerpoRFVqa7BZCRrwPnq2Xd1vxKbKswBvDsEEYcpjYLbiNEnR2ZJdkLr1",
  "key32": "Fu2GJEoKYichW8C2AGp2z6tZEuPxPwegKdQitT5mNNgXDVt19YK4BSVhLR1CFn3xkKEn27paGNQATuf9vrKppEP",
  "key33": "43HYcXhGvKMfSuApT5odU96rzG9e5zpYwbec9dwDbEUCDvmgEbo9NTXzVhTanQGjmtz9XB22bxaFFq5WPfqhg6uh",
  "key34": "3VbneiKEATb3vXzFWyi97Nk2MA6kwn7HgbtboH6F8frNaq3qMaChttutpNn5PQ88wabbsfohjiPey3aYUGtmp76U",
  "key35": "5yDwJJDRMfrjfEJXAELLGULKQZGVxbi8hrtVQgnn9b8gnnhyH7PPZphnbw51chpURFPKQUsCDbwHd7P3JAr2cDzA",
  "key36": "3LGbgF3QP3z6hTB92fBgDFXptBLLRVEvQem6zNJFLwRzBBh9wHYeqwAz353rV4xiDrskihQig2RXe4kvXpeCZYQx",
  "key37": "59nN7aWmnX9r5JCgjrPgBuoerZBP3NpQiPVRiD8ttcH5bVze99scebsszUockzskrCBbuBHM8Uc18GvncpDAQzhV",
  "key38": "4d5xwfJZ2N46sxCkm7vAF2XrEqxeBSgpEL3TuuusgNdv5Tp29MkaHUUtDDhmdwtATyhKEaB3iN9jBwCB5RSUF7MG",
  "key39": "4Vghxxv1GwYnpATzWTtjKANFdFn1wCoGRyQir3yAUY9i5RNzLm2LtagpEgDCpNRGG5yqevy4GpeuCgKTPi9Gb1xw",
  "key40": "3keBKeQEz9SJ5CUREogdgAMuhmcZez3zospN9La2g61BHMna8q1twN6wFPvYnDuEw9eE1QRPQYNgQNHhKn25TWRs",
  "key41": "2dLG9DeDfHWC27q7JWwkMHUgQSNtoYtWySLs5BSyurXAbxFn8hi3xpefZJ6uugBe4zbHqL3GmaYSJh7dxa46PZHN",
  "key42": "2trwUFeoquyFRggjCiVTMRnC8wwf2sUqMmL9SikeMfFCSYTVojQkz3xtB1jBe1WFMKeNGmodjA9P4cP3JbwyKthR",
  "key43": "5wDaxtxjJpSCktpbBZUAVfgJQiyG5ttq8QfMx6mLoy8R8pG2pfVvik6uBapRZPDCBMd1daq2riz5ez3LQPZKqCGY",
  "key44": "5avw2gYRVGAQKpQ4nBQcazPmMrH1e6tUYY3DJcHjN6zxW4M7nC1jmeutCdcFSfuXnTG4vVftHBM4qQZyaXCsfR9",
  "key45": "e6mcTw8oNQaS868DDmpuyusXhj5mTke81Fig3MzJeBgLrWt4etLPhQMZXidVzJ1cDvCTdr2ksgqRjcXu5qSgdot",
  "key46": "2PXxwrFcFP4cSHe1hgnJGxfYF4c73ZwxLcX8basBG2Rz6fZvPjMfcNEY3yvLKQiViXLxHkA1EY41epRStdXEw9uB",
  "key47": "AciMfqpiC3XmKMraigX3rnDsurocWYxPbJkp2Uw6n5Jn8wXjsPVBdGPAs14ayQfptrjgrRoto1M9zt8KCputrzN",
  "key48": "4ok134LcPrmkQ2uPCmuUcDGAVrpNsZPSVLSLRuapeHex1VMxA5qmEd5fmGU9hDrYGoTu4Twt1eRqwyjFCFfqTzVZ",
  "key49": "2Gp68oCvDXbo5RWCRyuv5Kuxe4BSGgVsgzmEnaTkxTPuzVsqsJQ6RYiwpXKQoXp28T9VXzey7SxMCYvZmaQdBDPc"
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
