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
    "5WbLXWq7XX3oGvxkde4yJ54cKwa92f2HDgrofqt2yEYAuRMWMZmAkHX81cCqrvk6ALpeC5f7jdS8qHqhwF4sHiGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2rwvXh1qveneiFvpmL1xMvHyBirjSeposBbJcPbP3ZvwTnh3S2L8aKdnZ7J9gMFFzxChcAyU88x4RxSCi9R4Mm",
  "key1": "4Ggvh9GHxSfUZRLYur8FycPfBNAsmx57H2S8m5cN6VepGR68Pb3y9witsd3UxaZM252v9YWqFBEqqCuFrxJLmanK",
  "key2": "48phEKxh4FRibqF2uWJ5YgTykbPhfrcDWpfrpigkECZ5cemoLX6TEBUwiGcbknsoFmkyHyugtsdGhyqRofa1Tj81",
  "key3": "3rQrvvvbGf9hrCnVMQ2rEvfCpMh41f7dvhaehsNJmWNKZw1FM2944KyWqL9DcZcZQ6i4cbVqaLMdpdaEkeMUbU7f",
  "key4": "37vCP9PJvihAaPefLjPfkECPXAVLRCfTVUY8Ac7b9DzAtLBLKBmWNiChvBytpJSuWn2G5K31WGmjYQ7WJSBgHRBQ",
  "key5": "2NWCY5B5HHzQ3K9XECGpbd3aVukdhanuxftmGwzNoi2csn2f6N8xxerTwzbhmZGK2V6ZZPsA9dz2DUHaH4A4iquG",
  "key6": "5yZ2ZoEiAy6zziuwxdA81wQUC7Z9DYDEA6jPqawzmqKj34CHhbV9CbRhWBA2kv98JFSUZnK3nneYrMJRFzTVsb2P",
  "key7": "GrvY9MvtxD5n6QVxxrjmzyQzmoZs9zijvitn3qbu5WQaARtxPcikPCuT3SHWreqNQHzGRuHJDSvtcFCBemqfjA8",
  "key8": "4kMwxBKgiyjzmUTSiHd893mQ4tj2j1SquBhYUtoj7PScTxuF2prd24yzwPamwXmuSBR3QrAFobiTJ18Jq8Qazox7",
  "key9": "2TJWgimJAp9eEGZE1NenFnNKuceTvhdMHVqcrWYvAWZT5aYYm8tmMypGpQECXdikcZ7JUWaiRWtAK1prQu4yaZay",
  "key10": "1pvkzVqRM6uZ5EnVe5zjgxwVki1ayhZqY4mA9UUVnzwr8FoDmCjKsuafR9fmmk1VMXiUvnyyjnb9Q37bsLJkxVJ",
  "key11": "4Rv6iYuGGgpJ9VpLFoGSCkXHfn6fXi4MFrGEKrzFV4AgwBg1VBKVgB8fHRYk8PHqnAPdFuCbaC27Us6NRX1ms1k9",
  "key12": "2VGSMJ7NLGt1UnymimrENfaua3uV74aZfNgUDt1Um9tP2RC5jepphmsinadD9RtiSWFEkyfS4uE2bhbdVSsfGMQH",
  "key13": "4azbnJGs5MTVULpy4YsYHYq6aqy5W3yVUqjZKnq6pP5t7aQybhbHbwigg7F77UgHpqR3EupBSTpaioQM6gAWvzzz",
  "key14": "MNYE1FRKgL575SasxpLfBYnkUuYbQ945EuAxzz3AZrKdtyg8gHokCcVTd89TVWM93Eck2yLx6HYRPhKhHb3JRQZ",
  "key15": "3mcKQjEZEd8XkY6p9oMFeqwu2Sc7RymXSqgVX1atKoUhmybUmakmtZ58UKahJLgsx5Yja4h5N7wE1ho6X1iBV7HB",
  "key16": "563oADK495tvxnat6PT5m4LHFGNihHidzWXU7y3cwjz5X4f3mwzStq9Gt2kZf5ksgzQCFLTSymMTtCXRpgBxkpFE",
  "key17": "3VNYEzXJdA6A55pVGCpetqm8JP74CDuhbSNsLoiJvkPQGY5vGoLLoEhxbK6RDq3P5VSHCk3qW266LAxQu591dDXy",
  "key18": "5qtMxrPdrRPWi1ADyWcRY7mZ6YhvBPBr7Bx3ZJfRs3s6JoUo3astQiaW3xGgwtgVoz3Hp4F3enu2AxeWJZi7ip6P",
  "key19": "K8Vx2oNiXxH915TbkCxEtkgfCLKBGNyGncA4rwmFLPoatMkyvBW6xfpD9wuWFwUCkxZr5DL9Adgy65FdkGZLYbx",
  "key20": "2LpG6yhcXhVyua8iDn1hnEaNWkYEHMhoqayJgJ5nLK9WuALVkZXuRtHyFP9Y5YhijpDyyZNeNR6V2BsUoaegWnZn",
  "key21": "39E2iZbeJhoqZ6dBxxSva1fDXUv5fVPpPsjHLqGDpcHkwvQq3rN9mxapUtWJU9G9QCvzkQgCNwwNbWbzo4xWdwk9",
  "key22": "2omgYyC14UuctcBoxAA1x2DRUDCoxJMQZTzCySpWJkKsZDcReNHgDqzd7QpTMJ1t5LSrK8uPuiF4sWFq5dNb8yyi",
  "key23": "2Q1UEDB9EcPNsHahTCFU3rzbb17fqeVZtFAncrj9vScYKVoYWVhP3aoPyrHV1CWsvAKHwSuGuA1UkgyCaJtuLP3d",
  "key24": "2c1E9MAXF6UznTrzzov2NLVcxSeV2fcutdXivbQjur4pwsndVzFmhbrQxLcoSnVvWtwKJRu89ie8BV42fWYAEzEY",
  "key25": "613nn8PSxHDDmDb76HNp8xU5aCxVkeWrD4Kub2TRzipC9zgAnAxAhKxGVnP8wAsJRncTef14X3n2Wm2UDNUtzBZs",
  "key26": "5bpheBf7fz364w48tXB7JXKfyX2Ti29gpmCMz8bWmJtkBUjcP28RA7oJUULWpZEPEabaCxqzFQWZvVm7xKZaqsH4",
  "key27": "2YNuBPHxsrhMoQn5PDn1sRXnA5ooLfVrmjzGfuqdjCQpXeEWPdZmC49LscZvePGKzcahQq78y3eqEyq6Cy8K3KWN",
  "key28": "4K9pRroEgkbV2zLcfSTotgBUdgZBhaZwXoWnPfZeHumdpDyd5tKyhRuNciP1rtpVTh4h4tssxuXTsMv9cFjT198y",
  "key29": "46RiXi4mwT5iRRKgtTiNMr8U4UK7bbvvwnySYKxpRKndC9phtjBEyFvPBiXaHZunnF3DcNGwbmVm4sEHvfxnez4x",
  "key30": "4BvarrnE3FVwzKcxJkMbM1VuBfrjPn8oPJXfLmwiVyvP2Q6Bk1u1ap5xJgAqwACsq8BzJ9UReFUJ8jNcAbRidKJG",
  "key31": "3nnvaBt1kS1dPNiMY9R5fVtfCdcoTwzhJNS6FKAf2JuE7egb8oLTXe7tW4iEr1mXjy2gcHseqqzXhjS2HrXx5vMM",
  "key32": "Da5Jg2Y6Q5BpZ7ii96wC6FBvf8SLbeYZfHZa1nEniPLgosCUxKe1v5WhhXFex627V8sCkHTRKSidQTrKTXvWoXg"
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
