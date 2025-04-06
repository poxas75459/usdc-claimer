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
    "2cjZpzsdkL4iMLPNnDzqkH5f2PtpD2g47hmuPQQrc2NBaFJYfm3Ww4QV5g2FZSiMfejcnBZ3EUBf4JoSS5fityu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43pxpGkrHgrvtK2bq1ZDeXk9nJsRABXapyHGHkxXbyg3SL5Z4sBoxYmUcNyp9eEzX61VYRusxo1ioGdrNPY4KSJY",
  "key1": "3GHPpjZqCUAgUQxCkD2LHRJpK5q78y8SY6cnH6cwhyHEsafHQbh1py5Sfgfy6YkJHXzheVZ1iCtz7W7uJ5TdTHuK",
  "key2": "3S3oVDCe7J5JVRFGHbSDABwLmrJHXrbhjKBkKP1UBVjAjHtVauUQvrA9TUPDzsvJo4WpzeynoHFQxMbSpNgfipmX",
  "key3": "2zqhJzYPb7Xz3W6bKXZTVEVk1fH6bWCB5oP6pGphnAPxzsxqk7SNQuD2EWsSoTRjGLxyRNgqde3sYrwdCh3HfcT5",
  "key4": "zGPzBhLgLwA9QpauDS1MVPQMVY8umVEiPcj7g9qFQzr8rTQ4v2uayKc7cgcsHx97SF6UtciL3kLp3AzNAoNXm2h",
  "key5": "29dQ29NgGu3C4FPKM78SPX4RgVtzomJrYvGRWCxMHVqwZroMFJK73uATphTsR7uRNcxqF3xRSwi9LuUFya9DmAVs",
  "key6": "4vfBYHSYtDNVyakVmsrsSB7LfYP5Y2iXbuTwVTwHSMFmZ4fFWXDgLEpLXWsPXeg1ibMuGgJiKM39Jx9C53Wndpr4",
  "key7": "4bBVdLfAYYCSzG8tMgTrVWbjVKa9AheneiyrW9AbdHFhZqrBUg6X6YwtirgoWBsqtcgAH3vHbr2obQRRoWhHwL6p",
  "key8": "4Ux1aMdbMhCuZ33RNDRtHoBiqyCJpmsSE4iLpdKifkJ9A6QB3crY9jwfBc7sJZN6kD4h6FKRoN49DQej1bcm5yQ6",
  "key9": "43HG8Cw3FyvTX6xR442KpwZLesGwL2qn5suFHkUBdm6aW93SfsJucx928duBDGEajsziCfboLNSXm8YXJeBSEXP4",
  "key10": "5RtZkMDVSyqUTGNa6ni77pyC3M786LdnjRb4ziCUMA4S95UNxuLqA2oryLb7JXv93zBBuc4FDonBghB99ferEdfi",
  "key11": "4E1f9vvLkqnint1iPNprvRrKk4Y74hzjvFvxaof93rfwTo8w3z8on1kMhr6TrRM5o695wZGkz4HiWQRJDAz553sH",
  "key12": "32Kn27v9KbLTXeX1JMCSVThCx3nmHeKhiCkj6HuXjHmaKiCVboa1cvn86RAvAUPMLhnwsrmNS1mmJMTgmxNDS84e",
  "key13": "2fNVtykN3NRTm6R196pxkVNCtbZ5yiihC4UfsUYUtk5Tjv4AcYvqjQo85srVRQtRGNssDahJuXDzbvrdE1C6qp54",
  "key14": "5CYBUCFkEBzSaNQrXP5PoXJ7B5PBHKzCQBCTKbP1JR5nhDPT2s2Ya2h3CEYwZW2PPKMPLRmt6P8bA7i9S8WQrdo",
  "key15": "2JeCRixHXP4z1poZfi5nehLFhJod8vazk1hTGnjJYZVxa8XPTcTBD1gcGZGEvYBqjZ1HnqHHGftRFxjud4nipF7e",
  "key16": "5CSBYyMqH9MJCMTK2HBRdhHKMYBW5zNpiPzKx9kLsvUSgeS4fY1yqSyKrGdBdnsXDT1hBuYudFvDi6DHtLxjctLJ",
  "key17": "Kv7eUK6eU8apog7uXxW5teq99XKuESKTVCTGYWVcUkxs6n9wcnMZ5uBZnyZut8XQShNRu8m6P9wMwMpCsR8BWk4",
  "key18": "4VgGxjKEaRZMco3Hgz8UKEssm2gP4ZW3uNZhfQzWfonAG8yxCLJi1RRxKmMkM6DZq7R9cUMvNF3u5aLzm8ppq3g",
  "key19": "Pj8JXoP52LzvjQpc8HeY8AXnmEW24n2thV6VGt7mjz8odJSg8Utnax35qD3mVwxYgMJsHVmNfHcMAG7L9VVw3x3",
  "key20": "d7vhuXPabXB8hKdXcDbecSifPVcQ6M8T9DDV5PWZ4bw49gcncHx3wp3bwWh9XbPMjQRLNTjnkAcet9MasMwji9X",
  "key21": "q1WBArT9eAMfuSP9ietcVJ6hWEcFi73BL1ae3PGhCifAksFGpWYH2aPhYR4pVFxDMxCd3MkD4aHTu4PQNnNVFwv",
  "key22": "NsmkrnRAoVJeFA51qB4VfZruQbU3t6G6AXviwbZbzKxz7hHRkTGJFefy4cehm6PjNUYW8s6SdUGEpBcf9b7QcPZ",
  "key23": "mFk9YWFknYcB689muxjWNmvLYZ2miG5CyRsQ7HrcFoybhktgJiSwjNBXRPoxbPaPNJZvqS1HK5mQhLvmckaEo6x",
  "key24": "4KqLGTqm4uVSPMFmEECKPCF5Ct7pNTBEziGGUihyywSKGAKBxFDkP2URT8GVET9PXLx4RZjiAPMtbVdVkUAh4Bic",
  "key25": "MDit4KhxBQxKSmSViuvDxGQLqh3ioFt7N2rJYLdDcRFLGm7rZ1RxgubepsP8EaKmyYqxEcoWuPEcVRaEHeUuJNc",
  "key26": "3tvfmwCFibmEneFKV77uprvpRiVtrEK3rx6XvQbfzrhmtDijqXSLkE3aKH6FHNbo8fLSZRvUoQ9f7u3fJak7KXmp",
  "key27": "Ly71jLXDtm6pSo7ECzwPYYZU54kd4GPbLtziBjrVgqbuH4gNW8t1u7Bomt5qu1yzRpbBdkvAfpDz85eta1gMm9J",
  "key28": "4EZba2rjAGKGKH7E45gxGkjJ8v8cw3gPEz8CvE1nCBLTbAUPZowqm3qyyCNkTksMsmwgRRFH8QzMLYgCbddog9ZM",
  "key29": "4mrUawz5TLM2FSHHHqbJEpJY7FpX5qS3Smw775Yer6uSV5QPmCzddLzyP5dbWtQq8cfmidGXqAFaw9apfm8o6vLw",
  "key30": "3n5B56aT4KRzMjw7CStgTgNoZCehijzSME9RFQDvNrHnjZpQEZkVDAVx38r3uecRBi822FKjdA1raaxmLkhfpeb4",
  "key31": "5avWNDHdwJNBwvZonVHzzddycd1tFdE6x91ApCXzCXVGUN9Gzh2gyCxjx7o5Np8FmVRND6T9mR9MbM4s3AERD6og",
  "key32": "5nBYNw4D16U5rZSmwzZTp7mej2gCmxr2Qts7UQGhqGoAxjVwpwsokWY3PS7gr4fsy6dyvetx3kDunuSETKjhYPxy",
  "key33": "4dgvWZzxAwFhUipm9zgi6FZ4dskBxvggFvCNSGf2k2x3HVfufzx3FXJWBSmUt1vwdwjyerWdzesXyJUVHKgB6oNV"
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
