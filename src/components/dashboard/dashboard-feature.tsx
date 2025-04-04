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
    "4nLqTcHegFY4iu1awtC5WV6oMxdWTTU4YeyDHCu5dKeVWF2xM6Jx6MDLxBiEWcuj9RcvMdFNc1cLtdGBF9Wq8hab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7kdrqXXZEVdGsb5tn8mu7S2v3KyT7JeH9G7zaVY4dngWxbsnB8iwVZZmeugyuthFsjgVgBppd5TMei3KRovUTK",
  "key1": "4tPMTQjyFRDnSd216XKM6SSrE5rqN4NCGpBNqmFwuJZiXvcPSEWRikgGn3Je3mUNM7Few7SCPmR69ZwA44RTYjnU",
  "key2": "2iQEvYwZyqgT8P7aDm6sxjfbzHooZdkAJH7qCVBoFunKJYjYXMSvjHR7YLg6P2CcgD6nxRJCFVEhFgQzKcxuP8JC",
  "key3": "5vncojiAkMGUYd2cqU7CiJeSt5nnu7BR1aBzAS5HYyYfnwDerjG2NhCr8k3QzXsAfMaupupJUaiXKnouoi7uwxL3",
  "key4": "3w6qfD4c1Ki4DnGZPaMqwCAVkZrW9J6kiF3YeHFQA7KHUanYwi71NiygfUxTRFAenN8DH2gn3umruafitJEzi9Yp",
  "key5": "4SXk5YCMojzd4dVAwFJ6aRYBjKYtJPYtR1Q8cuCL7kJqkofkCEVqRa9WtCzm21Rd1YvVRL7kgukViTeVJCcgsvma",
  "key6": "UJjSjV6kPA2xB3a1B3N2Jxjtt96w2wXeYda3TDC7CumYAWyLk5Ah8zm1KfhL85yW3j6Tf5UVsySsoJEEcTfqS9k",
  "key7": "3MLGFiYyJ1WeByWiUcWMg83XY6zq4S1ib2hSZP21MeYxv5yJUWHw66H4Rq6uqwG1WvkpjsUkrujGdE3F8sWakvoz",
  "key8": "5PaNbpqMmNvHawznfqSYxW2gSs4FLmcgmciQC9t2DAmzkLWH2QhwZM4PSHm6rqZwFsLD32cjNZiRfvwxQzgnD4XN",
  "key9": "5NoNUNP8KUwTr5GTCPsUvjffX6JCRPf2RJUvZenBRYxZgJdZhCGBQbQZaYKJRiKS74warb3FrMAFZUjNfRSTfwrN",
  "key10": "gZFaa9RFRvjB8TXJywoJs1pZuPoaFpfZttf4pf11g2Mv9GqzL7zph3wFHM86PLxFiDnLYacCiPJvrRDB4hPoVND",
  "key11": "dCMUc7ywGnWHPYmKQ2yYUeSKDSsMAdytBNVUrBnG9HJZe15SYL3E5c5i8Re49kgqQWHLAdEWm4NGC4iacQVZhfP",
  "key12": "59RYmsnhPo8XtRSXASG6AzwH6SXw4uc3qAg4XdBwa3gLEjh9jNMAFj8UsvA1xRmoY22bD6DkExpwGPLccy6HrcRS",
  "key13": "2XC1SXSk64S1ritEAvSCoEcpmiTbZToL7qM7tuPu9UNNP65Pa4NfXdUuyeThCejeEcrb3EJK3D5GAXRbVK7WGEUU",
  "key14": "2RSZFsCmivLxoWny96hbZBWa4Sbj5p33BP1QSjfXfwTKsnTHhvyK9UgGVmTvDqiRVnbtZx4NQfcjpQaQyqqeDaQp",
  "key15": "54mVFeXysZ8oj9MF7k24jPaHqU4hvC6jtG6fPxVkXzPM8y5dfD1ktNEzNLwrMX3jA4gPs4VtLrj9CzSCxwm6Pw4B",
  "key16": "5SPw4WnL9kT3PtMXL5miUkDSjt79H6q9sdLBqtr8RPEpDD9uW1MJx2jjq877G2E6UJ7zZLE1AuxTmvUWwBZ9hpK8",
  "key17": "3F4fBEbvHyxL9CbhVPKjSa9wQLBaRwN4F8QXz4DusMeGQxvG9DMmgNryPctuvCBkdkdr1rhGKpT5gaPhKxR7iutM",
  "key18": "4YYm33jLJWrSxQ6BQA2VBhUS1z18wrfooXmBVQ1czQ6eMUHBLDyTPYEMK6Q6bPqshrZzUCtdrQEZrJBaK7S8Zbei",
  "key19": "gxXnTpVMPqwyRxPz7DLmv9kR6sGiVDuMVEJ7bDLnVbacSppukrxyE7EXW1TivLhb9Jt2gxCu3E9boHBTYhM7YMo",
  "key20": "3Mn5Gir4x6SVoRzbREu5zzUiVC8cRWqk1JPRJR3DMg7MMagHbC3pjv3ZD3iVfC6SBAGxwtzb4ojV6RFaictv5jea",
  "key21": "5CG3KHmANKxNBLjtFTrRzydZxFFj2M5yswsSHkxLMntHrf1HKSAJY9PNzzQW8BM2tJx8fEdzfMmvPSAVRqVynwSt",
  "key22": "3vmwLydoyCR4xfdR2bfgKvTUQtWvTjTikcPLe8NH79Wqr9SfPysZKoeR6nrUGbCGSyV6mNWyq5xirU6E8qnjtrHh",
  "key23": "2cyr4ichjLqtywmdJcAGX2Swvk1sP9x1RS8vsyH4pBTpNRvEJETRGh1BxD7DSJ9zsZxVqQrB7RSsVg23mCV2JWWW",
  "key24": "cPbh7N3GHFDqBDLpH4dqr5xMiPPa4C6JPryaSo1ugG939gMs5jqUWy1BhS7nADjt1cjEVN1TWpLFmeTMho1Haen",
  "key25": "bPGaQPfUFPvm7tZ8H4i4dPnZk5j17Hb8TEUm4xqokgeG4ZnkG9nqQx3berSByHDea8cqawn8FFN8GYK7o3pMmpa",
  "key26": "gMybW3z61u7hwJZXcWjRkYNTgUtVfhPera7GWVFjgs5Pp1ZgR3mh5tD8h4HxmKyJyLrKwAQXowwKtMFir9teTA4",
  "key27": "5sotA7wp1sgVTEvMVxXzJUgAtSe7Fm1iCSaU4UdoJharHtqZ3z3kNCmi1cY3hCpdA9SB1r3W78jRh8v8zfbgfP5W",
  "key28": "3EHscjN8YKSAdA5EwVT3CbGkCMZmBwMaUEkR5Zz8XngtJSa55VGgFE3Mvn4dpS1Hg9VR1WeHzCuiSdtMMzbHuboT",
  "key29": "531E3p687RPJGhE7quLzBsWsJd2RqJ6YvttCM5v4f2NPKyNCuQjQqBpysTFet8XXbSyoSTfi7j7AugHftQzegD4E",
  "key30": "53bWeAj6FGqne15XfsKRo8xmvMxqhdq4zkTsuRH2KioiabuuvMPqsZufZGAdge2XDMdLVdaaV37QanwUqjqnA7XN",
  "key31": "5JweE5u93cwcjs8SaLezR4bShhWat4ZmEx55g17X1wEcYigguUNTz3EvGkorj2kgUKc5TqKz9cpowtL9R9o4hSdK",
  "key32": "5jkYrD69QBz9MWVuHUCRN5biqCkA2mbCn5QYrb2yKPnY5iNtXzhiFujHiwdQJjqZdrKYZoZUKPiKgnxHLpUXQpFF",
  "key33": "zEv1og5vsTpMv6F1szwuYwqCvQ5B3yH1227VaLVvnxELm7AUZAcupc2NRfsuG4pEmH8Yq646UQVPFURQVCR5W2f",
  "key34": "2rF4hErGJNYKvAZz7YGHgfDrs7KV8VxzaUeBToyTUkhW2U3AFrZypwFNUmRMNW6S76GY1tojRchkZjHQeSrwSwjw",
  "key35": "6ueJGkVPY1GDVK6woFf5n687f29qfFsUJNLZGU21eLnUSBerud8jqJSTU9L4aTa8ncCWPFan7TKy8dUKXVzUm2Y",
  "key36": "59WYH2pa45GTzyr2nbCXVSzqZF8gepniCt3yWdCDtbhCbiM6ULzQEtEwtRRski45D9VQxA7ZMUTEa3rWxbZMyJmN",
  "key37": "3UWaNyZatce9FhqkSyWkHE2pphzXE7Ef2jNCHzXQ4V8ZyVa7EFv4xPqjHcHjHUy4TpGsioW9CTtXz1T4LsUiZrzP",
  "key38": "4ZffCGphbmMmbbQWF4coh7EpC97fbL2fY4DCWpaw5NPujHiZmTH3qJBmFiS882WU1ZVSyLBax7Qu47SY8MoBXSF7",
  "key39": "5rpSiGoL5cTB45iBz129cWXCT3yQM9ALsFpjqxKAP6VqgjZ6ET69hYXjyx3EsLgUGF4WVM7T8NsM9EuuWSG7N1gj",
  "key40": "67jgAjx73aVp8edHCmNBMxvcyDkE2p7uY6cjGtpRjt31gX582NbRqrp75G35DiwjasVgwgSVjyCzyXHUHxXWAFUm",
  "key41": "32WxBCWwREazYkJwM6rPkYanPAQeDA1thnXsmbjjadRRPDNTrZaLu9cHDeSKJtx1JuPYHwyL2XFgo88G7HfZGas3",
  "key42": "hSBm3oT1dnQYYq2PyYJgnNxTNXs71HFr11RW2MfLZjyti3AdDnL5Vy3V7waUstLr9BCWVJhBpMWH3iosJ66VGeu",
  "key43": "2k8Liui2742vUjaBoGxVs1wJLjGvLVMQCxHJX29ksyFmEvNUoTjxCW61pkarx6czvDk6QmgAahoPfy6Mfr9EuVbX",
  "key44": "5HDTNoHNG2DXAy2TZgg1TGYCKWQmzRLtvEjCzGgt6mMenuJDzaoAfTaHXenZmykHUCwUjKX2ZPAspZZjQ1tTARii",
  "key45": "5HxC8qZ7rQeE8zsy3vkrx9XjGxKZT8GwtXva6Hf5HoyeQ2FEa27fDGnrR3gQCvjXeoYADL8cWhHEY9NVM4Xo7k3e",
  "key46": "4N21bNHkRb3khzoNKBYT41cwrRsdiuitKPhdhuzxqk9w489SNaU1KZdV8CBAY3Hi4ngY2DGwveS1naoqBaLbPtrt",
  "key47": "3PycY7jzZkzmBwz9JYmfF4Q8SRjbFotFqKLQBqSPAqmLiYZG7esBkJGe9byXnre6b5mW5ayd4LwY8tLVAnPFYcCj",
  "key48": "3nQaU2vY4wWy2dCzwYKd3ELt1YZpeYb8CyEHjvJ3ieQLKMaYjdkCWnoiojjJ2pBWqutgt4nJXvdTQUQpZHuqctRe"
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
