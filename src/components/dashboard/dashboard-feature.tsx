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
    "4jyjY3RDTCQgc64FhKcpaijhr6YF6Y6LzuSS7sBSy8ZLJ75Rf2FtZN3Hrv4scBdrsWiSGJSPabKE8xH6vdRLNrkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ce69iXLPX6p7avNY4qEpoWJeE5J4MnW8bj3jdfcrTPsXnBepBPMjiDuBNyr4qaE9s4uie5dD99tuQrKWoJmFwXx",
  "key1": "2roTQj4Zq5DU52iCNLSifpSreJ8AHyPX7nF75xmX7321t3fFhzmAvRmKF38Sjmpb8xecnKuhmhhBj5mHvRB3qSu3",
  "key2": "2FymD6A1Uph4wUmWs3LyoGvHMj7E2wdUEa9Q2iG1c3kSgU2RWjzXVjHhGn4agCxjz4UWxe8CfvmBBj5eAXk9fRan",
  "key3": "67AugsjGZ73L1n4sY5KBDyDBM3VHVN6a9SFvptq1ucMH5B1x3BWLbUyiJjoS4okLhxuyAEX16N74UjW6ZZCQpmzM",
  "key4": "58P6Pq9YvJ25rFVetVr8WGy8CyDJwtt7W4ayFeYaynFs1MsR4Dj2tGf6GSzXFsfkEXcy7JDEtv6gy2ZvLNAJ9v9v",
  "key5": "2eKmv3xYZEVJC3jKix5BRfJ7dZEbb66Vtj47tT8PWptQbfnYoEz56J54kE9DFhY53winJPrWfpHDhLDtk4P4uCUz",
  "key6": "3HL45NNXvNWKp6YK61k2metvktBYUmAvPdFyeXc1PT8anWidhdzYRZJLrjPXCenGgu1Ns8RKcYtVMGxH5RxqF8Zm",
  "key7": "3tF4QZJsE8Bf3pVYA9fGsbEH8bUMXGdQJhX9zyASiocFCEC325Wru3zxBZYBkscRbPb9xT6HvA2i6vYhRcZnEFk7",
  "key8": "2YfXnpMPMoZzGUGomdm8NGLiMHG5WnjBUo7m7V1MZ4nYXwzRRAYgSLn97DFTS2zvhLTmHFAV83ddiXKwvRpcTZkc",
  "key9": "2idVQHkD8c6pSsiJ6pVQjMv2HTVECdZ5cpNe8UxAZ8JskjGYGJgu2hExKWP3UWd1eeLWHCwpM2m3kv8J4oX4p71Y",
  "key10": "2f3tJuVZSciXkELtATJyEHCGs5rsN1NXiVMStpB5f1vDG4ygar1uPP48GxTVJmkaszrsRJ7nD77dZMMYFQ33fSYz",
  "key11": "5kJtGkUNPQmLrVy8mMf24bmPf6zzdr2ELfKZc3wpAy29v9AcT4mzAMGA4nVaLd5QV8oJtq7CNuVfPZqHW2hC5tfk",
  "key12": "4ykfp18Ztct5dhYM4Af5YKtzzDZZQu6k1YdMM4wxzDrKBhAiK8YZghhkFVCzwgMPcnGzeZiGFLKSVg2woxT6rGq",
  "key13": "5wrrDjHP41f3WsbmCL4ajX1uYpmKFoHphfrFGFtF3s2DTU4HLzmSsAGVgdLbMz3buG8CHvS7VMe6DUGaRn6kt1ft",
  "key14": "2a6rdiuHDBvcQ5zhoJxgwM8FtAajo6JTvVhqsx4TBLEzf9jsiDAwVBGtYUnRKFPimBt9w1MpDcwFLDy5yEYcXrDz",
  "key15": "2bwHAp5oT7USnA1HwkGs8imb5v7Lw9CmET6Re7b8CimsmUXQ22UxqCAdqE3W6kEYhKpA3SVThRj3LysJEiPFTLpe",
  "key16": "37CAum2Zq9sCj6U4UT1yc8KdzW8AiAegLJ1fUQSSDtjXNW9fzZhV2SN3EWo5QUKjJr42QYKxLbpdqE8DXXzryjga",
  "key17": "5UYeVvLa5Qjm8WoVstszvqeuXoumeHep3vZDqDS85vMxnwrUYuk74ivGNAoqJHZ66bmkhLT1PLDscCvNMdYeJwEk",
  "key18": "4o42fSgxe4q1BAouDahXc3CHW88p2WCCMSGsUGMgGGDrAteaUajHSRS4NqrD735jfmETU12koqwDbigQzb87QQjX",
  "key19": "283aFsNAebTFDi2R21TfD68N4iVguaUxdpjPjLL7cqVfvmbE8Yz6xoBXwYJXQ9zw3W5h413Ypneg3hxw781RqzSA",
  "key20": "2XbUVDxztUT7ceWSHABKmWj14rejhdQW2JNp5sow8LVCdeiYHv4HHYcAaLgnXEjFUkapRWS7K6kR66Q62KcXehrB",
  "key21": "5DTGqieJV9uvQCXz5ovSPW6VYJGqrq78ixtx7f9q5BQtisUBiDupYVcajrTqgLCMqA4CSGzTh2rNzkCc5KBQTU8R",
  "key22": "41Cw6uGf9HvKUnfMcjYkJmErvmUXwrGsJU2d7EHxoYe6mvGqYZ8pMrfB1njdp4axtdBArXyJN8ehSpqakqJia7dV",
  "key23": "24Ujrx8yHTfgGRRfcP68bZGCA3uNJc8sJYdEMfPMWa8yMx8hR9QpKFNZ8CSyrxroMFYR6zrGirwXtBK9kvrFekfT",
  "key24": "hGTNcyXaXBFhCfQdEpgLcYHywPLTQ6bPMcWxewgfs31JH3Ru3c6GmqXauSiscRZcAXpLXFFJ7jkSWSfWR4Gs7fh",
  "key25": "4gL5mCd5EPZt7R62ea4re8QizpAPk7pQhTKFA6jHR9czpkfPNirCnBJt7fVfDwFdwCwrKgBN1DPoLvvQmX2VYS5R",
  "key26": "2mG7D4dGUM8pQiDe9NJtmVwawNzyzBpmrzp9jiYMsGRXoEm1akoESzHfsbuT1AyZ9wRfZV1iS3cJBZKNjSMcXaJd",
  "key27": "3zqNFPnjqoaAN5Xm7zn89CD3s3DZWGm9DjAdj6KjY9SyWJBXWhDcq3XzfzYYhp8xr8uB5Ze13cjAGePt2uCkPLxh",
  "key28": "okw8F3Wo1ooU5R92kyJKS2NS2fF9DewRdsqPnN6ghHTiJE88gDmKvDVUsYPHzCjjmkTopu8NrJzfuCUovsyWUvc",
  "key29": "5a3nENbfGi2B89YzLpNFmpQf8EuMzP5mzscbAqW1rM4SXgnquMimSYgrSy7CC2y5WcmtgTyUZcJNAtyYbwPCXXcV",
  "key30": "52idmCGrJqwDCzP7i9jxea31EZfZy61v5N1frcETtV94FyswuagSXGGCKb5BX5VyYVwnjepc6W1aZ1mQXMbVSFdJ",
  "key31": "4w8A5tupdHkLwLFc7zUBqFaVt4wE4GkU6EA4rv4vFqRnCv1jwUUeXS45qDnrJiagQcaeeeaGdNKG7EUG2zH6YvUU",
  "key32": "5gbqDmadGAQvGgty2CM7biJHAmaCKvZGGUmUdUXrKorLfc3eYwsGnpdmpQEQ3srekg9NUt9VKc8n3y35dyckEG3H",
  "key33": "2Yf9ZBXUTZmR9J2ejxwHu9ncb3St8pYN7c6X9LKsazzr6FqtXC37PCzmY1qNgrzxFoKZSFddZ5ea1MeTubYvpvij",
  "key34": "4ftQCKhVF24j7TeWNL3Tr1mWXsGW5dwcfmRhPqVhv9Sk5Byc3mQ1DmQem8U5aJHYxNFhti126wHWA7BGo5G9gChW",
  "key35": "VTgTnh21oNTf8tP18J6oC5LgzhWppTVCdKwfnuBBU47MC7K9rjWEMvyJtK6agpZKVaymkjGHQrE6DkWrksNz36G",
  "key36": "27v6X9U1ZudD6AJyu5RRCuZ4QMwhkCYGqa8vcea6kJcLugFH4YZC6Ltg2nHdC2MnmR9sAQK8oNMB1ry1xkYdundy",
  "key37": "3D9cheQz8eh9qiZccJYdW8UhXARannqc5t7oEyiwWFQEvGxoiAmeJia1jXypdz1bH1pyDENazPRxteMVk7EMbwEB",
  "key38": "k8HeWz2BXnQw1CB1R2V9xjQLq2BQRXFy4vefEDvipnSmin7XuJGusUVdA4CvLxgsBv6QcfyGCwvv3xtfkNZc81V",
  "key39": "5JERngMFEjd2xtJGJPTSEuGkvufsxxXcbbcWPmHG86mZebB2YyBnSGeYDuqCSZ8h5jrxhqTgQir72RQanJWW1ukR",
  "key40": "2LvzcmjcxuU4JHGJxnCpSRU88kYDoSUjy6emGpibxome5QvXPWUDHTtpoUX6pX3uemGGb2waiw4nbMqucY1ysqDx",
  "key41": "3F3noivyQJrq7dY3cKL7FWrCHddwprRbf2V99HaLh6zNMD9eY35nfD2kBYHXzL97AUniRidMaueQqCHNRwJBdomT",
  "key42": "3QgfhzhUhkwYKQgzmuwqDkfPw7Hk9WoJn2jcV58bJjtFq3EBm3ZrWt7eo7mdS6HRHRmgbT8erMBQ6s6Uf3AdkzEg",
  "key43": "5yRFe1WtGjGiHH2diuMQPJwdvvFyhwisyrwB9FDGyahw5c8nwKsaajxFc4NcgU5CRHp1t8bELjhL7vnPy78DZZAe"
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
