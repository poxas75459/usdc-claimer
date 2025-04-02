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
    "2zsCXmwGoGMVuNDPMoKSELQVQshy68b5oeFvew3m88cgK74VsKKmvRB8LT3xex5X3carfGYbf3LdgvGRWdnYNJ7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vovQ9xuoeZ6aCmtJw2rRXitTqSu8oSx3dnwmDqW1ywfzAHthkV73yAdUtgeTqs1shPHvGw1Kd92apCpYiN4yFPA",
  "key1": "3oqYVgk9PBim9wjQ1JzPHNxeTaXPs35ssDj5VxPotU9yKUrTtBKjooN9W96NiqBj7Gmo8TNDwzE7QyV62usQ5qTc",
  "key2": "2c85PbFrGrMJavxgAr4TkTkPy7EFEDnP5exn334Y4YCavakeaBMSZLryxQhSeJhD5s4ELu189a9df7vrdTjYZQfz",
  "key3": "2fgUy2aqzraPmBiG4nhHVa9Zg8gcHxof74bAoFqe4JZNMhUkg4p2NuWTxC5vmXZn3BWCYvTVcMJCN5dD8gWpDqne",
  "key4": "2LSxkA5fLLrr7pWjNVaypudHDrVAb9BExnFwfTTZzzPLvm3xHE6Kk5jtPd77i84aV6HVBXBe4N6GrQVajXvZ74mq",
  "key5": "4oKpiwkh7bhny8i3NBPJcDwApbj3w8VJXorxwK3gSmSqxRSFBj1g8ZVeWiZvenCVb3NpxHZkVvArKMJdoXEmieGW",
  "key6": "dX6f3rRj2QeQfQEBv4xvaKKBAD6YAPn9oXcmazLn5LkQZGTjh3fKLE3GzMHNtQS66XXe3Abu29tSr3GS7WgfTxV",
  "key7": "5QZeSvVDaga93CPRZbZQZQmnJD5XQ4y4zmWHftWsDd1eXSRTAvrGHH83VGpH2BwS3mJ1vE4pzyDtvLyryWvqdmdz",
  "key8": "5QDTJqrNVh9SBrcL5bGZcG64N97x2no3vztnKqHEavVdiFxXKKuYPyttuQXNUCQbDqcwX2tYffEWQhraUv5G6ZJr",
  "key9": "3K5D4kwxjQZGokyhvXfQTYwTV1msq6gYBUzmYDfMryp8pFfV2D6DyrFXZyiTtQyDTYmpAneWJGPyb2wCsBBRUyNF",
  "key10": "5GCFeQ5fFdvthVfyy1dAFdW8xYUom56eFGNW768G59wsYuocQJMDpogRv3JRrsSX1w7pBHKK85HA3P4yTRoa45U3",
  "key11": "61NUMm51fkRnG1pYfJWwRJWC5XqU4YUp54ZLVi2TG3TQvdUcg9Wk7xoB6wyGPmuVEZki8Nv7qgqpVAcrLgvkT94n",
  "key12": "4Mqwu2M2SkyMiQtW16Wm71WDKEBuxFt8ypZbzMeA4YXMsVNvnAWyPgfrURoj1rSr7vnJCTPwHdR6SKa2uG9QLxxQ",
  "key13": "4uo6MrCcf7UWZqib7kYcr2pjNKUezW46rj4ygFsksmij1YETMvuxev53FSKzD2kiqTHDjhAS1Tok6cNGP5MWMcSR",
  "key14": "3rZG9hT3wHDbNmqpNYSvwTpumzkWPzxg727WyvHbavwacuoWzdxzNJVP6uxeAw6twyDJeC2hLvTKVuuzeEsA5K7D",
  "key15": "4zQFC55SZALkdY48rqMNp412GoGEibtqUA6BBBnRTAH2rbye6cWWEHoCq2KewNrNPL8tfKaNWBY1XaGVrKkLJQfv",
  "key16": "3hdreHo9PPFRnYJn5ZRToBurQCDHRhVbr4HHNSju9AuRNjQrSDWHkCXoHDi168wqRGd1kxjfjcHw3qZootZ6T21k",
  "key17": "359WigZaWJHL7dpYWRRAAiFogrrcU9x5BpzjXGrxV9NKsCUmvZ9ay98S5zEQfF12YuSQC2iBnex5tkLc3rfei7Xg",
  "key18": "3TbTZmq7omGvdxfMepVMmmwVerrkrBhQvTzw89nSzzmUg7uNcaKcuSNYwU4DPiKcH6azumbLJW9Hohtnbo6FPCWv",
  "key19": "57dtMxuVd8rysxFqjdom7smZufEmhiTeC5jGQXvwf5cXnXpzk4rwwvuy9QFABpE1uQY6A4HFnSKZ4njYJvvS2nGT",
  "key20": "v512K7ATqttCm7Xe4m1YKRYrPDd3hEouPRf1KgG8pLrbeMTUtAXViSXC3MTGSepMtxQQcmAuZ4C8CCbng3j8iiK",
  "key21": "28TwZjaCiQuuoB55CWNCAie8bwWmVfiFxUi4N3QfNXwVo5Jg1XiQxo7xH21MEk5npmCMQZmkHNsQ8Yt8RT931ZoT",
  "key22": "EYSCzVxV8xCoPEZn1y77kAS5R4yYnvuhSbNvKHDFxr87Et7wnr5Y3BbuCcseFUZ3JYFEGkz31op27cG4S4roT7Y",
  "key23": "2atDy9FJEQXwBAPVQSCSuaM8t843A4Wf31KgzjJHmedZbc3h65RYhToruwuLmLsmqVMLXJrBvfUgsB8pvZLsHLQU",
  "key24": "3t3neyX9gUi3DF3K3vyDDDZwuXQq6btHHwmNsyntL7ciP1BTgJnnd8CRRDTBm839hZBwoPTUcjQbLaXrTGj3J5do",
  "key25": "4pqjFCkJ4QLmA1qLuPKNznw5RQB5YJgbu4BgNEHFgfNjo48yxKrwwwqsfzW71WaeputNRDo5zQDH5sJ4igZ89ahm",
  "key26": "4rznYu5rEFQq2toJo2wHFZX99c2rivdN7hRFEevqwpFeoV3cCR3PUF5BdT8AYCyJdupBNzaQwx1938qJS9V6sw1T",
  "key27": "3wNpj658aF9N8K2osQhLhLLRs5D3rTk6Cx83AcXPNPKhqKMT8BW3YUDhYuvBoKE8gNCoRsfdhVx1dUGcX5MtH3xf",
  "key28": "4hszSZsWatnZ5cXewUDmK5QU8c8iCWSrqphwYNoeZw6wNnz9fX1pXAdwaGSe1NfKa4A2CNCJjRoLf1ij5GPbkNM1"
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
