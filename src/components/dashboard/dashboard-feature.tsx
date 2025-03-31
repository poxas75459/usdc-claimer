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
    "58Zt5iNfDnqLRkrZ6MAmDWwJH7g3pHCE6ZXkR1VHWTR3Za8y5eK789FVdmB39trc2iG4FLg3ZnvxU3pcZtLVyDm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y83qJt5A48XwyfstjyM9jkVKFAGbNVHYFNSTpvhwTEJL6BCNdJf8TKKpFYC9JmzgziZJdCo1zdd6FVnh78RP3YZ",
  "key1": "3eAQt9rymtiVKpMviPF4zoHHh5iMVGpVdUm7zXgdZ8E2rLt3pY18XBAFPKwtMsFMSo4UU6mFVkrkKXSdMLnUEoUB",
  "key2": "nta3BBVvovrSHYUHf9kuCwFQ6sHQJkifJSL9XpDGCqM4QbCu6qsTKTV47nLfKRewPUdou4kuMZ5KsK3fCC8Krg9",
  "key3": "66T9zStAxAxuuR77ZfKTW5avacVHrnxtJP2VkhKHzhftKXJM2vYMmAF89cEZLYeMEoinHPWr26geypGrDVCty2Mv",
  "key4": "21rgiUdGU2gKYdfmsJG6PHdyDo5gneL1VVmd91BmpW4fGJkMzBbUGriiBArqBL9pRJ3Jk4thCykteZx1Que3Q91x",
  "key5": "pQQGYFEjo3fVn6YPKXezhx4ajseqmTiQ1zVUjiFzzz45sZK4pmfdqWwahdUJoPJKLL4asya1e5ZJmEKu6QGAczy",
  "key6": "8qRRq6E3eN1ADENb6D7oX7NPrGrHtdeGNpGPiyfihFxcYWgHuTKC3yg7DdTrT7LTM72U2ucmWwG6snuAuL8RkVZ",
  "key7": "2HFMPY2LJAbF8ozqMLdQs82sABoepW3N1mj4sN9rKYuvxmbWbpPpkAxWB2Cg9PDytozqnZa2pU9uvCxs6dPPVHQm",
  "key8": "5EGk6svRiWyf39pEETUozd6cXNALL1Q2r3NDTYS6MZ9j6vCdeCAo2EwRQpKKGM2CzuLJds4t9nZaBGZcNh5T6gc7",
  "key9": "5fXrYBeUzK9FayDiGCG6qgMxb8ZCQBgDydHjyB22tkK95JGd8ttTnCmLuCUmsKUCuJ2Lz5ZftkB2gKw6iSmPXeFN",
  "key10": "67LcL9ooNypYZ17D13aYRh5pu99mbMdWa8kZ4viHaBAssjvMMAWkgdtSqPntZwu3gFgmS7jknLDHfaNh4ZB86Gx",
  "key11": "5oDLt6q1GdMLANhWsfDzn4q4XJmywFDnLEiFM5Q66h9P56VFXTXEMHNa1QYZDegYtB7wC4J8BpmHprUyFY6ihwRN",
  "key12": "4pLTSZkZsL3qD3rnpwwoecn7SVbX8DBVrCK2awLrtFVUrVmjm6yzUc2fgMQ4kXeBE5qDDmApAy9iaZ3qNGLQURaP",
  "key13": "2hpLXTdWJj3F8vvxK3tyUuu1pijT9699izHxd47HAV4B9iMfv21Cx1b46Ff4ogMjoyPDGgfur3WQ4bNe6kMe7BJV",
  "key14": "2296wrthWceLmqw4fDoNyJTpN7XucRfY1L1xd6oYGHWXMUPeSambqZQLj8YEwvAJ1ykqKr7xNtQPZaJC1PEi4Vgk",
  "key15": "64tMS281riKGZWP8KCcdEUWMwsX3zWoSuZgBhA6VQFeCadcicta9iAfFDU4TDjFmt8VcCkxnXoTfDsdAeSNK436u",
  "key16": "p8xqJ7LYrWW9Fwu53HQSRpZghaT3WmsL9mpoBQWQ5T3iCE3D2WdPTM9k6V4VRjaQ7xT5dpVnnGKwN78Tvenqrxq",
  "key17": "4QbjGGnCPBX67iUpxBqpsh5NRBKqrK4Dbce61ryUySHjYjvmg5vbVUt4HawnbFR6GBa33jKUej9edXhyzxpYg185",
  "key18": "3zjKcD4qRbaTAaadA1Zsne7UU4YApc8hPj9QDeXY2hCbkST7nAAC5zxRofbvbMCuK1tvCbenn6e2pbPikzWeMuoL",
  "key19": "jqDosJrPtFb5R5vCsCnkKa4ZKwiqhgMz11y4o2mGGEC6LVk3kZcuyktLNQqKwkN3xFfP2hRC7aqoiY2tss1GZuJ",
  "key20": "m7UBb5noL9oHiuW5vU2jiiitX4syD7oJVSUnbyZprmv39bfwwBDcg3L5ZLui5NuAXqhLav3ekXVZXzVCr1VWakg",
  "key21": "3nfMs2yp1ThDgeuEq6WhkQSeuoRkUXRauJKnT965hcsRhSfSijZs5myKhfAoUD1YUUyga4fGQjpr2KVtAr99rBRF",
  "key22": "2UuxtdNJAxE4H5rN5ZAM5G6vxeuebGrP3zqxjRYQ2NrjsHGDUvDCdyfEi9Y6BbE8pUJHJ8RGV56c1dsXeUBH8Y3M",
  "key23": "jbvL7ngJKNdCaaZs8iqWzHNpxYHZrXDz4TNqqM1WLB5CcSLGDMtSX3cSAa4se36SzADfHEMkKUzisu1KHaHMy7w",
  "key24": "Fbnrt4K9Fc9wS5AwU48nzBHU91cX9hMtR66PhcAyuXr4YmcuQuNiVx64ykTvcKY8jjQM1EBWyv2Hzy4N7EWQq31",
  "key25": "4j9VrKXK1UYkgv3bB3BrPAYjkJrAsPwocKRHp4YSoUfVBXSAfz5N54f97ytomLpTL72o221P927RC7fHUdbtDDVN"
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
