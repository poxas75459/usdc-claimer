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
    "3tDaLcLVRa7ZNVrvHCXWnVwmMJJpQFAWftpV6KmWWaJn3TN48w1yGdMxahQWtJTUUREBbDgEXFJiDd71p7aPFyug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LscatEwxm8VKo1gJjMsnjGRucgSJhEbZ5SkVGfjPHexc9UkKLAQTHdEHayXHKkYzWoM8mhE1LQtNHoWpDNuJU7P",
  "key1": "5Lqd7c1ZygJCS173JLWUkujxStRyesGjdvE38Zp5FZANH18PTTPmfDdWdpfTbpTUSuLHBJr3AvHbiuzL54u378U2",
  "key2": "CX8289opwri3VmHMGEd49pBbHquZ5WJ4fL9UXNbMbAF9sRvBDHme99mttdqLq8rPWnKbUuSUibCriTG6aF3LHeX",
  "key3": "4hBfQbqPSzu77stRqfzaQCPPUqnKj4vWDFyvYrmRvJ87dyTZPnDXn12ZZq2Zs7cT4sb7LeG79mCKnkebnqTSAQ3J",
  "key4": "5V3aw58cHZVXwyCACrDSfni9t3RwLZztrPDHBvHXRkZvf6PA8QM7KktTcVspHJYfU2WM88hJNTHfGdAaufG1mMUj",
  "key5": "3FKcFLkQonFuiLnFkvfWtMhPDB458Hccnbv5jsLnNCxpPYjobVUznUBs8Fs2nm1MLS2nRfS3YVncQWWkkVP9f1m",
  "key6": "4UFPov7FeGSBXPHV9VeDLbQjzvwn1RvtRpQ45RqdVwkMoWPLh9YFfdRLz9fBwNnh5UZoiNHiPr8mv6f9V1TaYmEt",
  "key7": "4fGDfkkXjd7otYCKZc5ZKz866ytCvUf4TnUiDf5PVsQ87F6wSsmEmgLd3aUzRURBVnCFU68N7MuBHYyHksQaFsuf",
  "key8": "663mYPbi8pY3YrF4VZ2TifLnF86WvnoDRzqzzb4JEmBgGXSmAECvusVde9Lm74vjWd7WnTsyHG9A4B4vtswiaJft",
  "key9": "4W4EE7YrFniAa2r5sBLBQCK9Nv4WCocooCQAP17DGHyEv8wT1JCoFyC87WQfwZvW7wTPPkoi8btqeC3TJM1mVJSK",
  "key10": "2jyTacgzRj7gQuTAPHsYF4HTReTcifNqY7Mm3xN2LFzASXFBcuf25pqucNmwogsmVeKhtCGE3NjwqBSDXnJaRtWo",
  "key11": "61ztfsffgueJZe9fe8Pm8RU7xqvcTLQYsxagWfGThxVGdMTG4KZhQWuAt4fdKFtrNp4kjAh5pi6wXJKWGGgPD45x",
  "key12": "33ZaYqWewf3EaBVGopMLrFncGvL8fZxRSHKc7upUpnmDVBHAMgTQ9Q1Utu5chTNX2uA2xKeMrAAL6GuZVgqr8qCS",
  "key13": "2W7LoGdMevux3kaVfxuuSo6LDHjcD6EnF3MHDUnrHHhvYr7s8frJhSfujpyBtSNXQi21VmVKrtGFRth6isB9WpqU",
  "key14": "328iovxqAiAaEu45puLjPenFyeNWXq1AsjxH6GcgQMA9bzLFgnxz3FVKSgd6HTEiUBjm35FGhx8ZvoypRJxd5SNe",
  "key15": "64X8NyHifVLfzniaSAYHnbjAQUhGmv8FEazT6uKV9LtNXU9R5mnftqzrfuYjY2e7g1m6WM2iCCPbWeNyn4guqSiQ",
  "key16": "29QsEFE333mPHy5hq5pWw6RG7Xdi9Hge5aA9GQWC4A6BByqe4vPnWdHTsXskz3WXnYQWmQPG1ymHCp3TE7NYHwRs",
  "key17": "5PErumugvbyhnFdSs5GyxRXdVfgSx9QvVeqDrn5U7s2jWverenvQTeFxMZpdpknPyaXBSf2Cd5xrDDddcdvu7USe",
  "key18": "2RghkYEGKasMBDSL8CBvYQPhxCZZgeEGfttUmAz4En7Tfn7ENnVwjmcoih8STYECft2yKPamzWqJVQXW6bKv39NL",
  "key19": "5wjn73MSiAhrKPPggTct2zoKgb8fqMZwjDEESzPpqYrN8dGksovfbzefJeMhtnfJ6wRLF2G5KrejBMYGaUtFyXWg",
  "key20": "57WFC3mSrRDxmFtru56YCnFWcdkPM2GN7Hr1iVMfSdoEhCTohK1wNQWtPCfhqzdResiRCF1GLrbNiqL8rE6dgP6M",
  "key21": "yWKsAtJ5hm5d4dD3urWUfKX79BYGrWtqH1Y8gMYKXX7JcNj5wuPhXaA95mEDzahKQ7eBnhXSgaE6NHDtgqouqxt",
  "key22": "2QXLXB1xu7YnUkAHKfhFU1spYL57seWEfhNuzZVbPttk8gAS64wt7nxC4jYPYkSZAwyHmHNtonYwitNAk5hwtdqw",
  "key23": "5MADvDFJjSXmFdJBLWMDg2uujYZNnfyBzdDdU36q8MP13KKbDTf95RxE92bqcoRq1yQag52SFtpRHxnU7cxbn1Lf",
  "key24": "3eieZ4M4cp7ZgisTLPQEuuFqUYy4xfkQNLdMqDnVkBsYt9BfjqYFJ4bjbh4sssaoaJFuLFir4dwahirH6Vwn5BjR",
  "key25": "468TWFUfU2PXNtfZKwvU2owy97ZvfjFMCPoHUU92X5xm7juQgN4SJvqgASVU4GwsRhAZqhsRSx2wcnfNZrHkob2B",
  "key26": "2ZqrRKh3Tr9oH98Ktbw1aJMGuLFSRajsxDdbeNBtxsARQXyEyDSKPN9xQWq3A7B6UZAsB2CeHnTt4DyWL2uXBDSM",
  "key27": "4MtBfPGL5McrBjCeGJUwfv2Da4J59UPawgsh1RFFLpmYcV3yoh91GyLbKEbznjSdywMaYfLJGr4U8veuWWyYZQKh",
  "key28": "5SDreQ7pbWUbE39oGDPoH8FUcWnTaUnC9ppZ8ygW7K9BMYoWFaw2tCX2Rjh81VN7hjxALpx79Rtd4JtAv4mMSStK",
  "key29": "9n3DVWgPZFKe4kKehLAqT9ervHDrv4ZztXt6NbNq4z5jNR4CYzSs3PefTkNsuQUJ4GYVh8dgEstsz9zFoT7gASE"
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
