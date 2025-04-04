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
    "8JwUNMsZXixzm7FNKcgbXihCCHisjAVhwxA3eD1cTA45qm4aHEy15J3FuE2MnUuiaC6HxE5Ev65jFXCLXS6xLcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zo4kkyuVsXG8dqMXTHjw4JGbR6wozAvWkfKqSyDSkvAGjyL6TrPrbpZQivSxECDtBpjzewYP3ov9niQANahFVYJ",
  "key1": "544zGjLqRrBmAYhPo6q9TKdjj2JqHJzfvDet43fTwZJXAcZJxisQr7xoCQSRmUajToLDsBXSSLE6tHVrA15VdRK6",
  "key2": "2pmDqJgqurKRxL8eLZq6CUuJHhokWRTEv1BY2h97W8ccxwJBC5sSXMSFZArGJw487VatGWRtemM3wQu3UwsFSmvs",
  "key3": "5yCYwoX9p8vMQbL8Ag45oCns6VXFMcjHUU5qegzmuyf597Qbna8N5jWzALxX5mRNk9iDPC83Pi1WEFCfgfvGjqQV",
  "key4": "4d71UjpSxjiK7DNffAHGnKUf3kvhxY8X4CcYsSV5HVi15C1UQFe93sVLAjGJA6yMrDKEYdu76RLA13cXw4Q1hsQG",
  "key5": "u29EYaFr7HeCLpkVAxhDXvragFMbDLh5Q5rqnB4RHEewUJdi3THPz2vFPLXC1imZJmtZFYRiYRErRXBpvSxbSd6",
  "key6": "2oQef4Dx64wAt5SYKsPcqWqFZPLaohGSdNNe89x9c6zqbyd4hVwKsTfmosYBQhXw1B2iDEeZ7EP6MVkHJBate23J",
  "key7": "2rhijwbU85E2964tKShYe8NLufy6K9AVtCMxpeRzGdiqPuiDCSAxh4aBsAuShcXNSucHA33pHSbKU8s3uBSfsUey",
  "key8": "1jUEE18avtUUqxz22KyrBiUHwbRpxii94J36UjEEBZqKY7wjiwhtSWrYUDtgxiCCpKswp9SECcqWhrhoc3VT2xi",
  "key9": "AxYhfjzRvnhw3Tszs7CHHPbE2dfjn9Kx2wpCrdjmWaQ4btLtq9y5y8nhTBe7JrMsZkpn6AWVorj5vH5UY3aHmV4",
  "key10": "LJWzYprdjAoygBqGA9VVkVex1yeYL2LvEGRUbtYZaXuooPDSqV1fnNy3SrQJ3A4Tczk8x1N1hA4qKbACe3HmMT5",
  "key11": "xCAYbKZwZcvpPPEFyxBAdyzAPzxzjWqavecagCy9MpYkNyNraTrGvB3QjRDBGK9hsGYNssvWQNfntUUkuJS91j3",
  "key12": "3sgp9g5FfNnenHCiRbywqiF3HFrHJoV3xb2GWBpPWtuJNNW9yYTHGNtyutpmrovJHWmVj5QpfN6EPqJ23koQpQTj",
  "key13": "4v9gpPGMtS62bZ151e3bvtkR6qcZgnYMEfQzXs77azLEZjGUM5tSrY2Tv1ixg3nZxWFduqkyvpGoQgDwGJMYiJYP",
  "key14": "3kLD9NimKuQViWf3suhWwyzaHRJ1RzL1T2AE8e5C73ubUJNCMitMnjxaX9dPk6Dg3HDcfesPuKJu2wQUgWBhqeWi",
  "key15": "2JjmaLQXLtq2scKwNm4s6CSDw3XCQQzmp2ATz5FJi4Q4P1EC8jzsjeUaesQh1zA9nN91cav6LDV2vQQE5rEXZzZJ",
  "key16": "2pSUxPkprLpyA3g1goy9mf7t4W3J5VfC5LDwDQUpm7MV8izqQ1C6u2VUVYKY5i7MxDnns8vA2g9KfEPJvrwBMv33",
  "key17": "4Qti5AaDrVLr4vgSXmeABn53CQtYrp2LNMVqHLjJM65DpRcZBvps17tD86o3o5xN4zf1YqtVC4osB4pz5XjSimgK",
  "key18": "2nFBA57W2QwM3PyJ8UCfcUWYLj34yG8r3geBbMaVKoWo6bewtaccbZr59azyamywZKkki8eWxzJGt7hHiBxduC1j",
  "key19": "2ZnzvdkRScLeeDfdaguV1NcECyGBCHxqCJiiWb5mwA8SwMmCiPzfSg59zaZKK12aMgiazDQqUmEUKNTt9x9fWFyN",
  "key20": "345H8Kcbtsb5GLYhXD7YjwWUPkffuZ8YiAuZMrrHHUd3CTwufjtinvByUoFBJZFNvAXerVP8pcUFPVUtqQtY6hxM",
  "key21": "xbXRxx2Wr1LKMUPLjCkWb2xo9bq5qcM9BoJQeVybnhQKSmaEZgC985QJGcSxQP2fEVDSiz4zTowVS7oAMDy8K4h",
  "key22": "4AuFajWqwaFPdKCH2H7EdwfjFMd5e8z1RDuKrr1dosmT5iTuowooNhbhC4BtbSxNrZxam9WxPJyc1AHPRjdbktMy",
  "key23": "2D8aHmxeCVbqnTCd3u17VJSeCsquTzNfBdc3T2zRMdAkRVHED7L5hHJUEZaABZWX8v2uaeKEsL53aWEBwNjmJ2zP",
  "key24": "mfC8HDLFn2GFBA2XGzHteFcYyUy7ohYBFw6tRN3iR5rqy2FRcFvTi6w9Nt9VooHxgtjcPjFoiJB7wEVW5Aft9Ga"
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
