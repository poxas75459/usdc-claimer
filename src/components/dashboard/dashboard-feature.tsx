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
    "3tMcEVaWAmCtpQ55dGUm6agVLmGiTkNetoArVq7J23c11saXKReyrNQ6A8EMSYD9d7n3KpJQZzuoZAQi6E89YDDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zn2Rh3VjFskaGTFEu9dukYXM97fqtrAq7BYpzKRyLrRdrYwd5kLjkHKgoTJm9mXRM2gJJJN9tHekVxwudQ12x57",
  "key1": "2FkgkiNETkdcxypRHuNBudi8WYZk6STW6wtrE9ZXF1j2eriaoYhHzWFpyDRowS2gTKasqdHYaFQRnHe4pbX77TYu",
  "key2": "3VERDjAKKzBVUxHhGmyaSx7K1EiSojwUT45CRcd535LsWFgxFWciWYaF2cKuUCy4bT4EkuuNEgrkcTjN32Tn8ckG",
  "key3": "5ac16rGShX6jL88eQj9TKeiR8ixVt8HrfnAmSZVT21rm4aj37axGuQ5JMgG8JqeV76TMiPb7QBZ7t1AmiaBSm8cs",
  "key4": "38EEu7oJJ95372MvUonASgV4FzDSSse1i7d5K81oZDknJHGdA3Mzhz3WYKDPQwHo5Uu11JCF9JNcXUZMxQXJMVHW",
  "key5": "FaHp7rZ54jgTQWst7EibY58kQHS23k5bQeaUtFhVTAhZRkfC3Z3obmnsgNLGxymZ5dzVpBZnJqssoWicXphbNFh",
  "key6": "3Qc89t6CD7sqsstrAuEueA1THsBC65YYb82sQsSqqU6yDDRbH7mXVA1xp8H4S3KL1UQLdc4bXRSVoA6aiCAGEYMs",
  "key7": "77gergXC45hZShdLDDeEeLXpmvNCsE2tqFkgZ8gmYzQGQUTA3QpGSewpduCY82RkQayD4Zf6Qa6QoEjmFLdfnbt",
  "key8": "4ytRfJyQBaEUd4J8rWFYcNyYvpCFfNjezcxNKtQNwqJh2Mo4ABtNEvhH5WqBZ8AoiHV8PWrwP7ERGR5wKobzwEpn",
  "key9": "36vLXfHtmvyidXf3cxiaTpf377nqG2r2rkVrEZS5sVtdo9WkDF9gjZDtmfKmXVYCTkaoXnsnr5PDfDmKMvoqhHtG",
  "key10": "3836TRhUByeLvVBtAEosCUHJUR75aLCEMcwZvfWQo938EBRKr4FMBUGsQ6ef2uWHdUGCSzKPkAkGqDGpq1AkAcSW",
  "key11": "3Lokr4BUKgwzKPusWm13KzrSVD16PgfbivervvPc5FUZHiZMPN4sF6VDu7t3Ms657VT2xjauFgvn5zxCRsVZvNe1",
  "key12": "3hArrjqUt7wgc6ugH6Mfx2Kw97D6vHMnoX77rHPbF8yHqbYfNWbrvFLjkdyCUHCSHSZhbzGDamnVtZNcFMQjdeaF",
  "key13": "5HPWHjubG9x13fcXeqQcdSC9YU7Th5HTfAvW6tFWPPAPT8LKj3tPHiLQQtYC3W5SmssXczAdrUALvRBJeBUfDLCf",
  "key14": "CvAbzpR1ChiRKB1jYfw5cz2GsBWs1fvJyszKipMPKwhpiw1HUL7ibAuxftwg8YHG3e3xg7qeZ2JcH3pDbMdyx3T",
  "key15": "3ZVh4D48HVzhGEXaSVBBttTMGkFmVsj63ysjLsnHynUkDjrpXoKY2QarxfpFHrChZfyWvkedcTbCBjnh4Ra6a5uV",
  "key16": "25WUzKiNYccjuMrRsrkWnmaGqNBv74W6Mrn7GEVZabNWSJMrBufD5JJy44JbzbXmwZ4tPBB1ChRBoxhmd5ZChksL",
  "key17": "48zJ96Qve5DyA2HuEAPaaxvPdZPG4Zk9XutEu9Hywu3GjzvJZFGkCArE9Rn8DoWP1hGKVFLC8kduLiur45upiDXr",
  "key18": "xqiSLMbyPyi6yaEcZiWWSVgXvAdC5yEEoP8gAueT6QCZ9MkwKeTLqh4Vo1N8h5Nrc1W2k1mVo2Rpp7rTNiKqd7P",
  "key19": "2fxwHQzRkw1Uen3VnxPPYQGPgUxVT5jszxftcVNEBQgEc9vBSaAKDP2oZpRBrTSy6ezZcLpTgjrfcoVaeXFGeiWd",
  "key20": "64n2qVX38wPWeuvzwMuY9sEBS4A21T9qHvt6RqVBEnFFFRiwScwQjA6bhy3u1Kj8wLSapBWwAPjs283RxYAfHBFx",
  "key21": "5SPqHAR73HhnEPvhyN12UxJwcngURD31UK24gfK6VdGTcqXt1ouDKRVYW39LVi2cXjcWiNRujtmvTuSJzJPdHzZp",
  "key22": "3XnavuZYD49wukXYmprMoRsVy3F9YL8gz2HCLoWzUkk6zNsPV13YsU9573mwtgiwnWqHPCaNeBqifBJsjhHJojGk",
  "key23": "4JfxEjz6prZhD19ZnmuyYFbHEqETickHT6dpAugaFe9sTxHw6dh9AzG72REuZqNbnyw7UGLQHav5z4GrkPgcMnTg",
  "key24": "5FZuAZTFphvxnCY6of9rmpjwmty6nKjiLiKVFgc8pdzecGonCZAEMPoKTUmecXG934oLLJfnkAgtse9rx49zUwMp",
  "key25": "3YCZp8TQKxEjMAx4rT3YVeFzcSyWSu4byyg7DoDttWAMZZWwxSjbKKLvpwG4TVdCwNsmY6XGTCTiejsg4zGbNQvj"
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
