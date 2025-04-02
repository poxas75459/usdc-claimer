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
    "3bnJMHS6wDjJ7Y8UFRa4HEG3cnf7cWA6FnH3TVNM1Ma9Vik8U6HproJAvSAe6tAJ8pnsbpRmC4fTsHYPDZrwKCax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uc6x3KS6p6tL84MJRTtjBpXL6rXbGnsuWfDhjtfGxQu7uRqnKKQ8rnsuczjHU4p7AMrWr4icAJ1ohGCkrz7G3bL",
  "key1": "cx7jBf1kRSM9gdrWwQ8dkiQKfeKq1QWyap6PqMt8phVAD94qoEjfK3GxKDuLKDYDBbaNWfPCB64QcmPnLc4qPE3",
  "key2": "4gy5hkEHf8FEiEnCvywucYhpWcoQSdorRMmWZi2pqticUBk3HmVLWKjwz2zYvLpCUTg4RmUeZNhe2a1VUSAJB97m",
  "key3": "4ofHDXGSK87TdZrmaEwmtQU4TfMjczFGAebyy7VZyipLGrvsM8UghPERh6AtLVYjrxsJHYAAsrorwtfaofsiQ1YH",
  "key4": "3t6UHLVBopbecNmKQpzpJtARtxpUvodstzVTmKxTnPgJmbKryUnHipNesFaEJngDA2Jgp7o3SsuEmn2ps8BfF7Xw",
  "key5": "i6JrbB3LfA6vQU5MdUR8XmJ4Umzj6HAVKAinbtjTChKYKoqzHPZPyKuXPxE3vkcy1G26yNtk1CuHvdm2hXcwhym",
  "key6": "3iYwfn9GWBU7x85H9BD24p4HM7TZPCZK36WuG7ADG2BE7fHULgAqaBZiqoNSG9BGsMMyPCpgQErBDLDKPrSGLib5",
  "key7": "JFHJ2FNMSPjTV72uvVEy1rP3LYtj94BSdx69pkgCSXo3PCTiPEpU7Eor9iNLVTNgdXzPa5gDTYaDUBmSyj4xaYM",
  "key8": "5nCHWkcQp4mPtUXYaoCmoWgoDU1HvLG6W8KunFqFDu9f6FoKVQi3KCSccKwk4DUXqYfVgwHcUGKuv8HAT5Nex7Mn",
  "key9": "2XoaNzMshXAZdQHyaWGBCvwgeX96dKpZWJ8cv72FhAWVPDfhKrvhRmBi9p1ax79UjwriUZbaavk76SjboDB45j2o",
  "key10": "7AQzyae2ZosJ7W2qFNBzGmLPrXyLWnMXAtBzU9qKxNRsjLkQbMJtXGfkuaw8gc4LtnULZFpKZVY5VsVLgr97FyH",
  "key11": "Z1LuWMNxeLG6oLtDoWKsqaJz1LXV4vvrgqeSt94J6ycBroUUGYBbTR4zAQn4c6cMjQrcQNYLxuJakkQLpzZiqsr",
  "key12": "5pqcv5uMDFS1WxFtXZU5hfA13c3PuCtosPMn5ppALGjja28vxXCA1qKc1kFpSAU8TQp7iy4hcYNzMmih4DWxXdYm",
  "key13": "hAviMivAhqAn9f7DZU9Cqv4y31R2DA6mZGoNTZ1Q9jaiimK8mhnMv95TfCVjJ13dpGqDeFgdLy29nK8ga3tKM4i",
  "key14": "48f4cB933RjccaKBe1UG5sW6jPNQXYyk9tEJFRHC9fPhdjQcfn2BPpJzUKe59Bom2WskZy6J716zrpxSxmShNtSf",
  "key15": "5HCPfxv2SXQBwXFNU2JmxWm5GbzWcBETRhBr9hh3PdBBwW6GJcLB4Y5AoAHFR3YATVKngdm32yFgbxLtnMQHu5PA",
  "key16": "41BGaWKtfwKVgwjq2nhu2qQK15Aj49J41j9bFBuWqm7A28JwwbpeM9NF4eDkkbJ5NTMwm61ZJrTfScGd1pFCJwkV",
  "key17": "2efsQ1FnAwq8P2xBSJ3xZxk58SbqMXKB8TddKco4TCsrAECJ5pf25Lb4Ve9bT4Q73NzL19YTYitJQ3ukV5Z2qZxK",
  "key18": "2xAeF9RQ2yTDDNQohacMZCvaMaa8WUz7FDtJmVx8LGXan8vLab15KJhuy6SRBfYvMH7E3KzYSR5VqKVnqGgZvinU",
  "key19": "4eczWQxJctUnvopVhfFvShjCMkCfzvoZu86aCo8WoUAiFdkBDUAJBD4X1cJw7mZXHFLqewN3LnCDja2WWzLWPgmQ",
  "key20": "3mRjnWus8rZP8C7Hsd1rwNL851V6ji2E75JZAsGkydXAnfBAJQu5sx7GpD6823wDWgWZYejUkZWs51PbzVbvEHNC",
  "key21": "5jUrwxRD5aGTFijP3SgKZRojnPEvJ47fLxfEW3BZaZpH1Ho86Uwi3tgb7yHYyR4KnnyaoykNTJJALYQMyU331ej4",
  "key22": "5LYiA8Y891VERQNF4GHnL3fdkA63DcUoBmVQpsjuEz9VhcidLTscsph37PeyWcNmBN6gpHXL3vpJT8wpJJTc4t9g",
  "key23": "3wSjC9d7G9DMQRiSsCapCSExKzK9ZrH7W28dcEVSPDwFDwkTEo3nw2Ne8Xe8YshFr64tEVc8TZLfBkPESkK39gvG",
  "key24": "3Fh9jJ1wq1kFPXP1WTHd5xcBHWvxTxFozYZikzthNV4yLxHQD91dgkiPjDyrpiNHQbmRxTwWqwvYQnncXdx1VbCA",
  "key25": "351PvzYCmCpb8VPZkYYcnbKQza3X1ix6wr74E2TGEubmKsqwzTV6upk2FHGoPPsMmXypZPUXrTECGjtRbT1Cnqt4",
  "key26": "bKTJfDAFXD1PZVc4d7bkPUzTSqsQDiZxksT1493NEF4ybLEZxyvZsiK7u7wwqNr3qBmsiqoNMvbAQeMbkr7qGUD",
  "key27": "sRxn3UZUeYi55rohdMEWSnrkvSCvSwSZjFtkp1EBfzFxvs5VzDtE43vKzFANNphRFbXcdeYoNrBNeSSGNovp9WX",
  "key28": "4itrDXNk1xYtRbUJMM6MYYbbah2JzXra9t8pyahDSak5g537GMY8xzmwztVk4qiwBaXwfmByPRS2ykY8uf7Ttz1H",
  "key29": "4QwLmKteZmMCCBR6AjeUew3FnMeUdj7dQXwZX4Wb8deEYVqNmA16HHyyH8aF3g1Pc3YWBUjoWSfKYBxsqGkHRwfY",
  "key30": "4JXvRhrixbZDtkNc6zwdoj5Ay7gq67e3k6FSN6rVXi22mzbcGzJ88qaz1pWhFSSR5CXJQKoMxTo1ATDyKxDBnb4N",
  "key31": "bGr6rdPWvvMpXCuof1Kr24kbazRdZJ4dnXavKiCqtpYzuiRUCBcHYMKxX5TJVkAv2WPXhw4vSxkfE7fu2v5sncz"
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
