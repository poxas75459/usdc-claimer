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
    "4EMGd7K3DVGUqEcSC48vuy54YVSCb6f6jtHaYPe7HKs5Gr1DRXyyVz6eVWJUXseAbhzHL4X11mNrLZTpUfBdEm8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4rKfRjkJB8SxzYNLhjXoF91Ntah7XQkfeWPZ7L5CqCTe3SusaYLwnD7xd1mWXapWDogx5n54B1Lsbbpr1GkzHN",
  "key1": "62apTeSZjhyB527ubBnbsg4nvgTzToUVFGRYFkrxQrq2uCc9vZfrRSgLFFeEGygcx8PDbrwGYB8VwbbtortjEWvx",
  "key2": "2bgwVWtXBC4cyNWAcu699fu4a2HR8nixzV1iKDV31BCm28H53d2NgSYeEvDctShD8wShKRnCDXwegxnxVnjzf8dV",
  "key3": "2G7Xz8ZVWigKfXjggKBmhP4Yi7KZ1yEHYCfG6zkRHhbgUXrZpQKCRuNQYE1xwEsKtFdLV9ifSgaL5bdcsvq94Aww",
  "key4": "2TRRBwJQjo8TsgchvwX9fVuCfJDvF2Y3wCeRAkJbWLivnGQm4M9aAzzxv3f5wgoj34vPNMSHaxrJxuMcRd3zM3Tg",
  "key5": "H8JdqSCobAJhx2oeQKkKc5Tog4z1McZYQZohr3eP5cthRWmGtqoGawQF4ENGSZKBZ5exjaCQCX7yZVQtCR8ADZC",
  "key6": "9PaqmeKDtzM8jVLoBcjdwzw9xVYTTvjH3tAG9EFkKT35SKnKjS9Luf5AArpXAGBwmjNZFVSA9nquFUWzjKQWqhq",
  "key7": "5Kym2JVAUJdUaWnC4Fe2qtyS34zs5QvTcs86KMHqY7N9itmdk2s6Z49exVdSe7VPsDBeggxay9yPujTTxU9GQt7B",
  "key8": "5g6wBDNEe9CMbk1H5MaGwkGi2BmSV6ijDreeY24gs2akf6nbGnUedkFLSGNU1bwv5xCGfRWpZcsPoT3L5qBNt2aN",
  "key9": "4LPqJ8G2o5XeiD2bHmg9K6QNKpRn3Un1sAg9F9TiDoACboefjRsPGVQMcEtjARsEKtgnS1okwHYQzrsxAPtaRzhn",
  "key10": "ciJ6cAyqQxpGUdSnNgumNDas8GeCXEqC3mqSLurgdczhLS3C5MXE4Vf43WN2gS5LWB17TsYNYERZpyDP3xEqGox",
  "key11": "4habq9Cw12rKJ4i7SnMHEpEz9dAhfDTvVvzMHdsVYMcfcu1bS6aMWJAD8NNF9XYa72otR3TmWax682thjE5nbBhZ",
  "key12": "2qR4q79oGX25nYqcA3T1b8S9Dxdf5W12F8rrDPL4hsFAKj9gvTC8wNpyqSyvnjRPZjyCCihBseMCjHtanGYp5DWw",
  "key13": "4sh3DJYVbHWVi3cQC22mWsxwhydXuSw7q7PmPSFTTE7VxFXqGjVLsxjsJgsN9TtpKro6V6xJEFqQFfKZmSx1JgYc",
  "key14": "4caKiz23JnnpjngrHzv1sDr2HbgVQksuXi1VjnEYzJ6BDAEP9j6gymhN3VQBNmxqxAZKUgFBqcRWnDjysLVawPKQ",
  "key15": "3h87qUsYyrwLnd8Y7ztYbUE3TUmhSjCuJHMKzMCVDogvdbpfWtRXCNLXvEvkveGT3BAoya3w72ucFA4z6ssEiTB8",
  "key16": "5Tq4apPiyFpNpnK1TeEBycq48ajui2d1zhT9f1G2KHn818eD1TFmjpnRNH3YtS1SPkaNwTMuXaNAdUAxhHZG8iqg",
  "key17": "2rL4VSXYTeJH8V2VnuVSLXNz21p8mZZzta9e2o1iMHNoRxFWtARLadwu11XMmGznwfotLmQ4VGDG1Xv7LuoBrVxG",
  "key18": "4NapvvEA5aXGDT8kFHw69BCUGKKVJpUkEk1wMkz3sqZ6pdT3agwTHfL4oFWsZzpW166CsvkaTwzt3AtvF2d5wuwn",
  "key19": "w16HZ4B1XdDXCFiojc8b2fUi7wQKuSn6eXt1iBKRR1eSLqXWavq9MZRF1sC5UhefeCkfbfkDKt9yuapuN9z6C1y",
  "key20": "2y4bD59qgSiq6Ag6wzaeeJnWbZdgvychr3jzydR793KouWzxwpHx7tJSa5PZKrXQcWPaXVPuaQNTZL9eNS2441Zb",
  "key21": "5BCiBPENbJKbqTG7rxFnXPDY7p86yG4XypVd4EAa5j1HPSgWapKQz9pECTAD6uvnt79Zspent6mQ8anWrjt69NUh",
  "key22": "2yFVaPV3oUkttJyXzKiJvU6nAMsLc9g3kG9tLQGRmp2VQeFkUWpURMDbHSdkPX7h2S5Ag83Tyhqmak8ZmK6k8CLr",
  "key23": "3TkrA6Vqguh75tQCgSf5RHXJkVqBX97Li8yjZCrGK1MNM3QdiH8oAd6bv8t23M4gYYwK2rCeqQr2NtpmajRRpqx",
  "key24": "3qmBpnHpfGs6izG2BT46G41g8Pj6jdhB16Rud73kgU3g6yWHP5kPaeCQmNQWaauTvJY91QtHb7gt4qLgSNp6movb"
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
