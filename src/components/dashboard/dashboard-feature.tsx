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
    "3anqeSjGCHZSaqWkWqGHMeAEoUFZUnsJNVYc1EjmrRdwnJtTkbBeD7TRFoEJGnfNkfwA4PzsS7Pyge97hg8xmmDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THWP4RQbRGbJcF8eufd6TJrgh6a5KcAoVoxGsSAKfeUVUpCueaZq7W8oZQEzzzR1wWE7oU8rAQyAHM3dmSQueKU",
  "key1": "76W2C4fEgQX4zP5v1i8BANY3V32tydKNgP7tnW5qFTzHb29bVA5cCF1qxwujtuovsLRya3C8kXAyJ1m7pQoz3Pv",
  "key2": "3xZXNmGiBvcdA4pyfSYrKLv3NeqpkYRvfNE1Cfer7HWaLNHQAVm9T5jLbAgQE9ycuw5vAoDtoimfaJ1t3KqocS83",
  "key3": "3FUxTa8LJpPqVW2ttaHguDCBmuKnGp3mmhMQpu5SwZ4hUV6E5ieEFMyThZdjpfHJESBwP3GP8eUkoNznpD8V33RF",
  "key4": "5X3c8xe7Z7nSnsYWCUdKeFuoc941DjT6rH1FKL9xHbTarRC9DNsJzGm3dqhgSFCYtdhfbCPZPzvsZvi8Gme3KaSW",
  "key5": "2B96br3w3V8h17hwGtzrF6KhNEPvNXoVcXKgi844RyDqaRWkSEfCmBPiEx1BaYgDS8ECB6GhZSWdsMa9LqBese3D",
  "key6": "3kiAh6C72btnxSB6pjantoGBqWB9ekcJL3uvwpMKF2DgGow9axRYdMQ9uCLauzV9VNox4hwnSbYsL9SXsqPbLrDc",
  "key7": "55NgeEUAgC5bL3jeGsZsFCVT5rkJH8H5EXraW3gVtUkfE1EUvhenHQaoct5fqfimBJKJqW7EddpwEhu8kZCeBo8G",
  "key8": "3m8rcZUJ1DXzKwervaf5XmE6MzbZYkkWznnAh2xtGaA2gB5U1uZNVoaDLRd7ugjCcAa1d6rkstWti3gEkdAmwiz2",
  "key9": "2ke5vnt5YcqYMukxsbaXDsZ642GWM7qkSPu9mF6Rd7Vg8Mc42Y7LSdKxHNYXaLKHuSFa4NRbcJQ9jpQWA5nVPRbB",
  "key10": "4dQAna51KDYrozvLT856Ggs2r2TDyXcUVSP56nCKvQqwNoU1xBUE7DVg7BYit2SH5STkUzEjwpqKhSiZX17XiyXL",
  "key11": "4S4MjYGFu3d3jwFrgF8T2jPf6xxoDcGzPf5iqdC1h31W7DERzaZioRSGUBvRHBup8dob9yNDtTD7S9G6zBuFVByG",
  "key12": "3LE1fFiYN3jwqMW5qi2yfARM9icNufUHmAZdfUt55zUjtupnt85ySxSmm9P8gtwAALR8qWrmSZwcNayRXREQ1HbY",
  "key13": "2jcexoPK9pjPC2VRmDk2UyVQPNf2A9KdAHh8TY7yGjVZoT3yGCoT6rKzr9GpStxcMukNKkKcf9Sv6XRXq8cZQTiM",
  "key14": "39j151QxtUXEyDceeMbVanHFJD7XjXBh3Ru76vUyYdRpKbszndKyDPRaKR2syLDc1rbH1JMg5yByFN5SS71YHfb5",
  "key15": "5NLwsHRaDdzrFLzK3FSd9PWGMHafGDiBMMYzMiUAvDt79R7KApN5f7WwodcJDAUGoYEjewocpb8KR62jJ9wfTCQu",
  "key16": "2ziJtWrHk8Po5xwDabriHKsvjCdkzN1n3gtjs5kvf7rV58cB9hk2mRc1MQuhgsf8bk9fp56e597KX1oepQjP4sWb",
  "key17": "4fbzkceEzNwPTXa94THsoBHADroFRV75Qc1F8wZwFu3BByQ2VmCkDHjC9w5ZeYvd7vrQi1EJ3zFMarrkyRtnQkvM",
  "key18": "5kFa7T3eGqGZoiNQW5jSwrN94o7noghaFRQV2Qm9GYZyUsTtovoMRKLNpJUquHpFtCpYn4HXzf5TRvhPCvPJsD3i",
  "key19": "5XfSM4VFSgTWqKwRUSaNmx7c97qdfdPwMaJjJJvGgdhWifAzjpYn7v5qeDECk3ZddhksaXXhGncEPeSudAr4d4bU",
  "key20": "3kqDvh9CmHgp2dY5wAM2aebK2vrafRFbxgmRLQtddC59TBvBvNDj3agA28eZrysqJoiJi9HGrnKfFTtAdZbCAtd9",
  "key21": "mv5T9RfvzoPiEQdxZGJ7rHetWRdZx9fHythnMj5ArhTnX9iABVaYzwaW2uWHWzHjSgxdh9kpwujxYf6e948x2Eh",
  "key22": "6hYd2aqmydwFTfTJ63bo1m8vcJSa8rXAmAn5gejpaaMVS1dysAEiMbDt1veBsBge5S1iZQEz1hJecyjr2ZY3c5r",
  "key23": "2KWMgVMd3FvM3NP2Mj7hXgUPw7A7SeMP2ZCrWfHGtoWEbYsYPmLTwoGcAAWVVcEC8213VnwpzNNw8hVQLZTRxppv",
  "key24": "5eQjeXwPP8oVFd7YH1Fd8PNRvrLHV47iwBhpWRMSQKkf4sQ1NpZH9DGDv5gGHbtEDMRHN4ExL4WU8MUgYbzLBWTJ",
  "key25": "2Qf1eXnaKpc2ZoKdobcTsuTy4WYocG3E1Ahw1oTDtY4TjMjGgm8g2Bfv9ZU5VQKJMz14nC3cSJTjWUqDsC8GF9Sz",
  "key26": "3pu1n1KC9aEj5TDiqXdryd2QyRPWWjqXwVWGRSp4fZYjPSchTNUnUWE5eqDaK1JcnKJVf5Nm11MPEQecfz4uLjBF"
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
