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
    "3nRH7ZuV31oKW4XaMCctzGMWR79BGfnwBPHc3RsiTZj83ZemnpW4Dyopmybxmz2w5kBDMXRRDv9eeSeJCk8bVosQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVpDBewswoouq1e9B8uWLTJWvcm6qe33HMn9kPpaT72QocDtuwBmi6qW3DdsEAYSQ3oH4ZU24zXFGdDAhwHYMk5",
  "key1": "3HqGLY8bRjU2WRCgChZVGvQHVvyQBFyBbieUKvp3dfLiC29EQLEF8tPpNdRcGS2pCBBUMGBuWEVnizC3pgfHDhjT",
  "key2": "QuPxK7LmiNXUsHYRYa2c6ANTGggLuqEZpUW2fZ2JJE39NYbX9KyFJ2HwpgdRjPL4AyXjhjvAqfouJ9os4kevdKT",
  "key3": "2FyxRFYZ6FCLgVS71aG8JNYVPkqQynQ19EcsRVhiyfHAJdjracg348c4ahW8kta7Qx1TXdHy7imreSwKvokXYsXD",
  "key4": "4kCPijZyGyynVx4pXHiFTb6PBJEDWxXHVqaTYzEDBMHqC4VQKa39uiFBkuPsEpZgo1DjoiH5KhJCiBxC5kFdrnLQ",
  "key5": "3AExAwpfS5EdHi1YZ8Q1wVALd8cNWfcx7LGVjyKn8MY3AEGQXj1KH6WTNwAnPMLAKKM47CvzDRPJR4dgDj82i7Yn",
  "key6": "2LBPWDb3MZghiekimjSBXZ62tyXPaJwTt9zGEFoHosyKr7b1YFwWtwnxqQQuybq6ohA4qsdZpz67gbh5fqV2tNyj",
  "key7": "344JCXrC9JsrNr965gx9ahzQVvWi4zSvjQtPJ8TQKYVGLWQmfqSCCayzYEE9pLi6834PSEhj8ZavEgJfuM2bdsNC",
  "key8": "3gxYp1E354La7DCBjbamj3KEutoGtmRAs1f7XgzrDyjFb7Wj18rJT3hr9n7FVturXJYvHmjXzuJafno4dt1yn4wA",
  "key9": "2ULv1NHNj79fi1r5gQmAzYmruGRxwCL9Tmwwbyh9TwP6j2EUTdVFqsuAt4hdcSNSK4BS84d61cQWvDbwg2usxQWp",
  "key10": "49ZY3Euo9yHnboFt17nKwx7wejou7n362HFzfR8xjyLbRfXbNJVx9rjhh7ps5gTETEzSv74kV3nMgzy5c8gPGv21",
  "key11": "58fJqVyhQYevomenn46Wa4XPiRoVsWB6gZWXMcvSvTEVkgugnYHtuxxKPRo3kx62zUsTG5puPNbKt1EdGHN86t3h",
  "key12": "3BWv1rVsjoyxnhsfusWk7sfFtjJTNVwvz6fMJg3YHfWDpWfoMFmub59GFKVdzBTjqNY1FHs8mZShiQ9xqyFCnUgS",
  "key13": "3t67U6eZxs8gLhZY1FXhzmRsFCj1CMEk5HqFV3J3h8ydAuWSDG2rRT5qGAfq9tiPzcqReWLLWqcG7U4ZZj8Bj8qY",
  "key14": "4eABcaDaExCM1S396A6W5H6YGnNkN4mruGvWarXyKuJ8XGyPzi1SFVxdabVakkRqKS5UPgFYyXPW1uTp6Ct1URfz",
  "key15": "b6KFXkCSiGAaWtiZzpLEHrsdNWyi6ES8DEcnzNiJX9VNR6wkP71wYMy36AcFVhpqWhLYpAWbWncPzziLZAwyp5j",
  "key16": "4nNWvXfqPdXo6kf2sPGjMtPe42A5y4zdXSMgWRBZ7urPwuTs7sQ4xgjt4UnLU2ARU7J5GNUpGEvuEZuq2tBPJeqT",
  "key17": "3kCeyZUhX4ZG5xLgNtxyeAcknaKggLci1okUSks3S2hVsjwKwkVe9pJSM2kDPEVRXaiCfnskjw2i4yjESDjJUGd1",
  "key18": "5Qusn4knx2J1g6k2envDu4H3ENKh1DnssVTdr8upNaTwwU9kWNMQW1E1mDZ5qXtYwcb1SmzBoUXqbtmdxNTsCaTM",
  "key19": "5hNS6Mw88MBT5HE7VcqeZKqdzwtNca5wferY7npbJSswkv5fhBHN1cFrjdK6EPdvzAXxyYBm57Q6VMtheg2BssfZ",
  "key20": "kc22Jy7g4xSCdKywFrMKx1ZREEnyZqgyVarLxREuh7qrTmSfpzMXchhR6dk3ZDjJsBewFQg8fGNh3kkXwrUuQxX",
  "key21": "49zmsbwqTSoLo8UFtn2QhoMeTTkcJf19zvZogrkEMJBajFqoMVBT43LHwKYKjTDtS1N81jKnXPVhmpNBrMfaSSXx",
  "key22": "3D9B8YRMRDcptUq6zo4Jsab2MN7R4VNiSP1uMEp46RHJNvPwKCcnvX2oH4SGm27AoZkFPFyisbUNZ5KU6G9yv8jH",
  "key23": "2bde7yejVsSxjnybjYkoSSz7ETH4VVFP9cTvp18EEhwbm5jwx3aLLNZdU2d5o7QDgwj3wmde2gyGW7Ue8tLk9GpV",
  "key24": "2sSbh374Pjn6ewAp5YK49MHfz14iBTY5Jj16Kms8JkMSx6htGRQd33XajYWfcenu1WZBqBPViPmj9CzA96cc71JQ",
  "key25": "4rERLDLrZ2AgAEv2N1dp5ZkxZwPtorRFFU5YX4j92jSWSVyeAiwKa556WNVpzRiaH8jCUNJgzP1QAUidASLDY1FS",
  "key26": "3eb72ai6CbbBfhAZEfoqMQH7x2DmetUxCatjeSAgF6UVCkEpTnQv5NMjMw3gTY4TEDH1sKmv7ZMSo5YpkRCvt1Ti",
  "key27": "3c41ZTec96ia3g9cymnup9gPCHNirWnNyd2bEcxQcf6tAcfqP9aXjxr6r1MyikumJCJZyxJmAdn3Pr93RP9QjNFB"
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
