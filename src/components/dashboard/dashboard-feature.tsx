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
    "pSPxFK4JtpA89yH2ke7KambCdhj8Ae2BoiS4FEAbJhWQD6gWybTedS92XaU2LbjBqZz1Z5jUS1tbfaPXoGTAKLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TUDMGTf8H4CytT2dD2ks9agJU3t6EwKNQLaH1xrUVcBxtUNh94evAg71Qzc7hBUkX48FYgy8oji1XJHyGBRPRB",
  "key1": "ihVkv1soi4H39B2n3kyriAbjprteHWM9dGo8Uc1xEDmzH9XzChzhqexEPyFe1VjKV2P8yvP5ZZ9brpQtYNDMFWd",
  "key2": "2Q8StHY5ZdnpT2azpwSxWfZAWzR84Ziz7HKJGgaKPWKJp2yr7kahfmG55Jh8Dn2oL9vx5szivTTeq1fWR6wTXLg6",
  "key3": "3DMSP2v4H4NeQJfJBApN2fKSg26QFt71cmmr9LxHgGKZdae91MTnXoXDP8Af57sV3bQB9PU4TJ6PaWH3X327pGkm",
  "key4": "4YzxdwoF72Nb3X4E7yc7TZjHmVkKJGS6HRa43TMX1ZfgA486bBYA9otWKWYitErRGZp2hRsZtyCo232b39w5AQ41",
  "key5": "31PLapD5tnACfnnXtimtrMyuT9RGbucU9gDYpHxYEWrjUTX9YtUq8hsmo4ev6NDrho41ztjdrKKHSgJaW6cZUqsR",
  "key6": "UUC3CFR35Ujg4hFoPb2aS8Rz2WtkgR74nsH8G2iLtAvmPpEQpsnmpHe6G6HcNagf5CBXLej6iEzfpGB8ptcZdWE",
  "key7": "2ATEWespZeg2P54H262BpMUX3w8SZXN4v9MaCvy3JkebjEFpuPQWPE55XE8rQ6Hth1R4HpoR4pUfUNjBcupPswMp",
  "key8": "2B47bXHMB54vygbPBEbPajEPoJ1vMLx2DtoPvPWRAgDTD5C7D7Z5Q1H7xLsYrdfSZY84r74yaw1RdQv3cQogtkJ4",
  "key9": "5iYHVPqjTVZsEhea6YNNuDQvcD1tuCLz3tadMeBSYMZ2JqvsvZmUUdZCRNpjn2vwGKeoxxeyLFgp5YLo2uh8wJDi",
  "key10": "57qeTDPLodhaQhHWughDgLciNmJSwBKRxPRUxiL1QheN6bwsSEgzPsN2ww2Zbw7sfKT6727DhHHF4NagUag1vK7M",
  "key11": "2tF9yk7NKa93n6hHaFDGw3qAZXDimoQLkAMmJAhXoBKPoMSAG64jJaXi2zTEEgXYxf1wsTXxTjo3pG884XiQU5Wo",
  "key12": "L7aVb2jJsjJ7HSdru7YkgA2G6MMstpJrRecVifoGAGoWxqcD7jE48adJQi1RNRdNN9fMaC23nbS5U5g5qkyMbas",
  "key13": "WGvhcTRNGMxYebzx2rUpQJa5ia42uY2RSN4D9adfJbbTuNh7Zia32eZ9V5y8ghiBYHRihci8pPPxyQXkw1hQ4BC",
  "key14": "4zXKf2uwSjq2rM846G6p4TdUmYpTHJMRNuYa1A3eXuccaVA1ydz77o5FBcc2xMP59WDaxGNWjViByKANkR5mKWE6",
  "key15": "2V1oQKWf1KENnozhyfpK8xyEA73MWG7tcF7e5kCeGN3UeLgkyhBKCDK4kAhQNRos77VogRZxbUjcVH8MhNzA4ZFD",
  "key16": "4YVHp1nAsZgm3ioNkdLJdwaQjUbR4XAjcxqqE39VTXmnqc5gV38TPsA42po2NvA14ggkx6Fvq9MxDr6ckYJK5pmD",
  "key17": "3h61hmX3CnGQFgpiLZhGRUq84Qc5g8U5KLun95AornmEVhEHRqZKdARFvrXSGhzJe853wJuieWzbok5MRiU82jyg",
  "key18": "Bp97dZ65PRxXJStGgVpmNAUddpVeu5HTonAhybJREwDZJuwyrSnFdCjwKiS6YwQvWaRDDshfHRwjhwd1pZy9JB6",
  "key19": "bbf6N9RGP7DiZ76WygNNmdCbKxNdvKRRrwPzZFu1UGBsSxqidio3yDDxo1ShNRahgj2eKGAUTazkYvxyqoqBf2d",
  "key20": "DB3jKxCkCWBAKeY2H7uQWAxktPpCXZNrWbMxS7r3ksrbbFy9wvshvAkkpP9dRvcN8wp9sYU5nnHxWfWMhC2gZEq",
  "key21": "256TJa4JzNdVaxviAYpz2MZ9eoEcjDF7RF4oMTkmWQ3gdERYz3H3CUxxoK28F85iqEWBjTcTe6aZteeC3D7u6tfM",
  "key22": "3V3Mw2apEUjrFtqNzHyWSs8PjCSjfS7zWPpn71nj5oEc8PJeXZ4weQ1h8AVVqnvwQbaSZnYhvHrPz59DidNPMvkL",
  "key23": "5TSahfRD9cg1kpN32gskuc3PU8WbcQeQfiPTF7ZkespHcrjhHDKHu1wwhdLSx2hZNkuPbYNR8coDayEj2uQmREXF",
  "key24": "4J8A4kAj25FWdE2Ab3eShaN6H2qBz5MgzAuUJ9eGizpSDXEMm36N3gv6N8ouMKYyxvhAdqRqDAACsSXJ7Zk3MHrH",
  "key25": "3D1gzBuFm5t6cLPZichycw3KFcNuLAWdV9duUcyxWhRknVSad1bF9cEfTcoq45N9CuwT71zcRd8zRfMcJEiiRJAW",
  "key26": "FDY6m7d4tvjLWX4FzSUuXadfegqGYAPhYN28prcGxMAjxvZi1EBtL8soPnTAFMSEAk6BhHqeDmguz63xvHW3jz1",
  "key27": "3b1ecw4mAGgvtDzcMaNNeWv4EuFxk2bJUa2twcT7JEgVHPMGB2up2z2uRRJ93Gxx4uaT9vNP6dvdjPeNmCqJg7UT",
  "key28": "25Uq7cnTHfmEE1UtzKkJcXhDy9irD7zJCUQQ9XBSuHEHUPSUp33QLNmgm9SfDwkfoDvk8bLsM17sMTA8i34a7Qro",
  "key29": "38FwnGYKnhTqxt9xn9uQKcJbWMANnKhUXYLBjrUnUGdkmMqFUEAywwAHjmU1idERsusSvZVJCktMx7SFVNkkTK68",
  "key30": "45hxdxSpocHTC2NQUc4e2xkBHDHuZCsJGvG55xyStSYeb1o8ygr7zsFaLneLKgx1b6mPxgjgbEWkDBjF1CmNvZZM",
  "key31": "XrWFAxm6UquSL9kij6cG4fkWiy6L7KshDnAUcn5tAFW1ui4xPrVkyTxwV7WfpeJnHttd672eswR355UKqj6FV99"
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
