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
    "ZedWU76RygzEsuAzJxEkNpg6Jh7bV9W2Qgcip3tHTg8qxqnN9FrZma37fzQghKtyUe5m5NLapzsbR1bf5qW7X38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhsKMaybmARuEUH1zvuktK6Konj2ApyehhFJCdnpnZQVUvPE3fYgwt7c1efZWmtmVYgode5BPvYNbtGTu7uxVo2",
  "key1": "4by5ySqXJ2abYR6LsmgaPPxx9uV2BXM3LGKUYTsb89vibfjuC1MAB9fFZQTNEWQs5VoVpXzFYjokKpHBrqfQ1eXY",
  "key2": "2mcZ3HbGhSTuRHj6T9Mw6c22nZF7LQ6Qi38Hc6X6dKdR6QPbq9SjsuWz1n1LFrUGnj6tyCSeThW5TUdiVfcGa1we",
  "key3": "4KnBunzpEMSqmUwQmY2Ucwvsf2UWMA1sQt8rvnGDKeGT9KvzE5YorryL5sCcwd698hpQeAEGSefFDfcc5vdkep3",
  "key4": "uSFQfSaZKvosvMWznHmWek85YdhfJAyQhzL2F5vyztxSsUmDsrvN1i8xcLXKpwRcKw1NdGGSUDJuSW5FTVGqeVK",
  "key5": "2biGXVX1VfAjKg1PRztHZQpnGjCZevvkdDqrPHkRgUWziyy7F4XPBcC8Y7zytymdkRpZ3mj29TKnp2T1zuwm7uYY",
  "key6": "3K7B9uaG9E4F2pHTeUQBCFyFzi8WDZ6tBtnsPqBj8WKNehopAU8t7N6dbGPkd9onJbjGDebxu5WH41XA2WDqF2Ui",
  "key7": "44atWrU6u663nbchMSTgkD5pdbSg4Ecn5yfUcM4rB28ShreLsXA77zD7bLzA7Lqgw9XpWbLpbXACv8u2sPaumPfk",
  "key8": "6vPhZCQSPBAiTNmyNK78FKMmEDMnq4MD3oLRxjp27HMH9oqCnFNWxRj955TVxvNWadWuaiwtq6VbXckEjYYYEMu",
  "key9": "5CToEB9h5oc478rKu5kAJtgB1V5JCT36Y4UjtorXRFNYZgTGDnVdo5RHGLe1qJF1AjyxR1iwNt5dUtzHJTrtLrDM",
  "key10": "2rXnTyDsLHVzdvuVi4NbyvB32oZKMFbG5CCSGjjXFv5mpXuwk39DqYPuZFnK9D8WQaFS6ZGQ93Dau2fFW1wzS742",
  "key11": "2NU7DxWfwZGCpE3NA8kSZDWYZF23Tpys9RXawDzCLh2rQeehGXkXPt4eTsXr7VT5bRteHtAj33v8NFvta6V3m83Z",
  "key12": "44j2ukgw3SkcyntejYHDeQjxf1bEhKhdjMrDJFVa3eqDaEfR2AQ9uM4Zstcwcth9gLRqJdTBfKscMWisBEMEoQxF",
  "key13": "2gkx28B3qwWzSTC8cJmaCqwfPWdK3U2HeVf2vwRNeDrqeXqG2hxfZx7zTrV1zdpKiJd3iZZ1ez3VGnLhCDbunqwz",
  "key14": "4b6b9om4Po1YGiFPuWxixmBFBRzyWPcLDQMip7QYiMrJ7py5tWVN2wm9hgT74PqyUJHEJZC4q9hT21J1oq8x1sU5",
  "key15": "4ADpe9WUGsLnLtSFGuMmaSckmpZ5bRxGcRKpEGRzK237YAjN8pFhyQkdAF4ozb81SArnku316V9gwfxXfY3LdVam",
  "key16": "3bG4uonG5retEB4kqdxktCeAYDp3ekK6HdV7L4tsNSXe2JQMrvg4cbRcsnMxkvxN4UZLFA1KwhMacyPYfNrmJyXi",
  "key17": "5vRi5YGUQiw4Jpjc7PRHLNZgiq9RLD6vXNQimfnvBSdExbbVxGVze1eLJp33ggPyrhNqNj3Xfk6ouDLXTfAtSRuB",
  "key18": "3SGAXQr25EWCpiRCz3vPcZXZzuS3qiBumE6KF2x3K6o9jo8q9EUDpqoDNKck6WHmHfTgwunBW1bjCuEFSU6CcSZq",
  "key19": "3tV9VWoS1yiJuWC7jo6ri5ftr5TZEMh1Q7PNx6zNXvmQHJTNQv3sSiuNs2Fncr1uE7VeG5ALsrpomv5m4oZDTgKN",
  "key20": "NTx68ct4qZhV4KzfCmvAFTr56MhDFvGJpgiVq1a2UBgBfHZQ7P3s6XYB2SdQmPvWG6cGtKCF6RmJV3reqaNH9Qc",
  "key21": "NgXqBHJFLVMBdee2kQk25fkwaMW9AqCejiwfbAFkHSBkrqHdC7q4TW7GjYZfogG3dJxS6j9bbMjeKi9MAHu6YFw",
  "key22": "2iTkM1rV7EB3J1eVaTZnbx5HCRsvZi9DT93RjQSSskZrMft5UDBYS9TbNFeB9sckTucwSKQM5YDgm6NbwZFgMFar",
  "key23": "2rKJrQtQUheFFQafmzThpjqozB96UjSex5qzUnwiaLCBbz4WnRRTzCVbeYv4Ucf3bGTCNPADYucvFbHkRWN7d4Aj",
  "key24": "457S7m69iveSuDsvrXTLZ35cgmTgmwAhLQeZJiK1EBpeBB1VCHATY8rNQZTvQCHUzfJSDfL398GNTtFadiSYNm4a",
  "key25": "5urnUDCS5dtkjA6Q4iTRK4NtCyoMrfPpDngrYJjemwmNFnUdCnHEgLZce2GE1ySacShXxnU4uK87N9HtUvM4Hnma",
  "key26": "Jt2cWTjz5SuhgqFkpTorTfFzSt78DGt1A6oXRaJaxuppXVoLq5yFguN58o78JSZsVHggrB3hgbaWWGwbHEpagdH",
  "key27": "5A3oyRuiDQ5Q9qdUrPNfEhxgzLKco7wbEmtv4iY9eQBvy8mFaUsz5f5EChry5AcfhqTDcDsvoHcU3U5HRfkJeUkn",
  "key28": "5BSh7N32t35dj74VoTBc6BqSRRwCmwcbqiHkSkHKVooB5RuZuTiqxYXZyGu556igApom7vGHjNc3DyQTJkaV4VQV",
  "key29": "58GiYZhy7EPSyhDurZZHnz71oNB9CYd388y6LQcFcNo6fcno58aSZX6xijg43yfiqTrMAXw3ZwNUCZYLLVri8Atf",
  "key30": "458MGaoS3Ywyc73wE1dxpaV8m9FJ7WDKBh7pA48KpMahmsZUDYwodGr9Wm6qL2si4nbaoKgqcnfdp8xePXaMHgXV",
  "key31": "23sgqiwZJGbaab4UcUXnRL1hveWnY6eqcz6QQ5vq1dFiUjAmDyeLNngcx7umwxjYpA7zjZNTc4iabSLVvhJYUrku",
  "key32": "3Z65nfXGNdfaC3tqb3DSTYkyoJQq5GSVsLR8j2CJqpR7HbNF3AGmRnAfPjDoqAKz741QdrYY47K2o458ssJfHfuN",
  "key33": "5e4iEDiHQHgEQeg5xFC5Hn7DFvz5XnDZQjrYpMDiGVV4FgpjgCKZjomFUhUpj1rSc8EafdcRpUkspgz9xbL7cgvJ",
  "key34": "66nMVc1yVkEk8wJgAaB2Raspz8PrtQFpXQRhfbuMzBfEabhZNtMRAnjRm9kjbB2igW1QhDN8aUwpCWpptH3b92kn",
  "key35": "3vrdedykrPqPg4co89E9pgW9KfpRDZzzghgwdoH5XBtfVuk2bhaF6fGfceMqtLkNuk4YW7CeTy91M5LfHAxEJaUb",
  "key36": "S6u3b2ggnEEqb8Wp6uxaLp1TTQQybgmYDGd7VqgZUTXGxARFDybjDZ47HsyykEUXxdo9iv6PrhCoExQ4HrqYXzd",
  "key37": "3RczfP1NkmhX66xZ1BSC4UWhSX4o9bgi5KsS2gTYSo1TYfkfhpVmn4jubfcXcwvr6uEz8CP7CGfsn6ou4Jr9NzMh",
  "key38": "4mkHfgvfwAjaZx3TTxYLAgc7Td1TUXFvG6yvAeEJaVmFabVcH5nc444tABS6za3sPcBxp1yQEHYc82KkEfL9cC9j",
  "key39": "43ux6AnUkTpD4hRYLVUh4VFAdJBVJHkno7cyaPRf6dKzRjBP91dGpNotCDotQyfvttL8UbjTNfqjLxYNPSjeJbxS",
  "key40": "54TtCp9RqX6ygNCAc31z8bFMuUJXz63wPUUz3abuKrqBuNCGxi4kHShRZDJViVDHEMd6Jt2shAEvdzkKuuk33xVh",
  "key41": "2QFq7x9Jdvwqtgzs6RXB5LyeGo9hNnQjy4RFA8W76WgQmGD7gbyonwS3omP1BU2kxqDaSoKoygwuYTxqM4iLRLhP",
  "key42": "5GFEMK9U1znfUyeADVGXYTWWfSvdiLtuQEjjboX1hbLSw8cCx6BfGaPkJPAyaW4in3hPpUC3NvJdh6iUwrdvkPdc",
  "key43": "54P8GiV2DDZE5nfAev2BxWkwhu7GXcF2FJEFg4fBZraVYBrXujpB8DQaxF4PH4gX3JufcDuM9niTfZQaxnPLPVtF",
  "key44": "mGDSmX1bG1PUKtLLmH28xJwfr9ugeYN8y4K7uEptFpsNLvV4KkwhsMVXrYYrVgqDPF3XU9a4PBAqPaME6akzzLY",
  "key45": "3B2oXx5GiFnqw6jXAM9XMFa6joX662D7cTpRY1HzcMn5YA8kG8t3oiDSqqcuSrJ3dZoDyqmdayJgiXEg5gjxqgUY",
  "key46": "3vRZvA6RgLzvpN9cD9TyNpD75QzC3cQvfoDmyY2mtXYXqrj7aRwLBdQyehhpUTyJLD5AfrJb5xMaE6xnDqgWyKRa",
  "key47": "3opUc6SMxUrnzTr9j3uVDo5FbCdvuhcXHDczgXLM1ixwv9sqky4RtibcPbtRH9yCTSSXT6D4ruXm9eUBFkaeyfNB",
  "key48": "2mmdgQi9u4WpLnGnyWytXAiVh3Y93Gc1485xwRkUB8SpXgRpeywcmhQ1JWDVCLt7zES3oq4BCqpWpmcdiTb6WuuV"
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
