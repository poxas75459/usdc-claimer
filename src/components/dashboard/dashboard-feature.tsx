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
    "2odsJ2e8xZ4Swj8mNUJidS3XUPnHPrnASVVacTQQ9tWucSzMJWjZ859Z1CgE6BvWCiNJF6tNWf5VFFXxkq6F6AAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGtnpZnDZx7jHNJSnrzChE14c2GToVxo9aPSqSrspyQ1Z2sA3HY7WgVPfU4Zkxqpj75rR8S1kJWASDQ6JdQwxAs",
  "key1": "2Wt9RnZF2cLV8q11LW6ftytW4CLxQiqmCrKqcuVajMdnsF4RpnTyQ8UM1YeeRu9xLdvdhJqTYeNnNkxhNmuioCTW",
  "key2": "3oGuJVuTys5GHGNibodeuUk29HmaPXm6zGeiBDAn4KmzesTkb1n2S1FtUkkN8RwngZCs968ZbtDhpErmbU5xvr7v",
  "key3": "Ce5M3fZnW4ZYnXMWgp2ytHfz8iQ2EdBqDcDKGtzJGn95FpbRvgzUtKQr5L1jQBTSwQCVPH15Fv51mnDrdkAFFVz",
  "key4": "3YjWG1xZMjtzwEkyfmUzAjuxMq2gW7zFVzrRDEbxbNjXBuadqfmR8J7NNW3guLrMwuDVMF4Vfw6HWNwKNigbFtZH",
  "key5": "4RAH4woCh37otFR3bzfhJysWxKKQocbY56PzkdcSUeJad82q3VSehLTJ75tjXdzuGhhyNaLeGtyN3YNVnt87h2SH",
  "key6": "4Bwv5rYWNqqQKL3JVsoKzSA2GCRYVM372n6XCn18D7acsfvn71Dj5WJNc4j8up1RLGQ5tpt57WqAZL53rqPerb3d",
  "key7": "46CvJc6LY2cPAr789K2jgHkUXUvdkxYzbDZFXYJ3wrPo3zwVimvj1C2H3hkHtsLkKsSVqn3PRZ9qzWXs456PNNAA",
  "key8": "5AeCupmUknWUnCT2rsPwyQXpLjrbvLsanxFiTwwBeEoCuMCaRQ6Qj4DxB4RnVhM76ceLgP5yNN4piLq1qTr2xZan",
  "key9": "4AoR1kVm5DScHJ6iU5MrXsprtShNnyNct5dHpS2wfyYevbP2UQZe1L2371Ldc2WPdHMrovsdqFqUAtGuGQn93MAT",
  "key10": "4NVf8hbLMvxTD9zsj8qQNs4HnskkbVPyanh16W1SzCxnydPVCZ6UJUvBuohBZMiPphaQu4ppEV84qhsNcAsw2SGT",
  "key11": "2wFUAAGanGVybmYGMD9Jgc7Dm2KJtLdTnAAmkX9oZ9285sWuVBUwoojAactg8aCtidsXn8Y8mqPik4c7FPiPh3FC",
  "key12": "2oACdZ6S5M5qwDuRzKrjfjr6yxXnMETebWeTBrFGzUBndRAMUA376pss3zd25wJiEL8xWdsm2JxBER7HpKPP5THL",
  "key13": "5LuV9KLLaHshvigHELD5dteKpzy1HSb6ipEqoX3HsfQMaiThvBLaoCbHhMfDM4uT5GyvoxrbTx4c931JxH7FFb1x",
  "key14": "C6iKnJVdadrCb1P59CBMVv5jKUUR45aSYoYdvj6N5Yxmw2Btrx7nzHHBPEupwXZ5eWi9Cfaw8xtUP1yoQS12L3M",
  "key15": "3YoWBb37UFft3NKkLohWjpDLmDm8pDebbdeHM79v14bkggvnvjQSAu35jojuqQoxRWYxMwkxLhan7ohWDZkoZPA3",
  "key16": "3zAu6dx7Tx38J82Yyj3Hj1nK4jNNdZCfFvVsLVepfnZ2TJkgHiUqxWPjCsmsxPCEWzTD4YXAXVixUtATJAUCEtwT",
  "key17": "2CjaiiRji1U67HMMLba5v9bejWncoxev9AyueXmRh67GVkyXXbKCSvYLGQ3PTbrQx2DPbpmVNjLD8KP3mMkKSqFU",
  "key18": "5xJTxtTLatAxT8m2BYSErgtJHk1thfmCp3gp2kyYTWycN5NL7x5wnJ96XxQApnC5K471GB8onFgoYvHApMB8NHnj",
  "key19": "4H6Mm2Qqpv38zLEFt5fwysigDANCwawCJsp6htBBm8BVEuELu5LhtWz1kH4oLA49zsYaRnrZaJrZGwLiz1zQ8WvQ",
  "key20": "3UgFjSHPDuEBxXk9rgVBLU9XrNpHR5kL48drTYwuubxwSzRmnskB7NJJGdRnh5i9To98QCAxHmtgqMb82wRri1Mh",
  "key21": "4ry4DfpoDhg1dsKtTDuv68SLptncAguqpSLorKAFim8BvMJzQvx2AgVnS85gNyEw4tSawXVczNCc4PbntdrvPRRF",
  "key22": "5TQuptck64foURVE4NBzqisqTmSTe7TPd4Ubsb5R5dxawDYrUjMQT8VvbuVJ8Tm96sLYna4iWvp1MPjaZwfwvUL6",
  "key23": "2xjLapGeTXFCS1tbaLErHajA9anmo2Z2Y7fV4CfT8HH82qDTtCD37jkWhurAtn5RUUJRWMZpCB3xn2c7V3uapbkG",
  "key24": "5wC4XwdkJii8zuzdQUAeF6TQ2cfaDTWMPNEkkDhdv1A2an7ec2LoRxkFXBv5QmLtiEgdwETVjji8ZRjEu2PxJbGy",
  "key25": "2xeQvEaySCfrfFa61AX3yGcREmt98TCb3rTosdM1kpdXDKYn3bPkJFAN5EEnz6HuVaXQzafXfdrLFcCYKMoChf6v",
  "key26": "4o6UDXLYandY3sTp1XK1g7PmXaboZ5oUchzrrG67ozGCm5pSN8sBFhxa4XWwwmcgC3n74ukx2uF2LfZMiYmQNTX2",
  "key27": "WdDnJLSGGSmjv7Ezf9G5HzoqpJiMQq49GxSVNNt5NYx1Ejt39Hzcbd3EMx6Vu1GoGtV2LQ8nwFSXBZDuSHQUntw",
  "key28": "izcDcec2BJ39GLxkYqYhUXLbmun9B6JgjpPruvJbe1LZaV6EorSXzTJzAHq9TJyANH4ToGn4p4kaQ5cm7Qyhp6e",
  "key29": "3encTjZBd3tx1HeaG9xGHhSfMWzey4dE492KR33bCjWNgbw9MrBoJd34csbPje5HX56Jr8TiALa9Ju6DFEj3g5sj",
  "key30": "2g6spuDFWVNbKubmQvSDz3yHrRfAgPLYQSETxBcR6YAWsZKeqEcobDF5bjatcDhoyqh276aFZheHwJBYj98VUfGo",
  "key31": "4pSXitrgi6Gp96cYBpxiBr48taP6L7zr8mMyYRLi9dqurSxjFMLH1o8SKxbXiD3w8xSiW26HF9wmnBKpy748BUTq"
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
