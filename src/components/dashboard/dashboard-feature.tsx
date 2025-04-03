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
    "2HygTk1HQBMaFhMtQUfWGb9M8nGw8xiiWJ9j7BmuTj8vaZMEBUcs6h4sGYm7beeU656sevHwgPpsg7vR76hShWov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WMtMz1hyUnWvH25FevCbM1TXVck8bJB1AdGxgn65nyWnJkGFdLpp1caoAHGdaHnpgQKgc8kvSaNNwtLF5Vzos2",
  "key1": "5wAm4gJecxt7cQPLy4dF2bKFj11ZLLaCaweJDHNosDndJZJWegp4n7oEP5cAtMjyPXBNuyBwVx297bb8hHZ2yn8e",
  "key2": "5CtGceftxvQqX4Sp3fTeEEY7bVbsPLU4UFr2pXrxgQftbrTXmGXejHYbdHzKWYHQb25og6xJepe6VrAKTnuzoqWb",
  "key3": "5m3rQGn2QAvf2HwtSVUAbDDQi3UpTN5t1Rj6Za7t4zcX2Rken32tMaB8dqcWmbQsF2NcxLFLPGVAgJBHYvoqZd1E",
  "key4": "43HiiKB5DJaEV8ZWSd1iPZFUcEj4iT9gXbbX4q7sSAfKYSLCZpPj547WK5pPVfqTiKydDqMypMWuVRr3WDdjU59s",
  "key5": "3EzXQY3qARL4C9qQmFJJf78RdxLjYRojdgfTxFvU7yM638osYGRCZ3yhhqvN5kvUYFZgFuqdc8iAFpwPNohnYDce",
  "key6": "64xiosDE8M1duJ84XBxjfVZKpDooeVwuiRfDveunq5N97uZg5deUxnupMikr2hTzAxVrempmXxuJoDBjpqQH9RCS",
  "key7": "4un85f1bFoBZ4SFGXsTfhp1bnwik9Ay4QZChtgVx5YL22Q5L1pRDB4tAHPFew6j6n8yErS497J4xWeMPKEyVrTS3",
  "key8": "H43vg38eHPFaoX3fb93etVpM8TmbJ2XMT86HWHLmiswCKMPUWQKQUGe3artWXZHq7Fq9n8R62Sz5S7YXKTJs36j",
  "key9": "nQbQEoj3K3yi4f6nn3uMUETjxs43iKyK8CYHNqUFh34Cq5au8CH7JX9e1kHznfsr6xtqs5afxDSao3oCPsqLsMP",
  "key10": "5sYAiVwxy54UDtfp3s7ktrXGWZfcFCJeKmMRY6ke9ZroDQJ9kfm8J2p6KhurAS3e2fPsCDrSiHE6iYskNaNY1veS",
  "key11": "4z2BQxM6yA2bCR6ty6ed6tu4hG9q4jf5Juw5Zw2bv9P7532aRexsgskn2CCCJX1nyarPp6EMgzBYbByiEzp2g7G1",
  "key12": "3GsrRa4Ym9EkWUrvWQXXCS4HhTeav9NRKVMAPZq6yzUjrc4v6XZ9HTtSW7oHKuiL5U2M2PE94ww9Q8LT92XCeSXv",
  "key13": "4emAeS5mnCtQeWY8BwXyqJgQSwfRkRSKidCh1HnRjuMN8VTV8vYfFrVrQK9ezWNeYx1oqKmAHe8jipffALTgp271",
  "key14": "Hx6taV5bseqRkA7k59t4MiocVz4kzXoo8qiLcdjYuqpfedm8tTcQwd7isoBqqFxPqJQ3Bs4aW7BktVeibhB7Q5q",
  "key15": "3raySkUSyCcegPRxu1yAfo5wZywD9Qu3qzNXd3kY4aCwTiGU2v4mVx6r47uL79Z22g9zv9rbRi3DanwGuK477pLk",
  "key16": "4foi7pgYvLFZj3xHZ6QJvgeDVmupdxKo91Yq1eX3yXNJcHiAdnYVZ8icQFKRSPDAUfnZxVUWCTNM9KFQXd1AMLM3",
  "key17": "5hKkTwbFTeosCqDD1mpRCK1YhEtArhj9mM3iZSQPfEZv7HfkNQd5xJNaiKngAao54JmCtUMJEenDDQAoPEWhZ5Yg",
  "key18": "5TAB2hd9B6kDjsK1NRjyZVk1A2CrFqUpr13uxAmEarvvCysnFDkAvDfHVAVourmj7qoSjC513KNu4C2pd3HHWxCG",
  "key19": "22ypGmbymHQrvhsf9PRDiqk7kgdb5oc4WQ5c2d4CvF5CA7xj65fBnGuRmSzu5KrFMouGsfikXD4wYbXvNf8zrJ2b",
  "key20": "sMHstzYNe2yLBssK8VXfcuuCzVAWa12YV2gVUeQUsecXFSkBLHJ1DYmrHqabzsbBfZL14QeyDtA8FJNUrfWrugQ",
  "key21": "9QWZT3a1WKUHcy72nrDrpA7g2BG7Tt4MuT1VfeEFAGyXjzVPoPE5D8426zX3cATsT6nPsBjv9ceC3s3cGJWkFsR",
  "key22": "2cEbwn4vLB8z4q1dhMjzUhdu1T8gapuAmEgwRn9y1NSNcyhFWrV7gYN5hvmwDuLuz1vHuUca2Mzk4HkcHjsuyBmy",
  "key23": "3cun7JjjQBpHmiu7jkNVcdWtiB4pFSjds7q8KMYFwaVsoBBvv5aLJXDRkwhpDhrza7UbDtRNDeauWxF7RZkcXoQA",
  "key24": "5HfwmJqXaZDPAhXvVcPjCC1ZhPRoZppdJz4qY8gbQtiP5yTvxdH8Ya8aoHw2Cusgej72QLbaZKQ9yMuNWPWo2oMv",
  "key25": "3TKmMefCjK4Kia9A5WW5hskhJwAJjTL8iETXDQXT54nJKTrEpS7VzgyArdTdYoqvWAotwkGLRCSoUQmZrWPGsRSQ",
  "key26": "5BqrjN9hSsbTYYVimmoP8e9RWDxf1mGTuXmExtNcWamcssuLhuwU3sF7iM94yGaUQJyuhCyg96xY9uvB6YmNt1Vc",
  "key27": "4ViLXtN4gEyvSiyrF73uHGDcFC4piS8MdtStdTPPF2ehq4RWmrmk93V5Z3bcHLTQzk1wtbY1JhwkocuStf7yYqAH",
  "key28": "313BFtDuDTM2NdSg9tvK3o7C85pWC1EoPuazqbG9ShxUfK3Ne9PnP8oyKqZwjCccD81xrCotjiH6F16uDi74R9Mr",
  "key29": "4ofbo6hJxoeuEu2cU8sdPbYoTTrD95nG3yQvt2qkzy4ubEhHLDCMyCvSLc4vniQYFt7CcM61qqKSMRjHG753LkVy",
  "key30": "4ney4QyQqtKvMfEsFZnL6G73XKawwo6cDfE9kSBqxWSyWNfW6Nq2xs5JJWQk9Q3jFeTR7GoZncgRoX8rTrWdEZRF",
  "key31": "g8GjWCd7MsGbjjeRsCTqAyZxTcDEQr1oT8w1hzdxUy7YLHScHTEAm7AqbjDVWcfvfCC6M2Jch7YxZQnaxXAMG3R",
  "key32": "yFM3xZUhkDthrcty3FdeeVR5kE2AfUTifPNWPTU8LfUf3SZNhebFAC9inP5H7xkm99hbGsnorRdhfRP1aXfBojC",
  "key33": "3gK8H9Ef5uRuvfu4fMVBNZ3EwwvpPQHw4Uf1mzvqgRgXYDEF3Gbm5v3fTkrjKAiQCt2qu3aWndQckiPPFdME4F7o",
  "key34": "3QcD8UToDnhuy2ebNPS4oa9U7BypLqibcwzaAfhTS2RTv3uNTkfcn3bjxnpP4eB2ZGC8hkVYnUXzrhEJfeYS5SJo",
  "key35": "HEM1FDv7qfnZMKXCCqm75jKLoQu84ZF6LBU2jtXCKcA3jQD31BE2PLSuQTSX6rorucZxDb6ztyL4w18ZNNDP8LW",
  "key36": "GxZVmX39P7p1jziLp2S4qFee1nZzu71JCtcEH4AjoEtbiYeupakCoPmn5qKieUqR3qhdtZPr3BRgJKrPnwoGs3B",
  "key37": "2TSp2oxwYt17XSC4SkYJgWiLpjZL3j8m4X6B2FytcrXJF87ZLsxdCpMjiGykCChyAhLGnaNVWGUXsesYkUy9JpPo",
  "key38": "45zMBNAzgrtzpchyRgQRKBQBZNMei5aLxdEQkrzcow4Z9Wr8hfTTMSXVrYQReVt8TfGeF1iKTVdrXzfthK43QLh8",
  "key39": "3zTHSaDrECq5LetnrfwZcRcwV13KCZd9kPEbfgaEHWJebMvfV7izAATb5mjAJCC1zxaMNZqg2hdKT7Y7WyToBd2Q",
  "key40": "atRxjcBhA29QRA3xq1KN27t5dFHvZq23ZvYWosYSHepYMzHwmpYHcAM5FWXWebue2THyDKzArxq41432P3UoeE4",
  "key41": "3iWxjh9KqyVsTA7eKK7ykR9GTt1CvXASSoUMy2CPWX8Hu69MTzvV56DutgfYB8rbD11DW5Q4q51jeD6aKzpHT7UF",
  "key42": "4bw5PhwqihoGSP81rvQiVWJqRfAk3mWrCMnbp3W8o3fjygiK1EALvroPFMhDtaDgx1Uj3jfyy4t5F5mRMtEAM7V1",
  "key43": "4hFTgKvsD8ptwTi5nUGaDAc6QJZoW5DzhaMnLdDH63weXvNmDHhZFzTwjtd45jvUjptFP9PZhGBx555kXYnJX3GB",
  "key44": "5PiEPnEJ7CJY43eJUXV57DHDPYYPeUtavgKEpLZUUp9pBS3xqJvFJ1CpmqLBRX9RcZmkAm4TFpDk6SFFCZsx3W85",
  "key45": "2B2St8vhSvrZNwdaej6Df3dfETro4oqciEu72KRELk8jW6regUcMARuoT5md584iyXETz9iwUTaHQf2teYRREVAY",
  "key46": "5fwM48ff3eJ7LSN7AfMPj1DT5jQaKD45dtubHrSFNpepcUd56jiXVLXG3JRtQGnMGSu3qVwRKREBVQQgDSv5rmPa"
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
