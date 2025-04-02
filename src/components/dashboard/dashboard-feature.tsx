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
    "41dRSZ1ZjnGhwXhSHoyFc6qux7a6V6RFVhaUAQzJao44s4zj4WwXav3BRyndeWuxk4bsKdsCoyerjAF91eMEUDPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjcZcDMR5qFqbCSpnW99KqNWLTuyztvEkS8R4KF9VuBxiYMjYZAMWbz9v2C5gsRFdcCKKpKhnkMLbHjcmy1oDwC",
  "key1": "5Nf5v5w7XqUzNLWsCyJq7b7nKcHaK4Q98r8w6CFbvJn42bfeLjWp5WBiyGB4DUXo2eQRSEjt6RQN6tRpMonwPYa6",
  "key2": "5Z6xrS7ZFHBfQQzEWLYCEDyZfhCUrioqRpCbauv9YShekzZ9tr1wCyrBkspJkfDjKMCkqz2G9HCHQN5NjV4whQAd",
  "key3": "5rpscKBErQa7YA43ZpbesX9pQh5rtdpv4txhP6sMo4PZZDMqCe4Uf5Jheu2TK21hha9C4VEm723T7imhyB4bCqa2",
  "key4": "4UpWu4gt3NC3VDoJLNWd5ckzV9Riqiuo372bDywSYLqPdyR4zQvAXmteT7uiAjufw4xwTdk24VVzn22LqszZkRWf",
  "key5": "4tqbbgDDVvMrP6UD3PRtNp7npA9f1EwTZAh5fnqY7uZgAZZJ3tNNtYi2o5cChUyXWtZP9om3XNn4pQAN4ycTGkBv",
  "key6": "5ZKuR4PkxyKMyguwo9HrbuRkp21py1sjQYHWXQakwNPpisKGvQ52PLVMDN7fJosyfMGiGnfDDkdSDDTohoguR8Nw",
  "key7": "bwDX6dWdnPQocFmf7HkWg9zEqpHXamEc4khHevgPaATpt2cbpiAtNvXJKVPSWtVrK3WX4sYi3KjyNR87GAv2icZ",
  "key8": "3e1PzodtwdQqvQHtcZJpLvUm4AxYeVHPdwCQcN27GRnJfabGjrb75eeCsidrgA2ms3TpnrdNQoZHW3oAJU7WVQHh",
  "key9": "31ypPko8UBxQkxRvtNsmpvUjsUiejEqVcUya3A4LXW37MsJgFgkLPYhxefrhThi7sFS5mi1uW1QmVks2uteE16p5",
  "key10": "2B2gHJJiiecLPLBLhbyRuBiq9uDbBD4Sik8sqRywtDiMSUC25ZvhCBHKDeSq4CyhWGJYV3XrN3AVz7cSG7MWkGA1",
  "key11": "5M5Lw7ig9RBa7fCq6BGpfyxCsFKYFt36gwz9nau87JHBnKzWgihY2Mk1e91dpda1BrhvtMo5LBuVVaCC46zPo8NL",
  "key12": "4gPkivUoZDY93Xf5QPvzhcNxbctNK7ySTXeGHxTtRfx1dizyUUPGT54mFcEQuRfPWiDJY6omkMcSuXKbdUzo41f1",
  "key13": "49EMGp5uJhdJLe7QpCtsKmGhJDoxmbK7gFYwRFPBQFqd6xxNVNxvM8Cn2sPF7rysYmCf2KtQs4DDTA2SAiBdcKi9",
  "key14": "5n5sGPcsKR1fesn81377krYEpYJfgNbtdSyKQGgcoCrZ3zpkoL6dyQxk7KspRjpjk9TuWAU1jV3tmx81x45NDy4w",
  "key15": "ep6xutawecRXt4KWQ3prbdE5zgjitAEeETedc6pcTbhHjA3dpsS7J4cJTDdRFoQg2C9QNTf3QG8FCgAWYEh9uwV",
  "key16": "4cqB2tsHxX2jH1DsUTZcNjcwYYJUund61NiVKoFyy8KXgLXipXqVFYJZdxPjmSZDMFtb4EoaDrdQi49YhBJNWDZu",
  "key17": "4NG6jeHpviFaphQzmovMNHv5mQsi8yuagWxGWZCYUWEk3i9b21GNqcksBn2fervMeJUaAStS5VRYyrU5XNVshPxy",
  "key18": "5MujU6ZC6pNa5ks2eL7vn6tr9bwU8XimJLBZaw1cC8wJozo64BttCXWFmd26aebMb39wPYSVuQcLYGKtJptz7q6d",
  "key19": "4KtniD59WDFNX6FjAHqYffnoPnwW6BCm7HybVF58ppnR4p4siqiso9crRhMkQ7ZWT6uWyV766sHG2E6nz6oBfRfj",
  "key20": "48nwuDMAcXTruLVrBvJv9yLrxDnM2d5UvSamY557qPwDoh1e7SYzB8GR58ogvn3V8ScsdooLp9fQEUBxW5WC5kN7",
  "key21": "3jNr5PpG34mRB29eTj3UTfrNctbCBiNeoRLdBHDb3HeTLbrsMKLzseaBGfnLCU3hap6rXQjTPinu1FdgRA8LjVyo",
  "key22": "4H8rsRZSHc7YwnbjeTs8txZf7PzFoepH4YGUaV81jYhNVoFdko63LzWC8ar9KReQx9hSZC3MjMzupPwp5rDkFr4X",
  "key23": "4xUrFZK2JapVCzb9aenvKfJmMwvNorr5np7Ugn7SB4NMGsnoiMsqpqkKaD9e5Vkx2rQDyhiujwZKbT2EJUBmxV5s",
  "key24": "sYkH4zkgakYCRP2ThBB9eGej71cAKp9AfHYQ9pjFQUaTTuiHBLoo8J8s9nNwtpjWFLAydCLQLr383TKmgKr8YQS",
  "key25": "5PG3bHn4Q4nFGZxsiTrZrcUhPWzra1aBJRYpYGKkpsGwQA9kLBdUYmLWJfdEywZQuJMQb4fPVeiF754KKU5hjPm9",
  "key26": "4Rh53yUUQpam3mtYqtrh3JgQ8etX7vE57ymAF2YKmh5APUkJQ4epznx4hjxoBWhbvDMZZPK8JVs9rXjcR7K3ZcXH"
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
