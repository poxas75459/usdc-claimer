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
    "47jAbq4hW8VHCGJYzE9z2d1sg8aymVtc4uG4NfWqxwZqNx1hB1xZNKnTmiMgYTNkzd7LeU3KER3kUwWcoPG3igj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWD6otZ8yuFFN6RAxF2qXcvvYUcjfANdb9PhCyYYASrx5FwKNTvkmFYwmPjMA5SmhqYuUaWLXS8U3aZq3ntvq6N",
  "key1": "d6bqddgVpDYDdziqUDTZEHXz2PBK4WuwBJMqwsFfC21iobEN6RUNJHspMRQmyNpg5dVuquCoR2eEPr1krvYewWy",
  "key2": "KBDJdKZX1pauxUvBBWGtHnREQFBoqFcLBoKckPMSNqFCiQ3gEndLtCb6U5Pr74smwXhpjLaHtBK36hyfAXF94ef",
  "key3": "RsuQcgsEAwwowsVAMrUo5fuyzcQzNvijiL2pmWij3mceW1MLGmVTWP5YdwTz7ezDpX4gjZDYeKf7Yc719Wd175G",
  "key4": "3sGEGcN2vwysvoVJWCsMxirxJ3LqPg9csnWw5bzgZmvU8yPfjGifMmAaV7yLYZHritDah3QsVKZ9j1rRPLz5EtH",
  "key5": "5N2gq157sb6oSP7dKP6VwgTmgffd2b3YZXA2r4mMBHbJ9YP9VJJ4HPSWho3r1QkNkii5svfu4i3yNFusW9PcKXX8",
  "key6": "23xkV6e1g37dnx66HJDc47SJJMsRnVq53VyGFLCk6XKubiEQk3eovtXwt2gjeLvE1NpgeDAuBx6SWaD8MNgNQPjY",
  "key7": "27ysxrw5sHu9r9JE9cjZpthTtFphZ85YRka5845x4nCfJTNbZJYrtESbUGg53jtqWeP9rbA57wYUAfZo9oAZYp1d",
  "key8": "59AR8GE8ksxheKwxAAKU9PNW9qRTp4LbqRVUP3AdnAdwjrACAQjjka4wZpWMyohEm3dMwQMFjQyj4YMpvkc99cco",
  "key9": "2of4i3gZNVVjsfXUNd5suyDjn53RvA8prZjZsAgfWi6ZP5HteMDmPuPUoeshLipQyVZ8bHzdDsKxs58CfNrvD9wj",
  "key10": "2vTeGVofiVNLYuaLBjeN5hGENGW3dWBhsuGHEkaw8fzEpe6vN1eBNxYJff5CqTc3WqNbSRMUjJeBpjY13h5Z7wbF",
  "key11": "vrMRZnixP5171zfkzPzmHuBteZBTwjQjYgP8oiY5a3ybkXyCdWyu7PxMdDnEaqWBwJu3nfromxMQuowHMVeKPpG",
  "key12": "oRjUPopxKvz5pH4yawLfR3Gh4XUPNuCTWbVpuFYixPKuZYMmAy5z2c1zE4CSuF2LZnqXcZZRhU7U1WZVMTpUxsH",
  "key13": "ebKVVassCeRGGrmmgQtBWQisqoCe84BErGGhXNVv8DJ8kqK4rnUZyxbfeQZGowQBpM1cDGatNnLzTgEGH9m6gTC",
  "key14": "5SubeUpV2qKP3BCpqLYAxjEgDyaKtjU6XgKbD5vXfyqp66h3PmkfpdCf4r9GxGT9yffZ93DCAvpusV7CiBtqthfW",
  "key15": "2FEWbhMrzpL9MTVft1ujG1CSUjguyveCgYc2USZBSsVHpxReNDKLGokNyuiu3iysWPofdT1F7M5LVpn54PWkxW5B",
  "key16": "4TLMjcommAgueXgxW9BxmECFnapN6qc7MA7cSpy3yNLvGHPtnewZT9LFVxLJ5P8yict252SzLYZKr1Tq7N5732YC",
  "key17": "2TgewR4dQZkRx5zsPwqydDCH4kJqdtszcLQJoWAmjrnNJ1J5joPY6goUduyB5K4GRQbwtiyXoUKXdnTrpW37GfjV",
  "key18": "2zcRyJu3WmpFt4NP5edjtoEXHGcXHzfCZEGpPNFN4vnph4upx357GaLp2QuqAdJYps75qCjoH7Zeit2WLsC192yh",
  "key19": "3gRTrcJWok589q84fVf6QPPdEJSXBTtwaWXcqHKbn7zNWgW8R6FCdVxE2GuJQ81EH4yMJK2E79bKCypyQrzxSMvH",
  "key20": "2CAt4pw8qRqqAQZfdLewfbkv8xeWaFMNPteRakJJ9VY4xhHYbRCxKTQKqcNNL742frPhTrAiLBeTPXKKRjt17XFZ",
  "key21": "2W4VCcsKhjaHkf3fUngj8Ry1XiyBkwdJmg5DXUwncL4R6RyN7xpqiWr89StcSTHo7wxPfxfaUoKHfnEaMcvNUPUX",
  "key22": "3hFktKRqcbZgrLeTiKmANhtv2SNg2oGDbqR4aLbXPpdfUVHSQwxMd9PW8HpH9fVJMCP1zFSoT715dtzuVLv9uhse",
  "key23": "5xtALmmHPCa1PepnP34DNb9WzQyZbR8bC1G7TsdrRLZRRkYjfh6VJ19FNDD5BGz1zmCBp6jMESYY9E7iR8BHiBeU",
  "key24": "2JKP6bx2PcYssFUUfydAr1otU25KoTR964ubBYTmSwJwFRpt2cEqfZBd5M1acNRUB5rpspmsxFr4mv2iF5axswXg",
  "key25": "4psJqXU7WDzQK8ughPDLExBw8euWhCmk4kUnhhX8ngFRueD3MqttQtVAcgqyq6Hi9U4BnMM5D5FXgHvB8p2P11a1",
  "key26": "ShDXC2kNnL8LWBCCFZpAvPoUFrYdeNmghMtfcgexKGUk9irQPfwjyh3sSEZHDpmsd6fZ1bcE5gdV4P9C7f2a7Gy",
  "key27": "4BaniSwrxGzQgbgkx6o5pVgYXDNHtGvYKUjzJPyBFT3aNMNvqapJU4GYh7QKcbojxnuP3m97ZddnT7mZXva3ZXw6",
  "key28": "634tsvPZ9Tag82Xw8KbXyX4xbyG2kspoi3ccuAuWhffBF5TQZewfHde5XQr2J7C4TRBQvGjR22GbnM6gf4Ezk1Zg",
  "key29": "4FWd9Rutsw69RBwk1agUCq4CX5yukdaswLNdJcZ7Vh5ouZTkPsG4T5fKGDi2zejQkyRTd2zej3xjX2ayojDCAr4X",
  "key30": "66cZnL5nAi7uYF798bGspcP25ZFZnvA5ZdF9xiZYj533jgzJpwwf9PFt5WbwNjHzQ9RA1y6eqFtgzQeQpN8hHrvF",
  "key31": "3vqEga8Kntcih1N2tjY9JxMqN7YBWYAWKQc5J1hTHQzZxaxRcCgVKLdMvK4wTcnLFiJPuBV52UcvZf4HKT2454Mo",
  "key32": "3P9jUK9HcvyPKAHeT9oojpdogkVxCgneC21Q13zFhYHNo9jkuryTXoHcSmHx1j3mH2qCiviDz8atSgMDTBzNZT6T"
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
