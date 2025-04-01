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
    "2SbUBa2jZsxFCQ6e548ZDAWSwpZPb3ZvmLw6UT4VzFPbxrbbgMAmvqaMt1NXTnoXhhVEG9xXZqaiDWwriKfYLvne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPrcHWFBCCZpm9DvWaCbqQ1WUHjpfLC6VvmfnhAgJyunsU26AX22oDdGu1CNRSdaCpu8Q1o6oP3uADTDw5MoHuT",
  "key1": "4hcRtYsWAorNSjfPeRvU4qxi2aDj72wzg5sezYYi3YmWWouUm4kPyJTbKqFTHTS43b8XT8U2S2EXSvkNpGgLa5cM",
  "key2": "3UmEfohDC1LKYkj9TqYHmjWnM2JhBXXXYxtVJCZXAgUbSkwn4hRCUbxTvYcSXc1qaUGUfJnMcGjHEzwNYW3zzBY1",
  "key3": "28SvDKNqSbcnbassU3P9XuPzbzRqtMqjfJFdw5h4FPAmdp35UiqEwZy4aYVYX5CPBXC4gt5ehi3ZcWv2bX7Qc92o",
  "key4": "3qefZoeaitRqSJt9atxJKFMbvFbXYQUgZbAihcbXgBBBnJzoxZDJweh57EDJwonLGk5JUZrhC6Ete51SUZMEusLy",
  "key5": "2NxxnW3HXWHgRoE2tU4AmghyrftqUZhjvW1igZdkTjqSnQ3uC3ZbjoAsMRn6Rc2zUVf5ESMKCmUrrjFW5ZB28tST",
  "key6": "58Etp5RZtZV4yJpaKtg1e7cN2zLF7VXXuAc6LSL3sazCeLKnz9qXshd2NK5WpAuyTaxv48H7yQJGdt1i9XtcsDzM",
  "key7": "2fGkyLmVqYK9w2q5Ts9YQ1JaEMjsdsAJNDwCPDvuQHqDyLNx7bHpT1tzPA94j5xqsaWSHsBTXY9cJqJ19UoMg1EC",
  "key8": "kebkp4rrwU23We3MGfRzHrPcVMzodeEA6Rk3MNDoQFsS8HoduJxothdaX8W7rPB8iUgAPpwvm1KXXDuUKRbNyE8",
  "key9": "3KVPKDiit9TDfrv4sqbxQJc21gz9DpGLgei9THJRpR74n1wd1swCZ6ZoeiurMnp2nvLJHhVupPzyEwdE8hgPKTTq",
  "key10": "4gENFs1f34EKrCFY5B6sDJWqZSW7D6251w9rntzYZPRGQLEjw8m4Hy3uoS8jHoN42oRGPrrFkejYrj6pBeVA3C1z",
  "key11": "5adFJBVTxH2bsFKyDu6kussu1dGFQDaLXWgTntFqr9NS1LjeFfhdVY6D9FjqS2zURyobjCv4ceNu23SKG7fuinhZ",
  "key12": "2pfrJZeih67iW9zXhbWFjK9XrrtFeqfEVrv2tBKqeYpzjBL29rhJTB8VFwWMLpKjDpKpcxgDEijVr6ha6ypSefLu",
  "key13": "3dkT9PuTXuHEXydizx4mw8SSvBvhjJbiPoyMYvVD14wbXM5d1feBDA6258rrikMtm6beWUigHbSAN89RymBBUbWx",
  "key14": "2CN6JYYocf8NuSE7kz4F9MeR6LyeHSRfAbh1k7ntHCs3MVN2mYh71JMumJNacW5gJjJ8VLbtWvTXNq5qjTdcdwuh",
  "key15": "5wzuPYUvj9YmyoVGGc71a1qPHwwTEpPnjvsWB4u521u7yQwLQZhUuu3ucEQisLJhRups3jxX7rJubbFeNDNsx4VA",
  "key16": "siKU7E6CaTRyqQk7hNTSkg4r5kVy5G7JnKGMnGJqr4pN37t3Vyhkxqgk8ZLBDzpEu73CSCjHjCFqMD4bWu1trJa",
  "key17": "5A77CSxRrA55ZrsrpbiwgA1Hn7tqJiEwifYCdwbyfxTF44esBjDP7SrRTBQTL7brjAgQDtzTcCFbFFzp6tTDP19V",
  "key18": "2ZbBYjCyVxXrNyWnnCzpHmXF1K6Nv6zwoSHbQM2wAa4aTvHjAsHc2RkqqL88T6B7rVUEfpb5VJvPRomgppuFNqHq",
  "key19": "3msYsVJvMLYjy98e3duYsM1GXt5dNEqW5PCTBMJMUqqotLLErgJsJ1KQSsS5JU7UtmgYRrRcXgYd29Bgmx52SrB6",
  "key20": "5u9habf5d5aoMZVbMGchfUa5Ndb3FGesXRMrKrqydd7tV4CbCiWEBA8GmnRG15HvH1ym8RSr11RgjHytfvpbBPWv",
  "key21": "1jsWh42qSrrxQrdBH9MzFtLVVp4n1B7YEJPWpXJPtuU5Q2z3qQwgmx7fkmTDszieGho9q6AjyXPgZ4Hkw3Q4GHL",
  "key22": "Bw9Bg3RwRbiBSq1ueHYzApagiiik4KVvNf7iLH173yVvAXRNagDir4dBr393tyXhqw4tjJPz3andTB1QBEjtvdc",
  "key23": "44acgCuv4ykTjVqZBFYcWHNmCvMj6w1xEu5UkH3nJpZsAASuuSspbT9XBtPFaEydc67ej4nwTznzn2NHWM5fzP7S",
  "key24": "2it6arsSnWT4DW5Aub9XajWHwDTE5hKzDQLyaoQta1oKuEcSuez9WnSyataLwjxCXPu7Zp3ns7PqEwR3hN1doTKN",
  "key25": "3pzUyH5whVA9JG8ZYCZWGpLCYdbDzpTK31UfK61pUAcaWCcu36bvotnZrHSxSj4HUnojn955AN63S2byHH3c34NB",
  "key26": "5YwLr8h15DRoh624Rr1MrFejTx69925uCRTMvJc4iY68YfsnxsbkSkXnB24ttrNbTqZTa16EWg7yfB87ow7rKGdL",
  "key27": "N2k6kbMk48WkyStSvRygv1cnanvij6UVjaxZsFF6SvLrRjxmt6g7JBv56WfEYWW3pgHgWc366LSNWTHGjVZg4Ty",
  "key28": "2yGHLMGS8CiTwHdgsJ5nYGs51QFhVwumDb9XMZP5ydHWLBR48t75Xoh9XMPo7g6b4uPaLMxFnhMzgBka5t1G5h6x",
  "key29": "4pt9GkgsmQ5yH5kVcY2muJyLTpxiJCirj2wDno15tcTdChJcNZAwoUd8sTJiiijMGTF3XnqK17w7tBFJkMxc3Zpn",
  "key30": "nwvxCvS6YRuuuAj8WuAsytbSPdVFngZ1cpS72RXUSSzbe6Z3uVGtLeKKNZ3EAqDB7ggqb5ieUNhBoPj88LChSvD",
  "key31": "58qQtj1oJ86CBUKFKatVzSfVoBU8jaABvz3bDc2Kx6RNcbd9ZPf6aRCv4rXpwPGYMZNrvThxhGtXmq7pPNciBvEc",
  "key32": "52fNEzoun2Nz4Gv8dCTh7vQncU4LxkJ8vMfoVS8CWeiWeh16TMDmaBweh59rzWTwvfwMWdXU6XA4Bx1jfNnF71E2",
  "key33": "DTfw4MAJkVJiEDmQJxEgdnUFL8QSQZ4JVNVzcnBYamgDMPF3BPqrKBGxP7WrpgF8ASFbMoEKaJogJmthSGGaVZF",
  "key34": "2S6qScHC5TaJxRZNxeYwKh6LKJ9hwyCCCxQTnUCG2xhbtsBumbgQH89iCgXmmUcgcaK6w9pLp5aoV9adCuKmJZ7T",
  "key35": "4qcsUhkcMMHByUyqEjSrRJ59UBpCYrD6ZVu39WSm17TsGdcKeAWRm5d3AE8UWuaVFf1B1xXRjJKsucgtwxXPHbsj",
  "key36": "mHCfR7YX86CoWDX8mzVnsxUyC4qaetJyqD1evuDTzjvgWWSisaRua8gpH2zPC2sQheQJ9zuXJ7A3EBk47YgWjid",
  "key37": "3zCZM9VhCi6h8cwue2iuiwHdPnJ1aghbkYMSh1hYBqVVmBhS3FRGUhs1aUhZbykRgM7mFSD8NxVcFPddtcNfaW8R",
  "key38": "3aDsvFVEizepgHCzYMPuVF2H17Z3E2cuqrnrKtazGBpMVwJGi9ipt3hNZhnyiPZfzXzbitB18Yjh3QSZwwNZ4RYq"
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
