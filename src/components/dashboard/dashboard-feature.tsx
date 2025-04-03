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
    "3BYBG4d2WkJZWsuFpmjseKZD8SmYKSKEw1BDtsm5KtDnYaCqS7tKYJoh3L5TRYZB4VNKjAkzmTKGU7aMCc441htr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkdB4AeBn5DrUVvzrtTGKtbKGNVMmXLZhhoroTesyiQm7zzEGkXHp3iRf6ZPkxq7AYu6goeN4BjgWA2mY5h6uw8",
  "key1": "2KwKe4zsXaKRS5LpFaY7LgUkLrdYvzrUWcWPyQjNT8AVRoUGveGmVDrNBo93mS4TKNRQvcDzeXYwiQtn7sbPftBW",
  "key2": "eSh98P4iy7Q3sCtigCFufJayJWFMiFcAA4heD4EGEKgdoy6GoGthQckhNKaSE5r77pQ6HLyLPdd6R4LNcikEUj2",
  "key3": "24UB2roveyeAe5x1fvH7XAA2TsBWMdvRHwnFTufK8QqaNd6sZh4BxJNonn7z1rkzxqJBLL8qCjNS4MiB7iXssxFC",
  "key4": "3QLVxhD6mchBLfcJgyqTf2tsVeSwEGf5diLHSADC3c8JZtNoY4hDPBsV1UVg2izGGXLAVAXK74kHXenptTtfosdJ",
  "key5": "22pEAo7tvvjFYi13NfxAJSLQCobRWgn5pe8r5y5PrZJN6u1cs9HjyN9cqRUbDcCFd4yDuNnKQNshfC8RHxjgYJEn",
  "key6": "2fYTNhpSvDdbZvZvKvNtjwTCFzEVJL66QtSXJ5cRcZSCYZ8D8UUiwfnCxBP34phaEHof5rBCQrouEBWNYK214WTk",
  "key7": "5cvfDhxykfy6GsGYY7bDAVxYnCQaDue6trDXLu2xyeErAga8ipjwNmoNdvVE8s2MpGqQqanACNdzSwUZJTqah6Ep",
  "key8": "4nkZHFmsAYRoi39naRS8aDmeWDW718wtNmj4dJ9ETG6PQ73ACGtLrbiVZ5vkomZzFPMU3Mg2pmbvMZpa2XM1h9Rm",
  "key9": "25sZddBEVA1mJ593TyrYpkfmUk8CuedFLHPuHpukVtNvNnRLxfdA9bfjgEuSMBLj9q7VwimzuieuLE6ZNmCobNvF",
  "key10": "PZggUswHC8HRz7kpWdH6osEcURUPF16RNw9XKPSFB3JnpQyo9UsLebV6LAzc5bftSGgbsNq2m94Z2FLm9CDwwxy",
  "key11": "5LPGuR4qWRw3Q6cxCMtRTdZWPQuzm9AZt6qWgvunqct3AehUFSHJu5k75S6WPfy1u6J4FYoohW4FqoFTHqxCZxhK",
  "key12": "2U3ty9xvbT33Eb38HSbFJoUtLNGDbj5HHy2xsC7UbCYKXNrpYAq373ZR1MgYnaFAM4ub4q7TFBbnNXVV7YGCzDqh",
  "key13": "64g4r4HQgsEuEpAfSK91YvquLQHaAv9nJirWTaiyC9wiqLkNrGyuv4mcJS5jjv5xoQ7VEMutUG4dt6UNyGKpBaS9",
  "key14": "3D4TUxJLb1RVJ57Hj2FXDoJkKKD5mv6iSSpdLbjCjdxm5VNRkDpnwrbANzKhts3x3ws6SEhmgj68ngVdZBNn52JH",
  "key15": "4DB7dskJtj1DcAFuXVM7ZvG1zJbPsBAuC5T1YmRMorJFFLuqiM4Lki4ufdJipetKtDbNz1HzAb6LwCQPLAk97R5b",
  "key16": "5KmAe15t5WcLSTzaVDQWqN699bU83PEmF2SnghPaCM5tPvBd8MASgyZU6jqrFgG7nZ2DqY7WTtgZg3VzxTjTq6sb",
  "key17": "vJZ2QiyjgdSpGQsuB9atidBAfhGHgRzQ4ckZr6qVFQZ1P353mmGCpcomBF7RZLENxoi7wnMoaAZ4stqZcP3o9WP",
  "key18": "3Xwar4pe4FYHQ4sMZG5W32zXsm7WatYAR4ULfbEotTKacTsKxw1sGoseZ8imjmevbLevE8j6ynfbJZBhdMcGT7Rm",
  "key19": "LewHddinLUn1hZi3jia5nRVNDGTryJsjsacjX8T82h7vmgLrX3m9GACzZVoCVPzy81cCgWswjmJ5PWfUKwLi8qw",
  "key20": "gdquNeuNygU56aYEkQUTdVhKv5vLNh2B4GWFHsDiqF6cscSMP9bdhUBeQ4tgJuUtrvU8Nd17cPsvuPdTZWDLPo9",
  "key21": "pHYAGKe2Xp2GeJhrNcTW7zDuRqXnCfmrWmA5VzgXBxtaPu367ebUMWB9kcnu4VyE4z84LSYyvkZaJhyqf3Yo3ah",
  "key22": "4BVgxEDvGBvCHep5iNWU8edZDfWCSbZtz4WnQaVtmFkZEZsCaVidcQ33bTWJY2qJ8ZpSoGt5wAaz6KWxgEeebiRz",
  "key23": "2MgZBFDFdm2AppDoZoajwvmnu3GSd2SVgErjPk2nZi9SoFz5XjEDBgfmTUb6Z5To8VkKb35GM748zn3X5diteByC",
  "key24": "2nWhXkFCLDB4Hp5JdXDT57y5nmPrfSLcgqaJqCE6H1e2mupYZyVkaTFPJSPPUCjwyJ3bNFAS6vWXQYQA4qUskRPJ",
  "key25": "4gbS6p9jis2Kjb5YahNexYYt1Twkzw4viXspvca9vyLVdBPLdb7G1RkE3VvTWNnHKoVFYoSkwqLmbQQAV134tTvu",
  "key26": "3Ed25ju1DRH8DNHotCPoVr2HL9Q4PX3mz5TMYy9DUhvivtKJ8Wm7Msne1eaMPML2Qmi28ETaAGPp7RLsyibgUB6u",
  "key27": "59qjLwKa9MfharGibnkjScLX5LqPPzLibkusJJQnEMKKFkkF4PDiQjdCyoiVDgcNLMFksPooJeMNo8nPrSd55u87",
  "key28": "4gDDkgnSqouDPqrZnHsUwGaiyYkyfaoM9vRG25BWEQytt9SE7ru2AAEmsAMtAScvBswNKmVxBo4uFiiadYbfLGZF",
  "key29": "56RM1CdkbLEmPbACfx9B6X2bHRQVVk5JzZQVTBiaKFWSfA8DmN8MaoWbD3nxH1hwWaXq3V9xstqbBByyWev9TZDN",
  "key30": "2oowFdgdRNVbN97nVwUtCYfRQNbzpG79kVfH6WgHeDXoK46yFTLTfRjStNXtac9vTX8iykFshw3p94FGM1GH4QyA",
  "key31": "2PLussHXbHPvN6xdpPKgtfNzCUzPsRo3JtiC5Rv9HKbJrbYZ26ag9BGEiNE6WAjMwQjMEGp9KgipmVHXSzXWxzZU",
  "key32": "2EVhV2PxAgFjRe142wcUBtiv6xuAPzqc8Cq8qhQFELZNJp7DnA4vUU8cEsVVKYDWgQRckorTAXBDeeHPJfq9TQtp",
  "key33": "qq5SeSLHw5hncmsT9JBEpya5AF2FJXtZqnbQk9wTtSff7s2Leuk4gU32pB52yJpT9rRcsJLLcvJ9oUAamGgT8nY",
  "key34": "48wcp3P7kRWthPcbyRWNuCbKdr2AFAbuZobx4usFBjqfAQk4naauHoF95PbU7dpckW67PDqtbtn1198GbFVr5A8d",
  "key35": "2hTR3qNC6SPFQn4z6YnbGxttymuRtqm5cowWPdbEcY6NZo1nYAYsFartwLcF5Db8ui7JaSLzHHLKepyYQ6c9VM3x",
  "key36": "5zF1Hft99uvBcK9FE3Pp6CLJM4f26Am6Lcknp38ACjQ47QTpWt25DCxBty8TvVE6dcTJBvnfE2h1fDhMmAUV47rN",
  "key37": "seCGy3893a4pncreXkgWEM8X42uGHtGcZLh6tMnW6n1aTwinHA3Zt2c5DKByzgRTbD87PbLeEDbotVEYRPGctaz",
  "key38": "5insdCihvKETstTGGQPMyVWR3GNTK9GfP7hthRpaDvMdgLnr9K4zeE5sm3Z9ufg4pge3RUCFwfgei88FQ97uDPwF",
  "key39": "5JmAdc1Yz8k1jFzZjRsLBzoCau3J7Yo7sFNKpd5bAoEYeMMXmaQYiU55tP2Ef43bKboSNy3wPScPobxMjxwRA6zv",
  "key40": "JzFiCpyimSYD8Jmv1ZQhqn9SpqpAKuwxkbksWKxmXyYnt54bupBJ84cM7pUQdbWYBMJJho5M4XXpv4vNL95V7kT",
  "key41": "4Rsn6dncYvGqPiSEfwT1tnvXQq9zy9yjaKQhy42MUF4MZ3RcW6JqcLYZd1vcQTwkJYE8bjyC85NByH46uzwiYXgK",
  "key42": "3t47D15EZyf28hRfxvMaYJwRucS1D7nTUHWPCztx67whqY4Sd6MfVpikem6dLBDgRHFmMFF6YKSNsVyG4wUSnk13",
  "key43": "5AfZvZEcxvDZCLDEtx7L3EH3jiZ4nymaQLqoLBVYMStperRo1j8dDx5Tau77ZapWhuBEjFkwkdkDMAuPk3qBJZ7V",
  "key44": "3vBnSsQVEXgfTHFnCDXH9TTSDtfVZtFd7jMDqe4pdCB8Nn8dMgFkWNRDVJgRcvX7eNnARPtv4Pvbg2W9u5Hbk2LS",
  "key45": "3KVzS519PjxfoUznu7i1PnqftKrEhStbufuC5z9pKcpqCLyTTPUAHZj66FR9ozbPnaqq4szj4rjCnajBc9D4oXbX",
  "key46": "65VbzxviiH7jcbF6XtA2Q2dD5KroE7aJWkk6ALZYrbHKK88UBBKgs6U81FFZRKMkgb5tKK3KPbxthB3fZuzzdVas",
  "key47": "3uN3xk8ZSbbWGdDo6dWtN1wF8sCQFLERBtaBDqVFyQJERTvv2scZ52Qsz88Wjcvbqc2pbAkHsYopWdd6b3pefRAA",
  "key48": "jmz3KJp75ueXjDstFz5ygFwxpGqPq3tQLQ6uzgzBUJPpQdm6GvV6sNuWGrABKgP9gX7U4TSxGtWtNcFCDHxvBue",
  "key49": "3MwyGtiLdNDpKx8o8QNPwUfwj1XgFpwY5VX3C2HMEbpzVV6d7DDKQ3i81EewV7SV5Q6nLXfuih1bhBC4ed4KRi4Y"
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
