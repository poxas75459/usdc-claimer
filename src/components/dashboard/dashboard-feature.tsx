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
    "5jWK6dJzANrG13FybLafhK68ToAD9ncLRZqsoC8yQyvZj2e8QQDeFFVeDWMGvbhEJzPNbcS55YsQaMKrKbJtA34g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCuG1TyB5r34HJLP217UxAyvupvN6wsZYdzrXMqqN6XbNT8FxZR2BiLsHyib8LZqftnw9hd3JFmrmhi31wbU19H",
  "key1": "5UU5eAYp7JN69nCtvR2B8DgUYPBaoMZsNL6C3pCWEo9NTaiN3zmFUtea9sRzmb9ZNXPW1hBLGdik9QsuqBbqwKG9",
  "key2": "3vcodaCzUHpCyYpPumaViFnGRKGx8q1zkTF1dtpAtNcJYnCLJHb8dk2AGJxgwzkqarXoZZuSzw1qhrvTfo7R7kdM",
  "key3": "5fweVXREbQyZCjYzMDVmm4Uajjw5L4vHNCPhBExToKZ6gHADdGMmvkCHzuaF2CtckFB4KCgCdno7K6CxoWSRX8D5",
  "key4": "44qoJH6xefUDjrvjRMReCxXE3A4obiGspix8kUML3RF8AdNijcia7Sh1zgGtqViqUFPZxMEVmn41DBfAsnxi2LUA",
  "key5": "3eGo1PHXDwgkyXXQ1geVZXinjUG2B1zYGT5PzXG3uLPqQC5QwZ7NTb5tqr5KAjgAAhh17o4grfAPVqzt68gRjspN",
  "key6": "4Na224xe3z8VonCvZXwpj1yrw3g6CiDbEetsPMssQsEoEm2R5vms6qiMEPz57BMuoX5Ec3k7ahRiiK4KmFgeRZ5V",
  "key7": "3C9SYo3e8aMWBD1EXiZAMyAj8UFmcH1jJzXm4tbEnH5scwT2Ww9CuYmHDz81SYeKrMHdAdefkA7z8qxWvhaHRWGA",
  "key8": "2dZXg3Wgo5NHkzpCHXYs3v3ZKFJ8YyTpxcVKikyBTfaAfwraU3NxmYMPd7E8MJEcq94e4cjqaYQrnorDUUSAvCeV",
  "key9": "jP3hRnAyTHAKFwyUj8RLRWS863DYS529chDyuQJALoGepfnFPQiatSiBVCdVptRsjzrrxzLuLGD2YDCbFfLvLmF",
  "key10": "3PasGBsXSfwTetimQBJcPABvFB83pEsARRuemy9211L74HbtZGEzCEEomYZimmyECyi6cS9s5L8u9nrGY4XKxuwZ",
  "key11": "5xwyRvjpTy41X3QFZqf4uFpUxKwmBqPSqRXkBX3kgWiSco8x6iqfNw1eXcG3pzesJoUwsPx1JgP62GECxMVi3KsL",
  "key12": "bb12SavnKtCxduwVpr9xtCZSQhYgcREPhwz8Vr1FtUGBQGKZ9LZ8cYD1KfpEEu5GTFYc6CcQycvEk8NLs1paMmh",
  "key13": "5NKuVM1JQ6XKTjDFbJDGNsqokG9UCAry8JBpbCj9byr6U6usVLBHAwkpiXkM4Cq45w63Nc2xH94goGknkz9VpVii",
  "key14": "213YBe2ParYyPUEAcyyrmZYuXKRNYYoH8RpoS92pg2VYfRzQzDUbzzHPPTAoBL7fFdk5H83oLHLZLvsxeMsU76HW",
  "key15": "2XcfbgaosV1UQ5eMdut3dqE25pmGEe6GvoH9j2kvULgXgEa2ZFgPz4K8J35GutaeAfhJJAF9HofTzqX75ZwwHCE9",
  "key16": "2RzPozAzPvxhGJs2BvLyaLRpYC5JVpxsnMWDGtXCrLrx544CWtCPaNEMEKqow6EitjiPV5SGs671g6t4HxwoWg8Z",
  "key17": "5PZoDzqXk2HVmeofBid3iAs6T9n1y9RvRPLLJHYuh96ZXootU76NxLLHmEkKkBaa2rkUezZsCZ51kdvsJ9AGD9c3",
  "key18": "2tJd6BDZDqnrjxQksMQJit6CmKRRbrrpG9aQTvC4m9AEZ4smgKRbG2kCDvoBFJtUDpD5XzP4tmB6bqXPZgu4557N",
  "key19": "48sMj2ESijz2NhqaDDpucbmZrHg6YyYbpmqTuziAhAwQ327R9NjKLrjhj78uDsbEsuGdjMP8Tn2d76nRApNvSjwN",
  "key20": "4VtnvTf1YHFg9DV35y5QAPevL9wMAoXVfxavQTQzSDUzZNhfiBrvutMNFgphxZkZVw7Z68kiYKfTkSSHuLCGjETn",
  "key21": "3jo5KnJMsPL67JWueYmnrJrM8i9EgZxbJrRdsSjBtoPd8nSbisx9bKgFEs8n5CQJaWjZ4riH7gN9tL143XWcW5YS",
  "key22": "5Q5g1zhsPnKo9n94NR26tME88sdeB4vBa6A5G4sUcLyqM3KDcxzgmV2H8cA9EitnDw6y9WA1Ej5xzT9XbvJJrwLt",
  "key23": "4NBZcSrUKCG2F7iKA3xmBepSxAPmMi859LPvA5LyAGiuK8VSwuGiDv5sd69atea34ZV9KQ8v7qmMoZRTCCiPAzQc",
  "key24": "21o1vFUnccczWyrYFyNDk4UqRKvTi2yThfAn9cRakZqFFyUVDe5sPHE5HihRqDrkLffhjMZikz1R3gzGo9CiWUHx",
  "key25": "5jWazjVkKTHUJ2CWywzev94hmBhu8gonfdYR459K5byo7vxRoamFVePr36iH8Ro3fbmG7ubuU7tpcuX5i6DyLzXa",
  "key26": "4fA1XTWmRJ6EaFAR85Vh6e6FKehML6jbnryjeGk36yGsvoyoxSEmLcX66jntSxvjNq1LxPxTkGhfHANvGu3GQWoS",
  "key27": "4dMXb2ExRqPguVvH7826YbmDEjwkE8MgQKwuZqjWTMBMDULvXs6XtW3d6VEMcEq87PZCffQeVqp3nwuvdJkauWU3",
  "key28": "3YkakCfQNU8q3TjXM6au3b5tzJdaKphjRYmVc5xUibtdMYK2cpMtpgQec57GUxGMGpYHZkM2vazjSMSyvp7gdV4D",
  "key29": "41z7rWCK2dmGStwbdzhMYc9bK3d5nqmdUtsH8f2nL2R3VQTBuZr8RAX7yCEZWKgTFhbWdWnvMQkyE3V9fbfCgRf3",
  "key30": "zysGLPZPg3k5x6qi9M6952ViZhEe6Lan887hHC5fst48ztGowsdVbXSjjcAsuxTBcw2Dto9ctuXKwwK7kDZCNA3",
  "key31": "3voEZYWRKrjef4m9AhPPzv82CRjTtEkknDjqxyF7NYiJHSBYUayyyk9vPzTjXanGDXhxviB1DfG6W5PU23PcTNY9",
  "key32": "2ry2mJCt4H5zA3pCdmfdmQTRJLLHFp79e2g3q9cz6Hc5pySgLnwReGE5jRN2aUTJREbifr7b8MiKy6inFUHjuWwd",
  "key33": "4Hao9oC3GNAnh1h31ULbFMsuGFutRWM399ojNVrGEDkJH6A9evfGDYsk3c6h7RUMK4Zt8J9YXzsMtUrnu3wWW8vX",
  "key34": "2gUTqJBGmi6WQmpZhMPhpwJkJjFS1CZKUTZ6pGfS45ZatGiunQHBHiK2JxeFbpJGAej8zL1y7M4aWM4snaYzzErk",
  "key35": "2iq5DP6tiY5gSRPbTseYCQDxAmUy4nvhHLNu7svn3fVrwmHPBVctB1kiJtE2ReqvkBNaNVtwsqCSRAXcjPHxnKCH",
  "key36": "7DBQe1AHeqTGSr5sD23GM6MmRAxJcaaXNGbKirAx2CLgz8CTavWZFtM13TcYo3GezANZU225zqkZPzb5skKiCAP",
  "key37": "5j7GRY5Ho592cLnAQNLmaEcn7ZEMftv8gBSyYBvZoMSnEKkVUk4U9DudzynSivC8PX6aTfjCsAxAiHEhURQtwPmV",
  "key38": "3897QLpZA1Zex6mohmzCms1d8DvaiVftQqTc8WU92LtrjB5AWu4Dk3cmbeoFsri3mxyzYNAVY4VYHEQxwzZskp5C",
  "key39": "4cLUQLNrmiYRqQezFXhiCQZjaZL7sT6KC3Rn1XCAbAhCwfN7z6fmWxBJmYWN8h53rLVr5JJcotdf1AUCGmVaRykE",
  "key40": "551UoE3ZYrcKz32nqwTGyCcQhshUrjXtDaFQMeMzPpievyheCTcTosJ9jYTwX2Vy31Z8fHPQo5j1fJv1jwcCBYL8",
  "key41": "5BxLQQa3gQzHdHuqUhg8DHb3o2A6JCCyr47K8oFxBiNtoR925V99Tuu9CfjviMZhjd464djQ5CRautPkUSPrz8ye"
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
