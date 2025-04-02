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
    "62KndAETWrzo25fdBXjrC61mAcwCx9F6dMNu3rz8knvYNPvZUcWjZiunTAnDPxe9i8xWHJ9eDksT5T5UV8B99ncq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYM2NPyngu1ztQRFxWdt9woBHKdTbbvu6ZVtEdhCL3wPLrGDi1zzQg7psU2g81Qaaj9gFpdmQ7nn1kq1BVa7tae",
  "key1": "4wsSrTDTrs2J1pvauydWTjbxDzU2Z2pBQhtoGTpXucwoSvdm4zQ1aHhUyg5WZTAegQCdfTw9QQAoEHp79duqmZRn",
  "key2": "YZVafNFQPKSdBXVXxbmgn3V6GTPjWVAhhPoPsLDPF1crEVrEqgrRfEds4kQ3gF9voYff6MLaFpLpxz49MFcoeZW",
  "key3": "3tvBfYoPUxj9YKbwBN8oH6kj6vn6idsWw5LRDQc49kEeq8RbovXet3MFU4tQUJnwxWFnrwPCpHMvPTK9kfjrH8eR",
  "key4": "RFNiP7BpAASQJU59yDAMBZnbJQRUNu6oCvBYjGGTewexa4FuFhX1xpDELAonakejd1XoLmpzGmzhDzZhpYQQcRD",
  "key5": "5mkmYj7JiLTaN65XQKLzp25pAaJS2GuWrvm3aPX3Zii8HR6KWRBv9U7GznwynZjtjebucc9KhZjNSm9K4F4W8QcW",
  "key6": "3wWKatkAPuTjWmPeWdhay2tf63FwvMRaabaKFTWZvfyFnjMZhxzUMP4WSDXq3zRY7UViBHo81JKqMXSdTFtHWj4V",
  "key7": "5ANmxCp4KfTMsNZVEHtJ21P9AowfXQ3xgemz5PuMWnVJud94TPopz6zqS4kLaP99EU8RzDyfxLXdecK68oLLHbtS",
  "key8": "6JcqeKzT8qskwQXiNN33wBt8v7sbCRZ2N5Vwq65eToTDPJ63nPK6LXtxYRerBkQEdQpjGbvTb2Ygb4P6sMsrqZo",
  "key9": "34sXLwooKAy9w7FH3gufNJFqjouVtjbegT2hikobrkdCy8pcx8D7TkvqL4DmQA8q948oaPhJzzV1jZ1P37qn8wCC",
  "key10": "5ezUKGn9Tko1VyLY5B6JrNqHFrorKYNMhXF3pB3Son5KsMMG3hmPjZMDXUxZMJMp8Ftv6hTD5n35YdbRuvyf7et3",
  "key11": "3N5Mh4qrFA4AM53FFwpZsFJSR9atucNmonFtQMBCd3Vg7JJmLDZnyURGpWWr6JoWvJUyLLEsTgx49DvJpgecfdY7",
  "key12": "48Wn5Vzo2j8XJv3NEDd4EaEfPRoWgD7UpAHdKbfayCaS3UMUjvt9txvppRao3LQPvsMi99rpgYihENtW7p3xc2nQ",
  "key13": "R7yA8Ffmdw3LmiGZ76e4wk5hW8Ajyp3Nd64jToSwdutBVBKVMkqrvfeaKnqh8yt6dGdqLPiMFHPPZ83nC57VsgM",
  "key14": "2p5z8tD9g5dkkU3D4bWCkU57UA7xiu6JRz9YSnnfgbVcT2yTfWWjXDLEMfxTRn9L38Xu486oJwnDbgv5hcCn57fZ",
  "key15": "2URUtZEfAjjDzne5B3v7HpPwHxuZoTj4cNdaeQzmxALS3iDxhKV5qsipAQoZBwm1Q988KT1nZk4yg1S9tFjsg645",
  "key16": "3Xp8kwLVM1em2WXe7oZ8Wf6Tk5trUqZSkMvgwPqBEBH55sL6YZDKPrEgwDrxmYd72FcdtU47LoKsCmchPDFY2gHr",
  "key17": "5vzKTeagEYumfjUhbZLHWEUwucQSnEMo7H3Tg6TS6X3FAmYUgxcSwztxt9P6J5QTjxiZETbmBZr25BgkDwA9dUQR",
  "key18": "5w1bFsXHmzQkWNR5gtTaGLo5DwrBGQJ9xayX1V4DgC2zMnUvbiaVwfjnLsvAY2aAiHd4TF1VKnJ3ymmX6KL9bVN1",
  "key19": "4GN4Uo5EF1NfuZ6FpKg2JmCrBeUKgkmC5mofmxyAFpXtUicBpkz7dxS3eMHeUY33PmaCyFUMXASiZnM5sAKiacV8",
  "key20": "5hGx8mpHV97ixa9pAT5ZEvcPnrG1ZM8svJgS3XwU1jkYx6azSX6oSpTdy1YN9piHKZPpkxseucdnjQ6A9PhKHDUY",
  "key21": "32Txck31JwTJfAnKWUHwGAtUSuSmWunVT1L7RNQ6Vhsj67YeFwhX7E3QEcqfV5SXRVqmkMAKe4iEXq5EHrCSpAra",
  "key22": "65A7haWXESC7CHHHLuhP4KDCTXpHWbZxJNUWe9UY2C8voifz22bW4A9DBsDsgxYT8PfdmM3ywpps3QKTtGL21Bt8",
  "key23": "3WUpxvYgNfjRbhTSUoLXkPenrYcBXu2jNi5mr7eWDJVTjyKyGicRiUABfhpEizBMgKKaBm3QuvHtd5YVPt2rRUEE",
  "key24": "2MZP8MAzhMprUenLAda2AujCeELK9RrmaspzgCvUbeT5hA1BEW2yjQY5uhqmDJjSRt8Hjma3i4w92R9nLdGzM2DY",
  "key25": "52ZQp2sGgcNLf5VtBWzieTNTmyiFzH7du84Ee3paKyHQ192qn7UvLBN2xbaGcEXnFonqWeKHgFGrSPYa5mXfiuRH",
  "key26": "4w7Nvpi4zRSES2ZGHUCBxDXP5jrweSAuyrBnzVhjfJ9NTfA1hQkWUnuxY6npne9dhBjdWS6C5Kg7AvzowMX43AMo"
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
