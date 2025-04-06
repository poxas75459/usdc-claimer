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
    "2WemHmsTcTwWurcvFE1z8zSQQwDze4P9wwVzFuV4SKfo1LESAZ9fLeGGKETamJpvdkVQYmjMTGDc4vVEzZXK3X9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrGnYuj1pb85ijB3HNxppJM95SANVZTNx6LaYuSxoTt1eZo7MVtvHQZAfZT9HPCYouwRC3qcwggxjjZPyzVH4JZ",
  "key1": "65UZk73w2Ve3HGHuy66z2Xbhec1KFP7nznf1FrKsKuTZtznifPbDq2dpufN2KQdt2sRDVcCEyc3A7CXM2dWnHNGE",
  "key2": "4UTvYmDSGSnxrtJVXBSBPrQeQPaJNHTX2LNaQ63efiGkaFbLATHUHbdPcQ8et2owVRuHiotdAhnsSEErGhjDhh51",
  "key3": "2nuAU2goVru1UQ3w48qffUhEkdT1RgfqX2NGuWjvJwkb2XwLHc8Sf21kPgE8UJqqkAt8Epg4HLvVYNdn5EJpb7AD",
  "key4": "4dx7sSTsdexvT1pwCM3aR8mSxcsiCEV1jzcKc29yk4YsqbDZGr9F4GiH37qunqba3hPesm8SoJo7NXQtKP4g1X1P",
  "key5": "WnGtowWjoxAzacGdzK6GTF86snBvvenCZKvCXe4ycZA9o8RDumqUV74qPtr9YaLQyMsrH2YmCfeyDy1kf4hvyRH",
  "key6": "4s5ZarTJ6KnYMLFp6Bvm4MTwpYgy2qEZ1AyR9cpQjs5GifjhbXvmcW7149ChrmKtTT3HK4ehZKbgebAe1e5XW71G",
  "key7": "25TxLpMkgAyEP1H7u9cVgiNiJrQUNoRajPEu82fLFNFV3N5WfRXfoAPdeSxHpLEEd4tPQS9rVpdXN2oHLCG6qutu",
  "key8": "49oVE4n2Fchv1qUyk5DtNKQysjuRsG2kWDC11NMJ5mdz3MAsfgB5gpaJjzwvJ1gwYnn1iSJUDFqjcmHs2vxVufFt",
  "key9": "4eM5JQffW4PCjh4gcwZCKrFLse82US1ynepNhkFcDN6PGpFkGsGMqdvc9YChsPSueueQqr513hLs5SK5yiPjeQzV",
  "key10": "599HCpwBh8AV7gXWW6Lmzz4vfpLVZ6uv897XSMNESfjSwZxsUFuUrB8BkZe5cx9sGgSGdEa7jtGwJQpiUk3Ep2H7",
  "key11": "4spw3MXvXcvtwuFVLs4AWaf7B7fVHtd8WDBDj7AHQXjscqTgV114m5NvHped66WD1pJqk4WRuBsgpHqnKpWzzNaq",
  "key12": "o9Wv1RwWn2EGPaR7b7KMwwNdKuTMMygnk3CJK2jK3GoDhEWVJMzZZjXN7roErDL4hWcp4urQG5GdfBTCG7Nww4R",
  "key13": "4yhQtUzUHr2AbLp6SnSve8bHWyUHB94jL64LohD3qRJm4AFyj686qKhUpcuq61n2xRvsMYosLWof53B2try25dD1",
  "key14": "WLJdTbiadB4B2ECYoYF7U4NFaezmk88Jta8TUZ6LXtoSP7r1sP8pdA9TVzTECCeQZGtxME2fuvJJsgkBvCFiWUt",
  "key15": "5zwcXETa3xFUMq9UqpbYvPxkKkfJi8ss3mCQV5dYhPZobEUotZz4qxVyY1RYxsZ5zUazcVty5vev9x3fHAZD9yvt",
  "key16": "8XEc5wEXvWVDtd9kFzawGZrAEq8iEznExRSNQt5da44QLSKmuh3pAHwATfgYLB126mhZU7xP5rFaVG9PwJ4MRiK",
  "key17": "EDhxJzbpdHZSubWppsMjxHk6bohXY4uEx1PiK4NHXiffZeZ8jcEZcs8LMQdKKSnsGsxRXTqWQT5cJXAhpS4dNGM",
  "key18": "4xNiN8Shac95ipjJyYcuab31gPDkULpDPG21PACA1cQbAzfq1Egpp7P842GA7CXMNBJpP31PSsQ1t1oihDv8gpg2",
  "key19": "5qHLAxG33Fmyz4jQkJuqypSaemivoypm4315f5AhMD7BUrU55nFDthKMXmjhh4hafVsi6ZjLzQUPTGQwodCVFhpj",
  "key20": "4MTgn2mFDNA7MowBY6rsoGyKiFKsw38u7WR28BchY9eCFrrnmqWTX1MPXLZPSJPmBXUaYrPpi9dyt9zkPuRvCFrS",
  "key21": "4VNazRawzKNMNGaq7XpHP74VAkAoQgWHVofmwZMMKRzmEGRipCe7aBn1HAEu6mnzDzJdFLdBM7vatFDiQZSQxHKH",
  "key22": "1216PqkEQdQhHYVzr6WGx4A1Xqe5hd3pordfWLZNLhENvDLkiWa27eC9Ds4YfwbiuLUfdas1rsQC13oEhWP4YTnH",
  "key23": "3QY8AqH7Fm3zHYqKkikUuGQvs4XNTrgJjA4oQRL8zshAsTg4HceLqAf5GkcwdwNZheSVKyiZ3pZMoBjriRQDfTDD",
  "key24": "5fe4cQNzKxG7KEVzszerxZSjg2PFEYo8F7AATnnPyiCb9G7S3TBrdYg5ei8TZSUHpX5TynvAzZPRWvWzJ5tmw5Vu",
  "key25": "xNxo8zPNTAEb6op8jjfs1KkBK83MDFd9rGGdrvaZAW8MnsQghN3UGuYPrpkM7BssuX2P6Z6xLzuypp5HstkB7ho"
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
