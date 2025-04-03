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
    "2CCQnorNgvt4mbuCfBQxVyWEUWHiBgeyJLgtxg994eBd26px5y6sFNXx9ASWeFFBUwPJL4TgWfKELe1w8ctP6B8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pd4oDCzZJJJUjqK9hKWVdikp9zqb26P2btLDqQLVojh2t6ZvsPBahX5wQShMqJMGCf7PLzCNbmJRWyTifuzCoqR",
  "key1": "xQr6BhGjiZiPhLXid2ngvHq7csppSFvifVHeCAmoQvq1JEkVjZXLb3NdeKEjsCuJdoNqmhKMPCxh39X6BczKVeQ",
  "key2": "4DcrQDVZxpmrDi3ka1peyfHH6VoJZiEHvzwYKms8oRWet8cNQ6K7N3KzKnCEsN6Pc5xYgRsonUQtVT4DzxxgJjy2",
  "key3": "4WHwVtDeSZpk6fNZdiGuAUoMjwPE19htCU8uh3bY52R46mjrht7bqoM7dx59ogJp7cnmM1mccCbwwyy2i9mf1U9E",
  "key4": "5a9WWDDE1SG4ycCV2Zsfw3eFQgyACModNox8eJeStyoKQqHPZCExKDMEj4D2bhdgNE4Aedmndam9rPP1yGAf2TWB",
  "key5": "4R8gFQj6FUTuESRstxrYvSKn7C59uhbM4Jh8QGkrpUomcEjgnKhFDKScUQQ4zYhEugyxb2BRg6HPFVJtLsHMTY3x",
  "key6": "APj6Q5kXQwDg7oHwQKTYTcboxZg3zj3P88dA5Xv8F3zaPwPLTV8yzBn9Gq2XLSCEKrj5EC8pr7ySvEkjkqm6vHn",
  "key7": "2Q3jv4j1pcbAVRYxqYu4FRj7eCHx4biWUmCiWCvikUwUQSeYk36oY7CPXtrDG4FjCn6b1xJRLg5Zn96qN7noWk1d",
  "key8": "XnxZy7WGjyWB6WYYsaeKQaWXjg6W2Qp78Tha3B9SDB2CGMX91945W4jbBX2YTUBjTLW2bazXkC1hBa7yas4CgJc",
  "key9": "5jGmpMrfwhKbo8SXwMrEUrvatvtWBBZbuzN6stJxenibiKE9or2Ng4GMkddWTnFy8KxVNqqaZp4gMhJoxEMX3Vxy",
  "key10": "4Q4RATaZNUTUv75P1wQYNY6VJWs44kkbgbo9Td7ukBbmjar9t3MLawC7rAfjwx1nUEcVZTGHhcLVT8nNfSgfDaCC",
  "key11": "2SzwRPrRUEDCjwqvBfjqnWQCd35zPf4ctp6sRAuTZyHUqM8myfTR8sGEeV2qW2MSUfZ6C3iVsWR1FfWfKVHk2Pv8",
  "key12": "5a8crH1yF8vrMcjiCYfktQT25QvTNgXMFnmaRVUs7AitipZ15aLc6ZCCCqiTDPkfEjcnbEK6nSMELvo7cdKpjKst",
  "key13": "LyBSuFcmnY5W5iXKFJte3XRAhud1gdsD228Hk5tDTpMwrE2zbvSUba2HYBesxADvepN1C3Kghzf934vfsxeV3Ku",
  "key14": "dkMim8a3d4UEiyFEFHqQJ53oTrz3XbVhv8h7EE28PnJJ3NyLcSYqD76SiFrpin6J9Trssd1ZEh1ixBXEw9MB9d3",
  "key15": "4WQPK74TwgHkpKnvVWUt8EfM7K3ezGWPHkKQL4ZNsDmheQjAsKsoGhTAnvnQFEXmMKNvrczoBMuGRzt2oDD8Czq9",
  "key16": "5QVJCyLoxBUozvgUQq78tocH389mHNfWTegRyhaxcoFzBGWLtWzFRzP89BCbY7XQ3oDMu7Zui4Vve4HHHocjvPH3",
  "key17": "iTj1scw8Qwsy7QqSrriZDTycPsJxVGhQbNzpb96E4kyUuF1tmBkduPyWraQXJWVMJMXboMzLynhE2f8KVzbm6yB",
  "key18": "ZkiNAs8WnQWXTQcCx9FwBRs4CXDVxPVaegcXSRGcwK7mbtCMQqVSwLNfVGovCwric8KwLVBg66mu6hnLc1F767e",
  "key19": "3DhmXeZH7DLn2rHMimaH4mXAK5YeFzjR1UZtYdFodvAeWcx4E9CHqtqsUyPHaN6Kmm7q8jTAp57TpPrzbbo4ujNu",
  "key20": "3HXZ3vhkDznGy5bNQ6zSaBRniuPyPfgMZU3KoMDpoYQe8NnTtHCm12KS8XfxaUi9SnQumnyAjsRR48duUAWh2FeH",
  "key21": "5QykAib74Uu1b7k869e7aAxwZkNNGmPc7JoJ7iyCCUqBkc3UML2bZQnRH1R5eMypDoxnzuA5MSHAKqPtfFNbKeDX",
  "key22": "5VDG8ssq9XtMXqFeqShQkUnWAh25UmHTq9veU9r8h8Gq2Wgh8jGnYQXj5yKcSfiqmW8Tg1RiEgsQWZei5pTvGJXW",
  "key23": "3j48J3JXVt87J9z9yPeXZJDGaLbVXZnu2ahkEG6GezBusiPETtVLRNvW54A1UYaWEiePWp6kVdQ2Hbe3pYdSXy7b",
  "key24": "5MsGjbemyJhwYYXJcaB6NjwPwoJT42FT9NFj5Ch3kX5sVaYtGQVonGBNJ7qo39ySVDdT6fohVKA1Mkwst6QZ5Lkc",
  "key25": "22yG6DrasfbtaVFfb1ReyKUMhCt5j25B5GQEz8rAxRPK5KpvxUXAi3gDbZ5ap2MQiiYw5muyUTAQTVvNbZFaUCWj",
  "key26": "23dZiLMAXQAmk2XBmhaq8fd3uXwx7Tr7kH6QWHiqwsDQ7KW1PMktcSbWR5kx2TzsHBX73ofg13NeMKTbSqzuMgcY",
  "key27": "3bsmqemEUwoPEQkp3FGRjQM9Tiipk3c4mQPm527nCgLgX7eBjP2yc7kRxYkd3vsKK1VsSc9QA5GC6TtgXF9VF4MY",
  "key28": "2zGDE14EQXh5bea21P9csbyuU738mMe5DfouH2B2XZ8BMKuRUpTwv9VD7ZHncY4VBnkjxggrRRxS1xLeSEWoFuGp",
  "key29": "53MVgU2yKFGnKoVv1jZeyaahXUjbauCLChEmGfWC734DaFMaTbitvLDUGR9sbxF2BMmu8jcXnapQ8n95hPZnEA6a",
  "key30": "5dBy4GnyDvm8kwup41sF9xzZXB3UezohFLaAewSEZYBipp5DcDvG8MvJYnbUG3LSWZXnfKQU8Bop9NEdVJ1zq8X1",
  "key31": "4QhA27FSe2Ry1BSYPX4uH81ukzioh14KZnJfBHkNoafXjSQiAPP1oMU5nM5dj8mzjpESGLdpHQKMKtr7WheSV6Ej",
  "key32": "2yhEcoAUfo9EVep2uED5dMpJP2AZZ1LUzVWoo2E4rasAZSRuVzVescVzM3LLbPfq4BF2mX2Gy3kMMDL5zaoASYyF",
  "key33": "5hSjLije8DciaAf3E4Qdg4QEtkEm8551TLMovVyJkjkYTvFan2asUnW2RdGvohG4bvgsg8CF2d4xLfYw6KLnfzhT",
  "key34": "3FeJD1vDFW4XNvwPcDobZFXbkDQRkzZLKLrdCZv79CJE5LQxUXQeKPnWQffby3DFtBvm6c1UKanhcDqDCSVhdPNr",
  "key35": "LYBtHBhn2J1ppRGMSFs6gLNUFpcNFqtPuEh5ijWx2HuGkrtetSygNiJ1aWhSs9r6Q4WxkohPrkeoGJqUVP6rgzY"
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
