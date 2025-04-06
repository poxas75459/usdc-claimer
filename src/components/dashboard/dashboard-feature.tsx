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
    "3uCj2ZvFt76HBv1NkdpT3JtboiTrJy3qZjns2KGFBRYuF9jt7fj6QY6rWzaLrzRkdZMMNuze3FkShtZ1pLR3z6ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNbDvNSKsUDU9eznEEnimyA63UZr6CWWfsYo35vUzBMdjcKeXs6gqEV5SNJy6LqriMXfTwDzxiPJqnHZdAYFEc8",
  "key1": "2gQjohN7r6RmPqKjYxNUWC5ApoBecwxfFy4apEBkExjXhwj7sRJaj7ZwNCrGnSjnT9rxiTk8JMMeJmvAvJf4Qiye",
  "key2": "5cQic1jWU1c2jpd521YRj4hzduTGENcG94U8BDgzQbP6Nf84ywfu8xgqkozViVZgsDXGdCX6unMHkVKM3MbPT1NG",
  "key3": "XRxigXATvcLP5HjJVShcfpGcSTd1QtU8SQHMcRxYimM7j2TDCGZCWumVAv1E6d7XYSJLMEQoEcup9grtyPVEgg1",
  "key4": "4vzJxNbSsDBCGu8UuNNVgYGb4QEHBMMvfDe5mUJ69AWjgx6qabcr2xbzz22PCAu1hFpNorf9srjdFxZebYo5D6yJ",
  "key5": "31s6np4yndq34Ve3NqPVD1XXoVUZxhs6BpwGGA6ZjEJbQUoEWbRKx83vNoTskZMARMjY1toToVScHfPiYCnEK7Au",
  "key6": "5PLr21vqvMrR41WYo2vSqB6VyNtxutM719ShLsHQAWi8YQ9YJfX7iibk5PVNDg26MqpGo3GETwLWSAxQbMbzVRWn",
  "key7": "5UrwRSt6th4owV3WDnEHp79c1KJ483gbYiKLRZTyTzy3PKRY1hYq9tHAemzdHcwXLTWcU3B2AA3d49QZV8u2K3rE",
  "key8": "8PmkdV2d8iaCgGZu9knJ4WBfJuVf9dYh958wNmrqgjTiz1nMbcx2MBCoSw7xWyLBUof9DtQHJG3EnovZ5r95cFe",
  "key9": "5y2iBmVygiikDRoihsiBVA1hLQ3zLw7nGAkwS6PzHkh7Mbz6QBtVhfwacDRjf3t67t5kaXM3XoBiMLGGoc6Es45f",
  "key10": "4kzmFrLEZ5DG7zG4os5fuRsPAHwaJf2msvScA7vGBkMAgMyGhSn2wnABQe7omZJQHFJGf2FXXo7ffkk97VfuRbiQ",
  "key11": "5tdGQfcFLD8bJS11iXYKAVYZsRNjemfV4wMZmQY6ofpPN6mQnwcGiGMreXHwjj9tuqaaHKyV4waCEdxuAWN2FaTs",
  "key12": "2DkuS8uQSZtQcr4PQ8zyfQW6pdFzHUp9JsQgGbBM2SEtgP7rJb1TTun8Bmw9yf6tTWYhMgzri1TKzXvwaxF4pAGX",
  "key13": "3AYJghPA17qgPJJNqfWNEaz6g5i1nyNcpfdvAZFC2MS33QcXNwERVEetPJcbaxzvaWZqryDmbrjXmPDAS1L3ZRrc",
  "key14": "2Ax2Edi3JpMVKgwfRoiCHgDviyMaUVNwRvS4jNFdbHPPXgVfKzCg1QdAt7zCcrwqUoin9LGncSfH8ZS77SGEMUoW",
  "key15": "3iZacjs29eapgAxMaKnDdh5MXbhaT1YZKgnqcKJ46L5faa9pvP5TESvU7vAVLbt8WX4Vu89SWGs3wLMz1t7iHn1Y",
  "key16": "2Rd99ZVEgFrGPX4tSFVpRJKuLLf4BWZewsy4mzD5P6kjcLVwnYNYZ8XXBq2SccbMXD1repheqnegqZsm3YQNaTUU",
  "key17": "3aUoomph35f9zjCK6a8yXH4W6y1JvZxni3pthtCgBuM2h54sYiQXA5BuzGEqk7D8YEGhWPhNbBPRb1mhWsP84Ubc",
  "key18": "2CsgZdVcZaht5RUMDVrvJdmrrM9GE2ibA4y9zbbyrW2PN1mmhChRTWVUgpcrvwoF1aji7QDkYCLpyS1YYMpSrEgx",
  "key19": "3yXFfTS525LgKipcLqJ7uYcKr6BNJcgqivgxdbKXQ3H4HuLvwjKZXUUj3tfZVPMdfwuAGx1etaNtscyW3F5z15tp",
  "key20": "2m1W1ureUjrmkhW2A5PDZsuYYhWBcZQFXzFtXzmeDXMtwu5BD97kgcFDHduSZzBN6ZA9LMy11gYEFGE23hfQ9iEg",
  "key21": "57AVnxhtVtKZMq5wPVcfpwuZCSDMLnJgf1YovVKv5owTmhgm2p9XfVECVN2RkV8b8hiV84tSJCkcpwZhQamaLphW",
  "key22": "RgTiMd3FVYKTDtfYdiFoHedfE7LcZue7Sbrs39fbc1GkhnhNT4BLSxKqSr7PJYkvwNNnQ7DT1v8gfDnGdhoW25m",
  "key23": "32GQvnuzb2jBq1QjWyUTDW5iVFmbZsD2jvYJ1fx6JrZyGeNriiBN3rQg74d5VX9MXKSCxuzYGDt8WMUdYoG38bgk",
  "key24": "2ptmUBJ5YfhidAMZumh25Q3gBR7GtDAvANCoJFWGsk4Sm3DhbaVJ9B2jYjRM8WXBzn924maSeNc6HF1eusTLs9yu",
  "key25": "58ynDyCe6woTpFGWdW8WkLHPwwziNMFxTkW6hgupzjnSJ2s3ifpitZizMLjoq5fAwrR31XcZ4ifvcmiaPmNcBbGT",
  "key26": "2x7uTmqvzFBXtvSt9eVuYqK4b6jXPNp7uEKuTwNSvJrKWapNgYQxfVPvugxwTWJg8qRfmNPPn9nrV1ByuacmcGDX",
  "key27": "3Tx7Qv2X4SvdeG5NF6AZZK94o7aGcUm9YmXhZie9N75GieXSKWuhHFW3nwGZdsKGs38oeE7H7CDnYQVLu6M3Jwc1",
  "key28": "5Zdc2rHv16FTxT5bpjFcunRMLFQgohktmyYu9mgqcYG7qV1fMbF2pB5QVVKNGVjQDbPH11WyADfSF2TQZt1WfbLi",
  "key29": "a6ynrEyUbPN75PJUgK6a7UKkekMpEABiBWTtGFDGmgPwZLwc1EVnbCnxwJSmUgWp42wBgoaehvLCx8wnmTL6Dw5",
  "key30": "5pwEfd4jwj8xG76328G7P8AwJ1mq7mvpkpmdj11dkqL2RUHyJT4iVrNZmk1SwcTF95cvuVDVThWnYd4HkvYnRkRG",
  "key31": "ySL7VNCntigG4e4Z7HchHEWNzvaJ3i5mt1iMCUMDNWw8njrxpfsQgpSQVAVgW2TFpiJHTYe8i6ze8QrZds5w1LX",
  "key32": "5VPQZ56AHY2Bz4BEDAnUJtwEeNT9KdZecFiSjTswL86RexbyoNwrbJiBMAiY3sj4qK6eNX5yrrGFy4PJvxfDusi8",
  "key33": "2yUw4AMqszHAGa7sUMjGZzRpaA9RscPnGh42moB1jWq3d1ytKVL74yats1JP3E7PsBsqpaY2bibYN98GAwyb9f2t",
  "key34": "yTa7CVsdVGzznKuK7xKWyvS1EuLbJ7mNwvgH3LE8Y6T8bPBYtgR2EyJaokgeB7fzgmgecQnWaTAeWruie6mqeW8",
  "key35": "2mPerRnKykEytdUVp7beLpyLWDCZtDX1sXwusSAno9DGeacfmqv9garw6vuPseS2T27hbguJrTrVCUwmEggjG6xe",
  "key36": "2ZJWxUGky3gCFNJMvvWUCbgsqZFB7q8auxFJ8HSp26LmSjMM51n8XCGrBeMDxRESMMhr5wecwwqUi8E5UdEgE1PP",
  "key37": "3r1mpuTFaQJzsJPxm4Jrv3hBN672T6jKfDoQXvrKhXLyyHojaBcbJpQvYzWU3BK1GJKv2Ar7Vsi6WQCb8c1QhzXf",
  "key38": "5yemU4ndiTFHGkRWp6p7NnzqgMnyBqK5W6Pm1EBFTwEJTnRa1uQ9vNft36XxFPnPxkt5iEhMdj2yDBJ1v3XHAuug",
  "key39": "2XXEJsYbFhqZpQY5Rc2ZH3B4crZBrwHhsUAFPetrha4FsPgshzpKi1msgJ7BC8w9Gu2mftkLagVDcpgRzutwPqUs",
  "key40": "3k7ikvVY2wnBqNAHV23hoL6JQFbCBRMqxcW96GA3PNnJbsgxEmxkuTwuenj3EUQCsGXw33QMesuybef2y7hT9WPx",
  "key41": "5JA4XdBaHKKNnFA983EMaisE32EL5L3iX5oFGMBWcjMWw3UXbwEHmMtm5EDPkYLF8xoJVfNmFw6C7oiwwGmXMNDU"
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
