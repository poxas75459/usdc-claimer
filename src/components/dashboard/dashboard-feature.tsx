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
    "4N4NRnKuiJp4gQqBpiLwaa5LvsoHjX1KJRc4GZcf4nmh7ojLqNyKswakQAiLT1SPh3iNzaY7VTnHk8kA67YibWUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eA5tifqRC55RiWthF2o5SXEnEnPpPzwGWH3aCiDF81pLM1RKFs5tTJaU7E3wDGocRJqoHjyGVzHbnWn2UaEUbud",
  "key1": "4JX6bjKfFtR83gDhsNZPQgvgsLZckaG4zSPTSMjQmpobKypaKxEF2ZfCnVdmh2TztP74sVGnGC8G3ABb2yy8s9Pg",
  "key2": "4P7b84ckLAqd5gGBPPPvLHYUUAGDJ4Yu37zfd4qv4rHx4wpeJJe8xwVRR6xauFgu4E8vYVrN6Sf9eVhvMK4j7SRp",
  "key3": "SoWD1EaSdotQNAbmwpm32CLE3gCQLZjrf73DfMtcPaZKJs3CTf1rMRUQ6Wc8kzTmdRqAF7ZTpz2tg2UQh4pL2r5",
  "key4": "2y9H3nJdJ4puk98YeNAp1AAo7ymts68QDjVNCNMDtePtPoSd2jMJWAn3oKLxwYvf2TAwY34LdkVdsVoMLrF7Czf4",
  "key5": "47bYsuDeTC7g7DhUT4rBUhxdsraMguXQBoLmjt3nidivHJdyHVqVAXpDAbxFczB8YhHsYauBrWQ52SZMNQk7Wv8e",
  "key6": "VrGiSC2KUwVGz55exCQYCgtZijAswC3v4hJJQtYmZ63VAnyJXzLgHRmw7WTsWq4Us4emYdKgcsifXzWPiDzWeZ2",
  "key7": "Qryy7SfamGAA7E95Ct67efZCBisXAp7t6u4UCY7jNB47FKqurcq1pySi32akS8E4qGQwsDqBeJUuWuhAf4LkwKY",
  "key8": "e1dnJWgnj2Uj1CDfxQmH963LGZUcfEjRz21na3B949CVpH95He12zfYXhqfrCuG53cusPcgBLdDM7CTZKjRLaau",
  "key9": "4DJzfdw8tovpMCwtWU1Vq3Anx8XXe2nYtHt5vRQk25Wdyhwhd1Af1UEpyXQ6w7aY21StjW5yashDZZwftEjGWucD",
  "key10": "QdJw1L95ivAFkjnhhVG6a4eu2tbc9qk8t6QSu4xfeg4sYFvapd5y4uiCKXbDNsJb3XKXvHdGZrFhdniPjujnJTe",
  "key11": "585MtB6icwYd6T7LhWeZGmDnV9Z8V8FKtQcAAzRNocaghDupDfsvNEQMnheEfsUss4hfMFUb3KfvY28RD8FRjE5E",
  "key12": "sdt5PRyyYGoxQ8HDRKmiScDvG9kLB6XfWkNdFxBqKB929chA91wCngofywt2wxuHgw4obc56zfYAXeimEymv8Kg",
  "key13": "64LhfgW92GuCbcc2r6rTxNyyDAk7EzNPPuxedR9mRUxd4jgQGFU2cojYs2SFvnBQmf4Jzu7zx9sbcYnwEU2wrPXJ",
  "key14": "26sKmbRWP2dJNBr9UzwfrfisGer77iAcicchUM7MtaSGhnLL5i3AByCkhU9QZmsc1WuTkVMm6YydwctLLdxPSFt7",
  "key15": "5GErFT62NEYAyai3S5aypjV52cDFFgHwKG5Cu3RLBVA5p11S2AthfErd6UY3E8C5QdKfR9NxQjA4BbPMbS49vKjQ",
  "key16": "5mVfG16mjiYJF3xScvVeepHHSoxhbvvZYMyPtJ8bJKnEzAVtGF26LVSSV8vNULeUVLvTFmJxim9xuT8fE9u3HvWD",
  "key17": "3DQWLXjR51cFZo319q2fGCwCgjhEHLxJTExQYf6XzfsAFiVwcaAY3QLBR6QjKChrRSXgwZ2bMpqqj2DyPooY72eN",
  "key18": "33QL8JS2jToUdPgHWYGFPymFzezvxT9QfYYb8zPN2RyD7KeeyzBBb89BGCKn1QumLxFL3MthKD35rA9LkKufkSy1",
  "key19": "6q2EhyQbBnPbKkx7E71a7UGx22QQNSveg5312iqWgj1h3RzC6JGwVdBs9p4hgEiqaEDUqSnMdvynXWDK2Ziu6Dy",
  "key20": "3GxHg5B9ke1iTsBEKLQVcqYA9rxFyG2XrjyJzUhDwCBLRGt6QEizdGyD9sA1csyaSsHUXNj6CUUg75xDVuGECWFE",
  "key21": "3jeT6npnoVbkWMsQr7q5ivrudgUjBthfCd3uwPkMgn6fRq7oYWdyNenVcQJydeEvMUmD335Y5QHvQB6cYABbnm9s",
  "key22": "4C67wDtWMxa5qbtRX2qvbZzrg1KC7TSm8mzxfQ47cvQBgvQo6eSdscRXDUzZsbPGf1HDZgG9w9zsx8M7nUAUYLjE",
  "key23": "2E9K8c6KffznUNCtfov6dPzEa4KfE94sbXu76AG2gZH5vDzx4HjjR8wshrkmWw6NQL6iE2o9EQqUA4ek4eF3hTp8",
  "key24": "5784X219cjmKjwtyZWqLwXWFRkpZfauyVTLww5YNp5ni3FwxgrHCJm4xaf81jB4iS4eenUAXSmrwsK91TQTkVU3G",
  "key25": "4M6XkU2PoyiSdBHpuTHKxQdqpkxBqakWVKz32wHPa6tEnPS6gbum6TphJGJYFVpvkisFbXUjmufdFFbiJRVB9Go6",
  "key26": "5KrNqVz1RtpkzQ7eR9zhJckWfvBwo9q4MwJ1ugKBvxBUmtVc3bfeD9giur8xxALmvyfHqUmjytr3DRhQVjdR4npK",
  "key27": "4SvHqpLUpVzjkc2f5kDoit5LZ4BACW3Rxf7cCfN2RBmpW1PkFeY9EQ5WbLpGQKt1zjz2XJz5xUB1bJjstXTsXXvF",
  "key28": "5iJKsfntG1HosCZqAy1CnpuiUx5XnZkmgF7jtuWH1wkP8mvPxufoUreagkCLjFR1sJc85Z64NamJh4HTgEhKMmtR",
  "key29": "xL59DGEvGJbdoqjN85pf4HAq1v6AuzmdjFpMqGEvWPAwxnmDwpy9SFGUhWz434o87oor4g8u5jb1uN21AsLnEzJ",
  "key30": "QdP7dEUKwosT1iY1SX3fa3tcSq3653nifgQj7JosMpRiL9YWmbGd7qWNSzxK123Hc91EBFqTQ5gLpyo1Ko2fU5C",
  "key31": "2ydpFBfA9v4B1722YkDNhGPPhcuNjTaVDtn3KoXipj1Szjko5mKLLWESav1bvpRABkNDBTajCeDCsJNDmn49LJgG",
  "key32": "2Y6p6bsXvHppveF1efKpkdHmzSCtEL6ytUvE6Sa1D7oTFgJ1AhNG5HnKuvv816utd1geLm7ahBbTntPzvCnhkoQi",
  "key33": "2cLe68qAufn2116VU4ZgfvaY7DAcnfRptL1PwrZD8d4RRoJ9n8F4ePktqE7s75eFPQMjWhxmbtZG4BL2eNPRyEr6",
  "key34": "66ZpfXbohrv85zFdYiNVKnpJE6sLSJSCcADc7cQNzyWcqzXTsLK3KJNcQCoeyafQ1iztiTKQHbNkReJbLVB8vegv",
  "key35": "5p1U9LznJhGuUkJCJxBjuPfQWqmezcPLG8jPoYgKU5vXPggLrChocE15WE9woxoFTJZs9AGXf7Y3HKYqWnr8BrzG",
  "key36": "51RziQAwqzyLk3z5LfVsU5uPsQgdufkD5243d54bAMkiLaxB7iiX6RyVm9F1ZinbRDN3vZEwD4JED6hgdtcLfxg9",
  "key37": "6243dVGzhJjjAUs8jQT6382o9Yxk4jWcz7fH46hKdLLmEyzFmmYdcrg5wNqie4bnnKMrzuWDFpSwhy8USsPgouvK",
  "key38": "htpLGTBtuJc3iEhHrpk7FRuwkFy8MLvJfaePHxyptdJSBxe7wSf9X4ZsK68dXt65KV8uQuFQmGsHGPYYoWCB1Qp",
  "key39": "s71yTaFz23BkwD3T8qRjHQzkiW8jU388Kn4y37uqfmfMdy3EBpuGyMu4XbB5GqiEPdoJsMpgoTdn5ntYyP2wsxb",
  "key40": "5oN1W9SBbqXm5qoQbv42NAP1TDYuasNj3H7Y9VjbhhLmerBJMEeM2BhMC1JGvMK2ZadbiVAa3t5pNwNZZFgUMo9t",
  "key41": "gdBPCmTNtjcetMPxfAJghKqkKc5R2jfmuTbG92atnCxd9qRJo4yaf2ZK9ecdtoKnMwj3XEb9qvgydLg4y8pRRD9",
  "key42": "Ak5CNi8zfhrVKjcz8kbgFkbsi1H7EA4m49yvHo19jiidwQKRQkf1BGgMAq8egycwmdsCpSY3Fuv4j1zHJmani4b",
  "key43": "3tWT3ynB7i4kzZpvH8FkxKKAXf3juTPTYj96zPEFV2PYvY2mMvFxLui83yJ2sxJxUGfVuhz8pxfEmSNUARkiaNRs",
  "key44": "3WCmZfLijQj1EBveGobRMvksqLAkJJmkMfKaebxVMJd8seAKCddrrhW618mMWG9A9PmRXWnoUTU3hshfENLD4vya"
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
