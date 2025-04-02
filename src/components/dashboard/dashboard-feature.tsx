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
    "YEPw6yKNtVTipeNVGnPfyCGp43deDh9KcbEknXx7Teddhpf95n6SGXUyFLLcA67HLsGE64BEfqz2C8gwhThn252"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bcTcMMiQsdhMJpphqdKsXAjRwH8FnR97XiEhQiR3qvvqECng7GkYRMrVZySc99vFRX7kWCe2KfrS2ofmqSwRRQR",
  "key1": "QUgZwWvKtNAFt34PcsHD3nisVFcwk4KjCvM8GUCrwP669Lx7bMqNsWePccFhSzpSUwweFzxFb1GuZpKZP3YRDfL",
  "key2": "52Rwbxuh1yBRE3wCq7uW8MuokjhSVE38W74EDjBjBspvgLiABT2bNJ89yzSPn5eRubNqBvJDYckkDUksr3R8qi5c",
  "key3": "5XkUgM54aSVKBwpkSHbej2kMuCMjRw236S1FbTZsrHuu853UJPSjww7e8snSq9VpWJAJpRaYvevhBU1U3Py6hJZ9",
  "key4": "4xG8KLRrYrtLvjvVVmL9mdzrJCoE1q2J13ZgADVKiRkt1BRrHj9EGZFKtvmYvyVLTZW8ea78ogVvzhbUTsNekfuf",
  "key5": "VamriaCBMtNmweHzbSzZGAokfaGu9zcKii6fGdZFVvFefu3Um2vjpvohhgwwVtFjAStUwhYqkeSAUJviabf679v",
  "key6": "3NCShn1FcWJ6XhquLkL3rohkUDEypTVeqvAH6YhQKydAz6TxBK7KzuRcHohNT5etRhYXmGirMqPeHzNJrR1Mivpz",
  "key7": "3Z2fwiUepG6t2v1m2SwxpcD6htZWgVBviAX2HSJic6bKcPxuSBHKyKFv7uSn6VRmpqBKKNv9uS83qqav5c7Z8AqV",
  "key8": "3SCyTaAYLG28eRB8JzDx7v3BdAtWq7mTcmCHEVgTueYnB5hY6Uro88bEN7aN1KiTkCPP97FfVpuz2ZHESUG9ZS1p",
  "key9": "v7qFnkzYVtw73b3SwHoXx9K2PAFhrXA8ZjzhaBaiCuE6789Zd3wSygNoJYhYTaoUa19VS6j5LkBb7yLpxLvbtkx",
  "key10": "2ywhggRScCkG6KsAMjz84ku8jNeRuLBFrDDTHTS7FD8VtbMRrigtJyNiLxv9re8v6ZqUsrhfuD8d4vgmm2aedyxK",
  "key11": "4DU3YBTJy6pPXKzxK4iRmEoBM3XGot1ttnNBqfY8vmJMrsHVuT4GaBQQ2gtS5JFvq4B4Y8pM3mVqDjc6NutWCdJe",
  "key12": "558ErrTqwCgE8oPFxaypGqkvDYhYtVfTcYeQMNJqAkZkjekjph1vcKPB8X51MnsuDZFjq4n9zPUQkn7uZX2x9ECq",
  "key13": "5MJZ2isz2yvPDUzu9UhHNn65eEtFf5uVq1RXpK2orZ6cGahAj143LFxyMF3rAZVNqiXyY25uW3YFrVngURvtGJF8",
  "key14": "KCsDGzP68Vjz5YMKq7gv1mQ6MR1rpF3kQPhSJk8nnBcEZZ3jZTQeQniHJBJA9DMFZySrAWRoZWMzMR6bmu8bCCb",
  "key15": "5x86WMUDbybj1GSfPUh9uiDLdGRAK48wvQ5zwg3WY6d1nhJxcsr41vzByhsxqM68Y5CxLaCTznuTRr8ERMxs2x2P",
  "key16": "52g5fvTUk3Jqq5Z2WMBEC63w7sQfqExq6hmx1Dw4Ym73edvDQYB8pQmzCQT65GF57hyZg1o7e25mMnXjKKuM5Crd",
  "key17": "78sfugBWkczjyAvD4moXz873MabzMketuDup8ngH4sJBaWBchwktXzcbGXNQfHpSnepdMDm2dyXPMNe7ZYe84yR",
  "key18": "2Cz32vBEZ1mwowHsZt45e6QjZdubummKZBu7ovecL75cTZCof5pAAVT3jC9PjFfjNsm8SXZFwTweLQoS8XKZr32y",
  "key19": "ShSmC2k5axHuAuCPcCPZxb3TQ8hd8nPR6Vg3BQ41EpK1SToBK18NZiCjwhq7B2CeYBcJxj74k4UVmybLsbD32CR",
  "key20": "32eca4VKQAt3BysT35awc6vnmGiSs98FETe1ZcQydpPsRJRRAj2PHCGgxjt3qJxekcNmkS4kG2CzYuLNrmJ9CKEo",
  "key21": "5GvRfSxt7LEeejnaBQAMj1gYxG4yxE7PK5MXMTs81BS9pDuQzRiscZ4Ywkucz2ydawJbSHvA2wPRxUVssQL1EcJA",
  "key22": "S7GAG6YU7FLsXqRANApgN71rubdNxC6Hedqn8KiDWeh7FkkFgf7JPkvWQipRp3iQfuSmJRaLLNWkajb6NhBkFoJ",
  "key23": "4GFQjWbsTpYEGnwe9BfBvuZzAWpSApy6f5JeH6LEAc7VkqGY97MUWoxV2dEDf64F2VCrJ4HzH16EY6u45qvZQHrM",
  "key24": "Q9u9E11DdUF6B5KDNCoqLQsBJ9WKrKLv2Diu52rgwW3d6dpNf3wVDmzWgfcQnFVRT4CNRGRQTVGeTwxwjmigzDe",
  "key25": "4eZMbikxZBJAt26X8wAvdHpeh1kj7tRxtSJCXziNbAHvVWkYvJVAN8AcsCMHwjsy48pc8YrtRD5UNREDGMH1e8Mk",
  "key26": "4BcA2QqEoATLR6gNrcnVFB1bz6yd5RUm8hnZL9gvNym3vV1afEK2t2jc9P7xuFrJZP5mn1Je123AWm2HZcpM49FL",
  "key27": "4d9bvYcBTNHmsE6TATRhhrHAzrQvtCFDxGxncwmmqTVrGdCTk5HM4ZPrDzapUw3b7xe8226r9Xu3eCT2wUEavdb9",
  "key28": "XozZBFEyAVRj5pTWQ2xTKGEHYfF3KHTiSRLSv74H76fchmw3MTziXUvp7B21tiT991w87hhpKMhKPZ9M1aKexvQ",
  "key29": "2rR2vHBA8xzdZ7119HRfSh8ua5jooYA9i4geVd1GhpEUU2HbxNgDmT7ewJuvX4z1U8A2jEaEdJWZiLx9FT9sBjbA",
  "key30": "5No4V1EeuK1kedPE5ysHaAxC2nGkVbmcNbycuBNvnPDtrVX1gzY9ntMWDpLs5uVS8vTPSRqpm5hwG6JZ3BU6qQa6",
  "key31": "5LFfurXgsrGjRTZodtheNF56py6iKoSmZu6Q9fsueNpWBgnPRcBTQ6z5Tdf8dMJFhubEJEYSz2AxAe6zaUkbigaK",
  "key32": "22XpKhffqhBZGzkyVspCdDK7zDebDvdbjDEVpkxp4WfyLeMiY5LLBf5iBP3rgxgws9oGHxsNuEKVMpYhnhjbkyFx",
  "key33": "64huMuiTaZnvuf6eqbde9YpneqHX9tD3yjR9mRnLsh1TKB76iKUffRtVsyoakV1zmUNxg1fxVFFMP6ZvyT6XZEgp",
  "key34": "2SiMF8f9UsboYE9CHQJ5ddWEvtHdBndFfa8a2TRsZiFGVPF2N9uz8XTHUkjBaKs8DZnLezCcLghskZ4nropgs5Fh",
  "key35": "3aoRm8XzUkWBE6xsGq6abkEmTspZAD5u32gX9S9H1oXhovCV3XrCanEKMVgVMG2XyW83GotJsTq8efkA6iKX3pMt",
  "key36": "4pSzmbRJDS3jYiHiaBXHxH46ja7cZ9aAbDBeE4xX34XRhCYefYmGCSgpkMg1EDbvQtJEPR8cWeM64CtYEwV9TtW9",
  "key37": "3DH6kqusHXAMnZcjVoiTgVFuLD2ayXSm2aBpHQggoK2CqmKfwxqqzQyTTziXeehPPp51W3GDR1gQxhLEH61d7ZSu",
  "key38": "479mJXMJ5Pndy6UsKCcY8t47iZswKv2DFFnogSuDhPj2SSa3GPXrj3yuofbRTfWFs78Dq9Kj5Qz4iKbjLfFjx1mY",
  "key39": "2YYHtQbKZ5nsa4qJcqWmYioAD58e815xrUrxHYYfzT9Bqa5q3nV911cBQCR7Axj7WDnGAJy6YRFQUXUArfkXrzcW",
  "key40": "2b9MAHStgNgunRLFRjMeWQC1VHe8RdXGDAwSFoLY3ywMXdCNSxRoVezEaKuuwwTMEL4J7sW5xz4u5G1n4q2fAdsB",
  "key41": "mQY4Pim9Hu5cmv1My8hbb9rUoqgShFb36W7y66cPUYAPUceudYribB3Jf59ePqTT5KBRJbwsrgwcxfyfTih1r9v",
  "key42": "3Veu7c1MYmZ9VqLZJssciSUJMp16pKMrCtKKBUWezoKBwGVdWip2KuKECAfZmRpYW9XUrTbUZQvXRQcLeobwY7VC",
  "key43": "5YQPbVKCP9GKscE26yi2gtomMpuXRDyJb3WV6ddj3JSMVRGeFUA95T7A3nE5tgEV2fSUoexFubaaUMfx6F4ZSfQB"
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
