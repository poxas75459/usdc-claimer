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
    "4ESrRa6Wggr87vA3zYkLQZNxd6nLVda66VT6x6a2FxvjjHUY5Wzkca9BQFJPr7H864BpT6V8xht2RDvGHEutu5gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ft73PHGYvhtNcR1R34suR15x2Lqe8VH9c557WwafUb15QPZsSGLbSGhbnbwkyVa9QUbkeAq8Jjz5pc6McT2Wrba",
  "key1": "49VQ6u7v2eAExJuV4AHq5VUSiCMpJwRiHT5RLDG7nbXhzKpxq1T24LD2Sto6J4YMWpxsWbhB68KEeSaiLMvX9ZDg",
  "key2": "4ksLbSPhMTTejPbxNWyianuN3nE4BxVeTmu5hszha7dP8HJWG2SE5swVeYhFap6YKGFdBjF5DQ3Avm9Q5zhaLamU",
  "key3": "3Hs4n1Fe5ywrK4PuJCfq1n7gkQJctNNts5UCwD5dCKrZ6iqBnaSaqWNLBx3cCT36dtLurGAHmoeBEfjXzMefX8X8",
  "key4": "3wrhywo6Dx8RyMUF9iVNzypdgzhHPneaYbft7VLkUkxsnsMo6okKJ3GgBzQkEUDe7w8weQeaKqr9MvMbT3mpS8PX",
  "key5": "5u73CrGsi7jVsTAZNB1Yf4YMRH94JP5X6LFS8rtRJSY2qvUr8WcBkcnt7sAggoSMRunWxwLHcvE16LiMKz6DwqHr",
  "key6": "66QQ4XBPWBG8sagJkz7Nh2v2UiTsmD6iWLjN42YZYXRJ8G11KWyoYsQwPpgWQm5bBAh38SYxqurWBUijx4SwBtq7",
  "key7": "3hypGzQeBj9N4eUahPAzGiXX9Ej39MLnsxyuMpuywMwVXUByDkxUtUvSVjz7PrLc4RktqaSZXDDYzyrcAihSqc7A",
  "key8": "5GoXupZ5XgFQiLgZpMk1mePLfyUbhckveDhhZBzJSVFQBQSycnC19PYnXycaUet7zJgmJjEw5gR7W65dktqEobvS",
  "key9": "5U9dVZXezsYN1SjHM8n63dE2xT9tYKkjjuoWyXfmxQwkb5AHGa6YWycSa76iqNwCSqu36MXYZK1AS8m41X5vBpb4",
  "key10": "1qFGeCJCXJA1LN8nUT2rZjdPQDQuPfAb6XMC6gid6Ub38CGQ8PSLQa5TLpu1Kg6VfJb7GhFsnpxsCrCWyjfyu6F",
  "key11": "3p9TD8FhjjbrE6R4DjdB24eYHf51tukgh8L356JYPt2QobgppwZeB4Qeo5L7KdECY5yPh2UpB8yZoz3b5TtB4hX7",
  "key12": "39Mne1eBX6UCXjpzpS1NY4femgPfd1LX3emK4EkGyAizR4sD7pCQ8g2z1rPdaUE2ZvWAzGPn8998EJGvgMNs3CLp",
  "key13": "2kD85ZspWcFr5sjBdqYu52XLmPRvd4ac5tZEyziv5T3GWRiJWx7gYsaotGRRAw3CWGWVzL4enMhRHpG9e4Jo1Usi",
  "key14": "5pZmdNUkAjohLQF7LAipYTUoPxhkhM1NydpbukbCt3wC9KtfmSeaNz9WwP3sQvHJqj5NUgCgqdWFrSVeroiJ2TXK",
  "key15": "wKZTk3Jyw918SShFaZRFFUF3wzZhfpwKXb3YCyRCEZytaUTQR2nXawGktrNo7iAXBqU316XpqEqn2bEHGHoShrP",
  "key16": "nVtfu4rLEt8nuL4qqHCwedZUw7Lu3TuHLQF4bAjFCaH37xGefRouA3ZxrkFjNeZLF98e6FTcbQ2M9Us5HUfm9No",
  "key17": "3RrySyoPTwLQGjiH3vSfeCkNoZtpFGrePRz41zvkdxmwDboJFF2r1RYi8WVdo8wkT1DXR3MFZDX2cSr86ATA5qac",
  "key18": "3eGGVs5vTHC5kWXREfXFb8eNN9f9fhNiYZiLUtPvoUpBKQPkuuovdYxo9aBZAobxN6NCZwH8Vyyu9HNZ3CF8cUfZ",
  "key19": "5JZsgFBmDUTnh8hp2CWR5CSu7cFANhYyQrjs3iqfytDTWP9C3xwR5f8r5ucnNDHbsr4wDhn9jf5Hvp8MZS6idaaL",
  "key20": "WmSzxSi2qT6PdfFrh7J9Hg9YXscmEx9ammPvotcPzGQuG9bHco8FtxotoGPUJ5pNpYgxhSkp7suxLqU5eRVc275",
  "key21": "kn1rBJNf7CWbardYVaVcLQNCALPMLxgjWByJadQrv6x7oYPMMg7VEbFPAS22sTt4Zpc82c7ttaR8WZrXELb9vqz",
  "key22": "3D5nZT6J5LukHPnXNezVeDbe3ExWRFf5csPeMUtbA5u7prBQETmMaUs24FqixV5rLkGHEJzCSYp6t8tx8vYQFzBF",
  "key23": "4SstzMxhe5QQfhsuYTmU9zX7q2nbj3puASsW1Md48D3rihALSvfjgnP76CfxSze9UC6zpPZ1DXNF8sSGT8VcvHSB",
  "key24": "2HPYzWtvBK58pM6ubspDWcYL4kDrGU2DSjGrx6qaB9H153oXBQhozk6S68gY2noV2hkWayVuX5BFuPaQRr5f6p1s",
  "key25": "2PEEJSQg4DV9bhcsJcxF5P57FV7zH4DtsQJ6XBQaPJJVb2WqpHUT9QeToUbQ2zxE4vEd9Fo4dVoqMYAfs8PvRusV",
  "key26": "3XeTX9U6gKwRWNTPkn5XE8Cf2TENqZY3VX2kwpA5MCTLzdT2WuJBqpGyPssEGQpDyzfjmNN2LhmZf7y3GVr3VdTY",
  "key27": "3s2uVPQhGcFZTvB7w2NVggZtS2Eyry863aCwn5da1qLKx1sDm1t5y3PsyUfGChj34RmrCZFyc1pmoe7No513bHLL",
  "key28": "225se9ni8eEUZr3EXHk8NMsyvHeNY6BCmzgHuEyfFcCwW1rrQjbcxgmMgRMjZ87ShXvmD7idxps86j46BQ8wHZ7M",
  "key29": "5wndG3m2tRyQ5HspwneFFiPmP6gexchbrtChhCxvZq2v7y3p3N6PeyJWY2HG6a7bFFdn6nGt74VAN5dQUdS3zbqV",
  "key30": "3kxau2dDp2vtgzZX56dDaNTFBANUyBxcM4WEvmrN5dgQHSHGXjoYAyj8MgoSAqc47F4JZrBrbH6VqLFGbDFQiJtY"
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
