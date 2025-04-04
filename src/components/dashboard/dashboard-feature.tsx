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
    "5Qv9iQzpHyodxXFzShxqjna4KFNEJpiBXLXaHpok4CiD2MCyHXGq8uf5vWmF8yGbiqhV7ydU92QLWUa9XcMSYHqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzNpdUwmEWpTce3q6CyqYqB4MXtjmtegJRQ7XqLzCXTGYiTsPbK73Q1ee9WU6my38FFJLjsW5gQvGr4s3vUhwtY",
  "key1": "5s67Jq2ob8foPpjdFc6LnWX8guUwdf4tCJXm1z3mXNMqgZyPZ3LR3K3q99njNNyQuvt9q8U7YK41SFviASkKbEGe",
  "key2": "2KyNkZpu4Pp8WtWHDBgCj6AMbJEhNjJh1fW2RuZTsEbiAni4CUTv8UWmaFvL6AJ9xud4fvw5nJ3E3Tgbb4DHou5q",
  "key3": "Ui2PqKKTo5vA9oxkQGM61aFkMn5YtDciYiuvASishkHxQSJvkVh2its5r4Jcc7QjguaYyGk8gnUVddEFXrPJ34o",
  "key4": "FLNwBcmkp4fj2Zt92cgLrqTqVLWVLysfJHkgZokAA696sLqHH2mkT33Am7kFqpiLsGpVyPWEn9vuhyRPfZUPkAA",
  "key5": "4w7eV6MS76PpPps2pH25dWEnAzVty1k8pFEkxUu2MzsLLcj6DoTV41QEj6SLKbR3sitrsZgpxD5mCCo9mEt3H4p8",
  "key6": "49mw46mLAB2iDZLVXMVHy4S2SLQHdVvtPV5HrPZPuw6PG3uBYK8EJ5NKfVKr8uWzLhbq387andFvTMonw84u6f4u",
  "key7": "3ZqRL9Atm1L1nRpvPBkLArFqiuY3JZ12WQFBQKexwJkaysp31WPLWbWUnRBaQ9uZm4GJ8C3fF2jcK4nukFojSFbk",
  "key8": "VngaYZV8GanDh8iLJQzKooPaCmU2Rw3FR86r7MapGwPC6NGSnXBpNJSwgRP16gvPZXBpc16AJ4gD6vLypUgyKGa",
  "key9": "3YnRwE96F1YiTU6nEqV4YXYk8JKncQzTgZpSvzppedUgnTcND5oNXn4gr4cV6gBaWq9gdVRQnL9CWoYo6XrXjMuj",
  "key10": "2h7o4GSamgzptS2bqWReuB1ni1eF2kNzkU6rnF1eaVXxfz6oiNsecsDtbKMchf8zA3yZwrHkKKiAc8Nda8YimT1u",
  "key11": "5TVvKWu99v29KTVTmWeA5Mc8vNkUcNL358yYGbdqZn9swZ4jKXW4poP9hZUyfHW8EYAu8jKRfN8c3PusfwCGF9MH",
  "key12": "2GAX37x51uNewKa3LtJVJTYkbWiWDCDLp4vpvPJe475jiLqcrqt35d1eiU992i9Y2xPQbHiGLWwJkp8rMawzDfnk",
  "key13": "WxtazfqunFUVb5d852er18ZBwZT3nfipnkym2VLDkKLnyKqKxiU2brynjiWb85hauhh7Sm6zXCJ4xGda9sQC1o7",
  "key14": "L2NfEvLBWmrhB4BPqRedhBeSJrv18ujJtGQwcZBbPdbYNrhTJYYUc5Yae8TqnsmLGQcuhNJLtbGLWRpfHTcGUhX",
  "key15": "xndqvjvXcfvgf3aF9oT6cEyVWqYaQ4BcYmFQ1gHMwBJGC5dwo9V91aHRMu2pm7M8UU5bnHTmuaEHkx9WNrGZZh2",
  "key16": "TEDSCwNZ3avaCi9gt4SRprTh1nBT7YbW8t8vg4pfyLnCttGW4LqPzrcXkFiZV2nJRAQBnufioAGsSbZUCaS62gQ",
  "key17": "3bFJJZJU3ePV1FQPS5iq48PY6P1cymp1TsGvCXKXtqDzBEqH9kFRNeUjoBavLSM5211A8BHCERNJHR1pqqFA6bGz",
  "key18": "2dabkiS3AuG2cgEH165Dc6ANRDdA3q89vbEwyLcSfkvKEz2uD9PuPNgnzUseZXxViqmGdVgc79VcrBaYj581skwj",
  "key19": "5iyZVU1FPxSvPLJjzGu3vN4exPc6LjaSWFvWjXRXgGWV33osxtz8M4ZhCjBLpPUCEZiqWfU1Q1uuPQ1yPpp4paKw",
  "key20": "38j94fRSQBWmRoEZnJ1JPFcWmfyAb58uo8VfEgYKZUsMj4katCs7TuLBfnT6F58TGQNAdoUe85gP1cdcNRunvAAH",
  "key21": "BDTyziCpmqkZnVBXkYN44NdmPUqGcj1n1nnopg9XZ9BbgJRH586hckmMXdss8ppJJuuJv6CH1eBAH9YR6wtke6d",
  "key22": "2CDSeVG4sPc3umi77S4hRtpnjVwTyR9A1Hp4J3Za8vYvLdjvGdEsMt8wmKQiNDHzHTTVz5UZmiLTUDSKykATeGeT",
  "key23": "4CYVYpdWn3bdQeZZWyZ6grgBCD2zR6tCEXq7NzHJNT8Bti2tqPf8iN41pDjzPSK4cNMnhXDovb5nqLVmUKqT4df7",
  "key24": "F4TuE3vYSAwAaAMNZ7h7Qwb4gRZexAJiwP8bPhmdxciyAZwqMpYxNaoMjPkPFZiTWskVvSf7womuzPEarNfsx6W",
  "key25": "5BVdAoZYWAhpnwdDBPaKyV5SMVPB52L6DBmiEHK3jhzkM46JRDRsHHkd9oZhPqXm2JWMXJbVXRi4sNnqqKXnGpur",
  "key26": "4d1ndqgUvzA97CedBaFh2WykwfWivv2TQ4PzZrjdCehLnRyFXP7Yugho4DyDbkQTYDDQzNWgommZiFx4bvoJApEx",
  "key27": "67SqdCYtEXYV7Z9KT9YDPERkzixZ7XTNVpuiBk1HWirVyaHCw42Na8LfCGCo5bz6h5AeXmRGfwGFLtqMbHKNHzNd",
  "key28": "3kgMurEqLrxYDpiuXGgJCHqH45vDE7MLaS7AceTutW8HsweenbKqJyoVXhZwqBWvakmVPxMQqNWgLYoArjW1GVRP",
  "key29": "25LWJbeuAr9FDQDToL3HouyCooxkb5ui45xXfx5R6QJbVh2nB4xYrvu5VeGELtX7SzPbJm6yZWTwuwVC4cP99Tpd",
  "key30": "3wVz7x8m8qA9yFkjp27QyJTXqEBUMNArM9DwNFDAS9V5bRJnyD5KhGJ87wX9a26TVoJ3WYqMXS7xQp5x8opso7JS"
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
