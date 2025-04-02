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
    "4uyTRRrPjB6BacF4oBUhcXs8aSrNWcTFFKgjMDTXjLxooo1isCT78dZfEVQLRpMV57p1yaANrJVM8Fa2xTxP3Kfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33g8NSGCocCDZicYnakGD3UcuT4gAArxwkZphcXUvLjfW8YP8SFmmoeA6xudvsesnnEEkA16JbKhJS24egQJ4sqW",
  "key1": "7tnAvc66PDMxdZWuTAQ4rbsyHaArUr7UPDs3YSkDZvdr8RTnzitoQKvkCHKKdVhUU8XvV2BiopuLTkS78rYoc2j",
  "key2": "4p4AFw9hC6ALA9XUncA1UUmnV6cbbnjF6gsGPzQdiSa8vk14mY7KsaQvU4gSKML2YV1sR3DSFyUuWQ6FHm3jcomt",
  "key3": "TjWXXwtPXYN5RpJunUCdmunJ48nJQNYcAoT3EiKXB6Zus4jYVqmdXoVshpxy9P7x2ZEA88Aub2d5gvkjmLTR4cW",
  "key4": "5XC879L8Nmsgbr46YHunLXxi79DyNzBrbL3bhs3DeiXC1yQbcQxEUP3HbyMfC1cjvZhX6mUkstYUAae9hzpDMTZt",
  "key5": "4FAYH83PEg4v5adxvnvsHbqrRYzY4mBjRoYac64QQGgEdTdgTQDTVkTshteR9x4CwMwzFWA4hK6HS8uxhgHJwC3B",
  "key6": "4jXoWvSsskzezM8sFvCQhNgzQXCyuii9TUwNZRxesKG3QGtvrF2yjVf1mbAG64uDmL1ntqxST5ZRjJ3piRVfhmLG",
  "key7": "4Z6szrZypHHhYRw7NgLF9kYTi9bvtUn8R8i13C2qXX2GCrAwoitsGEkuxM3trQ7MrhgudTH3aLCtqo3pDGUXi3r3",
  "key8": "3MT5XNxYhFyaET2HGUAyrsmJ6huzdH4eu2u8X6EVcVuJavmk1cVuZ9PxKAypQKcVhyMP5jrTcA7WsJQRc8LK52Ha",
  "key9": "52vhKq2aRUFqXi4fMo3XChFap4fG1LsbvVni6JC6VMUomMxx7TJBQeZAKmJZ3GE4FPzMWWRpF7oHnoLzsgaed5t5",
  "key10": "5NvYdF4CR5gEXZfucpLP3z3a8vYm62sijjiM8c8uVnseejVHCgaJSYiZWpqrLmMBAmfrpDvQ3uPLKxMu8g4PUyHa",
  "key11": "QxuuByE69R3pfaNkf5kFvy7FM4y1iA4nftsKqLE92txtzdqvTPTwiwvryFZD4cDzLn7cP6vNTiE5p79Mwhr27wu",
  "key12": "4pxi6HyJaj3V2fxEuMBLVn972cjhZ9J6VB7GyHQLG62zgC97ToDYVYxnRzcRk6C1YGxHwbDpk5vPypFpNqfwD1zg",
  "key13": "3nTNq3VXS6pGbV7WCfFJ2H5sxMsjBP3yk1t3GFLf7FawkiSXRfyr1whdgft7NrSe2tVnPBxbxQwJHdtupY82k9Uh",
  "key14": "42yh7jUuprfoQoV55S74RAksHEic3piNwX5VpjWJnY2k475dsbgJAu64PkEquCJkzvwBFLeFNWqRCH9j6nKDAfmD",
  "key15": "3ckAiywJbfhmgm3paQevWnz6zzTbSAbNYaifWe6fYgBf4N6k7BH4WJUUJDA8gHWtBvt5WVK79w69KKbFfEShDeng",
  "key16": "3LMYTxdUhDFUnmAhaXmi43UJcvzBsnGjPqAbpB2K2JisWbRb1EU7reQXyMA3C9kffd8EBhpvSVwEAfWzhHWjDWTv",
  "key17": "33ZzxRmEZ1FvSgcQdF2MsLH5Zta3pUHKYCjSqua9bJRdWm5XexaKw3LYGpfVmELGUcyHCCjdiBF4Hu26uEgJYYCc",
  "key18": "fVWgMZEpC1qjypqzUepkVLbQwxegDTASGRVTAdK9qJRsnq7zK9Tex3wwUuoLno9tdT7ooyv9aabobYktSkYvYdQ",
  "key19": "3VVaFv5fD1q7FL6SKwzRBbo4NpTPzUGbKcRLq12d8ZHT3vsgRMZs9vK3vbsaNx2oXjdUrETExr2JSzA27TbmwjW2",
  "key20": "4Mx2LGiyWfWmNVzja21Wd4BU76AsmHRwJ3f8FSxiApKaCiooxuTfh8PaWGSaKwPzWRmpitkqpHXGQD7QPuwaYkZx",
  "key21": "pwfqBnGW7eVrSdSgZL8MbcDEVPnndNTMUi5UgkRmjXKkzmzNuSANKne9wELaG4Dv1jsUMXV95J96HjzDCpUNM3P",
  "key22": "652j9cZbgCbrEmYqWPvAY1S9nidVgmdBtYpSgpgoCM5JT4YifJn9AXTWPNKEibHLMay5izJvAHLv24r69bkGebja",
  "key23": "2SX9d4AqzYCJANUVTDu2qxiwqGX8BphU1mQYw8Ek9JcQzxShPLimTYPTzrnUgjG4amfVnvxjVQZv8heAncAcnjWF",
  "key24": "4P81iW4ScmbRHbXGHUcH5pvPNL9we5aGPkFQaYrRBvxbDtbqib2WSHctAyhZWgKJapfhh9n7Wq4s3W8wTnuYvTze",
  "key25": "62P1myLFUay49sZpJ2LmwtovLA4GSBgLGCnysAfcKJ7PKJy7Bz5Tz2js9E6RYjF8dpZGmS8oD6fpgmBNUbqSYWnF",
  "key26": "aob3hK7ZAGikU1xsxBtuypWkX6gr5tmeTHZfn6oVAm95LVWZCcqeiGzB4QnKdPjixCQNmJRCsQTmGMGKoy6eGnD",
  "key27": "33TNSVXQ883ARqKXFjrDaHXwuyqy9yCx4geR3bwMumGrhkLWh8aMwEx1QEMWSynoqvTtQpuJurj7QjYmNMkTKKQ1",
  "key28": "5BL7L1BYhCsvh7wwPkjJKX4gRGMTZ81tf1iAT766HYJEHBAMg5q2SyFkHrcmW7pLAcPuhrLk9UdscmShQBLuUsbd",
  "key29": "4hcuy4ffXqY44PBc4pNbu9gxZHM33rTywtcpUZsJXMoeDDkMSr8UkCWNyrzBTwYZNyqP1iRSBkQEjGjqtTwDFGTn",
  "key30": "xVp8QddrX5BgPn5nVuCHrv2t77nkq6HcTVvVGkPFCBC63VNfDU6fXZFj6Vb6ypqUxxakNT2Noa7s6R9pJuAbk7j",
  "key31": "5uvRUsDxFVYSCArS9agEnVZxH5Ef5HJKMfhYmQ4R2vWrvsbrHzYk8WBzQGnPbvN1EeGvmXk1qk7ZVQRA6crMgC1K",
  "key32": "2PSZHUYo2BVHDYu4HEzmrm2SkHgWqgW8gA6aita8aMQDXwvQw8bCEYkJuqN2CNP4rUN4nHHDhg75De3cGw4L8YnT",
  "key33": "4iztJ51dE3p9Lr5zFEvMbknRhZfPEzeWBukiQ6Ka8DLae69uk2du92oE1BAaRmF1U2oeJFhLcE9t5eyBCUJJar3H",
  "key34": "c9PeojyL8SRzfYfnDZYhPU6ii898tbh2LBXwfWjhSaMywJ4trk1wLA84mri4CDwf4i2rWHxixPYcLChSyAte1K9",
  "key35": "3cAYE5JHVV5XWYJbyGHKwxzA32xydv7rPUhH5gHtA7Tv51QUGg5TCHuccUCY6FLdcSpeMHmur4QbmLPpiSMLa8Lm",
  "key36": "3S8eZ3K4AkB3HUZun5BX8ub3TPeVLDbbGuYi8j7n1ocqMv2gqK8zimADAsz9bp7KGbnyFp7DK81UUeyS988PUr1g",
  "key37": "41hjiAWGAyK3SQQvbAeT2c5QVtkkiXi7CcLpMhCVg88ppzr9F6SfByNLQe8RsPKStNRbBhhPEMXooyddq8PXyvBj"
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
