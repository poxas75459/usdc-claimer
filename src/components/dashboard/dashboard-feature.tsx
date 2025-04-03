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
    "3PxuucddmF4a21M4TjMKJ5GbhDGPAvQpPBMBfruFYd1pGospsCoqH47sYBx9Mfu7PzGHWbCEY9xRBD7YPh8iLUP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unwEr4wupe3LddhbhhjRXn1FYvXhBjbtzrFnuCyurL2WVrmUgYBNzRhfDqPzMFAosX1kqcYqFWBV8EWv6uTyoPh",
  "key1": "5E2Y7uRHNnBW3vGfQg9HpeM75wmTDVPktg9bCtYwP8DCwcCXeL9r1PgyeNkAPVGDirzsNjpb5BYNmZXpQiwLfsbF",
  "key2": "5bQEcRejagMSvPC45iL4PFy8V1vDRhAZEPLeM7FvHRHhyUi4b5JSo3H9L5H6YXiDr6qizRuJQWyt2SLScy9QEDVJ",
  "key3": "2RoLeMmDDqMBmbYZSHt4ie11vAHYpVfCvtpbMDaQXR4CADobTKJQoCiKWXDSnTxtb2MEtiVUa8uKeAvrKGemPkVt",
  "key4": "d7DgdZH1ZTZ794PmD2zEKVb5ST5yhB69sBoouv5GBUf4HeGByDj5uyEdZzU8dsN3CVSSimdHXFkQrNKr2o3zFae",
  "key5": "4TPgfqbVSexbikXCNE2nYgegJszSEW8wnm8FErnPzUBmTubcsnYyEQsCxZ9GgaBwC9YWPYqsaWGQ1ZTnuQEpMTjc",
  "key6": "2qSrFM8HeUc2tTLJZwxRcwwDNbQf4kKPD4XX2togDrE8cW3Q4D7AhgfQw1WFZd9uWubCH58d89N19yEMVwmSVeyx",
  "key7": "66crNTBjX94gRZASCR4563cYG6owh7bySVTeXWa88R2kipmebxaXqx3s1fN4SPhfHhxHvnNNQyL5D1HEUdA49MKf",
  "key8": "spfjRKT8tCCGPMpYjBqpq9ZsQZ4jwKcoL4ASPps5WD1UmUsVgFrRRhf6QEvyxQvF7c92QaxwxH49WFg5AA542VE",
  "key9": "3q5dDATDzvp2XzGBkSDxRwi2W8aKguPyNcqhubdVs2CVapHFoju3ksurcpE8xf1APEGkv9gdhKbc6FUuM17AUF7y",
  "key10": "93jrLQnyz1DwLNg2957JeB1PVoZAzraeDLU3957FSofF4bBG84qT5kpfA2bJ9hdp64oexR5cFgKmg6gynF78XTA",
  "key11": "5nBPM4UiEG7kJUqvaLHdTf9HczuoFEaLVJ1hu5HaqkXhD1EoNNZ7yXmgKhVRXPXBsT9oM8Gr339HBQcDXhUBaj4v",
  "key12": "5epiga7cVCvitBa4fNfEy1dGa6pJSz13KFDwuiBhtkyGh1SvCnbf984wg671Q2ad839aoNvjtnz4AioTNU7aB4tV",
  "key13": "2jLCw1odkoPCafvyBUW5VwRD4yc6kT4ZgEy2nvFmV8XUZG7UoaWKSHC7DgwuxLKBMw64NPA6nTDmBhHrXrCKo4fy",
  "key14": "5cKzspykFBEbFkr8RLJUqBRacrpa7MDYTWPb3kaYDx8eyyDew9vrV2ibYboDhuAYUvYJHzzmbKErL2CEMbGiFoW4",
  "key15": "4qyPHxa743wcD1FCeZGkFRDczZeqJgVxF5txj3kz8tWh56dMZg6shhsu7QbdaeJ6v7Cb53yooptBub8SZ9M5zwAX",
  "key16": "5yk9mx9kWc3otFs2DQ8stWyjXDDxVyeVaTawDcadC5X2ErF7TdP6UzZHztMZx3viAfTJwityqBBWtR3c1YqLtvn3",
  "key17": "3mnR3j4apacJgRLaB5Jee33YjNHfB8xr49jFk2S2PdzMxZ7g1f9WoKzPc4ZBD5QNfjpKKocAYBYC7vKzQK8or1Eq",
  "key18": "3rEhSYkpshw35EEWFPt8K8EZD81QszUF6AFxiikkaLJhRFxoenr54VtrNeHvt1aNS8YPPPfUv2z1RErpq4HaH8Qq",
  "key19": "4V9DYRfPsHMQ7wxFcaV1J6ULTAAFaU4s9YiBFBVkJWpZLKqH61XNbxjheZCNGtRjwPDsxAUPN2docJniDMm1RyD6",
  "key20": "2Gjzj2Sq14NckgLEjZr7ehpqGk9CSBiH4kqB8wVezNUCHm3cJRu3hRvWxrL3di82HEoHVZMh8nc2D6xusrtfPEC5",
  "key21": "52GQNCuj6HqnqhU9gHJJ7kxoGvRBeMv6M6wFF5FxT4btCKdqzUtdB5YuGLqMGTEqNDjUbBbQLqPxzcUDfLgM2V4Z",
  "key22": "2Y4yqg3ZiHpdFKLGnJpdeyJJ7vpQ2af5A9YYqJKZd1K1ye9XcBstRWJAhBZYpnhPoi57SttLZbZGfG7yrseKP6Sb",
  "key23": "2rVQfz5ML3GpWzibfugELThre4GfyrShdgqMzgYQALK4apVPpCj1Nqt7KkfSLe3DMhZq4SidJBQEzyjcRaau9wuo",
  "key24": "2d5PTe6pcYh7Zf2Y3ZQ77TrHTKCnFTB8s3TrU8ZfurgRGM3GNHV9ri2KqkKhWMhqNo3YUHTiXZF4BR4vB7bRaHSS",
  "key25": "9hKSMT3nfzeU7TKfv5D3fXxCTd1W1g3KCo8mrrWonWPxhvVYhfLb4nK7QF4mFfLPTRKpRLfyW8VjesYpEyYVTrm"
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
