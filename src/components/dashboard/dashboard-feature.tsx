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
    "wevEan4exyCEx3RB3RqjE4b2557u72TjFdNJ1CD4QKGScN3WZGoohMvxvoTaJwu1BYVqZ7j2esNfnRi1gFXJLCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEK9yYRn81hAtoSN4fABputs9URQXDnaU4p3eL1wFywDKFmBwC36ArrEDNcoVDTGPsbX4mU1GvPXTSRy1mWxsEH",
  "key1": "5BkK3wczq8ooGopcG1ZLYhWvdXfWnk1CExX9SWpKVxWHvWBxf9iikSZbhCt8kPpockQZVYR9zU23UfpxeDbq8whK",
  "key2": "3Qy4p8odtiDPQrLiEGeVofJ5E9yyyy6y7wxkr9nHsRazYgYfAcEzvdYEm1PpHWnb28sSQ4UqDru8psidr6Pbyb6A",
  "key3": "493fsbtnNMnFUFWc9ipUXqm4EvrvjaoYHyEQZ7QvY78KhLCxTBRKS5bYBc4LQ7MC5sMADYHcNbDs1zkKuPLjD7Z1",
  "key4": "3NrYw45BcYcJo9icwTfVurxMxYw6DBr3gWqjJuCzCjWMEHP223u6hUFMd5vNApLezHZZxrH9dAMyTpTpq9GiZPzf",
  "key5": "5ZAxwBeenEvVJjFBLCffH9msBy69XGcR46odXvRoxCEpmXWY4J6s8HZBXAmXgWw37oTTGsMzUzx3oewYAQ5A1J9J",
  "key6": "36WEgRvAnT8SdZ4JoDGy7LUT7NtwtfeaHxMnptMMrVUPCULZCQwaQLbXG2dteJRXmQVDRRT6jNkXkCmGUgJvCp25",
  "key7": "BMhRUBNYN5JgB1cfCqPQpKS2Q6ghyHgNLKAdCq96aSzE88c3bkznvGGsyuPQJkw6YdktrfL74yBM1QygNVrMcPK",
  "key8": "M158xmuiXyzccTERU1TQ5DrehHBgshQJKEyVi9ebGb5JLnRyZiWyYzbutPBxKxoJBttADczzdZnJGf6jXGvu6JB",
  "key9": "3hNYCpE73M6XvcKA58Lu9w2kKfYNfQXNyb7PuuXtXUNWzQ95VtDecPoLmpQzNscmgHk3Wzndm3VJ598WVUxKj2Km",
  "key10": "2oRUMknf1azDAEzgAUg5aD7AVmqaansVKB6mKjyHNeULEQd1KwWWfDCAje8qSEi3GP9q6UdQN6GLuEmCAuwsJoHa",
  "key11": "63oSy3LJer2ksDNRgJJEqqWAzBqYHzGfVrE3YjLYvf4stsfcyuXqSJryLvwGJUMHxRbpBRYaWUtkGc3qmQb2NgcK",
  "key12": "55ar3Vg83KhCFoqP9TejuMsxRHpPiYgNKKQxjf5QTdMK8GCZtxZx3D4NMfF2xmfqmDxtVVbXHtH46eYBpGk8852i",
  "key13": "5c3hAcBLTF83rXogNrk7HXnUrs82pTvn8t1krgFTZv9zQfsi6koiFpmB37HjnzujsQGVap6TQy1vr2msgdMuTop3",
  "key14": "HdhPRgQP7ZZtUNf1B38s5SFnH2XKqiU2sZ2JWavZjFQoQx6q8PWzZNm5kQ7To4snJeiHxPSVpt7wYNGpzAdwmC1",
  "key15": "4pdFqNDKoQSXZMk1ktUsi7ZaEM1t8GQJDe3J5f6cEP7npKJrvSarrHc9V9rcM2gPnkLnKDC5mroX7YuFmEQd9j51",
  "key16": "4CFfgU1nhHWHqQ4XGVGM2HwYsLo82wGtkYSoyPkcCuV5vK17hEDU1iZkQDRVgshkPkqs2qiU5YNMWp8xuvAPvkbS",
  "key17": "4VGgidJJ95e9DAZmNcXMvFg1tSjmbbkAucTSodrJeFmXBuYPAh9WMVQnR5847KDiwBjDoTcujHMc6TKEcaaXo2BQ",
  "key18": "3KTRjYAgMSxN1Jw5jfmgEVvsfLE4yFUmEuEoQ1SBmoQbqwnra7fzLkBkZvfnq13MkdqNk3BDedyYHRwQ7GvHxGnW",
  "key19": "5xFsK6bsNDs6RjR5qVZ9feMVajNV2z5S9zWvFoYvfJ3bPMJttRLzXnXQv969XjyjcCvZwTwNYikCw9ADhCjZpJ66",
  "key20": "3kKJkzYRgyycbSq3HHZSZTUFaY8FqnjMKfgaPzFsrSSsxDQN3sBfKkFD8aUk9otkgrjGu811fhhFJ8EtmztQo4qg",
  "key21": "64rhnsqv3dpKXYL2W1PfhoHGfdyBYvT5BpPFuX2YorppMFsAomUpvHfJ6ECN3DbQyfLFaFXkNLWHCarA881kvgPU",
  "key22": "m1wmAjHVhLi3VE44k42EUt1cQZHm4WaPXy4vXXtACmSe7gzVdWDM2XYi6RQtpACgq8Kn7t3pBiAtvikcdhKe1Kt",
  "key23": "2A9RXUzooH5ZQCZFWfLKcqnbtqDM1yWxghjKjhhmvny9QVMdVYFXY8m3yLkSxQ5tTqD1bBk2wdxF2NPEgLr22VRg",
  "key24": "4roTqv18bzAci2e6dJkFMCw2UMkMDT6zN2goym2Sj7Le4iKXQR2LTw36PrAKe4K5NNxPcvbVDUnrok96PX49UHuh",
  "key25": "FVsDeV1ENQx8xMgZcWvxaRivNMajHAr4yYtjJdMELf46rzmzoJWtivpxUvjva3h8oVqN3zzq52u2VpBHiDMjQ1P",
  "key26": "5Dqgwdx8Cjxbs4g34zG31nwzaEZTfeurknSi4aLHJse8W7MT7KeqJ6xJftWZPCURGKjs7PALp31Zg1VTVRR3g31d",
  "key27": "3qk86HXwWLLArL9nxxXhN4K4mSBTFqJKKe4WwKgGk7jiiqUYy7gJeyTCPsGXcTFXkc6CSMXEhaSkRXmRJfypncMC",
  "key28": "5etEKAuWr2P1e49G9s6b9NAAT9N3wLnN617gt2fLsKp2qgv2sJSSATKBndvsRmtJds39kenGGBwLwFuABbVSArmV",
  "key29": "vz88mcTU577gAKaWUCwEH5p238MdX8oB3qtETThiBvsgaYCURetUBVz6NB8YDyNbjxRiYVtck3VPJ8c4XVfTN1Z",
  "key30": "2cLCgoEjDDogT2VFnpkh16fLoXd8mCbFv8LX7f7EC7kBincpZjV1Nsm57UVtswnW7Lks7f72cRnXQ92uSfhPJ2A7",
  "key31": "4AtGqGom1QYerBDmmaUT9PzhrNG635CcsiPaax6BTTrxvVGvaAAk34SD63Gq11ffk2mdUJFnqrLvycGVbSqpuot6",
  "key32": "4chGKAaU1USKCSmApotYCeaQ4ypMYpoe3YaT9vqhpahAZZj3BaAS81PQJUSiJWTD3ee3uiCqofptfDghe1UiSKHN",
  "key33": "4hw7oJRi9YXBoeYZDvnDC4rj17595VC3qBT7pkxUTqJnRdQCPhKaFkmCQ52FEno4g7cm1Xiq5B1wCRmY1iiFaLft",
  "key34": "4jQLDsws1zENnxcQzxQh3RgQLka1Quk3UrKiWSjoMuf1vdLsGUJWVkuYyXJNd2zfz3eMpZcuRX2vMzzt5RcLwTNf",
  "key35": "3NYxLSFrGkkcpPRa7Fs8sikXRKMSjS6tuzScft1bkp55HB1jMCNRDgjZePhZERNoD6s5MNTpaQBsUPZjqV7u1nEB",
  "key36": "x2EzprXWUUAbywaQUQRGivWTHNTXe5fMpx1Q4dtpqCa8oTPbMFzvHSHQRmryQaW8qMDbeP7nzbqLnXrd5mqiQfs",
  "key37": "4cTFi3dSjAuXjj9bSHpvtAghdPVJas2jry2ZVC8EdCxGTE95pvkFL6pcpdwptiBSvZwWor5ecwqgvwhne2szZTBK",
  "key38": "5GTZRTByyK7zo4xgG8H2EVucDEkapw7ZNJHPqF2KKLC1NEdS7bqVBeFadr5i3r7gfnej8pUweP8c7vGCNxM4WkZy",
  "key39": "Cy3CouGhkovFqfNRcqyMzJachgSVTsuXTny7x1r69vmF4Ynf7ozUFq4QSV5nL7zVq3b5t2dMdZ5L9Au2hzUpymK",
  "key40": "5GFcCwBcDM4Z7CiaBFUCvwzMQn3sSuGN8bALy8d2PpuKQe8jev2YhwfMfnUHJ3MkvdPvcer4Js9KjU5RCLTEiKBt"
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
