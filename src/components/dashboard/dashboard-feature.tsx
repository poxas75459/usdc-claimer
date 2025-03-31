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
    "5BQCcgjwmFrH2D32YvRruKjM2idqHX3dmj3d6kF96JKEkKaspAXUK5pYD2PPybX6QNhURStnKvSxLkTqWPNBSeeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSRgUeSqLCpsWSwtFw6V8rZmuS1SFN1jguVfXVYSwmTJ4zwUq5Su6LLJA558PhYe6QgRUCUaZVX1RCze8cQn1uv",
  "key1": "5jxB5SrCsFA18qfGg272vED1scrmBiaQuRBaERPbbUg1o5YMxkaMRajqK7QousZXxdHQMKZRakqEQdHL6fizJ5Qb",
  "key2": "3KWgFsC43KXop5RJ7bVNujSr2yHSojTu3Kfy2MBpMoGdaHUyEZcCJHGspfZcqBHJzwzGACedMTUPHUgNCx5C79nx",
  "key3": "37oV4gKX3Q1mwgmbW6fPQjeg9TUs7gPC9W6fWUMYMxNaohRdFmGQGFQYwr4rLz5P6VHQMW1jUC7CaNqMzfDoSMK7",
  "key4": "2qgEd3LfznmQz5XJNkpbHx9QNerNYJvy3fr15G1AdYGc4Eog12mwxen4C3u38DN71DYHEyK6vFNJy13ZDHFS3R9F",
  "key5": "4d3moSSqfnKqwKScmPj2bMKcc5a6ieL2hsz5KK18uDpt1e237Emq9NvnZPhCLY4CpFKoF9TtekCpgXNm98WF9oQb",
  "key6": "63DEmy4PzSgLQNExr6LyiiJspKFeRqXZXoiuXAMxWr1wcDiJeDj2bMyTFokWdA2LjrxnK6hyNAyzLP4Xme96ZcKU",
  "key7": "2t8pr4QCJ8cPHJyuYTVCHkAHC8p7eyRGzqHoK1SibNgvs474uMmcBATihVgZG4PFGtTqjqyMxv5ejgw7tfLLUB4d",
  "key8": "4riDDMmgVsYLQtNXh2iKFfNrjTMaFqFRC1xYX2EBhPoC5vXWdts9MAeteRVvFJYCrmSPTaiqPPmsj2Ac23U7Xfi4",
  "key9": "3BrCqmKTzz82bgMvtPoxRzfBrLpnnhxG6htyn69kGBRdxWjsHNiDdLvbFPLNimHHGgZxTTGmQ9oMmgQkQYyBiNyz",
  "key10": "4jU31qNZYBYvpXaUtvyrciPDXQn8sNy2qRwNkkv4L9nyAXGXJsz4K5ftX4e88URQhH2MCq6Cv2DvyLc4PWBUuKtz",
  "key11": "2D7Q31A2vbZJeeeZSsBqK39PNVidjPZgdWLfYaJieXdXoH8eCDtsBL4mi8gDDLgfP6iRoRGaMUW2GnXaDMZtKrtM",
  "key12": "664QMx7RUQmHqn3eTSMf4VpNAPNztFYBww3v2oWAxtNmAfKJLxAqzGHjewzZ7AgNygFTxBUcYZ1sQwpADUu3yRyv",
  "key13": "3udVfSFeb5KmbyXNZFKtUY1RUbBWdppt8F7zjGoy3odv9rYY4ePz1NZCejwBHDQt1EX1UGY7q6HtZ89fEh21bqmu",
  "key14": "2D7jWVCXtcBcAtchYkjibeuCw9pKVtM2b2yhGcsTd7fu8eQZwZA6jH5MccoCLosMokLosRYZDXkejr5moJFshPJC",
  "key15": "55XDvoYkd7F4KArK7fzAWSpr29VSSCtLZZaAegTsuSJ4KciBDcPR6yWWPhWMhbkEXjvbPpoMBUxozC92z5rygoiQ",
  "key16": "2ABKgeznedjcbXfofRqTkXiUNnwXuwEuJ7TjmkQaqRCgT1kxj3LpNzzcFqeVNgBJmNmUfGSpPHGgct8kq7Jn4BZE",
  "key17": "5FKXoHno8ExzmeMQWSFfMbjPDiBSza5cnyZAYzfBr5ViRt8knYvT9dYNroWHAnnnHzKPL1hAWUn8BaVpW2XjTKZL",
  "key18": "3hzQnRvVLPjX1drkKcbwaP5SDviHEfVyPX59AbfX9VqKbRcVfDg6w1ZQMCvBPdkc27Drg6awjDpzk53V32zAVqR4",
  "key19": "5k7c7H5rwTQAexe3rYfD2GvfEPsXUoBDzzRh9YKwdsAk4pkwcPpNFWHuqiogrrModPqoKMQrzHjaFgepeBmR1f5J",
  "key20": "614382dJor4ch5qxqU4EahKx1QyS5yVxW1W7YZL4qYoy7sbyJCzPParDkyR1u1Li28hwQsVnhyGHbdZMdqRqcXf5",
  "key21": "3qY9GdiutF93orTW99uUi7i86k6pSCRhFrWA6DF4C73N1S1SimNK9rez82Vyz7cpCcPDPAMchxoYSwujFWCjkxcc",
  "key22": "3x1Zi4uimi1T9VA46KVvGuUDLA6oY2c7RjS8cW9AFjm4kR9PXwbaWLQHnwf6mxJ7xRuhf8yHMc7M2oTNcU6MFXHD",
  "key23": "2CBdbaiRE75qse6Cf8uNHnN7St9LgNn1RLRarsqpe9jSm2KvenutBcbSCDHSQJEgbP5xS9pEaSX6iSiqwBwHhSr6",
  "key24": "51yd3oNtuHDwWCYkntwraYFLnEzVfNTtrxn1xba4tKwG3NUjXMQpGUBErQ9UCc6Qbq286A4mZEoUZU3Uc4hgCBEc",
  "key25": "5nWW5CAsbghTSBopMiZZLduj54niufKpP9ng1aCx5uanYLyNW4e2kNKSk4PoBVfE1iC747fgdKRsGyML9VJJDAAi"
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
