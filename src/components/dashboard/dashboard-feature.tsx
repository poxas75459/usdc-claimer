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
    "5XsS1bJQp6aQiEcLx49GZMkNcZrjfhSJMtzdAtJ2w5zM5pAHLCTnK2zvJpbeVESZKp4fQimdpWDJSKtmJRnw7w1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ah1s13DrQDfYuGqSDT8svFEg6XdWtSoXbqF3oK6RvA5PRrrJpicAbU6uZ7Kejk6tSeYoLHuQrdU7iPQ8ZAuAEjW",
  "key1": "cWuAUGDbYqHxaKVFuLsLe6mGehreS489GfSBQVkun2rRo8oMbcKWzenB8Q8bRZCrYcnBoMxECK2kFsSqm2TSbJF",
  "key2": "rD3HgSFy3C7sWxR3bFVAtbRV72mvpyxyzaNoCJBtzfjHYJ1EoJWYgQ1WaQvvcPFERRFeJr7oLReKpo8bQyHBr8n",
  "key3": "2TjsFK6ATkBun6skjEcPBCQakygVxd2DhhMtY6M3p8UKaQnfkcJdT1LJCC76nbNLfBbrYMvuBk6Qzfz9V7yo9AXn",
  "key4": "48eiutVyvdsEEEYHj6gaANdLQyETQvs74qm6dD5XsFLCSDjjvXc9UUwS1LaWQBoryXMZ9Njx1LhbBZBksuUwXwRQ",
  "key5": "2svrz2bZSyXNkWSLKSBqtnFKb17njE4btFgoT8ESGvVRPH2AWzyHVdtmyJwTPWRS6ffuWXrzZwkuxKrJ9veESX5J",
  "key6": "RXHpESYEzZyrJzuqVzgRfmErwzv6xtrNjpaZDY3XBJ3fpJ7BqTGQTB3nLZsMxF4cNacVsCDMUEV5bNR3jss6gst",
  "key7": "5dL8jvJrehYw1WvFyyaw4Wq8kdiMMwLfdqJPRqNtnHGXzvtn7XEkwRs9beaNy1sidkXuN36JqzdKvmbrXYNXyDPa",
  "key8": "AUq86qHTyJL1bJ39D46GJh2mhc7NTrhuuLJ8AxEq6PfAZueeFDHcqyTXxwWTfpousQmcEgXT8kkToQSQEmtvzoj",
  "key9": "3v93RzPw4P7piL6ioqsZRqxMJJwt8pAvVvAx6TKCjEeMFgzFsNZSrAgLj74NDfHSzf493qX9jYvb9BXhZ2pcfQxC",
  "key10": "A8Dxk1GscE84imF4utnYgZxEHoWqXtuUGqC84f7trw77KUhCk6jT3tJoCEJjHWCCtofBfwj6K3k1v1TusPS2Ts6",
  "key11": "4GkEphkwouJ7DYcuj3xqh7nWcje26yXhTKZgtv34nxgS8cxujSc5ArCQh7H6Vs6gJw8m2MLt3XyRKpxv7NDejMPZ",
  "key12": "3Bu7axEctUV9juGgVdukNMrXXbbx8xDa7AFMdqTsELZDYs5Vheb5pGyEWGAHCt8vDjwbcm85rQyxqALukhTHx1BQ",
  "key13": "8By6dMwTx1AU1kNxH3NAeqh3CL847R5VZR9RZjqyaFhwguAvTGS4CLodzoRx7GMhZP8xwydc5VZA4TKtuSu7Xpm",
  "key14": "2vvnWoocCoWEkzpdHRBeh26SBQSBAwH8Zv7C6Xf76P5hdSknyp3urpFP1bxMkFwts2ZVRuZfa9KMT5iufMx1vkyC",
  "key15": "5aEyMpJWmCHR8xpe9wTccLB8wrZsrs9PBmVSo6JsMPYqknfw92cu6shymPWigTRiuHyjFq4nxD1XYA6t5vQgms1g",
  "key16": "4FmuRWvpwj4h4yAUPCRvcbftx1PCooaWdqYZi54Jk3C5jnR5urX2n9GNHacHDoDZL1bSrvT3hUmf1ccXwVan6KHd",
  "key17": "4qT6mSpHEQqAWV58XztDAwxhQkg6aS68zdgJGEVa2VpbpPdsXyd75zJnnXVQci49DFHwxnreDEqJdpsY6nRerXeV",
  "key18": "cxx2JAwV1MqVNkLXW1exQkpY7mko9DaMgQ8ecr3d15GKrH5wDrmnTeXxujDj8Qe5WDxEFoSqiJV8YcGMw8G3Jhu",
  "key19": "4SBuxCV18eerdRWEXJn9MkC3M5GhDEKDa5ua42ALMjZLPe7xQvde98DpGze6HdhLg63X3GibxrFsGDmWj5xAnoq",
  "key20": "54ioAYDqFbLr1YQZ2vKhQDzP2Q3P8YKw8nNe8cysSaSjzGrYqYe2aSVfyQP9xEZnuYVqXxGr6tD4pzrwfmMsA4d",
  "key21": "4yjViZ7e36LuMNk45kLZpkrtzcZSAciziMRdmQqKdXXFfQYXZJTCuMjv7RW68Vsp4DFD9ixWwKvTeNxkjHtMp7dF",
  "key22": "4sXHoZ9tsrSQNw5VB5qrE5WwByayvAjXSmz4Z5cS7ECkXRh2h48JsLhxd6XyYniwsggTcTxbJU6jE88xd4hffnu2",
  "key23": "bXphKDBWYMVJw248cjLwGTSYxLyCUDNGBRQ7cVvkXvQsxo6tV6WX6FyjkVDCtMdzrtKHEvM7tatD9vZuwvhbeij",
  "key24": "3eKuKhekw3V4A85kcYvFgwFQJyR5BsPSwAvS2ccvrXHswK7Lrj1frV7HDKGYQjLVyc9FjohiUgvpv5qxAPBXUvyD",
  "key25": "4ieyQp8arAMZhzF6SLnNDAaD2YfEAddYHfZf9xnz6EG6vkfzBgHgVSXPkXoR3vHF6jM4ebBGk2tGNJsLiaTZN78J",
  "key26": "NK1qDNSsWX5qgAgDtKtU1VYpN1TYdnQFccV5kVU66FLH3HGJe68tzCjWLFxNbVE5ekEEN1zGTFzM51nA83BpTR7",
  "key27": "65gVxminNKxTJHvqQfur5LGbyC1fw8E3zn5TdXen4tBk36GvxgpY2s2n56CsXM737sv8YdzM8hPmeHQEcxogXHqv",
  "key28": "2FevhD9zh95srBeMUMTGjhcgEu2NsEXGkdQozCJ5hdV14kHCyXbMuqkAQTfeB9467iaAHRgzcLaDBWTgadZgHjc3",
  "key29": "rQjNQCTKcfT9n8yL7jQsxGgxEW4EMBzwzhwA7HsmgPKTYDPeQzRVKzvKMyRtjr8m78zk3eSdcfaGKDZXkd7rUJx",
  "key30": "2rYNBH9vhzGhnkgZx5sYmqdTv1V4DyBEUXthUrfoyRthW32h5py38WuAgebxHrcqGGF6BVwggJRTrWrBE8f7uxCf",
  "key31": "4JfVtiajxXDfY8nd2G3utueP5EsYk9XWj8nqWJobdxdyeMEeMGDXfSLVxH6C937Kv3shUdqLf5VFZY4eks7VDLwu",
  "key32": "4VpiaqL1isoKyNA9Y6YDPSkjoF8YMdskf4Sadfh1krmYkDeMGcTjU5QzEdJz1QwexNSg2j9bwxaaA4HohPnUgtSb",
  "key33": "5xXgQojJdNXC9MFYrkDdKwZ2BReDxHHtUUhxgSemxaKwJ3G4vXf7v9prpP1k8Ybg7z9zL5o9nvuCNX38v2JrJCZe",
  "key34": "3USTUX2zzReHJ2XmKKydFWpnJH1WUYzCvyXmPiK7oth38W2pnhW86exWzWn1bbi4bcXXxB9fctGhV4ZxkKVjmCzX",
  "key35": "4HUyvdtg18wZMduyBxUy2PUZ7KrfimvNUgK6pxnwCFibQoiSpvwpDTbhS3m18nJx8hueJih4JzdfGFABjPXmJh3f",
  "key36": "4nAG8f5ZZsmCoGg48cDQFAhxzajHGefS9ZvyhmizWcT1xGbfSunMfegwKXABWErvpvCvCNy15BdXeZS1eN2wTRVX",
  "key37": "2y3ucqfEyYTbQ4z4NjHGtzAPpKHevELhjGFAvfcbmod74AqACikxgs19hBhjjqEZtaxB64zCtz1CRVZno6yssGd6",
  "key38": "2rB8YcwoE9r8Yv9g6uhjMi2KpTWrrVU21dXqW54in4T7275hpqjKxB3JFH2ue5ThJZbR7yohPW8tuRPpv43ZjTbs",
  "key39": "5LPdkpZvaCNVtVDPMPz9K1WDjFHHtLtxHH9ipmKgee6FuGP47yaj6hAe6Hdha5Kf9Krcz6nhDxp1DegjRccLxow7"
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
