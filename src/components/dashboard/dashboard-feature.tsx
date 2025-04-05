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
    "2NvcPxnVGpG6ikQ8jYWHPQ26ajhZygQRAdnLuaSd9ThAPnCpAGpW22BdBqCNRxjUwiq9R9YFemcEbMBcq1843Qf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YNaP9hvvqvCukWHJ8cuoJZVpaeouB1oVSerr3o9Rk34snbuYyBH8qeNSsZCzAVaoigP75NVxbm9h2qFokKCQdg",
  "key1": "nqyVXug1zEfo29qSNmSjaWPuKZwtX48sPs5Jvn2C9UXcLY1w58MUTafb11CwCezin6h11r2KC5ztT3coGSpi7bU",
  "key2": "44YzD1NwihXstC5CqpWt7TNikeAgEb9wiqUkQ9G6fDVGCbbgFHVgwYXMexyV6UwV3Wx1F3sHYs62mjipB4685ZpB",
  "key3": "My3goAUCZo3Pqtim24YrEtnAY7Bd7J1R1FkicKW8ptkdbDk6pdtTtKciYMUAXSBixmBEMd5dVhsi8a6N9JRVn3Y",
  "key4": "5uZuQNpNWLfCKhfN1f9iTXFPwXHfUQ76XNRfa7W9ZgqJ127Rt91XpcVxqgf9eZP7WHHRJjTbL6gVQLZCTzoDSDrC",
  "key5": "3tXVtUyNPnAUwZWLCsCwMGyVi2uX9z4mtxgpWTtMLLkeNrTqsYv9DApdFgEs9cFuqf2SwhkDG3QaENB8Dez7GznX",
  "key6": "vdrnSnPkhGJ16aGwisqPPRVwTZaVmjBR6kjCEQcaJSnujJWz6eojNQ7HnxKnxKQHM2JdTfjm3cSCHTdSqq53uZN",
  "key7": "5nFTSjDfpFzp6kNgmkYMpqCSwRuyhAFxrb8wrJZTkN989vHxWhKceU2d1QoEZTYjnpb3qimWvUJbGHfNXhkjEai1",
  "key8": "5KsVaMptJxFtKy1DbydqHiRjQpknBe4HDrCNzyzBguQYVDzvAD8Mx6Bwq3py33bWqj2L8TjheCy52YHJTE51VSet",
  "key9": "o7Gw4SG5diSVADXcgKAZLRzLpZbYg8yE2djbHzzEfCF1H7h1vqJtrMUmaMtKoPFycFJzBGwruvcTXWsdXgJ36FJ",
  "key10": "41yu1gPGTw3MNBFdbWq4x8vsZDbmdsrtqwzF2BKBvuE7SqxpKpW2xK828qdiaHFCynP9wvCQ6mfoiMYfuQ5CqHoR",
  "key11": "3KetVJ3F4jEmtYnZoZ7XRAjH5n8ptZTboHXdiJUFSDFgWFV7DUzMY1tkrZ5Kq49phhL2HJRiZdwK556r5kt1MGdi",
  "key12": "5truc4WgVhrbDnLC7V6XEXj4o2wgBHGJmK7F6tQAmN8LDxavqA34humDmX7nM3nybenYa3DigKKNUJ279NjuZmQV",
  "key13": "4M2AUGYUdLg545SWRpQw7zEXsuhN1fQ8CSkJQocjdqxQRzYQiFQt9HbV242C95GRWMnmqh73LTWaLhNjiD3L91BS",
  "key14": "4kek2JkpPc87eQZdiXEJ64ksWVeyktf6EDczUNmWD31yutLEgKnvkEha6y55SKwKKgSphT9DXcpjQSJejfCbnfQM",
  "key15": "5m3bAZc6wpXqDf4qRrwSSLaXWg11sw7qohTdHS676UxzdfS4nydUR4ScBxAJEH3mBYtgsQjTBF6pxCVX5M5nUu5i",
  "key16": "4JAxSaggbhCxe8QcVQD7uddu1vo8FH8G2SXsQh6BBynSzjs9szetpPULePVVC5JYo8b7fXYzQN5WLAQHkPbVADBR",
  "key17": "5Th9qGJQgd1M79zsQvN1XbyVFE5nC9d7fUeHVNxtycpPGRZrbeucf1UQ5EPQs5KVaPx8ck1VqPVQP36rkiyUFJ2G",
  "key18": "48dsmSLNxtwR1vh3QrQLHHJvE9qQRnvaZ4tV2bruHFSoeC6YWRSBDkmo6ByJUaUwvDQ9Nz7cgzLQ86VPQQSKKZrY",
  "key19": "23oCJ4xLQzzRpu4XnrqFKiKcYKmsqXesrTFLbJYpdfoANYYCAX7AE41mzZyDPdzpqDw4t8CMqHebsyodKSR4nPms",
  "key20": "3en5A5MqtaLLiJJAN24M3L3ucWWtR3JEK4gcVfbFFs3ZHdzuiiroMXPBtpgs1ZNiSq91VZfBTVZomay2xnhZ9Fvg",
  "key21": "4R3igMFqWxmw2Nv3ycC639EcQf6kxFwjzxPcVC3SXwZ8cDeRsnJ7BrDA8pbosYpVjFjSLY6F32WMsJa41kt9GTjS",
  "key22": "471iuYe5s1FUdmse11QPSNXd9m7cmDfNCzK16RSpvby5adHCi8AT9TYuRV6jkC94U8bHaf2mZsRrHLRgmgEaVvQ1",
  "key23": "4Sc81hQPxLwKb41tNzuafAdYhdhL159FvprejrywAT2FAPvo82w2aYsYX6PeYDmMz8TcJn5pjBVbFLodsbZ97n9i",
  "key24": "2Sji586roWHqc1wWMUwgwLMXRNx4W22VAvd4sEz4x72SuCP9HPUZVoFTVjwxR2vLVJk62dgYg3RvdeYmFQy2N7E4",
  "key25": "2akckobCGsPvVXZxHRJ1F4zbKhtQKszN5LYLLLDX1vJATtbURK3KjxeUFyGDAiB3GQFhmnxDb23wManpDWSv5GLN",
  "key26": "EoTMDbkZrKSneKmipNr6BuwDoD93xNrvfmWuT58WZSKCH1wBQcs8Fkmet9B3pBGYyz29dUKThNrBvQJAMbHrXoW",
  "key27": "wiqqo4Sc1QqcV1Y7jyxvzWJJHXzyLVVf8WKe278kTepRc2GeZBAH4pbvZR9mP47H7KfnTJL27ik2LSTMqT9B2t4",
  "key28": "3mh6LtzWxGDrK4x4dgQbjL3AEYoGpseUd6d2ztP4wy58UWBZsX2Je95kkxC9pU2jyawdjDChcy3Sb3wKACV3rRNE",
  "key29": "37wFmDJDbscgbrGT6jos7dGfQc3P18gMfDhxk9mvK3VoQdEu9Z6jWb1J16tAfvPSKiFG88zmVtBrCkA9URtuVMWQ",
  "key30": "4M2vFjQBxpSv6GxY9bYcaxnVu7kBBxHvNgQ9hRXrqJu8oDZXBVJei3s5og9ftgFNjcgXwm7FFBSBcpbRrLuYLnUj",
  "key31": "nWaEFK8mZrPkbq5FAhtn9HQCeh1W5JisR8Ezp8BAxUd6cT1wWAAd5maLtEdivGJCCPm79paydsCuRpJWd1mcFVU",
  "key32": "36vsa8T22Z2vFEP38iXfTufx8zpattjjfqLE6jQB5up7fEE4F35pm3ZhkgbKJiQzGfvc9zHjGvJGk732snwC9iaG",
  "key33": "2ND85yycyPXNYSrXeZCpAP9haPTDvMyebAbYk6jPVp1cfE1t31L5mtN5BcNJFvuVb7V2HMCTzNQBmK2a5HG6dXJ7"
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
