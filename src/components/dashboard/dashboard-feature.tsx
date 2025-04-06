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
    "4z4VZq3NYKMyTAcRqzKqzg9TsV2uNMXdMsTXFRZXHAsnWjY4Lppp6sxzUB2FRb5Exg7QKzcBA79Ko7eRrEha113i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58H1PzVyms8m8tQXWuevvqE9roxNjUh67gL8TETk93Hs24AuXprmAFMXPFaSJ3kWWWwPu1i9jAW5nnYo49SfCQWB",
  "key1": "3JJUiqSubzn68FxQH3DVNFzKrbmwTjSBXmazkxpSrNwLvrv7Pgmj8Qn8A1dCFye5Qkxqq6yZJtWXEe5cTmxhM1s3",
  "key2": "2NNfWwLuttaBZ7DwapEvHDVvP4aUen62ns5LoHa6BecPNR7qDhpFMPewGJykpaNXWcNEnuawRhFkPswMcWuNoqaN",
  "key3": "2U6AXTmiDy2X6orvyYScvnB4iMwYBadFhD4QoCLePT3j424SLcAhGJV9Q2fVKxs5bwwPB39DnjuXWjfMobhbKJSk",
  "key4": "2D3yvA3PXF35M9p1pT6Awneoc7iGHqCAogABW22tYG6wGv4k7tgekJ9n8WHJddDHRcWGZzamphtBiXrSKoi7shqy",
  "key5": "23cKJYvbHnZKvYG4WPSTif23kZ95Eo2TtVmWjShdLzTvTmpTesTdMLWjRMeYSBrSTrYbaNHhrSY95TxUvEQtrHoH",
  "key6": "uzWX33U4WdkhXxUjHpG9QnNwmUNtT2ZurWPUv8KXSFwnMpvxSx6R5ycHfoc9VpNZs1K87uTZ8ySKpL1VTVTBVpr",
  "key7": "3XPkpr1gjcxGcfSRkhGzoogNnQ2RFAZUwuo8kNYVixWkdPxGRqfL7TP5JuQeKfQcGeWGboY5J9ThcojRMrwD6QQr",
  "key8": "3Fctp7mF6H4cSYcjkCocSXAY321brSeE2ks83BWF63MgRDmhKoMHFFSFtAfNfCtxKGFJ4LaHoVATqwNgmSrhThXN",
  "key9": "3FQb7o6cc5HsnY91hg5VhZbuHqQiwdD9rLXwBKKKmKwujhXt3Zp8jFtpg7vSFzWNHiWZStCtS3ueWjdpRPFkqfYf",
  "key10": "4K5fgfygU3WYtcpDhJiPffVxUpjmLiUW8NgBbjrgF9RrrrNtonof2m9XAcpjjBRPWN3zJJuqPkwE17qNdLVbsiCC",
  "key11": "5ZTCcRNpHSazhoGzwQ2nc1CyNTGVe8mX59FP5f8FLtMSKqXKfM7fqX45sADva4xBiXQgXPnWwozVRfRkwqQkGNRB",
  "key12": "4azHYemYM1J9Cpi76BZj6iQueKzddzC3evLcQgY1KK9kQ1BuxEtkwKRp69PfZ7gm4YDU8GvshnnZZFaWRJLF3h3f",
  "key13": "2WsCnzPcWMy6wqZ6MLTSawaYseypXK2v2Vq8SoBFDoR2PakqXb3boL1pgNCd9SdTcw9C9fBwxAxL1oYQtaHpfsr4",
  "key14": "X4rMmhPA2X3f5b1MXCbuHS6PqDt3oWAuuEJ1ehvEktYVe6hN9hzN9NohtXNX6rJzVRbqMnQP6zWin8CTk46Uppc",
  "key15": "4SLJzioECfsXgHhiMCkPvmPB7troBfsDsqxv7jgDTGRHM95ddS9gQYMhaALCJLxtKgFJT5i63Cw5q9aWJoCFdAZr",
  "key16": "58fpQXHKfbPuZ3J35Q5BtG4AEbUh1xbXALwkBCS4HoatgmDoHNLVQRsTd7nr2P4Kav6mhu6WUMhBMhYNuhQRZUkq",
  "key17": "5BSBLYeSsiCRwhHmRaFSM1cQ8AU8BMhxSpwJSoQ1EKuaanbUeHMjPeqtdn6oWT3c78foZ2KKYymUC9eKyGbqRGHF",
  "key18": "4c8FaYccmnFmKh62SMiA7NzckT3VJhbfB3Vq3dxYJnMTAxijpconwrdRBHfGYXdKhbNe8DA2C4F8gAb1ws59sxY8",
  "key19": "3Ng58ZBeanRnA7d2pvGqCEXrugsJjbjd3J6HU8DQN53CuaNrJrNvNAiM8E93yAyvFGZePT4PMvFSsvjtjuFgBAJS",
  "key20": "63NW4eGsYNBtYnAh3zCgVzUTnYpC8Ni4St7ng1P2JEfmfqzgEHM3FCwtyjcCCAwHRWMWK6JwvGdHBFN2Qidbovc4",
  "key21": "2Le2tD7dfco2HAnaKJVSKxjzhyTQDTzyPq2HtcCayACtRRkZXhUxUb9nHU8jaucjug7kqcog8qiHn6QmnfE4yzaS",
  "key22": "sReZEQPAFsz4BvYznTX1P7q1vs4i9UmGrF5BEAYUY1AZaVjW8Jn9FCxYTdbdVjp8HxFxjBq9ukzudKyUR1bVhzk",
  "key23": "5tohP6M2vADBdynJBmiSm2nhLNf8Uj5y3Tbw1EeiWF4qh8V6JDdiMswY1Gn7noZZrS3zZWDp946Awp3LCPEBJetn",
  "key24": "jNaanJq9VeoLJDJqjRcuhF6fNpuHJi8KzquyCo3U1CnLLdnSC7C78DyuE4vogFsvso7WVBZW1PRHZUdRbEvmLf5",
  "key25": "2rpTVHdZEFE9v8vBZBc9uQRQW1ViWc5g5i56t6wMRmJKjKtjQAnsenZpdPAwcM4xkaczHfPNhwcUgoThHwAv6WhK",
  "key26": "65ugswHHzBJxgwtXuN1MnbY4uf3njoih84HaEsDXtw7n28FkBmD7qwKQXjiC8HHViVW5vKhfChsmyG9WVVV7Jqe",
  "key27": "5SqbeD9AW3yZ5avm9sAtLjYLw9UAAw6QERDwuHvHD3HzGAkSM1yWX7LuTGz5H2osBMhDfi5hijda8zwHnwGkv1dq"
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
