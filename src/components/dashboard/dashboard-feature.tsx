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
    "5qHKH2V7dTDx4DCYyrQZGPyGjP5bqojduNQ9SUWNAViLKGsosspgUZvdGY2heoX2g4yV2jCph1kDMZ3asFxVQmSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3GAgQR7PLfjEUgMBEnLuTdfe69YSUt2gvr359hjMBghrHkopPiLHztdwtUbrYPdcrhr8wxLEGrGW593Abaxi8Q",
  "key1": "2YWUm8RRgNRduKdUUmBA3teojLus7Vi8R11jUSFfi1hSnmK3PesqB2KL5EnRX9hxTZHYrL2LrKkMuTVD2ryyxSx4",
  "key2": "511qFXDUVkBhu4kie1QxJkcn8GDetTFxoRGw11KUjEYuXtJHaNKSzV1wbj7Eu7BkrYUkK8Lez2tAW6YgHKooBSLg",
  "key3": "3KvkyFqEBjGdcYzgerBFcZUs6QcNXvSPKUAmoJiPrgZmvHkWqg3jjsDYbDEbzTLBkCWn7VtLrcNF5jwwEUnMa7ih",
  "key4": "47Hbw9JAfUDA8hQLkJ8pPo3ge6wZDTyC6TxunzovHdM8HU7baPp1u487v9yhuko9RShxwVTPufXrkjrS8h6ssGat",
  "key5": "5NzJwb3iSm5fxiwQ2xyU1SVxzCa2ozf3RtZwtrPC8yYs8tew5ADfMgkYJJHLrCLLxutVSYusGfYbh7Mq8sVmBWCy",
  "key6": "2oEiP1WxVNtrYaa4ekMmbjUh2ExYpF2fPptqVMfGJ7oM8KAN39jEKnNMQwkUyGS1ywjxPMYoFAWtM2UbYMaQUSAE",
  "key7": "CpAxHYAscAN88dcXEgpJaWxSgf5VWsLGdWzpQcT79yayG8tBrXTBvUkPAPJ1qSUumMMu6fy4mqhmgn1Bz4UgCdc",
  "key8": "K4RiXPYy2htuLW1MgvrUghXMLFHZiXZxxDYPvtPcPWdESsGxtB6DhYg9VifFoKhSwYjgi1p2JLiZ55SwijdVbCv",
  "key9": "4Qh9eRuidNENRiPhtpJQb6qmwwtYWSh7fBpXfZf1spF4tJmKR47sP1AvpdV8UWavqCGfctGXKQbzxRyBb5k7Pi5R",
  "key10": "3TsRNXJFZBCnC4H9BEgJ45XCdw1a9mpZesweqGhYorGt1p3mLThWU9SYYy2FTF8gg5vT1yyAUu9AaDnxBHhNKvfM",
  "key11": "2yhgaE9nMofTUn4BYK5T4eADKuw8yY9X2oRSkzeQ5MmqogKUz3cw5zgAfDNgmxDKHs1G2Ri8zPGrBkMk7RgwXKDU",
  "key12": "5L67UruFT7CNLNXk4T2ebmy3Zr4kCNMz11NdysGov9BtqpMNUAXwmrTWc7PgpWUFzFh5jETjwpvuXDT8ntCGmbDP",
  "key13": "25EgbZ7ULNQhsxXk9uYEVUcoswEk6AJnYrYwLWsHyJLozVLsuDYyhvX7vgQNx1bLsQA5admpXFzerEohtMm13KDm",
  "key14": "4mhwWu3SWihzYi8zHeCHUeogUN8Q8YQziMXmCwaTERsAHMssiAQrE2jozkNy7eECSGeXjeFbK5KgU5Qcfx3EyZmW",
  "key15": "58JT2o1t11LrDXKbsGichoDkAMntBao77NUEdhPntzUFaNPpHVFWSRJuiHWANbRuhkMmZ2ZzhrfJhXLNR6xcH4cR",
  "key16": "3nbijJBXG3XBFX8heDhQf4dRWHwodxiXDCXiMQ6J2i9sM5YfKLw4Xzrf9qKWvkHMWhm5Zdnqma3YAxKJXr56GPmL",
  "key17": "8GAvLnfXgSx7zrCDJKAWCrJemQotCpP9G3cX3314YJT7AK7SZknaGtnD3P9sG1yXPbQVehi4DQmmhfJhj9UTBhD",
  "key18": "54AvUL4Kd2Be2VY3vzpBLTHXUFhA4jN3qWA2iL11bhdu9tPkobt39afNXDyHQ58fc6bogxn8jZ46o7Cm1bSeDfhz",
  "key19": "ifcLAFoBKqPRaKs64rQXx4yeUa1CAWY6sebFuSJV5PBQV62cxefLmQdBKYHAHqCmKneWuCgUhokgXhYLLsz2uxK",
  "key20": "JaWtGoaFrSH9PDLUvRg2vHZHFoBCSZgik81DXoP3xhuAGwUFJg1dAmYNjJSgrUjXtkintxPZnLDhD2WpXpBwEak",
  "key21": "4T1wc1NtRpLBh6bGXdz2vvbMs3b83XG4gNSZbngpyLSJK1BpZA4w4vho8sQBKzVNxBm6pc2SCbpCPh4CyoD6Xohw",
  "key22": "ns9u4EK2qWbDSku5RKssyVtPXdrmfZ5GhGxZUeAoNrR8mVknqL7Fcp6G8LovuDJTaCgZrjVJniGrsbtKYQjYLt7",
  "key23": "55oacGV5kMYXZbyF54nHFE4GHCGc4eLTh8rNqrXPApCYHFsQgDf66HKMV9CxfedfKJTMWTx8w3FoTcc49KHrx5au",
  "key24": "29YDYkfSA7hxjvRiS16Cb26xJwaobaQfWPdAecshuTM8Qx1gdDS5ZRmL4SzdcuEoBP6ayHr2RcJqYMq3U67hraSs",
  "key25": "5FcTLhg4cacFa8SuVtuXnGeFQcP4JxiEykehitpwFmDSU1cgsi5DF3DHwXVWTTxZSwRf2qKuTa6FbhHzJcuoPXV3",
  "key26": "5aNv2J5VXQqQqwjf9LDLyA1eZXoGijPdBjeRbc65HsrCAcYeg2KGRZfXMQ3EmBqnYcWHsgTNRdbdYYuW3gofQiAN",
  "key27": "2vVcdByQ5ULCW3UFoAC1s5WYbvXqWgxrZpcSw4hAGNEAbyk8JuPQUDv5ZNRYUG9sRS85UkqSRoWA4uy5QaU9LVZ9",
  "key28": "2xDHZ8xydvTdVWuWBuQQMT68oF6jnE7UJm274f2UCjqw68aHDoE5XWoUsxwtnm1wS18zpi1kf293ufmExxQRq3he",
  "key29": "3grg3K4B3QAmK8SXZKPUkiSem2aXKu891pa7bAieKTycCJdkiXPc8Zub3a71PZTB9Tv2qa4FKhSXa6jrq2DdrvsX",
  "key30": "4r8csuwThLTZgNrKfaFyd6x4EADe5ieSpGFwmfQuLZZ6fWyvxPhqCioxyaF8YopuEprYFkZ8dun7Sq7Bky5REHd",
  "key31": "3cSV42CgLbtyviLq4jxPy5scNWhg5njKTBvcpoZeAuMNtjPBtgkPe62S7F9uMLy1QAFamXVyMhDdMA7FbWVt8Xpv"
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
