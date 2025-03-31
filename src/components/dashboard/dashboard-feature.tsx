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
    "2qFrBKUjamApzmQDKYh6WzayKAvEqa5759KybJeEd3qPKe3ukG8zYwa6T9BTiibbCfWiXSLXWuZZ1fiNK7ibLXBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ae12BSRDd1AB6MuwvM5Yxr5HZE4zJWeWNMnnReXm9awN8AfvSpz39gos52GR5GoxuuWotfDeVE3LERdUowevmKQ",
  "key1": "Ge8z1TUNcVewNapc38E1yHYhG2zTzQF2wTZGVRJDLianXLqvBNxWCyamsdufGktDymQAH74Um6Zc7eCytbGxwih",
  "key2": "XQPjqsnfTy5U4GCGvBcMdKSM8QXz5oX6JF3HmRHP5gcLqgQwC3JpX56K22b9d5Fo9he5bYyCXEc52GF8xQx1Boy",
  "key3": "2EZ3EBeXCLUAySsrdPBbUoHvipSEnHt38ZrXRsguwFWDXSHKEqqUx4dJSrbm3dzKmbMkmH7zikTrdvQ2mB1QUTPe",
  "key4": "5r19bYMqWwfwd86BYqmw6yoeQaC7Vw3ZBmqAPoiPjfzVmHeNzBWvCJVB3fE3GWcNhfo26HuHbqxZ5vYrBkgTNo1M",
  "key5": "4aDJpZ1DNGeRoRtFN13X8rk1uVBnP67yHXLgKe7NaS65CziZ83FdkxRgYJtcb8cZVQAEiwrPRqUvEXvyeCqVmuvz",
  "key6": "4gotjEr7vPrTzZqrQRpr6tSgZnNuVVjHJRery6pC9CGP7Zs2TvN7eJ6dFz4kK3F4Nve7ehiDsu5HCBq9LPXmp42S",
  "key7": "5aUbiE9tft5YZ7psUmyrAJ4pLJeMwhgwdbjn4kajinD9mX5wnDXakHgWNburZT7kCZoPzpbhf2u8F5c1jUVopPxb",
  "key8": "2YAYVBjxV6iQNbf9BQeuwQiweJ4nivGDmdZdXFEqQbbPZ3xCECkNB5r9St9ixXgDMDdHP8ZvRBmodyoYZRUkEw9J",
  "key9": "5CJqWxGTrMjLteN6U6199BgC4yYRXRywbFqFbwZFRWg38HmKVdHt4q6cYb857sV2cjbCPTd4cWoptnNYfJNvz4Qr",
  "key10": "5L4Gd5ytzapkdoVva7VtHLyZnjvGywAz4JocoK5QLuQqc9nXUxrDrNn8iJNCytniV4iSNmPH6jLR8Dm3egcbv66C",
  "key11": "2yTkU79aoCkMutpaDPZwSA57mu4bRYrGGin9QZJAjCNRcaAeDgNZVS4Pkjw4PUN742jf4oCBQ1QWdzoKjUJA5Jfx",
  "key12": "5BxyrNZe9HQE5rzxvNh16PMFqB61ZD6TyebZNDcjdgQcwUYzAqUNsQDbqC6p8CTHEzSawiEK9JXizwacZzzHANr3",
  "key13": "5br2N18zdDc3s2adNJXxZ6ck6xcwgFLngsLcNPGAbxR5b9GXnuCh5p8XFju7yMVhcTkPRpc91dKjRpmNv8ARk1uA",
  "key14": "2jLeHKgzjeag3hxknH8NnwqiFtDduqr2uAw5JT4koaFtytgtF6ADnWKtbark23Vn4VKiRs9j5tFE856B3SgouR4s",
  "key15": "2Lq563cB6deX5cNv2oTso8gggeJz1fivcsh4QBQgf1RA8HhniEKSjfF1VjteRiiiDHuvsfnjuNhjrtsCVcwqAd4v",
  "key16": "ZoJ9sqNDj8v8eeHQi2b3yXiKZAaBCUPWY7G8N5kPgZmUJweaiQhwiQ1L1VnHLjsAbYNinUsJFrNSf4bRiNKNUEk",
  "key17": "67hbRNZ4yhCaRrABHfNdZ5Ztr3aTFDDez4TpotogVx6QgDoUu4ejXfJ57ckeL4ysSczZtyAU1fq1iZXA9nFksEbM",
  "key18": "24DJyjPekwQaMG7EUCJ69qS3r1SJEBStdZ3Mfauz3vCegJrhJYTMUBYteshSWMY7Hf2oxnCc2orNWtU4dnfX3FqR",
  "key19": "582LeegtqZ5L8JwBVquvnH6qCv1F15CzqrKPhwbi2AZkv34fi2FoQqzMdAHJN6Dn6stHWnVtXT9B9Q81CR21WWv4",
  "key20": "5R6k9QXp1QM9hSpRZjGmFWGcimTvMvtdofVWcRbA63GTJDduCeFcBAtdPxeu2PmRn6HBmrBCLgcptJqP7dcoMKZV",
  "key21": "jAyfnsDmZT87DwEcCMuhjhvHYKED6cgbmB9MSd3PyNWsTNR2T7iuawv41iUbSVKAv164cJHGyWpCNJQZbq5aeJS",
  "key22": "3RSrA9BNuFK6qmHjExRxBz68zYCK8WvaGbFi9hAweeN3brdhtGWrTKJardPTXQiqkTYQbrFH5kL2iNHFgWW23gMC",
  "key23": "65hUKr7RUfrXkYw6qkPDWXBFsEa6wLU81ezHvvxGsoSRQDTkMjcW1uER77FaEKevU19hgt1jXJapHFU2dA4o9MYe",
  "key24": "3snKay3PmMCKMCHV1W4BsAggNgBocPEo6SLFuzkWQWc9qBCQXBREnqHXwjgyVXmJnmVPr4Vebp6jNRDbfsvDh5Nr",
  "key25": "4kQn4YHN7QPMonM4xsaxiy3BJbwjErKJfBz7gAFmJ6gdVRCxXE4ZiPbdjD1oRZgKyAPmauoEoULKHZZEQKDzApcr",
  "key26": "hVm4YHYFCo9ZZRa5xks6fp51iJWWFwWQk25MmAPJDGkFho8dSPD5cjTAZHLzUtWvjujZF4tV3mpn7HNqJv61H7Q"
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
