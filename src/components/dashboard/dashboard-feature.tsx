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
    "2JqCu8U7qyPvQFNxwEnBPkEnSUuqamemxkLhEFBX6XmhzAmTHc2zerMpfVPSu5qhE1k9y4xPGWsTjpkjMKc8fCuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gYC2TaricpBs3xYHvwNjEkCDu4nxUcuz2qfrPW1fdF8ncjhJzkvEricDsk5Lv9GgzY61r25jMsfftxmp4XHDnPB",
  "key1": "5LXnaD8jPoQTbJpfaDTiL7rAD6936HNYq8ae218rmjuJNGZ2hgpjLo3NVA31uAejdNCCvTi1qGBGMZ2mZ2Zhkmiv",
  "key2": "uFDJVUzLrsPEqzVYsuM9uAz4FbNvjtTLfm48ePeK6Pq7RC2zbgbu2ftsVmtxMSjboJMVX924yocYWaYMR5d1Ned",
  "key3": "4rucQaswf3qrRKssjKkVkXqw8ibaujJaVnwczKALPweisa2qjE1m4XDKgnxZHMVR3UsecBure6cvhWKidgQp6Lhv",
  "key4": "299MnMp35Z9PApf3XmjQ1z1p5nAQpZssoKePHLb4FmpZhCDWN5SMNsixsH6WzwDYWU2Uz7yqZgYXFHMhtiBg1Za8",
  "key5": "4UCyZHyfw9kv3fCCt3SG5qWyzcbbokmC94Q51GywF8CM1vPtY31bf8KthxzLMTmn82vYsgqJu7B8kkH1g17irUQR",
  "key6": "3SAxwy79nob2UxJFpWGFktqsdY5m7kV9tVEwQoP3YsipEfb1gwFQ8GtheyQJkCN7UzFxnWyZRjgMruszfw96yGCF",
  "key7": "5w77tXSqfrnqqouEpShuqhnLDMdNWqGC2c4svgKJe19GXLJhmnYc9rYuW2Tf5D79ioN5hY7H5RazbTRTEiXTDr9j",
  "key8": "3ZQFSHtbKyrjLm8tEEY1sSJk1zhcW98GkBJBtqbZsGcdNXBVqi7sh4Y7CBXrr1eRgmVfopkXoZYnwE7GX5eyLQRt",
  "key9": "3Seytos1ZsKhtGMcDWRQnJK9ixctz1vKAKAd4JuqgWFh4B4YJHQK49jkUoaybW2SodWhtineK5hkSAdKisDqXGm6",
  "key10": "5a4txZqVqf5irGmyRffegusKUuzgUinfRJZLHq8no8SfcVc6ropHYRbx6Aj7cbsrkkRZEGRHRikvLC78uuRCZpPn",
  "key11": "5tTGspmM1fsEpr8Db9N22VJHZDezuRwS2R44rxHP5aWv89QNjy3dZ1fXS9xtrgjLur2vEYtAY7RYs6CQMrHWgXoj",
  "key12": "23YSRGzezNfrzdN8hYTmu38n84j9miEe4ywiVq6RLYiAtTnFZAM7qWzn7EN5Z8vF2JfYkSuPPBSiL1NLTP3MLC8V",
  "key13": "2BMAiMbxaHGFP3h68gaX7uQJ5sK66TVTHkaDj7ZGWorArWy3fuKMYrRvtLhhrzjecjPNN7Uu2PohKCaWfo34BRBt",
  "key14": "62pgok8kVFgFVVkntA1XhHcUKArDfsA5u2PrYPad7Pfca8jYKQXNfWJBuKL45k54TSAT2YVyXJ3qNz9QhaCyPKdw",
  "key15": "gcCgKABiYdY55MC84TLB1oPt2zKHsYbYgeSNtK5cuJEYpix8rxBwUkEbdzg4TsuAnLTzkV34SjqNXZ2MTvVzgC1",
  "key16": "43yeaUv3kKYCotPqVabndgsLpy26cBuR5Qtcy3GGHmmYkX5PUtxQ8DmRfgmPAPu8QsjSAgy5e5Yh3X7uXR7xXfyz",
  "key17": "3GHmU3X8C4Rc9k43hvBQuJ8wxkHAJpmE4Rpd8ruLF8RH4bfBcEMadsYcFszEX7n15B99HuopFQ1YvefvcdwGjTAt",
  "key18": "v3GNEQeMdGo8DU9r9jGE24BgRuyJXuVHDdDbiY13prLKoxWuR9fvZE5SzxWLLpgQ4Y7zhoBbVaNU86x5Me2gFaC",
  "key19": "5ZfPudYmixMVdwjeSqVchVsmfpwTmwtiBVxpo6zRmctn8zqGXJp4s2rvH7o71KvxqaFcs3s6krz1UDwQneLE1tfp",
  "key20": "RfaquvSA3EA5NSZiqqQsnZy4tropj2rNYSnTwE12Pvwbt733aFNvX4TLo5ZYz6VMstcgbUpqk1EF3FWg6J4GQo5",
  "key21": "5XWihzzzohXtgKjf4vEsi2je2xizvDUyXps47wx1G92BtobwSZZtXywVPM5dRdNhbZ9tvpeu9yEK3cac271jUmGd",
  "key22": "wqRC9ARvaaiBCzGr2aH9Hdi9UfywBo4VWJAJicPLDim9RBGebiNQtCo7rL7nSiVf7nciMMJE5Qdm5ioRP8GbmBr",
  "key23": "3pazSTeW56R71J9sNvwgRfCsmUxD5CbkuUW5sGuGh89hoP9mLQCMHN1deEgamhubfvgN3CstVYvRrHAhNgFRFDv4",
  "key24": "4DZuVmoB25Qk4AdW2wQVv3hjC1r86bCmDuwss1maZNEJHTSC6jsKTdvHKUCF29GdrqtRTZ1eHxmwCpnLyGyJ8nYr",
  "key25": "4z99yBRiEvFaPZatW9NqSmta32pHcS4rgpaZTW2MdpzmaTVcwxfPmBeA4KJ4Xs65JEpMLHwQLA55PvsWazTiU1cB",
  "key26": "CVRLqaaq6SUM3aoweGvipRU5qztt9nRbvydgzbk7Zc1n4QW4PEoSpxvq38c3Qv2pZi1tUVdBRDtPweFJGM2aon5",
  "key27": "5L6ofh3VyED65T15vPjaRUXhAh22Puo1m8HSstnKDzTF3ktQqiJKNXG9dUS46HZkvhkJRVoae2WZZNtcJtGFhoez",
  "key28": "4SHptkeqCsASS6VXoMCPbu1YEexDq6pXwiCEQVUScsnFp2E8rEyuhCZ1UkXp2XxTgyaoTCV3iTNLVxLNSYaBSc91",
  "key29": "3vxwxc7cH4DKw2dBDFzGo9gzLXXAh6uZyxEm4481HDMgdXxwSfdhNmhQWbyE2y2PWm96M6uLwoVSmFeo6tp4xXVr",
  "key30": "2GZSr5tq4fyGf6J8t6Tn3nbm9BvtgDAgsXzcMQ5ewFBmpH7FLPuPkyTyApPGNW3ojnXb4iRWMqbA5T36FACVut4A",
  "key31": "GUryttJnmRfpsWDGKZ1mPYLrTHNmSRrEf5ZK7j8CbewcUeRAzVcMqvBGB7FQ5LcAXeUqnkWmBPGyLUXQ3MCVeHQ",
  "key32": "2XrmQJAZCqtFXn4dTNBvUn9NJJpzWobGC87t88y7pdGhN1WS3qGips4sY2ejo5AqyTDTj98bvbfbW8zNbffBPwWt",
  "key33": "316ShyfiitEoXHjNHw2MU5wruGaHdEM4kaJVUhDJyKa64u357n3kShitWDfmyPwczwBgThzewZPweEry46Vxmot6",
  "key34": "2bnRg2ntfaPXL9r8XSYELfAsZCRaGnRgaU75V5fBT6dc5PZnpYd8SRyAwUxwH8swf6pzjKpezNDTNbmRV2j5TvNH",
  "key35": "4tyMv1rkB5Zdm8NSZhJtaYnVHAB3MxEBHN1AiJuC5McnBbUGCRGR8ybyjG1pERBiiwU93AhyQU4goxgGDshJ1zaX",
  "key36": "23JqQqpsCm1SmrZ9uTASBmSiLA96Tc6TAcTwded6LqBGeqECz3pKmz4zo9hfxAXEcXEvUPtoyCE6DLaSctzKR8xK",
  "key37": "4v1vhYD9wKjDEMNEB2tqD17s4KvMMj2eKwm6tyAcGx8zcKkGAYY9VJhedR99Dhjvvz3gePyhpavnpPmwqs6yyZLJ",
  "key38": "V8Qmbfc6yZufmP7o6RnDPAh39qzTnTqsnFFPEaPPteVouNMHwGLtNEUNdEt8MDSYt3N5Ef1yTU1K4QwpVNAtPEN",
  "key39": "3rF6RY3nChJkzFu31PvCYWcnVtWafY7fTar2ZphM1qRLS3Nh3wJ73z8UxgKavzbho9bXFFxhi58oEknxFEzMvzrM",
  "key40": "FvjRUwGQjjyJHXhZUHnPqxQALcV6RwayhKjuhvbDDAT2EDKy3qwM1Cxx64yChSiWmzvqw7vz8w1cVbiN2caARQ5"
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
