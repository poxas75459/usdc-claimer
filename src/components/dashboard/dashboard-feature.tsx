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
    "4gVcdUPEcQkq4S5CyzZtjXWhGbuxoyV5tT49iMJZiqHbzrhGAbQSww3MYqgY2hguxhgvER91oGkiC6w4wkCuLHYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5Rmrm56uv4MXmuodc27GTsisHexqqu5us4k3UqXiMyaPufDRwvTxE85jFNgid5iFJdk9RbWfjCBxhYgAmnkHmp",
  "key1": "MrwZ6w793Q3pB9ZQQptfCrrNkANBBbi2mcWqiG9iKqGxbC9JmWYTJsFbEmL89yeXuLbpnvLQjfJY1txBvb8qHpu",
  "key2": "2SPFeEBqt5Uz1tQjd8R7RYUNfYBwM5oFudyby66rZhomM6SgAJaSv7WQABKm9DcRKsReDkcbpFQxMAQsLUEahc49",
  "key3": "4PZU2gXYiJBP7Uk2333V7bUHDff5EGb1yUnnVNT7Yp1fTefcsmaRN7E2ahYQS5q6vjVhGgAXzicYE3RN5s4TGXkn",
  "key4": "3erdgras2onbKUfSCzynAcXfHeeoLVSEDuEfVtKVXq7BaCLfySzrSAobU7fZ6F8oPdFqcAAkY4EdckJyDceQcbte",
  "key5": "2QDtYcLwnU3CJppq44kAQeTxmCb7ju8Hwku6xcbRt8hJKcAgAQ1oGpTcrJ8PHAQLQaN1BqG5YG3Ja1fuJqkLrSwE",
  "key6": "4DMYbGTDaH9iKmcd8MVtbmmmvxScg9LXiWiubwWZ22Hmd14PZR52boBfUcF26JmCaAVEY8o2NCMjKkQkt5GE3VSN",
  "key7": "2VHw8zT8trScQAQcLQG5gh6ys3hFK5ZmtkXdMLFw2rfSXaEe37witq1RutJ7RABHg2j3bCCZRpbhrgTWTqSZfUbq",
  "key8": "5fUGrNVMBK91niVLxb5duconsfCucVJnqVeV82BZ4CukdiZfdLABakckSYTFuYtNwWb6vCfBUWbiqn5uHYAKCRka",
  "key9": "UnUPGFpEy2bGv9pdvoYsyv4xcU3SoAwGeh3QR5zgXeoWpQUwzZY3DpSe9DSEShaq7JsfiofDfGx37nPoxESYUnV",
  "key10": "42iXmk7WfeUGKJ86awQrWHZ8Ct3CNHN92mVUZ14HFzMYZYxpgi6ZAZr6fB5MB48YNV5sxVU6DNnijXfz9GoJgCzx",
  "key11": "58f569ejwdMtJAjyuHepHo8ut9tmmKm2jqtLQpbTaU5WTSyrQDAsSTpKa4og14pSnYt1r2Jng3zNrPYumvriZ8nd",
  "key12": "TKEA7Ye1HA2mxp218L2PcyWtrVhbxf7D46py2se31h66uxZ9kmDtvftnwXjKYU9Q155Ct3X3X5kfpUQ7nuL3A3A",
  "key13": "5zPTKR7SPwpphn7ta9rrU4uxDvfXfMbZHHwtqFz6KRv7n3UuFxzVcVcxSNPAv8HCi7y5nBViYNNH64SPPLqGqVcr",
  "key14": "2YvMUzcY6ST2irdu4zRTsXEeEdUiNMffjTT8K2KvNtqVf4G2tPMKXNAN8FcVoq6Pej6agKoMyRrzDbhpcpxDxSvi",
  "key15": "28Fj5czbCfrwn6sjQDhAD5JKELe6kaKzAFS7wRsLYJivaAhJpEFrF3ZqNuvxjEwEJ3TB18UXZrACxUtnXHHfTN5S",
  "key16": "3oXkFoRSrwDKcoFxS42bwxPQ2wzvy3hKcyMr8M52W6t7cGRNXodaTAwebKM9itshsEtYtc5ptguxYjMgZK7iKfx",
  "key17": "3MfZEvZcgtxripqiAbCVZVjumBKjPWzDu6kshhXNdh5WPe1yn7iPMdNRG3wv3RCnP2avH3fPtfRrp6pVYDVkWp7m",
  "key18": "3yY1nWCwSPBLLF2KFdSN4Ec2wAGH1c4DWez46J4PTXqx7DiS4zYovA3kp5M48ZHiBVVhmEcKQDafMYbvM3dJRtBt",
  "key19": "3iZyMqcgnePhB2YSyeZP5bvZcoB5aaNYHDi57ewhtmZKH8X22WJcvVUt7thXJFZrGHtZpP2dpAmTz159XDo5QSYZ",
  "key20": "618oNJaC3QsLpm2jxtEryMigYSDaFYFBouMhRxf1c2JPCoxqFF5WXC9xoai4iFnUz8i8Agb87aEJeGeDPY9WkAvq",
  "key21": "3YZCfB6VGqtNbdz2mCt99Pg43c1EJXJ1VyvYFiNNZHys7pgDB8CcFXWdcxaAMHBcvYR4Twn8n7xu5DeoheF8eHpv",
  "key22": "5fV7uSykGJNa5CMms8TmkjpfuBqh6y7ze3VmFsVaUK3GUnxpGhYTrS7V3wt1Vu2XXY5NJ3kdobBncCHsb77uY9tQ",
  "key23": "2AycR4qFGRWtH39z98faq8Ppxx54GsEs7ixY7rhmwTXg6fvdp9ED1Y8HYZKLFV5voCtryhBrwBuwv1juomF77zkb",
  "key24": "4e7mjy1ZyKASb5Uf7c7p3pUfVtVgcikxbrEgPp4o461to8kSxL5fysznoXTUR64H3gFpr8XNwGtaZ9mqNhp7hRyv",
  "key25": "kbkNJ6gReSMW6bQ3Lontr3YpXg5prPngjWnG4aAGE3embQSvnW9tNfJqqui2pmYSPaDLDtUgAafGoJiUy14oh6f",
  "key26": "4vD3Fo5dYHpZmXKwsdKyk2PLNp4seY4zBtozvC9Hi52qqpyHaeAkGcXWKkvrvzgA5bRRtCkT88v8i67Z775g2Wfg",
  "key27": "5tEeeQ17TK7Xx7Qwoe34tNA9ZAYFpyf4dBPJFrBLJWtnF1DHPH29XCzE4k2fwioBmbMHPv5m5cs4CtEkkohkqVyH",
  "key28": "2TXWkW1Y3XyXzWjFJKH2r7d5X8CqyZzPrZhN2rCxtfRDar1hQrFQxvXPKpbvGsbpgeH24tvUReevKc2MDHnpkr3a",
  "key29": "2vMgYhJjtmxtj9gXP2nNxDb1utTsTrrgsUxowXnFLm9goFeoMvM2fwckUt1e3egcFTfnZzaaATMUkxeVbUQFL4dX",
  "key30": "4tndah78q4Hnhb78uWQhggTJCtguZUME1ooLczMoZocGkGuX6t3CXibHsMyThGkWygfgwcaxExqC3G4o3Kuosu84",
  "key31": "3LoM8gajSS6iH8wDJFeT5dBfkjKgL8HUEwRPy14ks9iVyMgfT5TMtU8zwYnqS52zWdR4iGM9hXNJy7tEEZGkYpww",
  "key32": "xNkSiYuXrdEuqzvdDEjgu29bQKsXwvgJY8zCPjKe3pDY64652swRq37w2Wp6KP2dK3WZPpMTNRiXbVzPC9dx2qY",
  "key33": "5fHi6AH59ptaZWc51Jkm3XWXjUC72RuLgu97fvL1CyFQpD3MQkR8igzVS9JUyiUMPyEcbk3YbemY2TnRcsSmp8Uy",
  "key34": "2i7Gcxdth3hBDRkBioU9WgxGUZ5z21nmgPyCUyGtuzFyngTxYvCA9BDuR3FVBM8Dfcyy2rkp9RQGEVACVLuH321E",
  "key35": "5vsrGA5MKo753FtL4sfXbkxTA4oThGZkEy7Gy8bdri99KrB2y4mKDqLwpvGzqRFbSkLGvCY19QQDLEhgft1ExVXq"
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
