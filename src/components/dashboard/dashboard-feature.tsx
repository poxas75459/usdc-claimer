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
    "fzdKrUdz5ALBe7Ax9XZmUU9MJuvUtYQL1rsahXrUWu6cSjP5JoC5PF1CNVTgFAmbsVamBgMqdzMR8Xwk9YgkjSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDTuReYNVp15vJBeFv8GVUAWf9ecJTcfiQgyhZG5pkpP66jZDei95HKdYE8fAGkU8PLeUiaewDcxhd8JFcjExBg",
  "key1": "67CNWR5WEHmm6HkC5hu69VE9ogKdTNpZW9guCGhdFbLvxth2B1vMXtZStmwsmcK4c4aAbTpghvATmYs1P9spnGB2",
  "key2": "3BnD6TTPM6Km69yCnJcz1jVT7VrJMMqurFL3hUgoq3eVNN8wFqfHaue8mCzNrFc9m9SUiNTYvHdYcTJ1BTj4x4Bc",
  "key3": "2pbzeZo1xhMz2dhVvUQ6B1AT9bXYt3A9SzDuV31VK4ZHMRXrYrWzchjB1V6Ye8CsmyG7ziqK5aCT5QewVsAKAv4N",
  "key4": "52xvij8w622SkgZYzdrVrw2NpZ8SmRYJdw5mKL3LUpRGEbKGf1A2LX5WL4NhzT5zw6RFbufuAHc5Bb9xfjEWCnNL",
  "key5": "2YVDR5NRohbC8WjFHBHmSf35YEd7vdcbnmxRvMnyKEqShb1tNM3UdVZVHKe9evvhMiWEqeyZVwLqC63TvbTLNR9t",
  "key6": "2NE1SNXA1DigCC1LL7DBhLoCegSGdn4hBoUp72ahPScpWsYjm3XvQmWg3PaARLuQ9JLkmQEDjgYKPWxfwKt2JYF6",
  "key7": "5VdaHarZxzF4msS6CyjoWHGKNzxxQj2rvyhuSXyRE9zRda49szz6iPPg2N9NPCePYGZTNWU5ih5cNbLisdHzTawv",
  "key8": "UckpdDxL8KVrn1jMsiJAPqJ67LHdCVsPFDB578jDxba6KzgTAN97PwDUkU6BVFF4wPY8e83mxwrd9Tc4EgRNe1m",
  "key9": "4eWRgZjRrPn7NoNwXLswpt8AhYXzznPZGnt6kbqg3aGaEoT8Yh72mKWGyMBmAzTZBiC2UbyWXXT1qmfezUfwahLq",
  "key10": "Qkp6EAy2ipVmE9WhNqyW9ZzaqPpuMppTtr6RuLRUmafC2SXPSULms9TaEkVQuUQw5juCjej5XUAifJcc8Vu9PnM",
  "key11": "LgG2GAS2FreL3wZTAYS443UFfxd6cTQgEtLsPHaJTEPzBGTQanv5YJBW9rL2GaKiaQLFoiZoypJfBcCQN9dnCwo",
  "key12": "cshqZ7wioF4AZjMHBtawJF8pVf4y7ARNu2bGR9ycQXr47c8iAoxGyDgCpd2bsvEJurE119Xf5F5rxTa9j3inLTx",
  "key13": "5djQsh1urRSXpW2ARF26k9oGLMM6LFauYYSvnhd4CWLN8Voun1MCG5fydC6sUSNCf1c3LERZZxq5hmrYE9w3Xndz",
  "key14": "48cRgxHsBp8Wke4Zgp6K4kCPNjUtDaLGQ6rP578jZDNjDcozmMXJj3nWcbiJ1sAvUDexfiQSsTRCF74pNobdbhHt",
  "key15": "U1v9GsRe6JpbSJa12fXySCvm7weVxbRLeCy4eKqz38HBabMUGGjgZUwgYp8CrX9c6GnF23P3bgk9aQ1ZfdKfAyd",
  "key16": "2VLsduvY3gepEcR3ipb1A3tQ3PLbxvaGV8QoasDa5qshhgxmEr8pJCRDNTshUWPsm59vuuaj1ntTYpRdd9DZAUXB",
  "key17": "3SoSdhbz68mzvNSit4HMPTk1DD5AXVSQU7vwUB1kBYLUtXfpmbw54UxfW9eby1RoUupvzP7w1vf4RLK4Wo36BfMw",
  "key18": "3DnqB2Phf9npirdzoAj2yp6T3vvFtBmgWezKBcAoLNE5ds3kdBPi375ai4vStzwepZqKgB5joqFWiKpqonG1e5vX",
  "key19": "4ycmw24zPu3qed9iy8PU4Vdq4DawjUNL4hqz8M96CZPwA9BP9fjuDCukwWrXsNpKPv4yYLqcPLTrcZGKYz2apgiC",
  "key20": "331UWwcXt7bVR9dzVQe4YVc3nBidDM5fjwhNZxwsLJYTPo5iD3yiNnBkSBoTQxacQLRJbRMYFmq9SAFywdfvGr6A",
  "key21": "Uxx4ydfyzzDDpBJi7Fmwh49d9ZDMzbdbw6SjRs6ZHiXa9vq5bFVNwdpS79BSdiz8MnJpQYptV5JvtzJzqt1LimQ",
  "key22": "5g8LD9Gms7MfZ9ZRzsoPwBz1MiEJKYcMf9duJN4o1zVBGmXwQMB9DLwT1A4SvuAh4CBmukP9wCXen9iJaQB9JEHb",
  "key23": "4DAUbAbcMR9xzMPqpVihjxcwbJSLmrcDPGwvJ44R1EtQewq9kUEdW4nqq4eimGk8hq9oq1NbErJ5zq8QrEtGbnn8",
  "key24": "31crPgWQpCGb5G8AUCHBRAeinJSoHK1Nq8X8L55UiVAjc7164ie6d6wCyogMk4cmsEZxZ9MQu5tFVryEUWxCdDF6",
  "key25": "34r4GA1ewyzyV3wb8nurYCKw94ADyfWyCkZR16mnbRxZRkpWxBVrcMJt3NJtPL3LbrVmU11oCBR4cVcyAxMuMWZC",
  "key26": "DwaC9GLP6465Fo5uvVxoHXfcPsnTwQjUTjvd6Bcf7KDkpSQnCGVXQxaFBnf1wHxK7JXMZCMB2URRg5H1FmxQDN8",
  "key27": "31mbYXLPR6PCffBsMEMfFJjgvLbTUybJWgsugXxh7qymibGj3xcwqsjC97RBVJGEKxDMzBKPL9A5B6xAvjNiP4d6",
  "key28": "m3T7Ncx4ok9fY1FLHL7KtZ3Lr94qDQ4c8YBbS3S6Wus67iPW4jmwRQR4xJ9df7vLeTvyiTN1L6GggFnYo6YZVUk",
  "key29": "rYGBBW3EAkfRY7xpRSBio4Fv4rng4NzxCX2PFJCAzw18Agdho4WtEHPmQp6Xh72NGNjecQVEVoSeaPb1ACFyWxY",
  "key30": "5uMzusQd3MKZ4r6TkGs9E2X8KMnqqFvw3rb2MWq6Z7W5Hjdeg99beeo9pa6BzgkrTutwpe61Qudqsfd7xrEt3HkM"
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
