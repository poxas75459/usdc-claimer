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
    "5LV788PkQenn3PuwK3TBTYN8g7AXfBLxmUmu6ddx3Hw9nsEtEMMHspy5yTnLTycJrdixKCf6VcBc4oAvpGjXygpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3siTAvfrfMRN1XqjoeY7WYQ9TtzTvuPdK3SScSfeoPgKT5NRojactf3sqbpUwbzSErfjmE4US6p6ePA7C8gy2S",
  "key1": "3fwX83QuACZ7y48NfKCnPHsPzJXVtzzcJMZLtNHSe9Dp6M9xEsta5ep7nUheu8M4AdQPQCSNWpNsKthh9oqZpcUb",
  "key2": "22tLDx5PrNQuQ9AVbtjuqCXfLy6uVJBpjazdfugkRZsqBzFHW2U795s6NedRKLKNftH64SHdHcgDcLzqBcatPQyy",
  "key3": "2Tb5v3SBD2ocq6ejsRGm2oiEE2L2ZaiyoN9UGTu5gNQi5mgaiWqT1px11LotBAck1m4zbh4PMTGpstTZxHSgCugv",
  "key4": "3Tvy1Dg3urUjmweA7WzNCADSsDaRh6CiY4xX2DUqifPERR3v4iVWYGhJ2zCtu7fWuEVRA4X5djw2CZavaiZYjFMv",
  "key5": "BZXTjrJWGCGFZL4YU2uEWB16ZNP3T5mqtW1BJ5QsAerook8Ah7Rc3sWwZHr91YMAiPU6vr6ZDzN62ntGwYdTYJF",
  "key6": "3g58QANZTtaszGh9iEhtN9QPZ18y5xMJrPnGA1gUKkatHqss4AEL1vrtewx52xdYLdorMnFwPVnpEvKxwTGQhNaZ",
  "key7": "5rFf3wJw6fL2K5JQpf6RXsBkE9Ra98SPU6nK6qxRMKcrNEYPxM2pATtitDwnhooNbXxGrJUisAhE3hHB3DbRoHtV",
  "key8": "29oeyFJjMFef9J4BNMUi1wWsxmeB4d3QBrLJxH8hLP2Q54KGwdN1ZS37PyPbfZaVipCPb6ETeFUjgH3formEBbm9",
  "key9": "342uU5dM5NBuuFPT8ofNwaQTxVah5XQ1RBiVczFq8W3c8HYRsSTAxuQaBKhXmj4tLfTrbMHtWaTVeYZUGG9h5WLL",
  "key10": "5jeB2xR7oiuDsLjToNqyKxcHBvGF976Kaw6b4RiQnZR4f43AtDY9iVQKjb9Akk7JcEAQvYkEQJaJhAv9DUg9bh1x",
  "key11": "65Xm3jfJTHKUXMFW4GdWg9kF2TFe1bT5EyQr9g9ssvrCz7urVjAnx8vESB1qhivs7sqHs6MLaPjfVqvFVarJhMjz",
  "key12": "2RxPiTehkLRAaxywySndNJWeepro4BTBqBZuLuS7vCj21bjk3pUh7ufjtNJ1AJQKLfXGTaLe2pShjGSZyuLGyLmn",
  "key13": "5VwJg4PjpYRKsANmcwFGQ8WmqxAhruY769geXc6CAfg1JSFBUQHYrcvrRf7wCDp33XqWtZfusHXJspc2dzeJeoZG",
  "key14": "5ggWmPw6gbNbLEnHPht5cJFKyM9AG7GPhGPL4wfqT55srYaavdn9iaBznhCpL1j55Rh6GVLmsdHKfCYruxVfxCjD",
  "key15": "3GZGNA8af6cWoLgMKvbwqCGcjFNx4UPxBpAUJetTQSsuNuT9nghehWCFnwyBiTgF5ZVcskMou9BXqkAozm6Spsno",
  "key16": "4BEytyhuYHL7dCSfW37wpTapVhpC8qagatp5NnGWVzBnH9AEUfx9dHivvyMtRLwUn6Cry3vudTtYBtm9o517e94U",
  "key17": "4dzRymTbqgChhrBCsf6bn5mjXmwoeF5hFFN26U8zGoRikTRBLSAF3fsydp1Zuxrii46keXQng9LJgi8XzVF43ELP",
  "key18": "2t3GtCSZVp7m82KcEEhdadyAjyGoLZaTRPVQiZWWfeRHpADMAidPMzLU87UQRQMkKGges8VB84NXr5efpormBNu6",
  "key19": "21ARtjEMGVSScHHKvpvDMrdvXfesutxQH86NNyS7yNWbvjX9CLTWr7Ry2NKmQvUnm6un8io4FWxVYUuuy7ywqCMc",
  "key20": "2QnwGi4ZFF5YC2gZi5mtSYVXiVtF5HYa31yAiyaToHNLFLKHHi2HdKvF6ygeCK8wdFQqrAvbdMH2nodgYRDbBQVG",
  "key21": "5ppT8i4kLQv9a5mD29J6sYYuJwPUjVBV99WKaXsPjmqAUiAEDx1qMeaD3zviZoPmSjWguNtTu72Q5EU9baEM5PfA",
  "key22": "3pd9SXqrLU65JyzKBRjiqGgxXmXXPHiadRCSysZemkqbP1NDjZnbsvwh2LUe5cXdtV7TCGHay6NevDwfnN24Y4Ya",
  "key23": "ZzBxvRQSaZAUsVYPMMfdki8WSvyBF9Dk875bEWX6j9RzEp5en3vKvXCMYuZomPFZDWcKGrZREiBhFHDZ4PP5yRS",
  "key24": "53Ywq3ehhTGQxJYh3TQMAS1U56WcqVLsvh2vr4qcmyTZMo6zMxA1GKDoq4hkvMQ7nkFYpnRaFheYymsCeamL5s4C",
  "key25": "3yTYarPgwdwcDVNYHDWXEZrnEZEPGspxa4dHbvhdMDyuF89rHiiKJAhYik4UUMg1d4bGxCzEXdPzTdpVGw9S4qkL",
  "key26": "47dTHZ7qadZEhvVR5FsTXa2p4XuqopfXvfwSLRNC5woBroFiRg22LKgRJLJQ35uksnMrkEHz8DN4JQrRb6xTi1H2",
  "key27": "5Mw8vGJ571MgHPr5oPnXAUVhn5pBZWe7eHhcwfp2nAYJPx6FaQYmmdxYoKyurcp1ePWZKqLSACzcnZXhK29kruS1",
  "key28": "5cTkBPfjBEejynH8gam7czCREFWMYRH3h5R4T7FbnvmmtbMV14QAZhvbEp3hRc1AbkLzLRcfcSYzg2yWzDy25EZC",
  "key29": "5ogqLsPAGLJe4E2xB6tk4S9oRNnrcxrsBRA1TfjgkJEkjWkhKaawzkA2NRVCnyh17s2odL1oRELnzaD46tMLeAK8",
  "key30": "2HdCxWvxrsojb4x7pKD2vXj88EPagfzsgwKxVtLmZS8bS5nD5ehT4izg735TDwVohDkSqzk12JNxLNVfootFc6JR",
  "key31": "3K88skK75ddMCa1DcoZL4Xi5tJTDvTKX5cpAWRMyRtaefXJNEHzRt1y53xSdr3HACVSMModZToL1XXsySStwL4hd"
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
