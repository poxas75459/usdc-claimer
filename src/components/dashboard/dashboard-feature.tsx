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
    "3T57e323STQWMvcntYtYY8zYMXizEyFu7XZPYKKgu8hBV6rSi2o4941oFdiDGLvEXLVrtAK32xQT1nsE3fwVfuWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33aiuigUiShjcM38aUuAJd4ZdPkgvjjBWLth7C4QtPbxLeZ2gvxmUA1ZPFhzRy2RqbrCcdY61JX8gBGvvdq8AwDG",
  "key1": "5mnmJNNYNJ69Ss2oBoUWp2YjdZT2eKSeTMMSJutJv35hwh2NfJV1qc7hFqbErS1pM8Es28zopDwR41A6LuYQ3JPh",
  "key2": "5FnmTwXCFaYzv6Afw1ak7Y86n5vhn6jskzPGFcmSq49VsqUPwRgyLFc8zRCDxKCfyCogtkYraECE5qT6GLajTqSK",
  "key3": "3p8wpJnjsyoFZEcaPi9B9S88TUY2QXMwYRgRKVnVdqjsLELj6LHjw1f98RPBvyzEThoqGScB13Zbr5uuaSuPWiUS",
  "key4": "2xY5vrGPHwQnBKBvWh46mjQcTBJq1qNDdRTEnoeSQksPoYpXey75vEGZhQ7vupB86RYjsGyaSwdja718VzzLwygD",
  "key5": "3EA2QGpnzznZ7RJAVncyiAAUGmsDNeDuRfBk5aa1tm2Sa2oWo7gg6RkvWegPTv1VPYWnMNq2rFBgXkiWcMn1DdbU",
  "key6": "5dA6c53Zif3Q4pbuNQsrNEMtki1RAgkeYURqxQCPAgYjE1f7fAQ8cFGnJQiYUxGfUe2pd8A3sw5i3WtJfCxTei6F",
  "key7": "656tbqgRyycatXVbABqmTn6MbQ7fukSjokc4Q9fPENKdKwaf7wnBacY3weG6ZX4MnSGTShmyT6VyRcRWXsJPrzgC",
  "key8": "4HSEdsq5CcCyLXw2zLRgpdGcpDjsnxp2jd6NaUTmPHP2a6S2eHHe6n4m4i5fMfqpMEpM6Ee1q25UNqL7PdgcHxiT",
  "key9": "Gzpkuph25J6eJQasZtk1TwXLbxRgmcyMCaefrxG35U7KHrTgM8i5xAYRLHfjtqcraguHZgFPLmHMJCvkUHf8uYS",
  "key10": "4f4nKhxKUaP9bpxJGGcc6D6dqd4NEvFrH8iExkmpcUbjGiK44hDPkEwpNKbNhoaDMd2asBfwb8rPd4pZuvvsp5GX",
  "key11": "weeZkYEWKMLPeLf8PewdEKUpX8GW7jdhXyDVL5iHWf4zhHwwvQKY74PFRZ3zYxPhuYe3iMKrsTncA8UvYH8tqbp",
  "key12": "2dAdmquKVfD9StabhFW9Pzu184CTwRqacPmQu6MeTo5wyisEqaLpJogNTLLtL7th3kJ45gi3ob5iyZuDrz4fK2BB",
  "key13": "2U9wLfDqUK1PY2KiHFSH1ktZ39ge22GVKXXGPA4nibK5cMA8NRq4faq6bETjceZgdGiPEoygRyRSEHn8dAY2xyA7",
  "key14": "2sJevdvLwMZQe6cBRyqgEv3pXs9siLnotBbCPycp5f2LVUXcj2FdtHh6dqY5hC3NYT2xCTLSVhmbyMtx4zfUtKxE",
  "key15": "kETGaHtJLdNzu1FuqKWurzp4UXenf1scVxzgn42c9oPLTZ2mffNzVrf8jTvG6KkKYBreVcvo6dHQXnCtrZJ6XpM",
  "key16": "4wHVW7DoKz6kBigkdh9pPKmwWrxMmZ1r5DKcnuwMEq35qCiieJR8kizWDgFqHYKS5Efc2FMNBziZgKMDSriPv9yy",
  "key17": "5qeUxEabC17nhzwQytfGy5xb9ydb7MLAVvXyJGQrdo2STi3rGuDZeuGaRpSumsd54RjNtBU3CaFnMoQWeK1ESX7B",
  "key18": "2jGjXFFNZVxkYvduv25hLPn3Zbk93pxV2H7MEXufwP6ZtoQ2AdZKnAfFjNEEZRko2qiHhzHDMjG7sjvXwVLgakpc",
  "key19": "3kVm39ET1fZ8x5wmSDnPHZxjPVpHYxWfe58XZZQL9bzRRJTT1qzBEkdykAKraFaGoS52YoYzHL3pmbCBRR4xb7MT",
  "key20": "38vH4am8NGhGrcqA9kDZuBLjvUkpgEVfqTAtup5ntFS9Vyi5zJrKULHSXHVy6bkqedSut7yUzf97xd1Rw8Ldt4rH",
  "key21": "2Dvum6Dmvh2rWLbsUoDSvyz22AR2WmQZTzzZWX1CAaDfA9m9WJnKrgugFgKPiHjHa2T4fU29BzXEo5XqoXJC7Fjh",
  "key22": "4eUGXocB7mQpFWxJMPLx51RYaHwB9ZB3Ym5tDkVw3Qhjzv2EYqYMAZMhpspi8tqMrY2bDxYzCSxojEpdp34XUCSw",
  "key23": "3KhTB7546bmwjCePd5y9xBSbW3qnBZVDuKtSpifhRoCzXv5YKQb3WvLWq6Mc1BpereoEhfdekcD5c5TGZJoW7L14",
  "key24": "4iQePS2PGr56agURkYSKmbJwMaZrWar34cEVUzPyyEn8UmQxP24FyvSTudyBHAuuU3b6Kc3jYM2DVv7SJtVtL1DQ",
  "key25": "23EfNGJGa9D7rpVfnyxqn8cEtNbqRPxKLBEDhrXWSen6DxiVQkct1mHodNfszQu1xkUegdE6MAh1pTF6Rdy7j5XA",
  "key26": "4kpxYhYYfXmXkQCkE7rJ15zr1e8JkwjJ3e7LEFb55vZEt5U81zdeyeX3wutbhtxZgGP9tbfFMtgeQsXJMAXUPWTv",
  "key27": "39MyLBuMcz82Wfgx3kqFdNaydoeLu7Cchgbfd8nQNerEeCirqY3Kyj5UrGUbMttgWabKExZEQBuZ6pUEER6abnUA"
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
