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
    "4CcSJxg24xyzxcVuL6MLSeGc7EW1NbpJtHH77UqKeF1mF7HraLLHWdgJQry9BNpQ5UnP1edUqqiRW4WXHgXwQsYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coyDL9aPnSoo5LTD9YeCC7AWEnMLGLFMut8jJQqhLGZEafh78ceqG6CoZX3NUBF35QAUPwoRGGYhXJs7XKmoqs4",
  "key1": "4TLUC3RDntNksZsvz51CL3Z5U3SYNpT5fnoboUYviZchmRSad4AiRwzcrShiAV1F9axqKChbVBm2v4ZWNvotKTtK",
  "key2": "4bCLo9HAeTkjdB5Dr8rkCPywgLUrYzyax8rHgCDxrHm7F2oBrgoZW1fBkajmg8NtAMQqrVc6V8oA2TYxd7sb7Vn2",
  "key3": "wrP9Nn33yFbK8v1Pa2RK2KvTHPd3qZLa6iNeXM5XAB8ihuikzd4Gdyvy1ksdwMpeJ5cNJ7ZekjeptLNq7Fu45vd",
  "key4": "avSbgFt1VBcVZM55qwXN45nmA3evNNxdESuzBKjDWohX3tYFrz2BhPjzAHa3hLjLjWSHCcSatXbPacPecrLERqD",
  "key5": "3cJDcv1g3TmXZcZ23afnBX464tErGx2icBPwhC5X8LGWoboGomX7d7nYMXirzh2V9J39Y55UmY46opJzZ2ERSJQx",
  "key6": "5ymaf7YGfCUMwi3CxpfkjEtCCGhksuYrCVmsUki4hsYXKJctAgZzddGMJfb1TdNRD1ksGo9ptyqL4FtGqq96ayos",
  "key7": "2uVy28sxRScA3QwTsx6Z8UMY6VPieBSXMRNFLcCsJmJWio5TqiGtWUW3x9dgV7KMhLwEEpB2T5M9nuTG3JYM3zAZ",
  "key8": "3d8Ekuy3HykJFB45ChbDD62ZQ2UrR7wmUbJEAgH8dUkMwJbkA4E6UxJSbdqL9TpeznQkexXx15VA6koWgH1qPebz",
  "key9": "2NBc7ChcfpgUKnJ2ueCZM1Vs18EFGNF2WNf87pkkWvRDC8yq5kGbvhMWphB41oF7tMeTYEWBXGovC5Pgd2Swzm1u",
  "key10": "2WnUPavHQXAZ5M78ztduMfCUEqkVMdwXSRgpttXeoCnG7q6wFi3dzhDFCF1pBLqhg1CcPqqKfd7rZoL8gR6r5jWc",
  "key11": "5ewx4VsVJAhdDvXCDFXe7g5WrvP7vVdzsPxgoUxq1zC5L17LQLKrGqMqdmj9UvbUoP72F38A9WM6w917FT2TDPKt",
  "key12": "34ifS44GddMXRHRa5NxwdCJtBs121mrHC9XLZE3CWQWCUVGPtPUq9gYsWzcVAXiV6EFJEgiS4D2VoBqXWX3kbhkr",
  "key13": "4ah8mYRCqCWq8UeTDUb5PA7Mb4sz8ENY2eJEQMVbrFGfjnqqh6C7NFcwBYSkUKzqCjDVcaRLKBWFwXbsXhRM6zMe",
  "key14": "2nJPNXneMTbSvPAY4ZaFPKowHnNkRu9LLzVJ9wKbzC61cSHt9W2EHzc8dLjTuKFJykcJMgSQBnwy429e5YfxzVZV",
  "key15": "2GoXnbuzFHDDGzaFWtMEevBUfQ27VySxjegLEfuGdzh2CXkW78Y26ULwkogK8TypH8BfLrw4SwNzJqubWtCjeu1o",
  "key16": "45uJsD5gqadZZbtzw26i93h17TrBJKkqMw6c2G8KZLTTRb3Ef7VefK1oNfGi9VK9n73Gdyayf48NmQCuM6pJj46B",
  "key17": "5LUTKZRG8hSnJ5gJnEfTg4bhY9jhqiu1FiTMbzDTPRvE6k2wHJkWZ9Gxq32W43EzuNhB3gMboNcan3SCUUR8Z5xA",
  "key18": "3Jp11ZS4KmVob8JSRVytuRdBBFM9mJQRuHjMs5YUH9P73iFtbgXzhZ6w7xbZbYpibYtNwWbV9M4X1sZsjU2LPzGy",
  "key19": "5AtX18S9k1Zr2iyFeiKVcmssJwGYfYAD6QHXsLQHGrCBWc2DGGnE8Jz3Aj4VUSs1uUGdUo2wzrn32EF1BEmLurJ2",
  "key20": "2gWk45c7z7ejuXDKi6Q4jT2HwwiFy4jRvHWRDyyVLrcziwdmQv7PwGfYhS69E3FZNywN1CgkQyGZTr9YcSHR1xDo",
  "key21": "wy7nVHWYGipgfYzUNxVjUNbHG8tDXxyHuht5CANuJei9pp9Wn47oxnjNmhzexeKA4gYr3E4G8yKyd12DrnLw3Y9",
  "key22": "4LAABVY8V9k1rBTDz9tqF469cquLvjPgugJx4mcNUSgWkRrwNQe9vWsojTLaW4ybQ3HSBSD9n2GUJKithhcbxqFW",
  "key23": "2gcpeL2cP7G2GndMtVsah9nmkKpiWkoLuB8mRjcyj3Unp129p4zT5kxXoteuK8r7neQZhjtmcQQyEvDdQtXPH8VV",
  "key24": "74eqXJs7jNXezELDpZKhYcnDMYgJRAyB93zCDnXuKnVyGfdZ2RMHLet2T6jNFeg7M7Lv4BPXsHgwFAe6YcLEABG",
  "key25": "5V1tA1y5jzbZ5GdiupvtraeNcnbmaSga3rUmk5pHR8tHi7jDHHdEsSnhcMZh5GJhcjZkcWCoEHxENRfCsfzmQ6RY",
  "key26": "MN8kTfmF92Zu9bk5RUGGpWRCBbvC1qNFj5PNsABUzrUcqNmDdByMrb8s2PS3C5L8aBgCquwrk3txLyBpkwF2b7y",
  "key27": "4aLLhGVqrGgmjqL1WzM2eURc73pZZ2MuV1VWLcjWBiZTcnS2zzySw2hsL3tvzQQhJKdxivToxTLtJ2FxZ6wZrSbu",
  "key28": "2MoPwia1zgcVkmomAonCRQNEiUWDWF6osKGZb61zCTwsZWpkkXoXpNXTEKhDWi1wbowGPRcYLWaWHRH7h6BSJcDN",
  "key29": "RbqUAvTGZsJmp69x8YpMKCiL9iA4GzVuCm7XgGSYu5vy6mQUoumWwTiSMxFE7NwHNgkbMVjYrzvBKwgsyh7bmMX"
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
