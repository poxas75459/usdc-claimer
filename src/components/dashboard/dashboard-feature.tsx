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
    "KU4ieqsQ9uK6C8rv17PsAwqkNFy1kacZRiaEGscTvhpn77mhSdaHMLC2i2QnWKENdvVwcdVantgPjXEa7dMvuv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYCJYbd2QzYdJ52sdsVwtT74cg43CrrtXg3txqbXH7tHLuefbYdb6SP61M6aFkV7Ft4VFC2uVCVB8qDeM4jGouJ",
  "key1": "TSkx6VjfTc3HA2LRpjG8A5UEbLD3dsRB21BPN4bWNhiTYHeM7fd7aNTtyxemeCWRW6pF6rAiRcR2nyFf7G4hsCC",
  "key2": "35pRjh7tejFwn3xUgECWRP7NdazEdvxvVFqKEs2QQv7srkFYWmRZHhvZ44aSW3JPorr8qrE6Vjtsr6SDxnuRpSzB",
  "key3": "b1JSEJjh6Shcj7vmjasEnDJ1EnVeqwbWEijYYjq5ZaHcksyoBw7moJsfzwSQqVvnNdJwq6NY2HyHS2KpXHUB53p",
  "key4": "5QpLVYr4HBfunS2QrXU8iwPhhNCY6kM3SQqRzVoQxPtEan6MMXuZPejgnMeNFK2E4WLTvHSSrUzNdTLbr2nLmgve",
  "key5": "15zVJKQfVjvRCnG5n3kCSYoJfcWfiqz6suhbYGcVG4GsP1hStDzvvcg8749zHhmqBd8pvnCZT637ozhESrhQHKr",
  "key6": "3tg6j4dgEqaVLxm5vaf5R6sC8onaevdeHULzX7G7pHuZ9HtErbp2c3NWQtMcg9Z3zxLQux5LdxXMaciznuhRbWDX",
  "key7": "53Dxbrvpt4u8xQbZ4geFtpSU12gUUmbDJZAQ5GXG6uAfHSmLSrTtiu7q6fgz3Gewi15dXEbXySR8tLRcCMQA7Hg5",
  "key8": "2YAXpEejNXaxK8MTVygDjeMupc4ovNZwEFH3Qd1p97Nqj23oMiMT35udGBYQMP5WyhzLRmYxfaQLCWhH9xubgEdz",
  "key9": "48gNHR3PySerW3HwHBPBk15hserkA4qKJXAbpWDJfjBqycypaAPWLQ4Zh2UxddFyx221hJYQkYVDWR2fwvcNAKgF",
  "key10": "5DtUrmx5ftznXZEbt7i5RYF5oNorNR3heJu71MdvUrGyDq3MQD2bGcYfaVRyoxUG1JRGweiVAqDLhKQimTzABkcm",
  "key11": "ZjKLLPEA3JDRk8nWcHZ31qQtE4kbioRDLKYtwrmNBdUVPCgb73EnNdcyRdPbfBmQLXMEsiXhhd6QMLcxvGY962L",
  "key12": "5h381JuDi4whAuDuSXw8MmWgqAzKpqspMiyaxqGGqkMaGeNw7GrMUUGrJg1EsdGYV362Rfmi9NUAQuzcrKLvWQSY",
  "key13": "4GKda4dz8eT7K1FnBoZDU2q1Y939JDqkozzRqHyMGTFnuxMQ6dTb22kCJiugfC1nn77EBF8nMzt5UhsURwqZECDQ",
  "key14": "beZcAxSLCUtKzUo2BKjUdVXuxGCivxT2DdHfELbre9X4Bf1RmyqNEVGDARvX4cZ8kNjFSAhX318YJUiFsMwFNXc",
  "key15": "8xMx3Ku1argmAxyLcKRYLbBDvzUZk6Jq5yHe7zuhKGFHezb2oD4mmwSPDyQ1MQTspbBCmd5hUptLrsuoz42hVWa",
  "key16": "H5ugazh7rz8UgzNo9ynts5W9yc2KvsFuc5gKjCGFDdjiq357XrZcpJUjKRke56mQZZfcoDpgFYrDyZT7tmhA5qG",
  "key17": "xssR6zZ6N944cRKqK8bPsZiqgeHsrPHzHmbFEWMz9Sy461yWfgVW5kgXLTemsEe7KVrnfimyfL5d2Hc8nbvcmHL",
  "key18": "L45iohZosAGTmvSaujrBMLUwhseQeGsgB1UrWq2HgdurB6PTu6jnniqQVLta26DzZyBzoxq4HiCTKFmRDR4VU1B",
  "key19": "Qb3xH6hyBuFRs4bfeunUpDKCvCVppB4ApqZtZKiFMJMD5fYyUpFBnR9YpUR5NChJGpNf9rRuX79YNZkBvYaG6H5",
  "key20": "2m7nawGXvPcbNPyN1uq2RWtqNd9AHMAiGnnCCHPvxbwMxcQp2is3BLx5k3c3w3WPiRgzzhZzymbVuf3LuoegwDvM",
  "key21": "rAM4VdM6LapM13JeZH1xmAJZ3s4igcxU1j96FiHgiQY7h6tZSp6MKUKJi6tg6hV3VsqDW7WC8mEgMW1kMkYNtJv",
  "key22": "25czwGJcDo1LfbPgJQ61Poa2bDCyFQLT6X4GFY8GKedt5o5SVCV7XoVKDWxSMhfz8z3TzcByUv2mPuNf3aDCVow5",
  "key23": "2hXxgbMdvycEz2YxP2NVCeR95R1tzuWmtgNbSC4cTdVMN64L3Uq7mY9ANBGyP6iKgkb2rJjHAQge3yxfyweuTFHp",
  "key24": "3MxXFwtuPicc5oDAFKPTCbZsEimyKphghcUVMjru7ScP8d5mSVJYUSbtizkrueMX4yM3sRVP8cPuieVZRp9Bv5PL",
  "key25": "2jD3hTcKSBwthnHzDpuyNYsY9Tt7WnrLyyzctq5GmykgtL12Khbz4b2uxYfAViQB5EibY53fnkFF6iSJthYdR5rS",
  "key26": "czE4HhgkSaxziek7cQwCgHgafdeUXnLux7LMtarzChyxNgFHL5TWFf71Lg5WhEKYVR5tHUY7CihrUpuU5BjXmc1",
  "key27": "42GHF4coo7HAv7NZc2Bb8FxD5unu9bXqDBMc5WfRHnrBFfGipZVW9D5DAFqmrMBm7bPrmcv3ofWhL6YKKy7PXx24",
  "key28": "567EyCh3fiV1thbuZgRRrpkbjPtz6v28wvZedgYfNYViKsTZVnbuebDnoFcBguP2GExJgJxjurV9ReFEBkTc9Tr9",
  "key29": "51snPUUihr2V918pzk8KqfiWPZKmGXvtmuZ3yxfJvC7DbMEiQZSi8MV9bdGo2cQHgK32uBcMt2EM1tfFmK4LowKb",
  "key30": "d1kKjbWXFfLfCb6hpQVgRzWBMn5vLXzmCgBzeJnUH9qok3v59SUjPKos6bNgqc79eCt2aCG4VZj29W5kbBS3ezq"
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
