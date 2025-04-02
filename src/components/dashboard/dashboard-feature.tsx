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
    "2F6WUFjeyDapZ6U5mMu6KKzkUgSxR8ffBL8jy1kDVExuELk6U5Vb9L3Vs8GvVN89AZuNqtwsJftB8xtm4UdTNmS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sk4ZzofEhzgnff23MEZDbnGcN4XiHR8EKerq6BHdJippCDprCQXa7UTBbDNu8FGd9C2oVDExs3mC5cmn5ytxLzF",
  "key1": "3JqXvLRTTtcsXe3mz1cDQMv2SLE6CLEaMxoSjCwfWC7C3hK913bVicrTpKsNpuHuXF4LRmwk4JyKu8Ss8JEbCLDG",
  "key2": "4guVHZA6rEoLcF6hS88L4Qy87Hk44hbyy44MjXF6gWJpinSWuaoC65eckL2YYg1SgPhXrGz47JXbztK5SwTh5ane",
  "key3": "CEgG8NEX21n6LnaPciDWtMJqi9daZq1mugj7Arn1Xks6MoYyxvvgh5vhWwA6QjkbZfosFQzevrbH8wNW3e6VgCk",
  "key4": "GsXmUCXAM2ZUrXZyCRSn1ctKEpZVGjR4DLdfjMsnbguZayL9v77AmSCTqFJqAZp2zjZo6XD1oTVtNH1ZHttoJSC",
  "key5": "4p1Ep1eXFEZje4EitDcNayKSn9yebXBaeCV54qcWBVMPgDMnjJo2pcbi3XAe74ypXqX2AmbX49DWbNneggXtuf2J",
  "key6": "iYgq1WQkiNCtSpuYFTyHVwRFSbt1BgJ84yTHCUaCfQH3gtMhtvRYfWAJ36dBr6KG7k5iXRJJ86NTXEBpotbxCtH",
  "key7": "4kcjHpfQ4NDLjLZsmEzY2um7VoUS4sT1xKbTeRSzamK5fP7mUp5T1HzaTxAMNvCZ34uwdLVDiLEahRtga265ZYAk",
  "key8": "2xdZKG8S9TteeZGguco6kujrEtYf6oRaJd2peYKny8C7VMr2Ds6pVxc2RNd14vTmJDiwxwKvWeZJiLSWZEsp5f7U",
  "key9": "3F8xApr6VcVwvnh7atXzrbmmuW45ZVgchkZGkL6LerMFNFh7oaa2gfPdS7R65uuX5WHSwgUcoUvdNu7pND9Ks2wg",
  "key10": "2kjxe61VdTQjobbWs6p4W1oH4GdAU7syQfMpc8BYjeLU2KSE45yfcCDwL3Sner7kqVYRdMQz811HYUr9wGJYii1z",
  "key11": "mWc3R7Yy1cAfWtQPzbkdcK2wWyaCSoj7C2zd7g3MbEmRkQgfeXpTUoG5qan4t4xU6h6tGMAnctKvr5MHTxubtkp",
  "key12": "32b88kstfmAVMhg2aPkRfpJnyRHLooD8iU6nNhb9tP3dmCg3VSbRu9e5LXc499LkfrTPq6FUJbQHXg98jmpvNCTY",
  "key13": "bqqL69RCzeLXYyWdSnZJv2NKCrDqw5AGNRqdP8rCfcNEc3SBC3GR4jayqxSsUNsFrvUjzqT4RMDyQt7kydaEkxH",
  "key14": "n1hUNG1aFtRKwx52bV1AAb2jbcABLD33dFP62dQDGVd3qhPY8auKYE9sBKaooToaHF5wBcrXN9oSfRgSJuqh2uw",
  "key15": "4mwvg6CND2m3kPc4LC3q9F22v7zHjQ1Sbkh3NNjCCeZgCpQY5qGSzxTdGmDT4JKWvzCvazPpqvakzkME8thfZ4s3",
  "key16": "azVkfvwmWCPziCkmrPVfJfzuFsqPYm8BSedwfoiM2Ks5LrUnZHWTwKWXNpy27B1Ah4LD8DnDyADjJkTjXfqHhtG",
  "key17": "NCRqDKdHXRmqLB8bEaA1JMML2ens9zXuep4nAfNjWpNyJfGMx3sWDMUAAuT5Sffk8vSQJcLBGxoG8cSvqV4yfVh",
  "key18": "57uVUWiPjPF9bifojiLo1DPo6rYZvv2kpjuzLg5zAsE1tc31ADMb7eEHBBVoWppMPF9Y1P15gRdMxZiLnHU2vszV",
  "key19": "4bEvTk3VMmTCNqCZYGoeAFu9CFGMwpmAhA3DEtPKKZmFTyFLafHdRvX2RqEeX3uYQufco8nSL26awm1bCHMVyCik",
  "key20": "w5Vd6pf6q8WpX3m932xAhEJbrJM6t272HB4R5oJ1nokPLA3LV1WE1P8WX6ek6m4DmQcA7LFyRNCQAVxzuEVujtn",
  "key21": "ptx8x9CPioiN3PCGKcXjZfhQrn9NSs9TDccSvTFCi1ETbne38Btou4EwCxw43U75diSJKN4ghqCYGorJAb7Q8TP",
  "key22": "2zdE5uFMgZbz6HcbeznPNcCsH3CRrU2RQP1ufFrQVksCC9UUyS2Gu2jwr19sTq62hDcFLYrYsMA4wFNSF7Gb1GqR",
  "key23": "2icw2FJ4T1qT1mkmx6fqvU3RVzDM9S5FAWoqoVANpYS9TMw4EMdyDG4T4TDpLoVCNmorJiH9t1qr8ZdfvaTjpipx",
  "key24": "26PbhUbgBfarjAtn17CoH1Mn1LxQdNMTvM1vnsMJLj8VXyfH7HYRq3tQU8VVTqxuEGUrseaXotqqG5ydwTeXwhix"
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
