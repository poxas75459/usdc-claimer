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
    "57i3uvmRmoMEpXx62YM6oLVdQCifUCUnBsTmsp1fM2kaxsCuVXwA5R5Nvn1c2TVkhWBU27e75nds5UsHA2ZJfieD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2moahbDdYwuGNeS8QHPfpZeT1VsahTCQfmD5ebsaaFUVCUEYp6ipY64VM1nrUpaD5BTgTLj6hvS18GiexQxua3z8",
  "key1": "uyVDSJVNw7njKkj2TcuYP6mMHETsJi2K9v6dTcPbekawnWW2siSvxJVcCtAUUEQz31zaPkHnnvvzDHe6JZtiAso",
  "key2": "2fTHf3H9P3qfysaXtwE4sf71h5LzVcmUH7xaeQJwGtZiF79FBPSX7z2VVKMLWukRpdLmZia9BgP5LPBVvc2sF3Fv",
  "key3": "3wP6uf5JWJCK6LopXN9B54ReSBHZBRxGAbtKej4YHbqaRJ7jUVLFBFkW6cj82VdPkc7xsMp7KXH6kPhfiVQacBhe",
  "key4": "51zTyyPA5QtdjC5dcyLczBBEvJY8Sm9wNFQEbwuE5kPqjp99tjrGmEY9WFaMGvwe5M18i7zEBZnmWeNjAtsNjfZL",
  "key5": "fcu2XzdPxSqbPjR69JUv2fiXRBKBKkWeLL1aH28r93pAhUFnty4FLjdb6QEzubXXSwDXrmkbn4xeiEWgpVyKEDT",
  "key6": "5sFS7pDaRW3eLbcr575EdMK6cb3JGpHfGh8yHYJgguHSsndaoHa5XmbAGMiUEYJaLmU5YxMm5JiZ1zDw7cV7ThdK",
  "key7": "42Y7qtPri8SRx3BPjCbbDv5rdv92BsHfz1VkxcejKLgtptGkfB9KPpSTjaNedUyxWnTj4w4GsUYGxpaTSHB4asfG",
  "key8": "5rB5FsNaHDSNg2X6X3JyrPFyn1pokRcwvREYQXp8JUbfxNkniid1bUZQkenLUCfqi4BfgGdB4FZUD194H4BMmGeT",
  "key9": "4kLW9ZUcXefxTj7a5EPB6M53bwh8QjrsQKMMCMAoX2VREKMVj3ZFtVaiagGBmsfjk1U5SEoocB6kr3gXPzaf6T7J",
  "key10": "3Vmv3ZtDTGWkr69ysKYuq8MFPe7dMZRy8PYJaQVeGoQLNV5BxfBiEbwmdp3riBgvCm3SiUMsoNjFvovopuhScugw",
  "key11": "8N1ja3tfoN53FiCqPRUn9XdRjM9h5FzP6Yq3Uon4ndFQ82cWwsw5qH4qdmReToZLfdYAVgzoGnQG2nkNDjTuz2w",
  "key12": "3x4Fk8vJkxrDqd6jh7oJFZjwbKW3WpvqmtUnWrAqoMkQHuLEzjARq9utuL4xifHH1FX6YtthiTs8rsU6o3BaxLti",
  "key13": "2MXXub48yUXkCuqYSEKr1P3B6vh2tZo7FLcWwNML84hvXT88ug2JDf6Sku2542KCwSNMsyaVmAz76RjRnmufoTgi",
  "key14": "2sZtntnxTuhjH5bN1qHxfrvj5aYBkAqiuKKMxdB1iYyAoc2qxw7y3KX3VdxWnTVKkPD2azEPRu8ZM5QbSisBBDUo",
  "key15": "5yjyxMCT8RLyiNgHTsMXCMXbhRiCHdQsy5MRaQjUpgYjbwDr8RGAnEvHvVDkx2MfPnbn7ysiNLGwEp4bAfBBNoxn",
  "key16": "4NcYtYaw2jn8Q69ug1jxzPMe9PGZWw82BrZefkuipjBKZsqvZxXHRr4Nhi12A2B7YcHCTXQwRpv4zRLNQXzcam8o",
  "key17": "43483u7rzse7yZ7z6n74xEk1RgiRU9rudKVY14ombN4wV3P8mXeLNidkBfuoFAZuMfoXHs3KpTdaCAoUzSWbYDH",
  "key18": "5ynHdmqhZPMm4DTQWAPNZMFo6YBbAzLWLZnKH9bQYFH79w6zRLom7tUGBzqjHaU8tTxuM4mp3FpuNT7sn79gttDC",
  "key19": "zmgtVChvBcopfTnHewUoTP9th3sdpiHwSbiWzqib8kiqCuJMrzHNXL1yg7Ux9Ct1MQkfNcm2NDZzcg9ZtCyPerG",
  "key20": "4f6ApwStLoLwsJ9mTXXgwg3jfCR2ncDdXkuMmYmpexrzsNUVxyVgkcGF2AF77dzKE9EvG68Tc6xigaRen7u9SsVN",
  "key21": "28Kq23WGWtXNivF37ynMB6iBRij9Yi5cS4wKiGcGpcoEr4Zm6cwcG6T8hiD7UAAqXuCkB5FHvD3gXZNkU6DHA3i3",
  "key22": "2zBjZzXBX1kYKwdL2SKu5vCE3BffkWrCCgjNq5ak8AH44ptphX6WoiAeCSFegq45rWeL8DKG45PFpCpc3ThenmiH",
  "key23": "2GJjf6is3TVFR7nDvCGMTBFj8aSL9V2R7k1WTwKeyCDaNPGEFg3FW6eyaFyBXZYsTnr2JXv88NbP4jJGLLD5CjT",
  "key24": "48gx5AHMqCRfLiR15FqDtjLaQhFKdhFKMkxc1DkVwJzxJNVXqRD9MZvEqLvny22zMKbdiUHXp5LsV41jQgLNMeMx",
  "key25": "4FmytrgdrtZQWfJG7zcG61H43cmER2Ew8HrrwLm7xoFySQsm4ngMMevecHeRLKmttaLCdsie4Ykb1eXb4x2EmoE",
  "key26": "oNza8NGV55vyeZApprAhA7Qts1s3Dv5WwgY8o4cDsjHqnGopdmpQn2HUzFrwQFCwzhiXkww7WZivKAy98L12qyL",
  "key27": "36yRUifTqufcwz4ThDqMq41Zk3BiVfFxPMGcWToLAJtLeeCY7GjQFYpF1TDuwU8rFiSt37eApPjnHJ4zENig9LoG",
  "key28": "CHr6RWZBWAX6PJGYsBjpeHQGnu9juNvCkcQmb64cWXotwrn2jKsCvbZ3mRg7myuYLjybvbzdEeWXrhKN4sfXYcv",
  "key29": "2SCt45UgQGDygwk5zqhrr5Qp6rSJ2TuE65hsGxJU3cPEuD48SSmgyXPSobTNULx1W2Vvx2TjDzFuAorDHphYHyiZ",
  "key30": "25mk4jz24k9SNYii8VdLv5FEdY3S3rabUcRCuK2rfB6VgVbABUp2At62wdpevjNG4BAVp9fD4VYonZC2JMYisYko",
  "key31": "5TreecuLzP6XcmYHAUmsoU63W5NC2H2jUoN54EEwrkvXTH5MkAc67SA29cHWdcUNWuEaca7KFTz886hTxSjWzcGY",
  "key32": "4HRS8TSur31SiW7xGUTKx5NKbwihCZ8yH2k9Lr7u2ximPgU2uDbMWVTLXzgfTgAsgM9aLtzGdociASqgvh5LBH6T",
  "key33": "3cKDFVtrB1sq2DqKpyzFEpjPDoZUNs79hi6UT2VSk2UMBqirX25A4tX8vASRsxmXSc5MyrP9pACRtRoTvJh5C7bN",
  "key34": "5sWipTXgLoL4KiQeHHDBoTUpztdXCQfDDbCpDybhQp4R5sDSrSrJxZRZo3rkg8ULdjdosbuGGC2vhqMRh1Y38Hm7",
  "key35": "2bM3FA54Btk7CFFzQhMr8Gwm7cKBZAo8rku4xFrhtRRfmDXZA6NvRKeG1vsgCa4Rgm1WCqeteui8Hn6FBkizsqBS",
  "key36": "4dfW3hF3civBKk2QbzsJKAMb7Z1LJio8XccT2XtQscvL9xYUg5g2yaGokrV63NqGTo5Qk5odmVhYdEVvX614cbuY",
  "key37": "4NSUN7ui4r8HtaT57xvvXu8GaG8yswBVGpXVRcb1cLorA7RqJG3sP1DPJMDCGw7qLciSZA7EDB14sdrkfuweWv5x",
  "key38": "4QXpnp2yZAcqe5CYWrxnTqLMwSP69gG4RQfT1bHbisDXChRTRZmFFNCMP5Q2DKUGeV3mpi3sThVmVVGPRRnD7tCu",
  "key39": "5nUfNMsJdVx13pdGRC9BNg1NYAYbGsjkmFuQY32s74x8ynedqGzP7x1DpHRmtbrqtBrJQF2yEkrmDjh8f7ET5PuQ",
  "key40": "4Rnka5DNFeEBEPgcWbHvAp2LkDC4p37mPbDbH3TpssBh1arGz74TUptYDGifCAot7ZxZz48WxZifrSEhZAhrrfXG",
  "key41": "4qXTHYEYv5dr8GgZfYWgnUFBbkuVFkAj9aSfNgSKRRWXjHxFnJMNZkXTXrkY6FWVG9fu6XNLk4TH962P42QbfoG1",
  "key42": "4KdhyqaKJiEsk5BDdsPfqggyi1QNbtzGQQykBTAhctQiKvevqo7CcZKA8aegD2SXtewxZE3DcQQ9YhcyFA6dmrXg",
  "key43": "2p3VKDX44mX17utcExF27iRkthMWMRsPQL7Jnx7RAUNrGeDkrXpJAEh7NLYDEtGvTZGQGRXoCeF98rXF1M2qzxz",
  "key44": "3h81MFa9kot9wZRjgwvYLcDVMkQix6a6EUdJsmegpLhdieUYtxHY71BQzYfdwh7ZvvsuPhLKTTG56cjsMfD7agF1",
  "key45": "2rTnv1N4iAR9mAq96tD2UcP3FkTdqQKKXaPyoQ8HAsAAcTE3kyY8YV1rjzZ8mwsTytV2XRra643ZFuvstUFKsrHB",
  "key46": "3b9fvkV1QzLHaD28AWaoq928cL1m67kyWEmu2nJkfYdecZ6Y7XoMUD7gJiKArm8BBUXHJyC7W8ZmPYuVEpSJreZv",
  "key47": "4jvX9WEmr8hsQuikDz729pZEs15TePzztnscyHSD6uReFcYSxKAYquxgxU1pZFptHuyzgSH4Gm9EfA5QLs2sAFYz",
  "key48": "3HfcHxLbf3VsACeCD47qynxJt8aJsX1oCAEZf71MnDgRYQMXY2haSyNdGzaTpthd4E42e2tutjgQvAtcwM4w8uVR"
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
