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
    "2bAjpFCFZU11C2tWA9AzQ5dfVF2pcn1ufnNT7nFArxALRsFkYkWiWUT7XmLEmZiT9Takxx9jT2W2HrFwHfgk9cKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxVuoxgjskXYMeFLSvFSK8pXUWijya7PsJKeYcgH8Wm5AKaGkzPDKdo4TQgaicG1c56y1ozjc4PinuVsL6HGCuX",
  "key1": "VChu3SWhhxXWTcXvfGcTz98Vm2gN9qRpxsfuLXAX4VXPcfUQ7pcmskdeDh3KVjxa5f6w93ALNg2p8bFKow7LT29",
  "key2": "62GTAuGTbuBJFAPi4vWkGYQuGM2GVxcjiqAHyFxAZWz4ezeE9sZMRUtUX58rXDzq65xC2PonzSaX3FAQdZeQ2p7U",
  "key3": "39iAEmZbN8ac6qgf6gnogku4FtLA4emeWTTtpbCASG223WMeSfxcWC8WbkpeR2tStaZLSp2UfZCMQrHPpjmKMqJG",
  "key4": "5LLE7cRBVNPCNw9DVdNWGDUtt7V8XDdwyMJmbbiAveYxY2dkUJuizPK2589kt1ExzCkyDmMTYHEj9bVoLvRFCMaD",
  "key5": "3q2kTJH1XerY7HuLun3vtnL57NnwWj7jrbW2N6NPQojtRBNn8dXzYuHiCzZXkSJm8oY8pkPw2k2L2hhuS5e5rM9Z",
  "key6": "2zSM2EG6kufcAdM82wEwhvP6LpD2CiJfHhWe8bppRqdJTeyxVdxpQo3z4hoRDWKtaBKEav2rf3oqTMkCniDSBgTK",
  "key7": "2Lr16fynKwQCQAG22njvTumaWcVvACqY9Jcgcr1Bxb4k1EubK9APvfN8Sw7fZwiw7WC3vwkBnsnFBDgHVLN2jCiA",
  "key8": "4PRftNtrwouuEjerWjXVAM82MpgvCoHVhMTuPWwL3NRHh6H2HrcRh4gbfMk61ZLdZpAbgUP3FKofQQqHbHJagzsi",
  "key9": "5BU1DmEWMNNaiu8CZCm2NvFzh8eY5Yw1YyqCLW4igXykQQhz6vDcSYYAfck6QQKzGmhMiSAhixjPFKWxEd5X58V2",
  "key10": "YEhgRrLwiCTXhNsjr1wsngDEhikWfWmRE56o4JsFqaRjUQyG82MY6kmpbj9rrhTEqVQCDekPUojgBH45rBdKV9y",
  "key11": "2Xp8oCTeBdFbPGKvyc48uJG8sF7wzrM5HfrfkYo6SwqjvBvLRVVGBtMmUHUskg55SKqJrC4QWaJxrzQF8eSvjz31",
  "key12": "hvRQnzUxM8DcYEaQi5b6CF2unbaWZY1kAJikBHuaLQm68Lc4L8sKerzg5wRDLuGmkNFx996G4Wb1FBfvsxYs8yf",
  "key13": "3Jye9pAfG1oM2u4WYoqxL8NYh87QUPT3MJBjvvJtJGm3KgfvgtGrfRGLnzmMgvujCBBomDiW7Wjq7qQqmtzdSo9E",
  "key14": "4CpEJ9KrNHJzgVCD8pT4K2PmQ6acyRNzxk5KmxK5Vtyzy5ipWocGYph7wFGzaKh5AD3FNeG5h8ckD3pkShmDTa8R",
  "key15": "RAadboL5owx4qYCBP5yb4BEaWpiX2WsR2SdDELzvrK5MhP1NcyAjVHEPiUCwVLuCL2fwi1P1hsUthnjvbU7kyT5",
  "key16": "4oahmgUE7Qrg1WgED2tpJuii4m6zv1jeGb3XNFzvVvRjQwRhtWHGb8Rybh6mJXm9tXZwNRg5QZ8g1LAkYyBT1hKS",
  "key17": "UD5zFEwRSrxc3gh9Wi8VVVeSYXaNdkaRorXsVwsvU9XU1XXDUvN1RjjXCbdv2DinkztxH4PvJZZwDX7v5Q4wUah",
  "key18": "UKuGrUuCfiCK2trELq4mD88Pp3vsbrXfKLyMDK1fbLwkwuAuXTMadM3H548oZnnBU3B6byx1pVmmaHPwtvkY1VM",
  "key19": "58BabPKeugQSDSvavRYcRgfWbaXKou7D8D4acfNSxZQyeNATSbohdwemTCJKSbMtmCEkZn1GkgLqt8aSeNbdpBVR",
  "key20": "5U2GaEo1srQ5f2SZYjjWBDT4eAXdmMkmGfCGybwFfy6m47gxaJgSYUX37g5HYtbjwVzf9WWQqe5EdoXRS8CDiTVc",
  "key21": "1ibyx3xrQeNmUX5Jak1do5SdqXFtBA75L1WCFeQa8wegKo5A4xP9sdmeJU9nQQGrwiJfUZX3k7BZMWDBsaVXd4Y",
  "key22": "5KFWkiU9SxBEZzNDN7NoGG9A9ukvQhZ4vkSaXGhVgpkckT9bt5PaCheJyhZJbnKYSjVbVYwCYj2kZRB2C4dmzFwQ",
  "key23": "2KqfVN1WnW5xGaDHbLZapNPDtkSnoU7Ud57yi47ZcjfAqfWQoBaH6vfsw6jM7xt35Vruq6948sHytd5UEccRFDT5",
  "key24": "4ALoPiTsfMHek7ext5rnZrAEfoRwgJBfCoAjcCoBaP2KLeezsCkToMzZcqkZ8pcNS2rhRX9d1N2Fqc9kTJ2EP1Nq",
  "key25": "ZqUm7rBzaHpSrwDc7w1S21q5FrUHMrLTiqVP8pemXqSx3n84C3d692wkrJ3JR6g7vr68z3fKYQSsofNQT7gzHcf",
  "key26": "4TyUScy6L2virSfFcc5rzHoWB8YrSaZKLHVmuddXkkKkJZVbZiRCYBDcvNgbbbqkfsLCBvvUBVQwnxpj9nZJMa7x",
  "key27": "fWZFZGHiWuREQHgPQT3Y7uNyjVdY4Mite9TMJMGNGgXvdPL7BvFhtjZEvJeMYZJs6HNGQmv7NQgx4bzpbwHKR33",
  "key28": "66xYiss1mnbUt8EG1Ms1h1BGGibd6yFGtbZn9kHxLhSsRmFecoE5M64evcZNKG5R2LbhisH6k99TdHRgu4Z1FKtk",
  "key29": "2Ls1YB2KX8o4PHLaok2ogjE1K82dNhp8tuhFr5A7zCK67xdKfWF2ab2hKNpWyMkhjNXfEQbY54eYpF62SwX1YH7p",
  "key30": "5etNn39mm3Cv4wSrAH2Yb8ZgX66fzTHx4iXhWTi9PpSjYEurKZLcQKgJbzGUV5HqLi3eds6TRR12EXTPdq5EfKeg",
  "key31": "33fkbF2vgk88ACLVHdGstSmCHYRVs1njBZsqJnoKWJEpyMUc68ZXdKFCy5XEpRAwtdTmFTvndH8LJZDnNTtL3CtC",
  "key32": "5UqVBb8FtKiTULPbxwTqGCa3Agq725EH8VexUj3MNv4ZQ2GbDH5Q1CFBKuqF9cHfmrRjf7X6d4Et2trGSwHvLxoa",
  "key33": "2RJsQ6AtzuVSyNX4aircQfzGXV2SAtjPdvbLBPNHMhXCoNWGkiGYuRQqC2ane7SoLpwK1tKjLwmaGKyPEyr3LLt4",
  "key34": "4Twi2B9MWjpb9vNZcvUP547ftPrcs9mWfXoukTPM1NcfzwLUR5Bq76q4oEKte7apVPKg6CKEQutGYkZjcF953bxS",
  "key35": "2DGZju46cjuJcy4xX15AR2ugNtjcx4kaKmPVXqhFeeEWqETRY1vCSW5T4c9Aynk22bTNq8nSwP4nwRAjP8urjtC8",
  "key36": "4tuzgXZQgJsog8bDuU1RaNkh2EoGfgVEfPmvpTn7TjnC91MpzzxErjPgDp93rzBeNgcC3HvVKogdYC8jjPhSxhDx",
  "key37": "2MqxaavKsCnM29Phhj1BoESKWQxL8QuJ1rpiT2ZJyG3TwX4gd4wjD3kCP5RGUMVhrLLFDEPv19xGg618WT42daN1",
  "key38": "4DgAmSboVXZxBbyMGEQcWq3R2LxTzbmWqq8bPKCR1hBxx9LtRQFxh5YAwfneeHm34n7nX7UDNKbNEdwMh9peH9zn",
  "key39": "3AKPhuvDoMEZA4pouTsNCj9S3tmjAQN9q4q8tNzGhbafxkekjj8mDSVbW8DQBU7JYtwWFbwh2G4QUAPULKNsYkrY",
  "key40": "5fEkRL886jGSRXrNuTXsiFDoXtgh9RzsbHQadksy59pvQiSVZ78Rvmmvk121uB5HbnLHmzt7vfgKK23aBg5k3B73",
  "key41": "3iWVkrECRZMRN6oa6od268RtNiY992XAUpPHxouJNsEB9Ym7b1nSyVbKscmXTaBHY4eu9e66HCfWR2t95Ybu9RFJ",
  "key42": "5aTxKgwAk7PbUVUC7rv35u8Pkahi9tNC7u1rNa3bDCBeWr7haKTmaKbZ7VXR1hR7Dr3ZwT2pFGayxftrEiwKHvJn",
  "key43": "5Rag9AWCHdvxnSV1ci6xBAF11mZAYaWjmEDjbkJwsequVRUmUv75yQWtVGudrAgFtLXDJtpohMxcN3NcmJHXjvP7",
  "key44": "3sCzZC493sy4x79BnY4thMzZij4ta18Wmb1AogkQmL1N3JDYygcWvpjgrRrEGoKwgVvFq7p2a8oAmPe8THeCNf7"
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
