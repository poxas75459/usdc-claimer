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
    "2P45YubkTKEXiCnQK1hG24cEPvDeoWK7iEPPHFqNtBQaYn98H9QGnj54tPG6Hzv6CbfXHmHBLwqefFq6PpYPaj6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umbweXysuBLHDhmUJRXmzHLMMtjFzkXmc47rquzDpPFLhn5hczGXqJvVStoEKV92kyZmBZXDiq7uNdQChRytf2f",
  "key1": "5nZg1LZitbARgnJshREfDphDJGMwkVVnxErwHVVVk5fDiFegDPrzEyayoSeDHjFNAFGVR7dwU4rZaeCPpGjiBxtd",
  "key2": "3mb8XVEtzcmkcpfUww9mrXZwDytF2iNkyy1DEH8AD7hBiuha2hrtcvHYizBVkJzuKiB5Vii7fc9pG8ie4fFNwnYH",
  "key3": "24boTFvcuzrPnsFEsmCdZpH2s4PSmBDGfgN1fNG3YiAQjf34mZ2XEz1xkWVsg6idDTPSCDFF2BpcrMJLiiDeHJ6K",
  "key4": "57uyP8rRf5jhCryN4EUyUFxEVvK4TMbqJMHgLKES6DtwVkSy1PrTUrW2xJ4ayPMeBHj6n7FR9qXd2eN2kYtJjjw4",
  "key5": "4crCpt53sDHpxAQ9StxKt3vBwiaq6g6mq9VmDgRMTfzRnrsEyo77aKGMzngf1uAXHVrfFx8TTBTBqDaM6wT5JAiy",
  "key6": "3h3JYmb2AtZisE4ZhoSLPRwLiJUpkSuNNFhEDg8hNnDjqNZcWR7yYCmLtoxZTNNM2WH8BFttUK2CpK5x9piS6HEZ",
  "key7": "5ipWjx3RcoqdGsUQVeFRrGCzU4V8MaHVuhYKSByPfc6FjsXEwp9VMdBCydDu4GpsRorpg1kvSEbL9R7CnZcSRAAZ",
  "key8": "5A9Wvf8RfMBjy8VZcyWBq8yHEUEnzK2XscYyR4i7pZnEgHYFJwLG4AvKHGMPFD4L54MC4AAAEUHawHV4kX3dyEZP",
  "key9": "2z65v6zB4RNxyxeqRHnNgoJjcEBoshSveDkCn4FUhF86D6kfrHDpcBPo7uGUzVzXcpbtvbbLmNcu8Go7XMspsCCx",
  "key10": "8Byty5aL3y5CpHdRbPAxJiCv9CGLnWFsEMm7KBwUxvVKqf3SwokDuij4QJwVNHSevfMTCJpPtmwjWbwzdKtDShx",
  "key11": "4fv1vGeyDA63brVsawGqEKkkLqSMw12G6mzdvo5e2uvac7uejgp9tpa477gcNFfYAPMuN2iQ8DfEfJYT39ivJpWu",
  "key12": "2VyfFzBCR5udF7kkqvepJos5bYzBEk4vymaxyeiW7eCsAEyPXvfKejbUY5aSjDHATTysvX6Fep4DrYXrq96Kxo8X",
  "key13": "2QAHzfPWPvxfSCqgU65Zx4BpJBxBkCXMq82azrqZWKcCKh4hJtYhYqgaCiThtNfjmM3XygkugReAuhSho2SWnop5",
  "key14": "2EAbw7mRY6A68mTPVwh5iC52TJKiMW2ZSKcxeDA2pD7frc9ef9bgmvRnVwfvskwBPSjk4wZBo59WZZQcY15HkSab",
  "key15": "22pvhx4sfVvoW2xWkcJJD5MkBppLoxHPMKR8tH21VAeFRFChh1459YodCbqHyCJ6AfnkiZYeJANfLdWdosFmLz1L",
  "key16": "3V6ZTdrSHtBQKGfgFjgXi7qgX7DL6sUSG49YtzmKmLbkpjTSzJchQGtfTRFCcaBMtb7tL7eRcbYZrrBZmvqToMHE",
  "key17": "4LaFEtvFwEyp1YsAktPg96t74aJUiPyN2JDP2cvgY5pBmutFMzGvYEiUg6TRtJxAiwC5qMWfzXPxPqxYqRWJrCxt",
  "key18": "39aBTRKNBi9fYpKQrKznSXLzxFtv1Ewz99x3wzSS8TNM6aR61kRbpMtCCPxZeqV4kNHg5BpfC3c9REu5griUziXL",
  "key19": "ovNoD8tafdu1nQ8VAbrDgLG8CbikdVMZ3TX56A5YomHMgnXMWH77yrjoAdTjxMAomt4shE3ch7GSCgKo1SAhYyj",
  "key20": "2ZSo8TkvkSjekbgqHdpn92j3xk3ZFZ3NjuzqeG5yVrFPN3GLC43nVv4MkK8wQ5PpGERmc5bGpnuEp7JMiFa4YK9a",
  "key21": "39qRE5qx5YWB796kWkUVzGiDxzA5Y7dMjunVjVhYgZXr7ZvNJXK4gppYZE6sr97AMR1hncLgfayoPwUkSF6ZoyjA",
  "key22": "5PAANfVCQCwxsPcU5TyTRnUR41qEezoJrBU7oaLmeHK5GYxyxfovjMxvvXwFPckP1JofZN3oJPi4G5sxdtbaTDgW",
  "key23": "fHabpwDgxjK9c5NfYniNU5SyndWLWArjtGRKHinWocaAujixb274cduxntHdKHTDK7aQdr3kwz5sZyV1vTghobU",
  "key24": "K7KohcS1GLWnAD3Dt6EZtcoXhsBojKuaNJdPnmvFpFUViVknKSjK3uQGnT9Moghw9YZZ2U7Xstt2PRnVQ1hyfjw",
  "key25": "4sEjppgjyn31XUkzx3mcXwwBkc9AHM2VZbgDYZLB9X6KR4r4NZppjo2TGpiUvJShMYJeoDPFadXJQ3ARFRoTbqm7",
  "key26": "5JUJuMQ2Cqsojiu9dXmpePiT56g1VHy6jXSTH82ATujeLfptKZ7uCs5miJQycHjpRVtKprBzeFm4CmmxMbuigoV3",
  "key27": "391fSbjDr821WxEYZsJCJ8UHS7DZ84dBggu6g54pEiYKDn88RUWdU8St5yD8stMM539Bomxubp2X3EeRD9fWwRY3",
  "key28": "3FjRHaDHmRHZTp2T8vcLm6gQ5wFDjrtFem3mVLieqH5yeA8F3TfKmZWzkUKbXj3UQcqYcmXnSDwHXgDnCzeQJt81",
  "key29": "cDnAhNnhv1YdpNJKUQsE6brizf9b8pt32jjCukgYyRxyg7Vh6a9MLVmSq3N8THK8pD9acGGWkC7fjgcK6r1d1Ys",
  "key30": "2CyWSz1Ue9GP5sVjKRJeqLa9GETBgZN3amn921FPqWMKmGxfC7WWPLjPZhMoUTbXeT2VQ92f6oJoATXFoJ22UnUV",
  "key31": "4rYL2suN2pSp1EhXDZ6zq6BwfMKKqzMKoyJ16ms9WSi4qYUcf3VTc6LdW1UgtadgSVdKT6KQXH3kuprMfppAfcsa",
  "key32": "ENoaKZRRpuxHagciYmM88sUDcWYVm1TDycPPD1BQsPmMNCLxDqgrpzLnX1CCsFLzB9ygHNHzhBnsCBxWsuexgB3"
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
