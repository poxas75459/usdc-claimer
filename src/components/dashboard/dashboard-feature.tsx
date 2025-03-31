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
    "5RHm2wak8dcuHigpbWqa7msPwdwhLF55JRwaCQMSmn8dpXVZ2aMTUQYXJoQPxuEjJVHcyPTsd5ssseuLLRbPMavX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMqeXSHMVqc2uRtUPvd9bY2VZ7aqgyRHBZFYjdj4jU1WZ6Zo95r2tvfwnwuGgNHsek4LGPMKEsj1SKap4ykDjH9",
  "key1": "4WoFXJ54JumyHVmRfxcJqrUvfEHPXMVLMS51rEJKF2145hZbphx15hC96bsE2fsEMEpt7a2FWqmggUrzNZxTpEoe",
  "key2": "3tCVhFbf3Xti1YCeopG2d3RbVfzZEwDA13AuE7wQNZj1fwknTDmCKXhADkjJ9ciD3crMiBrFcTbLYaUe9C8heLHN",
  "key3": "22fAdWbPQn3CSQsDJQwhmiJUqwu9uMM2Q7tBDkRXsJE2TreTxfJe7HMzK2cTFmiMvHpVDdDos8Bjg399GFtN2WiW",
  "key4": "2UjuZeKzeuUus86pctcXnpKjq1TkCNmW88xvdVpdfTxBvoRSA5K2mLNV6FVMZZjVCg8DDBGJ3nRi1EwamEVCJKrJ",
  "key5": "3kCTg2Fw4EX4c6SFjon3BnPL6NzR6cUQbjGHqZQDDyoEx9gY5AqVQB64kqVPLnTxXAwRBpzbV8fVT1ZBUjkEECp5",
  "key6": "5dy6kQemvkPNgvQwmmVtG8TsXuuKt2cwXHm2mgJ7TR9tGivftXqindRuJporWYcRqsA9MCKV12caDUaYKL1pCzsS",
  "key7": "ba3cUKjhU897z8UqnjqdYsE6b4wtdiUNiQdsS1oLUnhnkj36uW9hQSZz8AjctqLziBzS5zdGM2eQHd3qSHXysz9",
  "key8": "4KXumKwVoQqSu7UoEcujvsYqYrJzsxboUVqFQzfwgoE7DRJNcnpycc8oT1aNFCGEjKoP63hM1jXZCwFZ9A6SRLyX",
  "key9": "bA92TEjnNNcsjs5Sfr1oGiMdSxW7oCtP9pdoJBYxeFukD64pBPgvWqjkF79ERzXiVevmzyKviwSo7vZthyzuFBp",
  "key10": "23xnJritx4WQs5dMTWUYHKBg61xMDa4CLcbVokedTbPHytKVQauC79gunNhCUZ4MLg2bX4nabj7UjP23DToaGmBk",
  "key11": "XDAECLf4EhfyXQmSCSVVtH6bHCuhPLiejc2kHKdCHpZbRpYgV9T427EomKG8GBkVDowvXrV9TEbM97541R5pQow",
  "key12": "65pK94PzPA1FCrw5Ah8JEq35zmfXuruKU2atxXqySUwFUCEEZdjRaacQFPxZkfbHrYBoxXGAfskwF4Qu4kDy7vfR",
  "key13": "46tt1PTdaNXBMWd3jyDEJ79PA1E3SZiQEfFHMWtf4Arqx3FPcQzS5ztYLHvN5dFwsRn27B25VXP9fVt7qLym2yiM",
  "key14": "5FSnsGM9qoqao96GcDZMQvrZVxZUq98hXRXK9E42ahbBR8u7hroLNCCnjHHydt6SsEfDubnkqonj4ofFfKcRgp53",
  "key15": "3edQkdzVA6Gwbxn3DDiiu2zEuQouT199v317Rsmmc9vPDdWMbhHaQf9E5uCuM48kBFxEuc47ry6jt3jaD9pVockd",
  "key16": "zLTZRS1aJL346AGXoSYfUBVmEc9WAYqSZtshSQxdcENdDB35LVNbeTqg2hZUEoqFX1UyG4b35fWW2kGQDd9dPxn",
  "key17": "4RxLP91FE7AgPmuAyMmjxZZFAc8tpNk8iHMZJtZeiJgTLNECaRwUhwVtCPDFwAxbQhRg44zKk3RyviZMyMbA47YB",
  "key18": "4hwbtYhcdtxQycKtfhbRU4qaFeyhy7ULN11bFemPEh5GPpCtoTkA8BdpEedjywWtJNvoCXi7X42JyhVLRp1YXnC3",
  "key19": "KARSVRcYUv5vc8o4kg5wsbNsxGARNvaw89buZTSkFcz74RVKD76RSrxuTH2m2AUF59d2HmUSVwDsfz5oNmBTYGw",
  "key20": "rEwK8nU8PYvf5H7YMEyxHcDLm48hJGMTcQCXQLz14Pc65es89oiooeYJof3ETX49Qg7v8deQDr1FjhbY2GtisPv",
  "key21": "4eUD7mse4Go5urE29qREVvJvfkdKpVwacbEmgo8xRukY5Ag7YqBKLoXNnGDVj46P1XfLyKdtYtipMSFJTrCSSk3h",
  "key22": "3pi57PNeYwQq29C2TTr62qB5prnE1iGW7UEVr4AHwbSXMzKG8hEhzvqUKjEahUUuDUJeV8nzPgbMYrepuVxX2Bda",
  "key23": "59dKQXCkR1dp6BxaAPwhPSj9fyELj1mEA7cgaYCmVJNkMTPprZ2dyiehT8jZFD3qv7BKVyiVee1JEKKzhGYiiRqv",
  "key24": "66i3mZQEt1V5cgGd3Z95QoECAY54S9vrJJfyKKDBpXu3yYFqrqJGeKFandr7Yu84t19HeowGNeb3kFFwYgmN5MEh",
  "key25": "1u3oBhpWzXZ6xnXfqH4v75uuMud1NynFU7iYc4TXgXThupqvFhwHyitP5cH8qceuhk82CorE6KPr3S4KkAvMFCN",
  "key26": "z6P9gXYacLaGBRwM8BHByRQX3pU6wuHvptrmdVBbS64s5wppXBrJHZpadd3uqNJPXZhV3PnZSobfcoBX68e3iTE",
  "key27": "2hF6S9aVm8qG2HG8SYjKFGKNXsH4zQG6cUPCYQYQGdpHSxB6pvz9kBAX4LXYoFU2XpQRPU7PJR9rGAR5KrPb4oBp",
  "key28": "5VzutmQYh5rWVgR4hh69JP9uMiuRfGo6SDrtgmMgrVXqDv4BmAicaEUGG2RddiH9c1ZevkcwiFHV1F29GtbwFkrU",
  "key29": "K5Y6RFxrdoLd6LJ1neTSQEXodDjXPDBFpjLLjjRRNZNyUFmrAxZJBhBqCiXVMahu9zEzRWuHWNtiYvvArYXpeq4",
  "key30": "JN8AVSdCGm72Z1nKJNfZABUkcq8Ey4GzvkutbCNYndAvmUzT2GUi6uDnvatJvpvQNM4JSuGeAuD7ZHrDNfkFxPu",
  "key31": "2PRZVNrbvLy6xJ1FLhCJCggXVGqNUnw2c1vpo5DLq1Cx9tiVwUPT5NnqXVifXZM2hikyrdozDeHn61jSNesWhaig",
  "key32": "54zPw6kbMktd5AKL5R8ZaxWc4s1h6o3iL3ZGMLnQRfB5sMQW2WN1YeQszLfW8XEuJduiQxBCDWJNCDCSjaVqRQW2",
  "key33": "3K5QCkdc9PXUMwTfbMoxn1kDHErZCSKPQDhtLDTF9isibN23H19y7dqE3cu1BPBCvy7vnrkqMQk6Ljw3hhwsPAcG",
  "key34": "3d87fT7AA8McFjqr1wzxCKGVwQnu5ErBR6MxNsmaVairLaSMwr58MvDqTvFMDrhDB9VA6LEXAc9UeJ8iMiwNqBJq",
  "key35": "WSh769rCjG7yecQkAVpBeoP2K4sXkg1HeXiZo2FqnvnBaJKbC87uqD3Qj8tJxAGGgoyhde1FcF1DPbRJXxZj8v8",
  "key36": "3mG9LxysPWPzKFsEbb2v8irDpXPsPqNQFrZffSs5cgcBZzhDiLoun1edBmcL5ogbbKQLqd9X1h9ftJX99zt7jYJD"
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
