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
    "SCRJ85CU1YPkRUBSqCXHJpKAnHfChkk1NaUiv5JskFysb7ZjHC5iq3Tc5ax8gbdwsM4RtWkZRdXXhD5BqfToXY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbkvANvNoWR62RCSEHVZWb766Sw2MPTnbV4K3JWnkVLvNJkXknatRT98vJwRZSEwbtTQrRigpdCYj3pcRUw2iMU",
  "key1": "2poLmtWYFbdKq36a5EDSx288fCz6uKBsfNfYrHMjZiiuswi5rnWrLHseyjr7d2wwjiCYvK21HFgcf5fQVdodRLxj",
  "key2": "4BUSMWMN3DmNYems1rdb3TPKEXKjmUHZStdWM2J8otvMuQrSRoAS2FR3SwgStMZi9RABYwBhCaUxCoJeimcYbt2",
  "key3": "2iCggZ2RdMPQ3GdkARojGbGaPqgegXxSQz5jMawK2FYp8ibA5TmYGyxuRjDsT7Trs18hYD1pk7573bLjTyGTa99g",
  "key4": "3e3YJTDXVou9cyJLnLQHMHXaJxgVE2opwXeAZKfAdwrE4sanHEYMV4PsHH5jVheL8L7eeVJrhQSZjT4DERw3aSbS",
  "key5": "DT3LrGE65mfpnX2aYy9XqEn396bX3TTxAqGS9Z9o8DyWej9NNwADrNhedHgZfFGUFU7WK7Xnspc6a1sD5K1wLHS",
  "key6": "47YdJ6myCKUBvS9sGk7czfTnQ7yeE6ys66X7Roa9KSPBXvg9ZfgiHppNMH644jrQhx3QPgunkGdvJdUg5Sd2djix",
  "key7": "fzpTsNS8ecbvmxWKLGo3ythgQtuhunh2VZj6uHfFTN3oHnXHJNQyFvyX64vupEPDXhVJMAWo68DgKrEr9X8gDNX",
  "key8": "3QTBT2CpnxyWzm9fNqsXvvPz4UXo4LNe6uRnZoAmEUm5LZZpi5UYVJRC3AyYTiThdUdbj3KfdBev57dPNULhVUmz",
  "key9": "39UZqpqnzuoArUiCshNJnfDWqvCL8rkaXNpZjmK7mF6xZAhLQEXRRQW1QRuz1fLuWurTU54noCk9A3kUGKyfzn9N",
  "key10": "2D1uRrmy24XccMF9J48G4NgWhc4ujrtF1giuZfu2aXvSmVmpMkHz49ZZmUNvBBcbj3DMKJPRWR8JkqJNUqVeMejs",
  "key11": "2MexwKwiQczHDPAkjELkqqV9b52KEfKcSJaPP8wZKuWPUyV6vXqdmW5zJaqRagmhniLsJR5mtCZit49kpHF7m4dk",
  "key12": "22spwjv8zUMDiYausjrKaQZZbUYTiKb9cD4HPM4Ek9JRx7VWJiGA7XBM967AgMjo5oXdg9RKVPdkwPNZwtPKa7kH",
  "key13": "mzBPBsPtq3aYU8kNttCPncY2CsLRuNLdGwhH1dMR2TaVZ6SX6JEGSMYMH459WznG6Xn5EWZksHPFXKTnBKkT1Bb",
  "key14": "4Ei9eoAXM4bFhy3J9aXk4DbuJVWXqZFFNdjmQd66cvsuJsM55xvEAhgCo9aQy1YASphgW2EgK4LMgNf3Ri7S3CYU",
  "key15": "98AcRGRUV54tYwRXY4KenYmyYyFemPrBRXi2vetrXPF4iUmweWWGjCTvHUyNG6QrB7fBt5UU9TPn4sKYKV7RhW8",
  "key16": "28DxVwVMUhVXevVGonEJiC2zbxhXbncVeZFJkMTNUeMZqRepcdAo7pWdEvqgjK1as92FnKqJ4nBaeVG2wykDMJ5M",
  "key17": "3wxAaAu1wZ3rWzn4PJ5ofciUgNqbZRsDHS54wHwJxdmdpEzPsZHDog8oggPeJJHLwi5s3a2jDKk5gnGx3npLXxv2",
  "key18": "4hXTVtNAzA7aS6gkwcSjpvoEgMocSUaU4Vgg8rN2EKYRFGv3LXN3Tbk5rFMNLHCQJnZ99XUzFFNKr2qC3cHk6rRp",
  "key19": "5bc1HBPu95dgUL6tMReT1vatqkTiaLRccoLak34UR8GwZwEHkEmARktxi7rNhDvnjfQHNKVopYyxAwoMbHC9PQ84",
  "key20": "4P5e3MQgxdWznL22Ykx3m7TfWaa9gRy422EKuEEjsfni9uPWedZZinwKNaXvH6ktaA5cyUcB2bxpCevMJ475N7Ce",
  "key21": "4ZjRUmRLAwDPfkMFz3FBCjqduuoa78LaJomAC1dnU88cfTi6GWG18UQU8NBuro1GYbx4JcAq9vNwB2NHZ8rLULwo",
  "key22": "2SmkQfz7M5MLvSHR21C2f8XamRfuQwj7uwcg46BYqKTFVaeA9oDWwSnvyC67EDqskWmKXWUF7wVn2VqFBuDuxpbh",
  "key23": "3hchNNrHDhYPRG9q7PAF8H74tanVZ1eWYsxCyE8Vo9qejADkKTYtN5ANoc5fwfADKvLQSrD6xUVwZJV8WuMbgcCA",
  "key24": "3rTBEmnii54Yj3B1QJBWmBjBefL8HYtUff74R9EbHH72kwLzyS5CLWYwGp4bbP5wbdF2i6x9LsQV3UxpTgzVu6Vc",
  "key25": "zMjAGHC5tN8fA342UbWadEqXwPbB3tqR3MpRqrg3aWqvAcw435paRgMVLZ8hFsc8XPQnS1cQzPQpZjZosYpoLKz",
  "key26": "5jU9q1VkFrH3LizyTGo9myw5EkCLnctZX5VykSCG3gu2pR8Vd1waKeLw4j5YDgYAHwvgdejSDRfmjiX8NACtkBfx",
  "key27": "4yKjzUAQQnGtPXShqJKYCDtfAtZguBq5pPrS3Z18ZjwMWh9vEYkZedUxx9jEy9BXTfjD8Duu3WVz4wvPBanREyJ5",
  "key28": "3soRDeS615MsCzhM1x8mDDpKy9noLw9WBvk5FX34ZBPiDdmZAaUp6SrnGxgSkz23p4E9hLdtzPWWMhszEbU4pXAa",
  "key29": "5tGEAAUt7wD4JPvZpa8bD1pqQbbJLJi3rmAwzfYZ2uzoTaoMng95GVbeG4SweZnXR53ei27T99nAFgGmQkTAGkex",
  "key30": "64orjJQsZ7N9GhCd1jhfXzdNbvdynRcCTJJopjA4hRtwrMzyU1qqraMjQcsCKQi8r6hWFceg25Nxb1LSqX86zBAD",
  "key31": "5kueXWeNYSxQaCzrZfC6Z8mZ2LyEy5PPjJiWQa4MzUTRAwVeBdfKMXobbFFDkqF9py9siHgnLL4b8JwAef6x4k26",
  "key32": "5W5TveRwr8ooUMd14adJG2hLJ7gbx9Tx5Nch3J4XqW18PzeDKZTwx4Ar2LMYayLiHeXWN5bpDLGgfunwe8S6jiUv",
  "key33": "HjL7eo25MV687eczMkQLQZzLHDjniVTPUE5f74JmEkKtAkA8RY6aDFta9nuxCqD8tPzafW8tgtpK4RWy8rCWp8L",
  "key34": "3Q8enGkb4oic6JyCVEgYa5uzp8YvdEK2iN43aCYuv6Hh2WeR9fEeJaBo1VX1pka4DRqqWHmoJBCuP2tUvHmkD2YD",
  "key35": "41kngVDwNw6qgvHnnWhELysjk63Rx7BRuE4fFSEQhPob9mTuJXQ27q19TJ3mVgYbgkXahLbs2evoyQUT6mREWFEB",
  "key36": "5jWD7mn3GJ6fVQGkUrAoWhF6zThJ7U9Ad9WChSxFnWfu3tWpBNsMK4Fi2YHSZgsUPbCX1wWPusfgDfJhqGj5NsnT",
  "key37": "3FB2g4vJm8VjQqtb1HwFgCaU4YmzVsiFprvqPjqGG6Hw4jSF4MA1HPNx3fhbzMakuqSCfWMj4jEtRMPjsnKVaeuf",
  "key38": "4posQ6Yo75pe9d8fguHBGKyDDf8wkn7EzQShPT4mkpQnfCm73WbobUHYWdfpoF3UWwMBCKqYWhpgXkJN8iU266DM",
  "key39": "4TqA6nbiHVRF35wQ27B5PBFd1pjfUcrAH3vxBrNpvHDYJyjEPvNJU4VRLx8FCrwyRTKgtThCXDeDfUzRtTLaDEb9",
  "key40": "pYWBq7ipRZnYE9eXAG3siKRA9WtKJ6CiAtN51WbMgqmtMejV37v16tqrH3pui6CfDd2JwAyhhZDqJB9gU4BzpwT",
  "key41": "4s6BHXLPyk1AzSqG12tQ87TV1aSTfw67PGfnFFWQcvP8quQUrKjAJBHVPVqUYMV8db1cHrWt4bB3VkEknq9mofwz",
  "key42": "2BT859Af6F1mm4CwXiFK79whAcRDn2htUUdaDjRDvQmYz7ZakUU7BY4kgxgHeC6TX52TaZQJgwX9EfvUbTQgKcbB",
  "key43": "ezM6KhArsRtghJtkpWur1fY7Sdk54JTJ65uknS9PgqUZSQovc8LEauRQUo9RzQDRmY8hxxhHzNF9GNx2ZJ9tczi",
  "key44": "26RmG26FNBBJX7vRb7usHXkte6GX4yDYCY7mZ6JA2suxBgdB9eBhkDzAdLBJLRP8Ur9k8YFAwVN1qWqHJvkPgTUH",
  "key45": "3uS2YJeB6T5s2vAW99tddHewLvp8JGenXnBxhmTnrdgVescs93CxGQaTYSyUcYRDy2W8uBMtnqWxTz73qqJjDHg5",
  "key46": "3PT4JzYpwNPVeSzRmYYvvfwkXQNJeNkrJ2AEWjz2E1NsjzSWuM9jD9tQ2M3Wi2RH35kfyztuHwFCzk69LJuKtXnk",
  "key47": "2RaLi8EsYFc1Zp6cveiwqyYH2byRbG7cDapKPnbF9DRhs1gvi6wAxCeWAPMNxt2eMxAhZwzMd4cimSnYL3vWALHZ"
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
