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
    "5HPDk8xsp2B2iqoQcwzRV2FP5mhC8JRhvxErEzmHZG5LvrWU8YKwR8PsM8wmhUhoZTwyGQh4utmfDfjoBXRYNfya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsAYsiXA16bYJpxHsD7Pe6iHpN6gEwrHTbbor1bMU1hyd3k1CZPjyVt7qdiURbB28nDK7Rb7o5uMv41Bn8wQkvy",
  "key1": "4kGJRwQ781kfKTfieFQRbAfyb95EwSce8u6Jwv4GVmEXbiZGVsHLsRuX8jczVADuvKvg7hGEeRzS8anTBj87gjR9",
  "key2": "3xRWTb65d6cPP9wf7cj7Rj2sGW67dKDmqBrSYzm89SxAbZcjrMWmWdrYBJvJMNoZnf4oWpDZJgTKavQw6s4GsbYq",
  "key3": "2VRPbNS4sYM3xvE9EyFh6fC7euVhaG4QzhZcm33zEothRfcwV67rHnaHWWdcKXiv28kDAGbVbFgkvUratpEbguEJ",
  "key4": "2wrEaFrSzcjhqbmnRtbkEF9S8PD3hFktYX5phPA8PMptoN85QNVjrX7mEquMA5tFVhEK5Tq84kR6MH5yArh6esNs",
  "key5": "5KvC19AmXL47AFSA7KBzhm8EseDmgSi2g8GcduCTVzDXyx3ydXUdPtyy6gZbxf8JAu1GnpnE2GNesi2mS1gs82ko",
  "key6": "vtFJJYKydTWe4QcnvtTLEctGuhZAxQuHBpfgGYf71cSCcMYyn4Xt2T98vxF12CsjqKoGH1erwnQjT3gmGsKCZLe",
  "key7": "3Bq6D2nWVBCf7TxjVAiSZNC2BYBiBMSfbMEzm82aF49G1KMmQGGrtFhtGCjJxeqg8V9dDYpyFxNcE6HUA5mbKCj3",
  "key8": "5hY1ReBRVYHsFEv9iPUYiZyomQra67dDAhiPRSwZmsNfcgx8eJUTLWwFH5B9ce1uxPwFGzAjkhzkLXu2ttv4qBzS",
  "key9": "2p8MMCBeQK3BWdi18QEgHmjGMR7JvSgWVL6ELSfczN6EmKcZ8Gr4HfzJgdeA2VZq241fnPKUkbVMibgfW5tVnxtE",
  "key10": "4uYBPzMy2D8RgkAba7QnhTCvL1TRQh1U16rfTTC6vw1gwMHEAGHnKaWkk5BxCjJkfFoYGMkNrzaorHQH3nPPYpPM",
  "key11": "43J4GSR3rjqPeKNpRDjwPWGX24LfjHmMJGwj4sjHtx1QsApqBw4to2rAhKFpbLj772j5JcAvS5aML7ogVEgqcoEX",
  "key12": "2DcxWhYHVQkYx7YtQgpa3nskTnBFjbAYSNc7nH71fhqBptACG1sSmxzed9Tuz7QNvC2shbF6eJErnTcdjM3vugci",
  "key13": "5nf8E994Pf5VwggGKpjtLUM5AKRKfTac5a22PUQ9z2G7fzY6aT82AQhxfdBS9h5KR1RfYD6taGXCkUEHS6DBo8eX",
  "key14": "4WNserxieqP8sTCaAtY6VrVeeTNbkoJ6MjxZY2hAa65R6GK9yStDK85Nop8jjkmNm1KgDXTNCzkoAqD8wcitSBuh",
  "key15": "3WAU5dyaUL1E4QerjJnRuXP3qDxELNhLaCTunLnpefosbBQ4m79vd17w9DiqUFCTyc3QYxFCaXhx1b9wAgPgJDyq",
  "key16": "XWCvEuhE6VrNG7uqrQgrXQA8WCoVsxJyxdsJJMSXrJVb1xrqPwkdKEW1HvfNBNXJm3Tn9FmRQ27nbNwJ7T4CwVt",
  "key17": "4G6GvM35nCyP3hEDWYuF7tK8PnJa5V5ERG4RpRZfkgbqYXoDKGYdGbNKf6zawWzTqnKJ3U7RPZJAP4EM8eZn7Aya",
  "key18": "4dnLaGKiE2n7aLBvSdps9xDSd88nJbjTCuaDCX9phgSjvvygjx5SuWGdHdycPeLPvtXnvf45NVSar4j7npqaLojs",
  "key19": "3c5Wz5a8LnPMWtMYm4tUXDUhWvfS4q4AeiULkCWwbrVHUCZ84f8qMGWsyUKAXDMEMF4W9SfF7d6GMtDrGm7Db6x5",
  "key20": "4Z95uAQ8q7gLTmdzX6DME6gdRDFvWk9ZFNT2NZtbYVQqJWbz3qa3Y9f9d9gEZHF2uas1eLp3NJaGeTMe74swnRNE",
  "key21": "G19xFSGSi8PeWXghLEKXnCunhuSZBigHmpD18cE4oSnWmvP1Ju5ywv9qifGMXTsECXSSyh2Vy4zhFMmLA62uN3u",
  "key22": "2rvg3fAAgjdar6jzMnnJhbeYnAQXNb7DWiy7cDY67cPyNddqfmLrL7WRBCnTSw78oJd2RUZiakZCSKZ2fdfmWJGU",
  "key23": "2YKc8s38vKg7qAjKK2s2q5529eyrzt9JixUTRrWy1VKo6rDcnHCc9Xh8eK6eqT8Gprg9X7neBCkJdwUTARAwSEmM",
  "key24": "2hxwVVnx4LegQLGJDgKVw1MMkRbk7bzxLVrkkd2Yat6jcjydFJUepJAjLo47hR9ZptuCo1nKkuPB5HSrjFAFJAA5",
  "key25": "Domwt2iHdxFhEbRemcL8g9rz8mcHfNtnmXdKiXhcjpcRhrLTJHrkKNg67q15UjVtKyai1pMQptjQVia5tU7hebY",
  "key26": "5SbFuHxe7RaTRczDk1TCtFPmPQSMwxVXLNwm4YzBt6UVLfxbkC7XpATZgr82eZKFPTcgxUUKLp3YET36MVoD4sV4",
  "key27": "2yYQbx5vSLj2cVCSUYvgUDmjog24DjtZ6EuUQUb42jR3JH6fmvnVr65Kpo9BfksN8TFLcwcaBMoHJyQVe1zRvBhp",
  "key28": "4eZytqBGDP4r9nCkPKeewXXQjrzum9xENDAvwRZYA5PGH3WKgPChxZygq9BJQ4VaYMMKGVJ8LfUX94T69iavMZRQ"
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
