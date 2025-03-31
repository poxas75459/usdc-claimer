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
    "539sWYM7wehpV4CY9Zn9ow92Fgc4eVEVm6JnNeXAovcpcydB8cRHRT6qm3eVcPbrU6CRLY9jy9ZC3NZxoYxby7LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ii5UPbZFegKDb1HaThSwFoZGrkxKY5bPnx9kbiyKNwx5EtoWQ4ufY6xhabvpzFdkNgpxNrFCe8H28LvvoVHLsgE",
  "key1": "4wH72RcDHgVxgNsBAXKL92EQ92RSkimNQ3k1se1x6FovykdVaRCKuRTarDBBrwpYcyQGT8WKxjmLuw5xt3xzaX7w",
  "key2": "2QzrbizbMYCnyaqMwstSs46NyWwYE8LuSGavVJsLi7s2dvc1Jrdfw2m6bM6EFB8xCLnLaTha5r3S8eveRNL2Y8e7",
  "key3": "3LEmYLYWU9fzC1f17iXCbbq1eYeaQ86jWzMnkt7rtVvzhpt3EUMQ1tzUD7k8JMx7WhDKAnoMfiu8CT8enwbBNkTy",
  "key4": "58VHctEYKPeRZe1eeDmcidm1AaNJ69zQg35LCRRyWFqupevEBLSKoCAWK7cHcepkv7fPSrCmyRvrWAEEHxUexiio",
  "key5": "3U7GxncGGiH1Bb2voUTGoFmDnbg9BoTQDQkfrSRwv8e61kqVJiH2CPyhUHPiqFEEy9iKHkQbmFJYN42bNZQoYAyx",
  "key6": "Wp3mPD36JU7WNMzQypFU4ieQEeo9RyyabYcS2pnFZfQ16p2emF5sRUjizVWijo3USd1xMu9RteM9gksTvrHqTCH",
  "key7": "5zmTPKMzVHrdjZufiW4sXrYkVGioR2HzgjkECa4iesx1y4xNFirDW1H3gfSsoWuBoa7sPggTEDHFuJwTtPhSg2fK",
  "key8": "51ZjebeGcW3z7mk4deehvh626ekWQrNTMepaZLVnzcZBhLX324pzaQhoV9hD83nvNr2Z6N8T1zLfPGt85VGvkUSQ",
  "key9": "3BsSczkzSxu2cpPH7owKZYAoFzo4YiyyDeGX7kE33C5E3RZKBGVwyHounrZR98HMjBTQuT3UeH2K3CKq7w3gjvMS",
  "key10": "55ED257uDeyUc7nLwkxh8McUzoadsWuwHU7xyh2iSSCQyZPmtvMZY5sUmWzrq9qzcoP183y591CFjdwJvSgSwWGH",
  "key11": "5W3XEjNCx8SWUaymM7Qim9odbnUzEDkJZY1ZSa3oEcTSpUReB6BcjxCnc7w1YmPgPQVFrWcA4mEcY7JfwaNFW8G3",
  "key12": "SjqXn4yRxPAtvwW9tP9kFGaouVsg4aEdoa7KW477omYmA4zMo3cTVRRnnNPigakJ4scwfnhxBLvciJ17WFbnFd1",
  "key13": "4XGDtp9mwkBpdN9Jk2fttbHqiAwjy5qRMikNVMmGeH15H9gXngBidcWJVAFuiz6v8TsfZd6w7auh6NQJETUUxyRJ",
  "key14": "trvxgs2FRs5AFvYEv4PvajHziCH9CkH6whiPydR4q3BRo9X9ZL3h1LK3kojHNbGsZvqRKwKgChmFbDDkHzdVsaf",
  "key15": "2NoB8pHUf2JBThLiSmfu24DUVTE6Y3C4h1QkiejhdLAcTg5RWcL17bqqvi4hTkLHq6AZSddxzVhfUkqvoRRmZm6X",
  "key16": "3ovnSV4ErDXiRUNFrHLgdgAKhVWr183JELbS8yc8HSawLT1TJt5XDSomyjMaxGvC4nugSgJ4uLAxTKz695FqCh5R",
  "key17": "2Fq9pXVnG1Yj376eo6ivH5jbyaDMLBPEix6kFHJpuwCCAhPrNFqi93cPHZZujbYAW28hpxgwcASMMursd42M23dL",
  "key18": "5cRy4Q1E6Xh6WEBcZppgdNCbgA66aL7iaFdyhEpdXiBZdNkZUUQLkBBQJGW3dbxw8CsuiMwbXL7wF8VGhcK3zocy",
  "key19": "4Y4tFYq54CriaVq9fJEnGMfqUTMf3aQ4Z3RMxe3bZBYXjwmrt2wYsFJ8ncPoqqh8UirDFygozhRKgVCbYA2Q6YQ4",
  "key20": "3buH1KPABWkpd6sHzU1TAXgL93EYgU3n1AoDAciU6c271n1hPXyhQhVxgnxh7U4cD6qELpip2N3GFcJPBnWVzrWo",
  "key21": "5J1xPFvmTNqixDWMzeX5P22cqCeqkYRaKqbm2XkLueyWP13hzfe3uyB2MrYukdwZ1VPrsukUEM2dJnX2H9pYTXCk",
  "key22": "5CTsJTYSxdWCppi5krmCu9QY2JDVeseZrrHZLF3niXVdtfhiBVV4Y4S3zu5bD1qZKy3CkLxbhXLnpmaUaQBUSKsp",
  "key23": "5jAB9gB8nUYntzSLP1aQocMC4ft9nxBhnJM3i39BwGavgg1SwJJcjBsJNTmRQWGbf7Y938c64cjsouSgo6uq8nN2",
  "key24": "4uvcfuKXJuudUThyv8RQ7sLrGoujzYDRUBEFBezdAhuDYHRvk8egU4cKP8x1Q4Ehd2VWcYudLciTmJhSZym4LhWJ",
  "key25": "KvYm8yXS286vL8WfBGu9XgxwkJMBv6bQYBwaW6UHrwQFpPx5GZWPBMrqAFVHqtjhaBTqmfGXe5uvnybeai98fpJ",
  "key26": "439WprLeEHxLifcpgbUC2fW7YQ6AqvNkD7W1LLsdo8tTx8cS3oSHNN7i4JCAQskfQRJEx3uXZcQEcbciG5XchTzK",
  "key27": "5ESvSziytcxGxgE5JHQZq7jJUpQkgWErFusbjE12vXZdbtvoeLZjgQeV7V83CwCFWhTV3xMN3haFk8UgXofynrDr",
  "key28": "8aQt19q69KQ93Gg7ZBkw8wHi76LfgcRBs1qqDD5WBerwKVC5rE8JfVfrhPPigsGeANNbufYP5CEuJETH9PceCgb",
  "key29": "2WuJWyTMnGXbpA8DEivr7oBSDpZDaVzcBv98BjwvUGMwjF8jKUv5WRHsPjrawx6AM4QMu9NVWAbfgn9CtGY2v5wF"
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
