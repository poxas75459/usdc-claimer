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
    "5TG7DY3MHoow1vs8kLVp8nygQhqjWAxmRfKpQkh21BTtuNQaSJ4XMPLUoJ3nJRqS7YcdkQGk2zfRQi9iXpF2NiPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7BPpnY5ieWEeiRhsU4wAVuF5iFYNPyHtY4MDj79UfD8HAjF2kXQynjtwUzuVQEDcmwWTuagWHbAEgQc7cWt7Kd",
  "key1": "3Bh8CAvYL74YJCPhrikh1BeS3qcEtsvpRLsaW9gMRrhiErT6cTjrCkUwsPy6tBLAg9jDwaGgFN5Ziz6ZinJ7sYiW",
  "key2": "dSNQkEU89xo5qjoDwZJKHugjxBzRqVsTQLQ6vgtSz7o6ENK1gxcJY9qnZY16nfwByABtYMj3hvsko9SjPFMz5Qy",
  "key3": "5wdZXwvAQvxt4vLz6VSA4nUVC4pbhrjJxNdASFxUDbGBLHWtwDyD4pbzd2taQqkZpPL7SpqLsdevWt1AE5Wm4t5A",
  "key4": "57KobpkgEzgB7o7VZSCvNR7mKPWAfApnpGq9ZXpLx1Em8xVq31hsWjb8qbJEZCN9QCCwKCUYF5AkpABpEYbksPSa",
  "key5": "3FQNJyS8DEcbGb164BNX4rwkqTKCQ8zQibk3tTHFEmG1SXSQeLmgFxWFgHs4L31Ho7vji7MMeTUxTkkeeHwQVtmH",
  "key6": "ShPcFHqexNeQXcBaB6XSAczB297PTSf6uTLGv1bSdgbZcWNQQCsvswnLjaDxf2cJhwcSag2FPWzhdFBcdLBpG3d",
  "key7": "4B6xCSLsLhC8g7LpXTHTLoGrHQ19T83rnANP2jCa3qYfwFnfg9Y2Y1LGe335htg3NKmmshaPydkHMN4k5EjppmHh",
  "key8": "39uvb36GqJzyvFGb6PV2U9jhMXduYQXNhPi6GNQ9JAYeryYrbEePAReDwvaZrawwf7TTipgFz6My9V7sULxbUieJ",
  "key9": "34jYDUHqWTqtwBLdVnV2pLUUKBSccBdPiL1QwEXTjhj2oPPkzAyjFVRkKVZsungCuYk2Cr7Px1Pnw8sfMqi3yPiu",
  "key10": "5iwh24KgpY86nFj2hmM5pyP5HFgFKdDxHvwoLVVypXAURKj88d1udjwcRuDikimwG4jgW8RgR7dNjop9c9zXEu4o",
  "key11": "4pqTH22xWBzs1PiKm7FyYNJKLaVrnrrKVvN95qepp7JpfRZvLvF59BuZURhBRt4c95szJUfvAviRDtzCGCVtnKmB",
  "key12": "4Y9QJRQQw9yjZikq9RDQ8Xhsu9YUZF1gJwCUhoXTPhMYnSaQQwUhuru5vjrHgnzxsDcPnwbKYmEvBFCLeJaUQN1E",
  "key13": "3SNYk8MmWPKFe2aTiCN1mYrJaSa5be3Tu44PwBB7n8equoyNLkAUcY6aFnTsPY4CTsBgp772tEERZdqvQSet9KLV",
  "key14": "4kAyhX3ovfuG7ZCwXyQPCuKJU5cLVKEYuF2CTeQRnL1xP3dMerwjgjLDcLbpFo9cbkhGaUcei8xRKrB21jWFWKco",
  "key15": "4ohrCD6sVcZfHP9iQC1e4inKxznn3dUcVNQDkc2tXCGTDGKZDpnHJPvh5N2LZF1WTSDGatnTnNWRAbj4FFFTaWyV",
  "key16": "4KoQ8FhxV1ouRErPzsvpd2wuM2enVXXBFmvr9iLc62xAJZgceB4mVQ5kepFoLATj9tnQjVpqEGMXdesH2HzZaK69",
  "key17": "5CYiuFzE3zCc2CnM3gqCaAaYfTB3j6VKh5989ewK5AA143HWuQXitfJ4sX4QdGZEd6nmJYzqPzqANG6qWDEpmwev",
  "key18": "4aKMwqg3o6wFwnTzm7NusXcx7LC9H1RsNsA8u7xg8cfzp2LL1A6p4go25iGzdzRFWsF5NaFA6a5b38m8XRbSqhWk",
  "key19": "5KrAvP87XvgwUzV3XgpD4NW1oJi17hbeXBy8JjxAi1oCjZmmhWCn3BU9V4WfBDVugwaw3Uis8C4F7ELkhnh2AZKS",
  "key20": "2uUghDPJNzCi3XxkvhsjhMAABanswcG9UGBpYAhvjkdHvTPmEMfMZtnYFqmbiJkzqBgc1tWby7G7MuC77A9f6bkg",
  "key21": "3BsTKmFTHTFbN5DQdzZvD7tMBo8xFsG943g1j9JgWmcYs5ApDzRzf2pFLcG1kAHZwUkt5X6GLHKy9JbjJxQ8ZXxm",
  "key22": "4LdwLd4DowJXAJcrqQRWw5R7sGA7JXqbiKdTqTTBwJEcU4QiXReRT1eESSEFp4QerTJFDomHvqbrkUGdQtxyiZZi",
  "key23": "545yPMJU45VpU4D1KyJqgKTrcpVHTe2fWrrpd9bMtFq5tQpEGfwPW5PcZ3jt3m2Ucxjmp9aw78BMjyhqTBPWr8H2",
  "key24": "2LKMcmxbahKErrnbUwTbqpbycgFcZDdpJvPa2rookoHGsmD9qoqGN47jLcrNiUFMf46xVG9jqjAe3oDpnRfw6irb",
  "key25": "XgJSzGzx8xcckxpFht6TAw3d2A7QKd8zFsGde5oj5QF5uupQmD8zw4p9bKNMjPETfV1XUa8Me7EzJvzRpk4RnF3",
  "key26": "3XAc1MsjXdJLVLMdapgrH7v7zYUBH7tYbcCZLb9VfSSbHU9iXrvr8mqBJLcJMSoWrNBUTKTX5HXwyxEhmHBmEsDQ",
  "key27": "MUxFQ7Zdj4s4VKwAi4X2uaK2QNEVqh2gz8zyGgKyyZH4gLEftb5tD1BPJZYUB1Xify5wUCun1w1JgcDQ2ijXaXr",
  "key28": "5B9oty3cQAReiZZn2W97Jm7jyyY3E4nEyhpjNuUpLSvdcpr74Nj37rMZMYeQVmSKRdLtMqPNkbEuzGK847V2sD3E",
  "key29": "4VogeF3aYyNYkodgr31NFjrixiGKiBPoyJzPdihKNY8YwxD7iV37ohCr2kERkNxQECj6EVdKRC8UZVyMfXtoC8XC",
  "key30": "xRhJ7tpuRwSCp5cvj4ihvzKCyK4y46eT4p2KTasdSZeDtefbcWYpTze4UH5Hira5AeNCkCYtAWpYSyoobc3nkQo",
  "key31": "3KjcbG8Uk9PNknWvoWyMxznw7i2pMthohPmvufTsZ6jH87cfFMTExKNhxbM8bcBruiyPqSwbfGh5tbbF7Le2deTh",
  "key32": "2ePwQMA8LnZdWaFRUh27NdYyGUnEM6XpKhpzPSRxdf7mehHAt8MUzmsd9477CjFP2GLEn8nruJgHmW36g3caVUsw",
  "key33": "3b7XJSy2r7RGT6MaPcjPdL8Hsz7x4umkvGHKXfLfst6CikacXossNLcfXUveh8cvNdePcLDgH6dzWaKkbTMXQTAF"
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
