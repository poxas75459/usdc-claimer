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
    "5iu7iFLxAmRFeAUbmg9jW2di1wkTDGYHm5PniwUxqHYBRXUMwHaKm5KutfP6yKR1pyB6MUHTFGjRSvjAiKmSWmBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7bhLLpaPYRW8uJaWS5AcWFoYywNyBFQnuM92M4Hd5mEKRVGSgEx6t1b4Rre54c6HDcU2fPHa9PXrVqqd27WNZW",
  "key1": "4aRCr1hvSq5oHVVxvBag39CmNGh28EKQwcUNZcvmtmEWQ5UkHkzo6HsxkbwJyY4wX9fxAdaRstAdFoCQRtnoN933",
  "key2": "45evma62GTNNmv5KvcmeyFHZ8TMTkHJATx4MtbkvDhzKpaFDXx3yUwvcQ99fWZDEJQ1xNrY3btC5PLeJVCxVSoVv",
  "key3": "3THwF5azKFNk6wqCj6wiaFS6n8g5LjFoKBDEESFoyqjupy4W79NxS1nVFjgedzLCEZysVrEVggihBKC6q7Q4LWmX",
  "key4": "4Ln9D17T5HZmqPn1YwwkautNmE5ZjXvQACccVUAhu5XnQn2acPQMiD9SMi6JZFaQuy6eqLCRm2mAXdroV6Y472Rc",
  "key5": "4B7zNm3BEhFKLMfSzXBdTknACH8UxDx7usymTeTqJLwQH2zfcAAaR8TDHFrEybMV5QXjWtudTn3qbabCz5SkwVfN",
  "key6": "jyXDEhkkiaW9zJNnbDn4fFm6RECkJ2m9XVecq2MFBRfdhBuGyXPr9jFMMv98MXHRPj4aeeQ5cswqtJGiPPLBvGT",
  "key7": "5MYpkTtXPq38pkSQ6zM7MuMBh6wsmHsA1AwzWdYpU8DxcMxn82DDsDQXVX16n6FKEmaToc9X9kru3s9HXndPvngt",
  "key8": "3Rty5wmSVqpptuyCNDwsSN1HrubjKUp5wE3mq17CMtc76M2fGPyEKtDfK4SqMCTRxB3weBo2WdtxRobnBbQToR5D",
  "key9": "51B8Ga64cHWmGpmb5QYDs8vdm2EQpCNVtLcA19bNuue1oYYBDQ9zXrf3mih4v7JbU3r8oU6qeMus6kSwsMGfd1NP",
  "key10": "2yEwULC76z6M5pKjxZMn8c5vLabDTg2A4p2TgDbEKPzrWYbgi3vw9jiq48XagwrR1RxCMP47a3w1f4zWSqS3kT5U",
  "key11": "SAxMGyhMz8AGgmHtw1rcfNePboR3U58uQMorFVUiJjHvTLn3M59jJBhbyuWq8uDMquKbdbXW6mj8SPSP8mXxEt9",
  "key12": "3QfLsyz4FNVEqcaTK9tWGQF8qhqoih1VegaEYwkntQoDLYwB2amrgaamTnF9MzRBhoUZiYcrRnWKnA8LGQ5DBGj9",
  "key13": "4K26PGsPkUbWf6xje6euasEP2WBPQihgEkDL3m8Qwo3b1vbbLRHbAmU2DyTNxPhiZ7H1jnFXeS1v7LadyorNiwfr",
  "key14": "2dx2TgfqnnsEKiPjQ3MK8Xe8WQtAD2tA9wFDMZtVQfktHdJ7xpNEBmRg7tBuA17zy4jpXzBkporEAQVU7EBLhxDS",
  "key15": "5kq7yTbDuwy1UgdXu5NVUEQ8R5XDVwBrbNitBDNkMkCWebdGJ2QZXAAGDZW3uxvfDv6DBu3zrQpLi2BepqGXnabu",
  "key16": "3h6jg9waG3PoN9RyP5gQjEHnHh5QynbfoScP4LkLgCWhp1tnoyXYZwR5DpRUmWA5rzHCycgVkJYnN15nC9rHCZCb",
  "key17": "4ropTSk14Db7YZYPVsaX2orAg7Q7CCQeJijQYb7A67AkESwYqxPzMtswJ7RbZ6WYdnqefYLCsuQUPJwEKs4d4Xoj",
  "key18": "2SZ4uUaEvVgDJVR2saz9EBfrEBMjsE7iK8xxHJJqYoHKP5jBzyv6E6T8SpoS81cjaGeVGm8SmjDxDrUQbxBW7jnp",
  "key19": "23QVEHitNT36G1xwPgEB32XaDXRKSvxRZBA2puSZGwxBuuyae1vwMzQqBUKSRchsc6Y1MAx8gvMzW7uU7ozHPS6M",
  "key20": "5h2y34Siq1ttrp1q2QkJovjMjSPrFXpBwYWYJaffzwciMLBkiYUJBUheSSHrSjXNcbfz3eSSMG6G5e4U5J1GVERf",
  "key21": "5BQm9HBgk7TEuw32z3v6ScvkLP4Fb6bb2hvC9xjY4fd1Pxu7HiFceiQmWJzxU4gQkg6gCaT1YY2J2erZHjexYbxm",
  "key22": "5DMcppTtqwLNNztAExPunqEiMJCYydy3uCaThJmuzQHCsGySRTAWMbMyPvTMLAtKRZ4Q7ukh7FyCnVxTACH6MTd4",
  "key23": "3JcnuDHJETQTiMeAoMfZHago1dcZkno8tCGCsykHu2y9g722zRbm2Yyz15yFSmeUCGz3cqSodY5UVU8fMRbuX7yM",
  "key24": "4oR5jddhz9LHbHWdowk6P5eF9dewNC7D9jA5iSuUdhHFjKaLSmm31e3dR63xTr89JC5yEQypekQYJVEgtf9iyCAB",
  "key25": "4WedgDpzfB8PWB42JzAwc6F9LcMwypEva7NoUV2e9JbhjJgQuL8zPCstAjbxLEAD5r8dAaeXq4vaozraJPq5Czfj",
  "key26": "2x3um28JLwty5JyQqeS5LsvUacGEqG1C5M5kQjZekCRJ1mzmRMLS2Cz9wDAzPveSHyFqPfD5XZV74QwhUM4ewf6h",
  "key27": "3mAAzezbjjc7dp5g6Hix7HJihHAKBXRbJC8Wso9EpNK4XVGRZsn878Z1Fa2DP8oCqHhKCggLEYxUVsWYtYbUH71Y",
  "key28": "4S5y8zTwSUidYY5oyf6wvXQwqqMDRgAxid33hWnSQxhGaex7m4apxRMjYTE6nG1hNAYHT12yQkNMjRZYs9d5EzM7"
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
