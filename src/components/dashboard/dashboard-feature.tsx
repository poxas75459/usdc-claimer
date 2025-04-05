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
    "4m8HbqsQsMDbppHqVjgM3m9Yc6sdaqqNvSiECdKsWH7eZgFNBgYPwG583RptRA7xG9j1hJWpoCrwZ5eoXwkwbYzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGjUcboUMC7mT1jFjPzR1yL77HFnCsedHtW3eSxepNyxvdNan73xAzbWJgRBjGswCxZ2FPb9MTmPJ8mAenvSBXi",
  "key1": "4rLwYkEN1yZQxGbaGcNUjnhe7VoQQeFjufE8yU9ddciL5GFCkrXR3LFKj2qcJyjiKnX9c17c6dmgw9RqPZZxsTMM",
  "key2": "2m5L1Par3q6KK2qPw7ixUjeqXSSv3Yr9vjG6YRrCBaCrL8A9aqhajjgN1TfDDd8yPKi8BkiTFyMvqVpxgwsrfpMG",
  "key3": "5tkGXD8fNsPt5CDZNsYd76DsEEyy6Pvqu2JEHvfsZz8LjXYfin5rYx6XXYcHbEYfy7ZmFTw4roHberWCMUpzKU4t",
  "key4": "4xJezF8f4fECUXLKqR8iButQCDwDXyLCG1acJUyFmWXBdvfYQGLnhi79AubQvXEJ2xrv2HWg6ay6jmpbeFda6sQz",
  "key5": "RYDbWAXMqfCjH7mDUpgy6pZ2WHzA815jaZo3MebTqaX3PkB4TSSWNbLz9cUtUdr4L2XwPmrnvtVdmmgU9JvJiNi",
  "key6": "3VAk2uJfcFCkqja25UW3UiYMzvWd3ZMDuAMp3yNdFLDmYvQmz8WJSHpN5iNoaSKWDg2Fim5h56Y3GYSBeSzMxhxN",
  "key7": "2YerEKxAeNRKSQe9pTunHABzNjt6uDn1NGmndq8dKBDgUsf4iQ3QYwJovQRbLKwkDDMiFBZg9h3tXTUCpirU527s",
  "key8": "3PFSsajTgEpqKBnDHQnUCUJ1rxu9qjAQLLZy2dLmN6yhJ4inuk9p44exowZguiULGMEPfC78rVNYTZsF6TPMqo64",
  "key9": "3tGvS7sQqk1QS95wxXXfjPNFqbJZ7YmDvkqBNuE4iaePgEvGmtyqwrcva8E3oHxpwp8CF4xi9k3cFT4uySncBShp",
  "key10": "2byQNkkoL1ozSuuAS4ZvmxYU37qdiGywXxYmtFvJ4npNANScraP7odfCwdc9rzEPXFTdunnLin9vFoHgpH76UJ4F",
  "key11": "3H1RqxjVycRV94dS1ryMPpkeARnnAdwChAVfJ8ofiueoUtUW7T6kBF8BCvaYgBP7i23N5uPiK1bPCXDKaDspRs9V",
  "key12": "2VZFJrvxc4SEHiEmgeGTo2t3fYAMTXM89AXbsoAknY32zKKrDGsgQPU8XKt6Xx8E7cPX8HHkZo6kaEnxTGaQnGYZ",
  "key13": "54yomrSrD9PPze1SpnFD5fFUD35mLRBMpfr1KTAfe2cEYdxM4ERzH3uzaQiQU5ZXXsuMrso2JFJSAhpMUHWRcVbi",
  "key14": "3SrKjxpnpz45W7gd1ARrfijbLJaQexF28ga84ziUN24hJ9PeR6r4zhd2zumygwBRv3xiM8hjEETk13PXZXYeCS7P",
  "key15": "2TkkZTKngmrBuebw9EWFEn6C9N9vn5JaSAT59hF6nk3dGsFEUMUX99sZY5gb42gtAX5E6GvE2HgbAupbUYfZZQL2",
  "key16": "5EKiD28ufXNFoL7oo3wMYSe545GiCioEHh6cysy7rjR4zS8J8GQ5d1i7LiB5bVjCAap6xKd2P7QPFoEkFsXafv4i",
  "key17": "3V3uBGmmNKPDGCKFyEYB15fbZx7Sfpjq4rtQagmZF5bjjQmqQt7ZuAvDXB6NnmvCMqN5WGsE46hfU35kdraLv4jG",
  "key18": "4B1xZT3wndHLSf93BJm5nuQr8tJk7Xhm2WPgss7vYjiPL1uAV6Kucbge1MYCKtkgX31jmmBmybfF2Yc6n2qsmfaD",
  "key19": "5easef4ssg8F15i2nzdCdVbcBPeaYm9ZBNgTYx8JQVd5xBKUzf7UWobzzxY37Vp98qeox8sLXAqHd9kmjB2XxxM9",
  "key20": "21h1iqirYQF6fkxgjmJ1UUaiizHYipNVf2NrS8wzm8rhnAXYba6Xnbuf3ffYvLpiLDa3PBSPHfRXKwaAeQcn89A7",
  "key21": "2k41DU9sVWGvNz6W8TSVBQynsrHisjBBiKooDrYnxFX6xMGzSPRKc4wAnGRJaSXsu8JPEN3eawAbFEydRSqKw87P",
  "key22": "h2rdedPSCuWojMFW6Nqfb7LS5mNjHvGkj2qcNmwSr5JF1hBX2CcU3nMUNf7kxRQ4W5Wtb6AZSVv3C2U9P57hyjt",
  "key23": "5sehohf3a8uwtBL7z4X6pEed7619MRcyk7fkub9DXc9y5VEtRZEEsnbk4xmW2aU1ttfAMd47afspKk7RCCmGMdN7",
  "key24": "28LYjv1Ncu4qLbE8U5Z2r7mzhmHDfFF181BFZGNyxQB7c8hAYBEXE92Nz9SPYoKS7U9cigkDj5EZSJUaiPXFi5Bt",
  "key25": "2JZFKcUCM41HozSkrYZ23JTCm4hZQjHsgrZvfPrNVD4KXNnpFEdCRgoYS8kuQrQyuQUKHMkAtL66dGRa76fhH4sh",
  "key26": "2mGvWTToT29EAGvrYYWR7N7aMTGoefWVHLKgMZMFr7bWdsxVwj8YvLqLEqtDLm5qmkCewedSHevieZEW8p7yBUoC",
  "key27": "3gRHyonNoYg9saxPBe7Sn8ieRLAyxzYAJoa9TixacUcoN4jtLcsZDiifjkba8TT8hcCao1tQogNi2AooTm9N8ejC",
  "key28": "4aBrfa4DxD4o3HRVFuGa8SphLvWHrgfvWZLGGrK6rurZXoAWwY6R3Pb5L2ma8KZKVDyrjAs2rwnC1RLNnfzd5GDm",
  "key29": "224aJ8mtN7wDp6PYNKfPXcGCB1veMQe2AtGLnzGzhgFb4kyB413VWd3mGy8vd7DvPqc5Y9vvCAJZMA3XbZDsTCGb",
  "key30": "2HGZE9mGHT4gHZrnuL9vLosg2jjfuzEjUEfdXz7KhdbYDrjrnDJ4MRv7kqqKDKTxnfwa2fZbvz8XTHjE4bbCbeYq",
  "key31": "4z8DHbLfeotEdL15xoXMvpy6RTMJtCTUeDnQj1h21eLvsHgvDTkrqW6yBCFVaftHv89ziFCPVeUqfnnU55v3DAdf",
  "key32": "398ooL7RgcjXnNqodkmXwSbJCCGXnLFUTRPNQeoxpqCuui2H2MitMU3QRsdG5CJABitpumNHuQGFewCAfmLuxRkF",
  "key33": "2tYeKeJjbL6qqw4UutjFBQp6sj73JMygmwFawu7grFRFbaC3DUoRssQnGzrk5qNVgAgKyoxsVeDHm3KpQn4zpCYK",
  "key34": "4K1jtMKSCqLXw9XUyDqPiaUHYY3WSBT9xjC42eZ9rizUMjXXz6dfkWC7t3mkFV9pcH4qC7Gf5S88XaNWGvdYRyTp",
  "key35": "6dHMAoYN23H5FL5amJEjWAeznJmfHzo7UdiVGJZrNUbpJmGMwgHjJDb3HTANSeWzanCZydL1x2UVyPhRfasZwAj",
  "key36": "3hDK1BkYxsaKfrCtEWSE7s7i5kfGk5BJRt42eMhvUTt3mqTHbV9QistdPMwQhWH6Qe6bJE4D1XbiQQcvB5BZB39s"
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
