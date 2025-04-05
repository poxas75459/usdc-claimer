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
    "42VYyAjwfm6fXKWftvHbrEitFidVynNMEDbtYtCvqZAB7AbUtXwem91jJhptiycLS891pZ2pXRoQSuWCdkBsrWzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egssL4Uf29WsFWH84MofAj8nCC4iFfzAw3EH8CKC9bJjTVLJUMzBHGXouurS7yF19nzAWi777RPkjPztEPjWFcU",
  "key1": "37RkF7RVwa1ug8QFcK6thjRXhTjpvKy4CP558BcmqA1V5b4eUt8LpyZwmnRc896ydjjgqVUVpTGBsPi6PmqSZCTP",
  "key2": "3aUM5PpdCjA5pUFRRLi6ymt3BEyb7odKPrncaq1BN1Jd8W5zLoJ88LK7iARXRwxb79S8ztpxQ4VXXGTGgTjHzW1L",
  "key3": "5rMyFhSBkNbTmBr1H1qyYLhxjB87kkHFBHM8GiBgvdXy41zGxn8EYaSqSM1Ct5dEDnQhZr1tBxbuzKA6DFstCi5w",
  "key4": "27nNPGVPx1MBSY5mDVzNyvXAtxrF4pfiMnQ4bvk3YBmmWqdHQXeLoZ64yMHXWsLqG4tzspi47wAUya8JPpfTnybK",
  "key5": "8LVszNyUZRv7Vk1wpYAzvg2jkTPUnhEG8ZGzdLLbvk6zu8ZmBHNzdNDxhdavx4SG7Q1W76bAnxx3opkReVAeBfK",
  "key6": "2cvwKghqyqUDcX21gTHH5sAT1BxMmxyYoVtWLQzx8FyXjZjenu3UXP4reGzFgK7ncE89Xq3LcvsL18tyHHXwYmqB",
  "key7": "2fXDzm5FLb7Z3VQszxKmyxAd7qu1GNGQWEmRW9zacZeb4dNBXLWmDtq4bhKT35EWYa28n6btcKvDVtXK5NZUtRTJ",
  "key8": "5kQqNK6wakVeU8jgQbUWzosVsy5X9TABefZXtFSMwnaDDcLfqqdfV2ybKP6eqTsLvCEbETJvT1bbejHaHjh7hwnf",
  "key9": "2rkmXKTziC3CCTcHqRL6fhSBWzG1F8VwcEDrxVTA22KS3rUCrn8QZAMfT8XFv1sbvB2zHabusY4rxf7kZspxEAHC",
  "key10": "2N8FPnQv5RF34JBe7VowezudhvqV5MrDRLMoPZJdHNxKSvg4nDGyYGEPzrF3jMcaDJUNSGBMbHpUmkoRse9bLY1a",
  "key11": "2bXcos3tHgvG6Ns5SyLS6H3Z3XpQitZq9vgTggArT1Y8L2oRy2bNpccibfwXpfoakgxbSdf2EfBLBfTfKKnsRSGi",
  "key12": "3t7zab2qj22S8sXKetLrazjFhrjouJsvMgxmV2YMgeuZFwuVXaMd1hyihYt177Eq6HjDAnza7BkBXBcnQddUDdYd",
  "key13": "45LyPWkL1Q5ULXEBs9oYKFLfGxXptg7QBM6mLVrsrEXMsfDYV3WVneSf4JS6x3AWB5hZmhnAPzjmtahU5gF6qruB",
  "key14": "5YHnuPtZtwwhJekhtm3c8DvkX6jEfEtzBwWRucnTxxLL5zYZFZVUJgHgoZK2QHVxD748UoPpKGp3aYqbmqhMvru3",
  "key15": "127fMQ9kqMkH8AFop2RMtBBmsYiXaojQ6E4SiB4iRNJqmBGD3jjNazEdoQg7SCaBX1HEyFRFJdV9bMC8RmJpaZoj",
  "key16": "5G5wUfmpoHkqoSywKQmamQd3yEa127kshktPGKJ163Jj5BEKADeGjntp8eiLSy4BVRTvYX2Vt3PR8iMa6Szhki1D",
  "key17": "54PxjTjotC4RgiJty13Vk6U2aogwEgtqdkhw5q46zm93NtEhU8ryT8ZbtusJQD26rPuzJfSA3CUu1mWyjafn4Bzk",
  "key18": "2sMugcBDrFeSmr7bqJNPKj9aEmQWHxSY5RXCbSJj3C47oACJPmbAAyMJssLfZvAVyHnDtYP6AXMBsY1Yo2bC2fja",
  "key19": "79kR4bkHiB644NYPETd6MMksHf3KH6v3Sid27Rfv6K7Fq71dUSj5oXTsuqiVtH451k2Co94cvWyv6bVzEEaEWcr",
  "key20": "43QYb54mfCRHCUV7CaEJvzRhQqHR4wsym2S51tGt14v1Jro8A4nsRhnmje4sRLhqTuVjwXzD7YNmHVTZzfNLkWyt",
  "key21": "3QQwbauZ5dyKMSJKpi25RmaekYZGhrT3uzX3HQ8K3yQsFVVhZWfLTG74yYzuM172DYgwek6fbo62hHQnSULhymUW",
  "key22": "4VemQCHAGwYjjpoGsS7aCpD8DFXwu334Snsen2Zv1ewwZsdbg93hqnt7Ajkmit13jpeAdbpUxmpHXUgKdW56Vaou",
  "key23": "2qCUQq92QmXEUCNi3yN6yu46AQpJpwh58Ce7w7YP1ypCmSCGfhdfi5dGFQzjktBF3qYwfuJmCVKUg3ju7NKvYv5b",
  "key24": "3fhN7Cpxhu4BKuastJ47Zytfj4vNq2YXgq5s2v9Mah8516jxJKHrSW44r7HgQcxJdtE4uvLeuSGoTw6DpMdjSsYk",
  "key25": "2W5tnKjQQ2dC5Ny5AMLTWQaxEqENGoAVPypHrf5EHPt4XcPjp7DZxpBWhcX67csMbFubW4PiGCcBQgbc9Z1G4W5F",
  "key26": "5NUZ4LtCG4MrCLsCrjpzPB1u73zRKw7YvSc2G7tumMNnUv4rs6TyDp61TAre6QU1WeRZLLrYf7QPggCBhEZcE7xQ",
  "key27": "368qkyAKdLjxKzWAoc1HRY68iex8BiGaXAeLtFedJdNwBdo45crjq497ZnH6XEKAtDwt86b52sXzB22kwzxKDnVb",
  "key28": "f2RChe9XdzvzTvzhytiCTmGBvmkw6wLYNt1TXPhSUkDy9tm4FBc2pfPTWvqCRmoWa4bBf9EshcyjBBST6cZoUer",
  "key29": "Snv12P6rGqs69rrxdBZuE3JWiAg9jyQ7e8o1KravdMS1jHGSnFVb7Az7kdHdXNyzsnWP9zTaFFJeRLN7fPna5z8",
  "key30": "61EAG6skrSFwKXRbGKaeTtoHCdBFbZ1J51RPxfew5EbNt7aREv5TFCNdWm9ZdcSQbkYfZdzC8VMuE7t3kh3vVzrE",
  "key31": "4htVQisqG7jbuJeJyPheZtABUupTDjnP8akJoKvu4JUmfAso76SERUVuc1sHLMcqNcD1vQzwx8AhwbTp3Kex6xyD",
  "key32": "3b7sF3i2eHejL56XMbmgGAygx2p5mf5AXk8FN93qXr3xSMHQYMLQDeWMZbRv5HbwvY3QGsqPMDiAnTTcUKXnUZiW",
  "key33": "3vXhC1XXBDBNb4n5xUGwG5zaPseCTM69ZD9qMc2AgHVvYLxNtAf9kmuJfqLZmvFAHkK7zhmSRdFbcfFTiF6h8x1K",
  "key34": "qBAggPRa5hFoYppnE1FW9f8dzBz72aUM2nFLB3eaQL8zjUecu5UoX8U5haPJWvHYzFxCc6kpsrVpjNQHKYzpKoW",
  "key35": "5qfhcTunxaseHxRGmM82XiP93ZNUb7qWmvK95oyfMgpjUyyRXyXpx2Zun6ikMuuhL9WHBVZmTUk3gkZLbmZGeqRK"
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
