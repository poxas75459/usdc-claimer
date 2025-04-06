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
    "4yxHheVrqdodgUYJx6Z8SaC5v4JPsp2bhbBTXLjZran3fdY7uRC7dft4JHkNCMPjjrEKjVBY8HSJAdjzJNvWjgEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNPUBF7HxZ8xcELWG5TN5YYKCWXzedaie79NtpR6xYnad9izubqZofuPUk4vKuLEArhdaXf1YpKrcFPVUNP19DK",
  "key1": "QBb8EhupZSFzgj7WhVdHkBygn16TnafKVk29MjHChUqAFL9bq6fW4D2prBL6eNo2CrU4idDtBiAXnZDPg2pxepj",
  "key2": "5o7uCsn1hLYJ6LueYcWyvdWLmbqgFbJYw5jvPWv1gDewhXmR8dUuXjMfTyCmB8SKNTnAnMHGugYwC8JSkNRoAhQ8",
  "key3": "3CY6jgKEQbmRxyTUBz7ucpcZXh4wxicb99SYuQ6SVHsDHE8pFN5mgJh39FpWMKnELbN4E8Hho718qMyDSrAbqJ6f",
  "key4": "2HaVVG78MTXQGegfYqupY9RRgUiv7iWipKoGfqLzCCumj3mMqNoSo2LfLKLzAQ9ZufWzt6nTH67RPciDUEP9TBkw",
  "key5": "4FwgKjXSCcnJnjB6vRQwdLombQgnUz2JcepQb3gYvZ7gUcz3Nxc3yj3nP4S8F2d6KGKzkCmztcUfcGpRgCK9eF8M",
  "key6": "5QsVGSRRtZRhH7kjF84cAD8gAPBUGgbdwRCxgmmkTwuj6uFnSEbNGt6QNnToUQw9vjPLG8n4nWqPxUXHmNnEhBej",
  "key7": "QXrWhRqcr6cqjD8AMZxyBUQjJdTToWGcztNr9nXDXELfsL5Fn6mcUquZkr31SmfStteAoQvBChMrX1YiY84ud7u",
  "key8": "2Lku9PjjYktUgaibHapFLTFAwEpRDx8y7DcP8RNBftZYGDH4ume92fLdqv9c4TWLsnHSFrSoDSbpE1Zv2wgrcB8S",
  "key9": "52tF6btjkQSUXWdHGCDHErSK6yKsQdBZC78AEzrNtu1zwe5eQ2XTXmSC8oh7YEGBr9R7DjSMmYMyRaZb6j2W9xAU",
  "key10": "3WiG7gS9YRrFHCL7amUGu1jeuab1XV7MFqo8XifK3aT6TbNKj6at3jizVVwYReJYKsihmaGAQrfpBWCzi612AT42",
  "key11": "3KLdwNiwn8dgnLdEqEHd1yokFSCqcpobb1MQGDa9cJwwatk41jcjfVbLvRwMM9eAHJD52EEg8d8NngHFrikBqifD",
  "key12": "4uih71qMpmbvGV75LyEcsvQfGFKRHL4ZW6zYaJJfk3ui6MbNibxeCP7gASwtMF3fD8SH751JppFPTdT9ZqjZAwrb",
  "key13": "UMLvoNEyd23FD7K1i1eDGoVWDGXNrjmq1vTYGhCX1CBRwAsqYTX7uzeZq9Zk9ZzyS7tZpHS54jRFisuG3scyDtQ",
  "key14": "5nD1mbkHP6XsdgF2CrJ7NS9pKSXUVyGExFQjsaoivEHfWVjRc386GZV2tZEb2fU9uvjX3MFrrYy1whrfydTUU6XA",
  "key15": "41RUgjtobvn4GEAoPj3Ux8TSEx1jvzWbhWSKo1RCWKqXeV2Z1W5Bt2wYYbpfBGtfb28H91dQg3XgD3pdwyQvbsZn",
  "key16": "5CJg13pQeXp8pceCVF1nhwUhD2J2kDSTZDLHWREXo1XQqomQSndUnLjcQ4YwCgj4jWXLCykLh69pcQSmdhTKwkJ2",
  "key17": "288KB3DA7eB79bv3anLb3FDyT8K6J8Ua4z9HZmJWH7yz5JGprtG6wSS5nLnXJsjfyb4gPquAF3CFcmuPTvJTnd78",
  "key18": "qRZmo8aBktpyf137Du9Wx1JDaj5gvwWx7XRnmXS5rFHgygdccdPKB1gaq6BnPB6Fwc1Jp3wwVigenb2nXqMjUkA",
  "key19": "qT2u1GXB3LwNHMD9F69PSzx8sgVmnatujXCLHpgtBDwo3RPMmi2RHsgt3ypsAoLMor5jpYq32BVxJzrD9WzCciu",
  "key20": "5SyzSYBA5CKRErsMoq1pfFXCfK85UEFgz1CDx1XQpRtmnpdaS5rkvxKvZuZLVBAroZvbBUntHRAAvNT8SiWgC5Q7",
  "key21": "ErCvkqd1LXVz85D2fVCZQptEtqtDaJmXymbVupnqVjyXAUewZnAPS1BdheueEjDTRU186iGydoWMxfDPrC9b14Y",
  "key22": "4BtdNkCB1Jh5jKoujh7M18m79vL4wTPttzRBsqUGQDmmDAP6cHL7EYyxLQV7wU8Z2XVugt6rdKarjnTyunLjHbuL",
  "key23": "2NfYMg6hdcuNgC2ehzWS1siyu5qpA1CvMe33BrfXQofr8UdZA1GhaCGBHbkACXh7bpdux2bf7jhJoWRvKpA2zWrs",
  "key24": "32UMEpxZDychdYHQ7PUBNVm6onkB4WyVAXkBXRDJqfsKJ9Tt2BzSwyAZEt7ZsTVTG7yTynC8VcpwxW89utbtFNZk",
  "key25": "2ZX5WiB3XHCJbQAkwoHBQMYvA8686SKHSnESRNs6tyUD1rXW7D8Z5QJaxJEZv9qawjLC1nWHoLYY7g9jqaDtE4YG",
  "key26": "3279GcAdei3qAUAakkgTdaqBoETZdk12ce2MMHjQqM8coembnmtJsVoBoo1nuboXpcQymmKAvU6aKhRHhSqk9bR3",
  "key27": "trmsRRdfyPSFkcCentAA4xNdEXs8u3W4WJjUufZ4QupC4pB8MUXQvNduNxFjcZfNPAKa3nwgDgjc3XLMrtdu8FN",
  "key28": "56ERVVonYYKEqoN2z1JEwBxwya173i865wSEUP5vh8r67vTLXTCi46xwMhARzz1Ro8deC7r6kxcNoT17EH338o46",
  "key29": "57k92YnttprnjsNLn5Azyjp3imYwnEpC31FFSYtNURNhCQP4SEAP4iHCYAnCAvMVNmPhtxdb6wPCrQY1S45Dy7vo",
  "key30": "5CA5v6t65CTiFApnWx2gPVabyAwFRi7mmDKataMTJ7TCyCtW7xgxAHfm2DctrDHfSZyEJZJtYuMKxUoKEyZfy4wq",
  "key31": "4uQKrUKJZN5XDYMQPQwbE7V31CLd1WLC2WXiACGnnzubbEP5HuQqYXEo6S3DCwnchwsU9U7ePaGGf47GYVvULtbk",
  "key32": "V7XNhWk1wQjzhQWUtFBjh7xWxvru3E4JLhwLdAdw13nmEkNnY3Wz1REfq1zDc9pJVnQfyHeafUe2UQdWkT5FNQ7",
  "key33": "5QcGLLfJd2VYZvR7BpAoJGWusRWUVhz7CND8Sjz95d3ut5n1zxLpnitfy7dDWVFZBTDdSU91Kr5Wq8C2yvmoS8bV",
  "key34": "3QHwtSwG7QLfMkDGLRzEJkHmHHchtppHNaui6wXZmW9ghdgnkasbrqX9pNkB16g98WcRSoSBPZKX6fjAZveZtuGv",
  "key35": "2fYaso9cWTdk1q7XjHzAmU3K26EA8NP7aynTohhd7zvk5ptLA3x15v6ZaZdS1wsQZFwijJj9W5xWcc6rwK3s2BBG",
  "key36": "5M5ukeFhVjm5BFN33ThZDZMNvCubcCvgXU23SBmg1YeTQaBYdKr1aHSfrMN1Z3HZifK28ns2LVXMjaDX8bGv5etx",
  "key37": "29qPqw6918oc6saFHaWA3RUgb2sH7k4cpvqTsHbbs1GBNTV6JZTR6Laa2v6E4vmtqGyGYLpd9xGVycsfqEP4jBoM",
  "key38": "btJAVf5fTp3vrgGni7sTNkTsTBa3zhyneysF3eJ2gZeQGcxabitRm7RcB9XcYHEiuGEZD748BRJ2YvBZiFrT2Ba"
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
