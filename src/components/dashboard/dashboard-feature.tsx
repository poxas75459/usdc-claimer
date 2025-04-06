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
    "i9mTvMttvXeL2FHKzwTHWjUH3U8z4VLcgw5ZPYHfB7DodhMShaneZLuRDACQUmm68rH7rC4F53vwEHPJF1WsziF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21R1GYgm3WXWugNfwEv2z4r3CLVuRBwAJWwWgMtb4yX9xY8npqUTGFGaRLA959Mdh1sKqVLA6bsYLJ1jaBYw5bmM",
  "key1": "4oqYBTDXnZwKGD6eBTMeq7QWiCJhAweLtpN8vm1Ngfj7V6ftDRTkKoymGzJHXFHCnLo8N58Nd7UQPbWyQDpaZZtj",
  "key2": "E6HF2xmaSeheJgM5CwzM9Nnz9SBnUjhJFaEWBSVfEtdbc6RZaq6zxgFhK93t3QdsUqs5Awdc5xBaLzDZ7owMgEi",
  "key3": "29sDNRYJSLMNs9y76FiqrUc6WcLkWyKqQZgjksgzKyo4yD97ovLY6cZtUpM8y8yB3tfLSVAwywxWSKQmJawEgwep",
  "key4": "V2QZLk4VWDVhKjth5gvubNKfWBjtCfkVR7VCuG1xPYrEYMTebqMV6Ck8CxLf5rbTiErm4gUQ13hUKn94e348kQ8",
  "key5": "27fhpNguqrp1qrkQQRtr4LxsiW6G2BzTMM72kNpC5e6fiajorGC2q3ycYsgMbGCKw8GXiojgHGuz9gH8HnM3KXYY",
  "key6": "4UtW3CZGwmNYvMDRE5EeJXrWCWPxTspjBae3rocYb73VuYyR9VGK1oTrNZY3yrwBvSDvst9KEmrhSvasru92Af8w",
  "key7": "3LLona9BMobTcK437aqCPiZLe73MbgpeLTEUWZDJSFncpn4WPp6iV1HcYyrh6kiSM9S6k6CFTGwjoTRWxRErafSC",
  "key8": "2FDc3Koq4iqA8oHbmvpL34GuueHcmUrVt6iD6Lxip3Q6fPoug6BsdBAQ6QzHJeWe1RETud1n82JL2s1Kamt7W5ME",
  "key9": "5buERJUTbSJGLh7jHp87ByWb5u5RbeWmGQdJyi7dKXBXrQJGb6sF9wxRTFtmvfANNGivSDX2jkofaiXVZnxMsHQ6",
  "key10": "3zcqMdVoqpSCVi7wwzhVQnQqEz48qrtoFScrEDSt2vCGivsphfAu8ht9DpcVBkLBbCs2panpFdK2G4Ah1m5LCuaE",
  "key11": "4wsKk6vhcy29Qc2K5owfTPN2bZb8N9DU3qVuAQiVMH4heyypwhfJXtJve8PexFxmZ9Lt1FzqstUwQQviSyD6ZvM8",
  "key12": "3Ryk919gvd4aGhskvpLvpRLPympg6ngExyyFBCnbyrgdJcsoZajun4tpaJCYbyKhT2tJJmsWSb6EvuYJMzNDYYsh",
  "key13": "jubMN7bV3RwWP6tydBZyZNGWDbUq4Nu5hqHDBr5GP67SB3a9G9HoD8QufmGRbEzyGQ4FcP2ucuWrYhZ5swfUhxj",
  "key14": "2EsrZUVPwGmvLDquUyZXQWiVK3VYBakyt8E9CTXpVRJghGf3Ui26aZruqfcuADhEb7NdppsrCbqCLzwkSaA62At5",
  "key15": "52G9n7a4ZVZYxPkAzJZznfvNE95sLy8Zg4tHZXH3W9tt7nqDi3YNoVi73LnAzxHXpFPRwL372T4kkQHuwmXLcxSA",
  "key16": "tWCSW2V2QHCr9vXMNSXsnFdfaLNpJnmML4FR5ab6NmRU1TsohqaXK2ABv5tzQdUSezZXKFV4pUoHNwxuhhAHQ8R",
  "key17": "4jic4nFxGrchpUxFAi6CPKFCCDFky8PfzLTKFAfx6kVXUSNELoUvEv1B5mLUfJ4vm53hT686qd84PrSobSqDjWmr",
  "key18": "gMThG5CN2LGNTRxwxNdX4f6tJvEmBTRqcxmWjEpsLKtgthyBEHQ5jTH39GG9Pno53rFivDx3sDWTWSYL5vkYV9a",
  "key19": "351uuiv8GnheXmeJzcAQUHnPU5TZ1cejezcaMone1ohwh4g5FPWDkg3dGTGwqTQQXRFCMikEAYuttCufXB3megpP",
  "key20": "47SQevdKBR2gVLRuGkhEqWFvc8LKPhSucphrUYJZMcRVzLsJJVos1Gj5zJ8Hjj3ftKrew6ZSHDomNKj949sSMzxm",
  "key21": "3CBgksqrSNHYKrQjrKmUJZKdwAijAu59RXDu29XzGmibDtAdMYf5BmuEJBTMWV9fzCeR1vLAEK8e3mQvrzBfc6Gz",
  "key22": "4iaRSv2LsmbgYhDJsD5JUcYFdDrnvmEuhRvp8dsHe8whMtD9VUcH7L12pXfT39nTvGuesJPr74TmR5YZ8DSqTvRZ",
  "key23": "3WfebhwFKaZifsTkuCAGTstzHwHCXsm4n8bafasu6KgC91z5zjvyj3CVFs1NEwGyPkxUMNUy1MKoWFd4Jjk6iP2i",
  "key24": "3Ckfp85JdNcSwNGquNAaYNPcMmu7W2KeeFowGsR7dY6jSMYa5msFs1nKGRYhmDHts2zvzefDnMewBTp9AjhnTXRu",
  "key25": "426vtffKgsBeB1T5mGCUu8gzRSzRPfpd1EQMZpa8uirBuQpDVbmPbUUu8siq5rCnXxhjFcSG59UxQVNZy4YHJU6r",
  "key26": "4rqmp9FZzXpGkapuQpuuSjr1pXY7J8bpVVrhem2J9Nk2dVRQ1zoqxg88ptp8eS1yaaBFxkqP1qEpCGcjg7MwaUeu",
  "key27": "44tM8wQnwtFqjxFHohUMxKSnh5DwDEDzvDGQcHZvPiAWhv2MQeoAQNfRagAYZ31N1SAMACGkUGCVVryo58CPxzZY",
  "key28": "4YeTxrZBFhBaF8ZAfHgfhH3iVbXxoTbxfGUW1Lpp1Evad7ajaXcuBjqGGtFPHebgPAAovAwQMrfEFhVJ8bgFJqPU",
  "key29": "2unfrUUhTM4rrPRkYvTfYkpYvxhi5UCg8E1xZMLgvYEPAbKfpux4LMSvoMvXPs3bBBYXnjETR7soUCaU8A1m8TBL",
  "key30": "5Mdt2zCeAsJcPRbdKwBVBfks3Jtxe3mtTUw1V4cprGxZ9oV38sGVQDVJgAmc2z68wuyfjrkRNnyFiqMmYU2BK8CF",
  "key31": "3cK9ZgpUmUYUqqkNoi5hYdsAQMb4GRYXPALFR49RgDMb4pJurW68GMiYB9J4maPEvHagv5fjft7KHHP7ACLsn5aa",
  "key32": "5D1a3v6vF3Q98ujfAfr1CUagBgjxnATaWPKB88Wy4hvqKuWqgRBmkRxympxXacjRcUBkv7S1vyeUiKWScMWB8s2Q",
  "key33": "4JWiUSd2onrq6RxE9mJypLFvcbEpnz5yeHX4aVjKZyxT3xyhBPY5ockKbo1yJAj3pUTnXDUS5mL9qjGjWPKgYWgA",
  "key34": "1gQq8q38oq2JUwtmcdXS4ZzcvfHk47aXo8hJR3gcvSGd93vEHZikE2V7XeBSb49pyYNvYd5xUi9Gdkk1utgG7Hz",
  "key35": "Lxq2foi2mvKtX13ZhVMBLQDAmAihRJBQyXyS36muJdieHQDSwXrLWWUCJXPXJ79CcpBUP4aczd538Tgfnjiijo1",
  "key36": "47uGZcnDJ8bc3ro1J92P6J1RFyz3c6LjWGD5w77zZpvmBSmjVeg7k2rPSv8mJk9Uz6NVGrgUF98X8CJfhFTE4bu8",
  "key37": "4C9PkVREkLFENNMnHndo58LpTrBXutXsxDdEZkunjxhmUmebWqhLTxt1utfCGHRjY6YKnfDLzqLfZg4AUtRerR95",
  "key38": "2Q4oPtNaPQrTXrYtrS3quJgzTye1LdQYPTg3ZSJqF6CGssf2yJmdqGAg6qtiagqV27PfeCoPCSXN9CiJahVADm7t"
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
