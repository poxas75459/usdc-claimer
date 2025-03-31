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
    "42D1Sh6m6PdzZWUWXnaJBBDqxpbdosPHStNHe8UBWd39akpYwzZpxgSqbRRMTFxbQFFtPwStLdAfXhYEFy9SHESJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acJbLkKMW3r6QW1Co7aEZR93mLJWhop6NSjhJBrmkBm35b8vF3AuFtbpZ4eoCz71tNAtPacJX4A57gsJng21i6Z",
  "key1": "3r2jhPpdKQXip7wrR3PqQwHL8kGDAyz6x9mk8BLD1Zt48zSNqWZKucXAXy9CzCbqbbE6MKp61kFwMZ2Euzm96FhV",
  "key2": "5eTHCKKCjz8tCiZr6ADkJACNKYRtSKrSRmG4sYMkyb6mN3TcJyFFhbyNLZBUefZawV6Zn4mrmLuhsWAK6daHwKtr",
  "key3": "2bxSEv1nu35HLJFzaewbaUD1avUo8U4mGj2qAeNR7MDZDTdYAuYvgLHRMpAwTSk4fVpqNDEndwbdeN83Jwrx2D2q",
  "key4": "5DXxDUtA1ripPfkM7aU6GeMTYCcsQmauk2zpDJGMk4959G3TU5XymtuYi4NM46u7cLehWpGYbDA7MsDD2bNUApty",
  "key5": "5JQ36vs9ucqSs49trLYEgKS3tojknJgGTUtcAxdqAEWXF4iLsZ5Q6Nbe3GpmEymAjgZDTH8KfBsuxRXmQ3fgZjxu",
  "key6": "4c85ucmYPg5rtRg8B7wvHBHXKzq4DZPkU7ViGmrxmxJZy99YPxV9B7pv1dqMZtGpdt9xFpwMtK4LBPeULr9c1Jbb",
  "key7": "4PhtqrSukWqz2d5AofvL2fxbdeUzoHnPS5DxXktVNHZkAwa8kaDmLQPKMJ7gTf2Nc1Xm9JhQ93GfneBNRPqB5ZZQ",
  "key8": "4TMucwLkQb5Ni1Zx5ZSb9FQ3zmZbdcDXWU9VAhchiy5dDgaHd1JkDa2Q9pTwkCa5LLMvpBtGZGZVhbBbXW4saajj",
  "key9": "2B731xxCdjgPM6fz1gMnwBf3rHoym4DQRDdnQAny7dese1iHtiZLUCX6BySc8m6ZMgxAn3iefDzVxUHMbQijUqxm",
  "key10": "2DgKtpqaCex4mJK9vCdnZpAaqqTrgpqFruNavDcKjxg36oD8saAgv4diiq6emsegixkwanW7FbtVGadG9YzUL4Jd",
  "key11": "4bSmaCooTfUtBCvh9jirg5M5FLbAEK8XMTDeq4rpRnr3Cc6EGnbvSvLWU1xKUv26xC6u1w6nLrFLq1A6AYjrAgH2",
  "key12": "UNcT5rfudD18BwrZA1N1yfSRF9AH2qqQWq2Zx5Fya1waUWD3gYV5meGMaP26LqrMy2wdw6EfFKe4XXuLSqPm8sw",
  "key13": "4TQ1t793JcNvaHfKi48sQkwPnrhVbxVKjFhgpxgd1AFjPv81rYbLkj7DUZPaqXkb2Ju6KEqjEnpM7jjqbxPFeFtk",
  "key14": "2b9RhRhaNApGdgxHb28NjjUrM4uiQpPx4ecMgehdYZ9UVBxWTLZb7RsTn6zNywLjqZT9RxCRfFRhqaBghm7845Fv",
  "key15": "3ippGRJXwEQJ4PJLpJtxJXn8YFtKHf2CzMRocu2D8R89Fw4a8mG5u4zgDtrRGpfxpo64Rz6SugSb2r37jU4HZXw8",
  "key16": "2bAqaf4SWoBSb96ujWG8zrQga2sna3ee1G4Uo3RzVbw8ZWhtgH7JZQfyYw5uQzuXG1iFhPVQ6pMVcUCy27Q7Txrh",
  "key17": "5S8m8jAKXhPpsAMm48cFMMJtiuHvVkrqMm9uhn8ajfwvAFD4BAZXowbVQAQAkThVX6nQGXcs7sjxVGwAkEfMoFv5",
  "key18": "623nnDBxnzdGbFA2kfKY9oJSZ2MyrVXe8h2VFwJ3RZ4hHTwEARKihiqWLhmJqXBANMgQ6pSSTdvYL4AzEGJv4Drb",
  "key19": "2Fi83oYXMiGDsmcxMaar4DJMe91UTi7KS8hQg6eDAZsQLnJSnwZVUsow5QaLgJq7iPgT5H6Tq8vakKFqMsiN7pzD",
  "key20": "2Jtoz7GctPzshGV69esRGhApD5hcAv2nWX9vsNZHjZswktfWobi9xREyhLp9TcxT7utHUvEF6mgmzP61FD2BbM2A",
  "key21": "449wjcKEmXB1dYdkKEHsXv7vi1B6fSNj2qAr7SKT2bKUtwhmLUXG75T8N4KQVFPj13niZHekTySUJkjUVcRAbmuV",
  "key22": "W4LJZsj9SGFzLf658ci17d2h1W5ZuuZy6QdhnFc2436qodruGhYyk3vGb9GvxQW3xcYJXHu23qdQxqjL5XockWb",
  "key23": "BYKANX3PsPRftXXQHCKgjY3vab1sxQ3MBZaMATJMoKi2YUnbNXAr1dtZ73YSQY26SV9wJHtja4P5ViXFPGwWiCM",
  "key24": "5CTmgFgBZXw7kmmE7qTBr1dkpxVMkeMxvyLSKjAGXs9E9ggJBGMrFvq1pTHmpsvxPJXd49fFYdr13mhzpwEEMADD",
  "key25": "2fNxcsuREuL88DuzrAPMRZ9XxpxufmJ6K1vpsrrkKWCFwS445Qfd54SJhZFQZay1wA5Q6DAAjhxy42zMq1Xf1grd",
  "key26": "3okpsY5N6XcLksnnpNxjgyVkWqP5tkWbHgq2z87vyoKxa7HKJzjG8bRx1ip3SyuyL9fbdtaU7BxHQQ5J2N9AGMSB",
  "key27": "5Rd8RD8e7eSqvSrqSfpdzZkQqAp1CW7cfkUDuKAC3NCuQfbtTyFsQdEfC7gYjfaxoTCR1AwS8mY9extWV68PoEym",
  "key28": "3oLHBkwmv2xDiyhNN5hbyCy3A7Hr8Lm6V8g6vzVhUt43MEUtiUDmoBSwbBHg1XGSRgegsjjQKsiEduyLNTKyPtBN",
  "key29": "4odSrNw31o732bTnTNcVSX5hZWQGibN8yUcmb78xt8L8FA9gSynn8K7qoESJCLHAuktCDD91mamNDWfCFTev4eWf",
  "key30": "2fg64KgTut5SdNU7XYYSAcEjfkiTY2GNmWApx2q8F5xEW3VHhFn2wbBWoFUsfHraonenCDXD4uahbwUojt5bNtyq",
  "key31": "232zrNBgVMkrRgBau6MXAkEUDE9HXgURrvWnNY4MyU2UJ4zY6PREjrSLBFHWRzAJSUp773Q9NSZqmDnC4S993Xcv",
  "key32": "4sCe6TBZJTSfQ1Yc1bfsuWVRCLm2jBVxckZYyhDsYFK4LPshUyCDmoPA6AJCMeWDumTT2vevgmQKYCwQZpHSCK81",
  "key33": "27m4vM7QEcVW3BLLNgbvyvFHapGMe3ffrVFi1JfbGSrB6q6cL1bMfUGWTN8VBq77B7PqMBvi2AsE96GxG4HRSiHU",
  "key34": "iYZdLADi2iXrdTERsToCj9kqxdMrfzxeMiy23ZjUY3GJYjH14Yo8qW32jtoY63JLRTe416P79ZLPYYn3hAULg6s",
  "key35": "4Qd3HbhLMUK1b95hto1Fn4Yb2b8xp91GKXf6ZBcaX7jmqWMqh3T9LYxR37JsQWpcEBMRYQQBB6QjtHjwtyEa97jU",
  "key36": "4gj4YUdKAonWbJkgmWrdiB6PJCBhUHHtSs5A1SsyGY1LWkpnD85kWXn9tGm6ptQxbd5X67d6TjgxWnq9FZG1ZmSU",
  "key37": "4H6oZ6RWGUDdLxp4S9FQHhaCBFAwJUqGYc8Aw5Pc1NSAv94KpbhdzPqyCRUHM216xrZqmP5moYtzenETkEJbzbhG"
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
