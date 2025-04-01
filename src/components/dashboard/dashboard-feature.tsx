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
    "q7sb2KYCqAJAbgw7dfSEbSTzR5t2ahqqQHK2UoCuFUjWrtY8LFvyNqQ86a4TEn8JH3G69ejNxwHPdTbujGT3M5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPSqkGrEoLnHWpu1tH3T5E1aTaFxi6qFFhJvGxuAJi26Fz8szM3LFSTu4r45QUZcJVMU5Cy9q7K4fzyjVApUApk",
  "key1": "2J3jexd57nFFmh5WQUB5e5auQ6RdN54ksohBsyvpUbvifdkSx3c7krGZcJSUuK42kDZEcaPmCKhUx77JFeLnzfav",
  "key2": "2iPGdj8KmZAkD66rqxmSwdF3gd1a4Mf72H6uFhVRRN2SK69fMsrbMvArhW4UnPCdr4cyVovPKnFTEcqJDvKha5mu",
  "key3": "38VJkzT2pP37ju2kWcniMT69caXge9dvVnUj72DiyRzKMjGynvrvZQSsSexx1gZTArjkdq1Vmea3JvHxLshQGFBb",
  "key4": "3JZ43FbmkbosbDEJkkFTzWWbx9wCqMNEc38uXGfm9fbUZ4aSH3mAnNnAr7j7LdPxo1fNbb35WUYnpyKfv92tyLDk",
  "key5": "565LZNe4UsZs4ybb5sVrh7SxXvXGThoqyACgqEsm3Jezbk43QP9zayvSAGqpG9P7idq4v5YBiTa3nPj9Q4hv81UJ",
  "key6": "4BmPeg4QkTKFyA1UWcQ1zRS8yx6CTQjjRdxgpAZKSUZKas3jSoMREkxQkxjephh8u1CMNgochHWVVAv5YQcJSF7u",
  "key7": "3r3Qn3vZacd98SSw2FLouznF7HbaLZrzwsjoKoLNNackv7Fbdef7mMzExw19y2DLdxTNnpwPfvXq4a5dz2Vr7s55",
  "key8": "4GAt68U5vHVhzwkMMiadf22etnwLt1Y27LHb7hNJBEZzkta3S9XVUeWgTNWDbZkzf7U9kDyvQcwigeD5thxjzaan",
  "key9": "ehztWvtYfwKc9KFt5Hx1LapiDnqDnknJv64WxvUuPRDC7GUPvCC7yiEbt9a1BXMNsHYrJUEeduAEB6ERk4ssRBS",
  "key10": "5eMvQvjvN1PNUWhLr9x3X4BPRgCaHtkhnmkzgGkVUXXE8Ffn21Qb52CjciiwQoKqnydhEJZbpLZXLCCD4SwYbrg2",
  "key11": "3KFiMoUEJF6EtCJuYrgXbjz37P2SHiRboZ84sepMRshFa6i3MLGS8z1CxQCAEbEztk3VLToMSHG86tRioj9ULzjD",
  "key12": "5u5N1Ru7EmY6fjNM2bg5tCEBHaJGoqcnW4eFxfkAxgWeUvUsk8xgGgnUvFAhzodfUsg5yKeqS2hRDXSUTdyftEta",
  "key13": "59EtMiHPJcEiATraYeaP66ccn4SHz2N3ZRTMc4NtbmRnoeB935JLgPfUqhQ8bvc5dWEG9UYFTN3SFvL4UPcMvX66",
  "key14": "37MLRaUQpHKZ9w2ms6RE2KtaqaNsSkMfdPKWGJnKL9Ha9ELXrByJHNiJsPdqCA9ARAaD1NQ6d4wFoGKGhLuGc7zM",
  "key15": "2BgFksECVszLrZyPSMwVt6LGJ1Uikb1wgFWawXYJ7DWJh4pYW42cqw6K8x7vY6xY1JQtKZh4g27Nnrs9runGKCsk",
  "key16": "s9cQDfqZv4gKse7TsXAhsX61zbnHr2Rz3gf8zEJkv4424C4Dq4u6UU6VagS6J1ZKA4b7qRHpste5gAxxea9Y4Su",
  "key17": "hmu4voBxjvuzq8ou7sCXL2MwuuYPKEfeZ1r274zfq97kAj6M2HyUzjimNMBPQhJZ8yBkRTYRZmybz3ztkDyYFfS",
  "key18": "3VesmjnqfTZTs7NJ4afDcKpSAGJTKkXwTMzPWGpoXzwvwyLhaWd7y5f5kw4XCi4UM9cyKVCL1KBWsgrrUP4u1eh7",
  "key19": "38oFkAdaFdKxk6Pra3iz9sxQ25DG3A2zsWzFvisuNrUReEnWbaF2S4U9My9jP9CR1yrLA6fELpw9LM9CRGVeveRC",
  "key20": "49HFqJqYHSY5JocYnkFGzubp6MpK1nq5hstzmJgTz7bqXRZsvZmDzB62jobmeQ1JztzFJoXB3CK24tgjhEbvgXqR",
  "key21": "3op9kbKhKjZWEyCYDXuc5z4zXr2Cn35Dgew6E7MaDewE4Eg7jNZ3WRK3J8uq3b7iJRHuPRbrUPFrz86WDfuc8tAw",
  "key22": "2XzRmYVy8WJofr4UU75rggUnmm2CoxEzv6VxUV1wLJqWmTeGskVWPRCezeiEmjbDxkSCCydaR2YSocRvbqsEdvJ4",
  "key23": "586ABonbYNt7kVBunENcQ9Tmk2FqS19UTsN83dTJFajYRopGcbNzp7AK9onfQviJTcPpr7SiZuQDoCAf5j7LUR3z",
  "key24": "4V7Ck8XEXJBCNyLuAZ9N4fXmnehMgMXYgxupJ2H7ZJtWNLXxzuFcgrwJJyACn9TQAuKfUYHVwrSX5KvCgkmmSvpB",
  "key25": "xNvQigo9vTSL7n8cPNQSA47NNeemXyDwA79TBpHFupnLD8XgbdQo8rd9xaBFjzNhEbTk1SEiNKN6QWbNHX3Gn4V",
  "key26": "3JaBwq9TMc8aQYxtq9koK4a1mo81XJsVkYFjp7jyXBEFWXcA52y1TXeGSuQvFBr9HobAnZGGVfJgVDDF5BYqdYAo",
  "key27": "4YEtm8vy9EgwFvLDwSKhRGKNXP4i1X8zKFTx93TgE4bbP6iintAC9gxYXx6srBSP8xkm9uuVxFQCLJQYh7siVVDy",
  "key28": "Ec6WGyr9EfkXNXAi1AvvqEg7xkrhYkMjiXUZzLgRcrapD3yc7UaRegNCP7qXwoj7y6JGCcGetcSibuBmGdoNCYK",
  "key29": "3TnE411qMCqyAmvuSry1Bz9EQtvKWTuedaN1DKErrGPYgMXGEbm3F6gF2YshYinxYDhEUYFfZCobzZdK7MtdiTo6",
  "key30": "5cybYuy2FzZhmL4k1ckpjdWSi7SoSwtYVqHaAoLDgCcMvzcYWiyyXH9pt5eioxTNH7QDZyXvcyQfdF4rFVkFA6ov",
  "key31": "exjdepDeMBHkvyAf7wRd2KP2j8HDYsg4kUTkMDTZwEZeCyf6CEgNRq7oYEZK1pmzR42r5Bpb1DdMLqLCXk63TzM",
  "key32": "3ps4c5vMrqv1Ac1tnXvJ2VV1ZkGFRPfVjvRGx7D4VRaGUvnYHZeMqVdwRJXyTxprPfsC2EaFSuHuayCL1V28S8eB",
  "key33": "5YjQuZmoV5JEDx6Tvu97DKi7AVgfcSzVkuFy6d4YJYb3a5RAFxZXvGBWen8VzXiFyGbh7QEwXBcp5Bgiae8cGi7w",
  "key34": "24qty144KaUJECqadCx4qjQDSYEZae741QBPAP8B1VLRmLsyxwPNc72RP7KYmPiK3nWyyycgmfPLbBfHCHr3C2Sp",
  "key35": "5coCf6hzzEfBFStJLRavZXnyoKy1ZEfp2gTP2qkthdFbaEyiggQoLkjxDot6cbZJvh4aW24oP353UQ1X9gaHCU8r",
  "key36": "22jy4uHedW9R1A3rZiTGxJwMqG3WubzCLXsYXLCfcZm6nZuz8NLpNvU4djuAj9W4JuHCXXRcJ26Tpre4v36G3uXJ",
  "key37": "q1TTLMoDFrHx53UKjpjjpqbftU32pzQeeTLUQHHzq5R1NNvs3tCAuBCYAywSvWqNhNuk3dXrxHYnBnubmXaUUZC",
  "key38": "22Np1Z4GJCdyQRjfL7g2sdCbgUpQLCMBSqQrbpxhBxGr2oZNfSLYazSNDUZz6PCr2wT9nFh6wXYXy2ecUh25jrJw",
  "key39": "66Nk6TPUApubnMMJNTQCy2z5ANa6TDDMpEMX4eiYW5tZR8vq7HWWtvLzhgBhUG4osj5kELpx8BU6UNWmGRi8HuQY"
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
