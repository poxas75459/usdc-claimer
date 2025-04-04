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
    "5kA5qVowfm5wFgjTyyHPKkwmTZhzqMkiC3GgtXP7tN5NFh3SmwFmjwZKB6m8pqsbRmjy7Xjz8nVcXaMNtGTsmyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEHFEzUrvqQV7JBEeJk9J1Uo2sVMznrM86Qt99pWdNE8LZL54YmEHMN4NtxejPXf8yq8di7Lb6Vdv9MX9HQKdja",
  "key1": "2RLzY9WnQfSitr9oXeWXgNNoAVVftRVU5mpgQsS3cYiZY7DPJUfP43SiLa3t4KAUCuc6NCd2iYb1U9qkcgyQBrZ8",
  "key2": "5b5Ln49id7j9PUtyFwFej8aTfRY7gJSbyn3gzX8jHk1PKL7EQ8jD8sRzvF1yFGynCKQEwuhYLSiL1UcxsmcATTYy",
  "key3": "3cYbd7EN921ujnk3aEcwCx59jLDxGtRLaQLSSqeT2VegyhYaXJCD3YNyBL3Xupq8i6HNW4df2DwSRgc78WiLgG1R",
  "key4": "3HykvmsLqtTgQia19hwzBuUn4YDgZZUDxqG3t91CjcDdV6DyqmRNqkPPhTPoUc63D9NFgrVWxH6WtVuQwKtbvACv",
  "key5": "67DgxYoSExedZdVb6xwAyBU5smJzFu12MuMgtxDH6H4cCsSje5SmFZ5XNYebSyN1Q643YYL2BcXqwdmHmTNcV8Uq",
  "key6": "67hiPXGzA5vBq3UCM1MbNaBucNLqQ7d1znVANh2EJdsmNJr8m38JA3hPkUHi2CuDfjaC6PccH4pc2n4K2Vs5zwt3",
  "key7": "pBgURJwQA1CMYCbKnXY29og2QXhwgdqjC6acebdh6dt7uEaD6we2nLnzMg3xynyhJekhssj11MCUtPJJvrr89To",
  "key8": "yH2XennShUK2LM773LpLggnSs7x5sEChj36Cq11SGaP4EWEdAASUTjpJavuL6cTahEBFxLJHWzaaNXL5Ei695fd",
  "key9": "47WwpxnTbp6eztCZxnbraBW7yGN8KD1RtX2hFsGckjpLkSdzmA8LhL8M2eQPVtRVf5RXgXmxvBQSwVzzTDN98KCo",
  "key10": "3RFAMdSWhwmyQgRQtYepN7i4w7wCiTZPPAL5rTSqAqVqKpFFVVDoq8AhkYaEqHdskm6kwZgLCLXMyX89VUQy2GQg",
  "key11": "4hznJzzqANz6t6pZ3hjgMryfCKkYNWM6my1531SZJHcWN5shtwi8zr1GjDFP3sSrqKeSJZx2VFLaQMCVAFyvokv4",
  "key12": "2WqXs45VswyXmaFMrAAt14iMMNAAD5GbsXbhEjuvUFkqJshUEFp5x6k2s1eepgqXyyyebeCjzHZVTfPy1Tq7y39M",
  "key13": "2hczshJqVVZKx2Mh2LkvMrqHef1gzi8UC1GCxPkVNU81z8Lv5tX4MsKagvre9XmUoZUJXhJy33jVLoWDNGuAZQMu",
  "key14": "3eRNxdGDiRCMDfp1HoC3mwn5EnHsLbHn4n82JTyfLnGoMyArEZqNXmtq6VmJJu53pewdH4ToNjmC53LotyQuHJMu",
  "key15": "3zj7Z6hkegbydjjMN2fkpccBXbtjvFMn8wMGtT9J1PdvoDVmnERVn9yAGsjnvomBvYTxYNA4ANvmYv9gNvnga8mL",
  "key16": "5Kkz7xu5NrejN9q6bhNTH5qjPp2mcecXv6MA8Lgyo4UVdhks6YE9jr4MiiWMc6VVF84B6zTbq5v4eVWWLAKGPDki",
  "key17": "4sS4mPzQWc3pWdstn2iTDeNumwudsX55xVuNRvcMDHvLrkPgm6kHPaR6Tu5sLtmzX44BKctoCYEWEB2kcZAqSEdz",
  "key18": "3rjrpFr4XacEV29pKQAScVuQnojB3pF1gbPuqpeyYYk7qZkVJtvqkdQhzKok87BFtkbP5Nhqjhbv9px3sTNApG4X",
  "key19": "Tc4E3MPTAmpKbNuVgiUq5QgURsgELEhs9Ap9JYQDQKmW33gWZVEabmzG73GPEhoSTufMbXJYRuq8x2ReK6gZebW",
  "key20": "5nSEUWCKu5PD9kDgRvuAmrL8g9afMz7dZEVnhEazQn5cZrGrVrkzcsk5gpYeYVQJMFgiie1wcYekZV1A1eBrFMqB",
  "key21": "2oSuYbrwp1DgX3Nr4cg1aqmzs9pYfccFugPMw6C2mzspcwQgnaKcUFyx6xkMVLWXUd9WC9G3QxDCi9YUQbNSmEZe",
  "key22": "5dXr1ynB2oV4MfUjDEztPSKcqX6KUuszKkiw2aaSPut62Er8grefrmLuHd9ZcneqwKijofgQuwVNbTZjqsC1jSU7",
  "key23": "5Q9ySxqN3SvvPp6RJEGrJjMKb1PEgS9vXExJGaDD48cVcjtbNNzyLZ98E6Y8E6vHXDhF8xuo6565mYRu1S97ieu1",
  "key24": "5Y99XKhksVJdtTrDrGv47TapzMb7qmdEZCxcTFvMpkr7i4VeNRtXhrRK3EFkN93Y1DkRVGnUHE8CzyiZKiAiy5yS",
  "key25": "3e2LenoR9xDLnekbHhQB92PYP4SvE9HvdUoQvVy54Q29nnw74nLP12vRjdHRYJzbRGQ51UbVwZHrQyg8A9wq9yi8",
  "key26": "Vt3Ln82ZeVPSSGHsxYzy4pEJXhssFfaUjD5KfQDb7GPkxSVxT1kBstwbsjFPNUCuju5bM5VX6nLaRdBNjjtJMpW",
  "key27": "akPbwn9Jx2BntZMLExSnJfWbKzU7pe7XtUp4wg541cRwpP4U8kxDpJk1fx18wEavTmpztVm8XWNKkxD6jbhWpEf",
  "key28": "4MhUmRKoA4cbAWxNKbpdjrzVhqMLi1w2PfwPJ4LaxDcoi7JaGZfAVXq11ooX2UwgrTm2L6yGXfeP2mpUnmXrsQN7",
  "key29": "d2ddfQFDxfCNk7Myqy1UVYcMJ2jpf2Ynhjgo8XFkB5D4MxSzzFXFHEreqU5irFRdkocRPtVreVFFShyFFePd4b5",
  "key30": "4FqdxQ7D2YgBNzb31N2VuxT88RCbZWudswBxBXW4QSJ3rv8bPujzJSoKT7U7bcVyoP8ht6ozAXjt7hukxemTMQ3F",
  "key31": "3ip7CtzAHpvppbdYqYsH5evKabCHzFbSafWaLB9fyJ9PBET8vKKt8zeYYcbZdpRriVCpUpDqP1KiiLQ1NoJeNre9",
  "key32": "54GiQHNnuuW6bFhKP5W8qAF2jmARy6qzxtjpJqfgUXP8DDQHsC9cGkrE22zMSw4PqgsmrhmEUtL1ycxL6c7DgHAA"
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
