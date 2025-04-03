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
    "3F1gkAynQja3D69Ae2tub9TQo9ejJpUR65mxvzZ3pyUM9eMS2P1X1y7XNQsLw2FPsPMfyayM9J5Nhr8adiuiAVsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZpSEUCD91jrcqSP4TMWSoW47DJXqp43tCAnGqhaBfcTfkfhVpu3LaCp6BK7D7wNvz43LcWfghrhKu89K6uSjcVh",
  "key1": "2DiiW9V8FRwLB7r6fQTbbQbi3JiJTBjE9hEHKHHoCHeYff22pYqTnhvDh4F57nj4NBeBoUWN5fDLvLkrVj742V32",
  "key2": "2Bser7qyrGoiSqv3seBBn2VqN8ykqApXTRDUAfpgxffiwpXuC9t9yQRAkSyo5RwsH7VPxEw2kpapaYLMB73XULvu",
  "key3": "EXEopj9uvu68Nua7SduVzK13GdNcKWX81jhS9xJ44gD1TZP2fs4ePoqGY8DTyu6wCWD5gKVLzNhn7f1rtdxbtVh",
  "key4": "4UiJkZKDWcxrQe5PAYrsDAAcNrGhLL9op3RJkiZX6NvZEVzuPGnpCc6GctyETUBrWE4s9N8ocq415yhfX3UYatvL",
  "key5": "35X7BzPbGKtPUxWKHVYajQ66zXeghiyskHGyqGdDSgG7ECxG5pFuy3SqfCECEtoYzGJoEs7e1Kg4QkrDWUSPcxmT",
  "key6": "52fwNyPreLpiNyB3Cqo1JFMyfS2BTVVFGh29HDNrW2EVqWjP2RpudVQfi9hTnbGSbevee1VFnGsUQnccNQeG3vwe",
  "key7": "2jbMPfwUb1cnQZ21V8FaHiRfvXN9TnreReM4Rsp4PHp4BQBTav3mHwMGFvEzZc37dbeUvEFLQaVsN1YPVNXZXbLR",
  "key8": "5X2YVKL68a43Fbv4yASV65iZDLahrHWQLtMDLedRspCirTvQ8ML53TBmsy87VqTLkShfseT3aSSbdQenNqT5TWWC",
  "key9": "3YzSurTGuhDbcSUo6MMQB2xLmYDBRRP7ZMNPu2XyGS8onyKGKL2R4c2gpq2mQfB2GihPopPrLLYjHsx5oCgisx4X",
  "key10": "5o5xmZvWVx2C4fYFhgtisP9VPu8XKJoWU5aT5dtB14X9weKuTFxsP8KCSo7PES3b11BW3U3AMcCGTVQLfM7yj3vc",
  "key11": "dSWNYJnseVcNYj8xKrCMzKErxs9D88U74PNdro5YwNQqSpp4j4dBSJF3c1dX6tTay7gmFyQUGW7a2eTf3Nk3feP",
  "key12": "6fvCTMTnSvY4jEmgbpsbFk4MgjFXWHKzv1imhdJUgwGTJr9n4XnhKh7C9bYx18SfnsJgEQxKLanC6npDUD3EQDf",
  "key13": "5L1HNvtsah9mgkPdARYkfhYHHXcMPQTF5Rfs2bvhof2Ve9fryeGrCebFniTEwZQRGAXVKo23qo29ajfW36HMSQXm",
  "key14": "TTsJmGWNJ33bFEr6vR97wGHyazxJ2bGjkpNzgLDkAifeE6Y83RCDZVpyagzKpnk8g21cEP9RmXMwhW8Hhw1iH8q",
  "key15": "58oPdwvs6HYkTu4Veryi2ykk64jVjsBaj2bbKh1BCH91KLii4Vwz1a5pyEbX69qRtLYyUZk5pmNw1CU9FE4CDo4W",
  "key16": "Po3NNoQXPoYsV4tj9rixf9mkgktfjeVKpntvTXgSt8s3D3cgtRxUPney3Jvoa5X777VCcrzRnST6tAJ6ogVjYNm",
  "key17": "2FMSQzLjKbERUmywcizTVaTTRPRFSYusYm1hkiUh6a71ADbVqPrdni1VnUszWSY2avusuYXNnsyfqxjDkeHC81bS",
  "key18": "5ThmFwya2F7CDqG2TwMGgrwkEt9cfpnUsg7HKCZnVVCNfnHD1hrhrQTHuUAR7aj6s2CZj9YeZVihs7mbUada5WE7",
  "key19": "5jf2XpqyWNjLBpg6LDtkEddepRgtPoLiLwe6urYUa8qpAMbML9hDhfiJ3pQnnCavrQqBBqTmhYPyV3RT3TfhiVW4",
  "key20": "3f9Z82PSZPhAkXY5hxxTYUNNfJ3khke87AmX6RriNRogezX8aZ7WRSvL6fqFQeyaynJjKokxfiY8SkPfzc2iJ85W",
  "key21": "Ffp8SQmLGU3mxDsK9mtiwPDVAHprGw24MBbc3BAdjvw4jqgkwg1xDsCh9j8Z79jCoz7YafXPE86sDiJ4VoTK6xx",
  "key22": "3EdiTDtJWPxJRqoMA99B783ppVmmAwMbUm9u2myFU3NoXNFNReGjcmvxdBJpQVsrhpggeQ7yaNFaS43LFpo4Evrz",
  "key23": "23BXFTYt9SPCrJuYHjW7yfd8ahbSgyqGUoVn1t3pvLUZjtwhfmoybTD3RaKL4cCGE9C6ZFGqc5eRhd2iAD8fYQVz",
  "key24": "4U8qPQiJfMNTgcgtSJnu41A1k9W59kHM39syaMxsNNu2f8q2kBGFKKGi9MKv7dVzE6cHxhJ1XQKn7P8Y1XjxHXLL",
  "key25": "UNZF3uNRvQXQ8vHvGkixWMF5piXt8cDdbNHHFkQtySYYWG5ZJtvqQrjuZj2ztgiFUw5RkXPDVQNPv29pub93Sng",
  "key26": "61jAYJZURdgkaUzcvupiMv4HkJqkhTuxGaithJV2vQULKmbZLBoFSEG8VwfLqV7QvxgCczcyVvGWiWmeLVCBTtLG",
  "key27": "hGNujuxapkst61QpLoaKLTXx8wr5N4sEnkDDXU1BJNV5dnRn4yGpbNCPZ9dEkYwt2jRoYrv5k8aQrDLYFBK8GtJ",
  "key28": "ka3JaqfJY6gnXuVaCFR3To5npSbxRfBk6UBWGza2tmKgYs4Hyep4LN8MNCjq2f2J828MuF8RzTAc1GQEti9X5DF",
  "key29": "4ccWgYYMUbeYmEz6ZgRPWqSsbNW3BQwAq7XKV2duoDR1fESwVysELGj7sacZWd4oEdjt4vUTNewRLDTn8AVhKRko",
  "key30": "3gzKMYLgg8dbr4o9QFVoSMrrrdsActSMFGPKV9nFrL39ovwPffwYQYmt3w47G6AfmWDNRWk8cyJWQcwtaawqFxD",
  "key31": "wvrrKLdUBzdEHNnxhVq8Yhwzboc7K2JPjpaZGDR8Bi9tM12Q3hFiFpGDcQa2Q8uEjArkFyT3yzoF9VQQ1jTC4N3",
  "key32": "437CHuGBKNJ54o8Jqa11F2mJv5Tuh9r68Aw5fuZryp4QySmL63URqD8Bpxu1MKUPVZtZZAyJmin6AGAqPcKUgmGN",
  "key33": "4xyYaeavv4yqnzqQD81XG4x68mVFPTVM96m9Qhpmqakx1wgpPpbweE8AohQyPXneCbmFrBoRk7YVyVHoUk4EaA2B",
  "key34": "KBEeTRatmjwt9CMDdgMngSc8PfziHEeb4XqXgiadXTLRAHQVRCyj2pWH1C25wS6Sw9S7XybnbadYgwve3JjHJua",
  "key35": "5wXyDF2y9pm2stgk1Y1eFmVGZxxiFeTLwo7bLDMrkzhyEQnSVho86UJqEw91Bscnqi7bYMPLdoour9R2zUXQCxav",
  "key36": "4tmZVi1AFeGb1hhQh8mSK19nVC2MMLWCQb2k2ZX4C2SUAWuB6ZeMP3TJcqAfZcwfxZAabGdVtUFsr3FvwL5kK9s9",
  "key37": "3CRjppxqeRmVjD2dnyoAt9brKUB7QofAU1YaqEMzmnm2BLAPVD1ghyd3Sb1A1PSzt31TXMHWtbRaz8Fghwt5wpRN",
  "key38": "3oHDtefxEvbkAB1xQvuZbEWZXgvErTe26B5WD6XUxP5jxkmfrjrg2kQxjhYykMW9ewgKaC2p7sKmQjrouRfkArUc",
  "key39": "5MjUDpHGfksX76kJt8y7YFDiRsdjxrVFoukuz2KMyBgmbHu1yATeFoG1b2CGwsytkcivSe1H2nwWHKqwtLpn3v5g",
  "key40": "xLKacUAxC3nG3mz7VTxAvivRosKdsp1MGV77ddPX1idYrUnQQqbWom16nKi6n6cCnhvjGycWxoSeQJjGAA7ni4t",
  "key41": "2MjJw28ejPB54SAC8WPQ7ZMemT91YGAk266hoZL32uJ5h32cJ1mPZkpAUwGCNiJ3FSEt9BMmqvuveJsjyvubdhYn"
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
