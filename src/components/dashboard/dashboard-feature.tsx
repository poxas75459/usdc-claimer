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
    "3p7G2xjBYDzZUTKBd2qNSDQUx9hY1p1qVYgMYiemu69mFpknqaSCnzBM2SkbEBdmPRievhhAyJ7d1jH5MJAWUPam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udBvgJDFM8fsyumJphHhEJ4423Y76tZCdGAkQrHGxTyGgFXiHRduNx2sf8V4J13EPs7sQdyHcxuBjurfdx2SsG3",
  "key1": "4mWTobF5XVNahyUEYJzd3xeqowomcNDUiqziQCZyAvzq7TWnFW8VnyQ45LbxPbXjwGQxX4HmdR5bSABYA7wFkbNy",
  "key2": "5tdpd8caEmbJh29Ks7oNk2sAN1yeFDdKK7e84WsVgLPRGyGsAhH8U8yx21iUSr2n6GCTF4KSZF8UJzsi5wCyA5N6",
  "key3": "4ZezaLrNmkM7BjguXazM4XYWyxrEuFpSmifSWYpfyMewVzMKwGsNqcuVGVcBWvJQqbELdi4yhGedLmNAb4b4YKu1",
  "key4": "3PBNxHQBhijXJkZxJJ3wDncmhoCvdC4z9wSxV2FLsGGW3xzV9gkWG4uzGhPASEUvp3wcen6Ciu6UWh8KKhpA1ceb",
  "key5": "5dfrCLt3Y7HvNgw8SX4wuUZfq28aSL5hs6Pf9iPBj69bcCt2RfQEZZAfTbqkdsD5qDBd2CFoddLVyYnRRtf3wnqi",
  "key6": "2uwes57gQet6HPRyANLGkRubN8CN5rzrw9DfXqBkGoW4mmiTRBtU1xfQCjoa34oWh8fYf3BP9GuAQkcFFcLS84XE",
  "key7": "3TzidRaWiED7ioXBC62d3f7CURnvZgF3WkW1mLEfnv7nEnDNNTMFfk9oZ5RA43tqXHKxZM55mkgCsdznFRrmcWzQ",
  "key8": "M6FQMRNkoPoas22DNBFY7xWkR7oV11qGJnA4zZBbVzvCPPbuu7BjVkjiiBwwpVoVs3QsfsiH87gaPo9xinxFGwo",
  "key9": "32E9assC8ZQn4BVPCenE65SVj8ATMPrXmke3gxJef1kzmNHv7zCZ1E1kThtZb7tcbyFw6pKc4iqh8GiaCSpLZCNr",
  "key10": "563NrDvZ2LouffBW8YsRME2eiF8Z4oYYrvca8uZqR5qn7xYk6RLEVmLdHZri5upbYN8583bwcZevJbWk5CP9KdfG",
  "key11": "5fPVRLogCFDem67S76qwnWw4YEffwvgWdWrs9n7VcPqpvHzqrj12NLbH6hPQYxRTo4xN6hWwvmpR2oWs7ptwcbLD",
  "key12": "4MdPHBRVtXagEsNFieJWGv4rMtf4f7JWKuDmDsxGBU6AzT5jvrJ9vtFndUbZ6YjfqPX4vZqx7erfBnHZoHSEr9N5",
  "key13": "55rKKf1m1u4ap2nqZ9oSd653VCRgn4zfwStJH9TykHMKVvB5KfrCKCg3nsAjDxkq2tuXMcGTWSNYFr7dukbFFYQW",
  "key14": "37oWtSEFh1PJLLYAEsoTpKhae4XdM6QcSXYB5JqkxZ3yB8pkw2wYbBujXjd6Cv7snT41FySLDJgoCLw1WwUY661H",
  "key15": "4b6ELTo6c5jA72RbYZDWW1wXgmcyiv7zexbNJeRjkBUuZeHbCdT3Cprk8rBVk88xpmdEc2Tv3GkVtF29K53e9UM6",
  "key16": "33W1yBmaRWRvM71qK8RofDwEx6SFVTdacY1kbgWgEqGd7ytv61VcM7k82ukFGJK2RqWigVps77B3acgWKnVmPJox",
  "key17": "3nK1j1R1gihcf3gHDHpJCJCq4A8VWZdEBSGEXHyu4uDBZkJZMHaQhcc7NQ4qFov8hJLrRx8ADzk9n1z3vRTyUd3j",
  "key18": "3iiHMxqup6MhoDb3McYRXvopQ6SSc1LTakWRdKFXMuzvycZwojy8Avt7jJN7ioFmcjx95Ty7BnyGE4z3eVxPHSUK",
  "key19": "46U7n7K4Sd9aQX9JGJ7v9YjyzPtnA1eQzquT5rs6MvmbK2xAzXuczXYPyk1vZCRcMDicnFyL7jrSqc6GXsnhK8cJ",
  "key20": "5A13k8GzSzn7TvybK45j3TqqJtUzA4TMK3DQSYLGTs1hN37rjm5AdBXrx7YDQBC7ZLTutHKcGifYMJoYDM6EUukX",
  "key21": "5PFReX4XvmsWrY6D62Qhy5nbVX1ZRLZxHVdzjYnjUSSjVAqKUPKUMKS3JW4ZfBAGR7P2RwEQCXvLFCnr6pwTfEnZ",
  "key22": "6u3KeTDC4ehm5QLUGVKs5DLVsNDHcPJrBbG3SRodCwhE5qMxcafG3YVLpUzNSVAcvkSyAwDYCH4zZbFsU7ozrSi",
  "key23": "2hsS975a2RNAAqmrM5iAtm9by38aiehMt1t4eER7TjgpU7cUd2kMLc22ECRA8jfZosyYwhTze4poAZeeYCjZ3yYL",
  "key24": "3nMWAn5D39JLGPBJjZ8W5hT3Y247hgz9F29QFerkSCUpeKttRzxuEK79owrLnAmd5ANvcH2cwNTuCwqYDFwW3mot",
  "key25": "2RYwG3ZGWe6dBYLyS79kfVQLwCdqGfujq8uCdub8Loixe8EgqsbX1FfmS8iJTTYBhdvU69gpusJNHAzLvgtRHuMS",
  "key26": "5xuYiAKngzME4jdW8Xd7LmEVkX7QdqfDBpizgyUt6adHpwapaW3wR4Y2jVesfumT2Y2L56ZgE8LDzRdnQtqeqhmE",
  "key27": "M6hQj1AnELpFSDeERNNXT3awnv5F7vTC8d2JPRZNd54LPEPVGPA1g4w9yvrWbmPCvsgkHvfVLw9sXZyzCYdwtYx",
  "key28": "wd9g5WYqKugTDV7jqJE9KErv9vujg7dsuw3PyXo5WacqEvssgRmw1kqM4ZGLoN9rsXZfKKDZj5qrraCCdcZPt5x",
  "key29": "2SpJhKDzuNnq3hh4Rh13ogMeSVwVeP9Dd2Ug8g3dDmWXwKxP2LLZnz83X32zW9kr7CnQcubkKeyrzKt8UW87qJEE",
  "key30": "5fYxU5ES631Ny27TQqzHBt7Zsar9NPvrYoWrLM7p9Qw8JASXRmDwkjgTNWzeLA4FjsCMTcP38184v9GZSm9btWR2",
  "key31": "ZYC6xa6Ltu3YcpUCGom5j6rcoFLrft7pJweVA3gpMiK1FBZbnHj7hsp3k5s31jUsRmDgfgpKE7tM2ZxmQidsFxf",
  "key32": "3iSjUxo2TdRW54ZCEERQ5xsVXA2dVyjYBCSYoiCippLvhsTF5QnrqXLNB1zUHW1r19KE8AGrDyX967HNCzpJvPLb",
  "key33": "2EXEMB3Lp8r3si9LxkZrTb5ccaqgwbRWqprFzGpSL5HqtdR873HfU6ejr9FPFhoVattrSwVx7RJcT2W4uwPD2Pgw",
  "key34": "dX9PEbmWnuMGbfcZ5oTAHrBqr34nZuV9euJP31UoLzXUehiYcnTr1bt43VSUHoUbqa49QMhCkbU7SXh52jQRvXK",
  "key35": "3Wi5bHwyJDPZ2knHMJuYrakTdt3nAnncZ8fsnSJggJoHF2fZj2yq75QYbdm7kV3Tw7mv17UJx4ER4JMjgzHCoWt9"
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
