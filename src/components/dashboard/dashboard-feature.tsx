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
    "2PFZF9ZyGwSZ9ukx6oPnCjr3uQ2N5njHyyTqtyuxMHksFJMmSoGAyBnjzNsp4M5BTEGpfLCCumgg9D5BGxFN7Su6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8fm2o4ziitsFE4yt4eay9FTUjXR3b48vrWbKc4RgPAzbRGA87PsRrfSpBivkNy8VLBtXd8xT6wgmniphgkyn3X",
  "key1": "UwNiv5QjUGXNMSo13WXgxDUV43Q3LjXKGBm1L7maZY76VoHChtsxD5XZjid1yuhzu3bYXquaoH4tZAef3wxygsf",
  "key2": "3fQ9vEgvLWTewynFdvThJ7dfuE9ZJMauePB9RjmX9qLxENtVpwPc6Q2jpagScXRgCQmPqy9scPWYbGcrDNjkm6uq",
  "key3": "22Pi3SgAijaHhcyfFGHELaNd3Gx77A1233dURBuLc5jKq83gDZhQsv1Sq4y4ybAxqCg95qjEXKTKVWnLASaJXpKr",
  "key4": "3iFnf9j3B4keitfumrTiX7e8c6qD2eW8d5uCt6VEsBN6uiMNLR6AeMoWTuRtihpCvMQT8vE6Dh1jJzLTBPmzs1Cs",
  "key5": "2QCrzcLwqjGcodHX324hwfK3SPQFMmPDbLMjeegAZDsqXjDwDSfYGUQT1n8BYiwdHLxYRKFiouwTnWdkqmhYLTgr",
  "key6": "5FpLpi68vFM4cT4etuEKsAhFsV4Asxny9K9iycZZfZZxxWKQoeaVVDmtT6ncMyyjNFfETknu12nZ9vtGvagjGo54",
  "key7": "4YvqxemDR2JFAGtFWtbZ7G5vubch9TLzv8bLALRugN6oJ35ZzhV7NiHP2yd8A8ayeudTyTxxsLMWpJAtvKKi8wkK",
  "key8": "2MWZtF4VkCksFeSCLpWLwon4sZ7JamtqeNCHbjQFN7ApkQr8AzRhRGHXPsdfVkwifsdZ8QLbc4A7zXL2K3AYzYMG",
  "key9": "64zu2C1zjSZAgHkXyd9KN4fRKmUcMBkJMQHBu3TYCQkM13LRyXJLndGVYzeYc54XiQbj2MtruXWtN1mtq62a44Jn",
  "key10": "3TM4pdFZuUX1qQgBkXFnghWExFPGQFHkhZbZqds2sPVugzdX4cv6WGaGsHt1bNA7DGc7UDpusZJQTxJ4wkf5Rx9Z",
  "key11": "3491RsMW9crki7tYEPNu4Jh4gFZ323fpZgH96K2eTm4N8uSmrRUYTwKVryGpoQKtFNtENiBn7sChuTBLHsEDfQWb",
  "key12": "4znf6skautGchV975udg5ZbpnsEEJRzkq5p3SDj4t6a1JQFjrMRzEEBxLyP3RdrR6TMJqryHxK5kKre3h27N9hDg",
  "key13": "61vN1E4MJLDu58CZyTsWcKnivx6FecW3ZtPnYtzmdUuEgmLWkjhsZJZXBDa6A6qcjD5Xew4Ld5MCXN5bDgrtXXdy",
  "key14": "2WFq1meZ9k66Wfdbs9Yu6X6Kwd7qQgGhbZjHznSTKY5xi3w4CiFBokQHrBa4GBXQBRwNKrGENq4BaRkQycmU8rLC",
  "key15": "24xS1JR6Ymied4Jahwtt1dqLiTHAEJSLpBRDRfh9PRQSfAHLF6aQ9jwhufKTQ7gLKsdNiJc2ZUzPSgRRnmoAG61E",
  "key16": "5DMqg3rNDp2F6zck3z5Cs9Wvf6g9WkJtsuMgZW89so6xozeqsKozDLumxJiZsEBa7AgLWwo2CFeCmsNEwGvJo6AX",
  "key17": "2VAmh7MdiWANpkWPkD52tMmBqnSCJv4d1jnCDoWtSDmancfouLyQn6Nv9ssAqSPsDwUFDc6dEABSSjSGqmjPWQ28",
  "key18": "2rMKHfNPbE2XDdcxMSh1XMDamcokHupNeMpeJ9u17URKPdwR73987cA93ZVxAysbMJt2kPa2Co74BQnya41vzuEh",
  "key19": "2Yes7uusYjS3Em1oLnWYHBskkFPyGGAw5vqQvQjYzpAnZejCsGsTr6u8sUAQsZ8UuYePHGH3VzP1XVxt2chNoQe9",
  "key20": "52uLAMaSiYXzTnLHKEcHU8fRLacMkScZsDH5PhdyZuHdL9grN56E7xygaZ2LrJaacFER7iyPf6656dACDC9gmsiv",
  "key21": "ujT3pGq4VFos8EYRvpCVjuRfSs1j3pPM4ZEXeL2Cm8W7ePSXD78a9fKTCDTULMcW7XgTBpFpwUo8ybD9D81zBqk",
  "key22": "2UVPRU5dAArye5rd5CWdUGid5TeyiSR172GbDr43Gv7proXdUJed1Zg8i2HHbExAp5VjzghMZHxUQN1B8DQ2oYbJ",
  "key23": "27rxdgNeRjFatDct2ye1ps35AEvyjfGt1F6WD61nTZxR78z2o6NSbB8cubSRPH9Hi73nRbEypZnSNDLkBfrVvaH1",
  "key24": "26agCxMem9TUBTJUaHPx19woipwtgfeizuhugRHMG24Lhoip7Wu918mmb2BgBnMB4bHanTH7vT5cF2UqqGTz3PKZ",
  "key25": "2vTDNp79XMnGixqtAzjBE7U6ZxKuzGkf9PwUK12Nve6nCqKB987G9ZdHsA4dDNKjEvkAioUNJhjBSSRHqweFw5Q1",
  "key26": "HyytoNyxFJ1XTyvsi8dSyvJPZ4PwZXksLzpdRLgwKGCD8MMEqEtAqVy9qZuM2Z6zs75wFnp5LTHvZMjNpmfDwff",
  "key27": "3hpriy6zhc4SwDfVVvrhjz2bLFgFpXfknWksgemdexJNtQHCYHq5v1tuc4TcLJ4m3Buzfx7EZjHBgEM1DxG4G9cE",
  "key28": "3r1LZcgUFRi9jARnZE5gr7ue2sWFgjL1VWLCM66SfoaPxiczmn81be5VqNcj2XRRg1TaWTuYXqKTdgBCqQyDtzGr",
  "key29": "24eZLAEPX1id9Zp2w4UwNkmdCbqq7Uc1tQSoWG7LGFewQkJWnoQc29YjDX9bbpujreJneU8nCRRy8m7Zuv4nLwmp",
  "key30": "3CfH3CxyxQfakuTu2n9y7GATfCeAmHyReqH1pcPcKyd3WK7kVW9YEJU5uaji9ZBgizLrotjpsGLWVFmBz5RkMP9C",
  "key31": "3QSrGfW44WakuVSNRf6v2wu1y76poaNTudYerXVnyqzCvgRUs47o3J8pHDRPemjDrTELEb8NKztvNRZYTJkM3PoZ",
  "key32": "4QintGcNojfLKYGnoRzfRJkdgABgBGTt3LWXwZUa5zZuA6jqTEFhtJqrCkChQcbc7HYP7SYgfSaL5bj1kkdDay6S",
  "key33": "3rLX2qp6VF8HGmoRdRMHePqjFeKkwFcNZqiuDk9yXmXEYgppJYPh6TPZx7B3S1wSKQYJtBZdFDYVuuR3Sc1u2daB",
  "key34": "gt83Xx9YBuzGVKeZLtudcL9bD3K7ri8X1AUQ3bCezZcTgyx6YoAxUKSizm9fGKwDu8BeM9eKjyD4YnSW3M9mmzt",
  "key35": "SnL4msf2UzjYyuc963kyeiuwe8qHamYBkEuUvEhiMas9vi7ftwfKgENh372C8RJykGKW7dpRn3Sa8AHQS44Wo1x",
  "key36": "4N7AkixzATJYmKJZPxgoDT5fMgPVs9PqYywpmu3yziEKLu6g1JG8s93ad3ZFkkrbJFDGRS4HGtFjtosEKkncqhzm",
  "key37": "5eBNH5t9wXXkGzPc5yamkr62uvF9HZzP6BMnZ6Bcac5qnvDwRrtPtuWTrVwCmE5oEMoS6SBENfcjCbtXYwLuCm6b",
  "key38": "59NGx84bvG8G7NjmsRL3wtiuWdvAF2w88c1Z54qcDF6arApZiTQzUvS8zBDEzJW5toLwjsAqwvsGeKFauDgz2wr4",
  "key39": "5BeknUSHWigGq5sPFHinj5Jhahqw5Cu1u9EBbz3fNCob6R2nrKuWp75RBAkLKuKf5meoqgNpqzPFYNHsVr7t6ErM",
  "key40": "43ttXKWzWsU9WmSffauNGz6Ps2zQDrs81QqvGG7a8dGJwTNmAL342JSwFQDqBZyDcQ2vQAwtavSdsbsvnM79M7Fr",
  "key41": "5RsNv42jnuuimdPKEUpm9TLQ2tYKRAENgMSPGfEKRdgz1dU4Fw3XzFdVGSkRVTf8AhGRfqyhM9P3ehV3YF4EMd5e",
  "key42": "4WfwQnX5pkov1epyXb2v5NCt5kqbMq9KEKcpW2r6ioYcKwkTTfExRvvp7GwedK7YmRQvGW83JJagxvLoXLKBaFcw",
  "key43": "4gJakf7q3kokks2bG9YS8eVxPK652bJqGcuAyPoXWkkFpaTK5rFFEsAM5ejPjG2KwRtJ7kuh975Y6aey6t7wuAeY",
  "key44": "5sFy3nAuQEjVzSpu7SbVhbRT1hfZLmYTfwoWqC9nMTMKJ5fHBwpMXeR4nVQSBpTDww4sgve53Bc9X8gJneGq3E2n",
  "key45": "59j5SDcZchz2U3XPPgAJZDUdcASb7TCZqW3aQZ6UnD9cHcbJumjUN5cJ9HkF8LUjms2oPtxaMfQCJ2okEv4FoqQb",
  "key46": "4EQzcva4tUb8hQKBT4UPgJtKpZz27ugVgqRadLRPrurYzUveyQcU9C6X8rdpSXDQmSY9MPdWktJjeKfhxfMNwRxn",
  "key47": "2PSKqABcdTSd5zjEcypKaGYKoXeAXA8mQ69HorqmSPvqm9sKGvJ63G2npuEZf3XSqhHnhg7jKQqfG996YbS7MwWP",
  "key48": "zNPLgKZKmgG3Yyt31GyUMEAvK4NLAieQMpHawFbbQ836KzEgBuDqbgVfTbK3NM2U3wZ9BCDgZK7FNVwFeTpPjk8",
  "key49": "5ZAkjtQvG9V6vGNsixwSbzRrXhYRftURrWPKECECePwSgDLSN3Viq3BcSF5gmWQdm59rXnnQJw9kvtP67vqbL3PL"
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
