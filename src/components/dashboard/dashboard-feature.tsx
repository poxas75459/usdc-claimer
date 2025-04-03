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
    "5PCUoaUZ9tm8XJbtgZzGBYMuiKGs9eXcCPxTM5pPbUfhhsuB7FjZsdpwgji8V5FBmo6ud4YKTSELhkJRn7uR7aaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK4WVpD6pighpiqDhwGx1BLiemsH5KUoBFptJw7TfDhNgaaGD3VAKim5MtWuzGpWHTkWWY4EWNJfo17CHVP78qF",
  "key1": "5z6amW5ZZypebdkEn5PKRQLLqKhMqRspy81ZxNaH6VmPbh7htmntjrmxvvstEPfvm7Y5UMLM5HqKreYa1R9v1VGU",
  "key2": "5Hexb1qTSuVUyN498ryThcVPnBovKbYGBXf6hUV4MdrLqz5RqDCEwCxVXjrmnQUZ3xmTaqgHB1Np2kGy8NzdgoMo",
  "key3": "672zQt6BTkquFZL3cfQpMYie4ZA1Svup1z7rKibm4zmVtD7prrstJNDzixZQ2cN1YsRrNPvahDBWNuypa6T5UrjP",
  "key4": "4pT6iCP9qBmsrYofkHdXyCjoaQNvkKArR9ZwDS4PT3GE74v3HGbxsYmXvjJynR4giS7iBSFektSMG6LgnRdvj2S1",
  "key5": "5sHM8gTiC3KSFXaEHSSM2Cr9D8iaWDwiDx9pXHqRjbdAhxcvBFmzH4j2C5WeDKL2GdJfPSxY9v2biX9n6ePKvAvG",
  "key6": "5SB7DdLSNHZcfzRKjG6eczuVgfpF8KkYZfwcDcXEntuxd7yWxUx6saj7B4fXxPgNwvZb2zzBWVg33VhzCtUBbEnw",
  "key7": "4w2wo5qKkysbwEJVTuQnVXNiBDxMBFfkLtg5KT248aH6Ktzcyh62WDgKeRtJozqgNexd94Ds5tLXifKPAy9Djz7w",
  "key8": "3x5wimzkF8CXe7nA518vQVhHCNqUsTCm1iLw76Jenb4LRyf4pqHWJbvW2W17vvu8wiDUUy4LVhmEkAGW2TrrNcpH",
  "key9": "47rQ5ToEgYSPCfUcKUxknNh6c7mniqFfKZi6HLrksNtsNrTtCT4ytcL8vUSgcgHqbEEZP5TA6DFWhMrVcmjG62EQ",
  "key10": "rZaFg5k7jenxGr87BtJ2ijtoqP4SPerK9HNpHhGvceghBXmZeXS7ZVqcX5RyRgrd56jXY74rEzQAqujjEw5ukGY",
  "key11": "2LmJ256Rm2FEJsfDHZTdYviZVGypJD7UAQbPBprnvmqWhVdsKA5PfUWxG1mgXpZ79Nrge9gujzRqfAa1iBRL4KNo",
  "key12": "2EhtfH1kf1X8feza5841KDTqGxuyjy5mNA1YvLHsWJD7Km2ffuwxqN8LSsv6gDEjBb4hJVjhVzBtgrUgEmaRAnP",
  "key13": "2MmQ9hEyUEzbti31dTcYswBgjxnpw1AEpPJAQFPCuFoHXbKfJzuLkFJpFHVvcP3MCZQHnajiN1Pwu4sirAjkyH8P",
  "key14": "3A6hhGuwPsZik5LvJUkjdBcxrhSrXjwcitasjxnfZW9cK3uLbmL7MvTTHLMy3R9ZR4fxdXbCC9ZfQ8yV1LroLwfv",
  "key15": "2e9KEDPGBzQh7j6eMWDG2fz2kF8mJhemjwHSV4CGhW5hU3gFp5TeFBCJsdi4pJC2mLguTUFBRSxnU4Nyu39AP4gW",
  "key16": "2yqaQAc7Ckxhg7QaDNRhC7bfh9B1qPubVqEZnEqBgskKxc6DEgZLy4K9QCCv3BzStiPAnoQhTgFpzgXFjTpXR8nM",
  "key17": "E8YdZu8hKden6BRPtRa3oVpVYfVTWhkkg48ZHYhSq2KUN8NTnDnyP1kAgDNm7194FD3edBzYRCS13BPoDHBFCDM",
  "key18": "54rVFqHaFyNmAz5GyWFEjm2rVjj6m5V4SGbdGf3eVf918E8A36KDeuVdiSFRTwJyFxNME1ErbrzMgCHrYFyxPmKy",
  "key19": "kHs9xXPbASzUUKjCVYnHtPhk1TWPQmFsNsBpTAbQdUs2TCLJBXyyCc9b7Muo6tzZ9yVu3KrDksvjY3RA56Zb2AU",
  "key20": "HnWeicx4PJGporqwXKEeyFfKssXJLWm5znW7Dfj4je9qA6xr6xJEh6Gr7gqSU5urAbef1vujxYyuiaaN9vbPRBZ",
  "key21": "BvNsNMtHAQyn1SY5cRBVTxsJik4sDTiHV2qRJdPCsQ6wHHmipr61ZcCUCo2VTH3kwPN1Cn8trSdwhuEqngWGRnp",
  "key22": "q7dBXe5SAa1gdb5H3s9jriwXg8SBRKYsNEbKP4xtHtKDdkMFQXMYR3T5FmxUbetBWGaLM8XPYR8rdajJootRMJ3",
  "key23": "5ucFr96Eb2E78yRVmxtxSbkcpCiVFZTiH35qcmdrUmKipZc3VyQr1mRtSLxn5FTK2j7tDTHTLbCFKCZALzkMBKWp",
  "key24": "3FQYbqfedSkAtWmES1fwiyrJNFn5NVY2C2rCGvs8bd51g9UWFWT7K4xRZEd2a9BvknSW17xbveAyAQSv9v4xzDn4",
  "key25": "mzWgrLkzXPbNpf7yKy4yfX7Z1JCuB2GEjUFLUUGtoksa6141bfS2M9DqRXiLriF8cuCA8PJcpj3hG3hkqJFjxad",
  "key26": "2UXzkedyQX7CtQPnn6pCeR8kNxmk8DFG1KiSQwrWYYUFqRtSn56dUuhQPhCocXPoUND4gG6qbUiyvwa5sPDiz3aS",
  "key27": "fNEpx72qrTrpkBVwF9ejYAC1Mso9vWJxpaEHWfbwABBqkrU6sDVUQAgw4R32CqYmaStE5WPGyQdTSzUjSqMb69V",
  "key28": "4wHvNKfwimYUgYDawh8Y1Qt6f9xE11vXC8DHHXExrF6cTR81vSMvFvXbUWa8iCkXhQDHjEK2humvczpbyf44vBiN",
  "key29": "4SmK2dWPPpCP6jq4b7dinW15k3vkMgKuqowBnU918dyLiSSYPiisdXNPqi3VrFWRy99pomTQiCnHJPkqCN82hiTf",
  "key30": "5r8LCbGBwVJ6JjfMspZnhiqoHzYqvGndoWHA4Ga9SHogUodCWy6ABo5Ea9fqjpicqurXTuNoMhoHqnStgYFMMb6x",
  "key31": "4vvp97EnVBE6NumrPC6s4gwsWefqdNbwERvMsuHtg9o66tW8PtH6Ywqh5WwJd8EByAv3dvdVDVPBz1ehgwtw6X28",
  "key32": "3V12beZBZmNzRCmHC4ZgpDMRmWrmY4PuD5xGtf6FXPvdpF7GWKRuVQG4ScAfQfCu7ue7MpcSQKp9Fi2mx4Tqm9Lr",
  "key33": "3A2XL4Dn3Vh2DPouy9YQZBiuvBRZS25qLaLEq5Mou1WbhBKLqirHtZwHDJjeNSaoxGZTfVR9uPQD9Qhx1RNsUVeH",
  "key34": "2bomKkDPzDda2Kdqd95DERqJq1Hiy6Z8KrbcPYhCA2zTgm7fBBMkUNrscVUQ2WtShyznCpCD3exB6wAcjheMEqmP",
  "key35": "2cDqVX3Xmy38yTG6AzhAKsCfMbr9BpgjdV1HzRCc21tHA5XGKPv1JiVFhQi5kWZYKvTD54zkbS8J6PEzrW4Mm2Vc",
  "key36": "4E3utVgJdJa7qngndVauYraiJ7ezXcD6ggwUDS9hVPyspjvHGKESzEMh3tsmuuAKVEyBTzR1cPjZJKmT4jRDcMzP",
  "key37": "2rwGkAURFETL4ZgQi7msBLs9Hj9Ru7hBCz1uiCPbFDJE5ogZpVgi8GuexzNpVigMxfHNvAMPRtqmjsN8H8aiSwrx",
  "key38": "8JCnUmWw1k4eCwcn1GsVhL3Pyp5B9PWfnhsUHVQb1t6BJ2pJFngA99VBHXbjf3Hc21yEWBXNQiKYy8WsjHmRyqg",
  "key39": "2CsrxQFcfMSAHnfqxhFJTzTzNeR3itSyX7yBiQGA6jkGa2xoP1nBnxNybZ3wNgsL7VPKCXhvSQtMMvxe1DKVmpDG",
  "key40": "4fGyfMevT7sYVLYbz5m9HTfMN1TkN4Sji2bArhSB3qczSFtbePjBwmCquXvtyJgFZTmPWtEA3UiUcMrEbfm5kupb",
  "key41": "3465qPa7AcTwsj3f6u6wjCdy4FN6vXQc27JW4KeTYoHcWcitHqBYUVRFzkKFapwzZPoZX2hW5J54gWK8fkcb5umU",
  "key42": "mG6JHNShwAcBibk2nPCTuNoJzYkdYXz72LKposshAJWGcAbzARpAHas6LmDa76V7v1UVMdiFUbhXcoUtwWZQC1k",
  "key43": "MDuqyZTGXVeSYCQBU1xrzuJLWjgGxGW3DByrgrA8subxyrnuisMFPTgkUm7jaefhpJJDBr3pyb92CisAgK4YzXY",
  "key44": "2bgkJ717M6aPTjB5pDT8QQbSdiULRwT4HiwPfvtmjDmNd2Lf3tk53zbxz9syjAnoVnfJwAdLMPoYDpXYBjdbji8Q",
  "key45": "4h9iCHsqgvkZ9grDPorRLRkjdUe39x6taD6tDeVnUdJZJMKTAUq42dWYpsGpQxjxyrd1KjFTe6AvdhPfiUrxeqnP"
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
