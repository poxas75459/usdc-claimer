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
    "2RDpya6ecyxcQ4wCQLodsrkRsoqDBwHtfEttVUMgZH4Hr3VTKPqDZoR9D7Ab7RjC6v4SuB7sf7Jybt77nHvuW57a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kfawqYsfkG46gdnugMdjFShX73shbkZEzxBXpha33pT5w2gnY2GgeCRAKyp6zWx6puvUdZ7WemxRjhtA25mW1a",
  "key1": "4kFWTu13rQqAdaAM9cBxcPZ9cFK5EPMCGtaWDVedo1bgcJzs2ZDfiqeqmzaR5HMdiKz375QgxqGCTnhZM8LUa5Gq",
  "key2": "52uZumwy4TWRaJorebFNwEMLTw73jW2wjQRzYF35LAUEShacNRxqvSNLDY7qKkNvcZVpJrx5nwaoZvLbT1Q7dMSU",
  "key3": "3Ska3D6uPgGKoGzaL69Q1jTos8GouVoxvejXL6Gq4AgCtawADaSazEf1wUUhdS4YGYT3tpntmxDY3Wa8AyT1GTz4",
  "key4": "SB9Zzvnxc7hELEqs4tUg3R6HWzbqZPU2b4D985tHLVRtcAQetrcYKsBw6bcEHbMDP5WB4JAhLemyvBd9L1xLxxE",
  "key5": "1WKrLHhcpbwgdwLEysxY4sWn5ezJV2pvEFbvmEje7nEip1MLuHy1ncsEB9btckRsqeeUu8cU7G7d77nxcUDu3z8",
  "key6": "3wegsg7esjEV6BJXSxcz3yeKjami4wunLTRy3K5psLzvJ2ZK7kQHZVp3ADJ5eDSXzVT5ScBzPAPWkbfJJnPkFk6K",
  "key7": "5StLJeh5NaFEMhgdhLnbsrKUAQdL5eKsLkjRMBfHuWxeCbpeuBEXXDSBbdUgMdHxSUU7PrvMwepnEMqcPfpbwVLS",
  "key8": "WTeUpJQLWRBS27tZJoVUAFDVQ9kGkNUxm2aH4p4k5fJdQMD2bL2i1ZzhA6p5V6Yb1g1w63S5Lq2oEpaxz147DG2",
  "key9": "2fV8zgricXSNcNiN5UVDFB4hnmUWJxBxYiYq4L9ni1yrKgkPx732pwb6dRjZkBxLLGyhz515YnaUTP448owenrvm",
  "key10": "5gSaQE1p3CVe7HxrzDATZmW28c9kAgbH5bEwZt5N7uVQUAoQejpV21YYwcMJVuW3NnYmkqrJbJzbdDYs4Qeqw2WG",
  "key11": "nebEWgZhnBTS8yYSHifMF9SGxmgENWEZpqBHbRpTgPdSU1a3HwmdRkYBKeqdodebco6XPfrs45AKbVuMymrTAZ1",
  "key12": "3am5d6gTiJJ2k8X8Z3sFVKCuCxdQ32UXemuFLpAGeP5LEXB9uJWwTv8w6UEH311v1p7iVPi6tqN7nsfWxiiFK9PA",
  "key13": "2jKS6hzSyBjXUgeUpdUighkFpLqNgbzDvLhoy79ASD529t12tByZ9gqLGjYgnjPPTgRZ2SdyQxbZfMsmSAi4gotj",
  "key14": "3vJiurFmRvjfEoM6e1niRcpV1sZ3mqfWbDVdvAMPZYtYNFMDi5MHnNPcc9LMxcQSti2L5Mbuwkq82FnSo77jzJBa",
  "key15": "52UjgDXE7KdHitXE72hTPGuecVP2fy8AAB2G4DQpcWRHNiTKQkjHqhRsgv4LvW8onphbapYNyk11C9wk3s4Apjs",
  "key16": "1iTBiXV91rLZPSfLszHQ8DqYjA7JbSvpi1gWsUqFvXXTFf6S1cmihxmVjg3EvWoZWQybewzcAUT3bZLaeGhAj8m",
  "key17": "nrWzxCdZ18KHt8SguhK7wYJzSHUCGfrXQn9qxBRPMZRnw2TPQoJEUwFSDie9feimeHvVEsmNYPM9EvXoagECeun",
  "key18": "y7H13k41ipxqMEWFbazBq74o2QhqvL1pqXC9SPdtsaQsXGuUUXLQKtNHhEjPPwPCcUPDngXTbAintm2AFr29PUy",
  "key19": "Taui9QnmAP9G32gWu1ky256iPadk3gkGmsBhNcdSAafiZNVhCc8TgPY8gxGemwnfgL3VSbvHiiXhnv7iN4vf2GW",
  "key20": "5hhFTrWVYpWbqxcwvHV1peQsPZiwfgW7bousHLonCPxXMSUW3MQBCTg8Li775J2YNCod9kyBEzzKDMMWxQmsqa64",
  "key21": "8PtMsB22qm2LWpTykesULcp7ZJgQT1mjjUSF1Sa9BnK5C8EPEK8njCSMcRbAWv2ErbCb8znMoAnBig5Pxv8Kkdd",
  "key22": "5taRuyJbsZCm5BUzKu5aF7pQrHZCf5NJnojhefPut5G5SnH14whPtkEPGcqQoz22kLc5rdZtZQgtQBqJdzE2bE3P",
  "key23": "25ae45ej8ZRVccky3FLT1HxjA5MgZ6DoU1F9Hbfj4Ft9MXhAbwcEUdj3JBb3296QYqAiSZuk8KJTfGzfAVvPb4vU",
  "key24": "5dERDfrzEUyL1TFHEyxL2ggLEADWBQe4vcPyrQ39ZFas3LKmzAiJGfztS3JMxRDa6xrCHw8pkrmBdUjiaPCsDVmF",
  "key25": "CA6gXZSKS2TZ28CaAAnP6xtpqUQxr8Xdve4n3c2UCXm6TiQWvRrnYk6jZrmFnt1xnfPzda8X3SCeimvEMKUkQ4u",
  "key26": "2PbFKv8RwJTzJ5b6p1ECASCXxtLbgTyoaeCERgcu3fuRTC7XENEBNnZyfXtNrVhdRrKo6PaEPpE1f7scBAk9ugCh"
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
