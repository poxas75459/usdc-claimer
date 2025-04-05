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
    "3CjqYLRgr6upJPFz1NYGnGXCu47Dm4TU4qgW5RfrUK5mYUt6asdvhRSjC3usPm1mhMRf2Zez6DopwV1AHLfjVeyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQKnXxLGkii245TEjpCcgJtuEhnS2D7W4Gk9kXErfaujTzcR3E7fHiNa5KjWxL73SPkdi2ZYdLrHcTKxZEuW5Tf",
  "key1": "5xohDG4miHRa2dTNT77sKtvjpmtpid36UAdXfrZpaPAppBBWvC83HS1qd1C7w5k9KYkTjoRkXMomuNs8iGHdFH6e",
  "key2": "ffcAPhA2e8Rn6aCoh88iQFfZmkdd4uGUzmQybpwLnusf8pp9gYAZjufAzLCoksKTmKqepfyGiF4JiLbJdgubPfe",
  "key3": "66QPp61FutGy7DdtPgt3EMPXoQKrsgMDG5vgCroyZ95EzhbEZNF2hjpMgPMURA3c9shdnHZBYG8vYruRsGWyJDue",
  "key4": "21J59uHkCcoEdBAuBppaSnYXzB1qmD8SCLJ63D1XNa7sJT86vkGKCN42UpgePR7EFiBV3M1gYmgLw27Ag916gPg4",
  "key5": "4yXbZHnAJ37p8HT23c2xkeWAa1S2PySRMta2KpUcHuHB7fYPpzhDtH9gn56oYFK7FaudnzJdwkZTnZSR2pRwB9Vv",
  "key6": "5s6o6xjMmsoka7WkCHeaNeLShc6jou1nyYXee8bGHSxnhSui5xVMVYadneTwVzv1pP34HsSSyxkSTuF2bLx9vphg",
  "key7": "nqHWswJAezeuARb5ePtDedT8AkQ1EAecWNpupfYrauoXyU4vbc8ReybRfeopnxgT7yMsyTnSvBTN9e4i9dN3Z6y",
  "key8": "5dwZebkYskdpPP6KvH8UMkX9NkBSSRvBPx1prJ5D32dq8ZVNosDWL7tuznEkzeYyAQYE2hqor12cTDdKds22Pm4Y",
  "key9": "5CaqdnNjUG8CEcxCcRsZ3JoBodQZmBtgXFQijoSHNstG9oKWCVn8nBfUzb8sWkUmZpmi1gWr2QojqkyhjQmokXUG",
  "key10": "5XMCYK2W6tLeVfFLAGt3ZWrtw16pjK1b6z41B9zicTTdtqU9DCiX37HwgzG6kwzazET3WfX7xRw4ruP9iB98EWXd",
  "key11": "3VgnfMUADDzuWFi1Tit2MfySNx8pdhDS7Xa7GAxTkRciVxPA83XhEfqN2yLaKjCgxbX2L24B12igwn17nMgxN355",
  "key12": "2D32GhXeNbU6CNXK9Sx4jYFXcV6PieXyKxK2zGGEsTUxym9LfBMopUrQ32c5UuFXHY8nj6TexQmBv29sAikEhJM1",
  "key13": "XA3vm3MTLd1VtxEs5S7pvvmBnLjmDTBHTt2WpNMUbBLu8aiuwzG65qW8DntLjey1UXLniReh38zTvpbwLUg51op",
  "key14": "34h3rpubSzPPEhgdPZpxfBZpYnJq2xwhYZGrHmocjd5P4UqWXc8KgdwBSchJLpkJ6ddHpRky31FEvbKTs9tUCnKH",
  "key15": "4rQwfNjggPx9FBJgbP3vkt8SaYH3efjjdZgZmfvxHipBWai2sa5GhRdsFmnPUFNNdd5ciifxX2PYeNW4S2RmZhSu",
  "key16": "4gwLo24WaB8CULikxS4CEP6bLRZo6Qm7DKHDSxzo4fZ6EzEQxrCqsjJoThRgZx2Vxh6N9CRXZNz8aCapVXx5nyWy",
  "key17": "4VLGagP2LWTjaXGfs9k9S7UzNgtvsMGvZqbMfkfR7xhhabxXoMkh9aPsDBou2biKnF1rgWrWkWjJcHUeH2vbsDQh",
  "key18": "2zpR97iELheQPBRhuuZAceYrT7DJWzi7qu57RJ28SJPH1p344z7hBAJDnS5GCvdhPWq8SqtZsJfzG2XNQY36iD6k",
  "key19": "3XWFGzxnDJyUdbmbJN38qp4RLHi5EZpL7NdZSYp4WqswuQ9H1FdFbVReDHLGJzKB3guJ194xzMEeJTn5sCGb2wCa",
  "key20": "cTGDHFtuD8QkEFmsDaPxgcL5jVPbHUTszroDzdVcSM45De3c7wpyYRuzxWrMiE1kYMYpkCUhgTZj34NSfGjsvKv",
  "key21": "2bmfpBjnFSViR1rSV1ZAQyH3GXFbHGPjBpysDthmQijFymk7umQUdWuPxUkWh6epSsLxeN7mgxXzGi4txAK7rPCi",
  "key22": "4c57RXTKDPYgXwZ7jsgyEZv2aZZrHodeaob8YM6tVtHNtoVkrnNhxiaiHEkvoqeAKvcp799Lyi4tiTMZM6tWDMt5",
  "key23": "5U6ZvTFMZbsPozUHKLC3yyptmJziPQwjRRhGmcJkDjmzKrqtwuUBgTxbQnGNaNNqqkEL9vAz48zndqcdz3cX7upj",
  "key24": "28u5Snzrd84fTouLML8pK2GGAgRWPoZ7hHP6EnxYcgVKhJwzJ9ejYfjwnp2sKDJyFfumM6F7Ff46oiT1TAzDpwWN",
  "key25": "2eSaV7fBaHWFta6uiinpaRuWJNnQAtQas2dKnbdPgsAUaBpQvLknTR37vMptbc1zzP9VDwx2VKWBpuMBTVbrPRfq",
  "key26": "3ytz41gWCZLn4SzhKyMEw5pBUhumeDvjMMEXbsw9b22FjuzypwAPSSRW7BFSgWdAEindLsRSHC4vCRFS1KzrDC5m",
  "key27": "4AmNS7fD2Jp9NXNFT2ubTgib4XTzxWevDcZeoAcCZVxb2ozk8dQBD8JBmcpc4V8MP1Neg3aKCGS6HHzfThkfWfuo",
  "key28": "G8qSUyoDJJ5xQksYBtfzgeqsEBticBeyMxJw9nyCqiTswmH5x4JPtUwhHWbfDx4woTxJRK9gjZc5qFYrePkjqgq",
  "key29": "2ruX2CyhRXGmAC5TWAZ2NP1jtUEkdnTbjtwwmGjFzRYEj7wUeVPtfnBgF8hKuJBiNyqqqKSihqQoDLkFXbRKzUWw",
  "key30": "5dvNgQXZLo77TwPz9oQsdsWrHwUmGEwHqWdpiaiyMLF9LTVP24SX3VjjnBdeyFRzCT16Hut2hbjME9BQEPjhXJUm",
  "key31": "4UArkaipVv4JnqdxoPkUEXHT53LP7Lg8fADTzfb46n3C8tbStTDfnEtXUAjs9geocNPRMew4JAw4cGs3QePtwZ77",
  "key32": "QKZR4EQ2aufX1myNEW3UuBnt3HvZv7uYeUVLs3492qXSZReeGwkskDcCs96TQ3xScvSv3LZHeLTwzNpnccDEiwp",
  "key33": "QtYFppbgd8SxtmhfvdxVCVXEshdK6pBhhij2xWh3r4snXNavduQWg5po4xhJTJYfupfLvmTUEsUGjAtSKbX364y",
  "key34": "2pqSSmRtkuWDQVHHp8wLDvAULuG1vSwZ1y31SMa3ukQmmTsdXbjjQ41crYh7oGYgckm4H2hZZTJxdjn2qjwfed2L",
  "key35": "4eX5zy9dDgXg1n2z2zun8ZqYtmsecJKW4wenG78NeQY9jyJnxnc9qibkoMnFD9JVtX12JQRF4rUBJEn3FJybJGNQ",
  "key36": "4jixSYT24gMLaenXRtgh47bY28ptLXLMQeVS9xrB8uTkakhufweV3LzjMd15mJw1RwxzfG2RahYm4XubEsqyyP4P",
  "key37": "4Yr7QKYAhg6aRhdyfsJjqwSSj9JFV6VfzcFZngkh9WyDLEVyAbjzUxxD1gUBZ79oaeByTavEN2VGK6WzU14K3qcG",
  "key38": "3yNhhABDpKCnFPFbZA1pvkXt3eANBTCT14ink69vDspncnMFpSZonyCRctHXdNcRnE9MA3zD8WzGtaJgNxLYWqgD",
  "key39": "3u4MXJo8Qov6W75D5peRQuUDkHAJwzQrQTufyJRaGrdRZWGYAvsqHVJytqvBWCeCa1gKvurxaR86sW8DG4CTGXgs",
  "key40": "5vSZxAXnGtKZrS5PrKk5VJvdGnarhj28mqPvgfS8i3L1mgk9PPJ5omJ436y8VHXVvBPXo2xrbbwTXDQATaFysFYv",
  "key41": "564okDypjq9yhR1r8AosayaobWgqiW6DuHoHqdh8hVp8izz3XJbUK1kHRzGXPSYA8zdYHEuWKXKWnsUmHWn1ohpV",
  "key42": "M3nX6jYMWym7KbQZ4hPBDkCcA5uA9TgphzeH5cJhdFM54qoG9SQhjU52NqafpdVxd1szebRMc9VjSbU4TreCroR",
  "key43": "58Uco1RUC1WUggGDcMQYW123QRxTCQXKjFWrxXhphE9TgZcTWw9gbQasjDzdSE4gQxPWLyjswAFMhwrrRSbe6Raj",
  "key44": "5wHzPHMeNtqHNGvQncb4P5UFhFLdLr7wPDJjz422WSXP2nV78vNUW1og6NzUDJhj2xvzE227a85zXi8et4vNA4gs",
  "key45": "2aekAK9JYZv3vkv83afwAWaoWSKdqVmbTcThwmovQGZsNrc8aiJFGdXAgRZQ4DLWvP2Z5pdhPUfLSyThsNqLpBa2",
  "key46": "27L8ekdeW1QsE88PnwH7keSUzwfxEQhpq9qVa6aWH1QtLFUrQ9eXYJneHiC2tYnFfn97wjVvMJ67skckv8agAb4Q",
  "key47": "5w9d2vPCB9xnTLnSHtEd4vP1KvjkwCHnLuKToXmWiwiCx9LzNBXfzty1iNbXnCiDb72RZKHvPSHnwR5qsivLr16i"
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
