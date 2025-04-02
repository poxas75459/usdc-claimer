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
    "5JW7eoFu2vUErypw5KDdVuA9YoeBkBgB77Bz7UwftiPfTLeoj85ZJchnnj18mjvh3xyhKQRzbhLchCfYXLQDHmFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3qWhFopBWgq8dUYHGqggrNCA5hQG12gwFefw3BydYZoVDvSsxQnFeBszKQsS5todSRJBR8ucp9Rr6zi2KjWe5D",
  "key1": "4VTfosRGx5F9JKazgSQWq5MjfC6t3oNwbqwLYXNrRPVuNY83rxao6W5RmFU1Qq6mtbeHV1Ea3XyYtBMDdeJFY293",
  "key2": "nKe7tXCHL8m1rcnFTEf1op8MdBvTFUX2C7dFuHCPFz6GTJCtFFbQdU8B8UACTDsmpUWVkYWusbNehNwzyY2UoDt",
  "key3": "25sinN8ubJEHnMzniMS7sKNdErtKoSptRpXhQ3pHS4ntdgrgDw4JW7qrofPPVHpsXmhW2gHLjdD2icpFwpCf87hx",
  "key4": "2CWioBZMCQvMNAfDY2doVUt6ptnpxg6r3ErzgAB4re6eVCXvFKa8savXShbEQFkjGL6SnrdQ4i4dbK9mvgairyh",
  "key5": "28TC25UpzYaJykDPypH6k5rV2WjdfbcjoMJTaxtHd63S8Htx731u4dULcumZCeznNyfaVhquTaTSEvBQQi87JBae",
  "key6": "4pdoPxNXzUdzHjbLNsxcYikpwVFdVBWrW8owWVpKMzguyjomQsSzkmriiEQH9uAWq2j3KhxyCVYXtSVsoiXDvmym",
  "key7": "57yiwwiGPYp1DfBvbeMVXHcUVLgLw4AYUxXqerRnRZP5uxQ2MEAVZAQT9JDCKV3vNSJ8bfe12ft9NvmqYVKs5nqC",
  "key8": "4zBKpy4EatFMfVRBQaeHim4L4nLKveBzA3Dxe5FK5qvehQJAgEUJbiGrgB3Va1erwWpbonwSoY4xZiKDLEFBLPqo",
  "key9": "uY7eQq83SqTgnNeVBsMKe5dV2cBASWnTsh6fbExL9qVYHNYyTg3rmBwwy6E8CTR5hr5yCLKnut7hcsr8BbPdRB7",
  "key10": "3r5A1Bb3T44VzYPbM2uywbzWtyAnajcQswSPEMURCcEASDEZwEaKHQxvS2rX2VTd5LExmGqBnL3MMCyyXRen2o75",
  "key11": "5CC7TkYdx2UfxYtTJvjrGq3HMnFjpx2U8mWnSVvhG9H7j912Ra8CGXYcjZYmGfktQWCFbpxTujPYb5bCfQW56ouy",
  "key12": "5NrWVQuopEQiJG3ENp69kvtQZ6CaiQY9t9QxLTD68uzeSgELEeyawDjwxnSnR2fgv7xW1XCGMiQ8X5RP5dkfzrqM",
  "key13": "v4miJZRNXM97KrWZKE2Jh6uSkbzDopkSkSSy6R9VUdMbLxvRyLANh5oXeRNAEH7YeGTgewEHaGNyfs9vmPcJ3YF",
  "key14": "3Xpk5zodJ6r7PaNMzgSN2iDXRC4TaEVbrGuVfRWoFGMHVKbKaqSYNJ6YZ842zGQWAK6MQ6PDzcncDc2od4hwC8rT",
  "key15": "5r2dZmM5EhTUnKxASBbzt6infnHzxVFGTvTb762CYkFQPN3usV9oZG6RYdb8X5kcQfqxnSYXFMeKAxX7Doc2G26E",
  "key16": "5EcZerE9JRBxgpS5jEJVE89zgDCVK7f1P7N3Q9dmWxgKecNp7hstPgsn613HgNyHmeBzXygGw1kHLbZ5jY5d2HtW",
  "key17": "vvH7gvRr3xNbi32e3yBHVtuXCp78XfwARVK3MrLhxjd1FWg1EuJdu7pRF2soh6vhzdZTHpNhCPGo2V47NH7RGRs",
  "key18": "3cnhSG8BDWPtvBY8fx84qJmVGeNu8eVqk6NkpU3a2FnVA7WtnWHvEyms65XnVZiw9enk7DJcCG8Eyq4FpYgSYWUD",
  "key19": "2CHYNAimdrQnGUQuH2SKrv3GvsXzD3LxgLoj2mGShG7rZA1NjwcPtuEYk9NLLMe9TnpXt6Wi2FqzW3eg4YyNpGP6",
  "key20": "23y9enSom2dDsxUnMNeGS9i9hQey5gMKoLRD95d5aVpxbmBcq1sU3dMH5jxcy7227m4RmUFJuisuVGDdb6yFStPX",
  "key21": "2cMdytrCrbNJguoJSgrK5p3sd1e7CWdvqTQQMXSH6WcmxTVUpQ7WRoVVHp3rW8e8GFF66Y2GEtX35Zaw9pdz7PPB",
  "key22": "4PrAVjKkjqFWQhTWH9EdmhGXVE4MpSRYBVXHzFt1Y3CxSKxjtKUt5oMaiHVMaYVqj1E2qWiEGBpV83c8deGCeASo",
  "key23": "3N9ZE5Mf7mhPoLGLgb6orPix6oSANbrnKBhaMvfvob1rHFkGjvcVtdTT6ErQ3PcH3zXitwkpDrcDgL3cXHTSiduy",
  "key24": "2jkVi5qcDrY1PmF5Z4bG9Z7BXChHxjh89AK9A6pBaf1b5H3ooxaERsstFKAo3rKJWWMxdHk7DRtq8f2DhesgcUHG",
  "key25": "5hFESCvQUs9qAGWWep7T3toVvhh51ZsxWZCUS7RqLQHWbcLLxTq37rVLZZCVTbDuSSkK3WykGoUemi62R8c8URnc",
  "key26": "74pvrSGasKZASYoLvpWpL5ybBbYdfybSkH7vqxdjhym1Rt78jANGiE16TMMvdaFZUNWNjm7Fg2xdjNVbysb5A97",
  "key27": "2BwAJriofuifn4VYGu3Xsb5AJps5MxVUdMWwsBPPSvGVcXmg3aKU82B6i74ZHSMj3zXBVxjkdM5vzH2LwE7f5RXg",
  "key28": "3pnhMM28t5wAAXM3c5rDTCBLDbaN56rNybdcUZVadgHiXZNtkufdinEFqgYgr8G46T1YGnwsXBQhcSfmJh7PqCNH",
  "key29": "4npxNiryDofBKenTtpBBhpMREkE9XduPpXqJgPBtfzogta6F8qWJwKyS3jHdoDrQrJkb55Qpjo4S73ZCrHBWzLik",
  "key30": "4zk3Trtr4pD1brS6mc6WNK7G1YYhxSimw5NdPawq7Nt5BYWfwW3us8BvUmSwQauvw4dYLsMyCo9UjrsgceMp2fRg",
  "key31": "4HPtxcnxA1vRv6mQoDM3xu3AqeGoy4ySK3xHnK9dcW7jULc3nEcekn1fvmBbrWrBQpdRxWxzeWb3vyAQPFivreUX"
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
