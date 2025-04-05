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
    "3PrbUDHi4Q2ET5MX2WfG3MqgDxVMnThfyoYtrPfeFyG3aeuSjWCrAGidoPhcWwXEKxHH1ouGhvG1mdCZNAw1JT6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUVNcytJWmpw7R56LPKEu1SikcwyC8TE6MHUVih2KVe6DhCKczuTBRuCmjYeJS8E9jLBRraoeT4JD9xxBJX5Qni",
  "key1": "2UCCVs8oqxCTUrNYwWqDnKsVyKB88AeCBksGpgBQrXVgm7cK2a6qaUjnfkb6k56oF1jpfpYBwmrksYyw2aiK3V2C",
  "key2": "V4KRphQGN6MPSBL7xvTstavQbgxYHUdjq9tst5XzJDUXA3xzsSU3SJwzCH8L2fbvfJb6cMm4c9DPgU2L2R8tRBa",
  "key3": "55xP1Qve2wbpT4FhHTPQVjbAkfGphuciPmttHjGoz18U7TVRLCRMuSKPRapC9LEmAB1Kxotr9YLGQKKMvsehB5dE",
  "key4": "3g1FyCiVHrt2qWv6oV5GUdUCgEZLaU9WDhypnYfwDq3o1H3N4ohwiDeh3JCnb75RjJmTAkNYBdy1PWdyPpJcwtr2",
  "key5": "23CouSuFniS2RrnRsLNWQuT1f4bH9vp3BkaxiNCumKuQKRdoYGZEeyGVSQqFpuHc8x7JiT8G8Uqt8X4FZyUUS945",
  "key6": "2UTcTDTvZN8EPmsYXxH39dS3sMDUeZFzu3Un42xi8D4wYekQcRYQFXB8cu2x9wtPmR8Ffsgfy9A7LSRPBNXmtRHp",
  "key7": "3ph5BsR6PceUxtjZofP6SpzJ5KX1aT9cNwwmAb8CjDSLJjaM5ZdvszCe35wXRp2T8RQzqPi8vwYR8jbkMGRcZBp9",
  "key8": "3n9aUAWBcsD5AiJnNgPabotsMYK8Ufg5Bmqs61i6hiwvo5V1yUS4UhX6bGyu5tEGtnZdN884BzLbwjJF1Kzdf67Z",
  "key9": "9CHd43gaKU1wyoGNiwrPvVevecE6qPffCtkuqFcd2mVCQuwx49gG6zi34SVw3Zhgwv3o69RgYTnhtoLRkXWuGvk",
  "key10": "59hiZ4wCpVHDySeeEFiwyVLNSCKjbKCXJ7zaC6vy5V9QmNJ2z8UxAZJn3y2wKYHtKZSPFaZU1fWd9nc6kWULQdh4",
  "key11": "3aLbNsm1DBDCKH19gJjh6iv1VtFnzPwz8qBJ3CaAR59dpKz62GeH5go9VvGBruCtkgkfhhXNcheFJ5CJ8aEsEp7g",
  "key12": "4LD36WufYB5YaytZwra4RWZ99fc6q2yzm6AyN9cLfgmkC4L8GMJTVQVpspxViDA6nNavb7V2kb6vdMPAitx7ZQ8z",
  "key13": "4VdsBCRs7XLh2mTtLJ2Fw6ZU1zJW7f1if1jTPcHmx8Etr2MtcmXTSnJWfqPFiHa9zAseMFkDXy38zUJmQRox3RGf",
  "key14": "zeih3GKztgdZF99Cfzu8JVuBFzKiRSsawupw8Hg7XN8UXzpsdNin37R4C1BJHXVdF4xD4ofhKzY9XH5cro8gy6y",
  "key15": "5wJkaZzzdSP1F89P8D7xBAxGsZ6HJ22FKGvrN5y2e1uqvFAgWFLPaJ4dMTBDVSMGRxx8m69ZLe8p8AxjFhMjvW3K",
  "key16": "5SCxWwG7gbTtSQ9bT6QZsrKHKoX3r3H91TYdmnqf8dsi4m3tEocDBUYKk6qTA3tfwbBAXvCtGX7JEZ44on9VQwFz",
  "key17": "22UsvooKiRX9ZQPhHznRKZbQE9tm44ezHD7AaMNdG9Y9E7u6MHhy5SuxGKRk3hSbhLfXQtQGKEhSA3JaVttvqqA6",
  "key18": "3ueWmV94a3k2cWZFkFWXYUL2fzA1Xk9Cs6hpYjFveBZUCGmo6sK4FZQ8msYpDuew25ngJAwUFiV4VLr9oCZscWs",
  "key19": "4Kq72a7t8ZQCC84w1kkeumHzk9KqgnFUcy5uNkRgzXg7bNfsbqX8Ld4Yvyih5J2yrrDP2NSrWJ2GKNXBAqK6PVze",
  "key20": "2aZXFDWVD3ScRUzYWg9WYaFPAGXjA5uqnvLXbdPq3HpfEa4MUHN8FwCtBevudajDaqhUYWRPHiWS9gMQPhPDHrjq",
  "key21": "59xymFxhdWSgQ72DFm4UbDqaZntcioL7Gpgirrbm8cuadaWtqLkAvFUZ1BdFPVvmHrXk8xXLj9AVcHbjYmubyC7R",
  "key22": "5w4L8ZXDjCKp7YxW31XhGG1YarEjpucyJYfbLuTiCp7sCXnMPe4nVU5ZfvhAFkyeL2tCEfBGCb4Xq54koC6qAbZU",
  "key23": "3W3odYAKuNSh5eFMkJ8m8om1GcDSLYBYNWKjy6Kh4SqrsqLErVKVWCeqZSbrGhPZxmp16QfMn2W9LuDqWXQUjTWo",
  "key24": "Q7UjkHpiSseBtW68pcahFe718EHE1WSVJEhGiPizHxfrTXvXgScQaRhfePGjAVLVGN6feVd9vK3ec1zQoD9SJpJ",
  "key25": "4GpSdpk4ppDSHf3Eqw8swmiNoZ6K6SDgEXtYr3mHewAbgCkFefGivUnWPhMMVFSWMJ82dHjX9kdTo3fSuJF915vP",
  "key26": "3FsNjGh2dsUdn3gaGHTTVJdrnwgLpYiuBpXczdmenLek46dSM3m8igvKawkbEVXzbBqLWCsSuM96Ri6fddoXmLxZ",
  "key27": "5nycuKfx4SPT6kx2jQFph2r3mQWL8N6GNEK8AJNgqAjR8XgL9QKmfQ8hEE2LaG62bokbunHn4VsvbNk2FRkVytb7",
  "key28": "2GUCtDMas3tA4W6iikLNYnALCtmTjSsKRAcNMNRfv2TbLykxYpsAAatmPFuiv3jpwhVd9qAZgM5avFqvypdCEyW3"
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
