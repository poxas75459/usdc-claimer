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
    "2gt6WoyzxgzQjhYMWvkQW4v4h5yxEaAcfiTS8jeVZrjoJhut9Em76WqGjYsmiGPrzGuV5gVzQ2hQc8G9LAh4nvpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHQXLBUCRE2WMuG4jMmAQJrYRZDwuoPA6xzk36pcaUPQpRXXYpKMKB644C4wTmtFqvhC2R2NmwP6AZyDKasWXqp",
  "key1": "T3gN3fvQz6D216WWfALGYyzU6s2eGKrVzShfhxW1f72fMEHsMCjoKNLb41Ays3p2HaiUa4ik8hbjzW9HeACqemY",
  "key2": "4iSWxTiC6eZbSL1oRa24QusXTnNngxDgxLMBeLEVAuhUH5ycH2VQrLhWXB1jsF1iE6aWmQkez3ohffnpTDKwWeRA",
  "key3": "mW251th6mbu99K6vMNRbeTwbE9UfWBZnLfDzHSvQf8iBmUTVLxnP6XDdgKpUcfFsfqAvvBjy4d2mwKaQy1DbgUC",
  "key4": "4yU9rNzcGmk8oBVpQZEScYrGUB87vmbZjLQbjfxxVGZU9DiJ2r1At69UbhtNj3unFtBHqreDJcSF34YjoASeYc5w",
  "key5": "1ihd6QGRymGVSsNXEyvo2usyHARMhi2CEXpYXdMv8fjixeB2NvGXYAiwyRZdEKF14Yibg92gwX8eYJhKzdc4LSW",
  "key6": "3VZYrosSBTE74QDHX4aM1noFRudsH844Wd6Pjf2JfKgHgi2CzNrrzhQgGPeV5EBTUwSkTaceHn9KasvetfonfimS",
  "key7": "4DjgsP8ajQkmJ9nHqPyTM95EhgrsSKDMHsh5QCiS2bMD4dpVUdpbkkxT6sdBdiyv87NLfTYsbfShK4nWK3PPJCYr",
  "key8": "37Hc4hJyrcp4wQNuqbJ7AJbW5WX6Dc6rkBoNVmC4t1whv1w6ZwE2A4CjgurdCrkLawa4pHJhrH7gb4o4as5kqits",
  "key9": "aHLcdVX6xSkMgCyEr7RDWQFq4Zj4hSzT1Kefbo6n9tfMaUoAxwyay8zTMYkBCuChhL1yp1DByEUUWNaX391jG2j",
  "key10": "3M28rgXd1eCZZC77JAUrtet4HTgUjk7XZLxFDsSDTovvyyjCeJZ8GQqJ1zW1eEnJ7fpyrJWoMNEv8xjrg4PXFsGc",
  "key11": "3NUU3SdmSh56NWqQxzXnxBZm3oAxnGGb81PvC86utRiB4gAHnppySxPdLvA9mFzajhKeMYSezEV1BeHibqGL8dyL",
  "key12": "BYfBdPn2csPaYBAwbx1GBpjacm8KYP9CbUViXEW9hBZaSTPCKdYuPywx7VcGZwqVNuoXbMsSBSCCKhTYw96EwBp",
  "key13": "38LpZPaJu2Xb9wihxEB9CUjP3NbAYKkho3R6ZsQ1H61j8d9GSCMeY7KAEkTuAJ3paFP787panx3oU2eWDtYgJnix",
  "key14": "2KGMW7BPCr9Pu7ocR8cNnjndY2AvUX82snJZ6v4TH55vAD6Gfq6xjkDTENGektf79EJNnd34JyEGiDkcoHbwzfg7",
  "key15": "5aVSdwLy38FRBKxYD111HyCRo4d142eJxYJNin7kkpEwKX3JzLhRBhgsT6pAGDqdg7MH8xfuXpJKVF8KqhShsXBF",
  "key16": "3zwf72CUh6X5B4PSvfdg7k8ZYWnptQAibXo2UVQLUZLWuvbmuR4SixTZuoseA3bTp1ohWrgF3ZBEXpj7WxYpbYPg",
  "key17": "1ogAsKhC1CusUd5jwTCguPwVhBNWaTyTpiGMpUYvaDCKf1oR1ho6VvSYjhoQqL9DdMjbGGcz7yYDFuUYZCPXncz",
  "key18": "2g6RMXZnhHAUjz1LX3LYJ92ySRVzAX9tASZCPY1PLjUuppUDEk5QqWXTUnQvW4b9XVKs5ujV57ixgZvs1nXPkmy9",
  "key19": "4sA3KEYNqVARjL8wsmaXSNu9NFy5Naa52CykkuuthgB368DpHsgrcQcD5FfT6GrY5DyhYLpoKbaDx9yqEhUztknM",
  "key20": "4ieUWGMaAn2WQauNVQXA1Depjj4Jmx5dUvek8aN4udXrtTW8nPAJE2vK57VgJ1Ar4naAiyHuMcuz56MPaoqzzoVg",
  "key21": "XaKqjTUtrjKni7jDqmXrSdvucwvELrLu9mwerWqBF8Vt5y2uaUrqsN6UxXHRsZAMUmXQ7xR1bkWy6d288LDdMA6",
  "key22": "2Qo5MUEiaCN754Z7b11NTEbKPoz2XVePZT1N4uACMdFgfoqapZBDbL2W4wrUEea8Zwd6XTER9yXQsAPTMRAFckdc",
  "key23": "2EMQBRw6sXwakhwR6ZmfMAuKrcU7NGKuw5rUMnJJC9WUxQxRNsGph9xC1apLRjuNjbLEvVx7V6nwQ4q4LUhNnLNT",
  "key24": "3B1q9jrQN4SN821pTnbBSgp2VTBDzAuUxD8eN8aRijY3gfXvjEUUxvo5qTJ1ZzoSJMKTt9bV5SDTFqkrEjowLLLy",
  "key25": "5NX8vPn87Z5WKNjjjekKRbqk83VyHXaqAkJg77HmABNbTP7njzVyR3HJfWsxtZtoVv7qu9Z5Vp3rZB7QfGRPanKT",
  "key26": "UuiowXyAyxpBMo1xthVRqMGgfsqmt1QTLUXp3tEPQYxQcei8JRGYGSUmNDmr3w2zmJUEcJbHbAJGMd2DC6CH7pn",
  "key27": "5WYH14wMq5yiRTEa1bU1ueq2wqSyS1Xxrvkz1JqCGFraHPasKKGcHw3wH1YbDdfma7RnKRw3AdxLTFr8zpCtyUVD",
  "key28": "2Ffnb3GCLkPZeHx2VfARjVKHenR672eboF1ziTba4tyBZvH6XCJVQFs48azdey9kAXMFJm8C17HbRHeHFmDPvRqE",
  "key29": "3o4TDgZ4JgbeEyqdtw8dTLDk6K42uyEUtrxKF2XpVTbFXDdAJM5MonXdThrfxeUgvSVxjVnWkAiGYPEcnutjVoKk",
  "key30": "4gi2DxVsaXEGTnYCstkx1W4fHQnmV8r49Dsw2gawUBQphPnQ74FqXobNJQZUN4TcbnPzexyK1dC4hajr8AYFBrmy",
  "key31": "4SESPFHbqwqtXiBZ5aiJ7Bh36iMTFgzx8As2peStVh4tzJc456cV52uVAWCuqZmErcAw8DzUhYGvkbctDJuPEKzy",
  "key32": "4CvQSAUyzqoViZmaUQXDE472ijnaUFHSrd3faZDtrtbGEqGksdHT9EUEqTR9oLAAoeXc5rjKbBDApA1zRwLNPtmD",
  "key33": "t6aNghV4GfbSezP5gRLphPaBqqpc1wzR5ow27unw9JLP2KXStiqaYt3WcQjY7AFH71CT5MPiy8rgRbJKfikzBJy",
  "key34": "2rrSAgD4yNNS7dPHLg15XQQYeZGGHUMgyCQnUrUNbEnpK2YKKoWk3BPsjhUzMt8TNZZeDRWjED68KrpReh4EYKFh",
  "key35": "2iTztJqGF2vUwtLhmGeXJdVHZTHBDHWgJfQHDBEfCZ2uejMpTnRNkgdF9BYidE8csh3HSmNRNrbKLHT4i9AEiPB9",
  "key36": "3oBgJVgAK4UkwMX8ggWmYFjANZzvbgHtB9yHFpJJXbSV5yqigunEUbrFshei55UrQycJMmYzav1db7J62csxvxtt",
  "key37": "2w439pT3wWwfQaZi5nswBbebna1csspMEfhBrMvA848gDspNSLBGBuHUZBPt6XuWPHNQsnYkpKkc2rqE1YqEeHz1",
  "key38": "ZkVkrwfCzZF8pWVENiXJw38BQ38DsbpesBCDyCziyTiAvf3ApkQsWUSMUfh7aufgHbq7wnbSXBjDhEZagnoRZuL"
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
