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
    "3tCfYhTuuGoDiRtc2LtqJzh6SSkYtE7k87Fi6yy1FgjmCaDt1YBpQakJ1BM14iUWsDtMD8HrQWbqfedcE5eQUXnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAa1fA8cRHYbBNH1U3rU6297kZkiBfkZ2Hm33XwSmbK9VLrnfu26Eon9qmH678YUA2JGdbXkHTYhQaumLYD5Pve",
  "key1": "ZQaYTXuTfUzNpqCF3EjFCpxRnWBNiszq1AYUpJjzxX3tZxyfCDqxGitrxkReHuNN71NAo58TMERnjuurEG1dBsU",
  "key2": "3LcojpoWefqKegXSCESfigacGtB2YG2rqgDgJGkhEFbyQzFoTvh2vQPfHQY2URZ6n4t6za8VsqydPP5jnDDjBgAw",
  "key3": "2bNpMwCusxz9XNhHHqDBx9DkD4T6mtbTpfLYraCPEq87gpoKXiWfhpKhFgtbLWExrXNDCY6Phvnq2kMGiRjZ61ME",
  "key4": "3ScjSD1ZP9vAhJ4MHLggV49DRGkvchcFrtt91H7Z5TXtB6z16Q59zUdWXy5SryZeUXejEuDBFwVrMeqDWdTTDAxN",
  "key5": "3i2w7jfXKVE25tPzoB6BpZgWAQbHLyfV5W6WCMhKpFf5e3EXiWs4duG3kQaS7bTEyKA85smYXVozptL1XKxjqdYu",
  "key6": "63f5eNc5xTe72TSP3oQkTSvjYxbSiNn7FPufp3QmVBZdXijxiWVrcRSaipiAfDi1NisHbQkHEKwHQio1DgSXAZTd",
  "key7": "WQSYJhqQY2eKCNK9tHBTjZo4J9TLNgJxYL1ZnhZURb6PrDFGH6PNrxnWaAsmqq38BVy3s253bK5WAtBM2RnifTD",
  "key8": "5g1DDJcbshpKpgTRrvd7KK7GhC8Xct99DPBJrYsvXTTJWAUDDaZvG8yme3xUpSoLJ88Vjvcy6i8xFCa8ggzxjGqW",
  "key9": "2FiRs3jUJat2XtDW4mnN7z9vobutPEDEyTck3mhC6Dzbx1b8LpnAcN4ZDhvtwr6vdyNYGwtdtKCyqi3VYyBvZz7w",
  "key10": "3R9ed9ochmF2BSWUeUvENZQUbAHxnCxGWFeZLtktBPMpPh3CemS9aLu8MBK2JKHTxnbS8epnTh5JSgxSbEAsR1F9",
  "key11": "5xULUrTcdGfFf5XHH2WzvHeqaxVBc276abMBZKk5qQST7Ts7d8RoRUFBrw2ouqVZbTiF1G3MYkCyPqb1mAqBADmf",
  "key12": "5WJgnm2U2nX6mRL71HexTZFgytjZGMd25fTcnf4SSzyiQehLsSBwucoe5Gb7iPn6mzUsVx4bVSHAYT1vETq46Veh",
  "key13": "3nbfaTpdTp44CbFN1m1Wz91ZFb1qutqeJKmZ6NsqQzdeXkWW1eg2hREWC9SrQpwhgHmzhC45SmJHRWpMcyLJdJ8V",
  "key14": "5i7mCBecezv9Q8zyWwBSMMCsFdRFE7GZvn2DLUDieqAwxKKdSSSe8DEoGPRccDjXaFmHi7P7Yzz7VXSCuSg5E1ec",
  "key15": "2SwAZGkaw5moDK6Gpe7FmuNKteDETNmSF89T5xyVBNEcV6bApSD8k5zDjpdXnCSBh1CrYatchKwttuF8wPtAQMBg",
  "key16": "2ZkH142FnUt3tuSnDkoybah7tH2WkiHnB2DbZm23eRat1aomdNU7jZSb2CieRP9PVd9HHPrgpZqT8ZqFCGFgrsG2",
  "key17": "4Cj2mK13HuzqxzmbMAXL7HVxLBd2nxQbQT91FjUKn3E9GmCW24bS4KQdvTKPgvG9UR9MT3dhxCXHxKfxEzSHgdr9",
  "key18": "21Qru2odVwFetakCXDvbRNqn1jjKfNf8t4yFgNaJQhQt6Lf1HWokNLEKxzMZYDW8GEk9Xp1HQqQdTztnRjDSox85",
  "key19": "54FZPpNZ9sydUSn19urDbLuuF782oHTCH34Kwkrt2ySrVdg4RrUJMACh24VfToYi35Z1dR8wq2n7uFPsVuxLtVvr",
  "key20": "47zRYTzw4zC7KJ43w7rSKNwmQrMMnRqXUo2UJMBQTjeEy4iwnwPMnURULmWRwxaEeTy7tuX2g3bF1hJx5xoGAuh",
  "key21": "42FyjkSAM51QAaiSyZarkgcK2YngjqRQd1U4QtzpXMiGWVx4y9yuNZBiFPeJZagX4ud7AEjC77Ryh6WmjAPwVLaR",
  "key22": "5Aa5GPeEo3KRE4GiM6i2BCiUWzt9KoUUSFFWBeg2v5KJRcSTtjLfUNHMJwazJgT7dE1LDkC9TmRVGTy6NH3L5SgM",
  "key23": "5KHiJySRuZdVPWB7aYYdsJ7oF1wkrpoCiP54aLeBXwB16KmKAhyGv8vbHVrySEiFKKrfiXrAbjeLF83uSLGo66Bz",
  "key24": "4Hb1da1SAw6GwN8xYXQbW6LEPMjdwdNt5am6AhCWwSG1j46aFys7YYL4n4Ax4ixsyCdx9h1nazCqGe5AaLPKDApx",
  "key25": "5K8mWdG8MFKNWraoM4RZDrV31CbYiFHosojWUBWjdmUC4WRscwHfsetbQj43wE5w3WQa7uKckCAbz973znJNe9pT",
  "key26": "5Z6Dpqcd2sUQUSg2FSPwBEZTgvKkGZk79FXiCiRqdXoHmGh9f5fhkaNtHG8dGMLEueJ2TMToiLojRGiSFQkGbmj1",
  "key27": "qDyYaanhYz11i8HZYG1GZ9TJWXcRaPxsaNU6Juajj2TXbmJoSRGsa4woRkZZQk5jMZfAKemnAbhbLgbd33tRkAJ",
  "key28": "2ZjCNfwt8Ut2514oJyMHafxuq63nYcXhcFQUkQPRRH6fynfunhNJSiMKmHfXo8bY2AnjLb2dXxoL7DyzP3g5kH2x",
  "key29": "5Tz2VxWBUC3ZjhzTdyiwk5R7VS45pY5pa73xXaq3ffNzsThZTUg96LfJjjhCN25cfXKdZKpC5U2JRBYtKKPZjtzE",
  "key30": "5PzEQLRPH5JnMinA8PW7hskfrNuVn12sM9YPRu4swHk84E6cGyH4w6N4pY3k4Zjm7RCcN83dS6qgL86hPpCVc2RM",
  "key31": "3WQ7FmbKt6oYWeE7s5V4Y4vKanr7LRFZ3nXaBMD4EcdKfB4pBv2oADNYij9KYgBtVCFmyUexfGSBbE3wSorHPJaY",
  "key32": "2cpAd4jau1aB2NUP3vBcMV6o9gwYWB7tApFrQbYKDaurNyoWcB7TBSjfSjttHEWNkfwJWEEFhQAtSQhrma7fiY2B",
  "key33": "h8gcgAEYpVq6ao7nihYXgP14SAKVGy4whW8ptRsCZ6nbg5iya8TJw8m4bxHPLEuGYLeFAiX8gAci46vUB5TLXQn",
  "key34": "5U1uz3zGa7q5mbXZfJxdebGezmS7NpefCe5sckd3e92f7Gs38r1PgfV9PrjbWbN99G3xTkP9ehhZaVuRm3n2wVeb",
  "key35": "3zonmLe16w4kgWewr9dL2cJp3oViQHFEk6oAGrDNKzCHEEcerRo8gnbESevZ7uyp4nwSQ6zH4XF8XxeJewBNWX23",
  "key36": "3PJLzV61eYEhBoHotLamQQ4tSYbPY11QhfEFTc2i4Nzd9herELzc1G6Sf4kuurQaA1fuuPKVr1BPyNQVY1w3jpvU",
  "key37": "4rqNvNGBSeCNnLsAK5FMiA9K72T8Yqtx6m5nks93cTJDq78Tx8uFawF2UU4efVSTx4PDHpEZYSBBHqaZw4sDtFRw",
  "key38": "52CSJHbRJwzEEPEoRE3Vtyj2KcLHpxYsB32U89asvbkAfcQkUm5mrJMp7oFnjzgChTRmFiWHN4LANx5z8yA9dGM"
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
