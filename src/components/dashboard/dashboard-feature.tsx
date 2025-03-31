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
    "2Z3sDx5nfMgpe4X5BoEXskomka1yrG9DyRCxM8Tcvjr3Qx9TwKyc1mFNX616W8DN6ncYfmgYzXiUqHveGnfJWrxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zL4uy7cu4hJDCrcgLMBjPfvrevujoxoXtmid28NrJiopJr9NQFKWsPhdk79sPSwyUJKXVJ4yAef1dqwNqymG7Yj",
  "key1": "5123rgosX6fszL5eT4GFz22MWFvXx7Z7foUt4FjDQueiDcgjBkVnz2pNbw5LU4h3haQrcYs2iGm8TFin5hDDrgAW",
  "key2": "5SExkMxB8E8D29Fxd72PwZJtCE62M9Y3AkZVGCuAh9w8yYaLNo6y1FTrWB5EpDEdsuwe7TT82AenWh6PMFwB9pZj",
  "key3": "4LhAHWpBH7vpzEuMh9jLQck7paZ7cGKTL72EYCZvrrye57ap438P3WfV2wjEvcGnfNBFRXaC7Lnh8WxeK2zCkggi",
  "key4": "R7acD6JQB18oUAPdwGuCX79pLbkEPmSE4Viz76T4sXmCkxViP64TKD5koR3zhJak1hRMq499DEQgXHoAjy8TSHY",
  "key5": "2zuRx96i8X6onhNrRYwAy7BoHyygrntp7BGwMbFoq827ZZjZ4fmLLzwJ81AyytYWv9pmjhxv1W4MG16PXfYqet1X",
  "key6": "sk7UBRAFpZubhoTbXGB9qnaXCxMBLpu9AHwfmjYk6Y9MCUE8iwdCDEaniXdMhA8u84e8PZdAexfyh53hb9qMttG",
  "key7": "qmNuScBNJP3sw345F22L7b6B4j43xL2EBpptYzw9bY5YstxWx98GDudCewWQv3ZuT3zcvwzzuJJkfJaW4dARjHB",
  "key8": "XJQjX9zFKqN3bE1QS7vPoRiFr4gqY6eNFUHwENEAR2MjfaKyQiNDrGU1XFmn1n9gayL6tS8ugVo9PKiaVmMzavN",
  "key9": "6hh3bf2FRrkjSEZrLzj15mppY1EENh3Uz8Z2jf5QJhpKeBeNTAdC7MPR9uVMW4HsZfhyJZP1cmeGVdWv7x9XGUS",
  "key10": "5QkEpZ4UJADe3v1tYEC31jUyDw1a1r9Kd3Rus3tGiJ8jNnm2nrDtHTiD4TYFqd2N4AYTgTYCTnewoQDYUtjr62bF",
  "key11": "2YP9mGYPuRfFoijycoHa73eTGHHovSfRqQ2XAvGQp2cDNW7TtswJVhYRcP6rt2JbEXgK55ETPSR4yMoK915vdFc2",
  "key12": "3mjSqcTm1yFLGqnQTnfKNK6NJAxtiA6EAuzcRQfvhYHNoL4W4MprHLxv82TWjc7PSWYLZAXPtQb97Tf7q7Ar1Mc2",
  "key13": "5GqD24C7FLfRzEgkCSxsmfVddwSAW7jvZz8Nw7z46BZ3cLByMnWmdMk3y332HpZsaqgbEC69oFyHSk6YxtuVJYez",
  "key14": "5TftJYREsjqukgajvicjnWR8NoE5VQ32yvc1Bdfsqr7vTFnLfH7YgZRiMhXX1oknexMTpgCXShmt1DH14mM6ZRTo",
  "key15": "2PcHjdbT9fMQfKbgfYudos2ckrdr1Nq9Cr2Ucbf4zucMi2GbASuwSTHtd4j6aPx26KatHwKfdezEy5LrrGV5SiKK",
  "key16": "2f9U9CMpXpWrYhrLyfHrYZjyEk8ZP8WfSEXvMs1vQ3EwNS2RxmSEP7GchoyhiWqShBZmtsnvu5KYvzSfaULmqLp4",
  "key17": "3BuKoE6rRD9fk5GkD8ydWiCHNzR2PuZaL9cYs4Lt78MfGVrQvqWHxiLmHkXvYztZ8zDm9F2mYsHSR16nZvSawiE7",
  "key18": "78tBSeqPykMDL51Tj3NCU9o4TMPp9diMcAZptmC9gor9YD39Qrqh1qvt4tJinNqj6wNJ2qAPow7Yh97vHrtNtDY",
  "key19": "2vhRpEg8SavUkiJhA9CttnfgaEoidaThDtHYJtiQtTWWNDBjwLdKyzGyDsGVuVeAuPVzAGyp1R3qcELdPMZY7vAA",
  "key20": "iG9bHWWYvB4AJKbveyoqy9xfDqhbXPexVMD7kk7rHpJCjvJDBmNrcoqqeEJHWNh6FvrFvk18E7HqyQDmHdWuNFa",
  "key21": "GsSHCuYqGioMxGTge21dagmC7yZmMgXYZJBezp1N5ZREsh1ACqEnac8M1enPDA7jzDWg5A1cY9X3nmjFhdHB4Zb",
  "key22": "YAxcN8yjKATq51EjySTX4NXzVBy17RwtM1ZiXCQmNj1HrEGQ8469RV81hQ1jvQrnR5G1B17BnqPNzHdgRb1XKHh",
  "key23": "3T4xakYviPFSfSjshNVNjYb45m15TBvBhu7eTSP6kXHt1vS43ZQgUXTyjQpHrUeXecHe81EntpZyZKBqUYMb41Sw",
  "key24": "67Ae1SauwmQcnvHuKXcRsUbPGVJWR3sFjTTDAtkgr5w6ug3DZTEV9m52b1fwSG5V7atqwa5EEEzKDPnjayMX4LFp",
  "key25": "4xZkMexitvJCU9qjfBQJjZQxntLssgR1bNezJZSkAALaZ8n4K3vYwwuQpUTADBGoahDyV97hKML9K1jrqvHPEoyL",
  "key26": "4gDjXZyuyoumMjPNzQmi7QqHqHR5PtJaabEvwrBMxzVyJ4foLsmBXQYEwGQqSbkXrAPp3RL8r8JiEXjyDytq81mG",
  "key27": "5DgM41XBbRLuy4fbd4jR8KBKZVFkND3LPw4KC5GsMGxgAay8ATNmG3Ew5ja5Qnt3Vu7Yx4w6hEbKqdUX4dUNEc62",
  "key28": "512QdJn157M8Cui8TTa7j6SPZZpfK2F6W62hwufJXsm3HhdJM1N19pF35FuXzaJWW5c3zx8m54GYsfazbRjkjWf6",
  "key29": "SdirMEP33sPsQFZHKqz4yAEgKMa99y1tztuowowFzpCM1iV2UKLWeXVPF2qFh3Apx9L8oSRygxrrWkV1zgNfvSz",
  "key30": "2cP94npZV1bpevBRTNBDTyPQrCfVKYWkcsR6gQgxdbnqpd759wc1h6pUnVeP1wSGvKHVMgwez2yCzGWH5mt1fB9F",
  "key31": "4Rukw13gipaRn4vrcBzojvjXwNJQDmYo1hxwZfyL9xWkMiK1BKf3srdiiBJsuddsSibK1nzDrPqBrKsgtMFxe3sL",
  "key32": "4wpkJeWwkMhmepZ1SXduhEmoohLVjZHUXSfW9Rz3PPt1MRwV9EB9LrYdVK49hUzqUC22ZBtVkTfvSunTTdWmesBP",
  "key33": "2pbq9FUbcVPQXjmr8VpS3XBxXNHfw6hwxk3D3daWQmURS55xLnxzXmsM21qRcAvFyoZFFmMun7JKCkmEaGK2xPbs",
  "key34": "3gUBLnKTfDzbXLxzLM38tMEkqpXDifSgszv8QPzn4vyeT1YztSRtuTLGock61QMnm4u2oQkV4Mu8zymfyk4k5Hjm",
  "key35": "4CiAszmt1VBhvestDDqbxs3scWAB7RGf3jd4jznL8UgKJDonNte7zZnLFRQ39dMs7mC9jvPvzATbeDfy56YeMGWz",
  "key36": "3b54RayCwfAMBRM5dTapmqetxWBTzFxVkn21LAzYMTHuDnDxdBYSuKPGmv3EA8AoBo9DW3RYh51AjBfj7v8NWMg6",
  "key37": "49HiGJYF4uEAnjvQg6NBKqb6Du9LwWFJYUpy9zJmmedRnxyxaurH86YsYiH8Sha1xN8DFgoLY8pWMvgFSSVA6P7r",
  "key38": "3soTM9YtZ8yoTfMo3dTRq1NDB1B1kbMhxMv7gSgk3gfSKnGnhDQN6gpTWjuK4jZZQLP3G4jFviU2YqeBdMZ22Rvp",
  "key39": "5ytCfwy2WByHoyE4JM9A4uPr37kVTwvvWeBaHTXhKWRNvADZLiaEXccva6uZ5GSMKj4PgQHCvUY9MFFA71ykxqxT",
  "key40": "2XxDxZKJ8mcCQ7RcJFuBc6Hni7qM6dP8dzEsX9rBizt5U5bEeyrPwkyhCy6yarYyXoyRjovuEo56y18H9TuLJ6zK",
  "key41": "4zXzsdUaQ1VJdHUdt4gYVApKP9XPvLHfso3UG7tedA4HJeoa8TxBTbdZyF77CnQbX9y5joRzVpyk5PxGn1bCPdCd",
  "key42": "KwHPJqfQ3GetvsHQP2fTMDiyGRBiedJvpnyLTshY7gTxNv7xTj5rerLegfHcqjFqwKsEtgkVjizmHUsZDb9Ai5L",
  "key43": "5QDNSWxCAd42E9BPsn8MiceS8FFSrMdGNvze2RtDwtu5itMT7GUUZ9xL3vHDYWW6F6gXLM5SbZ8PdeFcBgJ6Y2XL",
  "key44": "5vn1bdg8ygyyiXhmZb4EwaUZNJmaZbmVCqHkLsPyhtJCkzGuwpLfZiChFHNLwLTwEWnZCvZph7zhnXj2Dnve5q5a",
  "key45": "63Wg3Q8qzt9eGVUoSwacgmrfzg7yobmBzTwVA7fr7BEz8EEuMKrQCmmPEgEeEhpL7VH6JMwcEXdMst4dp7F984ZR",
  "key46": "3wfMavuzFnkzSzDMUR1ZbzijCfkK6dqLZMpQmuiZcE33EWMrHq9WK95egs1kitLBPXkiUxqdfZgFgc4aWnEEfzDk",
  "key47": "3UoNgSRdZF7zLmxCmrnd2fRPatywUJGyS3XRHRN93DV7fCbRH1inGs7DhpuS1aCDGHAGeFEhHXvmS5JQ3hkPXwFE"
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
