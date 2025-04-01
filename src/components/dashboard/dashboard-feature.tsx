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
    "2rjT1N1DwgnCiugqYf2GsTSCh8BrVM1ussogrmKXh4VcCqdUBp1piXoZn6gEWu3HPuY2n6zQzCpD5KcwtWAZ8iPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzQgmpYTkrBH39yjFKJr4PGxQf8BGqXg7rigSrhAiqW6Y1msQvgxkmTusTYwsEZ7Zt2gSDCV8ymUdp96XnJP765",
  "key1": "3EdCWctbZeipWhvqFCe6sGECotyayJJQ1NYqym8EtuqRmpLsMCquws8UavUQQk3iHm4i2qCWhv22GRhGbaEMvJpu",
  "key2": "629SvLoDP7PdPLyxLRS2cqyPdpfg6N29RZHAZpsfn7BxMf3M2nFH68ops11HFf8fC3UabjbGf5FhbvcTM1iiEbLe",
  "key3": "5UBAhuFwePGfCp5UhKJ8JPvTE83jnAGmrmNfv8tvTJgDRysNbbaz9HVJBWo58QJk9sjzmpWjfKuuPDGkCnYVjGFs",
  "key4": "3MitXsCgM8xWr6Vpz5Lmct8zth4GqoN7QMaGQpAKsMgfn8EG7THwckdNyCFHHuLQrvW62oVeCpjoVxvZXkwTUZiR",
  "key5": "5Ciq5K3ZkT5Ywgs4PPxpLWc95K7fb6YFu3AiT2fVQHZ5pfbbNDqd7VJoo83EuEgajoF5bz3cemXdzvtz67PyMVFS",
  "key6": "4F2dKy1yK8oesWbuXmZKDeGXe8r8XMYuSeuJvHAdNHGPrY5uNebdbyRvFMXCWzjoa8vW84cMX1knuvHMBLBuoT2k",
  "key7": "2zi8DrxUf6Qpxctxc6XgmA86RFYpPhuHSYJYT9e1Hk4UiUDxcAcjti6wyo7Y9AFZSevNbHERz2M9jQ4n1s8iC4ZZ",
  "key8": "2hoLubeouCB5SXpj32XekHNvzqLes1Qf6fH9mjqvLXCANFre8LXfWNbHT46pRDQ9J3WVPcuShEg4puiFrHMsLwsZ",
  "key9": "KP1Pfqaw33BUoJc2NZVc21iQCobXqAnTRirNyCbjL1ZyrEWw3DpVfUHec4PfVTKvv23tAwsCDn9ufBVQq2irTWZ",
  "key10": "VxMh9JKD55HZCYdFBBCGrKREDhfX65uE1orVUtbnpG6qdBwtsGDukTMRmVcxvJJbr7VLUk8FnD3JRob8MZWGMc5",
  "key11": "o6aSM45snMSJx7HT2AGr2B1fMpYEUnUa1WyVYHP4ByWp5ePVzrUNGHgn5pmMshrCAW2mQ3ExRSu2bGLs6ZWB4Gp",
  "key12": "5EGtZ6KyFWN9RGL7nwig25o9FbYkKsj6nws5ntVVaVmB7oDhCQaGKWnj82s3deG8u4S6Mai2rsxkpGwdixFDvx4i",
  "key13": "2xFpcvVsnukBg2k8TbxkJrTSGoyMfbpSxHYxn2KF3T3Ae2NKy35LKsEnf8qERCYNqX8XDYj9jDWuafm3NuTPyCEq",
  "key14": "5nXjmq3bp7AcNnFk8x6rMELLa8jdzreUA6FFwFktDaVL1iE8kguGKefvAQXUKKKkpq6opBrAFqHEHjgSq1w4Ynnr",
  "key15": "8nUJumPKjbf2haXnVVRZEVwQgGB4P6PvS5RymU3LedFbyFzw8Wq9kG2pqCyB1qZPe44FuVWiLu6nNoDStZYTdVU",
  "key16": "ajGiQzriF4G9AQMkMN4qGjmjhLtAMFqJYbpXbV5EHw7NiqhWsRQVDDRRCmfMnYPfXxRjT7jZffUkoS4HjnyrJAB",
  "key17": "i9Hrh689kce7RspT7cJ11Uyjz1h2JQytr8yPBR4ALRLf8RgaYViYJ3FSjBxtyaUPabwzT66BUDKDg6GK3XCFkuu",
  "key18": "5D6nmiGE2xNaQtbowp1SLzTn9T1mAJU2a5bsoUQYTNW2s5N4cSCDiAh8aXDdQczCFB9dMqYvJ41addt2JBD4NbHK",
  "key19": "38TM9SPGoDZrcHi6sCh7ZiYMbU8UHVii77eF2YyEysLmQzjdhFJpAaWjn42sTF7XiJ3XUubGxbRASGhpthy8ihLH",
  "key20": "2SmycB92AShM89pc2AejtpcfJE6TepKVYGX817qPkiRLqHKq4o4cg9iNdD8gT5GnfEP8XjmqPho1vee47RRJLaum",
  "key21": "3vC9eRvwQns97iaXZMBfdHEmo5CiD6Pmzem4ZkwZqTPghAvoaMq7FMaTHFRSizJx5az9etw8qu36542gE5a9EepC",
  "key22": "3aQvmYgryMzwaHsX4Ge7oTeXkYt68uSA2kGKRwEjn2YQCBktX38miE8GnUgfBEGKFRucYqL8mxq6aWG6ihr8y7Zw",
  "key23": "4QUeHzMQSa4GyM64nxKk2saRnCdnXMqysd9HXonQs49GFdccMwfomh3LQTL8y47xPrp17qghFT6GS6UipoM3Heey",
  "key24": "mZzXKa7T4YTd7QSiNprrLAxzeZFVNUqUKb3SRqiaXX8iKwK1PLfFpbwMCVcYT3NDne1TKLmvQXDGnHRzWg9Nh2H",
  "key25": "3fLPfTgb9WsPKHXHyutXyqMwww2SuUyXA5qrh31vANDQX7Z9bQN7HEAykeB8YKRvdGgkewCUHikhGwMWwQMyyhpe",
  "key26": "YbcwgjfURGVvQZ5ZzLuaxthdJ1tTwcMZhUfXdpzKuBEE28yyKJ5j5Gy3ShcM1eCWyvKHmy8YBke3EQ1uB729Xba",
  "key27": "388bXPPFpidhMEFmEqRMLpk86KHqcHpkgpocmZMm1vbfcBDQLDDUSLx9hrvFhC3ReKJx1JesgjJUocyNtXTY9vhp",
  "key28": "3MNRLY91oMTs2LVVuKZQiEkfErDa7HwQezr6J2Wcw1JhDgH9NohpPiNtTvCnU1njBpT3ZHXvHKSioCEvjsv1jvML",
  "key29": "22DDaafarw8S4W9PUmVcQBbaSDdJhSAu2zJG4WW6C4YHAGxt5V18cF23bgtXAxRwAMgYPDnbrhxp9bLe6wiuTu1K",
  "key30": "iASApWowtXwMpsN4Yf2fomPpeFUUbtSxsj1qP4gAtfr5FHWhCB5GERayqtxtw8z1LPU2jeLAWDTrnoq5Ahh3PY9",
  "key31": "4HQhjknwguiSi96mUQRsGbRFKXYd3xKUq3Yzg9jQUPMnNet8H5gjgf59zCE2do8FTCLuEZZ7SaaYXKFmr48C3w3k",
  "key32": "5jsFJNdb6Vspe9suRk2ywYnmCWLLhkXXcg8GjhGYnvsJyaYw3RF1omb2zQdnLs8PXC96Xwd7xuJ7p3ETPRQ8NTr2",
  "key33": "56emMJDtYRSCCJdq92BfPzJWRw8cLiA7fvpaSGo7ATf2vB3qJCKvEN4wvq1zKkyYe5NkjG3PJpui36xnk6Z32ef5",
  "key34": "2brAz1oXSgnDMjcqGuHzUw1MYNQnme4FPv4oCHoCjjFj5knDcT64z3V5UkXazAuVCiPFfuzLty6yif6TMPtCvCgU",
  "key35": "124YPjBTE8VfKtjBhKXQ7CaEKn8upxqgrkJnkBJ44qpKYqLnT4pmBVi9NfcQBCsHFj4VMJpJJ1CuT34ixEpECRxX",
  "key36": "5riEW4X9AZppbrUXfLWJEtyUNQuCug891whVHAQXCa2T61NpwEcCZrCyGNf3fQB3Zk2MgPnx58uLKER88PM26cm4",
  "key37": "4iVWdtHK5k4BK1dz6dAi51wfg3tzTVwVPHgb3DhjSqB8fAw1X7r5ZeHCjBjLkbXnzHWgG51LdJkJ83wMEnjtY2Vc",
  "key38": "46KmtDX7gvKZVRZ7Y5TNrW4SujyMMG39RuYegUriXyJU4rXCzRA9ayukswzh8GMJepyL4L1Q8F8RKeiMZwc2kZBH",
  "key39": "3KiP3m7JVCrxBZTriAQDk2bdJ4k5PeNeeHwuKXoKf7Ji6NWuG18yKRF8iZn5vEeSXubF67Ur8SyetUFztuJM1W7a",
  "key40": "4Bd72k8uBFNBngWcJ9U2zL8PRAGATsyaVX5WDBaZTdh1VP82YXVgZjTvnFnygdZp166gQxRj9V9tVYtCUfVbt8bg",
  "key41": "tvH6SWZZBYeZN9NZVQgkb3vy5Ur7nZc6LX4koL29SQQzamKNNCe6EhwM8d5g9g3WVQzGCvLAWt7KhPrkLUky4NE",
  "key42": "4Pyfv6Vuxonsb9giwTxKHfCYLbDBmguQ7QfrfK3BVV2qDwtkehcYTddCscVxP18Ny914X35mCeT6TxCMT2LEG3ey",
  "key43": "3b329TowbsFqHK6ptHq21SX1DN81Fcea5hMGKJ3dUxhyZ9D2EwByPKEdXhpyNFrm3AWXf9Z92S1PgPyL9WG6RE57",
  "key44": "4TLC8D6LgLzBNgk2fsJPkEGzZdtDMhQ2NoSNN4y4972VqEvhE6hU6TkSk2ZiUVBSkjS64eEkQHtWtZBbGhvF6sgd",
  "key45": "5YsB5kMWAZgUKrhy9XN7rhqX9tAdxFyd5YD1m7KCPgSKDHwr1G5YG3AhNP7X6awWVGSQ99Cy3zMhqox8JEnrWTRr",
  "key46": "65aVB8H6iSRdRcxDcy2Xy97eaWxuhxBwcgfRZxcQhrPLE3KEoYwXuiNw1rv7RtckMXV3c8ws4Jb5tcyyMoRx39vt",
  "key47": "3FVFeWxd3tyj3gRUdVmtNLfzjLGDgr5thUESAx1aWQ71Sgkk7J7LpRvDskNfcvY5odb13iipWSzQQqDAWbtQctGC"
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
