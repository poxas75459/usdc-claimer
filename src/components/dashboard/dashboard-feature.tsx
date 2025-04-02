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
    "5YRPyfpGRzs57mPpX77dD8XbMTMhXyiFYsUBEotX4Pc2943wN8R1FwdoABJ7hemo7faQmC3w5gg3pFg71SL6SDu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aq3iLvh3Qw9ffrnrYQbbC4sL6kUcU3k2BcWtzQCB3eb59S8ch2GimJaUYr7SRTmDqbmPF96WoqDoDE52x4XkoVn",
  "key1": "3hyhJ2mdG2QBbn86k4ouCuzUh6ShnF89pnccAs6P17iJZk9Zo5dM26XBwEtbn4K1CFs6ZSnqyoZdxAUrDYWkyGzV",
  "key2": "2MYbctHhYEePfr13gvfyA8SdnifFvoHAZECGQfN4Zv1aiPScKyxH4dbEpYHFGr9A4AfFNxxzHGn2Sj964yCYpeXd",
  "key3": "2FBsU1dZuYK9rwEtEyKRhkXgdUpTWdK2rAqYzkgdFfvqWpTavJjfa4iGBumDvVC2Lu6vtwRiz82znBpqJXFCQdrV",
  "key4": "4fwihrg7FXhS5MZB1Nzdi9G9fo6NmKRWxJ8gt7Nk5rTiLY2prCdUjMjzGjDo1Dxa1Z3Vb36nZmbZnSkimgGfh5cU",
  "key5": "3vsLE3GYxtdmuF5651k8DkJ5bP6P1qsWrU8ZqTVidHRxuF9zdLEaDdoQ5tijZ9xqRk7a3wi2VZPz7t8wTERw6fEn",
  "key6": "5MPDzHpecx8Lowu9X8rXSiW22aeiwwCQevz57hycgfwYgPF2htz9y5ph9mxydwoTrvC3JA2Dpv7H7bxbthGjkhf7",
  "key7": "K4iwJXkU6VpXGxuQRR2LsqQv2VyEA66SCptimm73NjwvvZnu5x2Fopien35Vjiznq4yKR59uhiCfnsTXkExTcjp",
  "key8": "22T4x9cVseNbrf2KSsMCBMb8N3he3Q2eVYtqBS38ag1vkE5WEBMxsdVHvtYBJJgor1X8zrtpmmmFQvZ1KK65nWYV",
  "key9": "2N57cC3dxbRFSddHdKPUoExmzEEAD2WMre312LbyhLswJ6JQzfByJcUyx1arwn3enqctxsxWhYxTkkJ1MjgRFLxL",
  "key10": "4y7NznZXBLfBpNw9cRp4ZRWVaGj9cJQP97bakW4bECa1dZDTkbvz4N6bhYs77bdLXdDUDFHVWtVYS337mJtY2mV3",
  "key11": "3d4NM5kAv1vApDtboJAN1Gz1WDnEzLZtBKUJM2PjK85pee5Vy2XgfJGhahxjUxafijmfhRPVP8Fgrh4dDqxAvq2w",
  "key12": "4AjUxqGAnecdcET3Hu3t7uLEvoP8A1k1DD3HARb4Moe1LzJyxu4ga3cn8ZMMDeWRQsGSYRXPKCYMgCAnoYZGk9P8",
  "key13": "4P2vvZZUKU821hMQsyZ1XbNvEMwo7w6kX9cR2Y2ZckjZ8QPcA5QDjFLXPZCJkEbJBq6ChS34xroq8LfpNpKVXS6G",
  "key14": "oTAayjog9yDYr68WHtmCXxCNKY2RQWpaBCmtNUnVajm8reLhLLL1Aqaom24DwQH8HnxeXyR3PvdViVZ8FxqLQLn",
  "key15": "2XLwu76z3teVsfYQ2Pg3CEPkbN57YXuH2JxoQj7bURkU6zLKEz4Ydke6p7GXHhCM6Mzc2AM9Xy8XhumZrhkQdcgF",
  "key16": "4uMaedAuUfmhYLY55NZfTccbLE58xFjUceHdk5Vzzm7xTTfTLPQUzP5vddC1nTNSCr58c3kMpkk6CDw64r2gBBmk",
  "key17": "5RuGMwr1JCLuvmy3DM4cWPoqN44oXb4thev6CQhoZZhEFs3CRUUVRKr2AFWL4ME4UStpEqwhiPyiJwLRSkfF7R75",
  "key18": "d6CX5PPG8jTrWiqK3r6q8bAKS4cAk7px7eyx2ssxJEU3fyHXWverrcsPcn2TDpoMcm9ENzvWj6YxoA5FekGpvkU",
  "key19": "Am8vZ7WMmSgBGhFqs1GaEofTUNQm479D3N9NKDiGsBGYGnVAWB5HCdmac9mRsCvb7oP8J5nSp97uK7E4rrcP7sh",
  "key20": "2s8A2dZqtddfqRmix5agukHrZwwJk7LqzNBmm33r6YtMekMS4sLkNrGv8YLfJHMKTLAYnuxomiLeBnc5BgH5CYEb",
  "key21": "38MzBjk5GJGbUC1cNQffPqXcWLSk1juH2nuf6Ce4mpVXxwWJfrGvyovMgqDMygVr57Lf3xGddspoVtpQypC79DAG",
  "key22": "5m5Mp4LKiTSu451Y7Fte2ojdX8THc2Vy9x365kBFq1hjYwtKnyEJsodtDr6FE8YiFsTBGMXUwo4pUGcSbqGeASaD",
  "key23": "5mj3sJeZBifrY2N82qUEnwwDPyed1AHPC7MaBNEwE2ujDTiFpbtTxuynjhKKwvbpqocPN9erwC5987f23krvQ3vP",
  "key24": "2ScZ6XnMSJoijgWG5Na1xkye7yanjGzLCo56tWbr1kmsLVxxc9PGPiHWwczcBXPMoZGa8UGCnhN7GRAAAuuwkB82",
  "key25": "5VDaNnh1JSt8pn2AKK4X1jeBHpknPSnkCSTRug514s1kp9imiCoj3UmZgj3zpNCXs79zTsZRYqqmSrdnMQmZWFfS",
  "key26": "38V8cUb8JY7x8QnDYwS2ZJi77gqQAMLyi1RKzUzdGfF4ncDv6Z4SQ5tAW5fxQQKxsvLFfhLCc9oZxZWQqsKG7qQJ",
  "key27": "3iR3CQk9krgqCWsPnGWRfwZguqEEwzTAxy4uyaw5mDYMzq8sXVfMtGyFvMrBievS4pHC3UZiQHQcSFmfcKCJccRX",
  "key28": "hFCHomjcMgT9Lx5CQ5wjXifKFK9zrzCp7DRZKygdfnt8BwgMpegzEhqVVB3tjhe2utcEj5UDXERdoiSWHteaJHd",
  "key29": "5LVNPmDuhViNmjdZ2y6qn5pFPLt2i8xWpsHvGgygB5TmoqvcmuHqgxN2KxxD3TmUccEcp9Z3fnMWhov4awy8Zpky",
  "key30": "3BmoBTR6KoX6mvKiHZ157SUAcnyyriiiTKdJegUdNd9VYU2GpxhBbAFeM2CNeGEiVJqvRwgFLJVMHyV1qHVsKWrg",
  "key31": "4ai8vUmc5pSbqHDNwDh9GmyCcxHoE6TJG3batvFvt3XtdTeub1bUb2PZwFfwG31PHcXE4AvwwyycwWCArkbCdLcB",
  "key32": "2siFvEk97mArWqn5aQVy4hxTTrFPT4Mr6fKJon2fyzRK7rxEbN6sBCkmt5Hm2GWChPXX1XjEWDvoGJhQ7xAhvwcg",
  "key33": "2rEujs8NvSqgmNv3Q2Jgkok1RhsJqZUvaaYbDUXfnUvyxtsB1jx64nMJr25EfQvZnWq3N5SvGxdZaB3RPmGSMx2j",
  "key34": "2N8KkCSgsTHPA56D9zC9sCgLAVSDBbMxg9nLsoPMdnGggSH34K6nvHLySSkinEB9qnExKKRWUVLta1RjGyuDpek6",
  "key35": "5szLj6HxpzUXaqTw1hqJkBFLyBgbjNJWppZoFsZvrPEewX4PSFopAjgy5ZqHEmCEqwZUL3fNR4u6JHMuSeGmeQ9q",
  "key36": "dCHxiL2XQjbzdpmKyh5KYhGk9to68H8f7hLzQpmK5X8pHSeL9JjTvBqWZ5Qoh4nTEv3Dws6nqHFsR6CmzGxv2dw",
  "key37": "4CujenEvVcLMTN4hUAdRyusw5VnGen3wscrnHksiGJky66XLWyBx87BcZ1DnA7YBVC2yvdXnHDs2N9rzY6b1qRgP",
  "key38": "32ouMaLKqbGSw9dDDJjS7dnMGdcAcjdXN1j7crDMub4njgn93puBdWQC7YR3AsCZwJehCVuRsQZff7fBKXe4S3Md",
  "key39": "38M9iWXLCKF8ie1W9f941jnWogN3rvccpuw5xPBhhFvgtETa3r2B5QfeifSK3z1aHP6aRo4NNv2yxUx7rXGBHUtY"
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
