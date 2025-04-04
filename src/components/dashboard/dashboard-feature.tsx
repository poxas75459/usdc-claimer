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
    "4ctcxz2FFUeEnyzBRC9WifhJ5vua46UqN2zhraFX6UUNzVugGQLbu7djuG1jFpqHy4b1Z8WjXm9xLXaYGZ7iUmS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BAnEfJrkEY81XvvQ3EmpCuUXiFi48fxr5TPWbKZ9Kc7WhZkAFUVoGGRz28b56v2Gc8bxETJpaYCYxQGecifjL6T",
  "key1": "4sXhWqUmP6U1Y4p6R3mVe58pCuf2MDhZ7h2HFip9vur89RPuqaetkdrzCyPu3bz1UtkcL8aE76WR3QZVLwAUhWa7",
  "key2": "3645TyLgVx1cwuTtbLcUQQJJfVtVtBt5KMhxoyB41spzCHwpUYZZgb1sbnrtLskXfQcusFpVch9ptBC1bRuAMJT9",
  "key3": "oXEouyRALutm1T7EprVy7zjRUV1uQAj9BTT24jVeV3MAGjgch8vkScYzTxzPrnCUM8heeGaZisEChy5CZMcwZRU",
  "key4": "3pAjNr2HDfEVUbv6vjDokUZCheajHxNgVTtZM5nL8x1b3nBenQJW8uHsoZGBKkp83bxqr35UspZaf2n3uanwc2G3",
  "key5": "2BUKXW7R4s3hMnKfrn4K8TBQGHUHXYWPQEt7V9zD4wyz4By8LJpc2NeoAAB78dRygG3v2mQCn7dhbenWPGScKeVR",
  "key6": "ekXjdnAPFW6XLkVYJ1ArRFzoXf7yB1YHHyCHAb3KXHVGtMFq4tDwHA5axqeQsGNYDiBENXjP4LLqgvf5gYpZEcJ",
  "key7": "2RveXP6SEo5P2fCkyiYUMGUj4TWtoPCJE99yX4m6fuzADGeBpvZmRbZS1NbNAQFZ6gVJvrP7Y8SMst7SJFNZM3P2",
  "key8": "4nQJCF663z6X35hNMa2WNPuF2hV22o95SRaB91SYSx8vpYjFgKu1iH78SXjwSc4p9mW2wNRbeLK8ZNhdrpJa1cXi",
  "key9": "4suzY9vXxkUUtCDsKcAGHF2DneHmCAcfNzAGWSwtpBQWC3WHbt4mvWvwq824iBU4MYW7f2ERwbZBWnkYCPXbAj1F",
  "key10": "4P9qvzKiitBwLtwHDfMMCeLT45YC9odYre5ya7Whjedt4u7xnmzzCxwEJWKss2pDLdEhiBzF23An1gxcm9svbfsQ",
  "key11": "4beWMPsztTEuxSLFqgUMvU4E8VBoixUYEk52q3NPoTtYAAeGum6Ato5ZQw24hLoKZCxKSRToReXo7jzDQRBiWPMQ",
  "key12": "21FiyZNycRK7qZeNfYJAzVVu79iyQZ6rWdWKYVoer28pQ2nzU6XQC6U4Xdh11oTdyF3AWM1NPX42fx4yEM9PpSuV",
  "key13": "2i3yFx1LFGERWJN9tPqiBwvJKsxH6Y4VBsQDM2tX1TbJn7kE7e7bdHD6ZrfEmPw286139Db5tWaJLywQ7d4xtxTj",
  "key14": "3nLdVtvMW6gJWnDfFgYmznjQeoXDG5np5Vont8s6Bk2bB7tQkfL9DLFvmAYkY9rZpobNq1VB4QZcbBt8XJ1iiAmv",
  "key15": "4h2SA9xDR2TZzoD8oNmcd3cdoi5n7hrQdtgNJDrGZkiYVJVnybDhEv4nc2FYnrPZcMsoWqP3jMgNetiwtHihjGpz",
  "key16": "8P7QmWq7NKs3Lap9eFKgUjMfSisfkiEQZYnaa46AnKKTbcKK9W4fRmhhXXtafpuFizwTd9jisPbqSod4RczRt1D",
  "key17": "4B8SuyYV8WBfQU5tifSZypf5oZAC7rY6Nz5M1D8suudaFT1tUNQ11VkHDh8TZCXciECLj4ZxZkDJyhw3pYnQqN4E",
  "key18": "3k63hgWxSSukU5VYZPos6hKkKWXEdv5a8JcTKrBAM8CyYfkjBVD9Y5zLFfekNTRWae5g9y7e2f1YqdFh5a4Cnuet",
  "key19": "Kwu5xaS5RLH6zuowg3gLvwSeRf4vstPoD1sxZa1fNhkmpWUjQTj9QEc3PRghwie6DgybubWLHanV5Xwo8XVRhv3",
  "key20": "3hAygE2jTzsJikZvkYGR6YbKyucmkP4628kvoq43ak8be9gKp9pap29GxXGQa31KGrFHMHyzHPvoMoBna6ze14Ge",
  "key21": "2NLvWrwifn7hqYbNMgv4KrpgYsADA7shsQy1xFBJQd3aN7djdHC4Lh5m3B6wPJi2MWaTpH1MDNRj8WYywW5Ys8CM",
  "key22": "2desQQCeteKQ8YjEsRi4v7nQgvdRNgaZJcdmnuAc8gndbasJpMbXgnpoUhpNFW8WEBteRmZjvTLB2tPtbV9vJcYu",
  "key23": "4jwjjXJPw2yLvpsj5qD96TbCTvsHeR95LExFrAVxC5eRHMXrG6uaFCb5GiTer2inGGUTqz4MbvfnHiqWyEyaZBkt",
  "key24": "3kjUHP2D421U8YkFb66ddKPUksK5YXVSjU5NyyMnz7epwVSMLQh5JCwBC1QYmYVMdAT4aB26gWr9ZMwYPxW1Fa9H",
  "key25": "wiV1k8hbiA7Ub8hxRieM2T15T4TnWWxCqE4mUNFViStfCV4RkXYsy9ruz6At6TXoupuvNQNQersoAkVtcaTjJkg",
  "key26": "45yzZFrwWDN5v2Zh7p1m2em8fwQQ75XxCXRnmaGHi6PwCcStZzZqSSsBSzUW4tnaNpr3i9kSCe577yaL4AxUWp8C",
  "key27": "3cBe1gNpyNbyawPu8Cp2q2W1v8mQnMevKnUmPkCu8RcHxNewTF39JYfRzeWh3RULAqWpxoncyRPAuV1eraEttyhs",
  "key28": "y7pbHoYjgX3myCLa2rVC4jFENPettMkiAVgBSePRhcuJAVMyT27PgLjrQ8oEaX9qK68Bt4BDtAwuh9KYdVsve6S",
  "key29": "4AKDoq4PUQu8w5CzcScL4sqsHB4gFib4PsKFirD2ZP8oVzBymyAbkqf1S3sJRD54Z53RoGi2myxPBcAoMUR8x1BX",
  "key30": "2jGm4PyoXjCN8SnhZVaH76h8EgXdSKrtNSL7cmVn3nyGsszvkh4CYEZtSG1hTPm6KLgC2wrEJPyj3Vt2MroYEhhh",
  "key31": "4MBBc7nEwAzGVhqt3yZZaevwogywDCg18oUrg4GXZQ1bMC6WJ5gVP5QPv6XsoiFpCt5jTh2xAx2EE1Zv7onPuZmZ",
  "key32": "5kD1HY5ZDUYB28NFMBWgBAbfKsNdMc4sauv4e1HLKYrGmk843Vs6KG6R7h3K8y4SJFeZWJMDRNL3USdELGqDX8qn",
  "key33": "2Cj5oSVWMy7oMmctvrzbp2Dcj9uNuQC7Chfa6nvnFmKgKnaHYgYnwRpVuSDoDVCvz2edvSWUxeCuD2zBqVb7G5ke",
  "key34": "3r7V1QnVnE5wHwcSGHMScVsjqdGZKtZmioH3rh3KiTXnGm2YG3ZCzWSQYSyjieK8byUkghw6cuojg9J872xFKJ34",
  "key35": "NLTrS4wzMYJSgnrfskk4md9nzRRrPHYtPL33XMW5iDSMfwqCU5Mkw9s8cy4J45w3CSJ67ZYxvwbG941eBfLQz48",
  "key36": "kYpkzfvC2Sr2dRtVjAwGmbYrwsQuuqtS3fDsnrsGwiJxFntkKr5ruWa9nUmk8qh95rJe4wSu9Nqux3fujd9PHB9",
  "key37": "2KGJ7a22usfLKDMdyWdfTt9pJYnoqaXSPrmvYuMUwwgMwxe4hdqKrpu5znZKBxzJ1xgkz6WPYhenNYwFegrtTocK",
  "key38": "5Laeqtx3V8F1RWiaHkmu3AWbde2nwdwr9xJbFX9td8n6sz62yjTpwt94MNRi2JDtvkQ5AxKnimhsp9eo747PSvW4",
  "key39": "3dkzRsSW7tgSEEedR5BJNhVSiCS4KTquDXvJmjxGJxkj78WE4WnHGBekLqtMUP8Fqvr91dWEwT9HX2FZsHzLgthC",
  "key40": "47ZAheJsv15c31H11UaRfgoHJyynnnfEHatZ557BNP9ZHnpBv1qw68TEMo6uB2BbUktkXqeDL4YvHDEGvP4gbH1F",
  "key41": "3EcGfgBHeLPk1RuX51amd48CNfBhnHkndX29iG2tKdig1koR3ufnz5D5EyJGywGQ2Ey2jxVybBT6zrtqYXZimcPV",
  "key42": "F5jTCWX7AuKAW7CcfQYpaJ3vRf6Z3462hi3oNREh37uad6dCGRrTvDyeZhuUfhpRzHVtGwQivgDPCJY5LCgecwK",
  "key43": "2wPtBC2Kz9ruRGtqwSSZWNteyGkjNngAHQhfSJE5evRBT2KiQ7XtCdXnk22HVwM92ihKroDSsZMpRrm6fzot5cs3",
  "key44": "x237XSYUB9okBGXbWEfr1gnzCrfQPLdK2AEDdrZdhQCgJ4Wf5x6cfuQpfy5bNBN3B6crWhrfeRgsWusBqpshwgn",
  "key45": "4DqmfdibUn3tyyYv78ZYMkKAcCLWYV1hzdZWUZGZhDEisvidex4uxeipZqMVemyvLiPJSg1KA2i6VbcDiFiUDgzX"
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
