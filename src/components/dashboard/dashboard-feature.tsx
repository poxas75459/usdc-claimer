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
    "5Z52Zc9WL7bq5YD75XUjwQF3Nfr4M2fJWHP2Nf3gV1nYcoCXMNJjjoanhQNPA7ejwvJd4dSvof8sjWsQZgFV4CkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Us1HyMdiAuocsJCExwJjr5KH7PMAHmKvMdgNTJpauNCr6d8GUYtU6gdY6jhehb7S3RZ634KxstT93zPhmZFwhJ4",
  "key1": "3qBjqze5nxcNQ8zkFkeJYDt1dkL4c5SWTpQar66TjWRVoRmYg7mM2MgQ7inrmucRtC9kyCgTGM6j7FCXdyvSuHQo",
  "key2": "2wqVSKo1VitAf57KE7XvhZfMPxK4kZ5T2KiZiaLBKJaEtHwGsxzDPqvNTdTAnanatcgbFgyosh7ZNBSLrAZDoKM7",
  "key3": "36w3fHpZdiFHMhhAWKrXs3tVB6HzYrEquZAM5HNEuuR4jzHdVydEr1yKrk4GFE43DXuRo89JUdSrXBnjxGjsAubr",
  "key4": "zYRbps8zcMBWbz9xc91sxxVWwU63gjBH4jPi8K3J6dSyKfFXxAgkdNJW7WvrKHfoBZ4uashwkF5SbTFEteHHyfD",
  "key5": "EQSgatssrimadkGRhAMot5LbUTxVfTBesdrBFYgxAgYkhKmzGhf13WdVWp16N6CVMtbmSPdg2Y69WpGSDvU9Euo",
  "key6": "3S9pPtdtBXJcimvqmbxLNjZHVN8bzCYYQMihWZEcQhNT1NHRBUiTSo5owVLiDgPjzUzMYvTLvmia9qqZSV6SQfsq",
  "key7": "3bEQGA669YdpBZRSaMptpG2mehtU6HUkPD8RTTAXGyKNYc7CAPd9uX7vMFub8mAyaUqVjkpHPnLx98KR4zxYW4Lk",
  "key8": "5uWB1xhUvEwBYNbPXnCiYiZP624P1QjZDs5C7G5SRJ3iPvzVHU5Ee8FAQby43PEf3n9hbaUin5HxzW837V3W8Ur9",
  "key9": "WYh3jAW8cxXAe4iWuxcKRfEHbLGPVcmfANccdGhFUcx3iYDA8z3NhWWA5WQGyWBzuSVjHTt9z7UbPV2yKFwVQVS",
  "key10": "2YFCgsUWyXbQxG96qYEQJKvKiBqGdBScfVwHHzhVnetnG3wf9sox3B4yfsxuHqFM2fzrTdaHJgkJevnm4qbZJx65",
  "key11": "3AtuaZbZszrCGaQq2WB5rEmTNzqJHxxQNNzVqi5hDDPGeD1VA5XQKJi32yWDK3hq4xhFi34Yc4j7tFudTkW8FTT6",
  "key12": "2rt2k6pYcZ2Tq6m2FBfmDBt6LvKtoR2CbZVXYTCrtkFXwsFaZxfoHsWRFB4WLMxRE6Sn6U7ScNQwMGGy1HLuCFfx",
  "key13": "4YLHaxkD2JS5dNmsD5WWywt2TAqAibcLP18npjUAtp3A6TRxaNGxK5BfS81LMgtfxiErotkD33TLFxrimBZbZdCy",
  "key14": "4iZydZtS6a5dMMHGGQ2v9wXdqGjBJiV1wMWaeVmNYEywWKPTftmc4AL4bHyactfuqhjvRuScsmwP9BNrDqzfaLC5",
  "key15": "52kwFEMVXE2i8fvAyQJEcbeCQ3b25aaa3BRAd56Crk3GjZLyaxLRxmZx4iMuNmpro56uDU4CVLh7WuXqyHswJfLu",
  "key16": "5dAX9MeKhkDKyTEJRAEiwzCKrZtZdHfYP1wRVZRfgNeNb9RfDJhsvpypLH4CV79KFstTERmv9Ds3eRR38jExZyX7",
  "key17": "3phDrCbT1XxLRLYcZAsmKmp4NztWKcekALRFFCQqCDdM9mGawq5kiXwQW9VwbVZtmYaPWVmHFPJHECCTHPpXFgk5",
  "key18": "3PpDLdFHge6P9GWoTzSBCj3zUZSeNHBaCNqSMXpiAXPZeoehc1ocB1QKUPhsPRZAsekUSTQRRDk5zfU5xij9enuH",
  "key19": "57bMZrRmWQYthU1X5gyiKJd8vHcpFLazSCsA6X6ykBQgYDXRdZqnEm5G2zgfpTYC7japDfDrPPchYEEgnjWzs8xg",
  "key20": "2fvYuiixuai2KQrxrTSDmxJ9VtH2BgcV7v6N42sPkZCBeH7ACMwJ6QyyDhZbTcNqvs975L4uM8FhWMxvFXbGfa1z",
  "key21": "4XSgQJ6bX76AdwNyp9p5xSDvFERZJRgS3cPuQoPyFrkvHqKUwQSSqsbz5921WkaUdVYeWkxBhn3hqeAMzRaZMpuK",
  "key22": "5c4t7vCRkshtDguKHbQGPSTnqdzCvrmcgQw5GJBmEzvynNxrefiVx5naLpz7vTTm6wgYgGZY35t6YLrVMtJGDpo7",
  "key23": "3VvxebpH1QugzTocuQZikLD7kwLqThthqiJVvzsbaWziK5zrHp25VD16tm2npVgsr7RWzf68koJe57cZqK8DFHzx",
  "key24": "2Z5G3FQqMKEaFzdfZPc2Pv5CPcDXfFzSvZBHqAw9jA74wsHV64JBedoBSaaesUSyM4ScToUcu7gDaiqYyfH9Xg94",
  "key25": "5tPCcDkNgEmKfB4TzFNMHyvBb1x1tneeeudBnZXmZD1BrfKkpTzSE71X8e7zUg4ETQwPH999KXyfdt5fcmnCJqaX",
  "key26": "58gCHKeLVEYHXUiHAC2NXKhjxKbiApKhNxihCKMsKpnpTjDBYZAZ4FBRR6sxA9Vwp5S27LkLsDi6Q64i29DjTnq5",
  "key27": "5L5pG3J424cE2dJBKtFFNoTedw2JEPKDCoQMKuLKEy5Ko6xeifUzhvP8L5emawAoBt9VjWzp3zoNfk8dS5GRLAE4",
  "key28": "24qHSvB7Ysj4BAd449L8isuYeYgDHorUEhSsmmsmU13RefFYBAh4EnVE72sPCpWRvCyZjfdcuoHQtDSZ2wDKtTsK",
  "key29": "3Kjgj8TEKqeJ223jTZSgXWVEQut8myXQjVbKZu7gd2KUHKufsjS9j5UeyxrsBDycdozCeC7ppupiS2AUegADKtPc",
  "key30": "2ERhRvMfsoCVtHCULhNTqvzW4axsTWmff3HaZaPR3h9HgW8AXoBTK1aWDcQfqGn8Ma1nV5YX7oKjpUNvscxdAG7s",
  "key31": "2oJJ7eQGCE3z6jx81GU892jFbfcH888AUdhs591ypprM95dkA7rwyeerz3pBxFmXoHeEUx6JqXakNsNATj7Np82x",
  "key32": "SDeuNBu3bjvM6YHS2CmfcvwmpUn8wQukjdVxwtq7NfJgrfaMCYpL5ZDN2WAk6YdThY9VAXALwBGpnzynoLnxdqT",
  "key33": "54PjnErZGhA1g2bhDkAAuQuvFcrpVQzJp9MAh89Da1wc3csuHivviEwiHcr52og3Xch2d9CSEx5pNpbPDHV6r65j",
  "key34": "pEYSSnE895VzEPmYmBxnw6ZpviK4DiogtQQM1vt8QTPys7Nmw2gvmWBLSWf2p6gbY7CEipR3MMTzqCabHgiHyWC",
  "key35": "2tGtjoZUZfXAQG3q7Ljx5ZZHeXbu2AmAXXqfPNYzX7XLupysXgra1nLTJWtEfFMBnaowr544a1oYvvYzrzB6Fyzx",
  "key36": "3ZXiaYmEfKvEJUe9m6tRtt1KKBFH63riiNsfv8mYXQmouquLU67bvYAFe9EX4d9oAMDnoNy6EzdJ7cwsqrTmrdXC",
  "key37": "4Qdxv7o4fEGrLdmnoQvubdFsAZAwqKv3ZGgVT48ttcFsyHiPZhvtcMFqtQCnyMzjKKFUZuKNzPbiBeAyk4vjRBM9",
  "key38": "59ia3yoMNDa2bBn734LfYZcsDrz336YYHaZqPMa3mqixPct5PQYKiku6yi9ArcgmUTUQTUQRaavhexwV2RkaRCr4",
  "key39": "3xHmj3wp3iCakSVNyuF8Pb5RRkTXorkWUdxg1AEApeCCinKYu7MpVw1kgNtLj5qhnrc1eBYsEvmToSygKj96HMqq"
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
