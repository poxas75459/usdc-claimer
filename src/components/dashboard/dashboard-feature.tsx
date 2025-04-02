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
    "5cW7eAXJXZzSNCsyknanoMjnLYXb58kdYvhFyfMVjZaYVgyKu7xAPjXQJA3gsMqiGYZGHcxmfeqJwYXDFLyn2Ny5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxpdLLUhvnU8P5xZEfLy2bonuQJ4XtauaBBynuu8vmirWsxVkwLJAdS5kDUoVNNRfUBhdFTB8fdAZrn6QZokADu",
  "key1": "5L7kYFp7tEUYXY1j5QTVdNovRqPxpCa2uck3Uft3Rc5QmqSnXV8Sh3x9BazM1KhKjx1epkHYnov5aZXgtbK4bKhC",
  "key2": "5qjyTnpY6G8AKXwHXvWeo3bnaq8oX4m3vrTbp5DuSDtYcKTKWT9FD1F2jLCkvUwoM1kaUG17kpkVVTnLLgrU1Udx",
  "key3": "3y7C8PXSGpuNN6sfmDzADSaVhSWzqNbv14Hs3Udbq5dmfrcnnsAcnoJfEHg5xmcz8H2ri4LTybUbuHJKWzNrvUZk",
  "key4": "3BkBHDqyH4og43AJbaPtGg9kq2e6sCJKjxEoLwZUCjcEanMZHQSw8QzXw5cDAXaWRCk2YVrdwxWfBAGFBqWwnnR7",
  "key5": "2eSJdUnt85fvNrVcDDq4P61scZo43ygRUJg14YVzmoBkdGrkgsgNY4S9tCjsri73dYFKWma4ggH1ktjvJyR9FuhT",
  "key6": "3BSe5bGr6PRnHc2ADF3kUQbdvKaGBBDXZKZXm7iEb275TknETdk88U6Q8nXAznyX2C7TFX1HfuuGhBJVrmdLbpM",
  "key7": "s57Ah6wrsE7vKfwEngs1LKSxacsK3JmoXRHziW6atuQDBBN2MUenZxKUqRwrqETM6zxweamKbWE8p4ZYNt3pYMz",
  "key8": "3fPH8PEnoSZYZipBC5HXC3mTKgm7ZHuwE3r7KNpApYs6UTFgN3VXS34KfipgaH92YRjgoiafS4YbDAPeaKNjUJ5r",
  "key9": "5tjcZi2oTd8QAGnUohvSZqW2h7vHCzZfRh9RJs9xS82fBov9GJiAPdmmkDXY8JDmvtDPBZHXzGnvZrAc9D7DgCMb",
  "key10": "64a9kjW25iangN9T4tgfkN68cS2rpsxG5hiE67xmQUoA8YeCPKXLrDU3GYKgzz8Fza3SZMJH2pokvi9zePY2gpB3",
  "key11": "XXAjUJdLx7mmfuGrqsWvbo4Myx2aMg3LzoXq9zdFMw8cWNmhtJM2nC8TYnoM5wum2hzwokkZNDY3EBwF9tCN2fg",
  "key12": "H353obPSwtemcdvZGWYw1g3STdpwcjGt7Qg3x3kqAa58X8hiFVbm8K5qKKtJf7VXVPxyBewwnMon3oSdM5DDYAw",
  "key13": "3p5BucqJ5vpGX7ftKhSFAPGfp17AFx9NodtWCcYshtb8igAUTYwjgH1Y765ZZjGpDFPtFebwiuzFEVsGb7HSooKQ",
  "key14": "bZFDW6Rj3DfQTTMPNpaKPo2N7Ygv8JKhZVMS6PeRaoKpA2G6Af2hgs6gREfESgiR7ak2M1u36yaF4A8GbNdq2oV",
  "key15": "4jBYGrAZ1x9kp5Go1GoeaxHP5bfx4vfs8tD5ZsGc7z97igPf6rdXjRBEeNMY8dyVMsbBMWketUZDaAdMycLPN8qz",
  "key16": "U2AAqa1eD7mN8R2Xr5z5idzcBGtM3ZXJVP62AHCePJU2utSRPwkYCHQzPenRB1jWBGkhEmeFLAZwGYQfQctPgz8",
  "key17": "2BZxaeFcu16KjCTAhyp4rni3jyWZ799wqfUFFLiuUMm2WCFk6QVhCZNgq8fQMFa7jhxz13QM3mkjuzahYZo9nDti",
  "key18": "ucW1fjqa8NwVGZphnDeZzCwo5CqkTo11GqKbMYPiHbuu1LDCLnCt5tuj6FoYgE8Sj28aAkeFqCUZsRcH1y7SinS",
  "key19": "611k8E7JUJo9Lduu7JW8CLGun9apPBhM3vXxJWiSfyVfQCeNZARR1sNXqmQ8rmig4Eqmqgp63ynUKxpKJc9GMgJA",
  "key20": "3vW4C8vXSWwDVSXc3uHBdq2sSqBADxhCPBNF6DZQgKJXrutaZZ93HgrRGASxCpQvjxzAaAiYeGN56Z4JgLwDyEUV",
  "key21": "59pvetzomBowvFz6TtyVqHXgBr5xi5sCcXqn54FFJo6tWQb3g55NtcwH4QRTdMZ5VrVpMEZFCZaaPJTE6SM3Hck9",
  "key22": "2gG7sEB99ER6mWWT6Q1yvrGc6c4FGNimjKszSdigdqaQyHJt9gtDGUy6yyGEGN8cSz4kxhBa8NDqkj92ZsJPMZmg",
  "key23": "2KncHrNwhJw7QBjoThhocmD1xRHPbfz4sNkqJrAqg2VcvgocrJFFgGzuerxKfLPCUKbwHzqqFf4aGU4e1AmhMB55",
  "key24": "JqKVxxvhGhPyG2rCh18yUD2GGt5cLpBnRNeR53tAvbymqVbvFDeimCaRZovSBwQE2b3VsfFi9BK3YQydrFPms4b",
  "key25": "3FbMQrP5dcsfEw9orfpadU68RqF4W5ST1LpH1pgHawBg91MmRTyT9G7opBm6fBESQshN8Exi1WHQmUZYMr3hHsoF",
  "key26": "3RTnFegaw4AroX6jX9xtnnBYmuVJaN18Vc2wMgej6EhEwXaiDxNhU8DQ1XmeHHcjTXNvcyyypzBBf4PRVLfsVazr",
  "key27": "4nSSzDn22Z6jzDFGciU2tuuT98UuGpZtTYBdRkw67zPDKjfqz1tZjwUgdw5sSZwQ6UssAt5tusHSkyhBYH1AUmAp",
  "key28": "VMENpixgh28aqavdmbXFzeN7uULKoxSJ6usZ3XcD6LbkcvkfTbN1bTdkiLX8P7H1VPMxHgYPKsZ5x6faYdoknXP",
  "key29": "65uKDGgpwa4z6DsY1QTpPDFzr7MzYY8E96niG874XaMLW31w4sikJM5etkWtCv4hXTJYnyFKsZ1BSgJH4N2f7Nrt",
  "key30": "3qak9aE6fGtZnApkowUoZMWuzu9xKAGQxzy67Eztxoph1odpYGUY2vdwRTrDjJFyAQD6R4hMUTUyYdP2rmPuuJ6T",
  "key31": "5KZH6aDfW9bZP3qqUWkqsqJqLQngpTpXRH9q4qpCQEkiwowaTLH3r1NzAaLZD9gQ4BhJYcHbwzbVBGRArTb21uK8"
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
