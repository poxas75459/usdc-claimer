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
    "3z7NoQXBoCGC4zr84a3urAvdfiUMcg9ju7gqZHimqGHSbGdPyyUY3XmcKNDEkwHXr8MdKp54n7wac7QVuZ833xPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEvLaABzaBqzseCWqiTJyCRLwix9Pxm8KvUFJQ7JqGFkxHitoBe4PBcGgYXWH8GKaGdFJPJ6j3UwM2mpAobLfH5",
  "key1": "msF8iruZ2WGv7UcacU4WeZ8w7ekDXoTkAR4rq2g36uQVaaKtBDqrB4G5mFWzLEVJUzocDJEM2uiJjkfK3K4QQBi",
  "key2": "464u691mg89NwUTbR1by7kWGquEifRkbLyUX4HVqkYC6CZLoXBTFLYqn8nfZg5VaACBvbFUkKziV3rFV9Xdr5Eon",
  "key3": "2qxUzwzNf8m82gA5gKVzE1mJDDPAVmQhYfTzS7w4YW7YBC8mtxaTvUKJtdpEx1CEHV4ZfMv131f9y3PLVzy3TqSG",
  "key4": "392ovGidmFH33NdMMPaQ2ksZupEAPQioTSCwQPihUaHmDVAiDHWKRkEp9hVy9Hz5RiRm7nDZEpTEb5ZCSqJLSD5t",
  "key5": "nETGM4xpqjPc1M7WATUiDgRF6dK3zT7GxZgia9YnqUmTu6bc691oxvjYhqxopmw1k8HuppswDV8RsSYu3PUn23p",
  "key6": "3Dh18jTXLEH8SDQd5zsBrFrJ4fcqa8vCk3F2WFAicJpoUaEorHL3kxDh1GQX9JiPoLp99NsRHuHu2SufnhggVHoa",
  "key7": "3QbeXiwoJW6KDuq6QPztSSXgkyzRQU4cCpxnNvR8eAmg2ze1vDw5MXHYgHkbaoRS88PuYhATekEsHnmoP8xvqE45",
  "key8": "F4ugP1nm6kcoepmLwhR8ay8TFpZpU22a4URnWCoFZWdzz4Z2jsScogHVYW1aKeRi3vsDCDMvZhZj9gPy9ouLru3",
  "key9": "3QQPxjRisjiMd94nvKGJF4f53QSNt3k3v1PZrg9e9GDckVXEExpezSUkYEWhKDhxa65FThK7aQHi45WTqYLMdoV6",
  "key10": "5vhwGqEhnmKvbp7AGP5ZKCjhtKH4RTDWqtHoHzAdu9NiMcU2RwJ4TEpiHJR48f5ZDQpVDfsRuf5WSPCXRAfazbnH",
  "key11": "33p6dauCVK8ZLVhbuWeEX41aEtt76SWzc9UrN4wbh3NKS59FbRQCsyBQAk6qA51uy8kdbEoEtURPW6mKSu4uPoNs",
  "key12": "5NF8o3vAim8hisQ98xRoVhqVgVWff4W7ZiRaaJr4yS31b7Jrbr2X7yX8zDW6FJp5m9dYoMd3gvsj7NgTnYJpNvzH",
  "key13": "3ysz25mj8oqidPgpnvkmgSnxg419ZJzwKwzfAG6Y3DgNVnxVdmy1e3mp8fZEcDXGauUScDf4NVTDSiinZKZEcLa2",
  "key14": "5Kw7bMQ9B4ycQqY45qFkQns71bhpxiPJUMy8Hwk1aKPsEwHCJUsqqeNGiJAkpjxuxskA4ttCQChZEc8LJbj4ZSPN",
  "key15": "3kCpBMUv9BnR11U2GcVmjemcMjp1zf1BU3mwtUqP1VZ8TSXW7wEEuKVS9YrnvroR6v486p4oDyARPZRitEwdk1YY",
  "key16": "5FSdwZJHeb7efB9u3hAUy6YUqthRQgcUSD4SFRud6bKD8sWZ8bGNieUFooK7Am5LEANkEBGXf9LV3wmjs2UTu58y",
  "key17": "2rQsVdVbvJhrY3RH5ELvYVbMeUhfdsSAvJ6APuKGuzUFNuEtGXm9b6A8m8dVK6zawrdTsxghDnkjas11vEFEGW8D",
  "key18": "48YAv5U372Nczo7JEQG9i6g1TrDPj4khdfapeGZW6UmKUrXraUHH3XNKfk1dWhKzJbGT3qQ5CgJ2Dv5bok41QVMj",
  "key19": "24vFTfJnzvCxkSK7vFUjLcVvCPvgnWt5RufkrHdrp8YqhtPP54K4sYnuXb3XeoJ75rHxGxNkEfG1oi8KBNuSt4Aw",
  "key20": "23eNfAxaZHNq5KYMvh7qJSejrxnV6zy2yK3xjxB9uKwUh45S9fsnmNLo6eKEWJ9XmD1tucRDRy5GAx3DREDGDDNH",
  "key21": "zCdigd5iMY36RJhmNVRTzFsUWHAnWRix1AyQdxesAWrH6aMP3XyWkhB49rQ9vjmyWQJaNDnMc4v9Y25aCrJZRQ8",
  "key22": "sdFSTPAwEottRxG9BJqE82rQf2zo4qNfk3XL67o82qUJmPkwHW52hhRkdUqaadxtbNhZZPdZr7n7en2RkarieFV",
  "key23": "5Jdq8fsBd8U4dMU7saX9VnxffoP2vAhEdXtoz2iCSgAMgnwQYERukMp3FVb4DVTx4TSJGbKQbLjH4fwyReR5DEUY",
  "key24": "JEEzEa2HNP1uB4ryDNWL5rMJvrerE1hqqNWzaf2JGgUqg7tF5T1hmNWZBDt5V4CKqcXZuuy8NFecVq6aorx7Dvs",
  "key25": "5HkZgNoAtQPm9v4Hye7ANcmqVKnFq9jFsPXJbx4sED5WYrvVfNoiDkDUfJgXmLrawZteBo7dH2mPnsgADTLTTciG",
  "key26": "2c2DUYsZMP8W9macumJWA4vBT8NaQAWrqAvVfqkphZkw4A6hfeF2DNyJ1YtU6PLCLRw5DwoagafPRbUeyBnfgSr1",
  "key27": "2P6AKzwzB9M4fTp7nidUckmaMAf1Yww82cHLAmkWMvA5p4eWdMNsajeAVfLKNfiGag5FWbWFYtoPhphPky7svYdw"
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
