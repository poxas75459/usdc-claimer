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
    "5FnB9Ui4kK38AXX7hPwgenjzWvuUreD8qcQMQPjqNQiMdy8z99RahTs9wUgg7z8rsxm8gyiwSkWJmnSacHv7VqSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jo93t7G7qeKmALgUcBhzuKSfP7hCSReqv7hj3v67UeAkaHPVDLurdjRNsTDPxcgsLSYjoyFeBiSLfNJsPtK67Uf",
  "key1": "4hg6mnrF4zZ72ouZrboUqgL2Jy8uKoLytomDnRDscSmDJJWqBHqxzn61p5YLCjKpEbFsXreg56Zxbx7PyDozHzsT",
  "key2": "4SbxR31Rbvt8UZpcgXiiUc3osrakr1u17aYrJQ4xHiPokpKzy4Ps59P4ZXJ3fcBSkBVeS33Ba7j4Ub55wPFAPxBo",
  "key3": "4Ls61ZtyDEdyhBwV3K3PAJUfGku4EJGQiEKwVBbjY8SoYLE55qmqjnWDCu2mCLsy8E35sporWTmd7sfs6TwfkPWp",
  "key4": "2Ku8MELqe5APJWZTKkM8Aqd1g2pKhApopT19z6S6c4LTiH6KaoAwPGPWPfNa7QWf58epeM9mtWVdm33g93Qs6bhj",
  "key5": "4VXZEg1e4JGvehrJbRVbuW8odjSLensWVjF4XM3UhihSS3GUoSEbVpcDeF3bTSXMSV58BUKN4Rzuxjsc9LfCmvQZ",
  "key6": "2psRACoM4DnxtrdpEwQbfRg4EKyUqGVVRAUvVz5jQcNVujnWokCiY8rWX4GPT3wc1gbvZTx9SnezQJGW5c8hcMpm",
  "key7": "2kTLB6U6BsPubxsQRhC3F9ADuR3fnhdVh1WczVBSaCtpQWMBsW5qGFHEQ1kMwAA7RHyLQvzENNDLEgDms7bYzhqv",
  "key8": "2tkYFmXfSXVgRV3BbZwCYjZc7zMqYok7U58C2kwwnqyptGe24mX4iWZPsLf8qaWBeMsk5g65YbdbPrV2VqMQMTnU",
  "key9": "2Rg7wqGAN2m5gBqYh8wEKASvdzoYDbSnxUjxQ3goTFskv8939SRyLHTtB8T9AnRXK5rjVRXXBdf9xCZJhFibVdHS",
  "key10": "3JqCChCub7DA4i3mFkyDqgG8ybtfzUU2T8w9boX2od1sXkkQmmjqC61hzGF2nNAKoUP9jHm92Kc46bgmatfDbWZt",
  "key11": "2j1AFmiuYWA21AkyGqhRi14wJzrMsizkxJq3etD5JPnN4RWriKSw9SS3PeUS9V1bhwHQC7KmcB2i7D6WZRcP5856",
  "key12": "2vFokvRZviL5jsepUsEWHvxUPtXXtTWwBX3bCpAiBvj52dA5CjXWDGKNAA7AQeSbahFx1kUiMxwN2GCA5HqpfGz9",
  "key13": "3yT6PuRuiYNJvhzeptvndECdogvM4zNv5SQnV1wusF9ivoPpY3T1nxPjgMBgyYp49jwFNADke6mnJoHzsmaJoK27",
  "key14": "2Vva7t7YK4Xmob3nZEeSuQGNbU9929dSLSBwCz5wGDcakR8tYXbw9h2hHf763FEg1ir2EEsezdBnzPx78UsLk5Rt",
  "key15": "3gtbGwEahvg1Df9ZdmVCKftLnJmoafriHBU5fKjjot1rKg9wKnHug4uE5P5qD4T5psHtrgfGxuvuv3uWyvQGRdT8",
  "key16": "2u2X34MjEgaj8Yym9sEYfcR2S3qefEvee8x9LT6HyrjQrmcQPo4unQyCrfGEjfpeqJTbHeZn3G1J3T8kzngtLQsM",
  "key17": "uarxMk8UDxbyrqX7P4NyWXm2ZmiRmbF7nbYrkQBTrUV8hpRSsdFcxWXpBm4iUZFpUbvsQzjeT2Ko7CH3BZtgQgW",
  "key18": "3XixwZ8TyMyj1r7ehXiQAzk2UgyEq8H1CcPB6KmzU7RM1c4FUAeqzxEZGXNDbaCLkmFuYGikQYK29We4Fr35ZeWE",
  "key19": "43dBinoLW9dEcaahQgEpNyVyxppYg9JnN53VTLXP8D5Gmc94yL8h5XY79FZSw7Ka9HBMcxrEZwzu2RgKfJePhmnK",
  "key20": "AsrqZs4wwnkeMeTaYau6A6c4jFwNr22MiKonP8KVWGkP6gTdwF4jQ9RTqwTFGgCLKfeB2nZ19F1jUbgSDWZrBVV",
  "key21": "5rJBPBZkfspJmpqDtAvgN57MmHXo6iMu2mhucAaymshp5YviEGdeqAK52iVdb1G52YpUWLn5ij21HqztxK3Rbm79",
  "key22": "5uYiGuV6W3VqUZvTGCwEeCNWvQocX3mnXGChMm6JF2G94sKdEeBzbZ4xZvq7e8J98o6YQPNWypFqi9pXxWrAkMYm",
  "key23": "dieNMpLdcNSMwB9Ua1kJdhzMRx2s24BzqW5hm2b7WGKgJWPqE8YkbMDVCnhMtdwUnR82CnEPZwMmKtamdsNiqEJ",
  "key24": "2yEvJwyawLJWbLZMZQ8XSJf7WCuhDa2ATzcuMX4eCCgvqMafJVEsDsk9N2zQmjmaCh2HPKs7ed2H1sfwhuRXErjR",
  "key25": "2hp28Sj2DwLCaJeQhe2tt6MSokntBKP66W9xxiBbo5AqvQcSuMWpLvBcM23deinyatTf1Qktj9KvwZayfJLp8EUF",
  "key26": "px6gm3nDf569UXymXxv4tN2uz97JkcfarRvsuteZHpnaCQCDRPmk5xeW8poiWWfqLQw9KSoXeGH1YR9kXs5gBhD",
  "key27": "3fmutrcNYKtvSYQ6N9YHprdiGYPJjvBhZf6Npmy1Q9tT2kdaXNG8xRrAT37voQZGyYKmvvVVLpykvTAmJENQqHfJ",
  "key28": "3myRE9nKPqJWxG8qAcZN3tbVd1KwrMF4iETVYw9n2LfaRtA3SbqYZear6iQnUQF4A4UoR8gXMxbk2Bm4UC8sKkUt",
  "key29": "MRfigjP3RqHfDLQaciQtqSEEJTudo4fXskW2nrYBV4XvSWWsjZgmV682cvNsPBa5Dsr53mFpYYyd6pe2YLNacgN",
  "key30": "5TAhgbwinD2kxRE96xGrDTKixiHws6Qgo2rHA1xrrG8PK4zMNLUV8x7ZCo1oLYh7gwmuCHM5emsVDFgmx7FhsxK2",
  "key31": "4Q1GE7iaPWgq6ANxr3RBxiDt3gTgQ7YTKKgjNhFqbH6gijCyn7CTucDPFhiSs6ahgwFgHMA2sGjPmrQRfyPcBrpw",
  "key32": "2Pc9r49j7HkUWThodjVK7aGEZv1a5amswbZraQqZPRp2xSrsKgzng8EScvqoNG6diHA1C127SgdR37uqgMtsv9gx",
  "key33": "32XSFsDX5GE4cWX1vVkC3d4JiW45jRJ8niXCqwqGb6tDG64rFoXsNo2YNazzKghWFowb5XDYkd4Z3ow7Kxp1FGmK",
  "key34": "qP9a1vo5ZVbFbvtnoi9BhAR4K6mhEKZjxAPqRQWwTo6JbnM8cYBpTigJYRk5BQjN92JWSUmF3Fk5WCUTkVZ87Wh"
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
