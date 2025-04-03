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
    "382ZntxB5Z91Rtaz47EsDPdZT8ceTCSb18aAUfKmkec5zJ8S9AYQLw6wAxq94E7XiVqW2H3oJjnbm2PWJKaXCPCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWEEEere1kVPLLawKX3rjXg1h1YJ4tdKwBdJYhesKiZRPrY4QCiR4c7xuB1n5j1tPWJnRTXMc4YeBnHzhz3vWTe",
  "key1": "2LygRfZguSc5iUCCmbJKaKWMeomHGGxxLhuoXNC9mJXTqEoaetznEt6cnQLBFzVfdK7n2HD4b4UUY4r9rk5rRWcJ",
  "key2": "246inDXXvL5ngtZNMBqMpMsTcs4fqSFCUXqSeE3hPnf3p376qBWLvbyUs8XNAdauPH4enApLGMMjZcKJTfUsUw67",
  "key3": "CTWnjKFdLGRtLYekuEZ66gR1Jb3r8fgYztYNMWngtddXoxMR63uETSCPyeh92iAENZLW2g8Lx2BUf5eCRJnpzSx",
  "key4": "395f95KksqpLD1y8YFKJbBACap5V2Wr6uLRdKn6ptrv75g5jk1FZSJDSnGCKQh6q25ozRht6UxMo5TqvHga47niu",
  "key5": "59M9WEUYg32rm9ct6Dn6wCVZE9ZCtMe3246AbNspGX3eNqX3mJ4bEcsfFNEyz891fqdcamdhVCyzDjf9VPbWYQCH",
  "key6": "5ziDMPftquy3yGin1xev81pzj2YdSmm9ckJ6YfFyzpHHKXxBSKfXdprLWfg9xLPvVELVBMiexFw8qnuRS3wFdALV",
  "key7": "ca1f4ibeECoUDNHzrhE4E61HnQ19PYymYvxShFcZDoMBxnRh4QefSDYv1RW38eh5pi3gBM3Z4A1KFnxNWRLgU4S",
  "key8": "3768nniMfsN5q9ENaunZa1hnPGBSJ1B1SVAzas8RjAxBdmcAe33eSPoRQdGgS39f4h97kb6XE4jWnuiNot7FVpE5",
  "key9": "3QhWZDEy625rkERz9aMQYSLSY1jQURsp8wncJBsCT7PzBxKXE2sjA5oNbGfz2fjKey1UR48JYRax1oarDjnn4Vqg",
  "key10": "5uJJMJkdPnudz3HF1snN3dvtY5evUCiFjT4pfmKmbkC5jEuuaQCvGUnVSAepT6ukzB73jJWsbuDa5LTnmS8yUKyG",
  "key11": "4Cd4zCA4Kn5EoDic5Wi5yMP22GfouB9khvUg31Awg14HR4AYbRvHqY8AwNiC9MAZ1S3gHm8HFzMctZ4AWBXLK8p1",
  "key12": "4fH1mkjQt4wqEybv78PN9XFqiXzt6xTQN3BJeMCmxSrCDMk2Xbyj5QT2hLNtBK6ZwahNZueNMebMEnTvCrSw7HEn",
  "key13": "39oj63cSGwoqZuCaStPnbYgv5TWERh3xYiK9K6XTUihtTHTFQmYgz9gTiagxQaQqKwPCdmbAmEoQYkR5xyi3sA4",
  "key14": "5E5AFZuxejwWuNghnXcbqgJoJjZ1xnV7yMg3C7nwHwm8oKvUARbnmyYrDF1xKRDmtyqJC3VgHLakBCbj8qafZ1yv",
  "key15": "3Q1znm4ZMMpu5gWPi9M1vh81FfNTTFq3xK3kdD6cX5CSvuC6sWNmosoPnXKuucqpGST5JiaDcFLf1oi5J86Q57TF",
  "key16": "4bswKtvfFRExpGCssSpr88Ht6QZKpERXsRJAS4S39Fu9ij2F1dhzByu4yojRyfCbW6vWqpK59bTVudVVAbvj9zHt",
  "key17": "V8fcqNA2UbfhVtz1aLJzFQdbegNkNogPW3Q2qAGWKUSJ4ZbgYjpnnkp6kagzUQEYTFCGCWgXEwxodXaZr1FdHv8",
  "key18": "2VMqc3dJ1h2gs1MwfzZ8zxk3pScwYcVgS3BbHCb5dtV8rKkcGf9kQ9GmVkk2Mf77MXXfu2rXgTM1nmHWTZpL6gKC",
  "key19": "45YRjX4KbaaLXbqJLozbhuZVFqicN53ZwFjpwxWxZdq14yeUcmEqqTUFG6kQTXavvCskLfYfC37nBSpSz9uDsagU",
  "key20": "5g6wa24iFBuaAQszndsNGdzJE7afocMWQustSbzqfxJEWufpGekyEieTAmMQYA7yyrLxVvC7WjgoY9iKVAick3Vd",
  "key21": "4c2ve5h2HSh8jCN5fUBKc5cVZ6CmBe5dDsCBCEg8RPFmWE74EqUVmBwjvR1KryXE78U3jhiK7XozdVhG6gpxucKY",
  "key22": "4piGCPEHpZJTiZRd4MFdncMJiyLR3GwX38uQviUjUgTeCN8x8Ff91AFEtW7h3BT1GsgeS5eexoE6VUQmk4J68XWb",
  "key23": "5f2EkJGGxdckZZNJWS85iedr7mG5vtdXJndPEXziC38qsrMdqEg3VRank51noy1iQ7EJrzcmicnGfensXyjjpwKz",
  "key24": "2rpYy52UkwsC6DtqBExKpbVjnAqYWEX47aJe5wKi6ccYG5g9Zh33xsPekfDWpSB6u6VN8E7J6EXPwB28sjSBX2zn",
  "key25": "3bauZ9z98MMT1w1w2PdteFAZZcFstjUma9GdtU81J1KLo4oVChL1fQay8JgJvPyXe8Qtx6qU6Z7XsnoLcx3PHpC8",
  "key26": "2wbgEyFGeNoWqGJGxpWU6SpPmz82fLEinrYKryjTkLT9cDYuWrTD3MguaMBF4Qt6B78k4HJDMzPEX28LgHTNAsXa",
  "key27": "z6sY89Ac8YPJ8A4mhX4q7dyTiopkjVwyziwivSVjzgrjjYakArWkhjtgCv1xP2FYwv1QS6oLb9UcBQ7Lckv2gjY",
  "key28": "3j6boBqySSoxrCbG4xX82R1TPbziWmMMmGQYtMwmQBs2XCBGCPGNWYSydwEdcM6i5vA5g4W9yboTrJ86aYoqF8uq",
  "key29": "83TNZaAVLBQkeu3DciFmXkE6wZcx1VzJRdH19XydgT8ahEtcjbqbhTMVk1Mcd1utdQku37yv8ga8ggQqnwWCoAT",
  "key30": "5Mdp1Sq2CVtYutZKMhUodAVxKKmf2s3RfaKzVWHvZHuRWqqAyKCWJX2LEBWRX7EA18CLfGgmTb5RaxaxxuUjAVW3",
  "key31": "5mKt2u7Y7T5LZeooWFXMoao3h34Sfq71n1AF4sSi5q9FjDSZNampXkQTQYP7p4zELKysiXDuMRjZ2rnY5P5f4zKU",
  "key32": "5d3ZpcJoJg9qUsGJ2zipyWiTEWscvUjxbp5dTAYKFwG7Y3RG9GT8vRLz9SgYTKkbL6pJ1nD2YJT6sQwQGxLv1Zj7"
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
