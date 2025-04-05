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
    "3HcC3CYQfBPcCKeMwXqWmasM5fa3Qygf6CbjqEgeBCL9zpHjkPrfVi2hPJA26i6VM7QtFFME3ZqQo2Jkuf7W3owU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mu7RVojJ7zgku27fiGyeQrBSZKLWNezsreuTnLH7nmWeCfgydFp2tUiRUiWfT7rThdpEsUvDE8hPRYjiFXJgdjc",
  "key1": "8GzeDtAhguPYyRYHcpdq67D2nfrfveTK73M1a3yitgxcaq4qZxYvJK5w6YcFcrJzjcHvGePkEoBGhzqhwTCBkEo",
  "key2": "uV5si9KWL8E52jdSTyNspWPiyjvyKnnWw2sw9nSb77pgKBXakHK6E59386GgxJZLU9W6CEaxbdRaFZ9N8E8Sdvk",
  "key3": "36fixNG3c7wX7aoPgyXXbs1dXHjsM92Jc3M51sTCo3BwKizMBW8sHCs2k9w9k8gGNmM9y3pH4fr6GXXBMcJ6kt1w",
  "key4": "SbKWKoxX2kUvCSHrW9nEoyX6mnsgUTDZCAZub15DLN1wNg38MdAxeaLimQ85sWEiTPmb19EdStJNX5BXaoJjEG9",
  "key5": "2F48uKma5L3h5earCB93gAMsQnXmuPuCiXZLURyyYLKFqWCcfowyuBxDaJUDFYvrJJxDmq7x4b8ssHZaxGxL9Eb2",
  "key6": "3C3ToMKGCUnuzaqGbNEXRwKYA8qSxECLPePzbYcAL8zr8ybyM8gcuB2fPSr2pv5JQxPQzwULYiEhhBkX9skmQtvj",
  "key7": "3chubBz8vdEYV5YbFBa2otceEwXYBFgiEc6hpZRLHZn8AAKDMxVD5m4hzCTH2pDvUgyqsyweu2qdN48y2PS9Eewi",
  "key8": "4FoK9ovPmh5LJi5g3yqNoijEMjyTezPXBdnBwPkaB6stxZMdbFwQJyzRSmVXHue4Y44h7z6bL7GKoHRQNy1NsJZV",
  "key9": "5YUvJc8xKqzaERfcPwfCTxvfs9xRZ8JGaV3jT1phC5mTMmgDsUVJFtHrnQgYuACjAbSMm7oQvEjcbn2s8FnvK3S4",
  "key10": "5DdXyTNTbke5Be4MndqAV6kmEgDr3mec5B6ctfLcUvtUJHsa74T1Ac9FcdAcaCBPGjMshFQ3h4LSptnHiUJSFv39",
  "key11": "2zTGKJkcAm8xxh4hqayimjno7kKvDG6EqZH35jyrAFdQhCh8p9aieZfmf9PpCqneiPFnAMcFaTLLLJviRk4dZXag",
  "key12": "4px4RQFxSmY7Cqn39zDAYq1UEH48gRC41UkPDa9Mz3BmiVfB172aEAE4Wv225kYXupq6NBJ4mkaxcbZHvyDqaZEs",
  "key13": "bncJzkRKCWdYbk6NogpTDTNaJHUBdKvBoLQK9L9kK1JTjEBQtY74fxQkZe9B8kgwexFEg2vv528LACnaG3yHYZb",
  "key14": "CJkNx5zNNX2gmHUa4aeJpUzPpYVE5W5V567ZQPBok2GvqRcV1mfZABeLuEeGSwCnBwAvM7Yrx9rPuRUBdsAjg6T",
  "key15": "bBnU6FqERaheLeFiniLWJo5ELsMBnXZLyGBzLUw2eGNqv1L4MPhAtNjfMRPjUswmki9BUNuRz7g1M33HeJ4BQCz",
  "key16": "2MdtjKCwgFZXaY7QcgkL3HMMx5q2LBFTQio9ZvrbSeagFyLq3Xg71ysymQH3ChcRuN1Fi1CbL5SgDRPyuwtA2s1m",
  "key17": "5z3uwseN4n4o3LcsuUDTudZE5efacjGo2EoveHDqVvJZ5ARVQYBGgCR7kUbkLQC9psconw5szUqQ3K3rQYMHw2CD",
  "key18": "5o8dzJy6aVQFtv4iZAnaZEajspC7P5zdbdmkDP2JSNe4e8BYqunXxX8Dn1FDfja4ZPrRnEr8UUpk8DTNfAQaVRSp",
  "key19": "5xVcUeFrxYCn5aypqxLVzBqyzZSEFFi4rF2Rmk43eQZrHspHoNb9fUsUVhit8X5ENFfbaDqnr18Bw6uJHADma8fh",
  "key20": "2yi1ndVRbueVzr3mVv3BjuYULgbc3kp4w6NTLurxjWf7zap5PZjFdzUXuMxjv2YRKncAFkyahrWCwJZaEigfHHDq",
  "key21": "2eLxwx96pLxBi2bJdZpMnvHMP5uXpmHgYqa5uMTqyzYBXq97McY8qD2Autzdma6XDpNgWhwGrxYGA4VejWQE2xQ6",
  "key22": "3LnQ6ZKF6ae4YKHASbqZMqvZfVPPKboGpk6tVg2qsAmpkuNbkxUuGVjCyBXZWBQ3YBD9v8rEoMw1uHAg9J47HbRd",
  "key23": "59umph8JmhjBaJoSdUR126iuokfkQAWwyhsYvu29LAWhupKMtZ5QU9GREzCJH8hVJrseNA7YTVQXVosGzxpmKpSE",
  "key24": "67ZMhaeUkC4ZNxK8HLkkqyC5hfjufQf1xeALnPvnn2Sa6WGCt87wtKYhmg7SxE4YY5whY6ueCNhgSNUpWnd2bpQj",
  "key25": "rDcp3VJJKiZaBE3GWQZ6hBcfLUmKtoEQ2S27bUveYWmL5QdbQqxeG5VxP8EmXdVszLCYHgSmn8LYrTgvi1ZsFPC",
  "key26": "4xmrVWZXQYUu39kgc7bo2UhyR7djVcbnUrXYMJJRrDhDd4SPdETTKUE9jiAds4pySyU1Lsp3kCtq6LeqCWuhma6C",
  "key27": "5smYLUVjmKvwtpa1D6XMnw2yv8JMJSZknqdUKNZWFVDFV8zd6nbGJDZsPkhnPous3RrrjhM9Yb83G3C3yienzLip",
  "key28": "637KJXFMhwF4EtuspdmhXZhHuQAB1mpVmmo8ZouFzwNLD9F7eNmBN9n9np3Hg7zwRi7u1EKMoZNgAnDH3475R5R7",
  "key29": "3MLaKrCtRFfNBeEH2fABhvMMNzeddxZLfn4DsnmxzEPVXJAPcBdcGY3kmk6RjNrCTtePdgeHCifpbUZtZReh5RdC",
  "key30": "4cwk7mzvL7Bd8KYiFXVKifbSpWHb8ik6GnrATeu2GZdNY2WDH62ncWnGrHVQHRV8qRM11Pfe9RkNZoFBH7WrunFZ"
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
