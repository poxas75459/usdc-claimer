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
    "4rwBNFDjrMogn3SDNXgtCBL2LMFJfHBFMNgvfr8mtnxLdKoJyDAQdtYMujEKfgeayvxSj4Pbthn8D9oixjpJZbm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mfvfbhJtQF2YyGeWeU3dKVa5KURM9C8grZPNNfhJrJgnLBkEcouviMn8m1Tv8zUr94uCcsdgdo38DqjnxLbHt9D",
  "key1": "5yhp99tL86JyT8PtoceUY77b5pmWhR5DCVZGwLamnuX7F2ptbbAkNmyDJ6E3VkNa2VKgnc6QHwj4r54Y65EoF8cb",
  "key2": "xCtDJ9ijyTCyqSuoM25rqv2micGcYKKKsyA2pJKw6g8LS3tqnH8xP7YEXApK5y7CtTPaYM6aeXncikGHy5UV2Nu",
  "key3": "43dPK1tZyGb3AWe6Hvq7BceQ2PSJijBiWhNqiRpBhTMuwQSHP2e4AiJDdDC4xVcQvcpMoAfz3r2AyzdwhLNkqqfd",
  "key4": "2CtCUjcQtbqoTTervTaeVb957Rt1CCUJkVzWiGhwSVEnw9BJ1aLVdr7bReFyoSy1yoCgw9uWMRKgF2ZToXUah3Cm",
  "key5": "5ViYteeTcMfYAP5bQwpU4VmCJQMbqCbuj2ZcmdAE2J5PLjH4ko67Qiy7kRPTucoJcNot6ayKzdC5G9mQwmupnY1t",
  "key6": "2n9hhP4XoMGduHhSWuTvYfVNzQZtcTQLFVvvDLkgBvc3uZyCmYSDrsN8YxdiX2PhiF8GfVwfYVjNA4svBFFzWZC",
  "key7": "4qnKRwXFWwmMVyvwFo3Sf2qUPV2SCH57miK6gz3brRpksdsaMer8gofNugnpDSxbjzNa2ZSLTp3bH4rRvNbXaq9T",
  "key8": "5tacyWkbnh3YtRTFXQUPPZNo6XzgFUtVccekQrasimn4Hb17tgce1fKeUDQPKnYWmyFxHJSL3RvBTcgJCd62XoMe",
  "key9": "a7szPi7jtAUd37HhWAjcgmxfG5TeDqdAVMWa3YvyaHshfnswgXi1s99zpKBL1dKeHuUhjM76wCCGfKQ3tcmFFT1",
  "key10": "3QLrLdrLxi7XVXztRBjHHRgVjgNvvvmdbmpy64QtyKPfemJPfh9iMigj3Sx8aTqQHBC9G9r2p8Xret6S2GyJy21x",
  "key11": "2hh1KBhZurZfCeWusPooapLFpA2Vr3gpoKh9J9pHyD7BHyAHzBsN8rSmu8f8EHx75KNK1DNAn4oiHUiRFF7xJpNG",
  "key12": "2FweMmMxYgjJzuQc9t5oYWyr1HFE6YwbtbgRBRpFNdy5WAhwfMhJFyyGwoPBUMRMsmUjpmjnPyzXPfUqzuf3fsJc",
  "key13": "52FJ6J8mTkVhJp2532C6VuQc72YcJETCGWDKWpYFBF8Uwy9ccXbsG7H1Mi3hZvfr4gMRjBvDovhaRdqXkWjpDnvu",
  "key14": "2oaWWbNnjCWcu6dZ9WTGhgNnB7Hno2cXzEVMvBpAf7EfmPZpKxvHSaJPD9oY1iNrw8LZEWwSHkFwqFJ5N31RoBH3",
  "key15": "34TVpnASZrVkXCDqSFrtbjA6phTJFHNzUt1mQGmAZAWKqZdEfz5LyN8DXpHf6yfmoqct5ogkKgoHMHeQ7zZmMkBY",
  "key16": "2M22iVuVuXQbTgWN7uH3iBAqSsMvhSKFvUEYrRd7GG4HbUZbVHhi4kP6giNRkdpBn2SJQu5kfj5MNgwDRB35NCzh",
  "key17": "2Hm6vBwwKTQN2P3FiCSdRfXhdasCKg4Eewj3Mja5RhE4S9P1nzKraKaVbVsFhdQDGiwfHjyj8r1ATzG1rJtYbLCx",
  "key18": "5BXBmtt2oQassuf6KTdP31tSMxL1p9Cs6fiku2VXNcafSK2k4JyNKkXwFwkTfPpEroECmHpcpSk6v1B8UhUtYBQ4",
  "key19": "2VswQvtp9TxLHnf62R6a47QWDjTtWc518zRcDuo8JLqAQjhMExBdrPFw24HYNY2ve9NiQ4xFUCtLz7bqvpZqZLSv",
  "key20": "3dfGDaruEptFFvwHmSgHCQwMu8SiyVq1bmwbUagLkBCiEJsoscENp9rh2K4MwAR3nGtVXrygpVQLVc7hdJuA7qYG",
  "key21": "NguzZHCT596cbRzQHAs4CkQTYTFT6dyP9j9eveZ5pVDNr2X2WDpFZqW9gnrc46Xvufpsj64KKP2u99KNVJAYkrk",
  "key22": "2pTCndLETLMCgWkLFmt9WLcN5oPc6BV6etStm5fvn5jQ7EDdYZUjT5yxWMCjSB9HnGPq2khADBTHkdbkLu5e1W5h",
  "key23": "37TvEwUsLrpRnYwbQtsDP7Wm2WwXPcATjiC7NeDSFuYztL92NTrMQupNqU2gqSMAmkdQg3iFQ8n8hisjrHaZ884w",
  "key24": "5L4uam6WDK1gxmnzJWbo77ocAtvgpWphCRdAwVMkchusu49Ac6TiCV7aJZWhZT3s5sNvWiUgruQ9WH4foZ2VCB3w",
  "key25": "2uSHKvWYuob9vFLcXM6ExjRuMVEmZfUF4F8ixrwhQJz3CfEaGZbzPxxxs23BDkuxthz54gSZThtzADUvR2Yq8GQ4",
  "key26": "5YgQ658fbKDCnWNKVzyLefueXhoEinLVop4rZXX3yP7LE7f38gyxDc9NMpfwr1ynPwLaSvkZdigNqidefbjttYFU",
  "key27": "4V5JtSWGfh2ufnV3oHn2iKmv53scXqp1P2tFxrVtAKWHYxrZjTE2rGDqaizzSPpE8KvdyD3LPVbDp7eadFexrbGa",
  "key28": "3tMwWcQ3pYhWywcGUb6LsDd2EYXDe2mAQG16RHTnXGAjgwjPjRziMXuJ5VNW6tQfXvhk6RqQisUf5yWPQUNfiwxH",
  "key29": "2NrZ541vqhnLQZYi9mfDgRxFLmFDXGG4rJDB5Z1jggZakQjsNwW8qW22UUAHDyEG46GkMQYfbTgj7bWh9fwh55E6",
  "key30": "4Egh7kAd4iY2Lc99cn3FEeLx8VyhSpza1did7GkRvUnFj5rcTuhAHDzZMW126buTsvF48gLnmyckv9enY3gJ7p9z",
  "key31": "3tGne8jqkpdThzN6t55ffyogXEkmxoik1onnao36uDgrZM8miK4698bXqe4zkWZFmSwXNDhQson6jyfo5jADcRVd",
  "key32": "noFJ4ZeHNVgmsyUKSq7FVZt4gLCV9KvwWjoeqA1iNbw6JDXdbvHGhGNzQAQtS6J1TTT63vSvpdo5GW5kUGHDswy",
  "key33": "5Dejx3xvreX89SdVqzeBWtq5CXbkNy3trRjFbom1iTT5UcbY1AnHDdnKMniFnanx5ZbdEgH6hFkJkmhwdTg9nJLd",
  "key34": "3kPuZ3eSiLT5D3M7xCH1suAGaYJvBNS2Ham4j37g2QmmvNAJyiWBTcvug3dSNrzteeU5gPQ4PuAjd7SyWv5VxipJ",
  "key35": "Ftp88YcQTDN16veJ6cERgsNVDx8JYewysBTWNMGdo57UBKmMyL6RHP4AS487GXJcjeSbRew36XvpBtvVxD8tQZr",
  "key36": "MWgfE4DHYm8m1iNa44KVoPsWSfLDGV32Xa4GWY7NaWQy7oJv4xDQfz8w2M8WJrcZbrbnxgvpoNUmXrnG6hCL3pJ",
  "key37": "24s7gN8pmkgdvEppbBzCNtUBbhsKhofxRLKfpRBRfKKk3ZLrX88SeZTP57NbnpjXcuJPAEf9DiUkLs8YjexJwbkM",
  "key38": "2QNufisyca283H4tjGKHGETqUsrtKVTUFhhT1wdkffPm6J6dD3VHDgaxCPLss2kTfnx6MkaLiFYZgSN5PgjH3z7A",
  "key39": "5m6P2QzaX9UGLTz2PLeg9rDmwnH7Ud3rAkWRSVfpdZwmKtQMG7pBYMifVgVTyPkSJsyQ5NNDsb567tixvEejzJDm",
  "key40": "4SqDfaVwHJEatB2WzW7dQCZYh8Wq6YwzqExPS6beyTWkEbQDE9bKYdMNsiQiRai7TfDm47A7uV25c3cUxwqgyKX2",
  "key41": "3LVFUMBjCfgtjwqX2toDNh7WP3WMiS3hT6NuufeYijPLC9bNmPTpj3nV3n5fJ1ooWy6SW5MHASqAuBWk1N3rrrTi",
  "key42": "5TwhzsZnzVuB5vBGo4EBQfL4eE1MutCP6wsyA6P5qe4fDXgyboVLZzerz5HRp26km6chfvuRRy4Qtgu8w9XFVjs1",
  "key43": "bnYo1f958v2bodqP1fyBcYVoEg6xgoNGvTypYZ1jtCTSsFew4KXu81TJRRBQnVwzH66PhJNMkWJCi2JL1ZXREA1",
  "key44": "dUmVCyxF33Su2wPfPYF6wGvGd8VQTrfzigbr6YHVLhGY3cLHhG7Byr9vwmRU8JNguMnbFtgSCLyt6iqCQcjQgRd",
  "key45": "5R4tjjKQ3w87Qpo4mjzmsBWNqWXy681aASUA5fcdeWEnM8Wqg9caMq1aG5wKKW8oebYS3xZx4SFrwupksCPGwgHP",
  "key46": "5YxDDmkQ1GPWT7W9m3SYUetSQSghq17AGEtmbZEmD1AraJ4VutrZ1UqmR4FQveAsBS4qK1ANkKgvyvzji23pBLpK",
  "key47": "4L8QmiHt7q15KbKRmhPrQgWcipMiedCG66FvEUeTXb5KDh81Zcf8HczDmQoaDr4nYGyQ7vevao1ZBKjRComVRm4o",
  "key48": "Xj89f4R3XqocYvYdeELvifZnwKtu8G126TNd53PinjZoydNscS7UWrfzSWGg3GyCF9PTgYoAif9NPgxhcDhLVMJ"
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
