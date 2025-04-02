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
    "5HFB7DSBjDvkfPxx5mUfaueU5aAViqyRPiM3AEdDqsFt42QgfKjrKD9YnShpHxUCs3xyJsBvHktDFedgrEtYPjuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwFoJNjuLEZQJvv1Fgp3Jqh6mMcWa7fCFWaPZCk8QVqpko7hrDHeVTFcqRV8TR1PHF5FSCv7oWEY4p7BuZNjg5h",
  "key1": "4EuYJaNGQKRt4EKxy5415B7sTRaewp8Q7oJNyyTpvwfNPG6uwizK4K2UvYwfCLizB7xtrVA6ddqbtqeBdx5ydCZf",
  "key2": "311k3h52vd91dRZiUuKdm7FAHFfXBJCZfc9mNBTChaVc3msw4WcJhTG5p49pwSFpzmsMmNqcujXg9Huo71v5vHBj",
  "key3": "25G6QiVPXCFWwepwNQATGokGYk1kyd7anb5ibCb5yiENMiKXgcwjd1UXkKGN4EkcdKqTicg5BeqyAegFGQEhV9Xa",
  "key4": "63azTi6fnfi3Cmbgs6ZBC17rtdkEWghxZoAEf56TtGsD7fGAPA8n4H4VpkeCbnJnuh78qhdgZeJbqtFN6s5AaE2W",
  "key5": "4o7DUC2JogfxRUwerdVVKx2P95PtZstXJ3mNSE91qEWnm56Bex8K24wAUaboEM7CpU4STUvJu28FC6rhr8nQKcs9",
  "key6": "4xAeUSfW53vSo5yEe3LgaTaSHbsSEAbNhdJPdV1tyaRoRAeHGSdmtJt7yfAskyYLiKFZSNxZfdhUgwXXueH8nTrq",
  "key7": "2E8eRM5ZEWxPYkxj9sdPxAqV88j3A31ZViR8P9hjHS8cL4n2XT8c7J8oLmQpZvDXHE1yUZxHcijVC6octDQoy2PH",
  "key8": "3auTTAVoZC8vwyv8boMu9DYzotjdonUrWqsZHJbhdshMXThJoy89JqPV21kAq585BYQ2KjnLTKWJTNqmdeBPuSst",
  "key9": "4HLXy8tBSw2wnokaXkGtrdFEDTqiVLFAeXSJhtUHGo58h5kGPSRFGjYBuXE7vn6uRc5YJX2czJpWCpoQTS5ZSAWs",
  "key10": "4r3FFh3d3ZqNRfQEvtDgfM6VWkPsLRaX6mh1BJWHwtwP95hAP42s6Rw6wqSPXqArYASdRDYCpuoGj2XxYZvWahKX",
  "key11": "4nEUPz4jdfKQgyPLPh29BXtXFfkKwLF1GcCKjtCBhGxPGdaUZe449wcDfHqXqaVPcgAZEwZyWv1GKbi3YYPRB7Fs",
  "key12": "4rLc1vRnKfttAZQzT6y5wEKgiTpiVAaauE438E8T83KFcL9is4FjAhmBXDuEyubu1kZqeay7NhQbSNzAepYdM5WZ",
  "key13": "4q8BxhmV4p23isyhkVydukmMbv8fEPkexPdjSGwauZv49EbToMKc6yMoW5gLWTTWv5jg5e6NS8EqL3GEhTvAVtAU",
  "key14": "3mBKQGbix1DPrs4QiUFn6xkMP4wxZkVWagvNRwDy3F8XzUBkb5Cgk25B2M1NRMnCgx4yrYfRoSSiY6xNDMc93ggF",
  "key15": "8f9DGHQAzs2m4vSfTCMAtV5JiFZvhhuDhSurjMfCd36W197eMxi1GhKMYyTY77S4rpNcQKZXP1Qbmcr33rUPWYD",
  "key16": "LHxzuUaLpb54LjCQxxYoFSohRksxMdxwMLyBTicD9XfCH1EtohtAnsnchFkbLcMpVRTPNxux3ZwafQsxZwtewjx",
  "key17": "58iAftZYkxoGWwG2v7sKV1vwTi3xPrYNer9D2TbcQEVMcTpEu3ZqfzoFg26qg6BZTNthkN58i2n3PWpRNxG4n14X",
  "key18": "3pmAU86LiJkJ3YbdbmXGfNWTcvUqnRUGLHzdjEgwLRp5YpPdif66XhXdsPvg3o2MQbfzEE32qfpbt8mm1dzu61SA",
  "key19": "VePKhMcY48cwLu1tq35fLyEbewHgXoiRwXTxR2Ba9i2tfNhfXqQachtdzFZB9A4A9x5ax2weayEV3YZrPmDrXvP",
  "key20": "5MFsAQKQfNtQx79kDdGYHW46yACnM6GWdHFrwSrtRjrsurnKVMawdxTADyRUj5XmZEBFtqMquAQXahZw8Dk1mJio",
  "key21": "3fNZoC8miW13y2MhqD3CGyFg6dhHqwAwj7C4J14GcbT3WF6nRgUMGWo4bNFAmWCbigUQPbVmAtQz1ygdjx31UGtz",
  "key22": "66PLoeg348rXtxDmw8f44gmkCaokoUJZjnnmSj9FVrgva37hgRtHk62jk7BbRYmJgLa1KQykFtXixJHbejh7PDTw",
  "key23": "5hxeDoDvM7np74djBBhTLPka8Hsa1tTUMbumhB8722bfhYM4u9yPezc6z3MA6DUHP5rzFaZ4fWusJreZRQDBxmC1",
  "key24": "1qcEA5hxu7hF3DdCwjgqy4yGvdqAcverpKko7PxBnjTCBMiHPk5UvZDEoHqFAhFZU1GWnHLoQmSprbRBSmowjLk",
  "key25": "4xj85x674wwBvhGsastD9xYimum4zSLuVWSzMJHiDrBY3CpJcTsGv4Ha5bxy9X5DMHpByb99k82GgFkmtu5bDGeb",
  "key26": "2HKpW5oGivgT5rpwV4yTYaK62AeHRNSUk4iXD9us4AaCfKgyeHJgqrYaepBSxaeBE3nQxtzvvpkeN8Yiu3WCGaFw",
  "key27": "5DrFRKjgHQfHXgzDLjQvmw6nMEV3AofgEriKsyF5AFuRCF1QkjPvvpq4TkptFoNFq1pN3Ymv4LELGnJkAPV18HQG",
  "key28": "4C6Qj8MiAYvFVGaDPjR4S1XGkSv3DcCfjxreKw65hcSPsKsoSf9oWi1m13CdP2Eibz2RodPZvmWNkgsMEY5T81DG",
  "key29": "65owLqjoadfi2DoGr6coB4WNa9a56aM3ccdM4yw776MGZe9D47Ef8YAdwnsPPv6YaRvdSZiQ8z34vTaNgCwQsefP",
  "key30": "2Js2gtXHAp6gLBsAWqfFz8RZ3CnJy4YEQbdJhV622T7DS5bdxfs9PavHBf3WFRXMcMbEc6kzf8eUxqtZRf5FSkgc",
  "key31": "MeZ69w7Lhy9dnfYSmEa7Ykg25ZBgDhBxy59CeytKWXDw1CNLu7TFmDHWVw1M6EgkYLdbei1kUzc3fDxESck4vTk",
  "key32": "5StAto9HJRxq2nS6VrpvqufqUCcowWUWQzqgTs8pFnWUWTRjVVHszXMET3n8roDHHjtk1WcsPT5YpsajwZxtDsqG",
  "key33": "4wYaoRQPVhmnS2xH9BzfRSAowdTpauXnPy8rDeuHEor24uJHnRZnAwRPnPEs6HHjzMzGKGjSGrfTdiiytwbJgFWb",
  "key34": "qb9qxNpmkjE8bHRb1hqaRHosWFDRDNBvehb7RnV8Q1H1FPjE5X3TUP2PE9CsLj7D3MFnGpxZPrt3THXFJv8unb3",
  "key35": "22mRx8Cepiu8hQawGgRWwVPT94mx2qw7hUJJ6Lawoekcv8QFDTbLannQkMsFUebxFxTEe3F6woMB1rBigAzScoDQ",
  "key36": "zZ34LFGLdjbSJp2wsa5n8JkfoA3qoCW1PQTE5wdGV4nBr7Eum5GD4EdfGHYKafhZUNiL9vxUQ1RrWXKPrnqUfr8",
  "key37": "4oiMZ9rogHGjfRP5FtxSkpYao2AMXbQVBTfmBEMdANn9cqbameELz2QiZQT9X9K3cmr4ztzosTTdiwTEtczkAy3h",
  "key38": "5iqf3c4gY3PF6WAKRdimLqUQTzPoqeT7tpyhd4gFwhKFFLfbpevLCsPv4jk5SGzqDJyXEDCJhjmyDZiQRGvaFsfe",
  "key39": "5u2sF1FYadRKLmSdjXtAVUZcRpEXY1qyPkVpdQbd6fy7c6W9qno9jkqRy23ZBHzTER4QCCdEuWKsAZahxcbuJUZZ",
  "key40": "3Y3poKznj7QLvzzCMrEQGi2GTLzpTUwArdUNue3LUCBaygNzZKziNB5arrVR2bmZ6YqFkuMUkKmvRLWP7mLBPNW",
  "key41": "picBk87CDnbSWAAqCQ8hKTNJTuMH4Z1GxPUav4izu8kRh3PdsRFdKH4G62Qufn2mzwH3wRjERG8VCwHCo8AcZpJ",
  "key42": "x8eE9ZCELx6s2FbkPENEEcGkuBfNYPPkhm2dhWWSmRbHVpx2qLTkCJ4YVgzcSLSg3FVi5RRgSh7r4vd4aEKqtwN",
  "key43": "4KK5RCDGmQsRYiBDhqyGEYVkUd3Cu92rULbjyAeSaVFxYF4zvyTDfZsr5A6aAV7kBUShvgHx8KL9N18rJgxo1fnF",
  "key44": "VEn7uLAk9fmA5onGGu6T4zLLzihedYfCV68PHtw8bLWNQSxLmo2MfANmFQcamePMcfsspCceixphHqfQcQhnpsp",
  "key45": "8GErQHBRc5ySGzVdx5RVniZ3dYWpo6txYV78HJ4paPkaWX4mriZH4fgqaXEaq7xCYhrVCniYRForSELE8qizmU1",
  "key46": "4PPuvaXVFBkzKXLDLRCjPZiNeULxHmKB2ZVgHysuGkRZUktddJ65XKZ9J254omd3Mt8f6BiCLYaSazdJewei6X8q"
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
