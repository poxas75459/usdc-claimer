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
    "2B44s5kLAQMwPaVTx3cvjrr2y7Rvubq65xdrfHBszYCGvHtTWVuEXjWq1KPrLGUVgqVSmU2gVMS51tf7XJfmAdWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQMHd9NJQmDVrG6mjAL8t9C8y2BJWkbWNuh8GTnSDj2EGoJmVHjvqQE9r9qqaqLxJxb2MLQeBEcLu86rVuDpLEC",
  "key1": "2wDgDa2cjNbcU5N3VD4YJhPVVYpizD6GXW3N3FxQQitrqprXyB6YjxhJZDUT8jDmswSnjSkS7eGbCL2ra32VDx1w",
  "key2": "UV1YzC9f3AKtFWjpsoAVpCYawJt9b71Ugu4DELRtoeYcQ1RAtDt3wepsMhLXikzT719RH2SL2v4ab89oWuCYQw6",
  "key3": "zbbY9GWf7mN3qHb7PhCqyzpWQ9JxiLMtLtLg8gcVKHEkqWENLkgnmCdfiFDyc3zBDuBARHF71ANcLBojEUgpJrQ",
  "key4": "5FCUNGpqUtjUq13hrua1NjLhwgnY76XStscZ7q7xyY8fVCbDWHyhNCyZHQgrMmxNA7Xq9afTgpDs7n63qy3CD4NQ",
  "key5": "2LDZ95Zf49RNio4FESgfdNrLfXzgjqXTnhK5GdbPicutKWR29JTzj2muSnXpho5cjivwVA9hE9FKqUNzqMXpDupM",
  "key6": "4w5YwiS5HXpLQ7rX8g53xG43mj2nrgS646TbD8LNTe6t1eJhPM2Pr1oxeEGXK2kyvPPu92sdXwZ1Akc8ttEprxZP",
  "key7": "61Pzp2av8i3y8oS6mwtysESWcmUKMaVo4yFi16SyFCGdU5th8SubrZc1n2fwapcqK2dY8aAhpJDqNKbRNm4JjSQP",
  "key8": "34NfN64PFYDXpFjqB1rtGf46VhADhFAp2SDeEtDXLDAwsQLdNWm1QDhzLhPVvaCLj6m6rQxqE7g45JF5jFymD6Mg",
  "key9": "58S8Q9mTWU27m8TRyCdraS9otVJMGmuPSKN4hGcMSQT2VMoSR34v7v87ZbXTDTbM6gwMZsJQtoXUNZy8RkL211Y3",
  "key10": "NQPZgR5RPKoo6qTP58wkCzEEb9W4VFTn1uwgvmZ1esPTvN2S1j2hJqzzfmjGeRVbyHxE1FmxosovJqSYeHeA5yR",
  "key11": "4y2ARRVANicpMfPYUjRP1D3hATAF8XpioFjbpbQD9bgaZw9qwxkK41JijCvjqbga1BDqCB39wRiNKiWZCJu7kUZ3",
  "key12": "27zGQXFP5gAwj2MssXd9qREdYaP4ereTbsk1cM6DNJAGAS39sP6zQ76oKGViWZetz3eH4SZPv8jiyVXVBQpUceYN",
  "key13": "4gN6cmRfPjCDjZZADAkz517zCmZET7eb66JCGPph71JxJQwkBZcYzyUSri2MS5ESZreDZtAkcbjbAQ3zbv8CAoJ7",
  "key14": "53AUUqdF6rD2xvWFDvtGvsnwRpnHkTyzucTxWoEPsYe2JWQ6rFg6FqLCXRypQVTBDa1eDgigxuWe9Y9F7Z2kQGdk",
  "key15": "xxnuyL3YNtRJHcpYuf24hB1FQhkqNHGSKXFM927FXFxGjyVjD7Ad7mA56SnuASUa7NJzc9vRAv1sJncCzK197T4",
  "key16": "31MeHTcs7547inLzzETNBWKHvPEHN5nYUgEvnuxpS7TyCp8FUcT3EXDaqK5BauLfLZv5SSTiKfk1jmyYkJfX5XJe",
  "key17": "44SN5dHpfh35fVzyvAWcHxnUFAu8diHAPP3Drp9bVgJToCx7z5MW4vTUtTiMxJhkKb7YBCKvKf3MeyUN6NJQkaeQ",
  "key18": "uc7Y2KDWsvk9ShSDNRqFdyVuXNazc7uxRFhBaQ2vA4vTMRygzEF5sThEajm8PSmmb51uRr3uxkVBUqZDxt3KPvF",
  "key19": "4Av29MAcDrfwyJ9Hs93WLHHWx1BZLBAC2uZTPZeThNcJkf7R6epdduRvKpCtrmQ3nNH5WHy2Va4itThXrNZbefAv",
  "key20": "wdY4ieag8cvMQbicNRijVig6swy7Dzw4mheSjmdy6pV1b2dUgX8TFL6GknEk2t6rr1kwqUMVWF4PbE2gVZ7CPYx",
  "key21": "5A99o3eRH6XNgUXHtedkwuZkidytNpWGDvY1h2UctYnDFapBXJgv2uNbkAhFvo5N6p8aaAsS5G4cM8C5Vh2aBEdz",
  "key22": "3ZJThhYsASxpQkxKqD6t8whWMCCw4No887PhLnPJQcr8Nd6U9JLZcM485N5ZbRz8GTBxqgU5o8nMkoWKv8GPBN7U",
  "key23": "4WELDXxp87tVRHdH6kJfM3RKpLhP4cBnoKvJyMQcUaDTTzsSVE7s6xMvzPMmvu4edkQmUAGrJJAkAnQ1uVTPKUcc",
  "key24": "3x5GJUZxrhToo6LDsu3wiqN99mtCH8629BpcrW1Quo8fzZC7ELnEZREo2Xt6JB8qvaHq6B1DXk7jnQBkPTdrKJKf",
  "key25": "2HZwxtEcejQdvKLTr5tsCrUx8mKVwXe84CawKDH46KGubPgQspup3exkkbUH7itJSyXJbEXEGKSYm8UtZU4DXcCs"
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
