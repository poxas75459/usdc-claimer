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
    "2KLv9XkwdrfeZQFBRGaRTEixK3zoJiwxQ83Cfwqh3U6QxxSakpNPccEEDGbzh9N8R8FAhBRjRoqk1cbYhbphawk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wanPMFqmgwMqza4HAxsEygVS9oDdpQE8uFaCrEUnmzkKJ3fPQbr8BwztQJKsstJrPeubcbpFPb1mzYTG5bcrQwD",
  "key1": "5ZHDLDAiAZKjfAK6BTz8wYjzh1L4Fk94DnViKgfcvEgf4TqRbj1htQ6w3Xcbv8mx48PDZwstTThJPdAACSPxykkP",
  "key2": "38bSJTmhjiArL6znqsd2urZ5nRFmHq51omDxkPZsGSqrijKoH2wSnPFbooYATXX8RKCq8VGxNLgM9NDDnux65QoZ",
  "key3": "5jF6yAFMUfHYbXNzjvqqRhZGhAXF6CyKr4UWS8q6LaKFcTx8kZmndhYHxKq9z4djhK14t43u1TQ5tnXm4Nqqq7x4",
  "key4": "h7GFPeejE1VFR9skBqQwLaGBfutt29fqi5az7c8nM9T1UNKrzNFuyvfEi6kidCWrexePioDqK9aan3gy7NqB7tX",
  "key5": "54CvD26GS2xekKPT83219vuduZXbEqs771G59yiP61wCnkfyZTGjRRq9ZHGHX3NzRw9twkMV6EKtJcUnbj4G9Ueh",
  "key6": "YJ2QR4FRMqKJep8ThQJWYN5kHcdsfsLXmqufsjuFaqddHtNYyT469Urw45Zw2kkzQ5YUKY8ScAp5v8FRBb7y57P",
  "key7": "2aqNZcd4gdEYcBvLiXvMNnLfq7LpquSDWVJvfC97ke6zbqSuC1o1EdE3owZegipxUkv3iMkBoP84dHTJGctKqLbo",
  "key8": "2bwduQaobrRzb69ikezAUyJvXpLqFoUVLh24qJ3izVfxnx94Nxfmj7mQK41Azt8VKFo9dXLa11Rt8FwxmTepGH56",
  "key9": "8WzAvqoUm5tWNW5XWJJAxXPw7gcVabDD2yvnYXoX6k9rsqmsEchjPqEo6nVp8VMBa7TCQyN3vBqxhRHPb9fqA6n",
  "key10": "xExEqm6mB2FkQLou8AKjmXsG4FN613VYXSxFZxm7Me9CCCkTffboHDc4TKFXq9mjuF69DFJUMJXryjDEk4vaNNZ",
  "key11": "5GKsqMKsidRyEfJciXkDtgn5jajaLAUcEwMtEqLuqGBmdZMCjbjwGZzfeVVyUT512UsPhRvFiGjNL5a3boHVmoTS",
  "key12": "2RaU9r1o5j1dXCNXGzS1qQ9AhkAdmeDn7xH9utCriqBFH8361if3huBZLRft2AcNoJeGycZyCjZgfiDHcpWDNe7p",
  "key13": "43GPjGVuZX6pzsesJsvnPyRvhWm2nGJ3QjakxDXV1WgRJkFsRFwfFH6o1pPS34UsKExMaesXoFrGGtPVFK9T4uCF",
  "key14": "5UBMhXkkssCRAzsthWRjkYzqnabP85dRwYjawQ3tTbz26LjHuPc5bL9aY7hJrGUsp1CT4GGQgVQggC4fCbgnVGoY",
  "key15": "4ec7Ym831XdRi5ByW8nbaxu4GZJbX7DHBKuJidpqzwas8ZJUBh5A9XYBxQ5nZxnv7cy1CSv6h2FNL8acA8MLQXVD",
  "key16": "5GGf5aPY494cyfPG337Kavj3339D6er7rExPyJie7s66LTAYTLDQQMapoJe1K1jaYEUNQLdd65CFiM6WnzhP6DJa",
  "key17": "RjBHuj5njAtoPB6pgSVUFgf5Di1MJ9zoMUxivtQWE2LCwQcEoRgEtcELJ9YE4sAmdctKP918QdmgYM8FdtcHpHo",
  "key18": "3RzZQmsgBS94hkbf9mDpYxQHwRr5FSXngRVeHcmKovS2heHurwTXHqBKyYt4CatRth71pxy5K5SGKva9Nkwmc5N6",
  "key19": "3yqUK6WvqTwgctmStHSmZXLqDwgFbZHwWCqEcL6V7PhwQZvJroqhQv5njXodbozShVhX9o6v76ECrbpHdRBhZga4",
  "key20": "5bm37YChSHb9grkYEL6p9jYgb9SX21oWcjhKkp8m9YCA8CToa9r7dxUXBvkWXwMPhKeShFW7uSs5fc7XZGZhTfh2",
  "key21": "5h3PPpqooWcKLRNgdfE9fWUewbuVa4Z789i6M4B3dnRCcRmNfWHL6f1hzdmnFZQ5YjHabkGZPKn4YmYveiXqkhLC",
  "key22": "4avxbexRVcHodvP9Ttk8kzNSg9TswFDgQKJXgymfMcuxrN1S4vweT5ju7FtvpuaFw6NE84JLPTVuk63nCt363dMv",
  "key23": "3gt5Z2JmkiUhsCf7ePMhUZkZbaEawz93dEBLgcodqzv6DDHjAEY33ecWrXDaHiiVG59N8o2FKKJaqFRGqSrY4pqA",
  "key24": "2Ep3poCRCDMoyKPuERHt3G6kXfkKp2nmbpptmFHowDqKP2rchapkQEvhZfVCnqk2hNpPHjzxPkuQBVm5KYhTv95D",
  "key25": "56D9KFmnA7eitxdUiXY5a8AgsEicWZm3jFpyNhRyRVqgKhkw6wXm6zYsZMfyqAPonsH7qmZRi4yzx6B8m3xtNrhR",
  "key26": "7Zhp27Nxgbo8taP6TJny6ZtrcMAC7jV3JweQwYRXU2d65iGYEGoRRnbEzGjcqXacB25gwjn2zufVu5hVGoNj1Wd",
  "key27": "nhuUiMvf8Ue9XXZm3XUKHh6wYhiyFsUkQAa7bwqkUQuzsmBck8X3vapBkFasyVfGTWKctjxF6W8Gz8MFHd5ubaE",
  "key28": "4YswTa8rcM8dDfKb2ZZX9mRAPTGwNrfgPTZYcCPZS5TEiGsAEYqENnkQmZ3HU86bW4XAVtoTewgxWsquWCoJLyjd",
  "key29": "4sjrVmmuKry9MDPcyJQ6vWJTuDjcCMxE4P8cH8cz1RsGvbquRELKeQB9MQApVgtd6coJ8KiqXBwi7LvpkWnQSFwp",
  "key30": "65o5UfoPZCFuo5XHGusmpTC89SbvXksBuxuC3XxD9Qee6zj13GQH9w5QogygG6UNjoWP254iXfGoVse4BVsyLm2",
  "key31": "5CVKx9oKUWgx9jMfXknvWnEHsnZYcihsTw1MrM3jLzmwm26C776sHa9PiPND7RCc2vtTjcDpEpJ3LyKdngD4gLp1",
  "key32": "4oiq5gEHKH2B54rAir2BbtfeP1RHaUMdYUzBC7oEokf3Hc5xhHnWwkNa6x3crnhEwyvLQFwgjeuArDRim2hRB4K4"
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
