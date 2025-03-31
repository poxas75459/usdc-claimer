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
    "CZphauC35Q4q7rAXcGA34zehLnDPsKvNnF8zW7kokmRLpZLuRkrbKkvs1TVcpK8xZoss77WyW8Tr9dZeQTgwaD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qPhVhKbV6RzxdCrCmWdeMQZYhJbSriGinifVhXUQtH45B5Smws7uZ8awhEbijeqJF7SHo7yFcWxz29QcFKmAYTF",
  "key1": "3Uy92PAYJhd4ihF68u3XkM9KJnfnyQBhUaqnjQ8asV7zqMNWGJaRQaRwwcQD3ZciFEfMxiDvWd2MTV5fVdcRtTYR",
  "key2": "2BaVN3ZEBZc48u56LVKzW8VWcN3w6A3RFgmxHshAFPyT25eEFDpQEjeQ6QUJcvBqFPKChPg279bkcttQgcALqbju",
  "key3": "26nbGR9KZczMQjmTucpJ4LNfqgcS9UNnkZmSU6zetngtm546BBCq9eYyHLV8uzoYYGoNopCWVa9kfujSPGaV8EC4",
  "key4": "46uawxeYRBXrvA4F8WZEpV4UFxBrXBX1NC4JYnyCoCBZQiaNhg4kVtb7dkfNfNY384bWXjT3LPTaHpaasCaybzhK",
  "key5": "5x8p4FEsZSybN8RqF1kc6YuDwXxcnfKciLKn3wmhy8CS5npciDSR2kiSojP3KsaNYiaT7mZLiZWMzGLTgWonCehW",
  "key6": "21HHpvYh5DepMBLvVrmCb3prgnkhoap5FBTJ9gb1Tq1KAGhYm3ERF1buLWhM7SUDgRynsVvr6UDL5uEGb9qAcoxF",
  "key7": "2mjdThmuQBnSgJHT7FfrJiwYrXvZ486AkyZbcYyDUtzuTPHNjWSCiDpTXhcLc7ERiXf8teefsvLmtnQkuvK2UvG8",
  "key8": "d8WtxgLwn7Ksn5JWfb2RGDup6N1uzFh8s5Z4uT9GSVCjdQaHHJYPRMXSXgr1Mruk9S37dDUtwN3xM7fqso87VNp",
  "key9": "4HMiV3c4SZzk9StChoMZscmt2TKia96MPa4oWVZk56Jk7aKC9o93KLUZC3VDCD2xMfuYHmKYUC1Ts6nFTP5eekzs",
  "key10": "453nVk3mMeurUD4e2fQZNwXQUx2mFtkLGC3D1Meko9XsmvojE5L3396LnTT7zrmYQE1ShbE6iVb9hBF8mr766mXv",
  "key11": "4bw3fN9TB2f5ckDRquNHerBFJF5pFXctpfp7STiUy8t3Z4DQsHSiSoc2adNZzXsv8HuyUzSnXKmJdg6PcjKWzCxK",
  "key12": "3BpvcVuCUrLyoSiLKZXm2MrQhpQRen3LyKoWS1SRWJVgnvRKfQyPc5kEni4f9yuZmmPXwvgyZnYqo5qVXBSdZNir",
  "key13": "62Dr1e64kDHJi3NuS1LNZAUF4NTnmbs9jpjNbS3oR2i1oQXy2vKqEk221mDhLfWx3hExZG9twmVdZGKUb7BtMkb1",
  "key14": "3bbuh47QueJh6oFNCKVbxXSdxpoSRU7vEUV42bKmvmYGrmoBjNcau3rPWe8ecqqv1tDdiYHSR9L3eomKADgp93MQ",
  "key15": "5UbtkJh757B9csKNA15skL5Lqv7AhDMq4Ny7kweZX1GLKovGg2P2paJ8ozwdTM4shy1Q13UrSCE4vkDPgAso5C6t",
  "key16": "275qa5r7V5XYrbxXqPPuSFt1gwS8b9xDBukfnhPk4CyaiKi2B8iTKjCWdHfcHMV9xn3EhqjMoajfLqZGqMzwcR9j",
  "key17": "42GDHcHPCEtA19nKL2ADettDT4GgdQUrtDkXuad4kimXea2V8YZoyR6nhzqJwm7NZTmkizENS8CpK31atPPEDDC5",
  "key18": "2XheKPiPr9byqYmkykbdzHbnHDnnNZemKKQQGRCm23HYPMKEdPvmeAzeiubAi4bDX7t8WywhGNsA2Yd6CnAXdThg",
  "key19": "2Px74zBa1pT4Lt96drRLCaoGmeDFTwHXP5h6hTTmfpXu2K4fh9mhEj3vGNyRYA12m7HcFbEfFf2QsRAw8bVkmc8F",
  "key20": "5wTePHbPKmDZX1Ape1qo8tf64PV3tyoomTrdHsL82NGdtBwxa4E71Ciwygg75QsThQLp6XfxYTP5rpo3tFpjnPdd",
  "key21": "3qpEBw5f4vFHXvtASqSdUNQaLMEJPVJhbQUg9LEsbhV4wU1gmHeoPdewU9ThnFovfMCTJbfVQUNC2ZUK4JGo8VbF",
  "key22": "62y1w21UnAZQ3b3mHretaDzZ6sEZK72gSeeiTGfiCY4eQ8ZzNvvsBravxyZeegLt2jg4KsjHvTZ7qRfc6c6VqTu1",
  "key23": "4AHsXKJ46DbH1azTAv8bJkKYpmDREyFzLnw2tKMPLnCvkS25Ep21ZY4ZQFzc98yG7kQinTED2AY5BQUcXBz9VTNr",
  "key24": "51jyZrqMVMqwaxdML7b41EyjDgL4HMYdDJDhnTtPhLhfAKwTQfDmj4AJB21idU6tjfTegoPrVjCSQoUFcdm1Yse4",
  "key25": "4UYsYeUVbRJsr63kXjwMetimawU7usq1S5ZV6DPyKPAt67t2GAwH4CX7jBQnJbtZLiDGgEznxTm7WznXFDJNxgSn",
  "key26": "5pafZV6vQKrM4MMhJvc5wmscH1gaGatfHBD2HWYXqGHZ5818E5RYonRPhz3GykuStByr73pcQXcX1JCnmQuPwFba",
  "key27": "xvnYb46uH3yt8CmQ1CDhdtNE6p53VHtT6eaMKLp24PGjzybYvefGiq8U2KSyt9vTpEsRkrSicubKWrwhgCLwq1C",
  "key28": "2BHbrK28gkxzQXiv7vbtJoDAYmNnaooGRMAv6wUaBxVts4cvH9J4hbNGVwT7ibRfeD41vkZoFtVN1s4qmkiYWZqT",
  "key29": "3uUYFbHXDaG2L3owQ6mxPs1NrNB5ZD1RpJM3Jv3FFA4eJpRyw7xVASQ2q4rEFLceVEPbuJKkJBnt6mnAS1wkhcAM",
  "key30": "CDcq2h1V6h5Edt9p3ZQTLvZXWGNxCR2AfULoSDua9UqXBBeY62b11KChqAqkXDkqSRPh6dKfJjnw51BgFPsMjsC",
  "key31": "KowB6454qQiZrp7UWbpQwKtBB1wVQDRMmup5ScHXVHwFgjgVGuF6mDXHJqoB9N9cus8vC5XFJ3EMvrWHY1e6uV9",
  "key32": "3mMHu8Gi81BBWCMDZjZm9CrSRCw6mjamrfxWnvf1bt69aNcbxZLpHiFCpS6rrQrxKkr2BJCcdYjgbaaPpMEaXec9",
  "key33": "yULvZdP6q4yS9jqsvwZm6soq8QP2Y7rtAiGD8RLVoAWmKPgQWG49e6PBH5UKjSMEz2PHwhnf5HViSTSz3MXre3F",
  "key34": "2JL6gn5vcLdcVerCYoREWEDkwNJYfGTSNYaVzLBpgaPqJSE5NUCYrieSfpghMge99C48Jx6rostjgZ7JWXBCgiQs",
  "key35": "JcpnhwnZyvmoyTVYgAWbmijp1GBWABkPRDe7vY6iXYwChhCiJ4jzTbicBqiC5C4nb1NsJmh8S8s3V9XepqbND3v",
  "key36": "4uCsRxSFRvk7Wq8YnBPZXoYCQqSVZujdnu1foSF1TH4X66s7gTSVkEmFvYj2544SnfEBsUyTmo4vgGAwa82Ah8RJ",
  "key37": "4n16yZWDPq5ijHyHaUn8eNWSV7xdE8wWnunXxj4vjkPGt3FsfV6oLXpxG1n9hfb9aouARBjFdQ4PR5bohwoh3GDt",
  "key38": "3GDQHv7wu6KDKH6V2iQvEvxSZ99TyWeaEnWGPxteECRqvrvDwJUzdR5sTMqQ8SYvEdogoqntXzvrwsYNp8wcvfuX",
  "key39": "GApXfBCP96EEFwv27caKZghb5avgUHadCTiUTWUgabZDYgbggv2K1mHzEv7q3rorv3qS9jPo2rnQP5xYCTSj6jh",
  "key40": "3oz91KUafQYEfNtLjYz3RQGgjzsHzbsSmyWu6DfDcMz3tRX5dPPKBa9C5FQVxej7EzHHfgu1DpKfxgcpF9VUas2L"
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
