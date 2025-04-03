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
    "5SrtgBPPh5paacEEfn3EvvaQgze1fGUzPobwcsnjku232k3Qafs1FEn4AebVwwczUFuR6qNCnCpGGNUZsH4Bcntk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRRrHhVLExMXZecuC24EEEp3VweVg64QPjUTUZfcU6hCM6LHqhNjBxPLq8iSWgwbJXorKRhcGtUZPyTnFNotqWr",
  "key1": "5frre3feppzaZ8585CiaBJ3xGL1Bse3Pbv8SHxPTX5feC4ouE1UVH3hTJ8Apjuc6Ujj5uEAYoK7MZkV6fiBaARCH",
  "key2": "4XYn1khVty1GPwnKA4nyYzcHig1PR3V8cKqiXxYMmupYpRcqkzeh8qkj9xwA2b7GTkG4ahJwWJ8Jir6h16ygsfet",
  "key3": "22YTDGb3KTPocz1YuFzmTgHxSpSTonocQHETnYG3KwrXXEYwsMwUV5mdWhD25q69JTua2D2jYPxTXaZzXPX5b5aE",
  "key4": "poNNZSZD6pdctrBJihpi55XUsodxPDZfSPFdA4jpcffMmk1dytNYDjfbi3HmHHngyNmMBgdvgKuAdWpEcz9smMz",
  "key5": "64WKUDqECwVb9oWRoMya8QcJgbuXd2kKbL1Dz1qFNcTSLbuBvUUPWT9k9ACtZkE6hbf71DEU7ra3Ws35sMdAS3rE",
  "key6": "EXR4xapwUK53kqD4e9nghKucewfy2UVMzVkbqPBESaDgVuznd7eUBkTQHreDaNzu956cLz1PxUYYbECDAmUeMM3",
  "key7": "3MfqU3ZUDUFptwrcZw3VXBb9Jbj4x7wmSsztN6MVQ4mW2sfpi5moDmCAE5eivHkUHqyxKZxbwcF3CrTUABbKjMR2",
  "key8": "5gEubu3fFu33GU5nMms5DZiD8EDVqMZjPsRhucejJj1AzT1cePK3YrqbqckWRTE8xPgqTd7PN9i45eWZhYGHPTtz",
  "key9": "3vpg226ED3PJyJTYgwY9EXHtY6D2ryKZwRy51Mcg3PqFX2B5ZpSizvRqkXEMJQqrcf2opUKQj9BWoDfsBwZD8YVC",
  "key10": "28LysP7rrjDtdhdLVkYX8pvJpAZYsTywz7ddR2NJ25FU3DxHB5dXjihEEyeegatxvvbybznrHZEvxEPENfJCEySC",
  "key11": "vr7NUssyaBWZE5Q7kqd8fdzcHkVqUvMq8UWKNhTi8Q2cmioPHats9Ywr9ay6wNLTxEbttaAZGtr5wUwv3GbqVYw",
  "key12": "5MwMRgAVLTwsiUKdoQMtVY2mkCwBtGGGkut3LjYbizQvTwRuA8XYFvnC9FTc1sAWRbHYxL55EBVosoxHni3vo6r5",
  "key13": "4DqZH7sd2TD5Ka7biLwUczc3pmabH2Bb7iyCW7v9R4sYCP7QcKfZJFtDbaPztNyAiWxbkQ7mpRQB9ew8DTFMMaJD",
  "key14": "33xZ1XZuRL8rhLt2bnBFgVNvaBsEevQtwxcgTgxjiQxjGuEvnuZSgtQTr9AERpbdPzepiMgkkrXV7yXnApvTd4qv",
  "key15": "Bi68CEyjpVBsfUFqnERNt7t7T1SRe7xGfvQY7u5i3VRnk8cv9aNBa7T18oNNev5wrawoMU8Wpez8CSZdFyDSdZT",
  "key16": "6hRMbQNuAHPJyvYNMsJkPHUDAo8B5UEMUwG5RxXr1wG6fC2b9ZWv3Ejf49v2dpS26oVZsnjxt4SZMLiqryCdcqG",
  "key17": "4hMQiW4QfFkMbs6XmLkcH6MBCVGKsnRQQS48ej38M4CTX1XaXFE9cX2rm8rm8Aqtvq39LPZRApnhhGcTLErsm98c",
  "key18": "5gGFLjBGk7fj7PedBTqzaFrkKooV2jwFYF9FZwSNUNtG76zEWXpcGNdxrmYECTNdiScanwzAf6hZ3JYCaJhv8u94",
  "key19": "27WrQLbCcDjqrGmXV7gNWGkBVjddD3QLQYFvymcEw4rKnVWwcSbkSpJHTxEFSktVa2V2tdJZ3KPtkhBScNqVcbz4",
  "key20": "5rrHjHPg582f6e81Evy3N4hZaFTNeFKtWE3iEUHrX93BA9EMrfiYtTr2cis9anNbMmE1JcDhuHJgN8EKRyZpG3tm",
  "key21": "i26RCxL62fqV1ARnEJjBSdnedShhCsJqKoXcLGs6y6zRCmPU5ccWzAf8u6H2SQGj78ToyDVTs3NKeMVK8fgQhG8",
  "key22": "2mT9aKd4NUmpDjy5khsicPmcBBcqiSgkvsGomtESmpHHUAP5tgPf98bk2bafj22UHXzfL8nWL3JHRKRw6Ywybnci",
  "key23": "3kK4G9P3r48Hd3Ju18MzpHt9eKJ18vM3M3S6mJxqoXUhmsNgWx41yVEkAH1FUk7ZcPs1SVMa3kKJbQtz7zcJ88mX",
  "key24": "58dzM51crdnbHkjL4kyntR6M8o3XFk4JqdWhmpuBPVjifeo18Coi84wApBsG9jVAJ2tQK4a7gUrJJSaz5vJHBTzf",
  "key25": "4RmoELszZ5n6vfaoJ3tU12XZGLjKu6GmgD8fPhxX3pGCeWjWhT3ptq9s2QSBTFgRTtuwrRxhL1KtVXi6kspS4Nki",
  "key26": "5AFgUTqpQHVDYZcrnbq4PguMAWEA9b23U9x6n6mTvu5PuSKtQVt9ZTC1ou9C8NcuYimWWEZxe3h59whm9C1mWdGL",
  "key27": "5kFrCoEmZACSWZQYTzQCy6S1f6Ez5UYFJJy9PHhUNxt5hJUn9oHpwox61AkAVJLhF8REsyJ812njctnX7BWjQ2tS",
  "key28": "LwsyWAs7cm64NfGdNbUooqSJp2YTQZ1skREi7kkguWRPoFvjc7VRrT3MKPjC7PLERAk58hHz81ingosFm46iWmC",
  "key29": "6nZw6Ud3oMjnERj4HMPxy1XaYhtiUjDtce5M8o6HYRdr66G5WTskPZUphz8x6moMjTP1noeFFMPRNmwWerLDn3L",
  "key30": "2CRsU6iSb7G6UQdPK7KXUZ3RTMsAVSqcNoP5kVueJKBbKjLmURep9sXx1HizPoETEX8ZMwxcsD4JU9t9NFubQfHJ",
  "key31": "5AdKYNT9yETd7DTsxLXi13svMFygvW1cqAarSDeD36Zv46ZZ2eWmHZMUDAy8PXsdbdZsV7nXfteVs2cUbHbPeg3d",
  "key32": "2RJ2FZ42pSwZX4AV4yhXR3GHrVw6tgNQNiwj4RJLwiKyETY2K3Gs1APJ2kdx5Dzq8SCEh3d1sXCdqKD38GYypGCK"
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
