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
    "5eXivFAkLQ5Aj1G7cNPbE9iuqBjXgJG1zgcSwXRNM7n9sy5YJt4ycou2nDABk4uweF3QKMsJcFbxkwF4zYQNLDHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4mQwawQz3o7q3bZnVPvoSGAhDDDvq86SD4SGn7C7fZDtbSNgKn8N6uZAmTAZmNBzh6tfavGUKJiaCCTCMKyBcH",
  "key1": "3zo2ss3BYMT3CUsr84ePzE9WdyCwq2gFai8bA33bvm8FLYcpvtw6gMKYRyeQjqtpw3qsD1aky1H1i76pQVB2Tvda",
  "key2": "277c9psPmgktQV3kMZWq83T4sru5G34xJmmhjhtgehjnhwajupBncg7uYFpmkd7hphguJAm4Cra6RQjsHASahB7Y",
  "key3": "4obnnKDFB1KkPsduJ9oLuLZiYfjahZHxr8EoHE7tDWWNfYTosgyL43egx2yQYAgUuiwdNsVRwqNJxYh4buLh2ge1",
  "key4": "3WMN3Jrk2k584aBHBFB8kYFSFHWBx645G7gTXhpHgTzWrpSh9RbKofPWW7janRwfPg9HrFk1iWoKy5dAGxjn6uZh",
  "key5": "8QXKW1RhdYe4ZaWKh17y3pZ9NcUwtobQv8xW2zbpBfybgjMFFAqEivXR2UXakn82QmdhqEY7Rwigj1iJZ1WvMvo",
  "key6": "2x1GtAj7PTiBsFEYwmh52TZAGL2P6xWVoJ6wD3jSQkSPpqje89xQgGhBVCkEnN2FBe3yu6uSWxevuSfZwSKVr2kz",
  "key7": "3qXCh3Wv1gvqGJ6HwuUSGGLqdB3NQvrkzGpC6aRkKibcDq4tpHQ1TJzMXcATo5pUi6pHZtxWdw37oUMXqwaYwwd5",
  "key8": "42UfDrtUmokQoNJdaPMHuuDbsEtgmzGruqxFzxA39xdfroEH67Ye2pYLkfhNREoC72NsroYACHx1Nsp53uBc3sDc",
  "key9": "5Kw9Ft3phGZivQtWY7CDs7hYtSXh7KYVEQYmuuDynzkm93QNHPh8mGBA5j7bxBT4yHWaDsoC1X5eJ7qnYbDLbkVf",
  "key10": "2EZwAL4rLBgKUYAsxkdwCp1PjKaL4dkw8ZLGhY9WJYQJgoBdLBvNUbwVxWmgYpW5x49v7FWu448iDM4vhKLEaJ2E",
  "key11": "66caweFg6JPC7as7ShxTnBs1kbt9Jqh6WiZGz22YdNGHZQqoftYri2svsTewB7D8S8ciovesErKK3uDPCn4Qkoju",
  "key12": "4i8Er7A862Rjh2NaTT8MwG3xRZz45js2o2j6g8MXagCDy6fSPpuAbRiXCXsFKUi6z21CzE9XJurKAva62Jovndd5",
  "key13": "Nsr8hYDPBzcXGe1xHFFWuw3Qu7BrN4u7bgQe4E8YShinpw2BZEx4Srr9qbczhey2mC2cu6AjAaSVzzELTtbEJMf",
  "key14": "ADQGaU3oHvh6AT3jGfoaYCSD8AH84dLBNqVN67keFU5HcBo1er53FzZojXgN8X7EW6Dt6X82Qhf3SxVxrTcKk2D",
  "key15": "3XqjFXdFNirdA2oYUob9drweNUkRcyye6P5fYWuhKen3BoTUsKdstsvR3ftXAPUvuSVneQbThwJ88smZuf3B1qCA",
  "key16": "24UDEhZG1nETE2LausYeFdSL4GcTsfCfSXtmj16uUKwzGkY9JEBKx3tbKaZrz3rDemCs6fJLr6i7VNHi7wrburcn",
  "key17": "4xkkmqLJ5HJcFKnQywXc1pWjGAqusZKrcaLnSQ2JtHrRrVquC3RnSy9tWJUiCgEcuqGQZjYvbCG66MFQovh2piNS",
  "key18": "3Zw24eZGKYmJJU3UE5HEAux91aSZoLEbrTLFxce2ebSqmLGSdPb8C94gerN6T5zQ1cy979zQvG7ZEMT4fu2b4fvn",
  "key19": "2VDdMy2yqYFk1DgCW3p9VUawFAG1Qawj7RVw3m2ZFQ9CYbpTuGaNLs9R5Pf3cR3usyXYiAopXLTTnbSgc8D9bRUy",
  "key20": "2vMYqMm248uSbXgoy8yxtWJM8Zcafbb8NGndjVGB5E1RVibZwC6qyZWBg4JoJd3QX6kFsig6qB65V92d6BjB9rPu",
  "key21": "3xzJFTJMiaK1rVw9e9DFfR63KYFGYyPCwJ5RXiUigXeVhN2Qg3CGUDa37ZDejp4jxApCb5VNYDP8YdLuPHzQmCRU",
  "key22": "4vDvxC9JeZTfuNGF4fnsQDJuefoJXED5KNXCK9mc99v5dTEUiN4fHCLeBDr8WwruPmdcsfLYNmG7qmPnLi8YU9qD",
  "key23": "4MSbSAvz6QShS3mtzVoqdzjJ9e6zkFnMtnQaRGoY2GSxjbW4qHSUGSqzqMkqJvGP1vPMwr6kvNgsjn7UTjNCLtp4",
  "key24": "3YvhDBTPN63kAmTnShV1BW6BC6jx43LjgTNVUPwZyanJFsrsrowys5VY8GHnXAVmpEcooVTQ9usxL1kWptUNouma",
  "key25": "5W74oA87omD1nRAaBv2spXGH7TWYWDfQbbspAh2JMfF9yFeBekwttbmVH5aoapY5f7kbwLcRSB1gUfMiLEv3KMq",
  "key26": "5KT3ifGPgHWbac2zJXp58msfkVXN9zeWZo2WKutSK8dHhVcqeq9xdJ6bjej8htL5der6x7iqkS9L67qvU6PA1Qt4",
  "key27": "3tLHg3wpUpU8iCpmjxEnaK5wNE7KzPSdRtv8TqjBbpydyujhqwmTacPyG97qWnCo37b2WJNyaFqGF38RNC3trLPv"
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
