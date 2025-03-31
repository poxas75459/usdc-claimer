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
    "2eQvtGpFgmpsPNvHdL9TH8RKYRHs71S6YpoqgDPDgudhj11zQ6GFBWFCMY8AwSe5j2NMj5LLUitbYPECt69nkX6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzvkAaCCLtCFUBNSMSSrQRVnggR2ypGRFx7oLGQKUbKqVU4nZpkvEVY5tkieKrGHezcqTuu7fUq4PusS8vwwaA3",
  "key1": "2xMjNbqhMLG5fbfksAPYNegTRX1j2q4z5qr2x1ZxWU46s4yxWhPheFDku9HoxWpF4uFiHzEDefzUtchnFWS12fXF",
  "key2": "5XxSD5dorgc5DGGFHwkN4Rx8eCGQCjB76jwM3iUD2v3uS4hDusa5RRfzq9mmaAo2rhU9D2h7ChhqBub86AKBwfDZ",
  "key3": "8GXV2o6XTVeY5cqXWoGfT2VuEk43GLxKxTeryjsF5f1fitGS92aTvDEZmG3CSGPYYwrByVAxA8fwyc5W4yy6Ysy",
  "key4": "5sWnqw4DNJ7wjcDeaL2VszWTRvz8ZrbGBi3TNfTzKeHQKwz6Mo7JBih6YHgxFYb827N9nHcsTcCLyHoqUMnyQ84k",
  "key5": "29QtjrQeYYetQA87X9AsCsasiyMqdy8KPqGQNBqvk7F8cZ55F9NEoR8MLLYDhEFZ4yVjeSnazkRsBgs249LgbdGt",
  "key6": "4ec2VNNiJKuioyDvNiJUpFcQaWq9TWiLpg2SyDQkxFaiwzoSdq1mkAW1ZsJmCPtokXKbcxhciELRkTECurQ8Amwr",
  "key7": "4EEKWAFEdtfvRMKQt8jfaAAdtsr6pDKesskrRZHfHZtw4AZz2bDNffYgnM3cPf3it76UZgK1aN81X3Z9ee5qzobY",
  "key8": "5t6Ay3bHR8tTFxk4y6aYn1VXTvq6zu3wjLk11QeKXgstStYphFJ85pxpxGGmfNvxqXgWFTF1yBeVRWkfzXTaANzc",
  "key9": "62t1wnPADnjwk1e1Pi4uok9fdG6poKk3TwJrZNUn24P3hjrSi4oeRsedpCW2ouUqtDJQhXAPBNvaZ2RzLaWbDNmW",
  "key10": "5gMycrA2vqbQNG7W2nxQFBFtrgijk9BDcKtsd9RLhPe8WntpxuJPRWMMgYPVWbzpULiYZ5QXs2wHzpiPQo6gj5yN",
  "key11": "5ddvBRwfdTP5i5eAoxbR2h4FFtMfSwzFAipBMeef27sYnqETar3LNinAWfpt6TTzetFwNEfJ9S6Bcmto32wm69Ve",
  "key12": "4UvBsyZKZumsAy5CmaTkb3MhoXR4tMoeSH8iBrwsAxqcwYKZRZtaUg6S9iLNkrH6KJVogLEsZ6uD7g9Mye9YLUcu",
  "key13": "2zw7HXtZCLRsXp8SbMviHfE6RBLTincuvF6NU6KXKt9jyVyS8SpVPGDGoHHNHrfpZcB4hfRhXZ1w8SEr4e1qrnc4",
  "key14": "46X32SkfMVZMjeQNWYNjJeRHQ97yG8rEFKNPjvWbakimMLBLDYfVDzV6AsWuZ4bPTMjuzBQ9JYQD8NEmk3vX1vpY",
  "key15": "NDhrMhXK5T6ZWuRnj4KLW8y8PRkbnWBDo4sSrGypkWpCJiNT9qcjd7TUWaioxdnQgWgRfvojT2k6os6EhhKk63J",
  "key16": "4a2gz9gxxYcewfX9Qz2cunmvjtYjcQyDefeZCCPkUN2nfenNW89m9n4kxFd58c4LgaecVsC9YraQeTSf1F3kSekZ",
  "key17": "2CW2r54sY1k8yGNnQGrgz6uyfXc6dSAUD4PA5hkceDCLKY1FWY2Re8fnx3JDs2Lk7tTHQFYSr7v3PCpguo1tdcjy",
  "key18": "5NoQxLnbqBpB5R2zFS9fTX3uABWK81GmeSdrkCmGCYgKrvsugPeQzJqzV39RqFn352eAkGqHRsxV4u9rDe6QUGXg",
  "key19": "4SZKSLwwA59Qa3GxzyyYc4GsviraFXuJR12X8zMzwebHwXU8ZNEyvsUbjtqJsZJCyjS4oSwP53UjLsJkmRA9C5bP",
  "key20": "5o1mWmCZifKhza1QGbbDGvCN8XCip1UZ5cNvsUgkHHHLvYQ6CG1QaNACzk7sLUuoXP2iUWKjhxjdaVYgrdUPhLFG",
  "key21": "4WjxSF7Aerx4njZqPxkA5TCnWJp7HCJXv6mURdbs43qqiAXoXWd1a2mkgZPEVwH5ryEUUnviXFfYhmmM6wL1XFRg",
  "key22": "2KekbC1axEgWJL5f5ZCJ6LqkZL9gtWnpe5EU2K6X2HgKqUJYLSNa8gWZcyCAiCBd5DJyQVtM2nK2sGNej1MsqbaC",
  "key23": "Ua197A1GW3G3shkRkjoUhb9TxatM1XcHrABSGq21Q7maSAsLGn2uSnYgNJbcEw683weRwJLTVJn3SagswSs6z5v",
  "key24": "121FzhTN7czVnPV7GJ1RL6xctUrQhh8AMByZWsZaAUgeowm8saFsXHgLnoewcxYP97cuYYamLgGVTeoVPN62ZWLn",
  "key25": "5FBQu3W7LnbW2KTfgaHQHM2VuFYhkZipq7WA3hZnDuHGmJjVoY3noQWK1qDn4ES47GiQwQdzF4YRCyyWRdZjd9Gp",
  "key26": "5j44vbrnXEy5QMbPpu3nN9mWsJpmAM7ES5ehUd7Y8ZTP6Fky8qyDq7zAfB2exPYHV3XesWzuJbZYAogCSguomiA7",
  "key27": "3c26kA4tQrVkyy8LUzY7jV8mjiU5yJnB2sH7rQz6mheeQcJPeoNtqxVxXZfRxg8owbWbBtdTwnENfiPBUG2HWpN2",
  "key28": "2SadWQgzfq2oMpqE5NKnyUCWqMKpUaWEaKKbCUuxCVA5DcNzxT5z9its7irsY8nfticLqmJM58m7MbHopm85mYpp",
  "key29": "2BNRTBv1zZgm5KnR6DtMyZAtQTw4XyFjXUS5aHpaY9ejvvp1bqcZMx2SDEqSXdVkBiSFEkNQvDu88C5Qss2n511D",
  "key30": "tzBNK7BZ8bKq1h8fAmM4X2q8EmWEEDHB8PmzzcnwRjwUQPHAqsAqYu1gDw652bmKF4DgDXJ7CuLuPaRf1kh8diE",
  "key31": "3neLZKSDCdfy3CFcPqvpDtKSPKa3WP42vkJzhfgQ8qa1QFYDSd6QszuAmKWs9bNeFDBEbgPWrmW1xDo8CoeoKbrQ",
  "key32": "4JzegqbAPYQqhVysymw3rBzW6i8f7hi238kbRcSDSKX1PysqPMnC9XVKXAco3Rf2zFi3aGvNW9zajTvvinYWkH6A"
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
