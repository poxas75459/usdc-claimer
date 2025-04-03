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
    "2ruPQJWfmgrtd6HmEkDbXfmkZWmwPLu6c539DhW8DF5G3u9i6Ge75Qj64rjVFHjZ9DbEu7GQxbNSBa2VdMGaGJPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrrXjML4HNmEEkQGFNGPDirGiFcFyguSn7dbAGo296p5q7CvwiVi6DF2dhPoaum3D7qoPJ786K6VrMyCQxKeZbu",
  "key1": "5kLumVqeuEaMMEYk4ZLzRb4XqXae4348r4YvmyTK5mFRHGYuJXJjLwmBZHSUaTtwZnFBRBQ5pANQi1hyfdo9LdhR",
  "key2": "4A4bkTjPjncvxzPKjpaxYhdQRV38EpfKerR34UUY5pz4KK5sqrCk52xzSSN9RjwAUBSV7ZCKz9UQyRSKf4QDUvNG",
  "key3": "3tPAspah7VEdRf76oYs85BQYwfcMa1GBuAVULGPjoTwYJMwi9dm12QSRbzcch1DBEBJnjwix3UxnzVJ5Hequ5D5c",
  "key4": "5u5Km3hyMRLh5XX7YsAh4GFayQtKKpZrJBCKuNwYbfvm2MbuxGJaLHRYf5gvSQmk7MFbYdDCeWDjnjoi44H4H9yR",
  "key5": "6ZcmHHDSUxdSYm8RE3DqpEWvhmidWuKn3RhPL4cipLzwVjXQJuzBbt1y4mP22MWQW8o5ZkPAt2Y9y1mi7koTvQX",
  "key6": "2es14zxxMuomaD2VpPuy76E3k5uH2auCmDtdKzGiGQGMyKPWUU88Cch5i5oLEc1R8EzvsLk3H7butC9Lo4BaszGF",
  "key7": "xAG3uwgaTCn5R3umHfuCG77LqA7GjXHBrvTmmaX5J7XBer5bCH93yVJLhMcZcwsdSC2JhJ9sPYyZyd6KUfUeCGz",
  "key8": "WU74EvvJLbgohyqptuFNRATvyn9SsHQqNHZQqSG792xcKUwr6VG716qDPF1LfRMPQRUVwtVutzSWU2CLDtbEWZQ",
  "key9": "2ng7ZYPPysYagm23rd8FKNMjKpbD38kotqyp5NuRraRonLFj7bx7Sv9mnCFaSy9Cjwj2HyizjTt6RziaUJwGRrTm",
  "key10": "5xZxdnDVi4m7H8njE8QVKtq64hD9DeSRTSipmjwXRQuHYa4iN5QxqoXpMDdfqhf4Mvo6EDodfqH6CM848qowiBHb",
  "key11": "597Hy46ZiHhSkemqjtYBvogQeQ7yDW21tmESx964FLGXqRhcYfBQuECyrCa9zZWUGMWijS2jQkeVLMD9sizMQN9H",
  "key12": "2TaibDSkXqgDB5PRuwh6dhLKgxamHzHogkFLSKFENmyRxfDE1kpnGy11bzZhu9HRLXU41hpHGZQcbnHt6XKdppWi",
  "key13": "2Z3ryPvf1kw6iueQvT67aMetwzzZ7hQ9EY4QUFH4HcCYz5dG71TqX5wcuEXRFvubvcD1veHdT832aJk9Kfr3VEWv",
  "key14": "3mX9nFgSfEoVKPEJK7MZ3JwVrjXxaQULpA17qPMD3krqedpzYe4pfbwCg18dvbjEJZqvyufXNpKpXrkPbDB2oVjd",
  "key15": "45f9WdnAmgdGmcKWysES2cT3euUZnbJjjrCbcdFZg5h56RrgQsQAYcuhNDcStMujb82BkRdDd2FGGC5NRj8Y2Pre",
  "key16": "3QVjCv5XsKu8pUd2ndJwx7anpBtPGGePmEKFCvJieaHZZ1euZ6kbRfRBZuv3MPcMjKugZNbPvEGBnX7LZT8rrwnd",
  "key17": "2TfTTxkT4UdizjY12eJPhWvFe3FiJA3kgcnBteiGx9AX1cGkENE1XGSxDmw1vi6zxMayDHRwcP6E3GdGA2JBFT5t",
  "key18": "4StaY2fsns3hm6SxFsRSo1WWYgxEre7HxvdYiTjKdrMtdmTDB1MU1VFAmVHwpHr44RuGS2Rr97ucS58yoFD3CiaG",
  "key19": "BHs6RBDAVMmMHaeEKmXMvG8UBnP6UDYSysgkiUdy8mh3xYYTRMXS1WCLbAMTrrdNC99SgbXynKdMYoHpi3zhne2",
  "key20": "3djtJsVgBEWnBbDKPsayPuWHwRXvEdSaSTaYkaVxJyFMqzmmhXuWo4jwAEFHsdU5ojfaDQ5zrRT8edhgRC6uiD2u",
  "key21": "4j5UWXW8ECBQhMC7kAxCZ58rSgGBpzMtt6AvBiKZCSmW8qeWiptCRsaS8AHskQgQ99Gpp6ZauPCuu9zV94kUQLor",
  "key22": "DkLsoTtaL8iGZor7MzeLGmN2XHJm29VwsSE9uchkiQdwzsvPWH5U7YRd5d1B2GbR7Fp8aczDnn33zGpDSoBYdkN",
  "key23": "57ufD6SxWaqCR9dbY82HK3kWVVFR2yS6ogeb42z4jnAZ873gS59H1MrfWM3D16jKGgJbRPnvAiVVEMmKc7kdiXZf",
  "key24": "V6FPj1DDSXh4XwKLs132F5Y2YSfrRat9mcnVio55Wpxp1uo57zcPwkZTka4mJhiz7wcMFAJTUiDg5dCPCsomBRm",
  "key25": "2QQuJJ2TG33sTvJXiwoRDsqGD5FXfKTFUbckDxFDK8dKVST9vaTP5nfK2N3C9n99caei6PqJmheXf1uQb5b9vVcM",
  "key26": "2UURHLPbWv7ydt3jZJnmvzFKd92sXdpVpVN3RqvZ27wevUMVtiYr8HdeEe5kRNUsUJ17fvJHcs5VSLbruZjHTHUM",
  "key27": "5HzeG2vLkqZtFwJ8Fy8bmYziAybruz73YWZNZvGSYparmBCL1BTbxdVnZ4SuESSu8yaHUy3TsfKxmdt5HwhfNxwc",
  "key28": "5bdQAjEcYrVoHWaeYAFfY9eT8qnUHYY5WcmPTrZujKSRU6KPFR5xGycrQ7ciDQY8BzAR3nCKN9KbbZGLbF4h6nni",
  "key29": "5GBJe67vUU1d87HSGebioDLSPsEQTUX6DZy7ERN6te9Lu8vXPQH4mnEQaE4Yafc2zTQcTnnPmXi4XKdpQbwQ6mvy",
  "key30": "5szcEpDG764EcLZkBPPLRGy1WeYkgkb4WfdnTML5CsTT1zLMCxzLnTpT9EgJwpcqqTKeqNuUmeknsido7EhCxqnf",
  "key31": "sfDKc81KVBoXztfTekPgodKM1fswBLQCxEprnbAUBuAiZVMJhvccMVCF1pkdCnKVeLTiteDrukhSWaYshGMMFcD",
  "key32": "MA94NNKpCCotFFnPzXkd7UhHgMoqZKDPsHzXEF8bUsGTuas67n9qMqJdZ9Sb7UUAbzdjfHMnzpDPJrPwH1C4BBW",
  "key33": "3RJdm19AXRc62yij7yWQHp6SBHC2KdHU9iBbaW3EZ8w5c2vJKJM2BVQMVSVaog79pbiavwYbjggyDW8JcimyAWYu",
  "key34": "2GpyJC6WqiiwP5CCUJ7JxJDJKSXK8DDkuAd12yD9BaVQDj9Ti7ZaCNt5oLUAALgDuL8nQ3QFhjWh2zwBmJYumEJe",
  "key35": "4aA4NAf4rkrCLsP6Wm7sf47xKCaryLnuJ3CbNpskt5cmtHd7X3ih7fV9voHnFidMhMK7GFCWZSsk91f6WDvLVm9d",
  "key36": "4XWj7ptMWCGKgwoPmCTeUijppvHzxBBDdPgCzkTenXm7CZy7VYbwBwoh6ShJVxi8TNy4j6waWTMZ6YpeLPQBuZMa",
  "key37": "5WcxMnko881tBRkqNcuq3kysraL2xyigaMsjW826qASjcRisgEn6kKdyCfkxahKMZtfkbrS6thAL96hvSXVyUCAj",
  "key38": "2HiyMzdnWaqUwsjJjL5KNtTyZ9JduZN7s8SMHcenmahqxNvwa4HkJ647DAag2A4X3q1wpwiymaKvvRKMyP3E7sCJ",
  "key39": "2ZYLuSvFPNRV6iLb1J7hrn8YAWzmCPUigWhyZxLcbAThHvZDZShDD5fkd5PEQb6bPDoBDb9yaMjgHYFDc2DrABt9",
  "key40": "5gwxk8b2qY4ZZNorQ6FyXGrNGhMcGM4L2x1Ua44nxhigSaMPrn9Pnpu2TituYJWLMTebYKgzbr4ertLsPs9kpouW",
  "key41": "5J2Sfd8bBsD4CgHFMPXznNr3PWa4zptJTUyVArVSREAKGSVXcAwMshP2es9NKC7btT7yNn3LcKhpFCjBteKF7Uef",
  "key42": "4TP2azSao5QqZg2ZAwZsJ8KDWwKvEDkbDtYnnrswrLeVAorbf49s59RmjAafPjhVDUrVWJzs3X39XCwamQjxzNy7",
  "key43": "3Tko2Vb7UWB2wGQbGheQkBdZdFgkxgbUbEjZwCkE61apT3P9TmTXSHQWUywD2379LDpgQ9C3QnyE4e5bca2ZHb1p"
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
