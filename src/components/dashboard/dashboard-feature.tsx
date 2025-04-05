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
    "29zvfy1U7jucRpwWC5khTUem43uLrbDTr9Qp1EJqjbzYBdLiq4bAhv6pgmRM3LhfoNxZgiQpm1VfUFoMDkohkt7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyjcPRZJfN4czyfvvWywZiGu7gkzEEcfisCsU9KKTb2H5dU7Lfxg8LxvWVSAufjodAgbSruDm749vzeZbmvLutz",
  "key1": "MtdRAdioRSiSPfQtpgSRPW3GbD8NQTVp45w3nj76dEWEBhUscvG8k33JHcnBFQu1GEFZ9BCSprQkCUux3ZM2DvA",
  "key2": "4MYWZDvCHfSgitQhAMSc9rhAx8S8Ln89hKKZ9Cz19XS4ms3PVDzQFNKJbyMpogSBpzNgX3r7ExRFSaHvDuGCMeMZ",
  "key3": "4ZNC6PxPzqHUaFS7eu2tvikUBzr3aRUfAcG6F7GKATTsjmqmxbpH89e5nqmMNcms3W4txT7nyUMGVACtJmWhNKsK",
  "key4": "oWeLEpVxheLTPiaEHPuekMyJyFod5VGdnQTojnUyqtDUgQTMNRi6soAcfUxchEYqnJ5mh5akBuBsSxxxUcX3x5W",
  "key5": "2nukY1y1szTCAWP3MnUbTzhQXXxwZzSemMQVsLTGAyK7MZy6DEgaDfAwxHAnF5ZkYDXGPwAAd2obLdN12xrojh1M",
  "key6": "64Pdf29kmT2gJaPx7KwuV73DCLNJkX6zsVw88tWWxSBhSK5z8ZS8fLuVxgKUZzQso5EUBWsfEskBi9YPy2uiTRQn",
  "key7": "5PdHW7Wi6bNw8dafeZjWZNsLLnbDNWZC5uB935oKeuxifCbk4dgt9aVVCYTVA8ppYJCucfxygJLgU6qKiqEaNMLA",
  "key8": "5YzstmdjckEzkKHKwLpHZ9QMhvh9a6T1ywEjse6xVsn23cbTcfyQivvmwsy3Q8vabtLYSYrfQAYguahaFYBJA8hJ",
  "key9": "DvuXkoRAMFZSPS6CkKp7E9b1V5jamC1icaka48bwW8h9rQfgiCFwB9sNYkJh1XUDYRZC1jk1LgH6jsifCMSBT8q",
  "key10": "4DVdQWSTFcSp7zkZNh3G7fuhr9gWZksBGLCAgAnrydWwk9wfsstthRvnJDJ2Y3WzS85Ef9L1t6Tsmf2CBAnY4fN3",
  "key11": "4CL3ADWDdLUKWp2n9BMKPgwiguyf6ZE6KRQw8rPzw4NpWC8bMaeN1MAitNkCjdqSLC8kAUvfVfUzgwsrCDLe3p9D",
  "key12": "5ZyyGR7e3VcZEdCmkpRvPEQQrrBwhgKtz3gqbSECnAdwGuXpT51Caay6T11ubUEDQTeuP9J8HPZaFqfffThJxbXK",
  "key13": "4JoeJ4Gs74bQhpLJy7oFSGoh1JdYMSca7D5WWh33pjP2KqUxxcrDpnrPqbCxT6dfv7f5HcFCfEsnBtiTGS6qMS81",
  "key14": "3Rtt7PKMRXqFCquPVBsxX3ZMmY96M7ufsbEPC3xCFdYgrtgmmRJcLki6N13nhXCNb5LE8xdQcXzErsvWTDHqgtCS",
  "key15": "5LzBPiyWRNER4RfxJKEaLHfDPTh5zUSto3GUCTv1hWxEQqhwXjBc3XUjWbi6MLvC3cp4QJGfTyD8A59G4ULPHmjv",
  "key16": "3JYgWGcpkN9BCP7HdzKXrw47veyTYZgtPsiu2L1FgTZxs8PtJEV6wRKqiKN6y7n8ehHHJtrgBpcG5f5kKkoLNUrH",
  "key17": "3pASDxpHZgz4B2uHPZoPSxy3PoVSBN6zbqNuCfdrmoxBkmszpDebV1JYheJnDGRx45ScDmnZqLfrgoHvHh9aGtWB",
  "key18": "WDcp2cXig3fn1Czj9rqnRt8M6TdFtg2S7NRmE6MXL99sFMfdJRYTWKBCuiNYuVP4KWLUYjPB2VRELNFgfHjtKTB",
  "key19": "4dMbJwAknR47kLLnR2Tzsvc8EJgdMgxa1d614P8Hn9w89BLzxUhXpd81tR1yQuw4RiyKnx4DdXqSBnLN97jbSt7i",
  "key20": "cSmi1jnAaX5FKdiePru324tG4mjd3P58tWKV6zCQPr4UtaVwg7DiDMXEiHGCGnmv8EHaqBvG9gzqgoJrAmHWWVR",
  "key21": "3GPf8qhKd8Ra8iCtKgk45skTqPUXuZciK4qAfcwAbzegMjGGcWjvmssjeawDAVE6HXUqWMs1NNqogUi1rv3YYJqM",
  "key22": "4d2wfUp6am7xvtzpK8sspBC8KaY1fHHyVRQ3B1ErwuoETHUiyHaJrKVBeQhS426iDT1T6eS9NcxDx681gQgkkLE8",
  "key23": "31h2mZpaaprHa3zeaMofobdn1VBhaQZwuovfPPnrThZqq5zweVAS2JmJRfFfYHNcSBEcd7ZyRuoqB4pb2in6rXmf",
  "key24": "2ZX34ykK9KA57oqF9QewDEyzV4Z51WUuPJCuMsT9YaA8qP8He5Ve57KC4r1omSSzyYZ9n4P4cEQ3onmApYNbX92W",
  "key25": "5KxthUN5GfY7EjAC6TfamW5eJmDUS6Z4xL1CYum7fo47TdnVfC34M72EvxmdoRpDABrBp87m2zvtJYBY4QpUrYPM",
  "key26": "4rCDjuopNPsXXTApAC4kDV55gTzt7ya7D5yYNNgYZCTrLpdfdzw8rQxtCDaCG1nUPpz6wib8JW1AeezQ6a4k9qpv",
  "key27": "4GNFhDbyXw3GxmEFTQS3YVLZtZojRjooW39X5yZ5v8o1CM4hHwj5FLt65EYWWvDGvYoK7azTEV5VFuUcorxvBHvP",
  "key28": "3ziFvaV5zTFFduLqcgbbQo4ggTw2dportQQHH3sKfTZwg5Ci7UWXLLnMMDNNLXJ2yg8ncnF8GAVGt2zNMtJFydzz",
  "key29": "5aKeYJzff2ZTiNAvqzDzTbA6sxb2EZBAyo1ZsqiAxDbdbmHqvaoN37uNVAYRWTmVETqA36pYPnj6aUct2ANEgBWJ"
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
