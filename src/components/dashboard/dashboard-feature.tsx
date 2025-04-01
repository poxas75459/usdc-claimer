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
    "3N3vEyLgN8nVuRaf9hewkumLwJqRM3JdTFBumTDRBBnTBGxCFvYKBZG2DPasxtu77ZuqwTaGfGv7GQp2t7nYSVu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x9Jiwqc6MEYjVCpQgtTVYYWuLRkLtJYU62tVM76MTEbGsumedeX6D44SmdnXZe9n5HHZvspvXrtyTJhv6EzUMB6",
  "key1": "3S5DtU3hxoKJsfVtpnABKQPWQxao7MLrC6FNwQHLVVRFvo4iqdyR8UtqotDxBpQnMdERD5q6tzcn9sPXw7MZL5KX",
  "key2": "3FSEPbhrEtGAeq3vTLxz7wpeQMagP5SQuNQyAkhZjJgv4GJQ6V24w39cKnkH5QnuKsm1dDLnLwnMJXHM6ASFLZVS",
  "key3": "3awz6kFLEpSauKd4RDcochZnE6LodbhMuXfRQnQE5mraitPiHtiGJGEsPJFuk1SQsfav6KsYXLgqXMbZgRkocMfi",
  "key4": "2FtAVMqS8Ky8bnsK3SZbTC33GZRVctiWfMorRThrPZ3YJkXnRFHuJeyEs2WmUggR5frxQVmnuCZozFMNrDVA8Jky",
  "key5": "394ef7RgCdeJ3JS4JEXzgEZoAcD3QNGQAP8PvKNzTUfRSTyzKsVJKkGwXFG1qxuYkJ7927SaNMH4MXu5UbkEpy19",
  "key6": "dwau3bqS36dkaZeHSngcQGqf3SK5Q6tVnZPcZGQV56xTdod19JYnqkLaWTRFkoDZCAmXT8ExBR8kMGUQtPSVhrr",
  "key7": "5UCbyANeUqU6p64JuwwEgXLtAn2Zq7zYJF6xNfR2Rh3nUhxqGA82Kto3YcmxiYnvAwqMVp334vwY2jcA52az9vJv",
  "key8": "2P9cfMYTdbQhYtw7oHRKbQUYt4HXw2m7hacPJTRvttVTcy9x7tKn4Q6bs6RzYvEqxSxTgYobyToCXeMjRMM6ZRtq",
  "key9": "553VJZy7ukQVbuHb1vr3A3NFczsmoqWfRFePsFi3Xt2VjamuEeZk1xDrruybBPPn7EDGK3ozVMG9SJp9VwDL7nfW",
  "key10": "283UzWjYYtucbNwW56ktCUgB3BmLWnQiyqgCFqZPWuMKcMPRPBis39v5aJvmRjkvzCoemi6V3DMd3eJKXGwPzbB5",
  "key11": "4kJenXqJhN68Zbj1yFQ2e1vCwzvbLv2Zu9w2cT5Dqn2i86sJ9fEV8XevJaZ6EoMH2vMGijJ4ak1oBRebkhcPA867",
  "key12": "2Qthq1tB7jsLxBM9aMW5qYa8xWiHUa2YT3tGLxMyUCuLR7FWA6vGyteBR2YNuEKv2jE882uobqwBFDghwCBA95wu",
  "key13": "5t7kxomUyAwfn1TaFtBYMoEejPDGjey1UQv1ZFGtMNUmwKtEUEWTpGFCB1Lo22xwBgB2zAG1qUCH8ywckoMPG6HF",
  "key14": "3TDBUPBwr4bFuZRhY5bB5uMraV8x7pFZe4HsfwgPYvxAULAbzLAwCoUbmvUkjYRVcUuCgPnQzjipHDVriaccZSSR",
  "key15": "3swTsjuJ3MY2CpEsACRn32fd83DdCYFRPppkSx4s4qLBp5PwdxQpwaFxbyFUZMJDHLLczE95rYXjNahjF2gNN3nt",
  "key16": "2kbb3VbxbsbE9iCqRenTDMJ1eukRtusraWGg7vY89B8wNiQx1txJDzznw29rGKBgj2tKV8HRcFrWYBy4ETRWLnkb",
  "key17": "2BzB5Y6cm7uhfQTDrBQmbGf5mPmqvBW7eht1C8fQGgPbJb7CnCafH2gEkCdWZCKztM36NKmTA8dfZu6tczu6AhJ1",
  "key18": "5orVEfGNepsCTps6Karn6ZNayti6QcFFLcX5DqdVGV4dYaSAuqMdq3Z67BioCVqsSCyAzcNYS9yZgQ3sDgZxzw2B",
  "key19": "2wfM8YtJWKvQdJG3ocR6s5QdPGiuBHfCbEhgDCY5ksL8T7r5C9kyf48QjMhgNa1oZvNuNXSUF1AXHeTV4nt57bk8",
  "key20": "tnu2wy2eRr67WhTpY7zWH3wFpzv94BRMD3XkjpkUax9rK48KGYs8qTPwAvHj5rZLPjBx4ARDUnTuUpw8oNThAvv",
  "key21": "tqWhiCKcQo3dvZqAnjzqQUFFcSK2zPZi47VPmYKWS5tRxUo1Hdp4YwbG1eJ5HocuECZExuEMKEPiSwSz158XEUk",
  "key22": "ZhyHs7sou29Pf6VnS5w1Niwp9moyq4tXCosUyyzppjdVPm247sm2HxFkAh6MestTs7ERiUiBrgEKRgXBFKJQDcM",
  "key23": "4CeTNRiZioVgjVQcYwniqLwYmWoZYBYfoQ8Wp1VCcpnEQCeksPzQWL2xFptNgERJQcXC7XLn6iFVJFpM1DTFhewt",
  "key24": "66pHrobiHsoFkVZphZpXe3NZ42MzrRtb1pQCAdg8B3bVkovqEhT99Poqusft3Kj3iaStG6qpG96W6349pM4LNmZT",
  "key25": "NcAG76hpiX4nBxyfEZg6zQ8LJ5dbDHRtVg5GiFubnFPs1jTw8hWFxitmXfA9NZd5FqKUPKcDkSPfzbK8UZseA8V",
  "key26": "4P1BRB8yZJY8ybTH7disYPVqxYGp2thYDvqnGQbSyu69ZjkeoHUbs5hDj5R8FrGQcnemzt1gF3dr9coQm3MKMcfQ",
  "key27": "aKoWoGsnsYVVwwXu1KJiuT6kC49PopAWuwqA2qkL79s9xh8vdGs6eQm99gEmfUmUMvxHctfnZvWqvTtWANaHKZV",
  "key28": "fWcRULexLMd2sRsjiVbSFFqVFtLbvJ2zFtt63BkD6bCfdVo7ZD9ESVP7dVBv8vrietzFCv3TB29kQN9vsESSgXL",
  "key29": "29gEmw3JC4N2H6HcDhqZS6CgoBV1gJo5idWrHKCftsVwcoCGRdGTxZMhT2Dyt1EFthistrYFKdpyNKGV3KcRfmKo",
  "key30": "FjVHs68Xf5sBWQRpsX3vwFA3T5tS8bqW4c2GtxAW8gNd2dswZcJ6jykRY5j6hrun8nxYQGxwSgZ3Bg58MJHrPVZ",
  "key31": "4TBsjnpreZ1W2CzYJTBPkCubgnB55ao8wWE1WbsUSYddYr9KLdKFngHz6QiobxBVYqBDgqUyrLU98JVeXQNLbKFd",
  "key32": "2LUnMPJ5k99NLdCgdDHLBawFZCSiEYgsm8CqzaCqgxK1Kcz5LzVeCDQ6TKD9KtmwTWuhmTBGe1N4SvaXLCKT3owc",
  "key33": "32jDQehzemSC4r2hnTMG8H7r7D3UvXz8bCEXRah9cvB9jDv52iZcZFBPf7hpvXFbRc1V76dZLgMoSjVc3MvEAUY6",
  "key34": "2bCLKD25wuqzRCTQAN2h8kkmgTkQtBNyHGm2FF9J7m9AMoGqGZq42Vup7sSteSkWJHYKYN4tNQ3byVxThyEfEXVc",
  "key35": "Ypxq8y1n3gccaNeBYfMnRcsBP3hdiSwjvtgAWPTxY6zTpS2jxdHreYtwsZKLWrQz17rVBk5qrWBYvY4HgDrUzgW"
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
