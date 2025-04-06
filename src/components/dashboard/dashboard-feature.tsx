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
    "4EzvezrdLoPkQ4SkcJ6Xbd4bupa7YTh3x9rXojugHUFprjfZefAf8cPHhj4tbiWYpTdtidK3qdzqbJ13zGVvvkzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XSyVb5zZkczKbXv9AEc4N95N5W9xCGXk2pNb3qQHf2h9V2rnyhrTPAaQ78rq6MhMRz9SJEgtYqP9JPYpdo96r4",
  "key1": "2gcuMB1632ZBsGAnuoNmRoRK3BD4xZRrsuWd4sgLabVWWWx8wwcm6eT5cKG7vUmJ6REhzbmSWUzu65e1CcYsrBRh",
  "key2": "VvSPrF6f7bDkCc3kP8cQXpG3DJBScZ69fRWCnibr2gThoWDt1GgTUTMbn6bkRa3PQKFyyynHUdF38FA4gWwFdG5",
  "key3": "3LJwVv7PBRK8u9kGuRhcZHzKGQFPecaWtNmwizNxvFzodcX5Jc6LPbQtwhvihDDCjQ1FrAWFJpX6SmeP2ju4vNVy",
  "key4": "4o4aiNWEmD2suLcWKwg5k43x6tpLFC1GEmtVZUhbzojuFHCjEW6p58WLvjHnvdj95Er7GzyW2QmbaaCc5y34z9jy",
  "key5": "4hzGY44pZgMLhBZBXdovkzYSVMEZjVcRYoTJqyCt9f52r4fAKuNkwoeEu4ZVrn4UQtLvKFAcXUzFdyj3djc6k2Qz",
  "key6": "4gbAtGX822RfHRnK5WyqcJbSsUkAkbMebaQP387wFUkgoH7eEm7UXCxb1yubWZzPEcsLYNms35hZ9X4GgPd7ePgy",
  "key7": "39aEsHzKNRH3qdNF7fEcMCnbuwaWViYeiuyXUX99nbMLMT2rHK3cALhnaEZdhH59WZyvJjZ8zJWkzwQXov2JUd1S",
  "key8": "2n9G1YDgTuCGETFJgbwoifwCp6BntXgDbKyLNhJF8gtZnzuzYStt3HJ6DyjdfiDamiMuwBKo4ucWAGHwoDQziGQt",
  "key9": "S55F7cDfuHr2vLgC2GDdp16CZoiSNeQ7k1r3JX64LnAzKLN4nfiKBeySqVMWpePJHiKRtb9xvYG5oAa32E3zoej",
  "key10": "2spncDktpX466vAJGDCHdgxVNJYN4S8keNtcyhPJ6RFHrem3ZMSh26B8NsCFHzLnDcMReEa7GJpUCckPQU79F3tT",
  "key11": "4DvUPwoyzSZDN9H5ciQ2PeoeUQoRr1PXX1qDxdFABC8BtU2ufVabSfi5sT3suQbqqSe5U4Mz9i6WCBioU3YHpyiv",
  "key12": "2rp2G9d6EEPA6W4kZyvcHDhAuUHCEQ8PLjzWV3ohahjd1iXirUd6KhbQxmarrwpSzXU8t6vXSsVKQaueHUyo92x9",
  "key13": "3ZRuA28Dg7XCQCXmRUUVkn1FzBh9Ycq11JeS9PqyEbLdvt5wa7a1odKEUhBAoWCv12yMcKKSRk7vkmpQv39TenWs",
  "key14": "2UZZ4CC91MtwYzQEJsNtLYAG2zxYUmrhcTvExyp3Hz6uMqLdnUWnfWY2J75Z3t35WaM1yMkZKNRTvEXm7EveUtWj",
  "key15": "2wfLixTewvV86gSNVR7isrzKeUAo85csgnUHoM1zRyyM3i9YqGbjD8PSxyvvTHxuoBPCkj6V3MuEULACyd8T25dk",
  "key16": "4rUutVcwmsfe3fxUcSEfo6ctqjrh9ibLTpNzMaFfgLKC6EuqgMwi57BE9jD5V6nuKc5BuqCCcvZcwjD7oKhDG5aq",
  "key17": "XFzawUtDEeY2WLpFUSK5Xn4You8AJXaUauygTSer2NVqAZ9tGCQjces9qV1srQH6XJRsfJgtppvPRe7qDVyoyNk",
  "key18": "3EzVEwL8qFnWwW9jR1F3KqkCKeQG3CrfdN3SyG6tHeYpz61qCrQnprbUsPn2Hhpq1V4DPRxuV7rEngcmYcef7FSu",
  "key19": "3UvrunHrKqATFxP9E92SQV5JiRCe3BK9idWAZpfBVH1nvcuM4pUuUJqZSYAT7XMycAHCkZbbt6nThAX6uAvd8D2n",
  "key20": "4zosuHLoHoBYmazTrCZGEpbspptX11k6KaKGZssP4QUcCyujwk6a3V7PcpUpPsYrEGWTv3QHPmxNWb28xAGY6bHs",
  "key21": "66XWz8GHBVdxtfdLnXJaonSvKMxpu1vdpBo5JzQLtkyZNdbLejNLT8LHTG7CmXAJwhHLUXMbM5YZDAPu3XUtMwi9",
  "key22": "2tSALRm8hNvgqwKsYUYLNRsgmDgpJgJnSq9gZ3ePXStMrpzWbzziz4G8uu5LT9xFyx2FGJbLJrDdHvDcexWHw1K",
  "key23": "5THB5GFFcyM5cxAqQAVZnCizi7EPbgH9u9RYXzyy2SaLPpRWn1heFbXmspyufeZKrZbm87PzkMaRUzDdxK9tzNyD",
  "key24": "YS2EAK9sEs9Q71XYHWeuHoo9VCwuaC17MexSiRBU4Fiv1tG8NRqUBbQr2NPwc1A29N3jryVzgVER7JfU1EUVXuY"
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
