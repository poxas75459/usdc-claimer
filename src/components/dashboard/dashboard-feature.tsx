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
    "3Hb5EEqqbzsGuoFCrRvFmVCdgVMhyf3NzyhrNZg2H2mBRUKnNvMjfWQMfmuZgAQEkk8mQUfiahLahe6K9wqncLjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2rWjc2q9Wkt2vFnwEdE8KYDKMb9NGR4iYR4WGBpW97W4NanCjNaz9rqCWq3S4htDGCZ56vDzYM4EtfZUKFmAc7",
  "key1": "4LXkV4VrMjcFnoNcgw6yURn2LDZTA5kBQcLxgqVt5WdzzNYJA3gvi6sHtJnSygHci1QHSYs1oWnBcK6rytJ9xuqg",
  "key2": "4SjJXVGxmYHFmXYMFK4wsf9vREjj7jvNU7LXTavTTQnM61uoR3SNW7GDtrRQtnbsSzsEB38zhHx41CAD1avYm8up",
  "key3": "zNu87EcV4wfEQdwEjiCTYvbUZztAS7oaBiN6S29t4Y11tb8PzUmxyK8G1jytZQ48YSMWVgMdarMCV92dK2M5VVq",
  "key4": "4ybEHkNBCjg2bjg8gLfCR6um1G8SJgrv2AAveJ7oRWpwaWwGEcH241E7MedhRsbLwLMh4MKVpCnHSj8WE4SjFcY2",
  "key5": "4oohgcr8BTt2EEC5stzwtiUezfVPnQhXBYvdmoDK3VGCdV1fjfz7jRxtcXT9zMKY9PaGQMyXcnaWkqdcwUmthKjJ",
  "key6": "2NvpiJU3c2tSkUzvx1fF4nKUDA2ZLbPPs3gouWbzSiS3ua7CYmpK242siGSkVuy258Ws3vH8f9MgcR3hkv1fKTR3",
  "key7": "4gkfAxrpbcvm2WZJE7VUtr9U2tBZ7qxTmHR7ioMWEpjUkmiTPYP2td4RQVDou3mBpf1EkRYorV4ANc1nPKbvDy6K",
  "key8": "2kEJeUUtFtnzRFKvzHtwFY51LhdYghU9f8XAHxbr2JJnegNbzsTkYvUHZeVDZXNeL5XKiEAjSFwYUQvQSKqqEgY6",
  "key9": "2wt55qSfZU9o44PGtap4eSsy1WyEm1xnBFoGHVG4dPP11H1B8CdffKdLYRbDcKAGrbmn6euVnMztGg6qUovHChSj",
  "key10": "5A4PR7nNu7nKhgb2wtRghWg59rd9KwDCj3zvDYJyaAJbwXZmx7ZviNBMKkCHRx7cAGBH9PqirtorN144MNmntvLS",
  "key11": "2yCQb8FNgearqUSJEPFM7YoqVGcKbCDMCvMMowuMYg443eyrWUxjFifwD2dFSViHrjFuv7FYXGLRMzJo6AQJNdb",
  "key12": "4mswbhw8ZDBsEi9qC8gWtYjigkvfNA81FhAzcHg8XqER2kas7sgWVoNHS5yYVwc6NZbvUNWXGqMwGEzBQz4WMhF2",
  "key13": "34nss8mdfUfRZNQnNZaXh8cxV4tfXx1yLGouXBRfebJ3Mxz6s5dGgNmW2uVQDcMstT7c9PES8wMS4jQjyvdHhbAn",
  "key14": "F4ZYn8KNMbBGa8ffZRWVbZmv813LfamM6U4Cm1d1E9WD1LHGQtphqoNV5etgXSbsd5bXvpBrAqS3fHf27p4uVQT",
  "key15": "3dwSaYxS6HF7v5eQKd61p7Z8M372jhHYa9jdNejmTQSNGdt1mY3UoN4Tig9VZ3pPVKGog5J86h12TfmdsKYqBUde",
  "key16": "7e86C59q65WFTLchLdi3KvqbgaL8exxjmmZ286TGX8M9v6kpYxskfP4JkDarrA1jNkXi3ZhipcGNFB7GLi5QT6u",
  "key17": "3ajg26AQNsDeJJCu2YHq9kv1Q31rkTyogBZ492iAkfKTrS62W5ab5m9d3nvngCb59Y47xNwarRixMUgWtwfRtWZe",
  "key18": "7a34q4RgDxNuAptecrRXze9nPQj3XUCcySNaEMLRdSiiejPKq7Apbtvxmo19HYcybpLYUpwYXLZv8njFkjRDMN6",
  "key19": "48cw9emaFB6uQaNiy6jQdCaYEZ3vpi5JK8P6VehJoanubevvVSJ6AgRv12h8d4n3chCRE3yLa5BbNkNUt6S4WVez",
  "key20": "4AdV3jjEpBVwvsxo9uHommC59snApQuk9gRPcPAsCE2v8cX9bY1GqvLqErQoxmS5rqxNFVTHZfeKYGUGZwNkwzfm",
  "key21": "3JJwEHwxWk8Tyh8r54MbxTgpss8a9wdLFN74kX4DMxpSi3fXWeC4TvaQzJWeZekEYVeb6T1G6z3H7VP6C9a1zj9Y",
  "key22": "2C8CxMcNhNpv773UwVQyFJNv3XJxiCHosRqGRrQL8L6U4vgyzMRwL6rdRFcoaAiNoLekihrx4XN6S3h7ZjK22zVF",
  "key23": "Zyi9iZ8aWXZcmLGSYgg7FbLxkbeFEdfXMSxeQJ17Q3hCe6qkVvUn7dKAFk27aQAXC2UZLUSK22CkZJayXVSzN29",
  "key24": "5wCXG1enCy29Fj1J6yoCcvcd7x94WhY8J6EhK8dtHDaZY6d8ESyx1cDGvt9GR3esn3Cu89C3qwWvg2SgwFpJvCFC",
  "key25": "58hHKWXTusKrapRVEFa9c88pYzFtBq4T84pbmh1J4RZ6Qj6utWKYW8u1gZM2HwnBxhHZqyX1Wz98GxDLALR9QjSW",
  "key26": "3v8bm7Mr3CELyuLLt6qP5MqEkeTzNxbQKgm9tFtu3ANnxGroE5ytuWTgpHD5f8EAasLcNmtXktF5RYgse1pX3Wuq",
  "key27": "4ATpBngjz6dDdmYRKCmAZP3VAFh7qzNNYddqr3ULVKPzTodfWg1hzdzvcaoFxBupyqtAbtexxHPU57StTYiGf8Pb",
  "key28": "5yMN2ECzgK8Bo5CGqxtoB8zBBj6G4VAoAS27MDwaRpL8X5RHNruTcmiemsncwtvP8XZoi5R3PxYL8VZNgzRTiVEL",
  "key29": "4LCmWzrdm71xSgNwEmhL8x8T5GeXzXRZSnpxdhAMq8sofq9YXGCQGpzR8YA5auvq28imdo7nfVJD83peoJ48sm1K",
  "key30": "59VKEs6iiTCqMn9kn14LWhRP8KhrJR4cYm7sfCr58vzy2PywckVB4RCaXdxAF5HiKqWMEz14d2gjAuun16jKQwcW",
  "key31": "58g44D3x1ReemPCMBLqkraZwcLV9Qs1AGDscYvT3A5ya5NRhS4A6KFSEBaCZpJfEoEVgYpxFJty388BB8hdLfqDV",
  "key32": "3xSRkzhVc3Ur21mLRkDTFVdv2wh7ibCDK7sNrLx2ngQSJiNAXpM1kMWkhUw1uAWNRGfhuwnh2arw7rYs7zSNFech",
  "key33": "3aDRKdEvBwJHLgJ8g4MkWZY5cmBjzZDFzYzGGLoJsK4oybry6myurwxQSrw5RFeNbVPyX2KkpeFkXFKuGyr5smjE",
  "key34": "3PAxY98vs2q3V53Bn2NXuh7CTdkoMZXeNERSE9UUmuYGKAAhWbYj8cr9WHMUVm2zjecj2VZ3Qi3MG6ihAMwLBHxr",
  "key35": "aaiEK6T7sxwzktqquDzNiAozEZSUVtdNTUGBAeqHswrxvk26h6Msnv1Pr4dhkBdtehaii8PSn7pJZStTN2cSDFu",
  "key36": "61MMNaNnNtF4ovytFkJkWJBh2JXxi7bUc1pdbw4XUWR8C8pciTeZwpXbwLxhDWdeFCx2ZrtKc3QzhGqzCnKsnFGu",
  "key37": "5LKmGiz92rivrMRpeWz38Ny2pwxa5XihuXyaakAemniEeAsz3BkvZzNQd5Y318b8FJCYXBb2HKVC8ANv8pDCVWZQ",
  "key38": "2NohKxuBLsF7L2iqr7fcAaFEsSYpBbz9A2KV2FdNRtHuTgnFwjM9Lq7Na7WrQWgv8zzE2UdHSrPUtErkPnceGZb9",
  "key39": "2QSCHgVH72XnLC57fDVd1mMfWy8HNX3YL2uP4wVjUY8PyZT2KiewXYD68LKjzoAMyV9ujfanKZs3MRMSvWdyaari",
  "key40": "34esRSe3aETVEeXYKsysyJKrLw4zg8RcxjbrwXuqFCALgYmmjSLVcQh6aKDjDbaNuuaEe16W2Gdji5TGfU8gvPmQ",
  "key41": "WPe4cbcz2Ba536bxfozVjN58oEJKV6UTQfghCpqYU7PwKoMxEyc2eJFtCGvqJMbysXHGLmDhVDkKrtEiHsdrRAA",
  "key42": "66H3ztL53X5ZEysEzWzKaEw1jLEPhxwT7XcyrsDMGgUYrXEWmuHSELGtVUHhd6NxxV5BAFR6yT4hG6SD1W4fjC1t",
  "key43": "4FCLFBWt85hUcKwedVSPPNdn8YYQUZGSDD4ACuqBFP7hQxFD5ss7JFm9c6dRqDESZ1pQdEbEoK3GTiMADfQjPG3h",
  "key44": "4BQfkAdgb5GHyuQx4dLz2wpzjVrMefAb1HqaoFyJbybKJDW8puDGMyuPKqYsCGyNAhtsg4r6ZYtnSWXPwf1WYE2b",
  "key45": "is3BW79hZ7NW5H9R4uuiaVcd1ETfXNZEtjvpRC4NxgzPzdyCKoud2oJjDmLi7TSthgARF8ir742SHqUcqsZykDz",
  "key46": "HCtdLT7oi9hCqWHCGPriw9gMZtThqn7nKbn6SRz6QrdrHQ2H5TtcPVPvjojHFsMQMUx9Ab3BdxS3vGsu7MHyhnH"
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
