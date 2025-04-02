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
    "5XNPiH6aoAma9wn8WXtAuophyzwKoSuz997Gh8FsTGdosQDj5HwzYREnYNydbefNSJz6Y8HmjjJanU9gETGwQ26J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSw3JXSi7QmwaS2mTNkwZKx9VeiFoCsreNESbgLZE5GCXEdp5GmiAD4t3RJc8ms95fYvVY93eY5khMndw6a2jbX",
  "key1": "4QPLmX4CW24Ei8193KKXQc8KAvdzHjw2dofdRuCfFA9Z51KvwNHzXY6t993kzdiuu99RcBg1jkoqMMgL3sEiaeAC",
  "key2": "57D78n1VZwg8kgGVBJ2gAKWHmX4iSNetZUBdWsLyqU3VsWUdnu8XEWbDGV46CH4orKEGJ9u1i31qdkTxxZYixRFk",
  "key3": "2g2DQEMCSjsu7cj2kKzcpiWsbsZS4XRmnze9xp7yYrrMxyKLYsXFSr53K4G7ZqkBpgEYX9m7N7pF3oFfxmnzVM4M",
  "key4": "4wutd2FPbTeCHKUmCPgt4RS9p2edTEJ8NQZ493rCt6UDXnSST5UkVDyfqeuMoJVDJTnHzfhey1gQWSTBhmPjXqLA",
  "key5": "4gkLxasarrpFcXfvYyUzhktNw3YVzNq8WDH2zRcR8PC1RUcgddDtfnGbqKJQVcNkhtAgiHaWk2YVU96xoEtbeL31",
  "key6": "evFkp9WXLE8FFK9PVa8eSGzZP1hckYQ4CwugM9ir1Zu2oeZhkoPauZLHWh1H8ZYck6veoEJDiyBPuDRSa4paYoa",
  "key7": "3qGcZ7r9dLD8nK89bCR3zSw6E8wAjt66YEEr9pyLqaLxND4Rtu48B7v51NjiA3ywoKG83zCgo4kk7EzwmK5rgG4B",
  "key8": "3XshQ9nghz4sUxdPDnszDck4WuNUKrEWmcrgoJFHY72zPvg7HEekvksQAbwMY9cd1KtdKUS1dmVDJScUCVLRffGV",
  "key9": "j5U5zKQgq6npkjCVLAqNk2i6FzqpoAXRW6okY6BfBGb6kuFKsQJF6w23PfemXZ2FXJfvdWdroyPLa4dajQQZuff",
  "key10": "2H9wCg1brN2ebq85jsENMJ22TTurSNSEQ6jY4ZBLDosV6PCTWU217BFJL2E4HRfTJMmmnaXaxzr7L8ieAA4dSiDv",
  "key11": "yXoG5ySqCwqTnWuK2uuVNYdEGRN9CJ7ZdBeyLVgyYGekdsoBZm3hXywprmWY5qB57g4n8kxE7JPqZahujfhsXaB",
  "key12": "7LpbuYgvRyTyPkjeKHuqZh726uFfJ1ifVrn2NmmveVz8ZvhRKiiR67pQpZ2BBeSUAS2geYAyGUQGAWTET4tHx8L",
  "key13": "4rBEUiVWDcrdbEt9u7twRMUEuphNNW23nBgRk3mBHDVt5YGqCkTNEhpEVr6xTSPHMMBG4Jf5Fo5HnZ53C7Uz72iZ",
  "key14": "3VAcK9YcsHaawmAvbLjSWD5cBU7FyyWsYTcHXWPYDNYc9wzy2H6Babhse7ciYR5rExbsSaKDyLEFeU6ubaefrFUP",
  "key15": "4WceaWVdqLG7LV4n3Bgtug1gYC1rCxw1AYYqLLAgKZQGKL6rjLB7CMWWjtstqbdsZmGdcmqNuQ6sxf2QsQ8U4ypD",
  "key16": "437Xh8CTk4uRaQNWmz9d3tt48jrJv96Upjd9JLH3RkvkuZ9BRNVpj2Cjo2U7oocvTxHi12G4f6huURDbVFmaKhDL",
  "key17": "2oMjyez3c54oYYQrzFyvbEBMsACgeR3HyE2br2pCqqa7ndmVvQgxf4prRg1Y9cjiwfc9goxE8CjSD4BDE32S8PqA",
  "key18": "PrjZezuHKHfGbpN2iPdDMUcJZpkbugCG5MeZZpFd8EQoGNbs4nG1zysSuHD6XeP9NuTJLbvPvHgkVWVL931dhJD",
  "key19": "34ZLVipeNMpcTJHZC1hoQT42fsadw5315BcxqyQEz9dT4J9ERS1mtu1X85QRmbtJSjMKm3KBvvFSGB6pkxrcwcUs",
  "key20": "j9CjtFtopcdYtKcQLekiL7eLYYqeZL7r5ASmQdFZe4RHCiL3mw1Mn2c7Zf5ZQJYta3uXcNFNzy77ZZrTHQCCHn6",
  "key21": "2ct41vPSavEwtFsYxnY34YQGk63YXCeBEBpyVz2kXdMBZt6k1q7KuP9uCQbGpWwY19Mi9zwMZuF96y8h7xhD7663",
  "key22": "2Ep5eM95MCHvyTasAEqawzmpiKBcVAU71RmAeaSSNw3GoN8MDVtHWnrn6TTWyKb1xni2ooJCXvA8fL8vGXRSuW1i",
  "key23": "3fhUsqug7suqynjTpYXoJeeqL2PU9kUCwBkBC7KyrAT3HDBogJDJfJ9k98D987oVYjKihjzoQn2rCLNJEvhqqMk4",
  "key24": "qg9jefhbjbeBm7e8oSboXpt3WFuhkPkm64viBXR9NPhrZATAPTWhXa1gZm5JbuCjyGCxADRbj53A1dVfKgcuswY",
  "key25": "cZaGdAJWSk4PQqT1A3DiYfWCMveLqmXDmXXDqpcbN7A1VhkF2fqkWxT7qoki8CZcQgcm6AnuHQseP1igv8afLPt",
  "key26": "5EXkf1oV4bKGFQz6SVj4BLe8nVWYDBBT6JApwSHPKS4aoekfqUdvKPMsfZMscMrXd9FwHWj7rvscC54av5vbbz5p",
  "key27": "2c3r6y8QZ9fGcio4MV2G8QmNsbT5vaNQJfdTZatcecGUyaSLRuc2B5bKBKkK5Fw5iHviTFaPENEsoyNDgHKpB57y"
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
