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
    "2fvQzjFTJpcThJqxsvQ8RWEWJeLmT2ZHaMLuHZ9WXyArjJK4h6C2Hz9Pzcm5rnQcTcbxvmTa6Knpsn9Kf1tZaQ9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jqgv3HEZmFK29SnRMwxw1qBp2VA7qBT2pSzPtkY44DovteJaaikYrsg7CVyxW39D3cuYHAVXd7WgtAKoGY2qCXb",
  "key1": "2AK5M3UmoextervYgA4eJP8KDF9AHxABodycu8LUbPPd8xW1TqQqLguCwmHuzP5x2unTb283jhV6prH5yhmWvQQZ",
  "key2": "4uKJ6fFq945Lw3b846rud3GMbjhxx8RgzXwBJxbLLAHHG7oq1FcHTxuHBCe1hr6t1UsMYrcDfJ6X7CTPJBgXsr98",
  "key3": "E6s6Qo6X9Qw5kuzjUADASzC5kmcGw6tu2xqaeymQ866cvXMqccEm1uzXS52fE6e16rc3tsWaM458AGFymxQL22h",
  "key4": "4L3agyc8GLk6HGyzDLDrMAmctoYXwXeLfy2Uk15PrPLZY1CjYTWZaVpkUSaSiM5GYkqnZSrZVYtxJZXMH4uwzKsz",
  "key5": "4j3bpnsLZqZb6Tqgigw3KTHh8cUwoLxQQHPtajHpjLWNBQqfXdxMR2auuDW97btAnQL63CTawV97UcjT872J8r5m",
  "key6": "4MQMfFpx7GksRT48r3L1Lb3n5oSdDm2HdvMUxHCnhf1R6g8WhMK9TJvTGEwUKVU4zXcKSjke3on2fLW46WqRgsdb",
  "key7": "3WS61tUobqK7NaXvAG66BiC5pjRPpCn1oHdc9j6pzvmgp9C2ivrSAjHjupNwqqUqn5xnnksi8n7ER5eDAYuFk7Lw",
  "key8": "3pccQqRS9YRLC1JJ56t7eZjTKcfupEKAqUi18R1RX9JUgHxKdm6xHykwPqF5X4B26gJioDkSLyDsoEJ8LihBikCF",
  "key9": "2WNmW3MATKnGgm6WyWEjPd6ko9Y6vzq4nJsjJciLB2cz5peedvMEe4HeKuZofT46Sxo8EwQS2pecSaMcAQ4KthR4",
  "key10": "6UN43xHAuVAGm2LbhGhfhkvG2wVeKRqrhqVmwTfhboy6ia2w6rXs222cem8b36B44NaxpiVcs3uNhHVBu7s4VFc",
  "key11": "44AzUYYZATxxYnMv5GUutusd2jRn2iP3rm5dMCLzX1mSLmKFL6Wt8SFnSNFpjwz236K3DbvHdbn3Uc5b2uExJmRW",
  "key12": "nsQpmeVHzyPdyp1sAEsCSGDyuqsGaKXjc9SdLWvv91m8QrnVF46Fj61g3fjFEhnEsfmnHMJ29BdBV9U986gJjp8",
  "key13": "2aj5MfSZPA7PXFfFfJ1EN8aAubT6Kc4CMqifRjzPwu5kuktCC8wrBQ7cnupUo617zD1QbVenjceRNqNyFPTDMYYA",
  "key14": "4vR7z7kq3bQ6AjCoj6RA7j64aPG64roXeQ62SCTSnqNUz2baSArCjdRZmqpXYnkh9DA1JFupK7ygj6AhZ6XRGx53",
  "key15": "5EmNviReUMw92jh6h4m1jS1scuPCi6PzkPZTiR9ckvkeKpUKnuFNHXpaQRXGvx2pQYUEG5rAbwTBp5kxhxdxKER2",
  "key16": "5X26X1TxCXXEVF6zRcwoDHkYtVKJiiWJL851D3tjBySfr8Cmp4CFXETBBp5o7yWWCw2phFWXa94BHoLRzi1wSyUK",
  "key17": "2ZMSwK3UGoCydCXqK7b4x1DdE4kPZ3cQsMFE6STWm54YrDd8AwTkNiuNVpdBtvcuXyQfzB1mtFGLRdoPDJb7vkhn",
  "key18": "YmCRBvgE68RKY79nfYpbvR6Rt4hA8snLeXntkuQFc43gcP9GDrQ8Nkw1oNXvY3yfeWqcsgwsXKSEeYWxrZx3oKX",
  "key19": "5FxqhwQjcFL8WZL1YuuqAujpN8E8uhKVbEfa4WigiB669uYK6SWVh4ytB73r5m15SobMGGCDzSTo7ZaHYo6KKHMZ",
  "key20": "2K9Po6sFoSsvbx4ctHRnvsZwiaAYdeDNVJVaDssQKfLyCyDbDFnr567LgE7cR51VFNWZzTpRT6M8rQzp1h5SzEFu",
  "key21": "2uyepuFXg7YikPCTgRagkt4aSCcfk8Vrb676BnLEoDAsHbtZFX8kmsfC8enkweDxKX5yZmBsdKoNJ4tzTmG2iQsx",
  "key22": "3GVQviT3HdSr22bjdAkZbxhSTToat1UpXQBXPBR5gResKhx7eMry6GgW9phZ7xRYTrLjEcsr7ZGMuqc7XCBq3Ut5",
  "key23": "5isukG4yFcW9GLGjn85cKMK5q63nVPkCatK9DU1NiVjJcHPLWLewxeMnKKEurTiy7G2e7GanqXHJpocPMWjctkFL",
  "key24": "51vd1rdbJSLRgGzQkdDap1nWLKx61DoDMkAWU9vK4q9kJtXfh7BygBEiqhWzHzda5NDLLMitRRdM55zfp4uLPojT",
  "key25": "4ZtX7avgk21ZdQzDQDaKzqrPGV9QCMFoRWKhLeKXEAVKiksftBELa234VCyrruRbfQHaRYrmv2NGmKpQwrXzZonJ",
  "key26": "43PGrhbw3QPM58Nh8zJ6Utzu15cFx9A4XJaqgB4Bw8agwvmpu3zC36DJt57m6ZZWGYeHw65pLefQMbYyvKShWF58",
  "key27": "4ViYENQKFsbMAdRax6KaYRoLQsDxt1EVJxiXzcv1GpNv3B7W43NvB71W9mat1vj9YMpBAU9SpUawbPptCCrFxwQU",
  "key28": "t2G7m161QYUmkjRJEq3rXEZ3eey95kjQ913MYoW5iH7C6mcHfmqD6KALNAStrYWF156ufkiLsUh11cEKu6AU85q",
  "key29": "2oXMkMFTaKL4qceivTUEkFEqaeycvohEJtjXSSNfC6GbFEcSNRMmaGiDLEwsLmLHkZF3zs2RggJptn6AHWNysCjv",
  "key30": "4bWNTTnSqqewagwFZndxjamPMK1HVAi2A3wiNyDSb8Cq9iDmws84buFD1F79nEApry9XLjUbWJWkPxsNFbdjMPpZ",
  "key31": "2fHAG1a51nJRWvAw5zAAWnncgAdNszBPksHUBHRKjuAU3yPENMHVnstgTLDrkf7t9iZ4BquCe4gRLNYEWxjQgXfH"
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
