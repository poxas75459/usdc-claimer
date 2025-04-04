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
    "4qFX6XHvZw61GbEcd6c7iFiTcjbZa2fLDVYyZpUycL3Yu9pdVkbxcuds6xh4caiNA56q1xX6FdF7VEpREdkSNmv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tw4nfjrXhMVfNc37Uy1n352Ggb8PVxGJnd9sSRo5kfEueJbgSkyjxsTQcF8gLZvdFUq4FUEHUJ6F3smq82kMCd",
  "key1": "591EHcJWZfyq66DcbK8zxZa81rnXuQi48TZDA6zrYG11C75JLx2wMYFe4AGQugVEvph44vEbYJT2bZDhMvewo4pP",
  "key2": "3VTnv8743kgiER4nU2YLfxdkT5hdv5pidkBYTeqTgqrvJWuQac3Fs78ZJEnbBSJdhMAA4MuW9BSta66Yjhc8AKTQ",
  "key3": "5UEfUNjL3hfjVtr2qLYZGQsakcZDuSnGyUV3jGzSbRbkoRfwnStmpzdzTKo9fzJEDToQxzsBdcWpjhVyZ4HX5pUG",
  "key4": "4s9QabXek1eZopk4sz3yBFn8UutfJJwqYV73WvBCy2m79cpGhW9HrD3NdrCR3G6vpb4bKVr4ALUJJXuRXqbFGjxY",
  "key5": "USnfK6AhDcGmAbYFcav2vwWpM9Dg6hTEmtCw5LoEnemFEkbkbSusiian5oBXduQipxhLLzjmPapbDqTDPwqscEV",
  "key6": "4MMB1TstK155JANq9RCEWdpAYG4kbBWHVw5bXSAQXZudWRwbcP5MbgPhX7zotSXQkawegTUQDBC3MRr9TSBLp68d",
  "key7": "X3ZDsYoEzW2Sb4mGTw4fv6U59N7i3uFhgJFAJ8HDPCBJbeA6ftKPfig2JXqRxZiqKx8Z42PGTnVAoRiBH8PzgfB",
  "key8": "5GCfypRDUQVNiBrAuqrozEJ7iFVApmTeUkrMeyKTHU3o5nvGyxC6CUKCxmSJjWQjrZ3aLVP66cYtKRosseCUMczx",
  "key9": "3zi9MmQQePtjCd25nUVMRG6C3PK4MWdQaLeS5rVb3dJHJqQ52PCBxX3aWau71s7GqwAV5Ws4gDP4qEC9PPbA7o6a",
  "key10": "gCdVsVhjJMMHtH17p6PP6v7kpfoKsovg14fi2eg7CKsVisC4qEzL9XzRB31NeC6YWyVTM9EQhnUaVhqdAVgEw1H",
  "key11": "668GaYPUSb5Crnv8bdnedDNWyQWn6yX79eb6fHLWcK7yWqG4XfpwyhV869bCmGwXCbc7QN6m9U6qpmgzkoKvfFYS",
  "key12": "3ycErrjoLom3987t4shXG58d78YYpYLgoeJ1WWTkyrpvLc9jjxyeLNYzXicHH8xyEfyLSWWBUfexpB69oFY8fcuP",
  "key13": "4dwEzdBcAYdu4Pffq8Bd7Rfwk79bWGoQ1zLrgASHpvenaXDjRaLkfi5Rw4PRULZecXkou5cZjTbtdrpjQ3xt98Gp",
  "key14": "3zHciNMqCfx7C1gTkoG8cX5JHB9Ftg28s9NUcQihqGcZWGVVsdUE6wLQ9YwXXYTFmYz5ukA5KHatkUZa871U8zQ6",
  "key15": "5oqTbfAqGH32pJ5NbNMx754qKePtwYFKMCaycNv5pVTK5Wtc2jEzhfxhcj7htSCdyuqwmpYtyoxBbd5GScZFmhTe",
  "key16": "VvC5AKQnjsVr5674jbPFGUgWPmAF96QCgZDoM2CWhGkrZMFasNNZ4bwvQaFtfZvoZStjhRbJFfr994cf34spJV3",
  "key17": "5y1RE9ZHwYqacPsNGPACrj1CWhwq3EzkNcgEa1QXoQkaek4KaMxCGEbpz7ihNW6YndcmJbGzk8Vw1RftkH4qZxJB",
  "key18": "5jhhwFKAZrZ2Xrcr3V71AXLdbxtUgocVXHpJE75GchACqCfotqhU9KPqpbn6DVpWP2WVBtvBKNxNScgrPT6wpAiZ",
  "key19": "QhkUywSEgdPWmVeT5zckdxt7VrMrRCYRNvAhFy6kDQv2RgKxSFqDoqhbYiPAiZ65cNPFKZ1EAWfgaTSS5KEvdni",
  "key20": "5tdd3spzFRHi6T5emPbfM7TmbgV3vks4L7QphrwAK4bC72ED5BNivu57d763KYpvkQn2tABe8PxoGHc9DufGqPWz",
  "key21": "2XC82Lo1iGoqSgUTnCQSh3SCz2areq9mgefjeLKhqi8Aj6JzhARYFqmc5c6E3s9pjmPW7tsJVdcb9ww8T3seLNxU",
  "key22": "3pB8am48rJsbtYyWDBjc3vUSF7tZPkeSA4kkRjvSj7Weoyspeaj7rUH8zr17Yodv9tvTXpyZz2XpP8KRND9pgxZd",
  "key23": "3c2MYfNDacupQfyKme5N5zKwBr1iM5kErPeN9kEyfGv2D8HHpYgg8XHHP3uL6URS4pBjRy14zrAy8kMfbJoPGq4m",
  "key24": "63ZPYxWq96K1y5zmYqPKtpkbcxuvKmH2m9eSovPX3UNF8yWeDyMTBbPvKtaFhQuX6poHenhT2mz5P92o92CzQ1CC",
  "key25": "3nqvwtm1wPhUVpF4VZ7T7uVy8iPmngFBKbp7tK5JjKjr1DvgP4JWgqb9NVCLtdzW2RbrP8Auv1nVgeUuBZcMutbP",
  "key26": "5w6d1amvhtkDau7dMApc41cdu5fQRCxzDkwXjczvwTAFsCJMVLHQUauSf9nXnESFnwsGCCtKZLaYebmt1ALPstvS"
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
