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
    "5v2mkdRiwo1eRGb52t8KEcVcMokbUBLBzXvDE1Hdyuu3CVrPMyts9DMMKjpZpmzTrndMVBxg67e3wtBo4LTrBwq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HThJ3LEqQZjmagmjtaTMaQrZpQHUoyo9sU83YSaSGyczjacyb5RrYXAkJuQxZ65gfY8SekPQNEmcNSFmGPDYzpE",
  "key1": "3WsKfWS9tBDsf4vvAp2cU9k1SmZbQ67RbCn5NC971g1XaCResXqtURMfi7qkp5EGuRD1KaoMqu2jg6tf8ge9rLAr",
  "key2": "5QopxJMz5kqqFx3R2QdDphtcTG7ogSjsC5tbs7zmaLvYBcvepSfWkenABJZ8fLjb5LpdyNQ71CXQwUr5xudHrpmV",
  "key3": "3z8mkgaaPiCmmFWwUAqg6MpKuniN8n2uPnHrtoM8TMNLThkn41WuWGFakmsuEE8rHZHau7daZPnX9pAikHja22uz",
  "key4": "37B3GfUChBKVakV8JvYYMw8kQSR5QKr161iMrg84WFwTy8xkbCXMVHSFpwrtctmWJqVpQg6BiG1DVjAipNWCuYHp",
  "key5": "u3YP9k7k86Lv6KvBuHSpcCCSXSW3EtdBjhN8wLvYDj8HkmBPfw5uyMQajFDeCpkHRN7niWgUkymnagccQiPVmXN",
  "key6": "QHwP1vJmzmaMbAkhVa3sqVD6AoZai8obCCCqeMb48uK51ycCcd1g5D6b1yPDi2pXWRDYfErUhLRHqtNUi2ennBm",
  "key7": "2zSZPLM9awAmhiMLft8c7S6oyP99qEF4ctVEfJCXZ84Zvs84HxKYC4ufFSuGiPwMwe5cSSTxzz65iq5hk5xLaXGT",
  "key8": "qAbKzLasVALghWEorgzaaERdjtXJ4EgQKnGbusvGgiNFZMiw5ACmj3TrDQeh4xdxMwqB8TUnRoEtH9JE3ZLUNzk",
  "key9": "5Fz3juAwVQtuQjnP8jWohzz8td7mxB4ypMY6uZDcDM6U3sE33mi8WydjwK3ZMF83VbzxTsosL5hEbmGrnvryrD68",
  "key10": "2o9GvqXjdb2CXba7L6AGyDCvxQGh8pQkEyEBxpzkQ5ajoXh3yNxEEpheYtFzU6M4tag2YCw65Xx7s1ATf7eZAT6N",
  "key11": "dSXrowDpohtV7Deo1fockp5DQQsx15e3fLdoUks7bgz1eXRJbTu4W9m8cx813LR8Q69KaQj6k8WtP9mcEENERRz",
  "key12": "3Vm3k3UvdyQ3E1vBXdpZ6BNPzbZL4LeQjruL2z5NXTKrFsQF45qPYYBJr6erSCh7fJP9uZiuieMfXpGR7rENjRSM",
  "key13": "3a2aKWeBdpuatgnWF66ZaJNmkGbCjFRyc9yCwHiBGAKuw1cgGTWsfVg5iX6CRKumNXzVTRpF4vYhJkchhbw4LyX2",
  "key14": "5Ebw3EsHfERnnqPX6U9RDE4AS4kbiSDJE8GaP9zH2g2uJ7JYYwgMejbzEn61WzaGp6NqJ1kTByMgZd77puvMwb5E",
  "key15": "5h9AcrGyW7PknVzxrt4jSrodwo2SUdKTBXDD4VaCAjf9amLZz5ELnpVTb8SC2FhLXJ4vzTk8NNDsbHmvP65qcmB9",
  "key16": "E4bD1ZvSp4Jy6Pxr8zmJoU31N2JZemAXC8DL1dj82sGP5eo92SKA36CpRsry8B79QcdsCD6dRTQhnifhMio3Tas",
  "key17": "4sXG3BVpAbeUhVswvqLfkdvZCokg1fyALEUCkfyp1sK6e5f5kD99LWvYamr9ffVddHvwHioQBshvWVY8qZVf7bew",
  "key18": "3FjKZc4TCZ2s2Cwtf9NSHWyz9fz1hG1CdvREe51RhnR53ymEtvUkyYAK5unsfZitXNj9T6oGUvPZyJ9gmMQJxFJA",
  "key19": "czyLNVUGDBjH4GgqKS7ykjTbcYHH96qbvwvm2bTJdo9bwPPWvrkvdfgvLb3NFm1MdRsLN616g8Uxsw5VMbx3D49",
  "key20": "2ZcUsvuHhrSNyWWFdkVbBoenbuYrje85AKDr6Ck6Ekcs47aMjmaWQhpCJrJCsUHLErrZhaeRJhLd8VzYc3DAWjvp",
  "key21": "3GYRTUgjWBZKnyZ8uDk24HKYnDVae2cC3FcCE9u7FgAjKPsazQoc3YzXSb4uPhm2gA4cuP8Q8Z3mkzteGppBiTvR",
  "key22": "5BhPfTouoC76krDiJin125qDFwLPQ8tasoPNZhqbN356NAAQk8Mvxobeo8vF4hrAtvf6RjbeFuYSkDyscws7etwK",
  "key23": "53HSZJewQVLeF99x1NYBmn9UDeqiqFDEBGztmSYZcwjPtZxBwSYVYXzERgxKDagodZjGJquZqcBz3o5DfRq7YtEQ",
  "key24": "3NCDpQh8y2x66tFj8FWTQ3dCTfHprWNWvJCiYsU2dWeE7PMtwnWwgdPjmi92Vk4bv2SqRg29TdXnyYChGH89KrU4",
  "key25": "5miBrncUtyCLa4B5GKEqadz2nD85AQQDMey4UoFixWFEcT36fUkgKW3GhjoPTdDu7yXCCAUqW24Suje2prnyEEui",
  "key26": "NWConY9njRKJoJCSzm7YXwp5qEzDiwjqsXos252DnmHEZwEPFrL3gYnpj6UCVb6dLjrRDqgVFGB1EJ9K3uFiB1g",
  "key27": "28VNtHAhWk2Wojd97M9N8DNCX2Fe83tB4dDBEPCk44PvpqU1Jg1Qz1pP19iYfMAfKgKCAiqEFUrBfiwT4K1gAdJr",
  "key28": "3GUh5e4CpppGXjLnYqBLyrXQM4WGwKv7RSyYHGfY3TtaGuMn87pmBHJu7QExHH3vzHGCxXmNgbLe8be2VjcVSBU",
  "key29": "4DJuSMjHaJqR2rCFzc5qjiRc7uJywcxdZMKYNFDAAXxHnMRQbBFHH3ZoL7PjTUP3dn5Tq1ZUPjnY928NCwB9L6tY",
  "key30": "2uXHTh3UkMYtZaZ8LWMH5HixUepPomrQ5wMyEVN4tYpRGFGA4aYeRs75RNs6F2vAVTteeiUPDMQDFcFcWwP4kNCN",
  "key31": "2UpG8suipDWC6r6dexb2oUzZkHdw9ZY4kn7gz9BrdiKUsd83CLpEMDZvakiNCHuii81Lorn75oBQ1A3c7ZVCBTjf",
  "key32": "2PaeGze38Wj5dVtNVy97Z9P9R6KfzstpAiW94ywqGfxGf4xcFsTeupjbGyoChUMEotqthC3kjidQqsWokwCiXWjF",
  "key33": "2Tb8ZmxgTtzjPGH35wCyzRvDWR9xEXuP7KZMkAs5CP2dxLbaFXeg6cQGUTvatYkNMVU67cMAfngaT5mDxzTgQ1KR",
  "key34": "7fTE5dWEdxZwMtzAq1jrCc5K4d7K2GNwGGdX2LCPSuxfUKgZcuRGyoeka2FtHZQ4PUALFZ9c34YzXDbmjakZTMM",
  "key35": "2DibjJbdE9e2BTQ7xZg8XFHiTHTAUAQSDeHCRodB5AhgcVQ7q4wEQSBKmXrarUTWW6KNDBZJRfuxcGpDADTwniyD",
  "key36": "4xaJUT9NchHo4fPNXmgjEEG8z2doF6AVXcRQmP62PLbnmtqFW6nEw3t31icvP1fnexNusopesqLpBNXvci4pbM7p",
  "key37": "37WYq9D7pZczLnH6UZ6AT5naqQR9vXUWZrpWzgaXcPMtPiwMPi1qb7NZrTvdvCbWVbRK7EUnoLXm32ZkWT5kRdyN"
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
