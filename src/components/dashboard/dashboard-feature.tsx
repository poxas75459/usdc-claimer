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
    "4DzHYJEacN1QnsjpgRSiZ4nVVAJvJjam1E7mzoYPAuqeEcVWyRTBtacLYJSDXk5Jdmo64it4Pm9djEbfFNALn6zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mKqfuBcpaoMcHNKYgx4iNhENeErr1DmqYoXWcoEXu4SeiVKoqFsDZupCYZnrtJje8gDKWvk3N6WF5JvFrpds7Z",
  "key1": "3hAMjJcXw2rPT8d43jraSvoUD6zwCzEz5kDxzFmr7rNFSCTeLzuGAL3cZEEkzuDcnYsWUM9ZhmmpbzUPGNHyBLLd",
  "key2": "4P8cYuJ472d8Pt8ikVd5iAFsWyHyQMqN2bMffzsrWX2zQMNc5KBJrcpCeiRj48Jn2MqvtsjZGmn5H8SKKiuBbiBC",
  "key3": "4Cy2Rj63y38N2wZzqLeiT9tr9ZXLjis3trvZKGCeg3Y1r89y5ovJM5sdJs7WC2Js5jKBYuSPtXtzyomuWPFcpwSy",
  "key4": "45xVrQB8KppqKPeHhixiBwShL5Z6oYGCbCy2MUgWi2ugW8sErah8kjMXxtgmtppiExjbAQrw7TeMi71xcLMo6mf4",
  "key5": "3fnuWhJKUNd81N79on7YtdZKvCKQRhRLKEKTx8gDi5rNqfZizEk7mJLmYQ72WzJfqT9aCvkkJH81oTkLteSea2Wr",
  "key6": "39EDiptZiRYeTRDwB1H1MjpfvGWMz8DWGcjFvZeX3STfYHbRQaq7cEvni9NhYUsczvPEDGFuYoDRitTACvPuEUPu",
  "key7": "3Z4ncpf4KeqHKt5SbgvmQASvwrmpHvAp6vMd4wYoNNAoh6jVq5oSjbfjs7SvbN1b2mCGGYLuGvavn8wB3S2xjcj9",
  "key8": "3RHrtip6K1cWf95v11xmnbKRFJAb2xFBNZJkWZckfw8fSojo9ifRbaHVJEQ9AwmGhnSXQpc1jSkTbJkvDcypxTPm",
  "key9": "2g4iFyqtM5yTim2uWWo49zy4554WdSRxPgzHTFqBmL7vDDj1hDb97Stkh422Fb1EEszu4zzaCi196sbPbLCdSPbv",
  "key10": "5hYA9cdybQk8hBdJqKrD2udu66Lyiq6CGSyn2aHkCQCTVSuQ93TjCauB3WFyGC8Wr3bWYVvRwsmXVh5ufK2zwpij",
  "key11": "2Rxb8mtvGP5FApeM7rkqpsrudbVAabwBEMrmrirzaSFyzNM81YzHpxD3d8CGfNTc9Nr7L6rePugJdAw3Ao4oPkC2",
  "key12": "55gw2nnpc4hKwC2FX3NyEXnuxLyMtHPtL1A4xcu8ShM2F5wteFVv4N8FGcbr8hzu6SpGsEV8jJ56b6Wk1wBHA9Kr",
  "key13": "2wnT7dF7NWd5hvMjxiuhdyz8tgSSCsLVWnGCd5RM7ZAkEjXxTsTUd6wWLv3mWwkYxkWXYEwVdW1qGZdHgFGZnsLA",
  "key14": "X6GLXEFEdVWTvFFgDAqDUev3BS72rDirPcQLrqMctJqZYPpGk4oiwtPN12owjYyad98bfK1brBwTyeUY1wNtE9h",
  "key15": "4xDNVXtQB65JdaeVRvCR3zB2998ypQ1hY8iL9mK1rqMnZwo7dBEQfwdDbr8MMtFZuz8WZ1tV8sLezkrdCA9tRNr9",
  "key16": "293TQQzUNDT7wrAvqxCgbYfwTMZ9ycZXZRAytfLHpcwTP6NJRHwdaRxUXLqn8DVof7MDq1iQ2NPggvf2YUmAwfEv",
  "key17": "4d1vRMbqukUHuyEBognFCSvJLoqhgdKJNdti38DMqWuj3vqFfnufQDDEux3PTsMiPwnBkNUECZej6iAGb1TcEQMr",
  "key18": "2afGMqAaU4UVPpWLWwP13NWYQ4vmjb8C1vzurSnbE8HgzHnRYebYe6qit1kTTQFVx8CGPtTF4TsqtQ87H492QgGt",
  "key19": "3WhH9SdMXqre6hrcFseHjH6Yi8hd1VrstKbU2dyBAKCqb7qZP2dJdeiNcpk2GAwtFGacDNdRZ6Fbqrzqg6cgWqtS",
  "key20": "dpob5ZfE3ZqUmjbtcctxEPru4Ng2whvYXspgkioyko6MMucapnqGE7Vhd7wYpXtmtNA29UTvVdUZHVtrSHzcNw4",
  "key21": "4EVcEMUPxCXGduvpcgdidyJBYtEGiY2vU32M3q6c9i1PpJYgYUPi3ukG55N1SFuWDiZK1ZKBuQNZvVmikU6sh68M",
  "key22": "4fzhkPB5J2UBMhmGK12Twwb9bhaiE7ZSkuVA6RhQgGBGjqnckSmn2ucaMYuU1YojfKJKQtRaXw6T65u9nFaNgHEN",
  "key23": "345vRif2DSz8be4ZidNSuiScvQehU5qiGwR7jwLsVZjSDLu9pyazp6jP9V32w9dkbrvmqph4GeWqTnEo8oV7k5Mh",
  "key24": "4st7YqUUaX8ZEsGrD8np1Ky1b6NLkvch1w8dGiqdTX8bXxVyQMsdaBBurkPK3HTVKhZVhacYhy2huxebmQ4TY1M6",
  "key25": "vTJyEUoAwVAnNfMKSDUoz4qMCKsTc6Rf2n1iXGcRt3tKVirMVPgCxcPHJeVupsX7YiH5XoEXDee7CYdppqocY6J",
  "key26": "5E2duwJB79G16pRmJMdyxVtLtmsaK57wkhTKsduR66dpsmPRNUAQ7cwtobKygXz8RS52WiFXsZQwHwb8Kst3F1NS",
  "key27": "3cEoShpPPgvhKgpuMYH5DbGELcVYUHf7EYmy6wqLvkGMsGiA8YtBRXZ4e34SZ4KHTs5Ssy7Tmixs24utwmDJN8DF"
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
