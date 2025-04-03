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
    "5qhpMjPENDjGYmmrZCweHa9SoTiA4GMZNRrd5XdjwoDhSUwEQFxBxxe253wXBsPmH2qoU3WFLAScLiw65DNHKxE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45EAB17332znkZVYTivB88QQEVATL3GYkpgCMXZKeRhyFJP4fzkj6w864PXNLk4ozbRng5H7MV4bqxuKepsmANso",
  "key1": "2WmNog3gUmK9udpm2pWcqTbuQ9k1eDKskshBd8bZp1jnvuWMhxhQ27abBdb39KHgA4odWbE6REGf5xhyK2w9a8GM",
  "key2": "3qtPoiFN4JCgh3LSKkJtro3GRX7SY2ywQRZTMy23DVmPnMRgkNQPg7jgBVD1Zz8s5L6tVpkBfze6uuPehnMhe9hc",
  "key3": "1s5PDCHJVcxdzAwrFu1ahMWXzAfmEHsXjbzhtJmAaNAYdY5oKiHMv744xnfqt2DPXBvYnZeW4zupNmo2ctK4XEV",
  "key4": "3XngxxbuYmwdGnce73jtQvf3qZzm8pLN3BrzYFjZvgTqmUZn8enna57MLdSLX6EKNLeX6gJQq33RBaXs41V3GVTX",
  "key5": "3VoVtYdZwW6pn4THaMFt61CRof6EeFJLihVRx9owycK23gHBhRnsGXpkBL3nK9156KkeDQe8JSgycxX74vmMT9gj",
  "key6": "3ARiqXCsb95ngqB9Eu28bfKSPt1s8c6CDw7EADpjWGEr2T2tKf9UG5pkbKWSjHDQti5sRPyNpRMQTSnbHUXxZSdg",
  "key7": "3tFn6Yc6VpnDEPGVkTNGPeF5n9SkQQ2ZdGzh8wB2uujuMKTYfHMEf1LW4TgBGtxcyagEAzXW4B2ptsmoEB7kfC27",
  "key8": "3pCXGNejtBHKzpsV6wQu6MA7xN6q2EhjadrFt9kpFLpjogxh3JVp7tJDdHUMJnvCVUFgBTzMZU5ZrVmT52EBAYQJ",
  "key9": "Ua64vK1ArSQ6DcruxZsn9zWBtWj6iSnz2YfWrNKrvDbd3NUsyUwZLGyAtgTgNZq5MrSrYvHEKexTM6yzShXGGkh",
  "key10": "5E7V2dv4sfdS7QRAGW1gW5LhvJPHiV8Sujp6bXqjyhv87XhML3Mw2iv3uXU33sjGjmKXCcZCmCWTGKK4AK4PtNPf",
  "key11": "5o4GAX2A4PxtGWJjg93VuXzaPawfVqDkHLudZZmGpjtyBuDpLGhM6ycsiJMAVKBQcg53YoArqRVQHB89AwPdq6fK",
  "key12": "35ep1ptjxjZvXkrNAFRCSbr6EY4yANkWqWUNb7wogVYjdUTo95QfRBLRGr8Y2stXRmYH1MerazeYJkk7wEcVhRVm",
  "key13": "3ZidiXouA4YV4nfY6jbY5rtH5VHQdRdoVmLi1VD58PcXzes4Qsxytov4uZr6AW9iifPMV6HpQiRJT9FJBuCLHPMn",
  "key14": "3LPHiHCaZYPuvNaLKk6srKBLTwbUWW2V6TCCvboPq1Qjv61G4UnpVgrtTKrs2A1GdsDPmY5oowo8234hC4MQpEdR",
  "key15": "29VPsFFcUD49Sw5h8sY8RAAQLzdKfJ53hjtpcnADKfzwpBNiJKPtQNRdGB8BsCMWt5pAYLb9Lgtx9D9AsDUGozd7",
  "key16": "2rfpCyjyixFcgV9PSm8GB21FKSH6S63qfvK2fVLtNgVCvfRo7N6N8zgq4KYQH1X9untYm5BupPUcubeVpnxFV2S4",
  "key17": "2EuMGXct7Vf4utfiBVXCVCLrffnAaj6X3BkeURd9MFVL4YfM9ZAXDGy5NjfpVHgtKjAk3kuTgT2J6MaRFanUevLt",
  "key18": "YXhURcSwEzi8eygk2238joXHD9B1bkxDB6dBjr3VdfbGiEUxdBbxc5WumSMSKyGzvJEoTXC2xQVoQJzoe3TjbZz",
  "key19": "4rXPeAkT2zMuGGJ8FXzT23nAGCrhG9KmAKk5CMuQvEb4TZt5JUAqYj83u2EaKac5Vd8SG9MACCFrmKgm7mK1pe2L",
  "key20": "4KmGcS6CAbmcMVWbvMYMKSX5ngXsau93aXPhCf6XfQzQkaAJCTxMmsvsqaZpdwPVBBp5Sjqt2Rvq3ncurNDPFzos",
  "key21": "2qGNbANQX63V73cvyQ1cvHijjx4GVxheLpLQbyMsXkfteWZ8M53rzBYrvmZpru4CqKuinvLVmJJBBQ7JB9NJV5AP",
  "key22": "5LawYwnVhfWetANNtCJnYbDfQvvUNCw8gzoRuKQg8qAofmSpRosRq5w35dkVMKqoC3E14z5TMuHdg7VpVrqMmceF",
  "key23": "o91mXyk6QPRWHhmwZhGbygXbFzMXa6aNeP4Kf7WcGoEjRgwDnXKC6ihjvKBmSGVUv3EZPVAfUgKfC5XDBuQ2ioR",
  "key24": "2UCQJ9Y4EQJfUvN1rjAAcEVk1Ci7Qg2LVeszfQSKbt4ZahqcAsM26fZSd6BYvf2siVY7mWvAGjqVT1YGmccwoJAK",
  "key25": "wdmTwQv84qa4juSqsQY1UF1tdsR22JpfHRGjWL6GAQp1avv8h93LmV7t6ssHJLZUWXTro6cbuXt6Gzuuz95x6Wb",
  "key26": "4KSBoWP6saCGY6tN49WGTepGg9mnpCtELy8xtiSYcsrWb4fjqCyd85dR6H3qDK1XYLrcKvv1uUxAf6kPh8LhjNbS",
  "key27": "2gCFC1j7z2u7BoE5E1bqDB5Vsey9tp2Z54e3ZziBwmqeatcEeA2rXqovD76Ci3BsQ4Ysez53MQMuASjLzTMq6dMZ",
  "key28": "4K1BXQERfv8AEkWDKhku7czLxqsLwRcUnUYf4yX86E8jjXKgbDcBjUxHR56B5vKREvgpEUGFdm5rW9R2Z53npmPc"
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
