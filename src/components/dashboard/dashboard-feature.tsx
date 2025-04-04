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
    "4Fbrc6aVLnkmHKDhKUTKR2iqGQ873Bt4QQJZF3u3pyjnSJuuZx4HTFFJroXouDsLQJ3J9ChqZ8ZaNfoWDKTN2Fxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4NLLNa1D2JME5JsJxZwSdQCzmt6s3bDc1bHuQ3Du7MUzpkwCaJWzRsQwsfF68LCpXmq9DTFJ9SxXU92kjGMWXg",
  "key1": "4iZv9h54GZ54GHZV1wk9hJ9urxKgNk6stvn976LRu8YK6oTVW8yNbdmcisB5qrqzFAwRaVGuKPQD3bUrxgAtasRj",
  "key2": "3nAqxJDrM2vpq1RrZM4VqxcdKkYyPK59Z3gmzYMMXenNfsMAqftR3UBb8X1VMqY2QAFUY3nE8uCjr8WtKezWvcmj",
  "key3": "3F7AhPmEXNoRB7XfRVn4HvbZ9o9mbcTg61rvd7S9ydp4YhQa5imzkjfnt7S5zUTvXs2UfCKMh7StVdbVSukCb6FD",
  "key4": "3Rmu5oJn4onMsNfUKEBXeGYP3Y1t1KatNALmguK7EEyba3Yw8oDirL2tNCCNskgADwzicc2m63dxqLhVtWeFqiBP",
  "key5": "2bGZmnQnXGjrDdwsabRKuFHh1CKHzP6qAUQovVCe2ve8KatnLhLrYdgXovb1pEQ2nkLSrXFNE8aGwKDgfjpm95SG",
  "key6": "58A3zLvyL6RFwWaKZmxwaAk544bmpRDa5KbiDFeCzZzWD7g5Dy1395mgzBZt2gqegqfapP5Z5eTY3VEiG2XYi67h",
  "key7": "3YVE4jKRNYJYw2AxhuzpK8DKREAzo6BBj4ma8PURLoQQSvsUzMzk6GM1xV4Fi6EVd5mofErWhRBT78Kqq9e72kBD",
  "key8": "5CE1J56yPZtYxVHgHivTCvcZchizL59coSiaw5A9j7GuXxhMhubQn2qNeZK3hY5gDFwTnMdhxtzA7dc38dcvFvGE",
  "key9": "5A8Moibi3bBVDFVFwzvgt3dBtwue7T6545K1W65PzoKwhV1xwcXx87sssCREX3cQapv5K17RM5qcx2etvR1EoDAr",
  "key10": "3Jdh3o2gk9XECZP1kWCvrwDhB7F9E57xGRzsW3usf1yevUSX6cCHqv7cf1t5NhwFewpP2VCAQEMVUPX9EqzQoKm1",
  "key11": "2nTUq1osdSMSRfTq4ea3PBp8pKnnLR22Rs9x7dmhARpm9JXoFzxBnVfFBY4XnKmFyyJfFwYvBiwEzHnxLCU5VttR",
  "key12": "3S8kk8di6CHuypMfArtnyHQRGkdppbX7dJbRox6Cj2Y99B5zHGgHKAS2z8tYeUPUfyVGeHyG73mF4ZL3tXFsWf4F",
  "key13": "5poaUDftwP3FFZkcL6n18Xx6Lg8b3V6tEhAT5NaAykPNdNmbmwyAn3Cq8qTb6sMbuMevbe4NmpRXyYHHUTz2jnb7",
  "key14": "3S3seCqK39mRh7wbAREPsCTZsw7UjP1Xi3ZM6QKEWGjA8uwxzx8UA7gH7uHhktQr7pqrnRpwSWrXSxAQVdoHTC9z",
  "key15": "2s33rAFhodptdNPWLnk9Fvvz6s9AeAZVfYG8WWdd1XRufNReWR4zwd5b6raZjudm9AN51YWtzZAGaE5BdAWzmKXD",
  "key16": "4WVhohmy2i3xKRCecFz1APV3PX7gxpggNHkXXBUtL3A8LYx2ZXabLJ2EBSQNQzmpGHUxphGqAF1j47KsBkfMsvzQ",
  "key17": "5oxNwBtb4YHKTcMeZDYfVoXzJ8wRBFhCkDPR9By4j4zkEVfM3hh3e1mbtSEYHS9GYfcEtcC2XjFM4sSxMHTYg4TU",
  "key18": "46jZnSYNvZ7LZvH8GgSS9hccsD7CPaSHKZ7eETT2XN9ZTsJYcooQpCxkdhpsgdqtB5LEgiGjYxDvxDE4r8fuonEj",
  "key19": "2YbZ94qs1norex58eYc8EoQJvF4N43iJx7MFkW8Xron2jBqVAsmrkY3eF6j5YFdAiaL39uRKUkXrTZi8Be55MriY",
  "key20": "4tvQF1EmxvGcDztJ2vLaPao135T9sTxFkBPsuc7UcFTi4CV4nKAopWtqABY8rX48hi3xdA9M1e7rFabqPDnFNWWd",
  "key21": "4gwbbCNs96gMfUNDg6wghNvo8aSV7ARM44vhDFYNFdHt84AN3B3GNg4pvRKddT7SZ3QznbsdnnANshS79bUMczfK",
  "key22": "5Muyjg1i4Sn23mYPJgaTbE7sPLDLorcF2FwDptC7Erk9cgiaTz1ZLzfxzwKMN8fBHr41nefCpTiAfe6bPgqiCCnh",
  "key23": "2S2ySmvQuu6ad3fvDccTSputxKPw95eZLYSSHXujtRv1MjKHd37yMytzhPHxwXqmjCxiW3yEYuTbwts6mz4CU3Wf",
  "key24": "2N9ibXn72BhK2MHswcjiptGfqNy6igb2om9hJaCkAuQ5mpZyzVXo454g9LrdaJ8qbdmpCAQBnWLus166nbkGpTUM",
  "key25": "656PW8mprgK6GLREYctSquY9trK2UhVkUMeNLMGSXH4BEJyersEFoaMFhRWsk5PKSMBKBUp9FYDSLczp7KpKtf56",
  "key26": "it8e1m66NnLZkzdVihYCYVwoWWfAU8rynnczPHsYPbVnN4GeqrU9ktBSDhsdLT5yZMeGzLRoeuWFvGoUt7UN2Jx"
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
