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
    "1J4aG8sB8z3DCJgNpWnLve2FsJEcK8SuZog8HUKbtPEcs8JBDzhmAxxFQbiiRHkpgMbYEzmL8roxHA6UgkVGBLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATAGjLZwWhQdZ41oAGbgPxNxPxnHzvpVrfEBt6t2LTFXdn7CnJLaWAQ7i9Ao8edgsDkwwWsj8GFv398rkLnzaxC",
  "key1": "554gqwapsq6pubTysGwKjJjfjn6oFMmdkRGGosaMXhSwPmkLVm78nXpwFE1WFo1P2VPUNtK2RwXAfDcY5AXXqj3v",
  "key2": "aKN5jKBhYyUB8SzBEADiuUSc3wBVE8iuGk6WRFmSYwvbLv9Gfcm3sk2mkAfZfQZWzdxzqio1CqXa5Tg7U6qRMFg",
  "key3": "3xk34P9JvL84Z2a16MH8RTLXW5kuWAtZyWpYx7fbgW4k6FyHSJxixY1ssqTtfu6ZDJT896jAw7ZoBaVQB9V7AQZH",
  "key4": "34xEasibH9FA2k7SScjvs7gtkSvG1rXRFnaTsPZNqGWZhtWu3hXCKp8mQrcYcttxx3jHvwrdSZFBq9JJKk2ZN13c",
  "key5": "2YRYktNBQHdoiFBB1FmhDy5RkoSyrGU8c45yd8YPh2MNa1NhZbUNfh8UVgYb19kGMevdXnkjUe3HoDjcqc7zas3j",
  "key6": "3H6s9SYYYtpbbdpUMRZQm4BJQJJN4spRH6doVo1hBVrZwui69CBidE9as2zFLd22Eh3B8PfCHFqj5bSbVPn98EJX",
  "key7": "3hNpk32eSUTrdW1MWdgA35JcNNvATfubnJ2TgPUKB11pK5kwipVobCXm9SpyCZBeMW3x9iCJxLibPQUvfoqieQxy",
  "key8": "3gc2N6p9x8YQSqZGSXDbdAn3XNTqAnLZphA4sptee5tD13LgqEgexyurF5XYL4nhE4Y1E6AHnKSFXHaYtg2fERRo",
  "key9": "2Sx3o7Khzr5Sp36bimSBCqA8ws6Aq6bPbgnZTMpS6MZqx23VzvBCY8vGwXFAft1XafRjFbfWUnMuLSCWnEFuYA75",
  "key10": "1nTgiR9McGBoM6vb6Tzuf1ckg2pCJ86tqUddFDp1UGRFFqbrECym8EkUBwMNBpGADN2mR7Hs3EERsmFjR9Mwcw9",
  "key11": "8C1Mxevp214FN5YgooYjuYCNrfoGZF2MqhwHy32P9snHzPgppX2iAKd2QzTH29FnsGG3GqDhkkabJcp7CJYV8fm",
  "key12": "2d2tr5qz5Sm4aaxr7gUyyqqT2yHFKnwPExg46CXb28gV6Rz29AJKevYwbgc5Wq9m3WLuvLiELq6Cx36iKeEp6uZY",
  "key13": "ZQQ4gGLm3UyF18T9ebVjqJuSFM2cyeMT34pZyUbftXBHrE6SQisBvpUWB2fLVmxgEoV87W239JToXcyiAhu8VkF",
  "key14": "5F3pkgNGDcHmgJDzzjhwtotmQyTz7cQbcg3oAnd6TPuMvnKbj3a8sAs1UNNRvjVFjNbJi3rW4koR4Q5rHJztdfMB",
  "key15": "gaik6feMJqydYm7JarZy49TGqFXLDAM3xTiwZPJ6QYdR3hKHyuFfrpywQzQ6GUcD6tbu37EAyDWGqNGMdev3Fw2",
  "key16": "8cjJuoSk8NSnFB4tiyjEWJyXMe3uUi3tzJQkBWRBirHoikG8whNurobnwmHvgx5VwLS4RMT5VTWEZjPwW7E2W1c",
  "key17": "4FSCWgvrKdWkuUPd7U31QCkgW6eo742uX9GjSj7Qa6jF7HwPZ8zCLNHf4LexXKTjUcUwANbhHM7iGxnoEM5fwUFR",
  "key18": "3Czi976CyrwQp2mhzUrzhu6vHahZx1RDBpWUZHj2k3uXBsgEYo26fMkQ3j1gYm3pmazdNU4dzMBDBM87sXfL23mP",
  "key19": "5ZHp8oJ6Wj1PzULGBbXLC74PYN3H9WZpZvELk7h7632rYDsAkagyvaQBLE6nwSaCn4JZigje4kLdGdR8EuK9bobV",
  "key20": "3gdG7LLCvcLitQ8xxypudANUXZABiauZrQKD4JLkpqCSwmZr4hBYrcfTA855WGktn8y2PfkoF4XDHR5xTs23Knb1",
  "key21": "2A6XwgGrtC5MAd8rmhHZPbEt5Y2EfJm65ZPTmVG4Ko59FfamFg1V3hEYnW9SMt4ce2p2wb3gWyfwx56NTyL4Srrv",
  "key22": "4bz5oeGX81TwGk5DoHyqegfftRh8nFjRPVLnKai7zPfUexdboucaFAPT2g1nAuvFt9st5J8cPD3amHYi13Nq54y2",
  "key23": "2ZtmyLTR3QDbZfz8WgViZUkjSaDzffLx2CnXj7kZLg5hc4n7fL5C96ykxDAGt5yHnG8Ec6KpAoqAEYJxX3wUbyyk",
  "key24": "3M3VwSRbsPqTokXs3nUfqyGneK1tqFb63Tr1K4VpjpmRibYJEKNZsUHfsiPTJx6YneEechBRbZZx76YfEZxcHdzj",
  "key25": "5t27rLrnJb7S9sm63knmiL99MF2VK5FUTNWFDXeEk9P92TqMndMsECtpzzJzTF8mdFmuJvaVG9ySmX3HYAF96dXG",
  "key26": "5s9hQh7prreiH7CFqkvu54C77n9aMmNfcdGJFurr62LKDYDWYTg4RW7Jwmz7X6dGCHi2Xetoqv4UADHSEkCknghR",
  "key27": "2Cr4hSp3GCKJJ5DeaDWZDcUef7wEgat2shwPL5KHECYBV4mcbbCmcTh4iHWdnts1N4QdCSscs73pZHMH7JTMGxVA",
  "key28": "4srY7iaM1739PhfpEVqeoWKf8TPfZtzoWThTWHh9vJAr6xXi1uQrquE4XFSPrpEgDmLTcrVAKysjDmtkcufNZGZw",
  "key29": "5cXmpE1tLRWBKeu8YPWyTSvjZjrSym2QxFzd2jVfAsUNqCnNLDRmdfvwAa8CeMmMsi9qRWx6WkA2EWNgxWQtQhTU",
  "key30": "4jxuAxHbutxekk9X5oRw4Pa34a4dWG8a2BzKnN2ptYGyvXkNV7rYTBFFhJCa6Dk8i2nqcGBaDjtuBArxC6H7P75Y",
  "key31": "2WE9KwXPMFw4tntJiJupyoKqBDopwPJvDp5JNhbZppEHs8Caquw8HECPLJai7rf44dbh3EKKoa8yF1Y3Wexqr3jB",
  "key32": "EiaoCJ2GXppo9QnkHbsXvZ1LqZ8NMSK3H7MEgFjtvgzdYixn7PNBPGXu7mthUtHGxbzdf1JHseQTqZKoM6Ln4bg",
  "key33": "33rmjr51r2oTjNUaFdfzyEdciTJ8M6gPUuq5XUC1MinHnhPgWhKTeQ8R9juqqfVWhBQnscVuzNTndGwWWNmaXBKi",
  "key34": "5FfkLftoKBteeZ3kt2LNbxzWyheBqty3huvMhAFqohz2vQgmtVwyZQ5NeYdth4edZMeCmeaSgeJmhNTZJJeLuMyP",
  "key35": "o2TLbkDknCysFhPdtxDGdq8jqfUmT88i9mZSVW7FKcUYJxusPCipFSYdyzQBsZPiRj6y15wznU37r1ScQ8pgCCj"
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
