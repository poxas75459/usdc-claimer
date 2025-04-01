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
    "2CP1snXoGnaK6yukCqSiuN3cSN7P4Deugaqq8DeG3fv1PZFKkaLJjh6HCkJzegPf2Voj2Nt7N5xEHjAiPiwjT68v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDkjRiPZxaDUFqApqA8HPNpAu5Ptiug5gw6DfzsXjDfQiMGuDqyW88MDJEomQdXrJkhGuseVWewm4fr4oQ4UvNi",
  "key1": "5R1TdkQ7zFF5BAdJbvoop2cgaWLo4YJz9nWaHaPLdcp9vas19zSwp9sxCzKh36MixR136zbD4yBQg3h7E7tiFrNH",
  "key2": "3otJTJRGHzfh92iQkaCuWrQ4aSU4jxGtQ22YyyCjPcJWf8jVFFav4Aae2VZvJ37wd8ADAgLDZNxd3CCM53t4fBf9",
  "key3": "65DxvsaTfpeC6njFRnbM2xLBmDaC849qT2TUPXzNzChWKSnrww3UfbXX4Hxiaff5ezXf9AhzS14u4sCyhWXNVf59",
  "key4": "2ShUy9woRpRXaCDRF8BP6b5Emf56Sh1xF5W9JtsBHgk5S4xinPTUcNNiWv8gfk953StggxAuPXuPuvSGR5oWrSJL",
  "key5": "VF9UZ9gPygqSzyskhzgi4znZqKAvnbus4mkXjmMo275Kui5DXgdf1gGvSnsmEHcGyM6zfpNPHeo2UMqfpkRbRzi",
  "key6": "2952PUdB4MyN5PScPhBsB45LHvYGmotMBZyGRVna3JyRnZDJ4wSNKoFBjt63Ub5J39ppCWaQNXhjLL4DFCGvLw2w",
  "key7": "kGvt9PCtdYNJq3o7vWurv7spW9ZJ4FJkAYXs9jfvK3VP8d4h3d6HK6Fzn9Ew4HxaofsupFwgoSxtd5JHEcwyL9v",
  "key8": "pSjPbDdstpJuWvy1hXP61NDPeoF5TtM5hSvhbvNPu2aUm8bSUAyhznNmmb1StbpdAEXW5SN25tqujYYEEairK37",
  "key9": "8RrhWhg2jqmbNBPMNn9QG2nWWFe2o9HiXyhmPZLExKRAE3461mckFSbzmRKQEdcF8pkecvT4yFbChDJrKRD5jrG",
  "key10": "3gLPeTDNhgvFvcnGNbrmXCWQfqHFCrZQbSgis232CQHaQEDTY6AzPyceb2C5py8jCxg8hqFgQREeUNND99KZLdAE",
  "key11": "2fJgN7oMtCuE3zYThnBacxaNhVP88p9MdgdhpPwHHgnXh3aWspAHNr32tA9D687tA4egTWHgTSWgKYUTeEdNWXiS",
  "key12": "4ayEFa8bPBb3UtYEWFffQ8V16xjoVKAn17H3b6vAm8myxa6SKZzaiVGnTcbP1e24PifjcipAxZUTrjY2yPZZrwCN",
  "key13": "9EqjFtvkFdnpL5mWsK3evoWFLxhyNx1EtpjkVovXXa3ZpqN119eYLtUKzbugxpAHkwFP6sVQhS2mppKfLmzgELU",
  "key14": "2rHTP8dTQ1rQzknheffY163pyG2xW1g8vP38GkvHAmvvjhi8BLZ7oAabV6ETzhQfEMrqdRJcgWcGMnx5GLuJ3Fid",
  "key15": "SZHphhAVh2H5ySSuvG8a9GtHv2ups2CfCjFznV84LUdnXjek9sNrJQqwMx8RfYpiGRqAY1KStG3Uxwq7xM6pn9v",
  "key16": "37LY1A6L9fUUK8CKxnTfLhqiU5AZ4EUNfcuFy7ynHFsFtQKr1TreqHaobWPqcgZLgFmG7xL8eJ4zNjswmfYtmAZx",
  "key17": "38Bo7XgJNYMYH8bXjmidh3JMevgBxGbWnpqpkYzBUsYUUS18bUiPefhKxbXyw4QobHbrtPB96qzY4EcUQDvZst5X",
  "key18": "4hUkrcaWtHvQf5wxm2nEZ1xnvnKAXgJT73nZqy9YfHPGSn39KEogq3WKhjFCR5YTeH2ynF3UEk1x7cxphZSHWFVc",
  "key19": "WHBW899WC4pNj74QhPJpbqFiXGX2VQCiCovhkvsmY9FzdgxjBLHpj1eGfWrK8s7yBctPoSP4tdffVVmXBAhuceN",
  "key20": "4iCWbF4pzUKfRWGzyadwv9wakwZCSA4khgn4tpAhnykAyNXLe4NLZgq7abhs8QGTS976J1YY4xZb4Tsjpxq72pKo",
  "key21": "2FP6mEdksx9j7i6reG1Gj9MWGFFFMpnmRtdEiTV2usMBcMpypKvukge2MAgQgrizoMLEgjfGNqqGLDVTYWKd9CA1",
  "key22": "2yzqz4Sb4miL59iGEyyBdHdVYu9jab7gNJDcRUqSnskpaZaqFUapgYs5dCKPHiUWZFwUCHLFEkYZ9DZaPnyahaV2",
  "key23": "5FGv8hLkiiLmRTXeD3n7RpWhUcjeNvASLZv7MkwhR1BwnYyKDpKo3VUmGRAgxEkWSekys36yXjCjr6W6d935hzre",
  "key24": "459R6QDvDzEvm4yeJWKagcHSsZKY4bVkWxKSLrY6fVta4kyexgeznKHSQeLNDjuKLBD6dppeFXxfdVHfySfvtoK",
  "key25": "3bjVkw65CAUSPruYMPgZaq9kCMU7NWT1SdtvXsajtSxzQDpNo5RZDygM7VbmFqQEyrdnLVMUQ8F37ZCCsR6SZRme",
  "key26": "3H3eEztJVMJTQfCZrdtL8Tqto7DtrP7X2gb8hWjR5GeDXPKH1dbAQ8BbLDR9syhtXSkJyKCQbjhSeA6Psr41QVGi",
  "key27": "R7AFuMeAjmrXCMiW2XvxxCtcqbifdaanrU12QMJ2kRwS7kkzLCjWNvq2EVC1LGiifJR9RbV6qyQpKatZ3vHDzf1",
  "key28": "4KBzes13J5ihPSb4CDAEza5gJukPMCgDX4soAd5kjazBd3Y6VDd8ywHUw2DJiXhyvc8oDNK9AMRPPvGB7qXzi9Qu",
  "key29": "55A1783g4nK9XK9HS8tXnzCPy67CsNPYzmu9fcTGdyidK9gQEREJA6tpjSMiAneSvAZ3d9qkoRjqfCnxyk8qXxAL",
  "key30": "4skYaybwssWAeottbtriDnyzAiX5cqYTR5NtfE6NFgcY34vptbqrs9F9h57gjDQvthBSMvsviLdZxnRkn5boi1nP",
  "key31": "2uE25wXrSHYv1NNTYywswwC9edTvQK3iHiFQaMbeUG2SkyBHQnr56NL9NMxfsZqZVmK1cMZzL1FjF9qDG3A5MJ4r",
  "key32": "BxnDa9sJ6DhqMCze5h6SoNMgwruHii3Frk2xYkmgwpBHWNknKFQFi35nApBnBSimfN1YU87kxB5xT5jPiwmgEEC",
  "key33": "2Q94nQKAxvBhbfwKmR5uV4WQ2QNzBoHNWdmT2oKKSyvmtqoYiqsQQLcUHBP16xe17Jow95aeCYRpTrndANK6hS7n",
  "key34": "5bBsGBhpLUNG9jmchmQkyyPKwSjQogywki13vPBknTfBwPbDF8wNYuu34V7DEhsoqS1cUQY6YjmqL68gphHASB8o",
  "key35": "2D4by3L6W3yyvupqVa4qcxtne3NwDe7hwLeWrGSsWaMLxbyD1gukewiPBXJtB4SAXKpBdds2LmrgzRP1BbZpYa3Y",
  "key36": "pd8Z2CAz4vJ8dprVkC446qgQsSvcAnqGcaZWXNKdMmLXfWnScM4mXNCcGRJT38aFGdTL8zg32SLhej87VqHzXKr",
  "key37": "51rpPpKu6PTw9FpRpH2TenPnFt38CsLx81tpAVk9Snk46oE2bL7BTMfpWT8mLtrYbwKiqQYRerP6W8WgGdtSbC9z",
  "key38": "8o5kENUjGxS6tScQoFmrkWHAWrbCcHaitL4TZbcsTJArCqk9U2jJ4xQph6TfwUzreixjtuqaqo8iApS6cBmsYvQ",
  "key39": "5tU2ScfyYErufVzgCeowRHHAeEYvcYCvn5PSh1ySsrQnAdhNb5KFiz6NXvRMJZGiR9vkSv8uqULDQ1pBhRgxC16X",
  "key40": "2564cT7iyfgHZQnGEpkizmEF6hL28yENzUHvCLQU9stNgxe2YZrnvCZ7TensDXoiDP9kiuhxps33jWZnKrwUfQYr",
  "key41": "65BtrGGRDsvqcCK3XJKsWnJ4dAjiXbDqDvzuzYdDkdQU49onKif4casQHDHfC35htxFKTnkGU7VQwrpVGvNiBFSP",
  "key42": "34ynxLUhwdE33ibRpjZxgrdWci1fi1TGZQZVH2ftYSAJoCfvn13iCKFvyY5yrXFFJcShoYpaj7aWFc29RjfV7RKd",
  "key43": "BAd191DKxhB9Y8ueY2bQLnEHgnMcEtKPeJYFEytyRXpiKB71xvMJE5KdWHzSvkoQ212GzghLYGzM41KwkEd5JcP",
  "key44": "4FMn8mU7LNVFkvAiRVJC3ay7z3Ssh7DEnfjeJCVbzHEKrAdtiwrF2jopvkc47cCRc3FATRkcmAkvQ6uZCqHttu91",
  "key45": "FM8rTcVJ5BBJNciGxpT7vpuyLyL6Sdti3Kf9SDaUMtiyeJAUZMnM3uYYQGyc5t9Ay78uo4rh79GQKYjpHERFHEa",
  "key46": "o9PHczeZYhM7cUHVaLK3YLZVkH6TzdhjixPrwovoSFSNXY5TTFqaUqZUwQBsGV65kNt2n6xZqBDvEyTfUJQUm3z",
  "key47": "63uQcgz6wtvjPBZtrZeJupAjPZrjpGorBAs5MbTAw8fZNPUcR3iKieAkPStsbktknJgwh3cYEPKmZm3QJZYAWnvs",
  "key48": "65jGy986VFVgF2hzsn8B4vMZEABGqV4pzfLXYiZQjy4yy5ycf3L5pvnjNuDUQ7EXwPDKtgKU23FzfRZK2KtMstjt",
  "key49": "4rc1KbcrNmSLndAhaUzMqisDLCntyXFyKTDtJGEeS2eXgNWvKk31zpzFp3r7iuqe4HmibJ1xMGiaBU1SXajofvFj"
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
