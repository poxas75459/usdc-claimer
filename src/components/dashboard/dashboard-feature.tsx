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
    "3917qU5PSsTsyzDZv3kgLCXCKrpw633bAg68qMyZXfWTAHRD6PFphwsHKsb3LgyM9PLCEeLFiYW2ZebiQ5Z33Cdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNAA6ufHohp1rJW8MQFPXY55LSHwmsWLoxG7kqbQJiT1T5FQiuRN9taZhQdoAkztS89GEz6L6rU51whLaCVovF1",
  "key1": "fv461PeYvFHsGu19TNxPFj6mWRMqiHZSYrGgAeCWi68iVyoiFDGCvktHKiuAst5eANEvAdB1nh32u84kp8L8p9X",
  "key2": "48woXR25q6Kx5DHorTURWdCwAm6ZqTV33NJy78cc2uzfkb6FVA2ggC3mGUduNysndSXtguAYCGewG4dLMkWxtoR4",
  "key3": "5hF8s33rmZck9b3o8Hwnv4G9PPKWWiGE1B4HJvLWppN4tKSDqSoHYjkGDjVzRvzgT2XRF7xEdzDRbHDm7NYc3yq7",
  "key4": "MJovCkxs1MpUFsxRpcumKHfjJhuHE6fg9MsEhjmbKUFwVMpjEdGGP6ELGzsLAm9vU15NpCBcuohb7vaZW4m8ADx",
  "key5": "268vEFDasjaiQP2UHUKoBi48YanMzRXV2SDuGxtgFZk25cBWwn8xNr5XccbAKkPkafb5Kw4BCC2SS5en7FjMcPZa",
  "key6": "jv73D4WiMwfkLHfTFPx8PekAbvwUvzGztu7LsY7fzuQ7W9mv8M2eofF8BQYmydP99B4kDPhUtPKih9yetCofDua",
  "key7": "2w64ARCpxcpAUbCYzLDzh9FvbGXbNi6tVjmgkS4N8h66WwzLShckiXGBT3UjgjyEkiEpTXodQ3TRb16xiAzboHyq",
  "key8": "545FkeSPt2Pud5LnvYWBydQxJ3GEUaRy3KBYbtddrQVhUEuLFaoYe1QT95brzzpspsqfyF87ZcwHjaieJ4XaBMXf",
  "key9": "P8gF3w5RtSQNjd7ZdFUFBinugQeSTtu7fBLuJEPjozdT5KxRZ2SYgT7qW9ozfSr4da2BdUf8YV4pfUTkwfTrUHK",
  "key10": "2bGFe3RgsLoRnsgN643js1pdg9TLuUQKRpNhsyirSyt5FL7m2FzRpxtfiDZJP4knhjpj3HfyynkKVXQzdSg7rWbW",
  "key11": "5FhktYDBMWh7nKXGpgdZRTWNzwa5xJTDv71Wf1g9KMTzc5H7EW2LdF3e82122aRHh3JknSjQ499JF9tyyhRy3n9F",
  "key12": "3YAw4Y2KJ1nhuoNsQn2rBn4ApY84JqJVtg5VDW1yv21aVsZW8P8UJbt4zEVWxfXCyhRf5JVCxjr61y5mkzTeatf1",
  "key13": "3s1JDuDsx4TKN7vugPF6KBJFMfJ7JV7T3QxR8uiujYc5qY9rhMUkUANJ54rMEjnPKkDBPmEU4PHBKKGHGztrkWms",
  "key14": "34wtxrXqZ1tq8EPd1GS79Sdudf7ibK6LMRWJ5o1aX8siwA8UMVbdXSoDcbZW14JfeQJ4xJ5Dz3eoZoJSPUJ2U4E5",
  "key15": "58PLD6dpb78uyMgpofuvjn9n8FYmqzgbK54VKNA6M5a8gLz2qTvvrWKunSKygZo7sNKj5FXRRoW257GqxUEPZXwv",
  "key16": "2ouW7kUK12Eo8Hh66xftzjqoV777Yoh5izx9fkafKyNVoc4pQXdNjuWCM4pJQEi9T22Y5EfZK66K31C5baMia28A",
  "key17": "2YiZxRWcDhMjztkrLDdXH3qwUXe6XRKZt4PWdXekanFQ6CLiDifiyycHmgPaz1XahUPnb22LWUvSaT5bFaovaSZy",
  "key18": "A4Q8iykYsixTqzD5MskHV143UKGTEG4ek3ZTrS9LifHYVpTpAowfs4AdaodiDW5ZVunjQx6qD2Qx5eoor4sRRv5",
  "key19": "2ZiZYb5LzBYdRqYB1BNE1nQgAkWzZDWV8vsVUuHq3oy42GdCRdEjniZGNJ53b8uGahxyFm3NWXpik4S5BmJ7LVt3",
  "key20": "5dwhS6k8X8HEH6Z79DXAYY7ZmxSSk5KAcBPXghUN2ZQrNjBjNAFG8QtV3XeBPck116DDCs5ehk9Djct8DJ4yenWj",
  "key21": "2wSGiAuTxAGbF3wzjy9hnSU9XoXMboRZi3zjDVm9jcfXGzh6An67ouYh4zNgj3PqmmkqaUPyYFremu6qrgA7pv2",
  "key22": "61rhCmyXtWvqGUqjAjkDMNuArc3wgiCGPRg9vkQkMsWHSNTsdpjkp7S9rJ37qdNBetvtCNAymd9YGn2HToLFQ9E7",
  "key23": "42D3gyWmZHpMFyLcnXnHJfroitZ9WYM1pnfKsAdPLa3mKN6ATdwAaEGYs6aDirhoriByB6g2edMcmfSDBmW5MnoD",
  "key24": "5PW579tJCTqTXCzZazUbveaZT5gsvwRvgqq5Vf8WmSfoWYdLeMWrES5jwRPMXuN1m8jMz7KX1chQYUHdpMf1C1ft",
  "key25": "2KK4suy4N7aUPdTy4md5nTX5MhijSw1w4Eps3fNVun8PCBcF1HSquudPwwYHqYjnBhjdD3EE6JKPFkkCk6tiSKy6",
  "key26": "3XT6UrLTxzR1i5nDfs8xrYVQ98AzHNMTKbT3Gy3XDs1h8rGLNoBji5jnAUyJmsu5qvyBvhAmuSg4FJuL8H3BjwaV",
  "key27": "2Wjfk32ydEFcZiL9zeG7AqBYiGrLGcevHXMEYw6VhmP6bhTZwDPt2n5WyxTVjbtNhQYWmucFLbFg4dPYjVWKiJwT",
  "key28": "28gRP6KuhHvmP1UWjXuLzm99XkSaG3FBvm1vYsyRfjfQBoRC2MMTTbvYkxQ7qAVPX9xu2hSmLSCxPbvnDWxWSj7o"
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
