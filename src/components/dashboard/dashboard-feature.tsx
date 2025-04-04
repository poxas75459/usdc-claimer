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
    "23DBAwxWRLZhs7Cpw8fsr8R2rVTQvt9H7Wxda6QPUKDokvsrMKLwYqVB28mwRPNnYMYY4DusgudK7WYuwWEdATfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FkKqiRYx8sS7Ub5cjbGBjMjN8o4RqC6FjTZ8uMfXsPQtcPGHVkiDXgn2v5rk3zMRx6hLxCazPhLf4fiHj9qVpWh",
  "key1": "5e6ekX44gDbq78N8WZcEu7UpcmDoXxuL6zBr4EkraxEvYG5dEcSjVBE3vmszHzg9C1rYLZWBD7twC444eekDXqPw",
  "key2": "3SRjEnx7d5A4rP8kBCpCBpVd5TkygcSfZRJjx9Ruqozanhsf2G2mpgezJeSiurJpJgcp8ojR8dPdcfq6YNAfR7M2",
  "key3": "23ysyLyyHoAmfQiKJ82RYdUyyE4ATHC4syK1Nsmaao2YSM85sn98yibURcvy4Rmu5rMZ51rSWQJDwxCXsyBCPFD8",
  "key4": "4DVVDTFsT8Lhv3nDpP6QHV67gMmatvZT2A3QATnYNkxMbXabmFfVeCBeJtqEXbSBBtMHgEdCpvmepSnc1FTWkNsu",
  "key5": "JYVMujWMFA9ZqxtxWKs9JwxGAbuTyW9Eizt2bEXXDVUhm6SPz48sAGWCezXqf8Y4No9qcdq5gQJn1L2qYMTTnxZ",
  "key6": "5UxRz7GUNo1TFYVKwzVAVicgnV5iNqC9khipswCLBBqkGgCZ6eeS2nJUSTSnhQrUHSb3NbVEu9pXdQEWwwt4HZ93",
  "key7": "Vx2rUtPjYk26HW25QFezEXZLFGfE4uH41WgbZJ5PhNLmduNoFRA1ZxGMohKqMgeewkAcEfQomDi6nwaQSdmamqT",
  "key8": "5sivPkBZoJ8SS1AX4Pro4CPqwxp2ayJ5CfjJAEerb4htmRn7mGpacz8VhEtyFW9wFewsX2cwkNgB6N3VPazJb8kt",
  "key9": "4vYRpd4TjAQfSqFef2dgo2WexcdkNqGHEQhJZ34VmGDXJSF8XgmKhY4YLH9TSLr3BFirVdNiR43oyEWNZvmfhpCh",
  "key10": "59HKL5RBnWEm3YtUrnf6w1itjy9q8iKyhPua1nT1v7wzD4Mpha2uTUWmJdvTkZK5uWtMFHSzdAU1dNCLqRSYZ6rt",
  "key11": "5YpqJretDKb2gBBPthqEp5L2ZzhYYRqxxGW1dz8r9z3TmXo8ERoxApMZVMsWanfqEyj7sUB9XXTMYdQk2mGe3CGa",
  "key12": "4hQDrn1dYmB2i2styMJ928fLqdrZZMoHuXCjJBCgxwzFPsQwiwcnnoHts3hkCiKzKkwoM5ojbuQu4z9eSZHQBqw6",
  "key13": "4ctCHAjW5N5v6gQSdng9AKjQsZ92cqMFvXDeAdgh8wQNetgP3DHNrwXjsJAhZDzZ2bcQk2G7kNEAjrXxVkAAKngz",
  "key14": "4Trx89HSr5mqqyRAC8aARrc4k7uXjNH3ZusQpH3vVHXummF9gNaASyizEtZBACL61HkViinHHKykwTVuPS3ga1JN",
  "key15": "2bvGKXFhR5BZUBw8AwrzH4MFysetx2ZzLhtB1rHNz8JsJCkucP2Ndge4wTyXaQXDFNzEeFJ7ASJHQoDnEoVUm6RT",
  "key16": "29V7gx583hFGRP88h2k5v1eaW6QTLhDyEEgadnRn21zsonL8vnxAYoXXwAUUH7M1Tg5CvA6Q2EN5c8QGdYsSZFDK",
  "key17": "pKSyJG6DxMCe1xguTh7AvYmmJrCZJvUvMYRygoWTArKCEct3pSvhCQ6dgFTdyZ1s8qNVQRfkfCVMsH7BNqZHdLr",
  "key18": "67VMKpr2uH4VvA188rikYYD6upQarnxf6b21woBjRJHLxoizXdFJ4DGVpjDfQqU6ZiUYEj8w7VeSaSeJ1S4uaVWF",
  "key19": "2gDD4LGWrPu7kjZrWdq7arhkEyvhbm1j69PgJ2jLnFPpKuZUK1c854RKJ6thYg7UpBRewdxqWV4YwxQLh7Xb9ds6",
  "key20": "2Y1jzbkntiGnT2Abv7371uftkjE95MPBCg4wT6ea8gee9kk66GoQtezyJYYEDgDNyGUfHMPpaUZgrvSWiDWJLvNJ",
  "key21": "2cxeq76Fg6JrFiNiPm4KKGGwWx19GvQVipg6iqRmfBDUzYxgkspePdCKTFpQHEBztEXpTFbEB2RQTXfLvpAfKNXj",
  "key22": "3322qmDJNRJvgjVPZtafAFaYsszrNiuzYiWRyDTJSLJDuup6E3zxD9PHCQRqzDK8toMPsfU1XwWZ82dw5ArxPeHu",
  "key23": "5oqryHzxjgjYb92EDCyC227qnnDtienfx3YdpR2ePrMXJ3LDCkymCKt7ZBo3cviRML4vG7jmYfLgSEbJC19vC7YG",
  "key24": "wnNMtrqVchgbMs3zW3N5NazG3qSCXvanaAooYZ9rZp8wkaq4ywpweVu7ktVExu5XD7LET6XaKyCCbusqoh5t5Wi",
  "key25": "4KENcZ5j9mHxJkeuwEwDp9Dc1G4eM4185tE6oTsQNyy9EdChxHZrRZvxwae8PzwPYF1L5mHEA1RoVGiTgKSHDrii",
  "key26": "3SXfwqrhz6JJozaqd9X1FuFxUgfKKpf6BxwG1E96Xgx7n7bXFcCDn7n1YRSzvMHJfFx799N65yeWcWJgvPfLJudz",
  "key27": "3nsVKHYYMUGsauZLDQQ2nDCGwsnXt5oyj4WAeMgs8aFBsAZ7sTjHESr8w9i3Hiv9yU7XxrXr8SiFHwZMvM83Bp4f",
  "key28": "c577Q9YEoNfLszgTvWfttrMr8SBingCYJbCsmPga8CQ8ARqK4hePeLJYzHqaxxEpkbMPmaDtZ46YFJcKinc3wGx",
  "key29": "6oy53BJFThjiYJYvY7592d3V1keFtMQBUJfNzJzHYG2tfMNNYEDDJyFM5YapZGhfDqk4FGgyNGG2RosKZBv5awN",
  "key30": "4AcMjAhDkMEhrrMDvhdKYbLMJsyuAajnGXFoSuZYsC6XFNXwr55yf9DWQ6EMR4d6jeWpY9eev8XwoJoWGMZ6P8kV",
  "key31": "4w48sncCzaVJygGhHby5QcgJAzyxaivUfBRJAjsmJNmKbwJV5fzSpHk83UKrcxdL5yWjFDk5MFAif9L3acBxz1K",
  "key32": "2uSin4CETj8CbbmS7wbPS7p7RCRvNDPWigHRnTtPuKurmexUmEMWE3KzyibF4owYa8B4wcaz5z8jvKhXWvrX4xar"
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
