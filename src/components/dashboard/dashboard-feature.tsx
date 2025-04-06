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
    "5Tck7E7VjqR3dUUzf5PAoP7H2rqQEfLky2CxE5G3KCk6HpT9s1CbEhEgAgYe5zFNfmjx9GxueAvq5JB9L9nHq8FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xwVceMRFcKb7RhNj6H8vmAt5NcmFKpuuM7JKkRKUacdjHcCdTKRcUyntYTCFmSAnj3jyypfL14R2s2nU1W2rMVD",
  "key1": "4zqKEsUWDDjxvV6QXRHLKJSEyHVJHKgbhQ4GQYo2HhexTNtAr9PUCfeiqSTSM8LeEFQwa9EqX2QJozNarSv6LLyq",
  "key2": "4C7NhSrAxd7r6eGKfMVAG3XYQcmby1hFTHZcCM83ouLbj2LCx8c8JNA34fusr13JCQzXQiHSD3gB6QJsPKbL92u5",
  "key3": "5zf7uty2ixDumsuAiUs3QJ1uUX6jctZjkQ79db5dexrt7J3hHAiMryZtGLeg9LT8Sg5GxNEApVKPDyZqUYU1dWUi",
  "key4": "2c5yJHeUvHWiXwd3LtHkk5vfg8kvzT8i9thRxHfS2MfWoz6bviLkKH1xiKhVgLrh8WUGDp2t2UqoAXKeUTkgwgXX",
  "key5": "2qtHH5ugiSCRhCxAP41YEB65AQz7u5qGa6DMP8oaMNhwW5WQNuS5qD6hM4EL64uY8P9sRHPF13HRVwN3aM1pmJX4",
  "key6": "5HQcjJFefFFCZQBjKdzE7iTwKzkH7RCpeq6RV3fGo77VHhEHzPgueBgGG6U9CCn81YwwS5ZS7Mt1onFnCV3FDBZY",
  "key7": "4DDbZjpKYs68SDiPqWyWjBbL9Tfe5icLCaXJ95CJvXSX1UQtU4XsyGXYVGMtcD66JxzqiT3nt4746stq6wSvM5G1",
  "key8": "4dSdibKmFhagCuLFGoui6yqT2gqjQdJ18wzNVzrDDZcwCN5Y425JkT8bbYmbWs5DK18vpBexfiKJYxNa7Qiz3Q3o",
  "key9": "35KEjft97HPwRpasErzaMyjsruvuWetHUuWFu659qf9A7Ji5eGCnJb854Aamnhq1SKUZAVf7SFfk6sS3z5v98k3M",
  "key10": "2q8gp5coaJm2JqjF64CVTqbq3Jh9csTNnxzfBkej8Rh7qkzh168fyxrwJJ3srBP8b3owdG9AsB8X6jkxVi2ELz5z",
  "key11": "e4rKMQFd7zhoHPGs6BwH6ZSJCUXPpHBywXdyv1oXk3dpYJAzupTGnS1RWa4kPzFBcAjakCy1W68C2YAnoSsgytj",
  "key12": "4uGntkjNjZ7Rwbdm3B79W4hCq2jNiXpTKdqQjzFrwL85dWxJjBZbkDCiY6Ufo2dSwbtntGNKCcUhsQJ7KzaE87JG",
  "key13": "3VPmbtX5kni4SYP77y97rgdrnGUnYPBjuME1wVBuKrwboNP1hMgdVwXutCS1MqawRCz1CLjSuC4rXFpRLTWjDuP2",
  "key14": "2a6a2Zi2diAGTU8V7jPn3h66iAxRTrVN2NLDTmt3BFtPGi4h3yBRHjw8nTXSg8HEW6UE8Vx1arzpH1a5tMYXeRzy",
  "key15": "54DC4GXSyDp2CnoY45MSijHXYmhjRxNbsPdFqhi17HkQTjkuesVTGTJaVnvvrbpqoGNScwop5VnVHzuwP69btZX2",
  "key16": "4Y71ShrvacYC8orbGxWFxfxL5ZeDz8kgMnRQdCQxUjXMeP5ubYuxt9joK6vbxUN76ezW31dZYFRYud6eb6jZjYtQ",
  "key17": "3bF8WEG58oqV2xp2yk4toyn4sWT2WG9CiVDregqHpuNan3FjeE7ukWYcN77BKSzfvCf5pkcCTioGJJ3UJz9MTyMy",
  "key18": "4ux6s3L1Wzq1KxBVs5938cHhguGJNzJM4zBVNE8KHFpCN1bU9ovr7UzCpgmWM9CnTn6TdYQP8GHLdjuTtcx633sd",
  "key19": "4YnUMgNvXCvsDFj2dnftHtktuV7EMRNyPURqNYk2HLamrqeukRCeXnJEqTws4y5JWCnFUXp3uyPEoF3vxeNN6RpD",
  "key20": "4FMsCrfBNSSrbpVew8dUa9RSQYkmJmoKvQX8LZsg2cSyUdjXZFg34bmteTTfgVNMwNtM4sryVUTEJroPBuQ7eNc7",
  "key21": "3FSqLkLGUBk17tHQR4xPr1jhXo4SotBkHxhnooJ2dALXAqN9K1v3d7SNQVergE19J87qWXHwyPJUF9wejucnkcd2",
  "key22": "D8x8Yz5MEhqxtgiQdVaR8ZeYHQZd2Mx2hAGMS7SQ9Bawb9qW1FahVKWPUDGXPQhBvyHGM8hBS3iDsLJtnMaj8je",
  "key23": "5BEnYmAZ2TJqy5stk9HrAfA3PBDhGtx3WnJuPcWtBuopro7aspii2CEYx2H9xXELqr8dHaui7XxrtsyZ2ZSLzpAk",
  "key24": "67FHJmsr1qUUCzpSchiqZdd7Wmobwxkcjsh5wyFAnc5hvUYStQXyNFXLpsu5Co6gMwDQkpz8U7wUyxgyA37TroCy",
  "key25": "43JfGdVPQge3UEVhqdFxTH5aC2vBCXhQt11uDqrD9kXknYFJxtRgcGqiAp2aGyaqLfJnc7RXHXZCTHMHVFrJqSwX",
  "key26": "3gT1TCyZNXcj2xUKFPGb92wKWYDaZmeyc9LDJb11E53esmNbEsZq4R9FdbwkEnFM7sVicUpdEd5Q5AVzB2CK7DbZ",
  "key27": "49PD8aJ6g6Vr5Y3CfKJ26TJjx195J46DqeqXZz8gngF4cNRA5gnahsXSxGpNABsdchmJxW93Q4y1TGNxjrSvDcAJ",
  "key28": "2dBSRNcGjmyavWHnknKXEUVBBLmv8rEfbBNo9NBVZG28SFWxf55aC27WWtFue8EQ4xfuUXasArtfdYfv6RcxL5V6",
  "key29": "4DuCJ8NFHQNStqnYdfxvGxWFodXRUKdxHvtCcTF16PH1hLyeUyXHPNCuAK1WrWmfhuu4ELBocadGMjyFkz2UjdDT",
  "key30": "7aUNGtcSHZK6qwJ6XY2YgRfwQc46Lzid9UtGiSH2aHWuS43Y4uhaczMPDanWgFDAGqHzHwY5bEEeVFH62rruerB",
  "key31": "2dsA87uVbtBS5QuwnC3XKxsaT1a7hck7QVgrtPvZ3DRCQtoaC1ACUeY3J2eHZRi5TTyudzeTNeWgPca8PdFUTY6N",
  "key32": "2csS1SQsFyRTJcBaTQC2rBsrz3LVbSFGPnTuczjCUW16pAKtNyC7DYgHtxUdypBPRjTBkFDQZm5Z87DXqj7axBBF"
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
