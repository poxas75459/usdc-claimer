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
    "5CN7NtRod3c9xq4sAfEgLfNMUXmc3cWezLUzhGeeyKEx1DPVpF2Lzca87eZ16AGPARW8ttFQg8pnxGGDei9Kf1ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPVZGtPmm1at7omisTBMErtrku9wGAD3FMCTgqpsSHkrLtenMp6892gi8TKkwSLVyZgVpXF6292Vk1FYbGP5fUC",
  "key1": "4Kwcypc1cuNp8uxxWHZZE4kQh8u53SD44bLJFxJnvmBD64pfJZx694yw9zkyF7YEhZ9CazV2Hm8qU73EdTAFb9Ne",
  "key2": "fEVdaJh3NxESCoAzsUWzziJ7bymnxvizjocWHV3vAY92ksMU3nXmCnMzhwGYFJkmQR9htuFvqqx589fARQHXN82",
  "key3": "jNsxChhVrn5mC4baKEAg4qDz8ZdDh9zDy6R2XWxZsPhAshf3MruiWGSvBxxMDKRyndNHGG8TJeVZimr2qVmXTXh",
  "key4": "58t8kNdtYz2MeiW82dZcWdSajCyBPqjTEiW3CNoai2EfrR6TSQ67Rndm4RGB6Dw6U9vjVGbA3MmbmKsnfVpfiV9k",
  "key5": "am4KLS5HbBbLJugin1SyZdpXX3xH3Mk65CGghBD2ycgPS5GvRksPfc1YPfeeJ3f7FEts2qZYTep3KNr2xQUdZUf",
  "key6": "5z459okvFycF9stjxZrYGmu56W9U7z7ork7o2FhsVgkoBSnKPefwMx7bFfrmYo8q4ubNe5HYJyeCKQQRYAaqagJt",
  "key7": "4Xq475kGNUzJ5iKQ82RykYgdh4UZEzgxVCLK6SzqfXowASd9Heg96BTDcxS8vxpNEkvkRs2sxCgPFg3R6LKLJSJt",
  "key8": "o2V4te7YGqa5JnetYVFztcpandV57gopuz5Uqjpx73cWvg7UpZEuKKf3hrbnACRbLbwyHsvUy4uXbCut4UrGmWQ",
  "key9": "3UfhLjcXM3dFQUyx7MX42DEpoSrpNH5yBjmtoBbyDZo5PvwVLuWJpqMbHKBENKTbdRAiPn7cpWkT9wsfVYxSBNr3",
  "key10": "2gPANY27xMsejow16QaXococ4VKGBT8NFZ1nWXL14z3k5WmpdkvvG8XgzSKVP8PRqnuWEcCFqd9TQsDagpFMZX8t",
  "key11": "283yUnsfqR6342eE55CP6MwpcH5gqQ1vzLLuqPx9PtpUa7sZPoYnoeYtZrSfyniLjydtuijkje9gFAgh5xa9yBdF",
  "key12": "3f9PjP2RUKuEZ9MGXMUf5Ad4vhitg8EHuzJ2c1Lb1khqEwJhQEVSU78itCVbervd4L1W46knaZfWtXBQ4t6jxXey",
  "key13": "3bdomxFpxH5ZVwc2Q7Czh2f2kR8kkGeCpZmYJbT3zq4AaSj3RSwLm7oTZrcXTTFPgR7D2uxtrNpf7gLXLyGWyX3e",
  "key14": "5H45bysdXQRKKhaTkmTwy142yYZQpL5wCeVEhGk4Hgk8pADyavUQFfCYeibVHBbM3GtLQm7pJuAfxBofCExsygNS",
  "key15": "2KGKz1tC5GfDxsQz4mPUpNCebRNb7iwTzECeEWsyWJGohaqV1gQx7TwQCYd4CDLNXQQNhDzGreQc51vjMQUPzcPa",
  "key16": "26iWtYDQu8PVpmDSrBsnuky1GJGgP3FoN2R3BrtFPCjhzgmxEA2K7PXtyiDZowz6ujUe1CyzamVpeyQLdtYU4Rg1",
  "key17": "CscdopJjGBN1LhkuFRDNymwc48bJvUniBM1EpYJAVtZvSFQULJjwPWqG8hVEEqiR924acHyRk54vwr7WXpGE28P",
  "key18": "2qHyj1Bh5aM6rkRcXSQUKBn5PF6kGiuffrckczNqb3uiyRZF1vaycCjVAXPSbAstHhY7q726fpoyHjnyyiaKm26g",
  "key19": "34aZHS3qHFa2Fd8CAi4To62WAuytjzcRdmsNmWvKxkHyiddwrvKHELNAwLZzsnjRFjwMboCrFGdzKWDKL9esP2VC",
  "key20": "5RVG7nqWSQnTWsPZugMNAREeFPPKeLPjKPbPdaEpDzw3xL7RYcRnygJwpCeF6JdZrEaqrnx4iSKPZz1om47RyUmM",
  "key21": "38KF1sq28q7wQbwnF5TWZZTN7oiSTicGJFqBkHAUvk724m97B3x3vP4Ldc6iDYGeChX61rKS7ZDmUpsP1TJ8ye79",
  "key22": "B9hBfsmBAZ2akaxYBY4UKscMMbtC84ewSaBoFpNrk4KWagvmm6gXra6nUVeixi6QwksErpEkTfVM2TACaLrTpRu",
  "key23": "2a3KCorm2MkgnLCA12JGzxnddKwKneuV3MihFvaoXMC8wxT8W7C4UoREkAUdZpVAfReq2mKCGNgRFUFFn7jDTT86",
  "key24": "4qeDtzkYMWkGXjHwUCaBRtSrpnF9eWwQ6Q6deqr8f2uRQgHLBfzzagF2H1mKeR5SYzBd8YtFyqpQfKUbz7favuWY",
  "key25": "2Z5rMZxo31sdKxvgcRE5VyqLNkt2f9Zc6xY6bpBYs71UZxenFZUnoaNwb4g5ef5r77HzCJ2CTBc82SjxRyM452Pu",
  "key26": "2UoamcDX4RKbUwAtiXzVr1qYcT5qnnuQ49gidG9jYLr4oY2jBNhEqYWWix4TbLsuGbVkYtXeUBXZE9pDVJ242H8v",
  "key27": "4ibWsry2Ni4Z397whM3uhqsurtrk7gSbmxeLKLiboLDkWsdRQXYp8afCkGHvuL5UMABJaGw2TZaLWhRdmqmRvR16",
  "key28": "5P47Fa6kKTib7MEdcYm8r7opzq3uC1z66a12sxGJwDmzLgcE9CBvRswJqekWv5jv4cyVk3EsAUGZk8uRVoyKhUdA",
  "key29": "3TeyPkmKxbQcxrGVy2S1SphHAwc2HiP1xUJNsU7xF2o3iWGaf5e7XbSuuuviVQtyTWBxc7AVeBzVVgGjHsFv8H6Y",
  "key30": "5SnKJ3VUioPiL4NY6UUPoa3xvJCT15dHRvSKe4j9KcKzzKQprKjkqP5fQf5gBuvJzYgwjEYfGiED4wkychGGAsSV",
  "key31": "2pw9DXYTuZLC4BrhPHBKkY3Avt6js25ugPFEt99ccae9WcgR4owJTdfg4mSKkUtoBNPx2fUiZxKBKjJoySEB44sA",
  "key32": "2MKKKLZxvJ6cpBnvzMpwiDBn2qXaLSTWxxfzHSrvhQoK7xBKL8BeLJAPLBXGe51rMTSVCEoSd8RrVnR622aKW5Uq",
  "key33": "4Xu7it9RFJHPEr72SaUWwgHUj4fUgvJ2XgrZAGSSPnff5J1E58rUnyMHyLguMZo13NxcLMz4JQmYvhZxmQtvh26q",
  "key34": "5EvF6QocnfTDRL1aWDJJJg3hw8NKSNNKDSpje8EqwYw722TNodNFDhTJR1v54z8iT5cTpwp6wPJ8n6EzbQ5gUj63"
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
