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
    "3996Toj5pGfwvzLNzdnJNNhpUsFiju2mSdwcu9Q94o9LsntGLyvqgak6bKQXs8NyJAu231H25minPh4uFr3RYkSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gkX2HsjrVwChoEQai6mLfnihDZXaWYSRn1Grev3kjLQksCkNpkLQ6mFV7GLkmq8hcuRJ2f8STuvuVRqAhzPe5P",
  "key1": "5AY8RkxGhRxTAjs61okXPpZG6iAdgcCexif8sGeYAuefQxDAfgVap4f5VRApQbmepdCsqUMCN9DNQMkwGQNHo2Xy",
  "key2": "5X4cEbpDmfTDVvz4gEbuNKUvZZ1qbojsS6XN7L5RvfZhh4xEvgmzm7KZKh3qWsTmMpssDNzeiKdi4BTPwUmsaAxq",
  "key3": "2tqBFT3YtvQC4rh8PH2sZK28492PH1e53n7367q9aXPb9yrisj9dUQ67QH5iG7YJFYwU6KZ72NM6r9J71UTcF6a9",
  "key4": "5zTZqhSAFd9Q7W6EdwkdZkeJWpoUqD1xU9FdPQ9wqxEyU8qiZPK6VcPpM9zD4Cv4FTmM2ZwL3CajonWQ79ZmNGXu",
  "key5": "KDoKK7eNA7aFiLe3Jk2XiZ2S78LjiedXUaSszmW1vMsgGnwhpXHyAeVPiXEXofoc1z1RTdTFDMeSHw8UFn7s3X7",
  "key6": "4XDRrBhYja2C4Dc1hWAY1DwHiRksDN3yYXW4d33xN3xYMXqiEjc4J6qas6qSDxgbLk65zcmv5HBCRGJ7hMwifuPY",
  "key7": "2LXngRfmKTj4EfSt8W3woEduR9ttMUmP956JMaa1EXvTJn1gqJnmZwZhVVXyaVpMfabxTpFk114YFqxikT95xTnQ",
  "key8": "4gtoWahzw9XJ6xqLcbDj2N23HrezbjTr3n95o4eg2y9D7mvV6dYG6hCzGh5b7uV5YobZDytiLc9t9GQWRXiSx6M8",
  "key9": "4JQ1DyTFXMrwqEDTJTJXejGKpvHwgvYAYPbZ2wQv2XHa2tM46C6kKPAhxEKeycttJQmvb7wXHczi1An79X5sKbK6",
  "key10": "4ubaED4GSvnx4y55GxMtHiWD2uofkgNEid9asBoP5ARB7eCEppbGnNC1SuCL8hHmzVgeye99VHWArUcL92JXrWij",
  "key11": "3wauYhh8Vvfw6dmgyyUtJDekq4uJojAFv6YC3D3gU9aCHfmHG3LUhK3teKqXSgyPayzpHsGojn9seBTe7FNcCp61",
  "key12": "4eNF1ivAR9YHEsHyTWx8TDipxLDAvpf88C9pt97nMDiSS1eXkjdjgrfjuKNcRtAreujh1SfTL3ET7kQsobtQH59B",
  "key13": "2zh4RHfwgL5Bnp4xVYraekubu2jkCmtm4CwCcchGiABczPEDbLb4gj3d8xxXs2Hfh5BJDyr9dJ3cBLDR1DjfTyUJ",
  "key14": "2bnCXurWx9cf5suUht7KNa6Tw7LcEmbALHsW84rgTvbzjn5Ub2QNufz621H2jXoUfmxJBsNY5v6kQsZFNS8TGNJ",
  "key15": "3WvrZqkko8JAMiYzL3JdmUq3EXAhkzfYenSyaGRRMRVgSS5v3u39ZLs8qzyfEMniHV86yXcMmdpicLkLkazj76bL",
  "key16": "5H7RFf4fvAeUVPh4JFmoMyNKoQLeQW8Z3JQQZ6TtvSZ4kzKdrmZuFWSFhHjUCeiDr9yMQSB1iLDyu7KFCBYPN6Ls",
  "key17": "jbUnD2ZoYN838MGHDzGuFBKxadFyDNCkUtWiPkRZuobDgvZnNF6BrjRMnZcyum61vxNLZNCtzF6vj7mShEHioV4",
  "key18": "2UhYaJB7FLUaRCzG4njUBaabHKuweZPNPiSYKhGxG2CE2e2JJUnjRFbShLf2muygt6m3Q8cSjsZvkJVNcQnpDYru",
  "key19": "25p7TzGppyE6V1Tqsn2uj1J7pUtuHcM4MqkdGUBFD5CdJ3EGaLKbWv4PYjTdM2p7WMUGJkmi6uxqQBJkBvssVf2Q",
  "key20": "63FTC31xLNuEUXM7BiBYGUDSi42wwRUCBUcMiDNkYurbFJWYPdw9msJLAzsFSKXGFTJ5bJSRabQXB2KXRxZNLvth",
  "key21": "5c6Fc9UEXbyCrMUBFxvUupi23B3EXrudu8JmuWDjmjFafubNEr4nHZUMLbxwK8sZZjMUfdaQk1DY2ZVmXykXFwg4",
  "key22": "4fJycAJBmU3uu6uXa9PgzU7PrynHkpzLdQ5BBnojsXfy5Tj1yQSGjjFseuZcMD62Grit7iGz3s6mtiaPybPnNAAU",
  "key23": "3AKGzCdsQBA43qBNaoB64xu1BGHorQBeeJWKf38Ucmk8yG6TZH9C3FRKUG4BsHYz6gVX9gdoVCrQbefDTt3UMit6",
  "key24": "Gqr76orDnN6DsXjVRf6qNsbMaftCGtavZufFEHLwfDE1oRxhPJkVjmkLxftQxU79xJCJgqV2kwZGKuirLzJ5R7U",
  "key25": "3JsfKHzK5onzdpedkUD7MpWGV8fYGxrXSMs78n1kmCfV31HPz9PfEdnzve6XPix2ruM2LVxQnNqkxDXDs2XSRG7h",
  "key26": "4EEMf1ErYBQo7EgSeVtj1HB6qvwo2mXiP4TNWxZKnfHwYmaLGtMdZPJQ4hw262M9LRXndogJbwFo7WTR7xnL8obR",
  "key27": "39iG8DZUN8QaWPnQ6pykt1mWt1YdGKNiSbLk9jq8hiwCCfE4MwHyTVK45ybBp39T2J6q82sx6itFGdKWtNMMvxp7",
  "key28": "hAhx2EyFiUZ7p2LKFp9CmrHHhC9hagkB5b8VH5SwLQj5BffxtGHkgU6GAisGpEBWbVnQqQJNhQCTvKyiaKXerwn",
  "key29": "2hFz5m6ufK1atQqdhQs5uFfpjsqC94iBP6UBWuTk3cDfRB2CZZs34q7sDfokPYhWyhFoqLzsVHfqV9bp3PQpE52E",
  "key30": "4ek2RWZECULu4bgbAx2rv4kAq6xtAcR5Ko7PBif6G99N97R3KcuQRjbiLbzTwzhprckaew4wcc4jfbcKaP6Ud48X",
  "key31": "4G83cG1e4juMSj8LKMoY3ZWktJmcJw3LDqG17kHxUXpAZpJanaU1UbmyeMhLMmJC7RRv5bLkKBuQ4u5cw6uwQ2Tm",
  "key32": "KCQ7UY66q9a8sZbMWJtG37nUejBwZQHkPKsGeYqjeHPo2dqDZ2xEVE8bYBYi25FjEBciGQzCMAFfzaXfzHtFu7T",
  "key33": "2jwSoKdAaDzkZwm8YFp7CXofMzrakHX14c1LveV55ryn3LQgFQp2bfcbDCRR8oc7eQeMt3ZtozB1jhJRRpx2Xgt8",
  "key34": "2nWPrptnLB4DGZ4ndPbJ9aqMQaGz38QXph6maq9skxa75ZyngE5VvwrzwGk192V1AHVanzZDWEmFWZJz8nrKpeWd",
  "key35": "2MvpZPytu2tNvzpGRzSg9pNzLwG3Uqhe3QjvdUr5c27kkvUvF9ezxx8PToVHjkxhJUjGCsT3aed52uDa9h8D7DLN",
  "key36": "5F1NVG96EAiAojvrbJJjPGsJfqT8cUUT7jaZosZjQ95AyAP4A2sjPrgokinN3wqH6rJzQmDtXTVRfpfNHbZdVd1r",
  "key37": "51zwgNFvootfHGMeFzfBfRGD8SPxX4SopoxhWcqugguEX7dR62ArCJH52F8uw6v1hEvcf3Ts88mvQWkKfokvKRTy"
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
