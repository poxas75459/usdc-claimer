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
    "3b7y6K3sPB7emc5WK94pbGMJxUc5EKMU9T43KZQWiMM4jD1DLLZU19TeLSK93MvG9d3qRz5XRnavbiubXHL1rJ85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GG4NHXf96xpMCgR1LDC3UShyCnwhgafV4eGgr7V5Ag1cyLBXKXRWmUQaVaEiRyMmDf2tMbzNu68L5i1c49wXpzF",
  "key1": "Psqa46D7D7cg1LaakiMeKQBSbtMDzA5vy1VjjL81QNFh9eMbvHUUf5mJZHULL3ncNTVMQmpZtPHAgujHCdxzC6Z",
  "key2": "UBYRtYjUbfJfrkohgzSxj391Qx3VeyYhvFJ1GUYgisH2uNV7z1TTA4M8K6mbR9wUMyj9HpuPh9pVRCUbWegn47C",
  "key3": "4MCbaQFkkoVj6tAeNifrhWEMiQkALbd8yEHV5wVKyDVYChvP8btLCFErMPu6xgS6aBN8QfbA6Z6uHU3wxEDD3AFk",
  "key4": "4yYckaL63QPtJeKQ7tEYVpYN5PAss39tfFqKeht1Az29bDFpdGURNtBqSCnM1M45UvFeVz5aeDe6u8v5youQ8q3n",
  "key5": "2MpxHrFWksfEy7XS5KZbGgS11EmKbcCAD6eihaKoMYWwqfzntS2WYdwYDFFWsgC5tXFZmTmiaRM1SosAv3TG7YfN",
  "key6": "4Ddj87EKozqd3jb2uNw7K2qF7cfC8KpL5PusMnSkDw2g61BHu51yVuanSwKWJWVRJLjRmSu6FekeuywAt1yaxrMA",
  "key7": "Q76dRwvwXqacLXMMrL1hmtPASiMUuQB68FVrymDpkhqMrngEPPNkGVTrMYTKVnJRPPQeMCwJHsdkGCdS7SccJGC",
  "key8": "4gSnc9JX2BscL6twbb8P6zC7LNA1S42pHvbgAbJwZPmBkptsWLh3VBrrjmXyfcFqUMNf8fR2M1gHX9Z5WpaQnrXz",
  "key9": "2BcDchME9RDk9wFMsuBaja4yiaXMCjDKkjCmMECWGKT8CYGVUZrk6RpziSGKZqLazUuGrTTsmAXUVouTCiey2h2i",
  "key10": "2PnwhXhgWYSyLX4fbqyjkPHhxXeZge7NwCrkaksUGhkkmizw5LuVgNC7jdUUrMBpLCFtZD6UviVFN55NTTN1asoW",
  "key11": "2JiLetdf7nzfctq4oxmX17ztsbDAsMUp3VJYpDiziLzvdKdiwj2uzZRkSVxieF91PinqoZ4aijKEd1m5d8Xsym3F",
  "key12": "5gymzTfSWmBq53QLjBpbWmUvPjoEJ8keJU2MaqCCcbR6hVhFqJBERVXBWLMpQ3dCgMCD5BZGv2569PvJMw8xJPzN",
  "key13": "3zSxtVzQgfKQyJHGywLQZDN42822xCp5GFRaNKrQqAjiU7wBuTpm8KEJAYtG4fjuwK2dtgna61u9ajwx3BzK7mDL",
  "key14": "XNyx8iF6e3AAgLBLNtwyVi3usgFEFimcns3Dey6k4Dv9eNQ6yJNU2efGnjSpTdxmr253qpWTu8CnAJGUpUmJ9eV",
  "key15": "36LdECwaMryig64C7GQSvagU1kkJ7MxuQX7YgX5KuapTewRmedejoRKTPng2yp8XmXrG1fQzEvz2HcV3s1yCMJW",
  "key16": "5TRsAWfUVYEsco2RgZFp8jwVrDf3BgayMLH1oCyLo2QoDyCwY7fzrtMCMk9Do569Zs56kURhKY9UP2FZpMUUU2hR",
  "key17": "31TLgcmz7JDnfNF7rDiWTtrVGUJkQgWGSkjMxz5Pi5cK6BK9MbkbQk7W3rF4Pgz2JwuZGQhThvHxFbjmQGiRnek7",
  "key18": "Mr8yUhaRLhXoBKb6PQQB9dzvNtAfWqaDR3WKzmLKFoRMrPton4Fq2BCgFGVBzWwW2v28CZ9dFw1sDGuox2MHJTj",
  "key19": "3EtmZzeic1B9idnEFfyM61DZbPJ6sJBk96ReGoinfeFciCjGssyzLtHpQsYwRs9ggWij4kw7fUsxapSttvyFWu8w",
  "key20": "3igKo5WyYRK7RGSWAbkZC54oT7g8tHMEFbsgMFBuW913McEHEkNoNDD3JXQdRvauNWM9Wk3rtMdNDRzTeTgnRRw4",
  "key21": "3UV4AH6uaJDSTomAacupmMeUfeVpXCK4SjxQXa9w4qeWLT6awhrAPEqYrV2iE6Yhr9dq4D8f5jAiEXvQydYY5K5U",
  "key22": "593SfVXWvdhQ2ExeDHXUsXm6rv9KHs98pVcnBHMSE1e1xCDTU8aoWnxR7RyZFRxmVbs8NavUDCkmDzDAyAYGsoNZ",
  "key23": "57um6u41yZW6hJhToeaHgjZXEdxNuZ83ZRT2PJNtrrj6S7BF4McWD5NqJytACGtH3hAFk3F3Zhy2MVYnnSikMtZu",
  "key24": "3AqSJgYjtB5qDf73bFextJaSSBe5gKLSEcd9o14PNxdo3Vz3h5tHhqPUDQs85PNQwarnckKvviKDasdeerpt98Fa",
  "key25": "3DXx4SjhoDPzz2zW4kULburcRCK1fVXHBmm5Jt64fvUKxGCo3gKTQ7krj8nGqgXZpLJ9TpkN3W2KQKfKfwHjJYyY",
  "key26": "5GxEzUP8RUxSi6f8FeJty58GX8n9p5nLGDki8oMR6quqezjMArFHs2xen83DTtj1LDWACSAU24d5dFnSsza2gCZ4"
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
