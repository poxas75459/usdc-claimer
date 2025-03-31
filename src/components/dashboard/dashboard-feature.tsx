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
    "2WBy9oUgzGvc2wwJTg4pSPdhgBf2RjVvwEjxJ3PHkXQdx9KF4fsBNUmrtidE7UNcjmyf2VafjbdcCuU39q7nurKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y42BuSkjmudFVVebCdwDb9j7AwpjSsu3s4tEHJA4xjFGKjk9VX8fGt9zoEwmo7ZidvtFyzuy7iAi9RD8pkCgX9t",
  "key1": "3P3wiAa5kkvPZLvUo2QgjV4xPTXCY2drBiemaoDaHFpCGRAcJYxCma3aD6PAG2fEvofh9Qm9Fuaw1JqAUoxybHVz",
  "key2": "47TustMHo89uhXJD47oFrQwQU3WB5LZ5vKv1cq6gevAJxTMkpmaayujkGh2T1nmbhFcA5QAhCFQgfgXVNqUxK6AF",
  "key3": "2va2FzdgKu5UqaMXDaSjjCFjqJbEM76vaWnysb5QFhuGf19y9LnK6viRqauVX3CZTCrayuiuKrF92Wx3vw3mpJ21",
  "key4": "5d3USozKJZwznetGN81S5UCtMszWvPvUmzp1ePL8fjY9bpAH2UffGjBsPbybKQFz6buJ1y7LTWSaDg7FmC3dCrnz",
  "key5": "4xitSfQH8Q1PEQe4VtbFn5YkNQBpii5Wqp6zkgcTitPkHe7DMpJ9SBHYzuAe2FAyyHv8J1hAbvJhqyA2ouyv1xaU",
  "key6": "5RXLnZgxWrhCuMo3KoCBKyGankSkRZQvx8SSucVo3jANEztUzDsQyKsG5fsxpN5KQF5h4kxQeAtxyukiWpCRqZc2",
  "key7": "3yAAoFdEtjWJE8hVChYvv2gZt15f4KLyLgV8ogQ6cQhJxVfvMTByk6C4tjM1sSggXCGovgyUFuiwpfkEHVMsfPa8",
  "key8": "5m1jNZbxhDKypZCLTXCDQPGffrnPmh3jHEgaDHNDacZ8WZ86ixZWiULWMLd1oXUk4gcRkBa51efaFSxcA115F18P",
  "key9": "4egJGss7QGLCxKKxApHxC3bBFq1rzR7h4T3L2gQ45nVE7eatQLBiCeUnBw799omThumLZgkU83YtFNYZ4oia3ut7",
  "key10": "5182VCYWHTJGZGq9LAdQiXLHee9tSTx2nCis8FT7LN4kdSr5NbRq787LwoPbJPMpSN5Yy4aywLRmDFYiwUt3Te7f",
  "key11": "4XRZFouoqGny3aoGfsaNxpbVW7t1qhKMQ6sVE4do5kWFswi7T4Aotavw9qyTvVJm2PXMGm7EPCFyLH7wB8ZRLScV",
  "key12": "eMxXssxTJ7Fmc3FF7wktCoHKGp4Uk7pLR5AdqxfteVKBgKaqos5ScKox1qmKLQAEgMY17p3rZVXkdhdhPcWr5UP",
  "key13": "5MRToRKCocbRUqatQcsrMPQyYJXTFSgFipbnvDqY66kLg5XD138L9thYtbMAWLDmMxjyUw2aNNhsyrfumb21zhVf",
  "key14": "46ge4TMFH9SV4HnXXsHXKhKuYd2cmQ3Wcg8HznJcTudngsUXWYRFQY3itz5hp1wwgLybVHU6FcKNB2YAKJA2z4TA",
  "key15": "4LkXm6StNWCyLbJ3mKG6M2pHYWfoD7eN6dUPLHj4iTHzZ1dJQC3ArQ9UK6kkvR2wJWdY1yxy14B3si9TyiNKhZwN",
  "key16": "2bCfPqFn65iKWa6u1xEBmbXz8GY9qsnmAaEed42djbvwVvTVtjBTPthwyo7rixE2Puf5oJeRaWEb66BAgti17tXm",
  "key17": "2k9SGSQneFXom9pmuZbKr6fUdy39mRkNkLZmMBYL5bBfkUNHtnLCKm8HbA3YEAMC6eZ9BCU6sUd9zg8WJ9e6TwFB",
  "key18": "4jQkotfVqABZuFCHBHi7ZcdorJ7fb1f3EUvHkGYQ6gatWMSQXCSX8LdEw9tMTbb9miJsWQyWWUmeDjvEbUDV5Gv5",
  "key19": "2DuGM22GK3bnFc1eM4RUkbnxiuauWYBdFJaWvW7F1jFW4cyyCpugFYaNS54c6mkA5Lg4Z5j4zu8r9ppFkcyPEw2b",
  "key20": "5v3uxWBgXRamQKMkG5xg16bW2guZievZYrr9sMDeLXBNPyAsK6DNwdp4yHjAjfCU2REyCjaYhg3A7DrVCNtFqsrb",
  "key21": "NxFRYvz7N59PcmX9rW2VmbqwNDYKUEZPrYJj2aW5YhMbpxiorxHrH8d4x2hkcJSFuiKDioMAZAL1j4GCBktywqD",
  "key22": "smgbEj9Po71rpXenGtMAwdKVRypZxuAYpvJGyeppyX8cdYmgeTnqxs4TxpGFguzecKh2dWSYLYP3GK62ci6cJ4c",
  "key23": "7sHZTejhUk6JL37pMzgQaW8NTPAQrSvddRpTPHqNBP9d5hdeZj3px2dskRnfeUugTtUVNAVFZhoXewm2bqYSZyB",
  "key24": "5sP83v8eVcwmMEZtCQa4AnRAGGZVnPFn5UgTFFdd81qLNadbKBoSVKBL9anU3QWZuYPs7oPDMXvrGpgG9dHubHfe",
  "key25": "5dcJXonwgQqiP8ELtsNj8rwu3bpxEfcUXWVac1aNqGkqhPXN4V6XLpzpHViwZ6NmtsNbqeiucYCAoxsgTfrRNM7L",
  "key26": "Nua4ha5fMBsz6XZ4s2yCQi3Vd2gjSZ3mvo1CY4A24qVot572ehUuULfwseDM8Kfgm13NxyXAHzEMvH9iKucHJKu",
  "key27": "5zvucgR9r2dwdprGXoDGN2Yacsxe4qNF7tZA1tXo2uDds6A33jbC7mU6vQhCCtoonvX1eFccY8xuWQSymgTNpcg6",
  "key28": "5ASXfhM4BRJ22ZbVvL8ft71V6ENCKuVHNk5B3FsEvhaNgVVrpMHQPHjpKBEeXZWFMsV1ema8m8ozZZSrgfamv4UG",
  "key29": "zMgEoQmM3AMesZm8L7qKBP2zj3L4yoQvNLC78NCMmVYDQDZVp3jXjeCK1KZEKpzuAyW23E6iHxTyfzaYuLn8FQD",
  "key30": "64euamiHksurvQv8U986QfQ2Mcvu8VCnuSv3eJr5iUorwFa6CSDn8me6qCD2Miyf92kuohuY65hHj5BqLam2xqGd",
  "key31": "2noh4mnfSYuuW5wMvzZQGUHKhNebAFzQd2PyxfsjLvgy9c4ZD6G7Tps5x2uT5bgCym8yydJ4SkKL4WegLGwWboro"
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
