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
    "2Dspvm9E376cYQEx378f2XKAZnDGMkSYQU34przg2uXTv4M6G51mvcDtsRhZq6QcVmgyEVk7u6Ac4RFzvDXfiBqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1eduJWdydxWLanvn5JsGxqoBW85CayURZx8AwnCnrqUWKuPPkcPrUn5srBJFd6cKspNYKryUze8T51yirLnx85",
  "key1": "35NTTwibuRUdHfQqNVN7yBfV5BFGN3BZATo3rg16XKnzsDnJRKtLDQYNMGNLAJFvVNqMwR6XcGeXtFbFNL92zv1B",
  "key2": "5yBjTZ2FfQq79rzeBWby3saD1T5XAiWfVmD9jUXxZmwtCrZdMfxmzYKrVW1UNfKAg4ecbD8mrZHSZ95qTk7VUtM2",
  "key3": "BaYq681DcYDaixQJYtyu56WV8BUnGB73QwAGseEfuobijWAPm4u1kVNVWyaS96vmNNV7ozYcbfJT9NXqxrSH4CP",
  "key4": "5VKUFbBaEPDnNW75ZNK1CRQuvhA4CahG1RnNPQRgUKPRx2D1XGsEgqStyWPNa3fSKWZqc1VLgD1abuu7gXsRo5fr",
  "key5": "2bzmC9bDXSapEAM25AVABHhf6NJeQdLJ7dv7qa7HXSoYfmzWXnB2SsMz1CrA1UMa37Zh1aShKUkwFs1RCXSw78A2",
  "key6": "5RFrHhqy3mz4JZhRLj5ACYxTAHPENv71F7sqrTxkvsVpBnLosyCYBz7oacDR7p1qZVyxLsBoZvSeCXTavKB6m6iA",
  "key7": "5R5qvjYEnoJGySzYfPyMa9piAMcUrMSCzTJfXX7k6cB5imcmi37v2YdadEv1mEHXAcbMT9MmFex2NqTRpptcpSJK",
  "key8": "3oKgzrLhRXmjrQTBa39kx8Dj8QygYSusXqvJh41sa3sC7zx3KxnoJHYp3yDUtNrytbzvTf9uqCs9hwZVxUx3Fh5o",
  "key9": "2JzucmCy8cu9Vc5aGGp4DvAwACX79Un9y6fzvZkPeLEGKQvwrzFenx8nZJ1sEB8hhf48kyeyyhcqk9Vzo6j257qk",
  "key10": "F9t3LiyRoBwdbLojyjYP79WQdeRopFd8AJ38UzoJk9tUp9wvdeyF69img9rt8VnTSdxGsihryv7aSyoeHMKgJ8r",
  "key11": "39q95hmanNY392QDDJJ3PnuyYSqUTFcePk1bVXmQ6YbmTEk4hrsTeMRAdhrPfedbzuLUV9S8RuGi9M8ALgVtNwRH",
  "key12": "5czEEM3ecP4oYZiNm1EcviUybVAGboykwkgXtZ1jRewQXMehkxzTCLEW7mBXn9r8nsZRRJQawsBYevrFSyC7XWUW",
  "key13": "5RBVou35t8hquytw1AkvBLsWAMWuAbkWri2h2z1w5ydCw6LhdWTwZMtD5CM4JPnk77eJYTuMmRWuE1NjmSKRvRoy",
  "key14": "2AJbogWLijbNmp8RLkZLNkzrTdowtbfkXWXJw78V37q8n9k6fAi9WcQpvYhFTs3SeESzNBaAqVWQrXyM7HmNCHiA",
  "key15": "YrRs8ZZLu2i9VZxri9jcuofee8uYLEGM2aTpMkyFM4JSZJRjMo1WV1xQ2pSovoxMsrcw9jGYP34vwnjVRkSjZ6X",
  "key16": "53mKCYha52Umrn4jtstsYWuMrwYzn7k6GNwazMm8ooUBwv4yVBQihu4rFBFNWzNAU38LaJdXZ4MzgVVHvsQrXD6G",
  "key17": "5DiiEFShhBWcvrFG1tK6SSEbk1qdG5ruUKG5LXd8qvdE6UKBQCSpYCp5uC1QmxxV5HdwXfvFd51NPBj8fZocGDaj",
  "key18": "2LsUPt1MDaZmc9ngS79fH5n97DAJ6X3w4kDBAREw2AsfzRLTALaKp9z2ghz1S2RGDyz1c6ydY6F2gXWr6aqHvc3X",
  "key19": "45Lgih42zjrubYP2q8RqVTCmx53iTnDjYEAjandXdb3j8Df5ytBk87TZy1kCDinrWr7VhNB3ZUU1nTXCnyiiNXRj",
  "key20": "2JJ5J8RxwzyMvoZro7RzrYUDgauja8M9NEwTs6zuWkfU4xAHpwuSsNb3t8Cp2Prphv3pqmWcjRaz3VdfyT5ZFSLg",
  "key21": "4cDtL8GD9dQA3jp9YgmNsXLnwMJ8h9a3d4o5tpEk5g7zAEJxNz9RvdYeHcsj3eXuJWSRQnmrvGp1iaysPabeKq3c",
  "key22": "576KxXxPPmstyrJjvx1SRBw8TMx1njPUStpSXnFCWW7bCgSekGVJ8gmoA1QfM6T7UvX62M4dK2mDHD8ZQ3EEQJeS",
  "key23": "eBVa7msRD4J215DyBtZmPmsYXb7WT6gPiDDmjXfB4P3UPp2oGATRXPHMa8qV97HKEWW7cPXHQVrJESr2bCh3iTE",
  "key24": "5kwVW8hpQKyPsQYA9HzPD5s9J5sbVskzdBRTqAhygaWnxmV85LWGUGrCXsYwkrFKQcN3vCty7EphE23TenswBDEr",
  "key25": "349HXJGphph64qGxYkRTiz6fQ29HJg5HEMjNdv2KC18PaxT1Nn7ftv5fjcGroP9EtDHt6sCCEs9efc2qnPhAQ2Sx",
  "key26": "kPpNagNS5AL4TpEyyX8bkcCSgwQCuQxPvTWhQEBxqHXdsHm2Evb2aRjjWQDXiitdq8HbwAxg7j6gRGLsVKH8sLG",
  "key27": "3qHP758WQzbPKVrYtm8Kzddb1wT1FNLtMRc32d7rjULnvey67FzM7B5LLcVPYzyiqFGWc83asfm3rXpPo58Em3h2",
  "key28": "53isDJbpWrfPsXipPPHPaeYfhKArzKD1TJPZnXhiny5F84SmJdyu9AVW5QA22Q9XUKBYz1DY4XUfdUuD7SHDako",
  "key29": "2XzCsTY1VRYqgf5RhPnRsHDvgP4TDSLXQAPnVzn7QNKFaUFeu9KwWmM5po9VhiehnSViJGtUGJvqqGdPwkQUVoEy",
  "key30": "3EVjjNipUw2Uz9Mdc58mZSkxqhhHbe3cFCb9F813dDyrML3fPcQb9gXiRQSUetsoUTMQRnDQqDoMjGjyh2cb4qfP",
  "key31": "2xtNiALrZLV7jh7hvND4GBbDCuNj38y6LqATFfydqG1yRisHscq5zRQgLSLvM9RQ2hYcjYMcdvoRCVEqNNLgrydB",
  "key32": "2xhrBTmeccZJNMaHCXwbCSz58B6d7HvLuW6ZefkibKdejinf4u8s9tXcYPBAsW3MWVPMiUbb4mLjcMLg5BnX74p3",
  "key33": "4wKBTsgcYkb61XHEB8Puye224b43Axn5w2R5dpaMNgBWD74bwECAmuXc5sFdVgNfbPhHiEwjXqrYcSfvV5KXedeU",
  "key34": "5qkzsabDvkSYUd7vtQCTzgHL7bXHGchuKdPTubLofJPhmnTFTDErfCg6eYubyhPjrSxWaKPfig73grYsg7WXiV39",
  "key35": "JQoEAJmnapSiaQAM6GnKvaZm5snhZKQjbYzMYP1xMD6qK8zd4vstarfMS3DyKFUftKmwyJYkodmsSSUr9NrFvks",
  "key36": "rMCkDBR7bU5UVEr5egsoAjbbTXRzSY6c7FAHDJyzfNwfmGgeLx6QKpGcMp51KCANkYKcDPStS9XtsqJqJx6VRpU",
  "key37": "3kL1Jpk2cSEDnLPkHjrHcYZMYcbsCwesHvBz3xUJmg6xbS19RSAAvtDGHHW6p9tiBwZS3gmdWgpDuWNGge3uTs7",
  "key38": "3Mi3tiVrJeh7xSP7kXvfiV9rdSAvkrqxZ3461dZttoLYQmRMtZnnzVtvBiCPjsSrdNJwn6Y8TGsVW9Gmxp5KHAMF",
  "key39": "kgi5TNGbbYgVprWB1NcwjWeJBDEwwPaRDVDNZdNb4REBjK6iuWs2CrEo9uqsdYNZxbkR7V5S7tKmsV3itdwPg5F",
  "key40": "2ZWq6a4hW96izCyi9ALKkTYaw6vyXEhAuckYwky8o4ZoKSsy7j2L82PCKdNBrhGAwG5A8ZyhLeTjdSVzD8kgMgKA",
  "key41": "2hgECZRgqaM11QD9mav6WEwAhYQ4htM3KKqJdXQimNZGrzNKsSzKqDWSx5mYgAn3Lm48PMaGpLouPysuJL1T5XEW",
  "key42": "2m2t5konZaqmqHTQuw6EZL4sSaYdJjYJw65EFsACXRg6sECDEHvSzLdbqkbHxAxhr8vnz6mP9pmmxZ6Fm8NDrLSV",
  "key43": "4oVm1VCmiFG2kFyELQjteRUGqiqNx3NGgxfjFphnC51myJb4ADzEp1eN1aw1m7PbSa5LTgSWHnpsVzZxev4WKxB5",
  "key44": "CATaaG6924NDwdH5MLK9EFkx5qL4MzqZMdHsrzM5BA7jzHrjV53ezsZFyn4wNkSMZnJ4TW9RdyEUjmY32ck3fbU",
  "key45": "5titjqhFjMDcUFGYoFEZHpGCEVRPpVoSuudyvTxKTXumRZAmT4mQb6cnKnFWbsgc7mYKVap9UQ8zrxs4BkoampZe",
  "key46": "4T8Zm3aeWSMvq99PHShHFJGiyNJnYUmkQSdvE6sivikH1aTHTdN4no7AVGES6afY48eHZFCWhTMDmdRFQwRFDVMb",
  "key47": "4iWdGavHxfA8BJjk1KgruiWYjV293DypQceZBKawmLbLHmRCLCwEb41LR2HxTQEtMcbm2i68uPsRsW9C3mkSUmPK"
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
