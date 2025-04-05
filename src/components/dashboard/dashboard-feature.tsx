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
    "2d2AVQFFBiHr1fTR7qdQPFTDH6YWb31TkT795VG3APsZLjiXcoAbAT2MPFG4s8ZbtEGFZpxbkvRFX7fhL5NAmHoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jU1FaRUbaz5LTsfQ4PJkY9SKRt3W737jTMySr75cXm11TrGKmxBqtosm1bSo56hd4wXzZXSyKfaF8WMWzXKfYE7",
  "key1": "4mmCLseCe6k89mVdodVJj61PyY7KmFQVjekZLzXvNUTMK2acxYYVgKU7vP3E11gasG4ExpdUpEvhjuKhb58XwtMi",
  "key2": "5MS7KMA5km1jXdEqUdFRqjwrKvbWfitftb2gHs1ou6aEcxA7LDkKNWYFsy7b4GVwVYeH49ayNnHnZftM994Mgmy1",
  "key3": "5Qrj2H5EuFptHVGJjotPFUdNA3gWX9MH3qpzU7VrWeXfwPCUZ7B96r2PEP5CSttCogiXZopvHQRqxYn4tiXBCcA8",
  "key4": "2mqG6J1o8aHeT17BC6rbQPAQ76AQSTKhXvVnFkUAMvfNAnJHynmXjtmC3G2FqZGzGcQGPquEjeJak3AtcdJXNnPL",
  "key5": "4kN55JHVKpHeHcEskw9QfcddzznAx6hxJDhvrJp6ANQxpCgTSDMmQxyrKG1Hg934GSf8LqYwebmK41sEQKpH4A4",
  "key6": "WbQVrUhMwj9SEtuCLfPaPNLuP4zjQjpiK5AxiktXYe7gNST5heezFojXmtKC5bmy2sBNHFqN4RqV2498e1jB5q6",
  "key7": "4mbT3TwBhKGs6fH2nmrEcUhKbb4exCanuYVGq32vmVB5ueNqVJLENiS2uQBgW5HyMRoEiZAHmyfz8f74TL8vivbD",
  "key8": "26xcgTrrxi68doKdBWkzaKs6wokhK6uRwbbHTAug4cBQmKU1sTqtz2FcNnJgpgGxSmygp6tsC7b8cHF4UadDWwNw",
  "key9": "4jp7m1oXa7EjpohNSQPnHP5gNLoaoeH9bDhRid6gXETXDp6SJ6uqZs32UqLaq8w5KqzXecJnB2eZGuvMfAun53xK",
  "key10": "4oLBehU2cCp1BpA5uJNYwjhYcHycnppBaUapyawc765JXvVWHCx2VcRwqRHUkZqcZ1CFZ9AUngUo7pFUQNWZuoQV",
  "key11": "3QbuEsMefzGkdH6Pzfn5knS5YWTGghv3M3dvcPpxULUQxVWXQ5uP69dehthBPE8rpA8uZMLxnreXbjXE6DBhf79D",
  "key12": "5Yhcxjm9HXMXSCN6XBvvC9EQbGMehNbcEkzZiMnz2TQvHqCQSPJDdAMMdc4MpNYRf5rnKHm3vKW39oXTnGSBt3kG",
  "key13": "4H1oMtdzHGTsSMmvFB2F8LmByFrAbbgjtyT7XqLz4HK2Hn3SAern338W8EsVEc2at53myNghCMcZAf6YNsH4yino",
  "key14": "3jqKHWkz42EhQiiBW8ND4uK2cTajUUsaL3HEDmAgj3HRCjHw29Y6C5P1PJ33cyB7kdtjumavCa2WvEkqf8fcoPyb",
  "key15": "35g4rXmCEAXtz4x5cvoEEA8QpWiycmQjbV9HrBsveTUkgBkXDt2ZyQHvDWzjtngvvwW5cixek1rR8H3zQ4eKqays",
  "key16": "HdRkdAuMCZ4XVugFvL4RBKB6f9qkC5vyhcEJ7ztKHzBkDjfWvWX87rHWGwjAxtzesdcER52kbWSzvaoERrr9w3p",
  "key17": "5nobQYnz5DCHU36dFmtwDwx4FdgeNJ3V2dkYEfxeevjhe89oTABfMULXcriKNEQ5YijE5VZt9477B8E783c3vFWZ",
  "key18": "3uqRGFGiz2xXRdSDfucqiyDxGpvdHSMJZMLNe9AEXj3b6w48266u3AeZxUszL8Bkfc29UaivZmAFczCyeaj6zbWp",
  "key19": "yaJSJhYPskqbkGd67EbayXLkedDvrEra6EZ855FdX7V6rnp8NmFcMYXDsfJNAjjped7G3UWAwvAkHU58QFseV6A",
  "key20": "5oA4o4msAhhJWPrfNFGbTrDJyjqcQN6Gxvpd1eHamG6rcCStu9gJ75i629fu2ZD4FDwjoMCaVUbVRiHiJ8NuS3V7",
  "key21": "Ccuk4tEAnTjsPU2P5vxPHarjckq7TG3TmQ5chFKBtvwSBXPUn8ZaCsgBSxEKViof8QnnXuT9GjZv48ELanVtP3A",
  "key22": "3Z7D8wjgsM1WHA5AXRv1apdmAqvjPk9TmjNef7gB2wAr1tz9TcDySwnZZTew4rS1ZW2KMSKLWFg3JsF799NFS3VS",
  "key23": "5X4DM7dK95Y5Kuyga2NirdrN7wWimhJsTbUGxYuBZfguzCfkJm2qyjL1wA6F4PiQ2nGyqpjRPavQ34Tnw64P2qLS",
  "key24": "2buFw6fp4KVQyFkqTpbGenUxUVHwfe4uo4P35MjQeQ7xH3KR9ACEkXpcvvXir1yNFvasP8b9CW2WNUFNH4gPxfuF",
  "key25": "3wkvure9J2ggMrSh4Sp9qicLM5AS5pmMbhireKGgtzJu537sjBaP71WuA7Mjk31pyLh48DAVcwCPB6Jd38XJTuy4",
  "key26": "611ewQMMaF1tAigWcd5QjZLfPEYPMiRDkbcfQVb5F2cXmrGiaGs2uoQ9roKfxfTYmJXKcZ613aPpoFRUdTMyvtwv",
  "key27": "25z948G16K4NQakNGm15GybQfpAWUCYgqxyb4Ssx8ftpSVfHmPyFZQACR8VXXjiPUifxHaSoz77YA9SXjEwnXD2g",
  "key28": "2nKjGqdLNkJGit4Gibz4y789nZPpSZ8wNV5xwEJNZUfKzxSsu3XwUy7e2R76YCtUz2g2mLNX8iZxtwGob2v56SKT",
  "key29": "3x1BPBARyRYUBgKubBgPpKJE3Fwvmb2dmumtGVXCCJ8Vy8ogPjvnAqyX5BQxc1ubvEv4DtPxWfunwRDxTSFAMtLx",
  "key30": "5ZaaUiSdsYqid4b5uPRVu16MP6FCJc3AFkZzPkA5RK4c4527WRsz7qFHdqfAJ4ivCPERyUTpewXFLoHiTek2t8r5",
  "key31": "4SjZEwxoUimuzKdQKbcnPyNDeQsYqcjjxaX4u3JyLavgsrzHLCGJ6ibfAtFEqksv2fNt8TY7bRCdnCH7vPkxiEDS",
  "key32": "5sXDw5MffRxE2NzhMryKaNJw7yPk4XMbpTi1LQBQ5FeGzdCair9ZNCgsUAH4BPhzgqg24fd2k1Lu1aY9a8cAXV1",
  "key33": "BU1bZKHQqN3N9xBc4pDCck4bzFwTgsRLHkT924nSX1Gy8mDAm8zjVfXqGHzkMaBg2Mte9ehohB5fXXPdttcdDyn",
  "key34": "5yzhydpPSNA5KXPwXPNEbGWA49mw9Acdkg4hfaBoVDkeQnJDqXSxKsrBWkn6v9bpcs4kTXN1CUPJLHFoJVgMR7UB",
  "key35": "9yfE8DeiDjRKt2s7HNpMXPLVxBPfGzGwiZbUCpSRXasdFJnqBFYZCuAgkM3E8b189TPXQovg5HK6rSCFJMiSfxZ",
  "key36": "2kQsdp9BgGLHv1mvydYS4X7R1FzBtnQ2SUjZL8kvkZzM6L5EdYa2VkWbpAZ55LC4jZLsZjePdXVbVvY24APNRffA",
  "key37": "2Lsph2xFykykuMQDqc2x9AXSkoGNS2WvAmJTuUjxE55tkfrWmLmkc2yUuihQ7cyPhvLTx88DUqsFfhWQjrgV38zM",
  "key38": "5oqnY7xhxQ7HJ36cWaiXhRargkRo8iN4ZZQaNhC7qGC2Y4HzXWqDsCR9n1YQMU2W95hoXKcD8XkboQZdunz2VPpf",
  "key39": "4WAHYLtN6iaxgpsBBSLU9HYMXrSoGcWWK4jCHSXkjtStaR895uHFxKvUFiLTHySzq7rb5a42LnAhej5veAoJZ2TN",
  "key40": "58hQ6QWBg718dQLgu6bXv6t9AeWzhCViCnWQFKJ74ZjPMSGXWTLXtPLTYXS6h8ZGNpHhLiSEKerzBDMHN5qpjwCs",
  "key41": "5t64xxfrPubNAkR1svFwefmxjxGAybA5RtTyPtRZCDL5zrG99GkdrcTzgarxYt84U1gzrah5ezdWqALcM3LZpSAy",
  "key42": "2wd9hwCsgCqGw8VNKMLk4NMGm6LEvS7yYkCSZaK19BNwDzUmSSUi1duNjzrzguT4Ag8pfys4S3F54n1UkbtcUd89",
  "key43": "2c3fjv9wDmANpMN3Dh46ZDpytjGbKUmMNo7pmrjdZHGCq7VJWGB3HpHABLwnNn5WeVcVswoPxfkd8poAG8oxeZrG",
  "key44": "3T1nWiwn7QpVVg8Ybv85yjW7QdAELEKC3rbRgwYYDxASuH6uS9iGZntF5R4GPFeYvewKr8zb988NhSv3DNVqPvED"
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
