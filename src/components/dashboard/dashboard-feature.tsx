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
    "4WSqvQauK4iNSVJR8NWerBT42NLve3njLmxM915MkdjqC3r2ce8wZHJRMb3oWSar1ptm7Kv2z6KbotzJzoYiF2rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyEsi4hhoUv4neHhjAejYW6My6AT4fjHemac4xNTWG31vHY8bSpQcbYRbKt42gNfaVpHfjC7TkPLDnwxm1H2XYb",
  "key1": "3NBZTecYKdk74z4z8EA7JmALrAKzCd8nXFdYNVYNQyMfKZytRyDAXCkhPtXo8DkgwEdmHmghr2TVJCQ7mYcApkrU",
  "key2": "2svTKA7xQF2gnC8sSCurJeGA8bCdTiLaXe6Q51KSZCDuSY2B7kGquQyJ3YR9o7GDcFCmpPnzgeW5nV8My13vQYt4",
  "key3": "3pCBqF3eDoswn8E2LGkNr3oQux93xd657a9QCQv32in8PSoFABYA3u3yFDeGScRRTLzufn3Y1RDxJ2NSF8iqECdf",
  "key4": "2yqvLhcX3NKkX9C2NBmTT52buur12ubtWfQEEEJ3ZxwXqDyasVaQXsuxxVc491R6wcYLWn6sAL3Lr9bsUnonrmjN",
  "key5": "2A9FckbKH52ehxEBPe22qvNmXhVpcdKZHatMfjWndq9WoJFcvmkf83jK67XFKPu7ZyPKXSuTgbybimXtmweUtBwN",
  "key6": "2bNB1eLAP8ebcfxGLvfC6VA78aAYKayDddpWAskyrdU2xKiBGBhFeq6MPQ8mSm1G3xYMHLFUEKPESns12owfR9tW",
  "key7": "5DzqqRbxCFd88cTdoqxggM4bLbqznU1HgYqxndT33aYddJ6K7LfE4ioTA9exU3tjHhgUTdZXHEsSqGyGNkK582VW",
  "key8": "5p1cb7CU9ZGTytSb65JJ1ELuxqWB2rKHnGTBj7gWtSC7udxbuTL1AWjTf4Jwvn6tj7135Hw1P8TaTEvT9VdgiYRB",
  "key9": "5pgmeU7cH6wdJMHBBXYXkTAmnDYgRJS64mL87HdRMja8ggSyusTgVN3gz7JRKkweZVvPaQP3HARQMUro7VtZrmDG",
  "key10": "b31VF91cV16LMSSj3PVVAA7Me684m9xzHmoCAtdE7hGZDj37D7peiinHSh4fHKrFwkvNB1ior2Y3roMEivMnMDg",
  "key11": "3XswoUJALn6mSknkbt9twMeUdsrkLu2bpxNrqM2ma9T94uHDsLeJxYujZBg8yFg1EAzsMDCiJQ7TkVXTf9GhMaqS",
  "key12": "2fzcZMg3i1CyHGtN4iw9LvL5kVY6FnP5x9SwKHKXaZXg63TZ82wC1CiDZoRDnfC2R37AhUZV2FHsPy5nCcB1oQ2M",
  "key13": "5kZYjo8fYjVn9ZwkHAhSBmAE8ww5wULtx3hEdTQrmTkobt8L6atS2Y1CKVMPb1MhW4EAkBbGH3xp4yo7HFm6zJr3",
  "key14": "5bVku8yBdk2N5f1uThHMWbp8bbiczBfFFEPN1m9pF7fNdNYP4631vSfzBkaW1xkWn7njkiTWe9T6JubFDnvN8c59",
  "key15": "32PWd3YCXW5ZEvTd3UcU3dJikgRPJ2afrSdtX95xgoTnGnyFz4Cio7yRdVEAP5bx9oBBkiaJSzVLCgqxj3SLtkfU",
  "key16": "5VhShA6aBRbs8fmnVEhWzhAk1XMs6dEg3EMKFmaDDs1k1zRreRRBkT8fCdp5tx9n8PvsYNTKDwgxAQfPqukiB55b",
  "key17": "344zo5NAoG6nzzaVx9J7832BHCKFQTGdJWkBmTZCe5KDgnxd4HJbfnbCXeRi5CN9NBrY9iC78EE4VvY1WAWPcxPk",
  "key18": "3WgxbBZAsA6ojFffEf5pgA7g4kmfovR3v3XKRrfxZifjMeApGePTs8MeqqqK95fdypvEXtXN6D1FrmTSM56hvvyQ",
  "key19": "4nk6rtVCT3LF8NgiY1Gmz5EiuAiiqR3nnwMoMEwnk7qUBD5MzJCio1MDKk8xnHwdLfXBXhGaUhPfZe8b6bjv6Xkq",
  "key20": "4kSnb6grHqEAZsj2X3NgCzgRJiANmF2JnLw6CxVywZTeYzDRxcNa74J6ruEHbgUpUCc6MaL9uGXhJ6tVo4qjY476",
  "key21": "5Z6RFaS4DBpZwf7M3dzkVxbCxXEVaJW2qSY4jeyzSMGYqBThtgmgHrC4oSwMYJdKLM5K3TmCPhimQfbaATebRMrW",
  "key22": "5PhrHHGyhCg4TEJv24pwdBe1hsMfhj6rvQ5vE6KNHQCsh2AUmSWs5CEZMdMHqZcdQi8LNkPxQBHJV6heKKvHpnE2",
  "key23": "59ELNjc4GgSmcRrvcDvQa7GeWJRVRHXFpv5heXz44xFafS7jjD7S22YbTYXQF7uUFgMJjXk82GfgRNdTGhTELJBE",
  "key24": "ooQGNAkugpm4t8kzXLdNL9GMVPUE5fDSaCSiR9NkCjWYpKXB47cszbftX8ofLm1ZkRGUjwU7q91pssF9Vgdk442",
  "key25": "4noMs4a1uf7EJbXyamtPfRsKJMCGja6fhTgQpGxAUEewQz7R7Y6CZyMhqZC3AxtKEwzuexH8t1RusKMDpeQ3Pw5h",
  "key26": "3rXFCibRpsNhqTDgNcpFmmwd9sWRrVFaqCFLv2KdwTvJcwyWF1GWJPL9gq6Gp1r9fxm88mbKqCR1Xot83E4pn8MP",
  "key27": "3YRJkhVtzPgBJGbctVzf1EpEnjX7fdQA51MrE3FNdSFghenj5rLE9thJ7v2jK4gucAG3EshGkAQPz7aqA3podPGi",
  "key28": "fEcCjxB3mbmmPtthiHhRdwEvLTErvpLgBoE1NpnhkwXiA3PWne5mDf1E2c3DeKfTP3QBG28jkEjawsKzTqwfyrv",
  "key29": "27iZyjmhktrMMvtNqXd66eepwwGCqbax3X8WG4D4BQPkGGypCbvtjXE2jevGHPRdHfy4BpfJZtfuFHVFABACqpKd",
  "key30": "54gdzhsNhKuYmbL7xVb28x9eu3p3VoJDMZfscWg9rMaa5CdMQMUwWFVh1XLCsHD9cR3g6fRhtTWi6Kmt5iAJczLf",
  "key31": "7KVCULTLkhxX5adAPMqHXQuBjBvANWccFnC2fDCRtKwHGANwp3Ce1q3WJ6wbXDsNotqQSUGFJVUTS2mYMB2unV1",
  "key32": "47rg5kJqjJwD4S2yw3LFdTXYgzfo1EprxzLbn4Bzr1kKBYccSjAKNzaFXTkvD1jsq1v1QCQGnHsX5SHCgPMwNHKL",
  "key33": "3qB7tdJXjwccdu6uSkD71x16hvQCso5eaT9Db1MF8PS2XBKMFMWnyXTdetMhVevqoV5xWQrFxxqX5qoYN1T6ieAq",
  "key34": "UyvzM7ThVQuCg36gvoFDDRBPSS477cGdU1Yta4g4kwZncp7YkuwkZKmWaGXjWp5EHWETpVy6fn3wy3EwhRfGwZY",
  "key35": "3DaHnbgBCEf3JxrqmGF6ALrLqGJox11C7Qj8sxbi41kBvWbcSr2LyrPbKzYXiBpVZFX3TqiKHopcjHt9gGi9HSVJ",
  "key36": "Rgutse4pKMH1jTi1iHBdbxnCkCT4fXNb7TVsKF7qtzKw4UKn22gjQJrTtnz9h4SFvFPGdBkiQR63tcRodicd2Lw",
  "key37": "2jCQ5x4dMNDQDjKQR8niHBvD5MgLf6V2Mon4Ek3B1AvS5pXkDaU2T5dfuz96VL51oq983kU5uuHnu4eKAxBB65Ze",
  "key38": "2CNWevpkZYvUn7v31c4nFzE6VA33rnnEHzxP426ZgSaTSDxUBLiRsm6RePLAgAJqSYWZTe1aosK6VL5i8aDnxvQv",
  "key39": "2xa7VQgjW5L6A24e7u1Y4BPjqKBtBwdcBUvKXUAcFjBnezRL8HGBb5gP3VCJeZ6w5XHUkUuiTM2srhANR177coaC",
  "key40": "46s3nrEW7ffQotfhKt4xiqtmJgGmPx3vbZkE9FGgWzqjpxFd99XxpkUTtdHL3f6bRAbHm9hNvLHDtNPj2bXETYVX",
  "key41": "yCY76mCXNbWZrqFxcPsdCKZeKBJgVjap7MPsVM1WZ24XT7QvxkfYoTswQXtsJ4jpZopKuCJVEzbnnhFXXgZQhfs",
  "key42": "2BMPzXzkjZC6t52nhsQC82ggnUxBWP4FjTCu7RwDQXBswu7MkPP5kki9KHjXXimh6LWvy65uu84RJTs3VFgqmRee",
  "key43": "FiZ8F3cHC9GEtnbPhx3dGtEtrtvvrJUSzbmhhudjQ4v68o1FA2amHw6HPpMK3r3NZ3k7VHcK9jYASYcRSh6LxmP",
  "key44": "5WEXrne1ts8aKGB6zTdi8DPKkjPnyZty6nW6HfQZ931UDmVLL55anwn6pHRiKfPGc1LrigFYjfF9XkRj9DaRvtWY",
  "key45": "2k8ydXG9iwQTw7BeKjpzqAfqc94qpnsrH8V87eo9SEydVBq7d3k7245p34dyBdiWB3MvmCXu2rqUg4nRbicv9wVr",
  "key46": "3W6y5RB9YcSrvDLmQmxrZgwjeokXuoFMqkhwTqZwrBSjiJ5vpzWQSsLvycCfNXfKm2ftxnG63A6CxgXKarVw3gNH",
  "key47": "3Y4YnQh95HnGBb4Yw8VNjuEVGvt1wXnCwuSYewAW8U3yNn1BHPusrti82opNypeSyqk2t7vdv5v3ZYf5DuoNyuZ6"
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
