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
    "ZiXQfJRN9nLcAF9Zq3GKiG5pip8CbT8oqZx9D6Y4yPiDd9M6ibFqHYwFYnukHefpahqKqtpWyN3SNNcuFTxREYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkYKpdB3kAhq1ksn4ZN2krB9TPitaNHRmUFWj1TZAzTfthvmGJ2HCUzyEX1aZZM9ctQ9TyDkbBUDGcuRDYwX59N",
  "key1": "4DZLP6SAFkr4yBgDcu2js7Lg2b82nHFwsAfmAMPSvzRuKWNRLHLgSXwuc55mbdHAo1zarVq1E1F3qV3v75emuQDn",
  "key2": "3ugN8uA2TLxNFYSGNEkSacgX7KTLw6jjerPcAaUGo1AFKdwDFzYbTNQ7L55gi8nqMCPQyeEK2QktdHXoyD8KwJpd",
  "key3": "5gFa5hKoWfzfyGJWM1A9dm9JLgVN9cDj6VVLM3B71gnX81TTq4pjTTy6odZv89SsEDXdawkDhyiJ89KDwDr7x3F8",
  "key4": "5uf1mzRN4Wat6XBJC8qJMENibpXcij5MK1pv8TaLbpmEY7CEKRygouf8moUTMgpk8mSh39Ne7KfqbYxsknk3EpHh",
  "key5": "45Mougpn9cfe6Yvvxd62HnJ8wwW1V3Y3RnuwbokyPiANpSMaFXPSZA4CorqDT37TzqW8JgeKBdHcHWGJmsD6UNq1",
  "key6": "D23QkKAJn3Xiu3cBYnbGCHLSTVvDBNZgWSzoYuXq6b3nJkzvn9oSuWyZhSZf5AbdyZLmZi72pdxDD8SUoZ9hQAi",
  "key7": "5YWY1z4ZT1gfwZMdbMP9KgYR77co4fxqgr5FFZSCfKjrH8byEpHJsoPRC74ACU1BAFbTDvuZe6GqDdTbDea7H98w",
  "key8": "3JtM74TpusWL3uAoJpss3MfHZrVDLjS3dDoV6nMtMDPUS1LamGffhRdDK7xBfsTydQhzBXkZGzgV85zJh3WTPqhD",
  "key9": "4ZiH9rtpPm35aqRMRVYxaBCFXvQpevotZ7c5F7De4oUQXcfRfCq1pNkKYzfy5vgzioPnaYCQAZMMdyEbX8DcvoHe",
  "key10": "nPkVwPC4h16NdYnxsopsatzRJDhtxqprjjSsH3xcRzBkbmE3DTn4zHaFS8m966BNQHCtE5siHtKAQvcxyGtoiGt",
  "key11": "5GvYqpnKVozVqEGYXF7qPCXK5eGi3P6vx3LQcVkiP6f1jnycU8RuaWAquZpXuWDr7mMabAkpfvF8ahZjFTXHcham",
  "key12": "5qtkaBgyZs9s8R6QfAKG31PUFtarCzHHoC4uJWEiZmBhRmgw3SviENHzLJoFfk8nCqmqYdP3vSrA2VqT8vsyN17J",
  "key13": "4qL28ANmF2nav8TC92NPn1Abjddycw3L1avoSsY924x3b6M2kuNnCjxCKFtELRgonXzp12nic4EZDA37dh4ZZCXM",
  "key14": "3DeFNMFauQ3941RRVSb1iR3enF8fogm4qZBm4NujF1QANCKJWPyX18xgbcvwSECrE2UwTMHxorJsWQdFguQGB1nv",
  "key15": "3htDUWpf4m9eZ8HVAz9ZRF1MpANt7w3bZozjZYSTw5vTHFDkSnW4RP1Dx9QvCGGh7ov8rrDghMiguFULg6rRno6v",
  "key16": "3mHZywbfeZ1U7dNBK92i7VTihuADuZ6fqMCUcBKntHTve5677a82xgMTpVPiWcuFyhrveheWD6jsgJDfGDSAFK32",
  "key17": "5biKZH892QmZc9EpMUAPx33VAHAwCJBvEG8XdEmNjnAqYZwb3L2wEJPRUtNGipHx3j356KNTFG95WSKD8p9ir5oD",
  "key18": "2NTDV5GZMgVf7Yw4ZBcT7QRapYpP71dU3MutbQS1HS3My7ZjNjrYYz1HPZAw9uoxFHCFWDqNgdqxgZLw3m9SihBt",
  "key19": "5QTYX5c5ECpcz3xgkUnyXoAz6oYazwBMieuvugYfqBKXqHsM565xc5HVntX1ygep38KvRM9bAqyY94qjr8EccUP",
  "key20": "5PVT5VQoVPMHy5qcmjKTmG7W7NE3zzjsvKxi5fzxtS1K4mEX4pNm5sibxT8j4v3yqeFoRhmXosPvJhuzdw4xyRSa",
  "key21": "3UaNoiqqSPdPzWD7h2PPmVGNmhtuKBFjSjByry34633TMmyi2MWhaToUGT5c7JcWsE37vi2gQn5cvAm6YKdbukmd",
  "key22": "CEnUtJFviYim6D8sELz4KfnCWrvGfxTnc6VqPNuAJF9ACmpTtTcPGB4MFHj8mkawfhjXsRLS2uABpsSXeYS6PDB",
  "key23": "4T85mkioUjgwMRft1P9mRBT5sNMa67zzW8BuXDLRAyoNtABB7mKZm4uEyzTc7KkSzWExh1M2g96C9rCTkj8jZS22",
  "key24": "5nXJX8FtbyTYgzr87eNYpaKxzxGh2RFVxde4XduVKVGSkgmXbbWAif4etBGpu9njk4mLQX5YPnZaByyEpLBciqvV",
  "key25": "5bsUuqQauTV6Qog7ce2Y2g8G95RBuESqKiUQCQc9cUfUuiqr6NhGxLMB58zAgLVLNZksaaZ5c6JdYFYKLX6K8iKw",
  "key26": "mSkX1n7jEn184B1XXs5ycvVLsDBEm9vuUJRHGkQT6TNvbzfn3C44PJkpWVJUFQ2pxvFDYe8WndJGpM5iKx4dFc8"
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
