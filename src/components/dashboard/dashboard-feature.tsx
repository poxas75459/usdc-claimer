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
    "3jL387BmL9yVHTybRmeugqJipdQpHa6nFGFE8bVKoNACEMK9ozpgcaZtHzJ4sbc9SwV5puK2HtHMy6PtXQ2BTxEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cR9Q2uMWz6pJpuWN1ZzUbkrd4ntYgSrJe3TorSggxQ2By8U2TNGGdZd72B3Zvw1msxBHa1Wq7rYavFBFyZWQr5z",
  "key1": "23TiQMbaXJsySwcwPsRb8VrTMmVNrr3RbkiDNoaRShwAp5CgpkJXW969A5UN7PLSL6xHq9cevk9vRxQwqwdvGUVh",
  "key2": "3b8D2qUpZnhuydvf3RthqXq2k2rVDNRmNzSp2jFCFckPUivuSsot25Nj6HEWMwRmkxkcsEM18o19GPe3MZU8VrXM",
  "key3": "3TQeeYdiEiBRQckHwNYnZzroMZdranyjQyBjUFLhAQ7tW8hcAncP3GhFjF6X2NeP3pWahih2xJfukgLhwwrhVt9P",
  "key4": "2rCqoFvkr77ydCPyBAMupEPvidria5ofqriXxfRdrkXxigyNDw31dt8Vu6HZpfEv5Nzp2CR19bnyJPCy9txBYjou",
  "key5": "3MJpGVcK7oHzYP12t8ZUpFMgCF9jsCWfQtSweDYdbsY2Dp4GtoSSkfxyin591zM2CPpnEB3G9T7Zwkt6SWUp2LZd",
  "key6": "5twswTZW1dZmMyCgJmnYVo6WVUeWAyvZaN6MKVLeUdAUucFHvNJkhsxAxtEoC3YvQ1cktGDFaGJ4KW3gNY8qHyAs",
  "key7": "4QXf15cyLHaEzbARuvMHgP39xsY83daK923LqPyhDwaxjZycwicFmmE55z2JFfDofgj4jgCkmrkxV4W1K5YuuC8c",
  "key8": "5e48AdGa7FMoKyd9mfKVKj7nPy4VSPHQVWuYhmTp5QRtFZhtENaEV1Bzb3dEfQJt8icnSHEjMjk4Z6gecFyBN1BM",
  "key9": "47m3XTTDAqMeUSrr1TbgMEyesjqRCs2qZpvRfaRXiq8CMobzHsuvT8mCX3Njmyj2ZifnheQcyLvaVQH2tczSNgV7",
  "key10": "3YNDm51rxuWbqPViZmTRmECwZJjMYYuep9GPX1yWByTd6xSpLbFERMRr3GwuWzka9RamAVmtgoBMtuf2pgsBMcV2",
  "key11": "4dudmhaoHxnMwWTeEndpAatQe9r5tHzz2ep1BWC4w5c6rE2YK3WcKhg3fAMfmcqZoMFXrFmnz2LCv7X4hwe5yjaa",
  "key12": "5yDXRjaS4UVxGvxeXPAm2C2ne3GnRMvT6ZPeJFbUd2aA44SR4YYfTx6tAdi9KT8UeqWHDW8CFPdL9z7P7Qa8aCM1",
  "key13": "3eXDAZzGRqdb2EZFxsfi3Snq2F2Wr9P2WwfmqCKKaPcNRRmGSvDDdHvdBaZz4A2iHaCzNBoPgAncXMT4L16xJ6mJ",
  "key14": "2c1VCztgLmf42Q6zWffqrWtCKbNdhytyTPv18jcw5quhGeRUjNdbSLZ4juy4jukbxTVh6TGZsiMfwzj26q2vGkWS",
  "key15": "4Dv27pSTj3LD2oAonYd6e6xZeZiejhXz7p77PoRXqv6Mf3riU7e4CivzKwuhE8WriBf9Eqffrp7pokyPTeCK8sE4",
  "key16": "3pudWB6YDHcM4873YkgKjg69xDQzhWsN7CqfNNzP4YEXi8EhivS2Ywzq2PiS7TFzqAgX8NcM7WduUPhgBNd8WooZ",
  "key17": "55msCCMMUupVwtc5Dq4X8KWX14vRwuoi6dwWDLae1FKKdnsMScf9SjfDnNENSwmZNEzaVUVtXi15SVeZxStyWm9Z",
  "key18": "5jvabExbKqw5isfmYg8BUngFmGx647aXm5AHU2TqHJERHf42ib9DXm2H964o4bKdRyi1BRCFqPZqnTtbxDuZWLN2",
  "key19": "54itCPVuESAbVdw7sLqTH9J2yvP9yqqSMR6X457xBSm2kggqFcpTmUxCj5WbHRmJ2k37Vk1o6Q2aR8VRBSFTTN2Q",
  "key20": "63XrbLwufpbmxYKpBRj9cSeRTkpxfBWcw7AHsZeehDYpd9beqxUuGm3u2HGjWjpZLCKfX3vRTL1ZsxbPktpCcyL3",
  "key21": "5cvZi3iAqmU544mpzsjQDeYMS3re3Ytfw5CHJoDzGwZ4uQUXBMKXMkBsMHn9GgfKaEoJTREHH3jLxnYi4N1eBK2W",
  "key22": "4kSsDMuTCnHXmYf5bzMSEfy6QeMsJtwwkGGZ1HQ23dtKvBam1ZxucNrbdWqfSXL5bXYy6PPw5GnN4YV2GMf1Got5",
  "key23": "28iCQ9bmCfADkZnzu5Pvx6EwTrHquSd9gaFQuCP5SSXtV3ER6n2WoUgD2cjAwX2CdYYahpJ7z6TQpuPomeWFZaz2",
  "key24": "4TJei4wLqHGDn3ZgCg716wXihaWfFzC7gNyDsrwrpKCcnZRy2Z3F4Jh8DByy1fcoJkHmmLSxSsinVP7vAnoCPvua",
  "key25": "4Do9TaLdLdXVVdnKQom2aWhkvtXHChHGTdPEatANhQorPKSrVz8Y39mkuEQg1qzKapetXXMWzR7hTK4PakHbxL4P",
  "key26": "4eFU81zYAnNLNh4xibqSncoMYCBv3r6PyrCHAVyZ1mTyHtKBKEPmChbTdQd5jbJewYwXC6CDZr8p5KhE6rdpuyEL",
  "key27": "eiBzceGmgZBaGhZ6roJqABjkSZ2uvVB4wJzCb5K6a1NDc5wJCRHGH6foG2x9p96vdr1P53rWj1firCykx1MhJBY",
  "key28": "4kd56aMCjEZmsHvaGCrzgECipUjt7V7wWFU9yj1qwxo68ucNrKmch71x6wp53BPN5iijhejfPRbuPEDR9ue7mhHi",
  "key29": "FKBXe246PSS6tFY69quY8wnBzZJ5GU7FAo92eeMGcu1Qya7mEy6FLHN4RYbm7qtVijhruVeHZ9SfAN1KceaJFhp",
  "key30": "4n1rPrvVNYpBuMkNG2FScx1yjpdqZBeLMxmyuCDjSE44aPDGceeYxSmH92hGuh4YboTbe5ivnDHHtSvzgkFgQHK7",
  "key31": "qMivQsj1wRtxPT34SjX8RbYqhgWRUTewfHtPkTVixH27mtheEkyAFThoCj26d2YnJQqpY3RWemxnhddQ3WLxX3P",
  "key32": "3yxcHgdCc5T9BCc6YJvoS115G3iz2aRtcTt53YFBHMJQV8pzQi87gyX6S326qGZwYCh5xyUsGA5t9bKT3FkVjkaY",
  "key33": "gfv2zY6Bagk28KNa7UYb6jG88H7GPducqdED9QoTJewnMY29f3V14cNKDsZ7ddKmdhAayafKG8FmxA2EQZHA5mv",
  "key34": "34Ed3a99Hb5hAkGTwpVHUprw9Em81kEdKdVa1gDgucTQNSJ4o13NTLAxWFooFTQfMjKZLSvjHAQSs8c18aaUDfgi",
  "key35": "2eeQAusLZmCtkQuMqai4tNrMMuPFiyWsC68zCphKRzYorWdBto9pixmGnAepMEt1t96f42kKBkHZARXxiAC5jKGb",
  "key36": "3QTLh83X6MtzpsY7xaoAZu2qZph6evvQqFXaGG8zx5BapidPSUZwxuYCd1mt4w5DKRiv2dqNX2DseTKgy1zFVhxf",
  "key37": "5NcHARUfgjsDLzqbLLt92KX7k48UjVyZugkB5d7JSrE55DHVgLfEoHCkUjd9QNBe8YjcyHDFAK4nBnpA5r1WvMXe",
  "key38": "4XYJyjJBpC8pwEtQNXxNaDhwCcxxvFQSgZ21NuBL33oUZTKk7TnJhYSvVRqxKxcgwBcpBsCwNEuRtQLntjTWzSCo",
  "key39": "57TGHkQns1tnzSbtVituF5cd3eYGMqAH6wrJZrxe5qT1fwQyKB675zofHQge8fedT2GLjdxj7U9G3Q5NtY21VnYi",
  "key40": "5zSZkJLU4W54LVmfnQwxg4QQevZfZoVyJW3gjxc6DxG1XaHVZtrMGNzRcx6Z3aWYVVTmqTN4NAToWerM3mjtw2g4",
  "key41": "4o6DXBa4SEPwwUQq3Eqo89BZwUcNxS7ohduGjVFT9gu19NhDYwWZVjxmJ6gJkDLwfpBY1dzSvdTMTXvHt9h4BdHU",
  "key42": "2uUJtGcAKpZWzRS2Yow5mtRCWDpLJMULiSgWtLfFx8WygVLEVPFMNG5vTaDcMWsscAMX6cGobPGzZqZcbxai39o6",
  "key43": "5oxXMvWbaMFuBmopmAY7PRAU5f9rZiFpjXsa1eio2KEpoJLsHEDUnDXrSrTnCX3zHf2mDLdbWYqHiY9yjxt9y7zm",
  "key44": "23s7nCUYTS7FgpbRyhJDyiY45aR5u5iYgkzHK4xi9fsCyev6ZoNKZ1yPFKiJWppuzHma2mt481FzfvyNjJnMp6yt"
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
