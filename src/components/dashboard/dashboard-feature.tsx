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
    "29zrkX8ZKXT7dyX2HG62dnGT5CNiEj6GT1WmXsDKfrUKdzra5QoNL18HomgwvgJwecZnwYa1pqMmtbxbMwBiJ4kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HjdXuhWUW1Ra167JBdBuEnnfgKaJ7PzzBVe9Y5RgNz1EuyotVsgz7VRWoiSsmQNFVFydHh8gB9UspXW6LFM2YF",
  "key1": "4JerYP2dsy1Zf5roKMUku2yed1jShbG642UNP4seUxjg4NFSyJQiBfZ7GhRG3cYQPEwk5jHVQQNBk2DDVpo6uzCD",
  "key2": "3wfTzbyCNSvdjMj53ERdUUonDbtY5ZHCPyGhjTWtR5MMq5qBKuVd2MSLJPaQNc5tMWYwE6B9MaqZfujYumaaaLen",
  "key3": "3ojexx7Hc4mkzNbvQBk4AVkv3Dko9iQz17aE1YP1ZTHuCgiGPFwV9VwoqaN9xmHoERzUmjQ1GeSEj5BCkkANoa3Y",
  "key4": "5N7mXCJcLZ7MsGkweBPJCjLhmsjLHsGdRuqsNW6qbmESEwwgL8DNHEz3oM36ifi47RKZAWVh7QSG7K1chqXa1xdM",
  "key5": "4d36dezuaMcgKCAVKXSQCE7eDFkXcRnRSrgbEWYfgFQMGdpNYzPNYTLwzVVWdxrMUEA3ZxTwiJPMVTojVm9FYPq1",
  "key6": "4rSNaNxKSXeiAoWYiwmn1bYqP4vceFr68MEbRDYHHQ7FSVBGBT2S2i4LuX1LMuF2iyxVS1szLYhnqxMCJa5LPAae",
  "key7": "23ai7WoV24vPtBcnzRNqYxhmwPxn83b1R48VDfSQvXmrc4DmUXH5jxU1rM7ivCHEntUdzJis3bDCregNKWGCB5nC",
  "key8": "3aiijEbadtgWjw7kD4XMu9suzUmPKRbdUpJQDSfzQCM4BmFDD6sZtdUdyeWXtYkhxkm9X5nvixgNoBxrLuFbtGu1",
  "key9": "3fZvkaE5nQzZuperKRA7MB8tkL8SeP3bbfxjTPbF4442UvNVwkGyDzw73jSGyVXnsXAdZpaA8g3kGM3JwWn4zm2c",
  "key10": "5dk3UskcGP7VY6PRGeRhMGTCPbFsKLBHuehazLpz8MwQDtzaqFGZRvTkgT2UELLY2pLwoYTBaVzCKCUGXQUkqGzz",
  "key11": "2ArgPcvvXzHznr5ZkP72SRrvjLimQayBuRDpq4d2mbURGCFAMaGMQkCro9mA6u1x4z137A8nrFJQhQBLe4jXU3tS",
  "key12": "2NbdxaH4GJZqaR4hyfUMqtDLjo5AyLp5vnUBjAJ8T9UbknGFoke6QjvsSxnXSsi61wxWM2UzCPUFnNntPZ65T9tY",
  "key13": "5pjdiTftSv82STJ746d6EaDF23oycTZvpWMVnkfYmgzz6ivGS44ugcStZgQUzjRLXhYfwHRAgU3aqJsTKxAh5ALe",
  "key14": "5WVL13C73wZnRiHoC3VrFQ86Jn2MudHq7bjeJ5xqqiR2AD3hBSCRB71EfeE4QbLXzPCHETnfcoK1cyfePERCPcsj",
  "key15": "4QKV2d7sBTYTnqcrqxEktjUGXXxvQuyz1PNWfnzYzLRrkGLSYMbUxYTTJ14PmWCbiXid6VZfR1xDrxbkWp8wQy5e",
  "key16": "3kzZPRVGLuhSePVuaYkuhUr98xqtFYtcsyeK49WztXvnk8LLAV77QHGrWuvaizKcGWyMxvKjjtdQ85sTKaPGKeib",
  "key17": "4b3Zi3tGy6jXeKzVbtqPb7B9EkTA9UxC5Ka5JWVh3Eu4Uj7vus9KtLWwdCp7TBr2C56E6SQtfDgSVWLa8juaFs4n",
  "key18": "k7vw5k7p4BVr9Lo1xVTzfS5PabtB5DGLb3C1f1AmpmZUNYAbN3NZMzUyzEgipEqs78n7p4QxqdUz6AN4asLHVrp",
  "key19": "4ohxGZFM9cYYecTRpwFBPvvV3jBiMnpFhgMmebLcQUFew1DAq1rXW8c3omuB7YoiDXPQreDTSJGw1NBZBnheq5LT",
  "key20": "3EDLddVHLP5TvKmdvke5HRMTqZwPyXtB1RDBGdvtn7Y86NFNzM8b1j5N6KeaDcVNj8TFNxjDhm5MnsrCMf3YgqC5",
  "key21": "53pHYb6VCrN7HWvh3FMt4ChbfSuwG2LT6ZvFHfnsHCQM5NjZZRbLjbEh4vEf11GGb3RMqkrtmDZy8FM8uxdJtKsS",
  "key22": "3YGP26EVG5exV3Rxd6LCncxFwpQ1SKqMJAHy8jTfPYBSBoYS6mKgcQ6HkuofJ9VoTFL8d8LRx2zBSsQUDDUeywod",
  "key23": "4LRiNw9msktZ85FuQwejVjCes16MMttzdPyVEj2SPhhVNmkV9HjRsvJcj4E4WbfAzRFE5NnHVwowWKWw25t5EsLP",
  "key24": "57zz5m7FxYApqrR5Qm9z1jpSfYDDV6Ax7DrDW39AYVQgVocfNSekMmi64ygrJtky5sgqviL6s5iF8K2viFPzJsr",
  "key25": "2xGviqErQf1RBL5RVjTQr5aTS6pEnbGwht8xvFFNfdCPQjNkkUwhRy2Y6eW1k6RHzTDPyhnrk4NxPwDeVGJDd1ZW",
  "key26": "2Tv5AtqDfQu76qo3SF5ChMts5eLbkJ6RCFjd3pmx7B6vmuL6zTd3iS4uQAHFUEFWj4qJcmhX6M5wY2XqnvYBWvJJ",
  "key27": "3pTcSok44zZJnzZ2duUEbNy2WLdWRfSi9EQPsJsXHhj2YwPn88bMBPg33XtJ6o9QwBPByX1JYnozXPNqCnjcn6jb",
  "key28": "64G81tFqF1iKitFE3685XZLrxBsgfTXCWwMtJG9zNZb2vjoxcsKV8QrXaRRUHxTYpiNj5PVEfQMh6heaHnhDGMRU",
  "key29": "2GY4tL4AmsYz3sLdwB3rCR8CeRfHrywqV1W6y9owCnN6hAarJLadojuK7hua31xgWzHpUdc6hcNEoYDXr2HMGftg",
  "key30": "3nB8QvpoYN7wQuSnPuMT5H9Mrs3z7R6AUiPjHhF8j4LH2nkJ3eyQaLHdCbnKar5q6F31GaN15oF9FLtAtZR74vYt",
  "key31": "5M9bPXv9W3oAdr1TUcZ1thqQdTN5tvi6ia6ydLUaHkJYsEHYt5UdR4SWQkVyp8YUHRKHbn2hsq7JxcAhDHVrmYYZ"
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
