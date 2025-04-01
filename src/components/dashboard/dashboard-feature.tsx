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
    "3y7uP4yHP4r7jL6D31XsTWtn4uBT5EbSSfbNcsm9Xhg4JFXNfYBCrrJ72jnrawsPhnvpYJQJ21Ly67eebrQ1MsCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TLjzjvYha9C6gAacH88tTuafSLP1gbLCNQN9zMUxn8ZV4JySkMRjvKzQGpA4vdg3TNnksazJCKe5goaU58QR8Tm",
  "key1": "5HHwNP93Qa3Zy8AesRG1fbn4ka4EjmjQfVGUZiXQCJkhcF8ehD5eH8bAsdYc34e1Xi5XuJGxdTBUGbyk2jHvFEht",
  "key2": "64soC14i9d8dqxGQv5c3F7ubHJvAjZ532fg2nqiJbtuZqGjvNv7wYvjipDRJriBKTx18MaRbCWxnUBmhBb9vwpoV",
  "key3": "RWcWVrrXPN436eNcoshu5NNBDogw8RYsyqSSDKco6KLMjt9MoWFiVo14EzaQ9akAo9aSL7DoTQ16DJYEgFXxyVB",
  "key4": "4G3QAcntUakzVgJrEHM228e4ER6LxqceUqMNV4ryizxWyBijLhYKMW6qqBCPma4hsfaFKXcrcjBxRM7msMuwUzhb",
  "key5": "Qs3jNig1hqSmtdgnuMtUYyhrZcowPJr3qNN2MDyx8EfLevm4ySudDzihNBAXcFR5Som9WSda57BBJQ2RyYzewCo",
  "key6": "3BW9yt8oub4t6opXQu9KZkyUxLWY1gTYF4guTxrWTbtfY5thvynqAoJ5VJ87iq3xm33GbgxyqnQwKkEqGw2nFWmV",
  "key7": "PshrYxSgjxEVnV9nbBSpigTPjSedujxLcVaB7BB5unuBBE5UVVz3xL9fLpBCQtqzzqTtcYbbUYosyKz5SSfb7r5",
  "key8": "NVS9ncb29QvsMXpTeQrMiA4aZPWkv9j2uLcZ48cP98q6xqkUYeQcGHrBsmYen39sBNGGo3p2JQmxf111FBcTMLQ",
  "key9": "4fTjFigpU6YAZ6t71nKisAVKg7fUPGspEpmDM6uVnXx2zJPxKN72tZZNNnk1khamRwKoGKpX7qeBG1DYadR9qMtm",
  "key10": "5c3tvheZdkKAEgFs3i3ApmqNc18DeWSwPvNpZSqWDJBmrN8yuEU2z6nvoapU4oj5DJjGdNWfy8huM84o4CZbgEmN",
  "key11": "3vA7XVPqc79Tb3LCjz8Qjp9mYsanHDDQwrgfWoUfBuDgqyDWqN54GjiNT82bJCFHN6TYKGrFFH5brrJdVMk9NYm7",
  "key12": "4bk3vwTvERi4SiPRnYVg5fnb8Kae6kQqhEjyZySjjnTDPEH7f9YUHCweLfgGLJGpWdX9hvBPfNUpgFsTxcXKQsNH",
  "key13": "QkaCgcMCRaBMQ2V4mpuFqaEGsEFBbQ8GjNtjN3YXjb9oaV9B3sncN2J6Nx3CuKQ3mokzfzwDE2hJXXADMQ5oXgi",
  "key14": "g9WwE7Zwt8qE5Md2AH9wkbynkg6DgRnvYcdKD6PRAU7rmKA37rRe8XKE17DHauox9UW6G3p2LP9cPPJij2JpeBb",
  "key15": "5ZCfAPPeyRjY2XBNrvqzWK9d9okwoUVyBPJfiuDdobUztxn8sygQKMSdsJLubRWm6R3D6dckbmo76xnD61EdvHpk",
  "key16": "4yNLCzwn1vVreLRfuMGm2Jm1nr79nmYh6Z4X8zbffJjzxLTZ7oqqsDc7ZrU9MbkhPQ6Ja6pWZv2KhdQm4z1DUmX3",
  "key17": "29wGa5o4j12LbS5h27cCge3gq8fYHMpWPWRVoMg1dJhPu11JbzwobHzrVFn3bUpG68AX9qKT4XBRGfNSuQgNuK3C",
  "key18": "62HgQE1RuihmAH4DxA3MuBFMBw6ag6QKrbAnpYjzEb52EMr9g4jhoX4FM4WymycsXnDxRL9XgVjX3wR6L6ZttiwP",
  "key19": "3uDui6Za2F5fEDLErXWZcqfbQThep4c8sDKLJMWg24UmDJg1jGttFGVUz5gru4RnYZqThLBTj41Cgwkkt4anAK5a",
  "key20": "qxNn4TghiRqY5tdLx6LwrediBsjW3dr5mBoxgQL58RevCwhYjG2L9Lw4yj94KPN86jkD7AEdSddR5AqLYGukoWx",
  "key21": "2EYtwjjLmcHjXxL3myGWJ1RvRZiXVcJ7o88dW6DtgKGvoKFg9vHFNBxN43etfLinD8mci4jmNsCFSzJNXC4v2c9J",
  "key22": "5zuqpVkZ6N5zNo7wnyLUQgcwGjgmDsW4R6t9iQ5VqPvuGCYwG6217mPHVZhtMKn1gkrwSqRxKLsRJ2frc49XLws4",
  "key23": "2eTaYyF6B2o8dAwbbncamSvkykMUUGvxdhmMaUr6zk4xed9VBJKakFmsbnTXeHCQbuBjrbNw28PNBkWVU4tpdwHm",
  "key24": "2NTxeEnVD4WeznpfGN4e7FyLbBMzV7BSHC27hZKNVaQSkHTLPL95wnv7n5FbHhkDcFSSSjcYxcUBad4nsgZ1kY4",
  "key25": "3j9DBTyUbncHuvdpsYNCWdtWTWYhidF8XM9er9bfPaCifMdFnpiRmCjeHL77mERDnnZm3uhH234sAAq9R2ygf4tY",
  "key26": "39ecuUipo8phdwDMPm3GZagGNwnhy4Ff2KgBBcfq3JFscm8eysvbf33Lm78PLKCEABmkmF1N6fVMt69dZToWdF15",
  "key27": "2ja21GtJwRYdNseoYUZsfUEge7KzvXoTwFQZyuJhwQVWLUMHZf1KKJqbH8yA5kvZxqwDUktX7YAAPk5yW5wSz464",
  "key28": "5DErcrPqULqcXFkFQntLJi8RLPZEkf42koGAd87HTzg7CgfhUFfNaJfksvtYmrf7DjtSNJyQHTYqZ4yRrKSc3Qsu",
  "key29": "4eL4vdrFMUgHtwY8xmjoZADa5QzRENTKVyBFZBqUoHm28XGLTs9R4hKafAhCVGaYx5gj8YEuhgxkN5jYCa3k7FDh",
  "key30": "4ymidJTcHPr1wLGNMCrTw1GBptC428X7n8FfDrV3oo9DRELgaJtDWGN9LKKRpHAp5j4ajYa3KjbgTTGFWzeYKUVV",
  "key31": "4LL4rmx6LQgTXZWdYMfbQQbBMHrhyqPvKqbSdgTQ8rVF2pHUibdtngEWikcN5cS18EvN8V3FCb7QmseDbaMiHeH8",
  "key32": "4qmXUy1QMT369J9rtDhWwjoTpt9QGWMxuBiZLgxjU1wyxvd6XSqgZRbnq6FQoAKChkw4K46dhMttncBL8BGBZWDb",
  "key33": "2xVnzxP69e5ojqptmhLkbVZvLfDXxYbyA91enC7xUBADouTK7kFzHuCty3EfT77eVBYu5xc9oE8FGptogKteGADu",
  "key34": "45xqcFVsuPPN5N6kZkGN24My8qs8h45ccwKStUXKygkLz8to93heNsYUZyotaRHpeU8NdzqKuPqYLXwfA8bJFC1U",
  "key35": "4PjwXU7rSC4dud8aSM4pVwExte2KHdXTJbEwj2Nu8Yrd1Uwd9btJkE7SAgmP8uQDRzb1T63VL3nTMFWagKXnsRho"
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
