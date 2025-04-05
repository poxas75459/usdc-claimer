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
    "4dBxS9YSS2Tm9GGXKx93FkKRptzy3rvMV9KLqam4uJiTHQWg4XnzWreNz9ezE9eb9haWdhUpRcELKWC53LbRvVya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWNwN7xRibFf1AyHRh9ojS1WGdkSBbimNDdD4BzhMznNj1cJfpBxoFfHERpt947KgdvCPV5UPkg2ZoTRQ2e2TYt",
  "key1": "4fwKpjLHy7pF8pr8xay3tzhjR1vLW1Gj3okpMT1nxEEGmcbMgQ3wYZEVXWMjmBYPqzYjP9rJEhLiupuboZ7iDKCJ",
  "key2": "3Pvnd9LiadhUAaaqrGKK9XWtzRFxdWwdtrLUAus2V961RXSHZ3KU7j3kHxzgoQJYzS2zFtg3H9CGK1h5CYjSFwk4",
  "key3": "3xWNZnsv77Kg1Hueoqkn89n76jyD6EXq7S7n9vT6KLE4914s34hda7wLFgk2AnMmVbA8UuyeVqL72ptpycgCy5pz",
  "key4": "1kC9VKh8875uh7NyamrKtrv51wDwi2goiprhi6j1GTnr42wok1vFN7FTPR33ZX6fA8pRYoNh1m44t6izFtM9KZ6",
  "key5": "5qEmfrVkMsrKE9yD3mf3JC3nJgupfrDsCRqTeRMz9Pu4DayF6w5zH5R4nMHVdGihuLREBpL7hPYLgfQPNkjXfB4R",
  "key6": "4pUBQmFS6E3mvnD11yBnZFMKctWnAnmEVuiKW2gd3xhzAay5yfb4kLDod9MtHHyz5HtZ2SQUXeWLuKUWH6G9RQSe",
  "key7": "2x62U3MYVM4t7BMpLr26UomkuCzzVNx62ikTC8dhTuMzzT5AkHEm3TumMyhzMpb5wEWR8BPhGPeZ3cNjRykA6pKx",
  "key8": "CvL8C4jh4Z5DpRd5qPC6sZ6hQopXQve7amJ64xH9QaQ1tqaphESqYSaEby2c574FiDZai6ZPG8VPWfvK98fBFiy",
  "key9": "3fs5uETUw9pBaLWL2ZJdGsWtfmhrRMnXX9sWNDkqoyrr9d81qUJd1ZjWT2n9sgPDzSSHsC7CHif9jyWbrtBNEqjj",
  "key10": "2KGLRnrc6XmmAjuwtResUKCd7jSU4mDi95EG3ps1DHyUxkhZKrQgWGfWe38mYgKVFNBjdKRXWFkii451xUNpfDYY",
  "key11": "49jjcfLBhGfuqXrq3eVcLct7KdyjFznmVp2hjvYaFNvvg8xndQbhnyzKYqB2H88bH4BJUEcxznmX2W8GD8phWmXG",
  "key12": "5vrFqU4GWVKLqYrzMui8dygjo5js89t4kzd24KghXhJDu3mZn3hPzg7iwAQtzA5fF1FjrGrXBvjtia1jFWronygE",
  "key13": "3juq6xjJ34o3Zog7AMpMSETUt1ahxivRmAkEqurFmTQ3sYkgDoLeCG66CZpjDj9JYRkzjZVYmGNNXTArh8fttVib",
  "key14": "3MHK5eDZURxMpUdceNig1uiYTiWcAbWWP3BgEY8Z7WFqKAJaBysecZHGas4ibCZAtQPfc7hMYYYMtbB5RuADmftf",
  "key15": "3W11WSSYiCJywFEBhqJnxrd2d5L6yDo2iS8YBeQuiFc9HhA4dMb4rntdZEU8tm131dXcFz2cuuGv9597oge5mBKU",
  "key16": "29W3dq35KT8sfr6Wj27xuxHNXbdBMdB7q7SfdkawG6hegSpuJHsPPwMrkwkj1Z6Y3TeyeqZc3V7yXUz1PRC55r9P",
  "key17": "fT2cPH3YUvxka7UrRuNVvPAuXCe6zcETxVWknaFGzPtfZYHWawtdp7GRp5zkXEczaRPNRWwbjEZAEDNoPXSi3tg",
  "key18": "5cUTWVvw912jpGbUAKLrGE6v9LPQNQreKSbZkdSHafNocditQKWPeWv8D9v29yGQ3n8Udkw43UC6ErYpTTP7Yfgz",
  "key19": "4wSEKjX6SUS9aGbWVfhV4cvuX8PTgAuTtg7Vp5PsXa2FLnUborCw2Nr4T7TMaZkaWScSDzPWJYYt8Dba3DFkk3wb",
  "key20": "3AFdnPSPSBM9CQqqV8UuYRScyATcEfMSFf1zFYamGv7ZLXSQmiQGstSaicExNctz7vtBFSrxeU1vDuPAPJsHsp5c",
  "key21": "eiELUHKvWe22PHZj325zmCdgcz8FUD6Qu6ziPfcWYB5fR1VMZuiUzeSVEv9W4KoEu1yHH5yHBU6Gj6fwtSH9ECb",
  "key22": "4ETbSG1EVWeagozZBuZhmy3CN2PeFn5qc11wpi11HMBN942QRh9Pgx4qtGFNKBxPEEdBrK4Gpgq7z3gVKcnT7g4u",
  "key23": "42fpkPNZ3ZFM6dDHybmxCmsp1ho9A3ge7a2eRWsgXjeszA1xDD7NjEU8cvRBfsBwNusteciyFe9jWT2fEsQqERRk",
  "key24": "5rSi8hX1eUachw5JSYGjJ3v4Ud59y8atUsLWKPnUgrPYupa5zf5mpRCviDCZXqYQFjmUekB8EmekLqSEzZfpBw5b",
  "key25": "3aRJ6kmkYX9hsbCXptCq8jqdoJxAqJLcjBWecfuxC3jEZBbAM6vQhoDXWtMJVyqstsVfChmEEn6K1dUBYKVHX1ju",
  "key26": "Qy47LEn71Ne1tZVUesYburHK9wT4Lzyvt2YuVyoe99vMZBi7ejQwPoUmHqDP659Bgur5Ebf4gRZraLfAm2mPnNE",
  "key27": "2wick63SVzzrunMMrhFXJpwXucmT8TZMNPzNBaAAxSsBek7tWj6UtCjFokvxy2k6qFY2ts6cVfjVJgW4JLKezJCQ",
  "key28": "531vpSqQ2oTZDy97kmkC5SFHTNSdVE91urNxCCduEzHYy98EygDW5aDRTaPLfC5YtMKLPYSGxBqQqiUJS8A3VKhT",
  "key29": "nwwE51QwWd7TB5hyTgZYeFJ9P5d5PqxD12dTEo6uKCfmrsTcwb4obiPNZ9NNfczLc3uabDF2bvY25pZh6PthuqB",
  "key30": "5oNWRzgoRNuBJMj2eUshH1RxVhskzc4UWXKjcbgV86ymV5zMAMLng2KYVPwGLRcyF9WPXhBpFMM1o8BGaiU98eaZ",
  "key31": "ZugGjVDoZDj7qrG9Wm4c58h7LFv1FkkYkX2EGASuMVYa9bow8gPeD6RUjdXQ286RP3H4j979P86ZK7wVD4vjNZu",
  "key32": "2vfH9RGZRhxVLCHotJeuLYTjJ8ZBtuvgnavSShhV7ZyhkWZtv8kQLJWW2gnMdMxccsLy9wavBha61G7EHz4AMuYq",
  "key33": "4FL4cuVQYheFBs5nrUBWrr9dXyuwdC3rCVG6Ga46ePX1wqZ52JRVGzbgqMtKGnUauq8HHnxLjYNR8RUKmu2w2MUY",
  "key34": "4E9Uv6oDhKVQJaEBCxBT9CBoAmyyAjrcYb5fQjFgrojsHRNXFEpYgZh34328uTTThNYrmMVLVsn58YgaQcfiyPmM",
  "key35": "2Zx8t7Y8z4hfZEbE1nnVngW33SkijnqFGtJMePdhNArWakUdq6i7r1D6YTHtdGpYLmUvUhh82Su1jSUXCCEFR4hK",
  "key36": "2X4hmgCLnggkfHwX5gEMFz7basPXUaWWdYfsEjXdpPYtgdBQuRuDvxd6cL7Ds4Bfz59kkaKLSeipbYeyn2xbpYBK",
  "key37": "4k6vsn2PAq64CTeMjU8n6senD99RH83aZVNLgMg1jo3ZkG9BYQXsdLTGjh5UgevoZ2E8aC8uWbHCMLQXwxwjKfQR",
  "key38": "5KF99Am8nwyXESyjVqvMYruk6DmefjNC3dZHaSLH632EBGdEpDzrWTuEM7n6vCcdoeK7iEZTAyEwb2Fr2q7C65Zw",
  "key39": "hSyYP4ir8W1N3RSJpBwapJfcePvFnnetUQAzyUAw3buyDeA6xtTenewgZQhvD9bBey9pdgArxSkBLxJ6T4F3goc",
  "key40": "25eyMUZicgtbZFdobHhkCKUCJ2YoLZZVqYhan2Hi8VBRvj5TGoPDtAsjtokhAZrFJMCxkREbHvGN3LaWvRVhtUCN",
  "key41": "4YooNyyruGL5EuikfSvxa9tNP4zAhkPbs3PEkwHgARvaZn4gcFiC4nEWuTydVDmQ2SLM2qr4DmdyQuMYnxZPSTUq",
  "key42": "5JrBCxawT4qMC8AM3GYX1q1NPvtKxwreTeDBgrpT8yEnyyCzFg3ZSW5bwKdssezjgmiztqg9D7GhPVUeCmDnamJP"
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
