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
    "2KdVHJmT4rXGnpt5SqD1SpTB5s3edKngS6qyFcn4DMjtv5npqaeNcuEgd19xP7uGxKBXUHQC2wLTrwu823fk38yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsmzZQPMat1yJ1keTrJNJuUegsqveGQDz7A9vZR1h1B4Ve8uK44wzvjPZy1BdAE1xSGdNmqKYnGmhUa7LBXncfR",
  "key1": "4RPkyVn9Nao7kvUv8FY4bLXKBfcEvua58wFHkXevN3u54PihX8ji61o6jSXLRRZomqfYB9xcSBstxFuuPEKZKqHf",
  "key2": "2QJKpM7KkcMWqKPsySKkyWwc8T9pkUQSdwT4HaSN3Rq7yLLwWdreC2qCHs9yy22PquPrvkov4zJZFQugtLukj4at",
  "key3": "4zpHzqgm5sKXXfza5ctepF9yQXB3y1foCWom1q3cRZso8YfBTadr3VicymwT9w1icuagrgwFkNZVt4RpdAJ7QRVJ",
  "key4": "2UkC3dGbNamun2SYiRAUj2fUhwpDVCACjrq8eeaj4YcAPeLCNQRRFhVNjMHnkPrL5gTaBkDgDtL3HRLGL6H7H1A2",
  "key5": "2SJqd92oZRrGbNrq2hxso1StUJmemEtFfsNKy7agM86gijgh9Z27pyarGsSw6SefDKqG1eVa6wzM1sxcbQTNkrLn",
  "key6": "5vB2Mg1b1DQGKFSah8jiN5VnvYCdDP3bvQp8T55ZZS5dpXsCkcnUJ2p81JfcUCYLF3hnU4nHzucjjqx8n7hcN8Rs",
  "key7": "5F4PfBJDtfQEmz9SXp2DYTXH5s4zrkXsJhRmBoaeijbftnW8b8ZFZQtSVK4w7fvHNy1JU2JoLRM4d8wc3vuguXG2",
  "key8": "4g9PmbQSrn1mKe1D34XmFeSvPGd6i1a3gPetG8hBrSnk4Np5HKsA9X6ukKmGmc2vsMXbtiBFhFvf9EYMZepLJS67",
  "key9": "3GKJtcZhNXrD73uEaT3CZfm8tPZtWAWbkKcntjQ664CETaPL3cSeDNUEf7amaqZEpX5Pp2GNvbg9vcqpcoJqUETR",
  "key10": "46RKsxtxJd6YPRanBUjqznAiKdLDzqL5bVPdQWpHXgUAwAyPH4g77ZAntMbLo92rbAnP5RtZhr5n8AZuRYcjNCxD",
  "key11": "4JQCxkg4FFm2JPmignwsTULJDmQFRR7vz6bp9BpoADcnAxZq4JCVbWBM8sMmT1x4eCFEP86DngYhrc4kDgj3QTqw",
  "key12": "51sz8CQSDB77kjN6CYqw84nSFzgNkEMhDsCC4i7Wdhm6kui8eyD8tSCKUBJYR8nQLbb6er9Duwu52hvJCk2HEsAg",
  "key13": "2mLPWPYiaevfer2GToPYexUPmsqDocLLzQNpT77KEX2ydJbMoFXtSqgmUokc6cg2yR227XiPwnPsj1k5YFPBHSmE",
  "key14": "2oDi4t4BB5BA8GqrrTZN4guYhNmG27oKitNhqqYZNYYQMAVqZfg9wJSKcu1YMGCqPJt183yKnRSyiqW3DqNHVkyc",
  "key15": "Aj6YZGpgxEvELyjb3Pi7PN6FWPAqUkPd7ub6ZvEFy86CAMVJrhtatYfyq2NjUL23SGpVELSGAeb4sHHM5KaG6Eg",
  "key16": "3ehAxRucTRFNA5oG5Kj7sKQ9qBi97hkMxgLMkgRCT4iDdawXkKKXGUBi4FBKEw7zxEqc3Nxdj6gSrFT87xGEVJmN",
  "key17": "5uCgv7oBhTC9TQTYrR4r7rCdz19sw9KdL1Nc5Kg1WrGQGAFmUYApYhNRjnU1H63UoAhQ1UG5fAocihQUHxrRuzyL",
  "key18": "2iKthXiEaHHEg3hospfkM1WG2hCPuaMe8K6QhUgmDZ8eFG4CigfbMhXiMioycodtTLuyvLJH9VEn6Q9snKAmhZj5",
  "key19": "2D6vWKPiVStHTMB4H8z114EPNd3ekVcZjJU53r2cn9RrnmCTYApfAGtzZmYbyiFcb1hrAQGj4vkfVRZBEAdC6cuZ",
  "key20": "ZDzoFfGn98vWDWwRmTVUySGjz4eQBUevxfp1fLQKr1F8UbMnBAiV91Nsj6pyBnQJruPQm5WFHEsMuAU5Dfyznhd",
  "key21": "2nFML7vk7gsdig88CUiVxQov1HouEyR5e1MEUR12S68cWawZZYUh7EpNbxmBaxuu7kSrWgUU7WTRNABERwqff3VF",
  "key22": "4tJnbae1jv9HdJvSrNwjis8wxLa8YwoSvmCeRGoaDjp3SbouKnjW58dkj17rj5SmjVD3B278fRYZzP1Ph6NaSLfi",
  "key23": "5VsmLjsS2SvFo5txMwzXFVpWL8LMKYacS8y19jkVdEb15Uor43YDWKbM1q6TUHpPAgtL67fdNXqHNuH8vVNqS5oD",
  "key24": "TaYyT3YcEwrLGxjDjzE5i6v9pDRNmvki3ZShT7jaFYuXY2qzq1gd6eNTX1hLESD35xBtaV3cbNG9ZL5PS2VD2nZ",
  "key25": "2mxHgaA1WaCZYBhRnwQH5cHD5kEwgPsSnx4tPpKzqmhm8d1oJkafTCxQn94Xup9KD5RGp2v5XeEsogY9b7mhaZsd",
  "key26": "2w2zAxwfDfZZvDH7gQiv6uNU8PvnNEPaB5T85fcsAorAT2bvZyYagEzTdGsyTBf5tmEFXqGd7cCwcAjPf4V6L2dg",
  "key27": "ADtiywX773aHmXjnrZ23Y83t13CX5vw5sBMVTKSid9SikJT4eFYWU2SrJSR2AZVpHa1ebShkTD63v7n4g5gXnDs",
  "key28": "4C88pXT6pRrnYuGFsapDy5cLM6yC8xuSRfiwUYmDUi1DxbSNfjYAwofWjXDGL7G6xrwVFVvJzk5izFzb3PyRxxyn",
  "key29": "iXQZ8DWjawVhMhcad2abFi7D4EEGfQCcAiZdA2sXeCEweryVzdHgEJBjhhSieQ9mnEAnygWjpXt3FV47N5JydcP",
  "key30": "egCtT6ZtLWDeqwmKFkPLPS3v6AuFVuXby4sAHvsBUGZ8txPqzoDy9k3JwiwyMwx8MYrhdpqjYA2zMzevYiLr6Uw",
  "key31": "4rWm5kDwpYWRHrKkmaNY6hTzknWzmSBvjjfEJuyHPwGdNMXZuC6J2n3wNDPaaUfP6bTqFCBBq6HNF1brJycEA6WT",
  "key32": "21fmWraQ6A3jcnx57ymeoad22PCQLFbkzy3NnUEEd3iSkMBJZexviiAy82J2KUL6v6sxXdCj2CRKrv5ZvXJHUrZi",
  "key33": "3LFs1XYy9gL8RGydbFhUsRmZJ35D8gYAmRApLkMt3XeDTb3JU9FU6qmXVPzMcEpy7qkU9mRu4CCPVrSrDHrW2i6g",
  "key34": "4CTZt3PhgWDg6sUN28WgqJYLSX8nqdXZV31RU9DBZvB7iomAVjMHthv19oTJfsZjTmSeJQ4BX18E5XCtKFqvJSez",
  "key35": "4CvB1QkSmeKrqYRvapycYeB85fqPNAZd7VUVoUeFhzoVrApMWharh7Q2DBEsTTjqk7Jzj2NS3xLLowcbsvJtrP7X"
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
