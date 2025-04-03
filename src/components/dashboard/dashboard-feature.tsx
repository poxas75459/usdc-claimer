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
    "5HFH95bZPyzeKGg3AsZRkjTr2WsYFsU7QTKf4YRzBY8MEsqLnJnQsGjf5essVgc5CADB6p3RTWAjMgW7kbkMuTL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLGeTdVAjDgjnKHurs2hNwCKNZU8dF5W1fEXVKnkdjWctKHJtHm4mbJi7ZtWoebuoK4bg13izzYMj7pCmEfnott",
  "key1": "tAC54JKR7EDSngxEmVE4wi3iq4AZoykQXetf6Ec9TgPYAknWaKni2KyoKKYcPEBnuPyMowKtYtw3R9mVTGqpMBe",
  "key2": "5zvbJKdHEdV3qp8j1fi1y3ax6XBZnztMRs9GUdFLZPZSXuSfEU3oYUdyZC9jKv8NnH78JnQPcQdukUgdvUNRFjwQ",
  "key3": "tWmdpDVM5FYvRvdfdBPPaejDb16oYHqDJPSpGynE59HpbBAFf81Nem5m7AcWqQNeJ4dvNDXT3wokCiKKKjbqANh",
  "key4": "4moCXmGwGYoHP4kYjJipXPixyHuxxA96ioqe3uNb9SqRZR8zQRd1MY2djtgBsx9aFjkstF9un9Dd4xxo7oC1ctwC",
  "key5": "3SLzYV6ARgkL6CjjzyYA7AMxBD9ap933JDV1QjYjHB6gDHCSrjH5JSJbh3mQuSRUPXDLsXWXZg8eSFyRdeLw1uBf",
  "key6": "5tr7ZWdj1ZcpBdebXzWj6jqvKi8BE4fhVozATS7cbPd1r8K6MMoCMvYjqPXiump6QzxWfsumSM2wXQYLW6Go4yvp",
  "key7": "2LwpNQaW8HkZwqBsXBmacUgGT3pqfGpsdQ6yeEPiAxN4bYTd66WQRavR7qwH83LVBcoNXnYQfXKC6csnoCeBX9Ct",
  "key8": "3PurJ6JKn5iyHcKQvbATjqHav4ob8Q52d4RBW1d6KXNv5uuR8qHJScPVVpDUUrgiK5bLg2kdjXPXS372BNNcVDDh",
  "key9": "5FTyZhiFmbdHBB8cvJSbKdUCT3ESUBE3tVD8fpCq2UiHnKti4nRDCGnUv3ZJM8p82tCC1ku1FuRxk8bbhGTopmSi",
  "key10": "4J7S133gbNWDwhxUjuefKGHfV8c5eotryxDBFzWGUjEcdKat8EpxTNKWGnmaH182AjsKs1Z5kbTN2uGsxYYjvAZc",
  "key11": "2qqNrja34ipCjM31cGkExQjwxh8L8wkxftnk9yhZMGT1APx4pAefRNV1myz4V3TupFioNEV5Yj7Bp8qrRCBJv5Xa",
  "key12": "2cezbrhSkMbuveuqLUYyRCVmYFTDmQGJyPanTiNNngUxqSfeydzmkmtv1Q3bnCrB2KcDHVBmZj3oGbpHVpQ3c5ws",
  "key13": "iffVAfw9jRjY4itQYgdLpKZrrX3BSosH3YtLN5P6SCTsxbwPDDFoyWpKGVrUDctf18ALeeDqt4LhyXV8Mu2KxGX",
  "key14": "3AjgUpck8t5PdViR8QuCQCCfNXnZaQaa32CNeeeCU4kjjg4aatQUfXWG3qjJN1f7JUCySbEeYXmKyPwkbYBzPPiB",
  "key15": "4A364B8hjRgkgs53CyYiTYoVnvReSiNpuyzU9FrTUYvjSuD1X4YZ5LqsnkSYeGvKLDUwyHxUMYKxih6tovuszcZu",
  "key16": "4Afee1HDnPKDVxohP56iduThnqo7CR4QJ5W3ALdxubCSTFqEPbk8HDWRFhKLKUpSQySjH2rSXWHUKSSeJhz8ba99",
  "key17": "HwQxWrFBvZ9TxmER2pTjCUgUA6xkkjMnvDk285NRL6GuEZjXWDApBYPbc8BsQ6j9ey36o18o5BGF9pf9GUpUcKx",
  "key18": "2N9z5T2kvfJTkunRok4ZotvtRdxiRKbWc1ZmnDwL2iJZ5PCqiKeEyfiSbhSmXRMTwZGnJ6MwU6ayTvn7yutqmSDa",
  "key19": "2LH7oe1xTXgX2UEuTkB77DzK48pFYH8cEqu5tDHjYPEEAgkAeYTUGtu2Kcvt94a4qdsJA5DmsUTz4zApMZXx9C51",
  "key20": "3M1LS1wRQpq7XX58jyXHcWVhLqUZXBX2jsZ7imUQBf5oukiHEsSQXhpJZfh51iayo3Qd5Y5tr8i9sve4RWDjGFwj",
  "key21": "4aQQTE1DuHWcXvW4NghwEmB1ztZaXtav8epM89mGuykM4CpSTw5rk1qRozj3CsG9XBikQ1VdA3Zyi8e6X32haURQ",
  "key22": "yRL2uFWBB8KiTsj3fFXZitvetjHVzGBDkQTPytNWoE28disNbiJ8EiPqHHNyqYmLP2dGqBsFKkZ1BTqfuLVCpWK",
  "key23": "5tqC7Ns9bPe6TLRQBbGogXW4XVUcxS7MZdKjdLDDWZdWXpaz1KdrH4wDJVUgy8zbP8r7iXUcbvMoWw25SnYbdKof",
  "key24": "2PFFawAvFxgNS5XrnXgH3yqcGVCkUEqEDUgSktxEGxacz51USapa9HqSDaJyFiiB2tkAMssMF6box5YocLvLRxFE",
  "key25": "5yPP4wZ1yYF5i1zm1PpXvrWZfZjA4MQUKVygXRz1mpAqBnuGS6FGRuJ6UYoEeCK7yBrcV9by6SPDckhddxGDtVDD",
  "key26": "bNpjix5J2FnQxAFht7HnD2WritPjZsu8xyC2PQ3iDJmCzgRwZdRm9UdQcbPDyUKPFNPJaxhN8AJU42Yd2QQ751z",
  "key27": "4jK5saPuNo42hpwv8iezcgdwgBhGhbsqhL5xjXMiydeNE7hdnpwKR66hnuWLanG1Yc9dpuiEy3vMcxRRv9fESS8J",
  "key28": "49W6QWd9JVoyW3nVQVetrKZrercyLFkVY8uvDJGdmkUGPi5JKPsEUwFFRToTkFtqXfamwuR2pMfEQfiu3K1YekVF",
  "key29": "5aeENfgaf4e34m3vQT45w4bo3VNYhVkzgi6sVg25h5ao2R1r9A29bhNb8924SC6BFqpzRmysHuK3Qvudk1kdi7ug",
  "key30": "5hm4EgX7eb3ze4e7XetJujfX5A1LddSvHAeKpdemEQa7Hi8Q93SNosndXzfAa666kzQq8urfZNuV6pk6gfvz3FFt",
  "key31": "3nYsKKA6Tf7iRRTzABPST7i11gJ4f5SXCpmE5Wh7FiM2w394jWkTjUTCUma7kVSJf59EXmN9tAZJ7uaCeLVsX7VQ",
  "key32": "3eG19vPyEeK34xD4wH1XRbzFDi6y2XWRgnQhgqws1Ry2CJ1Zjdgq3yzFJttureUJhdkVUjGttfukxkMghLg1xNU8",
  "key33": "5uwpYGqBqfy2VFdvkqiiyfY8DVfth4jePxWAzPippf1ZTA9bqjZEuQ8Ww2kCfQKzhj7T2A5QEPwb7YeV7ykM8FUZ",
  "key34": "2Rg5FSQ7UuEY8KMm5D3DdNH9hD5vF6msoXqCaAm4UwBFbUZfwNkn1FfpGFVqmHDwYqdW7fMvKdtW5WX35Jo2uiDx",
  "key35": "5hLNvpLWSg4nphXRUv5i8jUfLmDYWbcyRgQaGm459zHtduZEfpSPEkPSQX1y551w37RxNLVe1Buu5qVFeShJAv7b",
  "key36": "2MSVLrBJJ8hEH8F1ditRw6FrbALMos8Cm7tuS3dVUDDgvVZqwGzxp7nvqhiyuc6TGcFKzKs3uhfsmJAwrvxmkj2h",
  "key37": "2S8REA9i4SYRfVUEaCqXcCdGUQkkSfo7SxU5DiBpKWfJkTfn8q54yFxwvFmBG6BEpX4BRwjK3AschqyUJoc2M8x7",
  "key38": "fKEcrsNGqn3LnAtWjKWqwBeoAjmxmmdTncpHHSoJXAxj6kfx9hKKbqG837fvNGDzGFwfn3hZfpiqGQSMEK7JRJi",
  "key39": "44s4smQTD7eHu7YDXP6Cxdis6We3nwf9FQQVLvFt1M1u6oXNEr13y2MsM6TwK2EfJFDrs3B2mphBv6DqsDTnYF3t"
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
