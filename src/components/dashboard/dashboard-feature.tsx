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
    "4Se9LyXnwYkWjkkUF1nXAH1AVAp3jw1N5dJn3WYt7msRkawhM2F59dKJg5B3PgNU3LiSxYABXTA4i11swgC2vjoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCsfwe5wJRfwvgDqsRsvp2uHGpwTosoQyw1QdXSZQhowYDyeF4LVMvLdmYxe7dNUqzKRU3kN51rRHj6cyDy8z88",
  "key1": "5FCrYNRqf2GRRfcQx8iV84otPsBKSoh3ixLuUchJZHJe8CHX5UDawFitPFwWiUeqR2cno2ghHi5Wcdvw2NmLSzon",
  "key2": "3xKPYVgNGAT78bw79559H8AMDHanx1Za87JLVCG91ZBAEqTwThnhngyeWJ8iDVmyq5zTWJMtPFtRaCGZn3AVausw",
  "key3": "phD3TucW3ZtWrzKdSVr6bfeTtiCuXFBmfABYevX8VsCVcYzk9UoCZawaEa2vGayn72SGiVBWsf17Jz5yJqqbKam",
  "key4": "4ux7EGrjc65CNqxJKQ2LhPv29MzftbYkLvLs6kCh52mh3m6xPU9LDqk5iwFspgoGMiuZi9ACpdJwS7UcYdssSN1c",
  "key5": "4CnypPwXsAzL6X9mxk41NnBdMvHzeoxjzXnBgERYUgvUwK7k9zFYza61EkmhrGa1kURJH93e6DzF7tnExsLjCGxL",
  "key6": "woxAehmTuRyoonKJv245K1GUa7Kv1qhvJpe5RKoNdnUAzBSrseE6zvTapxLMT9wLhUd232Gc65XtZwVJUQFTEng",
  "key7": "Wc6KDPWTt8LvMUMUyhSzf9dXYShpxq6asmrEPet7jBnpLnnTcM2bvsJMH6ov6pZGEYkHGR7adke4K6UGbHp1Dqf",
  "key8": "21jPwS3zwxcaca5n7VAAU6X6B9mTZr2s55o4N37BTTRLEiiR1JsrwX2utN4SATMQFauGrNmJc9bLaaU3fXMravkq",
  "key9": "2hAx1AScvMVkrDj1KRiMjUmgfhqyQk2SD1re4oZggf3XMGWHoppiFQPW2bAfeQj6qnV2Da3GgtSrKprCZVDXhqXm",
  "key10": "38fJxqxJkrYjHtJAkkCDQS3hBK3imPTNtib71neSVjwC3TDVoJKaGjMrzL1YXuMyMVvwhPAeF6vzppHnjH3we5Wo",
  "key11": "4ZtuFZh2Y7epYgv4kxaDg5upMuRzLXt9YisDzviX6pyn1gQTcvUSC57ujgh84BzjbjirVfmb3BSYUhLh1cP98Wxb",
  "key12": "4vitYBFcafFgqCiGMyLV8Gz7eMCWn4cU6MGb9Kz7eZSEA8KhgmaZBd4M4XceY5eZE1Yex6jNNz3MGn7nGCg567r3",
  "key13": "5SBJvzhevfMo4oVZypecBpcKf3JLLMKnfpDJnWeTVNLMXhQRaBTFADjYctRnidd1ZyfaKPp4nwer444QqwMtm1zw",
  "key14": "pW4ug1TuRe6ZsvhfZRyCTTtuwAj3PzbbsRJ6uSqH39qs3osUJ3fNXdZVQwzsj8ay5KRRbRNrFNLEwDVECzsotdg",
  "key15": "5MQrQWbVc919ZsjFqnmM7QG2Mb8ah8oqkGt5sJCZtxHGHar9KJWai5UtqMEUeCdRRNQ838UaNR1rzhyroFRvu6gf",
  "key16": "386RxejgQK2UBQ8HTLZVB4KDbAFicaPu2Db8SRvawoTbxFT2fP3xYpCCetdZeoAnfkUzrjLytTAGjGCQmb1rCpTK",
  "key17": "5oWPm5WYgrhbCeiwcGTQRynns7HLFPg3VuW15LJTxmLa3MfBe8UuMyBTq9wSymdpgPYJUxcnStMv4LcZMsN1y4Pw",
  "key18": "D8WPB1gB3RhVhiws7Xd2S1XpoteEHPC8Fk9rSckfKANhGBCXAiDWye4VuG82FkyyJuiKiBY5FfcM1C8YqBPgrfx",
  "key19": "5rzpBP5ZaAyGcSALeyBhhnmFJma13AXf5yJSbN2MVsmh3rhJG7Jii7B5wXy2EYi3JQQLwTp5fts6x8RjPpZNJgKD",
  "key20": "5NMgnKRLAVRd7UVphpufuLQCJsxwpwZvhQLWAeYbCrV38gGCZ6MLYKXdsuECxAL5WrKtgiY1wCb383ZW4mum2isH",
  "key21": "2LvVLWD9ED9At5pYtkWwFtYDRUdJ22PX7WoBrSC15GgPSVccjhXheJZGuUuZ4iJgXb7pkTZ95HmHwj5Jj5yLYvD9",
  "key22": "48NLnCeVt6q1LAWGrC1cxdz5UdwbqZUdez8NdttVGWX4AbW4vXX7sDfBqtswpW8PB6PSLEh1UCXU77XBxhh7qUjf",
  "key23": "3h8oapE7G7Nb3vAQp9kDthPUDWG1EdwqJgxt7jWMuEK5qwJmL7PjZJca4A3a9evnhB99GpnM2YoXMxbG3gf1jUDM",
  "key24": "5Mc6bpGPC2biNw7fyrY2z1Unv8dFnjyJmBgBteJDjRHwJd1fJekBoxrud9CnF5L8w7byYmZnx32iXMVgp5DD3vz5",
  "key25": "5Dd9n8XPC4mhvZor4qpi3wvYa8RzJpka1diG2fGprgtEV7X1Z3WnJvFe256zBVPny7QTdGWT29QqpxUf2L6dgyDk",
  "key26": "QGphTUxv98ao6Lc6dcd37BSaNvEsoiTEfwEKLeEogspc7dGJUvFF1rH9nmciyPUErQAjsYuXDkfeQTC9VkJoQtX",
  "key27": "5nWWqM3WU7dGEAwhVmY6Fr6pPC9jGzQRBTYShcUciNKGDWLWuRXwvSGBfZPDgp3CGCbQ87D7rDfdUc2rvjN53XEr",
  "key28": "5WuP9We8v4Sxdwtz4PSfvBaq5eeTfjtaCYZtX1dctVkasy6t1uiwQ9cd3nF3vost9BZ9DhsDR9wfbjH1du96xKKA",
  "key29": "3ni9MKSm6rEuMaYPySMHkeC2fGhaPU6dehnJip3QPQzLBv3Ynnnt8yBvZpg9MAxRSJrFN9SbyGMtUzFPhvnSZmEG",
  "key30": "22W9T8xaHaALf9UpiLaLpmR54Xm5DCRZiGFoE9etgM3F39qPQYfFGYiukXLNY4PEBYUP7KzVnZS7MhJqW1yVqdE6"
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
