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
    "5RZmiKhx2jipci8LoxP7YygHJHKvg5htyND9Ws3y5MBJ9iA8wuFLUhypvepWP8EWtxzYqwNtzruY5TP1tA6zJNmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GPdTMraCcuoHPyMJ4Cc9xCwFsNwUqyvZb49uiqhZoctUZoZ3chYC3T4TE4oN6DSjVypxKZMHiqwutKcTQzaQfT",
  "key1": "2C9sGKtZherD5GomLKZtnoGhv5KoMHxqvS1rgAQAVoRXqms8XoWxw3afxkM4aaidvtrEGVqaThqVQuWHvnBP6vLi",
  "key2": "62xTKTCsjogh5RYUG18fhequ13ATSqArafAttuzw9VUAKUimu8E1fzCXYFzZwFRWFCsVQ5DisizLMktRG5L5BfUy",
  "key3": "q2kuQQ3gfFC5FdFE2tsXTKxaBgD1N1FRbeBBTC6knSvmTkKkxjcPFc6sofUXHw43c8C7rEASHpAWaEpR84KQwrb",
  "key4": "4yn3Aoz4UycX9VTQ7qHArF4ynCRQuZjJ6M8DqiwdiFd6qUvkE1GkV3Kr6LmuA9Dr6whiXSPV77CAtoqT2XQoyeft",
  "key5": "4cvRRoZBkLWHZGCmUB1CXpRxBWuPqpwHbcqBVMsEJHzWWZwYwGkc7coN4VR8yYA4MSS1ZaVEco8tPvVzPERM2ZiW",
  "key6": "3Q6iRw14pPe5MPdT2hZgsTs9suCEwp7aML9xN9LisyxijWdigHUXj2T8oJzKYLGMVQndarPgevmAabRcSi5ZDYMV",
  "key7": "4bnz1AWzq7vBmSSJ6unffVpYb2UPrQhjPZxFHEHCUQxQhVYGy3U9gFWzivLQuv5hypNCNNhh9iq3QMbPsAf46EAr",
  "key8": "53eM451vbpcRrqJikwKBURdNbCdmAMGh5C4LHKp1dkSk9bMUqgwEc9js4ZnsppEPQ1GJunAoQyWk7QbG7bKJm9vZ",
  "key9": "2MsZd7FAm8Xt98KHZMEgMueRmJU9sjfFfAJDyGfLW8cPuFAvohZKH19wLykeVFWL8bVBRjytp2ttXsqNCzwJ6as6",
  "key10": "4c6kHtpMVA11AvhcoJa6cLmWjcti6FGtb6nqNTWQnXomk1avHEFkvJLZ1jPXE4qDXSqjeqWhwu1NLLSJ9q2UbEx2",
  "key11": "zDtQwWsxhXgkA7aiFcXVAzEHBEMwcvSzxrfVGH5u61s16P9Ds5TU6AyNCv1R6VCfuLvG6kCKX9Nt7KPNekT8YW6",
  "key12": "2TajEx9TzmDiAQF75rai9PkJ2yy2uvGJFSDRYhom3FeSBvCDtRBjAeUrh8jXZLiMN5wDurLPtPrHZdjKpEm1Kh3G",
  "key13": "2S2PuZZN3YM2C6Z6DQy2r5smcEv2xqgoAbjxpkyhcXzS2hD1XFMXNSB2byZbCbUNZGQTU4tL555TYvSFHSgwhEMf",
  "key14": "2qBjH887ukrkdGb3eh4R6tUYHvec7sHVabwr1uqLpuT34rFn1seS8BBfXvDsyYmt9pzWrpbQXKhac5RE6eY7hVNJ",
  "key15": "a3FY4m9AXTnfi1d2gCW4J3ACHdeRczeK51cGVNrUZSYuwHdGysywnGurkzUpxS2ERhoifZg1z6VKkjs2CeGdbQX",
  "key16": "4FrkrQf35Eqq5RQmkBGyZxwwrfLiFJ9QF8hPVntKLgstkJhV3uJzmA9qdrG3sWcgAZm4eh366x42LJyUfWRDycuN",
  "key17": "NmLgL5yvr3rgaErYv3seNC9E29jcosUM1gdhhrXgnkyeABgftHL7VYGKQKF7ENwqnvHFpSixZM4tq7Cm3dyqp2J",
  "key18": "5X94pRTsyZ8rPzQT4iwQjriuRNQFFWM98aBYkuZN1e8EYvipp8V3cofcZFB83qz8G4tpmV6w7sz22qeghefVjNe1",
  "key19": "g3it1zWoZ3dqrG9SBF7FNdi6Kiwa6PPabWVR6DGahXALpcPX2TbSUersCLZMbSKekhAHTKJgiVtd6zCNzTeD351",
  "key20": "3norgSYA8htVmUkkW4VyLNSSKVwdVEgsvgqnnNeZjVxjCyoixhdoaFQuT8KLAkHNgvN5BPPxRS7VowW3yTupW9v8",
  "key21": "4Xt6gG74sXkf3XnCsTaf7oEbLYsbbnn6RFFDa483c3WHgzM5XfWk4aymhSTFqGEGmnPtRFNLbZPJcqjUmkFSMj6b",
  "key22": "51SUsyeS39oF3xp2hVbjqfNkPNDaoHoiSruTn7qpAbvmGcp9k1tpQNCMnPLxVKiWJr94Vc3EouTiAM1RWdrWLQ2z",
  "key23": "3ugq1JdCYipEWh651od6e4ixZ912DxSHKTSSJ18knDk3zrMmHceqpPjXq9nUmSJo4rShUKc6wLLsVeYRZ2Rc2ixt",
  "key24": "679Xyew6eDxpmnExBnqU73K6BbYD1Na7Fk2dnBtWv6P8wBhw5CpWV6QEGw9nvWGbk2krQq769wi6NcWuZdXnfssq",
  "key25": "4PVFGwyvbXofbBTcBmfESkwhnwqm2jb6m3gAjqFdmx8ioT18NXpjBNz4AsfQ1ooNkPpQ5bCu4p763ibwMYAYHNEx",
  "key26": "5nqGKuzDVtr5h8KC4Npcq8tsuLTFLSgaxTUQK4fe93ifPxjtXuv2gwZJcpzQnRyMr92Y5PRVLUHNHF98X6PMSxnP",
  "key27": "pS4uzMZsRypuk8mjqXpzZNoGR14PBQQNc1soJwgDH7KSM7jsiySbe3QDoWBRVVaEvjK2EbfqV8X6QucWhQdFMCX",
  "key28": "318LWSXiJNdHnkrfenTYVbBGnJkVVszHe6ZBmp3tHbCXP6ZuuGZsGpHBhUetGPwCSQN9nJ7mi6Kij9VBLH21ud84",
  "key29": "iL9Bi91ofJNxiLhVm859rP1d8jxUAT7NyDQejCniJKN3S7BQsCoR1HqK46qGqERZHQGBhA1o3ieLVUfz9yZ12kZ",
  "key30": "iVgSNz5uheEw1f14mjLdLfjMA7VmiPcD8MeUckM134Uhi1fBURDpxAP3f28yQCKf13qeM9PSSeLnxKJFFBQ1mMT",
  "key31": "5rC1KjxJoEofzyx6USQFv6Hi5AfG4gjRQioA5UYmijjyCGK7KjKFBu3jDFZVNRyQuwCvvqGRSGA5PxHYEgKFHhnT",
  "key32": "494AwizawTxm7n1Mx3HRvnNdNfbbJGiMMozgZhVwy47UehWDgNAyJVtPnzSKJKKQh6exHgG2jRAJqacPfJmaxVpk",
  "key33": "3U5vDacKCarLX8Dnb6Nuy7W6oMfTGG1jq4T3BNcKmySzaxENQBDEd2ukceMKEcJEoMAC6mMu9oDfo3cq1PdAA4op",
  "key34": "2uEH1HB4TxMshmEJFB5imMo4MPuLuTUJfRDesSdd5pQo7usqeGr4PG85oNVKAo6AQ3za1Fv4A3e6JFs3aeRUJya7",
  "key35": "4yzKhhjCBqrk6dArAKtrJcof16Whyd6umffJoHVAehzaFmTZsfctRNHHfn61j4t55ZdZJyWuy5y7CMnXMuRAWjVY",
  "key36": "2rbmVb1ev7ShD5ta2xJZ7VGLc1cBDr4j7QnyJCtz6U3Pk228X2dt1y3ac8vjoLydYhG5itirMbb66w4LJzbwQd4q"
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
