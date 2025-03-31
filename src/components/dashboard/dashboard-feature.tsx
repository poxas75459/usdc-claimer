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
    "3NcSAXe3YGXpsAYsYNkzwuMSySxcr9BjHc5ZKu4NTwg9Q6hZ7FfFqiMZJrwmLSCxyQMgzgcyaNg6CezZ7MrgR5P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6q8iEfmNv4xSvDArmG8FGzQsfoEgZW1qjPv7577bRytECeLeUgsarcmzwZvJBWjjf7Ui2TV8j9LKVPMkjCz16o",
  "key1": "3HhhR2LvAbZrPaRJxmsP8cbsCpRDgYdcGyLngEMDhS5HHd53iarA6mK8dggor55CbZHZXCju52PZSWUPCK3hKoFA",
  "key2": "qAsmgKURb3T8ECVHNwozpap1tj2YFR6AMeuLm8S2S7WfUCyCTcdvd6iy4zjVSGzBZ1maFhHVx7QBC98vJjpFA29",
  "key3": "RFw3G6pVVJTMiNz4YaaU4JTTAmwqDnfe32gPU6BvkWiqaUtMxewL2eqbA89e8HNKekoQRsjTxv4RPxdtNVcKXis",
  "key4": "57ReE2aLy3z9EmG8B5BNnHaBwcnh9LbLTNyGnmCb7WT85MCjeahyGxNgpBYmCVPKsWK71NUvYqSNWwPvkzVQWStw",
  "key5": "5SUcLspZzwsNeGz56mcL3DXtbXAbfBD5NwazJ6yvnUPbjoBEKPkt9rshSzrUjBpZVEijDzfLr8SyXaK4RuF6AFbk",
  "key6": "5e4nEQ7gkCyPqDMJpim2yJfeCaBmsn7pMgXtQuYqQvhUVVPs5dGYXEtGNXMz6S2BMa7HK6toXB7RELV7GqHTT6KP",
  "key7": "2vHtKMTX516xxjb5EMkPCcvEBDmKw2CCsAq7b2pyjmbZ4zB2NpsCpmbW4XKzjhbRr4rq5os6rNJ1exeWBiiBvmRt",
  "key8": "2UUqmTmRAWuFt3MrqAerGNCmHHuLrFsKE8aduWGbG9kLhwjpnbghZsS6GTnpki36x7SskWRpbr3xz1K4nRFRsxoS",
  "key9": "YECouJ2CPkkfUZdvoBwYnRj2GXoHH5aGYvwVXQNPPAv5c5b73tPj7b2jgchywogkSrYwk6ezqJGSWy7ZQ28UXj9",
  "key10": "3qKLgU3tUrnWjSzGWwNQ38ecxEwxkL6rn9H3apYZSepbuNiup1T7U4W6ko3G5Q2SskqSYiDWzXnL84M37AcnGCFu",
  "key11": "4AMACjFEihegtDVsuCc3N55HqtFP9kFWqf9cPPMrF2Nfu78wd8CXQSgAVbndFFVPqaRA9483eudqyPjfBWUyHjmx",
  "key12": "pCHZtvpwjw4ggPRQ8GRsK4Br2UyoTP1tpcEY29cz5EhU3LcWSaNcQ8A1BqCDHqgCRydRzcfb74PDWcR2PmC2bCp",
  "key13": "2UBKCKFNfnT21FzVvYUzh42M4fG3x7E3ocnqL7HFgRWesdNRESwKrP56e15bD8xQXe3M2wLT6KfKuAfNVaTK8N3C",
  "key14": "3SnEpHJTHkPR523S8mTXuh3YecCvtD44mWn86bPUKrz8ubK2XkQzkMoZqGPta8g1XbuBdKa2Uff7bYoyYx6777Kp",
  "key15": "2p2Wxis6KcJYHMQLaJRoEtFuL2FnQsyyR1HT8ATBJ7p9xcb6MoJpy7Vt7QSAaKw6sy5hnUwxnhQZFA8GtXQ1JVDC",
  "key16": "4mAk2Dr6ATNpkwn5djHG8JPoPe4nYbVAXHVDUEah6hR9TUuRJHLMi1Tw7LutxqZYmZmAN3TBYodSF9kN8Uy21kZD",
  "key17": "5mHYf3ssuL2jBRhoDEfymnaMbWVczaZ1u5gxRTYPbN9nVbzq1LGP4jVLycaesijjn3Nro6SD13DwF54hR3HKFCmB",
  "key18": "5WSmzhwqAmoy8L2gyASMT3sWJTKGdfHM6G5ESh7FGu1k8yq2a7bRNL3dQzkHRnrqrN1rQDNJKySCeqLd2b9v9g6i",
  "key19": "3dgxoQFomhk8avR5T8ogPc4zaZogTvcKsnvgrN6PBeiqo56KJ8q19fVdAonHjLwxXo7F1D4N1DV53z1kq34rfT3",
  "key20": "5q34T9GFWJ62AQEVgpuDpVcDuj1k275vJCLPkL5X4ct32nM2eDAMGVR1neBvZeETRKruxDXHRX3oH74uF4WmMfUh",
  "key21": "5UJjy3ZAZbaosWPVU6KDWFGm1hTxXE1HosdsQN8uCSYZYwD8szGSgTDH5aTMBSqesHbam4pboq8hzJrn1v8koEmH",
  "key22": "3pmhJBUWtzTYxCgmYFa3CdSxbEK5QNpTMtnYUXHnkqoikhJ1r9T3G7AdXUYuZCMtyCwjMsWRTqzKeHwYULYR2brG",
  "key23": "ajQ2NybfL7G2fFfkSwbaKnPsRawqn31ZeUyhHoAk2x459grdMYcLrWiWTbpe1ahQzKYCBCPEEzHzRPJWJE8xLLs",
  "key24": "4iyt855iK6pfr4vtxunNRtVNHZeMo4sSPu5MiPX4yJE6TzFDNzxpqMfgXhhfH1HHBxK1HetoJ2KdqTcsFHcLcFqP",
  "key25": "4QcXvqe8iSSEoRkRCb4z1PkA2use27mn3JLU1a3nxMEaZc3yLgPq4zkdWPsFJvUmtxxYhgNja1NCtZc6jG4LJzzB",
  "key26": "ZWPn78yphCdUXMHtrAghQzHqGceWEubEo2xYdcc4XBkgjsYmdpaFSyG9r8n5cUwuEbnCtCF6C5fXUrsn84quZ5e",
  "key27": "ETQ8mh2uuw8VperNJ8ModWFbcvGiPXfFzimvnfimtbLgWJdDgWKgEHWeVasTrSpVrma5DSCk6L66B6QV9rwkmXe",
  "key28": "3WJD26buzDnKW1TheukDnM5LemR5B6WKhMLqDTSyLSRZ2w4MERDRG5wbJpZY9iJERYxZTEbFhisJipydoeDcRATf",
  "key29": "5rm8QzBLTieC5fX2Dfqi7TvsRZRR1sENW13K3uiJkWTbqhdM4x6qn3yDzqwC9SygbvqzCveVQW3dcmQFJL7vpyJN",
  "key30": "gcoDxnkXbJHTCqftkAD6mfBG4QUbtPvg27o3ctgcMZxu78jN4KdDiMFgKZv5tDetic5GUU32gjmepHuauVQjpMa",
  "key31": "4gp7FkYacaq8LJ2N1M4998Sz5aYvpGiD6kBGYKANvendW6fTJG6iQxFmLxfRMitNbCjkduVjPhdb2KjcREpZhqzr",
  "key32": "3AdBngRjkfrN4tpC9wgCiejStScnjySnpX1cV39Zo7tQ3eAkQUSKVnjcdx74roWZT2H2sPHXumL8qaaT1she2a4V",
  "key33": "5o5ZpKSWpmXFpGQTR12XgnX7fx6HDLCSoEE16LddkVrPA876jy35cayrDsUrGHjPShL6UdJ3fhRCEWH8Um2xa1ov",
  "key34": "5YjTpJnWa83eZPe3WzeG1qqxX1Y37NZVwouLaUdaqaQkyEvCXkHm5Ce3JM36vh9wrW5Huk96PVUaskTRwPMy7DAW",
  "key35": "3ShuVQUJe8HukHLFR1LZx7z25CPfoQznnE6NTThiF4BQqzhXb4n6jmvo6UFQbw7SHojvz8EwRuJ88zBZNPh12UrU",
  "key36": "Nuzx3XTfxQhfecFtzVBMTecL6UpSMzKi3nLrbeYapJnUvAoEQAsDts14tndWvnd4NSUmFSVc38ph5UezREsKgtq",
  "key37": "3We3dVRdYnYGmBaUmbk8pA7nHJQ7XxyMxLH4RcswqTQMXP2yw8Tbyg9iKhGfHo3xtXrShN9fMsbTtTj57sBNCN6Y",
  "key38": "5AS95Cv7jhWrSthz8n5GUbwkVa3AGj8EPWsqQG1qLA7Mue1T4c5HTHCQXCqcMaaBuym4thijB1ocBkfLzxqqLjrR",
  "key39": "273nHec1V6UbbF4rMvEUcYkpY78n2zcmvxQKfXWRDZvhARmVqUQLjeQN1PansYEvN6KfSZjdWpQM8m5ifmskNCgz",
  "key40": "EcYytKHAfXBjn1FW6HXrQGtb7sCNPdPf4XhKm8PenCg61DvyyYQV3VnhNT869WFW4Mz44gjvRTGBJSRtL5G9hgR",
  "key41": "t6XVtCmsLtoDinmhYPQJG98XfcA5jPuiDKWLgd67cnVj4ARHzdiDXUuisXWpys6Y4ZXRh8thwz6M81rjwatbveL",
  "key42": "3gQ123vpPhzqPqxnEFJDFVhrejv629sELdUNFDYCLWbGW8qx6hSUgRJbJzbig7UJf7yWnrnHgMfLsqyF3TFDBpKh",
  "key43": "26xNJAscNnu4DQNARrSmRpi9PmAtfdstNsbzr7r1TWmJUm1q616BSpZsE6pjyWnHvykKz71QkhWHD1Fzs9tbrnzM",
  "key44": "jJ5CJ1GXVhLsh5EGzUQwjZN9mVQaWhhdzkCC4p6AdVZnNm5uNpQjepbWmqM3FKG5rWJPhNC8NAL6ZGxu6rcpDBg",
  "key45": "2BehZHrCNRCuwBLPMCvQEKNek7wRTR3uK6EstttATTE9GUz2vdLZD3oWMdkSH943dMWPJ2i6HcYDfMabf6LsNR5J"
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
