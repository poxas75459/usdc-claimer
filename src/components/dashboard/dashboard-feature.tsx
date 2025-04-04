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
    "uo5JrzcpSfzAVnk8ZJDc94ZMZErt1oTxQRAAeJTA5tWZ6forFnmBZVjYPMZPtF5tCaZb3bATdCGt6DoAZYsexKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kkva5TTi8KQWi6CvqPo6zit9hT2xhDEt3mPZqnz1DnaihVTi42Y9EDMB6JmZMDP1GvRjMMr3sp64KqenuX4sggP",
  "key1": "2q3WL8fu6mBD6wS38ueQYc3bvCKMjEEfL8wPV8KNo14Bf5SQ15uF7iiiiLRThddiVSbgbcJLMJyE7vbyRSLbEWzq",
  "key2": "3742bBvEpCuCCtLDW7jkf4nTi971QgwyBkWWNxCZtThFN7BDxz1k9WnpNqFh1rq8p99HqLDQaCrFDbyDrqGrc4h6",
  "key3": "RnyeuWXP6raZtoKre7YXhJ97G6CF7dFyvCYGycfRCEULRAtX1P8P3cJGvCvEjtL9821HLYmbeoRB1zTkPd874Mf",
  "key4": "5rbbADkhBVuQqToLFEpYvzz36N94zAPj5cP437T3Km9aYNcwe9TAspQAnhE8oStAYZjYnJNsxuha7b4z2CmNHoCK",
  "key5": "4YzyugiVUxwWeKcqp97bEZsdPQrpggSH5c9cAo5jF2yzvDKFkLnRh4Rewr51z6k1uUN769b4b5DUhwjKAnxAVQmw",
  "key6": "GSPjqX6SZfmTdrRU6q7R3nsBUoxoY94ezpgd4vwvfAaMXMedBsccsQDGKSYTFBiPmD9yGxVk77rC8W46MofRGNU",
  "key7": "3QnEMDizHNimEe41WtkAP3LuRMS7n8A32F51qpjqoGk7LafHbxYiUepUVEKf91tPe16ECUjFYzHm3PVXDsPMDLao",
  "key8": "5EVztbywdxgLYT6mT8ArBpAXSi5yrPQzErixsghQYZwJpvAbNT19g8jSzofx4KZHE888T4DkATBkhTQ53RiMi4Ds",
  "key9": "5fG11nCKC4nkCN5dPoxnTjyr9P7dZd7Y6bma2jpPNN9CkHNDqeAcwQDAk73vEdF7QFtHa3VNMszC5HwPdauNBbJU",
  "key10": "24eZaMcVkRRcpH7D9oANpHpmhgSYNMTsCXDXj5LTFMEF3JTEyAXcgHMs9YHP4vqPJeTv5ehcbcEaNJi8DBrrPzfE",
  "key11": "5pxapWoD76W31G5FUfvNdXTJACphnaE2FTc3JKDRyF7wUFNwHwwut2SfcJzahnNji9dyzutbjMWxvgjp6a1iuM5j",
  "key12": "22YUAqZnxLsdjRzht2EWg9zMK6zwStvBsPzVbav2JeW4o2zc1DTTeWYFg1i225Gj2gAaTrAjNE9NHPyoxzAgQrk9",
  "key13": "A9Sfxqy784LGH5uRwPqf3gZtcwVYeZGmoQdTS7E6hMHQ7e5AYP2w4LcNC1s9pxbhLhvxJqjrje2reonD8VDknJg",
  "key14": "NVebgxjZoqTHTJ8A9hXfx6wmfwHvMuYYRg8HwUyRSnUzLoUUrJpxsMp92zq3duyLQd2anbtMWRQ9JS2gNFMHghk",
  "key15": "2PYc7S9hQZYEC3EizoWe7TAkKpAWwSiV2gDYFVkgKdfeHMWuNPzqLAjso19dWumHsAzPDu1NQUD4uZjUwEhLugJP",
  "key16": "2VvFyixt5bFWNkYwgbHcV3Htw2ynx7xBKuM8PiR7DkembqGtMJeBvS54cy1aeLMaN3y7g1mYmyCKCa54TuUuX5SQ",
  "key17": "4crcvcu8AjKyFfuKfjWB7gAW1utmG6hAZKSiVyTDMp1RVrb55amsSFm56r2pPE4JJPMRrmJSqvJUUGYUmb1hzB1Z",
  "key18": "3yT8w8KyKzUr7yD6yq5hG1XkVRYaGjbnJ16VT8DCtkipppLkRKivq2Y5PQDWUKjUDthN8Tm8n2Wc4MgPj2sykEeV",
  "key19": "5bAcohCTwZeFTU9BhVw3GZFNmPyjCtaVRFVwver61kdvoQnArvstyif6rNE2NoUZ6J3ARjpAaKnVDCtTnephtPQ6",
  "key20": "4trB68bMhpMA5dh2Ya9M6ex78pUkCf3cEcDrd5FqmPEfA4PhUkhefCpf6tVfLsDSPyDb5uEVwBJmYBgR7rnSmif4",
  "key21": "5m6cuQs1kiAVjpydLCsoLHEfZ6FUC4ZzM7V6aKrEMZ6LRkSKAq9JTmrDHrb6iRwKMgGaWHidEQF15AG3m35k5syv",
  "key22": "2dindAijneHUDoCgiSLVQ4eRMjzKYEKdUg6NjfjnbyREP5fYuAPRbK7oP833EergMef3TnZC3aXCmCsAB8PyTsYq",
  "key23": "3SP3rGCW5S7m398FPkGYhkC48NZbt18bqcG4WZXRT2iFv6buAcBreW2cunPFdhKp4hfAwYyEmLNjgJwL8MREBVAd",
  "key24": "64Wvzh8NhU4hLnD76NFpj6xwMETadpMFs5VdRSyiTmzAkUrH6JhjFw5K5zp8VEDYkzy81pSd9TyjbBfqSKNZxXeQ"
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
