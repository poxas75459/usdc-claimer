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
    "3m3hX9irX7uaieu1F1ksv7A3u6yrzFkFzuPqX48wDXrCy1iqU2EDw5KZytEh63aKZ7ixrwdLiqKHVwCwF1nZRj1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hG7CVRVxaeM78WpgrhpHHpYJxMgjUQHRqVvPJUGhC6soA4Co2zoGeuTQYEc269pMcujKdv6iPbn4y4hPpDCKEbe",
  "key1": "FyXqRFG39S7vxcKabVbKiGYzUfJLK4CBCbTbtWGUWpSaCV68gAtp5PD4zv5xNijQ2hEot3dfxBo4BBuCPyv3CzK",
  "key2": "4KoFKY89h74qGNanJWwikedHzZQSxSH2z1psCwHyQs86nvGF2fd3mTDcSzTYXrvXnGhvxibuyAJsL8kspmSq72ma",
  "key3": "yyhLQnpshF95RTyaMbof1K9XaFhxwvBr66EFXeEVPwbesiw56NtmwVbv2kxya4MDh7VysTWywzdDMCRAtaUsXTS",
  "key4": "9GCahkMdH52baGt8nKBVh47C5hWeynSH8aacfAs7CeSxeiLGbvvJ3rfC92k4uFSqVMtitfrQR8EFAj9Hk8EAR4P",
  "key5": "4gtBd5HdHWirjLa6YZ34ewygRp8mqznWzmqBubbWfykdaTaWiaoXLHRQWtLFMpmVWrSdogvG7JTQ7GZyDTYzTLJi",
  "key6": "4QGfLkWAAym5MCjE48yzcLnga9EYCbDwK8gBeNPCJn2zQtKvU8yTmE4AUwtRNJE23AYCbiXqM6N2J66Xwz5zZkKE",
  "key7": "4FgGAebwG6qVh8yyVopeNasVZ8Gk8Mka229z7uSSdwU4mXv4NQZsh3aE8ATXae9KLGE5tFdXHWrDw3KgDsd2VsG3",
  "key8": "2dK36c3NC2a1bkQrQXFfuLVHGe1PPk2YSA1pWi5hNeakXgaNgjpvQfNR612duh67bZ7GTXxN2A3mzJ9edWkUEx7z",
  "key9": "2re73fSLwhm9VAa9ZDGD7yDtn47bAoSsdNTRH3jEse5SZeQivXcFjPeWecbUoEGMYVduRf2tdvynapyRfA76oqff",
  "key10": "53o6q8toFQyRwNgxnQGBT2XzDpbtab7Ufp9rdvReAAvxBLEeAW5TR3oqS9g33kQs2fVpNLRWtwrCEADnNZYg7B1s",
  "key11": "3ps4KFVK4vMQdTK93Q5yf6Wekk2qetryKLd2YHRq3EwFqdiDCvzGCqvKY1ED9LQrgnyaYBcEronLgLZecjmz74Ha",
  "key12": "38JSkjX2m9yD7ZfutKd6TufNMhFuGjwRc3xkG6wtwXw4btVjGcPd7iGVuDDDW3CmJdmnXaRx4teHzyBZXST8QDPx",
  "key13": "4DxwvrRtKAqzWYfHM1N39C6jm7uVVo3ET1pAe1xBmT8QG4pzaKbi5R3nLJSsJKHgdoJzuGKZ3iZWnxMA1iKU94eM",
  "key14": "38qDGrMHujfywNFQHzeoGxdwZUXygRBLVqfKtU6gQmFPWksTn8k334jeFJt9gJzZ3KfvfdAwaJPM8CSxULZ4ZvUB",
  "key15": "FoaheNGqjpDxYaK92zeooGzL299ZcqYwanJKwWScS5qnMPfpfhDHn2i9mjq5Qad6HxYLk2iQ4web2DTgZieM4Ud",
  "key16": "4Pykn7SDsqDciu6h4CgRTn2LeHAyJ78hPGQgBSnMXsQrPgoZaS2HFF94P883c5qML6k16BiVPpratWqoWpNn7A2B",
  "key17": "ZbRmfKMgF47bhEgbehrNBtKb3KAG1a2WeBVCcPW4gjAaz9EnAq9N9Afi9XeoGMV5NCBMZpj2AVT1wum6xC94D9r",
  "key18": "4mJ5MWQ2svELFkJCrBvYFRirS4qvjScVSaaXg3RG5RwkJuaEcxaM3Kb8YKprS2QRDXhJpHSSi3nAXV8Gi6Ne4XqU",
  "key19": "651nV2LeGXXvKcbDPzw3nT4YjqyhYtYwsCH79Vq2CvyYkjcHJj3zjgatZ5ZYpgQsrothrsq3z9qNzVCDcceoS2tn",
  "key20": "rB9rk8vb7rB7QcboHgU8jUgEHgDri63bX3mVahbEHv9dKTNueNU6AHCd6swwbZSiTw2bYYBTdT57i2NiCVd1X1C",
  "key21": "5u9aJdGBC67NzeWPhyQucyaiGybB3ZjfGfhcXa9jHbHPNBAuvBBZU3voA7uoNNyCQZobf3NVjJZeULJoKTp5BtKf",
  "key22": "4ikUuMEXRyQc98PkNYnPzwng2JmVcq1gzSiKqGKeXrFRsfNC3Gm14RGimq1nCKjws88uNEP3CmhqECFsRadJCw4N",
  "key23": "38XUZnpGiwQjnAbme3YTXw5BjDjg219XjLCNcEPv1tr7a7cdFFUYLJ4d6NhB9U33CETt3cpM942iJmSipWUuQdjs",
  "key24": "2P4q1tXG9NTVCqWF64AeaNZiyBHUH1ccjJTN2eZxQGEHh92Xn6PKQhBUA1J7HmPYHG8BeKa4QmZ6g4SL9ibB63e",
  "key25": "47H4MXGXEUUCyXA6mm2AyoZtYV2UrQ8QRUnvzSugXQXaWaJVYSbigb2ZrqW2HbZ3KKr1UEhGFzfKpAoBmoXHamvo",
  "key26": "3edYHxJjHyBAJkipWSGuEzncYDQtWeS9RuYowmfXMZucManSJPsC5PE7pcVJnem3o1hbqNPsVrYggpRD4yd1UQJ4",
  "key27": "3nbAV9zaPtJLwst3852FqVVZAeSAZkrbJjdoEz9A4g42bQ1U9ZwmHNS57FU9U3nUzrxMu5reuCWjFtu3C7JU937N",
  "key28": "4xFJWvLKEjaHE4jgZYjPZj5GA2PxoL8cTqQTeUEtNxeeUfGL1C98bc1fPnd8eSurMWJW5AnbXCibo6GYXPvczaxm",
  "key29": "5CNqgePek7aNjaQLqDAos5c4PycuCQ19trqMepN7pkmAFLJNts6otbbQ5oqJJn5LiaBPXwhabBJEhehQx66thpwk",
  "key30": "649JwsbdjnPHVRM6jo8uKk8vJa4rvY6Y7Y4usmWrxosTXJbzy3iq8gvQ4SBkSjqaAmpv6admrgQE18Hip6cyi9NR",
  "key31": "5Nhw3BjJLTvxBR9h6KTD1Sv7eWmaMKhdwKZeFYPNvkGcqw1m1S58gRWHeMeM3HbdhDWZqpRE7FU1rJDpg5crkh3D",
  "key32": "5WmKdErwMhfS7mR2uFZVU56qe9JRQBfSVvBx9rphHWrJUgVJbL47xDieJML28maMvEo5nZD3v1opUs4CwKECFfkt",
  "key33": "3S686CKT77bAJcDpAbUJB1qfwNAT376Ne2MkBLZZM8Cmqp5uj324aUYVTBnmc5VmPAgGh8Ga42VsEeApUXpnvNhf",
  "key34": "3q86DPQKq1VAoc3YDS7iqKpk7LJrJQrBYHhvs9QBhSrApmebi3tVh9PMkX9TDxb6QaT3ehw26hATVM6df8Qfm2UT",
  "key35": "3YtsGo9ZEud6pdEeNiNcogn17GC8EL4wAuoD42F9mXMw8QiqdCKFzsDGdRLTpFMyhfNVKCVwSwJ4nKxM7jJWGHLg",
  "key36": "3MiWkb7ewDiK69z48CHjLngH2V3qXpmsxkTfTpn15WU1P6TM5U213sgaaBA4eruEHCCDop6J2TXd8DJowvSVnUA1",
  "key37": "5kNccQyfgiyUKdWoxWAmoTR9qrupAfJ4RJTQWtm1iVsHnYyhbSTY6qYpMQjA2oW8JpN7nxmGiTw63AQcEQauyFXC",
  "key38": "38cvXXbTGDptpcd4BLnuyQKE5P2L1vE7H3byrGBnqWYJgym2Q3aHHFz1eBy6zsVHLrBgJL2DCuCV2cqCwPsQebnJ"
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
