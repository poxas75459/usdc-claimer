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
    "543Y3GXSay5DWJmWE3LCc5bhZbESNYGwRDCReu8fZq6vrKD9JR5PWYvzRbuxKUWeV41D5QxHiqCaMqdEkeyeBPmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pGnAYvnWw6TvbYwmadPpjY8iHGXsMHP7PyfgbqohM52Y9fditqR9dDWH2FiCdLBUeXbYJ1M3zjd9V96FqwVFgG",
  "key1": "3ivJzCXtaXs51XH2wJutHhHphPhmLhGYEkMWDpxw58p2ok1FKrgH2KMm45NnQztMiwRVrWGoyMgEY3cNbZNn7VUh",
  "key2": "2ZbqHkFre2F8b7LNrQ99QbX6NGakU17AP8RcanAk8G2AcEMjuF1F8zn6FLoTpqP6LwA5ZRqX3HPyQEuMGtqwJamT",
  "key3": "S3L6hUswZfipcRbHWfqk6EsN5HCnr2D1Bx2ScKKBm3tb2ttoJCL8inb9A9XP7asy7T47k2cDKEB5tQVbrnNSCCR",
  "key4": "oU1vg3ERHiUTbogH3TYNUZmjENZ6W7CYSeKb2AEpmX96fbXXPFprZkERG5xnzMEv1PHMpZu1PghjURvQS1TrJNh",
  "key5": "56nch5RWSfkkp4jANBddFxXYgsa9F4N8hxEWMjQ71haHrGKEr11EpzG9DRU1CGtPgcsdM16kFAkSBQqJnns2N6y3",
  "key6": "4XfrUEZtDxgYNncag1vrJqV3e1nbiFft1ZR2V6bb3q52LcgidrnyQcMAV8wW2dKaNz88TQtKMYqgqJShSRyiupt",
  "key7": "4QXuH5QSLj3XrKQ7KKNgdBJHwYpC8GnAECd3PqXx8o7VScMhE4TWUgpQ16bCppnw9XP5A5bECHk4B6a6rJbikRwM",
  "key8": "3tevjBPedaM6V1Knsyv9ekAhWosegwpPZc4DAxoZMvCF1LuMcngUrZPkJV4iwjuZEoXvwvVpTUE3uAA8RFXaNhB6",
  "key9": "5HmVpbS4ofsJGTRK31NgYd4L25AGzGdTwWuWCUDabLq96X9nTNB1S6CpWqUkTjr5BhFJVh7CbWMswR7ocfEoTxgK",
  "key10": "42ppXyNZ7cV6tNv63VSBwWRNAtHTV6wVeaHtVuXjQXJDGERJyG6mxYyVhh4J7AcUd8qw5HXwSNFKCULT8VvWn2ru",
  "key11": "2a2padYuZ3if29TG5D4nJEBesRmev8e6SmYrd8xBs3khTYDDbuZGBZt7UE8nEMtfe63D285LhSWNaqhPkQsjMdg6",
  "key12": "2ZEBKNtNM1fjscYeuio6T2cbVQdj5U2qHoPGz93RBXLhCqmbri45i2k5XAZaTFyVaeKrzK4V4CcVa7f9zyWY1b2e",
  "key13": "3xeL6SHqdr16GMrL9k3zg4GstcyjtW2MpfMfAWnCdqa8PJT3KC24AT7R4NtSW4Nd4uWBHmQci8wUf9c7Jw5E3725",
  "key14": "rxwx5D8vfQEazyfKc5nX39FGooGZnw4ybsTJiCVGRwXJahDjFDrXeNqn5tLwwQYsyiWLmRCnkPoHXszrf9z12e3",
  "key15": "3NPHZoyGV6EGZsLSuigoGzNE5JhrbY8heom75VEFrFbVfLxprpMK8PLKcko1SUhSnFVFQ6LDenqvMQMtBMCyi9yP",
  "key16": "53rmeSRjrfDFVCTPoWfbvzw3TfjKrhaZtskQgjCkNCrNtf91Ui61jP3LdxE5ruMto8dcVzMeYAs24b4RCAgEss32",
  "key17": "2GtYY2ac9CVFg76xvCrtdQ7K1rFWvwgT33muKL57x1GvpxFDYiGbmSkymJJkGiDL5kLr3GDC5GS3jk7WYFhf3X8i",
  "key18": "f6U35HkXqtygiab16gY7fJ41EuEMzbjicJad4ScApyCRFza4FWWEbdxoc9nuRDig2jgrErXHGJ2pHBNJ5ysnzZw",
  "key19": "2Sa1eCn6Z2g7MmEBAHtA7NNDAVZHHg6vMeyGsPyMLnwHsa1hhZgoV82kAvU3SepTp38nhAaxdWAwpYKAKFxe81aJ",
  "key20": "4Eq7FsiRMQCnTFEVGZJ4VkY8Ktp2kQHMdN9EmPS6ueiApLq2isnXyqKEJoKD5suGEj4iAivTmppRvGVFAzSJeKvb",
  "key21": "2KBkiNiYfHxSyhuxyL1U8HPoye5CpKjqyEwxo6AThyXUN9XF4cCtYYGC82V7cq6w75QKLQ4pVNvVbCSnptWV9tdv",
  "key22": "3JNFNZDgc4QFoN51BWqKPVW6UQJwdDpBrXRTiK6nKJrxBaoUdMnzQ45WSQAGCxNmkYfJbSd38HLUZsCuNVdZHPnf",
  "key23": "2DKjvQueDVCuXPucbsKcyUDznZk4NzXP3kcDo7VM7rh1woYeZfkq3NrcWHJ2iE85ySzLuDF5bWBGWLABSvkgLMi2",
  "key24": "3X2kgGcagjrVA9oya3obv2x6uYwLHEN27zwFfWgoDrUfHnCFsszR9VKM5zmy9sVH28oh2YwN7vEXFNrwRt6mrft",
  "key25": "2pHVC28XFZVEYaBXGzY48XpRiNjTD9rwKjGrujW3hAHoXMquXFFZ6PqMHvMmUGa86CtsBmtxtdGktykDJH7nfFu",
  "key26": "64t4h6P347aXWNXK3AWQ4q4WvfQ2PuDfsHFzoc2ebwo7DSvqzuAKA9SugGmwcsqDAvrAJDARhQ9VoBTUhL1dgRBC",
  "key27": "rVfQuXi2SAzt9Da7LqGqsirfvGDubiy68f6Lo8nFZJgcndMzeeRbeAzTCGi5T4o9iESib4D7Nx5VaGv1Ek3J7Dc",
  "key28": "4cv1J6c8eEGKQPgHZog5F9EvtfqdY6Xr9E2f9MAfHRnSSyj41WBFdXfknB7YRAQeBb7wAFUc4mrQb8dqJn5KdB4x",
  "key29": "3PkgU6CWqVbqSc25in8ML3kx3LH6BG5AjWHb37H9XZwcm2K4kt1WA64ZKHoX3V6RKnNosbpRfXGp19FLV1aKX2GE",
  "key30": "3x2ZvowtLDjuGJjeEMy8XXGA5PfshdM9qQdnrZAxHPkXomSe6TMwkSA6apTiPpLjyTHH4Jiz6WwyBKaVT6bpx814",
  "key31": "3zYZmn5xZXbberBSuaZbYKPhmASU5AX4GFUK3Q44vc9a4eDS1QcaGbJHQw37ivF4Bh4c5jtsu9AaPDWUXgCqQAYK",
  "key32": "3VEdMEwbRaaY3fQf7wUnmb54Ye68aKqQWxLVrFiNZFJUa5DtwQ1BSPxUhP1tcSVNp2XWD3xR5onafPHkj7vSH3an",
  "key33": "5DGDZqXUiv3Jok1VPy9JAq9M1aXw38iiVRbixtKmJnB3eK2KUrDB34PwBZEAFrs9uweis7prjZaMRPBciHgMvWES"
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
