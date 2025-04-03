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
    "5bAQv5aS1sAD2gBv3vkFFBwN7javsd3QXbf7BxB2CHyzV7RWjWG3aLoWwT1wVzia15QFAQuyWCf2N2gDrXP1BMog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWx2EkZuSuFYdh6M5T4brM3V4rDpK9ichogovGsMmxVgUs1XeU13bc4LzvaeaiYuLYVqcxfD8gH5mUkmJmTnp9a",
  "key1": "5GTVhYbXLqLEr2VtKycVz4C1a1DEHnX3ASPaMqZDB3bSw1X3n4ofG9Q9sYnzU9xaZudKSaJxiG2XGCyDUbGMzVgp",
  "key2": "5kBU2ZQjKz9jwy7mhfUhE2MNrD3XekBfUxshtioRqZwVbE5MDrBWaK197gmCF5MADdNY8Rre5fzpwTqC9gaTZSU7",
  "key3": "A7Z4EctRXCxAaqyFRk3FSZN75bjBkR4Aqs5gVq2JBFDeovxWwKBt8GtgNqoUVFSiy5mujGrfvYYaEcYHEjsYG1v",
  "key4": "FaYD2TTSwaqqP9dBLzHofYhPxj7CmwyffGF9j3c68SSjtohjNgEAeUdoqbryuDkzrQhCTgMDET5U7ikhq3L7xy4",
  "key5": "57HH1Lm8Wed257c5wkAbkAvj2BPtiJPaRVeCL2wH5DvWN4Coefy4tSowh6yyraRX9cdn1iPA5RGowTQRHKAo3Wn",
  "key6": "3dmtyhqabaNLPpnK3kVrc6Lq18Zu7rYyzFm9hH7B4iHyxVhHaszgnGugZeqg893Dob5LrForvgq6ziqqA8jRzpxN",
  "key7": "2f2aBwHLGZRiMeKTSkchkhG8wDiRFZBjAcPoLhTS2zHXAkSu4VDf8oHAinZFDsrc9SFpriSqmPaDnhPxuQbRtx66",
  "key8": "4LF3AGXqVQQT95dzBZUo1JXwxEoXbQqmCMVygHfDuoqgNvW653oJYX9gDved8ELeqiCcUwbUpojrJEZmHM5y6qcd",
  "key9": "52b7NKT3o12PkVm6zZpJi1Hd6RpiRf1zM3pJHfYtxuKfYJRbYjC4SeUoAYCTx7StmcTgfrezR642xnPDSvGzzZj3",
  "key10": "26xZtMgE1ppnGvcyCmqVJ6aYp2nzdUKSbyv94z6qx54HHWkPHmo8mbqozUZfHZyTPsuSjmUy6y98gpEKH99oh3cE",
  "key11": "38dYJtjhpa2RyGY6zLhhrpNjN5bajw55JmWYKYGHDLCN3huPh7EpzG19auhGznC2zkjemxU6P9iUyvUAo71wCtp7",
  "key12": "2LJudisGDr9KawzPeKF2YAfRp3q794SPih2TpqcafZmV82HNgeoyaB5GS4gZjQ3yduJM5czB5FmjkL4XeBkCwrw8",
  "key13": "CmJegf3nw8tsScbkkDdukzH8VP6bQKvrZenYnGGtTh2eibPPifAUQZra8csvBgTK1b6FfGhKix7fC4xNxPxsZUT",
  "key14": "22DAndcJv6soCPJHHxc7t11wjehGfDfkaM8XMJjAsEVaa5w8grZ9zEXPArCMNX3crZTBycgeLJeqJbiMJHoSmVQV",
  "key15": "2zbrBK8Hmg1bm4YYaLiLcVQAT2NsfzKZNuSeV5q5BexuzqCfnTD7U78DQhunrWaEfSEzd5veCHygL28oLmAXmSgv",
  "key16": "3RqYk4eWXs85L2R7xrt9qahor7d13V4AUxe5o3PpdF9Pn6yBQ2qSnAzX9Cnez31yxmN4FtSpHksai6AYUdpLGyse",
  "key17": "4o9p63VRyrpMTqD98GMvG1W6dGFZag9X7TG7NbEFGPQC8NjSbHe3g9SqAWLP5iqj7sYzRRDBBpWiN1YR9zukQU3t",
  "key18": "K9gJDeWpVEfQy7jKxuQHUAZT4PC6jkNP3Qr5vTbinYXE5HTdCK1iw2ZE93Bf9eiyHXgpTwsaDT2Bxwhrqa6rE9r",
  "key19": "f6aB2iJz9NTNEeqE5dcNSXCEitgGX4EJw9RMMndvutE9ppXns3cSmJzfnm2qC8xwpLX5gUgbFwzXhJeEYMRjMsd",
  "key20": "24pDFNpc8V5fmGFJVzCkxEMJw5JRAmb79FCiHLnjJDimuZyA67kJPXBg7pVXBNiiruheP2DRoAMBbNidhv7M4S3p",
  "key21": "4BTSkv6xT72LmRTjuiPkgXMD9KshUUg938JrxWKMC6kKtbau98VcJoWtrbhiQXi85jFptaZCuYUABBTjQEggR81g",
  "key22": "36EqKD68HAue8vCf1P6TFYhpjioowPHcA1WpHMKb5NigAJbh3CXi6i4vVsnRCdKAD7m562KCRdy9dk4Kyi9AfwrZ",
  "key23": "2zdT4xkwov5ALndyr7VaUFpkFKQJ2bRmakkXXfMXT1zrYjLmwYXmzrXo3LvNiUTUtdqceJfiK7MExZcHaBcZYE91",
  "key24": "3WyFiwv7CqpBq7YTZC7Ee7WK3GPy6u98EHFf5x1PLDddESkUracu72T6H6mN6GeBAksPsmZjF3sBw1vUaBwTFxb7",
  "key25": "4SBXAgZVH9AzBKcBSEdQ65688HW18XizkQvkCPoPGqqL3GEPZpwrbGFRn6FPmv7saK7hXqZsyTY8gTfi6sLfedWD",
  "key26": "5A5DtmjrJkTYvwtar8knQ6fbpc6RGSVBkR9rzrTYpHowWGMnmwx6D8Y3HeKW7FN6AMQ74fSGm7ngX89RbmSsVGEs",
  "key27": "4zwMdqNmfaMEqY114ejRaRt1a9YGQihJBkkApDeS2mfV6coKTSWSgxCLhxxpgtL4avRcG2GT9qWuzu4UZueNTEXH",
  "key28": "JN1qN73tVLyhCCQ1fJuXrhTx2a9SBp99eowNbZk5KkB12uV4RYqSxMUmxxNn8j3XDsV9CSmxZ77y8Y4dmsCsSAw",
  "key29": "uNYqb6Vojh3UfZdz1BtMkm1GfFAmKzFobQqvz7S238HanMXcRF8WoW4qaoSD6MLurXzVFeboiDXv9aebWnPB5du",
  "key30": "5PtsAY1t727v7TeRcFHHAjdNigXcPk7Q46XzFJrkgb8WUw2GCgD9QMVEHUjvuhNGVsyJneKEhWmJRHhkTmj6Jmoo",
  "key31": "5w26GJYwZby1tGjgJmJ771kYNCcSqsNpYKUciZHUHBSbfxYxP7CyfeAob2GyZE857CTWPejrW9Saorha5phACdQ",
  "key32": "4CkRSDrPiXVfnvuR5ZDA1XVonuxLTn99G6RNndnWN8ZPgrGduBwxbTJEp79KFpPehxZReAw7tHEsfdVPjnv3vuSS",
  "key33": "3s47hVHskpKZfjaYhqbhPTD8VjR14c3cdZksHNkn2HEzvdyY5PKjUw4xhxqMdsWcRs4VxTZNcw3GBhD64hrCxCe4",
  "key34": "5JfViD8wiE3xfBMeyTDtydLwdjhMXaeonfWPB3ryt5iBx4v9iWW9sZ6pQrKswT6En4JKcQ2AtqtQNW759rR9Skmi",
  "key35": "zJkaRLKhoRZeMsJDQQWSx3pSRCQVkib99V89PtC7UDZEmkhKkLVnXvHV5DauwnCGznuMuBHjegk8yFKuLv5nVwj",
  "key36": "4y6VULknryESSiHM1VBUCg8tYQpmrwmNdbP73Cx2Ba924JpK4ZKTS1zq82q7GAQLaxJo24kFgZ1XEJwrYbo2UGrd",
  "key37": "3BftbUeA3Mj12N7e5istfdHrEMrxKWvnwudEjfKR7V6pVcxZiiYbqJihxUgAGfpL8LXw6eQ85nBS9zh1VB9AJD1Z",
  "key38": "2XVzifmL44oJjRkgmrkHEnRepH2d2urqPTzRHWcWTnpZ5Vd1BD1Jw83iKDDHfCXsXdF2PyfSook1NUdcCqvaXETr",
  "key39": "3xhL4NwCSRG3Eb2oar25YRipAtYhQy35ugdAVtBAgEppmmWPbTURX91uxnK78qLPy3Cr2Rugsk2njpL8C19n91hR",
  "key40": "4vjBusASV7JMsvsguziQ1SnsoyrqjVAxHh8ZX62HrGsvQJLqwQL2jd26d4q4dYWxYK84MdJ3R1GfB8kHdepi82VA"
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
