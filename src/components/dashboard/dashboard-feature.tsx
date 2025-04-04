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
    "6486AzsvNpyoSAxKcX5jdk5AW3HnVPfQrNXpSECzZ4maY9SRVjocLR6PzMPpWT7coHKPWdVLbAjeNn7SfLJ2w75Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePTh575uLgSMkfZ5keVeQ1zS6fG3BfiEckSmYizv86upkq8dVEyGhc6Ft8C8FxnHyLbugKSQVf7NWd4jXBhGdGX",
  "key1": "5N11eckxZjMfjLvNHR7Q8xbUV4pfdR7b2du6qJHxEqUFsr63fyQPv3SfpHqABbwm3iZu8sNCehZSbZkCD8UvZ9rA",
  "key2": "39peQ17SFDH144kVbaDpAGrKTo2sivgZ31tacPSFebhL8bWTtkLGN3h41V8YEwq7KxwNJje4r7JNo24QPM2iuucQ",
  "key3": "41FAoxbvYq5fCGkZiNQCGkmDjRzzzsteUsL1vRWg7wUwRsKDWcmTgQPecYqqQrdM1mQgt6eHN9Z3N64vaFkfk6Hp",
  "key4": "529B1cpv86CK8hfo5pJe4kmYV78iXYgpp5rVnhqbtxhK58j16A5xQvJ9ufiptnmKVygzhriWrzKp4XG5UMGknKXH",
  "key5": "2HbSrTACjwhZFX4GMDKA8NWoBsJ7XvYpEWSeQGmPeokM56h6QVrDcQ2S3sxrJwpqW4dQf2REPx2gQgRJxrJLTsND",
  "key6": "3gR8zQzEAVtpmXhcgvYdtcmAza2jVSRa1u56o7AX3cDzphkz6aG7EWhxMXx7acsAL3mQSqqvkirUwDiEW27jdkYG",
  "key7": "5PZA2vumoW52da3BRs3jpewAPeWu8PRS3ExqDwbsoyaXYgZT46gitxqPJVfuP1oijQiYGcdQskjYjz6dVpK8KmKR",
  "key8": "XcqjrkYAxw55MGfaXNRoEHxJq3WZQiNRs4tj8ZfQt4rH1dhH4o9pLWbYDbctfjntE3XYpXV7sejW7RVkJ3YXYMv",
  "key9": "4idjugZMJTyjNKLoMXVEK7yz7Yg4nfA8wQYXLWHQPDR7FMRpPCJq2PEU57MYiPywwuaGEcatNo9Hf78yroTj7c1o",
  "key10": "5UMKaSCXvn2uBaoXorJztmmBZvhdMGTiiWyMUDdhT6JLF3cQ3gC1yG1Eq8HMbHtpAKxyMADoYwuEApKk8cTSc8Ks",
  "key11": "5azm31LbWqb42ZpcntXfkSxC6rSzDrjcdzggw4RX6U97M99VGLeNMzjdEG3eLb3Umz23YMfbYHTH4J18wAUwRj6v",
  "key12": "3rc2ioLXHnjra43yUPLghkPfaLXH1mPs9U9UEhu49Xp9wcbQQzUseZiT1PzCvw53QL3fH81bvGVMquV7sCJ8NoDE",
  "key13": "2Pf5htSVZi5Ros3V7aZC79Wt9chSgxKPVjXE8dYEKFrSzcuxEd3RCyLRKxRkmmAC2tgPKWKCiSUB1uAf6Rp5E1k9",
  "key14": "c9ZpF4hW87BvChPbZFpu1DZ2s8qJL9TG2x9Kzx39QmNHAR3VQoJQftZqxnVjg8WjZS2bvCAUoFas7ZKbETZwCB4",
  "key15": "2kXfoQpQDSxoHUDXH53ezBMypjPc5UCqeEfcTJz2RnJrUG3TomQqhV8iLujU4WRPog7rAQSw6iP6VYzpcQfsbnxG",
  "key16": "sLPrQLb54sjUMeT6sJT2gmupScKFN15R5uH3tqvnPVXXspMhNQRRqctkA5vz3DAQJSgnR6fzm6f8d9N4RmVAFpJ",
  "key17": "3DHZGof8U4mqt8JBNZx74ixYqSN3YZANZK2GYK9xP3XiKHfZWmpcEZeNZ52DLDrjFbiVdPYS1t5j4ud6pqDoXV8c",
  "key18": "2TxkQcA3LdcDsrdYqWUDLuEie1A2Y8nLsiPWFrTGR6LZVKyHBJ4gj8quHjyyALK5nbEj8PSHmXgVbMU8hBFQ1awg",
  "key19": "2vzivY16WrBXUytNSAxyYhnLSqoViT5VSmNz7sJig45Wo4qgu1fFT2qNzgsTeaRpsnDG4eJAQJrFUaN22WrzUHfK",
  "key20": "4woJBz5sXqAo3BALdP2GAN9dwgBRJv42sFcdzqdLPi9cCcLzdMkvEnnMDEJsZUSDv3fxidLeYzfNasHiMeoGTo1H",
  "key21": "4w1xmFG4GpD92ypjkZXybX7QY2gwTyVh5va4rram6BZfukKrAx5SS9qgvtRGsk84Ji5iatex2KsDye4xHC3KgQqf",
  "key22": "C2W41VqBZQ8RcTUtXycexbEGVN44SL2JRHzPofwU1fTcUXw1hXNeeaqKT2QN348EfoHudwtHnG7mZg7TnrA8Vht",
  "key23": "4K7sPJsiAgn3ESYZnRdPeNPY3ewK6VsdGf4vnWB2SWGLBjox9dgtrZHxoJn9QAK4n8UN47iQ5NqTrN137p9Dbfia",
  "key24": "mDEWy3C7LvPHiWQQx2j4P4S73UnZsK9wkHDWu2mwX3ey2hAZeKxrS8ARtY9mViUUcq8B1PDHLayZr5WRgYRXmQV",
  "key25": "3kesUvzF5Xy9QdZM1RUvm5j6gV7hNeDDYVo9gUaDChFyXHZbGLD9cgtGpfQzXbvgKJgUSnpbMYvreLJv7ZFXM6ub",
  "key26": "4i3fkYzDWtY4P7U7GBaav8cRWu5SNLX2YVFdMHgNo93D5HPEMekoEwjLsUgbkfqMiyFPbDyUV7EQTnLz5zPze9pn",
  "key27": "fXDQhjHBopwTKWU1f4zt9rkvqf7hLQou9nnabzab63x2aoQsAy4gzoFtKyZA8ZEDMpE6H22oBRD4RRDbLJcd4Lg",
  "key28": "48DJ3opDeaDvPy2iNs9H46YD8akNkuUMmhw4D9CC3q3PNWV5RJeVFwEc3xzEtM7ohQZnwaoswt8JJiMsbk1GVzDg",
  "key29": "4sHPu3vSvnw2KTe3iZ2kGdE56r55VsUzEgR5FEoxYppbaqpD3GCJkJXY8setenkmJuS1UbRvxS1DXCsgaZ8N8wT3",
  "key30": "3v2bwtqhSCfe7cB4LsGhgJC87P8woDxbRCQQkLQVnxpUMar45mAPvZQRxXgxuJ7UD5zW6FFjYhnMoA19LHvFJDGC",
  "key31": "56B82DMtVeP8j6bzCx9KKuBh79T8dipmXG48pmPHPQ8VMPVM9QWZkxcp4qobNX61B1xCdQ3jCTSG4tFERQWJNRqh",
  "key32": "5FWVZFUPLPtCGxoDgFuBXhvB9YbLzxrFiiXjaLGbjo7ijhFZUifsMpCQz3T6brWQFfwPCTyLF36emNjjmYN3tefe",
  "key33": "2CTsqZDjKKuEDFB2CLbqUAsCsMesuzot7pYvifu33qMRdg4P4LVgUFnN1TjpkL3dMMhLG8jtYCeP9hDdsvT4yJPf",
  "key34": "vi3yTQ6N12fXz9arLXMH85xVZnHFApVnaUoePdSfEV5Aw9XfEM4Y4R8SB47JusrRqL5ihFFHDppSzs8cfHL2Pfd",
  "key35": "3Ws5vFACH1WdGRH6zTtPk3Ce3Y4Gqi412pMF7o282wPWZndc9BueJwZ8yFRiN9FMjwsArmMH4v8zyLPYPDLE935N",
  "key36": "5AizjyNNcGhuWhU1w5aC51zth5rcJ1edwkkoUvQuX7HAo6wBHc7DPqXdJj9p1FGM6KF1r6Pkj9wEnn2E6NLByRWS",
  "key37": "WMNi1Y62Cq29sy3zeHfDB3JKr42UNeXJm7fo4eMdHGvDeWjoEAS6j24uvHSn5oxLu8LGumBPhLs2PMzWir4Tm1o",
  "key38": "NxcxLJNt7Tuh1S7pjYvUaU7tmCSvvyTdcot5NLNnJ8cRoSx9Ng1WGY8UZwiNMHNuincpY6Bs6EyJ7wUHtkBD9pt",
  "key39": "4kcUick7Y8s66kdq1yPtvjrag6o9r5FfayLwNyqDjw6jUvJ3hDUhrrTDMEXFqvaRaMq6b21pLEJ3SaHwZ4BA8nYs",
  "key40": "5zb4B5MyasSbWppfpSiEh8dSxvvDYwhgtHN6MFLBNg6KWwEsVGjeF3BRwNN2NaJHZuq9rBJxJqtS9LLRkfb8nkKx",
  "key41": "haEt18VwS11aKgwXzb7zrYeZmCPft5KSTuNPdAaqcDNYCprW2Qgd1ygNQL2pkdn1RMynPyNBHzRrHG4F583PfVr",
  "key42": "5wiVfhcfyz1uJZG2gHdeaSctE5oZx5UWeM4fH7i9iN1iXub4WrdWGEfW5FGu4MVtTJ3fUAM5HGnkSXbZJA5ezTEB",
  "key43": "5VaChne2dcDN6t2p5tNNaGRRtWHckWbTcf19eaE8ztjGkFs4zo33CbZfTm7W42rGbQvPEVQJVZJKTNyQaQkvv7Yf",
  "key44": "2bXqBVxMmS1cQ5ad8XdjXw6krduPTVuWFZzR2Y3MaNj99QmnUywZYDgupTLHYqJMsgkbT9trsAYjaFRUXGGfKkPE",
  "key45": "2UY591jUhgTacG1gJ2WuJy24hYBycLioykjbZwiDM43aewCJC75ZxgstH7j9CyLu1AEFcd4QyooLbATkNmRKGSL9",
  "key46": "5eg8RfLD3UFm3E16MhpHqntgLHdSX3emTUZdBwheAhduwaQ72SCYByV3AjrXc5wUxXAf9MK2W2HSWsY8MV6RQMSg",
  "key47": "qpWam6h2ekuzcRXNsX4MNdE7aej4k1rsvpBZew8pVEYWEUCHte61uCFTBP2UWyWhw566BhhbvEmDoHbJQPYejsE",
  "key48": "2xY5DxzvYfFz7dwjEic7MHhbCdXyFinGixs6KXRAVBrKryYhQN9w9K3zQjzG7Jp2HJYkSJ5MCM3M3c2CqUE3u3aC"
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
