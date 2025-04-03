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
    "4HQBkLqbNzV7pU5b3rUxvFEkKzDB7FX1Ny41KhQr1XajMksQniBkXL1Pw7cgko2ETqqLgauqacehiSdJC3fCqiwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQHapubWa9h533R93szEuUoRNUpFCx2mmU4ow31geW6AqFPFD2u7TXiJhNYUGDSyC5LWhDex8UgWvoguqfFNBnD",
  "key1": "3t8gXSMvMP2PfP31LqYE3GsP5Sp4GmEQ1KnvKSNtyyFdLjLn5X2NasWpjqQVRi2a2j7GvtZacNzaRK4yhcEQZwiB",
  "key2": "2LdwQRUnz1Avd8R6zQTFJ8525EVdpn5UjB7s3Qu9B8xi1DM4JeUJ1w2Ai6NLvxkhzoybT2XeHrDtUT22Shb1g4Ss",
  "key3": "RUB7pUpayDJBo4hdrwpNg88jTi3JMSqMG9k8FDXieXztDP8bsaNWLDzhPCtMTf9kgyzQE62KuJ6zine7B4x5GU5",
  "key4": "4QVcxAiC4qwysrr4DNZcLnvNMh8gNXSYJH2qhHJYVnntoAALqomoRSB8ScSWJgFbzEqze37cgCkqpJHuvs72XJfv",
  "key5": "4ho2GHddqRBqyCNBNz5K6xHUs93u41nnuh94BJ1wMpWkdg6NN1VR45Vhgq9xkGD2xNbf4RUzfchptMbHqhD2uXRs",
  "key6": "osBjXcvtTT4oGUK9AAtp9Zoi2KVzg8cc5ZQUs7SwyTAF9PGZrRM9vBBJnikH4XMtKey78FhjqkQhmTPprQUP4gS",
  "key7": "3Zn2bEkBvQ3WDfNXTN25EaYEL7V3bBV2Peh3PgABgkXDbcry3McPQcou7ad4aviND2hE9XDoZF7bj8Ww2qs6M9Cw",
  "key8": "4afkoAayVRqEU2y77fp9nzaefmjVCLCHebaC1Q7GDYeRJpRzqNH6hedA4cfsMi5hy84Gu8WTYMfAx3o7mxkWmw5h",
  "key9": "2z2LuN7mrjF4VXawqjKs6sdrtMdGpn1xGhbtBmAo6KVy2kWofeiGSTsNMpVM2AtGUehTdubx4gKYH8DgwZVeFq5Z",
  "key10": "2XNq5wwy9RYHwNHmETmzCd1LrKuBkb1UM6SA7TdbG3ZEdasedK4JNcm2mwq8Uf1ZzXN177i7AxSuFRwi8fP3PsQS",
  "key11": "4LUergdrvTEQore72qkdq6hjpjkdevC3DdRp4QYP6unPQ29sg2SRiJzwkaQbfSYbVTx3L5PZLx2m2JFZ3Tci1tDP",
  "key12": "4483SeN8gqK3ihANRiCr2WHiiioYvmfTd2QBDZ9awZb1XeYZcbhBBkYrueoFRSjA68QKmcr8cRzxFtBU9VsqaNdS",
  "key13": "2PyXFwtYqytMQWnCorb1GwNMEd6Kd9Cs4aZvg7L5QJZMHw3kmueK8WRAvpG6piRTs3G2nLj7yMAPYUrdVCVoBSWC",
  "key14": "3GghGYH4G1ARKKBp3Yt7rdGkktMcYXBsAyp29KYZBEfcx5z4b6hpAwPF1uWX71M6cpSbhNMJaM8wUx7i57P9HMVw",
  "key15": "VZyB7nZR7hKjLBMk6RUnkKZfP5XGBtqYjyNxQGxVsBV3HhJuqh1rxBdgsdF3H5XLut61deCD3nbDWCxRgbSdM7N",
  "key16": "5L64T2i2Ud46f1c93wwTkgWYGAJE8tiwLysF8tuuUXUm9xFoRx42auQ5Ja51bYtJ6hCRTPoSvFF9YXGPDUC8D16b",
  "key17": "2yZwKBbAxMA7Ki2JhDLAqebQ7H7Y93VEzHrmex9Zvj7hGFdsobXVruRcvRtgytJXUrsok6AzrbvF3vLjpeaQWKF1",
  "key18": "3QgCmymi1ZJhQTfbFREMJWzqwX8Xq59wX8RAG3NYVhMCK8Y5U3JkNcZUQvBd11p6FX7Sia9QziCRYPiB3wwBB9Un",
  "key19": "4eDspUQxWXm26XgvEVroiQn9aGeEUqimPxmpqgUUi38DpL794RAHvWYjQorw5cc8SukBn8cmeR3LgKGQZNXp7Bv7",
  "key20": "2zd6hG4ambLSVPYboZTpikcDx5hDD91BFLZ49vnvnvXQzcu6djFQD52E6YG7jTtuEAap73aM2YvRbmbMYWrbWHyn",
  "key21": "4RVoRggg146L8k1cjcLWi8TFUuwvSkWqwNs9pzVnE4ARNzKnu8ZxN7BCZ4XgunWzEhQtZrwczwznNMFw3JHQCvrb",
  "key22": "aQosh21Vf7DHfdXcUGucQFa8RU63jvRZov4axtxCfzzeUKeQ9Tz3uJcwX9Vw9FEc1LepKbbRAP39Gs8dZAD7tjz",
  "key23": "cevKCnQBUqtewL6heDtZxn8fV15wRP6Hno5MUSYnmZg37Pds5prCD7fR18fofqjxfvo2FBpSzXqChBjV6yt81MS",
  "key24": "4Apfx22Q527WXAnmgF7Ybh7t9o51pWCtE35CUwYHRVUrskSkRzs9Q6yuYd2GWqq8wqQfgHWexyRcca1fXDSPoGoF",
  "key25": "L1jCkkL52F7kcUrMNWwcS5msKTjkKdwsvomz8KQ8SxxZeT5KUB1CNQXomJMMNuPDgtpUPrQWMqvZvxB877HSgjG",
  "key26": "3pRjK73n1cqpnHvDcBPhBbRuEVArxefgiB8wn43Zt3JbXb761Pdf57f6VaBiZLDV5hDzvi99rtFAh5bV2YHK4gR9"
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
