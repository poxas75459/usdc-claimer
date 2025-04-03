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
    "3gZ1YLhRuYQA4iK16x63pMrapkT8hmTWpLMgA4yDqUbEuGMWdq2YRRmHWdo8h9wJfTVAFciV6Fh93V6HKDBS2Mnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Fn2daHZCoPjYPjrtBWsfozSBXFFBHR597BPNSRy63HPJ7RFtYkNhav1HrR4syYJ1Nd2U6XTfTPmsWvhkfmWV4E",
  "key1": "3DbfnnAbSuXpRVmz6Qmq65M77ZdfkVaLyoouwa5edpG1D8de6oj5ZtQ21ZG42QGn6kcHz3CB5tgCxsWAyryS8ytz",
  "key2": "479WR82Z4GdzDo7WQ9EQQLgXVJ6uWeKuFkKP5PjBx4ZUGaBJpiPKUfPMRCCVgLdsp2RRLrPeHdrgPRzPEkRtafiv",
  "key3": "3kHCRia41xhDzw6VRTySkm7GKTAmixbAfBg8zPWJUXehHmBxhyzSdE3DxE1MRi9qkJJ8YbS99Vpx9BT3m1pWhuJb",
  "key4": "4TWnHDBLHDCPeSEiQtRx3dEX4dCFnzS92FNKBWAErBBy8R1Ye2Ki1qu62yrZ4AGS8TFf9TLo5Sepjmj5Bp2kaLfJ",
  "key5": "2fDnSguko2HibUEobLwjvy5PMqiGD86xAogaZfEmSN2oecSPMe7TwnW4x2UonNCtQT4WevUvGNxkqmLw4pGWqyrr",
  "key6": "5XEdg5kEzKYqjDpzLWQDoqjzfTfBb9avjDye15b573uLvsz8X4ZgQQYCXz5WqPLcpRf4bzfxNkxMFF52shXwnfe6",
  "key7": "3vH5TKiTPcQefK6528YDtBTbYQw8wjjfmRCMkAQwnxz1qJN1cUzRBghmhQrpvs6pzHcgbmWuw2unb8MWSfByLdn4",
  "key8": "4FApaWW38mQ4tSzH3hmNxgbcqQuC4dx5SGzcBKHV3Zxrt2iRbcgW8E2JUdqMxum97iX2qcpYQwV9AsgcgbCFe6dC",
  "key9": "4n8rmgazKLQHKKAjUejgwqLZ7c2YnA6YieZqMxPwhjR9uR98tpha3k6kMYpYGzW24phf4FxxMK7zaW8UEQq7wWkW",
  "key10": "3izm6HBcYqVHNHbmaAycyrxCLtAQuZTeaTBfSSg6cixqUujAqXByKfRjxEdy2ziyC2eSXbMdLAPSUJoQHa4XbFqg",
  "key11": "5xkmgps46gZKwR5ZyaUtn4RwYwLYNAdzzo7GQvBvomzmr37kJczYG6z287AwQrfo4ae3X4cn7Ejjtih81ACpcLHW",
  "key12": "figsvEka2eWaRMF1wWow8QHDxWbEzGXq1S7iTs6hmgUQ2uL5Eexm864jvzvazm2mNyzpWULMxrAW77AD2ZuqW3C",
  "key13": "42U7BdCMdsHCkbJwuMXjSqSnkYjToyFM2MDuoyMZwgL2XrVBw8j2nrTC9NNxa8uT7gaQ89dj8xx55B92xoKFAqpH",
  "key14": "5N2PBAijYxzkxZJS8gjLJegptJhrxDgKiMie4vjWMMg15YQbhjhr3f7WiGdV6g628Q4pZzwgF1wYBZGfCEhnB3tr",
  "key15": "3twT1MddwQGsSsjB39RpW6fnRVQajDwoHxwwoLdANbS9AAxBM28qxnkZyoRkGwhw2pR6ybTqxukRQe9CRyS6sjqs",
  "key16": "g8o2ab1xRW6Y5xmaX33hdpxziAioEiAn2HeapEJctyCtezydNYiJRqSK6d5HEg79SrGM8JRkHXGZSvKiFpcZdjr",
  "key17": "3Gs9G6SVsAT7ffR2zogSxtGuaVZFFGP3CTCAqmv8rP6e7ZYCNLhqqRr8PzYfL52osX5bftxdtTsmjtJSUHFUDZwJ",
  "key18": "3dYTYhn1J54h6E3iNX2hV3j8ESUCZPUBpt11fkuaiCwsmzGXgCqduWoKdBUHU7tNoidgZtNeeMkm7ez4BaUcmQef",
  "key19": "3f6ggBiboJohDg9PHatB3zsCc2buG5hdr328AJohNH1UMtueV7hW7Sy47yyg8HGGet4JdWQgRQmWDTLwQdHLmcEP",
  "key20": "zeEJKHRuFE4XDfT11ofv7uZZ13VwvuAoKhRVGrzarycPKg3AbcotNZnCuqFsDRxGGiJ8FX9RHGSC7HNE9y4aaZb",
  "key21": "4JoeDCY75YvSWmNytoKVgeUaoZ4Rx4k6w5H3KruirccNoufUqHR4WYqeU73iz31L1HP6tUEPBjS5n6xzhx6UGZXJ",
  "key22": "4QLdzm5f3ExjcgXFcZCHLn9xR3jLdycAWEZ9cMMsyPHqyS5dMhPEaRSoXBS3F3DMvUtpCzrS4EcgbRWWoE1YkbDQ",
  "key23": "3SywL5CSsR8N4RgXmnCcnDNHKsHEw3drbsxDmwd8pRXYWGiTd4FTPeZ6QWZZcnEhwcPm7rmTTYNe6aWUp71ADktx",
  "key24": "7qd8o84agHK3EVjg67HVQYmDBayuKNMdWciugheF3uzTWHA5fraaFh5eU7crAHofZEvfFLu2XczwsQGBn7fACNN",
  "key25": "35CAJtaYSPPtGJjUhYyEsdAW4T7FvGuyAcJxQFB7HE6oc9hZMw9uYvevowWFGqVo5FpptkLc8fYD5M3XhQYnTD6t",
  "key26": "r1MbybDJCZkZowQU4CX4HjkjZAKwax4qWuRpm6BQddWhu4ehvkwBhJbrEyKJULnoUoypcwPmStzWA49iVLSuQiG",
  "key27": "4F7T3CeuLhPYczpsViAR2vCJBeKkWfEni4tLVY4YAxUGemTqDYGn7JBwEvkq2at5HrCSMmJvAAKS9LZyPZPcPXq8",
  "key28": "5cEL13zbuZ9cNTRirXfgCafDgTvsyVKn3SrS2BkMMuVofDjcJKKx9mtEEBWkyHsLVDFLHnmdHsaRuWN1MW4Ta1bY",
  "key29": "4MP76wM4njajP1DNZ5jZQvc2b1UhM8bnXTmcRUgSFmtZKc8h8qxjMSBwJNzJLQJRHZnpDkANFy7yr4f7hmLzoZr3",
  "key30": "41NH1GL9Zyjr9dAriX62XMLCNqVMHrknGpSrrUhbcm2rw2m2Kf8c2ubktcs5PHyteQmPEqbkgPjaDRK11jL3nKW8",
  "key31": "5RRCj9MhWcw6bBye4DPGLn7AqJo63qH6CKK4z4GPZ9mxvg2yJKbuYarZqbUKxW7tAFttULHkX5FGfxjKyRU76UvF",
  "key32": "44Lq4UH5vGr5EF8YD6ZHe3g3MdNaF2ULDtB7Asd2giQWCiAUzU8cLipihKLfZ8TwT3Z21CnScmS59GXLnkKQTFFW",
  "key33": "4rei1MuMfxQxXVJNpj1eDNuP4yLNuVPtdF5PbiisYH4ZP346MDjtmy3gHRGykXSdiyJnWRwozYzu7jV8ve9c7c16",
  "key34": "4EjhC1ctoQjZM6dwabU8ksNtoXybNh4oP7CxkubvBz113hLmxoguyqkt9WtZndWxpA9jc1KA14vzzuiaB1jpj9Yg",
  "key35": "25xLmBTdcmShfgb2nVj4wC6oDuskEXx6E9a47Dp7CCzi3XDwuR6Wpi725nGKWasjKDQwoUqPbKzsHbCJgKA9FQDL",
  "key36": "5BVJgdg9GutFjuVyWFvsEqzzyBD9sKhXUcgHR5NzLVHLadXdJELjZ38kWRENaKKSAHCdypcEPTsuyQqN9yvvwAfZ"
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
