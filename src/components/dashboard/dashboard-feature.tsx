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
    "Hz1QmLJgFhYjkrWfzWvYAr6UXUimgfMn7uxjLMFuKWsQ28n4qt45b4PoxhQtG71c8KbJgq5sMdFeHD2fe9uNHij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKLgcDkMPMExYFeZagk4n9HnJngot9v1L7f8xYmGjZyisxiF8FofvnfVZerXik3Bguu4AyWdqn84vQSYL4wtnxM",
  "key1": "3Eg2oN6WJ1wWaSem4Fe3fnJXTLkYZQWY9X3Ck5yTyUB7qepsvoMVaxBEMS1njp7knddBKxkt8g7wPv6a8zc5WKj1",
  "key2": "4Ai8XnRiQw38bCwxBAopc563D49X8ZMvc6Sf5oacmWgoe1fMF5xTAyBQ4UY4hBFndhh3KvK8cYzLwo1UscB1hFbu",
  "key3": "5jZk7FQkaDHNkdgjKcKNop56fhRyvYha9kqrP2qYmNP3vMM3GQksxyaPwhVfrXw6oVTsj4aVXudwcxnxB8HJYeb2",
  "key4": "35nWDAzyzKmjxkSvhLHdNMGenSMtwnPEice6cchyUaegYqq2CgSDmxjwJogHk6ugiaqV2SMx7Ms2UtqTmV3qKzVq",
  "key5": "5cic6WN13V1MTF2XsDoFzhtdyb9ijgeqzExtsFEBKS9eLN33pdvFiw7GM9hdpyJE1oP54EK9mrJHW39kM5Dzu6ra",
  "key6": "2HKMLwTXbjL2DawmBmiopVyC91rXvxLy6fjfHBZ3Y5Nq9EWVfe8VknUGGPvqpqDySxXZCXDrDqFFrLrCBpunzW5d",
  "key7": "dboHGJw4pcp3nR5MwB4y1Rzeba4aa4chbxH7GSyjEHn8Z7fz6LEqq5PuLZ91LVaTk9ReFLJvvF6cFQd9o48btzh",
  "key8": "5QCn4dgDaTjnzkemwg5RJeBqjDnGWV5PnfPHHUKDUWz8BmChEACbsDEdrU5CEVgwEMUvrnsxAeWeifmaLAjfhSyS",
  "key9": "2CKjL4vQ5ufvr64uu7Np7uDEXRjbcEKdMSVaZyRw4tNKLkYNAPDfUZ4Dx72M2WWKaHPC1Rq5bQVtDfP7ALPECMtY",
  "key10": "3bGoePqMJLuerFtMGKFZEuYEbdLcW21wSAC4edSKTjUbj4gjkuiMwBQDJCHZaqdmfbnCftJRJx7HUFJismag9kDA",
  "key11": "pMBmFFYzVF9EHiNum9Fm9ubRjJ7kYNSPR9Bai4348ZyuH9c6VDJx12nFxSzXJM7ssT9nEfw4nRxTajzuBANcgk3",
  "key12": "3Dm6TNLsMdnmvTa2MezAtDmLbMB4DfDTxKV5X8q6UFHUugz2pkbzxvR2KFsgpxvCDjaDUBgXt5e3vWtQGogCpPCM",
  "key13": "22B7LQPXgzzDoyRL16KwC2bUqKK1Yy1gMJjxi3ppnMrPREAZwK2MVhWtzKj6RSmToTYzbn9U9YnBBauxCbLWJ96m",
  "key14": "5MH9M6qXEMpBMRw4uq2Vcw63u4XLBBoWjjqvWtZMnjzCkXDJ8mdH7FREepqDU7unfgKVhFfZbWUyd57eTd6qB5tc",
  "key15": "mg6oX1LpHo46YM6VvqP6Mv1kdaEA6BA1JT6mwbDLxLAEuPH3R5gfaCdZYWn6reToXVX56E7ixXbWYzZbWB7GZiC",
  "key16": "4pEWY4TQyBkPojATqKtJXW2A4zrE3tWdKEMruv71jZX6wJ1JhJChugGXDg2HUToXPibtJrTR9c9vhHiEuwEG5zzN",
  "key17": "3PAzPzmC8Ki6hpo3HrYrxa6LrgQCwzNPAyoJLcSe4GuSRXWnqqMQTMVV1g4nqdFsKaB4XQrJGkHCqjLLiQ8BKof2",
  "key18": "31kHsvZ5rw1xjf4Jff56M2VgGbDQFRE8EJx9oJZfgo4yzZcojhez6Hb7oeLtPVk43CpuKph5aBtJisNtxXvFRQPo",
  "key19": "4pAtZHcouBB2F8wSf2KdBptvwTZbLaSi5yypdszB6ANAsBQ2zbRKfs1bS7bwosvj3i3226WTE2nmomhAyzJp3mvy",
  "key20": "5FFgTBxfYwvvagwqWbesKwr2e6fceVv1MvRgW7G8JHGtvJs8UjN6Pz8MMCP4ezVeQ7vTxDxXCSqdeMVZm8XL71PB",
  "key21": "5sFjcdh1Wuo6UELNqRAebgaMFaN4K3dtEayApmH2KHs5fb3qf43WdfVvvvkvdL6kjzzMyz38pR8VUq8st6HeMqJi",
  "key22": "39gTCBrDj9zjkaKj7stDpy1rAjAPY1UHr6shmzHfJsG2wHgR3SFANuU9nGr5ejCB7V2aNrf83dxX3eYTb7Vrf5pa",
  "key23": "2YFDkDKDYMsE6vsMbkPsPd6FQQbGGqAZBWDzbDoyNftLghQDh9QQoXvMENaD1YqRo79dsV35cBGbmCC6CyZA1FhM",
  "key24": "3coz4ntDcMQqQiDw6yRiVDxDo5obFQzeiFxfaLnwHqiV64bqWZzD2AWiqk3S37tmPvXJ6SNxBTv7PNnG4s3bQsbd",
  "key25": "2utXTbhoUKqxqAcrEaUDJ6dEXyY5bVo9nCGm8bsDHdeJkZR8ijdCCPa6msC5LK1T5NPXUsvrHUQBVem1hRNAcHJA",
  "key26": "4qrLcj2WzSR1Zr4FVDwh9KgB2apvrnwAL6e98ZR4UFqKqicZD2p419rf4Znxx29RZQaA1h9vPpLLzwtuSk4t1icT",
  "key27": "4rkYF15eHaotQBzaWRGxTvxG62ZgyaK8BEkJ1a9fJJDY7R9F9SPiXaoQERPYWcQnnZxyw86YrnzcpfBZKBtk8de3",
  "key28": "2qpaSjvMnNZ8RgPSuK6SVYmgJTbhgQRB4UhqDBVr6AZkqkcH6K5U4cAJz91z79nAaHu89vY2mAnudjYDRMSA8qTE",
  "key29": "2LFFVHG84VWoqFQ3QrTntWwSNkaNjAVqPbb8FZRXmH3Nhgfa65cMcJAa44L5H16qs8AazsdZcrS7AZYivEy1i1JQ",
  "key30": "5goR18sk3CcKvKdke6LfkyF1qNetgi3jDniMkxNp3sYwNU4RJ9ZXWjkNDsV2AXkrkJSSwaTU13qj1E4jbgG5qygg",
  "key31": "dtTxMveAMKFGNHAJXjEwbZ4swVuUX5ELs3EkXvhimDjzrVETX9C8Ufasx8G3qbjeEx49HuJbcsb9WUoekGL6aNe",
  "key32": "cSZ9ZgWhvmYKoGDso6J8E2QigSJBF77KENmmmhixa2ptp9FWCpJ56pFe7mkHXkkMfi1fAqgXHJnYzajhgQaHDoz",
  "key33": "3UbkCeZ7vGSbXmqXkvjeQ4uynD61EcdPyGjBd4pevWjuVVNe1tXtfX3sQoKLMaDvkS9pHUNdNqJ2oemAbtqR3EzD",
  "key34": "3WunjZq8T74Htd6LmE57ZEJXev91gVAnRxqfKMbWfBJCkyyk5xANpKzrLA7ezzKXokW1rcELxj6fmHFsvEyLw6UT",
  "key35": "5GA6crdUbdGHqnz32YL2NiGSvPqb4SLnnbHYGrd2ybo9K1HCYGgg4Auxa4KPSj7Acwwb9w6S7PFdDC71hskWMUMn",
  "key36": "5K5ebwZofdNt51wnMMRLSpFc7VpcHnoBJXz97icSSMC5pLTxGCM7i8h2a1RP6sJanthxqZCBoqQAv1os3kXjS3dw",
  "key37": "424zpKha4AfKwmnHovYtQYq6GYDxQyUtAMBBhkmyh5oWH34SxDiyDXer4BBzubcTcQYsy2LU6UwYrzkW8bR7izho",
  "key38": "4TXgLjXsycqddGXd6UsCn18pTz5g91Mm8A6ZoV5bvFBVyRXufS4xpSVLj2GvwycVFfEujLHW7mxXGZYc6j2eZeYz",
  "key39": "3BBQ7tUx8g32tRjgNgr3jyT18oHXXEiNgTStKxiQ7ad76LhPMjTymua86Dj14PW5ft9zskRHPKY4coeWJQDZgRCn",
  "key40": "2q1XEYSb3sVUCFEX3v6a2AcHaWZR99SyPczciKpNdsyFhqth9dKfoGbvmXQqPiEUnm68RrQezqTdZLpdwWhRZM86",
  "key41": "GinsdCHzutahraUEhPvV6RcL9z2bePYxdknxaJEqFnjQxGtUiCTEhmMkMoJ733s8TShpoxXH3hy7FvZc6FbrKyW",
  "key42": "5Xo9BgC6tzzJyfjcvnYEPm68vmRgBf316ZGfPFJPdy6nEnEMRcTwcrMuFMZNAcgJfXK3z9i1p3anrmN4hERVHRAV",
  "key43": "4AUjT7w7TEzTJftPnZBXg48KvnVUSmTQ5eMCYj64B1FKjKbjkzPEs6zZbWUaLyYXBkw12QvVaf8xkixwxdYEkr9h"
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
