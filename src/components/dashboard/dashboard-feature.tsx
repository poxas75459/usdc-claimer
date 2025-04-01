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
    "4TQ93RbyoGvCDWXt6AtpkznTgL42xnKNQSsFA6QeoedK1NCPGHb2unARyZkp9MciYBq2mptv119fDre7im2n9zkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJZHgUbpez12FCypshhWnKpBzny5iL9UKsExuZMb726qTbhPZmM6Q3YX97xJnC51q6V6WC6Czn16sovejk8MJSY",
  "key1": "2qgVXszgAd6pm32wXBRbQ76GdBeikfS9eAAFeEqeKee93eaVsj8JKLA478a8Fxyy9Jjqx7e3Zv55HXfjPdfzsXrE",
  "key2": "2yZ72N2hEtLukGfLj8Hi4Sa7zHZyGGyfRhZiTe3AfxCBFzwiwq5275vp618pSoyrVpZRiaEyXLnd8QALi2yZAeQ1",
  "key3": "5rh49XxaryggoRwPvR1oiMh345F8bS7UgrDw34fqZJnmSzDDxDo4gotf9WMjq5WHWxhgmKbyCXyPsH8UChfNSsJN",
  "key4": "5d7isD1xZv4CDumJEBfGBLEMfGx4Xrr9PTCmXapEzrgaDMm27E329rhvmkHRZYWKKmbDVMDLHr77WzkdmMd741wo",
  "key5": "5oQtsyh9wnB26Yy7EHNTvujL64pQTFnMJbG7VRwcQrirC3QhU6AniJ2qqz6M1fxYzKz81no3oqMJ4mLCMFVjY8ff",
  "key6": "5QhhRP2EEmSQKkFtiBxgWyo8sPS938KSNekVEhx83jX5Kc8ZmLe3rFuAvDMreAqwsLMp7gnmybTKARWEnVxgXVsu",
  "key7": "5HkfzGK1y3YsWfgmHQgAsBA92QxAsdX6oSnQUkqZUCgeaVChYpzeX7E9d5ugj2yXbypCYEqBa86SrpAfyuxzJDnP",
  "key8": "3D12P8Pv9iyiVLuFhi39X3ZE5X5NugYUpbzDABkmQ9hoqcbLj7kUnTpsmmZpbxLHoe79tvT4or1yEmzrAAzVdFC2",
  "key9": "4Z1Dy8cEepJCKMrjtFqAHA7q9ga21W6rpNx2acQxkHDwL6W73JiL5xLr75mshgVmUD1NrmnXiRUCzSJVzaKqBebH",
  "key10": "5BuBzTTnhDrK6LwsDw3bAfms8dbvfx9LDP8TAJSoAVsnEWtShQAyEnq7dXCdqW7sfra2zWvhCeNz3XgoxYCaWfta",
  "key11": "3bB5LLfqpcpqbNbjkrcxXPyN2smaRkXTQweq6a4VdCRzbp2YdTmCaPeqrzRMpBbwoJaypaPrtfYQTnKaF4UMbYYK",
  "key12": "52MMu1V8AMtC43aQJGwRvyHwe5dCNGtppJwdDR1Bt9K2SyeHSefKkefoAKNvuytCzZHTgGXNVFv3w7YEXFAmfF2y",
  "key13": "4fjquZn7Pdc2RPmGNE1rL9RDYgTsgnPyd49Awz8qWdCY7ToNCSbk8NfXVgRatYD2VozAjzqaq1PAME4zYwR7qjcY",
  "key14": "2t9M5BAKgLCR5PQDQiQUX9EPDE5PWjw3tF1Y4sMuayGnC9ozE98xcCWCNCe3U2W6L57uaUYVvzginw16rQZdkUJP",
  "key15": "Cb6ZmyMSMNi3zovbf5n2ZrDHXLreTzLmBHmQC1aDCHgmpyRCQgkXNMDRQgh45SQLWSrSDqwtM7useB8WrQXGHM9",
  "key16": "8b5zWRo81x9ZKreFRyLRLHD7Xn8CuWZqwoiYpAZRab9xZXC8z4F6aYRT2HTt5CwNHH3AuWfR3mfWgM31F9X5E4m",
  "key17": "5JyuFHk8VK3wYYja8gksKqatzmsw8zaqs1xC4vm6XzAJZ3fQDc1fKEk72aKiG4hqP97GdUHe3z4xWmCwy2DpPYg4",
  "key18": "xsGqaLe2xMjAkjeajbknikKxZENyySyzUct23vM8wrxbNaFAL79aGaUYdMFTLSaKL3D1qxNJJejPQdhNiBDrVrn",
  "key19": "3hjqeqAAL6du3NVYt7wgaPZP5tCKbPoKbLkQUuCmopcE5ELqrbP9N85dvFEr9XdVCjez6wLKqxYLeuoiWMNSkDk2",
  "key20": "5bbXb1SfM4V1SG5K1D76799xat9g2Spr8t4HsHntSnWbHuJ8ARPb2k2rpRYwgZyYfzbKtjtzPf7ML26mpyUKQ4YS",
  "key21": "4zWvrKNEx35EFfRUfXE8DdbXNKJzjzak6QrKtu3Ux9zNjbWk6LU9hfK1EGMe8rYU5spM8WAy6cEGUq4SCCSvPmJT",
  "key22": "4DVrb3fSsdUsBS9PsCroT5i7fdQGdAuDrj4fDAJqbCRyLusQT9ApPqbeoswywpkAQkWYr4SjgPDPqKu8ipEiAHjX",
  "key23": "55nwVG6FTN1Uda6EjqQqSkB5AZLoubju4NQdPyE9gjnTfdfTuk1vah5rCZ7uPPrCkF58KnE2MCpuRh2E2zu5xTdr",
  "key24": "2p7a24XsxUiM4gPM3f4h1CcN7AcJbf1ZRuEkfifMZifbkRLtHH1NHQ8yYs1N9bU3bp4CxakGSwM8RxeP2amNMtAd",
  "key25": "vgpFEREBPZXTedruPAq8ETnwkxopdarQUBXsckJ7Bxb1sn19ky4wHbSSf9TwC9beMuQ7Bodrfwe2QcjSNpb8vFi",
  "key26": "3d2KBjtroLasUUWwHqNBjxfzKqUcuJk2NNm5dCb4wEnZDR3GkRWP8gyfzbaDmbwiQQ6XM8eyYVXFgs6yq55pZ5wu",
  "key27": "3yuRfBeiuyyf8XCxErgkTnBcAXkhHzLE7smMktm1sJwV5pdewTP1YWwfM5F6XxFxdEeNe8cEDgZgwj99LucCnRx9",
  "key28": "d7ksnri8FDgjJdjpXTizaMrsevfZe2qvEMbUasM5S44y7gq3ZBgVrkSZu9e7MEikn2b4y7RS9KVzzo3kiR8Ut54",
  "key29": "3ePbyPhYK8rnHquT8s46AXxJBWs2MpSs4cLffEju4RCSV4YT17sbfnWSjJ6yErcaVGpiFAg5L7AFQ7wiAZDxecM9",
  "key30": "2usJVKQK5Bqa9WiGmaJYaoZddjcLgCKv6Vg2w7PD7eUTr7chznRN7vHaGJ7d3PT8un1YbVDhPhk363nGgnY3sMv3",
  "key31": "RrHgaii8vdQSKxFzEACfs9p3xsxzrSxuSdRVHs4joJjEZceLnSUgKatKqagKdyHBNpdbgm79Pc6Af2jBD8be9Xn",
  "key32": "5xBEMEsXRxuqALNedov9cZQtfTq12GPsrhdpTGLFu2JLsmVoaMT5zQbKMpcH7MdKyBgkpSyhjQQkENW3cHnPGV7F",
  "key33": "3KViMBHeikKbq3ADkMnbXAdbopdLck2fFxsvfMr4DGQft7vGdPBKXMu45Rzktb3FPiui2hDHDLSoq8pUiEeotHid",
  "key34": "4aU9tdzne3y5ZiMwwwAsM6WicYTsA1b5rBKpH5KiaF4BEvDsy6avpHeJ5R5csXrSfypTTaQPDHD52FA8Xoupk3yR",
  "key35": "4tj1rrDMHtFAigV9YywEinJ8GJcq9yvfVxuxSb9R96ckutZQgP9TBwm1J7ogeB4AbMTLxp7cEwo3gdNFxQVMoVKk",
  "key36": "53beG1Y3UVk3HT1EteEegfBpCuHKPcH9vPApkK2udFsxX9C2h7ZfVaYwDGW9pkswPedaFBKsGywVDx51NwT1WpQ4",
  "key37": "wgLMyK64HXC6XPzyzLx4rHRU7qLadBCYNBdrXLEBUTpUmWstksResqt1BPxjdsqiZkZW7E4Qo8yeHia1CfQsH1q",
  "key38": "5XaQYYpNFmUUSVPj97r9xpBvgbp3ke44BpvuoMfdpxMkogk7PpkXF3VEeTZjt9toNScn539wx2vTaZd8VtEMudJa",
  "key39": "5D7MYvBTtf1BUcTN8i7aUjt5cPy8XeHnzaPsoosoGyCcitHsoVMmPqvN5RPfdRgeJq1YDZzQkfF736GcZDUmyKBy",
  "key40": "2Gv6sUcNrGT7oJPCRj9oh51Qsi9HcXw2SFLrqwWaqHLpAswS8McEtscUYq4tX5imxeNMmhv4aJwcx5gxxnb8ag7d",
  "key41": "46QpKxYQosJM5LxF4hBB7zbv9oM6cZ6tNePfDBcTEeHYXKp2edVmbPJ8XjiZSVopPacVTh8uS5XKaXct2wFfT7aJ",
  "key42": "5ismDqmm9DaA8v52bK7FWg8YCQbExMyHgdF3ef88EiRbHkoZczycxkD1biz18XzHku3wnLNCZWkKVR4Mej4XYApa",
  "key43": "ZjJv58SEAf93Z9Z4oNnUn1aTWbcbHLMn7Tcei8v5vMW1xQ4Y8Rw6Saqr6eaZnN8w1fvARHxqXh6U99VNibhdbhJ"
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
