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
    "2vgAprB6AJjPD8gteNkwry5Z5MT1N8XGk3gUWdBbao5eAgFpKoFHkP9yfu5ckWZ2iepC4so49E7nbJdsnBXhP1e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396yfRzH8pEpayteY3P9DnajYKZboFFXjsrHbiNJKqqAVy2LQFVA92xe8kz9FTueasWF4gpyPeLWnhg9DEdA5DPs",
  "key1": "s1dsfZg2LbU7FbTqRubU1jxAY4jqvLPPtBfXcAaFH9VwjBaVruDDZschyPiGqHQdXBVKbZTA3hQ9pwtvGswJ3Cp",
  "key2": "5tz9mjhukpZnsj8LzUpuLuEDZCpPo9vUhL7UzxExXxb9WrK6QVB1eet4W936B9qLcoWQgnqmYcf34En421DZnV9t",
  "key3": "39zz7PynXGJDkALozbdusYYCz13Dwm6xkaJx9nBF5BgXMxSC3bJRuhML4bUHzAimk3Jd6ZZtoRGKZjWJMBF22HHW",
  "key4": "3bYtMDHS2wVccvTZVBRiDcdYJDf9dbAaKkj3vYz7h8uCyQBvhyukGC1n4CNgSNC3h4g7UDw362JHVQ1DJnEmKvtg",
  "key5": "3329zcxor4N8zD4R15d6TM1aFX7VRURVJ6adk5rxHaCJcs1qTEq4ZdCbUB28yvtSPJnrFa65kveEpAdCySbZvjeT",
  "key6": "3qooofQH8jnv41zYpRCGKEXEAR3vUZ5MMZhT3Z1tixjug1ArFMRrLHGXN9bR8ArJoMx2KejbKquwETzR7REopmZ7",
  "key7": "enMv47yefipYXtHnpEhDFTfVwzz5DXSYJc26BNK68enHQkz3Lnz9BvSt6tcsxzPMWM8rAQgxmJu4PEJ1ybpdAGG",
  "key8": "4WbT2Pa4YtjcdcCzkS4Bh5paJn9oeKwUxBPHsUdV5PUpDEL3HzuhYiCS3P9iB99v2PPHTh1rRgqzUKAqeTGiuFGB",
  "key9": "3KZYkdxqim5GUthxgwfGHsBAn6usQid7Z1RSQwxkmG9JzJjgn6wRdL2yST1952WsmSrDnye3cGvgtpTdtUmf16Gr",
  "key10": "5hPr4dyQQqG6Nk8BHxLFgKdHhUuJD99YfvygrDoLsyq4YE6LhhbFRU2KpPGN5CPBUUTyoz6cEbaUMk2tdLRxJ5S8",
  "key11": "4Nxfs9kqFffML5YqxNYhX8t6oYidveBBGeEnzwU4ccTVCpf6Qyv1eCqQHohf8Kst53AQaEhVv7fA9YwYzFNBQMMU",
  "key12": "4xbHSwDEidxBvCMphLbcGDcRETvXRG9PxTE11KWQ9e931jdEfzxnQ7jz16zDNxKqBcLan9c4RbQ31uaUh6x6k1T2",
  "key13": "4ySdVM6a4ziR8hsULavc68AuWaDfvhGhpy9fft4LGAb6CU7VvZ72t32kShpDpNuRJ71A2hEJi6iXudyDLDhTSkby",
  "key14": "2iRGVvAiMHmuvKUJQZViC3t1JagqjjWALSVmscpEmidTvdz126nUQe98FmcaSygzJFMbn3hVwDozJVUwY7ytvVdp",
  "key15": "3cNzNMc6D4NtmV5Gzosx8sRWtrTfwwya513sB8SCchTQ1a1xZZaGHvyN3ScPZDWULqVNYMdevZN3K3w4GdFdjZRQ",
  "key16": "3CXptPRToLKopmENtC568cksQ4H5W35dkA8cpNuokR5Vd4rHbFsh2RWYMVYmwWEvdSQk4MPg3YccDkTspeLgUr5w",
  "key17": "421zP48qm2Zsn7BbaUVpwg3KxLXDiP6Q4TiBArgLcenNeTCkk1Mwiv85b4vJ5nT9ifzeGyXX5c9ny96ZY7aT5ThT",
  "key18": "5ptn772nHJBoqZuCE25yG8UVUkxEnGympVLrv2UneV66B2FtdW4F1xSmprJfqkdXt4DczBptLXLL3Mqzbusfpmd3",
  "key19": "2Wg1U6HNzs19k1Lut7cvQWi3SEsHCJqx33ymRDVMHkwvBJ52r9tFBDK2zkLbTdYyLecWa8kjUfnCphrjhuBKjEy5",
  "key20": "4hsvWnjmXyjSih6hovQZm8TysTC7RdSEZmVqNkbHbcymnewoD4YJH8oHx2ACksovnsE2AgtmLaqKxEhTQnKMYHRx",
  "key21": "2XBkJCx3d55kfwZom9UEb1bTgrViJYeU4U2yt7kJzsq1MYA89bhoA3Kwjo3Vuxr1dj8dJw5pkQyELkJ7VqFHpxbd",
  "key22": "26MNBUNqLDBXpBER2xPZC2etpvjN4dop91p87odok2Yrw2RZGcYzowHcWApoNsr4GCGF92Papo9XjF1WXuyY4H8U",
  "key23": "2JU45GZ8mCgERffGigbaLvdT4s8nCKCUoTqHDDwQ141zHbDx465zXk634EDatuHaGV2VC9dDm3sehCJKfCGX7ZdB",
  "key24": "5Y5fQ8ytD7mZrQpso5hGgaT3ZkePZ9E25r3AkFSLm8uPGdZsyqZJuZSpcHzyDoDCFdFacet6Vb6XcXfc5UatfRqV"
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
