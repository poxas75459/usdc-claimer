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
    "YBFzm2tog3TFj9LRUvsstrPmpsXiRNK11HdxbTHTTZvure2uDTD3khP1zx1Agy8Bsh3aYGbVE88FsemBCX7AArB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5r6jLZvC3f6jcP9X66VcseQ6NzFCrHRp8Xad5RFjgvGbL8SVNocmAQjSP1KiLm9r4QvYR3jBGx55WpeEtTQC2U",
  "key1": "51PGNv7wspbW9s57BtiMwWoFzkoqpvj2qjECWBs8Cc7xzNCD6JFTDyMMGiYTA1F1LzPca3dww5GS7i4c5h75DRga",
  "key2": "cWFui8RZLFuTJKhv3j5cjarBEQfmUF7BSnQNw3dAgq7EcnA1CjUyvn8YzQ9HqSnR74S2WbdNtot4xcZ2RPZqJsq",
  "key3": "5WVksbKSSa2XGqdaFBMsc3uwAP5tBqrW52MU2mqsvp9iffU3vpR41itNmvKEViHFkVvTBH86oEFu9BiTejgYJBCo",
  "key4": "3EThDmFvHHjP6idpHZHPiJZ4oUimx6L2MDFZLE37ChvtsFWiLYoK1sapmi61VdZxwYefqA2H6cFviTPdvZgXr475",
  "key5": "5GBMk6qL9XiHc5s1DaDtACDKzDhEF1GFnQuYST6gSpfcCBRs6rp3rHyWgfxqg5mo1eddxr4x6D4WScSXdtSoGwo9",
  "key6": "5hJoEtq5UWZfTVyumvjHcyYnZZjZ8uDk1perCa4M42vQoGCimUrYSTP3uyymZ4QbnjkRxS8T3WuVsUzfgx3p659D",
  "key7": "35hcfcUrEFMJYiGkErcERJ9hz3fPi7iYRmKe6UEFvaEv1Q5avy1neHqfVpcZiohTkvgvqknRSKb8hzeEFGzzZVFh",
  "key8": "4raGRuLZTrq3CA1ozwwsW2EyqMZcqbWYPkQSMEMMXXJjPB1wmhs5N3xmvUTxMQj2T5c7eLLqMaVDU6xDkynezy86",
  "key9": "5UfVg15zRZRpkeZLupfVVu7ZDUX8iTQABFLRnu9sSYjtKSWe1FGQiBTiFzJCbBKBj4vB7JWprD9zJNpk5ZCHXVdo",
  "key10": "3sEcnTupDYh1YABrLcH3xUqLEcSBSRw4iTiH4x5MYwEJg7K1upBWoSRM98tUV2xHWSMzV92bUKhA8HBwpnmxzzpC",
  "key11": "4YWKD4zNwPsGgRSn6fcoYwhGWmGCWFLd4XYXed1RPzVvkrJH1ZtvbqusynFCL6LH9N28RCWEYD5rA1oKJMVwo55R",
  "key12": "5YFTyD1MSovoka7hvCMomAaJTE8qTX6kWTKqnbYeRkK9UDZaL6nZACee8TBB6gCMabgotMie7dpKWFuWq55S6bGR",
  "key13": "2A4FcYGPdapWwj6a8tCgfEZE6vR8KD38eghFnmixgxV2AALNixq2tnagLk72gxc9fboVBkxiNTmbDQRH6Tn5r2dJ",
  "key14": "5DkaTh1R4vTKGCeqQmtARg3XCU6vwSKwSKggyCnDNvooqmDdXJ4qR5yoxcVE96g7orvthaG94s6SdgffTJhSYBZu",
  "key15": "44x28CKpZX67J2etjMrJVLfBW3xxkx9Q4FhD3s8QxaFi4p9sVxGeNRDabpbCV8GBfjpGFoNGd7KU8aeiHL46dGbQ",
  "key16": "3XDFwbJMgEctXLEJtdt8HusoDaQuS5XKKrANPazdUtHdBuG4VhG2MRSG29y7xDiygKY7UKhKZEtusEgf2ZZthBrk",
  "key17": "4ufceuWEtP8BYxo4sXNjt3fVaQmJRfEDrUYYXybbydDfsRWbaLpYqhomkxTym6P2ERSmKNG8PDrx2apm5zEC5Vzj",
  "key18": "2GanmqoBtV7CcGVLSGNkYjyFCkATiyGv3GAaFgG5axAALNUwWrMWyJ8gnoRPRgYfGA9E7fC5uSSPQHLr6Sd5RooY",
  "key19": "MpZVhHdx3rDUiui4GtBewZJnDeF25PfFxK5qWQZTC33JQCLBZeSGdk3ApTXcNkYENkQ9qUKJDQDKZuoVk8n3x25",
  "key20": "3MtaZVgBx9vEXFogu4vaAsUiT2ttitPXYZRuMXpSg358kVf6A12UxGzqkXnjhxcuC3xZd6ocvWEwUWz8YLzisa3o",
  "key21": "4FNJZQZFPQffzokJoVgjvdTscEzhYgjqtZ3tXwZT9qWsWjnho8Nkyvaydm4TsKMYHDzZ3dR9Uk2C1MyvpJoeN7EG",
  "key22": "2PTThRsymT136uoZXyGRKzSxGxCQvjcMoZZdmcSUCyjewEvewvQkaF6AsVtyketjHiRtDsZyAApoA44vWVzekqgK",
  "key23": "E1ePkhUWeEs7kM9sQBcFeEmVsLGXXzF98JbwHpYSgQMebKQswRoRuS2z3PUw7CvnEvsMWmEGfBSvbr6D9pU94VV",
  "key24": "5SaNit7gg1g6Jwrq1DDDSriSttNFFejowLzNospUtojdRhq3iF2Dt7vQNptwGn9sb5wu5zJFQ25BMM8Hb9hSAYyh",
  "key25": "23FgfojFskCqm8QGDpWwGVqC6bi3ZzVykfaohQeRURNLrrpdFWFgaXeUEr4tBCrvAhKqpLYUzTwNGoH26uNak4u9",
  "key26": "3cwYqwGdUQZbvxznPPHZt7JnXmbzHBP1xcCoJcunTFRDLwJeypuGB1zpP6W9xNkqPzAxsMiwunDXjMqUFvUWFPex",
  "key27": "5JM8Y9GhxdXCwCef8dhzvbQB2kJioCNrBV7pZv9hv5ghE4EU1tJEJ9wqqSLwJrWjaCNcJAM54t3g4V6diQ32uybG",
  "key28": "jTHd7UwqRb1RMGtQtcJMti5inh15DADAyLnw5m532J3XpNyiZvMCtgZGCFSfSvmT21i6uNhC8TU8LEax1jzFfN7"
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
