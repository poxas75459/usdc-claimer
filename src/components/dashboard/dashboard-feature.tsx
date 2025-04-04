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
    "5Ft2NsD3fTjMMSJkxcsQQte9BtDkCST7cJxzFKDKafSWUXn6tRL89eEpfr5LGUb4ELbhSE4h6kpUoaEy22TexswR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iyjincfRWKnd3ibZ7weN2GABvCdfa9TWtwo2624W3AyyUr8aAsFumncvFZj31x9JvYPhNpsWAbtETEPzBhgYVaJ",
  "key1": "25gVkeH25bLM4CyFdyx4Ly9FQLe7LnBgdeScw3TXg8DxCrgmJLCmA18otebT83ZEWkqAEFNUpBAPvxwriGwhagHX",
  "key2": "4Zet28n7gmkyb3dPbkPn63iz6ayS59JAAbe1D6z9Z1rWNvJ6rcbzgASESRdHguCGkhT8jNRwdXq8gGMQ4CWV64Dg",
  "key3": "2WppDamvZZbZ72ydK75eLLfHLdGTr4uGHX4HRStt9VCWpF7X2LbHCXvNkFKuqEBfzAUn3XEDyxYfZpjcaMwfAVGH",
  "key4": "4BhBT5TnpjHiUKpfAEEDvERqYXgbUdQQoyqn9eanYuC8CzHf4P72qC8PUM2JBQS8Xxxftx4KEtXBxgpockx6t7Hm",
  "key5": "23FZrNwzm6HSXitePWYpFoTot7gihyCZMzdRvwNnMydjPkwrycbS58CGJUmrCo9rJNAaL9sb8emBXmPzBKRTVJGm",
  "key6": "5ooNichjSnCozRGzZX3ejN7tr3fQMR6yHDaxNoT55LzCJ5ifBMoiayXnh3vctafrr3zkGMjRF6m3GemvyHMk3xSX",
  "key7": "5FvX66VsPbFAzM3YfXAbYzSJCAtM148MKUYwK2bD4YKK7gccqvzAuCyw23aEW2qGCdCQKqTWVaaz5Zv95T5Um1w7",
  "key8": "4VAerRKifq4RcSLCDDusQVmzpyHxtq2SpbDWrzPe23GitALyBNQbup5fB1eswwEmzkQGniAdH3CnDVxGHhdq9Uye",
  "key9": "5Awxg6ToTQmd4hHRbLHsobLEGatQWosr6UR89Sa3nmbEepw6f61LJYcephgzUoT4piZnjjgi9uLp32HfeB8c6iGo",
  "key10": "3nxHE4ixmKdEmwbvxD29srVJXag7XwLSHTigRXrbqm9qxSQ2QCwvVnteoMaDpJTphETYYmBzUZq1j1BhBV71EeZB",
  "key11": "2Vo8urBvwdRwHW3giGeCSv3oTfzVBMieEH4Bmv2bBZwi3kiqc818GwRTjqWAJKNPLmcLif5NF6fxS3nCrujMPZeB",
  "key12": "42HZQZyYRDvzcpTuEtoQv4Qj478iuQEWF1Yosx2Q6nSgrKzZ4p3saXEGHyBwtPSjxGLZPjhxfu7XNtj35NY5Yim4",
  "key13": "3rshM1u5aK9KkLNfvcwqqyvYZwbKVBwQ7xK5y8TSA8jVW23koGTHkMpM2hs7TSSt2tdk7dN5UFzHT3ZQNAdKH4m3",
  "key14": "3eJZtiA48tqeFfooqG4hwPGjj3VVpTVbgWoFfuXu9aZX3ACxhiUGBi4pAHctgXr72V3d1UiGU8rvkZGi5J4mcZiG",
  "key15": "3dYEUFMZoAfo1yZFMqe6ed92k7vbCHGf9K8vJtQS6KCLobLuTWyxcurLURnwapkVz1kP6pEM9m2YbfZnfonn4Cho",
  "key16": "22p7ckh2ak2C4fXfdqbyGLv8ntYRX8QyLQPPetUP9ZG9QjB1iRMtM6yYaqxmvavL6tXaWxk8NTofQouo5ncJ1kDN",
  "key17": "3wf3zZVy4NnNoDMawKR8Mu9VvqDdAs5RhSze78pt5aM1qQMjYkWcmMDRvkd6GG5kxfiPLq74j3B6Wvx8v6Xm8i5e",
  "key18": "HydfY1S6juDhgCoj9q8ghUBNT7Ja9HZXEY2J3NAAtT3yZxidYHE9WXh326mNwV4AJQ1vpQZ3P1wYtpMSa6bgEWh",
  "key19": "2Y8j4iFSELrpFy63ivybumz418p7xeDZsX3HdtapkyWhgNvb1oZy3ek3d8R3giAgwAtzQ2EsVVE5ZYcxPu4ez7Tn",
  "key20": "56R2GQ3hNLZiVCTZ6zYeCCbxL27S3fTvKGPh5VZneEaT9WE6VHfSSsYLP7bS1hA8BtXsZhKMjsDwAqrjzhZwF4E",
  "key21": "2Mft7DNCwmuKWR5Py7hsKTw4YXhhNqfi6mo3ZCvsPTnwTxJ4CAZYrP1KrHrNzHooaFCgcrum9LyHNyMArK5awXav",
  "key22": "4oAiBeagvvtDQ6WZuQC1aVy6wvGZ6sLpiRTXGjMEi72LbdmVxcHYJG8pmnCDAWR7wt6ash2tAqyUR84KT7oyQ4Yn",
  "key23": "5i3R9V6sT6jZbHp4zEvJh6i3EvQhw7PigkbHu6TaAFdUw65uUCoHBkXj7S6XPSd1xw9QinuAGjysufTsbEAXyVCr",
  "key24": "2nx1SJhAdL71jqbt5p9f8kt1zBzZUjQyHiLQJUAHytm2VpPf74MkYWbk8kUcBQQYpzdNjCrS3u6KSkGRji7VhvEE",
  "key25": "2a8TcPNqsjWXJyXXBMnfdQnYPTDm4Nk4YG2pRUwdzvVRxso3QyGbBKMnMuVyrThGNpxghfUCPs7uyLW2BZQkg8P6"
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
