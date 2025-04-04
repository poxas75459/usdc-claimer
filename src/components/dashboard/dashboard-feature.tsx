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
    "4sMJ141zhooKaN7Cejom2pMyhc3hFHqDH1qndFVRzCyJZMXamgA9iTxPHKrz9GtzqmgJ4CX1eyJLmeWoAsiNBcZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVx3UGt77oU5J5LS7yVguChAWQtAKr7gugFjKxjuBGgWJ7FwJrG1gPoACZUjTb1ByZ1y95v26P4zZYxZb2oyXP3",
  "key1": "d8dYwjdHgogZacuTvt5wsX9on5X9vYc761hNi7gnMR4bDuAJRk6SfpzYzup6QzW3z3DWKAiXBLBMhBnQet6iKQV",
  "key2": "2MNKnh7akoxiHnGrUv2pNKLP4vmDSBfyPxJiAKTr5JwE2XvxCrytaStZp6G8zsVY9vL4NZmNEtD6GbLasvpDTEdT",
  "key3": "59WbiAapJ8oEMvoJoKovTfdkciQmGc9WubcU5WpnSvtxaJFYHcY4e83p1MHGPZdZfgzhMvn9rLMyhg5yh4vkJw4n",
  "key4": "3Ni346PrPBkyyVPcKpxWDJ9yk1TJ4qCTLJeNnWihjXDAgvZFKGqKZiLTEzEE8sPopk2P8EkG31R1CVFxqxRr9PLA",
  "key5": "4gzwvu59vHdhTTGS7EFATh1jfTvTaXZE8RY5zjUM8fxYzspf3MbJ1o28cfyK9mDWVzVyn1z6eVtdCjQqAfwQH519",
  "key6": "eSLByDMZ7iQDYtEpghuaSSweXjQmDxTSD256opRstErRoU44Dx7S3GTF7oEpyeW2cfPZZT2MRVJY8R8gUMn9At1",
  "key7": "2YeCCGtMhfsjZASfLeW2diToPMJbgYN59VeerrHYtGS2ZA1E3XDbdLqEeEYg93LnaWhSSdmyCqgbFZ857vPyRJzZ",
  "key8": "YNGdVaMPfPtVc5EkyXvk4yWEG2oXnNoWRLiddFY15qELgwJiFqede5Crv1xwdfRiECGALfgaM8R3K1pAPzJMf8h",
  "key9": "3v6MfxzHWiw3XtWycVzRyKFNM3vESxkGTJKg1ETzi3AH6PcvJHkyhaEohiFgzbuvHkEatekuaAnLzrTHtxyXQSYs",
  "key10": "6vw6GxbUW8qZ1i2C51QDdKTKZHfdJqwdHUQVW7eSe46dMioX1qtyiQcanajFM7wm5W6sGDEattwQFDNTni6QYxW",
  "key11": "3gqqWBZwNipTsbNUHurMiYyrJ5XAc3fTtAeZF9CB2gq7aUrgBPXp9NDb4JM53gL4ZmXzYBBqUcDSDAu3rfro7bTE",
  "key12": "2yKJJceiwRJMqs8ceXrfFx6e7EB6MWiRD32rMvE1heet2kYbqe62iCR5BKZQhkUkcPaxz4XZFnzsW9PtnrZpgF7L",
  "key13": "4NNHTYQpRPtGCPj13K7j33SYnJzjahdN463iKGShxhJVN3zrXCvDzKSEn7d1tQnjfb8NJkxEXkSUEewzvr3EMoYD",
  "key14": "374WEvmUx3TT9srrCxdXUtUB9gdVSneDrEfSDtetVMje6JPoWetAphPjQnnbqM4Dm12k879gfaCTMStycLAGfuox",
  "key15": "4Yqf8CMUCtDv6kwtC4xKZ4BSY2tNZytZkZhEzGVyinz9pzDe6RPKnKfNiSwMHUPN8LhzEbYkggxxc2ysAbCFzWny",
  "key16": "3wWYGtnuuZukMiLQWysY8Lv6SZj7gcmKUyKKzDDj3Yd5GQ7UbaSbNwkC12eJxqKQZvmggNpjf5EoVfPLhnec5ivi",
  "key17": "2bnXif2hTsBZKdAaBxGTwRyFwZRcEGowFGQvX7SFSvGd42ckM57QcT8Ci87rPvXfvqQXbqHyBmFPEALJJtcrnJuM",
  "key18": "4PiVv7zS6sdz6cnfZMUraRfiZgCccW72waqFMvqyhNQW41GGsha6MKW11yeREht5emnSPPYhaJXEFePvwKdSQveZ",
  "key19": "3AYowFS6gKL2pPgUrxk7yPhcbEm5vj7yX5j6fpgLTYfVVvxCJEZBW6ztLxFEHCrE5iuenqwvcCjwWGSxWn2LzaF7",
  "key20": "aDjLngd51jcCUzRzAKRoJpCcw7paYQmXuti8w5NtdFnbx2pxXZDiBpFiLv69tMfiWp9o1c2dY7soyFBTUbM1htx",
  "key21": "521mqBaJMfoxPHXdGgBqYBKCNeBCH9WmiwzVxMm9maHnhtsjNR32mJZo6ecQQHMTJnN4QtP1AnfjafrBfDYj749H",
  "key22": "4sioo28Zv2bHSrMwUdaXcmdaHKdNxXFyM8NRF8gMRvoe3uA55qKnqF7hdQUKgSpkFXdEMdK7MNXYa4oRsbUUZve9",
  "key23": "3F6TRq1N3oFUjTkrx39bovyK7o3Qp57N9oBeJDyGcsjmm65Avayik88HyHtZDm4pQhioWuW1yjDv1WzaRtdQ6DRe",
  "key24": "2sj1LaABSht3kVfhyDB51Sfg7WvgifjeVL3FqeRzYppsBgdJQQMdQfn4E2LzcGuzfHFp7re3qoHsEmdA17HKaZD",
  "key25": "4w2RkvDLJDNNG8TcWMsPzRGxdWzbKd86oAuuVpUDciRmRaGeYCfeMxgUsY1fjLbUPtn79wfmg4ohS88esi787u76",
  "key26": "3XZ1jstEWhQWHuDVDiW7qipWCCMGYS9vd5CKNS24qvAJZzQdxn5Vp5YzQL2puc83gePdJPdVDu6c3fLy6xuC9rgj",
  "key27": "4uB5C34ufcUQqTsW4AvU7ysFf7UksfrkMzbQCAxX7Gqje3iEd8JwkTPmQS7juH4gUTFvUMJEEkNuyp2KQmfU5NRR"
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
