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
    "91NUio616yGSue8j12JBwxuGwuYZNi64JoAZQtgdUzdNQALL6Qea3UwMFkw6mhu84fCjvKz6MyHNDqCoZhW2Uru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fa81tyhVBcodvtCFoJBpThPVhFawvH7GMqidunJ4MfsyhKJ9cK2XEfWD3j83AmVRBMRFyq9JT5NsKttG9i4E9Qs",
  "key1": "b1Y7eaaSLbJxtgBKxPMdAe2x7ta2oyxSGykSCjtx3GUoTdYRZfs7Y5ELv1Nbem8HNKGjZYAJnDPxYpjTy3a8RV6",
  "key2": "5TWpkpTjuqKCnqzugVjtRqMT5ChrKTiaaps65aZVuePpoJVk5swbzoQJBUTBdrKBjgjy9YfHPA45NVXwwvzyVQbk",
  "key3": "4dThELdumVLDWQheMYEwf7N2mWovihYVXMsAqNYuTJ7Yq1FRAcJCYWkZT2UVNFCSGCP66EV5bRd9ntQ3hoaCfqqq",
  "key4": "3k9uDKz329dogsVeS3h1CnERoXbvMssEEUZ8P24843nPHfmqWVhVdtddJsNWNpqQ1z8AYHpSxU6kp1ovFTTkGZR5",
  "key5": "4CNfQqfsS2wFkdhSbxGSo256wLHohp5n1T7YEg66s8BUgENTqwRrcBidjFGjqbJjvzQMyDs4bEDUqXPDQTi7yGL2",
  "key6": "26GyDN6bcXXDBD1JBDXVY35GhM2gRmVegMGfq4Udsf1X94Ts7G7SF5Av4fDPJ6ZDev8qWu8Co7d7p5kM75xHwRCJ",
  "key7": "E54rD853HYEWzfG2Uv13T1HQShEh7YyNpwELnMHp2xXXWCc4ht5PSZ2rbh9dsmf8GRnyMvoua5VR8eG29YPULXi",
  "key8": "tfUBrkcNpt7ygLL9rwvBv4Szp78Pnj8KSLtSwBKNBRgUMAeLKZTbsCtXoEp21JQjYqZVKhhPwyHE8yKT6C96kaw",
  "key9": "5mtG64nEmxcxdxdViipZnUAYTZKrY6kzbd44x9vkxz97ecmHiLKMBWS72XUDc4GhnXgZnx2YZzeUR4x17nLYMvgx",
  "key10": "6Ha5vai3CrQvUY3Cu2va1bgzXF233K9stqnwD4VzL7CnfTcYLoPqMCwD7RU44ibCj4fW6raGo9EP5Ltd8eMquqJ",
  "key11": "28qkG7Qiq9oeCmvW7nku2JDAZH4Bj4vQAstbeJ6KcQF8UVtMSGr9D4Zxg1n8jaVa2ma1gECr7MyLH5cPVNxPMMF9",
  "key12": "3NkgX79YoF43adYj8Yr3BjUdT2VNPMZC3CteNgQicqsfn39r9XQEw5WGJphgW2dbnGvSEgsnG3Nhw5hH4gAhB1xg",
  "key13": "4izseGb6FksZzuL9CqfEz698MasJyv3Uj2hgmjXxkMdtDngLrrfGPThA3o2wMxmxEw7WdfxdRchMdYWyV81Py7rX",
  "key14": "2AtABTTy8DGxrLd9nBSdQmSgi618uZyrRBm1j7HM7WuHgJoaeCaAGgACrSkDpacnNxQbQV16tKQi7o9r3fdAcveJ",
  "key15": "F3EQGEkVUFyeePCHwbBucHt3nXiX2UgEcidURL6JZ3Yq2L39fppyisn4kbnpX5uT3wrXJXUcFWkkhuduNwYSXhP",
  "key16": "DdkAJnYwK5cBf4zNyd7TqaYj3hWCBFtWSneYhuq2tjAjzEKhWTCErLPCYn26s9m8D858rsqMvHErUW5ynP69Umd",
  "key17": "5WBXVwMKN95miH5Ehj3xZbR2BWBhu5zvfnPUcoQFJNP6ZryTcjXpwSA41L6D1C1VTrgsjftUrg9ccHMeU2NTYZdR",
  "key18": "5gT3i8BmJ77GMXnJXr4oNsmVh6stLo1HCr6JQDzPAjiGMe75VDuWySAPghAxRk1sAyuQrrusQqaHCoR94JvT2D4X",
  "key19": "5J7Ru3fs6M2AYYgyTUAC56iMCLTgyR81z3q9G54qLX68Z9UjTdLtii9v5yCrgfCauh28SiFa32R6QS36YHGcyRDq",
  "key20": "3huBvp73vuPtitkpYKFz9GqcwEfEaMFiPE14fWtF2dmAtzpCXhtQ2Gr6W3vtKkuv5oQRAYU24TsurHAyPYrZGHzv",
  "key21": "3qvdXKNUG7ZJ2nmRJ69fNgQcJMb9c4twCB7PKvynZEH57pzZ3B9NWRukLbqiqHr7ZACWLK2w5kdUumrtxusn2kt6",
  "key22": "5BShLGEmUPgFsQ3c7u2a6nNs9uHTLrCgWzonH6sYRwh7A5ZTUirDZQgoKk36bU94DMAS1Xp2vCnVXFjovWA47JUW",
  "key23": "2S6VgaQRbKHSLhJTj2bBVvj3NCSE7kRsdC8K9L4gJzmE3NV41FSF6Fbn9m42sVtX2sfnWiYFsfkhyCv1GbB9JBco",
  "key24": "28m6KdkiVbw5LMXXKmjWVcW2hLc9wDPyeduzs4BqQPfAyypRicJ21TSaj97ZLLndqexRABBugPr2XQxbUNvNh77t",
  "key25": "96p7H9VSmPThBQ3F9Z2vx4hbbBAL4DdN5MavFSZsfjXWb4REHcBu9hZvKdd9c7Wih3VkqhZDiYUGih4x7w5EfcX",
  "key26": "Wu9sBWgj4xPfHL7CFBfeKTTUDTRqCyCZm3d34TJuiCAX4Cymx5FofJ9zRipn1z7Am8e7o1aM7Bn764NbV3Y8T4p",
  "key27": "5vAwu8jZCo2EDTkszWbBkbhgFquEVfdw2qYUTWHwvxT9xcbbKNr5sCf3QkR4Kz5J9Y3GCNDvDPyqDbvSpoNmZtdZ",
  "key28": "3Xr5hGidMX3MLf1Me127zBCFQeSR9wz5aJahDUpkXyq1MjBAJQkR9QNVvDL7YDqWxcbeqA1pGgmTkhApc5rrRq82",
  "key29": "4pV77jf8L313kyQzP7AZAWP5x8GhQL31MQPp2uZmBamnL5mswyPagBgHHfShfgbtjhcTmnmrL61aEBh8ALBrwPLy"
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
