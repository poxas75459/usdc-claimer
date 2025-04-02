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
    "2dK2Z9bqhE5d8YsYim7ZC7HQ5ryAkqM7rLf2na3CfxZzpPGqMBvd5JGt8FDYgQozaBAVfZsuccokGXKx5JBcPw14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuZVLKX6nFwayBPXQkPEnQfWhSXd1o6fftnq2BuRDHvyXcLyn9MfbGtzRyPKdDgyVuzDaGthpDJFVD47yKbt84C",
  "key1": "MSa6s9C87gsn7Bv2A4AWCMXQBmBdRVyx3Cuv7XUrQh63e9fw16ENj9noZpYCRBWBsGd3ku6KmhFuvXDeTi4pSAZ",
  "key2": "5QQZaH55fLEq1ynGcJ1cyf8HX61jZKBxtm4uNwovKrSyLHWXwJZAaQUqBocjXXsqQ1ZkPv2pQsKRLNCHmdGh5WjG",
  "key3": "4BvfWaDmwcaxa7boBQdtynmqJzrcG5uaxvftsVct7XeiFZgB3f7gaLen7oGZEGGwyJQFb9qhd32W9rppjSo3DUVC",
  "key4": "L8LBsPSDnbH7f8oqvewcMXL4XLsW91fnEzwFyidvGib9C1YULWrrcrwgfNHpEYV9yWC7ZVtYSa3XBU9LeV62NMT",
  "key5": "4dXGEaaLnsxtfkgKLHWiRgB9RHaPGJ3qJF8v5s6kHWvjj2VXQ7Jf4aQHLEdybgKSdRxxPiit4i2TNetjVT26nRHU",
  "key6": "2EUMdw6TDfsRE6kf1LvWRF1M4Pq4EEEQ4vgGWaCL9Zaub8HRhFwzYkRxQP5DGLQYwNuNAnTNsHyw97mGam5SHrsg",
  "key7": "h74t817wzaziNJZneNihizwj9eUXXdGnMiS9sF3vufc5ogGVkfgvwLLLo4KeMxBg5AsTtZ3R5z6f2NVNj7QyX6n",
  "key8": "2foo5zZRtTmXCFFneTnhED6W7QqR4iUj46VFZpWZ4HxEKt4TfwPxVTmWxvPbCzJJkRaL8g12dx8ZhVpWqXQz8Jh2",
  "key9": "4GymGgSXmP5agiCkkmJJdU5kgNeP45edgDLCNKPi9wGig7uAtdmHHE4Fujikrht4r6YwFW6pUTL8mpY5K6aLJ6h",
  "key10": "4b8CZNkY2xkHxdofrf72r3i8f55pCPUT8TiDTmuGVSoQWvLCostT8yUMnt8PuRLzhpcqhDuB69N7YRffNKX1tE85",
  "key11": "52YL1kE2PabPpGKEYu3xddb3Ki1G2eoYEQiJguSa5UXXEjsEuTL5vRJzengfx5wYu3Xy9QHGm5XhHZhy2voA4WnB",
  "key12": "PqTjEYyDtm2BFWG52JqDXvRxwUzHew92ajDKaYdVfdZq3NUVxbXFEnfCRCtyDffFKK74xE2qDMAMr1KyhCdWDux",
  "key13": "2ey4EKhMQY5hqNcYS3uPE8DUV7n33REsKBZwx5BbbxAFho6vrQP5d2sAtEks5LVJg4r9Uu5f3XQvU1SdGkqVZiZM",
  "key14": "368DhWBJfPFVB5grZ1TWgzPsXWMu3BdDZAQxHHMjuZbXJq1JFWaF8SMGHejmosYJwKBVwCszh8pc2sFKxykPoFSS",
  "key15": "4WWfBdnTcBDJkdHDtRLgHR3SnXVwo1oobZ8HBxG5UvnG9r5U77TaGLHLERWEXsQQryBaQJmF2sE4ZWagvoJ1ucFK",
  "key16": "42RRQhq5LR7K6zK8wGKSGKme8j23XdG1qsQvf8wATCcfKgS6j6LP6KMpGU4zXHXzXuHGLWqqqLqNtFEyo5ykTrAY",
  "key17": "5r22HL7W3o4wNWHEbq4GitUEVUggegJcSGEu2Bu9DrqQyhpGa1zxNUqZN3rVnvNBXUVFFWxhpqNAWLTeN1JHGdrc",
  "key18": "35Newu9irKNuwVnskS8fuhYhFH5ciTbnF65CngCtWtFyygPqVEMCoNcx6pzsGEH2MLvgknSf2Nij7ch6mMJuo7Aq",
  "key19": "mtai9M4HSEwcwH3Abjyz8FJME1prAZkkheD4aH6vQqxUnUkhVJdsj9rKAYJadZw7koDq3YgZUav7pSK9aEZrbGw",
  "key20": "rebM24ehf9Kqb9rrqNX67nCuVrBop6quAbQ4wnNkVnuATi1zBLXHTYMdD5yPJv8vrjD4yeozqVsWvxZ4Zdn6NJT",
  "key21": "47qmsLMLVF7PqWRrtL8rkFst8gPg8bhVgY2YgPMokygVsPSAbRKrX8yQ13bVvoioAyjxDwns2sMvR1kSx1eEFVQU",
  "key22": "5zQfZw1DdSQ2MnzoewowVmsQKgJ8U7uMDCqwW1HkAjgq4BPFwE7ppcqJFqjSu1yKg8NXnZLBeTUDEowdoQbVAkCk",
  "key23": "3GNBJTem4Rvaw5rY1htF4hhMfUegsXbNHj8ikMXowQUdjwfCHMSvzrsWXQruMWsS2uaCLysRAkovpGe4siQPtLZo",
  "key24": "56PVwR5kMfxk2LUVYLDVCRtHJC1PcCiD97UmBQHqVMFYftXks7iCz4r7dZ2t1LmUr8eVJEgmszbAYVn8h9r4qtkF",
  "key25": "3kUDciDTyUi5HdKYj3BXH9PsiLiG1yZAZZV2bPqD2uNpWz6fVrQX3EpGzxZPgL5VgM2ENumUCdiM9EYfxSZhxnFN",
  "key26": "zauSdTo4WRsi6QKb3rLsLJBRmmVjZAwy9hFDgCToc8YePygfk9doe1eTBWUumQ2gFAzRsXstX6xWtUFcby35tGD",
  "key27": "417wPd16FbyMEDNaHaW8CtTAMEAVDSMc9hdSVjSE9Cvua2s7VwAUnAkpBZ1B8pDqKRi2SWL82os9tk4ZymeHPNLK"
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
