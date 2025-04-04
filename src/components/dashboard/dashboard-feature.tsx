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
    "VLWX4BxUSGmDHR58jzbNX3yK6nuJppSXNTcaAqjVtyMAniLwqhshb4zvriSN5BxmQc5zBzxekdnA26TdQnqF7Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qw5tKMASf8bqSuxy7HH64gaHBf2jGcmnnBZG2wKnkwSdBxCVp8Cff8UC7fpGSCZAZz4mJVUN35Z9PaamiZ9rK9k",
  "key1": "8TPq8uek6kVnw6yitUrRob7F8BhTWzcBAgM3dxKgCNNDZctYYf1rM4Areq9rjWN674ktLqTYU7SmX66Q8tuUqgn",
  "key2": "4KKc29YL1otnwGKogR3yRnoNVaYpnvfVnGjBSQV7ACDbYVgLUP4Lj2ab7HAftexZHSXD34mtX6dW8SB6VrUnefGa",
  "key3": "3hZb3xPA6XmZX324vNaVcjzEmVtUNCBqDcQAqDj9A7AiwiYbXmC4CgZGXiCitW7biPfWva7casvYiFxwJSfjdT9n",
  "key4": "egBn6CbPQmnmk9BjcHBPj21qrtABLuzCRBaW1yoLeQNmYruawHSkyzu1kLHWohj8EtgyezM7fiLUFXtphq6EHC1",
  "key5": "2xBQc5DBFCsf1VJEs5RuHvoQhzgAEwKCSANC2cbiJhAL7pHvBYN5DsTyNdJeacxcM27BM2kofYmCE8YMzwfR9sv4",
  "key6": "44TunqGTUuK5smVyJxvwMLcW7MhLQLEgyvSMLn5x5kKK5SYywnV9EgxQcFrVciNNCU46HmfyJgdPf42EEsVBeuLv",
  "key7": "3v47pnE2tkG2VbxceucopnhYvTwV4C6fT6wLcE2VysS4pfawycRejnMa2CUdqMVEF64Qyf3gztcrHurw7e2PwWry",
  "key8": "4pYBEyo8AZRvRY2eD6QcSFZ3JPsB9ktyfugGm6oPHisepwf5zPYaAmr9c9GAM3xe1zogQkg4ShxHuV2N5qhVyAfK",
  "key9": "3KA716sBJiNti66pT1HFoWp45ft1smPktXnEz4LXTikAK6L3NZnCd9XzCU38PPjvR7UX3Gkrr47gFurpH8kjYuVe",
  "key10": "2dQcWhZCpDtFmNCLEzr9awVxEniFhHC294659AEVC4JRWUgqrd76YYRdhxnQmGyhEcbsajEeJ1fpre6zwVEBkjRJ",
  "key11": "2ZVhrwtPJTuD9dHf1EF5U88pAsuofiVFHYckoj9tLrKuGMdk6j3HNUhAE6mKdFqvphX6D35tvBfQ6tXWhqy1kEjS",
  "key12": "3buXkJEnFhzewK6RWMBYZiti5QSp4thyc7J7Mt2XuvLhwVXMWKECQqJ4MGFDF3UZ4bSwjWmLdFp9okcKqiKXFFWg",
  "key13": "4SEDKuQ9ozrVEjHfUzXBLB2bvTqycJbWLLEARGiRz9UFwKnX6nNUK5AdSGxciqgh2r2RtNVDyxFqhNTrz6bLGwPA",
  "key14": "2uZ2g57ifjq7drcGboKt2FpHTcPD6pRHa877i7Q87hiTZJZpux8QrdRb2jRvDe83kabQkgstY2GTvVPRkNSDsSiP",
  "key15": "5s9tsPMBvAn3pXue2R6UJeHBNLWAm8qE5ndsjVgtBps4Z7sbWSGtS1inWyZbNSXaijL6Yn3Fpa1363c8BMDoKqRc",
  "key16": "27Ezmw6zKhC2bBfFMP6cv7bQESPbRLkbpXdEvmQcr7ofnLUSLDBNPjjeRBJo6AvkHW3g2mY7GVzoN69kz72eVNk7",
  "key17": "2WrLFU6AV6KUVEMjYM1iEq43ttvpdzFaWht9gi6fSpNbTPTquDp5PPqWbyLa7PqYHN445KshWwJp2VCAZ9qdHAjt",
  "key18": "8qZRtLnqfLTTGMAdywj9eVQLZQ1P1XLPowLHnotZR4auxYRgePPjpKU632iRBgqqXtxscX1GvtZbd5dmzDJyQon",
  "key19": "4sPCZCufNhyCaMLtQeZ9yzzJ9C24CeTQGevJmtsHRM82WJxWHQXdVkAy4Vwt1PJrjfqyd7V9RReoiVNutRRN1s9h",
  "key20": "47JJJFhF67KTsM1QNVfB38eWbwkwChZwftuXFmoazqG1HVKHmmJ3f3KF1a4aedVVUu5gMVkaQ8VWtfEE3T59qDxr",
  "key21": "3HGpeeaFiG3BW8bZZhqQ33ZCDTGMsEXMiZAXRCMHKVF6QxwiDMeSZ1BTNeWixZrQjJ2D15kkg741B6PQKbGnCbp3",
  "key22": "2HEfUcif3qniHtuvTftLNEbQxR5jZGF3WUyNtsMFYZzkgBUfDLrsoVAPzc7zKanS3omdXD6dYYq9sC5uBSLz7j9y",
  "key23": "wHNwTHHHxM1pVZTXF3dudVBHjG5oyVy9CHLzpPdfe1GyouqYNqron6w7s9uBJonsEj7VZ5fjhtgdVsxNDqkf2dB",
  "key24": "5VR8eBVpGCM4dCTYppRv2GMNvbpUszPjG1o8u9wc44hdoaRYAJ49RcHBHNFfedJ8cWo3wjUWwNpxSX6gDHvabMFX",
  "key25": "uJbe9V6qicFAJZVFeLPpxwJ1SFcLRyazFSA11cLxtYdCN9zTbPmEL3ypR4QUNXRcEPV6kg1d5xbfAH6pNwJtGhe",
  "key26": "5kpfHWumZiQm4KfzY6HgMXECEDFCq5pLAgymqWePRngLwwFUYh4GhTbgXU5SmRnsiuS6TRitZ62cJwmECGAtBHPY",
  "key27": "5fmaGKyomtsucp3fWSpgH75dGQM3G8DBnqAJU8gmSgeyH4XbzXWqkXWsDzgHsbkKZMT74X3BhQ33Gs4meNsYLGFW",
  "key28": "221axZWraHWJfLAajE1FRyBx9Vdp4WAdqshgjchHH4bH2NmbgWsDHxKK3vuRDqXkBHWydxAJsHbjMV5fhZTF4sfJ",
  "key29": "28hqkyxvTvUbGp6KEHyZJqX39F5sKMBNhRRa5FZVQvCJy2C52kXyrk2AfquQecvqnjWgWaSuqDEzvy2RmAi1Uv3C",
  "key30": "LqAtvHMrh8KA1zStciSkpPNXmktLXFNmPg6rY3qzja7atGqznfEDbfcugD7DLYa3m9cu85fCe5kQu3pyQ5DYYMb",
  "key31": "65ApKos63LdnKKFp48YyESFgsvik1YvupCvm3mJc7mizEiP8fSHVo5nnHMwzmavfgjevzHHWxBphsGrU6ckwxytH",
  "key32": "2PycCV26xmfhVeSpw9wuhW9cViaefN7vLXp8uGDx2vkvkp7815DCRgzmFZPYmmpQ85F7YqRZX1V7SeqruNu5Bjce",
  "key33": "5rS2oJvmk5GYP4LUdvN3AnpNLWokgLjYhu6rRg4JCEP8QYWQK2yuva9NPezUqQVUMgTZRhKAiwNCixq1LJa6fXcC",
  "key34": "pyrp9WJ34PdpQvxxSkXFtZnDRgNcVsCHo2nxGNhTprCqg4nXHxdRLNV9i9Lo97mmNXg2QdcYC9psLKtEeUP4ycj",
  "key35": "3QrifCczdRZBWqDh27Zicvdp2UWjBmEp2UPWs5LszutzYkAguhzykr6ZjYriYQFCYwQQqffTJhs34Xs9Hr77AdMJ",
  "key36": "4z3YcAdmwoYBSa6ZJGsk9smmCUDM6aZNtHWoTgEefZKUXeLPELTrjoDc23Z3wGqHhs3tPCDVqRzEVRR3ix3XxYTW",
  "key37": "3aUpsM96cMZpEg6z97YcjoCwdvQAwRMLi7nVWMaZTwCFUvScPdTm4yptHc8gXnWH4mkrqMgEmiVs4oPT7j7Xwm4K"
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
