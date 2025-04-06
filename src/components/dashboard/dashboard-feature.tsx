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
    "5a5CtWRynZPu16uF52DnesvqTyvx5vy8v4fvNiNxhjRubdJawbjYoBR1hDBT1VE9JDzeTVRWBQ8Z3QZj5X51qocR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzzUkmEbm19gGKJ1cCVdrQbFptrAj89PTH8XucWAzYrK49vB9AEKbb39YUa4x2QZQPCGb7eEgCr6HtJZS8dGAGz",
  "key1": "a3xgKBMxy6jpeh1uDsG99GCQXxWL1N1A9239xNfqw7c3rTNmeqjtAP9o8L6ebsugx9ALuiGdyUDc9X2RP9Ccfdw",
  "key2": "2QeZR7r3xfrJLEmJVSUptahP719bmLL5jZE1ZXvQUNFPftBYtRqcDTVBCmdNHdpbKbkyHA83zTkyhTSA3mc34CqP",
  "key3": "2LQ7y599ADLpYpUKUcfjDm7qeYTi4vvBwECwgqyt6PrRGcjnSA2Mbgic6M7h6h3Q4zHDZorGnwktipMRJhQb1Pew",
  "key4": "5jRHdYfGGwmNjSR6eKVc2q4xZ2XZ397trcpA3Jpr3qq4hoDEzY9VSsThw4cq2iS4gkoJxh6bEnS6WosKKeHHyxeR",
  "key5": "5joc4XVK151yHLMwTr5nuT3PUNgPCTuiBWay5nGXoqBg3F4hfShU8Y9MnJgdY3f5FXwAaKWsZV6t8x4R5Wjtugs5",
  "key6": "3V1aDiVYfZiVrEDzCEUXQVcfYyBpRmajq3EQSBtRfzdsqYyQjFdgHeTvTxqxyuPW7XscfbzZY9YmS3w3cWfBgmZ5",
  "key7": "ADiALHLvvFwyp2PQGjVo1EDU2UZhYEAQqh4TsxTXGcsySGJ41QA9FFE5VoJK14qawSCLB51P5Ms2tYVpRqiYzGX",
  "key8": "PHjC9wSA31Apvnhgu5awKDdw8RRJ6ztTejzPHmA9Be8D4N3rftar8KK9joxM2qwtHnuJyopWcQmpZoR8iNDQY5w",
  "key9": "2EZS1UWhdDZBDwX66ZLA9g1P6E1ztjGt9JfttxfP3aojxXV6TeNq4DrrRionS9EAWbsp7HyxKNtekAnTT6eW6Ben",
  "key10": "5CtyXkKN3y7buUC1nxULkfJfadAoHrtBfzWfp1i87Bj6v1QJhgvQ4LzuM57sdy8PE44j7XxnsJzPuuo8BcZy5amz",
  "key11": "55wbZV9ZWNeKSuMfue6wywqDB1wyLxBQGAckGta1QRvBMqQTFR6pNc5ZqdY4m1vgaY2ZDKZybLXfQCC5wEnGX55y",
  "key12": "5XV3gfs1YKzPepCDVzkwvJzYzhWht1W6XAXAmD3rtW3jfd9BnkNVSCtiTX9ZgjP8qm6dNkqdDGxMiytQwkH9g3in",
  "key13": "5QjtHJqvjx3uaXmQdLsJZJThAit4Z49LEDUiTWmGxBaEzEovjPHv2yeUUTgec9A5rfdUTcT7VTzfytP8aKyFNxx6",
  "key14": "3TYBieQVDsynDzL4jeyTweaqWfxYac637pUAKurt13XdK485SQsPEKcLR47fRT3vGRj5fh48cByrioZxEiszEWqY",
  "key15": "w5U22c2xev9WR6u5ndmheBiwfh6bJvappA4RjSjEWT6oZBdoUJc7Xifue96qH1m6YXeeMnGeZ96X7arMHEq8FPq",
  "key16": "5zYksnQKfjt8ffVX5FE9h4hUSdkKVrLFZ3ZU2XvwzGt7oynfeB7HQ3vNfseymUXpbGJvZEM6DvRAU3hHBkHZCfFq",
  "key17": "47WQu8wuGvhSkmkGwgovhriSFwpyUZBEbXRUc1WY3xH4FK1KUbLXrVP7c34QZK2VswmFm4QRAYocuf5j6vXRR1h4",
  "key18": "2GqbTTMpFr2KanY4YKkKw8gKtr1h3dREAyarKLJSFsvweheUiUFwdmbu6CW6NfAHypyphm7Ww6GTBdfRGE8Butbs",
  "key19": "4bot2iXGzNWaABe6ZSJjWP18edfpdYdZpYtyMgBfsYcD66KDTnY3cMmo4AGxzhQ9aUSQyY8wERCWtkc7FfBhNsDi",
  "key20": "37cKtDXvaJtpE5LneUZeNhKJQffs9sBHH1XwNyGQKJVKwTJ9rBAKFg5qvFx9S6JEMiBVMVcm5ze2oq86iWQMvGCH",
  "key21": "3KbJj3XsnFd7G4KXVmnQp4aDddRygvCty8Xs3gee8xZ5SvZ5Gx34UrRTPqq3apxYsQGKbiMiWJdLd3TvByZcrhmp",
  "key22": "1Fuz1kMZy3qPWcsyWJffBUxxH2QFDgMDw8C1DbbnLv5uFG2XqQMSMGhz3VHWG8aAKvupzeLu3PQxnwfv7wwMu3U",
  "key23": "63QtGuJdkrUgYSPkt2YqVMpybkyJum1Czf4AvdNqY6SdR9DT9cpZV5h1A5dPRguvzs3hCUDuUkJzuT7BjTQXvB37",
  "key24": "T2xZxUTfCJA1t4BZsR7HgX4coZwLqZZjdpcRVmF8arscesGm7YzdEx5ZkYBmLenpUBrextqNrPTJkaSgRWCGZjX",
  "key25": "4So6f4wwJ2Q8WQC8WD5UXGPAa46aNcdpG66vuxZJ5UT91Hhes3h3q5CYrhhrSvMD1cijvjtGfzcqkgvt8T8brEEJ",
  "key26": "5zD9cjyKm8Ee9yWPsehoP8Kcs5hJuuCPMiayiGzMvYbBaTnb8dUSLZMTH9TyTytuSjZAVo5eTiNftGWKQzH5TPL1",
  "key27": "2vzGtp3hkqJU6PvMQHHQzo21AZJUn5ePLfE2iNEwd4eN6tVRe48Qeg37HPAvcaew2kGAZWGj3aVAwmYkQrXp5LGw",
  "key28": "5MUpCnwGWMi6F5urQoDw5fYTkVe7B72fUX3umjgGgRV8KYR25HUWbaWrqk2iuN2ZjoVegBL9rJrr1urM9k2WW5sp",
  "key29": "2reGNtxi3C9yq5cjbLRxyZXVQd1ChieURZDRoDxjtEFNng8Ak4QTfwTSoo5WDfuEkzgfPGsErkNrkaizegZtsFJz",
  "key30": "3PUsoc3SvYtJZ9C8wcvnNMCZ1ttAdqGKeymp26NoceQj6sTss6QTXRXfYojLnUmZHSMafB61kJ5rqzwtLSUV6ska",
  "key31": "3Ze2t3yrCBGZpiGpwTsxaHuYTeiaMtmoSN3JEo91Kx7T4duQpB7XjtgdHNd6FXyGdUgct8HHcJFcJxVHBCwhG7t9",
  "key32": "4EhovWpQZL4r8dWBXN7mQJYG4zGXkGCV3AmpCVN9LzNB2V6uz4tHtCN4NviSTQov6aQh8amg6Qtpri9ZbidAFHZE",
  "key33": "5Nr8n86Fa3QndBC4rxq4XXsZoF7a4v15WhUcSJY61ZT6x58Y71XJUSJkT4Chcc48FcBjrPrvuCwaBRcEyY91anzV",
  "key34": "5HiMYhtu7EU2fTYnyCNkrxTjtXWNnuXMcQ6gmkVMwAKKVAHaBZebp5E4EfisNBMNPEyVtoVo691LoG8opRKa5sex",
  "key35": "3nKpq6Kp5DygGtq3iigsdMFa1qjPE7swUY6bmcFX8QYp5FsTphXmeUDJJnbV4BtZBimNxKcFAnxLsKt93pzep4iY",
  "key36": "2VFgTWgVWipVeUe8rPzJzmwVenosSGBB2Dy111KoPb4BkajYjoPxgmeYrNjwo3he3Ut7JTafKYkRNEPbBhmvQKtW",
  "key37": "65wKtrjjpYX6Vm5WsdACY5bUCcV67ud1y9Ljy3hJbu8UUR82L2Gqeo5rw9UWGEjx2PWLELnhCB8LDCJyTFUzYWiJ",
  "key38": "3TFuYH6of2YYYNDfkk5CRsR4uuE8dKxbE96EXUEhY6UigjnJwZtNGuK5a3rEbJ6jg3MeoyY41YETSutnsafJgzTZ"
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
