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
    "3tofbwUfqL3tQZfopAzhGeqoCaZJyQjyXY3BQHNiqNvJv632X8Vam6rqEM78JGHuKaUSDxjcZbiUZYuH3HWmNZrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDsRbkuT5C44TJALjWvFfUMkgF1vKSXc94RpzLAQdNt59oUFDXteuiF1zFdHxoBGexNE9Bm68VFEFKUJhs9qgVN",
  "key1": "3w496FyktKFuGNUHgDfaxQupNV39sbT9bEHsRnwvSinxxNuCUxVeapzGr3aUFTAGxmLCrA11iDWAsUHPav6sve2",
  "key2": "5gsCniahLsBke7dXBoiFXuAPTW9ezt4V3ZPiJq1iHMX6KCnsu1wqpD3HKyjmTuTuC9xmyE66LxRjYpottatXgqCk",
  "key3": "4zJ54GXPCp9nMMQa5i546Vmp8rmz1JvePsgvdnhvjY4zCZBJUox2pxbMVUGzqRnfBpyZiNVtCfqhsgAHcYf2vvzJ",
  "key4": "56tiZ29xj8e4H5jha5BakYoHeaX8TZRwwAKxSHTiyebXVL9wz1x8Nufpr1NM3EeNQQUhCoFoJ7rUerwQugGLPepe",
  "key5": "5nJH7WD8bPj6PFjfsdMtFCZYkZZWMt3ABqgYVVJ5BHUQnrSsrnu5qVRzdxvG5cnqAo9RZXkSCTanzjbzdCzS96KJ",
  "key6": "4pPz4DBMfWiE2rakjbiJNb8fChg8MSLfxKgP2KKzk3CFcCFvoQCs4QZn9HidnoUGMVPMxm4vmccHeyCE3F17Dp8X",
  "key7": "34akb2QpLky8QcSMeu9pJ3GwQ3EA7yof7cAsJSx3tCAz5BGSJwbB7jGsPbT9w93VZvoh4K5ABuJJaLTCLfiJVhgR",
  "key8": "5RZG6CeQBHxaYztPzVfeRZBjfi1EE2GBRTu2v72Tmb98jjyC8i2Ff5tUurms4P2ezJrB2id9azPbc9YoDjzxMiht",
  "key9": "5bov4PGioyWCt6k2jg5vPnQo4oK6f97Gz5qDyh1ZXE6uX8RuUHz9cwe42JaADWVkSZKxeErumoqrnf8mdDxeYNcj",
  "key10": "8HERePhzYzDU2uDjRxNv3WKo39ShMmeupUKhQ8avGraDzY8wo3EmTFifrtahahA3saGtRYdazr2CfLxx1rfaWWr",
  "key11": "2qaBhubG2BfVFxWeqZ1E6fi7wS2B9LbKRnej3oPVxYfSn4NvZwp62UKD4jDRgEUHE79yA6QXN7Wtziv2o9oDFTGJ",
  "key12": "z2SxBH1B1W9GBMgufxqPK2KYgAeGByHKhBMtYFfyCAZyPkwC6ewHgQfnbmimCKLpjuVGcmoQfTGRZNJcMxs8Fjn",
  "key13": "4VD5vHthezR4kHMwP31b9WcEtFoTwCPsLuekq76hzUSoNRRh3j7VuQWhexrvbJG8kYuDvp6AJwyy718gRpt6iAtq",
  "key14": "moYzvi9GnUodJrxFzdATkdHDTZWz4VmpqyDVhqyfsbgvUJE7XzZcv7Ffg8feBdCxYqCN4YVQKawPsjnM4o4V6oC",
  "key15": "5aJQ5U4yDj4bCfUVmSgwviCi2jYkPQF49j9GBhrqgHNaXDraQXFXk4q6KWuWZP8cA8HuAiM3PV4B8yQ29d7jK6Dg",
  "key16": "3ZrGNNKD6UfmyuUcqA6RvEk1xVxo6bzSvdmtW8ZyHh4m45jTCEcxUZuo7QaF2NrKFdsEj42UgS7kZ7bnG4LxT6GH",
  "key17": "2on2KbW6mJAfVWiWyk14Yoqmx1XWsRZAdJ7MwLc94n62LSo922bD1YuD6g5iccz9tjB2x3eNGrEtRoBTfn2Sjvxq",
  "key18": "3Huy2M9gzLFxsWNDfPk3wLZbh64X1UBQjc8fchnMyTq1KK1nctwn5PWLVNmziEbmLLN58S9YbtKpDBmHHEq1PzUm",
  "key19": "fFjEYqQtX4KKZhaciMxgg7h8WEwnYgXseECx2iA9XxRTXFVzz1tmjKwh3JPENUcpyAoqCGxmLSYMVAnz9rEwfZq",
  "key20": "2zFCKUUWMVXdBSQEThwyWyF2AEFLBFzvfWdKRNhzP4pVpTCr2aq1ZaekDHxCSkrx1e4QwiJoRvgEheR3SkugcF8F",
  "key21": "2sLoapNxiYMoNSAjnovrwa9pZgFsLaQSfaiEVsTh1WjcgKRg6dLhkcWQUHfk98eCq9483K45gb2jY8AonZDFjgp",
  "key22": "yduSDzT32wcgdQkXNjxpZoJt4hqhGe4iF6kci91FTAbU8PtqyxbRefwTxmzUSuuW6yYsm1ggxLGHU1f2oELvdzu",
  "key23": "up52xvk1S2p4zqHX32Bntmo2jMLhHanDQJ3XjfRvLMD6dRhDyrfk512wqtsQHxftiXp9PnPqhkWYvXvsNUT3fFc",
  "key24": "2sE5rPJxCLTMtApZ8JHUyt5ywbNzEVqTTd7k2bnQhNsss4dfkUUe7m7E6UnqRDGm7ueaG7aypNsZgj7cR4925yt1",
  "key25": "3jZDwFncQ9i4YSLc2oYCavnebgbt1aJVBv5CjZpLNVLxXEAT9LgP17eE2T1yLc5TVw3sNDkCN6VEySYgAuZiEfVU"
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
