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
    "2GAh4B2uaQ8ZNj6oh1Yu9oKZ14WjDcnJagK39MgmpGkeAcAekthqJhSYyFe79ZeENawaUSXtC4dt2EFasYJajJeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B9mcYa6cJBFDjsnuAzoQBoFLYVRg7yL4PcgtEgkFuakiQ8e6emuPVbKcTN55Tizie1iWKsqsNdz6PNmdHkBzrm2",
  "key1": "5CEnGi68Bng5WijceqGPNp3bx2fhoX4fvGzCaRnv3hpcgv3XJKKp1mwxpiwunPJyvrYAyvCXgZUhqPSANhcNaT8Y",
  "key2": "2bfZdzuaQGYem4mZPWJ394PcnddVQvPh2Rew2zZLD1x7qvad62rfPacsUhTwxJ7cDKZH8aPr9MqcyGQNTBJAsXHu",
  "key3": "5cLVaw69YLrbcjZW9kWTK4V9VU8dkmTvQECgV7KvJG6tuM6JGp6emCxPqYHJ1um9XrHsHXzUV5qMvsgTfPxPWemS",
  "key4": "5gsKWFSqzVZqEhNVdJvUkMkcsFnA7hRU15uzH17CYxfZHSeJKMDBbMsvSH7KRWfu57pehrscGA3QGkySUsccF1th",
  "key5": "4aK4idyTfJAcMoQFNWwkDXaLeKziSkjrKHk8NrA7AHxJE7n5iYNiFmdHQucVue41YEVajWG28xM6m8hc7pGMVn5M",
  "key6": "5tZSDEcfFVhoizuRMdwdyCUxt39oMCUedqJeTX8ou8Shx9U7Ei19ZikUNHNDKXsKfGnZxHWZW7PuZ4KYq74xLCA9",
  "key7": "4Nk1kjE98T4wZL7aibyPjE29dEuX6R5Nghkx888BBFbPUZi2XCrvDFvH2wB2RMyHHHiSMc1BYT15bqNedFumvvSi",
  "key8": "HkReWZegLPWTwjBZ37e3zHxK1ZVXGaiXBKA9VK2X7HHyZv3kbGNBjz71tUKnjFNCjho1DvBvZmDWWqaXEcNeFTH",
  "key9": "3f27V969tS92bW9qRWMezNjkCikuodtsUYAJP8D4Y7iEXJMqYqhutSitUFAF34ZfwMrpNQHyb5amBpyTHFwkdFdq",
  "key10": "5CiVsG5HyBwQVyL6hDMKNqRQYqPKumvUkjqUJw27gxVrE4BKu6CQE2wu44VB7NQDYHgz5DvCKAkEyi1aLdsaiVwS",
  "key11": "dMdRdQCqBRyFkcdfLa9zpJ4cAo3yny6YKyN8ozmwYa5t2kQ2paEkNhTtCjE3u6F1ZjEPatMvTD1nixJX4EXaNR5",
  "key12": "LoqGAjLT75fJa2ne6kvct9g5zmymEtBj4TCSkwX87Eyq5yPaEqeY9LTznfKBE2oaq7JVEWSrY4uqBcUrR1XxxeG",
  "key13": "mkZ9FvNLApPL4eswkKDuMrJD4vn4gkE9VK2uNKsvNyD9j5hD124yN2jWzhMpXGNwh2nU7gjzJ5nVzo7pMapkWnr",
  "key14": "3KELdNjTFB9zC5jbZri8KMSxpMuAVtRVdUGBBM7adzU6USNqdxQPBkNeBBkcCzzeGeNkEZCajcM3AuCfWA1nCaBg",
  "key15": "3XgTq1TbfWjLPZfZahpgeu7iuxBw18tT4fAPrFTNqi7FmFizsqTg89DC8ewmatSwZ95Ezqutr7FdB2ebzGDt7NXw",
  "key16": "4HKdNB28KxTsJPkFAFcMtesNZMKsca5q3xWax7Dj2BQzLNCLxGtp8YsroC7Ca46ufZFkkzqZ7LUdG4W2cQCr2omB",
  "key17": "3nviafnWhvKyuBJSLszE1oCZFtNRb9Q7xekhr2Ywc6ThkwQSHLYFDVR7kYVj1L97fUbPET43qf1LAdDv9M3C9sb2",
  "key18": "3TPBb6yFgzSZzmBLjgvikz3EwzemaHkXzhKxKs2bCbmTxD7RVNccvksqRn4ebXbfmnhCFLPUiNLGS8CwH6XUbhNM",
  "key19": "475aWjFV3ySjnCWzUNhdJ8j487eUZZmZD4qh8j3KScsRkuktT5keL2n1wE13nF4gHPGWsagE7iQgSnhW3jJFFeuF",
  "key20": "XdnVG5CqHDyXR5P9fCffesrUDWZsDKfQKGxNaU2SnDcH42W3DWktbvWGKrBNYzD1YEQNzSFvoDUKaTuQnhNt9j4",
  "key21": "3i6RsTAaZJpwB5gvx5J1JLpGjq7K2c1iSJwX1WUwNs8BPxhbQebPsqN7khhdjnLoZVMNsets9C2QSzSwRmguzykr",
  "key22": "2MTCaNTbRvUb44UVSCRRsmEGBQoNHRXBcXUggtHMqcG7gdfZo8gWjkLeCpxaQ7AWafCPCRqcaGbSjPx21rRowZXT",
  "key23": "5ha9fYKtD1s8zsz83iQFSpFaEi7SdZpHrTuPoJaaSBSTo78MSnHdXsXHM2QRh7aNG6ACx5LVBqPnQx2jubzpYWwe",
  "key24": "2p6fu1VUWHPCyN3c6Zrznnn3TvvREGnq2SnkmgcPvE4yMZkQcfZiAmCCU6aiebnvDMq2V7h2Y7hj45AiXaq3Wtk4",
  "key25": "4SSk2B12nheJyRpsj5ugsYTG7MR3kTfsJ1oEzT6k4xmSyxs32dedjjJqi6zBWKtfQC7sDG4zGPozpKYJXcWghtS2"
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
