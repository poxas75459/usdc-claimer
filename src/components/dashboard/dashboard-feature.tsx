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
    "3Gt45pBQoJRyn5wX3NiMQygxdAnhzfgVyeVc6n4UjgJustFrR9Bxa6ZsAgWSYBP8PZsLLxF3XEaMHBs1XvzqeoTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yH8fM4P9JzvtG4W5FeDVi7Tm8PTkzL7N3UCvED9xesCfkSoh5KkBUciqUp322npd541yarCKrCca9u5rRrnAAvY",
  "key1": "5UGfVyeCCnsbaNJNVB1Zm3oVUs1FZM75K7Ww978QXYDuEUFYXKHtRE7zEMkw23cpPq2PutsEC1MoCwmUxfcHqrfb",
  "key2": "2jbwU4WqHrVqDTsbhBeTzFHoxTHvombR6YmubCaJdvhc29NVBHRKnXSd7xVtiWzBAgfJ8kfkdd7Da34j1zjnixsz",
  "key3": "56JabEdizjET4A6moo5krFYmWXsKXerAenjzKTsW31UQ4Md3icDpj52wS48k26dYzNU9EJcwxrWmHvD7BTTzfos7",
  "key4": "459duLczAbNwr1NitFbziGjouDPEfpcoBQQRbpFZLQTpC2fHJ235GpWtFTJGhygwcxZ4kWdVGaAjD9c1L9JXPakp",
  "key5": "EkXxrTJh6FmAHfcxYJ2cxPV6ATCj8W2MEzZYCdKSSEvMkvQGQ7fQ4JMfFcNzBo5MfBTNqtyJjMKBFCMUph5Ryrx",
  "key6": "3JChDP2k4VaNARrkQcs94hRZDUB1AUgnoe33rJ97ufazpnZXmAw5pTs3BQ2NJ2cyGBETEh3VEcZhnXRcavmXesPp",
  "key7": "4ufnRBgEeQmSHjiAJddBgwwK4fchzYPgAZbRuZkyMY1M6QEy4kPouyFoZRMYBgEa4FVn6AJavZnsxdzKnbkozXcY",
  "key8": "4nYh12uhU5Ut9qd5gEs3i8f3xDYSnbeKB6ubbVKMwu9fiTVtRaSbsxGb6hCKtqh9BWZViVV7LkCokAhaLM8zHaMu",
  "key9": "2F3qvZ6C5gdWsF5gQSBLTWwshth8LQgGQiF1URsuYCjxo3WYaVcjr5gq6pYFSvnXcXT7bg7i3Z7P9FTBsDzGngsf",
  "key10": "3emB9oMVQEqSpyZ9d4r8VE9wnKR98wNrLkAfHtXaXrG7fSBwnmM5mkotqPLciFvnpkDwkJexYV8TMePDiwXPkihM",
  "key11": "4RWLzPDUZeVBtRUthtaN1xyYr9un3zqZe5pqWeyTsVrGXkr78xGyEsUkWTshv9sL7xLxZzXY16o4eKUApctZyGgH",
  "key12": "4UquUA3B34EppF6ibEgq4R4MvC7cnF7mApY7o1uZksptXTZSD5TNpwNgHtVhgmpTxNnPb72e1Yafbsz768FJwdPK",
  "key13": "2aootq8oUZWN3unMmGR3dX2tdfueqdcz61WpY6w9RoeXgm8ARCz7wS7Qp4Pyiw7zL9LXC4DdohCwcwLzymnLF3nf",
  "key14": "3DYdKoJwksyYVhAk2Uemd2rerFvm7PcayVEFbtoy7bYGtSazDiiEaW2Ydr6a5shmYaKtMoiT12aW8rTV4wXqRd9m",
  "key15": "32JWnYtiQazJ2341HhALwpgsQ1QWL4ybSkdALjn7ZNZ6m2nWQB1rTukyvAcUuxCMCvTVSFNSrt3QTxAoYMgdqpX6",
  "key16": "4iCmQ2EfaKNorn4Hus2uKZ7MHVJKTnt1mqja1U46hHrwLEW1hcAJBSbW5Nk7SHNyA74ykBfCe6uJQVQcd7yuQBaP",
  "key17": "3go2BHJZBor8jm9TJSZf1DNmcXDdfSXWofKEhw5xVtY96SUUZ21oPQUhvngj18NiCFa3W6TtR54zguseqQWMBcqB",
  "key18": "3dsB17axGUTsvHCsMFPsKfM2d5zf7uduqds77RWbF3RrPLWPphZ49dCJexs9gRD4HGeuBWw4vVTPcvGrPhWpCtUs",
  "key19": "2ZXKELDcNQue8wyJY6T1d7pnWWEZHqNSLQxNncfrN22yvmhovmH77fbjo84cYGJik5Zf5QCDoEtUqkkt8aiD8ba2",
  "key20": "4r6fRcwcaxEH8XA75mgSWZ9F39q7GS4dJf6XEGoRwgHrbsW8ZQhQDneTzPXB3KKau2iEvzidgna9yRZYuE5c2Jqo",
  "key21": "637i5VtmGp1rb4CVAjX56GeDx66XeNEKStKYCV8S73iViLX6sogM3bDCau533PWxzEWgzA1YyMxLq6XPmhCnyA6Q",
  "key22": "4Kr25RS1fgCvd9o318JTJXMywm2vQgCYCL8BUGaWUAoiEG4tjKFVtVsWykgyhY4c4QhcjEmgLE8XjaBi9mxbqLi7",
  "key23": "3Rvmmai1eRjH221qZGDk6ZDdDsa6qNNUszRZMxNifZ6xzazv2QwFK4CcofugTuFHLWAaKBwZZpHUrJVcpLT1M4nF",
  "key24": "5zikmRxCMcxVMwhLM1Dnw8wKTgPytGH6jdMAju17hbjPHrY2xH8dEHqDk5a1pULgf3LANA5JZ1r44Shwc7bseYoW",
  "key25": "2KYaP7DekE7KVu8Hqty6qBK3mSjS3YXejQWL74XLZvZ9srtABPYwvYik2vqiQkuR9v4Cd8Q3vwN4koRrzrCTs8EB",
  "key26": "49kDEYYz84e9jF7G4qHJ6YdnrZjfVfPcv3SDi9fX6MM8Pgq2XjYtiUL4stqkLkEggP6ZSKhAvYgW6tuyEgdGyG9A",
  "key27": "4AH5xvFyG9UB9Xcfys2zpThwij45kBj6g96LanrjHu45c7WXi9jp2LgU5rUtFDg8YDJwseY9e1W8WAjEWZr7TnW3",
  "key28": "3tbABQZw95tizgVBfjchtks7N6D19uGQ37h3rjdGwp6tajdBm463GB4xPkXhv8J34uP97N62Lr2VTF3cUuLsMTy5",
  "key29": "3R4srawymf31nkWpFjdHcmGcj1cUsMeov6UMqBTu1mdQbvvXA4cZpr8LwuXy8drR7aWDtYma8Lv7BrzCeJ1VyYu9",
  "key30": "1FmVHvLG3LhabPYX2iEAb79ajFe97LdawtmBAmV461xHTKKZ36fKM9DhTUoLEfx3GW4HoajaBCjQRCJJ81Hs33U",
  "key31": "kxkA1UFKuYQwzQ76KUEgxMoVUxCEhL7CAQ4K6g1aSWQDavUiqMArv6aiWyahNDEeFJijQCjbDfYcDaPac4XqSCg",
  "key32": "2Ui5nex9kV6jfFeUukGvqBgChekMtgVAkmHiyZ8WQCbZPPdCFT4sY2TYeUpA4Z6JJXHMxDYkqFrxdH9R4jB6dWf4",
  "key33": "4Fn6TXSY6iQcYcvZM8zZDbnd4tJhbAuayJzsaUC5PEdbunSr3DFQPmGQoGZsAgRpCmg5ffhroXmyc9jMrxjH1gYC",
  "key34": "2Mq9ebP7GRNyZ9VLwfhaZq2yNNpQAEQM73y91bncZqyZAq1QyXck7pkAaDXQrejvuyDf86NJZGjpD4sWFTq8GEPG",
  "key35": "PE1r4VKni4RQNcRbSw192qEYZWd4PF4kgh6WHorCJrQM79qxFYNiya3G1QsiiWJoJeGT1MjTNpZS8omothszXsA",
  "key36": "47BmcaaVevw5auqKgm2hM393zbnpEjqd2BmtZfrMHeHeZ3ZHnBquCztULssvuGdDMp5ZhPuUJgQJPicx7adeMnSj",
  "key37": "2tMvTTZziEp1X2Am3em5aEvSqY2Sqse4NBAL1sjVGBADTRra76k6bLJuAF7QEuQYi5TdkFfv6wB65s3nXpFxMer9"
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
