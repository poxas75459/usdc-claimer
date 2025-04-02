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
    "51DRy3kkttuCxEy7eBJf6faCR2FJhEfNqHZLdxCMyokeiArWrb1Jb2oEiGoFXeYE9WQM1zjGqDxUvxtFRTWxdBFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBSZLRXVfb1biWktBrqW8d2FwYqRNgpzyg5JJ718F79QcyeDBUFigwsn2YmZT4xqQp9d7UbtZLctjdMMWD9d28a",
  "key1": "2QYgkTew1UqYMSVgCaDX6kGzdrhF1TSwd14dGn8fsXG49TFkTFgeiFj47Cn9EvqyrK3My9PhY3h5taG5iL1kHs1D",
  "key2": "3ZX6cAdFkffUVp8GVS9TycEvSmTHwE2UAGnefS4WrLdzTVqP4CnX9muFdfBw29kc3wdc7u3DyR7LCrv3aTY9vv6C",
  "key3": "QuBQtRNAwA1paAW9N2Vf9ViM6GNkGihzb8je3taCQKS8FM3pGFT5Tq7N7ewHxYSoH7fv8VAWmZbmvyLWqoCveKo",
  "key4": "4zhPM5zmJJrTLFtZJfTtqGD9sTXCFU17gB1aZqqQrn3vMwCzR9KfxecGkn9dJzbDWuXJmqjbfacVfLWconGhMiz3",
  "key5": "4b5hjGU6EBNGwXN4YhwogRSYchcLodTty9EYZ1k91668SS5M7j2X2dJfj4a9GYSUVkoGhTBQhhienmZgEuHVbVdk",
  "key6": "5uEMMiwfMytEuPx3ot6ypVoZbfdjM5wMiCq9KruMrnobNVwa7seFYZqmjBKK7pmv3brpdVkesWFf7nmJ6pJ67aMn",
  "key7": "2BuHAQBEF2CBPehVX99cU8pVu9zWtkvFvsSdwmUgmiXqfhWnRcfSD5ceUAk2DV9eVdYwLjVVDnqXYSmrVkd9gZ4b",
  "key8": "iGxECSj24X1Bncee6TAaEPrMm6sLjMPqavrxBdYTNezWv4wm3d2VC5MgDmy5sJQ85Jv8VeXgkHBDBDy6aX7FfYe",
  "key9": "4uN3zAG2V77KhFFXt6CgQDMLDmLEU2V1yFUP2DgQCCCi6crFp9CCGajSVXkWUkKs2HYjH4LywmZjKxigu4xFdYtT",
  "key10": "2VtPiiA8ccRAQpBfsbUYjYgdU9KM6JYe4Zh4S9UUubGWyjMBt7k6XZXx66E3HtpPavZxjAEBCNcm9pdKAR8M3eiC",
  "key11": "4JgTboGHNspUfhmDzb5HB7X5u3baFfTFA1kvBhaX5iYtug71FHnYvLmvV3rq9eYSktyFcLGTWXtvwCrQmPAvUXBv",
  "key12": "4tWFR2CH52qtJMc8BnVW93dQppDjY1mPxmKd3q6LLG4PVHHmniDbsQyHB7VKJtYHCQjh3qEBSVS4uJ4V1oDyhzKd",
  "key13": "Ts5p7s2x8EDtwmAbEZLBme6c4CpEs3XYRXcF4xQBitdQPTRBoR21RoTaAMjkbvL6v9XhUdV5j4bowouD2eHY2cR",
  "key14": "5AvJ4KnydnL7heVZiEmWq2BuBSzEBMh47PST3XD3Rj5hrAHLG8FvQBbSByBNSx8WUCwCQRkE23DfKDtY8BgP1PUc",
  "key15": "57pQ5DFmDYqbmpuJjboA5z3avQg1sAtvBtwc1pjVAmi1soGFzn4R8yMTEt1kFM297LFz2TNYeWmK1vPXW2dFxzaM",
  "key16": "2dqrJxQTKHM6EWe1FAD9wNebLNFkixYeygMkVre4sNixXa99g7ya8Hb7XpXqmtnPE8RRA69XUerR8Tgx3QPEyNfy",
  "key17": "LfDwXU3iroJRWb2B1MQ6S2KT6z8KXDCaVFi71kSViifsWLtXTM8eATWVvfE6GTZPrDEXneQAu3uKUJb9QSMp1Vt",
  "key18": "Q3hHVjfrGQBqATNZBbFnjwKkaAkHjcisymYFgK8jpRvbGjZymgpAFq99Re1AMc67TzN7N1uKWxqApRq59DT8F2a",
  "key19": "1duyqgcKLGKpSC91H1W3hfuMSJWfNymesy7pU3KQjgbnnxLvd9oQ2pzLGmDwqyEMdNpyMzbBnnBNzw1pkQ4ktkJ",
  "key20": "2Z6TbAr78564mxapygUpmwuPsJbnFHtxXvszwgPtaoRgYVq8sbEy7NTTg4i3VGa5AJ8XSPi6x7ddbevKikbikrLh",
  "key21": "2bWz8SHdE1nVn91g5Sjk4VNXFeNgSsT5Te5DMujuMfKwVRqGYZULXXDurZFd2FDCSukwX8DNKJgXJ6t51J5bFGaG",
  "key22": "55p5WWmMLgNqWZ7Pj5s6cf22ChWmUTAWWXNgC3iThnfBdTvWYmM2L3yLTw92PqKAtEwiSF2Crbv399aHY7mm1M35",
  "key23": "5ZdaGNbmWCitjPnuxhKYXS5qcUJGRNyF8neWTq4DETsUTH4QH89qTGTjD3UEagAnoQifkNPRoybnbFNbSFisRpG4",
  "key24": "521SWvx99zkgAX8tfMEnzvngPpScGkpdJJ1mLYZvoZtz2RZt6SCaefuYXywsS9t4ezfmxfxgNvNo1o2733mVR2R5",
  "key25": "2Zko8GQMZ7aanpBiS286TwZL8HePRpM387DWnr2JUvXajKBJZEnMAi8bRh1F38ToUaWLCsXkNaNdvfSmocZ7EqS2",
  "key26": "5xJRNr6fonD8fgG5KoGKhkqnfVHimLV4YZAP1Jjt1qPxq9g6LWJ4YKJ1EzAEXfhEUzz5rVrMy1PtNKrDVA1RN4iX",
  "key27": "2aus3k1JRVK2wXGsxazUkyWskEb7tk7uC8Sqd5zEUMnaw4Vm2Y88jfKgjwZA3SwQa5fsRPGc7qX8GbS4fektwR4j",
  "key28": "3LekAC4LuiEbEawKVank8Bqb5gVxefKUUPdZGk1Qe5Y2mw9XsA6BS5YQRXQYP6FFettsqvhka9zEX94b6JZ5GNGz",
  "key29": "5RcGBiuKFF5bcT51Fnvi3cmz5u1sfhSgKMajNhHg8nmFwJ68qNE63BqwDBL88ZAe8JGzJL5iotDnMcEsQLhN9Bdc",
  "key30": "snZqKUUnmSyjLqPkqhwxWf6T1zrC46E5Ms6YqWZapD7Nwcrj3S7iUAd4bF2D7UQpWir9YWkH6NVkndAiacqN9QV",
  "key31": "2fmWXqgDXVh54tLiZfXqk69tmW5BDAYx7aEk9DEEJJRCAAj4mff5gdca8Kg8AKxGjV9kBMbrwZBHEfohNMT9NnWp",
  "key32": "BCBtqhSUbPjV6N1pqdNqN6pWTFaMeSpi2DS2t1T43WTzbxGZQoKHghLcCJCKmVspLQ679zdro3fy33ScW3E4JfL",
  "key33": "22ZRonge5GxLLJHyrBpMznDKnJ9g9NFP79ZB6EwC8dB4YqanTVes2hfSYAohugZrReJbjPErSkEp96a71rSgDchM",
  "key34": "4iPnyd5icY2QzSYMz8EFEx1MKpYY7vUvMNos1CSdAVcea2H8JxbRjgccWYYH7PnKmuPoE4Ru5Si5qpW76aaXxYqj",
  "key35": "3etg7BFK65PqDrWsySe31EbwnXYVMUGzhXTNdRwwJu9s9WB4gJ9RCRbWjqJENwh2bLXUCjAdCFMw9KQHLSUaSrwC",
  "key36": "356v1brYKWLNdJnCdiVeKqkNpxLKsDt4Ljza2DHKKvGnzwAymaxr1qXdrvXWDqjReqdByAM2TGXAqezXwc4hGbkc",
  "key37": "4e7Hk88JBxd2p99n7UgDDx9M7gF41QMfv83mhUF6UWL4koaFy62Wkd57DfNNFJ2VUi7N898YaQWwRJdG6xi68xsF",
  "key38": "sHu6cShVRarBPueyKzQbUfx8GBZLtvNvFSK3bXNhbFoucRUHvW3UxZ6xK9ovnqE4ZzSKtZkqP1N2EWEtxHXqaQN",
  "key39": "3W9yB2cc9Uyjq4et8LZbW9Q5dGZNqJaiTdbWEvV7MMjsoKchSpqJ2Mt421pKg7hixndXgJZJbZ7t6gkbDagwDEVz",
  "key40": "345aupfeRnTvoZ8ajmuLH6o4CZutHHYhQiQsdzUbfALBnSerse7ap3UapB3BPB4wMdwAUKdggwz9jYFcw9hosxzL",
  "key41": "2MrkGjm5MZYtdGKqMPJnBedyexYVD62QCqZg9bXQF1FJPNdEBMpcNCDif4ZReKSEZN66iTf6aNvMFzzjAansomKC",
  "key42": "5Nf297tT4PXVS2E5cZ7vHm6UjnyB7xR3DasnsetATR6FwqVHXjkrZHH9RR2gqZyv3fsGuFBKGwpbHseWQzXDCu3i",
  "key43": "iWrFfW3GiXRdZh1eHRxNAyBs7Tm6WRxBgBpuM3qvYK7v18fPhRM4g5aoa45EZA2rPVx5acQ2aAgYyqADjtiDwMV",
  "key44": "5B1ArsB8BMGZHyFf4LPK3wtzipiHXuEigBez4eY1noGvSxazw35hHSudHuJPWRiZRMBuf4L1XT45a1pQKr1xaTmX"
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
