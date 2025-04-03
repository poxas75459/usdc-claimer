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
    "mZq2Q1DYmzVaDJ3Hdu6iksUmqgGGzLTVsGCk79AkX6hY2rmiMfRgF5YweWv44fWWZcJTyuXB9JTRmP5ygAHESb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31n8F4TH8Exo4uwo33xJtre3QofQpYCwb3keT7zTBKMATwAKqbYDEnGjih9eNuNakiNr9jdpfNFqqeAexeXYtE1F",
  "key1": "2vmDU3GcHPWkHhjHDYTmBpTLtGWAcgV9ydeoKk5YMijok9fwR1DgQSfiA5zeyCoiGWLbdcxDzRAJJnxfaK3BN1Y5",
  "key2": "3HoD8Gp57ZAe8ckNEjG7uuARHydVCyTHT9PE4U1mpSQJvjSXQYgLMMb2B7RvD6SxkuGNfsav29hcCRh1dVCjEPyP",
  "key3": "2BZdaQcorVNLLe5SBwYpNVaVGQCoXohfenXeB62s6ZrdTkBQ4XKMH1Kf6nr7WTg6yfNrQVyPtEHhj9oh41JqSdKT",
  "key4": "5m7Yv7RtpHYtTXjwVhoooQG6hcjhC9hFXXpzbbTxvafFhpBn6Dg62ofMUTDrwRfrakRDFCSkjKMa8nAWbELasJXf",
  "key5": "SnVyqezeEhCiTRnFwLmAGyAJEsMz4yf72aDJCFeQ9JdSYeEzCCJgCaNB88Dm8exTRsiNzHKJtbRfknopbCqqCnr",
  "key6": "4D2wApUR3QMCJbTW1CRzbw2e94VLGtRoQdWsiaYxo4a8PXkca5jF2Smy7fRRTEfw8TfwKG7A1NagZAEjPyTibAWr",
  "key7": "4zVSS2iYEPUXN7t2u5Z71WSbxQtcqr9zh618jm5XoKdrKsCDAT1nuQsLWwFLUGviEcVDMLzEUJ8XTVb3U9FdVRev",
  "key8": "2YX1sSr2HsDocfKVoFJbSq7XwomfpooZXhRzLJQxP1c28Qs5f11dePAoVfySCFeY3BCFbcBznWELMQAGLcDjJge1",
  "key9": "25i2ec4mF8Br58PRwzgwj8yPrJK4wf3EFhY5x9oBuT2pfRdE3TBw4pC2i7sFohPSxVtZdFyjVPi6zvLreP7Njv6k",
  "key10": "Yz8QKqZVKbneE9QDsPQjMKW5ARkJX2m9Z4mUQKL112KDiu5TUns3YoKJAJMPVVcB1Hkj386uXYpRSDfvPQYxLrv",
  "key11": "3eFmnBqdpXfrBQgmuf9ZPCWMuirZqSEyaaLCKvm2DgUztqh3Rjedh8fq7gfRW8SNic14cjovknz9K58pda2umdig",
  "key12": "3Ee1JMjGDPUxQbavmkXrydwzA3hqs3RL72KY58cCJ1x8vTKqApcYHoD7K2We63kR8m63dbU36FQ78NWtVrDWr37T",
  "key13": "1GS93VxWJ2xg2HCynsbeRDfjVFqiSRofAnMMBa2jXcCBA1YnbLb7hKRtwVSqiKUdnmkBvfm3oCsDcRKn2KrJjVu",
  "key14": "5CA11ydsssMddVLCmA8npSMfwCnkUXthmpZPy4uaEYXdWfGvwW253noLyKBaVrEgugki888Sb8ZQt9aZAnJEhgWp",
  "key15": "2fTuo1RoSY32xV2HxoKfX7e1ttJPnMDo5n2R1DWLCosjiH3SHuGqThFAaN9ApoQXhahKyh4irMTXzjXdmiEByjkt",
  "key16": "a3NGqEXie7ber3Vuiicbrgo1NJw1LnBWbARyjZD7XMvnPZpjY5dJZ9mifkLd4vLf9k9o3JSbXX5jcACPebPav1F",
  "key17": "5jH7rKsoRWf8XMF9RHVNehEcN3WzZEzH3PgBn6ixrmVWuyZ7uK4kLhkACWBjMsxoYaRetJ8d6PZRGuvVoF6pSXZx",
  "key18": "ZyNGUpezejmJgYzZJMgA8EUcMX6cbNZpAsEnUbtYzyGzPK5cZZP9fin84E5qiAHM3tBCookM4UAXDGMYyrSeBBm",
  "key19": "4xt7esNthEBFz3cn9VLMc4UQdDxV6CzJHYUoKs7g9gTMEiqG8THKQAC6kqjcPhCaKifQersHJSRruYkPVmDRuizZ",
  "key20": "4KzuPy5RcLWrqSxCKFFqYUEt7rMPBsShXW2dqJRamRw24cinYn2ToqbmSzZuLD2aH12BVLTMCzUYCctQm1Zuf6uW",
  "key21": "5qDXVA7rT6xXs1HNeUZjJKhC1SKbYjNxq1DuGZybsy1t7Lkb6smozAokhMw8twapNCPLcJLhcSDeS2zRYTEUH8Vg",
  "key22": "VQJYYpy8ZtkmDdcJ4t11E9kYq4VErj2DpHy2AGPiSouBLm4j8joggbs7KVrNv3WvQetsuZJ1dmbH3GZ8KXckoCM",
  "key23": "2bCGLHpvyUcZfKdPg9VQcZG9U6fg5xxPCM2Cr3xrKEXpyX6RJPwwm2pGBszaUDEUA5Rak6SNTVnm5hNb31ny67Pp",
  "key24": "5Gp7s7N1XmwKbJF7xHhbmWVG2ykfrRUeUtrKbEPyrXpPWRbF6vxWH8YMoRPnfKbfJ8QcQj7W3kER76SSaqj7xZ1n",
  "key25": "5rtjxCqTxgdnDxmKFagzzpExJ7NRJa69soQW74mihDkUw25aFMfqR1hT7iqCFCSTzhUn1LDFVBDKrhUCX9zo4vCx",
  "key26": "5BoyiNNiu98T68XEDCfMjJmx8XZfq93o6DBzQQrEnCPNP4zfBZd6CB9scDUApsR6ndGE7rTCnMHaCJFv3FweoLjr",
  "key27": "2Q6Jc13e9rYjFGK1GuixcY9hsvKSke43EAaGR5GYP7rmzsCQMMdDGY4ED4WRJQ1DPqT4xsmMBP4vrdhBh38nJ8gm",
  "key28": "4QUYYDuyP5vHQyy94xYqiFMSPBxszQBTEDuucD1RVXcR6F4LKUPwVDXwPhGVbhc6PvS4LguCbApcXEEwLyBxBWgx",
  "key29": "VhME8asJ2L55mJrUuwcxPAKEhuzwEwxNXGo8ZTieAtYhLNWMZVPjMVnydXo3UbTytNn9b46Q525yQGvw8KTJ9Cy",
  "key30": "4c8wJwhZ4qQeh6eBJt9fn1Q54zQwvw9obN6QaASxUZhrTVUmmcgL3NmsBtfqRL1L8x5BYEX8ZV9wVfYfyZZvyXVM",
  "key31": "4XAcFhoo22s3dHKK4oU8yhiBPdmDgcudGe2cCdtJVPXrnqcX6JNzkQN32VueBdy5rxFisc8fRmMC3Kje8h7eyUqE",
  "key32": "9ARenmgnY2dVA1q1DBkofrjE1eVFq1wtLZrZRfGv8pXNuFcM6Smzy2H4SsS5sH3WjLAKmgDukEMvFZsvUYGoKSM"
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
