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
    "2SVM1djBADWiErjZYk51oNhnMGLCoV4kvXDcUkKYq2ChkWtkkqAsK79SwA9taY93NmdsZaQfhkPjqaqVENouc2No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGhAbdiSV6JJnRyrfKSFqPrmtSAbdvkREBMneqCX5diVb6A4hBGo7L3uaQMVxUPbqz9ysTvEszRGsaZotk35Cks",
  "key1": "3aX5A57tp4SqzdDxt2pFYTrY43qBFLwpawXrhzRmvWSn4mSC8bpCYhp7rA29Qm3BtpQyXeZStjw29W1XgWurycyj",
  "key2": "cT6Hh2LQGhqiwgQWnS2sBaZ5xY7vufAHooBCL22e21rusWKH2Bnm566Nux6c5RTtjcrpZFPg7TYGkNkodi5zfzM",
  "key3": "2GTV8T4F9bY5HhRqNNgQo4rxCmuTuTqjs6d8AKRmGM9CAPSdTfdYiQsZ8Gv1cS3ZZ9DjBgufTXCSBd4HozbiGpvx",
  "key4": "3eqtn2T9DCZA9dPp5sbx8yFW4r9bhdv3ezmd2ePQthHLtaTbJ6KHB2wr5nzCsruaYj1MMQC9TDF6RGB2h3gTRKde",
  "key5": "A6HELB6MLZMtt5d38GYhhz3um7q6mDrSZ2QTtfWwbNw5w7LWaKTZN431sLumbGj6sCUzJc6gTJz2zWetm7Ve5Uq",
  "key6": "tGeEBa8VibeF7vw5npqqSobVnAQeQGrFWBmz8FKXy9T19haezNPjP6qZP2q2PwHtBjzo5Sb7QwpQYVXWwhBwtu5",
  "key7": "C9DwdJhdNURkixMHsgW2XFENwh1aYSoNFQqL6a7VCYvJBShsbJJn1iuC6UGHpryj4Htmvpe9nVZNUfyc8V6ZAod",
  "key8": "2e4TJBZWeCcteA8PN9atp9UFxBJW8ELDPKP2VFeqHw4dbKZb4qSVRq1cNruTt456DywU9Dxhe4R18uV7FTi7TttQ",
  "key9": "2D9nae1gEYAQCJkvvbDLkXsrvXrM2mfacf1T5iKU2JY4ebr2M2GnocmoGBwnx1tyiYHoXey2shGhQiPE4njWmDh5",
  "key10": "38L67mR3KJxeoU8neJYt6qjz3RZstJ8TnqyBbRdFxGJxQW63xPaNi4e383p4k67JpZavQp2xBcLHC9HM7bK8At82",
  "key11": "4Nk4xN2S2ZoF8Gn7P1ueGws5UoTE5YGWHwmdVjUe2VfaY7wpnjnNyXB8N1v17fG8rTMuQdbELjDkbT78fEhkMUH1",
  "key12": "2Hq2VzPvYoSgYq3QHAHWwjf9MfMcDLzdQ5jox5ANbzkQY8y44JCW4JvHA9E1b679XbHaMG9gyBjn3q9sG1uTQA7S",
  "key13": "4WyiS1Saz2eC9WKrjBfk9eV1uwR3Ub547TYiGGsrnNLHRjxhPEqCGGPCuihTc5JZvyndqP6qWcA4SjLm5vAQ5nxv",
  "key14": "5RbUddgyhgWnsCxMHe47qJ9xAPzTt6M5weuXC94qcpBZeTwFvzj2HtZpVkbiZh97aJ5f1xGQrCMs5soVGsSNvyh2",
  "key15": "2ixNfBBpWxMYZiTjDSo8mFSU815mY6BkoG41ioe1ZpsB6C9U9bQy3RhR5P8Jnu7Z7gWKsEHftaQAhYTgDYNgWemH",
  "key16": "62PfeUt54JctZPPbCoRnfZh43uEECKdBMik6SBGNfsnHcQeY4PLTjCBQ918aAwvMPfvkfPoBjXZuRCmzvdyVM3JV",
  "key17": "3LNxuxZF3JR7WXzwBhWXtQXh86b3vjkxwcYQHRkr42XAaY5BBMWaPPY8ZD1Vz2rWfpoDEAwRs7zmcSRU75AmGP1H",
  "key18": "Eh6He7GTk3sxFRRKEku9J758C7CYR8xUoem3ML7EVjcJjZwPQz5KyUX1mDVXJ4iFVDYERa7on2j64arYxpKZGFb",
  "key19": "3E6eNWMiyEyUPgPywcqpunE8qScxWJLH9CVAmhh5uxYmvueWV3zfNn2B4SCMC3oJ9QvWWzWYRvw6ufyef5Gubt8a",
  "key20": "bEBQwnxfWBRmC3ek8T2BfRTHfBf6Y2NNhRufD3uaWLNBvhtKvyvnG53nGpmHuuYZ2HZzoLLy2CWfSF7UdihMQiZ",
  "key21": "2LrEPbcYrkYPRhhuVy8nduaoKyiBpWurQ7mVD8RfNnMuvaQU2QN8S1CMjS4risbjPEoyoEk5y5eBDLgL9VPtXppj",
  "key22": "3sHBGFbkHqxrTP3PAGSu8Nbv6mz22G4xZT8Wi9YYzSfpHNwENKRaWs425NbWQhLAyPasDwrRepLJQZfNNydGCEr7",
  "key23": "g4qKmAxvcndp2QfSoBkBB6mmD9aJUYt2EQtAzyokuxVss9f7StPQaEwUoEkcb564QHuKZyVN8uhBtdeHaVf84k9",
  "key24": "5vKoWciusbrGikcWEuNyjxfGmimnDircEMQLjdk32ZKJyfWo9zgU333c2K6GsZ6s4Md1HNy5X4qbdK9NgqUZDtzW",
  "key25": "k7Th8CXayoBcWJqb3t1j33M2cFouNKj2sxAYMtbQu2iEXxFbYLeYjM5V3gegkgq8xQjwhbD9GZ21Q2PLpfy93cD",
  "key26": "5dxKBjj2Vh43NLrFE72aC4uKR1engt4Z1EiZK9wMb9RumD6ZYNdY46ib8sxxkAcvKEywq7pJEGgz8cfNASiQ2UUm",
  "key27": "14f3RR1JQL5WJvTVESKY39nHavKHcvS2vdmMJkvAQwerMgmiGMUbtApY6sbKKJRzfVJo9xrAVjrUw7DSUhKiDzs",
  "key28": "4PodandigKXscNfhBT5bPQWpyfRajnB7T2BWv9SfwzwWRMBT6fvybgLsg47RUNQo68vGsZuBRHwd17x2JLPyj4m5",
  "key29": "3h5ye8Xn84vUpUdABnri3f31iF6wQTsKqPPp28yQAtSukmWAuhQ8TAdncfu39sfdFSi9qdqmPWdoAJJZcKdynjFC",
  "key30": "5p7GsqiA7oPwTsi46WmJWyJTwhmpTpSn3Mo5gPqB9AgtYsaa9RBsm7b1QJSBSL4x98W4aqP8Xktp8y7Gbg7K7ukN",
  "key31": "4b6Eqe8oEd9mDAcV1gn4tE5GzJM6LUd9Funj6Fx9oxsEJ9NRJ946JpcekKh9Mw12udLGySpkjfkpxTCcACUhNzsn",
  "key32": "izPGmTNAz16cCL6K6DLfv94EBYcD2Xgavpcirn8TVFW4LBG14WNeNa5WCYJ6GWQH6fuUY9Nt9D5YyvTSqtrcEp6",
  "key33": "2Mi7CWrYAyY25UJdrbouicFs8zvMGcv97LjcZXz1tLWJK1HczUxEwhHbfvJmC5MKiPMvMZwP6KVTPE8WdS8xi3u",
  "key34": "4Es5e5hishRfahNJdSAQqbiJUTCakCrruJswPsr7ExiXqgY4PgFTJGy2ESA3Z1Sr4ysKALcyCZGF54jqCA1oFXLY"
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
