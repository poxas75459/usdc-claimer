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
    "38N25NKJTCH15nRs6wmv7Dpz4NJPm5Z4TNcTzZ1cFQLRsMypP5xvHEeLeULQuh5USTWwhHJAdFYxLpG8NQbbUUoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8nEKPv3rJrRhSiGHC4kLyHT25AneLoR4Q6uXzjTr5BckHj1bfkRtVu9eKtZyGYEmQWBmZ8NG5s9ukZVoR1yaef",
  "key1": "4uwFRiDv4KT6Pa2L4aUQYnucUgfznpFUefSN4u7VGBrrgCLpCtFbNb1YwyPpe5HzpLyn4egVoheRWEz5o5RYHcAc",
  "key2": "3tiTbLtPMdQe5moSZqAZcQdUoW43vdGi9ZBA4pSdvfVR2KdX18fvqZbcRqk5nkAmGAUz6mCfeEf7LqycSKMLkYif",
  "key3": "4i9NYRYxnwEBaby3wrMWhVhgr2gvFhq7WckqeiHBZCH7pziQpgPoRAsWG63D57bm7tzfXmWG3M5G4rQ2MsSRiQhi",
  "key4": "2USfCpfQf8ZJbadxbShDn7VafGu8fYiRSZhhbSiKjYgmSHyRvdNjecc7KLjNbTxk6VGmSfB4HU47y3tVte72cHwJ",
  "key5": "3iEAF1ax9dHFCVfuo5gU6msAm2Y6RdXfz9ArNREh8Ld6MqSQEY6XjfUx3p6nFeCoJgagwuF2wXunHaJSEiS3U9by",
  "key6": "W2ug1DnEyoVLscvVtbs7YhbsTmimgLk3ZmT8yYEGuYTHKQND2U7GRdSqqaMXgNPYxFJjb83SCuySR4RAfuJHYTH",
  "key7": "4JTZFiKZJ4SfDcLDyeTnPxzTsFXqBotWNuQ9W1vWLP7h5x2bCFgu9WHZhCXX2KC5xoNiRF62vo5QUgwWw8WnwtvX",
  "key8": "3w11hNVhKWJ47nvciwzkTn5G9Eo4VS6cecjfKMbFBojTk7hH68Vg5HAKvCzhCkckQG4G3HRpA7v7ZkoKYuu81N63",
  "key9": "22n9ytCMHHHscJ5DbgHrb95ue9V8qkpy6xbaC2s2n5aeYSoAbWoArQBXdZdZubr4Ry6GbXY4AFHyXbdWtVDtC1Vj",
  "key10": "5PS2m6nWKhCpuNLdebEYDFiANRonh1sM9Z556rujpebGwXbFbxeERwpPFHi4KtjMhGQkUp4bMaiPg2aJBhsMr1zG",
  "key11": "2xyadL5qxjmqaSpm5iCPNbJ3kkW32AfsopBEqG6ZwzjipVn46idQpc3pHkSQLayYrLVmxeM4rKC2KjANojp9cxiS",
  "key12": "4sGKyu4nQdKv6skhPMWjVch1ypjAvnXNmdf3QF9AmyADn4RkyrJVCHtC1UDr93VAUF9qUP7HrZSJabv9W16qDHjw",
  "key13": "3148FAt4HaQrTpfncE8ApwGSFykWvVXqzZNdU2yXabMEfvkQPttaZiw8BxCpYtqYdowj9ic7FTxhtFTMptSAdfrr",
  "key14": "39euqVNwBjRV3jpT3dTSMMY7UdH7cY6qRfL7ikGg5H9RvGmdEgaFdoBU9XrSiXNtEvjNEQDRjVZhtn63HNjFnDLz",
  "key15": "48aXUrMs3huxtCq4mKcdsDhrWST8Ss4MnvwFoACsQmiepZ8Hm3isfW6MUQFpmiKE9s67qNjGYzksq9Pm5fLEtDCk",
  "key16": "3QDYJDEzSeGos1qdHwNQwEBc8wGASD8tDR4S72MACP2cNBaBreJrMzvYVLJdyKYx1aZGq6XjH75dXiQE4nz84VqS",
  "key17": "5tJQ4hg2HUHEeRnRfNAgYNBJo37XSHXZFW2ui13P3d1ezCJX4MLVTTAnDHfm8aEfxvgam9EBo8EWw4P3VEKfsLUD",
  "key18": "KyJXDvN48ZTnHN8tkXdce9R1dyKtxTxVrwP7Uw588r3EM8vQMsm5RyCUbPZHTQof3S5mNQLcaYZwm88VYEXPKAC",
  "key19": "5ps5aPTwMH9tyMY4XTVLypEg4v1qzmDX8o5LJ9iDXQujeMtxEvj85H4xvQGEPFW85quuyMc1gAdTbgch8BLa22rZ",
  "key20": "3UAu93UFEcDKwHk7mfvpChUh7xSvfoiwB7mYHeg56UTvNcTk6NMFuEcn3bysgbzwcamxfYh39BEhMnmvUFQmonCT",
  "key21": "3QAFa66SXwb1Vdjoaw3tmGx7u5Y2oqZBf9tugX9WEKmkh1s3kumiKGwYH4C3wNSppb1xVoP7hs8W2KB9rokoZ3EY",
  "key22": "5sVE5G7J2qVFFgXdEV4vdREsZx8YmgyiNGxATqq4b6wkptq9583eMZdqYeu15BSEvohGmLfnWBizkPw58REVbtY9",
  "key23": "3nuAZtECPxu8dqRVj7PNKwvvmpStUbZ5XzsfD78wTaZaWk2aEC8R3FXsxvJB5CVTcGCEmGLcDyDwoP2jpNw6dNbx",
  "key24": "2cqSC5Bo2TQaCZedaxcChuSSqRNL33mFFdDQj3vMYFXmYVwD6mcKzakAjpPhFBXAbYMYFU4yACBB45wCyor4Q2V2",
  "key25": "XNMDydXdzb8A7nLA2QCRmDgh43TjzdxLn8xmUCTw9awLPoerJsiZti9McrkhdTNmxKABxM95RtZAAv6Nf8nFmBB",
  "key26": "5pVjhiAacdnqbPxq4h7StbB6BBvcYk8RDahjsA4ZY2ELvkeBSHg9tLTRDusURgz25pFe2VSwTw4wpGbyJVptJwDA",
  "key27": "VTerbC3fMJZqaoCURMHutxpzFTAq2hZ7oEE13dUAYGpGsHmkNcqGDhr7HqmuY65MZiK6iQmXVTYms39bFCLYtSr",
  "key28": "mRMENNmHXN4U3vCLrmSffAjaep4BbyKKnsB6x6jzoURT9nuPvDSh33mSEsN3hHW7P5snbupLKrKk5vV3CVa83bV",
  "key29": "65d8dGKN8P52bTQXXX2jQgNqmFD2zRhUF9mZUDMLvkBtWzCp1W12Lp55CKV8hEMCckTzyhqpWn5dFCnzMXSoNAAN",
  "key30": "5NT1G4UeGxui8DzCZpKRYTF7Qx8o86xLjGEgZnYzak4CzUVuieJSsJcb4pGr2tXqpKCQJXUz5zUcE258NhFfwM2G",
  "key31": "5FZfjCrux4fqeKA2uJ4maTjMYPgSzT3NhQKQu92D7Sn3ivjaqctnHSbMeNGwKPnDfDWAEZNNMWTN1KVZWuCGQysM",
  "key32": "2xxGWn8vmctjy3y7gBHkYJLfj9MjuoeBcqBzTFTgbMsGivBdpwmPrHYbygLxNmmNUnCiMFD3fc38eRdjHUBVvWSG",
  "key33": "5BYGtgeKeWKwo9J2d2b6nLtfssp2atewJkpfcrsGv1zcxJwmLpXbbjfL3J7bteax8dEodmMW5xkBbrAZYNAYSvRS",
  "key34": "uS22X8cRWCQGNFoHJYtsZoawGBejYBaYELVf6yUaWRSLx8AFzpCKHwPto1XYMPNbH3q4aiVbGTFWfq7MGiESEQj",
  "key35": "4jNdV1Gab5hJzwjPwnKwqtxT4kPZZvVBpuigVLV5xAkRTmZGccn3TTicDx8grcWXbYhdzSU1oKTNaeekAsSJGLeB",
  "key36": "671Xii8fHDqC8C6mK1zKkqEPR6xKodVjKqwFBNGC47N5dQmbtFoj79XMZ2Mmvy2c4Utrw3TW2TTCWBg93esA6e1R",
  "key37": "4D6GCWk7b4pQnqEB4BXVA5ERArqk3MVUNVKUVPn9soMuP6YZUx98fcC1CxAXFurdLCQSGcM7vDedhaDkcHAG6DjU",
  "key38": "Bx4HVp9bSxFzRTDTVK1eip3pjffwcRupfvtRbkMHbVVYsDqPcWRJb2XbaSxGQsSn8PALEnA8HvRbiELwMXG8yJd"
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
