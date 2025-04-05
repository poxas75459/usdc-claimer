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
    "4M1R1Wj5NKVLjWdgmxtoKtnkNMMFrBovtR49LTFDb8w4EWSnqdxVsaKe4gSAife54JDQJtr9xVyDDuV6gx928Zff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoTGET5pMf69pzD43dPXFy1p4kYfHAVbCExapQE9bWPEHsemZndJQwkcUGQGYorzHud1nAVGT21vmVNngrbJHwb",
  "key1": "2GeXe12ry3LbCWE7NygWMMnfsjcoCkuxbYxJRi6VZvFfCBnsSiziBEkVGF1CnJE48X3HGJwcZe8WVgs9pTgL3i3x",
  "key2": "3SeK2pmiGv4dkb8LJ8EkCgPEfyukqghuu5JQtAysRvwLqnmHHm2XiyAxp8Tw5ChPHTzdA88pJBSTGp2abSaZdTMV",
  "key3": "2fbDZxJM9cWpshecMCi7N7wn4hBMEH4jZ6bgSwtA6dhcGN28ikbmLb7N7nSiBC6Dvs8p3pUYKzpEWYdQ1MVVrX7c",
  "key4": "3r9RbQer2YoPUpUUQQer7koLbYGHsz8tXsduF6ntctozxKMPPUawemJNFsKGDiTbJ99KLfAh3Vuc73u6merJk6aE",
  "key5": "41kVCyXoq1MBhTsRCxAhQEeoWTvyUboooD8Ufd9wuuEipFiz9Q5S72YW3QqsegERNNsZXyBh23kJ4D2K1uYpZY2k",
  "key6": "Ce6t6EyYAnnj6KtGjy44zW6hQzS168p9YjisCmZT8MZmqVAu2ThWizaHDZKiM4vGc1J7X1v1fNpaiFjXSGCKwHm",
  "key7": "4jf3hodwTiMX71QBtUNhMRManShXYpoKXy5W2J3KQwJFiNZWLAA1fhLK7kBSwbvzeH6QRZZei1JT1gzvgsUznuwQ",
  "key8": "5M8mCbeSAXRtwoHJkrQ1Eb1LphBtXcTEhQtGpAAupPBVYXnfa48BmEmZnDe8zVoMpP2nqcXTE87U5XgXb389GK6H",
  "key9": "btB2cUsiXn9nhDVUhhJDTnpUTKyR2CGARbYsovMFj2yyzQJL4qCc6psj6GtLPk6XuM4Ha6Zo8HzXQYFat9sisS3",
  "key10": "4xTYa6LrC1RCMtcL5YKYL3AUoPuxsesqtDEstefgVPZ4R62WFd71GiZTiPjvVRceHejHxwdm5hDovCBJkJYyse9K",
  "key11": "5tR7twfNyZ72w23mVv5rERrbm2faZJmwUuqVq979NKotXLvcTzE7MXiDdR7YN5TyWpFV2P7Rqm8t6ZfUhPcQ5T5S",
  "key12": "4kMYNBkRNpbcZsoNNq5NTFq9YEhgL8NKLeGjxRDBbweuGGsyF67XNvRUQLXoNS9CV9Kw1vdJHsurfTEMdoQCBBRB",
  "key13": "54NgrLw2G3LRYs9DaUuNFipbWfC763P3x6a983qH1JewuZtXMvHAHLKhVhB34mNx86ub5nd9bUMBFXeiUeQUWTzk",
  "key14": "4cT5zBhoDnkDbYjjGaFg8StCCkVFc3pJkMacTRk1jLDoJKrPPLAz4rL3U7e3X7cMRUJjWfjj6cbUdLnPHFkxwbt4",
  "key15": "4cVLVxzLkswmHhHTYYwvQhe1pFAWJwWS4o1xUrBWSae2HnQX5STCFvynAdi9ZWunphKr6UxRXzTbNYFmHRwgteKt",
  "key16": "PZWxFniczm4HREbT3jzg4XgotnLuk7KmKdrBDmEFP4qx7U4UHjxYTcBbDTzepJntxnxvZNXskwcSLvnoyZTmp4S",
  "key17": "33DsMX6mcoaGiRiYfRr5VcDchybEAevoeZZSwCdbktbV4X4DXYVUBDbwMbhsfq3PLzjbnj6R95LAEmxok5sduFzn",
  "key18": "5CXe4QfxkRCcMg6CbAS5Wp7MgfV7hmt4dfwEU9ukpAG3VRmG5mzGG2WDPPu3oDF7xTz678bfi94XUvDZAich3gaM",
  "key19": "22RzUYuELsrAUHAfNaRyRu1HmuCcz49TH1upmPiRD2wd6XfmKwfkExnLnqVxwT8adFpPiQk4VwbyUBesNS2wghgf",
  "key20": "bjg5gJAk7a8PN9a9B6bw1NMmP42Ahm72tv7x9ATgbc1QZMorM7Yg9uBVGttqBSYsNpqZpbucjeyZP2NP3QM7EMW",
  "key21": "31FbLz1BKE3SR7w4Df7Wkq8N7bHgpQgQhkCKtAKVgrVL7qFjsxqgoAtDFdpU8HcAXTRTVevcuLW3eD9uC9AGeT4X",
  "key22": "qY5ueWGBakpgoMzF171ufBW3Mo1vzMyvNXZTYovadk8rbbi9BRMASgdXxYj9ycQYu92N15GmgnBpgyCCPxs7xB2",
  "key23": "h9iwLZ1QHHLQfuQbUUV4yqLMgxc2v3bGYQrfkD74yq52P7jVbbWKrzDoUGadQwj5dGr4khNKkcxKr4rz3mHcLZz",
  "key24": "2nueXtQXomWW57TvJjhdgWx2jNHL1kYVyWti63ftHnHvPxAEBhvGFeEGSvzcrgRfTLe8DcCdUaTXQVv6djZsry73",
  "key25": "2tJU4X8etKKVQaFwyKzXmsoebnERs7KfXwPPtrZMiboRug5fTrkGCxy3bLzjMhkBoWf48iqB5sFWVbPvFARytzaS",
  "key26": "3PpeNYi2TSZbqxjCu9NttsvUe2ff7ve8mnwyc2a38pMr7jsshEPzPg355Kue3aZX7vuCj1geV2SEgir5jS9qqrYY"
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
