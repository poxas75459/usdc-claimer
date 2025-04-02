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
    "5PhuzSYSf2upTr5CnKaC19AbGuHRri5AS9rkcY8EM9q3atN8iGi91VGUkQyKCA8FUg89kEtHEHUAKVmU4emUnCwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61exo28EjnCT6WY8g1BMZVMjSHeZ7srfvWGGvpH6EfKRHaM8zAHfQojrYfvkm1TcUsEDVw5gSFipv2GqBt7tiDht",
  "key1": "2B5m1GHwRyxehvFW8SaFCdQTTmyFtRS7hKHR6chdphdYwPm9VW8ZYWqWkyaGJM6vdhRqbj1seir5YXLVUhADTuAu",
  "key2": "9NCEsmff2h8eN2qLu7Ksxb5z4vaQSryHkSr4sC54QGjY9PuGzQ3gYN3bzdCSsMBNU8kpxnue9iDgtEXxyVj7iv2",
  "key3": "mfTBk186QjtRsiM1hKoWGDoRn4TiDVrBDDahZca7q2ARwpairhbRXLpzebeCFGvYa3Jsy7nBK419ewAnisAvU7z",
  "key4": "5EMKNjqnRXR4HmfqKLNUShrmoT3BadrMU1MYiwFp7Fz6q2MWWuyTegL7ihKMZKuVTeZAjnHKXC1qnjPWwnvYtzn2",
  "key5": "54tNg6CyeACYJXpHhEfcFUvqnqHX7DW7S1teTepBseSGmGKRC3GgCNbwdchN4m6SB2mWMLMAJoJw1rUD63idxn8s",
  "key6": "3K888snRSJRqgBDwhLau4vRWruu4gmLvecqTZrs8FtKmv7gU8iDFbiFyK9tqpaAA495naALMbwzZeeqDkqKAz7pK",
  "key7": "YwWeHX1pc86AbQrxQ6X9qE3DsNCfh1sb8nYC7S2NUc8J7VZw16JU5fMgeiSQn62boah2q1AAsVfJuQqpJAHFZX5",
  "key8": "4pZvjn422NUr9GDfWX6VH8VXsvSh6VHRyo8PiqWDaCWKSZbs6qLmLddkxctve2EEopq1QsDMtNBsMNv8QRopkejw",
  "key9": "nzsv2fUsqyhwa1rtpBmqRaGRASJuakA272Ucv69Ljj94ivYwBMapFYFuozxTEXteaGQt9zoqtpN2Kecxk9hhcxZ",
  "key10": "4RPv1LkZVHuVcgefyUCduDH4Kh9wyoY2U4hJ3K8nvX1qao6g5yQsc2hvwEwL3Kg8pPLa9RXbqDHPE7gJaEaUNEeB",
  "key11": "5qfiLS4j2aN2AHCEqr3gq6hycdhAf9yRmn5gkgtvYh3aB1kLmBU3TczFvX7KhuXnnH4hoQxCYfjAk9dAYrzKbVbJ",
  "key12": "3VSPBy7h5zbi8VRWjLMmHS3H1fa8sZegm8u4YsoWKqx2Rd2ofzcziv3mR6fWRiRX27ReyLrDAcyxpQdpKiHLHYZ4",
  "key13": "5F4EnoFRjSESFL7Yb8btTW7zxbkW26jdkZyuLTTtksAJVNdPq4wvrxpTwVdUvNMtxiDAUWdKzRkHReM7HPsh1cau",
  "key14": "MYLTQ2a85K7g5YmQ41pnwwaDFhGBggu3NKfm4dwxjyt4Lnwx8oXe3h1ieEZSxRsmMbHxQuBPnLbm75fsJfaghFM",
  "key15": "4KXcJraeUGUTj3gPMJKgGmHgZDkKWLMxzgXWZLUW513KggRv7XiDFq7rnk2Z94yJQJ1Y43DohodbKgiizdaVEet2",
  "key16": "5cwdRfxxSbQmgDV2yFxgkKHU3fykep5mbb36KcCamCKQu2iAy7tHwjqLypxQRtNWDJJUQ8NGGfN59BVnGfAcH3J1",
  "key17": "4YGSsAdLoLNXMDnjz2QzkmDKFe8wUUfHm258dQTonVBvuetwU5CjrnS5gtQqEcjDXAw8k7v7EBTb77Gkc1VvJpia",
  "key18": "3Vo2VGZb2uaSh1A5XkmFPpx8JnkNYf4ocd55E4RbNKRj9R94KhL51716q9Z9cvCxJWFxN2gsBRyFTE2QvKrNHz6W",
  "key19": "5qiNWiFouzm7iFk5jdy11mEio7aKixnBHNVCi927o1sNrBQctkGytYq1NwJaKVDx9rSAfHfpNFgADh9BqNq8BvcZ",
  "key20": "6mmU5c9fbDEaoLQqqH7oX19Evy5R75iSvaWqUJEJhhr3kxuBEBTyB5vvGXkps5tUpAj5BYKTS1gXbDn16MZr6rD",
  "key21": "2xLbA8aaEXN8A5S794GBeES8PKjRUkbroTZZNkWgLPHFJj1A6mECayHcTfAnruucuxese2qQhwuzVyb1pgwkQ8gi",
  "key22": "5rVyE3JkX7oxvSCYsWzSXkTCqwXar3cLYKPn3wBYLqCuft3JbuCwwUNuyaeC7rkHdJxCf3CBED4mPrahfVVinLXA",
  "key23": "4bZHXhF8quQDNnGRdNeWBoBsD25ajcZm5fZWmrp9ZbKQmrKSqXXcDbm3NPqDQdhawCNV4aQ6jMr2RMpoCTeX1NMB",
  "key24": "2UprAspzH2YRX8dzXzoGm8jFnNT8DtXCuvwCPtioGgNganrDBi68ZB9mrKgry4y837ko4ahTkwyWCZ9sdGujjdvT",
  "key25": "5UJSsAW2Sp1guZcHxDy9VMM4PfuBm9W3hntdHS3yRKNanfXt4benuc3tzGKMYDBLVUxfq2Jy3EGqE1YQKckTCa2Z",
  "key26": "KUeDxCqsCADt7bJeKqwsYeCi7RaUsJpenxd3kMee7JFLBhMAwiUYNTU1vv95SxFM1kh1eXMLpSxdBAAFHkXGwrd",
  "key27": "5WSP8bGkZJvspxxwNUW9hQT8GHYKxc3Zrr6x5gN2B2W9G3NYTFVm5UHLVmpTagSRo9Hf2aB9vCSJmLcdCid47CTo",
  "key28": "3zydukttCm52S6XsDmvQrgVuNXhwqHDVrC9UxJbTM4GZ9gYrS5tF1owJUofRx3qShxZpr9xDbsSJ3a6tGGEkZrq1",
  "key29": "bxqz2KNTKFiNr7qew7kNQeeb1i2tYKpUbgTVYyu21ePrZeoUp8q1VKmXLy5oZJNmccg1TgcpTCBy97kF1VgRFEv",
  "key30": "2gwfMBVj3dAFa4FizrRdkViv36hJLr3SKXKz7a1dxcybDkeTmV4SB7SsctpX3EfJurVuhRB3fMScQnc2WH8P17e",
  "key31": "2kQ9CnEjspR6cyHEaJymidPn4Pqn9yeWVSsLs87dKzMemMyrGE6cthNvNGUzcZzACuGSKuSEtgVpU7nNwbQmkvzB",
  "key32": "5qMM6RQBF9FyVuGRh4Vf8BohBYnXLaEW2ADMwyHbzt9oqXmkaRbSsGbgDcmS2rL9rx8UFt24H2FA7mFDjz8te66d",
  "key33": "MP2a5rg6AnwMPBoXj4ARurYqpVDpuobovLB1dk18tKbsQRiupQ9UBYgH9amWT4bzC23aE6X9uxs4R7XN28XkS4V",
  "key34": "285CiBjwanjsLH95F9GkM7Gqosb5W9tNghvVcrUd711gy31GUrSZWyXUqvaSMEh1WhhS85tFWDH13CUmHzfnLgq1",
  "key35": "4htyggA3fcrxUtTLnHsUVkrJN3qdRCidvWdK3kp2DfC6bMa74s5LG7AsXZF2u2iw3xic6spFGYv4p5SZTbWbwt52",
  "key36": "5QVAKp53E6uoSupXAB1vDrGoUBU5RmY9YjbETeRX4yeR2Dsrg3xTAy6924FBKJ4RggaxrMum1ipTRd7J3uLCAb6v",
  "key37": "4pRzCnHenBAEEgNFMDzSMiwrwdyA5qfQMc6YAk9H6fkHLdXio8iKXoVh5owwstcDQiJtHcyiPrDeeJ4hyDF7AKLF",
  "key38": "6Yvb4sstT9azJiAofdvASR8W1dxiNn68SxJT8GRuWuoLuBwBqzyNhRT9YC3J1F7q4XBKqe1V7Dn8rLs2fS3mo2u",
  "key39": "5QEV2PLZVmeWUrbc145CGgRL8vELBbfGA8md45C17A4E66L8iRf1A5y1vvoHJif4NbPVsPcmMTMoTeHLpeCrB45h",
  "key40": "55S1sXNNymsQei4pt9mq6NomCpYkgiZNgQFWYkq2tV2nUKrSQTA1qS2TnLbSEXq6NAcpirCeLEy64Vf1CdAupkCS"
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
