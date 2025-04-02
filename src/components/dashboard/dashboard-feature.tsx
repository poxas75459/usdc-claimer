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
    "4LTz9NNFiYFB3x9uUjk2Cp86JWtQptFL3wcKakgYH9uB7b6vJhtPoSaNwt2P9Hz7jRdit4TrNQeMBoDqbpXWCuko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGmwJv6FezJcxn8s1viVbMMtTN6cCLjHUW52WMA9X3LCtD93Tv7XV682HDKirKJCXr9H4Gc3bwCi1r6bgzi7MAU",
  "key1": "4aS9uti3sLd7WugatM8mLgnWrMvHA8M3R3SitfCWVivoWjdNhyQVTv7qdgkm2d8dUBB4tWq9cPQtNmu1JEMBqoE5",
  "key2": "JkuMSGBYbL11CaS4Gjk4gRbriQ56wwAEFUgn4Vrm6Hx4P7erYpaD5MHWxJG6qQnV7X6v5dQCnazAzPbwCB9h1y2",
  "key3": "5ghZw5YeDQdzBtMP91bPaJCbmZTejsbYiR1PyeuiPUA7mV7eWMnj8NZW7thgvVe93WAxCPc8f9JpnH2zH2iZFf4D",
  "key4": "43bY2vfnG2EKR21bqGixgRWvnoTz6iC6WyALuxx2yXvTvPoFwgcdyLZFvD8E8PiZUUJy2t385m7WfVn5AmtTz7oG",
  "key5": "5RWjTrgoAx5oM81nA7eADroCTVQg7axMKNBB8oZTqLuDykrfVei3QueZZrGQjUFTmYtk81XAbxT9772t3Bw7P9Vw",
  "key6": "3ig8VZPJirdi237SupCwF4gkhmuvVUCheggNfko81bqKureow6JUCJbk9xW3R8Qwy4WE4MTh96p9efePeNU573KF",
  "key7": "3QqCa6QYfZhAB9VVCBbuFtsi1R1PwXWmXkBcvbXzbJqRvnE4uNFxN11L7XD3be5gTtQ1YL1EnKdnKa5uNj3iaNKW",
  "key8": "5bXpuC15sfZDnuPjupCsnrSyDT6Kyu43KXencAtje3dsDbkQeGUAbNrTkU54TxtnZpmu7uoiJ1QFQo6zWL1JcN1M",
  "key9": "4d7rY29rv13nE6Wqb5xPVd6bG7zNUnx9Y18t5cUSCEDdLKqiLUkTiBJzNwXSeHKYaGJdjo3DnbRjw3jDH3m1mTuY",
  "key10": "3tN26UPv6teBdX6GbMvkWdm52ygcBTeT5t3oqEAXm5DF5MLUnMiiFoEa8MNN2TsnF8yeNULLk5yKAaDEFR5Uxz6f",
  "key11": "4EkMvyAeXcEL2MorBNUCkLCj5Lk8YX225e3PoEcTaSS6PyPa365wC6L1mNBEKLUK368kfL5K8PSVN9w3nDCnFXEv",
  "key12": "2JxPf69ed1hG8ZCUc2nQBsdtdozSmqVhGEgtmu4bK9ec8PrddRRbopcqNdUJ4xxNnPd7dATw7rcsznTvVgfXzt1R",
  "key13": "5cpfsFqrCHhoKS69nRaphebFw9N1edWJ9Hv7xcMLsAiRTi8ZGRCsE84qpcPsUV2kK3LL91AsVQf5tdCAW7yA5X9B",
  "key14": "5WgLbCK1Kkk3s5cG77jjxECAEvzAyXXArobTu6ppwEc4pa9tibig5RYEx8HBdG7iP6n372UV6eQyhqEiTd3fU9CC",
  "key15": "5wgLqHnNpNEs8qgweTYztz2i6WRADCxc9WKQjDJpK1iMwZNRSx1KfK2PXKTkuwvGjtB1VL9c6o7X5kQQ2SoRQJby",
  "key16": "4D875ZiDkf63C1Fm9X9QbrKehesvnd6iD4AxTmQpThNCv1mqEA5RUnsUuFF7GMUB2M2LPasmMBYPkcppD7LbsRoa",
  "key17": "sUq1ue9nmYjo9HsX3vavuFuKQYXvoaVRBkXEC8PRzUvbe62z35YuCFJnDLkBuvvy58owTvqBh9MJ6m6Qq8fNwgk",
  "key18": "wMHCPXQjK6c6xpqTytDmPvxvQXhf4QQZkZXSQ41cyzr4KeAH9HvudGwLA8JVHd1ezLbKWoGofK67bncS9kWdPx9",
  "key19": "3TCsN793NrCxAzx1LuPtSn9nupqnhjv87ZjsC6sk3wfveqTnoH8Ev8sXCuZdqKtG7PBjmcuwL8uwi8NaQGpjpQoa",
  "key20": "2UCZLHFwQ7NKnLxdJ2Uk3NVzvsHsPw7TeFDowyVYHeDz5eViSBkQ83cJauvuCA76EuYb6CjMkmedYE22tDMro9x8",
  "key21": "663PBSF7Bn8D99KgYFXH5EbdfmadTAutLkWH13dXKFzRon2Rng5kicJyqhAmnwLnM6WBrX1AxPmXUEZzrFRyzCty",
  "key22": "4CpkJQ8Sm3fTLvsSPvuUN4yyoxBoPmhsqh7kLyPobqWnDk3kgV3veVYKVXNdpgeLwjRf5gQPoLfBhdhx77S6fZQ",
  "key23": "8YRtCvbHPMwERQmpQgRxczdSqf2b2HRquT3aXgdsDzNJHqk8bYqsBcTmPGEoaRDoic8XHsWmYbk7PWSdVQfSo3K",
  "key24": "4AbG15rgtjqSueKjF4Jw4bchaNnWMyhsm4U9nkHoyEdnmQfcY8aSdrC3Awu8veBRZxSzS1KHvppVCn1GybEPpRdR",
  "key25": "3V6b4BKSV68tsUoheMNx1iwfskCfmbcrAZyMR4Ppxp3ZXJMz3JJ5eUS6ERH4b9KNFmUL5jTnusdNkhbgSEQdK8rV",
  "key26": "4aqXqkSTLwKXBzND3R6nSBcqbH7pd1R61RcE9whTvdCXKWy52LuEfudN3LDk1zvzgKjzhJTSVcXQA8f31EgpbXQz"
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
