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
    "4FTVoQTwhS3vKXYKjEgF4uLoY16wfW1CAhMmrjdU16CoWxxrndmgtdiKpuo47PfcxsMhbeiaPqWjszdJS97HU3Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HijSW6mRfkpLerTQXJTbvTQwq7ptJ4mUwLULbbyPvL8s1gkMEHmHd9j7iwAFozqdwbSs56scG2MJ6gYG8d6QvPw",
  "key1": "5TWjXx4qQycJrDXJYgRyQTEhXe9hQv5yGAS6Ws3zh6hMS36ZvrZq2odP8j9hvyiVBYGrqiymuy3FnBga2oymBDtr",
  "key2": "iw5jffpGoDbzMAidqFDzZ95DVcBYq8gYoX9isfuxWxSxEbEFjxfF97jxsxGgoTB4etiypb5yL5UrVqa3ZiLnxqK",
  "key3": "5HkZ8dJsJT6qS68j8YzNdtubcooUHo9dDhQVaicPk92o7Nm3FuHAoiBMEobDs8hUbnEfQ4v3X4xvEpyFXYftpoTg",
  "key4": "3gwqrH8oV3xNYAsh2vTbxT2hUzHiJfhg95SLGb5mNcurCWGXNb1n7dCwZJcADXbdrzdK3qNLdErJAguJActvcXAR",
  "key5": "4cYsw3jiANuQ81GbA6xyXS7byh9UmaZG7X6hcaxZB3u38n3QYVsrVEhizMHBCmGUSr1csfEJ7GKJJTxPL9tyQ3qL",
  "key6": "3nazes8ZVxVv1j1iuF2hVk8jL16mdXYgSErtkkwwUD6EkxDtSqh9ZwPhAtQ3rQozjV9aR8JhNMam3CBhBMPrFwjR",
  "key7": "5Mfa45DNUhLy1kKmfrC6jRkqQ2DswdN3xSGLF2jo27jUKVHk89YpaF283HZ3iNj5SX9owbaR2ZDQvcoLiM8bMkFT",
  "key8": "39XWUw1Fbyj1QK7LbiJVmahu5WZ1yoAgfSW2S1NjXdUaVSnqeyu36hbM2yw3ZhTv3LLoYX1CioYxSrDYxfVAp2sa",
  "key9": "3zFVXHPrCqtuekXj2rXKdBwocm6dhvkwhxUxx9gEYo4oyGRbquqNFhTwLQjh4NYN6o9VnQkiNiHFgxVmbESRz2nH",
  "key10": "4SDkXnSuszUL9dAfokY9jMpEiK6PKF2Dj1U34tWxFsPLEp4p9fz3fNVquUXJU4YARZHszdF1vxxeUA7KLALYQhSN",
  "key11": "YzU87khcC8ddXWdzu2duVF8qB6fvhTZFxurMo9wKtpjccDQnHUR6zJcUg77guvHG8qad6em9n7zZBGzvSNshoXC",
  "key12": "58CaS7ex9RLRtiRX6ng5pmjR95dkNiF27j2DNoikPwfNLKwsKSHq4nhfUyrAz2LPDQEXvUZViHEb7bi2fpQGs4Dr",
  "key13": "38t8pgZedUCv1SaQVGTVMctm9txnijMTP9jKQ2guTn4xfNS8eyYEZt6UHazQhwuGcRsswgTbiaQ1su756CaqMu6D",
  "key14": "3mf8Sacn2LNWDFXSDeUtcmZExW55jdTDNu8VTpSCPLQmTkTQ5Xfmk4k5uSunVWbAfPYzABK5N9d7KHd1X6bSWEaM",
  "key15": "5Q48YwAGcqT9GoVmpwdMjB1or5QzaYkg2kshQw7r7jeVxguWKKvENHYj5aj9Z31hAAtyH5yXJ6iemkFhWLUKf47B",
  "key16": "56DgPV7zoanWFVVCjWSY2XNooZ991rJ9aVCyPwZr4Dd9sf4muo7Nt2HK1YPjbPcTZLTiHuuZdZTkJ5WpEahDEsUy",
  "key17": "2GmpR2pFkBuExB32htjSG5V82tQ4nfd8Vk8mjupvAGwsQeZSbr5uD9GqUKhAtCTsbxc4n9hfvAbMYhH1yPjqcQk1",
  "key18": "5Qi1KtEttxkAnwuwrxtR3o9zw9B4JMEAvc7j5tk8xcRabJMom7UXErdjjBjXHoZbQ3vRvWcb1JDPff3b9hm3kGh",
  "key19": "4fCcEYjZ34GyauApoieLPchzkxQNF48RkpUsndw4jVsL2CXB3UdYmmVhTejBk61D6Gcj7z3Nv4KYKp88Vx69qq1Z",
  "key20": "3b8UkeNa5Sf5KWLFUe4EP8G9iHrgXXz6pVUJRbrGLNCNug5nuPAb6HpXoxzfUJJw78ckAm4z4H7KSrSEumZ7uwpD",
  "key21": "CHr8wMtR8fqxezZktQvZUXrfs1pyEpZRfjMFN3qHog8ZnR9YtT6JVTujRjC54ktQs6HZpw5CMnU3KN7SHYtWNJx",
  "key22": "MKYn1RqqXsbVKG7FWFDPEoh6wHVmxVpfnngnR5jvr1pWfpRUX7Kfn1ybsTRNvrS2qHsWF2fSbN82UjWjwhaXqBa",
  "key23": "XLSba4GLC9aB7tyqkGPh5RvgUDt1X5zTGKMThoiyKX5zCuiB7f7ABqT65WqU4MyXTNYncouqFPytWerJGHEx4e7",
  "key24": "m8qcyEUdevJDV5nZYbTSBhsNYmKPSVqiD2unQ3W66FiBiCSJUpbHEA5PdaMszsYQX1qzwQcvbWXPeP3KvVXJufg",
  "key25": "37FuGXkc1cYwqM6F5t9BA8sxUUStPrYM455Aewe28QjDkYGkMY96T8Bmc5aS4gaTGBnoa2nCiTfZwoLqSMpf6a7W",
  "key26": "qRX31AQwvS63k3XBjhTEVUFZRKZELg5bZxtLBmhQdgeeP4DPKa7H2ARjuy2xZhk8ZKNgacLmjJeANpzN51vcQQD",
  "key27": "65mtpne3ifKkrWD2GPsbJfXarSD3m27VZUtqi4Kj8dHKSGqMy6jmpQbt8nsVkL1XSbVy7Vg1rw41cktXz2P4uURo",
  "key28": "4vVtENqz8kK9tVo2LDkARAYgacxBxytVc4DpiAfY4xLkTNoLJJXybXiGrBhp9nbXGn5sVhPxosTfeKNEuG2zwsQ9",
  "key29": "4b7FRkuT4P1KnajP5uRE3NTZMC2fie8fRWri2kQw8n92UynzB4vWSmBwK6EZRahzD2s6QeKv466Gx2fkQDtTyVPu",
  "key30": "4NcN7bDof9rJTkYySnbrYeye4ZJNNatNbQEtsMS2V8cTDmvpo5KtUSDzP8c4X6cKjdCyGyvzuX4ybRRikMF9RT8r",
  "key31": "47rKLUqPppbhW1KMnaxRGWejwdLXpGZfJrqP3xiT79YuM5iQYZN1UJ36CCsXVPBMSmLXsVqZ2DQDP9aZEVodP2Ay",
  "key32": "2cDUrqtj1gEhHox7sZxgJDySNf19YLRjwWnpHez7FM5NZG88LWcg8NP5Facnfn3jfAMBBSgJxcdm5T5xb6eihpeo",
  "key33": "4CTkzHHaijxcKp2XjebmvuqU1VHJR8yLMMBKCxdbWsWy8gkTHmk8ebp4du2hHCxeAeNQEwqbH9moGxDo5tt7arbm",
  "key34": "4awtyGA3gZfu1athMKYGCtRH2jNg7913qF8S35w1TDxrBtbQwwDWBDFr2f5KsP3WFrbeyRCTJMqNinWy8w442nxJ",
  "key35": "52yyAX5mBkyjy5oxQd15ApRMueRB55LpgfPDRxEfmDUDFdx4twZGWh6R39AQN15ShafMdoMzjh7EGx28qqJb17Am"
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
