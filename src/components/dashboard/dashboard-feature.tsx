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
    "2LufhodJffXMNqjwmfWqWnFih3Breo8d5kzPVDLMd3bvQzi4sD1kxD69bN7qAN7ewc4JRc2yth1ztSqdKc7w8zoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUkLTJZAcqrBp8PW3akNqKaQsuUb2SVpJ83WBUNGt5DWXRdfEik65xBFrAZiucLprdkEg6P3oYypYnMdeZuShwJ",
  "key1": "3fXGNu5gtGdK8W6Zv8uPcRoMAdNcZfECusrewM3qxCnSUg5ByyuMiZbdKAJ2hb9ExQYaLSsgaPWh2UonAVzpWVEF",
  "key2": "21dbHzsaN7xp5RCVA16vnB5LtPtmE8tiBGga6gQejGvpGzYY1PX5bKvLwviYft4FCk7k8Kazw2xpgq6wFDX4K1Tg",
  "key3": "5pKyrKHXPWCpMQuQYvXbndXrbsaagnVQ1pCTMMP23FpBeL8i7M2xwuVCsrPZzPmJHWNPQWQK6E8X5zjSJ1JwqMoU",
  "key4": "3R2uCejf3sHkgkS3XHcZpppz9u82S24RdZDoUBXYDVRaJzGDDZnigXBrzzP4G459JiyXQFuJK6BRudTtsAU5yBwb",
  "key5": "2y2oNM5Fco3UhWqMC1aSmxFGhBvx7h9roYwSPqtwegCjuYZtekCFDpkUL2VKjpbPt4ggGNktZ3mSBaJcaKi3utnN",
  "key6": "Lnh9tPQh88DRauUYhkqhyfvLmaf2P7bktNMdgNQNEJZxw5qP6HiEQigc63iRBvoKMyBeJuLYM5JdUthcjpRfyVV",
  "key7": "9PXe1MyyBZj45nyubGUATpKLCwfnuJJhqVuK7zr8BvCNtmgd3u86UM57MqP7P9gsZo4TAYvcsXuizywmUbPKKUs",
  "key8": "5oCduWokZTP4c8MfG7URTF6D2mAbHgp38ntVDgUQc4gLsKKyRmysFWamXP9VhS93tW3hTWsQLM1xHJcCiEqt9G1n",
  "key9": "5oLrp4eAiXba5RPSvbpexph6oJCSjSx48qxwfbP3Mo87r4EsxUioKUXDcUSkxCjwJXbBgRy88wuLBKgoTxLc7DhM",
  "key10": "5uBKo7tEzGakXqfgmZ9EogmjqccDqYRLSyFh7UmuVQCWu7FRsVYZw8b2cEXMpNiCcwDca4WfCLoc6Lbj4w7JoHCn",
  "key11": "3TTdCCEo2fWLnkB1as7TKxZ3xR7QxqKNpszkJi9JSfiz1GfazAZr6wHR6vDRix7qQfHeaoSnkFRNCVEGHALTGUCZ",
  "key12": "4WwKKe4vxh8AuYXNNTm6K9k8Qupts7fXKZuZKFf2CLvanZVzSx2221azsyo8bessRTBpJipUjtrdfkDZqKuDfVQD",
  "key13": "zQNi5Ls8Vkoh6PZmy3iC5Sh41GNXU63NC1RCpbWh9LPHo33xY15DgfCJTCm78uJ26QhZ2KafpFhEkNkN3R98mdD",
  "key14": "3a1KyLVmAEWGD95hTrD366gfRARSWLXc6gQoDupaBTeb6qrQjb1GvvELhSig3y9HHCyr2mdTrvauUn59yvofTDEL",
  "key15": "2UMx9hRt2XeRNzuY59dht4LUwmefysvUECb3UdSrNxNxafcffPbKCYsSPYH4fwUmmWfg4hkb1FxxWgRvz7aeKfLN",
  "key16": "4Boj5ktkVqa6T8C5Y7BGkymqqdV3tpRma4CCiDqi9GxeuhcQ8XYMCEx8w2qXjWWAkXKMRhg3xk8SMnZo7WMTtC5E",
  "key17": "5YFLHnvKpULWzEeo7fcvZgtQJXoKSBYuwfwFWyGuGKg3V8Gw35pvAqVXMGV2e5Md5Vjwsiv2WrCQkzQJbkhzxS8H",
  "key18": "2E18TSJcftpPYXP6g6rwHVEYJn81eGZDoxiyvvR6AWpM3VgsjbabRcxg4a3aXzCkp89xaghMBhpAzcrEAbjoYPnn",
  "key19": "24CQmp5WPdvGiTYpNkDHchPXHLmgZjM3Yzjrk3G8nUoY4cstNmmRxVX3XLzPVc1moM7esjJ4R7cbjjoDMS1pF6dE",
  "key20": "7EdKk86RQTCKmisWAW8hevogudjkq5UgUWoqqr1vhsFn9rcfak2RHMho2kUktneUXQL6jyTNR1rrm9vwFV6WFBR",
  "key21": "4Y1LrWvkS8Ew7pHihVhzMCeRX2rhWoA8pZF6sXW9DzHmLRXBUiAAVipHiU4qkTF8xe3BfFMHRz1oZFS3yvdQr2v7",
  "key22": "2kC1YmYF6VG174dgpoboa59WVH3LTX14inj31rkuBM9RytXp9nZMsad3ySQvwbaxvtED2bTczffezkAniTKzS237",
  "key23": "5CVbFdX2m9mzgkrshcD6U8GWWKtGKSk5jty2vYsc8CUB86Ac3AZ6oDGbi9T3916sAh3pgFhLku71Lap7AtG3r1sn",
  "key24": "5wQb3i6AU5oePSCLdHoiQiVaumsaPCcvdLBN4VJQ4g5GXrQ2zKhYSjhqa7b9z7qvUzgFuUVMez3Ym8g8MPuhm5pK",
  "key25": "4697sUxzjRPvXbJJ5Km4Hudaep2CunjbzwPKJa1GJBhPmkeQiRDN9wWKUyS5SKE8u41VzQfMWv6spySLWTvbTLRV",
  "key26": "5qaRtJ2MqapDn1HuoUfm1pBMLigrauMYf9YDt1zZaZCvYGJScRzo4NUtBYAUuxJ2QbiVAWtikMMbjQrTH9LJqLwX",
  "key27": "5pgvCn86t99sAkHGV8yviHoFCgRppWYdrqqvf3tmPgZgHyxNxmhdKM8t2JSZVnYnhtvBMhL2Fw8VDxtUtQVvnnDU",
  "key28": "3eo7XqhmT565Zs9tYtxssi2HCGChp6oaTZUqByFLmsHUtskFKAEPtTk7R4virZVuDAggnfaMHWxns6WxaV3CgnBM",
  "key29": "5bURMrvDb2RXnNM7Xq2hPd5sHkdbvWzAncQ9S47hsEvhG8NvSt1L6SoEky6f8Aj1CBX1LygSKLQ9jJ27Qukh83xQ",
  "key30": "nZa6PuZavKYUoXjcRBwiL9wpA5DNZoc3N46pCnYNbe5Fw3RuEguEu9arZxZ34ySg15ZPTh4P8FVjp8Tvp57jmDj",
  "key31": "2ibXeWZYadVKy6XNQkprkjvCeoFCYerCyWKgK9qgfjqvGejVEzwZd9GFhzQfhYQuqB2cLbGapeb5EMYpn8T7CHwn",
  "key32": "2dGLvv8Q3bnzVx9QQHYuZkD3zDeasuNEEz1NfMEHBsb3gDBZJLQdAQ5GzTU7uKQQELorHanGaxAw28vgafsC4b4o",
  "key33": "2tEn16twgEgvR9kr8ZupJ6ZG71Wp5MoYuPbK3ZfBFob1JCDtNaDV9htWdvmEb9CkPL7WCBbVtHg9V6JPWeThZvUW",
  "key34": "5qeHQcLZMhBhDbNykJ2h9LEJPuvoGxzot98imNUKh6ZML17Q4fVztAAbbdv7DL7TGfh3JnekD3zqfQbd9TeAbzgT",
  "key35": "ur34NVEDbg1Xibesp3hDFVN9HNw6VQr32j9cjnz348UeQfQT7dWjHxb5vrhFAkLrN6X1GRasW45MT3jsoVpm6iJ"
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
