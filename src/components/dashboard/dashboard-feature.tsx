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
    "2jhd52ZTzNR9PtAq4QwBqNpeBSsVPFjKgsyWDmxcCFj1C28VESrrSMCMbyqLy8txUBY8FKdzy4AegEr946z4jMb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rRms5DymQZ62eFdVpZRw8E4LLJMEJJnjRgTQpFhYX216h3HEBREib9fGNyjSzMugekSDHfrb1CbLUCj2UQqDNMm",
  "key1": "292FAtFNp8CkbgZWkaLDVA7zQjEjyDokfFuykuxaUXceFWT9Nh9fwJTvALnuLpUejehby3znpi7VjKhJ7sktvAXi",
  "key2": "43LFaeBE8XLiDehXc1A6rdDVK9FUukkvKM4GhCWamn4iiCyL8nfZux5kg6fhRKEjSVDPqWqbfAPjRb2pMVPJMrgF",
  "key3": "3r5AcdkeMU8dEEA7mx3ibdLKVeKXD9bGDoWpafWqSWQoxTnUQyrKfUS5G4fpiDqkoiFQNUsDmC5CpP5tzb9rkuE7",
  "key4": "5bcG3NT8JBL3rpsTyCAsE5CgEBaiP8issXce7wX4seX24YZjc58kZzdjsHyp1uMSyxyAd5czzQk74jBH2bbtU5vE",
  "key5": "5YZjo4UL3xK8CySqNtq6WhiJ9bqhGFPkMU2RSWRWPgfxQv5Dzvg5QfCYXQoMBf6zTLnX8g3SyRVuyu4C6V1HW4N4",
  "key6": "jCyQizuH7m3FGtk3vyuSmG2ZLk3Ga5ns92YTGcC3Bd4uaJeiuqugxxhccWHEgzBDfKSBSKA6fdaY7itGJY4uVM8",
  "key7": "2zSfkpM23aQv1hsV75dawSqY9dbHZkFW3zyfcnkUTPf63VcMtuxTzJDeDNX6s9ctnZYwn2bkQ9HwgGXhYHHZ6yoK",
  "key8": "5XSeAacbWBrSgSnJBFMwR6RrxV6tvj9n3xJjssuBULYEudvWjP1dqwcXhQgecM4po44ayxuVF8GEUYV8YdueWBgs",
  "key9": "34QCh7mANLVCjjoKcozdyLwZwDBF2An9UeWxeDAz2AfUu4xVKxf7z3g7hap1e7CBbCyWRNADayGNwtoHWavud9CU",
  "key10": "2mFqpTmRd1rA4fFD1sVTasqZtcf8KGTCSto3uaX97MfehozYE1BkmXA9EHrbJHSYMYrkE5t86JqrPh72Wa6kNGg3",
  "key11": "3FH7bpUgnwjJjEDekBkNwiUE9y6Hs52GCxHof2pGpD7JUDkZBc8hMt1Squ37gqh2t2qXdgSFrkSaGKLF5KKskm3J",
  "key12": "5BXej8VqUSNcbjWGCHCCrrKvhLTmmyKjTyRCWmNhXw63FNn3e3FL8yuAxLXiAY3d6V8JFcsF1W6Devt2EfEq5PZi",
  "key13": "4Z1q5SrCCSQFqUiweP134haXkyVjZ7z4KXsqkWUyphfLGBCvpWh4RnX9bMECAVMQTGDz17jjLT5qidWXvWx5Y86S",
  "key14": "4pmbLTdWLNH68RqWT2jGfBMgUERD2gVWmWxZrDayq7Z81WuZVXfL6PJn8tu5gkM9An2kL8CHeA7hypHpimJNLaxT",
  "key15": "3DXr8jEevPEG5UeKXastBPWEMjF5pHAWYWhrp9MREiePtxsTFApFh2mkTYyUjycdJYRDunzHJtpLxAbW5fUbts1x",
  "key16": "4KTNu2jHr321ngni2ScUpG8Lfcqe7b3sakvCgNS92rjUgYKUvLpjYEC93s3PL9VwUdmE2UfF5Qa3nL1cHqbkH68k",
  "key17": "43wrch194hfdbxzmiAjgFeePiwADsxgKAgQob4h914Nz9b7Kt5NBHxuC9CKUbSsG9uFJaFUFYjPEvXXiG6Ed5vP7",
  "key18": "4kWY9WqV6CWfbciGf4HHm9KPT8bTF1vGnLm2Qo5mawKq83NABSoTZaYQndiZkkwZRmmZZE1HgDipjj5u626RfvXk",
  "key19": "4ugwwEYGDBncm9ChPXspF6K78PepF4PMcmYS5DGFTZFvf3ADsGe15R6RLvQgqUhVsqjGyZRhuVyiijmGSicmn7Zh",
  "key20": "4Mpv1p8xn2sADzATXgqhjfit76gS1aK2W1g1pp51BkF6fXgwsep65k4emYAGXQvMiDg6keG6qgd2arubq7b1QgJj",
  "key21": "485PXLQpWcu7rsr6LSaHzjPWYimV3ggLbsepyz2LjNM4vNNR36cQmpzupx2HrcXxTFM9YsiqXfmkdRZs3hB4JGkd",
  "key22": "5CZJDSKy2sRtPQxLuEMmwe6bAikP98aib4iy77yLLAsf94ZCySRTodBxyDejMmmhfRgYUfd7KZkXpTY3bFmcehT1",
  "key23": "KFUnWYZHPypwRv36P39jGdaPJ6btzh3hFyhjdXv4X8A68X82aVk1ZwzATcWZvuSzJhEy4cTARmhFJmdAyjhVYEw",
  "key24": "4ipnHnPjUdN4oHuzRbfUwXHYtJGHvMHchtwBDWESu2VkUEbmtFYaJaCJSqYmJYpMwQvShKT4GMYSfREgBKLcZCpZ",
  "key25": "3kCr39BkhTJVkRcBz6gp6ugkbXfvUWMf98TwCzHHJjzYi4esT4H7UutmoARLWS3T67vW5RbqrQwWjqVpp5aRKbgP",
  "key26": "3rG9NXvJaFY3Yh8b92AJyN9phfdS5yyV2UyiSGzydp3XPG4LiEXPQxgEM92LdhMYi4Dz8DyZSfSYZnj6DbxSifM4",
  "key27": "5bD3faEbmKo81PgahF8Gn4mKFobqEjFYmNCe3wRTm8TwTPdBKUPQgTq83je5MbPawWpDEoEDUV4dFMsHWLFRkutq",
  "key28": "64KdCBYaSCoRW4aCGnV74UmygHtDVFgVkQmSB3FtCmAubaubjFWRkGzS8fy4BszzvUzsr9rvPucHa6Z6v9RoeRGu",
  "key29": "2tyaece4UdcVjrh4DeP4uL5XPs6cyVjPq4H6dpW7PAFEqpxVY8qsSaM5UR7bsjc7K9YDfGYYYyjvZo64Enw44neR",
  "key30": "4NreStRmnixeMCz8Afjh9kudad9a2VtQT4b1yc2FSDRuwWjoZAT2Sy9yA8LVauPFKLfHaDe1Zyg6pNnMA2VQvdax",
  "key31": "4MVQY2oC7TjP2i4EfuJ9pnizkNi7HzouRxL9uPPUhxz1GkMsaSioDyrWwaDYBMF22uycr84y31Z5SUkvhvVgMyuN",
  "key32": "25Q3i7D6e74s2GbuRqKwyCDGgSw4aVpT8FS8LBEBz5LuRNMXquJrjgBZH7K4aTpr2N7jmNpMgU7qfKNXg3GDu2Ne",
  "key33": "jiMQ4TfAfC1x6C6Gjjmgnj1jtU7dmWKqQuNKg5nwms6PKCjCv6sycs86q2MxuYkksdDwnVATwDG8Y1683JqmPVD",
  "key34": "2kUfawQ3ELzQnj2Gy5NcStfKSvdoKe2wfwdFQpY2vL65LyFH7rZEpuHgZto8E6vsMhEwELR6xAFm8zeKGVx8UjFW",
  "key35": "36N37NXYFFsMQqdjG7oSeU11xpVJh8eMAg4tqqgBD5xJVLptZB9jfK918GmGNPsFJ28jyRJQBtx4xyss48mavGfY",
  "key36": "vuJRs4C8aBWLxa1W3ogQ8JurAbH8x7von5MbnEg77mCJ58ezFm2fN3cCi3GT5SgnPx5n5fyHW9a4ej3FrY123vv",
  "key37": "2K9SFUvModa4RHwkGVLnvbKmS2XuwEJQqqNBAn7PWNCB42RC3wJWMtZd3mcDBKghAanGKP1ttn3KdchEr2Pb59vf",
  "key38": "2VxK4hbJpp36C4itQM7C2whuaGovPKzxkYeASvbdZjS8NMPcEHTPuFKbC4FKSd28jEUaoNKQyYgZ6jmpw21Pw9Ry",
  "key39": "YNXWAysBkeUPPr1n8awCTLK9pkePfBKHt9KwxYCpsQTVB6ZMSfcQcLrvZxFdxbUN77VF27Y4BL2Ump88yLNiXgn",
  "key40": "4Jftb8UXrk2y3ooUbfnzwasCKKRSt9Hi5xRdn3hKHUkWwFcRRyc5syi5QUCBiCDdDia32jP4Wp8Fn3eU45sfmUSF",
  "key41": "ATYK3Dg6MH3dT3eNgc7PCDSqEDvWLMdRyaiYTdw8WEoYXwNij5eSGcXUUfKvTCeWY2qxWtbHEJisCecortb9fZc",
  "key42": "dvYoj4CHibDUnpDHt9jeYQ1WYjGxAo6uWfJdomWnCdWm9JLVfX1qsWHKtYKqeVo6nqAxEUuQnAryJA1LjMXeVk6",
  "key43": "3sfVd9iNvbZq3vR3fSSmKKGFraLcyrKPyNncLswji4BoKVEQAWjVw26JdybJ7crPmbXeerD4qJBhszHUsb6z5hga",
  "key44": "3WavFrZKYdQZ1oUD8S8z9PwzARqi7jc9NZ7VgehTepgMAKvZKHmaBQV28BsJ3w2po7qNWtedNTqZWk12tHkuGs73",
  "key45": "zStykUoHkDPpNtvMcqSSwA5iBhptZdywrkDCQQevXM5PdVkeFAZDWji5oqwrVbnQiC8MeBcEoC5WTLSsqNm7tRL",
  "key46": "2sz5vzXaZtgd9fBYMUw1VHNQNXnXENqGBZzRs1CoPV8dFWwzEXjgrJqiyXxtcGo85zqu3nyt2vczn3ze7RhFuefP",
  "key47": "4ffgW5cvcjSEXLX3PdpEys7E4k8xPdhLrnWPvNqdZ78pqEQ25J8Sag5HAeRU1T9fyzyNJQeGRdjC5bxBQEWWUgii",
  "key48": "2HutVihN8A9YqbXWm3JrQWPmToyYkrZCw43EuUBS95t9pLNi7o9b9GjsuxNe6euo3UoeeS9n13AoRLuUEWfnuBmT"
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
