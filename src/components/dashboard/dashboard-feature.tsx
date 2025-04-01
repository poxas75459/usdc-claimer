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
    "5Q914FF75houfiqUuRhUKvQGtECEmY7xtjRxHDzCpyP6H5rDSpW62suUCSCyK14wWg4ctDbrLCiMy69jrZU7NmG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2UoRv4HHjRGQKSS5Cxg8vin7RdHHcBwFv9mN4iC5edJRysW3TuFusswcm5GCR4Cz9siggWgngEaxMMAJv3mxUD",
  "key1": "47Mvau98FgbFUVrNa6zMQZjCAhwgtZnwQ26JvGRmsEKWmKX2TSfY4fcaRHKGdyMrsBUDgHW8KXms7diR5ViCk68E",
  "key2": "2NeWNKrEQTqekUscLdVbscXChwNuBFpcAHsr4KJSGpwwFRQq1VyxepjM8rebaxGTYDyWPCrFxGiLQobcYYZvw8Fz",
  "key3": "2GkWrADbKifPVErhmCiXDcKwcEeetrJkqCkZTzfQadQeidJBVQkkvY4KQy7qfqqKBPj6BiMEFipxDoT3cSWngUgh",
  "key4": "2dm66C3RQWQsyaDCMbadbiCRdVAfhZq4X7VUh9uZvXkjf1bkMtuaTLfmGkLoYbg56dkSi6SeRfzNDWTpqRaVWkF3",
  "key5": "72BvKLUPqwfsaHQhjrFtQZZwS4jJEwR67euReNCiAhwiuLF3mswLAxXVphYLKv3cCiE6euqKz25XjDLm2jvGZRo",
  "key6": "2saGTq6ZubtUWXxHNqpXiVo8JaJX99FhwJyYUo775316REwoQuzkSs84jrY3N33NTwGp9dSUZdSTvq9nZbjuNC5R",
  "key7": "3f3iij38Hka5GGYQsVi4wzDwkuMXCskgiZDVvDShpTimfB6d7khsuWVo32YTT5KKLpPBafNUL86eAXPPckAqLwKw",
  "key8": "44vKvJnzrzpZdfvjeVA3dyD7G9pezXEGR9Jb4zgzrnjmoNy2js29Mbb3vvruxzCuNszwHS4wJnrq7TTpjqsSqcWH",
  "key9": "37MCA85YjCuPUoNqEKryk7aM8jCqkospS5jja9rVj5fi6nR8Wvo6ALC173bRcfFBQNK5AHSTR1ss8XH8VAPeAq3v",
  "key10": "2yjRRTpHUk4a5KCKGCojUrk4o6WJsm33zf8iK4EXkCdCQnmrYVLUjQXWdihAFYEyRdov17LnCWq7AhBWYTXMc7Pg",
  "key11": "4MEkpqMbieUopnNPM8TeCJW8pX6q41AU23vbBvWYRZAUbXQXJWY4F9aCbz1uuRnEweeGxJZmVj8gQroLGKRckKbg",
  "key12": "55Hy3yF5uzq5pdLkX5L7hHQ98sDJ2pevx9yxf2b5XAQsSe9TdPXno7NYnvwFast1VowxmX4dktXyDMEMwwErdfbD",
  "key13": "26mWMGxLpHKNjMr3uzA5eEAG9WEQk4JEutj9pAKR3Tqkm68dvAUCdtGAnBho6w51oijQaiLUYJ7f5V7FMcqGRs2N",
  "key14": "39TYoxRgBa7xUnfBjT2SGGnbGM7BE6gZus3Jv7GQj2JS7ssre1hxp16Ap3FNTtmsEHCc2cAeT83x24Y5xH2o7aAM",
  "key15": "5DMoyyyFoGSQnCKq2tAHkEqT9JtjcKn47Re5m5X12S8xhrEpqRjnxkMfuybjQyogMvsTb8iY8JYu3cg8XwqJB8X5",
  "key16": "4reMn5N2u2yRfKdjivrhxU1Q3k8LriRePxJNhnq1mHz5VBRGCuGDooD5AU9VCgNNqXVM28ScLeQCrKBKu2RunmJe",
  "key17": "2LawtLAKTsx2NHhy3gj6wUNpmHRvBct3npDCJtzRedmhaSG34MnDSnESBYDHQXWQzoeK8exXmumo31WUxx2xm4pw",
  "key18": "5LeLX9nUaYy1k5565DYKGqCHphATo3zkigaXewZ3Cg4FWFesacsXhZroFcpnf4sazmEdCFcD53fvRYth373RrEjV",
  "key19": "4FGxbbNKVFQwXqzUtwbjrfzZxfywKjJpzh5JDCahx5JbL39fEyhaCDhPeJZn9rEwc8E1g85zMZKzxupfnhF8EExj",
  "key20": "56Mf2hzz78w3fagAzdT3t3Fzp6oB5Dqop3pDL4N2zYPRsdpYP5fAoNwfW1wD9JK1yqioHytAFQd3os8WxM49eV1c",
  "key21": "4YyzpxskqHUTSGD9Mu4p2v7jcKNDPXUibmLMt6bLuAKhxvKpZHrYLv7tkANCfiWuV8ABVDkYj35h8hwrFiLTJakz",
  "key22": "Vq64j6yC1aQAe3RuMtsYpyPbjy7CHhbpLD4DiLvmE7c6u66tCAPeiDf3bHHfLJ6rxDedyq9aat1aY8YUsB5eeAv",
  "key23": "4UR8fEqTBzBpuoF36rmfDAbJWzSHjPHFfPZKZGf5wy1rBAYEtXjqd7hNLdPr3fqQdiZZanUesn189F9RdVY6CNxG",
  "key24": "5P6cb5eLQgy6u1Foj81yzdXhiURrmssJVTExuk33e9VZuJJoHLiT6ik2H2CjECRsPAYDP1KGZmCrkjAsAkDvZLNY",
  "key25": "q2UWWjahEPWcFpZYPPqPdfx65V8MnV19zUF9LjzjJDZHPMfVvDQHNSxzCn4Si5UjLvGdqYE23jdN9nz8k6AeqC4",
  "key26": "27PEasGxNnfb8Y3QPNSj5FidovJHz68BcS4ku6qZ3gmqByzHGSVB46AiXMCaX3ka6or2KGZeqBVW1x2W1dAUBVZg",
  "key27": "3Lj6ik6GBcZYyZ84Vx45g8qhVZBFU4gLoXWaX2ioAW1GjMXHaWwJYhc3RWBp4W8Uw5XMz2zo3oxxKbPx7UMuAjDy",
  "key28": "5wDDMc3TmL5xJD6eSSs4LkFgnGucnYtAsCaNKFGi3kcwwxV6UbNTTrTpwwEHMacUkGb7STQV2FAYfCFDEPWsDyy2",
  "key29": "5sUs4E9KnrSjBTgpawbHbbDDdXZNsPBvtF9dtqsDmh739HgeTkUjvJUpuDx5mYDY9wi4uBy94QeKL5tffTUXQJhu",
  "key30": "4B4reVHjHs4NHGk4BcW3E4YBoE47PyucnSESbCi9AtuCtpbF8djivS9zc838DJyiy8obwXr2o6RfGwwW8sqqeF91",
  "key31": "4nrvVCFqtfN1Ezu5RfGHpNPreK2zdVedbxRSK2zWZUSQuo1gu9F39FhwEjzAH5Kpaza7XcQrV7ef96jXwWgSGCaR",
  "key32": "48JMCT1gzowbDfHTB1tyrmhLbGnUzD1hmYv8yJTnsDPfPknhcYFYXHSexiS97ojrJgNQpAXmagvNXd1yr8gGxhXn",
  "key33": "3DKzje7U1bBAWhrB7MMwEVYFSsY13sSoxquXaBazLpgaTH9Nr4aUAs1bygUiKhTpo3U8pkVN2icRnLdgiVJjxpWC",
  "key34": "4rU8CdWLEfsbKMTVxnpDtCAF9dpHaGxJuSufBum2GSjGAAEZ2VAgEtAvkGUWafb33UcWTt4QruE6DprBJxn48gTt"
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
