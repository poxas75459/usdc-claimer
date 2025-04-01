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
    "5hAaPuoW5kRrkn3YNWjhQSTUjthCkWxzAPvZF7dTX9cNTZ8fViXkoeancmUmssTfMk3Us4G7RV4foep9CLzjEd4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6NRKnxdqS8CQjnpWzPp1twMZC8WRJCz3JjtUwRP1PXEw8HqaWS4Wv8wYQWsuRKcNdUaZf5nPjMrd9WStZgm3qg",
  "key1": "45oZzikHWUVQP3aZNhAyeZHe8aXy6xbgMxJCsXHX1mDPWrcwyHcubq4h3cZJZy9cw5RrrWxvzHfGsu3mAGzWHJqd",
  "key2": "5a83C7C6J9xmzkcDW655KdHFDgrHz1XnR4h8SDqyNSNE1igUT1C4L613q3UZ71LXx3iWz4S3nDzVmHME3MHHNNyi",
  "key3": "3DDbLZRnTA2Aio6WKsK54fpAZb4DfmTjyy4bKJbpxfDrWYa1rjLqmxThV3rdxZJHj4qV7pdUq7DtrXgFK4ZpvtBs",
  "key4": "3ri4fBqZ7MfDHt4zgmsUMjd7bAHa5bBT3b9paVkJZvGCLdeYhuATdfVWT1pj3YD2ezESTCJsFB3e64W5LdVTqvAx",
  "key5": "4JPKieeijH4vktDJbLe9Dor8UdVPbdUhEXw3zbPqd8PJNk8MMjCHDgWnYqXJ55dxvxPUncTMHHTBSMsx9ovNzMbB",
  "key6": "4SpLKYE4Fcho7HCnW9aCmTewgV5ni9UYLtvBu9SRmVPQN3Jgr5ZcnrtGboUN5P1EVD93kaKtNDjbEMNZgx54G4dj",
  "key7": "49Fx1FpqX9zPDLYoV72ePnsyGdpwoJfZbREiwLqFx2gi55DVN5JpMqormPdeJJsHHoo8bH2bapfNxTkW3iC2iqyk",
  "key8": "4mu5JahqLZ6CbTmY6M7Q1rUSrCyzXLok8TugPqQ7bPwWH5LKkza1TNerqDA6nt22CpCYyjBPUyq4ZQF5r5Rfd33R",
  "key9": "3R61JnrDCBaeE9Sc4YXu1kpCswuoa7d4UDxV2Jq5poAjSdo3m3abfL88QWR9Zm2WAurva3jWBuJC1wzv5Msxrzu3",
  "key10": "3PC42B7Hn1KQm74L5QxwPyD24cC3fCjwyrrb4WxLRoYytsd69wD8t1Rvq3JhmHUBkv8PbCxDMg1qj3BKHb5CBgXS",
  "key11": "5knvYT3ddD9aJULmzN7wy3EU7YUNTWxyTtrGeuykLzr5C6u1UXkYchym5iB1Y535pdmLuorQEFBCNjyoQgWWxBNH",
  "key12": "3LZcA1dR1fc4CM1u2DwiNRiZHBg4Tont95FptG9PR4ncHNjUZrsSQjU9chEHkzVRrBs3cEW9rHcG1Q7xBKAR7WBt",
  "key13": "5Upc1KRiGcAQCd9LvSM548GTHLkRRoo9faFJNzZpMFVYH3oAdJsNszjJsaKUNcPiRePKJwgn3efHZLSwKRu2Tw4F",
  "key14": "4a8jgQzyZhcqoxLyM8jAnmMUHRTDDX9ea83B79WVkJnwAr26xG47fae51dCsSCtjmjq9KrcecvN7KCUfuTDG2mVS",
  "key15": "5vaEVKEcqEuZkYZPYAgYUV6vtqf4w73QQo4ogMRcAF6tZiQJazVh3Lq8a1g6nSgieKMXRMzkTj66US4bdykjjpuP",
  "key16": "Ut2R3iz5zEzh2QQGW166Sai8VHkXHicA8e1qRSLaiAHf4FvQogRNWUX5FT7mqeoH7DFtMiFjdYh1mheJZKYGqsD",
  "key17": "53jBiDd9DQXNmq3nnaTDCW94iRgYbA4pvffouGEq9LWahtn1N3tEPDHLsPjEeeGeZErzeGRLnvF8KwaorYV8DMBY",
  "key18": "3NJug2ozU48kPKQzNHVK334hZx9eXhKcPjiAQcHbkxayoTTFzyZ9y74fZfrvtUzK96cYpxhAUez7dPyZtYdJJ4Lm",
  "key19": "Jzk3GeGAM8E5tjKEwyAn8KcoW8XMkG3YFsxK7NSfMaUKzYhHwNhAq5551MVv8aFg759S3R2mCP8ksrFKuwTi6Vm",
  "key20": "22ty2zoeGqVTvLUJbmRnNwY53z3CvqJYkwYfnwFMeCM5WfBXhf6HeCaKQ8UqsQ5hh25a1WbPBbenQcPBZpepnUu7",
  "key21": "3B6s3VjVg7f8VEgL31jarNRqBwsh9vChuhT1RPNC8n5hmDQsz5PKzDo2xeFSfsa8rqpnpZMut2WPT4CGcpHnfjGE",
  "key22": "5ZnQPG4Wz3DBMYxhxf6MYj6pDN9r3cwSGima5Ca83YXMH5gEcD4PWqFxtPEiaoW7jMhdnUFWzYHKi7iSWyXXgqTa",
  "key23": "2TSuUN9gUpSMA8LdqyNLarEuw47qNYHuC79p7CyNTGmQ3kkKhjS3SBYm9M5FNbjqathT6MdxowxwnkKPRR9tgd8o",
  "key24": "9NqkKX1XcmNLc2Xu8uVvWSyUkQFwTJqg65B5T2vFDHVMkvtma11Ndt7FEzvXK82tXm853pUY1RPi91dhmwYeRqb",
  "key25": "R3mbyNa1wHBPsxQVZEWgEDcnu8VD7fYpH8cXufKMMjiWuoAv3scneXpcJEHGWwpmnAGrXDe2UymoLuDDK8ataiF",
  "key26": "3MaUAwCGMeP3subwHZztJDkGtPduL8y9e25h5qn5BhPvmWREu8LKNbyMWJfb1suSzhurcMqRniFoaKn6E5sWG1vC",
  "key27": "2yRb9aDfMs5Qvw4ydwkgN3RcErnYrSxPvfWqmaj6zV2R1aTTvW3b8rYWm8VHDCFVbBLBkpdZS3RdKtWyoq9QDicn",
  "key28": "4pm2iqEkPfp9Pj3f8RPeVoWyv7royTEJyvJUG4FAY5q48fNx2WkPGovAHN4c2PPDRXbs3i6bCRETmNGbt9gXPAna",
  "key29": "5TuNGskCjM9Nbc7RRwRMLvxiEJ5TDkUGotSpBNaRxPBuefknn2bJnRfJVYbTAoUkkWrUasBbMp8t2XN4xuKjwhpy",
  "key30": "3BDMoxeDx1unUuZ4ASt75YWwuBRMSXuf7XZQ7kfjJrQhPUMxfj4D4tcQ8FaSjhDRJLKFUgBYCV2s6edogPmASkEW",
  "key31": "cS3c2npMhUL5Z2tgUWup9EgmMrzg5ixcod1zCRjVEZ5xm4hptjDKqpwJnDcj1wZr6yFgjG6wKuQW1bQbiiYdHGx",
  "key32": "USbcLmp5sy58XLnNHPBzMtHT3B8xPha3pusTLPXD7aop22L42aimQVDd68f7Fn2aURitJ4kVkheyCqtBW246nHr",
  "key33": "U7MhUwYKLunpKjB6PzZcATWTo9Pv9ibuqTTLQCiptPSexC1oQVxGZ5X46PzpTtE2UVmhiAJc8gGUDcRvkHXpVom",
  "key34": "53MNEMj2i9twy5XHGjEFnPPF4ei5aqaJ1vJa5TQjrhH1mXN9kQAeGvisbprmMayUjruzfWF2Qnm8ypABoA48wm2D",
  "key35": "4ZkzT5VpUfrmTmvt7t6gWStJMhgBiuornfKBABj2CSpW5Q2A9RRxhVy9mvj2hebAAgxo87zB5WGKr69PfwiDxCt3",
  "key36": "27hb1pwGLJG2b7YCz2LEJVfSUt6e2SnPKUG1TE8oMb96WB18gmuzDYjarMWXhvXquLip1i3SCLxUQun4qmTZjwDL",
  "key37": "3afS1ENhqFHpaWGrhk3xcPGAyTdHvf6AVGbC8pLignMzxD6utwGmEqemQJneAQ8FWFQSvFuf7dDBHo5UrgZZrQD9",
  "key38": "4ey8xxW7boWhHhkMtGC8JcpeXZtusV3D7XQBc2dLbLamnyDm4vLqtA9BRvp2JTJpj4f3bsRZ9oU1F76y4VFpuiw4",
  "key39": "mCwikjzKo8mrVYveAnQtJhtRrHPYTsT7iSJMcBQYzaFmnVjd3MmcFxYRinh4ji1jU2jWK2TtUiftNCcNHTd6Q1i",
  "key40": "4VZoCHQhmyebssJYGDeXv8ziTnQ71nv9S48YWQCbmB6ze2dW2dZhD1ytrFFuFeomHSxtD3EVXuiWL8SpVnYrUB4j",
  "key41": "4M5p6b47Q979wJoJfST7DRFEUR9a5fjTFWyUPrWBBuH5eZzbYoyVttCbavpBqYCnfktR7XvxBVbJeSFAkwC1kPhV",
  "key42": "41J47AUmH8nj3iaWhxipNieq9iSFiHbY4UMPkzrKhEdvxngvDrtwewcXNRT1VsTtEamBFg6vHSJfoNTnNiTqZfMQ",
  "key43": "3qCtA1ceCUZSLsn4PKPFH6PZZXvCPGa5mNj4hfUihM9ZgyuMLyrxRsdJACobCqcGGgwyvUB6enaTsvqLz31ZkDYR",
  "key44": "5VF94g51QP3CZErRi9u42CyzXHhsNSSSx8zUcpqjTciDgNo1gmJCVjKziX2UtNK4Sq556D9mYTmKbipJvy4Fd7wK",
  "key45": "5XFtGw66vJ5X8px4mF8JqxoCzzjvWaW5G5eKTeMAyiXwqXdKWPd3P5pRkPeABvjvvihbW9wT2a5grkxYnEXVXe3g",
  "key46": "4R8vdA6PZniHiLMjxrmXfTuSbuCHRQ47UxLPcYcUm6rgGH7SM4i8LtyFSFZcJbC78ZcA3279q6NkGDBaxqNRZYq",
  "key47": "3BnVJXGYEH1Rx8cyBcfSsyw7Y6kfDhbxkhoviDqVoz2bY86JZfbfS6AvHHCvm4E5qLX6ecSyn2LT6zqTMb2LzszU",
  "key48": "5w7WGrnoRAj7xsKY4mSeVRSrMQLxbzNwfbeS9ti28cgLPL11Wua8fCzj2ytCjJS81kxA4yXwMLsp8iQM7ZLnHzzz"
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
