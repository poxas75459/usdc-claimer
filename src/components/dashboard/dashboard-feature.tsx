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
    "4cJeAKQJEiZsBd7WucskjV19dxkxhmxvCyvQPktPUFRd1kAaUR6tRna9hAD3rDrgaK65figf6ydGXDUCFT2jKYxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYf96keHRCNGtkuS7rZPr5cvckFxsM35BbeEbJBeACRSycLoYCcRdRd6dpgNiguTTUXbyseZWmpMceN3rakhuLz",
  "key1": "5kPTvJwBS2yPjtonRcbzjM719cAgGayvJC7a6AtcCqGY5hTPczjeEHPwc1Rw66rXMag3ZKt6aTWNx4H9J2Qnc9bK",
  "key2": "3ey4AxVdUoBkSzQDwWL7ZmAtWkuHR26nLqxFUXBV4AK5HJmsfoM5d91uwbL5inyWGFtKnH6GMqQXa1TmaYih9vqh",
  "key3": "5eQsdmR3irpHVd6WnGVNquSk8TvzcXytkPriRdD69hefSNkZpowU6FDimPFXcD9pur9Zfo1E4DbYw53LZN71r1nQ",
  "key4": "5KGXmXnnmsfcaythrpanuMsWkEBJ7yWsyXKyytRAa8CpjYWbZKMyvSyhSFpqjtHCyDCBEXpd3rJ1STCLPKKr9pVw",
  "key5": "37H1mM7T9bJWpBPr2GfqjcBEP6VVbxQAmhou8UHHw4PPHDCiVESeNJ8LaEuFnKspnHtDGTUDiYL4X4GRd1xcowyp",
  "key6": "4XBEshuuLdhAFyzmGBo6UBpTfZ6i2dohert8cCZRmFBCEvxJa1fT9UXZZsxUUiE43GJYxx8EwCnQBiNfJtfpM6Zw",
  "key7": "6obNwqcpxwcB4KyNxEa8ETcGCtzw9YNNbCy4wJSxpHvfnEPvTvm7LdFC12bwyiZrrGWtCRmZXkokXzUwkLn7qfq",
  "key8": "4jxzKWaYX3A7gkXkbrswXPBGB4siqxPnH1AekpTndr4Aw71wxbdz5PcXobcWyyQ22rLqm8daW1pn1YCx1L5zquPs",
  "key9": "4d5TVJdjEXm6qP3vndPLRYCNBkVxJU8mKhVyiDrWZxVtFPx9hqtWkardk1BEJDsmc5hGDbDAMN7LQgWMN1Zm9Cf3",
  "key10": "66pUKdYxndLNLeJKWDVseA51Scjuw7aRbbZkabeb9p7hQi7Lr1cchLiNEsuTgjMUjayb36eLCdS1oyyA1odj6eF2",
  "key11": "pf1seNNaRs7qYsSGceKcME2odmRPEd34CPvNidA4TZZ5BCHQAyFsbmf5e2xEKHeYLuE6U9pWJWp7xvKDjSR6i4A",
  "key12": "CQ4soKuj4X7WFGtPciVPawAbCUwRaK7tp1E8ZTpruTtuzUTTUv1p8k84Vj7XEtM6isjMP46mcg3RX7qebJoEXnD",
  "key13": "5hyVc8GLDSyf2cgYRez7X7bqXQACXdkSSmVb7B7NA8X2QPNDXJHnPb7hyResD5Nd4jeCDhNfuXPcyoTscFH5DoQt",
  "key14": "4QqZiNKgYMkex7uxbcLaBD5Jq7HmF2WB1Mck1VSF6SBVhZeD3jJzVtq7fgdcYyBwU9fkUhtLUkiYsevkzRUYd8dc",
  "key15": "27rD2SEuCtv3Kqa5Qi8fUfp7qfiXuCwpb5UXjSJMVv9m81fZaV7gJ4JhVr35tfBaYaSys6X58TRo3g41veZ7hpB5",
  "key16": "jQPZB5xXuo46RTDcdwBxQZ8M88KUUjKiNN2JYp8mUBoZba2Q7umz7qH6xEReiSuXoo74z8y55BySqMwF6cN896r",
  "key17": "xMMWtoyJaZZr91ra4W2J1WF13C5GAsTJ8HsUkQEhpySMxm8qE1STrYVhCwYwU595d1JdKBwH8KVkCzKwNHNc7Ru",
  "key18": "A8HkYUpHYd4XLsqcsW2UNBCYBFSHfe2kKv4JecpfCzof1vnLQEG54h8igYCh4ihBCtYcGyiLkxqDPbWQk1rNPyS",
  "key19": "4hVSfQ5gaVLJ7rnS1bdfadJBBFkwNmxHvi2oPuvXzC9bqD1PMYrAb7G7uNQTnQVwwiBtLJrpVAnxheFHdFAEENRH",
  "key20": "wu6Gg1RW5czTEVmwvZA5ojRL2e5kRsm7gMwtnYF5dkHLb7U7UXCUfYCYQ59WDddE2EAXV993GeWGrT8yT7DMe1N",
  "key21": "T3EzKN8JLw9zeLDaXfCB7ZTRvvvmAm2WgRh1Yc73SpRueRJn4KRiKoSEHrV3gGKZgcrHsQx1VmGy3GzZgehFstQ",
  "key22": "DYNu1B6ezu54bGKhbpRWPTmLpAtKoY3hvyGTs2seWzuL5pVoSujQzpmVNREDqPQ1sDRnw9XN9sHv9MsoahxqRUw",
  "key23": "251v6muD8Lj1UmyaDBsy1XjfUN6o454SP1neUDGbVJRd52K7wFrjdGohCDcGhDCGhNQYouowA15oKQcQU6PpLGkN",
  "key24": "yC3i93f8RJ6ENaQgvJEWFXK6nFbgxSCvjXFsabdjXTRdYzpx7zSFuyXi3KLPYW1W3oqDa9bYGLhTKkGC2qgWLpa",
  "key25": "3Qoi36mtg9mvCufjXzY53aohRxZoKRKDxVSrKgMi136pMaqtMRVMvWGh6m3zmNFSaMqteSV9ggtRzWdKYjbeLXqp",
  "key26": "fdGugwUAJneXqkNRiMezSYTxu1riwUn3BRBKd3LntZFmPfd9eEpP4niYyWkSW2YUsoZPQxWBWy1U4zqN3QwkKFq",
  "key27": "5t3HHt2KZ4Kf9bmJ3xLnMEp2R9tJubX3keF2dE3Cn47fxaVSVHq1nkPLMuicfYpXjF44qTWG29fHTcLEtnjb2dNe",
  "key28": "5dmHLZdNJKDVK4Eh7kLtNQQ9PkkCU7P1xASWGTC4B8LbgALJBi8tJH4wXwp2tZZfMhXywFYVzi53yxbpLfhi2gLj"
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
