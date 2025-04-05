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
    "58BdVFM7imVkYEKYuqNETsnFboXBmKivRx6SPqB2LxrjFvP3cG1X4mQZkK4GPEcVLn2VfxLxZ9YYAaaJCkHKc75G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "416mzAEtqkuEAZAf7Ywgp1ymKfeKd8mMrp6UGBZXktRh4HNmHcbiZvShq6VwxQofLMBDgVdcHvtsMwwWGur7baon",
  "key1": "5eaAPf8uRhUFngwY1BDZvAmFvXpXZG5urBPrbxGWhrof4i8Ro4NtCYLsibMR9o4miTcjkT2kKsFugkMmw1Lp9BSv",
  "key2": "5GS74SEoZXkvXD8xErqin1GuNuMxcxmy2mo8q7voYW3m34hEFiDiQoobnmw8BwQXrtQdGXWb2Nvu4MadmZaQSYub",
  "key3": "4LjQgiNoVtRbc4YyMBLhXN1MQjTeV4DbXwt5KEU7s1tLe7uEmdwBfshM8VBstgqY1NtNdnAQLU5Sv7As99paZMRE",
  "key4": "3xjyDSczAwEbrR6de4H3tZhM1q4ZMZ1NWTuGSLe16e5EcQDBL5ky3nf39e5phTtkvpmHrMP8KwCXDVaNR14ttT3N",
  "key5": "58yg4EqkfsKE4r8tjbv4gGfP2yH4pLHSzCJK9449SHfCp8s58RQs19A12ieXnbWKDfiFo5B3rGiGJ3dCdKejvtJU",
  "key6": "5qZ8jtHC4j9DTyana3JVsibwkEHHfjFUv9VScJD3rXq1XZH8ER7GdutXBP3gsVsQ9SrZoyef62wEBbRuSasGpVhj",
  "key7": "LxRLTubBfuaXsHH1ByKRwbrwwjtACw1M9x9EzaWvLRQs2zgCZhsGBXsJgV3HGgLU4CB6gJ2KpkHo8hg243jvPQJ",
  "key8": "sCAQ3kZLk7ekoXTGHZJt7d5EZwykdoia1RHvCUTjtAL8HhMJtpmhA8buMaCiErKj8MbwwmcUyEkDWHqydo55MLc",
  "key9": "5mxJkrbH3Cvm7t6SvFRmuYV2oiUbWrkM3sopfS2pGQoapUkGpEjuZ1UwaN6vyLcywqShUMwHKfGmufftBXX2mKh1",
  "key10": "5a5cTVKxq9SBzpt4p7iB3xCFFWv3Mjsnpr2uodrnhQ5i1vYF98XXE4FimfWgEesgmdyoMNtd3yaGVZiu5AgmHESZ",
  "key11": "238DoFSMwt7h2x7w53pTjU6evrrF6bAC1dbhT6tnCMRHygPWdf5bK8jGPAeAWXYwWogNB9N6352G8QegtpSKB55X",
  "key12": "4SyjjNYMr6RzZLZeNvzhoDv4jd2UT1qYXMBagZBkjCVkoQpKEV1UESpNGAKWbYgGhsYKRbZocWTdUS6N3piVYvk3",
  "key13": "4oT2qHFHfjrTtaoB2xg4WphN2nMNkKMjANM5RA2Jie88pMqmTs9M8cqFh8MnK8npDaVhT5kVzo5jWS3JR8QDFMqe",
  "key14": "g2ZHSEVeucGDNZhvuMcFRaNCoApR23nby9En8ucFt22wTx8WgZP3wN13CMcwANLeYLqi3h1mKxyv67q16bTzt8d",
  "key15": "3YSmsbC616ZGi7dxsqRurobyaG8KEEimmHm3DopfrXPoJn2bnxtM7ANSuGiqTpwzQ2HCWeH8KkBiaLwdgbadbDMo",
  "key16": "4R4XabqEZiXWjiuJ2T4JX1xLEBUCNS9eVdFwrjM7MWsoJAfWKLWXErpZoP8RJ9duFLNc65czuvf2BtYGPrvjPezA",
  "key17": "iuPfAwwbqdcVbijLFpKqJ1JYewaW6FhdwBkQrUdtuMA3giMvCXeN4v2b2n4WUVGND1DQAReWC2BaR2iiveo6ZAg",
  "key18": "4V7RpX3fC6pcgJHYF7E4Snq4oWtRynV1cwDNj6g1mp1UfXgJc77DH5LYH8c8fKHWvr8m1xS7w9R3grzPwzxn2xY3",
  "key19": "5tM4AaPxfpbc4PCn6ofjqKMLHpErY6aTmw5uKikWp3hCbiGoqbZ9uLyhB95WCZqMV6GjRHVEau4tdDJqooA2azCk",
  "key20": "2DbijXCyCjtQkimjqpPzMfoYMtU4nbjAdJcXA3NCLBszZpquCJVhV8EwsRfDLMbfcHEBcEQ7bPKAnhaynw3Vz5uq",
  "key21": "2QcNavkMgTTquK1mHEvD1b385AeNXvFQCUBqL4eckACfVx21bsgjKPmetnYBrZet31JYF5Xqu2e4UPt8uVkdVtCP",
  "key22": "HTfA1wQeUBuvoYs2kS3g9oXGAr8xYowxeox2XVs1NZSGh9DbieyS3NrZQj8T382mVzGSa3qiyuQYHXbkhatiVZ5",
  "key23": "2AG9C2rSXphstQvwLqMsdtUV2RfnQXCVT5aYWRHCXtf72aeQkyonaziMzr1d8hdHKbQ8tTc37wJfTjgYMqJ4FxX6",
  "key24": "4QrufXSwKyRZkMwCQiwZLSe7zGRGHgHdNEtvXftRoitXV9qVmW6gpJNE9J5fBthjPEzABHbE138HQih3dZZc7YTR",
  "key25": "317Cxc9KtNYfVUEi2DoQEeBJM1999htjyCojJraT2ga67fxniWRYunYSPJv6BxWE43YsQvAJ1uHaCtUNJEDdykQt",
  "key26": "4pNogh66QGk96nfxbGs7sqKN8tcx2nkHGk2Ungh5SqLMDTeeFCmA48ESxs5UhGU76YyVG56aK5NjUVCpLxabhRjj",
  "key27": "4UFpXRrRnNUQCrj1CH8un3Xiy2WUGwkVXMbX8SiXVbtCvNZ393QQZy2Q6ivXnfjDJByvjPh7Ckh6iJdtZF6AyQ7v",
  "key28": "5JSFK7RLiNizXghombVGp4hFtkbs8CqT7zPUHTfYBQ6HqWHS4SoNMfGL7tyr6PZ2pqyyqpS9zqWsQz1G3U5idRac",
  "key29": "5oSfHssWthfojMgPH1C3YszyTLQzafRDFyLmVN1yqW9G1LFWSZsNbevsCg2aEixMH4BhBNySW5sFuwdHkpynLeNm",
  "key30": "4yRbanqReQSUXCv7SL1jmDtorB1Muhu4Bw3CoogmLc1b9L3tuubEWy7jfYLLry4JeKFHPDB3Mw8zS1W942AS6FN6",
  "key31": "2kFHKdsrBEqBfLrFn5uXc9uR5rdZfE1d6Lwb3sGv4P6BzUgMwgUtqspHwsLX3BDSCusmx4wXtgwY4xjkHooPr99j",
  "key32": "3an5D8oTu7H5Nm5e41XLCsyGP79RspN1HFihGfsPaEuBBw2QkgdufuLJ38fsc5fmLm3naP1aXuWJfG55Az9yj6T4",
  "key33": "45dNY1nC8FChvXfX3hSfdSmeeK211xSqMtvDdgggxwTeXALmqeaKVtLvwv96Fxr35wANKehHfkrrF8JhBKuDzkDn",
  "key34": "54PqmQY4ZX4npVhN4qkLGVimhbV5EphsqwSpBT4KkvF28DRT5YgwBYr2d3eGARZXXu478zzkCSdzKnSXzJWVRwvc",
  "key35": "4YaHdvafDPWuWeNmwUxfx4joPKW6jpZyEnDin6ZxAotf3U6fhFWC1WcWPzScCTMh8EQPdPiP7re2iLmLGvGA7sTh",
  "key36": "dEYiFR49uD53wEDnsHZRGx5o9Lqrw746Wb4ymBVEXshLVkvazYdMY5ymSwkiWKUoi5ADJqHDhaZ7YcxxPrPcgNU",
  "key37": "eyCWjUruqT3gxHyhhAZfpvpwbJi7JgY6woUEWMkfpcp8BLD5siC9Do3wYzerqYqYzkZfw9CBu5utpXjMGpwXub7"
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
