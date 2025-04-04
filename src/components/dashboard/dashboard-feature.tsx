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
    "2QaU7h3bFEPgM2xEM88gpUVggh2quHyxDvLWnS9xc2iQDubkL3ivRFdFmLDzqUbEhtdLh8RBu7gUoE1SG4pe5Y8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GuYFmg1jStaQo71zdp9eBgvo9XezmokQoqsMUyKpCWvm1SoVMtc5fCqXgpM8btqsDZgPWMPnGg2e5WG2d5xyi1K",
  "key1": "VMBMm1sJNU6w51hKFPkCFgZYYqWYBPVCN93oBFsC8FiXTqFdxcXPjgW1b3u4DUKN7MUsMRDfCMp9nj2KJ394EyK",
  "key2": "4vKzRiz1zef81nZBugbEL99sCWSAmPn6wW9cwT4Mxw6y4JHY7WxgfYaFgsAKPe4LzCDKCcU9DFQS4uC83X1UdN8E",
  "key3": "3t6AZcRS2L3FYH6uF5hUzPoWH4waRJxycERFVnvx7uKFpLuf3KYpGkxbDPz1uAE2ayC17pxPCNfC6FgjwNZPizsX",
  "key4": "22YTZUM4j7hLwM1qr3jbi9ouGNqrKc6LhZpT3HcShbEvtPQifNF15R9t8WhVYcUuGWcLvUzjaLLpdQyB7wCaJv8Y",
  "key5": "2omjyEHtNSnzmKSRPiMZFudLaUBCvY7mdCmgc5QJTAV8xmojb6j7Xx74wFrdodiYfbG3QwRm1QWtWNAXoBfEFMTy",
  "key6": "25QE2RCZaXAYgkQfwoXdfoEUG2GyFJq4gAr8HVjiN6FZQo79U7W42Ytft3ESgcHs2McUUyb19xeyt8Cv2gSg5tgM",
  "key7": "NtpZMmm5QUAZcCJMGCg4Sv51AP95wTad7PvdFZdff4ZNfW6nzWpcRCvpuszN7rmoRDJh4sL5DS1pLW3n7Ss9s9b",
  "key8": "5BsRDamSdHtfX75fuNfUnxrwpkNWY2NDaUhpVZverXvB5bmnBGuiMMWC5dKYyYwtrADeuX9kwxkxJHCfAw3cgYRe",
  "key9": "2XUveTG9CLj1JJwfH16GhpuKX4ZMakG7zpPAvpUVGQsmyReFVk1vKe3r1Z4dxQKcMk67qjmsuYYg8oroVvPMKeH5",
  "key10": "5xUoFogyqtXsLjuZUQhcgDAtDGVpnTpiWWVW54pDqsGfJxFXn4idBxZsh3tzxfbUKbPQMLQzMAAb9x6LeCGexJ8e",
  "key11": "K7DbX8uN7g6yzeoQmb9sTpDsGHh7aHSXGX9j5exvXoeZrmeMVLexJrcbrGSFeztbsMKpgssASwUzWkA1h4yHo7S",
  "key12": "3VkU1Ypwwp8jrAAzb2GZ2y8ymxMZ5mVDkGEpGFk4bSi3QYRTgTRiveLwvmYnSnE7oQS25EJHjc3hYa2gpnsvgNuP",
  "key13": "HFkKevzm2aLqUDuYxWkZe8zM5HuXe3fuw3DYttQcVZ1NJ5qxeDnLnUiWM9gaJkVaSNiZYSNrGf3kb8qV7sRFGn5",
  "key14": "tzUPR1oNZogH3HaZU6yNT31tebgJ95oBKsPBGLz1DxZoCAmhQZKnNAza7t8ZbqCcRbHCjvdyb6VjsYHQvbU146Q",
  "key15": "2zkwTRj9Vi172PpdcapXn2UR7an3qki8kh5zh8EPB1KkhYEHG7EaZdf95VvEbm9jr39w43wSjsTnei3ai34VNyNu",
  "key16": "53nZ7rLrvWHR314oCvoaaReRv717zd8zgWh2ojgKeAymsBP4NPbnZtxiqs8K3MyQx8dmYHoXJyJfYMdcEN7rpPVV",
  "key17": "3hpkBqQr4zmPHDrv7uhi1NCLw9bJe29LSpG9vys6FgnD4ziUdMK7EUf8utMfaQrn993Jb2MAKMcw7xK2JxWjB3eV",
  "key18": "9NB7Mw3TP1g57L35sigWAXMSyyrMgZdDmnXu77ED6eNEj9FvWpGWuP8YazBmdHVgKbFFZ5wM9hYhJDBFkdwxR2H",
  "key19": "2gZvCaia7souuDwY2HrUP8MPZcSn9cwFHxSEfSnHGbafevc6cjBjwAt9Buf33e834KXqdjk8ZJPyyU4UY8csmMrv",
  "key20": "CMy2XrF9z8wMhDuKgNrNk3PmcMQuRB8RUA8iGEfgptAjHHUenF5ydH8h4Tt8gx4ZYFpA5nBXUH3XUi5kYneATjw",
  "key21": "dVXqE2w2mMPeco6k2BHFhf3qZV1csB4iLd3EWRMbQqE7LupukaYmvckwqEXbaqrhKBKUFi4GCubVFP32htEmSff",
  "key22": "4wxKWUXooPjeMARD37PhJwhWVSDyUZAz9jHHD5C7ST4Lrs7YYAzUTLGZQAnnnkrfi3cGfP2BNfMAxEAAB2UfegBv",
  "key23": "66omipcoXPy1peLWMXmhEfypZFiNmzEjbpDWsZFD4jSRncXsXrRZoianJ4XFWsTp6zyxF4FYzFTvBU8nuPrgebpd",
  "key24": "3YfhR1r524YyTHEThKqKPak2cZWF6MvCQw5CTD8RrhFuxQoTBtgVMbGkrUKezuW35UgMExzPmkwzLGDKzg1aBaUz",
  "key25": "5vGy46nixsqWaEtd4nTBGq53cXjN6CwDn2fNVQn5iWwScFYywQxXA2jjBfczBHKgnHikhqvaHTmtKj7iUuLDJ43r",
  "key26": "5QY3CLnakjvpmNxHWnCqGGeXW4kiwL4CGLyy7HNTiFeRtpSN2TGibZCDEUnwuLwqb6xRTL6tuBKH9icy4XBkpLMB",
  "key27": "5NiRfQhsCn6cps9XbWkZaSzZvoLBhaXMraMntLZgw2jacR8pxjUYm6CNWAVd3y4s5pwya8hMnj9Tm2exXaDjMefq",
  "key28": "d7zm21GJSEE4TwsVLMb7XNrm2THMwzsitkhVKDYeKcRsvkbQZR9zjGu6ifELUxVPV4NSmabmZpFts3aQZSjGoMq",
  "key29": "4UQTNKTTpditCZgPzStrQtkQSg22U5PWkf3Ka7F4cTFnsQuJrKgRhMKrveqhSy7tkuxWSTRjBkX6oPoTtZKRqUsr",
  "key30": "554ReNroLDScLsqtxjuMHGBubGdKE2xR24EDRvoV96Rb6J1qVkprJghnAwLKFwEoA8j2fQCY2XEzNc8jd4YNrKrb",
  "key31": "64wmFq1h4uw4kowwF35689oymGMNXvDRaYEMd8qsCSUadMegXvGp3twQ3hPQkto1UuGmbTeKp2ANwQmBRzsoZmm5",
  "key32": "37ZLTHxuhdzoFnt1dzCSxkjXsqsBYthNrNVzLgscswYka7tPnWB8H2ZzyTdGwWuZ2cNCoshQDhGwg2tBeHkUSBEM",
  "key33": "33YGMKqP5BLRhxUXCzHuCdUTFdNaZJKoXaAPgfHtL8MojWfYuJTwgaFnFn7MQqCJ1zZwc1VSykWZAAsETjsyJWvp",
  "key34": "sYgTTbgKTvDKhfD6sc81hckvGhEmqDARyQjMLBMD46DB9CtSwDc8mpqX3bqyNpyELzWx4M3uUFNY2GuvYwB44U4",
  "key35": "3cee55BBBCA77KsgZi54BfBE7sH6yzucuAMwV8BSfmRvz67GeymrXRfE8RzXpNkWU8c2A6vmLmTKYFd83ME4yh6T",
  "key36": "GDsfsRDDVGFMYrG9aDF3mij5rJ5pFKz4HUT7ZijpxgUmMLkdiQhXbHwfFndTyfXehNktfdxe14dvEopbJPRxczk",
  "key37": "4h7rWT5hfhjpbX8rPjjwQ4bHWNL1bbv7G3BXt8b9NVfrgaxhphpsvRxVzun31Pi6z8aRg4QsdosaXHrs8YD7PVHq"
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
