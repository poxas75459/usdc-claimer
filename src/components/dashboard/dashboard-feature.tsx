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
    "62MDYvP4y1xQs8ucAfwGH9p6xQ9ZEeUqeq5FdeuKJ3bfhxge7QvMp9s9RsDbE8Re3NAkfHiivDLWZk87Zjv8dCsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3nBAsx7SQ6VVqHbRNgd8qh5wX663GnxSut25XSN6MxbKrtdJXjY9pkgx61UE1koazd48fDWP9PfoNqqYoDe7ik",
  "key1": "23VyBhh8fWrCizFQ5iCXSQ9jaeNSdMJurmX3aPnn2ZB2bduVDrwbBgzCLy6XRX9dPDDNr3F5GqchMToUUN1LHvmA",
  "key2": "5HKtSudFYs3ojZgvJAK48tuW2Rq87Shu4YG2RffYaasZWvbtkdFVYXf3eTFbiJZ38Av9iiMBfQBHPpQj2b5ZEfp8",
  "key3": "NFSsQevyYdK1ixVjUY39nL7ifnBDZjGcZwkEqQD8irosxWKR1vZqmmeijCj6mhXR79qkWQftPgE3dbF3g6Prz54",
  "key4": "5JRBb98BvRoUjzb6k7BBv7qVgtDxnVXZRLoCGK8mXJ7iFC7vLmB8Yx67rL6AGZjML7sDM1zPVuFzHtQWcpGpx5SU",
  "key5": "4BHahbMimh1yFxN1urURUndCEh9nbojWwSaErCWJPtLtvy4xbw78ttLZXks4uWE2sMivTz7HBuaBuss4YfT8w4gm",
  "key6": "24e5WTFKx4f4YNK6JYCdJ3i76ATGxmUun8CHB4egcmgXAGggVdwmaeGkwKgWUYLFfYveJUESjRVLjpBxe5EBHewM",
  "key7": "2vCdSf3sWVaaJ1p8aPsbX6gMezsr4L8tSHWBF2Pv3DMzQVWpbrBNe4wG4vKw9wGpzjfJtYiASUtrVCfcZfyVsiZX",
  "key8": "hBeA9ji8nsLZjjTXvjT6X9gKWZAhpGoTuj1VPUtpWWvogAdNwnC76GL7HUHTiEWwNibP4WBok6raUt3LN3jHUnp",
  "key9": "4XfUbWiMfF2z7ZNaBgpqHEtfzdtaDA3mhLteRUz1vhQA39yMpsP1fo1RFAbdW8rnPxiZbf3xNHq8qqd2bTveKHuJ",
  "key10": "3E2i27NZHMwt5Eq9dZTwY28J98sHDLrC32uubXC4FSs1CmDrSRCN12LW7b9MuAyAv9J5SKUab4pd2wbQkyfzXZMZ",
  "key11": "yrAUuBp2N8Cpf7jqfHUtVdGvqTNc2r9KUKZcRfkvasu1493ECsqXh6jiPz9pLjjXCABJ3fAfRaZtrBssHpeq4WU",
  "key12": "3VhiJimgbtKPU6PLgi2w4QaY1yJvyZV74QSrktbybv1ZEQWhoqP2VVFRqWGW8H7Mi4HAqeif3utUy6vhkTgYmffS",
  "key13": "2KBDHWCfEU8xtTKKbkFTW1CJC4AmHwXKqaW28yVtW7hKAaq8yEyArdtPSQu5PMWs2mFcmHV5fgQYEEwXXrpi6vb6",
  "key14": "4E9BozxvE8GqZxrQubGtv561WGoxpRxaEJFydzx7nyVsXARXf1XsF2sMJrZ6PCEYj2Wge2SBjhU8ePL6TEgBUcbA",
  "key15": "64Awbipiqh9V8Ei49CwtqHtYHYFyNJhU1AUsNnzXzRw2Buj6hvhyJBbAG7tNeQuTJaKyWxbcpCGYsnb4reFfh5M6",
  "key16": "39hADFn5Aq9B8JMadeR8pJmwWDGekBnYa3M5t6Hips8SJjFSNt8WjeaGiuZosHawxrRY4fUHmZwuo5DKwJDkuPzW",
  "key17": "2Ga1kb9ASnSwTb1hKHP1wuCwT8Fmjy7BBnxXtU9AxFYB9QJarEYsAhuwDeESNDfPxZWRSn8dZtKkniBVv4HSjHJj",
  "key18": "4LpyyzrbRx5GJr6dqTX8nXC5PbDnqbgNKVgzUjaR5255PfbooNhvn2ujAKzQ8xDxgv3j1f89YowaCgaboPxwB9v8",
  "key19": "2c3KRW7rTfoaxEPHBJsesRJV75yngrM4g8WeKzxxbLiLZh57jziYcz98iLpSzmX8hwSeL4SGXYzYMbxMsABVJ1kw",
  "key20": "aaRjSJwwZ6tpB4KJnYcXbL3dpnVw9MZAh8eeWrRZuszGFav7z5gQi9bvZd9QiZEDmZZdQh9CR6QhWt9uok3LFnv",
  "key21": "4CUYJjy9Pt4VwCBSJHkmYFjr66gTrZxRCw1ByqRAGaQ2NGMjz6JgUEjd3aBGZ9DCtTURKmPiynGqL2tXftYATfME",
  "key22": "25zsZjwXfiGZ92LngrCJ9DPBrftxzx774CNVE8ZC37Pip3nU6uNr8A8qNaM7nwyWfa1xzzyuAE1gKQDpAhzToLNw",
  "key23": "4QGbZinvcjZXrsBpSkLwKYfjRyncpCmzJxbRXaqJpaPJk9P5u9tVDCLMATm5mTZkF5DdSaukh1c3ccSvwpi3n2MN",
  "key24": "4CnJjtUgF8eVhSrxrwqWx1cm8dabd1k6SAU6fiWTzP8ns9wNBhL6z3oAHXLHL9JDckJqpcHtaBrLmzSK5U1zZ2AH",
  "key25": "54wdAoeEYg6KTMNJf3ip2vMhS1bEcFCrqzAG94AqQJj8hUxuAStFiSCfbWM2CxF2N6ctHUjy5VmtKdEapUtpz76Q",
  "key26": "4XKrTzZuew9uQoaNoaT69mRR9FDSrFHAZ6dFAJGutA67tK8vKw5k5QsfL8de8CEPjxTr7jt1UFme1pPofmvSTT91",
  "key27": "5gxX6ARQEyhUDKRU3zvbjaA2iDq43HyjwTVH2ucUgjcNA7fHLNL9aZZY1DA7eyZ1NMa2NrZ7zjHdVRhX1gY6gu5b",
  "key28": "2cjh2SVqo738dSZiVmH5G9xSoEZjkiCcvGfuDogVSNmLis5j5aQ2vZjYMSGsAHMBuRn8Dxi1QzQosKF1M1X28brS",
  "key29": "2VWP1MD1ypd2xaZ4i37kQhq574dvguxGfwAu1ed5uPmXdWB8jhTPNqkvipuaWANCJbbrduzRgh1CezWb99XNjUrR",
  "key30": "2vNZgjYPFVqpYxQhvnNDzzxbBRJ7sacgSK8mrdX38kx2WBKAboZZ8WkQivcZpMv6vTb4PQCYywQ6PJKUsd5b87Mp",
  "key31": "4chi6FuJrnmpDnG9A5qNSSx8HyG7Bt43XGScuCLXe5FyzTrjAxHRNLnmSmXzobu4yNewFNuRKcaXsnFJWM6Yqsbk",
  "key32": "4V4cYhMyqt3x1EoNmd4wdC6jEnPjxGtuN9uDdFX67q6tzt9JeJwZ3uzkTQBH1868DVJ5e6cjCMrxVn4cwcUR2NjA",
  "key33": "51SPje2C7iowyRKGR9PC421a5e28UDh9ADL4NYviuEiA7oF3JSqzHeFR79gjS45oNQ5UB396Wh8gKKtmSL553oBg",
  "key34": "4xLbcoNH9A1YrTs4BPYNs99TXPX6VwTo4crrKfssMxoSTsWuE95bjJBzxYswUGSdnAkeDFrybywCTXrJsKkHc77A",
  "key35": "5RQk5pDKcauYCmDEdmVrprJkzxUmKHVcor6Lr3QmU23rXJK7hScHks8dxhcf1Lwj6F8C8EaFSKLSbQxeA8Jh3Wcq",
  "key36": "3v8ZRyCLG5yw6NF3zhdYDLR4v1XAgKG6tztgQhtVcKicAxF7jsBVW9r6Vb7NZyQVxEJqpSE4S7LPGUkFxEJw4tH",
  "key37": "57HGVAAQPsa6Xs8REEVcguL5GxxePHua9G3LuTeK7rC4HV2VPgBZazivkTeK8QPSgJg47WnZj4AMojrcBPx5G716",
  "key38": "5581rESSwwX6jdtArFBKkse2nVPM6siAUpYfn2USxQcyshHmUiy6Z7GnyVKcdBFPZLZ6w4Q3KDPULS3n4kE6di8W",
  "key39": "jHJ2T3WHN8VCPSamLcQjZ9PoXhocTvJ4HiwasBGE6CHSBZaimGkR4UqSXwkTKpsrt1KaxppBeP4HRtzKVgazQpw",
  "key40": "4trUufTV9fnqJfJ9YYrpkwDhHwyyfG4kjtMiS8Jk2HijYEYw1762aARM2rVbY6nTdHT1MorqrJDp9SNY46ViniL7",
  "key41": "5mD9r4qn61cqY5YnWVabhWTsoqT8PwkjSR94Ydk78FxzEPs2hgtST3AxoUmGNj9KPMBwDaPCFdXqVUh1SqafksaN"
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
