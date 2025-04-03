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
    "3TruBUkpRJr31k1yw5KwrC6msJ2eEztD2QYPETQGH3DbsgPfmYL7wXhvB2H8vT6ZqmAciARrS7661hiyXtAJH1W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKnhErmdt6RHBgnZSs1qHmX5kE3gDeeiqv4XoPMUHZYfHhFzoxRWF49EnCwiBXZfrQkbrxSbbU7KyutTv2WiyHU",
  "key1": "BXkirfXUumZAHDydy2gq2jEX6PQJ1gRaeJrN2UP3JR8GRgjz16kuNqBVeLnuWD2ey1CMt6Bv5szkdHcZJMhsMJf",
  "key2": "4MjZJAYeVwmoFxxZduknTkfVYSgoogch1F53AKAst9yCXXZLfaNEda6pvpofKmGNMbCPykE5JLhen3GQRP4gdofd",
  "key3": "3R3n3BXGJXzezGMZSj5VhEt5HR2wKxJmoctzKMxiNExfdPcQ25EkuxTEiGUAfLr38uy9mdCvKDtoXVTAo3YFgrrw",
  "key4": "4Q593r3SYdqgS49UhzpPDYik5VC1rL69q9FvkhBYYBdgRNXAVN993ZAL4v9eoA7aNNyahTfNRVnd5RivDF6vYCGe",
  "key5": "2crvHvPKqzk9UZdRNcF3KWUkacZ3VKWuaFMmDRo4USN9gKSpV9rxcyJQk37PHsH5rCdYerWmuzidnggpRGJGW1SG",
  "key6": "5QxxFWAiczGmDRQ8TXQt2apTghHLeRMKoitNCwikYzdpwkSZKpQUrfLsCWp3aZtycAR13vdywRMxncc2CbbWxqyA",
  "key7": "3jCHnHCXcEYPB8icyr256GZ82VnNvvhoNXBbBG6qo2WKjtf7wvggThLMpBaEn1Wx1Ho8bnjgqC4LQMrLdYwasuGq",
  "key8": "4aHBo3Qv61Z82ohrN4EPRoLxYs4b58iAaobBn7M7oQG8EtTd4jTffvoyvP1GAops3tScTi4BpX3kMzCF7E8VEPp3",
  "key9": "4Fw9cG2p1JhPD6FNwdQ3pdQJHgchV9CPwdNLTTKwNmwaaPzaZijLADUVYL3YfANrsbQJJpys4uzRrvgmCtFqWKG5",
  "key10": "3Yt3UTbeMoD1wnfyKL5LkrZAp3KTDNcrfg2GjiawrdLHrkdE8dgBwpCMop8WcookeqQhuusYFJoBf1ePb8a1QHww",
  "key11": "2vpRhf13VoK9hK4JFAwWSMdZBjY7VaQ5TTvDN6zAzddeyg11x7mePbMsRJ29RKqU6YCBmFALL8Ac51cSbZ7Pch6s",
  "key12": "2osdyR9piyE1dfuiZs9Uz2Wyq7cwAEgiceD4YnVpf97WXNJ9iCp3mXyBfpBuLjjvhSPLjeJu1fRc5U8TthPo6Ngt",
  "key13": "2kTBJobLZrk5PbWnajwyNnPGD3DFpH2YgA7XzTKs9kQSWaBLfYspTc3eBh1BgwuyKPjumzmW22GnWubbBhYXE9rN",
  "key14": "2NVauDPhr5SaJzZqJu771vS4E7oX6SH1eQGSyV77BmJrc7SZkhaP5uFLXcKqaiVEUKbA51yAnJEBbay5FRQJXPrC",
  "key15": "2WRiXDmn3hy6Ggc7WTpDTFF3pGgT2a9qLigmQPSxT9yn3qVTjtjgon4AdrCzGJbVZgXveG89Cz3qkLnpCAqUXrvn",
  "key16": "2vdwDvKZLZRw4NWCDaLQ9znMZ8PzhKVhUvsxy2bQxkW8bUhBT72BPLRTQHKS1YYD6s2AZ7ja8XuyxL59nBzWLckP",
  "key17": "56nFufKJ7NXDxtagPGHttYCdgd68WpkG53HGVGXFAEoKmoQ4yjN1gggaYTJRXNafcxovqMnFVazketk7dBqVkoL7",
  "key18": "5XcE7iYFtSKDWg8fBEJpp6tqxvjonDy8f9AZ1E5NwQo863cyF7Mjw5ZEkpvqPrqsvjSKtLSBqKRKzsYisBqrPEF4",
  "key19": "3dwLQX2Z6u9KadkWERGjUNn8GogquPtEBfRHYExT5YWXPR1ApRJdL8iKTXutVVsRhhFqFzr3quSuMBWzSbzJwmGu",
  "key20": "5tcf76sQqyzvzbpgzpwxuXGYu29EtRjZSArFms1qevxqQdA1FtHeE173bJE9MBD4W4Qp8FSiLbbG2aS3hhXm7csG",
  "key21": "4nV6gWvqRyWLR5bXRVtnjfmXEPzdZnqiybuh7D3p468j6sWEfDpDwJmnWRN2zXut65AShABTGBs4RNdRP6W97BGN",
  "key22": "5A57xYw3iadqPJVvPXdKMwt9z7zXX3MoSZS8kdqFbheATc1TpoLQH36FLtcveDJLHX6mG2YoWLnJJkES9bGb3dp7",
  "key23": "5TuLcsKP8K8xUpBPBnXauRxNHNGWATTocyQxWzccsdSPPdUKHNHR3KG8usqySZPYHWGSc8eqHCcL4AWs6giXUexm",
  "key24": "3c9eg9oDxP5RR6ZKv4hmUUnnZpYN9K4moWozKFxqmJABkx7KgjDe2yXZ7w7c7wbM2Hg5X4za5F2zMUpqGFPqzZSE",
  "key25": "BCwzqtEqRa1En2ZtQ8FUs3t46icbjg3R4w7yxQ6nK2REzyepWEptQdSDN3uivXQtbV1ZjP6poPvCdUdVoPpSpmr",
  "key26": "3oWwBjGUWver5T3N8iWAQJP2D22oQQgwG6EG6N1evkQfKDyREYfE2awuGkeTF57z7mZrS1Hw9M3uG3YXF367XGhW",
  "key27": "2yv3xoRnDu6AganvcyjsTHME6J4GQoeG9EqykMC2LYv4GdeRkzK1gsfn8UvHLDTWcQnNSxqZakgF2t1ykLe1qxWo",
  "key28": "2yYYCDSqyzbFzDTGztPnwxCw5vuvR6LrhxysSHShVT43JagZicJym2KxHw2AWXsb3q7kMHkNRp74EirLFLN8AuKs",
  "key29": "svFT2PCHSx46DvU5DsNDL3FhCisrvxFBy3sWRk197uYXtA23DKopBsRgFMhaUzUoiKetF5keC7d13csYiGi9cNM",
  "key30": "GTpG5gVxHjiV2UawhdeFQokuqgbVTKyi2KLahyHtuPfEHSZDKbtrDUxa6KHdQifkCePkBC6PQqrYYEho4Vw6EZg",
  "key31": "3K9dLr28DVDeePLN2T8A9gJjtjMbj8PM35hgNTFswztJjcaw4G53rBu9yeWKJgAopGvRviBoFrNyMhEUQPhogZLq",
  "key32": "3afmqgB9UQEE1ET33mSu6RZ6UoMQZzeWZstTntZtL9Jh9tx4zooBzy8nvUKerkMN78woySmxDcrHHQHVYbHiqQRA",
  "key33": "4Ho8WtQMbLfPZzFZ9GA3ZsCYuqLWMq7TLFLrMzLTePceQGMkJmFZJjTcKKVR1iSgzw5Mu6916jZuv3Uq3u1APZgT",
  "key34": "4CP4UZG2v78EWkz5P1PG8mmwXXnB7ccr3E79mGmkGfLd1bfZbQGdgZVJw14ATTUT8mKRMMqGZEAUZX1wzuWuvkPg",
  "key35": "3kSKCXMffP2a6B3xgVKzUsGLE5eVYEQDpJxito3Ns7dVzgQ3r1gAj2ro6iQnMU2VU7pb3dHdnDDFE3yuooqFHecr",
  "key36": "5BqN5bKRs6qH76LT3USxmLnZYAGuExiLwvResXtvs2mUkGhTq4kFUUXKuGqavSPoMZYaqDwT6PDUe4HvBojuVLkH",
  "key37": "4uLjEeAYAHjsEyt6bwtMwHAfuveMa1mK92V3ALEZ5DjQ35sGwMnHzQ9kCMR9UeMf5pK5Hq7QAZ48zkSA6LPcAzUB",
  "key38": "34rZfmin1qZE4QjAZrZweJmAvmBQiM9YWdV8vKb7sQBSLWeVW5AoEQEejrG3MZPMEo8vV2QHKu4XKEvaPSJ1wBgJ",
  "key39": "3iwbZ8QeSAsvizT4LjNmgne9CLLeYmDx8HtXJFBQgi7vhrpgKzmHfcVNiUuHZRuWAkwciLXHAd9oL1MQfpmpZPd3",
  "key40": "3eH2mvKdsrYPYpwU8U3EpEWGKNcfZJs1hncwud6yEQWHfCfBzKc3eSbWQ9YVdckkHg6fzv1HpeVPZJyGp3L7sCFz",
  "key41": "4edShnpqTTotCCiW4HaBzGspsxFmUhbHqFTnVeHDjNywuWaqbYUdkdxWXR9PAN8vV9WHuTHbwxPZosasSbuiEALM",
  "key42": "2oongoMyui3dWWGnj1DvY6FVds5JvGrC3oahroq9x8YLPpQSDpYxMVs2HnrAR3NWMesjgYfsT2GRR2QTXvDxHKPy",
  "key43": "5Ey7Kxo1K4RjQVeUDTTDW8CUNH7PbxLXxzwSA8mtNGYiQzeNDJYScCFB49GDLCYZGhizhhsgLewwxFpsY6XQDK1c"
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
