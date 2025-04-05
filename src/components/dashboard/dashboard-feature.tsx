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
    "2LZipCFRpHdFKRaXaDywJfNLuiKhJThZntBHCVzDfKBiR5Dzh5t6rUoHkSmNqCPLYLDe6tbyP9SC8CW63D9aKQME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwhDnd6MWUpLBVAtZdoDEzhcDG3sgMAwDFzJRjQvExrDkjRW1us53QfHRWZBCysBBnbmVhA3k5oAuWdKBoggsr8",
  "key1": "518n2rNHjV9VH5arfNu5vdzuxQ3UAgJi4YncQ249df8Gof5o9fXSv6QpjKBi2uEcfg2nVvKa9Q964v6pjdGJ7sXg",
  "key2": "45neYMgQF5DSMPKXer8yRuZKzVxQgQ45bhahekGkvmr6Aby5NbMj3iakFoGPE8VEPxAyjLEHKKRS9FNumrdCapTv",
  "key3": "2tbSQaa1QAY6k4fJSnB4hNTGUEbJaRRxzC1JwuAsgsYvgFmk64dB8dfjUeBXvUPh4cMWcM4NaTT78ixX3AFLeKNP",
  "key4": "MBJn21cREcdv5JgBAWmFyxinLb5m64MHajAZzSdbAD7jzgWSZSD9xNqBXNkNk7ZYkbKVaQ4re6RJ4DqfLXedc3Z",
  "key5": "AZDZqZ6k8LsTG9QdiHeAENSjMo4WQevCGzUzWTP4pGjsmmNgJYAwj7RoZihJqips6nj7hqmEGwGspFTuLrUD2Hj",
  "key6": "3Ror7dSnQ8oBeRQajFdeT1ciTEPyhzWxBQ9H6mnjg554WvmjX7d7xgapbvMSSpKWtoCRk9vk1GKrrKaRRNjgEvjt",
  "key7": "3nGmhHZf3WJvdiyAFUVg8uajQu9uYC5rAfDT3G8ZrCedS5vEeSf5NsSYLap6EykU2jUbLLtpt9iwwoNF2XDA7k5F",
  "key8": "5REReoRPfWSsWsNZ3dumg5rQTKHiUTuxRA19Jofm4JfWEcCmUYJy9ZyGbTq4xZWFeKBPVxEgWHNuDKZ2gQGLBc6Z",
  "key9": "4bpANco2eUqx88zrgYPXmVWb5n7rx5utc8XRCGQ47DqeMkZxusq6kSbvUpyuniWyWdMcUNHdTJQ6LcumYpqmrR9w",
  "key10": "4o7PpSqwbMCQb6Uc38AgD3ZbSKrzGz1XMQ1nxwUE1ozc9kMLtwRTzNXDDFa3BBh5TPemHD45epeifK5DA3mKDSUS",
  "key11": "2owB9H3EPCCpJugAbzgRw9t6ZWbRMPxU2agfLXja7Tgx3rUXoPB8soJCrpC2AescXpbUc8hWMm3v8idMNxx4WME2",
  "key12": "QjLcLyAXoJWahfeh47Trv5xoArB3LrdF6uysxRApLv8urhyYwQd4KAfoNbvkKeR62cBWgRzUFpxzrtKYw9uqdVb",
  "key13": "3CyQA4BJTf8VjZeqggniU3VrAtrWCkfkK83Yt7RDxXMJnfR3bQ5g1nuh3ZFxaBzLTiJ5cqd1oxEgCDy3QjcXxv5z",
  "key14": "2oAXr8PiwnvXRG37p8JQYHfr2CPEruBwmnj4q7VNGC2rZYy9JD7V8UUpS6bCsPLmEP5gntuboBFzHGv2ePsYwz9q",
  "key15": "3p1whshBD881X2pkvPXxu7kd7d9n8kpVj4JfKoVWgg1YM9Zfw2hg3xa4s3SteHa15MPbnouwCTZFaW1nSGRutVDc",
  "key16": "4bT4UWXYrf91jx3rhWhMsMWhqt8kkarNDXsAagz9ADTnfgsVSdtDxvPAmc19rc9AER8FS28zojP1NqMWBCqvVSoY",
  "key17": "4dNhwVHaTa2VxQ2Rvy1PfeUsXbJ8vwgMdtSEQkttDQwYycMfRAiKWdKtpcgG2c4fuEKncGTRWGH7L5ouQHWdXnrn",
  "key18": "2E3hpjkUeUpvG92nkBjUE3fcqZvYiKsWtLWK6mfTDwDFuWxCiwz36t2Gx2JxpJEmW5RbQYMmyYM1qPTqpHC7QTt9",
  "key19": "2NDuPWcm6doPSpGBY2UfbdPwLU6KypHnoRsxLMdETDDcdpkuBwNpsJb71kbLUoLDkRdvB3zo9mXhLcShtH1EdArJ",
  "key20": "21Zc1h4D8vf7TuGzydqen6fGg7dfkKnthpL65ts3nzQTW2ovsjZA35qXdN29GmZ3nYbdymtFwcmm8ZcVA2VYiMW5",
  "key21": "Lz29eoyhA2UEX3t96Kp2aTSZo8M8fmyuTxh6SPwHSpYeEmauj4t3hjsqbNJ2RkJ1ZhNSz4jtYY9nMge6o4Zfxkv",
  "key22": "TGaWWGEL9EnvN18PSDW1mZzindx1wLnnyUBwLk7Q7fkLkDNikNV9odyWkqxSXNQ9ypHYimcJ9Rw97Fsu1vjyhiL",
  "key23": "roMqbtgaYHJ7ELz85KCyYu6XdpLW8Hio6UpksBWoj8SPCzHKSatwSvxVtj8ZJYpmcXByXE5TdfUtoUxfVK8TVM4",
  "key24": "KScpTnfMQLrA8a1r7tjr1dKC6y5Fukpn3iHiUzBbnKtyiJg9uzp8yQkJS8Mg55dxXdv2J4Tje3Ac1vgUFi3Vg5d",
  "key25": "4sMN2GkRdJRfo2KnYNt3yaKVbFCC7R6APubWq5L1MeDHYnZdvkgQaHZBbr7Gs92yBqnLCoSazAqbW7EdTyxz6HDD",
  "key26": "7KSY5sWKmucX6DdPv1A1fmWb2XAVRgJQpVCY4emKfTQjBEquYr2JgcSnHTYn2ZqmBjB59ezzSqszcrvQixB2Kby",
  "key27": "3Xw3JaPhvWrtD4x2aJUZrLTFepv4z5kFCKj6hirSjj474f8JHCXnDfYhdRNGrEXVNbu8X1iwfYxckcMkTPa8c84X"
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
