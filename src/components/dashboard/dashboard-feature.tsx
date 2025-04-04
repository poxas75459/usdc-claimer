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
    "4u9AWcq3DoLxvnGzgQB6JN3DLRQLivWyHbijbWQhayW6vGqHJTKPvxh4V9n1xYtPUYV1Ys1C9c5oivkJThzBN1zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XWHBjmBWKa1Ybc8cYVKYZDKAbdLgrr1oPgJuTnYVv8jXYWMpuU5uKDAah1QSNLEAfg4ADyRF8jZaakdPhMxkGB9",
  "key1": "2fnwRvkPwdeEPfauopyfCzweanJVgPSmhkz2m9LQXHxiFoNUtDen1GW8VznmzEnXk61E4rJpX2FXeBU9qpidiBzA",
  "key2": "1UUYi1nd8BcEnZ2iTPpM9kUCZJh4duhDVUMtVmzT99DNPRS3e4txhRUpLvzmWD5rzC71Nhw8kRDP8GdVarhuctu",
  "key3": "px8Nna5LPiU1GXctD1pm6Us83DkTva7MRE9DwDKQLQ88rBoiPTDfVHHNUxSyoPo294SP58K5KAqzfd7LBkXuw3g",
  "key4": "5PiGphmTkbvk2HHAi5o3VAhVQV8BBQU9L2udsf8aXADNiGpob6j8Y8LFfRqUuNYxx5aNQqJJBUhCNLSbB8ju71NN",
  "key5": "5Ajj27YHicsijraDGnefDkqi1uJnF7CzSrMynM66VGsukfGKK54CBJn87TN2WqNAb34x2969TQ6F7RKGtnbeERc7",
  "key6": "24PZK4caeSLdyqiFWNFeRSujy3NxPErFwXhUEG3EM3pxk4ZdYZueEwHqVBjqJuRcDLzKXk9avmMrWPHuELgvaKXj",
  "key7": "QFHdeo7gG35YwTCzXLNvZL8evQZwPZwChQcDYfbgL93VYrzFXpWRRWYCsHPy4Dr5HN9uR8qF1Atdm94C5AGisbL",
  "key8": "4gxTBoWJsC2zFLjViWnNVafpKePZFXirhN5hMMs7qs2LxZxwpo5pPBdR2LLyfqKkBfZYQvDEYrBcCcwLX3zgYAZ3",
  "key9": "3MqjoSeirYKLp95rjGuoKtnm8x6n5ZgCAq38vRHH1vgn8AqLnh9pUc5TK2sQuet6EZtBUQXpZHxZ5gBJADXEX16u",
  "key10": "3hqdfDcqru4ohMNYCgSCWEyXXPcATfFt5qVVVw5k4yCmofmgF5sNdXwNXwFugo695qv1RBh8HABtWWXeF4Yg1GeJ",
  "key11": "xQ5nCBuWYnUdhMyxjz7xVQXdz19Zs6d2x3rE6xD8TsxDskYnjwG9ytMRbGuxECq8b4isMGr9rGq1gR8xrvXNdCV",
  "key12": "56XWk9Anhx3pag6cpumo4xPw5FoCoGWJ8EohUxPPDjDESVV79YfjQF2esPXqt4PzgUx7ZsLbHSDB73TDMnMV9k51",
  "key13": "3JZVuZMUjLiatyP9Nm4soKgSgA3LE7JAbyrcNsS9Kb57jSCEBEzBWHj2VN36FqhffC9uWzGXa3NpCFx66i1MBzkC",
  "key14": "5i3cHZ2xuwMAY8BYq8FJPuQZyDSEFybq5ztqw9dv8ixGwZAgohfEYadoixQJ6yrNaAqCYrKck2bnEs3Tb4bbsdx8",
  "key15": "uwHdAqKVPqLN5KoGVu4mSur2EYwHCn31L7pCF6QCuu42Z7GkwfTMdnscLiLNcoGsgHSyDcirC2e9GF5u1UooR8b",
  "key16": "3qhM2fKC5dF56wa2W2w66bxfZGU3KyGYFfZDn1qWqdC5oksKQPEZSD4jHKiXkLxPcn8Cg5p2zcTsBpxNBaZbDnYv",
  "key17": "4Pm3mjHwADUyFZdnLFzidmCE7Z2dcETf4tRBDfkXZaXLgwLrZY5D1iaRrnEELkvQfG7kK36sEfRvd6be5WP1FX7",
  "key18": "4ikTxN9vF4T8HyFZgCk2oHZZ9sg6ZABXA7A9Lt1ba1teh3aTGXqoHDURghxdaDF5FZB5VQRSxkTyjqswYSGejUeG",
  "key19": "4SDg6VNw1Y2H9Jfnrjs7CsKbdPNbL8JkPpbTBJaWBBBv2Kidh31DHwLHNR6FnHQYQFxzTHmRDVSQJSjuegE8WegM",
  "key20": "4J6QLVUuqvT81YkRd3jfMCZktU9nLcZBK1ZeNtjej5yJR6RLKrjDfEJgncuPfUqj8qZv4NG3BjpLC8fQaiULEaYz",
  "key21": "416T1qTzgkWJrh8LU485qv5tEFWeffQWhAhFNfJ4rLzejYLdYvh4c4reGjp3Z7VFuruVsRF8Sq5mZPLXt1R28VUy",
  "key22": "49ToGURPX16zWdKQDJte9Ea4mRCSNBv5ecJafWGKYGm5YMwh4k4cPaLHiuG7HKkQowbsiLcD6htb86uVtkynW1s4",
  "key23": "2inqAiNJHbQZRkABhWmc1pNDChK2h5s66gypKFv4gsjfT1PGUcecrq35p3UKRtpJVPFhN29bPNDmekK1MqBNpV4j",
  "key24": "3NDyx5BsgpVAs2XcxsKQ6MTjTC2cgA9YqFaqLz4zPp9xDtf6Ed5upx7SRPn7YrHxqGFwT4ZjzZpkiLma5HCpiffw",
  "key25": "QGbT5xaUvpXoYADescNU7UR4WuLkgT24NtmsT54Wxh18Hsm9Lfr33ZnhJo3gc6Z1HsGoJXtJMGYL2EXpUy91dv4",
  "key26": "opZ6nH359pinT6x8D5mQASeUV5K6YFJbYm68E8txffejuT5SCgPLJfMzyxdXKF3qVoHonM49wbZEVShc2pRi8uL",
  "key27": "5i3npjQ7nfGLVzLgERJ3NMKt1UTa6qooSwnCBGVQ4DabDfbBFZUGdZuMfWAc3w6JwLBoKqJFmbi5LkgbRaEncfSf",
  "key28": "3U7GLNWAWetXjKzGNjBq4VxZuAhRG5W72dT5wWQ8pWtHezFBxD6xBmfevXkyp8jja9QWKXCytxM8AdFFxAEDyC7b",
  "key29": "3yPNeVqiRC995RphSBSYWSYPRAupP9TN78WHAorJtKkqZmmmDivViB2YGE6Prm1uXZH7uQCvyQhWRiK8UzEoJdeB",
  "key30": "4Hv5Gohie7S6epvkJB4kbx2ANhZuFwWdZGD5bLssH6KsjEpCqjmiu47jbDd5JFBiBSTbWbBzfuYAPcxFofpx9t7q",
  "key31": "344k6UkaYiBng16Zg8RZZn3MAhKMouJwBuYcXkRWRVTvz365v3i1VEDDnFdWxghks8NsjHSSoZ5E2p2zbmp5dWCF"
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
