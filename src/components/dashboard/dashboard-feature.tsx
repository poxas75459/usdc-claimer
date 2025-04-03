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
    "3Tc8ZqRaYMniGy3E9ZNDJiwut3nRNpgS8fJwxBD9E8nEB59qE71Q6nss2wKGp4c3orEs6os1WFuaMiwgCR19YoYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tG5STgagR6vgVtdMzUU7SeGMtv24ZKCjkjkeCdEuD13EKZwwbogv6TmVeTAyhLu9yixMoK3gPEUiPmc2tWXzfp1",
  "key1": "4qD1NRea3mXwmBNJKtXxzX83aR8GmSmaoRQAJwEvCzni59EBCt5rcJWmzzg8taEpAwdSwSKSHb4VLQMPMnxb9rn5",
  "key2": "2uXkuNmEP1Xtv1mBuyK9WRwdPxKvUCrTfrWhfeE8NVmd8qFcLMXSAni1pSqhjD9XHpwGFiNApFXN6vy75XAs1UUA",
  "key3": "5pFYiE6R6knsP4mDN4FEVrY7TqTti1BcrCH3bKvUf9mtWjj1nGh32McvVLyoStCQ4UxT1HZR1dP8CkArZ1xuhMQC",
  "key4": "bYvFTJAUyrmryABEd4vs8qTytrhZhPJpkhTeCv2Wfi1FJKqbu1uj9hZJyd9eLPgb1RvBi5DdqSXnXnopp43XQ24",
  "key5": "2ZJVQ8KQaSnnVsk1pgRGkg9Sypu819nATrjMrNAaeEYBqg22pWv7qWZD3hmuj6dtyFvzuRVyQh4xbFhRxVEsDTkB",
  "key6": "3cf5Zj3RNrT12VBf5V6u2g8w8dA5SuzjGF3dGhQVUWZDpmKYRhfsUeXDzRt4WnNWz4zgfWqb6f3dzb3c4aLpaDBq",
  "key7": "45dZ6LCCRGgDoP8AnvKx6st24eefmYdJTTQQjb34dUfwXty2DimWAWymFC3mFnZLYpQqQxiKU6Znyc12EPjynMmr",
  "key8": "2NvnLd22yFetWRRS7b1svawoTmrwhp66KoaFeaExpP9nHCssz5wTANZ2nb1GruxXcrGcrvSFg822vvWNDpNC6GCf",
  "key9": "Xy2i2Ufp94awBh63Dto3NitFJXjCbdeuftfXZKpE2FQAFoFcHM1PsPmSUnWJNbieYddmdSUfj3GHJYQztxThAh3",
  "key10": "27yYj48BkfPW4Q2WmuNRTeXbCSEGcPZRM9FCnL28ZDerLRe1UANEbtrYc5U7iZFUJaLQsT1hrG6bmjJrBy5nivHk",
  "key11": "5wXhQzsHSW5nxgxHMSGQWRTonoYFodBhkTPHt6xjgzt9i91YTBBJi3R1npwGQrNYGHRyZq2yf13xxCxi39bZZJtC",
  "key12": "5WAEfzDmrmsrkzPRDcpv3fEQRthaVVX95B8BPqu5e3KUreVfibrHo2Ghy8Rq67fLHfFmcudkwu4245Set14usgud",
  "key13": "5PMA3rVrDjZB2GoHS6L1qnsn9mSgRVVfKkdwvTRueepfhXW1LEBkr7Qay4HektThiag5LnZWPXiCZ4uPVTHsYMNH",
  "key14": "4ApyQcteXHrLf76AyQA3DZE6rHjbHmxZH3XiLtEcQNcSMZoZ7f4kXqhCGgqR9KdkG8LhS2dVZ89MwXBQFFnYnRcs",
  "key15": "4rPrmsDFFNPVKDPdQaRS3jTFwpiBfP2doMDTPUeBC4wjg1TpUYPS2ZoEhDwojk4NRaDScBf2yL3cP4P3GRM5hmHb",
  "key16": "2oPL2i42QA3kYNQ9roMsM1zEFr9zg9UgQ2ZDuRjHEN6amXaYU3XmG9H17RKSYhsYdbu4qvZBCgK2bqyZPy1msGEd",
  "key17": "53czsAJVS4uNyKQVmUjTk2mjNLEEwcityBn6Fepkt1P2n1Rr2KuVME8tP9DyBQXBCdtcttdMXenmxpNXyc9MX1K5",
  "key18": "VH9q6PpEWwgKShUTDKVwC4seV7JUJ1RZUd6nYyA8HpfvjmamHma5aRfGpTp8CETDJUu17qda2mVEjYL7DCfaBgr",
  "key19": "4hJq6Vy4aSeg4jnmgEDFx83cm9S6S6dH5RMjkPQXWErwskNyL4UnHgR6bZT3AdBhASZL1BgbkfX2NDgFgCYAkdMv",
  "key20": "4VwAKHJ7ZMYyvRYGyoXFhG6Wk5VLxQ49gXnTzdaegG3n9ZSgTws5SG7vbvJSasVorc5uB5YrbTfrEc9Yx3PRkySU",
  "key21": "4janbhhcM5X5ad6McXMvPzdxCNXcvTAyJwkGw6hAxQh3NFPDKeNCzH3mVmW3NHcqyZxyJyvHdKJPSUiYYE9ZsVGy",
  "key22": "35bppRqnp8TbmR9bTw8JHo7F57PMVWLhiHL8FiuGqQQ91ugpLvhWGxnX5wimrWEACBFxn92Y8T1ahxCKcQg1xn4o",
  "key23": "3qfKTsVkqgFeoK5KHtCYsMvGTeD5yYSHBSHSogAijgSQR51QMdo36rvVthMx4DZWqCGkeuQbaFTri9BpRrQxxDn8",
  "key24": "4uW1ckCc7czeESpd36XtbPyrgBqwCZHaMoexTcyJDf8nnTHiyLYJdUm475XA65JDhwLDunhZkthwKZeyDPcekrne",
  "key25": "3fNVi3UqxJYf53UXwg8KX348NCRbF8mGTLi8PBxVKQLdJzLquLgYooDEeoniKjcctr3GbkmvCgoCTpkeUJBDDqZ2",
  "key26": "39vzHUj3iGBER4RxC2nEE33SWXmYm4KGSKvcb1zN3fnPa6PS36vj6aFJ2xW5mpWseqovfo21MdHLSohnZY97FNTa",
  "key27": "33DGLq77DGKE8rPqFx7LwsqPD2DtDfL7Dtnrzbsv6HiJ5aUDXNqsyF53BHmGmLmGE46pwsqcu1JYUZzAEYuPo1bd",
  "key28": "32ujPQGr54mTYSHbhchjScAT8UdFiHSPEXV5FVGHWSUMymTu1CGTJgv91TRoqt9ndz1A7HUgik7KHBBVSZQBCdG8",
  "key29": "3vetp2am6stdvZV5Vk6dasW8iufv5QrYUM3d4QcPWo4heuFKhsjXUsnTKn6djE7b8JivC9qEKAEZRJK46uC9Syxr",
  "key30": "3VKTsDyfMYpGx6Y2MBw6cF6apWYos7E7ZU72eyBQAKpAxggWvHkKnznncupoKmgUrdGZAfDoaLFHYh21R9te47Zu",
  "key31": "54aVWkh6ym3VNA7zk841VUFGdqzwowLWomWBquxJW28BLAtU4mSAvBu4JmMp3xwrt1yA12AhRryC9emikNHYvfmB",
  "key32": "5f73JeLSQKpBJBByfWjixNYyYwr1pF14WmoBDSLcP3wqJRTzEDwHHGsPLk9JbRFG9uDW6Arxyuq3npswWgbVqFrZ",
  "key33": "3rq63nzCcD9Q3YYNonDsrcS8fm3vEVN2MDJ2MJUwHCjKUNtFauD3ZCF9b9wgd1nbNVCADzGy7KrbVKDVTwRWrFo9",
  "key34": "4WZjm9y7CKUyJ3jTMTVuFutTbfo2KBBD9wJypUuChsxrqAzE13Misj6idUGFiHUCWEaweC2CE5SyWydX5x1brEuG",
  "key35": "3T4K38fHVBVXACq9Uf4B1hP86CLukCx7L4py7TVzKdgswpmMz8HqCfJ2N1KH9wdDUVSrArKhUWmAoadMpTiLzV58",
  "key36": "9LVczctt7oUt6H8Q4fhdcAhUrEw3YNEgQE4nRxFxLymBGdERkBeGGuQ4rB9nnpX1Dr83WfAsem2B4orCRoVXDdZ"
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
