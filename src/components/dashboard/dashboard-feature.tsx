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
    "5NfmWobhkWLZt535wg3pyjWndRzrGhaLXkP6KxfUzrSYgtJFSDXAS8dD3rBAKmApc7JeGKDt9NXsKrkcjsq25vFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzF84T84WVpTyVCbiTxnq26gEtJyo5K8Hz4CiRVaDkhD7pALveeyxpU6as5HhGaJegb3jGgBJ72fPokeSFT33ZY",
  "key1": "3eSTjJt11SwukNvXjNCPfNqpa9eiBrgPMrKBDe5gfrXBxMGrZCF279WxLT6sqZ2rmjKo6doHiWc2UQ7NPN6Ai2po",
  "key2": "67jE6p91tJDU6k2znfKymBHZX9QdaHEsCB5CsvZ3rJSKZ2D7VgcwXaCmYLvDKwMRDtngJv1aahSyZyhrGFFiE7Ve",
  "key3": "54u5xhfodTmBqQRhDhwYbve35PCa3iFPyC6dWB7x59aCxBQUWvZKJDVjyEqxhD8wvbAhuGdQ9pkZgqDnDQjC5yWd",
  "key4": "5cLzYMNqWiq9eyzegYYr3mi4Z7WRhWSc9zvbpnDy2simWPjHSUjDHHHDsXhZUbK78PhEiQsbpN1knsxFbKkvBDVj",
  "key5": "zpkNET155edCXqLEG2dQtkL8JsTPUVdk5GVvVBoXVmQ544N7thjXdSYtGZBHbtjh3KHyQ6LzMUTD1e2ms2KyscN",
  "key6": "2SAT4Vo8tk7Zn1WcytwTgxhBiXLZx1GqGHHXby14SsE9wq1jqJiJUdKXdBvYFptXuuDhiao7ZacGKU4VS2Dach3n",
  "key7": "rNFMbufKsSETcXyyeLBZgicqgF7Xa8nKyE4E41ECrLQKEaGbDJwtLBtDfc2p9GrQkCFt9LqRUPoemo5L9eC6Q7H",
  "key8": "4XRmueXp6MgQ6rxFS2MMvFL5Yhkgu9SnwDvpikWvpSrJQF7VG2NChbRP2ucvfsBwuyfoZANWjRBtjX73KheraFJt",
  "key9": "4zCP3fmsBERsBCo7oE84WknqbtsEAH1TwXNePTmrv283QHdZUBZVVdA5iM8vzirmQQ9givsKsoTkEnEJG73wcZSc",
  "key10": "4Ho8ab4Vv2bqoTmrGprENJJAM2e1AmkLXTd9MkXto3vNEdgvhvAkif2JwjvWtXqqgGgqjWY2DQtwFWQSgCFGyPrt",
  "key11": "2D7aUdDcQkJfAcGtXzAkDDiCHYjYjsEGmFzyx1cafZ1bMrFgWwY3WGKMUwnuSaMGWzi78oh8h8M4cQTjrEbnorsT",
  "key12": "3X9ws9b7M3sCKbFWDYBUCQ7qrKq2kLrFoGJ4cimJ6k26YDhdvXvdjGffP2LbnCqmdM43b55GNd4p1zoxHd5YoHCE",
  "key13": "29MJTi8ugnNrhZymTDcBUNvnPAvznGWRstuEZKxtzC668T7e9u6vxJf6k57ZzGxgUJq1VdkNRoEGQZ59sPKtCBja",
  "key14": "FdzN2Lp1914JX7v6AfHS2pBgWtQTazUhM1wPN6PiLmtcDBdKD8Vz7YW3Jt8Pm8RFk49QzZCkVBXNc73yDqotUs7",
  "key15": "3iHVxY2hMf86sjnmAWeMKZB5NstrTBLRbNm4xCrdk8AycWtAFMcazSKLGc4waQUgv7fauKZiq4E63fXSJG2XQpB7",
  "key16": "4UesxSR9pTHrr25kFeEo4acw3SDuQ3XrYHBinEvYEfbHpzUNT1xt5LQHvtEHeFU5rhMm37z5WmCscYe9yFGRsyUc",
  "key17": "33xWumJ6HNRYYaWMBtyfgABUG53Xw6pCaVzGysijh8kEPpGSsmRZ74s65KyjpLpPEvEKMz83cyCGf1RemL1sB33u",
  "key18": "nuuhxfyZhEq4DZkgsF8YbB2fSZVL9wruTpH62BR486o756D5kM11FJmp1che2RbxXoivzcMUvqsrJT7u3zbirLF",
  "key19": "ucbTdSmfqyoUfQ92YLrEt6jm5LUaWXfcei9tVXXEy3yKjcrxCtS6uRUXmpiMccihRzgThLnjcpcGLNZPK4WYkP9",
  "key20": "aH3AQwtw2rdmHTWjtLNYNhgxuxAcRDj1GSUVMj24aYEfot5awyuw6dnb7Z78RQRhD2GdWE8Bmf11pyRExtNdY5B",
  "key21": "3NnofWQRU8i8bsfoLJWqteuvhEzBuKMpWSz6MZtQh2PfRrJZN2f3AtdAL5DrRzbdT4h9XZDj5hF9VRp3oJkK7fdA",
  "key22": "HXvB6U8bzMG5abgG9vXnfgqbjnxZCchqHzMh3EDaVith3gZUJpCqy7h62qcpjR3ziPMZv9K6WJda4qYf3aBBuvs",
  "key23": "3fjUXLk5pgPxqGXK1NLk65SE24cMkEJZ25ZG4GajfGCLYGFkx6Hkw7nbaudfHwp1254WDF9A3P9YpcfGCfdr9ENY",
  "key24": "4cV6X7awoevH6fp4hiXaiRqvBnS54EKzqy2qKTMo4p7DTqNgBMXngcZHmDbL7rjso5aMJYiSpKTCXjbHzxZWrA6L",
  "key25": "4ZQ2LXWR8aeNs8R3cF2V6cU3GYEk7L9JGJeHK9eXa6wueFj9LzY7GV1NaVwV1u2GSPhwoDXndJXDpAZDMbMw4xdg",
  "key26": "43WejrsRsgKJdv3b7UGQDm1HY1SeVDBiDM1jtro9FyembSzs8Z3xV8EjKvCLyBZvnAYqKpTFBeoRyjHZw2GmsABT",
  "key27": "4Ht4t5UJYYaTaR6C45GS4kna34QQR77YCab2ztkvFvLCXiw1iPAjbHxX7THkNs9VqhQAzmgu45mv915CCmQe5jZM",
  "key28": "3rVMyxNLpn74kyGvjHxKMuFz8Tw8Hgut7B7hKLDUyQi7Q7TzLDfqqtE1S4ZM5Ki4HGbMTTmoTGcfM4Mg8bQxTZWe",
  "key29": "2eesEDhcbz3CzSSB599eHZcoM898jZvZ1npssmETmtJpmr1fEPFtGdBRo8yEcH3ba2ibcARxjAndvfYtiQn27W4V",
  "key30": "5aA9KwSKw6khrSMySnPkgjyVwgskqT1X8m81UENkTHSvHrQNWWN5huia6M1J5RcjKZLdH5jM28HSQT2kVEaigeN1",
  "key31": "3ThBUpCg3kZ4Ab3Z7paG1tzvPPL9LbacT2jbjthQKMsTAeVji6FCQiV1edoTPYmvwX34CwAa25UWda5UWqyWHJpm",
  "key32": "kZYAxsj3WGdvnkXP7QBdUDZpsuddqwpa1goBQbeMCUnF8rNKTb988MRqD5XKN1SXvWXg7P1hAECRy1DcvNQ6Nrc",
  "key33": "5xSCgViNcDfx2AjE4cyhrQQnvWp1wyqL8tYQM3FjBkFjg2DRyNBrPRkwBnzopCp12LBo3U9Nk69kZSntK612t2dH",
  "key34": "5BJsxy2BEqwqoj1jbkhQFc5hJ1SQtvr8JQfJXmC2um2oZH7AKpXkgqkMFN54jqQ2VUukZvpFfLzDZ2zpy3zQYhDX",
  "key35": "aybvPbR8s7JpjYyH37Cra8ufovVn52muDqCHzQgymeD64KXC98Ffkd7kk4zGLZF6BsVaLN2fupYQ4pzxKzVA2Ev",
  "key36": "46Bmq2Qo8p2Vr4ooA9nVjsey4LBMEptvadfF8TTeppU4RMebYB7ZGM9vEqYA4hgfebgtuUhLTi41f93udkFa42YV",
  "key37": "2R5ksfWoKNXnecwdcUA1LLvPvG6qTyBkzzZCwrLYkeTe9zSYy9xpsaffrFR6cGZcRcLois7Fo4yW9uVhxKYzh6JU",
  "key38": "3VYLK9aVDMAm7Ci7rLmpywSzCCzaDgacrF7QxAf67JKoynmCvT5dHdBuhPN9uomAvkuhoUt71ttC7h6iyHThRqmC",
  "key39": "5ABHCbqpahtMYA24FsKVhBKkgoXQEejMr3Kk2ZukXrzbmoz9HQxASmD66ChUSXw6sEmFiU7uSttjHdrbo4pjtuDZ",
  "key40": "4du5MkpURAoeXaWerz2qXhoPRpE21W2YAVGuQ61Hqq5yzYzzsM2xdRjCEax5Agcv9PnmYThXk9dB3Bh7jEMAxYd4",
  "key41": "5Xi94UmaVyyNdZ26Ab4v4Qe17PM8RztmABtgVvP2Pb7F5JbnkDpjyALco28j5aDhJPDE3WTaXDfwhcazKHNCtZKR",
  "key42": "W4tGqDeU5HhsCUJqM1wRuczTFfZNnkjnWqvinC5r41f98mWA1wmPmdGBZbMfQpVsWYSSnz8YD6htCq4bNkSpRnZ",
  "key43": "4yHKmV6X95uEeqdrzje2C868pexiHATLecBD93TJU8t5vnDtegXA6NFq9fd2cn3Sf9UdpwcaGsFuiPjVDo8mcMzk"
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
