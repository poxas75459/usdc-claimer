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
    "eVMfp9pbpVQipCLNxB9LvVhYSrGKAF6ExK8GymzKRkAURkSgnprvbj9iahxy2prktc7kPYgpZ9TSkh2QTKnj5qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rse2WELbjEKpdDcKde9yWnszUtcAWYTHE4ifb9LhoEvyur7iAFuMZyk6sA4Lk9NLwhrmUcPE4rASkx2qYPHHGz5",
  "key1": "65KjqdEbgUbxY3H24fkz6KCS5EJTgL35GqjWKmJTbQQASEEMNbYXLHKnH8kA9m3P1QUGJ7FRzcaewx7jH1QRt2hF",
  "key2": "5k9bLcHWPYTn3ZKJXNULQj78BDTbzCnre4rEs1ftKNNhvhzSTbHvvDcoyKDWqeNG3acb25K8BmbagCodJfeGmXbG",
  "key3": "5K9BRXpxkNNi7qb11CHREuWkdjqkbi6Rao9KXioBENNH6tw62aEZPqFzPYUCCj6P21sxhGFMZL9sQFSneoi8J6g3",
  "key4": "4eCKR8M5dE84A87BkprmgphjwqsNUr55qkD23dNrwYPCaMmM27S69RmEena9SNwe8DFdYNXCZHawidYErHRoFdhB",
  "key5": "3e3c9gF6n22rYWHEMkAst8ZxdNYRHkAivQ9t61bDp72zNAygbYp3j99ZHCRbEjEf5HgLtdFNUyt5RxCDZMSTj6Fb",
  "key6": "tGVvEh5ArvE53c7WYvbn1Eprfk1nPos5tN8QAfdquRgQD13ibPz9M1dgX7zWCsKzbuRtE42Hbu1hi63JJbN7EXR",
  "key7": "3F3dXaWrrQvbnbJVTPGahpQBris8xBUoUAxBX7hJhjgfxwuTF9PMQiw8tiyNihsKtfjRc8SfRJaCk2HNFtkPGgKq",
  "key8": "5UHnrnTBY5S2DxKNrMmzbHjSVaeCEaKHnhPQcEdrX4SNS4NkeiAbhodcZoV8LwmMx7s9ujodcLtJDktns9FikjHJ",
  "key9": "3ckFjpcarupFa8p3odbgbFqFfjzscJJkubhXbrkHRU2h1HWUMChFw1DhNKC9QcSQWigEr3rzJXgeAxNQvAPGa8BX",
  "key10": "3hAmL5KNckDjQiTBvqEue1AH6fK8sefA7WvvUcHQMDmji4QUdeQ9ZJxaCVLp5LTrbr2hpvZ4uaemt2XHHzSdn5Kh",
  "key11": "2p8etfyqeVWRCx844s3LyXY2RgSPDuAYUpspNrCDCsTo8aLyKgkMoNmA79wMC2KX2uxpjZrJiW41c5yXvoQwbXtU",
  "key12": "63tkigUJwUdqf1e4BzSuWXNGrnMt53MMy6XbtzUDA3LowqhR3eXbViJ6N8kxwNpMsLCuXX72XkxupTdGufKgVGkF",
  "key13": "24m5RqkkqS6hFJ8KmXSS9e4fsJF3wdhPMTzs4fAmnizUX8Y1unkXw3oPJB8CUGws33bEjamZVsFVZ3vxueVM5f2g",
  "key14": "4ZLUyDfFZBhotH4x6FESPkBzKg17DE6qt1qrpYBGJK8EWaFG3aMuqrrwXAi7nUEFKDxidFNCdwGFWxMe8qswyHUm",
  "key15": "3NderxZYK43k2acCNW7JjwkuZrQzCTgNABqs4ibF19a6BPoNnysEYXiL1roRGbhhiVX7QizT6gTKVoCetwMpyezx",
  "key16": "4gRgZjYBMEZ8bWxnm4w5asvhavdHK4VHA9LnWK2Zwvdt9MojkSoQLvkZUtGG866nzS4dc1fbiBiXYQMeaoWEoCV",
  "key17": "2KnB41X8axLYjB19ykikpCBC4nAPNPVevGxcS2LUw6g5y3Qvd6vTxkrMbPRa7UH8vwe9LTzVQ1qJ6KyXx9hCMzho",
  "key18": "3LiEiyErTL53rncCrPfdREp6a154kc5t45uPQfUjJgGrdmhVg7bFMNUvQ4dubv5ejhpXXVy8mJ2tDW2UdMaxKHhX",
  "key19": "5cuzf6a9ntsCDas5os9F4CK5qgduFVFpmqDAMw2mPLDbXdxVjh8BZXT79MfavCaXpaJbJ91RixQHDuVezwcZS18E",
  "key20": "z3qZMRL4UCiRzhtdqXGYGTRyyc5oGPAaYH5hJr5D3Np8HDtKRiz5afJMfymP9etAcHNjzLjYvTjSG2pzcAKeM3p",
  "key21": "2oH1Nm8DLHP1wmf1EndJ71Y1zNtNTQ88kqNArJKaGRNxvBcHkVDPsUXbtW9DDwXfte3Hr8hKGuUpU8SPVN8iKmFZ",
  "key22": "5E5XYMoBuZVqXxZrayqCrD1FPLuZ7y24RFAbCZb5SZCR541RMkPPUoreDvTQDdDXKduLogjuv4dPWKrnrCW6mmn4",
  "key23": "2PhFLnxD1Zvy8bCc5Mt5d3dYm7eygF3nEPGKS4H6bAxYZDNVh9nbi71JL7Ucbir73QXPJyBbgpW39QXrW3ZLV6eX",
  "key24": "5YtY1G6MY44wniAAJi6UUwUWoQxd4VSMp36umzszhPxWavMQo15bnEup7shQaZ6QvTKWxq1JjZdDDwyWCN4uYWnn",
  "key25": "51kQArBqeEVWwx6iveoDX6s94Y7Q3htgeBUcVgvix5yXiXsbHeXG6GFQmHXJwJwMk8wrhoXvg3mfxaUg4pmoGvEe",
  "key26": "SdkdzF7ei6M7CcpKeKFoufCJ9tQdghJXJZvBWbVPT51Th9Uykg9jzKaRVUifU1GJ62ZbNdfHSWVZm9ZDsJw1bXV",
  "key27": "5td3mbsvE6iDD6rjx61oiy2vvsBBahKxQQEYpCiVBEWGU8SfDTXhfYE35UugYFcVvRucCoqbZg5wV6p6Ei2gQdWM",
  "key28": "211WTvv5xAmemRZL8LkL1WjL7HdnTMtm7DBW57Bk7f4pLgQUD3zVn8JX4dLvfQGB5vhqVMwxiQmxWZNUSHCWwUyh",
  "key29": "4ZVVWk47BmbbP3FEvpmFJUHcPj6zhGTRz2kyZqxPgSLABM5f4h6VYprVVsuJm7PoSpq2QSR8QCVpb2cQt4psZaTU",
  "key30": "42BGYUKi63ozjcki7S68CFkfqxVfn5Np3SYRvn1n8yDkfjA8MEVeyerVM384o3WLAM7GhaxjSCB83qe3teu9VjRz",
  "key31": "kJQbZUm7f5Xx8J4ptjuk76fz5JUfn2G1A5oVqEh3npCBiBHfcY7Kec9c1z2VAHT5HeH5iCDxBnga3Yd8MzorPi9",
  "key32": "c7zA67W2YiybpHdEf4JzFdfXCmf3hSFodUkkqsGte51iEgX6Qe3VQqyaUd7xuVjhrhkH1uL2AH7cBv3f9WuAt3X",
  "key33": "51cSPRhuNiVnQ3LaDcYgDGFZm7p1gmLWZHp6aPnYi1jogUHcre8JRrFFPBUpLBGfPRQZ8DGU18i2duzFZmm8HvJW",
  "key34": "a1d4dC4vcUJbz6tMZGU1NTf1Vn8KXqkNDJ4AzJBchqhY9dauiXxhab8hLeBj9XNMX9J7CmyjkAGseDMi7eV97oC",
  "key35": "2HHgDbnHUMBWjAYsqDBR81F2urbTRjz3fQzqDJmdZhUuCrXmiNKiLiYyDh9ZXqmHnLTBpiJmZTyEsrpt9otfSWLN"
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
