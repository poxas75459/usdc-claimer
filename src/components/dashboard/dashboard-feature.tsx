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
    "Cu4PRV6u982i9xQBJobHgNnpwtAXP9JqhSGTikr6WzVs4nhbhTYr1uBM9VsCmdGnM9Pjb8wzD6BXUWi6vDeQogP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGycdtPgDPWeXSLaz6hkJef5SaAkCyWJXRR564n44LbuiPFj7V3h8yWxukJePopb95e5rdYWseGLzshsMRNX2XP",
  "key1": "59R6BMzA854eC4a61n6VksJN6qvSvoiqgrtSds8V6CRbfvcv9Yt3vtgnaZrJP9ePC7UyuCpdHQ63BC5RLT5aPWRQ",
  "key2": "5ws9XdAaGZu5Xh7uvCo2N7tZCpogB6E1pPR6jtiyXAnrYZjme59hi2aj3EW2aXLB6JM5iYXFzSKgLNSGQ83mPzmb",
  "key3": "zMaMcGw1GoDKj6enyyo7FeLcK8qdcVKmHJ7bq8qPv6JnJpWE6FjpLhmWcSbg6t5NA4HR4RNqp37krduh6jh6Dvc",
  "key4": "4xo2LxqpABfAVZjEvBnQZZ2mXwNq8fivr6RiVzXa1iyyLrPpJkwPW9boHAE773sLdPgi39arFqfafXWpBeHBFPot",
  "key5": "4PgHua5Zk1mywi1TzDdM2MYc8AkEi8wLh7FsJqTidJgLL8Jr2QyFwTtEKW4NmVtDobyEN2Xyy5PiKwiT6A7smZsc",
  "key6": "2Pbmj1JYE9kKzpR74gHLhBZMCn4GWucvbvph7DT64hU1G5vzWEKwV6wjCdeLcuLCyA3dJrnH1GNEGDtiqtMapmEu",
  "key7": "HQ1YuoFDsWzjxcHdxcw2cpijnL4HQxm2XJq3a4PYpVE58YNDsLpPpFnPcrU9AHfsoq8NPmQVUZY67UNhmgwNbzx",
  "key8": "5VwPutwfEKDQKPuYgd5AyZ7oVrgbWevfxeztYuH2eHYsEXXZUbwmPJYjfvHkDa5gUdJi5Qnr5Z3ybPqxUXY8RcyH",
  "key9": "29K7S9Yd7vGLPiSyVu94MdS5FJsfJoJkrTJEvVdE5v17kW5ZXftruhW9vt4uFGjL1k8AvT9AVJaZThKKkavsPpso",
  "key10": "23J3SvQGGMtf5bgweyagBqrnULXVnsyqeuMDESRQx3BtzDsBvF6cLzqqpcvyH556PosZZGsNKmFXtSf2WhYo2MGq",
  "key11": "2p6pS3Rc9QVNeMUkVepYJqjb2SbNsQhWRvbtAnik9wNkYpWTEpzyLFJvVxAcXMuVRSytUAMFdSo4VFAf9UgdUwNP",
  "key12": "2ta6qnjBjfsSx473a8kRDzeu9RXX6Z7Amb2anxoaSbGvWM6cfKUxzEWBzDrzkdZLRYmjj2NaBET4WRWQ7X67yQzd",
  "key13": "4V6Lk23YCPZD5RjWucLbcX4xZNzngG14i46e46ffxXBHhUFJTG9z4fPF5zMbMGhCyDyxGLuy8TrLfxGxtK5aFAzs",
  "key14": "5com84fVmwuQKWhko1xGVrK86C7h7kKtSwDgMnaKU5oWtDJQFJFq3QUN8S5aa3bbw5bUeBkzpQcqwQFEdU3LRuey",
  "key15": "5XoiwDP3CfjF4wM8ibPj82LkQWRFmuCveHi86QP5GqKAFmVH9RdtYP5tCpt5L19MTfETQtiAQps9KQAYehYYgSbP",
  "key16": "4aPcJn3BToRm3EEUsaZP9EiHDrTy4F1XCrsnFA3JF1FcCwjZoTx5jzjdY66JimssTUXSvctuR1RXhbWLDBX4TVUn",
  "key17": "3Rz7wML7KYpa1cfKxmNnQKib7ZdiEe2bwbCU5TsMYBAAzfbxKoZoWxRdRS7jYofSJH1zyAiTqwAE2yWEnCT2Bicw",
  "key18": "595eFtJJTux1stGTsHe7DMc5FxeV4dqnxvMPV1bsZ32JoXm5Vog41v4EDteS1b1SjiUcAuhY1y3BtjJY5t8MP11S",
  "key19": "pKzeHPNH5suKDprKSH5W7dQbbmd3pdEr36QPtMTyUAN2BPvzPFUMjZAt1UCja8AH4YPDFKGq5jok1kD4skDS4t6",
  "key20": "2vn94FVERSanaeXCEaN3Vo5xXGCS4EBnRgBcmpE4WmWQLa4MtxWbH4pECMQbW1ZYxRNZAHQTpRaJzy6C1BYUZgqi",
  "key21": "4Fpe717mvKDhuXPgZSbUv9w3JZqkahuciUbvy6APuCoFP7EKtqXsJzp9U3Hq5USD4LDq8ECVLzMER4xRdZzzRbrd",
  "key22": "4dBTffgdZPHq4qfARFK5gk1cfwNf6c8RGqGEeL6RkFBZB848RVJk6T2zXM4k2Vus9HxLmFt62hgzC7Xo1H7cmxw3",
  "key23": "2ZmKuZi34Bu7Ds3TSpBQLe7YAB1koLpfmXk8vw8wVG8hTeN8gjZzuPa629Ne9bBuX7mxBR5tz2rYWx5pK3A6xCbs",
  "key24": "2sTtgHAgbCBAoUSrfGtegx9rb7KJeuw4Ats334q3qVmHoAFZc58ik8iD8UhYSBDKWm9FpqmUjq6m3j11RWhQh8AB",
  "key25": "rzYAtG7tgdoQzVK4k5mF5SCaS4nM4KjcfbKVLxU5tYgLx7wmHpRVYcVEbxyjC5dtV6PZFrkthKroVaUEPfnkbR6",
  "key26": "2Z57uveMCoyaeTxjtDAtCXKnybwaUAPRPZY1mZYEDbc4K6QZj8a6wSwJMxptjPUYC5HFHQsQvKnzaQTzU1K2LPx1",
  "key27": "5SUcizmH7uoncADEVrtYAP1KqBstTQ6DxPtuRjuesHPGDBC5Gc1nj4VMjLRgvZPqMHnH5d1KESekC9KqSoizvmvX",
  "key28": "4k7Cdttj6zWNnmQVQXJdWBkJpFaAwEHMGsDLAVYxnKdb8Vs48NhLJWFRNU3HHpBdFu5Suh7uNTLPjsjRg9hx1jGF",
  "key29": "5pGoULVN3HGS3F9dPniqU1kxMoM1x7GEwUSn1aXpC9LtiQR6QjNp8EzrZqtN6GeHGWV6M3SpWkKDgGwwH7VPE7NM",
  "key30": "nmXtmd3TcgaDnMmWGDZ7U3WjNFPh1Qf3jtF57H79ampQ2Ld9jRAbrSH6QqMjktRQvyAoGvAxj6fzPoY6UhtzLTR"
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
