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
    "3W6323afaGrWkrSatrMmntznP3tgLtfTqxghmSHKXZRE47aDDBYuvXrZyPKEewjgkV5ziJpC4mkSh2yC8y5coqPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osHJLCxscJHX9UHnTWUmwEiKs8tNLQWTFhPyqWb1rr9fWAhAfifapojK8pQB87cuzzhPxyEEL3MNcawKcYEbzqb",
  "key1": "4UFdW4do3hg2sny99D3UoFuGiYUbwcZeBi8rMj3M2jMET1hiMq76EMFi84tyqLZfwh4RLsTW37PmQ8RrtpsabPrM",
  "key2": "5XSr6nEEou2rDd4XXagNtuMf1nzD1E7VTV3m9f38wq6gzXtZkvFSA6Eq7Q2v5AGJ7foTG8bS9GwaiPgSaJkdL1bE",
  "key3": "3sJonTz27ULnuzH8aHMkVBGuykq3FhVFyLm3iwBbc3MoQBHDcABbpdJky1LdNLtpkPX8sF11PABM1WKaxf9UyEXC",
  "key4": "33Dq5qWeUvTqC4JzVcJLArfRMKw5iSKSoL3N4CUwTU8wMo1FLm1NgM81aPmRBxB4cTWkDaQMbuCySnw8kMZb9JFW",
  "key5": "2QqAVRxg6KcSd6Uz9aTpTMCNegzXPByb4d47esT5aMXivN3nAiNSPq7RwcFjMwJTigoKonDjccTAWgbAvrtJPVei",
  "key6": "63WoXfT34ALLe8GpGRA9oocP9s2Hv5noozWPsgBUuf83vzzqjx9TTCJcPmU51rAcTDyqGAsUYSUKCTAKbjxuRGwG",
  "key7": "5RgnooQwtzyghpHhgotpyNfBQBi7JBRH8Rvb53As7WXVtnWxdzReV7hKCDyQpMh2euskgjD2Z8StDXx9rFh8gjm5",
  "key8": "5F73baC8LEo8ipCACRDg9fcTLfa1x7NmBCqgQLAema9ZzgeTKDorVeB95GECaQE29XuNeUcZtoppzxyyQjSMCXSM",
  "key9": "2RTLqfaVyaLDvFXaLJ6CegCLeZuhuM1WFxLP5LkTy5zyyVUS9bcgUyGwgm347yBSp74h9Af9eqjapReWHfDwN4q7",
  "key10": "4cwesTYjf4B4DRyNJFZ88PnHjc1n8AphksPfMznMKhmbm5TRMaxEq4Q5XSFTGz5sztbfZ2CvoU8Uv7aWXgTPwmZX",
  "key11": "2vrxNaxE883Q3j5bi9FKyTLJrrJQa6zqWaj7kS1QW1H3CV1kop2Seq1L3wHy2iNL2jMGpQp26x5rb4J1G4fYZ6dZ",
  "key12": "43zWUXWSg4NaSom6gQGLFFJ5VhquSsd2rkJrfwYgTPjz8QeP1ffreoPj6dqN4YcTKKho2v2c7H31cYtnjbxKjDJu",
  "key13": "4JzZYuxgHNDQEiNVrjzU6ETPNpm8ADiLbLZXBjB9DU4L9XfL9q9uH4s8VPVtkyjnwXnMT28vkQS6QEbUYcoisgPi",
  "key14": "LTqbnGng9NZTVQGd8h3p6s4KRhtdtK9ynad6ktFfCyL3XFGVDvFbSjL8YtmFE3sUuh8FuRfVkNPSNaLdhxE9K8J",
  "key15": "4v4FSNpcvChwghUTAj2nzdcbRS2qhEvZSpLFasu44wpoj1uS5zsooRpdxUdT1cnDZMbJFnYXSt7NsHBMCZhDHT8A",
  "key16": "2yR1eqZ2pnuH3BTXNLiqgh3pFc6Q4w79noDNu5XCAoMuP2hPux8c4a9r7P38cab4CeRpDPJo4F4Fcjn9JtFydZfi",
  "key17": "3LKMNJdCVtwgjEkpUDvZ9e2642W1G6yoPKhSf87HNFg1CiR6fzh13nFegLEsqai59eVcFqS9CkKid8PStq2QGVhp",
  "key18": "38ReQfGf8xwz71Ejub9j5CSxhREvJxogxFWuZsE1F49zEmDNJfwTgbUJCJBzkjNaopqvsEDsanUicJRCFH8mrPQF",
  "key19": "44sYvypajbRPjg6gxieDeHtoes2j3pYPdWaBF9J4s52Szjsh9f5siPFbgLG1EBTn7jpkPQ5BUHcinBNP5cPRZzYB",
  "key20": "ZeQMwA1UE2giJERaBJMoczce6kWSixoRwgVc8NVVcNw9U5KTSVVCgmFEPnZNPCJtKSvtoDmsvvyPoGthscxPi7b",
  "key21": "5m1E6VDXbr1xoUP1K88UyJuEvPhTVxYSknfv4xXke9GXrMVG2vXuEopY3cyK1vsLoPPYFxvBiruNnfAykX8J8sMN",
  "key22": "2pq3LqLN14hJE8y9n1PcESFFrc2VVGVBj7CN33jnsrRa2qdwagwn4GpE4Gt8cTbRfv16s5w3hS1v2Lh8mrMrQL5P",
  "key23": "2dBiKYutw76rxYZKTYRFmbhaeS3WeMX9qL64XNWMsQZiuvNYt2J1AKfZzp3kAnWYFQsMKct7nJjomUBqv1JnrzMM",
  "key24": "2BDgQsDnPushAUBAwFXFG7Xc1toNwTQwpppzh88NYajusKFVAGqdCpZWeiKEDho5XttXiTNiGGLVHZ8HnqQ54ncc",
  "key25": "4vrgUygdMZjHYWmHYgDEH3j4UCpqiwJ8LwNJ5M43Tj6Xu89KpxPLU9ensDLBWMZsaGpvN2g55R2ykoSAXC1xuYCX",
  "key26": "4brfK9YJ9dQM2KwjdLgfFSAovG1D5DJ1T1FnsNdZiQPpGRMKE8vrxKWLEeWv6rmiv5YrAPMJtj8ycE5rkMmxvxM4",
  "key27": "QXJgwgrR9eKkuPjWWkfESixSHRrY6ETayggtcRBj243N6RrrnaVHgKCQAKNGVMvksv3eNxMgnecsQDH13dKcNKK",
  "key28": "4d6QKG545e8XfuPUABwGW1dZn6TBjn18uJgrtiX7jdZ2cmDiekfaC6nKxwbD4j5Nz9nphM1eApxwyh4cx3mao3hc",
  "key29": "5n8TTDhPeqPMLo9f9CZMCqfKk3R5kyiJL9wunhcan7Au4CwAHevKqs9zfCyosg9CwA84gHXfApyqYpgnZpUkedvn",
  "key30": "56qC7xQhnATLQhW1AKCYf5KgcZ4fWuaDEchDX4evT4JbEbJBTYnY5vDEd48XHToj7KcUEZzAeDghPyPTQkDtcvdL"
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
