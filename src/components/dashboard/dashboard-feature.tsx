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
    "4zQLQ7u13Zg8NC1AL7m4KM23ShHZzaVU1srbtBjEmwdB5jQUGXz1pVHpsFMr7F434829iLCLv3n2jGgq34AUN3kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voz9TCo84hWEVAmwvw7687oe5UpT1H2YYputs8uedW65euqtnfBGnCPCGTREuKtCZWaNcvSnQ3LmmAh62s9bS64",
  "key1": "3T535HjVrnaoLj9j8LG1jQB7Q7D81UCGNfZbCpLBMCGgQinrHcqRWXydYUG2GQb3A1o59wHQmZkQyMbPyHz3TQAg",
  "key2": "gpfv5SZYGQd25Uo1n1HSCvDne9E68g77SAKNSpHBy1171eZGNsYDMFZSS84H1bX4ryscUZRD8aeQX76ys29hgVw",
  "key3": "7gKCa91WPMkMXdL8rna4LbZs12Zt8f2bQ1cRQaxN4woZNb83maMkb9bTe4wupuXRU7RMzhYWTXEn9nLjvFjREE4",
  "key4": "2pCK8vmt4ykR2nwwjC9MK4FLye5ZTfT39ou8GpxCU8RjwZbpG1cJ8crSWizQL1dQCXFJJQF9V5HniMVVTpZdqYJx",
  "key5": "3Bzirf9viFAujquhe3gX9RCNcTjVFh1zvqW3UPf8HcR4Kg5AFVNdJsDRYNshUdPs7jDN7KNkbudxhTvjaHDjB6hu",
  "key6": "2R7YasTMERZEhvDLNkhAy8Vto7t6KFp3cCwnrfs3crXbggBHjVQxi2G83tVsPcZBGyfyXMyxNBMj4LmH8WDeaHBU",
  "key7": "236uGqeLxjkQsTSg7LobjtgzjgJcxoLekYZatkecyT777ZPLgG3kV6qFbmN1L6KyQCnQVkwxpsbjXkuG4bUqAXGa",
  "key8": "282aucec3sLDiz3dAavmXYkLMVcYgjbbSEdy3xAE9mrpDt3LyS1XakaVXkCjgXdRQ2upWgENY2Yjj77jUF35kL27",
  "key9": "4aozjL2pMtumqzoZTtchf7YuqvQLYRB8LCDSDG4ttk1aZV6tLZomxiSRoLXj1bszpT6Qnp5dKphZ4dfzqgpimac1",
  "key10": "S5KdDJV7mGQ1sHRyL24oRT9KDYaxxYCSGLg1bxVyiamUroTsSHFw4BcChTDP61xXL8HnxmbBhf74eJ4cEq4432P",
  "key11": "3hVaeovW1UYwPGvFhcvpCZtZFsL1KBQQHABRfJbStZDASgmqjG249ZVUBhipqnCkhQmH9TrV7mxRwjESn7AkRR9h",
  "key12": "5TxWaEqHYpDbvW3eb5exYfFxEuroAVZQVs7roAHvEHgTPH3WacStakrmhctBRFV7JMyLRnhkyAXrtUvK21QAwgpS",
  "key13": "4hNTs4gr36LRZLHSc81nUht4eygESN4c71nKpnTTkf9sK6jbREG1CwhEHFKAorfWNTpbvLY319NfbRC2nhWCz352",
  "key14": "8orhxsN2JZBSJySd4jYn5nFSoqRWg7QphxKrNPSjHKwuY6KY6pWNGUfzfe9Ss9hcmrLDyrwfEASZx6Xgasz1vno",
  "key15": "5s2rYYbpNhLv5e9RAJmdgeCKiz2FpuN1aAuo8cYwFh1BVN6AThMgDH2ztaZUYPJXo6pof7K7iPHNPRp4QGch1BDT",
  "key16": "NRPduzmV2hYPpcgmvaEM3jndBL13t3SV6B9MgXWMnyUZLzbZuvG5K9u3fB7VVPJtUKwK3P5zoA89dparvy2Qwjd",
  "key17": "5LDVYZP8nEr2y4HS36p7hyxRANSFUbfqLFE9PrAS8QEKWtTFJdeP1WAYVDfHeQad3Qwo6RbFUsAJxye8VtY4yTpo",
  "key18": "9BxkvGB7mc26vZbPsnsHh3uAw2xFBTqY44XuSXJjdx6nJpi8cZfsfjSRkF8HzJXB94ZHCFSFKugQpybxZy1L5mc",
  "key19": "359ETCnrK8enEgKdcEMQpfGLcm1gNvU4RhWLnDQytivHZ7bbQNtD5n2De2LpBXiPgQWta7fAaDmYMcDJVez5bPDj",
  "key20": "PLrgpdDBKFiQ6HYtXB37s8TwtVgaSAARJEAiTqX91fNEuxcLY68i2ByKycKUHaouQdFGN2mWfX3NoWUExjeaMAx",
  "key21": "5LmGzubFFMoJEGFvdm6fCkRfsFQvFqRk7TeSuGrgpjUQf8Hbsoij8zn4uaQ8tXWtmVg9vE9u9nSbYeBZdw5GJeCa",
  "key22": "5ewiqxyQBcEccf7NU7WX1gn8agMm2UuDemdEJRWiPAuoo8yPksTVeYJWuDgJJfmpTdf3GuiPEkbc6mydLCoZBdgs",
  "key23": "3kfipTpGjqUAj5efciXS7sMVNoaCuuji5X81aVvrDAHMwm2omDKFJBF45zwqFxQXumRngShq94D7zXXocjWCMzSf",
  "key24": "3QTQh8b7Figibbu77ty4nKQKHBTT9p1B2SxKxCPfW9nFfWh4tz6JoiMGUVZXBgdqzQY7jmTMr86BY3PCCHDRMA5h",
  "key25": "4aPbRfZPZCswkyDbdFduzxDfLUiyPzCRQMLnrHS3sUr8ScC32JM4BN4YhGD7htv3DD9ryL7UWPoE8jCCCjyZMqPu",
  "key26": "4fSgjLiPctKrbb8h26b4pNcineoRvwpaa8cwFoHrdijYMwep4LxgzkXDN3xDN4wDhgVbe7SPv3riNmF3aaD932PC",
  "key27": "5FaXFm9gyKySwzKqZ8abEkn1Gs4foyASDbRzFJ7f7b6jF3QoAc7X3yBqvhod9F8GNWtfTW9vHLUJWtUqzq19vgBT",
  "key28": "HLPvMXNM7eL6stAbxRAV44pyed1HqMPabuWVNz9k4LzXxdBsux3vUUeFwY8A26TgbZ8SZKQCutJdFdjkFFCRt3S",
  "key29": "5y5sxAnDTrQdAdmzz73f2QCxnmXSDrUPdrs3VmBTM2w5iJKRRU9FZmUg41icTSnjC3kh9jXSTq6Arsuyg4mgwwt3",
  "key30": "3WmVFxQQ8QBNGgQRCcATkzkxzYQ79a3mirhKjgL4FFKrD4cL4C54a2nse9bf7d5QE4FWTHoFqqzRFYoV5Cb4YYsm",
  "key31": "ffeJrGB3KdkBV8RwcP1MWHqVrMr1KFs19fPPAoDQJQ6E6qhYrW1Y7WFnwWSx5rQ4xU8XwfMr4fQRzCpcwdp3WVF"
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
