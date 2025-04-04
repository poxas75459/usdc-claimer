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
    "DvTdkSqrJZwMs5DinNy1GMe5qMzGkAHrTNMaPxjDttBgdyKtieQmTbLLiC9wXH54v9MBF4xKUSyZ2fmtpMasJx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpFsdH7rLfvcNhr2dvsGhCX3PBerNoMgdaK44MT3odJuBM9NQDAzm2rvEBvvDNCU69Xh1kXHLLi6gGZJ3b7D9cg",
  "key1": "4Sx42JqqhPFfD6SdfS4e4BmWRNtdMBKrpbghxR5AYZAXbEtwsbydtzHoEvydv1utBqPtcDqbd34fbKa6fFwk9Zxt",
  "key2": "2ynRNyXd8TAezjvfodaGWz9qwX3Fs4BCYpYcWAuR2d1Uv4TP2rzpNrQGtPp9GMbHjqEG1eEZv2UaZgugFFT7pwXE",
  "key3": "3sPUezQzvssqPhwaQAutndYaxHKzjKJMtySoF3Rtqp29hAfM5JL9DKmfJubehXCwiSVsBcWerFskmxdDhdTXoucX",
  "key4": "5TMJtR9gZu7aWm5xfFj4csnFgxdGPzfovFmRRAUphbyk41ELxDtZ86iru15ZbAEGEYjjB17AfoW1ytxmQAdEAuDt",
  "key5": "3CjfgSdePpE6wGCEuDMYCky4hsDVoAdEAsFpcwtvsydaNqFw9utxgjuBCuD97b3G9pxoGeHAszsHJXeE7znSuj7N",
  "key6": "3Z4Ukdiw7fGQMiG8rCjJCmJNo1AxfHRzZ7w2oNyAani95YrK5AmpnQA2ZcS9ZdVpZsVWXftjX26HSP969MSaLJMp",
  "key7": "33mCaD3yppEYVytwk5Zpot6xZc46tcSKtNBQGMX4wCgLqvz1qAYdNMPx5FM1giaKb6FRne51dHMrF3dhn5QBYCko",
  "key8": "42tBMnsB7dpsHTrDwy8EXRUhJHzpkKfdVMfx3CgAW7eJ8bFVBTv26bStWoLTZeiXCwZjxpNVjztd74jzwKk2bacr",
  "key9": "2mZKgHDVf1r84b9dHfb9sWV1Hs4jrTFCtVdxhTyYKB4S3oAu4HKgddfvnhxJGELcXW15SKtUZHqgBaNwJDgQhFF9",
  "key10": "3aJ65xyQGUmvPCZaxFLnoHZi91WHRUtvwKUCgpYmp6RbM7u9Qjwtikw3gsvpJcsHh6FLuReoNLhNYcu7v2nPBDWp",
  "key11": "2wDijiZB4bzSe3JpfTCvSsYUC6273sBCkJegJycGYL7CdVUZPmy3xujKLzsxcpYrbjQNbpf21RTN5bcumWH1toFu",
  "key12": "61aVUwVhbrPSBtpn9ZfuGdpazPsBjQPAjLZ4LFZKJmrS3NikwibV2h167QcbHjRZnfbXRGnXXu861ciKct1zVA1F",
  "key13": "5GoNcHSQB9SUW1pqaA5aAC7ZSVfewidNsm9YWuJ2NyaPdG19bRtTduhtNY25ZtR2Cos7YKEKNKqgQWKacdN9r4q6",
  "key14": "3JCyNA2HJNjzprryE2WXEzEoE4zFX7FEVyokDWy5XVHTYVuqCz5kzdE68B2hUTaQFAt73igeGhkqry1CDkDpARXw",
  "key15": "65k4QsJyXV72fFZ5cmyTUk8tJgrD24uWy3WPHJtUbjhQct8wPKxHT23hGyRSWUy14dtjVPQYTJsaY4QoQcPHwEq1",
  "key16": "eSBkt1oWeuEG73Ww9pbuHkiwYZqz38bTfzzLWhPQZSmp2aSE6B7FNhFTahw4CuPDhNLRj51tkB5wv7rpvm6dk45",
  "key17": "287H4LT59z8wTxSR46bSvoDFF2bvunhNkQMC6T6HXwZcPdKzikFCQDvYqoAe1kBuZbrD5BuiQzqFvHRYLFL6v1aF",
  "key18": "2evtdpjdy94ctnFcbzuEYEAuWMBRrqbKyPeYAUcXwipBxEhswj3QyviHYWZwXz813b1cYNAhdBFfjLnmPAi2PMA2",
  "key19": "4ryJmXm7CTpJEoip88sKPr5EeXb9ezLUqg8hMHHe1dToYURv7hqUa4ZcXgWkv5BfCrS5Rp38MGMPjFwQy9CSo79L",
  "key20": "cENhWF3CYmE2KzWra2bW7GMsCLz9R82heBvprvSDLBGWPKZGthhC4KewRb8sm1PK3TjbubTprznmjhwFTzj3uyA",
  "key21": "5njuConBoG9s97qgxnSSsk9bz5kNW4LCXc34PEPuLEuf7bvvHAQDa6QTrE8Y4RNnGpbxV2Y7r7EegGjcSzaeYKxm",
  "key22": "3yaNoDsCY9eRigvPJhbpeQzFvkyZo4Vsab2KUpdQawhibmQVr8QdTuH8kGJPzLu3tzsTS8vy2PCn3ALB58ZnWpnD",
  "key23": "4ZrSZZdMvqDjgJKRdqXDFjepGrC36NFjPEFEKs9UWPYGpKQbKUbf919QgHrvvZWkrmsnfFYf1QZpGk1q9riLrU8K",
  "key24": "59xLdpKCe6AeiFKgsrJKYWDsPVpXHReyhw7RzGotR4Y6umi5tYBzQ7ED2hz86JcArek7izVHsEZFcgXWZVFkGScC",
  "key25": "3mFy9UpJoN1wnzFxtgoAqnhh38EkaBmVF6d1SkaMpUQMojqRYg35Y6uQc9x66Qzuo1HXYTgD9wxyRkcXeY2HFLWn",
  "key26": "3b3j8CfaqAgoU8ZWcdFAF3X6Q98rzXcZaZ4sZN5vgR5nyUDybLgrSXtwMy1LUJsMhmM24EtHnfEAAKmPxkNP8G5Q",
  "key27": "4PSsGJqBK7QMsVXY3A8vuTp4hJTAR6jPoksp8GEfdNfBFimemqwHvu4df3oVdq5yNGyAXn7M33yvv4YJYBCMF4Hp",
  "key28": "MPgz2oCUZTpxSiadx8CdJkeCV3aLEYw1fGG1v17FKZ8MJDKnzVCR6p5GKWD6633Aedef4dyKNSTcp6UDgmP67Yv",
  "key29": "2MHdQr694oQQboQJayRKV7uJm32R4jDYh63u3mxSn6j8NQF5gk5yh2KjtCH8GH58H28b1wNQgrTxuvg6CC2BKhsj",
  "key30": "3QLsBWmdFB6FLqGCvNwgdSGqrDa6qhEe9VJgVatMVrUrj75B7ghBdhodNw17uNHwaaTuK4dNcHKEX87isMw5KLz8",
  "key31": "iqt8Y3hEtxXSfCxuvMg91NMBGqqWgkFe33hF23PuSBFVu1DNp5htED4mu73AudYgtt2Bsp9JdjU8uA9bVkLdF7T"
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
