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
    "3q8mbxa8DbLtR9MbD1SkfN8QdrAPtvBHc7Ne8PkyY2SehQFKnN84NUn9NgNRocafb1gdyWEgFmos8Yy5EGFZgQfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMb9J8eErtpGya1baRbiruRc3AXfrwpTrbeTdbgZ32vRGA6odt2ZZ76ccGxKSnDSpd31H99vgn1inr77GETBKjQ",
  "key1": "2ofSJnBh7Pn7cSM47gLnGSU98Hcn7QarnpELdJvZyLrEi3gGvyv364wMAftzU7R4cUJVme3mWTv4bFyqHxoJ4A4M",
  "key2": "2FWQcCLyLTFQfizXhWYwFHPB5XFmdm3krSWMP7coce4rCn9BDJ4u1uRXiXUXo9U7zfVtJudEtV5ufD5rH37nqoDi",
  "key3": "3U3w5VcRmmHqkhPHtMLKXqLjKVdHyxxa9gMmToPm1oGshSahTprwx689fxpYNw5cxbY7vU4UM15SxhWd1rMDSAhY",
  "key4": "4oNb9QaZmmS2WmXdWBeEyhMXQtojB5K25ygEYabWpVQNi81o5p7Scp7GizumXCsS51QeFbd1sKo4NwMBnbW7mpN9",
  "key5": "4wnTk2HjjFRqCquKnh1s6i4yEdupEZy8A1SdUFEKWTPoRnW5aF6t156XwHfLkCbxdcPjrm5RSaqbpXnztWSqH9m8",
  "key6": "5jFiEZAUSK7KYPmWVG98EpUh6TSt6GbrsAZXYGPQGNpm3pmGiq5zpbGt2NMMuL1RpVtxvayp1ugtv36n9uWbiDbs",
  "key7": "3Nm1rDxHUTyoiGXtX7ER3cMf6xTJaLUbGLkafw483NFSWB5QBuR1rCLbzMSm5VCzD26g8bKNRE6kZXDG6GvBniEC",
  "key8": "5KJqhESbzE24RMZnJr2oUTLEhKv2roqp24EvnGbsDXGzvBq79LzT1FJLUkJPWqruyFryvKeuM5vAQgjem65e6iQq",
  "key9": "218yF5QkPQo3YZ94qiZ5BVtfRHSeacQRF9gRBHGT8ygF9P7qL6kWXoCZs8Dn7ud9Q7RRGRoBfSNL4SSq8ZPMXD49",
  "key10": "5yZ6yjG9Dqtr1vmRugbSTS7LuiEcqkvqTZdJLEjeuX7ojTGJs9S8zxHYhE4izbRDNUkfsbtcAk57yjX7CsVpVce1",
  "key11": "4MM138qrx1uc9TMmX3WibkM2GbDJNSGuadAighPUyuasiLo4eFBoE63NfNyqYPh42zViK3jF3MF4NYsCjPkUmUzf",
  "key12": "3Lhzp87ScovFVdbbEWgowaQXpepTqipkheyGYx7jzamgJLNGnM9dw4xrgGq9ATjPYKKBsQfiTUkC3LkTp2sHzcqj",
  "key13": "57HJHhtHEccXbwGvTMA4w1HCFXmccJFyysncog73CCFkynSV9YqvPn4QxwMdx1vZkVN8ww6RggSqexecY5BxxKfw",
  "key14": "CPdRAu1KS3mLxCSH7NTydbvYnBi6b4Don6Nff1FZE6Rtkss2XcCVDWMZdXetxKN7i85mHEwNgtuU62i6LF2tQqx",
  "key15": "2Lvuq2vVSma5uArC64j63nQmXNJr33fdhfxURSwJRWatYZjLMRjs1J6uFZpCTxbAG756W6vjdKPUfqF9gGrT6uK5",
  "key16": "CQnHSp3zVAtyF1yX9JEKZGb2bBUefYBDT4f2uTVzCm76Ezgy7ukdnxG3sHzNqfGLXwc9yiBh7LyuEGNdUvE6DDS",
  "key17": "bn4N2JRgAKbypAGZp5fJkQCzKwTasgaD5n7CQT9RQR2APK39M2Jm7TopMqbebYVqfrpJUKtF7WU6kuqhQuAof3T",
  "key18": "GhAvdS3EaiNQuG6QXhAw5upMYY5GQmBTLUQ8kuXivPnPFfAYBjAYfNjVCHrMocorwzq64uP18UXM1k2LQQjGxVy",
  "key19": "3a19Hbc8kMPb4dhWzYDejkGhZAwG24YhBipfuPd2b3MtHfZ3a56hX9SjcfAWqQUF8yeYBbBA2EMjxCg1ugst62Ja",
  "key20": "5PzVwLpTbAwheUiwgMh6dwToMNsHGoGhUqy2HVFKcEzuKn1dzCNVZdnqfAyBhx3HTS4giaaru73C1mkE2EEqxCFP",
  "key21": "2HzgBFdGs372NLqqLG1kYiGydfkiouh3vqjaLUqABWhmWQU8TpyuA2Bcc9jvwLM1jV4wAtEk7y85zRoH7cpW8F72",
  "key22": "4RQz8XVVmYwy32Mij5ABVfCh158qDuwFsA8bbMQ8mhfptGYrW8i33v3eLvE9sDuXpMWsBvedDLBC7neT64y32rCU",
  "key23": "4WQjp9ZTyTvJTSpUqp5avc1sxN5BpgLYgRKG8S5BCPyyD3ZrHVx3PpMuPw2fU1NBXdXDCcZVGYd4ha8RurE7vped",
  "key24": "2FWQWHZrpEJ2xGWJ3fmHVXhkZQKrPnHWUyRbfxMJY66kPijiZ57bFLWHiehh825eF64KMTuaquUhj8WLaZj5RZS",
  "key25": "53Z3JvzS1cM9p3vVAFHeNoYjTHZronn3RWGG3mFdyeRiVVRjbNtNSsW4SZV7EQpM2NxRi9Hd8tqicF6mQRfNgH4V",
  "key26": "2WykKz74dgBji7hJYefQA1h9ME8HzVviezKPWHk6L231xdWGLocgsGmzgyAwDdEMALiiSYtkudFQMXvToNi4ZyxR",
  "key27": "5CUUSL3QJocYZn5Ld5JPSLWXPnUtaA9YpLqS5dAEjt1QxWxgrUSLqDFuYz4yN3LxthFWct3wSZwbdjqtgQVgWarK",
  "key28": "5hameL5q9EwJ8792CnCVhTFdoAU3XLbj3E7FUeVmK3Nb2Rterpw8cNSFF5J9Xrkzxktz69TFvbMRDGEn2BRAxiJj",
  "key29": "2LmvASNJMMWhwLXhcc2v2GUbAyRmUEB55DDVR9GDmo2Ma6SLDnR4pcvhZ9MCdtEkDYCNMeQh6ey4d2igMfHH9evU"
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
