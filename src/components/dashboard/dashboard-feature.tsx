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
    "5pWP1mrvJmA2eWCXJa9FcXQpJ4WAH2tSAtnGvGVKktyS5ZN34u4j9EpPdgKYvr9YzUGRPatsjNGhKiNweycBLfA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecpP1u2D4m33MopTwGsxNN7Y6CHZcUcVjvSZywnTsxrjuiCJcTVTiVGwEd22muAn1ASj98niTKuHM9CYZ9vXD6S",
  "key1": "5vcSSbLkW433K6UXPm6K3eR3amXifVaa6KdDsgRTgFYMWhYar4TVTKJ5VVNvrAMNzH6RofQf4pHUka4LPK1pC4pu",
  "key2": "2WRYJw8wQgLtFxSRHGewvWwe16fmQ1e9yfY4unGCYnj585eJBjmS9GJq1QMESUYzdL5oy43nYgbSMgf7eQ5hCNBp",
  "key3": "2XafyoRXSCNcP94YFhtafjg2y79rENnWiC3ZmR5cTPN41MSavFJVVLv8E4KydVkrs16CQW6epkaqSErMmagyJca2",
  "key4": "5vn6jNFbsQYd4YdMaPjes3tYrXskXDayxZp5HawHLnfmZN24AGjqRvCh14E99XoMscW7FY2e8Tg2EZeVzaBmWbpo",
  "key5": "3vvY2Z2rx8jTUGbCdwtK5katdbyL8aWMf8HRASzAUFDiDFGPKQd46emo1jfsZHuR7QLpm9HdkBZVzHQ1fx2D76dG",
  "key6": "5qAr5PkJ9XNX92DkfNYdytKVCBkCv6sHCpjLx4vdui8iUXUBDDrwXqxkQuw2ysUpbWro1Fhms93NpmEgcYpRt8rX",
  "key7": "4rPfsCPhoLqGr9cDHtMmRb2KSpk5mdypWg8mfsQPoP895zoTmecTjimyoevrbLU8T4H3twXvzprpzp4qwKytAyBG",
  "key8": "3YbrdS6irjo46BDRWnBDXHbwLhxsr8qGN2AVVMULskRaJcUgGTWiKN8oJi6QNT1NA8heM6AiUT6hYhtGvFGnD4Dq",
  "key9": "EodSFgDveX1w7tH8p4SvsBM1QRNgKoGKVRw8Sq2vvVry6WqGAqbsL9mzMCW1LLXhZ9dsC22whPTewc7VipoGGTf",
  "key10": "2bzSZ7NUtc8Z8D4scHr5vfkEs64ALzU2ox6CFT3R84RKy35qgv9vBaLU9fmPXiNnT8FtmsirEGnMiPBCY9eJUvb4",
  "key11": "2hTdxsaSgyGfauQw9UQ8G3TFddNWUFTFaigitfCK2a4Tam8i8Fdi6yesn4hPcsSH4FtXpwqfVQKeeH6FyfCHiFGY",
  "key12": "2rDuFoc844hgcvcqaGE7jkmmHxMLGGNALB8rUojVv148J9cvrb8ztbJvAACPUWmDPb67yMCpRirMtbRtv263XEmC",
  "key13": "jnH6GrwARyUmSzdsesFXgbeeti1GwvBsjDndeC7G8HKqtEkBScvKWeJSXfper9M1XhawoCmaW8obHFohXAB4tDp",
  "key14": "45CsRbB3THPuNgVtpYmfCkHSjDYc678tuE23eFFNfqCeuzsT4FKhyAwFhuwGkWpxzxkxhpMqBachiwQofqhFsb5S",
  "key15": "LK53mHr398s2N1sBBg4rU6Z1emednqG4TY6iZWa7zYHGWtUAiYvufitXnZ3T7TpAZBMuEzWa37gHMK7TP4czqwW",
  "key16": "3birdcVWpWsfU9ZCmpBAjA3DrtaQqCmiD42Y2eJfdW4kLnpmFJV3sX1zwPFns33TcaGVgSxFDxFdgh2Y2FQtecRC",
  "key17": "418fwpyd9LS8fcUu7tfNGks6weHtU56NSqbdmNjnojqGUAN11MmXcGpnfdzCHAkKW6eon8pqmfd1n3GLZGoakHcg",
  "key18": "5VTrhGAZBPby973fPztrHobmP1f18GgPFHASKhq8noDAMi3XBjGJswnnkxQyaG7BhRN6JYXU14UKU5qvo7F8rHdZ",
  "key19": "2mDapZAJQ2Gma9KKtiJvTAzrLYT8vqg1fCXvXRC2NWQAEwwkN9eomRbBWoGq9dQLvjYV3zKFEH5bY8eg2HJcVmfB",
  "key20": "2U4d7R3KerL91butQ3DaY1CqBJv5wYZe8ZVKpoaqnUz9dNDGKdikyqf1RYt8TU3m6d7tRtunusj5cXS6fSqyKoUE",
  "key21": "26tUotYErGa1FeK9teYshncYrVrVKB5eNCJkwYq3qsYjdZPT9gzbhrhhHeQFbptdMvRp3u7qFz43ZQW1hTuZWqPT",
  "key22": "U4wFfTJzgNchYp5UpMj1BnuivUzKaWoBSNSA1NZuw9qzwJFZR3rsJ7ox5uAmdN6hNFS83dLeJVcCPxtoob9XPzG",
  "key23": "3qKRNvNBKkZ4gTnDt5ApGrpzBsNJh1JcJXWQcdUBxrSMbkZYeik3rNWL396YKuVE4YZyCuJ5aaUEweiRC1So7zKr",
  "key24": "55haX8p5qCziPVpuErFSvMADvNdRKwAxt8s5C1XchNgq87pZ39QTuvnMvZEQq22aN4h5gdhFjD3tSpvdYY4uU5uz",
  "key25": "3xAJHKf9eMb4rkXLJBYh9ygPnzgNiCqT78W8K3f21eo8bBgB2MpnJvQ7B8Fu7MEwpwm59jRgT7TRbcsm3KXamzGv",
  "key26": "4uWc2WVzpxphiVXKGVdTeSjiKmAXcti99sQyuSXUcnTJoc8SL4B7DuZt74AM1fSXvWjHXEhDEuHL1zNR14JkjQ2n",
  "key27": "4iQgw1aKTmRr74MrKytd8u5UMcSQ9HCRCRYd8wR2V8vYXR67gZrpSyNzQeCgjrcqRnvZ9nouroEmNqWQMp51rK7u",
  "key28": "4nHADzHzaQt7qaxFxyUF4MocLVordba32G3vKZ53JtZ55o933E8NvD75ddU7cfHTXcYBniAithe4cAQX5oSS35NN",
  "key29": "3DfQZLzipha8TJeFB6xhSwvoM24j6ANAWouVXEKhQoTQo4uzetPS8uyCuEH4e9ArHafYW8hqizAQQMgRaPyyimyA",
  "key30": "2yCZvrHvG1qHq3QNtb115UAA7vsy6Gn9tdN3Lgkd5TXnQUtUhvDdancpJ7C3ZCUbbqGkfrQukzr7WWfa2LijYNzr",
  "key31": "34rEhCw6LvxBiTcZBi6TjpfrbeA9Sz1HC75DrMvFdorbqqHa2AQzjM4MRkZ355Kh8FHrdCUKvwkAv7irHh5NQ4X8",
  "key32": "3xeLsy2jRCT98XnQCe1kekvjajTAYK1EET8rLEQvwApanBn7bXscyNPi1fRuPsAWbbwZUH5ZMkZoW3Ld1LntEh7Y",
  "key33": "4ymwFgEyfAWvJubG9vkdsZXCfuJQUC4mQPfQYo1D6HmwgHDAE6buKXzX1dq9DyCrfAsGDPv3Db7Use8ce4TMDbhN",
  "key34": "3HgbbNY42C3NHsd47DzH5DLk9EECueSgwWD5nVfvRBm7FB4oaf4oFzCoBi5i3aeUMbznSNMi4dfg723V9E89tMkh"
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
