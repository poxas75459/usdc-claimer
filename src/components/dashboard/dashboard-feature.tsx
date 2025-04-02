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
    "37HtfEocriXZSjcnK9yHeGEt2heRqGXHFduyirAoc8EuMjqJYXWhe4ofSo8SUdnhrGUFKrxPeJspGLdEN1W64a2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syukyXd5MohrR439MvchK7gv5DBCX3QSTvi1TUZci5pD14WHDdnuFE97PpBAtw88oQYqk5wvxhk5nNhB3Ljjj4m",
  "key1": "5dGaUdZt828L7jihRpUQZ1gra1MqcFJh2Ci3CstH6s1cky9RWCZpbxxgg3fVpDqszNrMPamdXkLL4g2MXHvKVhUs",
  "key2": "8v87uWFYtiGyxfjLxuwBh76bYdduWCiEKefRGEdknFZzYo5aey7JoZmqXak7N1V7DBbQTHfAkoS9ethFd4c7KKo",
  "key3": "2DPkMfAHcBumtif1Fhdg4iew5dwfZJenKmuy3hnWWXArGJsMWnSZM4KxCuWS2s34B58nxR1B5jgG8VUS7QvP8z8",
  "key4": "3JvfQGw8KkLX6oYHFG4WZKAHWnGUqTnyboVUaTKmdCbML48TBMwukSdUb4hrah39weZzkmYS8upjEviHPV76E2Ak",
  "key5": "2wEo2UbVUJn6Mh1yMtmv8bpCeHiVjxZaspyDczpeyVf1BGFRzH5eCKNE8oYFpkdfjxQwe61NBSJKpRBagyL9vfA8",
  "key6": "21eEB4jKokUDRhmQYpEd5bQkSeqyu2PsK4T3eF5zvxk9fUBWYHrFLxMmszHs98dyDS32DXC2QN1ir8tKcgPFEPmf",
  "key7": "4y2UWH9opVVWZVnmsWDR64a7zHZNYHBXvWQzY1MWfzdKE5H9r4r4JY3GE1PsVjKjJyQ7ymD2e9qCyeXThQSfB4eK",
  "key8": "5dazWPLyWo823vuo8eGyk5m5i6ffSYyBQncJ2hdQJAqdDMVJqyxaZVqezpo8EXUmQEkCBPeRC8sjFzNP39ipDLmm",
  "key9": "29EWmepL2jc61P6iFpFFgQhb1Yc1FFT1DNNLjcRs4Q8z39Bv2NQ7ZLcjfgH98rnb9FK7ypRphEjRqk95FTAHcy3Q",
  "key10": "2ZoHvoi8arpuPdzyYJ9d4zj31cR1YP1BjHn7FpeVkZYXjyCKMh2KLCKArHdbrpv4ZpxBHsvAxkGkBuCb2xzXFovo",
  "key11": "3FoFJ9CG3E4uM4wVVoCctXC6DrF5oEKYQTyPV7Tv35ECCkQ3xbZaasdAG8sDxXAC4wjhgGyriPQRn27GHSMAKCww",
  "key12": "dmtcaxZVetzE5wyTQf294kSaGdPs4hesyErS5sv27et8eetLBMpAyMD7HCxTcoFuY6XpFpFTyTx2ihVPa31SGFo",
  "key13": "2pp1KTYD3APicA5txXTY1ZK2gCyPGrYdokEpVLHDRyXKUkyJKZrKBQR6Rx293D2fZ4weJFYN9ohgvgj6A2JovPtJ",
  "key14": "5EK2WR4Buhio5qa1CNnRYUKgHzavUQqfGEC123yK6kGN9XkgHF744FjmsQd5qWbNzwRv3kSEXJdwg7d7DDi21i1n",
  "key15": "5YFmttDVYPB4MZLq5Z2DP3HU6J93dh482GbHwZcvB71z96NGcmUuMdot2HzYwiH7nFA2UVtuQqkSkLDZdpTxCAkQ",
  "key16": "5opxWWgpdRV5LvRoHrPN5R6GUh1ouNHtTtaNkWqcVMa2Jfyimh8pPrMeABifXNsEJGDeqAscQvbf13i3RyDrAjYY",
  "key17": "2PtBNHjrg9CFwqcXxxmNbukwTWnV6U9WyX2UBiKrxvEYTEviE1fipczPkFaHDVVGcBYgPtPmuz8pZnpewjxD47j6",
  "key18": "64NqXaKb21tJq8GDJwPvJumwLcUuYL6RnWBWNAyu7RnJseqNcrKU6Ekf4cdaM8pZgwipZ3A32Z3oRERoArViJCMP",
  "key19": "631YozHQ6jp82jvFcJ2XNJt47vpwA8LJstRZtWC2FuqbNjrswgSp7QPN58t5UFAse8aMgPzQBwVFLdCbJDi7EJg3",
  "key20": "4WGzjRhsfJLRrjr6FH7cK3MsqfuzuMBo3jtrWQLkN97mSxx47LKHRCRLeyjVAGDEMB3g6BuiirsrZFx2vhKmu5xR",
  "key21": "63YdU4jk4jcHTqWRCCjkx2FR1qYV6LSqaYJPMkgLveridLgAq4GdSVRP84kBeW7GU5UJMbP42dZSTKxsQwfs2VPt",
  "key22": "ur5G9oDtCqWofQaYAfBmHRg6atiJJ4kDU2thqtFGY9MbXFD9Dw1h3SstkjLTD5PhjXHxcX6xomcxPQf837RHgyu",
  "key23": "GHrqDpsEwpiSknabFw9mBVHdjbiH9ooZEF76X6eYKu6Prm283hQ9uuMsfLo2rqvSusZ7M1i6PgDVMrQoWcV6wYn",
  "key24": "2a8uoPZNtdqViFWLbNMXBxFzd13k2TML8sFLobHgpfXoEVNr4fJE8HrooZRyqedrkfizaGHbmbh3vMw3sbt3k2i7",
  "key25": "44A5bwX2Pt4UESuEyjHFHTN4TEtjWmSNC1bH8Sa2kkKQhZmFZxgPXJcaDS1FZpz5FQ1tmEMaK7srt3hA5Y11qC8V",
  "key26": "5WwSeQfUncBa7BTySPt3yP93TbaD346GxDZsDTBFRxoToPudkgiiwTFYzpguUVRsuJARuK8b7heBhh8xAuT2zGoM",
  "key27": "5jr3JqnnCdHW4R4ymw9ZdhmEdBZXzoA6Y6PLsUPP3w31MTPwk3ZzoGpixYyBHfkRV9uDQHrUafxt1NnXZt3ZtHur",
  "key28": "5j3yZcPgMKPkqaazNvxMmSsFts9TjxkjeaS4zvegtjgQ7dGJkoTsPR864AMcK8pgiDLqxUV3ALcHoetv4S7KzuJ"
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
