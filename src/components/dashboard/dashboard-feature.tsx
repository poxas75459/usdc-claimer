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
    "3356X4PFWsTErv76jyZrYYzLVQdBrzq3vMcMwoSwxNXvU58JvoLVBd5tftWymd8x8o1TqnDzLTpj6RSELw2dVy9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJoGh75QLVo2NTWyk173FreUMmwBqR5QG7pPKLmzWXdbg8ijzWLkTetK5r1cPhPjdWVmDD9mTjP9nfYbG8VtCWD",
  "key1": "3eoyirzApZxLW7ttvqFr5biWWbZBw4T3g7gnT4k34kjb1MAMFrFT8LmRwZyccwmsm8dRuQhaVaGfZywKSkCrV1X5",
  "key2": "MZMwUxdMpYYBRVZseNeDvkgWMzXGZtMsUSBFkt4vg9iiZfDV7cKETsVru1VouUV4HeS4tEMc9HePaee8U3NzF9q",
  "key3": "3LA7pPg7kbA5MWKwWAD1JqYmft3Mi4Yx32CSjnk7jUBK1Q4FHNuv2Q4n1QxeKDmG4q8GceX92hzG1TKxWonEC34X",
  "key4": "4GLBtsTCSWThQVvjhzqo2jjBCpk4UEPokHLwvoC4ZmMqia6ScNTCee3PJ8khyseCi5tFULcGrj6UBP3tuyKiFzJv",
  "key5": "26uDqPjghKesxiTeFs3FE47oZjBhwfpa9izLGYeVkuwtjH7czZLAbweomGeHLGJvGZEZyL15Mr2zzmfZv1PSamwv",
  "key6": "3NWGeh3TCANYWkUXdk2PjZWqJqyhfCEpBtdhvm8ZKU2y22H5VBGPVvEVZQRPByt6u2kta21kd8umwp2Y2VyoP4dP",
  "key7": "efC5BUM8jybxFX2AuUQG21PWNeWG7Kiu9dC8HZtRkH4XVoX9Jrg72pmLZC5HN44okZmv2i6RNpA7iEQG8MdK5Zm",
  "key8": "2KDy6wYLZEh1Ze4jjFK5og4uE9CPZFdDnVVegjEZzkzmiesuGzpGnCXQYnJVkbZWBzXt7oHpATE4aizX52VPC19j",
  "key9": "56rYrfnF6zQnFZH8kSWKQxDZrpYRPtEisCHYyEMUgZCM7uceAPggn6Jg48WbD2wvuLnsCffxBgu29B7vJ1Q12oUo",
  "key10": "35H8UaKcCpCUetRBFUqrf6R4XqJPdRfzwZ9Jpv4RWucBhp7P3MTgWsiXmFKXJjbNwqQcBUAKB6QCePBksax1h4aH",
  "key11": "5sWi6Buix72s23J7f8QyL8NbUaRHU2WqTQncm2p57EedsjLphkz7NagpcD3Ki5cMm1i3GiT9hgZ8q1ZfKH9YAqjy",
  "key12": "2szUJrjNuNJng2GeLmNTTr6pcy3ipWqE2j843uP2UgKZ7eQBEynBGVZ3YNwAPNEobQ99hKkw4hvnwDnU7JoK8gTh",
  "key13": "5URNbXiUjZ4awrXn2h9uoBZG5QxVr1LG7RRgbUmUmu4CbF8zoJEjeKfScRjXVse8UHKKorJegCPiQ9nXuSAvijwT",
  "key14": "tCytUKXNJ6TQj5Sjwkp6QN5qwTVKUYFiXV7sHCaGAvrdDruVWdPVM9EhzVER7fbQh9ftBHDq2hQhxCAcqo8VRzE",
  "key15": "3iHKLPkuz4S6S9TvMp7U97moo6bkAZTMgGXVC5cQPzi27aATP13SErWFwn3aZXFTr4D4tgsFaUKtt6tH3HjwNK6Q",
  "key16": "3fuWatRtxAxUG58wPLAkRtLBnRu4CjLVrWtJdVDxcWPpzx89QSMcL3EtZdCqRf6rcrDCZjdMqAC9ghoy5pm6Fuk5",
  "key17": "wa7T9TktzWy2SDBACW2RttNt2e1ZrzcYPFhmKRYmC7ijyMCRBt4VzTxPh19ZdzhUxMJbdbMBGw9rgr2f5PbbBv7",
  "key18": "2tYUyckKQx7BjioaefqYmFS6A5HkcRHoMNc7vDkTNfbf4ZL8DN89S1be2BSu2Wm6Tky74Ys63fgKfZcZaWVP9MmJ",
  "key19": "5nrDLvvCe4gp9P2QymkzaZX6EzbxuTyMrjXP8w5rynKVkoKxAAbokNbp4MXRccNniPGfkNMEjxxGTvfjthLiP9UG",
  "key20": "3VXRF8CfgPJEnRMyqaudXo27gnZ52FpuKJzjbAHmaUuFaHaibcNS4xBdaQp6fNGKqcSgENK4LZB9qDB9Fi9ETXXN",
  "key21": "64rmTch1nQetF6ZNBuLd8e2gHNd58fbHF3maWT4cdPJNrBnyKwFiG4ydndHujgfuCD2za5tDiAkMbFVXkeb4AjhH",
  "key22": "22xb1t5ocxEdDyURshg7yVU2yT8fiiJHPaJqQTSUoxt5gEbKe22cNnRsVM1JN7k9JQwcEHYRsva3wsoh4L1HG5o2",
  "key23": "QcWLKLL5PJZdEPU9hnqPuH2QFTjTiMSVqXJjt84ANavyTXPH9gXdKjcNaaMujoBd7kzpUV2AWngdSkqqTHrYpCv",
  "key24": "5Au5PEDvifE24vpiN3B4ppLP1rsdjPdVPgiGdwymyjxNUMrumMHnGyhcUTU9LSd6Z2Us1Va7v8wX3E7rP3yJJHZb",
  "key25": "28isb2qVvqw9btUkURycW2W9co1vfiJrm1eF8SVbxB1bnNsnkhNFZW7VyyNfMtFC2gUM9fSjZ2R9awM8c725g12y",
  "key26": "2wJAbPUGAm3JAaKxhXRspgWbQaHZJDAMv4XiC2Fh34vqxiuEANqxX729CPSmFPyvYGa9JLJhxMgggU9LqoKrGQ8z",
  "key27": "5CnH46cK3qPM8nn746TnjxnoHSmWQjVFjsusYknxMd8XgfR2SVEqbxdaChEf6BQnHV1cJQ5RH7iWqBYic97oWmsq",
  "key28": "4jZHtRyneRfUMA5i1UyN7ykFzMenMN65FPHxzTZhLcEmSgtPKJYZbYSaJE2SgFAg3hH4rYCY8k7KCP8JykRu3LAq",
  "key29": "2ULPmemqCdo2JCzZ1XYtYCH72WC4SXPCJJJC3zGMaaej3oP5TPsWz2MXpVUtcmiXbhgLstVMjygXoGDKREReHmPL",
  "key30": "2MUbgMJmk31mxB93Hpe7Zktev3T6xHbtxbB11aUA152ft3i87xHCKk6DEGwfdLWNLSK7e5ZuyKrzYvy2jENrRKKa",
  "key31": "5aSzrrc8k798Ca35CAgNbvduapeWAcuoth4RaPWGMpSvf4SKevM9Ja1roeWqSnQHX3Mita8CCYTE8UFGHe8qEzWV",
  "key32": "5tkSFcRG3p3WRZm6wrjgtd7GY6p51b8agtXxCGSF1yBjRdLNL9aNQXyv2wMouzA5p7ea8qnJMh9jBMLs4RQXxAJA"
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
