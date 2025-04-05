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
    "5acA86LHkLdoa2PhD71zbXiXx3hdj41bWxx29KJBxYmsNMYKY8aFgjMSmX7pE2N1aWLsETfz68ZLRUJ61PW4FWno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VV1G257zfYrJyVbtWXSeZKP4KfJ5cqNPfL4F8eSeFeT3bZEodSidygbYMATWfZPacwNQhUtZaA8ZuR1z7dAjLr",
  "key1": "4h3cmppHEgxWqSQggfnztvv7i6A9ZLAZpPmLJvr2p2gxoMB7gFLLoUQSyLYDQxdX1peZYh1i5Tynh3TZUG8jQrCz",
  "key2": "3fhnRsSXAvhyz4y4kuuoSgubrfNoXGmL7uNgMuJAyHXjpa7zN1WG1vwJDpUf83jRWkNcyQjHiQk9YnM59ZBo3TmH",
  "key3": "28VjEVRVhEfDqLjbBBuyijDoUZS2VAywxEmyWUkqVqwcrhwfV99XMPBRuL7KdQf3P99Lz2hz63vH663VPczoB5J5",
  "key4": "2n1ArhzVGpuXWEm2D1Rxg6N62E3hY6bKEFfH2mZpuMmzPuMAuwQVuKeK5FkJymDuitkspFRWqZRs55yVncz9RVU9",
  "key5": "B49iHXBrdZE5JtD8eh3UUFbbzJp3vHoWqWoUiEaobrFQ8gdnmo6dsf9xA56EaFxQQU2uEUjYMhUsSoCEA1Focj4",
  "key6": "5GvqQaeJbfGou4qFLSSBGtoSLWfGyKrYvbMK3eodBe7mM8i31kdRfJsKgtGgvbqmKLcbsEUHAEj2sRFQNVYLFe5c",
  "key7": "rFQZzVMAQkRbPio5xmQnCqWrTn52CjxrDDoePkkRcStJbsk8ErZUd4YJxLHAvzSC6wtuUhDxQF3wxYaaxSyg9X1",
  "key8": "5KpdsdKMooKGzyNaeMaWPJUCADY1xFao4nuUypRVUydup65LbqWTva4EyFrzYWpnKp6mgGFmcocHQwWMVnisGz7t",
  "key9": "5F41zJzH2FvVU69LAMcto5xMj57PERYxvYHb15vY7SCYtt7JqxVxQ4RPRLzocc4F2ZMbVLrGyT5zYjfkVZ1LJBDG",
  "key10": "zUom5rqyeczR3anUc5x1B62DZLdnfKeEYFAmqySNiRwas5rX6VmQ2FjzQM6LoVeHNHinW5n8VU3PRdRLRaPQjMp",
  "key11": "4NHEybbyK27pPFix85xDjzwB5LSHBo5fbBQrnQmuvb2xqeYwq3kufLPYzDwXwaJCA2KF1GZNQuMiHDS2L5C3db6m",
  "key12": "3sbx9TUCp8T6yELMYKGEhPXc6XjVsE8VdVEPsCRMVwf9h1Q5q5M5haB7jVEYUh2xshpYGEdyqsGsKDnCLmTovhV1",
  "key13": "5eR1XW7LiUrPoGgNd63eiAN7rb2nRyernMfmiSU1xq9FsPLuKSSicuqgv7sVpg2X5fRToNpuQAe9N2nwSw4yASg",
  "key14": "4Rt8HEgMWRxwpcUTkKQbzwbcR4pS2zWVZC3xM5nNoU7QpnpeR7uwH8nKmQznnoKGWAYMzxpDEFZMD2TvWBCkT6Zt",
  "key15": "5KmRLB5sTAWZfFs7VDqbNLyYBEEYUbKycgD5KXuocSnjpX5MKrSDEdUM1VqVh4kfBddYCvbu8qxmvH7sPyRUVBsp",
  "key16": "3f8kMRqb5rHoJXZyqFMevtGiKrcWXjcmxhERnCz27C1dD8UGH4JCAX9YWZMGn1C6dcvu7LtdUZbNqUoNnfmhqwJN",
  "key17": "5GeawYvd7wfoi51abZYC63mo3iNXgNqeMLWhLKX3o9ezxWEup9VVihC6nVevAGYRz3JqcA4AkP1npQ9idEHGYkoC",
  "key18": "4cF4VjKTEDaKQvTR4af4gbPh8EaxnEzzVqR5bDQng8LaR8oUAprWP3tjxD1KevNWF6pHaVq2wk5WeeFgku3mEiTw",
  "key19": "3EHY74LmNt95qpAQ4PsH3XstJXQqAjFAiarrmrhhFd3cxHdito44ktnw5aRUQiYhHcPTjJ3g32vmNgcNKhmEdc9X",
  "key20": "2DhEYBchq2gdUxEv3QBLbiyV33FHRXeKWczM3F9GkhdvP3k72vBKVPnKCxaoMSR6WG9M6P6GENbD2H9dLoYdGygq",
  "key21": "2RnfMUBechj36NLxcDKiowBiHWRmWEVyBFQQUD8ov3LFQ6gAmyj3khMLLp7wbVd6JzMUZUshYMbyLt2yq53wU3Qa",
  "key22": "PTRyrJz1aohL6L2QCHqBUrrkWQKbnnxdrZP8BXwfHDH2EZmrnJoWfDS1EabBdqie21QZCFGswy7Y7WVDJay7M8K",
  "key23": "25iEGwt2hJbgP1DCw3eVidmi9zoYXu9Ak4ZcSVecSVUNVQM1zWWfj9nwsXHWL2VnJU31f8vKXJW7oKY4h7qyCdoV",
  "key24": "21bTbvUFAKAencgNMguGppcieYVF8BkKAsJtJurqxX9BC9BzhZkvp9wGfc3DN724kD71ouW6YCam1Ep8eeV2KPMb",
  "key25": "4ZG9vhtc83nag1uSdxH4k5TpaBzmt6tcA58VWEpXKwWFuyga2ViFVyBELScdkCUcyVKjUpYMaaQ4iC3WrimtAy2F",
  "key26": "3jQUuioLh75e6eRD6iThQ39PhFfiE5e3ycesC8iyE2gdAxQWQ5y8PzdeZH1PiEEhZz24LG5B3Ahz4wCZ3n66fCBZ",
  "key27": "5DKaq2zihN454gPK6ymCu7euXe63rLS85vcPy1ZrUhujHjbnHnsAPEAuzU1tikTebtdM7ZLSaLuHBjJXxsxwpWaT",
  "key28": "6SLHMXQi4ybtsNM3YbYmV98iVB2133isrW9yTkzFsj7TKnwdEDSjnbyvr23TmSccvg3NYxBM73MGsE3DLjB7QxL",
  "key29": "2bzvwQ4yqYhxyDCpfRaJePYWuARezGU3PaZ2LoFhAGpkKYanFRXa11e2AMuf1oeDoHeTbyh7gvXogxs6L6x5t3Vw",
  "key30": "329m7S6TCZsCQ7iREdxC2r9HjBtajrUp8niJAbGxSMZxVDDpAz9yu2ukf1ajDCfrj3zvTmEGHYpRLVayY8HAJTiq",
  "key31": "3trQPcGLQFd1S3yS9wtPDoBvvMdLkQ5uHXBXn9xYjuAsUePBFmwjpc61YtAYBLW2XbwSwGU9KgWZ7RaJynAhDu7K",
  "key32": "4bM1LdiaZZfyh2pvfTGTSHNuLvDw2XAdZfJanqFMaopiHBnyjQRAobEojeCmiD56N1gznPFVfHv7jqqMNiuHGar8",
  "key33": "2MbyUardvdnApAeokvriKPM4fkP7z9yczJ5i1Z5u6nAfT8audVeXgCGjaufCAJcXMCoeYxd6wNgS6nZd8cr8tAoh",
  "key34": "JyXXg5JEqMD8ZoBadfvrFJ69penGGGNHbTMMxyfDxC9tZYfwg5NdtRwRBsKtWLPo91zSJtzcmkhGdN2a3bQBPKF"
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
