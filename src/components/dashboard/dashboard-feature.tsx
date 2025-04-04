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
    "83FaheDGsX1YkYVmtwgwPqEF9Fr2rjCjY9vhHzLR15dvyjTMUWF38KqUnDwfT4gj2FCCAWk5ChQC1EGZtrN89kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFMNVaEV4FGfuquUxeLCUQt5AGgzjXMzftw5vie23eTMtFbw133C25cEkYjEi62wPKrkKyJDNJc72t1XPPfa6be",
  "key1": "3QUxGDu1AnXkrLt8cW44jexrwcQyYgTa5sQrxy3SQeocM2Day8jVhnhHWEtKwtLQvaSLpKWtgh4Rrnb1C17W19jb",
  "key2": "3DBkZp56PTUpKLSh94VTcA8iLbWpzVuNHWLPovGnUGnMFUMuzYyCj3zNEVuHjbNHW86s6PNQUz4XsThbMZS6kdrf",
  "key3": "3D6kmjn3waQNfHLkwAxkRUeZFvhppAiM81sKyQC9CkNfZAeBhFgh6bw87auD3P5ctemLLBviRN3YPdQXZvp6Q3Uq",
  "key4": "JEaGaTSqM17uEjPzu1ndpL8WmJqetGYZPdxWkdPUUPFgxBrnpTxozbuP2aBzCkfoY2GvoH2R3z22A1RzQknLQ2L",
  "key5": "3jsH8zdacKKUi4UNYUJmYiVdutebAFgACeSJu2f8RzuAUHeRuQY69phCxLmQykTnv9zY3tZk7Yh2wgKvUnkDqpxb",
  "key6": "3tmeZvUGem893WpW9rqFV2g64ZemYFmoSywM45Z7hELZzrb7isV6DBdqafThi3ctoJV4n7rd6oWYYEfCrSYkw73U",
  "key7": "5yDjddM7bTFc8gsi7axcSBMvBCx3wiugUXqUK6ppGLk6Ny6aGe4SgH9tC54JD2iD6ZJrZJ2TXKRUYXbrswpBh7pY",
  "key8": "4LMJygtHV2BhMXTXYdVsxNaSLfCh5bAPjoTTz7BkrwWwL4VDMqQXtkCsgwYitrxWw1Uy6pGED1eWyLf2WmaLeHTh",
  "key9": "63PtsxQaTBeW81ybjLdud64nooVEmUqmJrE7WTaHYUFULvGWJnN8QPXjBEFnTVtmCuZd3oDq366gY6oPEBSYjxeC",
  "key10": "3nLkqYxvsqxaiArPiXKndMdW6xV177QG6yNNCYXzf6UuAjhM95PXZLs4FgXENaTmueeA7iCrosKtqiowQYyzWvuz",
  "key11": "4ZyhvpGxFeYFxmReKFdbk4DWfWpgs1SrPVWbsBbq5rovSRUszZNF5kvcQT8QAanq2vVQwV3vnJ2gXND9ypZD9XQu",
  "key12": "57nEP8yYDXCd6hWZ2cCZ2cLxayLdU7NdnSKRK47hG3QDVypPad8UNbaCwX2JN1nhrWZtzBfGqoNDEK4G5f1Hwyhz",
  "key13": "yW87TWj1ux9KXJnYz5yWLmecCZXjDuHvv4eL56ajc3NDo8XQ3HboZ9Ve6UABBc3kvntpew7kC7kehV97toLm79k",
  "key14": "44JazRDhV7UXYVE7ByUqHP7YjnJsvKewzR6qt75DdaXarb2DAFMsgCCE45uSRLtB5DjUYVqswi9AJp3X2BNQ9zmN",
  "key15": "3J5itn47gNcT3HFMsGmYou8shZvZWLK4JndJWx5XAAsMoAxBX4HokPhoFC2uiVb1HdbEhgLzGwWr7My3YiwgQ6oe",
  "key16": "9kUxUGgemr2MXWYa8uxsBneuDW4nRCZn1jZEhYciGKj9tL2EPzDWyF8V4fiGVGEgAMWqvd84ah3B1EP6wx4MfEY",
  "key17": "47NZbaV1ocKQzHnGCk8Ymtr4zeY3Jss4yHZhypwmjLp1ujXenYkXmfPfpZ9w75w5xnnMGcgfgqRkTMUmutjxG95b",
  "key18": "53JJmnEs3bGoDtV1ihdUnuBuZzZFgm4exYRk2GXN6icHQVoJ4dY4KUDdVgiG8V7FdStNHRVuJptnN6nrU8zLAuo8",
  "key19": "4tJA3GFDGEC24zaQSmtHaTCX2ek8kkr9Zv1UyYL8sQpdpxiFLNu5pVA2JSudDxW2EHA9xogHswLVktRdmjYvxzM2",
  "key20": "2KCr8YwoT3PecHwEvib6WZTp2etc9jKkMYDZCRbJdSrx6u3AaSZiG7NKRq8tWBekhw1mgZuB8FsYYqrwfho8fK2W",
  "key21": "56nWtZJLFGmNeNaV4qs2t1aozdDxLQY9a9WRYW9U45vHz1AvmQsHGT8zb9VSqCat4dUQTvRgQSBCjJgiN94FfeZf",
  "key22": "4YKoXtLr3b78oq3yE5wqwX7kkk7piazQMvaRFS6NQbAz4Xkrmf3RcJn4uT7jDLZQKmQ88GGwwGabPaWH1SZVTup2",
  "key23": "5mi2oFaK9AkE6fE4EtGKjZNFU3d211UVSShrwTd4DUk6uLQVfgFpQG6Hkvr3B6YZnNU9P9VtB343GM1p9ieSq49C",
  "key24": "2WRZUPt1v7HKSJ7WGNwsUAf4shTZmQyNpqQ2y7cLWFyaFi2e4g8gizS7gjgRYjR4bXzxahhXJyZGhiZYTUam1eKD",
  "key25": "31F7acLRZ5vunQhw9UZtwtM5XBVDs76Fsu7tpRV6Gg2TgQMPjjyauqpU9cJiEhcepNJHBEXbXiPEGFii1xAgnPZ9",
  "key26": "2QRr8H8ZbQXTkSqp3d3XUrdg4nAAbErW1Sapdrq2BnaXiLPxpdJ7xzaksZnLacVYnCPFTjjkWAJMhaT4XUhe3oeB",
  "key27": "3TJv7baNq4m3djNMdnqgzm9zxQWH3r6UehLwDBFosV2bt8NfhGiK6bU9QMzWStfrWWm7uoMKyQbVXexfanWMAfty",
  "key28": "PnqjwSVesZyBcx6GUbaspyGbo5PpXncgzeM6uo9euAiU6F71TD4Tp25nebPmbLcyMQjkFp3RiNT1TgfY4AYMht2",
  "key29": "3AiqCM5oGLwbYJF3eyTa9rScnUgUioTLWYWsApgGBiHbsRcS8vYejCjCP29ooy2tjKv5W4RonhhRPerfrHwMJyqS",
  "key30": "5iRS1SznoXWeY2j5YwW5aWXgjEA9vDjCvD8pcWn2jGaJ8kdketM7Zsny148c75ggPypqpNg861SAuaCGaRMST8sR",
  "key31": "41i1KKLf5aELkNzfkcUKuLU2n6QyPrF1tcPGHHZWdtAT4t8kpGwamQifVayj9G5soaL2xLhGCVGhuQh5BT9zuqQt",
  "key32": "67XM3f1jZTawEhzK2Wc7mfpPXSQwT3T1prRsGLtqU63pYzdcKbP11uavEeY7m6VcSBGakMiYcXy7Ykm3Sp5zdn7n",
  "key33": "45XkvvxUiC2qA9aQ144th9Lzx11xkKFWdAuYhK5etSgguMCG3APi76rWpUYGomfHVPuntGT9Yn3oBfACKAqNCTbN",
  "key34": "3v9MyV3qozxivH3evCGmC4uxSqyUL6GoRtH8tnt2PutmbSeHyJqVvGGmdpFYtavRSFKjdkVJYay1uyk1mTaEox8",
  "key35": "62uwPo7kddw7s9xoKzDkCC3R4DtQqgmjqbKXsY5My77d5Eh1nKmmXfufaxjZZWxogYoHPDgLAfsmchTLxaTdE1dp",
  "key36": "5CNaC5xCzQa1mrvmg9K8s3LKD5rKRmGusCFMxszsn93bciqh5LKQEGhkgj7QQZHLb5W5VCbQxUMvGtskeK68z6Z1",
  "key37": "D9aU21yXSZGGSexfUbKm31xLxV2NZYCXzYREvPMYvEDihcQDk5xnAjuNbRDtg9fohd8GoLqXN1dZw2XdHqLPqry",
  "key38": "2X7A92829W1gWAjDaVTxpdHuq1ueoZ4k2XqVHeD6kGCgvbuk9zavNdpLGmuF8rJjxfwmhmMU9e4hAT1Leu8V7iLG",
  "key39": "2YYkjzwqQPshjEN5G1QAvQYxAtuo66HadeBW3iTPBVvK7342W2s7m38oMZppMxncXFgmT3fXQqUURSGeBQMRomaV",
  "key40": "DRoD9iCR45u7VqfioPBs1wp18ZyaNy3KpyCHvtD7f4UrJkKiPcaUJck2egBCWGPGaXzLs9LE5vBrawEKQ3RYQFG",
  "key41": "5Fo4vxqgZ54JtWiEcQYcfd9i3K3SHsinwTXqsqJtnPoifph6ntxCvSc2KbDdo2bKrRVvSsGTggynwebgp3fvt1q7"
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
