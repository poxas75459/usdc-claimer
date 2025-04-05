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
    "4Sffun16dwzVwtW3fchsQdGEGAewoHF3aaKJ5fAVDKwSVWMs6p241EDDY8zU996rk7qkC7vJZN8ttCxSWe4yZra2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mgRCzMq8e6qMijndp2PwhKyt7tA1fCn9pC3s22gA5onaLVZKx96MgUPzY7uDxwNvM9GSSLEodZjyAfNxoe6khzx",
  "key1": "GSZTv4HuyVpBGeHgztn3ifwozH4CtjEeoxZm9Lpe5Age41GiiVQ6kH4dWfLTWK7LEJTZTRWXBSJ7FepFfkxxUMK",
  "key2": "v3jbVpYG2tCaM5kjgvD7mdSiVQQCtAduF8kRP1ppffoGAHWPxfN8rwvaK8WNAXuLxA6cTARZJTAhgbwXH7fxWxj",
  "key3": "4j6u3ZZJsjFSbLG91VQLR6pBHCMTrmMoBJsL1rPU1gA8vBZhJ1QERTrYzNza8KCwd6v7739D6ArzRquhJ3dDHDYb",
  "key4": "CRg8JrvhN1CfoECwWror1X334WVzkpZyGd4CSzcKRQDSAKtKyfdx1hbP9XK7Qkc2wd6Jggxk967RCxkoGZRpr2f",
  "key5": "7s6z3wH3BteZGnFSeoPmJBa5S5H8y6HieBc1e8AS8NV84g6Fw2J1aaWrdvZaYhJbNuVJMCeJPRQSjo7MeNwNBiE",
  "key6": "3oJfYToxBoaaFCdQdRaUtqHVEcXRyruNHKmNWkrsJsEmkJvrMLto3H9oPYLWjgmpCquFKC9Gex7DZpFZiVYAwgM5",
  "key7": "4otFWWR5VHhLLycHvwoh75VU8TfW567FS3N6saVjdyitZyn6vaHKw28YycyMrZgdb6r24V9o7wRWEqpNM6kmKFua",
  "key8": "2uZWdDayk5VKB1o9ZLFYsyznwKrLiVAceS8Teix9cj3fHjz9CSHEKcPWUVpat7b8oatwx58ZKdfAW9CUDef4gUv8",
  "key9": "3cedfMEGeWz364wpspciMPZWsXcNbzVWuvwUbAiXmQXVBxm7JW1TedyxDevpvnLN5wHY4XMComYwErkaPHsiMGtY",
  "key10": "2DTT9eoRDZ8MejLAK1PhjaX5KmXAfMKKXHztiYRpapibw3FfTzc8QhR4DiLRz2PxAGJLadWD7QtZs5SmJA1ZEMk5",
  "key11": "2FUTRH5VRXyFx98jv2RkcbxRw6ASV5xgfc9gfjhvXyrn89TAhNHbwtp9a75KKGaeELBSN35m7pUMnonWw3qtGCcY",
  "key12": "d9dJ3eSy3qXvuydGHmkRMF6dfLsyvm2Hec84xkN2VuGw8iezkGD1qW4XXP4RN6KB2s8L7XwSYqmgxZMvzDLUDE5",
  "key13": "4V1SwKLHf5RR3HRnYK5ZXtVF6ZPynRYtZWd5SbXichZhESioVK1FQmWtA5xPVMWHAU4QeLP9HagRkLmBdw9UAN3A",
  "key14": "uvW8izyNTbbd5ZqRMfWMDoZzLPjuzRvHrn4KdY2L33UXfRp7MSssZUe2edzEVJB68eahJzm1U2DVHpdGArRjzE1",
  "key15": "4P9rcoxgp7NHYF4YCqdfzQ7n6adUrjvmkVwAv1iKXU5SEBttVqUGRX8dfpWrmFR5XQ3uPCsEBPmd1jyf6QLgnSJu",
  "key16": "2M9u2dRvBfjnm5JArcbpH4wiFT86MSS6XJj43XTKXLSeVXzGunKujub4Had9CG4hqFPnPnbqq7NWWtx3H3xt1McQ",
  "key17": "oQW4tHugydwuHcCDoz69kNwuEUWDYMrvLtXfwRyeFpxLUJtWk9cGFUa7Ja6N793E4W64ei1nKqMSBiZrRQRidor",
  "key18": "4UUCM4F6FwNM7tGArdxuFo3HoFVLPQCtpwH5tJESY8Me62yswc8pmGpuiiT3GmpofWB8AWwuTpkbUtmfmWHCgXvf",
  "key19": "3A1Crog3649ZqcCXyKhtLGiwZCe4SonCyxEqaa9rzEU9VcfeoLrHH9UNsgeuVEtSim2wv2TiitZyMWAuz3159zZ",
  "key20": "43QE73cLbt9gsVShTK82PxBsHNuYBo6CFH5spXapC4AUjvEVWCpFrYkyvYV3CTcjAR5zbxDLz3bUWPuEziRTuqyw",
  "key21": "5tgzLhpEJ5p19mYGzGoaGBFs5XFWyLPYuoUQ9YMR5kLM1A5kD3WqTVuwvEpFFTpx7pA58VeXKBhvZTgTPYDGbDfq",
  "key22": "8aMPSywuhcHjmPPyPiCMVcecWLrQ27hgXPcR3vLWefdKWxVqriWCAT5a9sCEL6y24rAL3kSzN3rJYHHWiYhYb3d",
  "key23": "4gMWknnBxWtHNWGRYnLQHYnuPvdngvaeM74fWYrUwsnN9biPVD9Ydfd8wJo9sBDa7NN3npRWmysKNbmWVfEKWG1G",
  "key24": "5GxTFTa2C4CWDu7y2CTASL4eYs3DQpgMHopZHyXsn2v675MK9pRML1iHTEYzSEyH8BtkDQucMqwW3SDf99qm3Ea9",
  "key25": "5cAp67ZcJGQKNFq6v6sthLoXw7xQg5ZWeF8wwEbqSfoKjGE35vq8uCsVZKMFhrbNiyCHand3JXSqJc7YvwZUMqqK",
  "key26": "3NkngWLj3vCftJ2GBZAzQ44wdRCiAs5TMQbxBD3gA9k3rYNz3uvhCvPGmJnGR3Smobo41q6YJge1yaDPcR7WuEjb",
  "key27": "ia4PS7dF1aQy18cgoj1nvz7ttt2srBeqi3t3PoKDWPkKd8vc89BzEy7aAj75mnCQPWt8PvWmscyj8qWYDSvq1N3",
  "key28": "3pUfSjUd5YuLNe2CZP5yJeTz6LtBaTcyUdM2Eg1WVBYJVCFSe7iN57PXX4d9bkjcoKepL7BYx47beZiHR9peDc2z",
  "key29": "27Y1nzpyzr73LWnLbBU2suo277pk1CU7PgiLRijFevogJegDz74P5JjyE3GdfHE8hyecoPWFJ2oSitVwmtxrun6F",
  "key30": "dCxbXbvLsbCaLSZNaq3g5o7URF3S6QQXukeKwLmqxE3stqY63F3JKVKLrkvoKFmTzHyudwPJbso1D9yLR6K9mGG",
  "key31": "2a52sx5AnBoDuh7t28rBdUnxqrmsU3wYeqqnk1f7WH4ooW6XbeMQXhxfgPiqzM8PP2KpFnTnWc3TjjKoQPTNp3pR",
  "key32": "5Btyv64o1mhu7daR6Zf29oaYdoE6CNUjLwtfoyarYSo6B7RDAVqS9RbKAXb8FNABkHMA1TYj9YpcuKAb7UARS5Hj",
  "key33": "Dux6G31uGSBGpcPsphwcrZJ6vH2PbBQqCCgtCfZVxt3X8PK1GEYLgkgPHQmjLGS7K7eVVvFHcVk6pcPtjvR21nQ",
  "key34": "3kEKnFDwsPFmuyyms8dRsffUZp1C6RPsXzHxw1tqVBTFWzBX8RKDEsayPi6D2PfPxTi4UqFQ2YBmYdFb7Sny6coy"
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
