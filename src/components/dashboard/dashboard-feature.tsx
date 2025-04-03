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
    "56w8cJKm6GrUBxEDMx2adVw25HNRkWTFZxrgx1uqiJcKypNVJ7ptgNHERvY6zG3C7xkk5Wdo8diim9sf9Cavr9ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVarqciug1YHZ7xns7YU3siT2vYnSLi5XHqKgMvZnntkZ1LqrWw93zQfh9SCHe8nGst5buA2Te7rfT6Fb8wsYCM",
  "key1": "2b4eFftREKvtAdkh4b3pKgLwDQwBUd16wpdp8VG99CKRTaeX3HAPtddniVxknb1zoHTbQnfrfZs26FhZctxXz1kV",
  "key2": "2MDbQ2oA3DnzodaiNYzFngpjBeAQqQcH7dk52giShKhV6QQFYsEbvwXyVinLLPrgocWTih8dbq2mWv17TcjmA7mr",
  "key3": "49R9Wniapbz8Uvw2sVQWnEaS9au2xy2otR82uA9ryaztc5xHEzRkTrCp7dVgC4m3byL5PdSZ96Ankt3v2KYnRKuN",
  "key4": "7dDrM1HaW1v38oscGFNvTrmAqpswJVRxRZZWLXRoryuvbQ3GkvajSYnfh1Gh2BHiskxCmVdEHn2Ap55SdrKdJjU",
  "key5": "3gJryNrKJziFDjAVmDXoVapyNM3srKBkmZpGnK9kaJjY1UsyWAVh13JdEWvyPwPTsjpYcdzPD9bZxzGBXx79bQWJ",
  "key6": "2MTZinjkBTQP2PdfgH13sNZQMBkSJAx7UGFBBUTNqwucXMY44DKCjyAujh8UyUGkChvRTk9BKndDf4Gmf85efTkd",
  "key7": "5BBzFFW9A35oHUTETPjhx6mNqtnGPbxdRpVYBHQ6A924FngaAV7VQKLFHhCkFz6keEwyd1qHnxzsfjzQJZMxugmD",
  "key8": "5GUmM6YZdyjD4HRxLAGv42pwBBCT8zktV2qjfSsM6jt9tx47BeGqbWj2zidt3SkDfTN69UcGyKrZyag4448v9BnD",
  "key9": "3naVB6L2pkTTX6n4Jr4fJfcTXADUQK7Kw4pukkQoMSRPM9y4o2vbaHtMUKjSWdZToDwwAoqHGaoJCnGqwvfhBBEg",
  "key10": "3547tpgqHWVZRK1EPHbViT95U2JBNJhQnKXmX89nw4eDe91vmtM5REC6f1nbzDdCqixmTdy7oZCPzifsmhjctAa9",
  "key11": "2KnHewkbb2KBTibMSJm1cDTSHWWj2vMikvYcKc8QaqRQvBKYwUcqq2onstG2GYrRgZezuG6WtzC3BvFXB9C5fVdi",
  "key12": "boWS3iJBdM8igfknQojaVyjd76qL7F6jvNLBPMuc1YM9cj6YGSxfJNkurCvU6nqJsKst5o1gbZABzpKiiu9iKRN",
  "key13": "yMKDKr53iwBBBcKT5uEvhmHrgTyr92Z4oxM9Zf4VXn63sXV3Z3pz9GwFUjt8ZJyPz6uqXDSQGciomyxi7uCgVxc",
  "key14": "SMt99QZnaxoYFPaSZhs3ebp9LoBud8T6efwirT1zSapzrsUfgU1SCskeqVKn1i5pMcUcBLvWgLgHLVfC3sU3zjt",
  "key15": "3SbhkvZi2nGmbfARpis5msDtyp3dbsoqFwMyNhtrXeWmvJk435DTWpb8uLUYqBbFHxPYyRmHfg48myyhKbnagdWx",
  "key16": "4Hw2aVL6RfidncEyLy4otfEf4a7mipAWj46KJQZSVJE82tekxkFTSdotLZjQeyv5XDMK6JASvCtRGgyLfUgmiCs2",
  "key17": "h9h3KKXsLmFh3BdL6ha8cLoZWLNgEXLoEgeeiatDyeZMzk5AHTGz428QkNR8FUM8MkDNZpWfmTBHqk1RTi7arGy",
  "key18": "5MnFx61zx4MFWExdaGNQFpDFTvrWXdTYdLvFtAQYtCZCHkTmZmJCq8tUYbMfQyAVX2VMRf73nSYbAKQKAohZHh56",
  "key19": "2V5cGsjxQBWz5CxeXmYtAzg41fWeGWTTPHjXpgxsHv432c2jha1vLErCc2VwPTNufDMntyWurWu42y5sE5VKdCUS",
  "key20": "pP24kvXAfooUBp8dTduPkGo2YtYCfixfhxu8PmPkzuXN38Ex3nwiYq8c3AtSxAZviAZSyLosLyAjtJbnAMBnuZ8",
  "key21": "gaBZo13ckG4Fd6vfxc6iHnLwgWmzXcK2omCd7A75McexWfEx6Ke1BZV3J6VNajmGY6UWNwVi1CMurzAFNKSeqP7",
  "key22": "3bgaMqjLxVYESDT5jq6EG5ZUF4AYKx9utu1Be6Mt2UdGKJzTpQTiVpsok5gPgMdN43piSK8qUavVud2UjKprhXg7",
  "key23": "48FU9zfD8QzUDHZswLL6iaNKGLyTd5kYsDn1VYZo7NpxKmcfmzHYsRyTLfzxvEHSiumhReKLgETYWcWN5qyHf7gc",
  "key24": "YyVgozaybh8ZHaYETZRCD8yjdQCqqft8WjnZJuUDydSQzHXX2vpyBbFueGfdBNwRfuyot4GuBsMGh8utBS8ViUu",
  "key25": "3ZpaS382qHPZQ4ArZoqEUGVPihSSzfCwWtKpLppGARQCDPbtsBJZpreuw4gRd77CwNDqPtZTr8nrcJk2joKD8sSe",
  "key26": "86rTKseUMfRXyBWPZ7Hr5jcQC3a97GKa7284qyWVmNHhU36k7Cq68NADxoYGCpzH1gqGQcBXC89iQ8RLn7puNrG",
  "key27": "4EVCDKhYnTNLuohPWUCbpmF4j77TCNd5hzMfgMiXjiV57uDG3miDwWboRSJ8d5jzXA7ffadhZVghEZqvpiZbZN9q",
  "key28": "u2WgSp9cR1cCsgayxj7p7wjBdz6deLBxwvmLQk2XRSom2aDwX9fxEszUmU3GFDVoz7gKFas58VbdVEbzWTdPfhd",
  "key29": "3yVSmosHy3WFzQpdhGRM2H6gn4C8CBX2MHYhSv5eP9cjdibM7mmTraJ278NpGJzqHWfrbWnEze6jEBpBeF2tErPK",
  "key30": "3XvaF2rdoAuQCYiHUiwcEMrpvaRbjPU2fjsbdF4uNbQ6tjT996bdU1e3vDrpQLNSMoHDep5rB1EuwRooxxwHvKv2",
  "key31": "3uieAZqcKivHKTrJ5C4ppKJY67U5PEabLQXYRcMdaueuJG4GcqmwCHv5FXphQ6nwZF31gGtMs1d6sqqV7U1d4Et4"
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
