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
    "4PCLakzckLArA9Vr553r7UCbNwGdgcK1nyinKiikpgBN6BiEBBUjV662sEbj3Wk3fYVeZtEqTohhp6CpdaL8zzvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHHXpW3f9LV9mciFmoMWTPixbeNBJPE5nfvgk6sJF5xVGhHHvon4eojYDhxCBCu7a3NfwiqA5tUAw3ZShDaZYHT",
  "key1": "4v7vqVFdTCSkKzmPXJxMGxobpMmnQTWHxEv5cLdoBW9LM8Lg6YPqWPEyNwkmELNUGmVjk6Qz983T2MENWGTMyhP7",
  "key2": "2XZZHxMFjGWHRzMZ6uSxtQNi8kDuhaBdUMhDPXnfozMFi8jBWhXbpzytVk8shiKmKk3pvWHh2qDmWiHyxy7iemYd",
  "key3": "4wCAM4mucdrZU6Yq4Ga5FN8XgF3ZjnxyuhC77WTdN4E7vC3q2mtSswqCf4pzgkCkh8bygfAfcrJsygGxTBk55wtH",
  "key4": "3YR4FmespHNbFPTEMKQ6RWaQLh3EfRgdRe4JCNegVLa2C3s3C6ohta2hLxgJ37vcxeGfnrvVVnACrkyrFsHVhCuG",
  "key5": "4zrNMTzBimqWDF8PZxttamSN4vekWsr7EMcSKqW4ypX26KSFB6jVBeTtt581W9zxp5VExQfFaRtJJ1fkZayjjTDZ",
  "key6": "5RpjkNYtk4T4pHTvTECBRfvku2eCZsVc1Gk2pTQ7Gfji4hJCfdGW1oLVwiHehMStZ2HjJWdNzZmjMaBZp5X7X9Ek",
  "key7": "5mTASbQqkj7duB1gMGLwUZf9yH9hd3pBTjyY766nzc2a3WwtWumaANb9PF162nGeURxNYAJqkzm6gisFi5TFKDus",
  "key8": "4DyS14Zevk8vtNxenyHrewH5VnTWhjZvDLj6Fr7RJMrE43AkfCfsKakbUpxQWsskaPQTXsY6aEgDUb4vmYXv9kaC",
  "key9": "3AAgW388XndUmQi1yHpjoeczFQqBt8k9nB7wm1BnBrtAL8XgJEtoNMsjq1FFxFeFSZkyAzZvh5GK4yHB5s8BdKLT",
  "key10": "3U3TGY9ttHtPx31tndy3acvVo5CASrDgYxeHk9E6Tay4t2Rv51G7t7uGE5YTnLdFAtQ3TkM9toM5vPDq9f8RcoYQ",
  "key11": "4Y9ijCwN8bTEYHwSTVjjSbzjyMrZRDMVMgxjpBA6aKCKqkKzVFiYsE2kLc2KZ2zJUbgm9k1LGxmVyd323LA9WRkn",
  "key12": "4GxjRA58gFTweTErfppw2QaT8W4NjSybAGh6GPrRMkNHrhodzf2C7Tgq7Xt83XD8WaDWWCNmUkw5QW6pzUVoLseW",
  "key13": "zUhmNKW6oSiA7kmXFhfyg3g19xbzk6LmGh1wbqZRxrrUJqs9stxuoWsAwkPhXEwdb9zaMsGn7B2eUKB3sWcAF7p",
  "key14": "2x5YbFb3NuAEdmxQKYYbQdiPH4mauF8jfop7qJE6AwW1GcvKfLDCUzV9EpKfXFSUv9f616fZf47Um5L5Dwbxu6UD",
  "key15": "4RAY6R5Jw7R237DLWTUbtvcydyHoYEKghS9LsCknB4rYAriH2wxCEYNgCfkLusDa1jGLhGfkAUs1eeLF8uZzM8iz",
  "key16": "37gk9KGrxxnZu2Uw5DaTHwHtjDbq45iqiiEVJwm6L1QNAGQKN2fR8Kf5M2N76RY7cThcYCs1ML5My8RwZeFrbokE",
  "key17": "S8nLnk81npKbSbBLjYnyR1iMCH6Y6auVeEmxcThSDLcSc5u3mj5PK7jq2X27WdLwD2rdrq23Tps4PAPFzg2CpX2",
  "key18": "3Qz8DvXuDpF3M7numL6X91sVv6FTRvRNGoyrbcqQn2J69HFY2ttw9fGnAkmMhGfbCtDiPj5P9vtYucYWDHi7cMHA",
  "key19": "4qpZ8Xp5RHQXRiajymAraZuZqjJzimkStbm54qbmU1uPmjjtFwUkpvSiWf25JXwonMtKTy3tfyvjY5QxFKuVFZ1Q",
  "key20": "2jaSNztnPdjNq61PV9vTs4nWMe361baWenXToNZJKJtb2NxLSkrqY5jkaKkaKZY1XPnqLf5Uw8CZWtzuPPvRn1rx",
  "key21": "23Edb4M5RhPLurc1LxULJDg2EoVrdyW2QbARmm8QD9k1QNWKvdiB1SR1bCsVDGeVcwY3mbroQ6stYEQ2B1Kanh5d",
  "key22": "48Q7NPFdMYwvxsq4be5tFFuNTF2jbU9ERLj1bnF9JAqB4JdYTwA55wbtZWArGSkrJBLYmyx26YANv5MVzjfpBjhN",
  "key23": "2wZGwQbqEo7LABu237JwkfkEr6QzhFRfsV7j6q2pQh2eEA3GSq1UL6MKVWu1V3ExvJMockYWCMzDbJ5jfdPBUqqK",
  "key24": "2J4zG1X3aazdhSEWChXYg64LFJkpmfhyCdoiVWXSsWzPSoibAjwDegiR8uzwiWjQtLhLnoaTM7qq858GZY6PJAev",
  "key25": "4rrLVuLzJpSyTNq65duJ5bCKQPDkQegheijpnhBvuxdaygCKDeNAhhWHN5zVnhyaBJ6SXUx5gA8uUckJ2erVw9e3",
  "key26": "4oZgkEonS2rk2iLrsovKVP4aa6EuAVubz77cRDkyv3HpByxhgbUS8tyXDAFyh6s7szatrfRJRaGuSh1assigpMMK",
  "key27": "2CunLbJjC7qiyPSEj7w62YeLcepHDNt82dseGK7HQFS5Te3S6rF1RJbfcRmqxhRKFaoW3LiphKoTnU3GjuJvodZ9",
  "key28": "5S4vhQ3ShtDovgDHZoohKVDHAQwzoXue26AoGHNbf8FaLYPTqqwPRtyzuVXDycL6fVmNHCGJHhGsAx1n2BcG4NJf",
  "key29": "BqTeCp8JTF8AaR7eLHQ42AuziVGpktnf9kMk5vUrYP6W5DaH6LC7ojeKp1gUA2gnYRqYz732CEQSeMuYzMRJjtc",
  "key30": "2pRJsi7oDoTJfE4p8fJ5ibvFwWKcxyWAV5PiY9GufiDz2KXk8yGMW7D2b4mwrFNgYyNNSPKVHRNYfFuHEksBSe8z",
  "key31": "4y4uWK8i6r4vViAheVX19WYfN9JJ9YzMqMiqLrmM3q2Jo21QF3BdxhpUZf5KiwKEpXPMBanAXYxRiVLs7g6xdYt4",
  "key32": "5MaxHdrP7QDadWSUjRHJPwqx3D9kNzBKt9gWYySVsALRCrLX4EG3KKrQnmAq2KoqGpQrnSD3NULpQjYR2b9d8qE6",
  "key33": "57BWDJwXJ7dizkJo3raDx4jpXMkUxuwEUptTzvE6uaDkRtCESQeGFag9jLgBzpdpiTC6JhCLUdtnxmYgiJLVho7B",
  "key34": "4ajGTYfmKZJnyRNFQjpAtDmBPMK3EWBqXhDapmG6cHZUWLpbnqyUTcVdDrCxyJk1DqCuJ1GVS7Hd894Zx4DRPRku",
  "key35": "5SpbKjDLctg2rqVLp5HXdaLrbKjZ16jp5JcvQWXNTPRAtWZ2AV3xoBMQn2sVuvXSALEZUH36qUbpADSKbYMJpG4q",
  "key36": "45gif6uBZcjaSCHnXZZWAGEAPP1yFX8o1imMZpieGgUTV2eVRXF3TFgPAs7wxyxdWmwbYc9YX8xZBDcnmK75DKmE",
  "key37": "C2e7kEUohvCKM3B3bcdafCfFQn384rDFLyxBmRV2Yr5Hf9YVePz1KogdXhfF8PXHbECeD1GkKeLJoL64oPMhZ2a",
  "key38": "3KyJuv1EBUDzHinNS5AQhKmEKiUaPTg4tSrYLcMTJVUWwLoD7uGVxvAqNHsn1dtDzVwFudoZ3PbaYBcuKMRqaGh3",
  "key39": "vnDkM2ngrUueTkYoQqgm6d5cf2gaiW9FCoNwQhLgJDKJZRvREkdPqWqNRDCBLhUwdTMUokWRw1R7stvby3D6sLx",
  "key40": "3vMrigoKXQcASLWubNS19EYPk4wJemMzR4DHD2pKQSKcceBme8kCkhhMAAVajEZq6CYChASvrMKjAXfpCza8Rny9",
  "key41": "2QYorBwgGjHUffsixXrQvYcSsWneHYB3PevfnZMDuQMK8jg5knU5CEPLyjZX4Zq2PshEm51DwLU4SKcFveFLjUsP",
  "key42": "4xTPVXKB9VLCoTLkV5gwGXqzD4Du57Aa6pNSDNjjiE2xEwYRUdQJ6PvvCjS1L3rmHpwjH6wm8Sbr4vbrXDZYc9Kx",
  "key43": "3LKDtqpvCeZW7W7mEaq3VUo6j1imVvk4iY3WHe78St6QLXWV53xBsmQvNySjUED3FVcGu6rMUU8ZK2QpRoUCEmso",
  "key44": "38pLrkkC7UsYAxRtxRxZ5nkQeH3BJytnnNp8z28rC9HRj9jSZpZhfLp66bqui3JWAKozUPn6xgG87sWy4V54KS2s",
  "key45": "3h6vJ9RQ9kRPmMZnWYa9JwNTbfhDd9mJQ6m8zuUrpCMsAuExn6W5WDVUNk7pyez728GcXA6Bj6hsTqGMuWefvWLj"
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
