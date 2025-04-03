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
    "5pd2mucQGdH6k1VEYQcWVrx5mSSwK2i9hcwBXCXHHbiksZijWL1JEwe526tXBUmQeRA9m6tpgebPDv69VxCeeLPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oL8EAFGNFcSz7uvvjtEZ37Wf6ncyLvXkkxgupGoK8j3j7EPzUt11HAttr9AtwoT5mWZeovi9WW8iZBXu3LSijVL",
  "key1": "2bwYCZnKADMgrDuAYGzTZodDy5xSEyBk6hhKib4oiuLnCUs75xonDnRurwagAAFGmaAidTjLpV7P4eMXhc25bMph",
  "key2": "3yzE9rXBQdzC2TCE4BAvhQUnAoRzSJHynS1FHTNSoFKkXnEczo3uiGNGFnirr289XdT8Xhg7T6pMXXB5cZHznriW",
  "key3": "4xdnmnTepFc7vjwD27QjXdN2mpFe2fwVdmBexhuVUzbRVt8LMippr7TyMn8vtdW1YHBvGHkoZ9CWVQjPDNgj3pem",
  "key4": "4W5nB5N27yMzcX8vQXkHfn6P3Jne5zVocnM8KSAKxdQft7Bhif738pisSyYGs5HqQm6iJPHBACoSap1PUXWQrUSf",
  "key5": "2h7F2aTxW9t3AyyagtwGrq3TnkRwVHThzUNUgxREzKMhFVue5j4UkNxRfVDD64r2Q1oyeRupXXzGn6FLGNYhcy7S",
  "key6": "5BRm3mv7chio5oBYrVcua7F4fpJsgy9RyQ3SMsMpZd7bfykLgbjoKy5mG4SjASCAKk2jMYEez8tBio6W949ix6KH",
  "key7": "5WeaHfrbg4pZjCoHgyXPKTUxVbyra2M3dxCQFx7j1vamrpTbb2WbjHvK85tQJqfdyV3sY8HBrzKPGGsRyBA3eCw9",
  "key8": "2vhVwnyKCWYLk4mtqac7ay8fsnMbbUuW99nHpFuNYJ6F3m975wp5hvMRts9CGR6RqsGPEv2NDg4eiUq2epi3frmn",
  "key9": "3XRJTofC9HgG4UdKPKNGJT9QuErrKGyP5cziRCQtqC7rAZZfn4cX54vFMaBkAFkgL4FCuCoR1nCB1TftBXcuvr82",
  "key10": "zrx2sAyRLyQKSP4rsCuRM5MU2MoKGB34PSwboM565LjUWdw63DjH5LzLXFUUDXjkT5YnugspiRWu5hUJsREQsBF",
  "key11": "31Nw9nr2pa1Ymiot38dQeqm9ny1FP1BteQB1B4GQCNmbnqRMkkwziH8KPMcrkBUANW1LN8fZFCwrYAGDhsRZDm7g",
  "key12": "2ifKHfZLJL1ygmyaknRt1UX9qoVuXdi83cuA7eMCSYYs6tN9iFKjUtH8Hw6wSLLhqjWZENUTCGu8XXZUpn4yASwt",
  "key13": "59LATu851TfnKkAcFx8xMz4Lyi1yj2sCchTyt9266uACWgbtkt9g4e4jiExzkwpqjJU5CaH9vSJxJMEd5xNiYpqZ",
  "key14": "338KbSNfV3xFFgs66rt1EtxULX3MgYJwN6c5Cps3JTuqq4wYagJ4j6FG7PWCxiKmxnZ3YfGBUn9ZRB11qHdVMeFL",
  "key15": "3L4HnJQSd4YEyZQormf3X6vko4iNGmpUxJPrhg8h2khbobFS4g8pHH7RUcrdHghG73qeSdBJKvFi4fUeYzaQ24xA",
  "key16": "3Z3yW1GTcBf3wgEyUGDH5HAJt2buDZ4PWQSL82rcdjBKEHTn91XwT7eg2cCc9YX1VRY76V7oQWJP3Yk7gyMPfGHD",
  "key17": "3s8vAjbXA3ra73nPFdevcwendVtHpNGVpQppmuo9Vz9iZNrVzKyCESCzrTdBwHBMyeQZFwDkLLj1FmEbQxeqQxTK",
  "key18": "5FeTvtFXsYyFGzWr6fK26YNGcnBs6kvYt4H5pd6ScQ19WeRH5gn9ov3TLjrAtPtbRzyVYQSCpAgweChhNyGsu9AV",
  "key19": "4WFPuiZ45db9ZifN1Aobm4eyDiXd7mYurMHxsUYNvSNUa73xx1tY42GW6P8QKjK1kiUw7mQbobHnYYLcB7AvDYqk",
  "key20": "2XkNJkfB2erTXcTAEbpkyYm7fW2UXXxX6kXfMJfRN2oc5rw8vGJiZZj1tTbHPVzB2uKNBg4BGwU5LYicGnXEJSkW",
  "key21": "3cRsgjosH6dbwGMEUGkGsuUdNQ2ByAcJesuCcPg5reUGHc7K1ch3ppr57jF9JNuusLWoeDhHkHTKNzmvFTL9gdk4",
  "key22": "n7iVEQV11NA77gwpX5tJExNDBvP6tzMRtASaJhiGLtuYSPiMJxcW5SHX6ZREjdEBZnyT4n88LdmbwqNeNRAQuz7",
  "key23": "3armPuU1KfHsq4mj5X6XvygXH6VLhZogNbaDDQ7aohiFbhmdJxtqMC8wuP1wSP9UBLYq6aFHBmX6t2HFkTgHwKmt",
  "key24": "5SUWdCdXGrMVkGuYHFooBcnHKD49E7ButZ7EJkr6XHXZQano3k3QDHiamKNHUyVduBbi9BwNe1fiWNyQtM7AwRRL",
  "key25": "4BRg9knghg1RM4r1TfLqyj3hhGyDqjd35qUEopW8KaYGuzqF8zJqSf42K5xauC7szAbt82q7himGKktf7p9RAZty",
  "key26": "5bGCh1hPq1oYm5FeWvg6cYzFhsyBFkZzhMMfTgm4sbghgDbN9DbcVNvehQKUcmujRsx9hdSH8NffX3zEjByrJqYX",
  "key27": "22J9GsxpaQF2eHvqfk34NpraD8aAp9eZUBJ6iQtbC8y2cciX7viHRS7W9PvnLaNKC9FTr39bp7n8GZGdPg2GkC6e",
  "key28": "QJVu9HAY2CG4YGj66YCtg6hAuzmNQq7dCsmFEWCEk52wMfgZFBmoXdQtDUqzhKx4bB219uXbsCFWqMA5tdfQCJD"
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
