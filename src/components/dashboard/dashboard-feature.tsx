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
    "4sqfDsA4E5sxiP2au4odXdbj7TcSm2ELQFN7bamC2zvm9hbQvAnhN4RG1YozVq9bnhy37yhexc7ELCc7i88URwHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWfip2fN13FABJ7R9RKPJ5V7bJkjJZFydfbDYA9jhjwcPtrVxVbZE4jvSkYcKm7qD5vWLdWLM38v5GVare59CQ",
  "key1": "485B7ojrrMzz3F6beaoc28UXGc41LzRDENVaXsqbe8YwCVJ2xUFE4NPFJsTL35YVA5AZEz3c6B5U3aM4hL7pFXMo",
  "key2": "2UrLcKR5w1pf4gVZnof1nS6Gg8Z9SLrgvtixTezbJPqStKEwypFLitHx9gXn8dgRxQ2X48xXJBwHt2hEtWLTYzdh",
  "key3": "4TqLPT9LJXvdS7tF3LuPAqCkTTZRkE3qSrQqHHXuHoSKtVWU1u8Tr5gwT66fJ8HJKWKakrVzVw2xUdo7y7h6F7h5",
  "key4": "5JZUTQKMuSAQLd85TCSBeNQZLjo1Ss6xShqz7X4upw1YEYZSVmMYm4D8AauAfJLfVMR8d4Q28jQemb7nbCEcxt6c",
  "key5": "3i2macwWBBTc8EzGfrLqmhzSB9ZejKc4LAZTLAyiGV8x8CKuHFsVMhE8YuMSzgtUuZJG5YQBUzbw8GScCKY7G2QS",
  "key6": "PyF7VC3DFvaYMmxEwQfXFTr8KoXQFaD2mE6iKyBEbVYy79YtFtdKwj7FbYXuNNgMTg6E86wNaHhCBcA2xN6YmuE",
  "key7": "Fk2DdDgtAo25e6iWiVqMtdeK98QrMU1nUTW8TcL2J2WWUcQmTAbqX2RRm4BE9UyFTTk8HFSKkbAAf8Eqi3TLV2k",
  "key8": "2LaLjGDvfdZ3bJDLi4gHEFr7LFDiPnzosfRapjAenNEJ7jzG7RrfYDnYq77pPcKstDbvwQXSUze7CVa2uqVciARg",
  "key9": "3dSS3rYHR7V2YX52X1JoKf8nYEqaXRJRkbruKSo6D5cfdkymvSX7uXqCCi7R7QwxwStUrfaD3q5LoCTidjbSvm8p",
  "key10": "7RLkZDUQumU8bQA4VwzpVNBfKt5PyJCP4QAwptsuBfp15Js4ABQHQN4bkSBozH7N9hq36aobqWDyh7CZU8o2cy3",
  "key11": "5Pz4rSwp5U83nhsHH5jxXvQ2Hr7FfSkGg5dqducspoisezRpqix4sJUzyEoBmmU2CpS8PweLLY2UrVm2JwdQxPfK",
  "key12": "365ZonV5VhMviWfjKQ4nuTi8cGJBy4PVqLGntq9Qauxd8waULwUHJc9ugeUeJofUfgJry92D3b2RECVbBWdZc8dZ",
  "key13": "2NFLMjBhYLRmfwZnMstDWHcKFmcZWPSytpZ2rdHv9AzzQUjPT5T8DH1DgmagsN2YQPP4uW2MKgs5XZ8GM6At1jF",
  "key14": "4mhmXN2VimYGLxeWZEctfRtz7xBb3sKTE49RLSBsxw76grpirwcJckSVUhPyYNsan2j6JAng74uwKJB2JmtVCra7",
  "key15": "58UZCyy56XESnGGdxWV6XinZL6M6Bau11Rv2iLGkdnJM8jC3UZJxoxqSM5B7iu5TEAN2uMiXtsJPfKtBPBoQUz26",
  "key16": "2iUtm9Ta5rncAptVY4w4Uwge4zbDKwN8XcCtvnJn3wQTwDWv2aU28dUV1Uib3Tfz7zrnJDpAFvnBfzxdQtwRmENd",
  "key17": "2mkU8mUJHLndxNeqqDYgmh1CtgxQSUgYbPNMCnky9obEjqvYctVG6qxQGTo3HrSPcsbjcVFLLZ9TtjGcQ7KZBDMv",
  "key18": "533zMjGPbaqHyVL38Aq8pmvNoMk1CpeThejAvF8cqMY7vmQ9dLLZdFsHyHmJ5gDa9628PV1qRShBoDGiHro4koCg",
  "key19": "3BmjtNyaQH1e8cEtVuoTcWNwGQcrKmxCubHXyeyBNfAi5bYRieW4DLk7RmtiTmjXo5S1143sjPFcc2n4B93oHsi3",
  "key20": "5wUhBQfAvp4j33LyPtFKyn1Du8e64asPV9ioDbbApjNjDbDWzadvRbkJ5JTNipxbg43exwbpGvDd8EqxQV5HcM6G",
  "key21": "2tttPfhVJmWVxDrj2212GC1Q1DkdutHNLgeCmgWZBmxMtSUaLQCSSPgWcU5r6yX1UGc8mP8DFRZJWnwqwvscvrde",
  "key22": "4KYkcUMTQci8HSNDmX2uPWN23WNtioLsqYn5dJGActFcxZZ4JRhJ1FHsSnbnRA9L59NWgdA2fqLmnXByhK6JSUBE",
  "key23": "7Mhk9ixAEeaPvr1JA1RPN3oWx8vSPnR7Xgc73m7VYzW8KhtGxPjqqZ4PsZUPicX2gaRdRTUSQNURXsc6iLbEwzA",
  "key24": "4qSc28kH7EVYaNAJxgfDwGZ9oEmpgb5fkzoNmu4XLvGjRBJ8pugitX7jteB93mGdDotCUikGoRbZo7wQGVgYWxDo",
  "key25": "fSos8xetLRq6Tt5rJqw4n2AEZptsZMSiZ381AyJxT5NfBuW4XqjiVBAM9PRWk6CrxuhntfERathr1JHNAieGHpd",
  "key26": "f7nhQH24mA5EacvTsZmB5izyTbhESxNKVUQD4UErMrFaE72HftYhxysWU7RmwzU7gmce7hidTnb94KtqVJWR8cV",
  "key27": "3h4a22Er1RAFD4xCAufZ5mCJs6gfnRsQ6PEXam68tQ5FBBi6kiosYn2DxHbACW6BGT8UQbnzQQD87aGBR9XxoLfx",
  "key28": "tqbhmRwugYoT8WDjxeKUegr6p6B1iiCVyys97JEbrF7Z7jSprkgRWwhgecnQKTQr4BLaQYEwKkcBMwR6MA7Ws6p",
  "key29": "3Fef4RxADQEXAmzfMYj12c7615jiNZ9PsGdatzQ3wK32m5p3X92PTGZHURcEav9ea2QAqJTbtP7ronuuu5Y2h3Ky",
  "key30": "4CNkLPbdB8yYWjQVH8chPtkpBN3tpgEsxYrsy3F6NEaFYj3196Kv7XKTe1GT3QtQdSRTi7ssB54zM2v4CcBWBEgJ",
  "key31": "cyjzoGthKHzP8TXaMhwA3QhmdRtUHCGcZ33zfWfDZH8wTYavmX1gSJbuJYgRW8obAeyKay3S5uei1uGfeDtwzyZ",
  "key32": "2Zwswa3ozr2Mds9YjxQGwnZZJFQoM2zEwMtueL1mreacgvNb7k5EErVRNM49gPweCsCXqD4sPhoUHAyGKSXH47hP",
  "key33": "2fHsjTM4fcofwjK7fZHXENeNFEQeHmpaXBUqW8ES5Dfpei8ShsBGdoubg5Hj8xVqnQddkXFAnsaSStqQNeRUkPCo",
  "key34": "4TYKhJjvmqD5qBY4rGNG9eVDn3GrZKdE3Rjpr4KNS9Cyt8pdZQGvfMwNoAAJqF3SKomzTLX9rc8K1raQE3acvNUa",
  "key35": "578wiWJm7Q3ZgFTUBDy37bvzRr55axQc18dS3nz9GsQafNsZvsG7WwboywKKtLpL9ufXM4kPXP5DkgEbZLTQcoKo",
  "key36": "397nqj47RT4WnHYBe8khd4GL2F5akFSX3pAn6jB1mEGZjjCEvfYw7U3H19MNPHeyvHaSSXjz7qH8VgsAu6U51HCy",
  "key37": "4hzo2oxPC4jQanbGw7XGCaBT4FeVMD9BhoyeJJ1NKe3eHajYZd1abyHw7gjKwF5hRgPbEe8U13sna1LQsqoP3aiu",
  "key38": "28KvFzGe3ZeF4C4yBc7hwHRvL1KmYBk2GT23Y8pcu8E1BVsZvL154txysT4jzGuyWTP8dGHNH3VDLNjTFBiPXcub"
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
