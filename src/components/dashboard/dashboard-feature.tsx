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
    "5wa4vMzkQwq98ES1RDRHDJ7oWmLq9HUPisbx9C6bwRjRCkXRv27hXABFmDKwubzTWABxxHtbh6RwGF1jN6NKwHVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wWPV2Tj23hyiNctucQDhLF9zuwy1jcq8R91vwQhiUGs5y2iSo9iKgrLxaBEXP5GxghWUPjujovCMMgfYn5P7Fu1",
  "key1": "5rqG4VrSkTyAkri8UT8ToFMqDctFbfDLbHrUNV6vofNvHRpSesdx51hcj52gFWV2v3Bv5fvVD3SUwYJgojNNf7LW",
  "key2": "26pP74kimm6qMSiGfHrrh1WexAQv96RMhhDZXsvfreTCHHLEYjhehQEn7abSy9A9GpGZbWdQAYjSCTf87RobBdoH",
  "key3": "5zwaRupGhpfdrgEsFsf5L3qjsk2GxoBuiRtKfTmcYwoFbHeMtxnEg5Wk66fvm7cyM2v5HaY2DpjMUhNCzT4yDa11",
  "key4": "QyUqFcpPsHu4Y9eHBQkbVizY5iLRKpMrgtQixZ5hxnZzLx11C7Zsr9BrUqVWrHnaKX8ujYtx58hotaNyh9gRoEy",
  "key5": "59fwLeA82QGuHcueUxycgbBNHtPBZ1YLNAN3TWwcvT8XKWFrX3oHBgkRsBftTAvtL1qwQf5bazvi7CcRdE35h4o9",
  "key6": "s4nW3fqiQ6kV4qyhri1fsvSEuThXN3FtivcuLL9Tnq3fUfNoHg8ELcZWT763CGJLihpdWMzFL9CkhVzvLfpRnZe",
  "key7": "21npwfMsfUn69jmXDnWY9m9VHyYF1sjzqRdG9YuaTF721wqz2J4vFpZWSUPtD6iT9uoSXDw98fCaRhSARgN5KDQM",
  "key8": "5ZYcZi5Nj5aeopYwdoPyXgPDKJYVTLKbPmyLj6me9ra6ybWEaMw61MBG8QMwW6RJFGjABTjQGPgSQy43vV1bJTUE",
  "key9": "YJzUNv8vKByHfRRM5DXQWThrqY9ioMY1JW8cQGXU6AMz8Uyv84RgZiJFfU1iXAansp6Utkzw5eJ288D3AxyjVGy",
  "key10": "3F2Uu8okiLtmKJe8CKZTkrMYg5UsgDQbTSWWMFDNvPFG7oFxmxhUocNh79cdwZWjHwpPkebmAiHPnZ6ZLNJup7g5",
  "key11": "2fDX2Wwxt6g4u2PrPyT9CqgQm98iTUgjaBjp3Bbsw9y7Q9rpfgrkh5inxFzUCMdMDKNkVrXA2djAZKBMoWUm9Xh1",
  "key12": "5UHq72z1gfPLyNeCFEU3rEwKKvYpcDoH2f62myZ2LDCFdresSc6TuD8QEmEdsRyP294N1Rbf27TQfPZhchFpv1CV",
  "key13": "SpE2PVUBxaFYJ78Yj6W7azFHR1ogJcY9uDuydPSrpHHg6p76QizVLDozUmCY5WY23gd25uBV5UETVssCQtJ74M5",
  "key14": "38rHA3jbmxBvJctsxvcpkyU6LJDhm7pBE7pr5U9HFkeTVJZPCMtDddvArEWTfL2TUYhh8BGM3CBHoZFphauR491g",
  "key15": "3Edah4M9ArdtpKFKDjMJZsEh1p8K3uVgjJ8TBD2jzh6MVLKAGdpCUi168eDrci2gK2vjgt5jTUP4Ev2coAdyicuw",
  "key16": "5RszYnXEQhwp1t1XozYbRqMS97iKGWghtUWKeyfEHuMZnCaSECKxpdAxRiYti1sSiQTq57zxTdyjuwQrLCXXJ2Qx",
  "key17": "cCQnBnWUXxYgRSLVVSDSCDj1UQ2U5qNxU7UoEsVhw9PHTgNQ5iBWEw2AiUrkKS7PcQZbJE5YGSYPis365awmGrL",
  "key18": "4M6yPZPgXRnJGoF5bhne7DxiNx3xU7CXR7YHn7UySjVTuriap7NcYopbMWoj3cJXYh8BGg46UAHD3zjcFoF5vFjB",
  "key19": "oStvXaLbvqXNgk86uW5LiuEcZ1Ce8C2m8TJJ2sjnh7Mtuuy2bwyMw3tHz3SVxx97nFYcPG1qp3KgDsWtcWQTEyL",
  "key20": "eeVnqAvyFgbZ6x8jEFzHWM1jjnVx6phqQ7KifWJuTLVacNa2S7MGzr3qG7vn4SnLRvvfjvgekwGAL8DJSmCMjZh",
  "key21": "54cERKcvyTWnB7XeakYvMtHR1b3Q8WQx3A1oRu6Ci6XBYqYQsZfVviP8DyBK2Z8MRLsXzkov1xLDszv8nrkHWu1J",
  "key22": "5sdQtVbEkt4qxsdpdujuVprAzvZBuC4dFQS5L7WmY83CQkjqaoMAbA3eBSGhK2hor5CtxYmUVhk9a5BsjSyU137e",
  "key23": "5f3sEFsXytN2jFfETTRpusLZcbrZ3jaVguC7319jddZCVKsUP4A1ZfChmxE96LDUGPUqhhBMb37ixCHQnoWrMxrd",
  "key24": "YzgnkVqsvh6RZJRwvjP7npN2zMtKG91LhbWtbyA7sgqa5E9zqJpQL9jbweeATJ5SgmbffWNPBTkWT2R9Wfjp8Lx",
  "key25": "46Qp6uifZA2Gjrd3mFH6BvydLbfZavKHTvvqtJGE5ag8EvmEnv32B9FLbZE6EkjFpocyj9H9U1KRXEDQDwARx1FJ",
  "key26": "66UPzSUSSDaD9v8YrXJcsdfCmn3MTm82j5AMUDYnTKNi1i3TohGhKpES8WsvP5GfcaN5moFHcQmWBds4HZbnQvXE",
  "key27": "4Zp4zdWdXFog7xt9VKCQUVjTkYHthyLq8W5DCqDKNNH7JTcfq8PwVRbxGtEjppyZrnz1gM5PgVZn6RzrJ5LrztQa",
  "key28": "2qZCJBam1MUTSgHSSanbLwW12gYWBh7YQNhFrJePKS8G1K6FFKvN6M1fnjYo4S2ty84eZkR1WAPcrQnbmdaA2JGM",
  "key29": "2ZuyXj1BA5LsWtr3gN5QhoEq3vPiG5Y3XkTnkCfdwszSoFJrLPwPsAS3HvGs7BBL5sAmWGrzo6w41tGxva8Qc1P2"
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
