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
    "5FZsL2EQWLFn1vCo7qDRbL78yJXx4gqRYFkDxbtPvp1hzVMn6n8agZRpJYF5dbPg5L9q8Z8S1ZjHbCyu3oBE2R8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dAy89NKf8qPJn3gQPN8ujhAshqoyUE2d1eAPJLRtDV73kxPTriLXY2y5wHGVWHqUxCHVELbPTyCQzgiY5SPk2B",
  "key1": "4NuvoFfy4jEWomKK8uR1xqWsLxpaBEmRt8uNq5oguwQZZmQxsbqYnrv41RFXMWiYBhUfGWuCAtHnmKyzX1wF77SQ",
  "key2": "7nDkbNr3xcBVPXZfL5SNEPbbemdxYJcXjxTHzgZbze74R7zDQRXAujDMWWpaqWxrJt9jECzbSdJEziHeUrZhnPf",
  "key3": "3qw2p5FbWY99wPYJwKc3wEvFFPZqN1ohY2eV4Y6wzzSk2Hai8uZt1ZtigyxMyBhF9chPiFoVGDCAyk7Bby4rCnGC",
  "key4": "46CZRpMhSNr7uqJYn3QAHgtTdAYzwpJgYivKSvhdrbiT23thZ9AYA7MzD86krPRJdo1Xa5dbNeJhh8FAoMB6Fwma",
  "key5": "3rb5FLEhi5tP6RWQrhJzK3sHCXtw5mSR16XyoLPnshzxSNLH1CNq4JyB63rQdocuLJeJ2LqZhKLcvD2XhAfKEkjk",
  "key6": "4ws8X4eCie8RY3BYMTtd1S1iiNu1ePVqkWpgo4bCSBMmeepU2dQShFDfqPyz9HdsqVkU4Yp3D1caLA1Fi3gC4npm",
  "key7": "2G8sJ9Zk3FtifjjoCf4ABfcCYqybs7nj5hFPzmrpNZMcqAWzT3Hje49CWLPQpgUoj3HFvzuUew9jwKc1Fh5zgqJo",
  "key8": "3zx44whJN9WcDCkDinAmqF5BnziJssDkBC6ffYNUNd2fwcNr8fXEYgdHfNTLxfbN9jsSfuh2t3NaKH1Ze7S9eKMf",
  "key9": "5RwTFS1oT4DjQikLgPigiyMmXETrhNuh6s2mi7sDuoY2LqUdj9sqhz77hQ6kQyWtcdeXcxTReZ3qrRuvcAcdQDNA",
  "key10": "2VsiHJVBc17UkpTSfGq2esVqKps57vd6dtnjUQiMssFHFNBDkir8j4HprpQGAW8mcq4TVihBfXSVPtLwPdGAqJ1g",
  "key11": "3xaK41vs3eCBVNYLKjQUZXPJ2e2Y3PH5z5ij23YMjsYhcvpb6oKCTvfxkRdds34bdQnqpuovBthETHDDVRFFxCYh",
  "key12": "17qockHoSBj5eiCGgrSWJ5TPmFFDJBTqXdWohZfbSips38Uknh3d2yvP8CajajSwNkJKRKSqdNkJ4Bxc3TQBQkt",
  "key13": "21r8PVeHDp4bVanebjDntCoNEFWBYq9gUS9H3dcr5yTWkH2XYHs4QtP5qV6uRaG7kpqTvbR9YpBSXR34GXoo3MKW",
  "key14": "3gUkNahZsDsGSHoGqZYPztGg6QEDRrPYMmXEeNL37ANSuPRbrwUNkCamh13i6oVbWvZEL7oyWENpt8u4SwweMeRc",
  "key15": "4KMJm1kSu5HAeLgnd7GdfteTajH6Bqu4GpjgRrRMHrmXy1A1GhJgNCKdnGMFNbYgdHf2CAcPmCknyVg6m6iRyLQd",
  "key16": "2EAidoJaPTCNBp948mNquzs5cshjTHuDV67Fd56TStbpM3DJkiZUAxDHjEAw5cKEMw878rsgW5No3eEVGYybzirY",
  "key17": "2xv4pNcVoyy7QfEdPSxUkESrooPAP7P15rmQubJwc7LvRExszJUuP5uiwNAT1SRMYEgj1kHKNWUheAbEUtrsPEJs",
  "key18": "2TtjNbKcLzu6X4G4s7MXf8dJHTTaptA6LAw549v4Msc1Msx4YkoMv5jjusjTtVCJ2K62pAYGxmPB3bc59MhRvHvv",
  "key19": "3YvAKGEW6RcY7LSH1XgYb38bKx7FjPL5mzQEtQxpjfinT448xh4srfV61dXtUtfJWWG2TTKAt9v66zaJjMVZdRN1",
  "key20": "KtzuiqQSQbnTZUwHgEhDMqkUyq1tidjoLzuxdeLwQfvpZWJWeHTnzPuZ2mjLdzguCQx5pWcnSCb6C1ZS4gBgpv1",
  "key21": "3kmHg3fheJQ7joyxEihvqfb3XLrx9Afpo5KutcEAEeF2dHtAaFsKCHRRYon1AWzeQWWYFV9jgW1Z899iQF7uqMen",
  "key22": "233mpTWX8kyrkv2M1nfUrCdR3SZeWmRaip4BaotKrAvcNbNAyKBj862brFJrCbogPYxWSPpadc1eJLZTPHinyrfr",
  "key23": "5CBTBus7be3fFWK9bsdPn5mvQ4ARkzQj4y4pF7EEFJb6RRNPpwm9Jsx14MDiZ2fzKtChJrc2i2GuMhvDrr5b8bds",
  "key24": "2G9nyzMMMGJEiKYRgwNDPRDm4X1pKAJhnV9ieGtZfSgNLZnEB685hUT23JUMc8hkXKETX6zceAq1ZTRN2SirQcHH",
  "key25": "5N9g3ezbojxrPSJnJeLbqnvMh9paSKRzCzX2SNF139XTY654v1SJ91X1DLtTYdWENTHMwMLhsqo9HMjRKpXDkWBa",
  "key26": "4g66aFbYej1wViKf2daQP97MEtXyPjHPcMkP8D4PtmxMendMEGGfVHnZTSi7qwXZN3axhznUxJJSbYw1VVT73DTx",
  "key27": "4q7ykdV5iwbRQ5qGiVvZAnr3Ak78CQcU62XrBJZGmAoihJCSZMVQQ2nuvoZjyaNAyk5579JienfFEZTxd3sXdk5y",
  "key28": "eo3KdVHPvvRDQq6E98z9uYJxtkC5gCJ93pN94yv7oWEDZSLGpQhKxiGRnm2km3JYVovTjLQzrtiJKeWNx3kVmxV",
  "key29": "2f5yFYg5samK9N1nTnEGquFKSJ6J97HXeKRxBiAsyC78S4QRcgGMDAdrRARp3vZHuZGLNK9w4FQ9itxk7xqbykzF",
  "key30": "2Mi1imrySxNbwfcRbxwuPUuD4hhm6VeNASmUqK7sYfUSgw1KqLKVkWMsj33YyJiDbUdS8wyxgBxsYqmvUz6ievBE",
  "key31": "39uLp4BJCS8xXoCcp1NBB5bwu6uHMM1Ypcw1LTecvCyc1XATPNmUkjfBDzhVgFGfEkuqWnb24KwPQDDf6BQcuFpm",
  "key32": "4z8dQL7T1ZyFDR5zfUD3RmxsH2GrBAE5au1uxPmucwtCTgmPMMNsnZs9bmdSpoc2N1h5NJbyeAAqBGj5L3uAzh1A",
  "key33": "31cYNJmit92bKgGoaEpB53tzMegQsmDPxgizsqcJQWHfjAS5LZ4d6EyXVE4CUZoPC8FFgmMAYmvA4Zf6Yw85YpEx",
  "key34": "25ojq7ppyKae72DG6x6kuZE6QsHJPgsCodgXH9pttrboqNmX4JA8kJTaUKe8wYk46D1FJF26961t6Urkajqtrw3o",
  "key35": "5tNPd1FCfBcnfNTDZQoThx6ahmjxz5n6GVjJftnbP9qhFTX2Gus2AeWy8oaemgt4ht1CewFtcxUpZErddAzZRVf3"
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
