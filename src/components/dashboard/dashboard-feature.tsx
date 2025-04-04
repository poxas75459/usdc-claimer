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
    "2YX44wbcMNCLVUY6ZjtxsVgupVHrxKsGegNpWxdAGUjxwV2zH4835Y1zcVKS9UB4bBG3u6nyp3kYCmYLaZ4T5tQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFnhfNGA9wJRMhHfmnDWvkPC4fU1kvYL2LhciRdHTaaefzwHwCkJiUj8g2jf8sseZrp9UmeEsg4sKV7CwNeg9R4",
  "key1": "2L4fXQYPEAaDodFDuC7P4aWT1DmbCAG4Mbe6BAHZCKaBChbnaWvNJvvTXhAtoRV64VZyh99DH4qG7usktkRJ7Gzd",
  "key2": "MUr7fSomHmnHDzz8jNu34mxYG1Y3Jk5JfqAgJ3DhqSWxcTaeR7eDMVgMjLc5K3qo9t4uBmKMuHXxqNjT8xAxp1U",
  "key3": "zzJTv77E8f8Puayffn3644UZsfPCJ4516qy4Ce6pBX6Nq9VjbxgBH6e7sYF3vcnafAzCYDAeawYFSuAbQd3XtLN",
  "key4": "3CSH7KJnvxfe17oS8BDpabwCr7KcQNom7YdhFU2VGs2yxRHfHoCziJ4MkcYizqsYGSBvbdCQ3jgw3SBU18yic4Hi",
  "key5": "5oPpEvrJ6wbbYSYZd7NuyzQXPCeaM9125s5PZNWPTPVSrZmnGaRisimzWDWayvso4kxpT655kEKZ1bG2yMPFwJbn",
  "key6": "2qR86zVBAJRvV99x1GoKhaKnGhQkQTTHAUA8h8MKhM1Zov4BbzJfKbBVCPCreHZHrrTQCqoqGAzaxuqhst4VYmYi",
  "key7": "HbcwhSHBxVD4rB2SbaJhzvTfzH75aEtTa8UveRyFwDa69C5HLM2x2mSDzE7e2uzHcpWmb1oL5PwYhyNt6AH9WRk",
  "key8": "26orvZm3UDUoaT3Bg7MkYygUc6JFkh2PmwAroY6zouQgq4Dygr2j9xUFgcCxHgcfuM3hb8iELBzdQ4GPN1vmnuUe",
  "key9": "hf7CEGkyLx3ddw7t4ejnHpYQTJb49X7FVxEpv89Smtj4gdCkgGcTRiMeHLSanuDPAZeXkwZVNKLTG245AbapEXo",
  "key10": "48uk4qvEzXbvM1qLSQskCzNX6N1QkehVcaWVqnc4x4kLyLVGH8K14kdU4fpw6XoCUjwphGiSWTgbeFnzmgnq8RbY",
  "key11": "5EKntnGmhVpLHL1PBUry2HSk63w2knyLjtJmMqdfVAdVUaACckGRY6oXZcCgTmPw2PMg9nQb6xeuhsgSVE1raT1Z",
  "key12": "212hsn8wNNw8H4Q3R14zRsJELWq7jWNFxxLEegD8oMHsWdf2DLvDCkzdxputWefArCtNAXev7e2efbJPGG7C2G1w",
  "key13": "xRu7WsBjechSwmB9WyQfXtZ5fa2qpAK67wttzfFXYKetXiqfepeJZxBVUSCdp4mFUp1UaPbTqR7qHag1AJD23H6",
  "key14": "xnaxyFSACni6FWXm2nomGnHYjWwmy88iuUrF5pzbinyf6TKCEJsuJQuRMdZMbNEPzJHRsAgGc1PNa2Zwyvwigdd",
  "key15": "24HLu3CmcdecuERXqZBYsyKfSTrZfUXnNfgQbB6SRYXXoFBQwMeRitqnwn7WcKvYretejjhQfuq9ahcLa6zVvT9D",
  "key16": "2MHuwGFLm77g9FujiYWcj4Bp3CGwtHzPCAx7KMmhed88FfMg1p9NNsdUWYD8jgcmU2ZBtfWVpjj3Xmegngo9Lcod",
  "key17": "5jF234cUdmpiBNkcameUaXdp3e5ohWJzVZnEKvi8PPrZLEWeJAs5JKynVYBr3bbguNjuXTkWAmrvCBD6W3YUjWwD",
  "key18": "4uqT5NXp6Zbsgf5WGSvHhqLVEUbo55tyUa7UCsb9NHiM4Vqa2ga3wVjdoEo7p5EcKhK5bi6cYykNbNC9ZAWj1CdG",
  "key19": "3whPgi5fynNbdJukSS4QnfeCTneLHhxBLysSKFftN8B2wEvwsp4FzrwxpbGMoR1ebt152Ce71f8wHYxiEge8oVxk",
  "key20": "4jwFfZaBw34aNKcCuKQGSHdMqxNLnmkPtPSwAAH7LxP5odcw6217n4UBL9uUV1UrAwgYJahMH4BM8oufVXEesy6V",
  "key21": "647nFBcfy5f69YVHr34MiAM1ZQrwWYwgwtyfa5D45MznYLFW347S7XLDrheMyJBvJmW8nEQhcetjAtDuMEU5UFDb",
  "key22": "2jzZGWCRhQUgRn1Vt6ETHA7JHvgzXyggXUoi7y3yMZKHWCevBqSQc8DgRqkB2ZDqVMaxRuvAxyGEBUUQchnvqeNb",
  "key23": "3aqaW9T7tD7RpHPk5PyrGxFLcHZW7rpKzN9kAd3pYNsjmyePnyPQMMiEvEavo7o2XxbtxZPxVV6q2YQZ7Xqo9Zbz",
  "key24": "23cUJNZKnNg1G8jGEbt2r3pR4dQkhkkezq7NVdaPrf5UnAuFg5BCZtkqbYCYiFKtocVQMEZTk6166kpYDP4fQoke",
  "key25": "GHmfMSwZWn2WSahTUhPTB2eYEdXp1zhaDkA63uL6EdDrdwZc6h75hgCdPb3HVXeLvSGGBVX5Hkru8ukzggYTFer",
  "key26": "3bdRT5uCM7YwkKPgNzPWwmUzDcxLDUvebdTpZUUxCPy7131Rs9hQGfAR1YF8aEP3Z2E1D4grW4i13m1hsaVTEpc2",
  "key27": "2URNpiGm9BT8c2bL7HTviP3L85BTDPiVeSwTA4jyYhHupFkGA3BFuhSeV6ha3iAx9QHSa5GhUbco9ADjuFHXW5Kc",
  "key28": "RYBKH52wErWeT12hTdkjj2gKZ2EcpBuvDoxKk1LkjePivW1yxg9fXZXKNq4cYFMSQpYM22hb9VEgvJhnRAR62fy",
  "key29": "2Ru5AaSJGdKGXWZcAcTfVsVgfRQWRBWcfZ9BVocPYb7JkxcD3jUkMtrwyhi2WPDUtF8cLC18WFR9XtpKiSnLyyPM",
  "key30": "5pFX68CCoNhrtY9asGnYFF4c6bSXTSScDHESquGKPbKXcV8QNYkEUjAo4VYa1ZsCdWPfnLVJDwd7UEB6uDvPWNVB",
  "key31": "2efU7FjCpyRzQ9o7La2uDccxPjFA77Tb8VMots2MZpu4htJ7oFcdEyw8pWF8Qg8rZexxow7JUJJjwZ2ssj6p8weq",
  "key32": "2fP1hCgcdRQVdJsLH5bcQQbJs6v5aaczi8LQqfCsTMF1C5QFmQzJhu6A292LaxXb5kvmjqW6QZxk356xSQg6H2u6",
  "key33": "5wtHTNsQddTYhrJyEsGHMY1KsF4mRPy8dCpU2rGcJ6y2dzJHWA3KPN1ocL8P5UsWfRoDTAjzm55EMgGK4KkmABR6",
  "key34": "uVoBMRiuMgg7sXzVjmb4AzjknXAxuH2ELyWje4an9BU5erRAQgUTXj3uCawyzcjog8HrKA5m3Yuk2GxPXex1sVg",
  "key35": "3u5L787eJwAegbDsA7Tg7XWtoKA6dVe9kvCQgtt2UYNHUhkHAxaBK1SPbCf6ai6Dmi19HdfMFp4FceUXrBXZWNr2",
  "key36": "5Vpi7DZFM88hmaamAM7aJbSYx25CUomD3dpKJvEkoDYLBd8SJpY6oFTHRohR7JYAZzocb7RoYxb7hdoNnuQuh7Rf",
  "key37": "H1n96BED6JqjXfETxJh7pjhtQoWhxBKGHjcFCueeetcBazkkMohLPxXAEkttH6kStHw4Lr7v2yo4BNJEBG2C48Z",
  "key38": "5rwxRXY3JWwNKYVDysVwzF2ZnmvQeadiRZmrRu8rdCiDrm1Wrpwr3MyWJjn8A88BFELLgFFuN7HVA617XtwfVjEq"
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
