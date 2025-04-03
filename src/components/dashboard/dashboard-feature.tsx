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
    "pGHpYHYpfy9sMqwNxgjsFNnu9pYwkrRopSZzBvAQnCMhXXh8ACg2CBAJ1ETzXVn2Gp4BTcVHejqFrWzWfADH8xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyVL92nZs4eGMwmYd4uycsSZbk8aEyNPi9Jp8yyxS8ssXuBpHEaaTyXDuQNBXk7S9vFF3EA1KqKKDEqrsLXK8tc",
  "key1": "49M1exRwqi838sWeXWM5h8JF7gkXfpHX8gqCM4d3ZQotVngM6BF8K6g1rWG8zQXqabkJUEVp5D3TajLaRpSF1UaJ",
  "key2": "3x4znmjf12LGwDiEQUU4ZJMMMCXKjvrKMSWAa49V5dtUFKjDwrkrZ3H9ApzPPcbL344GXkKkAAjrV5it5GdyPzBw",
  "key3": "5wWMQAPqpgLGMUKjZvKFR6wsWPYqzR8AFCKFcpJzmYWm6CzNw3HGPc8DTQrXNVtZYKjBij8UC3vcGb2KGY9GK6c2",
  "key4": "2ADw7LYC3YaTnZHHLazSgc4n7rvuGo8itBPaf45qFog6XEMXMKdsgp7j6BViLqRQXUVqEDWWXXvsKeUMtSQCRiMp",
  "key5": "3r64oM7vC7AXkuqbaLe5X2PZNWqcPPFiDdJxvSbwZstMPLCYgwo9GbXo21qMcEGGS6E2F6TYNSieNUTTHs6sQ8XQ",
  "key6": "3auYtKU9yMSEUvTMhUh51YhLfov9zjerGDWzWJcuVGJk9VXN6a7EAVMYxhto9bGdsfb8LnXzQAYYWeQ2pgYg2Ls5",
  "key7": "2sPTB7sgmi6Ex7hteBizToKADrCB6WQvS6CvzioD4P5HtaAR3GVZLbeQQBYLhQcqSe1WLfBsMU1fULuLEFRA3tbx",
  "key8": "5bUbY38G4bk6zoBWzQqPjTXxk284xeBzpMfzbtWz5mLpPLMemFzXKTbXR1byoozFX69ZaDUBRktXB5EjdK5jV1of",
  "key9": "64AprbNEfD3yD4DR6Qjs8cntCaRvAmAd92GowA7UCMDG8ZtresRZopGcguBTki97tub2r1SWZKrUZTKuYwmDPvcQ",
  "key10": "4cuamjVNiYaHcv2ye6SwZyzrMJHQDQZNMBbh6oR97KxRzo67zYH6S4ZVP1DADMEGiz92YMs89Kq6hUNdaVFH414y",
  "key11": "2Q2n1JQF1ZiDtDJFZxfoPSAq3uuxQoTR4zxFKviq1aSiuKoxfaQPWKsgCYZcWZCbnFrgfbAZfjx76s3GLBDPk93y",
  "key12": "5d5aXFk2TheuUyCXP5MHUkNoXAXRMykHf1YQo84YMNR5chG93JzYMA859VzYaUHVE9ZJhNrxTXyPhyuPdcRFHRbG",
  "key13": "M24yTuiTo8WnyUmpboU45RK7fP5ZpzLzYW3GMF2gyDVo9qknQ4FRtrLj89LLARhnqnJEFZo1H4JBW2BueVkT3Hn",
  "key14": "5VbryN8NSp6hHcTuVpciLQmQZKUsahi1kZ7WPZWbeLxoeW554AMwgETDLiCNR8xnjDdxNmD4KtSk823hQC4hk3Py",
  "key15": "3W9Ni7ynEsQG2QZTTv9C3n3T6As87GaeMP2fCJW89nrb5vFjtdn7mwTLTh3a7hd74SvuAJ2zKT7ziLNEdVf2dmo1",
  "key16": "2h6VNeKhYr66kqf7HFFcBHCE6GTE8CQGzJZGsHVb89CPas1Nm6bVrHBqmDzujXbF2nGDibctAfBP7atQGRj9WnWL",
  "key17": "2mJ1kYwiqEypW65Ce8TLxvGbEb2rjRjSMdvHRJnxSA7DZAYot2i2fXZKb7RPSPnokpEgfKmqDDmQaob5wizMNU6d",
  "key18": "4SGpHHy5nfMVbzatg4wyfTtaP4Zmv8p3ruy8RzRcimn9LEV8kGMYTnPmbrtPh4ZFSnkpCJcs9oHq8X934XffKExT",
  "key19": "o7yxd9CaXudRyaNtgq8dnkmLenZKpGwfNpPLR3VpAdjuW1LtFQVuxaE2Th2LB3N7zEZaX57h6Mkp7irkyKFVvFb",
  "key20": "3cu9vChxawHQKBmd1EdtwsH5pPVP9CbrN9DumShvNrsWTSfds6tDMHrrBcCDfmwsphsi3iSSdMba8ps2tWHCzP9o",
  "key21": "CtmP8XzRtBXWbHA6aD9iDcnPxa8Pbz5SBmfYjRawXvh2Uhwb7jkwjtviQJWoUx1Rc37SzezExhCH4kBCBsS9Sdw",
  "key22": "61FbtFq7mWeHKEZhU5HcjnmucnsfJgQtMZbb76x3VkW6veksZFYxttCjuaRa1hLUyxMBWqB8VdztEvki78rEhV5d",
  "key23": "5L4gKrcW7r9swrZMhXHidHCL35yet9cA3pYPmiDPjUs9H37kMEJF3nuy2bvreHKpMKfVGY1JZc4kfnCxwJcfKbgq",
  "key24": "3sDXeYiMK51ziBTxQ1cr95gnvsVR4f52upCLjf92i8T6KVywNKSup8xf6BUrdfxgTaa8VTZ4ripwX4BsDgPBzCkZ",
  "key25": "2qTtnGuNzCqtovZgJxH47W86GVawdYjNg72sj2JbJaoQvadtXu7iN8GddHcuJzBt4B5Th98aqMdd2CRMtV7BXnxv",
  "key26": "1JMVkpjiD8eTLEjuzMASyTxiPGZ1gq7XEQxGLg1k2L9Nn3cA2jTxwNCQgtuagaW4RY86QqvZqg5t9EhkcqBZLwY",
  "key27": "ncoCee15gsq2wFY2bkL2dBfE1hUgcMb45CrQuSKdrhikcR4t8uQ3PBJ2CnZeU9e4ucQmDCCPnYZtbsGzt86tFTM",
  "key28": "36fy96aJNMUsd7Fdkza2Tz1QcJtPV16XXkbWk7h5DDfFR5HLoc7Ehkn4b2kMbEwwVV7hu2shSW6WBxhsNSdRBbLY",
  "key29": "3dF1toZxhbebMJmdZJU6XEf1kjrWtxfRUdbkt2VdiWuaii3a2Te1WGBZ86qfBw8D9FvGAPf6ngrNzvw7SRCkB7SM",
  "key30": "4rqrFrtsVe85KNsty12obBphXzzgcCaugTkTSVmj8LmTD7yqPC7H66XFisvLq8ZMLp7mV7TzxZJ89GXHYs75xNE5",
  "key31": "nicy6batuUQKuQmLSYquZ2iF2VEocuKRLuN2y8cYY527m7MLhf7Z8YorH6pxy9Zic6j9G3cz4VejRikFnzaYe3f",
  "key32": "2SjyTu6J7LKcoETM8QYGWv6dcoQQDMkmbm5aLHabAoUgaVoCx38Gcscy1X1SyE4Jqeo6f77VKMAChDsa1A5cFXuY",
  "key33": "4jJjE37ysNv3kQbX3psQkzZaY8m933mr3HxCNaQHWXrWSgkiGFFLgqCZTxYnoUFNfBT4WMWRSJeQVV5qCu35pHBA",
  "key34": "uzxVNP9hxwe9da4TYbyi3BNA3wCKZ6wkK6V9RiThnppZQgXWGLrbHd7ymPq6dzKrWRSRkJrGsANvEMxRcZ5MMWp",
  "key35": "2LB2rMaVPkQqDkKFwVQvCDNaFApiHK5cq853tYb1ZQFURaqUjwc1tjkCytgGSaYUTxqLV1gjJYaDw1d5vgzmGaQR",
  "key36": "GDirSYAiQ4oN29Rrej1JPifuBhRZdKkhB176WkQ3MqwuS5UU4Ehmw51UHsH3tMTXNDG4dTPJqE5iJXFnZyVvM9g",
  "key37": "5m69NrC664oBCvrnPqQhdqcm2FnpaDxhxZHGGqa3YHQ6SpArQ1mpthrotTRwVRhwMUyGW4thHt42B9sJZw4ewEBa",
  "key38": "22KKZXx2mWPdvstE7PkXPThFuHJMZ6WPXSJRWSkwFofedgXBwn6K9KeSgYmxYARrUM5wgXX3FrNZgpXyZWcgba44"
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
