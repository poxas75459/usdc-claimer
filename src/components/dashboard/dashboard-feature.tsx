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
    "42ysfTEHqg7KFN57xdj2nid7v9LTfauLFLh2Dwixe5kKds7tyvdwckcap7YeoF6hSmPT5HGJ2kMAuJGgJeR76HtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKPfwrkHEfbHsSAnXp5781QWmatodHbtheXPaDyCvC65KiEPrSuJTSwmVcvEJjmGAPoymoU7iNykfpkeTZxwTcr",
  "key1": "3MaemU3Xq8dCSW49ha9W8jGhAuGnKw5rpkkRyPFcXHp8u8g3TZd9f8YZEtdx7fCKZHiqr9jFBSGBpjKRLsMWz3ZK",
  "key2": "RuxyZ1k3qyXBGP4f5nAANpPUCLRkKx8RKsAjSi9pWHjv99F2c1k2MAkJ87nX2Xm459ojaDJfZcMp16F39qafsJA",
  "key3": "XR336GWKk5p4EMaJCskjGPfvEFWzbko83eiDdedMkf2Wr34GzzyJNxC98kcNtw2sRXPxkKSAgnCuG1Ruau1LtGc",
  "key4": "2E3DkoErGcix7XwLxV1VG6X9ErzYqyUNLUSSu24KyM8T5y1nBohtu7wp7VdGrvH7zuJKqKhS1tY2dmzC7ZzhY8Fc",
  "key5": "38GNcidcjBnHGAwdrNqr5K5C2SNPZJ7HCKT7Pg5VFgQLF1R5UfxBaZppPDQvLQCvMkt1EaZJxn3FoxLzKngjHyD9",
  "key6": "5Lj8pAM19tSYrv1jMjVfXwi9CRsGa7ogm9gzBGZpy5dxDUYuBxKJ3313HVahmsMtSBSU1tQxJ1pY23fguHW3nJJg",
  "key7": "4w3V1kqqn5crFDwum1wnWmAYnw2oj26dSoDdeej4sQm7LWfxzgkXdb7rMQyeRXWEfAiW2uPe6RcSSrWo41wJZpQq",
  "key8": "32pDKH6q5sVaoZDCwZddRGUqqyx84N6qHRA14WyqhvCNRRoKMKoow9GLMYiVQ4k3QsrwuACEn63iDxYfrj4fPRRf",
  "key9": "2GRtRQkDakENEfzSEvGqTX6hqGpBzhFvAcKZNeVQAfpdfckMaY8jVPNPLUJRZGTghXWyLkKZX6tZmDGsZT9mJ4FD",
  "key10": "xRiWiuBDNxQcyQBBY9uPE4WdY96toJp9pwbwAyrPoVL4dBmRVTwvxUeZeMUdYMmoAwZPcfqP7C1tLCe5t8KFuKS",
  "key11": "4eBgt9iBR26RaG2eMDFB2uLEjjMa3WpoVgQauHTfufDgYtsNngMyRffRa6Eu1VaHByaJopAWo61ZGiFadBTze49s",
  "key12": "3sxWgZY4WGaeCXrKLQyRxnLFazjrSrJMu1CwPqtDshR4gYw476AimbdypxBVwzyuh9fe4EEZmqnYWTDXNmzGQyUZ",
  "key13": "thCM45U5cbUGZ12xxBzVk2Duh3kF9Qo36Vx6uNR7L1DRVFcVb1LxwDZsahB6wCWxDTfz7BXQb3GmX6tn82fXL1Z",
  "key14": "4QWTxxV3jDvTNoSQtoEYGeUsm9fVpXfB26xi76zhKh5ns94LtjuRBX1hW3ur8nwQKz3uYyaqbFMfKBUm1V8zfZDD",
  "key15": "34wRYrLKpFxRX3UKNrXJZLyHc2VEVWGdX5HgbUQPQMcG6uwFfD4asLAUEqSEY28RJqFyf7gqGTovpYzy5zyGMvH5",
  "key16": "5ESmNwmocqhAhKpy8HE8cBejMbJp8XrBkNXLv1EhASk1byaiLjD2at3gKServH8BNS7bNnGTtmgrXrZ2rfLZDidS",
  "key17": "5y9Hpweiz8ekXrCWzSKG6YJXyBqYbUEE2UZW7k8FuZJYakfqbWzqxGEzUQQaojBy4CQGkqNt7vXtJyTubGYGGoi3",
  "key18": "3qcNnouJbW9ds2kMnpvCWKiyv2jQosLrGb1oWpBswryFDagUDrkN4zbEsrnyJc14etH1fp9A2aVsU44w4sJQeENY",
  "key19": "4GYQ3J4U1yYLWGcLoHjKcp4t3dQE9qdXzS7FPGW48cBDTgT7aC77nTsBDESyeLuM4RY72J7N5krXhUAgkVrjrT1k",
  "key20": "2J4cp5CRm8azJVWtj51Lo1UC6Hz72QhRkk8H7sxbL9PzdX9Y2pWkVUmXStziNXtEhShErR984CQjaTPrGPfXJ6em",
  "key21": "4VzFzJ39sxdiH4LzZxgTCEzfv6xtuTAKaUgNWhfqqD8k33ZMnTda3e7kKK5nWUgYp4qHsHTGvAJJApXyTSE6X2sp",
  "key22": "4KXoaaPoHDrijXaidgBbuYkUhDcs8z71snQzBL8k17nSsk9Wuj5nZsec6YDkLc3YwNok8Xg4SnTF2KeLvzz5RhyC",
  "key23": "4ugBvTDy4bmKnt6Hfpw7M3xKtnaPZKz31ePAorG55zX9aW1CPt1KaJ7v44UFP21KHYf9Yt5WhuxVjEg8Fg5j262u",
  "key24": "35re8qXVkAT6JdHZMtEtaAzCgGkQcccoC7R1SzxxqmyJdi2KHoph2Gu59B1RYNmTRcWXQdpdhHaHQ5w51x3JuYE3",
  "key25": "FptuvJ1LPfPu73pM4H2DDTQNzLSbAkEmw8mGFZfQsWSGBYiAkQxk4xXFwH9raTStkuiDBuRXtnTwtbYEMcAAGsP",
  "key26": "5KfiUc7rK27W4EtMXoRMGHWgp2xEAkU9Pas5aiX2dEx9T5NhgQFesz23HgyDtfcF3isvRJxB7GcFYrhcZb3z6Pvk",
  "key27": "5bGCYUGDkWg2YJdw2nbJ9LJqjdmrLk9KKbWpRbiRsLx35G8oSEYdrKLa8srNxQtkd4PxtUz7sCpJWyH2mtTfjtCi",
  "key28": "3qhS8XLMQh7Hr1NXLv5uTePm1kW6Z6cB5s9ead1oi9jK9goCsuePGG24gKybQcQ8hcivAxAT6Ri5cyyueynNbVYF",
  "key29": "4Ya1mpu39FHXLSCYLRqcJUTHoSifm4gHiMgUrLYkWvbRQutignwzoBd5KRpKeYUNvSrPZJmpBHQ2mhK5tVx7gHoU",
  "key30": "4Dqmji5VorYhWeMMm9qYq4W5qR9NMTn6dt37DC8rC8MHJc2yvvqC5fgRjesJahcbNe2ZgDoGyDgWoy8rLw7QfN7",
  "key31": "4Z9iseUQYJCqYb4zmcXRx7LeAukrCFpYZz4ZjpgmC7vNWM4P2tkAEZJPvNeda7MMymb6GLeVkonSRN3enobrZUC6"
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
