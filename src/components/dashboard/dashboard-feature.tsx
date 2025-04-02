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
    "3ZgqeHzRN8DrTMze35e3qhfZYfGNRbNArT4NozQSF179cuysTXhExn8d8Zk4et8dSAkbFcuwasUkcoz8jeDYML5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qFT6x8chgZtQP19Z9eeDbV2UoPwEnYjX3fGr8ZFWc6uxbmneSjDe8p8CmocBqU6M1qPQ4KVZiLYXXSirzod1NE",
  "key1": "3kN1Pe5LkLpz5XLZbUemzwpY1T8mreEJCNeakwBEGfSJjzQrTztvDQtdVHiqxVUdeoYWkhhpqDSpfXBPRQMMnr9U",
  "key2": "2Ryq8SEsnPkf7r9DbqQHhUa7PeXNFbxpgBME87i1T8zuBptZDbocm4ThJuvDDCALvMaP6qU25K9nKjiEHxwXqipo",
  "key3": "5tbcNmM48Gm1XzE8s8LvgYchQi4rNvzHBu9mk5JJykkYHMkkd32zCNwvaM5TVNuHWv84o1m2mLbZ1T4y8qdmfYbz",
  "key4": "2eoBExfqYPJdjnKFEuwuUqwHtW5AT1FRbycZr8eVSyKDmz6BPLmatX6ihqBr7wdLRbK9KLHUDTZdKmwZrydhBAWd",
  "key5": "cTKvFGjn3a7fCuS67GhPzLGa6vqv9wxzy1u8HbUfW1F9Ud6zXhgS3g1QnQiB5CoaPWrHaJKTEXgocMPbnAkRGRj",
  "key6": "5JHNNPEDcGCFkjRrhuLiucavvYnor7AhQS4uM1tJtVGmM2h5UzF5C84yMuUxW1zBcsDggE47GFjSYZ44jTtWM8yn",
  "key7": "3GFHcQGu5eM98MrSqSLMomDu7gc3R7vNXnRuBNN9ehgimFiCNzLTzgsH4XqoDw45AvE6hR8avZFrrM6UhMMeuugo",
  "key8": "2HTt4pvqb6q4PpGTn2F9UTfkaWsFvXTNtgsnyU5e6ER9ym63seE2AUdEaQv3weDi4QREykTBKDS6JiVLWmZbGsQT",
  "key9": "5RakKEjA1MeZYDRy8ek6nv1pyAXWA7ehE1Zh9Cpwkd5VWhrBFKzM2q9bpfxv5suPxPMywngQymmTgRnAzeoekuDT",
  "key10": "h3CaxdhSuxh4L1ztP2dSzwu78APKkhkhhhC5gEfEPSPGeYAnGTVet3w29ZFcpBcjEVEufH5mv6e9i3D4DJJYzZd",
  "key11": "2zmrnK1bMs29T3PJTJ8oZXsAgSotw2GMd1wNJSrYJYhpz37pbyrvBCFqnb9LMcaCZtAbQV8sPQLNmicWK6NvtFKb",
  "key12": "3RVzaMoTwHremYnmKBkhWarsuVytENd9Dzwh3LK8EY8unnLeTYG28TACzqi5snXnMAwzAk5p1jC7gLgaPTtf7jX",
  "key13": "LHtqnhX1xwkh88rc1qthtb2uMvrfJyXCgksVatHRcr5gZ2AA7rqm5uQ6Fwty1Y6tnVyVGs1dPBg1a9nHuZuzPWW",
  "key14": "21fG7tA5cZqhdgr8sofCaPSobB7SreL9ok5ZN1g3PwSUtieepAXde5A5SG9EdrbzffS1enWxxPYPj4r9a2QdKs6C",
  "key15": "4evdRfmuU7VsDCAnfNWHzxVR2NFsoR9CGXcX6MCgdJatKY9siNChufHHM9bXkqWgTbkahtTemnHQ24SBWCEmGD7S",
  "key16": "3ghggarXmsaKVfFg5k7zfZeAmNgHFigeVShTckZr1vbGLgb7gPCwtowt1UVgNXTE12UipSyMi9iJXawBT4dXhukA",
  "key17": "41ZFgqDaaZUVXjtH1U3ydzsjDpCg9zqbJMp2Xc1peQR15pfjewikdAAuzb9mpTXAbs3rj2LKqYaS3xCiywWzfcmP",
  "key18": "2FbbfsTivCt2Sdx5RXEt4awoULNA7ttkXYSbqAEMTpuoEcxUkxcAaV5q9oAp9i9kREbi4JN7rUVDcbY1DvpcZrTy",
  "key19": "5FDdaLLyBbyJ9NPEqBHU5Z8fBXM4ZARo2W3ZTNZmfxsZWkBDssibL4kN62ohMwWECJBkT3KNMVJKftabPfqdhawd",
  "key20": "2vKbzE6XRwTum593jMKNZVoi2DUDHPT8a6hp9qHqpcxBC8jtVdjjxdgZ5PxXnjH9RN6NJB2PnViG949qGgTf24XD",
  "key21": "4GzA9pf12a3Vg77ZfbJszL4UBPLxXkHwELxjqPt15gmaWFdSRHMx4WmvzUytugC4sxFc4r6L3LGKdXWzDtNSbSgA",
  "key22": "2uQibHB8bZf75CdxCsigPQV42R1AkSR5xzKAnaAm7PQRDym9WgVbLGe6wUwCRFBhuZFBMfCCiuTQL6SsuHY8aUGz",
  "key23": "649WPaKTAuUrk3TwzD1F86tQNuXNJqFoZfKCKnjHefSFgmvkCtBHEDcvqaYhZKxo3Y3sA59fduQVmomHN44NPxCP",
  "key24": "33u2xUpRTma4FEteTPswbbLrbUqHkNw7Rsv73XJue2kP1WGU6HoY1ocPQM1sgMyVsycyMKWoiuY4NM9NNQn1Pk5X",
  "key25": "3vhkKj82RsHo7MMVAjNc1i1h2XMiA9Naj1aJXpPawQVQ9ig3h3Rrrwem6PnLx4YDyu9H2w51mAPeDiL9ghvhU6wK",
  "key26": "baATSvTyw9e8gUFMGN4R8oQcZodn9beufeNbwL85LwLVcTGHUZGviWAMusH3QC7NUk1VF3SgJQrg1oyLJk4FAMU",
  "key27": "5bCjxwY7tCbQevHfvq2YQ3ZCnJyiGTesXGFL7TeewjmaeF8wV4XcTJW6LdP6dVP5iwuY3qQ5MVfVd8hRByRQHDUH",
  "key28": "29ZCpkTAMmoZHPQLeNQg37ptyuZ7ePbvNCNLqsD6EQE4KtUakJvAMDe4ZkxdAfw7KSkSQfWrjW4CEYwZJrh9ZuWk",
  "key29": "4wpHmxtPPASAmeifg64fBcyw3Xb7ejUWFgbaUYadsSozxRXTrsyG11eyzCHctvHbNgFxUANZL3tcRqpRs6tPoH2S",
  "key30": "p4FJgBZEa7Tm1DT7bNs9FL7b6BkvNjzXtYYNzhAWjC9L5rxkTVZ14J9jUytPSPA3tbEQnz2w97s9BnrGGRNLYoz",
  "key31": "sRU1PRE963pWxXWE8ySLJ4dGH2Q8zVkGLnpq3e1rfiTUiGy6Qng1J7qbE5xvvfNWD9qiyhL5vjFkJckXgVFEym7",
  "key32": "2iPeomHqwtgCuu3vTJSWfBB1C5sBonb4sJLqJRirdvknpxXNqQZC1VfhnHvunkhqU5hmhTgzThpwXnvhcX3WtSMZ",
  "key33": "4ByU6EKSGChMqzmJa13UmmE25H1WksJWQo8KucQbZkg1v98CBfWEj1VL32h9jC9ogtbewdDXcipLZF9DLsyGECR3",
  "key34": "1jFbijfm182LpSLu2EKhkyodhKBY2oLAPJAFiUcPdWitxTGTTWN7uz9B1C9cEDazixvsWKERMF6snXURPGyt7xm",
  "key35": "2BzA1kuXgU7rVZa1En7Mffga4F3aQRkPQp7W6mQWhrSbXnhyjFRKkRTxagS77FprbEpX3tx5NF3WX4fhw3GZf3AK",
  "key36": "64vHaQeoTYWpyT9a2n9zjn8cqzAqNsfmYYkfCxHB5JLp66GuXfj2vv7HPXmJJkBav6g5dBj4xWPSm5Sp4vfwcJmi",
  "key37": "2qg5HNsFdtTjMLT8JecnDVKAWsW27kwDUnxmqo7xxk6qdX4W6UwHSBBMd4Hs1hYA5BEfDEQh9BtcYARYu9dSf5MM",
  "key38": "MyahKAhzBjPwTEFoBcFcTbVfbFhEScFSnLdFU9efyv8nH7c3v8dMVfcnEFFiYwnViMn4V4MBUjLkCm8yoLdBtvW",
  "key39": "5CnjLbjP1SUaj6pibsQApA2LP9B92gDrHj6wcYBLZ8A5exQRngpQdaxgM6v3kRCXnFhhSyYEy8s8ShN1URSWbXRZ",
  "key40": "5w3cE4ZhQhgqzZ2SNakP75rZ8m6LhgNAMiucHj4K4wc41zPBRpKbXG9Te71chr1mGnmphQcZcfCkZA3iqktPSqSJ",
  "key41": "DSJJhZdvmTq9si4BHHs6mxE9miZKWmgFBX6NSmXTuD4RB9Cg4uThp23ZcuWZa4goSE49LD9gyiZWeoVsTESe5kJ",
  "key42": "2DZTzA5hfahbuMHWPZMgYY1ZHj6rQw1uFaPj7NVN83RJuUChE4JmNzYYN3shnxdaCkyb3wLR4pvb1Y14mjrY8UkQ",
  "key43": "3BNdj2dA5ADd3dyL1Syq7rj5mTCuDAeyrK2cba6VahGLRkbfh5QxThxVPiqM4J2p61NQsjuvZ57M8jbc69BYQs1K"
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
