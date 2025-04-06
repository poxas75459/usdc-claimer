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
    "65kVujUDzVscSG75jm5BWYZZNFCx9gMGn7Bk63V8mafzR6jbuovxL4xxmF7VPCDUzhFEHjwQQ1Utwe5b6Zb4hLjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MTkRfBHynu5DhBGGA4WHBVcRXwn77NSVg6LFMmiMUVJJmuiQ9MDovnWuG2LMj29WWizw7XFJ4Z24hvak6tuvsxx",
  "key1": "3jjDV29AsVEYpdNmyq267nVvBKgiviCtebnvr48qmNx4wnLu3yMaS5Jy74ScymRGjg3TLaEDuReZgURcuYuH7jyN",
  "key2": "39LnMC6tPE6tneJw9TnR882vEb1U9rxFdawb6kU6PHcqPHKPmiS7zGC3PEjhpxcQpfm3qcTyG887VJxQ4tcx9pd3",
  "key3": "3wiPWgfUy9RnzJ7g76qTGUo5PJkW4xnMtmkzrzyCbtMVWnR3kJSHDa471f9WZeVMztk9ofdphqiihWzKF5ur9xK",
  "key4": "5VSRWYk7e47P5zA249dReF5mtp5tLeUDPsdxY1NAf7N2jWFLYZwAX9uTsAq2rpdt2RS18kxcAvzC25LU7Tm8Rmwb",
  "key5": "2x6A2WNUn7LEEvXDjRd7fEKhScFhuP25L7wCV4XVGZRUh8ixZ4nqSSrGGET4A4bNago63J6ihvx5DkmdW7enQCFx",
  "key6": "phiiFL5aDjN5GA3UNfRrkfJoRgYMKeajzJ2qEAcXoSPHXTghNBcJuub5HqeULjxPtQxucwTersYoLpVFDj3tsoc",
  "key7": "2oA8nakexvy4PihgZM5JYBwTcGwxxpfM7YZi4jr9FGHewZ23wcgivcXyJ6ErghWgFXkxKKRb5KojcpUAAMWCrLL4",
  "key8": "Jh6hxytNGnMnUzw8ifdgnMkucLr4biG5nAb4LV4YnV4Y2ZKT3J6fPJcJESH2ohjZA2pKbcTi9LaKSBvorKS21u1",
  "key9": "57Pigouu5hRX1xGd1jayfc29vUtYYnWo2j5mT1RrU8aYsx5BbocQhAdDur83R7qE8XVTpRoEEARQL1gayWwnD61h",
  "key10": "5oPXJQ48RVZsfUdR2G7niAUzddzt7NXTVkNUKsvapiXqaD85myS8ttq7ARtguoyDFLFPQD4HLyNiaiqdH4s26YeY",
  "key11": "2yEcsi8tA5L3pddTZnTmFm5qKbh1RBTGZDtgCB9tnrxniLHpRTmCE8FcqchkoRm7NSbmyG7FRBbJtGCJqzCtwiak",
  "key12": "44G6EMWLUr9wPqNyY3ynazN9npphERq1W52GxbKHBo9gzrYjSn1Rk7aeB9zbeStnyXBpvT4CULUrXT1seXt5DPsd",
  "key13": "XKVcu1XH59q21dht8KnrRaK4Bu8SQ1DBNa9pKZpoY3MCTD66rL6TJoMWCrQfZrnwSUi2wKgTeU7rrcVoTzsJtn7",
  "key14": "4kauy7z1Ea4Hfbnh8i1tac6G5xqvchobFL2Rj3X3z2nbG4jncDoXuy4GsuK861ig3SLQ28AjecwNubp3tUMiwkvq",
  "key15": "GiXmNbCvry6syNhmLaZTF187NNGJLUQEEqRgM3wdxm7VJFhsZMjwwdcCxva98CPPc5C782Y8ZNmSrPFeBoWuizt",
  "key16": "5f6F4VvBiZbPTnxUL3qrB7onm2iwaEScLpM9kBv8K9FgMx9Vg9kwnoX6t7BHpHL7e5HUk5jg2RwPQtp1pRova1uU",
  "key17": "25irzaGZodevG5PoaKvzH2zZrg1GELiiqFMdqAfEuwHpZq7iY3VWXRLe2YbS1WxCBo7ia4kkc6rVN2XHiRfNx2t7",
  "key18": "2EfTbgBB3o3nDx3KCjR9YZTfxSwzZ5fqAqHKGNjWcUCpVzHLXGW7igHTDRyGifooCV7BAEzx8Ass2Lcd2fk87tEL",
  "key19": "Fy6hAQ14xXxBmGqDYraeA8BsnN5vuo8zXf1FhQAxocAosNLc3B7iAtUMFRsu1iF6sMKhivoe82VpoY8Pt6iT2hj",
  "key20": "3ayzESSzSAKz7jxPYMZ2XEsh9gB39p4HHQ4Yh7xCWocF6redXzPQ8jVVwbf49FVoyXWej1z4LskMeKgANfuM5ioF",
  "key21": "2JfqusQvW9m4z8JiuBjEYjwC18Z2oN9vZPLEoD7b2PMqtvD9oAbSoXDd2yeFDd7c7EmEfK92ifAAQLRfwhMTWhYB",
  "key22": "2nW1bXa5rD1xYrzAEs75LSwwHMs7huUfgFBjN7UScEyo7VHFvHqat5mDRRpoBNprWR2YkDyEf2eErkEQ2mgm5y16",
  "key23": "VEE9DKWkcurw9Urfj9PT4hHkdoSd1PeS1FHEmFPo6Ay1HXpVRNTdmjdtH3sgNhLXajUBpikCnH5TPiKveeAHjJZ",
  "key24": "SwbZRWwf7hN1PrBXdZ9Shy35q5EWUozoT3m8sq66BVofsona19WTVas2J3hdkYPP33BE4oAVaSH1Q5a2wq9D1jx",
  "key25": "3ZgLPLvB1d2ViLPwLbQbvsdzGmA1nA1VFX3xitPWvpvSV1upsGAHeKssU9iPbdz5MKEMJPfHyUdsjKJPxXXpmvFX",
  "key26": "uj1ejiKXThw6kVpVRo44EPHXKQ3vqWUCYTbdaHqkqSNJGeeCQuajisNRKN69AGXVxQPowUMbsQp12sQ2SS6NSYF",
  "key27": "4pNYeE1JKxJkVDLsBLB5Q8yXPXXk2rehP1MaXLm2JRKjjBf3z6nQEdSR9tmDH8tzwX8mRD7fEbnWdHfW66up3hKA",
  "key28": "4F9mPRqpThjdNpb6uYFbVrpMgENjK47uxCoQASjEfQ7SmBVvkCsrv44Hqi9wK3HQNkNJbqCz51Mq4FJUUBuXobaK",
  "key29": "2GfrxKFUfGUdgAkCEDUimkJKoBM7faRVxf6HMDKwkbwggxuJVPZJBygsGiPsABK3pe7HExZfoKBk6eyGyaUGSDc9",
  "key30": "4kttcyXYdEwSJtfxwB8Pj7BHwCsXWEvpyrzjHe1JCLQPJk1yLz7w7ioV2pi7pHvyXHcchd8KNejefGUPiK8K8zMM",
  "key31": "2bsqf3qPFcq2X7X13DQ2EKDUmRvG61WwWpKstctDyHMFDA4eyuDwEbptUR5B71FNSkczWTMwnnPX5BFZNWkErd5Q",
  "key32": "3Rcg8B33Go17EZTkDyBsS2uTxknrpd1v4qz42cXJ7dVhbVQ5VPJA4whVNLYhcijGixJGgNfGAz5c3r2LSJhizZyY",
  "key33": "2hUurs9vsWAhmHi9Yxr4DmLFbx1bRznpFHwwAkQXWDUNmnNtkEAGU12WUzYUzok3qsxVMHCzyxCZExNLdhGpK7Mt",
  "key34": "3TeQMrQ6s9xKwQgEGjaJRfi9zRBFPa5XhFnGJogBCpSGqYbiAGLua4QLvyNLvBheMmwzfQvkKAbqGWtjduw8umxb",
  "key35": "5E7z87xWXJMZG95Qx5JPFvZxNcxECo2wc1zXR7UDfBpDR1szN1r4FM3gBeuEuLA7ayQtDZ8oqkmwuHzm93SjQ3Nw",
  "key36": "2kU93TV8gF1GLF1RdErB7FZ1JVrtEpXnJU37KdQyh2su3XpCkUCEAjU5zE1V9ZWTaPPLQdeC7xPD1o2ZR6YbcAca",
  "key37": "3wMf93FatE8vzs8dJcvaKdDjuqCnX5vzX1u7a2yCwptGqrDCj7qsoLKwecg7raqtQVBR5mZU92Ci9efgTYhDuY4",
  "key38": "zcbTvByLPQYvme1meHbAWmSjY75FNEegZAxhw9CFUVBFdf7qvqJXRHaVAaWtnKqRfquCe33AwYnAc1UmAszLwWs",
  "key39": "2W7fLxdnSPcbFRVPM585DZiS6u1sBWNGoKUmgHx6Ust47TwxL9Z8TTdpjzEWV3EXkPzz773ixMYoyPyyL6iK2tHG",
  "key40": "3zzkMumM5S3DY6rAJXZ6n7zTmGiLsXY1rV4C2vjwiGgFwU1GjPCD3DzyJR3ty6FLRmfkvf8xREz5F3SDk1hsT6aa",
  "key41": "4azaWqGiom8aJBJhnQWKZVoX7rMAKcYmtm48Gym7b9K2dVBqEaf7Txsb2pwGsPWcRze9vdnPDtyVyk7weNDqdYBS",
  "key42": "3JphihAaf8asWmT91CkZfjkPKwETWETwg1t9JeDmfcLKBjmmRvVm9SPbUQne457hSZmwjHaY61mgNmcK3HSkiSGC",
  "key43": "2YjS4znWffVwMcz2cBoYzEXGmYnv2EmDDt8P35mQzGnauhWrD6hr5rDLV3iGqyHDAT66y5qVXDcbua3yWaC6osox",
  "key44": "4VjdRw9qjVzW31Ai9e9Fg9LFn2498tq8vFnzZgJiZmgHDDcwyeU1yRurxMDFyYPZv8brbe1T1aF1c5FAqX4pCxWp",
  "key45": "3NqziDC9MthCnYu3V7XiwkzU1Y65csxwccA4WQMF9zGbEnWE1vR9KUD3mQkbF7qvVR2XUJNwWjP4HzZsQctNj93G",
  "key46": "2LEmLCyGhEjxEqdE8fos3ptKrUjQwydpR21Xh1QPfiDWHQRoVqPtiiEx5qjfqQ2odNz4UncUiCWGn9z9gin9g5cW",
  "key47": "nPjob4zPMJ7YgqnJ6YFxmXRbzanHyuwV3QcBTCNNwfZvmmwPYYYQ2TKp8Mpe4ks2jGof7LjDSky23uC4NYgyrKa",
  "key48": "3Tmzo2dKmjApxaf2Nbooot7ch2KRV8yMFruz3ZPgckFLttZak1UjgroDXwcNS3jEihNMijaeSxhFh7b4mLtKqAAn",
  "key49": "JPtphrgz7zUgiYvj1d69vwACP59yVyDXTctrDE8brJHrGQxUNReSGNCJfFtU3s2mQgK22W7pJ3XVRojRBuBhaHb"
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
