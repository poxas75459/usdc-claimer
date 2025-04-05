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
    "4odubHHAtZworRhD9MMQM2GexknkbV7U2vY1XdJbuVtPcJaE3uoewtr4VEAAehqA6suB5rZ7BQNNG59fYBwBFHWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vyu2D1EWGCpVAU6CVwRrNDEqmziMwrgy7kSfMJebwXNhb5UasKj46wYLiGXcpVZ5XUNHta3GvuYcH5HHHfU6PxD",
  "key1": "fXJZ4vAfrxMtz2vNaDVnaKBnMTs5zgqtei4wBfC3GjcS44rSYUefsua1WjJFRJAVh3fw8rQgTTxdLi6Qbf2FV8R",
  "key2": "61k19cwu57MeJtmfWFjxLfgLLFLYHQn9ho4sP2VeFLA6cm7hZ5cQndrhKAECB2bG1EbiVSuKsyPCYPt8bvDP9Hnp",
  "key3": "4nTENyZZD2MrLT3w62raDQ5st4uHpZEAqLSzGkPMtdZuBdu97AVFhA5UBerwRMyaJpBozGiz5jXZT3Pkp7PQzjWS",
  "key4": "54MnaqFRZDPVCrBbe89ak4AMho2BsFy7acE3u1M1TqAvg4ALwDqwijS23LgZ2EWJ6T6w9oFEFGjNXbxyzKmho3mx",
  "key5": "yeTGnyLr75my84FoAn6G4CMGRbLymGcw6sHNFZwFkCYK55j1VrxB9xnn5fM2oyFH439cZepTbz2npBEHRQeZa7E",
  "key6": "2dDxAcEr4xf56juxL7dGjrJnFj5GJxAvE2ddvh8mjpSieurucbK1u3UR7c1ofxrNqzxzYi9mQ5GRqLL3StyAe5sh",
  "key7": "2t64bCYqT8mHVvcekfKfrSfLPib9yigXMz8bumZ925EPMKxPDo4DPbWvGMCyhjheh8wDvXxEjrJadfn3KfLnrhey",
  "key8": "534qpiLQc1wrvXqTtz33vTaB2pYZwA9hJpFSoPLDJssVHnkpNE1FWK3NHXJGWyB3maWvGUMvmpVX4a15NLaAtbfY",
  "key9": "48Zbcv8m3MSdTgYnKDfQVdWcLBAEcPGhJCmJUjM6gGqPcjeSztkS2qQktF2ZptD8YxTJuNZdk7N9nRLzFNME53eU",
  "key10": "4Q3Z3swaQ5Z3VWzRWgeZxnCTDfeg3gjJ7pLzAyzTsdUGnu6PZRyDe9jBkM66ZGwBAS6AWib2Di5wEc9n7xT5zyBh",
  "key11": "2mMJrXYQLhoutwwqZkErZsyFWsGfe4Dum9cubY7Rti4dJ3wvyZwt45RqeWXaUzkmmSt3yyzGPvhgocZyCzwYrWo3",
  "key12": "2N4WjocY4AJmykArx4U9anmp7KxDCnVbahvTVUfDffAY8epmEfqFHDBBm5XwmWT36wGnsx1Q8eUyDASwSmTrSUz",
  "key13": "5AGtYKs8WD8Lm23BX9FddTPgzwZ4qhPvq37Q7Tg2K61hWePV4iy8QB4x2C7RdfhD7SmXKDi9Kkak7dgnS2i6QCLn",
  "key14": "4yAr1YLGSF5cpa4g79yRQSw4zqekBm5JQTEzX7cAWfoVM5czVTWrfPErVvS94bPBZi2CzLwxhqazXH3avAgoTiF1",
  "key15": "5B6H1PeMNqR6f73Hw9tG9eorDaw1qT1QmHHrdMDN7UMhfKiWfcTu8bMdnk6tkfz11FbnS7FrKWbXw2eto3TUtGSa",
  "key16": "4DH5RaPAhHp7x2EFkstnnZYuzPKoNm7aQpjynJLmYWqQZgT7yujRwwTTeo5MojFdfHGw9t5k1vdTxNGAi6zrPnS4",
  "key17": "4gv4ookZ3pt54HKNaboLDtWCR9uWwvthcv7qs63XqfdMwA4L9ARDoa18uabNAJzBm8bod7ConRG9MBq8VTEExt69",
  "key18": "5mJgT2eqcN576jFBJ53QCEr6sBMTzHRvGoJcTJRdNqHoFhQFyPDo7LDiM2pPTKknqCWbzd31iZZFk63LkZiUWo9",
  "key19": "4d5KhhQzZwYjtQ23DLXiGgGGCicDizyzYMnSe2FXNkoKdZruVBupzxGLmP4Anp2AG66pLKLiW5BWQqgnnXdyaw3L",
  "key20": "59WW2Yeriamtxv3KWBiX6H1zYmStzm1ARjW5FfhhJMrhzrnjg9wNwKXUwrDyhKJM1cNY5o2UHAeg4jGbPHrAiUYL",
  "key21": "1fZC9HpsmTqGENsuLx7B5yBmqBP5VFontvx1FrxQB7EZPHNm5R9snEYbuBMUDLZSSKBtqsdD7RbQkUS4dVBWPPP",
  "key22": "5DhusV3XehBcaRej4n1BmauM5DUqnj5KtKz32ZwSMhkE79roAG4wThCgrb4MVkYkt83ikMRG7ArZLB6zqaEB7s8x",
  "key23": "2q72nLxptUc5q81iSftymdxpDMDPs5KpbrxJigt4mQyxgJf7DiJfuYGC9LsSUZ9dcvWwioZaynq2gzfaZ2uXzsDK",
  "key24": "3yTaw2o8Je4iP7GN54wqjBWNymVdFA7amhVxi6gR474KRDj2u351SncedTL9FwhPVypLawZvEd7pRTBniWFoEEHd",
  "key25": "3s4HHzRjRStN3mLBnpHX7F4knAh2VmRdHyUDx4Y4jyRFGiiFWJ9uwknCajBDpkvxr1NGxt34BhjosjJ2ZqKK1ENt",
  "key26": "48NPGpaZgD6rMLSz3pNWm2HCW1HEStzperbLAfVUy6cw5wqdZQcmcth8XNcFdoH1o1AHeGxE4aSyJV9Tp4YED32R"
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
