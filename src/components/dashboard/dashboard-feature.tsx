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
    "3q2mXoBYM8aJeZW8nZDqN75WDenywT7T8fypajmrVpEbduhK3g1rZ9oiXnME4XX4Aj4VPu7n2kZgVvCqn78EnR9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kz9sBKyB4xxQQdAQadiydUgZRTYBG9y3Phu92PnpUisdcZNCPBaaPr8xBEHo2wERftYPVHtSD3KF1LHbEBZK1Ma",
  "key1": "5zp32PGDSykE3KmeyNGSrU1zqzD35UPBFkwJEvGuSPKUNt9dtkmHzS8w6Y9mL8sFRQ7DNigEbAFjbGD2WVJQUUxf",
  "key2": "4XhppJj6NugPwZBrAnPsmoYWumfJHTUKJ9ZcuSe83no9dyg16SHXVffN4EPxnrJZgegqxRRa8sYDmW82GPymQ3a5",
  "key3": "ZQY4hZFnAvAz6uPoFVVzvt8vFdSSdHngVZqsE7k6k1uiUR2iQ218uCA9LQcPEL9ZHWy4EH37VYseu6YzHmDv72s",
  "key4": "4c9rv8NmGjPZESU4aEzGSjsamrvg6YguBYNHrRk5NGUTNjnpDmxovPzWzGBJfJvP4VTq6nMFepdHmhfdviVaX7w",
  "key5": "M2mE949KLss9iphtxchas5Q2EHjk7MnesH4rtGMgjV3z4TuTe8LrW9stQfdif8KERZGUBdmYRBmfaZJAmg3TmKz",
  "key6": "4mkZ3xhQS3kaSnHXNeR8dic2ypq4DBTCZp9FSLJmUQon6rGkrbuHfAHY7hkQz514k6srz4xiaJTVHEigLXvm91Va",
  "key7": "54miTgMcj2Sy7nAWuAHm2Z3uJNALU48DEFCcVk5zXq2hGoTHijtKnVmUp9E8gzCK6CCjH3zUYmnatDUcTw7kdXHk",
  "key8": "LaVUww4xqWZu9cHZ7ppVzD2T9Go1hiVb1xTnrsjh1uFps13CPnDyETZvDe1q5Xjzy8uh7iR2MMD8oHxppM2FYMX",
  "key9": "4zbSCpbQV26zk9ddDRcNhFhkxNZq4onXfd5UxXBV2AHcwWqBWEEShJyZcUwcBG8ifSd1afb34dGYCb7MPD52p6VK",
  "key10": "3kvjQKHqmAR4bGumT1tey3iKEmfuJC4UcrVCdBQBnfCtL9RcZaEZ4FsNwQPE8kwTbMUbuB9VYVL2RNLVTRdaufTV",
  "key11": "rc91EiFiDiuEdY6f5jTgrfiHNtX5hqh4S4VQPMfkLsmfPTK7gFe19NTewAo7h8aaK1FWHz7TpEA5T22G23JWyBh",
  "key12": "3mSBCvgiiA4ALGSaeTkxSNjJZKjxP5QtDzD9AYKmwDCzKb4gpEeNbUrnfq49N4FbttMMfpRjKP5UsptXNcKNqyab",
  "key13": "5TE5TuxUKrdNENSpwHMuGyZvVg8cd1w8wp1GKei5zrCrg2YPyMvnELxVzmseVCK9AWrV73kBHAMmNDHR3BvrHFSD",
  "key14": "2eQBvhednBCMsSSjz7VEKxwWuTV1c5fz7zhrY4E8VJT2KKykjKBJ14ct3eLqhmb2Kc1nJvJwvgkhryXkbL43pof8",
  "key15": "3StT1ZP91KRzB6QVNgjFtbhYKHwH9cALtKfnJ5NPYz3Rf3V3uqJdwxyojubEVXxPN2iytTMgtxHyTm9Rhhr2yz1A",
  "key16": "4hy26CSG6yz2jyXGj3NaS1SU64prsbCE2QxK6y65SJKRLd7BMgEczAMgfecDhrZKouYz9NnMum14EonHcmmuxL2f",
  "key17": "276C1sgmFsAC7v1uDGKxbEmmEc2BQJR4pbSW6BzttuGtHqRBKeuXdLQ5YxqVwfFUQkQzhvSKzN6f6jxEQq8L5SgF",
  "key18": "471pXtWRDUPrCp3ynFkJKE2G79K9XaPanrP4V8K5N8LwtBrfmosr7J1okXuX3Wt6LeEhfQUBvxkru8fURTMhp9NP",
  "key19": "5rVTADerCZYm5rookuvXMjQ46S6cKAcUWgNuFkcQZypSYSy1Hn27yYkeyEUvSq4xpX5mBMfJyTKew57Uo8bVJNWm",
  "key20": "5xa9wrZbPfvttxh1XaJ7nPfjPNspEHigVmcKgp7E7gdEy118ieiNrDsdN6fm4TaYj9ZPhbY7XumjEcSzwt8D47dU",
  "key21": "55rfm3B77Nh7NAVYZdQxS9kHTFLysH5An8WhKxgK7vX6QXb2cTBsbpznUHkqhbi7n6Foyo7ZemsuaJun6YVHYJYu",
  "key22": "43RHxEyknrpW7TZsBzNKAx8xVTr7NXSfQJFuCJ5YtCGq6uWw4AanJhCGxhWcLH5Z84mNZmCBqZPhmMavGLxsnw6h",
  "key23": "pWhf5u8BGQEPqn4xGJ4UnFtTC51xt4BpU65eCTDAQQeDAbV4EEXR3XrzKB7VQyFbhoAPKqngrAN6d293guQssQ9",
  "key24": "3aeEEGgnKPN2dyceCsYcWWJR5UKActqczoGQaciNC2Kmz6T7zW929iNh45TiAhLwaBp7BZfViWHE1GimNeJq6jZP",
  "key25": "3JCFua64wZUpUSrutQn4GABsqJYMHus2nmdQvExUrT36WcYQRGF71SesMcVGaysUkvXHLfcFRKGrjQxpb38ratGQ"
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
