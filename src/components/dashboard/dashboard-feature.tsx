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
    "aAUU5jjjGFxzaoA89Bfj8cgDje4jJ6gRTig8hegR5qRite5zsLL9Y2Sf5faArnHUfSNj9gby1yhWDCeeSZXy8hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2JrpRGzzFFVcQA8zY9o5LnNu7KTtUU9nYTWm3Tu2Hbk31qw3JnqaaNVWBGUo1A1bzyeJHUuhcKjKzkPnCvyJLN",
  "key1": "cHxe3ttQXjio4SP1KXReZ6KqHTAVK1cPtC4n3SW7rpeS3yuCfuWEHM3t4pWwKC8yRkQkQkrqPhDbx6tYSB6opgp",
  "key2": "oDHb3Vdvf9ko3nUJU3tjEfHhvoeJBPbazmECdT75Xgy5vkE8XUfQL1mwh4M6Jzoh278bXrksrjtZwSGNzaGZDj4",
  "key3": "46MTpEVvkhmKnYDwimPZroyzd7eYoEMG7wyVqzkAn6LuaPKed1iMyo1vYZ6E5pTEQ874XQkPPTipVjK1MMU7W9rU",
  "key4": "3g5wCp3LoEexU1YHswkPCPaVEjofbXL1HWaZfuveoGgAWb7NG8vKBweoRLjpuw1z4tNXMh1if1dTBK8aAWXKcw93",
  "key5": "4fNkkEHqvLx22sVzSBFSk3qrCNwGfDtCifxa9UddHcj5sULJS4UJfMsahxRKwNDEYNjD13DhTQQwrUNBr9czqf8Y",
  "key6": "Q2CwbV7zXiqdR44BMbkmkjCtTBkbHWTkQymX5dVgxDh4oX1JMeqswTVYgVuSNFSBeCRDAYvEvNh4nLnEGsESmBA",
  "key7": "4miF7mZ6YG1zpLhvsM1aaMFiNVE5QPJJi5MYaXFEDfcur1xGGuDFzCZqT7viSViTxCzwrL7n6s6YKMxGLutW58fX",
  "key8": "2BUzMh4LecosYbtZZQ9CCkJHdKYaiTW5oNHBP9rhhC6bZ5VmCw9g1VG9U2GoTDDUgtG6uwf3RYk333b2iYbxPXcw",
  "key9": "5aG3QPbgHEtEuPphtskz9GG5Vmy6vSgSCy6xFzi4amHrVmg9XJe95BvL6erR7tmLiEgp73oPqv1VZG7shWuCKpVX",
  "key10": "3CYzLFb4yjA6Wd8qK2sSJqqadQCNbkWUoXtd469PtBDe2PZV7oo1uNGNJHkeTGqq2ebTTZjLdPfCGgtRBDw5b9Kp",
  "key11": "614kytScZijdz2oovPdYc5BUuf6PkQiVMN9ubxv9fcYJe6KgEG4x9Ntsaqry1rKpiGKQf2qzmY2MJhWqz7ZGoDqi",
  "key12": "2ATRTLn9fhfbfRGwVgEHs3DtbEa9jMj43BSAjAfGbqMe6GNFZHm61MbKQ1KKjVs8tzd4Cz6XMhenHsrj82oDgDvH",
  "key13": "2RJHuDmJXfTZfDwykyVcjvhq9i8RMdwNVxwcTzRBPHQTrdUujDraWGmPu6uHWyuRuoNRkDj5QVPTM47yeibXh2Eh",
  "key14": "5QTbL3zs5dkWSgH2whet7ETSV6PA2KX67P35xCj8LBZojWCxoo1nfrxRQRdCKLE2f5kuQBoDBGUYYrTmxJD6LFzF",
  "key15": "2yX3Uw7LPndSHVjNfJQKoYZg4BZVN7FRkjPXwEzMeGpeLxaTFFH3oG4YjuK1fQtWeFwZHRygWmC3nQxiwNQdVVkE",
  "key16": "47HiPxhYrcJwLA6WUkB5ZFU4bPrJyKEqUt4xkUb1htGptoBBsnZeFQAmwAigmNJcmoJrgnsozCXDZcPWvXNYQdyz",
  "key17": "4cqkwYu8uut1AzHmpmEm9aHscffa62FpypB1m2g4fcmRxQ87nF8aoXdZhQdx4UkAquNZCB5bviPeZxdGJf2T7mjJ",
  "key18": "5XYhUf41R7atbNNtpoBV4PZYs52CZiEJUfNFfZcaC2RZCLodJNKKryiaZDjZDHaH3BJxJtCSDvCthoT9swL1Lf8J",
  "key19": "2tGfRCRr8JZfan8WHebFDRC4Qv2bJufdD6WT9R3bkJdEcN3cbRTKheCZf4YiuH7cJ87YHhMJTa8QH2Q6tA1B8dpj",
  "key20": "5ShcphRnf8bHKKe6qTf6jGMxzAKj5DbRMHv2GC8zzVhZQLJU5ZHKw9HyCxRQCdujZ8UzoQkyMaHiSUDg2BaKqVYC",
  "key21": "2DAi8yjZmmjofKVXtgh9uotxPjxJNyXbD6t5cnH5RRB3EWTdf3cZsYhzky6qiHi28FMWyE3ktfCmkSpvBxCXGFMD",
  "key22": "58itxnPiaBQyRDauXNHXqqKAPKukxhckVBgQppJRLRYiueqXGQNd6tfToNwu7AYBubHq3gMwRWDsxXtfzfDwDXji",
  "key23": "5oejWPQcb8y5jYEZrrBadLsPHHz2HAJQd8Bc2ByYLW1qRcCbXEPU75DKRaZqWaYqN98D2i5ut1Eo78HNat9cDPpM",
  "key24": "4kS9KQd8wKe6MWNqTw7cCo78L1bY3Xfr9BZ8un5nda8znRAxEKuuZKHQdT95BqzXrxXT5kUxfzXxZXJSSGqTMmN9",
  "key25": "4599PKf8RGAZMPmZ2yKt5K7qdeJHvErFPu4UomqjQ5xGZWWSGaWfHvQyy7j1gxVGdSU2niTFQKzu3GvTPpTTzcDq",
  "key26": "41yVYWfa7gcxmaXbiYnY5cymsLgbJC5Lt1yfAE3Rnyb8U5JwNEGGhRg1zrfnToc2RLdCwgZ45AwQmiNKmaVBGPbt",
  "key27": "2JraunYRNZp6q3wLpfWXJ1a6g2ioHLNC4wekKEmMHy7ncXAYHLPFefsUf5jC5it9YZq2buodCFYcR3Za22BPt36A",
  "key28": "27iJwyKzygCm88XmsgB6eTm3b8mDdy9j1zGYaQ8FjyTuRJrQmx6L9eoniTHunHLriMSM6tnmeEzyNfFN7yxBDkmU",
  "key29": "4ucYqYHPHpu13M7PYn3dejHcG817jJwHzq7QeC32p6tWrkhYFE4W1Bmf4LEa4QcUmQLG7jG6uHejQ1n7ZHFF8gzK"
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
