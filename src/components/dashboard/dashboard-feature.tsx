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
    "2tbbnAWx7kUk6TRFCPe7hJEXAXnWSrPoAuvFgqf3RtJYtargM8eXqKTjNeJTEYsS8JhgVzs1G7NBxog5CTR3H1z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCrkNHPvsDoUwFhQTQcvW7xMghvZbper1hWuyQqW3QcXjdwbKhPson3WESnUyjmTjSPGU5PVUcHrCtXBTEFsq1e",
  "key1": "2cmuXFRJRxqiUwqREZY6hq5zwdrrJUn9BdT1XgZMeWyfVoiwNen56oYPYwGqVtuR71fxTEW2JPe9g8vaZfXFZ8QL",
  "key2": "4orW7XbbUSbdXiBD7hLpbrbf7UCEbuFZQfnPyCbWkk955QNbr6eLydUzAvKS3XB7P6DpMQYSkANamq5DRfS63VFm",
  "key3": "ayqxzXiZPHznJWAEv3uhr32ixdMqe67rphU4irGEWLdyx8yS97diodb4sMcvaRBHJpUFx7735psTf1MuypPaavM",
  "key4": "22EmsTWg8uVHty4KXKzUxeNTVXVxgfA2DGV6wR6hsYcUjCt2Q3j2DNuvRRW7949Zo6SALDN8RdHH8uSPQPJaLcVz",
  "key5": "s5FUPKwZNoPNSdUruVy7UWgqio9JrCA3hkcGdRirsGAZWhUYiSs4VXyQA7Pw1VdgxuXkiFyvkKBrfSEenDtQYeC",
  "key6": "4XdpQAv3338HDk1G8zdqrLuurEtohWrUCmZAFS3pcHmF9HquTLDHmU1mYsx4R1iEBpfhsDg21c1KBw9PKS4qt32V",
  "key7": "46SsjCCt3JDk9RdgnMxXCTYNHVNXvKkxnAJjFWGCjnv9PPy9sjziyS66PH9QSw4RN3wdVMVdoWvjbJXUCUD8ZNEb",
  "key8": "4MQ8GKQBG6ZwzVLv5TWbgLBpyAa8u7v6RGXNH3o9uUYgFmsKYoJY5LBMDJCVaCg6xZb3fbD6Vy4L9DFofCJn2Fes",
  "key9": "38W8pJoVDbCBFNTbFzFufx3W9nJ9wYADV9MWjC3UPaC7ZuvEGMbmXdbzWyygM8hNP55wtsc5Ve9e3oxJrAVvrpVw",
  "key10": "4oEN1BxJoqKFewwmSAz1cJyryuS5TR9ncSq5avAMAckYY17FTE2BcmWjPMgQ2WiTz9ZnaAzfffwAaVyTJpUnHJtp",
  "key11": "rdw5U9E5E6jaaPGTnZoZPknVhYe76CvKg7TQfuQ4RbSDPUjdYvJz5i98wMP2ptDcV4j5tDoNe6zA1wjRR8A2e7u",
  "key12": "5nUoyQAFLK3uvY86xxvYYHEEQowdUbHdwjuizJ3bTwZVo7H6mR3sCCQaMxMk79cKniMAcTkbquenkwW8Fjdc6e87",
  "key13": "2WFJQad9KoFgwbFXo3qqipkF4UdRxSwqZmQhWt8LNEHZrvo8pZAZCiubHPTyULkFdA6GWeJMto4femTYFHsnpVfA",
  "key14": "2L1M2jBVnjVm262m5KErBmSVmocwPd8jEpMr4ZN5U89cN7TpGfqUVqgH6c56bx66Z75xNNcimTZHdsRVtAhGrCgM",
  "key15": "xUFtU1ouiYTf7H1ZxiHr39RX1a3ErqfVChMzBPtG6RLvmrtCgjs6G9dHFv8yCZyEGMyB1TPt35r1YLFVituxJC1",
  "key16": "3fP6urmft32XVtxTe3AWvy7AW9y8gewMenebT12svy21jWfaE5EWnas1svXvGUbudGS7UqSX8zuip9rxomjkzW9z",
  "key17": "54yUntSnymk2xp5uQpCBA3r8bHxNFkgkh2C3jnyU4BCDsMYuUQ16GxJKXzLtRRXDer7sithffPGKYd7MoQ3EJ1RM",
  "key18": "4w6cy17iH2nDTSULeb9v2K5TgvFs2a1SXyNSxK81BCtv53NDuzJgd4JkbpNzkDVDEm8QBDS1iAqWbPKcAdK4KaJ6",
  "key19": "4hELymCGDTEwemLrTWccaWzdQCou7VWH5ZLhNXjRgu3T3CLs3Ltt2oFLDaj3om17f4xa7RYsvTzhZR78YB6iXCMH",
  "key20": "48ynkx9JkbcEpKvnnaJQqTokgMiLYbAiTDUougmtvwb3pTiEKYB1VNxKfRz3uDWpsL7wDrFytVHts3KvSm39J3GD",
  "key21": "389kbAuWnJJhNDhFbWoEh7ChBrnGS3hrjVecUVmxGjwyc1nn1EBwkS9c4NBtmynb37cVAXKXFBBxAe8ada2noykL",
  "key22": "56K8bbHFeWDWQjnVcormNHimigYKRoEokSGYyTo6mppr7Tf6hJdHbgNj1LioYzNJi9Jx1M9BSqf8geW7zmxV7H8g",
  "key23": "3kheWbmNxJ6aftaqKjb59QbEqcHhTcGYCH9GfiVGuVGR1zWyQuVZkHX65VcqwCC2KWqNZBMozFtd86EiGvuSmC7D",
  "key24": "k7grQvKcNoejdJs89qSStjUwSaR9rKR72dpwFPHV2JgzUaWmj6mAEX2x1fdgNgiX1ZZrMcr8g3bp6sm7HobeCqE",
  "key25": "49B5z4J1Xdgf9pE3NyfTNm71emahYZQnbWMgdNw1QfnPGywaBnBRs7M8Dku38fjN5KRvqyPgbptMyZL53QL1JU1E",
  "key26": "5dVdFVkde2zB18PynwpJPywQsfY9imb9SZcF624WyNfAF54hKdUBMi7SZ1qVT17tgLE2dNDYT8Xy76hQEwXciM6B",
  "key27": "2Zsd42fFniozCrRtV4wN5hgCnTBo7wNSefpQjyZ2Hm2es3xMUaXNNMd2ZbQnaMFLG68J2WqVS9WayX9cipSwtHz",
  "key28": "ff6s6W13e47w9xpVmvKM22FNpY67CbYEXkzeHyDpgVR3dwR6zg9ai11UDj2dZgZTS1QCCbvps2YPCHJBeyNr12s",
  "key29": "3XVQW1Y7UMMFY9e5KSAtGsMDNj4Hf1chQgBonAMTpBpq5RuqhBVGPuRnFEUoPSqqdHGZ5ZnrW7fa22yF9E6trfiw",
  "key30": "3f6WgaP9zRoDcAHCM7aVrWucTNZyZoRahmjVe9QtLFybyZYWESK1bU3eeXZa65isgoCLHFzhD4KYBByq78eVvAJH",
  "key31": "2ZhbQAUcB27xbrxyAJspqeyMH4a2g5biKxnEkR1FpDZRpxuizktAYb7oFKTsBDMrvQu4cGn2NU6KvDJW6g6fDUrB",
  "key32": "2d5ZB647UVoWGG4rY3oAngP24THQvoSDENCkoKErp9y5WvuB3o7ygJXK3d1dZ9RyXGp1sbjhUJukt9qSszFtWHX8",
  "key33": "3t2VPzVa1pfr96P52dW55DSB1k8tYo4v5TLGJMFgcfSnYVqwJXa99tzBW5x8fTRHvqTSjujTxH3t7uNhfeipksPi",
  "key34": "Cz1eBC46st2mD4kpgai6tpSjm5yPfUvZ17Et391w45aHRyQj654qyMUcynoznvM9ePtRLHCtR4JfXiV2bKchbuz",
  "key35": "33ppGhHBEafMC5yjGNhhRvMrxv8QvtUJRQhd1DY71GyBiyfAwpkMkgWGbWCAHN1cDKvqB7F7VFizwmUpFCUwosB3"
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
