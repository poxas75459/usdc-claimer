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
    "5YEi5BUgh8BXYHQvtMPT9sM2PnmdS7FQaqheu6DPxcMtVGXBbLoT3cdDPhfKiwQRqEun2grzdGuKsmcQr78XQ9Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ztRemhAQiDHM3XiEKnGKZT222uVfymG3g17zYe8fuCQuHLh4LuMTRwKma8HzCTGFP2LMRiZ5zQBa2zuPWRNoynz",
  "key1": "3bNHgqMi6RGEjmjj5ZdaHsjWep2kWAX3ctFgr5e4FBQ7uPs4vuwWSW3agtKunEcJQYpajxZWyyXd38xFnd8xV4Hr",
  "key2": "475XrHD4ZiL2rEeuUdNQ1QcUZGEgtpt8xUcTKCFJPDK2awCaXSQTiFwgdNEoShsjfHLzb1HepuWCLPAbyaapwswm",
  "key3": "2CSCSgPQJcMk33owDFVpFmXcErQDtA3uwu6kR1yjt6hR6aNvsZPqquebLMkQAwxEQhnnWGyPWrbDJBqiSUKz6Qnc",
  "key4": "T9DnvbMMx5G371awCoo9HtYSnkgiqanEzFv66NvciMTpUxq41uS9Hzwm1ewG3u5sqT35Fe5jzE9LfssL7dMNPrd",
  "key5": "21Un4vwpsB2SAQGo7hfd84zRKLniDtw19RMbSBDqNcmVA7kdE6r4QvNMBjy9xznWcyo36Yqk3GqZQbWmAMpRMdfY",
  "key6": "4QP1VbKqYutrsVNyKe17ALwwFF8xrD2mn2fXBuqEjmUyS1ZcT7TKYyap3ranzGQ7xjKcLjJXGQVT68EHJDESzEW7",
  "key7": "3fHvNoRPP9wuxuwMqeDBWnJJDpEgUg7CyAd7Vf688L3PCU6Lwk7mwymu64vPf9Nh5cqUdsBd57nnFzxV1KXMoiZS",
  "key8": "W2DXsYcfexG8L3Xc6zdieKyirT3YKEqC2pvnvypo49VGzGbohuKWinu7n7BzuJMEFwU1dW3XdMqxzdNKSr9rc58",
  "key9": "4NsM4LVp2mq5Hvgc4kKXX5BmLCffcyT9FEQf8XWp3fUu5Qrt613xuzZZSz9T9bnTBKZmxuZESHNxGSvMLMTG4qXC",
  "key10": "5CdQDPMBRGFJsxkX1shs2QAUkmYjgRXfREQYmYSdRvk6h3Uza97tS3mfg7yNgqNEGN4KPQzB4AhxmqXnzUAk8d9E",
  "key11": "5a8KfV9vvGunKqKxzZGoZ2BhbGYVAGHesjtzSmbHyPCN31gDTB1Ayfx9KbAMGT4KEhoZwywLuE2gZWvBP8SMqkp5",
  "key12": "4aH3iHBx27AXovC1NZhMEf3EJjw1iV7tWAVccFtitXCEcQuHfXpqoRrYMxou8TP3mB6V5pS5kv3N3QsyjofDQihg",
  "key13": "5eqEuA4wtb6Kieh8zrh8HPyS777Ro76yqvcgtaonpaPwoCnJsVdXqMhfKcyC11qKvGMqm9i6K4ALFhktBaNW8rqy",
  "key14": "DsrUs6dH67ezbdEsQj2WYJURSzuB5GQtwPkLma7DFCuv4NxxLP4sYDNdRsTiEGSLz9V6K2bp19PfHfot4DTaocw",
  "key15": "2shvVWHU14dnLHDu2ZAUpeR1RzPMoQnZPieBSxfw53RTZtPtLtitrLTPLobBZ1AMfxSzfrgq2uR9bwmfSfKXoQax",
  "key16": "5QtenT7kdJVedkBVhcBJRfeffV4N2ZyVB6XiZe466UsbPhkfBQauqhjzxE5SBEZRwg7jCWrJTrJK5kopvK6phmo9",
  "key17": "3wDzDEoZz5gT9LKF3dZawEaQLXGvTcDfE8YStRCgqJMTVDPWZwrEcFaq4A8sAY1DGEPRNdyywEW2WSuDLnq8PX9c",
  "key18": "5UfAgnRzf26wPZ6NsJiFyDh4NnKTpBvLfH7GtVcqptuLWPV7wFHyXNufzAqduentpHwvMhQh8dFx3CeCjRhMCnrc",
  "key19": "3oLiiRzE1aa4TLrMFxiQPWfLdqWAfvPyqj2Gdp6gVdYx53F4hS7sDH5StbghYJimkgueNL4nCWCbBDahqRu1NBYB",
  "key20": "4iLNVuABthpRgcwNhdMg8Mgbu7rWWMQ5LSV2rmgTJkhDDvTCvopUduJFrBtg2KNwGvn4V9JMe5iDZCrTdB5kTSi4",
  "key21": "4ix5BawHjntV4gegQKHKh3ihbFGFfmzriTADYC9zC7rwjd2QigQoZMHQjKdQme8JJ3FL5HProWoQuaqC6Sm3Csbs",
  "key22": "2FBQCuFUBHZ3v9HqSJiqmpg8MBjKkx3aY1P2Jbnmqa2uRCMfJh7H7cZpb9HaAovpFXGs3qMPVETZBqBSKronj8xA",
  "key23": "4nDNjPmTqLUkXXfzcvY59rr3aQkZqTm2TRdxRSfsNyXw3yci7yxt3jDmJiWVH5e5UWrdASv3DyqW8sFBaToe7bfD",
  "key24": "9rY2xJiFnh8sCTqbVkfX9nniF35RTA4ZMfZfVS2SxErQWLTyHtuGBGtupi3bSkc37W3bUc3T6k7gD9ZNnjRuJ7K",
  "key25": "2sG7qQyyKeKibcR2PNc3MpAWkFDB3P8Nz7VYLYcadU5UZNN1hDqCUD8QJf2N5bENaZFjsfbGVDk17gfTGxSMJHvT",
  "key26": "42wv2pLx4aCvm9rAnmoqgpZVe8jfW3JBWXFaMsTP8iSwrkBwu6LNg3kxmsYa141Jtgd8qbPQRyHFDtpjitzRzmBo",
  "key27": "5adB9TEpnj3HPv71JrRRM378pSEcp2yKSW3b8XUTs6NuqvyZywBkDxjSHHgPuVWfzTmiLPNpbbqjpziSne3vJEnS",
  "key28": "z2hwNQRaukcy1GAEJ1BpAoNfKAPSxRCqZFLDfB1tezsfKV4An4LXbyaCQeRUiiaRevPmCFtsemAas5kRDvUp8ke",
  "key29": "4WkQHgGqLCAfhqAH3n4Qg3aSCqN3hJGrXY9tMUbFcbgTwijTH2MAbqWLPfhu8fvnZ5AtyZiZPkmErBKW2mPbCTDe",
  "key30": "5ihoJ4vHgyKUJ6hw6nBWLDepdhYfLrt9nAE7HtScLWawWoJQ2Xz6v2BQTHs8hPyZz2J3Qfqs7bB3FEwfU8PdxjMN",
  "key31": "4xHHjQ6qM2DkKGZoaZckEvKLQW9vRo2sUNqqdNdb5X6cWFzKvc4vQ3uWn1M3L2DW4xoZKqmmaepifQhpx1teHmP5",
  "key32": "3oMHDcXUMRPyJhubL1aHZfrT89y2SpGV5G3YNabz3XnBF1zPRo3A2js5qtY4R767kaE21PM6CkZQsBJfRysi8a4M",
  "key33": "4kD2Gv7UQ3irFwwvivuS3AKojMvp7RAq7bin5y7YNuZ9XyxQBw1iGxzQPkHWedqseafDt3BmQoNvoiRwGknKvuiS",
  "key34": "DoYDkjKgNRXHoBd2roDnFkFoHZbio9u8zM1WUTU146KpCiNcuKvzDbcxYgGBaDZYJYbjedytSQKgLGptmiVbrjU",
  "key35": "3dtm69HUArKkLJEEjpDV4jfAWhBPUsnMAZGzXAcVCzjoFaKG9VknWHsQmy6TXJ1Uxta65EBcEaanW4h9cT58KXQF",
  "key36": "ut6DuCtGYQ69M1qZnFrWjrs7CceAo9DhTAZpDQLHJLxw1NKS12oj4xu4kKHjSZjqWeYHUEwN13zPjjjY3uRRC4j",
  "key37": "27MmutRr7tRzenfjuYPTt5krpqYf6Qe2vKpEnUB98DuzXQTJTWRXb3vQCQRA6AJzbkgjhkyYGq7YV28KEs2Dn3rd",
  "key38": "4Txg3joqA1y9kKHvZbDmJt9GEjWLbHtSqeaLDDMFUFeqYDhxF9DkKuXH6ah4QQmpF8mJ4kPQy1AJMBziYW2k4Rc5",
  "key39": "5XLkigaLaD9qYHTG2pzWiWmh7JqSKD7sk5Jh8HVQ2MTRjpgkHyuoqPJvaz8s4SoNx8DUsEnQ5sR4yWF7ZKv1kzur",
  "key40": "3ULA5LBUz2qVvi1ZpCX6CcZ6ErQSp9pBWRo7p7u1c53ApauNARFkNDfz6bFpgpmqEEByqN8smLz26X8azaYwC1uH",
  "key41": "4nHhCSJf1ra5mELndXuvrPKmwg5XNGW6rg2peQKSZzAgG4ME1bFx9dTrg537vM2pgSQkMok3tiE2f6vivsMKKGFJ",
  "key42": "5r9pdQu2xU1ePhVcmY265qsu9bNUKVAQVMitEsV4M98KfMYMsrRqTd3K3tpbzCQyMrU8DwbEj8ZgPB4wNXWigakX",
  "key43": "9gsFRsjHX9ov1NEypcpUVqZUw4q233VCGVd5nyVi5VZ7Qrck5K2DnHTrCveb15DcCM8H48FgiPeBN7XpPixqQYf",
  "key44": "Ga6enRGPeZGBXDjerNSq3biDYAPmApFSZhErzr5EmkhCupZoQ5DdKVpG2k5qtzRWgCxHcFLcP2fK6mLqTZo1yx1",
  "key45": "65GmJcpRMshcsZBaShJA7wZCXthBT2xXGzcqhLot94CWFQ4SudQCsQRGAuxbtkzsy3QtHRQb7naFy5Ro3AFZaRGi",
  "key46": "2XxwD2bKfRxQCjFKUsoMnrn8TA7cQTNu4d6rVXS1r3zNUyhWsVg7w5gXx58ZBvdcRUpD5KcqgUXYtfSNnNJpjBBn",
  "key47": "2nEPZBhKAmmKfWtgu2Beq7k7wX2F7p5m4fdMFBUzytg1q5ZBhgXXmmDofrnxSpNa6gfGuuxzwobjDhznvLW6a8DW",
  "key48": "2oF1a6n3qzpFMitvnu6kwxTUxjbeA61wt2ryNTcgL5TjYZmiDE4X29T8Fo1QHAqFNXsM9EUEt8foJcbAXP9TATJ2",
  "key49": "34jesTShdhTp2VL8veEPbfEdQ1bqw8Y7j6UHQg5Xy4enmyFwj5fcdqjdYmxQbmveBs9zFEvxfFNAE5Qbi2PdFwas"
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
