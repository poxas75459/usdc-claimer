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
    "4sbbKvZEZB9ymiWTVHLZfoh8z2CwtekaZsk65XtU5p4yAq2tQr7u28etVJByMi4EDNonfAQzJBR7w8Ky9rEgnpoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkzG6rZmMH9ZzVX5SG4ajDBtWxkaMVEJRgZ4Z2kb4C7wYW2zmfxPUn1hGkbHqzBB2CLM9FfBk3sgdeLiCpFWoYV",
  "key1": "YZmajWmAH6bt44tpETQmGKAKQCYxQrsa6TmxkSqb66TqxXgb1FScWizWAgkYnLCDeyYz7G8cqR9R2viTzQ8MHY7",
  "key2": "129cofyTd8YdhFoaDrdkC3G92VJLTfpZRkdw4SJ3yp6rtKJJNKa1zD1EQk4ApZdWXdXpdGnzRtf8XGxZLMzmH8LV",
  "key3": "5dYAvwqYpothNxg3cFYbN2Hv15CVmNEXF2Wp1Ux4SaEbMAU1AvVPpQANjp6gGxhoacSbULF9G22AyiFZZQhvno7i",
  "key4": "3afjmdBHvXKYrjNsd4zh32JrQG714eps2CBc4Ggu82kJH9jjbdDde6czor99KTCo8CQqe5bu5zLsvgm1ghRR2yXc",
  "key5": "3FLpPq8R4i7jXRUD5sJMVDM3yj3Honr3r4F4FCMwPZr7HcfjVdWcxA8HVGnzEfJkKEtqtBYiVX6uB6m3P8SANAom",
  "key6": "44gPaonRS8deMFjioAv2z8deJ6Tuu8GeR4w1FubzteHxivrCJJo3LgZbLa6Xrs56jycYVHpYnJd8dHSHKMtdhf8i",
  "key7": "2WWGdVb9vZdr9s29cBYgvRz8dCyemNyiBYW2dxArHN1keJS6wRk6KY8KZr8rALcvAJszhoWf21hF1GY54qU3VPLe",
  "key8": "4ZyamfU4kniKfsrhFs626WsJJaugKT4q3815bo23amiNFTHvnPkdjrDToWemf2maxLxVTBEq1McQZt4Jocs6Zgzt",
  "key9": "3gAkR7jVCQg9XiSutcGLRPFHxDVNM8tZPtDvuymJprYqY5o6yNzdjjm36YrSZ7jvCvWbmM287TRXdUWuHBsJLhce",
  "key10": "2HZRJ35ptuGvQRpx69ekWTiUt4nwq6YEuWjx2HLMhRyA2NJ6nkTfMmXSDqqRLzU7VfjehYJ4twPptCP7GsaKy71L",
  "key11": "5jPiLxZUsKoZdum74PYUYs8hJ9TmJzk7SMPNuWsvD9ssHX7Z6Dr9jo9TeE8PUZnUY431CKTxRGYzduxuigM6rXjL",
  "key12": "4imhR45ikMapeG6NvPW84dDMrEkNjyNqWECoL3Pm5cjsZyDLDodfy7Zm1gMJ2FSx3ugrcw7aYLQA7v1xiTCdUFJD",
  "key13": "2B1e6GmVEaNGaUoXAdbhntRhrmAvMWxgiu3iy9kDiugD8nEYCwazKNCkgQPZgKEtcMnie1rtzxvWGPNGifCrM9th",
  "key14": "4R7f8RrFs2iSEz7Lp1VvHX9hu5fM4YMifDi21Ub4jmahXbBnv2tmeYBfj44Q4E7jouYt7WreoHWbcXPcPu54uxQc",
  "key15": "rgC7e8t1ayXM7w5C45dbcF8TPd97VmEkdmZFuaQHw8cQVaDDgeJoB4t1kTgostBuu7NfN66e6PgCzkhmAwMebvQ",
  "key16": "4JBLfq7fKGnSnKmaSsGHQeRbM1Y6sP7qR2Bv3DfdiKs5sC1oZ68t3tbNsaooN14MhhBRmzuSi91PtuwSjvNg1gSQ",
  "key17": "5Escec8ey4shdCcqtmhB2MMRXbLd3w3DC3UmkuMxnLpLKYT1vAZREAb61Ae3iMiBHJ9rFtcrrQidAqL5UqgLtvVX",
  "key18": "48kJ4Mwb562DbMAJKKHUhotgLLPw6gfuouiMoBbUWdVi6vYFHG14U6QZQSVGk48ZBz78vRjBeDzev8W9fDeV9qgH",
  "key19": "57bCfzkGJes6R1qwNkkmwexDM3rmFwSwRqJHdJA1k7P66Rh35KhM9tK1WbYdpsHtH3P4kXHoG5Mpm1LQqELDLGp6",
  "key20": "54YUR83DDbLcvsRfJLiPvpJMV5oPXjVSWkg5kq9qCFvYWWzo9Q96bP2xqBtQnCmojvsdxzPQNRSqqVdNQ27QyN8C",
  "key21": "39pd9UfpkpFUv2VS3GK1qfYNzBgmsH81oTHHkoBjRp8V6mMDqYSeMv2jBnPZhV5Zm9z2YpoqHMpcTbqFqjqTN2at",
  "key22": "4wWMXwfSoHKULBNpmHWB2eBhwT4ZyrfMDwPRAGDrZcpCWsv82KHzdeXApN5hWvYbH4rMVKjyQNxe6AUwbFYwiqbn",
  "key23": "5m1qFSfwz7jQ54rKvY2rKZcfsaBintC5A9nhh7XeoYs7CupdwhtaeMFY3VBxQbRnZ634UZRTJQFh6j7wUv9koQAi",
  "key24": "5R6jaFdzGz9kb2TYnNTCFucU4FqWr26CzaKhGh9F5wbyugYxH473yrLZHXbDUFSfFW2z6wGDTgi9ES6zhpGgH4tE",
  "key25": "5mZc1fSdTnB6Tc7Bp8ZYQYH1rxvgWt5honUPAwrMgvbjAhGoio1Ep1f2UXiBBZsbU4Jkn6H4znA5KuZASbL2ceBb",
  "key26": "2Mt31caMeD1assTNojEwPwzkkMbsi3ABNYvAn5PGpUHF6dobaJmnaC4Mu1wdH2uxTQvQav34VQWZAZ3MducFmWzJ",
  "key27": "2So7M4PJGkathhCnH9QdRPo4P9M2StvFkXbV2tpQdgr8JzEwuHRjqwtkSXNv9e6QXiuU1WuphaVdAKUFcjekgoHn",
  "key28": "5nXc4G7jEQofgfmHdqmV9Df6Csgjp7ZhuaDUEJjhrJgAhVWii6hN6Nc8johF15tBdH9uwLCbctFuSGqzVtzFgaV7",
  "key29": "rFWgXi141hZNBbeaZ3W8T9rkdXJaoHYMk23aRJn8RSfM5CXCR5oSoyAFuMgLeBB9cW7HfqQAb2d11RoP3v4GfBz",
  "key30": "5vokPRu2Bq77UazLoSpbpmf7eCRTHaMAjrF9BaTWWjTR2LWXBy6qfDQedxBtvRGf87CKKGVcy77LKev4DnWjz7V5",
  "key31": "qSNnt5B8FTtgtZRuzBcbAm8eJ3FsYKPyvEPMf7dLWxrWdN945t9PKRYj8GYGHSZvNU3ghnZp4UbaUUH297dHoD5",
  "key32": "EaXv4vSTtxXTuLerGVoWaXbLhPTAFTFiDhUSap7Z3pEYiJWv7Qd5PEBXTJ3QFY9B5EEM5cGWQhHWpfiTzp79xCe"
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
