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
    "scvuger7nzyQkSfWD7iE6EXxpN5vp5DG4vJkD27LAwc5C6pDsXgg7c7NyBJzN9uEigy3bZe9YwoLGF2L8T4FLgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vqrvBMNpUCwGRPHjnFihc1kqwGdtL3hDL39QyrqKJ3GqygbPSVKxAx3Bo31dRjMMbmQeQWDGQ8eQDRUwuFGTaZ",
  "key1": "4iAkRixVzZBhSnDio2Hv2WD89BZqvJrh4yzheyh4cjAaG9ocLhsnuehpxRnYppfjNKzJuV3VjbqXgQUjUAUhWe4W",
  "key2": "VhPncpeUTcQgpRX6nW813cZUeW5ddRGH51FGxy8uBfb1WUDxHX4GMZM1knWUAL7jnryuoM9sXvSdbqZRQnNaPLn",
  "key3": "5GeCjvyizkbN622sgBNj8LZ8YRenoGyimXqdi46H952TRE8nriCwUtaHnmXRZGDi15rgvp7qbtSoxMQkLA1EK7Ur",
  "key4": "27TzGXtHv4cDcTjTZCaY6idsJ6eP6VexfqQfaWEcUM8mddrHzfT6MohwRxQc6vpsyospDBzQfNKt4WkUmM11h8y9",
  "key5": "5SbknihX5yEjQoz7tPJXBpXKJevB4gWox7cxnLfPRNWhqruzUBmvr6UAAHKMdLkr8f91YBJ7nxoyShBB4GPzvfWA",
  "key6": "41gy8xmTJQwBD7kDBLb8PWAK3xrmqjWjHMcAvUuKcEf6krfc6kWq9py7dtxVUbtfv4yzJQqx29eGggKJv2ciGAeG",
  "key7": "VRvEZpJ1APjSEQdQ41r5VtwYTwVi5Yzsii1qM56ZHyHayvaNiUCRni2oKGcTmCMqYnGYoQ8bL2ihq2AuokWikn8",
  "key8": "k1VfWNkW4Ev9LAsD5usysCD65ewcZmnLhqojRGKoG2K1KvQL1tk8vExR8p9tYpyNXxryDBX3SwhM7DdzE18zUFu",
  "key9": "49LiK5kx9UJvjYzX6gA7YfjTh8favdCo3SHvC3LviTngHD9ogqMKzxbuWaurMjy6UWhApFCtNxztnudgWh4DRuyY",
  "key10": "4czmst691HesqZDXNLLbd8iMcwVebsctvMxF3Qa53L6kQUk5ob8rGVMFqSujy3sL7hK3Vr1w92nDYRi49qTd6YX4",
  "key11": "5i1KP8tZTfsGPjMpbJ7Dbj7p74RHTP8R8eiED4ifbCAWWTPWtJWAQuMVb65McRXYfU5ZE7qJ3S7pDxVpGLDo8ZJc",
  "key12": "2JEV3x4JaPbgkHNPEUnDeBUtLASQdCSH7vUM26e8g7pK2uoyNrAvcVTsddTo1hY858YyCQhtrRAHBw19uxBv5SWG",
  "key13": "4KDT2T3qxhRsMc6iQeDvY3xeUm5cmZAsrnjdF2TysAuqiWrgJ7Ar1NQwWW1mpQ2DX6G9Z6c8eguyjnijGDJavtRi",
  "key14": "28tjBfeNHFGti7XuaQPrU6uBQJVaB8BYyXX6YCXBAVQYqpJXTxszfe8kNhjAb5bhtK4hJEtBKNw4ayZjr3Evx1Mb",
  "key15": "5SVRkduQExPKu1s5u6iPaSYmdmsyCYUwna7pjreWYtFuVDL5PsEmND2jXnH5EbcnyWLQQ33djeriKeV8VLsJ8JBJ",
  "key16": "65iZQ3wSCzxECYw1F4SmWC78FHjRALb5T5zTyDNuK1AJMrnSG69n4tzVhPpS7Qkcihx1tDfomcQofYtbUZrCB67B",
  "key17": "ycEZ1yH3HWAXP4w6cx9c6qZPEJEhYiNnT5VCKX2SBYJFoiAyn2BPD7dt4ci9T3qHNpVkHxN2iDXS1zmBJcUn1ca",
  "key18": "26YhnQM4pC7zPke37XKbDCmw4W1AfgnsXFNhwNf2VWnBvfcezdXacCiyna9LQY4scPW4czAGYxEPT3hmahGhaZ1C",
  "key19": "4wYXCGt8hVk2JHV4jK6VUThy72zZGYJmR5rX5kCEXd5vTYqNagvUtxXU2H6HRd4a8AhAJ2YRNpLA8FBpz8D6bKNv",
  "key20": "5y1wR2AZFF7Mek7QDR7QrqAZBPQ3wCHFurhwvL9NyaM58Z5MAjksevGzmQHeTBFdjWRBN8abaU3ow8iW4KySwsxT",
  "key21": "djzRbUsrUQDRfhsBJqZQGUMPh6n1Nr63xCzJ1uCJ5w5PDd6x6mcBpmFkKVAQH2aPxoScrztrxvei9r1wQ9MfWGy",
  "key22": "hKCcX1cDCq39J6ZFYTk4mqQBwkrTmdbSs7CeHLYb4ktWXpArUhuaBiv6pn75Uz8kfHmcB3S7eCCtG8ZPe7r1dB1",
  "key23": "7h7zAfPAX6TQ8WMdXy5twfRxZud3inZA3T4Si81TvDcRQqM4RBKZD7Gv9vDUcviQN1zraaPsKXtPfCrKJXjpAQu",
  "key24": "oEMbx1adjgxswmTJXG1yzDfa7AVFkVFX1CtW6ka34DLgxsvWf1Q8qjL3TQF8V8xfwpzrkpSm4ArsotQyHTfgufR",
  "key25": "2nLKMBzVkjZBFnQEVhDGJ5mJEvwDuPZrN5uqqc5zxYbgEKYFwqzMpHMfCXVxQdc2bXubrQBb5MFv9ZRJyKMyGGdc",
  "key26": "4nFFarmC8LcnNfQobs63RbLodCAJeLkfDhLYaD9t2r9bxFoL57bhew3V7WkvwQGBzpNE2vgGZDAePp766hp5YBxX",
  "key27": "3gexEkkqeEtTvhBATakitLMqAHX7avNQEiW79F8bbAiPkpKEFJR41XpA2jRt9K2SQSpPnYr2TWoPSaWqpvUb8pS5",
  "key28": "5C77YTUjwPuMSzTgZWVhbyy2iH4k52HyWZtuE8Aw1cHq33DnN43XtdmqvbdHS58gMmwc9QSFX4CgfRwyQufCWTLw",
  "key29": "32xP4cbtrFauJD7uJHhUmtsD16ACje767dEKpmergDMYdyrRBM47xSMdYvJH45otARR8MveuNCzkwmGk3SmQTrdF",
  "key30": "28ia4xerWj2uAReX7oemTujfxRuKoFR3ceA7roWUjHvDr74WTJt5gdy6ADPzQnc8Sap353ziFWxxELb8DzatPHLK",
  "key31": "4JnUtERKkenCRKFYATNgRBN5BAL6puiw55WXziSYK2A58Ta8f74uGW2cEcVRtZLYH2woyXZvHHMANaCuBWLRq2QA",
  "key32": "4FM4UFudZKtCUQMwYohfqdiujfh3Pg6q4kktyiZRAefB5QRkXNKGXB4fBkodXeh4KCsT7vUfPxpjpvf5HRdjgcvC",
  "key33": "4TajE5z8oHWg1KrpowxvTvhqB6fsAAUyGsr85otpxppc4F4rLscuJ5H2syYMgsnrE4ex7EtR8LBb37J2g99dVmAT",
  "key34": "2dYQN54i5fCLY9BoB4fd63U1DkBRyHAsFd8aicWhT2S1ybtcw2swdnbj7xnC4XARE642c6J7Tgkt7jggbwPRDUh6",
  "key35": "2LJ8ckexNUaVcmk6YhpijXp59DFbWDJsswkzViUiqHz7Eg891a8iwT3PrmGG8owP7W6Ygpud3tKoh9fDEzGxz6q1",
  "key36": "4MmaDHYKrUHuDQffSTgc91oPdUNNLi92AjFA2EH7xJfBoyc8vdTnbGJ4n6MAviMU1pYSAW5iHP79u1AzVgs54sSH",
  "key37": "257kRQ9hQb4VxaR69JoJbfcRqnAEvxA4c5kjXAiXXAXxaDG4SwFtAV4chogjMPLYdPeojV8m8qoiBh2P1rvx29f5",
  "key38": "4NqqYPrydRyHzw4koDCEXYwmezox69721rQkvwSn9i2RgSNa8kamQgqVA7vguwMpq8sQDs82Ex5PygxCpKQDuJzm",
  "key39": "2DQcJGfvdCGEDsLPNDscG5i3aGk8hDEWSv99FJMBjjZUWTbsxhZamoBVwkXBqWvnCMd3BrKizCqFB32XP75e3iTg",
  "key40": "AJoFrUvsiXznxrF6Zs9Z9ymRpRPSvmzX2uL8xbL7NT4gyBvhPyoLLDQ1cL9AW82kCUu3VuKwUuPDdw9F8AvS8Tw",
  "key41": "4LSXctZ4K1T5JZuNUZZuGY24TYXJa56NYxe9fMJHTMfz1ykQwWbsx9dL45K6VVt1NjhdYj5EqMd7aQeeA6EBzLaM",
  "key42": "gwNNnwHc96RPtT5wyWhDDWam3KzeBgEDQPUpTFYA2VqNPVwJLfvhBqayGbL9Gv79agX1B2smAx747CCbK83voL3",
  "key43": "2XXTdTZ9SNqQLTcPNNKXH7BFK3FLeS3WvzJ29WgaZ5JozU5p2RxBgzDLEdwf35D6PHD1AaLFXujmqBT6XwiwYtWY"
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
