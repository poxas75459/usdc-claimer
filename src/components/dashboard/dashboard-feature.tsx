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
    "4VzVj5x1tzDTX3QUcRRSEUbHfjS4UBowdfjofBTsmxd65RTTL25o3Hp7mdFoBR5MCFsTbSiyg9TMMQFHVcL4ZJUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3huXDnxPdzZ1NG1S791vFqYWceCXydsWU4v6E96xFqGS3a44jm2tRP22wFZfoYJPphAC2BATrJbyfdtcy9xkZKHk",
  "key1": "4D2ohnJ1Wg5pyqvZxuo5eQp5KJKPLAbdWrUB78e94WwmXYo65MNh7hE73583v1ffX8B7x7SGBrVd6CNBmDcnjjt3",
  "key2": "489F3fyBFYc3jkue5V1AKiF7syPXxQKSo677nzWqFHvqrmZfrEy2ywP7Uszkb9pTM1a3UVK4gkjjSFYJoQfhnXSE",
  "key3": "2LLcycEXxtmJMiTBV9sGux74Jc68pru6hdJFTjr9y9tguExnYJFW7EV2to6p29VUG4WL5kv5obbTu4dye2QK4fYS",
  "key4": "K645T9HDMjSCWuEWh71ZvroZFxyeBREwMATArUAxuNHA5ChGgsz8dYnXWeTZiNo8G7uBNw7Cdvp3itkELjf7fs3",
  "key5": "2ZbLJQAZyDf6Qzw62J9jUkd7G77SauDfoEiPqCowATVNzcBaXKuuuyKFd5iJpC79zswTE7NXpKZ3RNimWHFH5Evg",
  "key6": "4pzGWGhJXTDb59iLQUpcQ5fLvjqBXhzonTYK8RFzuzznTkoLkyPXtBxxYPeaBVx233pEiZRHwaVKTWd4BxgKogJG",
  "key7": "4HBtUpHfK4jJCPUu2K6otMiCceghEz9zDpL1gKoK1D5sXn6112f738a6Sx8dxWCTo1pBW8NQWM5m5ogSHsP13xYs",
  "key8": "4UqJ1abEfLfGx6c6YMWAyX9iJxwkzwqvQTNT2a5jnk4QJwk2vSjEtiqb1ZC8nfdqJcfbhNjSTCp2AsBNeoePxqPg",
  "key9": "28GmjDGdgzyJZtYRkaEjzARyEhRMW9z5wzeNtZYQXNHAFTG9fYd437QWgpqREHUcfD8E6D3zbkM1qzi8CQTPNWPG",
  "key10": "4NFo9zFZQYMufzgZF41RxyYbNfsG63PoPdZW3MCoN7xYDcN3AncP16S6BCbgew9i5pxfvAD2aAhmVSHRHeJJheEW",
  "key11": "3fx2ikN5Z9i6WittcTPCAucUDWmkSp6m8P1hbxNhYhMCLSmZLjhvYVVpSPGqjnSaSZFxh6FYhSXdnK4ePP9HVcAP",
  "key12": "4NcUdLrUJGz6WCZt5NHthjGA2ijwKzmmqhPp1LK1Mdx3mAHvZ1h7zNFcRcEnYvQeTZWtUiuReoC3AkHYd5xrpjRb",
  "key13": "4medeqpmbk921vmvn5BLdCHefKKPr5jAhx18Dw2uUdTNnd5G8GVNd2dyHExqSJhhGTAqmTvc2V2heQXeCZiXGQme",
  "key14": "aTywtv92nUm3nzMhPqznrrbodhrkS8CXMGar5FRh1FLoeUxiWMevtxzsmStUKRABJSHcZtmEe5VcsTPcpdkbE8Y",
  "key15": "3QG9g3SRBHnjwXwpZTpCYvxZ2zcGHn7HNcSVA46YwKh8myEaq1DeyTe9ZE9rzqRzQ3zQHSuzeixKbWPMwuy84n7k",
  "key16": "k3dM3FveVk4HkhQCeGQYpLq1yPGy7YDUpYNPZ8yyesuK4coepHFknvtvFBUuDEyDkygGHrQmkzMmt22RRzwm6w9",
  "key17": "3VXmdPVS5mkz5ZPHvk2neJLUc2nfUoyZP3zHQZUYQjsQf8hpB7Y3zJuemSAgdRkywRrJfPm6f1mDKzkEYECaxYUV",
  "key18": "2WQHeq5EyXBRLE6hUJ81pNqiqHiczTMhmgAHsF1siavbVNrhx7mGFcJQWimmEhu42BB4vcmiBkR78YQ6uutkWJ6e",
  "key19": "5aDshBKnK6cm1ak2A85g2PrnMekp9xD5vJv99N8LR2DcHPa2sXDEeCNBqKxzuMiqxs17kCsYF55szAbHSAtBaNqj",
  "key20": "5SEWLNfJYfUr64EsBDZkVRYqd7hKhiwaxPLrScDzRMcBYJQrB6uV7sHqrRot3Y81eg5gSZq8XNUoSo9CnUa9xjP6",
  "key21": "2iPCegbEMTK8CAut2phM7w64TUtTVP37xas4pFzDAtvdXqDZUe74FiVXBcMHLVmfX1ZtsM6E3BKuT5Vuvwt5fHpk",
  "key22": "64mKD45R7Qm7xgoownFvAFRgp7mbArKMnE6XsLQ8Z4d329f11Xk1uShDhnZn8vJA2iaMQ37hR5oZb2RpH88PgN4Z",
  "key23": "21evv21tgLf5Nv64aiM4zhnn8XXH1uoPZZwGDxhCKBUSkc8AeKJ9nmYZfwZ4omkMiNrd2W8x8Swf9z82tpXFq4fs",
  "key24": "4kDPskEq6Z4xZFUnPzN91Gp9vkVy2SKxCFFFBJTaKRYszQmm7HC5UK1MhLU1rTKKB3oA7TyBhx5jGjCQnARKoCE6",
  "key25": "5F67VxTiKaeyzpRmTKb9E2kf6QTgHQCCN4Qni9ua3A6s7S9Quf736Rpve2kVJjR9bpfQcfeWGRWUtpGpKq99Eevf",
  "key26": "5Fh7xxJjTUJhoi869bMB5ACCPcyqaZyNrkVF8cghwLjNnu5jk1cxQJkBQ9m3zmKimS8QWRfi3N8xB5sFyoGgQpvh",
  "key27": "38f4YgJ2WQRjh2jmmibFj2bMtrT5X72YirX9D9PyoboVSRGuJ43K4SYF4guC6r19u3FkVsHwoujfDcqU1CHshjFG",
  "key28": "37PkS7yrmzqrZtoDz7sqeXvofDq6esnfJZDW6Kq7xWS59CQJwArj2RiYnTTiS79SN6tmjY9UQrfLZsfgvNunecWy",
  "key29": "2sMNCjQa9mCy3t1TDsMWFj6xPnp2WzCSyeEVGfJ1bHkvdcRdvndDJynyTrxsZvpf5YiG9K4fB2cah1tujJkXJtdg",
  "key30": "aJUofZYuX3zaXXjWZpfNog6RdsE1BRQ1keEHhiwAzXHfi9eD2A3QiUtE1svUcG8bHa7zBRDj1hEBurLqsVFcASG",
  "key31": "4izkSZS3iwV2MRMoJACUDUwKERGoiAMwrT4kjifQA3dXczh7z61pr5kT3WeQ1NrmL2VE8ca2mun6mVCoaXGCuCTi",
  "key32": "4bqtGHkDfJyRTDszJ7gg4SMq4jBb3vB4XGgWQ86KcxdnkubUbePCryxVMdbk2Qj1beZKNfVTuoXn98MHux3y1er6",
  "key33": "4DETK8XAMm8bSLbsoUqcuxzxPCRkR43HQ3kUBmutdcJ1k3kbcEeckaJCjNLiBkNkva69trMjBeEGY5aWQj4VkWks",
  "key34": "3GhHcoKKcopDWMcf2faerWsYG9LW6aQr4rahxcgYroFCn95Kyx4xyTpibggSF81V5y7VVvHnqVuHwjAuR4ECjp8T",
  "key35": "5wPAksaeaXMpjvFKzrznpSjy4vUMpzFBGEMzxxKpPCe2hdvAqVr5mDeyKsSta1UgwStbT2sHpJRZFuFmNJDgMjR6",
  "key36": "rD9jL96VUHuyyvusBvRFSsdrGuFyBahKMksttzo9rydDFDsBDeqQkigib65GhCvGuiydkCkycjW1Jxrq8PKv5Tp",
  "key37": "55B6GeHonEgWgWJqBoKBWtndZJcTDzPQn8Ycm6CUe8JFp7xQBupwv5N4YkhyytZ7uqi5cvbnTLPcJTvtT2L3bhF9",
  "key38": "2jJKi3sfmDQvgLQ2CdkZKipax29QVLuNyxn3kPrcESZr58ZHfKkVrDejEPkp6fYLoXPPk3HUq95HPcMPtBBGqBwC",
  "key39": "4Boc2o2EUAiQBzsdzFWUVbpsrqWrtHe82r8K6R4cAD8YJKcS9rkY2aNjULc8WNrrSKpCCE8oq7BVkoZf18jNJ9bU",
  "key40": "4NztM6hDmnX4oq2WABakmjZHHkHxYFP9bTMxiq9SWhpxeqz4MvfTUR8X8rCid7MToeFgUhKiDgu8wSbvA8de7hpw",
  "key41": "5wVjTZLmEGw53ZAsCSZmBwuznGRc1tGeYJmg3yArzJkj1Vxw6U2zQpXQjU955Uim1KBpBafTuUM7GnaDbJQzNiAb",
  "key42": "3UcA8iWVJ17H7yQtQGK25HG27ofxXn9p262XezmJ368UwdruEeqE3GhnHpQ4qY2AELkVnTKpL6wXwVF28Tp5vbbR",
  "key43": "NLAU99SCRk4f9J3xehi9kakyoUScpKGERbdz9vWvRXuZFdWC13RobL856dRZKJ7oTQtFCnqscuz31Q9H7i7Bsfc",
  "key44": "xgcyULEobvh42MUDguiRf6E9ZcoXbUuoVtjFBRvGoWxjMYnqqZcKEoDvnaxLmnG9wLzYmH6L85w46hT18oHqeBQ",
  "key45": "CWQTStA9vAyiXiq8zkzspmbsGgPfSXojMVgLFJj1kdxxYWmWkavcixSZUBVyLqkxSDDwa23bxKARV6XxHTf2jYS"
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
