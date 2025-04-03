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
    "bjeMdcq75PYpwqq3BTH4wEKrqNPpHkuLiKimyY5udeLuPKrbe8ewdLWHENJdtQYkTbvmXUy58p3A82hcUdMB7yW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzWoJaLKn3znriYtHNML6fmAD476nc3bQWqAuCNkXCChyD4x2j4openEHyN7fuamVxzdc1JV7AAZzK4mgjECiig",
  "key1": "2CmfZf6szhAxji3TDXsBBRdabwbz75vxkgFbN63w3rQZikxRKM252ns9rMC1Va7A1d3QE1kJh6FRDqnvpthhxvwr",
  "key2": "4DhTLrvbmQwsfPogExUZPjBUAHrc2jq6RS7tQnWFTwyw8L8owLBu1sMMnDTZNnx5TmYsm8G1584gM9h1m6EhXLDy",
  "key3": "k3usUQme9BTwPQJGo6BTknAJbssQtXAznSq5CJ2uWfSUDtryJJSzQyfn8SXSKt2a5Zo1dTfLmjW5n6BCm8jMcJ9",
  "key4": "4Z1cfB1dryuxu2rGnMxaJm2xze3F4vNzM2NzzPDHFnynSgbDJtKv32HkUkeKeSYeXZCauQbjAAaHyfJi2ZMmG25x",
  "key5": "4UVauLxBvfrCn97KdaeR1LEnXqhigujChehDzexrGAGzhSTvXVXqD61DvYU4zFJGfqjefHWYBYL66Q2c61g5WGcJ",
  "key6": "tWSncNgpyGbhEcMMWfZacvqnstNxdBZDneCnpVNUPHhzbbdSVYkGjgVAbnaBanW7wAiQfAK2H9o4J33ao3x2HZC",
  "key7": "2ehoFg4Pq9Lc3iTWefZGS5ycmvuagGQkRKFjynZ6ckFu547rf6sJ4cEMRuxXJXa7FUiVw2vemTajGyEqbVbcgrkX",
  "key8": "32s4M5RcVqS58qA35YpAtKr5kAYgTF7BCY7hRsoSwdEtTPaHWhkmVH69PRDXWRH1rJBu6c7NWLrohyx2ybUQFefZ",
  "key9": "5zkGSgCGZSbHbDRbBB1ifUXMHppqSYCYjGQGt3e6jgasTpqLsZdr6beUbycNDVLW9i67k8ox8QqhK6X8VezitDxt",
  "key10": "w53nYM6c2Xwia9Qu4N1ywDiPiFntBeoJ6WszK5csdWkrLJQ5PEaUtnMrs6ogtKGSCMscbxmubTtVtntbXFeQLaC",
  "key11": "25S49z7c2eyk5H4sGdxVLkmYS7rJ4K7CxznVdbQUvjD17FSrd17CUmEoeJKXGG5g9MdcUnW6QsJGETWvwBUn4CLm",
  "key12": "4KrardVRuZZxhoubYvbqTQpia3AeuxBif8AsjB94mvBZvP7uRCDeEHjUvPVFnSzaS5CNDbSAHgHphtx4aEeXhQbo",
  "key13": "3LbmKfR7LZ8bk7vzQMCPo5QZRXcmYZjvy1QcA8hZqPGuLXSpY9r8uyUrNab3r1MymvZ6GrCYfuUd5aQYD5gb1nQq",
  "key14": "4h1hhzmtcaRNvA9BDhPApg7z8aCZAwAL4os1D52Drm35mX2Bxg4nv2QFqKJU7d55Qim4jNWwnMDCUJkkhtmcEf4S",
  "key15": "4jq98RZPhsY8wXWETRDuTqeHq85SUu3G2o7ShVCk57BjYJAHXWdLrZQqeo1vHFcxC6hS37sKgTNiFEPA1eevMJH9",
  "key16": "4z5KssfJavZLB3LCrTorQLQAigicYBLaCvpcQKXKTihZGYUA9BgydgUX2PooKNhWuEe2qrHTnvA8AQwpXnNGptZ3",
  "key17": "PmfdX8cvTL4NtYjoTgyD9KvgH1gJg8UmkvHeYAi31mhACWVwaR68NUCjVh54Bb9LdNGEZSiAZGPTXygWm6y5Wb6",
  "key18": "3CS7QD9rMFk1ZE4Vyg5HmVsne9jfAcyHZRW5ZhiVTmaPtDZ5bZFYLmmAWAFpF79Av9hYixiBe3ToSfhSkwWmqigX",
  "key19": "5MeCLGHc6MboWwoGwFg3A39d25YXzmQZq4KndbJoFmj1RPykRKPWTmNxV8Uyd7xAjS9i7M8RCDRvqu326gp6rRkf",
  "key20": "KqCtahpneys9nqrg7zPtR4mbaHNPexJ9AU8o1j77aRyUgcb8Jn3i7JL1Rg9i17ek58nydTQjz7TrnTZ1yxJn1gz",
  "key21": "3ayfdQAFovAjPGKVM8yDA1n7TuEfNSymgJaUtoft53KZhUwNSvjThDHwvreyyMXFx8nfhB532wWQPtcXLrXjg4VJ",
  "key22": "5dPpAd1VVAMgVeiAEQMJLw7aCU2UajVtRFoMs2eMpERMKmb3GpoAQP5JRFAFdTq3Z4GBnVYf2AcUCyojRKU7LAt2",
  "key23": "4ZcTcddWA5XuReNQhuh25wUBJL3QAmy1RMfboxB2QyvWbQs9RRMAxVUUECoXkpwzjmLMV7WamXcCmXAuo4rc1Rb2",
  "key24": "MfPDrwqWNtVvtW8QTgG3n47dqdMrpZjUTJ1sJRs2ATZEXnc6Uw8aWvBcsbiJhZTH662wwbewDL9q1zf6FJvxgnL",
  "key25": "5xLiGrheoEHueosmWQvWtMRuFa4bsTTy11TVeB6u38FisnXkzcf2zTMkwxNUmNVwRCt98Gg15p14dEz3NxCU9tSf",
  "key26": "2LqLHYkPegTtvCmmyXsrQUPYEZd9SNmXo6oDQtjT4Ep6XLj5WJpho5ALdXHU8t2bwcfyuVGmu6e3XJHxdF5KPFkT"
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
