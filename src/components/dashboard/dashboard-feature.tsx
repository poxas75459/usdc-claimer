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
    "5cVfwAR7ksi1vGFZAp1sNg3rW87SWnNfN3xQgJJdn9TxPnqs8fPM3R6bC3Jik6XL94Vn7trGLRgpjimNymTGxKJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viv5k2P3dDNmVkEekrX3bNr38yxbgHWJXWBdRiQSA18nSBcaTaXUVjYHyRdqqKcPfzxRzkELse2K2koaio7zHH",
  "key1": "RQMskXTYJQKEFcUKdXT8HaaepL4ScTD4k7AyKmBNvaZSb3wU57oGfPvcBRyjYsbXgNfoLhjS6wL2qm19vcU3Vvd",
  "key2": "5wppcAxokDEaoDWnCPM6g3DpRzwLNzX2777igtuNn64JabBsq3m7Qj2GF1GShJ3rchsH6uLjaXuUUMSEoymxbj2G",
  "key3": "3A2sMTfg44oL9puxEQFhQZA5RXwVK4VmjecMgr39VJX2m6g1g8z6EVU7FQVnfnkaQ2MMQUPxy9HvKtftfz6tUu57",
  "key4": "5ktKL7xf6cTVFu44Cj4RPR7tE9fkBSahb6RpyQvNm87uW6myeEUWR7ZnBf6srCXpKzv2mrPXf2usbVpUXfogqgNK",
  "key5": "SuP4i3Ybq6jbuTYKUwAsGp3LsBaMUXsPPgLmCcpz5zQUNQcx5oX6P4oVMYiAAqowSvJ7L7xwDEFYfdBg14UjQae",
  "key6": "5oUSiB4K44hePVzhdvQXEZt6VY8otwrmugvNXsVsq4cLeG7WSLKKLjaAR2qJCvX68Sr95VRdmYcmxGo29pQNsxq4",
  "key7": "3PX4F5fDqrNCTGfqYpTSbbquZbReo3P4z44zsHZsv6beiFd5CPD8wja2r8xHVH3zFms7qjYh5EohKw6Vsu514S7P",
  "key8": "5uu4VAfvHDpyVBHNk8szDaePGLhZKvAx3YqxdiUwjG2cgi88bFXGmagqCLiboPTWXJE6vhPoN89RydbxrQjpmoB8",
  "key9": "4iHV4s3csft8GByDoAqBojoeh46ZKaQPoXVo3Pq9J43DPRKeBTXQGtyvHS2sv6o7HgFsV8R7Zdn8wTrjmAvNko7D",
  "key10": "5PckHU9qzpJV4VmRTFKpn6iXy9q92ovc2gMynCRQV6KG1FMqyc645FcJvz3U2svQeppbzD2Li9BSdAYxgwjiLFwb",
  "key11": "6cbCkFxRsyCnQ7i63D7DwdL7CKARpVUY5tTchwRnYxqCXrkhMX5GRDLB8AwQV9te7kJzm3kaZhS9HHqCiJ7gQ52",
  "key12": "4k61mLPB6rVYQjdoY1xdzjVEsPuXg5fBrSFBURPtMkS7mEDiD7Dg4b83zXf18iBKB5GT6Y4Lhbg5vEv2DtMZbkDd",
  "key13": "2rHZsRoNLQ8axEe2B4U6jQCtTa43xaLBD3u6MnNBFPAHjHfefpphVnQZScFrhao9gTPN3AruPYAk7DthZov1zWcA",
  "key14": "4yfdcxB341he1xyb4WkwFUSZQr5tgR5MbZNeSYShVC6ReChyvZuy88S5wsb3rvD9UZmUF11z6AQq5ujEuSrNJJFk",
  "key15": "2nH9MN14QVnJo9GRDNf8BuoWRdWHLN2yopw2P78jCHrXrshCibp7ianEfFXU98b2koZoDpsatwpgih1uta1srEdt",
  "key16": "2TCpgMozNkZYiMZhCJ3NWHGxKwzMNKvTpwf6BSEfQZBJfo3aMyP4DtW7XPr84HahoCqb8XyKg82ZjNt4kPbqP3wW",
  "key17": "4yPVztjVapSFRB4iTmKTecJDFcH3PTPXdVF6wduRukfGpKQRGoRw8xCNVWTMHW6DseiP3uM7oaFAgUEibmcoMKw3",
  "key18": "2humtyGTqKuRPwEGRjt5dhpATkZpsqAHrip61fZrxg4ruNmjhA4sDmS5eAvZjr8Sva3D8BQ3ct3bLDVrgrYeyfZw",
  "key19": "n1GaqXC9JmtnTnS43J4K5zvLbmAiMKVX4a7W4QEVtm6QafbkuCKkmkHBCZrDsF4XFtYvgAm1oZX1xhMxnoVDuxX",
  "key20": "5phxfgHMg9V2AMntqRbmbYW2QRgDeZwA1SqxuPNC79yeaqSL9uXGjVkKHdGh8BP3A32Z8NqHbAh55GkaZ6mDjxFF",
  "key21": "5Kup6fTqwMUbYvJYn2TZyS8TKC4cxFmDr1SnFAids3uv1dQDbEdi5Ub7Cjhg1rm1PA5AfGSLsJGfgTggXFEi5Jqf",
  "key22": "5v6MLQDGeNkjVdZzqhYqAHrUeJQ7eYMC2WsNGfdxm8EEAdW57Gaxf7Ws5afVVu8n8D3JZbFDr9cQrUpP55b3z6Gp",
  "key23": "5YSsBxPVTyULJ95gxqgbjAKo5gsMcUsYzH5epqtVSECp5pWeTP5hiGHKDTvLShz9xWnYEct6nNxK6A7YNyaFHYma",
  "key24": "5enZxJrLppqxuAw8EwdyRj4qHkRcE1vd4mG3FHfbMspMDGzWqzjq6cnykLV9hZU7HtiFwDeMZQSoQrSQDBAXzEz3",
  "key25": "2bgYLNBCHeJ8aenGeqJVUzEowZxPapQhDeAk6fZzxJBHEU8wSgJyEwdMQ8eWFKUnUnMudxjPec6iQuv6WSKSAFbA",
  "key26": "2rQSuCrTb6J4gQSs52xFtrTUtop1L2QqKfoC7qn189XgWRKzHp1AfK3yHRUBWNf9pUNo1HYXsMWWLppRevqyjsR2",
  "key27": "2ewSjRccpeZjVpLBB9ZEP3AVn8mGFeNBbzA5MkZkdCuggeJQVCtMvJK36yBMyRk9zABsYyGFBM9m65kd2BxmKZNk",
  "key28": "6vPLLZznHHjnKgf2VvS9PXCFE7WJPoxYcw7aBUo5eWN6SJDYYb7SpsThfMvT5Hvg1XcToPvz3izGaqYnG5wDs5x",
  "key29": "2YfXEGga5N9NuugdekZ64sXZGLJq1Tf6g2sTSZQhLNrK53ZnC8uw1PbMAARMABADCjicZDMN4EQin3BbRCUHUyys"
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
