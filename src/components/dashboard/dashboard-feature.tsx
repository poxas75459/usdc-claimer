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
    "5u4QGGxRbshYJHvVG1Yi5KNxLWzsmgfQmVR91JZkSKAkdj8J5CavCAzRAMqprjSpQ9qZkjoPfHzXXMGHqhbP5wVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Jhon7PbPAUKLjaEzWgoyMuwdS4MXAJVW6nqyhpAa1X6ohCBckNXFBhZ3o8QPzhU9cfboM8zpnF7F2EMB4Ab81g",
  "key1": "2eeKcxLuZE5jfdejYRsu14QTq6UdRG13v4DxQsN5UWo5mCNaVmQ4A8jrLAmwQwE731yeth58EXEuxdHQ5r6BD7hq",
  "key2": "4uKwtKU5jv5yr3sztQ6ccKq6yU2BrH8JfFZ72Dxi3CtUBNPEt58TpJakMQsW8pxFaC6g4Tc8B365XAMqtdrXsRzt",
  "key3": "5Lm6nWvCCjCZDnEmHcTigc3RbPpZ78dtdfaGM1CfGbX5GfxUG7FxqT9oivgLFQBzNxhusRTDx6t1TSZpKSq5WX3k",
  "key4": "5XQax6iB3WTTMbSrhNYuaGXBxrVZX2UFFwEcYUMuRvzZJV5zb9cHhb86oaeEL7rmgytMHe6sybyvcbeazDey7UjF",
  "key5": "CQKEhRsFsqEa2TDGtQs5MpbzwTE2A1gNfnCpqM2Ucm5Sc4JfgJrcPdEUB3icCVAFkMmP3zHus89m278HwfAJMD7",
  "key6": "5M7Qs4bPkbR8E8egdPoAqoqoD6RBsLezCoCvf125FVHCwrhdfhrwuokH9zfakqC7zacRo3syrZANoFJ9eLVqfwiS",
  "key7": "4KD6MfDoY8E3YB15ZZ5q9kLKbDbKRdVVgz5vX4d6c3VWaVjyoXLJmLof8fTq74JAsd2o72PuU7TDpDiFibLqZVnQ",
  "key8": "3uQ6gpYmWxHe3d7KMc8ZQXfTKThnKvxHrodR83F3rj9tvbQ8qGcwQXDdAoe65R8WgWbchXxo8rKPHoFNMb94wkJK",
  "key9": "3bdGbtxEDVaBrgpCd2pMJPBB4zqv5tAcpfSdiXFGxx9p8tsFw8hjXziuhfeqNtsKeB3orBiZhyDc17AATWkRi2NT",
  "key10": "5C3rU7JaSNQRseu6GtyWafsshj8rwwQR58YUHYx3u13DD5ozgxB5bZuMs9YLiajTXRnEsRE9WgzCexSJjyxYBALt",
  "key11": "3wrPyLa5vkZwdfVCckKNii6LmAyEPXRTkQdVrTGUuwSz8HH1kVkdnp8HxZ6qSDoTzzc6cpuQZvvXUDYY8QoXHsBP",
  "key12": "4yskzp2kP6CFmmdXvZCk1hvTjytAA163G2nXxnG63G94XySL2D72MZ8FBkVg5HzNbyBhB1un6b7uRbzC5CmMQQBo",
  "key13": "3qfRsbvqzw4dmdZtPRDTLhyjEuaxgoeHGjwUiEs26yCqyJDeC8nYqiy5G4uiL4GSECNBb8EAEUn9ErNT1hXJQ6ED",
  "key14": "GFobhVpAGinFdbBSccuQC77Rxut4fuJtXBDxHJ4csgDHMEQkq7yVtEXPzuyjEkASEryNoBAkuQT97Ag97pxdyzr",
  "key15": "5ppkQqW8hgbpN3cczHfvnwFjEJDLkVNNXmyzxNNLbGYSzT9FiAdRC4KRgDQx9vpdRmjBqNcpZZL4JsWqk1vknAyz",
  "key16": "3XJ7TMLkBn1kuo7d2vhn9eiDTXQzaEEgcTavsDB4n7TJbqL7o2vJGzK74YnrDo41FmsXEpdiXX9ntcC3EDufT1ZY",
  "key17": "2TdEn7KPtBZ2ygVnUmDSADgmjcJm7roJ2HudFcZGqZx3dHTsVQ2xRNarrGj9DRJuvKcAC9ntVubD8CGhT1bWXR3t",
  "key18": "3ZgMgLecMdsThLEu7v9fpLPTgbbfXaUc1oYec3Dc3B9nHjFu7ZUFFGceEYwuieDvp8rYZe8MUhttJZGrQddYfGtp",
  "key19": "Yj8k73vxsM9KiYeZ4ZCp4WBDVy3LzKw9HShqQ2Qa7bTyp3qcejnYQnh4rfWRL6Q2bHTMLAaMen7jrff6W899vEw",
  "key20": "5Ev4Cgg8XpTvg5uFNbjpBtSwzbyCyXmK6rhJmyDpRPHst549ye7Tw9DAuDhrVABZKPNN26tKkG4tkrNazNcNv4K6",
  "key21": "4YySG9UTAztjFWArn4sJbb4HGeDWA2RvrhV9TXSN5BTcpPWNQdcFJcAKCTLshoWbcjCpAAKsAX3WYcbWQRAF7Jtk",
  "key22": "56fZcsNQvB9WbM1jXzjXA8bCVELyEnzzxMgJiVnetGi87eVRFVYMeQ8LFvcAPAsfjfruTCoLENMooAv5bjN2CAGf",
  "key23": "3Z4YytRf1MjF8Rz8hDheDVm6W4C8NAGBXQ5LEBTUyDvhzCQo1VvrRdZy94SkFpRt7T5R9RmvA2ecC19tWidJuKQr",
  "key24": "28u7K6Kru244wdJ7EWKn7fy4u5iNoWPS8qWw6MoV7SqTwTcpHUQxugyfnRqTYk32CyDNJRNND3zGKHxAXLKcppkH",
  "key25": "5PLPr7i65vbruUZZtfvVsgRvtTgwKUcZNAxgJeh1zvNkDtsoPWWEihFm7cLKCqQVEepEvppczw8WmAP3Uzq2A83o",
  "key26": "2dHgNNsG74FZhLqWEe58SV2dsUgRPC6gQpZa8S938m6gFrexXybBcdYPt2N8D522tN9eiVG48i5xJabeZeqMUq3u",
  "key27": "sWpgdHe68DctBotCuWTVfs9adNtqAe4VibrQdqhmLxAxK6PzrB5ZKsLgp8KY4vGSy6iKRxYGdRcDmdyiXSDn5H7",
  "key28": "63TfBvLBFjkEzmjb7Ka36hyYGSmBKiQNxmuNJo413UUZTgspwUkn1TUSv1maGkh9NkVNqgMC8ECPoodWrbzPZWYw",
  "key29": "5kK4GxqRtLRZCBh26F8bP8TVbMTVDNatYy4dMg1TjA3uLkMR2hmt6ajDnD4fsi7YgMAjND7XAY4uqoBcHvQNwqqZ",
  "key30": "5M6qs9yKhkyS1cE5RWrKg5YMPa1c17yV4QakvMWZZkWC1jPu5P5mveThLa6b38r9WizZJhXhTDY14QmFpghqogY1",
  "key31": "3B6U845d8RAVHgWo4dxVCi64gE28qsty64ShdWL1yJjMst9EVz7nbDS6S6fgfp5mgCctdaxcDYBL6gzA3g6CNHLk",
  "key32": "4b4oTmuqArdFiDrZX4J37av7MwLjLYTncGkSBf3QauPn7XNxAw48rApLPfYHznwCZ6XirUMy11wXhXd5xVKVzGNz",
  "key33": "4dNgy8hUkzLh8txUxmpdnKkutqzAs7adwSWNpaepSJobotSXSB5XwfJCQmpw5XYAPKgAutV5mMePCKKZgUFH1idN",
  "key34": "3AigorS9YmuhsC4ntmyn2Wf2FBqf3vxHqbmFFaFoKo4ki5xR5qMvhBZroeeiDsK1ZxEpGAnAT5DpjhuFxQSDx7vU",
  "key35": "5dqu9UHSQ2utSe2V3YZeSnBywARCKRLS3qWcgRGnKMiW97kL5gvy25gd7VFXLyHapLExdnGY2Unx2QDQnL1JqFe4",
  "key36": "zY64pTpHPDR2RDfxWAj7qaLrbMoSjtptvS5A7rzkuY8HwELHnRpHmhtxdb8w14VJUFvkQB3wPkxc78z7DgMGCiL",
  "key37": "cgoD7e3H8uirj74H8ck3bQjTSnF622NAXmLQJGDF2oqtpJi2nWrW3ZpiuFMKnP94EaSpHRjJ8Eq43VhwgxY3qrw",
  "key38": "39EFajJdCpy2hfNxYFRPKgp2waemGgnhDWnGFhS2sk2wNRUjKLca5iPnQEeQUDhSDHzzEQq9BVUvigCWKpU2J1dz",
  "key39": "PmHCssN3VjFrQBQxQCo2s7tfCU1kdV8x4Aw1CZURVsghWCqen7N5f3TaEbBedySQduMxKbwxTnan7E51pKWuLbh",
  "key40": "4oTc11onFWtGzoXYTbkshxKBeFGFgV6RzJxsCpEp3Z7cU7WLfZDTBwuDqq6245atbS3BjA7B1DeKQX8NKGgMstq5",
  "key41": "4Z1ba7gwRhJK8ikr7mWxJJrzizMAr87w6ns6pGNfQhjDLbwXwmFkiWizcdmnaFm8uJi2hVE4ag84jcyhQrJ15VLk",
  "key42": "31cZrY2ihyryGKQE1LzPhHZhLRr3Uwbm9VyWMTzxe8r2jn9vx7dQpy9xofaK3KaUjXAwnDqBiFHE4STzsP5gRLFv",
  "key43": "4ptFj1XSLD4KJ5Y6jNna6zcx45tkuTTtSrCCpZseFv7EJPwdYd8GABav2339Ff4hBFF3Gnx2JGzG1qGYpyPBxAPA",
  "key44": "24aavRjBusi6DicNiy8BP28KxAtoyektrbu2AFbTTnnN9CEZVZzygauao1YcBoib4HT66tGzqrCecR6rLVt58Hrg",
  "key45": "5YDGaZtBDcch2yrXhyBB8nxihXnWWbquUbzNQASwcsHyoFM9o42HcmRtRvAHsqqoK9Wjc6Qk3HvsEdTXsp6jT3po",
  "key46": "BK1kiB6v4dCJGhM5CD8MMKem6uYeft2c4UiAn1ayqBwxzNr43ShHi8ELJ28dLxy7djMUdtzatrao3pUMrwQQipd",
  "key47": "3knLRnjSvngox9MhWJHH7TATQCHNDdBfnh2ZkF6YvLDhstKRD3ySsGVJo85ZiJLirKHCXFScrvtc58bP749wkRr9",
  "key48": "tnnoSeGQ4Ytg6gGTMD2sYChq6kHfgA7CDAnHpB5E8weHaANR5TDLLRkkCijJAfu23GU7YoQ2HviKMY6wAE1duKp"
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
