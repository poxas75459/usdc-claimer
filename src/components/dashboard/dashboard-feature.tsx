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
    "5NH3EthaEw5ypRsbXVtpZQxX969Qn3x4oS7jqdoDNU1cijH3Guc2GnRNZouwGKdh4WjutxqkWxwt22QqQmptuzY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oeQ16nabHzX5KFstFwfsz1ta4bvuJLSSrcmiWdRtjqmvYiaaMa9wyRim33w9xwHtHVo9gr625mXW9mpPN2ZMM4X",
  "key1": "2iA4sa9p8kwR1Ukytmv4dsiEeYZh4CFggDco8oi311xjRmARVm4T9ayuvU6zmFSDgP7UWLhKgBypiZfAo6PVoJ11",
  "key2": "4RToD16rBarHRDCuuJ3A5LfRXH1psaLvCoS1G8M7KZPLbRij9ueEVKFSUPjZAVY4dy1U17tG1DuUco6Qu1SFAknc",
  "key3": "x8D6qh9uBL4FGwwZETiTcNcr4pV5i7wAbnnTTxT6RLaAzbjv6vobJzaakgih6PjQ7rtnwF6tkQewDUMYz6bFJW9",
  "key4": "29WPpktuCJ5FQZ2awDJJkparnFdGyZJsWXctKk1jXJLXnEc7H7nXfwbzSUeNu4E3ernwQEyonxA64YM7rBsPeW9S",
  "key5": "5pXk92VkxyTt7obo567uSobPbSRc7uF1oj1sXmpE7cZMuXhHYu2naKhW6gXW6i3YwSFs6xVYw7RL6hViBsz1wiMd",
  "key6": "2BSNqzBFDpbA2K59qfWuSgKVjv9eNvpePA2CKNDxaLAKxu2ucsojujZzZv1q8Kpi2QfZEwxBcLSe3boDk4atL455",
  "key7": "nfnXZiEh1DhZP4XhuPxjyufP7meBsRRovcwi1Y7BPFeSC88HFSwQrmsYtzyzXR5J4b4b9qLZSUCA5RpknoiAbE9",
  "key8": "46GoVA8vt2jq7Cxg1h1KZ2xfPSRXQCd2f8sQfm9rFjrmjSSfVupCQrATwEqu1M2jGYLerFMzvunS2p7SmeTtPNHT",
  "key9": "5PRH4NpX5nNLcsvKgQ2N3cSFLm6Psnj673w7jyMtBp6nm68rAu23SMPsg8dd3rgpx1eigvjxFzH89QAXvGDmUNjU",
  "key10": "z8jzkkb6c2ZtxThgBFZC6Tsbt8WWqsxZ9cJrtM8iqr1iatx3StgkSNXTSjJdGVEnkxuEYFgxMa6eAMXeuVchUTD",
  "key11": "368vyTJY8qiBpRSP1iDuyUFRiSSGtmDV5ptRfX2MbAfcSmQ1BmD3DpnwTps6Ki5MsKj82JfgcJ6jBHtwMewdoAPY",
  "key12": "5pA47TLj9rfdKFeCjmmdiczJHLbCHiZVp7JwfF1dBD5tsqRbWnrHFe5vnvBbue4aU92NZWdjaw9zucmJZtd6V3Vf",
  "key13": "9D42gjyzPiXutnciVFuk9ioJBiMZRVTqQLFajMkahVvTuVWYvowgA3jzBhXsFoQtJJuafte1kbBhYPqwfNFk9UG",
  "key14": "5U6QzjpDCk1D5YQD2Jgp7C9s5SBAnxchoveu1YrVpsMn32a5VvYdEw5r8syWfv1i7oMLq6hzsGMyb2SZSobEiShp",
  "key15": "4ctnACdwyP5S9qajBv4FuYwJgbn8vZmuiV8GbhJV8W8fxnxCJxLSguBNzATiCEbyJABAeqS1kTdxS5zDzCiru59h",
  "key16": "5Pwv9Z2Lc6i3CS5cw6LA9wxTdiBzWYt6uoi8Rq9zRYcfgAMxvt7MKQEFbbKmERA32AR18zQ21HV9ADUzjNuBjsND",
  "key17": "2rEseYufZHz3CNZ2nZGuNn3Er4iMhu7FZZVCpHYE4mkZkJWJRw8vEafSmFfTYnxu4VnaFm2xj6WGvz8JpbBQN3Xj",
  "key18": "5un1qEDJxh4xzhSzhRLvAWVqVoCWy3Xj81Vdq36qQJioYy2dBomduje6SQpRzbiXVYTrygweHzuVhBBPpjCWXp2c",
  "key19": "3GLdU5UZCQyCJSyqSefVxsZT9ZgzyRTW4Swq1L3miK6UUctFdKiAv4C6dwg2h3YDNTMtvd93pMzmSRPkncjupbMe",
  "key20": "3PABera884rqrHMMGqTAVq14Tpc574NHD4pHenox2Y96RNhEWQHXiaq7pQw7yjZ71CPsrkeY9WupwhfQuBjFGCHE",
  "key21": "4BxaZ86X4oaxe2G3aHbVbb17LN3kSJAtiVV3fQYqaHwrzD4FPWrDL1C31MbsQX2p2AHTiCgJwsvEEND7JYHrne5T",
  "key22": "3U464kYWexhLVvC2BKjrnEvCRvWJpYC9tCHtBSCeW2crFWvQinPRjbiCJFUF3gvu62EV9o2uyWKx8u7dnACTmYMX",
  "key23": "4AgjMNrLdkuHoWocSkWGQsHGFwq2Vw67rG5ujm7kpWre295YjVX6ps9LGB6zff3kzgzhzv5dRpgwMQRRRhuq1nYV",
  "key24": "2jqi9G7EgcL2g2oaZaShgLQQANPEdqLrij7iSeAaEMKbxABLHDfeMYeq31LFqZCirE7XUeMndPnUCfLk5kcTfeWY",
  "key25": "gbRNSzTeCJbSDfXTa8PEVrGBiA3ZYRTeoRjtHpEAr2PCyMSGuuND2Z6EA3RYzx7JraivvgAAxQp5WmrawG6RYf2",
  "key26": "1f2hMeoeZqu2xLnHqCtAk5BBPfxdnhyzFQ92gGjasV2pJWBZp2DkHu3j36MNqAoZhj29XFrfUQFHrUFxD3onAtL",
  "key27": "52cjreq6ox1C5ePHefwgemz7LVFV8LGKRBfWPjk2Cwp6FoRmDyvhhQoDWAorMj2ngkhjLoN1p1zDtdZAuiWjoHxA",
  "key28": "Ff7pfNWzjnbvduSq3SURhRbTq4ZNV4RLB8RKjXZTFptzZ11H7gj6ubdbuJpzFS3SZ1jqj1xEP2naAjCy6oeGefM"
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
