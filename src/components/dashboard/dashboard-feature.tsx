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
    "2MpqsdZ2E6xvHvHpWRuERrohcgTBo4gbzEN66LfYdPnhNLf9cfhs5F8oDR4uChzZuxgWokQzkDJnkexpch9p2j2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBKW3QUh7T5UfrDqymf9VVjFYe7rkGLpM4xumobCPmYkwPBhxgWkQDDEtKkWjoXzRj66mVs9LjrrZsCgxjJnk4j",
  "key1": "4HTVboo9NeNEGNZc4Fyb5L7F139w7orypPLmJo4k1a5BA67ZHcRKxLXj3knhu1MMbUA4qzLzcvaVZQycr5cD7FoP",
  "key2": "cZaGho5rpBNCpVzQYSsmT9hxyCTCFqth4eBd74WK58hmeksvoqnXpkATvHLYviwZtrX4oUDxwo3w8wbDsTUTLL8",
  "key3": "aW96CwuJv8cPS1i69jQNpGZ4gdw1ymfTdKNzm3qrKfii2eCAukPH5SZjwVQVr3a8XxGK59N1n1gL2A81RYNKWCh",
  "key4": "4fR9QsjcqZtweyLYELTrMB1y62ZSRbEnfiJbb8RBBqLKdEGjZY2KgmaX1shcBrHJkLtp2gVfkUFp7j7B6ssM9v8p",
  "key5": "4MFfsagQcsUvsiifpSS9uN5jAxEcUJiMcgzZyyCiXLThpcuXB1fEnF3riwFAoMfCVroaRW2WPXsnWzjtmmErs33m",
  "key6": "MUneGCDdMe3ijHdgerBa2JHbocteHkEtvwdPSsMdQ63WpcM12opB3VFSoKftqyCWTmhG5CXNqPSMgMcC4ESHWBD",
  "key7": "65UzNnSfH2myNKhQzNKJ45wfqMhZ49yt63R9UJ5sJj83kcdSSJn3xocwNbsAiYFVUT3HXwVuq3PJVjiNUM1v58mT",
  "key8": "5VDz7A76UEzGozrFfTme2oZY6vyT9cch6i1mAkBPzM65c4DmpADxYHPeEYMA113vtfWFVRGgvSQsLMZSeuTAHSPs",
  "key9": "46BPDVqxwcqF8LpoKfLBKHJ5NaQqEXLe1BFpfXjepvLefouRxVMooopW3Ef32PufzeW9jaetcKgwjHERuVuMawkT",
  "key10": "5AevX9CAHE7S6hFuSJtXtE74oWCkaaAzWHsSViveKmsPQV6AiqDjdyQZ9naNuurzXLSEXdPxjmeGQSikSxt7U1Jo",
  "key11": "24SJBd8CoRAUAmB2Ah6fXefy8djtSAvbdJ4evDQgMJpdKRztkGTgkjSAV5ZJn4g3fMp9R639phCZjtiz74C1FNk4",
  "key12": "5SCut9nd7bQCU9nySCEMzLuJh1ZHVnsiV7hCUsqyBSPuWFrTmB71hFLNJ5vmyydSNpCT9Z3UGZ7cBi4XEVrZ5Wek",
  "key13": "24unNSzz8qmMLrorvN1mXQ28sBT14v7bwUV7rbDGrUnKAMgnYVCYaqRrXeJXHFP6vBCQp4oyWeyGSt2njeuBUJWY",
  "key14": "KMuiouV4sLLjEX3trPzrDh218rG6TZoAQ87WZtumckXbQTv3kTyDkGLfjwiFccbGhQwgZqFMVKpXooDwmgkULQz",
  "key15": "4UrZUt3iztAX1Ky46zYvf2mg8A33kvCoVBZhQabc7fXZSF3nUEbUP8Zauhexuy6rSq537jZ3F7oKFS7fHQFtcCFU",
  "key16": "2yeFoBV2GvYD76JWgQnie26tFgzV1PQyu596HEmpJVY8ZAUY9Qj8ywQTNKErTzAxkA12G5xf9YJfQtSPFcBSWGcc",
  "key17": "632BBbQoF2VrAFSjA9G4nPPaeRCGkYVYTTWCssSMAdXaiWeY4fy32mHhwAvH29KTdTorVodpNRQH3ffkCyyn1mjq",
  "key18": "3ctfaTS2DGFfUh2jW7eQWZGwZsVegkenyax2WjNDDVtrrchCuYb9yBc64PyK65AJ4orat5rUjMtZY3DoADP2QyjZ",
  "key19": "pCfWxqwyjvNSBH7xmhRde5FEBg4KNfiFZbC4YWQzk4KsgseRK3KZqrr6rnRNzAMypGWt5QMmbUgEGY8sPeBLeaS",
  "key20": "5dEJkymsGTEeivbaEJ6NKtjRBvcNnwpLwsNUxGJJwfX6VyruZ8LyiNsfHw5fJAx2d3n99qasTGc6jxcUxNBvFbxs",
  "key21": "2wwzmHg7yaxEDqwqkGvZhhPS7zQRJtBPeSWLUqAMQHjPAXyamtAFjtuw6rRyGrAbhpHD2BD4VFpCiXNj9HQnDCac",
  "key22": "xRpfhMWpncRT7TecMBzEHJkdzfnaMTAPNKctMaCZo2rJqt8Ywr33LcF29yjmwzfPQZXszrfbDQxY4U9FYhWWfbD",
  "key23": "2ysxrULY7RPZEmRQou9qowNhx4JR5zTNQn4NmZJLfQhqYaDHwopiME17ZGBq17FfoGCeZwxPQvWbiG5KM9tWGiSC",
  "key24": "4TpG6Goam3JT3x1cX5scDQ7bujVAhZdichTq31j2YY4i5hG2MEuHkyBy6xuzQHJTitWHqyoqAUjFcNJufD5sSe1L",
  "key25": "3k2z8TNq46YRvN6tzsCASEmtJKy4WsDT4yABLcoN2aXPULgACt3teZpgCGhSqRAHMKcxsKu6kuqZ3uTngKBqT5U7",
  "key26": "2unZ4uoAebBaoGJqfU9FTkgfRJZLSMEsv5dboB7BqwTLF5GdPv4AunJJtkXmEqniAkDVc4KPGi65WUDfVQ8qAgHN",
  "key27": "4MNwH2Mtxow1bBy9PbpZ9W8GemmTNNYwdvNKP3SgjBid4wvkvWfxb2QP5aUWja8tcGAagCDgYL3P8fKHrBakazgd",
  "key28": "EshM5yiSxH224YUnxP5JiFAYFu7Ugeb53xxytLTv1s53ZhTGJknrQTomzuJW1DJH7TSm7CY8KWtwaBDwbneF94c",
  "key29": "31mV7TAMni1Ye3qoUb59RkT1QKC4aZiucR822qe9YnQQ7M68MiiGWPzKsE78KmAMfMG1qUyMKGkqXCRMiDv4NqZA",
  "key30": "2S9vwz3wA5iTtPbzp7jJHYmBcHXpozwoT95h4icC48dQY5YtuntGbLbRoLDoQQpjXAaj7hXnTMGcQG9CTqp9v2KG",
  "key31": "w1VRgzkyirbVqKKBHUHsrUCrG7zspw196bc7TeuL9hFYbef6hFCG1dVQDuYBUoKShKRmjctJatPB6pj8FMfQ7Jw",
  "key32": "3CAAphiy3XaFt3bh9mbdUkAY5sQoYtvHZLmAF1MZn4pywSJTkgErGaGz2bUU8rLeFi5h8P6oT8urkrdsPYK71oz6",
  "key33": "22RGgdD7PTbRB8Z9PpHJx36dnTHN6ZMs51tNYJnMdSb7VPZFXkMpx2TnZFSq3p52jmapzQHWcDpc89MgCzfC1aZh",
  "key34": "2qx5u1r7JmJfjC72999A6o4oSiZYZHupMMaTNQPX87u3p4emCuu4AmW8QKaxtE9EXEdJLE6TZCpTWb72jbHi1R9h",
  "key35": "4etCBkjDW7EKaQ8mofsE5UWDegRbUyBVQxW2AE6Bm26Yk6wvCqZYbL555T7rJj5atsSQyUEE7SXep9SuV7WGkudY",
  "key36": "2t79EyeTfqjPAzRBGgB5PD3enTAaEjW43oVQg1pcSXaUrkF54H4V1SihgqGZ1QdFXJdEZibaCxQzeVZn6HWTmomR",
  "key37": "2bXxtu1jMC5Jic53N2m9yD1JEbgervkL9dqyb838irBHJMBDyHckPJ213ccXkCivCyJ4tEzeRzoaqNL3XHeRmyBo",
  "key38": "3NHWn8DhxX4pfKFJVEaoAzR5Ju8L539CYT33mkhg2w3EMbsqwpKKxv4iHSXCZpxmqskzXw4Da1FJZpL96aFF7R9K",
  "key39": "5H9CZgtWs5eiyaMFCoSar7JB15s8xZp3dASJAGGxmRC7SXYssR4gzoCQrjST48c3YnFxmgweYEai2cn87Gmcb8g4",
  "key40": "47QRkTQxUijxPPnxEoEgeThevw4dRbwmV2PaK9oCcnx91jNpPgy4XisraFZF3T5baCTeLXwVQtXrK3qs9i1AqCmq",
  "key41": "38DTRpojJVRfRkTT6jdJgG2Ggstktc5NDRSgehRWXcJWYm2h3f5M92T8jcdduUCr7iVt2mWUtGg5zv3RQBgm41E7",
  "key42": "tacpg2wGzFBVsN4LP6rY9a1AiJVavVhG1QHmpHFkvuHQZqRvrKDBrydEfQTrZeb96rhZYFMn83woZ4USaAvLAp2",
  "key43": "4q9ZK6QdU8AEJWMmxJaPnErFP52AP5kmVG5LMEn2rp8wiHLWRGwB73ZMuuhQWAHm7nu692Ffm9JLxSZQmpifeF2F",
  "key44": "2Ni2YptRnynvLGTTWSAw6nPxrWA6uic1y6wWeDXnPXcgPqyhc8umYn1nYbnt2ue2ugqdgfFCtSxR6jyZ8qEnEjrm",
  "key45": "4xwCbYaP1QkqxhdczGSM211eN11vF3GNLd6KxY98GECpK9vPJHnRp4BHGz46vUi8wXpb9QVPFRwBXwfUR42qhPTL",
  "key46": "3ZnnJj7ZXeqmQdgtG1zXkZvGxemg3fDLFWGzx4XWSwDdowEBz8eTJVyaTmYUooLJi7KP3vibRmxAXc5JjJdoe2iT",
  "key47": "3MMNmXkjim3DxyiaSAns3a52TkNFwYptctCTczHYPdjQZM9qDLcvjV3pTAfU4H3Kr8K8vc6oQFXNZdpRbWvGc4Rc",
  "key48": "42rg5AXy82pV1NTnG4ETNbTbYY7ET7fVT6iEAwYGq5YjySS4EkKavAq4aLYfbQxSauTZTnwHju5PufAZTHHmDq5c",
  "key49": "2Jo82YSF5MqEvsuLAejdh4NWPSxXGiKvv6KBeQtuxSE9Nnxw6vZryA8u2piBX7t3AmSgNgwNtgoqoNEjgLCRRA4C"
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
