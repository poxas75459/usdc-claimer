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
    "5vZVuWBLGPaZDHcEDMbkdLyyx66M5o8vsQeuYsZMcGhvN5cX18y3VZRHcE3vCKUXLpYPE4TsVJkNFi735qAQPx19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QpDevoabUqmYQQhreBstZTz31gMmQY5EzqGttMPGSHeL7vzAPtdD5BogPRw62KiARHBaSrXfsnaRiUx8S9a94pr",
  "key1": "r9DdRVhNn1KWkSQThjNpm6m37g8vYHq32d9PLBoBWsKSPmaVLhmhiSd1y83EEZLNsnRkF8KRRErroobMJLSQawX",
  "key2": "5xQG5F29W6wzpwg28pD94uUhDFvJ2apWXvj8NQRwiyxBUjHkDGptir24F8EgW7hPwrWWxYsaZvswDGhBHw7XcQpU",
  "key3": "4wBTMxZGiUq3hiUx6TnvLcq1Ry6qC5dym7pmQx8geM5wViXhNNXctiqQf2gg6ZWY3KW9C3seFSE9kxhdgTenFgRA",
  "key4": "2wfa2f4cSikMLC1eRCVCLfY2WumSj42s1UtfkpoSnf1HdXLvP8ZDvmvZSiUjibJ9AutBzRUG5GuKKoDehVBSiuVp",
  "key5": "3iEKqUB1vut9g88bqrH4B4gnoUgKFK3qoQZE2MqAUsCRd4MEZChxUubcSCpcKLBbxj6Si8t9MZ4M9NiA3h9MbmH",
  "key6": "2JK3UCDPtD7BnZVP5iLL6tQkiWb1WqF9e61upz54sH3z34Xw9qgGuXkddRUFV4utD57woqqWhsnZrPNkADaVjobx",
  "key7": "2xr1SZbcsTdB3c27Q7gj4ZfRfToA62wBWbnicvvxyu4ubXKitFuearK9bZQLQ5Dt2XsWeSTqXoPdtaq1qvt4LZ3M",
  "key8": "KZJcj1TosWAS26pAxSrxrZ8wgNHocqKRsk6axnhVgobjmHM7ewRNN2szZNaQM4gzqHAVZiugQWrEGj23Kzt7uj6",
  "key9": "rpJ7XLRUhRFMwRFsyskBVyygpBiE9EmEudg6iyvaesBdMb45RhPpkgmfChnAkmJszMpNeEATUnAnzt8jU67PDV3",
  "key10": "4aJccKWHExH1cp6NSS7snavJ4xRwhmugfB8Dbp7Kiq7jatrRyWStZ8YS8Ex3ngyckBBaPd5UnBjRgVpSPXNC9mau",
  "key11": "5nYkkcy5S87KV2EwXZ6KUMYu1caFWAc5nFPqFehpjvqEyp5RTS5PrqcfdW6wYDUCzVj3Bi99ozfGRftTuehfKZhm",
  "key12": "5S9vb6RDyscR3uWhBgB78iHMqMdjR7zsrwWSiKWJKk2EU95gMnmkMv6urFoSd3jWqubd8rS2XWJnfoFGSuATo4hw",
  "key13": "4L1mBBCqedp9oJXwGfBFrf4SS4K8wfYUbC3YRJqy2vhsCdxhc9XEHrYaq7XHegWeU9vnkvqGc2rbkMDsaFAtS2xr",
  "key14": "4uciAk71m1XytnCqwvGzAg83NTmMGge63PadxPr8jyzE4gmCDVFR9L3bX58B66L9HDkzJg4K14B4fPdt26DG93sY",
  "key15": "5y4jkAugPnkspaBjp2m3vcLTh1318j4Pr2hEHYvPXyF4XKUd8EYbxK2Ru5A9T1Pk6GsGsQHevTtvBnpiBvEEYQqY",
  "key16": "3k3buJEP6Vcgwc6amb8Wzg7RZ2U96vjb21bgG6nsxcDuvBJYw2vi4E6fDEqhrkFWMQQiyBVfRhg6H2X2Gh1wJEEW",
  "key17": "45g8YTB66UQaeLVM6EeZFDEEax94fo3piM9QPfsTVmSQx7Y5dNme2t8oAk87oWq6DHsGaAvJ5NSsCJ9i29UKJG4L",
  "key18": "3so1cupsgWUK1pps7hWxmVriYkyhTYvmEBbKnjyPHhQfvM1WkKZbLjo6HAwMa9qKWjfkPpBWFzSt3bWwBNvWpQ31",
  "key19": "5KC8yjq6yxm5nP7yFfaX8oWZD2xcrBqDjenGfPTD8J2cP6uoHaPANoZjvUdjiqGD7Qnvryin474ggN363BHaqH6J",
  "key20": "5E815PLmeiZ7VHBskFMvQRgdX5mHLuNoRfejs5gLQtb7Srm7DnSfN2ZPWgNWXA2Q6vfuSJx2tYnRVHVMEsCGSmue",
  "key21": "4BucdCaWreYrfHBysLTG5r4oDUkbZafFymgdjVCEMb8hyQbsVh6NsQMyemiW1G5J8ohWjDYnAnWJTHwGcjUyQHtm",
  "key22": "5FxDzVu8hjsXQAoqh8NmUuCWSCBU3QrVx1T5RmQEUPBmR1EzqqAXBasiy76eFuLq55QkmF2b9pMKLwQh6BbqchW3",
  "key23": "4VyN8Vdpawh1tR53KgTEaB3xtFejHWVc8UmeYjybjVMrBqRHbmpz6eTXPDySat98zbtx1843TYiY3sQKJ4Hec7ca",
  "key24": "4McXeNowRdZhafzz5QP3KWQqJtnAqM9dYFoWtbPvfagaVDkboM2Ngo5JVs8RyHLxW5HLQzwFvAZFigeZhDHMP6bX",
  "key25": "4qAp9Xcqjpm3ng2YxHPknZ7dFBf1anysnjebVGRt7kqpK6kAzt92onKG76kUh2WyQtV9wuUAc6o8pTco2ZiL5Cay",
  "key26": "4aoNGQ4jVtRUfrD9VWB8WtE8hrvdtBuSRhVJJcK4e9MxXJtoDLkhRYRbCsH8rrswVZhW8hgHjz6VzCGhStzq3gCX",
  "key27": "n3UAGEM36Vy94VpvPrgDXNFwt2KFJuMWGXPziF1PF7A7T2YPEfDoWPi4eFhxvxsPbS2XzvzA8GfxuWfNZHgyVLb",
  "key28": "3tFNmNBASRyeMPcsrBBqiP4kXgjwQLAomZ6bS6CWBHTAm47ppadomsEwTALPcW8zYXFEECUyvsJytUDW2EW8kCuV",
  "key29": "4fttUPM8b6JFoYBeeJKxKkkF4gtNDA8ZoaNbLzf6xmcEfm73pGuu65UEWbhtqw1MLd2DF16GgauFadZT7cw9kccN",
  "key30": "4u7hQVDCrgAUnXXV5B9NdjMUnAcLCYS6wibbQVfWsvUW42JV13Q1wLZpefERYfXijvj5mTtSVZDsLkMyXmuNyUqt",
  "key31": "2Q8FRSExuNh1JY23PExjAeh4p7Hn6adu28iEfpHyvdE6uFqYjKfULjghrQBVF9vwbVo482KFfUBuNDaTWW2Zzin9",
  "key32": "2qySxNfrbyuyBRqSpg3ZwcvdFTx5ZcDjnfAcYcEve4MMJyNZHZ25RqmbL8pQFhRLg1PFPhx27oyiR2GNTXnu7mwx",
  "key33": "3fpAnt2CwEc1BnhWQ7NBnNEEsH2pAywQ3EcJGUjfeTD5LvapUkUG53SmH2YqagNqjZzmj3SRvkFKybrYFRngRjPg",
  "key34": "dDBYz1j5zxNQrsUHgRv5SSX9MAofjPqJ1ML7ZpUnJCbwJMEMY2q4srQJxMZ5k8XgUtbA7p6bzMH4fEED5rNNc6J",
  "key35": "2Kdmt5zoFhXv3rPte9dMkD3yZ18VqkrxSuP7GGu3p6SQ66aaDb6nqn6uBfMTJfqDwtNAM75Lq3kDLSo23MFjsyzF",
  "key36": "Z1jzVh6gATEuto23rTTKKS75R6iYwKiUDhn968m1Yxo2pooRvWKmveiPjzwYvnhiFhgHMu6hRkWkWiTERRJow6L"
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
