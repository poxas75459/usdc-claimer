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
    "5KwMNWVkBesgKBVDFhUpZUk9vzFuCapAVDpEvpY26mhUiS1Np37SEPHNL4Si71kCt9zMdhuAqk2yNh6MqiDovUin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rp82fhoP5YeXRx6Wq3ibuvmG1Ug1r3e8Fb3XJDmGw83UA2uqfEU3NofLhd2DKvPmBopPqESGvtbXmUaN5gSjiS2",
  "key1": "29gPeknLSA4EJL3kx2CMwiDUwiwVu3ho6UfLFmDrbf56Dh6wG1eLVK8bWGWkqBdxfrdVxDBNvF3xL8LPf6wLHdnJ",
  "key2": "62CbquUc6yUkXRLmyCGAMz3sWSfwTjCNra6nDKTGXqy6zPPH7JXqYiELnAn8wgZ7T97YbPhyLWNbz6jELRo3Nsbf",
  "key3": "3wsC6XKLDmCuqWWdndGR78sKXHASk1Q3EWUcyXwgv2N7enMKF1yvatwqTLcxFoAiiCd44V3Tkg4otSJyGPqYTHXT",
  "key4": "5rPzTEitK2u5kQhFQhw8QE49n9kFLUjFTM2rmAjhmuADc9SanFDMvzjictgHXBb8oe2Jbz6JB1RLvD6zukvbzobM",
  "key5": "ScRGUKH6E247z5BSnmaMwEmbSPU9vYAK8cC9FSyMvy7VAKCWw4kXF45djD8sQEFwZ3SwtcLbADuUxRwE7aGFo2e",
  "key6": "28hj5AEcDu7VktzSQCBmjc1oZSfY7Dff3pHaLmt6YXmU2HwezR3UusA81DKxeMJuCPRdpgvrNBejfp2Ad6TgB5kS",
  "key7": "38bYJ6hqvNvN6NH2hDjGdVTX7AnKfAijAuWRdLTmFts4Pua3X7Ms4Uaxz5Sx8SJ3AokNeBVL3h3AuaGMrNNfApL9",
  "key8": "4VTw2PuU9UG5F9vRe1wVLceLF9V1PwKLets8g7rfm48HCC3hu26YveqKGGC5xPCjZjUwDkcYZgKHjHn2ehhpArW7",
  "key9": "wtESgou6VUwykpz9wbNXkYBLckoLfacY4QF6xWM8Tj5qnbRciDEMbZ6SVw23SZ4aTv7jWnnPunW8SRmTmrs4X7R",
  "key10": "2iGVxMWSWFQpizxSo5jD4BypBPQNXQkyWJEnuuZAu6TfG8mrA8DwhSTw4bPpAT8PFtpXTZwQQnJeXi8G87xotzzM",
  "key11": "RW3kDFCM1XUExLzD7VanFZrpjj915VFJtU3Fk59UAiM2x2e3doAs5vuqxWvCPF7TjjJYpuKhHuotUwW4Lobc8h9",
  "key12": "2pe5dTzB6HegrhxxToaWqvMeRgndRzp7B9zq8h8neYEc1hALSsrGSXndp98TjJhmF3Rsr7hweYwwqiHS5xRe78Jd",
  "key13": "4xiNBbKuHVRnLTMtXonWs28tCVjDeTh35BvQT52ZUU5bUrhbfYgL4VbFoTnQEjBTSzPMCJormCetumZiE7yo4LoP",
  "key14": "64WrhF1odzFQSrwcQN3vPzan7emLG77xAFYsWcdQhGgx8kQsVMLe5zG2bve1EAYgJA3Vg5TwhXyrbHcE3rd8CJLP",
  "key15": "5zgPp7S5EKiWTH2rQbnC6TEUirCQJ3xqAyXXnmE7dZecydHBPkM5UmcJsgv5zmFfbEJ3SNarPfT6DamV5RMYSMX2",
  "key16": "2Ar2HxSm36Wx6i2h68YbTvjJWvVmSHQi5cqU7QbNedw7NbAD6BpcugfEBUGL1hwfPWdFDiEYoWRU6oZsvXeSWMxH",
  "key17": "Arq7NiCyfZGs3Z5i3yEjaBsSbyfgziqMbpmDHM9nn25pHCnpAYX8KKk5xEuYgnG9fNerqnnVdU3PefNMMchA3GV",
  "key18": "4Qrp8bZCtRZrGEoUXbHU3jAREnYZsvvNtwTSUH3s4bb9qKHDJBdHNEeS5JTg7QwGJf1rLZEHBSw2p3EHCp361eqj",
  "key19": "2Pchy4umCL3EaaCxCaXvDQSbgqhZ28xJ5m3kdQBpWsfd6t1nxVywPAB54YdDh6Fyh3NgjSHcfsJAZxVJd6YziLeN",
  "key20": "34rmEDh9vpAUVfw3tuWRt5qRgwmcxNPCTMMXbU2fyiF9ahKywUAcAoQzUx2tSB7QkZvQuVzrMSuRvNyb5P7GrVUP",
  "key21": "JJGJqtoZyz5Vg862Fb7uzDBmWioGdUtcPUcvnvwerwJGoveeMfQn4tP6eM22xcrLAS49zGgJjPEj9WUAwpW2Eb6",
  "key22": "3PaLqicWGRWBAg1AdBXhaiS3iQz7QS1Xjh1AAT21ze5jHd7sUzcHxe1YD3E7C4SoGX4MWWcNTqNkPf6CCMzs79PT",
  "key23": "5a9bcPQYdUEMMid49wBdA9DWRkPTLpHoSy5pGr6TErXrStbsF3UF1fZeUT3dckVj45yBTfUBzZMqDM5gDkQFHndX",
  "key24": "66mdu9ztAsQCAiTixdmwn41scwVghP3uybanRD257XqGbvhEbQDDzyeaTpCMUgFBeTqMaA5cWHu2ysnxRyAZBaqN",
  "key25": "4gg7hvXafRQ3wUkre8BKUCnq4csMJzDtknjGuxH1uYcxib8h7Az5aEWj7YLR9gwYUT1Du4LydbHnYMVMeCXRvV7r",
  "key26": "4Afx7bcMqS32V4D2PHegB1y3aAbomTdViabG4MbdyVLAt3bV2WEwq6h6mWjPbbMPTCQ4qKrqnKVL9GrfAacrux55"
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
