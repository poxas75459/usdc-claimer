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
    "4kNgHg9oYgd6xcUknJQj8K2xswdspJH8ihvcAQAsHqfpWXqpn466d1BHFDvQitQhndnHNDkVmyfGh2HFSMGbfVDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCviKzk2ep31QgFtAkxyrfvi7YnWfEAKE2Rgx8UDJPAupFsdB6UCq1cHWTf7jb35M8n2vMhB6Xmzi6YMMSWZbXJ",
  "key1": "4QcBxDJvraBzu2ayg2F7fYX2j8eN1AyCkmv2FTTsxB2tke6Ae1nkWhw1SUsMwVaSjN5qYnfH56oB6cEWvS1gvW2f",
  "key2": "5mZFkqJx5CvH88CSYbc1HKS1LXGr7tJcQFheAU1WXfTcVUoxy41ckE69p4SVcYDzgNo2RKfAwJ7bD9pVc4JMWamM",
  "key3": "4tgVtF64uyTt6kZcPdmzq6DJMZmhiziGidczojRB98V1QMyrqBLq7wTqVGczAg2uY4BGHak3hSy1kPDqycb6qjM3",
  "key4": "4pycW6Z9anu1TZe8wZ1FRHYAKzwDJBNH3gS3CQxtdsUz9t4PyvV9EPxJLHFfioQTeY9bhGunwDqbyHmTrg1g142R",
  "key5": "5he1uS8mppfTqk97rH4YG84LiTRSNWswUFg2qbAEQyw4GdQ13vXuUJ9WKSyEaVL6habArFcEL7q48GcG33NKjZxq",
  "key6": "5rRGsytV2xh7pfV467LPSdukownWWt9nwZhLghs2x5mDQtacNHFwwP4ABjABZnCWx8dnPj2AjUcmTyeLNbwFnzJa",
  "key7": "2MXkzBMnwwhAV5wqeiiTQ1WMBdtYtXupGtAN6AhfiSG4jkFg6uWkGUbW13AL71mFG3Px8kcjCRLsPgSB1HhnTAhG",
  "key8": "iaSGiskig2mgCK1XJh5JcnyeTzGn6NtoeiPQXGr3onr8eB18iSivtifhgppmuGU6eGHmBSLcVpZHSfocEeZcM9s",
  "key9": "QRB1gcDSA1f89uh4iph4YLFnBapkLBShi5D4dnCeKRCYCij9KYT5hyUvViEF6BjLTCfqbjgKhaZbm7ERFL1RJGr",
  "key10": "5EL7ZarEZtRfga4aATcegMd665KCWjtyoh7Fc5YMJNEJqCM4DQML43g4K3eEPFArndXq7NHbQrFdLCYes4ZfsDcD",
  "key11": "5XbZ1fxK8cEfYZ5HDnPFPHKoJzwoH2tYci7RYEuyZHpr99LgEFR1m4fQt4Dvx2V5ocRopbm8PCfcucbcXdmo6zMP",
  "key12": "2ijrRdahyrSYNN3zWQJ2N2Jjm72UrQvkygVQjFM4ZgsavdUP4Cfku2dVxdzm933YVWbyUtLdbD2iJpcQ9iU4P2RR",
  "key13": "3mvffwFm88v97cJs9G3DRRufX83VDXUEoNJkduR9SKeR3hdLNrg77KYPHtJoUeLn5veL6MSWNVLN9gGDXoDNGHee",
  "key14": "2KrJkLJjtQPpZZp1yw9VzvSmmhUcxfMfyEtBT4s6kh4oqGw5dAw2LPpUwVo9oVhiRqAmiQNhBxW8b8SKTDpJ5bxV",
  "key15": "JtTnSSrS83wEtN6fbJWZZ8eLLgHMVaA1nhNkdbd3h6ZwFUmViW7As5WZVayQer893pLaYfP9R8on2koc1pBDBn9",
  "key16": "4QLV8rwwnsnifZRN98g5eih3Cd37Fvm3QxfesE2vPgXGFqT7tZ8og9gyVEBPkS5vWo968K2yuZvomVtSkEK7aC3m",
  "key17": "4Ma72ZtQ7D3thTTdmavVHGa9m9798eJE7CcNv38sfBTbeC1BkokqisN9XnwrXsj9Ac6odYMFUQVoTpUuExDzbpiP",
  "key18": "213oQBy4PEgUZ8NgSxvibjQJrPkq2S1V8UpXWxTFxmiNa9pKXcJfifXNYx5H7nrUxE3XQ6CEuEo6ZHNAVgqj37Dk",
  "key19": "58aamzPfqnafcvKTeHCJLQKa95L81E8PaMrwLpPAXRWw2c82kt1LZbH4Uzxgvmda6ziAkKWfxrcPBftPU38GXQLM",
  "key20": "3gooHpbZKhrHZk7ekEqExav4FXBWSq2gR6hGGYqH4qUih7vyFxF6iigu37o5p7s3VrT3Phkd6dH37LfevmLtQ6R",
  "key21": "4vXu8K21UT2dzZ7CCKHp23U8yLB95yKXugatDic5YJ1TJ71ZPGF9gCzYHM2L689aPY45G2kzJyAJrD5e1EfwpExs",
  "key22": "jcfaEa711d5VBZPmWa6X1NgepRQFmWduwENKEoYLyKntkDuRAzkaopChSvHpXMe7k5e4KcswQxs3pqinrzvcc5Z",
  "key23": "4ecd7WhPgo2gVeHvcKy6DGDaN2GAuhsuuUQsaQanrna9Z9QES2G1tpNrs6JdzuFnisdP4v29V5MNHbLuKheFTPUy",
  "key24": "5FRUPWDEBWCvwLukE9XfsLnx1D3EuBDzyM17PEaqRTNLYWw5KbCgkryR3SoVCYd4NQ1PoMCkSd2PKPSCrYD7oo2N",
  "key25": "4CLLigqLqJLktdeRCryn7x51pB8AizFvXsBchHLM7vAKCpjLob2RLatPFN7HX1SWP23ikjxFfQvDjbsvfg4Rtkbp",
  "key26": "3F4f8tVmaLPCoew1JYeqpTjWBzVqCpi1NZuVHLnGSgMvLNHvDUd7rPp8Djd7D4asQycf2DWvRzvzQUeUxzgdhQsn",
  "key27": "5khyFJ4Lr7PmoA46fh6JRr2iLVKfKLSEGbiPs3GKCdm7FJwXdvHbcybfxfeL3Mxa34tkfAoi918rzqEwLvnPuEwW",
  "key28": "3mRYT3eHvxe3pNmUVBPgacJv8RFW1XFyMRLtESMv1d72sxjWvUDwUMHd4PhkdnWWKNK2EbyTUrvWNHcbDJ3kL7ZG",
  "key29": "3xrzav676uPSgjrHcsvDVqGfrW8aKoYt86N7uYYfAFrPtsXkynGcoCGmoXZXcVPpXfDciMM9P2T5WJqbzyPnLr7m",
  "key30": "4rFgyf96MZgNF2YME9QhnRvCQEzr2HVb8KQUvn66e8wJBRYEtWZ8pwW8Lf4MXnq7QVxGCpYM52VrLqdr155okgdY",
  "key31": "2drvz18miDMhR2hEz5UFQjLYi6DuAL1gnkfW1XPFsBKCfsaKjsyz98NnDLmQhmtEmHYpWHrCAy1xgYgTGzXnReTA",
  "key32": "5z9xoJF4caJ5JQa6dWU9iqXg8BwfMPmy1uzmfWqRbLVq7YG27Q7DYFfWdbeatQqsubY62NuN6psy1hFRuM2jcUoX",
  "key33": "T2oUTcKCPnpT7S7SkDNAS92hFUG61tBLLmMJs9gk9jCyiEkrBdao6utK3XRrdPQ9sBJh7dJH2Bg4G95wGfdVThj",
  "key34": "2RpjZBAtbcSqvJzZMb3xxN9M5jP7f3mUNxHownQEYr4svaDspmRwR5pCXEWgSqwKkkt7qPbn9RfFJJXzLzgUk3KQ",
  "key35": "nyppF3ZhaUnjaU2M6V3TRTNhDAdUD4Dz5pqrYKyaguZsp9USfo7sHD1L2fWeqcZL7W8ZQ5HUjz5vPSwPSbmxnvm",
  "key36": "37EfxRNbFduk38NabcGTmNWVXJvr7qxhkchj8DwaZqycySKRA5emwVBsKexowiuU5RYaFkzysyyHqPX4rPsoQKAw",
  "key37": "56sfc4uXUZKH2U7zwUQE3foq7fBgYsQ3D8aaTYHpcvais3FMUENPHXBdDPfKEwiwb9WBeYHQPTAM3wLy2vxLy2tp",
  "key38": "1uvKjuK63mf4789DVDqbY9UkZTD5Rx35vBb9waX4rwTBsdkhJBtPaj6yUdsF2s9h8DmYCAqzCnhZ9JXiCsu5oSQ",
  "key39": "5pohJe54Eu3cKStZ6aDQYerFSmJoAi6wqcqop9x3SfwYnZhYZAbhkTbVS3uUQEiPAndfDacG53xedS9iVLcpZ15R",
  "key40": "2E14BXXqLGiA48TMEMB1WqfP9BDBgGRAwFMcai4UyFcZ6R3AmBfPqp26e5TtaB2YpB1Z1djAa2wmQ6KdtmRM9ecc",
  "key41": "3vHgsSP6yp6zNUssv2DugzqaN1mpxqcXpWfYeC8taSBtvrRv93bR7Y2J79yJgB3tpZoXGdg7RhJp1gz87kkT5o6W",
  "key42": "2Hcp2X69qntHM1i9Ypicwo8g1wb6dAaX6bvVWZSZKVUepkiTuUkMsUtEATeUYG48b4Kn4SZtFYgLijNSvoP8PQqZ",
  "key43": "4cMfxdjovLVgfiVUNFodczGVqFJ1jrfJ2JuJrSynyVTFBNPrrkMQ8XdWvoKHV9oZKgp4rNw3uyye5zQz3vKP9wxt",
  "key44": "5y61qLsDY5CwWqBUqb4iRnNbaYuiqHw4NPBmKuh8oDAJvHY9ma9JSY1e86hrizTXEvTSFSHZEZmLNoBTpfvy9y36",
  "key45": "4Prd3mYZv7qpku3GnttQc4FiSBx5oBeTHTay7roASJssUXBRbMFqmmvG9TZL6dYhVN1HQWMNkwn6v9MQYD1Bc3cB",
  "key46": "5xB7oDqAL2QZwkpmMEzXHybbu4QCFst2ZeieAWNq5bGyqH87idFVToVBCVBVibcTNdUHbXKLf5m1EXUDdnHKEEMy"
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
