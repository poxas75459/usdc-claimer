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
    "2UKKGThKqaDWWCezoevry7Rxy3WASV3KYgLuq5beqKEKRRrAYF2CqdrS5aePQY8hM5Utx8ShcpggXWs2xbv3ebAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FW7hoRC5g3TeeUFy6sPMZxLcVAGAvuPssqiADjppaYtVHrs6Ba22gJxvPAAxMCjaF8syeBcdro8qFShWPt9fUzJ",
  "key1": "2YRfPtGihjKWZGMhoMno2WXUpTktZmJQQuJu6HGoKMAwLB1RAgrTkKYTB294XG86em2XiwtASw5ysdKtfNxPbr5T",
  "key2": "5vJ3V4v1zp1q3BSkZYSTAGtfrptbXnQwz2xV5utEAZ6cnJr4mrHFzkxD2hUYq4LuXjecwxpQUM8z6gQ3ArJzv2E8",
  "key3": "3BVh1js7V7h5MJX7HHF3rnq9bWe9QKogCGaEpxafQeTaLcnf9p5C8A8vyyRAFiAyLFz6WG35FwGCP7GbXa8Rjkjg",
  "key4": "4iZBWHm6VYTrvtemeJuURahHAadwDtLkLKQsAKD5gFjoHBzJWAtWgy1HrrbUvrqK5QrfAQVQTx6dWyGgfdTopBEV",
  "key5": "5RRRUwGgq1uSMMSWDzJE46qNbYJbDuAcanUVtBNWyBjJigXeXBSkoAXqk4vMi6hYMB1X2D1V1n2664USoG1CtV8m",
  "key6": "4rJHDuvoiBFfhMwtNYWaGaJETJN8pWzrCRSZyiw8HW8TrGeaDhKkqDURHqUNTWWyqbpsm6pZCtpBFMpxkMcwzVmv",
  "key7": "3KFFRa9N2eUoii45GtWtqGWN9FprMRqSPcxLpPEmatM2jefcyNrKcVvCDR32nWrLjHedMBEWKw1kwK6qPtPcBJtg",
  "key8": "45nHUCy7QZwqdrkn9BiRnRK2Gs1hhUJ3nVpsEKdw9kuQ3BmSkaNr4pJ7gYtbPmAxz57BCzRRb9hhVXYym8mZmbM1",
  "key9": "3UwVhSPmWTS5BfgaMiHfAvVVH6UNLESEGE52cnRMWFNKLM5W9c8pxPTM1c9FFjoBVSDfjwkpxWkmvnrTnqenyv5m",
  "key10": "4zYHKLMVgxRzgvLQYkdSHH5PA4i2zWQJG47FGojHXw24jbZDYdoYidJy2Xr6Zb6RdiB1i45UfdYKMCjyVRP4vKKu",
  "key11": "3z5BSSdngyUi97GBxyj64uKVayP99xETpj5uch8pqKyiSgSWYLW9hEeJJgLaEUs6w129QPLcdR9at9rhpwuCHyhe",
  "key12": "4djSGTM5Nw8Q5RBWk5epvD2oY2F8hbtYSmqKQTCe2it4Z5dGZAyZ884NZiVEFjNb227M3mpheGDknYq7dR9iekdA",
  "key13": "4RhKE8ZDJszPFvQXzgzGz3UwAQ5ZizMfhUbQXWCDrPvmFSvgPmDe5WQBpX6yWJNb8q9SYqyXWykHDKy1FrLMva6L",
  "key14": "4gYN5uBvYGVFKBuUkMPUcndhu82pd3j38WarW3Db1Fh6xMWFR2DQpfUtBmyi4rV5WDZJrHfpXjAWxBDZfvDr36SK",
  "key15": "5LREuWaJGSSq4MeQ7A3KLsDqBv9t75cLoE3sCdew83Fb9hQtCPkKWPoQgdwhDC6iDvCQzEqVZ7Sou26H7m76weVF",
  "key16": "3xHU9epirpd4qtPxDpc94VYE8LAfXw9JXVusiWTNXjJE1y8VGu43tpgmQAQDVFPG1VaZfqxKSi899zgcSkN8rhrd",
  "key17": "4SMMoPH4ZNBBpnz6Bva1buDQA2CHnjhaigqksQaJfcYoWGbbzryqAUZs7KBzGVwURRKQi1wBk77iDCDBwFjGsNND",
  "key18": "4hQadfABed5Fz4wofYWb6WfTUu7o9YV3WzkmiBTYjtwHHACnaw2fkom1NHRbbBSENbw1T81wC7sBEXpgSzJPvJ9v",
  "key19": "5Qts2rLvYRHtWK5y4TTBsPQMsy8aJNo3KMqm5UjF5Wty8N1bwcJZANtWgHsCFof6iFv4dH3cULNAvX8muShug4JJ",
  "key20": "45dih8WBasExGdF6TZam4wj25udapeZyXE2Yprj8cuguZovmsgqzxvaEGaanyghr32GL7yjDSnTi7xLm8WLvnzhr",
  "key21": "4NKX5siJjBPKYTJ1Ywg31mytPZbPf6Y6PaNBRmRHXhgSNxxpso6gJzG6Bu1KDk9gh2KGwTp6LvmXCvgNJeR8U5dC",
  "key22": "3viUHcunhgbpiN74C4VCwKnYmBsb4JZTQ7KewUUv6QaBYC9AfRAuqmfdAUSELBRoL1Moqz9GfMJA2vprJNyBTmS1",
  "key23": "nLDg1GnTTkX5Z3ctHT5DXVcVRoJXMn5K3F8dUeht37bBUtCEiCymWvXh9BQdtQFWCcpPogDhUBJu6ivKa5dqxvm",
  "key24": "3pa718aZfxe4AgeTbY6BdoPtCcBNmzohD2VCTybHJEHVocYb6vhiNhnzP5ppkoFE2cqS5ZMcMvfTFHzPM1d5GFRY",
  "key25": "4Hygx5zU4hLnRzzFHiTxFuubx2r9vKYgqVHuGiXRxcjpQUkjZe7WF6ZTWeTki3tBX976PyYBj7KoDoG4jVkj7ph5",
  "key26": "3aK5X1VAMFjEqhSaa1JMFsmKkPxtPhXfBiWqyiM75HyMn37hn4jivk1isp82uyBp9wFRLn8pcrDmrikWSJuaCdSB",
  "key27": "65qrzQcj5cwaCnDAiSCWj6uH1Uj5TzbnnymkMETQvep5s7FHYrXMRTPmoJh1EzXQwibRdMj7f5v5QWYn19SZXVB2",
  "key28": "4EJxJjk7GqPKLmDHcq1z6FVPqxBLNoqAHPEAMgHL8LVP2uxWzrjpoE6zVt9uE7Nii9XzFZqCvfY3hTVCoScF4Fmx",
  "key29": "56XZyYi4VBgQdFMpTHuszHuPRo56RAHKmGpoBxydvTh3exyMFuTfJnVXByGZTVfJDELuENyrSFpQphbVetW3om1W",
  "key30": "38KLJUounk75K15TnXVnMhVDVRvhK2Z2tkyBexbpmceCgF7JC6tUzAAGvwFQcfW7SxP7iBjp6UhnMNcJ4YrGRF7t",
  "key31": "5NA1RGqxNNvuT5HfMkxPbWPHJCKdQDhHwNxBN6rXpwvcKJki4LZtMWHvRbueuGbTohVVtaUDSXAWSA3XWBSJawy5",
  "key32": "LTQrgjRJd6qpHoqDjC2u33zAG9XjPGdagVkAz3oQGXVx66YT1VBWpFEnFaS6QM7KKRAG4V4UwZgmPHvYKaHybkZ",
  "key33": "33d9HmEMVsmKvjQwGbro1WGM6ga4U21zr62dTBEm3rUpZwh1veSiSPHiKfidgZpMBzwdTXAUnUC8UDH9TEYEhdxK"
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
