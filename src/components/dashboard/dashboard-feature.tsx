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
    "mk8QWbEtNyrHBpG4vVNYCX88v5ekyrQUt4VUEzKmqTppJ7uLqNt8etH8P2gyPtd1ZCHm9M2VKGmjgwkjdQhbBnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WksxFTe3kq3H9tCBJscEhk6C6a4peKVtjiGojYWmiS89dEtVRvo2ifxGBWohjM5T4NyGWSfnR3gmnZkbqsQZHCc",
  "key1": "9mJb51TkvvR36SZUcrsNCQ4xZ1qcXRYGnBXacqc3MoHwFbq2J4JkRu3RZmrqEv36QhAnF8eSUcGbXWaQRPyBi4Z",
  "key2": "58FoEosc1nHMHBpAP7NiWUZkFeJQShi1o5eHQAJuLoEcxKsdWgRgViyzqfvcjmVnyZeq3G61o1KYXAaHpywg6iBc",
  "key3": "4CMbn69K7savCaWZyFUvPYq3kNRoCR343g1P9dqes9MkMxW6wci9B6gsAoWxsLtk1oGRCvhe5ajV17zEW6zG4eRn",
  "key4": "6151j648yaJC5v9WunMb7ce7VgZgYdBbG61BQYQVDrfC4fL7BhfUXt6TmWYNwWwhbKewAueiedsGZrAAVL1YF1XS",
  "key5": "4w1waNXER7EN4x6goADLf8vQWgUSvDgdJuFoWXvvFaYnuQvfU9VBRjn1ybWAe12Upndw1vdmG9XSynZyEgdWE3xd",
  "key6": "3nEequKkDAergk3WoK5RtHfytNKDGniCQ67Bu8ZHkidCRvsJsU1nfWVETPJaRZuQSxBi97tSRa2SHH69DMBjVik5",
  "key7": "2PQZnXVqf5oMEhQfqK2nuABvT2KS4fztrey122UAwjp3E19BChFvFghY8SX5FwB7q2XdPFhjAXFqsDqmJwriUbkM",
  "key8": "4gcgunrosFGUJXWpp39VCMqnMfxxLfoTUZz8uaUPpcuXA67gTQ928Yg3sGNT8oJhePUzW83F4uUaD5BuzVPr8hxB",
  "key9": "5a1thbS7HHXCv59XhERmkU3tNR26H9vaKtNqymdnKnQgcoNhDKG7VrY56LMrzzd4teigGdpvDxb2nsZv5qopYbcx",
  "key10": "3c9wivEZHYwAK89wZAHi3tskGhKzA7u59Cz1ctrwztpzUyHJXpLhi11Rr2i6gkwtUdTNFAz3VKejM16EWqZL1Lyy",
  "key11": "4BxRuDLCR1k5FRLDEcVPASXTpPzfubp5G1QuiKggFcQhJb64mspLb43wdF4KijqzV8ueHN54H4tenCNgds7ak3gK",
  "key12": "5zebK9qjJ1p5prjkMkiE6j9bbzTmeTYmsZgqyqVpWWUjorKpAfeJoHuUSwLMJCbsgUrJKqifG4y8KtRvaiCFh7sx",
  "key13": "EnSTbWvUqkPzuZPMdtyQc8hXNmqNJk8egiLAx58f5XDiVyP7UXB6vLeBDRV9HvAi6p8JSPdvuDkVk2t21Gk4n8b",
  "key14": "2xJnKUgjh9Y4pjC2BN5v1hgjq1t7zAKoLzzbCPVnDeraKdAkN1L7mVnNe4qcbQheJszH18cZZt69ejJHu1oyw6Gg",
  "key15": "5NMgYqiU1mkdFKT9GdBbZRDebm9m3H4QxqgyREVTLzdzowaFvQ3MMXdziTJTjLMdhZ3osg1Bo6cRi98iqeX72NLc",
  "key16": "2n8pquP15qr6wJzaTK9CauzdZaVTRyKM5xTcTT81doEU4AmBECasGRJbDEQGxyBn8qGJsFF4dxj771gvTMdf9mKV",
  "key17": "51rMup8NgcYGMphbzeMSkBzyLWAC9XagWa6bvEYh9qdBSTg9AJnbBbVzV4XEfvQR1kZ3kMdJ1wKpRZgEHemzDy1n",
  "key18": "CJG2x7F1otuDiCovRYr6hLbZVkpxA24LEZvffUDQTajvZG2emdXoMhggNnCrc23PCcQ2FVJa4wjhJwoZL8CiC3o",
  "key19": "4C4tmv63z8t2Zfhv6fLmoXzh2gLKyxRBcTwZ4Ym8rFU6hLnWfRQjLWFGjAKF65rgMANyAmLuA6zqNH4ttkCtnSFz",
  "key20": "3vyTw21SkrqyAFDQh3ez7p3VMNFMp3zJkDKCLxkKjETix73SXwyq8A2ojXbdfY9HaFzHcpjRjVPYELaM8xefgjpo",
  "key21": "zWi3U3u2FDwZ9kj7VfVX4hQ2CzzN3Tx4sJS1noBGZMuVJya1iDsFVU1PvcRhDBZZwyo5X72RUfNVwNc8Ur4wePj",
  "key22": "4pU6TEppoVfESvJ6t8ff92LzwA2FGbweowsdsKsDSqHu3FMakZZudDsNWzXCcvogb3WpcD2dv5YkCmYg9Fr9qEGj",
  "key23": "2jRiTQ3uwpVpu6qgMwFnyjorTx5tGhDrZALqFE8sQFNTFsAwPnTnTbB6TuQ3jabHY7veXC8y6Dt1Sq9MPDsXaCQn",
  "key24": "5XVsbu8J1iVBmANK597fSg7jbhDTNyDBMVxUZQeJmvWnkB5CPpowAidRCdTV1YGDoeRY1dpx7oBct7CLgdrQRAAo",
  "key25": "4nJWSYjvuxTsUYXkrefaea3uaT2rMj6TT3UoPtruScL3KWB828sjgDY133PEb4pmTZVMqvxe8rFhg2fWw26Sp3tD",
  "key26": "4rNpo17SQkY4emi9ZkUf9U2KYuGMBMgyGGi9KrnAUp4oAuuiyznFUc1NbfCFJ7kz1EJkRif9qXYoPtZDupMH3xcn",
  "key27": "xHKdchknAfMtLTokzDGSouHUc3hpiVs8AbFHgoewsevLZksaLHF1CfymjHAEnqqpStNLAXyHZBDhTtbRgN2ayfN",
  "key28": "J9JSfVFmyTuzxeh65K5bhwFiUQmjmzGZFCVB4btbb1gef9ENSApszaWETnw1yjL9AjUo6tfoo4775Sd4sX8ckA2",
  "key29": "4cgkj8uUzbhB7XEbkXq6QPi6Rr3KzWYeKjSom4MNoxUeXg87LY4GcXh8ftSt5rtnEXzjunByLh5p8Yv52VwuaY8e",
  "key30": "3vGqY1yqZVWkt7nhnP3hUZnKmnsQRr21WncT8n8rSg9bvG2R79nuhkS5o1QBHTnmVuU6XgJEPpU783trfpX3Mp3S",
  "key31": "3xsuzmaSAYS7vw5M9F6gpHHHnPYVCCuEPeMx4M68m4G4uNRWvKYhDEQ3wWbncugvFcVRDyAtnE1gph2AiBPeohnG",
  "key32": "48pt2Ya4GbtwyxocQmBFJwGv54EEyHaau1P9HmHrUL4Qgh6rq8gCBgPXCHi5h6jHH66dXSDymphL9kj3YV1qKcrD",
  "key33": "61zoFF1wAon3usczSmRut5cySTYr4ak3b26YW7MWw9XdgCQ1UMZZV5gAr2Pw2GeMSAncmMoAbwBE6qK5iQ1vCmCg",
  "key34": "4fxBLQpSCYFwzR2phicqV41QDjavhnSPeo5MXucBLJrxR2t82SNvoh5arEY6y2bJ64p1xhKrxJePD17otyqdAQYe",
  "key35": "aPG6VtzwdmjseZy9GuhLDAuCSBXg4Trg9Twp2FucYRgJhLffQhPg4Mfv7e3ZMT8YKTeEM3oJz6Uji1E6FZSUcFZ",
  "key36": "2dLheqRQ7o1meuP3SAYMppN4PvJDA9Jj5nn6mx6E3R22mFXM131hcqYR2VL8ZajufUeuy3zzrbfmbBsWevvGL2RQ",
  "key37": "NR6a4uFusNr4rmVcuNKTWySZqXq2Fyjna7CPpzZHq9L7EvDHrVhDTV2xHgYAdWr6gkJEZRfcSbiGPuZ2vXcoP6t",
  "key38": "N92duSWuBsU9knyyVNiwjk8ywLxfj4uPcChfBbBL3nk4LWyHDAYJU2NjySGfhDzB2pyc2Kgc3WR2Mf6tzsDpMQE",
  "key39": "4HTA5rbEyzLeEys4yyCYHn7JRchdyu75zAN9Lf4uAsyU1jW8P7bPbqxjeyWSHA6AEMGhbFdiA56MpypTZeCNjaVx",
  "key40": "Uzso8pp2KF9H22pFemn2By1FMryBRsTyDJReQd8khkFQ9M6xHLPCuGFSWWtMZwUoXBkM8GVtDHb3bJBv1qoexT8",
  "key41": "3XTSggdT5ssbXs6fkeRMYQUwZjUC5Y2vwaP9xz28iWzBpr84ykxbbERyNYfMT4xgQ8kHb4Sz64gDJJ74mmbasRwZ",
  "key42": "4PQFPWtD2UVkQaozHuwzNFy8H1642cfYgqi81eaNEGeri5Fhb9Y55XyHJM4JWoLK98wSvyWeh7g8UJwKh8hMxX3b",
  "key43": "8dLmjzzKA3ENo8kfpZ6esUkAPmoM3SAqqinL1CJY2VZeoKzwBwHHFy9YtQ47SnftSfsGRDHnZFn5s8xzmHW1crr",
  "key44": "3ipw4VVtGzJCD4m3wiNCJ8V63MecQ638pL46ip3JZaqUjh9jhBjhKJk4UKmPoQrYzYw6ZQrfw1zJn5KN9G9c9dqW",
  "key45": "n4QRDqs8iQhUCKkjryVp2t1aDQuS3UXchvGMj1EEcVRnLD2dLgn2LvQnksj5NWVxJxS8Rfjm5Efu2PrF8S49Qhw",
  "key46": "3J3iF5Evqw3SUavgFNEuyR5VwU1rAATD7xYJKB5UxrN13yFUaA8Sb4VWC8q4nPp3rjpKcHtFT55sCuRuuqxYAa9p",
  "key47": "2qg55BdKQpjLTSYNGGgAfccRXksLDQqM3HhNkfPoQYGCkH5DWRGafbpcuvrqvPZuLvpDh14zuyuhd2YmAe28uG7p",
  "key48": "2kMGAn4wqsQRdLYscaWUwPuKdxN2Cfy4rnzC3ohGhL8rU5KTDPXKe9JuyHgFg8AkgfKN8ErtVURGczAfQWASiixC",
  "key49": "5NaWpp6TD2F927VWQGQs74owzmTPJXppMouou1evJzAoaHPnLRBa55NuCGPXMWQnxWzSRSZE9AY9msgJPRfLfnEZ"
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
