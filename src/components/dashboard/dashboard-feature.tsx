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
    "2hHoUJPe4v7zv8uzsGuNMeJavo8YG6ZkKryBXW9LivevpcVyMMnys27b64LtwcsmWAr6R8aydVN7EpxvL8WDy92d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qj555EeYye9UAfqEZ5Gsz9YEvSHPTn7qEihiw79cw5WZQqDWYaE1WyBeKATNmtQYpr33BPaGZuK5eGEWhUktwVK",
  "key1": "2675MCAimo5yZL8NCqhauvS5XTvhDZ9hTBv5z8AFGFSNhEomkNzDa2nzhCXXLfqw27JrUrkLv5NA1MnrVfTgSYEp",
  "key2": "5KJvBjuVzkbaGCfS6aqCdMv15RqQ2Jg8oLrgUopu91ZhNWhpUDpZDvvtp2amwjr77mvJFzriHTzpT6UDKMWhM43s",
  "key3": "2e8uqZpC3E25rsyadAgz2t1XAWimLdYQoepVHX3E4w4fQjoxThATKzSfG4acL4ffN4iGxdyp9qZaSd5LaBaCE8uV",
  "key4": "29SzNX3tfw5nPc1JgA57PFKdAhR4txwEVLsbn1f9fe86Mi3PkC7NvsvcJEpL3wpJVL15tY6jwQiekvJZwQf9xdT4",
  "key5": "57VD94FTvVJVFP6P1YQpx4BRtJ5AS8qKchNBHMP8ZEV87dJUCmoaNW7Z31aqvgrcqgQhPiZxJn9Fd835btCG5pfY",
  "key6": "56Fb8wgQ8QCmz14RzJR2RvqbikNERR6wPWyLnucJdHnxFqjLrcNvpUJr62SHDcQ8FyvUtb2K4cqcfWSzhPNSQJGW",
  "key7": "2T4FLeE1j3xc6Hkbv6LTHmP3691bNVzmuGaPMGMMFcucS5SdGaUrJ4agMVPqPi8Hc1CkuwGTJ87wVr5FU87t3Xjn",
  "key8": "5sp3SF3y35VHQBvsUf9L4xZS4MWSAB7g7SgRWf2edSpECabiPcQruLRagBQLhNj9YHtae4MfEJWQEHQhjbcvMJQk",
  "key9": "34We13yhf7a16n3Q7dfRG26E4iivTTaU239v1gHxLtWwoEfrrPochbJFrE5eUYpdGRvy2BU3cCfnXzYWUYpr9nPM",
  "key10": "2hjh7SA5mkwH3jkQfLaQTGtTX4bVjmDTxGtvD8ZovFCjECoV7z2B4sPVyd5Dyv94kQiLk5VJNKKx2q3GF6woZveq",
  "key11": "2mzpgERWcveN5kXC1E8YXp2thAxnS4XiyNVv5MQ5b83cD9tw3q6p9JnS8AzqDdd9VUomjZTWwvmv6MrmR1LndQ9a",
  "key12": "5pmXFeSryHQATq7TjTkQSG9gDPvFFFYoXGqhrr8HyZpWuvDepcH8UYiiExN3kK4r81dvunZXAFQNwzfxi4jPFcAU",
  "key13": "3YGDQW9QuQ1ALKhgN2w11c7xTFHKUk4LmjXZqx5AVguJ4gcPvbbKYhTMphF6AnhyJRLHHGuYKRzzwEEPHhDms1zA",
  "key14": "3uTkZ13at1MZLKehLnGe5WSjFuRx1myPGYtkKjXkJyT7crtcmMLF8AEbn3NVz1cW9ThMkrF9TyRgFHr1UGgtiRpq",
  "key15": "5M5qHHM39n8Z1xvTZ8BSPYkntCMjJ3tC7e5XXUVX2K9iFjzfzgYjABGqob4wo5Hy1Bo1eSJCciTcMWkr691AoX9j",
  "key16": "4dp3cnHL5iyUFDLiepDiWs1tRPrqFWzHNk8kzUyQX6ZaArPHt8KDKgf5UGtd1FAvrBeW7yN9UU6BKrsJ398G5aMo",
  "key17": "4hs1MW5vc3dg9z9KnA7xkLWwzwEs5qmi4cAgX4JvMSdACtpNaqWgQy7E1jZxNKv967Zc2WRZWiiSoLCMnHRx87wZ",
  "key18": "VmvYbx2CUZRpo8dTGx3NyHYnuQ49PMj4LL5aopD1cfnB3TNy2wz1vBVkZZqV7fEL44zYSA5wSbubhQnU9AiK3yf",
  "key19": "2Ao2CKBUBMZdEZX8CQE1V8PGDWu6TXCYSUc6cmXJD9ibJEnBjPjfRc9nNK7LUK2haJdBPpbRizetPhpXUdbp749k",
  "key20": "Ujh2QaSESoXmSWPzEitaMqySc72LkqSRyE2KxJPtadAtGKUuB4N8q44j7DxkEUbJoKiKy38WQi4wTzMgMRevvbC",
  "key21": "4QHUsw6bb5SpMjfHNdW9DT5HaAwhcGZaaGUNHxA3bmxttKNfNjHvQiyQCtSqyHtEYu2KZgqwjKnzMTrFtXxM9wZR",
  "key22": "4WkDEiRPPxWWPmAr4UK2F3Bjq1PhPsRQ8E4jgQd47xcymWkqxwKzadtEyL5hfzesk2CCTzZXsQ43Xd4Ks4QBiLaJ",
  "key23": "5BSQoMb42UGwuzpnYLcZfUzsrtkXzkhMyDptU5Sdq29MwkmwiUVqutuy52HaUQuD1f1cCPfHHHvbTQPvFV6hgxxU",
  "key24": "5L45kxXzCF7nnWqxzcim6GBdEkH97keog3iD4CVJqmzzLgCF37cabCg2wvPdFXGy9ArxTfoywHxiA62kdyRsx2Sr",
  "key25": "4hmi5WW1dGH3gThn6EiCvHJxYfZzzUuDohLimZgcQ9TzSNFAtEyJF9okFqTsAJEEUpr4aiFwmP6FwAtXjBeTK4rB",
  "key26": "5bR7rsXTSbaP8wsvaX9Lxcg3iXZiTiPBELnFq9XZ3ts44J51PUjpmKVwfqxaPPLR3dHUNCmQBFUBuPbsYQPRwVJk",
  "key27": "5aPcjECNGtckZbSTGZ56ZTEfEMNkZyFjqBWtGdm1RXWTJfAaXx3YCwbyjPX3K2uaTF7rd8JLuK422bf3FcNGKXFP",
  "key28": "5Pyo4Bdbwu56imNYGJdL9EGq9gekA8spJqDx29CW4Wu6v33p1zZLGSm7SdP9vMr68ePzq1wi7x4rZjKjEeCdCmBU",
  "key29": "4bc8h4PUiXAP4xg866mjjhHqMLgzhSNsqXTEvWRcgQYRyXuZdZDRVRX2p5PS2VbicodnE8fJjhr66pVHxzHLGPwQ",
  "key30": "31W26t1Fr3AvSA7LL6Bv7vDUkYh8kxCgFk81JfhjNS53JteTH3dsSZDZYfRaXUV1rcJyRSZLVdoss77WcBC1q1sZ",
  "key31": "54W5fLR1wtUd67yyaQV5iBiukdRV1n8qtAJD9skDaZ3pwEKGjenrmHbBZpRY2Ke92rQEDhVsp3zqdoehZVr6gcY6",
  "key32": "fsqs63VQQ2eZSjq9XzQjLg9Tg5EfkxkuUBw9CdnHcJsdmg8LREK96N9qPT6z5KvzcpaUKHMBaJrEapexmLXqyGJ",
  "key33": "2CbE4zSoVm9i7XtmzU6LDC15HfN4Z4NFysw2tkN4pqXaKuNykSDUF9qEozeqb8eefR9zx2KkoqoKiigz7Q7Yp1B8",
  "key34": "ZGak5Ai59wkksju7tdmHTmKnyQsyhSgBXAwH6FmfoYGvRRAvCKG1DqGp2xHo9B5TjyVnPxzkRCsQpstMbxhgpze"
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
