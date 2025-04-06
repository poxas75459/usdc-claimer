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
    "2na15WbmLLPb8ZeL4UFyNzKBPXa5muyrQnVnRDzmNmAskmmmuCADsPw9VZyookE1r5vyJU7vTmgayuPm59StwUJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCEc7ZLC9zcYnrjRyMoFD1R4oARFSwhiKAZJXU2WcL6yQiBKMakPR7NWwmSTFwWswwi4upxwebtZyeun5KznizZ",
  "key1": "3mq6RVdq8G6WqsKavcJCKp7CZUEFvAF8m6zDdbSHToTpUc9cwEqVpU5wPmQgd8PEPUjDJwtibdyxyN5HeCtDtfem",
  "key2": "3FQDmXojh58kE5T6eZNY2x2gthyur3pB3UhRq9G19rz1u8uK1TaP45yrnc9GgHSpAze4HW59WcqGnqToiBMVGFHN",
  "key3": "4Hq8pdWJmyThk7QtPy7iaRuEq7eRnmBrLBxwCvnRtaybTuZ5n5ySDV73WLzNLGG8fmiSPH9k2rGKCCaqNJ3VVu2P",
  "key4": "WRJ1u8Lw12hrRHAiwPyYtyZEphHVQ5iJEpiA5Q56SvjidT22VsbofdtNEjGXSnoT23axx26whBYCM1U1FCJJ8P8",
  "key5": "4s41S2Ncn9sXhEYXCJLNa6N4Dy6DDpNgJwqYZdvDM8NV7R8rygEnNfGCdGSR2FnkWQyuTcPiL9XgaP86skT2NpZ9",
  "key6": "3b1wbno9Dx7meYR54RKaHgFdm3ta5mG3ococyJ3QaJ99599N5nY9LpSLL85SE7TaYEd983LfnuRJCjAtFVAaTv7S",
  "key7": "4716kgtDg5Z64q8zY4RxNQCkGznmtpa1kKbyk3cNjfcNDiH76yqYSFZH7tvYiCLav8ezwTkmuFMLhgpVH86sgwt5",
  "key8": "p2os4omszevLbNjVATQtDCZfZ3KusF7u9JyZvv6Khqs1RLjbRnQAstCtEvU9zGdwW9a1iZ45rHdpegsmZP1zMQA",
  "key9": "agEuW1Rck4VgT4t4UwUpe3Xa2LuCiRygWuPyR1bSGeQnCRsNPKkrKkujb5Z2Johjt56syngXe7c1iDjtv4JHVGt",
  "key10": "3VsxLL9QuWdTHaGspH8ibjrDHMXJQ4795BwHj3pfQRJSoz3L2WV283tyDMGBGcn9ZSgDeP2Dqvr2mYgG4vea4Ku3",
  "key11": "2LBcrouyJYhEdQBrRzoQo6r1wissJ432LS4sRM6yW7e2m3iEpe2ooBXyDz9SwKZNT4i3e7eNjDw6bHL4fVRM1rd8",
  "key12": "34hRK1Kq38hC4akgTcbNju84gEzXUvraUCgTmQFo4tMMe4aSDE7zyLzcAdwmESN65ZGJhZ7RZfoSTwpk4XExMA14",
  "key13": "5T5QXLbatMmkRjV8UgDiDgrXDiVNcd6N7cmV1d2bwqc6XCwBqkMVBzbuUP4vA3ixouJZpwq7cixS3aFwnbAoooCW",
  "key14": "KHy3Ec6UtERZEBMQv6dRgp1eQzt5nDFfsEsmQzjwWCPh9ksWMx9uANMvvBATojNRf6jbAfDjwvrBsSoW2np7CVp",
  "key15": "5vESncWZhvsmpj1jh3dggNixoh8i1iwvfhcpsyeToSm1hAdgSBzB91PaGuxhrU553qhbLKPXSYkZmpvgRRvaPzor",
  "key16": "4SkdykFXwDiRvvs8DMMiJhX2aaCGycv2XyZSxbBWWewt2FECBxa9Sx6ud7u9Dp2kXfAdTxBhSzosEcfp4c8AKm3n",
  "key17": "4cDbKWAZFgvxd1JWdWXYwn1CV7CawsD3yMDQwa85FhScCo7UzmWyJ2rf5qG7cWfjftaaAfLebod4JQG9xrsmq8a",
  "key18": "5yCh3QZqHbKbucYmYbaVzysiTDYh1TATwMH3cAzeAZazJUDwsX94bT3qJy6N9kpum2Nh5BZTuZA1tVtrorC4QUBk",
  "key19": "G6irekh3WA7qQHrwFsVRYcBftkN3s7oWbT9Tq2Rcx1ks9UjiASjFrZBqXg2ZNAg3MME3YNq3KrwXKyvrTX4w9W5",
  "key20": "mNXMd6B6wnSMjuy8sZBdjwvy33tsXvbyzMZig7G3FUZNnqNTcbWTBiXDE6srEcim51jkaFo8S9yRwySWWbGjHUL",
  "key21": "4hJQZHHK3RADgvXgXQ6qw5TD45hUwTAEgwH41tBfBgNkcTa5UTUoRvaj1ai2QLDEMLip8b1YvZNHyKQ3HgncMZTr",
  "key22": "3bdiPYP7taQnEa6cK7cjRtQAunUWXpfMayQ5m6LeuDixm7Ej5yX93zQZQ4PhLoW2PzhjhxVTvQw1i1fESXixNDK3",
  "key23": "1UPynjzK2pLJ9EY6oMiF5wCo99yz5dj4DbVvchz27JLEat9y8Q6kfoyveRi3kZRsfEZgwrTJmy6BVrrpAJuBEWD",
  "key24": "4RchNEjaqJi7ow3bpZabd3Lu6PYgXW4c84ttfXrAUiq1pzHTkXKH7JyxGKYrYQq43XKEb152mr1SRv8viafK7nGB",
  "key25": "4ayMQxtbdnCNfDawtHacP7mWmC55SUn6K7u3REHLUj32T9aZhYLLmm5uZBhUgZw5TorBJhKCHHoxsVsYRVo1K4eQ",
  "key26": "2yFN7hgRjFnCYjbNZVKvmM37wAfDF91M2osx7SSd5Ac1GipUKJznLZswoLaBZfn9kFqFoVR4DpcDx5XtvH8vnXrX",
  "key27": "3GiNud9dMdXWWTDPpCxedyAeELmzxwvgWYG26BqKDdKRYnNnsbufeeU3ffqJVb72Xofiy3Xe8eVoAiBRfhJtn9Ux",
  "key28": "4vjXEDREwCEXb98peN7Dhwjfnqa1BQQqtbAsv5rgLvBXhZCESTbqqwc6hMBKfPgKk3hKQqk3Ms3KHCky3GvjuDv6",
  "key29": "sJTRthYye3h4S7VqiZjMn9JWGJYb5aHDmR7hU5QiTqAYqrhvFJcwn4aEy2xLtF2JvLCyGLYKPx7pdJpu3fJfYjp",
  "key30": "57f7zo2g6itW5XVMoGGmmZsitBdUmt2jwq5kGC1cAVytLUxDPbU5AKD8YM1DqGL2n3Ccn8A1zXk917MNZdRjC8GK",
  "key31": "2HF2QqGVxyPCdPdSuiCRu8afQ5wYhJjtQPbyqMJzuCPHRfdboPa5MyyobopVFXMd9VzGtVmJBYQ8wmHDin12puCJ",
  "key32": "hvxJWBey338icfYtB8ZxTEvipSskQJN6U8ZrTFUBRcCzv8LcVX19PEYwdG9vYRAoqTLKDqJV4mFsyGVo9TZEMQB",
  "key33": "3XtpWC7Da8hofdsnJf5pMsDQEji1x9X5zr6mFwkhZ5aXWMypHHDPQRWhey2z2Dsc4nnjrayaaL5ri3MP4P3fQzkc",
  "key34": "HY3YUx2Z6AAhNRCYrDuHHx1V28d7RRY5MCtXMmfmSf9epZc3FoZu69X7xWWhQqRuXx7YunseFTQTjeMDvNdtoGZ",
  "key35": "3pjfG7HcRsunDH5sWhPLk944vWdNBaqm8cmZLerfztEuidiRAyhwGt14GUAGzhk6r6LpXoANN7qrXZG8eHNKbCKt",
  "key36": "5xYmkjnqAAVkQaES2gm8rsNGRxmDHhDfzXF2poRPUrHTrHb1PQCHSEDKSkknei5hjVtbHWEHjxebVoBhzGVPu4FW",
  "key37": "2PJ9xreAdoy5mMfK6HvnxqymPiuLNDv8zy2ujANZhEDGsM3dpjXkdh9YoCEoxsjzg6ZjyBh4TqJNhup3trBVoGvZ"
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
