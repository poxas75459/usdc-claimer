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
    "5DWDwzEBk3jz76tsgMCPmya91ZmuitSTwL9b9TJfxrYbfKzUu1PQFL3PwCEGFURVjHW7unESpaXEkpBUgBcU2LSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUXqE3qbDvG63nXvDXTQDhTrn9XMraPVXtLT3T4vr6nTi7dK7NwgaXWeoWdj86MoTbCk4UVrpMy5xYVo7P2ENbz",
  "key1": "2udpD3AXqeCoFS47muaFq34SRKvqMfvPbZgoin81SMzdnq2ZWUhEsuvNXsr6MaBXNLkZzQTkfb89RfSQRXzuuFbs",
  "key2": "4rawhUSFkibdfj2WjLVJFCpimTq5G7wKDvnsp7cAmcYYFGpd6e3vRTQGQTnrEjFovWWyh27SsXbqLrRfAQSWAqfh",
  "key3": "4fuevV717xXxd8wskKqd86T7C8tomWaGYcVZLmRA8ajhbWh6mkoc6gU2VESYB98CGNscZvUw4YdNVhXwchvKyyC6",
  "key4": "3evHzeBhyt35JeEpn7wjKRBnpjwnjsNjHridGhNo8qtMFBiWhYofcAMeBHVp3BPjSSgYmfF4f3Rcae1ZirkTTVAV",
  "key5": "3DVbpuMWVQHtFYz2UM5uFmaQ6idcoXhfTKHvQrxVTKdGxZ8XaT842DZWgxFZ8dzAyfij24xzN3BvWwRK6nS9YfMw",
  "key6": "3xnH3apzeDJwjsJQRAPuqqPFt6hWQpD7tMkUS68FTtz72CLiaheog6zuvcSvSB5oEF2ka3fbeb9ejT4JXmWxnHKX",
  "key7": "49VSWBnr72NJYbHfe5PCrDCL2j2wTr3jDB7ECwECQuWHwfYdrwMMBCt8KFxQYhftMkRPSkAqKriCQddjMyTNzsN5",
  "key8": "2UrtzNtzUjTcXNCAriUEB6UVoTXoxKpghWEUg1PQrzKMLVjyGzZSryrPSDQCRRGiAdNKgxnPkMg9NvvtUCjt3Lej",
  "key9": "3fY7BAgTkWjEhpTdJzkjXy6Zg6i8r6sos4io1io1BVYY8c3oRg33fXJ5JjAjHUHNBfgffS5Qavfbng51KNGKCShK",
  "key10": "4cP4c8VXaQreqZbfEvYwKhKkurDkdd1DpbkhNvSzpGy1NeGgwYmpVSBuDrZFugM5LpGMRSC37ofpwQ1TyTKsuRiz",
  "key11": "4oLxic6s6xJ48VUTXtX9BxsqeYnSAeqTMj5E18fnKreQDiVPq4sibYtTervdYFCrAAEdk69Xnb2F3aNyQCN9joJX",
  "key12": "4DewHFTJJny7CMkX6v5j263VTVyUdGgjVpMS1G1GmuoHWLErhYfRFEtjVDjVc1C8p2fZYAsfeFKVR31jeu5K9vyT",
  "key13": "5LHUb1tPshEXzLfPjYJyxSEuo5Jsb58wxZ64vnMFUgvZYvvEmhdzp5sREZV6mQ5XvBDWsKbjBDm2rM9Lxff4D45a",
  "key14": "BUjawa7tLbipwCeMda1zB6RkgKFR9Urp5kbGfBt9HNg3RRjt8hovmW8qYjf3dp7qesJAnpeAc64Mxrsz4qyErJJ",
  "key15": "Mo6rA9qUtr1F9Gz8kN1jYucG7QVP4qjDWiu6Q4uxu369mSBP6x5bvDmYaLyiymoQfHuhuaWA3PZaDWHF2BX1Psz",
  "key16": "YjpdjfJaLiXz7q9yiEs9R6UCteUGiiMHRwnCdFDnqsTGdqZGmScUkk8D33SmvjvGQzQtdWADVw9vGoSgNXAQGKp",
  "key17": "4GjCiBT1CZNfCixj7hj3WE5sPKSLCXWQaQkekHRL25V4rifk9b7SKviwvBmU93xoP1sWWEaoBJpggv3zHoub496h",
  "key18": "5KMyQJWYBJAjxosDzn3ChveBoSdYxnjsNYfmHBWS19foezSvqFwUKUKorpSAzdfF4bwd2LuGn6aJEDcQdhHUUbsd",
  "key19": "52EVvvpx5bgw7MoDuX2cBJmxW6565J2jHeNSJrBxqtzktFZkHtxbFxcrUYx2zECnebUD6sYNcvVvsbXJFJrrQqHa",
  "key20": "4LoLcoo1PpBaszAytbeXvvJmjWaXUzbf6QszquivJsRQgmEqH7CLpwqQPqZcj9WuDL4VQUHhSKJKRZ3aWwzxrLpT",
  "key21": "5PP7CwXPpp1M2jakAHLBW9m4vyESPnNCHGTzLFLbagpPh5Caa74Eh343nccjFXex3VhappozBHfxKgstKAGz4ZxT",
  "key22": "3oF1QS22LDdqCWrnZrmXnJq9Hdq85anz9MuYjPN2bwjzMey3qPw8RqMb9rTrQjcYvuib9xBFhEup6VUYhEmc2HVE",
  "key23": "55ZcebUxSkA6Eo4skrMcN1Pp6CWwGV4eybCkFkVifAfcuYfTjLhZTvCMc6abJXYExxT4zDNWzsrwan8yURx4JXrN",
  "key24": "3pzX6UaVJZ5ZLAEr9fao2DHraah3Db8eJVdDpmbq35FjcSNYvpYBufCR8b21E1uK54uyXauFhs1wm4ZSdCBynkkb",
  "key25": "5SXKRgsa8soCp18QqHdtmXFnBiNLvUQUWHfx64SuuJAfKKmq6e9JmvUTPMTnocV53HXx712HaBDEsqF42w6vQ1ix",
  "key26": "gPmAvEC9gojfVsN8RTLx3m7wzJsoEvpxwnaDEH5EFRJNpNPBSgMQYqTY8WyTkwPi4Qu1HLuMSj6nDcUFVyDJo5E",
  "key27": "2c4M1xznJhHTFjMCKTPEgd9fE8N9Jj7vAUUx75a1ZKBQstR5wBbDqCGB6QtU4Cq8m3E6UMYRLZYdA86XDvHZQWhb",
  "key28": "4A4DLSMMzUbxdC8ogZve2g5sLEWxxxtYdQ4LqSwCv41K33MiETjCVGcQ5YaTaPFY26xjyqLiFuFCmv6QoWh38S3r",
  "key29": "34HRyYtTdsL3x1JRcg1pw5pP23eSRqJQaskD8WmyRjtsMUcobjj11Qain3JfM5NcxVkNZZvAkm6EzwRVyx6RKps7"
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
