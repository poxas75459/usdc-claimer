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
    "2nJhbXenfuJ6BAWGriC74irNe77FSMydDEAXnbsvJR4usAn6qWn5m7KVemZfMqiroQ8EzULuxLAEU6DJEdQX4gP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5nt4U51X17R1yyTHwuWZsDSuqhRCzzoc5zi14A5LNitt9KRCzHveaxySP4FT46TCyM4ckiSE1jSkb7JGPHvySD",
  "key1": "2cWA3WxaQ1drg99v4ZRoEztC7N3rsWW33Hnk6dKPaquqF6ZHsn9uUnecdd7wuUiv7S2dUZFutLpi8SUBcevnqHC5",
  "key2": "dEprf7aG4Qk5P3o2gwCJro2cPfhaH1pdkd3xtpdRW8ARFBbtUSddjkARpQehjb5Ps2AJ6odQgdV9E9X63mXMmtH",
  "key3": "5RxAHYwE7yUeSrjvYwaccEzBZCMEtLUPxwmcqGiPoWk26AvedQ6LjTueVV4ijxbF2RpgBPuTthCoWzpSKMPCPvuy",
  "key4": "4QEzVXw6vACFys61tut6SqSWJiCsCph1ivTuaVkYxZYLiTcP5qCCccEjKbZmW8WdcpuM6NHg2hKEaAp3g3kBRifN",
  "key5": "2sX53VguFo6UQyG31dKkZWDZffnvMfvzNshFZvjgC7GYtC1p5RFnF3GeHkSyML2DzS3sZ67fanEKDXRQgoMTFUne",
  "key6": "2wnEYXmznYggFTnavhtyds85JCd4hmQ2p7kT1FQLRnTf13ERQUxBJRc5Jdkr8ngvZeKEcMjHxMi8JQX9weoDYNJp",
  "key7": "4ABesmbg6x3ZMyQaMCXRrw98odVdTNAbfsH9ai7g3mTyHFrLePS3MzqEZFq9hFqxo2jkB31Go98j36tpCmmp31f5",
  "key8": "3xCkKYhcStuYm8HUQCDDRmFNNS6zvaRBaVH1vuQ4so5T3oPdvX3Ak8ZXZaYxXELiZB1LUgXnVLTHA9pp5rXs7yny",
  "key9": "37di2DUUsKbi175T9GknkzNRcibg1AyqWVE2X6YYrSAv8gf59ANYL36hJpMgeZ8GQnYaba2QVtcefSXdCcMoPaJH",
  "key10": "Gpd2PZk4VWvQW38yD3yo37Y3fz9K8xS2cUxMqgffLCsejUevrZcPA6Ng8ddsF4BzAfsaSjbheAmoTuVqgKZsQiN",
  "key11": "4QnkXS1M1kVNVXHkMNajv8Edymw8veiiR3Y7L9Go1MU928aXe43mv82ApbJsVdVQhHbQFbj6pNccDw1agHJntS9y",
  "key12": "5ptEmZT6TLtwPMVvbgcCS8veQHnkW8gRiFU97HYHWqHYYrZnMX3Q3NTpcwvUXAYqV5YwNjvWJ7LCRf43cXt1XhaP",
  "key13": "3szGVppm48fefZZnGzfGSLi4JpnTKZGRYjx1xmEr9VvxrmJ2ARrAW3n4e3ZitgwKXSmJGev7ByY9G173SBjz1R1b",
  "key14": "2GoaeFY1Ypm3AM3WA6CSMUdb3eBYXQ3GQzqNFP3EHTeBNjUUtfkz468HdgzVS31vbTpjWqX5BP5MzgtvgtRF2Nkd",
  "key15": "3HhiPWyUCnzab2tC6aNWvVupiymErAQsb6GUVJRAsqCAcFfsMgDEq4iUdQoqNXbFZrev6pQC8NzLMfrgpHDBTmK3",
  "key16": "3kmkMQKsrhSf9Fuy9fhdxhCV3p8VtT97KRfTYK8Bs7EtpQ25hTLBARWEMcsofWhMHAwcicPJocNBhiwetG5idd8o",
  "key17": "5p7yREMJqy8DaKHbS2AnhBg4TfDNfRfjKQc8Q24woBC5CbtUckdspNCt2jLjzSiXwDSyRKZTHweJ76dTUFiut1ug",
  "key18": "2mj6PrP7AXW625oqEx5UPaxfuDkzhpwLjUG15HcUqeVPpcRXfuEKsABZJcmMW8DiX7uauHK6u1PGuVyRFsjP53dQ",
  "key19": "ha7PYKhpMBtbB9wHKGVGsWQctjFM67uSwMEPBaVybhK3Ru85nPs7gwcqsZXjU9dABa61dQRhGxtH84tKfuG27KW",
  "key20": "2j67V48MEJ5KCcZoANQwarwByRAFcuhWhwCKjSGTJxcBoRvGJT92ZedG3UywshcjbhGgjnEYcyT3g9XwFvnvTLRh",
  "key21": "4QFb5o9x1M5mRmoqLD3gcB2aDVDsZyV19SMtFNH9wY1MQtPEZvp8YVpX1DeyPbc3y13ndzfB97PotUnw4htmkKqi",
  "key22": "3wGsdfL5bSVfNF1a6CZubUYY89AhFzvAQ3MmUv3wMaFspqQ3wisDtKRVDtqtz4gPB7iABV4zT9Ct5FNnb5DXjk1K",
  "key23": "2saWZEcENu3VhJaYPhtXXFZnmdyHBqU7r1dicXRnYmeDrpQGT2ZBZ2SsSKeGVQRL4pyXkg3WJ2t2SPn3BvinoX2X",
  "key24": "3xm8eSpQq6BjzUrQx5QYzgPEVBLAuKoMXp523WLU4HNk71UiiCN8KhETRGxNZqTwmfUBhnm9R8SRFSQtjxjp7wva",
  "key25": "36ZH6fY1BBn9J9VWwpKKN2MWnDtjscX6E4zheuvSqUowu75DKCisZ4AeFLgMWNnTNDjGzZVBDrQVg4ug3KyJofda",
  "key26": "dTStCUdVHnPZEmYrepjBmqe6FAknyzZmTiYR7pMan3dbcvTfxuCh38anBsXs1vnB8EJJwd8E3HP6hoBQb7TvhwM",
  "key27": "3eXaffHbXzrWaW7PhTWM4NiSeGUqpDNi67zQBspimdfmxkAqyGgcsjPM6B17znJ18RXi9oMSKocMJjv23VooPP4y",
  "key28": "2qZrM2B7xQUCLXUHkxCBqpVTdiHApQxDZFP67p7poTNAxZPC4HM1C8RirEFvn3vTfp4P2XaW9XyfQwPa4kVL8Li6",
  "key29": "29TkG8V5eJSoLwsqNepJ3MsSgkZC5fT8rjc4JRptGpHJVACiSHH6Eeq76NbMUhFRBs3UmgDAnozkyBCx8ABxWECK",
  "key30": "4KFuacL4SadLL613PWGYvvtN4giSu2QKLsg5kdzHEcR8iQHH3nWSDv9EUaR1yw7CSiJtwNyPfnp9pcLjkFLifaWU",
  "key31": "3GTrZh86LhCwU9CXxdqh5VX3AgzZAg8rEBUCbFy9hmgRR9NUn3mExNdTeYoZyrhFrMjn2C5pWdFy3o4Cx5SDK8v",
  "key32": "2Mdp5rGSMD7z1wotu3aqYFVdoYFd8jy7R6M39WSD57YkrGHdUd2qmj5URwkfYRWHf9bmNDbpEPRNrhdLE8DY2UXb",
  "key33": "3h4ijNvX5jzkTcojUX6j7mBnwnR9V2WPaTaXg7bR47KmhywMeFurJubjUKMc5XVRYARBenNStY1Ui5SwrRYK8vZ6",
  "key34": "5nWCkGPfjijRoKJw9ih1WEeXrU72mgA4wdgMBcGmySdXNYdHnpWjLfX1h1TXmYrsHvyUXbQVWjP9B832KDT1jvXB",
  "key35": "4N4S4NHRdFD13rHAhDM5J6Gq6JpKSWUKvoqUHktBURPichky3XwE7MKN5fF4no7DxJNej57HxD2JD572rVQ21Gr3",
  "key36": "39Lo4uLjkqmqkhAfxUdmFHnwvp6H5bV2BMywAJbUFFrzMrkL4knZA3wUbGPBsyyRw7TbQ1wQh8eSHsXikUNfN2dU",
  "key37": "eypsbvcQTCQ154y4jr5BkeGGJMcDLq5CywunFJBWBwjpm1WZfeyxPxzeEhHSYkhSyVnPLb1vM1V1neS3jf3EAzw",
  "key38": "22WTPCJSdHTVZBa4oMbQkL5zeph5xmPdaMdcjQnYtymKSjVJ3RyERPSny6U8nkPj4Vg2KBN5U2Pscu5pDtj1tjaC",
  "key39": "3ecq52tKsRzqXaZzg3NXkgixQYvD5uVe9Ae23YKP1MXvhdExfyZBTHC6uSUsodsNEyECwp6ryLp7C9FYpTkLoGSG",
  "key40": "kueknLKqm8CaWJBp7juHau5VGutEtpbN4p4gbS8iT1WWvN9VSeAnf5MHxBZmMSh9kjtAQwbFMmGNwKRmwsPSxZt",
  "key41": "EYmMnxrT3N3kxtXkLHB7WWJySt2Q3d996WCzL83BTqwXpvics6A6QbcaAw2A1yET8CaCA8RiYHjJkb9bvdUGuTV",
  "key42": "gPbvCH1RwakSimBpBSuFJ35m4pLbkV4QAVRw1Fc7uPNvCQ95nTd2y1JUNgjk6hV5VSAKHV941dMvyzVLwcHJtmz",
  "key43": "hBWEsR32ySh8bwwoWwgPfov6WJsLNUsphB6dve94t1E7CNUExFwKB7cyeGduAJ8RZVdgDnHEX7UazTbJrZ1QV1J",
  "key44": "38YkH4gySHCZbNK2WnYwgEQEjViRrUpbuGVxP3xwy27jKZVBWsxHq7mmHbrCR7SjWwUC6a311XHmpzTn5XWr3ZLH",
  "key45": "t4FDVaybrz9D8ew7D7E7su7jXRFiRxYdzb5sbv7uvAniNzny1LEVvW25MCECJZriBDWuFm4ms2JvP2FhhJXHNzL",
  "key46": "4JvGwK5K6JMzKUPYcxtBUdqTNJPwkt6nFGZFUWTSPGmhjZ317koFvQfupEQSD1RudgoE7KyYf72SSovbJmoYx4Jv",
  "key47": "27P5xRYa8k6Dwvr66JqjepMLt34opL3vM4w3Fmo4KahgamTLndax9hSw3WKokhGR4bt3ZFyYCyey5umHH9jev2oL",
  "key48": "23e7kyjgGU1wXzEEMCb27BQfKUMH5cH3ehRymdkGwC3mWtSZDj3ddSdcdw8zH1JR39e9DjiRapjfdpd1it2KTod5",
  "key49": "66C6m2DwbQYYMWkkFv4ybyjF8gBWoU7rsMGn951q6yTe94QLooqxooaQmwReyk4zaCM6TEfXSjMyX7RACQKHioFN"
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
