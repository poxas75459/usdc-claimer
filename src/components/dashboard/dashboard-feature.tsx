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
    "3ByPK3vRpevugApSZm9yBbxhzieLe7txjpX5XbWb1SEAVeCGrcoyr5HTGn61zkLAm67qULemZzbyaAHDVW6AUL9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Wzr6xt2HAmjrVXyH7hXDgt7otTZ5tsTNREfQUfHqAncXJZWyBEvMGJQKshNmEVGDLUbZjgkc15pm9fYvr8GRuw",
  "key1": "4NKVrvMZgksMY3BMqMhuTPbfiM5DhZ8bSSMmT4SWsYVreHaGzBUkWX1ihjCLMSDhJe2yisfZPfNi5ZYYjmpsjyW6",
  "key2": "4yBuFuv6xx2U3rkBnj5CwTCE9NPke1cWgVni8jc5AaSXk1LLwxNNB9U4vRKmRCPxj6mLALL6HU1yFWqUpQLipDs5",
  "key3": "5MBZjHrVUVSgXHJCtjMZpjPwmyCjTypQVCNqVKpQ29b3td2YjEuXX7e66aKJypaViA9fKAEjyuFgEDqmrq9B8Dah",
  "key4": "sZ6GQ6UrtMtsWPoLvQFr79U8Ho4P82hamSmo9zCE3UbgcowqK4r6oWivg4mFUxjibyAZhPXLAVWnsvWHeYK99w9",
  "key5": "4prfprLADXpDYvcUzYkTZwZxsAXJRFPc4KPbtLBKgKaqDC7ZVV62CV7giFGh7ronMyWjp54s7ecu8RWPerrTpLBs",
  "key6": "5WHA3NKJPv5MhTrpheJnDaH7nfWtsevsEcHEdPaEJR3GZV5u8KoLRtH6QHTajVPrrnbEPcRzoy1FdnVXHao2eZ9D",
  "key7": "2o2VjaHKx3bRtNxk9Z3qbMLBmrdsH6Akhu4cd1WynrFFQVRgS6w2FDe6LB1rnQZPYet4mkxUrE77W4okMuHUh17y",
  "key8": "ULxw5A8dFUwciTdoW1357RXCpSYMZGWagfbdVwoDzJpVUgMw1x15HWZetu1gNHqCZmNP3eykpEE8jnjQFY3rwvM",
  "key9": "3k26NfiTC2BmEHAD1AmgQp7pnT7hoabxZvdEoAzWjLth47QzyvuW5mzrPvn1VUWFbfq2oXccQAFVHUWYbmQPz4Xt",
  "key10": "uSQefnDxde8W3WoGZjH2vjKwQqvfsbNXyTaFZdb5UqsSfBaie7ASKTHgKRdsw7GMZKVgJicVV51zGZkm9ciWvDg",
  "key11": "3odRCZyrZhZ23fWKkCtJJajtecHJrPzLhuJv6qZBMnycz3xU1jsktv1P1cbvaRzE5zJVXU95AEoqtYRiAsij8VUs",
  "key12": "4y1nRsEERwN4MfzaeBWP1FTdmaT3UXnm9fZmBfEF6cc6qiaZykNvJkQCeDvuygZL5CV4kJtdDoWFjLnZRDmBUgDr",
  "key13": "3Q43vf7JDgdxoFBBCWWavW6LFawyvXbxCXbavwYz7ExD91ryS9a58iDqATXbVkM8xptu7D71kQ47atsnGNcMC6Ln",
  "key14": "5HcG7H6Jvy96ywqBRjv89TfeTrnf3VaHQz37dY3sRL6uhtQnVzWAbAjdeRsGu7V4F8WuMuJdQ2B29KmbpgXy63Wu",
  "key15": "2k5771LvJGH3HseCrf3ejGBYamn7Zm4gPdpJXbvKkLv4bM2gW8DMkhnodA8u85qHW5H6rVxvMc1LgPM2Yhos2e7n",
  "key16": "jdbufznsdyTzCTZ2ts2GqYfH31QDfhVuu2LwNnohQjKCrrTjBTPsjbC2NWSnptit8wqdNChEjecmcC84d8UNLwQ",
  "key17": "9WnnD5TKsVhzLREKQa6FwDU7zdemmcykTe69WMBTpUBA3C4N5SZsFtAcytgLP32eNknZRJi18z36fySnxitLP2W",
  "key18": "7vfmCjWWcjhV4Rwb7eR1ovXCU7uuJujyhAHnMiNqnvpXRnfazkiaxR2Fgxbvbc8kXXDBiRnZB4wMnb4XFtVBEw4",
  "key19": "4eczDrpXzQ3NWDyn1UASXkS65jYbk18Rz29QeNdBJT7MaHLmRXV1mpL9wcYXR1sy2zAkRsUw77NFLKcdj4q8JNvs",
  "key20": "39LE5b4k4aC8zhkT4Kvt19z8SFF8dyoJjZuGxNtNh1j2nD1uDeJ6yBWEi9vgiNk8ZRxsb9wqR28rE61UL6Ufky7c",
  "key21": "63S4J2NQAYCdRwic3sCDVBw4v8G9nhubFRGyodUUYNpdTdemoXBX3wJzi2MTZwh3EJNFtLjpf5x7EAnAS5DrAWPz",
  "key22": "5aqUYfSequKWZoxAWXobopo3Ey2qxhuVqzbY7dfTd54Z1eR82wGCvRrfREESvMn4bMAbkTaHadix8gTBWchg47xT",
  "key23": "3cmPTEMgLFTexEA85WRJ4Y8ZxKmcfXKqWheqfn71MbHBvEJaUu7BTthz4RbWgB21R2ALr5F5Eu9z9sKGKabfG2uY",
  "key24": "5wNrfd2mBEoQ3aGM4zbsehbyNx4ubf8GNZNvpJpwTyBnFARgMMZyuS8KQxCJ83oK1roxs8owZHq8C9fdNyJPxE2F",
  "key25": "2KwwYwHfnRfPpiiPAcyWk5XMpBsGo68Ce22M42MV2fmmxPw73LE3KAgFdM4fJLWv6o9tVyDpKZ5fRXSohSv4bGMB",
  "key26": "2xuSgx7z8z8nS1BLtiWptR5g69BhJ3xoArVxwgToqwZXijbpRUfVGD8EA95FFps9ULKEUwYQHnpaH8phh8nFUBi2",
  "key27": "41aXsL2N48c5kCx9BuDa4BvB2TDzmPuTnzZrpDkTpZmfiPK1n7kdiM8KPEEzaiFs7Se51LnHXrBK9szt3Dq289Yi",
  "key28": "3N4Js6qwZhpUiVPvwHWVMQbEyiQ7QyLbx8uSRmvrD2rhpfPfTbrDptnaxob4RsokgaaprrkQFNVdh3EXPeftxAgj",
  "key29": "ioCNjkEsJwSXqpScVRbAFfX7X4MLzKFqK1CFcM3YGTaxc7XTLgjKjhN6VKjHvfJvtTcEcjS6HoB3yWZ8SqbQbJd",
  "key30": "2vaamkoHjUAhLvEKzuZVoLTGm1LJHg86tcyoNqjpieSxFKatxenwv9oPwTPPCyk1h5YhwQuqs6VeSqSRShCXCre2",
  "key31": "RayFyRtk3QvpKC2Ep6Spw3QsDTgxkjRkxPDAQpRLue3VQWG3DcK6hRrezdcTL6CjgJTL5hvxYu6GcHLFG9XUF3Z",
  "key32": "5SjxAgzWur1sgNQqoqPaMmraujsYSwpsZ6k5fAgGrpjH7g6G1uT7xKwmXT27TMxRiqzf8hNJMu1sqbeJRiRSD7q3"
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
