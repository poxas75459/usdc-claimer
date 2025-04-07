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
    "2PoZt9f5UoAoYgaVznghvYFCyym3iUAhcUaaM6XhTU3qujeTC3HxcAcvJP6VUCyma5rXXT5wWzS5bESztdLBcGfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtGio3YaL2fUWXHh9taSc9Voyy9XhYwRTWfFUoG8tkiJjP4TRhpPnia3hkG8Hr2CersrQVwHXfbqEj2hctBHzVL",
  "key1": "38Az7Trk883AgB9EFDxQoh7BQVdUac1VAo3K4gcKuq5Jy5fpzv5d2WmaH8VCYsmDmaS8frPw392T4oCxaVrRNnnM",
  "key2": "2bxASg2Vbu2wZb1FujUgxuzWDbKiR2tpEHXP1w6936M4BB1g3iLeVLnP64stfWm18kNiUiqUk5nJ3Dncz54UqG6A",
  "key3": "4dcBxCfYweSuJsHvE9whjwwkqtX6i3nRhXuEo9oEKU4xNadxJXcDDr446z2RYzX3Qovhm8msF1uRM9xSbPUusFFv",
  "key4": "SLJkWW4V1tqGQpeExqKa9Q4ZXZ6DYuxPYZqYtE65uCGAQMfLsLmcX5GtvTigbsKzNPsWc312odL5oXWbr8pLbaX",
  "key5": "3BhA7jt47JBwBysTK13963qGkcu3jeJorK8ULvDWtQCEupYHspeRM7P4t5ChLASjyz23tBLL6be3wmrvMatwVXHi",
  "key6": "4cqmFcexJexWePouvD48ghBcXAL73ZQA7fPoZ28Wrxr9WCVxvpxiSQRNkpQza9FfMNfHDbnXSUUnuUebFLT2wHfR",
  "key7": "5nmHZ7TZQPrFoPZuWBPqqbDcP591LDxoqGZEJyeR2PJSKMY84kC41pDQNco6C5VJ8H7ZZqaoe5HSaPi21aF29gnz",
  "key8": "wYC6UKyWUFb9N8UuEwuDtm9DWfvxc56QaacUsiQ3fJwkfSWdSXAAhRW12XbqGtUkmQ8XsvkqAtjDG25RUAHrcK5",
  "key9": "2QSTfq4Rmz6fVN3y6rw1hDaZDffTh9W6YBTRfRB4geZaTBS8kRyZfbtvouzdWrwCKaVqjvnGrYWwi1hBQedout9Q",
  "key10": "YDSXJL5vBwYhu87SjTbFBxcyqbe55BcEuS9RX3rRKj3joEaJcvwygiHdZUK1dT1YjFMjYz16b3CMjWRx254vSMK",
  "key11": "3ZwWYrZzr6xAswAS3C1hDtGWNb99uR5dh2PgK7P26NkkfL4iFtHSduV887k8JnpGiCr5RX6Gnez7oVELRt1eMNGc",
  "key12": "5E6xTEGcx2uHZSFemfFHyLNmPcuRXiDmzgNafBVfSiRJRVkWbqnuuwuiX677wNsLXhomJUTYvZ1URXCBdd2M1Jrv",
  "key13": "pUDhNyq83Xkf2D3xyw1z4upVJpfuCpcaGpvBJVDQzCrYDG1LbVNUAdwWjzZLnuynLfeRXCfBbUj3CVu9M2JC2iY",
  "key14": "3HmaHRErdFY8mdt9ppU1RQNrZ3nAm4viX61AF7h8E7qT61wimUBobCCLtM4NPh4zampaUJrMnFvJ4A5knyXt7fvL",
  "key15": "uBZUiau1YDg9zxwqtGTKdEzCYBwuVm8SNZ6YyW7g3HkG3ksR2on7mycNP9fzSPCjgeNVubFQ8cX3RWzh9665Kkx",
  "key16": "4VEjPtetKBFnJNneU5RTB2QMotfZakMB9xzpoUWN2crW6ghGWCqzbd9kAqPGk8NSJySLbdy6iikwd7p6i8GjSvrL",
  "key17": "2CxGNn7Rhdwpiwbp8CdWN7xQzgJupx4RsvqfWk2xknJbxEnRmUpiFrwMe4uRgAMunt1u5mrJSKnctMAR4nZJRFRW",
  "key18": "asrKir1DgHzrywYYQWjJMLrxhjyAjfa1XJmLPKUFggzCCsr6oEywxuUFE1oTr7bHJev5EKmNeAGuQLoM5UiPJGe",
  "key19": "5D47pikxKdZ7z22Rft9DA81mBsZMZaf9wohy21d48XVFJ4p4rCKMxW9ieHNuzUh57RryPZELKg1Whgpytsjs16Pa",
  "key20": "raziK1uSjMs9JReqqkvbGEfKfxGoKFY3iXyRkrD5pacBSEdvMZe4zzRhaDfHUB18As92T5MZyWNBGXan1A1apc7",
  "key21": "fm4WSEnsfekARmntpuHtmyuHNdm4abTaQfbXbEURHryXLWxkTrmdZia2j5SvjgWygawQ4Lq3kXuaENPEjx6raT1",
  "key22": "3iZvLPnAC6Nb4LpuRPj6cK8e4xd6sCZF825L38iaaSwqj9CiKDZ91Ukx43ZRJb3V3W3qW7w4YtCmkkijdXmKBn9x",
  "key23": "tKpWEUrjnV1WdK1uC2mvRrTmnsHtiqMWEGLig3USHgRqV3FxToqJvk3djwJ94rkqoFPsAW8rmJHjinR7P3WKqcL",
  "key24": "5TENmg2PU2uqAS4LF5zH53Z8xUodhTf5AWbE5YaeHkFDmmH4bkAjd8HFqtkoYkDCkyirCauBh8J7rVdt4LmEQNkH",
  "key25": "26H1okXW8jBSULc4z7Dzhvmeegy6bFCuPKY6vKD3hhxri2swQSSvkxG84nW5QFGo19KSm9JWESLLdYtUehrrq3MH",
  "key26": "5Jbsm9LM2pwT5wK3rjo3HJ9U4WtM8B6YpmWSTDkcuJVRXW6CF2scRt11zkxosNiusV5UAypZ7XUeTYV1D195BDc7",
  "key27": "224qLrKQ5ZpWBaakYrxs8e1E8q5DWXQL1Vxqkz13xNUZqt1vtbSPdX1i2ZkNWU51PuHdH1TKwCAkQ3ngKxjPvr4b"
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
