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
    "5SXv5vzUEksLg2cF6NRrb2b9oajocLGQAmMbo7YBmDBgxioW1JsKxVzL7tAiQoXzFfneTinqxHtFeB71RqXP1HEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpsgHN9tDkeHYfVmT24zSFeM4eWMQuZqNuSKnBi2qw7Bod8DhceoJgX4FdfmuyeJ4n4T274o6ek7JkBRPw6xGUb",
  "key1": "3QFEuC49Uvvdje9boxmZtK8822BvBaFsCsRyxUQHy4tZm9jicp7gDoBg3kpovB5C14YqGoQYNbNekgC7YD4B92Qm",
  "key2": "3GZCGxHLNusi8A9rvt3gZzbDqgKNmCKLPuwMeZKbtUA4Yx7PhXnmVwbAcGmAxGJrtfAffqK95aHJ7Xg8t2Uh9LuS",
  "key3": "5SoRf2CaL5obsYDm2foE6vvub33TD8aE5cnJQZyapM9VeGsfWbQNtJE6rShUcskFFZ5fxkDN65RFn6BEEcg21wdS",
  "key4": "jxPS8KLWk2di4rijTZWWDNMLLBp1X9stYfsnpqgq38TJP9nuXcZzs43WvdkXcTWnuq1qYW8SShLoxqAPCSrwQej",
  "key5": "4Z2nFEXqtKrn3NQDMHzyLUABMoPecXeJ9bN1y2LHKA762SA9VEFmsKw4qSn2nyeM3bV885uHjxXk7CbLVdTzie1X",
  "key6": "2CEp8i7RviiswYJLejFaR1kHsQGoDtgFJHBphkkAFGEYVftwfdR6QWGEJzf1SXqCJX3f4SZE15U6ZfHK6hY4LpWY",
  "key7": "2Hr6sRtBi8DXPJSjorqQaQBRjMUWepRSMV7eLHHt71X1Xn7KLJpbMHnJ8By8iJp51GRw7YQ4hJi8v8ZaTsLcfbcM",
  "key8": "2zkJif73Wz3WwhUqtuiZpNArke34JuovJekewobyKtKafNfcb1uwE6FKU48dvuLV3VZTMgvWSDUzkFLHgARYSnEf",
  "key9": "3MsSjN17cJVveBzvWpz3BQLtKJht2dCAUMkjUtxrePegDEjsM9WDxnPcKRSqho3cXMsWVsMgPFiLDhhatogV3Dkm",
  "key10": "24Y2pMdWpzcLouH3WGGhuZ5F7gMZic1L5mdnjS3c4jhQuJfNuc8RPDw62GZbr6qjH5t82S1fdofnmSToAdwEkjqg",
  "key11": "4r2LthiYsxCjfzYhe4AbttZgPyBcPiRu8juNCK8FZ2fPnJ5C591BCNjuJnSBzRaLxpawUTpxjD56qgJ7txmwQPf7",
  "key12": "533UY2k7bE9pm2UenUmdfoajJptbTCa1WATRVxXjjSNQFoybHKjpPtXfUyYdrSJWMs6h21cdM25zzun5s9q85rQg",
  "key13": "4gGYog41pzYQQcKYuBX2BNwm5Q9axEq2brEvJkr41HmSBWaquot1mfkyVUixXJJJXjTf7Zta1XYfPKPnfthjaZBp",
  "key14": "28KzF5kZhEJz3ZfHBw5szpakEYhvEbjQSye3HaQN7rCAVibsWoMS9ffT5rYU6toXgUa38xB8XoVVNeoJ4hBAmhTu",
  "key15": "4c7VDmo6S62y4uQ6GosGDEG8Ujbci2FdjQ7SN7SbNuETUX67LC8Kr5jA3Xqoj6szPugbD3nKZ9qpFKiGe9DHaL4o",
  "key16": "55X6SoZyez2m7bpNRCn6Bh7M51FXasdzq33HJAwG8uZYMARhpUo9LdLbWG2dHthbE6kJyNyhqafqchTPWzU1AFW9",
  "key17": "5u5dPVk5Vgoy1dHF9zBVsv3SiLf5TkNqexeGmsjuekAhcvEStGFE8JXxgPK5TQyQ49qWmz2HbtrXCarqmhN7VuQU",
  "key18": "3JyFEpye7tJdztFAeDPZC65HWumNZmAHgcme7teXwDYxbdsM8GqtSLwDwuJtkk8ReB2B7NAhorDk5gTa1JJ4rndW",
  "key19": "26J9hM6mcvDKeLuJV3tSKV6KMTE4G7p7K9zzYUTck5VxbobSffChjTeVYqpKV2zsqKwivUsr1coq9hcvatdBwY42",
  "key20": "624mBrCr3GwdX54NQwe7pwsQvUfDbW3rp21eUdsxpDm2W62ZiY9moQZUT2YoF8UAzdmArZ5ZGr6PemWTx4pGj7rd",
  "key21": "2zkgRLZV9fkHWzWKeHV6hBTakekEL2dJNd9VHatNZKKsLXcrVdKGTkppxP42Zq66KdMnKDZVjPfBiZNv62sd4v3U",
  "key22": "3iK41Ct67WZjtsew6eMVw9PeFvbVE9cnvPNW8xhke6YoqqGbdFnYYU3ZiAYv2F9To2Z4uyE97sb33AEwFqPNy9mV",
  "key23": "5qCbqC2m3bv4eNyY8DWE3CQT8E1vEFkCSZP6pWEmFbmaeCiGLk38wooujiCocbTBEP7r7jYPQTud5yX8zGVsNxh4",
  "key24": "LB2tT5L6EUa369sbTMCbYdFFJ8ywmjRABDimFdS73JDyz4QmPn8ivXFPgxwfxsrmXio71mquPcLfrZ4aiNXU22U",
  "key25": "4tMJMfSxsrNKiJEfu6icEqiezKL1LF1UWpUf4bD7uqHZwccK2uN4H7hVtinxeNBHNXbmDcbSVsoV6sxGyN8X3Dyr",
  "key26": "2yUssG2S3K2HvFEbPXNd1hxjwDnT1a94yuiLzk2KFTVtWsCZibAdMN81ttzcTTYraF6sbSJQs181TMbdi3JnsSat",
  "key27": "5RijmYwJ2YoyS2VBbVoLhtBvc8zQghuyKC4MhWVBMag1tUTqVRZtGDQ6WvhrM2gPBg7QFDBeM2QsjMihKG5k6toQ",
  "key28": "3vPE2ie9c3byyvkCednRWfiaxLJmDuMDVdc5U7r8caffThL7kUd3xqbPo6j5j157VtTxp5hqKuhE8BYg9djEWN6g",
  "key29": "4hB9WD2yKrHLJNYBczisUCVVq6ajybri64yx5y7mZWhBCUt7EKMzSa3oYwquDnofWQd4D6j1QEcfksurBDAAQntU",
  "key30": "2UmmSq1ax1859aY3Acxhcn6yHERQVAJy4KwazFSvietFLpVgrWeJKEQxTfypwkksGLkX2CiXE13jpEce2tYtq9Zo"
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
