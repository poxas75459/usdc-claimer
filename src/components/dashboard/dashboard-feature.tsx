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
    "3T6dVuryztCHLVohR3U3TQsZmuJAA89t8cLerN6ty2GVRDT17zPMo6meRs9vANrGpfePLn77oqSx6jG3aC6XSv3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aV6aHJjGVwGdH73wjqKmEXixNp2YpBgdSQiCpoUoqukFLxgUxS4FSkRDC9Y6Bfuyrd5KvxSxtp8dtuw6SyXzUEh",
  "key1": "5qrP8Ysz4zqQUUgmuDTaEp4Gu2wZyFmwpoFBwV84bi1RoivW91LRSrvkwbM4w3uBtyVyTrdBw68JPSuLHU5zUkM9",
  "key2": "XYVS8cPjewTJ2dJfDL6fbMaZh4bGCM31bjjVuzeh4hvxSdtkP3MqchYXdqBZpT53ju6g7TCCcMNWVJr8LYGQtxt",
  "key3": "4tsK8MNjQderLyaTHUUPGGqAArBHsmE9kzB6jiTB12tf7DrR4Ftxg3oY44MvjSGjJ7ndyQEu9GTJpPwXXYfKDWx9",
  "key4": "QswPPzQqqFPWsBRkqCM9Y6d8wzbvg3FgXPxJ8gLpBEGN2Q6TB9AS2ECzUAFQvcyeBuS9Sxn4SndgKe8YGkFasQ8",
  "key5": "objzD6z3sSSo84zCghGoDw5FX59XidohWPJBPdBF3Pf5f8CqBWL8DdYV4BpzNzjHjZ4S1senGc2SJwhv4ZzM36e",
  "key6": "62iXdHxwBskxoKW8vNoMyFNAAcoNzqWQQyaaXukiNHjxdSPYqpSzWsSrFKWPHWZGNRF3H2sKVnpNkzeJcdfK4MN2",
  "key7": "5CCJbZxKyG55vsf4pKbW6FMzgQ2C7b6zV4qudygAHnmYfVJyuCtQDWYaAP7Yb6ufNhhs7PNHfxij6D61unmrzzKn",
  "key8": "5VZYAQt9d3hCUApvCouFzgVsSuwvsfaPGvJNnqHdV13PPaqB4cQKswGB5soMGCwv7T1Sga9cCiEihbp2NzZmReg5",
  "key9": "3aZbU2pJeg1SHK3NGTBnsJvnZ34GCVA4qnyfkQKYGrDqD4ArMDqPio6nM9x9gUYbdpmyh354fCfRtjprpfdcvBZw",
  "key10": "2JXQ6Fb3E5UfR66BuY9fTgTnSbyjRMpgG3SnUChJm6pUXycqAfNpyucoA95uNtw9C5xpwUdXV7B6q4nJpMx2QmzG",
  "key11": "mDByCaSnycrZWZPpN1B7hKexYuQsT73S1472jj93F8yeYNeNX9PdyTYzJnTFRSkJu7WwiptzN8DQs4VUHFmkpLK",
  "key12": "3d1jargnYSMeEXU3zajBHQ7FD7ASVWPN4s3tffjkDADqey3312gTppXNpdbu8cyp7Zb5ingVmfrDHMXQhkrXpT56",
  "key13": "5RqxMMPmTPP81sfhp4BaWbcYbE5KpRJEFyf5XNFtaX5giT1KVkhE6qHj7WbvbKm37LRtsEWzTUazVxJpnxC1MdXH",
  "key14": "jdxCLGkQKSCUTU5DYCNuoQNXtLkVySrBj3qjW6uKPxizssE6FbcmJxMgzSJV6jtjx3LNuhpokQVTW3euddaiZ8B",
  "key15": "4oegELvoXD9EjV6LaQHYHJjDkkyKKRGAbiBg74bSXGWrMaUzyQkhuRs5NH5XXj8bKkExT13iRdbpzwS7QPqi26D5",
  "key16": "5FWSWwBa8YFtYs3Y8VasXTo635AAhrapQWGuTsm3tUgkPwmjaqM9DY93FWgMuqqvERRyNKAVTtMhyDaaCEXnFjyU",
  "key17": "2JygknPjwnjJPiERXwxbyz9KmbeCWvuDhZRNTJqAe3zxMveXmk5EQ8DzcNj5UM2tGRcWAdXYkodhYCzj9aB9TFYm",
  "key18": "2a9yB8SWtu31XxtNugoAYeT1hn18U84YhiCtnvcduPfnFYaaxBwnm5V6ReQL1EVC6jhX5QqKLEtv1eLifijDmjGD",
  "key19": "58Qsw1ZgWx87wXZXireiv7Vjqo7i1sEJfKRP8BA6mfLwbQdtfqjEFKjQAH1EnEEkXLdk41hqWVShe1B2d5UWki4T",
  "key20": "2EkearJGmf9SSZ4XgKaiuV3j76zYUGbuawCR4bXmr8KSfEJFcP6NZjwzJoQQCa3JZ2EpfnEDXJPmBqwQeYaVzfPn",
  "key21": "5WJW2MzGe8NqAmysBki1R2Bketw4cvetLuzgQH9QPo2nVUYqW11jyqS8ph3YaBT5XZe1crcGhCMNKZysarquDCAi",
  "key22": "5zP1XaCSCC3LPrpRNcsoBU9LJKEtz2Trup6hbre2w8HWcE4xpG98uK1nHgG2gvH5gDcB8nxXuDFLbfsN93xz6E53",
  "key23": "3u7SVUA8Fk8UyJqFcMQRCNPB3AesmSgzjqmTNvDCWmsnaJGpZvgZP2svDz5cQHs3h54oCCpLnK17mQdskhRdtr2W",
  "key24": "3j4GsjtmUDp4yiDt7qRFoRDZ6RAmfJM1bx2HbBjTFp8PSTWawS1MZAK3zVnZSh4RXvmu6agAjm23L3SmKfhcqx5w",
  "key25": "3SSR4Pzdg9BzrGjgxC7xJQratZTzkkp1WpZerDkJ6ZJxM6KUPb2kJUB7wqR954oZpHo9bWcX3umqX4LBHuYuS7UL",
  "key26": "4XTNGmUp3E3SN7H9pP5Embwmh1dv4FH8Mtpd5men2XmWabUkXz4ikhivEtn7ZjYgLUnXKDbuMWjpK7S6cu8dxoam",
  "key27": "4mNdNcAxxKZQkXGSXw62KFPXjhuBowxPqUViciyE6vPVuTpSbzszwJxuVKuBCssZi7BPsu5RTasEVmtWQA7PHpX4",
  "key28": "5pfjnimnjhKpSrDSD8iW1w8AA9riH79xsds5p46gJqJDRfnsFw2BnnyB6dPnKqeztUKVshGyg73LjLeid1McbM7q",
  "key29": "43emVg91WUNB5xRxsVcHtpGthE4sEi5UEgMdUmmZ6mdLLoBZB1fs8sED7FSXbwiZfG2MtHQPtuUuGyt5KfaNX3w6",
  "key30": "X3BL6MzMWbYYJqMRLqjc6cUcHZv2RNVGALCVFP3PVTyUDAjtM5KyYmfppe7CBhYqRfqten4DkvREEKvz8sE4u5E",
  "key31": "4ACXitfKs1tbaMvbQef32wMQm6DvQG5KQmpbzPVPwUM1gw8a4t7cnAVuy31wG16F3hNJ5cy7DVyxngg556Ghmo3i",
  "key32": "2aP9ycosjBraeT2iw7ATh4R2v7BUgSN3SyAJGj5QQXpDXQ89JL6pwPxKjJZ4A4XrXypPbqXZUbc7PC3cm57w6iJ1",
  "key33": "5ZFzzLC6kf335pspqwiyMHzgTrujr7k5aeQUWJqQXf4T33u3yBHV6BfoNii6HzvG5mH8ackiRGqEjSFDnwJCumj8",
  "key34": "5UeA8BbWVBv2GsPNXgTqH3xAS5cnEBL8SQgJen5vPz8UoxwxhxD8ZPhDv8sZHimyvFgf17zYMtAdof3AQC17V6zF",
  "key35": "47Zdf91MYoeszA4zCFTKG5e8ZdcymVPahj97w8HbTg9KDzedSdmYgrfqkqYe7rkeWbjVP3yuNryum749ugE9hozy",
  "key36": "2S6feNCLHdmhoVwx5HwB85M6LwM5i94cB6K2iTUatydNJdq8KwLBpzThTZJcGZRypUgrPN6LTRWejm7FrFZyFN4E",
  "key37": "2BiB5rXC56Xur5tGdg3efapLipVAKr16Yr8HN3aczfksF9qDyqPyZEGhtTUpbKTXNk4rTWPfE1CZ4UTJ6TqFhUJG",
  "key38": "57mEv6Xfz6B9uhonWubo7VzugBCA7hkmdggCMdwDerMyS8M6jkm1t5tC6sVGi2cCzthjbcQomLjhLL57WYFXSumn",
  "key39": "5z8q186qd9cwUmQpK2F51zkoZrABSXGerkD2LMYkgSiDPsq8JBCkDPph9GpYFxtUrBhGJ92TbqWDBYwqq6HA9QUR"
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
