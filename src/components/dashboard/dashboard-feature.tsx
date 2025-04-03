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
    "3o1KhVbJmVbokGVXDjvJkyoXMKcbCqJD4nu25CKAGHiSLbnxBv4uPy3mm3QPZd335sJ9wwcYFdLLDoQyW45vrkCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LGc6UMQ73mncQFPxTivurgVRwqjMPvDYJRhWBWkx6qsZ4CxLQXoAPzJgyAUCH13aJvzTyrU2kKfVLvzWHiQinf8",
  "key1": "4YLYcrSbC4wCHbF8Kd2kvNBMr7Y9qe87V7KFZVC7dqoFGLabNaVKY39vVqJFvuHkHgZUk59inEkjeXw8mUAfPfoy",
  "key2": "3ya2PXiWv977DwevqS369ri1BBBYD42p7BL8LFQ72xYVSjg1uV3KBkyFv3HgoVNFKeZU2vgBVnoza2A8Pc2WSJ9Q",
  "key3": "4YCRYtobsSLXaVND3shYqU82B8o3PZbZwjXxKCCNyR1kWmXsphZsUsiuyoomwNfbwW3bdwf1PzXi4ejtx2KjLKhe",
  "key4": "2PDvCK5gXCnmm8mB5KJvX5a3Vz9NnSCo7Y5tmh2efWvCgFFtrmdsG8wLMdB8ccq73DkZrLanystsKrwrUn4Bbwyc",
  "key5": "59HhnpcUEtNsn5kQstfYMqnYuX9i7BNuPDASR6dG3xc9xDAF12gMUS9BMJYEC73GsZcHM3pmmVrB7yrLZgxsnXMw",
  "key6": "2kPgpERBzy7Q3dVFLEk8hPmCJDa15hDTvioyo6TGfVmjDvq8JpehyKBVmYLaHjpupTweKWz2rxDcfYeSYZx5Biqp",
  "key7": "2Haph4h8MZEs3qJvgtprgMDYNwSLxm84qKL8LVkVeXWemPQb1dd3E4eESdi2tDsv9DzSv5AWVicngnaFQ6ZxgaHA",
  "key8": "3HSEc7cghaVE9t5bPYXrovS3jkSbk9xsUoA2ibw913PKqbSihZR5DBiofN8w3sMHa1GArA93M4FwSdK9EaXe1UXG",
  "key9": "4XYSSXzzhUurU6mJFdcS4YN3T1zYNQBMAtocXAcEZ9rqwkg9pxsW3AtbtYo7oUXVdAy6MPyq2Daf2uFiyizMWqpW",
  "key10": "2JD6sQLqkjC9FPJ3FaPwSR2BDGiBxJQiVWkihhuyL7G6SLDHeK62ya51snxeZw3fqG4BRAomEngT1Lnrm5JQPY4d",
  "key11": "FBHRoeNg9QWVVy1P5v3zStgoKTyXwXDoGDxHrQtpAjgwsGoA6dsUTQQqWJqohXwtT8p5cJSodQwbtJpxYGrfMu7",
  "key12": "25TqYxo4cLLZmhExH6X41S5JjfpAs2BrJNTYC52vinChhto7oBqvKaQk3yzRVTh1dQ9tKjPb3fJyKfsJTj5dmhzM",
  "key13": "t2rwDGMFTLnrB8CqefeA161fJDNnm37nAoEmWSytoXrYuLtFB3QThL45P1yPKNFn2C7ZH1aHQJ3jQpCjuQLHn8F",
  "key14": "5CgWJq191KSZFm7K19mmvx1dpQ51nMfjHSJ49SYcWS61NzV7dUx2xvaEFTf4F3bkSx91RPkNnBY6pMWis9qFv45",
  "key15": "4xc9rPdpfCzNSK2z6NB6kBUqN6Hr2tbhpJPBp5zXFQyDmhh99tL2BURKQdfvDkdCXsoYnXJbSEEJzfPLvZryUgK9",
  "key16": "45qCvHRnNXDqQFwVqeEjH2chDMeaiShXfBoPEhck2FnhsBRK5ME9xD8GSRFgQdJEdtst74P8mejmKrCJRjgdhgsp",
  "key17": "L7GcfpY6b21A2Jv8KmXGBbpwNed6GJLC6jQ41d1Z74m4N9efgpX2q3KtK9EATdiJ7D8dVs2NDcbDXetdfXUrNGS",
  "key18": "5SdpNB7T2tkkJ4cCFRFX4E5KQhNNbtpS9b1zhtjqV5yhZXusJFz1jwW8gxqtAqkvkG5WDaFQhmU75bsUrGWFzke9",
  "key19": "4MMwGhHShB5mzTMfFAWPTJLvVzoYiAvA6BA5iau6XE5BPEpResVRERQETZdr31TqRxYfsFNo5JYbWykQ1vzZ1shZ",
  "key20": "4GfBtgLhYbUqYse1Eg44tNRsCvDA7j4Nhvo6u8e3PLFjLYzKMGesc7nftkqgpyaWGzUnGT3Y5TFj3y1okFsDeEoY",
  "key21": "FkpbH4fddfUFzbK6gYFwyBCZrztdAzvoebzRpnp64GB437s98aZjwcWf6oCeAtQiPVRBUCr3fsGAPwJprpa3gMh",
  "key22": "5mWGKDBbHtXwDrhfwsm8VRx8MNuEjBV4QhrNDUmkiSaskubWowjaEV1ibANrmyNsXySG3z3TExVAjWMkrbjn9Esx",
  "key23": "5PfAYCPwSb1XZhvP6MB8YxsCeLhdMzkGjJic5cUM9syksRwJVVJ3Yt4Fckwos7n9QeWyAcRaX2KAQ1ZAwkYaJKno",
  "key24": "3WBCaT6eWKfaZPiuroAzmKoQEdMpWvcFDRXyrAWnb4C6Q3UrDUzBWmEyMqkKqqjcjyo8nrEXjrruTpNwDMTmdDU2",
  "key25": "3rFB6TuJy83itekpgsVVvN9P2vfz1U7uGn1SyjjVuc8x98XzkuVFsBGY3CzkdPXHtRS2Pjtbeumvs7wrYRFKLJ17",
  "key26": "56XQ576egAjB5qDBR1dhkaqf9Z1zfSzex2N8UB8GVpxHw3TZNtx5o3UNQay8gWGo7j6ivPuM3Spwb9HcqrEMBSa9",
  "key27": "4nqKrfVSFoFAzsYTDLxm2rXsRQThjxjAbgxkKJvZYtJQtdFtaXvEN3hHb9yaedX6gBX7et5hy54kEDuJ9SqetH63",
  "key28": "3MgoLvKHuGQ4EfkrFAVHoz6fKkkX8YV35hNqqBhZSrTiejFs2HJrT7jyrAqw25ePJLHLwMJc56LE7CwqduwHTbmG",
  "key29": "2QdpsJ8KxboRZiEUqehPHFRaTKDJ2Q84LNfAZQSWBqtd28vnPJzeLJwLszZBLdVqe7YNk2wxZU7KCHzhkNx3qEsA",
  "key30": "4MvV6RUx3V9YPghXF9vMc7UpBLEBQkW7TMzK3ZxAjYjgitM4EXaFM2aVowjxM8R9WNZE3233Avn32djkqmsPyn2y",
  "key31": "4ZaKcQjYHS1xVzEeBDRvBFUY8Yx76BmpFzBt6fj2FLC6siwWkTuKsxvhTEGYpNasDsAz6yQSjnzEqxpd8yv5GMCA",
  "key32": "4JMWob57hxvKHsx4gMYjvNAGPCc8WQwn4Stjvj6GfDFmeKnX64APgbyWPv1LFqoCkVJLVowwUGDNogVj3wQa3n8m",
  "key33": "5ZXLKsFajKfnTHG8y489VExSksXCwzrVDz86p97abC72yLAYJoTRE6ph2X1gW2XYL8dLyKkyNHNaUxwZ8VmfpWCZ",
  "key34": "3aCu1LQpJCkTWNRLuYWauV8ZmNkyBZqqea2JTs9BL1HyPz4kCcprjjuaJQ2EpfoAhubTEfUTmnmMqYWYKEdDoKdw",
  "key35": "3cqWYjAwhH5wMhTF4LCoT82J5CC7h13G3vGLWjDXzF11akpprsDu6ksJKL7C9129X6A9XUM1aS4WpK7PX72eF6pb",
  "key36": "He9L3qcJoYZ3dDvtRh4utdbSPFpPg3Kf6K5w9psEeG99ErFY5Lp652fqJUWaF1KtC1ecrV72sF7vkWhzT5YmgG7",
  "key37": "URsED74izXnDbyx2wo2fS6bmPJT2uJX1NngVXkV4iKzNMw5ZaL1mhfKuawKEyeDiwjChuJbLGN8u2LTzKEWEuej",
  "key38": "2ans3PP96XrEndK28VcDNsqjSNC4Q19YzNubDCB49qet6RBeqK3kzyochQpdSVGfCf91Csjix8JdosPy33XAZKtc",
  "key39": "5gikjFZj5fERjistedjdes4e99RTsd9nGDWEXWpKFpLDQc1g6WvD96HaPCg7jZfGNUdevVrPhpahjNyRR7PMb6i3",
  "key40": "4gsKzoKhRwJLkqmyDfCTLWmJ8XaEkizTovnmHmX7PLyFj1KvBtZcJQffk7gZfoHnTfHJrurV2ALibwjJJ6XLVRi1",
  "key41": "3K4t4wnoZARLYsh7N1oohvYQavmDcmM7UBhy9P33KZfF6iYwgv7qq7tRRfxwzd8gaMfTYuZF283pXShZcSD1Y9t9",
  "key42": "3bPNW3Raf7S7DnRqPcPGM3DbEVSCD2wW8ZAtBb6G4T8sQQvfaC3WCpYPxR2Gc3TWwvwAbHvnA1XRvbBVG9r6eCPx"
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
