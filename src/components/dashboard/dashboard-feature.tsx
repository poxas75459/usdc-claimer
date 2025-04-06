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
    "2vgqTAeZZxNNyvXA1cTrBLBRT2QYUGZiGb7L2nwYH2ZD8miWPEgrUSJWfAcknzopQEvGyPR9RgbNdYVTw3Ywwndv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XL42dF733NizdQTHpWbFZGuEJY6YYhbbi5oawXMMFQU3vs1ZR84drYoGuAYhxrxBcfATMxkEonyK66DL4DhZDs8",
  "key1": "3B5BVLZWQ7EAFd3Sw1SgFDy8xRXJC9x4SfbyDd32Ta5GCkBvgFiTg8bmqb4Y4BXB1mBpNcdrxiWUXFvrFwRn5na5",
  "key2": "2Z2R6UaeADsTY2h1MKQC5dRvRJx2mBy8XvoPSxiwZ98E3mx2C7NuEyAvArsPr4yir2duGF1wcNegjDP2Cj1k2scH",
  "key3": "RFKAh4ZkJLr3848pBiMWp593Dv8mKxqA9NDDqNQsuEXU9zSo8zXShW8zZrS7ED2uRg1xbHXbG2rWYu3BusTHZxA",
  "key4": "39UAPa4VGqKLckKjByHbkEFafzsR84WY2DS9xE9rcRBnxhrf9ehSCfroLx7xw4GyFjdTDA2VDAVKSmom4P2PjFPY",
  "key5": "5GM2PpvE3B181e91EaxFnqVvK55RPn6HioxgDRo9M3piAm3hhkGEziPK9G2aXDdXTKwLcTUqBPqV7PWqyYe2tp4m",
  "key6": "bNGjDkWnxMxF3wG8iocTYQqenaayCrBtdxdNYbHVDU4Qjvdug6dVSozzgYjJa4T6aTZP3yNtkLHVfAaMkPTgyX1",
  "key7": "4qN5jgr74MARHkp9vsosiihtJFcfqj95at8rxvWVoLo4QByDuSwjTcvsbevNXXbfEbrohjpXzk6V2euyJzCmcSRA",
  "key8": "U57gw7UqoSvW3FqS3DNadra3iTzXTX2pEGNKe6TALD8ChGxL36W3MjtPigo4D3waVGqAB9Xq9Rd2bt9nUgdRnz7",
  "key9": "2VoTfqp2Fbkuv8V5hSepv3FKvkfjqSLgXjQxx8dvF5qm95QFthZXRk1ygotETNP8oYQrqZXKeU1Xoq2CPWVQpZUm",
  "key10": "3iGvf6LnfJ4HJY4rheF4HCamW2aTEywa2NJ5DWJ85yhtZFPFkJ3jfqimFPekoryxXk8dKahSssWwYTMAxcaoCodq",
  "key11": "2jnzcekw7cC1QbRswugZo9L9mwhyEhQSauQbkwC27YyDgSnpWaGQWGpgpaM5mHfegioZmz7qcsthutvQcG5kpAn8",
  "key12": "6k7DYz6o8RBdzqHSyGYEBt7DpqqjRciAfYV25se2eRt4ga5JJgPt7CptizjaWm9JfNcNQUpZKYTbXCCMydaS9fB",
  "key13": "55z9yL6SuDnmSKDJXVTumfx1dyG6zX9Qa2suFwRgicZzhXJuGizTKuC5VSUjunWzX3HJFbQVDxUxDvuNvfLxfQ5d",
  "key14": "4JxKi6GMkNMfv92Sm4gBpnpDruPbQcqcTS7z2dYhjjb3WxLuUjgGG3uSA91xp83jTsAE9ZSfvVPDR7gexHEAFu9B",
  "key15": "4pP5gUQpeRkwdfFJ4JmdXzP7mzQaRuviexmNcYMedvqy9WAPpQEJQmQFtRrSWoqitk4EiWCqdw9Ut6oV5FPQ9ygj",
  "key16": "5GFcUMvU8StxJSERfsRE13ZUZHugx4HkeSNTabftrpnWUYdoqFuk869zCgw1GaJWY4huaPSg7d76arBD6aGNDKyQ",
  "key17": "jqbJbcmPti6rTndSrhPmwQ4t3C2HeJidT3hVSMSJpWcpmPQNGFbLdDw78JEJj1H3YeWBoA5CJjrG8Dty86cXA9H",
  "key18": "3zEAXbw9mm1qthpoTxwoXf642tTyBCUWRc1ZeDcb98UXhKEh7FruU5PBfsT3kgTDe6Sp7kmHNh8rjgoJzosLrhbj",
  "key19": "gnitsWLaA3Auh3L657KytmkMp7VDnkyB9izpQESwGySvExdFX9wkFEmXS9bzhY7RJWWXbd2GN9MgtKo452AtAk2",
  "key20": "46vCV9hwYuBwWxfNFznbfacurpqZakY2PQo2onUzdPZMCBZ5tnVvJYYwG72WcyALkK3YF64NqLEjNndBWbZLs4wa",
  "key21": "214PPrzZGavoHD5JZopnGRSSWi817fYAj2hs4ZtDp7aqbXWzAoAwyjbWFVVyzCiRs6gZCA2gvhEMUkC7DyFqAGmS",
  "key22": "3rdgFeCUERQg3BUxjwFoRqvrRpgsKHLwg7FVCwZUdanTARvzvkEXtMqVQmWEHvmG7C7XiZyp4hsDJZUJsVL4NbRF",
  "key23": "634VbvhAu1LxrcSW6jzPdSj4YWL9qmdUpxBE7sciKG3JKoUDHMaCXsWYMgYnRpqC2UmEmaPky6qFJui7g7a8w3tR",
  "key24": "AdpfUfRYqQxDv7bKWgTfQKahhuXaPm36DAAqsURiQM8TovR5gb2HhfMdjQMKUQwsU9HRJQAb2Q5mQcEW8he91pf",
  "key25": "3twEXZaLQfbejyev6E5BN3jhQ85rMzeVZHh8VbjqiXPpDNwCuM5vg98n4G3udB4unkUYCrQZNCw7sXJK1aNLjHVv",
  "key26": "2Sds1KLnKfTXLuY5NVvrnf8ySxUfKQaFtsW6VicvPCeBvBjFXEp17S61sRA4FLsvPF1BngSbRXZ8tbQzaJadSnjY"
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
