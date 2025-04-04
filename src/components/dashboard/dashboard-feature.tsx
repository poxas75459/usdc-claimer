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
    "bn4ieT3gw7gB2WPYAjTF821MZExqwkQt5FUQ81WWhGdcy3iixA4vbGSR5M26s5ANm7jdJJrGU3sVaeJfKXwdipM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdpaZp17Kq3ZynbJCu58y3J4HT57stEcAc53GE5VMUA9XuqXwijwx81Qj5eoSzuFCdZBMGfNqzXR6M8YREVLve9",
  "key1": "2GWKwzsJYNp5FDJxSajiZtwbyKGkw5TXAfzLnU4L7rYJJUyDvEfHpngPxgoyz21zaj8F5C7GKGyL3mX852VmwGD6",
  "key2": "4aR8JQj1iyyYrC3hyY6W8NJdsPdErtjgFfGd2Qqjifb4F6cWXJ25TyuN7kZfez3RRLzhCCDujvWmeqMTPmEDLYMi",
  "key3": "4Bpz7iga3ndYuoyhrVHHEbnUPnmQFrQVk1tCDX4KJQLnkE4QQyPj1eGxFkvnwcvptN3ibQBk9dht6xnRqtrXQ75q",
  "key4": "Yzakvuqs53XGwX8xzWW99CtrJn2qer6Vx4NFhQd5eeFoNXjqqC2qQtV1VygmFYpMwhzeVwTsZUU78pvP3JEUVNk",
  "key5": "2CYH14699vbZt2vmxeu5p9n8hD4xRcsUEbD3oUGjmNut7qijn6Dp3i16FnRyRiifmAWL4Bzt5Y3GeeYowsDQDG1w",
  "key6": "5XxCKk8LzMDY9oVNnDw4DfUgG3TXUHhNggH5gdakRpGFGcVLwo3M2BKy1EuFZPAMgo1ypgYwNWVa72dKXXFALDrh",
  "key7": "5wH8QAMRxK8vKxy8FPCWhRWy1gVKjStdCx2pv3MPQ3NYPEe9o2mTXwZya8s6bkmX4ZeSPtmLKE3WhBrsJBvouCbe",
  "key8": "4LX5LP9CyyAFwMibvLW8FpRVvjFnBNSm5vR1NZuTJHV9jB1EMQsb15aXQTSC9ujJDHjfDYYzWwctx9rLEtsAwt7q",
  "key9": "4T5opGUDTQjaVfrXuJhLmn55vrt7KPyF98dYfNQtuAAWYK5RVp3h6ezc7KEbtD4GkTYVSTs85VnzMySSNaL1D8Ua",
  "key10": "62YeofdffsBguT8r4Gv1C6Akd2BbjVY8RyiBQXqrgJTCVcchbYPPcEhQHBXdL2R1SUSp2qpBDjgw4zwXtYvmM2Bt",
  "key11": "4AGvduafaWuxkctZZ5jHGjvhY6fB2gxRAYriAxhDhMSFAkqFYvujHmxduEgpoVWRBeDkXyUAFZsEGhEjp3xaTNfY",
  "key12": "37dLc8k13xUj3ds61KraAVypu7N69XSXGBjPL9VWtXoHiySWFhNJR54SwgTBTCcwhDTsKfTL2e4abXbfwuKUg7W",
  "key13": "2MPP7a7tBMZrKtGLfGQA9y4PyqTttLeqBg9hn47cM2jWKQVrcVbbU6Jnx2GM7YW4AoVXpHL8P4fmXbX6tYP6NRSU",
  "key14": "3LpaX4H3i5JTP2A2TfcmbuckLfTU4L51pCycCtKdtpdNnxT7jjcbkQ6WWpW7qSG7t5GuLNPnjPFkmVCUfyrEheT5",
  "key15": "TztnjpRUL6eKg6Xmy7TUyHgixtKKtRfyLaVW3VZak7KnTMHcAHtR8S5yDGmSqJHXsYKbvzxQQBY2VW5tHPSGFoB",
  "key16": "212bZfqn4s8Y6V6hBqf8deHfngjFScZoZzfNXq8qvnFwuzx3BDdtkjWDL7DKoi4g34Xrf3cxMbJrd386mdAfau91",
  "key17": "58121KevzfF1GwtxuNxjaD7a32nGK3CyfA4AmS1aCV48ogmqCnkurhmPmnkF1EpmEFQrB2CqiXgAoraBbJNTGJcG",
  "key18": "5Nm8RDwhvYqruqGeaYfixhVGAKBGJhDR6vJEDtby73Ns2bFapg6jJqyJPuGw6YinQiwGjpK4beDMM5YbnkyYYygf",
  "key19": "3VYuSXcgRQhUzUEM1XSnS7i3sjP8MQHL6TudpWqZz8L6LNeSDMDGPreRPpZNNRQcbv7JtR1HrAKSwSWeWhy4TYHy",
  "key20": "AUKWoJ6xwNFSpHvWYYLHapM3CZuvHYBgYtf66sSzoTBMLzzQj5HJK1UcRFp8EfJxs9QUHwdwZXDeCqsxjbDvKbh",
  "key21": "3wLYF1vUUcDYMBqTDavcYStjMp1XRPgBfRQnxxTbDfbu3mXakhGnntJjLGXUVZxcEsSAFFJQmedaDnnwXP3eCLE9",
  "key22": "5qypxWvukjTj7NG6DADm4f47RkjDq2UrkPbSfuz6mTAQY7TUsVhoaikBRGTLatrXxncSswnGq8MSKRCPHeQdktag",
  "key23": "59LuWx2mMZZAki7rhJpMqDYweGrpkJu3h3SNvFpNaXVV9uXBp5F7V1M5wMV21yzwHka92Hi2StexpeYR9oQ3rnnH",
  "key24": "RCriotQo9ByF5YDsES1eeFfWMBqDPPde2CZXWAHanurr2wTbZtVdjae2JWnaZVtLMx8fSvK6DT6JpfWdrh2VLuH",
  "key25": "4C14uxy6uA8PPk57EzexALcsZbqir3NhxtzQgny3PqQmkGKMH1ZV8UGr74XqRkrbWUvBSa6eHFNVqeDN2Qvd1DFk",
  "key26": "BtTogeqj8bh64SBvCKrqiq74aP3ff8oLudM4UuQXZG31gBD1GKW7HQZUV6qLNRRoF6n7N9cdfqvYrhB3a5YvdNC",
  "key27": "3gVQCPSyhFqZLm6dyjdzfVmwFCWTCUFCH2Er1jSu7okN8Vyi2fawQG7rA7o1wU3aXWXpjQYMoSynKQetogVUtWE4",
  "key28": "HCuff9RWhMc6ufC9rqnCv1FJKuAGGxj1cZDLSMqCA7TuegsL79eKFFq2UyXcMFvdHECQNYAEJ4mmLMYDEqFCGqq",
  "key29": "2WgXpUB1mL96ntqv9ABsVgiTPnLwR6rvWgwDDb4Z3cZKqUpUt7rt8gCGMEUc9LHApK435ktpfVgjr2JzvZEqvAUx",
  "key30": "hSDFMEdrpbNGDM2tw2HnTQKT6BwdmMwmuFA83X4fuBVsMsKmGNc6qBDxatJMjzf3uNTB2FuX2TQzLTVZLTi1jvC",
  "key31": "51jZ2iUojhcGR61ahquxfLYtP42HPe6xnm1rFRjE8fmw3LspjitjDskBBfCDH9CDzDGRxjAwXPixAtBCoghqQHzJ",
  "key32": "46vYCxmyvvQ5oQ832QmesehtzUU5bH3uASm3WPa4pt9WtyqgEsKMcZ5QjX3ttWYWjhrmut9D8vSyddpxoCVYs6cU",
  "key33": "3Vt3n76R7CeTDfqhQXhDxaom91Khp1M5eB21GDxs1ebC2U5y1x9Xbg9TXP1mExQfCzbeBtHcBS3GnHLJyiuMVFdE",
  "key34": "4Cm69iUuY1LeCpsN8bBVWE9RPHp2VdAHcRNzUCCHgNQYbDq32qBEogU4S95CzBwYbU3ns2F67xpjZodyNR5ZSpHB",
  "key35": "3NQmMf1C8mSj6ymacpRUwTPSUHN438XDeVQqaTwAvHhtWBTp726Yhs2aCLLZHWfHLspBjxUKjvCHvExGhQESWxJd",
  "key36": "5YVkUtHRw5p5hvDo5JQGN3ABGC4ipZDhzhckeUUqpoHq3Gh1sVthdgaEXcRHe3hn4kZZfyD1aMgVrFt7XNrMu3tX",
  "key37": "H4CgvUbq3BMg4kNqAcD4rD2KsJzkTdP4Q7rFDBL7P2ZNsgYCuXCg7vkFuGrah2ccaM1GEVgh1dzBMtv26azREdx",
  "key38": "vWqHw1VcG1XuBPfg7A2QaqKmc96phkTsVqJ1VuYaP5EFE4aD9WzgLvm3toW3BVSetJXuyauLhzhLVHuCzMdDZNn",
  "key39": "2pYBpk8uvCiB1v2qA3R7cRGRXxqiduPEqZt8CAYVyA6pMzFBATWA9hiBWFNLpvS2GvfNxqb648svmeiPNdvubZy1",
  "key40": "3HNr6AERKVvyh9ThKzgVabYmryL6NDuMz3JPbyesC4rSoFTt2WUPWLjxH6CjKzB8AtzyhqLgy8ZFYuKQVbRtx7on",
  "key41": "5Z9mrEyufJA2TVtqxJVuW9hQU5hjbbpuQMjGVq2MS75e3J1ouUZ3HL1XrdTrbR2EjGHhG7QHSocckaW8rnmpXryh",
  "key42": "3EfqA5EqLd1tQCRXbyofffBXdrWB4aTRbcKV4dL1FA71sWGzo4NAqTvKXsRooHJJARnmVydLurB2LoxQ8LFwSYZW"
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
