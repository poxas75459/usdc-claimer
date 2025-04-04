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
    "b4FaoRVu9NfuymChMMNQbRZduUJgZk79heVAbqcCzWNLhDvMNfVChaKkRLCRXgfrrEDVyadiA1KgR2i8CTM5BZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkGqqbRwfSLy8u9Jf8GkbYXbWepnqNg9uN4SpT1reSuf6gU27SeMtep8nXqtSFwuUdxnggHzjecWyo4sedCaUJi",
  "key1": "3zVLPD3P9cUBsUSMiCNwc6cYggqRVcyqhcNkRwZPkKFSJWByiwkv1c7J8aJ9b9pXNNMM6bn9Loo7VQFyKnXkqXTr",
  "key2": "5RrGY4cuRRBWbyPPuqc2XCutQf1fjcnnVciyyUs9BTj88SR5ik21Vc1j13D7i8C9KHoYhxuVrNeh9YLuWjq5r5Eb",
  "key3": "3FWiMUAySajzcyf69qwqBAyGE5qAdMbfcxbS1ind81n37XUa8PMjNbWUdr8puLF3Z9phxk5zsWSqnpsY3upX3d5a",
  "key4": "7jufD3sXCR2Njt89mjdnCXut3B1VsJRULcowyR9HqmtayRemYoGFoc4cG3kxZ3qBSjhynvrZRQ9Hphuhwku874S",
  "key5": "23FrJ87EZC3howwBkbKLBydd3EwZxUjJbgyAjZC9ZsSqEJUfPb262ByyFTbs4dQAZkEt6yQptyPmKfTMu8k128dm",
  "key6": "2Q1NEmBDom4u7vzewYw5RoXtFUU1KNbS8KiWiRHfZeFJcFS1QyxGCpz6fbjmdGe2vCbgNxyVR3nacgCCbxwxuLgJ",
  "key7": "2k9RaH6V4JVuNWHgb689y1RL794ECwvL9Sjs9dTFQx6VNPUn4oAn471NrbC8ydNTigXnczHEah4mMdLs8QHBDdVq",
  "key8": "4FcPRrCP9fRqQDNVRgJuRNH2Q7w4Ggs7La4pYFvPHhMh5iuFZhSct3W3wbV8AELkjdHSRqiV4uY12ggFDizZeq2S",
  "key9": "3k3vCaEBc89T2gkmwFSAzigJ3wEMzzGFhTSjYsSdnmB2m1ZGGp28zg1KPTyNXfpp7gkpgDyJ7KFFat5KBEGx7KqQ",
  "key10": "wQaRVbJyMvsA6CcsrPARsDp2iSAbh9ajBqro2aMkC5MMBRnudDKkb3gexmL4tsPVnZw5vox2CeNCSiCnXuyK7GC",
  "key11": "2VsSfbRj2KqdPY5LbeFRjushqkqTDHgTjJiHtQ6EMHS4rk3ss8WuAuvMCb9L46eLG25LzsNhrJpsXWLJMsBiHZ8f",
  "key12": "5ki1U1w9wY83HHWbgi2fB9uYw2XJodagzuJY4z3Us6fKUSS5bqfnfgfGuVMnQWFWEewk5aJTKv4DN7fdn2WQJfn2",
  "key13": "5BeTneihZtj9E2KV5Kf6MU3ADMR1dfsmEMQzW9zZAegbxRcDHevgswNxxAqgaP57XanWTXNMyPAcMokAdjAaye1p",
  "key14": "3z1yXzXu53Eja7HoCpXLxX4cVJWSHA7SgyuWrSScDyGpRwmx6AGjUPAXMLAn7ffRsKevvia1xjfBGzGpQ7TTMA4s",
  "key15": "3HfziCbwgURhBL6F7ZE1pFvnmR1cF2Tw7u34hnXaPghnhuoo7ENaP78PgGFVfuM1uWi7uAQabFUWYfJ1FiMGCtS5",
  "key16": "123aqmomYDXL19S31sgT9cQRMBa9aP3ayvUr4eXoVrgEip6asjBt8rxcHbMCeQWq5FGXtqSF71qGCPJqZb6tqZHc",
  "key17": "2YW4onKDu4MrUXHArXrjaW96ikJ8mK2RXa1DYc8bd4AgLHZ2DYwgESXjcX6fkNvQYfQA6GGi8efpi3KtAbmG9BbY",
  "key18": "9kvSWntpyc8cMmj4kXxbewCKpvrxMttpnL9pr8LEZz8QCYBjjYN3reApfoAa1qogJdbHFMR39D73tkNjUjPeRGB",
  "key19": "3Q81zbx79KRpH7TNUuuNSrpjekAmvx2i3aqpgz4Uo7PeDvTxpwVe4MnNxskDsGF8AEv98j43mntUoiiEewRj3Mg7",
  "key20": "3EzdyhFzmswu1A3HEH9NyuGef3Q1utnzgCTmTgk4MEqguUN2MFPVj1wn1rBCNqJxo6g7pdntNDWzNTPfeLUdf19X",
  "key21": "4SkMV4tEXQck74YwhEj5qrQBSQ1LeR8S6cxjDzzMqoR2uv9F8xxoaCRN5qYvyM1vVXdqYMacqX1oUzPQ471PHRw5",
  "key22": "5jSP46CdyewHyn5cJgPJHpd8EhqyvJKYm4oxFrDTYgkHF6JLaBYZCrh2WUDAcRioCKpQsC4wkMDQ3svtmsudqiao",
  "key23": "55Eqf3AZZERYtX3s1T8Tbzb9cHfMCo2Ze7BQ9itHc2g9yoof8WZHSou4e37D2BUnMhT5vHeUB8vo1JnDDXd4BYco",
  "key24": "5bJ36UuegN1UaLLAPYgz3RX6b7yJtzHpyKxdwMhJ3YUiVZWYYe97rMakdCZTA2K8PM6Z2BbM14WiCPfriW2euXAA",
  "key25": "2TRyM7Qydmgip3WtwYTdTaHf6GhYPw67KLNdVDcZBFKVRQjbYad4FocEv5iL3gh11EbKihfBLASMRGuRTcdb8JxB",
  "key26": "W4aNsErw4odqSvZKMMt8KEs6yp46JCr7oWxFMyPPYJifffyZzkPeq3mqyKhnJKvz9MEktdccXvTcfWGV7b5Zaya",
  "key27": "KmD1SKMfF9zQ5zhDFPj3K1ehjZ2gWCMBhe85LZTsXBPKJeVsiCQVKXdvrUA4HvPtiKDvhEWvCwzWv8CNudGyqpY",
  "key28": "USacpegvoAWCRP1MMdNwBjSSaWJHfmFpsP5Unc4wHwkYoZUdqvSrQVAUdEBtQ4TAPF8NxAbcaQb4i9yN2dHnsdq",
  "key29": "5g8XTeHtHghFB5CrzQ2jvMP4ChbQFERyaGtLDfxiisHWTMa1PEH2ZmXoDSnexVVbcaY8NPjt8FNvaY9YecxYw9tV",
  "key30": "3tHuqhWsg46DuNpX8e3f7HNSUbPSR2K46TNHcsZbmMwTc2pBakNCJ3z2iQzGGvB8H78KDf7q45ThuiX9vMrtc8JE",
  "key31": "4HS5tG5v7aJ8cKeSzw15awShRxtp6BgnuHeUbU4nz5HyPGyGyNkfDFxPrqwgh6WVyb6YMPzFV9KSzBf3VmYtqgEo",
  "key32": "2a1Te5LeY5Mg4EwMet8tqBKa3ETdtx1DZRhZS1cW9JSgsWsSNbH5iHAxP8y4wXrR1VZxJCmqBBb5suvja8opu2uB",
  "key33": "2pjWWrbapRU9q4JvPj91mh676HyBsFiyCD93NpBEsyQkzd6MwCwez1d5MVSF66S5V72zfVgXh2cz3SdfqVmtoqnZ",
  "key34": "2HYbDJ2V3TBE1rNUpPGdUJDy85vGuZy3Zte9m4P3ynxTHkVKYvxkqaUDvREuyackKr5BotcjcT6GcQDtGTxEGdgE",
  "key35": "RzUvMQoG8FCrXeQUNuyTivPryppiXQSGrbrDoxig56eGJaroCnMxyqqLgftZtJqPvzJGzFiqh4KhnMcc5ggi23x",
  "key36": "2KE7gxLdhQTpCdnF1DxQfSnHT2rxJRbPV7t3fw5xhD54rbTANuXeCWfrLyw75dQ8VNZAS9iaKhqsmbnGigUMMAwL",
  "key37": "451XtZKoX65dG287R3y9KA2Sd4gXZ1PEoxDkwh9FQejKffP8h1x4xCAzmmAEgBipAs96KwA3mRxMaoTDMxgWPhAt",
  "key38": "2Y6V2gYtKN4rhjmRGgCb5P6ubzC5yHfxEyEi1VDPGMitatC1bkVmjYWnsJYRvnw4G9vZBo9DyKgkUWpU4YCkuaJY",
  "key39": "4YnQ1cRa3QKRX88jAhPg3VtzHb5VgSaFipDDuKhD6omxv58Yx5dzr5pyLaKRF2tiJWC5XvxdPrm3oG5JhdTGsHAf",
  "key40": "22dy8syNHKZL6ZrD9y7ASA5PRWfDv2ttXiKbLtvF5AuvYSRZH9rB2vUTCi3vEG1rqLkq1bi26zcwAMSnGgKR9AnK",
  "key41": "3xrmmJNB4NY6yzhRUmbopTP7mZohEHuVNcxuEPgB6qFGfkB6s7qLcqMooaJQi3KpJA3cEDu8ByLM3JPwE9ZKqruU",
  "key42": "61PTwGY9nqyCZupEV2JGiyDJhPs5JKr45JYmumef86D7gZ9yVZybY8JH8MuHbtwBPisp3crCujcS982j5L5XFzM5",
  "key43": "5PVoAjYs7PcWe4bzyQ8XwV7qds4rWiGC2zwe1DxZpZWPyousJLhppJBtXnA84pbybV8H5S95EXXxDWw3P7KQNvoa",
  "key44": "yas2ihobqi65pSihU1wVxQSnkyk7Q7bToou8Rmemde2mRULfTmWmdTcZsQQF6fAybDSoJgXmpz6GUL4E6XjCz8J",
  "key45": "2ukg52p6knVouRdwFzwT789cLWBnE9AMcCaMmq9VwnxicNSKt2Z7GLDfKWxVz8FTVRnG8bhg1ypX6fGaUPkekyC5",
  "key46": "3EJFtJ9qobR8rWQY9WNKyKmsJ1yargdEtaSySNKpr5vDBWzxKCGgSGBeVgWR4HP3zamuGUqDFV5BfAeiYCBGtHki",
  "key47": "5uAMy9dFTTmT9dg2e4B3rmibVuNpbcH142gLAYpDiuXShz7ecoHF4ei4kSjqdVE4A7nfRTpexQ12jnPJPCUY61pR",
  "key48": "3XdfLLQ2j6VX6b8oiGrBx697q3BqALFoaUbgcciLHGP5Av2aDDwyMhG5LpmiL1XLSPRFX6XhXEoUo4mmXxPXDXs3",
  "key49": "3MB4huTE4cJkPD6wm45Z7CGDVcKrTTdsmJ4guC9xnttDDx6FZM15dZCCEKkeukffmbojA2DZjWDxgW71VbPyuJRx"
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
