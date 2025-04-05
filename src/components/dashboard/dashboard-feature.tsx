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
    "czRr488F2iPdfiCdV9fXswf577t37YZnbtXkgbqSomKTDt6xoJvocXg76X4qhJKxEmjvXxC8VYTtJeJKDXmrrkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8PFKTwK8HMJZdUWtHkLeS6brxbQ4LJgAJHS7jLoYWR7DTrVNCxHZgsgkZJykGugWxREUUvFTARYDpDJp9BJRjF",
  "key1": "4xLumsBab2rLemSwBgPcs1MnRhkRNJgB7vWgb5T1QmWBJMMCcsvd4munkQ4JmZEAKPDe8PcFUVrqgz1YE3TD95c6",
  "key2": "2719DQehGsXMS5EwRhzB2UvuqphJa74BnHaiNUgqsBJtpXi2JMhMmXhPZ2oHpxVV9YiTxEZLgWQwitRua4ABMvkn",
  "key3": "5yetPVHYFbnKiGLNDU73fZn1k3h93aBZa9kVozB7MV2tTu2cC792qTaeStroieUPF5uVmX2tq8pikqqEr7GBV2cf",
  "key4": "5D82Jabkj5TGB4mJuwE5YPVLKHyWEA5LAtN2h8BbiMuSecEvGgNLtMSbhFLLGUA1rjRhuz1X6DoSfCyKatvnGH6J",
  "key5": "5mGXhxeq7UF51krBBG7KPrn4GHz2wZkhpBgJkfRZmtn7pNRDnh3gjwV7hmWryW5Y3BPRjFsZu1uschpmBnmQk6Mt",
  "key6": "61q18qUa4X4CNgxQTiTecRePYP2B5umduCYpKv2mSW1xucQroRDkZ11QY49KxhYtMEM9TCWGrmNS7k3pjNvj9DuP",
  "key7": "4Wyi6mP942NProR8zBHN3hA1tG2SpF6F44ZLePQ6HYR7BhReW6DR2mvrziw8y8pQ8opFusnyyYvBmL6fxP8Jye3p",
  "key8": "3LpmPAAa61cYXhuYW82n5zCEFq72dKbxBxhGuyZxs8Neicea5Bukuor9QaXYiQJKgopr722Xk3Vv1w76e2YzLaZd",
  "key9": "4ihA33EeoF8g9YcyM24W2iGwiAyMZ6hpadoQPLcaZ9nDfHJH5aexc7N5XnurL4JPoSogACNpa7uANHhSB3J1Q9rv",
  "key10": "wjn2WFUNFEdaUcrECBSp3zHiQc8RQk7nYAtEje5bgxACzCYBR5oc37jFpTkCkU4xy6xJfzncCYCYXzow57KTfd1",
  "key11": "5dKZDsqMECPtXdzdYmdNdaypTp526srVNjphM58TR5avA2MmARJUrJJNdNvdJDHhhkiKpoTWajEbYrwpxkDMsE9m",
  "key12": "W2kkUANLUVznVg1XJ4NANvr7S8EZAUYxtyRARw3xJJcGYCvd9ZRkzXRqZ7BipyvxDZu3xZDga1TYNv1DQeoczAm",
  "key13": "2cRopVdTZW5Shx1i6PDreSk81FDHfQG1THD2dEkiKPxbaa3GjavCZQMaciPW9Yr8SZkBQAzAcC4ZQHwjJLDNFoFJ",
  "key14": "25hoetdjUb7bg6Mhcn3gBf9S5mPz1HD4447w7T6PEQr9M72ma1HxtXgH9rpN2Wcmp9B1JusGWfVqsbBJr4Td51Uo",
  "key15": "4Gwt2vxRvKYBhgajJa7Vr3MvMnkieUr2VQdTQewTCdgLBB8nGTWMEPB8w3HoB5HXjpuqoKzbLS2arjYxxfKgx3iA",
  "key16": "rPtuvVifvZscnrRbsvFZDD8N6FrgTuhJPurtNpVEJHr5kWykq3LKgmLBRn9J6VTYbT6T4iP9V4hjVXYhR7mS1bK",
  "key17": "3GTxiAW5icxeFYJcwigtaTKgwJFrJEoR1qRCXoscNnSm5dXzB1A3KwzirEPAMR87aNfmZzjdgL69h251S8WCvSNm",
  "key18": "bgamjefjUofsgaM4J5iomDXWn6YsnefHoC2HuvUQMDySnemM4p4ghj1AkfxEYX1QREBX9BqH81TSufPr78jHoYq",
  "key19": "2bCS9Z4Jc9heRLSRLCq8DaTpGp2XwT5zfmm7YWatKF9CZ2hHtBpmeLbSHwxqRuh5tVoEp52eciPiZ1ngV2ty99GS",
  "key20": "29UT7TR9Cz2ZZZGNS58mnE4pSoLUeRamKjULwvjfDhnrNoimu6z5SSZxt4E54wzm4ZhiFXNq8Eqs9nUoUR6EUSHr",
  "key21": "3o8kJoGWKTDx2GwtckqfSvmzZGRqpGaA9JpHwfGoVCXyNCNDyUZP37dgicbCEG6yqbPgXLmKDCZQa4WNMzSRcyVa",
  "key22": "NCr2s8VNxhkKVvaeKiYENEfiVbnLcDSoPX4r3DvcHiVKgNK5woiNDeztKc47KU6sDHs1i8jb7hoDcmkp1hfbJUq",
  "key23": "kAWVDRz9yHnuua3WZZxF897U2XYM6k5vmMndbm3h2y3AUBquKuA3RbKGAKEaC92SmGY93YTtdg1Fso6cE9v7LWP",
  "key24": "4KTqRcfpdfkZFJSTGWwe4rhWwTuBZkkghdjEeaCKstHdHChtZcbAbHGhYusbNDQgZ5F4CSP6ttzxujH7Vi8NcECo",
  "key25": "WC8tTzvogGU6hWtvtEphvgSqPSvMPcCiqbSn39cn4wUU3NjfJ2x7pyL1dfsDJphga7FQ4AzCBJcs778eyB9ezS5",
  "key26": "4sPszwTRRUGqtv6g672xpiPuQVfoN9eehT24k3B7oYvvGHTSpd7SiRDBZAmN5Rb1nqrhRzVY8bZvbxqPWUyCXfCZ",
  "key27": "4zN6gX5grREf9J6u7ima7mvbkDTGzKQqte33MwH4dpXXUDWaHu8ozh9cqK797tLxuY3sY9WjawThmWub7DxouKJQ",
  "key28": "5hTMm9QXvy1aC6vXrbgrpJDgp8DgUrCvRnB8mgAetcb1ZfApCGuusvYC17ttrNC9A9GhvanFj1W7L1fN9bZns7WA",
  "key29": "54YyGn3Ws1PzKu7G5p6BSSTR8bpvhz58oQZqK1sbvsUUH7J6kuYL1eBCwcGUJb5j9Qf3Nn4P9fm1uwWgnPQtnpYR",
  "key30": "2kuMNr9rz49r85aTRbPC2a9sMgvvVFhUhVnqGt8HZ84HRCH4ce1cCgi2AcQRFHschGk3Vjv1M39f4YLcwvUTCayy",
  "key31": "2ZdD9sSFxC2kcfts7gYLWbBos7CtkmMu6HWd7f7kDfaQBQMaKJsGdaJjTFhAGYE9SnBRfzCdXaLNxYrTntpCWDPy",
  "key32": "4aRhTURK91o2AsqnNUr2ofMzruMP5vWTihfqvF7xyDAvw5CKrDemwvUbbWpZs1EX1uKrTgjsDvAudoNYGJrAfaVE",
  "key33": "3c1k7KW7TTewVHjZTFtNXrievc51xJQNkgn4m4gZygcxkHMLb93ZUq1ufg14WsJb4hKuhNbvkKgN99QsLY1Dh3Cr",
  "key34": "5MMepWjLY8XmxQfpoG5qhCCtVGCgrTeeTtjPkrTM2gg2o6KJq83f4zE7NHPyPnpu5aE6SEhiXuda39hhRU9SrJQ3"
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
