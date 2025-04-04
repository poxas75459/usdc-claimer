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
    "5SGAbjxjYhWw2NLPSfoVYipjcYpsPHJbmyjK7JX7xYQxDy7McwMzonjyfHTGvGaJh2E7boxcryjSoLLiUNN2AUc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVPHQHRmfQ6Q41Rqm2QkHs4PNfwHZExR4TBiK91VUZHL2ms9QBVJ8DhuFKfwQrWVPdjP3kdFg9hLtuoJXrvhVxZ",
  "key1": "4vuQKBtc5UW6dCZTqx8RBHsnsYrNhNoUv79wcW43Kk5tL3QPEvNW66jaFoBZr5kq5CzTwNrTSbHp5vxjDt3peoEp",
  "key2": "3N2iY6vk7BJpANtp8k4MJLs5YVxzHp9weFdHveQegzKBBKRT3aivAj8WRAmYPS926uv5iBTog9ppZcXUqmwMata5",
  "key3": "3uZwkgk7ZVeUU56Ua7jdfUK2JshHiMXHMg7Pa8oCor66YGd1TV2BmS2KuE5ZceEzjZRe5YNJsjCvkvgcBjgT5DJB",
  "key4": "3kSAJ4VnFRVMrKhCfAqiPJveJt6dba85xUwhU93r3d7rHy4QQe24vnLGFPnwasPxcwJuMVaAcoKihVD7sxvWYqKh",
  "key5": "43cp4MR6asx8woVKEGzAZ26oXGVTcp6RqYXgEkwygB1Jkwp6M8RKjgrA3z27HzMzf4Ce21EVLPUJSHuYArfhebHD",
  "key6": "CYsQWXhdFsAwrhtkhtMuaLW6uXwYuquLUFn85PXUQRXxHrUtLrDz2M3e2eZHgnqz2GoQjUGCsSos661eDBuGarH",
  "key7": "2J9FVx24FEgNtrsHsqczRaQL6mZqf9BDXe989XdhVAoQqbCruPxe8xhoGAfDnpigX4VM77o7SdxJ4wDbAKueLERR",
  "key8": "oHkLJiKYadSiQBXREtMARUzy7AKaWpRE31kuEfprYuMiVCc4j7jdoWpQQSNfxKY5UCY4L5cwtKFo9spzZnspFj8",
  "key9": "2PHHeC1nU51Zt7v7nR8RLVqGhfs515vDWLfjcwVs8SERi4bT2yV5MMToY9XewsF6r5YLhP8bQ1fHr4fe1z1ubEi4",
  "key10": "5ovLaMG7ddRsMPSKMw4DCJnQdCfNX3C8mP4vZCYe7GmkY5v81h6CJRVxx1Br2syarq9Dfdbn6Q1dmGTmj7MBt5Lp",
  "key11": "2bKZQZsU2j63tjcGqFzBFZH16LGfyUH9FSz4BRRVtRkW1d5S6zbzS13LKZVbxUGpGwYfWbpyVGw6MRAsSfMz3Bao",
  "key12": "s3a1SrRgBooj3orhUGewt9dsX3y9ghiBD717639YDBosS3NBNgmxK3hByTnRpy64ap3mFL3xfX7Gcym8WZuv4dU",
  "key13": "3o4cvxCBbdXHz7tYXHYv6jBXbUxBXSPZbFUB6VCFNmUnN3kzH31j1mPDSjoQkVHKuStEsucEt2R4d8ZMQDs4rDhv",
  "key14": "2gRUwicghP82f3kVLUEp418xhNcLc6P9mdVrPo7LWLkQ7xsjiUnCGWJpCTBCuRiNo6ghh8bDKyYDSyfAX4cPuB7A",
  "key15": "3oqtZTSHPGpJ8zPkuw8bGbsyCGcGtHTG1ciBe7iY8WE2CWPQwu5xCRFGceaMFQKQHZ8iQUF1xaG4ctihNWGrke3J",
  "key16": "3TdmLY4KjhZh3aV8oP9Dfc2Ma7QuEYT2P9WsSXgCTUkxgmS2sSCkpBfko6YBknkS12kogeRHyki65c7VVt4iL98y",
  "key17": "4pWx7pyfvspvNebxXayADMWLR1fTwFHzFcZTWvc52afTUcgUfV6PuQjJvHkuFkPK1XaH22qKdTg2dnbTXz32e6er",
  "key18": "5F2AP6r4P4fco8KJTYpoDRF3BiCuvVdWrpQs9cw9phSMs6MXRXxcn554W5mdUDNYR7d2sbi1iSBuhBazvZbej7Fe",
  "key19": "2aSXfa63qKykx69riELY2e6zfExCa3AC2fYe4vmP61a1ooRQ8Xr572QPA9EqqeotCi8zRxoaGSexkgntN7ABAdqv",
  "key20": "5uF4bB9ZzFbJ5KrAv1jyQYjt4sm6BK872XeD9ST6aDEY3iTp4BAb7bAmrV2prGbLamLEs3C5CCjKV9F9M4pa3v9M",
  "key21": "753nz3Jefte1dbR7k8HkVbuZRqPtx2xH7gKSKJyWfrbfx1nnVtDYtFo8RimURxUthX4UANSNUzEZTZ8MFMbR9QM",
  "key22": "23SpPDoeqJMZ3VbiJyBENy7zNodK4sPeLJBhpqwjdCLQQedADNxcRcDKgP5hyYhxmyqcmYFZ6AE9TnKHqUkabVG7",
  "key23": "3S5Eva9yFr1csi3FRmDFzWJgamvg5JeLQM4XC8CxbZQ7KfKJFCSmD7D1uxs3patFq9RKNTzeJcEU4odWQC5NsAaH",
  "key24": "4mD4WRNhNjvgSKCbgm4x1irLcsu9BREwLVPYiPLevSnnbV4Uz7w9hpvvvQj36rpixMSXGb2rnR7fBaZr3x1B6XbE"
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
