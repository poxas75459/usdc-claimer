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
    "SSENJCNMExaNYGvKWodvvVwJfTau9BjZoitvLqeRQr2etghzNS2Fc96FXaW1r7ruKvDq47Nx4cuFo1NLkACFB7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXzm2aPiTofoVhanh3R8hpcd9NbQCUCfybNwPNsp1yBUBsvVRCh7QNtHm5LVRbPAQoAHr7KpmddpqoTtRSE75A8",
  "key1": "48SBss1xyr9FWnCGV7UfdRJ9ZAqDFo9xbM9kpndL4UCSC6Qk2zYBicJQLG8THHo2zaGFwXKRzNPb5N11NiB7keSr",
  "key2": "5Qj1iDRAMKGMTjtUrVtWJKdMoCCynMiZF5A4GEH4hW6N7Sq6m5s6FWXaxRHdrvJUWo74vQVS2qSZcjpB38VVXrMM",
  "key3": "2gG2M7TG73EEiM82heHEEnqFYmn1ZNVgdXS79ZzEtmcSpZpgxAmN19nigSAbUDeDa4wjTN6zBFYqLTveq47u9DuJ",
  "key4": "4JsvqZ6UQhg68NiEJte3BzxbSmAALP2kA9fiYDS4p8S1AVH8EJpRzQ6zuBxXV1Y4TF1oxFaZFz2s3SVaj53PoJgF",
  "key5": "2zjiAE7hFi61wvWKZoJeFxsJMxC9jcmU5XVbuNYAra17QjsLizMajMgR368Dis5FxscRExAtzLwZSTmpEc4HcUnT",
  "key6": "cSWv2abT5RvpCsGrdgYyDk6osmzAWrjjkNkQe9UbjLWohA4VFVeiQ7uaxPkMb2o5GKB7iu835ioiqexQ1QqSR3R",
  "key7": "2ksifWGoCQvY7su8AsyLEehfvZAnbFauj92ZfQpwGY7N44vTJWNnhojNd2YoaDUXdxi2WDH18CPmDDYMMgaJj2xU",
  "key8": "4JDGx2kLJ7vgXhixReLHLPPRJU8rLQ7NgR4U5hAgdrnXiD8iFcMDMT2awmBzCLPYJNm9xAkjJg2QoGExCwJayLXE",
  "key9": "22aa2ynSoYu9AcqtfDftizuE4WEFxK7JS3JtThh6dBXJCoyV7rNbpmnmjBW9WKmMk9cBG2Bh7B4ANYC1U3HuwR3X",
  "key10": "21e9DvRy9Mz9Vez8Dhk8rRrGkQPX1462Mvygz9GtSpVFXzntFgbC1tEVUwmM8CRqg4aeEMFFcmUBuTc8iQjMKNpL",
  "key11": "21kB3CAzhzi7peiQMCqx8QkfsbgM3uBmZdoaxoPnm6xdn5WcnBPu3SkiTsbqGVRewF3k3hCtpgwxcv2q8B5Q9L8W",
  "key12": "2Ct3Ja5SrULX38hvUD3f6Pc5tHVnKMDGueCVv35qneXEksqr27ueCb8Ank4hXYWU1BBQTBHbCoJsVvQwP52KfZi4",
  "key13": "3CFMts2PPi4gTZHE5UXynxyuucAVfNG8JG8mFx3M4Wy5vEtWJjcNP5spT6LGhKnCfzKE3UaG4PFZY5akwAvgUcN1",
  "key14": "3jsm2N9fTmpwD43QjnkNN4zn84E97yELcFp4qEZF2Ek3iYZ2UmA8bambKvMLe5kiDB9wLxpV7d6v7NAcJwRCPXQ",
  "key15": "2EkmfypC2ofZNU6ESKXT7T4oTDcTZmqXh47yDoFFpBwegVnuTtSfnqTPVazhrXgtaCCu8SHBBpnZJYz9TkBzUA5c",
  "key16": "2cCCGWa26Gwb3wkX4KXA6zkgYPiusAjzVuX8axpP1KmrusEZDQH9vHyoU4VayRJq5BBppk5osbhv2eHiYvhhfeLp",
  "key17": "3L1aog5zi6QEmGBYSU4FfNrFxnpDnrxbMZ29ixPidGFErmsdmaH5HPSz7mSDCPoU7k81ruU1okyw8bnxyKfBWTfc",
  "key18": "3fK8g3r7WT3859QDq4iBmcFzBSrvajVrCwA2pfnKPyYGw1S8nzGTzf38HZ67bcHZ5K971xoAdiMDxiPqL3PRspVD",
  "key19": "5U16t4iMb3FZWECRS6QpwuRFJjUCyi8uPNGcLACKmSrHP1PFiu66mZFtUYatTu6YdYEr8rAWu8WjVz7SZTAc1xLw",
  "key20": "49U67bBpTczj3g2un93FCZVmPRcRks9jEBv9qpfgPLjWyXfDH2Qgjtf1WDd5z4uxf98HKMfBYWDZzQTRc48oe1Pk",
  "key21": "29ja8XVGtCiBkdfkBmxgcXc8WvMAHHeuFg9kVA74Zpj9U5HXthxqVsC1MhMZ2bTRF9GUFuqoCJzgTqUw6sz3Qs9r",
  "key22": "4XTyqWPp76PXELXF1aaerw9tV7yUKFdCxraxf7oKmp2aveo9yLHbqfaXhbnHphoTt3m7z6NKYFQm4db3VcWPq7GF",
  "key23": "55M7dtdkngsCGfsD9CQBvKcGJbrrMHmNGT5ZW8pmuocXQeD1jAFFGesjdKVEcMEq6bNs6i2psH7AUUreL8Q8oXZo",
  "key24": "3SZq3ZwTtkWBEsgMmdKg7KBmTwiey94ZLuRZB12iXr9ccUBPVMYiT5tW7crCEBwq4e61DC4xwHaWouD8xPLACimJ",
  "key25": "2xFvyCNdgb2wKQq3w6Ar1cLehvc3SaPiEzoNCvPQwB1fr9D6hxqg3YfdVcBMzfYT8WeCR1qpuXMLtQduMQjPB564",
  "key26": "622DWy6ag6QNzTW5B5GdHqMXkxX5Pybgyefod4Kvy59qsJiaDq1SbU7kEcAD1U2G3wkUN6JPXEZa2GLfk7ZWmNeL",
  "key27": "2su6ox66fTNV6aDJXZ3P8wtX6PbZ3BFqYD7Wiya3G6C8wsV8B1UB6FRt5NUFmf5mBikLDHXBurrTVA3W4wqTa2JA",
  "key28": "5qriHHbdCxupExCtq3GH58oLneHKrtYiug4pGF74EVcEC9yo4dXx4fwTYxR7qDX787ddFgE8piQq3CWhy8NET1UG",
  "key29": "2Hufhk9iNr3EhCAsUupjjTXiW3msdz1GzGHe2ph667DAmQqWuvhpjpGgUkWoo3QpSnmg16ds9MvZeSYa2XAV9aBV",
  "key30": "4YyeBHSCtyfh3uHeozwdiAKQggX5BQZycWfSNuhdJRnHa6iist3kmcb5sA41hFftJhr584gP9T41AnYpau5gC9Gc",
  "key31": "5MC8T8uN14YkrCbLLbqR1mTnorPWbuWn6pMHSkaC6h4SZciycZQ3YysCZDj3RsDvCj737GF636bA4u4teLFQm2AH"
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
