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
    "gSrL7p4JsoJVSS49QyGJ3EKhMZp8dB5ZeQDJ1Zu78HFkLpz58C4DcX5HysCPfiBXbhfaz5onnWvsixzmDg4i2Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1u3usL3D6gF8yB7qMeWfiK7GfQM2VqMjVeNzexDTXiDGh52ZEACHJhqq8hjcyacLAVwYHQz9L5nXMYaotJQkhu",
  "key1": "241bJcqzSSBQrsE6LbpSSCcd58cXyMDL1eadYz1F4MyShaQqCKwaCQF7JDgwdwehsBMKG7rJoN1B1uABojrQh5h7",
  "key2": "3gymVv8h8cVJZizBLdGSwDrpFjarQgbLTkpHRc8rJ4mjAdTUordsogWWpiBQznsyoi47cxN4fNgcMnzcdUq1EeC9",
  "key3": "4a5gvDQHVtZp1JDTEE3Y7XcLd82C9tTeMkaxYFnF1saQw5rFZm6jc1aydqhsS612TwyQtvA3N96YUpJqwjeDDQED",
  "key4": "2s8w3ScuHUVfQXwbwakzvV7A9Wjphh5Fky4zGdimusK4Fnshtp92nK4FgLALFS54Ykjnq2M9bMi6ApxPc77U67zR",
  "key5": "2HB949nwxri5V7A7gWYF1ZfFaspkVDLp2DJ7Ze2yYmYRzJTXtAV8mxsbomHjaD5GAne3dJh6v4QAfCXXCiaNRFsh",
  "key6": "2vN44acPr9J2VZeV3BkSUnnEiTRFzqnG6vBY42QHe7udu8oJi8a7jwSrZ7uahzAzVXwsMpm1BimFDftqRYgmhcsk",
  "key7": "5LAV8V1kDD5frvSfH2qF3YsSTXRjfH8tAwwjz8XLfxopY759RKb8UohMwL9ngNnQUKAcuK3p92mNT9a2Vhdxmpep",
  "key8": "3fNDULgPLXHMbaKsczL9zyAhAguwWfnp8mrsp6eDtBL4bD5GeLWwANDDv1DCKR9TqoQYZ5cXVRBy4ioagNENLgG9",
  "key9": "3R4Yvvf6UiuTBZ8oQQFaVTqjgyKVUmg785sTfTBPU3YDrxBzkfdYSDeTGUxCgWoFDNy9QGCUCdqfuJhAeP3f9o7v",
  "key10": "215wbinVe7xYAscJ4u4F7j9YMJHw5UFtpCNHH29hr1PfAKhBxShK8cGaS1PAkbVCRxEKfSUpAFPTzGhXjff4QiEM",
  "key11": "4H4NN42xB7YatTkEv5DUEDywKugcuJGNuKtQsBwY61v4tgd7JAGHTkdt7k7Wgt3P23N69dDDWVe3z2iUpLMe9xWL",
  "key12": "28KDTbox51sBF7GmLPoABAWisubn5Db2pcxqa6dAGUr9wahxrB1VArgBUK8H4zDX9QTh1Wqx5n3zGnBC3Djyvse8",
  "key13": "3zCi4ugynU4KJxzXDCK9z5AxFmVY64WjSzx8goYvBBSjfD22TCkv3JnxoqnUacbMZpR1sG4uSzpqnf2Awx8Q25tR",
  "key14": "3pNqZYBVPJa432ogw9fysWHPhoxDZvPv5Wbsr3bLjprm6UQu6ftKL6ixMbfyGw1xABhNaSbHBzEbYY7uNC2Eapnn",
  "key15": "4vaYrqiQyYczgtQi5N8u4vbHkgwwdK5mjFUxda8eXG8tUCZQMsC6LMBdzavcasTutEshBTHfFPBm5vArycaYrewK",
  "key16": "4jaJ7fkVwbj2UXTn4VY3sCynQtScvqHEGrhRWd9P3XJgWendmgJevn3XmfkspfNERwgnr3kwtdkEfMX8CovUxZ3J",
  "key17": "321PiRwRFqpY6zaoBBRW9v4z7P5abagdZ4tEwEefEkFpgMyVXjrrQW4x6JDUC5nzuaALrCgUTPfxrk145BzjSBV1",
  "key18": "TSphesyZjZmSRJ56c9uaKE6nf92vZR5k8Qak8iiZa25ZzcrFaPQqdSFkLks5BLZAEHkqFHMi1XDvdX2yJvfSuio",
  "key19": "4MATRo8FxLAah6MfGFmLGkmbqqDEt9PTGXVjK1mnWrkPLnXX6ZJ7tbffF2TJ3x4Jk8f2C46xrxqQypqEzg1CwWvC",
  "key20": "4EYrLrbZH5Y7QrEaTRDkYmrHETuWfn1YEZ59WFevR3fN9s5PLmi2u2ZrF2vFf6pkBfNVNgfMXbtGm66oNS4PvwM",
  "key21": "4HewUvuZhPDBzjYTb1Q8bwfFmHcnMMP5YHuLwVc5MKkksbB2QsTjierpgkQd937Uaj47iEByF3Vc8gYqwyQJEFGc",
  "key22": "4LvDJ1V8w1VqC4JJv3eVkbCpAewNtNf8w4xe83k8WVtTeCSXmUF99HMAsP1nCQhanuzABZn6nrWqUeKep3cwHLmg",
  "key23": "33bvbFm2WAdAd1g7vL8Jj2nzAfm6e5c84pUhj5AWw6dLKRpnFLZADLmVQ3QAcZCeBhqZsmpVgHWvqc4weybpC3Wv",
  "key24": "3xjxMHdCc8x2KW5wn4NMm9kPYzMYzFzh8iwDpvyQNzPp7Z9N9HstoHU8kPpfogii5BiBc4q8W7Pa2EKRS7mENqHZ",
  "key25": "3Mv6FsSGkXFQvQ6D56T4v9c5s9nR8sfo5gzU4dwxYKrtj2gzwFCVktAakyJyxzBdPs27R1WAuKyv6QAB5XzMzSzB",
  "key26": "49dT431nMEURdHRTbgoc6NpEJEZCLLZLKzXMbVAEeZzcS6kRoqEyTSZ58nqV4U8nko3wgaCYoKr6GiefQMxNRR9M",
  "key27": "4Np8zRj4q2qpkvnX5g9Sthh7fLYtQL6TcWDs6Tt3JpGWMepDZMPvdT5N2Jx19YAo89wY5vzGqvuddwKJUbAEr4oA",
  "key28": "2Gv3N48BG4A6Tza2C6AiA39ZrNfMpk8ZTaRHRcLmEeiGLEkMxnU98MJiXpbqDBkygQYjVkRkqdM7QaBVh5gMhsvF",
  "key29": "3tYTARSfK5fdoEuMDF3dR4CFRmUTV7RSE3LfwT7KGpQS8n45iVKhciNbCDcKNswfkHuxU8QRskYAQKPQbU7AyoEZ",
  "key30": "2p4ZzDCYUgohW7uRcxbRftwmECwYMipfgg4dt2TX3eQthBvYe13FW7V1HNWdqm5b2MHLmtXn4KfdrQG6mRPkaFnZ",
  "key31": "2vugJbc8BTGioip1DSUZugCB1PxQ3QzErUwwx6m3Cy74ux6tdZPsaPQp6cnWkbki73KcCRMLeARWGqQWD3WjycJh",
  "key32": "5tbKWLhVCrwGKwoQdYApWzr5b7WhnYDAqeQ8i8rG3p8cdrLyUEnw4cMb2LsNYP5dfit96GmBdmTXQn35FCuSgqzq",
  "key33": "5MEttc7WvUuX4J75AsMLQapefAeTjDvQZHZdpzfG5pLyhRRrSFJJXDna4b1FxoDCzkGoFs5442QYQTgD5srdvaia",
  "key34": "533F5ccCDkcKF41cR6sS6Tvz8wEvnBExL7nWVcj7qURfLfrsTe2VwBj7U1F9wGWZtdL9wsgVPLQXoFTQ1CzCQJ3c"
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
