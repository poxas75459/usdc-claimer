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
    "4MaUUrpN4fe3YP7m8rusSp1vApqYUxdiQ2FzMxfbapwHmXvwmoGD7DXJCt6MUXYt5AQueF8VsaHRiwsR5NppQGnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQ9vuMt7NQZ4ikJnXboJbTCWcAMayYM5evPdcrzY6imXZfkwsrcf5ADF4eNcrcNZq5AgEFmxeqfTqpvzC7EfiNx",
  "key1": "5JrCAVJdPF7s8xkxKKpUPtjGSgPXsRSBcvK8qaEoUZAwPD3qMdwPgt5cpFz3s1mF8bcjwT2DU13k2HtFpWr5a5LV",
  "key2": "67CwEsBGX38QQYZoSYiZTTDgb712QtriPD16ZyBkcBPHrQUM8DhCMmWpdpXrxxsfyAvTy3FZGfcJpmRkr1F7E9un",
  "key3": "5SrYsrkGtmJCWNRcxi6KWUk9W7zhmws2taxTkKprYtWgz6MrYMBjrkbd1LCJCLPt2UxL3VKaCehydpcjiXhH4ueL",
  "key4": "TrRoYwNsx7cdjuzkxjk6rwcDZYmUTKP9Bc8o2udcBHDqjXEnk9q6A4axbCXw9EAzofi8GmBrf1C1mBXLAqQWMth",
  "key5": "3m9y6C4PpZP1ypwK2iY4RbcTTjBTxopRwjR6kxpNmxBT835vhSBw7azo1xDkcJw6iN4pbhkPGm3nChFYhBYrvEWN",
  "key6": "4LPfrGhuphrj6hSg5jCKpoA9c7YgdKpkKyMTR63iHZbDrNxxRffJA3BEmqQXfNceRVLyxboZ55tL16wT8fp7HFE7",
  "key7": "4i1hZkH1tXFC3F1yufDGF3yZn9R9suVKYb1SCnA4MB6TNSXy5ThTnA8ghLRivYEp3qXE8hUQ2AheZA2nW1XXo8uV",
  "key8": "a8fHiBCw8mnt3dpVAyJX7gS8pVPfYkyHAGLEPpWvQKCZERrFK62ZtnbngYHwMViqkT5RWkx7nvkczWbHdpkVisW",
  "key9": "5sUQLfvyt5YJ8MPWDQcpYTkLeKrVQHEQvcwWV3fJFcrygszErH3JmXpyY5aLRhsLrrWAzJa6j9jC8V2SFM1bb9Jm",
  "key10": "2hR7PUMv9LXfFmnEAcZnpuF2j89HbuusA4MdeyVNt8sf9nD9R3H4r64H4EF1bNhvnpaJA665nZCvpufJ35DrjfUw",
  "key11": "2qN7ynaPXGonCu9F2wcPnrxtjMfnnir9eh3YocVVE6fBt6PQkbrSY41XvbKye2JrWLpKhfstq3gWstbxoMHaCDSo",
  "key12": "61t7KFEKnDJvSUtf1378HyExBMfemFYKECTazUT3YvdMPdgougy48zzjyahHFYQtsBoBfn3oF55XQPmuJUcBm27W",
  "key13": "BGePY2iG6Fy5nq8XmFDymb6k5LfunxkmATLzGjQyxvGgjfMPRxnVqrYsYdte6SMtXLWYjJ5pJJ55tDddsmakb24",
  "key14": "29yfXo1uXXTWz7eWutZTiS1AMMdGnJDTNAXGtB8rkw27Gtf8oywWnbxn8PrjbXmTNAaKvpStN7yEb5w5m72AGpUr",
  "key15": "5xdv26WWVbLJnw7L57oFiguUnipsG3qVPuEKZ9ZtuvUd1Y7v6gp2sy72Gqt3Q2uiKLXYV7H3PuN7Ndgwf6seoJFR",
  "key16": "2nboVTrVdsWZEwidstQEd5NWwUB5HSs8ER9vNDmEZ5LHXr7WKv6eBkQaAkSmHc67i4PrduDxWE7eVR2EeXZyq9Vk",
  "key17": "2CoCdQwVj2JJ62bkCuLhRKtJ5kzZH3yCStW5f5DQE9seRofUZjKJh3X544nzkiBCN88cknRfNiWqYq7u1Hfm89HD",
  "key18": "2mv3eB1xnGhXASvuTti2PuoNGrgjRvLjjzXSxukCNgZJennXUjcUTN1Zr2UcioUpQoFXkTfa1XTqXBgPaLGHMHby",
  "key19": "2dQ73ZxYoE6oEP2t8PoLmto2Y5aJttZrfwoNyhuGDxB49194zvH468zLmFqDjmhmYitB82oGkUtQk6UBq3Qfrd36",
  "key20": "3fRVqZE9LuSh1dwatQYiAnNZzH1x7JZgZhayQrUDmXoNjt5r38NRiLdiuRd9WkFrVKE8rrios9k2f651sJCyGten",
  "key21": "gfwCJByw8h9Bub5vkfDKQM8vV6uvYHjDtK5ojXo2RCd9EPtwC1WENwG2fbEAnmSCBFwqgbW6NuzFpjtwFFy6ED3",
  "key22": "k4vhqNsfAU5CCwNeE9UYqGzvsUnjd6T4eS5bZ33Sb7nL4B9cpUUAhrXJwsmBsxogDiP6DwHQgBYs3rpBAqW375q",
  "key23": "5fJRQUM8wMYHeZqDuJCJvfx1ia48ECnvYCQwsuKM5tSYbGXZLH2DAucVaD5baPj9My5UCHmRbM3avpHKPB5zxkdm",
  "key24": "cdUcechjhKpatyzebxEbYxbXhi9ioNvARTF3rHDatxDzmCgr5yyHdh11Wmgde6F5fvpbCY4EjW4Gv6eT2LbwRVb",
  "key25": "3QGYBMyD2isL4JSKrrab5dLkNvAyRsnH3WpfV9CrQUUHGFEjCNJgqpAZSS3P5yJdX84HXYiBjFasQWXtHoNtLZT3",
  "key26": "5mnsFPWf7MSTvvsHA5uCQDQKKVsjqeKmg7heFhvekUfpewuKJ14V7v3igAHBmAUKc8SKZ28tsPcbiYh9cRaXK6Q4",
  "key27": "2k2BiX1RHHA5YFDNgaki6h8KjARkhyMtVyowxDTAtLga3c8zCndjMfzjv4TQtSarFBT3AGzTun9eJCQS3MjsTBWp",
  "key28": "2TdDSPe2v84p1LsxY4QPXaMBrqctWx9fEvimYmRtMzrtdbSgQPPGkwS2d5Y6jCzk3TwFaKvyKa4UUQGQy6qTJiFv",
  "key29": "39ZaX8qc8jMithj4uPavt7Z2vYnDFUE16iDTHKVPb4XTniQSHGTL6mDyhQwQF7EFuM1U8Ns9edx12cGtxUKcxKG3",
  "key30": "4qbkMDfzD5Epdx3YaBizNdYGaMba5CBaqJ61ZwLFRobrZJZ5x8VAeWz7u4CQxU8mtbwFaWKojgH2H7Z4tJZr6SAx",
  "key31": "5gC1YZfqBAxBQkf2DACBgA3c6tC3qYNDzx56CAWGZLTvXXAvJEY3sk9U8FKgrguBJawBHaLCfjBAyxYP1F75uQg5"
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
