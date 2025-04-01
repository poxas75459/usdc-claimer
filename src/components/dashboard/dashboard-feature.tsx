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
    "3WhuzPT1ivBRZU2GJ9xVNdDNKBZkZWgJSFPmEbSAtZLKFQ98c8wvGSNegkfWjD6HEeDsJeEb9EtLAg2xxAE3wE17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SvNrbnvn7tNCc1X4XdwA3MD5KDVYqTe8gCfj5w9F14FcXiynbb2mCg8P2bbJjMpdXPAVKrWL8HwDTrxLXAJod2W",
  "key1": "F8pFtnqdVsVPNgTAYMDrQi7e7dQhjC4z8rBwKByNobbN7bum5QPvsix8RBTpFofSZN4KpiymFLVggyszGxZTJa4",
  "key2": "5gyAZcJLCn6t7jaJhARfbVohU1fPksU4VasaiP6CQG2BjnvHbbH2zDeAvfaZ2GcGGnyJ5epefeKRSHKxVayiDyDR",
  "key3": "2LXoh94ijgRfuEdSgPSP5GcZYZTXVQ1m5dSz72XUYZcuxTxPt1WWuKXi4F5STGiCFovrmJwmApzNZknjQ6QTctQQ",
  "key4": "5CrrhQxXnQajpUC1rJ9BqT2m9X5wpgyNW714erN77uSGxyNteMThDhnDXx4KrqEjTUKakCE5P2KAGA79tBp2AB5d",
  "key5": "scUU9nSbqtJKcKhkH5oPtugBdYJV1siz8TZ2ULj9vGHv6Ea6vswLjdvXUjtCNPk4xVmQoKVkTZ76ZUy78Anww7o",
  "key6": "2j9TcygeHs6VD86hr4TpPr67kFqF8WPBJT8RRfg3nUJgxhYMpYhLEzwAFv3KAU8Amz5FNibcEG7mBZQF314Vt6Sp",
  "key7": "5KW1ycw2p6ukVWCddZCvxr1UhSkAWBjRU5tvKV7hSZfu8aRcMM2irzaavpA3yhULuCfhyYHcMSV6eWeQmmDTfgz1",
  "key8": "3DtfBXa9aqVcU84SW4t6dNKGRpoywWFKbVu2u7NAKZVWgkf4LESmYfWz6rHYzaM21bFVZR3KwAnpMqfCzjyMrc4T",
  "key9": "5LUp2uFnA1v6H4hwBadEELnt9kUp9sX1vp6qrKXVqsK7Sv9bE1xDBxGw2LCU2QVFimxUhbaSzYdpqcf3XDswZDbx",
  "key10": "5X2q62swBrWKqBL2xdUfTPktKWtgNg2GUQQBruEfa2Bq4GKDgqJDbFCUBSZ4hq5BSAxgG3rgH3eg4L9oFUiNSBzz",
  "key11": "3f6CJzVLHUbKf8iQpVNmMtP9VEtT7Drzzsa2MpzbKQgvqqMHZdZRCj5Ej1WncNduEsppdEdbQ1LUdD4vLeVhTw5j",
  "key12": "4adsT5g2mQE6LUjuWt62RDhHicSASupxa7cmXwDDA7BYApzuGgqgMZouXR5aLqVLRw3SEykd85GzmGe3JcoCfgGV",
  "key13": "31bNPfSVKKcGWMPRkS2cFrGiahWVFVwwiCLVz3e1AmEm5dtyv83euBmfZ7KxBV6KEaqXwKFjShSXQqkB86sWmeqe",
  "key14": "3rZ2n3VQEyFxf5CBmJcEWmyqvM2fnJaXRgwA8FvRoLgG4HyZaGW8ErPFSadgrECnh2zJjzQevkjntFYGAepUsEDp",
  "key15": "452HR1PUFxrL3rA6rHJisc83sJeSbbBiysBZFHjcrmiu6obWTdhQDackurhPgh3zpkdkFJxZpNPXFF2Kf9vrMN5C",
  "key16": "2t4i32UTXeGjg3Qhb5nkRsagdjip5xjdn9wLjbBtT5GyYuYTTVfqDdYcAhSw7VQsmbxAiqWNp7gJmtVMphYsSdCg",
  "key17": "41BrULuSVXmyojhtsaDX1BLjdAKKGWZJdv12dPq6etaZsWmrZwKAkytfdGaknd5XzJTVxmMZiXYX6EMTBY5Bxzcv",
  "key18": "2cgaJC4vurE9PFTdHJahz9aEXYmyeE2LTZVaBY8czt7RjtcwYgFJ8YkD2rMW85FcSoRWuPWy3aGnDoFNaCXkwMVC",
  "key19": "arYLNo7gZbbkJnBSp5m8byGpFYKiKFRpEF7kFHFX5uiEmk7G71NdhGcA3VErnnHoNU2ehn4U3jV9bPm4STd4u6L",
  "key20": "2ueNeoCcE6iEhDLWoy6Ai4x99MjUcKzkbDnWd5wELvMkUQZboSeYb87f3GuDDLmp6jHY6RoGP2h4f9WtEiozHK6o",
  "key21": "3B9SYgXB5d82Nuc67KcuXpr7zVPFkBx8LZ7z7krkjbaooqudwoxffczrgZPVHeRBgQ1814sWCsrAyY64kqv8dnG6",
  "key22": "4bTX6JzK96YfykaYtjvZKCMYxqp8x2jbHeEdu2YE15a4n7tqKxWNBYv3a6T8AjRZXU5hGx3mE2baRWkuAagvMjWy",
  "key23": "28XvesBGoP5SEbNwiEqTLpXYfJA8ieWYiDBtpzUnHdpSio2v8NM3TkdM4vxnxM1oS6r9iA5RcP1tnnD9etc8BtUt",
  "key24": "2bKiye83X6HRZTi3Qa9MGna5oc9Xk3rzvnm9mHoZK5rp8KQc3ECAfnZ7zfJrkbKgRHngT61deKE3MC41vbcs9i1",
  "key25": "3vomcd8g6omNrEmaY7epii8nwXefovincpQwWDRiZRnbGTcPcDGSuCfXAcht9vksFensqqs9oK3ZtP9zBy3r9gkQ",
  "key26": "8hhcHM4m1g847Y5N6Riht8NXvMQgqeMP6nsR6QTM2qYcYnhjvS3ZtMq5LTQF9Hfphsop1utqtRCsoMhnCudTUxd",
  "key27": "2fiQ2WVgD4p9JqXpMoj7ZgBo5QHKPGjzp4URHbzcg3rFcvJQPoqDeyAsPzysozwd784B6k4UGRv75nAeoMm7LUwH"
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
