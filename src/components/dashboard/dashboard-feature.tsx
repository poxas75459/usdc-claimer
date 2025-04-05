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
    "3wdrp2LJ5fQdEfK1c5zRhJ5ttRvZxENfYuzfjUKo1CqqieW5h1b2MgjF4FM1aZ5cNG3qyzYxharbe2ybb8RTj8U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRFYcsnpTxmTYSiECzjNVQvQwDsBvuDajk9apX5obYZ2t9FynS6LwqRcKsieBa8GQRujvQ54B7MLidG9KVR3P1P",
  "key1": "5ogJdNVfnH7FTy4L9qgsJi2aqAN9goqinSqiUtgQQjzUvHcGrp4JXsSUGJE6Y1kezrrthNpHpREk2umdCK6ZXLE6",
  "key2": "2u8ZeUEdmoHE9gyH2N4oymWhjpxxSbqdU35iuSdG2ortFAjZogkv68p2HWKfCNqfYCMsL5aYuEB8PLn9eaKyFRTB",
  "key3": "4fwoZeAwYG74F2tX4r9tf3NwMcjBJEon1oNPNRhq3KZCdE6aUvVnfTTMB9BNvqTBq729d4vuoi9eoyMaGn3twxe9",
  "key4": "X2Fj5PhC7FQMZyUcfhbCRLH1K9U8WkWTsEXnvLx8uCiiYJyUmj393L4Z8p2q4bZt2t5iqCxkk4D6wU7dUxuL5UP",
  "key5": "3PCRn7th4a4VN1XLqZYPR8G8rgnYqrA27jS8Mxg7h7D9Q2E9i6Pm82tPUVpqSG4w7RrtdfEe6Hk25m9FMVUJRtwL",
  "key6": "3bdzpz5Xm2izEyW21BVQC6TQHTzCwFPidvM4LqA8Uz9toUU2cnczMER5vueSmB79gFn9E4SbUYQqsaivuchAdcFh",
  "key7": "668TZjMc23xnGnwWYSYE4dMavWBTFW4q9YJnW2ET4jNh6A24fdh5XVxZRteUJFFodrGBLTfuGSrEpTCjYnEdUhAt",
  "key8": "658axGHnLcy9ySydnbSVujpcCcx7ESWtwx8RJWmEJVk4nqoMYAzXhS2zscga1gYULvGm1Tb4q1kQ7XNXUVPd9BuK",
  "key9": "5PDZssp4MJRLaMoneVPjXf29P5t8wJtinU5BjXZK2E7DkgwSJrzNvN8wH3rMddGgG7fuwdvY3QMLJtrUufXnB9hr",
  "key10": "4YmtF6Xsq7UZq1Pq1bisXYMUACKuPvD4RpZ4zGFY3RvUzcTcArtw5MPvRvrdQRRGZMdRctzK8rukpPeDaMP5SsxW",
  "key11": "4iPdDQKTDqGfaYTRUTjTYA8rC3Ac69eA2gtZoy7WBCgUe4DiJdmNkKSKnDYTkwQ43Rb99x9UDBTUssTvA3nrhjND",
  "key12": "5rmnMqLLss6ppQ9VeEr7e8t7SkGfefyQ3bieE5PeBfxD4JM4mmDASPw9bzeHiNgXm8VFfw3q1yeVWkVJ6e8xCJeg",
  "key13": "VkhLptfEc6XVVqHgkuxYDgJxwwFTFQaf2aYmjPdHDfc9YocmGfBXCVHKKUMhpyvPYEGxHhuhWW38v5TvwKFyt8s",
  "key14": "5MtFJaU4BPBkrCUWQfNgWziKScDnNNtea47bLyAZMk27wa9Tx2RvWHU5Srs3MzgNHNS482ChJCxSgKj1NrZEh3zv",
  "key15": "Di3eZFmczVcdpSCwuM91haFFh7MRrABMgD3VFJVXn8jMXghUiAPSTog2cLdMBfa9CVerswnMSmf5u1D9YxihCbn",
  "key16": "5pvnS4h89EurvUZccngc7qjXme7L4Smw21SfyZph733FbwMBDDNkz2wvYz3Tt3tvm6N2PCWnzAMXAmYbcKEVuE6e",
  "key17": "4WLXcbrH3FzXU1BNnxZXUXu69DGmDyci6xDaMjUHZYbnT9hogYns3x4Uy3a1E5274Q6Wn2Jd3kBMTREKWSdZNHxw",
  "key18": "29aCScTE2xtJWdFuCso6ZjSvtgNRPQ2xsJT4FBbaNTxNGZkVfAB1oLbWWf7J6uH8eN5jT84MgykXBisfd3hRcj6j",
  "key19": "3kgdFPvEZBSqiNZ9dvCCXkt8CfQ1FJLJgE1bbR61HvWJMw6KHTBFNuy7KELD7Ap2XyriZK5SkuTb71X2JEgcR6HB",
  "key20": "2Nzw7kiwpKBybAsuvZfzCnQ7Zzi5VEJ9b3SCcAjkX5sEE17aW4nSG5GWBATh62fGyNPNWPg71hpnb8EBLKijmwuE",
  "key21": "33NRnneJYAxMMZai4CpEYJAWaSFHekQ4Ffgw6PAmBKXT3FkaupbEpK8NjGQ9UJ9ioVX7qFA4djRYWdnnwcBuJUVH",
  "key22": "8oWW4EMgaqpUHpgtVE8hgcvmT6Xit8VkCLsy1vcCYLg8o2Te7bBUakyKqqCg4qRSqWq7Nm1mACjFmV5E2gKzDKq",
  "key23": "DFkRLuNhABQ8uARTS8vbiaAfAFgJgYYrtwT7hgWSvo6psengfWc4Km7QJEDayP4Umu2nQ1RNg6p6Yd43zXvTsik",
  "key24": "23ydcsqqRcufX2xBrSLBkzAufcLXv2xnUcsDT7cy7nohoTXTitFxK6bpsZtuExyKwh2FV7iukaYh7g2p2TSq3cip",
  "key25": "SEhRXMYF72nrzzK3YusE123gSSDXgRvxRhapJCmsBn9fPuomZ3A4vyCWfcz5Y9seauDn66TgNEj2WbrjGbMzfxG",
  "key26": "k5EUWsPGSCWmdowKXgSiihhk9E9SX8z6FSi4XWGg7HqxGdY1f1LNuGskW59qhiHzxGessqMAHoPw2qaDNN4hTd2",
  "key27": "2pZJgCs2uK8Ats3vjETpomnPi49b1SHGqp1fnQT5oTtsZ8T9FhDgeHxiwsxByveVT7ih7YJi1SJ4QFteQvDKsvjV",
  "key28": "2PDvHM4r9stbMunZwJYtABNP2ZtLEVzZmdGfMshYzNFjeQkPhyV4DicnrYfXfUfkvoLkLPon9Nv1MXsfaGG3s4qV",
  "key29": "NXHNqbWH3PtjKVPY6WJcLDYNdMG95vhCYiD6W2U5gtf8M7ozCAcHLzuZsSxhzM87yk5UGNYaDJgLWKK9WjLdjQC",
  "key30": "5y4zRtzCkU1pE13Cn3J8CUcvYX914u33mHQXft7g9igRmJxiACZWSbtEiyHRvcGzSXfP2XgbtLU9SURjxLJ4Z135",
  "key31": "5y7bVrgVHrVi6Y6cNnDJDCrq8idw78oj1xHZ1qe8TYMWFmNS3q2xJ3rvG6uPXrJNVNS4DVXLX4kcVXqh9C3Uhuub",
  "key32": "2b7ZYEejnF3vBDDcYMi7o5LkkVroXX5NbL2me5LvQWs8jmJmevJTtHYYZBfAQueE8R2VVL7euW4U9ZWrsfnkcs6N",
  "key33": "3JvwgaRB8rxjNaEqY7277GpkJ9yn9dtP9uVVAbLtL7ryFGV5wPqyZcYHnNXhavKHxG8TD4JeDzfCBWv4iwaPhD5f",
  "key34": "41fPjnmUgDqWvt2TJTcZ9bxCi3KNg1pkC4n6ymr5tmg4xE4otuwWDoiE1rDgV7UJwASPRAHP3EQ1NiajzbbsVyxr",
  "key35": "2x7PyQXpQLHRociW8y5VgJGbGD54yjcNwPCEssfok3a7rzU4Vpw7RBVhis2JHsidXv8nMhUhuNctVdabwxBbvmo2",
  "key36": "5T4EXGtw8gmuAamfeq7iMvznpdGzoWQUpg2XFVkL6LPBVGSFd4q95K7t998UWEW2ZcSUqoU1tCUQPinigKW9HBK5",
  "key37": "j2wYU7o5w3BVjHgchQQPwhKczf3xGy9rtpge2nBLgwg6aXGDKif1ec5ByNbtyMwLNQ7z2TnBBDkJ4ZpcwjerCtY",
  "key38": "5q5AP9BS2bqsxqWQbkJojEpaPNRbbEbaHrXKRdVyKsC3Bq1kPsXGhpSJ72QKn2bszhpPBjYNFtPAAJfWiPuSBkun",
  "key39": "2aJN59XD3cTApXCthGgPHLzDdWxhW1QCjZ8V61g4kGxgNXA5SehH1ksJThrLiw7uPEYy1TAEhNrtVzEAbiP7Vuie",
  "key40": "5JQGcF26at6XwTwQRKqFaUvVDR3mB9tuDiCwtiiAF5KwEdDSMnqCvak1zXfhChNoSCTRW1tcGVWovPURSMHoWwMk",
  "key41": "4QVsQ1ayZftPw3JW5b8y34GS2PTLixfP5jUnf5Z1SGPhta5fVBNPVUqNEdV7UjczbogCavzMsVhnVBdUNjBKh2c",
  "key42": "5j8F3s7NhpjHyZGiw58cpVZhAYQmUjiW1GBYZsUfNbDEHpW2ebJfXkv4Fkj2ko7xEycqy9Lr7X7EUprfQAx8bhfH",
  "key43": "JYTp9Z9bz7jkJVCczjw1CgHorEGyaMx2dYj7Y7BtXCLoTZKboc2WYp9YPpV9LYD3sCPHu9AyyKTamaGLbHjnxro",
  "key44": "53GEFvh72ceosVjUXTgNyJcNXvojkXFAHp8CfXRgwTEPMvKUW8qXgpwGeDCdx7ZVpjZf2WLZsQsXBZmoPeTyTeWT",
  "key45": "2uqh2hs8iLHmS66vwZvMiC7X62gX2ANQQ12QThg6LkKpqg2iHkPArpPFNsdhSUpYRpppt87HLB1B37uTUM56BFsK",
  "key46": "4j77CveHpmL2nR7qiZa83XnGaMaHUwg3CUctS4reT1ixtq91APWDcFXGcPbH94dqeifUhYYW9bNdrdoGhAUe94kq"
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
