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
    "53cKwGM9x5Lx5upTfNwmiakAhigANMX6LifWrj12vXxkJJTsL7JJpujtu24dYoyJa4uZ69CQwMnKAssJmhPebPzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MiuAhmpxxkFhodiSXQUM512AUZweFT1GxQkVBsKjKDRbDw3sYKmrzaZx8stDRmK7ZH4rxM2nyeokReAF8naP8Jg",
  "key1": "5iSG9ASxzXLAJ58hMdnusBdrw3qnbEDoXKn4Hk42HTydL8SrjgxiFsGXkpb3buM9Zoi6xysUcBwHB6hbC89VWs3m",
  "key2": "4v91XYwuztDtpKRofNAdm3nuE2V5JG9RBoPe4nhfULboFNiiDmif4wT1CbsNxqjUNSvm2W8jezz1oWLt6ozxx1uy",
  "key3": "5BFxFvjqGoFT2Y2Q1VkvECQenrhpG9B5PzkaxumMF8mz1Y6BEjtFNykQhhv4wHkJPR1Rp3aot8kw6KoxaHkC4Vbx",
  "key4": "5NHVC64uYsajiFeJu1g3hQRjkmEwPFcWabjDvi656vXz8tDJRNMKtqMSfNJRx8kMMbAijJDjy6EnCiQAGi8AVXHv",
  "key5": "FuhKJ9c66NRNWHyN9toej2vjU6DorvsMvr3D55uqfLjZ3qwQNL6FDVos38K5wFzDGKUtACqQKGz75oaEy4J3NY5",
  "key6": "2wD2Hqv7FTH9iEAsMPuo33JxyJDewekYuUNABRrPpqACiqbnrQc4CNVVsRWk31iTgzmwc4cTpqHt29yNGw6ngMpj",
  "key7": "1CFPugwDUc9J4qpBUhq73EzvdtrjPGv2cTmEAcf9JJec94XcCCo3gqNtEAU8QmXx2P4CmxSQC26pRxqjkbjnRnu",
  "key8": "pCnYXWs2p7bHQYKyWpXY2fnmKvsPMiYXQh2qKxWUPN5bmEM9b728WvSPKet12WncaW9YDDpak8pdzb3YpjGnmgE",
  "key9": "5Cp6e681wPUU5HtHjrVyEeJ5QDzouqw24za8WqYEjmAjVrNxmEHeEPL9vWpA1xE44AjW74b5es4zuycwffZsE8oi",
  "key10": "55SRwHS9uaotM9vgmEr3y5PQm2UEBM9Sbhr1VyAvVvkr5hC2GbRUR6zSLumuvPskHPCXE6d7oZTV9ZdPpZmmNN6Q",
  "key11": "624nXk7bLV6wUtS322CV8uteMGhm5mTH654XFwQ2iWUb2AJrS8gR24DxJkNRmgy8ELAwb6LpaHYB9za7AqA7Fcnj",
  "key12": "3tF2Cy2jk6JV73S54QUKk7dhewrK4TaYNQCcHmBTsxtF1QuUJKNpsHj7FoWuKMrMWbRAwXaKdZuszy16GFYuM52d",
  "key13": "66xsir1kyfSL9JtMUBjXF1gr1GsumxnLP5ipvcbNfBBXfh1oyPQ9CNQG27i9Qasq3x6CURLfVaKncTK1nHL4a4JK",
  "key14": "2DcLsD5UjG632VhKJwJLoFgQ8VrefZFbwGL7qBMe8Vr4Asa6f16efX2ZVXZWpv1FtDGdaWmf11Bdi26LSQKFBEU1",
  "key15": "x82i5FC1L9xYH8PxRGLaBDkCzBYg9YKQPF5DwwpFxXpxBHYtcJg5UiqM7NMPZaCB5MwDtDEueF7qqFfq6oy7m9y",
  "key16": "4czmnFvVTCZWbaFGezGUxiiT3Waa7YWAbKgW9i3SrPDoDiqjMrA2cTTtyH9EoFFywVoDZeLn5ZgcP8mmSnGbWpbK",
  "key17": "4rXhDqNpz5JjgzkMD9GWgGeNzerTVixxQaw8xzsF9mUSXi854K5X4i9bdqxutv2ZCcVvjARgYwjsuJ1UjYgzqb8C",
  "key18": "2t68KzUZgbmzDkRatAzbmXhdWmfMuiR7zQec86YjGaPp2rxhQ7A6vJtnHYt4snusuX849w78mYscVLcBpAV3RaMw",
  "key19": "2pAn84BBCy9iJuiEiDTFmNZiEWYAyTvnSVeP71YQSth7GutdCnUFjugzR9iju7ovarimUzDqv3r2efaC7FwHSkYA",
  "key20": "4PiwXYfAXkt2SpRoFFGrLt4s26uFKJtV97J9zcnRkJTvrUyPL7WRPQ1zcY8J4h3YpM9zHEjDvJuTm2q848FN6cma",
  "key21": "43djdf6QXv9xivzSt66vPwtRpHEG9xBHgowsKcDYsptxH9CrsGmarQfWtK9XxEjNkRMVJLQpy5Ye7hyBFdE7WJkg",
  "key22": "5NcBh2Gswu7q772kfwahKDTbqUD7WujqHjWVE9DCEexuAEwCv3fuq7ykQpo6bAySLybvwR941CWaG8RPuDhnUnyV",
  "key23": "4NGh3bSPNJoVMCZZFjs3czrRoAgUa3T4bFZbb8HQH4aLNHndA9tEyoowYpVHfNzn2daSXDzp6fBA7kxZA2qAxkLS",
  "key24": "4cBKMQe9xjQzTg7PMPvigCs8ojP6w8Fk1hdTb4AKNcSrVMiYWWCwwMa96p2H2JrdRjGtZMAcQVug6wZhhocAn1TL",
  "key25": "5SeM8SJMkeBet5XWzEqHCmL7Gyzmb5vELYUUsxpiQtxp4BHgTtbEW3HcjQtnVVcohjM5XwbDkdYudGB5zqWfLwZb",
  "key26": "5BaKez9KxET5dvYSAbbK38KTAbisCxE3dqNRLUT2GVmd3SHEHSMMpEevc3RXxYLWrmdSbm1WVzQKsczurZEKLoEo",
  "key27": "4mrjGrQjLPQzhMbq39x84u7K5LajfjMiFhjZv9kPzZyVN4PsfRdpUdMKsKCV7PPp6cevcjvn5uX91fMEyaJh4rjF",
  "key28": "3qY1sTni3TF1TNTJNANcuCmwVZ1byCN6dAa61cVCp9WsBoUSekquQ87JWt8Tt1o1bvkeparNfWpbaBRVPCeP4G42",
  "key29": "4V3aKEjtfzzraTQeGJhP1JWsiS4dMEf2DNcorZ6egf19wmuzgLfGQ5ZbyqnrusrnXaqJjaVu5WnuwAa35hTTzQg3",
  "key30": "5cLCvz9jvpiVKs23n5RV74mWvuDe382WRStyUnyYLA3hRrBgh5TkNxUtqnKFaMHdVw7UTYTgrRqVio7Q9DEd95AS",
  "key31": "ub6RKmbhwwbDkrPnDn4JbTjEiGVLmS8Z7V38AqXrhEWBUxH7WgyZgDeYxKYsWXSqcXk9fPLc1P8U81pu3su7rbq",
  "key32": "5Wr46hD9NSQZ3BbGAC4zXNF2eNviVNxQfsfzymhQBAFcWYEVMNiRUJ2NRkEJ79kJADWdcbCC2mf33oF8YhwZirge"
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
