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
    "3LnJsDH19CgzDWsAySGypWE7FyUP9CkYyMFUbduqvm8c6E9yz4TrzdrSKRULbGKjQwmNpDhGMUXHcmuVX4Y8L3Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ct5GiCBDmrU7MnhbbAHCXdTzSgK6GzJx79nd32WYfyFizw8DcmrbUfDVaGz6ZVWEtS1ED8NeK5Qdio2iohMDNbX",
  "key1": "367bagf9ofaXCHFK9PunDXJ4x91GdvNdpcfzBk1rgdiXpLDeNKQt1un2iExkRrsbT8mhvyuhR4R57vuh4m2e3MkH",
  "key2": "3Nj1jGyJz5vpNKi8wfwyeVBCmHWUbZmDESQRzFFVToh361cAKxkufY4zkLAu79ru63dV1nRP1UzAZKHZ6pzYRchz",
  "key3": "hYpmB5wU2SkzommMnSP6gTzH2NwGHfGEjTp7wjv5c9keAL3LZYAhnDURXamT8pqF1DEoCQigNjHzpnmhsQBPqoC",
  "key4": "Uk33XHX2wHEkDW4drr7rmckrNfZJXnae1zApfbFVrKj8fBhrDkNuRKRzVV8CxeBzCky1ew5wjSNaTC147htzerv",
  "key5": "v6KgLGahQrnLLuBik8LRUVywTwNf8kxskYwD2dcTNchNHt5tJd2vgzbQmS4YFnzhoyDVUxq8BXZwyeR62PyJe11",
  "key6": "5vz3sjJZxwoZJECJCJShhZF4YUiwGns5oZi3NdHp5Ry4Hy1iPMtES1ULrMrdhKXCMeRTQHxWQHyT2Jt8iqakDzx8",
  "key7": "4PJZ4Ln9Stfa9rRGHQBLZdahsW9dnozTii7yXEak5V2C7GraeWmrVFNxs6XZ6iCKZu7MWiYR3pjEbZC7nLdaqm6y",
  "key8": "2ueevdz8dS5obcL8nvDuKFTi2pNtxMHcrC5i4GJaXadqcw77gKtG15sZd7WUzkNM2xz7qmpHBFaimSXa7FCVAKr7",
  "key9": "5rfPXUSTqy9R314u3CdGkGt9W25n6SPQ7sKneGrPaddPV8eH8pngLiC7aqTmG5r41Cp6bj3fgzLBaiaoG59fp9uV",
  "key10": "2wi2j2GiR4htFmh5bmJfKyvBbbH4ty99PWPGwFa1qqsoFCDzK6K1VhpYxZtPBFuf4NcgapDCsKWabXbkJT9tPht6",
  "key11": "3x72wnNEV6Ug7MKeiVGdUER6JxyWnXWGtBb4ZSZ8zrv2JbF3GuSy91hFsX9cgvowYYExrwtJvPH1EMzuK5NHc4Aj",
  "key12": "RFPr3go7gf9w8H17TFQdX5GHJY6ijKu6k562VGnPW4x33KyYkPXMh7TnaRCgGvuKJcKGLquEd3pfhHw5UAeBtt8",
  "key13": "2C2sVvJGi4eMgXWiWYq4zuRgps5mQKXkPck8wTp3Q3TfpxAEhyNuNEQtN4CBgexRyzp4KadGKZhhSuf4hgmDdEeY",
  "key14": "4fhCWuUEik8KZpeftWsHiSaL2X3m1cGw2uo6ENz2Bi2JD53W4qHxyXQ6Y6Sf51cgjdiFXvAfWrm5DAh2r4taF31k",
  "key15": "2C3tTFFM3DcCmz8zGuipeGMXVGhcbTaDkS17VQarbeihv5u1cGP3Qs9pNhusupuMvb5YMpRoC6SCDydPxgb8qZfg",
  "key16": "2K8JwcVbGamFczCWT1hzu8WEnPAGxiwvztcaMpN3yhnqhs1TBh7G7Tro4WjuohLPMwcYDtx6gzwYv3WC95X171fF",
  "key17": "qexnVczYFvFvnpbRv3CzAPJfSFih8ihs4kJo87YVg569iG57x1isV1MTV9YL9pHEZvsDSZXjfGqCf53SrizVFVt",
  "key18": "bmrai7EhpXpzCdpo5H6UJcyBN3hbHduBXEporNAgg2j9wgNZctVbjvucA95gUyJQNzwY1EsstHa5KsiPMZTzGaE",
  "key19": "zsWN7ScF1HgcEHTMTP2RUEC1g1bYDh9u6kTZQSLontQaD2STnLsMiFivU8P3SkGcqiZzxNzEyAB9NBXZZU5DCJw",
  "key20": "3uTH7txyyByjM3CKg83pidc4W91wxbgkVB4naXajpsMz757b8nLiJZre9aTnjX6spwPB51qkNWZ5r7soLUHnsrAy",
  "key21": "55G3qRia1uuiNFaEhs8nzRgPZ6GNWLbFyqNjbD68U8gUyakdh7KFbuxCRT6mJxVCx19fWjbBT3KrKLuiRLALbMsK",
  "key22": "478VJQVj96DPQvhHuhvtAnxH9pMncZSqDdmYwiBh5n9qQfW6MuTeC49hBSdiAZRNNkgMbhepohq3mjvxioKLXebs",
  "key23": "ZzPuyauCp5PpbhK3MxFPFbmftXv1U2V1Wv25CXcR6Gd6x6oFY7a9MVXE8zKh1d2WNYfSBGz5Wck43t7SsifKVi2",
  "key24": "2wzLqsuF13LwzpFeZ9Fb9e4awnK6p5qYNE2a3omdrKyP4tSMaaogYQvrtRhoQdgS4aJ6u6X7cMnQ8TiPy7aBuqvr",
  "key25": "3wu9PwCQymoEE1yk5Z6tqQmiFUREBuqFFMLjmRSt7yrgeeEGdxmt5rWgwhPCxEnkBeF1dNXdtWz3oNSjbcXW2Q5E",
  "key26": "4aeYHzT3AjY4r1RvFRXY8oo7MA6NdWpa1eznNFcu7KYvzSrSivYLkDkdHEgKuMiyB53PFRAEbnJqx17nyewhHt8R",
  "key27": "2NUHkGDCEHCat8bEaEjny4YQRSgXVdSkDMQKRRKSCGy6uvWXEt6sfm5xypAvnmWZ4UxBRKLie9N6LLWNDgDYBWih",
  "key28": "2wRxJqRwR2hF7Vr7ugv5kj2KPnBZ3SmyXEDHJzcE8uaRg8vda1dTVd6AZDM4Sw3AucEhD2hoPxyV9M5W4T8qANAv",
  "key29": "XPyW1jHAhXkTBsr3S7oF9Sb1rT7vuSM2kvQr1KDnJoYtXNaamDEXmHV8CxzUtLVsjF5LfeAejxUHLdqY2kky7HV",
  "key30": "5wHZySG8mg16nkKY7bimJL94nn5WPteutsaQBCBhXB71J3EJLqP1E5Z4fnTmjkfbocck16wtCz2CfBKqF46uJGfY",
  "key31": "3Fvdy3uFoiuHen5TsG1TYuVhB6K8mEgYSM4hC9B5JXBEN6pHGEMoCMZiZV5AFTHTCB4LjkZ13NdUK3QQiohkruKs",
  "key32": "5Lmc1zCMk1eu3Xhv6ZMDa1iaF38xzS2xjCTEYW8YcDwiSmgrudTdtxwcHrxtCbky7RASk9ByBi5iqYasmPzWF7Ku",
  "key33": "PAKwgChZZ3vyYwKZmna9iwG6RbjKAaGFfzDEUa8BgfndtUQA3RaKESpNDqaaeam96EvKu4uyqxVXEftLrkKdg3a",
  "key34": "oJv99gzuECScs9RmPofojjAZxf9yKgxsUa7HTKxdw53Mc9Tix86rzdj1T94QTQqNUHRUDfJy2e52qv4C7PH63iL",
  "key35": "tmcNocHo8Vp9jYy2mGixQFZqj4XH6uNcfTXVSpZws2xnSKKrXpjg3rGTXAnXx86p6tyDVtBwySaP1mMF3jwuKDL",
  "key36": "4DCeAPNdT1XmZ3DDfpT1Raz6BF9HnHe9QBL5h1x5R2Xpm62LmZJAB4kDQpjGvi43cacsCQVLqYs3uLFSmbyo9xq1",
  "key37": "2drjxzKrPa16d3MPwVZF5d8pyEPxwhVb1QuHLBMgkxghyc3wd5vd8FZwx3GFyYuszEjxtKzbHLhSUKGrATRr7apM"
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
