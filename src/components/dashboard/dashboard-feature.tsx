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
    "5Pvkd1eEYmZ6agzHt5oNEB56ohQBurhbwAR7TxDy4n6eUn5a3RXLFgBAym6Wym2MTSNQBSpHbvprB2whgSSy3xXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqKNjLwUYwDmJRqVgUygz3XjxUvio5xWFqvbh9G9v67uWJn5qtPFfXoGDcn1oFMLVHE9QuGDYKCvNUjDjWSFa1g",
  "key1": "4DqHetsR7f5Q8UYZSwhpy2cUrDZssd5kDFe87HPgQLxMJoCbRQdeQRgERkqRwZD4b8VtWKPnZEdieMnLSDqR5JoX",
  "key2": "5wcsDK9ejKwhTbujZJzVbSkeKMXHjPUqj5VxzRKGeQgRHYymDosLYksyAvXwUgh1MMgtvV5syVFcJFjtdgVaPz9u",
  "key3": "1Eg3bRaMTCLCd19A85gLemNhdqppxjM63kY2txEePp9HytDDYQ2cxBd54ah9fH5LVpMj6Yp8Aqg8Tph4vuFn3rc",
  "key4": "2BVvU7a7KiCuhzdTvtrnk1qCggbhHiAWnhuZTeBDtuHKqMeD1DAtw44Y22KEQtfpUj3EgyvppJ5tYY41r2pk2agN",
  "key5": "4XCvfs3MjHwQef5dEFrCiaukMu9ujytt8r5oT9rGe76rARbmD5y2GPa4FE4p1KksrducayLAovStP4agfvK6LrGa",
  "key6": "A92vRBcKF9jKi86vMth7cpBmzR4zDXomvaKSvCR7AcMDkFGrGH4zgAPPejem1BKAW6yWPWf6n6T1ohsWcWs2jBM",
  "key7": "2aa7TAKot1KMViyCKcVRYccCS1FLcPSZBjkpsfkP4DbemADcSV8GuydxzdiqsMj9KQnHnk9i5ATscYx9X86QEcrW",
  "key8": "KjY7PpEwtk2wuvnRt26exoGA5x6brsfntaB6RigPQ1DF6KhCdR4uoWGWui2WpnFSQWWBDgRPbrBwsqAVxaGZGfA",
  "key9": "3ZHkGdakV5KdDBRux4NAzgkd6wWR61NnZ2APBQJSzoUzrjrFwFRKzLonnovqz7FUaHupDBsoGQCT61CgMkqXU3Zf",
  "key10": "2rPFb8iS5y7kjmegjnxCYGpC4oofyhB6rK7fsmU28XLQt4EA5pQ1fFeMznxxPnaDPGwGbBT7NXonFTttbENTFY9m",
  "key11": "3utAiemrxvaypT6Z2iTLaEKeNWaUqxo1zAK2sduru9phJ5piUNZMep3FWnPNNitoK8YpTJgUZBNY9taymY9SYR4c",
  "key12": "2rVgJzmPr2kwqo6bdbZB5TeV8pKsSsnqv1feRRm6XSM2kvDXk84JJA1ALjQTyFS5jHnKgFMXw2EX1EqgD9TEaY89",
  "key13": "2aGRdicD5ubgnRvVxCpodnGZsieLje2eAAkYdhcX8gZD4PurbBFs89pnUQogEzedAqCVrAG2WJH4JHAHtYk9atjS",
  "key14": "54UDjZ32eQH9eNL79CHrm3UxW3fYi9j5EAtcX1bnsX61yoqBtbPb3tUUnAvFZcWijetiao9wmMg5od9sEBP6YFex",
  "key15": "5BqyxKxHTWX972WXnCbpRCk9Envt5QcnWemiJm2qradzapfwrbzeQgQKZaV5GeY4f6nAtD4gzn7XJHuy95ZiFwb3",
  "key16": "aYGhJWBroT3hq14NerBiq1PnJ49JwhbheomZMoUcmDeGn8WFozGEn6GvgbQhyjLMjarSPUPzPTTcfQNiRfzNWEt",
  "key17": "3aCLAc88uwVZctk3vCHYi6pqWR9xSDfCp7g1eVsz5xQaJuMLCu8aHbx9fTmmgGLih4b4d6uNPVRsgG7hotWU6ZqG",
  "key18": "3xX3sec4q3VZNqYs4MDAeUpShNQeACFzeMZAdKUDU2xhYMwZozBFBLws8QFSpcdQGz8Fb1RFcpFNLGMPhegJsdc5",
  "key19": "F41zSidSfvL1QHvAqg3QRwr7PJwYg7AVLxuBubFBpKGpBLs6Wh2EAHtRDx8p9ATBnf3LgHrjGMSNoRdv79RQcvU",
  "key20": "47yWij1H9E35zxoDzZNHFQVeDPGW3wMxWeNQsbFHCQ6WnR5VhSU1TjaQY7aoxqyVAkKcQwkrRL61yr9rMErUpDEc",
  "key21": "5DHRzBwxeByFT9xBxoTZukRaWxpGzTxp2vNZFipkJ1x98k6B8vnnHBt6asTDu9daRkUuB6HLi4D7gV4ZagpdPsW",
  "key22": "5tNGYdJ5ewzGAVviE8t7rvMVf3nVWnb4TwGrKAn91mMMvRohnooUx4Hk255Wi9oupwmHbifjBWaHs4DTPrRDwaBh",
  "key23": "4eraocdMeA3ujw9oPxHfkcq7tuj8rhiNrqyt1iPGkJGNA8CuQvZaupcf8ispqarkPHi4WgP9YLS3GSskXoargduf",
  "key24": "5TWPYEmYaMm8H5r2yRhqJhtC9M9RSGjDLbPg5iLsMM2HA4iwhZ9ivaAXjBLCDY1uitL3qu3gd8LxZkgNtLMZRNnh",
  "key25": "62n6g4q6N6PjR6genAscvPJ5wJEF9SD4nfftzjSBTrEwr7K1eXjYEDvMqVuRA4EhxqrVyQ7EyeQY7bE9FkcnxMYd",
  "key26": "2PuLiZL7Ku9RXZHV3R9jR5LsxVAyjsyQeZzi6AENyFjyhX8XuakRyCrAfTrkoeQvWfjXujKzoHzhwQLHTqCeuuVo",
  "key27": "xgNDQXQo6RgAjbirxLvqp373qBxn9ve1VrHQsCjRHbEc9o47t1fTMDqJHtBnxLPqsu3EW8eMK1v3ARenzDiK3F3",
  "key28": "csrNkvQFkXTv5UdyRrzMLMDhQ1HTLE5BxqRLGFx7wfMx2uP5hi6LV16K5K1THZzQk5N2UdmpUSW4QnEybPQsaGw",
  "key29": "2eB9Rkn4ECawEf3uqJMacNguBoyMGg1qNUTNzeoGKQ1FSnTk7FvM32BgcLBhhpHVXbzvj3XX9KUXffH5ywh8C4fQ",
  "key30": "3tDhi1sfAPZEue4xbL144QeaJ7wbgfR96LvMPTb5fD69WdYhEc5RybigP5Ets59Ayv2grhdBy2zdPnMMHbkT5CVm",
  "key31": "56sLceypsvxPf9T59RaEzLeUF1GDtWvPSE759j1BzSXJFyEGk4nvyPtmqpdd8p7jJZRaDWKffnzWNqY6wmjuLEv2",
  "key32": "5LKKMTjhxm18LMcCmW396sfNxcB3EFCsEmHxXhMMJqQMRn4xB3RRYD5PfhyxF1cT4QeTX1oCpWMoezmDfrc4yLwD",
  "key33": "53rvg8zxc9DJ3psRwA3sB69ZgdBRwnmfVeC4Swywsjo4yaiQkBiuE8FYH36cfTPYMWgGrGbHfn8LLmDjybXPsRJv"
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
