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
    "5Vo6UiX5BpwykutUsDiotqWQdi2avywqrFeogz3wLFjPpApWRHMJysLDLJeD83L5F5WQMY1crjK7C6RirYMR5nLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ARVRGSHv1TwTvmH3NzoJ73jWccoWkG2DGMMj1MBCDcCteHei8uEYbbA8HC1RRosoD8ev9SHHb7GpEXsRLDupPr",
  "key1": "4BKHjdakeK9PxCC9ZsC45xdTqocFpEmVJuvorcvKGKQhgfW8PCzHvvbbLE3randSN9STDwZ5j2BtPqCoPSYtf4U8",
  "key2": "5yCQnqCNuEKSjQkrz7kmvEU1BvbFJHTTon84kLFanX6VEgtmnex1yM83UYFeBCkzSw2xx8MeTyhT9vwhUeuZroXw",
  "key3": "5tuQzAYNjpL8qyc79AtJzJCC4vsF6T1SUhGGDvBeoRmGCCLkj1gT8Gjw3nA9MdH1JtjXeLbKLdvKazKdECq6qweZ",
  "key4": "2kBJKBFT3nfCLapJryjFhb7xvxng92PW4iKcikmL4DBHVckYkc5HC6gqRxYrifC6VvqLcagVuGUpbWjNrqkqbWvJ",
  "key5": "4NhQYSua36vkvZJEEZZTcmYnBiaN7JoVnB1MspfCTMdBhf24sguQiwkLr6tdhhHcd2h6WPoGU8skozppe7JScaR2",
  "key6": "56Tym5erQWvhgz9xjQxbmwkVhiBgnNXemGdi6g7TTs1LnctPpWEiqkiHi2XpaKfwFmhgzsWqZXiKSXSG3sKqwEM8",
  "key7": "qb8ro6Z686XbKz6gJtMoZPahTWwaJVMcXXJJZVWQ9pdXxJpuHR1oDz2UffDPj3w5MgZQwKr3qtLa8ipdSkpeskh",
  "key8": "5yiK3diVw7Q4zdZJDUozv11pLJcQy3jaCg384e14q7QPsxsornK8h7ErGYrKQgZ87Pe8sNvxFoHHvwF8L93Zexaw",
  "key9": "62u53LMhx66ZBFu37xkkhGgPNWRqksRjzyxebbEs8NBjSaxT5nJmnhCceYG3biEWjULDsdshBmLQFc2kFeGyMvfq",
  "key10": "QiSKcUNz5wvh95te9RwowXTVdSedQmNft5kXMkXoqC5AnJrCySsmyRLBgo2wJqxSAZKn3BX6iNG7CXZXuW2ozZd",
  "key11": "2tSEjXnopDXSksD4mtvuKsZoEEbdC2uPyGDBuB9URLU5SiZr2kZKAqJSiu9sPF75fjefsGKynCKxiUym4WvN7SZB",
  "key12": "5wQYAbHAh9irn6MpkJ4Kc4FmuyZ9nzw7AyhkVy2HshB3dTFjpwXftmd2s42iMRMrSY1p6ALkAPE8YkeuRdaYMMtc",
  "key13": "28RS9xAoX1NsRQw7gcMHecC6mXJptkuU9RTUGww53NHCUuRZC3KeKpecwC5DDcfDUwq15pDh3kPJsjvMBbg51yMi",
  "key14": "2UjkpaoyWRUsUmnDEdZ8hGMAgqpqbns1mXGWoc8eYaJ21LaVKfoSG3wVVmWD1dZb32jLwGYedhQYQFLiBnpQoSqz",
  "key15": "gxQSZhxotsaw6x3RGFXqNzWt9MRZ6s1FsGbTbcN4Ev5JyMGYdP7AipJwfbRPt8iombP8sFT8BaPsy34wB8ox9Qm",
  "key16": "2w9gSrW11hjPqnZbRbBDqduR88uCNWn2dZXYZ1D5sLCK85pdYcDmQH46z587wGG2945PtJj6tNzfuegivdzVL8vq",
  "key17": "5Nfs7UgCLBD1f78nRo187oTMf6g9dFDiBjbvEMxNUArdVpwH2kS4hbvVxrD7qGUqTwSwpACRMLDxdvxRi8qYG8v4",
  "key18": "23QZWyrNjAXx5kEhAJYEbYowMZre8bBmM4heh1xU54CCu7V4btHXqoF3wAouSB7szvBuuK5C8bjMaDkBVi6EFrj7",
  "key19": "5HAbRjnefnPCZvhyLa3rnCXc7sDrXMu6KpopRSkB3TP5iKwrJecSLs2azT6H4UxASvzyn3AjmMfVm3R5XfGD9oCV",
  "key20": "5MmbM4tBrDo18HJPnTBFMeyYhLL4eLHy59w4ce3j2Wtivdr2WviWm7ZDCVHytMSLdfcG5ye9rmzUwBWfH1cgWxtS",
  "key21": "4mHWBssqcgAdortyksVy1GRfrZaRj53m7acChXcydpjeLZHbnKjbEsAzJN2UH9V5smbCT3mWN3EWBuNQeJ5dwjpg",
  "key22": "2Zxm3wcoHHbFDExbZh9nmoD21ZD4mEyv6VZQhjTVtTLUYrNz32iz5YTQCWvYUYZcPDqvS9T5nJGp1j1L4EfW8y6h",
  "key23": "2Vxko4KZZ6tU9SEZyPxKYxAECpcUJR4EoUnkQjpBr1aHqWTxYUaG5ZFKc9Tw6CHdAas5VVrXCSEWsU1mkiGPWnwe",
  "key24": "FaYtCoABahL2SGzXW1oDsRdc8iP2fpkkMvKAqEPRcMMD3Xjbf3fMkoCzG1FVQ3iCBJMkWnendp8CMhF2qiUnH3U",
  "key25": "4XeHRVruzMtdJzeR2fsPRKn5zSYFjJtBgjJ25bLhHnUeTiToGP6LooyUmi3x1je9GsPw8nxMKvTk5ry4iuLyXHZm",
  "key26": "4mFoJCpREuZ43dRHfpmdsHL6sVDfoKAdkZDu9SnPEQeAoCnEfoCEcLACJuegCoq5piEa8Y5mzxyqVPNSrLiDJsXf",
  "key27": "3DxnzgLGA4FpCdUwANHdSQ4w4MQncBdPZ9k7pZ2pm1hwn1JR54AaWQsF3aJD6aUkaWVyFF3hsUjn9TRhdmWh4jst",
  "key28": "PtkMRYPrJoNh3XCygH5gEbKNdMhzk8zv1p1LgWFRFSoHib7XHmqG911pswz34hfVQWpMaTTN1xkqqDdXcjtktMH",
  "key29": "3VZXPBva4eo1aXvLcsz4vcrqgBBds5ZJYLQYPSgC8BFhMMF62FiYmxUZCuCX7bQ4N5D11VjX3SWcSUdR3C1gZES3",
  "key30": "2srATAR4ZZ6Fnkv529MNvZUCNHmPc6GrA45M9agsAV6ErNcTnq6N7Stbinr9nSGox94CyMDvAtPjUhU5pLyEtyPt",
  "key31": "jp8jpcUbFJu8V5bZrfap2Dh6qt14Z1jRxxEry5XuzUeGNMpxV23zeuQPdHK4j2TogTUvz9NzzpeVn523cJPb1Xr",
  "key32": "29JuQ7Tsp6eYK1QHaLdakRvFacjTY4KoEVW1c5mnidcwt5uqCgWU73cbPGDfPrWF2CcxraQT7ZsG1uhWCS1wAkkY",
  "key33": "2RLXrTgonzc61adC4i43mXDiqqkBXpv24DxENBBegTw7zKUs2LJrGFJawwk4JfYiUsb8KzcbTRrf3ny2Hq5XV4ao",
  "key34": "67iiQ2eufHddggvPYwgnUXHWeq4KQQbx4iDDgY3X85XSKH1cGraU2WqEPxBzHr9jPSRuuHThmhCpqgvJBzNbh8Ao",
  "key35": "2joRPapK7CyqyKyYCMNLz27v6qWNGCKtbkTAVj9CvusqzRgXnYm9iAViMPimbG3SmzYKSsEJ2Ke311vY7tmA7UW2",
  "key36": "4jcuwoqmiyg4nq6uTDXYgC2Qa9R91Kpithua7uGetSaFyXD6udiZYvj6yUec2v1KKoenEmZWkSZQPnXQdGg2XhQU",
  "key37": "42wzZr4wL9j7q9vQcfQUdgc85YaAJJ926vAVzoGPgE7FHnDcWzts2a9X1Ab6yfxyJqzsMUyvnPGesKCyxKLuPmsR",
  "key38": "3aRRSCSKTPABB5FHR7wNqUHgaZEW2Fj5G5xJrFFX8FMwRQu6aHWpYDY69j7azH422VPNnGn2B3WDoUCMXV2XPVfk",
  "key39": "3qfG395NKVHTrkz7gCUwaVoHH4diL6cyQU8D4CVLBysTNVUtEv5kCgWECNXB6ecZqAhFDbkoFTsk7y6zANjjVzrW",
  "key40": "SWGkGNComdrE6WdRwb7g1hUoTDaYsQu8eJnhgEYDBPQHsmbPhhSUvzfMokjvGSBogB9qQLsyqiXzBoCAEmbnC8T",
  "key41": "2MAVbkYPM8Ch8EmHmasQF6JVEYv4Sq5vSeAn8zXsbJnVEdzpYcSXBztEkgMjWUHmRAUCAJ6udxbWWLX5CKhJaKAW",
  "key42": "2mftKYkLNE5418q3vwB9k94KDg7yjtkDPo5YRDkLEaZ76fAv2fqvrbCxMwU3teuv6BtMEq6TmGufRv65RDgTYDRm",
  "key43": "4846HexZxJvipYMc2Lw9rPL7ZJH9Y958kn5KEwDKDKQA3GABSSNH8YoMe2umxoEbydhfWADYUp1sWsCeRg7rvvU3",
  "key44": "PMutD8h1zjsWJ9EHkPJULQC2oSiwP2v25Q2b815Ayqqn7rdb9ThjuK1Xk2y4oVftiXWr8dU4TFbbuVfPDfASVz3",
  "key45": "5kVKQ6AKoRaxUCjJnZSk4BPxaFNyoMJxZ16JEDBdej9XDTCz71G92rxsfrtC3zGRKWzDQPyY1QAuX5QHUMFbm3CK",
  "key46": "4BHsgxjecV7cDNSZvaFXWqbDFN12dsFwB7ZtrnsHBXpbWnYUR9YBPYvnPpT51vEPeVPHdSyTVv1JhpG2qtG9ZHDe"
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
