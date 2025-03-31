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
    "2iJUiY61YKqCQdkmkC9UNhVXBPq5hhX4mmqb1nNdmpooJg1JK3kVTqTkbF5XV2fdJCduSghGvyLLf4sQvnQq3YcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r89r4WcaoXQAQQ4cJQeezYS5xWSyS5vgfbyFpbB88Vn7WRtsp5UDJaPfGo5nU3kmWrX4jfbTJmjZAnJ5sGrm7eu",
  "key1": "8Kvj71NBfGPYCdj6UMWcat5XLPeG5jqgg539QMWbd5beR4T6M8xRF3HL4bfXeP7mLzWJZgwB3mqAHyZYKVVZ5Ui",
  "key2": "2QWLz8PWeMiZfyN9wdPnr8MFHig8PFjLnukpm6BC1MPZsaTLvQ1Be2Rp7xm3rvnYTz7bADUbFSCRJH9SBKB7hCXi",
  "key3": "4646pKmmv67thMvrknin5RisjBQzQLHCxxAjHyqzSRoazXAmbqz6R4fnbKLEwVq8HVBNMP62fW1QgxW32nnDUons",
  "key4": "psNBiJuwo1P23LFakepoGCN87vcGRNV1c6nTpsc1CNReifQ8x1E1spEGgerKQJ81DAtUjurqueNY3fj7S8QHkfm",
  "key5": "4mkczm2ptHT6PkhUfsYnhLqvWjcWLAWsJUHiBSozMtjaDpWQhar7CMmtMsiLNHUp3PbxoNoQRGdbiHtmVzKjPLv4",
  "key6": "4bvKEGaKES23CYCieszr52br8jYBZhpNvpz2q1n1vBhWVNBNLmpjBhfTZQZHhDtApY78J3vEoCwFWdARhPuhm9ms",
  "key7": "3Uu8JKLfrcvyxtCKGhuQKXmuJDzmkpkvPToZ7qhEYRrYkYXLxkPAQdGaKu67m5SKqHEA3wJW15inQT7exzc6GSSa",
  "key8": "bpgyEPW6U21tLoMqJDNi4rQs8vZWNd3SSzLRq1VQnBfP7Pbp6SVRV1aomADpFGgVJsCeUGsM4S1wUw7LJ4WXSZb",
  "key9": "26u3zDPoMucWdLaWDMcyywuxYL92mvNwzEuSryFbHLu2AY281RiTTTwug8MNy9BFmWA4tKmyY2m7R56hd8tzi5fk",
  "key10": "5sEDPs5xpbgHpqdHxKxVeN2SdVoeMJfVfFUNgzm5J9tGAcYLSzGBC7ygYUmqUbx46C8tkymchgguPRfUAmC8Lik",
  "key11": "317EHwFRJuS5o3Ed7BDEr5ErcmBey5RA9dg6bksLJWPuQYNPhpDny1ubNA57bMfa4AMCm4HEL6j2Lhwg4ZqXdJzb",
  "key12": "5GRbENy4e6aTDj1aRfXp8YGoKL4AbBq72jsUDicmAJzNed9j9bSJqkDoEvBe9GCgHD5RQKbRL8AiArY1BEZEWwYm",
  "key13": "9bGqWFN2Squ5hQsRZcxTwUFpHpBvPRwr9pSkVZuM27CdbCUQQ6AD3EiyocWhKD6ZX69rkLseskJKZa2aHdarpZX",
  "key14": "5KtGWXYjUux8Zn7Ak3EQuWtXsPNFDtWBQjKpb8BnipJhVYpdFJLj8qy3eSh5uc6eynYaUKRyZ58nTBWyRiFeqg6i",
  "key15": "QmTfm393bfB35HKrPszUUogKVHQ78creGYyJBcLProHcoUiAdnikZzwMxENBuLtb4QVyLTfs5us543W2FnfmMru",
  "key16": "5Z1BAExCUved2ZZjoXxaB7obDSwc3QzTyW9CAkkK5478PxFLtKUhd7L4NM5S2yfgGKr5TBj3FLsiVz6xxtSt7Ejc",
  "key17": "53Gnubaqd78REVENskJXaeZo81m1X4Com5oD8sXhPC4ovKHGvaEit8bwFMexWFRtvchKqohCZeoWVBzEYUEHiNjr",
  "key18": "3fszvVH6WNmoQzNyyDNWywF2YnwaHBGnRyCEaDecMwgQCnHQmLeHc2syiGsBvnwqBwKBrtgF941khXZe4AAPtvRL",
  "key19": "3kpad99HWA2dyjBQr8M14LYmYo9pSSiMX5LLccCxEDHew6yuEqvB9PWEKj6584EuKtmfXPfUjY4fMYiNwwutm9GP",
  "key20": "4rPov9V8sUU2EtpdYZwM1fgTC9UDVszGPkPnPDzJLcjVy1ssvbua1irsX8kg8TTwMQZiJvagMphFkUghiU8ENRcg",
  "key21": "29baXYNgmWsSHEmCYhujAKwDBrhfu8ouJZaMaZdey1TMCQ7JEPBg2kmBWZF8MAKsqYKky2RCV22yZkw9CTyymyLC",
  "key22": "5ktaWPqGQJizrQUahRYM1RZvNb6wCxuviJhThWdP9uUhjYctirMR7XqAoesCBUDFcSxbwDFKLZhQCYxyE7FYd6Jn",
  "key23": "21kP1FEWakQHh8hJJsGRMrHyrhYa66PDHFTgUtLhWCN9mbMJTi7XWTJTVTa9aRWcKae5wENwsZu4Pf4n89QQDXoL",
  "key24": "458uWQD21aW2odNt42496xAroYoLd2ynVTyCjadPJaF4o5Fvm9exeaHfh7gRNH29xPCqkX61XtXnLUK8ttynx8kp",
  "key25": "2j3hJK6ZWDq6mV69rZPG8eVxW14oZWNP5MnqhRUvovU19rDvSoTRSvgDV9z4zfp3oJn1CiC79e7VzWrBxURaQFyH",
  "key26": "5pNcx4cyQ5zD3gs2XyULdHLBgRgcuoQjycDxT17eYTGUXLNMGRnbrMm3FQ2h3Fr5PTpsXDVPoZ4pVWUW4aU6ib7G",
  "key27": "77D87ZaXpVHkYVuanVYJwACqNpN4Hadkd3w7oMPoYPbgJjAZArtHmZZSMxNXRz8GxT1PWAidmZ58Ceqe2PAeF8m",
  "key28": "dVNg1zS3XsfGAyX1xGU2ougdybdyBaewaLgsp7ijRztrA2t9SpebCTEPosgjaLPaxjwnHGVj58ZzUz9A4qrwS7H",
  "key29": "2qRpGxN6A9C3PrqTT7YjA383EktdnBw3eFCYQNFhzZbS3Y64DrA7pkoB3c355rPx9gAJK5hVteN4ecHss2zF7jVb",
  "key30": "4mJ35uCHv3fnyYd8w9HJaDCow7mE9pyneEEVqtiBFFRdhm7SeM7NXiJELjaqKMyGGmfCkzLQjsJT5fjVF5KLeb6H",
  "key31": "3P4S9DUvMbjZsYqSWGXxvpafseoexBnCW1QYGFBo68reqoRmMF8RJSxQ6yLLTr1cnn4rd9QRuByHEiipv8pP1tTg",
  "key32": "55rBxZJ82opifnJNAUd5oTpX2ZrQJTRbRTC68oyTCx4iCxyBTPm2KLFH8BnZ9T4x7qeh6VpGkiMEYprN9d65xSVp",
  "key33": "5UEAXSHkC7yw81gNUjWNMDXef34NWupnnZimvGLhZT17foeoTxzD3EVYChD5QZgzRPubcDM3yPEgQPk3MYAPkW4H",
  "key34": "2or3gx7sXMJq21VT5xAMzdZfKrJm5dmtUDJSgb9tuyU2gnS35F1MJQPmfHGDgsC69wLq9AG6z1FCjcbzZzfNQ5se",
  "key35": "4s7nz7mZkUERP9WBAhmD1tPuB6sbBqz8jZfE1b6r6x6BvdsjLnGUvJEKE8Cb1y1stsMEL8r63Qvd6ecS6xQsqT4u",
  "key36": "4ANitD2dBvYHK89PjPtm6Yp4Dj6QEAE2bQeoRYsh2BuGwpLhicJGQQcPAGyNPeWNYMJR462va7FbEJyDmTBPi9yV"
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
