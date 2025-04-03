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
    "5DuynQyCzhbjjFavfVXgsaU2UJYD9Pu3xjfpJUbVZPE8k8xFbhMbZJZ6TA71PGfiPHvqwK3F4sb6KGker1vaXWDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oqEowJp6sASedtvLTWjp6ZufqTv87cDY2npfrDTZ8Pf9Pqu3QgxycdQKXuPx4bu3DstG5atpQVTaBJabZuR8rn",
  "key1": "4ffQbKc2eAFFh6jpUNiaXHZfNVbBDYvVUSLptr66zmqqkbbRRzAwrPrin5RqY33heYCPBLC2XFLzs46caYWrE9jS",
  "key2": "2FaEhg3xCkxuAaXEEHZ44Y9EwKK51QCPZPmucJTJLNFeAgZFz4ExuqKYRL6j71jZ9GDhiubfRX1GS8uk2roWgJts",
  "key3": "4ddhAZYqy6Hnd8kwYf9uDkWfgvDviJmqR2SyXRDvUN1fdkZpnoPxPn9hRyaGSHrusNVNq3QSqtWphRjXahYZMoTS",
  "key4": "5SKxBHwWXejq18vCCbzcu2Qx3iGsLdbFKVPmKmHQypY2xmyyKghabgnRPgs2nQUNBJZhKwu7xnRsxDErgXRmygnr",
  "key5": "4TXnXxh36Q1YTLftAUNV91wYEXd8XVUWdssjtfuiYSxDaXqb1aSLg1ZJpRDPDwnNKucUbqcHyTvovqyK6iT8He4G",
  "key6": "37oLAsbgM2ntAX8q8Bsk7h3vkkuG4Wsnyg2myRLm9ohNVAMPa5cjteHTxrYJEF5YT5bXgKpf6nHkfA2NtcbUWbkC",
  "key7": "67JRvL43PMan2zfrvmp5ofYj8YqzBWahxj9y4Zr2kLJv3Y64GwseyZiMfpiR4jePiQ4zqipm2wWKfeMvsDPgPvu8",
  "key8": "61soT6zA5aQBjgAEK3kZoSyUknFfbfXg24gvQeKJTb7yYZHZaBZ4Gmm8RANVRnWCpeNWgdmb5Y673FjLkVZf1tAT",
  "key9": "eoGb4Z1nagPRdzTXV5DvSvvARjJQRyGsa4ff7VKWSHA2MtHMCCrTdZp2m7NemjaAjhrbVkRX2cQrNq11id4qDKV",
  "key10": "4wuNdmrKFXBr1FkHq8kR3Rj5BrR28Dp8WnVGsgPTkT8XXtB1M1fJC27NtdzHtn4KMQn5NESYgfiGGfZeWaXx6m8c",
  "key11": "3m5TWTBinJqwFhDyMNCVH1sBB3Ss3UcMmrcN7yJrzcpvBHaDkLGgQTwtAddXv3Ax7u2A6nCciD3hAKt9wyhkFaRU",
  "key12": "3ZXgCfspiYoe3QPpAoqbUvhVwuMnJQ1NG23aCWsmgma4S76uUY9u95QGMyzvy2bvxGkrsGn3K8jEi1khQiUqiH87",
  "key13": "PicRrprPkUPM9RWAubsLoYc1t7gcVVaEYbrGcytto3khCXefgb4XbnsisKBHuRXM6EkEJWNWRQVFPkRY527rq21",
  "key14": "4T9rf2Qs326NXEBqstt6NjTN9ftBaiDRzMnGGSzh8WZpXPZf7tNgsuHqq5oUEU8NtLJff5ZHdBAWQSxWJkSX7Za4",
  "key15": "3zV1fu8gcpm8oKMLtaMhYDw1BBJRGSNRuzac2s8Yejp3Q5jXufHVtRkYseSJDD2n9ksPRASoxGNKtcgb3BhsV7Wf",
  "key16": "fs5LqAhUD1qGyHoAhDs6GERKSUdbLLHEAUXRYFx7gdGewxWtP2dJk4tU6BQgJRd93pamVF1har48nvyhtwLP9GP",
  "key17": "XFTMEJN6ENdpriQp2haaqhLQStrg1cjvo4TWzQ5XGEGACcNPXnLpQweWh72rbGVapKavUDCNHighKrX6AX68aXN",
  "key18": "3FvTtP5ZZPqS4m2FjyTyE8y19mLCyNcPRTkEksqWFVGrvcyTUVJDbfo3Lu76Q4Sd5tFh69yTRwaLSfgCP91Np6Yx",
  "key19": "9gXHheWAvxdx9s865r3Sd72V71FGzEbvqb5wmLvuf4QSA6pVv3PFTybuTffzm6gYwYs5wsVFcGQ97kcxBWWVxFc",
  "key20": "3ePRE9gc4AxvZ96H3eJRq1ciUCyhpDebdDkrXXFCh3uhsDFhdSYYWaZd9qQs75Vf7wL57PXSqNcS45HxMn83ov4z",
  "key21": "3VfMcbXEMk5CQjYqSiehfXPed3R4zosCZ7EKxq4YNBRq7jmqJPKQ89nxcqzUpAPRsfuxdk8iEMaR9S1HDCpbRewv",
  "key22": "JkQMtod1nnxx92hYayatyTkP7ykFzMECYLpvjijPp9EoT3n1zjg9uEXgia2c1KFXA9LwVHMtt6dHiyVLWRwrA6x",
  "key23": "2ZDwHU2BcWiZuoFr1qs7qeMHnXEjg8tLqdM3SXwySAYoKyVuQ7VKZsUAujhE62LJrXzSHPpa3H7PZ5dHQAjkNybi",
  "key24": "3BypqnTJRDmEaL5wUJnAt7ciHeZcREyAJ87sCMTmBEx8DuCKj3f5qNgueKm1FDcPks6wcohASadhMkMj33WAhxHp",
  "key25": "5sMESdFKw9SwJSJ9GoUczdXyz9UZWfiFf4eCzrSQ45jV1wRjMfoYJvFihxQ94oUy3wQEkCum1saf13NN7bQuUvic",
  "key26": "5eZBH9BKmVdGhvm74TcRJBFs5tJt2FmqpMQ78XQfBbkb6JeMJiyM67GVXMfumk6XBTfKa8JpfKgk5MSqTdudti4t",
  "key27": "5DXA3XU8XC6DKKWD6NM6meSXUeBAzAAZB5udeg1feXq77ZSSj2VUUQRsFCdHiQzVLa5kUHF9gWP3AyqQMpzU5p5X",
  "key28": "2Lx1Ad9RWA43uQ9sC4rZB1H8KT6MNj9aJii94AVLVioVBzJfbcwBPnmm4T7LxPrq82cUA4n6uexLorznu5Lg53g9",
  "key29": "2edF2RSFfiEGxiMpp2sKwQNhJhEynhbxFzf5QPeJLogsNKhEakQShSrn4wbaT1VnbaKJ43bz9b8w4P8qEppg7yXp",
  "key30": "2eps1svB13bsU4vfRbYrKuuxGYkgwUoxYGgURyBPtkH629W2uwzudPwCAmyn9pN4LqdUrC1Up8TmFFwPVzPY9sE4",
  "key31": "4VWqCVQZ8og7Bet3C2NGUvXCim1MDo9ssjEirJS4Efj7iVNsyv2B776NSwo2JFW1jbVjgHQJSTC3A6AJKar2NCHr",
  "key32": "zTVoxz82oa5BLbJGnUSvuQSFHPzBKZwvR3zm9rTPnNiJyzidUPDEMrA16grR97WjPbSor7nwjDxwD1BJD4Vx2ig",
  "key33": "5kEbK2So5nBCezagMzBu81xsFULMMmWZ51WiGJSHmL2P5T83BGYcaY3bmQheBjqjLb75oggT6Ytbpo7thBfJ7f4T",
  "key34": "2JZYaNo5K792RnqPnzTPHfYx6WJpYRAnGiheKdEg7DoGHS4C9o9UannjyNGLarWSYxUeMpPYoe6PGeUWtvLP3sxg",
  "key35": "mo2zjEyN81uiLGQEiAUUUFBqc9TK29fN48Dix7KPBqkrZvv64UnVodhahGRCYsnM9h5bzZbrq1DZNrAaWqqy2XW",
  "key36": "2WFMSbXDNkqbSg3gBq32bwBAxXQtXuEfTXmfMohmsoTze44PzeYoLXAmLZ15ULpMQp21AhhPmuiJ5Jj3DRQpSxv3",
  "key37": "4sY3Jo9Yo8bqCUZMFt5njoZsnwUaFPZntnbvjDzz2KfETR3XFH9PVLrLC8k1WvsjXqDzRuQ2BejrUUvFcyNE9wwW",
  "key38": "4vMTbNFsaApey64hRVCUpy2T39diQqYKSFP3PzFpywm2bm3NHLYxP7xsC1wdoh1wW2d2EbUEYEbVtmgTx6DcQAQy",
  "key39": "3aBFGVkhgutuqUKpyA7sH5o7TGu7m2P7iRb2nBBQ5DXh52yeSim2BB48TMngVNjHaKhEr8ggQ51m74ZM5vpbnVMD",
  "key40": "66NYNhJysn3bFDCyjADrp9AqHD8Xaq97gTz1ddxSfoRGZX6pL3a656T1UQzN3H63fgRg1wegJcG2j4NaKTJsWYQ6",
  "key41": "2CmuFcHH3BMiyg8Zj9e6eY7VKurHTd8yA1mo3YiuyCuUQZeBqumiZgXE3nBSR1ZRnuH7K66wNTxZxeSzCtQcLRRc",
  "key42": "3LStUHf7CWZXibKFmCurZrEz1j4icLwv23VrznFsnrRr6FZvPAPyRAypYRuLMUxw7utixVGEXNe8nWtXKgGCXkN8"
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
