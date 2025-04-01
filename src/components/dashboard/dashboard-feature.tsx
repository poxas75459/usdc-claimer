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
    "2zaWEZNYDhybhkRfnyNMtWUecyw2Z2zHXbHFhBnwjywW1BoQrQXe8KUM5bhmHdEgLoktWL5aDJ19QzjBV9r6dzXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLUjChAdonLD1tSaVbkkGPHMBjZKbQfrbdt4xaMekQMFi5c5KoDTysDhKJCJGGnAfv3Z8xSyPrtU9GLkhR4NL7x",
  "key1": "2vk8eKsd3sMWBnwLYxppnq5UVmPY3RbqSK5PegwShxjsTQif6B6F8gmw1rZxu6NKiPjhbfsSDHHexzYutTcqhSYB",
  "key2": "34v63gRVEMgenUrAPFAiwaoGAFriEkUkESngHuhEAmwJmaj9WPeNGJcBeaJ9VaU1jnxk1mkErpLiVqmAgtbZwXZR",
  "key3": "h4kKgmzeWWiYQrrXPYGmkUaag9erfPwuQSnH2ESbYdq8hK5A1wxUrxRENARVUsXLpuJPBPU6WYewQjD3qgrypPk",
  "key4": "cYZk8mp96WYR5e7HpBei3sfSC2FN41rt5XsuRXCLSAXz1FMjDBcDZUjQ9TSpZQUA4GYoMF4dAf65bgPbQnpY8A5",
  "key5": "38P9BNqt1FPZjWnaRm36z9ZpwbEwqcBAwVGwFt3AyjxDzE6pouUUU4FoZ4R6Zzt4knd6y4gumbPhffQ8Ea52AydE",
  "key6": "3RxyaxZxtjmtdMB5TSnx5ijPgLcSyEF3Zgdm713nB36VeUwERzNFVBxmZRpbQFtsYVGoehgEazVKEn54VYeainya",
  "key7": "294STWtYkhbi2TvnzvZKkddD8PnfhPc17DXjettGG19oT9kxys3LZXgLFqNLxQrqx1Ene6K1GsQoqx9E3y49hEtb",
  "key8": "5Dx31yuhgCAuVh8NnNoNdaMAtNcGYb31e7mg2iPHkvWj6TDFo3XxKH6L7XPkqSHjsXLkpcAaM9TsC2scYhN8kUuY",
  "key9": "1QtDPCgKpmAMRwiw7vmNLZmtGshCHLBG8QbfWFNoKLFpktFwnFnxgfgSGHxweZ5pNgSiEgZXs2QGuHwHWXoxabp",
  "key10": "4sdnXUwiLycdR5EmPW5mfkCuXdGM5SJzBZ36gBojctaaqk7o493iGfTNCAZS3d6AjaNEQV5XAnngsvac1wgZqqQj",
  "key11": "4UVhi8YJQ5h2b2PjZJG4Kwy7hqs94UA9UoDoRyn7hu3mpVf51HB3F9zSdx9UjfRfo948SscrUKPpqndQZM79VFtr",
  "key12": "5CbLmjZ2cftw4BWUZMPFjbunZpfss4fhJ1dvAWxiEBZG744MzPJ4EeUBCoJMCd8n1ZkYvWgVXJZxjoMwAmTdJ9Ti",
  "key13": "3ViCf9cYcnrSeopsnjatBEYHuK7HnZggZqRkH4rK8HAYkGwBT36jDyZmDkfRCrjNhLiHiEA92hxVJaPe1V161nKw",
  "key14": "4EFDGwr9ybaLSQka3RN1CcBWB1faTj1C5kUdZstm12uqAA1JGWdSnfMjFu94yDDwYFUTDtwz5Q4odzP29bi82fvP",
  "key15": "5v2fRH89mDVW8FVhrGSHmswejgYH2sreN6WvatQ2RCxLkZAFzyn64ZY2av6sQBN5GModLZDhdUUoJbfNKHBPPPtu",
  "key16": "2Yh6R1sCwFMqQxtEhM4oGT7TK56tLHoESSkVGvqAc763M9jw573sCvRzFZ9ZKdUDDYQbeK4uLG2xHorYJqiDVPPV",
  "key17": "T2VWjEzF9pH6PDnTL7TxRQKd5zNR4WKjCjQ5VAFJpQiAGuSbBRjRBDFcF9jBv4aSnQGsTL3GrLB3y36svQAhqSG",
  "key18": "pXs2ufeADajsHDEDQzm363FgKfXTBnAuf6EFizAHzfVJdS3YSPw9WLvLhd3F6pp4BA1c286iEtb8ZzVdR4MebXw",
  "key19": "b4tuyjxfRDcKSX4VCaQbxVvjns78scjYr8rv3J1ojehhZnkqJMWuCZrQ3433T6t5rgGBqhfjF1sTHShmfNxk8CF",
  "key20": "44HE1JWxHYgUaG8KYA6ZVTzrZJWERMpjoHXtGHUGnEiEuYbGPuCEtiiVbYxN6H9VHeas5PKscGuR9QqzqTFynAf8",
  "key21": "5MKghWhZCYg3ergZ9SiDvpJxWWFLoxjQTRFiiubehfbV22ktRqAnosQDz6VwoGPqbqgqncgLX93v5t5tcTNV7168",
  "key22": "4uGi5wEpkjKMXvCs1kftzo6kXohRP1gTLpbH67o4VERiYLTqRY2dQ3naSuzrUH9YCwPzHtPB4mXMEjKqY9ciXvsZ",
  "key23": "5BNCSMqA7MP7ZmhEyaAtYiwcvEa3up4VNKR3DrN5EQPptSZn6prCxNBtYeKdcqSiSiqvRwk658vdjo7vBE5AX93d",
  "key24": "5s2hUQqPqQp51E6wQpnTzr4VHqyKn6pXUd6Qzk7Bkg7qKrG4aXUGayDAahKJpC1fH9YH2ie9FEd8qtpFnFRJRpJC",
  "key25": "4LhwKyKku2De4rCfjMt9k6tcHW2KrJe8JNrLSDSCSqTbmdk1GUKHn86VGdAknPQjg8yJK9R2BHoggUeH1qzcqz3V",
  "key26": "2oVZRzKjsn4TkCTqMrkJ8wuXehL8Xc8pG7MYnJYMP6Ao1bsaJ1aQmEGqe9wRK9Fn7rx3ZyGKyNse2yFWDmuAuNyc",
  "key27": "45srFbKwwTjsff1A4y6MEX48RER8X8ZaDPtcWehkbjY1rzWEVANqD7zTCBRo26u3pdPu9o1Z3iGXoMDpZroaryhJ",
  "key28": "2VqV2NpNzv8z94wrKdVQCU6QLfqjvRe3jBiHvHABL3J4UuFhwXkQRwiKcoZpf4e6BwfCvrKWgn6AdfYJ3Y7kepJg",
  "key29": "36FH8YRZrV3T7owJ2bLWce2rPjpLehQp8knecsG5JUWmqXiHfeJ6d9iGkoKnkMaEobE8xfM8bGAeQpcAopNqhjzU",
  "key30": "4daxoFp3AFvcYkXQSsVc4aGTZWibUQygpxSBop4LoxJ5sPfywbJbQryg8kzwbNh2d8YEnv7nP2MSzyoNEd2bBXQy",
  "key31": "5K95Mk9wQwcegSTD1cAY9GCj6pZzZHQmdUNmEon2eEcNC8cnxngaei2op2j9k51Gzku12kMSu9DVe989YWRuiDHP",
  "key32": "4LDvxCAJp59aASc1hj1VPMJEJk2ExYTuJJ2RDuk9Wvhkbs8AUSz2FCh9h6tDbGdPnsBxJKkXCmZFCan4FMt8CxXe",
  "key33": "3NqiyVdTPPDeYJCAkmyVd7itnyTRM8XBe5aFAkGDW8n9PDYBWqUkKHX1Jmgn4SYZX3nAWN7d8B5wUzwS5YZXVpjn",
  "key34": "6TvtgJQZY5mBqAMnzEN1fXuNLuzKrojyvQX1mPVsy6gnAkT4SsefSnmr9YkeDYGqstFj5J7vxNcJwj8J1zqj2nq",
  "key35": "3gGSYz38WEAWwCPVB2EBKMiyzmoJidDmdKZSvFQSwSWYDxbK6QPbvTfAaxVm4LnozXHiVyC4fcp7xdhGgzG1ft1q",
  "key36": "2rEvknHxz3JKgbLga3hySm8eefA6wWwztzWjs6hMnbnWU35jE5zAo6UgEL3L5EYtw9zQvHDe7tVwNhQrxTN1UM4e",
  "key37": "3pB3tUgZVen1CCcHcyprXUy3JMZjXR3h3jsQzgci9sLirFVdHuC7ZHc7f8FZjBnooPbQbPnuTpvMwzdUhXGEC4EG",
  "key38": "3BupkfBpfcn1MAnouA4KSBYLRM2u2Km4ZGRCXmYHANQ6NjM87dGUr7JAAPL8KWAowsWCCHQsADpEgW248YgKnpoe",
  "key39": "5FWTRmp3CStGFteg6TntrZ1mBpT9YQGKmTNrNro4Gk4HAG7qCyShLbJWiLhymcTkCR5Y2VuQoYyAJarFiFFm34ZK",
  "key40": "5dageowieiDamrQT9uPJJK4Ye1B97K7JKNVG4KEDf66M6BBzwKivnp8yb9xYDmqdiyq1wooFizKraLNkY3mK3x69",
  "key41": "UDVqptPMuGiR41pnQGvDnSBnNUzwBt2sPy5ip4YgpsWBD1ais1sd8KquJGCPdESJiwBtDmxkmEpTSnEhgP4oGUP",
  "key42": "josFonzP2dtTEr9mHqvTBDffCxTdHGC1zynaGtbEwpwYuh2rhKXQ8yZ8MwFpBH3W7xjLtDpe5p1ZXEu2tJv6wPp",
  "key43": "3ckZYQ6cYhLRMZ9gdNrtDefmmCEptmavAbP1nCn6QeZmHVVppWDGQTyhLoMTAZR1SkKh3kaT2LErrdAzQAdXMVww",
  "key44": "22VRYwioZRPtYVvqDWFqywhCw4aBKsyvY8YtnzFZg2hTHE6FfJ8p8M2tzYiZ8jnTahekohQG3ycktWdDHHcRK4pc"
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
