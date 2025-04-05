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
    "VoEsx3cHQRKbsjixPSGZiJcJiGea4zgcVjy5su5KCFKfVJCiM2ghhTHHa7fs5V7ZTruLJRHYJBuQ9r7p9eKebrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahUqet9bswppfj1zHNsAqQfggqYHqTSkqDuHmkB9oWgfRsYJHN15dmK8SCtk1QqMvayTDFEmXdMMCrTDxi5RTWm",
  "key1": "4dPsrSeFk3SAcDkRgSE5eEDYZTw9ezKJ7mJcCzHFN5mx5MbPXtgHt5w1BgyHiMKdgDxb4r5pUVVeWpRqsFVBHqZj",
  "key2": "ZxhYQJb1EyT4GgEGEZbx6nhywMfTC6P12Wajz8Mm7UCixfmQHf1DPZdfTr44cKSfUizWhudpyYDgBDWbT2AFAvH",
  "key3": "Nb7XjyUtMvjDJkDxnPhKN92dorpS6kov2Yf1tMhDoR4VGZM3qqMSwTaKr9gchYk7vixfhjbMTrpBKrSgjvZAjfm",
  "key4": "48KwpfWqvV2JfNE1uNF3HoL8yaKHmZKkSMcXJn5tJebcfJDwZsTyZ4tk5mDNzXp3nmP3GPkCJphK4qqmoMaAyg93",
  "key5": "npUCoMVoSdHH2PxJLek1m2F1CBx32Bfr1o4R7ZKQLfvRWr3Jro6eJdgR2VWoGgZyKuFYkjPBPhVZjHgAUbaqReQ",
  "key6": "rabkbsGKRRhFwM6UEaCQeUqYhqMDLtPSBf567GaEXcpLEW4ReJwfBotP9Uw29CUg7QC4MmtPDz9f1gnbrcVjWEA",
  "key7": "Ya6dWMPvLXoHxG71C2C7GZU5Yn41rufQywUW52qogANhyDqPZCw7j6eYqtWv1AEsVa5n3G4CpvQPGX48EQBDJG6",
  "key8": "2C8SrRTehvR9pt3kUBFEP28QMKFkSREL5yRBf5P6DZv4t2DkrVW1Hmjw6jdipFDCjSYNYzNPDK2E38gXpGm7TXNE",
  "key9": "4Rj7SQqbHcxNP2CfrroudSQtPVfyuV3S2YEsZa7FEBuUX3yqoJqihr2NuCx7o3d6SyLgUyrQmoo97rty6gyTCD5v",
  "key10": "3so5DWwUKpQNeN3XC4qzSWd5NpB7CoSiAN57xKJzscgq1G1MvU61KW1uYBhawaXDC7uBEfnpQTaL8QRfXBR7q2nu",
  "key11": "ES8XGtAk6J8zEoJxrtz7qh7jd6gM5T9Mk7XRPGg3URJJ1W3WWgazwYdSZoyctTXSL7GzoaXmGbz2MCtemBrtVMM",
  "key12": "5SXT4XV7x2yhm8nVFUFQDLuYD8EgFVJvZBw5vF9Prga1NzPMSi9u1FppsLQYG2HBVp5uVW4aaHFACTjvN9FZifH8",
  "key13": "2k8yYkwQQbTL2qU6oiYcqyefk6jcLAckaP9bBFPiLR6vDyXfHDw4gy4AywUKUouSyWhTUqC1MLMzvq9WAHccaxSe",
  "key14": "5beRsiQQKtmAaYXcddiYsZfMpLHxW7yGTviek5Q2GLXSiHe3HGckCWZwjiHqJFtnmvYLM3qXW1EVftoQkM9mJJiL",
  "key15": "3LWiujLgReWsNEvw2XN5GX6BXDKuPgnkT6van9KSbtwhoGh1UXTozYCcRAcwKa3ML1CtR4P2D3epJXnQM2V1gFvU",
  "key16": "3XwBTnxSgzsDazsCZkJ2QfNS4bHAsFiogS4A6wUvgAG6Tub3Jt398NGJgBpCEjH8SQWLagnLmZ4wmWUNc5VgK5SJ",
  "key17": "2UAhXfucHATtxZMxAkdbHMuwJJ8bLXKvBo4z5XwEMiXSTYz2Um9tydQfkcuYRtg3kSrChNhThiRHm5Gzzj7qRUnV",
  "key18": "5yrAi2WEiZLCeBgXKWRpnoRXgw4PbjRB4EHDzprACouA6n7dqUemm5UxQx6XmcKb2zpHQ6RKCfWdpnXrqybGefvp",
  "key19": "61vcAKu8AfEbHiF6f6QKFkmGAGSh1kqkQZuUL6MAYigFijoErnmqimeqd1dDt4DPpPocqBWGchvzJnHVX8cbja5V",
  "key20": "3k7pxtPVPi97YVqRUbfaJ6F8m8WA8ipvuQxRWpcHzhkRUru1SKMJkdmqbrtirth63PFF3yVJooJdqup17GQAdzx9",
  "key21": "ubZhPNfox3UE62uUqK8jxF62RREuJBZt1a6kF5ja9ovSjcqXRcGcgeM8n67pgxW8D79yonNsG1eG7NeQQ385mMh",
  "key22": "2zfkb2A78DMh9jNgszchqQ4pqHXAC2su9uZGGFzmaw5sxAwV6udKm2iiLahiqXZmkARShtbuzq9XmHcfDLrLAmC8",
  "key23": "5aMLN4GJhMhzEzdBsLJ3zipA3Pvtfn3EpCao59fuffaY3Xd8bRX3UJWehVtFBLzrNXaA72qN6V49HoXiG6LJUL9G",
  "key24": "2FiMjWSx2ZEUgL7oTeezid3gRRvkgJ15tUsMYtVGKUXX39rEi8FdZYgNwHXSQNKMxvQhq8eofJX7GUkbPXpZm52c",
  "key25": "4BDbcyCNkwkrUD3ekCS3M2LqiQ4JrVrafPYCzKquELtkgXyZZiojprvAEnBDtPW1ZRYpz62V4enmh2iuSz1AMuPC"
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
