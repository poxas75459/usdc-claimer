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
    "398apuJ89gHzfidvUfoWyppEK3YgDLhRBXXPP2KoVRdWKkJFb7GBRr91swNhLbPjkei1FN4Zymttj4k9xvA1yrS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSzBDRXrYSRZm7Mng26SwWqiwvAAk2fHyC1KGP2H8qAu1RM33fPMAknKpy7M2A9KzPBSbVtdHsibea4J1S5cbb1",
  "key1": "43QiQFP6GrL4wv4V8me3MebKbzKAaBHoBfngAQTJjBHLFMA7q8q6DyfKgU27MaQGurQmGSMiU7Gzy3CQjeyKZja5",
  "key2": "4ieUdzoLGa8xYi73GjpVhSpRpH4h559yScFC9AqNnuVMqA5FNnDgibF6nHXxKEM4UrqS7NYCZd8g3NEJwgwELUyu",
  "key3": "3gSxrtiRUhL5zTdd4TPk2nvd3nhV3aRnCKxDaTZr5S72qBDkUB7ppD62jrf4qZuVf9h3ifVyZwd8xz8TXQNJxPjk",
  "key4": "5QNtnWgszCgXWrPizwj4EvYYu8wsuULPNL6qtFoJD8Sms5BDapLtiC2ckeHTqS61L4CRVSB9FpFFr1vv5wMXFTWW",
  "key5": "3yu4jMW9vLxRQTWLAQXAcLC2cqGsFVDXVCa817HjwjUK3KF5g63G4Eaji8DovmvibwP7jqRZtugxb91Xkg7JLyp5",
  "key6": "27JwbUyf1cDpS6Gk56JvLXMj4knZt8tZJ32zAVEe6cAWVnfeswW28pErKHWV9oEebfbZrJ42TWhsRGKp4oaxENvf",
  "key7": "4CDBKpED4ErkobhyY7VQsj91JyR2L7TptCf6tNZmE5UE2bSvb3vNugTLV1gAE69McpQNuSp3iReFtrrSRH5PwT5g",
  "key8": "2kf6F5MyyDYTWAPPaL24gs8duEbdxgWyXHzLEtrLDXTNtA9j1GA3SyqTcTx37f37CSdeKXy6WeCqt7b9JMuqhT8H",
  "key9": "4MViKgtsSrEMss9HTLXhfMNH16uf4GXKZRTySDtmnPxiS3cKJFBHgtxfGGfdUvi3a9Q55NJ7WQ9bewkV6gUoKAni",
  "key10": "64Gt6KMREfbkKXUScNxVsxd3HShG4a4YfGryVQEgJQ9CnPRjyLABtpcxtRgBxzFZzAK4rU8j5pSzTn6L8gcaAAf6",
  "key11": "3FMVddTtFnxhdxSfMwWvitGs2rGdAhjN1erk5wJ6VHLNdNyVVLXCsxnT697vxiVvfKCtNJL9gkaDwfaqxgmxfsKM",
  "key12": "41NmATeURHXaMufS7JEuJinfL2LX8ZdvfoY7BXmnL6QSiEEZNRaJ3dyehkuxiSvGdrbttYz2pHS3c8cEp3rvZMrF",
  "key13": "4EZkq7R1Vi5SPynfB7Uj4sK3HjYtiZjUY7MXaauzKb3ujDjWeqU9bw2P9thuYHnFrNygoLrdERNuu2UgkafV7pt5",
  "key14": "v95SVQ5r6urXP3LSRPCybbgWZ4ELKjS1pZes6R2VoNfe6gxsHu7cQoAUmeqYHLcYqvCyECRTbZSKjPC9Y4adxcE",
  "key15": "PZAMJxCTpF3yr5scHP5co1USSjkgJD9s7rsPcz9awFDVf1j8BqiyAcfyKNtGpwFkC2nsyWduByocwvTtJu8E5Rp",
  "key16": "36jNhHfbi5sb78tiXLBgR4SemZeGMfSDQ2PDgZto4YBj4PE6EHY8Ed8zzs47wUJN8exyjHNHXE57R2vvSF9yzefq",
  "key17": "5vM2GLdhoLJZ5cyiiVBMrCfYe1GpuaVk9Gg3jg3Guq2CtjPSKKx7gNZXajeZ7dk1HYwQGyXMPFQfuLt3cgE1Ueav",
  "key18": "3ux7bgVemJBGinSiucQN3R6iMT56MVGQZoPcSbxuNC6768tUx4Bj7QAKa88HD5rVktuXmMadZTbrL5fh4mBpaajM",
  "key19": "9ZSoWAF9GYe8MNLxgBXeCZaQ72WuPjFrFhJhN1YpWnLFhyEQFut7yi2vS92dUJQn8zTteuQxdCv3Hpnvkf29RXV",
  "key20": "5j74FuBvPYUUqdhL8iJtyC4LVyhx5u2TtrUHoSqSfoyVWfYBBjomKXiuLxU1BDfcDsPsYypc3QD4kMUnRcYcnNi4",
  "key21": "4afhm67f1SYF7ep5DDbondaogwHMC8QtZYtwkZfR7ZCh4A2WSK2eoevDHGJcFuZt1uKU14D1Nc2Dacpq7yuMgmis",
  "key22": "4P5NjwJpDwtBsccyMzkCPymczSN66gToG5Yod26kw5NAGaKyiK16FHWxYikV1P6icWa2aznsQfBfhoDpzn57BXjn",
  "key23": "5HJ7gAwnGXegxhApNPE6DdwDFz5wnujN7voMrwkSoDr54bC7b6zL6grpxerzbiZ7KUTmL6QhfgLwJTwSK4B3Cqt",
  "key24": "2ZKfQiaEBF53byG1nHNSa5Jx2p9bWCXYBeQabdcatYEuL2QXCDqdv17o1PHRmrGEJy7FxKkQ6MNPzH1mD75npYqh",
  "key25": "5pzA3vNEnmjRxgK8EHTWXb8Fv63FrZ5du7hfnWRNRxF9uEJrazhKqFSxPKjGpenL4ytKouUFM1AivWnqdgyTZtaq",
  "key26": "3BKwGbBKbuY3e7j5gmQTFwPmTLk7hSyvTHZzNnd8kEUiN49uQ53hJVhV6JJfCCLkTmAAH2w8ZvmD4SvTk5JkwhhR",
  "key27": "pr4GwjpSThp6yYdPBzwKFAfQFXTwkGnD9i4w4WwqmCkw4AUwBwB5623itycjFV5PGCuRpraYCr2A1HGtm5ULL6U",
  "key28": "4P163wTfafzLMyxiT7DuMnLP4N4j1AgLHKkdm8HRDvbo7wZ7p6jdSxyUXkciV8u63GeKmAYjy2wkum6USmV7YJMT",
  "key29": "3heEQA5sTZ2FpbEHuEDgjqAjVR595Yp4ZoZtjsC1ZBCeZCwTu71BWfaGk56aWmSmSDi6PiN5b6ciQuQdwx8zStpW",
  "key30": "3uKhmEENPAzCFZGGUWzWGtoRKkVoZNotjtgBmu1K7EM9jL6U12H2tuxW72rdXHfVsHkrweBzGbCQeDQGJBD7KyoT",
  "key31": "3QMBcmzLiGuhGfUgEwShU9oxRstmWvBY5suvC1nvPk52xGD6FgTApbS3VMXTuuqhXE36Ekypqs5LtQ2CjJrRaV9a",
  "key32": "5M46kexvjfXxN7i7RySWRgMLPZEh877mf1wD86bfLhdYnvgRQDudphhD7MwDBikfmQzX8N6mDoHxsmUUAuVW3SVk",
  "key33": "juZNexM2KpfoB6Udv1CTn9HT6Y3YHgsnLpjpNADMXmBrpG3x2kxXewoSCT68eYx7phu9J5Eryx4enhjMFT8vws8",
  "key34": "3TcBnLffTkB3YgjzHGFhwmh7jXA84hphG39C7C4u41xJJhyvBvc3oWLtet9Nnatxw2cPgirLZZu1dYhoeikgrJvS",
  "key35": "4cN2AwQeFXb3fXMYSVUFngytL1P4sjQNuq3PK77E5cGZLJNyvfYkETmwNHkMEJC57F3sBL3F8ZBQQUh6KnD44fXG"
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
