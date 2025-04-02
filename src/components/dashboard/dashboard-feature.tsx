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
    "vEUr93iNpWRshNUjCBXg1JL1j5TZFmkFAQwkfPbpeJudTfsxYVRHhcief8sQXKWYP8BT1aqfevQTWK6kDxhZZr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzQWYU5RFD4Bqpnejp8CMMZb7mi1QcqzaiEtumB8SzaoqqvfPPRNLgawwQPhCPPmHQ2jdbQsHNCNX1wdCLosNfv",
  "key1": "2StfAgMGLxYR3DKyT37e6aMJnTcLyVhgHBqS8ech3zTszdyouiu2HK2fpzcFkhKKu9VcW9yYneXavu7zxpkbzFd5",
  "key2": "5Zs2ppwSq61bqd1NhtSnZQSGLUZ53ezoaeENw47jMM9182Hd8WsoMogm7j9Yq1uUZEkYNpZ9Zpw7hswC7S2hzXGf",
  "key3": "3XLXDoQuMBQisUvZPpmoEs2tgxPNoYhwtCwrtTmivWFWjAQTZpvGtMCYHqnoxzs6uKWGvR2eDQcVe8WYJf7KTbS9",
  "key4": "3vzesZVnjdcTy4jj4LoShMKQs6z5GmwfmuksfZycSqLjfWKwbgrypNjLSjsKNmghvNYgHgQNauv58vjoraxmBV7r",
  "key5": "29mEqE5ot7rDAMDr8GCST9eLQ8Le9knE56fUaNPhWQZr5Dnp1oh5hLRejdG3LapWAsdVzi5Poxf1PB2JaLMfHSit",
  "key6": "4pqcEUvEpww2EeqfdgPtdFGumQfMtBnorENeeU6np1WUUZot89Q5CG6Q8apoUNGjGGYAY96DVDtzRRmE5L24MW4i",
  "key7": "4qp24BGdyFGrXnSbhtjACsVFGVzeFRmUVNbboNJriYrxZLrcbq3EVr9ChEjakruqZ3hTa4grUBJxFhpj9gUTH21u",
  "key8": "3n5f5MuGXLjq7Y4hANRPSFP1H4WxEFhHivAuPPTw53Jx6aokkBKxMpvXyCvEFXGJjeSU429yASu2n2F4yuHY73Rg",
  "key9": "3ahtAzyWj6gDYTYjXbhQxys6Fr133w9jwTwBVbzt9ZYBztruE8fCbokzwcY5V7iK4dvdh7rivAyEbFCUrmiyqLw7",
  "key10": "iNaZeVZUhwM6K5FPJM5muV7xD4eZkTBkh7SY3wiMRTzaKeU78qVJihRNuuqJ9wCxaKbrfGbSnJBrBxiBNk7db4g",
  "key11": "heZnMZc36Rs3nXmfnDuWn9yevAM5LqqhidWH49WNZ8ik9y9Y2WdchCURUtqeA3EsyaKsfQGzT2T2rG9CPCez16V",
  "key12": "JLaQ3g761u6CPnQWS2AQ4TiohS31spGC7BFUpacy6ro53BrE63452BhHRiDNJc2C92EpSH82eZn1ax33vyuSMYi",
  "key13": "2ieCYguR2sU6uuPtrgT7xMnvBCnyZgZX2Ucinimti1xNg3BGfK1xBZbmxKiWDSMLQWastJyApwTm2RimWX6o6Feg",
  "key14": "4yrFWzBueXGLTv5367DeD86LXjqsXE84UcXR1KywYxUX5ThFSb5c6TGgZXBamBVqRaPuTZbYGkhLCDKhzj1antBH",
  "key15": "fapZ6arb8VY74U3sqgsrxkX1cahWacc9fQAhD99NMSTiE75jfGnpyEFfvF97RgC8GdJrNPg5wTqYWvK3hSnYerV",
  "key16": "3qcVS8jgLERs6JDWNaAQzL5mcPuXgd2CmHqxHV12u1oeAsjm7qKUveJNm6jxuYF3KELS1RRGvuJDCJszAwQnjV4z",
  "key17": "4Veu4me3CUDPuKPKFaMHjd3XR393gdmBoaoymyRyFrJJfiZ3aERaeU7fB5uYrHTdPqCb9dbYMwYjpzxbGFXMW6k3",
  "key18": "4VjT8YjJAQCB1Xnsz7XAbgqMjWHhyart9saHJrxhg7mhWvKWnYNMC6rCsJh4rn1GiYJZfPfzXK5rnaDVhcNCkAVN",
  "key19": "26e8o639jqBUPh3par3Kr5PHXZoaqGQPvRCbtzAngy6KWqtCFeFujoNNuD81cYp8gumgEJWCy3s2iBCQAaQEYUyR",
  "key20": "ChNVFYS1pGKkodQRQBiSYKdTGLzLHV9oKr55y5zK5o2bzVpgvNCgiHy9Vgsbyxe9YWKmpGfksd3YAk8R37p85QK",
  "key21": "3EKi2FgZ58cj8gGB71eC4MSF8o3f48nh7EhvUKZVSBfQdSnbhCAyQfNGjHSzq4ptFa7y3hZJM5SQzUFJovB9UC5L",
  "key22": "2cKx4eTHRnFuqyrPm2DGd5YXZQXve2JsJUsTq39hK37BpSo7VRyn7pCBDPjn7rgbqRupa8VtvCcCBYDaEDNVNRyr",
  "key23": "3Hqgn6Wj56vzE8mGAiFdZu6MyCgWm5HjvsmqLfGkKFzZgjNwL9jFTV7SprsvhXRSPSGdmSHZTjBK3x4U2nNMKnbH",
  "key24": "5V4gUiJVoqiN7zJRSkSMRs3ALZP6KJx5WK2Af5hkvgmM8uFvzURfNZ6kifrQUAtjgVJonbLnVsRa5pqJmPa4AE8w",
  "key25": "33LPah4aHcei7X6bQoD3jkNJ2AckR1exJVkc9qYDHJStBKpv7QCEd6KY7ritn7qbT4Z4jzzFrv8hcWj8krxukoHe",
  "key26": "dAEs2roUBGZS5iNdaub1HmcdZcXJzwSKffcydn6WTinsS4Qd35EJCkQXiedpV4pzhjHuZ3BzNbRGehFC4MH3cgx",
  "key27": "5eRD52ZKyUPJw6FmKe64FmT5GPrGXjzE2Sz6mjqw4H57zTAA4CtNE4QYUaHXsBWN7BCkqr4VeYYX7U2rwefJuUY8",
  "key28": "2pQXBAEoyEH9MXm15HVqrrpsJY24SZWX78sD1C9eQnF34puMpQCKA5xqGiUdwciZCehJg4Z3F23LdJibanArZ6dd",
  "key29": "2CZAaMeirxZdi2k8WKuEHcX75W289ZmCyzY3a7F1HCkofRxrMeiEH6AVKo6QVPfS3JJV45ujdEacYGB1gZ1z1mp9",
  "key30": "49LR3We1fkRvfm7dBT3yc1JQXX2LxM83EXraPi8zFq9c2AgeNCsKWnbyfdP3unu86G8GdxWFeKYBcpisqG1qQpWS",
  "key31": "3rc1ByhYuvtzuWjCTsMsSKRZKh3sr7M59hPk6NyN4Kfh8cAzvwoePqqDLR7izWembdtEVcaDzAF3T5EqzVejPPFr"
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
