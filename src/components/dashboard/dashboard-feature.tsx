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
    "4FnAw92xSWVhwUf7C1tqvdNgndMNh559iDAiwUvamcvKb2GVba9GawCsbR67f6HMb8LcRs4zETJxKGU1tgM184Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hEGuXEBcMPWFGgDLMWGqwV7EhEFp9nrfUKwxh36Ar9Av75q4X4QSon262JN2kkU5ZGERH77RBAvA6DrLhHeQEW",
  "key1": "4CnjPDyXir5pnejCoeLGQc1CsYqFpBMhrXydS8fwDmcSHGFVpARumnVw9CY4oSSyRYS2vNoNsa5yicrnzXYZzcYZ",
  "key2": "255ndWxTj7YkfCQYmLbQBSjM654Zh6j3qm8gqgh6tEcD295hxTdBB2ELCcKZWXHCUjHR2tAgVQ7788fZK5J97BMS",
  "key3": "JYZpG9zFLiUn2axWezq734q3AoKbH4DYKrQpxtQ1tKeVHjZZH6hEwtsmYCHas9TG4CadxRxQau8Nt9u8Jck5SLN",
  "key4": "51Hj24kDESeNx3vvEVDDDaVnGGiKpvbrwg21MHsTcwaUbGALXWyfzxyaNwhfRUU2kTEV4XwhKY4AgYHwgkg3XFYk",
  "key5": "212kDCz34asesL5tcMdzhYHPXx3ALYmHaz1n1Se45gwdVtEREMpySae73vvS9jnpri5QNeQFJwujuzRexDocQw9F",
  "key6": "5yfpSUWKSj44t6qRLJBbuVqYMXReGiJH13NW9uRFDUpHBFQ3tajzD9DE5UREueD2nbuQNKNgQ2RoZcMF162Xuvuq",
  "key7": "QebeWcw2fUupVcL7oWJKdRWxWwrvgy9cn3syXrX5hcaEAKcxZTCDnTXxg1WqGGLRRkbL3qXgKnWschKa44328LK",
  "key8": "62qqdVgXog4pXamtTEk67ZhD6gmwMRuzps4XabvauMTmXVtgu7nzkCidLYoxrNL2MUemfVSaGYYazUYXY1nqTKHf",
  "key9": "3REDXH8pAexeJbiUmPJd6ZkTyZ5yMFXibAf1CgDUJQ9cuFwStFp6sfmgjKVwvcdhrekyABWWbEj7NJgJpfonHRbh",
  "key10": "5QeBe77s5DDePpdgmex4H6zDp8kBHTDx43jAkgrFywKuBmB6Y2ximXoAJi8STumg54KcBJN89LXqk2sU2uvosFeU",
  "key11": "4kwmxD9en8BkK7iMVWPu7rwjjreyrg2CXrrKEy6Nc8DcJewq5DrqjQKwHV5vWB74kFnQcSPzS6F1dYsX3XV6Mc52",
  "key12": "5tYbXvGLiysfdK56JsnBGpyg5hAQjSngyMRRj2ic8L2VdBsraf9kiVp1S3AUB6GVxLuAiy9o5RPkC4zFWcKaKHMf",
  "key13": "66C3QckcfZtu9boGASfpV8fFUK9r4WbAehJaeCXsseS5Y8Lih6h1aRx4USSDfbCMciCLjEXTWWNFeZKkXRTy5jPe",
  "key14": "5cBxLHMSYQy7gJ41ENhBLmWzMyvtC6NZDf6Q7V2qVNV48JSe6cVAh1J6tvNnJmeBRpjWaM95xKAXD6ngE2QsAA6u",
  "key15": "52Ltr4eoXGsxRuDVGkhBNXimymrU8zJA4YkH7SVP91MyvvVm6CqnCGxoKTtCgqiPbEqK9KD5vKr1M6ewna13EM9T",
  "key16": "4UPAC1C1X47hQhq4q923uXwWWnQJrDTEuDXi8eScJ8gmDhL2Wp71QLozMt3ADUx3VLXfcaX6Z1jfxmoDUj2yJfpm",
  "key17": "5xH4h7W1sD946LyvmMhqeUR2dwZ9jHFy4kP1AoZrNSSr1qKT7PwaQz1cpX1bf3SEUvM3y3GGg7jZC72NDNPRgjSv",
  "key18": "2xApjrPBnXiWySwNZG2PrHRAftUiNMznkm91rpHeYGaHe38F87LTYyYGPzykAbzMKP4qeEayb7VrVDohE6mKw1d6",
  "key19": "53fsgDNjnUEQVVoDfo7fzGkUy28MMiNJgC1LbeuBhrcv8wgbCrMJRBcAUtjHpwGsGYsgZh6Gdg31dCYzyqZTu51F",
  "key20": "5eEiYKsMEVexwkPBoRuRDBikvQD66LwhfLWyy5YG1BnmoKSMaP9myohedACgfUdr5bBHn8EbNHBEHXGfCmGCnbzw",
  "key21": "5YJBeCZq5navrzZdNBChTQd7BJcZQHoHhQMxPR6QHS33gDcFmeYooyYsu42bKyY4QwfJeiaHvsdTDw9zPVCQbfDa",
  "key22": "XDdvCKD3XcQQSUsXKfMFwWMqoK3f4St3thQTn5APZSLr8Y7oHnV44TnGBV6uB8grRaKS4fja6cADZhn6x1tQt9t",
  "key23": "62unMGdPLDa3WPHJLA7DcS5ynYpZwXKwfviGmNviK9uzLwHMcj6nVVVQEQAhVVt1r8Q2cN8m55erJmDX2PjhaEs5",
  "key24": "3R9h98dsDKR3EbAm5mzbfsNEG5xvEvbTT1AufaCNUFjL7M6C8JJE3Gv4JynQKFwJqyusAYYU1aJ9cPWu9oJVZ3mn",
  "key25": "9EjMKKAwshoudUc3YQnYoC5DYirq8aYmrNYz6TEJoBfNqtK9yF4BvCDyt8HKA5NfK3QutWodmWYq1jqJSnBrdso",
  "key26": "Copd9dbGoZ9BgKzjQ7SB5PQQgm2nMUUganXWkbuvrRCEZp5kRSQzq4ELAcEZQDVJqzE8xwygPrVjCGQYqq4DBgB",
  "key27": "u5hDCxSV773y92naurrHfxRF9dPKgwFHRK9sMi1sATkVpweqRnJDsixUhr1fTEUTrVDusea1wFzXAZoBHzzUrw4"
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
