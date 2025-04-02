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
    "5eKZKiarF3jdxSKvEZK3wBYNqM1URHkT7dbhRGH181fRL4fr2t2vJMPrQLrKKdHzAXHhyrQPMauM1vbjvN5F2np5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJ8HttVVUwAx3JsRLoauS69dWvJqm8JkyrWXUZcKA6z9wFQRiE3n111V7THtkcpvxzL12QwXT7TCopM8CJ7TtUP",
  "key1": "4SikEyrmXJzRgWU2Ukf8ZXu8dew6i73QbQBUxDcMJbZGBNzo33QsSkiCdebDVQ2BMeFUHo5tnMyGhsi7pz9HKsnC",
  "key2": "3PmGs54zj4qeCLKB79DkXXGzPRFbz4jo5h8bMA3Cyq7GMnkwhhtpT6uvSXNCzss9DazvnCHmK4oR1aSQTmZ63ucZ",
  "key3": "3K37uWxAEwpT9gWqRnLbajVk6cBYvohE5HvgEdvD6GZfxy77deXD3hBhTg2pU8z2HC4fY7v8h7XTCc15nWmxwLp8",
  "key4": "WiRejaoL6MuPqqKz8mzY2AzBtcBPzZAwdeee9t6MbooBkd7dgkEiBbAVFEsaZfxj8yjtfZS5F39dwPGZ5XUobbu",
  "key5": "LVgaisQdpJRBe1J6ZZkto4jqyidFzy4Eqp5BzFPXhxXKkMe1BieCNfzNWcDy3qvpNEwMjaA3BMgr6123J2FN8uH",
  "key6": "2PpCBbP9ivA6PT9pztPTpN4kKzWpYk3T5wLPPma3SkFFLb6Ca3utWngfmpTouC4XGFVmZr6mpshpt74nDaDQLsYX",
  "key7": "4vM5jnuo9EkwXaWfAE8G2f9xU7Q4SMJoXomN4a2w4WkdtzdPmLc35pGdZuTj5VAcPLcnPWNe8c4YWw1AgVuSoJ7Z",
  "key8": "5XFKZ4BTbBN7QjgBrZf9axQZjVfxyLuSuuKc92BF3aDb5unpzQkwN98qVbjGYXmH8yZ3pLjFmAtm9Ky9FiqUp4x2",
  "key9": "3bAzQbWqNiyX7wimnDNFyebznPNK85FYkXrvoWWcfzL72TqT6aP6HKdAoR64RiiYFMf6p2ZKSva4Kpauk2CJF2JE",
  "key10": "3zgmP5qx3Lc6chfoB4i5eCQFqqYjENzLR9X8CUDWN6Ht648Dfu98v8GVRf9SPf2hiFbXdvcuiZi91XD7UFy7cQQz",
  "key11": "3gbxMt5xktji4t12gnWLR8VnmmzRbeFCTNNmE4BFKTLBEnTgMgTitxkxSt8LVuSRDDd3wCao5TVKfMYqJK21Emj4",
  "key12": "23xmSyFWf8qeYqVZUeLZvAPjJmXnFhp9UnCRXbK6PaEta72hxkY74b2XZh6ePWspT693zWARe61LxEdgBuR4DXXE",
  "key13": "3oarP8Ew8MjwPJ99L9Kti7Ti21oFRPfsuyArV8DMiNQ6GnAbobAzmXZdMKPswUVXq98ngadju6i6D67rReNwWS9M",
  "key14": "5etdQcgqc4cWWpQQTLYRVWDHtHqJ3BMofFMkdMJrojHz6Qx9RWn3YETKMhp5gy5c4xsxdQhJHBhmGrv7fqXkDXtc",
  "key15": "44hAnaCZP3EKrmwKommtqTwmUithSBwJMhZ27gghLBpXVRGtTjgyKwhJYmf7AqrEWfTpPiWX6pDWpnuqYEGBTWTd",
  "key16": "xFybHkNECngwCb21MmoWbLvRvxsGJhAeTwj5HnswNe24WedwEKi2DbhMYs9jWnD9apoxGYFyDpNYM5uGVcWWehV",
  "key17": "46zEtgFgy1QQVBq9ErKX2WcfbZ6tT2otUpnbxZpjsr6EtLC7kUE4ibkMTxDvmt8RF8Jw1sXDhgiFHU8WYPausfHd",
  "key18": "5KZap4GN7sGd37YdRVexAA5x7b6jLhB6jCSvwEaKLv1yRTbiECPDBtKyntowCrSiz61UYwoivSVdUh7ZdnyQdGbK",
  "key19": "65uyfj9jpDU6ZrBruE85wM7JzFVqr6sg2mmC3zxNFTMu6fZeNBM2hRs6EmaqWMnME2wmAemXQiU235zY7G5FgARo",
  "key20": "2xChXZaYHibTS5NvEBVtSTYpiQASv3JmvwEce1x6GSLQtfCiybHH3VxsuZJeGVubd42ixv6adt3HVS44edHwBU5f",
  "key21": "3Rx3uZUMJdeLiMJ1VNwfT4TTBxVXHKYUWmyfgA1rQKysKis4xePAE63Kkd3sABwQ8YJoaX6nU86BveVoEZrcXGap",
  "key22": "3oAq6JbvXuHNKZWDS1SSBExUGLRT7vwugNUAxBVz1vrLWhVSYNcTsaVtGiDnxG7Jvy7p1w4znFcxCvinKXCRiYv4",
  "key23": "45wZ4GB2as6sz45hh9Jh8id4shbC4gtGyz8yp6x7ryoDn8MeowznuzpHDHoxp2mAxQ568gocKkdoSL51JimdtTMR",
  "key24": "4Psr7wFPLVs5V1pGQErrEWTVxUU6uVK8axwUbXQonu7F93ZCi51PhpqzGpyLnscZkm9APG87FgqMsfX58DqGftNt",
  "key25": "4PHSgQr2sEoKyFeez8NmPJk4FNUpCwTQjY6wrmffvJjch47toDVf8XrLcZu9Qix5U1dZZQW8PqDRR6RXkhqrAbH",
  "key26": "43JYLy3CeN5j3h3VKJ89GZQ2ChW9ZqWwnu3zLPVHQjrsK7gVTN5WLPL5mzhD3p9LnzjpmsiRZMd7VqV4QZg52nTA",
  "key27": "5qNBL3BapuNW4LqquMUvaRa3DtNvdK1H23eGfgUPi3ZXLREh6x6o2D6qozXEBk1UP5V3ckoZocEznoqrgk1HNjby",
  "key28": "4qDLDLjKoxCjr9Y6ZPdD4DsXc4MEx7pYHiR2yiqc5XY2ubvQh3BvCGHxWcPK1LCpQE6TroDHe3W7fmp3LkZdmQwf",
  "key29": "4aoaNYSmm9wS6FXnbwWN9Z4BscersVQ3aRYSt4314cwB9twT2U1zPykmq4CUrDm9D4fq1QEKAaY4YG1uvYPAyXLT",
  "key30": "53HuAzASLDVgczfsxYqWRoGepBhE5akTJx9nF6AqjKN1KzzCo7wzno42RBMCNkXWQnUUNa1v8KMrqc7xuicDegE5",
  "key31": "5P3mFqjsEHVGEtzE4WyxxrJyuJzKCMXSB4FuDRBKtam4bNMYqSwQWXAaC4C8MbD9YkR1YAFMNr85r67Rxfnig6hN",
  "key32": "Y9Re5bx9Cxv6swNkQ1rtZXwtmTVWaEVTMiPRegrmM6aaKzgHU5dXTQkZ5oBXusRpQ8vEuKCimRmwZxj7V3AASe4",
  "key33": "5uB8qdBfvasg17NXQ2z1RPcs5eUzbkCcWQV3TkhZ6ywcZLsaKdjvh9vtxPTisVrvzMawg64pDyJUZHYbgrMeSRBN",
  "key34": "442oYVGUgFuxXHYFfsjJ8KK4BQWz5xKccwzh5eTp7yUMnmNfMErapTw191GSXkUQeze3cFtzTFT8bahZvWJLNVvj",
  "key35": "3WGjmAn2cqNG7NHGfkzZxct9qV1onhJ6xnrhAKKaXLhKeCzdwSfUXoFHkR8CVpHL77GF5zpFN7pjyupXY1rsQcUw",
  "key36": "2yqLF5bTYHfLgLz7SMa5uxH71oUQgSe3ZEd4bNXxaT5Uy848pwwwhfMw29K5iQHanQ4NKqbiTH2K3Aun5eWY5VoJ",
  "key37": "4HfN8uy97WHacGrVmpdL1yFv5SgREix7ZYopQfd4M1WSEpsXbt3EX3r8YJaabviFWvqpzkRw9erwSk3Y8wie6NUm",
  "key38": "3Hvw4ZEEsXPMpFA5hQ8Qg7FVQuLtLafH76MAhRqTNsPjWyvRhsgDqeDXiqmrjFHFa2RjWZayMs7GT9BCvfm9iFXM",
  "key39": "5RmYBqJevP4Zypz6ZQesXyGkMMQMrmGLGcPHQtuLoKRkX1Wat7MTfr9ozsjds2wRh9ouMmg3wPuSiKivzzLXr1h5",
  "key40": "4Ld4fUBQMfGFeeUwbVzdxAMFS2AyGXwDnDF2aoUe9xQcVhpRpB85FUS4owPJMy9Ziy72Lt3i7Wz1eAh8dsZhCoKR",
  "key41": "3t6m52rPSKYd8hhUiPYZb2k9kMEMqkrCEEYPvWt3RuBrd6kLcPSZKHexzuSPKzuSHUd2b77sK1o58fufNGbYpa5E",
  "key42": "2UutYwu2nMKBndyLtKzHHqatPi6N93Aiq9mYF3T4FGF4aaSP2b8JcZHjApPGZgfYDqGnWFSshGXQ4rJMevq3PHhR",
  "key43": "5pe2K4kLv6vuzSaUWV3DRhVQopJ9QE6ebrMqJ3P9dnN4bQYGXEyzhEMNBJaRqVrrfSpFGKRgjmjb1CqTRDyZu5aP",
  "key44": "64kXkvoM6qQqiFKkiHHP9D6nExWR27Z4fWGr9EV8L28VonvscGWebQhNQsdLYALsaqDgnzU1RMXf3P7j8PfjkKLp",
  "key45": "4N1wEBKroeMVrTdj9zoA1UucokUL8peA19Pe84jxX64CwLjoQ9GrpgEKvMheqKG2gunFehJzD1SXWyJAt93iMBYi"
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
