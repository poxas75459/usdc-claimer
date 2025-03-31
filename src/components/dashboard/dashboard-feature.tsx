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
    "2AHKu54vkeaTLeZQLttdbPPhAscgqGfNaQTxPgeKNnZdtq4PhE4LC8UzDaFVkv1mAc9yxsjB4PuMj2QkvnjgGSGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cRvCMAL6xAQX6ifWJg73ACgJASqyQG3M9EoMnBRGYVP3MTMXiLoiTqKrPYmfoWpUnr8CxnAp1BzV5yfhjcK5qv",
  "key1": "3oBAiDZ5yB1GWuPbHMyCeQUVMpUBLQ3TAwhaYotArEUukprTtjtBreXSqg1PWBPPcz2f7voqJtVKpp6UPzcry2Ty",
  "key2": "5BkxGmF6Jo47n287kooENaHSWrYu81nxVN6NhFmPRJCvqSd95cECyKgjPUct81vMBPS6PgBSypzwFHUCVqd3kFAf",
  "key3": "Au2iB4qtq9rXPrYxqzvWjoG3QhfdfU7GG2q82SL2ioLdpscBJd47vn5DTjBA22sbwYYo9dBjcB7QGaMSornJkf7",
  "key4": "5mkKxHAvNiW627GbFgvxYppSAYKYkpranjtXXZ8S2DWysVw787FNUqpz1GKTGeemqpR413ph6XYrAiDPdPbW6zVd",
  "key5": "337PWmMAg8Dxr5nKVmiJNANrHYLEfJjZtutoARvfSoShPfLPKE7DifpkPjMyezWKmjvbGQhJHFLbPFnNejg9a7zW",
  "key6": "3B8KN6PLByrHk9UhcgrfRWUnveMZAXTx8AG6PnqdvHdmhPPATS8ooK11qeCR2mpgVtMyH2j8S62gpTwHnjXzJHrJ",
  "key7": "3dzfAFxhrn4v882jBjq8DNqMnpSb3kdEi21mfa3smSRnXS5vWxiLehtYtHWtmhhoVJ5oq1DR6tEyKLnD2FZ3LbCK",
  "key8": "5tBF7HcWQKS7aaWwmkAhWKAkqcUsVVbxV43aqANT92ubCxkXd5ffHtqpMwvFwoCTFYooNQGxL97Ex2HSEQJn4ShA",
  "key9": "5PhpGbk2Kc94AEotStj6i6LMjTJKEUT9Ht13o7ZSN8ncevXbp3NYwgBwz7CAcB6z5hxb36vFhRBnshuxjRuXXo5A",
  "key10": "577ed5rqscQfU2whjFcjNiDzxpoCTP3CNUJrnPZrrXzFCsjVSE5Q9UxWQV7cxhrojnbHKw6e7k6EvcgnLVLK7pHm",
  "key11": "43cPVUVYKRnbRktmK9LRMzn3uayAS2sxdf7VA3c4rDLhCzgpn1a8bgB5nxuJTEsabTXAnGyZt4eVZPw3cSFmppSi",
  "key12": "4XeJXFFRunzHmZmzXSzr86pngKf24xR9gShDxRGiFoNcyz7nYivnFsdMiLs7Txjzq74w3DEyxpyZ7BpYvmLDJfni",
  "key13": "4w7gWPBbzSU8Jmf4fChUHRbUJsf1CVvj8jGB3eH6B7ku9JEi2dXQjZRZRDzbhbcRbGsiiFuiMGym2Wrx6MY3XiWs",
  "key14": "3jkYkNtgvr7QBGFHABXtfq6nFxCq49UwKf8tnuBbTxLTzGyeYhMugEt5WqgivJxvL9CNhAG7Wn6HfsVsvHfSrfw3",
  "key15": "Kqj2uMyamxvDBVWPdYNi6PC7YkURM6YjDLmGJdA2NkZ3sjZ4Yzq1F8mkWdJh8hPxZeTjKo889w29AJPyVUjE9kN",
  "key16": "627GFYc7xxMfMEkAdWY8qy6i7ZQZhrU5spuTyHNU6zTBYhodgo6C1CAmGPyytQUb85EPfbE53bSrYdmsVrHhjof6",
  "key17": "2md2B3X7ExkyHNyJ4Xk8SKfhnNHDQyFRqjuwEPqyyJnBPBncGUKaLU8q8XmoEcFuMxdRwtvnZE9jMC9fQ1KosSRk",
  "key18": "LpgD1xdxwBRpnjwUENgGZ3YHNjf3icmVWWZDhqqdyR3nvCsCroZdiuCgHtgbMph4BEsJGnw4gqpVEeF69QnooFf",
  "key19": "4kYMKzqvmnc8yf3TyCvAQnsSLZcf2m3NTa6HMgeTspe4j21thyeaXVWpp3VCd16NxseJF3pTjp6yXuLUCzCLXRs5",
  "key20": "DC8ACNzDsTX6H1d1LA8KnPAf75bCEPPajrd7VCoSDHvuKtbAd5RpojgNY7TxVLNYxmMo3VrFd94hSPgSHrJ72TD",
  "key21": "psXcoJTPQxx2Py1zvLTEkwXedtmSpHGoGqm6EkgrPZMdDr7coM2y1oTH6KGJvdRvmX395eFNbecgWhiiRDLMxzm",
  "key22": "SHNdqd1WYCCcNHUyuJYmBxn7TkggyZFpt5nxWgncv33tfdsM5PDiz4PLtaCMsCxcTku3EDUiWA7YFyM2EhRK6dV",
  "key23": "3doorrxV1HPdxDf7AMtBFXKDyURd2xM9hy6fKFiq2QLP47jGRZ8mAoQjg2zHFp91J1LUbcBrpciUhtkoq4hCh2pG",
  "key24": "2LRp4yWwdkSN75LUE453HQSeaRL7b9YtX88K5o5LQF3LNBGJmZD4RXnujuwNT5wyhNHgj21iCnetX6o8H4kRsJkk",
  "key25": "5Dcdk9b9sJjDcuUnehq1N4JHk2ywss7CzWDNrqbQCgYCF88qGtCtB2Yb3vtSJ4cvbm9zHCPjKdgJ4sbJy2n671BP",
  "key26": "5JBLrTdxa6CccCCAUhEM4tA7xxjBeRTeZ9QW64d5zN3fmm12jtwa3f9Ley6SiNgqZLSNQyNgKRfCg7foJxsoov9S",
  "key27": "5HQn2CGUC6P9vP8CZwfHSkdDdUr4URvPTi3eufCUZ6qQWgSPKvRw7dHCvEHd3wPH1ouvaeN8w8gkR1oTEJAXjhzS",
  "key28": "KC2kWtThSk7uaCqx2vYpbRjZMjjWtPedpsmVkBhMcz2VJin8oCP37pQ5hm2wzYXFwUsnfmizQkYwPvpYmMEX9HQ",
  "key29": "3qybvsXUDRJffVcB5dStrseAwiFZCjztKVfRNRFvL881nQdwEiexjxbwXc6PK4CDBW1dW1oZ5shtrHrKYb5bYfLv",
  "key30": "521vwLZ6QrJQZowB1x1CgXUVMbDW7E3MvYBEGokRuUCBP8ac5qtvQZWqDcCNomoGBT2q3FjeXFcmWYSox7niLFoQ",
  "key31": "wKyJ1SPzH9VP46P5abXUxvR2e1NhN3tTdBbtz8rW9Vv6BfL5WgWaEJw4h3XdsbBdVWDrJEd3TJYbyP4A87mdcmu"
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
