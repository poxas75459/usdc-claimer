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
    "44wFRa3rqzaUL5U1D6dfpyfpAwuFqxuUCy5wvCQPWgYS4xJ6kjArzmn1e41BRySbRtbR3WnWwikqx1diqLk8XyYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z16dcy1NRHQq5CRQ5EsDGPDwXkpEbqZKUtzkuR3Vb3um69usaeTgbq6YDFnNZpmBeSL7p4Rkhneapqi7vMvYGJM",
  "key1": "27sECYDk3mXkBGMwoEHU7PwL1JsThtbRxCTKRxgNsTSMWFrgGe6yL6GW3z14LXcaHjAWpdP3c4ea8Raby3KvWz4K",
  "key2": "5wSZT2nEbdFVYGUH1azZJqnEYPZQHDq7Gd4qFvy5XhRy8sxg9yX1CTGVCUyBXt1acA2vjQPcgsGxry41CKZzXDDV",
  "key3": "2s1SoTXd38ce2wG8Nv219CAYhot7nLcyrUJEBbMaTuEbxGLk1hbd2fBHuaCvbrCBN8ETaCgDdHrp4PZdmbGZv9iM",
  "key4": "23w3QFYDhcwuJbjsQgESKL8RhpPyFuhYGECMwenXCaagWb2iTtZH6JJubF7Naiag7KVN5Mx6N198FgTojq3qe4fD",
  "key5": "537PLUZm6ojTGRLwhEqfk2oMnVfLKaPrB6RjApJmmw6XkCXTpMuwgbtD7TzUgDR1Vd15SmscDNJuCoFFJezBha3E",
  "key6": "X8siwhpBoCTEri6ESrh4CeHonzmSDbygC84uiK2oYeZN1TtFQ6qJCx8Bgs1YT7TuUqRPENMgdxfTrpvTQ7H6VG4",
  "key7": "3qb7qi7iMSpr438DSFeJWFPqGjJCX1HjSm5qSZ1SYowshXvtDD8Cygu8fzJW2LBQggfSJyrZvkVjwh2tsmCu48xh",
  "key8": "5sneWCTjJa66uMS3CRnUW7RP9CkM639TDcTGP1n76j4DYcovUhteE4HiBdUD6Hv41XEw1hvkDLp3UMepV1UkxTgk",
  "key9": "3TE2qDNWLax7StPHqoD3NqGdkCn8fooWbxP1tJvHbCfNevXGZnRoT3AtMWToxuw1qkt3jjajnXSf2StNPN1fgUxd",
  "key10": "5BbDvkFgYjHZc3VywGhgwEhSeY9PpVzJiUAMzqRbNs8gByQywU4yCMA9wpoPFUNBbguivEe4aCjrJ1bUAYR7TaXw",
  "key11": "4uEWSGu3A4GkdZjR8hnwmvSfbofUDX1oZEUkMqA27Fs1D9uaWPEqeS26mXdTJdsqKmMMEFU4VX5iB6yRKwHXxoQW",
  "key12": "28SYcb8v7TBErJvfewydeVuHEd8nAoRMgNCaNobDLj536XE1Pd1jd6geEzLVW94uDe2J97RW313iBU2QWxBgZaeX",
  "key13": "3vJgJXTLvoNHqqtF2PaJs3ADejkTBCyPvFFnEtJEGb2QsukzCvUMg3QNxCcU7fRMJXCDpm3hy268ojHZeL6kjShM",
  "key14": "qSBWTScbuz98gnf37AQ6kKwSAo4khhDXTQkorHnM2knWGoU4zGqYrBu6SmaFzPJBGMq72pVAkUMx5uGvHfYCr82",
  "key15": "3wWwtFWaammXX1LDrrcyMnKnSU7xVNPD32Sv59gz4wKdpuU3yzmnrQmLwoF9sS75kirp8YAcec5aYX49gmSaeCrT",
  "key16": "2diganQY3JBZibsopscSJ97EA9D2MfxH3GqPqnwwyqmip4ruXM6f5k6bpCK42KVZbKTkaF8cWHSWpGcaqf4SELw3",
  "key17": "67iiN4Qt1i3hMqbLfkHDx6CkuTUX21MvXXesKhKiFnaJ2gP6FTHrzUJ5WwWyKtQBKsTcQgmRrFbNFVWDpaDBPTCZ",
  "key18": "rBeEYq45x7MdV4Fi6u9tR9pYEarirY6Cwgsvx5uYWPGCBqsqFXjrdAP2B1hSzjRxwneXRL4z6vo3T3ELjWxcHYr",
  "key19": "2EmNvqdVwPjEDaPtwjzaeKuDThrJqHghXinhbTpfcRzCZ41Va9MkNCojy4aTWDSSTKrHTtu2soGdwz847DbYAXeH",
  "key20": "5F2HaXjnG9Ghw5f8PgvEuC4Z7DqpmdxTfthXjhpSdsXa85rj8HxPLLtH7QVwaFyNCZmNUaowSk8Pdf5jALCo1sad",
  "key21": "568SwkZgSK3t19CqxnKexaybR3UGBisBQLVxwKJDs1HhZagjwN1ferRo2aXaQ4D3yjeFSUrAWSr3LNWSmh4TEsMY",
  "key22": "673YrksgEWgCQgdHyNfwnyV47MZZLfzYqvqmDSdVLof7K5aLfUTKB1KNhooVYCxvwszh7DEKFHjHKFRqHAH4g87b",
  "key23": "QumEhoUPfmmk6hrUf6PUdcTz2QibfRE6AfHYBp58tBzPFy6N1sCahfAx8LYCE8yy3C7EkpZBkETWPbfmYSXfLki",
  "key24": "5JkX9smfsXKd1Z8kUA88GGm2jP38t87ii7LJtf4rCXDww9F5ppVQeAtj7YqEe5CAG5CHwnecdd6u2c8vj2nVRZt1",
  "key25": "5fDRZUiKVk8ZWt9ETXLd2SicceXsCUBgr1M1NrSWK2oQccjJxKFwbsh6VmeC1AxnK6cfVAm4ezKLmQwukoRWvunm",
  "key26": "m88KBp37jKqRNRMVE6FwtW7kf9NH1wir6irF8uW5nLf8S8eV9PVubneZ3vg9XTgYmkDtzAf8Poz3D4ZnVXEXm3c",
  "key27": "3LLDK41Hpd5Q4JuSVJ72rpi3MZCdSRDv6nX6zV8rW6gizzb8mHNbLSoKWJDRQLaUxTvkwbzuqfm4F6gByqTXEFxW",
  "key28": "2CL44q4gVQYNw5gprNyDYkxXvbMJyFKbSrfxNEMpfWiYkmtzVhbDEUeGk3wQotqqfGN4hPtv6jSEZPxpNrgHMAhk",
  "key29": "2D4vVt4ZVXRHcMWDV23yJ2bm5yWFiSaPooSXTNENVySghgPizRBuCSQBfr2gBkgz18ttcEosd1Bf5FstCHk7bx6w"
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
