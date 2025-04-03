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
    "4DKHRcmafVkvZn6KKQdiX3Bhmc67ugs37T9fSY5H8aUFv9rgXbKnZSzdAbg2kNtKm3jYdPRuQdwrVbawAG3X8NBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZtpryFHzQ2E9FevGrmjkX4MufomBL9NBec8ih6qtsVpddogB7xUXhYLyJMBWemd7AuecwZZ4mPctHQm8gaJMn4p",
  "key1": "5b9tkjkR2oLFJuYthRayAyr2EQp2247rKu7ySfD5iTiBrhw56huvvr88d6XvTCw7eLbqFWRMR1ipfurwQmjd1Jax",
  "key2": "DNP7Nxsd87kUpbXDcgJ1zUGQXsbSaU3ayzKxQqKPuT5oR7PYyjqfwqKqvWs6pyUUdLeKfivJTWXQ5KgXSTpuJKn",
  "key3": "594VRf4JCB8RyEYripJmeugHTd2qyTGU4VRiHX17sZLGqe6iBNF4XpKgYoUePh5WDco57wNq4b5wfyM1ofcG2BSp",
  "key4": "5wY3YW15TZnQCebiXei53HasxqfEe6RedcymK6UYYQwbtZ21rCrhvntxsWoeWLhqHVaTFbGMgaFKQu9z6jPchVBM",
  "key5": "4yEA1afe6cz6rXYdmkpsqa2ozW8se2AtyH1X4Mr3qpnRxppRSKrbKafVuDvSJ95gmLKZczejcXF5KuAWWGfF5mCX",
  "key6": "2y6P6oaKvJCeMbL6RLpMfqq5iKrGvBAgTgbAggjiMWcve121NxEmJK9Ta72LwESM2FmnkLk9We1J5bqEoNe8xpYY",
  "key7": "4q1EwavWiGGFqxyQrVrAz6emHbjaASDx4XWB2FsYrU5uvnCzEjEMVKN8KBEc9YimzyX3kCVutrNsKj92tjgApn8k",
  "key8": "Mkevri5xvEnPZcTjmRt1JfgobHzYuC33LRYt2upU5yzSuaTirZA8yQpAze5fqNcTmDJedP2tKxZbeXViKVaLFHt",
  "key9": "B4rKFLTigZxeMV6usSEXmEEVNmKRLx68918P2iopce6uzHjMLFJAyhU39Xs6FHunLUmBhAXiKS4SowDcweUfbkN",
  "key10": "41eLJhXCGmfwry4vYQBA3KtiDzEL1J1oWjnAT219hrdt5eqo1KWHRZQySizqf9mFABYarE56JpuS5hJAsrXZFYvb",
  "key11": "45SADnVzPNHzdBP5zQN34QHVqTqbdcSEN6bQfDbupZBkjZsAiBAbM59cdHZHR4TkHkw53aiz9QJwhksnAdCh43NE",
  "key12": "Mkf3cFS8JzkhnXR6UgSrfUG4beQ7MGqhCPvQjpfHfmBd2uyztvjaiu3TEF4qzHgqZBsCvQT2yb5qCeY49Vx9v8W",
  "key13": "3M4CZexN3koNvQdsSVrjui88B4n7gYu1z72GHKHAU84jGCRmMvWierBYZphRpNV1vFEbCTxFRh5QLx417JYTLVjf",
  "key14": "25mh9LpWAxgU8ayrzZnQGQckfYQE3cQTYomv134B7t7HoRc47dbQHKGGqx3ehNgxj6sDXimwM9w7o5Z2UQqpsPs5",
  "key15": "2NsPgzkZiemvPhM99edep4e8LGYptqywjd8q8u2hKhjGTqeHZptZKZSEjQjbmjbX5FyGgMuZoziUUQkR9BZrkFA3",
  "key16": "5RxV8AstEPBtkR5jjFfx5GsVeL3mJxwpq71beNFcQRs7nAdY5QwX94agrEZetpGp14wjHAzDiBiojSJAFfMNegt4",
  "key17": "KQakDP53ppmUjznBi4jL7wo1SX9QxBwikucxpcmmYq9JRfsseokV55YNdX9kKYSKfTcYhY57vAcn4cGQzUkBuy8",
  "key18": "3UCfn7p3QaBEvc7aYjh6kcWtRUav7P3ZzoP3DzfcYWQs61z4oATMuEAyfQohaqtR7YoxhbMTsXYbANyGdAVQ7hca",
  "key19": "6ZrSaoYopVrJLCphC8WdTJ7JoNPF6pAvXiL1iXnCAwB9NQ1FhxNDP6jqa9tfYzJ35uCoL1NGm1Cab73bc6aqNSQ",
  "key20": "43rfJ2Fi9G3RiL6urmLStyDWCr2a7RwdGqeZzqadH3yVhdqbg7qWrAjb3jjdqrQuxsAphB6VKHxCruUPgr3Z7Tsj",
  "key21": "4TDmqnGUdsQ44FjHy5uKoR1TnTr3QS33RBTjUqH2ggrYb1CDqP7WLYLeLrRrmK7CXYwGQrrFz87fUF7T7mZvRfrp",
  "key22": "2ivLiwzh3FQ1buiiQnoAGbpBXCQGE4RT7ijYHTGWuK3nroRzuseebbdfzbMkbPhMCTC6xv1W8awLv46wrYTtaA5k",
  "key23": "TnXoXPWjnHpVJUGVreC8AfPDVEHEe4paLuwQ3bfadzb6LknifFsVF2c1VAs8LXh8GYwXdfGxqwmwTgzUK2ZS1VW",
  "key24": "4df6d9qE3H6nkNum1qSzjGqhZycjUSPvcvC6LzqdPv9afp1Q4PgxhtHNo2z4F9Qu8eu3f4acKRpamGavNFsqAkUN",
  "key25": "2huMk7xkAaxWa1YxZDisbjKY7FDvsmdUuaXN1Lb3PvnM7uwCakRsxZQKg6oZXqMDgKBe8p8zzMZTnpsjeV9RedAu",
  "key26": "5Yi4NKJyoGXYA9xepnYR9jyxELNzd9LM6FKRbaVk8yX18MfT2o6Wzs19QE8qy664nqWeyb3AEV8G5Yx33CzV6qJN",
  "key27": "5wNmvT2VooHJNnQXrXM4Hhdge7zaCcrbGehzKSXCBreTmFqPHXgfSbhS8xWQvipCtjUBmxoJ1HUbb2CBpm7CSfKa",
  "key28": "3oZH8ADKTCjoxS8GsZw8REKwxJW61tQswR6e8961YqRaLKmaHzhaYqLE84uymnFFFGetPJDivbYpbDnUXogXEwcL",
  "key29": "2uvfwJHcPDnRDiDhHrVZX7V6rXTcRh575tYfejqWt3PbXnwe3Mg4wBJYWhVDQ65rMyNt73rRYKvhsr5mHM2sQrNg",
  "key30": "2ebJRd1WMoeyMD9vgdQCRBjQ86cocXu2162JWAascF9g2K5ujvgBSNuNkdL4KLt3UNXQNcBjE1PMRkXAE3RGZWBG",
  "key31": "3m6oNRhFUywaJ6zR5PrcSxqm5Tu7zgSruryUdef9qxcJbaWoSdDhssZtriRmgxqs21jknMZxwpFE5BhKR39P5q5j",
  "key32": "39z6csZ4tag8UvBbMKD9LPqFEzeRtTxb6XUzeMKfa61H4UNGvK5vmQ9SgsiBvQViJ7Bpq9Jg9aKUCxF41WRKjcsS",
  "key33": "2dEwpPFL5j6xcSf4Yi3dgXxrGVt6C39m7rDANh2BKFET17kJMNyQ9ktBGPst7t6c9o9UK8cbAFapnafLWjnsuL59",
  "key34": "64FWjEXLKKduyUc6SM1q2qVGyPTe8t4UZ4GzxgptiaikYuaLoir2UjawNDoFzMfkVUwopXbH5mLtjrppV2QGGyBr",
  "key35": "2CfLomhXjpMV8x4t31dvx6hNzh5pb6xmbiDJe4k8WKZg8twMGR7fb6L2fXoBL86Vz4FCpQpZHDx7nWzaNs5iUa9b",
  "key36": "4eWDN67xDpriUgN6Nj5Dgox41C8ZxMs1pd6gNppgUjikQQWxp9RKy1KLoeTbMpkAt58k6JyGGYPJVfE1KokZAcZr",
  "key37": "2dwUzdtpJ1GeKVzedyRhT4seje2VezQ9UHtHWZz8eiDa76a2f2hWtT5CzQdpWRNiC73nHkYo4g2qt9TvXCtkMuPP",
  "key38": "5gC2seB55sAQ4Yn3LgRRyT4AcMzNFJV4hZXGspk1xZSPsagoJWN9ECwNw4YAcizjRvmEGQj6msDqpPKW3SkFtxrz",
  "key39": "3WgWV1c4UxfAzqKrkNzrAZQVCU7G3jc4R8rkYb4VJWtyf261F9nrwwNJP2uEMN5F6V2RahkMTF6xBtddYtbhLcEU",
  "key40": "63NHFWd2uCLHv6mQrhbtjaxR1AVk5zbkVsx9WLBNssJh4peEDxbuzaCHnMKod4tD7VJuCGsuzAkTAJ3rAmYMPGsD",
  "key41": "2P2rsThFMcJ7dt5143zk58mTE5AtK3sJo9TMWoB6r6LJwuUSXjeBSofWA9iZC5X5YE8CtQsFR61RKbVc9ogYAN3d",
  "key42": "2RYsgzF952joLvRWdDdCDUcDL18gRKxD4jg1TPrZHwXFYjQWw1BRcGACQSc7GsqPXsUnDixqLJDofgH96z9jgm9N",
  "key43": "5pDvdjXAYWMPu5ExYYvsSanw3gaz2wB4twNTULzNUzZpUfsJsSSoT4VW44syfeasr3m5Grni4dx6exCM6P42dDPM",
  "key44": "3gUW7KMXzLeMxsf2mC89ETN7gQiVCwn9HPC8211AZdGztNvewrNyjK1sByV5ubVq645WjNDeXqmFK4G2XzC6yid7"
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
