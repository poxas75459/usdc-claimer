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
    "5cMVVub67nhq5RxhFm1M3nHPeA4Sbk1Yr2NJ7weMVgHjLFrwbhzsd2v246bCmatRqMTbT93NMyRH66fv3AaiPCVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jdwPcdB2cyea12xjnFe8XdSWGpcXDxfx8cSkQs7Vy2sXzaCfqLYR9jQtPqessNXssGcWrjcbfD9hLqcpG94T6o",
  "key1": "5rkh54szbinUzpcrmzAU2juQuCA3b73qxUDawBwACszHPpH1ZPoDtzVdNYaWbaRqMr7cXLsbUrLGbZEk6sKc2JEM",
  "key2": "pg9mGv9dW2VjLNtq5dVF7Lzs1jw8gVzPJSYgxuXwUysP1Q1hRm4TKBx4te5qzsP1CDhEcN9kjSrPF81GW9Jfs3i",
  "key3": "4jSX4TNHM9dxmVhHJCVALf1w8z55kkHRCXKSq6TmiXUb8kjV5XS1htBmx8EEbPjzDeCzprEqu8KLvxqYvAreMUUe",
  "key4": "3nq2YDyLwCJ7VJYCYSLoSicKyvAF7paat5PFyHzUWqzcW7h7ZTsMiEJA2nRX4UUnB4BpxtrQckbGC3dHFXrQHsBd",
  "key5": "4MKzmDuEvWzTyCrpPyGpe6JB9SVdZ4p9YY8YBnHaDXiET3mg8aUbunP2zxpt7cheahDH49mAwHjo2Rq9sPUznoRa",
  "key6": "2er52VGsgqp6wtGMpXMqSXTGNDFjEVNueMrx79RApbuKvUz4h7u3DJLCX2TT4RDakC6jqQ6Hzgb85xy9qYvxoc5J",
  "key7": "2gyCNRuQxuSFs1McFnapmvKeMUU9HHVwsCshsBV9BoBWQmZPDLUvHKzziNtg1BbxhQMdRTuysR3aDsdMKequpMXz",
  "key8": "3oppreCdYGqVr8fm2dbVieFrLLUQSHyDzTPvCMUrij5XMdgiz9vJLwr5vNJroyAGXf1iLCsCvEJvxZPUaQcfMdqk",
  "key9": "5GGK26Aq5hXoANhA5E4YHawrC1MjT1Q5hkAgJinYSjax3er7RUtAmGZXajkMrdRnhTq8teCBPwdtFjmaSq3ow1GE",
  "key10": "5BXg6B6ttnEXxpmTtr65w6b3NcH2h9Kk65tM2uuqXopTeigvTV51R1h4nf8dvaTrY3EZsXwauLqrMDUuNnFJegzL",
  "key11": "5tMY3AaXQ3UpdLhJMULihpLK15XkCcC9iSuwXzgGi1HftTj1jJUUqtdXDKhe4g4KbKuoymrM5cGweVJiSPaHHjJt",
  "key12": "2RJXUqq69BoWvgASBZj1CVHA57zN1TrCKbF6TyptZEZ2UpJ9AxY4DN1cRuwTnGkrch6DxUjuUjkPiF7HQd5kahRS",
  "key13": "3ytgEufFVRQs5U9ZaoYFqAUER4B8vo6y1KNbk4GsUZWnpDSxc6ayPH1GiRVPpFw8pAjbi1zER2raoNMzdtoDx8Vo",
  "key14": "3p9PxNqXLhNK1bmd8Ni1Xtw9oS5uaMrKu33kTp2spxZuJ6pjq8aVegRDRcpfFt9cts43bUvej8Dy8oqKah31oGny",
  "key15": "5KJpoR96mHixa647x9dTEP4rDyYvXRjtqSAvvgaLXo6xXe53sQzzTCNqLLiV8qv7iMPwyAtn3XzVYRZ3boQpw6VK",
  "key16": "4u4fc7Bce4zADi3HEN8ycQdQqeSL3Au9AchBwdaR33ZMSn743rNuR7VRTedhba9iuNF1p7kPGAA5ntZ3iD7XcURE",
  "key17": "4q44Y5xMak4qaydoiJvtuxUEkj3jkYh2NesDgofHqxbypyVUDSbZf8GPLkcsJoefhF4Pu1u3grjma1psJuSYiwJA",
  "key18": "3DyTQFqLkbcBckUKmqHyUg6arpz4skPf4uL6YW8s2rybmG56hpPtpusuw7i5QW2MP4twFVRnyWdAdDXtjMda2VpT",
  "key19": "64ZwbZkrEDu2MVfASYNndhcbRtJrucnGg9X1W6BbPyYh7zBAn1YCo5j8TkytcwcP8bk8Qf97YejJRYjuibtuPmzJ",
  "key20": "635q9xmHaT6JyFn1GEStzUCBfFFKeE5ZmgowGFVBo6MVsr3UPMYuDUKhBpBJupgCDNQYmEWM8kJKpn52JAZqmPH4",
  "key21": "2RqsjQPSRqQg2XjTrGtf1Dh9oaHYWTUwfuhLvsNJRUkBdpj3kdktSkvKjLgCEBsn2uXS8Ym3TWWAzfKmCsR2NpTt",
  "key22": "3XobU7wcmE92QXEWEPP5bGUdBD8ezBHc4zXNJhg7F7ZhudjiRVa1ZrzSxkeHd27wD23pFXdNDB1dreUrcdGYEtuD",
  "key23": "4rEfL4Cwo3FHpzCJLtjm2ztF7wkejtDYjsTwRGv3P6A11RopJ8EZ3T92TmGSHnaLFDksTCmZZa7FjgyiecCx8yFu",
  "key24": "2ANsRgSTREG5PVhYr42eLFqFKiLnYQKeVSCe4iKy6CH16TjbT5BNikAesa4ngGnKLDmZYV4vaD2G5UCsbG6VFnB2",
  "key25": "39nGHPBwTAe6nXaQy5QNHSF95zx9Pau84ZidXbeQ8czjuVbZYZ6uT8Z92hBhS3MmJU31ogNyVWdAXsXurdfVYapJ",
  "key26": "6MHDcC8uVYYkDUPEWVzn8ffQsqoMD2zuU5FwrQUEFUz7MuPSYCnkaf81HfsuAAAFXRnhptaeZQGBTNbmoboNzcu",
  "key27": "4TswjV8vDTPYALSiR21gxnhrFffaZvQUeHfFhMDRproMm9rEKnWi8DPfxNLkiTLbhUxF7LEemt7i6Kwkn1aetMVo",
  "key28": "2rPaHWSYRqZYu8oBBjzei3carGvZ6A6g6P5EPvTpzJyMoWjjT4c79HmLHUwjJgBM3oxB7GNM38Cak9VzEEMncwuB",
  "key29": "2k74sY1VqMkRvVu8CxZgmRabbLXwmVCVX2koLCnRc52KuD2iMPjG8a1VTcERCsYHRKGWKKwHQYTwkEosTc7pURic"
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
