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
    "XMXKRm9ojFbbudutzs4GTh61NQDcSZiQfi4mVkmmurbDPnD4Kc165aS3GnX8S3Wa1dJwSQrHjenkZ5SEpma8nCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4fPdtk2DRetX52Kh6DdUfFFKb9LMjrrQUCJLkk99mQvus6MSwb2dzo56tEbyzmcJfpoHFevcekB29sAbvEg5b8",
  "key1": "5SBsHPS2ySqPV4ChZxYCx1hovcxmC9LbQBfmFNF7mDA1U2VTyJDCeMnaQfwSaK7nJUUbZFrmV5xRPdUvwFT9WHjt",
  "key2": "5WRXb6g2WnSb7DVpCddTSujTvoDx3oQRL9QgMeMewrtHvWPTYTK1WaRjFBW2cpWpo2wC6vUbZ18xFrDEyspiSxCY",
  "key3": "5q1TKwDwujPcq8zDtqUgD88ecx1eMsNTzXrwR9LSzcdtcf4VCFkhWpp6ipCNwJ6GQtmpCYz3NuUFvofFTQVJvWP9",
  "key4": "3FWBJ5xXA51h3RfX6zdhJ5oLeGUrgvVskqeikzPD649veALPGP6aAhbJQFxb4hEV5KJotHTos9bUb9yjWQC8ckQg",
  "key5": "aoVz6KMJsednu77BLZMSPx432hEN9i7qxGooZ6LNr5tdxgcFcjQTVztQM6SXjDvrrGuPoD1EwTFE2hEsuH2r6w2",
  "key6": "2mEpr3UCMZQuFmfKuqsvuk79rcwERUi5x4AfCMbSiAxGFxHqVRtmAkJb6r4Q1ir9i5TSdEuYus3Q9WGR8VmZTnXB",
  "key7": "4zamMU7WLYh87Q6AZMAnnf5336RutBshNfft9zkAox2mkvZf7CJDhiRyYkQNdwLMueZNjRwFzEo6kNYnB38qg9kZ",
  "key8": "QZnpEtRcaeDCgbUt4qi5h4fyfYADF21Ly8wPt9dqe48UA1MTHLP5j9m1hcuj8qP8aY79s9egGhNrCu8m2Kp3NRu",
  "key9": "3HsyWKELiftNwCVsWajJAnSFatfQ7LskgNiGP9vLyKEZcRG3RWXXjgN1BYebVfov66VyaNv3PYHDEYvgSJT1k3Lo",
  "key10": "2MSc5ZTr53QAJUeB5U19PLUPAb9jouaz4DohKWe6ct3aF8xvfQhTc3NhDh7rgrLUA33Sqav2gTpDbUffZ9UzSoAc",
  "key11": "66Sfu6J49x7JGq3WBSTxTraqQVWfZUEhWEdoFsNyHcxxpGjw8eKPnJ5udAbdBhRJEnyV3rmZVeuLbw5JMfaBMPek",
  "key12": "22H6u6QHc7Kt9LV3bsXFUhURmzNoRUbTp7vf1mKdxtHwFmwzvfkc59VZDyrTc4ziczFtWVZ1mVh971vdEtuxUa2r",
  "key13": "4A2BjfHDG6XhV9E3DK6Qxij3xVovkW4aJSAdEXR31bSi9tHSNP2WbrBJbccqh6mDeHsR8n6AgDX784n4J3Y6xRzc",
  "key14": "3r86D9WP4qprWk9jS8om5kTAKnmmUbYdysgvyNZXgX5H5xbKGDvPVzizsPLXC1itZ7SkEzdn6uARhUY3FUDzC5bo",
  "key15": "uVkUHE6hQhrNFwNi82Gm9X7sWKk69yPqsgGS225DDTVnXpHSuDfsne1uX5yfgtfQiGzHgC87hXQJEopY3QERqcn",
  "key16": "2Sn5hWsjCKNtmnBA7tZzDYmaxS3hqiv5v7KmJYCRx2JA9EDytq9pwcCh1x6VCLsx6cWVSuYoCQRYED6oB8sUpSg3",
  "key17": "5Q2dwPbTGfxHDgyZo6Sfg6J2jXqoUGZYnVviXTW1gMXAaTzmtb1J27Zzz8UABHfMJdZjQRBzUW66DfEbXwvy4UfR",
  "key18": "3LbNxLqgoeBkwTt4R1q6vZf1ygK7wsLYZfm6UU8qzoZnoKeWuPpWR67D7h5RHJ3fKtMbdacoNuPDepkVeK2cfEco",
  "key19": "5NgudYofktdJcutJgZfnkh2BG3WFHhatuYoziamjLgCWmqoqqL2kNUA3TTGYrQPZoSL6rJuuPv3gNRYmYYEpiDeA",
  "key20": "2k536An3wprSxpMV7v9UVRJdyvHJS17hnrPjiXBZBkiiVgw5kG6tupsrLHo6VyDhkjf6Z93ud7Zyn3c1EPrj5gpY",
  "key21": "34ujvN7bmTynXF53dA6ti5t7ot7eHK38yCgRcrZHWySVYi7eQotei5Rm3YgS6KXcM49j6VwNV67suSFN2m2Mn3r2",
  "key22": "4wL5kjvdfeJasefL8KX4SiiojPBrBSjZoQKbiNa6HiM55yetCqCLBM3rqKwDK145h17EZDV6KxCoY8y3y4412tPN",
  "key23": "28bB6pSh3mXpy41AwRxiiwPHecaREQvLByxTggogYp7r2LGpxdgrqyyjnLh44tPbhpUoUb97xo3EqcgxGZ5zq3xN",
  "key24": "3RnnCEX4XtGxLs9VMegWgWoqzTo1kibjzJTjcvQBoadGjJEm8VbK2Bnhoo86EPQdrEHQw6r5oPqTY8Pn1GGSwBdU",
  "key25": "KLHPd5BDXgXGfnzCMmifHHw3V8uWy3zerPYFK972iLi5zYHeon34jQViPrcRjpsgTJLLLQDfg4BuWqnqZSXPajA",
  "key26": "4Bmv3bzVHVx9jo4bxyPuCm1xzKzjF1SgJAPRKzoLWJfQhsvZ5k3utAaPsgT29wzPkJvKn4LoPAkg11czpu8DfjCM",
  "key27": "2eEUkKjEBN9SAo6ME9zkBhp2nQF7PSpYH9HV3uSQ9u5MYdCzoPc3QThY7CXSfHNZ6kcyfZSDhDYUAjtg2b3RjrDs",
  "key28": "5RqaoAcN61G6ZeTE2kFNGuhRkdDzeAFkqzYrjAjA9GE6nCcYomzyrCjtEQgUEzURHv2ah24U2AUoeWPtTi8VeVWg",
  "key29": "23GZgSqxReajUyu2Hr91GsqtToFnjcGKx5EhPZGb7KZWqkvreg2yXePa6aPzLp7RD2uQa4Pfi3WxWeUzEY3nziZD"
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
