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
    "4SFa8xnSzebm9mrqxshW4GckSngzPReUQ8X4nvyBzS7ysKhTBuVJkCAM5dgaBZ6AY1XjwY21p1Hnh8fw1TJhNjT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFPmJwMCzZN5jqNtd4XbyqUH322EvoMBjzbWa3gB2BaskzB5aYogRUq6NgaCjTQu7zc8yP9PCTmdZjZsAA36e7A",
  "key1": "5zgeU2vD9m2mAH2pNSUpsLeQwmhc6mTAvqzbPiEux91w5byxZ71e6yjjNAYRiyGYeo66n8XHS4aKQrLsRXJ1672w",
  "key2": "2KqCXxncpjPU1yJRqQQBLmYqZVMX1Swz6iZGLgHQK94MU1kxLs42Za34WCnik6SuNhb2UauU96S2BoXkPEAZbiRH",
  "key3": "5e1XKyeUPu6BQHFg4H8fB4yL6BgnXWmsLxkR9zoYkrjoFCiND7SQA2emTNMqakPRTuwLXHDgfyH4UVhARXQkoMQt",
  "key4": "M76tKmtZkdLgNroT1tHirUjf6mfJ4JAeHNWyj3EvZCBNoETrqQDftUFWeRZAYD5u8YmpGG6McT7VBN3r2hS2Spw",
  "key5": "Ec4P7PveBXi2rYCHuK6ETTjCERJG3484CbVRa9pCu8isnmvWzmQRAJWc4y3NuwFjesViiUnXmPtye2YyfUHkWjJ",
  "key6": "2R3ZuGz7Y2Tps3s6yZAne7SDGF8zFgGdAqvfFQouNqM2HRUa4T5RxpKxKoGKhYMz8VU9kPX5FtkUax5i2FvA5ciU",
  "key7": "2eKoeYCV2x37kJFDVYwzMCKqyUMno9rR5ewUQQk5oJy17Vp7mHazJs3EvCTsAKMDvc6RQzbLafjUnuwJC9wdC8H6",
  "key8": "51Cth9DUWUPRJcUUyDKcxwDLwKLh1EnNSBEiX6d6VgL2tcfkDi8BUoMPpQvuHQQuG3WYuPDUoMj6XtFGUfJfm9EB",
  "key9": "tW6euGFCJHLoBSnP6d1r214N1Mm4xkPW9wfaLxwErvw1EndtBvSdPDAUCyzwxMFpzxqBdbDdb6zbUJEm9MJN2eM",
  "key10": "5TTywTbf6kDD11jiwjCtmvC2R2YCcuC8dKdVy33oDciv8QzHBy6KXmXBP7yD73PALySAGnLHVWVR3jYkDnPMQjAa",
  "key11": "4FxvU6znjogGKVWXMT319Vi3aTkb7hvFvm1vm5jym8kjxoKaCaavTTRJZ4wL4cjayxp5uKi9Eu1BH6qWjWcX71gQ",
  "key12": "4SjS1Dh4hjZEgujqjuCkAdsjEtxTR9eYBxpftCSsnY5a6f5y4abDuxnfgV6bSu8n82b5bsBifqqwhaAUiZY6GD5k",
  "key13": "5Yq7hYGLqCLo7KU5m52qBoVW7DUdCbpXNZSdKJEN9BCQsVDrafP6dVDn8JJcQ6Us5mA9wQZMrhtmLDvcqrLhKZPp",
  "key14": "3rCyqjJboaRWjFFUFKDYdhFjChXTdyXE6GwVEPLM7xsnsSSdDzLDDumxmGzbyPyTWo4wydrBtRDuPkwCQnG3rak2",
  "key15": "2KSqUWtwNK23xnnmkvYsBBhuuGuFkmqgVb1UMBxeRJh7i2dWr2dDrWyHzycPTQkMAVaZHXR8KoYcxTWMmDvrxWNq",
  "key16": "4GKhGt5Enk4JVRRqM3zBwarxGx7mwPQkB1sVQA8pYfHvY541h8XUSTa2h3b5v2Q6hVkYqLoExETLLmnN5xFko8Fv",
  "key17": "2beiZNQk5TZ39w9H3cSVyVT4Q13Cj4ZM2CMTCTJ132cS3jNhDX47ikyHBuUc8mFaoEhisAYMe1Vv7occWnbvDAPb",
  "key18": "2Y2Wr1VgSE94PhxkUALzw8thMucFNSxkmg1TQRi6HzyD7kNvvVQeYmKe8vj79cZnf5VYVxvcXe4biSRFL1oDWXhV",
  "key19": "4jx82TkWZsC4Khe58cPENpGcBtBVFFCR4wKArDezcZ4WCrT5zZfaEfTgUVneAAdH1hg4hPmnUHMM7dV4PdTwKJjE",
  "key20": "tHTV1Pek1MDtBoJWhoRyztnkBijwvvVkus286msy1AtUPwpfZqUKsyYTRFXyrT3CfTwtmrq9UBgkdTW6oAAYTdA",
  "key21": "2X7t1E4hZBnpkSiHZ4fWoAc377pbpVUYaP5gJbM7ZK9METnNb81osF137Tp4RUhcB9DXa1t3JCp599p3Qniz1mNJ",
  "key22": "3QfeyTxsqX2FURGeB5ejGq1fffxJVyiwZjHX5baMXZWioLmV1PtnTm3sczuCcimrQAfvEf4bGkZivUhAczNTser8",
  "key23": "5kMMCrMkCNjPCfGN6WGpoLmwKYkdfiFATEVF1zqXKDCPQLEsuCAuqFULi3hDFgoDsTSgwj92K67SKRDk88Qv7Nbb",
  "key24": "2m9FHn5EkvdB5aZNHVTuirrpyXVTLzPYkrv7CmVCAeixoQqS6JNqMWpfexXQX54sgjqZCggH9sBF2YRBLaUaNptb",
  "key25": "4xyL9H1RMTMeMN4WxEbDv2sRoeR6U4SZ2Sm8MDo8Ut5p8BHx92gpQmKAStG4hnzwt5e82HnVUghzicrp4U2YXmyW",
  "key26": "34NRj6NyzrNbEbgo11x5vDWGVejg5uEp3pDZhhuXxJpjBukGsH6exehkFz7KHrR7NwmxhJzs43bsb1bqaazSgRWt",
  "key27": "29AK3gooNGvgvrLfYKnKB9vorgyjTn2MwMamK5t8r8jMpR5Vb5rhiuiHpxB6w7329KwdeGVMmeth7J1nEKVqNhbX",
  "key28": "2J6VRi9Y4iTDtf49U2wGRkWZJbLVzAG3GknuVrVaQDtCLpoKLGVCVxeoYyUWEQK14xBX1JoVsFi6Afv5F2trJcKY",
  "key29": "2FVFtUPxmNDNGnKp9dLwVDz7qpTirNYJinuHvAmqrDyFxUm3hcdPgEVDAzVkSJXRbDuhf9K8peui3fMX5MQqgbjE",
  "key30": "2XnoyBno9KbSrA6zgNVdP3Yb7yFQ27qpwjhJ6qGH7rswPQneyUpXdVaSyH4RUcEYazahkcgQnR4CrpGQJvEAwN8Z",
  "key31": "4uqBYLZmcTb71nG1vgXfTtZV1jDqaxCrsMHbhkB3LcxUtH8B5WNXzsdgipXqGURyZjCcPTT8H2LGYd7qDibE7kmL",
  "key32": "4UVjF4yvVRy2PEU6UGpmrrTHbT15canwKVQF1V9HAUprvHLUeSfh8Ak22Gbrb93K9t14mrzEqKKj9AZ1E4xHyjrf",
  "key33": "2WbtQZcFhL9dRzdUnNdjiCToCbUfztcYrEemqQyhwVE1CyfL6VFXueKdXhTYKMy3nAYdgKJXndZzWEG2G7QBjMmN",
  "key34": "MRv1ZjXaJC8CjA2sanhaZ9y2rNnPZWuQPBHShai6NoFEkFNaNcbhKXpvT5YoV8asx7JruyPV6TGZnPm5tGkNu67",
  "key35": "3Y2nL8cC9TUCQoG7JLhyhNbqzd83px2ZsG1XCrUN7thTq56TK2RoPh3us8FGa6hpNg2u9fRBcXwJGjqo7nPetk49",
  "key36": "3zoxE2RSFP293VhGeu9vm8uiZjasae4ykmEob2c4bdn57MstN8D1Q49dvVuZQUzqZU4qfFgYreC9Urbm27BrfidS"
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
