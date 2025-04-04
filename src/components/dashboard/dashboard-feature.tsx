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
    "EmMvUvU4H9g3iEcWsxX7DECZvzqRieLxhs322Rx1fTUGS2MVojBbgbjVMPC7ohxLY7xWPLarNXrto7WArQ1K8CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3S3Rw5TnV4D74GTT9dsiPp6YhszDABiykim9a751aRerpwt1LXqMSCi2fotVLjLrRPH7TAe1ZSYzihPvGLvtTu",
  "key1": "4ghPYmDuTYEEtaWW8rq9QjqViyoEAjsrErHCcdtmR3kmpujveKXUUKv5nyTuJivKU89nH4PwwMis6Yn1GkciyhsH",
  "key2": "4WWuLxf5CvskQuFh1fS8C6qsQeYmQL5pMJe48BrYuDPQhN3jcozF2U1ndpWC51U5Y9QUbByHmyqfhaBsgVHRCHop",
  "key3": "ZBkGe6Uw3nXhxc5QRh8kqvSLqazdSTV3AozAdpdmtJsdQBngQ8qrfmrjtuKXBhAythhKxWybNvu3z92CcrR2qsR",
  "key4": "5jnh9tc5pUzSakSrjAeh4zCgNGvKegPYtANRfhEC91k9VEwWSA2rHjFT88Jex7VBUtjxqTe9nDH44Bi2z8FJgngf",
  "key5": "5KKyAb2Y3GUhQaswjjqpvqoVpvoKyBKeoYEPpsBRixJtG79MosXsQjLJQtXu6t11VxETF2EbQwQSzo6Y3EwxTmoh",
  "key6": "J8DGLCRiLufTFUEKGcw4B1LCPwXPwRdyuEtc3mywdMagX3H6h2Hpup1DQWdFjicznxcikrGvJhNRcYGJwdrRynj",
  "key7": "4omGrZS2vnJ2uXb84k6ydfT3b6c12X79K6bwx6EtFktQRRXUek2UpKx9JfjAgLQA3DbVhve9dn7sCo7q7SQfX3iE",
  "key8": "4uzBLci2db6UM9WfGFJNZdxqx6bDBqvGp6uPQAd2HeWoX8AXzCaFqofahtcCeHD5e2Pnf5wNjqycB47xBCCF7cDJ",
  "key9": "3WgJJ6758s89sghduyT8XFQsTPN1Ky4w2WUqvDd5iuXWtJMyrb9zDD5bSN2wPHHU3eXGtyd2s8kvX6Kp8PaaHiao",
  "key10": "4ZmK5E819tHpnB3SAhHQcZec1CtC2swraxhpw6cQW1aNvZnmbPFw4GaimsjdMCrfgjhp6JXUkq68W28oBXFBPvEu",
  "key11": "YTttjYKGe8S6HGEPmgamDvAJUG1vEWukGyHZscvBHwcVaSSzC5B5zkSvCHptuReSJfTQp2hAbCiUNFM4MuWi9G8",
  "key12": "5sn522UHi4WYbKBnuKVet65pcCyizGqL4hYu7oD4HMNdsjQj9BMN9aa8wyq3sPvporfDGN1stYKFkmqvG5PxqV4n",
  "key13": "5ZkPTLNJrD2haB9Tzd9EGMbc8CpRtVKpZ81b3Eq7QrCTVoVj1UJ8ZYmk28EX2zkrSKY564csvwDmy8jShF2innqY",
  "key14": "biqZbErwtQrgbKg7by2sihJ3jnkcmfg3HngCrWpuKPjSJArhGgJNFdWUd9mcMK3A8FaZW3gCSBLrEunhVMvLSo3",
  "key15": "3W6iBBNXJhNCfqvShRPScD6x4PA6q54bPGand8Ti9tE1P66wffPRVu5hACBiD1Ro8RrMhnxu2xPVFFZ2oBMteTfQ",
  "key16": "KscshMoJC9qFsz7Rxm7ry2B9GwBZjZJYzf4KB5HhVhkW81uqEGwVbSBcuYymDbibFs9ze9coKGNGFjrueA8HKCM",
  "key17": "5Ch7DuecXWpotzyySyrhkWABKmkXymC2bYAtSGR6SAZWScKj3qzAUrbcciDYmeJJ1M5Cx8GQVKpM88VrzvGkMMrP",
  "key18": "Uwm5Xp9bpt4CmJvNWpBbJyDfzRtuPkCgiUPELTYSS9horCDcqX1rmH2EPugHoVELVpc9Z3dGCncNc6riLgc5kod",
  "key19": "2o1CL3ef3uyAd2ZsFnrj9nhtTZjXjBNzs9bSnicZ5vsnHYYD7ztYUPayzKWYDpvvzX8WuNbz7cxKP3tuc2rMKYwt",
  "key20": "3uY14F5JReYDAcbna9vCH4C2JyYZHdHMQMF3eRhXZGndSJSUK58gVFkBDM4skmwNDGYTAsP6pn5mMUjtMqVbEjnv",
  "key21": "4bcaaGj7BYb7AS9eaSrn9D2qH1LJM8riLE5bTBHTnsm2eiyk1fBBfbPY4dkWUBJtCBwnd35mMuDBjPZ6CWXzwMAt",
  "key22": "5Fxrm6z8GgAtkEWWUZAiZ6VgxEZpqB8AdojJStUaBTmzaB5J7t7YJ5tMM1zzecgSRhns9VPFLwHDvk8gXUr3zUCu",
  "key23": "2Wna8GHveWQhrQR4z2R1bwN9vvaSu1ScsAMykzwN4MH1ohFtqLmXP7tjWy5FpVJPV5XYJKr5oPrD4XHp83bm2fdM",
  "key24": "iSTp9mr67fPewLfBQohY7T5V8TSQ8L8tPAm7HXyonqBEvdC5QyFnAsMr95WeD8YKi7kCm6eqy7hVkUJTs2jyL9Z",
  "key25": "2gZ3SnY86Xu2sk6YgqXHRRyNMqpo3SUyt4rQsUaAAj9kuHwHDbR3M3fAFxzNcuLERgRsmo3ZRAKhGVUVtHqkqcht",
  "key26": "jbZV8UhioFLCZG3sHmAfgSM9hrVWLUPZVa8yMauVHeTokDL6yW4tF6U79WjUMXjGzuqgMqnraF9uvPaY5YKPYzk",
  "key27": "3T9dsR2AbmH4BHVq91HRC1NU9ZZ7BK3ZgenfwYXBPpiiZpvDD5jDf5CftzJLUSMfGiV3CAVzWv2fzt3cheoK4hGr",
  "key28": "JjtUL714LCPnKsUsEP5jP23p8tuW4pxiZkJY13aPe6Gd6U75sGr6dotaar4DoAA22CtVEe13NxyBdNZu82BpzTm",
  "key29": "1rdrRz4KXjww4EXpAPWYomLWvUopPTwozmcEapsRQ2Lyr1FPFSSvazJqpsqNWfakmmV6GV2THVugDJfsZUBurrb",
  "key30": "4qeniAXLBqWGFnqxRcuSkwJERTUtRiWQXLxXv2z8a65yMM8afBugZJJjD2XMQJrFqNTeej3cC74iE5Yrnjnu2mki",
  "key31": "3E3f44sQfoNTVCxXhkkYjwc7E1B9zidgYW4gDkT8ERRUZsgiggPaN52xGWRYEuCb2ACvpcqa7FMNtkTWDWc8PFFe",
  "key32": "6bLQCe17eYxWtEPCmEeZeWY1jdR9n6kWVx1ugr8fTeDbsoLQzMNX9Av3b4vvPReYebK5wX2PGF5MYrrsQreVrH5",
  "key33": "3fX1yixLeCjovMwFUneX8WaxdVmkg7jKCSBRUGxp16bCUZVVtf3Vb4H9vF4yY9XZTTeA4FPgjBBYMe8TkLmnMvcQ",
  "key34": "KcPGUn1W47kPmtiRKAVaJndbg58mmn6pfgQqMMhrPLAcGAHtmp4QPhAWTaTUCPK7MJM9d9wdrfYRkMHpwMWmuW1",
  "key35": "5p1LoT9gfPDLRXe9vnEJwcz5z6DEZUTUV3UKCYqNXSrxfnzxCvAH78m6v9wpdbg82yUzrwTwUnthKAUGBdkvjdcc",
  "key36": "5fYAQDzHFmAvW5StkXStjCn9yBTjBkaLHdge6WtZWiy7eKroUhMspL8fwfLNrA9KBsLyxyceqFPVg3UftNMA1azw",
  "key37": "kDCDRxZ8yo5bzDqXSTaH8bVMQisjxDuCDBb4HYtUt1uZs5rLAkeo2fRiCXYcGzEsB1qJgzLvH5vjWcVhyMiC8D9",
  "key38": "3rdQEhEzZD2n9t1LApGWmKLX7Pbx9jzAsubu3RH8EaAMLywFwNsWVHfHQ932S7sHtnRx3YgntWUKTSCZ6pykwmbQ",
  "key39": "2MZiLRCqF76PfpdAeLZ11ydtbGqrYkG9Vyrg2Z3mN6Z2vmz7SWRfcgMX76uEJMEuKFHW33pmHj35moFDVrXt6odF",
  "key40": "4Be9FT3rRKuANsb9pvrggdG8YKHb7yLe7MoRFHDnraweWcMzNWCPycMHQDux5D9sNpkjZFj7sgBycbc4whp27uqG",
  "key41": "5HYms6W5SneBdPdH3xvtAcCBqm1kf2VuyWPxZ42DHws8hQ3eoJFaUA9CgA6sRhBTZwua9tRmYKtZeJJBJuBx7WpS",
  "key42": "CnvnpHBdSSgVz4oXXoDHMBzeJV48w2uqrE1CQG77wPHoiwMkDWJB3rTi53h44g6TvkPaexCxLaJgkbsXjxpsqbF",
  "key43": "5vdwbKdjahGz2VDJAdkF8ctJUWfPEZbv6yqhAYeeiMGtqa5hARRg9K1f1L4of9iMH9EjztBLhhtr68C3ZHXNinLG",
  "key44": "2bNM75SAdAzhGFTSR3MB4Fh6QB4v9gq3Whc7zbHPj1uC2pZ8wJawzfgn3t4Djmzp2L1yVh8ayBmBK57k7BvcfJor",
  "key45": "5wp5xGyRZUWqS7BQZAi1LksJPDtYtzAUBfqV1GjqA3aTotdg4wmz9oBHXXoS3KeYpHdNbWqyuNoGzNi7UmajrFvw",
  "key46": "4wyQ5Xvc5CvhNgusGNGAdncyGWHhZ3AfwF9zvZaNMUJNVd164XkYS8Frujyzcx11q8ieo9V6tuGE9ebpP36pa9Bs",
  "key47": "2vWzVKRBXLKae3BVdrV2UjAq8X3SiY8k3ELoxQmBhKE1V86kVxDfHWv6V1Pjy75Hdiioi2cv9mLkc3EQqUZP1XdA",
  "key48": "5GUm39nXNEag75YfpYGgoapik8EjiKcwtF4ALeGpU9VEJTFdNxYAGkUnEUbyPbH1s8pzsvXYToRT6CQhegVkMcnH"
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
