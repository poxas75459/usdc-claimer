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
    "3GdLEPVxuB8pZ4RVx1X594dQeG29fsWfnc8LcQ8ywzYdLPgRr2fPBUEyAkqs4zzqEWqeRuxeAbs82FZpnbhrMU87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmjpmfusvzteYAz3cULDyXrBy21aFLk8LT16RCVJKxYFpbzxXL4qFJJB5XmVHJEMciBM27PP5uEVsNXifkqdR7Z",
  "key1": "3xh2BBcVGNSLYZPVhtZmmyFNx4cjPZRYcE4rDPt7bmHGyMffvT5GjZt7yF9iDis85ruTKd87QeSsFnjginmud3b5",
  "key2": "3EMJmESdGsHKrbk11enrQNzGNNLzvQkwtp2ZS9LGkjjR3bNK7eeqEtwUDMH3oQH2s9SQ7nhdX6StPyeft9DQNscu",
  "key3": "3zc6DGboSC5GT44UDPDPGjcoQ7C1EpwLabswaGuDxpbReTcuZZ2PiC2VVFpedRNfUcQ33vWsDEFqAipg2gK23Yuo",
  "key4": "5cguLYytwXHCZJev1V1Lm7Yzg253knc7jjB4W7qEb7zRWVjZbHrat1BAeNXwD8rNUjcuCEqWWU5dzKzXVYCoGbKS",
  "key5": "5gShvkdRUZNkF5xEW6yaA3ZK99aNbVjAXwM2YwqYhRS9CBNQvJFGJYMAbP54ptkCLJUaayZtS1r2RNznFqmQLjJH",
  "key6": "3Wxuzqyoc3UddqUio78x3dUNCtfRjFx2ivyeL73YKg7xS92C8vQGKVANaKUSHhH4TdjJpso2qweeVQtMqnJ79PHo",
  "key7": "2TMXZJKQBxPdAXHzDWLRqD4efq5jJMdi3KaDkre6HkyY9AuPKkxZG43UWtYpTEoR7Tmc6CsuSmHqifQkdjvuZCLN",
  "key8": "3HrxSsvjFSUgBojL9yASXnwo5Sex49DDduNHD9ieE8gBeZsvYxaqTDAVGeVahE65bDc9joa8jTn9w8Hs36CNs5mk",
  "key9": "4j1NtBMcXR2dM2LLRymfbMGe71DFRY9vEDnjssSe5ribanoTbYJZvPGHsY7kNVqVuyVqD3chvEvJTTk4xLubJL6q",
  "key10": "3Yeusrfn91jCYgctjLBqkM8xahbsyVA8JyBeCzKDpXZzGB76bdpvJsLHaY1qjvfhjUrLbDRuCQYFsuz5Y9DL9Lod",
  "key11": "2oeMueXczvHdhJ2xPQ7J9z887BcQi3Df6aHK1pfZFWZMzSxpencczCeAZGSweS9gGb24gTF8mzFFLbVqTD2s5on",
  "key12": "cn2B6Sob7jsqN1mnCrpUd463YKsDHXpnTrw6LpaghJKZGuxB5ZMcXqRDv5vGb9GQYDGpHqrnyHFC98ouTobvZqm",
  "key13": "4utexAcj53GXFhw9PnoBHzEdM7i4fs9zi6vfFFHgdcBBFqoxrGz1ffkn2C8n7vXskZo2c7Vgq2xJiuWMx2gRvNaQ",
  "key14": "4bWFgNxAhMhYF3Q31TgZVzjLM6FcUQ6mRSp2DuKtKea9A5wVa2kLLihjYKTSVnsyM7JMFKmedoPx3puGJbwPmmH1",
  "key15": "498PksF5fEfHv7WjhYWqQgMJwH7odg7G3NvH57VocYdjzsT8S8SMYes1TSvBjB2ihq4UyMCs8ZzyczH4RDbGV8HB",
  "key16": "2vR9CaFbFY3raKxaEnU5DL2LPWjRNbw7Hh3GMuBCc93zAhnEfDwbwoRxyVnJmdnheLiZC2tVcr29FV2VpAZ2BMrS",
  "key17": "5xqZUq5RaVAMeBBUw43xZ5KS21AaVoieyQqPRvdsct9z1hAp4J1v6kF9rMxLgQg1Rwu1H2eTHKdX3tM3Uo1rJdxU",
  "key18": "vquqZJSTt2LKeDnfHseQwfZoWuQ3J6AVWZnALFqkgbhH8krbmLtFipHqETKhvr7bH4b9HFVfoqsWpxLR1J2bEuD",
  "key19": "3awrQh7pyogsSqv15U82KxEi52aAKsjFdfV2DvUkrJkZVvPxFUvfs1m8bDUPJajvjLbHPWv4HoqexsMD1KMsXM1D",
  "key20": "5h6drRvsVouBy6bawnwFTNSv2YWMAKcD3Dw3MXWSeL22rFpDLGyzPpazBxdyNXhzbHGWN9xjAKUCAVwbzW6hqaqR",
  "key21": "3eG66CYctk4ZryxMATqYpLofnYHP4BXYWqCkFoE2JDEveqzVaKrke29FFCJ2rQXjAN7jtfpQN2JGTgouvU2hM4rw",
  "key22": "8ADyorLHbW1xDssAisxtEihrE1gLm2uPtx6Z3dKCecLWabTBWVUuBeNQh6U2x5BrxqQgs54aKHbKpq3RXiVk6Um",
  "key23": "2mHChYGFXA2A6Rmj3gpsEjjs4m4Lq6X4WkPRbjVue8CpFnzgkFVKYtrdwJBrdzGccioWA52KzAzEwbosG6D2UVC4",
  "key24": "6TyRwYJ6YgAkPX5k1VTryfPsVBZhcVBXVb5UdEp6qkw8riLBa3pBBUEpwgiemKpcjXCp1b6C8UFmRT5VWYXuVQF",
  "key25": "5uU2AK5mBwzj8KTd4PWpwk4BvPe2YpHkHQbbCgguCQjCXLAEMwVEJtdhpWNN1bSyiEsGKGrLmSupfvg9CZAraZUT",
  "key26": "537Sxjji4oA7G3CEBJJdbociyBFG5VixZfKgBBBYH3o5CBKNPqcxNYZNX2S2TiXQnJEjYGEnoRkJSF22cNWSJUMv",
  "key27": "3MugrM62oq5Mr5C81BGZKvNkJrMXhdvg2UriWREgTRJ4RN29KeZiLyaPf728S73fEfwGwyL4JMqvo4FXEgQrXGUt",
  "key28": "624f8Ra31nYWUE6eMkNbcUnm6AxUaskRib7kzCWHjsArDkrJoduzGtnWhynmHatE6oevx6oUbpfAYHLsURuoVHGg",
  "key29": "1ZyqnzWgY8wdB4RL7oNBKSHeLdYkcSwfPGYuSN3TUSuWiSQwXxA5U5nNLVsLvHxm6DgephnKdQCj1N2ihEbHZYU",
  "key30": "57W9wfhUc7sm3rnEsEG3AtYLvfzbQmzPuZNomAfCsX7f8S7vZw1YKrXoJzj7uRg1kEcTXvPvDQeK3MKJ4KY1arZH",
  "key31": "63gtTbpxmg5jxn6u4zzfWRXfF7H1USh1qXi6FDSPqeackXuBHERsZo7fvrrtixMpa4qYJmN3ejNBEgNP7zcfnzjv"
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
