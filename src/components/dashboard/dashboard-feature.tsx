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
    "3VhwoYVQ6YhMF8Z8y5Bju4vPEqoEjGxFiCZAVVugT51MiiE8NKyhW8sxoHRNBqz7eUguhmVEzQ6GE48J6iZwmBk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttQw5cyKgb6XfKjGAk9TBLSsPdf5BGvFX9Y9pqAFDP2k63FonVCPFdPTfMRPxzo2Eb5wQ9hMSaSbt86k6xiBFiS",
  "key1": "4wqLdBmVt9J3qSJMkXo4TPSGgc9mCWLkdDiWKfW7HxvdrXiUpM9DF5Z8VmNES3c5F1UPHyDcgm3jv22egSSBcQCH",
  "key2": "4PwvQy1tcA9xERuhcZ4JsjsqSDLFC6w8SuWFewa6DqkanZ8aNuUbTRwCvNLULuk5zDPDvJCoA68ptqjtTXTjYTEq",
  "key3": "2sqUQLYa1Qv27Mc9gMadQ4PHhxyyhfk1RFF7Wk93pkjE8iFSDiGULTFGV1AiwcaVD9zysjnUmLMzKJU6c4QQckJc",
  "key4": "4Q5R9jeSWhSshVaWdL6oXf7E8mFiQQvEC7C8qVCnp2uMEZE8gjSvE2N6i5EfUgXCoW1gTkBpmhQwAY9uiHBuT7vn",
  "key5": "4N3Wdu9JiagKWSg87K7JpdUXZiHZPC4NwjXCSJCe8pxzohDi15fUJVigCD7qyZge5UodJz63F7o4zstb2LDwGmF5",
  "key6": "Sbrdw4J4LGJwoHZCjVYtHZxkPAkFDKQ3GnKEpLh7QfpSVWnLC1QWqv2x3Pk2kfpjJ73VGNGSWybzy1USVG5U5qv",
  "key7": "2vDVXYXbfVbqdu676Lqh59KvnphJwfEMgdvBp9ax7fzbUdXscsQYukBv5kzkHJvmDmCW37mkJkjvFpitj5PLqFT3",
  "key8": "hW9rMtZkP6VfSWb1B9ns4wD6EyUkb64WWv3zGqKHKF9rJ7sgK7zGpYst1w8HEjTE4p59RFgWJLMHAtR5uDWVjnP",
  "key9": "2CTeS6x8byqg5SryKpCzuwCN57FkbxytGpEAkZDBZfkKyb9YYhy6H8JGRwb1Q7L7i51ZsAYfzBYGdvjofMY2goFL",
  "key10": "47CNhDSxy95MGKDsncYHF68vierdwtuvef8mt8Hu5c6wJ3dtyjFymWrNqutLmKZ1v2KE9SJm8iBNSj9XFasTcjMC",
  "key11": "3smA7VsvGx18G273YgBNybyE9ic1XFaSTb61joTBA7WHeLwREKvCSH5SGdjhTq61eyh2n8bcXyCN6fXWU6yvZPSD",
  "key12": "3ugy5Rr9MfLLaGuF29Em9g5Yxe6mpTApMaibWjnazLhuitiPTRtVrtbTqB5L9xwqhegod9pHRAnrTvYENNG8krqj",
  "key13": "5xUijRZSxPgeL4gpawPBwZMNzTmJHJDvfwVopxjs7QT3bpz8jqMhbpitU8WUbqpUMu1qDghRNJrEju6WTMU3xH2W",
  "key14": "5KTSkNcsadXUbMTac3qw4MNuKLGaFnQBtVSusTg6pTCUFNdLyBJuyB8KkA3Rw5wWw3KBrWnvJUNhhQ7NMjXsKpVa",
  "key15": "3cZxEoTdws7nEYULC3q1didaeiJJKmjpGARXxJ3fvCsaZbGZwvXBuVqCV1fucSs8LKX8KiQvqUvvE7yS11nr5RJH",
  "key16": "461fY6pwjciyfXi1kWcsNUQfNjesyYah3tDfjKn7k7WrjjMTiqqXAbUvYaZyo7AU5qkYUu3bXEjf9vQXcghKweHK",
  "key17": "21UhMuubGwBiphQrWsvnCKtzKLTAhs6SJuC6wqJiqTJaL4vT4cT14ERmwMAhpQTPiaLr94Q2SaFeFhyF4JPKJ1fR",
  "key18": "kK8FzQHFJEjp1EozcsQLZ8caAz9beLdGM4xuqyQ6d24LYxdtzhbRziGsj6hFgm1sue7twJSac8D2uAzyENDzPRk",
  "key19": "2QP8Qd3gR64dnCe4VDkTSXaGY5GpyukWb9Gg5mDdg65B6nrZtZgm2KoPqi1MmByHmsZDKLyVRLXcwcjhW4MGS5bX",
  "key20": "2qMMCRgcrM8cRS9DLq9cUR2VY5wXCBuUmWWAdnDjGrbNg22s6kXMDa6kexn8EiwuMceDXZcsz4HrWJ6NnC5CpH88",
  "key21": "4XCjKfbC36qqJktxBGXjcXehAvKVX65NTSFphWomgBHNL5SZf5SwRVaYERiQ1iQhfEnYx4acQ5s7ncryXEJEsoND",
  "key22": "5bRHk6aUn38TZt85e4hhdtBSBs5q673wVjk1YACzAszsf8V4Ch5JXH7ZdesS3ZXacKZBvJ2RACYJxNbxXQMpmx4a",
  "key23": "3K4gtTdnhYF4nEVChWbMCckmYE7uP4m9DM1Dq99oj3CwUj1PYoKNQDKfbg2xfKh82Kaoasr6N2kq9mgZgKmhDrxZ",
  "key24": "5cXr6qCtu7EiMgoVqoJzMXYkivm6NoKj6FovFX5hZsmEZNxW6upgvxa8a1pmVbh8mvBuSNYX18sbX1gHahmB2hnw",
  "key25": "5hmaAWibvdMAttr8uC59i8Ph5GBPkBWydWzW514CU4tvH41ajZEzC1C7BBpuyS44mSb42L3xPvqtaVzkrqreRxAT",
  "key26": "22qNujQweMFG7YpCvmLi8n8vFNbJ7VRb7jZnLQbg6BJT4QexBm3r27dSTMDof7pe6rwf3sGLJGJSFhWhHh8DcYux",
  "key27": "2A3Zgedg5GB5baZ8T3Bn6QoGtTH6L57mQdA25V2yqsgxWrdM5nZAn3QPwqr8RXreEGv7qBWH2WSzfgPEvLY9Juga",
  "key28": "66h24WjcXtGu2UAWYqh1GghAwYyiJsaWZdxkZ9PXAmgBdDDhhZKjhU6Po7ae3NGf8YJbYRar39h21p7DwZabFoA8"
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
