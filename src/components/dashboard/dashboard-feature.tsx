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
    "2TCHZewZvJLG2m4neQpve8bXyX9bEh1dE1nRBQDXuMya5ZXpGxGwWkzDJ3AroFeJ5ZgKHbdx34hFKFCspBomB4gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aunmSYKSy47Scn3K2ypDfUzi2z9TktwMG45SQyy4GMhJXEkvwASprVLSc2uajmNCBegPxgZFgtLKYFfTd3nNKsC",
  "key1": "2tq8KdqiT8zQAu9a8TsKAY3TNh4Pq7ScPccfczVekv7MytwNdztLGQWV22nESvQBPAjwQ3LbW54BytDpoAAqvcMW",
  "key2": "3RZJY8NdAKcCzidmSWW7nYF64PpJ7kYDdniXiX38KsXvw26b6GryDcdWxyVr2ARgv2LRpzNNxZdwJgfNTKQKjU1D",
  "key3": "5uLyGEFw71vng76pSwvS7guzoz5Lu3mkjMz9hTVnQWXMDjbDSdZDuWqvm8HYbqeL7C1p5QP4HLvkpbcuHHhHJC87",
  "key4": "5NorfcKkesjTmYLjShmTm3L2Go7WBpZA2h95VyiPDZe7fnaoQwHFcvBkV7fSBjcjtSF6tkUhE3X3rkZNqsLtjGEh",
  "key5": "5uPexka61AxWzACft9MFD826GQUMoMQTT66WaxD8hL63GowB5siuKtfrrF4rwvepcukCwa89UmcpfGt9x5ossMBH",
  "key6": "3NQPpRtMR6P6isfm6bGvWzdJiGDwLCmf5B6FejW58z9puk8nWRKR1owZYmtWifE23xR9zDWQNe7oNkKzgD6uxA2D",
  "key7": "2oMoPgXWXisxF7xWzQJeBP4uDPApx1jnwFzYDe3M6hZMhUAGXtoeP2iPsrLymtvjZUT6tpcsVTncttbXri1KxhdJ",
  "key8": "oNQt1nGCp99xAMLJGr8MuVLFHuELoneXH5CSoURRGdyvg1GP5YGahgrkeQZ2W9QVPCCRFZn5GxuVbShf3U5zqRw",
  "key9": "413aGR2H74qLMa9t6x3XWuLBvAY8SwNgJcevuUypDwwKqdRpmVS46crpxJ4YvBKSjkyd4oPjx2qKMA6A4W9SEsdj",
  "key10": "4JsuMntreEA6oC1rTobSNwvrjw38F14vMU4msc8L9J9Xd675NAQqTuJEUockwMgwT1XvAgqmm5tVC9kG8PXYkvUR",
  "key11": "TfikWhF9XNZvdNBmfALiHDmfKJbto7r9vY7RtyrCCNJVMPCyt31rXhwCTYKoMtXxMpKqHrv1kY6G9p4rbLqV2cH",
  "key12": "23BWXVXvHfxzbhSZj48x8HH2z5tpPMqev5taakwkLyhagUcqZfyiGrcbyVvYN1FxXzWGaBzAkKDrve6SGyH4XMQE",
  "key13": "63TNda2oyx8dVp2Ahdqj7TDSACtAEEvzrhWvx6BvfeRSnKs4d8EVVkjnJCtiAd2i51nMPWP7dAQHThFrXUJDoVZy",
  "key14": "2TqSUx1M757dvB786YJeBP2ft3TJUNiRKQg5u1ZQcYDghsqar3XG8tbtPQWN6jkoQWuPb7n9rJhzwowumkmKVh1g",
  "key15": "9PH5UpfKdvSLxTEGRBCoSwgM2GuX6kh48c72h86S1qz78WxDZejq5np7sAhokiunDXfKyWd4YAVew5FdxDjk5BZ",
  "key16": "uy4CvYTbDFuNWzpsyxuZE6Kk4kzzrDGfLK7QKfMTFuj2XPKCjtLMz4LdYsEQSJCCf4D841vZWjWXzVMxfMhmVX2",
  "key17": "RnURgpitEgx2noSb9jXJbbfz27mCJvjCupjmgVNkTfMLCW71g8CtViWoLEncukBrhrZYu8kTmV9snYfKoSkgTZu",
  "key18": "yRqeemCzyguBPf6qRyKsWGH1ZTcHJ1yJHj28XGmf6xxQze9xbbi9K3FRhjtR8sqjh9BDbVPg12ENPg7NPggN8sn",
  "key19": "zGZzP1N4isyrfQY52PHa6e1c1ovJuFJCFwJtEXJEwNrPzQfMH5AakTE16Bv53CkSona1XCPfysKqS4MfNQGWR51",
  "key20": "5TiyaEAfpRq1sqeXrkw2vUqn52fwqVHGemfof9u4qaxmj1ZdL9zS51WCXEmW5Sw213CfGZSSNnzjVEi4s7Kwkxni",
  "key21": "5wnmzwM942VCH9gRWTgzTcGvsBtsF1xxHb7kJsuXY57FqgKqTnVBFeFMi1qmuFuRGU9XDbNGH62g6JinEYU1GkeS",
  "key22": "46DwwjNB3SfzdcmrCyKhpjZchxJ2XuNEYVGjMjWGBE8mYtuRUp7hbgNYHKQiaR2DFshYSZfoiabJ7FTb6iny62r7",
  "key23": "Wcc9QYwfcSy2KvYSxCUY5s6ub2eDE49vrZ2KSURpGi2SskTVzP39kTPVK8dgS9WZT8peUgzYrKYvuXRQAZBDJsN",
  "key24": "2121YRkSq2arLkVP3KPt96dB8TfZRuuHALJA2tQAzEjuHh6vGqQqi5jaXsjr8MErCU1hCupUB1vrHNwbGDLw7jko",
  "key25": "5ARv7Nm3LwtB7JoSy2LwhpStC1hcw1Me8qyN5AACvdYdFRD68ncXG3NXME9PHQ5Pb2FP1aV8qPtbnFiz6CPGw6Am",
  "key26": "jFh3gZwzSmrEx44uqREQpHxYMKMZCcXRK1sYSgYnHoVQezxatSDZ3cJiL4j1YpCbbtgu46QWuYudMXCnpWkx7Ma",
  "key27": "23utMpGZUyjuNDVxaB3sqK44PRd2kmtVcSgZRa2KFkdVovrCDwvRwDYad841i63qzWBdj7hFkh81nCBH2kAsH5pS",
  "key28": "38axEcD3iumNKB8TJDR6j4Dg78Ehd8cLbDxXY9wnDB29v7ds6669LpQVEz36WzumhUCWUBkh36oC4wzcRcbBQ1wU",
  "key29": "2UinxF5qFvw5yUtBruUXVhqenCVw8kYaBttA6RThqfHE35o5bZwPf1Fnqf8c5dtGYXtZDbDHWFjHn2ZzH3PVEjH1",
  "key30": "3z9GLoSyvLtjWHStcYvcCiFRiQ3Be8ApZjQn4SvywNEziQZosh6MxVx88VfhbK19SkTVfUnkd3RrsbkBKDxne7WX",
  "key31": "3u8WES2zysSsivLSRhqHcpqtCEPuaCQ6Mij8vwWja775Q9FGmMYGrTkS5xhvZb72e4WN5K5sVZA2Gd8i5ULrZ2xR",
  "key32": "4FtPqe6JMpSx4TxX7qFeH1AcHFxmGKer67f5Ge1oLmheNkgSDg31mtVmtujcMmNWJLgYP46zjC8DQcRnB7Cxg9xt",
  "key33": "4bqRHJC7FNMMu2TsBM41mf64EmSvGf7TZUj3cTJ6FnSFrDQSBHmDu3V5EZDfP7YSKsc4dzcqZ6sVvpA4geDEP34p",
  "key34": "5xucyJ62Pus3PEVzbXvLfqHxqhPPwuS9YHdDXsHs5M8jUt3kPyRj5CCoA4geUnJdY4XGjdZ73MK1Rr4ZfGqDN31f",
  "key35": "459cMxjphtuNg22EFi8zAdJ4fJmEQDYcWXE6Yk8MMzog5h7GS5MgT3CKTqodrqUg2Hji723EaCN3XAozCMDEfooU",
  "key36": "4v25MggE3ncSy2wS9VfH3PTHF4dcMnzThedh4H8pjvFhv2SuWYFogG4ngjvF9EUY8RnE4b82khZaq3rdtHi6iB4e",
  "key37": "2GnL3kc3AjHXixupdPxGMBC5CRBpvtEGkUpa6QP8bMCJ7v1n4QHzh33hXpaCz6o19x31L9zHmJpz5Pm9Lf8kyjZ2",
  "key38": "4bv8XBWiqQQwD9Yjkdt8CHNCfwhh92mz2Ga6K3jjSQGzZvBdFXWUPNSJYP9GcJZ17FnN1zNnfEMmTLYiT5MZqeK7",
  "key39": "5Ha5ZDb9hePk53KXSDv1Z7WVSWEJF939SXeYt3WYcbupnn54dNLdg4fbeDr9HkY5WaemFF4AcFcfhuisLXrEMBEZ",
  "key40": "5AzYGM6t1FtTS7nJ59Qcu6UaEm1Uo8pWhVpXsMdKS4Lze7MezAsgv6mY9UMVfrj6w1aBsSp92AeeY8A3jce9yQpV",
  "key41": "2PoKedMYYvtt37j8GMtnYAAJCTrtsmjzHBAZBiLqmPT9BmPao7oFPsM54jvrEPvX7pzraELZYTXSSLrTNTxn6Tcd",
  "key42": "3ME4TSA4qaDBhtWi7fmhL3sVQPjNFrPRYCT5KUHdMcE6d34J6sKD75bqwfNRyQgd6nsUD6CFdexGMLbWp7E5eur1"
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
