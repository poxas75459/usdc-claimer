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
    "4ipG91qonihaRiFJeTwkdDQazEgABeXr4H7XbsqUY35EQmu42hxp7eMVbHdAzaYHDb79SQqsSMfU4J5yKNkntxBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQhatECC9m5dZ72w5L5KJLHSga2a6Vw5s4CGjL2c7vpRXuhVox3r6AKVLky8UwY9eVDzXJipPSoTcexin3ooTh6",
  "key1": "66UMpVEyyLXKvtdNx5S1UcqpQH1NZNrL4SJPyLY1ewoKAMsR6LXVrsaTyyn9hcBgqJGBaAsvAgiqwT14VseCd7rg",
  "key2": "3JUhyoRroJtNHPLPNm7vcjJHzV5EHRCfVvUCcgW8npTje921MZmJxLMTJWfmjiLTWH614LXfkEvLzyduaKsMqB1k",
  "key3": "4BfbnPrKtKbtoVkToPg6vMs9ivPoHx2A2miWUfsi3Wcc7AQ3qkfncy3g2JMDskDKaH262QWbMJLNjkabU17KzTaE",
  "key4": "4BShFan6A9Ar1qFj9qRce68d3cACWDA7RjMpesgqGLydskHje6okopYPEtW5wWYeg3AimmtFmirVzmdafpxR9ibs",
  "key5": "4kkjXqWRxypbvnDUYqZTqWcL64Z5DhrnYcXdNSz4DrCDNz6NMKum2bePGxA6pBUCiovqdFnWhkz9H65RpyGFa3La",
  "key6": "42AzNR2y2hxGZ8nuerz8f9DGoPAmEmKYm2qhfuV76F63nvNKthn6Fw2emBLrAxWHEEPfmxZKUrT92RkUv9KWr9U8",
  "key7": "aAveDY1a19fFFKkh1G5Vy5ftmSDLzn57qPG22WiUceiYTBtpfkNnzJei9SPNehH1WLd5g7DcumsCmGP19Mt5rq1",
  "key8": "468PJ3i6BhR6k2VVtTHQxAG4DdTVaGoS4n7Mt4bLLDbaLHb2bwMDnGMH3nYfRzhNhhCnPR3hjuWjTQtUFL4oBXJg",
  "key9": "2WuCDwvtGRF4m8FGmn8exaMrz3LRsNRUYmvyeN9HX7VwMjtdWdANk1rSVY65irLZb9eoyCCV59g9jJY5vusGAofm",
  "key10": "25mTMC1Yb5mGSP5DEFzWRoG5bJntAMm8t9oYAWSSf8V8C61LRFDPqfqCBiygdF4oD3DHaKbYr9qhoSR6VGUn3kYK",
  "key11": "4A5vynqRFdvuxRP3LTtg7GrHEFcqg5uns4zkL4g2MrX8iNEZG3wbxc5E8Ys7d99zAVL4HMgk1yStdteTBaCaQdoK",
  "key12": "AESHHSXG8Xih9sZhcgK3bqVz4sXW92upg5ZxzictRhBUvUSazbYvk87X9MHHn3BjumHCj2FLWmDw3rnskLWTYSp",
  "key13": "6V67WoN8caNmkNMvf4Fn2bEbvbNPCfB6zTQyn8crTTREGiEgKCWQmqd73rWecJVQaZh1ZYnKsNjHNacXmfvXrS1",
  "key14": "65Z8xoEWXeY2cpCcaRWjWmotVxnjYejRzAKFpHSrqp1TQknv9yiWsPGcAAJKfCoWN9YyBJqwHjJjDTS6zcAg3zsu",
  "key15": "qwirXpnhbcKV5BpSx2zoc6ZKHq76JMkAcqHvHjoSDqvpiZVfiGh9Fi54TmjVZnA4Kqj4iF4yTTxEhY7MfUhrMQj",
  "key16": "3xC1G6sxhtV9ZKXTKZq3Vqry2DzCsv8kmBozyab9VzAXedZv6adMVkyuYvC5VQvxcWGrabSHPweYuetQZFWo8zz4",
  "key17": "5v6ChSj4LaoM93NRPTPDMpAguHiqdJWTQHtNvLFVFzxD4C22sfS6ifrLexAmu6UuxoX8fJ6XR77TfMAGbpqetBCw",
  "key18": "4pcdXLJzKT9FZYkmjZwgBHLMmWMyxf7SSdMB9nVGGjpu3M42Ndsa9yeqEJHqqCuLJ3JmgsiUQzmryyc4DVdaRcB8",
  "key19": "QNe4jXiKyzgjPKmjReFzPBzL2LgVr3KVTr7WbESvW2AaTeUzeY9Mggvf5hZhYqsDAgmesuYoxDjNaxms5CvDj2a",
  "key20": "46gb2UZ4Ri1sjwCfapcFXscQPAFggaBEWSriNFjHphYFpjetLb8Rot3HaZXi2wx5tKqGxNR8X9SqqcXLAN8qfodr",
  "key21": "278TZdB9oFFCNtY1tfCGmFA2BNH3r34ahMMUAfr8qvbMFVRcwiYJifB9xE3Qv6q88gUPv5uSyVPm2dKtkntBdya9",
  "key22": "3bZebYz7e9UknxufEBNJ33PjujNDzFeWuzqNDtcXt9ijWgGjGjDNikjck4A1YLzB3dZopFwzCzGmiTe1MYPQmY9D",
  "key23": "4wXjY5jTTzguLPmXH1Xt32eUbYBMXZHav1RqmtmMrSt5UY2bZkEKcHfoRKsF9mFy3Bbq2XjbmDEJaVQiQYYrNr73",
  "key24": "2EioZjLjj2HC74TgHQYuBLtgt4gg9v9Q2V5MDcLgHoMaqtE7ZS1BshYwdBjKrBbAKix8CD1gtCzaq9JwobHUnbqi",
  "key25": "5dUyo96o7zKipkqpJAapT7NFaBrRXC2zAaXih4Woo4ioQPrQ1HX7oZApy3otJbCARy5zV3F4UZ9AmR4pbsjiXCjA",
  "key26": "5NEAx2Am776bBk4rotVHGryEtGqHBfm72fz1sjTZ5FEQUkckGbnu11KbCCipxRCSCc3Ye2bwszg4byr6jkQN7Q5s",
  "key27": "4S8JY8CVrKnoVYzpnGa2tUeFG66ud7g2AG8WLuCybxo3xJ9ijmByHkXccyj3xedxXChyHNan7Zt87xH81bs8cnwm",
  "key28": "3x8WgqkMJzpWdeUY3B5apG5RipXQkhPNrYtdtA6vL9iaJ8zyv5CYTzVvuZLTnQLCccpPm2yhCexg8EfQ8QbM2ccG",
  "key29": "42XQrp4w78ML6LvNfojg1regngedcCzfYwGLe8T7mQwACardQFdR7Amdp594Vau6gfbM7BLg6ZrJZx2AuiDVPaDs",
  "key30": "bXDyqrL9NqHXBRBMG3kc4ZFQSRwGubZo6ZMrq8t552mooHQbbXVuZQBv9BkDqQ82G4vzo5SdhScRAa9Dkjt1YqN",
  "key31": "3qoqczPA4wDPsMEo8F4RukMMj7rupEsDvyGgaP25pWKmXBgnWdSNwfczDAQS2fc9RpAo9YbJcYZPgv3oY943cNZv",
  "key32": "55BrTcy5Hxbwr5yKeNTN1wEjQbDcor4gvrNZkLpGdmno6B4YhgCbAKQ8SyQjTX9x3WEUj87RrpJxfsu3qTqLBqLA"
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
