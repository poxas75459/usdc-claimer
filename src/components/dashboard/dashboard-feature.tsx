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
    "49jTq8BE2nLAKwYRgU7qYmftmAyEj6y1mUtwx8fQqYfVuS48GytsJYLKEiEcGVjjkSGnYPHLkqrHMxA16PsVVKL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QS21AWXx3NtbqSfXEkvTNACBZog9f7C1N9wUErTre7dSKZuRLJz3o4HxuLtjNRyxLbfwKtVUB6AXZbSwnEnfpH",
  "key1": "33dXEFwQSj4TuCqsK6NbRuWUg62r3HxKnbUrWv7tDX1Y4fDR2WtcpvatHssrymAwBSEow7xUJktq5GktNKFxYTHM",
  "key2": "5P8Fu75Cxbvxi5DNn4StGEBQBMod28esy1Zp8TCtZEMJyLrLkW6CGg7bZdyo7GgvmfF2EKRdcHoYwmkxpkDbMYUq",
  "key3": "siPxTPRbTkoZbpNHm57LYk1YSvqJjszuoCRikudPNBxJccB6LLJa7bD2NdQBSkhaBd74fSmGkkvUC6n8aDRQ8y3",
  "key4": "2GYhHemhq9QETbYXZByXsxJucAi6CyxXDyVz8akDa8bHiEtyEsmLFLpoWPSgoyFuX7TyqCXVHntM7QQ7Tin4CHC7",
  "key5": "35wye4FdEMpQraFWeJH25csFfKvyGJoYwrP7QBDZgdDJhy34YUuHXJb8j2j7UMV8LZnx4o69puzDsQyYNLkUkV9q",
  "key6": "5tqHwp9GoXH3DfPADXrDFJEGbSN7pXNbDhmJSsozLhvW2Rr3Qj1H3XZ21t9GmN2SEeC3oaCdmdESE1ZSbZMh8QFw",
  "key7": "2V5mf4jEUExL5wQrK43FvZPzEExNLJ5NjJs1AQ797txSoGiH7Xnhpg7AXb8PomcQFXLqdFhpetCZxFGDiMn2o7cK",
  "key8": "5gg8qaPF56s1fSZXnDnTbDpLVy6jT7TJyW3wvBJzQGr1fBQaodQ2xSxsa4C2FeXcyJdj6kpUUb9LfmKEXdr3QtRn",
  "key9": "2bkhV2ArrewvL231pFpH3frid2neGYVXzy8cF2SsFS5A8xZEV3RxPBdQwpMSNb6oVxs9kBWeC9bjpCfECK4MqSch",
  "key10": "5L4fCm7SoWWyf3RSj698Ndw1ptiUTGaaWnAJ6meVQm6ZucvY1giVUWm6nYtWShUi5tjvSurTPzXUEyV4sEX2hHJb",
  "key11": "BqYkHEuFmmmjTdBb9ZcBiGndLxywFo1foLnaL8PkNsoeV1EPHd62np9ozZc1Ep4QYABjD6fGs3aKD42vjY3JzmK",
  "key12": "5jTp1TWzXgos8vMGPdbjQCM3baoUUQvmDs6o9ecomay6Xkfib67YwGTShWcQb2TFFzW1dUrGuGC1jWwivsWWeE9m",
  "key13": "2FvgFkm41GbDvfsYNABcSCoX7EnKrJh36JPasidcmjGAVe64Z94FjRKuH6VhdHpLLYNdX6NRYZjkXuddyDXJptii",
  "key14": "4TSQQxY9Pqe94XpyBrPQi9AQJHjX1FmkskRQrHXsus5EmnfvKjrTp6Wpm9t1c57hezet7MRPog9dBS826cgxjkbw",
  "key15": "3Mh94PwL15rk9m2RaGPCBDQeo5hHwW2XETJmtQYEGaF1H8MfkAwPabHDaF3vR8o4FFt8raRPqHWfNCs4YtKewsym",
  "key16": "5YFA9fMsJ3PgfkPrJEdvYxP1TWcWdzL9sTB8CYRJyEpspvSmideqMXeZMKkaKvPitD4QEe72A448qEm4EEYbWNBE",
  "key17": "2yXtjPCV27jwoTTA73bKkGFikMs1ApM4aUU2Br8A4HU7mxKdTs6hyBR6yNbK9CHTGcmHQG1oyRVPr38EABeoUr9C",
  "key18": "8i1N3Z4wWXmJHLcw3dUTSzqeDrUxThwgj2s2uqV2FGh3uxm2r6x7cVCmqJkDQa45D9Wm7hBgGX4mEokzckHJvau",
  "key19": "3D3hCVMnb2sDt77VGaYWLHpFk6wnDdA8zzgmjF47b2mJCEczFmdhY4R1hy2wGVV7zRWEFsUvVVzLoGEp1ZvJofNY",
  "key20": "NwFUVphUBE45bNpGoJYaytYTMcCgBfA1zLBiryhS7KonH6xx5ieA8oBgwKfgfja2wUu36VnoMN6FA77vKjfiKDy",
  "key21": "KQ99UjooL7Gd9FSHpcgXpn69wpqL5vSn6dSgWbJyHYGKWDQoxDK2MvooxNsWstU8xZ5WzvcVGjAKNksU8Wi7E3y",
  "key22": "32auCJRo5g8fXJnNpixgmQL39E7SeYHc6oR2VBdXJpyxg4Ky9ADb7vMccMS7Hxx8AFPAoocG3P6hXPZLQDwKU1Sz",
  "key23": "4RAkMSfTjowbxSFwWdtzZWvQxkasmKyNAkPvaVaXfRvEWgnTX5Wf1YVHVdyK7uyrzw6hoPAunQZY5EcTFhf2MyRi",
  "key24": "2J2QTxWuDCSZdJbETSrSkJHtW4ebCjp3osDgAUgppJwm8TyDRqGjVz2tVHf25uHa9KjxMPZvUMrP7xcfxsyRCVY5",
  "key25": "3HQexLjoWL99X4poqRxNUrHzX5vgNtogPSv9eaxGFF5KxuQ8QJFWqKz6HXhk2RxB7AbHyv3e7vB5jfo6rjwHYxBS",
  "key26": "KJiqvvVGBH8pcqFnvUVVcSsdkZNnoB31GCt7jHJQ6nkKTgWDkZ4KgpxTwUo8qyCxN46fKf8G5QAvEmER2VyNJKu",
  "key27": "zJkDR33NmdJaVD5oWifNf2MEgULR2F8c18P39cfMrb9tU7RmfFZEKPX6EEr3VFbBKYQQLGD5ZUMKg6LwDaavmTY",
  "key28": "3xaAjncsctwYcKDDUBxCky8grUVzwF8qh57U4ieoia2iotDjke1TbvSoeVywc2NgHsyEC6c8azrWvHCQYuBHN6Aq",
  "key29": "4D6tZViCrdFGc2V6f45BXY6DfdNeCKp3CFLfaVo1SXuiMqoRoFfkarb5GZqeqRypzWAcbxV5dYJvCwNLhzSxf5Vz",
  "key30": "53N65y7VRoAzGyr6m8jH5jehFqUCMy5ApzAhHwEQjoGkLsH6jURPB72JheAjYA5LFKf6uzkpePveS2mQKiBeaq7S"
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
