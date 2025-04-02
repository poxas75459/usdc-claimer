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
    "EzE2LjiBwXvYjxbrRQeCA4xyRTpP8tiLPbJ2pg3x4GDfWUyDXeSaJvG15TXqXCEt8A8ihwqPMpuufiUWF4pbXpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRbysr6zuQw1yecZ5FebsdB8d6Vn6Sr3TRTYvbNsZgs3etJsB6WAcd4dGSFoEim7geyHQSxXJJqp49Af58qJvfJ",
  "key1": "2BXDrn83e2UXHCaAjb9vER64Ynw3aFMs6id593S36VT9evE8MfTUYFYuXoVCX6FW2ZaLvZtt262tqaMW25vtBobg",
  "key2": "4XibdFtH9GkxkTT4z12FLQ5ooHPXfgeFPLNNRPtYEoBJJqxZxBtBywhPF4t1v8k1wwbS9xEygUHGoQEXf23x9Urh",
  "key3": "4r8gNYwJ9h4UChLBj678EFgYXHvhv156ZkYJqFiT3yfdmUpdxUNZCGT8MCKY5TFrypsgQD449o9y6PPi7Td3tCqt",
  "key4": "sdsJhoMNkzM3H9axvXCaXY4rCEVuzHUAChtJXvhLB9wKZXaf5x8iUWfntuytn7haxo9SvA2fMtJbFWm4HczTqzA",
  "key5": "ZHhhAXcjMv8LiuYbkSjnHV3G4bDuiz8kWjeCBpHj5aVxpnvfWTDPTW49tv7m8UQgUKfxJbkXZptPfUHuEUytp72",
  "key6": "4grys97YhWaVGScZHibGhurF1uMEbo2ZjZ6RLP2kjhicWoBMJo6exPFRjjEwtKkPgso7MvBCbrKcG777LmMRtm5V",
  "key7": "55PMLFi9jLEf39ysM2yvKNkzavnbFX35Z531o2qJPwk1PEuJeM1iWhg5NztvX8Q77mxD1SsveDkYSjQv3y6VXox7",
  "key8": "5TiHDEzoYA4E94sW3spHpjbhfJYB4ZLLmN6zbBJ2f6sRZti5R7uQdDEbmUYKFeW3xm4u2GjxtQUuBqLGx1a6Qo3X",
  "key9": "4G7E1kiigND4ZNY8QBANzkSKZ8o3jUwAtkxxL2jwDRwdbUrpbz9wMiKYEKvmwDvJ2qrmf3U4Mev8NZWdiikmAkwL",
  "key10": "4bu8MKmYeGcDyFWCxcok68NpMChU6QXD1x1m5kWrTqPeRKzP5szbtfDHHCjb15kNJuh8HxE6PrZ8o1z8zhjcbPSH",
  "key11": "zVru52HakfBnQH8CXvx73WdNPjdjZuw96jqUSPHg2gjDUdUmL3KDo1HT67o3fjnvgnJkEpWXBfvvkosPUUiJS48",
  "key12": "5MHjwZwzZzutK3afw3xu91nWHJSXMRsKpPDu1acXPmRJcAJj2TFXAGEeEopHyLho3VDzGo3VPg76oEH8UzS7M4PU",
  "key13": "2koSYw4gofqfExvvf7dKtrKW9yBETnpNH7Z3uomhnHCLhWpe3ocfZnLBcVs7A6aBtAbBtS2CW2g1cZz4raNcEvms",
  "key14": "4zWQVWZQ8oH8BXy4r2zBKX8ntyt9SUZY9RSYS49stCEXWceLVeuj5zBzKxNuvVWaEPX3tw19QGLdjZLGW46Eri1X",
  "key15": "CoJ4cCok7iRfEqgQFYtV8Nc9kQUMSukKVfj6L1decthTeQ4rhxup21EogiwrZCSBA6r6n6eV6AfVAsZzUjgijTQ",
  "key16": "2heUAftYwRbrgtJQnDwgBVbCQwja4rBu7CruZCFUqSUiPfXwneUMkkeB1vNUdEEg57YKCyCD7dsT6c6pzcSausFe",
  "key17": "4TNzhVZ75chkJnYw6ttvEQrnicQAnUwADNKTq88YfUPqTAYuvVP7DANHHUhZj7LsNqU5CdqHjijdQnFoPg6jWG2D",
  "key18": "Z6mwY9p2nfyjKBEJT81pjVor7McNzknwwUzbufApz1JDS1ZAc9uboo1bKKDFrVE4ktjFWM5rxDKYHpTqnUZ59tH",
  "key19": "5VAVpRipvjjF2qMWmRjrh29XnPkNHUc6bYTqzuuwB9pwDDFLLSuWaAeZ6VFNaKQXYtuLKT8Ggf8fhthmupsXSfo6",
  "key20": "48FoVL6skUxpxtf7EdorjCVmJMWe5tr2akh6BDVhdSUP15PDZQZNstGyHCbkdMiXbb2nqAfhtDQaEMBf1wsk264V",
  "key21": "3XzUKqDZQSHJngVKL9SQVV1CgJjfEGajkA9Gha519zvi3b2XjC1Y5jk411mKbgXpHtJoir6u8uFcBKKL8RQJgXBt",
  "key22": "2qfZWfBc2fFfF9D7vCq5SqaA4RFpdoptmC7EsPYJ9Bt9eCNRAZaY6Y5i3c84xgiBKXcu5NbCuuQgMeM5x1T4WXFt",
  "key23": "3kKyPDjRNL7nvPXvZAsPUX85aTBx9ULHzRmKFKZLmUtTqyDhbwvE2Zxd8gToTL8JkZNfWdx1mUFWLqoy4WcBBBaH",
  "key24": "Ww5Koo2RwkR5u2JXnsoMesX8mXL2eTLyaLaKP3smFEvn1K1HDLns5jAUGorLReCbDAhcNXCiYAdoud3CMJ3KTci",
  "key25": "HNnstwNGk4yZcvN9GwkFhBRkK4qZV6PvA9cX2WM7VkrFNtWSdexqWcavMXuqZpR2MAg17QtPa6kYiVgUyDuzWTA",
  "key26": "FRr4sogHsifCoAb2JgY17KQsp4VyswmFTB8YwvBP5NXrudkmfjmvNNCXNPkDPVKzRZ3hPdGxZXV53otiHs3hq1S",
  "key27": "3qPBZmdJ2bv1gdhJjWZDC99abaZ3fXeejUpW2eH19t9zyf9vaPFpTFrrergk3PUcwV1f7h6bHmj2E85LrPLADXkw",
  "key28": "5ktwWorfY58rrAWEruE6UyVXcmtBZYxdYvEk5KcDLDwWd1MsUXUxzCCC87enQv41DXJyVDSJspcgdzEfj2m1ZXPu",
  "key29": "4zEGEVbQJ6FPePVSjE6La3njnvnA6aMpHFQXfU9jzFQbNyETv5p42ywooQ8bP8cQak8wwnz9y1ns7qt1yW22PFuU",
  "key30": "4F4VHYdF2rtxqzBzGKvXwJKusjshVZWZ3dB3XhygxDP2HRRiF9B5A5DwN5MLZarU3D9ykmGpFs1QtS5beVj3n5Ez",
  "key31": "2eRp6EpUJ52BV5yHWjAXtTUXLcSAef9Xb6b4jhzuNhYHkJuKydan2bLyQwLoFKerxVLeyP6baphJxUx81kFvXrG"
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
