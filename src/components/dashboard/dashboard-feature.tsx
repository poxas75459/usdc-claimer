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
    "eWzSGnSuM1eniifE3VDyJrvHzgrbnLjnG1nYWGC2TNzUQcCb2F9gVFUxbodUpdWngAqJ7gaFvQVFBsN2CwUr55c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNa4t3tqrWMhPAC4BUo8m97Leko6PciFAcjcbgqTpKViHEupLZUNc2BZ3eyncWr7Kzbk2bVaAMJ1EXiX4SBGqkz",
  "key1": "2kRt3oQQJHi1gMqcV7hjPdUwST18gHQPDwu7cCrfzbZb4K7xhdscwFZCQnry71hfcQPd5BWiqDwAJp32ftPiMdZu",
  "key2": "47dbtdstw5v63ZTwuA6nX9En2F5H7U5sQVpjj7gK9Lt8VWP8mGDZehq4YB4T1n7LfNu6rCemrjkJXX82iuFZoQrU",
  "key3": "3N8kd5r4CcvGUkzJWV3QjinNDuJEdArZyywc34UfwKZLfvQqcAnY1P5Rz7EdbCcGt1tUKcA95hsLpiuWeouPNAyR",
  "key4": "2DPdQGsL5NPsmEnAzfgsVsv8KfNa7VwKya26PNT8DrGEftk8mWQExdGuzVdRdvyTJVtcYe4fzhcuG2c15U3kMgs4",
  "key5": "buRYp6qrmCpWMcJ3pbizyu5nWYi3SwvxFaULogJuTrd1qtWyqEAEvXiKbPHyggkow8zaenAso9T7aZMaAL6xnXr",
  "key6": "5ZXso3CYZC1zdApqEudpoVpNRZ823iv9GgqDJ7DZPctP5qcUVMh4b9cTzpAJCuzPU2MZETwgDn29Mdq9ji9QHQFU",
  "key7": "3hdUAhBZVgkWziDH1ZAZtEztFbSwUmu2AxnV6jXpJ9aWdtxSA75ppM1xwdwqTHt96nFZhMQ8QjLWC4UJFhGALozd",
  "key8": "3E2JSYsAH9akUtv9puUVFPYsfNooCoiQTiZvtv21AdGRQpSBW8okuM2d3CTDFneMKkdf8ddRCQA5ca5KYAzxsSAj",
  "key9": "3VtMJyAroniFA8peCrK6m6yQFtWG98pEgYDUje6A4TnxZQ131KkFctJD9eyYoHpSwRvCptWvPeZqP6vh5LZWJJc7",
  "key10": "5Zm3yjDDkQhBfNsZMuFouChL2Gj72ygjaqYHF1gfiZmoTunfCatVTQs8NqzW6HTo6NGKZ21MmYSc8Jj7cKeQmpjV",
  "key11": "5Yc5t4s8YZ4YfFqvPDHb4zXzET7dhpvWbENEg19y2VsuSwuhbkr7Dp4z7n1ZT5JEVhiLBrScD8QgKJ3AgCuW8zeC",
  "key12": "3XtQWfP5mPmvAoMzZ3cZpYTh468nPfxXeomf7eYexRuVpDoh6bWTwgMML9FCd5Tw8W2yG6mTB3ZVnjyxq9p6kExm",
  "key13": "2FPJSg3GSZTHzgmmoTkMRCksG379EJ5yFXw8GNSTCXGFfvdFgoihLRHeTzK7LeRuBwuHBwibYcBxwQtVMhRgpC1D",
  "key14": "3tSvkYAfpWyDu7YHsAbHoGNZTRExQ9RAaFNREWw3S2V8S9z7znxn1ebZzYGpmhucgkLXGrLjcsucUZg5fZyzPnuy",
  "key15": "2Zq4UDgNK5ZrTfK1xLZFEXHa1DqbmSw4iCycaaTQN1QMYYEemEnYUULUANaxXQ1e3mo7hSjcv6h7q15UuEiv93wx",
  "key16": "34bNT9KG4zhggyRAYL5PYyyaGpPUoKQD81KRGzTheGKtGw2p8TAb5UP8pRnbD6AfX5Matp7CQBf1kjrWxV5o9ByA",
  "key17": "2J5n7PnbFD4aprTnTBLABrzjfBALtoXQXcwMfn2VnQqy2HuGtUt3hrtzjNgbSVgZR42hzXsAYCWxqcoC2JdZA6JF",
  "key18": "476T9KqNgPUJYuigkTcvFFKCf1iw97FfK7XGonmksuYeXmL7SsotgVpbeVLPZLjecB351DnVttwdxJMCbFgpGewo",
  "key19": "2fezKcCBpioxLvRCCxwj5Sm3ePZxK5F3FGEcyYECtLakytSc31ADKiiGBYUgsA19rF5mVH9K1NBYQ3h4qvqBYXTr",
  "key20": "5DvLa8CYszaRS45NcA7pka3zAx2Vydnv8HsVJWRXvUfQYf4mPeTqCUkgCpHqfzJhaWHMzcLtQbzn5Nz7D8RaBgEP",
  "key21": "5FkBCTNHmxkUSJTedkW5XK3D5SXs2RypdR3D6coCQGRqPBSWJ76d2MoAVtfsKwFsjnN7Y19XBwugGEtWAJsAcAbM",
  "key22": "v9RWfuWpCLcbcJJTqEivrXQGsBtGsG4AXuDaoFVp8Go4R3YwTw56ZfLjsXkFg3aXyenEbEiN9VojkC8YM52NbgB",
  "key23": "2yr3ZRqjCTzd7cTMZ9RNMqvMbTTDqd5LvKkjxAhcSuxGaaZZNGtFBw4M9fGp13J82tg7WiwxLxvGskaaayZ3AGXK",
  "key24": "4fnXBDrpuWFVKDNB7YwzvkEZJkxZL5dX5RCDDAEswHdZF5v6y2MYGdsijJZKu14f2jT8a1iUJ2xaFrAZGLJ2rXiH"
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
