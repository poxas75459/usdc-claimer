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
    "2FXKFFYCuCY5E7E6um3Lu8yg14cQwgiAbmnMGoot3yZ9RjzhVzm1f8KNY1jhdYixcVHBX1QH5NbtfAsJPsxZuuSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5TTCiN6JTf3aoehJne5ud5A2mMToAZ5m2ZLPASmFps4b1CQLm2fBMp17w3R9xecFrkFJG53YayUMomGDnXA8F2",
  "key1": "3z8QBD1NGjTs4adgmXA2XW6sUnY7xeLJy8w8ES1ZLBoM2WP7GPLmNwWL98niWbSiU6KHCYnoFg19uhVtBm8ufduC",
  "key2": "H3hgZrtxzioBWtxatff5udAZXzUQ2ARRa3KjzUbRmXfzbesU2qpbV9DZPV2CZ9Y4QagFcWYZQf6qfN8EyucpG24",
  "key3": "5WPtmxp1HLEWpA5GVYosHvfB868XvXQwV6yCD5q2NmZzF8uhEuyEVwEtxV2fqCmRo2NvsNpWQxGCAAwPGf4VSTfz",
  "key4": "23seQ9JhjqxRV9F8UkSgLs4kEJfCGwQHbhAmJSB7BjLKJrt8GeguYCu7WmPrztL7VYvUTM4XdBjQXwCYCC6ss9UN",
  "key5": "4V2MawwhgzNW2RKsYp2cMk1bRkPLcPotN6QnBZiP5N2DyxdcLPrCsEQxDbe97ppn5rYbACmnpzTuMQrk7pCFyhn8",
  "key6": "Lns6RGLdqVKEDhvea2YDN74i2FF9cUPnSTA3hX7JpHuLBVbhoKoP36LhsM5UueR78tfTt6bXvASe9YzYDpPZgtj",
  "key7": "2KjsChPbZR4E6VREbF8wPbHeHAoV63fSWXeTia89zzdHpWA2kpY9JDK9gfX9Vx83CHd9L1PcZZTX27FbLiocgtNJ",
  "key8": "5BmKb3LEBEdmsAeGRhWor8jKhdFpdVT43Lcrdkw9qc1iaq48iN7XAdwqstdEsew8ycDN23ZC1BAzcBQisrZaVYb4",
  "key9": "3QGms91o8QHLKv2YM7gXXZwJzuRthhWiWJwvdkg6BWdvC1CmvANPu5Fb1B6jFGiqhDa9hwg7fu9b1K3ULM3vUpJa",
  "key10": "3PGpXHAvsr9gQzzT9EnnZ5uc8qF5x7ynVYqMd13ZjFJCcCpL2ngjGCDZ9vh7HWnA1T3f2aHuHfZxfVPMjWDLYa3X",
  "key11": "rBQ9VKqLskvoJ6WjAwsQdXMPd2yyofHtSEo2YgyGxHJxZE4cPXFKgSxPL2xkkvzFfCY431bC4s6ascHBFK1q8rX",
  "key12": "2CfHxmHAKqDgkEwxNxfUXr3URHMoBAYEiwi6zdBaKDt6TctrURkFhjBW1b5DUEQLQ4zEXJgNqqiPvpr5TTfaVdcu",
  "key13": "5egXk6Aqx1Cp3cXeKQSEKZXyjJWFMEs62BVReK2GNeK6JxmJumFvF4TZCz2H2DdJkhFbbr8rKFUrq9JgybbZNfcb",
  "key14": "5QWHV8EaTprRKnZhrUb6YvTCPXEGZ4thds1y5cyzyRcMiCqGmqaVDwHMsAcQ8ctTXrAtMyroLQEK4srKF5VQirYk",
  "key15": "5HH29BDFQk6GNc7w2ZARRLfxZQSwzbYDspCHNWRBujDNgm2VmVQD4GcHczyF2fvH1LvZkHpVS866qtmvJE1uA3En",
  "key16": "RNRXaifQtyPoFcnPLdUa5zNXgd2UBthQfFeMJy6QHxerrdiW4xN41meQRY5Z6239yaD5CYePP8CyiwWEj9cbD8M",
  "key17": "4MjcpanTHG8RshRJbqY6UcSN4EbUY5vsDt942GNC4ED78a1MzgvcRv6CiHwDSELjkehk6tiqsDx5o5eAiKE5eTL1",
  "key18": "64HBzz95ktKu5xuqpSzsL7oRuBxUsCqEmxG3oYXZ5xBJ8Hekhmb3KNHoNXgCgEdwHeokL4pepNucEf9CsDm6vJ2y",
  "key19": "wXnoBTuFvWCydAJLx9kVAsPT5yrobyGKYA7fd4bYoazYaJz5Ar6HgTKum3gQHxAs3gdAiUuHHgxk4yvQvg5y4yt",
  "key20": "3NC1c8AqVG3pimrhP38JKZ6RtSfEG8Z14KJC8Vfza63VHKA6ZkuEG6ouQFovXYFQ6cfbzcbWYoyJPMTqfwCTUbd5",
  "key21": "4is4qJKh1S1DrfGmBX5ST5SK1NE3uAiwbNqW6zHX4TKY8DtKnhoYCghyk3mUdn6mstKKaAjzBywXQQeUZHWv8U6t",
  "key22": "3bWobYaLuUKvdXNRy7UnpJHft66RXJf7qz5yraRSy5u3J4GmiMm3WPD55jBpzQpeWjCGExW7nuGp2AhmHdP5i3Ao",
  "key23": "5d4ruq8C19bfstzPKv2KU98PjT6ciDUQRGNR6pfKXU8Ewptqcb8nfdr56gP57ohfnSGgNVaaZyzu77tAXqbaoHr9",
  "key24": "5SGueuTrNkvNywhnaeJc5Nqi1c7dqQATfYFyzJ2FxFkcfTn34swcfsjGEVrV5RR9qqrn4XJBuMk2quxR1HfAP9CN",
  "key25": "5Z9dJg6XUD6hWvcvPaHueoibRtqQuaLKHKrzDs7i2MLKkMEueFFDxhvoLXnAroZJcJWc39digRAhrCU5dX2gMTNY",
  "key26": "22U6qBjvTEq6mg9w5f4XRM2zmhrTyQqaTKeCrmW7ZFCTCD29nDYypg4mhfcAYRxXbq5GUZqGu5dBXn6jgtw98bML",
  "key27": "2wsnvZjhq7P2MeFQjK5VBdQJjJLTBvkJ8ypKaSe5TcouN2VWw7FJ1WG9vNH4h1GZ4iB1WvBRUncokoNJ1UGk7DBS",
  "key28": "5xrr69DA11F5qpSmy3TshXmxVcneweG5HWvTxnmpeFkLCxKBbmPWM2de98W8h17YJ17uLLoyy5nDuC4af6mni3M",
  "key29": "646neBStfrFx3gQM7ywbkydC34bajBzd9hLhUCozWPDcDuWPiKcVVCLVyT12CjsRnQzX29941yqBWkYhh52gfxsu",
  "key30": "63ZceMQFjzJkChi4PCrXcHuP51zaGE4fiXNJsLRYRNHL5PqzSHhPmbrJTrv6RehHgXBvq9QNf2u33Umy8ojVYma2",
  "key31": "oznKT2TPi4ukDGMCp2JBxcSNzv5P35MSW5PWv435bzBo9ppkqdoJKnhm7mR7FtHZ3Zmv9Ntweju3x3fSGLn2hm9"
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
