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
    "4LznfDDZxBgfbZ77No4HD699F1JkPdTDbPpCs7S6E7NsqhwjusizHs5hY9pRJEbysA8BoLCigWhQLSfHh3TA74yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d36FBDuXfJYMCPn1ucM7zEZJSv6xK4LVPmLnTPc88eVJxaUh949S31N1ADxyuNcEuCUkLz8XK3Q7Q3ENT6g1FCR",
  "key1": "4aMvWWiZvUFSbbBMtiivFd4GguwEgHXPHiWAh88t8xRGzwiHyw3xF5i6STJ6C8TksTZgdS9Edi2r4nxbqX73GrnR",
  "key2": "5iocmK9d28N5jCtnHLydYLatbTvSTEWsFkYaVQBfmrPtt5JoTjogCw8N61zMBMpHpQfbkoZfhpHysAT9hGxY7CKM",
  "key3": "61LiTjnHXM69FpZDwnnDHDauuypswp59TWnHb5eLxUXj1wfrjG2wGSpicbvxBSmbtA8ZmBH8Fwycgkie3aPHjRgH",
  "key4": "4wLgHs7BLDiBsngvyrNndpRt8PbtLfQi41HbaZPLVpRBaDP3hLmKc1LfnQW7ZKiTZib9LwUk2QDUXUMM7QhH744z",
  "key5": "2K8z84BiHQhHtQFfHPxPJqmda2QVBCT6uuwLtt9YHeDMpHcggBumZov3fLxxtxAmfDod7hxtx9jdPnaQJZyd45D5",
  "key6": "oesfG6uBDChfnFDsqhV7uyT4DtoPkpwZy1dptx6Ydn4dBqvMxx2k8zz6MaeKi2mmEPnrHGngB36ueY2dKYLcb3r",
  "key7": "3jk2oaWUBB2N324CSmNet2zWUL9PTZGVaq6hoUhrzaFL5YFBSoas9xcbzdz7QJvV988oGL7V3nfxRPgb2w9RErMm",
  "key8": "C5NVfMDRdjKbDxGLnDLo9HAxDkX916ukdU3Giy73kVbBiJJRPJf6aXBdH6GdF6vgZf3EgL61YZW6LHJC2u7gSys",
  "key9": "61kPR6im9BJFs2QmY5e7QMMhp62XUgGCLpqwmCxF8uYpezf9zuENkREQKNepNxR6XfisgCSMxtCZaaFzUqAb5AH6",
  "key10": "4DU4PzGufgt5sz76X9B9JyLrB2Dmyzt2er5kcUib6btsB6P7qnJwdC64fdHSmzZpCB761Bed9u7sjon6v6wFScUP",
  "key11": "VJQDtb1v3XEwRqCeC8mKY5yBPv3BFx6uecddJUX8zmxtqsAHt56jpBLLH6khEgaBTAYndteHSZLetuCNCeRGCah",
  "key12": "3Tng5CPmyN24aWesqFCEPNR26YGQvvoUTsEC5Zxy26yj4LPb4DvtvTH12SUs5MCuLwKq3BLY5j5MiRo6BnHgNsa4",
  "key13": "35N6LDiptMaTkDH5NxSZVcgo6Dk2FKPVVu1fkVnpW6Sbk3W4rfaiW62NSmLaMgQkCsfkFfSswdq6Kp3NLRk3tKSF",
  "key14": "uph3V5MBTNJP6NQcSg1V82w5xcehqB8FyjpfdpSc5Qh4ENdbtGSB6QECjtVSdj5MqGuYbU6nXzfMxzk67YAY6do",
  "key15": "YDSavG5HXjAE7nM3cb3QMSdqpUrbejMs7743XsMFCPA5ogvVeAjzM2AxUbxDu8TmwBEtZvDJ4e4gtKm7jHchK2N",
  "key16": "3QTJn15hN7EaYC9ULHjmGGDk5BBsXxhecLpPQpDQ26Jja2KxX5D3s8jDKw5Yh1XMfAw2ATyomZVbULDhZGCWG3b8",
  "key17": "2hWUMfvHQGY5RQjftsTokj8QW92LfUuhBUwzrm8YCWB4cmBUCEBEUDJggxpZzMmGyW5N8gcW3PKuJ62DcoYeHLZX",
  "key18": "QBVFkp225CaPFNBz2SqsQV2wSj3cvEXg8CmVua9EuBz3Ewu94hHzipjaqRU1csfag3KudScnCNzaWjKM9RaMj4a",
  "key19": "3q6cAYinYGPdVmKvdtsw4CKkx3y3fkvz9N9KNEG59MfdSD4TCJ4Y9WVtM9N4MgvK1fAJf6SFJj9TGUc4AS9GCwa3",
  "key20": "4aXn6j1pvW57HpzSLzHNBv63u3GbE5Dwsyfk4Sp8U9Z4feRGzNfeF7iKCvHxPqppBykaHHmgCd29xQ7VtehuGZof",
  "key21": "57ayAtw4L7DPhyeGa8YbXZP27utudzKikvATaLrqmmGdhMNyyWqLaRcJJVcGjYQkoYH9MfS84mh61QKxACuDEWy3",
  "key22": "2czzREvLPkH4JqEhzCdtFSotpoeiKUTv4u4PidZzh5LNZMZHF2sGUtqqoa48e3QDFWh3yug1juLXGMbuXzkm4gLd",
  "key23": "62b6VHARzGvLbcvyHXaJXHceyiNcqRa3ot1Z6rUajP7zYjJTwVDeNJRNz7aorhDTzzLz1mzZL7h88n5M7whEbjfv",
  "key24": "2sKXdrYv2mFAQGYP7SqE6nxcDbB5t8Tj94x8WzPPPD8iq1ghYjFmCFSMTsGR5LP55svyLsiAa1uogjEbQxoQPCbc",
  "key25": "4YFu3N3ZeDiyZoSFFyCnBGh6XfsAuWEVDTEbDVUPe1ZaB3BidGQcb1fWkJyDsehL6tsEdzmGkHC9FMddj2uBLTZQ",
  "key26": "2BRHUsBWsjUE6UU6eFiAQm3VMp4Q858VKPwDB4MWaRQm2iWc91rS4NX7GV6rU9dRxhjrxtj3vhM48vdSMKvFR9WP",
  "key27": "5oztKahH8c4vx1Dqr3E7GKaTAn4oEGUikGhdd1qc1XfciHTWKabXHoZbD9dWLP8pM7oCX6WoJ2PumXHG1mQQwmL8",
  "key28": "5jzAa6gwZ6BbSwmoQqEBu7Bdv9L4bsPizeCsTARpxD8yT7Zc1xyMakAVL2YAEb6MeMdUc2uX1t4H7qoDazoKXGmA",
  "key29": "3XzwcZNuqXFV6zFU7qyRwn7PpuGhHvygeEcvCPMqgxqyR1FLabsPKGHfzozJ53KmDcrpqbaYBqdNvE2yUkQVcKSk",
  "key30": "131XHasGSDHjuXuU7wgvNcQwCrBrhB4d2ppMd9VjdNbqtjk8ubp9DRosjKPSxWLbedFXnozUVymrVXTTrNpDW2s",
  "key31": "3byv4bSkhPhbqXt25QVVVVyZSUvr8t2jmcxgT4DtXLoikG5DiasaWRTPo6cwdqvVh75kQ2puMc1UKjGaiVKjAVFh",
  "key32": "3A49858WJKAMc3Ax54MxGr8ie5mtcVArDGMfSToEbF4xxn4KLJ462bzj1wqbuC3BMAe2LAbePffUA5UwJYA7pj29"
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
