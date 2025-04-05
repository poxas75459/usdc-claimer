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
    "4eeCJQedQEB3Nx9KawDHxPB6J2KuWAT3shCxCjnbE13et5VLXp2PsM18mNZjr46dt1onXaUbVHaER4imTYQENMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVVuupMY3TzaDA3KcgoU5Bqi9E9mWZjwek8fezoEJvyYbeTxibZNRQ3eWghhq1SN6WfNDjPsJWJseSAoP4pATev",
  "key1": "5JmYaqWnqrb7cL7kcoHgCdcSmgesvK3gDqury4WEKTqFDcnNii5G3KPgKXWvPa8XZQeMQpSRCaZCjfBgH8Aao2UA",
  "key2": "3vQJtDHdmU2YuhdTZxC9tU7qVeXhd49iQmM5MU7DoNLRG11PC8LPhXN77PzMLPBVFoAEsPUikJTJypCgtdRx8mpc",
  "key3": "5xtY3pReJ6QxXtkFSHxVZ9k5xWFhiagGnE5GapraUiexcc1gAsjdbeYzwL6z9hqjTmLVsCSTzthsW1gSzFPciDHi",
  "key4": "29sd7KZGXLP1938K8vMQWFFrL9nei7uT5DZTM1qREpfeNM2SXRrvbmop4xUnBsavdXBz4z8JK4bx2GshJREgdDbQ",
  "key5": "AGFfS2gUtswsRZuPCXMm4ZLghuJGCVqSLUFZqGFZwmteF1N9pZeoPY8kU1uWqgTEaeg8rPurJffZ6ZJbhppC7sr",
  "key6": "4HZV3RRbagawfpVNFJS6JUjcQAunSJv1CLKw3xyouJ32Vx7LYwJhph96HGA33jxoaZCpdSaztHju9bPzfyXa7iaY",
  "key7": "5EVHaiU7eM8akcTCc7iKWNijQXBX4xJaLoVHF7sGAnWF46GHtUSi9q3EgzVYzkhiS4kGnCML9ESUnZ3qZFFXToDq",
  "key8": "2eAwnYARxbZzjMBc5gYzaPBSG5tXMtukKaiMHt31YAU5Ngku28JeFnkrdB6ASijaHtLyCyE1LaUm7vxH52PZG1mL",
  "key9": "46vkYKpKbrWp7vV9BW4rki2ZP2A9B9vfL5sMQJF4DCtpj35Y5r1uH1dbpyKjqTWfVVjhhAPMjYYhFBNbVKNKAfDw",
  "key10": "uZ23cpeW73fqtT8mcSN2eNVUgAXGbUrHJgfsg9Qo5SfPaWg8EWZSKUgrGDN4kAX8UPtqoENeWLbNsC25JMa9325",
  "key11": "4DUsAmxsapr5BQz5xHjm6igudRJTuVHUofLvvAFmhDLeDeAuFdnpKZiJPqj5MN4CSajqtQXEzygpKDYEVP2BoxaL",
  "key12": "3tyP6QkuTNLT5ZQqxYNScvgR3Bkg7JtHBL4iRuUtriyyjr37qsLBtWuZ6vpdii56uNbA5tLDFWt8dH5BmHYaxR9n",
  "key13": "3UQHFPKuCvfoT5pFUeWdH3vPRRmPdNkFX8dHeo5NQ36ksqAJ1CszbFDvvJ4fk8Ctvjay9AyQUP17V8Sdi969BJ5",
  "key14": "3kx9GsQ1KQZFq6UPqTcuQXWYASGwJEcz9aPmVwJFEWtKbv927XVmwLCCqdHUMsUjQaY8TMxd1gZhUj1MqTko4bnr",
  "key15": "3amrQdrWAMsrckqWCBT6MRPv14SUA3HsRWZQ42iEPdVAGup6UP84sNWfquAfvmsqQpWn1dZP4xmCvCnzHmNb4sW9",
  "key16": "zYZd6xpypnbd3Pm46va2CWmBhRkviJuL2Gvsywrkg4mL4ePhcQpptoaudyAFGmLF3p2cfcZWCe6e7zKzhmCLoNe",
  "key17": "5mYVMirhGEBzKMNqGyWHSyeqhC2bL7CD1ovxVEKeYhcVLxeTbLBEZvufcgG28qhpLPJbE92JT6NvFUks9y59rZAs",
  "key18": "5GXgKehAkDpzHbLRUJtuYV4cfYB2TDC5B2tNRoSQB5aJNhNUpCkEooVKgQnC7B8GhKMtKxGiw5LWjTvugeyiZB6F",
  "key19": "3rhdN58zAy5NKozWPoPdumabY7iGzSquXnYDmFCaQvfpsh6wLjuxpFPJWJYtSpY1PFAg9zWbXQ6nzivspwRTVgcb",
  "key20": "5k8NvRnvGXFNpJAsdUBGrma4F4hJLJ9cDoPdy2W9K2y7D5wDb4wnH3wJ8G4DHVnojCrUPbSTpmHJvhV16BCAKKkK",
  "key21": "2okGFqH5KjNHYTSA5ED4CyXFQ89Jkr69jMPMpbzDeBK4MUxyP7jh2JK9cCrqpQ75cBf5LSTQX4A67wadUBzzMYkA",
  "key22": "5Axh2eZewqSsoEe4PNSxrAxNL3rhUHETyNZuoCPSxWzfS8cX8qDkg7HA6YAibHeefr64qRAbA9vNDgN4jcjKGxfL",
  "key23": "3p39BnVR23qtbZ8mY7HNgBeVjdmyZPwVGzgSE6EJJbv4ZmGdchu3Nw456gDJhDC5hdVNHxUjfk9oPHvMSg8Ai5CV",
  "key24": "5XEXJJjyu7swVyT6CWMcwtMuphqrXVkZDT5fwMB8eGD9Uqpb7rrmDdRkpKMJsgjKhPyHxgWpWXtwuwLpNQpoxNn3",
  "key25": "3uNBe917dLTLknLvHgAfKxZHVYsgu29tLwUBH2qb4TFb1f1g9H721BonGpQwLSHh2yEJoPJW95LSujPkkCcTJACe",
  "key26": "4vhTv5oLhiQNurvNeHRzv4PNwbBTZEsLeNKDfd6iFFSXhCamxS9PqWmBUnbCMvKToWhqi9Nrss5XjiAyMPVApbWZ",
  "key27": "4ZVhar8gN9eTexabjjcjSHnW3yDQXBTDqBzDnN9yymwSCrkkK4McAjMMJDA2tobgAW2u5P5ZPDMTFYpwZcSEy9CV",
  "key28": "2N6fauV2eCbKFaeBjqtDpZqkjauMg94EmCUqQcNRFjhjtxJjGpVKk4rXkD6yZQ7u17Mics77LduY6finZ1RXpaYS",
  "key29": "3x7tfFe51pEboFxPu4PYMCngBnah5iWvwLvseVAsvyrn3eVQSMmDZ7RGHdcYK1GqwSpyZC1Q6upcfWd55bk1AovZ",
  "key30": "2nCouknM7MT3tNa6SEfZnKVgW4x3sTUXRLnQCeeyTcSytdzG4EyebtSJLjJGvFP7G3XzJa6dY1thfEbDMFxpw81K",
  "key31": "jPpn1ZoNdHkQoiXZhTiZ6kCGtrLuYuShXBt4aDj1HLNmB3UURVgrbeaAYwmJBLswG6M5GmbPP7zC5rKjY42cvbM",
  "key32": "638x5Pr3n9cYtw62WjyjP3va5T24NctKeDfkZZeQ6EKrfYB1r2cXT1UxWM9gWByoz1yJzSnbsSrDVcxq3eaZYse8",
  "key33": "2EuA4XnKw8Y1FD4GTRowG5yjMZ24TJNwDbwELqmn2SZj8NT2JJsfR3XCxeyKrTqKPpaXZSSc49fHoevAhwomWqJR",
  "key34": "BzmqoV2oTP6sw2pB1PutZge2umUnvUZ24gKtKeftKrruPZpznGADboPTNqsE69228AkuRUrZEP7nANxPHbdZs1A",
  "key35": "5RUyt41VQe2z4ssGxmbhLfiMuHxabHXPZS5qVYdSB9LJdcJ9uh3P5JXFePo8wtoX3UGFw2v2PEH4u2YKjWEZgXzf",
  "key36": "ydxuxDLggnQmVAJVeb1X2GdBJt4CZkQdvbkmdMXGxqjebVHGf9R3wiRu5yR9dgf1X68Juzt271XEaYvT49iU2yE",
  "key37": "t8ZjTMHegq4urwRaM1UuQpuok36mt2myFK7PUg5m4AqXhdptrfxXoFUfaE1ShwP79aAE4cZZ6Ej8RQ1x3BjebER",
  "key38": "gAiXjqircixFTQrEgqoxjVkFfKJW25CUNf1WjpNoyeBDKonvs7ecuVQqKzzYZ5BxXhFdwXsWraHzTWa7hjhcsJv",
  "key39": "5CRKqBvFvjYbMrpdjFoYbUKky9BKx2qg17r3eqZDhDM399sifuQ6uTTwfF7MxERkyKsujvbKwDKodyxuWy3XWrmX",
  "key40": "54zgB46o2wSfM4RQnJEe23zzyq8PFRRUvLrhXjbEq9oFSY5XZAMdyuCh3fzQBPg1RbchF6cH2ceqSghZZnWToywB",
  "key41": "2eBMwUdkhqxs5EKVYeKodjAETGfffys3NiJ2UFwLEuwtsb7nkbpaCJhfTfqvoePTrBZznYLbMUz2cVmazKe9cBWg",
  "key42": "3uYxaNHfKYAJ3Xqz45MB8TmzrftYABw8TxWeTDHhA7Nj539EL1jVEiERrcYDKsA2767z1wcujn7zX1e8toor5oWn",
  "key43": "3ms2f3eeqfmXawE2vSUAbPnAoc4w5uCiP3D1aw3sKph5VS1VfgJgJhh1b3ZGhE6sQALC9mXN6Y2s27ijBBzR4akr",
  "key44": "3NsyZL57LJkJ9KxrYAhqi2LTU6zTsZ4TzxpRJ6rZyCzAo295hQoZBR3hJDyKALi9eo426mCB87R2CTSqyQDN2UUc",
  "key45": "3vmxpLpGN99RF4HUW4jh7PxvGTKE4oSvCwoECc39LoyViRzCfUZbTXwTi1LqfLjYDDLtr1LYSUGWq8Qe2eBTGMF9",
  "key46": "4GymUBDiBbB7cQPPAPd669sESmUkD6S6JBuKivgX8xV7FgtvvZVmeemXDBwiK1umJuPmACAGkLaZmZsMpCdbpSgH",
  "key47": "3Ymgrv5sN1fChxeuYyTPfVJ6S7ByhzRzsQaj9eDFkDLRx4Q7i5xJsn4cPf999fCnPKEiGGJxf8jNuFsLJzNia3WL",
  "key48": "5sgT3D35Qo5UuEWWKgJguBwSLcvENKg3ybGSoC19vY3nz74hLUhzArdxe2ENWanQJ3WkSAk8tRJvtXGh83EVfuY8"
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
