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
    "5pKztJ9RdbBLnsUgUzscQuXxPPkqyfhPBDB8Px11SWSTX83g7p7V1HvJQV12vw5jixnqagsbm81r5eBRyojY9VKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odPsXqPcm4jziwYqpgEtjYSm2YEw8XhXD6Dapx94MzLZdMzwxXcCSjcJbM5z3WrACu3gaLSodoRWpbVCpt8iWbT",
  "key1": "3VWTSkm9VHyJXSwe4qDcNF2Z2e3DSMgQGRhJpm4RcAyKveyerrcuqGRUg7359JU5TpzAmVEdKV6ebPd6E8vKwDjC",
  "key2": "3Sp5Frp3iN1Xedt7A5MUVFxBh1mrRrvVunhmK3sEJwMMoJdrNT39Gd1JTaEeueneEBsduktxh54ZXrtG2bzmCWTo",
  "key3": "3Be2RWWJirMfWhRJKvPcfx4XgJzbPYDRhwCftkkcEeKv3BHTw8FpfPeadkJSDHHJ9e2QK1t3wqwhut4Qcq53t8wK",
  "key4": "2inqWDzbiyLK328xxaFxLWBzuv7zK8e9CSNomBZY33hmjhySuAqb5gkuAjktGfBFr1sFafEmdYrRYsYYE2bbcs8s",
  "key5": "2eseMknp1538AkfzLZRTw3seyR3xjXYxHNLypdZkBdBHiKiNMbGhquDyFNLt119M6hfinTdbrXsAtdNhaH54UxS7",
  "key6": "59vWSyeHg3tcEp3KEXXRShcXkJWbbnWrUUDmhpKQJQKwnEnBBTSCAsfGKEUNXyktC2XiTkuwLSngQYB69wezsKdg",
  "key7": "5MyR3oumrgqYQrGouyYTEeEuoigkjTB1T5Dt6sitUsP1m3PjAheanD4LvtxaoRzK1xH4UAraeWmUbNKzLasGME2S",
  "key8": "4YDqeYJd8TcR7SxVxPg6qtf5bEQQdJpysy4drKjZQcv6K9ynkLiUYCV3tfd2m4w3YnbLUqx7YuJuBx4vtnjR7LJm",
  "key9": "3hMNQ1TmnR2QuFgYq3Q1GVkHV14Qb8mhcu27QfQV2Djq5PSg2ZVi4XjDKFF8e6rTu3x8UfphrDVr2ih9bvXZPawu",
  "key10": "42joNFYc2dVEAvGXuhFyYkHiwGVZ6RAiKXBn3JuTQyMfkLpuM6RqstiDnFCAAaYcA59P36tDKPanApvAuFB6AW1E",
  "key11": "4ibamWxtoz4Jgb2BLCwUG4ou5K6sUWV7Xe2JwsCVs2C8NCiKvfSj3T4f73tJFtoprU5ySfiiz8UKJq756uR67Uae",
  "key12": "2deVTp3aeSogD8Db2D3Vd5X6fQ5fA4EUL4soG6rHA9U6g6Kh3Q6KQwxdpuH9HqXHkCU85ER3nLu2QxLspC6rapzq",
  "key13": "2RVWCmL1oVungaSqtuNmMpk4qK5jMr3NeFdC1DSxfQbgaeCno7vLj9iiQ6iSd4pX8iy6pKE69ATbw1TuhURh9vpq",
  "key14": "nqEnj4Ymfy7rp9dJKF7hTyvaGjMzQxCnuSoHokrjxLJn7c2HHBivM3CUcbvsPjXMXdmBSC45TjiYntZAgdYUdwE",
  "key15": "3Nr9Bo8bnwzXc2bsZRZUuC5LH46rLphCXWSr71683JUpaPhU9MeMpEtWNQkqJG9k9v2WtyUyCw5FMLXoeKQhmXYr",
  "key16": "38gcZLv8ndjAXjUSXyJ2iXnF7aTgVyvitiZxXuwe6WVirhfegEG5EYBd77ysf2xqJAT4K27QX7cHmH6K2nChF15c",
  "key17": "2Gc7o5JhqMtR4gYSk6A6VusmnVKR36jUwycJwDP7VtkJ87GByNcHY3CNG6AUY8C4UQwfVp1CfBrs7otzU6KUrDcz",
  "key18": "39rFzTXpExtV6R513Hhs7DKCMWmq3GdEeFFPJYiZnwuqXSrWDGWahxixEzqfRkoau4TMmQNd1a8KYm3M4sxJYbCt",
  "key19": "5fjagDnqRMpu9zj63BxyLvmuQGEneQdzPwwZqG9PeGvmYnXM4fC5nRQmrNhhbgoUjKitcUyZwuceAuDddR6k5McT",
  "key20": "4aeuuqXBEdqW31ui8xAqCLXuyx7Vduc9piTn9aSCPZsr6zViSx11AhRKaUJ7Y9cqYLYoaarHtAsW6rSaQzUScYud",
  "key21": "2MvivNAZaAVY2JTwLx9xKyVpz18S8ua27zhAhCVnacm5qjjnPsWDxUywA6owoabVtAPqrd9YA6HbJ37SzEdXzwFv",
  "key22": "5qR3tXCs6GavX8FGZ9BYsYKMaCrF2bfR5XoHSEzQNJCBULivQmsA3W7bXwnG4voG9V1A9ZKwDrPiA9xSYkvMhQ7c",
  "key23": "4behGQ5RpZb5NuCdjPz2WzPaeP3xnxP5ygqC8i6sYhimrZUETFAiUDweGVxa3VmYsfM8VBMe5W8HVxPYvxx4uQtR",
  "key24": "2SpE87dGPR3zeZrPRzEDkdE6hfdCedkae74qta82Q45p3RDbEE74o75ES63x8pmBRcy6s51eafKGEJKBGctHKPan",
  "key25": "5M9RfAdpY5rJVKJ3YfuPZ7eTPrQeQq5yeWfPvU6K81VteEqyLja3U1qApS2prMMMH2PztWExeCdSZu9TGybVYBVB",
  "key26": "5AWBqWK7KKjxhULi3Q1ikRScyqTainctqACamKD4bPyoPv8CedYaLU3EDPJF9BwCcc32dAffDFfKz1abvXbJaont",
  "key27": "3qLSpK9WFeeapQtnd7VKjA9UVS1VmZgMXRe92R9qQRYrbz4Fyh2nrUo81P6xMem8vqWp5YZzbTVK7mcF2iRqGt72",
  "key28": "sYPd77aMDuVPaxP4UDvoLvagMr2N55mBQtmByzs35rrGgnwL8Br5c6xHX5ahgJZmY3Cgf3bNdmZjB63PrmRmDFB",
  "key29": "ZDexWuEZpfp1xLVVAWD1jmkh7x4ZDEL4dEFdjcKRnhDg8HxBURx3QWbK6ZsAH3KS1PFBwhpvi6p6nfUT6eC3wSP",
  "key30": "2iGiyGVeY12Gp6AMta5kHrZ6Efjp6A6qi33gs9eb56BywLCnJVymZauLJCTt2cBAX423hLmxrnrDd96SVTFk8ZyT"
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
