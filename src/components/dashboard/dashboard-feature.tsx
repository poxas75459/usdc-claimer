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
    "5Ek1tsMHjgvT7PgpDSCZc9Q9H4RrLkLke9iS2LvLG3jBNVfAqa3SdjyFYRTo9NvjUjZ9mi8k3pRzbN2hBnK65S4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiojQ6V2yfhHPs9XzXeavGRsLgdDqUxiTbHsALNkRHwXNbPZ9k39C98caHNzpm1VoBTjPitFjp9a1mWRTwDXQph",
  "key1": "4SpYXZX1pzAR9HULtbJn3Vsi6F9v3Tcp3aTWg7u1jKVjpsoGBWRMpgoNjCBuoP2CfBguDrQncNgsZLrJt7R4YAT8",
  "key2": "2Zcn5N5E45kPhekuaPhbyRQfxjVKgoVD3u5LvoK2hJvvyimMCrmbGeGzNHGrAr2xC9tpVPpX423JTYTn1xMLTQuu",
  "key3": "5ovuZz88ro1rv5w1aqGqiUxP3uZ9tszHiVtq56rZMrpXKKevRWGEkqkSbTY9a42KHWEoZiZQipoQ1wuXHS8p5zvc",
  "key4": "56jnBNxjYAvw2KZftYk9Ti3pnh5McMJeNLJShh3tU6DYoZxoN8gL7aY9UbKdBLDZUp3HfustkB2mBAYRv3Zp6QQB",
  "key5": "45VPpwmpy8ViJ9jzoqA8saqXdFvTBNTMUkC9NCBDeJHrNgCffXVSCw94c9fxghTPB6S2pjNGWz4MEonfdUhsWVcA",
  "key6": "2dfnLrk1JDtDwGhQFn5dxoFZK7RbECueuCbdQ3ggQDFDRkKjBBRWbkvFJ5tkkTkb7iYjxPD2aJ9dqS3a4DsJh8b",
  "key7": "3jWsYzLHDCjGUmTTKwwRGfwxWrVneJbqCr8iPVacMZ6kTFedieuDJAEEDSsapZQ845hVpkaXxhfwj1AEFRaxHS6x",
  "key8": "5zx6FQ1KS6sb66xP2rTo6Kba9bEYu2puEktSnU8gt3YhE9A7heDZdxAAPCtYDLfdvvxLYmqDLfsnPyQ3vPB1rSiG",
  "key9": "PpT4Pqk3KXEz2spTSG4KcJdTi4zjrtdnFBm4wNLrZENZfRfaEQEd8RbpP2YGqzfHNTyR5c6c5hHxddCPRESBD2a",
  "key10": "YRpZuczGyRn6JdgLriLgZssx326ar4jM25sMXi4Xkmq9AVEQgA7LUdyyB8V1ezd66eMTRCShXBoC33LhKV7c7V1",
  "key11": "59Z9mieYcuyuZu1pE6YZNGaesxnNX1mipKPMrSfbWLXNMjp1QaLKNd6rr7BTebSbdVmRbq46kDUDytYaYbnFBofU",
  "key12": "43ozcEXCFz4EkhzeEemht3JZsCiacL8wuxqimm9xn2jtJNMGn2RbRSmwyPx9FCQ93rVdrSqGMWC9Ym9qVxGZhU7z",
  "key13": "2zjFYZZSCJb8QuKsdCi4iUFRPRYhhtB6MwAjpndGnSqFNGF8oYiXPnC8ZepDur8BtcNAuAUbJx8DSYHsFJq66Ja1",
  "key14": "j81FTHAKDxsrYp1fAWVwPD85utZxvpUunds771qNaLccnaQiYLT8hLQqdZeY47zPnC1i1phGgB9TTbx4LWPxEQ5",
  "key15": "4n96aFrkFnBqMXuH6ewcmcUBQJPzXMvFXaV8gqu7GokpC32VkoSe972wwqmua2Ze35jpecKFvveVg6tVSQYVZeLP",
  "key16": "VcSgn4QktRuSDEAToTdFLV8QDBg4j8xrUXZpzFcJp5cqDtbh5HagTbV1NmHoNXYMLuVWFNDbjpxxN15CdNkgtMn",
  "key17": "42hWXh2Yh9mLhNAVJxLEgt3gjczMqVGa5gkNH2YpGQddrB2qzrR9bjdGhu2UjnQLaUwddURprMmQbRuBdBqi1BeD",
  "key18": "2FHoVPt8b7UjEomgYuFsy1TzAxHqivUfe9WjMz1kCUgBiRr2rVYVsG6e7VKgCksFT1vpU4aSPXQZz3rZ7s8YFLE9",
  "key19": "62NZ9HpuCNezSh7onoSRhmwLeftL2fUCKgPb1SyDhLWVpTxUk28fKBoKyTDm1VuGYGvRxadgLvmUxwLv3gAqdC1V",
  "key20": "5AxCbBnJ3NnUYhHZyWKttbFVkRWLrrUosnQtBrLYbukKJ4Gw2xahDjH2BJwbTSNUVCHrtD5CEGYexACzVjZtjDJ9",
  "key21": "3jNihNkMzQqAKqhq16URtPyTLeWvkirg5wTv2YHPg8TGgcBAHnTSw2Twg7hxFJ12PoQuPLnvHmScZG49R7KFpVBa",
  "key22": "27NqXi2mF4CkTEBhncpzNQyE2uUM3Mr4ETVfZwDkzMXnsKxYGLY8E2YLnmE6QeUXeNwGocAuJqnG6MbVFi6Cu4x1",
  "key23": "3YzJgnAm7bFy85Cvso7t1gy8ZjY7nVHmXiZjCgwxmC2j6D4YEzXhbXks8iESnjjSVmRf2FaeKAycQC1WfeEFPHsj",
  "key24": "41mg9M9CopuUFXSZ7ysB4egHEp5Kp9KysTzCooc85xdgCD5Z2YzfbmMpNfu9vshysXAgsPwPmWTPpMP6xkFN8rf1",
  "key25": "4hiLsQmGBGREwqyEGjXCeGEjBSnbRQTpPkC7MwhMwXFFYYTeSBz8kinNRjTZLBNRPBtShCnP7m9cRD3xutCxnGLy",
  "key26": "f4oFtc3D1D5uyyFWsKTkiRLaBNG2GEPHC9Ne3Sf4mLuW1gt5vGSNeHsn1WmqV1EYEfu1aoBaPUv7KujQhP2BGeL",
  "key27": "qbAY4HFfifE78rpZibSAis49VjBWP9q6XNz7DajDo4mppgZvzz6nvKp9qWwKRTJh8nbF763Pv6aUrTjnwZNg4Vp",
  "key28": "hBB8akLtJaVJiWdk461sHdxPsryHnCDY1MSfezR9afQas1aTNBovqFdnLxiyx4XQQqr899Rpadb99B2RUbyHHet",
  "key29": "n6TRDAbKa5HgTTyWsmJJY3coE7g9CAGceck4ydtUKKcyDizDQG7Sqwb6NQh2EbmvyBZoyuYhBuUSi3U3FxDEnp1",
  "key30": "35px7SYcrJKCbEvFPz9c2Ah9k1dyJZkmogNwy72FJTEViywxJ7EPySaeKptCW9J9WLyxLXyFj6RdMBSeJQ2W6sfw",
  "key31": "4ay271fHdGyDTdm7NJXfyPut4BMmY6oGjaEHbgENpaK4JiJwLw5UdRgrrnnKp83LikS2i4XVLD5eKRADM7sARuX9",
  "key32": "66ofoyZaGQHi7v4iBzuQTGjr9b5mAqwnAY8Uk8FUnQHoAc9MMDHiHLVndEbwz4P8GZdUhHvHRzzmFfRqBhjbuMHb",
  "key33": "5mVZ6ELDCDcYS4apZXGJdNxCLoBwpXnECw4FYBUYXA3cENk3y6PH6orDMj8Yw6RwJ8pktzuMkJ7cELHbmT7iVRUP",
  "key34": "65TD1toKULkqMxBQyFVCgR1FAuWgVaKvhL2N2EqtXGRpXhvzCwhWuqchSZkZUw6sSBn91AkHqH5JCRaKGPXz5w7U",
  "key35": "2EW8njkoPxchD3hDEce1h1yNWvSS5aXzk4PAtEy7LF8eHfF2NUTzg7e49iyfdLAdnaERGiecEeDqQNVsbb2xGGPL"
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
