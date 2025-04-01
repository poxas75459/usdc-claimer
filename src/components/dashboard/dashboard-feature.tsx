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
    "5t6rUVscugThvPuidDXF1VgsGYVXVmZ19V3XgmYBFrbj72xQMpspthGKebE6MdFQpaQMrPDt37qT7BLQ8qDPhkjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jbD5unzmK7dR7AA8RtKwXN8Bmfb2GStyMXfto8nsToELeF8GR19i7HFUHu4susvgauWc1KtYMcwWUfG5BWVpb5",
  "key1": "3NdLNzYSovcowdY6pk9Ee71Kh71yCF4ZXJjHNSChh3LnLG9XZ9HKr45YALP8yPc57a4fEdRqBf5KRFn4xCdK1Hzg",
  "key2": "4H2AhL1HJ8dtdJabzJmrdEXEuNeyD4gbix9MxLpi7FxMMFxsyhRJEjCaoopBbjjoM6XiNhpHwE5gBoWP1HRd23ZD",
  "key3": "2BzmyWperBGk2TetYcabSaKtcFqrnTZXSGDfisio4yUygdokFBysvbfrgQikqW6GDf4dnzHGp1CABfV6fkZtt4ZV",
  "key4": "33f1PjfxBU31GtdzBSqyPpuWxsDMoSLzWK9JBcjbLd4gbqgUuKQ7WcQppqxELKHpcUrUbgXvvGNdV3svtDmaQKa6",
  "key5": "3A2FAAhBXtKfvbS2vtHefY7VQ7A2Z9tf1TXo9xmNDEdzhdhSptR4cReoGzyjrnDW7fdhxc3Co2m4Dv2aN7uDAcha",
  "key6": "QBsycKfG316QqUYV4dPwJGKRWD8KAhyLgeACdpNS71Uy5EzF48vB93GjsZoWQT4mnLsTVnRPgCp8YMfyMZ3jXCA",
  "key7": "49VKdPQVnvLEJF1Wm9jbsjdEnqchmMUSS5eYPrvBs1yWLqUvS48LevdJUiJfcty5QTnHLEgWHGQAsQo7YbMHAE2F",
  "key8": "AYRTbQzqhpbhFwR1HaZHDB8TBJVDWdgSnQsgaZFwt54npCzymUMBbmHLnd45svQMndztmF2a9w5DmkJPKne3phR",
  "key9": "2jTxcvQSw8o78Jy6SJfEXvhFd9uyk8kq1nDhvEa5Qo4MoEUkxTBGq1JenJ77zPfCyrxuzeKiXWmEQ9kSs6PKAjaR",
  "key10": "4K2JM2jUseZAj4sZCKmvJdm1TE1DayeqsaLWMxQrqGCetbqyMedc3GwywNJqtBrH6hhRMhQnkKTjiTwPDUiRB9n5",
  "key11": "4EpLF8J9CLNDCZ7daWspsx824XfU15kLDvHijkmFmoETQ6W8SmFRyEj1Kc1nTHSGR9UCBcZFVAD17ikqWDiMPovA",
  "key12": "2Wnwn3VyYSduycXZirepYrMauhoUuSeHCGNQGZH6wT3PvWk3LYL4gyZ4HR1RV3om56qc4ZACQkTnHXXCg5v6AsNe",
  "key13": "2ceQxZDQXJ6m9fPvptNuui61Sj4m1XMMsjoCNdefqCcTPSr7LLFZcdvZqwC4zCWU5T5vvLb3wdsVJk6vzWHuRDgX",
  "key14": "2WVo5RpwNwRMyvR8ykFvWynTsQYgKGctWRcfedSCXWmQJfBhbZwPyWXs9RU6fhqDuPut5oV9HvK66aycCFSiCzuX",
  "key15": "5EFsGZw3TfMwNrswiqGjwsokWGRFF6Mnp9ZDusc7KSo8gRjdu4ZCDN7rAC9hD5z2u8G9u9e5mayceHtAvrCNFmhD",
  "key16": "32vULVptuERHFRYAoBT2ULvmrriQza2vx1TGs6KdB1Hu2WNHWwNEDcRDDKaXuY36Kg1zMDamGURXcruKuonT29Ua",
  "key17": "46WhChhdATQLJYcfAenRGvnYEqdWSKFfnnDtWGEHxZmNrRZCC73KbqZ6MuCHtpye1WeJrrfYayzMLq9YwbEwetgx",
  "key18": "3QYYHrmtunqVZcSDGEE1fDnhD3wgc4kgWzmwsWhopk6G2id9FgiAJjoFC8e6cTC8wt13TPZ5R7i9WPwFxut69DpM",
  "key19": "2BXfFmYc2WurkZtuHKKiEwn6ZpvMY11nuPmjHGT61MNsB2vC34BY24VcBxv8kvYGQr7k5yKxZ4EkTekaPZPacLh8",
  "key20": "2Hd5ETRZsBHBFb4krWCD9vGDk2tjVWRXbeChaGihTApqo5k5YyDpm6XY2VPyBkbLJvEwpQEfRBA4Hv8r4BCWoZRt",
  "key21": "2M5DGBeFLiRqJo28uNkwi5PMAn2CvRxbMqifQjVH8dniYTGKWZxzs6YRw5haTUUNVCm67ZFi1dNoXkRYBqgxe8eQ",
  "key22": "5DZanfpKQ8Mvw7GAEhKHXCwbFTyBQCnCWwgXdF6FZoJtGv2AVzzsx5YKDfpFZMh6MRbpcEdW5hMyvMJB3ruCLX1",
  "key23": "3WHdJZdsXSTJphGxY5SB2R2utTDCbKMBtgdz2C3t3n8D5EKesQUCj5B6gWi3s3MoKRJzA76PYKVpkaHUfAh3pibw",
  "key24": "FVVsZeYwZayzt7YbAWBDFuEZSCVWPmKenbAtzkYJeHiaEh1oHhphvNajJd53NJEeV5Hd4HcEksZrvR7XSMkdMzz",
  "key25": "5HYbTrNYgVSG8dFcMGw3KfZ1LepKZDD2EESd5m7oBqecwLu4uwuPda3W3yyuCtZu2VpRwXzUT4MYyHZzsZdqk5Yh",
  "key26": "KyqzBK22gZX3syYbabmod5D3YL73z9evNDLdU3pfzrCmNZg69LHpWfC77DQNg6e39HimSMjUBdXS7Qo3TxmGmyr",
  "key27": "b3x7synqMt9Mg9GJ9nHMASCrk1SJNtHPZFFX13i9yXwrJgsKDRRPUECy5UY68pA8vApXezVnU23pU7GVfe8k7CZ",
  "key28": "Khk7Fp86Fj36acqKKP6pziH1fcG1RT3RG8FrWHY9MXhFVjwUh3BF4tvVJCTseXB4wbSMY3mEyBKJmKUUASdNv2n",
  "key29": "2AqhWNabq87aTyHJBTEJebDc9ZqgoCreSrjbw6jAvzdW4SGp8ecubS5TXELfxdEAB4cNMWUDSLML6ZoWnrSNuvL4",
  "key30": "3s88YPyks6oLRGhcP7cHn2zVkqcVc9xpYXrA9zefrLs5JEAfgjdpWEc268QQPB4knSqPf6DJjQUQkgxeZqt8keMQ",
  "key31": "HpYqSxDNYTRDLcJ6F6Mt2WkJ5x8YDdSqX6QYFSaUsvCixCTL4cg8gABqwkPMMNuYSbHFZYk9fSDYc5SSnJRqBtZ",
  "key32": "34tYrrua2MmbE6CWK3JiJZjFyonPLrXvU7AyQPkqJnL9fY45J7vzqdZi33ohF6Vmc89pZcxXxsr19mpmYrDnr79b",
  "key33": "5w8t3SezHFEGk49abvJxMdN4unv9YGeA1juw6eZuPqjMvb9izhg6eUmtQjEe1KceCF6iymXLuaK2XouBefjz4S43"
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
