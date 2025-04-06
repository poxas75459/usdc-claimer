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
    "5A29A77ykytoSwByoPEs1TQU8XZJkPUjTbLj71ytqFG2h52ET1EQRQ2XMCEh7KZZaR7Zm1TEmnVAvX3fLwM9nYr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZt2ZVozsNQApWygFW6Sc3zV2PYLNTThBwD16X1HFWeeyjQvzbE4C8wdFuiJRn9JiAYWxcvfkA3EmEYLezLDJrZ",
  "key1": "2wZsNGHPVGNzbNfh21gzMVXwCDcY4EFXq2oCcBUepYhhvRZgFfPAh93Hr64ZefD6H3Xq87t6vnXLBrnFZCfhxu4F",
  "key2": "3YGsz3UENwS9PfRubk41w2i1kNPbQTfskyPNkzTbcSHCefohWbcGDdQ5uKxWrQrpS6Lv3h8dsSSmNJPGsqhPx4At",
  "key3": "skbNao6KJBXrB93wf4A8pw5PP5HH41va2KWNAbCzg7C5M11NT6HdFKqA6RaoGRk6rQFMpF8sA4oNyv11xq37im5",
  "key4": "2tNNEB4ePf92unQUp3RNWrY74BjkJ9kRog7Vz35oxQreByUE7AYJFmF4nufxgsghwdnMK9uJSc6faAXMYJBfaq6F",
  "key5": "2dm73GnKVgqJcs4n5Jqkb67Wkg8tPNph8aTW7JB5p6FGTgxJLWaDfNHdTNVJhfqEMJ7wEHxEpHpPiDwcQNHubiRx",
  "key6": "4aNVuz5gcBrPwiW2zRzasi3XvqYsqgRCtHAoNTHeeDWr7C1tvYBEk2UNPvr1Qy4XzzYkhSchPd4RNcCzSFuBLdFs",
  "key7": "gedNKJg7BR3H1g6MnppwZJ8zaXmDZ5iNwmXBjpXKuogPaPYX55wE6EMX5nfcFYtGJpeABM8FUfifnKQof1ZYb4n",
  "key8": "3HsvBZVozzhShZcxLegcvALmmSP5BaiJ9Eh7oPEFgEWiuUUYnBuuny2M3m1wKJ4uenGfayQGPYSvzRxd3AfgSZEi",
  "key9": "4M5ivbr4z1v1vmdrmVAmoCnmpEnrFbjD9RLsGGEojcuftcfYT52wY1V1N9SyqSxptpjPxrqpiigtaveswmwLwzUH",
  "key10": "3nVu2APYjxazWLaza88HN4AsoMxkgASaWL5CAQoKBR877uzjrh7vxCMAf7sSMzbEBo1eUAEmW9sGmAefPtNiYyiX",
  "key11": "3wKzS2DazerHiNTZT4o2MkXjTebn7wtXCukZ3ghB9Ts8ovgB3nL8APTrmAScRVGXJsLYpjjwrNzK5zLtiXoKh87M",
  "key12": "cbML9Bat5K41hZtDPTt1mNvZesRP3UnWiPFZymxY8CNioS9U1GBtMyUSkY9HW16rSubtN3L8hMgtuDAe6vPTVby",
  "key13": "59UkvA4DqGA2mArKQJkGtAi4cxpykQ8juzko7yrj744ptM5ZBZkWAYTA5DW6R1xe2tPuUp71vek6RyPTckFM4WBK",
  "key14": "8LPcmZcUw5JCwWoMAwf3vmy6CpKi2rpqp52XdZuoNtvqNhFvuauGrmebHpLWinRgM9VXr5bkFvRJQTATpyc3LnR",
  "key15": "571Zq7hmDLyRMx5LxmVHyEeC61g1dS3mPoWR5iqNn7vwHy8bm4xJD7hFYfb8Ht78L66WpG33cWnDoqM1wYW5bemD",
  "key16": "2zYerszKhB67QBA2xsZXaqU8teKkPnuvRq2uxTAxoET8iQTXbh5RXbPvDk4RkHQyHKmuVGniW1o8S4M41PLCKq24",
  "key17": "2WcZxMSHcrcxd1enVs1BqdVJZkmGnfSpAVD46PhrMi7xEDKQey28y6bS1CcBehGcDgvHstNwT6sNA4F2RT3uhoUB",
  "key18": "44JVGsq1LfHo3QsBP8fpNc66R8YTfWed6Aun2V9emdbYSUkmYmphyXwr6exWFvf9hPzzNueCjkWDibGrVm2WvYVo",
  "key19": "5Cmupqio7eUY5iRhMiRYuzFQU97YwvLAbDkeCiiTjhfmReBgdfA35ZfzYWbvwK1FvraM3K9aWK4L1bArVYBPYw1H",
  "key20": "59db5zqKwdizouKs235BboLs7QZbHW6JBot6Ye3zG9MFdvAqyeha4shEbyRMorYA11wfJ75Ma9958v9NhMd5bkE",
  "key21": "5ScACGpMbLNCJd9og3TqhL58LXM4pCpEAJZSvRT5n679yL4wcxnBHZ1dD1NFqkMLKF5P5GRf368HFTUvCe9pppxZ",
  "key22": "2Ux61e4WfaMBymEhRzoSwDrNELkqwhmwSa7QVktsUNWiBzPpREGoVsiJwreugCGQVsB9PSYfy4mQqAu9aUxVgZTo",
  "key23": "3nba4FkCFFuvV4N8yDo9E4uMBNEv7e51esenU5sNQBUSjzep4ShQfBNG4kQEaEQqdz3nrdtemZi4Ru2LBEF9MszP",
  "key24": "2FvvMM6m1V9CV4aMGLoBpsfA653u2VPHGQGDnR2wUUibh7xzGuJENxUgBFKrgeq7Fq4mdpottRp6qXPovSKY1mwY",
  "key25": "4bDCzbtVyK2MNYvj4vdLURsChXY37SSqXyXrEbisG2a6oedmxZFKdTbxaFSdUQ5keKo5em6mzc4K6ceQqzTvJfon",
  "key26": "KisveDirPsxf2X2hymb5URkspLM4Zr2U8jjKreFfBR2q7km2vHHf73JyUNm37k7d3UgY9W8a76wXm3a1ZPJAzTn",
  "key27": "3Aj1GkA6HnznbV6kknJPaPksYu7V9t8iJqg98ybYy7fGFE3UiJfhkA9NrEiVCL4DpfR85yNepyAkVEHGBZvhjpin",
  "key28": "4oPoTHRe9a8a9Ew7VQ8M1fDaDFHFmiTXLDgApfA7PAMK5o2gua5dqzs3YmmU4Qq2p1pXhhB4KKHkKku3dR5bYYx4",
  "key29": "3mUumpvVydJ8m6n3xoZW6yGWLV1KkjGVNU4LVTBUrz3mD8RLVyv2pH833X6aeQDAZbEhkB3HAyAkMPscKJupa7oG",
  "key30": "hoifPR6hzYVYms1eU5ddgzXomdUVQYziHoWwAVFA99KxuAPBzLrm1f8SkbM1p7CY1UXMgNNJpn61eLG2uDEs2xd",
  "key31": "ez23nbeq96YunR9FAz5z5txSGnasTC2T58iKJxxaWbT8rZtPZzzf4iG1qSWp6x6YmwwGM4uUeWKvz9BVo6Tp4TL",
  "key32": "2sn9xKU9W6crGSJ8JC3sehQaySFmtwoa2qofRwWDzyNMAtuvdsDyBc8pWBHATizbCJw9oQoNT95qzb8qmuYwgAPT",
  "key33": "2DzsfP9F3PnKakHRiyxqyv3RR21d5Sx1UkpbJGb1ZtwdVXo9CiuHXuSqFLg6fESUMKYgDH78od9P6PKBZWz6ucHF",
  "key34": "4LABqvE3eyczzVDNqdP8ot6BPNdwqfegm1KzcrWoddzLD37AXscfkkLJmDa69BcksdwHGbHLLAgwm7h2aBPCaDN3"
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
