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
    "2EueE1ruoVg16TeSjcJWStNJr9oixKYDzpUsHb44zpgtSAFgqy5Hqe8NrKxAFwmvo73etUDTdYKMfVWaQtmnqze8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfesuNpjt2mChwMQYrcsBDMDm1KK6C6SJpwHyiuD9kUhBvWcq9q8ALmktJgh2td651AKzCNcaVi3Nc2YT96x3Cp",
  "key1": "3DByMaet4vCtSvS5Yo3L6xFkVwakms88bG2CfoE5jCbUnEtfk8o2LQFwUunb5enyy7exUTkMTtCzXhnnEBVsNnzT",
  "key2": "2hi6sVhoXxSNyiwcZgF2PreKn6CoradFwCVusaosVP8Q7KTcS4kKEJ522uyk1qmQJ69J4asSa2q5UZjMq8FX2SvL",
  "key3": "4H3K84ey5UixR3fyq46ApKEaTaEjKEq5Xq3FEVomWoTFo7p9qNkAc5JSrnJAJJRP2PiFMFdBmV5rgWPmWLpXENhZ",
  "key4": "5QUNqS7hXFNhV8t3rKqXYZm5tN9uo3aE4LFWXuePtRbAvnVbo2UdQGbroHqL8EQfG1bfS3CegDZu1zKhRXXfjxDx",
  "key5": "2QseRuEvvG9G2mE3G6fo3nMw9MQcNKTMgbubPRqFvME8gmHsjzFJ22ash3KCfJS4FT4s84qVVpFxSXTyQ5koTMs8",
  "key6": "2SNXiLfNEnDvqQcRAiSCRADuEknb7RhhjhYLTWH8ThnuGFza8QopFDhUf5F6UdGDZVbCFk3S5euSUhuSD2GKfLGt",
  "key7": "3J8b2VCjXxQpSAiFcnEGSiSqnuYw2xh4RN6ZNGsp939nmHUmi8VD5dWvbGCx2R55UcacFyx9MAN4ZC2EbfMkryRJ",
  "key8": "3JGJcLEpzP2MPDMwj4jyjLbFX2Sm814RdrBJMvARbBjeARxW8H6QYcarJT8RcUPKnr5yvzjY4uwpHi8sovCpJkhX",
  "key9": "cwxbJyj8QgA7WdfqJY4MSyNnzJEEnEvyQqPpRqjegXAAGDmRVG5V8vU7eCqiuLJ7S5juiKYiunrNPXr4q5ZdUWP",
  "key10": "5WPtLQYgmuPHkDqPztbwp2f4vWL8ufvwmiyg8BRB9Vbp1JjbEig2brvzsJkutfnDxTjabHwp5CRzXzdLsyo432zA",
  "key11": "2ddQ21ZdV4ruZaLTuqoMJ13J1cuSqsbWyyFFrMywQQiWhi9ygTeU1TMue3aqzXjbMfPxyMaruDatb3unUsLFYbd9",
  "key12": "SWyataP7MSuDvUCKA7x38VrDTiPCDAyAiguSq8BakHbFhc9YVC67anY9GRMVmDuFWmsUZSVkLg8EdUsLYZEAqZr",
  "key13": "2EMaeHZ7RgN24zN5Rt4s8pTrzrSzZCRxhFZgmfSCZ4qKhEo3b4fH4At3NrEbKWuuHWBsr7MNAZKFX2DiMHXoixqz",
  "key14": "6GXtUuBEf4gWHEbak3azMUgKUAMa1Ffdaw1LESVR7Cm2aJ3jJsky69az5U1CNhrGci39Lwod3RPvzQcYApV9kKW",
  "key15": "5qLMAbBLA2UtuhRSpiZRA9AnKHEuhMczkcqU4SNfJzns48Txc3sK3xwuT55hn6jAvqXBmXk62cy5ZrZsiE4mqyiB",
  "key16": "3LpnsK4VBDykTC9abF1h5MhMVbguRo5fXFHgoYFUUzYQ2L92fVAmBqAQMxMsdCo7VP4LpMw7PMp1jQziXnScJVnL",
  "key17": "3LxBcDKqCET6T4NjuXqrG3USMAXCqur6qafQEwuwhJFQTkCBHRjMw9JXSM256PXsxe9yBVVATsYo1DRofBVtYMWe",
  "key18": "5NP1GqbRPWynPqrcSJiujpJvsNHcaidkK3PqiSC9o5WxfZ8DcojDAzrzkVFnVkvmotfCyV5wMPhVu43c4xQg3y6y",
  "key19": "3GN3eiuW1tEB3SNEschLFTkcWPGnpV2zrniGo21ankmKXtBz9ntDXcZQvMAPnSvGwZZvLxuFyoJWQYYwgU1a9RLC",
  "key20": "62CgPB1mpE3hAks1tzCEnr1tt5RGohq7V5NckBsk7wJHw7PsX3CZS1uLBoZyU7Ph4K2gbdC7Xjn4yU58bVehCht6",
  "key21": "4bx9ehGrSKjtrwUu58JTpEJ5P5XWyEsqDXLz6KUCRdT5pqoCY27GQt9FniUwzcfYYgFssM3QcqcVo1RP7wggaDeS",
  "key22": "66ukj95moBpCsixo8t4waYDxG9CPEHn8oqq8YamSaKP28DrRFxkFRZ3PxFBCGLFm41MViPUCHKAWtr4j4eyaBckV",
  "key23": "5xbbPAU4VC9J1J7xxfU5bvA3BP8pWHjWshsfZiuiWKnSjkQgPnFYvs15s4g7Y3FhRpZV9QbH7P3CSNWy2S19xuGd",
  "key24": "M3n5X1ofiFA6oWx8kKNc94Wr1C1vBr5wMLs1AJwBv1T7VBXokvQKHXCtPgzqnojVk5AMCw4ABEG1UvqRGBeyBvz",
  "key25": "2wYFkJskNRtxp2UnmzvMsbJhZPkeGVfNFWitLy3UxjVzfz1P4oHmS4MNo5ex277CiXZu2L8ivHw2KyjLTsdXfqn8",
  "key26": "56X7wNsWgQQkaTz65QAJ8PELkzQ7UY4dsedcWJAJEjU6rpU2iD9Rgk3yERm4P7dchKv47JhDTYvuQqFw1CZsFkpx",
  "key27": "4AfY7yC2EzDCNYxu548FkqPvkTG7fYRQH39ga5AQCuqKJak2kF2WG6BCx4rGcFLby9q9bYDRiweqdLrptmjKZNXz",
  "key28": "2cii96nf81qkwcxnM5dYkwUwcyMuPUuFEoP5rNF5ype9fpzArPybPP3eTbJ5d1uAmWn6mWT2b2LsCHdwDzEswaVE",
  "key29": "21EfKBbNgUiizNwjTHEQEGesc8fjB215W27SPx7mASZrv5nZrqECujJxhEZdNYx6x8diA5PzPR2j8Jf2wgM8ZLAb",
  "key30": "XBMtLgJ1BbLn7LV2Ma2cHqTZ3WWiA4RtVfHKXm6DVgJSNpxv3yRNxRbEeKZV9Zm4PbaTHu9twoqjGosa1jh3RdF",
  "key31": "2CjYnRBMXENuggzXNfasV9F44yNQULrtb8BMvqcZ9KaWWHDdMihRo8Dr52SV1V9j9iScmGYZDAsgPC2pnZsmwBNg",
  "key32": "5AUTeSbNbQrHQzfTC2543nJGhYEwzt4JUtGi1jHpkt1uFXMwVivBbvuzVw9GLXXYoWfCBF4sMtL6UGbQHyBhCkxX",
  "key33": "37DZhJceGw8rHte5YRfjenKA8Zz21daqmndUkjHSw2FkuecaTkds5XNjMShL3UAy8Qc8cpqPJmyTwRGsrHV2cWSi",
  "key34": "2LvrDg5LUpuJ6Wc12P9V346BXAvcw7jBXgs6SC1gKBiq1DnJvZbQzTSs7qq1uCEkomWxQxfpauqkEcmv8G9YxQ4T",
  "key35": "AmMcUzPfGCAYoMSgwg7buDy49RXSbSWUtjSULZnsuAhZnp7wfmZDjXMeJ8CoeQFqoEqL3DXuKp3PmqSXQncdVqT",
  "key36": "2RQmTns74ECN8SdQCpXHQ1fYZdghKWTvCZpvoqmQ29iN9iv8UYNsC91HcdZhsiBQGWQZqYCKbNNguc2iNDA8vGVK",
  "key37": "2kKbHoog1KvRZRBu9xeMfyCVy9B6zBhFCfQNGNdVUNppdtkxDSeqLe2xVovkiSbY3ac8hKGLvKmMmNf8TkT5NLSE",
  "key38": "3DU82XdREFieNDMH13u9GXf3baYWUPnDtdrxReEPRZ3eGpXcEV66febX1wPzoCotTBzufuQiBGh4B5ixESBkJsNj",
  "key39": "5AjtCJ8LzAAM1yCpwrWY1gqRLhjyT2Do94Tt5Y9Q2C4E8pB7WQy1mf3nKKH3spf5cP4XHJfroZgEgJ6DJjQD2Yiz",
  "key40": "4aGEqXBzmjKDJVNdHvjS6WUv3yeo5TwCSVqXKJCHRkFRt4Fty7GqdteYaL4gSqwUeuaTd3xrxau9F3zqzoEDwqd8",
  "key41": "2eCzJsCr2HtentwziEcVXHmhv3CfC4FGdBL2F2mhxbJv4sXKSpXHjrXmtGt3f8NaKnN4W3zZVj8JU2JJ88hQvtq9",
  "key42": "iZahpsNDboAJVLupGojgoymexqJWi1SZLoRBq88tYpCbmJJGUPnJuRGG9JdsgGbgpSx7CLGVcYyRyG89odWjj4K",
  "key43": "svCuZZ2x7vKBTewiATnr1y5nsDgo4tdkKCgi6VWbUaSavmpnHDbJ8moJcL1QjGtLYBPq6yjh5dn6ZBHxSdrzWDn"
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
