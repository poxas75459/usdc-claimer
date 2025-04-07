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
    "5ZoVMVd8XNtfyBX1uem9it72TLWjVZRVmeugMsRRmqPU9XdmjuDCC3C7pHnAXqWzD3QirNqwjX41o52YWLf5Gdz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNgaWpESRRmCNLuCkvThi3V3LFttSpqzDkJ9moSQw9JHpxkL8o1vGtPBPmRSyMXq6rBxdBjLWR87f7NUKxKk17s",
  "key1": "23onpiEqWCZJV7RBo4Cv3iNmvx1TfZK9nQk6bt5TiH73FjrptQw5aGPb8z9wZxkDYCLbXJsehhC37TGyXSXXP8GV",
  "key2": "Ji8sZCejoj5s98Hcrd1RuMycPPenUJaiTjewY9bNC8uemkjoMnc8VZpied7jKG9ocsK1qtpdhfMrPBerYEk2qC6",
  "key3": "3HuCVwexRfrwtSTrgiXtv9r9QvqvSwTa1jgrttECXZTHSBfmX2ACLyWb3QsxfR56NXVcdWuGEvGEgxbGYCM8QbdT",
  "key4": "587VEGxTvbx52o5s4Q9SSCo7vgckMMFRDdp5ndpnowUVKPCzz87Ui8fftj9QQ9koRSvZNGvjbxhgPGbYHKg4jZ2A",
  "key5": "29PctkERdHGvFzUtYYMSbHLw2vv1iVaNeWBzHK57BXxfCANj7F3YKBAXqLDBiCUMEkrPJTkt6orsukMCnxPPxEvJ",
  "key6": "4ZBXqfmarpE1oGnGTYXGfQtsuoBH2fvVGvdVKF2SpvoHCLb3QFJnHtTFaDUGR4fqJQpaW5hg3FGbgY3tPHwvtA93",
  "key7": "3SMzDuhsz8JkSwqQpMMYXyid4zEiRN41t1sJKia8DqFaiqBL7V3yEKS4bMgcLbDNmfkmnEgiHmYPM3dr1cZfVjY4",
  "key8": "2JFCxh6d6CLDXCfWsaJRPpP3v7HRLghXoRmLhrYjrrX7BeMEhu2MENqtVcyjRBV2QZ5mKnnoSYyy7okaByPhxri3",
  "key9": "4GTvdKBKyEoV7JjcdbZr3fG2RcZEifGK2Tv2ETaVq4WctYUFxiaGTGEQnLpozMwWgqGpWnWU9J2xhqvJDVtZQQK2",
  "key10": "3jyw3b3BK7MothbEsWCr7YA25u1NYnRyuxhspk6TEfNH4tSaBzdwFfP89d2kHnodLKndWPJAJAho7UCfuSLWfwPx",
  "key11": "4NHWR8NCXYhcesnQ2B8e4vp7kRwzFXAYYjfSyfaxuCGy7sUcB7AhhzL73FxgdhCgjQn4MukatA7vyDzkhW5Byiyj",
  "key12": "562m71KjeuFUK2mjRSdxiRaDsMvUd2ATWgiVjuWBCKkZKBN2hHMVUjmTN43xktboWDWZHJG39Q9wf2YPJE2wftMy",
  "key13": "5BTLi63NqhRmukjkPpqMi8HWQ9otmpemPc9mXFg7zbGpJqvsYJMPjjNcucc48YcnmVtg6YSyeYMpUMBBSEUz7dxh",
  "key14": "59omga96zyZyqV2K2YzwgnsaiThg1kLUBK1wvBeq5pYLE9qeBrshjf9mmvFvhfauGyrjSBrjAL1LNNWbv1EgXWED",
  "key15": "JrGXx5BEibPcLaza8sTSsBxuhLcH7pEQpXmtQWn5wNVrk8HiQjAUd4C26bZFJDKm21k9bSFGTvHAFKkkdKfxKe2",
  "key16": "3TuE5K12xmLsXYBtoWXwdmku3uvcriQxM4AoxUcBwvBeWUdmu6cmnj2xWzEWbi9ydb5LYxMJ82J2a7AXed1yZGZm",
  "key17": "5LvjyyWbQr79PdTtiYDVHc75tjru6ytuHFhMHxka4XbJasCfBwwLWu1emtBS8uMgEfT1ZrDT1fYeydJFs9bFHgvG",
  "key18": "5TKZNrTFfoT6sTP97kGrB5dPxtPGKELwWxNaeosAQpJYWZp9NvrwCtrfYAGvbBrMPxLnDYiTaBBMePdvrWQju49t",
  "key19": "7m9mAA7Pf3Z1A5NLJF5rMwZXnbEFunfMmKPupzDfAo8Szj544BFTAmLwuDjVe1rqGVzfoRjrHsQMTptAxg5uWnr",
  "key20": "5Y4euue7r9zU9prmnwprUuK8GSw7KT75bbzxK2WmuD6xfAF3PqCx2b9P3cezu2vTaHVYLL4XhHHGRCeehWWYXpJq",
  "key21": "4MPy4Z7ejGTk5CsVsh3cDer8ZiGsrYB7E6MwotwnjfGgDoZZCa4sftzBTUMx3hTAfBRdw4KgRvf5CyHSGLSCAVjG",
  "key22": "buzcLJhUp32gv7RpThwdSSzDoV5RkzgQUFQoh2rRSJsknj92h2du2H8gShhNa5HVS2NqrgmDUStMZfhGqdnL4a9",
  "key23": "37Q9rtAvy1V1H4Sr5C3xT5khmsjHQzndo3CQgFRt2oCTDh5MpybUk8tsDYmTuDhTK6LcqjJ8yodNbassHw4M65tU",
  "key24": "4hJHN3BcLzh4ThkiynobXrRsPPwomdPb9dNmnu9RCc575HAGy5QCn73q3zhiuQ7AVRoSu1nF9Reh7wroVzv92urz",
  "key25": "YayxbwfKWoKg5DVgk6Jjk7edPgx46H7FmqZkkJHneJNv2xcZyW9dZye3vZdHLbv67QtFQ9SbFLmForKPEri8H9c",
  "key26": "J4jdeixJHaVFVYdJ2UGYEKYEGH8ZrtnDoPgGPm579pjSVNP4Df4E7TrxBQR7LzjAD7nNfGMGqrQw6kC12EbX1EF"
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
