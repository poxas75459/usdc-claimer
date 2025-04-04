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
    "2r3vo6aHMoQAC1TtiP9D8H5NrEUdLZt6X6bu5r5hpmrga8SXKJx4LPaC6tihTa6DCA6eGapPYXh5KcLxY6jg1Don"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mUGGgeXBX5qawpYGkkrAZYM8oruy3kcXdzGmKpV9EkhPXx7GnhakaExPsu8J7iLZmuizk4SSePyfwkR7b9DcEn",
  "key1": "3njj9QboA3eP3XXXfuDAnEnxAhTYdbexmsMJjCcNrn7gTtzrLW37j1n6qhAWtVzmuhuZsEdG9mAUqomgPQuPNUgG",
  "key2": "4ggDizLh7WCG9Mfg4Qeci3ZvCuDKrxsUATaErKdfaFD5eAb5qQkSxDX5dNqUsNBiqmK4nrCuKEH9EB6ZkCFYec53",
  "key3": "4KseGF6UhMGAe3e1rX6vCTRsrW6G97UH1fHbpNErh6K9Foqhvysti4LDtX6VVAT1nu1M6SXC4TU3ucmbcXvRiVnJ",
  "key4": "3dDuL2NhSEPrjK63suHyMJF7m9Xj4CXQPoAPcidUiBagZAcbg9r5faiKahktRXvuXNurrFLdgegcsbcReJHjprKN",
  "key5": "2zmFgAT2MiiKsacBEwuhZNboTCZcAYJWaGMRAEtj7AjVWeB2kDREF2TCky3EZ8XWKMrXEUxb2x2tUWALw5oSu6ow",
  "key6": "3zBLgNDSBK85zT9voGXkLvadw7Qn66rYjUuEksiuU9dyQ35xycVcgy7ugUeqHyZZhwkeSjAMn1pvbnzkg5r2gRnD",
  "key7": "TvZ1W67WmDtxeY4ZQHAevpEErY4Qyji7RqmNe1MiB3NfCVi9ea5NGL9XrM2EyEcDVkKJvATVoxfUS9nU8XiCNQC",
  "key8": "3GonrHogYDqjqekyhL5pCRtuUzfTdY43w7uReyGCbDyyXTE6Lz4yfAie3wdGEUKtG9R9stJJPC1vVTYn4FdaYcxz",
  "key9": "56R4a5faK26S1SEvDUNBCXVs2a75PPAfNrxaXk4TsJGjFrGqYFmisuKFhMz1ohQjbt2yZG5UyiENNdSZfunrZrhw",
  "key10": "5qcyPum3SQcyueWeKmg828teHEZRDdwktNuaLoCdmeiu93xg1MiYB8xDdirxV1AF5SBvYjAD2osMt3N1P9bqRRnb",
  "key11": "3oGCJUcHvfoZ12nL2swtGdTXCNTNh1bXsevD6jEyv3dZX7tGazD3n7wHUidpb22F1LZQXht9aktKPWuaDiTtZDKR",
  "key12": "36j4tEE3DsYmjQ97PWK7K7CV9EvHTcaYYV2niYemYGG2eCaQfdRAa3sP8AAiZYcuoqyCartYjzoUvCQG28JpK2k7",
  "key13": "59wNfM2XMjrbQpZvEV4iu8aVgZrhPqoRXT4JLN7T2YjwVozzpifop6SjMk6MB1b6rWF7gMZzUbZtgPVMavZJxcsZ",
  "key14": "3uzbjDXHuoAenwP6Dpi2BhBapnNz2XFDyqo9RzdUQCx2m9aW6nUKVBDwnJDsDmrJwyP6UQS7SxVTqEjShRwtvKFs",
  "key15": "3K7BV9chFCEpHZXi94fGHReYCqzYR3e65KfybuX1awLqDy9T1FRMLqxEh7dTKhawtKLoFR9RVWgX16tSWjZhgPHa",
  "key16": "548NqDptTSqMeNDySrHjRjH4pVqHYaJA1xgejMrSkR5baLkGw3FgcLnyKHGVkyAnKCKKicjSngrwMZ6XHcH5UbKH",
  "key17": "mwoDXedANKfUNTJsy86spivifuoe1Mb6cvF9dmdg51zYQfZHjc7F8aae3E9F7aJCpMSPwiJw12TuxZuhBXf2YRH",
  "key18": "2mqiTKMCjdxTQFXKcYmPuHZkkQM1xKDUR6U4UWUZwGnMG1JULZWmXhc37MGxhjbaHRtuj2GZzSupR3rzg1jQMU5o",
  "key19": "28f7AcVUVZtutMACEGVJ8ndHa6k5Rgh1uvLati6CzPPZiZDGgs6nZAvu6qyv4bdBktErUmQz45baJtJvGhg6wWpr",
  "key20": "4X7fbSppHrhRUJ7Sn12HH3jH1vVtpJtdrXSMCD9qTDcPRT2PLdLeXxfuWvEK8kpYxPsAMigc3GfvromgJMWFt9g",
  "key21": "5GA85Zvci3x225xTZ38Wtvm6cuaiTfyAKaSHXFLc4ohXNZc9ZEMNhvhjqmG8FA3CHh8UQaMRCc3FpBCod48ZVfpC",
  "key22": "cZbDgAtqhGQLSbMW3CSj9PazZbHKhijwDbd43Fm6ApYify8YWhFeGb4bTFuX9zr8UL2gvYX91KyTGEnZhYVLycp",
  "key23": "48vZ58ynVEu5yLDSZq6dF4mE7aFGzruGtPGDMo34xv2K2fnoZtbYR6oFjX7N5D3cBiJe2jW9xuU76fG9FdeaJggP",
  "key24": "4hwX6CQVSwnxCwVTjSgVKhCHRSp3vvVBaqen4Hzwv39RpyoA3MjK4Rz2nfQU1xwZeaiomgFv8mmAg9D15V6YfEuH",
  "key25": "3Kw34vh3rekG62ff6pqutw2of5LS2xJEijMkP56AiGyNNZCvj68csSNpUTG5beH29nEvJ519ej9UQmgqcKJfGzYA",
  "key26": "2nfJJeJsU2E9HjqH9cuy4wmPi33stniNABYdWwR5ZnWUQqsw6eLQydtCFmeUdGnUA6zeRqSv3DKD7rbGi5ZxJF2g",
  "key27": "3Zadba72kbE9JGLTzxcbDfLj4PUtPNamwdp7kRmpLhGLiq49f3FowzjHbHTDzSDfUS4yk4UZTXk52yKCEyYXGPi3",
  "key28": "5XCpyqYpPHZZ18i1v9W5n3KmPiC8SAgRN32TMBZUdjvzNys1cWgF93nAYAHEZejP1AgUnvQqf23QeqTWuUwhL3uL",
  "key29": "4Mx2mU96ZaNUtaGKoLeynGKRBTkQmQxbV5Z8kPUxCdFtG47hGwC7EDgsExT2DBYMzkxnkvwPMpdpTcnSaHWW4Ait",
  "key30": "EZXukh3HkQS7nffnvMfWDgg1RhhUPznVSF7htS3QZLcTQtRVLHicDt8zq3VQ4cufDSmBaehisUhJTJXyUwmmC5t"
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
