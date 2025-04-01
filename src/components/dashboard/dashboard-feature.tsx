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
    "3uwB5TmsufSjbXyC8ZPad1BttpJ3SoPfuin8n3SKvyvS28hmruo8vFACVknaFawHWt7YiYS2B5EL5jbvCNDE39rY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvMgpUuTKUJ9aKrhGgSM5Fz6wCt7a8hTwsU24aKfQSxBqpMRHSNY8Bv7iwuG8bTF6sXBawFkCSvRw5dK4Vj8hpK",
  "key1": "tjMSVrCT6PFvgR4YCgpd1ig3CS14mwUD17gRKsSVukc3DzC8H6zLK8jTGHuZya1AuY8Gj4Ratfb8pgumNAjNASg",
  "key2": "3sDaL1MgFYkvDbJcAmh8vinqXRyMMZtzwkY5E1sdQAciPjWXCGQqVMPUq4QzFBgSNLBoZJmbT6aVyS7SZeUfaHQ8",
  "key3": "4QuRj7riZmbW8V1aMXJpi3HdqsbqbTTxecN6r3c7ySWcWLrqxwcPCzPqPPduLYxiaWKqJycBinLu7JLFLyq9Uhgp",
  "key4": "5MsjYB9rzL8pCeWCyFws4DoCAzcmqRzk8TM1X8o9xM9npiH2Fdr5aaf2CKaEtZHh6PQNMWjyfJttHgwRTioHz1VA",
  "key5": "2zCPMfzXxN5z9AnURWc64m2YszN6YkjgQQssNidirhjjpToRTEv3bC47ukbfWJngPa4ufaHJAbbYGd85E4s2gZb7",
  "key6": "51MV6qGJnBU5JNpDwXk8bvSLSXwvRwKoSASytArqix5JmbwRA8QVLZSi9RpSU9dBxBVHSSMjAegE8TfxtyTLaA7G",
  "key7": "62mbc2Z6wjUkTGh4MgMRVyEak2qBpXsRe2x5iF7u4HP4MRCAbzC3CVTq1VPAVbdLC3XLpRkNUpvJwKM7e2zRRfwG",
  "key8": "5wkh2TRSc94uqsAUeop4eusq72mYcgyk1n9effP7WBKtNxNAoLPG28fhr1Do9EvvaUjQaMbCrg9DDuJaXxpZCv1V",
  "key9": "469XjES33SQmkrqcoEsiUKh59og8mJz3hzfeauK4TcKi6YqDMzXxMZ4G2fFXNGe9ncufTidmkyCnWwvFReZZoT7v",
  "key10": "5DeRx1aEf3iSW5nEcjNMvqk1Lbh7nhUyA9SrHwQJWJHSzYcgExCfSeMrkg4CQdtQb59a1naZvKiHi5p6kt4MA8ua",
  "key11": "52dEHwrPQ6QuGEyUMctQx4h1mHjJJ9gELyD7XGM5X58tPhRQj1DG3nVvPbPGvueSm72bND6uDatnEh71rD5qGPWQ",
  "key12": "4Hhf1Am4GESUe4BMfBpH7fUw8FsBZeAsDgbK8nWLiW1bkM1Fu4Qhn6p5ooRejUzfvGXRpdbNA6Fy49tnfrVTfzVU",
  "key13": "43fTeVYmyPhyQfGYXRkND3sS13Qr2tEfn4PPmo2ez1HC5QkAcyMhbPEAsf4u9sVN7NCRoQBwCzMN12xdetx2pZVh",
  "key14": "41tcVhX54c7cWkgNEpK4BeXXGDXby3z9utEoFfSR9yZSWgiTHTTFhT6HZo7v6MzcwPkBk4H1XAGtmTCUjythBBcf",
  "key15": "5Funupj2ArY3ox2HGR3aaD14NW1xnxJpFf5dpmUbo9TSPAX5LNWZZzkv4WcTNPXnz472xsg9jWJeKNqtwQ7F65EQ",
  "key16": "61TMDWd7qjtnsgDpgNSnfPGRcg9NJoxt5PsTqCM3eWRXmiyZKaZmWLdfEmgavenMeRaosB7JWkLHCKQirayraFFX",
  "key17": "5ZerbJua7wHx3f6TmD7i4wgAr8pA2W6gfTvDiDba5XchJdeu4cY5u7TMhD51i5N5ZUrFh5Zm1EFYwgZWNx6fyHoJ",
  "key18": "4VhUgpwYw9WQQccRanZSmaXqGgXZF7joFzkC9W3ehrhen5FLvvmSSHAkvfHj2uQTZ8hZ6Qwhna8YNpABMEbjNSWC",
  "key19": "5Rzn3e3QT2SymmKWPVju8kfNXa3QjM97NFL9AfsrStN7JL39iwQ8Q93AnpUieLJfK3vhpwaejFbauzUeBMgeH8Um",
  "key20": "55ECjDN13foy1aJn2ZdXf3GwVEyhwpfbr6koqEg4TgD7AW5XTtyEoj79gRdrpFGnWcnokF4wgTEK8tEW8y2JxYha",
  "key21": "24Ajj44iKRJSbtDjH6mwJ4v93WUVTF1ZT6f8Q53v6u1KjTrHN5yheXcUeNF3yJ81EGA4GaGHetVPmbWDpgeDR9yM",
  "key22": "4KehCA3UK1m3hhmt2SrBAdPrktyXJ6uaGj3CT8Jo5Mp21gp8fh8ipC373bH7UJnfjAjYGg3ep6e19GL53pxzwCwv",
  "key23": "qEBJmQmbHdXGrSsHJZwFqnj4n3d2nW3mcL3LSp7Bp1sWp4kKAqtg9dgaAxyJXXsj5JUGU6VLk1kHp1ykY1N46u6",
  "key24": "4M7K34SSHFJgs7ATAKs5uavhmteNXKDYb5FpomTa3ehbaR2fA7FV7mQFSncwZEWX234EQbXXn9Esr99jsAvq8HRF",
  "key25": "3Ek3Qnonezod2uSJKu2LVQjkJA94bg7fBHLP4jqs54fUmttSBj2VVeei1NKSTDzjUg8wJifgRimBbm2YD1qbqG2L",
  "key26": "z1n9ouWCYAYRgPHnrDcbdNBFCfcL8TzptRzqFPYVHoFqPCCNNHBze1oUy17GtkC2puptyBMwLhDrEohncPCgnMm",
  "key27": "2KsknJnWcaJ2WboQcY2LVnqNS8gWhKQV3Thr3kxrG98MP8moYc6vPP3WVtXFtfuLesN75nQeFCwtFTB38LojKnv6",
  "key28": "KMVh3Ny45PzA9Dn1AJiwfbniiyEcpS8mQqbM13uFrgjyRWf8CUNTSMxECr8ALjviY6W6MTtvjGeRgS3HWC8UuMn",
  "key29": "3WfVmJwKTeZQyp347DTJwFVhNVBqSjWoN8Zg5Uh5MY5m28wfJtaeEPS47HrFJMdv1Vy3FamZ1YWwgqTCsRh3TfQ8",
  "key30": "5TYXESy9AbSpTXN66sNXKYhYJPeGJecGN5g3Rtg54HViAfL6cn3wgLCUYoNvpXQ4Zfsm97oqkhkxbjKSVcsNZtxz",
  "key31": "5d7ftCJS2RdzuTuYx1ijRktvfvoLYeXUKPvAbskD2WpK7ryrgokv9QjHVZhWvLUiKHa27dtQzopBX3moj8XC9Hjt",
  "key32": "5mj341AboqzcZAtAkNoGAvg3BbkRyv4tkkeRxabUWpE8jfqAVTt7Zn6WaU4jKwmq9vB91EoPqLpG44FMVbgKhZK7",
  "key33": "5fTZzSmgHYtXioLRB3qirqrrUkvLbJXKpPgGQbrHGBNxdWTuWXo3DTjqcx7w3BHgYm2DT7iu7kE9YPwdegvCKNmm",
  "key34": "4VdT6VeLdthdEMTkbAAJPHoH9gcZBEvSzMg3eQiJiqVvG1c1b7qYgcA7ZMcdxrVauz9NLgaDtUtF9Kf4UvzRawGS",
  "key35": "5D3XBH4kbC1UrVGgBXyQbMQrvGSpWFrzfAEXCeXWAjxuuWd7XZCracJqT2upFV9ysnDSegvSrzNQyKEruBAZdRSP",
  "key36": "3hxP4zjvxyEFd5KcAw3c3MFotsYpiNuUQCKUeG2iDsdroFA6tK1B2AdSkxuA46i9pmBkEA4DQ9in13pKuWmD7SZw"
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
