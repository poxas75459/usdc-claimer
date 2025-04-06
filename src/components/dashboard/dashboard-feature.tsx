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
    "4tJUKaPQRGc5uoJbCqUpN9Ctk1o4V1jPyod4nCtVQbYwqSgR5hxW5giU28nuWjtotrN6wJJeWi5gn78MsUEEFkPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iScY8AcDpd9puuHP2mRj1CQGknpAkQEmyKskPtmdnBQhYLhpaAq8ARFuEdb1yPTcN58GEvtjgscmVpRw5JonWhy",
  "key1": "C7g3EsiQ4djLWp8EhtoVYjkGdUqwTkYQmSPfhboCboiuS2a5xbsoptxf5nFpW6S7JqtTDE4GEgihKkT8qaXJvB9",
  "key2": "2r9EPqNiv3QBXxDkVGKkzM9JnDyanzofKPiCHyteZQqszotToDbe7dLRR8YDa6NUp42Lopatm9txAGf5agcMf9ND",
  "key3": "2YjMS1P3a8u9g3Uf94gYk6WRNavVd6PzJMhKxrRtyrBwtaG48Lp2e3XmhePen3Q8RmLJ7nAwrRGiAJL7eytEUS6",
  "key4": "3dCpZh8FDK5LVB9PCGdEqJ5hBsrRNTdkuG3UWsCdfp7NA8edgqe2K3Jtvrx7L2EcmqRo3nowgyd9qLAJ9oRGUGmP",
  "key5": "5KvFKPzdvU8GHbYQG1Tg7jDsTZPN6C9n2B92RM23Zcm47yM5zE1UBNbbt6NimijtjCy5LeE2B7Q1JzVDEe1uDBQz",
  "key6": "W63zKKGepsEqKuCxcgB1wGt7RDiVzbVxMzwWELX7h91b5sBPfizyZGCC4EedkVVx8ouftUAHoyBQpMMEDYmtvrX",
  "key7": "31Vo72jy2uRscSwVKqyG95zuHjBACSDs7XcnNfTxNpGf4yjX6foF4UpdFZY9k6vSjcW2s1dWnhFE2NdPe3NvGbnd",
  "key8": "HMeY5mCFsGEczBnNEoYC76sbkXNufdzYTMFthtVaSGJhWNzCJQ9pLgTsWTP8C8JXvyWE8a4mBJjV67XW2HAnVk6",
  "key9": "4pm57XbY7DdrzaJbiUzXC2x9meda5VhbXetJboP8DDuxMTQcya6b7kSJWNKwWiuUAdaofc8b4F8sPpXHYWRKoTWL",
  "key10": "MseZXvVJzutvwQAZBFdFLtRiiuxfD2fezxJZ7EFNFDNqt4UEXKywqztPjVvagH1ZAMZrufadYGHpb8HY3VFGte1",
  "key11": "2QxiXKNqyDB3NN1QjGFCcvzDedFvMqMk4ndeNiqTAq1tPZAqhUTma1T72Sg6uZ4HGxvfvpyWAd4X4o3rzx9KsnVJ",
  "key12": "2NsJ5ovEDohRaG2rSX5vFdQaaZXpaLDZwXHoxEeUuT9NLPCdCggcQABTdwTVtbgv8YieNREhWNR9mUnqBmiuaW45",
  "key13": "24LxrDGdkNFEfCiyaJdXxgK1cBXFRSawQpRVdaHgyNTsZaFkewn3hPSs7KbcwJRzLf4qKNUF44vMHxJKoLavmTVy",
  "key14": "2ruKx1LX9BR8WC2uzMefLVR2XzbRjKYY4RsNLeKytsGBFFK82nVeeucvuerUa1XCDegF2j6homT2drbwEYdTRDfX",
  "key15": "2XmDfzMvNbRxDvrf8hAccrgCVVNz1sm36dY48pud9HWU5THjo99MMXsgfdGmKTNqYqGP6YREN2TVSs657MFkAra1",
  "key16": "rT4CGyvTAFUXAYZ8Sxq9QPGrnGFPbkXmgPEEvbPdM9Cg2UkB7asM3syYmV9YwcYpQMhnxPhm5GvcACMNXfxJajm",
  "key17": "3enk7457v9ShEhmFSgxSo9Eqe5dNs5w9BQ9nmkTvbiNPBDKgjPCtoU8x1Q6ZcxjTdseXooM85fhn1fvpkpqKcS4y",
  "key18": "3oHmFpHzgwJxWf9yNUs9ubdw6wqh3fbMJSyjksS3PDHTAsmYRJiLzKAWrUgK8pMjtBZG4q3G764Mdm92nTmrv8Su",
  "key19": "2jdVBieuDZ3Kiz41VnCdeHzeAec3DAV8kHZpr67XcwKrKyTeNSYuW7zLeh77u7egsmST5D4gm7S7DSFnxiayZSQH",
  "key20": "3s1V9h1TdYMHRWkQ4tdTqPuecNHE1bAAqVmp1RT1DgBevuQL2LP1PaLhLZYjy3Pbn2c5sVsy9x9kYwGULANM7BZc",
  "key21": "34oLCb6w5DLoNxK5Gtf3MPfSQg5fmZ8D73v423VxtoockBKC5MHVgbsEViHjqJ8oJf4nDJP3BWcYZDZAGBk7V1bp",
  "key22": "5vCw4BdU1poYeYKwAB5hTsZScrevmdgaUc8PiD9Es6Ghv1fJgzvGHLB1MdSyn3dXPPWkSquGMzUz2Y25XGHV19uT",
  "key23": "36YA1uzMzQ9VLrmH4kkYE3BTXAMrpU2L1VcRv9Dxyyfsn2Zki3Nf5DgKCcRdfQsTpRQvP55SpCC2mYhhXqe7Ej8w",
  "key24": "57dxbGt42gTMVCcy55nB5Z9pyiXSoTrBpca5nSR2nWYRbtQSk1ou217yT1ezeQod5Qdty4crWEzKdKTtSBaFFskg",
  "key25": "2CZMhcQY5AWSj45bzCsAnPV7NL6Tw4F6BjrU4qmk4MTUf8GPsoLmtiY16FRD6q5pHShHyrorbw7Q6ETntWYsQAiH",
  "key26": "5PXRPHQPmUFxpjUfKDCr3PBYbSyYubzXDRHHGKcitTnqDcUqvCWRYbmP6sa3whJYUmbPi7DQiaG66eUWAM4qePnN",
  "key27": "3j6A4xmsDLd1gD19sKfxjodYUR4UwsoyBJceL3VuiWBQaGUasDEiFuyUFQAHb7Cu5RDzCYwuRDzY2xFXyuMTy1QV",
  "key28": "yH18HBBL3yCxgC8yM8JszMHQMfoEBVVYJXTvVbY7MNZRDTWHXVudz86iWXz1bg871PcZpYAxiVSKsijGHfhMjqA",
  "key29": "kQh9Sw3wshasn6mkv7zQ4iQFFQB6mHv8uCxT6aZhhdp37CZxyGX5TpwCycyzGZvgLHRVwwHqq2wXLwjpV1Qc11H",
  "key30": "3W5R6N6Z7m7EuUxA6HPVeukf42qQZHHjow7jAPg1P3ngkhPHdE1KCFgMyJKsJQ8s2KhubLahSK8NYwRxQkQoYmp8",
  "key31": "2VbZEAQs8rfQagr5paZprQ7SQDM1ih89GzA5vzRnsDKzcDMeb43PTHTyW3ZMVh2bPq3ip3wckYaAayCG7s42t84d",
  "key32": "67QudzTVDdw3daQ7gz7cUPGpC8s8HjAYp9Z4QbiFYG4Wwxk89i5atEsuDmvBtVTBPzbyPo3ywKsw7uQy9aShfhuv",
  "key33": "qyQeT6zCsVWdDwBZQ61f3QJanUVXv1eWfgPrPATapzm86tHeHbjeLfnxadRiDS6QVpN4Qcyvgb7vgoS49Hzjb4L",
  "key34": "5Ut72JeuNtMRptDTGELCyDjxAeizpBeFAzUWUyNma3N6gtPFGpZUdfUxQ8jQ5uGwMCXuK5o7iHbxLLuJwHW1qnE7",
  "key35": "3AsigRLt1QUNxGGmcrDcaToHhGXKyzQqmJjdzsCkopMZn5eog2R8Vm2nK2vgvVX5Dgpw5xAhnRCMCF9dZgXaeyYR",
  "key36": "51ritfhL9yVCADqAkQ6LUDsRocVAt5RJoqWjpe281yjVdH5PCjscwYXMkRDVgSEyUnNdtvAq17Rpsg96s7q19M2D",
  "key37": "ZWDkQw6iiPRvXBpDKDDErzzApErtXMksZSUEsUYEYoJpbTHJf19JNFLQBfHAyNcBftVaK4D5sQ325TKgHPVqgWS",
  "key38": "32KdZxr2Y7rzrmo5zTh6iMJju8pVvcNx3NhfkaURpzm23Coph95g3qkpvCFDprgxRSqjRM8NNzeWS9Ad9Ha39LLZ",
  "key39": "4gthRbr5apDTSqitueEc7SqDQEzbMihuB7uQQd6rjMfvvMQ6aErzwip8Ya2HPkZEVhsXmop2z8QKXsK3QDwiJiSt"
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
