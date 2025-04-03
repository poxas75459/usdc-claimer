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
    "4aJThYadtnwqxsVJD5hhKYzpJmN2yVvVZrcuNLAB88pbRJhhJixaHBxUVChc8ZYDJuLSbGULk1jSWY6dmiEDDnGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEF4bKMJM3WXKgW373eLfUfCZ1K3D4CznMpznfbPpQFaMiei2aWG3XfiDbayqeNaYvdwGrYuhgBdYKvJNLNR41g",
  "key1": "2ec9t7zkq4emfpdpDzTsTXQJwQEydY4jiFnLtGu4ESAitrngS5ZpNEtKs2RWJsAWqMJ5oz9MTBntC1HFHSP625aK",
  "key2": "3U7CNphTJ6RSYEsrs9vxevenKnSv2ccWGCyqpgxLXrY2nwn3otfxDdjxrqLgCkCfGEhwfPdGmM2vRY1YctZjYtRv",
  "key3": "4oKapd89E3U2J2UvurszfLuHqGw13Kwzrqg4znoi4Y2DCfLtm148CVmQQCivbHC4hsFUS8UmQu4krAS5wBq3XJxp",
  "key4": "pqZPbDwNce2AUegneCJYJnzzJKKoYHhfyoXWP6ieQNc5KMUJMFjno4yQGaY1yqnPxptTE3ocSYsLVrSNadvu5nm",
  "key5": "5KtEBLo8z4jEQYxbtaPCEZqyUuejmcWy4NjU485Q32Au7kTAqGbe2ZAKuh3hUUPGwwHXrrUSUVQtQs9ajRG3Autm",
  "key6": "CwLKLGybrMFCnbL3AMMKzUvTguDxafhrKdAE19QZE3fgxVQHcZLb6oShVe2KGiuATsbvhX3dwhk1mChGzwr7uCo",
  "key7": "42Ke9UruuAZg5kB11VL2t7YBJHT6PoQKsgqE1HdBheHPkqZKM4L1H3PfG75ZZTfpwcMcPBbDUX64SFsWisuZXyMq",
  "key8": "611cr4rNBD9sYjJzqfpQMCTDug92ZJFqyBuQgr4yNpdbUQ7doS6dPeFTA172CaHnD7GgitLG7Bo7J7YW9G436xLL",
  "key9": "4kftTRB7Mo7XyxS98zjziLA8APizCZcC5MkuodaPx8DxVSwQteZfJemVr1gKH1dWbY4HzNoARNivyvWBzL5kgAQ5",
  "key10": "4YNoat9bfWkBcrJTpcuaEPUBbqedfR8QsqACZUHAyFD2FNCwnrR7i4MgM5ngzaEh817Ef9sbrdL6p7vbETqCVVaV",
  "key11": "SZ25aPhaYTARsAPvXyBng2oWPsAUMknuszWXLd8DPZbDKHGpygCUqxq3gPQcrHsQNowhwCEXA2bDLmDThXtMh6j",
  "key12": "4H19eyxPTQWYJyN14Fv7goLTFbSNQHwK4tX6CuCgpokgBV9rGguSN3FXzK45GZNCNqS8VMcQFGJmkw4YxZZisVdy",
  "key13": "2EY52WDSe6ed9dHbUS5ZwciKdDbdNS4WmU8x9bRkauN8BomH7m4vTo3ewG5vBAgPi65amkyWJyGweu5m3E7pWdvm",
  "key14": "47EweMmqQbdh1rnuGroeeYYMwpCWoz4KMGhUkjJf6R5h6HWK4ngUncMwcGdavroXaSxvcHCiSVZ8WK69F6E3Xqkm",
  "key15": "RKkvHWKecnSCGLmUbc2Xr9eGReHF4gVTYgZThHRRZz1qyhTkRypvBhBfTVaeosxKqwnsBP4ygbJyHhspB4o69yh",
  "key16": "3r2PuRGmTqQ1RCV71Xocg71oqK5dKGHQ4izP77GTb6jjzZafZQWKejaPyod1brMw2GqVoQwLA8cP5n6P28mDFidi",
  "key17": "3mm323brU9trJMYeuMnb9NmgM2dDvjj7ezrtKpfqotENX8P6ivQx3c9VPqMzX6YDB4pno5mHc38WuDNH8tRrqHto",
  "key18": "4hJo61p63H6UoUC6cn6BXGuwrVG8bWyaJ9ktCMeTtqr7RXrksgXBHwZPoxGq6AHs6buRDmn1frt7bwQtcKC6SoWU",
  "key19": "2KgqRqauk8bTNAfwpPxzMfDq8kuzfUntMDZ76YhjV7YotR8PpUAbGj1bq2jQ7XfN7ZVTeyCdiwE7vBGjkRSWoESz",
  "key20": "2D5oM4ek3iVZSEvCtznVkSMF8F24faRcLTwRNejEZJqaE59dytmDZLvmt5Z5aFeN5v1XcZKKmEdMdvsYXfUz6Qhz",
  "key21": "3gSqfgJxGpG9yVmHVRZYDav91VFGnVLgMhzrffSTot8XtbuVCEVDLzJqyiGxdmVF5zYpoxdF5nLH9kd2i2P8KAFV",
  "key22": "2FvE2KfzJ2Jk724zFdUxoefDhSuuMQUDXyjHUofQUgnB69EvKiPxqkN3YYCR25i5oJ6H9HBWcynJg7Kz2k5pgXKJ",
  "key23": "28DpE7V8GvGGKJWUVU8gWErhNtM1FCL2UrCgft23Vbqwgy3mV96cLDtK5npex7yPSToHMC37HLZGxW4vXtN6junz",
  "key24": "WKChphJL3PbN7ShwFkMJmEmhiznov9xRCdypBGYs67XN1rxUuXBb8bgHUL5cDuaY98XDgMvW4Vo3UoTLSKKYE6p",
  "key25": "2VxjC3XYFNecArf1Ac22biHrdaYTP6iEBSCfX7XkoTJuHkZrP3jnNsuZpHrgjasZTE7nrx9HgsjV23nnrdNyYeQA",
  "key26": "3eopTc4YB4dGcuCAsiepfKX4gABze1QMmdBTufvmqj3dxLP4yc55XNozcUkjjcDB1C116LgkpXQB9W7gG9Xw6WnT",
  "key27": "5Arp2VXBgTE9Z1ck91XHen4R4kgxZfjZbwb3pmKsegQaM6R4YYGGNG1s3NZJ491WE58wdTZa4LhSBtuvgBy1y8cT",
  "key28": "gSgpMPcUR5sqRPmHq3rZ333rWf7pDGtnKoY9N73Fb7SQTUC9oybRrFyeJq4WQA66oYyxtq9oKJVFJXvae6qKd6c",
  "key29": "4KPMj76MTNJzp8xskt84voQ5tZbGgxrpWJXtMn88B5vDx2PBF5oHqWNWQcXUNg9dSZwfHFsC4GSNERKkjwkJL7XB",
  "key30": "2jk2VuxiQfnww3TVProne3bKFjSKD5Kw42AB6MzPdNoRLnapR5Ke6FwjGTZmfVAeTGMSXKdhFJvJqRv3dFPqV9sB",
  "key31": "56d2DMUD3zgLG2xWAmiDQyQt26yVyipRoy8MtdEQ47x13GydjBT3txzdGZTnZ5kThrYm7m7rMCqhXeExGtyJJZGx",
  "key32": "61VgCjRevTs4aj1sLBr314HzxLrdKRpDP1dvRNhYMht469ibr3ChjM16FbAxRnegbEquxUAjeiGX879y4sWZX9xc",
  "key33": "vvnFYgcyt2EsK5w9g7C1csa9Jsc5KYsYCzzVQLwLP3ENLcrniNJQBqwmEajEULVa5b6n8tVozg2CMwiTpVHGdzB",
  "key34": "5PYj9ygcf6MiGL2qSvGeiAoN8t5LBuk11GxUkQncA6nopKHJE3vzfBLAvVN2sJpUCJrprjRk1gLm8MtvLQNQmv8t",
  "key35": "51toQzcLpuk4exNyTMuGRhEH1ywDrjouSHCfNyFAAUthFcd6gY4VJpH9ZMkXvmjhTHqLT3hgjB5kN7jDYHd88uJN",
  "key36": "2MYqwxU4vntwngq94zmmbaZTVVThqxhXcHxDHC2tiWCNNawSxwoUzPumnDwFkmX3B6MgdTj7ycgVS5c4k9HftYcK",
  "key37": "5mmQDw4Uk1xcMG6gg5WtjQWNvHhwpQUBNUXxqG2Ygn49GdEKdKBdEhR8msB4j3iWVDtY6knivpkoW4mLiqmnjW12",
  "key38": "4ZzKsfBUUoKVH9RFezLJx4eEKzKkACLdCET2DbaVvK8iSroZSE4upY3HPRR7gdWfLFn7QTtbTCL3mhkfoNsfWM9y",
  "key39": "sMiSZWZsUjS2SYBYLnc8XVdfrMt3CHmcp7iWPV5NqV9Ftj1jPBLKNpkpAVTqN2ZjyJB9iuE9LvvBEJ8nNmCQdHV",
  "key40": "2fHaGum4sktv71mrRC1AjWkTFiQpugutZDHtNbzkjHdKk91f4EEQikRJ6BruoWP2jwTFhdSFHigzNW9x9nGAhYzw"
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
