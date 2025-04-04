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
    "5qJNFiN5y3U2arzotgeuNvPjqo5RWPxGGYgHSRNXxif9cwknTUcwm84G7PqqiHErmmYQzRMHGpohfVUyn7QVTy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4SqvJx5zv8iK1CXn4YicAMXrkFZ9XvB1a8QeZewrtgfhYLiDX16HvmsVZ1dGBR6W9w7sAr3SNQt4pa4byfHAdz",
  "key1": "5RyGopiRXLp4z5VhWFNShGbSfSuAxSmDXN1UbFXm1EsiMH1gHYMk89aAv3euV9k2acEbYY2QoasaYq7f86zUBQ3D",
  "key2": "52grEk9yTshCmJhWn9DWT8dG2xsDuqP3aLKPyunygJc9zgvpsSwdBR1wKNzRcLGs2cRa3mUfdEfRZ4zCibMLMuJ2",
  "key3": "5swbTE4SnT231yXdQYD6errebdiNntLdjKbQpRYjw2VheCnLnjinQVXSSinYLiUFH92j3AxRyyQksob4qbaXicff",
  "key4": "4YfynkMPKKZNWHuDSL4uJeaovkk56PiGFoA7Yx8zwo7BWtdc9DUtbAwDWuvaEmuPdaQWb4MsZDGFZcKzus4rRUb",
  "key5": "LughaS2VwWT69qJd554kfaDzqmt4Wqt4oZDKJBY3AcWRziBc9D5ZwWCKy2z9MyrJ2cNPjyAtmHMm8MzK59snXkC",
  "key6": "2Wg3eEhRCGWCCMUeoPRyLZGav2MBMetyHwZeeEJ9BmrWHMJY9abja1SeAyv7kA2GLrbZQgsRifFvVSHrBudZ5ZzT",
  "key7": "4XXsDvHW2VtQvaReiiC4o4UCC8hMfR9nBFoguZ83Bkhvbyijs8iKVsBw62jrr2uMvNVWKYnXaWs1uzSXWeewHyEM",
  "key8": "rQHVjpbbfw7XTrUimokoRug4EP7zUpRDSGqmb8mDRNY8TovHQKGpxMZe9pJCRRfWVytTaPoLEvNyANXNoaNWQUA",
  "key9": "2t8bYc1Cv1fF2qY7sFWQwK92fNLUvKzsACUeA3xA4CbobgtF9YdVgfAWvgvHL2RNo2QLGwydNSLqYPwveyDi7Ehb",
  "key10": "5Eos5CPgt6z8PiMmzAs2WL5fd2umnSbXg1TE1Tmx92d36ar84LgnraWvHPw4yiWYNkQkBHgiTwcofFTmKpWMe4qz",
  "key11": "PEoox2HKdsDmSVSHimVdaAyBdpLypcVTVYTdLU5YezhsYV6EDPKMPumqVjE6Rcxt4WpQRH3iF3t4MGhyjc1nDSg",
  "key12": "81KSMqv9XJsTjGJ7pFvnTf5sPYTVBVHkhD3QqNLPnMsQqiYpZ1TLErvEMcGfXYQNyUKcmdxu3cjrKcF72pr5CUs",
  "key13": "37qmjzXKD6zE5rGrNYNsAZNyhPSdHfNuYjuAv4Qy75uMBHxNh2RnDY5J9LP8K9TpnL76xpUgx9eeYfvD2xbhyjsP",
  "key14": "2yscSZHiUuiKeNQok3GHDSLt3KKFS5uaYgWfX2phZMv9Fmjt5TLULxvDxNgpBfYVLjsNbmY95DDJmkHM8Vez39Qh",
  "key15": "axSpBrBt4766Y5LF5XhbCpJ6FUFuTYrKaEdxveMAwdx6CFM2eeRJCbi4f9b35Y65wageCQaw2G3VpwqD5hV7DQh",
  "key16": "28kyPsXMwE8SHi8LKsFM9pEMR9Jk2iM2vK1JtThQVKfmsxrWtBrwbz9HFFHV4uv2RBhcjSbgUTqNhxFPb2jzFEKH",
  "key17": "39NnFHb35ND8hkwhcE9KdnFQVrfDRVeyRL8hVqUrqJWLpcnc6Zz42hohHJo5jdBCq3yzFHUvqdpV1TFTenH1oggq",
  "key18": "2QUQohZGShwHwpWmtqXjY2xv3YZBr28ciUV6rMRhDDXTpLtKXbHwGDrdbLrZfeFx67DyJZ4RDhXN2vfu5Q8L1UL4",
  "key19": "5v9n3V9xMze82zQ5gfTRc2XNTf1VAVCTDf4CGHtNJrpd81X9dzGsVvoVseHHDskrbxBzp21wJxkzDzTgfTyhV7Nq",
  "key20": "39yvHRG6MN4mQuYLrfHh55Wcf92niVfyS3weUQgwAx7BWMH3i94hnfevq5Z73q8nXYfMTUdB5vZM156md6uB5ozc",
  "key21": "49bkCMWTfez8eA8Fw6dQZzjVQKkjBHbtBtcowzC8qj3sWpoF4TFvBiWZwom1J8SUCMUgswUrRAuTy1toUds9mqZf",
  "key22": "22xKSf1LYZbPgfvzns7bKZdVzakBsrWG9CPhjcgreMMjSNRKiFG2gBt5o1w2VWUYa6TPPHDvdL8T3HGUrYG4Xyzi",
  "key23": "PnRPTzRtkjhzUw7AM6S32y7L6N4xVPYjRhf5NoCtNvv77GcDFWPoVFxozauXExeXgYa7K52YMhhHwmuHWBcCNqk",
  "key24": "4wkmJGrh2nzpyqt3vFAYqGfae5oYqRimwLpfDQQWfQZmcEF7bZHf6s1Anhfkzz7fN6aivx4EFEePpj5auNE7Rax7"
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
