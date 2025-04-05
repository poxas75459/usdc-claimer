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
    "3FSeUt8NXvnWMVDWSyeA4iF86nd6K8kbGgneqe7g2Wdv4K8mZbde2U7oCVYvggDYuAF6ej7uTyzmS4JX5Sz5Vo8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZgWYoL5huRPHBnnhcwQKcSAX7G9QRvc6MJqp9cuP8QNLsGfTibFGxSUqcbvf6iw9m72FsLa7Dm4u6djaREhkt5",
  "key1": "4PzNAob9EqDyLjZc2yFEWgFAR7EUKbk3X1WhMo5S4Zow8VHqjnVptQsVVVajUVTLtWbZiXQMJV4qpn5XBoFEAxZE",
  "key2": "mZbGoR8RSaD3jwjSz4zahY4MhxDWS141AdCfuaDKYwp9HjDXDCtKd5d2okRY49DjaULWq9hSmZBVxcHg9S64KWb",
  "key3": "2YXrziuTbFfA31yCPHxN9GF4sxJvJR6Ec4uNjVETT6oT26h9gTBcmgrBu9Avr8DRSY9M4gfeXgFzUAd2RfuQnyHS",
  "key4": "xUScjd7iCi9pbjrHFqnUG1XMP3PHJtEvHLPEDxyUfqqhg5JFQ51vwvcMBmEz7fZYv5pf1emk65AH8u4yY8NBP7q",
  "key5": "5kTjbYadY6sAkxH7AaeURjTLmvadv7DTGuHipTnktEXugh6oMuXYnqRnHQyX52M1Yj8jX5xep4upZDxdSxDDp8A",
  "key6": "3ffxQuqKdrJRcpxR4ridUr1xyeeYQ7SxJqK3QE5pXv8FJL4opcq2sfLQcAtCZABMBYAk9Zv5Ps8TenHTu4oPhhau",
  "key7": "2uBvxbyMs9BpBHXWhJKyBMVJgSpQ4QReVujV9py1JeTswe7xV4hDxoQkCFhDrYiaZzuAP8VW4nE91JPPD7Sp7TSr",
  "key8": "4EU79d2VEhczW5CnFNPMHoZTfEykUveT4Cvq7ESYBDb4HgTvn8GaCRvQkUnkdYtva88cepV8ut43xUYKMzAZEXzb",
  "key9": "bkm9KJjFDhLyyeMGApMwgS4zRfEyCGBr6VoWL4wQCsxGxn5tHkfsBurzRVeoMvC8CLWrkKrD34JNDwqrksBKUYZ",
  "key10": "2jviFM1CBuiCLXZ2Lr9QMDWR93nnUt7xjz3TziqctGyqyoKZkPSgx1WwAN1XndKqi9RUm8dt2RDvxv86S3e8yR6F",
  "key11": "1cDG823g2yjUFzkyTZBe5Z7PsV1rfugWFvRVLpwRBVNTMt7JgxPS5Mw489UtsfqudFCh69QgwMULqTh3Q6SKRhn",
  "key12": "27xszeDzdsMwEkWkS5io6FitKaLxr7itr4ezXHApRANCPYGawTMuYCY6qWTNEH1naEsk7Hps1FBgUvJC7N2wahyc",
  "key13": "mLY6bL3BNFuvFgBHdaLXhwRA45wsuHwTsgb1EKTUz4X9eEjUwsTpPpt6DviM5Bztobjt7VLFerCRKksf6DinJKL",
  "key14": "tgNd2BdVbAwqV822EtKccpKukD9UjNBYMA7UJmd3B1RRJ1GuwcgfKqJUXwkWwftAVBZ27GAiGwouspDnzbwpKuQ",
  "key15": "5g51csyvMpxa9b8ijqFatm6ebHcqgMRQmH3ZBKDyTsWjQV6GLjca7sqVdVF1VpQidCRnXXqV5dHJfzLpSSssEhg7",
  "key16": "3P2puHtLPP8MGjSTENGEPyimSNupB3oXBn6h73iaRUWK9bKCAQKoTW2J4szvrmj1zruiscx783SVfCvcvSgpcJSe",
  "key17": "5admL6MZNzqs8j2TecFRxnxHBDyP5kgxGQauSWUzknNSka6u9dqD16qD5wpVFzesVZuK5u4c8W3iWq1XqXT69qjP",
  "key18": "sEAJscZvWYSCxiTd6ZrXFrTt2HRbSoMZ1tkhoHWXqXEczQEpLubmBFxAqtoF9V1j1R3j8n5pbzoLm8crjjLcmAJ",
  "key19": "sXRwJU4CgnJ3vcMEDb8B9GKiiZekuJ16iDvKegh1wzpRyhQuqy5PaNE3LrxKDG4RwzD75336t9dNmXqd22WqKcq",
  "key20": "HarA2Z27hYi7JF6fa3b9tA7LG4JTtvFEWSADhfQEiz8Z2NrXaNDvfbnLUKX3wRAuUWGPGS5WhUZDNMetjkxqfFA",
  "key21": "3GPBkcnPq6vHGLQEwjNhRAxcRCFAuLDQ1pWqn7PQHq6PmeHwA6SZhSfWUjDj9ceJMT8xgo4wj6Zr9ipoJNaEFhxh",
  "key22": "5YU1mJrnW3DJ1QeFHqNn7ahAAESj1ABNdb9wErexuwktgZkXt9PvTvAmQwEuNqMPnfJRsM3cbxUXqNcAcwof45C",
  "key23": "63RoQ8DvqbbKDEpKDYuqL2pd7WeU2Dz1Uz4oD4i3tpHgoDr5VGfGUTfFce3nh9o3LEFmfZy6cktNxCdpZJ2vRmT4",
  "key24": "2ZPvCFtF2tKzEzKA9igdtxNhHXkMFdNuPmrKAVsi4YtGAtc52ii3HLr7wHDFp2oNg39PrRo9Yq9dyh75dmwamRpj",
  "key25": "1u2q6JrVfRxGuCTg8sYNXxmPwCC6NSjR2u38XxhwPQMT8yFcp26owvjYn2sALQa2Pzr7rPGQ94FmKo5GG7aq5S3",
  "key26": "2kpQcrwEx9Bs9W6B2WkH2bMFfAjPdP1QrW1LG39g7Judqg1dTK3WbaFcgfdNFLtFkkMjXFXtPSgTVuwsht22hn1q",
  "key27": "2nrnRAE42kD69oRmCaerzgAGdqMaR5JwkujBxAcYWv49QBJzBDK42zQG8LHtxHqQX25vhttKvLR2HU7P1ySHcQ6a",
  "key28": "4StdiHzETsWXjQ4pdd2EMEjxm33tZKfsGqBsBHzbdiJddShSVveq6ALxSHJvEc9yVfcKbjdTPaZSq5YxxwzcrFjY",
  "key29": "3pBqRfDUpjQBiPgsZSyp6qk9TzrGjUsZ9tsga2urnekgQTmwDguhqJebheA47H6kSCC27hubwHZmTuQRd76C631V",
  "key30": "3QtNVtfeGtbzR8aM7dusFuX1pGaioCQkzuAtgmZUsX3N1Do6LaLuihTwUzpdsJVsHLLzBKYCtTxSNFpUqtRfGap2",
  "key31": "5hi3WbLLeQy64E8TwGcZdZeZ2CdtXQR1xSJAbjm8dbXnGaiqsLcB8NhnFG53LiPL82mUCKdQwkL8nHvi8CfWjbwH",
  "key32": "2TUt8zxpCEeBZ2STVPN7DWtTt15CMevyxeJTrCgutUq5jr1kDmjbHVA6qqPxoiZn7pXEnW7ZKbEgtnc76YzgYbTq",
  "key33": "3xSGymksWL2NBDLFjYF3FumyBcBm6gQ6Hbs3CZwbkL6Fg26ji1wojZMmWDTAqgNefE8mh9mq67vM4actFD8UxMM8"
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
