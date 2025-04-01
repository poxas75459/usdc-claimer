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
    "rdt6hPkEduCENTZCpeq7WUFvrNPnhqqLbjZP299bqw7TdWZs8Uaztp6J4MSjbnE7vSymaU5pbM745fmoeqhwcV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJx3bBpdY9tndgm1U3qDuoANx8TBmo6WNio2yBgT5SU8D2LFj4729Efbed3q7JHugFHMZpd8FM1aW87xGESFTuD",
  "key1": "27T5pF6NieLD2g3M4nnDuEfuzJM4ARTZM23QiKU4LHW2a2n31YLtNnQVP6dToNztqG62ooM8jhFkm5Q5uPr13FEh",
  "key2": "3BEqGPYYa5psdKT1be6EctKVjVprTBC7PYGZWnSgyx84zBspBzcLZQkKsu9V4Q9kGG6pdMaYvL4PyiNckmi5Uv8h",
  "key3": "aBEyVAmbcE7e3a7ScQBGD3KoGMMbwEvUJvZMUiHxW8Q3SyjXeTCunwU5x2r3oKnwfgJ5towgnuj6xduBAvkRkNs",
  "key4": "2oBKsJjzKfkRddLkwKtK3BfZgXfBcsa7LYmy7uc8MV8MpFgfNJdhWuPUtmiQU9XXBzZ1WkEqre79PQdvGssG3HKC",
  "key5": "33dYHycjfkFUzTohX7h1zJbPWrTmPUn8oZU5nNd449e8e9X5pR3A4cfdkovN7NX83vrQAhUb5j87cGLjybY8CMy4",
  "key6": "2Gb5zs1APM8RAFAEt4XbrM4RrUzVNd5DMUvADgRm8fLrDairmV8eF2jQstf9ki8Fzh8hXFwBs6SuPvzRv7JHSNjN",
  "key7": "3jZD2L7HQJQJjQ8nB7aTK9E48y4dc6p8HCgBL6mKH6fBxx95ZPtUHNgcMfESnFx8QMizrLiEiFf58XCrQTT2L7r1",
  "key8": "4jthSV3UvY3LG3feRzLXZ7L8EMtxZyruGXiRGeUtadvJ3hNsbtDxyyN7oYrJHX6pM9BC9RtWefTauvsW7mfiXE1J",
  "key9": "dWJTDdwR83iTGc1gWG7pdTDXbhATFLc82DmKgnoBVcPWC4CgKb86SGer3oHBMfviFyPUvmUjt4e9dGq9j9MKonJ",
  "key10": "3yHJ6pDfPGJKTmPVm8D4Ms9FnVWD7dAvQAwZEq8jMzb1idEkYnZF7cTydYf3dC9Vobre3E3LZSjPEpMut945E74E",
  "key11": "2TmyaS45w4npoY13D4PRzw671AiBhuYUKwJ6B3XxL9tTXSJ96JS6Ya7vXnXFxp6WfEnMnNTbZGUbKRgvsZdqhaAB",
  "key12": "2ae58mAnFh9FHUZexSkeQ9b2TbUvX1ZkTAGmtfQRwq2iBUmghixXz59j3EGmo8LkDfWKTzBPLPXMzgcGCLbQrvhV",
  "key13": "2vTw1NErdbrdnJsp5SpffAqw8KjtQrF6NhFydjvFVWXpF1tLq6utue1VDud6J5tHfRYRt5w9dVniiAGkUpMDf5K",
  "key14": "3rbNnSmBXV5TFAEucKZVM8qv6NFE8obP8eYG1vb72JQ6FUJM8TmXiEaqrmAQN3uC1au37bFPeMmCSXjFC5fDWZcN",
  "key15": "pLgUZ57EutiRMbhYa1xaaqHCfHKZH6VRkWzciNMSZsb21FmYGjT3YCuB17JUxcxszUi1ic7fXzJAmG2mKc8Ai33",
  "key16": "4vyjiZaFvXZcetwG6pvfZxhuAqb1E76MQVV6iEQ2CMyjKg3QsTsitrcVG5ztQ2hzfs83oAaXtvU4YGMsbVXoB6nh",
  "key17": "3Y95kR49zwdghS4kWT4kQudnbjrmCSryLnwdRfq7zJUfynMGqKAkhFFU3shgYtw6EFTryDGLYszKqQkvHQi3AJyD",
  "key18": "3ht5SVxtMt56ccqVPVjjHg2tvktUMU9xjfkd1XHhfSC2BGkoFLEkcr35qEZBXHRoytwGWd1FfdrPwHRtMRBg9Qdy",
  "key19": "3xAEEfq4VBGibBo1xoAXWrVKuqZrq3CkAKi6ceLNKWX2Dj7stibdhqKkgMgB3apsigo53mfPHgpQrdQ1aEcRSy7S",
  "key20": "2cFwqDaXY38Ze2YK9Q2V1Qt76puakWTmGyd18VK26p6uhpHMTJNavnnQNMHrBEqrkBWBhdB4H9mmVJaGjV44aNFV",
  "key21": "47br6sL5AapLuoTBWNw8MuYAnPX1ocLGu7HfKR6oLERTNfx3UHgdZkWgYaGR3L52YhB3kXcCkjbU8JwC3NvbpBZa",
  "key22": "4nCvwaKaEWrL2PFiYnRvyQ17EP6LL5GBt31T7cSjeCs1f9BqNBps3VodHesZBjWiiYbpqZ453y15L8qvkuSP4Xp7",
  "key23": "3i2sBHnXcmEXuoAAkEokbTXeGNPi1jxo4QumXzDYtn9jHqtXGS4kH2hhwLzhTTEF2JtMzoPMKaidtzVtjenkFuUv",
  "key24": "4QWU4wNjaYnB2GJ5Hkt4Vrx9iJX2tnNUr35RDkctWAdwtSLUBQ8VDkEJAPeecEW3YHGzEWbvxq2DZpNoDahHPo9X",
  "key25": "5ocUKZehD8j9oryj4vtyRX2nMtBowr5NiTEhU57MV466tM4hZcC8xqkqiYqjcKyWYFersfUF6e8Tpbck4En4zbpD",
  "key26": "3VZx5ZM3oTGDmup85sHvfkv5Bau9RcDvAdASrA63jeEaVGXQUeisyoxN5KmXnAE3JEjA4naeH2bDS3RywbabzPic",
  "key27": "UqoZ135uoiF2ZJrCCenFBt26C7U3Dqw6ZmL7uLGrN3hhDbfNsXncSi7FT5DpCumZibNUT9mSD1UKcXamejnVdFa",
  "key28": "4qLrxDoV9QVqB5SxbEAoQuVW3GLqfVhwuHVbW5tZskKqU7iNtE5iXR9sfg4BWF8M9tKoML2tLta7eKpEgsoxYziB",
  "key29": "3mYw4HQQ6aiRSWwWFs4kuA7HQjPCDUX7LwiAVrBS7KBumZtW5oBMxA7GiucfaDJSk7AsMHEib3L412Ehn3ofMfw",
  "key30": "dkwimxXZkpZxjN1VRbQ19RaHZAxP4CdpvtFv2iwhU5NvCbhMqh3NogLMNxQ1VR3KWkTMqZ2u8bNxgamCP1uiTUP",
  "key31": "2dm38nvtowf5pczck46NzuVMXnUz7cyEKY2SwQ6Mx9pUfzCSWqR1owdDhFcG2rKjLY8fhgevJpZTmrntE8d5ozD3",
  "key32": "iLyPKLDvqhR33QSYtghsN4oUPk6MYqWZRArb2EatrzVaJsda8XtHTkf83HgRe1hTVVc4sQtAXatk9PG8jTkvQAg",
  "key33": "5gQ5174N8VfWQNnUvHiKz6ACs6J4T5csUkndqgPdq2SuteTnjoiP2bqbBHVUwGRkA2uB4aad82S42gwH8aUPHot3",
  "key34": "2JXTaJRaai2FvxgJ8qywyKdjSoTKJxnqZghozXEiSGZfFUTgyq3Pb1SHeJ3UHevwYVYNQWwyrHmM153eHbkn9i1n",
  "key35": "4kr9Muyi7iXR3jLD599JJX2ehmwC3ERnRCAhLxyShMoU6homVoGAFNEeuLDPxPV71zUsrP94zUgpFLp4DAFx18qW",
  "key36": "3PyBYjfyY69qQu9bLGktuXKjYP8jry63mAEdKxiVSXvATz7WHaxMzGC5uB3BK7rnQG63PKwnPB4k3z2jxmH8wEUP"
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
