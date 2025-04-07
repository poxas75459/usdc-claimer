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
    "5e4xryGgsUV8khBLSdAr3rYB7MLnKLrhnUXVvxQjSSUkhNYuAYN6prBzsmQFU8BDEhDmBYXPg8BGuMGmcP4pAHVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoAwb5c9d8ThzaSbFY9KxCL8fDLdvsEdscSmEhmj6tTYUkLhjm87N1Jjwgr962oALd3jFXimHNw2bvYREY7guVB",
  "key1": "3iHF3symPuQgji1U3ypeL2vaZrrrDUHuPSMyKk23JKFNBsaaaFoVoF2bHQXTWCgZV9A7TGFsSva3CXHx6nNoFqTG",
  "key2": "2NbhyfAFo9mHNYz8WhpCYiwZ5T8Ktnk2GXmJc5yQoWiXAgmPQy4uXyUVuxY3bjPoEm4KcBA9Px1AmKFXBViDXhtH",
  "key3": "4QVfRK9JqMJqAcYU5sZUUbBd17Szf23H76PNN3v2YFnZ4T8VacaCVJpaHYfWWGbVcBk8TQFrK6P61CUMAa9ghjhe",
  "key4": "3Z4vogzfgwAFX9mbjAcU3t89bGZFAnE8g5SNDAhCZsemR1xFhsyqHeW8kKVcPh5dtFpmAkfLnAysU6oKugZ9QqEh",
  "key5": "42pGdB189heGKQAwtM4FEaHGrWbKH5GkHqycVG89Htznf5NJQD994dmpPEns8MFrtuPLEguSn5UiVuz5ZwD2EcNh",
  "key6": "3pZhys9FZNyejXAKxDP3qZ6TNjGMajF21eodar6krAAFtn7JNqBjD8c7d3nbQBD1KkhghS9nWdzya5hY1FMMbyK1",
  "key7": "3CzZKSPuMiDzTnTajyFfHnLfeq5X3XcdkfWnCZQaiSS8uaNPBuJfBMPhDTZQLFukxyBKqHACkcWvfAyqu2arfUeN",
  "key8": "fQKtExzmWkJRL8yDp3uSKYpEYHBjucVgsMMTPCqLgbifNwWTCzJ8C6WfWd2TgUSBvDU7DsUg7s2eHeUFUykrbDc",
  "key9": "2RkWjMPZJeSjvgBfNqA7Sha1BxhXeWiwkcuUAD324V8afVBTw9PD2uohndAxKN6AAFA9AVAed88zwRB6sUYffdKF",
  "key10": "5vYzHdJK4jV1yo1BfHAsN9azgYKssr4jiXUDAqhvyPKG8J1Gsv9bp6CqaTBinttBpqPYNEnej91dqA7cN3wQYy3h",
  "key11": "4UXpbJiLb3TC5ZPz1H5oLR4HAVMSK5H7hoZZK38VKUAGt5UXSjcpNzsd7hg1EnSM8pFF4Uy8dsM5HhQAnvgSzweC",
  "key12": "4N37cZkHJZrYfie4oUYkS6jhy5tKAqHeKE1KycVFHbcnCZK6W8r8XFhtpYs3nmG3YzFaYYU6PaxCz2SCLwnvVh2p",
  "key13": "3HUaJFM2VG9ZfXkjwcpV3fczoAZ8MyDxG9yvBCUMuTLg52qvudQjv44N3VNhoYMaD1SRMZUxPZrLkAQgcdqexku9",
  "key14": "61se1pwyHHTPzvtz21VF74ZEXDqBQ4zipCaHYLQVWFF45NuX85HHvS7Rhp4Hk95Dv6op6gtuAdKT3F1kWEXx48by",
  "key15": "5s5cbqqHB2LowQtbxDQyMBsEwg4wkGBpmyge4TXM31YDASeEwj9DEuxCwEV3Wgt5MdkSshsAmBCjiZ1Sp1PVJyn6",
  "key16": "Hg6CZg6gJFQb5SYL2jksw8A8FEfCrTguv9jF919Ty3XH22EX5vhdZPxnedKsbcku3jbAeXxXYAaMZA5frU1BYYt",
  "key17": "3peuo2qpujAHcMLu5r4NmEQSBhKzkf9RGniJDteztoyPbeVngWnJet2h9R1gFmaNGw3v49VLkz7DABuGtFAdrsC6",
  "key18": "29nJ8QkW1VBMSXA1M2i9YiKA7AUPtA4tMfEAh93zegN5o2VWRs9dz5QZqF4uUSooVuiZuwL6JvjsdCUdWDnrDWSX",
  "key19": "31ogCMcQPHufxfMLS7euZLxG8JCdXfmm3W9YL8uuEJ53BAZfCuttgWSvUNQhJUKVZo5soxr5cRyaNqu9kxQthnur",
  "key20": "5RzANkPsr88SnMqtej6KroXR76cN4Qi7vbwU3VqYxUQi6b3d2DvkoCdbd7gHT35uaBvFtBrY5vaEDx6qrSdjsoNB",
  "key21": "1treXNkntK2roHc7rwhaTmT9XpHq2jjbKosqaVgAb5U28WBa7AdLKJHqeYG36mzaPor7YQkUVozBbZbUXqLGc92",
  "key22": "35USpYhboJz8CTY2RxCz8cVNYCScyowKZwowmyjC1GjGMGQBZK3KYS8eX5YaRXooXKhaNPBRXezWeHawBectnj7G",
  "key23": "4nnakWebL7NBKHiPySgrngjj7i6GF8x2pMZAnAy1S2oUuUfh19r4qRCw4WpiE3hwmBFkFmQmm4qv7bvdiPkLTBGj",
  "key24": "53siAkdSp1xvDBjvQ3gq5mCS9ezyGXnyqMYBPXDPG85cmFGBMQJsPYckAwymk4vWyDgeLAJBHqHVSYDc7mZwrx5R"
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
