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
    "3BUjx423U5uZgvcmDFYvNp9Q2tA8ApU9cbeH54Me5sMYx7mqpdS73hGKLVR6jNMLDxz6bhqrzV4co3SQAwYJoyy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLt9rcTLp87MtRxcVEqJZv3HyPb9rWJKj3BKK1XanEdouj8NuBRaVHd3YTESgu1TMRjxFHVBdQYK9aJXfGbGvk6",
  "key1": "3WcrvyixyWfyUVPUqcgXyHaCGJStuU37Jx96WHo3Lo41TqnHUJJ5QHuKfNhjHEGYnoRyBZHuEf1HwJDPmH9bNbLR",
  "key2": "4aGQqYV7GgMqh6T68hcLbZ7CNvnh3GKks7ctbhsrKesvx3ixdgPzyN3jBjWbfPfdxzsVeNHWpixNCx7NPRf2P8AW",
  "key3": "3wmMQafHyzyUjhf1G7UGyqMi4cyDErasWXyWMstQZQK6vS9e57rcxCGAX66DmwBxLuzP13VRSeo6XY6cwsYC5H9d",
  "key4": "2fhZxNT1hdPveGeLAm8DKMAaq1JotXge6XD6ra55mRw8LNcs4W91r7amniznqqsbSWnPDU1PWDQULHQq4nmGzRsK",
  "key5": "5eoDGRd7Janu58CV2UBwiFGGF9g6bDtjZH6At5vmSRvoqqt9opXiDg1GuMbsowDEGX3VeuqZiG8R1UMTHZDmRqPa",
  "key6": "56BzfsqwnR8At8E5tgpyD2eFGG9yvNLWGyongu18EJvm9ixP6iWGjccCDsyQo997c1rrmnahFKRk6YGjLRaHaimJ",
  "key7": "4TQXQmhayVkHgKjDeRT7cufhn5przLPy9MrRvf7YLL9WHHhhgisfrHZ5pfX7tyGA1JtCczF5VnYoD3vkXB5FoM4q",
  "key8": "2yAwYr9CMkSuKdecDc4pC2Z8wRbZDgb5fK5hihtj6vzmLXHdWF8RNCsMcxv3XdWyWvzLvNa6E4sLpibMoBjHJMB8",
  "key9": "3kixhA6pX4PGc4AEA3BBP938V9NghNXTL7qXC5gh6jF3zUZ4GiLY3gRBkikr1K6ccCB1mpC16cU48iGK25fpRaff",
  "key10": "4yUNHSHJAV1pQbkg7WMRZ4QLmY5rvbNDBq7MrUndiQa2Rm5tCTG31wB5HruefUwVDcYzUpQazaAMeKQpXLTEW1JG",
  "key11": "3mau7FciQkFER6rLYozRqXfvmQXRqBoeeZGnroGoMSC6ApierNV47dycF3tSvRD3k1QJwwK1pKAYbsNZoZEJL5Aa",
  "key12": "4yRtn1XZz7KefDf6UdZunQWDE3mwuCLwDjvNnY5Em5n2uAYBB5EsqwkbxEeMaJX2PpDFpHGTitVnzWJQcucHv1F1",
  "key13": "wZ4FwM6KeEv83gkBz9dnuCeY539UzCDs1ggvfEgLrne37wwk3sY1e4aeJbsHgogccUKjXsLvcakq8KeBeUm8Tz1",
  "key14": "5LdXhQnLb61H4ZyJu4sAwgXEHgvsUXAh2DbBYp283JLXbgwQKP8ccRJiNuLrkVtDFUgmj5cs8Nsim4PBswiK7hCB",
  "key15": "2X8VNvYbgho6B4hsMSYzS2LGyrs1HusQ2hK2n4Yz5y8fvFna5f72g5a2i1Bm9ScW3f5hQHq4yRkwLAZEoqGCVQyh",
  "key16": "eAk8yoTLtJDfVBYJ9r62SjmTUSXfjsnsvfLjDu5MxWPzfu1oPJmQHwd4SztQeFo9oTMjfgNPxWHxSTtVXX1QT7X",
  "key17": "FRJBbAnMSjZEzh87Wj3bo1aKYaJxqvBgMXi9XkTghnS6SuxsZNk8xvm71h95rJrWCvCttfKEVg2SLTTBbLKdiaq",
  "key18": "478B8knh8j6BmQioz7fsmBjYUiUXDXZ4ow1qBETa9WtDL5h7RjTN3Uewyk3i8x3tzuCd3s3EGEhXBZ1xaNudAMry",
  "key19": "5vwK8Q9QaHWb7qP9LXWh27ZdhAt1nJxbbg2ARrSNkhdb9LU576rgK742SqYDN9QeAPRtMkWaCVPoDvwZkk12dbi1",
  "key20": "5WrqYKLv6seXaSWYEvmBrGSdSXxNctjB284oPYRMkb1RFE6NDK1yiAfUicZeZurc3ghYUXhYuA4eD6xM2sYZou1k",
  "key21": "5cy5GuJYTfGq6UCk7EqhRaT5cx4KexZ1VZ86iAhWfHjTskytfpvQU8ZA3em6kPeYgKwvjjK2VJfzKw8hsiTzDpDB",
  "key22": "39vNS3YHy4wYnJHeVqaadmq4WsG7PfaNFLmaXiV9p5riAFnskZSPHLqzxMrTNfRbRWgj8vXKctH3ahsBZ1oTeY9T",
  "key23": "48ma6FwmyW3Dn7UzfM6J3585JJrTDBEy1uHCgXmLYeU2tQWkjwYr9D5MFtALMyHcEQWSwotAxRALzQB4rAcLHF6a",
  "key24": "n9PK9sVKnWv5xpofcCNf4mxxjkhfzVBRttWMm1FhCLdmKnn3twdWco2rThrJvin3ocNZJHEW5FZzBwKKVBN47go"
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
