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
    "2mF3iUtGd9yeFucrapGjPuWkUzqQAoWNhj9u7LtaB8BmvhGoaDpy7a5u2zwkMy8FCPpFRQcqVw7eryHoto9i1BK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ip4iqhDmg31MyPqGEVvK8yixY78Zfzp5DNTrCx4YD1hrfpuvLER2CAkXmBvP3NE9wkG9oCLvHXAFPtWpJXJ1cnN",
  "key1": "4RqHjW5uAcsE6Xmy5thFU4SCN5hDCY6yGAtTK8KQBrKzf2yisKR5RcHdV5Xa1cTAtofkgSRHaTp7jeH4D5zBL5UN",
  "key2": "329x8MhfXLHxT1cFLSvnaNqTbhLMhQsvUdwXBRBVt5mEkSPbsTxCARJvzwTsWtUGD4bVc6mbqxoLKc5hVZUuWqQx",
  "key3": "5ng3r8AEGuywE6txA8mRFYND5QDLvzr7hwbdtTWHDuMP6DTVP3rKJZ194kmj8T7qTuGXZGC4xeJoqd2KqeoLRPzL",
  "key4": "2fFbbQsacEQcD5incABa4jsM2Y6rtM4X9h3PxjJ3By39TZLwk4Vin1hoqYSfth5o8isSUZNGUrJZnqaJaMKAYJdX",
  "key5": "pvSaXGrN9dsnqr3AuaRts1kBKYmDSv6tSYGJxYpcdDzYHyanEQxLaN9DuQ9biAEM3VpSUE6wPp3oSwujU4VyYhq",
  "key6": "4CvzwrhVmusTEcd3V3PhGx4HTmPLmRTaaPxCzCYarrjVrqcSgK1VxWZwYf9e9MXfAugi5jn5d4u5xU3K85DMdX1P",
  "key7": "27DLBB9dvNuHEetDdUcS7NQN6rpW4bePB1NjiFRK3tXx756C5CqWobpUiCKjD3zTYG6W8Peb7YrymAHyVeyRthgM",
  "key8": "4mwMvAcSfroY58EicDXWTUtkVnuszVNDWVymvR83AEqjA5NoD14sm2USJpui9j2WeB3DZYjexU7ScbY2P9KzHe2g",
  "key9": "2k295k81ygXXmFM3VUCSM8zjb14UuBLdkzNAtB88j1kfmWY1Xoh9sQFKMra9z9djnR8FzyCqdZAhuPBB3DB1bpqc",
  "key10": "37EHe6RjPQ2TzrCZDbjaH9NbcUs4qfAQUoM8cYiJSUawYFWVqta3mBGWPNVfjg7LeJNaozC9BhNKhg9CAHVMmCNa",
  "key11": "5cSmgfCGfAaU2cuncj27SCXzaD1pmDYqq58WWtDRmLWkH8YbA91k9oTAh6UcGMSviT3495FBihhU2RuepW8yvN3Y",
  "key12": "5z846yFjAC3aF85MdezLvF74ducWmAqRLbsuQbN8a1JRb5y2KWaPiMyQNP6CQXpX8Aw6ebaCLDkaWXZ5EnimC38t",
  "key13": "4uqkgTeNDpkPZiX7YEg3jupArUjHarLwQoEfDFxxzxKoZjcpqCxfj6Fev4FLQ1xteGrwFgFEpWzKKixpmWa3ky4T",
  "key14": "5xo6QTfH2Z3LjN6k64Czhr7SKgQu7s2KjPqy3WNkvErPKWtvWWrhnnYpyj2eYKcypi41dEMJpMBRxgxGgRs73ZEw",
  "key15": "BGrKXdZp9dRjz6KfhoEAt33CsYWYj7oUfGYwXNiw5cdZ9SF1rM6RbCTHbWrpMzj84Kk58FsAKE8GbRmwCJzTTrC",
  "key16": "4P9CDU7Nig73swjQRj1KPZMuzvLjtS9gFk8GnmCochG23fwmEsqiR1yZJxpVxx2GwjsnjAagYHfjyRc3fdKcovti",
  "key17": "2PZz72EWHv9sCEB8ecwhBjJvVcAJ6S1tiyWrK1fYffLf6nD4j38LTow4mvGQVhLScuxm2xHkraBM4sAc9d2QGDmc",
  "key18": "uviKFNP4MVkTSrJHw4Rkcz1aG55tnnmC9wU9YFyL9ehQyNRt69nZHcL76rvEYdXkBfcLj668ksavQSyW99pzJSU",
  "key19": "35dD78EmvAaa2NajohxAUnfm91ei7yAuj9zghpYgbi5PK4Cv7bWiXGN3JA6WFARic3ZmSpnZ7BS3m1DrdnifdBTx",
  "key20": "5uvVi2HjtxLTsWLxcpdi74mvUiReZhhWt66drijbyWgAJSuziE31b77vghm8VSZqqJYqobopCmcJ574p6Pq5yXPM",
  "key21": "5fuqqdXXZDQncUS3L6zkU1sxjbEE7fpyNEvcQBmYRqxYH1t7sNUh91jMw1R16yeb92aFhefVZape2BvcLEcKtkbn",
  "key22": "36DXshriSnBRYq1XqUHNsj5gMF5cs16xXaFm8UHJKkQxWSXchMygQk2gHufxibh6a4F2L5YzzCWfQy8SHg2DfVVH",
  "key23": "3KZuaAHXQSAp7oqAxGtvMKUEWduHTfhZoGmSpKay252Kn2VB3CdDLmCxGcwVguTwyyttKqT1MUspgtfuTd2g3bi5",
  "key24": "3cbYdqRKXLQRXYLJo3JsnQ2s58ZZuftYyg1YqP5MP32ePVgfc16yAEnp3NnsdHcrmZzV1foapNWvjGoQcJAA4iuj",
  "key25": "2JmH2uo98G5o7G3Gmrm4vvjNVXZmwcuWPH4r5zsk3rYe4unBv9hz17VKsMYMqXPMGCdAfHzEzocVK9PvthyHEgxi",
  "key26": "z2V8netBjgC2iovTmaSAChXeZP64t4mxHvc1gKaq3miDn7gbR3ks16dzzA742YV1HMdQzPby8oc3fhVwJXJSuM9",
  "key27": "5XHT5Wwmn67pQ4eSj8KGxfpNX3rzGdHAwZVbHoTSZeTTpFRHa7VRkcBJzdFNHFQGneydsAFhTTYr7XHZcg9xVuSz",
  "key28": "32KFqhZwWiRN3kfUEucwsUjbMG3vL6V5PshdnybauCCBCBBX4iFAPeRVU1jGSKmX2stfUVV1iy1osNixLQqHTYSo",
  "key29": "28N8fLmMW2vgNqmSzotpNCiCaxkqNEhoqwbb9P83T783U153c6pBEThQN666h6yUz8HBUjdWmrXGRd2Wf5v1UCWG",
  "key30": "5ns3TZKn8eCR1puv4oFwXH3M2fDEeJnMLKiwww3DZ83HQCty5pyYK9NwgGkzjFQHqTnM24PfF25t1ZuoixvZTrZU",
  "key31": "5VmwpZ8F6js2o3rSA6ugYsfnvMQYcJXyRuK3ySCSDYe4idZcqmjnhGhUKE3rPDYa37Ny9XFVxaZawFav8dnaaULU",
  "key32": "Douc9Fog1YTAzziUCPQ9fhEnpLBMJwv786WZseRFDpStGGQktZepMhvDQdTnadZyQ3zyz6rCNTUoQ9TA6ZFcq19",
  "key33": "GA6tnKv5eUknTgtrP4HbdppinP37j3UESieQNVbohNj3ixqC1axTmjipPoeBR1jZRbDFjLq6M7swYfTBoxJBe2L",
  "key34": "5A4GsQs25kTLNfngSycJSwftmpW9CQzDjTDHfJGGzJBmUA6DMLMV3LCLpwZhca2C44NB9j4XHPMcm15SLG14LqNM",
  "key35": "5ojoTJdohzqV1EP8a8113fVCZXtiDsG8Za97918DvVidEQ9zKVccfELYYAA8TVzf3DryEr8QBThPebh66PVhQcGk",
  "key36": "281BWtJrBAFMUyuuSApwf9PTGWJigHxU8nzQU59EZHwQoJM9cb6MkKe8mtNGcvoAT9V65GgbaKabq3mpXmcdfnUp",
  "key37": "36GB1pCHJfNuemcXKRchwr9xq5cfg2kgbv3AggLkVwCBgF45zh85rmv1ZrAsaSSFyPxDHK8WU7hRm1b4L1eYURip",
  "key38": "2Sbp1r5djiGrCwzqzoYZdrKn1yJVGJ8syHy4TcRxiEKwxDUPatvNgG81pZ4zPkpr31CWicCMq5ZF96Yr28KenCZk",
  "key39": "34fwWaYRLGSiJUcVbBp3PSNntXkgJ3Rg6v8CQuP9yBCKJX8jqEb2VuCEuWgDoYaMxEYexvna28EZyRs89xnBdfCD",
  "key40": "eH45Zv1yESYfD8jaxzZjSLhxKZShFPK2E6pw5inVfhfbaJJHCxJVtX51dYg4EWDnspPPRiyAXwnJDg2FnW8XCvo",
  "key41": "2sSu86CHsX1wCoZ3xNWJyWC9qZ8EcKZSbPHt3ewQofvZKNT6hQpTUJzpAGmxKgbXS6fiGae4AHCjnh5fNEBvHcrE",
  "key42": "5Hgvq1Sk458McqWNftYCLRTR6adXfAUMtp7uwsEPLMEYanr5WpGXvGRTesgDAXbuhZdLxNsEaLMxW7pbP1oKtnLs",
  "key43": "3rKKEdz87R3U6Yh67gmtEwDd66yQiCMAmJ1NrJaMoCWsHD3YyMK86HbvcedQUWWJToZTpwTbY4G72vnnUbTvNhm9",
  "key44": "3cEmCs6q8jzNQ8sT26Gnn1FZvr1R5d9vaZfJG48S4cziN1GhBJnE56fgWZ7xhctTETTU8jWyuRiMWYPX7kSb4Z3x"
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
