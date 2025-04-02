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
    "3fQUmp76dndQqEvnkFs87jwDmZqvzyqAV1g9qcJ4prZstuzw3BXY6wGArH3GJFyHPtdHD5t8UvMWEGcPfo6Zyoiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBUqiLikTacPCWXww7NojM4tLTnnmoGaAqHi4WSY9a2P7ZBTh2GQduUoiGue22FgR3JPGS8nicSeosBerbxjPZt",
  "key1": "4BKYVweXydmwjq6urgK2WNUCRShum5V987GuxbqHFwPj6DJQXmkvrDA6iBTQ7Fax7EyfvoBk9ijcxQg9tvdezRpS",
  "key2": "3Zw62fyBdVWZiNaozCFKGqpGz4jHB2G4e3DQ7XkuvUs8ayu3ZmDV1fYkuEG9MHQCHLKf1j58rUdReoHBt9uGFB2N",
  "key3": "37k3oNQmM77ftPutGG5kEN9UUcVN18vkd2aKVz4VVmYGnkbeTAfRXaqjLFeutTgXjwjXLp78L29XbPTEi1ym4Qau",
  "key4": "2aWJNmPC8TYxnFP8DXcxA2sj3GWMU2z64Vy78gHv9DyRon1R4zPSSW5edYzB9mWdUUZBRkmdUtp8Gv3LHtjGm83G",
  "key5": "MYfND1NYokEzAo4Q9W7y2AoLBGwHwJn8c8aHaNVa7mzrASL3pfn9iqRavb62h5xPV2hUrRy3hAE3fSgaPfyYAU3",
  "key6": "47s3M2V3rhZFK7XRZpLExQUzP6ZGuBq9xioPsdG8Wuvkp1bU3QjY5UsBtgeKZ7uT9876HUdnH2hyqU4gicoww5Gd",
  "key7": "4PDyuWGipGUqxBJXBTMobo7TQcDo6S5Qjfi7jibyRC1GUgqDGh4UsNZhAN8scCuz6b1fd1ppfEYv3aLWfLTaAnLq",
  "key8": "pQhHA6a4TWNQyJuDWBsnXMnf39quK1mvpwLGRTRCpWe9BJ7hfQDtFDCBbQUzSACVisTvDe7FzgM7gdiqY61H6fX",
  "key9": "7dj4nPRfHP47pfzaHxqAuYRVNYZqibfiym8AZvs5MTKy4APwv7hcddKrAf7krw6VtRfaMFnd4zhERwyrXo1BzRQ",
  "key10": "5P9Ss75zK12h8Pc2evYHKjpz2zUAewtBfw1oonYEDwo8nC3myH53gcwTzjxxnc2DUvDy1JA4n88wxqWzhXxywoZa",
  "key11": "2n14gCehsE9BKA4M2HrPN7uSatMdWWjq5SmapptBMu2rzq7VkixawPSnTFgAfBtR8ozmUpegVQxqZ8wCecRdtnvk",
  "key12": "yiFk3KRDmuREd4D4cFym1G4BrfsuNYzHkt5UKQVsfa9ykucwgovtw6ZhNkd29sws9hwwQdYEoLar9WcF7tZWDBA",
  "key13": "2E8sJqTbWXySsCDXaAgiYnyGRCTDPVRtdus9hDygepu7U4Z1gg8otJEQusvqLT12t3VuPeMyxYNc9VRgkzrx9Si1",
  "key14": "29feU7x7BCjp5ycwJh66LBqeFKEfR6Up8iYaFdnJoDLYnfQxMewsy56ifvPaaaMUtxNYLMiNXPAwjrzSaUvpLo8p",
  "key15": "4Yupxh79qGbLbk883ueF7pWTDhhPghwZf1tSXt6YdWBYSVRufcqUcPbEG366NddnCPvh1bMohUpFZX7HpHX2nALw",
  "key16": "5Dgm5RCFt6v9SFbjCDQ3KQkWXgnfhm8u9Ck2RUVJskUg6WodfnzwuGe93WLqVS7oFE3vweihDsWorwPZqk4h38fr",
  "key17": "osra8Hj2yxKjkjp4HSTr8md5kLHjKRBJHjJUpkFvozGQfeXds3rv9XXsMJerV1LFoyop6ArTQeVuysgUw9vZFtY",
  "key18": "3NJkvqNUEFKowBwBtpCpSipTK5csUTXE8K52xtU3XLr6PaCYjMjaYoxMHgRWCaCHJ4FDAtjtVukU8My31CFewQRz",
  "key19": "3BbTTodo885qLcD9cKoSJq7qN4fcnJySJV55NH1AsMeWNrknQPMeRaD2fnD1kdv9Dm9KCcMaDwiVQRXP6SFsEs9J",
  "key20": "4Jhbz3me3GLcVhXC8V7EBfaJQczMT3Hs9d2q1Snsb9NcJw3R44KiJvxcpAFDCc2hcj6UHYMRp6feYmThLL4bjmqs",
  "key21": "4P1ssRVCvaErW7mR1rHH3fCU6zthHxtczCqJL7G5Cwr4VmH7dn7xjPuSYFKxd5UrdNNsqZ73YExHtZ73NaaXdV33",
  "key22": "4yispRyJzdbadQUXek6vqDcphZZoZrVeJ1Pe18UwqpSPncnsyotzWcpy5mLHNm9NY7MpAprqqaNWBryJsRCrrGPu",
  "key23": "4WjSKRN7GZzKsB5ezjM8pqrtEy3AFJBaZKvusWDLNMFS1XnzM3uu865TVpwQW3Kd5LH4k18bB8SXRaaZf8kPDuT8",
  "key24": "5rcsFk6TgGvGLcpLt8ugppJN2kczF7WALuRwUpVXgGieBGRQAXFMK75KHPfnoLL3U3L78DJiMT9adSkmxK1A9Mfr",
  "key25": "47sk4zKirXjv83nXbewiUJkg4GH9vF3GWCg6z4zdDE7bSw6eX7V3aeBCBY8cwZAJA6b7kTe7NKoZBpdh8QZoCf9W",
  "key26": "49X2epc8NuWSPpCB4JcWgbjGCZf41EpAvruZFRQA8dAJAGPGiHe6LmX4ZW8FPh57f3bmGBocmrbYPHvFrTyMZwDC",
  "key27": "4etxutt6jrVKhAiKpyfX8pb8Vp6BRHQn6VGhKVCqREQFD2ZnD9dGUn9wUQqU6xLg9NohFyCEetViqnymopARp7UB",
  "key28": "2hMRqi8FJBHAH5ceC9ebBNNqcnRppisTdifPMKWt5PxJPJr3GQnUq3dbE3cHEFnC2txzPs5y6tG6GKv61vk9QbNV",
  "key29": "4ZJUaHkBsUZQxnFgVzsNeRiZ18owh9Q5hCLsW8MZBeUz2GjRoDfPtebUDhjAYJpTxC9HR6Uq1JPGW5SWrGffH94t",
  "key30": "PCzo1TH153q8j5CDoiBY3DCCjt1dQpgqMFoot8icrcZBJ5W2NowCWFJtYhamMofe3uCyr6n8SSb2ffNbBKi9BqF",
  "key31": "5tc4nRdPYLgEVF2LD5CEDefU4tcww6kHHWeFnks8fsQYy8Qqkfu5EC4U3fhim5B23eYUbzES5oWzzdTVu6p7ZqxR",
  "key32": "8NnBYBfGqVgbx8Yzq6MFCVHFnUTb9NAR48miTs5X7CTkCmNABf9JZBCb77GjLiRJFHD6Wb7k9n4YDLmvFMaKUae",
  "key33": "4bopw6UUUeEqH2dNdsdq4tnrC2eZTrcPcN65ZwUHxLieBisbRCHXa73EkrdNEPE5vP8tJW1DxR5JBiTKo19xm4F9",
  "key34": "5UQjzbZgNJAEynKy747Qd6Xqas1xcV4L9d1LM4ct9cSWUFs2vFcJVaMGoUpDXGgdSdWDwkghXvniyjiQVZMWZPg",
  "key35": "HvgfwzKtjVmEDX73SMthdBCLJnJNFY5d2L1xmASPwxqPRdFsvaCB3dfj5jJ7HSWAzuHQML9SgQqqNGf1k716QUf",
  "key36": "4J3cqeLXGpDcces3w8KnNBfu9ohYetgtJowcwd6XGGSem7gUDaCFjvrixZD3VFPeDQAkeoNEetxoYP2sjjgNPr9D",
  "key37": "7q4PVF5rjUb8TXZzswRmSZ6Qpik3VRzt5DaC1rgYDtmzsbTVA4qUv38NnUMD4bX5wodxZs2JZbnVhsxedf964nF",
  "key38": "3jTLSMq5nKqJ998gCQGDmstQGiB7syfVcDrYzcWf9h1v9RBb2nHPwcU3rYfqTB9vrn1fCiEuTdCoxPdK9TimLBKc",
  "key39": "3hWG7rViYDzxdHNdYokXV6MyV8ds4dFceMdAR4GtqSJribqn4npW6fNNFVDu8ncv5NL9ycTdfee8KeJdBtfRTstx",
  "key40": "5vJS4g3kNEkjGpgmZga2oN9gp4W97ZikynFD7LbAfjjck3kVMpvAkpvHGCj7CYu2JeoB61wyQH7edqhg4Hoefo6y",
  "key41": "2QDVini7fEtVZfbqrDmQBGv65VGNarvB2WKn95Js5SEquDAyMGAoYVvHAm1dcdvrSG9qKa6wtFagLFXrHchBvh58",
  "key42": "4CgSPMiT9hvcGPp4PoSobaMTezsfcgKkakHmVR13go1rZX6oRwk6a9xUGGBmG9QyrZifAa5L8qRMCKPM8asJRJE6",
  "key43": "4baBCbDq23s29G8P861j3L3EjC8n5NFLmkZ1FmFdN9p6rc5Cbsc6wyPY9E88eWZeMbmBj7u48aekK1YeMu519ENq",
  "key44": "48MSjmpXmLeNFjfgJzJPeqr6ZMMWpXmGrekR5YxfifoWiN3h7F6bgxNfLHzUAC7QLuK3QP3dfHdPuPQrb6L3qorX",
  "key45": "38MzCNtfvpp96dZQfToPWWTW7SyNL5CCdHk89kauyNui1iQiZAsLVq1xfHcdt8ACXY95cU4RAQdoSqe6JpU3pffP",
  "key46": "y3ttvwWT9gmFMpKZWe43BLyQzVeQ5FiyM4uojRH7sW2R4oNX4AcXD4s4ZA2VyCUiMTA6rDLuvFSWhKCNU3Ur84A"
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
