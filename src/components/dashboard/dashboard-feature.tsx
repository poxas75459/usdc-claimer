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
    "6287V4Mcq7LgGgRvu3kNXZQe4CCfPzdhvA86wshVuhJgpW6xwicsUR2GNGdmjrJQPh3VNxdQaq3QR9VLLn2EgcSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HK5s6i6io3ekAUfQ5XfGX4S8AUuQrbDcT7woyoSM7TcoZrhvhKHKrd46aJug9vDV1qaDufYcPjLwXALhQ6GtTJ1",
  "key1": "2eguCQKkGCfoJ19YJUpfnc3wY7cTwpfdXewzDCVncHHWLzvdYzh3r6s1esLSJ4bUk1ttcooepavtMpaKrKujBynG",
  "key2": "67CutY7PR4sqRBAnFWbrYfD94cD7rssr6S7sAeyuE2VVMBEFcL4QQCNraQF6zA4imuVSRyVsQLjyt2mnXuXcLxsj",
  "key3": "3NA1XKBtGqFEnVVYwC9Zsmy6Up1jY3vvziGZ6rgPoN96Q8unhPcUWkXyfcdbUdyJfTXaQkXxHxfNRqv12sRX4kgp",
  "key4": "4QzQPMctgATrGTgr2hNqgedDGXYodAXEcG6dTtuLe5e34bJNar6QqQwXLUCrdobyPkwWux6oEuLptgJTF6hkVAWV",
  "key5": "2ffLRYfxkmQqE5VmDG23VYQojo5c8w64VVCqF6Wk163AQXDMx6mAQWPkhUuQ8vmKJpukxBfdYzqpzjUNdx9t7Qn1",
  "key6": "4ve3LawSxcVwW1QKsdpKxx5wAt99PTPsWedGGK1DurF6vkD8xhfDNJXArj7EL4vQybQScACGf7K6ZAMC683EqU7T",
  "key7": "2ncFsPrvQVLPzQaxocqjmS6dGmM6AicEkufniEBtYj4316tdafGwtcYDB31xAt3wNjBDDbF5okdeBdXjV65PKYHo",
  "key8": "2iu24cWqMsU6GPNsWCC9Z6aEepj7X233U11RJxTGaxFvoYkYyoMQkLLDdv36RBDpjeSWxMQ11RXGbF5EkCp19MMy",
  "key9": "tsBkswh2Tg9xphoBLS8t15KW15pgMHLeAoZBJgF6PcgbHXga9D7uv4cFvAupNKmEDo3rDCFXpgj2qAG2dZjbi9w",
  "key10": "2m8HVMurfjdZKXATTqNgYeYpgqibVUYUcM6BoHVK75tnD7a3HfDCarFmcrXqZ4tkrnc5B8uLA4VUe1Z7aPUoHFWP",
  "key11": "S13Fv4uf8tjPGvxrYEW1CPnTdMtjWo5N23sZo358z3cCjHtesuDsVv3d7x51ASzPdJg7g4d3Eqby5Lkd8t42hgq",
  "key12": "5N1ucXwuKKhPYgGUC95YasZgAerFgbXeXMXjRR3yTfeL3LwRNsCxg1nC8FCocDshMFDvLUTbVEGQ5EtwBs94cbJw",
  "key13": "4vKnMuvc2DjurqugzHtJRPGEMUWXLV33wdsrsKZwBhUYzKa7BKJz3vEAoCxZZHhfEgzXXZ6KE5J165kJZrikw9ir",
  "key14": "2GpUjzARbtFnM2C4mJMHAKZ8WcLercqzEMetuGnzR5uivRhVsPjokAHGZ9jBCAKutikQzaVepfB4YXi4bZNyu4mW",
  "key15": "WqJ5UhXoWka6JKaGqEipDhVACxCbwhLZrxscZ9DHTJVSbpvfNZkWcDk2pFUMjAt7iDFSvaPsQLAfuJ8uMfd97gC",
  "key16": "29WfQReZ2XL2jQGbzVmxeZqUuykHPu4PoFcgxgbjE6HvF2ifobmGUqPQbaz2umSYD5HQPkveRfK7K1NR1t2tKozS",
  "key17": "2ymwwU2RNnY5NU76LZ4NSugFWSZbp7jhgiEFGuhZuGogtu4ASb7o4DpwBzdxrdboEPkLQjvPDGPxnfLWDXf4LXxG",
  "key18": "5jXF6uRqWqSmTVCozfEur4BKoKhkGzRdc4NNLZGd27uy1VqWp6LCam1QHUFgrVQxa5dSwiKxUHgZuz5s7zj7EKeH",
  "key19": "49wdksNncNM5xKpHRCoK2UupExt3RtAtgyH8K1TnhrFPrSAea6ZBitH8sbc3ZxTVGsWbS26uUhpvsSj4htKWnTep",
  "key20": "4ArDuZBN14YsiyTwp5qpmwWPmcVvRKLu851dfJKuHNtk7r37tteGCfQvzMkkFA5ZCvMwDHH95LphJuyH8VqN654Q",
  "key21": "29EH2HF52pajupggaMYkNbGQA77LjoGHxf4vt2dx7pvCY8Uc6es3xN66uYbekyQxfaRqT9oEYyms5x9AMmnNocyK",
  "key22": "4i8wwtPGRnDcUXZiQUboLSu5u72CtLt79iSqFKv8KoegPdafzHQJ5n86HwZ66tMPYmBbrJGPxg5ZjUBTYK3BjtxR",
  "key23": "43YQFhXahHXsdrBjPSnKznE6m1nWxDYHgdpmwxgFfq3LJudGkquRrYsEGunZqGJUzvG8aho4VnDCJoTgrRuApHM5",
  "key24": "4egSL3J6BBZ5GxnJFDHCPrJchQErBwgs6uMDa1Pt44a7L4Y9p7a5ccaMz5qs8mDMyzZHKwxbfoLeSV5EpnquFvGj",
  "key25": "3h4xbwqPTxepkjnNR5gosVhsaN3QSnsgj6QiJQLK3GCyQXtYjDg7b8j52W1nqNxFvPGq9p58mx2Q8hxD4RN26Lwp",
  "key26": "5PBKUCXeWVnmP9Y2ATY7vkTPiT25PvVAyh3GTQwqQ8YDACNDiMk7eteRkhbuL5kcc3bt5yx2yzok5RTns3MkPQQ8",
  "key27": "2jcK71m8E9MsBJqvXkZSesiNgPuGWfYwcdQnSS8h6rsNEuE9ufoCtiUBWwt5Vf5hSA1Y8ysZfzUTVF7SVkz9Rg2r",
  "key28": "3afQZ8BAYbL59F4b7wmT3Q8J8pSYUasrsrEjZ82L8oLypYKmwhqsdpXPaCUAyeNr7RPhnT7gE2GM79PEUkoDFzbe",
  "key29": "2oWJXC6CSrdwhDi8qnZedzHoaQ7sKEjbz5YJ1P51eFjoNG1caa5uwPSVrZ2xzWPuLYdB9HrSCVxLwy1VUkqGJLa3",
  "key30": "5dM4mQUg3ZaPiojPznBmBKpronqRdZtoTdVhxKNrd1Hnkgsc1aRpfYE1Ygn1m4hDEwWAkqzzDrbCRLnJ2rUzErEi",
  "key31": "461XkRDMvsLYcipJhxd6Xqb3fKMwR1nrFkMdu8eHKjyZsSjSdexqyvftCdwF9tRPjZ4pfVmUTYistybmTkPQqkB5",
  "key32": "w8FFmntdksS5P6bW55drvqJFVR532U7EXJmmqWSXD9xXuZdG6py3UHVr5pB9q7Tmsrq8GbjDsg65iU7zrmKEhMS",
  "key33": "3nGmMa4GiLJuuC6CR4DV9hPnXAyTSxAtjdZLcyzktPPgbyrsnWJzGcaWkYJD9PYFaB7ribqVisVTETMzTCdVYtJF",
  "key34": "2ASufkt96XTTzJioJs1mK7UzyeSeMskVkNHWVPemUm7G2ncJK52RxLQci2GyYf4tCfiyE26heqG5FFj6FfsNNh12",
  "key35": "541vZZdH5mKoEqqXiXSxF1pbBAYz8TsNKUo7SV6rgWPRfYuMwak8DZr6j96PmqsxjY4y2fULf4wx7QaU9ZbX1658",
  "key36": "4TcJTzruN2ywwZUfqsQa3bBbCBh4V5R7ou6dJ431v2nJUc5qwFcK2F1iJ7g1dzFFSdEbvjqwSZZ3edmdnGe6ut4t",
  "key37": "3aT1CP9ohZkBibsCDcyZbYoGZBrmkexnQHJjgbW9WQKjb6QC5gxg5VJfMe9MY1osT8i3L4hmLwcJS65qSG7WK88i",
  "key38": "5B1j89diLXWZu3oXCuNKYVZA7Q9aAAupfFJq4Pz2XPGAU6yciCCunYfW5xbtVZLoKVYFMMWAePp4p5PTCCR5BcNy"
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
