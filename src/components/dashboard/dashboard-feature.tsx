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
    "2iZVXBWtbLygN3mko52g9o9PEbdSBvfZZXUyW86JLT2YHwCWmZKxMmM37Gxsp9BUvQbc2bm3FNFvvxNJ3dJGSsAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgtGqhKbZgbYJRzYBnvPuAE8xtPnD7tNwFgRJpsGAV61cxbbi9zw6whUavWY56oaHJC6FuBRS7VXLKmGZpiAN3b",
  "key1": "AsQGfD8r9wZbLgLy998LDore7ttytkF6V8zQgH6KZeov8jHhCgRwgmnE6PoPBczbvMJHjDwmKaJyEmh7uCYRZc6",
  "key2": "546AgMzvegTF6pnqUgnuEqGRTWVU9bhmAPMHRCVGkbiAD4FVmn6TGoZbQ5oe1S2tExYcVSrxgyaU3ZNEPTsMZaUj",
  "key3": "5v2TjfcF5oibUZ5D4Ki4ctXyr49Ks6ddFv4GSHcda8fx6jsXCA9aD7K3gpKEBkeChphemtZRsxsPX4JKGqH9Pqtd",
  "key4": "YMEKziXxuxdJJxWMy7a1h6ZJnZ9eEtPZzCYjSHFMTd5ofDDjAhBAdUyMC7MSorzHHcH1pRuwGEUDUx8TnSwKYMp",
  "key5": "5ECYXTz6r4zo1eKyGJ9oiUgQ6pue5TcrDc3XPB4JosEZtKmXWTh7u7KjTwDvUQndR5jwxhdY92KJcYaTWLsSGD9F",
  "key6": "2Mj62X7mKfneUpwhtwXfpjvaXExq2RGTDhRZwmaUgYbCoUM3SVbZRLdHvgyP9tptTjymDsWQxqvsEibUC8PkkdoR",
  "key7": "2HBP4xyksKT6TzGEMCLQ7SDTaNEU3aTfCWQvzii73uw18KVcRbqhuBHbReotaafX8kkaMHz74fNpau3BPPMnvv4V",
  "key8": "1SA6ctePzZY6RxtFHYo6sYM41dq7k4AB1mLdscWVA1SxRjfdGbgpPgRHuq9Lzve98iurbGssHyW6SSkGjNW7D2C",
  "key9": "3KoPLBzELJhWFgAxehJDKHqMcQbSYLf4uAUZexvtB8M9MC7mWK8GG8AKT9D9prqheDfcWn8wpMZKK64EdWGk8BF",
  "key10": "3EtURhsAEqL62Cr3pwtNtvS7gmmY4ymDigJhtKi7xasWyAz8CDKDMQU3yFBAsVjaAEm5q5wfF1YC3QxBveBqVFTz",
  "key11": "sjmcgkDjFTZswLi3MtHDYAf1o3FemLimsqT813aAsGeef7Q3fmqBuUboEvjxLJtTg4W21YJAM1KDuqd1ucfrdBr",
  "key12": "29WFvJmfLkyWMn7Lh4i5UUXKWpfVMg3cyrFrnQQehqj99G6S22wBci2CmSkJihj43gXxpmsBiiFent6k8LoQeGNv",
  "key13": "3hgV2mddPsZcWqQGJDUdvUz1PWTnN5MNU92NwURkosLnnZTxo8unoCy2aq4z1wNVayT9Z8WAdxkS4FHSBfDHvHxk",
  "key14": "5seLBQMgirttXLJ4QJDJ1y5qK6ZBRKAEo25dRgCrioAHmQ6E9Q8aFapsh4uZhduShC9nXJKdPANiCRgw2qQ1sAzv",
  "key15": "2sgtU4ruKYbKg9MMcwZtrwkMTpQwn8ELmixyAqSpowRKogED3jWjyWFT4GFr9Twv6NQWveMXP5zFc1arpHL2Lbxu",
  "key16": "2doqcAnEBRPQ9KyaA8Y3G79XTPjgACUQkBwBcKU15bzbHT9Jn9J5WKnteo5L8kbY1Y5fJtidX5hBdRzKJJAYmsX4",
  "key17": "4x52BqbH7oZmT7G7z6CN3yotg3Hz7ECC1a6AFpqD6to6R31wTTCa1ENrZMYi17yA45LXVnoZ8Gdwdd5WMAPXuT2i",
  "key18": "paTmeSrcNoW8Fa8Zm2j1S8kHsiogJQMxQjjuqkZr8o5RdKBZPW6DNWJ7ru2odGtaGpJubNfdt6aJ6pH5BGsfo1N",
  "key19": "4hVWzpn2xc5MRt9W8eMSiB7SYDANf4rcPc16o9bBfKnDa7iBJPrD7WfoCi7HFBFfoFLMwSNzadHvrA8E86qmgeJh",
  "key20": "3g9N4fQMNu3yGczUGEoABgov9svwZwp9QjAz3GYgiJGa3bdbRFwd9Mdh7zR7vunLgUUVoW7HVDA2jWT8Ne3kfKoc",
  "key21": "2ZKZDjz4bKUgCWnEE3DGjiSmuK6LMTUHmtXUHWmWp1rAHxKKUJJwxV4Fsk1qbK2FHS6Grni9afRHDG4uLGCz9N7A",
  "key22": "2eSmTcGgafwPHA6cdfwvyNNaJDhS2XicGRquaZqSKooYf5fy7ps8Wknt9jtxPSJzQprwkKok2ab5xNC2zV5ZeuHh",
  "key23": "4MFi78LgXxLxgzZQKy5R1pSwyCqFxN8mYdYRi7uYbYY1ceFawEB9Yh2W3fFgj7te2CtyDwzWSmz5WxKKc3uncQck",
  "key24": "32dgwkYCnHLTbAADNbMMkGT13QrYdMjStYibUU5MyXqz3n7e6MHqXcqF2mVawpGCGCa284yFwvP6dCWA72obLdqb",
  "key25": "d8nHxWBrcqEviCfV3Cys9YqSAPZQb6HHsJpZWwb93avbsxytjmjhuUGjzxASRzsXDhxQek43Kq4v8PqYYTTB9TL",
  "key26": "4XAmpuo2XGfQ3PAzhpoRuGcpyTQMRhbbRcGSFzSNZee8v5NdZx1GrZLvowiKk4RvUeitdCwNgSuW4QcNjeWT5rwp",
  "key27": "2S2tjaukeMgmVP8qH33r2e1vhHxFpT9tdcdDNDEzxiPyptrq5UrwcvvTKGhNtQmqHKFHutgFUNSSjpNXsPwsJp5E",
  "key28": "5CBdtuYhcD6bXSuo1fAihaBWxicUgTUd4YXKwRQAG2Mm16wW1nu4GKnaEwUqknK4P1jZdGMc7hnuDtjhtq4gQmoF",
  "key29": "3BtYFaPQENToBrGUSE9XsRzupMS6RGpX7cwpzvQw9sFa3H4vZMg5LkkAyuqUEWizbxXWp8cSiUmvoz36p5sut5xD",
  "key30": "g8DEejFMhgbLeKSBpk7mDLLGc4Nm9ALGsJ5nUZkDFShNWHmZ6aTCYw4eYYBxCTtxXJK3ceAWVgL5tZRXMG3yttL",
  "key31": "61qRmvCXtcURngEWwBfbhJMXvuQboMdZUxEDGVjkVubsUVDkKc3C1pjkUhoJCANsLF666pUDb7sM72XpGAiDbP53",
  "key32": "2AGnZ7tMm9LWtYbsouZ6SmV8NNi2fGNRNjeMTa2DDq2c9bSyXQ1DvhVMwtEunSDy1yja4NqkeUTniz7hjBRiWzN5",
  "key33": "5W5mKD6y8R4B5BKLWyybvMWoWnkuA1qd3V66fsF7KdYB3E5a14zkWjcvkMDzbaGbuJ7A6qdvgRHnZbXd4zoAqnf2",
  "key34": "4hrfzcuJwoRMDCSV5quXfdzqa6RDFrqxf7ujMgqvHTXWSoFzgcPfHZWtUSiyLeMyfJAxDBN6eVTBD1PTRLjULYud",
  "key35": "2p5U4VnBUmiYzRBBfWBzD5F8qCVrDw8mojHVbtKi83q6q2B4WR8v57zXioaHqEF1e34sksR7YJukaeL47GE6ELRQ",
  "key36": "35CqHfcMzTXoTChMGWMvVdkjQmWUUWzC9mWYRUYMufzK2vwVdUYpH8uHg85piPoB3qQU5j3pBxEzT1SQNfQfv8vo",
  "key37": "587FizjjcnGBmaLRfeWH5QDyQ4CoYsTX9PZTRfYjycxDeF5P2S9jLX5mFVxUYuDxs5XoqjGqW66MvWqxiqstGxYg"
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
