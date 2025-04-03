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
    "Wrr9qAZNsdrJLyZrPeqW4fQMarBMunjBMFQ4V6mHnkcjtmAM1HQZ3JDGkyjYJEYR87FgrABvvdmjA1FZAP5Rs5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "325TuLmZqoCjUmEn6RunbqjwyEjL2DGPQhEd9GCtx22p9GkMNnh3DJK6G2qcqu95ftthz31166Mknd2c3Vpyzxmz",
  "key1": "5QZp3Gv6gWnAfSnNYna7obisR5kGkznvubamLH8tsie4fEdLWqgrZkyr3e8FMsUYCqEr3EyCHHvKF543D37feCgP",
  "key2": "269CqKrK9HTxkkm2th4QbbmFTpubpSMidExygJD2ED5KWbK6jHqbjTk6FFL62RpNp1gccgSmZcx7KDbBLPdCZUby",
  "key3": "2cVwnZNUsoy76dajHtqCcMXwFQNANbinukoXnmG8yLphLvG9y2UVjKNBE8pDcBG2yzxpcWiYNQjrfG9NtqZh2fdA",
  "key4": "3JkMZXTqjexxj4jDTtSKdTMxtiJvEHMnVCtgY5n5b4QRqGcxe7KhkwBBxDFdUqCEycZ6EsioTijZFY5eLeLxhdhN",
  "key5": "4KiiPSefxoJNAxoLQaf6uTknHqHUM6JwqehNBiKMZvFSVkBLTE6LgHZGCt8xUZEHdR9XUyCVqZ2snWq75gpsMGVR",
  "key6": "w4BfE2p6byFwWRTepjEkvpMA29nDNDiZxaEL4SfqKxaLYFDra1bb4tHfi62Z3BMvRoFXAHTyub3qBMCbNeQJA1d",
  "key7": "3RkrtaekNyQ56gFewz7wQAy67Put8EAciAaLcZYDU6oCKtDtyeeiCnZogAJ1eBVpQ2pogob9w1NUMSH2enPWMDmq",
  "key8": "66JmESetaEpjjcNz7U2bbKHoxiuEUdXj1EFbTAZJTfAboTn8wVirviq7KKLUkdNM1PCBrPhtDLHkNc7GodrUyuSj",
  "key9": "21XPXYPrNK2iAaGQP4qkSzQvKxkAwgyt5GyCV3h8DSo8SZG3Ck7eqtpUjy2jSXUEahL2sb24g8GrZZB2hdU1GVbq",
  "key10": "5va3z8mMz7g1TuPZndWmUtLj7ngcPdFwqABb7DGXKZbGZTf1uwZcJ1pAeZ7r9aQNJKDMRaHERcAmNDBnHLEQJJj9",
  "key11": "MqqLY3eU6RR49Pi9JEHTCbjybtQr3JrReRGsnHZZjRK1xuHvwnVUonpmscHKjYYSJguS2ykEPi8qanLyfZ1AUUP",
  "key12": "5PBsX77LmFS6syo3qNMre9KRraoFAxH6vFWKbsEqUcPXcGemE8MGwWRixM6Vf1KxkxQbSUqLbH2pexngjoZBJT75",
  "key13": "4MrVMYdu9P1t65iGfk5sNYa9B67cndHaECFxtJzV6ZC3fNc7VXRk7i7i8dVHRLtvxzYrVxFWx8Z4QaYTRDSSwUhk",
  "key14": "3Wap2P4SEbQYCfuF8sJ8trwiUz8cfGrAKH6r1BW1zsXx9TYNwYkDoHVKtGGgK1C5ze7U3s7QAGUpLsqQEsWwyBBs",
  "key15": "29GscPi2ETCE4qmD9Uzy5gHJpeDLifKhhfnsC6An37ZBr6hJZbdDafyxbQLu7i6zwmnnXXraju2CWt7PuNc83cv1",
  "key16": "poHR4Vyqtt9gKRKhj5T6YHkiffaGKrMRwzoVtuBmbbjbr6yrMikN3JDmSta2tHvV5SXdBHMQahnpWs2iGjw5toy",
  "key17": "3MJCuiZ57fhB9xvfoXKEihDgaqFk9cz1UJ4Htr9D4JNh3KqWS8TdeViyQTR5WNjyjNM9eAnKxAECea4eZxzn5yhf",
  "key18": "2dkeA4GnLfby8XuKGsN4f3QmBxsFZcLbLvee2Xisx9YyV6u1Pz333dKPrC72iGTpqXhGhj9V1Gqk3VyZNMyWbHXf",
  "key19": "59fqsGr1DuvrDrA1rCTAw74KKDjekTXsLCHFSXVWnVi38de1eJm7vYXM137eXkko8vk4pX4nqSrmyAyFLvgnuZ5G",
  "key20": "5gTRfq94s3s4WRNJcMr4oa3yWTuAY8TpMriDW3uKo6oHT8Jhm6s5tZUrXufNkW9RrG36YyqnV2TL73Z61RLH2Zv5",
  "key21": "CUvbno1be25KfHAEjjmPX2YWHVMEVHmmaAdnRayfxzTfkBkYvC26mQbUiHEHdcfzHSLa9e3HvZFa9pYhnhSJ5To",
  "key22": "ZsbYwuVNGHrVhwGh4i5a6yjoQX5MGXehZu8M3gNruaw69cvjSEf9XXSE3fa7j7EyG135d3zbru7zcS6Ax3XKK8f",
  "key23": "2AduGeY1x3sPDdcnqpDsF7VkATRN5Nh6dkK8BwoENHiexSaXuHYpZqgLjbDAqAW2bKP3CcDiZy5uRxxakzWRkGnm",
  "key24": "3yCSbW5VM7t6dypgHj8PY5pt6rQYHbUtfcHxDaqgkTQRw3VSxiZgzpPjyrBcSb95DfCjHvpPSXArPifiF9KMuBJv",
  "key25": "4N8RW79gimZgAeiHXLp5WUXC4EyCnvNEDKeuciLSwZGhRdyjAVNinBx5ThiXHw1xFyQgQcr3kP3Mft9fcoNuhzXs",
  "key26": "3u24EvikZVKnrB9nXAzuxT4SxHvraAmZANXroDuvb9P1yKRpeMV4RiJM3bppwJHAFXMxC7RErthKk1gBTKpEzChE",
  "key27": "5jx5MWebWMjtENr8svFP7Sgcd72LYfcxmdvL6Y5nt9Aqms3uynJDuoKeQ9PhK5hPMr4V2S1XVbkKQrccJkfC2FQ4",
  "key28": "4WSrGtfDTM2GFJNmhXWX2LY4SDF7pCdN48fPUBuGtXgRcFK6p7p1765mDAo2simV6uDMJynryLCqa2kixZwXZSx"
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
