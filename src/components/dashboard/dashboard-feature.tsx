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
    "qDZuQy86pcHVcsYe8M9KZnoxUfLdjjAZV5Rxtzw8kPagEHL6n35nzceLBwQhERA83N9ug8pyyNjELfmxnjFhcYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXNKpFUD5348xUyCdsR8Qkp8A8pn8nnLL95Fp8BG87WCopwuuZdKXpcwkBja7Smx2qCMawkYZuBy2DR8KEgBdDj",
  "key1": "QKoZuz1E5GnEoUWGVtfmbrbupqVPfvvdPbmvFAdqCSu1ZqEFrN8rUKPicQQ9yT4LTNdEUTixidceFakEcZL91Sb",
  "key2": "hRoPw1LFkas29EanFSjHJTbrcMP2WGtzequXBgfqRMZZbZDw2QhX6XHS1vEjzZMactdyvPnHiA5XLimECtPiwqa",
  "key3": "3VA6DhGyRzZiQjxirC5V2MRFHA6Nz45JHNZjAuNDhHcERfaf6JzGCnRcs764mCQDgUS6HAEDxksk8tSdFupCUw94",
  "key4": "BqRkmhwMeMfGbPJfUyE3hhywAMfiNZZAhitSjFHNx3hgTLo1FWrCqe86rAycTAeCR762n8VYm85YSGe5y3jJuYS",
  "key5": "6FeTu3rNdLrwUtmmzhHY1ujnDMZoTkNDfT6KJrGdPGmF5RFcTHLGURHkSPWt1iFj8WusnDvcpkRmTeGfm2qnSZ8",
  "key6": "QXry27raiMKFf4oxEqw6hDfb9tDXEHN4o4L3QYjzCW1rSX1ctNZULWGRwdCgjbfVFry2JruExyoHWPCw9D4zaK7",
  "key7": "3Q1WqRQpr21pt12XydkYpck1Xp7ZPqve8uXNP2qgezU9d6y8K7Go9TUFG5iybVvxkzSn8mWuH8c9pce2EYSom9j4",
  "key8": "56xW11y4tiugTLSptZwbyD4iK2bh9ZxnkrdBZuMeLGWqznKv6t26DULEbhLQMfXfQpyRyqEBSez2K15t7kiHy6kP",
  "key9": "61u4HS5XQcbsVMGGwiXYgBtKwZvTCZF9ipdxY7PztkWSQnWoa8jsqCQqN8bS48nmcvv9wJtZPh3Dnh4YMH95Xf96",
  "key10": "5TXnz9gjhAL6xRvcTNGX81koRAvQCWyQRrkBXaNzxz7Y3S3dmnFh8gpE9FRvHtQhV7NhjnGiz9kEN8Gk96DM1NBE",
  "key11": "rAp4mRFv6uqkKxwznizcve64bEXzAydVWbVzdVmDYEKsAGUHfZsTs3g63JSGRWgumy19tnrTycr61jMJ72x3f2v",
  "key12": "3iTRfmtFTs3MmUoh58sz4maGaXyGS8G3mZwWBm9pG3VSrnjdHQefVZgeXsrEP9GWrUBaR8AwVs3zq8K9bRzoEqcE",
  "key13": "3KDrcovro9pc2XjQ6rd8Fb3crTQPkUHSCHAUskhikreEJ1PAKdCigNeKGQ6E49H8F5oFUGMMLyNufzL2jQudxF7L",
  "key14": "66poU49An9nHi8XivVSN1gk4odeb1VJNykrS2VvwCjprQQs92mcBmDq9BPH3HyYMtxDEt2MVJ1q7owjC6RACfCyX",
  "key15": "Ck1CnLtHjRkoZkUrp6npozcxsE2Q1NPZC9Xc9yZZ12yY9uU9eHLxjfBjBzvj9VmAMoER8ehBnqAt1hue5jEfPF1",
  "key16": "uTMh7bp5hN3HyzrQcmQnR5QxUbm4M3HNqK7AsievCnfGfXj6RG6avKr9L39YZ2qeDmKPkRVrBUVv3rjp5vgNuqq",
  "key17": "3YKJAmQxUEJRb4aQUCAoD9htHaZ5bnbP9usGqhbT4Nu1bc61hhmGU6du5YuUK33TEeX79UxDFHKVyUQytAhSwyw1",
  "key18": "2nmY6KRiUe7ZraEpc9M9nVbTsht64iTNgaXF6Jh6jQZ6XPKSS1J2DiSV6Q9zKrjAXs22Snpjv86eT9CVztyFaF4E",
  "key19": "64HTi1cJRDLdGLQygnBeosSPwgbPsHnPRcyrTrXCBcFR4ZZjz2vfgMnaXBdsiRdTyxUhhhstdiad2bHPwZNCPgT8",
  "key20": "UabnjDQYfQF4V4kmMdj6jzToRswiausiJQP1bVZ1Pu3eFNnhR7WJc3TE1Ytcj4YF4ttUmY16DthMptBq2Rxotin",
  "key21": "4WztCySpWCg9mGijuTC1ULi8dathJbFxVVBgH6rCut5qf5fJcjBfa2qoqkweWEt9UJtVA1rHL98tRLrG3B3SngWC",
  "key22": "1VKb9LwcfZKGJhBW6QytrMzKEyBB3StgsQTRjJNVjdrLbfvjHuxcLaESk8hBaMpp8XDhZGECQ4WyYZGkjRCLWQV",
  "key23": "3FoksyXYFornyeam6Pd3fp4MEdu2xHrq4K5YXyr8qZiyeGGbKbUKbPoggtYpPnFDaMHbSo4UyxheQK3VCFUkY46B",
  "key24": "d6ECAK5ACGqEzqi8VDXq8hLobLX9btXCTCi54gMh86r44ygkfM2YfQTZ3KugMJUAP7TGE1sdzTbzfDLTcvQV1aV",
  "key25": "5EruLYqveFU7UPSHPkMy9LDn1Yd7Va7wGorpbrGiJMkRVPBYzG5DLy93Ze7LQ3rQcPEQgkpoPQhCXGqM8mm57iSw",
  "key26": "mmbKGY96GDJ2z7WYR3XBNjnePtvjUkGMave3UXCLo4iUb1opo3KRXW5B1qSajoT4CeeAXpPNuau3yh6FDaGdZaw",
  "key27": "2wUGmrDC2dEdNZiu8Ksx89DA4SiWGg3GYFa1GdiWVTbsfXFqKYEu3Hsz65cbUmcTUpLWLvxwsGFzKRADJqmpAsJF",
  "key28": "5Cr14FPKR4TyDQGk772V5K1mkvxymyG6MCf5V64zfqXPQDi1VSUR3BiNiGdwABoZMWFCZUDZkCtFsPprpMXMYsK9",
  "key29": "y5UAwFyrSyMmDs8saXdM2QZPprLNMPYrvMHNS48mC2MiGMGrWh712dQPtGyGTHrnErKBvAxPN5XzmakHqQGPLXh"
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
