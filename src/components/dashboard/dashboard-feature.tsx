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
    "4g3Jmz2gFZw99AurE8kpKHeosSQocUf7okvzvjvWdVZn1gBqTqJcqGuc13QdA9rynuVMqTYEFo865wMnAP1i2Nwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DtSeQuT45aXcv15n1hdHGnfbAxrrAi4oYyDbf4pumg3Y8R4PcRWikP2HAwyapBouZoEGvqKfu7QbPkaTChma1P",
  "key1": "LZEggNgaLFUeDoFwPbtmeGAGcUUu55zyE1WvR2A6bLbcEiwSzt6m5mSLkuL3dd4xuuCXiWQy2RBDafDRRzRNLzg",
  "key2": "3p2sYGfuJzEwAPpHLe4FW9KPKuobFn22K5uTRzJAfZkVLeimd5KtHCE25jY8viMUF1SuFNKFMjHJitLdojteGr8G",
  "key3": "4HCmQnjvBduANCCamiTKjHMKojARp2giGNrAJsShBsr2kebDSgJDzSipJmm4xGzL8dZVTf9oXaZdWagfo5eVL5yF",
  "key4": "4QVpnHkj7xsTTYCxiuvgQ1w7aWihJGcEfea6wxFAG3Hwiaxb1DQmNjaQCHqXpXKgHdF3iomzXqYuj1mbDV7FJM6b",
  "key5": "62ddn1X1CQYkCNu7wVsoYMzy99Pz57Q3dD1y9snpsTDS1aGfmFjsmmX24TKWjFEA16Mp7kLiqVHXcjZZS9RubbNd",
  "key6": "z1kKKH6wHNJjXgrHrm7AP5sWJZbpb8tczPZMgncKcNXrPvwmz82JJe4CQ5Gt5h9c1tQYnfe8FSdPbQ4YEnTwUBu",
  "key7": "HKNeDDcfZCs2ZnBU9FGhvVF2Re8yFirmNzNwyQNhWoo7mti83G7WGodyT294d9vS4rzr1hk8ckLZycKq4izx9GS",
  "key8": "4131qmtgJGZznNxQwW2YGeU7TZPK6kYiZZq6SFgYJX81TT7gexJ7aJGupThypKLBCo7fytC2MQ36eg6rXfdJaAPb",
  "key9": "5qSf1MTWGpKoEzbFVhonPGFVMDGL6339cAuiYpgdZugPLhZq6gHqjEMDR7WHdke4m7m42KxEmKK1zJZ4gqx1sMtx",
  "key10": "Buoc3ybNBWQ1Bvktao7nFp83QWTWi1GZ8cDXzawKMNMsKL13Nn2vXs3aAxc7BpG8YuYPzQAGs4rYqn3w4Gqkrq4",
  "key11": "3f4gWLnVXcCSnH3NebXYc7DgeU1kWFdfLACybCP2hZuoDytWaic7nfZJ5uX8zmBGzt2wo1nUvknMGkPu2H8FXcRw",
  "key12": "tnmPJuG1eR7KBiJ2eFTvZHyG1BmmhuCQZK2x9y8zD5AV7YwwnF5dYAN5B5Wi5FZRbcFyfm4vVn9sQSo7VnmKy94",
  "key13": "4HuCXPSJ7qjMubUmMqg7DGckwX4tJjioiZe9SJtcr8ve1jJuJ1tPy6Utjw6JLfk8AyuGwvmnmKaifUqBcH3TGT8X",
  "key14": "3CfPnP5WvgWRUvR46Sy4Vh3qCEdxCyXmTcqxCDXXhexCWYRZfnFbQy66rNULhV4ghAS51whUhKtHtx65ub278vRM",
  "key15": "2fYMwYS8ZtmXHiPGC3dt2kLzdSnPMpkMnNtonUjisxUtd1HLhLq9tsdpFmyDYJYHxnTnuvV7kGLARzaC1Pvh78om",
  "key16": "2RN4zWBZVnRrTXcHJLNwuoJaGC72jhr8UgxAv3az3Uh69VxYaiYz1MRTcyqsh1MpvbPs5PU7D8k8riRmrUrGH6wc",
  "key17": "54hqS5EpK7P3TV7aCF95pfBZnxTQQRqASnLAGVyiSDBPkX1dLi3AY7HQPuhGRMXtw3EHaUSAs8onzFKaJ5AUT1aA",
  "key18": "2XLGFgYrBv1iyJSNrbKGpF2VMLCaoTXWryM7TCk1Md6996rFo9zbrUCE977KZJBXiTSJm84swRKfbMyn2thjBoNi",
  "key19": "4n2k2gzC6KfqgGNinn1gpouqUZ3mJKN9rBUmXKtHrWfCQNbdzKh8oMuCm8faEnzNcgR1pn2sCXdeViU2YXjRpRuJ",
  "key20": "2DqY9wyBUmPXrzp5xbwM5TZGe3PpDQQvMXAJ2Fd1kxvSZCwpMLSHFGnhgACNa4mLGLRgxr6hKTt9JtyHsYAtJt4a",
  "key21": "yxU9ui4zNBKpvg4bY9NenGSTiCUEFtgVaacin6BtYgPhKfG938BLXyghqxBU7S94eHGEsuxokSywy29sqp6SXiJ",
  "key22": "QArFM2DAhmuezKAjeuG43ZjdgaUjy21GtZ3yKsptRUE54aqL3kZr6Hrw8ozs8eFGXced9TFoP9VmnrkdswfCveq",
  "key23": "5Y4NC5B1TYpqpV8bSX7gRtVstwVnFJanZC6KT18ksnaJzxwEfkmssEK4sV3Q8jhrhkF3DFoqASPyqoRW5ZnJZS4J",
  "key24": "koV8MLUaebpic9whsWJBJgaoNR7X5RVJHyYxCbbqztYNrra3mg4KYkYZziE3Y3caXi2h3Q87m98X8AeTuSFyMmy",
  "key25": "4AjjhLAwZhHbR4SeEzUXYWC7VDzEBX7Eppd2Vq1ijHwJWkfWGBMr33q5QFsSRoDpmAvz3yrsPdL7GY36h7GvUBpD",
  "key26": "WgaXna3NC3Ho4FguTbDbN9qCTc8i5qjqUosNe4mvnwDNUrCNpnvhhgsxA5rBTEdc8fm1yJAHXDKCzqzo5iecrsW",
  "key27": "5cTW5MXcKHLVKrQaHp3gUAPaGcmAsRiKph5gkSNjoC3jsYMw71kmkmnTQciFKnqA8bv8o3YfpuDsGua7osEH6wBw",
  "key28": "526jph3W2w854wEJKaxhv9jQhXWsFHRzbhZgxRPZMVtiH4YLb1ScWqt8yzKyc2ARfa6iov8bPTBWd3uANdDUb1vG",
  "key29": "3vU8PWZTsrPPFdiKLBHeCGYrbAdGvs3MTAGcMnLYebZQ2LbWXLpZVgpsjYCJyyeuNULd4WQYoBd2BKMoq9zXmYeH",
  "key30": "3gtNa7dwBrXxRTRpGJftR1CoBnNFTmLpJN39fZGp6Y6wkVbS1fzTBhJTFhgu8FZKJqfXL3P6v8vCXZutMpTTmUQ6"
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
