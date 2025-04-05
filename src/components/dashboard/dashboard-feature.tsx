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
    "5n9MmjqChZKEdgTx4CaxRATa38PKKw44kgSKxsLc9VhhLA33r3KeUgwXZGgF54fmFV9qFA3RV5fXNCJ7PaESPvU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrEzxU6HPpkjBQgRGXoTLD4KpdchLk9tw4ZuNR8tKxZ2XDaEbyZ1FSa9kK8zwFe1qQyFoKHcSza83QxChcm1bQB",
  "key1": "53ekgfn7rV43MYiL6meZs6igBd1V3yF3ejefW7XphULLvGifYxvax11QpGj6Z68c3S6zPL7w2YzAV7TYpCbiMhpi",
  "key2": "2VaAsyvvcvuzK25aRpLh3kpVXPHauhVzbd1Nrg8zHx3joRkizLic34CgG2cgkHPtTiBw5ijutW8fGqJKExb4ubfH",
  "key3": "nPsnpxyYKgEgrveBKirGSaXkdmMDdcGcTiGfL8XdMJ7gzQJDcucyTdNaQ84tmR4S4xw2yAhAMMcxBahgcBUCq4U",
  "key4": "5GLaTfWBJBTqV1JJ2Z7zx8dA6zm2Zr6HerDFeJa7H9Qcdxv3ZscHdCNYZ5XYxvpySYq7r54jk6x5Pzp8kDGBcZh",
  "key5": "3XMdJ26RxR6rz4bBAi15PnkYR9HZ9HCCkqBWJfgpdw9HFAGdss3n8muGHEDyzH5fK8iTriCm6KyBzEvN3BRRsRyC",
  "key6": "4rgLbXY8UDJkcR77LaanabTs14ugrVpWMCv2QFxwwCokmo2Y6nvpLRHSshfnhD1LksStMxSkfbtfVgZcas4Zbdi3",
  "key7": "3VgDK8b7xr1vHugbx9w4MqJjmSKVU5Q32BwPgYGQVAkhkrJww41m6nhB17i7sKDf7mQmK39YSERYBhroHnP3ooYx",
  "key8": "2nawswhmUUYS7obVz8VGNr7uWudV4kJKPh1WbTGChyiDqbKVTKGXULS11RjsoL3yfKRyDEjfBuNcmBDop2yEpFog",
  "key9": "4qzuWAfyJG6Ttjs55RfRQtGPyTqo2Vg2oMBioP3YPDSD5bdjzFeeb3XXBUF7Dpijz6payEbM2zwCqaQdu1x3TXXy",
  "key10": "5NaZGcHknhNfYBirQkLF7B2hTJo2s2ayngW7dGWNUTnx4kFJGnfxRg4HthWpmsVYdPy7FKjKRdqHDJfZ2XgAFoPD",
  "key11": "3yf5tChx2gFu7BJmBV2X5HouECNJqCiJjT25HdknhFmjoMxvR4Vzw5pfyYmZTfKEqY5SoQ68kP2M3cAxU4RvosNz",
  "key12": "3SKgLvyVegdFchjhXJHfh1AxNy6tLvMy7XMhKND8RM5iqdzBAEH5DSuDRdKFKj3UAThcdSvzBejQkNEJ7s4v5nBL",
  "key13": "3dRGnYP8p8SGz7je1RwMtavkiyfBD95iMDdqZVVGqTCzFpgLCDH7cVWYTkTxVGh3WjGj9NtFaSj9Pn5VkeJHRX2E",
  "key14": "3nCFvJ8B1yvYwcuLeuuQrsM9JbdoHoPqGf6vqzDixaqbvri7eHThkL9hcRKpVAKmz2UHq3Rw9AH9jsGbkMmzPVcN",
  "key15": "2vryDtL8mAqW1xaoPJzFY9rkQQinABLhbjQDb8vxN7C2th3bLxr7cGoCzd4b2sE6qTPNH7mZkjudw4FpMxgzuejn",
  "key16": "5q25nRZWfuoLGRixzjzDkaHi354BAmmtWH3dQBpmrSkdN3hVLYXx75XtWg9Nds2Az4gRCC5wfsKVzgpJgyDo1nvX",
  "key17": "57HfKbVYii22wVvYXwUPQ3RFMJHzfaz92ZcyGewdf4onUog7urLYR7BLFyXRHNXGdq1DhfeQKzqqcejPfz1XPanw",
  "key18": "2yBsEQhCm1CgaHRHkUxQSukjbhQMiYH7jo51SRuBtT4Hw4yv2CEkhAYMVTUT6uPKxh2kprY8BzaxViRkUutyovbf",
  "key19": "48C67eAeA6sHK25Ph3Vxhfc49RRZuTx47ZEqt1JLtd3duzxzarUdwGeUr8L4YAo2KxkKfdigQdKq3y7546bf9feB",
  "key20": "2SCjqjVo8bQARx53ue7PE5YjL6NXK3KzdnF9YcLvy2n6ajQQKhwvhnWjEiJ2gjqbUpH1SoKFrsqRcyrCaW3yHyRy",
  "key21": "32AFNfffRR7TTypbvGvT7eu3dn8WjwRMj3orW2cqXKHGHgWjBDMkNTjFfnwSQJMBBcrhMAMfzT6pySJ8gqWqqxZt",
  "key22": "5cVSctng941uzeJ4YiVaLJJTVcssjiT6yiuqojtCvSBYT73JgLvWu1Rwus2ZcnbixqbG754uchFcDx2Cf5hEyw8Y",
  "key23": "5NcUj6tfsRhcSReTFpyXmQyLsZkGDSC6esuDVfs69BWY64DNLkAK31NbBFcoWEbRevpL3Yc6RnA8uX7Nzw6uFjUu",
  "key24": "3n49m6ci8eHBmGD3p28cZ5P4aCuMf8L1jLNNrtubPz5YbM8S1sgV3EPsC41fbT8JWcmH8jKGzXjC8Zd1p3849Azg",
  "key25": "5X1xq8Niwnf6zJXrcdyYCqVMutNvYZYbbqjVbXTenaL7zMvEhPnBBBAJmWH4v1RrRr8hHc8y7fiBWHquVFRTXQcG",
  "key26": "2DU6XphJeciJuwYH9JL69FKgC6F8Ps4hsarEsami1VLgnMpQXAfvSsBDPA96LBFyZC5Q6wdf72nKN8ZHVQZSGG18",
  "key27": "UKPTeWnq1aSYYjBtQ949acL1uXAvL6GJ4WZnVttcrGperRfmW4QGhQatF71XiCvso3ZtLAjLhaDJkH1F11iWE1C",
  "key28": "2aMpxThUuk5CJbL3TtW9UwQUaZs82CJnSD9VEqoe1TqUdH2k6hz41q5aWCAQgay43xCrxWywtrZ3ueoGHyna7iW1",
  "key29": "3adpyX1wi1GT4LJAwenYY29m6kwdV5bdBDELGmnRqEpYYVAb81tPJo3xb1umy1xohTb5wb5z6H7yTvb28gEWyHUX",
  "key30": "4iXCRHtTzfsu3JcJPymeYzvdhNbw8P5qve14KsHrWYtQressvm9q3EXSjd4vKs9CkJeCwwtCuvtSUVF5HkjqSNMv",
  "key31": "5D5Gaeage4DVjjW1qoyvJRmPR9aYdpavJ1Ti16RG1goMkWFVvig5b94mWTA497iFsDtM2x5npWe2Hr3SqhDhNURa"
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
