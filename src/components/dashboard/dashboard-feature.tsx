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
    "C6Nw6kALY8BNDX2bgiSRaNsCzjzA82QceKpQVyT2fBQiq5y9M5cf6pewNmWwa9kARBgHrdeuUzDMf46Bx1JZeek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9CjWrM8jT5NsJXpHyUA4rqWxXFnSsLbwvAw4KYj3iVwLVqarMjMwhnU3U7RHYQzNP27ALW1PDdYCSuiDnYJvMq",
  "key1": "2Eaxcu7V9f8qhyg7JKp8pVFVZkppmFhJek87TPiUkLLf5XHW23fWRjv9D7ncvXcKrebTkfwpyeEotpcQUGrZi7pM",
  "key2": "RUkRK56nwKdrxPGQnV6gzgx7rZnAFtcisbMpELHqAr6bTWxc8cHB64rptKbimZiptYzuRiyRhP5jmtdB6sJkp4w",
  "key3": "5YUN2ii9cNXYgqWiRVPU2muyAxNiVJa86AUYmpvTN1WqgW19QLxUZXU9q6ED1KjwcErH9ert77ME4MRXF7t9m8Aa",
  "key4": "2NHdeaCqdxZYx2Jh2K2rt6rCFinQQZmTQ66T1AjSVZjGTHLjcqjSj73d1U4nDptjZK6RLDZ16XVEfjLuGUcVyRA6",
  "key5": "CBLEsDXyt1AQVux9wMZC5zn3CNHqkfSDWo7BV7uYVn5meaywB1BxLvNeu9Tx38JANLxjqN3eVPHx4UdVVV6DPtA",
  "key6": "51bWKTTpYDwCxHwJAt79qYVPy3rwDiPUeurvXudXxvyGpinhcoSUKuaU6JkRJVnE3PPdEqddhEtxp8de6uqRdSqd",
  "key7": "M2v2CEx8L9Wj1CqqUckSn4eCV87fnmgubjHH1PqMzmuxWLojG4vLDQSEuqTK2EU6RCHYTKa9DCcGW77vLtYoMkf",
  "key8": "62HbMUdi9eoejaGqFa9NbduMWspQrpk5SGRmeJP3sGaALovEmBinHTW4Hyunw6BtSwMrUGCL8EfYoqEKzpm9d8Tk",
  "key9": "sjQ8Nk3HkYfUqzCfnuEuHiGUmSLRku1Bx5tmpKrfCVKVAgJvxuXYRmG9qp9NEsbJ9HrcriPsunxhYahAkGG8Y7m",
  "key10": "54CRMG9w96tMK7CwNMGPBPRoFHCYmC7ro38xcuJHEwYaPGxJBroL9h1YFqfHqCUsVYAMfdGNpaUX43QGHZP9EWv",
  "key11": "2Aj4gacCv9X2a6d23vAGo4k5n5cNtxezgir6W544eCtbpLwn1HwwSPnjkQ3JYoVaGoQjziQCJU9J3DNTgRkTEjdK",
  "key12": "4UVM44vSmPj3DCMpZ2mSqQ7Emhpn4hzZGSfFdAn4Ev7eBTvevKbGJHfbYXFboeVXAbAWC75F2zykn7AtpAtzxNBA",
  "key13": "2CK4iuUrGyQhhy9acAPeBcB7amFyBFcXXkqbeTEqinXbbiZzc8BMGGBN6tCxPFZJ7nNTAQ9WyPX19T4hdKqnDa8h",
  "key14": "5r7t73QGQQ7vRsKrdkkZVyEurH9sUU1RgHGm4uFnaDDqVRDa57BHMuBhczcYVzZL6PvgKx4JbRUfXDSfehs8j8mT",
  "key15": "5QzCVEitPBHiZuFaKAzKxjtq6mFgV9TtLKfniB2XG2khi9xbHVZkYyGuDraqaTLnquXHYkiv8wyqHHfnTqwhU7EY",
  "key16": "pEEcmShdvyoyZZ9Ry1qTgCs65nSLADsvdbomq6Qw3A4u52HBu9KeGrvqDoqdWt5hzWuGy6NyUBpb2fsy9izFvm7",
  "key17": "379QzE8pS9PABLy6GaDwdmTc23FqwAttFmfYrnx4nuWSBNZNX7Bos4y5En5KQfjAECHhXcdxz6KJRymAuQPCZDZM",
  "key18": "bva8GP781HQL2rZqJetrr3Ko86RUeouk7KcrnTzUBo3WDWLQqQdy99ghgkHZ92oEFT9QGtkqTwFiu95kYHUtnrZ",
  "key19": "3DtqwhrukN6yKAUc5HJXA4i64CZFix2gW17mRRgCR7dsBvh8agW2tf7Lv3X9VLr2UiE5LVpYo1RMf28Jqb3bDFWF",
  "key20": "2SGCSLq7oSa26kJMP9aMrPKRD3UcemdjUV6goUVS55pfiznUPPVDiGXrgJpzvcU5srtQ4z5fcaW4YfwsUoWYMWH8",
  "key21": "27DCN71BCpPSXfa3sb5W1gWY7Ex8PDB6RUt7L2Ak86UuMAJ2v9znJNjmLJQ6BBjVHr6VNd8HtjRc9usPw45LuEuS",
  "key22": "5xmUiCGfs1Hk8yjp997qASU1Uq3PMLY3E6kcNL7CF5vM5PgEEESuqT7MkUMpRppzMyJGCiX8SxPLGeszTzKGmtJg",
  "key23": "W6hXYZW8TNHEWmk6dyGDwhDHsrr2VZxEGzSnRnjWbJX6kW2SCPpnhn8x5b6tcTcmT7dQNhCJwe5vKRrunwyLLJG",
  "key24": "5pCNaX6qLxuJnRud9MUyC4qSDAqEnXkW8McGhs8tJU6UvY9FbNYRJXPdUwUYYFeqmWQHv2DRBxoYyJmDgyuiDxiC",
  "key25": "5p1NzXZwr6cqRU1JauKGRqhEUDtKzhZYfHsbAmGGGkTh4KaUENLmtmRMr8u5yCg7qAFVq8JfZxD27tVsXCD1Jnh3",
  "key26": "36VZvHXpCbfUbr3FDgGp59FGrV77nk9NtuHpcwMSeRC3HBWWzgyFYStY6ieYvnCzChNYzBQJjkDWTU6eqgBBA9s4",
  "key27": "67ZT89nFiAwayF3bwsF8r5PVjSHeN2CvxbwxgWhQdcdJ7nu6nXTPPoMegWHZfKvXsBgmrsVNNLhrjSTbemEnSsCB",
  "key28": "XGGQ2UgraepZMyWTygkzDv3EtvWcqmDD96pxqaMmJTYSBgJrXBvHW4gtNSUhna5F1SAfMvMGHqk5KSp1emmmPcd",
  "key29": "4uP8mRk3vFKYJV7iC1K9JegHVNHaaUVj2eEtbgSgnVvAf13MyFBsnGi7EtpST2U3efyRybeLZjSVGWzbBE4QJuPw"
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
