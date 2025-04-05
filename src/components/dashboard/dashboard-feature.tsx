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
    "5aDZSFpNnsuJjaSjBbthvQcmAriDQZeNcCjg44n4ay8A1aTaWk9ksYoYtAn5YQjQuBazjhBAyFn4ZpHe2RnVALew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHfp9FH26G3FWjQDLHviVkdpThAYtHHyAANQ6iiGswavQogZbAjq7WBMitLrxETsLQa8YcScMos7fxUtWbLup4s",
  "key1": "2WCEhurkkQCU7gC5Yi8VVMUskcFS5ub2186AMgkKwDnTCJ7WW8254AYV3qzVWqUFSD8SqedkL4pDL7qu297ShQcP",
  "key2": "3x9RTFGfQR6QRiGJrtYMYo8D5jSD2amB5keHimsqQjj5i5dhr6GEjK1RzseodnHV2FHQWaCEDXCC9xyVafsHfXHN",
  "key3": "4WSvABxhaaW4qUcmQ9AGXtz7fZcGvRPXX4KpGsd5EkrEs6tib751D7DCjkXepngryYL6FRrYBq1PiVhkKJGA9XWy",
  "key4": "2wRBSxeXEK7LuzDh19CWVqPQQshLNGnSTqywN6x9ssQebXtk7i7PtUJ54Ag2m5quSNv1RMXqqqXk4Xcjungo8DSm",
  "key5": "4m61rMU7QufX2V4W6N8CruhXqhj5VccCHLtj6g5GHsRu6hmXgpkc18RZkuJ3xtjQ15iJbKDxBZXwJhDXYEudvh2Z",
  "key6": "3HchTc13c8ofLYDdpXsuTjtETcMfaxJPjUcKvZMGLhLdhcgquBrE1HMUTD2DMJGZG9GuZCCwbzSxYAPN5fBxnMSD",
  "key7": "2ioWDfGcWuzhTMpCxpH6gAXaYgWDvdB5dJeD2g1uaYSWc5aPRWVPik6cw1Q4iiNNxfyxZLbzazXNqEKMFvyn8doN",
  "key8": "2jQ1cXQGD37PAGDdesUQSuLnz8mxrg2X5qonBshV62Z9kMrMbRftM1PPCSCyeAoULpGnnu3TFMUxAseEJ9twceCW",
  "key9": "2vMciQcPncuDU8DSryPrA2tA9wuXBj28eNtoG6F7hfzCWJV3ZqbWi9YEGrL3eyxbXskSZZU65vXLJF8iNhJmCpWt",
  "key10": "5q3xu3eW7v7HC45BmEoaPdfyBcWiJSNiXfEgcB18Zs9EyK64ao3Hr38X2wFcbTi4zbNERNL4gTGXfGBRQ8VdhFsS",
  "key11": "32VFQcxKuNKwSwQ2ocmYKjVXZ8UaCYBVwZ4VXGQuEPLQ4TaLkaarENkGcCLqhkQ1J8a3V4imzg8jNvv3WtchtG9L",
  "key12": "5vPXduu6NsrjfjNky3QJBuzaMML2xkhAXkhYAfMstYpLm7tC5SJTJx8b39MQJba9Esh4Jc6bDaQydqogNf3vWogr",
  "key13": "WycWpeGMXY2uvb5cSqmGEZF9Xf5rUhSLC3vVU5WMPM3bD2mzf93HNRfosVUJYUAbfSXQ6gZuEgzhuLqsbp2zJUx",
  "key14": "2NaYEeWZ4giNkqQySEKf33EzTELJoBkvMinPE7GDsodxX38Kc8pydBgGWwYHEYGCeU52VxZL4GBByPXFDWjHrLZJ",
  "key15": "5NAm6Hs9ZW3iZxCP6qph42G4QZUZsgiqXyaeiwEE5svzjdTVawxR4SjKWqMibnHxmS5Yy6zp3B6AUfLWekyeSMiW",
  "key16": "2Bk72LipLFRbU7631srG9aHpBdJppM2Bdr8Az8FCbQNxijcztY4bdUsVW4ZauKX4756wq5V79FhWa2JVvxHSGfZ8",
  "key17": "28K4c7bbUNnk45izjZahLE4B1Xwoet4CyMxy1FBDoopPfuNyo1i2esw9jXnpaJgJB66Ld48ogbSNWdSGu7ibefqF",
  "key18": "5hXp633FkRmfWL6q8TcX6Gf8eBRtxfihcyjS34MQoUxnbxgnwiUaDfHEBMdFs7e3X6nhVopCnuijvkqrDmr7hKC5",
  "key19": "5aXbFwvZVGgcuQicVHCMthLM4nMMGuVSbG12kbHGbSxWoZLkRqdh2pasfQ64B8RKBfLyDrbkCofjZ6vpRSBdY2Ye",
  "key20": "3FyyhhPSwZyeMZyz3uWsUmBdMmmKsW8CjC3nEfHqyqnj52AN6xgFzVXcnHkkb7gjGhMTKf7rCMyiuZKWmCBRoL4t",
  "key21": "26WQtvnmPRVkzvracG4wZB87DKFVe2R4XND3mvFRinTUjbqcbsCuTnDS6eVBRHTygLbxiQocTPpqmg9PiB2vauyq",
  "key22": "47R4Fc858ktkVHm1CP4dwx8Cr37NwNxZv32V65mmtZKenzdC2eFxEEWcwgbiewonXmzTYynHWVE7BbCuomSoAAdb",
  "key23": "4g2Gyku3GAYgVVcK14D4iZJWhUgNqL1979XoJ5waP2mvbBxpL53DuBgGkBDLrYPGkRW9ZdwnVQ9oo9NWsNYJsdpw",
  "key24": "2FpUBCsN3CybtFubGVun9A5uACFZ8zsoCWtVn4xpoS6YH8skrtQZd9RZ6DQNk7cKviGkp4PT2UgRb25ZCJzzSg2T",
  "key25": "4GDs2eoCij5dQmnRHKyySuVbLqaffeWWRKAj4BXwowE7ZEbz4UK4bZc2ZUyCQt7atJzVi6aMgLC5FVLbS9Eswrez",
  "key26": "5QG3zVemHnhAKjcYZkKDggfiCTuxeDjWMRYXpWSiCCJ71AfbvdU33JRHvpuBuDDJ1bnvB8WJBZbP1qEVXbFQok2k",
  "key27": "4H18WZCRjgbJLfMQg8F1XaV6eeGw4u4Hh6qsRJCRqWsEmhpvtv1d7xjU2sJq5GPGVP5GEcRmzb7FUfBkG1xy328m",
  "key28": "v9MzKJNGK7Z23vZD1PxypBP7cx6yHbEX2r4jukPuWGykh2EdWFLUP8ommCa1VrF1wUfN7Mpaw3F2k2F9Z2mh4oB",
  "key29": "ywB4Ghm8kkq166XBe1iJaPEj2dc2WfR8odExaYvBhM4YmJgMY6pSiQhyPZSanPLQezHPycays5peR6jbKoJ28Up",
  "key30": "4vjnH9iBFeGfMqRNAwjoF5V79n1YnKYsMDiaM3Jbaq6Jar4tSwpK5FvE8bQvEkeWcYjPJUS3PNDJ1SGqetyCsijs",
  "key31": "2Pc3Fz22MkcfCP8d54hZmCQHPA4pwmESsrASjXCDDt7nxgZxLagPTFsV7Yqhat4mdwHkcs9o8bwYHV4TWmYtpu3n",
  "key32": "2perKjCKbs7QPxARgSunaAXfboyuVTHpfR8w8NUHJASSDGvoCUecQVLERFdxkWPNcgusUXwzWFG31L4TdVdCUbYY",
  "key33": "63Euy3ypHT7KNxRgg2nj7fFXPSUs26iLBp3d8BDogGQYoxPasXSYa976QASEP1hFaqXsGPddabEiu746Wk5xFm8n",
  "key34": "M5PLyLZiTdaHrUj9pEnQWEuZneqV2BQVhdAPpmhK62FKz1UdGLEimPf7LT4jp7JMMBtKCHQoJ9ARPMTtZHTdxRW",
  "key35": "48ATW2TG1LCYCaR6UJtAsNrkQxmP1EpTF6jx5UXpet7o5WqPTvbu3sxsNUBQooMY3hpeJrK5RiHU7EuAF9PepcEx",
  "key36": "2dWudNQYExwtEi7aRzmfjwTGeW3edyp58YF2kpKVNX8B7Nz1gbYsKMLtqJrLAcUznhRqNPuvWUzbhii3ko1fZA9y"
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
