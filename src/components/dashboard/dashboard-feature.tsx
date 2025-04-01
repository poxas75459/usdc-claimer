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
    "3SVboSTqu5Gh4YXFCUu8nksNmboStmvcoC9JUfK5DLc5faFVrWaG3ActuLCVuQZHH8cfLkBNR7uhbG76qg4R3zQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xw6pBdS22tqvN75ADg46gAHjhqQMtUKSPbsdofYkWi5LFGGmuehdZ3tAPVPwPGF1vmCECDrWzwHiVQaRcfts259",
  "key1": "3nCR1bZtMQMz1coY3qBX7yinfUzozdWQhymzRKTZEiaktEb5gmoMX9GWGuTEuwhMDVrPjafbZA3tEwj5hPRh7W1X",
  "key2": "3BQGdDzbFaMHaz9nDkQu4RrtA3SfoiGsyjRCNaA7sKoKum8sit8AdX3DWWW6EqbrCvKkXFg6oj1AF8X1TyVopP9C",
  "key3": "2czg71Nsrz2XRLUvPZMPqP7cbvTFKAZ3WcM2AcPfnUAgH88gbbye5hCTDQyDVXcNziCaCfKFr1x3GXzXBg5zQSsG",
  "key4": "SrMo7N4pdhw8nK5sLpeBCDxUoSKJMWQpuPKKuL7RoKiVmEE2syMuFZdyxEx8EceXBAZyUmAVnAw8aB33vEh8xvk",
  "key5": "2ofgyXbfRuFanws9Bd7E78azxDue7wetuaBftSqfJs817kisznw5YUpt59CBYhaxpwUTtjjSJMeRhWvAMmKmd8kZ",
  "key6": "2pq7yV7bGADR3seTgtTnjMHKbtzMLfZjQXSyjJRh5CH6rnXAx6H5nM7aXVa7RPfMCyRNBZkBkPcbt5b12xWaXrXo",
  "key7": "5YugWAz2uHKZZ3B1Dpvi1P9d7s4ksFZFLjLPi2CS75kcCXGfV6QSX5gyVDjXBHutC33GdU4da2VBcvEwN8njHRZw",
  "key8": "4wMXiLFR6MZZNyJMhBABpUq6S2src9ifeMy1CxrpGkqPjWBGSriwKLNRdPPdkrPcVBxzFyKGxP8AXGWJgCqne3Rj",
  "key9": "JEqiuWzkMJgbCaTayVWs9TayP8GWt9J4cVB9g3d46baii3CkAJg9qEnQrMt2DUuwH4PRK344jNcpNt3NPU7zX3c",
  "key10": "yhpXWGPFrSnK1n4LSgMEJ1G1fex5XdoYTHC7JnRFP76iqavKSn8TdXVJF29cDd4psEFf9n8TVmLuQqgouWweScH",
  "key11": "uDrTsxVCaBTGED2ex74eAd8zMGwqgxvdSJ9ZohutYUtDPpP1Ja3uWZv2sQNeqyLaZ4XKBzofMjsTVPaPVzJbcy9",
  "key12": "1T3gTfsUh5dmTGuDhaP29wvVnDvjMBshcFXf6tXVsfGQ3ipiEW4njNHZ7zQAZrTmGCCLberHQQN6Q577CNitVdZ",
  "key13": "4SGR8aA4oqUzHH7RBNz4rTPwyG3G38gMfb6CYdrw2b7msJ2SZFWhDwuFrbnEZpbDW96kDNCCW35bPuAbCV1qb1J9",
  "key14": "5S5ebN6dwCpuFkVaLXvaieMyySv4uBYu4F9e7touvakkodreMrwdmLNKmkT2sebgVbZ3YhNQEkHDWMdE9vqwdnxS",
  "key15": "3NcjCzvPmDzVLiaehWYx3eFQEKxREC6MVQ4gGdcdVf5swgZFXmdiPzVyTxL3hdtquqzFtiB9Hx3MGQeqxcXgCZSF",
  "key16": "5sf9kCAkAZCWqVTmsBjXdmEkkGwrYM1CzR8cXgNJ2Q6KJ7MQVquLf6Zjqk2Yi7AphA3NQHgrjSTcQ8Cm6m21NxHR",
  "key17": "458Zc2ZNKbnds1C6JKHFsaQ3j2B8XDN6DXh12af7WWRHjsC5hp3PgaLG5UkCK1uvCatfZkXkyEeD6wK6QPA3KbDL",
  "key18": "65C77cmrCuphYRX9SeCKHPxZMggUiHFSGr6YnXhcYvpZDCcRyvTiDePaqxqSAVoJ663eGfNAiRQdYvadN9jz2V5g",
  "key19": "3yHhxaSFAJNmUctMzpRQFR7j8nMro4rvhVoTaKzyDB7Kuvmtbo8tt82H8SB4dH8Q4kQvcUciK2qJ21LdC1ZWhsFT",
  "key20": "4Ph6XwpDeXrEJzemJUPWZhVGQxqNUqAEcTHVaZP91cFEPk6SfpxMUqbprcQ7SPSAA7qvfoCXB47iwVmKf5jArMsh",
  "key21": "3RJdjt6H3UbnKZoZjiQdhxvvaQa8vtDBR7NommCMiVx2tWRPPutqm1PYMqpG31ab2n1GP5MwGjcykFWGnEm9Xqoh",
  "key22": "2GpqKZqDxU1XuGqbSrWcLzm1UYMPdMeQzz46KAtUDgKhNPkhhLrZ3Xq9LMxFSTxjqkuvZdEYMHHTxZzBcoF6jJ7j",
  "key23": "2uWNCMQR41nt8X7qWKV7ckjpeVNKHRDVzWcjWe9yAMK2znxBvHMEajCJckbgeBKCaSEeRsew1EMhzivZUyyDyC5m",
  "key24": "3XwBZYhEDQGAQg3ZUEqM38sq5yntmvhFhcMDDPzPKUk4A1gY9zKdkbZCqBNcQZw4K74CiuLBmt9reLPBHVPDjEds",
  "key25": "3kCNDHYYqcVz1uSpXfcmAxmCZj6qu1eeRNhTR5DwrgnC1RokaYdEr7saBbVJ2veTSrWRe9GxPuGmAab6nrX6mynx",
  "key26": "3Gpnqadw31SCmPYQn8TgZ6RE5seiEkCid6V1u74BqR4PBHFP28RkKydE8Y7uGQtiFJXn4Q1oWgxSAGsYW9iTPBX",
  "key27": "3evSxCqH3G2hW29hHxipFiqKnmvJY1joPkAowxF62JDC3oVSin1VmbLaV8Tm6oo5RwMCiugonUW7DCtBssZccmrE",
  "key28": "5pvYcKSX89UkyCyFrhURna9aHZfARHqhFaf7ik2LyRT41wAAACoGassNMh1vbAUGM6SQ5imAdnRygMRyJCTK1jED",
  "key29": "5apYJjSVtTzLksZ925sPbqMyBCopcn3v8iP9UDM6KsnJ1UYqwBcvNwv9qKE6GPmeVg1woTCPbYtagynb2PYFcyDz",
  "key30": "56zbow76MRzpj8na1oc7Zpj7TCCVE6PamCjd8Sf3nxVzSv9CmzASHWMgGaHWUqZF2psvtr4jhXpSjsBDjbKXtMcX",
  "key31": "5mL6741kQBXi7BMqGM9nZTU1vYz8Hznpy5NLijDgipneycGNUHpD8HPmWdHrd9eECqYfnxmkY447tj86f3vZvRa",
  "key32": "4oH7wkwxsSTumf4WW9ofXTbqfgjiZg5p9jZU3o1AV6y863jXAMYiu6NxdYxDBXbtmRjSFjgSfacdpeKR8BgcnMq5",
  "key33": "3dFiRBfANJGqoHjBssAjBJSYCMfVbCe7ZcCLLtJMy3FTf46djxMKhaKLuGJqA3oecWRuT8pMvbzviJ5LcwuxYoWW",
  "key34": "3KWajYFFRoDkUuhp6WxnxAJaLd18TdMMdaJXXk1k9hFrBCe9VzEy6HYNYJbsEHkod8ZUPhULDMb1DnXVbT95TyXC",
  "key35": "XYGYRTUUSEqgjFf6dMF63ZB9uhqVRzS5J9NCT8nZk7UHA526cq2ZGmAcDsdgp9qVAd23bVpZyXSgDHT9kBLaTTt",
  "key36": "49LKez9W4MzHF7NA2cYwJ2oEm2Hcu1jZgW77BdvAMaBFqNJbZUmeZ4ooTd5ir7R6U3EMPctPsCzTGqnHWJWu3Pyx",
  "key37": "5zbdGbFiNZZ9vU5wpKF9YsMSMoQZ9HsPBJnVRjyiJMCP6VP6tPsPg78Nh4LVvDczEyjCQGJaYMcsn5yfv7QmpMC4",
  "key38": "3ono1i4Q43S4qtLmYNMiFJqjukXQfhAfBsHcgptWAvQbTNif3qYqyrRKX5dw2iRdAshRbTzPHSNrZ7gf5ofsHuoz",
  "key39": "4bcxj3KyvkzDu22DwA7s4UBrMBg5JrhDYa8EJiM9yH8Pg5VchZD6Jj8vvNc1YvEFdKaxgBZowWaPhaNxTE48XUHW",
  "key40": "38edstjCSxhjTbVRZ6V81V63XPq6byju2jN8xv2KztpMAZ6f234qSquXszejHy4v3tzgh3hkKjXiYQDQSHvyPp6o",
  "key41": "2AUrVRwKA4eFJvn5Em6EWa7s846yCBv7TsFok5PRvCgP8RxU6gYs17P3SKVCEsbKXVwUUpBx1WuZwaSGwJfBWQvC",
  "key42": "3Wj8RtZa951xNrStSFYJUZMAUXnzZsKhi5i1nB5vJzg7MzNpvQuGurNKUjwDGX4wruGXKQSjv1ZzogqN9uVBB59",
  "key43": "pJUyV5Ju9PwERtDiZsmNgqaLTTEZAKfkn3P7y8ZaXDK9pE6s4AWoKehvtCCRPKqPbKj7nRMAeoJMzcbsRVMrZvD",
  "key44": "4kMi3r7xxPDuCDLYMWv3iaagAjyRxNR1htsrfK9FRiuABFJahQLufGfmqudMV4ynzv8pF9ScvL4s7tJMHz5kjdRQ",
  "key45": "5cbUWttyZr3rotmYqR1hpMhZPQraYYNY9gnMgpTe8jBveXFAJzZCgbi15zSuMy2M9baBKtnpiszcEmayK5xPRJLZ",
  "key46": "3JHS33KhVmCvsBw8WNAp2z1VripXLHFUH5ET7JNP23axSDUes3UDw3AoDFF8A1pDVSvByrqiNR1Jz8wqfC8kcFEg",
  "key47": "4uibNfAdgqSNV7Rhwna4yPmbtbcX5ceLUN1qijhUzz2EhwyEogKTgZtkFHxc62ZpujuKUr5cPBW1iCWGmEEq4TLA"
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
