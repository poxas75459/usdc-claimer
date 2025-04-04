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
    "3zhmctu4UZN3NF45zvViaF9kAQmYTkBni4nd9vFxxMjpLEisrriNupXcvHF1dCrE21RGYZbK281AE2CCCLw1jM9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2tizzKh4W8oDYjeKzDdpa1dQX2tYqk3zj52LrDtt82PUYjUtjC9i4mbPaLyQixkvsWvJQL5YnbhauHUDY1TniG",
  "key1": "57kQN5i5CXVhyB8E6VJEeVRErL4JebpcQ47d9bsTaCRComgfzEq1RbVjBDd7d7rM9ghxw3nJJkzcRHh1Ae4JAqk8",
  "key2": "2FeMfdyiKcTvFYadmsNXc2Na9dPChvLwtQ99j18gCY8WpgYEcYLT5eCV8eNCThRiTifCyu2fLDiyw4snJe97NQjL",
  "key3": "2i6NCHyYQNWot37BsuPwtXt4fNzPAcJ7S8jffLd1T3YGy6keMDVyHCy3g6HtRrTLd9uWMQuHMRJvasf1oM1kKyLe",
  "key4": "43HvoKTH7umzoKoVhgCpzWdhyKPRDZSVLktA94KAnZGHRhhxzdbpZNt5Rtbuy6sFXozKTUAmzTcDvce8o5FQTshN",
  "key5": "4H6N4q87dsJmaiKXH2Jm8hCvdUjJga4GkjT4YzVa9nA1KrxQYJdL9nxAW76prv6yG64jLJVK2apsdKCzeE8J5qMo",
  "key6": "4McaSKY4o7dFByJgdvRmnzKeSL5yzVUYbTcnHPpKKYAQFfcokYs9dUJtPynBzGNyxUrzUzz4kmjJ4S1RBARfArbQ",
  "key7": "YgCgbVPgVqzyk7NvJHDMJp5oPcoyHSU4ye887x2ZrBFfjgRYdp5ejieiQCAPTnE6hh4qH9ZeDshgx79hBBRZ9AK",
  "key8": "4bA2gH8k3zh9z265nbWirrdLrrspvDWqkpPt6Jhp4QoBdJYufWG7SCivCqpz69frBqGXWewG48MM2LY89eURkXby",
  "key9": "4b7G5QnGXH5zYYNCHpxLJxpyqAfrGYzPvayz5GMJqcw1gM2gmow1aYcnXhnAPB4BA7cMPaTxMLn3jToBAkgsV8e8",
  "key10": "2TMLh8ooi8P7ELmsfFT7GKNSeiozgGzGQYqsPjNisJDxiM5u9NCPySy8wiurDPZdzkJ761mvMMs4e7rhcTdvMzk",
  "key11": "CwKZwkoAimMytEY1E7DdMFgRbUoD9qnrNMGGyCr8Yv6GGEjvdvtwTdDdzuFM1d6jnjbkaRXgNc7sNyoNFnFYPLE",
  "key12": "2eXrRphX3Jb9ZrbFc2fH1hesTcYoTs7mAk6XSppB89q9b7NjmZLekyzgPAYsyuEu2NHUMhwyNLcDnhMjQEpydftw",
  "key13": "3inj64sebWt8kh1dDmj4gXB4EM7r2oSGJGcwrPNzagaZpmRgYVvo2kxGj6T8d9E2gAw46TM1PzN8wfedL6uoU5SC",
  "key14": "48bUJDibR5VGsyARrkuMM9nkyCScE381amVfbbAiZ5qEqDSf791cw8dSTbUSu9YfDo4vtyJomDHFe5biqX7eUtpH",
  "key15": "uCQqhuoNt1pnYkEJYMPwYWHmwJqEuH4Aqci4aRV8vSPMBfenEm5Hr9dQJ1xrq12mUpeRo6d2xZNc7gzQ8eor9tg",
  "key16": "4eopfWUZexfKFzqHmFM8CepNiVqCYEbFg1ghSSS3jqX8QYL8putGRJasybqNh6ugDvXovvxbzgaZMqU33dRkXzMp",
  "key17": "E2sDA81YJhc7uuwhuPgVBvyKPPzRnRSGs4U73GQWNWbj8Hx9kSvteG7d6CaHcqEow1ErxVPfKUHPkr3Fq5iUdt4",
  "key18": "26xAxiHxS16GJrNhC71Et81NXYRL4Fut8kzYdk9SoCUD66cPhEy63Xx41qTL7Fg7wqv5HNY92xDepta16Nmhm8Jp",
  "key19": "51dSPDo5hNQ8AZojp24VS7o7PrYP49Yd6FW3r8qKUActFCH6fSwpBpTJLce48uYhXQWteTaELbS3Zfm5qdD3cURD",
  "key20": "4zqrjV2jQKaLjW1WrMZ5PBHA3gjZVWovQMYLQb7rcSgRUNU8LNQ672rGy5t2SQNFRims92BpkhM4zgAjeUoaTYea",
  "key21": "4NoYyBF5XRwDfmYG7F2X9XFDGPMGxrM5CMK5RhAmJu5HbCJBq6hEXTaogUur1Cbedpwa5JHYrsHy2JvogtZWV7Le",
  "key22": "5euVF6ijUfn2cVGUUzXthvA1QoU3X7xRDmfQcKKEb1TxFxkYSxN9DxUjM9Rh1SPfimPMb3pUfXbwt4ADYwyjYgaB",
  "key23": "3BbfzEm1KUWfvCoZHypiQGm7er4G3khjbgxgetXqMcCdsPJtLHvGdrJgBFv9fzv6neVRgJGeL4c3PR3siHc9WXEL",
  "key24": "2BR533H8Tk6Xi6gRtV4oAYhZN3HjebUH8JSrWbo1Dk3Dcdmw3gMGRA5eChYGrePPwijjSKAbZgPbewSrDD4qq9rN",
  "key25": "4ubdHTkE5PE96ZD51k11CkkZaS8k3WmASKnSbu82Xc8nwB6frPRVkTXUhLjRcfPe34wyMwgbtoUNpNyGbbpTsQRQ",
  "key26": "5hXombmzmcQDonRTscMkeGNa5cwD4QxnYcdZ2Yr3ffCTwN4LefctCKbYN2bm2LjrMYyQSM5Kj4evzQH8qbPdgVWQ",
  "key27": "4f3QZRv5iaQvfqZZ9dxegXaxiWHNh7gjTKZkt6df9UPZXVvW3NQahr2D8JDoB4hwwBvU4QWmuUNv7fy5sXSTGY17",
  "key28": "38yiXqvDmFM639p2tBpHyzZpLqH8Haa12E7WGQBpa9EYmd7AB1Jpjw5RdJG1ietxKJ2GDxoJhagvEwFqvXCrpxJh",
  "key29": "2b6LPZDX6PnyPYWSbLrUCjhQSxpDUYhveMCopn6GXgbD4n4a6zYVRJoQ1hszFqdVzhn4wnqyUsfyLgA87bG4ULHF",
  "key30": "5tZdZ7A1dRXu46hbvQhRe24yrbLAVCBv1Wagv9eUYw53Awa1Lg9KwqV6XfPKn684krtU2JabQAnYFvz2yG2FBzNL",
  "key31": "Diua78NoSeGqvDNAF3UJbTc2BREBKX4vxPV8LWSeabgYMM9dMP1x1YwNyXDUYBqJzphp9JxDdZ4wJ8WQFRzHvvf",
  "key32": "5hP1YFwdmEU2fnzRn99VEnmr6iP3vAhNMG6Br5Vm313rRJccxw5B7gbcuQprSpw9TH3tqmMQWQYZdhzoBCp6bTsa",
  "key33": "RCQjCQLvhrw2VRjfDyjDPrQpoJVuVN1Wkhy74vdQZ7jMs58xXmSpetTNeVCyXvtykcFWaLXHXcxxFaYQk3vXDFR",
  "key34": "3xZV6jC96YjLxLPssDtPTGvFexPsxyw2ARQUKfZTdKQ9QDNahnv9gD6zMxHZdV67cHLbDegdgLiRagGDbovJCtzu",
  "key35": "2Hy7b6SRNNVxAiDH3PdGF5oJXznLYXiivwhLuXE3nSLJTmc6Mk7P2XHJh46CeCh4KFRZrSnwQYyxR2cJGZ1AuHmH",
  "key36": "5JFSMsmdq7YRtd8tMNcZL3D5YUojVXcnnuDje7cDNXBxdheKvyrTankbxMRG6MzrXVrqhE12i89trGk9cCxfY5iq",
  "key37": "2rbgsE683ruojVcSkhUvP8rRbbvxdF3XGiNN8mCp1okEtCDQgrRshNueUQNbdsY2MdB3QW8gGrETYkMMPFDk4Ux3"
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
