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
    "4D4vDmwuJ4wbujsrymiPd6AHovSxsRyCBuwyYYgH8h5opQkZfsfznhdbDkWZd27C1sVb7aTuo62fgLcnFJgxUBiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZJDKetBus7xQGMzWoYxPxTJGo4rjVEQiTDXfDDi2UsCyn77NDMic9vs8ZUNCSp8Th2tQZLPS3Y5hXNLsUoeNhC",
  "key1": "4FevwRi6zipxjRtF8uxQRTxQMEPxmtvRF75xzZrxgQztjbdSWjX2qRWWhN8MP1gPDF7V6sEhoHvVK8UwvF2JD2up",
  "key2": "cTy85sYFK2djUjvm8ZJfv8i2SmwbVEx1ukRKC52X1eQG9ryDvqGS6vYAEUhtTaQEMfeSg8oT9W5gd9awxyFz7Kq",
  "key3": "4QNEmp2nGtk6azFsNwADrXzFqauRZvR28gEE8H8Qf52fDoTspNdr5UWrCh3TYG4zUtCUXEv6JwV7ydhA1RM3PLnk",
  "key4": "28siHK4Ucf2qyZzPfa4kybVMV2MvuzBzG85b5gmazYywAaxk9jQggZcC2vzJWqzw7M91xMmRQeLyiUwGwypkp7R6",
  "key5": "64UKWdripdq4QafYSU5cFsLTiBonoZK2xSsGyJXZVdnQSVJqMb2Y4e4NzyUWwuwuqEEJLN4t8yz1NtQ2pQawuoad",
  "key6": "2vDk28JdkaJCuBNBNL2LL78SVh3d54A4LM9SJwY2y73WHACeLYZGWiPa6FR54CuptuZjzkkRYyo37D56phdFnLnr",
  "key7": "3NAZ5jDS1FgqPp1zEqUz3gwhKGPgAb92eJBVh6KkdpRJB9h3Tfw5wciCicb7VFZkRSJ3dPXBCLAcmfQLRYLjwmNM",
  "key8": "4kgLdnbhgAzL743YquPYfvG2ABLf7qAL6HdFcDzjuvBq8gRnj2AjaXPzuF83k7cKQtVR6V4NQej4eBduQRgULuAG",
  "key9": "4PjT99ANDkbBjs4xZCoScDVczyQgndWti7jWeP1EwKkr2JsZTMX9jztspcxV5VCCoB424ZHPuXjqAJ15XhUBiRtP",
  "key10": "4S5i4L3bwcF9UZtUFo3BmjSFazPeGxoJR5L2Bi83UGVYqPs5v3qTg4M5NubqQiECqbKqTyBGNTKycjQ7hvKRaPPB",
  "key11": "2MqCKSeJfctEVU2VHwG46W6zNyiz7iefmfn78M6po91p8Cu1EKMAXoHVEcijqJEwXQUJdyzLXdcf1pXAMssVoePM",
  "key12": "4h5ojcRzopvCkVoEAcUbjo7Xy3xjDDKpP2RMnZrpiLk3dYZK8bMqLydUcpzbpHyRZ5HFReQhaaUN73mbu2KTqbmR",
  "key13": "Ce4rc5d14FbjD9eQgLDKG4SrerFLGeTT3bKXjUvAV9qJMGSzTpLLe1V4VCm2k4iNk72i1WptEpRSwfPQp2eVQ7m",
  "key14": "2XZ3MPLa43xA29H4Q1csqmPd91b62emv1o6sB7WWHNn1dUoWy66EH2fZrwzB4t3Wc4jSzD52CkVcLV9HHakyYPdn",
  "key15": "m6EcJSX1bKQfvwbYtSpxTufBWsZ1V9cSEx5uYAw2gqzDKJ6raQF8v2sy5r9dqLDbEVaH3cWwe4LhbNGzeciLkCp",
  "key16": "5XoJeFTkUk3yxPNXTWX3rtQ7M9aMSkv9V4XTDB11344boVjuad3HcXq52msxocLxgkCkbPR8rXS7YT8AxwJ7uj6j",
  "key17": "3Le4SvwCRhRLnn2NEWDmArPkCBNpoMFzaLbRb3Dor9t5Du53D84CGe4gftzjwwy4iw1rmeTSWtdiwkVrcyBn3EBr",
  "key18": "4ULxWzNonW9JXKjWNJ9LDLTteA3uSHJpgV8tQCMRnBLEj82EFPQiYyaTqwnqgNL2NrYxv1gdiyfFS3KuEELDNEXg",
  "key19": "5UnTzcg3ScEN8JnDkdBa9DYquwDP6BU9gkKRE8jc3x7QpC4NpFfe5VEznVRUbQCBT48eg3ryk8McSYpJnLaWMCNv",
  "key20": "2RyJTiDeDrpE6t7Xv1AMegHCqME1k7XCrUsHRzHEQF77Un5KCL2QzUsgz37GeKv73pNGu6MvEpmTsHa4Txwqsrtf",
  "key21": "3u1iMvHAWjQdfMR4vZdAkpKiJgfhVwvskcknJS9v4zy6hSU1CPCy4KDX6QCqNrEFSPEgJMoSb4AoHWP1c5AHAgog",
  "key22": "59gCq7M1VM7TN2s4AMvacEaw6qVgS8RZrjKUuEKNC7dfgcyTCfcF6V9LTwQHGUaxM25Ug6inYdjiP11ywuqsqt7N",
  "key23": "3mTL6RzdnBHgoHjjUN8EZfdWGyXXbfmHtHLA25hvYaHrAxArb5xP2mgH8WMF1AbLmjdKgLmNabDXD4rNShJ73sA3",
  "key24": "5eNtZiQY8CoufYfoYiQ6oHWZgvL1B5KFKc8XjvREeuQoKUKFfVtsJ4XAWvFh7keGyFsh3BmEByHVCrebRyZSWfC9",
  "key25": "P1MNmjEMH5iBbHqmnG425B9Ab7J5n9mHLcmNniAFUCVJ9nufeG3hzf3invA92NWjMPLZjdbe5zkgp6cyDpZ4csA",
  "key26": "adE2Yq6wjJ6nr5cp3uGegbpWmt58g27Ko8Uky7kTXCVfZhJoDg2YwuDJKHmAG61smMVVjSw9qHowjXYrzM27gDZ",
  "key27": "5utafE7nVtqgqpJ79Amb3P6oALZGcHSk7VgfXDj32tC9CK4qCfsPD6f8JSsUvjteoTLmqdvKN3Qgdp25fPT7kYkF",
  "key28": "4tMHcBMsPTWwqSx7QHnFkBtBa4h7xPNvxq7LEK5HaAsBhzKjYSWwD5F8STZtqwRqas2mHQzZKBMgMeRtbrmsdLCx",
  "key29": "4Hhi3H7eoedvSnKR2Gr9nxh9rkg7XnkryQJ9teHf4n96qArSJbwWqaznYdrT81KnPjFEuoDTEpDgZuojNM4phKHB",
  "key30": "3YMKSeVZLPw7KK7RqY1vo8WLmcHvXi7AqHfbVYb9i4bbmiMJikdu9RpxzvHK66Q8vqGUrFDg7aVZBfGq4HUnRZ3x",
  "key31": "52sjMwJWjxDQqSBzCzwrBnkDFMYsRsA3Poce1Eff296n3REEvMUJjpfCztedbzywsTybGQ2PoN5xWjhuKK22Hu9f",
  "key32": "4tnuwrsjL6rp3UVmyGtgj6itaVWZhKKgdY8gRAyj2qKa8qziTjRrCoFi6AWGGqgg9BHYsFDwACtBJSdUFdEoGVu3",
  "key33": "2oX6sqS6E9geRK3mai6A5CW6P3wzegTZXDVkByfScT9zvfkymB6cyEHpeDgPGdgaGkfnckEnYt9WsEn2UzuMz6py",
  "key34": "4E5oisv26UWr2cogNSWP8chrSMRVCGZEujzL5HSuixcHNAYmwdFVhhJr6zYnuL4vi2o4Xu7Eq5ETBAsexGdJLjcf",
  "key35": "37MD2B344gkRUoJbXca3WmyBK6UnkYwmNSas1brfBXzmd85srF2TEPic5MQ4XFMw32PD7ps4MSRjGXiUtPx3A9bV",
  "key36": "qwkrKw51p8yRMTsFybC6zoJUscbR8kT8SqrLgYLjauwzatSNWm7b9mDU2J7HfyvzHqgc8yndRnzQ9sz3pUmQF99",
  "key37": "3AZpo42t9mThfGxVhVspMy79R9PXQmUwDC2XFjoKHLubTciSNx95fQCWam9Zv3V3TC9nnfDswzsjNo2bSLeWy3eF",
  "key38": "3LHjDJrGdQTTyCojt7DfwgQertuhbds2FeBjwT6DUE5BeEDCgm363A9Gk9zTqrhGJ5j9xS8V7wMXLgwgzNuRY27T",
  "key39": "32mDvsmAwyY31UsmjcQH9CBgskpb6oHGDjn28yLAq7yUTF8PQAMvNVGmv3veGfcDi6m71pFXowjF7dJLK5TPaCXp",
  "key40": "4ipbXarQ9ecJ42M5KMEVFAmEjn2V9qkDDLEBDygSAsvGAjF9s23DTcteLfArtWz77GhofNxPwD9tjvhQQr6UTRWB"
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
