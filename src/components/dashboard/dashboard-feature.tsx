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
    "56oUZH2fZYsAhZqBdoK9jJNhcXtePyxG3EmF28EGV4Mw8zeSKhZYXXKtXX8GKsSYr6PWGSfWeG5LeTVQeEfu98X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mSVYhu3Uq3ZR96V6EmEhd7G3DxJD5Q7BNwFjhwj8Xum1HA95kcMSsk8Vqb2tMYdH2hq3m39j4PKKbzhiyVqw27V",
  "key1": "2g9qKDBxjn29ejefCWxRDoDGitidvpjmaoxkoXyapa9qeGk3aZwAu2xppAmMS63cvEUDE3Z8r1Y9BemCHrbVPeYi",
  "key2": "2WvjtK61BW2YULFtxJqjs67zoysSBiRfG64TqNJsFHtxiQPdNqcR6WeSxs2rbscS5ivscgky8r3Bqspjpp2ytRVX",
  "key3": "4HKrj9Knms9g4vij6mpg3mNVLbfrNcQypzH7QRewaGzNYkv1ajAWB7J4jB665G3HuBW8EqEy2Ec3XuUBcQDub8QM",
  "key4": "UfoWhWycovgBgddbHGQ6UeraZoRP3fuE9qELUDbCVjPnxwhk1GgNJ5cmYVaSnZj4nVCiU3cmvaSirS3Myz5NM9K",
  "key5": "5HccmQJgxKaZmeRGWpS6rdonuHpTMSaXGVVx9AiPwFhuEKHZi5Bxyprc4ati4DMDoE5QuCEQNqUdAZ14MEHkrtie",
  "key6": "5Cv2jAcWAnUddxsn8nqi5xMer2raZXMAhEvbPUWkXyaaKvtLJREvd17LXxQjdEBj4ZNZ3zxajoDHXPLvPsf3nebm",
  "key7": "WrRwRDnHEJFtowt1KiM36ZWu1qLAu5pz6KFMVXjCqySTgCBsKx6vGWCfm8DbrDwUkrCcArZkumAEmrbAxpSAnhT",
  "key8": "4t4LzoASfyBNHjQ4pX14imktX24HPuyhUcYH69iH8MJaSfH2LyV3PB8WnrpNh2esuXW7CNDJzpJW1ivhXL7MH1Df",
  "key9": "3m9WrTDLvaG88JV8MPVfkWAkjWbMfUUhdJ2NiKCuDSBsjMXWJRnU1cP28pQ3ArALAeo7d2Quy5BX48sTjQ5Q37nq",
  "key10": "5gDCMji1MB9DJkq7tLNV4LSbid3YMBfBCRTyBCZA9HFna7N3B4HxyBucL82X7CAtfeiBf9ggUnYoS7BbiRDUFuWN",
  "key11": "XzqdK8NSHzG2246ynYdt3jCkFut6F4syhtAkUQwG3tKCbZBtHfXhraVYj8aQkGKVKkFwuDGFPoeJoCQoQc8x1GU",
  "key12": "3gjkrWTnYd93DX4bfKaKX9HShpUMXWZX9DqDvqdDGNQza1cXNmYc6KFCaWKH5ThC54YCKE2BBk6zPpfDFKUHcpaS",
  "key13": "4VwCK1eLMWAFWa9xQvJrK92wTmzVnqijYzB9LrAXi47SRqvHj3LL95navWQnS2d2HFQP4eroe2rXtD2Aoc8fFUT8",
  "key14": "2y3VGHKH6W64x7q24yCiqEjKyiiSioQ4F1Dfe2m4HFJru8eyweebJMAbiRWSrDNpBXTYKQwKtxg27C1sGWXSCvQJ",
  "key15": "3L2ZAtV5JinU5jYhgud1WbxVZWX3F3GCtVTbgFjzG7R4LqVuZDNu5oEddnsQb4KnnQdVEBZK3bR626ccoE615hUT",
  "key16": "3QJ4PjpFSThNty816CAsappEqyABnMijQXagRHZqRuKXyk65rdEN54hBaN3MRmoEQ73xTrAc8s2Z77BpNqHhFLLt",
  "key17": "5GLzXgPtTqaBGZqb8jvUQVCxqn4VLP6WA1bpDTToEt7TKmbtSw4GPhPFgTcAydpM6rANXppWAgw7PPXoRPkH1nVZ",
  "key18": "26p7H6WKz48VEowt1a2TupPraUamEXrCNWwbqC7VbDNMhn9SVJtLnghVQMZFBCAwpdMgxiueEina9zZd5z59pZ68",
  "key19": "5vfEm8uj7vgPeotoQ8Zk8hFTU7XPFqo82Brig2emN1iP2AEE8C2PESKKWgWX9dPXdThympPYqekBFX2svs2WKDgN",
  "key20": "5QsHeKVcUiMvxL1ktvsfpaqJdvSd4iqhDynUJ1e92eApwNY8anHXxn7NsKHG4BchWSfU5jhEis9qNBNyT3nbxZzz",
  "key21": "Bsb4Tswocgbn3BCUnWscarnyaxHSH5uVwdZXPJrYgEDZfxHrNW5f2pBaAd9qFfeVTTS4HML9PCPFDbf47Nz4fA3",
  "key22": "kbTWvMCFTDc47tA3j8F29HYvJ7sQyVcrUusfzLDiWTewznue8cAjS7DZfqVVN2troK3hj96dk1qGyThu5wZVmeq",
  "key23": "5iKt9Lgn5ZBVch2PBCGbwRFpeuKXh76gb1sRuypqTkcty4ipUMRzgxtXVFw5PUPQ8CfjTFso2CRnoCs1xxr9nba8",
  "key24": "3YTgvuo5VftPCBae81NoxSu72vFimERSiAPxqUzGe5YZwmmCwyTZg1Zrz2GyamyZoPFtmK7GCEzGGLXrfSuEa1wC",
  "key25": "37mbaqHRqijDR5q3zjiKZGu1dDvNogmwLtak6cHdduXPGcM5ZKGT2wYJKt2rueC4LrEt4hkuB9wTcrspXj53sp5D",
  "key26": "2rYTNgnr9oxokVSA6qHzT1Y91FvP65PLurHRseg923dbgcQiiDq24EpncB398sUvTnMLmvnsupjEMjH5xm8AVAZu",
  "key27": "2PpeyByf6JsEZii4eXry3wbszFsJsgduJXRUkBCgV9UbsGbtzvnjCk8YjeGrVxZvrTXsbnKXKmX2rhwFZrC9PShA",
  "key28": "5kyU1N1KoSzXfzUbzCiYs5v2nRcSNGGD13RNGwWMYnsNGs98y1adQ6ha1JNgt21PkBpNY3wsBjCvcyETDyxu7hWg",
  "key29": "3bYR5CS53nnwQi2rVN8Rb1hEbAtV3JdCAjxsZxygjMyp4ovy9TsHkycHY4nTLXT4V8To9sshuLwHJGqCbf15cDyR",
  "key30": "5v4rVuzJNcx41qoP5D6HYRH1DekYJ2rLBNEBbvXPzbDEkN9iWJLsTXHVgHuaGq9dSakduyhQSTQncdGLYCwYnTrM",
  "key31": "572E1UPk9GFbuvTWfdk67nym3GYgdoZz8EYBCeb9fb5jM8CqnqLEKXKre9P2tiGzzJi6kRSJVw9anMZteGGEHVtY",
  "key32": "27V34xXKuXHfYJq8qMaYgSsLp4VmtZqRm8TEDYqD5x3feqHn7J7mdU7yaxfQ6GU8eCMbCR7hHcBKCqWuhYA7smK5"
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
