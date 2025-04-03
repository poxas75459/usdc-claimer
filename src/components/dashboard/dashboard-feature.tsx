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
    "HKb3S5pyauaHch1f9paWtZpVWSfq7NEprJHY5Bbrf352U5dGoCPdgLcZnUi2poz7rhJb3kFLDELKyMNoYPgqLRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDnTvLqfjUj5Ddb6VXfqtr8vQU9igS7Uj9AU8BmwgW6Hh8M4h32rsRfq7YXnF7dj7Ytm9im2z3WHn6YaFKFNHdZ",
  "key1": "4iCAoy13uwfnpn4pE4hH52sPbMPvtLpu2CiTpx8kGKnZqDyLcm75jMXkStyJKCWyFdXHEvvic3or7dXUbRQDJLxT",
  "key2": "5q82dPBatDi9YojeMvyBnq5vjYKjVYzAF8rsKf9ZXcAo2dQd5V8YadCeSCQ5jHrFXjbwPecoJLQwDqtsmmambBnj",
  "key3": "4JzvAfR3QyFc6DXeH3kvtWC6aaHb4BfKsxaHCorFV87U7e5nqdd3G5L8Kzbk6DnTt7EBPaFQB73SipTjCm6g7rEr",
  "key4": "4p8nxXeVBGwJ3yZhxoXJp3vnWM4aeD8dxE5mNPFqhSmRse8wFpzsKnC2fJUDGHaCPvarKm4SgucfMKx8bDCuvH3y",
  "key5": "5cv5FJi8Tf4d8vDu7LxcEAWS6ZZde6XWeLZ3ajaGPpFLE4H7M62L74FeDi7S7YLA65T7dbfprNL7ePCWTvtYywEG",
  "key6": "4LUNqmcKnuaTZfuWzD1YuApfSKqAb47jAgkJmxPw12LTMH54N1C2jyd3YwsYatnfrA67tWsYj7bS92xvQWQNhPLq",
  "key7": "2i3PX6SSf3CMHYYkR3ZQ3S4UktVmWSHGUYEqxmXqTp3TCz3TmQTJiKn7VuLeBkxDZ49BEYBZKRiowaEAotpf2NWm",
  "key8": "3LuQUwrYxSGr9ceVNJYf87oT8okHv2XAhqHo1XJMb6u9HNDSZN1JCc5S7R6hKrQZKAkEVF1kzE7qwTfpJpLLDa7k",
  "key9": "4xKJt6tqaHVEqMHBaTjSwHoXVwRUqUi75LKPB9jk95wQoWeYPvcocmtjVX1n2d7CGzoQQ2pLvCxU5Tb9vdwuS2au",
  "key10": "4N4ovpoT7YLGPohCAJP9LfQDd4QCKZHJ386jpu9Xu8vnZYPhrpYNvk5xdyPvFsh5NoGsEuPJKykomLem4YVZPo4Q",
  "key11": "49vaZ7z6ft3o5Syg152xZC3nB6oep8NPctvadK2j6v4MZvfjQca1zwSHHoWPrVn2Kmhp6iyCBJ5uVdtS3n82iXDv",
  "key12": "4eMRw1rSyJDaXeRwE8cUmqdwYDbVsfVCaLpQYFbiEMs9Wah5a6u45kRNdUZ7t4j4bxf1Me71gehUCuwj5L1rpkTo",
  "key13": "27ZcbiXsPNULnaQZ5s6wuKj1e4TZCqcdRt9Mpzsnzx7JLwXe8vjS6wiMRYzQiY4EpepoEK5YhRWWJomkxAtnzpd3",
  "key14": "ugsdh9RVCQ2AfB6gvXUrMgS316n3fqxFN4Typ7cJqjBQudahpBpa1Pk61hbUkqG4gvRE9n1pAMFTDb6VKA9gt7R",
  "key15": "V1WqsFAtdETe4AtD1oRa6GZydizgfZcVjT2mf5B32Xq5WWHTy6pWPN3L13Q4UgVuSqg22PEQbDzLGzozsydYQ8H",
  "key16": "TUGTeMYDc8mMNFHQhPHJ8FV1VfpUPfRfb1hkfozW9WP5CfdCrfx2yMnmTVRUwkSWAXrTnfApzN7zComG6dRcbGh",
  "key17": "3GbS8tYsWLEDuJ4nbEicXpFK7eW3f3MgbVn3xrZ79ozoTVWe9WU3SeDgFQKwi21XdbiiUisRvmvyqLYkmJxstuvB",
  "key18": "gumB6Lb4V1pea28AjpahoyA2oQNbyA7bnV77UYe9eByMM9NThNdsv2ZUSdShDmwX5tWavoLNWF7rA2sWSG1Jghm",
  "key19": "3qufExLmGpJTcVd6i2VRbEqiPewod8Ws3DARa45UHK8qJpV9BEucHK27KFM7GiZLPZ4hbcrJ4734jnME8fPC4d2u",
  "key20": "5jkUxfUJgtx4G77jQ2Q9v7936qDMK6JdFXzv3oTHiqw7aB91SrbrZcC5Lgmgn3Lky4GVXbayUoFZeWEjJ82tMPyR",
  "key21": "2LKujsHzikUQT3DbghQph8uCNRE9VU1zSzcVZemjj7bM4WBUBgSKzunR9oBnhKP3dBpkgCKqXaHL7fxvYHEWm5wT",
  "key22": "21ByGJR6mDyx9NCaD1Hufan9XDbdmAnFxGt9HwXMckJiTsoeUDNK6Poad767EhFzeemVLjMKJgYoDdBidFBshSpX",
  "key23": "3XwFNMbHFATaGJTJSQsoZmRfpRENKi39t9pQTN2dwjT94V8NMs2VakSAiaXiFPpcTecJBqhNHhiDTEoquLCoRheF",
  "key24": "3WUiafmqEUNGxNGtPAG4McwzzfVdsQZNAAfMPYQone7f2NokvvNnYetUAVk8DnFMqm6UisPiFdwFsDaGdSTTeuLG",
  "key25": "674CDqZWN9vfEsczHwRCViCtdL1hWCPcbDgTKNFRugMVaoeJLEiBJ5wf2eC2YCrw3s3ybwSvPg34zvYcJ83iCf3y",
  "key26": "3phErWsuC34UuGq8S5gKn3L8EcSbJeFBT2Cq2zKzxkBf8XbGBYtQzbFthZaF7syBLY9iKzTCx5r2thcrvnJN43Wo",
  "key27": "2VxFmyDo4hdECdc9tcXrnSGA1VVPXyXrVYaXkG51r1bdd53WzzbvoQU4fxhSdLdL9YQjypTUGbaU5Jt1JAgmcU5y",
  "key28": "5wUVeFR8euQnQfQB8KtbfaHQYSFrqq6szoS46wfvJQ8rarVpS1YKH1ZWnzjkoSTFY82MPZ96yxckyPAaKezm571g",
  "key29": "26fjT75z6qZbL4iipA4LrJFd1ufxsHxw493bdGJhDCVGC3aC3q6hVEhq8NMMVRo7q3KDmkcMmCw9CTQXoEW3Vd2v",
  "key30": "2FoGG6PZWmAiYYKytG4XN8o7RE2AVCCnA26KXyA1ooVDvzmDLgqN9HJi1UTeJrJTJGWgpbZGnKpfKLCwpVoKy4YM",
  "key31": "2u4Rb32oaFLXqUfTs5gXRPb97cc1xXPrZhxisyQADdagYKYH5n94oR9fz5n3DNNPLaLwy9MGqGYdFkVA9QoiyTUb",
  "key32": "BZYL3P6hzZ8PWCwgToDogTkzTEkxii6pRB6pCCviMPmoeuSQ9c57e6JtbQ5KRjpA6xK6Cvo46LvYb2m93mzewDC",
  "key33": "5J7iUyp8ErD3YL2LX5p4pYocembHdU8nEVsCND5GSRsEwL1TiTN5PRbHaZ8jHVkDbqmc7W4Qi19gvXcASYetzVGM",
  "key34": "4sJzgUCD1an6DfF4MLS6QmqY93caLpPmimx1tKHk3St8g7o34W4rLqJzfwrAiFWiDJAY9reYsaxKKqck4nn56eRp",
  "key35": "2NBvpCQL6jc5SLTVjxbQEwVP9ZtcDLgiUXTMn9hD2HFrfdHaPCn21CgXEvtJcpda3zgjimRDoFzo3Rsau4maEBeS",
  "key36": "oPN4zYyhDGS9RnvQHk4oej2oRVXHpmu25VgLKH8kRczycG9FCXgDD73a1mDyjS8HPCsXoJkEdDpCzWH4MVzfPQC"
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
