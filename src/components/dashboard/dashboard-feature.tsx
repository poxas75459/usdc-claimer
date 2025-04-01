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
    "bzeCxrKDXTiioaBkhjJwqiPyt2KxYQxtFdnoi1YuPG8RSuu2u142syqMDetkCUyTX5izM3iUsNBYghT63DA14Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtLqqXiYTVxHngXow6VSSvSePM1pXFXKU2t2dzvaAGLzkUqWwLhoKS8CchLJVBF82t49mwLtEbXJvhZ7ERrLhiK",
  "key1": "2MgUJoJ4QEspN1z7naJjXv49TqHPtCky58WYbYfaB3jpGT5Pv96gFX8zi6JMnVooMqZEKhWFV6Hzoq4i6KmzjmJT",
  "key2": "2VDHaz6adQNt46qunAvYJPK4HZJqERLQszch7hV58e5D7vmXevmAjeBDuXnuBoFVQcrmG7uDVjPQmspRfuZEZjwE",
  "key3": "2cHboB9RLjh7bExxcyijSnJQwjbBq1CFo59JZYA4mHQiziqmvzVb5FeGs8DtSGCHGa1f43QpHVg28Bof91aURi1v",
  "key4": "8UzgAxpy9Xf9U81Djt1Stp2Zupys3E9kp11JTq4VJGQHtbg7yLUeCMoC5nYcPmZaJzoz36q3V8WfAgEmNrkruAT",
  "key5": "2BNZvG5tYZyZraosocsYZd6ZtkeyKNDEU9RGbyF8Agi1ju91VY39pcg1CBrt8UoXS2S333nu7Ao7bxFZtoaFYt9h",
  "key6": "5m6dV3PcNvtho9v9JiBj58LrYj9me1Kg3LSoMKbYxZjeqUVzEab3eDmTPtGKbrWGnrqZm4KaD14TaEy17UhUeTfo",
  "key7": "22DU523KStjzcA2eAJkr7CR4wejTvfLMm7i87CyZ2xBk1fibzHxd2K6xZBmUAs4Zczhtqa5DptG8cZ1eNoNEbzqL",
  "key8": "1sNzj6SPTzrcybzqdBeJ1RAagKZZFriMqZMGfJbu4fV9M82PvkeC9kGpgdebZtq3diT3C6sbyJWNX1xzQdydjXz",
  "key9": "rSGJcXNhWxMr4ECn2psgfqdjCqaaqhrqmcBK9Bsq2HCHMkQThjHR1agng2gNshygBBJfSg1gTHzAZVYHo8w6pc9",
  "key10": "5ZK2YRa2wDBxeLupCH3aj4dPdMWiTnhTWpHrVN6AMUBuMShcAMYAAR6FMzWws97744W7iE9r3mvKB1tqfPeSEk81",
  "key11": "41A2r6EWcSh8siZYQQHzoX9h2NXJsr6jxvaQ977oANSqB5uzidH9uwsEhaoygAY4HFkbvD92SbMxA656xVPHYdjn",
  "key12": "36emhqcEYJ86NUr4i7rGfVh9GrGp3Pz9wDBtBSHkaPMsNEoDZHcWUWAfGM5VCDAos7VESFS4sxSDCwZZbZFeqN3s",
  "key13": "2QgLHUqk9eB28hmRNWdbeMtJmLgK9MUVURQX65bLFvxFggDJFLd4nVQ6L1P8rCsrkHfQpMncBexYsnDZRA72JoQ2",
  "key14": "5Hn4exKXrPypMZxeV9EotcPh6P56Er8y7uiA8CjoKwM9E77zQvsdNv3o8LgPhrT9143rqES6LqFucSm9Q72grokg",
  "key15": "4T9gE7wVmskCctqqJHwNHWDrink5jsWgzmz5gQTD6M1BE6hYU6mWUEKW7U1LDh3ALDLLhANvajCmrHMkqaRKc1h9",
  "key16": "4dMqTq6w6fPPcn44bCNjqXaWDsX1W4qwzemo5LaL7Jv58ZVbTFs5nS2TbYbDfAJtr2iqQeFmdzWoKnJCPjV4Ub35",
  "key17": "jt8TgKJiXDLSTXvLd2gmgDZTmC8ZPPuzBUjD7D9a1t7ioSUzmsEa2MieZjcv9Ukgs7Ug5rndrB1js7WM65LSSbA",
  "key18": "4cezF2gufLnXVnWMPuTPqQqkiVXPcSZZzAbND2GNYUdWz9tfvWzPebuVDvETapEgyXGewcj587mguxZpHNwfLGFs",
  "key19": "3C1evkjyiDqFQrXRmD9x5SETWGhaj8PpunYrMTp6kt1gSSgBzv6xqVCbsEmdMiWVZL3hNiZSxqCyqeXUDo1aBkL7",
  "key20": "5oj1pxPVx98tj4ES8upnUEBTpwjxnkCEYZXtrCAHDX51JdEuPKZ5BDCVU39RddodiM48LVNA8KVH81QLjrVswfw3",
  "key21": "2NHJa9J5Z4nbhFGtEt7c5kYDZg8DV72KpqZ4gorJbo8gnHExrygbfAUjJ58sSz45MoqqLAveuAY23tdbZsUXtiwQ",
  "key22": "3TxxFBTzVCE7bsvaMMKRzqfmZ5XWV1awUnUe9tfepCkj1F9BQHiUPUzU54rtPUNFdmakgZruBy5sWMERmKBEUCyX",
  "key23": "523E8ukC1N8cz7xgxtq9FzYaovSqwqyAdGkDreYuCruGwTKkgwxAHBnMmnndpgeC7cEpMnwdvr7r3mYeZaRhUciN",
  "key24": "hhnEGeY12338cJGxmPRmWNtEVSquBG3HGpMfKKiyNQ1ZaUcjiGTHLgjrBJ3KcLrVnHozoC6LaAS3RagoxFdpj72",
  "key25": "4wRGFenLpibEJYo7heDU3ojxPiM3KcsMjY46RiZEgghcmJnzKRiF2MytSMzJbchpeEM9Yk3PyrRA8mPdaxjCc6Vn",
  "key26": "2u5wnbv1TiVMvigYkhsekW7EQqRZP7thJjfmR7SZqGgK8g58MxxomYEB5y85phj23BL7d9gm76sexbKQNDYTjgJF",
  "key27": "674TzSwthDC99zcrhbELJaN9FEtrL49AdtZJBsiBVB6JdcdopvcA3LRUvWXzQtxJioQ4ArMvZfLYNDLQ9UkfBCUM",
  "key28": "51gwon2mUkkT89np8zL9upuW9EUUq9M8En5F6Kw4Kad5CUgWo5Tfxuxu86QaYnL7PzQ4qkxL3YXAJrg8YAhtqtW7",
  "key29": "2xgx1FsHeYnfPgatzzgoEGLFxMCLNUjnhyJUMfWoBHwKu6GSxaW3XYKkmFpPSu9JjBT2gKUr4DXGrP8tJpGN8bvN",
  "key30": "5RNJT9t2ts35eGKcWWG1uZWZEDXFMntehzieExzodzB8W7harFLfHPAjwGpdw5DtFPTLDu1FZ2M4LW9xPe3W2TLS",
  "key31": "4S8mfJQWjUUcfsJERwmNHCmZaFfePqwbZmbkBzRhQ6FZ6WfUoa2cfMb2Tm8fJikxWU6nGMFsj2jn1XtzC8Qu9eEf",
  "key32": "5htnEaEwGngtMDfxTQP91fjcUKiNfX48aohvFixCmqiS7AM5zbENTN63g1cyD32nvtet9K7uxbwMX8ZgbACbK3R6",
  "key33": "3SHro23M1j5KTsNd5L1vjMLMsB7h7pDGhitFry6eVLLiPmTBUqtt7Z3FqYrsoCw4UMPFRfJXkkqAdn2LuAwaX6La",
  "key34": "51PTiFtuDAKRkBH5v9QfVm6XVb9k5d27511hG4m9KivKyEmtAYRrexsVW4ADdrrshWmtgzXSEJxkkT8wfgNYSxcK",
  "key35": "ixps9CxJgswADFkc43wccephBLVmGEWhNBkhTbXJuqwBBxdvYdCzC5h3c4egy17pQe2Y49zJLoonw67w46KXSQF",
  "key36": "3AZS8XQ2jVt9pyT5svKZhcEzUnRzhLHmYf13hTf38zCbH11n4YRny5jUU5YHa9Z79LimLYtYaijrCAixmWRL4HL5",
  "key37": "2Jkqz14ZZ3nKZTwKGHfS7C2epqQNirtxkJ6WdomWEy2DHN2PTsK4MBwGs2vukPhAS4GpeH8qBd6brN4fV4SnPgHe",
  "key38": "2yWmr2fZ8UVWbHYV2rsgMfx8kXmS1EjGR9B6wfLa8CzrVs6e4tQkS8zKAqs7obWWqatvjST5PTyz1RBenLoiUsfs",
  "key39": "5q85PgkYAC2VTy16GBuzCd8ArcECWEys5nbUSYuVQ28hcSqK887ApP81zm48V2XWLibntciviuGVzcNfuPansNxX",
  "key40": "gMacMUsczwuGom4rPQ2oM4q4S25GbGyMSSuPpLsY9xSK3mAtGdJPkUpYgo19UxNxeeF9s8qoJmozYBa45niKNP3",
  "key41": "5aAurnbKJJmYCGGZ52vwxmhz6RR9whZiKbHsLbqXrEWySYgPFqhoH3PeLDNo5g5axpnATLq1U7yCLdDxkNi4QBsK",
  "key42": "PuL6zv7M1R2NiByJph8vatyry59Q9qhvyhPndSRYq9W2iMBsNFMymekruZjCfeoz4XbANcA974Jt3ET1UP9ErL9",
  "key43": "22c9e3dke45L2Z5gY1myqAnFfuKvMNK1mhzNSwva6iLwpy6VZWPzVuU9ahD7x6e4JTp6TGG7MgfwQZoUKeTBZYip",
  "key44": "3Mu7iXyPr42i5VNfRkHzQuohdXaF2LqbqPgJzzbrwoms55QNRkjWYDJ3HPneQH9B4GFNCSB4GChogVj63Nft1rsp",
  "key45": "2eJ6dfV6fYCE3FYzN4kEN1NeuLjZ7C88gQW4k2T7Lnpf96QfA3VEqekWDLv9qb9zZhBYSaEaADBNnQxZte2ckPcj",
  "key46": "3Uo3AdHGGRTQK27RzvCcXZwLcW6654KBPes2DTGmsd3fbyucWTXhVA6WSijvMDRhoJYUAndEFZNuxPGLmiHyxB6C",
  "key47": "LCjbGKpSTmqjzTLbJ72Yb9JNq4igATG29pKhyzsVv2Vx6EESBjcUac3rB4WnymkXUPrNJEGheTmcorqiBTB4eWZ"
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
