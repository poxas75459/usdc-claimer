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
    "4oGEtxhAAeoA8uS9KRUDdRNebhFB3dzFyak79yZKkDXgFctVGwp47WsBvdya1fKh4s5xqJivRvUEfm2atVVSy2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jdbbv2K6J5LfhaqjAktzPjpyfuKbYQeVnf64HCz4TwJhfVasN9xiP883QDaoqWkj6DbJXeLEcbRGB29zdNm6hng",
  "key1": "3ePwRs9uXGF1in35L4nkMzd36fGmwP2yhjheiUTLxiQd2RQ7KPFaQA19kj9PNov1W9MWPtycMzroRZAwEC5WLmH8",
  "key2": "33pSLRHtxPZbBqXsGZbSJVujddkStF8m6JHMKb7UgckNLSU7ujFo1LSsgr95hpU8ZRxmhY34fgSV56R5MTwXRmn1",
  "key3": "2G6jsMVU9goX6vLChJiJiaagrY9j1U49YE3uiG7cXerJ8H7xJ5rFfmhCjZGRLfTzcJhUT2P2cZHLkFxRodKgAJEz",
  "key4": "3NUUTGk7fiwvpkkByT4hDjrb2vE954EWFDKwjR7TBfQ3knWaDsUMmCeU8u1Xp7mPiZESiDxyZB5PPETesV94C9mQ",
  "key5": "64cn5EHEL5fBedLyHcH9YSvFxgbHzaAp6vHQGK5TZhVE6EzMzTBujeusWnRJwy9DdPMZu2tskzgWgj481mfMMfdX",
  "key6": "2qesx6mq32LRTuwGSAh2AVWDS5WZGhbjLqYqjXpyQu9B3xa3XsdVEfDvhLV8zi2VHh1Fi3D9tUU2wvbTbjci2hX9",
  "key7": "3p92qFLBPUM8AMyfPJPUNGL6mKLZDAzPiVRSj7gFTc9ya8uvsFC2FajdN8Zh5XY7cS3o1tnpPv22buabPT6Fv7Hj",
  "key8": "56Kah7wqRgUzQ9nNohkJHvuTdHHrVYUjWebN1KDHx76cE4csAAPHD4e6EUu2sX2pGohjEPnpQGh9h5djWEBohCGd",
  "key9": "2uLVM8LncgBbt2EW6TxFfCzaqD3zSv585c8xU5J27yD4hndNJsy4T71WuNeMjRs5tBs4mi2HSUEKGC6z2LTLq1ra",
  "key10": "2mbHyn4SLavgb7rdHh3a7vozGDXacYhFbRgroFMEAm3J4e5HybDuvevEcvcTjQHxwNHNuUHG1vrP7SJuEsjnAM7z",
  "key11": "axogbtRCkwZ5XbPyzcg4hm5N2M2Tr79AFSkUZWKbAEjFaNAp8tbLREAmeYZrhuTRvTWCXVSLAapgDiDUVbhtkAk",
  "key12": "5GezRWMp6AcznNvn4QaEN9ak2ro8noj9YU2wRdmGqBKrgPb1h2gf2shASmusKfz2c4APavqUhizsTY1jWsdhk12B",
  "key13": "66LEqhtwESgawcMhU1xnpZ6SzQvu4d6kBssgQFZQLmKaaHuKUKQCGRqdeGD6P3CtihUAUUBQtYM2ryDgwCqibcbM",
  "key14": "BNv2pRsSKhSNUt47NSvTDTeejrHFFLXisrXK6FNfRm5Wh24WigQ4z1L7L1dgR6MefQ1KQw7VFXNE1v9ChARvpiU",
  "key15": "2M6jfjfxZksh842mqUQcELCyy3BBHwwvEFdD1hTcKydvELhNM7CHyc5HMx3UJ4yfVeSFz7sbpE6E5ebnx2t3VFbw",
  "key16": "5GiNuD67uEx9RYnK2MSbbxwbv1ikCPhF6eQ9G41LSB5vyS3Ly1rV4mSJVzBjN8f93GWjZanqGjmQL9n9Ap5fV7sa",
  "key17": "cn3itCkavrqmskgJwYi2gYc9UdAThx3W7Z6m6n2ydjZM9kMoT2re33mU1gyuqXmis4oUoTntZxvvD1oD4CiEW9F",
  "key18": "3g1X3q2LgngRmviJvHqrw6sdgigxmPnijt1WuX6a3Ey2fV216SXafJeRitVUdSFSo5JsxEucdQkdwNHgcujtQC36",
  "key19": "5CXE2REWxuUppan5hkCNsgZu5Srr2Sq1kZZR63nAorwYLvs9WNPLssoEF2FqYqaQxyewvYsxD2yjUGkFJo3T7vxV",
  "key20": "2BGujazJbJHLECNLNVddMHSCtTRsHfB6GHLJMMtFqPLyxjrndkha7AVWxDTEWvNP8qK3XqPs5LzdpsK3NSrzQRE",
  "key21": "2wcQLLaspmsyqPnwLb89qQFwp25A92Quq6jCSP6ueKycKbnnVEySgHc9v8N19HEmP9T2536uBrqxpPdjS12myoQ4",
  "key22": "2j72DrC8AayEgixynnxwZuQZKk6XL6ZraE3hkgW3k6ZWTcHnrBeDKEx6a34xky53BiRkMrQogw6enLXDypTh6rHm",
  "key23": "5NgCBoJpNowvdrQRU8ZbhdRAxWL5FfsJjkTSFQN7mC7bB8Euv8pHwSXDY4ce2evS6rHXTiSBVnZRpqikqkwfqSyu",
  "key24": "J7YLGC8odakAD2QKsnPLeqKkWJzPWcEZpXVLsiPgKEgqftArFMf7LEUR5D64uv9w86EoLaxcooMpo35tB6XSwpN",
  "key25": "4QLMGhw4CZVYeL3j8Qvn3Jhnbn2QsPb2SMGG5wFxPRA9SYC9PjuEBvyLJ87giNUwyq45aM6yqrRvPTtQUhS73Wbe",
  "key26": "a3mQegbHbVDieNbvgtLNAqhYL4E2u7ftc7JGAFcG2egStpzuno5BrMvfhpiQhRfmUXq52hDMYcKgLzcsuLXGQ4d"
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
