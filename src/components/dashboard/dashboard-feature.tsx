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
    "3grtMEHWTePzF4ziGFtiF6Ydb4nrEXzxN2yAoZwz4RXzc5Anp5tWWKNPVBxSQzxpu6yzr4DPc93Qbu78tfV1onZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GoHcVWRw3doWerVMfJNJGorx6JGC1Y7okrgCzmG78hCr3t4eJm9NkH26qTg8N6nbFpNkL4QyZNDjFfT1p6GFCT",
  "key1": "7rrpv9o5ma3FHwGXhZzpF3z7ouixrVfHnBiyJjFFKwYAoF9LPVBC8uur2ff9wyyX6QukyMwyDsdDF696DFV2tto",
  "key2": "3fmNJRyNat1SRQaiLsG2VGhHF7XxKxhDLr6Uj3cixNF9zrRTdZbf9Kn9HUseAqMYkYQKAoQKnSYwabichQGit5v7",
  "key3": "RXL2H2sUtfTCFVzFJY9EennAYF53KVbgYDrGFTeLV76uAT8c8fKSLC54krDr4bwnhFkM3XTkCMjhJUYZ8gn9fnW",
  "key4": "4QmFfMHQg4vCZWiFuEHvfCwQg3yy28gBaMdjyqDkFhKBKuudwjVskYGr6VACEhdebR5cqePh8QpaCeHTye8Mz7FF",
  "key5": "NvAc9TCPiPByLy1abFGi3CTAEhRC87hqMRnUxHwm6SL1J1wDxVcZcJkjNhTwFtxGfSgi2m6b8BTPSMctQj1E85Z",
  "key6": "3v5VpzKfUm65AgUMAupDAQFdEjUd8gzbm8HRob9AgP5VePMUmAMVExcSo92JibtpXG8shE6AuEc4dwZgiWPr8E8J",
  "key7": "2P8gXJ2E8VEcGmhXiQC99pojQ2QduKFrgYN5iinwbWwcMBDeMPjWmEjbrsFB5osHz9AXWX4yzBAKYyw9jMt4VjkJ",
  "key8": "33JqAZVHCFLPQfMkn1WZbrrGtCfv6cLgQnKsMT8zYcGwLuTyDL2Bz5ijLG1kd3t26UBVsXW5V4AYzRCb7dsKdKcA",
  "key9": "5WPa3uxehaQUykkwGvd4kNVEeeRaTw6yd3udtTXHtcRV9DoCgSwMpSRyAwdnsthH5DSrKCymn7ftQ8oFYJt3pUV2",
  "key10": "36sRBbN8Y1KXsbz13fbzYTmsm3Uc32qzynRXokCCyh1cxCLhEaGmN7ZrxvY1auwNmxY4KB8KLFPh8BANuruLsunB",
  "key11": "5DPyutYAaRkX4gHxgVPg4uCZsiTT9Q8a7DPsb7zBwvq23FxUB1pNLbvEYCDrp97aU37A3yY4m2EpzgFs5RaGgcbY",
  "key12": "5mEtSMgNVMTWXqwTpwpDRtPpuf9XsvWZvJmzevsZjy7N8Tx1L5cSq9eLfBfgWrKZAdXZtp5u4EWYf7PFmdj7bqvA",
  "key13": "63rnVDNdwDwh8R94BEmgYXWbgMnAHDNGCCS2GgbeirghF6VTd7fjH4sG6652u8d4ZGzXBjrJLpTcxDArEpjkAWtD",
  "key14": "3WTQA9U5yKx82BPeEE9fKMMPUNnnnsJfey423JSAmVVoeGQFDfybNtdNxfYhcdGhAdTjh7NQzE6UkKfwRvDFi1xr",
  "key15": "3FGimc62saFwPKB2bymf2WhYzSpf3ks9yE5kWJ28FPj9YVxvURBQXuY64xLQNuDJfShJYJ1AHqRn6CX9Udn4iXsv",
  "key16": "2QNm35hxXzZUE76LdsRS6YCcynKybEVjqLgfs3r7CU5mYcrHUpdrjJpiFCLuTn9o1k9wFMFqAbrHKPzZ2HP6KtvY",
  "key17": "ipKQENhLtwPb7Rb4iBSBZXYbU2Y1qAarxLxEhj9CrLQpoYNTgXVa2NUjo2kSJKcJsggLF3Jm7sE2JvcAKi69bvT",
  "key18": "ZBHrNjqZ23yhEojxuxQ2XQfbB7eRruEg5bBQERDbyxS3sX494zYrFFKaxFW9snK3WNUXLbDR2DXktEGJn7Z4dFT",
  "key19": "2Lr9ZjLDSJQwU14Tz7VixftTZbC4FLsc3a8V34iuPpsnTFkgVuiLf973fvoyKMP3U2gC7Cf6MACbWSacfLp1Ppmw",
  "key20": "5dmFwCzDrpbiay5db6czSBeubmpcT3iQEg1Bmr7C7AGHp4T8VPxhb1DLzxQjJgMst8TzUMDPrxBJeMNM5v91iKN",
  "key21": "2aHHzwkaPrLtCUDXzHdRpKnys2q53uZ4CyqW7Raf7mv8k8NPzd78uwxDHbjMN4pwxxmwdfPfzBC6g8ZsNT8tmaEy",
  "key22": "4qrfivT8wXLPwqzNMbkeB7Q92ViS3S8KtpVMMbNUKci1wHEYStdoX7KxCa5RbBSzWT9ffAKGfjbqLLzdedvDrLdt",
  "key23": "ukDSbG7iMLkbR3rL74oMSvVUifbeN7FEyfqRVm1iBycBkw8o5DsEK5aHk5R9msRocbdzt8CeuCKimSenwizKRTW",
  "key24": "2t4crCEcQUDe44DESsAzbqrq8UL3jsrt7XW8ohuiEkqzsRyhkSMSfQp1wxY3S62RqwLEFmVSRdthSz6ATdLbXJzB",
  "key25": "41EXuExob51SpXWaJPipgC4uxoiPZ2cMBZh4WHB3rjpdPsZEQZLAgiCqi84AXkpiAKamYhDBDVERJa2GA9A6S2p7",
  "key26": "4SeraMsaJbRAY5cYuysNjy3qZ4X5DzW5uwHW7zdbBdtEduqRXsXD8oW26kdsDK6iAriSoY32QQnztk6QxvVguuse",
  "key27": "3hzvqpdFtPefFG3ZCSzw6h683BPP3GZ6BNYvWTZDU39xpCifVLTQmKZNNMGQ5rWM9G5WLN6vLejYXqfpjHyLCKrc",
  "key28": "2jkREeuVgFdCjq597zUhQ4SDM269BVKu2bQ9pZ6oPiwoNkTT5rq9hVJynVbM5Nys3j1xA8puWq5U3mgrFUMw67aW",
  "key29": "5SHWGNFGTJ4MpZGF8196KHgy2NBPrsPEDG4MdF1D9UhbFz4kQxzcNW3J6SqcUKnPKqZVSLHSwb5M8rvtARWVGCHN",
  "key30": "24ZKy8vC1KzA1yMbFVHufZX3md7it1KrH9cLpCdMQg3ioR8Giqfg2PtoULkrxCAdE2iRWzVzUjk4jDwXkkmvV7nu"
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
