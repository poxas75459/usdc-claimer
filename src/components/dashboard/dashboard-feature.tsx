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
    "3BEEQQQxwP1xLXzg9b5r3LJgX7XzfQvA29JxTrjFmckQzyGP6bAETWY4tLH5ofoPrRmqtWyBFpdJiauktQAxNbca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLzJf6c4hVgYbPsAQXTdiyJXSwu1oLUmCthCfvxV4ieUdsfuJsuBM623wqYpxUDZsDpSSm4WvBEdvgxYax5MpgP",
  "key1": "21oYm2wfvS8NEKn9CBhf1xRpSsPmkYGchTmXfRN5itoJeG4GQvKAUCR1E8NfuDfoJZnhqUUZ8kCUTc6cjP79YYPi",
  "key2": "2SLWEMS9u2NSBSzqGztF8x3dzEVKZkDe4R3PBvaotHcMBdj8AiTZXcjW4SFrPeqe7HGizDi4Szkkf61X7LGXv4Vp",
  "key3": "27nvdGDZQjBqdbLXzxKk2kf5Xrp2k3jdqFEEDnYtcmLnph8sG6KsZpLFt2DkdXg9GtAr9PDxyy5RuheEj4fyJkZe",
  "key4": "5m8jW1GeqHfuRSNRqZWL8MgjyswekZFyYf452GVD12wB7NCH8vd5U6QwGNZvCBdA4CDuFFuQuruf63hzBonbwdij",
  "key5": "5GpsYczYf23UFr8vNKBqYNg7UE5otjwbnmEXNauCi2u4pcBbxfcXmvuqsvntHaqN1YRXctkiKN6Kxc1xgtoo1dfo",
  "key6": "3dmroJXvTB6KSmr7AjMQFjrjLrHhenhU9FesKgEuRZFP4qCaH4fPXGwZmqCgqWQXUy6TLBzRHpBpnSwqKZrg1cC2",
  "key7": "3majxfSv7kfnpkW1v5xAbrXNzvQGhUkVgMKH5Xky21LppQ2zv4D94hKL1rB9S7PWUJG9AyBX4BVdh6cPBbS22w4t",
  "key8": "3NtcjPQhs31CCmnD3RxPrKSSD6b7SXRTr85Ngdx6mM1CDmckeGnTsJK7CkkfkkZz2RK6C4wqg9VtAHeKMRzhS2qH",
  "key9": "5KVShV3DGXfyKpNedPdLG1ZZ3dAR9KaZGQrAD2sxwCVmbMbCfpofCzwLvXoFGMdrDFk7p41RLGt7D7UvaJB8emPy",
  "key10": "3w74awyGyZk3Jue8yNydaEfG3BAek1mvJAw1zDiMPNwyxe9s1WyQahcav9LYmN63tQLXAoE5SiTFBFi8wY7JpToE",
  "key11": "2W5H4rVN5yttytbBqp7WmaPk3BrnxK72R114kC5jgfwf5s2JEuzLNHMqMugUtKUYg5niz7TBku7xA4WEcXDSdBJT",
  "key12": "2HjkAweLmUF8LnXpkNA5ihWMFfmhe9P4z5Ef7oA9o1sy1jjSzmQeEXNvQVL2ZfFDHga55ibcSVwXoKVnbeZcqv62",
  "key13": "5HkYZ8jXy2sy1pZdgLrJXLooiSWnJyfbGeez8VYE8UncG6fokkiX88ZAbozaHuDXAYEDtJfjxyA9fHb7ZNVw2V9s",
  "key14": "TLatdENnEhmqv787AkSfryBZscpsa8mc5qGKUz7YNE5X1aCAnQejiPNA65MHHkeAQ6wBFVEhBVDXYTVUYrLzXyc",
  "key15": "43irvha1fbuJ4VZSPhz8kMXdoqVAgLMQYkYrzgbemKSM1c7PBEoYbnWcHJ7gTZeViQgUfyAvPTch8GZe2ei7Wdga",
  "key16": "3QGq99FkxWsog8Fu93pibNgh2HnUJgnEFnG3f1Po4QKZgfc9GV6ry1UKHuUuicxyYsR2YNRPJHXtcBhBHGK5tVDd",
  "key17": "3AnJwGKgB9xfmarogygsRCdyn2KV2bM1HpZbhtobwvibmXX3MkVHaTcewEzEe8MJNj1ezsPYApLh9u5mYNQ5GaaQ",
  "key18": "3co8N2VqVEPrQefymXn1UL94AfVYY3ait1cubkkA5H8WJ8FJndh46JEBenfCmvRC9CdEfA1feMd1azGKucHG29qJ",
  "key19": "4Fy7RY1bywgcwkjwfkJSKzhtAK7wVM4VYv3R6FKMPUZJYGsnSRVFLwscNbYb7WxhPzFwjrEJM6rrLw6iELqYk7Vf",
  "key20": "3qZDG91KeuaEaxVv2T3iHsGjkkfwj3vGFBKbm6YQmDGpkGbAujbpcNxQaKi3xbC73S2vrcMfshMcznTLiEk16yeb",
  "key21": "3z4HpmXE9TQFp6pU6m2YGjJcjXZJHV12WDwgLnzx3DcaMeDTTs7cnBaYGgS9SSnzaZfwJ7eLribCHByS6s46jUm1",
  "key22": "VypmPKjJ9g1VDm3Uz7oDxxqJMdQ2aoRscPJssuNWJ5dH1amMAVvZbDpeC8Sk9tFuatrrvpHJkVFThUJDbtyim2x",
  "key23": "DCsrPdr1MkDtsyqrSyZWQgC8WnibGZ6Fxdb9qdFGRPfiFJwUGfozSzr7Cib8gqoddofbBZCS7n8HzkCgvjih8ub",
  "key24": "667i1dPwEHXY6qfobrg5ei1mvkLPPshKQfFXfnYGcrTfhxcTcCj9sMdJWGkGtetF3e2sQupN8VdfHLNZqxrdAUhT",
  "key25": "4J3TVKdtDhpFSSU3FfaFb27vitBNWA14FAjQguQUYKD3mNMtfgwgQ8cUYsqaG2GNFzsUA4drACybdRK5ugvicBxU",
  "key26": "4x9r11TTaHaW6ismbCCmyYpWaA5J6fj4FkjGAwteVpguzo1a1ZrGGaAnFPwp9yZ1mTvELKdJoqJwLEZzh3dnnBCA",
  "key27": "4EjhjnMNWoWg79454y8EiLt9YJ3Fh4doPqCVnf9YfrNwqKk6rUL9M4irDJjNw4EKaZVBXuyHMuq1yfw8DRLMVSoV",
  "key28": "urq7LPMEhofpzFYgQL1svy6EznNND69qLTS4NAdMH3Hg22XZhLH1xHfFT2reBinPWmxE4iBb2ei8kuy6ouK8yiM",
  "key29": "M2tVnqBWwLZaenHcc1rG6ZL66dtgAUmyGBSNrMLf7YwMYQN7KVzRwPSZdQmST9YngwhfJuGSSWuYA6q5hddJWgq",
  "key30": "3iQHQXh1RcbdTGMyZdXMjQxW2gDYqrUDBf7jAfsbtorxDL9EMs9RpmWgTsALvK1keTu6xwuesGmKeH61xLBUc3XS",
  "key31": "2DWsuyjUufwHqweSWZtkHB9gNZNU58VoQwJHnwHjkY8qZ12W4iq35Du1gxr4UdQd3VFCXqYUB95uvAU6bteaQ9Bn",
  "key32": "2NYaNW7UeRy7P7BfDpoy8uG1BkbZ5axAFazfxggJjRQhbBurDb9aAvUxZkXk5VxDDJ9GnshUHhF9WdTL1u2wbtC3"
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
