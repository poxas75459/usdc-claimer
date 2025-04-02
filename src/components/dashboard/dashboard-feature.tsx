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
    "21nFDXwv14CH27PorfGrkD8QePq1Jpv2h15M2DUinigLNUDjVAwkuiySdZ4recyDaS782JMD9mhuH3uSFPXX1YU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1BUvRAYRVV2kXr23qzvpAf9JTYwAh4vrVggprDEps4vtNV4qz5JnKP6CjFA56JBA7y51igiKJY11CXMijCxx4D",
  "key1": "4WcgZYNxVeeGCPNiirBjPhXAMDqhB7wptAbRC8n6t77CoaHpx9baPkxZ5p855dFjrzUiDkRLLQRPfTtQHSMj1eGo",
  "key2": "2CouqTGprB54MupdxfkxUzJxoAimhgTwCouCBgC8KyzHkCt9D5jNPnND2zS3Tb7ZDVTdDGfjzMWhBgKD7FsVKoXP",
  "key3": "5hekvqHr3DU24DujWJsfUXxDFCFybpL531weDdPJHBFQHSUPHBq3K776y3zfbM4BHKd6ncNNKmDXJhTmq1XLqx1x",
  "key4": "Ub7tUp7KjwU15JgK71txSc1ZjNRDYyE3YZrs7pMo5aPT6uZCoTTt3KF2xx2EwgnuL7F5Q5Yf5JWK8oTqgNunqXZ",
  "key5": "65RaQ7w6Qt3KpNDEb8rGxo6EQX1cQKr1XxSFeaH1oSKKaShkBeWfmGGzsruTvEC3hccGR9v7zHmH4oS4v2hMvQge",
  "key6": "3CaquGf1Ff8va22HjjuSTsKCTtVptJYndsuvDmBiXN9w3QMZJAEyLPjmw5amaxyj95JyXi4SEf9Qr8o7bAvfPcGU",
  "key7": "3rJW6vUD4eQkCofvnTemWA88MJs6C6D8fUzjJN5yw3WpF8i4H6CcK43YLBkTmpcCjtjJXTMZP3tZTA8nXdcexD4N",
  "key8": "23xaxZ8bFFta2gGmsQrdX1f4taAFxxXV5goxEAgzNZTScsKuusskaGcHAGLUDUtMQw2uufwrtbt5HNkg28iYx5Mm",
  "key9": "3Hshi8sm1A2JN5FjjcJGZbSPfGzyNXHJYMBnzsS7RozLtouW3NU5NDFYgQ75iV5LXWxx3rDHqWtH6FMXKmAgByXM",
  "key10": "5nN43R9TtAXtK7TduYtz9rh8xZ81pUfkdHk3abbLxae8F3oL4A6k3b5BqBAieeYZg6M9q1w8QAieUzLzHAF8LiBK",
  "key11": "3ZjniprrMVEpQZxzzkqgf8Fj68QL7doKWbSr8QcFGq837Qu9xdzbFUxzXA6eQVv6W1Ucbs6VzFFzDfq6AQG9tdU",
  "key12": "4qbeWYZRv6PsBkWxfQb1iDeGKRsDHKHkjkRHaXadoXEtV2GA8jVfcM5Mz9AMX2WWkAD56zEgztofSsoZwuBmKKJf",
  "key13": "5AwMUnMtwGDzsqC87dy1rrUdui3i4zLGkCYJcB4eC6VrmwMnZuMfWCg7kbCHsr8ovUd2oZNwaS1ChSGqf1BG6kUN",
  "key14": "6G5Ag9u6YTeqRe9WPRoU91pwu9WNSrnLBCoNfhtWGUto39ojzzLL5RLVXtWirZTRzX1CJWy8KcMCN52YCEyxKXK",
  "key15": "GstR4JxuGCaZ1Wnvxo64ZX5Q1NSp7bpfk9aLrr47ZBpTk7847ErfVSnzwpM6NQZsCgQkeQzog2Vg3JaWVSsKWDP",
  "key16": "4oMnFBq9qqBUupTNJYG1UVQ5ubi7FLM46VXyq7TWghrF5dbdX8ndxtKXX4MTeuQ8untPsVxfvp9hwX5QT976hR4E",
  "key17": "66arzFskVz1fgRierPCkiqbf7urcMi7u9JMtUjY5iUFmegWBvx34MBjg3aEPMbFyQL3mYC2n6YT7FwMnKWQfciLL",
  "key18": "4o4YxiC16HXvrmsuXN4tffDDpMUvFU5syrctob7HDXdndKLENdz2YZCMbFwMssZ4DgRU1x26FEAQpxASzmyc9DWN",
  "key19": "5no48KgDQiXwgEhfPuMXKB6goJmHj9mWTSGwEHqjEzSEui43nENeUw1VsJeub7HDD4tFkokSLJySJDSvh9F6RJSw",
  "key20": "4m7XPVxkUgZojA1Juh2mL73TJgsWbRJtCefyDzLcfL1h89J7Yy5QshCAKgYwvmPWh49QceKW6qZ2orqnpvXpnw3x",
  "key21": "3ZzJTWq573VaQTkKobFuPCfXCooKsmTS8zHTB1Ph5ygLdt9RSbDZqUZm423yz9pM37nNuUk54kvQT6229qA1fbn1",
  "key22": "2i5tpYERJA3j7dc6YSKjZBvWtnyCfxCx559nTrvFag9uH9aE2XAiiMGfU4jdneZbEpYQmStMaPXaS5Nz8NXXyfcg",
  "key23": "63V2FLdjnR4AfbCoF1vdBVRUF5o7kbmaTav2gekascV2YJDx8yJ2FMVokjYmoLtFXan1uZMSmZxzyT5En49hr1fA",
  "key24": "wfWoxcig4McoFQSLasxqqSjoot8hC9FdhCZpoHG4fW9hJTaAsXouRi87bSgzFQXJVsG6AAmE6xDQSjDM5x52o1d",
  "key25": "3HwxYJ7sSx6y5ZAjZGYhXyUN4LHpGoE2RSufKHh7x3jEYd8fSk9hivfp14EfiKgGBNu8Xd2shZQMx9fMU9Euue9J",
  "key26": "225ET5LVaH8f3hjh1NXdYKG7gdXki57epJKKAZAXrp9YQDsXAybWNY7r6QAnsgxdh6hzLSrZfrQGAeja7BXNLvmX",
  "key27": "4LDkYrAX9nVyKKndnQMgaK1ydMQZrCWxeinAcLzxXb6iS63o3Jpe7vxp6596MAJxBU7Qkq8npnq1pBRLDSofDMFQ",
  "key28": "7rEtLBnjsaKFU7CwhGraNXsFLK7ZmeEMNL649hnoghDrw1tmkMqrxckq1gek21QRuaDDpi6t7ybpa37nNJqbnY3",
  "key29": "65notFQNuGicQmSeZfJC3uNmfMsqRJnDoCQp8YqjvGNd2i5kL5ksF5DxEkJfNmz8k68aVxeP16qMRoNDtaxS89JT",
  "key30": "2JgybqaY7drNMZ3PKzZ25Hg5bcymxydGJnibWjbmHaT9UZstXPvTrGjBNaQ8tVEYutmg5j6fAGigEMccKj73rJ27",
  "key31": "2rCcxJKWu1e9xCcRoYPB5DwpQGSBUD7ES2CyDYtdkF97zER5hph45ovP2PJcGfbhBr4x9tAf6sZpyR67hvBCQ53z"
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
