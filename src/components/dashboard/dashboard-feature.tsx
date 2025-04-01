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
    "5vc7mAgtzHK6bMthAyhLisQdRp8CmLQLHNefSmAMcH5sLfL8AxpeeXi6FLrqkWphgSepYTRmQ2P7XcBoAQf4cGQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUVaMKV87oJhRrsbDGxpSqDtXLcVtJqFVEXVsmYxYuVhwHXjfGvdPSpom58jurLtXGgaTr29zAGk7nLe9hoTseP",
  "key1": "4YDjuv9ZmSQ6hpfWjBE4fmorzvtGcmQTEpw47mcL5cr7kUu9VKMK7Wtne1XczyoD5W2uurY1ScAyBeR5a4wCuX7D",
  "key2": "L8iG8VepjPxmaPxHmFa8uipaCq84AtyEzPAY8HWkm57k8PqM6BPGAc25M5T8Gah1pjpYBsn2jwAzYcmq8pQKniJ",
  "key3": "5XsxuQugYNww8kYVvyneVBdLuA7icXYiVoUPRAo7Bvfi81D78hDwQf13kz55tQKNFM9WppcmHKcTV7ftR9r9g5uZ",
  "key4": "2bJ9CSbFue52Wj7rBKKKYL7T5enjiypU9rgHqAAT966MJX4gf7FJxzvMf1HB4tCJapevB3NVRwZJMsuzoXwjXb6y",
  "key5": "2ffG7XZYdcHxeyJ7NW5NidSpK6RhL58kfpxu4FY9fz6GSTFC6gsjLbU7XVUeQMuKLPDnSMhnnsY7LwZm3xK3psA2",
  "key6": "4BfNJu1UY7MMPwb9EN35RtQxqWZDzsgMqmwK4RwsMxdLGjv7dFgTkgzSfoQgD9ATfk71aujwNCcQ65jVMxmpwRhN",
  "key7": "24xN9T6Dchd9F4eW1RaBrAfCsz9xr4BJzrVLnK4KLPGXPAs5F5wrJNLLmh9PD3a1EEKdPzVi6oBHYZM3Qh6xezGd",
  "key8": "4FMPCg2HSRYiu14zXY6GdYF6PiKkZcqxDJSPKyDZDthVSPWXzx6tqeK57rddK3auxti9NTxiwP59HemaS3FzZD3h",
  "key9": "2R2wKd3ZYJQ257AWMtPBUaX9S5rPAcuUsCH6z2beCMEmN6JnfzChe9L1WiPhpC1HhkKxEkv5WuPDzMi2rxNmdKtt",
  "key10": "2Aghp7HDpJYioza6cDphcZXDS73dwdHVEbDN4Vkxp8Hn97W1voYQP1es4V2eWbmE94TChDH1H8354bHXjrbEGBGs",
  "key11": "3pxaZ1tbaQUwEqKRNPnNGj6Qx67B7X8zTL72tfkDhG2VSeHdd4BoaPwdrgu6PyUxetA3HMEgJoG6QGXLNoLzWs9T",
  "key12": "63DN1PPFnc4mifXXekyNUiMTvb6BBKryVUKM8zZC2jsdGSSBWpBcxW3CFjiGd29ymfG2THApTGNbkDPLj4JeCLPx",
  "key13": "5voiVXB1mExjXT6WYb8ZQyXaMLKmbwT8ojvHjxkS7Aasm62AsoXJiXPo2VQZWgnY3BKxQoV31M63EaNr2TMc5s9i",
  "key14": "5Hp9K1UiY3nT9H7kPtBJeTJreakEhya9xaaaKuFdcNrjFPtTmhRkDBM9qsEfFDVsju57CrGSx8v6iFwhG5ccD9dh",
  "key15": "5k4Zh67NnhA4aZpr7qr883yTzAMR6S8kVkQfAtt9HLcFrbFj7PAjPUs8RdAuoJfiPUVg6C4x2yGFhYqP7pqo9qEe",
  "key16": "2WvnKkiYEW6dqpoZQs4NCg2CBxDGi3vFyXcQEqtuKyVp6MdszwKH6Z7wdMHyx8BRkExxfgMpB5LpN9sLGk8wX2yZ",
  "key17": "41v67PGnNY6oB2wpZaQ2Z1P3R9B7ZxZwxmY9VJbjciYoc7KAtsKcyvKQBibm4EP86umzmZd3CQXx833AEXt69uF4",
  "key18": "4rBSeKtpra3fMMqnusHrcfYSeQsqBefmTvQiyiEdq9zmhuYzJnioy6jrPrzfvmwFut9QjN7XjzfQQvJZoBE8fp1N",
  "key19": "gor643tEN9DaRGwhVoRxyxQU4kjUxrE38pWy5N9iG59LqvpAA2rRV6M2VMWZYjkBajHzwmR3of1JCqFUMgvcy7B",
  "key20": "b22zLbSapzhoA8QeaCjHCyUUbgRVS3M6NX47VrwLhk2oyzTDRgfPMfD3g1v4XiRp9deZciK3y6GwGi4Nomjkk4i",
  "key21": "4LNya92yTKnHeBoEad9mmTsAJ46RAGVjcqjHrW48aPCSM3nqt9HcWDAPgYFWBEM55U97FazmCxD4PeckxVqFcW6i",
  "key22": "2RDnuTDbZgaZCgo6GqwZX2WpV8KVnheuhUQFj3owSLf9yVYGstt4NpGVBUUtPFirQwDBmrUu1PSjCMqmA6ydoTvY",
  "key23": "2w3p8TRB1JkwmHwwYREMQXhbZJowqWxiJ61wPeZomSKMsepmkBctZovQU5yE7NFf5uZ8d3iZrtNnY3bn95udUg1b",
  "key24": "5zuaBXNm3ipBPqF5ttke5s2BVRuudZdFMej6iiChUMtLaLbrCLumfhhCKYZE1ThU6fyzuuhxmhUp7CzFmuDdcLqz",
  "key25": "3rHHsTUduef4JiYy54JHZT1RJ57zVGXY3Mqn7QxWXbNEiVwpgnzrnEaVfB5t9YDuwrFTQnpjcTbAAnAnYJLuNcHR",
  "key26": "5ruvHQ3nUjTaTXf8Ua8w7hJSJ4HpgeAViYx39vXbNpYyRAUSEk1H6sGDrAULhaJbK7iU5ST5eRGL8cz9BmTUkczp",
  "key27": "2tSfRv6cyNroCNQriVc2NykwGNckzjtZqjGV26b4g3fMacsiLAFmuVb54YEQFDehBKeNJgzGsgpKYbLM7qcrLFFf",
  "key28": "2WnHGiKzuev8wiRLUCYm564anXDctizoFfoVWbdtM33jD3qbt61ULZzEiP56WzMLwCjV75BfpxPkvHQ6jUMRF16i",
  "key29": "4B3tWkxgRzBSDCXkx6sK4hTtqyNjexmheVcVhYva2rcNbLfPcGoXpsmJCAoPz5VDQiQsphNdWz2dXjFAJsunUGF6"
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
