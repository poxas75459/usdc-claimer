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
    "2omc7XvZEq16UiuyFmoZVmizYf4awDHikPjQa4UmCPm9doDJq5PMC9785SiCnhP8NpzDJ5xGakgCBJS4uwutnbbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gYAtBnaHhrgqVw79pcXWxMhCY7AAERoyna5fpqkN1XuZH3i6RHScYCJs2bx2SFdV1aaoJoLyq9u4ZVw6DXEh5Yy",
  "key1": "5v5msnaxDHMX6bBw78v88srmG6CfUT1Z2Z9tFDKTjmT4PjfS3QfMQpD7ZgTdB1hv761PqhKchBmvoZt1uZkybdYC",
  "key2": "GznS6n2yTT8tsG3i3rdg4fbtWjQb6KBibyJ7azHZ9YdjAKzN11mMxLp8y1kLtbxnffqEbM6pML62ec6oPTRoFki",
  "key3": "sEnXntfLVZWgDBnZd9pKd1W3t6vw4A3JrAGuwWAmHhxwWKRadi1M29NdfqCNSXTronhAZDsKvAwSA82KFd9YX26",
  "key4": "2oJU2ygrPxADj4x4xTX8tcnbfmxq6nn1Kh9RccJ7gz6DXGoCC84Bs2XaFDewNvj86K6BZf7AqXyTLZypAU3i61TY",
  "key5": "2LBFWBCjMXCVLHJdpLubLMh5ZSyvw9ECtgBodbUNQziszdMw6GeGb7KzCff2oGHeFFA1iN79qNEB3rPdDBkwFBD2",
  "key6": "48C8n7sDhoZuS3ZHj1Wm5pbRRbmWtAfZ3arUFtmXntNRiBiVyQqbhWcQLB75hyTQA1dnauT7PQMefhthA1gwXBxA",
  "key7": "4bAAT7Ph5zX8uGtwGekNXnXujsqJyvJxM5AkCkx4k9hDKeDTqmWyuhjqUoboyYzjpThasvtCbLFuU2tsz1MCMD56",
  "key8": "eJPiExoxwGusvChqZrNPhAqbjUYQCha72pZe5kCCrtmVnXvJMpCCYSg3PfRi8i6YRVXmY42rSYHCNvbwLyDeY1J",
  "key9": "4nj1kUJ3YHNUBtqMuVCK73xhXKHYfXvatht7FApqhwEdKksx6FbabB5NLHMM3xCkgmvjvHyivk7PFiPpmaQzNbnD",
  "key10": "2a79ng2L6CqU1VWKX42zLgnfgkDVsyaTsWbo2ASXhqYNRgSYDZjUa7HSdo5gQyw8MCGdKxyxRnhwyAsrRXaYDJk7",
  "key11": "4M2aR2taznM6qB66k3XPLK7WxUajrb7S6xHoZwqXJUkYW4nUWHZwBiFww9RoBoJLtyYwC2RACPWS5yPM2VTExi2M",
  "key12": "SK2kEDkexbCLNicjBkztcHzUmbNvNZCQAXEA7yMiKVEPuu1sBCAPuYtBdsRHpoGxo2FQCs41N8dU56QMYdVaaNH",
  "key13": "5m555Swkmas633SJpBhV7CxwDjnGatjeFNorAXfQJ44NvUADB84GfKDniTgpGxmjhNHwr5aysrqU2YTMJJ7CyKkB",
  "key14": "3N6N98MkDncgJGyQieyJ71JoB4FGAJYSRwDE2RQhNdPY3rgEkcV6DbamtGCDnrhCdxurXFYMTSNDzc5c2sUsr38a",
  "key15": "3LgGYHGR5dyzo4pB3XnV82RiBgqaL47AED4BrbRcG6ZNuceQGtPXh4gCBnXxDJMSfW4GhqcA9QUvpkZ9z1vg1pfg",
  "key16": "3jSCpaJiTQSqj1uz47Z6tg59KWUoTQNPsGcBSdn213KLN7htQwgKTNBaoLVCaB4dkH7TBDDfWojXoW2i4bGcBtt",
  "key17": "3DcASpUvLXJ6i9BsCjFWLfQsLoRF7wy416Jfy88UhNazpBZVmDMY8Cv644LYxUnNsLxt8xpbzvhrg8MgcPitBzyZ",
  "key18": "5JNPzvrxuVS9abDM9UM6Yi6JfsiCpLx2rknV6mdRKJDMPkSi48RidinAEL33R67rjqADFDnpMBZyaW86LaskJpXP",
  "key19": "2TsRPzWbuDjZUt2wieubrHHxEwu8bMgFWMnRqnsNyGwpMwLrTqcWor6zWXf3Ui98Et1nHqsErKsFMjUGa5r7DN3f",
  "key20": "4hpj9hhNHybVyHhvSs6ULhoY6NTr4xYmqtuEJWx5SKf6JLx5B3pF5ZkshUEypwbdfMMDcXM8eC5WnFvNzTQEHsnT",
  "key21": "2yrZbRCgo7SjBWghgURx5wK82vHPYJaMDHFscMfk8nZDJmtukDERnf8jRgrunSXN8KJfjpyjivWdpTwapzeCsu3",
  "key22": "2be6Ss6grdVWG9NQRFoocjkJtMCX4tFzH2oy65o2Ur9pgQWxe7Roxj3CFMLgeoWRiYBNHnxLsuAPkdmUfxiTtZVK",
  "key23": "4NF3Wc7tzZ4bYUS8Pn4ANSwiL9h1PXK6RCMt5yJD8axxQjV4njEDinhUnUx2R3suEvWkeGx2Hvg5eRqW2QGRihYY",
  "key24": "4goPCgM45Kbmt7ws5mr9d5ct1RyRPJpwsFtQgNw6HMpguEMumAv6WiBkLT7SiBGrmpd53bMZUje1hxXTUgmFGNYT",
  "key25": "qYm3rYWp5EtBMWob3GGqAQQNHj3tD1xx9NMFRo169cGB9Augq2yhqBM1FiBdVPXJHRRRdPYWGG4JkML582hF8dK",
  "key26": "3sK9YL7SAi9xY1zoATLxHqmkPRoQcmu5dWWniTzdJUiCoZ67BnL8Z5UF2aHaueiL58tBZtXdmyc4ZwAGan5tXDWH",
  "key27": "3mKumavVmxuaMHBgoTNrtq7q1E7YPPortxKRWd1LGxyWAa3v6Aj5jUux4ppdH7gxDMMAzQf5gmQGY7HWvb9i7NMY",
  "key28": "Y3enb6Zj2RNsDcVFdnWgEMG1jd14w6MFdFWW2Uubq6HgQUFSmAPNq5NmvuiCVh4efS4aH6eakxKmfpaJJ3mZt55",
  "key29": "5hEzkUZbfYieoHr16bpMz2c1aBvi4koqUaByCGH4SMY3ZvQsy2pZS9x1TdugTYG3xNdntApyHSdtpQV7AED4jeWG",
  "key30": "2xTXr4esJ3PySYzviQrWe12tnfNmq9XuBamB7fZrwp4cVvqdqAdrc1NjrzqaKQkw2pCw5mBaQmpZDKkACNoYYTEn",
  "key31": "5csGGNpi28fzMmrg9b39t7TctQFNuqV5o9k7ab2YXvuz8ncrbW46oht3TE2xyQsHujBY75tpH9HupjvmZHePrwBK",
  "key32": "7UHuaxpEJPtBrScjkX5RhKm3F4wcri8tJQ24hhR64nUDKJUDDevdBSBXrtKpurKhqD5AvXxK4TkpeJo4fYBtw7B",
  "key33": "2QmRJgq77mzadCBbb185vnrTPJZVMHtgCjVdMzXSXrBg3TU1iyAxA49uASvyoAq2HR8PsjLWvi4yQiAxXW745FLA",
  "key34": "P6BwoNTKuM8yW1A7gzWKgkZ1Y2mFp9sqFjHUTCHMKFFDt4Qzb4SdB7fZQXaJwmn8GeUWZxzvECJ4NJNYgaHjdA4",
  "key35": "21yrmL6rafdEzDarNn4ZvostJhuiF1j1PzuRAfZLAhZ6t4wEufbHYPYn7CtmBGpaGiif6pUQoex3gUWd7KHoa3A3",
  "key36": "4f3FsrDFLyjQYpbyUfEAoRoMqs5cgBSVURWvrpg2G3F4Ciwru6yZbyfkerLhoKDTDUjRixMKKNAjiqXzAMVpmgzz",
  "key37": "2WptP6qDdGit4AsyTV5UYVC89nGjdfZJhundFYCG7tcEuJFBTUcXEeFmEk1mwGHr48GnMViKeo5nkyNUitJLyGqy",
  "key38": "bBbXCUZowvKXNBdYUGYY5C6ZpTYZ98Pr28arULfLizt1jGXtftEHraffXwUUTpQycPZ657resyHLhu4KpCrbLwi",
  "key39": "3tPjtMRVFiX7DPwjzA7SzEZeRCEFFZitL5ZHQsVw2PXkAqohipzCZbubspLYqx5iJh63z9cLWHEsfLUw3YjGB61C",
  "key40": "3YL6j7NQNVu6qpWvFczKxyWyhjRYjoomyvenumhnyyw5NSRbUSJ7hcxkTMzSa8H54P6H8sNVRRdTvSkhUqmHocSH"
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
