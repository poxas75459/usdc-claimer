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
    "5a6c98UX7zPLgYSaZAKYvopN9fowrU1vrM3n7j2tmCbCcr28BJBwextUvyNiN6amDmksHPPqpD1cnsUJcWsHYHH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MqEzpTvUjF23kb23beS5s94VfK9v3KhVhdQ1DM29NMDYxVSvgCofzePW4Tt4WgSVSjEbQBTPoZ8gS5ypuWJuVwi",
  "key1": "3K1TkAK83j6SoYd2fmH6i8Qp1hUsTtQrbjeqjHquqzCxf9yoUP1aY4pDQ2b9ktFmHhkNWKmNpM9fkaMZvKjHmsWK",
  "key2": "4iNpA2gUyXihREcjfsTyA1iwjUUogmseLicYT9uS72ALBSGSWSrK5HEyf8fK4c4JtBwcQnCsE41RNmAReSuvw5os",
  "key3": "3V1XBeHXuuVKfrTSwL7R7z4EgsKbzFenKdrHWGpNmzgPg9JzPPcJoirtbPdeHzwDAyQnEgw5kRwVHHLVB9VFFq1j",
  "key4": "5oFm2n1SBfNgH7ncQb51y2d3eYrr3oUDmfRU2pP9f3nB8PDRi1pMLLkDf8dzJYzofxS79ZJopSZFKG9zFteLzGXv",
  "key5": "NxY8xn7897ftQB8c1Bobf6cUyW849VPicyyFecjmyLjyGjZYDU7cnBnpQZRXT2EcX2e4Nu8njrMn2SWB3ZNtkmC",
  "key6": "38CzGCnKCorYLixk2fvSRBj2XvR4C8r8UA4VEZaoNiEzX55xeY9jPd3PkiwNsKipqd4XKABNgRdTbFAtjgvkw5Se",
  "key7": "3MNCqKbxp6jUYrqw5z5oKhVhWW7fqiiMLyV5FXxWqsE7qxatJp1K85ZWWeKdEN6HbaqVCR9jfP7qpRAfKoySQdEs",
  "key8": "4cmFuu5M2MUwnsY5ACe6beEov5GvxtTW2sxmMxcbf7XaEQQVeASw3Tb1qNkj6MFfBvPWwryE5E1xuWdiaWkVMnPb",
  "key9": "2UXUtRyhpqAgFbjApdEjgNcSu25ujgU6otYPRva4Up9D6Xa7tXVeyVNRTDiaygZbn9vbB9xAjG4sL2VRhzVVRDed",
  "key10": "5SSfZU9GQtK3UxEwcc26ZZCpRRM7RN76PGbta8qEvvdMHoH7sTGtN81uZtuf2wRefrD9x32vLRULm374U8USGbLC",
  "key11": "5WLtYk6mN8CYBHdkE1p53zLqwS7jBQo33ozXKpRnL9QxH1G3hm5FiWJEmsU5FgjmuZTMQNUpRjnf34gSFF8Qj7EU",
  "key12": "fNeTAY4GGzrTHvf1mEYQTcKJF6YDsg4i4coB8nUUptB7Ta61wRmPsXGcybqgq7jiWSr6MAakAW1dw3Bq8HxaRSi",
  "key13": "AvLomvVU2u1tEqJRCkEH3qUAkCn9txkCsvJ5fcBpEkDjrLBHcyJeuekB1nqfHcLZ8zpx1opAUVVxuZEaps3Wms9",
  "key14": "5iDf475cWTLxL1zPGgWFDhWY6S2Faf551GDh9LxTEM4E2pGykx9uvC3KE1cAei5jAhNhknJjWt3q61hkmYKTAZ7Z",
  "key15": "3VKT1nMHFXiQJ6sJEx6zqTRQYFXVRkvYs2sHQwTmgiECNbJwCA4gyT5vX7MtNQDFGQVWhXcU7jZYFd9jvgYwtEzr",
  "key16": "5xePoyDF9whUeNTBGy5hbevkPMzmjW78zvjCVwGVEY7NoW6J29qAhErP5MJQ8PPN8xUikizDaT5thVqEf4kNt44x",
  "key17": "2sbRaVkaASaWzbdEfP3grFaBFbpynaX4cLgQpHfwD3CWSgHwSuot7emXyg5gkmx1XvSRBgyLPrbnDTMwME5zkK32",
  "key18": "42a7psfWb6QKa5eNFx5ysKSgFXyEiWtH9nYFjJjcQidAbyg45pS44BmmLWaXrcW4GR1AsNXSjFdNPJhx1MaD4VHK",
  "key19": "3fWySCXgtw1hwF5YsPoWuXejwb4JfrtAcgXwLERfwT9BCwMzWjbR6FG2WN8a43MaWynyNV8ZBgCQUajLTd4rL4CD",
  "key20": "4i6CXeTWE7fxBTAEPYgfJEY6gcZzPt72uERCKwbU45mwqSia6x66F7225MQJpFo5YDnfBGnc3Nyx6Fcig6cKCqwh",
  "key21": "3QDt3FhYTeRDgy1fA5XXrRYD5xHSAh7r8HpfEGRYHKhvmc86qn7fxQmXFqDwTrB6LqBV3eaE2cVdvhZzATfZPC8X",
  "key22": "5t7irvE9NLuKr2rqYzRmBiyvL54X813EZjjVZ2SEJc7ZvxY4KQA1RpS2c1wuWabFGs6uRP1gYsU4zAACfMUPmukm",
  "key23": "2pYLNaHb5CKPXohzxBMxTGfybudZ4iKSfoVPPPZoZKmvUBnNtcznAFeJezf8QvwKUpbgWwD6R9vZYL74YhuFQybV",
  "key24": "654SPXFY3WHgUsM8sgfmUrKnWanDWrA7tBZ6btTngKkVYzFLBtfig8hkoUaxqffnDXPTtNU9q72Y2tubyLTgxdGr",
  "key25": "2d2mNCtpemJ5jh6EnddETeFNs7H4bzj5kPvdMERvhEQzWWNTcrNs7AyQMaFQn1YNbQx5jVstKVJ3GC8Xtmr6fqXF",
  "key26": "3n3TqytK1kFouHJcPYwmmmwu76Exzc8BVZLnd37cAq3DZNytPLHbvHtMoj9PNJjHJc8NouGykoCJW2zA9E7f1zu9",
  "key27": "24KWFiBq15MNdkmsSiKHG1uU9qg3KcFnXwnvzaWtYFQaMeDJRwTzHCXo9UShFZy2aPr8WuDqBQ8UgxGn9f5GKKuW",
  "key28": "28pRiHjpQ9bsBLLzB3iNJDfSdp94yg6i2WDL9UdcKTkzg5eNMPB7Crtp44SgxuMBcEeNV2UKjtVAeP7yn3SS6tdp",
  "key29": "5WkLCqwXZL9nWjeYr1Xpu8UkajpgmNPsdrLUeujCBR4NZoVwe2xybPqkQMJPAtH62pwVSkSQVHVNQmmE96AMv7vp",
  "key30": "3gUGhXvGrGnR1XpkmK4WycSkFLvPDseMgWf2zVFp79SgBe1LYoZjnc4xtyd1nBchAbLzYwFypKn4sPN2Lec8EBXi",
  "key31": "5eYx32tWcJmLfJbtZ5TpnwgCu5cySagMX46S9gEV7YSdLBofZPxGxyJ7DwYk5UMdmiHCAsRSe98X2JMp2qTyftMV",
  "key32": "1UwmReMJnUcarP18wZzDkyGDW4fukmzPjYnhQTZwsWvn8oUVHSo2CHupQAym2bbafyTbVwkxTqqVkwfp2shcSQ1",
  "key33": "5qUMvwoGiChzJBc6xqC1sERWrVupjPu8bsNWeMkdU2e1veuG3ezooHujsy3csXCaHXbKKQuEnNDYLoAPe21FHLRm",
  "key34": "66DHzbuPTi9E6EaEetAJzEtkXLBbFWXvB1qgPeiATKBAfDD7794VMWucbenHpTEypTA3Kz8M1K66ZnweWAC27LuJ",
  "key35": "p49ANcAqXq2uyjYax3DZm7MgKEmyX1kA271ftvuFSnUkJ4JrNtDcURz46qVwe7oukh44iXeDKjUvZKCyTVxKBME"
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
