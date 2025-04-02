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
    "5PM9W1qUrqL6sTR5M4oczhftxLBxdzuoxPmJ95hE4LDRk82kb7TCPyreapAZoiA3x3gHSmbxNcNfydBQQFFgnAyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G55nwYUghE1K4K21EpvY96U576dRECo3LtNFesyHM2veuY326hXgmSnFoyHTM7niA4iMC8YWhxMUd7svTLEnQxa",
  "key1": "3a8LVtLTodGvHYBf1eqfDD8KWsooktGQTMCxKfnUtJ316qWNzZvnAV7eh3X9goAbWmhgCJhFyPEJVqAfRHwQsVVA",
  "key2": "Q8G8gpy84qvYm4yLeuTX8tZ58AXRnU6h4C9vNu5BAwnVrgCfXsJsXezes5BWCx3fAUvfwQGPaypSyxsTF4cHZtr",
  "key3": "49HuCAgxcSFg1GdmWriNzVLdupavhstsRoKUpBoAD6b7LopMTZVHGA34SpwG9wRARduvEFybMZJ5q89tuyHsrL2q",
  "key4": "CY4WQRXiUAdtwjWHkCNmTun3YeW8Yh48hGQqPt5E9dLMzFx2kfHHe77yEQ5noMwRtyMMQ7NFEGfcCqMgCAsDriL",
  "key5": "2DkzDhaSQJdQd5zQGDLcPHWqjJMs1wUGU1m5DQE48vwssD1vqacoSQDBbm553GUkftG3nXfg52QgYnPDzce1VqZs",
  "key6": "4HFG5qqhDBeywny7hQ89t6yVM2Fk1cYwKVMzAC8K3yGKBJ9HpGarCtrFRXEBNF9peg5LnkNiRTy8KzMgp2kBvcyC",
  "key7": "2kZcACP2AjUaoZQ36HNrsXKFmB865dZ57MyyTYETEx6zs8HYdRPzeGbETWWGmJLZVT1n4VApCW6CVNQLMDu9BChw",
  "key8": "52suWLxx4RVAiD8UYVLAkwWSMaXDJ3r72Vorvxh3EUsSddeSmruXmRbw4hwBwkWkUzqTg2hEBBVQEMfvncCJq9xw",
  "key9": "R7jq8Y66obsoRZTQ3TP6zjzs54psXLq6m2Y4jG9CG9Si5hXHQSZ5oBmrgXxpdcEMvomf12EqiNoAc78g3fSe4LW",
  "key10": "EhTyZmjggM36YFSLi8g9E7PwFcCwvH6pKCqQwfCzS5wu5SQ84CyVed7E8yR327N8wU8g85YbreG5UTLoAV5sbYw",
  "key11": "3z1mqRUUpFU3fRQCfM7iFyNsFa4pcqWNaAUnGQU6fH1onxDDq3ot5C24rRQPLjkWXxPzn3cp35sZwNH3Luua9nKV",
  "key12": "4f7fubub9aSadDrAUhxYo6D5Xr4f2wR8UxsfA54nHpqLjwFKa3aPkPMKQ5nJto7WxNrVR6KHtCzmQH4DzV56o7gv",
  "key13": "2BCxZy7Ysna1nCpGopjw4qWiQ15hkMukeD1Q3aduLLy3fPsBaWhhma9vgL7CYW3LRjkSrGk9jKrhG5sP3TMJkAQ4",
  "key14": "VDrpZSjHDxshFSCrAd4tL5hVDLt91EuNNFgSMzVyxoEqoKGes3VGwDqzDWhd15HUcxbLiSKUePZxmBH96tL8y1L",
  "key15": "28BN5zJEsSDhwPsqmypJ9LhxYAQWmZ1NLBic84ZgFcC1DvRKFaM7SKcnGCS82j1JK3nLphAreMeQLBsuynL1hj3R",
  "key16": "3iV59eNcgAS5QzXgQmoogLvzNU2vN44Pa7UBTYdhBb3iD3zj8aLU8JJGZqHdY1RH9svA3rTTuosAFgiAsUzo1QAu",
  "key17": "4oCqfJX1ggExWC8D9pHDqaJtYUocAvKFrZMtHaQVA35GzQuKsSBe2b5HXtm2RoN87VtdwY1WpM1ZPyRW9eWqkpa1",
  "key18": "3D83nES8a6h7p3G5KQX1DUV6S9gTm328mCPM9W4GYmrgiQmxdQNvkaNVKCBDKTrUu1wDAYA6GM9hdMWjpZb9p6AX",
  "key19": "59aiAEN4NdtQcq3ZCvSHknpRs9YZrVW6UByEQwkLhQTRsqKGQuagCyAJ4PEqo4wa4rf2DacNa39DDXnKCKyzGXQe",
  "key20": "5zhuJ3Qgfpje6DCi9iiQjpyFNopqiKVEkFjHa4bAoVb2nC7rhAQBjMdLQsMBfEe8eTyhJmkSmRcL1z8V7RmmKHr4",
  "key21": "39DdicFL42t4cAwZcYpByPBmUTiy4iPwJsRp2V7gaTMY6wBzEz12tgifjwRk7bfjhmjHDAzoRfmFCL7o95rP8KmK",
  "key22": "ENmAT4tVkrvsUo6du33xk9hcwQGftYhkdnc1FMnPBE8RWhqGoPXqLPWzdVsVPU5q8NbqAoK6sgzqwQ8ZSRHfU72",
  "key23": "5m5YT5iZsXj69PeYXevgrkmXJ91Ki6Y6xP4snfzMaGSKrsBu6KnwMHBAhsicPdsryDkUdJGJsEcCZNz1T3vfpJ4K",
  "key24": "2jKQySqYKp4h31PckJoVNceeLG5wsMRARB2UeMEDsUyRDGiGMr94Gh7HYLmciPD9FsNJVDpft3DJrT75ue4Nobaq",
  "key25": "4nnWmxEr8i7eb74eGY9L49LamAz87yPvwVZyftLENxqcbpbTbwkEoQLUKRRBwHeXmwjRRVVjGu9MMZFRjwLG33tQ",
  "key26": "BYQULMpNQd2jBcQ6rNx16jNNHPUvQTZrBWhCHjxVtg8idbkD4d8cwJpTNWD9y5JiNqtJ3KP9ksuTXnAeqdoeBSa",
  "key27": "2iho5gpEvQy4zgCbkP4UCwtHzEfBPUxxzk1UqVqwGMbeuThdTe2G1uV8EX6gYgr35UhW98zCzSCrJKjamTtSX5oN",
  "key28": "2ute45F6rNTfNT8scBdbctinCRC5qK4dFY3dAJnuLeke8qRPsGX6i8BMvNcQ4mjL9aRYBFKGyVDj7XVM7HzSiwDt",
  "key29": "3muq59dU9Xaw2eS89XSW7cLHbCgh6HB9afYGYZBEgFePh9oPTscyiGeSk2suTJnUUd7NWspVh2sDZ4htjvk8x4FW",
  "key30": "322VTN3nUUTsfSCdtinF4RVv4fMpe5ptfiwDWKLM1MFcQiBtu22TWKc1zoA6U5aW2zn7h3gMTbTycaKpkCq3PSPb",
  "key31": "2JaNSqrV3vWqhkZcjYpaz91mpjDVrDHCHXcpKqK6i3DZ2o7zDW6XU3RCSGrSxqgPLKCN4Y9TPF7H5Z98jrFVEZ9c",
  "key32": "5SGP1ByBDgmhhVhveCFa1YpvPWaSsTBds727z4zXZrv3TMXyEUc9iB129rDQhoZna8wmwVP3q2CciZPWYsRG677Z",
  "key33": "3x4Y4ZV5BBMzsGgzwBboMv98qndc4hZzKanhDjjBy5oxu5XcgCSNWgECv83nWsySKeoDWHtCeYJtLh4t2TQrfXJR",
  "key34": "4ngx3PnCnexFepvyMk2pBMFfKjCsXpneGQvuX7tJpZgPKSmeGzqT8ZKAUfuHsd1w8F7zLyeiqcBckiJzieQm1ipo",
  "key35": "dJnqiU4aRtuyab1M3EA5RiipsPdqqLbCvZcUwoMBxFLvHSUcm6X8hevPVYaikrWbkt7LJ9yknuuaaTPUqSH2Gp3"
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
