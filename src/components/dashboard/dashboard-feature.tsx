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
    "3x4zyzmC99aKJTmQ3LPtwMuzUHgGA2WwVf6dnBDJro2aGuWQoj67sCaWS88obC4rkE7Uwt3G3sduT5v7AJ968PZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enc2dapTL3hS6oBauLucmmgaNseB9EK83cmPGyLsi8dsoUihqhhc5VYPuPFnwVgHiBzTgQxdyXtZzmH4CxRS7yZ",
  "key1": "2xfEqmhQruzamSD8EG7bhF4Xg4B8awCvXpuJxazgLdHUf7SYMK46CjvPxn3PqS5DMWdzbs4KWipY86aiE8wqvsEv",
  "key2": "3NLoT3s9dhMHWa35ceGUQkyrsSHNe7TJwggzDdS59f9nqh4ZbRHjnKsCZGrFXPiBTpugThhMPVn14Swwhv2wTzVa",
  "key3": "3VgNdQQce8f2FJNDwiQM7JrbT71ryPDSPvzniTGYwBaGrcsAeqvdUGr8CqhSdcWqXZ4L1hL6RxkLxKmgqA44FJ4G",
  "key4": "mGSpZZKG3vYo4a6vCE7cpN5VrQbb427UK2H2PNqTjRbnarSvcbSna4ysVRHU53YkKnyzsuyXg8rovNALMbRMauN",
  "key5": "3C8zbDj1Jx5sh3A56BwGmjFSVHc1it6GuyYZvmcSsQagZZCeLmk2LrWbmteE5KZg8hgCLhP1Yz4V5J8AqR4JXPKf",
  "key6": "2Rypwfj4NNsBkMmd4xTNCoSKU3LeroRBMhYMGeAouEUVezMSeBcvUZoDrfSLEU5uJwJT75FXsQ4E6nqMh7tx9LQT",
  "key7": "52CkGUppmBRTa2R5KiajZLvQrnngsFvfFS68ibAgBgzBSKQvqbqXKyePVYqkrPvs8gXHKteRj8o7shvv2sugzR1b",
  "key8": "2tueNbcLaRoJTzACeojGNs9zdqwot4TTE2eDpexkLgK9DqzPKpi6nKYdAqA4AWV1ZmEBQQjwhdLQPw72r9CXeq46",
  "key9": "2kwzhynm51tgq7vNpSDmi8XbVoEHuPVWLqrbEUWVnvDyDmAkX78MdUGX1qT4edQMKZbvbkAuscV3RwBgdaqSDarW",
  "key10": "3EemEb4Xxep1TvXo9L1ViSwDh8DFSb6MNu9mrygzPq6Kj5Zhov39Y5bqWBb3y6hX14Rys2MiCYvXKEwcrzJoX1ML",
  "key11": "52DH9BgFahnZKjapiTCrYoX9WMbKr6h7CC2YvueyE8drzKv7pQ47ZSbTnubNb4mNzytmkoUhEa7mRzspDDD8MGki",
  "key12": "3N14R9zyir7DJBw4hpo2CTwn5C581uakmWr4jALPas1EGHxVw6NzTa4BCq5NUqKjucBNsL8y6nT1sBdriUpk74t",
  "key13": "3zZ6b6NAJm6yr6QMXV26NB3ARQJgu9w6txj4rq5JzDeKtu2Vwb8uAdzABCpkmLkTX8b5qtjyKxTKMbkacBovrRqW",
  "key14": "4yyCA8Fnh1hxHnRv4wzo6Spcb7SB3RA5jCcXcfvDgCRBbAPxkavigSMx2o1qXDR7aknShGh3Z7wgPEue3zX95PwF",
  "key15": "5xRQS5VXzjb7WFw8TDb43Ae9Hd4h1rQZPmzay8xv9qMZU7pBHCfJR5uvGBqL99ucw9Ks5FmwFggSzvTmUd57s8mb",
  "key16": "L3cg8Ar9JfM2DWQpRhTGYLqe2ADHVmvVgYge9w3dQW5xCDjCTuqtjYwB1LNkJDraV24CjDkbWc2SgERGPpknCoT",
  "key17": "3qh7qRqYGbmumZEq8VwDiZ9NCER6azVeVQgnjr4UwBe6MtEiGT2tUxnpCc7LVfiBNoDSENiSV5ks8FuSvuUSjVPy",
  "key18": "59wNWPBCCThPMZqqLcMnrJAjNkT9ctowmQoASqm1suCQNBc9upco5AnkQCcJthnb9nu6zLpH3eWNCt4X4i9n89sH",
  "key19": "4wfQBeebEft91ZsX6ELoYovnvB99PWcc5Sr1YjjRQ6ZjVWjLDAnBQHk1vjKxvsGjapDZXBvcKEBysiPdUeSC4SY",
  "key20": "4ScAMt3FxJZpGVZSwVjYaDuxSfzQhMxaPVPsoSvxd4V7UGUcgQ4EUtevGqBW5sh81n3cfBVaf8ny5B64rfCRBKyn",
  "key21": "Xhg9KenkhgiP71WH2nnVf39uuMyXGeBavTyKiB4ViZ5aA5MydM7yzuLUNW3j8GXRtLRujXXhhEa8QRsmsBXpoLe",
  "key22": "2oA43DWsfdMAT4wdZQ2wTYUexkZ3zEP25Bxo34d3gzibWWvPRm6Tfc5TSzrS3tcCqYWi6jTwSRJPoXCgYaY8dj9L",
  "key23": "2QTUgQ5mgeUwYnT4Ly941HpbFAd1W13CATR8X4P9xzKdmgTht1Q3CbmD3mCiVRByT2awzCHAfKF4fNAKaFgW2NU6",
  "key24": "2SmkaiVsbis6rwNgxeXU9ypZVHT6WTLE5jWrbvALEBi3egTTW5pqLC3ZL8mqM7oEuCWsPtHLRyApcSCxxvmrkFNm",
  "key25": "42bAom6U9K1Exyfj4uuhoGxMXTE4SSmp5XKj62sUZkvS1zjn6pa1YHbEyit567DhTNbwVwZ5Y8Vyf1LSNZeP3tFf",
  "key26": "5Xb73aUk5m7cxZgaQY7n1zznKRNvd8FCzqAWoa7m5RkQoiz4p4ZhSas3udTetn8WVYEPWJKgrXMPi11pjmsEkxq8",
  "key27": "5KMHo8pj6KtijCmEJsFGpFaKahZBesc2N1PstBGMzj2mbtiWK4U1HL711je7tr8zUXnehvWp8id5RzY6ehKoFjDA",
  "key28": "fY7VLMyHtKqHJZazeerfGRT7udngZRpSWYenUCXSnhgeAanyCExo6Tzq4LU1TP7b3X5fwjxKoZ8VZWUadnNyeWs",
  "key29": "46ATMBjwZ614x3NgS8aiGragJYxoi9Bcm8i72wCjeZJtyBCnaKmnd5cX2YsBsb8R7TEuyNvFB4ayd9VDjiJ75oS9",
  "key30": "4PxWPvPbpLgAkKyaFh9ChWprknaKv2eNBkV8A9AxvvGx1rae92eXDWsibnLh9oXMJ4gKvLmmEio3PqmtQBQtELMf",
  "key31": "5D2pGPdSTAjnYg3gaTHuiNcSkdiQU4TLvAmcdmvX2kyEQG5pTSp7frBYKHSg7YYGr1Zk4Gu9kQ3Vz7tvXwJDFaeF"
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
