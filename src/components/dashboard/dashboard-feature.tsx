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
    "6Uhz9oFdkH1yj4jzjXjwC82ejsLCkNq9Dq27nF5qtPn4GqEVabBq18dMym4E584MVGxQYvyptGFyC29PWTZAKZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzSTTVs4AUUxV4YAvXAJ4gefmcadiZdQ9RWtewxmCyr4hXun38CoinD23bAC2AY4HDfv1kAn18rev9fTAZDhBee",
  "key1": "2FevSsNpdZ9x8wR8YkzPfLb7XmTU75BkYVBfET3zHoM824K9ZJiebvaLkHtHuzuepbLdwy83hnqx5Z5eoCTFykiP",
  "key2": "3jzsNUgCn92rtL1gykzLenZexyitcoxdfhsmk5W8UaXueFfX8DyccFHHvRgRboVznZfqFmQFbAnRRvYCnyNptTsW",
  "key3": "RboE8yu5s8HG7Z5Y6XrFrwYu72594epLoubNnxuDBNsRKeZEq1mmx3n3e2cnRd8kZBNu14N6SMkkrKnfAAvxrqT",
  "key4": "2w93PiLYqZjnHQ9Un8fhDsEhztehDuSurLwwSudWZW16yyY8MxAXxiY1uY3PskYW9CRP7fcRB5CTiiSPcZr4gdYF",
  "key5": "3D5bkXNUGEykp2fwbaiQtynQq8cFqUKGP7rUpRVRvU4B8mSAPHu8zMfdnxBx36EW8H1KfKCJmor657umBXns5obW",
  "key6": "rnxGbgXNd6LiQ7fyREFhRV2DPSGCztcs3SxTzDiweThA6hm7MJp2FrNU8t2rgF6j5BKP4ycyqucUhGZCXkJoyQo",
  "key7": "3KA1QYzsuP7nf2UNEQLMH88nenPHE3c6gNa3QVo7hymB83BT6nDd7dTmHSSULnFkzrAQEfyrtTAYYQaYVtSVs7ji",
  "key8": "iV6wyx6ZUYVnwsYt2aJ27Go6j2wnRb9tYaWDNSKZFD5HUPWqpbW6HdMtbyC6ukq6BChQTQpdVBZoNEMhhzvZm5F",
  "key9": "37KBq6V2Agvi6vGra1HdJuNvgS9GfFAHq4JCHFngtcx46NNbxsne4nYV8hR6PjesuAsu33PPXwqfH1BMv75A9muy",
  "key10": "5Z35oP8MSnRCp7TAR8PcX4YXfpSjq2bKoQ6iyCbzTBPjAhEh6CJv2dxoiQXdKRfH1HbJuowsBJCpdffh4mWiqsoW",
  "key11": "3jHxE3ByWT8fRC7MwSNCTc6zUUpH8n8eRuHV8tRySEpDg19HPmKhnt7zPh6kZhMsf3uFRryAY7t1whku7VgJ9Hav",
  "key12": "2ph4dv6qyEXYuU5MeVUnT2PbrjuefSkTHD8b2M6brYTCDVaHSkx1mdXdLy1KyLiopnzDg3xFbphSBNZdWw4ewxre",
  "key13": "yQcDHQDGS8Bs4uSujCdrAHFrqRr1JKeBBe2GPT6MA3bs4VZoqYrYQTbs7DPZ446oD1uMtJXXdQti8fmwvzfqpC4",
  "key14": "4gw1iC66RHdKqjcDhMbF9BcRwn1MQibgabiGcu2LpDL6RfrFU1G4oxSQfTe13FJi1QL8V9ghAAxozz7E3JcoBs1E",
  "key15": "2RzDJ2yeVayEbUheGzyxE5yzNxGFWv3L4gteMCG4UbvqNHYxX8GmY5Uq7Zheqruh9wSSKuNHFYA9PykdXq64SDPH",
  "key16": "36eVDVwqZPLwLNbK4gR57zGkpZqyxHcNHKxk2sRibyuaX3CkJBvMnhBdbkG4YNDTU7rNrBjGMxJAyVXPZJzBjHYM",
  "key17": "kT8ZvX1zuGcq4qsBtxv1Y2K1xGWfQR6cbuG1Ab1uM83xpDGNzkUTivLyKAZxKdydyCsPWwETgyLghgtcdrGuh8h",
  "key18": "2mEC2VbP6MCeKkrKKMZfc4kqdLmcxDv8GoN7Fmbo8C1KY2XZrB3WGFNV3fNhzK5Vxz3zs8B4iVxRmGisDHVHFskV",
  "key19": "3YAyVn7HGJospWaDXyRdkWPDWcyB7Ed5gpuZfsbZrviyWuWvAq4EvBe5mNSjXVxupyfSo58RrgGbyEyocoMHVHsv",
  "key20": "2zcJbkaWcUcfTCE5yUaJ4QhPkyQ9SBvh8AVh19fTfJdLueFj7Uq4DMW9Uop91TLMifoyzCAzyWxV51t4EPjFwKgL",
  "key21": "4wrTmZzxwP9E9FYwc8NFLyFZVFECvrkuaj6B9uNqWZgZ2sAqcdEcP6wwq4vqzDbmr9L8GB1GUTy3ft2ATpgpoGyr",
  "key22": "4KzbLQ6FtZ7n3jgMvkBcd7jzHvgKguoQ7mf119JnRHkmveL2egncJK3SPAbgYT8W1oCa4rs5KXMffz5qxZZ7pHYt",
  "key23": "353ABgBP3LH5BqssnnGYNCgMfXPFsvpqy8VyZ3kmjSLJaXr6GctdewX3Hahzr5GTd4m1BLVjSyJbFmfn3hTnaf5U",
  "key24": "3SxeYS5NMb91hNBPvDnhW8BKWEngnNRKTveDN45Uz4bgnmJfmWeu8EczuZw5aWYjWQBbyMB81AWoZ19kUzkGnoMt",
  "key25": "QRhjMnc6VNF4xJct1SHjk5YofcPhHUcSkuhb5jfxULw2psEwebpgSs5d6EKHW7pVNu3sUUkaPANvT4qUkPiU8ox",
  "key26": "2RcvDxP495p5H2WUiFoweAKHprhPvK7icJ7mgjMzTg63ea7ABwkpgxL2j71YNnWa7fSuZzBEKwzetx3gCEFaccfd",
  "key27": "S5utnvGYvYn12erzdwiKtGJDnLYBUKVBEVVZQiBbyrFi9qUGscZEXybyU8qKfjTLbw8up4vxLCNWpkAPzqB2YH7",
  "key28": "2zEZtxmRFtZdTMN2CbdrnBVfnqUCR4fv4sDihLV5RMRzPSniLwxoKpPhXZMo3cfdyJMvG4PTM3b5pN7BkNwAVgVi",
  "key29": "UHQyfatvEFxszWtQA9EEz7sYBQ5wP4VJiHs7TmaH2enn4dzVvv2N8z318P4YnUBi4HtBWu2La939JWuCbpGXypG",
  "key30": "4zruNfWDVYBPthZJhjJvSyyseaogihe86Y6Z897WTm8dANN7x7uDsasKg9cFKiKtmsgGkaLghpvRGSP32faTg9c7"
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
