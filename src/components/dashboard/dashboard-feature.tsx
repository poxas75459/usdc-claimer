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
    "5JoCcoaxmvuEEgGdaQwPyzxF5sZ8RMy18HBAbtHSrdYQJaiycVWCNuQMVFmb4bdB6kuBeMam2wttJqh7SAruRmUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PGKMLbP79wXgNbASVxhMTsjxoheV89mi4GFUkRRC7EEN1gtHZ1TU5drVFYTNQpYMJPqpb5mgBq5LJhDU386KToj",
  "key1": "5JCBUGSk8fNX3siqayCEJhtAG7haMBKghNcytojbjmLxCQ4ggWd2VgJnhKenvBsEggySQJvcC4uAuQ7vsrmSxtJG",
  "key2": "Beon2XQ2ahYMnmySukiBYxmvxDphmuAYEXVNxtTBvsSoHLEU9zqPmBUqXTGC4bzikb5c62xj5tqTbqZSdmkLMPX",
  "key3": "5mexVbKDVZEcQeXzHzW7RxvfdPDxtJASCcYQJFTx9En2D8mnYTQjGdP5dEokxdWbT61gs8voZQ73TakT4jFYac5e",
  "key4": "49nTMwC7WRNEx3VeVxmWPhEWntg4LXVd9skaz9LBtpMSPCsW5q53ai9ZNTFDESB8cbgUj9WLVxMh5DicXKUwVFxY",
  "key5": "35RMYMFNx7w1mPZoguXveDom5axkLQ7sdZqLdLfRSoaCSCy17aSE3LmJ5Cg43SRDtKx9YPKiwdSvdGTVEAFYdfWs",
  "key6": "5aPgsQMPVCoh5dHXPwLXFyGHAAcwoJ4NwBvknbKLgDb9gtLfWrdriAX3YosVQfucF1GDHZonEX4J45gNyA4BtL7P",
  "key7": "4f4UjWnWFBAhcsF3ncqgEuAaN9esfaL4nLr25wjvse4GzPt6BPNkyWchEgNMHeE4MVsnXZsxqcow4a1Ptbv68WXY",
  "key8": "5KTs2txVZqjp7oBrdswfR2ZRqi858aTi13NJUu1Ae9nfNhptLdMBTPyNLoWecUUvVDhoXP1VdrwVveNsNT2kRbN2",
  "key9": "5UoPjtAUZW3H2QyVdfNC1iB15Ku4gZZfXh6xq8GqLVn7LQeMZT2WeeYxRuTfYNUwfRY9ApfYDtpFpaHYhcea9ZVM",
  "key10": "QuDpuRAzT3FGkjc4bGJv3vLM4sCsJB5NvzVyVVsjhAHvHmCWFZ6NRzV8nnvmpAwJtAsS1hTWJK8r73XPmKEnzbn",
  "key11": "5xetJW7t3i89M7fdQMeCDavXf1Lj1KA9PT5CH7mJeR2y8v1NGrpnBaWGF1NaW7gaT7Go3WQU8UawTJbp16pJWdeb",
  "key12": "2ds7MGyhFA1u6iBkj9xHxbShdYBRE5MYkqD6xqRb7AQ35mCNN5cLdyaq1iUmehytbFWkVTWGy72t9hk1qfvEqHYA",
  "key13": "55qtgWpWyTqk8sjrRgFkYnpjkwxKBGtKfPoypgo1kdSKZAqibqtSxVicMiPu8uEphidNBi9gRH2tytistqAB6Tfp",
  "key14": "2tyShTQnNTLUsFEsQYdxm9QaEk5ddSJHHZcaENHZRsRrFD3KVgoHcjSABW2aYbgj42xK9bvhFHziaqUBtSN1WtKq",
  "key15": "49zBo5Su5DmiwqddXhQ4W8TUS8nRhfFYUvdstYzHdWvgvCc32Vr12Taw29xq7UMewUKCJvu34332e6uYdq6UKt55",
  "key16": "65KmUCL2LRdE3YozczgLwEBqc21D5q8JGbPS1aAj3GURXszH6iGDwNtggQzqim6YHLU3nb26Fn5KTkNfTUH8CRLY",
  "key17": "38ZybNEaBcif5JPabGC8KKSKvRGafZqykzhF6fgJHyXTVutZcBnmtFiMzjbLm6AQjkV9fZgsgKMHxPjMd8twGftj",
  "key18": "5AzFsNeUCc2Ftu4dZhoWSVvBGd2GcHSpW4Bf44qLfo3F4FY68fDZu4bV671WbsyqkaD1qssWJZxfLoRNM8o2wNiU",
  "key19": "2xqiRf28BegtE6bDbkP89xYBATiRT3cGe8AayKTnLy33mSDcmzCyGExr9zyF6dyYEa2ikkFnqEPidcmvQs8qLj4L",
  "key20": "63iBtCwqf6WWimg6AzyrZvXPQ46VXfVeYRwUc82MTKJN5Migsoepvbgi7mC13WrNLknEmdDCpTpRgX8HA2t9b9L6",
  "key21": "3NG5JSfkVvBEWkHsCKAcf3TYS8rMf7mUFhbk3XptU24VuHjpd4aL1gzJ9UdP7UVvmugxaqvLSBVjqBgK4D2tomQY",
  "key22": "aqzUHPnSuKmJhBTnhoNKeH6HRoLz2FkVqsNJjpCpxm2qZGDzNkMAQZm7tbsPDGbXn42Y7C47We4sXVFzW77brLD",
  "key23": "4rXchuP3hUoVMSYBndLUkp3n1zN4WDQ1hhXie4VRF7doSxsH7nkCPgHMEc1kfV3TPitcbQjcr6Wh8drWb76SEazF",
  "key24": "57Wz4xtsUkuUMZDPFcCaXtxPLs7ZC7BfRe532D3Mrc7jtyw4G2XBSHYBubLrd1DEr44DPDC22Mxe6tJEuyqinxY6",
  "key25": "5x3aq1rnzuwj575nCVdKeqWvNaE776jNNPitUFw8PeXutDG8nAtNcBMNnMqmjaS3n3Xrw2QCSqBWktCgDjpftNvm",
  "key26": "4A4ECFZfKPyRoupL2ucwfomGSFZWnGt1uFoi7JoZt8tE8rgUoo5yaqvWVowqtVUXDfRKGeMfrx9yoQDupG2w1tQq",
  "key27": "55zM4HkGSRH7dupzfq825gUfye7HZx6k6cKj4gZVKy9msg3NEBVZJ9XtKvnKRs4noU3Rb28VgQzmr4cijG9oyvS1",
  "key28": "38mbCVnhxUzjSebTYx38ejSBJAXCTnuCY6tGAC8rQGQtf637KAcxznbXnpzrpTEyHCZKpGM6Sfk9dKcg9C4ywJhM",
  "key29": "49GX8acmW4vmnUbsqJgxdQr1VVBwz7nBNQcDZniVPBF65anCUNiNSvNQguvDmoYNPXmqTVzDFHoTLhfH9vX9M4mV",
  "key30": "CwzQ7TGArDAzYuZP8sQWFKJ2muCRJDQKPRyjPBaks5RHHvsQiWHdwbHpVRXiQ5RaBVUzqrqnQmiomboC3LQJ3zE",
  "key31": "2i7daDc2Ct3D8ex7wf1r9AU4XTWwzAvtjBcm66aimBbZ9ycXXYKsTdk8MCSP7pj1v1TSc1u5KRJ48DNxm3UTpHMN",
  "key32": "3UGhbF6YLkQMiLuUMgmxPuAS2d5wTcTz25DdCqaKcUT5uZNvcGwdPdsHazBHw6aL8pUwtxMXJ545huyYVNo7dy6a",
  "key33": "4BnTHaP3jseDo5nhhZ2cz6Mh1KKsbTCMCn55ndKyeGYBWZKAaUE5aMpto9mBRE1aFy2K9Hn5heMTXCyJirTND4RV",
  "key34": "25vy5CFjMEktT2JURuWQMz3zQbmgxuxVfNGmnn1TijNgp1FeELaBqvwPStDgJRch7ipNFKsGVbV8HDk8Cq5pzotU",
  "key35": "65qPsmE8b8Kuk67r99je3Xagmr6SGTpajjQoiWG3WdcdnPjteqzdvbc8npZmNUkUDZiNU2f41FAq8LQEFasDpqZC",
  "key36": "41ULPdb4s5BG3ZFyUkEghvgKhfx6zs45quMUpqM4SUip1qhe9RrxnqkTsTKAPui9dHYDABgEjtRQdYbDjAPG4Qs2",
  "key37": "3aKUbEFBxi2WqnMgX7cyad4c98ko4N8zYhs19nZKzSBa5QUCK3p9M78KTcza2DX4DoLQ9ff8GPazcteadvAz3toD",
  "key38": "5hGvUMAmD6gxDWsCfpxzQRYThB2tjdFnqci27C8yieMTo8XHDi4QmM8exGPtWkc4vdNYzWYg4RHzgGHabFym6PUV",
  "key39": "3mYW2SJD7C3pyXu3RVsZTttcb5bDJzW7qpVsGEamG68hDQ6GuPYi26KUjCVTvqmgkrA6HTpkfGYHXJxMqsvjGHnT",
  "key40": "2woRAfA3jwXTgExTuCDXpn74PXCNHrC4xLzEjhk2LmT7VBD9t1JHrgrc4xqTuAgrsZuyEarDsgAyKGEfEzRQFfQV",
  "key41": "2TiGXQH1DUtgzhgN9eLRus8Zg2cqJKsKMcWs3EdCNDK6rFJkQX9iUStNKHSKooQhtPvwSEH5hSYuGd3Yg9LsAAGS",
  "key42": "4yC9it15vwssDS846ejtzUkk1PVTMCm6HEXUpB7wgDGbiW4b2nxpTMHYiugca9qDqLhhgG1BsQDrmfUXbzFNDRQz",
  "key43": "5RcWf87iw3RW2bRUDDiJdPJr3sYWX3cKRQcxAxomDDpn9viEV46YjVK563hjcqdEFexE5jwUii5P8BjvtAUZDzpm"
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
