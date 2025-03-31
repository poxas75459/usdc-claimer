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
    "2sgnqdAzYyEwHDTLZ8pj1Cq4FFJT7fFXjaQVjta9X6QsvAoYua35YkU4UbepDoUf2r2vYVLQty2XkAnU6wuA5p12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBqQb5HhqjJWDmMCkjXHPmng9B4A4FUyiJmrwS2pES5CttyfxdDGRS4JPm74pJgdRz19eWnK7zetASVkvdHEZzG",
  "key1": "43NWAbyPkVGrG57DZFejc26aubeH3UZffMydNXJZrBQvWjLbLLWeC93tJ5o5snfiBUxw3GpoyekDG9gd3TrDhj4w",
  "key2": "sfXGHM27FKysDboYfUQ4sx3kqrD1A8MZFomy9UtU7mtNMmWySRMQ6sYEsz2XXyQumwTf1q5HTFLfDQZpLrJmi5Y",
  "key3": "54WWiMKfi4PkZ9gU71NaMPASsNxnG4ctqjSUQXewdVgDLuwDYoAiTVGSEx4UR8ZRQ4simVtfNKa29XBdQD4ALZ12",
  "key4": "5bAYzxUZYLwb4JCJA2Tp6Gixi72HACpngpe1BAVjjJ1m9DVusv7G6wKHUANfs5p68pzFAPgt6EFrP6As9sW5GX6z",
  "key5": "3CSqxkN5Ewyvv71GMKLBJAL9R8QaoV72axA3AJpq6HWgVcm4DwhBzryvcXo48gA68vWKo27XCJ9H5FSyuqJjiNnn",
  "key6": "2sckoTu51D2UJWPVScJSovUDCt6n4pG9qREtgN9jEeWnK9J1odbh1ErPvq8aVT3iqTwqAm9Xk843zfszq7RTKvUK",
  "key7": "5hyVCkvW5L7UPX1mBLb8sSH1nfZxLbPXxzV2ZiyC6qcizj49fgnHfqZ7z9sWMFWJ7Z297WCXZZSP8UN5LXyCoi8v",
  "key8": "3Qs79azbVrLAxovmrCodr4KJPn3KVWL3EJ9FMN3CcYnsKqFtRqSKD7Ayw2EgUj7b1q8GE1RuYyknH4WLyPuFVK6q",
  "key9": "obLqCMxQeQize8Sz49eAZpgN5MjGohFWShfUHdhXxBNcN5X9fBf7u5T9z4TBzhrdBrR4Cb2GcSA2DJrAaMezZVh",
  "key10": "3Ny7wYr25BSXs42AwdczTP2umExKVqwtxXhSiSSiNwgCRJEgiwaDP1yFPgmTWXT3VRHQjAhbV74Am8qQZqH4GgCA",
  "key11": "2RurS35HpYqS6HVo6doz225JubGNVUjnxtSymPEmqFf6p3HJhz6zfptzMtqaKsp6r2HQzPWnciH3PkWzeH9iVPnm",
  "key12": "2ni7rvKryZBb2tnQr36CFNAbtc2pkEHy4Dh9QPJRcRPnumneXTSSVi4D5nvXiVUnNun2Yp8EcDsPA5AwCKRwHAs7",
  "key13": "5EbresUtSH8QbTfiZ9ndQWeUqagEbaZMpHgAsNYwy29Ck9SYuzPXWoHhMjR5BWEDKLR19T5PWA31qULitjktswTm",
  "key14": "nsctC5wrac6YKfPyrBzLYaGPAH6fESGiK3ciiDHU7zV8gCBRpwfBZcwznb9D3sEoKfoKNvTXfUicGx9EmZHKDZY",
  "key15": "36ff7fNDxAznC1PgqA7K552b2QFxnmsw5jTNZmGP7gesFH5NVjhiZc8ZyoxLGhEdKAbb7gxjboXpS9o5M3NpEHBg",
  "key16": "4brNw3FKkFe3Dgz1me9xbaZZtSH9RcQmaBYA8wLvAnR1Wq1P4mtnPqJstRdBzTASsXCv9zH1MBSRMsjijFDmMacw",
  "key17": "4JfiDx6LUpGxWteYNHn2w8A51BeNbb7MM8amxpveRyAmQQb41a6tfHeWWviSXaRNYao5GpHqEzxnRc8CcC2MkdEt",
  "key18": "2SpA2btUfLBmqefWqjs7N1xXMozSbZLooHfTtc4j44jD5sEwZm8sr2GV1ittc6nmGxnH62mZFfDfc5v8iYvowW3L",
  "key19": "3fFJYkD2tK6k2Fo3qg1XyW7uJMENub3K2LXzsHwjnnaDUx6Sw1JodxaXJGqvNq9Q7W7bQroAZyR1npyjsKf8jdHu",
  "key20": "3opxsv1gRbZ13FcNGsraTUAnc192ENfa8R3TL7DsbmxKPP9YDtdDFyinm11CBXAa6yTt9jAYpDvg6vZoiEM9cNtA",
  "key21": "GLg82mEbPdh7fKaEx6JyysmusmDjYDKyWbQhors3WjW6t8E33iYE3P8BGFimL6QFQdcMgFev14zGCvpwR1cW7gv",
  "key22": "4g9yA6hdWhHJcC2impsbvncMqp7vNoP2K9qhFbh49nteTNpQRZmWrRXGpfpQ2tx8RV9AbfRXyixctXHDMh7Ajoe8",
  "key23": "62o636WJE1Gz1Fx6xG3B2qyiA4xcBgoggvHoXX22izdvXwKTp7ap1wSA9FH6A4fpHwLDbmTeh9DEt5bQkpD55b6a",
  "key24": "p87rqByLUZsiNgdhBRTR6ESySe9zpSaQ8waQQU3jbpL3MzHNGsfETRygPbwb12fdC1MsY7oiCNMe7aFL3amPSjt",
  "key25": "3JaLkqrVB32RPQMUY6fhSzcuGBRoE3VxMZCNAgQNUG5cRDuGy6EYKJWMrDDBJaupNs7VvBEzYFpKkB2DTYCTrcqm",
  "key26": "2V963aRefptGQ7K1549DKbEoWrowDXWRTqhPHsf99zZ5ye6EEwiwnbMrYpuhq4m8hA7Wh4TXq53rQwQB4odcaUdi",
  "key27": "2pRYjq9Hwm9UcjDXGepN1x2xv78JwRVpxy1GRiyxk4LShp6nvogayMASfA79MTYaWPKrQh4nQN39zfu9vWDKRFYk",
  "key28": "5tA9XPBmbUcrXrkwKtPTby2aVZVe7XP488UeznRXa8Cy8T6KJU3T9CL7dZAwAA1zBLTo4niWnHkp1yt92xhCsHox",
  "key29": "49muvZLfPnWDLPXjS4hgy7ZV9zmQvPrDbiQZBP3PGAGchBpkDaqsRsPxQwS2etjWhNhdAygdg54ZsgVNRTvH44sF"
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
