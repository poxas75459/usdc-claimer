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
    "4MT4RP6Fo9UZqboPdffeSjCcuVhLvweQJk2uquqZ3AcR2MpneeuHPoCmLyNCAbegtU9rpAxMNDmN31Ey8iXpEGyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvS8mhB35C1TopMJnGePp7JNYu1qbVfVLzvhf4w8MH2ZS15bZSiqNoyU58jcuLBH4VZt7KD6yncwqcZMdU2uNM6",
  "key1": "3o5kjjfM3wPw1bxJq2HFgB285NvjBoUWrSSse854yJjtzVsETPrTbKKHthbAKvkZzSbUp6nFokgLk5mQ6u2YgL5e",
  "key2": "3cZbP5ifGn8WABiYyK4GyxBkzTJMFHHxLPKwGKF4Aykrfp3gaCpeVBf6hyCMdV2ViEfJodnzZ4ChnM4ZnxNbvwC2",
  "key3": "3QKEg5NjmWBHLbr3uxFztTefk1vLDS1GqWtGnxEKJqSHUabLVwiJ28kF8xtozoGbtLYSLDbXp4GqDuRyLAEaCchz",
  "key4": "tSrsNcL5GkzGaMuWr3y69dFPHFGokR7E8oxoiuUjorhdLzNp41JrUSwXKgsi8VyZEr68uzgKM1zgFC3UQsXjcYA",
  "key5": "4nBwyEetHxMbG68nW2iNETbHwtRpATuh6vuXwWLLrekV3PED6FE9ittVn74nT7N5tVkhz5NddeaNe7NmgatLFU8J",
  "key6": "rNrsJDZqHaL2DdY15aLavt8jYbEDwxhLHK9dUdZLWDq2GeYNUy22fDWmSsZ6DdS8kwARja9UrBmCZvw4SD6tV2V",
  "key7": "2PQRnGPZrNCXnjT3PTNLsmJUQWvGLxDCH68Nqafqnpf1qBUbjmfKewJZSZcSgenTNebVwDLawJJuvJf9ppU8VVMt",
  "key8": "2HJgkhuMDtKpGkaXQD6AiNk3oSqmL6tmx64SioninLXieqyCxFt6r9tpF94rdBkzaK5CmAfW73184hTpC5aQEmTC",
  "key9": "2EhTuLY6s6pdgnJq2HGCYN5YYNWq7rQH5py3C5ryiRJxA7KTTGxW4DRacd3Ab7jRsqFwfxjW3eH2wy3M7UfT9Ri8",
  "key10": "cFgqmJVNGS3bY8XxBWtnJ4mYscWYXNhC8gceJLhfvwL6C7ZwsQmu9ADc2erFfedTorYqGKZcvrd76v4SQeQfMXo",
  "key11": "2w71idBYPzzzVraukMJ8cKHC2A9Unh6R2BP3j6zmZthmSjKVog35Fn8SQFWSncWQKvaeD3KZPDWG7nZKswhtcPD9",
  "key12": "4LbMwiaoS7oinGD5y9kGVB4w5maLbGjZdBx8sonwXhQukWtzsJxdTHP4SUQZuaxdeSkWeJtbwV6PRyt7A4qig2iu",
  "key13": "56suuF1QnepwhdU76CLcPaXzeo8FkYyQU5KTSCBZUd8VFCmfh9sZPHVyLqord45xhFgArBUsy4XEoBd6Uoh3VL4G",
  "key14": "2uT5gzxALnMGynV2kkY7VSbhMdjXi6Tv7L2upZLFiZQKT4EfyfdMstb5gpGzmcv5jXarHyZwEt7PeT1A3YfGVkKj",
  "key15": "5D2VKQ9dHxMMrQM4KGc1zgfYTC1xq4o7bou8eEWQ9GKw8GHAwFnwFJTFpYn7wgdKaoL71gyVCbLDFnJQJxnetJbh",
  "key16": "3GsxbuH4j8JUCFZMqKJC4MsHq6LUjMwWySsJhB5snqMDjZ7w9fgBtdt6dz9jaU9TAM1CBExmUReXwhijcTjy31bA",
  "key17": "3CpUtSNmdVY5qWVFPX77jfVcUCCSGsCzuKt9E9ZW9sDj22CdtE4WPE7K6C45ewUVPMuZWdgNp9KUTsN75pwA5iTy",
  "key18": "3aRZCY6HixBjfNGtLhoE2Jgs8iT6umivULSEVSTctQK6HnLNYTHUAFHarTSkruRCmGyknThpiTMUYTmJhVJ24uWE",
  "key19": "ok3a5L4ASL12Jy7mMvd511KA56PqcpmdLcjugaXgCNCFRdN4giCQsxTyDEEg9dqAaME854fgwr98u4SuXRtiLc9",
  "key20": "4KoFTuPbS4zGQNESepvYtokTi4x1BJJTUEf8f5dr3D5eYzJucS3MrGghhXAXeRcqLiUoZ8RjC4oBLXHJaLLRs3rQ",
  "key21": "2CqxDkA1weyxiHgzZW4hJwAtfYtfmxBAo7nVqgfshskP5k2mw9YU2DNo4KW6zJeBSnRorwZQqoXoG5a8zVNSFzpr",
  "key22": "3F9ZLhgEoDrVXPweResiZuL9SX3n1v1tC8FLr6XYmixkd5q69qmHJF1F2oNDqt2NkVrDSkYCnCzReTSEudy63H2c",
  "key23": "4rB4EWQ37RgcFNBX8bwWfAcz3smACYL8PNWwAeh9CUfDegXfeBgC7TPuFgax413yLWqJsRDF479Vh6rYtCVvrKrn",
  "key24": "i9VsYcxv4RfMf4fe6rGobfM5G4Rk6SZiXSHU32FjQSdfBGkzbmTd2dhVrcBWP372eWxjtbLevZZQxd5yaFtpK3m",
  "key25": "5MsV7GriX2AZYrqawYHCPZxyJYFxcJKFWH4SGkDT7296VB67UNBmXfn9rt4uQv6gdLxHqBC6XLew8a1Zo4DGtN5T",
  "key26": "3ugrg2mDSLEP45avZoFiCbT6n3CKTpnkMu1MsbhJ8baYQMXF7Hq8TPQk6aLTQmZ4NsLeL8GmVVV6KCDJpRzmY5p5",
  "key27": "4GobJfw6ykDApB8Xawv9ZuXDjyFj1usnQoygQrqFer1KgYRCimDkGX3vGwxeDv4uvrKDJDxhh4RPYYoyjg8BxHCE",
  "key28": "3ogLsct16dfynYc3S7YDEQCY91fw4dpsyWdoWXaDvDpsJaJi1AzRXqq4YgxQm3e15Q6zStutErhdxY37FpzFCFiZ",
  "key29": "qCNbqLrR44ARxg3fjEBm4SnywfRrjZ3Rp7EGMGB1j3ePX2AhvXrr5xtfRev6rTwuUas1rsckRK1cEEqF2gHsSjz",
  "key30": "4RdxKD7DaFdJykjjZqWyiq2q3FmZM84HFHmMDwkP61S5pZb7wGwDoNsbRcMDuxLurntDnVvrC9o2FNXhkieEvSV2",
  "key31": "43xc8YjJH1DbPfgoGoJmJ6Ah6HdvbbwCcYHdM63WLYWUij1vmiBpzuFV36mGHSP3PtorEZ7euYhEbg6Ncmv3VA2j",
  "key32": "3GS15RMr9xBs7L6YrKfpeZzP5qcPvw4uSai25TqwivhFvy7YG3oYUpRX4faLnCrF4eSxLxQdcZp9rxEBR2xqyVeq",
  "key33": "5ezFRZhMW9m4UG3wBJxQUrE5H9cFUvwNTWJ8EQHVbwj2mP5TXwX6wDWSc16KmXNbNWpzZAkdLvtc9RqCKzCs4Lm2",
  "key34": "4SgESG2suKpQrdtsJSHRPE6YEzLTkee54x8n3N6w7Lk6C3RZby6ND9177B4te76uhX97FS9VT2Wc95XTwG8uryJ5"
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
