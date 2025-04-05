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
    "24kwNp7Z8AqBZzY32cb58UD7QoEdWDkS2DfUMNj7HrzZ3sJpcmEchMHEUQ2gxk5RKb94LFR7BsrsD9L1Emjfguhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZLUo56cBmDNpgzcPajjgV6FcatrLQsK3X2p8zEXq7kYGj989w1TSFYKK3ycQzR1LELL6sxcvRChmWv4V8AcoAL",
  "key1": "FHZqU5JeB9Z5JLG8NU8pB3soUojmd3CnVZEjCbue8Pz66tsH2qM6yamsEmMr5GwC9UpNub9Rbpi7ngro3aiLuWM",
  "key2": "5znhZXKJD1tsMWdkM7RnQPQptmuzXf7RWRAPUXfECpF47aTfRa2DqVG2UnxWkeiSEFeNBBQDud9ZsS7ZxGion85s",
  "key3": "2PV6Tb2Np1GA4SUhhXoxcqnJwaHpaWUcLcmqgmxn8EL6jYYUQcMv6WbbGdb6YDXTrACR3Tvs34PKYjGUwfqtUgMg",
  "key4": "2d74c8S5xEzpVR5etT3a8gcroh179UZPWmHqG2rmrWokHJWgshkNFxYbeFn66Ra1TCz15DkGA4eEVy68WJWiwa2j",
  "key5": "5ciV274zt5sUGqVpv7JqUPqgHC5PsxTugYZ7CVJrqbzSqnD1kB3NNHFHHNSeKSP67MRDbSkhTpBr4rShWroGJym9",
  "key6": "2GJjCWf8cPcsgbcVUUTG4S79NPimffMWKrsFijc8E7NaDKU8vqJMXjQYyxsAywxTgtaz1f8z3NyTDeLjViVtwemt",
  "key7": "NzmoQhB84fGVPHLbvcRQbAp19ectgdtgtLzApz7newcyUFZ8LsfR4L7cthcnWrMgr6uK2Q1ZZK7Ur9LsFRd1rK2",
  "key8": "4Lu2gfALFkJ12cPMkiduNSzR1Fjo7zco4JYD8DQX79V9g2zxd6n8Ge33eSGFL6tv9BuvSh9NdoYxhhXh7dxrQrpj",
  "key9": "41U3t1W1yqVCKGkYFenp9Nq9SaTsWFph2NbNxV6pwk9ui6xMPXyv3Vgs5HBzEZb7G5HWsTyNVLJvYTnQMZo9RHbX",
  "key10": "58ptQJUYXuqWcsE75SRunsjYcozTgUcmyPhWTeKwkBKeKn4ymko3BeHh9nrtsYpxR8tMchDf1R4SgpUJTkMJCS7o",
  "key11": "4tyCe58MUZaq2fehNibEuGu71oHTHGu4aYX9tR1sMPpAbyjH8Boej8p7CYVwhBvaCmxTe8JXwseqCtVc6fLdTk5v",
  "key12": "2MJ7por4ReCjJ6Yv6C6g9KSya3EgnoAPZWHF6p3qqyJp2QcxtXRYkjFEtDfETVRKkbkFiMWqVwHAuFueyotLaeQV",
  "key13": "56fphNMoNNi39H9EinR4km3aVMK9sgAV5oPH5brPbDdyR4VJ2jbwp4M9DpKGARcyXAt9hMTcbb2LmTh7E9L72GJv",
  "key14": "46EB4CfkxvW1STSxVzqq99VtYQyVJvExPaCnP4oJT4Mo2mxRseCrpKE3FXmzf1ezBzoRczJv5x7PEQcVi4hYo2TF",
  "key15": "4dJ1cTjGQY7YbwpXiXDhv5e525aeZCyR6LzMcqTRQ6TtoYkgucDGZzD7sEERNsGgQPoZ4LkegScVLqkhHq3GP3D5",
  "key16": "48aZidEZWRttNCNooSeexb8HUvRGda3jGFXSDjG1uDLtkfQ8Fk8FgRNuV3epcXg95PgdktzNnzjJM4nhgG2eMGAU",
  "key17": "3N8MaDwPKf7wV4HN4DkSJW6GYjhM4JKHszsp4osN5Zqba9vRPA3VS6ReQSm3yg3wqwXTYFHbBwGsZqAk5wkncPQp",
  "key18": "4rTbmXdQ4Bt8jSUvszP67j5XCdTvFXNnX3QW8dH44LesMe4Nip4iNhxt5FR8Uts18gTxsGaq7tTrru9NjqtS3Z1g",
  "key19": "2Hu2o5Vk4cmE6FsADiZAJwKQfXNUfBamZb48ULq1yYiovYspjuqPdgxs3rAftewxn7aph5GU5wHUEj4z6iTsDb8w",
  "key20": "52DekDiUXt2XzXfURGAaj6ZSsg359fskGmYpYA49RuxkL7SCwfK77kk4zeMyktoQeuv8xue5QgJH587VPzZ7GHFF",
  "key21": "2ixzg9kJXxZdMzdmKV6zbgrpsnEgXCCUWwgp43w36BW38xjiGcSR33sXqpJYDPDL1o61PAhkq3NVKkva2Z8wKH6U",
  "key22": "3u9iVve8ZfaJewCo8oPnMmXRnEVX3jDZxJKj1D5mw8BiDEUGQ4BhDKZidmNQHpZQQkiZNGHs9xenocfsHXPXuiz1",
  "key23": "6196VXcQKfDifThuSqbkQkV3LGnzkDJzEiwBVH3GYTxhE1GGGTbRHRTuiS86HPEtmje48NePRiayNaoKni4PqNX2",
  "key24": "JtRBypCaq4PWmRos196dh11g5gWUccmYUdjqdPgbfRJcmjVJv72oeS6rxtezAxcXW5HR1PJfg8Qmbb9NMqc5exk",
  "key25": "vXBxmUVANzrtax6p47dQb7gX6CUbmTxagDU6KwCWooxR9CWB4en1MacuHLqjQQWGxt59DrqsLmJb5kKGt3hmLTw",
  "key26": "4hGjjNin2Zk3eKkbhniMvW4pw43ofqvvhGLgeiFpEeTDrf6JfY8nNsQ8YPxaKY8Mm8j7PAucqKWVZLoaDQDtgcqz",
  "key27": "5YvMyQMM7pwGwTuRZddx9VnjgKAG8x4zmDKKr8HCjYTPDR75der9zpActyazqH42LGMDZNCMKbiEFmQP9yL26zjq",
  "key28": "5fxpob7MygC2vN7QBFSybXyNhoVBtp7DFdqRexBXWSUC3SW9SEAVHGjCiPpChrsXEvddD4zK158TqXX6vpmbP4Df",
  "key29": "4gA72wkCGUQjxGGubtNMrFNu1hqY5XT8KfZ2HHjB8vJ1KaBBPTSGLUcMwtNLBvpBa4PmDJ8f8bjAvjeJCRSKZwx4",
  "key30": "pSTrxwm6kThCoqU5Hwxdjcz1ar3p1wm1JR1YDdHhFDAXncG6tg91ZUFsRckWmd4TfjD9mHbUj21p8u9NMop6hjG",
  "key31": "3FsRbNyeb8BKxzCrTyS6zD4VLJYFxNR4rKk55KZaipdPLzQ3j2Sz9jMeroomMBhnnnymdtM8XrcQwuLPbgrLPNuN",
  "key32": "4rDyB6jT44JBc5vspGPtA7P17GDw6BV6qjsAkzhEsSRSZYx1QbRi9BYvEWkuXqwJ1PYAMEiRdLNWKB2DNro1t844",
  "key33": "5TGmDJZs75bwKJhWb5NAiMaJGxsfQ3nTNa84MgNRbBCR2YMeVZGeH8pB31We9JSVaHgrPKCkMo1MWi1VrbaELGfQ",
  "key34": "4TkhzJzNPRB2MrrZmw7YN2kKc7M2Lg5xjhghXHSjbc4F6gXNuSTTfByBZw4DjSUjuCbEQu81BBTG2dEs6fkMsVWu",
  "key35": "4EBV8pC8e4T2onqKqDpcqYDNv9LZ3L9GD8V8RzuXdBLLJKzw1ou4FFgdCUeuYQgoLFUhUXvTxfve8tmzxaNqnLay",
  "key36": "2a4wJoQXq9Qk2mfGxQcU3mRUK1Fz2vpuWMN9m6KTPQ3uJLBmJ8qs6co9GbSNkV383XxucfpuDxBqKgrDv7c3Hso2",
  "key37": "226HF7PDfptkXhp8uCfi465yWKcQjjJkCe4qpPy3V4Mv7zknPqDqBFe1ec4qDXi2VYSjprH29QWarrTJ6YyKeSMe",
  "key38": "LZvPxgLwgwEMLUTh1QfJPiVNn9T3PwdLVNrx3DjzsbyQ4PTcmtFSqfEoxo6TMuZdEpFp498GoUQc2oArBftWtjW",
  "key39": "3UP1DQq1CocHjjjDEafQuh2ea3oJ19vXHhkQc293Grhmym7a2rNEmwYQQy5nbM9Tr3aHRyUE5eNYA27NT9zgRzKK",
  "key40": "3JSPkEwDrJjpSqABx8gYNpZSH3uPqwR9NPvzbLGYmSCzAgbTipeqyADnsN8j66wTh6pwBV6cnb6M19494Duh2HnB",
  "key41": "gTPvMmaYHsZHRzF134zTdUhcermcdRi9i3zK6fifUQCdrf242gg7DzShz39gkWVcKAW8dGeMtP8yNrDLRBmWpaM",
  "key42": "4eaBF8RaBgD8tCwvNytF6UqcLPiUuAsZYHcqqargUf8sWo9eTGqejdhByTHVTp73KnnAZFTadFfdkehd7M2tDZ5j",
  "key43": "5qVA8CSJTZj2jMr2r7w8daa9iKeZQS5ZUkxzZwaBuH3JDG1xm866NPLBMQJbXpa3bFiDCMFNAAnyQ2254KVaD78A",
  "key44": "5qGcaKrjh8tY2cRmNGvwgY3mRm3CNTWbuzY2PZmhV8nC37EZ4wLDFTx427ERVpADHpLjurxZi3uxUMuQNULMTEg7",
  "key45": "2wBTYXKtojSgLW9Lt6s196rDoyxVu8F4czuqdfC6Frx752Lr2VBVbQP826V5z8RmAzJsuznnvF6vSRN9CP2z9h8J"
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
