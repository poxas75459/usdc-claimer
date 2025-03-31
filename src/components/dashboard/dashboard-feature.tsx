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
    "2obG5AnhsAyAV3PMzxrkXRodskGLWMtdbfipsTCUfPTzdenK7hDt5ZvLCAVtCV7xPj4Bv7EDEUgckeCVAuBsWsEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6P6dQCRTXVC4ZuAnfKU81gGxYzDKjaoaiHz19nWonLPkNsRCzENji7NcgAXfNXUQ4rRMEFNzabNuqF6thk9hK9",
  "key1": "4DkTxoEArpgKzWWKbzQP8gPKzUzVViQXz2usYFdKExgxGVhcuC7SEGvJAzLgMGwK1LUSTSXrQZmnUeiqgrwSgTWR",
  "key2": "47q1MCNBgtYmSCS5yKP7DpRCd74MfXuuvK5mktVEwyHaG6JyTXtZAdJtWWvDXL7kQZ2zX3MdEVsv2nFJJfS7fY7J",
  "key3": "2HcKTP3xJavb3nbbnFgLQmJQ3WH8adLKwYWPT3kzbcCui6Gni26eUD76dQLzrr5UmVQ7XRikkVXnrHzuQBqxQpQo",
  "key4": "5QmcmfYHrHZdhCcdKq11Lf7HqjNd6uLXAjvZJsfK3SiDwbgWv6kLPUqWMDGckegc32GgdWhHwUocxP6gMcWmCeJV",
  "key5": "2MEMYZMn63RnGzHL9KZztQzyfDEQFhx2e3draChyqZaN4EXsWvEo57tNwaM1VmjM3tHgnTqDL1wBJyFPGY8c4GAv",
  "key6": "5MXYuXacJb9uGKPb1bNJVhTyDTPvo9MtpMS8EKjcwkonZA8EXue38cXPJV2WprQVEaC8KpKEXBbaX6txxm1tgfgN",
  "key7": "5tQFPukcxdjUZWkhW3EjU9gCao25CkbJFdQ4oVN3s6Bbwo3mFDCDoJwfJn4BUDDgjtnunn82XLjt2kLoL6sTTzer",
  "key8": "2D2mB3B9tzaRdfgmVmkRjatoh3aDuEUpRa1q19onamDjdJTdhZcDjo96kS8X2KsYEpQr78L1kHDYSKkKfiRxAWXL",
  "key9": "22z9qtGuDgncYyYMKqRj7qQw7JhfCxWBwRPKyzyQBYvihzyyKpuiwkntYXJKZEtVgaQb93pMXrayVA6MQHtxCwti",
  "key10": "9vEhR4pN2HAiipdyAgCvMokPV4ow2RoaZibyhx3ijguLEqCdLmJEXM3ZL25xYHgLSCTyNNabTa8ADnsuvsEzDrR",
  "key11": "41SLm7GvNjSkSJZK62McwfyQqkgEQWPP7R3AHJiEtMev8oQbLNBUbeCiszyZdAi6unp2oyLDC4JHW9592pZ4uHav",
  "key12": "4CUXDzB5VLsE1xoNVb77Lpeev1TK8sJc8muJJfixXujJuU8W8Qjpe5M9HaawAaMqbNHmX56QgM77EkmQ6FxoJU6k",
  "key13": "LQaSizrFVENJiQpALRDcbPwyxVCUdNUh1GbRbtN5kLSf4xxgAVDjHGAAHC8mFjg3HUeZHo4pX1y2aBFpAb4y4J3",
  "key14": "55usyU9fbR3tRibjcTHn6SeppC773Xg4haxWP7df8vzaPLiPM7VhrtJUK9yURzX25yQwYi6m9BkmmqJEeQSomvnX",
  "key15": "3N92gkgMjM61Lgqxr2MuQ73wJdiQM2NEm6TTakRoG4sBuFGYywGKKgXrxyKtiR9Y3BwG9pCJm3RrVVcKftf8wiZc",
  "key16": "3nZjHiBYfNrSzumS9LKL7KGzkk6Vc8SkezcXPeT1yioiGHGy6TCtiKFLSEcLCxCUbk8zzSrE2cbFidSSVRUizLuh",
  "key17": "4DpGEkR8Svtd57xXUDSvjXT5cEzfU18RZVJzQcskTCG3xQWJPWguuJH9rio51teLYygqLb9yu6LdMLB7poEqmZrE",
  "key18": "BNMyT9YU1EVvate7WCCu8gJEp3GAoN3LnFEKw8PGCevHptryAftVba8TdXwkyr9LTjC7jbmMMqSWXreEtGWH2Tu",
  "key19": "4i6BbJhYvxmuvLWSPzhhuSWYEPA5BygNEUR1nJRh3zDt51WCFcr8VXmiuMwsR4tg1yy1ndgc9RdycVESGjeguYRB",
  "key20": "3SeFqtsWRapNXUW3kcfzs68Kof6TpvVgr3s1rW5TvXyer5p9t2dPWFdCQbZbLPfcLWij1GWPUcPRbABMUPAhs4h2",
  "key21": "38sHMrdr7bxyrcsg8zB6hkjdcQUdfVmELKU5LDpFRNQ6jPsJBuRn4XR2qx2pv5CPMDiwtTXjyp1DEDoykfe3sEMS",
  "key22": "66h3w115sP3888iqMppGtPhu2UGjuHHkA4im2H8GhZt2Ka5fpxftwjQeezR7NrFk9H4nsnorUi2bZXG753ZnjqSX",
  "key23": "4mdG7LuGwcdofUCP3YpnrMRPKAMrpKdKgymEC62V278S9yST1xCgLU6GThjP4nmVDrMfqbNn9VZ8aEYcX8pKMAhe",
  "key24": "2fPHTDaEhEDJdsAgs5cK9TVWe69bNLKnWSmtYVHoTExUBdZYv7CiWDXbNYCkMJcFQd3ppbmfGfNhwEaR3VU4WS82",
  "key25": "21SinxG4871igHBWdSw6Gh6xgipxYBBDkpzTUqxrifGcdU23eVLfkDJdTGrYxSkG2zJDJ1kXbskFmXYebS1GtXv9"
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
