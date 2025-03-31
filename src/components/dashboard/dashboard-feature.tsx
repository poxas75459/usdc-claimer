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
    "2seHHCtsQhusMX44h8mDZt1KC5ZGVQ3ZDUzPbYv21DJvXPJAxJmQ9SFZ6oCMB2j93gcT8gvF7S2KWL5xmy4GamcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jr3gJh5v7TVLGMZnCsZtZNpSPMUR7yDEVFuwxZ5e9LVhzRDkPDTaThhPz4Ci4wuciZsDKG7mGpnxLE9GuhVg8Sm",
  "key1": "54VxDQph7qKSuATjMr7gTBeeu17L5Jo5zE5fSRcxjXXEC5HatQ3YsnbsdJQ812Lnwe2Npufn7TfEnKwVB1GX3w93",
  "key2": "rszuqDUQ993wV1BCbQPyDHQyGYFAtThixkUP1FgHQr5DUUNht4LjutvyVxsVoAU2xUNtxEKkFAGDndyYUtW7kou",
  "key3": "5cLReA29a5z3B7XLMbvdHm4SZW35tCQwpVR22MPdsVg2oiXq3M9DVS9mWoYQLW4Nf91qqkLMWmG4qa7wuLmQdLsH",
  "key4": "5WfYFSgk6L8ex2UL43JHsFjWiVREpHPvLbZS3rYwMy87Pnz7PLjNzyX39ABmr9oxFLZ1VHohwVT8J28rDK373ZnB",
  "key5": "2qBt4AyfGR7VVJ5sN73x2wLCFUPENBP1ue9fGUdmm3AHbF9DqSz1ZZxt3CZnLPcDGzkkrnsvtZteHULEHU3tXj3w",
  "key6": "46j4iB1gv7JcGRQpGK7LHHyehs1bzGDMEKUozamzv123aVHibYxYaULVJ8h5GondEvijVwPT5bS3KnE4H4vPWbfJ",
  "key7": "X23HAQjSZbmeFjAXWVoDqLd1LkAMNANVUxcNsQyarFPzqsvTS7B4EWQP4gpCxJmeSTykbtrcU2d9152xZG9FsXa",
  "key8": "427y8rtLJ3Si3yFj8XwxZwkyYuFjHwLosk5kVoNzkszWejrfR2w2Ki9qDFLaQE2YpU5qEuru7MduNnypWjzFHEYW",
  "key9": "6NzVjJ9oS3VesbPL3dcASHTg5vBeGjNpnitdczL8j9nqmisve1uiRAbWh4rTPQM6pXaEbLdNwSd62nY3kNsspob",
  "key10": "5JRUH5EykBcm7qJDVbjbRiAuAuDDKUtY6ryX7bV68FGKHvQvwgV4VudkBS77SA7nj2zMfaV9C8QwwBX3UUxttuzn",
  "key11": "3HEHpyUHE2EDuXuPdAhVGkAunmcJioeK2ta5WwEA9f96qB8QiBDN6cNe15ShfkpPCNYLJnX3F5UYvYJSaR5kVP1e",
  "key12": "3U3tLoSW5ANHvQsVu3N1nA51PgLTwcMScXxq6RpBvfx1sPZMZAR9QqvY8N8zcuwFnwAcik3cr3PWb2eai5E2ojrA",
  "key13": "4NmAVNwBxZugKQZb5Rc962nhmq6Vx12UCCQ3YnWeq7K5mcpT3gDJtw3SV2kKLjSsKWB3FktYbrevepT4ajtYM6BK",
  "key14": "2cWZnBeYNsjYYBUSzeXFmy9JWHyGsn9UArff3oP84SB7H7K3BH9nuik1mhT23htmFpWsPLM24Snjp4Cp7RWz1Hkg",
  "key15": "JFBp85rPLkAKaVmEbukV8n5Rv58tRD3dvargcTFLiuPBrae5rKVAHhy6BxwGjwFkFDvif2Fy3HJePkZ3TxfvjU9",
  "key16": "F4eWYuG9VJYxdidE3mSFFNVKge8bZLwAKoqjS8cDgu8qaafLedCDekVR4q4RoRf2LAxGjhtLwurh5zcRiCwHm9Y",
  "key17": "2NoZLoFwLSvw8bv6Lyv8uG7F1sjLG3ZPao1xNq2pVmbpNkxqyowU3RAwwNg3i6GNp4RbkS99umJxMvtjmED4gfx9",
  "key18": "5jNCVkjEa9fD3M9C1SUwhLJyg3acUNLeSt7xiE5uwKSCzBZKJHYxGV6Mk8YpZkfs4v4DVsmrDd5L5jyAADihLyQx",
  "key19": "4KKyrsUB9TxpSfXT6yJbPGVQ35puAjZFrPJNvDQcEzp1pxgyR54TxRG91nuYRKCjuMBdbdJyKb8Zo2AdKPTx9Ean",
  "key20": "43GLg6PXq4nLA6nwMrW7uQs1LvsD7aq3W8uc8bYEs5BzzXyNoHVvDPoMFx8oqzejaHEA7z1aYQzHJ7c1PbVjXqnD",
  "key21": "3pDGrjSSqyCN2tyDHLdQReubzLRweSjpqfQc7Da5fp2V8a9HosSCVdLTZCzv6DzxXzo5jyQraKA4pYDLLQvUkY6b",
  "key22": "3DaHbPoQi9GubfLSSRDoeMX4dAenjd7njQtSn3ijRL7DvisonZs6CAkhAj8LxzXTsHds9WSRz1m83W1BeLAA6Hkr",
  "key23": "3ieh4S5vjWykg1daSu1NkqY7zxLfXK1uk3gGyQy9hnyByXcsJ31BtqRrJLoFNUNkwZRFAtwsWTXM9XN6gexrJokG",
  "key24": "3z1HpivfbisMKnJ1My4j584TinvQbsDwy9jqHrsdNERGFFcm1X7Qo3WV3weoysxrHfntCUL5mckijSyPLmrpvet3",
  "key25": "45bWRNVS7GzbRShhtSWxbRtLs8r8ijFjCzm98E1DyEQZA5EH5ANyUXScZtxEU16cNZyo3ZVStTPG3CffMwySEfmy",
  "key26": "23YSke65YdjvUqsBbcCWzTCWLDbVkbMat4pfSYbcLgTyK5GG3vFZDhFs7yxaqx7nLgv1kJ6GQfgxNZZ8DZfJWKtQ",
  "key27": "4ETtM4cwuLz92vyv2DU3mx4vq1JsYCQYidviwU1ffufBew46r4JoBrCLfaXDYuQSWMNcFMTmKiaENrpKem4Apj3h",
  "key28": "651YhP15jSakSnBgMvWjbQzoSs6dEFgFk86sLgC5kTn4mjcwxnAozsRnQXFmQEFjLbJfzEijraBGKgirEbzw31Ro",
  "key29": "4VbBG43m2Tar5BudVDbRxJCNo7G8iLkGb7uSq4JC2TRAEWDwvBX2Q7KbpMde4ffszgDmH5zMGgidgpsJEdcm8yfP",
  "key30": "L12MTcTMRsadHF8HvejrDzEoshPMEoR4SV7QYscwtH56KFPrGJBoUvoz4zCRQodUqk5hpa13bSDdmjS1WXFK8x9",
  "key31": "41bZHmFRMqkEQiRX4usjrcCzQwCU6dWYUvcpuEA951qnho3E4jiuzoz8D6P2Ly19aBza7MdwDdsS6HTA4UHpzAWa",
  "key32": "4wAa2eVyupn9ZnLDV9gWRffdTCZz9VC4iAm7j9KXnMk2e2z2vzHGLceYf1uuzWtLC44LbpBbuijSdC11RjBvZcvH",
  "key33": "3ZRsKKW1Y5PonHyEbDgzsZSiDF4cvAS94wq9RmxHrQvLQ6XHvfohZYkjhjV6DLMNSQLSmVDvGkxS84fRUbaVRKG6",
  "key34": "33KDoFa1LXbrSj3sp952hpRDycJ8oXcg4LgmMRUZSueqpMMB8S6BnZSdkpJLPHhJ7dtEqDAbmkMpSGoZ1396KaXb",
  "key35": "pLbLGpLbvRJFxus8Ey6yPhb4xj4vJCMsi7HL4qeGGQXWd3jYtdarLyPUssj4m8MfXG6P2bYCjJt7D8CUkSxYCRL",
  "key36": "2vt3y6yoZvsUgtrXBbUamGRxdYT2HzPcqhyxn5VPoh1NRXNfm9PyMD1XcvSnbYKJSwZEiUMAcgT4b5sTRHXtCXBz",
  "key37": "2vKBSNtgEdzQrkLQwLXqjkUfTSXfMUkwWC8y6Gkd47Puf7BeZaLSEFWnvd8sa4oucUHCQyUh2vZHgJzDFEgrit8L",
  "key38": "3tuHMygHLDNkotjGuHhxnuT7MeynTt5QgyCFYDPpvKiYLGncxLDco4ZMtW6VYo1WmkRLqMADjDpqKxjaRwxRZ4yt",
  "key39": "35ZVkUFLPrEk1ZrQfdEBA2k1UHm6jwp9bJjCRUFcoSGmSKvb1BpWmciZqZQtSVo2yhBnLvzpMxv7sVNZwqT8NciB",
  "key40": "hksBDjMucSMANGo37uhfumQ7Nb71tdHQVFPNp77RVsQZBW39BGcWZ2QabJADjuEYDdxtGVYk4oMrKkT7HHgSdQK",
  "key41": "4mf6dJsfkmK3SYK69Ts8wHovvGxhnQuRn1n4XRXZt3oTFixfpyfUqhXnm97HafAudrxvd1vMwZCM3V9KU6dEYqvM",
  "key42": "2DgZc6ao5Dy77U3eDpoqw7u6NwseESC3cKfgmLWr4BHzL6w2XreNpwRMih7j6Sd8BaAB2sycc23tnFomEC9hyTUk"
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
