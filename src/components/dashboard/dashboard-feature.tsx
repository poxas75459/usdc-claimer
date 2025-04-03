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
    "a5jLjrcUjW6SXFkY9hXDZBaFJm19Xhm8sMqUShgHLsctxWyhNNpwxGXgNdZFqtF6SGTesfC1yanEvF1G817Vipg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kn156dX2N7ZVKiAwUV2sYWbxFaFAB4FXEFTbLRmFBtbsZ81baUVBjQW4pVoLyH9ifzmaktizRUEKDfebgQ9vz6s",
  "key1": "3UZMHhD8Dn1oxDJm1veMBaSXHSHJZxS127Xpb8poTsjuY51ALSMQANXU122h7MBUEUsq5aguKFRzgAivViHb3g2t",
  "key2": "2sUTfSp48D3AzTTmmLpAqa9Tc6T7BJHqS76mDjRFnspBYZMN26yGB1JPDeaWgepsB8uXR98qsi3RbiLBgAYbDtcU",
  "key3": "5ohKAP7RwZxKjpchyHqf7fyqhfBBKmFS9eYPxQiuaTq2o1v3MH9LHS2n2mWk73TsWE2P4xmLfJFTDBNMw4BGXe9t",
  "key4": "5qTkUqGov9hYZuQdxDsfnYVvkDDrsZEgH749ZtotRoU58Kx6Tt35x3XtJh1jMKUr5J2FjyF4TzkwFbHmsYrwRTaW",
  "key5": "QrWCExwJGwMsmKjPCs8Ls7ABQupLMf38WwWLoxCT6a4Z2RxSYhwHBYhSjmmHoCCWCCXpGpECSJgjMifQjRsRCSv",
  "key6": "4YxziTWZnTWGiynghvHGNuG6PvKjXmdyzYRcBqnjsyp54yZvu1nbgX4MgQQY7mK4xxReuxidG7xbm1CKkFsgMj8d",
  "key7": "7FR4V4JnGwqbxXKQF1xmxz2fTtUXeqvcvPros3nbsoMLjFgvwWpXW9wuNPYGGveUPx9rJQyaPaycwJyd6CrX4F7",
  "key8": "7mb2HeEvrCxYBWMsedRopdbFa4DS4MTtRmXmd5DichLvTzdVJdGtgZgkZc3Vp7pYkNPqbE6MajoRJjxseU2YVMe",
  "key9": "3buX2bFGpnfQswQyjmfJvJVJB2M3PZK7FGzMJCpaTaikN8eqpfdVMyuxxgCzcVU1MwHdQd1pG3HFo4KR262JirxN",
  "key10": "3GGZceMNo7c7ib12Nqyk2mgo8fWA9mZ9pqkDAjBhbaAWaiJCDHBx8RPy1xSZhY32rXYHVsxtTqDkqapaGzyyDdqH",
  "key11": "2ECtAxLiyRdfdfjeECfdTeGBoXdkRNNoLLLGQQ2ufcR2vSgjPyx2WWRm5NDZB9M7drGxNX7kxc9cftkaJova4RyS",
  "key12": "3f91X3Xuc9Ka1V3DXCUr4XCYYRFfNgH5DhVW2nY9LAeW48hcPAPdWgqAkvduyE2mZZegbAqNTZr7guxA4FCQvwFU",
  "key13": "5py5tCWAUxMagVMpGXE6U4yGLdkh2G3ucbtShM4PyhaxY5JoBZBfJCZqLDdwCiPnKsgYHGp99wq6NkfEw3x7u5Rs",
  "key14": "2REbfwdzR9U8zZzmHp8RLqYU1WnbZVFu9SXSUntfThmvo4tU1v3qeXE4PFo46UYMX3VtJAiFTYhBK8kYFXMhMe6h",
  "key15": "5CzXVqB2THcqgTkiPYK3cxhRvoS9FruFyonzGQmHnHcRPFrJKbSxWiStEiqytHwATTBwQPr64U27i9dC4gNb9wNJ",
  "key16": "434puHLfrmaJtLfK9bk3YNwBPLs3hH91AnxESCVEMxxgT7WP7oozbnPLXjLVraTyDqWuQheiS8EieYpyh2tumeJh",
  "key17": "5rprhRTLjo1sgJaN3Xty4pyzTyo4mBimepdkjohVWYQZCXQvmEAtuaLiD2vTW7cF4oBYgV518UboAEYBJWhXjHKo",
  "key18": "3CFaWeJYM9zXbAeMZjWMqfq8QUtfa4EFb2K1MMBtMZseSjCYZv1XDgpAtY2Nkr9jKSNwtwZRt6etoLufwQDaJNzm",
  "key19": "k1YdQwFT6yby1zDCFJB5zuESavP2hH2rHWT6Micu7S4K9HDfa6BzKh4xjic6vFWkUPUSy4HWrpf9pZ1u2geVvtZ",
  "key20": "2uXXAWKZ6d88diyJmCxqU2Qqk9htrj3F4QmEwpD3WbtAeMWDZSYmNW4SD7uaijoVtcXPkgpEbX2U6QNo2N6HWNkK",
  "key21": "5wfAvPF97cHvTTDEg5Zed6kjJP6Pd5jABm7zqy2wpLNFQcMzhCsXZLZL2DyQRNQ5XrYokt4qWyuJnTANTHBDVjSE",
  "key22": "38gxCrzyWRzxBWsveBCApr4Ar8XpfYxkajwraDBcMG26sVwQLa7v2itJfrHdNC7uiEMiV88eTuKuc6xnTzFo4xem",
  "key23": "5e9Lt8MRyzyf7vuNjHLCF969WsLAJXHNqkKyJGbfBmmz3UGezadFQd5JBohtpndwESn1tZNXsKT2DY9fvEZZyxRa",
  "key24": "4wepdc3dwMbFs4mGesas2gBvJgdX6Uq5JQFexHED7iHiTaRx3gGYqm9ZNkEwuqYzNxnT8NWvxGnyTKL1fQycVk5L",
  "key25": "3qjhwehnJsY4Dj7B4tr8zVpqhLKxaFnzSoTxZ1oRCPZdMm7kgpDQ6JRcA5psxE2Wmbc4LwgfiHMgY47b4P38ap1M",
  "key26": "5P44ETVTF21yXmofroTkhFNtzkSUiGfZH2XhzU1XYicuKaPiyf1jYZA7EP9JHmpADRQrLmnkE3YpobKcyKWK85ca",
  "key27": "56NLDVpv3jtVwVSqJnKJDy6SCFWt3cVkF582bZNo4fYtjwXnExrUR9WhSRCrtUsKQE9F8tcEZTviXDAzS6EQWWJR",
  "key28": "5WPWND1ow4kS9kbiQJ7cFsyb1qrF753jtT58wfkKSvqpHydQfoPSB9z9Qc5r4mFLMKue6DsEczAURGdaumxtrZEB",
  "key29": "3Nw3HxhWNn6KhBDzFD58ouAzB6HpoX892n6mEf86kiYDX1SMNRXmCEWRt3zoQShNa8KrWKueHLj6vLc1ufB6raPa",
  "key30": "rWRjNyJ9BA1d3jLfAwPf1FWbdowttjibut7GpaTr5EuGwgwcbkYPCAkCzddqG4rfn3i7MrncbhiqhbBN1GuWAaw",
  "key31": "2z2aedBBrYn68JcBRZ1Xytx1mnrvunF7VENEPAK3UcLwKtQKz1QMJAZkYPLJqpRvHLySbHcpV6VvH5mGPfa3VoKT",
  "key32": "5e8hZsDpxjtem6yELxfei2AzG4gduh36woYjZsCSRrsRCUm7GKYjwisbpGJ8gHG9VoQt3eBbeTDEQAWWcmtBnenD",
  "key33": "52CH2zp7evhcB5HR5jC94HftEWgc8AAFk15TWS1v5ouWMkFwNZf4QUH1rfo3pmGCrrWC31SDmXfBtYErwqFH79LH",
  "key34": "5S2L1sLmrRTUhXD6xdyWgk8pR68yvtYvqJDrU1eD3ntE4ZLrZWoEYy9fiiWa5Gjb6T9XYz2XA77A4cGU4d4B8KYn",
  "key35": "2GHLk3TLozakAuP264SrFppE21ZLTqVqpXduGvXiFeaBUa46kEouiMwbbWkojJhDFZJAr43SetbfHkHeZVZQ26RJ",
  "key36": "5DA5JYbHDfMYTeivFE5SvnhxUFsgG3MMZeT6W4UaVuMvsyouGo261c2zyLi3yrCgQn4ujZfryRXFtHNgNGGcAqDL",
  "key37": "5rViXDFoj1nayiRVxkwfZNM9k4dRZ1NmF8ajBLmyFtDz5btD18QuaDgcgKhptBN4ggyqEeDwWoz9jLK3UbGxE245"
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
