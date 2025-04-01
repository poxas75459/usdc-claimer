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
    "4wwYaZvyUjZHNQXhmKcysn9dk1byiwNmJyCdX3V2LzUEyunREmiVs6WTBpgfPoDQuxsScua3WPdfrxEzx2Rjck6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwmdXRSGmWkC2mAv678KKegFbFLBNX6XN71tN2V3YdYYqPLuzd1PYSSt8LhRsxqykDbn1m2VFeR3Ca7aFpySKme",
  "key1": "4XAMZNcqSCvoP2tT6wKLKKvLhjYzr7JvSAT88jFCRxZCoNbKjytJxZ2WzfFh4Z6m2AD2HSb728PMF6GzU57oyv5C",
  "key2": "oU2b6tRSiN1S79UWxFrsxicLXwcU9gyQkj3ubEqXvri9tM4yv6qTkV16Ga5pStCwXPV6Ki1yaTUUKMG8SJnUf6b",
  "key3": "5h6Hxxwraj5cSjKfMQ7MdiKsAHQEQuMQaUB16YcCGFjonJzGGWKsxHsPTdQqzxdn9hGNT1sgNfxFoTAyAPqLuzUt",
  "key4": "zWNMvtDgDDXpCJZaH84gujuHj6UGAexK9Tamx6M8pVXKueWymC13fVHfQwABeH9LJ1mB1Zq9iv58SneUYc3wVKH",
  "key5": "4t4eFn6rVQ7MnERB1Uu9oiRUR1Sa3gqzV4ae7NwDZuCys62jqgRVtqEuERtawjzAUekhw8B5UpYKYXcE3thkyY1Z",
  "key6": "2AzD6GHg2B3bsKEaLkMxWeTPG1YJpNKtFramd4LpLKzFtbVK8QLaWpaJMfnVABVE8eyz5uhuVxKce4B8BBhpWZLt",
  "key7": "MiLWRMf3jXKCgU96Hxih9S18R5nvs8kuF5oVC2L2wzhEBW1kg3KpcygEQGFs1ZTMh2oWFkeaUXLFzk337v91qsj",
  "key8": "2vDC9Nmws6ARefxDzExbe9RMkAu2GW7viDZKfa5eUSWGLaTj2wYxxzSbkrVBmkMsKq5Rbb11qFkNqHNE7q1QBJrT",
  "key9": "4idxdpqHP77ijcfxsRqzixaEcLjc9ExzfmUuGUkPMaK3xX2dCxAhbocj41NMgH5xqjUoqauwziBAHhKFdoB2sXfH",
  "key10": "5kRMP3aB3V3zsEXbBNiRsvGDUztmZvY3V83VFRxTjRwTkMSL51E5LrTXGSVE28wkVVUCp1DjHEFrTHTrDSQUr4ay",
  "key11": "3LaAiPPTZKNVo2axabyXEd4NECJL9nPQHHuGwizAba6tFpZGA2LUaT1NJHicwXDp4AV8CC4zNw1djK778CHr2JAx",
  "key12": "5NyHSaexKte7mEUJDYJZEVQTch4iT1u2nh991erEE6Ry49TZAmpdfkFgqVcZ7ApttdioXSu9R3CM9NfPUxYsbAcD",
  "key13": "3Q9F918YPXpnFw1chVe93Uu4fes7wH86HzqLfkivRijgATcj9WCNftY9kcssFKk3KyrHYtgaPDd5JigUjC49xKKk",
  "key14": "2mnyE34qZdaaQV9obzzqPuG9qSwukpoXhHy9wLddBqDgWJTSoEbA56XpsjAMqQ7jk5MdmttpuNGweLLShnhPFnpm",
  "key15": "51p4JqdziLDCRbEYhp3NzFxJ734aY8wRhzRqyCgpqnRcd3XGGvagvraGiGfxit8cz1gSHYL7FwrNjSfSzi3rmqc3",
  "key16": "5XW6ocLV6s6LNVwNd4zW2LTkMXMXWF9zpa6QLUK2LduBSbGUQ7ZFY819wX6wZQbNKRohwc9RvabnjWcxEB8aLLCh",
  "key17": "3wTZhWHTCB3ieHw8DbX2Zi1PyFem4x3vpWuZ1xLTVnMrCoiSPPNFpSZM5EJwPMYu79TPGSJFKeKAzowyR4MjLAqz",
  "key18": "2DXKSMVp57RFtzq9WD7jeP5QRRVjo9JQp8wnqJQZvXiMreXy9rwdBChLCauJ1cGxtbYyVTgtTehrrYPMT1jWJamR",
  "key19": "JGAuKGzVM7SRZzJmby2WrJoPTe2sVU5NfGz8GCDPA43tnWr2ruztSyfRsQN8dqcZxXemMVbvw6E2vex9utHfPuf",
  "key20": "3LeuUdhz57eDKwNzzoX3YhcQmK9w64Fjt5P6kbPVEqGYruNYkKhQYhxzopHN1nShfK5Kg9GxVWh7rg48QjjuWCZE",
  "key21": "3p7FprhACNQJjDsz13xRzEbtKZFFnAn4ApL7rDhK5yn1sy4LuhDHYDpBcfW3TmMXpnyiDv3oJPVC2sqMTy8MBhXB",
  "key22": "4GyoZvCNwNUZyTBK7ZxRcDyvXupXQbzX15JoyMjJAp27dhAfuXDGLBtpmdvfCfGXBVyhgMNFALVq3XFLf7f9K2Rh",
  "key23": "5Ri8vMHZdmFucD784tmPUM4ZkJBahSopxMDrpFFPS9BkkZPh4TkwraBZHDWgdLVwtKsdUg4B2FUuXjqUNw7X1MZS",
  "key24": "EHT16qbx9mTa6icKf9Cfn59LofQTZmF633q5bdyW3wJ5eMNLwYxnfc1cZB9y4jaez4SND9YiFKkdetEyzJvhMHM",
  "key25": "56XPHWUjYVysD9zaW5VxtusATawWYR4X4ceh32wyvwjHhMvQJuqSpEuS8zt3MsDujEcW1eM5gL5w6QBcFXvGDML1",
  "key26": "57ZeLBZB31runWWzScJbwp4Vvejopv18m1Prkodr9NMo8NKziFsYwK3LntdswLKDiv2vC4ZLfUTXUHM63eXxHv9T",
  "key27": "5LRyTQFDrVqnGNWSPX3okZzPjbshdfiSUpFYV1xiHVe5tRjhYXtF1SPmmnv1Ug7xoCtMQHiBjGt5GJjd2eGUTrYr",
  "key28": "2zEAgDqWTWDxBs17KQLfJVwn1xsACEe1hFoR8P7cuqrKoaHfQdsFsWme45MVDhWg8T4DCyY77din9zAJ1itqt2xa",
  "key29": "5Tq2SEAfm8TacjFPZikEtvQ2gd8LKRw2BPptva6TjMVaCXz8AgsnEx4Gy1DEqhZZpKDbJxw5WuDcpTdaKqzvrFmV",
  "key30": "E5zqKXPcnY3z6ytmVodJN45oSHcTrE4vJhzQ5aT2wb8vtWRb9Djy6SLGP9ivnTByyWoHa6HWcXAddibPtEM4ZbP",
  "key31": "2D61vAv8sdbEm7TAhAgr6HYm7wcjXgRdr2FMn4KQSEMChJYZdsUMMXj6ezrFRg3KCMbvKayCvbNZKhxk9VRHg8Wm",
  "key32": "2WcQ5xmizxG4BvRbTbaQnWEia4e4kR8XkfnZHCj9KKif9sq8qDBawrE3gEnYojBE9F4andAwPsnedXZVfze1fPJv",
  "key33": "4kr2hrjQD9AsSAGAn1zxKUhkhjJeHoAVTCvh6u13zSyHjpwYt9hjqrhGJXf6XoudU2cmz1G97ntoeahwjU8wzMUy",
  "key34": "2UMAKhr4yV35VyX2YHaG4x6pdeD7LXoDn3esb7YCjGDEd3y1VBRQfftJQ2ev5yM7z9rnN4DAgnN9kVZo5rBhYVkM",
  "key35": "5wiWvtrucbywENKfSqjpfC9rnEpCW5YRspYuSkaRtijbkRDejpiAnaDQ9BZccjAyEAYjj9nj4YWdW7hmXeotu4HS",
  "key36": "56cNqXEtfj13XTaEwNc3e1yi89dQiDxkEQRywN34xDrZsKh9WoF7LFeevU8NLHLRAxCuVcKTQveFxKmGYVg1Zm2v",
  "key37": "5ZqTtk7Tj3msZFYfzZjZ1zceA87S47yggG5sXBWxdu9vit3hKhAFkaPkPCsFY2cqUZNXCeqE1xKLjaMZWVueXW2i",
  "key38": "4b8gYL4r5XuTkByfu6ziG2aZxoaAFZMnD3wNiz146fGw9zdXGJfrHX7KYCR6LWou4QgMXfPh4U3SqsvALXZwceJk",
  "key39": "QMXpfJV9TTxwyJbo1MTZuUvHdTT3qKwXxp3V9QUN4QcrjPFseFZKtiKyqkXCJygJv61xaKqzCxEp3v34UoKiWJn",
  "key40": "4vvvF8dxMsaF3eJZjjS2WBHCN1F8dYpgvVyqw52WPBNfSaA5xCYeeWkLiswyUrutazvophixVaRQj47BWKYHZ2Qd",
  "key41": "XnUFz2b6hr11Wt3cfdT9a6phV659kKqc1zDYgR5U7GWsifVT1aRbFCzu2E5rVzvjNKdUSTmAqQEAF9q8ZhqNpJB",
  "key42": "3QWHG1rjDCQdXXP3XFCHvjFLi8cEx5DrMuVi7yZQ2J5Hetws7yi38gtCvmUieSLk7tmDCa9DrFb9AZBQ2z66pzQx",
  "key43": "3MduwZDqu4ZdNDM7xP2ajtmgve7DUAAnGXtJnmmAGHhhMXYhtFqRPwJEKpQAkZ1GGfqi8GJRxANZvceQfSgXtHW6",
  "key44": "4DiBQsaKxi8rQr4oCB7cVGRS8dcS6rj2n7o6Lwo82xLsz3q2a3uyCCKKqfBoVpmrmkQ9uyEUE8U42AgNHVTMh4D7",
  "key45": "4c7aBF2VKtxmhRcwGso5S9CkUswyghrquZpX2rXsgzbBu9RsuxMPSXrjyXyi4bMHpoW7dqss4SRK8s9Sn9nUzVXh",
  "key46": "2FJP5td269T9XEw6ZSzxcFxue38aZoTZj1Sg6DdMgTLubdYcXt239Rvsgz2zgWMK433pcNob4ytu6WtoPEZaHSG",
  "key47": "26QZ8BBcMjXHhTrtJnymBMSDkm6qDvC8fSbCMAo489QT66kY4mYTVAwnHmQtWWgYsKENggvw7xdn7HRu54hx17QL"
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
