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
    "3ELPJzMk3BF9PpKzBqzAccn2P1HUHWGokmPfzSr1p57d3MybRLrNgE7T4w1aGQxFkt1AxGwAA9hM8Wf57kDKwFj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Uc4Er22A82Djrcu24ftyT3BbSY7hequg9Xi3rvHP249NzdGXBRwzjXTyM9TvHvT61dWJqZ5yB3YcSVJqCg6mPD",
  "key1": "4m6QnyLPdUT2rQhzVvTdZux1dExrXHtGwvrvaeXTfFNKHBqJnKrcHSTdMte3MhWeRj6T256WAzAu3dNJoGWz9QxZ",
  "key2": "q57qoL1td95SK5ZQpDCKUMzjbLkKGPaX72ZHPfQ377UdhAQBcyB7KDJGsTeE4wNa4jpZZy2Jwfqtr36BYmBFh2E",
  "key3": "3ReBgPkvN9mvMYpTmQeMTm4bumvWt54NvPc81cYQXGir96XsUyDt7PGP24ea3vfsbxNVFZefb9qkaPcAZ3cfNmab",
  "key4": "4uTJ9eAUWpoevEFXffkyj4McF8nvqauQ55pRnbcGgVU2RTCe6coAcycf7S4btduVddFPojqJGwNx6m4avVmMg9HH",
  "key5": "45NACpEQCqHMm92Up9GT1MjgdoZeGXCVZQFAQJn21qiYypwhU3ANFbn415YHo3R2MHzuDusU7YM1efnyDi3zN3UD",
  "key6": "8MpHKQjVM4V96KJNf7aHtqzAqYL7fyCeagE7QNqNn6PDKPDSzNe5iwcjbhiYAx7j3evUX7hRYPq1SBF2mz5dKkC",
  "key7": "5eWkaxDbavkCv7ayZJ7oooLQ1Gfk5Kyr57JeYCLujtLUzgX2opGBhUwTB5rowntG7jF1ReqVaNnW5YrA7ctRiwg1",
  "key8": "4a59vm7SujL8R8j7AgNR8zyPotcgA74TFPPFLr6dJtV776qpw223c2UWd8P2UceRFxYErEL181xVcmbnQZ9JfyF5",
  "key9": "2BMtSucupWpLe8SEG7vVSnyKvej4jxTJiDFWMmwjCxCxBgvfrLDtnJAy6BBEYhk6jU7DSyWsJPEU2yYBQjR1YbqL",
  "key10": "59k1L4aQtYjtyo2edn4MT8Ck6ZCv43Zvk3JYMGU2EkXBNhyE3xDUaERWJRxJiy7SuvuMDAszfzmm1Swdxugk6m9d",
  "key11": "4wdt6TS2NTrELrnSzMM1CSktbrPdHT1V56cAJR1MRyKd1q315wrfTW5x3V7esLm9S7L6ExHxGmNoGCunA8S6efKk",
  "key12": "35XbESxagA67GdKn54akZhR5yEZcntH6SYsqsi1YFMLciNpceEQhYDeVtKSDnpr9f7THvoF1suAhi726kHYLJ1GU",
  "key13": "36GkZmFxK9jXyyN6SvFV1fG3qMhzdpPaaGsvfWSQYXot62a3EaZGZpVdgz3tjV7FFzkPFmiXwvN9J9Pvn9prdpdS",
  "key14": "4X6kmbzYF84UM8Wsf4tifB4yvN8T9GXvBUGEbUCPyH6gXB2CfSCiUS5JxgkfjAPuY3vjcN7GRAAd72hfcMYjm5aY",
  "key15": "4LfwvwNqysaQNAXC12MmN12GituXYoSAmyJZ21xyRSsYC7HDLAFp1iRcxAqMemwfDJWhsy36QLnkQ9CLqdpEtbEv",
  "key16": "3KWoheUJ38u7swXaD5V2u1Cc9a54RhcRbTNe5B4v9vkUuGhrB7vHad6JZJHfaAQhhUwapPWUSzR4JRwKVx86byBp",
  "key17": "rs2TK8nXJZxLrwYGxZebG6DbxBu2ZQCzypcwFd3ePpLFG9iQLEs8i4UGM4RBoQ8j8tgdBhfGtPBn7huSURScF71",
  "key18": "2CE83QX8zeXPLqtvYbVFk6SZJGF4HP5KX74QvsuFZ9MkvVNZymViNR22cauubLBDWwjKgYdbRJ7NCC9kBGxeL9VR",
  "key19": "4HvJVK4m3rLSRkPq8xtqdfV9oB25hoxj7GrjMvDmSkTd1kR5q41JHGc9GqJNHyHL8mMNBbctVmj2n6A8XbMT1xTk",
  "key20": "5AnaFWhTLgQPGHA3Zb11762QaXkkrNZBN2GodRMkVjVHzPQXQHVVZtMRaFbMC1S4KAo1LvmKoHiqFQePjjhUwEJT",
  "key21": "F7icHgP99HFdkhRnB5voxyAz5AqRsAEpZ6mDo3tRwENZT9eBnhYUxCJAgXhfCmYmYaTCbM9fxL3gnb6uX6KdSEs",
  "key22": "2i8TaFXiHnQipwoUB4kfVhQTvRN1pnRYnoiJr7SqgegLmD5jTN1xdzPWNpcFdm9h31ZKs8mbhAMo8TFZGGC15gS",
  "key23": "3euZPNbL8i8AHZwoURpnyXf6ZoWCGnKkWCvcGM4XZ5XVuxs5WJUiUPVZGvxfSfNiwJDHMjHAx1z4os7pTXi3QV1z",
  "key24": "3HksMbeQdfZ5iPmr4poBdvsXzRDyqH9pfXc3vdaaFkUnLP9k98kwLX3WHGcZHCz1NJZBBTwKB7YpMCQeXB8qHr5b",
  "key25": "3ftRxJYWzDmawkgfMSdEUkyTDYojEVrwsgwUUnnLuS7gBqQLSrFDBHN8TMZY8QY7XzedUKdCPDqij9ApzkmbMXJx",
  "key26": "2X714nEHeLaEbMFmTQGV4BaC53p96NicDG4bEy8wb2ZEesR6bbreXdaky2dXhmVzmdvQ3FmbFibSk7kVSq1Vctv6",
  "key27": "5NLYpZnyhCeAzTeJGKSMnY89GfELRhJJidD78tGddQhTsPpS3cv19kASEucen2Q7oLgqwic7AbBJQ7VTQBysc2dr",
  "key28": "4h5WCL8VJVPnoTjV9d2Y5CLsFJNtSaXCGHExfE3vvxDfZK84fXHNpuAaWHau1a6agrH8bUVRenhTEND9vjkMXGFG",
  "key29": "4V8RestAxkJoxnVUaC3ocwfTzzZ82Te1cm7aZYPG2MK2EAGpkVFQpjwJ2RDxHMR6NRfpjBTRGsJBwERkbk1H1otX",
  "key30": "2vsxsVz9kpAsEnvYG1jLcyrnm3WEJr38adDXkKAXdpBDeiZii3Gab3Wi8DCWDmUxnZmiFXrz7UZSTyckxX2TfhUr",
  "key31": "HC2kFgxwJmRG6MePXtqPGi95dxTSMijzcxZZ1t6mfiqKMaE8ixaj7GPtVfXS4HRnq8JhwmunTz7ZHrnE5uGnQ4r",
  "key32": "bNx7fWMsgkoosDyedrtXuDg1kvn15DBsgjDh2QWoanDDH9A4MKasqhSZNq6rjwcxw24cZAh9UbLTVmctgAvxRhJ",
  "key33": "3Z8pBwAsip6fVQHvNWzJY3gkQD2QKQTpzsvFNj58u7skDNzMZDEvs7nS5qUW4cKJ4wnLxQ8oF7T1LofLhXrpz8Hy",
  "key34": "wHKuFqbJsDTLBKWPiJ3jhHG2jZ8wdc5VHwMqYGGJGkEbxZnCVB2oJf3gr3tE7vpJwUnGxteembdPFY6aazgheRp",
  "key35": "5dnZUUfyF8LqZDqDRpJNdryEw2EY1fu77wXssNXAawYCdYtzHr3cyPvQLvhMD8wXzeWKPcP1R7q8C3ZtMdokeunr",
  "key36": "uGkrjzn7bLdTvvdM87B4Y9WPnwYCTTnbq4YKECiLgPitqaZnLdqSBaVgc2yjSBCL87DciE2Fwmv2qthv3AMAQqt",
  "key37": "5Q81YU4wfZNhptWdrfLidUoU8fSbW5iV7EU28WEEJTaasYhtY7e9WPuF7t44NcCFd62tTV15hEdiNMXHLCoz37QE"
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
