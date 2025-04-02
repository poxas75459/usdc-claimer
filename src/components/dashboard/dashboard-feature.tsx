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
    "LpjK5Sbb3K3Tyikru4WEkfYSjWByTzz6SQWXpbhQZM9muomkL9yP8XhFTv8cAD4cmDqiRbTCX45qnL4byPjrWeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvZmz5vBfzMKxY7ptu9tReVzQE4XJEpx85h3R81WbKFTDVNAWDztjquPXD7Ta4PXPQ8t1s7t7TMr3DtP6XuAaV8",
  "key1": "3KZbPU1XCTTWQ3HchVQeoMBwV7HuFpkniKetnnLMExhYTHUnXSUxywp4Ka45H3ppzDva5QtwAdi6LBhLsPziENTx",
  "key2": "2reWxQJjZ9guEUtUpPTkcuBJS3n2NzRsqYBRGRA7imwmtXrv2K7QFQ8bPwk86i5DWa2HmFVs5jQrwpspNp1NcrtF",
  "key3": "5pkFhjtHon5BUGQw5462VqoSpW52NKAZYEvoyNteL7hNykesQ6sTy6qF2URwtp88wwYmhT5okNWkPC8SrMM45J5A",
  "key4": "3GeZDeW4KMRZ9hLsQg5AQHd76zeoqhJwnYxcU95GuvTemWodkfTezUUnMy56CQxQT7cDg7PpGnv36JZFG7qyKrXq",
  "key5": "41EsSJ114rJiZJieXiQQBwCmPX3FUZsVuw5kmCdfvPnJXejwgKjCjTo5Au9Bdwwiq9VrKwhWTWmSRnPQ1yu4FMwZ",
  "key6": "23msFr7Qfkb3rTPpKk5Ja96sdAiXn34ioczF54pXvr5NeeeyA7fipf4fULYmJQL8wZQX271v7tcKPX9tfGVGXGAH",
  "key7": "2F5zbudRYC5vxajnhdEHXUUggg2hmSYxUn3f2KDkMia93x1vC7AuGz1MVESNwjoTmun1smfXMwnPywvW32HZVf7S",
  "key8": "3CV2YNj6bxtcwgWLRYDHxgKdte6x1HDKT46THRbfD5y47oot34Pn5G1MhVXu5ZrZMkk9ub3dDvYP7oztzsrFJE66",
  "key9": "L9ATZMLCXsB5RHwRm5UtK9QQpUzpMjVReJx6qjNkAywGfLtXaRqpEHZoPHzy5mFdVq8s6NuscLHC2bFy4khzhrF",
  "key10": "58xkNPJz4XKityNYmNqydJkSDT3TUNWBatmdmtXbJvFPd1hykwXdRnW6ktD62cbUddkm1snVAh4xoG8EYWrcRdjS",
  "key11": "5H2979nqbJ3RmAuETQ1SweZ1rZoJYdtS8mzXdf9F9Z67d3kc6831AXMESwvpHL3tx2U8mNczWKyTM2Fmrz1ehfn6",
  "key12": "5E2RBHu32e9BNwpow5kH9UD8UEGXYQYqiWouHdqsQ5jnaCB3wDbBMDrKLQjNuUoQ3PuXuRGsSv91DN85GC7aPstF",
  "key13": "5GfFhz6HztMmJhsJF7psmoY7WEkRoRB5zRwA82YjrH2wdc43fspNcGhYJid4T5ytechd4wF3BNU1Yy1kbiTyYVC6",
  "key14": "278gD3LveoWTFkwuehd6iTD8djMEZFGSisprPgCAEB5g9XMbmnXHD95k7X353PSvsKf7hiesL7vRjo73kDceFk9X",
  "key15": "5PzeXxXgnYV8bY7CTcs2jC479dhoKxNp7tTbRTeLxDYtutJsUvNe9fD83S1XYsMgJfbas9FkrpNdS7mdeQaPMKLY",
  "key16": "vJ9i8MZ6WxTSRarDXm5iKH6AEtTge7cE5ynZfPrSJu59vf7DzbX1sEZqsMRjocztYNz5TeHdgpGr4mCu5Hh9PqT",
  "key17": "wwFZSgimY3cj34YG8T9jAPtBooKbAAMJQiGhVkTd7oKkPV8Yf5SNBr7H98YrjrPwvJ1ScyTmfdDMRHzuSedRhgH",
  "key18": "3FHnPNmRCcmCwp4NGA42b51w8dbU24cHnqBpdEwzMPGTnG2xqTCdPWkTdR4uVBebkSUf1tch5r2dqpDB65FErkdm",
  "key19": "58a3hrKsLK54hhFA5jRXVNgGBzygRe3WnGQFkC1mrgPpyWwx4DtR3SQGzcGh3ERv5TFC6v9JMxknVM2w9khGf7Jo",
  "key20": "5ySSQccjuxWTScUmwRGUFPG4DesF1Gm21jqAfwFgRePptzGmK2WPh3Pumzh3xyFHgnNNyH3gAsWLYMus2LMnBWBu",
  "key21": "rZJYVTPKModPK6fz4w1yAPRgNN4byXm411rxL45M9BzN4tFXoo66TLLWgfERA6ouyzgH1pwUeQv9fCvRrGTWaD3",
  "key22": "37vw53j9V6Wpam8ArCBs1AUhiaczLQNeVk6xeWJeFacjLo5SoMYoLWX6yR6XybfXpEbEv1gZ28uUsmRPbvquNMUH",
  "key23": "GwKtcoQTPRAd9DQbW1ULVHsGDgZ65k2GNUYyH7V2KJmqw18yTWfoHAumLWax5WMiMXsAuKBFahRo4LzDpRcZrvr",
  "key24": "2ym87HypbGpXtEjY4CPZiGTwPnHkUgnvNBkSJBgXgxoRYFkhsapp2vLhjyV8H3n5MB6hWy5yaHHpFTGRneQJd4eC",
  "key25": "4sB6saHPsYT7JTxb2mtohveYVPWQ4gRTRuERKEvskPxTWEmqqZcFQwYk8xdoQMJhxDoM5BSgBSwyr4n5bSNxvZhb",
  "key26": "5zGAdtUiER1jfxv8rnNXvhsxrbH2w9v1YFhVWRiMgqu62RnKPHymzuVUJasyhtXbEAmRmGJsNiyFQagtuRRQwXGC",
  "key27": "m3swtx6xNnZVvdLDu2PPUQKBsffsLVWJtDXHcnBzRFcn9FYuys9AVyN2XUs7c1hY1xttcrmFDCoDF1Rm9Sd7LGS",
  "key28": "3HqYW4HTqrnZWwjKgFe86aq8oS8YbqjPrQj2QPcWM2PuDmBvDe9hLffUQx4H8qT7cmyncg9UggNTk16jwBgfuXWM",
  "key29": "5dXxpdPUoVJCj38BoLZpJWH2TovGzWJ4dzraS3ms5JyL85MNwCscEkWk6iLHSL31MnrnkzBBfcWtGPkowcZeqvQh",
  "key30": "5Hp8MH6fdDERCQuBmMzP3FAV35eAjn979HvUyVbDxikVySGv6RU9J3qzLxtDHCVVwCvazVsHMG5wt8P3YLggBBrG",
  "key31": "fr8B3spjER9QavjjuDg6oV3D2nQQTApHY45S8wtUJm3BRyhjUtdAtuAGKFPxbg3YoFijzd9G2r6CX7tpdWwMnbi",
  "key32": "5JcFUquExuCK4RaMcEVc8GVAKK3K85kjgQpCsCbz3eQKpBWoPesuV2998Tbvon8uWfasCxzpsUM812HGXPnNgn96",
  "key33": "FktaBj62pUYNJYfYQbNvh1j8VLBifQkRHZTBN7v6UyLRwZqsi3hnvyLbkR1hrpZS5nkdMnFfPzs4fQtfnu4oGJe",
  "key34": "QZCYUSkYUoSNg84jkaDwUDoaoriZfAKdrkfqqmdJTnau4DNRxCbxByTqt8jUTdesgH5rBhcZnsrWRBm2M9iLDXA",
  "key35": "4GR1fbSSzU5ZUYMPdWN1LGxBRpuziAJQQ445podLeLJfBkWZee9XneSh4VEqWNGHBscTGUdmQCskNMT2rFq6SsRP",
  "key36": "5d7JnNg2rXHNnUKCYFrHF213Uh8Bmk9dbYyaiLXFQGCRrnjvcnfP1FB2Pmv448S2cr9jcNavJWjjXJxNod5oyYXG",
  "key37": "3mQBnpwpB2Pz2tuC5em4ZmXr13DKBuCk1ww2S24gYXaNL53n5EQTXDa9i193Dhxk5RrG9Kee5dYbcn41GtuYMzxa",
  "key38": "2e5KKoPE4vDTM7gZaLgsNZWhMCYK8z9mqfApLto7CbVN3vbrQtbEcZmWaRDSp1FFHzREES1rR92X1W5NYWrRKNBx",
  "key39": "2sf3D6hrZhppUEY2cijJjwond4waDav7KWCsJKbSuvMMozbwjzRBMZQsAEAoumc7iPiMWUamDLjEbHJWWu6y1d8f",
  "key40": "5XjqcdVxWatpx6JHdcqg6gJ5GHNnqfqDMYXz5ehrBhNjYjmBZX7Fz2cMFfRNVMRgNNuYdLR6fCUk6aijW9Ksuikc"
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
