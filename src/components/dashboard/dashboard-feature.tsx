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
    "2GwwqRz6w9HkbLksJxf25KBVkxwGBVqrkDT4ZdNfHZRScCxeZmRAjqJpKBnTX3B1Gs1MnjWnLEGkhGfK5hmGM6yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rjas4jm8oLP2xYcPouPAWejGdG6HtNsnrRwJ326tQunu39nka4ggqMToSTTWAGG4yr27c8ToUEF4bQkBTutoNgb",
  "key1": "3n3zHEDQaEdPVvreEVvkrUB2neB4mbYsuhUQGF98F8Yrr21E1WrjDoaUUfd9cx6Y1M8XnqfVkwLhdwwHWrrmxG2z",
  "key2": "2mvvabc5xoKNYwQZar8ioiiKKW3GEn9VYE74yDpTREbkMdvLSCRmwYnXG3CuGJvptkBKnCM8QmW85GzZqzRvsKcU",
  "key3": "772YTVGiVHGKB6RYfC9VrnS2xrTztrWJJk5WZ677sMmjMhYejQReaNrdpyVJVpgNmyx3LzWRnZJTubFJgwiPsEA",
  "key4": "359jvYyUjto9JpDFFRgjUkwB6dmwDJgVhod1VGoFJzwaBHcKFomPTPqgS62RAy1R6Wm3e8bv3ZGJsUzjDvnvdrAV",
  "key5": "4qnYQBwJt4RzSyeXxcHdueVthygsLmRLZAytRmGohhsJ6EQ53LiKVTF4qpLMZWiJ2ng24DGJnxxDuo1TqVja6Epw",
  "key6": "3C6rUGw6BaWfuuseHoNDCLUDHcKr3Jzp6adpQVhr7nkDF5KzMNYYwfqQHULQ2N5Weru7VWLPC9zRDBi5ATnkkSJj",
  "key7": "473ULnu2VqaXnocfeXY3ToX63VcZdAGLhSCdL1EqM1cgi6NbydT4b9RFGYAHJZp86NhbMqnoKqq4swJVLXhxFFcY",
  "key8": "3gdw5W1Yh2iMYwfXxBATA12NGo4rmRndPncWwMD1jFSTYxqPofT7smj73yVWRfcXjbMoMosGni7w37m6HWPkWCih",
  "key9": "SABWgsBWRcjYTpDywbNcdn2PSmg5mp6CY3VEcuoAdT5dqSRPwNximPD5xmwq4HYDRvQ87qgTyuQecLUjJMnQCJg",
  "key10": "5dhP5dbgQZfsKyWvTsm4tZ1WZdyCHmWpSySKSrGoBt3HfEseYsjSY8rV9W7GfkoQtdTRZRRW7Uzj8LpzPprxkpHJ",
  "key11": "4a2qg1WdJ8sqpGeAhMmVpXQYt4TVumLQhAdsRTxv1qhy6eAay532W1F2BZ6oNj9biHRTCb6aDDax4DqaZs2xxnzX",
  "key12": "4ZTRdCsJhtNtTgJR41fVWiywvQudd8Z14zKY42h2i77rStuuv9WxDtvwA5K3Z3bMC1H7gt7gSqPewjPNVzYkzqQw",
  "key13": "3BF1QtQpAgiYURhJLb5YXC9i725xL6uZKg6PGtq5R2ZMRrWWxjBi7z6cAAwGF8GYk36RQXKP4ZAYq1ATEu5BVHta",
  "key14": "5GRFZE92HSdKY6bJr4Gii66eWErzzEtEpwFmgBmjNJ6DzxLPaWzjAoQHye4wT3cQVWyLEZd5tu5A2YJSoCVNdJt6",
  "key15": "4SpngjTeDYRppNdNUSZCk5an2jvNKVPKS9zithBzXnLhD6G5KoZBe2zzwatvC1JNNoAEeLMC5rQURAt7ubFy5HpJ",
  "key16": "4LgKFPY7WuVvv36q8n4e6yKt4FH1fUAqJn2qjhY9eshxRM5sbE59cDwds3iPHNCUXFtXiQk52dMM9VxXruHRBVdV",
  "key17": "5GR7q8fK5FfEoLcssR8B4ToCPCM7Yh6RXyYwaGEdcttbKxdMfCxvXPf9ssB47Fc6aoHPakWTVhksC9ZtNxoMuKyS",
  "key18": "4TX8CCpXp5AkPWSwFEBdkDz7yGXe6XChn2G71dRs4e4GXWdKNP9K2pZDkkdww17GfeyxtTHQSdcyvJQr2NfdKi1D",
  "key19": "f7TEkbMGeFDpVxC3pmCFPDnwyeAA9ZG1Yc67M31a56BUxfH8QnUjdqJCp1b6iLZ1Wg3DwfRbhENxyzY58KYeUoG",
  "key20": "4juefCDfzo3NmTt2ek86UBbuFLzYL38Vpv54GjnP5iKeqKRMsJBzUPd2VcAg4naURRkmjWjUGZ83u4aSoDRejcBe",
  "key21": "3CeZjvQ2HeszpGNeevMSzzXoeG6gAedY8uwhkBZW3Uxxvn61cuDGCnZB38DXvR13aCozW8kvMp41wkxqaebh6V2J",
  "key22": "2pfKUSm6p7xvwPxvRPrutK3Dckn7oPPBi6dpb6WxdPHyQ1x6iunXxuArqstMEAAgmLMS8yR9Gci67Vs2Hdv2Jm5Z",
  "key23": "5tYBPpYcJc8H7wx8CXA1uj92HqNFN4SGCCsZ9JybK2xWAWQ9mQjg8vtnGWZARXJFCUb7SmHZU9SKqd1bh8ywAa6o",
  "key24": "44muv9GmyzQ31tLbJZ8gSKYa3gjbafTBssACNRL2n8ght3SqC1YkbNqdfnC7ADkA6h8R1hGpzR6zBHCSFrcgv9BX",
  "key25": "4RRP3WzbGVozEqfaMgMdTQ7xTfUTuhuH3Xwr6WDUxGY67aXmqXdkcFqUnC9yVoJEimth7qNoqAKEK5QVNRcbmBvF",
  "key26": "5S5RrmDEj4q91PsYBS87rHJo3NJi6BfH2XARMXVqbobkqvQDtjeUaAv1CwD8cYZJaG129yvPAox4MbqGCT8Qf9r2",
  "key27": "3EDwooN31VeB5dmShkcnig1cDt57UD6ofqNECHFc6UkZtVC83HRqNh29ZDBhUvSJ4832Xtm9xET55j6vGp18Fzp3",
  "key28": "44MpdvuVuCQVRNfaqygG8diBysj8eFBbUDnLzpVFXE6hUkbPemX5FuwKpex3NffKpRj2tbeM99Gu2jVJAHG5YjMG",
  "key29": "5HCFzK9Aje5haPVeSEq9HheQxXzCvqSrNEabUHyWXdgbQjrcNNdvoQ7QoDV5oaUNeFTwBRZqDDz272GWz16tD4kP",
  "key30": "2HoCADvJMDGdZ7imAg5vrvXxnYmGqfaYUBDLS3BQhqQVYsCBCLVinM9kSLnVmVBSR4QKmdfx3Zd3MpTu7pPYryDd",
  "key31": "4z3QhcmPq53tBVCafNAvmDH53C2EMJfmexCNZKZgRGREvppYrEqdMQmLUE4z84ou61YHTfAhQMDAHtmECoQvDzUe",
  "key32": "55W4GVt98FcrJWoHQziipidajaGgqaFbBxyD2WW6CkM6LybNyGfDC9379qJhDRDneCtFu4UAnJqoEGCvgWn7AUS8",
  "key33": "4qwrcKLwTqWpeHKCoefA5ZzPa5ddnGF7AeLLcWL275SMoRNazgZche8J1tXbTRH3SPr28SWjeMgsVX38b6RWnrE7",
  "key34": "3a9pUh64qQdvDNM7ckwi4wgRvjFn7zyJignM6ijhVYNCMDueSHG8C1MZYBYXMEg5Y1fcuwrExiECafNDx2gtqT8E",
  "key35": "5Zh7eM3QBDz8zZ17nguSmhyFvMwRaMjQ4fQFd7NtD9fAJPeSSzav4xtxofq1yj1hfFg31Q8ohqbzqL1EcnkKF6dC",
  "key36": "4MNhLvehXk8cwuQoL8RmUg6HWGuCFfU4gAXpVZnGS88s68kJtEKPbGmp77eKmK79qJW2nQ3uGmP6PBMFu91gWiS2",
  "key37": "5SWQXdhCNTQ3XhAZTuw5Vef6t1wueALDDAzk2gJAPV7N3WaNfrM8pQXynGUrFQWx6ZeyZG8XzLGXjNhHrhkXBbWA",
  "key38": "WTLyeXxQ4oReC9m9d8cyUkURnQbKkchqem8Zd4WjYwHPTxitkmCekAhU9qqwnYR35Eruj1Lq5Jn7tdAJsyk9hYJ",
  "key39": "5M4qSNgiuES125GwSgXtDkezyXmT2tezqQAPyJEwqjocqJP3M5fCYByozw4t2EGcp7HKQyT647ybwMgM5GeWJ6jA"
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
