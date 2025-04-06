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
    "2TXXoYU2oJs3EwFTBtRfHDBKV3KUS8AXasZyLgBjG8ewZrutqJwww9cG5EC9suVCTqw6zfQzQDwE7VrZX4EHmbsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TeQgKicZqPiNxvreFGtMPSSrqgLVUXrSMUfc4A3WgZNkayKVKrWCJWBsWaPkDp9qT4fPn4KzBxodu3CPAJtrJWr",
  "key1": "493SYrN453zaBWHiBxkb4EvCYCZ5fe8f5WPhmrxBvLdAbKShA6GiyPEwf84FVHv3xXykeUPrq8qkUisLJ9dDGRDU",
  "key2": "4SKFfyCJJmc9BAXttveN1aN9WJ5SAzf4vaR5c16qu4SguNnVeZt1ogYy434hZePFd36zRuEDPLLS1D4TkgN2iQJf",
  "key3": "EBxjq147KTYUhx6Cbn7YQyqgK2HQKbDW6GqRt6VayDmMNsuTDzhBZaCEnrAkJ6DdHAzChvkcmiL7BuPTBSGYhu4",
  "key4": "43xTfj23xT3kn4PfUxs5upm4sGR9o8c1CEKnSe7PJKUnjJ72w9qGK4FzX1ouAYUtT1DHn2KmFbgHdpgHNLAyrgNv",
  "key5": "2qr1ozzTcj1n2NXwuRT97AD8JUm5PZzH1AZYnETDjBftVp3kPLgZB4RLi3YfQju5D7npEpYXniZQYADzjDdBCoj7",
  "key6": "rAo7JUY1vyNvXUceDjhBzQhWqJHBwYuWGdXqnvD2To4E4zE3cWUCaify2zhAnTDDxVoBFM7UXyrvcgzHzBVjNW6",
  "key7": "CUUGevBro9qsAJ2BBp8Y76oZkJit3AocGf9WQZHtBuJqknXzzN6iQgSDSMDWkpCbi1emc7mLSTqUBHJTSQ3JbMY",
  "key8": "2MwyfW4MnzpXY8bsXMmkXNPDCeuP9saHR697AKP2YiZdM77hswoXrgCV5eKu1sTGXq6dGjyFudYMZ61socfdbY2N",
  "key9": "5zFzEzW6vARdk7oai7LQrYmcWPU1GTHJFu6aQC2mumsQ79nLM8fcnuL2wPJxUk5bdX4sYUMbrEbyG9Uc7iqYewfT",
  "key10": "FZqCkdXXRDVQ1e1FbShBa5uz8gNqqK5eA9sPBistWzDYL7nkuaHvynoWBVPabFY9ZbaFPRrwsb9NNZhYZbK1sAe",
  "key11": "5MQobs4P6tpNm89Lc7X4AGbVNSZVSAnpyTZCwnGcmchjoR53n1WAZmbMMmqqj5zppVKJXGXD2THnXvA8DUh8Gu24",
  "key12": "27g6wCoohLBcsUMa77f63zkVEwTKaMuV1WNfKiCeKFjQvkqpywVyWvBg6WgLWbShzyxULmm5ESmBkEyuvPs6fyyr",
  "key13": "Lh28VLCxV32zauVFHRWaZWZeBMqBXAHuL21an8tto9ugZ9ZrrYrJUx55ghTBJ4QjS9vgktLQoPLFM85PhfjB4gw",
  "key14": "3wYYSbFjYbybn3zDFCXK6BntXuBSaq4AVSwvQ6KAXkkAnuPb6R4VVYRmw2jRR1tXHrScZnPvcbiSZSdDdChKddmv",
  "key15": "tLtknA8FtqoJ9m2T2TNuUjbzhAR4VtDUNCqw1KZhbXqet1yJzRfTaY9RqykCeETp8LKM8vpTVKx7xrbdoghptAE",
  "key16": "4YNRzrjewSVw8qWbjmBLfawfrw2oTJb9uUAeddHJhfn2UmsyWUPFV79DAskSZSmpWWVg5bdxDwuD8ZLNzENptGEY",
  "key17": "3wYsA6rTowhPJPzfYYWHQg8neWuTXz4Cy9jzfpPAZnbZxYpjQ6599E1sdRt1o3FLJphSgYhRuNu91Fxto8Fz8oXd",
  "key18": "5qhfNBKPbWC2SCXjLwX5hjrs6hGis8X5g2Ljx3ozuqvbKc3yqkjWF2hJFeqBqB9xQnUWVLY9RZxrr28KXnbZzUQ7",
  "key19": "3qSLgCfiAwrDrt9HqRzrphDnKeF4znGH3VPqZu5zF9KpZt329ZTSH9tZ9xvrvMagb2XNMGbR3foCmeHtGeoTqAW4",
  "key20": "67WQ9Sc9YgoGWLPHnhUc65amYqEuUYFY6EXt8bRMDK6KASpk7HL1x6p7bfrmxt55yymBWFpnbo2VB6cKVippW2MQ",
  "key21": "2Tud4kx8PqJC1SzKsT77pzeWUoMcGLW5KXvtHmpvCRebrZZQbxBKrnUsmUzkt58HfPUUwDpjQnCj9GQ4ke1RgRDG",
  "key22": "2vHCSTisdrm52DtzBU2VWNMHPPer7EpdTmCgsdLZ14RANWr6uKyRukefJEB2f5vRL8j7jCbjqRPyDAfEJFYFN469",
  "key23": "WgQmEQWWytWphZNtpEKp2iTCDPjcfQ4Tusj6dCpSpjuXKdMZ348VVjbMZV1RuUvrgSB39dnxfizVDpDyQJ5CehD",
  "key24": "5B6xjma7hW9WH7s7vcRFwJUNKTSMYf6LZfWicEP42ZuAutGg1JxvHrA55KrhyoeFXKaheJUhGqrVmtXvKcZrycqY",
  "key25": "4sLmegbUgMHdp232upmK9Ke2ESNecq41tgi4LQXU9FyRkEFuSAm9tPzPUso2ZzZiU6pMHFMbF4Vzhii3ktG8Pf9b",
  "key26": "5wD1ogD9jUWphbBDZ5i69htvEd3ZowXuAXAesmPwpYTqhtynNwhBVz4r1vBUPCpddWmdzttfW4WrgqpNLQBe1G9P",
  "key27": "SG4VbZuTtTGBQaiNC1PCcZDKQqkuJG6NAJgDedeTr4kesP5bMDvEaVKCALphuu6Q3uNCTVaTCuc1abs3HEvTPdX",
  "key28": "5mUAjq4AosCxWiAgLiU1ju1XGv9P2dQyPZYFfTuxAc7MPjiRLNkKVBwAEnuLxAWrZ9kz7m7qrM2wj3Dek6hToxJK",
  "key29": "4BMGCGXA4hDk6dsmtEpUhZ4WdqEoBpw31MRQ48gsQ861oJCLsKWbfzVMLSZcz1q4ApQGvHARRc3XQnWjTkkhk3gk",
  "key30": "5vSC8FdNSddk1k2XBb81EtrE8A7TVvUW8qwizrkPrymyD83mqopyxs4hkWQZTMMZ1pZB3dTQuWDSLe6q6qnbsjCc",
  "key31": "5MeBxCD2GPH8rKnEeMEpvtVZywhPhNTwNzfAozfB1jwbuzWebAguu7diqph8PNRnTEXgSUaVsvPtGHPQtfpcQZtf",
  "key32": "3nw2mbWU1ZFaXcMWENZD3duHhNAttjtJukbGDPuqSSTmKUdae4Q2Cr3ozEKiPqTM8Yey6jRbBVUpz15bsXimKwRq"
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
