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
    "3F6Wne2uzLzMtK5SH3Es2AanZGyjkHSgbbynhNx4L9vAz3pajyRErg6PDPSSaHtityBsEAsRgAJKnCPS6D9iVqaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvRkAiW2Yv9ZfQ5ALrwRKyxgN2Mge2LuM6YewHu4yAfQUjrdzDsrqh8SnQWpsK7QKZtw8L9wXme78jdU6cpFHrK",
  "key1": "8y8oBdNknUK71SyLxYvQBXLX8vWF8MCX1dEg4JSSy75bi2LQzBUpbdWp25P5E9QZj8sesa5CnrtUV1ZA7fR9hp6",
  "key2": "3E2QJFhyBx3x8xuxj6xPedzDc3yZNRKG1cMZqXDWAiTz5RC3ybEc1pjwXR8SuJY1bxeXo3BVzMH8dqu9EX7YAQVD",
  "key3": "5GWyzhJ4wi51c1LFvFQVt6JUthKzDCa1h79QPv5cPsBpG2f9x6ZpgG3YLVi5CbpKCbvjJiT9x3y9GpaykyNcPAKD",
  "key4": "4MX9rf9pe3hGo5MyemKhA2UGbpJ2GFeGpJXw8w2eoSAPb4E2ybJ69eYYM5dx5yMCBUUqHhQVbUocmBbWbvVxxwHQ",
  "key5": "ztrdkbLNyRNnbbEYv2XdBtAtCbCqFFmk9Bsvq6vF5JfCDN7mZbyFKefjZQPL7rYwUF5f1j2Qx3ZQRe8waZVq44r",
  "key6": "23Nm6rhv5t7udtPsky877EFY38oaywgVC2M2kFXSsSUufcHsoBHu3RktpABm9SoRM8iv7DCwzpnxi6ZomHEvbYkA",
  "key7": "VXgDVpSuyTfks2amwtVuoV9jWcAWboPh5XfGDbPLQBmgnGrcv7TkbbrqjVwJsRz8KtjRv7YZMtxQtzfLzEKLyst",
  "key8": "2eTdJuVKcbQah2fDFtFCN3bQpds7afLq4oyrR51K4WgF1NywTWRKsDDiQHZoQs9ww8G3yN3KrXVe5eQ54qb4mPvo",
  "key9": "3qLJeKk77f26PyTyVcLnWa8V2fGLuf1LfzNnSCJWieqdEQPm6935D2ZbvzwxbvTCdS9dYE3gqhR63aq2Q2Cpk6Le",
  "key10": "3eG6rNQFzDFeosabKgEVgSHrXttb6LStUeBkLuBvSVfnk9Uc6xBv63AgZ5BvfN8pLa5xHLh1Vs17zb83UAuheiEb",
  "key11": "gfoPBaZrpiQEKCYMytD3YVkLmfbR2MVBU39TLr6KbM9NrnyNCYgMjY7HCXbGbETV2WNCz7v7XCKcozSK8qhY9D2",
  "key12": "3uvD6szswjNjuwMYQNqvJF4LbK6SR11n9AJk9tpLUxHRAPvRBjuhGAkzdu6rAMMzLBv58SN61LLZjwYZDGb4yMCx",
  "key13": "4opXmhKnvsbsLNFmXhUEugHAq8ZTMakXicTPpu9pwUYakwjbpNgEEpepQ52MHX94VDdHn1gEoSUFfZRvcqjFatyi",
  "key14": "4QAmuHX4sKsjVZZ4RUfPxZSZ6GLbJ2gPuHsU19xHVSuDiJ9scfB7e1kvNnfpSBq1ujMwzfGWxX294RdTYkToTGfW",
  "key15": "5UfdsFJ9R8WuEXALaTWn7EhVjPMRqnhGSbtSW9eBT4p8tHbqP2zhbM1H2Mi8ikaAcXEoinyLcQiSfAHRz2Khc8n",
  "key16": "iY819zPm8X9Hpw59Qboydtak6TT5kgV1QtHXfoQbKcNKbpv45HfRQe4BM3kmujizjKRLZ1cLKmGzkwkWHKdpATC",
  "key17": "2oLcJHviQtNFxuP3x2rCq8qo5nhHzAFEcn6jHtsJug5Hz9sPK2yHWNrvU2anTvkqinDLCwosMCYKRUzKcsF5RE1K",
  "key18": "S3xLm6dSUmVmsnSQD59hoSg3U9xJDZu8A6L1ritxPeYAsrxE2dkt3hm5xYt9acn3LjgeKEg495F9rAP9kqPb1z3",
  "key19": "wAKqmG4XHHzUUpMqjSPw8EL3nrb3qhJEG1Zben1ab32JJXv8FGjKGupGVh6i2nbVYzaEvjE5qK5tcRvSJWsvgqK",
  "key20": "411J5WHjRRVgV89dmVT2oQexcR3MjSxJqfb63v7TUuxtbC4rPnrdb5WrSkfPkGebnFFNNeFeqj7DVjn4HiKyDXAz",
  "key21": "5WXFVvYiT2vT91iJqg6YqLA8Yu97EzcQbuMx41PdrN57NzSQj2JxmtT3urLvk6M9KYuWKttB8zRgMFKx5rKz89qM",
  "key22": "5TGX5ewyxtjKbGVeaFMd1LvAniPba2eSCysRnjorwx4NVsDmEoyFUgyfodHVEaiSyRc77VDzxvtTPdp5jL2tJs4g",
  "key23": "4D2nGraKBtFyveXN2U4Pwgzdt2yMCDiaL24ie4qcGgZ3Nj73ZYhX7WZRAG8CxY8rv2BDfQhpmvuCTAvniLFZXX9Q",
  "key24": "58c1wvpBpuVT2uHDsqXRoJ289v1VLRddSQdxiBzCjF8XQyXC3M2vpNMHfzmCbhBsvbQCdmKF3cfo6bS5Ve5TLieP",
  "key25": "4L11uULsgn5XNBMUN5y49znZtnreGbwhQ2RMSJafT2R5Zq7TmkXaKKjadBHYfn3Dszskat5f2qTuqZyYpXMnWZHV",
  "key26": "1oFeKxGV435iVZ8eevL8aasx3nRLzbW3EoECHpAaz3mhbnc64NsNNbmCj55S6s4SSCRawwamZusBaMLSN3MZ2TL",
  "key27": "5wC3k2jvGqKn7Rm7k2Gvyb8KPot8gu3qqLbzJWrSKwLYgkXjjyoaSiGEr3g6snSiYgNmZoEz54xiC4BqduV4HyuH",
  "key28": "eAaC4bwtAbrQ1SPvGTFw9yXxTtwq9se9MfaftfYTDwrCx4qDnLUkxAGoSfDcEovvJqPKi26JSw4yeAfHRc8t7o4",
  "key29": "5MYLvDVLAnvyd5j6unmbmfcSFumiLPbBYLet7L4fR3Y1NSc48koSKb4THCpmiRDij8AfN2T7L7ajefawunoweXJs",
  "key30": "2gs3rWSZjRYxSGsMBRFMjHg9WcE9dtgUvdzSeftQCjNnSTYspAzrhJE4aQtmcYnDqZfoFbXEzHMBaSszbud5HHB",
  "key31": "4SD3aqGbUk5jM4keyVMbK4yhEEQRB2JmRMpihxWg4ao5At1DwFCqhCGDBsh6gQLfgvUfcBnd9ztQetFbo7gtoLJF",
  "key32": "45pN8BkPwkeeNYhP9JsVqvntfevmqf9AScGWZMzpjzkcMy4fsfVgMGBs6Vj5ginDPW7WChUoqqB3HKRPZfvKjSuZ",
  "key33": "4m8uU3LRFVcjpo4oKoUJ7KpNPBxVh8JwDZRYCjPgZ25HdS4HXp58gaLB4fw2xTREE51sxd9gzSC7DdYMXqmahXb6",
  "key34": "46ecupjVsRChMfDHRo2wnFf2Z4ALTqSpvhdZejYFFKvQVQrSHBzB22BRe8pJSZphSKh7a84krU5sd7PBa16V4KQm",
  "key35": "5TRQgS8SQPeT5oAZHGgF7dKkTzdQUWVnaAJtLeEN42wXLiJ25tWeJEmkDdJSV3KkB5ENCyLwhui1dAuKdA8PgRid",
  "key36": "YR7oXQvVhxbt3sZGVNZmarLruQbjcAgzFEJ9wWBzSpkCz7BfzgeZQsK1M6DbkCQwybSUaRzpY9shkeHWb7Ggvbx",
  "key37": "LnJuR2tCuhM7wsNnVtLiSUr1cAtdEnXf4enMV4NeYX7wsBzAheMQkS3qWWG3jKhXRMGvsJfFRShzSBCyA5PP5Yj",
  "key38": "2Y4jxkFmCkX3MDxk1JJnGKvTxc7CWD1hbRZfSzDbUb6Bk55Lmj2Q1ohs2tgxB7G3qxDycfXxXS31jAFGoNnaWZfu",
  "key39": "3n2PxsLZH8ZTAdmoG3gWVs8sYCxfHbkq7mzzmsNBfSSyebzATfHkEYUxTJdMBz7gC5CYroYL3diBuwyUXGZeRMHv",
  "key40": "3N67CcNpZ9vxhaCnvs8R72ejwW5HBCcgdZbZ3JJbSmYGZgJFsTiyRcPsmXthZbgBRJiDh3rS4SG21cw3xxka982U",
  "key41": "2zi1rKCdyEs8cA32JmXxtM1zNapGTZHedgRCQJsCTysaMJsv7cLokrf3ENq2X3VhsxwK6EhEuTPzCfneyCbqJdaz",
  "key42": "5Cz5kQ2SxkwvTfeVCCWMuj15itcY5nwKrPkaJCrq4pFPCymjjUurSTNyQzupYRpvShAJwC43L1piVY36wEAESiVj",
  "key43": "4Prv1RmHxkzBhob4mHdtVYyRWQK7wt2wHvxexAAZEExufhB2A8oiozSVxDjmUkodJSHfayzETYnaRamrfcJjwxUH",
  "key44": "2U26cp3fgpqYCB4o91AXcCuT6aLsuk55o9Ny1bUyJ3fQFephvFTuyJtALgBbV8NQnRXJWur4R1EPrYv1rKwEjosJ",
  "key45": "tbqt9p2Kdn9juTGDh45rhB7Qn21uVY8kxaYePWxsJ7JanyKwMnoPPy6KZJhW3zaNquZrQcZyjvJB9a3ti9T6xmm",
  "key46": "5QX7fJeExWScKkPrQPMZ4q9aV4y4zHgUAkkqgGyNvqDzoui91koXTC14sAPdZWmqSto1Sv782SRVthzcFQT8ZTfq",
  "key47": "4xiqdfaDv5Mys8jQMPfqsavQwy8kpwumj6A4XBir8mNyYa4L4pWzzRJiMV7jgyQ6qLPbyFfgUxBxEx1sTndaGmXL"
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
