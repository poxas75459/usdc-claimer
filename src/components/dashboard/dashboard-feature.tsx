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
    "36tqDp8K3BKWHiKGQuiw1qmYF5Am3RfFGvQk63j8N6wbgGTyrAyihS622WMXTF3gaiznxBaYFMPP9EbQfmYqAdKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSAzGi319dnokFzVnMzLDvay6CXkEBXYkZojdM2ENWY2thsDcKJKR5z5EUBCd58uXsrqxqSfenLNLkHLLgrLQ2Y",
  "key1": "4pjRwCcCqzDsC9KP9eAdkf4PeDXfkdubMC2hSFWMCvfJdA7c8PrgdCRDXsUKRAFHFqL6NNFKqh6cCajxxWm2Yctd",
  "key2": "5HjvyHsaM92vUDvxNqqNwZbwtqwLL1pVGG486YUvvePVYxp2ExSeoeqt3VYBaR6WcQZE7VfLjx1fb2Dy84GsVTFH",
  "key3": "3h5zJBE5BJRqLcbFRi79oL321Bo9SJsHB1xXFsQ8drKZzthgGdZjRWnvVRGJxerV75qESEq2Zd5LxWCATqsQN4iU",
  "key4": "4RHPoR1rfiH8H8nsFidcniF5nAdLQLKGA4NE82iRdaynPshcn8uz87P9bpEJi4rGvtXpHZP9wAtrGKmH9ybsXqmV",
  "key5": "5hRvLjgPpg2FLBMysQ9RuMeZDeAZjvSoZ1uiXeH5JJcfYFoca3qbQtFjY3Rko5K6tJ8PwsxGVr6FPWs36AQPh9HG",
  "key6": "5GmjaChsYD53sk2d66NrkqUCm3XAYThHi2qJoToKiTy8A4bpLinGtdGKG9efesnYxhBm7Df7qFXffBXdhEwAWosw",
  "key7": "3A7z1Xuo6W5swvGB4UPLYv4WnXYZB2p8xDh4PhYjpnpneaakjM9raFQBts97AN8xE4npbVW7dssE116fC3YFkgnj",
  "key8": "2vBvYWDxsyjYhDYJwxnizrvqKsVNUmmrKgpBMcCu7s8av18zjk82cgJYtJSdzwaFofJMv1tvzsctMJmktBQmqsA6",
  "key9": "3gNDsxdN3UCgeNgsRd6QV1MKux1vi4ZQ31gy6KEehBX1f7gfJ5QDZAYYGkWk6rsPhqMDbjeSyWg85q4ThMbcdrWJ",
  "key10": "25Bzt2S47r535YjsN5cdVzZLJE6p692j49gqYVKWmxaw8nhzJzydV72aNMijLpfe7wQZc2qVT5dHbQJoMgMb1GG4",
  "key11": "4ss6JsT8r77UiZif5cpammmfUWGZikUBAEdtwugLYechY5YksE9NVVRW5KaDyzE4iD9WBhj6TQfW4AXCMRDE7Qkt",
  "key12": "2Lp8GCi93mkXP5z4DZFimE54QXBfgeuNXNh6RwMvU33V8mZQPUNWxiAUnZhpkkF91gCR71n4Q4G5MM1NiNruwg1p",
  "key13": "5UKKYwJhzpdZudUVnQRzUrNVE1aSXnDYXH3zmDgcKCbBxdtbZ3i2cFgQoSipStRLYQe8pJMBmyeyZsnWbsvUfc61",
  "key14": "2k16VmUSCFgEHVE9DAZmFQWsgJgQodTLxC1r7Zyqgp2VNWm5f9wnyajjeJ3CDnJkVHRAZ8fQRqSTNQf9J2hjBVtj",
  "key15": "3GiYdGQdnt9SQAEwxK4Z5pcbc2b4ThPPjNnitZWnTbfZ27rLZ9zxb2qgs4VVSTPLFJ6VADghFs6rRfN532MhYfb",
  "key16": "3212C53jRY3ahm18mWHxmfzEWDgvTqBYD8or8TJNDSL583q4tyJoPjUj8Lr6KHL8CPmiSFoeAqjooaGB5raU1vFx",
  "key17": "4cRp7phKbrtRh1SV8xQQhPGVMnB8GqRxndobQRv4yTgP3gbv2CnZnwNhPCQPKCAbnrQtv5JUeAmZVJJqBuAoKvbr",
  "key18": "3uRDAUPcoSvh8DkvCs2sBUsEawYNzuzwaSTMvdrFderY16Hmgf3ohiWVh6gg9rEcsRhRtmVj477a8EYLF8neJM5e",
  "key19": "4je9xPy9DpNRCcpu7TGUUmgZrCLS88Vdm3byX4L27knUL5QF1jTKTmRh9S17gKRi3zhSkfwxEy1HtUFmMrh6KM2q",
  "key20": "5SSrvfRktHQdFtPY4w7ira6yDdy4Wb2pGuVcBP9pjY63aNe8cPHFTdYzBuMKbpCqaacNrsT4FG1yRhDmQtNa6wJE",
  "key21": "5vR7TCLAPNXtuj7Zs65MWRBpoHcA56gv1A33BeLbXsEHD435ZaZV6rpeUdyCif8JDTB9LN8FcNwpw2SRLQcacQk2",
  "key22": "4wVhafeDEt6A8Ev6qkm4X4hrGEoN6FyqugJJj4Lq7opLtJFNf5QH3sLdBQLrHitAyUkYAH7GXN9CnqELkbNEcvcu",
  "key23": "4LL56K3jUFps4n9zN1HhFsTREXgME6qvU7dd5c8ZGnisTPuT2mKtHhtC2mRPpArirrahgL1quMdbQYPMC6Zwtz2Z",
  "key24": "cScxNv1KCpH2K7RrmTABkV8ECh41qMXyEsKUxebsU59q6HZfX98tZhqc8wSELhRvzxkyefzL2Ywb8N7NmzxVLMv",
  "key25": "4ENxJV2c1H7TFXys3VymjuY6gZZmZEoF5JqDA3uG6WNACGCmicsE8ViLGkcnis4QqfL9c6AhHkgd3BZQTP5ef64T",
  "key26": "2W6QQgf1f23Ebv7uAn9dBEcWJVPvGx77wnGpLfRvNHamWSzMxE5YX1deupF8K1qDBvt92AArUvCny4cuQk1TFaSH",
  "key27": "55dokQVz72kBEvK1dZKVqTeeaj1dGATTYvmU3YCwFkkiFzXZDFLuwe9hWAVJhJmTbDFNpH9KUpn5p9H1hWWGbZQH",
  "key28": "5hTZ1QiMWdn3wotuibZf3J27c66Aat81Gg6Y8DJYD5UUantba7gV1aH1PAZmWmqWkZVH5XRAAqVtWJPLVYVU2v1Q",
  "key29": "4qto8sGEd4F8rRp6tKXTB8RrVeNmNFyPCZsGp7QLUnqFwtNozBFxrUV3Au8fCpxvP7J6SArNJbaLuFe6xr4jBzVw",
  "key30": "5HFPpZKLFJLovCLftGCdHGETPGJ9v5xkxmQrEs4LcmMAGuZzuqVj2m7hLHopnaAuubAZWZtAjD53brnTcpG2rEGQ",
  "key31": "4LqBG1QAFgzk6D2qDK267rkBu4L71mp5T1i7TA7n6a8VxC8zM8UTg13dKpo4NKhmuc4x6yuHMocsD4XcCiNCRtrQ",
  "key32": "4a69cAUXfyMnqVMPPfDmDVXVCtx6W3tsCmmDTwtVMW394nFgf5zLkHyy8k5uu2pZd3gHoPdHMcHiJCjprcRwvtBN",
  "key33": "BowGwMXBsDFRn9MYAH8zZ8LEPf9HhoeacRDzKJ9K7AW5Y128wWBmVoXVoNSmH16vkqd7PWDrKaXa9Nf963fd39w",
  "key34": "5xFM7NWffBoafQB8wLumeV8CV1FLH2K1DKMcCDUcM2dGpU6MFMELTWHVjikWCLW741iDvRrqDHt2imKuS7aSFVS6",
  "key35": "4g624YCEz1RZkGevH7UKu9Skdy4tudzPuVn3yz58JPX2L9wB3L3ekssrbaeghEx44AKyFJXZUB747t5FDxhAw1tS",
  "key36": "2Ze5oTP4vmKuHbvpDAH7f7MuG6oQztPLhj199e9frMDPjt7gDUYQDtcSHW5oqnSRhGfv2qBd8oi2tWxksmix9oiA"
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
