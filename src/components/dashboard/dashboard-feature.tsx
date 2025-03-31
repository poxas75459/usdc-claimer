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
    "4pvtMspDysAzKuK1oWVaczgxHJqCes8divM7JS8JbQmPA5U1ZnGn5VtBsroBZTs3ZvzWz5Q2cCtrQqxoynkxHyPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZiSJZv11H7ocNNzt9Cz28t5QXtwBMXyjqp4jGSQ47W4CKmkPQyRGscCiVBvyjfneJwqmZmSc8QYSSv4KSC8ei8",
  "key1": "5z1MUKZX44686fAMHWusJ7rsZeLxiCiXzKH24aU6f8XKdv1M1X5SXpYfuCFz1LnxnXHmF4SbVTEjPEjFXT9Qi9mF",
  "key2": "31NDAopuc2FZtmG7CDykBPx1ECB2393rqc47iGUu7iRZ4BpTEzENMumUiXbYfBTp71p2kWGiPAuc6ogiN1xHQDtC",
  "key3": "2zWUrm5HrfKeaVCVqoiSEVyfo4UbwLEw3AyeBcex8PmNb9EvMbmo6Xw1jPKXeuC6usA6QeEtNhJi2WH1pkXPVbg9",
  "key4": "3awUjtcNbCS2nv2EN64zB8uitq8BJgbSXuFkjQLhkdHjhPbyG646R6V11zmab67SrQ42LGnG23QFkC2X82WBfPNr",
  "key5": "4WoKD9GFPXGEcoGZW51oAFbY6FtWMQPZgUT5uVHv1jApyq7rs1SU6ceXkaYhJADeHxMbHoUnNKrTupAS9brozZ6d",
  "key6": "X6DG2SvNk3c2HCjPWhhVaxk5jDpcF7rTygEGj5Sz5nMy4YGHXy6q9SJenecZ9P7a77rha46mrt8oFxArYtmgXuU",
  "key7": "3fTevQ9JGntRY4aaEgLhFu2fwj4CbM9hZBzg9f5cX7JDpfpa4GcrHdZoTVUtZYWtutH7T5qJuZHqXmwTb1d3PmLq",
  "key8": "RZEDx2zoUdZTLYYmTLBtgHb9rTWjzvbLtYiz5iPymxpLAVg1tT9PqE3HUUcdtpZwuUuGSjkCj5spHZAx7WPcR7T",
  "key9": "syYEvtm7ntvnXkGHgVCAigpwh3ZznMzy2D1uEBFJg8z8a7Woxjhwceaiifh5Yvbv3jro34K8joASzUYw8EgeYiC",
  "key10": "2eCWFtdjfzPjp2NaoL8bgGWrYBtfzMd5bii5vkT2WxeoYURsKKCjeuRA1GYDNKqXyGXyNqeyXPZiGgdgw7EdLwKT",
  "key11": "4eRKWbnZ7fSP5Qmpd73kwWiBrXLM14gaV7CYyYTKf9MrXgom5X3EFUFLXUrtQtCdn1iEsb9ouLsvnbruYirqbGNC",
  "key12": "4EdP7W2Txo9Zh4a95hJ2HT8ifqFc8qB2s4zPpTcPQe3ecnzM19wudc3ctbyzpm1Eh3Yt64QM9iioN6RdgjXDErF1",
  "key13": "678JV9LwT2e6SmazhBiGUkV8nSoKJ3qP4yLwqkJAReJ5UXxKHQzvtRjJQVPwsenk4yQ9wjtfQh4Tvi8qC7NZ4zSW",
  "key14": "4MXntQ5wnUSrHA3TyUFPyJ8VCabr3noUFouhKnTFNiZRPEPWetoamrTfez18eduarDzsAxpcaFvyL1EmJJdeLfvq",
  "key15": "3MQCPVDEHbCC9pqDWvA7ETri2z6fkKyy6ottfshnFZHpoquTn5UbW2vT9yU7KrjDpVWF3MKP2smz8nFtnuipQaoF",
  "key16": "4sXhj9jgNMz19pAW59MsZT5B3GcJWNFDJhuX2aX4EczDz3hwwjVKCR1QCL55JEgMDGsbADWXVtgDMhfRZmKN8Sy9",
  "key17": "4rcCGW14GBa3vE99uZEPUDgK68gUhJy3mvjxGdibH65Udazx4DkRtGb5meYQwTDDYYxF8DhiKVgeta3iD7NR7Vvo",
  "key18": "2xQgSFdj3SvAfXSpZcPC4jGryDgoUHAkFfDy63ZiRjwuHpfgGivXQkqRnZPYCpP9WMS5gYzpzYDWRPLivR9T6WB4",
  "key19": "4rgfuj9Dqo4uGRqqtfr1oWQQmNgMVYdAD3yfshEQandj3ekwbLryL5KXh1iwZxNu3nvA3KUeKv25Vry6LJJdq8Wm",
  "key20": "REmEQVRye9evzWr27nAuYw462qvukRwjqh5vd4mJgKiW2ErmEiBtupiV6Mf4JT5g61tNS8pL3NDJAUVBdNDrQNX",
  "key21": "67bgNtYV1JLVVBBdrRy2LzAjNUT1SnJPTvWSGMR4EsoRveEJBt54viixbA12WdM5o9wH2twiTc5GCc3CT3QaGedz",
  "key22": "3Mb57AS7q69Zsh1Paqya4U2hnSB8dFq7L82AvxDNat9AmotDc1BSLo4mrBBhVsJfyCGUFvAH37uw33CnGMSX5DNN",
  "key23": "4cNno734BayifYkuAY8jwSw7aeVFZk3tjT85FfytGGCb1kSrHGqiUaGnFSbbHAn5x98oMjjxZAiWKqfort3zhWtS",
  "key24": "o8pNhe7a286wHCJ76261AqzVLn8RBTVNMxyR66dck253DBefBpN1TBBmYS61fU8dyTEZFzzFSBdHzH5FYBQjM9J",
  "key25": "3gNByZgYqkhiefvR9Dfv5s76eQS9TqZ2V7vm7EWz1YbunY6dgeTdr5fQiQKZ16TmZVp8xaZCCGH9DwNR54xunLhM",
  "key26": "5qT79tzz5FQ7HaM8LuLVpc2EeNey4nV495UxijDwT3S2Ge6p7vo8GNbn7KkBo7aEbGXXBSTBwViPca2PbqR1jodi",
  "key27": "291XUX6Cr4WR8vRwxEFPjZy8p4BfhwwTBBByatUDMj9QYhNfXPoRKaM5W4wPpyATUWcrdDW8EhTcGmN6GtQeocpH",
  "key28": "2iFcygYLrg8n7hCDEsz4QLEre6DMenMWasqHNkFL8kcdGbmgm8nQhPuEACmTXdAWDSP6JRH8V7nvA9iK2s13Aw9b",
  "key29": "nByRb6rW2iWJAeFEpHMqNrcWR1y961i15QhTDoYoWzjKPY7QGoYVN1gZrVxp1xJetKfcKuYXfJHVUe3gUpdCUAx",
  "key30": "28HZSh9Xhw2LKPDeRGUhPLbBajPy1BReNnouAXvhoVHqXQGjfNuzaSAdfQLNLo7LXsmM4P3NP9zimyEQuDNzhvYw",
  "key31": "28GDwzwfaWvYpmjqRxGYaCuXBobgxT6k9GYHRToAcSoyWybT9zXesaTU87RPqYuR3Z8nqNR3JpjikW2XcmUdLcwR",
  "key32": "3y3vop2MddFT1dpUBQZXvnG8uHEZE8xm4LPcfjZz54Kmw1keUamknu8i4zw98mhtzvv3bkkEpGK9bd5XpBoLcaie",
  "key33": "35v5x5xPQNqd8HUKPsL3UtGc6URp86dVAWpK8J2DVRviJFEK8ziJTh1cMfL3x2JDdnpPzioDJFwarcXVsGyubw2e",
  "key34": "21qmWxgX2o8xs9wE9r83ivPE6bVCjdh1VGEw5fNiK8nemBMDnpGjTDoy9MFg5Xa2JFrnBH1E3HrU8T1qM6CuJ9cs",
  "key35": "2ZpCppKt2oqvpXMS6gX1nUXJ2BPYozLV3TQF3ru6wDwsFhD2kEhVe1LWyt1fqp8mPFE1ndsBfVVfGh3jfreqjB7Q",
  "key36": "4EdsnbEXsedqH22cc7QUZVABC76iB1d12Xox79DEB8ch3hFsg6kTWYcwQrMbMCeWYRSzqErvR24gXnDK2qdwdHJ9",
  "key37": "3uNK2GzF4wMtPaVcbDzYXVdEjKQPs79CcXAA5rqeaH2dj7Jdt24wiaDw8NGxKewq79k5oPQAX9PvfPfANZoaPHZ1",
  "key38": "3C5feoBZfSVCSHJFd4QzfK8kKG36tomp68Vc3RJ9WWC4LKpbvMCSRnGCfA2hk3yDJjxiXCYZ5qZeWdPUDZWxbPeq",
  "key39": "4rs5oRDLgU92mbjKzZCtHfCeP3F4vq3A4yrggFLHfYHS6KvMUBSALjuzjdna5kPeV2CN29MR1H6TphyLBJMXCijr",
  "key40": "2XEKsRi5HZMSHa5mtL4jPYJ61VU4xo6SfRyDLgEdnT3VBYLubSfeKMMzLbC84K648Embdnr13Wjbj6gBqPdWmHMm",
  "key41": "2QSKv5oZyHiNcEDi5KBSyKMCZkCiCnQcc33jhBKXdhyna6xoFsTsRzvwBUEVp6s4o4eWGswerYRrpuofHGV8GKkp"
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
