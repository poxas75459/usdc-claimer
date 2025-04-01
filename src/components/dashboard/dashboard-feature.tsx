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
    "45486CKWjAsrhGWuDkLLazci7sU6VW31bSF3qomUF46hYinQDzkPVWRUcBxeAX479vxtS3erTd2QbmsPVizbBnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjH9oPb7d8as9zDfC1GWHdCh7EAi3MEz5RuFgH8RBtYUCw1pvpeSex6V2mLnJuXPB81HMG4vbSeUTvH3smvGtNH",
  "key1": "5TT3fi81cgTqexpSWGXAepTMfG9eFNdoXhQXhvTcgK9FR5Amnvwguep7ijmN5pvGCVabzx8xZfUv29BhNvFskCtv",
  "key2": "4nmZsr6m9nPVvSRz6ssprCvN77sQhY2TKzGsR9m4F8wuHec84pU2Y7fzmyLWpjmQd2yEDhuhnJJS5jYEsN5PdsAN",
  "key3": "2zFUxKFRidaeLDi3QYpMR1wA3YGnxGL5o36rTwpfo96Hc98sX5BwBvr1oFt9o27vxywpyqYg4Vcp7QiCW3NbkdSn",
  "key4": "4CmtpUBFMrjjVYudV41H3RGQJrwGfXGKWcDRWZabPU8pUiip7kxHzEddyE1Zk1eu67qzjhnh3SeWJgeTFGL5rexa",
  "key5": "4JxCPwKQMZTtHJeqJeWLFTr3R4cpiR5GZyYtund91yddmaxBAH7VCEDDgF17L6jRY8iptZrBBGEQDgMhbkJC3gDj",
  "key6": "2odSXjpQbu4bwKotgjh1HtGzcG8FnwPAdonDby6LyC5s2xXWgsQi69j3Z87pMAKWsNygtaUAvbXvLHM1vsVP7TL6",
  "key7": "2Mbf4Z4aP1S8ZRmWnVnhekCQvmHVentyMWknEWJG11sJRDv9EkcT2M7v98S9wyAYYB1wWsFyZAke7oXfHpay7wke",
  "key8": "831mZ69quYPorpwY4Q54Fu7XeYHmkUGcuSXR7P6SD8hUTfEmodscCDi8MsmWhcD1v1UBWx2syoL5xcFov77fFCs",
  "key9": "G4jJZu5uH1fKc8TDU7hh3hZsmApZNuwHjXFS8FRoH2Xg2es9PmH36g2gyb1WYF3KnpJQnSLkveYXtPnViG2GxKt",
  "key10": "aDUt7XfFgkp7rTUB9RvVjg3oopAm73gn15an49Y86VDkqpv8LsBkNkRSL7D4AsoPQfprheXTFuezsJ6oLDqcpaz",
  "key11": "359RrKzdz4n7Fbqnuq2J7YrHBoT5DtRDbWVDeZ5tGDQ5jsgsYPyyovYoVvL7cYWcSAnun6kU7FLcLv3MNe6pp97F",
  "key12": "nTPqDmvqUsHXTGE96R55kpXaSfqu3XTwZywVDPKJZqrMwrowEVf9kf48TDnP5cb4bEaAgj2rrAF7boLeTYrZExp",
  "key13": "9hLsvzxdT1iKSbXcpyYEnGYYBywEdVe73dHV4t69wwELVfowARa1XCdE5J6GQDRJTif519ZAweugeY5UYdBEsRB",
  "key14": "5C8RBviTHUgSfxsK3C8v6Zj4aVsXERZVGLBX32EpwMFCoEMv29MjrtqkQ3eCmSM2q6uC42it5V3xZ1CKdPbneP4j",
  "key15": "ANDBdNDeR3ueExnTcbp19m1gKiwcmfHjazyUz8f6KhTifyXwRVxJ5zXVJ47VAC262FNV6Vw6jHwD3cDhSCnxMmH",
  "key16": "54qRs3aXB5x1QNHrzh6znJ3HadqBv2BzmpvCyRBtMzRA5Bu5upPD7juqzLX3b5gziEsjzDgFFoQ4nJwCK1cLBhs3",
  "key17": "2buHxr7dWniL2qr5hBuGpBefeK1tgHwDypbHYqmhaSjmWRDYn2Ut9DEJS3zR8xdvsnr2Sc15oncJnosq7vXcCfkb",
  "key18": "34hihH75TshtUSf5mFqaZa6Q47V8vGiLshgcSkMCd6SoULmvE8Ku2FEH1SEUwoVFFJqCXDvLM5X9y22fRG6Nu52L",
  "key19": "Bf6b4WEkyNQNonmMQxFPsixADwTURq1azMDPaexXAzXB4LZAkzcQCAb4ujEvZzSA798Qs2H6Dgp8MnpUaSbV3o7",
  "key20": "3HMB2C21XEJjvQdp2ovsW5765VAP3efkdE5LCE5CuuweviPthjumLhLjXof1khQYHxi4sotWQkpbfPkyNWEuGSse",
  "key21": "3X6fUgiQmsnai5xXxFa5emEFmb7K3AVEMmxNk9XYQNmybU9pvhqq1Qc2xNngwA18FCvdfTj2mQhELYuonCroHkb3",
  "key22": "48BKSRnnEQA6hrHzV6wZru9nPyudL8jGiH1uSCyYEDEZw14CxLkH8jCvTSYX6SzpKPPskj5dNQ21KKPk4DepZcrb",
  "key23": "4oY6BgAbdJDQCJqYnHdfsM4SX8moyg9a32TtEqK47zpzurDzxyX4oppJMEEEJvvZuqr1rVu9VZTNhHyVZ3FRyXKt",
  "key24": "A4e7TZy9qBozyWf5rhkzCT683fWKhgNcPKCuFVJjEZ7NCCNtYwhNaj2DJR3rH5KQ2BGzZCsiWxbmnHgqauLDmt8",
  "key25": "3RbEQSfUreUXU3PHbpbiQxmWP2BojrBNtQNNMVxt2fi2rtgi5UKAWfnZH9xs2YNnoQZdLbD5ou94c4LCygEG29u6",
  "key26": "3jgE4hWkiJvrAYg1SGrawe41uu2Snni7RSKj9tkU3XrNr86qN5YM1gU2vzsVoY2U9uU4n149BSEYMsybAjubsA9W",
  "key27": "QhSxgZeB6hzhHihVrQYz2wY8APdi562vijmv2ujsxAF8j6GVbLZH7SAXWp6uCQdBfePJLtuAyvrCa1xm87S4sL2",
  "key28": "36h3r3nMb3JX24Yrbh1Ci5AnHr9QRxn2urAoG2Xh2qJv97mMrSG7NF4HjWMUKvwcTo3jJuYgSgDwUPCQpGgWz7bP",
  "key29": "5G9gxg7Ep3DhbhZXaBthPeePy3n4bceCXGmYj6jAEjcL4EEfs6Shxpdf9QzuRqq2g1MJeVhuJxeaYLmg5LejsaU3",
  "key30": "56uVKbLm3tCfoEmcwPSDadwTY7Y5VEsXNo8D6eLauBCeoPBabQYEV24AzZz1b5cz5x2LEgY5mSskqeDtZfE5UpKw",
  "key31": "28HPRa9sDyEfZ6Wek4VAewWs1TZdrzGpAF7Hr6iBNTLz1RUfsuKiAKdeVBA1ePyyzMQJbE7RdPYd4viWdKpQEDbp",
  "key32": "57FtPPd4NoLXUe8J65VnbrMb8ypVAyRmRtq1Hoz9Snb4e5G3VUFfHDf9362cYxXhu39fkTysBKy7m4cxY9QmT89D",
  "key33": "3z958UqQwN9qJaLfRmy4uSCn3srbh6BNzZgWg7DiTKpkfvLZUxL1tz1SpGWq64GfZrfbGfh6issLEvz2j6pigF5f",
  "key34": "2x8FWyvpNNJFKzGWQy9QjpNT536jXaKexscLnAmW1obqU3NmbHk6GSddrcysZjkdz5KwJ1vt5FrnkZFymGTjD2cf",
  "key35": "3J3D7FhWeYD9oyRMnyVyv6MugjScDkp8Q89i4bTQeon9h4dHX2R57GN3XwpfKsbAr5Tt5RJwKuqojBHv8XtccDMj",
  "key36": "4RBXeSb2Af9nu9ybdjr6foQt7Q44bsv1ztQiG8MFspqFvEzB4AcNvVpL7G8jeZxSwUEy9miX6VLwhd4xWk9eggUf"
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
