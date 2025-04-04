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
    "59ogZfXrcNWvAqDetFGb644JUwUNcb1p5mqvm5rgaT8itEFL12jtshAtNQjL9AqUmm8wPFvauKV3SZTuPuxh3Fok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrBQDR4GAJzC2GbYhu3txDou5mbonTnAHD2MGFDK2tTCgDnwEYoJ7j4zHUX6CE92Wmkf14JEUN3PErGVQFYhmUy",
  "key1": "37esWV9oPZ8DUFexGymd2f6YKUTZ5Sah7j4WhhyLE6SvTx4wwnorzQLSQ84DZVWP1oo8pWZDKA35ciwyvCimnnAb",
  "key2": "4X3xyULhVVBVtqLr8RkW17UBww7xLVyMpmwySgH7Tfs7H1P38CoWo5TLh7eckAo5VMr8SkUaLcjGmu8tQNvovMje",
  "key3": "5w4zEEKBPi54YUpDLcNeQAspsymi9XCME2vE4sSXWPUPiPLCM74WvpnjP1rCRwHmHaBRCPofoGkT2RSruoFzVZmY",
  "key4": "4R8yatCY774EiACpRjNdqBThFKNSEucSPMKd4sKJpYMnh12djys3ViM4xdjSyosFDp4ywePPByWb5VSynEKxJvDc",
  "key5": "63G54qUEDfH5ZHxfmAvwbDT1ZGTJwukZRFnX9mAddz3m5b1mfqTNyCx4jVfYNfHojFa8bzAECaQqgoRTsypetRrf",
  "key6": "4Nk9kpcUhZ71ys17seir1i2h6TBXMaNvmUafoztKSZNpN87hGzkdRUsnMArU6DTqYbwJJGkmM3FKHuEqmdkwEZz1",
  "key7": "4nwfzXvzXPB8LQ3xw4kFH1DqqA294dzV9r8izLyWz5X6Ski2oZZX3jqVeHNFPzpub6y6WBXErs3dTs4zrHvPX8zY",
  "key8": "63yYWt84XZ1D9FLBUWkaQcJnxn3DB4GXGgXuGb4q6GMhVv1tNbpibSqhzo2kPPk2dsBNhNQFrY21LEMbnsYrW2P1",
  "key9": "3UAR7WtkU2jqjpNEZFgWgTAwhPkte5WVdpBbfXud4EcQmKy51kZZdTPqEpczRxTRLNP4vtUtAywJpi8bhySafNTs",
  "key10": "3iTfsWHr4SCAaL8Ux5618Fs2pab8ZG6RyHFQbuGmMdG89BpEXBkytyAWf9WV83nxYNN6K84LHFWgLainZUUFPpuH",
  "key11": "28ebA4q1qpcmyrcCLa6GwnM35AT3A4uTJQesRuEBYd3jN8fu9sLcdck3AJNushw78XoEPcphLMQ8H2aKndDGkW2T",
  "key12": "2Lj3aajXgcYAjhw8suwED3F3yYbgchTkddZbYkqHxTR2GD4TqcobmwjYgnoVjcwtecqWWu4Ki7RwCasyBwsPy3z7",
  "key13": "4Da93BeT1PwvQCFPjwC6Cu4eEqcbKeDBiQ6a4xXGVnzGSnpbwdZhXVqeeTpicy4QmE4s1QY8eHeV4joRJvbe9vFE",
  "key14": "ijpnF5H28UxdSfBwJQ7aD2D1XTzFpAsH62eqZyhWPFEV2y5W6eobQpP6jqdVW1vCgueX3eiLMyaEofv3c5RMGLv",
  "key15": "2BNPiphF1j4bhfuzgDipJEqPDwWAkif3AtR9zi5iChkrNg6mAq2eUGPQqzwBkS2MBEcDEGc6xhKoFjyX6khjnwn8",
  "key16": "3Q5mnfM42kzj5VDt3TJjfQSkmjbTN1Zkgpg1PgBhqoERGKNQyzgz9wWRSu2bQLJMr9AjfDpTiFxMCEvQ47j1eYf6",
  "key17": "3nsWLsRzvinP1XkiqmxSr8hXUrLdo5Jb7ERfbRhcxUD68BbfYiodRcMua9eJQrGwebxPDPUAYyPXzFYWtAD2Yep5",
  "key18": "djgUyGNo3a5Ta4gqvuNWrbM4jVeRcWd96ZYpJJBqcs47cUKiAwwgvkrEoEjAdmfXX2EWuJQWDAniyQekptvNKzz",
  "key19": "uCwwv5nMgy2tbTYAVBXFhkrdem4YqKnoadQqbNUamAYHuPQvG5mxH79hVWzGTb6TR8DFQLjXVcfV9uPFgTH7Z5V",
  "key20": "5KaqapF72ue7NvuEKN2oX4tVnqTvivjocc7FnNuE2c53a3cTFp6f65t8VfGKLhwbhZh5LqpPFyLAUqXe7MK5YWEp",
  "key21": "3viRHmAC3w87E63hfjZsTedCoKMTnP2fZiw3zxPmWGb3a8oFXUNfYxpYx8KTLn9zRpf76uTPqtdaSeBZDzyiB2mL",
  "key22": "2JXemKsT9KB3we443ezoRVgcKZpM8SAWHZE6m7RQVLdDCm5ab4Wi1ymK96t1VZiqWGmvfGJSkaLEjfM2Gn4cCHRN",
  "key23": "2p695JUJgJHkaVmCmGVouWsVT6cqx6AovHpHAAQgg2zM1szpEotVSJo94fj8kdEdQQtQBmS3MWVSfyHZdosLNApE",
  "key24": "2JstiR8KfJRzeBNu7XLveDVYdumYbxCqPQMmvDnqh1V5geQNGoFpx1mBmKFb6zgwNhUUdi1YvHRzFekEwLqS4N7r",
  "key25": "4iJZSUZzRPod1Z1VbrJn7dAEsJTbVPXaEbhp7mbW5Mv1VdQ5AH4QD2kYxJbWcs3esBgbcJkSCQ9ioJPa8o1JhUsp",
  "key26": "38qfVTB6ERxoEA8WDRJn39mjwfBCmpYYfM6G3rYJEumZi8m8ZmvXpC9ymiwtHC2C9AfusVQuDnCKSENHShH6NYG8",
  "key27": "5LA4Ycp6oemsCt1VYDQW9dCyzGpXQ8fCTC12yrnfLphjKSXPdm8rc4CCCnNKF94u6c4H1x8zxJj6cqGfHYXQXCKr",
  "key28": "yWYvEaqom56HhiFooCpTdQYSJSRPNHJd2Yi7dGzKwVr8g2eGYxQdCjoxWdT5qUmHvk8fQwSdUWPaJqiZ9bqvWmj",
  "key29": "2Yhc4egh3RUAqFdew29Nu5SZLygJA8DUEY9Z4rTgkaNa3T1XYLeoPRucSYybbkRoD2GEofZwBeus4VKgXspXLu4T",
  "key30": "5Xt7rh3r7dpjcQm8jima7CUQjAhP9m3Dqqx5FvWHZVPit8AgEhDz1sT53eY9Hb2cj3KzuUHttStLPk13no8kU2mw",
  "key31": "2jBz7yYrU1Evr8m4VqL89yAaEyE2MMupEBdqsjYSX5TVZ95rA7YNRpnMi9sYWt3EHqsKjN9toq96T9CPBvHrGm24",
  "key32": "fBjgKkpaVLAQd13WihTdgKCFFv5izW4uumbsQxLnwJBctNqiMS5QsZrWZLZSCsAtggLBDqfw4kekbEPJ8b8DtMK",
  "key33": "59T3ufoVotnx9EGtHGaTkTCiHxgRtXoX5KAeXiC1EscgnHvbrQhArgS9zyi8DGz1jiBG1brHu3kVx5EDwDoXoSGX",
  "key34": "3WFwrspTTtzrC59ahWLKbkwKsSS7qFFr4FtBPgsJZ7Xnqc2UtFmXJKpccfT18Mw8PJgUxWMVyTRLZ3w7zzVNsGzr",
  "key35": "5RYVnoq2zdegGpjFHySz3EMvs3y6cGd65p6khFHdZ3RQkpBKYJcdJX53No975rCEsvu2KcNmv5J7kkVr8mxgaUBB",
  "key36": "4foumHFSBS8Sm4keWacQAmTpNkjRExFFP9C7zZmKU2HfuFGeWChw92j6ii6Ho2zj6XPXXQgMBwULKxkJVZUK4cNR",
  "key37": "35f2MXETGJpfZXuWyy4FcS4Ujbnc9ThsezjyUSsPyixEZUBy2y4kj62jgtcUVXKNjEV2TUUVpcPF9iZbW5eyW5sM",
  "key38": "guRHMvFR3kxmshcCSE7i3VLZhTRnBSfjsjREFDbcd88VWPH8xLADL7B727ycyWCN62EtRkpecL2GE1UcjqB4xLd",
  "key39": "4Jm8rZRqHZA1Ps5nLY1nuQe3xqX45ssAYzvDSpyyPjtNNxppWYUmWF86BYrzXcvMAduUG23B51pNcYdUtjoYP7ZK",
  "key40": "5rNPtzGVZ4neENW5Jm4jyHK32TfQzM6HLkVrzb8N2K6dBnd4hDqrEJptoDws9fbZgoWykLjVk8QCYnovQgRschr5",
  "key41": "2ZxaZ77Wb7fTfuSC1p1PVsjsenwEtFetX9sDcXW71NmnQeAVBumZAgvt9YkmT3oxZnikAb1FT4mN6sG4EPn4VJ9M",
  "key42": "bAN46sXEezRHM4ofRA5Ljhb9Mgeks49fGTe55wv7CrzBp4mBPzPhuZscYR9SFVDwsXrQLa6bHMQVPG1MeK36QyS"
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
