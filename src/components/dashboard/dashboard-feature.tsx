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
    "5hAqNzaCZaJNXANMMQbbojPENBg8oF686PV7fRPydDdHFbSjkqpF5F2ZdNRKfc34mZagyrqhooek92je5ANHxpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4aiLvrqEbzBsmxLMg4jzbDP6UZP5ovoP95eugmv9gFmcvaL3oLSdsmjPvAZXBcZX9HehBD4t4xsf6SK8KqNc15",
  "key1": "vsi3ev9iWVYHui8GiTj2FAmhEv6hMU9iHEMQDnmQzELegxCgWmTRkzpVmnApKYwir231VEGrgeBeBwWYzBPuQRa",
  "key2": "5rJZMuzWdFrP8AYCdBVpv6bnoB1Y6iggjAtz9tdPaADMMQaPH2KxJGoVWmcFurTmB5A3rUBM7S9PfEAXGU7HaB9B",
  "key3": "5fp13jmoqJfFNd3UP2ohHMcwujqmKp4Vx7RJ5biyxumoAShYtTEgbNXQc3DL1JxsHg7BP8reYfj74y6saAHb3jaK",
  "key4": "4msYB48TGxiMy3zPdLwshDzJKdir1oFNnCWWNS3ZQcw5y1iSP1cJCPVjBHLLsnsuBRujDcqxra8cjGR7wexcw2tq",
  "key5": "2kedXYEjDYKYArUz5MspWKwUKFtEB9rJWn5469Zjrgzf5suVtdtcuLtJrfQP3St9xTch98Nzdacz78QCryhWgj7i",
  "key6": "3btE3UEM6AZJn1n6MzpWBbNnqiSpuGuBVXqiCpzwKnaiy8VNCFyBRW6dRSV4o31UW2ccWdj4hCqPWG5cG6uM78Up",
  "key7": "3FsKwo8FTUUjofdp8LcsANy79Wc7n5Tmsa7eFRcyhikPhiacdD2iet9s5XBLC6yJBLu47v8yKHNfVEqLrbtjKNng",
  "key8": "5bTCkgCgwxezvnHnxGjwFCd4FVHGUPh7RVns1TeizwKGVGiisE15hfBKpr99TuRdFeF2YqJ824G6AweSXRAeTvY7",
  "key9": "4NBbdjUspoThM5FraR9azUrF7FU9tPXNjRudPGMut58TL9JYUtVUXvVqXt9gPQt5ALFeUFWoymH36VjK9eizCtZK",
  "key10": "5WqKnDZ74BAtGAy9wh57c4ycRRL8NNZXf5FQz6JxvLRKVNVtNuqkE9yqZDMQoR9V4HJ3kxWB9Wc5TxFVdpFCvCp9",
  "key11": "5Dha27ZCNamLu79TwqivNYNYMhjzcGjYUN88T877J1DYBihBjfW22KAUK2tHweDC1BohSB7wiHxhS7am3D8A3w7W",
  "key12": "PTm8uteqL3i59zw4Vcv3jy96qdytbR7uVAoVYcqBrvgCd441hFerfespBUYDqZsCwH1ut7oLFiBmzuKFChwrWCQ",
  "key13": "67dHUsUPNfzkMMs5dLoMoc2MjdgkzArcHAoXMJg6Vnjtb2crBwZ7ktnhLU7PAds6ptP8JFZVTuMQEaaaTgLyHY15",
  "key14": "2TQNDZroCYFKVXBUUjejEYdpUi6AjtzgGTFxSkVRkCeUBgi7gJjcEKB7FkR8KL9ocv8trcPPsk9qEwVYPXVEMYcW",
  "key15": "3zV3GHdE7vEet49ijz4UznTMRTQFz464qMVaGgqYTvC38d681FTm6aT3L1pXTkoKw5ZfoJ2vidZ9XMU274GVTAHn",
  "key16": "25MernsTD9xUXVBtoZqq856jZHcWXTUvwqEKtm9d89AuMQJMzdR3zb4VdiZNgnuhWidoHpLyn2LgiduoyGyFtZC6",
  "key17": "55YhiZYmVaGa8HQqAzr9b6Y5kh1BZ14RBLNhm2g74NKw8Jz9wiRfKwDjYVLYJGScvVosupU74evWMo3JtyQkHYU5",
  "key18": "5U2g16BwK4TESH3kfcKNJEQM5BLGhEASw1WAeBSwfDCqkqpCfvoug3Q5fv8AQs47xg44E91RfCNZmmDeDdQ3kLJr",
  "key19": "32tth61tCnHGzKjM1zMHb79MAogX1BMBemsCBRGHeZapC51o6496dUJ2FNxr4Zwitis8oAMRu3wj8LFr8mTi5gE5",
  "key20": "66DFuh9wai3j45myryFrE9A7JkdV1gUY7aqMdFmCeen5mw2zqaWmy94ermpMEHJqAy9MCQHwAn8vbpifrK7ZzTdQ",
  "key21": "wKEWEWNdwb1f7Qv52PZ5Mpn3kGoLfEhenzDQde4CUw751sdnxt4UHKm5WDCszDgq33CKKjVQ9nWuiQ1suCkaQxb",
  "key22": "579X7uKGLsL1zKssJ93LKp3FcrUMYdChGHLjGbjAeRc3tBGodSYVWq7sckPLHrJdAA6bHS8rKYBazcf7mkyH1HZn",
  "key23": "eYagKR5K8DcGwf9XWkG6xeS39fd2LRa4apaGjsA8meamrWqYqF1ZT67q5YQQncoEg55vFJe3d2kbDWXXUK9wMgi",
  "key24": "2jrkHSJjztw4A2w9fEjutuZsUPVY6XHmwNRZu84hyr28X1XSSws392JRxtnafCST8LXQQfo9fLgvkVG4yEA3v8GT",
  "key25": "3cezYVVKSWE1eUSzJissTQMXNGiHNBfQ1XbFDEizGqUP9qkiEmcucv9qJHyq6kUSymsPrnkeLBFDbG3RYaztLkho",
  "key26": "a9t9ZGpofYRqCa6MuCVB2gDvnwPoXRH5EaLVVaqb7y6Mij9Z56dYrt1Zuc55n4yvSKtAaYzQssj4qDk9QfHpJxk",
  "key27": "2Hh9e4qg2YhcAY6u2rwTCxJYesMRWboKJrWAnA8EAWXPQRuWDE5vdEECV2dj15upariHY91MrEignfg6WErPmTJN"
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
