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
    "4BRrUzxASD7RFKg1mz5m7RDjbzr2FDbdtq4LzHWNAHpytguTjFYDzhUVpZHonQDckvDFLHPwUuGNiAonfkYj7X8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Xnk2NbjYrbWuAwRyNmfF4CMZCFLEPev5z9xLamZJGNJR3U3c7nRJb8E3Hvns1jUcLhb2Ts5ZMDWMBUKkSphoU9",
  "key1": "51eMtrp9B9HoFWsPqGrgYYCxNJLaLTLjvbnNteegpPuVhNv28zKtDnsk4s3mqCDpeZNY1LoSeRvsQMGwsoFKshEf",
  "key2": "52Gap9wB733Vr4zKMLu7DCLWNmRvnCgyeRXE6ziG8Nk9Giz2iiUT4sZjMZJAuegcze7LnPdCZbNERK6tk1xrQWUj",
  "key3": "64Z94ZTPiGt5Jtho1cGkyL3eVsfqFxwPNJdQrWFqy2Qtxrv1F7UBzuhBam4ZkXysZsTkHESSDtkbj7BrZhh2R5k5",
  "key4": "3vaWNVULAo6amC6rb24c4L4nvzJ5zSxkrzo3oG1SMWU7KoKq5H38cJswUc5fjv8DWksMFW4oDwm6PJgnFZtfZzZf",
  "key5": "4AzpXy5qTmSSdaSZY83H8A8Y361NSwi87Wf6qSWsTUo5LXRVQGH3Kca7zFecAjiQ5mKfECTmjvNYiynWse359jm9",
  "key6": "3JXBxYC7tCDb6nDJ8YUMXt4gUQyTdE3P1uD83VGsQsiAYhds8k3Zacs5ntC2SLaVPATDaNfmsj57wbgXePxFCEj5",
  "key7": "4VZTYs4DoutUCU1SCwsVw14eZDGwXzoiWTNhngJ2DeRDgwTNPvir9W1wvVojeuaB5Nx2qjYfDMFnPLBDrjQb3Fii",
  "key8": "3rhrfMqwVMSD1YgLZyAKcSaNWgZFdFfEsoVwHDtxWu67eNFXVkyAsSRZVrMFngztT4FqHa6fzSVECGm5VJDCxLZC",
  "key9": "nRz1A7cYK1eywJR862TYYVHhTirv5oGyCWZqugJ5wZLrMh8yBJ5gxdTtqn7ERPrHdsHtmJo1P3UYAZgnEsoSn7m",
  "key10": "gbfHrNg7WRyU8KERNZCB3JxE14WZk2NFDo1KvtL1HQY8t8di1mP84eMNmRiVCHmeFT2JJev9QzpcMGEUAt9ueob",
  "key11": "5mns3RGYLFUnShD8iHXAHNrjYbXgqxZWxMPzZiHmH4JQwaUPMK8rFPAc6QDpM6o6jJ17hGHSKgUdKLL5oyPEF6Au",
  "key12": "66cmL8rcYwkTTqECCeU3GZgYEgpRxeMbjemPmyNwnyMUKDC1vKfaUv7zYL5gqQpNdtAe1bwu1aW87hrP4JnpM1iN",
  "key13": "W77HyS7ZLwtjX9K8MX2YNjUeiTrGGJhmArjP5w5HYzhKXB1shcmQn3qkFeLH8zP6FgjteAQnHjA2cdiKWMwVxzH",
  "key14": "L83861tDEMdbcx5vijHZSqbLVVFfoMs2sGLF9g8D4bgHuW4E2STGx2mGxaMvaVUth5wuydMts5HFhjSeNpcqxEJ",
  "key15": "4cjx2AhwVxAHNKAe3edbMozdU2qBn88cX87EPGKfR1bhc7AdhtSUGUmrDBYZhfEkqLaUXCHRvjkXiaER2pubfQmp",
  "key16": "3uVfJdxA98bApXSvrKUYTp3cXnvpfWdp6J6FHbc7oEcXk7RKLw2LNYfCgosiVoY2pV2XwwEkMCwNn668tVUdVKVk",
  "key17": "owqjZRrXE9sqqXeMMUK3gbZTLuH3rnTMtrgygNccEoCPVxuw1SA9xGVBZR6thhepVF8kXJexJwVdF6m8MqKY1QJ",
  "key18": "3d3csYEvvqrhyrwwBbdPxYZ2wodKDEtQJS99zwFLmYaYn3UNgNomrAADqMxUm6up4nbEmuo6yy552tNSG5VpxppB",
  "key19": "fwD9vgEqna48DwygMgfGTrQHR6XSiUjY9kjdQVuWr2c2fYbDFnjPsjBFHVtwVYiJyC13VFWZ6V7CapRtBd4GQDA",
  "key20": "2egtFQWgQ7qdt2aaP86JNPHxMw7dWVa4GAk6bhQf7oMb345SbWQiNF7LhPUWxYQ8TNR4cieaaj8USARCA3VUbGLd",
  "key21": "5BxLP1k1eNskkU1gzcYtLozDz1W2eUNh7KJrApMXFdriJnUQxcR1k1nsWBbnQ4k4fxTndCjsrwtbjuDpt7ZwpT8h",
  "key22": "B5NtfKrPV5Ga7vLdAhMv4F4rfNaYUM3JjAjgtWjpoAkdvEAm8bgsnMNJNiqrnJ7GUAQM2GS2aqVAYsxmB1n3fXN",
  "key23": "2zGLVZuypCg6XrzjzcsbvZjcfYKcE2Ez6EfA41tRegW2JbvGNroZTx4MzaUfsHcYF57Fe6vaQU2zLitNk9XXkPRH",
  "key24": "TXnk1bbYV3AmhoufcEk6FqyyNSN54yq69QM27za1RQWVCbUJbr4zVVFpw5PVRs5y2NkB8dkVH4cX3nHfaawCHu2",
  "key25": "MZBYFVWtZbqa2mERRtZ4MCf1tJWmrSZEXJ9YqpSsZUq9mBFWyaYR8Pf9FEjaPbKDrykFq6ZY1ku26UWKHT3tSmy",
  "key26": "2eKXMxkMp3ZcX3pyCQKT9h8V9CNM3ArvnUyhUSXPgrd84BYCNiDJYaK3vdgfqDMPhDwnXenSkrvW4EoB74sXo4e3",
  "key27": "5AWnTTSv545j3xWKWspbgVP2rRF8De9WhgJWj2MjawZ8ex2CSFjQg1ox4koPhZ7YDKchyDNWS6xLsduWiNmXcRhg",
  "key28": "3PYjRo7ZZF7FfeQ2Hu2P39CyBM3spV1ZJRUHYN7VcV7gk4j7LZZ1XZhsRZTgjX7Q5H7uUz2DWYWwnsRGzP7ETYR6"
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
