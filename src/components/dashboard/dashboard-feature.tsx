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
    "TE9fNBev3nXk3MXnUwmCbVaGiQjqJx8S9sti3LkKNF6nWVTw8N1hdWZ7fwMB6UeNPxPSmuBbxUc9uGrBHEt4uho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QfhMiweebSosZBrnA5wsqLKSB49rvNYwN8o5vNr3KmT6jfTB37ZrQhz3GtRk4BtqstEHEyExJcdyxjXmSnd9pk",
  "key1": "3spnNg6s9SjDQZrQBxnhqp5sMFcUEqyUoL51D6S2NUAAPpUFsFurWwsquWbyaySjcR1mQ5MkgEv69z8hbx1xJ3h6",
  "key2": "455kAxfsV7pvVygkHibPj84P5fwsFWpmCuKgGEoBNSfXMk1Zg5sAWR6U6BjD7HegB7YYUQgVsHFcb5u2TGMi5js1",
  "key3": "31DsEN4HJoJffGSBsYZ3XDW1zoYepYdBGoAZ2gyAs6FGurbL4djR28Ci6Jybe3MZFLDQv8ZYnZ7rPXB1wt1NBrJT",
  "key4": "3YUYew5Wq4zmzYVgHLudQFka6QbKTS5FsKRtiGnpJoL4NYWjzC9fJ6xDEa4FKukdajFabz29BN5XekxBgrDdytoN",
  "key5": "5wJEC1LDC2MKAbexzU94pKduvhY6cLAtgB1YTXXnHZihYM3smaLL391BUzE25Ln37mTJX6L5ggJsVvmsahJUzynh",
  "key6": "4YChwSDZK9i4Vmj8BLPo3ZqegD1fqFfcqvMLoirZKtEsCHzqcEbZw4c9xa3K4p5QCfMp9LYmqzbQqva1L1ZZGGv5",
  "key7": "4TykLumiTboE6RZqTnn3w5im8aexCYHtyei85W4ctA1tBfXrAmLvUXmEGmFRHS4wMJvLf2wgka8PyME88LDbmcZC",
  "key8": "2cZfbzBcyKBBnKK9AgVW19eub3SNMyw5cdhHQRFBaBXNcMifvSDM7KwWtEuUmKZV1gWsztC8kN77ZbG2w86ABwkz",
  "key9": "5reMbXXFPS1PYBAPhddmgNDYpkhxAKrcGGa3ikUHCTULbuhCrGofzf4LWyA2sXAUBtKfDpgiGbd95bBhjwGmZZbc",
  "key10": "39FR8VNU7yqTjUvrSERBZ71L1YRs4Whc1wAjUbg7d3sPtvbmP1Z27ipvk68ohc67C3Jsh63gVtikugfKqBGKSzRv",
  "key11": "5pEf4SF4hLg6WVA37AawdxFvKLKFRNYL8VoNJU4ALL4Hm6VnsoyhUD5s5ireKBqsRjdF6V6aXTwS8M87MitUwFFK",
  "key12": "gdvUjMn5dg5tozAUfnPTBJ9GQVum9SztAQA2sJe7TgkhdtVS6up6SqTuaPUBnsnZzGheT6f2oCawgAvNiDBRKmk",
  "key13": "3CZrVDFr59oop8hXKwqjtjPhEiNbqsQqzzn4rWe4NgN8KPTWa2BW17BptaqGerJBfH83wtWXtyy96cPY2mFSvVff",
  "key14": "5uAnXGCTiSVhNSPsPxfdqtASDmi7LTnCUaH632zj1yCfjBMiqKFDXJa4Vt5Fg8w8NoaT3CUzB6Y7AbkSUtAUAQ3x",
  "key15": "zXpxgr3k78Zp4VmxmTAivdB5mcP98NjRzqxizgaqkitJQwmzFuCqkutbst4MuTqmwnHhmY9GQPN7ebajELA7izC",
  "key16": "5dXbHuyJ6ViXgDhcbpdfyRXrmu7UsCjNY1J7VATxK12fuH9DVv8bWjC3iTBnbb4mWz8nJUyP8cSEuu9iugAwuUVZ",
  "key17": "nZyUYkymTJXhn9BE3sxUfUzaFNp3gsjjCgcZG5S1KAk6zVpBPxVfgiaHkgaZdJva8SohaRg1xsobUsmo5oiAL1j",
  "key18": "3dBSvvBTM7rVVJcuzVxfwaRMQuvm27Sw6HTZJLmNQpg6VvAv6ZEo9kBWYz6eseBgwnQNZCswEvQdEv7KB3KLkLiK",
  "key19": "28RFTEmb5AfR6C3yKCxrMrdc2ksCxAxFMGSJ4rpM5tFE3Bb63iZczeNXSnqvx37vCN72y4bfJA2Mpc75hxs3LgLK",
  "key20": "4ppDKtB4h8yaKX6XrKEbXjSXwkPwr4FQP4gGqJrkHdyQnSxWvUauPkGCzbMFhe2qyPVsAZBVGFt3HrAhGhh6rHUe",
  "key21": "57ng2o2bJs7gcN1SX72fu8DKmiiCD1dndU41QfXeNC4y8oorcW1mUNXEWvbPBnZibK8iMgYsJFiHMMppzoYUTGeY",
  "key22": "31JuyTKuBNcWx8RNfW9sjM9n2SQtocMPASqWVteHBnuvM3VfS9f6H1QG5snkSmvw1WkXXfgn3K2VWLXRvgoVzgfw",
  "key23": "6NwUWJxSpfhDY688vqXyhMNut3i1BwAqEXmaPyvRiD7iZ9r8h3c7B9ZguFQKTdrN82uyZi9Pw15ZBq836Hx1GWY",
  "key24": "5e93As9edYsdiNsFQdBgpTLvS5Bv4yeRNJ5vdC3DXbW1iVWgHHGrVB5rUEe7WTkMp12oh5Ef7exq6ksPfcPcnpmk",
  "key25": "5vbCWXvjq49m7hxmh32xQnJmSurLkhKQmfWVukrubYXNEmj1cYLpxg4wBPE5jjnDZpvbWsGZVjKiMpi2Kc5drMHS",
  "key26": "3a2eCrBq57rQeMbPxSqeh5z817WK9GqyFKSbnkoDLkSHu3vBhZXS1VYkDL9KqmHNvgJUkSaXyertYvw5j8sg7MJv",
  "key27": "3o8DJzKBTQmLZchmu63XoWCByNjpgcQD4FwAUZnthtybbxMYAYwQ2pkdmUqrg69reAjCxYSSSicgMGhjnLDvoNL8",
  "key28": "2n3w52SNXdxHgosdBsPgVrym2S9tBPmw2U7iayfpLWFr6A69Vt7ywDx65LgbXvV4CRPCN8o9LGrLvBPj6jZor1AC",
  "key29": "2S5kmMychNXE97He4D61wPs3qy9aSzKVjtmCuBT2tMaZY9EgThhEuJAfuWsE3mQ1zhDmDWoPZ2wQ7wrvEd1etaq3",
  "key30": "2kFzs87ewDv2JeqwdGdGu4QTG5V7q4BuKNvTsg7FScQN45kx5W5H9XHVS4PJEHYANsPmBMdX7o3iDj27vHiNwXR7",
  "key31": "UjrHzkrJgBgj8Dr9ai8K9RMnxTZqu3WJ9HSUbFdivqV8wbfCuBobBbLAeSkkgyTDrBgPJdgp8Ddfvw7jHPZ3gnn",
  "key32": "3utkA6cqYzbsMxZnjro7JGA72AcM3xu982Z9rjg3skd2PXDRmLgPsx61Moa8yJQNFZtnVQevos43PvZi9scWMfNa",
  "key33": "3NMdNVpp7csMsfa66Lfd6zzepc2Yt4sidiDbgeUQGmpf7UZZFpun7NXgbAzuceEPuRGJ5hTWN7A2qB4xFeKuzWgA",
  "key34": "uX8uJZikqbKJGJdf9UMjih5yCRPSnZQa1dGbHzgAD9zs6bpjadA68KXqXhLRkk3N7aeoUiLskDzttcDyn2W52AZ",
  "key35": "446XjbuYErBY1mCgSjCC5RqeReVh9KGejNfD9ZcuomjTndMjXF9znQfiurqK4tSfQrbYSTyvZuJm1sotgdhsVY95",
  "key36": "B97oNwcw8HF7gF8FG4EyemA58TXVpwwAeJh4xjSzY6hdd6fC7PYq7MDfobmkWwki3e4oGTgQGsXfNFXEv5x61W7",
  "key37": "4JiUaV8dn9kVPXaF5vJA1q9yTRoZSyhrx47Bhpiw7aXC9yYojaXerCGm1CFB33EwmJ33XiAT6gq5sUdQhkSuttsJ",
  "key38": "2iCsr4Sa4xF6pDyEbZey2J9DfbYBzHdUxJdLick7JUeU5dNQyJfjMNnrqkjg7ePAnS3NXSjLYjouwBHULZb3X8ua",
  "key39": "2vAqmBXk8SDDAq3iiv3xop42SVmt45mjAwURKxQQMDqKquaJqqz3aQyXU5iUXbcfZ4o8vxDoaeDeTHKmvttVw94C"
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
