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
    "5qWhACu1npVLQPdmgw1GFMXi2rZsxKCaM7QUF7XBXmY4zBaajwM2QgazWdeGscRz5gdmNjnka6ruCHAP1yDTSM3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDkZve8TCc3dCWbV2cBbX6FCPtJwcidgdhR8uW4Q1rs2HonxQe16o2uB1cdxD514Zu5zwZBp9LsBmDs1aVejPSw",
  "key1": "5grSGsmKY1YijBY9dycEsXqRT8iUaEZzPS2FdaS1MwczQhbmx2Ynqr7F9nU6yJsqiYrpfc7DwD9Afh7mtefLWUPH",
  "key2": "2X9cCtVcUUqEMgkBBCSqEq3EUwYFRUGurvtBnb5GrujcboXPSqnnaXL37xa98dAKgbc7ojGFgW1VUERu4SnEWSPw",
  "key3": "ieLgM9VP9KaWMdRja8R379jNwj5YmxUUfZXKWwXuFodEJ1ct48zbk3atdhUHYTmUyxq3dJZrjyHDj1GE8xHF8ri",
  "key4": "5pYiXZsAFvbtmxvXok1BcXZZHSfot7ANRrmvwWq2ZyLDbTDddMGu1xRn5idtyd7q6hv9E6bvadbxEm1RhR52LAyx",
  "key5": "3aHREYBzzBhH6Cjsj4fmM3ztJCGbuDELXq8aMu4d2V633UZDwMtDTH2SVCNL9QFr5Qnup8fGQEGf4SFy4iRTirin",
  "key6": "65qjxVrZ1uhjG214EWVSkYeCSx9cZQfRNzyQTnL2wjQETBBmfq1MkveSu9TvGPaAa6tc4gyiFZfAmwWRo2ukmXSp",
  "key7": "4Q4WG569qDx2zNdHzgyfRBaVFLbq5Tp7CqFSD9kXt2vvqmS4EGd7B8zCE16hahTmnnjAEWSVF2GTg6t7uQFGauPb",
  "key8": "64xhwNp5YLz18BnjcopjLn3jNnC4bFagpReLmD6CZPyz1zBSffhuWKo23Bh8sDwQSPii8zNNim9ABFctt6mw1Rb9",
  "key9": "5VzuZa7P3Ga33wwCnVShqQyGqy1FKGTLxHDUEBgfApEDjFs44ReLnmddBZX9cHu2juyVGYvSbcEx2SzBskk6yUqJ",
  "key10": "5XdssUijTuddVZHfyEfD9RnxGbXEvi2VmzZcS2msnjDDxGF5PS5kAQXA8dGH22sJkHuAiDqJD7tDykyvxrMyMz39",
  "key11": "4oVbaP2Semf1QEr7RB8nNcjw5BuohCFeCwS3KWNVtyqzqNCCpnrRCQHwo8bEAjmcbXurGKz373QctpSUSrwgKUbG",
  "key12": "2NXyTgJHG6PMfLfWsvtd4QbtioyWNHd7TdNRqDH8ExjuH3MK4oKjkH1aM78zoezF6cScHYn8s9vJYSbHMrtgpziR",
  "key13": "CV5QMFXoehkwxwk2yifGu3s5jcQP5rt99qmPhh7uG6oL7JX6ti3WtR5F49d7PtC8btdemZTYdkdEwRrV1kn29tU",
  "key14": "55nmHRkq4zQRPawsNBuqf4iwPJypDRmZwKqJuKEWQEaBiwvGkbg6KJPghQpMcZuZqEbptUaH5UZ4YfypsvbmLWV8",
  "key15": "5dMa3CM8ugNeHdRH3rc8HF7K2GRVpbxkHL5AsmdDBZd5NPXGvjTRgAve2UgYu5jCGPBZPLNC2tjmt4DzjMGmj9cD",
  "key16": "5WVxjgpmMPMveeV7xtRgHCEumtcfuH113o6XSdSdEqESY73xSfd9B9rMpbzRYTiPfh9kwGYapMTzqpvBq5dsSQD5",
  "key17": "5bVqw5YGqHMzYBTrd1r9GKq1H7dtjkR6GzrxDSmuRqrW4RMyyHY7ufYA1pCVJKMTfDnTxTuVgsdzz1718kXFh4VF",
  "key18": "3QiFsCRj1teFLtmRBx5eN7PRwRt3YDLs5vhCmXwCMNopcRb3rNRndv8Br4NXqAuvUpFxLHVnyx92ztngA2mStrkt",
  "key19": "4GC8brNBmCGqu5Xzr7fdmarDknkH5USjrbs16tP8BFVDnokAwVFWQSiTRkJKQpJQbr8WXvPrDrm1wgXEZwXMDzAb",
  "key20": "42NHJDT5tj8F7UFN8sGnNjk9JrX2ZMEYYEFm8GLZq7kVFLnvqJ2m3eBkaRDCZoUA715u8NpuagyNaUCFBhrPQYKz",
  "key21": "2k16784DFBrMer7zbE7pAehWJWV92nnKdpM3w1iUzX6Q8c1ktq6GrEdY8XpXxp396TdoAa35fEGqCkNM7E6Ycgm3",
  "key22": "43iQ7cQjPttKMt43uJVh7NeAQK5EpdwUXgcrM6GALfA1R6VegXq9W9UupiBwbPaZk7tqQdZ5gCTPTtP64yfhkHZy",
  "key23": "3FahD3ixhdSbYF2SUC3bEfzvzXmu9Vmx9dV9XLPqH5Bqnp84ajFFiLeR1R8XyZqsPCWdFrxa3WpKki92XtMRoFh2",
  "key24": "2jbjirkzdcfFbXaVyQpCz7BgWee33sgcKPKJL7bpHxvPvU8ANknoFGBbLyp5pes6ayCqjag7kwqxnKUTwRG2n67h",
  "key25": "3b2h5kqyRVNCLSw4mspJaKNTDzpkTyNZ9LvdH9Qy2m8vgZQ6sjtVRdpbkZ21FeV8295b1NUvNThGzbzquM4bL2L",
  "key26": "4MXFtnA7cAXNc8YNKJxk5RDw9ZM4nVJ5kQptLAt23RJLyF8JYqEdM3L7uLXEBqT6aqt6dDQAAqhAXTpkrMCWs2Gy",
  "key27": "JCmPoDBdRhWK7fMJyg5VB5Ps9DGcuCSwzaLdg8ysVHw7iMxJC8b9SiB6CpA8RSGSDtLzefYr1yhfEXN3Fe7dTTx",
  "key28": "3YVNqi5AfNs77aHujeuP6Vw4g9aGjxQhxTQP7SZmCdEq1D3wD46mSgstbVFwKL2wTwyRPJv4Ptnq5tbhwt29kvRC",
  "key29": "3p55rS6kUPJLAxSnFwNYEipJJ1mLTA2pVuJMPccL89x19pr2Bxs48gy5y1M3LXWVyESz6PGxaT8yXUXApgV98Lgh",
  "key30": "59w5929ceh3T1ohtMm8eTubrTFUJAhfYeD88bUGtAGczHEb3iZ2JRYfcCQWwEKFNQpEJHNEg8Cyep6BbesEkmPrC",
  "key31": "372KbZpMHdf5mQNG1UeXvbsEXhXcEEkrzTznxRRfMVwvjbjzPEMN8i66U6PTeQQWm75NkEyZfpzyW6vsWrQgz4xT",
  "key32": "KjBTgA4oQXLsTvy7AqxB1dp42oMC7SiE7iuws6mSA9D99FeVox1XX8oXvd2dMzSUzvdwxhmN6Fqf71w5dgXmwF9",
  "key33": "3Xm1fiNTtcENaC21zJurHhKn9asow2QMuRJhNxshKFCX7JfE8PFEGwHRzGUvopcVGdkZmWo7iPhPiKCnSdMAMqdQ",
  "key34": "aV3pJHdTAqHgBGVtHCmbC2LaHvDsQie71FbCtraiDEJcQeG1UsT8ptkyDwjKVUpMqkRbgSM3JkxqCWiLf19omDX",
  "key35": "5KGpofoSGUD5tUFMdrKh3rRLo4LQWAVGDmou4R1mW5yw1V7ymRHYdF1nTpym4QYdiaxCru7TQ1vV6Td7pZawrfR2",
  "key36": "3LAFkVPDMtP5PP7zYt3rySsjFL3vygtrWLwb2q5QBynoiqEhsRTLFpWbwe9HVLpLVEibfcrtxnT9T9MaERekAaor",
  "key37": "2Bo5EC3agWkutMwa7efa7Jz4rWkeuvKAPvpkiteWBhfRRJzV4i5n18r243pTMcWBkSkHXAdHFfXVbaxx6hsByQ1J"
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
