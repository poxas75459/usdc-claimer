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
    "rDiaYfknDGnpeCUEUdXNHun5Gcje9kJt3SkCYy9DmdzfkP86VZSq5YdMAhVbRtTsRrGFKGqoc6E7NsMvApNdfnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oM614hoHizw3rTYuyhwqE9jHY2MTMEg7C36kreXSKU287yL6h8a8u7SEzigCUzKCNdYMZ6PPAUDWEF1ADbCEPVF",
  "key1": "2UkG5CQrP5Ct8mdADbXiJewBjBAhoFVjvw4Lnqiicz8ULWS7wUVjeSGs72i8mR23WZN87dkGamwcpSW9jbEZYR97",
  "key2": "7ik7F94UVZ7vaN3zWT1TwfMiDwU4beK17ADV5KpHzxhnZ96g41joZQHzsMCBAftSNY4LMGjiPJ2vWRj8a6RpQZF",
  "key3": "5jWBEFD7TsMYAf1Us8qY4wfS1TadsBKDMvYuCwp5Nw6BJWp5HoCEQbHtvcLD5m35fHsoYWxgJGTz2KivScCXCs1m",
  "key4": "4Evg58bzc3VbZLgX7uoZEg9SMjq3mRX4Gctx4KhC3jsanq452wJ1AZNXyLKsqKPP2wLgbi7qLaw8owWaAezRPeiT",
  "key5": "4hp5TJ2XhSjWSAFJaJWzvNBKxjSPWaw1oXtLSb3cTz2QzeR7KjYkHYaWrBmwJfg8sZT2wabCxc2jCh2s5Dzq2drC",
  "key6": "a5wYwBfDBzGKEsZYCD8a4Jr2j24wSCZuTNNdCzgozatw6qCBUoxUbXYFNfLUA1zCLMU4fS5uZzf1zgosTFC5TSU",
  "key7": "4LQCnYBAJec59StDTWEjW7DE4SRZibGqo1gtNQ85WaQxpFnkK3Qbt7XYUxNwjf6WukQej6jhSCw9hLqN6nfyZjAs",
  "key8": "2WnN1fD6DFntRT9we9ED1xmFsuyKAToDDDtQGB6P3gVikLUH9MhWsuC4DCFkynpG3JRiKwsVoktDoJW3cShawN54",
  "key9": "5FCvunPFogHbRVHFmkgt6QYXeFQjWzVG25UPpHA4nghYN7qw1ooc2NqE9jaVS9co3rE8DeGgborVC1W4hVkFkk2b",
  "key10": "5GecAxXYWcJFYTDjxoa3ahrDkrbt2Q3PpLbVJjw9zis6r25FGLNjQ7Mkbd4Caywu1tWjqc5CRdKsvezFPhrSvbe9",
  "key11": "21v8yXEfwEhLEau53hjAYAfcfKc6gxdLWQwZWeLnhMXaun3oxx6unaDwBcfj1RucPbCQ7iUzwmhN5PcCYAEQWvTo",
  "key12": "2NTgYyLkKNpSfePane2P57fwANwwHxooKq8vZuSGW7T6b2Qtpeb6QwTaYMwUxSHWWaePyEWk5KAext482LGUY3dv",
  "key13": "3ahbTrd3w49g1yhPJcaWn9aY7fLGSWb4BrnzuebvHc1b3CbpE6ob7wMdrHM1xXicUuicU5mN6G9CZokA7HYUvTh5",
  "key14": "3kmeC4X3RRuHL7gdjHT94k6t5nJ8Ydcrm5EGg8HraBLPxbGczyQpBYx8hstMxSnW5T8vd2MEs82gpHykhrLw9Dxo",
  "key15": "29o44AGENsT8Vx4R2WXE7mDYwLjE1c9cMyZmwCUMMEAm9dUzrXq9QzZ5bSJCTLThePyPt8gcy8k3GwjdWc15pf75",
  "key16": "2RJrjT2DaY9p1X9YTKSAbkQsNvcWyQzYXJUvxTra6VruaWwrovAmMiVCfNKjPKV49zDiPPVCjmpx7rw4MM1YtU82",
  "key17": "2onkQez17xyPhuWcPQJLaj4ZRAkVL7mxxoTjnmRNUi4pdqSJmx9X2tdbWBzaHF6qZjNobQHZZSo6zDgNingByvLw",
  "key18": "3QPmhHhUvUE59vjhoRtGodFCrUxzQwBTf6rqhMu62ZqBfzES1HHWkz1TuHRzacKsF5XCvzM791sMYwPyh5JUHB4s",
  "key19": "4VWvQtNfkiSAsukRnCc6vLQPhx3kQtcKoAiWyo5yBMPV8JVHFawsBUy3SnWFdHCCSF5nbZhTT3NjLL3d8PYiMVok",
  "key20": "5HuEYqZu3cxo8mT1cZqj8U3tL8eJy7zwBahGqHu8zQhubZ7e1tx3ejGtGmTGMbJ17TGEKnMVP6qp3wReoZrqX4gV",
  "key21": "2Jg2trvedMmdNT5geVMwT68buws3RSNiS8svSHvtUFmuyG5hqycPtdbCJ642DPLtwy39wxS8zACVdVSh8ae6ybcr",
  "key22": "4bGwQmyZzdadxfBcZoWMMBSwFA97dwYr1Ey81GUfyg4YBAWbiE2Pk8UG2yGaaVsbqzuAbg1KuihbzmdnbeBDJhQ6",
  "key23": "3AQ7poUtr6PW2qhWvfRN6KmYGZ1JknidxDfGMR1MNam95qwcrWwyVwq9tAWXpuAotuNUNoNp674q4Vc2RfsTARV",
  "key24": "3H8Defq86uz9RDfmLF7xeyPi3GMWkueeKguSyXG7hWTuGp94eoQw2iYGJAUGY3wvvpkqhb6yRDJvT7PeWFsL9nXN",
  "key25": "2FNQoM6pKyRwJNK5rJUvGzc9yxRPcmhmas3Lct6QfJS3Ka95MwyVSVjsuE5azCu41CSGGSFHm86DGGXgXeRL6cjR",
  "key26": "4RxeKTiYTyzTtfdv7v8kuDLeBaWfNcxJNUbkwcgUpEnvmKHp3hhaMZePU1V5iHXiHcet8DZoFTgqX2pnW893MrWR",
  "key27": "XMBPMrW1BT9JKXpMnTV7sY6eZqKL13gnVZQDz2SKtXztkWia9Dt7LSDtCjd3RUzxgccSBdcbD5VCHDTMWHmQupu",
  "key28": "5bwa8U9JKRYJ2fNBT1DG7BPURt2akrrFmoojFVoTXisVNrazDEJDSJRuS9rhPEcBXpPRKU1Qh9wphqD6yrtuEF91",
  "key29": "3NtWm45FnH5o2sm1XV4FtE5gETF2ho8frEazJ6ntFRbchW3dYHVrTU8QSn8AYfr3pUUzSpd5JxWxsbiAXzaEJLhQ",
  "key30": "4BynXAePQgFKasvhZJboaYpKpvW6Sok9nsC464meZZTLWHquytdDzqkacmTnkMsLMbWARzLeU8hvgFGEvK1At6ad",
  "key31": "2jHzmegiRYmm6G8V3wjv4K62vwwf9UJYBqa5dn33iQgmPuxac9NhLCtaYyeN9mehgZHF95TfGmGy1TArFwmYZHAe",
  "key32": "Lrcw269f4uG8U8rS6FLEAekPnp1ucHbwh2ofpyzcTbwdoVhtdopXMRMjCws3uvNDnEY2vuyrMDtvXM8KYd4u7mn",
  "key33": "3bntxPUgkFLbBw5jwm1Bfxk96NcRcoDRWTF9Uq7ExZHYi8gjqULPN643Q4QRe7cyJw3VjPnfcYymQzysh3VjwhFX",
  "key34": "5rMrvMujS3NENory6zcdTjiA71JpLWTvPW94YaSnFnE6aiWyzhFPFYcCt3DfPhC9xvswgBRzRvA88SPY9xSsSY5n",
  "key35": "4e1F2LBoPB3MJHFJvNKsAxDdRX4YbYdyXNkyr9GJNkcbLrSMeW4cgMFJXkoUdsphygF2xGa2KPFygEJkTvycShxu",
  "key36": "2Rn5ERiiTc4gteQ2b2AGjsmMfYeHuo3usv9sMuiBhop2B3cTfe18rFpFxUEdt6Ga7DTdn81FXEymkt97u6Pm7b85",
  "key37": "3kjirnCuNvWZtuZgUkjX56rA5Kok7WTVD5S2aHkLJmbghJfXv6z8XVgeY2zKE6PkivzMef3NfQRJsFhbQhzCfsee",
  "key38": "3CxsQbKbZF6exwr7XTaP1FeGDVUnWsLdrDq452arwwdTPKyvYofoPkv7pA4mLJ1sZ1iaLdqncotCY5KzkEcLkhFJ",
  "key39": "2VwKmQd52tmzPakwLoLd9fJX33Ex3iKgnFqHU4BAyk7HzsJPmTHgvM6Nkqv1Ai6umeeXQwoXJNFUQXe42VnB7unp",
  "key40": "3L61a63xx1S5eMvtWYwUYBVJ2Fr6MTjKG31euQD5dJ4qqpq3xNt7iqjpYJvSzUsqCWnwrh52UmfCkWYdu58kojrs",
  "key41": "43xxnTE5GKE7fnefsbkztGPjnqyk7LDGSEK4Wcsr4ENPRH4ySpwKavbyVFN9jjrZkEN4ku2oUT31aDhNyaE4Uagu",
  "key42": "2orQh33B1zjcBuZg7wqQCt3jpqjJ9Frpvbij38dvkT7nUx72wXaxDqsUAzrVo4BDkrdkKtQmjxXiLULiS5mfce9H",
  "key43": "2daVrgyU2KzpRtC9CG8yJHVPJ9HB8oZgygd7cxZjzjVwGBQaHnXWs4oPoAesmN1A2CopyV8cjZ8Qeg4QSRrdwwqs",
  "key44": "3qKpVRP9NdtJ3nCZ9YtDNa5qAp75qfRZENW7faTZv3REWU59dY7PuTZfMbPVL6TzsxuLxmr13g7RVB4ZnKMXVMj5",
  "key45": "5ufYtceFp3cWLD36kRrKuVnmqC9yikkE15k9sPt3GcLSwBamGFcsLxnyN32wy8xGGQGjDEW5BDznYhJHzMV92Lmc",
  "key46": "2dXJe3qbZWg4ShCaNbw1ngAVRymWY5e9mTyVkVsVKFdwsS1BCWjE5iYwwsfG7W6tWYn1ThgMiFDx1bzKsw1nKQn7",
  "key47": "3TvkMhJV56ENZHv7fq1cxGLR5i5Bab5J95nEPHTDtqZV2YpPdEorcBrPuPJs6Nt39DG7wJG3SpBMUfnEAbXS3e7C",
  "key48": "4CTW44oDa2vvTwhPunWNXcrgw3gxXm633pJykveLqwYnVMguTfMC9YY77dxrUhkFyr8tPWk8RDTSCYnCyFD2Bv6x",
  "key49": "5q86T9WtgomQPzPKRKzyi9hfvnaiQhzanpmGXFoxxwZmAREYJiQPqKxgs54euAh6rAd6jyPe9StmJt29umtzdwQh"
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
