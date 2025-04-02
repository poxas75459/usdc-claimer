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
    "5eLeRu91PLAoiapgbGgrSAewHTJ64wHeQSiDAXATDEDbttPyDHjXCDkrXArvQPAzpfKgbrS66bHDYw6GiDN4kgXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QgN5f29Yu8aVTY8kvPjiapeQ95rwDou5b5Yzr3Dgu87jkzzJTkPwPV6fCuesydyDfHYtKUCLqab9zpXDn1MUi9",
  "key1": "VgfifbtC6Vs6aTseBNnBz7q55tevHTYYeW4mLLm3WS7Do87jShEoxYHq6gJqhTyeLvpJmdFkHxf1w9oELR3jbRQ",
  "key2": "2t23hrYz2tRVTEg4iBvrYTjCsdurxgnyjYrkFUf1YmXiMS2JGyn3vDkFCUu35cKz66tqYRznyEXTk3iPHzUNCgo",
  "key3": "3imxJJc2Z5k5WnmaXzXcDRVMqUiwujHU48nfQmZqMhkzDphXfdfraouDkhBpSecyTxW1nFfcQy7zM7suD8ckYXDr",
  "key4": "43m9j5cXvUJHSgYPndQCB5CYy5BwUpHBmSBuCyK27dyNNvre44i9MyJpauEvwVTNhmHFLdbR7KAPgvWZYFHLKdtw",
  "key5": "2wpYnENRrBrYwaXjNpmSC2u8NtC8XWZwpSzGAyEjzsb5iEZdjsedJKenV5ECVDB8eRJJHhX1NZKKhmGQcpMDzwHo",
  "key6": "5uakFxcd9h9cgbi9gBk6R3LgkK5ogQvHi4L9fjDf3eFaz6US5WqLbXPmPAvY8hFp3J2c43kDK9rvwP3kYSPiAPye",
  "key7": "ayKDi8k4t78fWxsM8qxMAacQqLPVyXHjdB2q5KyzAQVgkcRqoryKvcWK6ERDxJYiKmyJXejGBNCwMPT2Mbcc2N9",
  "key8": "3ah5TxW45BiZoqEbaNJPbFd9hBrq83sd91hWK9frWXQBMiow1hXVkiWZyrephjxZGnk8cNECRCufbD3KZtgWDLGh",
  "key9": "4KJRQdCjq5u5sZ6iXmLhn6wjcx3SjmdnBKd82zXnBauCve5xas69UKhkSukYv9nX1hiqWFeRPyzpbm2kaPsst2oQ",
  "key10": "g4rK3puDKXRsuMjGAMuABdN5GKAiJF38MC6Xf3PkfeKT26J4jwMAwhqNiQ4TgsV56DZeSWQodREfE5yqB7uhzST",
  "key11": "3ZWMJC4Fow3drvn3twZKf7Z8i29wc2PiP1Sge1eGQyk8Q3ZCxmLLiCGYFJYcEuUZobfpK2wFjwScGfASRiJVy7aJ",
  "key12": "2PLrVLkKGJc5TFLZUD8YQAWXGvrkfPNkMocZo5sVbcau9xzxFHP961ThXFNXoPuBHMMEpMTPhiq8a8MSCaBcLYqB",
  "key13": "4JEgQU9QTGtqqkSEHMM5kX7JdqbTRnYpDfy4jSkHfZZoxpZVDky51YK2FBJbemx2CWY2LbdR1eieHWBj6EpNsCRa",
  "key14": "5LKdwadVorGWk6gu2et3DEdiHKGU5G6aDXgUAYS26rxf936u7KcouiEXYnKCsN9NLchXttiF3WSxr5ft2pd8XEFS",
  "key15": "5KPcAKduSyG8GMZRjNkoWy8DWVu44N9LeYivZzc34wrhwdKkxWwAKBdcjp9qwEwuR5YnF3Bg5QuxPxqtxx2b5UM",
  "key16": "2YfBwXxbWyfSoTb642MxyHQtrG8zFMFfAnvEj29pXMMd5v4X5AxJ64nAW4zri1p3UjMyAVHwkudX4vBEFRAtcYG2",
  "key17": "3L7uUStkL19pMU8U5jKS8tDPkiZFvEvNarBTxMbEbJu1mbAn9Z9gT1d3cjQn2yaEt6w5Zbtb3X6Rg5B5fkjB4e5F",
  "key18": "37Ye7an1NPP5v3P2UKk1S392gUUKvTxJ2c3zGxkphBo2s45X5F2219NmprVvJ4K7GEouTsvaae584BzcxJ937Kf8",
  "key19": "2pnvw5qLpPyiWyfuqj9nPyBJHQ9u8r6ZfAdXxEDcZMx8mkunKSTbC21KSUfkWbZ3WEKE2trjhfzYSZm5gzp6pyon",
  "key20": "2iXubeGDKPoaGHFtvpseqXUdfEKTVGEcyCGVfAfvqpbVwL6q2Fct3ek1SEDRxsdHH7K7nVxMuBXrJEiw24SQBXFz",
  "key21": "5hrBQFaR469vTckRnmXcsCUuJfN3fGcCaJyWUDydGsiijgeJXBufsqS6GhrMBpkbyGNdZBw9SPXXPsfJXKgTMrdn",
  "key22": "4dEPBo8HP33uFX47MzTW8rrTjDuM8GBAZaBEb28KpKqiwDiWfh4nKb3S7HWHJm4AMhGU6kJLFg7xB67VvLSyq6km",
  "key23": "3P5WJFpNXyio59fScRcDnucmyw3MrhxzHkjYngMXHYxw6PDTjPK4nyfNn2EcS1t9V2aaf9Z8o6GtdBQD6GtcCqRT",
  "key24": "ZJesNjgEzb1Dk6Cwt86mpUvcfU4jZfa9Rjx5ZQCH3X3BvctguFmDwF7VyEgRK26MPyGNZyZUGEAcaXE9QCuS5xj",
  "key25": "3Q1VaHwEHH7CrkFwCqcCMDGHo3roXNsaL6N8oA7uRdJ38Lq4J3yJPSnCTweLJTN5JcZGyct2nnJXHthwRvSo8MpR",
  "key26": "vjJu7wdkkaztrxKHybsbRhnZ1L28QnYjnkxgFC2BewBUE3v8YLYL8EbFcsCW28P5pMsKwvXJBFgzzBEgRDbaPVv",
  "key27": "62AhEpTnCLe4hAQRB7V6LucUzPKrSYkJZW1GjqraCcPTd2F3DWxLQ5kzxrjCie8edgrroN6My18nj6WWgs6PFSpY",
  "key28": "2C36pfEbB9pMX96Fajgjtz8ro19ontbUXRJz5Y85s3jaMQ8juLggkFmBQ5fgHDkZBYbWgNBA8qYVmoXzxZDZy5zm",
  "key29": "3EMXC2dnEreZmR8JCgAci2qCVKeGbVfBNeVAMt8wwm4wasZY6ZsJDuYevuKFp6SSEXFTipsDcGtdChYBaawSE2Xi",
  "key30": "F9ZBH566Fyxv3aB1D8qYkYXFMz3we6GAR32szyR7MMHHdW9yr8Tcu5wd8wqEBxuFGE3kR5QeTqAv8yQsfRACA6G",
  "key31": "3uv9Ycq81KEwvN9QAPjGCaw5WJR6Fqre9dzdxgXrjYwfaoU9ZVohzhvRRDLvsxf195mzCGw2T5hKEavMkcAphYkq",
  "key32": "4M74dC6db34MBKYU4PcucQmxrjH5gQcZsGq1SaN73ogo1GsiWjtV7nX57gY3vvMigGb4v1PtY6FJmL1a9swT3PNA",
  "key33": "4VW4xkkbsAtEKDWvPMQWYwUNVNF2j4ohd54kGozqTGPzx2KmryJzuZv9SKVhQ9NfZxLaXJZSGvwWY2c7Be3Gsiky",
  "key34": "4dt1MSF434DLo4mUojoDPCDvFJg1ZHm1nezBkf8FQaFMVk8SYctCncCiRsd5sP1xWC9AqE71FBcFPZHJxjd7U7mZ"
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
