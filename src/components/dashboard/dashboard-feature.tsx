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
    "2PATAtDkGFBPNLkTWV1iELBpSokqPUrfL8LA72FjeKdc3vvhsMvqCW8dib8BiRLAnbZmMmoruPRdQmj5DCYcT6ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63o1kBjMbG5qns1hoNWMxZ5BpGCgPVxDg37go8URFJ6F2n2BGkU5n4ao9PXXFNG5AXmiqkkw4LTKxv8b7a8aUWWh",
  "key1": "2Z7VcnjsHwruuNsZc2ohpksTpWtU8woSHA6CiMkhw2bEhmgwSCLX2yBUGeGEhozixGCz4ixYgDPwrQLLn1ASLyMb",
  "key2": "uTie5wERWwoEqN1VNg6BrLe8LnfGQ62a9nHeYZUYaWN3VYMHPGAd1iwEmYJ6FicGwBNBvaRSJFNLKrbt821A44j",
  "key3": "3Fix3MteP4Ue6FLWci46rhMbWQ91Ui7Vpiri9iC3ZrdnNNXWoZmHRc7xAtnHnWiRNEifq5oJftLKc7Mtfg8MbEtr",
  "key4": "jA1Tt4DxVwLswC4NGehCHczT9aCacfhC5Cik2kVEkY8JN8Ui1QoHXR8CT2FFQgna2eSWTBkNh37ww7iPogTFx1J",
  "key5": "2PPv7AEWu6wN7cqQ29YBnEJwY9dKF7pdHC3xxXB9o2TThAU3x4TwDD1jtMWTUtZrCuwWqttM8xHMU26zKJCbQvmF",
  "key6": "26SFbMPtQZtovttcYtoYJbSnDrPYmuMSr5jFH7zrGBGmX6kMttbiFcGm1xYtYpeRNvQ7boMYPURrGg9gYhpsAkig",
  "key7": "3BGFbmiPTwPM4NpYHRNRsn1aMuL5Qo1GMR5vfq3tmCL56rAb9FD27xedfMN5GwMHq6YGZFktX4sFqTacvv7mvS3Y",
  "key8": "5q4HxbEm6BqxxuvuBnij6FNz4zZstJYY3aDT43HXMXTcjUq5mMG5ecUJQJMRrrYTPik6j94odwqcTYBPQGZdARYd",
  "key9": "3FS3hp4ntHgbNgGzAxtbhggLA7UbggGGQm4Rch2e47jPhHkPAbMEn6ew5qq6HLz9HfbEmEf67YfDeaCL4dDjiBdt",
  "key10": "EjzzQst9dbBBAxxJmXdJML2e4Fu9kHZmJ5TvTkQ1d5kAvhJ1gyAaYh3TgbDDxoWg4wAjedwv4ZoAHPeTCGPdkQ8",
  "key11": "5faBCUaCfMKT5LZwD8S4GML5hsmw9fKu951hjQw8qbm5zp5opXohyxTvpUL9gNR8Gb8yeFgSUyzCDjoXfsCjeD4k",
  "key12": "eHcBxu5gE7WmRpZ7UeuDKpAqVi78RThf4Rib6ZR6gshe7vBwyjEnU4MrS2Cn5sKQaY6ScAbMvuAu2esPpL7rhBP",
  "key13": "RAcF7jUsy7ggRTk5YjcKZXTVREHbS7Cu9671a6vCyd5cbqpXhWDeLXydTuec4uEMhjpN8k5QR7BKL1asBJRXSmb",
  "key14": "5QDPrUDRV539T4Fr7SpDBJ1w27NUrkL85HHVxZGgw2z8XNxbJSDAjaz7hiZYPZCv2qvk1dFtWmC2wiMkVSwdHiv3",
  "key15": "3LbEhawwZkXHrZ5HKQ4up9GvSXV2Kjfbhr3MBCouaoV1VFHaM4FYodNkqTCV9M5LJ1cTc4hB6z3nPbdMRjerYa8b",
  "key16": "5mjZ8y6PbEQgQG1wA7dCPnh3Qg2w2meuKDDvWr7kFoWtpK86JwfLQ8pB6h4MjNJdywaY23JMFPMhuWhJvA57DuPh",
  "key17": "2vXpssfXrTHMTYpDtpEhege2JttySnixoddDYi3r28wk3DQccNEmQidhLgeQo3YBQdVnLr1nkwVudNpdnT2byTvT",
  "key18": "P1bapmcq4houaSi8wqRbu8egpzk6d9pRbpSk2GsWfMjFstJAe2dkscYTV3VrzTqhymjd6V1xRzTjPFL5NginJwx",
  "key19": "MFp3W1hnNdGXv6VxBFTnu2h9XWAoTHSKUUZVFJk8pk5xMNH4DGp2omsxtHJ2hLXdnLgYd1bspHMZ7DBdGoESxEZ",
  "key20": "5cAfwHqvRQrvYjfvj7gso8sySw295ukZP9ipJzi89ywZDu8qruten6GRfD1SjuA335Kzfm273Pzu15vp2oyhQGVi",
  "key21": "2XJzK6KUwN2fEQoiJj8F1NZwfdW9bWiN2ztchmRtVk9JHpW8onyyz1fmk3f1PtZjQ6378nMaEjnYxkVBuNML2k1K",
  "key22": "4FdKm7hZgxaLHprJ1yFowSEusCuLz2nk9SRbwbo7q4DbFSTpS1fwr2f9GyHjFMzTV57WkFAXgVzMTw8ywRDJ3sNu",
  "key23": "5Q6Fh3GoKtntjcqpWyuVd5HEARPFx93fvmhmGHUfje9waScoxsbG7SMDrpthW6sTMgxv3pAEnx1RQmDLMMt14Vjw",
  "key24": "23X6XAFNzbbQvd7jv7G1fM7P3GpiGRvmJ9Z9tkP1z8Q3bxy5rtYo6kxksxLboBjF3bBB9egpegDaQ76LUk3tzv5L",
  "key25": "4VoGNSKZ143KYnJgT8YF5w3h82pqDUZFsAr3JCjGYKGseiSNdJeoCP1a5fbVsbssJnU838sjeavtbSb9RVNoStVe",
  "key26": "2HNKPycBCvd73J93ULhai45AMzBxRszVzXvsKkjb2R3dafTye1xVbdXDCFvcVACTvunxr88PiiCPNYfanCiJbogH",
  "key27": "5BK7p3gZA5RrZNpEp8i9WqstqswNZZZ6g9314spjbo8bQ5sAgVkfhwphgDotUGh9LmvxoN7icLtQrjNAEQgEFDbE",
  "key28": "zZ4oevs9myAE6MTrZFDMybj7orB4NvF3x39t28E23yg4EqNKP3hCLgZETvUWctQFESG2AjWU2RCd5nmcgogsZHg",
  "key29": "3dUFBe1HHpZHww3PHi8yet9CS5uDUi7dTTbo2Q3pceT2jQ29PTBAUijqgBzkGzjtg2RLjsC6nbDBamRswtSUsFgo",
  "key30": "2WPHkdUSJn33Fbqsqroou99koiCkjEWW9A32YTtJ2onj4TUyqns2jf8fTAkGYN9XAPREj7CgzTaquh46n18S2qfp",
  "key31": "45QNhLGia1UY3MHvd85dWCxxpqkvJT6yEmViYWDdboxbQ461yYcz1nbCDEgpGCXLgaW17sh86Tqf2RP5kAVX7qU"
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
