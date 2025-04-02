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
    "2obPYXz49ttZ9JCkGd2DeNavSDn4xsEdiphzjkCuwcxixPasYEyXNuZ8Gz8EMFK17ZM1xiLENNnz4wvnPY2ZKZh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dcQabsemSgfPyHGmH9JEaBhAUYnWwps6e4SocTLBczJaqC5HRxPFAL7vGBT1mHjCLLPx6cdaGLjJDNyeuTqQG19",
  "key1": "2SFYgbrSBWT2hUfmcgD3nWSVQdM4SEts7pHu3CZKD3pPhEcupy5cbcLoxR7AcpGmAPeGWr2HaXN1fc1Ed7CqH5pf",
  "key2": "24neSjj5Q27jgA3Dy4RerzyTQwx7w8jb54exb2znHg4uDFnHVNHK756Q78Gjks4STpG6zGfGBkj1abyTadeTszwR",
  "key3": "3uANiGUuDmYPTEwFHxXPci28V1iicU7vgEa3jQHKx6QrJ4BKe25zJpu1mKrB2VrAfebHQ3s9P6WVBjJ1sodd3P7m",
  "key4": "5xy3pcu2sc69S87RfBjbQiapF3Gqn2Tw752VLb6x9vupcJkyLC2aoqqRPSgSZ7kEkjoD9DMcKwnU3R1YfPPjFm6H",
  "key5": "46VzyvPAAMrh3usiaHzoUJCdBHMhGdKu1dKfemr7yrRUE8jZ5csx3cYXTTwQujiKHhjGY2souePLCm3bcyaCtnpb",
  "key6": "5WnCiASuSqXvd2LGmUyXAiWTHj3fQfp4UFHrGgqaEJnkUykZpoM7GCfAWEvPMzv6GXKhV91319zFYeUJkycBC3RK",
  "key7": "3LAjPe1fRWVXaLA6zz2BPHFsDdoaf6WZqi3Uqnn4WfbpeeVQviR17oQPjDwGLNTe4p3p85v7YKkTcPSavukgZHbJ",
  "key8": "5RXvshEixwWi6u64MXWcF4SLDdmprmaJNffnkvyXTdWE8VBRuYSscEqHAZqZkjWL1KdWFmMC9LJRf92S83h5qLES",
  "key9": "3Gc1BSrYvBZpyQ3jT2reQgBTQbmfFamsb6xtKWLvYydKxzXWgyoboGCgQHL8MKRVqZmqa72WVhho4iXme7H4XdMc",
  "key10": "2HPr28ZASy7EHpcCJ9dumtL1PZCT1VZQB5iduq1wsDXRHR6ZjxkxhFkHLC6SHqCmcs3yjexTUEyR33Bmac15xUDz",
  "key11": "4RuoLBgmkzamZ4CdtaP7JAs2Ecgw9ik4mMbshDfmPDBnkvi3PBH9M4naFDXeYzNPLsSUenZWre9PBhJyF1ZCHS2Z",
  "key12": "bBjV1odrzdq5g1CKZMttjoKnxu7GmLWvCjqsyhTpprSFLgR2fiWEzAhrSzc2PrnWwSF4ruC3fCg8RydeKUSC3A7",
  "key13": "5yvamjfuQVbbE6yUNqvbTSEUR948T6JWkkmiQdHzt8f1xbAWk2Ar9ao1TiHQ9QrSQP21ucHR6CxmLNyDLWJxmHNu",
  "key14": "4Vcz6VjJVN93qmXkzsDCV7BASWdAXP8MniyeRjougaocP8DhFYGP4HhZ1hmqYZAgidCCazgR7nguHY2L1QhF8r74",
  "key15": "2q4JVbfQ9Vy4ipt6cPDaSevrrRWfb8aQtQ3vgefbLm5rJ8pFzScNpFLmx6FQ1J5deYFbhUXYAhUyG6c8npKR8hRz",
  "key16": "3tf8ZVgaVVkDXeDE2M2EiUewv9Sgs1zbiBUHrnE1NBD4332r7XaYodTsBrHN3YerXH2qvDExvrFmL6eP2iEkYVF3",
  "key17": "RdAZJwyiQrodJ6o9d3sTJcDCeyQaBVTzAPoiUyMfuvtjvDqaDv9XosdQnsoe7MhHuV2h4UP8vKkeYp6qGZtFveT",
  "key18": "5JxeVugAmi2XVPBFEKAUWXB5c5t8pM9WDWrXH6odwCdxAzwU1ieQDRz9Um93eU5hMYXLAuThvHg6gupUu6uuAyf2",
  "key19": "oF3zRqN8JTXLXiRRkiz9mmzdwMQb53SuGbXoEADA1px7xTXKGyGguD3oF6tX2JQBpW7x4GoDgwP5VmAYAmXs6JN",
  "key20": "4Awkvn18rn5TdAwJ57CrUQXkak2f6doNiyiwcb4ZqJ7krHhcvrz6TdJYPBRsGH18cLtYgLKro57TcKbhfuUK1MXt",
  "key21": "3Re3vqhUK3jN1CYAphpp6H9N3qDm68a2qJyR7tUE2hMYTRmHBAucsGnkNXLyfQ8J7uTGM9Qd5FmwuKMThLHbCFD4",
  "key22": "4cFdTGj3GJxBGqaDiiHbgs6n7ZQ6EWtJHzB7D1ZnJghxUrKGKVpGjnCCtgF4QFp7BcuuA3RqU3J1DhELyY3QyRu2",
  "key23": "2VaWyXKRAUNwEG6Fj7NYeVi5Di4DQArdEwHQJLKXK88DfNY4mcqryMsxnaBLh271VxuGkKX41c44f7LipyofaSMk",
  "key24": "vKsLX8aSMDbq7seEBTYdxzHgJLYqT8ix264ApfvwdowoUBNT67iovdbNTXxEcyJLruLaupmhgrR5iPkLBqw7NGU",
  "key25": "cC9Mymw6AAy1rfKJM3aGVT9ZJQJ7qBtekLjNBFqTmHrRscELi5baN95zbyiTsXJmmX1CKVhWCd4a9DNr1tTtoF1",
  "key26": "3cj8wqLGYG9CrTM2Vrce1kmL5gzvsSgGduYhL5uAk8tYVCuo6XMyugvuM8LpkneKiah3tNZLKikvCJ6YGaQQ3HL9",
  "key27": "2etfQncogtrhH5LQdeJaG7WzxJUgM3upkQ4Kn4d3DppJTCU4asAKeuentB6LFuSJGWGc6NBgsoznd5GvXEvQS4C8",
  "key28": "SF4g8KDSTXyJWSBz9o37QWcGTsQsRjBvBBbTXmWJ5idHjw2pj1y1mbqcQpJGB5R3sEW5GVeGi1z1CzTTX52sG8h",
  "key29": "5mRbKcAyhvPz4bHrqrZbekQmrsjTTGPHPQw6hrek92fRSsxrKZARvp4vKdREDn8BcwqTbXnhmTzUiBJJpKNgyguq",
  "key30": "5vBhJG7SyXzoR2jTg7qBVVZb16H8W6Pkq5siSrLyPxSAbZbBm4AKHjyXr9XdsUFZnVEPH8gpV3NErFUyztrPQaww",
  "key31": "2iseZbyWtGm3K1oNWDGDAyMTBq1eQQFnyc9ZUvN9QnxwGLj2zG641ic7tsi9188pjUueLZfnoNNN2asUYCXhUNfk",
  "key32": "5Gzv5vWjuChyJndoSQrEzYkurQoJjpapyK7pQVeS388gy8rFwnf84qxBzvtqSQoPGjXSArSZ8BHM8yvjtCqDLPD4",
  "key33": "4r3NvrkczXyP58yBCk333TZbFqZn8Q24VJjweucW1K5FWcuAcE4k1iozpJnQpjrKEsDKe2CkVZHRkZi4rJ1BvMci",
  "key34": "5yUef13k9AQK6bv2pRUTuah2DW3scf2FhMsFNMjpPdoHHtuf4fSUaH4u7TqhhMfWt89hWgzAzHpAuzZWf7oH65wV",
  "key35": "gfr4H13d9kXgruiQUFnMUC14PEJtHLfTCr3p5ZtoLoHvyANeGyek6GkeZcCq2urL11XmXMPNg23DCshmK4TWZGe",
  "key36": "5do5r6ePfHYLzSEqVNaEUewr4CCoYT7dpBQ9PcDhJ56dHgQ1YrRk8WuWYZwxaadRiVxgoJ1fCH5WGg91cH14u6sp",
  "key37": "3kuAne2qwt5LWxSy8qGQ3qTuYkULvpvQxziMAvX8wmzTJHei3tUhjSmg5H7vPRujqtKk8VF2GXvRTKN4mFhrsad",
  "key38": "3b6Yxesb74w4aJPh7xQ1tG4RPrXE7toCyjXvxU7cH1QVwL5RQWxVdQMJ9bPTdn4YRhAVmjSiyvvYWJp4ntaj7svb",
  "key39": "5tekUvgYU5NVcmukYsm3KmCfwjNguGMVBi5RnNaA6iJACMT6CitP1czebCkhDwWBVyyuCtdVtMofGQ6wa99AQftk",
  "key40": "2AqSgssuwjYyEhg7Wpy5rzcjB1DCtH8Cmgi5WZp4NifoKbQjpkFVNYXPFN7fKonQehhz8PK6DahC5R4yGkWCKtJM",
  "key41": "2n85DoSVpJoKX9xKJAmbMvuP6XAtngBky3s9PVjnEtj993wKz3SXzggsMoTbMF7f6g6EpN2fde3PDVuo3y6rMWGA",
  "key42": "4GaBie9RCVnfsEwckDQcGUNj44XVnJDgy2RTLW39AMeMw524PFvZjTx74qTncTHVAVsHijUjdVP6c9rRGtBbNQ33",
  "key43": "dnp5V9fLNaQAHaG2szd1QHjhiD2FVj1xhqX9vWetD2G9WZxU9F9okbshSpvKqCs3A3wwrseE8PMKQMQL4Ja88fK"
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
