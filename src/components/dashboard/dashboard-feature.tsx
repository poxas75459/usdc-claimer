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
    "3odz7shPCCkaJQaD9S5J6ZGdrZt5kdUUtxKDVD9sh7dJN1ub8PWy8ZocjrfxDmB6o66JdDYkbVPLU4RWfw5VK41Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDKE1bcrrU9YKSSjRqiE5jfkjazYS5URMoTZDvLf5FpJ2awdjUXXDnuLEBgVADj1WiiLKDCbJsBdpGTAEVYeFNn",
  "key1": "36fsQq1bHnqgLkTv5C3QcNduR52ZrL8grFWM1Ht2n5riiTHFqer4XfkYrLhwJEuxLz9AdQAEsxVca4uAeBMbgjNz",
  "key2": "48UzEnp2CNkBRE9PdsJAng1rKmFJ4aDG3WKbBcRHS1oLRFjkG43YCLif7MZZnyZSA8izpjLKxMnJQpgNPUmSenws",
  "key3": "5W9fQJUzUiUCB3PhPuuVLJVLYaKR59przsunvPP4Ho9rijfL9LC23Ff9ALnLqQQp6SNJwiU7xjLL1RYJ8tT1d7p2",
  "key4": "3oPrP5JGGRvVJFCky6XqYjHwffvageRVbkdD7F8LZxFirR9ibcC2sUQXGZnvuSzJ6E4kHcngjPKNFDptXNhM2Nxy",
  "key5": "2oo2tNqpFuNK82aWwYQHwkK5Zm1sM4fzUstfyib7ddatsaFWEXYLnpXTLkQn6FAkvjM9MULBf6QPX9zfiiayLVLH",
  "key6": "3NkKU1GhMisFwwQxYSoQ2AHuYTWrQLtgozu8GZsLz4o1qsHzgL3iaUX7YWV532Wu3oQKQpnhT63PizyPf3r2RMe8",
  "key7": "4ah8U31GQz1U19Uc69DLfyjSrLDdnsRLtwUxBaa6oQaQESu3KkZuKoCkKZG7Gz1aFoTvCgx3pc5pGBDncmfFuF2u",
  "key8": "P6ihCxHnfKJjxLhWFs4aoDzvcYXMLpYwjTukJNkDp5ZNufn87q3ctg9YD2MvbaUAvMcuLjTtL4SGkdRSCKErUNc",
  "key9": "4TzPBo9U2fK2ZnQ8FvyeXWi6BwByAmz7SqNcr3UqpQ4fT73HrjJYCLeQuAH3h8pmNJdA4VzxAKe73pxT73vvMBit",
  "key10": "5KQbnkRnYZV3w71cF6JX9WbpZWZq2YNpuXfGBxibhQVgMpB7hNKPceoDMPm4cMfz7i6NRyz7jKRebrzYPe7pU7ij",
  "key11": "ZDfx8zQg9pmBWpFkfxGN5bLGfXyZjsTfC8SF5zYYo51zi6ZoxPysAHWTRuAmbC4cjnvVqwf5wAds1rvUPQ2rU2e",
  "key12": "4VDLmDoJGasbkH19wGzq14HzGxZTh5KTPHA41n9bZAGzarFqHmWKRipSFsEe1ZBf4Lr6tDMeBi4Hn1gbQwPExmLe",
  "key13": "EzpdU2GJLce7VSA5wAHf8zttCbZdQrGVy2tsJ8HRvwad21GsEAfd1Mf6Kuhevk1qLHvUiwbHVCFvACLbEz6gX6m",
  "key14": "5uPKizrMfo1ZvMs8yFHpnBF34qEKq62PSLoa73LDmzEKhjRLcGUc58yyCvebjdBRiF3CDgHkxhQvPiRntRAAxUKn",
  "key15": "4DSchLo7pg2a6isgKHajbU3HM6MMn1aW5VHaTKB4wHNzfH7KV8xfV8NGQT8g7XPmrcAzt2qK31vRcnd25S1MiLDB",
  "key16": "34FWyzBwu6RUjLSM4bRuuDdNJ4Dyp8ksUhPdF6n6T7bA2WKmZJbNuuCFNvBqTLry3RZKAhjt3jqMs16PZ8xttjao",
  "key17": "3E3qCGgte5jbYo1E8nJhv2FQkmujBv8GZvKym5i4CeXQtmZ9rhcvgzddd47cJAdDm2p9BZumvQnmmv3PvkZCHdJq",
  "key18": "4oNd7xN8E2J8qSVbtx4JrrPMg727SskqxFHcWzDGeYhs26jrBYWm3nFpxameKApPE3R7i2YBGBPfi7sakjmpuQfQ",
  "key19": "3SRVRuJWpSmicme4XtGtbnwcb2DXyLQZJbmLDRaE8Nb5rRzgXLmaYTCrd8au14EsjFDPvJMPvpuvL1xY2qpPaMeQ",
  "key20": "2xbhmrRhQwDhiHadNwNhPLeoukzUkRZ6CmucRWwPuNAzCFkJVJ9TrSWpsSdc26pj7v55GrJ77MUzs32oaPx6zpR9",
  "key21": "2VpYnHLvba63XDeJrz6VCusfQeBMACF21R4bYjHiwfBHsLoTA9vRNmSB1aVxFn6sb8h6XvEmULJjiaYTNbLhNzFd",
  "key22": "wSr8tDuE2KyRhwQyJFoWwZBPL1o6NvBC1DcS7Zq2xXYsc1rqZTSq7NQnAnC6fXLZZY9ZPCSPN6mqU5B9G136v7H",
  "key23": "4kEo1gkrGTNpXpdNstn35qF7sE4BCpKLDdFuLojJjJVEt4oHTiiH2qmHMjX1bTQHZgRZpLdrWoBY3Q4B6X5xLayp",
  "key24": "4FeuQunbCNeXd1QFxqU7HbXgEe3VeTUUk5tiw7a1frekkA1iJYtxnpNPXrcg9rmvz9Vx1495ps2uWicD7hBjDo4s"
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
