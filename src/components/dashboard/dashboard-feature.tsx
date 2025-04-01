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
    "2ntTbYFERYit4JyojimUhjMfx1rgYJcZxscB3zTKk3J2nrASuF3NnLdvDw2sJW9sM1TqD2gjKoVuEP76UCG3rStb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WeBaKbVzGgss8BHW7kMBg2U4XHx3Stwg8Ke6JAG915oGa8DjxTk16ME1QcZLfKehRuyxf9dnoqNpPzF4H2xYT6Y",
  "key1": "35aPqCMkqGYnD1TAkcDaLTwXqUT6Xwh5eiJ6rF7VqTT9yaoPYEjCMMWhDS233pBXqKGhCwni2j3Ar1i6ESyKSWQ",
  "key2": "4DuoNHwKwkXbHX4D5gHrspmzVDHwk3aH7qAZxw4ZuQMJj6w9HdAY1kcNHEetnnYkvW3kvLtDC94fhHGzY2z7ifig",
  "key3": "9rPikMyiXyaHswKN2KcHnN9xp2V7WyjQuAZBoBZtZKy16PJCpUht6iyRYRYmCtzyN7uaPJwhaskkFbzt49Qu3Qv",
  "key4": "26r9zxLnTV9eggM6Gr1wBAooQT85HopLsfNAhdLmH5mgZ3PkujK5hHpyNbEanKfxPC1sABiM3NLHhD7GNUC5qwcx",
  "key5": "2ZZtSGFTugH9YjpP5CiVP25Req5kLyLY8A1PH3ztjJhcEKAgT9FD9pvJAxYYcG6x15AMqnuVUCPcNFhTRLjXFSj7",
  "key6": "2KBMAC47NiGfkpzrcdfLrSXbxoirz8Bsiquk1RS5zhJu1LP9xrHWeMvM1zPFhyFf8Aa5RKuiVLd2kfii6ttX7H86",
  "key7": "3tWNeoeec3VDg91QtyhdiHL2E3N8ScAggg97AWaQymZWi54aNa79aQok8DkVhpzrLky9XwAzwSaevafKfDksrwUS",
  "key8": "56uBTSHpbkrxXjX3yXHqpZ8wCoP7Py7YNfM9k2ee3ad92iLgvBwgkzgqARUrS9Fw49U9YHawYSc77SREu4ckY8Ti",
  "key9": "4XSGFLB6iYN6JD3zthQkDgM85EcGpgfzKidsXhrh7E3UHuyrhaWvSDR3Ho61V1kAP7Wu54LgnWZCex8UouPaAc6C",
  "key10": "2fXNM8vNTF6u6XVi2uWuNzb2RNEeNZtFRMQEgkbWsGZ5AVaunLwMdHinomVEBxx38zA4eY1ZG5TNfMEu8YGzTRjC",
  "key11": "59FHFSB4fWzSPPSCpcJ6fNCNjshFz3UitmReUvjAHZsLHbSKjDK8xTdCZMrB1s7oVUEovLEo9CXmhNHKTLf6BJpC",
  "key12": "3RWfbgNhRtF7KyHGYCpF2dkZbvC583Bb6qDi7F9Z3s9ey3bZzJku1bXCas5QHFsd1Vbh4GKrvQSNp51Td5afQy9s",
  "key13": "534hknBTFcdFypexPpteoqguvVRLUqEJ4sXM1YsywcHPaBzCQyCCNyBh52wmey4v8AgC7REC31SCD7pbEctU4zKX",
  "key14": "G2xV2PSk9BTR9jZFW6g44ZngczwE6coCRzxaJR2ANBGzAkBZvhpX68Lho7d9fSd6uY8grSZR6hq61vAwgZBKQ27",
  "key15": "3dtV4g4hSig1NdwKTkjB9sJHmK2X9xMxQSdfMKwWEAcNu3xs46JaM5ZQuupKT7KdDPYXf6xFb5Wvzm1QyBiudBhT",
  "key16": "2SpdUouiRNCEXeggXTcbBbfgYSoeSFny2o5MigsdtYHcSngtaCZ5pL47hY91h43z75xQjEEiPiG6r1WJngUuDjgq",
  "key17": "5fGm8282GZeSQhQkQTrDun9N7Qz5acaFWcmbYhnbjBVBoFRBetKdQSR9hTTMUkdf286UPYiZzzDCoqFWuMAdYZc2",
  "key18": "2bBbbpg7R4s9CPAHtxGMjA9Xeg97pQUy1R8uTWzueLxY1LLAgfUtnrCMf7cSAF6eKAj4dzKNQZsnQfa8n5fdcLn7",
  "key19": "3mHMrX4fDtffASPc9r2YCXs9xqYguSFLcWcNxCDh3HEmdRUwsh8EqeV52bTU852ZNDt2jLg6Ag4AMdm9uGoL7YbT",
  "key20": "43sboyDWPWhb5opqoy1jcevdMJFLF1Gvf281rTyigu5QRwDyHprHEcAFmwxnhgvVJetHjhCvjDRrMdeXecpJHvta",
  "key21": "i4mvji28tTyoSpCygy9Zc7MCEX3CVreJHGBYaDXwTPB7t9dN7nWiqydDHXtENbkiM4L75EdYiq7pTJwnEoGr2WJ",
  "key22": "64kSJsimrGbmF4p224LMx9YoKATCVcr2538wF1kbhthrDaQZq9SJkCJyJRx5SqxxrqSY1qKfZnUfuqsU4qRfhySA",
  "key23": "2p1XoQjb7eeMKsg9pUNGRCTixPxbEZWKHbHsHvKv4KTAs3QhTsQoLRbcaAxEvkrvCu2PUQx5G1Bmw79TdGd6D16G",
  "key24": "2ckXb8JPGKBP5zo1qHiskPSK2xBSXua77kY5og32FZkXnMFv7UmiVZruKoeff5Zu5H7b8HR5daJTrfqiQWyHE9Kd",
  "key25": "2LtcXTG6AREBQcVhk2jKhsthpyhB2XbfpJrXFvvmntkbq8MSTdfMEMkeiLUFnFtsUigoK9T6tP8nezjqVmgrdYJp",
  "key26": "ZuZYE2NdH8i8dG8gyEpyaipHRY4hgtLSXE9J66anYUhKoXMPrxcWmbP7tZzcjdYT5RiBKDbk3MmGT3GVqDa3Lao",
  "key27": "4bTEwhTXqb8VuJeonQLs696D9FNeS3H4tsZ4RM58nwpMtmoHzq8tjgqX6ggJMrbkY7HLgC7WSykoyt86NJwkLc93",
  "key28": "2gaGyeqSRBzvdMDNeQv2n4ocPAHvCoNrNiNAvtJSZ3TbMb1GompM82PfP27Jh5yXCDXX31rabLGiMLy33PjFnsoh",
  "key29": "2tPtunWZQPwm9JkJwqhRrxnmy5Uo7TmAFotzq65Fo6U9eYiaYdNjBAtFMeB7UvqoefFd2eJQ7ZKWyTkakMLZzfsp",
  "key30": "3AVfkRnkqw6BAWX1AJ9fNSGCo82j9bwQMwwjktkZKGnRWU52TTj9Ee6up9TzCPLjkkR7Rjtyf9r9CHJZZRegC24T",
  "key31": "2FeAVCM6GAZPCF1HHawnAGoRdESbNh4WD1VjjZ1irXwsheZc2NAv91x4SXqvT368aJwSkjj2FXGCP9XJ3NVHQpBX"
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
