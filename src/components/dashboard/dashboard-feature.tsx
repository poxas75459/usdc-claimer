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
    "48y3EDFyAMdHtGsVNics2B3DjPprDsKKbBUFkwttd2BXH1WBaCKp22zNXop6g11iGE3r7eBBq2eMD8ugA6CA6739"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkk5RDFrtF8jgpk43Up62vxuqNACfiegqRZNjJqpWqDNwCBmYLAEhixaec63C643iGhMavXrPrBJpbmhvymPNLA",
  "key1": "4hBXMJi33FGXApAVAxSSjbqBxnRj5LFiydScJtjUM5HvST1bDwBV8N3niG1MZa4GfRdcaZAvkCrs83su9S4K7mp3",
  "key2": "33y4byhGLeJNRp21vuxvNQSwi8UHZXiWoiyZ5nm8tuaSb3jhBuLBto2oiBLtk8w3pzFtyaZ42ngVqv5n3XgYKBcB",
  "key3": "8r4GCLYAddFQ2czaH77RSdyZrNbcu1moPxk9oBa8rwRVT52nwJ7iv7fzHEDP6HCg9KiyDEabHZp3KFWZ1crBqyi",
  "key4": "35zASt5AwJns9mXwK761pJbRu6mmbAKorUPBXHwG2DWayZormw6o8gjL1vJbkqnUEephJpL9ogvPxf8icNsgUsVs",
  "key5": "2xXrexhLGcdMLXvhKUvzGj3Q6dpGSnZDPn5BEeAeZSE5aet5diRaQ1hJj53yCUC5Zu45VM5kTTc7goEYv1dyNkQT",
  "key6": "2Xkn7v8kMHjUAqFgGviBxWVYg4pDFRUtojDMqdVVgyfaMdu6fKXxGR3AdUWLc1PoMDxErmNeEiGsvcq58JAVAzmC",
  "key7": "3a9hP6S3U98jkpjmEzvZpYopoX4scTVwbSALuLk2biBZfn5vQpEbVkifKGa5SFGvRo4FwcLXn1CwHY8tCuM4KcM7",
  "key8": "46bd5oAGTP1khPyEbr7Mgq1mhsyHhZWZsy7QLCZJSDxmQv2tta714kUx4HNiWcTPhUSrhh9msRkSgZRXxCdr2Rv",
  "key9": "4qJFa7JKXuURDgPbpyQtSB2jJfkP1ciYrvdDx9o23MsYdkm7UBcmTncR5rm83BQAFRYbvknJaNUAy4hPika2wV74",
  "key10": "4uYwDEJV67CRyCzRiD91QcFcVf8m5JnRaM24ApC9F17SHhVx2w9NcF39LrXTR6UGDdV6U254bimq7aaXQr9pH4h2",
  "key11": "3sG4B4z7Vnnt31toJuU6LBK9AxVXH3fi5JHgXAFi22P9YPxptfCnW2uxnDjMHAZVTTovKHVLgwVDkNHQhtbsntT1",
  "key12": "5DSSi41JQnLFWnUWcc6kTPHakr8RZVPZhJ53E265DMnmDPYtPPHubjHWThzQZd6VSuk1rgRwCBm4XUWahooSrAbT",
  "key13": "3eXSxS9BrWP3uNL2PVgxxEQPEvJk6F6p7RLrMNbTbb4ZXZJyu9zXhucgk7yyZ1GG79Sx5uq183vseCVVQ23EDmeX",
  "key14": "4VAtzMRdF3xirNZwfPuUHBpx5GaA3Cq5yGqhQNtuXjY9BWz5Erwv8DoY2Xnz3pLhE4spLBkacFAuN8owro6zEtmB",
  "key15": "2Z5LqVauptASkr6fxVyXS3yPUGn1uqfTQS3E2VNSvef3JPbU6MgumaYHFJT2rziks5srpNpia3PvwtU7X8ZCSatv",
  "key16": "Y5R5nsrjofcfgDhrKKNjR7G2DFUUM33jeRyN7QGxxZgJiQGGQUz8zEWJ6WzYvZ955A1bMxyseW7o1f8DSShKfyN",
  "key17": "3jbRWbwKof1XRd1FP9gXa9WtxcHiddstKhGKQbSD856zj4zhU3gaEYZfuQTKy7tfYY9yuUX4xrZzHcuLPMa3Yjbc",
  "key18": "3ccoiFyS1o1q9MCGxpdLYZeYcicpgC7PEprHfksnYqJUw2HRTPRWoamykaT6qZVjxTzuCsjm4yRDZsBhBRHnXUAB",
  "key19": "4R6Kz5KukTt7bqJ73mSjj8vNh5L4PMQVwxKRFcueUCh3e1NF1jji9YZWhPYN1djNUPKecApFtSJMUSSzgRsSW13d",
  "key20": "3UXMXXhyatcZiwRF8QUxPGfHr9vqXuZDudDSNJkQV1RceAJUFabVYxHN8sDWu5h3sRu8WiccVAVEDFDrqgxdqFPk",
  "key21": "fbvPQcGiQ1HWNgHZu9Z6z2rdFqRgoq5uqGprhLwNap1ekqLYzsghKYRwrDuni4uCKGxHg4LYK7cVgiFDQJorswm",
  "key22": "3KEBrgbZLdhMhFrsPk6shryj4USPdtbvE7N2HdvLAeBDn2FPSwbG9ND58xN51aHsNzoCyaVHKWce7nmcjDVTmwa8",
  "key23": "23YDbTi5NCwJn18nPK9qMizi1JBi4g4sXFScYUy3cLg2xHp7oEbofK4VBZkFw9DJUWnzs5qtBbzJzZrgu8wh8JAv",
  "key24": "jNUV6cFxMQW31b6dEiAKkcpjv3xY1tPvwZujbFqHwbUYT7iqk6AwUTeoZSDDQvtFfXnwfDa8AqyWTEHa9m9gpzz",
  "key25": "3e3nrsz22oP4bRQp9Au8HuXY5BwbEbJGuR9t8fuWhYsh4KbWFDfTNXzR1RcpBfxinuPpeBFFguQBuGP8kvNJwkMH"
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
